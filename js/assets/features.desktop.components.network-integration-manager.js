(window.webpackJsonp = window.webpackJsonp || []).push([
    [70], {
        bpy9: function(t, n, e) {
            "use strict";
            e.r(n);
            var o = e("mrSG"),
                i = e("B9ku"),
                s = e.n(i),
                r = e("q1tI"),
                a = e("/7QA"),
                c = e("Ue10"),
                u = e("Ideu"),
                d = function(t) {
                    function n(n) {
                        var e = t.call(this, n) || this;
                        return e.onDismissed = function() {
                            e.setState({
                                wasDismissed: !0
                            })
                        }, e.onConnectionChanged = function(t) {
                            var n = e.state.wasDismissed;
                            switch (t.status) {
                                case u.NetworkIntegrationConnectionStatus.NetworkDisconnected:
                                    a.k.warn("Network connection has been lost.");
                                    break;
                                case u.NetworkIntegrationConnectionStatus.WebsiteUnreachable:
                                    a.k.warn("Network is connected but website is unreachable.");
                                    break;
                                default:
                                    a.k.info("Network conection has been restored"), n = !1
                            }
                            e.setState({
                                currentStatus: t.status,
                                wasDismissed: n
                            })
                        }, e.onConnected = function() {
                            a.p.integrations.network && a.p.integrations.network.updateStatus({
                                status: u.NetworkIntegrationConnectionStatus.Online
                            })
                        }, e.onDisconnected = function() {
                            a.p.integrations.network && a.p.integrations.network.updateStatus({
                                status: u.NetworkIntegrationConnectionStatus.WebsiteUnreachable
                            })
                        }, e.pubsubDriver = s.a.getInstance(a.a.pubsubEnvironment), e.state = {
                            currentStatus: navigator.onLine ? u.NetworkIntegrationConnectionStatus.Online : u.NetworkIntegrationConnectionStatus.NetworkDisconnected,
                            wasDismissed: !1
                        }, e
                    }
                    return o.__extends(n, t), n.prototype.componentDidMount = function() {
                        var t = this;
                        a.p.integrations.network && (this.connectionChangedUnsubscriber = a.p.integrations.network.onConnectionChanged(this.onConnectionChanged), this.pubsubDriver.on("connected", this.onConnected), this.pubsubDriver.on("reconnected", this.onConnected), this.pubsubDriver.on("disconnected", this.onDisconnected), this.pubsubDriver._clientReady || (this.initialWebsocketCheckTimeout = setTimeout(function() {
                            t.pubsubDriver._clientReady || a.p.integrations.network.updateStatus({
                                status: u.NetworkIntegrationConnectionStatus.WebsiteUnreachable
                            })
                        }, 15e3)))
                    }, n.prototype.componentWillUnmount = function() {
                        this.connectionChangedUnsubscriber && this.connectionChangedUnsubscriber(), clearTimeout(this.initialWebsocketCheckTimeout), this.pubsubDriver.off("connected", this.onConnected), this.pubsubDriver.off("reconnected", this.onConnected), this.pubsubDriver.off("disconnected", this.onDisconnected)
                    }, n.prototype.render = function() {
                        if (this.state.wasDismissed || !this.state.currentStatus || this.state.currentStatus === u.NetworkIntegrationConnectionStatus.Online) return null;
                        var t = Object(a.d)("Network Disconnected", "NetworkIntegrationManager"),
                            n = Object(a.d)("Check your connection and try again.", "NetworkIntegrationManager"),
                            e = Object(a.d)("Twitch Unreachable", "NetworkIntegrationManager"),
                            o = Object(a.d)("We can’t talk to Twitch! Check your internet connection and try again.", "NetworkIntegrationManager"),
                            i = this.state.currentStatus === u.NetworkIntegrationConnectionStatus.NetworkDisconnected,
                            s = i ? t : e,
                            d = i ? n : o;
                        return r.createElement(c.b, {
                            type: c.c.Warning,
                            status: s,
                            message: d,
                            link: {
                                text: Object(a.d)("Get Help", "NetworkIntegrationManager"),
                                linkTo: "https://help.twitch.tv"
                            },
                            closeButtonAriaLabel: Object(a.d)("Dismiss Network Connection Notification", "NetworkIntegrationManager"),
                            onCloseButtonClick: this.onDismissed
                        })
                    }, n
                }(r.Component);
            e.d(n, "NetworkIntegrationManager", function() {
                return d
            })
        }
    }
]);