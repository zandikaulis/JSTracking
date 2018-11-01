(window.webpackJsonp = window.webpackJsonp || []).push([
    [139], {
        "+HZ4": function(e, t, n) {},
        "+TUL": function(e, t, n) {},
        "+oVX": function(e, t, n) {
            "use strict";
            n.r(t);
            var i, r = n("mrSG"),
                a = n("cr+I"),
                o = n("q1tI"),
                s = n("fvjX"),
                c = n("/7QA"),
                l = n("ZS2+"),
                d = n("V+GM"),
                u = n("7M8a"),
                m = n("NvVO"),
                p = n("2xye"),
                g = n("d2C5"),
                h = n("jSzL"),
                f = n("GnwI"),
                v = n("c0Zc"),
                k = n("ZDlU"),
                b = n("8/mp"),
                S = n("yR8l"),
                y = n("geRD"),
                C = n("Ue10");
            n("LZ/t");
            ! function(e) {
                e.Toggle = "advanced-notification-settings-toggle__toggle"
            }(i || (i = {}));
            var w, N = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.changeHandler = function() {
                            t.props.onChange(t.props.userId, t.props.isEnabled)
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return o.createElement(C.Cb, {
                            className: "advanced-notification-settings-toggle",
                            display: C.X.Flex,
                            justifyContent: C.Wa.Between,
                            background: C.r.Base,
                            padding: {
                                x: 5,
                                y: 1
                            },
                            borderBottom: !0
                        }, o.createElement(C.Xa, {
                            margin: {
                                left: 5
                            },
                            display: C.X.Flex,
                            flexGrow: 1,
                            alignItems: C.f.Center,
                            flexWrap: C.Ba.NoWrap
                        }, o.createElement(C.Xa, {
                            display: C.X.Flex,
                            flexGrow: 1,
                            flexWrap: C.Ba.NoWrap
                        }, o.createElement(C.Xa, {
                            flexShrink: 0,
                            margin: {
                                right: 1
                            }
                        }, o.createElement(C.Ua, {
                            linkTo: "/" + this.props.login
                        }, o.createElement(C.q, {
                            src: this.props.thumbnail,
                            alt: this.props.text,
                            size: 40
                        }))), o.createElement(C.Xa, {
                            flexGrow: 1,
                            display: C.X.Flex,
                            flexDirection: C.Aa.Column
                        }, o.createElement(C.W, {
                            fontSize: C.Ca.Size5
                        }, o.createElement(C.U, {
                            to: "/" + this.props.login
                        }, this.props.text)), o.createElement(C.W, {
                            type: C.Tb.Span,
                            color: C.O.Alt2
                        }, this.props.description))), o.createElement(C.Xa, {
                            display: C.X.Flex,
                            flexGrow: 0,
                            flexShrink: 0
                        }, o.createElement(C.Xa, {
                            margin: {
                                right: 1
                            }
                        }, o.createElement(C.Vb, {
                            checked: this.props.isEnabled,
                            onChange: this.changeHandler,
                            "data-test-selector": i.Toggle,
                            id: this.props.userId
                        })), o.createElement(C.Xa, {
                            className: this.props.saved ? "advanced-notification-settings-toggle__saved" : "advanced-notification-settings-toggle__saved--hide",
                            padding: {
                                x: 1
                            }
                        }, o.createElement(C.W, {
                            fontSize: C.Ca.Size5,
                            color: C.O.Link
                        }, Object(c.d)("Saved", "AdvancedNotificationSettingsToggle"))))))
                    }, t
                }(o.Component),
                E = n("55wC"),
                _ = (n("HoeP"), n("9+K3"));
            ! function(e) {
                e.Description = "advanced-notificatino-settings__description", e.Header = "advanced-notificatino-settings__header"
            }(w || (w = {}));
            var O, T = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            collapsed: t.props.startCollapsed,
                            saved: new Set
                        }, t.toggleCollapse = function() {
                            t.setState(function(e) {
                                return {
                                    collapsed: !e.collapsed
                                }
                            })
                        }, t.toggleChannelNotification = function(e, n) {
                            return r.__awaiter(t, void 0, void 0, function() {
                                var t, i, a, o, s;
                                return r.__generator(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            return this.props.data && this.props.data.currentUser && this.props.setAdvancedNotificationSetting ? (t = {
                                                disableNotifications: n,
                                                targetID: e
                                            }, i = {
                                                followUser: {
                                                    __typename: "FollowUserPayload",
                                                    follow: {
                                                        disableNotifications: n,
                                                        __typename: "Follow"
                                                    }
                                                }
                                            }, a = Object(y.b)(t, i), [4, this.props.setAdvancedNotificationSetting(a)]) : [2];
                                        case 1:
                                            return o = r.sent(), s = function(t) {
                                                if (!t.currentUser || !o.data.followUser || !o.data.followUser.follow) return t;
                                                for (var n = 0, i = t.currentUser.follows.edges; n < i.length; n++) {
                                                    var r = i[n];
                                                    r.node.id === e && (r.notificationSettings.isEnabled = !o.data.followUser.follow.disableNotifications)
                                                }
                                                return t
                                            }, Object(y.e)(_, {
                                                limit: 50
                                            }, s), this.markSaved(e), [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this.props.data,
                            t = e.currentUser,
                            n = e.loading,
                            i = e.error;
                        if (n && !t) return o.createElement(C.Cb, {
                            padding: {
                                y: 1
                            },
                            borderBottom: !0
                        }, o.createElement(C.Za, {
                            fillContent: !0
                        }));
                        if (i || !t || !t.follows || null === t.follows.totalCount) return o.createElement(k.a, {
                            message: Object(c.d)("Error loading data.", "AdvancedNotificationSettings")
                        });
                        var r = Object(c.d)("{followCount, plural, one {You follow # channel} other {You follow # channels}}", {
                                followCount: t.follows.totalCount
                            }, "AdvancedNotificationSettings"),
                            a = o.createElement(C.Cb, {
                                background: C.r.Alt2,
                                borderBottom: !0
                            }, o.createElement(C.Ua, {
                                onClick: this.toggleCollapse,
                                type: C.Va.Alpha,
                                "data-test-selector": w.Header
                            }, o.createElement(C.Xa, {
                                display: C.X.Flex,
                                padding: {
                                    x: 2,
                                    y: 1
                                }
                            }, o.createElement(C.Xa, {
                                className: "advanced-notification-settings__header",
                                flexGrow: 0
                            }, o.createElement(C.W, {
                                fontSize: C.Ca.Size5,
                                color: C.O.Alt2,
                                bold: !0
                            }, Object(c.d)("Advanced", "AdvancedNotificationSettings"))), o.createElement(C.Xa, {
                                padding: {
                                    x: 1
                                },
                                flexGrow: 1
                            }, o.createElement(C.W, {
                                "data-test-selector": w.Description,
                                fontSize: C.Ca.Size5,
                                color: C.O.Alt2
                            }, r)), o.createElement(C.Xa, {
                                className: this.state.collapsed ? "advanced-notification-settings--collapse" : "advanced-notification-settings--expand",
                                flexGrow: 0,
                                flexShrink: 1,
                                display: C.X.Flex,
                                justifyContent: C.Wa.Center
                            }, o.createElement(C.qb, {
                                asset: C.rb.AngleRight,
                                type: C.sb.Alt2
                            }))))),
                            s = !(n || i || !t.follows.pageInfo || !t.follows.pageInfo.hasNextPage);
                        return t.follows.totalCount > 0 ? this.state.collapsed ? o.createElement(C.Cb, null, a) : o.createElement(C.Cb, null, a, o.createElement(C.Cb, {
                            borderBottom: !0,
                            padding: 2
                        }, o.createElement(C.Xa, {
                            padding: {
                                bottom: 1
                            }
                        }, o.createElement(C.W, {
                            fontSize: C.Ca.Size5,
                            color: C.O.Alt2
                        }, Object(c.d)("Manage which channels you receive notifications for.", "AdvancedNotificationSettings"))), o.createElement(C.Xa, {
                            padding: {
                                bottom: 1
                            }
                        }, o.createElement(C.W, {
                            fontSize: C.Ca.Size4,
                            color: C.O.Alt
                        }, r)), o.createElement(C.Cb, {
                            className: "advanced-notification-settings__toggle-container",
                            borderTop: !0,
                            borderLeft: !0,
                            borderRight: !0,
                            margin: {
                                bottom: .5
                            }
                        }, this.renderToggles(), o.createElement(b.a, {
                            loadMore: this.props.loadMore,
                            enabled: s,
                            pixelThreshold: 200
                        })))) : null
                    }, t.prototype.renderToggles = function() {
                        var e = this.props.data.currentUser;
                        if (e && e.follows && e.follows.edges) {
                            for (var t = [], n = 0, i = e.follows.edges; n < i.length; n++) {
                                var r = i[n];
                                if (r && r.node && r.node.id && r.node.followers && r.node.displayName && r.node.login && r.notificationSettings) {
                                    var a = r.node.followers && null !== r.node.followers.totalCount ? Object(c.d)("{followerCount,number} followers", {
                                        followerCount: r.node.followers.totalCount
                                    }, "AdvancedNotificationSettings") : null;
                                    t.push(o.createElement(N, {
                                        userId: r.node.id,
                                        text: r.node.displayName,
                                        login: r.node.login,
                                        description: a,
                                        thumbnail: r.node.profileImageURL,
                                        isEnabled: r.notificationSettings.isEnabled,
                                        onChange: this.toggleChannelNotification,
                                        saved: this.getDisplaySaved(r.node.id),
                                        key: r.node.id
                                    }))
                                }
                            }
                            return t
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
                D = Object(s.compose)(Object(S.a)(_, {
                    options: function() {
                        return {
                            fetchPolicy: "cache-and-network",
                            variables: {
                                limit: 50
                            }
                        }
                    },
                    props: function(e) {
                        return r.__assign({}, e, {
                            loadMore: function() {
                                return e.data.fetchMore({
                                    query: _,
                                    variables: r.__assign({}, e.data.variables, {
                                        cursor: e.data.currentUser && e.data.currentUser.follows.edges[e.data.currentUser.follows.edges.length - 1].cursor
                                    }),
                                    updateQuery: function(e, t) {
                                        var n = t.fetchMoreResult;
                                        return e.currentUser && n.currentUser ? {
                                            currentUser: r.__assign({}, n.currentUser, {
                                                follows: r.__assign({}, n.currentUser.follows, {
                                                    edges: Object(y.c)(e.currentUser.follows.edges, n.currentUser.follows.edges)
                                                })
                                            })
                                        } : n
                                    }
                                })
                            }
                        })
                    }
                }), Object(S.a)(E, {
                    name: "setAdvancedNotificationSetting"
                }), Object(f.b)("AdvancedNotificationSettings"))(T),
                U = n("oJmH"),
                F = n("gOYK"),
                x = n("Ahlu");
            n("+TUL");
            ! function(e) {
                e.Container = "browser-push-notifications-settings__container", e.Toggle = "browser-push-notifications-settings__toggle"
            }(O || (O = {}));
            var j, I = c.p.logger.withCategory("browser-push-notifications-settings"),
                P = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            hide: !1,
                            loading: !0,
                            deciding: !0,
                            hasSubscription: !1
                        }, t.toggle = function() {
                            return r.__awaiter(t, void 0, void 0, function() {
                                var e;
                                return r.__generator(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return this.setState({
                                                deciding: !0
                                            }), [4, F.a.hasPushSubscription()];
                                        case 1:
                                            if (!t.sent()) return [3, 6];
                                            t.label = 2;
                                        case 2:
                                            return t.trys.push([2, 4, , 5]), [4, F.a.userUnsubscribe(x.a.Settings)];
                                        case 3:
                                            return t.sent(), [3, 5];
                                        case 4:
                                            return e = t.sent(), I.error(e, "user unsubscribe failed"), [3, 5];
                                        case 5:
                                            return [3, 8];
                                        case 6:
                                            return [4, F.a.userSubscribe(x.a.Settings)];
                                        case 7:
                                            if (t.sent(), Object(h.a)()) return this.setState({
                                                hide: !0
                                            }), [2];
                                            t.label = 8;
                                        case 8:
                                            return [4, this.updateSubscriptionState()];
                                        case 9:
                                            return t.sent(), this.setState({
                                                deciding: !1
                                            }), [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        return r.__awaiter(this, void 0, void 0, function() {
                            var e;
                            return r.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return t.trys.push([0, 3, , 4]), [4, F.a.initialize()];
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
                        var e = this.state.hasSubscription ? Object(c.d)("Turn Off", "BrowserPushNotificationsSettings") : Object(c.d)("Turn On", "BrowserPushNotificationsSettings");
                        return o.createElement(C.Cb, {
                            borderTop: !0,
                            padding: {
                                right: 2,
                                y: 1
                            },
                            margin: {
                                top: 1
                            },
                            "data-test-selector": O.Container,
                            "data-a-target": "browser-push-notifications-settings"
                        }, o.createElement(C.Cb, {
                            className: "browser-push-notification-settings",
                            padding: {
                                left: 5,
                                right: 4
                            },
                            display: C.X.Flex,
                            margin: {
                                x: 5
                            }
                        }, o.createElement(C.Xa, {
                            className: "browser-push-notification-settings__body",
                            display: C.X.Flex,
                            flexWrap: C.Ba.NoWrap,
                            flexGrow: 1
                        }, o.createElement(C.Xa, {
                            margin: {
                                right: 1
                            },
                            flexGrow: 1
                        }, o.createElement(C.W, {
                            fontSize: C.Ca.Size4,
                            color: C.O.Alt
                        }, Object(c.d)("Receive Browser Notifications for this Device", "BrowserPushNotificationsSettings")), o.createElement(C.Xa, {
                            padding: {
                                top: .5
                            }
                        }, o.createElement(C.W, {
                            fontSize: C.Ca.Size5,
                            color: C.O.Alt2
                        }, Object(c.d)("See notifications at the corner of your screen, even when you’re not on Twitch", "BrowserPushNotificationsSettings")))), o.createElement(C.Xa, {
                            flexShrink: 0
                        }, o.createElement(C.z, {
                            "data-test-selector": O.Toggle,
                            disabled: this.state.deciding,
                            onClick: this.toggle
                        }, e)))))
                    }, t.prototype.updateSubscriptionState = function() {
                        return r.__awaiter(this, void 0, void 0, function() {
                            var e;
                            return r.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, F.a.hasPushSubscription()];
                                    case 1:
                                        return e = t.sent(), this.setState({
                                            hasSubscription: e
                                        }), [2]
                                }
                            })
                        })
                    }, t
                }(o.Component),
                L = Object(U.compose)(Object(f.b)("BrowserPushNotificationsSettings"))(P);
            n("BpmJ");
            ! function(e) {
                e.Toggle = "platform-notification-settings-toggle__toggle"
            }(j || (j = {}));
            var A, R = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.changeHandler = function() {
                            t.props.onChange(t.props.category, t.props.isEnabled)
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return o.createElement(C.Cb, {
                            className: "platform-notification-settings-toggle",
                            display: C.X.Flex,
                            flexWrap: C.Ba.NoWrap,
                            alignItems: C.f.Start,
                            background: C.r.Alt,
                            margin: {
                                top: 1,
                                bottom: .5
                            },
                            padding: {
                                right: 5
                            }
                        }, o.createElement(C.Xa, {
                            className: "platform-notification-settings-toggle__body",
                            display: C.X.Flex,
                            flexDirection: C.Aa.Column,
                            flexGrow: 1,
                            padding: {
                                right: 1
                            }
                        }, o.createElement(C.Xa, {
                            margin: {
                                bottom: .5
                            },
                            flexGrow: 1,
                            display: C.X.InlineFlex
                        }, o.createElement(C.Xa, {
                            flexGrow: 0,
                            flexShrink: 0,
                            padding: {
                                right: 1
                            }
                        }, o.createElement(C.W, {
                            fontSize: C.Ca.Size4
                        }, this.props.text)), this.renderSmartNotificationsBanner()), o.createElement(C.W, {
                            fontSize: C.Ca.Size5,
                            color: C.O.Alt2
                        }, this.props.description)), o.createElement(C.Xa, {
                            display: C.X.Flex,
                            margin: {
                                top: .5
                            },
                            flexGrow: 0,
                            flexShrink: 0
                        }, o.createElement(C.Xa, {
                            margin: {
                                right: 1
                            }
                        }, o.createElement(C.Vb, {
                            checked: this.props.isEnabled,
                            disabled: this.props.disabled,
                            onChange: this.changeHandler,
                            "data-test-selector": j.Toggle
                        })), o.createElement(C.Xa, {
                            className: this.props.saved ? "platform-notification-settings-toggle__saved" : "platform-notification-settings-toggle__saved--hide",
                            padding: {
                                x: 1
                            }
                        }, o.createElement(C.W, {
                            fontSize: C.Ca.Size5,
                            color: C.O.Link
                        }, Object(c.d)("Saved", "PlatformNotificationSettingsToggle")))))
                    }, t.prototype.renderSmartNotificationsBanner = function() {
                        if ("LIVE" !== this.props.category || !this.props.smartEnabled) return null;
                        var e = Object(c.d)("Smart Notifications", "PlatformNotificationSettingsToggle");
                        return o.createElement(C.Xa, {
                            margin: {
                                top: .5
                            },
                            flexGrow: 1,
                            flexShrink: 0
                        }, o.createElement(C.eb, {
                            label: e,
                            type: C.fb.Success
                        }))
                    }, t
                }(o.Component),
                B = n("7PeK"),
                q = n("fWal"),
                z = n("pxuV"),
                M = (n("yqqX"), n("t7x/")),
                X = "ALL",
                G = "smart";
            ! function(e) {
                e.Explanation = "explanation", e.Description = "description", e.AllToggle = "all-toggle"
            }(A || (A = {}));
            var V, H, W = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.toggleAll = function() {
                            t.toggleSetting(t.stateForSmart)
                        }, t.toggleSetting = function(e) {
                            return r.__awaiter(t, void 0, void 0, function() {
                                var t, n, i, a, o, s;
                                return r.__generator(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            return this.props.data.currentUser && this.props.setNotificationSetting ? (n = {
                                                category: X,
                                                platform: G,
                                                settingState: t = e ? "off" : "on"
                                            }, i = {
                                                setNotificationSetting: {
                                                    settingState: t,
                                                    __typename: "SetNotificationSettingPayload"
                                                }
                                            }, a = Object(y.b)(n, i), [4, this.props.setNotificationSetting(a)]) : [2];
                                        case 1:
                                            return o = r.sent(), s = function(e) {
                                                if (!e.currentUser || !e.currentUser.notificationSettings || !o.data.setNotificationSetting) return e;
                                                var t = o.data.setNotificationSetting.settingState;
                                                return e.currentUser.notificationSettings = e.currentUser.notificationSettings.map(function(e) {
                                                    return e.category === X && (e.platforms = e.platforms.map(function(e) {
                                                        return e.platformName === G && (e.isEnabled = "on" === t, e.settingState = t), e
                                                    })), e
                                                }), e
                                            }, Object(y.e)(M, {}, s), [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.data.loading || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentDidUpdate = function(e) {
                        e.data && !e.data.loading || this.props.data.loading || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return this.props.data.error ? o.createElement(k.a, {
                            message: Object(c.d)("Error loading data.", "SmartNotificationSettings")
                        }) : o.createElement(B.a, null, o.createElement(q.a, {
                            label: this.props.explanation,
                            checked: this.stateForSmart,
                            description: this.props.description,
                            onChange: this.toggleAll,
                            id: "smart-notifications-settings-toggle",
                            showPlaceholder: this.props.data.loading
                        }))
                    }, t.prototype.getSettings = function() {
                        var e = null;
                        if (!this.props.data.currentUser || !this.props.data.currentUser.notificationSettings) return null;
                        for (var t = 0, n = this.props.data.currentUser.notificationSettings; t < n.length; t++) {
                            var i = n[t];
                            i.category === X && (e = i.platforms)
                        }
                        if (!e) return null;
                        for (var r = 0, a = e; r < a.length; r++) {
                            var o = a[r];
                            if (o.platformName === G) return o
                        }
                        return null
                    }, Object.defineProperty(t.prototype, "stateForSmart", {
                        get: function() {
                            var e = this.getSettings();
                            return !!e && e.isEnabled
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(o.Component),
                Q = Object(s.compose)(Object(f.b)("SmartNotificationSettings"), Object(S.a)(M, {
                    options: function() {
                        return {
                            fetchPolicy: "cache-and-network"
                        }
                    }
                }), Object(S.a)(z, {
                    name: "setNotificationSetting"
                }))(W),
                Y = n("F1Gg"),
                K = (n("P6LE"), n("1glA"));
            ! function(e) {
                e.onsite = "onsite", e.email = "email", e.push = "push"
            }(V || (V = {})),
            function(e) {
                e.DisplayName = "platform-notification-settings__display-name", e.Explanation = "platform-notification-settings__explanation", e.Description = "platform-notification-settings__description", e.ToggleAll = "platform-notification-settings__all-toggle", e.SavedIndicator = "platform-notification-settings__saved-indicator", e.Header = "platform-notification-settings__collapsible-header"
            }(H || (H = {}));
            var $ = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            collapsed: t.props.startCollapsed,
                            saved: new Set
                        }, t.VisibleSettings = [{
                            category: "LIVE",
                            name: Object(c.d)("Live", "PlatformNotificationSettings"),
                            description: Object(c.d)("When a streamer I follow goes Live", "PlatformNotificationSettings")
                        }, {
                            category: "VIDEOS",
                            name: Object(c.d)("Video Broadcast", "PlatformNotificationSettings"),
                            description: Object(c.d)("When a channel I follow starts a Vodcast. This also includes Video Comment notifications", "PlatformNotificationSettings")
                        }, {
                            category: "CLIPS",
                            name: Object(c.d)("Clips", "PlatformNotificationSettings"),
                            description: Object(c.d)("Receive notifications for clips you made and clips made by your viewers", "PlatformNotificationSettings")
                        }, {
                            category: "EVENTS",
                            name: Object(c.d)("Events", "PlatformNotificationSettings"),
                            description: Object(c.d)("Any time an event I follow starts", "PlatformNotificationSettings")
                        }, {
                            category: "CHAT",
                            name: Object(c.d)("Chat", "PlatformNotificationSettings"),
                            description: Object(c.d)("Any time there’s Rooms activity related to me.", "PlatformNotificationSettings")
                        }, {
                            category: "FRIENDS",
                            name: Object(c.d)("Friends", "PlatformNotificationSettings"),
                            description: Object(c.d)("When a friend sends me a message", "PlatformNotificationSettings")
                        }, {
                            category: "STREAMER",
                            name: Object(c.d)("Your Channel", "PlatformNotificationSettings"),
                            description: Object(c.d)("Receive notifications when viewers follow your channel or auto host you", "PlatformNotificationSettings")
                        }, {
                            category: "MODERATOR",
                            name: Object(c.d)("Moderator", "PlatformNotificationSettings"),
                            description: Object(c.d)("Any time I get a notification as a moderator", "PlatformNotificationSettings")
                        }, {
                            category: "COMMERCE",
                            name: Object(c.d)("Gifts and Rewards", "PlatformNotificationSettings"),
                            description: Object(c.d)("Receive notifications for drops, crates, and subscription gifts", "PlatformNotificationSettings")
                        }, {
                            category: "SUB_MESSAGES",
                            name: Object(c.d)("Channels you Subscribe to", "PlatformNotificationSettings"),
                            description: Object(c.d)("Receive subscriber emails from channels you subscribe to", "PlatformNotificationSettings")
                        }, {
                            category: "3PDEVELOPERS",
                            name: Object(c.d)("Developer Updates", "PlatformNotificationSettings"),
                            description: Object(c.d)("Activities related to company management, game approvals, and other console related communications.", "PlatformNotificationSettings")
                        }], t.toggleAll = function() {
                            t.toggleSettingCategory("ALL", t.getGlobalStateForPlatform())
                        }, t.toggleCollapse = function() {
                            t.setState(function(e) {
                                return {
                                    collapsed: !e.collapsed
                                }
                            })
                        }, t.toggleSettingCategory = function(e, n) {
                            return r.__awaiter(t, void 0, void 0, function() {
                                var t, i, a, o, s, c, l = this;
                                return r.__generator(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            return this.props.data && this.props.data.currentUser && this.props.setNotificationSetting ? (t = n ? "off" : "on", i = {
                                                category: e,
                                                platform: this.props.platformName,
                                                settingState: t
                                            }, a = {
                                                setNotificationSetting: {
                                                    settingState: t,
                                                    __typename: "SetNotificationSettingPayload"
                                                }
                                            }, o = Object(y.b)(i, a), [4, this.props.setNotificationSetting(o)]) : [2];
                                        case 1:
                                            return s = r.sent(), c = function(t) {
                                                if (!t.currentUser || !t.currentUser.notificationSettings || !s.data.setNotificationSetting) return t;
                                                var n = s.data.setNotificationSetting.settingState;
                                                return t.currentUser.notificationSettings = t.currentUser.notificationSettings.map(function(t) {
                                                    return t.category === e && (t.platforms = t.platforms.map(function(e) {
                                                        return e.platformName === l.props.platformName && (e.isEnabled = "on" === n, e.settingState = n), e
                                                    })), t
                                                }), t
                                            }, Object(y.e)(K, {}, c), this.markSaved(e), [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        if (!this.props.data || this.props.data.loading && !this.props.data.currentUser) return o.createElement(C.Xa, {
                            padding: 1
                        }, o.createElement(C.Za, {
                            fillContent: !0
                        }));
                        if (this.props.data.error) return o.createElement(k.a, {
                            message: Object(c.d)("Error loading data.", "PlatformNotificationSettings")
                        });
                        if (!this.props.data.currentUser) return o.createElement(C.Cb, {
                            margin: {
                                top: 1
                            }
                        }, o.createElement(k.a, {
                            message: Object(c.d)("You must be logged in to update your settings.", "PlatformNotificationSettings")
                        }));
                        var e = o.createElement(C.Cb, {
                            background: C.r.Alt2,
                            borderBottom: !0,
                            "data-test-selector": H.Header
                        }, o.createElement(C.Ua, {
                            onClick: this.toggleCollapse,
                            type: C.Va.Alpha
                        }, o.createElement(C.Xa, {
                            display: C.X.Flex,
                            padding: {
                                x: 2,
                                y: 1
                            }
                        }, o.createElement(C.Xa, {
                            className: "platform-notification-settings__header",
                            flexGrow: 0
                        }, o.createElement(C.W, {
                            "data-test-selector": H.DisplayName,
                            fontSize: C.Ca.Size5,
                            color: C.O.Alt2,
                            bold: !0
                        }, this.props.displayName)), o.createElement(C.Xa, {
                            padding: {
                                x: 1
                            },
                            flexGrow: 1
                        }, o.createElement(C.W, {
                            fontSize: C.Ca.Size5,
                            color: C.O.Alt2
                        }, this.getSettingTurnedOnMessage())), o.createElement(C.Xa, {
                            className: this.state.collapsed ? "platform-notification-settings--collapse" : "platform-notification-settings--expand",
                            flexGrow: 0,
                            flexShrink: 1,
                            display: C.X.Flex,
                            justifyContent: C.Wa.Center
                        }, o.createElement(C.qb, {
                            asset: C.rb.AngleRight,
                            type: C.sb.Alt2
                        })))));
                        return this.state.collapsed ? o.createElement(C.Cb, null, e) : o.createElement(C.Cb, null, e, o.createElement(C.Cb, {
                            padding: 2,
                            borderBottom: !0
                        }, o.createElement(C.Xa, {
                            padding: {
                                bottom: 1
                            }
                        }, o.createElement(C.W, {
                            "data-test-selector": H.Description,
                            fontSize: C.Ca.Size5,
                            color: C.O.Alt2
                        }, this.props.description)), o.createElement(C.Cb, {
                            display: C.X.Flex,
                            margin: {
                                y: .5
                            },
                            borderBottom: !0
                        }, o.createElement(C.Xa, {
                            className: "platform-notification-settings__all",
                            display: C.X.Flex,
                            padding: {
                                bottom: 1,
                                right: 5
                            },
                            justifyContent: C.Wa.Center,
                            flexGrow: 1,
                            flexWrap: C.Ba.NoWrap
                        }, o.createElement(C.Xa, {
                            className: "platform-notification-settings__all-body",
                            flexGrow: 1,
                            padding: {
                                right: 1
                            }
                        }, o.createElement(C.W, {
                            fontSize: C.Ca.Size4,
                            color: C.O.Alt,
                            "data-test-selector": H.Explanation
                        }, this.props.explanation)), o.createElement(C.Xa, {
                            display: C.X.Flex,
                            flexGrow: 0,
                            flexShrink: 0
                        }, o.createElement(C.Xa, {
                            margin: {
                                right: 1
                            }
                        }, o.createElement(C.Vb, {
                            "data-test-selector": H.ToggleAll,
                            checked: this.getGlobalStateForPlatform(),
                            onChange: this.toggleAll
                        })), o.createElement(C.Xa, {
                            padding: {
                                x: 1
                            },
                            "data-test-selector": H.SavedIndicator,
                            className: this.getDisplaySaved("ALL") ? "platform-notification-settings__saved" : "platform-notification-settings__saved--hide"
                        }, o.createElement(C.W, {
                            fontSize: C.Ca.Size5,
                            color: C.O.Link
                        }, Object(c.d)("Saved", "PlatformNotificationSettings")))))), o.createElement(C.Xa, {
                            className: "platform-notification-settings__toggle-container",
                            display: C.X.Flex,
                            flexDirection: C.Aa.Column,
                            margin: {
                                left: 5
                            },
                            padding: {
                                left: 5
                            }
                        }, this.renderToggles()), this.props.extraSettings))
                    }, t.prototype.getSettingByCategory = function(e) {
                        var t = null,
                            n = this.props.data;
                        if (!n || !n.currentUser || !n.currentUser.notificationSettings) return null;
                        for (var i = 0, r = n.currentUser.notificationSettings; i < r.length; i++) {
                            var a = r[i];
                            a.category === e && (t = a.platforms)
                        }
                        if (!t) return null;
                        for (var o = 0, s = t; o < s.length; o++) {
                            var c = s[o];
                            if (c.platformName === this.props.platformName) return c
                        }
                        return null
                    }, t.prototype.getSettingTurnedOnMessage = function() {
                        for (var e = 0, t = 0, n = 0, i = this.VisibleSettings; n < i.length; n++) {
                            var r = i[n],
                                a = this.getSettingByCategory(r.category);
                            a && (e++, a.isEnabled && t++)
                        }
                        return 0 !== t && this.getGlobalStateForPlatform() ? t < e ? Object(c.d)("Some notifications turned on", "PlatformNotificationSettings") : Object(c.d)("All notifications turned on", "PlatformNotificationSettings") : Object(c.d)("All notifications turned off", "PlatformNotificationSettings")
                    }, t.prototype.getGlobalStateForPlatform = function() {
                        var e = this.getSettingByCategory("ALL");
                        return !!e && e.isEnabled
                    }, t.prototype.isSmartEnabled = function() {
                        var e = null,
                            t = this.props.data;
                        if (!t || !t.currentUser || !t.currentUser.notificationSettings) return !1;
                        for (var n = 0, i = t.currentUser.notificationSettings; n < i.length; n++) {
                            var r = i[n];
                            if (r.category === X) {
                                e = r.platforms;
                                break
                            }
                        }
                        if (!e) return !1;
                        for (var a = 0, o = e; a < o.length; a++) {
                            var s = o[a];
                            if (s.platformName === G) return "on" === s.settingState
                        }
                        return !1
                    }, t.prototype.renderToggles = function() {
                        for (var e = [], t = 0, n = this.VisibleSettings; t < n.length; t++) {
                            var i = n[t],
                                r = this.getSettingByCategory(i.category);
                            r && e.push(o.createElement(R, {
                                category: i.category,
                                text: i.name,
                                description: i.description,
                                isEnabled: r.isEnabled,
                                onChange: this.toggleSettingCategory,
                                disabled: !this.getGlobalStateForPlatform(),
                                saved: this.getDisplaySaved(i.category),
                                smartEnabled: this.isSmartEnabled(),
                                key: i.category
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
                Z = Object(s.compose)(Object(f.b)("PlatformNotificationSettings"), Object(S.a)(K, {
                    options: function() {
                        return {
                            fetchPolicy: "cache-and-network"
                        }
                    }
                }), Object(S.a)(Y, {
                    name: "setNotificationSetting"
                }))($),
                J = (n("NkC9"), l.a.wrap(function() {
                    return n.e(137).then(n.bind(null, "ZaEz"))
                }, "DesktopNotificationSettings")),
                ee = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.onRender()
                    }, t.prototype.componentDidUpdate = function() {
                        this.onRender()
                    }, t.prototype.render = function() {
                        var e = "" !== location.search ? a.parse(location.search) : {},
                            t = !!e["open-advanced"] && "true" === e["open-advanced"];
                        return o.createElement(o.Fragment, null, o.createElement(v.a, {
                            title: Object(c.d)("Notifications", "SettingsNotificationsPage"),
                            description: Object(c.d)("Get the notifications you care about, where you want to see them.", "SettingsNotificationsPage")
                        }), o.createElement(Q, {
                            description: Object(c.d)("When turned on, your notifications are sent to where you are. When you’re active on Twitch, you’ll get an on-site notification when a channel you follow goes live. When you’re not using Twitch, you'll get either a mobile notification or an email, not both. You can learn more  <x:link>in this article</x:link>.", {
                                "x:link": function(e) {
                                    return o.createElement(C.U, {
                                        to: Object(u.b)(u.a.SmartNotifications)
                                    }, e)
                                }
                            }, "SettingsNotificationsPage"),
                            explanation: Object(c.d)("Enable smart notifications", "SettingsNotificationsPage"),
                            key: "smart"
                        }), c.p.integrations.notifications && o.createElement(J, null), o.createElement(C.Cb, {
                            className: "notification-settings__body",
                            borderRight: !0,
                            borderLeft: !0,
                            borderTop: !0
                        }, o.createElement(Z, {
                            startCollapsed: t,
                            platformName: V.onsite,
                            displayName: Object(c.d)("On Twitch", "SettingsNotificationsPage"),
                            description: Object(c.d)("We'll always keep you informed on important updates to Twitch and your account.", "SettingsNotificationsPage"),
                            explanation: Object(c.d)("Send me notifications on Twitch about", "SettingsNotificationsPage"),
                            key: "onsite",
                            extraSettings: this.renderBrowserPushNotifications()
                        }), o.createElement(Z, {
                            startCollapsed: !0,
                            platformName: V.email,
                            displayName: Object(c.d)("By Email", "SettingsNotificationsPage"),
                            description: Object(c.d)("Receive important notifications through email. You may receive additional emails about features and content on Twitch. You can turn off specific emails using the unsubscribe link included in each message.", "SettingsNotificationsPage"),
                            explanation: Object(c.d)("Send me emails about", "SettingsNotificationsPage"),
                            key: "email"
                        }), o.createElement(Z, {
                            platformName: V.push,
                            startCollapsed: !0,
                            displayName: Object(c.d)("On Mobile", "SettingsNotificationsPage"),
                            description: Object(c.d)("Get Twitch updates on the go. Receive notifications right on your phone's home screen.", "SettingsNotificationsPage"),
                            explanation: Object(c.d)("Send me push notifications", "SettingsNotificationsPage"),
                            key: "push"
                        }), o.createElement(D, {
                            startCollapsed: !t
                        })))
                    }, t.prototype.renderBrowserPushNotifications = function() {
                        return Object(g.a)() && !Object(h.a)() ? o.createElement(L, null) : null
                    }, t.prototype.onRender = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t
                }(o.Component),
                te = Object(s.compose)(Object(f.b)("SettingsNotificationsPage", {
                    destination: m.a.NotificationSettingsPage
                }), Object(d.a)({
                    location: p.PageviewLocation.SettingsPage
                }))(ee);
            n.d(t, "SettingsNotificationsPageComponent", function() {
                return ee
            }), n.d(t, "SettingsNotificationsPage", function() {
                return te
            })
        },
        "/THz": function(e, t, n) {},
        "0l36": function(e, t, n) {
            var i = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "BanUserFromChatRoom"
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
                                    value: "BanUserFromChatRoomInput"
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
                                value: "banUserFromChatRoom"
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
                                        value: "ban"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "BannedUserStatus"
                                            },
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
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 275
                }
            };
            i.loc.source = {
                body: '#import "twilight/pages/settings/components/settings-channel-page/components/banned-chatters/banned-user-status-fragment.gql"\nmutation BanUserFromChatRoom($input: BanUserFromChatRoomInput!) {\nbanUserFromChatRoom(input: $input) {\nban {\n...BannedUserStatus\n}\nerror {\ncode\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var r = {};
            i.definitions = i.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !r[t] && (r[t] = !0, !0)
                })
            }(n("YWuw").definitions)), e.exports = i
        },
        "1Whu": function(e, t, n) {
            "use strict";
            var i = n("xzzA");
            e.exports = {
                shouldComponentUpdate: function(e, t) {
                    return !i(this.props, e) || !i(this.state, t)
                }
            }
        },
        "1glA": function(e, t) {
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
                                        value: "displayName"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
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
                                            name: {
                                                kind: "Name",
                                                value: "category"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
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
                                                    name: {
                                                        kind: "Name",
                                                        value: "platformName"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "settingState"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "isEnabled"
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
        "1qL7": function(e, t, n) {
            "use strict";
            n.r(t);
            var i, r = n("q1tI"),
                a = n("fvjX"),
                o = n("V+GM"),
                s = n("1/iK"),
                c = n("NvVO"),
                l = n("2xye"),
                d = n("GnwI"),
                u = n("5X7D"),
                m = n("mrSG"),
                p = n("oJmH"),
                g = n("/7QA"),
                h = n("yR8l"),
                f = n("wUQP"),
                v = n("b6Yk"),
                k = n("EMHe"),
                b = n("rwxT"),
                S = n("EpBn"),
                y = n("3hKJ"),
                C = n("7PeK"),
                w = n("8Z7p"),
                N = n("Ue10"),
                E = n("qRXA");
            ! function(e) {
                e[e.AddressNotAllowed = 1] = "AddressNotAllowed", e[e.InvalidAddress = 2] = "InvalidAddress", e[e.InvalidDomain = 3] = "InvalidDomain"
            }(i || (i = {}));
            var _ = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            value: t.props.data.currentUser && t.props.data.currentUser.email || "",
                            saveStatus: k.b.NoChanges
                        }, t.logger = g.k.withCategory("change-email-form"), t.onChange = function(e) {
                            var n = k.b.DirtyChanges;
                            e.currentTarget.value === (t.props.data.currentUser && t.props.data.currentUser.email) && (n = k.b.NoChanges), t.setState({
                                saveStatus: n,
                                validationError: void 0,
                                value: e.currentTarget.value
                            })
                        }, t.onClickSave = function() {
                            return m.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, r, a, o, s = this;
                                return m.__generator(this, function(c) {
                                    switch (c.label) {
                                        case 0:
                                            if (!this.props.data.currentUser) return [2];
                                            this.setState({
                                                saveStatus: k.b.Working,
                                                validationError: void 0
                                            }), e = k.b.Error, t = void 0, n = {
                                                body: {
                                                    email: this.state.value
                                                }
                                            }, Object(f.b)("feature_flag_sudo_email") && (n.credentials = "include"), c.label = 1;
                                        case 1:
                                            return c.trys.push([1, 3, , 4]), [4, v.a.put("/kraken/users/" + this.props.data.currentUser.id, n)];
                                        case 2:
                                            return r = c.sent(), a = r.error && r.error.message, 200 === r.status ? e = k.b.Success : a ? a.includes(w.a.EmailNotValid) ? t = i.InvalidAddress : a.includes(w.a.EmailDomainNotAllowed) ? t = i.InvalidDomain : a.includes(w.a.EmailNotAllowed) ? t = i.AddressNotAllowed : a.includes(w.a.SudoTokenInvalid) || a.includes(w.a.SudoTokenMissing) ? this.props.onSudoTokenInvalid() : this.logErrorToSentinel(r) : this.logErrorToSentinel(r), [3, 4];
                                        case 3:
                                            return o = c.sent(), this.logger.warn("Network error submitting profile for user", {
                                                user: this.props.data.currentUser && this.props.data.currentUser.id,
                                                error: o
                                            }), [3, 4];
                                        case 4:
                                            return this.setState({
                                                saveStatus: e,
                                                validationError: t
                                            }, function() {
                                                e === k.b.Success && s.props.data.refetch()
                                            }), [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return m.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentDidUpdate = function(e) {
                        e.data.loading && !this.props.data.loading && this.props.data.currentUser ? (this.setState({
                            value: this.props.data.currentUser.email || ""
                        }), this.props.latencyTracking.reportInteractive()) : this.props.data.error && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = r.createElement(b.a, {
                                status: this.state.saveStatus,
                                onClickSave: this.onClickSave
                            }),
                            t = this.renderValidationError();
                        return r.createElement(r.Fragment, null, r.createElement(y.a, {
                            title: Object(g.d)("Change your Email Address", "ChangeEmailForm"),
                            linkToParent: "/settings/profile"
                        }), r.createElement(C.a, {
                            footer: e
                        }, r.createElement(S.a, {
                            label: Object(g.d)("Email", "ChangeEmailForm"),
                            error: !(!t && !this.props.data.error),
                            errorMessage: t
                        }, r.createElement(N.Ra, {
                            disabled: this.props.data.loading || !!this.props.data.error || this.state.saveStatus === k.b.Working,
                            onChange: this.onChange,
                            type: N.Ta.Email,
                            value: this.state.value
                        }))))
                    }, t.prototype.renderValidationError = function() {
                        switch (this.state.validationError) {
                            case i.AddressNotAllowed:
                                return Object(g.d)("Unable to change email address - Please use a different email address", "ChangeEmailForm");
                            case i.InvalidAddress:
                                return Object(g.d)("Please provide a valid email address", "ChangeEmailForm");
                            case i.InvalidDomain:
                                return Object(g.d)("Admins must use their work email address", "ChangeEmailForm");
                            default:
                                return
                        }
                    }, t.prototype.logErrorToSentinel = function(e) {
                        this.logger.error(e.requestError || new Error("Unrecognized User Service response error when trying to change email"), e.error && e.error.message || "error missing", {
                            userID: this.props.data.currentUser && this.props.data.currentUser.id,
                            status: e.status,
                            error: e.error,
                            requestError: e.requestError
                        })
                    }, t
                }(r.Component),
                O = Object(p.compose)(Object(h.a)(E), Object(d.b)("ChangeEmailForm"))(_);
            var T = Object(a.compose)(Object(d.b)("ChangeEmailPage", {
                autoReportInteractive: !0,
                destination: c.a.ChangeEmail
            }), Object(o.a)({
                location: l.PageviewLocation.ChangeEmail
            }))(function() {
                return r.createElement(u.a, {
                    loginTrackingSource: s.a.ChangeEmail
                }, function(e) {
                    return r.createElement(O, {
                        onSudoTokenInvalid: e
                    })
                })
            });
            n.d(t, "ChangeEmailPage", function() {
                return T
            })
        },
        "3/9Z": function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("q1tI"),
                a = n("oJmH"),
                o = n("/7QA"),
                s = n("yR8l"),
                c = n("geRD"),
                l = n("c0Zc"),
                d = n("Ue10"),
                u = n("TSYQ"),
                m = function(e) {
                    if (!e.emote.id) return null;
                    var t = "https://static-cdn.jtvnw.net/emoticons/v1/" + e.emote.id;
                    return r.createElement(d.S, {
                        alt: e.emote.text || "",
                        src: t + "/1.0",
                        srcSet: {
                            "1x": t + "/1.0",
                            "1.5x": t + "/1.5",
                            "2x": t + "/2.0",
                            "3x": t + "/3.0",
                            "4x": t + "/4.0"
                        }
                    })
                },
                p = (n("o2KV"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.selectEmoteSet = function() {
                            !t.props.selected && t.props.selectEmoteSet && t.props.emoteSet && t.props.emoteSet.id && t.props.selectEmoteSet(t.props.emoteSet.id)
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        if (!this.props.emoteSet.id || !this.props.emoteSet.emotes) return null;
                        var e = this.props.emoteSet.emotes.slice(0, 3).map(function(e) {
                                return r.createElement(m, {
                                    key: e.id,
                                    emote: e
                                })
                            }),
                            t = u({
                                "emote-set-button": !0,
                                "emote-set-button-unselected": !this.props.selected
                            });
                        return r.createElement(d.Cb, {
                            className: t,
                            "data-a-target": this.props.selected ? "emote-set-button" : "emote-set-button-unselected",
                            display: d.X.InlineFlex,
                            borderRadius: this.props.borderRadius
                        }, r.createElement(d.z, {
                            onClick: this.selectEmoteSet,
                            "data-a-target": "emote-set-button-" + this.props.emoteSet.id,
                            type: d.F.Text
                        }, r.createElement(d.Xa, {
                            display: d.X.Flex,
                            alignItems: d.f.Center,
                            padding: {
                                top: .5
                            }
                        }, e)))
                    }, t
                }(r.Component)),
                g = (n("+HZ4"), function(e) {
                    if (!e.emoteSet.emotes) return null;
                    var t = e.emoteSet.emotes.filter(function(e) {
                        return e.id && e.text
                    }).map(function(t) {
                        return r.createElement(d.Xa, {
                            key: t.id,
                            "data-a-target": "emote-" + e.emoteSet.id,
                            display: d.X.InlineFlex,
                            flexDirection: d.Aa.Column,
                            alignItems: d.f.Center,
                            padding: 1
                        }, r.createElement(d.Xa, {
                            display: d.X.InlineFlex,
                            flexGrow: 1,
                            alignItems: d.f.Center
                        }, r.createElement(m, {
                            emote: t
                        })), r.createElement(d.W, null, t.text))
                    });
                    return r.createElement(d.Xa, {
                        className: "emote-set-preview",
                        "data-a-target": "emote-set-preview",
                        padding: {
                            top: 1
                        },
                        textAlign: d.Pb.Center,
                        display: d.X.Flex,
                        alignItems: d.f.Stretch,
                        justifyContent: d.Wa.Center,
                        flexWrap: d.Ba.Wrap
                    }, t)
                }),
                h = n("ST+a"),
                f = n("f/PJ"),
                v = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            error: !1
                        }, t.logger = o.p.logger.withCategory("prime-emotes-set-picker"), t.selectEmoteSet = function(e) {
                            return i.__awaiter(t, void 0, void 0, function() {
                                var t, n, r;
                                return i.__generator(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            if (!(t = this.props.data.currentUser) || null === t.id || !t.primeSettings) return [2];
                                            n = {
                                                primeEmoticonsSetName: e,
                                                userID: t.id
                                            }, r = {
                                                updatePrimeSettings: {
                                                    __typename: "UpdatePrimeSettingsPayload",
                                                    primeSettings: {
                                                        __typename: "PrimeSettings",
                                                        id: t.primeSettings.id,
                                                        primeEmoticons: {
                                                            __typename: "PrimeEmoticons",
                                                            currentSetName: e
                                                        }
                                                    }
                                                }
                                            }, i.label = 1;
                                        case 1:
                                            return i.trys.push([1, 3, , 4]), [4, this.props.selectEmoteSet(Object(c.b)(n, r))];
                                        case 2:
                                            return i.sent(), [3, 4];
                                        case 3:
                                            return i.sent(), this.logger.warn("Failed to select new prime emotes set"), this.setState({
                                                error: !0
                                            }), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = this;
                        if (!this.currentEmoteSet || !this.primeEmoticons || !this.primeEmoticons.emoticonSets) return r.createElement(d.gb, {
                            width: 300,
                            height: 200
                        });
                        var t = this.primeEmoticons.emoticonSets,
                            n = t.map(function(n, a) {
                                var o;
                                return 0 === a && (o = {
                                    topLeft: d.x.Medium,
                                    bottomLeft: d.x.Medium
                                }), a === t.length - 1 && (o = i.__assign({}, o, {
                                    topRight: d.x.Medium,
                                    bottomRight: d.x.Medium
                                })), r.createElement(p, {
                                    key: n.id,
                                    selected: e.currentEmoteSet.id === n.id,
                                    emoteSet: n,
                                    selectEmoteSet: e.selectEmoteSet,
                                    borderRadius: o
                                })
                            });
                        return r.createElement(d.Xa, {
                            margin: {
                                bottom: 1
                            }
                        }, r.createElement(l.a, {
                            title: Object(o.d)("Emoticons", "PrimeEmotesSetPicker"),
                            description: Object(o.d)("Choose which set of emoticons you want to use while chatting. You can always change your mind later.", "PrimeEmotesSetPicker")
                        }), r.createElement(d.Xa, null, r.createElement(d.Xa, {
                            display: d.X.Flex
                        }, n), this.renderErrorMessage(), r.createElement(g, {
                            emoteSet: this.currentEmoteSet
                        })))
                    }, Object.defineProperty(t.prototype, "primeEmoticons", {
                        get: function() {
                            if (this.props.data.currentUser && this.props.data.currentUser.primeSettings && this.props.data.currentUser.primeSettings.primeEmoticons && this.props.data.currentUser.primeSettings.primeEmoticons.emoticonSets) return this.props.data.currentUser.primeSettings.primeEmoticons
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "currentEmoteSet", {
                        get: function() {
                            if (this.primeEmoticons) {
                                var e = this.primeEmoticons,
                                    t = e.emoticonSets,
                                    n = e.currentSetName;
                                return t.find(function(e) {
                                    return e.id === n
                                })
                            }
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.renderErrorMessage = function() {
                        return this.state.error ? r.createElement(d.Xa, {
                            margin: {
                                top: 1
                            }
                        }, r.createElement(d.W, {
                            color: d.O.Error
                        }, Object(o.d)("Sorry, something went wrong selecting emotes. Please try again later.", "PrimeEmotesSetPicker"))) : null
                    }, t
                }(r.Component),
                k = Object(a.compose)(Object(s.a)(h), Object(s.a)(f, {
                    name: "selectEmoteSet"
                }))(v);
            n.d(t, !1, function() {
                return v
            }), n.d(t, "a", function() {
                return k
            })
        },
        "3LEU": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "Settings_Connections_FacebookConnection"
                    },
                    variableDefinitions: [],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
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
                                        value: "accountConnections"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "facebook"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "fullName"
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
                    end: 113
                }
            };
            n.loc.source = {
                body: "query Settings_Connections_FacebookConnection {\ncurrentUser {\nid\naccountConnections {\nfacebook {\nfullName\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "3hKJ": function(e, t, n) {
            "use strict";
            var i = n("q1tI"),
                r = n("Ue10"),
                a = function(e) {
                    return i.createElement(r.Cb, {
                        className: "settings-page-header",
                        borderTop: !0,
                        borderRight: !0,
                        borderLeft: !0,
                        borderRadius: {
                            topLeft: r.x.Medium,
                            topRight: r.x.Medium
                        },
                        background: r.r.Base
                    }, i.createElement(r.Ua, {
                        linkTo: e.linkToParent,
                        onClick: e.onClick,
                        type: r.Va.Alpha
                    }, i.createElement(r.Xa, {
                        display: r.X.Flex,
                        flexWrap: r.Ba.NoWrap
                    }, i.createElement(r.Xa, {
                        display: r.X.Flex,
                        padding: {
                            x: 1
                        }
                    }, i.createElement(r.qb, {
                        asset: r.rb.AngleLeft,
                        height: 20,
                        width: 20
                    })), i.createElement(r.Xa, {
                        flexGrow: 1,
                        margin: 2
                    }, i.createElement(r.W, {
                        bold: !0,
                        fontSize: r.Ca.Size4
                    }, e.title), i.createElement(r.W, {
                        color: r.O.Alt2
                    }, e.description)))))
                };
            n.d(t, "a", function() {
                return a
            })
        },
        "3lt/": function(e, t, n) {
            "use strict";
            n("mrSG"), n("uhBA");
            var i = n("L9xt");
            n.o(i, "PageviewContent") && n.d(t, "PageviewContent", function() {
                return i.PageviewContent
            }), n.o(i, "PageviewLocation") && n.d(t, "PageviewLocation", function() {
                return i.PageviewLocation
            }), n.o(i, "PageviewMedium") && n.d(t, "PageviewMedium", function() {
                return i.PageviewMedium
            }), n.o(i, "SpadeEventType") && n.d(t, "SpadeEventType", function() {
                return i.SpadeEventType
            })
        },
        "3sMy": function(e, t, n) {
            "use strict";
            var i;
            n.d(t, "a", function() {
                    return i
                }),
                function(e) {
                    e.GreatNewClipsYouMayHaveMissed = "GreatNewClipsYouMayHaveMissed", e.PopularClips = "PopularClips", e.PopularVideos = "PopularVideos", e.RecommendedBecauseYouWatchX = "RecommendedBecauseYouWatchX", e.RecommendedBecauseYouFollowX = "RecommendedBecauseYouFollowX", e.TopChannelsPlayingGame = "TopChannelsPlayingGame", e.TopGames = "TopGames", e.TopGamesForYou = "TopGamesForYou", e.TopLiveChannels = "TopLiveChannels", e.TopLiveChannelsYouMayLike = "TopLiveChannelsYouMayLike", e.TopNewVideosYouMayHaveMissed = "TopNewVideosYouMayHaveMissed"
                }(i || (i = {}))
        },
        "4+c1": function(e, t, n) {},
        "55wC": function(e, t) {
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
                        }
                    }],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
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
                                            name: {
                                                kind: "Name",
                                                value: "disableNotifications"
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
        "5EjR": function(e, t, n) {},
        "5X7D": function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("q1tI"),
                a = n("/MKj"),
                o = n("9C/b"),
                s = n("fvjX"),
                c = n("/7QA"),
                l = n("ZDlU"),
                d = n("y5D0"),
                u = n("kRBY"),
                m = n("Ue10"),
                p = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            checkingSudoToken: !0
                        }, t.navigateToSettings = function() {
                            return t.props.history.push("/settings/profile")
                        }, t.onSudoTokenInvalid = function() {
                            return t.setState({
                                sudoTokenInvalid: !0,
                                checkingSudoToken: !1
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.userID && this.checkSudoToken()
                    }, t.prototype.render = function() {
                        return this.state.error ? r.createElement(l.a, {
                            message: Object(c.d)("Something has gone wrong.  Please try again later.", "RequireSudoToken")
                        }) : this.state.sudoTokenInvalid ? this.renderTokenInvalidMessage() : this.props.isLoggedIn ? this.state.checkingSudoToken ? r.createElement(m.Za, {
                            fillContent: !0
                        }) : "function" == typeof this.props.children ? this.props.children(this.onSudoTokenInvalid) : this.props.children : (this.props.login(this.props.loginTrackingSource), r.createElement(l.a, {
                            message: Object(c.d)("You must be logged in to view this page", "RequireSudoToken")
                        }))
                    }, t.prototype.renderTokenInvalidMessage = function() {
                        var e = Object(c.d)("Back to settings", "RequireSudoToken");
                        return r.createElement(m.Xa, {
                            display: m.X.Flex,
                            justifyContent: m.Wa.Center
                        }, r.createElement(m.Na, {
                            type: m.Oa.Info,
                            closeButtonAriaLabel: e,
                            closeButtonOnClick: this.navigateToSettings,
                            title: Object(c.d)("Log in Required", "RequireSudoToken"),
                            description: Object(c.d)("You must log in again to confirm your identity before modifying your account status.", "RequireSudoToken"),
                            actions: [{
                                children: Object(c.d)("Log in again", "RequireSudoToken"),
                                onClick: this.props.logout
                            }, {
                                children: e,
                                onClick: this.navigateToSettings
                            }]
                        }))
                    }, t.prototype.checkSudoToken = function() {
                        return i.__awaiter(this, void 0, void 0, function() {
                            var e, t;
                            return i.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        e = "https://passport.twitch.tv/validate/sudo", n.label = 1;
                                    case 1:
                                        return n.trys.push([1, 3, , 4]), [4, fetch(e, {
                                            body: JSON.stringify({
                                                user_id: this.userID
                                            }),
                                            credentials: "include",
                                            method: "POST"
                                        })];
                                    case 2:
                                        return t = n.sent(), [3, 4];
                                    case 3:
                                        return n.sent(), this.setState({
                                            checkingSudoToken: !1,
                                            error: !0
                                        }), [3, 4];
                                    case 4:
                                        return t && 204 === t.status ? (this.setState({
                                            sudoTokenInvalid: !1,
                                            checkingSudoToken: !1
                                        }), [2]) : (this.onSudoTokenInvalid(), [2])
                                }
                            })
                        })
                    }, Object.defineProperty(t.prototype, "userID", {
                        get: function() {
                            return this.props.user ? this.props.user.id : null
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(r.Component);
            var g = Object(s.compose)(o.a, Object(a.connect)(function(e) {
                return {
                    isLoggedIn: Object(u.f)(e),
                    user: Object(u.e)(e)
                }
            }, function(e) {
                return Object(s.bindActionCreators)({
                    logout: function() {
                        return Object(d.f)()
                    },
                    login: function(e) {
                        return Object(d.e)(e)
                    }
                }, e)
            }))(p);
            n.d(t, "a", function() {
                return g
            })
        },
        "5fhh": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "UpdateUserDirectoryHiddenSetting"
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
                                    value: "UpdateUserDirectoryHiddenInput"
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
                                value: "updateUserDirectoryHidden"
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
                                        value: "user"
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
                                                value: "settings"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "isDirectoryHidden"
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
                    end: 174
                }
            };
            n.loc.source = {
                body: "mutation UpdateUserDirectoryHiddenSetting($input: UpdateUserDirectoryHiddenInput!) {\nupdateUserDirectoryHidden(input: $input) {\nuser {\nid\nsettings {\nisDirectoryHidden\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "5lRV": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "PostSubscriptionsToggle"
                    },
                    variableDefinitions: [],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
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
                                        value: "primeSettings"
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
                                                value: "isSubCreditChatNotificationEnabled"
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
                    end: 108
                }
            };
            n.loc.source = {
                body: "query PostSubscriptionsToggle {\ncurrentUser {\nid\nprimeSettings {\nid\nisSubCreditChatNotificationEnabled\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "69j0": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "Settings_Connections_Amazon"
                    },
                    variableDefinitions: [],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
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
                                        value: "accountConnections"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "hasConnectedAmazon"
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
                    end: 98
                }
            };
            n.loc.source = {
                body: "query Settings_Connections_Amazon {\ncurrentUser {\nid\naccountConnections {\nhasConnectedAmazon\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "7M8a": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            }), n.d(t, "b", function() {
                return d
            });
            var i, r, a = n("/7QA"),
                o = n("kRBY"),
                s = {
                    da: "da",
                    de: "de",
                    en: "en",
                    "es-mx": "es",
                    es: "es_es",
                    fi: "fi",
                    fr: "fr",
                    it: "it",
                    ja: "ja",
                    ko: "ko",
                    nl: "nl",
                    no: "no",
                    pl: "pl",
                    "pt-br": "pt_br",
                    pt: "pt_br",
                    ru: "ru",
                    sv: "sv",
                    th: "th",
                    tr: "tr",
                    vi: "en",
                    "zh-cn": "zh_cn",
                    "zh-tw": "zh_tw"
                },
                c = Object.keys(s);
            ! function(e) {
                e.CreatingAccounts = "658863-creating-an-account", e.SmartNotifications = "2944759"
            }(r || (r = {}));
            var l = ((i = {})[r.CreatingAccounts] = ["en", "de"], i[r.SmartNotifications] = c, i);

            function d(e) {
                var t = Object(o.b)(a.p.store.getState()) || "en",
                    n = "en",
                    i = l[e];
                return i && i.includes(t) && (n = s[t]), "https://help.twitch.tv/customer/" + n + "/portal/articles/" + e
            }
        },
        "7aL7": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "TwoFactorAuthenticationSetting_CurrentUser"
                    },
                    variableDefinitions: [],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
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
                                        value: "isEmailVerified"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "roles"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "isGlobalMod"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "isSiteAdmin"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "isStaff"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "settings"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "hasTwoFactorEnabled"
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
                    end: 162
                }
            };
            n.loc.source = {
                body: "query TwoFactorAuthenticationSetting_CurrentUser {\ncurrentUser {\nid\nisEmailVerified\nroles {\nisGlobalMod\nisSiteAdmin\nisStaff\n}\nsettings {\nhasTwoFactorEnabled\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "9+K3": function(e, t) {
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
                        }
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
                        }
                    }],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
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
                                            name: {
                                                kind: "Name",
                                                value: "totalCount"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
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
                                                    name: {
                                                        kind: "Name",
                                                        value: "cursor"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
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
                                                                value: "followers"
                                                            },
                                                            arguments: [],
                                                            directives: [],
                                                            selectionSet: {
                                                                kind: "SelectionSet",
                                                                selections: [{
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "totalCount"
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
                                                        value: "notificationSettings"
                                                    },
                                                    arguments: [],
                                                    directives: [],
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [{
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "isEnabled"
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
                                                value: "pageInfo"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "hasNextPage"
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
        "9MO3": function(e, t, n) {
            "use strict";
            n.d(t, "c", function() {
                return d
            }), n.d(t, "a", function() {
                return m
            }), n.d(t, "b", function() {
                return g
            }), n.d(t, "d", function() {
                return f
            });
            var i = n("/7QA"),
                r = n("DMoW"),
                a = n("yI6f");

            function o() {
                return {
                    text: Object(i.d)("I am not interested in this category", "FeedbackReason"),
                    contentType: a.b.Game,
                    feedbackType: r.G.NOT_INTERESTED
                }
            }

            function s() {
                return Object(i.d)("Other", "FeedbackReason")
            }

            function c() {
                return Object(i.d)("I am not interested in this channel", "FeedbackReason")
            }
            var l = null;

            function d() {
                return null === l && (l = [o(), {
                    text: s(),
                    contentType: a.b.Shelf,
                    feedbackType: r.G.OTHER
                }]), l
            }
            var u = null;

            function m() {
                return null === u && (u = [{
                    text: c(),
                    contentType: a.b.Live,
                    feedbackType: r.G.NOT_INTERESTED
                }, o(), {
                    text: s(),
                    contentType: a.b.Live,
                    feedbackType: r.G.OTHER
                }]), u
            }
            var p = null;

            function g() {
                return null === p && (p = [o(), {
                    text: s(),
                    contentType: a.b.Game,
                    feedbackType: r.G.OTHER
                }]), p
            }
            var h = null;

            function f() {
                return null === h && (h = [{
                    text: Object(i.d)("I am not interested in this video", "FeedbackReason"),
                    contentType: a.b.Vod,
                    feedbackType: r.G.NOT_INTERESTED
                }, {
                    text: c(),
                    contentType: a.b.Live,
                    feedbackType: r.G.NOT_INTERESTED
                }, o(), {
                    text: Object(i.d)("I have already watched this video", "FeedbackReason"),
                    contentType: a.b.Vod,
                    feedbackType: r.G.ALREADY_WATCHED
                }, {
                    text: s(),
                    contentType: a.b.Vod,
                    feedbackType: r.G.OTHER
                }]), h
            }
        },
        A65o: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return s
            });
            var i = n("mrSG"),
                r = n("q1tI"),
                a = n("yI6f"),
                o = n("x75U");

            function s() {
                return function(e) {
                    return function(t) {
                        function n() {
                            var e = null !== t && t.apply(this, arguments) || this;
                            return e.trackImpression = function(t) {
                                e.context.trackImpression(e.props.shelf, e.props.contentEdge, e.props.itemPosition, t)
                            }, e.trackClick = function(t, n, i) {
                                "string" != typeof i && (i = void 0), e.context.trackClick(e.props.shelf, e.props.contentEdge, e.props.itemPosition, t, n, i)
                            }, e
                        }
                        return i.__extends(n, t), n.prototype.render = function() {
                            var t = this.context.cardIDtoItemTrackingIDMap && this.props.contentEdge.node && this.context.cardIDtoItemTrackingIDMap[this.props.contentEdge.node.id],
                                n = this.props,
                                o = n.itemPosition,
                                s = n.rowPosition,
                                c = n.shelf,
                                l = Object(a.g)(c.title).rowName,
                                d = {
                                    trackImpression: this.trackImpression,
                                    trackRecFeedbackHideClick: this.context.trackRecFeedbackHideClick,
                                    trackRecFeedbackClickStep: this.context.trackRecFeedbackClickStep,
                                    trackRecFeedbackClickStepPostSubmit: this.context.trackRecFeedbackClickStepPostSubmit,
                                    trackClick: this.trackClick,
                                    shelfCardTrackingProps: {
                                        item_tracking_id: t || null,
                                        item_position: o,
                                        row_name: l,
                                        row_position: s
                                    }
                                };
                            return r.createElement(e, i.__assign({}, this.props, d))
                        }, n.contextTypes = o.a, n
                    }(r.Component)
                }
            }
        },
        AOMz: function(e, t, n) {},
        BLWH: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "HideSubscriptionGiftCountQuery"
                    },
                    variableDefinitions: [],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
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
                                        value: "subscriptionSettings"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "isGiftCountHidden"
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
                    end: 102
                }
            };
            n.loc.source = {
                body: "query HideSubscriptionGiftCountQuery {\ncurrentUser {\nid\nsubscriptionSettings {\nisGiftCountHidden\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        BpmJ: function(e, t, n) {},
        "Bx/Q": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "Settings_Connections_Blizzard"
                    },
                    variableDefinitions: [],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
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
                                        value: "accountConnections"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "blizzard"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "battleTag"
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
                                        value: "blizzardAccount"
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
                                                value: "region"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "battleTag"
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
                    end: 144
                }
            };
            n.loc.source = {
                body: "query Settings_Connections_Blizzard {\ncurrentUser {\nid\naccountConnections {\nblizzard {\nbattleTag\n}\n}\nblizzardAccount {\nid\nregion\nbattleTag\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        DA7M: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "Settings_Connections_PSNConnection"
                    },
                    variableDefinitions: [],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
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
                                        value: "ssoLinks"
                                    },
                                    arguments: [{
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "app"
                                        },
                                        value: {
                                            kind: "StringValue",
                                            value: "psn",
                                            block: !1
                                        }
                                    }],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "app"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "ssoID"
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
                    end: 98
                }
            };
            n.loc.source = {
                body: 'query Settings_Connections_PSNConnection {\ncurrentUser {\nid\nssoLinks(app: "psn") {\napp\nssoID\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        DMSN: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = l(n("q1tI")),
                r = l(n("fhzG")),
                a = l(n("17x9")),
                o = l(n("1Whu")),
                s = l(n("TSYQ")),
                c = l(n("ZKCD"));

            function l(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var d = (0, r.default)({
                mixins: [c.default, o.default],
                propTypes: {
                    x: a.default.number.isRequired,
                    y: a.default.number.isRequired,
                    backgroundColor: a.default.string,
                    className: a.default.string
                },
                getDefaultProps: function() {
                    return {
                        x: 0,
                        y: 0,
                        backgroundColor: "transparent",
                        className: ""
                    }
                },
                updatePosition: function(e, t, n) {
                    var i = (t - e.left) / e.width,
                        r = (e.bottom - n) / e.height;
                    this.props.onChange(this.getScaledValue(i), this.getScaledValue(r))
                },
                render: function() {
                    var e = (0, s.default)("map", this.props.className, {
                            active: this.state.active
                        }),
                        t = this.props.backgroundColor;
                    return i.default.createElement("div", {
                        className: e,
                        onMouseDown: this.startUpdates,
                        onTouchStart: this.startUpdates
                    }, i.default.createElement("div", {
                        className: "background",
                        style: {
                            backgroundColor: t
                        }
                    }), i.default.createElement("div", {
                        className: "pointer",
                        style: {
                            left: this.getPercentageValue(this.props.x),
                            bottom: this.getPercentageValue(this.props.y)
                        }
                    }))
                }
            });
            t.default = d
        },
        EpOa: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("q1tI"),
                a = n("/7QA"),
                o = n("GnwI"),
                s = n("j3KY"),
                c = n("Rjl4"),
                l = n("Ue10"),
                d = (n("SyMV"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onTryPrimeClick = function() {
                            Object(c.o)({
                                buttonPosition: t.props.tracking.position
                            })
                        }, t.getButtonTypeFromTheme = function() {
                            return {
                                twitch: l.F.Default
                            }[t.props.theme || "default"] || void 0
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.theme || "default";
                        return r.createElement(l.Xa, {
                            className: "prime-upsell-button__subsite prime-upsell-button__subsite--" + e,
                            margin: {
                                top: 2,
                                bottom: 1
                            }
                        }, r.createElement(l.z, {
                            fullWidth: !0,
                            size: l.D.Large,
                            linkTo: this.props.buttonURLOverride || this.getLink(),
                            targetBlank: !0,
                            onClick: this.onTryPrimeClick,
                            "data-a-target": this.props.buttonDataTargetOverride,
                            type: this.getButtonTypeFromTheme()
                        }, this.props.buttonTextOverride || Object(a.d)("Try Twitch Prime", "TryPrimeButton")))
                    }, t.prototype.getLink = function() {
                        if (this.props.externalURI) return this.props.externalURI;
                        var e = this.props.externalReftag || s.b,
                            t = window.location.pathname.substring(1);
                        return Object(s.e)(e, t)
                    }, t
                }(r.Component)),
                u = Object(o.b)("TryPrimeButton", {
                    autoReportInteractive: !0
                })(d);
            n.d(t, !1, function() {
                return d
            }), n.d(t, "a", function() {
                return u
            })
        },
        F1Gg: function(e, t) {
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
                        }
                    }],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
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
                                    name: {
                                        kind: "Name",
                                        value: "settingState"
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
        Gn2G: function(e, t, n) {
            "use strict";
            var i = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(n("cgA6"));
            e.exports = i.default
        },
        Hf6r: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "SettingsTurboPage"
                    },
                    variableDefinitions: [],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
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
                                        value: "hasPrime"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "hasTurbo"
                                    },
                                    arguments: [],
                                    directives: []
                                }]
                            }
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "requestInfo"
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "countryCode"
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
                    end: 92
                }
            };
            n.loc.source = {
                body: "query SettingsTurboPage {\ncurrentUser {\nid\nhasPrime\nhasTurbo\n}\nrequestInfo {\ncountryCode\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        HoeP: function(e, t, n) {},
        IAbT: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "Settings_Connections_OtherConnectionsList"
                    },
                    variableDefinitions: [],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
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
                                        value: "clientAuthorizations"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "clientID"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "clientName"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "createdAt"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "ssoLinks"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "app"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "ssoID"
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
                    end: 148
                }
            };
            n.loc.source = {
                body: "query Settings_Connections_OtherConnectionsList {\ncurrentUser {\nid\nclientAuthorizations {\nclientID\nclientName\ncreatedAt\n}\nssoLinks {\napp\nssoID\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        IPK1: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "UnlinkAmazonConnectionStatusMutation"
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
                                    value: "UnlinkAmazonConnectionInput"
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
                                value: "unlinkAmazonConnection"
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
                                        value: "isSuccess"
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
                    end: 139
                }
            };
            n.loc.source = {
                body: "mutation UnlinkAmazonConnectionStatusMutation($input: UnlinkAmazonConnectionInput!) {\nunlinkAmazonConnection(input: $input) {\nisSuccess\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        KXRf: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "UnlinkSSO"
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
                                    value: "UnlinkSSOInput"
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
                                value: "unlinkSSO"
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
                                        value: "links"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "app"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "ssoID"
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
                    end: 96
                }
            };
            n.loc.source = {
                body: "mutation UnlinkSSO($input: UnlinkSSOInput!) {\nunlinkSSO(input: $input) {\nlinks {\napp\nssoID\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        KXpU: function(e, t, n) {
            "use strict";
            n.r(t);
            var i = n("mrSG"),
                r = n("q1tI"),
                a = n("oJmH"),
                o = n("/7QA"),
                s = n("V+GM"),
                c = n("NvVO"),
                l = n("2xye"),
                d = n("/MKj"),
                u = n("fvjX"),
                m = n("aCAx"),
                p = n("KxT4"),
                g = n("v2f3"),
                h = n("EpBn"),
                f = n("Ue10");
            var v = Object(d.connect)(function(e) {
                    return {
                        status: e.gdpr.status
                    }
                }, function(e) {
                    return Object(u.bindActionCreators)({
                        showConsentTool: function() {
                            return Object(m.d)(g.a, {})
                        }
                    }, e)
                })(function(e) {
                    var t = e.status === p.b.ConsentSaved || e.status === p.b.ConsentRequired;
                    return Object(p.f)() && t ? r.createElement(h.a, {
                        label: Object(o.d)("Consent Management Tool", "SettingsSecurityGDPRLink"),
                        orientation: f.Fa.Horizontal
                    }, r.createElement(f.W, null, Object(o.d)("Twitch respects your privacy. <x:link>Manage and control your consent here</x:link>.", {
                        "x:link": function(t) {
                            return r.createElement(f.U, {
                                onClick: e.showConsentTool,
                                "data-a-target": "gdpr-settings-link"
                            }, t)
                        }
                    }, "SettingsSecurityGDPRLink"))) : null
                }),
                k = n("GnwI"),
                b = n("7PeK"),
                S = n("c0Zc"),
                y = n("yR8l"),
                C = n("geRD"),
                w = n("fWal"),
                N = function(e) {
                    var t = e.saving || e.errorLoading;
                    return r.createElement(w.a, {
                        id: "settings-security-page-block-subs",
                        label: Object(o.d)("Block Receiving Gifts on Channels You don't Follow", "BlockGiftedSubsToggle"),
                        description: Object(o.d)("Block incoming gift subscriptions to channels you don't follow", "BlockGiftedSubsToggle"),
                        error: e.errorSaving || e.errorLoading,
                        checked: e.checked,
                        onChange: e.onChange,
                        disabled: t,
                        showPlaceholder: e.loading
                    })
                },
                E = n("q3tR"),
                _ = n("fhu2"),
                O = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            checked: !1,
                            saving: !1,
                            errorSaving: !1
                        }, t.logger = o.p.logger.withCategory("settings").withCategory("block-gifted-subs-toggle"), t.onCheckBoxChange = function(e) {
                            t.setState({
                                checked: e,
                                saving: !0
                            }, function() {
                                t.updateSettings(e)
                            })
                        }, t.updateSettings = function(e) {
                            return i.__awaiter(t, void 0, void 0, function() {
                                var t, n;
                                return i.__generator(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            if (this.logger.debug("Updating subscription settings", {
                                                    giftsInFollowedChannelsOnly: e
                                                }), !(this.props.data.currentUser && this.props.data.currentUser.id)) return this.logger.warn("No currentUser - unable to update subscription settings."), [2];
                                            r.label = 1;
                                        case 1:
                                            return r.trys.push([1, 3, , 4]), [4, this.props.updateUserSubscriptionSettings(Object(C.a)({
                                                giftsInFollowedChannelsOnly: e
                                            }))];
                                        case 2:
                                            return r.sent(), t = function(t) {
                                                var n = t && t.currentUser,
                                                    r = n && n.subscriptionSettings;
                                                return r ? {
                                                    currentUser: i.__assign({}, n, {
                                                        subscriptionSettings: i.__assign({}, r, {
                                                            giftsToFollowedChannelsOnly: e
                                                        })
                                                    })
                                                } : t
                                            }, Object(C.e)(_, {}, t), this.logger.debug("Updated subscription settings", {
                                                giftsInFollowedChannelsOnly: e
                                            }), this.setState({
                                                saving: !1,
                                                errorSaving: !1
                                            }), [3, 4];
                                        case 3:
                                            return n = r.sent(), this.logger.warn("Failed to update subscription settings", {
                                                err: n
                                            }), this.setState({
                                                saving: !1,
                                                errorSaving: !0,
                                                checked: !e
                                            }), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
                        e.data.loading && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        var t = e.data,
                            n = t.currentUser;
                        if (!t.loading && this.props.data.loading) {
                            var i = n && n.subscriptionSettings && n.subscriptionSettings.giftsToFollowedChannelsOnly || !1;
                            this.setState({
                                checked: i
                            })
                        }
                    }, t.prototype.render = function() {
                        var e = this.props.data.currentUser,
                            t = e && e.subscriptionSettings,
                            n = !!this.props.data.error || !this.props.data.loading && !t;
                        return r.createElement(N, {
                            checked: this.state.checked,
                            saving: this.state.saving,
                            loading: this.props.data.loading,
                            errorLoading: n,
                            errorSaving: this.state.errorSaving,
                            onChange: this.onCheckBoxChange
                        })
                    }, t
                }(r.Component),
                T = Object(u.compose)(Object(k.b)("BlockGiftedSubs"), Object(y.a)(_, {
                    options: {
                        fetchPolicy: "network-only"
                    }
                }), Object(y.a)(E, {
                    name: "updateUserSubscriptionSettings"
                }))(O),
                D = n("b6Yk"),
                U = "/v5/whispers/settings",
                F = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            error: !1,
                            loading: !0,
                            updating: !1
                        }, t.onToggle = function(e) {
                            return i.__awaiter(t, void 0, void 0, function() {
                                var t;
                                return i.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            this.setState({
                                                updating: !0
                                            }), n.label = 1;
                                        case 1:
                                            return n.trys.push([1, 3, , 4]), [4, D.a.post(U, {
                                                body: {
                                                    restrict_whispers: e
                                                }
                                            })];
                                        case 2:
                                            return t = n.sent(), this.setState(function(n) {
                                                return {
                                                    enabled: 200 === t.status ? e : n.enabled,
                                                    error: 200 !== t.status,
                                                    updating: !1
                                                }
                                            }), [3, 4];
                                        case 3:
                                            return n.sent(), this.setState({
                                                updating: !1,
                                                error: !0
                                            }), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentWillMount = function() {
                        return i.__awaiter(this, void 0, void 0, function() {
                            var e;
                            return i.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return t.trys.push([0, 2, , 3]), [4, D.a.get(U)];
                                    case 1:
                                        return e = t.sent(), this.setState({
                                            enabled: e.body && e.body.restrict_whispers || !1,
                                            error: 200 !== e.status,
                                            loading: !1
                                        }), [3, 3];
                                    case 2:
                                        return t.sent(), this.setState({
                                            enabled: !1,
                                            error: !0,
                                            loading: !1
                                        }), [3, 3];
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, t.prototype.render = function() {
                        return r.createElement(w.a, {
                            id: "settings-security-page-block-whispers",
                            label: Object(o.d)("Block Whispers from Strangers", "SettingsSecurityPage"),
                            description: Object(o.d)("Block whispers from strangers unless you whisper them first. A stranger is anyone who is NOT: your friend, someone you follow, someone you subscribe to, one of your mods, or one of your editors.", "SettingsSecurityPage"),
                            checked: this.state.enabled,
                            showPlaceholder: this.state.loading,
                            disabled: this.state.updating,
                            error: this.state.error,
                            onChange: this.onToggle
                        })
                    }, t
                }(r.Component);

            function x() {
                return r.createElement(h.a, {
                    label: Object(o.d)("Password", "ChangePasswordLink"),
                    orientation: f.Fa.Horizontal
                }, r.createElement(f.W, {
                    "data-a-target": "security-change-password-link"
                }, Object(o.d)("<x:link>Change password.</x:link> Improve your security with a strong password.", {
                    "x:link": function(e) {
                        return r.createElement("a", {
                            href: "https://passport.twitch.tv/passwords/new?"
                        }, e)
                    }
                }, "ChangePasswordLink")))
            }
            var j = function(e) {
                    return e.loading || e.errorLoading || !e.checked && !e.saving ? null : r.createElement(w.a, {
                        id: "settings-security-hide-directory",
                        label: Object(o.d)("Hide channel from directory", "HideDirectoryToggle"),
                        description: Object(o.d)("Live video, past broadcasts, and highlights are listed publicly in the directory by default. Turning this off is irreversible.", "HideDirectoryToggle"),
                        error: e.errorSaving,
                        checked: e.checked,
                        onChange: e.onChange,
                        disabled: e.saving
                    })
                },
                I = n("5fhh"),
                P = n("QiP8"),
                L = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            checked: !1,
                            saving: !1,
                            errorSaving: !1
                        }, t.logger = o.p.logger.withCategory("settings").withCategory("hide-directory-toggle"), t.onCheckBoxChange = function(e) {
                            t.setState({
                                checked: e,
                                saving: !0
                            }, function() {
                                t.updateSettings(e)
                            })
                        }, t.updateSettings = function(e) {
                            return i.__awaiter(t, void 0, void 0, function() {
                                var t, n;
                                return i.__generator(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            if (this.logger.debug("Updating user settings", {
                                                    IsDirectoryHidden: e
                                                }), !(this.props.data.currentUser && this.props.data.currentUser.id)) return this.logger.warn("No currentUser - unable to update user settings."), [2];
                                            r.label = 1;
                                        case 1:
                                            return r.trys.push([1, 3, , 4]), [4, this.props.updateUserDirectoryHidden(Object(C.a)({
                                                IsDirectoryHidden: e
                                            }))];
                                        case 2:
                                            return r.sent(), t = function(t) {
                                                var n = t && t.currentUser,
                                                    r = n && n.settings;
                                                return r ? {
                                                    currentUser: i.__assign({}, n, {
                                                        settings: i.__assign({}, r, {
                                                            isDirectoryHidden: e
                                                        })
                                                    })
                                                } : t
                                            }, Object(C.e)(P, {}, t), this.logger.debug("Updated user settings", {
                                                IsDirectoryHidden: e
                                            }), this.setState({
                                                saving: !1,
                                                errorSaving: !1
                                            }), [3, 4];
                                        case 3:
                                            return n = r.sent(), this.logger.warn("Failed to update user settings", {
                                                err: n
                                            }), this.setState({
                                                saving: !1,
                                                errorSaving: !0,
                                                checked: !e
                                            }), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
                        e.data.loading && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        var t = e.data,
                            n = t.currentUser;
                        if (!t.loading && this.props.data.loading) {
                            var i = n && n.settings && n.settings.isDirectoryHidden || !1;
                            this.setState({
                                checked: i
                            })
                        }
                    }, t.prototype.render = function() {
                        var e = this.props.data.currentUser,
                            t = e && e.settings,
                            n = !!this.props.data.error || !this.props.data.loading && !t;
                        return r.createElement(j, {
                            checked: this.state.checked,
                            saving: this.state.saving,
                            loading: this.props.data.loading,
                            errorLoading: n,
                            errorSaving: this.state.errorSaving,
                            onChange: this.onCheckBoxChange
                        })
                    }, t
                }(r.Component),
                A = Object(u.compose)(Object(k.b)("HideDirectoryToggle"), Object(y.a)(P, {
                    options: {
                        fetchPolicy: "network-only"
                    }
                }), Object(y.a)(I, {
                    name: "updateUserDirectoryHidden"
                }))(L),
                R = n("kRBY"),
                B = n("cr+I"),
                q = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            error: !1,
                            loading: !0,
                            show: !1,
                            updating: !1
                        }, t.onToggle = function(e) {
                            return i.__awaiter(t, void 0, void 0, function() {
                                var t, n;
                                return i.__generator(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            this.setState({
                                                updating: !0,
                                                error: !1
                                            }), t = {
                                                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
                                            }, i.label = 1;
                                        case 1:
                                            return i.trys.push([1, 3, , 4]), [4, D.a.put(this.hideLiveVideoEndpoint, {
                                                body: B.stringify({
                                                    "channel[private_video]": e
                                                }, {
                                                    arrayFormat: "bracket"
                                                }),
                                                headers: t
                                            })];
                                        case 2:
                                            return n = i.sent(), this.setState(function(t) {
                                                return {
                                                    enabled: 200 === n.status ? e : t.enabled,
                                                    error: 200 !== n.status,
                                                    updating: !1
                                                }
                                            }), [3, 4];
                                        case 3:
                                            return i.sent(), this.setState({
                                                updating: !1,
                                                error: !0
                                            }), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        return i.__awaiter(this, void 0, void 0, function() {
                            var e;
                            return i.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return t.trys.push([0, 2, , 3]), [4, D.a.get(this.hideLiveVideoEndpoint)];
                                    case 1:
                                        return e = t.sent(), this.setState({
                                            enabled: e.body && e.body.private_video || !1,
                                            error: 200 !== e.status,
                                            show: !!e.body && e.body.privacy_options_enabled,
                                            loading: !1
                                        }), [3, 3];
                                    case 2:
                                        return t.sent(), this.setState({
                                            enabled: !1,
                                            error: !0,
                                            loading: !1
                                        }), [3, 3];
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, t.prototype.render = function() {
                        return this.state.show ? r.createElement(w.a, {
                            id: "settings-security-page-hide-live-video",
                            label: Object(o.d)("Hide Live Video", "HideLiveVideoSetting"),
                            description: Object(o.d)("Only allow your editors to view your live video", "HideLiveVideoSetting"),
                            checked: this.state.enabled,
                            disabled: this.state.updating,
                            error: this.state.error,
                            onChange: this.onToggle
                        }) : null
                    }, Object.defineProperty(t.prototype, "hideLiveVideoEndpoint", {
                        get: function() {
                            return "/v5/channels/" + this.props.sessionUserID
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(r.Component);
            var z = Object(d.connect)(function(e) {
                    var t = Object(R.e)(e);
                    return {
                        sessionUserID: t && t.id
                    }
                })(q),
                M = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            error: !1,
                            loading: !0,
                            show: !1,
                            updating: !1
                        }, t.onToggle = function(e) {
                            return i.__awaiter(t, void 0, void 0, function() {
                                var t;
                                return i.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            this.setState({
                                                updating: !0
                                            }), n.label = 1;
                                        case 1:
                                            return n.trys.push([1, 3, , 4]), [4, D.a.put(this.hidePastBroadcastsEndpoint + "?hide_archives=" + e)];
                                        case 2:
                                            return t = n.sent(), this.setState(function(n) {
                                                return {
                                                    enabled: 200 === t.status ? e : n.enabled,
                                                    error: 200 !== t.status,
                                                    show: 200 === t.status ? !!t.body && (t.body.hide_archives || t.body.hide_archives_enabled) : n.show,
                                                    updating: !1
                                                }
                                            }), [3, 4];
                                        case 3:
                                            return n.sent(), this.setState({
                                                updating: !1,
                                                error: !0
                                            }), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentWillMount = function() {
                        return i.__awaiter(this, void 0, void 0, function() {
                            var e;
                            return i.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return t.trys.push([0, 2, , 3]), [4, D.a.get(this.hidePastBroadcastsEndpoint)];
                                    case 1:
                                        return e = t.sent(), this.setState({
                                            enabled: e.body && e.body.hide_archives || !1,
                                            error: 200 !== e.status,
                                            show: !!e.body && (e.body.hide_archives || e.body.hide_archives_enabled),
                                            loading: !1
                                        }), [3, 3];
                                    case 2:
                                        return t.sent(), this.setState({
                                            enabled: !1,
                                            error: !0,
                                            loading: !1
                                        }), [3, 3];
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, t.prototype.render = function() {
                        return this.state.show ? r.createElement(w.a, {
                            id: "settings-security-page-hide-past-broadcasts",
                            label: Object(o.d)("Hide Past Broadcasts", "HidePastBroadcastsSetting"),
                            description: Object(o.d)("Only allow your editors to view your past broadcasts", "HidePastBroadcastsSetting"),
                            checked: this.state.enabled,
                            disabled: this.state.updating,
                            error: this.state.error,
                            onChange: this.onToggle
                        }) : null
                    }, Object.defineProperty(t.prototype, "hidePastBroadcastsEndpoint", {
                        get: function() {
                            return "/v5/channels/" + this.props.sessionUserID + "/user_video_privacy_properties"
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(r.Component);
            var X, G = Object(d.connect)(function(e) {
                    var t = Object(R.e)(e);
                    return {
                        sessionUserID: t && t.id
                    }
                })(M),
                V = function(e) {
                    var t = e.saving || e.errorLoading,
                        n = Object(o.d)("Hide Subscription Gift Purchase Count", "HideGiftedSubCountSettingsPresentation"),
                        i = Object(o.d)("Do not show the total number of Gift Subscriptions you have given in the channel when you purchase a Gift Subscription", "HideGiftedSubCountSettingPresentation");
                    return r.createElement(w.a, {
                        id: "settings-security-page-hide-subscription-gift-count",
                        label: n,
                        description: i,
                        error: e.errorSaving || e.errorLoading,
                        checked: e.checked,
                        disabled: t,
                        onChange: e.onChange,
                        showPlaceholder: e.loading
                    })
                },
                H = n("KvFq"),
                W = n("BLWH"),
                Q = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            checked: !1,
                            errorSaving: !1,
                            loading: !1,
                            saving: !1
                        }, t.logger = o.p.logger.withCategory("settings").withCategory("hide-subscription-gift-count"), t.onToggleChange = function(e) {
                            t.setState({
                                checked: e,
                                saving: !0
                            }, function() {
                                t.updateSettings(e)
                            })
                        }, t.updateSettings = function(e) {
                            return i.__awaiter(t, void 0, void 0, function() {
                                var t, n;
                                return i.__generator(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            if (this.logger.debug("Updating subscription settings", {
                                                    isGiftCountHidden: e
                                                }), !(this.props.data.currentUser && this.props.data.currentUser.id)) return this.logger.warn("No currentUser - unable to update subscription settings"), [2];
                                            i.label = 1;
                                        case 1:
                                            return i.trys.push([1, 3, , 4]), [4, this.props.updateUserSubscriptionSettings(Object(C.a)({
                                                isGiftCountHidden: e
                                            }))];
                                        case 2:
                                            return i.sent(), t = function(t) {
                                                return t && t.currentUser && t.currentUser.subscriptionSettings && (t.currentUser.subscriptionSettings.isGiftCountHidden = e), t
                                            }, Object(C.e)(W, {}, t), this.logger.debug("Updated subscription settings", {
                                                isGiftCountHidden: e
                                            }), this.setState({
                                                saving: !1,
                                                errorSaving: !1
                                            }), [3, 4];
                                        case 3:
                                            return n = i.sent(), this.logger.warn("Failed to update subscription settings", {
                                                err: n
                                            }), this.setState({
                                                saving: !1,
                                                errorSaving: !0,
                                                checked: !e
                                            }), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
                        e.data.loading && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        var t = e.data.currentUser;
                        if (this.props.data.loading && !e.data.loading) {
                            var n = t && t.subscriptionSettings && t.subscriptionSettings.isGiftCountHidden || !1;
                            this.setState({
                                checked: n
                            })
                        }
                    }, t.prototype.render = function() {
                        var e = this.props.data.currentUser,
                            t = e && e.subscriptionSettings,
                            n = !!this.props.data.error || !this.props.data.loading && !t;
                        return r.createElement(V, {
                            checked: this.state.checked,
                            saving: this.state.saving,
                            loading: this.props.data.loading,
                            errorLoading: n,
                            errorSaving: this.state.errorSaving,
                            onChange: this.onToggleChange
                        })
                    }, t
                }(r.Component),
                Y = Object(u.compose)(Object(k.b)("HideSubscriptionGiftCountSetting"), Object(y.a)(W, {
                    options: {
                        fetchPolicy: "network-only"
                    }
                }), Object(y.a)(H, {
                    name: "updateUserSubscriptionSettings"
                }))(Q),
                K = n("MAvR"),
                $ = n("Ww25"),
                Z = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return r.createElement(h.a, {
                            label: Object(o.d)("Two-Factor Authentication", "TwoFactorAuthenticationSetting"),
                            orientation: f.Fa.Horizontal,
                            error: this.props.status === X.Error,
                            errorMessage: Object(o.d)("Sorry, something went wrong. Please try again later.", "TwoFactorAuthenticationSetting")
                        }, this.renderBody())
                    }, t.prototype.renderBody = function() {
                        switch (this.props.status) {
                            case X.Loading:
                                return this.renderLoading();
                            case X.Error:
                                return this.renderError();
                            case X.UnverifiedEmail:
                                return this.renderVerifyEmail();
                            case X.CanEnable:
                                return this.renderEnableButton();
                            case X.Enabled:
                                return this.renderDisableButton();
                            case X.EnabledAndRequired:
                                return this.renderEnabledAndRequired();
                            default:
                                return null
                        }
                    }, t.prototype.renderLoading = function() {
                        return r.createElement(f.gb, null)
                    }, t.prototype.renderError = function() {
                        return null
                    }, t.prototype.renderVerifyEmail = function() {
                        return r.createElement(f.Xa, null, r.createElement(f.W, {
                            "data-a-target": "tfa-verify-email"
                        }, Object(o.d)("Just verify your email address and two-factor authentication can be enabled.", "TwoFactorAuthenticationSetting")))
                    }, t.prototype.renderEnableButton = function() {
                        return r.createElement(f.Xa, null, r.createElement(f.z, {
                            linkTo: "https://passport.twitch.tv/register_2fa/new",
                            "data-a-target": "tfa-enable-button"
                        }, Object(o.d)("Set Up Two-Factor Authentication", "TwoFactorAuthenticationSetting")), r.createElement($.a, {
                            textDataTarget: "tfa-pitch-message",
                            text: Object(o.d)("It's dangerous to go alone. <x:link>Two-factor authentication</x:link> adds an extra layer of security to your Twitch account by requiring both a password and your mobile phone to login.", {
                                "x:link": function(e) {
                                    return r.createElement("a", {
                                        href: "https://www.authy.com/learn-more",
                                        target: "_blank",
                                        "data-a-target": "tfa-authy-link"
                                    }, e)
                                }
                            }, "TwoFactorAuthenticationSetting")
                        }))
                    }, t.prototype.renderDisableButton = function() {
                        return r.createElement(f.Xa, null, r.createElement(f.z, {
                            linkTo: "https://passport.twitch.tv/disable_2fa/new",
                            "data-a-target": "tfa-disable-button"
                        }, Object(o.d)("Disable two-factor authentication", "TwoFactorAuthenticationSetting")), this.renderEnabledMessage())
                    }, t.prototype.renderEnabledAndRequired = function() {
                        return r.createElement(f.Xa, null, r.createElement(f.W, {
                            "data-a-target": "tfa-required-message"
                        }, Object(o.d)("You must have two-factor authentication enabled.", "TwoFactorAuthenticationSetting")), this.renderEnabledMessage())
                    }, t.prototype.renderEnabledMessage = function() {
                        return r.createElement($.a, {
                            textDataTarget: "tfa-successful-message",
                            text: Object(o.d)("Woohoo! Two-factor authentication is enabled! To reset or change your phone, visit the Authy <x:link>phone reset form</x:link>.", {
                                "x:link": function(e) {
                                    return r.createElement("a", {
                                        href: "https://www.authy.com/phones/reset",
                                        "data-a-target": "tfa-authy-reset"
                                    }, e)
                                }
                            }, "TwoFactorAuthenticationSetting")
                        })
                    }, t
                }(r.Component),
                J = n("7aL7");
            ! function(e) {
                e[e.Loading = 0] = "Loading", e[e.Error = 1] = "Error", e[e.UnverifiedEmail = 2] = "UnverifiedEmail", e[e.CanEnable = 3] = "CanEnable", e[e.Enabled = 4] = "Enabled", e[e.EnabledAndRequired = 5] = "EnabledAndRequired"
            }(X || (X = {}));
            var ee = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.data.loading || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentDidUpdate = function(e) {
                        e.data.loading && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return r.createElement(Z, {
                            status: this.twoFactorStatus
                        })
                    }, Object.defineProperty(t.prototype, "twoFactorStatus", {
                        get: function() {
                            var e = this.props.data,
                                t = e.currentUser;
                            return e.loading ? X.Loading : !t || e.error ? X.Error : this.twoFactorEnabled ? this.userRoleRequiresTwoFactor ? X.EnabledAndRequired : X.Enabled : t.isEmailVerified ? X.CanEnable : X.UnverifiedEmail
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "twoFactorEnabled", {
                        get: function() {
                            var e = this.props.data.currentUser;
                            return !!(e && e.settings && e.settings.hasTwoFactorEnabled)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "userRoleRequiresTwoFactor", {
                        get: function() {
                            var e = this.props.data.currentUser && this.props.data.currentUser.roles;
                            return !(!e || !(e.isGlobalMod || e.isSiteAdmin || e.isStaff))
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(r.Component),
                te = Object(a.compose)(Object(K.a)("TwoFactorAuthenticationSetting"), Object(y.a)(J))(ee),
                ne = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return r.createElement("div", null, r.createElement(S.a, {
                            title: Object(o.d)("Security", "SettingsSecurityPage"),
                            description: Object(o.d)("Keep your account safe and sound", "SettingsSecurityPage")
                        }), r.createElement(b.a, null, r.createElement(x, null), r.createElement(te, null)), r.createElement(S.a, {
                            title: Object(o.d)("Privacy", "SettingsSecurityPage")
                        }), r.createElement(b.a, null, r.createElement(F, null), r.createElement(T, null), r.createElement(Y, null), r.createElement(A, null), r.createElement(G, null), r.createElement(z, null), r.createElement(v, null)))
                    }, t
                }(r.Component),
                ie = Object(a.compose)(Object(k.b)("SettingsSecurityPage", {
                    autoReportInteractive: !0,
                    destination: c.a.SettingsSecurity
                }), Object(s.a)({
                    location: l.PageviewLocation.SettingsPage
                }))(ne);
            n.d(t, "SettingsSecurityPageComponent", function() {
                return ne
            }), n.d(t, "SettingsSecurityPage", function() {
                return ie
            })
        },
        KjYB: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "Settings_ChannelVideo_ChatDelayRadioButtons"
                    },
                    variableDefinitions: [],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
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
                                        value: "chatSettings"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "chatDelayMs"
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
                    end: 101
                }
            };
            n.loc.source = {
                body: "query Settings_ChannelVideo_ChatDelayRadioButtons {\ncurrentUser {\nid\nchatSettings {\nchatDelayMs\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        KvFq: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "UpdateUserSubscriptionSettings"
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
                                    value: "UpdateUserSubscriptionSettingsInput"
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
                                value: "updateUserSubscriptionSettings"
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
                                        value: "subscriptionSettings"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "isGiftCountHidden"
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
                    end: 182
                }
            };
            n.loc.source = {
                body: "mutation UpdateUserSubscriptionSettings($input: UpdateUserSubscriptionSettingsInput!) {\nupdateUserSubscriptionSettings(input: $input) {\nsubscriptionSettings {\nisGiftCountHidden\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "LJ0+": function(e, t, n) {
            "use strict";
            n.r(t);
            var i = n("mrSG"),
                r = n("q1tI"),
                a = n("/MKj"),
                o = n("fvjX"),
                s = n("/7QA"),
                c = n("V+GM"),
                l = n("NvVO"),
                d = n("2xye"),
                u = n("kRBY"),
                m = n("GnwI"),
                p = n("EpBn"),
                g = n("7PeK"),
                h = n("c0Zc"),
                f = n("BK8n"),
                v = n("gi/2"),
                k = n("SlBD"),
                b = n("Ue10"),
                S = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return void 0 === this.props.sessionUser ? null : r.createElement(f.a, null, r.createElement(b.Xa, {
                            display: b.X.Flex,
                            flexWrap: b.Ba.NoWrap
                        }, r.createElement(b.Xa, {
                            className: "tw-form-group__label-container",
                            flexShrink: 0,
                            padding: {
                                right: 2
                            }
                        }, r.createElement(b.W, {
                            fontSize: b.Ca.Size6,
                            bold: !0
                        }, Object(s.d)("Banned Chatters", "BannedChatters"))), r.createElement(b.Xa, {
                            flexGrow: 1,
                            display: b.X.Flex,
                            flexDirection: b.Aa.Column
                        }, r.createElement(v.a, {
                            channelID: this.props.sessionUser.id
                        }), r.createElement(k.a, null))))
                    }, t
                }(r.Component),
                y = Object(o.compose)(Object(m.b)("BannedChattersContainer", {
                    autoReportInteractive: !0
                }))(S);
            var C = Object(a.connect)(function(e) {
                    return {
                        sessionUser: Object(u.e)(e)
                    }
                })(y),
                w = n("oJmH"),
                N = n("yR8l"),
                E = n("geRD"),
                _ = n("2Ygb"),
                O = n("hP+/");

            function T() {
                return function(e) {
                    var t = function(t) {
                        function n() {
                            var e = null !== t && t.apply(this, arguments) || this;
                            return e.logger = s.p.logger.withCategory("with-chat-settings-update"), e.updateChatSettings = function(t) {
                                var n = e.props.channelID;
                                return 0 === n.length ? Promise.reject("No channelID - unable to update chat settings.") : (e.logger.debug("Updating chat settings", {
                                    data: t,
                                    channelID: n
                                }), e.props.updateChatSettings(Object(E.a)(i.__assign({}, t, {
                                    channelID: n
                                }))))
                            }, e
                        }
                        return i.__extends(n, t), n.prototype.render = function() {
                            var t = {
                                updateChatSettings: this.updateChatSettings
                            };
                            return r.createElement(e, i.__assign({}, this.props, t))
                        }, n.displayName = Object(_.a)(n.name, e), n
                    }(r.Component);
                    return Object(o.compose)(Object(a.connect)(function(e) {
                        return {
                            channelID: e.session.user && e.session.user.id || ""
                        }
                    }), Object(N.a)(O, {
                        name: "updateChatSettings"
                    }))(t)
                }
            }
            var D = n("fWal"),
                U = function(e) {
                    var t = e.saving || e.errorLoading;
                    return r.createElement(D.a, {
                        id: "settings-channel-page-block-hyperlinks",
                        label: Object(s.d)("Block Hyperlinks", "BlockHyperlinksToggle"),
                        description: Object(s.d)("Your channel's chat will automatically delete posted URLs except for ones posted by you, moderators, and admins.", "BlockHyperlinksToggle"),
                        error: e.errorSaving || e.errorLoading,
                        checked: e.checked,
                        onChange: e.onChange,
                        disabled: t,
                        showPlaceholder: e.loading
                    })
                },
                F = n("e2/s"),
                x = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            saving: !1,
                            errorSaving: !1,
                            checked: !1
                        }, t.logger = s.p.logger.withCategory("settings").withCategory("chat-block-hyperlinks"), t.onChange = function(e) {
                            t.setState({
                                checked: e,
                                saving: !0
                            }, function() {
                                t.updateChatSettings(e)
                            })
                        }, t.updateChatSettings = function(e) {
                            return i.__awaiter(t, void 0, void 0, function() {
                                var t, n;
                                return i.__generator(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            return r.trys.push([0, 2, , 3]), [4, this.props.updateChatSettings({
                                                hideLinks: e
                                            })];
                                        case 1:
                                            return r.sent(), t = function(t) {
                                                var n = t && t.currentUser,
                                                    r = n && n.chatSettings;
                                                return r ? {
                                                    currentUser: i.__assign({}, n, {
                                                        chatSettings: i.__assign({}, r, {
                                                            blockLinks: e
                                                        })
                                                    })
                                                } : t
                                            }, Object(E.e)(F, {}, t), this.logger.debug("Updated chat setting", {
                                                hideLinks: e
                                            }), this.setState({
                                                saving: !1,
                                                errorSaving: !1
                                            }), [3, 3];
                                        case 2:
                                            return n = r.sent(), this.logger.warn("Failed to save chat setting", {
                                                err: n
                                            }), this.setState({
                                                saving: !1,
                                                errorSaving: !0,
                                                checked: !e
                                            }), [3, 3];
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
                        e.data.loading && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        var t = e.data,
                            n = t.currentUser;
                        if (!t.loading && this.props.data.loading) {
                            var i = n && n.chatSettings && n.chatSettings.blockLinks || !1;
                            this.setState({
                                checked: i
                            })
                        }
                    }, t.prototype.render = function() {
                        var e = this.props.data.currentUser,
                            t = e && e.chatSettings,
                            n = !!this.props.data.error || !this.props.data.loading && !t;
                        return r.createElement(U, {
                            loading: this.props.data.loading,
                            saving: this.state.saving,
                            checked: this.state.checked,
                            errorLoading: n,
                            errorSaving: this.state.errorSaving,
                            onChange: this.onChange
                        })
                    }, t
                }(r.Component),
                j = Object(w.compose)(Object(m.b)("BlockHyperlinksToggle"), Object(N.a)(F, {
                    options: {
                        fetchPolicy: "network-only"
                    }
                }), T())(x),
                I = n("Ww25"),
                P = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onChange = function(e) {
                            var n = +e.currentTarget.value;
                            t.props.onChange(n)
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = this,
                            t = this.props.loading || this.props.saving || this.props.errorLoading,
                            n = [{
                                delay: 0,
                                label: Object(s.d)("Off", "ChatDelayRadioButtons"),
                                selected: 0 === this.props.chatDelayMs
                            }, {
                                delay: 2e3,
                                label: Object(s.d)("2 seconds", "ChatDelayRadioButtons"),
                                selected: 2e3 === this.props.chatDelayMs
                            }, {
                                delay: 4e3,
                                label: Object(s.d)("4 seconds", "ChatDelayRadioButtons"),
                                selected: 4e3 === this.props.chatDelayMs
                            }, {
                                delay: 6e3,
                                label: Object(s.d)("6 seconds", "ChatDelayRadioButtons"),
                                selected: 6e3 === this.props.chatDelayMs
                            }];
                        return r.createElement(p.a, {
                            orientation: b.Fa.Horizontal,
                            label: Object(s.d)("Non-Mod Chat Delay", "ChatDelayRadioButtons"),
                            error: this.props.errorLoading || this.props.errorSaving
                        }, r.createElement(b.Xa, {
                            display: b.X.Flex,
                            flexDirection: b.Aa.Row
                        }, n.map(function(n) {
                            var i = "chat-delay:" + n.label;
                            return r.createElement(b.Xa, {
                                key: i,
                                margin: {
                                    right: 2
                                },
                                display: b.X.Flex,
                                flexDirection: b.Aa.Row
                            }, r.createElement(b.nb, {
                                checked: n.selected,
                                value: n.delay.toString(),
                                label: n.label,
                                name: "Non-Mod Chat Delay: " + n.delay / 1e3 + "s",
                                onChange: e.onChange,
                                disabled: t,
                                "data-test-selector": "chat-delay-radio:" + n.delay
                            }))
                        })), r.createElement(I.a, {
                            text: Object(s.d)("Adds a short delay before non-mods see messages. Any message that is timed out or banned during the delay is removed from chat completely.", "ChatDelayRadioButtons")
                        }))
                    }, t
                }(r.Component),
                L = n("KjYB"),
                A = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            saving: !1,
                            errorSaving: !1,
                            chatDelayMs: 0
                        }, t.logger = s.p.logger.withCategory("settings").withCategory("chat-delay"), t.onChange = function(e) {
                            var n = t.state.chatDelayMs;
                            t.setState({
                                chatDelayMs: e,
                                saving: !0
                            }, function() {
                                t.updateChatSettings(Math.floor(e), n)
                            })
                        }, t.updateChatSettings = function(e, n) {
                            return i.__awaiter(t, void 0, void 0, function() {
                                var t, r;
                                return i.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            return a.trys.push([0, 2, , 3]), [4, this.props.updateChatSettings({
                                                chatDelayInMs: e
                                            })];
                                        case 1:
                                            return a.sent(), t = function(t) {
                                                var n = t && t.currentUser,
                                                    r = n && n.chatSettings;
                                                return r ? {
                                                    currentUser: i.__assign({}, n, {
                                                        chatSettings: i.__assign({}, r, {
                                                            chatDelayMs: e
                                                        })
                                                    })
                                                } : t
                                            }, Object(E.e)(L, {}, t), this.logger.debug("Updated chat setting", {
                                                chatDelayInMs: e
                                            }), this.setState({
                                                saving: !1,
                                                errorSaving: !1
                                            }), [3, 3];
                                        case 2:
                                            return r = a.sent(), this.logger.warn("Failed to save chat setting", {
                                                err: r
                                            }), this.setState({
                                                saving: !1,
                                                errorSaving: !0,
                                                chatDelayMs: n
                                            }), [3, 3];
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
                        e.data.loading && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        if (!e.data.loading && this.props.data.loading) {
                            var t = this.getChatDelayFromProps(e);
                            this.setState({
                                chatDelayMs: t
                            })
                        }
                    }, t.prototype.render = function() {
                        var e = this.props.data.currentUser,
                            t = e && e.chatSettings,
                            n = !!this.props.data.error || !this.props.data.loading && !t;
                        return r.createElement(P, {
                            chatDelayMs: this.state.chatDelayMs,
                            saving: this.state.saving,
                            loading: this.props.data.loading,
                            errorLoading: n,
                            errorSaving: this.state.errorSaving,
                            onChange: this.onChange
                        })
                    }, t.prototype.getChatDelayFromProps = function(e) {
                        var t = e.data.currentUser;
                        return t && t.chatSettings && t.chatSettings.chatDelayMs || 0
                    }, t
                }(r.Component),
                R = Object(w.compose)(Object(m.b)("ChatDelayRadioButtons"), Object(N.a)(L, {
                    options: {
                        fetchPolicy: "network-only"
                    }
                }), T())(A),
                B = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = null,
                            t = this.props.loading || this.props.saving || this.props.errorLoading;
                        return (this.props.dirty || this.props.saving) && (e = r.createElement(b.Xa, {
                            margin: {
                                top: 1
                            }
                        }, r.createElement(b.z, {
                            onClick: this.props.onClickSave,
                            state: this.props.saving ? b.E.Loading : b.E.Default
                        }, Object(s.d)("Save Changes", "ChatRulesTextArea")))), r.createElement(p.a, {
                            orientation: b.Fa.Horizontal,
                            label: Object(s.d)("Chat Rules", "ChatRulesTextArea"),
                            error: this.props.errorLoading || this.props.errorSaving
                        }, r.createElement(b.Qb, {
                            disabled: t,
                            value: this.props.rules,
                            onChange: this.props.onChange,
                            placeholder: this.renderPlaceholderString(),
                            rows: 5
                        }), r.createElement(I.a, {
                            text: Object(s.d)("Require first-time viewers to agree to your rules before chatting. One rule per line.", "ChatRulesTextArea")
                        }), e)
                    }, t.prototype.renderPlaceholderString = function() {
                        return "- " + [Object(s.d)("Be excellent to each other.", "ChatRulesTextArea"), Object(s.d)("Have fun!", "ChatRulesTextArea")].join("\n- ")
                    }, t
                }(r.Component),
                q = n("THrO"),
                z = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            saving: !1,
                            errorSaving: !1,
                            initialRules: "",
                            rules: ""
                        }, t.logger = s.p.logger.withCategory("settings").withCategory("chat-rules"), t.onChange = function(e) {
                            t.setState({
                                rules: e.currentTarget.value
                            })
                        }, t.onClickSave = function() {
                            t.setState({
                                saving: !0
                            }, t.updateChatSettings)
                        }, t.updateChatSettings = function() {
                            return i.__awaiter(t, void 0, void 0, function() {
                                var e, t, n;
                                return i.__generator(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            return r.trys.push([0, 2, , 3]), e = this.state.rules.split("\n"), [4, this.props.updateChatSettings({
                                                rules: e
                                            })];
                                        case 1:
                                            return r.sent(), t = function(t) {
                                                var n = t && t.currentUser,
                                                    r = n && n.chatSettings;
                                                return r ? {
                                                    currentUser: i.__assign({}, n, {
                                                        chatSettings: i.__assign({}, r, {
                                                            rules: e
                                                        })
                                                    })
                                                } : t
                                            }, Object(E.e)(q, {}, t), this.logger.debug("Updated chat setting", {
                                                rules: e
                                            }), this.setState(function(e) {
                                                return {
                                                    saving: !1,
                                                    initialRules: e.rules,
                                                    errorSaving: !1
                                                }
                                            }), [3, 3];
                                        case 2:
                                            return n = r.sent(), this.logger.warn("Failed to save chat setting", {
                                                err: n
                                            }), this.setState({
                                                saving: !1,
                                                errorSaving: !0
                                            }), [3, 3];
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
                        e.data.loading && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        if (!e.data.loading && this.props.data.loading) {
                            var t = this.getRulesFromProps(e);
                            this.setState({
                                rules: t,
                                initialRules: t
                            })
                        }
                    }, t.prototype.render = function() {
                        var e = this.props.data.currentUser,
                            t = e && e.chatSettings,
                            n = !!this.props.data.error || !this.props.data.loading && !t;
                        return r.createElement(B, {
                            rules: this.state.rules,
                            dirty: this.state.initialRules !== this.state.rules,
                            saving: this.state.saving,
                            loading: this.props.data.loading,
                            errorLoading: n,
                            errorSaving: this.state.errorSaving,
                            onChange: this.onChange,
                            onClickSave: this.onClickSave
                        })
                    }, t.prototype.getRulesFromProps = function(e) {
                        var t = e.data.currentUser;
                        return t && t.chatSettings && t.chatSettings.rules.join("\n") || ""
                    }, t
                }(r.Component),
                M = Object(w.compose)(Object(m.b)("ChatRulesTextArea"), Object(N.a)(q, {
                    options: {
                        fetchPolicy: "network-only"
                    }
                }), T())(z),
                X = function(e) {
                    var t = e.saving || e.errorLoading;
                    return r.createElement(D.a, {
                        id: "settings-channel-page-email-verification",
                        label: Object(s.d)("Email Verification", "EmailVerificationToggle"),
                        description: Object(s.d)("Anyone that would like to send messages to your chat room must first verify their email address.", "EmailVerificationToggle"),
                        error: e.errorSaving || e.errorLoading,
                        checked: e.checked,
                        onChange: e.onChange,
                        disabled: t,
                        showPlaceholder: e.loading
                    })
                },
                G = n("pUt1"),
                V = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            saving: !1,
                            errorSaving: !1,
                            checked: !1
                        }, t.logger = s.p.logger.withCategory("settings").withCategory("chat-require-verified-email"), t.onChange = function(e) {
                            t.setState({
                                checked: e,
                                saving: !0
                            }, function() {
                                t.updateChatSettings(e)
                            })
                        }, t.updateChatSettings = function(e) {
                            return i.__awaiter(t, void 0, void 0, function() {
                                var t, n;
                                return i.__generator(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            return r.trys.push([0, 2, , 3]), [4, this.props.updateChatSettings({
                                                requireVerifiedAccount: e
                                            })];
                                        case 1:
                                            return r.sent(), t = function(t) {
                                                var n = t && t.currentUser,
                                                    r = n && n.chatSettings;
                                                return r ? {
                                                    currentUser: i.__assign({}, n, {
                                                        chatSettings: i.__assign({}, r, {
                                                            requireVerifiedAccount: e
                                                        })
                                                    })
                                                } : t
                                            }, Object(E.e)(G, {}, t), this.logger.debug("Updated chat setting", {
                                                requireVerifiedAccount: e
                                            }), this.setState({
                                                saving: !1,
                                                errorSaving: !1
                                            }), [3, 3];
                                        case 2:
                                            return n = r.sent(), this.logger.warn("Failed to save chat setting", {
                                                err: n
                                            }), this.setState({
                                                saving: !1,
                                                errorSaving: !0,
                                                checked: !e
                                            }), [3, 3];
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
                        e.data.loading && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        var t = e.data,
                            n = t.currentUser;
                        if (!t.loading && this.props.data.loading) {
                            var i = n && n.chatSettings && n.chatSettings.requireVerifiedAccount || !1;
                            this.setState({
                                checked: i
                            })
                        }
                    }, t.prototype.render = function() {
                        var e = this.props.data.currentUser,
                            t = e && e.chatSettings,
                            n = !!this.props.data.error || !this.props.data.loading && !t;
                        return r.createElement(X, {
                            loading: this.props.data.loading,
                            saving: this.state.saving,
                            checked: this.state.checked,
                            onChange: this.onChange,
                            errorLoading: n,
                            errorSaving: this.state.errorSaving
                        })
                    }, t
                }(r.Component),
                H = Object(w.compose)(Object(m.b)("EmailVerificationToggle"), Object(N.a)(G, {
                    options: {
                        fetchPolicy: "network-only"
                    }
                }), T())(V),
                W = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderContentSettingsSection = function() {
                            return r.createElement(b.Xa, null, r.createElement(h.a, {
                                title: Object(s.d)("Content Settings", "SettingsChannelPage"),
                                description: Object(s.d)("Choose how your channel will display for certain users", "SettingsChannelPage")
                            }), r.createElement(g.a, null, r.createElement(p.a, {
                                label: Object(s.d)("Mature Content", "SettingsChannelPage")
                            }, Object(s.d)("Mature Content Toggle setting has moved. You can find it in <x:link>your dashboard</x:link>.", {
                                "x:link": t.renderDashboardLink
                            }, "MatureContentToggleLink"))))
                        }, t.renderChatSettingsSection = function() {
                            return r.createElement(b.Xa, null, r.createElement(h.a, {
                                title: Object(s.d)("Chat Options", "SettingsChannelPage"),
                                description: Object(s.d)("Moderate your channel's chat and who you allow in it", "SettingsChannelPage")
                            }), r.createElement(g.a, null, t.renderAutoModSettingsLink(), r.createElement(j, null), r.createElement(H, null), r.createElement(M, null), r.createElement(R, null), r.createElement(C, null)))
                        }, t.renderDashboardLink = function(e) {
                            return r.createElement(b.U, {
                                to: "/" + t.props.sessionUserLogin + "/dashboard/settings"
                            }, e)
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return r.createElement(r.Fragment, null, this.renderContentSettingsSection(), this.renderVideoPlayerBannerSection(), this.renderTeamSettingsSection(), this.renderChatSettingsSection(), this.renderAutohostSettingsSection())
                    }, t.prototype.renderTeamSettingsSection = function() {
                        return r.createElement(b.Xa, null, r.createElement(h.a, {
                            title: Object(s.d)("My Teams", "SettingsChannelPage"),
                            description: Object(s.d)("Manage your teams here.", "SettingsChannelPage")
                        }), r.createElement(g.a, null, r.createElement(p.a, {
                            label: Object(s.d)("Team Settings", "SettingsChannelPage")
                        }, Object(s.d)("Team Settings have moved. You can find them in <x:link>your dashboard</x:link>.", {
                            "x:link": this.renderDashboardLink
                        }, "MatureContentToggleLink"))))
                    }, t.prototype.renderVideoPlayerBannerSection = function() {
                        var e = Object(s.d)("Video Player Banner", "SettingsChannelPage");
                        return r.createElement(b.Xa, null, r.createElement(h.a, {
                            title: e,
                            description: Object(s.d)("This is displayed on the player when your channel is offline.", "SettingsChannelPage")
                        }), r.createElement(g.a, null, r.createElement(p.a, {
                            label: e
                        }, Object(s.d)("Video Player Banner has moved. You can find it in <x:link>your dashboard</x:link>.", {
                            "x:link": this.renderDashboardLink
                        }, "MatureContentToggleLink"))))
                    }, t.prototype.renderAutoModSettingsLink = function() {
                        return r.createElement(p.a, {
                            label: Object(s.d)("AutoMod", "AutomodSettingsLink")
                        }, Object(s.d)("AutoMod and blocked and permitted terms settings have moved. You can find them in <x:link>your dashboard</x:link>.", {
                            "x:link": this.renderDashboardLink
                        }, "AutomodSettingsLink"))
                    }, t.prototype.renderAutohostSettingsSection = function() {
                        var e = Object(s.d)("Auto Hosting", "AutohostSettingsLinkComponent");
                        return r.createElement(r.Fragment, null, r.createElement(h.a, {
                            title: e
                        }), r.createElement(g.a, null, r.createElement(p.a, {
                            label: e
                        }, Object(s.d)("Auto Host settings have moved. You can find them in <x:link>your dashboard</x:link>.", {
                            "x:link": this.renderDashboardLink
                        }, "AutohostSettingsLinkComponent"))))
                    }, t
                }(r.Component),
                Q = Object(o.compose)(Object(m.b)("SettingsChannelPage", {
                    autoReportInteractive: !0,
                    destination: l.a.SettingsChannel
                }), Object(c.a)({
                    location: d.PageviewLocation.SettingsPage
                }), Object(a.connect)(function(e) {
                    var t = Object(u.e)(e);
                    return {
                        sessionUserLogin: t ? t.login : ""
                    }
                }))(W);
            n.d(t, "SettingsChannelPageComponent", function() {
                return W
            }), n.d(t, "SettingsChannelPage", function() {
                return Q
            })
        },
        "LZ/t": function(e, t, n) {},
        NZo8: function(e, t) {
            e.exports = function(e) {
                var t = e[0] / 60,
                    n = e[1] / 100,
                    i = e[2] / 100,
                    r = Math.floor(t) % 6,
                    a = t - Math.floor(t),
                    o = 255 * i * (1 - n),
                    s = 255 * i * (1 - n * a),
                    c = 255 * i * (1 - n * (1 - a));
                switch (i *= 255, r) {
                    case 0:
                        return [i, c, o];
                    case 1:
                        return [s, i, o];
                    case 2:
                        return [o, i, c];
                    case 3:
                        return [o, s, i];
                    case 4:
                        return [c, o, i];
                    case 5:
                        return [i, o, s]
                }
            }
        },
        NkC9: function(e, t, n) {},
        P6LE: function(e, t, n) {},
        "Puv/": function(e, t) {
            e.exports = function(e) {
                return (299 * e[0] + 587 * e[1] + 114 * e[2]) / 1e3
            }
        },
        "Q0+g": function(e, t) {
            e.exports = function(e) {
                var t = "rgb";
                return 4 === e.length && (t += "a"), e[0] = Math.round(e[0]), e[1] = Math.round(e[1]), e[2] = Math.round(e[2]), t + "(" + e.join(",") + ")"
            }
        },
        QZn1: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ChatColorPicker_CurrentUser"
                    },
                    variableDefinitions: [],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
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
                                        value: "login"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "chatColor"
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
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 84
                }
            };
            n.loc.source = {
                body: "query ChatColorPicker_CurrentUser {\ncurrentUser {\nid\nlogin\nchatColor\ndisplayName\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        QiP8: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "Settings_Security_HideDirectoryToggle"
                    },
                    variableDefinitions: [],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
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
                                        value: "settings"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "isDirectoryHidden"
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
                    end: 97
                }
            };
            n.loc.source = {
                body: "query Settings_Security_HideDirectoryToggle {\ncurrentUser {\nid\nsettings {\nisDirectoryHidden\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        R4sh: function(e, t, n) {
            "use strict";

            function i(e) {
                var t = [e[0], e[1], e[2]].map(function(e) {
                    return (e /= 255) <= .03928 ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4)
                });
                return .2126 * t[0] + .7152 * t[1] + .0722 * t[2]
            }

            function r(e, t) {
                var n = i(e) + .05,
                    r = i(t) + .05;
                return n > r ? n / r : r / n
            }
            n.d(t, "a", function() {
                return r
            })
        },
        Rk0n: function(e, t, n) {},
        S2IA: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "UpdatePrimeSettings_PostSubscription"
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
                                    value: "UpdatePrimeSettingsInput"
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
                                value: "updatePrimeSettings"
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
                                        value: "primeSettings"
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
                                                value: "isSubCreditChatNotificationEnabled"
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
                body: "mutation UpdatePrimeSettings_PostSubscription($input: UpdatePrimeSettingsInput!) {\nupdatePrimeSettings(input: $input) {\nprimeSettings {\nid\nisSubCreditChatNotificationEnabled\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "ST+a": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "SettingsPrimePage_PrimeEmotesSetPicker"
                    },
                    variableDefinitions: [],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
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
                                        value: "primeSettings"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "CurrentUserPrimeSettings"
                                            },
                                            directives: []
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }, {
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "CurrentUserPrimeSettings"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "PrimeSettings"
                        }
                    },
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
                                value: "primeEmoticons"
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "currentSetName"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "emoticonSets"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "PrimeEmoticonsSmiliesSet"
                                            },
                                            directives: []
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }, {
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "PrimeEmoticonsSmiliesSet"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "SmiliesSet"
                        }
                    },
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
                                value: "emotes"
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "FragmentSpread",
                                    name: {
                                        kind: "Name",
                                        value: "EmoteSetEmote"
                                    },
                                    directives: []
                                }]
                            }
                        }]
                    }
                }, {
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "EmoteSetEmote"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Emote"
                        }
                    },
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
                }],
                loc: {
                    start: 0,
                    end: 377
                }
            };
            n.loc.source = {
                body: "query SettingsPrimePage_PrimeEmotesSetPicker {\ncurrentUser {\nid\nprimeSettings {\n...CurrentUserPrimeSettings\n}\n}\n}\nfragment CurrentUserPrimeSettings on PrimeSettings {\nid\nprimeEmoticons {\ncurrentSetName\nemoticonSets {\n...PrimeEmoticonsSmiliesSet\n}\n}\n}\nfragment PrimeEmoticonsSmiliesSet on SmiliesSet {\nid\nemotes {\n...EmoteSetEmote\n}\n}\nfragment EmoteSetEmote on Emote {\nid\ntext\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "Sdr/": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "DeleteRecommendationFeedback"
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
                                    value: "DeleteRecommendationFeedbackInput"
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
                                value: "deleteRecommendationFeedback"
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
                                        value: "feedbackID"
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
                    end: 144
                }
            };
            n.loc.source = {
                body: "mutation DeleteRecommendationFeedback($input: DeleteRecommendationFeedbackInput!) {\ndeleteRecommendationFeedback(input: $input) {\nfeedbackID\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        SlBD: function(e, t, n) {
            "use strict";
            var i, r = n("mrSG"),
                a = n("q1tI"),
                o = n("fvjX"),
                s = n("/7QA"),
                c = n("4VQm"),
                l = n("yR8l"),
                d = n("geRD"),
                u = n("GnwI"),
                m = n("Ue10"),
                p = n("pnuN"),
                g = (n("5EjR"), n("pNbj"));
            ! function(e) {
                e.BannedUserName = "banned-chatters-component__user-name", e.BannedDate = "banned-chatters-component__banned-date", e.BannedByUserName = "banned-chatters-component__banned-by-user-name"
            }(i || (i = {}));
            var h = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            error: !1,
                            working: !1
                        }, t.handleDeleteBannedChatterClick = function(e) {
                            t.setState({
                                error: !1,
                                working: !0
                            });
                            var n = e.currentTarget.getAttribute("data-chatter-login"),
                                i = e.currentTarget.getAttribute("data-chatter-id");
                            null !== i && null !== n ? t.unbanUserFromChat(n, i) : t.setState({
                                error: !0,
                                working: !1
                            })
                        }, t.unbanUserFromChat = function(e, n) {
                            return r.__awaiter(t, void 0, void 0, function() {
                                var t, i, a, o;
                                return r.__generator(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            if (!this.props.data || !this.props.data.currentUser || null === this.props.data.currentUser.id) return this.setState({
                                                error: !0,
                                                working: !1
                                            }), [2];
                                            t = {
                                                bannedUserLogin: e,
                                                channelID: this.props.data.currentUser.id
                                            }, i = {
                                                unbanUserFromChatRoom: {
                                                    __typename: "UnbanUserFromChatRoomPayload",
                                                    ban: {
                                                        __typename: "ChatRoomBanStatus",
                                                        bannedUser: {
                                                            __typename: "User",
                                                            id: n,
                                                            login: e
                                                        },
                                                        createdAt: "faketime",
                                                        moderator: null
                                                    },
                                                    error: null
                                                }
                                            }, r.label = 1;
                                        case 1:
                                            return r.trys.push([1, 3, , 4]), [4, this.props.unbanUserFromChatQuery(Object(d.b)(t, i))];
                                        case 2:
                                            return a = r.sent(), o = function(e) {
                                                return e && e.currentUser && e.currentUser.bannedUsers && (e.currentUser.bannedUsers = e.currentUser.bannedUsers.filter(function(e) {
                                                    return e.bannedUser && e.bannedUser.id !== n
                                                })), e
                                            }, a.data && null !== a.data.unbanUserFromChatRoom && (null === a.data.unbanUserFromChatRoom.error ? (Object(d.e)(p, {}, o), this.setState({
                                                error: !1,
                                                working: !1
                                            })) : this.setState({
                                                error: !0,
                                                working: !1
                                            })), [3, 4];
                                        case 3:
                                            return r.sent(), this.setState({
                                                error: !0,
                                                working: !1
                                            }), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.data.currentUser && this.props.data.currentUser.bannedUsers && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentDidUpdate = function() {
                        this.props.data.currentUser && this.props.data.currentUser.bannedUsers && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return this.props.data.currentUser && this.props.data.currentUser.bannedUsers && this.props.data.currentUser.bannedUsers.length > 0 ? this.renderBannedChatters() : this.renderEmptyMessage()
                    }, t.prototype.renderBannedChatters = function() {
                        var e = this,
                            t = this.props.data.currentUser && this.props.data.currentUser.bannedUsers;
                        if (!t) return null;
                        var n = t.filter(function(e) {
                                return e && e.bannedUser && e.bannedUser.id
                            }),
                            r = n.length >= 100 ? "99+" : n.length;
                        return a.createElement(c.b, {
                            className: "banned-chatters__list",
                            autoHide: !0
                        }, a.createElement(m.Cb, {
                            background: m.r.Base,
                            elevation: 1,
                            padding: {
                                bottom: .5
                            }
                        }, this.state.error && this.renderError(), a.createElement(m.Xa, {
                            padding: .5
                        }, Object(s.d)("<x:bold>Currently Banned </x:bold>({countBannedUsers})", {
                            countBannedUsers: r,
                            "x:bold": function(e) {
                                return a.createElement(m.W, {
                                    bold: !0,
                                    type: m.Tb.Span
                                }, e)
                            }
                        }, "BannedChatters")), a.createElement(m.Fb, null, a.createElement(m.Ib, null, a.createElement(m.Jb, {
                            label: Object(s.d)("Username", "BannedChatters")
                        }), a.createElement(m.Jb, {
                            label: Object(s.d)("Added By", "BannedChatters")
                        }), a.createElement(m.Jb, {
                            label: Object(s.d)("Time Banned", "BannedChatters")
                        }), a.createElement(m.Jb, {
                            textAlign: m.Pb.Center,
                            label: Object(s.d)("Actions", "BannedChatters")
                        })), a.createElement(m.Gb, null, n.map(function(t) {
                            return a.createElement(m.Kb, {
                                key: t.bannedUser.id
                            }, a.createElement(m.Hb, null, a.createElement(m.Pa, {
                                padding: {
                                    right: 4,
                                    bottom: .5
                                }
                            }, a.createElement(m.W, {
                                ellipsis: !0,
                                bold: !0,
                                "data-test-selector": i.BannedUserName
                            }, t.bannedUser && t.bannedUser.login))), a.createElement(m.Hb, null, a.createElement(m.W, {
                                "data-test-selector": i.BannedByUserName
                            }, t.modUser && t.modUser.displayName || Object(s.d)("an unknown user", "BannedChatters"))), a.createElement(m.Hb, null, a.createElement(m.W, {
                                "data-test-selector": i.BannedDate
                            }, Object(s.c)(new Date(t.bannedAt)))), a.createElement(m.Hb, {
                                textAlign: m.Pb.Center
                            }, a.createElement(m.Wb, {
                                label: Object(s.d)("Unban", "BannedChatters")
                            }, a.createElement(m.A, {
                                "data-chatter-login": t.bannedUser ? t.bannedUser.login : "",
                                "data-chatter-id": t.bannedUser ? t.bannedUser.id : "",
                                icon: m.rb.Trash,
                                type: m.C.Secondary,
                                onClick: e.handleDeleteBannedChatterClick,
                                disabled: !!e.state.working
                            }))))
                        })))))
                    }, t.prototype.renderError = function() {
                        return a.createElement(m.Xa, {
                            padding: .5
                        }, a.createElement(m.W, {
                            bold: !0,
                            color: m.O.Error
                        }, Object(s.d)("An error occurred, please try again.", "BannedChatters")))
                    }, t.prototype.renderEmptyMessage = function() {
                        return a.createElement(m.W, {
                            color: m.O.Alt2
                        }, Object(s.d)("There are no users banned from your chat.", "BannedChatters"))
                    }, t
                }(a.Component),
                f = Object(o.compose)(Object(l.a)(p), Object(l.a)(g, {
                    name: "unbanUserFromChatQuery"
                }), Object(u.b)("BannedChatters"))(h);
            n.d(t, "a", function() {
                return f
            })
        },
        SrOR: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "Settings_Connections_Steam"
                    },
                    variableDefinitions: [],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
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
                                        value: "accountConnections"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "steam"
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
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 91
                }
            };
            n.loc.source = {
                body: "query Settings_Connections_Steam {\ncurrentUser {\nid\naccountConnections {\nsteam {\nid\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        SyMV: function(e, t, n) {},
        THrO: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "Settings_ChannelVideo_ChatRulesTextArea"
                    },
                    variableDefinitions: [],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
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
                                        value: "chatSettings"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "rules"
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
                    end: 91
                }
            };
            n.loc.source = {
                body: "query Settings_ChannelVideo_ChatRulesTextArea {\ncurrentUser {\nid\nchatSettings {\nrules\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        UP6V: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            });
            var i = n("mrSG"),
                r = n("/7QA"),
                a = n("kRBY");

            function o(e, t) {
                var n = Object(a.e)(r.p.store.getState());
                if (!n) return fetch(e, t);
                var o, c = t ? t.headers : {};
                if (Array.isArray(c)) {
                    var l = (o = c.slice()).findIndex(function(e) {
                        return "Authorization" === e[0]
                    });
                    l >= 0 && o.splice(l, 1), o.push(["Authorization", s(n)])
                } else c instanceof Headers ? (o = new Headers(c)).set("Authorization", s(n)) : o = i.__assign({}, c, {
                    Authorization: s(n)
                });
                return fetch(e, i.__assign({}, t, {
                    headers: o
                }))
            }

            function s(e) {
                return "OAuth " + e.authToken
            }
        },
        W61N: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "SettingsPrimePage_CurrentUser"
                    },
                    variableDefinitions: [],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
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
                                        value: "hasPrime"
                                    },
                                    arguments: [],
                                    directives: []
                                }]
                            }
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "requestInfo"
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "countryCode"
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
                    end: 95
                }
            };
            n.loc.source = {
                body: "query SettingsPrimePage_CurrentUser {\ncurrentUser {\nid\nhasPrime\n}\nrequestInfo {\ncountryCode\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "X+nQ": function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("q1tI"),
                a = n("oJmH"),
                o = n("/7QA"),
                s = n("yR8l"),
                c = n("GnwI"),
                l = n("9pSj"),
                d = Object(c.b)("AmazonPrimeLogo", {
                    autoReportInteractive: !0
                })(function(e) {
                    var t = e.width || "110",
                        n = e.height || "20";
                    return r.createElement("svg", {
                        width: t + "px",
                        height: n + "px",
                        viewBox: "0 0 329.9 63.93",
                        fill: "currentColor"
                    }, r.createElement("path", {
                        d: "M183.95 54.13a1.57 1.57 0 0 1-1.08-.31 1.46 1.46 0 0 1-.34-1.11V14.79a1.46 1.46 0 0 1 .34-1.11 1.57 1.57 0 0 1 1.08-.31h4.09a1.47 1.47 0 0 1 1.59 1.25l.4 1.48a12.56 12.56 0 0 1 4.12-2.62 13.13 13.13 0 0 1 4.92-1 10.56 10.56 0 0 1 8.73 4q3.21 4 3.21 10.92a19.88 19.88 0 0 1-1.59 8.24 12.89 12.89 0 0 1-4.32 5.43 10.65 10.65 0 0 1-6.25 1.9 13.29 13.29 0 0 1-4.43-.74 10.65 10.65 0 0 1-3.58-2v12.45a1.18 1.18 0 0 1-1.42 1.42h-5.47zm12.45-17.34a5.32 5.32 0 0 0 4.69-2.16q1.51-2.16 1.51-6.82t-1.49-6.84a5.31 5.31 0 0 0-4.72-2.16 10.83 10.83 0 0 0-5.57 1.54v15a10.44 10.44 0 0 0 5.58 1.44zM217.95 42.42a1.23 1.23 0 0 1-1.42-1.42V14.79a1.47 1.47 0 0 1 .34-1.11 1.57 1.57 0 0 1 1.08-.31h4.09a1.47 1.47 0 0 1 1.59 1.25l.74 3.07a16.24 16.24 0 0 1 4.29-3.55 9.16 9.16 0 0 1 4.29-1.05h.8a1.67 1.67 0 0 1 1.14.31 1.46 1.46 0 0 1 .34 1.11v4.78a1.57 1.57 0 0 1-.31 1.08 1.46 1.46 0 0 1-1.11.34q-.4 0-1-.06t-1.59-.06a16.94 16.94 0 0 0-3.18.37 15.66 15.66 0 0 0-3.18.94v19.07a1.57 1.57 0 0 1-.31 1.08 1.47 1.47 0 0 1-1.11.34h-5.49zM243.44 8.87a4.94 4.94 0 0 1-3.47-1.19 4.67 4.67 0 0 1 0-6.48 5.63 5.63 0 0 1 6.94 0 4.67 4.67 0 0 1 0 6.48 5 5 0 0 1-3.47 1.19zm-2.73 33.54a1.23 1.23 0 0 1-1.42-1.42v-26.2a1.46 1.46 0 0 1 .34-1.11 1.57 1.57 0 0 1 1.08-.31h5.46a1.18 1.18 0 0 1 1.42 1.42v26.18a1.57 1.57 0 0 1-.31 1.08 1.46 1.46 0 0 1-1.11.34h-5.46zM256.05 42.42a1.23 1.23 0 0 1-1.42-1.42V14.79a1.47 1.47 0 0 1 .34-1.11 1.57 1.57 0 0 1 1.08-.31h4.09a1.47 1.47 0 0 1 1.59 1.25l.46 1.54a24.53 24.53 0 0 1 5.43-2.81 15.31 15.31 0 0 1 5-.82q5.12 0 7.22 3.64a23.26 23.26 0 0 1 5.46-2.79 16.6 16.6 0 0 1 5.29-.85 8.28 8.28 0 0 1 6.17 2.22 8.44 8.44 0 0 1 2.19 6.22v20a1.57 1.57 0 0 1-.31 1.08 1.47 1.47 0 0 1-1.11.34h-5.46a1.23 1.23 0 0 1-1.42-1.42V22.75q0-3.87-3.47-3.87a14.41 14.41 0 0 0-6.2 1.48v20.61a1.57 1.57 0 0 1-.31 1.08 1.46 1.46 0 0 1-1.11.34h-5.46a1.23 1.23 0 0 1-1.45-1.42V22.75q0-3.87-3.47-3.87a13.85 13.85 0 0 0-6.25 1.53v20.56a1.57 1.57 0 0 1-.31 1.08 1.47 1.47 0 0 1-1.11.34h-5.46zM318.64 43.27q-7.05 0-10.83-3.87t-3.78-11.09q0-7.39 3.87-11.6t10.75-4.21q5.29 0 8.27 2.56a8.54 8.54 0 0 1 3 6.82 7.31 7.31 0 0 1-3.21 6.45q-3.21 2.19-9.47 2.19a22.37 22.37 0 0 1-5.63-.63q.34 3.81 2.3 5.46t5.94 1.65a23.55 23.55 0 0 0 3.1-.2 38.49 38.49 0 0 0 4.18-.88l.34-.09h.28q1 0 1 1.31v2.62a2.36 2.36 0 0 1-.25 1.28 2.1 2.1 0 0 1-1 .65 24.41 24.41 0 0 1-8.86 1.58zm-1.88-17.85a7.72 7.72 0 0 0 4.21-.88 3 3 0 0 0 1.31-2.7q0-3.58-4.26-3.58-5.46 0-6.31 6.71a25.83 25.83 0 0 0 5.06.45z"
                    }), r.createElement("path", {
                        "fill-rule": "evenodd",
                        d: "M105.17 52.8c-9.85 7.27-24.14 11.17-36.44 11.17a66 66 0 0 1-44.52-17c-.92-.83-.1-2 1-1.33a89.61 89.61 0 0 0 44.55 11.82 88.62 88.62 0 0 0 34-7c1.65-.67 3.04 1.13 1.41 2.34z"
                    }), r.createElement("path", {
                        "fill-rule": "evenodd",
                        d: "M109.28 48.11c-1.26-1.61-8.33-.76-11.51-.38-1 .12-1.11-.73-.24-1.33 5.64-4 14.88-2.82 16-1.49s-.28 10.61-5.57 15c-.81.68-1.59.32-1.23-.58 1.14-2.95 3.81-9.6 2.55-11.22zM98.04 18.41v-3.85a1 1 0 0 1 1-1h17.26a1 1 0 0 1 1 1v3.3a5.42 5.42 0 0 1-1.3 2.42l-8.94 12.76a19.14 19.14 0 0 1 9.84 2.11 1.76 1.76 0 0 1 .92 1.5v4.11a.92.92 0 0 1-1.27.88 19.87 19.87 0 0 0-18.23 0 .92.92 0 0 1-1.23-.89v-3.9a4.64 4.64 0 0 1 .64-2.65l10.36-14.86h-9a1 1 0 0 1-1.05-.93zM35.1 42.45h-5.25a1 1 0 0 1-.94-.89V14.62a1 1 0 0 1 1-1h4.89a1 1 0 0 1 1 .91v3.52h.1c1.27-3.4 3.68-5 6.91-5s5.34 1.59 6.81 5a7.75 7.75 0 0 1 13.33-2c1.67 2.27 1.32 5.56 1.32 8.45v17a1 1 0 0 1-1 1h-5.32a1 1 0 0 1-.94-1V27.2a34.43 34.43 0 0 0-.15-5 2.74 2.74 0 0 0-3.09-2.33 3.48 3.48 0 0 0-3.14 2.21 16.32 16.32 0 0 0-.49 5.16v14.28a1 1 0 0 1-1 1h-5.19a1 1 0 0 1-.94-1V27.2c0-3 .49-7.43-3.23-7.43s-3.63 4.31-3.63 7.43v14.28a1 1 0 0 1-1.05.97zM132.12 13.08c7.79 0 12 6.69 12 15.2 0 8.22-4.65 14.74-12 14.74-7.64 0-11.81-6.69-11.81-15s4.22-14.94 11.81-14.94zm0 5.5c-3.87 0-4.12 5.27-4.12 8.56s0 10.32 4.07 10.32 4.26-5.67 4.26-9.13a24.91 24.91 0 0 0-.78-7.14 3.29 3.29 0 0 0-3.38-2.61zM154.23 42.45H149a1 1 0 0 1-.94-1v-27a1 1 0 0 1 1-.88h4.89a1 1 0 0 1 .93.75v4.12h.07c1.47-3.69 3.53-5.44 7.15-5.44a6.88 6.88 0 0 1 6.13 3.18c1.37 2.15 1.37 5.78 1.37 8.39v17a1 1 0 0 1-1 .85h-5.25a1 1 0 0 1-.93-.85v-14.6c0-2.95.34-7.26-3.28-7.26a3.44 3.44 0 0 0-3 2.15 12 12 0 0 0-.83 5.1v14.51a1 1 0 0 1-1.08.98zM84.29 29.58c0 2 0 3.75-1 5.57a4.27 4.27 0 0 1-3.63 2.39c-2 0-3.19-1.53-3.19-3.81 0-4.47 4-5.28 7.81-5.28v1.14zm5.29 12.8a1.09 1.09 0 0 1-1.24.12 12.83 12.83 0 0 1-3-3.5c-2.88 2.94-4.92 3.82-8.65 3.82-4.42 0-7.86-2.73-7.86-8.18a8.92 8.92 0 0 1 5.6-8.58c2.85-1.25 6.83-1.48 9.87-1.82v-.68c0-1.25.1-2.73-.64-3.81a3.51 3.51 0 0 0-2.95-1.36 4 4 0 0 0-4.22 3.15 1.11 1.11 0 0 1-.91 1l-5.09-.55a.92.92 0 0 1-.78-1.1c1.17-6.17 6.74-8 11.74-8 2.55 0 5.89.68 7.91 2.61 2.55 2.39 2.31 5.57 2.31 9v8.18c0 2.46 1 3.54 2 4.86a1 1 0 0 1 0 1.4c-1.07.9-3 2.55-4 3.49zM15.47 29.58c0 2 0 3.75-1 5.57a4.26 4.26 0 0 1-3.63 2.39c-2 0-3.19-1.53-3.19-3.81 0-4.47 4-5.28 7.81-5.28v1.14zm5.29 12.8a1.09 1.09 0 0 1-1.24.12 12.77 12.77 0 0 1-3-3.5c-2.88 2.94-4.92 3.82-8.65 3.82-4.42 0-7.86-2.73-7.86-8.18a8.92 8.92 0 0 1 5.6-8.58c2.85-1.25 6.83-1.48 9.87-1.82v-.68c0-1.25.1-2.73-.64-3.81a3.51 3.51 0 0 0-2.95-1.36 4 4 0 0 0-4.22 3.15 1.11 1.11 0 0 1-.91 1l-5.09-.57a.92.92 0 0 1-.78-1.1c1.17-6.17 6.74-8 11.74-8 2.55 0 5.89.68 7.91 2.61 2.55 2.39 2.31 5.57 2.31 9v8.18c0 2.46 1 3.54 2 4.86a1 1 0 0 1 0 1.4c-1.07.9-3 2.55-4 3.49z"
                    }))
                }),
                u = n("Rjl4"),
                m = n("zUQL"),
                p = n("O4UZ"),
                g = n("EpOa"),
                h = n("Ue10"),
                f = n("uDwM"),
                v = (n("iQf2"), "prime-upsell__msg-link"),
                k = "prime-upsell__msg-container__upsell-text",
                b = "prime-upsell__logo-container__img",
                S = "prime-upsell__logo-container__svg",
                y = "prime-banner-upsell",
                C = "twitch.prime.lootpage.upsell.image",
                w = "twitch.prime.lootpage.upsell.linktext",
                N = "twitch.prime.lootpage.upsell.text",
                E = "twitch.prime.lootpage.upsell.buttonurl",
                _ = "twitch.prime.lootpage.upsell.buttontext",
                O = "twitch.prime.lootpage.upsell.theme",
                T = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderBannerPlaceholder = function() {
                            var e = t.props.userData;
                            if (Object(p.m)(e) || t.props.promotionData && t.props.promotionData.loading) return r.createElement(h.Pa, {
                                fullHeight: !0,
                                fullWidth: !0
                            }, r.createElement(h.gb, {
                                height: 250
                            }))
                        }, t.renderBanner = function() {
                            var e = t.props.userData,
                                n = !Object(p.n)(e) || t.getTextFromOverride(E),
                                i = t.queriesDoneLoading();
                            if (i && !n) return null;
                            if (!i || n) {
                                var a = t.getTextFromOverride(O) || "default";
                                return r.createElement(h.Xa, {
                                    className: "prime-ad-banner",
                                    display: i && n ? h.X.Block : h.X.Hide
                                }, r.createElement(h.i, {
                                    type: h.n.SlideInTop,
                                    duration: h.k.Long,
                                    enabled: !!n
                                }, r.createElement(h.Cb, {
                                    "data-test-target": y,
                                    className: "prime-banner-upsell prime-banner-upsell--" + a.toLowerCase(),
                                    padding: {
                                        x: 5,
                                        y: 1
                                    },
                                    borderBottom: !0
                                }, r.createElement(h.Ja, null, r.createElement(h.P, {
                                    cols: {
                                        default: 12,
                                        sm: 12,
                                        md: 1,
                                        lg: 1
                                    }
                                }), r.createElement(h.P, {
                                    cols: {
                                        default: 12,
                                        sm: 12,
                                        md: 6,
                                        lg: 6
                                    }
                                }, t.renderLogoOrImage()), r.createElement(h.P, {
                                    cols: {
                                        default: 12,
                                        sm: 12,
                                        md: 4,
                                        lg: 4
                                    }
                                }, r.createElement(h.Cb, {
                                    display: h.X.Flex,
                                    justifyContent: h.Wa.Center,
                                    alignItems: h.f.Center,
                                    textAlign: h.Pb.Center,
                                    padding: 2,
                                    fullHeight: !0
                                }, r.createElement(h.Xa, {
                                    alignSelf: h.g.Center,
                                    className: "prime-upsell__msg-container",
                                    "data-a-target": "prime-upsellcontainer"
                                }, r.createElement(h.W, {
                                    type: h.Tb.P,
                                    fontSize: h.Ca.Size4,
                                    bold: !0,
                                    "data-test-selector": k
                                }, t.renderUpsellText()), t.renderUpsellLink(), t.renderTryPrimeButton(), r.createElement(h.Pa, {
                                    margin: {
                                        bottom: .5
                                    }
                                }, r.createElement(h.W, {
                                    type: h.Tb.P,
                                    fontSize: h.Ca.Size5,
                                    bold: !0
                                }, Object(o.d)("Powered by", "PrimeUpsell"))), r.createElement(d, null)))), r.createElement(h.P, {
                                    cols: {
                                        default: 12,
                                        sm: 12,
                                        md: 1,
                                        lg: 1
                                    }
                                })))))
                            }
                        }, t.renderLogoOrImage = function() {
                            var e = t.getTextFromOverride(C),
                                n = e && r.createElement(h.S, {
                                    src: e,
                                    alt: Object(o.d)("Promotional Banner for Twitch Prime", "TwitchPrimeBanner"),
                                    "data-test-selector": b
                                });
                            return r.createElement(h.Cb, {
                                className: "prime-upsell__logo-container",
                                display: h.X.Flex,
                                justifyContent: h.Wa.Center,
                                alignItems: h.f.Center,
                                textAlign: h.Pb.Center,
                                fullHeight: !0
                            }, n || r.createElement(h.qb, {
                                type: h.sb.Inherit,
                                asset: h.rb.LogoTwitchPrime,
                                width: 330,
                                height: 150,
                                "data-test-selector": S
                            }))
                        }, t.renderUpsellText = function() {
                            return t.getTextFromOverride(N) || Object(o.d)("Free games, in-game loot, exclusives and surprises. New offers every month with Twitch Prime membership.", "PrimeUpsell")
                        }, t.renderUpsellLink = function() {
                            var e = t.props.userData,
                                n = !Object(p.n)(e) && t.getTextFromOverride(w),
                                i = !Object(p.n)(e) && t.getTextFromOverride(E) || "",
                                a = t.getTextFromOverride(O) || "default";
                            return i && n && r.createElement(h.W, {
                                type: h.Tb.P,
                                fontSize: h.Ca.Size4,
                                "data-test-selector": v
                            }, r.createElement(h.U, {
                                targetBlank: !0,
                                to: i,
                                type: t.getLinkTypeFromTheme(),
                                className: "prime-upsell__msg-link prime-upsell__msg-link--" + a.toLowerCase()
                            }, n))
                        }, t.renderTryPrimeButton = function() {
                            var e = t.props.userData,
                                n = Object(p.n)(e) && t.getTextFromOverride(_) || "",
                                i = Object(p.n)(e) && t.getTextFromOverride(E) || "",
                                a = t.getTextFromOverride(O) || "default";
                            return r.createElement(g.a, {
                                externalReftag: t.props.externalReftag,
                                tracking: {
                                    position: u.b.CenterBanner
                                },
                                buttonURLOverride: i,
                                buttonTextOverride: n,
                                buttonDataTargetOverride: Object(p.n)(e) ? "prime-main-redirect-button-header" : "prime-upsell-try-prime-button-header",
                                theme: a
                            })
                        }, t.getTextFromOverride = function(e) {
                            var n = t.filterOverrideDataByID(e);
                            return n && n.text && n.text.trim()
                        }, t.filterOverrideDataByID = function(e) {
                            var n = t.props.promotionData;
                            if (t.props.promotionData.error) return "";
                            var i = n && n.primePromotions,
                                r = i && i.filter(function(t) {
                                    return t && t.id === e
                                });
                            return r && r[0]
                        }, t.getLinkTypeFromTheme = function() {
                            var e = {
                                    twitch: h.V.Default
                                },
                                n = t.getTextFromOverride(O);
                            return n && e[n] || h.V.Inherit
                        }, t.queriesDoneLoading = function() {
                            return t.userDataReportInteractive() && t.promotionDataReportInteractive()
                        }, t.userDataReportInteractive = function() {
                            return t.props.userData && (!t.props.userData.loading || t.props.userData.error)
                        }, t.promotionDataReportInteractive = function() {
                            return t.props.promotionData && (!t.props.promotionData.loading || t.props.promotionData.error)
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.queriesDoneLoading() && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentDidUpdate = function() {
                        this.queriesDoneLoading() && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return r.createElement(h.Xa, null, this.renderBannerPlaceholder(), this.renderBanner())
                    }, t
                }(r.Component),
                D = Object(a.compose)(Object(c.b)("TwitchPrimeBanner"), Object(s.a)(m, {
                    name: "userData"
                }), Object(s.a)(f, {
                    name: "promotionData",
                    options: function() {
                        return {
                            variables: {
                                stringIds: [_, E, C, w, N, O],
                                dateOverride: Object(l.f)(l.e.DateOverride)
                            }
                        }
                    }
                }))(T);
            n.d(t, !1, function() {
                return v
            }), n.d(t, !1, function() {
                return k
            }), n.d(t, !1, function() {
                return b
            }), n.d(t, !1, function() {
                return S
            }), n.d(t, !1, function() {
                return y
            }), n.d(t, !1, function() {
                return C
            }), n.d(t, !1, function() {
                return w
            }), n.d(t, !1, function() {
                return N
            }), n.d(t, !1, function() {
                return E
            }), n.d(t, !1, function() {
                return _
            }), n.d(t, !1, function() {
                return O
            }), n.d(t, !1, function() {
                return T
            }), n.d(t, "a", function() {
                return D
            })
        },
        XoAB: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "Settings_Connections_XboxOneConnection"
                    },
                    variableDefinitions: [],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
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
                                        value: "ssoLinks"
                                    },
                                    arguments: [{
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "app"
                                        },
                                        value: {
                                            kind: "StringValue",
                                            value: "xb1",
                                            block: !1
                                        }
                                    }],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "app"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "ssoID"
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
                    end: 102
                }
            };
            n.loc.source = {
                body: 'query Settings_Connections_XboxOneConnection {\ncurrentUser {\nid\nssoLinks(app: "xb1") {\napp\nssoID\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        Xq7d: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "BannedUser"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "ChannelBannedUser"
                        }
                    },
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "bannedAt"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "bannedUser"
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
                                        value: "login"
                                    },
                                    arguments: [],
                                    directives: []
                                }]
                            }
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "modUser"
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
                                        value: "displayName"
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
                    end: 104
                }
            };
            n.loc.source = {
                body: "fragment BannedUser on ChannelBannedUser {\nbannedAt\nbannedUser {\nid\nlogin\n}\nmodUser {\nid\ndisplayName\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        YFmX: function(e, t, n) {},
        YWuw: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "BannedUserStatus"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "ChatRoomBanStatus"
                        }
                    },
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "bannedUser"
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
                                        value: "login"
                                    },
                                    arguments: [],
                                    directives: []
                                }]
                            }
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "createdAt"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "moderator"
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
                                        value: "displayName"
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
                    end: 113
                }
            };
            n.loc.source = {
                body: "fragment BannedUserStatus on ChatRoomBanStatus {\nbannedUser {\nid\nlogin\n}\ncreatedAt\nmoderator {\nid\ndisplayName\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        ZKCD: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            o(n("q1tI"));
            var i = o(n("i8i4")),
                r = o(n("17x9")),
                a = o(n("ovQd"));

            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function s() {}
            var c = {
                propTypes: {
                    onChange: r.default.func.isRequired,
                    max: r.default.number
                },
                getDefaultProps: function() {
                    return {
                        onChange: s,
                        max: 1
                    }
                },
                getInitialState: function() {
                    return {
                        active: !1
                    }
                },
                componentDidMount: function() {
                    this.document = function(e) {
                        return e.ownerDocument
                    }(i.default.findDOMNode(this)), this.rect = this.getBoundingRect()
                },
                startUpdates: function(e) {
                    var t = this.document;
                    t.addEventListener("mousemove", this.handleUpdate), t.addEventListener("touchmove", this.handleUpdate), t.addEventListener("mouseup", this.stopUpdates), t.addEventListener("touchend", this.stopUpdates), e.preventDefault();
                    var n = this.getPosition(e),
                        i = n.x,
                        r = n.y;
                    this.rect = this.getBoundingRect(), this.setState({
                        active: !0
                    }), this.updatePosition(this.rect, i, r)
                },
                handleUpdate: function(e) {
                    e.preventDefault();
                    var t = this.getPosition(e),
                        n = t.x,
                        i = t.y;
                    this.updatePosition(this.rect, n, i)
                },
                stopUpdates: function() {
                    var e = this.document;
                    e.removeEventListener("mousemove", this.handleUpdate), e.removeEventListener("touchmove", this.handleUpdate), e.removeEventListener("mouseup", this.stopUpdates), e.removeEventListener("touchend", this.stopUpdates), this.setState({
                        active: !1
                    })
                },
                getPosition: function(e) {
                    return e.touches && (e = e.touches[0]), {
                        x: e.clientX,
                        y: e.clientY
                    }
                },
                getPercentageValue: function(e) {
                    return e / this.props.max * 100 + "%"
                },
                getScaledValue: function(e) {
                    return (0, a.default)(e, 0, 1) * this.props.max
                },
                getBoundingRect: function() {
                    return i.default.findDOMNode(this).getBoundingClientRect()
                }
            };
            t.default = c
        },
        ZYQZ: function(e, t, n) {},
        bm35: function(e, t, n) {
            "use strict";
            n.r(t);
            var i = n("mrSG"),
                r = n("q1tI"),
                a = n("oJmH"),
                o = n("V+GM"),
                s = n("DMoW"),
                c = n("NvVO"),
                l = n("2xye"),
                d = n("4rCz"),
                u = n("GnwI"),
                m = n("fvjX"),
                p = n("/7QA"),
                g = n("yR8l"),
                h = n("9MO3");

            function f(e, t) {
                var n = e.find(function(e) {
                    return t === e.feedbackType
                });
                return n ? n.text : ""
            }
            var v, k = n("Ue10"),
                b = n("geRD"),
                S = n("kRI/"),
                y = n("3lt/");
            n("Rk0n");
            ! function(e) {
                e.Ready = "READY", e.Requested = "REQUESTED", e.Success = "SUCCESS", e.Failed = "FAILED"
            }(v || (v = {}));
            var C = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            requestState: v.Ready,
                            imageLoaded: !1
                        }, t.renderRemovalSection = function(e) {
                            switch (e) {
                                case v.Requested:
                                    return r.createElement(k.Xa, {
                                        margin: {
                                            right: .5
                                        }
                                    }, r.createElement(k.Za, {
                                        delay: 0
                                    }));
                                case v.Success:
                                    return r.createElement(k.eb, {
                                        label: Object(p.d)("Feedback removed", "FeedbackItemList"),
                                        type: k.fb.Success
                                    });
                                default:
                                    return r.createElement(k.A, {
                                        ariaLabel: Object(p.d)("remove feedback item", "FeedbackItemList"),
                                        onClick: t.onRemoveHandler,
                                        icon: k.rb.Close,
                                        type: k.C.Secondary,
                                        size: k.B.Large,
                                        disabled: t.state.requestState === v.Requested,
                                        blurAfterClick: !0
                                    })
                            }
                        }, t.onRemoveHandler = function() {
                            return i.__awaiter(t, void 0, void 0, function() {
                                var e = this;
                                return i.__generator(this, function(t) {
                                    return this.setState({
                                        requestState: v.Requested
                                    }, function() {
                                        return i.__awaiter(e, void 0, void 0, function() {
                                            var e;
                                            return i.__generator(this, function(t) {
                                                switch (t.label) {
                                                    case 0:
                                                        e = Object(b.a)({
                                                            feedbackID: this.props.feedbackItem.id,
                                                            itemID: this.props.feedbackItem.itemID,
                                                            sourceItemPage: y.PageviewMedium.Settings,
                                                            sourceItemRequestID: "todo"
                                                        }), t.label = 1;
                                                    case 1:
                                                        return t.trys.push([1, 3, , 4]), [4, this.props.deleteFeedback(e)];
                                                    case 2:
                                                        return t.sent(), this.setState({
                                                            requestState: v.Success
                                                        }), this.props.cacheSuccessfulDelete(), this.trackSuccessfulRemove(), [3, 4];
                                                    case 3:
                                                        return t.sent(), this.setState({
                                                            requestState: v.Failed
                                                        }), [3, 4];
                                                    case 4:
                                                        return [2]
                                                }
                                            })
                                        })
                                    }), [2]
                                })
                            })
                        }, t.trackSuccessfulRemove = function() {
                            var e = t.props.feedbackItem,
                                n = e.displayName,
                                i = e.type,
                                r = e.itemID,
                                a = e.reason;
                            Object(S.e)({
                                itemName: n,
                                feedbackType: i,
                                feedbackedItemID: r,
                                feedbackReason: a
                            })
                        }, t.onImageLoad = function() {
                            return t.setState({
                                imageLoaded: !0
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.feedbackItem,
                            t = this.props.overrideSuccess ? v.Success : this.state.requestState,
                            n = t === v.Success ? "feedback-item__metadata-success" : "",
                            i = this.state.imageLoaded ? "feedback-item__display-none" : "",
                            a = this.state.imageLoaded ? "" : "feedback-item__display-none";
                        return r.createElement(k.Cb, {
                            background: k.r.Base,
                            display: k.X.Flex,
                            key: e.id,
                            borderLeft: !0,
                            borderRight: !0,
                            borderBottom: !0
                        }, r.createElement(k.Xa, {
                            className: n,
                            flexGrow: 0,
                            flexShrink: 0,
                            margin: 1
                        }, r.createElement(k.Xa, {
                            className: i,
                            "data-test-selector": "feedback-list-item-image-placeholder"
                        }, r.createElement(k.gb, {
                            width: e.placeholderImageDimensions.width,
                            height: e.placeholderImageDimensions.height
                        })), r.createElement(k.Xa, {
                            className: a,
                            "data-test-selector": "feedback-list-item-image"
                        }, e.imageURL && r.createElement(k.S, {
                            src: e.imageURL,
                            alt: Object(p.d)("feedback item image", "FeedbackItemList"),
                            onLoad: this.onImageLoad
                        }))), r.createElement(k.Xa, {
                            className: n,
                            flexGrow: 1,
                            flexShrink: 1,
                            display: k.X.Flex,
                            alignItems: k.f.Center,
                            ellipsis: !0
                        }, r.createElement(k.Xa, null, r.createElement(k.W, {
                            bold: !0
                        }, e.displayName), r.createElement(k.W, {
                            italic: !0,
                            color: k.O.Alt2
                        }, e.reasonText, " ", this.renderDate(e.lastUpdated)))), r.createElement(k.Xa, {
                            flexGrow: 0,
                            flexShrink: 1,
                            display: k.X.Flex,
                            alignItems: k.f.Center,
                            margin: {
                                right: 1
                            }
                        }, t === v.Failed && r.createElement(k.Xa, {
                            display: k.X.InlineBlock,
                            margin: {
                                right: 1
                            }
                        }, r.createElement(k.eb, {
                            label: Object(p.d)("Something went wrong", "FeedbackItemList"),
                            type: k.fb.Alert
                        })), this.renderRemovalSection(t)))
                    }, t.prototype.renderDate = function(e) {
                        var t = new Date(e),
                            n = (Date.now() - t.getTime()) / 36e5 > 24 ? Object(p.c)(t, "medium") : Object(p.i)(t);
                        return Object(p.d)("({date})", {
                            date: n
                        }, "FeedbackItemList")
                    }, t
                }(r.Component),
                w = n("Sdr/"),
                N = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            deletedMap: {}
                        }, t.overrideSuccessFunc = function(e) {
                            var n;
                            t.setState({
                                deletedMap: i.__assign({}, t.state.deletedMap, (n = {}, n[e] = !0, n))
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = this,
                            t = this.props.normalizedFeedbackItems;
                        if (!t) return this.renderLoadingState();
                        var n = null;
                        return n = 0 === t.length ? this.renderEmptyState() : r.createElement(k.Cb, {
                            margin: {
                                y: 1
                            },
                            borderTop: !0
                        }, t.map(function(t) {
                            var n = t.id;
                            return r.createElement(C, {
                                key: t.id,
                                feedbackItem: t,
                                deleteFeedback: e.props.deleteFeedback,
                                overrideSuccess: e.state.deletedMap[n],
                                cacheSuccessfulDelete: function() {
                                    return e.overrideSuccessFunc(n)
                                }
                            })
                        })), r.createElement(k.Xa, {
                            margin: {
                                bottom: 2
                            }
                        }, r.createElement(k.Xa, {
                            margin: {
                                bottom: 1
                            }
                        }, r.createElement(k.W, {
                            type: k.Tb.H4,
                            bold: !0
                        }, this.props.title)), r.createElement(k.W, {
                            type: k.Tb.H5,
                            color: k.O.Alt2
                        }, this.props.subtitle), n)
                    }, t.prototype.renderLoadingState = function() {
                        return this.props.showLoadingSpinner ? r.createElement(k.Xa, {
                            margin: {
                                top: 1
                            },
                            padding: {
                                x: 1,
                                y: 5
                            }
                        }, r.createElement(k.Za, {
                            fillContent: !0,
                            size: k.Ab.Large
                        })) : null
                    }, t.prototype.renderEmptyState = function() {
                        return r.createElement(k.Cb, {
                            margin: {
                                top: 1
                            },
                            padding: {
                                x: 1,
                                y: 4
                            },
                            background: k.r.Base,
                            textAlign: k.Pb.Center,
                            border: !0,
                            color: k.O.Alt2
                        }, this.props.emptyStateDescription)
                    }, t
                }(r.Component),
                E = Object(m.compose)(Object(g.a)(w, {
                    name: "deleteFeedback"
                }))(N),
                _ = n("ckiV"),
                O = 5,
                T = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            currentPage: 1,
                            maxPageCount: 1 / 0,
                            pageData: {}
                        }, t.hasReceivedInitialLoad = !1, t.handleClickIndex = function(e) {
                            var n = e.goToPage;
                            n > t.state.maxPageCount || n < 1 || t.goToPageAtIndex(n)
                        }, t.goToNextPage = function() {
                            t.goToPageAtIndex(t.state.currentPage + 1)
                        }, t.goToPreviousPage = function() {
                            t.goToPageAtIndex(t.state.currentPage - 1)
                        }, t.goToPageAtIndex = function(e) {
                            return i.__awaiter(t, void 0, void 0, function() {
                                return i.__generator(this, function(t) {
                                    return this.state.pageData[e] ? (this.setState({
                                        currentPage: e
                                    }), [2]) : (this.loadPageAtIndex(e), [2])
                                })
                            })
                        }, t.loadPageAtIndex = function(e) {
                            return i.__awaiter(t, void 0, void 0, function() {
                                var t, n, r, a, o, s, c = this;
                                return i.__generator(this, function(l) {
                                    switch (l.label) {
                                        case 0:
                                            return (n = this.state.pageData[e - 1]) ? (r = n[n.length - 1], (a = r.cursor) ? [4, this.props.loadMore(a)] : (this.setState({
                                                maxPageCount: this.state.currentPage
                                            }), [2])) : [2];
                                        case 1:
                                            return o = l.sent(), s = this.getNormalizedFeedbackItems(o.data), this.setState({
                                                pageData: i.__assign({}, this.state.pageData, (t = {}, t[e] = s, t)),
                                                currentPage: e
                                            }, function() {
                                                c.setLastPage(s)
                                            }), [2]
                                    }
                                })
                            })
                        }, t.setLastPage = function(e) {
                            var n = e[e.length - 1];
                            (e.length < O || !n.cursor) && t.setState({
                                maxPageCount: t.state.currentPage
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.setupInitalDataOnce()
                    }, t.prototype.componentDidUpdate = function() {
                        this.setupInitalDataOnce()
                    }, t.prototype.render = function() {
                        var e = this.state.pageData[this.state.currentPage],
                            t = 1 !== this.state.maxPageCount && e && e.length > 0;
                        return r.createElement(k.Xa, {
                            margin: {
                                bottom: 2
                            }
                        }, r.createElement(E, {
                            title: this.props.title,
                            subtitle: this.props.subtitle,
                            emptyStateDescription: this.props.emptyStateDescription,
                            normalizedFeedbackItems: e,
                            showLoadingSpinner: this.props.type === s.H.CATEGORY
                        }), t && r.createElement(k.Xa, {
                            margin: {
                                top: 1
                            }
                        }, r.createElement(k.db, {
                            currentPage: this.state.currentPage,
                            totalPages: this.state.maxPageCount !== 1 / 0 ? this.state.maxPageCount : Object.keys(this.state.pageData).length + 1,
                            onClickIndex: this.handleClickIndex,
                            onClickNext: this.goToNextPage,
                            onClickPrevious: this.goToPreviousPage,
                            nextPageButtonAriaLabel: Object(p.d)("Next Page", "FeedbackItemList"),
                            previousPageButtonAriaLabel: Object(p.d)("Previous Page", "FeedbackItemList")
                        })))
                    }, t.prototype.getNormalizedFeedbackItems = function(e) {
                        var t = e.currentUser;
                        return t && t.recommendationFeedback && t.recommendationFeedback.edges ? t.recommendationFeedback.edges.map(function(e) {
                            return e.node ? function(e, t) {
                                var n = e.content;
                                switch (n && n.__typename) {
                                    case "Game":
                                        n = n;
                                        var i = Object(h.b)();
                                        return {
                                            id: e.id,
                                            itemID: n.id,
                                            imageURL: n.avatarURL,
                                            displayName: n.displayName,
                                            lastUpdated: e.lastUpdated,
                                            placeholderImageDimensions: {
                                                width: 38,
                                                height: 51
                                            },
                                            reasonText: f(i, e.category),
                                            reason: e.category,
                                            type: e.type,
                                            cursor: t
                                        };
                                    case "Video":
                                        return n = n, i = Object(h.d)(), {
                                            id: e.id,
                                            itemID: n.id,
                                            imageURL: n.previewThumbnailURL,
                                            displayName: n.title,
                                            lastUpdated: e.lastUpdated,
                                            placeholderImageDimensions: {
                                                width: 90,
                                                height: 51
                                            },
                                            reasonText: f(i, e.category),
                                            reason: e.category,
                                            type: e.type,
                                            cursor: t
                                        };
                                    case "Channel":
                                        var r = (n = n).owner;
                                        return i = Object(h.a)(), r && r.id ? {
                                            id: e.id,
                                            itemID: r.id,
                                            imageURL: r.profileImageURL,
                                            displayName: r.displayName,
                                            lastUpdated: e.lastUpdated,
                                            placeholderImageDimensions: {
                                                width: 50,
                                                height: 50
                                            },
                                            reasonText: f(i, e.category),
                                            reason: e.category,
                                            type: e.type,
                                            cursor: t
                                        } : null;
                                    default:
                                        return null
                                }
                            }(e.node, e.cursor) : null
                        }).filter(function(e) {
                            return null !== e
                        }) : []
                    }, t.prototype.setupInitalDataOnce = function() {
                        var e, t = this.props.data.currentUser;
                        if (!this.hasReceivedInitialLoad && t && t.recommendationFeedback && t.recommendationFeedback.edges) {
                            this.hasReceivedInitialLoad = !0;
                            var n = this.getNormalizedFeedbackItems(this.props.data);
                            this.setState({
                                pageData: (e = {}, e[1] = n, e)
                            }), this.setLastPage(n), this.props.latencyTracking.reportInteractive()
                        }
                    }, t
                }(r.Component),
                D = Object(m.compose)(Object(u.b)("FeedbackItemList"), Object(g.a)(_, {
                    options: function(e) {
                        return {
                            variables: {
                                type: e.type,
                                limit: O
                            }
                        }
                    },
                    props: function(e) {
                        return i.__assign({}, e, {
                            loadMore: function(t) {
                                return e.data.fetchMore({
                                    query: _,
                                    variables: i.__assign({}, e.data.variables, {
                                        after: t
                                    }),
                                    updateQuery: function(e) {
                                        return e
                                    }
                                })
                            }
                        })
                    }
                }))(T),
                U = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.feedbackTypeProps = [{
                            title: Object(d.d)("Category Feedback", "SettingsRecommendationsPage"),
                            subtitle: Object(d.d)("Your feedback on Twitch's personalized category recommendations", "SettingsRecommendationsPage"),
                            emptyStateDescription: Object(d.d)("You haven't given any category recommendation feedback", "SettingsRecommendationsPage"),
                            type: s.H.CATEGORY
                        }, {
                            title: Object(d.d)("Channel Feedback", "SettingsRecommendationsPage"),
                            subtitle: Object(d.d)("Your feedback on Twitch's personalized channel recommendations", "SettingsRecommendationsPage"),
                            emptyStateDescription: Object(d.d)("You haven't given any channel recommendation feedback", "SettingsRecommendationsPage"),
                            type: s.H.CHANNEL
                        }, {
                            title: Object(d.d)("Video Feedback", "SettingsRecommendationsPage"),
                            subtitle: Object(d.d)("Your feedback on Twitch's personalized video recommendations", "SettingsRecommendationsPage"),
                            emptyStateDescription: Object(d.d)("You haven't given any video recommendation feedback", "SettingsRecommendationsPage"),
                            type: s.H.VOD
                        }], t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return r.createElement("div", null, this.feedbackTypeProps.map(function(e) {
                            return r.createElement(D, i.__assign({
                                key: e.type
                            }, e))
                        }))
                    }, t
                }(r.Component),
                F = Object(a.compose)(Object(u.b)("SettingsRecommendationsPage", {
                    autoReportInteractive: !0,
                    destination: c.a.SettingsRecommendatons
                }), Object(o.a)({
                    location: l.PageviewLocation.SettingsPage
                }))(U);
            n.d(t, "SettingsRecommendationsPageComponent", function() {
                return U
            }), n.d(t, "SettingsRecommendationsPage", function() {
                return F
            })
        },
        cVLR: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("q1tI"),
                a = n("oJmH"),
                o = n("Gn2G"),
                s = n("/7QA"),
                c = n("yR8l"),
                l = n("/0dD"),
                d = n("ygQa"),
                u = n("QVaV"),
                m = n("geRD"),
                p = n("76Lv"),
                g = n("c0Zc"),
                h = n("Ue10"),
                f = n("QZn1"),
                v = (n("4+c1"), n("ytS6"), n("G7cy")),
                k = n("DtRd"),
                b = n("R4sh"),
                S = [255, 255, 255],
                y = [32, 28, 43],
                C = 3,
                w = /^#[A-Fa-f0-9]{3,6}$/;
            var N, E, _ = "#b22222";
            ! function(e) {
                e.ConfirmButton = "confirm-button", e.ContrastWarning = "contrast-warning", e.InvalidWarning = "invalid-warning", e.SaveError = "save-error"
            }(N || (N = {})),
            function(e) {
                e.Empty = "empty", e.Dirty = "dirty", e.SaveError = "save-error", e.InvalidInput = "invalid-input", e.Success = "success", e.Loading = "loading"
            }(E || (E = {}));
            var O = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            selectedColor: t.props.data.currentUser && t.props.data.currentUser.chatColor || _,
                            inputColor: t.props.data.currentUser && t.props.data.currentUser.chatColor || _,
                            status: E.Empty,
                            isHighContrast: !0
                        }, t.onChangeInput = function(e) {
                            var n = e.currentTarget.value.trim();
                            0 !== n.indexOf("#") && (n = "#" + n), t.validateColor(n), t.setState({
                                inputColor: n
                            })
                        }, t.onBlurInput = function() {
                            t.state.status !== E.InvalidInput && t.onChangeColor(t.state.inputColor)
                        }, t.onChangeColor = function(e) {
                            var n = function(e) {
                                var t = k(e);
                                return 4 === t.length && (t = [t[0], t[1], t[2]]), v(t)
                            }(e);
                            t.validateColor(n), t.setState({
                                selectedColor: n,
                                inputColor: n
                            })
                        }, t.onClickSave = function() {
                            return i.__awaiter(t, void 0, void 0, function() {
                                var e, t;
                                return i.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            if (!(e = this.state.selectedColor)) return [2];
                                            this.setState({
                                                status: E.Loading
                                            }), n.label = 1;
                                        case 1:
                                            return n.trys.push([1, 3, , 4]), t = function(t) {
                                                return t.currentUser && (t.currentUser.chatColor = e), t
                                            }, [4, this.props.updateChatColorMutation(e)];
                                        case 2:
                                            return n.sent(), Object(m.e)(f, {}, t), this.setState({
                                                status: E.Success
                                            }), [3, 4];
                                        case 3:
                                            return n.sent(), this.setState({
                                                status: E.SaveError
                                            }), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                        !this.props.data.currentUser && e.data.currentUser && e.data.currentUser.chatColor && this.setState({
                            selectedColor: e.data.currentUser.chatColor,
                            inputColor: e.data.currentUser.chatColor
                        })
                    }, t.prototype.render = function() {
                        var e = this.props.data,
                            t = e.currentUser,
                            n = e.networkStatus;
                        if (!t || n < 3) return null;
                        var i = Object(s.d)("Hex Color Code", "ChatColorPicker");
                        return r.createElement(h.Xa, {
                            margin: {
                                bottom: 1
                            }
                        }, r.createElement(g.a, {
                            title: Object(s.d)("Chat Color", "ChatColorPicker"),
                            description: Object(s.d)("Pick a color, any color! It may take several minutes for your color to update in the chat room.", "ChatColorPicker")
                        }), r.createElement(h.Xa, {
                            display: h.X.Flex,
                            margin: {
                                bottom: 1
                            },
                            className: "react-simple-colorpicker"
                        }, r.createElement(o, {
                            color: this.state.selectedColor,
                            onChange: this.onChangeColor
                        }), this.renderPreview(Object(s.d)("Light Mode", "ChatColorPicker"), t.displayName, t.login, l.a.Light), this.renderPreview(Object(s.d)("Dark Mode", "ChatColorPicker"), t.displayName, t.login, l.a.Dark)), r.createElement(h.Ea, {
                            id: "chat-color-picker__color-code-input",
                            label: i
                        }, r.createElement(h.Xa, {
                            padding: {
                                bottom: 1
                            },
                            className: "color-picker-input",
                            display: h.X.Flex,
                            alignItems: h.f.Center
                        }, r.createElement(h.Ra, {
                            id: "chat-color-picker__color-code-input",
                            "data-a-target": "color-picker-input",
                            type: h.Ta.Text,
                            value: this.state.inputColor,
                            onChange: this.onChangeInput,
                            onBlur: this.onBlurInput,
                            maxLength: 7
                        }), r.createElement(h.Xa, {
                            padding: {
                                left: 1
                            }
                        }, this.renderSaveButton())), this.renderStatus()))
                    }, t.prototype.renderStatus = function() {
                        return this.state.status === E.SaveError ? r.createElement(h.W, {
                            color: h.O.Error,
                            "data-test-selector": N.SaveError
                        }, Object(s.d)("Oops, something went wrong. Please try again.", "ChatColorPicker")) : this.state.status === E.InvalidInput ? r.createElement(h.W, {
                            color: h.O.Error,
                            "data-test-selector": N.InvalidWarning
                        }, Object(s.d)("Please enter a valid hexadecimal color code.", "ChatColorPicker")) : this.state.isHighContrast ? void 0 : this.renderContrastWarning()
                    }, t.prototype.renderContrastWarning = function() {
                        var e = Object(s.d)("<x:strong>Heads up!</x:strong> Some colors may be <x:strong>hard to read</x:strong> in light or dark themes. Check it here before chatting.", {
                                "x:strong": function(e) {
                                    return r.createElement(h.W, {
                                        type: h.Tb.Span,
                                        bold: !0
                                    }, e)
                                }
                            }, "ChatColorPicker"),
                            t = r.createElement(h.Xa, {
                                display: h.X.Inline,
                                verticalAlign: h.dc.TextTop,
                                margin: {
                                    right: .5
                                }
                            }, r.createElement(h.qb, {
                                asset: h.rb.Warning
                            }));
                        return r.createElement(h.Xa, {
                            "data-test-selector": N.ContrastWarning
                        }, t, r.createElement(h.W, {
                            type: h.Tb.Span,
                            color: h.O.Alt2
                        }, e))
                    }, t.prototype.renderSaveButton = function() {
                        var e = this.state.status !== E.Dirty && this.state.status !== E.SaveError && this.state.status !== E.Success,
                            t = h.E.Default;
                        this.state.status === E.Loading ? t = h.E.Loading : this.state.status === E.Success && (t = h.E.Success);
                        var n = h.F.Default;
                        return this.state.status === E.Success && (n = h.F.Success), r.createElement(h.z, {
                            "data-test-selector": N.ConfirmButton,
                            "data-a-target": "color-confirm-button",
                            disabled: e,
                            onClick: this.onClickSave,
                            state: t,
                            type: n
                        }, Object(s.d)("Confirm Color", "ChatColorPicker"))
                    }, t.prototype.renderPreview = function(e, t, n, i) {
                        var a = {
                                width: "165px",
                                height: "60px"
                            },
                            o = {};
                        return this.state.selectedColor && (a.backgroundColor = this.state.selectedColor, o.color = this.state.selectedColor), r.createElement(h.Xa, {
                            display: h.X.Flex,
                            flexDirection: h.Aa.Column,
                            justifyContent: h.Wa.Center,
                            margin: {
                                left: 2
                            }
                        }, r.createElement(h.W, {
                            color: h.O.Alt2
                        }, e), r.createElement(h.Cb, {
                            borderRadius: h.x.Medium,
                            overflow: h.cb.Hidden
                        }, r.createElement("div", {
                            style: a
                        }), r.createElement(h.Xa, {
                            className: Object(p.b)(i)
                        }, r.createElement(h.Cb, {
                            background: h.r.Base,
                            padding: {
                                y: 2
                            },
                            justifyContent: h.Wa.Center,
                            display: h.X.Flex
                        }, r.createElement(h.Xa, {
                            margin: {
                                right: .5
                            }
                        }, r.createElement("span", {
                            style: o
                        }, r.createElement(h.W, {
                            bold: !0
                        }, Object(u.a)(n, t)))), r.createElement(h.W, {
                            color: h.O.Base
                        }, Object(s.d)("Hi there!", "ChatColorPicker"))))))
                    }, t.prototype.validateColor = function(e) {
                        e && function(e) {
                            return w.test(e.trim())
                        }(e) ? this.setState({
                            status: E.Dirty,
                            isHighContrast: function(e) {
                                var t = k(e);
                                return Object(b.a)(S, t) >= C && Object(b.a)(t, y) >= C
                            }(e)
                        }) : this.setState({
                            status: E.InvalidInput
                        })
                    }, t
                }(r.Component),
                T = Object(a.compose)(Object(c.a)(f), Object(d.a)())(O);
            n.d(t, !1, function() {
                return N
            }), n.d(t, !1, function() {
                return O
            }), n.d(t, "a", function() {
                return T
            })
        },
        cgA6: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = function() {
                    return function(e, t) {
                        if (Array.isArray(e)) return e;
                        if (Symbol.iterator in Object(e)) return function(e, t) {
                            var n = [],
                                i = !0,
                                r = !1,
                                a = void 0;
                            try {
                                for (var o, s = e[Symbol.iterator](); !(i = (o = s.next()).done) && (n.push(o.value), !t || n.length !== t); i = !0);
                            } catch (e) {
                                r = !0, a = e
                            } finally {
                                try {
                                    !i && s.return && s.return()
                                } finally {
                                    if (r) throw a
                                }
                            }
                            return n
                        }(e, t);
                        throw new TypeError("Invalid attempt to destructure non-iterable instance")
                    }
                }(),
                r = m(n("q1tI")),
                a = m(n("fhzG")),
                o = m(n("17x9")),
                s = m(n("1Whu")),
                c = m(n("TSYQ")),
                l = m(n("DMSN")),
                d = m(n("xedL")),
                u = function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                }(n("sYG4"));

            function m(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var p = (0, a.default)({
                mixins: [s.default],
                propTypes: {
                    color: o.default.string.isRequired,
                    onChange: o.default.func.isRequired
                },
                getDefaultProps: function() {
                    return {
                        color: "rgba(0,0,0,1)",
                        opacitySlider: !1
                    }
                },
                getInitialState: function() {
                    return this.getStateFrom(this.props)
                },
                componentWillReceiveProps: function(e) {
                    var t = this.getStateFrom(e);
                    u.equals(this.state.color, t.color) || this.setState(t)
                },
                getStateFrom: function(e) {
                    return {
                        color: u.parseToHsv(e.color)
                    }
                },
                render: function() {
                    var e = (0, c.default)("colorpicker", {
                            "with-opacity-slider": this.props.opacitySlider
                        }),
                        t = i(this.state.color, 3),
                        n = t[0],
                        a = t[1],
                        o = t[2];
                    return r.default.createElement("div", {
                        className: e
                    }, r.default.createElement("div", {
                        className: "hue-slider"
                    }, r.default.createElement(d.default, {
                        vertical: !0,
                        value: n,
                        max: 360,
                        onChange: this.handleHueChange
                    })), this.props.opacitySlider && r.default.createElement("div", {
                        className: "opacity-slider"
                    }, r.default.createElement(d.default, {
                        vertical: !1,
                        value: this.getAlpha(),
                        max: 1,
                        background: this.getBackgroundGradient(),
                        onChange: this.handleAlphaChange
                    })), r.default.createElement(l.default, {
                        x: a,
                        y: o,
                        max: 100,
                        className: u.isDark(this.state.color) ? "dark" : "light",
                        backgroundColor: this.getBackgroundHue(),
                        onChange: this.handleSaturationValueChange
                    }))
                },
                getAlpha: function() {
                    return void 0 === this.state.color[3] ? 1 : this.state.color[3]
                },
                getBackgroundGradient: function() {
                    var e = i(this.state.color, 3),
                        t = e[0],
                        n = e[1],
                        r = e[2];
                    return "linear-gradient(to right, rgba(0,0,0,0) 0%, " + u.toRgbString([t, n, r, 1]) + " 100%)"
                },
                getBackgroundHue: function() {
                    return u.toRgbString([this.state.color[0], 100, 100])
                },
                handleAlphaChange: function(e) {
                    var t = i(this.state.color, 3),
                        n = t[0],
                        r = t[1],
                        a = t[2];
                    this.update([n, r, a, e])
                },
                handleHueChange: function(e) {
                    var t = i(this.state.color, 4),
                        n = t[1],
                        r = t[2],
                        a = t[3];
                    this.update([e, n, r, a])
                },
                handleSaturationValueChange: function(e, t) {
                    var n = i(this.state.color, 4),
                        r = n[0],
                        a = n[3];
                    this.update([r, e, t, a])
                },
                update: function(e) {
                    this.setState({
                        color: e
                    }), this.props.onChange(u.toRgbString(e))
                }
            });
            t.default = p
        },
        ckiV: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "gameFromFeedback"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Game"
                        }
                    },
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
                                value: "avatarURL"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "width"
                                },
                                value: {
                                    kind: "IntValue",
                                    value: "38"
                                }
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "height"
                                },
                                value: {
                                    kind: "IntValue",
                                    value: "51"
                                }
                            }],
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
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "videoFromFeedback"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Video"
                        }
                    },
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
                                value: "previewThumbnailURL"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "width"
                                },
                                value: {
                                    kind: "IntValue",
                                    value: "90"
                                }
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "height"
                                },
                                value: {
                                    kind: "IntValue",
                                    value: "51"
                                }
                            }],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "title"
                            },
                            arguments: [],
                            directives: []
                        }]
                    }
                }, {
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "channelFromFeedback"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Channel"
                        }
                    },
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
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
                                            value: "50"
                                        }
                                    }],
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
                        }]
                    }
                }, {
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "recommendationFeedbackItem"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "RecommendationFeedback"
                        }
                    },
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
                                value: "lastUpdated"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "type"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "category"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "content"
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "FragmentSpread",
                                    name: {
                                        kind: "Name",
                                        value: "gameFromFeedback"
                                    },
                                    directives: []
                                }, {
                                    kind: "FragmentSpread",
                                    name: {
                                        kind: "Name",
                                        value: "videoFromFeedback"
                                    },
                                    directives: []
                                }, {
                                    kind: "FragmentSpread",
                                    name: {
                                        kind: "Name",
                                        value: "channelFromFeedback"
                                    },
                                    directives: []
                                }]
                            }
                        }]
                    }
                }, {
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "FeedbackItemList"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "type"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "String"
                                }
                            }
                        }
                    }, {
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
                        }
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "after"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Cursor"
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
                                        value: "recommendationFeedback"
                                    },
                                    arguments: [{
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "type"
                                        },
                                        value: {
                                            kind: "Variable",
                                            name: {
                                                kind: "Name",
                                                value: "type"
                                            }
                                        }
                                    }, {
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "limit"
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
                                                value: "after"
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
                                                value: "edges"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "node"
                                                    },
                                                    arguments: [],
                                                    directives: [],
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [{
                                                            kind: "FragmentSpread",
                                                            name: {
                                                                kind: "Name",
                                                                value: "recommendationFeedbackItem"
                                                            },
                                                            directives: []
                                                        }]
                                                    }
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "cursor"
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
                    end: 654
                }
            };
            n.loc.source = {
                body: "fragment gameFromFeedback on Game {\nid\navatarURL(width: 38 height: 51)\ndisplayName\n}\nfragment videoFromFeedback on Video {\nid\npreviewThumbnailURL(width: 90 height: 51)\ntitle\n}\nfragment channelFromFeedback on Channel {\nowner {\nid\nprofileImageURL(width: 50)\ndisplayName\n}\n}\nfragment recommendationFeedbackItem on RecommendationFeedback {\nid\nlastUpdated\ntype\ncategory\ncontent {\n...gameFromFeedback\n...videoFromFeedback\n...channelFromFeedback\n}\n}\nquery FeedbackItemList($type: String! $limit: Int $after: Cursor){\ncurrentUser {\nid\nrecommendationFeedback(type: $type limit: $limit after: $after) {\nedges {\nnode {\n...recommendationFeedbackItem\n}\ncursor\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "e2/s": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "Settings_ChannelVideo_BlockHyperlinksToggle"
                    },
                    variableDefinitions: [],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
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
                                        value: "chatSettings"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "blockLinks"
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
                    end: 100
                }
            };
            n.loc.source = {
                body: "query Settings_ChannelVideo_BlockHyperlinksToggle {\ncurrentUser {\nid\nchatSettings {\nblockLinks\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "f/PJ": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "SettingsPrimePage_PrimeEmotesSetPicker_UpdatePrimeSettings"
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
                                    value: "UpdatePrimeSettingsInput"
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
                                value: "updatePrimeSettings"
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
                                        value: "primeSettings"
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
                                                value: "primeEmoticons"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "currentSetName"
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
                    end: 200
                }
            };
            n.loc.source = {
                body: "mutation SettingsPrimePage_PrimeEmotesSetPicker_UpdatePrimeSettings($input: UpdatePrimeSettingsInput!) {\nupdatePrimeSettings(input: $input) {\nprimeSettings {\nid\nprimeEmoticons {\ncurrentSetName\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        fbdC: function(e, t, n) {
            "use strict";
            var i, r = n("/MKj"),
                a = n("fvjX"),
                o = n("aCAx"),
                s = n("mrSG"),
                c = n("q1tI"),
                l = n("/7QA"),
                d = n("cZKs"),
                u = n("Ue10");
            ! function(e) {
                e.Message = "confirmation-modal__message", e.ConfirmButton = "confirmation-modal__confirm-button"
            }(i || (i = {}));
            var m = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleCancelClick = function() {
                        t.props.closeModal()
                    }, t.renderConfirmButton = function() {
                        return c.cloneElement(t.props.confirmButton, {
                            onClick: t.handleConfirmClick,
                            "data-test-selector": i.ConfirmButton
                        })
                    }, t.handleConfirmClick = function() {
                        t.props.closeModal(), t.props.onConfirmClick()
                    }, t
                }
                return s.__extends(t, e), t.prototype.render = function() {
                    return c.createElement(u.Cb, {
                        background: u.r.Base,
                        padding: {
                            x: 3,
                            top: 3,
                            bottom: 2
                        },
                        display: u.X.Flex,
                        flexDirection: u.Aa.Column
                    }, c.createElement(u.Xa, {
                        "data-test-selector": i.Message
                    }, this.props.message), c.createElement(u.Xa, {
                        display: u.X.Flex,
                        flexDirection: u.Aa.Row,
                        justifyContent: u.Wa.Center,
                        padding: {
                            top: 2
                        }
                    }, c.createElement(u.Xa, {
                        padding: {
                            right: .5
                        }
                    }, c.createElement(u.z, {
                        type: u.F.Text,
                        onClick: this.handleCancelClick
                    }, Object(l.d)("Cancel", "SettingsConfirmationModal"))), c.createElement(u.Xa, {
                        padding: {
                            left: .5
                        }
                    }, this.renderConfirmButton())), c.createElement(d.a, null))
                }, t
            }(c.Component);
            var p = Object(r.connect)(null, function(e) {
                return Object(a.bindActionCreators)({
                    closeModal: o.c
                }, e)
            })(m);
            n.d(t, "a", function() {
                return p
            }), n.d(t, !1, function() {})
        },
        fhu2: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "BlockGiftedSubsSetting"
                    },
                    variableDefinitions: [],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
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
                                        value: "subscriptionSettings"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "giftsToFollowedChannelsOnly"
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
                    end: 104
                }
            };
            n.loc.source = {
                body: "query BlockGiftedSubsSetting {\ncurrentUser {\nid\nsubscriptionSettings {\ngiftsToFollowedChannelsOnly\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "gi/2": function(e, t, n) {
            "use strict";
            var i, r = n("mrSG"),
                a = n("q1tI"),
                o = n("fvjX"),
                s = n("/7QA"),
                c = n("yR8l"),
                l = n("geRD"),
                d = n("DMoW"),
                u = n("GnwI"),
                m = n("pnuN"),
                p = n("Ue10"),
                g = n("0l36");
            ! function(e) {
                e.BanButton = "add-banned-chatters-component__add-button", e.BanUsernameField = "add-banned-chatters-component__ban-username-input"
            }(i || (i = {}));
            var h = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            error: !1,
                            errorCode: null,
                            working: !1,
                            userToBan: ""
                        }, t.handleAddBannedChatterClick = function() {
                            var e = t.state.userToBan;
                            "" !== e ? (t.setState({
                                error: !1,
                                working: !0
                            }), t.banUserFromChat(e)) : t.setState({
                                error: !0,
                                working: !1
                            })
                        }, t.getErrorMessage = function(e) {
                            if (null === e) return Object(s.d)("Something went wrong. Please try again.", "AddBannedChatters");
                            switch (e) {
                                case d.b.TARGET_NOT_FOUND:
                                    return Object(s.d)("That user is suspended or does not exist.", "AddBannedChatters");
                                case d.b.TARGET_IS_MOD:
                                case d.b.TARGET_IS_SELF:
                                case d.b.TARGET_IS_STAFF:
                                case d.b.TARGET_IS_BROADCASTER:
                                case d.b.TARGET_IS_ADMIN:
                                case d.b.TARGET_ALREADY_BANNED:
                                    return Object(s.d)("You cannot ban that user.", "AddBannedChatters");
                                default:
                                    return Object(s.d)("An unknown error occurred. Please try again.", "AddBannedChatters")
                            }
                        }, t.updateUserToBan = function(e) {
                            t.setState({
                                userToBan: e.currentTarget.value
                            })
                        }, t.banUserFromChat = function(e) {
                            return r.__awaiter(t, void 0, void 0, function() {
                                var t, n, i;
                                return r.__generator(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            if (null === this.props.channelID) return this.setState({
                                                error: !0,
                                                working: !1
                                            }), [2];
                                            t = {
                                                bannedUserLogin: e,
                                                channelID: this.props.channelID
                                            }, r.label = 1;
                                        case 1:
                                            return r.trys.push([1, 3, , 4]), [4, this.props.banUserFromChatQuery(Object(l.a)(t))];
                                        case 2:
                                            return n = r.sent(), i = function(e) {
                                                if (e && e.currentUser && e.currentUser.bannedUsers && n.data && null !== n.data.banUserFromChatRoom && null !== n.data.banUserFromChatRoom.ban) {
                                                    var t = null === n.data.banUserFromChatRoom.ban.bannedUser ? "" : n.data.banUserFromChatRoom.ban.bannedUser.id,
                                                        i = null === n.data.banUserFromChatRoom.ban.bannedUser ? "" : n.data.banUserFromChatRoom.ban.bannedUser.login,
                                                        r = null === n.data.banUserFromChatRoom.ban.moderator ? "" : n.data.banUserFromChatRoom.ban.moderator.id,
                                                        a = null === n.data.banUserFromChatRoom.ban.moderator ? "" : n.data.banUserFromChatRoom.ban.moderator.displayName,
                                                        o = {
                                                            __typename: "ChannelBannedUser",
                                                            bannedAt: n.data.banUserFromChatRoom.ban.createdAt,
                                                            bannedUser: {
                                                                __typename: "User",
                                                                id: t,
                                                                login: i
                                                            },
                                                            modUser: {
                                                                __typename: "User",
                                                                id: r,
                                                                displayName: a
                                                            }
                                                        };
                                                    e.currentUser.bannedUsers.push(o)
                                                }
                                                return e
                                            }, n.data && null !== n.data.banUserFromChatRoom && (null === n.data.banUserFromChatRoom.error ? (Object(l.e)(m, {}, i), this.setState({
                                                error: !1,
                                                errorCode: null,
                                                working: !1,
                                                userToBan: ""
                                            })) : this.setState({
                                                error: !0,
                                                errorCode: n.data.banUserFromChatRoom.error.code,
                                                working: !1
                                            })), [3, 4];
                                        case 3:
                                            return r.sent(), this.setState({
                                                error: !0,
                                                working: !1
                                            }), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = "" === this.state.userToBan,
                            t = this.state.working ? p.E.Loading : p.E.Default;
                        return a.createElement(p.Xa, {
                            className: "add-banned-chatter",
                            margin: {
                                bottom: 3
                            }
                        }, a.createElement(p.Ea, {
                            label: Object(s.d)("Add a user to your ban list", "AddBannedChatter"),
                            error: this.state.error,
                            errorMessage: this.getErrorMessage(this.state.errorCode)
                        }, a.createElement(p.Xa, {
                            display: p.X.Flex,
                            margin: {
                                top: .5
                            }
                        }, a.createElement(p.Xa, {
                            flexGrow: 1,
                            padding: {
                                right: .5
                            }
                        }, a.createElement(p.Ra, {
                            placeholder: Object(s.d)("Enter a username", "AddBannedChatter"),
                            type: p.Ta.Text,
                            onChange: this.updateUserToBan,
                            value: this.state.userToBan,
                            "data-test-selector": i.BanUsernameField
                        })), !e && a.createElement(p.z, {
                            onClick: this.handleAddBannedChatterClick,
                            state: t,
                            "data-test-selector": i.BanButton
                        }, Object(s.d)("Add", "AddBannedChatter")))))
                    }, t
                }(a.Component),
                f = Object(o.compose)(Object(u.b)("AddBannedChatter", {
                    autoReportInteractive: !0
                }), Object(c.a)(g, {
                    name: "banUserFromChatQuery"
                }))(h);
            n.d(t, !1, function() {
                return i
            }), n.d(t, !1, function() {
                return h
            }), n.d(t, "a", function() {
                return f
            })
        },
        "hP+/": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "UpdateChatSettings"
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
                                    value: "UpdateChatSettingsInput"
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
                                value: "updateChatSettings"
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
                                        value: "chatSettings"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "autoModLevel"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "blockLinks"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "chatDelayMs"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "isOptedOutOfGlobalBannedWordsList"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "requireVerifiedAccount"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "rules"
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
                    end: 219
                }
            };
            n.loc.source = {
                body: "mutation UpdateChatSettings($input: UpdateChatSettingsInput!) {\nupdateChatSettings(input: $input) {\nchatSettings {\nautoModLevel\nblockLinks\nchatDelayMs\nisOptedOutOfGlobalBannedWordsList\nrequireVerifiedAccount\nrules\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        iQf2: function(e, t, n) {},
        kFVF: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "Settings_Connections_Twitter"
                    },
                    variableDefinitions: [],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
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
                                        value: "accountConnections"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "twitter"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "username"
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
                    end: 101
                }
            };
            n.loc.source = {
                body: "query Settings_Connections_Twitter {\ncurrentUser {\nid\naccountConnections {\ntwitter {\nusername\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        kLO1: function(e, t, n) {
            "use strict";
            n.r(t);
            var i = n("mrSG"),
                r = n("q1tI"),
                a = n("mLw1"),
                o = n("fvjX"),
                s = n("yR8l"),
                c = n("V+GM"),
                l = n("ht6z"),
                d = n("NvVO"),
                u = n("2xye"),
                m = n("GnwI"),
                p = n("BK8n"),
                g = n("7PeK"),
                h = n("w+Ve"),
                f = n("cVLR"),
                v = n("3/9Z"),
                k = n("/7QA"),
                b = n("Ue10"),
                S = function() {
                    return r.createElement(b.Xa, {
                        fullWidth: !0,
                        display: b.X.Flex,
                        flexDirection: b.Aa.Column,
                        alignItems: b.f.Center
                    }, r.createElement(b.W, {
                        fontSize: b.Ca.Size2
                    }, Object(k.d)("You've gone Turbo!", "CancelTurboLink")), r.createElement(b.W, null, Object(k.d)("We hope you're enjoying your new chat shwag and watching ad-free.", "CancelTurboLink")), r.createElement(b.U, {
                        to: "/unsubscribe/turbo"
                    }, Object(k.d)("Cancel Turbo", "CancelTurboLink")))
                },
                y = n("Hf6r"),
                C = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return this.props.data.currentUser ? this.props.data.currentUser.hasPrime ? r.createElement(a.a, {
                            to: "/settings/prime"
                        }) : this.props.data.currentUser.hasTurbo ? r.createElement(r.Fragment, null, r.createElement(g.a, null, r.createElement(p.a, null, r.createElement(S, null))), r.createElement(f.a, null), r.createElement(v.a, null)) : Object(l.a)(this.props.data.requestInfo.countryCode) ? r.createElement(a.a, {
                            to: "/settings/prime"
                        }) : (window.location.replace("https://www.twitch.tv/products/turbo/ticket"), null) : this.props.data.loading ? r.createElement(b.Za, {
                            fillContent: !0
                        }) : r.createElement(h.a, null)
                    }, t
                }(r.Component),
                w = Object(o.compose)(Object(m.b)("SettingsTurboPage", {
                    autoReportInteractive: !0,
                    destination: d.a.SettingsTurbo
                }), Object(c.a)({
                    location: u.PageviewLocation.SettingsPage
                }), Object(s.a)(y))(C);
            n.d(t, "TURBO_SIGNUP_URL", function() {
                return "https://www.twitch.tv/products/turbo/ticket"
            }), n.d(t, "SettingsTurboPageComponent", function() {
                return C
            }), n.d(t, "SettingsTurboPage", function() {
                return w
            })
        },
        "kRI/": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            }), n.d(t, "b", function() {
                return r
            }), n.d(t, "c", function() {
                return m
            }), n.d(t, "d", function() {
                return p
            }), n.d(t, "e", function() {
                return g
            });
            var i, r, a, o = n("mrSG"),
                s = n("/7QA"),
                c = n("DMoW"),
                l = n("yI6f"),
                d = n("3lt/");

            function u(e) {
                s.p.tracking.track(d.SpadeEventType.RecFeedbackClick, o.__assign({}, e))
            }

            function m(e) {
                u({
                    click_step: i.NotInterested,
                    section: a.TwitchHome,
                    item_page: d.PageviewMedium.TwitchHome,
                    feedback_type: null,
                    feedbacked_item_id: null,
                    feedback_action: null,
                    feedback_reason: null,
                    item_name: null,
                    clicked_item_id: e.clickedItemID,
                    item_tracking_id: e.itemTrackingID,
                    item_position: e.itemPosition,
                    row_position: e.rowPosition,
                    reason_type: e.reasonType,
                    reason_target: e.reasonTarget,
                    reason_target_type: e.reasonTargetType,
                    row_name: e.rowName,
                    model_tracking_id: e.modelTrackingID,
                    clicked_content_type: e.clickedContentType
                })
            }

            function p(e) {
                u({
                    section: e.clickStep === i.SettingsChange ? null : a.TwitchHome,
                    item_page: e.clickStep === i.SettingsChange ? d.PageviewMedium.Settings : d.PageviewMedium.TwitchHome,
                    item_name: null,
                    click_step: e.clickStep,
                    feedback_type: e.feedbackType,
                    feedbacked_item_id: e.feedbackedItemID,
                    feedback_action: e.feedbackAction,
                    feedback_reason: e.feedbackReason,
                    clicked_item_id: e.clickedItemID,
                    item_tracking_id: e.itemTrackingID,
                    item_position: e.itemPosition,
                    row_position: e.rowPosition,
                    reason_type: e.reasonType,
                    reason_target: e.reasonTarget,
                    reason_target_type: e.reasonTargetType,
                    row_name: e.rowName,
                    model_tracking_id: e.modelTrackingID,
                    clicked_content_type: e.clickedContentType
                })
            }

            function g(e) {
                u({
                    click_step: i.SettingsChange,
                    item_page: d.PageviewMedium.Settings,
                    feedback_action: r.Remove,
                    feedback_type: function(e) {
                        switch (e) {
                            case c.H.CATEGORY:
                                return l.b.Game;
                            case c.H.CHANNEL:
                                return l.b.Live;
                            case c.H.SHELF:
                                return l.b.Shelf;
                            case c.H.VOD:
                                return l.b.Vod;
                            case c.H.UNSPECIFIED:
                                return null;
                            default:
                                return e
                        }
                    }(e.feedbackType),
                    section: null,
                    clicked_item_id: null,
                    item_tracking_id: null,
                    item_position: null,
                    row_position: null,
                    reason_type: null,
                    reason_target: null,
                    reason_target_type: null,
                    row_name: null,
                    model_tracking_id: null,
                    clicked_content_type: null,
                    item_name: e.itemName,
                    feedbacked_item_id: e.feedbackedItemID,
                    feedback_reason: e.feedbackReason
                })
            }! function(e) {
                e.NotInterested = "not_interested", e.Close = "close", e.Submit = "submit", e.PostSubmit = "post_submit", e.SettingsChange = "settings_change"
            }(i || (i = {})),
            function(e) {
                e.Add = "add", e.Remove = "remove", e.Undo = "undo", e.Manage = "manage"
            }(r || (r = {})),
            function(e) {
                e.LeftNav = "leftnav", e.Carousel = "carousel", e.TwitchHome = "twitch_home"
            }(a || (a = {}))
        },
        kRbC: function(e, t, n) {},
        "kp/X": function(e, t) {
            e.exports = function(e) {
                var t, n, i = e[0],
                    r = e[1],
                    a = e[2],
                    o = Math.min(i, r, a),
                    s = Math.max(i, r, a),
                    c = s - o;
                return n = 0 == s ? 0 : c / s * 1e3 / 10, s == o ? t = 0 : i == s ? t = (r - a) / c : r == s ? t = 2 + (a - i) / c : a == s && (t = 4 + (i - r) / c), (t = Math.min(60 * t, 360)) < 0 && (t += 360), [t, n, s / 255 * 1e3 / 10]
            }
        },
        lRpU: function(e, t, n) {
            "use strict";
            n.r(t);
            var i = n("mrSG"),
                r = n("q1tI"),
                a = n("mLw1"),
                o = n("fvjX"),
                s = n("/7QA"),
                c = n("yR8l"),
                l = n("V+GM"),
                d = n("ht6z"),
                u = n("NvVO"),
                m = n("2xye"),
                p = n("GnwI"),
                g = n("7PeK"),
                h = n("c0Zc"),
                f = n("j3KY"),
                v = n("X+nQ"),
                k = n("geRD"),
                b = n("fWal"),
                S = function(e) {
                    var t = e.saving || e.errorLoading;
                    return r.createElement(b.a, {
                        id: "settings-prime-page-post-subscriptions",
                        label: Object(s.d)("Post Subscriptions", "PostSubscriptionsToggle"),
                        description: Object(s.d)("Share in chat when you use your free subscription benefit", "PostSubscriptionsToggle"),
                        extraDescription: Object(s.d)("Let your favorite streamer know your free subscription supports them. Turning this off will hide your subscription announcement in chat.", "PostSubscriptionsToggle"),
                        error: e.errorSaving || e.errorLoading,
                        checked: e.checked,
                        onChange: e.onChange,
                        disabled: t,
                        showPlaceholder: e.loading
                    })
                },
                y = n("S2IA"),
                C = n("5lRV"),
                w = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            checked: !1,
                            saving: !1,
                            errorSaving: !1
                        }, t.logger = s.p.logger.withCategory("settings").withCategory("post-subscriptions-toggle"), t.onCheckBoxChange = function(e) {
                            t.setState({
                                checked: e,
                                saving: !0
                            }, function() {
                                t.updateSettings(e)
                            })
                        }, t.updateSettings = function(e) {
                            return i.__awaiter(t, void 0, void 0, function() {
                                var t, n, r;
                                return i.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            if (this.logger.debug("Updating prime settings", {
                                                    shouldEnableSubCreditChatNotification: e
                                                }), !(t = this.props.data.currentUser && this.props.data.currentUser.id)) return this.logger.warn("No currentUser - unable to update prime settings."), [2];
                                            a.label = 1;
                                        case 1:
                                            return a.trys.push([1, 3, , 4]), [4, this.props.updatePostSubscriptions(Object(k.a)({
                                                shouldEnableSubCreditChatNotification: e,
                                                userID: t
                                            }))];
                                        case 2:
                                            return a.sent(), n = function(t) {
                                                var n = t && t.currentUser,
                                                    r = n && n.primeSettings;
                                                return r ? {
                                                    currentUser: i.__assign({}, n, {
                                                        primeSettings: i.__assign({}, r, {
                                                            isSubCreditChatNotificationEnabled: e
                                                        })
                                                    })
                                                } : t
                                            }, Object(k.e)(C, {}, n), this.logger.debug("Updated prime settings", {
                                                shouldEnableSubCreditChatNotification: e
                                            }), this.setState({
                                                saving: !1,
                                                errorSaving: !1
                                            }), [3, 4];
                                        case 3:
                                            return r = a.sent(), this.logger.warn("Failed to update prime settings", {
                                                err: r
                                            }), this.setState({
                                                saving: !1,
                                                errorSaving: !0,
                                                checked: !e
                                            }), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
                        e.data.loading && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        var t = e.data,
                            n = t.currentUser;
                        if (!t.loading && this.props.data.loading) {
                            var i = n && n.primeSettings && n.primeSettings.isSubCreditChatNotificationEnabled || !1;
                            this.setState({
                                checked: i
                            })
                        }
                    }, t.prototype.render = function() {
                        var e = this.props.data.currentUser,
                            t = e && e.primeSettings,
                            n = !!this.props.data.error || !this.props.data.loading && !t;
                        return r.createElement(S, {
                            checked: this.state.checked,
                            saving: this.state.saving,
                            loading: this.props.data.loading,
                            errorLoading: n,
                            errorSaving: this.state.errorSaving,
                            onChange: this.onCheckBoxChange
                        })
                    }, t
                }(r.Component),
                N = Object(o.compose)(Object(p.b)("PostSubscriptionsToggle"), Object(c.a)(C, {
                    options: {
                        fetchPolicy: "network-only"
                    }
                }), Object(c.a)(y, {
                    name: "updatePostSubscriptions"
                }))(w),
                E = n("cVLR"),
                _ = n("3/9Z"),
                O = n("W61N"),
                T = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.shouldOpenURL = !0, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        if (!this.props.data.currentUser || !this.props.data.requestInfo) return null;
                        if (!this.props.data.currentUser.hasPrime) {
                            if (Object(d.a)(this.props.data.requestInfo.countryCode)) {
                                if (this.shouldOpenURL) {
                                    this.shouldOpenURL = !1;
                                    var e = this.props.location.pathname.substring(1);
                                    window.open(Object(f.e)("sm_w_tsp_p_t", e))
                                }
                                return r.createElement(v.a, null)
                            }
                            return r.createElement(a.a, {
                                to: "/settings/turbo"
                            })
                        }
                        return r.createElement(r.Fragment, null, r.createElement(E.a, null), r.createElement(_.a, null), r.createElement(h.a, {
                            title: Object(s.d)("Subscriptions Settings", "SettingsPrimePage"),
                            description: Object(s.d)("Choose how your subscription activity will display in chat", "SettingsPrimePage")
                        }), r.createElement(g.a, null, r.createElement(N, null)))
                    }, t
                }(r.Component),
                D = Object(o.compose)(Object(p.b)("SettingsPrimePage", {
                    autoReportInteractive: !0,
                    destination: u.a.SettingsPrime
                }), Object(l.a)({
                    location: m.PageviewLocation.SettingsPage
                }), Object(c.a)(O))(T);
            n.d(t, "PRIME_URL_REFTAG", function() {
                return "sm_w_tsp_p_t"
            }), n.d(t, "SettingsPrimePageComponent", function() {
                return T
            }), n.d(t, "SettingsPrimePage", function() {
                return D
            })
        },
        lX8J: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "Settings_Connections_RokuConnection"
                    },
                    variableDefinitions: [],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
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
                                        value: "ssoLinks"
                                    },
                                    arguments: [{
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "app"
                                        },
                                        value: {
                                            kind: "StringValue",
                                            value: "roku",
                                            block: !1
                                        }
                                    }],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "app"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "ssoID"
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
                    end: 100
                }
            };
            n.loc.source = {
                body: 'query Settings_Connections_RokuConnection {\ncurrentUser {\nid\nssoLinks(app: "roku") {\napp\nssoID\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        o2KV: function(e, t, n) {},
        ovQd: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e, t, n) {
                return Math.min(Math.max(e, t), n)
            }
        },
        pNbj: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "UnBanUserFromChat"
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
                                    value: "UnbanUserFromChatRoomInput"
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
                                value: "unbanUserFromChatRoom"
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
                                        value: "ban"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "bannedUser"
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
                                                        value: "login"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }]
                                            }
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "createdAt"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "moderator"
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
                                                        value: "displayName"
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
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 194
                }
            };
            n.loc.source = {
                body: "mutation UnBanUserFromChat($input: UnbanUserFromChatRoomInput!) {\nunbanUserFromChatRoom(input: $input) {\nban {\nbannedUser {\nid\nlogin\n}\ncreatedAt\nmoderator {\nid\ndisplayName\n}\n}\nerror {\ncode\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        pUt1: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "Settings_ChannelVideo_EmailVerificationToggle"
                    },
                    variableDefinitions: [],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
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
                                        value: "chatSettings"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "requireVerifiedAccount"
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
                    end: 114
                }
            };
            n.loc.source = {
                body: "query Settings_ChannelVideo_EmailVerificationToggle {\ncurrentUser {\nid\nchatSettings {\nrequireVerifiedAccount\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        pnuN: function(e, t, n) {
            var i = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "Settings_ChannelChat_BannedChatters"
                    },
                    variableDefinitions: [],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
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
                                        value: "bannedUsers"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "BannedUser"
                                            },
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
                    end: 213
                }
            };
            i.loc.source = {
                body: '#import "twilight/pages/settings/components/settings-channel-page/components/banned-chatters/banned-user-fragment.gql"\nquery Settings_ChannelChat_BannedChatters {\ncurrentUser {\nid\nbannedUsers {\n...BannedUser\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var r = {};
            i.definitions = i.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !r[t] && (r[t] = !0, !0)
                })
            }(n("Xq7d").definitions)), e.exports = i
        },
        pxuV: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "SmartNotificationSettings_SetNotificationSetting"
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
                        }
                    }],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
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
                                    name: {
                                        kind: "Name",
                                        value: "settingState"
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
                    end: 154
                }
            };
            n.loc.source = {
                body: "mutation SmartNotificationSettings_SetNotificationSetting($input: SetNotificationSettingInput!) {\nsetNotificationSetting(input: $input) {\nsettingState\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        q3tR: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "UpdateUserSubscriptionSettings_RENAME2"
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
                                    value: "UpdateUserSubscriptionSettingsInput"
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
                                value: "updateUserSubscriptionSettings"
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
                                        value: "subscriptionSettings"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "giftsToFollowedChannelsOnly"
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
                    end: 200
                }
            };
            n.loc.source = {
                body: "mutation UpdateUserSubscriptionSettings_RENAME2($input: UpdateUserSubscriptionSettingsInput!) {\nupdateUserSubscriptionSettings(input: $input) {\nsubscriptionSettings {\ngiftsToFollowedChannelsOnly\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        qRXA: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ChangeEmailForm"
                    },
                    variableDefinitions: [],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
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
                                        value: "email"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "isEmailVerified"
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
                    end: 281
                }
            };
            n.loc.source = {
                body: "query ChangeEmailForm {\ncurrentUser {\nid\nemail\n# isEmailVerified is queried only so it can be updated with refetch when a user changes their address\n# this is required b/c twilight cannot know if the user is changing their email to a previously-verified address\nisEmailVerified\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        sYG4: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.parseToHsv = function(e) {
                e = (0, i.default)(e);
                var t = (0, r.default)(e),
                    n = 4 === e.length ? e[3] : 1;
                return t.push(n), t
            }, t.toRgbString = l, t.equals = function(e, t) {
                return l(e) === l(t)
            }, t.isDark = function(e) {
                return (0, s.default)((0, a.default)(e)) <= 128
            };
            var i = c(n("DtRd")),
                r = c(n("kp/X")),
                a = c(n("NZo8")),
                o = c(n("Q0+g")),
                s = c(n("Puv/"));

            function c(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function l(e) {
                var t = (0, a.default)(e);
                return 4 === e.length && t.push(e[3]), (0, o.default)(t)
            }
        },
        t1je: function(e, t, n) {
            "use strict";
            n.r(t);
            var i, r = n("mrSG"),
                a = n("q1tI"),
                o = n("fvjX"),
                s = n("/7QA"),
                c = n("V+GM"),
                l = n("NvVO"),
                d = n("2xye"),
                u = n("GnwI"),
                m = n("7PeK"),
                p = n("c0Zc"),
                g = n("oJmH"),
                h = n("yR8l"),
                f = n("geRD"),
                v = n("TSYQ");
            n("YFmX");
            ! function(e) {
                e[e.Blizzard = 0] = "Blizzard", e[e.Facebook = 1] = "Facebook", e[e.LeagueOfLegends = 2] = "LeagueOfLegends", e[e.Roku = 3] = "Roku", e[e.PSN = 4] = "PSN", e[e.Twitter = 5] = "Twitter", e[e.Steam = 6] = "Steam", e[e.Xbox = 7] = "Xbox", e[e.Youtube = 8] = "Youtube", e[e.Amazon = 9] = "Amazon"
            }(i || (i = {}));
            var k = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = {
                            "connection-image": !0,
                            "connection-image--blizzard": this.props.type === i.Blizzard,
                            "connection-image--facebook": this.props.type === i.Facebook,
                            "connection-image--league-of-legends": this.props.type === i.LeagueOfLegends,
                            "connection-image--roku": this.props.type === i.Roku,
                            "connection-image--psn": this.props.type === i.PSN,
                            "connection-image--steam": this.props.type === i.Steam,
                            "connection-image--twitter": this.props.type === i.Twitter,
                            "connection-image--xbox": this.props.type === i.Xbox,
                            "connection-image--youtube": this.props.type === i.Youtube,
                            "connection-image--amazon": this.props.type === i.Amazon
                        };
                        return a.createElement("div", {
                            className: v(e)
                        })
                    }, t
                }(a.Component),
                b = n("/MKj"),
                S = n("fbdC"),
                y = n("aCAx"),
                C = n("Ue10"),
                w = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleClick = function() {
                            t.props.showModal({
                                message: t.props.message,
                                confirmButton: t.props.confirmButton,
                                onConfirmClick: t.props.onConfirmClick
                            })
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(C.z, r.__assign({}, this.props, {
                            onClick: this.handleClick
                        }))
                    }, t
                }(a.Component);
            var N, E = Object(b.connect)(null, function(e) {
                    return {
                        showModal: function(t) {
                            return e(Object(y.d)(S.a, t))
                        }
                    }
                })(w),
                _ = n("BK8n"),
                O = (n("kRbC"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleClick = function() {
                            t.props.onClick()
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(_.a, null, a.createElement(C.Xa, {
                            className: "connection-component",
                            display: C.X.Flex,
                            flexDirection: C.Aa.Row
                        }, this.props.image && a.createElement(C.Xa, {
                            className: "connection-component__image",
                            "data-test-selector": "connection-image-test-selector",
                            padding: {
                                right: 1,
                                top: .5
                            },
                            flexShrink: 0
                        }, a.createElement(C.Cb, {
                            borderRadius: C.x.Medium,
                            overflow: C.cb.Hidden
                        }, this.props.image)), a.createElement(C.Xa, {
                            className: "connection-component__right",
                            padding: {
                                x: 1
                            },
                            display: C.X.Flex,
                            flexGrow: 1,
                            flexDirection: C.Aa.Column,
                            fullWidth: !0
                        }, a.createElement(C.Xa, {
                            className: "connection-component__header",
                            display: C.X.Flex,
                            flexDirection: C.Aa.Row,
                            alignItems: C.f.Center
                        }, a.createElement(C.Xa, {
                            className: "connection-component__header-text",
                            display: C.X.Flex,
                            flexDirection: C.Aa.Column,
                            flexGrow: 1
                        }, a.createElement(C.W, {
                            fontSize: C.Ca.Size5,
                            "data-test-selector": "connection-title-test-selector",
                            bold: !0
                        }, this.renderTitle()), this.props.subtitle && a.createElement(C.Pa, {
                            padding: {
                                top: 1
                            }
                        }, a.createElement(C.W, {
                            "data-test-selector": "connection-subtitle-test-selector"
                        }, this.props.subtitle))), this.renderButton()), this.renderError(), this.props.body && a.createElement(C.Xa, {
                            className: "connection-component__body",
                            "data-test-selector": "connection-body-test-selector",
                            padding: {
                                top: 2
                            }
                        }, this.props.body), this.props.footer && a.createElement(C.Cb, {
                            className: "connection-component__footer",
                            "data-test-selector": "connection-footer-test-selector",
                            color: C.O.Alt2,
                            padding: {
                                top: 2
                            }
                        }, this.props.footer))))
                    }, t.prototype.renderError = function() {
                        if (this.props.error) {
                            var e = Object(s.d)("Failed to connect. Please try again.", "ThirdPartyConnection"),
                                t = Object(s.d)("Failed to disconnect. Please try again.", "ThirdPartyConnection"),
                                n = this.props.connected ? t : e;
                            return a.createElement(C.Xa, {
                                padding: {
                                    top: .5
                                },
                                alignSelf: C.g.End,
                                "data-test-selector": "connection-error-test-selector"
                            }, a.createElement(C.W, {
                                color: C.O.Error
                            }, n))
                        }
                    }, t.prototype.renderTitle = function() {
                        return this.props.titleLink ? a.createElement(C.U, {
                            to: this.props.titleLink
                        }, this.props.title) : this.props.title
                    }, t.prototype.renderButton = function() {
                        var e = Object(s.d)("Disconnect", "ThirdPartyConnection"),
                            t = Object(s.d)("Connect", "ThirdPartyConnection"),
                            n = this.props.working ? C.E.Loading : C.E.Default,
                            i = Object(s.d)("Are you sure you want to disconnect {platform}?", {
                                platform: a.createElement(a.Fragment, null, this.props.title)
                            }, "ThirdPartyConnection"),
                            r = a.createElement(C.Pa, {
                                padding: {
                                    x: 2
                                }
                            }, a.createElement(C.W, {
                                fontSize: C.Ca.Size4
                            }, i)),
                            o = a.createElement(C.z, {
                                type: C.F.Alert
                            }, Object(s.d)("Yes, Disconnect", "ThirdPartyConnection"));
                        return this.props.connected ? a.createElement(E, {
                            type: C.F.Hollow,
                            onConfirmClick: this.handleClick,
                            confirmButton: o,
                            message: r
                        }, e) : a.createElement(C.z, {
                            type: C.F.Hollow,
                            state: n,
                            onClick: this.handleClick
                        }, t)
                    }, t
                }(a.Component)),
                T = n("69j0"),
                D = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            error: !1,
                            working: !1
                        }, t.logger = s.k.withCategory("AmazonConnection"), t.handleClick = function() {
                            t.setState({
                                error: !1
                            }), t.connected && t.disconnect()
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        if (!this.connected) return null;
                        var e = Object(s.d)("Amazon", "AmazonConnectionComponent"),
                            t = Object(s.d)("Connect your Amazon account", "AmazonConnectionComponent"),
                            n = Object(s.d)("When you choose to connect your Amazon account, the profile information connected to your Amazon account, including your name, may be used by Twitch. Twitch will not publicly display your Amazon account information.", "AmazonConnectionComponent"),
                            r = this.props.data.loading;
                        return a.createElement(O, {
                            image: a.createElement(k, {
                                type: i.Amazon
                            }),
                            title: e,
                            subtitle: t,
                            footer: n,
                            error: this.state.error,
                            connected: this.connected,
                            onClick: this.handleClick,
                            working: this.state.working || r
                        })
                    }, t.prototype.disconnect = function() {
                        return r.__awaiter(this, void 0, void 0, function() {
                            var e, t, n;
                            return r.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        if (!this.userID) return this.logger.debug("Unable to disconnect from Amazon - current user's ID is unknown."), [2];
                                        this.setState({
                                            working: !0
                                        }), e = Object(f.a)({
                                            userID: this.userID
                                        }), i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, 4, 5]), [4, this.props.unlinkAmazonConnection(e)];
                                    case 2:
                                        return t = i.sent(), t.data.unlinkAmazonConnection && !!t.data.unlinkAmazonConnection.isSuccess ? (this.updateConnectionInCache(!1), [3, 5]) : (this.logger.warn("Failed to disconnect from Amazon"), this.setState({
                                            error: !0,
                                            working: !1
                                        }), [2]);
                                    case 3:
                                        return n = i.sent(), this.logger.warn("Failed to disconnect from Amazon", {
                                            error: n
                                        }), this.setState({
                                            error: !0
                                        }), [3, 5];
                                    case 4:
                                        return this.setState({
                                            working: !1
                                        }), [7];
                                    case 5:
                                        return [2]
                                }
                            })
                        })
                    }, t.prototype.updateConnectionInCache = function(e) {
                        Object(f.e)(T, {}, function(t) {
                            return t.currentUser && t.currentUser.accountConnections.hasConnectedAmazon && (t.currentUser.accountConnections.hasConnectedAmazon = e), t
                        })
                    }, Object.defineProperty(t.prototype, "userID", {
                        get: function() {
                            return this.props.data.currentUser && this.props.data.currentUser.id
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "connected", {
                        get: function() {
                            return !(!this.props.data.currentUser || !this.props.data.currentUser.accountConnections.hasConnectedAmazon)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(a.Component),
                U = n("IPK1"),
                F = Object(g.compose)(Object(h.a)(T), Object(h.a)(U, {
                    name: "unlinkAmazonConnection"
                }))(D),
                x = n("cr+I"),
                j = n("edgk"),
                I = n("b6Yk");
            n("AOMz");
            ! function(e) {
                e.NorthAmerica = "us", e.Europe = "eu", e.Korea = "kr", e.Taiwan = "tw", e.China = "cn", e.SouthEastAsia = "sea"
            }(N || (N = {}));
            var P = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            error: !1,
                            working: !1,
                            region: N.NorthAmerica
                        }, t.logger = s.k.withCategory("BlizzardConnection"), t.handleClick = function() {
                            t.setState({
                                error: !1
                            }), t.connected ? t.disconnect() : t.connect()
                        }, t.handleRegionSelect = function(e) {
                            switch (e.currentTarget.value) {
                                case N.NorthAmerica:
                                    return void t.setState({
                                        region: N.NorthAmerica
                                    });
                                case N.Europe:
                                    return void t.setState({
                                        region: N.Europe
                                    });
                                case N.Korea:
                                    return void t.setState({
                                        region: N.Korea
                                    });
                                case N.Taiwan:
                                    return void t.setState({
                                        region: N.Taiwan
                                    });
                                case N.China:
                                    return void t.setState({
                                        region: N.China
                                    });
                                case N.SouthEastAsia:
                                    return void t.setState({
                                        region: N.SouthEastAsia
                                    });
                                default:
                                    return
                            }
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = Object(s.d)("Blizzard Battle.net", "BlizzardConnection"),
                            t = Object(s.d)("By linking your accounts, you agree that Blizzard may provide Twitch with your Battle Tag and certain other account and game information such as your Battle.net ID and skill ranking, and Twitch may provide such things as your Twitch viewing activity to Blizzard. Such information shall be transferred to the companies' locations in the U.S. If you change your mind you must de-link your accounts through both Battle.net and Twitch for both sides to stop sharing data. Once you disconnect your accounts, each party will stop using your personally identifiable information provided by the other party.", "BlizzardConnection"),
                            n = this.props.data.loading;
                        return a.createElement(O, {
                            image: a.createElement(k, {
                                type: i.Blizzard
                            }),
                            title: e,
                            subtitle: this.getSubtitle(),
                            body: this.renderBody(),
                            footer: t,
                            error: this.state.error,
                            connected: this.connected,
                            onClick: this.handleClick,
                            working: this.state.working || n
                        })
                    }, t.prototype.renderBody = function() {
                        if (!this.connected) return a.createElement(C.Xa, {
                            display: C.X.Flex
                        }, a.createElement(C.Xa, {
                            className: "blizzard-connection__region-select"
                        }, a.createElement(C.xb, {
                            value: this.state.region,
                            onChange: this.handleRegionSelect
                        }, a.createElement("option", {
                            value: N.NorthAmerica
                        }, this.getRegionText(N.NorthAmerica)), a.createElement("option", {
                            value: N.Europe
                        }, this.getRegionText(N.Europe)), a.createElement("option", {
                            value: N.Korea
                        }, this.getRegionText(N.Korea)), a.createElement("option", {
                            value: N.Taiwan
                        }, this.getRegionText(N.Taiwan)), a.createElement("option", {
                            value: N.China
                        }, this.getRegionText(N.China)), a.createElement("option", {
                            value: N.SouthEastAsia
                        }, this.getRegionText(N.SouthEastAsia)))))
                    }, t.prototype.getSubtitle = function() {
                        if (this.connected) {
                            var e = this.getRegionText(this.props.data.currentUser.blizzardAccount.region),
                                t = this.props.data.currentUser.blizzardAccount.battleTag;
                            return t && t.length > 0 && (e = t + " - " + e), e
                        }
                        return Object(s.d)("Connect your Blizzard games and Twitch activity", "BlizzardConnection")
                    }, t.prototype.getRegionText = function(e) {
                        switch (e) {
                            case N.NorthAmerica:
                                return Object(s.d)("North America (US)", "BlizzardConnection");
                            case N.Europe:
                                return Object(s.d)("Europe (EU)", "BlizzardConnection");
                            case N.Korea:
                                return Object(s.d)("Korea (KR)", "BlizzardConnection");
                            case N.Taiwan:
                                return Object(s.d)("Taiwan (TW)", "BlizzardConnection");
                            case N.China:
                                return Object(s.d)("China (CN)", "BlizzardConnection");
                            case N.SouthEastAsia:
                                return Object(s.d)("South East Asia (SEA)", "BlizzardConnection");
                            default:
                                return
                        }
                    }, t.prototype.disconnect = function() {
                        return r.__awaiter(this, void 0, void 0, function() {
                            var e, t;
                            return r.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        if (!this.userID) return this.logger.debug("Unable to disconnect from Blizzard - current user's ID is unknown."), [2];
                                        this.setState({
                                            working: !0
                                        }), n.label = 1;
                                    case 1:
                                        return n.trys.push([1, 3, 4, 5]), e = "/v5/blizzard/" + this.userID, [4, I.a.deleteOrThrow(e)];
                                    case 2:
                                        return n.sent(), this.props.data.refetch(), [3, 5];
                                    case 3:
                                        return t = n.sent(), this.logger.warn("Failed to disconnect from Blizzard", {
                                            error: t
                                        }), this.setState({
                                            error: !0
                                        }), [3, 5];
                                    case 4:
                                        return this.setState({
                                            working: !1
                                        }), [7];
                                    case 5:
                                        return [2]
                                }
                            })
                        })
                    }, t.prototype.connect = function() {
                        return r.__awaiter(this, void 0, void 0, function() {
                            var e, t, n, i = this;
                            return r.__generator(this, function(r) {
                                return this.userID ? (this.setState({
                                    working: !0
                                }), e = x.stringify({
                                    region: this.state.region
                                }), t = s.a.apiBaseURL + "/v5/blizzard/" + this.userID + "/auth?" + e, this.logger.info(t), (n = window.open(t, "blizzardPopout", "width=480,height=640")) ? (Object(j.a)(n, function(e) {
                                    i.logger.debug("Blizzard connection window closed", {
                                        success: e
                                    }), i.setState({
                                        error: !e,
                                        working: !1
                                    }), i.props.data.refetch()
                                }), [2]) : (this.setState({
                                    working: !1,
                                    error: !0
                                }), [2])) : (this.logger.debug("Unable to start Blizzard connection - current user's ID is unknown."), [2])
                            })
                        })
                    }, Object.defineProperty(t.prototype, "userID", {
                        get: function() {
                            return this.props.data.currentUser && this.props.data.currentUser.id
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "connected", {
                        get: function() {
                            return !!(this.props.data.currentUser && this.props.data.currentUser.accountConnections.blizzard && this.props.data.currentUser.blizzardAccount)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(a.Component),
                L = n("Bx/Q"),
                A = Object(h.a)(L)(P),
                R = n("kRBY"),
                B = (n("ZYQZ"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onClickDisconnect = function() {
                            t.props.onClickDisconnect(t.props.id)
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(O, {
                            image: a.createElement(u.a, {
                                className: "extension-connection__icon",
                                src: this.iconOrFallback,
                                alt: ""
                            }),
                            title: this.getTitle(),
                            titleLink: this.getLink(),
                            subtitle: this.props.author.length > 0 ? Object(s.d)("by {author}", {
                                author: this.props.author
                            }, "ExtensionConnection") : void 0,
                            footer: this.summaryOrFallbackMessage,
                            onClick: this.onClickDisconnect,
                            connected: !0,
                            error: this.props.disconnectError,
                            working: this.props.working
                        })
                    }, t.prototype.getTitle = function() {
                        return 0 === this.props.name.length ? this.props.id : this.props.name
                    }, t.prototype.getLink = function() {
                        if (0 !== this.props.name.length) return "/ext/" + this.props.id
                    }, Object.defineProperty(t.prototype, "iconOrFallback", {
                        get: function() {
                            return this.props.iconURL.length > 0 ? this.props.iconURL : "https://static-cdn.jtvnw.net/jtv_user_pictures/xarth/404_user_70x70.png"
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "summaryOrFallbackMessage", {
                        get: function() {
                            return this.props.summary.length > 0 ? this.props.summary : Object(s.d)("This extension no longer exists", "ExtensionConnection")
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(a.Component)),
                q = Object(u.b)("ExtensionConnection", {
                    autoReportInteractive: !0
                })(B),
                z = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            fetchError: !1,
                            linkedExtensionsByID: {}
                        }, t.logger = s.k.withCategory("extension-connection-list"), t.onClickDisconnect = function(e) {
                            return r.__awaiter(t, void 0, void 0, function() {
                                return r.__generator(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            this.logger.debug("Disconnecting", {
                                                id: e
                                            }), this.setExtensionState(e, {
                                                working: !0
                                            }), t.label = 1;
                                        case 1:
                                            return t.trys.push([1, 3, , 4]), [4, I.a.putOrThrow("/v5/extensions/" + e + "/auth/link_user", {
                                                body: {
                                                    show_user: !1
                                                }
                                            })];
                                        case 2:
                                            return t.sent(), this.setState(function(t) {
                                                var n = r.__assign({}, t.linkedExtensionsByID);
                                                return delete n[e], {
                                                    linkedExtensionsByID: n
                                                }
                                            }), [3, 4];
                                        case 3:
                                            return t.sent(), this.logger.warn("Failed to disconnect extension due to error", {
                                                sessionUser: this.props.sessionUser,
                                                extensionID: e
                                            }), this.setExtensionState(e, {
                                                disconnectError: !0,
                                                working: !1
                                            }), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.fetchExtensionConnections()
                    }, t.prototype.render = function() {
                        if (this.state.fetchError) return this.renderEmptyState(!0);
                        for (var e = [], t = 0, n = Object.keys(this.state.linkedExtensionsByID); t < n.length; t++) {
                            var i = n[t],
                                o = this.state.linkedExtensionsByID[i];
                            e.push(a.createElement(q, r.__assign({
                                key: o.id,
                                onClickDisconnect: this.onClickDisconnect
                            }, o)))
                        }
                        return 0 === e.length ? this.renderEmptyState(!1) : a.createElement(a.Fragment, null, e)
                    }, t.prototype.renderEmptyState = function(e) {
                        var t = e ? Object(s.d)("Sorry, something went wrong fetching your extension connections. Please try again later.", "ExtensionConnectionList") : Object(s.d)("You have not shared your Twitch username with any extensions.", "ExtensionConnectionList");
                        return a.createElement(_.a, null, a.createElement(C.W, {
                            color: e ? C.O.Error : void 0
                        }, t))
                    }, t.prototype.fetchExtensionConnections = function() {
                        return r.__awaiter(this, void 0, void 0, function() {
                            var e, t, n, i, a, o, s = this;
                            return r.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        e = {}, t = !1, r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 3, , 4]), [4, I.a.get("/v5/extensions/linked")];
                                    case 2:
                                        if ((n = r.sent()) && n.body && n.body.extensions.length > 0)
                                            for (i = 0, a = n.body.extensions; i < a.length; i++) o = a[i], e[o.id] = {
                                                author: o.author_name,
                                                disconnectError: !1,
                                                iconURL: o.icon_url,
                                                id: o.id,
                                                name: o.name,
                                                summary: o.summary,
                                                working: !1
                                            };
                                        else {
                                            if (n && n.body && 0 === n.body.extensions.length) return this.props.latencyTracking.reportInteractive(), [2];
                                            this.logger.warn("Failed to fetch extension connections for user due to unexpected response", {
                                                sessionUser: this.props.sessionUser,
                                                response: n
                                            }), t = !0
                                        }
                                        return [3, 4];
                                    case 3:
                                        return r.sent(), this.logger.warn("Failed to fetch extension connections for user due to network error", {
                                            sessionUser: this.props.sessionUser
                                        }), t = !0, [3, 4];
                                    case 4:
                                        return this.setState({
                                            fetchError: t,
                                            linkedExtensionsByID: e
                                        }, function() {
                                            return s.props.latencyTracking.reportInteractive()
                                        }), [2]
                                }
                            })
                        })
                    }, t.prototype.setExtensionState = function(e, t) {
                        this.setState(function(n) {
                            var i;
                            return {
                                linkedExtensionsByID: r.__assign({}, n.linkedExtensionsByID, (i = {}, i[e] = r.__assign({}, n.linkedExtensionsByID[e], t), i))
                            }
                        })
                    }, t
                }(a.Component),
                M = Object(u.b)("ExtensionsConnectionList")(z);
            var X, G = Object(b.connect)(function(e) {
                    return {
                        sessionUser: Object(R.e)(e)
                    }
                })(M),
                V = n("3LEU"),
                H = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.state = {
                            error: !1,
                            working: !1
                        }, n.handleClick = function() {
                            n.setState({
                                error: !1
                            }), n.connected ? n.disconnect() : n.connect()
                        }, n.state.working = t.data.loading, n
                    }
                    return r.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                        !this.facebookConnection && e.data.currentUser && this.setState({
                            working: !1
                        })
                    }, t.prototype.render = function() {
                        var e = Object(s.d)("Facebook", "FacebookConnection"),
                            t = Object(s.d)("One-click log in to Twitch with your Facebook account", "FacebookConnection"),
                            n = Object(s.d)("By connecting your account with Facebook, you acknowledge and agree that information you choose to share will be uploaded to these services and may be viewed by these services and other users of these services.", "FacebookConnection");
                        return a.createElement(O, {
                            image: a.createElement(k, {
                                type: i.Facebook
                            }),
                            title: e,
                            subtitle: t,
                            footer: n,
                            connected: this.connected,
                            onClick: this.handleClick,
                            error: this.state.error,
                            working: this.state.working
                        })
                    }, Object.defineProperty(t.prototype, "connected", {
                        get: function() {
                            return !!this.facebookConnection
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "facebookConnection", {
                        get: function() {
                            return this.props.data.currentUser && this.props.data.currentUser.accountConnections && this.props.data.currentUser.accountConnections.facebook
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.connect = function() {
                        var e = this;
                        if (!this.connected) {
                            this.setState({
                                working: !0
                            });
                            var t = s.a.apiBaseURL + "/v5/facebook/" + this.props.data.currentUser.id + "/auth",
                                n = window.open(t, "Twitch", "width=1024,height=637");
                            n ? Object(j.a)(n, function(t) {
                                t && e.props.data.refetch(), e.setState({
                                    error: !t,
                                    working: !1
                                })
                            }) : this.setState({
                                working: !1,
                                error: !0
                            })
                        }
                    }, t.prototype.disconnect = function() {
                        return r.__awaiter(this, void 0, void 0, function() {
                            return r.__generator(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        if (!this.connected) return [2];
                                        this.setState({
                                            working: !0
                                        }), e.label = 1;
                                    case 1:
                                        return e.trys.push([1, 3, 4, 5]), [4, I.a.deleteOrThrow("/v5/facebook/" + this.props.data.currentUser.id)];
                                    case 2:
                                        return e.sent(), this.removeConnectionInCache(), [3, 5];
                                    case 3:
                                        return e.sent(), this.setState({
                                            error: !0
                                        }), [3, 5];
                                    case 4:
                                        return this.setState({
                                            working: !1
                                        }), [7];
                                    case 5:
                                        return [2]
                                }
                            })
                        })
                    }, t.prototype.removeConnectionInCache = function() {
                        Object(f.e)(V, {}, function(e) {
                            return e.currentUser && (e.currentUser.accountConnections.facebook = null), e
                        })
                    }, t
                }(a.Component),
                W = Object(h.a)(V)(H);
            n("/THz");
            ! function(e) {
                e.NorthAmerica = "na", e.Brazil = "br", e.EuropeWest = "euw", e.EuropeNordicAndEast = "eune", e.Japan = "jp", e.Korea = "kr", e.LatinAmericaNorth = "lan", e.LatinAmericaSouth = "las", e.Oceanic = "oce", e.Turkey = "tr", e.Russia = "ru", e.PublicBetaEnvironment = "pbe"
            }(X || (X = {}));
            var Q = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        connected: !1,
                        region: X.NorthAmerica,
                        summonerName: "",
                        error: !1,
                        working: !0
                    }, t.logger = s.k.withCategory("LeagueOfLegendsConnection"), t.getData = function() {
                        return r.__awaiter(t, void 0, void 0, function() {
                            var e, t, n;
                            return r.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        if (!this.props.userID) return this.logger.info("Tried to get League of Legends connection info, but the user is not logged in."), [2];
                                        e = x.stringify({
                                            user_id: this.props.userID
                                        }), t = "/api/lol/summonername?" + e, i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, 4, 5]), [4, I.a.get(t)];
                                    case 2:
                                        return (n = i.sent()).error || n.requestError ? this.setState({
                                            connected: !1
                                        }) : n.body && this.setState({
                                            connected: !0
                                        }), [3, 5];
                                    case 3:
                                        return i.sent(), this.setState({
                                            connected: !1
                                        }), [3, 5];
                                    case 4:
                                        return this.setState({
                                            working: !1
                                        }), [7];
                                    case 5:
                                        return [2]
                                }
                            })
                        })
                    }, t.disconnect = function() {
                        return r.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, i;
                            return r.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        if (!this.props.userID) return this.logger.info("Tried to disconnect from League of Legends but user is not logged in."), [2];
                                        this.setState({
                                            error: !1,
                                            working: !0
                                        }), e = x.stringify({
                                            user_id: this.props.userID,
                                            client_id: s.a.authSettings.clientID
                                        }), t = "/api/lol/delete?" + e, r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 3, 4, 5]), [4, I.a.get(t)];
                                    case 2:
                                        return (n = r.sent()).error || n.requestError ? (this.logger.warn("Failed to disconnect League of Legends account", {
                                            error: n.error,
                                            requestError: n.requestError
                                        }), this.setState({
                                            error: !0
                                        })) : this.setState({
                                            connected: !1
                                        }), [3, 5];
                                    case 3:
                                        return i = r.sent(), this.logger.warn("Failed to disconnect League of Legends account", i), this.setState({
                                            error: !0
                                        }), [3, 5];
                                    case 4:
                                        return this.setState({
                                            working: !1
                                        }), [7];
                                    case 5:
                                        return [2]
                                }
                            })
                        })
                    }, t.connect = function() {
                        return r.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, i;
                            return r.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        if (!this.props.userID) return this.logger.info("Tried to connect to League of Legends but user is not logged in."), [2];
                                        this.setState({
                                            error: !1,
                                            working: !0
                                        }), e = x.stringify({
                                            user_id: this.props.userID,
                                            client_id: s.a.authSettings.clientID,
                                            summoner: this.state.summonerName,
                                            region: this.state.region
                                        }), t = "/api/lol/verify?" + e, r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 3, 4, 5]), [4, I.a.get(t)];
                                    case 2:
                                        return n = r.sent(), n.error || n.requestError || !n.body || 0 === n.body.summoner_id || "" === n.body.summoner_name || "" === n.body.twitch_id ? (this.logger.warn("Failed to connect League of Legends account.", {
                                            error: n.error,
                                            requestError: n.requestError
                                        }), this.setState({
                                            error: !0
                                        })) : this.setState({
                                            connected: !0
                                        }), [3, 5];
                                    case 3:
                                        return i = r.sent(), this.logger.warn("Failed to connect League of Legends account.", i), this.setState({
                                            error: !0
                                        }), [3, 5];
                                    case 4:
                                        return this.setState({
                                            working: !1
                                        }), [7];
                                    case 5:
                                        return [2]
                                }
                            })
                        })
                    }, t.handleRegionSelect = function(e) {
                        t.setState({
                            region: e.currentTarget.value
                        })
                    }, t.handleSummonerNameChange = function(e) {
                        t.setState({
                            summonerName: e.currentTarget.value
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.getData()
                }, t.prototype.render = function() {
                    var e = Object(s.d)("League of Legends", "LeagueOfLegendsConnection"),
                        t = Object(s.d)("Show rank and live in-game information.", "LeagueOfLegendsConnection"),
                        n = Object(s.d)("By connecting your Riot [or, League of Legends] account, you agree to share with Twitch, and allow Twitch to make public, metadata regarding your user profile, gameplay history, and statistics associated with League of Legends. If you no longer want to share this information, please disconnect your accounts.", "LeagueOfLegendsConnection");
                    return a.createElement(O, {
                        image: a.createElement(k, {
                            type: i.LeagueOfLegends
                        }),
                        title: e,
                        subtitle: t,
                        body: this.renderBody(),
                        connected: this.state.connected,
                        onClick: this.state.connected ? this.disconnect : this.connect,
                        footer: n,
                        error: this.state.error,
                        working: this.state.working
                    })
                }, t.prototype.renderBody = function() {
                    var e = [{
                        label: Object(s.d)("North America", "LeagueOfLegendsConnection"),
                        value: X.NorthAmerica
                    }, {
                        label: Object(s.d)("Brazil", "LeagueOfLegendsConnection"),
                        value: X.Brazil
                    }, {
                        label: Object(s.d)("Europe West", "LeagueOfLegendsConnection"),
                        value: X.EuropeWest
                    }, {
                        label: Object(s.d)("Europe Nordic & East", "LeagueOfLegendsConnection"),
                        value: X.EuropeNordicAndEast
                    }, {
                        label: Object(s.d)("Japan", "LeagueOfLegendsConnection"),
                        value: X.Japan
                    }, {
                        label: Object(s.d)("Korea", "LeagueOfLegendsConnection"),
                        value: X.Korea
                    }, {
                        label: Object(s.d)("Latin America North", "LeagueOfLegendsConnection"),
                        value: X.LatinAmericaNorth
                    }, {
                        label: Object(s.d)("Latin America South", "LeagueOfLegendsConnection"),
                        value: X.LatinAmericaSouth
                    }, {
                        label: Object(s.d)("Oceanic", "LeagueOfLegendsConnection"),
                        value: X.Oceanic
                    }, {
                        label: Object(s.d)("Turkey", "LeagueOfLegendsConnection"),
                        value: X.Turkey
                    }, {
                        label: Object(s.d)("Russia", "LeagueOfLegendsConnection"),
                        value: X.Russia
                    }, {
                        label: Object(s.d)("Public Beta Environment", "LeagueOfLegendsConnection"),
                        value: X.PublicBetaEnvironment
                    }];
                    return a.createElement(C.Xa, {
                        className: "league-of-legends-connection__body",
                        "data-test-selector": "league-connection-body"
                    }, a.createElement(C.Xa, {
                        padding: {
                            bottom: 1
                        }
                    }, a.createElement(C.Xa, null, Object(s.d)("1. Log into your League of Legends account. Go to the verification section of your settings, and copy the following into the field: {code}", {
                        code: a.createElement(C.W, {
                            type: C.Tb.Span,
                            bold: !0
                        }, "ttv-" + this.props.userID)
                    }, "LeagueOfLegendsConnection")), a.createElement(C.Xa, null, Object(s.d)("2. Enter your summoner name below, select your region, and press the connect button to link your accounts! Note, you may need to wait up to 30 seconds for your changes to take effect.", "LeagueOfLegendsConnection"))), a.createElement(C.Xa, {
                        display: C.X.Flex
                    }, a.createElement(C.Xa, {
                        padding: {
                            right: 1
                        },
                        flexGrow: 1
                    }, a.createElement(C.Ra, {
                        type: C.Ta.Text,
                        placeholder: Object(s.d)("Enter Summoner Name", "LeagueOfLegendsConnection"),
                        value: this.state.summonerName,
                        onChange: this.handleSummonerNameChange
                    })), a.createElement(C.Xa, {
                        flexGrow: 1
                    }, a.createElement(C.xb, {
                        value: this.state.region,
                        onChange: this.handleRegionSelect
                    }, e.map(function(e) {
                        return a.createElement("option", {
                            key: e.value,
                            value: e.value
                        }, e.label)
                    })))))
                }, t
            }(a.Component);
            var Y = Object(b.connect)(function(e) {
                    var t = Object(R.e)(e);
                    return {
                        userID: t && t.id
                    }
                })(Q),
                K = n("UP6V"),
                $ = n("KXRf"),
                Z = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            error: !1,
                            working: !1
                        }, t.logger = s.k.withCategory("OtherConnection"), t.onClickDisconnect = function() {
                            return r.__awaiter(t, void 0, void 0, function() {
                                var e, t = this;
                                return r.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            this.setState({
                                                error: !1,
                                                working: !0
                                            }), n.label = 1;
                                        case 1:
                                            return n.trys.push([1, 3, , 4]), [4, Object(K.a)("https://id.twitch.tv/oauth2/authorization/" + this.props.clientID, {
                                                method: "DELETE"
                                            })];
                                        case 2:
                                            if (!n.sent().ok) throw new Error("Non-OK response from id.twitch.tv");
                                            return this.props.onClientAuthDisconnectSuccess(this.props.clientID), [3, 4];
                                        case 3:
                                            return e = n.sent(), this.logger.warn("OWL client auth disconnect failed.", {
                                                error: e
                                            }), this.setState({
                                                error: !0,
                                                working: !1
                                            }), [2];
                                        case 4:
                                            return this.props.ssoLinks && this.props.ssoLinks.forEach(function(e) {
                                                return r.__awaiter(t, void 0, void 0, function() {
                                                    var t, n;
                                                    return r.__generator(this, function(i) {
                                                        switch (i.label) {
                                                            case 0:
                                                                return e.app && e.ssoID ? (t = Object(f.a)({
                                                                    app: e.app,
                                                                    token: e.ssoID
                                                                }), [4, this.props.unlinkSSO(t)]) : [2];
                                                            case 1:
                                                                return n = i.sent(), n.data.unlinkSSO && n.data.unlinkSSO.links && n.data.unlinkSSO.links.length > 0 ? (this.props.onSSOLinkDisconnectSuccess(e.app), [2]) : (this.logger.warn("Failed to disconnect from " + e.app), [2])
                                                        }
                                                    })
                                                })
                                            }), [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(O, {
                            connected: !0,
                            error: this.state.error,
                            onClick: this.onClickDisconnect,
                            title: this.props.name,
                            subtitle: this.renderSubtitle(),
                            working: this.state.working
                        })
                    }, t.prototype.renderSubtitle = function() {
                        if (this.props.createdAt) return Object(s.d)("Connected {duration}", {
                            duration: Object(s.h)(new Date(this.props.createdAt))
                        }, "OtherConnection")
                    }, t
                }(a.Component),
                J = Object(o.compose)(Object(h.a)($, {
                    name: "unlinkSSO"
                }))(Z),
                ee = {
                    20094: ["platforms_test"],
                    47957: ["A5539EE", "0A5539EE"],
                    47835: ["3B16EEF3"],
                    47688: ["roku"],
                    73516: ["138F999E"],
                    61071: ["android_firetv"],
                    61072: ["android_androidtv"],
                    73517: ["0A9A589A"],
                    73519: ["298199F4"],
                    76896: ["xb360"],
                    30669: ["xb1", "1A63A07B"],
                    47687: ["ps4_app", "psn", "psn_dev", "psn_cert"]
                },
                te = n("IAbT"),
                ne = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.data.loading || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentDidUpdate = function() {
                        this.props.data.loading || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this;
                        if (!this.props.data.currentUser || !this.props.data.currentUser.clientAuthorizations) return this.props.data.loading ? a.createElement(C.gb, null) : this.renderEmptyState(!0);
                        var t = this.props.data.currentUser,
                            n = t.clientAuthorizations,
                            i = t.ssoLinks;
                        return 0 === n.length ? this.renderEmptyState(!1) : a.createElement(a.Fragment, null, n.map(function(t) {
                            var n = ee[t.clientID],
                                r = i && n ? i.filter(function(e) {
                                    return n.some(function(t) {
                                        return e.app === t
                                    })
                                }) : null;
                            return a.createElement(J, {
                                key: t.clientID,
                                clientID: t.clientID,
                                createdAt: t.createdAt,
                                name: t.clientName,
                                ssoLinks: r,
                                onClientAuthDisconnectSuccess: e.onClientAuthDisconnectSuccess,
                                onSSOLinkDisconnectSuccess: e.onSSOLinkDisconnectSuccess
                            })
                        }))
                    }, t.prototype.renderEmptyState = function(e) {
                        var t = e ? Object(s.d)("Sorry, we couldn't fetch your authorized apps right now. Try again later.", "OtherConnectionsList") : Object(s.d)("You have not authorized any apps.", "OtherConnectionsList");
                        return a.createElement(_.a, null, a.createElement(C.W, {
                            color: e ? C.O.Error : void 0
                        }, t))
                    }, t.prototype.onClientAuthDisconnectSuccess = function(e) {
                        Object(f.e)(te, {}, function(t) {
                            if (!t.currentUser || !t.currentUser.clientAuthorizations) return t;
                            var n = t.currentUser.clientAuthorizations.slice();
                            return n.splice(n.findIndex(function(t) {
                                return t.clientID === e
                            }), 1), {
                                currentUser: r.__assign({}, t.currentUser, {
                                    clientAuthorizations: n
                                })
                            }
                        })
                    }, t.prototype.onSSOLinkDisconnectSuccess = function(e) {
                        Object(f.e)(te, {}, function(t) {
                            if (!t.currentUser || !t.currentUser.ssoLinks) return t;
                            var n = t.currentUser.ssoLinks.filter(function(t) {
                                return t.app !== e
                            });
                            return {
                                currentUser: r.__assign({}, t.currentUser, {
                                    ssoLinks: n
                                })
                            }
                        })
                    }, t
                }(a.Component),
                ie = Object(o.compose)(Object(u.b)("OtherConnectionsList"), Object(h.a)(te))(ne),
                re = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            error: !1,
                            working: !1
                        }, t.logger = s.k.withCategory("PSNConnection"), t.handleClick = function() {
                            return r.__awaiter(t, void 0, void 0, function() {
                                var e, t;
                                return r.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            this.setState({
                                                error: !1,
                                                working: !0
                                            }), n.label = 1;
                                        case 1:
                                            return n.trys.push([1, 3, 4, 5]), [4, Promise.all([I.a.post("/api/platform/psn/disconnect"), I.a.post("/api/platform/psn_dev/disconnect"), I.a.post("/api/platform/psn_cert/disconnect")])];
                                        case 2:
                                            return e = n.sent(), e.every(function(e) {
                                                return !(!e.error && !e.requestError)
                                            }) ? (this.logger.warn("Failed to disconnect from PSN"), this.setState({
                                                error: !0
                                            })) : this.props.data && this.props.data.refetch(), [3, 5];
                                        case 3:
                                            return t = n.sent(), this.logger.warn("Failed to disconnect from PSN", t), this.setState({
                                                error: !0
                                            }), [3, 5];
                                        case 4:
                                            return this.setState({
                                                working: !1
                                            }), [7];
                                        case 5:
                                            return [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        if (!this.isUserConnected()) return null;
                        var e = Object(s.d)("PlayStation", "PSNConnectionPresentation"),
                            t = Object(s.d)("Log in on your PlayStation", "PSNConnectionPresentation");
                        return a.createElement(O, {
                            image: a.createElement(k, {
                                type: i.PSN
                            }),
                            title: e,
                            subtitle: t,
                            connected: !0,
                            onClick: this.handleClick,
                            error: this.state.error,
                            working: this.state.working
                        })
                    }, t.prototype.isUserConnected = function() {
                        return !!(this.props.data.currentUser && this.props.data.currentUser.ssoLinks && this.props.data.currentUser.ssoLinks[0] && this.props.data.currentUser.ssoLinks[0].app && this.props.data.currentUser.ssoLinks[0].ssoID)
                    }, t
                }(a.Component),
                ae = n("DA7M"),
                oe = Object(h.a)(ae)(re),
                se = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            error: !1,
                            working: !1
                        }, t.logger = s.k.withCategory("RokuConnection"), t.handleClick = function() {
                            return r.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, i, a;
                                return r.__generator(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            this.setState({
                                                error: !1,
                                                working: !0
                                            }), r.label = 1;
                                        case 1:
                                            return r.trys.push([1, 3, 4, 5]), e = "/api/roku/disconnect", [4, I.a.post(e)];
                                        case 2:
                                            return t = r.sent(), n = t.error, i = t.requestError, n || i ? (this.logger.warn("Failed to disconnect from Roku", {
                                                error: n,
                                                requestError: i
                                            }), this.setState({
                                                error: !0
                                            })) : this.props.data && this.props.data.refetch(), [3, 5];
                                        case 3:
                                            return a = r.sent(), this.logger.warn("Failed to disconnect from Roku", a), this.setState({
                                                error: !0
                                            }), [3, 5];
                                        case 4:
                                            return this.setState({
                                                working: !1
                                            }), [7];
                                        case 5:
                                            return [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        if (!this.isUserConnected()) return null;
                        var e = Object(s.d)("Roku", "RokuConnectionPresentation"),
                            t = Object(s.d)("Log in on your Roku", "RokuConnectionPresentation");
                        return a.createElement(O, {
                            image: a.createElement(k, {
                                type: i.Roku
                            }),
                            title: e,
                            subtitle: t,
                            connected: !0,
                            onClick: this.handleClick,
                            error: this.state.error,
                            working: this.state.working
                        })
                    }, t.prototype.isUserConnected = function() {
                        return !!(this.props.data && this.props.data.currentUser && this.props.data.currentUser.ssoLinks && this.props.data.currentUser.ssoLinks[0] && this.props.data.currentUser.ssoLinks[0].app && this.props.data.currentUser.ssoLinks[0].ssoID)
                    }, t
                }(a.Component),
                ce = n("lX8J"),
                le = Object(h.a)(ce)(se),
                de = n("SrOR"),
                ue = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            error: !1,
                            working: !1
                        }, t.logger = s.k.withCategory("SteamConnection"), t.handleClick = function() {
                            t.setState({
                                error: !1
                            }), t.connected ? t.disconnect() : t.connect()
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = Object(s.d)("Steam", "SteamConnectionComponent"),
                            t = Object(s.d)("Share your game meta data when you go live", "SteamConnectionComponent"),
                            n = Object(s.d)("By connecting your Steam account, you acknowledge and agree that your Steam ID will be publicly visible in the Twitch API and that Steam will automatically receive information about the Steam content you view while your accounts are connected. If you do not want this information shared, please disconnect your accounts.", "SteamConnectionComponent"),
                            r = this.props.data.loading;
                        return a.createElement(O, {
                            image: a.createElement(k, {
                                type: i.Steam
                            }),
                            title: e,
                            subtitle: t,
                            footer: n,
                            error: this.state.error,
                            connected: this.connected,
                            onClick: this.handleClick,
                            working: this.state.working || r
                        })
                    }, t.prototype.disconnect = function() {
                        return r.__awaiter(this, void 0, void 0, function() {
                            var e, t;
                            return r.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        if (!this.userID) return this.logger.debug("Unable to disconnect from steam - current user's ID is unknown."), [2];
                                        this.setState({
                                            working: !0
                                        }), n.label = 1;
                                    case 1:
                                        return n.trys.push([1, 3, 4, 5]), e = "/v5/steam/" + this.userID, [4, I.a.deleteOrThrow(e)];
                                    case 2:
                                        return n.sent(), this.removeConnectionInCache(), [3, 5];
                                    case 3:
                                        return t = n.sent(), this.logger.warn("Failed to disconnect from Steam", {
                                            error: t
                                        }), this.setState({
                                            error: !0
                                        }), [3, 5];
                                    case 4:
                                        return this.setState({
                                            working: !1
                                        }), [7];
                                    case 5:
                                        return [2]
                                }
                            })
                        })
                    }, t.prototype.connect = function() {
                        return r.__awaiter(this, void 0, void 0, function() {
                            var e, t, n, i = this;
                            return r.__generator(this, function(r) {
                                return this.userID ? (this.setState({
                                    working: !0
                                }), e = x.stringify({
                                    client_id: s.a.legacyClientID
                                }), t = s.a.apiBaseURL + "/v5/steam/" + this.userID + "/auth?" + e, (n = window.open(t, "steamPopout", "width=1024,height=780")) ? (Object(j.a)(n, function(e) {
                                    i.logger.debug("Steam connection window closed", {
                                        success: e
                                    }), i.setState({
                                        error: !e,
                                        working: !1
                                    }), e && i.props.data.refetch()
                                }), [2]) : (this.setState({
                                    working: !1,
                                    error: !0
                                }), [2])) : (this.logger.debug("Unable to start Steam connection - current user's ID is unknown."), [2])
                            })
                        })
                    }, t.prototype.removeConnectionInCache = function() {
                        Object(f.e)(de, {}, function(e) {
                            return e.currentUser && (e.currentUser.accountConnections.steam = null), e
                        })
                    }, Object.defineProperty(t.prototype, "userID", {
                        get: function() {
                            return this.props.data.currentUser && this.props.data.currentUser.id
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "connected", {
                        get: function() {
                            return !(!this.props.data.currentUser || !this.props.data.currentUser.accountConnections.steam)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(a.Component),
                me = Object(h.a)(de)(ue),
                pe = n("kFVF"),
                ge = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            error: !1,
                            working: !1
                        }, t.logger = s.k.withCategory("TwitterConnection"), t.handleClick = function() {
                            t.setState({
                                error: !1
                            }), t.connected ? t.disconnect() : t.connect()
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = Object(s.d)("Twitter", "TwitterConnection"),
                            t = Object(s.d)("Tweet your Channel Feed posts to your followers.", "TwitterConnection"),
                            n = Object(s.d)("By connecting your account with your Twitter account, you acknowledge and agree that information you choose to share will be uploaded to Twitter and may be viewed by Twitter and other Twitter users. Also, your Twitter account information may be used by Twitch. Twitch will not publicly display your Twitter account information. If you no longer want to share this information, please disconnect your Twitter account.", "TwitterConnection"),
                            r = this.props.data.loading;
                        return a.createElement(O, {
                            image: a.createElement(k, {
                                type: i.Twitter
                            }),
                            title: e,
                            subtitle: t,
                            footer: n,
                            error: this.state.error,
                            connected: this.connected,
                            working: this.state.working || r,
                            onClick: this.handleClick
                        })
                    }, t.prototype.connect = function() {
                        var e = this;
                        if (this.userID) {
                            this.setState({
                                working: !0
                            });
                            var t = s.a.apiBaseURL + "/v5/twitter/" + this.userID + "/auth",
                                n = window.open(t, "twitterPopout", "width=760,height=760");
                            n ? Object(j.a)(n, function(t) {
                                e.logger.debug("Twitter connection window closed", {
                                    success: t
                                }), e.setState({
                                    error: !t,
                                    working: !1
                                }), t && e.props.data.refetch()
                            }) : this.setState({
                                working: !1,
                                error: !0
                            })
                        } else this.logger.debug("Unable to start Twitter connection - current user's ID is unknown.")
                    }, t.prototype.disconnect = function() {
                        return r.__awaiter(this, void 0, void 0, function() {
                            var e, t;
                            return r.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        if (!this.userID) return this.logger.debug("Unable to disconnect from Twitter - current user's ID is unknown."), [2];
                                        this.setState({
                                            working: !0
                                        }), n.label = 1;
                                    case 1:
                                        return n.trys.push([1, 3, 4, 5]), e = "/v5/twitter/" + this.userID, [4, I.a.deleteOrThrow(e)];
                                    case 2:
                                        return n.sent(), this.removeConnectionInCache(), [3, 5];
                                    case 3:
                                        return t = n.sent(), this.logger.warn("Failed to disconnect from Twitter", {
                                            error: t
                                        }), this.setState({
                                            error: !0
                                        }), [3, 5];
                                    case 4:
                                        return this.setState({
                                            working: !1
                                        }), [7];
                                    case 5:
                                        return [2]
                                }
                            })
                        })
                    }, t.prototype.removeConnectionInCache = function() {
                        Object(f.e)(pe, {}, function(e) {
                            return e.currentUser && (e.currentUser.accountConnections.twitter = null), e
                        })
                    }, Object.defineProperty(t.prototype, "userID", {
                        get: function() {
                            return this.props.data.currentUser && this.props.data.currentUser.id
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "connected", {
                        get: function() {
                            return !(!this.props.data.currentUser || !this.props.data.currentUser.accountConnections.twitter)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(a.Component),
                he = Object(h.a)(pe)(ge),
                fe = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            error: !1
                        }, t.logger = s.k.withCategory("Xbox360Connection"), t.handleClick = function() {
                            return r.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, i, a, o;
                                return r.__generator(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            this.setState({
                                                error: !1
                                            }), r.label = 1;
                                        case 1:
                                            return r.trys.push([1, 3, , 4]), e = x.stringify({
                                                app: "xb360"
                                            }), t = "/api/xbox/disconnect?" + e, [4, I.a.post(t)];
                                        case 2:
                                            return n = r.sent(), i = n.error, a = n.requestError, i || a ? (this.logger.warn("Failed to disconnect from Xbox 360", {
                                                error: i,
                                                requestError: a
                                            }), this.setState({
                                                error: !0
                                            })) : this.props.data && this.props.data.refetch(), [3, 4];
                                        case 3:
                                            return o = r.sent(), this.logger.warn("Failed to disconnect from Xbox 360", o), this.setState({
                                                error: !0
                                            }), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        if (!this.isUserConnected()) return null;
                        var e = Object(s.d)("Xbox 360", "Xbox360ConnectionPresentation"),
                            t = Object(s.d)("Log in on your Xbox 360", "Xbox360ConnectionPresentation");
                        return a.createElement(O, {
                            image: a.createElement(k, {
                                type: i.Xbox
                            }),
                            title: e,
                            subtitle: t,
                            connected: !0,
                            onClick: this.handleClick,
                            error: this.state.error
                        })
                    }, t.prototype.isUserConnected = function() {
                        return !!(this.props.data.currentUser && this.props.data.currentUser.ssoLinks && this.props.data.currentUser.ssoLinks[0] && this.props.data.currentUser.ssoLinks[0].app && this.props.data.currentUser.ssoLinks[0].ssoID)
                    }, t
                }(a.Component),
                ve = n("vyBs"),
                ke = Object(h.a)(ve)(fe),
                be = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            error: !1,
                            working: !1
                        }, t.logger = s.k.withCategory("XboxOneConnection"), t.handleClick = function() {
                            return r.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, i, a, o;
                                return r.__generator(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            this.setState({
                                                error: !1,
                                                working: !0
                                            }), r.label = 1;
                                        case 1:
                                            return r.trys.push([1, 3, 4, 5]), e = x.stringify({
                                                app: "xb1"
                                            }), t = "/api/xbox/disconnect?" + e, [4, I.a.post(t)];
                                        case 2:
                                            return n = r.sent(), i = n.error, a = n.requestError, i || a ? (this.logger.warn("Failed to disconnect from Xbox One", {
                                                error: i,
                                                requestError: a
                                            }), this.setState({
                                                error: !0
                                            })) : this.props.data && this.props.data.refetch(), [3, 5];
                                        case 3:
                                            return o = r.sent(), this.logger.warn("Failed to disconnect from Xbox One", o), this.setState({
                                                error: !0
                                            }), [3, 5];
                                        case 4:
                                            return this.setState({
                                                working: !1
                                            }), [7];
                                        case 5:
                                            return [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        if (!this.isUserConnected()) return null;
                        var e = Object(s.d)("Xbox One", "XboxOneConnectionPresentation"),
                            t = Object(s.d)("Log in and Broadcast directly from your console", "XboxOneConnectionPresentation");
                        return a.createElement(O, {
                            image: a.createElement(k, {
                                type: i.Xbox
                            }),
                            title: e,
                            subtitle: t,
                            connected: !0,
                            onClick: this.handleClick,
                            error: this.state.error,
                            working: this.state.working
                        })
                    }, t.prototype.isUserConnected = function() {
                        return !!(this.props.data && this.props.data.currentUser && this.props.data.currentUser.ssoLinks && this.props.data.currentUser.ssoLinks[0] && this.props.data.currentUser.ssoLinks[0].app && this.props.data.currentUser.ssoLinks[0].ssoID)
                    }, t
                }(a.Component),
                Se = n("XoAB"),
                ye = Object(h.a)(Se)(be),
                Ce = n("xAZU"),
                we = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            error: !1,
                            working: !1
                        }, t.logger = s.k.withCategory("YoutubeConnection"), t.handleClick = function() {
                            t.setState({
                                error: !1
                            }), t.connected ? t.disconnect() : t.connect()
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = Object(s.d)("Youtube", "YoutubeConnectionComponent"),
                            t = Object(s.d)("Export archives", "YoutubeConnectionComponent"),
                            n = Object(s.d)("By connecting your account with your YouTube account, you acknowledge and agree that information you choose to share will be uploaded to YouTube and may be viewed by YouTube and other YouTube users. Also, your YouTube account information may be used by Twitch. Twitch will not publicly display your YouTube account information. If you no longer want to share this information, please disconnect your YouTube account.", "YoutubeConnectionComponent");
                        return a.createElement(O, {
                            image: a.createElement(k, {
                                type: i.Youtube
                            }),
                            title: e,
                            subtitle: t,
                            footer: n,
                            connected: this.connected,
                            error: this.state.error,
                            working: this.state.working || this.props.data.loading,
                            onClick: this.handleClick
                        })
                    }, Object.defineProperty(t.prototype, "connected", {
                        get: function() {
                            return !(!this.props.data.currentUser || !this.props.data.currentUser.accountConnections.youtube)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.connect = function() {
                        var e = this;
                        if (this.userID) {
                            this.setState({
                                working: !0
                            });
                            var t = s.a.apiBaseURL + "/v5/youtube/" + this.userID + "/auth",
                                n = window.open(t, "YoutubePopout", "width=768,height=640");
                            n ? Object(j.a)(n, function(t) {
                                e.logger.debug("Youtube connection window closed", {
                                    success: t
                                }), e.setState({
                                    error: !t,
                                    working: !1
                                }), t && e.props.data.refetch()
                            }) : this.setState({
                                working: !1,
                                error: !0
                            })
                        }
                    }, t.prototype.disconnect = function() {
                        return r.__awaiter(this, void 0, void 0, function() {
                            var e;
                            return r.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        if (!this.userID) return [2];
                                        this.setState({
                                            working: !0
                                        }), t.label = 1;
                                    case 1:
                                        return t.trys.push([1, 3, 4, 5]), [4, I.a.deleteOrThrow("/v5/youtube/" + this.userID)];
                                    case 2:
                                        return t.sent(), this.removeConnectionInCache(), [3, 5];
                                    case 3:
                                        return e = t.sent(), this.logger.warn("Failed to disconnect from youtube", {
                                            error: e
                                        }), this.setState({
                                            error: !0
                                        }), [3, 5];
                                    case 4:
                                        return this.setState({
                                            working: !1
                                        }), [7];
                                    case 5:
                                        return [2]
                                }
                            })
                        })
                    }, Object.defineProperty(t.prototype, "userID", {
                        get: function() {
                            return this.props.data.currentUser && this.props.data.currentUser.id
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.removeConnectionInCache = function() {
                        Object(f.e)(Ce, {}, function(e) {
                            return e.currentUser && (e.currentUser.accountConnections.youtube = null), e
                        })
                    }, t
                }(a.Component),
                Ne = Object(h.a)(Ce)(we),
                Ee = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(a.Fragment, null, a.createElement(p.a, {
                            title: Object(s.d)("Recommended Connections", "SettingsConnectionsPage"),
                            description: Object(s.d)("Manage your connected accounts and services", "SettingsConnectionsPage")
                        }), a.createElement(m.a, null, a.createElement(F, null), a.createElement(A, null), a.createElement(me, null), a.createElement(Ne, null), a.createElement(W, null), a.createElement(he, null), a.createElement(Y, null), a.createElement(ye, null), a.createElement(ke, null), a.createElement(oe, null), a.createElement(le, null)), a.createElement(p.a, {
                            title: Object(s.d)("Extensions Connections", "SettingsConnectionsPage"),
                            description: Object(s.d)("You have shared your Twitch username with these extensions", "SettingsConnectionsPage")
                        }), a.createElement(m.a, null, a.createElement(G, null)), a.createElement(p.a, {
                            title: Object(s.d)("Other Connections", "SettingsConnectionsPage"),
                            description: Object(s.d)("You have authorized these apps to use your Twitch account", "SettingsConnectionsPage")
                        }), a.createElement(m.a, null, a.createElement(ie, null)), a.createElement(p.a, {
                            title: Object(s.d)("Developer Applications", "SettingsConnectionsPage"),
                            description: Object(s.d)("Developer Application management has moved to {devPortalURL}", {
                                devPortalURL: a.createElement(C.U, {
                                    to: "https://dev.twitch.tv"
                                }, "https://dev.twitch.tv")
                            }, "SettingsConnectionsPage")
                        }))
                    }, t
                }(a.Component),
                _e = Object(o.compose)(Object(u.b)("SettingsConnectionsPage", {
                    autoReportInteractive: !0,
                    destination: l.a.SettingsConnections
                }), Object(c.a)({
                    location: d.PageviewLocation.SettingsPage
                }))(Ee);
            n.d(t, "SettingsConnectionsPageComponent", function() {
                return Ee
            }), n.d(t, "SettingsConnectionsPage", function() {
                return _e
            })
        },
        "t7x/": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "SmartNotificationSettings_User"
                    },
                    variableDefinitions: [],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
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
                                        value: "displayName"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
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
                                            name: {
                                                kind: "Name",
                                                value: "category"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
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
                                                    name: {
                                                        kind: "Name",
                                                        value: "platformName"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "settingState"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "isEnabled"
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
                    end: 155
                }
            };
            n.loc.source = {
                body: "query SmartNotificationSettings_User {\ncurrentUser {\nid\ndisplayName\nnotificationSettings {\ncategory\nplatforms {\nplatformName\nsettingState\nisEnabled\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        uDwM: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "Prime_LootPage_PrimeBannerOverrides"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "stringIds"
                            }
                        },
                        type: {
                            kind: "ListType",
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
                        }
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "dateOverride"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Time"
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
                                value: "primePromotions"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "ids"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "stringIds"
                                    }
                                }
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "dateOverride"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "dateOverride"
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
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "externalURL"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "isExternalLink"
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
                    end: 185
                }
            };
            n.loc.source = {
                body: "query Prime_LootPage_PrimeBannerOverrides($stringIds: [ID!] $dateOverride: Time) {\nprimePromotions (ids: $stringIds dateOverride: $dateOverride) {\nid\ntext\nexternalURL\nisExternalLink\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        vyBs: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "Settings_Connections_Xbox360Connection"
                    },
                    variableDefinitions: [],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
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
                                        value: "ssoLinks"
                                    },
                                    arguments: [{
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "app"
                                        },
                                        value: {
                                            kind: "StringValue",
                                            value: "xb360",
                                            block: !1
                                        }
                                    }],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "app"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "ssoID"
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
                    end: 104
                }
            };
            n.loc.source = {
                body: 'query Settings_Connections_Xbox360Connection {\ncurrentUser {\nid\nssoLinks(app: "xb360") {\napp\nssoID\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        x75U: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return l
            }), n.d(t, "b", function() {
                return d
            });
            var i = n("mrSG"),
                r = n("17x9"),
                a = n("q1tI"),
                o = n("2xye"),
                s = n("yI6f"),
                c = n("kRI/"),
                l = {
                    cardIDtoItemTrackingIDMap: r.object,
                    trackTitleClick: r.func,
                    trackTitleImpression: r.func,
                    trackImpression: r.func,
                    trackClick: r.func,
                    trackRecFeedbackHideClick: r.func,
                    trackRecFeedbackClickStep: r.func,
                    trackRecFeedbackClickStepPostSubmit: r.func
                };

            function d() {
                return function(e) {
                    return function(t) {
                        function n(e) {
                            var n = t.call(this, e) || this;
                            return n.feedbackDataMap = {}, n.getChildContext = function() {
                                return {
                                    trackTitleClick: n.trackTitleClick,
                                    trackTitleImpression: n.trackTitleImpression,
                                    trackRecFeedbackHideClick: n.trackRecFeedbackHideClick,
                                    trackRecFeedbackClickStep: n.trackRecFeedbackClickStep,
                                    trackRecFeedbackClickStepPostSubmit: n.trackRecFeedbackClickStepPostSubmit,
                                    trackImpression: n.trackImpression,
                                    trackClick: n.trackClick,
                                    cardIDtoItemTrackingIDMap: n.state.cardIDtoItemTrackingIDMap
                                }
                            }, n.mapShelfCardsToRequestIDs = function(e, t, n) {
                                return void 0 === n && (n = {}), e.reduce(function(e, n) {
                                    return n.node && !e[n.node.id] && (e[n.node.id] = t), e
                                }, n)
                            }, n.trackTitleImpression = function(e) {
                                var t = Object(s.g)(e.title),
                                    i = t.reasonType,
                                    r = t.reasonTarget,
                                    a = t.rowName,
                                    c = Object(s.f)(),
                                    l = {
                                        component: s.a.Header,
                                        contentEdge: null,
                                        itemTrackingID: c,
                                        itemPosition: null,
                                        reasonType: i,
                                        reasonTarget: r,
                                        reasonTargetType: null,
                                        requestID: n.props.requestID,
                                        rowName: a,
                                        rowPosition: n.props.position,
                                        tagID: null,
                                        filtered: !1,
                                        tagSet: "[]",
                                        tagStreamerSet: "[]"
                                    };
                                Object(s.i)(l, o.PageviewContent.HeaderGameName), n.setState({
                                    headerImpressionID: c
                                })
                            }, n.trackTitleClick = function() {
                                var e = n.props.shelf,
                                    t = Object(s.g)(e.title),
                                    i = t.reasonType,
                                    r = t.reasonTarget,
                                    a = t.reasonTargetType,
                                    c = t.rowName,
                                    l = {
                                        component: s.a.Header,
                                        contentEdge: null,
                                        itemTrackingID: n.state.headerImpressionID,
                                        requestID: n.state.headerRequestID,
                                        itemPosition: null,
                                        rowPosition: n.props.position,
                                        reasonType: i,
                                        reasonTarget: r,
                                        reasonTargetType: a,
                                        rowName: c,
                                        tagID: null,
                                        filtered: !1,
                                        tagSet: "[]",
                                        tagStreamerSet: "[]"
                                    };
                                Object(s.h)(l, o.PageviewContent.HeaderGameName)
                            }, n.trackImpression = function(e, t, i, r) {
                                if (t.node && !n.state.cardIDtoItemTrackingIDMap[t.node.id]) {
                                    var a = Object(s.f)(),
                                        o = Object(s.g)(e.title),
                                        c = o.reasonType,
                                        l = o.reasonTarget,
                                        d = o.reasonTargetType,
                                        u = o.rowName,
                                        m = {
                                            component: s.a.Card,
                                            contentEdge: t,
                                            itemTrackingID: a,
                                            itemPosition: i,
                                            reasonType: c,
                                            reasonTarget: l,
                                            reasonTargetType: d,
                                            requestID: n.state.cardIDtoRequestIDMap[t.node.id],
                                            rowName: u,
                                            rowPosition: n.props.position,
                                            tagID: null,
                                            filtered: !1,
                                            tagSet: JSON.stringify(r),
                                            tagStreamerSet: "[]"
                                        };
                                    Object(s.i)(m), n.setState(function(e) {
                                        var n = e.cardIDtoItemTrackingIDMap;
                                        return n[t.node.id] = a, {
                                            cardIDtoItemTrackingIDMap: n
                                        }
                                    })
                                }
                            }, n.trackClick = function(e, t, i, r, a, o) {
                                if (t.node) {
                                    var c = n.state,
                                        l = c.cardIDtoRequestIDMap,
                                        d = c.cardIDtoItemTrackingIDMap,
                                        u = Object(s.g)(e.title),
                                        m = u.reasonType,
                                        p = u.reasonTarget,
                                        g = u.reasonTargetType,
                                        h = u.rowName,
                                        f = {
                                            component: s.a.Card,
                                            contentEdge: t,
                                            itemTrackingID: d[t.node.id] || null,
                                            requestID: l[t.node.id],
                                            itemPosition: i,
                                            rowPosition: n.props.position,
                                            reasonType: m,
                                            reasonTarget: p,
                                            reasonTargetType: g,
                                            rowName: h,
                                            tagID: void 0 !== o ? o : null,
                                            filtered: !1,
                                            tagSet: JSON.stringify(a),
                                            tagStreamerSet: "[]"
                                        };
                                    Object(s.h)(f, r)
                                }
                            }, n.trackRecFeedbackHideClick = function(e, t, r) {
                                var a, o = n.state.cardIDtoItemTrackingIDMap,
                                    l = Object(s.g)(e.title),
                                    d = l.reasonType,
                                    u = l.reasonTarget,
                                    m = l.reasonTargetType,
                                    p = l.rowName,
                                    g = Object(s.e)(t),
                                    h = g.itemID,
                                    f = g.contentType,
                                    v = h || e.id,
                                    k = {
                                        itemTrackingID: t && t.node ? o[t.node.id] : null,
                                        itemPosition: r,
                                        rowPosition: n.props.position,
                                        reasonType: d,
                                        reasonTarget: u,
                                        reasonTargetType: m,
                                        rowName: p,
                                        modelTrackingID: t ? t.trackingID : null,
                                        clickedContentType: f || s.b.Shelf,
                                        clickedItemID: h || e.id
                                    };
                                n.feedbackDataMap = i.__assign({}, n.feedbackDataMap, ((a = {})[v] = k, a)), Object(c.c)(k)
                            }, n.trackRecFeedbackClickStep = function(e, t) {
                                var r, a = i.__assign({}, n.feedbackDataMap[e], {
                                    clickStep: t.clickStep,
                                    feedbackAction: t.feedbackAction,
                                    feedbackType: t.feedbackType,
                                    feedbackedItemID: t.feedbackedItemID,
                                    feedbackReason: t.feedbackReason
                                });
                                n.feedbackDataMap = i.__assign({}, n.feedbackDataMap, ((r = {})[e] = a, r)), Object(c.d)(a)
                            }, n.trackRecFeedbackClickStepPostSubmit = function(e, t) {
                                Object(c.d)(i.__assign({}, n.feedbackDataMap[e], {
                                    clickStep: c.a.PostSubmit,
                                    feedbackAction: t
                                }))
                            }, n.state = {
                                cardIDtoItemTrackingIDMap: {},
                                cardIDtoRequestIDMap: n.mapShelfCardsToRequestIDs(e.shelf.content.edges || [], e.requestID, {}),
                                headerImpressionID: null,
                                headerRequestID: e.requestID
                            }, n
                        }
                        return i.__extends(n, t), n.prototype.componentWillReceiveProps = function(e) {
                            var t = this,
                                n = e.shelf,
                                i = e.requestID;
                            n.content.edges !== this.props.shelf.content.edges && this.setState(function(e) {
                                return {
                                    cardIDtoRequestIDMap: t.mapShelfCardsToRequestIDs(n.content.edges || [], i, e.cardIDtoRequestIDMap)
                                }
                            })
                        }, n.prototype.render = function() {
                            var t = Object(s.g)(this.props.shelf.title).rowName,
                                n = {
                                    trackTitleClick: this.getChildContext().trackTitleClick,
                                    trackTitleImpression: this.getChildContext().trackTitleImpression,
                                    trackRecFeedbackHideClick: this.getChildContext().trackRecFeedbackHideClick,
                                    trackImpression: this.getChildContext().trackImpression,
                                    trackClick: this.getChildContext().trackClick,
                                    trackRecFeedbackClickStep: this.getChildContext().trackRecFeedbackClickStep,
                                    trackRecFeedbackClickStepPostSubmit: this.getChildContext().trackRecFeedbackClickStepPostSubmit,
                                    shelfTrackingProps: {
                                        item_tracking_id: this.state.headerImpressionID,
                                        item_position: null,
                                        row_name: t,
                                        row_position: this.props.position
                                    }
                                };
                            return a.createElement(e, i.__assign({}, this.props, n))
                        }, n.childContextTypes = l, n
                    }(a.Component)
                }
            }
        },
        xAZU: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "Settings_Connections_YoutubeConnection"
                    },
                    variableDefinitions: [],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
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
                                        value: "accountConnections"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "youtube"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "channelURL"
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
                    end: 113
                }
            };
            n.loc.source = {
                body: "query Settings_Connections_YoutubeConnection {\ncurrentUser {\nid\naccountConnections {\nyoutube {\nchannelURL\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        xedL: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = l(n("q1tI")),
                r = l(n("fhzG")),
                a = l(n("17x9")),
                o = l(n("1Whu")),
                s = l(n("TSYQ")),
                c = l(n("ZKCD"));

            function l(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var d = (0, r.default)({
                mixins: [c.default, o.default],
                propTypes: {
                    value: a.default.number.isRequired,
                    vertical: a.default.bool,
                    background: a.default.string
                },
                getDefaultProps: function() {
                    return {
                        value: 0,
                        vertical: !1,
                        background: ""
                    }
                },
                updatePosition: function(e, t, n) {
                    var i = void 0;
                    i = this.props.vertical ? (e.bottom - n) / e.height : (t - e.left) / e.width, this.props.onChange(this.getScaledValue(i))
                },
                getCss: function() {
                    return function(e, t, n) {
                        return t in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n, e
                    }({}, this.props.vertical ? "bottom" : "left", this.getPercentageValue(this.props.value))
                },
                render: function() {
                    var e = (0, s.default)("slider", this.props.vertical ? "vertical" : "horizontal"),
                        t = this.props.background;
                    return i.default.createElement("div", {
                        className: e,
                        onMouseDown: this.startUpdates,
                        onTouchStart: this.startUpdates
                    }, i.default.createElement("div", {
                        className: "track",
                        style: {
                            background: t
                        }
                    }), i.default.createElement("div", {
                        className: "pointer",
                        style: this.getCss()
                    }))
                }
            });
            t.default = d
        },
        xzzA: function(e, t, n) {
            "use strict";
            var i = Object.prototype.hasOwnProperty;

            function r(e, t) {
                return e === t ? 0 !== e || 0 !== t || 1 / e == 1 / t : e != e && t != t
            }
            e.exports = function(e, t) {
                if (r(e, t)) return !0;
                if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
                var n = Object.keys(e),
                    a = Object.keys(t);
                if (n.length !== a.length) return !1;
                for (var o = 0; o < n.length; o++)
                    if (!i.call(t, n[o]) || !r(e[n[o]], t[n[o]])) return !1;
                return !0
            }
        },
        yI6f: function(e, t, n) {
            "use strict";
            var i, r, a, o, s, c, l = n("/7QA"),
                d = n("f00E"),
                u = n("2xye"),
                m = n("3sMy"),
                p = function() {
                    return Object(d.b)().substring(0, 16)
                };
            ! function(e) {
                e.TwitchHome = "twitch_home", e.BrowseLiveChannels = "browse_livechannels", e.BrowseCategories = "browse_categories", e.BrowseInCategoryChannels = "browse_incategory_channels"
            }(r || (r = {})),
            function(e) {
                e.Live = "live", e.Clip = "clip", e.Vod = "vod", e.Game = "game", e.Shelf = "shelf"
            }(a || (a = {})),
            function(e) {
                e.Card = "card", e.Header = "header"
            }(o || (o = {})),
            function(e) {
                e.Followed = "followed", e.Watched = "watched", e.Popularity = "popularity", e.Personalized = "personalized"
            }(s || (s = {})),
            function(e) {
                e.Live = "recs_live", e.Vod = "recs_vod", e.Clip = "recs_clip"
            }(c || (c = {}));
            var g = ((i = {})[m.a.TopLiveChannels] = function(e) {
                return {
                    reasonType: s.Popularity,
                    reasonTarget: null,
                    reasonTargetType: a.Live,
                    rowName: e
                }
            }, i[m.a.TopGames] = function(e) {
                return {
                    reasonType: s.Popularity,
                    reasonTarget: null,
                    reasonTargetType: a.Game,
                    rowName: e
                }
            }, i[m.a.TopChannelsPlayingGame] = function(e, t) {
                return {
                    reasonType: s.Popularity,
                    reasonTarget: t.context && t.context.id || null,
                    reasonTargetType: a.Game,
                    rowName: e
                }
            }, i[m.a.TopLiveChannelsYouMayLike] = function(e) {
                return {
                    reasonType: s.Personalized,
                    reasonTarget: null,
                    reasonTargetType: a.Live,
                    rowName: e
                }
            }, i[m.a.TopGamesForYou] = function(e) {
                return {
                    reasonType: s.Personalized,
                    reasonTarget: null,
                    reasonTargetType: a.Game,
                    rowName: e
                }
            }, i[m.a.RecommendedBecauseYouWatchX] = function(e, t) {
                return {
                    reasonType: s.Watched,
                    reasonTarget: t.context && t.context.id || null,
                    reasonTargetType: a.Game,
                    rowName: e
                }
            }, i[m.a.RecommendedBecauseYouFollowX] = function(e, t) {
                return {
                    reasonType: s.Followed,
                    reasonTarget: t.context && t.context.id || null,
                    reasonTargetType: null,
                    rowName: e
                }
            }, i[m.a.GreatNewClipsYouMayHaveMissed] = function(e) {
                return {
                    reasonType: s.Popularity,
                    reasonTarget: null,
                    reasonTargetType: a.Clip,
                    rowName: e
                }
            }, i[m.a.TopNewVideosYouMayHaveMissed] = function(e) {
                return {
                    reasonType: s.Popularity,
                    reasonTarget: null,
                    reasonTargetType: a.Vod,
                    rowName: e
                }
            }, i);

            function h(e) {
                var t = e.key;
                return g[t] ? g[t](t, e) : {
                    reasonType: null,
                    reasonTarget: "",
                    reasonTargetType: null,
                    rowName: t
                }
            }

            function f(e, t) {
                var n = v(e.contentEdge),
                    i = n.itemID,
                    a = n.channelID,
                    o = n.category,
                    s = n.contentType;
                return {
                    component: e.component,
                    request_id: e.requestID,
                    section: r.TwitchHome,
                    model_tracking_id: e.contentEdge && e.contentEdge.trackingID,
                    item_tracking_id: e.itemTrackingID,
                    item_id: i,
                    channel_id: null === a ? null : Number(a),
                    item_position: e.itemPosition,
                    item_subsection: t || null,
                    item_page: u.PageviewMedium.TwitchHome,
                    row_position: e.rowPosition,
                    content_type: s,
                    reason_type: e.reasonType,
                    reason_target: e.reasonTarget,
                    reason_target_type: e.reasonTargetType,
                    row_name: e.rowName,
                    tag_set: e.tagSet,
                    tag_streamer_set: e.tagStreamerSet,
                    filtered: e.filtered,
                    category: o,
                    tag_id: e.tagID
                }
            }

            function v(e) {
                var t, n = null,
                    i = null,
                    r = null,
                    o = e && e.node && e.node.id || "";
                if (e) switch (e.node && e.node.__typename) {
                    case "Stream":
                        n = (t = e.node).broadcaster && t.broadcaster.id, i = a.Live, o = String(t.broadcaster && t.broadcaster.id), r = t.game ? t.game.id : null;
                        break;
                    case "Clip":
                        n = (t = e.node).broadcaster && t.broadcaster.id, i = a.Clip, r = t.game ? t.game.id : null;
                        break;
                    case "Video":
                        n = (t = e.node).owner && t.owner.id, i = a.Vod, r = t.game ? t.game.id : null;
                        break;
                    case "Game":
                        t = e.node, n = null, i = a.Game, r = t.id
                }
                return {
                    itemID: o,
                    channelID: n,
                    category: r,
                    contentType: i
                }
            }

            function k(e, t) {
                var n = f(e, t);
                l.o.track(u.SpadeEventType.ItemClick, n)
            }

            function b(e, t) {
                var n = f(e, t);
                l.o.track(u.SpadeEventType.ItemDisplay, n)
            }

            function S(e) {
                var t = {
                    endpoint: e.endpoint,
                    request_id: e.requestID,
                    section: e.section
                };
                l.o.track(u.SpadeEventType.RecRequestClient, t)
            }
            var y = n("x75U"),
                C = n("A65o");
            n.d(t, "f", function() {
                return p
            }), n.d(t, "c", function() {
                return r
            }), n.d(t, "b", function() {
                return a
            }), n.d(t, "a", function() {
                return o
            }), n.d(t, !1, function() {
                return s
            }), n.d(t, "d", function() {
                return c
            }), n.d(t, "g", function() {
                return h
            }), n.d(t, "e", function() {
                return v
            }), n.d(t, "h", function() {
                return k
            }), n.d(t, "i", function() {
                return b
            }), n.d(t, "j", function() {
                return S
            }), n.d(t, !1, function() {
                return y.a
            }), n.d(t, "k", function() {
                return y.b
            }), n.d(t, !1, function() {
                return C.a
            })
        },
        yXtP: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "Chat_UpdateChatColor"
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
                                    value: "UpdateChatColorInput"
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
                                value: "updateChatColor"
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
                                        value: "user"
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
                                                value: "chatColor"
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
                    end: 120
                }
            };
            n.loc.source = {
                body: "mutation Chat_UpdateChatColor($input: UpdateChatColorInput!){\nupdateChatColor(input: $input) {\nuser {\nid\nchatColor\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        ygQa: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            });
            var i = n("mrSG"),
                r = n("yR8l"),
                a = n("yXtP");

            function o() {
                var e = this;
                return Object(r.a)(a, {
                    props: function(t) {
                        return {
                            updateChatColorMutation: function(n) {
                                return i.__awaiter(e, void 0, void 0, function() {
                                    return i.__generator(this, function(e) {
                                        switch (e.label) {
                                            case 0:
                                                return t.mutate ? [4, t.mutate({
                                                    variables: {
                                                        input: {
                                                            color: n
                                                        }
                                                    }
                                                })] : [3, 2];
                                            case 1:
                                                return [2, e.sent().data];
                                            case 2:
                                                throw new Error("Update chat color mutation is not ready")
                                        }
                                    })
                                })
                            }
                        }
                    }
                })
            }
        },
        yqqX: function(e, t, n) {},
        ytS6: function(e, t, n) {}
    }
]);