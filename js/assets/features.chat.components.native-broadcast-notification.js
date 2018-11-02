(window.webpackJsonp = window.webpackJsonp || []).push([
    [189], {
        KSjr: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n("mrSG"),
                s = n("q1tI"),
                i = n("/7QA"),
                o = n("4rCz"),
                r = n("Ue10"),
                l = {
                    title: "Pokémon",
                    shortName: "Pokémon",
                    channels: {
                        twitchpresents: {
                            displayName: "TwitchPresents",
                            languageCode: "en"
                        },
                        twitchpresentsfr: {
                            displayName: "TwitchPresentsFR",
                            languageCode: "fr"
                        },
                        twitchpresentsde: {
                            displayName: "TwitchPresentsDE",
                            languageCode: "de"
                        },
                        twitchpresentses: {
                            displayName: "TwitchPresentsES",
                            languageCode: "es"
                        },
                        twitchpresentsit: {
                            displayName: "TwitchPresentsIT",
                            languageCode: "it"
                        },
                        twitchpresentspt: {
                            displayName: "TwitchPresentsPT",
                            languageCode: "pt-br"
                        }
                    }
                },
                c = [{
                    startDate: 15405768e5,
                    endDate: 15407784e5,
                    title: "Games Done Quick Express 2018",
                    shortName: "GDQx 2018",
                    channels: {
                        gamesdonequick: {
                            displayName: "GamesDoneQuick",
                            languageCode: "en"
                        },
                        japanese_restream: {
                            displayName: "japanese_restream",
                            languageCode: "ja"
                        },
                        speedrunsbrasil: {
                            displayName: "SpeedrunsBrasil",
                            languageCode: "pt-br"
                        }
                    }
                }, a.__assign({
                    startDate: 15353532e5,
                    endDate: 153855e7
                }, l), a.__assign({
                    startDate: 15428736e5,
                    endDate: 15437376e5
                }, l), a.__assign({
                    startDate: 15456384e5,
                    endDate: 15465024e5
                }, l), a.__assign({
                    startDate: 15512544e5,
                    endDate: 15573852e5
                }, l)],
                u = "nativeBroadcastNotifDismissed",
                d = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isClosed: !1
                        }, t.getChannelLinks = function(e) {
                            var n = o.b.get("native_broadcast_blacklist", []),
                                a = Object.keys(e.channels).filter(function(e) {
                                    return n.indexOf(e) < 0
                                });
                            return (a = a.filter(function(e) {
                                return e.toLowerCase() !== t.props.channelLogin.toLowerCase()
                            })).map(function(t) {
                                var n = e.channels[t].displayName || t,
                                    a = i.p.intl.resolveLocaleFromCode(e.channels[t].languageCode);
                                if (!a) return null;
                                var o = a.name + " (" + n + ")";
                                return s.createElement("li", {
                                    key: t
                                }, s.createElement(r.U, {
                                    className: "native-broadcast-notification__link",
                                    to: "/" + t,
                                    type: r.V.Overlay
                                }, o))
                            })
                        }, t.onDismiss = function() {
                            var e;
                            t.setState({
                                isClosed: !0
                            });
                            var n = a.__assign({}, i.m.get(u, {}), ((e = {})[t.props.channelLogin.toLowerCase()] = Date.now(), e));
                            i.m.set(u, n)
                        }, t.onExpire = function() {
                            t.setState({
                                isClosed: !0
                            })
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                        e.channelLogin.toLowerCase() !== this.props.channelLogin.toLowerCase() && this.setState({
                            isClosed: !1
                        })
                    }, t.prototype.render = function() {
                        if (this.state.isClosed) return null;
                        var e = this.eventForChannel();
                        if (!e) return null;
                        if (this.hasDismissedForEvent(e.startDate)) return null;
                        var t = this.getChannelLinks(e);
                        return t.length ? s.createElement(r.Cb, {
                            attachLeft: !0,
                            attachRight: !0,
                            attachTop: !0,
                            background: r.r.AccentAlt2,
                            color: r.O.Overlay,
                            padding: 1,
                            position: r.hb.Absolute
                        }, s.createElement(r.Xa, {
                            margin: {
                                bottom: 1
                            }
                        }, s.createElement(r.W, {
                            type: r.Tb.H4
                        }, e.title)), s.createElement(r.Xa, {
                            margin: {
                                bottom: 1
                            }
                        }, s.createElement(r.W, {
                            color: r.O.OverlayAlt
                        }, Object(i.d)("Want to watch {eventName} in your local language? Try one of these international broadcasts!", {
                            eventName: e.shortName
                        }, "NativeBroadcastNotification"))), s.createElement("ul", null, t), s.createElement(r.Xa, {
                            attachRight: !0,
                            attachTop: !0,
                            margin: 1,
                            position: r.hb.Absolute
                        }, s.createElement(r.A, {
                            ariaLabel: Object(i.d)("Close", "NativeBroadcastNotification"),
                            icon: r.rb.Close,
                            onClick: this.onDismiss,
                            overlay: !0,
                            size: r.B.Small,
                            "data-a-target": "native-broadcast-notification-close-button"
                        })), s.createElement(r.Xa, {
                            margin: {
                                top: .5
                            }
                        }, s.createElement(r.kb, {
                            animationDirection: r.lb.Down,
                            animationDuration: 30,
                            onAnimationEnd: this.onExpire,
                            size: r.mb.ExtraSmall
                        }))) : null
                    }, t.prototype.eventForChannel = function() {
                        var e = Date.now(),
                            t = this.props.channelLogin.toLowerCase();
                        return c.find(function(n) {
                            return !(e < n.startDate || e > n.endDate) && !!n.channels[t]
                        })
                    }, t.prototype.hasDismissedForEvent = function(e) {
                        var t = i.m.get(u, {})[this.props.channelLogin.toLowerCase()];
                        return !!t && t >= e
                    }, t
                }(s.Component);
            n.d(t, "CLOSE_BUTTON_SELECTOR", function() {
                return "native-broadcast-notification-close-button"
            }), n.d(t, "LOCAL_STORAGE_KEY", function() {
                return u
            }), n.d(t, "NativeBroadcastNotification", function() {
                return d
            })
        }
    }
]);