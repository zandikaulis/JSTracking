(window.webpackJsonp = window.webpackJsonp || []).push([
    [54], {
        "4Agi": function(t, e, r) {
            "use strict";
            r.r(e);
            var n = r("mrSG"),
                a = r("q1tI"),
                s = r("/7QA"),
                o = r("Ue10"),
                i = function(t) {
                    function e(e) {
                        var r = t.call(this, e) || this;
                        return r.state = {}, r
                    }
                    return n.__extends(e, t), e.prototype.componentDidMount = function() {
                        var t = this;
                        s.p.integrations.demo && (this.heartbeatUnsubscriber = s.p.integrations.demo.onPong(function(e) {
                            t.setState({
                                lastHeartbeat: e.lastPing
                            })
                        }))
                    }, e.prototype.componentWillUnmount = function() {
                        this.heartbeatUnsubscriber && this.heartbeatUnsubscriber()
                    }, e.prototype.render = function() {
                        return a.createElement(o.Xa, null, this.renderLastHeartbeatTime())
                    }, e.prototype.renderLastHeartbeatTime = function() {
                        return this.state.lastHeartbeat ? Object(s.d)("Last Heartbeat: {startTime, time, medium}.", {
                            startTime: new Date(this.state.lastHeartbeat)
                        }, "DesklightHeartbeatTest") : Object(s.d)("No Heartbeat Available!", "DesklightHeartbeatTest")
                    }, e
                }(a.Component),
                u = function(t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.startHeartbeat = function() {
                            return n.__awaiter(e, void 0, void 0, function() {
                                var t;
                                return n.__generator(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            if (!s.p.integrations.demo) return [3, 4];
                                            e.label = 1;
                                        case 1:
                                            return e.trys.push([1, 3, , 4]), [4, s.p.integrations.demo.startPing()];
                                        case 2:
                                            return e.sent(), s.p.logger.debug("Successfully started heartbeat!"), [3, 4];
                                        case 3:
                                            return t = e.sent(), s.p.logger.error(t, "Unable to start heartbeat."), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, e.stopHeartbeat = function() {
                            return n.__awaiter(e, void 0, void 0, function() {
                                var t;
                                return n.__generator(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            if (!s.p.integrations.demo) return [3, 4];
                                            e.label = 1;
                                        case 1:
                                            return e.trys.push([1, 3, , 4]), [4, s.p.integrations.demo.stopPing()];
                                        case 2:
                                            return e.sent(), s.p.logger.debug("Successfully stopped heartbeat!"), [3, 4];
                                        case 3:
                                            return t = e.sent(), s.p.logger.error(t, "Unable to stop heartbeat."), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, e
                    }
                    return n.__extends(e, t), e.prototype.render = function() {
                        return a.createElement(o.Xa, {
                            padding: 3
                        }, a.createElement(o.Xa, null, a.createElement(o.W, {
                            fontSize: o.Ca.Size2
                        }, Object(s.d)("Mods", "DesklightModsRootPage")), a.createElement(o.z, {
                            onClick: this.startHeartbeat
                        }, a.createElement(o.W, null, Object(s.d)("Start Heartbeat", "DesklightModsRootPage"))), a.createElement(o.z, {
                            onClick: this.stopHeartbeat
                        }, a.createElement(o.W, null, Object(s.d)("Stop Heartbeat", "DesklightModsRootPage")))), a.createElement(i, null))
                    }, e
                }(a.Component);
            r.d(e, "DesklightModsRootPage", function() {
                return u
            })
        }
    }
]);