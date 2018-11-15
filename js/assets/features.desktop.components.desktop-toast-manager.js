(window.webpackJsonp = window.webpackJsonp || []).push([
    [81], {
        Gm8u: function(t, n, o) {
            "use strict";
            o.r(n);
            var i, e = o("mrSG"),
                a = o("q1tI"),
                r = o("/7QA"),
                s = o("GnwI"),
                c = o("wPxM"),
                p = o("Ideu");
            ! function(t) {
                t.Streamup = "streamup"
            }(i || (i = {}));
            var f = function(t) {
                function n() {
                    var n = null !== t && t.apply(this, arguments) || this;
                    return n.state = {
                        notifications: []
                    }, n.convertOnsiteNotificationPayloadToIntegrationModel = function(t) {
                        return e.__assign({}, t, {
                            created_at: Date.parse(t.created_at),
                            updated_at: Date.now(),
                            actions: n.getActions(t)
                        })
                    }, n.getActions = function(t) {
                        switch (t.type) {
                            case i.Streamup:
                                return [{
                                    id: "onsite-" + t.type + "-body",
                                    type: p.NotificationsIntegrationNotificationActionType.Body
                                }, {
                                    id: "onsite-" + t.type + "-close",
                                    type: p.NotificationsIntegrationNotificationActionType.Close
                                }];
                            default:
                                return [{
                                    id: "onsite-" + t.type + "-close",
                                    type: p.NotificationsIntegrationNotificationActionType.Close
                                }]
                        }
                    }, n.sendToPlatform = function(t, o) {
                        if (r.p.integrations.notifications && n.shouldShowOnPlatform(t.type)) {
                            var i = n.convertOnsiteNotificationPayloadToIntegrationModel(t);
                            o && t.updated_at !== o.data.notification.updated_at ? r.p.integrations.notifications.update(i) : r.p.integrations.notifications.send(i)
                        }
                    }, n.onNotificationInteracted = function(t) {
                        var o = /onsite-(\w+)-(\w+)/.exec(t.actionID);
                        if (o && !(o.length < 3)) {
                            var e = n.props.notifications.findIndex(function(n) {
                                return n.id === t.notificationID
                            });
                            if (!(e < 0)) {
                                var a = n.props.notifications[e] && n.props.notifications[e].actions && n.props.notifications[e].actions.length > 0 ? n.props.notifications[e].actions[0].url : null;
                                switch (n.props.onView(e), o[1]) {
                                    case i.Streamup:
                                        "body" === o[2] && a && r.p.history.push(a.substr(a.lastIndexOf("/")))
                                }
                            }
                        }
                    }, n
                }
                return e.__extends(n, t), n.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive(), r.p.integrations.notifications && r.p.integrations.notifications.onNotificationInteracted(this.onNotificationInteracted)
                }, n.prototype.componentWillReceiveProps = function(t) {
                    var n = this.props.info,
                        o = t.info;
                    o && Object(c.a)(o, n) && this.sendToPlatform(o.data.notification, n)
                }, n.prototype.render = function() {
                    return null
                }, n.prototype.shouldShowOnPlatform = function(t) {
                    return Object.values(i).some(function(n) {
                        return n === t
                    })
                }, n = e.__decorate([Object(s.b)("OnsiteNotificationDesktopToastManager")], n)
            }(a.Component);
            o.d(n, "DesktopToastManager", function() {
                return f
            })
        }
    }
]);