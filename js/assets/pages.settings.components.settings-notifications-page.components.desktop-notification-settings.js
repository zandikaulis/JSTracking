(window.webpackJsonp = window.webpackJsonp || []).push([
    [148], {
        Frpv: function(t, e) {
            var i = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "DesktopNotificationSettings_User"
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
            i.loc.source = {
                body: "query DesktopNotificationSettings_User($id: ID!) {\nuser(id: $id) {\nprofileImageURL(width: 70)\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            t.exports = i
        },
        ZaEz: function(t, e, i) {
            "use strict";
            i.r(e);
            var n = i("mrSG"),
                s = i("q1tI"),
                a = i("/7QA"),
                o = i("ZDlU"),
                r = i("7PeK"),
                l = i("c0Zc"),
                c = i("Ww25"),
                d = i("EpBn"),
                u = i("Ue10"),
                p = function(t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.state = {
                            value: e.props.initialValue,
                            error: !1,
                            disabled: !1
                        }, e.getDisplayValue = function() {
                            if (e.props.displays && e.props.displays.length) {
                                if (!e.state.value) {
                                    var t = e.props.displays.find(function(t) {
                                        return t.isPrimary
                                    });
                                    return t ? t.id : void e.setState({
                                        error: !0
                                    })
                                }
                                return e.state.value
                            }
                            e.setState({
                                error: !0
                            })
                        }, e.renderToastDisplayOptions = function(t) {
                            return t.map(function(t) {
                                var e = Object(a.d)("{displayName} (Primary)", {
                                        displayName: t.name
                                    }, "DesktopNotificationSettingsDisplaySelect"),
                                    i = t.isPrimary ? e : t.name;
                                return s.createElement("option", {
                                    key: t.id,
                                    value: t.id
                                }, i)
                            })
                        }, e.onChangeToastDisplaySetting = function(t) {
                            return n.__awaiter(e, void 0, void 0, function() {
                                var e, i, s, o, r;
                                return n.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return a.p.integrations.notifications && a.p.integrations.notifications.setSettings ? (e = !1, i = this.state.value, this.setState({
                                                disabled: !0
                                            }), s = t.currentTarget.value, this.props.displays && this.props.displays.length && this.props.displays.find(function(t) {
                                                return t.id === s
                                            }) ? [3, 1] : (e = !0, [3, 4])) : [2];
                                        case 1:
                                            return n.trys.push([1, 3, , 4]), [4, a.p.integrations.notifications.setSettings({
                                                displayID: s
                                            })];
                                        case 2:
                                            return (o = n.sent()) && o.settings && o.settings.displayID ? i = o.settings.displayID.value : e = !0, [3, 4];
                                        case 3:
                                            return r = n.sent(), e = !0, a.k.error(r, "Unable to set notification display id."), [3, 4];
                                        case 4:
                                            return this.setState({
                                                value: i,
                                                error: e,
                                                disabled: !1
                                            }), [2]
                                    }
                                })
                            })
                        }, e
                    }
                    return n.__extends(e, t), e.prototype.render = function() {
                        return this.state.error ? s.createElement(o.a, {
                            message: Object(a.d)("There was an error setting the toast display setting.", "DesktopNotificationSettingsDisplaySelect")
                        }) : s.createElement(d.a, {
                            label: Object(a.d)("Toast Display", "DesktopNotificationSettingsDisplaySelect")
                        }, s.createElement(u.Ab, {
                            value: this.getDisplayValue(),
                            disabled: this.state.disabled,
                            onChange: this.onChangeToastDisplaySetting
                        }, this.renderToastDisplayOptions(this.props.displays)), s.createElement(c.a, {
                            text: Object(a.d)("Choose which monitor should display toasts.", "DesktopNotificationSettingsDisplaySelect")
                        }))
                    }, e
                }(s.Component),
                g = i("/MKj"),
                h = i("kRBY"),
                f = i("oJmH"),
                m = i("yR8l"),
                b = i("Frpv"),
                S = function(t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.state = {
                            checked: e.props.initialValue,
                            disabled: !1,
                            error: !1
                        }, e.onChangeShowToastSetting = function(t) {
                            return n.__awaiter(e, void 0, void 0, function() {
                                var e, i, s, o, r;
                                return n.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            if (!a.p.integrations.notifications || !a.p.integrations.notifications.setSettings) return [2];
                                            e = this.state.checked, i = this.state.error, this.setState({
                                                disabled: !0
                                            }), s = t.currentTarget.checked, n.label = 1;
                                        case 1:
                                            return n.trys.push([1, 3, , 4]), [4, a.p.integrations.notifications.setSettings({
                                                isEnabled: s
                                            })];
                                        case 2:
                                            return (o = n.sent()) && o.settings && o.settings.isEnabled ? e = o.settings.isEnabled.value : i = !0, [3, 4];
                                        case 3:
                                            return r = n.sent(), a.k.error(r, "Unable to change show toast setting."), i = !0, [3, 4];
                                        case 4:
                                            return this.setState({
                                                checked: e,
                                                disabled: !1,
                                                error: i
                                            }), [2]
                                    }
                                })
                            })
                        }, e.onClickShowTestToast = function() {
                            var t = e.props.data && e.props.data.user && e.props.data.user.profileImageURL ? e.props.data.user.profileImageURL : "https://static-cdn.jtvnw.net/emoticons/v1/425618/3.0";
                            a.p.integrations.notifications && a.p.integrations.notifications.send({
                                body_md: Object(a.d)("This is a test.", "DesktopNotificationSettingsEnabledToggle"),
                                thumbnail_url: t,
                                actions: [],
                                id: "test-toast",
                                created_at: Date.now(),
                                updated_at: Date.now(),
                                type: "testnotification",
                                read: !1
                            })
                        }, e
                    }
                    return n.__extends(e, t), e.prototype.render = function() {
                        return this.state.error ? s.createElement(o.a, {
                            message: Object(a.d)("There was an error setting the toast enabled setting.", "DesktopNotificationSettingsEnabledToggle")
                        }) : s.createElement(s.Fragment, null, s.createElement(d.a, {
                            label: Object(a.d)("Toasts", "DesktopNotificationSettingsEnabledToggle")
                        }, s.createElement(u.Ya, null, s.createElement(u.Yb, {
                            checked: this.state.checked,
                            disabled: this.state.disabled,
                            onChange: this.onChangeShowToastSetting
                        }), s.createElement(c.a, {
                            text: Object(a.d)("When I receive a notification, display an on-screen desktop alert.", "DesktopNotificationSettingsEnabledToggle")
                        }), s.createElement(u.Ya, {
                            margin: {
                                top: 1
                            }
                        }, s.createElement(u.z, {
                            onClick: this.onClickShowTestToast,
                            disabled: !this.state.checked || this.state.disabled
                        }, Object(a.d)("See Example", "DesktopNotificationSettingsEnabledToggle"))))))
                    }, e
                }(s.Component),
                v = Object(f.compose)(Object(m.a)(b, {
                    options: function(t) {
                        return {
                            variables: {
                                id: t.user && t.user.id
                            }
                        }
                    }
                }))(S);
            var k = Object(g.connect)(function(t) {
                    return {
                        user: Object(h.e)(t)
                    }
                })(v),
                y = i("fWal"),
                D = function(t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.state = {
                            checked: e.props.initialValue,
                            error: !1,
                            disabled: !1
                        }, e.onChangeShowInGameSetting = function(t) {
                            return n.__awaiter(e, void 0, void 0, function() {
                                var e, i, s, o;
                                return n.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            if (!a.p.integrations.notifications || !a.p.integrations.notifications.setSettings) return [2];
                                            e = this.state.checked, i = !1, this.setState({
                                                disabled: !0
                                            }), n.label = 1;
                                        case 1:
                                            return n.trys.push([1, 3, , 4]), [4, a.p.integrations.notifications.setSettings({
                                                hideInGame: t
                                            })];
                                        case 2:
                                            return (s = n.sent()) && s.settings && s.settings.hideInGame ? e = s.settings.hideInGame.value : i = !0, [3, 4];
                                        case 3:
                                            return o = n.sent(), a.k.error(o, "Unable to change notification hide-in-game setting."), i = !0, [3, 4];
                                        case 4:
                                            return this.setState({
                                                checked: e,
                                                disabled: !1,
                                                error: i
                                            }), [2]
                                    }
                                })
                            })
                        }, e
                    }
                    return n.__extends(e, t), e.prototype.render = function() {
                        return this.state.error ? s.createElement(o.a, {
                            message: Object(a.d)("There was an error setting the hide-in-game setting.", "DesktopNotificationSettingsHideInGameToggle")
                        }) : s.createElement(y.a, {
                            id: "desktop-notifications-hide-in-game-toggle",
                            label: Object(a.d)("Hide in Game", "DesktopNotificationSettingsHideInGameToggle"),
                            checked: this.state.checked,
                            disabled: this.state.disabled,
                            onChange: this.onChangeShowInGameSetting,
                            description: Object(a.d)("Hide toast notifications when I'm playing a game.", "DesktopNotificationSettingsHideInGameToggle")
                        })
                    }, e
                }(s.Component),
                E = i("Ideu"),
                w = function(t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.state = {
                            value: e.props.initialValue,
                            error: !1,
                            disabled: !1
                        }, e.onChangeToastPositionSetting = function(t) {
                            return n.__awaiter(e, void 0, void 0, function() {
                                var e, i, s, o, r;
                                return n.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return a.p.integrations.notifications && a.p.integrations.notifications.setSettings ? (e = this.state.value, i = !1, this.setState({
                                                disabled: !0
                                            }), s = t.currentTarget.value, Object.values(E.NotificationIntegrationPosition).includes(s) ? [3, 1] : (i = !0, [3, 4])) : [2];
                                        case 1:
                                            return n.trys.push([1, 3, , 4]), [4, a.p.integrations.notifications.setSettings({
                                                position: s
                                            })];
                                        case 2:
                                            return (o = n.sent()) && o.settings && o.settings.position ? e = o.settings.position.value : i = !0, [3, 4];
                                        case 3:
                                            return r = n.sent(), a.k.error(r, "Unable to change notification toast position setting."), i = !0, [3, 4];
                                        case 4:
                                            return this.setState({
                                                disabled: !1,
                                                error: i,
                                                value: e
                                            }), [2]
                                    }
                                })
                            })
                        }, e
                    }
                    return n.__extends(e, t), e.prototype.render = function() {
                        return this.state.error ? s.createElement(o.a, {
                            message: Object(a.d)("There was an error setting the toast position setting.", "DesktopNotificationSettingsPositionSelect")
                        }) : s.createElement(d.a, {
                            label: Object(a.d)("Toast Position", "DesktopNotificationSettingsPositionSelect")
                        }, s.createElement(u.Ab, {
                            value: this.state.value,
                            disabled: this.state.disabled,
                            onChange: this.onChangeToastPositionSetting
                        }, s.createElement("option", {
                            value: "bottom-right"
                        }, Object(a.d)("Bottom Right", "DesktopNotificationSettingsPositionSelect")), s.createElement("option", {
                            value: "bottom-left"
                        }, Object(a.d)("Bottom Left", "DesktopNotificationSettingsPositionSelect")), s.createElement("option", {
                            value: "top-right"
                        }, Object(a.d)("Top Right", "DesktopNotificationSettingsPositionSelect")), s.createElement("option", {
                            value: "top-left"
                        }, Object(a.d)("Top Left", "DesktopNotificationSettingsPositionSelect"))), s.createElement(c.a, {
                            text: Object(a.d)("Choose which corner should display toasts.", "DesktopNotificationSettingsPositionSelect")
                        }))
                    }, e
                }(s.Component),
                N = function(t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.state = {}, e.getDisplays = function() {
                            return n.__awaiter(e, void 0, void 0, function() {
                                var t, e;
                                return n.__generator(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            if (!a.p.integrations.display || !a.p.integrations.display.getAll) return [2];
                                            i.label = 1;
                                        case 1:
                                            return i.trys.push([1, 3, , 4]), [4, a.p.integrations.display.getAll()];
                                        case 2:
                                            return t = i.sent(), this.setState({
                                                displays: t.displays
                                            }), [3, 4];
                                        case 3:
                                            return e = i.sent(), this.setState({
                                                error: !0
                                            }), a.k.error(e, "Unable to get displays"), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, e.getSettings = function() {
                            return n.__awaiter(e, void 0, void 0, function() {
                                var t, e;
                                return n.__generator(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            if (!a.p.integrations.notifications || !a.p.integrations.notifications.getSettings) return [2];
                                            i.label = 1;
                                        case 1:
                                            return i.trys.push([1, 3, , 4]), [4, a.p.integrations.notifications.getSettings()];
                                        case 2:
                                            return t = i.sent(), this.setState({
                                                settings: t.settings
                                            }), [3, 4];
                                        case 3:
                                            return e = i.sent(), this.setState({
                                                error: !0
                                            }), a.k.error(e, "Unable to get desktop notification settings"), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, e
                    }
                    return n.__extends(e, t), e.prototype.componentDidMount = function() {
                        this.getSettings(), this.getDisplays()
                    }, e.prototype.render = function() {
                        if (this.state.error) return s.createElement(o.a, {
                            message: Object(a.d)("There was an error retrieving Desktop Notification Settings.", "DesktopNotificationSettings")
                        });
                        if (!this.state.settings) return null;
                        var t = this.state,
                            e = t.settings,
                            i = t.displays;
                        return s.createElement(u.Ya, {
                            margin: {
                                top: 2
                            }
                        }, s.createElement(l.a, {
                            title: Object(a.d)("Desktop Settings", "DesktopNotificationSettings"),
                            description: Object(a.d)("Choose how you would like notifications to display on desktop.", "DesktopNotificationSettings")
                        }), s.createElement(r.a, null, e.isEnabled && s.createElement(k, {
                            initialValue: e.isEnabled.value
                        }), e.hideInGame && s.createElement(D, {
                            initialValue: e.hideInGame.value
                        }), e.position && s.createElement(w, {
                            initialValue: e.position.value
                        }), e.displayID && i && s.createElement(p, {
                            initialValue: e.displayID.value,
                            displays: i
                        })))
                    }, e
                }(s.Component);
            i.d(e, "DesktopNotificationSettings", function() {
                return N
            })
        }
    }
]);