(window.webpackJsonp = window.webpackJsonp || []).push([
    [54], {
        "4Agi": function(t, e, r) {
            "use strict";
            r.r(e);
            var n = r("mrSG"),
                a = r("q1tI"),
                o = r("/7QA"),
                s = r("Ue10"),
                i = function(t) {
                    function e(e) {
                        var r = t.call(this, e) || this;
                        return r.state = {}, r
                    }
                    return n.__extends(e, t), e.prototype.componentDidMount = function() {
                        var t = this;
                        o.o.integrations.demo && (this.heartbeatUnsubscriber = o.o.integrations.demo.onPong(function(e) {
                            t.setState({
                                lastHeartbeat: e.lastPing
                            })
                        }))
                    }, e.prototype.componentWillUnmount = function() {
                        this.heartbeatUnsubscriber && this.heartbeatUnsubscriber()
                    }, e.prototype.render = function() {
                        return a.createElement(s.Va, null, this.renderLastHeartbeatTime())
                    }, e.prototype.renderLastHeartbeatTime = function() {
                        return this.state.lastHeartbeat ? Object(o.d)("Last Heartbeat: {startTime, time, medium}.", {
                            startTime: new Date(this.state.lastHeartbeat)
                        }, "DesklightHeartbeatTest") : Object(o.d)("No Heartbeat Available!", "DesklightHeartbeatTest")
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
                                            if (!o.o.integrations.demo) return [3, 4];
                                            e.label = 1;
                                        case 1:
                                            return e.trys.push([1, 3, , 4]), [4, o.o.integrations.demo.startPing()];
                                        case 2:
                                            return e.sent(), o.o.logger.debug("Successfully started heartbeat!"), [3, 4];
                                        case 3:
                                            return t = e.sent(), o.o.logger.error(t, "Unable to start heartbeat."), [3, 4];
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
                                            if (!o.o.integrations.demo) return [3, 4];
                                            e.label = 1;
                                        case 1:
                                            return e.trys.push([1, 3, , 4]), [4, o.o.integrations.demo.stopPing()];
                                        case 2:
                                            return e.sent(), o.o.logger.debug("Successfully stopped heartbeat!"), [3, 4];
                                        case 3:
                                            return t = e.sent(), o.o.logger.error(t, "Unable to stop heartbeat."), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, e
                    }
                    return n.__extends(e, t), e.prototype.render = function() {
                        return a.createElement(s.Va, {
                            padding: 3
                        }, a.createElement(s.Va, null, a.createElement(s.V, {
                            fontSize: s.Aa.Size2
                        }, Object(o.d)("Mods", "DesklightModsRootPage")), a.createElement(s.z, {
                            onClick: this.startHeartbeat
                        }, a.createElement(s.V, null, Object(o.d)("Start Heartbeat", "DesklightModsRootPage"))), a.createElement(s.z, {
                            onClick: this.stopHeartbeat
                        }, a.createElement(s.V, null, Object(o.d)("Stop Heartbeat", "DesklightModsRootPage")))), a.createElement(i, null))
                    }, e
                }(a.Component);
            r.d(e, "DesklightModsRootPage", function() {
                return u
            })
        }
    }
]);