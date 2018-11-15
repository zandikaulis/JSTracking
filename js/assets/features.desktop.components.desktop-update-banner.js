(window.webpackJsonp = window.webpackJsonp || []).push([
    [71], {
        "9SZe": function(e, t, a) {
            "use strict";
            a.r(t);
            var s = a("mrSG"),
                r = a("q1tI"),
                n = a("/7QA"),
                i = a("Ue10"),
                o = a("Ideu"),
                p = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {}, t.onUpdateStatusChanged = function(e) {
                            var a = !e.userRequested && t.state.userDismissed;
                            t.setState({
                                updateMessage: e,
                                userDismissed: a
                            })
                        }, t.onCloseButtonClicked = function() {
                            t.setState({
                                userDismissed: !0
                            })
                        }, t.onUpdateNowClicked = function() {
                            return s.__awaiter(t, void 0, void 0, function() {
                                var e, t;
                                return s.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            if (!this.props.release.updateApp) return [2];
                                            this.setState({
                                                userStartedUpdate: !0
                                            }), a.label = 1;
                                        case 1:
                                            return a.trys.push([1, 3, , 4]), [4, this.props.release.updateApp()];
                                        case 2:
                                            return e = a.sent(), this.setState({
                                                userStartedUpdate: !1,
                                                updateMessage: e
                                            }), [3, 4];
                                        case 3:
                                            return t = a.sent(), n.k.error(t, "Error updating Desktop App"), this.setState({
                                                userStartedUpdate: !1
                                            }), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, t.onUpdateCheckFailedClick = function() {
                            return s.__awaiter(t, void 0, void 0, function() {
                                var e;
                                return s.__generator(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            if (!this.props.release.checkForUpdates) return [2];
                                            this.setState({
                                                checkingForUpdates: !0
                                            }), t.label = 1;
                                        case 1:
                                            return t.trys.push([1, 3, , 4]), [4, this.props.release.checkForUpdates()];
                                        case 2:
                                            return t.sent(), [3, 4];
                                        case 3:
                                            return e = t.sent(), n.k.error(e, "Error checking for Desktop updates"), [3, 4];
                                        case 4:
                                            return this.setState({
                                                checkingForUpdates: !1
                                            }), [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return s.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.release.onUpdateStatusChanged && (this.updateStatusUnsubscriber = this.props.release.onUpdateStatusChanged(this.onUpdateStatusChanged))
                    }, t.prototype.componentWillUnmount = function() {
                        this.updateStatusUnsubscriber && this.updateStatusUnsubscriber()
                    }, t.prototype.render = function() {
                        if (this.state.userDismissed || !this.state.updateMessage || this.state.updateMessage.status === o.ReleaseIntegrationUpdateStatus.UpToDate || this.state.updateMessage.status === o.ReleaseIntegrationUpdateStatus.Updating || !this.props.release.onUpdateStatusChanged) return null;
                        var e = this.state.updateMessage,
                            t = !1,
                            a = i.c.Info,
                            s = Object(n.d)("Update Available", "DesktopUpdateBanner"),
                            p = Object(n.d)("Grab the latest version of Twitch!", "DesktopUpdateBanner"),
                            d = Object(n.d)("Update Now", "Desktop Update Banner"),
                            u = this.onUpdateNowClicked;
                        return e.status === o.ReleaseIntegrationUpdateStatus.UpdateFailed && (t = !0, a = i.c.Error, s = Object(n.d)("Update Failed", "DesktopUpdateBanner"), p = Object(n.d)("There was an error updating.", "DesktopUpdateBanner"), d = Object(n.d)("Try Again", "Desktop Update Banner")), e.userRequested && e.status === o.ReleaseIntegrationUpdateStatus.UpdateCheckFailed && (t = !0, a = i.c.Error, s = Object(n.d)("Update Check Failed", "DesktopUpdateBanner"), p = Object(n.d)("There was an error checking for updates.", "DesktopUpdateBanner"), d = Object(n.d)("Try Again", "DesktopUpdateBanner"), u = this.onUpdateCheckFailedClick), e.status === o.ReleaseIntegrationUpdateStatus.UpdateAvailable && (t = !0), t ? r.createElement(i.b, {
                            type: a,
                            status: s,
                            message: p,
                            closeButtonAriaLabel: Object(n.d)("Dismiss Update Notification", "DesktopUpdateBanner"),
                            onCloseButtonClick: this.onCloseButtonClicked,
                            actions: [{
                                children: d,
                                onClick: u,
                                disabled: this.state.userStartedUpdate,
                                state: this.state.checkingForUpdates ? i.E.Loading : i.E.Default
                            }]
                        }) : null
                    }, t
                }(r.Component);
            a.d(t, "DesktopUpdateBanner", function() {
                return p
            })
        }
    }
]);