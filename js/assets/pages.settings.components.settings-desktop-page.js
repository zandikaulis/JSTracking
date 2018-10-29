(window.webpackJsonp = window.webpackJsonp || []).push([
    [138], {
        Rpd6: function(t, e, n) {
            "use strict";
            n.r(e);
            var s = n("mrSG"),
                i = n("q1tI"),
                r = n("/7QA"),
                a = n("ZDlU"),
                o = n("7PeK"),
                p = n("c0Zc"),
                l = n("Ww25"),
                c = n("EpBn"),
                u = n("Ue10"),
                d = n("Ideu"),
                g = function(t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.state = {
                            disabled: !1,
                            error: !1,
                            selectedValue: e.props.initialValue
                        }, e.appSettings = r.p.integrations.appSettings, e.onChange = function(t) {
                            return s.__awaiter(e, void 0, void 0, function() {
                                var e, n, i, r;
                                return s.__generator(this, function(s) {
                                    switch (s.label) {
                                        case 0:
                                            if (!this.appSettings || !this.appSettings.set) return [2];
                                            if (this.setState({
                                                    disabled: !0
                                                }), e = t.currentTarget.value, !Object.values(d.AppSettingsIntegrationCloseOption).includes(e)) return this.setState({
                                                error: !0,
                                                disabled: !1
                                            }), [2];
                                            s.label = 1;
                                        case 1:
                                            return s.trys.push([1, 3, , 4]), [4, this.appSettings.set({
                                                closeOption: e
                                            })];
                                        case 2:
                                            return n = s.sent(), i = n.settings.closeOption ? n.settings.closeOption.value : this.state.selectedValue, r = !n.settings.closeOption, this.setState({
                                                selectedValue: i,
                                                error: r,
                                                disabled: !1
                                            }), [3, 4];
                                        case 3:
                                            return s.sent(), this.setState({
                                                error: !0,
                                                disabled: !1
                                            }), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, e
                    }
                    return s.__extends(e, t), e.prototype.render = function() {
                        var t = this,
                            e = this.state.disabled || !this.appSettings || !this.appSettings.set,
                            n = [{
                                value: d.AppSettingsIntegrationCloseOption.Minimize,
                                label: Object(r.d)("Minimize Twitch", "DesktopSettingCloseOption"),
                                selected: this.state.selectedValue === d.AppSettingsIntegrationCloseOption.Minimize
                            }, {
                                value: d.AppSettingsIntegrationCloseOption.Hide,
                                label: Object(r.d)("Hide Twitch", "DesktopSettingCloseOption"),
                                selected: this.state.selectedValue === d.AppSettingsIntegrationCloseOption.Hide
                            }, {
                                value: d.AppSettingsIntegrationCloseOption.Close,
                                label: Object(r.d)("Exit Twitch", "DesktopSettingCloseOption"),
                                selected: this.state.selectedValue === d.AppSettingsIntegrationCloseOption.Close
                            }];
                        return i.createElement(c.a, {
                            orientation: u.Fa.Horizontal,
                            label: Object(r.d)("When I Close the App", "DesktopSettingCloseOption"),
                            error: this.state.error
                        }, i.createElement(u.Xa, {
                            display: u.X.Flex,
                            flexDirection: u.Aa.Row
                        }, n.map(function(n) {
                            var s = "desktop-close-option:" + n.label;
                            return i.createElement(u.Xa, {
                                key: s,
                                margin: {
                                    right: 2
                                },
                                display: u.X.Flex,
                                flexDirection: u.Aa.Row
                            }, i.createElement(u.nb, {
                                checked: n.selected,
                                value: n.value,
                                label: n.label,
                                name: "Desktop Close Option: " + n.value,
                                onChange: t.onChange,
                                disabled: e,
                                "data-test-selector": "desktop-close-option-radio:" + n.value
                            }))
                        })), i.createElement(l.a, {
                            text: Object(r.d)("What Twitch should do when you close its window.", "DesktopSettingCloseOption")
                        }))
                    }, e
                }(i.Component),
                h = n("fWal"),
                S = function(t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.state = {
                            checked: e.props.initialValue,
                            disabled: !1,
                            error: !1
                        }, e.appSettings = r.p.integrations.appSettings, e.onChanged = function(t) {
                            return s.__awaiter(e, void 0, void 0, function() {
                                var e, n, i, a;
                                return s.__generator(this, function(s) {
                                    switch (s.label) {
                                        case 0:
                                            if (this.setState({
                                                    disabled: !0,
                                                    error: !1
                                                }), !this.appSettings || !this.appSettings.set) return [3, 4];
                                            s.label = 1;
                                        case 1:
                                            return s.trys.push([1, 3, , 4]), [4, this.appSettings.set({
                                                isSoftwareMode: t
                                            })];
                                        case 2:
                                            return e = s.sent(), n = e.settings.isSoftwareMode ? e.settings.isSoftwareMode.value : this.state.checked, i = !e.settings.isSoftwareMode, this.setState({
                                                disabled: !1,
                                                checked: n,
                                                error: i
                                            }), [3, 4];
                                        case 3:
                                            return a = s.sent(), r.k.error(a, "Error settings Desktop startup preference"), this.setState({
                                                disabled: !1,
                                                error: !0
                                            }), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, e
                    }
                    return s.__extends(e, t), e.prototype.render = function() {
                        var t = this.state.disabled || !this.appSettings || !this.appSettings.set;
                        return i.createElement(h.a, {
                            id: "settings-desktop-page-software-mode",
                            label: Object(r.d)("Software Rendering Mode", "DesktopSettingSoftwareModeToggle"),
                            description: Object(r.d)("Run Twitch without GPU hardware acceleration", "DesktopSettingSoftwareModeToggle"),
                            checked: this.state.checked,
                            onChange: this.onChanged,
                            disabled: t,
                            error: this.state.error
                        })
                    }, e
                }(i.Component),
                f = function(t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.state = {
                            checked: e.props.initialValue,
                            disabled: !1,
                            error: !1
                        }, e.appSettings = r.p.integrations.appSettings, e.onChanged = function(t) {
                            return s.__awaiter(e, void 0, void 0, function() {
                                var e, n, i, a;
                                return s.__generator(this, function(s) {
                                    switch (s.label) {
                                        case 0:
                                            if (this.setState({
                                                    disabled: !0,
                                                    error: !1
                                                }), !this.appSettings || !this.appSettings.set) return [3, 4];
                                            s.label = 1;
                                        case 1:
                                            return s.trys.push([1, 3, , 4]), [4, this.appSettings.set({
                                                canLaunchAtStartup: t
                                            })];
                                        case 2:
                                            return e = s.sent(), n = e.settings.canLaunchAtStartup ? e.settings.canLaunchAtStartup.value : this.state.checked, i = !e.settings.canLaunchAtStartup, this.setState({
                                                disabled: !1,
                                                checked: n,
                                                error: i
                                            }), [3, 4];
                                        case 3:
                                            return a = s.sent(), r.k.error(a, "Error settings Desktop startup preference"), this.setState({
                                                disabled: !1,
                                                error: !0
                                            }), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, e
                    }
                    return s.__extends(e, t), e.prototype.render = function() {
                        var t = this.state.disabled || !this.appSettings || !this.appSettings.set;
                        return i.createElement(h.a, {
                            id: "settings-desktop-page-startup",
                            label: Object(r.d)("Run Twitch on Startup", "DesktopSettingStartupToggle"),
                            description: Object(r.d)("Have Twitch ready and waiting for you when your computer starts.", "DesktopSettingStartupToggle"),
                            checked: this.state.checked,
                            onChange: this.onChanged,
                            disabled: t,
                            error: this.state.error
                        })
                    }, e
                }(i.Component),
                b = function(t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.state = {}, e.getSettings = function() {
                            return s.__awaiter(e, void 0, void 0, function() {
                                var t;
                                return s.__generator(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            if (!r.p.integrations.appSettings || !r.p.integrations.appSettings.get) return [3, 4];
                                            e.label = 1;
                                        case 1:
                                            return e.trys.push([1, 3, , 4]), [4, r.p.integrations.appSettings.get()];
                                        case 2:
                                            return t = e.sent(), this.setState({
                                                settings: t.settings
                                            }), [3, 4];
                                        case 3:
                                            return e.sent(), this.setState({
                                                error: !0
                                            }), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, e
                    }
                    return s.__extends(e, t), e.prototype.componentDidMount = function() {
                        this.getSettings()
                    }, e.prototype.render = function() {
                        if (this.state.error) return i.createElement(a.a, {
                            message: Object(r.d)("There was an error retrieving Desktop Settings.", "SettingsDesktopPage")
                        });
                        if (!this.state.settings) return null;
                        var t = this.state.settings;
                        return i.createElement(i.Fragment, null, i.createElement(p.a, {
                            title: Object(r.d)("Preferences", "SettingsDesktopPage")
                        }), i.createElement(o.a, null, t.closeOption && i.createElement(g, {
                            initialValue: t.closeOption.value
                        }), t.canLaunchAtStartup && i.createElement(f, {
                            initialValue: t.canLaunchAtStartup.value
                        }), t.isSoftwareMode && i.createElement(S, {
                            initialValue: t.isSoftwareMode.value
                        })))
                    }, e
                }(i.Component);
            n.d(e, "SettingsDesktopPage", function() {
                return b
            })
        }
    }
]);