(window.webpackJsonp = window.webpackJsonp || []).push([
    [176], {
        KSjr: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a("mrSG"),
                o = a("q1tI"),
                i = a("/7QA"),
                s = a("4rCz"),
                r = a("Ue10"),
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
                    startDate: 1533375e6,
                    endDate: 15359436e5,
                    title: "PUBG Broadcaster Royale",
                    shortName: "PUBG Broadcaster Royale",
                    channels: {
                        broadcasterroyale: {
                            displayName: "BroadcasterRoyale",
                            languageCode: "en"
                        },
                        nerdstartv: {
                            displayName: "NerdStarTV",
                            languageCode: "de"
                        },
                        luttilutti: {
                            displayName: "LuttiLutti",
                            languageCode: "fr"
                        },
                        davidsaba_: {
                            languageCode: "es"
                        },
                        enoquiano: {
                            displayName: "Enoquiano",
                            languageCode: "es-mx"
                        },
                        niuscup: {
                            displayName: "NiusCUP",
                            languageCode: "pt"
                        },
                        petarnetotv: {
                            displayName: "petarNetoTV",
                            languageCode: "pt-br"
                        },
                        unique: {
                            languageCode: "ru"
                        },
                        fusiontv1: {
                            displayName: "FusionTV1",
                            languageCode: "hu"
                        },
                        cga_esports: {
                            languageCode: "zh-tw"
                        },
                        "1am_shin": {
                            languageCode: "ko"
                        },
                        myarenaonline: {
                            displayName: "MyArenaOnline",
                            languageCode: "th"
                        },
                        shobosuke: {
                            displayName: "ShoboSuke",
                            languageCode: "ja"
                        }
                    }
                }, n.__assign({
                    startDate: 15353532e5,
                    endDate: 153855e7
                }, l), n.__assign({
                    startDate: 15428736e5,
                    endDate: 15437376e5
                }, l), n.__assign({
                    startDate: 15456384e5,
                    endDate: 15465024e5
                }, l), n.__assign({
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
                            var a = s.b.get("native_broadcast_blacklist", []),
                                n = Object.keys(e.channels).filter(function(e) {
                                    return a.indexOf(e) < 0
                                });
                            return (n = n.filter(function(e) {
                                return e.toLowerCase() !== t.props.channelLogin.toLowerCase()
                            })).map(function(t) {
                                var a = e.channels[t].displayName || t,
                                    n = i.p.intl.resolveLocaleFromCode(e.channels[t].languageCode);
                                if (!n) return null;
                                var s = n.name + " (" + a + ")";
                                return o.createElement("li", {
                                    key: t
                                }, o.createElement(r.U, {
                                    className: "native-broadcast-notification__link",
                                    to: "/" + t,
                                    type: r.V.Overlay
                                }, s))
                            })
                        }, t.onDismiss = function() {
                            var e;
                            t.setState({
                                isClosed: !0
                            });
                            var a = n.__assign({}, i.m.get(u, {}), ((e = {})[t.props.channelLogin.toLowerCase()] = Date.now(), e));
                            i.m.set(u, a)
                        }, t.onExpire = function() {
                            t.setState({
                                isClosed: !0
                            })
                        }, t
                    }
                    return n.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                        e.channelLogin.toLowerCase() !== this.props.channelLogin.toLowerCase() && this.setState({
                            isClosed: !1
                        })
                    }, t.prototype.render = function() {
                        if (this.state.isClosed) return null;
                        var e = this.eventForChannel();
                        if (!e) return null;
                        if (this.hasDismissedForEvent(e.startDate)) return null;
                        var t = this.getChannelLinks(e);
                        return t.length ? o.createElement(r.zb, {
                            attachLeft: !0,
                            attachRight: !0,
                            attachTop: !0,
                            background: r.r.AccentAlt2,
                            color: r.O.Overlay,
                            padding: 1,
                            position: r.fb.Absolute
                        }, o.createElement(r.Xa, {
                            margin: {
                                bottom: 1
                            }
                        }, o.createElement(r.W, {
                            type: r.Pb.H4
                        }, e.title)), o.createElement(r.Xa, {
                            margin: {
                                bottom: 1
                            }
                        }, o.createElement(r.W, {
                            color: r.O.OverlayAlt
                        }, Object(i.d)("Want to watch {eventName} in your local language? Try one of these international broadcasts!", {
                            eventName: e.shortName
                        }, "NativeBroadcastNotification"))), o.createElement("ul", null, t), o.createElement(r.Xa, {
                            attachRight: !0,
                            attachTop: !0,
                            margin: 1,
                            position: r.fb.Absolute
                        }, o.createElement(r.A, {
                            ariaLabel: Object(i.d)("Close", "NativeBroadcastNotification"),
                            icon: r.pb.Close,
                            onClick: this.onDismiss,
                            overlay: !0,
                            size: r.B.Small,
                            "data-a-target": "native-broadcast-notification-close-button"
                        })), o.createElement(r.Xa, {
                            margin: {
                                top: .5
                            }
                        }, o.createElement(r.ib, {
                            animationDirection: r.jb.Down,
                            animationDuration: 30,
                            onAnimationEnd: this.onExpire,
                            size: r.kb.ExtraSmall
                        }))) : null
                    }, t.prototype.eventForChannel = function() {
                        var e = Date.now(),
                            t = this.props.channelLogin.toLowerCase();
                        return c.find(function(a) {
                            return !(e < a.startDate || e > a.endDate) && !!a.channels[t]
                        })
                    }, t.prototype.hasDismissedForEvent = function(e) {
                        var t = i.m.get(u, {})[this.props.channelLogin.toLowerCase()];
                        return !!t && t >= e
                    }, t
                }(o.Component);
            a.d(t, "CLOSE_BUTTON_SELECTOR", function() {
                return "native-broadcast-notification-close-button"
            }), a.d(t, "LOCAL_STORAGE_KEY", function() {
                return u
            }), a.d(t, "NativeBroadcastNotification", function() {
                return d
            })
        }
    }
]);