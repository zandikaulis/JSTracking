(window.webpackJsonp = window.webpackJsonp || []).push([
    [176], {
        "6TSi": function(e, t) {},
        "6XEL": function(e, t, n) {
            "use strict";
            var r = {};

            function i(e) {
                return "/" + e + "/dashboard/achievements/"
            }

            function a(e) {
                return "/" + e.channelLogin + "/dashboard/achievements/" + e.id
            }
            n.d(r, "channelAchievements", function() {
                return i
            }), n.d(r, "achievement", function() {
                return a
            });
            var o, s = n("dG1e"),
                u = n("rSo7"),
                d = n("eAwD");

            function c(e, t, n) {
                return e.sort(function(e, r) {
                    for (var i = 0; i < t.length; i++) {
                        var a = t[i],
                            s = n[i] || o.Ascending,
                            u = l(a(e), a(r)) * s;
                        if (0 !== u) return u
                    }
                    return 0
                })
            }

            function l(e, t) {
                var n = null !== e && void 0 !== e,
                    r = null !== t && void 0 !== t;
                return n && r ? e > t ? 1 : e < t ? -1 : 0 : n ? -1 : r ? 1 : 0
            }! function(e) {
                e[e.Ascending = 1] = "Ascending", e[e.Descending = -1] = "Descending"
            }(o || (o = {})), n.d(t, "b", function() {
                return r
            }), n.d(t, "c", function() {
                return s.a
            }), n.d(t, !1, function() {}), n.d(t, !1, function() {
                return u.a
            }), n.d(t, !1, function() {
                return d.a
            }), n.d(t, "a", function() {
                return o
            }), n.d(t, "d", function() {
                return c
            })
        },
        "7htX": function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n("mrSG"),
                i = n("q1tI"),
                a = n("Kukq"),
                o = n("oJmH"),
                s = n("/MKj"),
                u = n("9C/b"),
                d = n("kRBY"),
                c = n("yR8l"),
                l = n("oMhb");
            var p = Object(c.a)(l, {
                options: function(e) {
                    return {
                        variables: {
                            sourceChannelID: e.raid.sourceChannelID,
                            targetChannelID: e.raid.targetChannelID
                        }
                    }
                }
            })(function(e) {
                if (e.data.loading || e.data.error) return i.createElement("div", null);
                var t = e.component,
                    n = r.__rest(e, ["component"]);
                return i.createElement(t, r.__assign({}, n))
            });
            var h = n("/7QA"),
                f = n("5zf8"),
                m = n("Ue10"),
                g = function(e) {
                    var t = e.sourceChannel,
                        n = e.targetChannel;
                    return i.createElement(m.Xa, {
                        display: m.X.Flex
                    }, i.createElement(m.q, {
                        size: 36,
                        src: t.profileImageURL,
                        alt: t.displayName
                    }), i.createElement(m.qb, {
                        asset: m.rb.AngleRight,
                        height: 10
                    }), i.createElement(m.q, {
                        size: 36,
                        src: n.profileImageURL,
                        alt: n.displayName
                    }))
                },
                v = function(e) {
                    var t = e.seconds;
                    return i.createElement(m.Cb, {
                        display: m.X.Flex,
                        alignItems: m.f.Center,
                        justifyContent: m.Wa.Center,
                        color: m.O.Overlay
                    }, i.createElement(m.Za, {
                        size: m.Ab.Large,
                        delay: 0,
                        inheritColor: !0
                    }), i.createElement(m.Xa, {
                        position: m.hb.Absolute
                    }, t))
                },
                _ = n("2xye"),
                y = {
                    raid_type: "now"
                },
                b = {
                    medium: "twitch_channel",
                    content: "raid_channel"
                };

            function R(e, t) {
                w(_.SpadeEventType.RaidPromptImpression, e, t)
            }

            function w(e, t, n) {
                var i = r.__assign({
                    raid_creator_id: Number(t.creatorID),
                    raid_source_id: Number(t.sourceChannelID),
                    raid_target_id: Number(t.targetChannelID),
                    raid_id: t.id
                }, n);
                h.o.track(e, i)
            }
            var C = n("eRLD"),
                E = {
                    "data-test-selector": "raid-message"
                },
                D = {
                    "data-test-selector": "raid-cancel-button"
                },
                S = {
                    "data-test-selector": "raid-now-button"
                },
                k = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        R(this.props.raid, y)
                    }, t.prototype.componentDidUpdate = function() {
                        this.props.raid.isGoing && this.props.onRaidGo(this.props.targetChannel.login), this.props.timerPhase.isForced && this.props.onRaidNow()
                    }, t.prototype.render = function() {
                        return i.createElement(i.Fragment, null, i.createElement(m.Xa, {
                            display: m.X.Flex,
                            justifyContent: m.Wa.Between
                        }, i.createElement(m.Xa, {
                            alignItems: m.f.Center,
                            display: m.X.Flex
                        }, i.createElement(g, {
                            sourceChannel: this.props.sourceChannel,
                            targetChannel: this.props.targetChannel
                        }), i.createElement(m.Xa, r.__assign({
                            padding: {
                                left: 1
                            }
                        }, E), this.props.timerPhase.isWaiting ? I(this.props, this.props.timerPhase.secondsUntilTransition) : x(this.props))), this.props.timerPhase.isReady && this.props.timerPhase.secondsUntilTransition <= 10 && i.createElement(v, {
                            seconds: this.props.timerPhase.secondsUntilTransition
                        })), i.createElement(m.Xa, {
                            display: m.X.Flex,
                            justifyContent: m.Wa.End,
                            margin: {
                                top: 1
                            }
                        }, i.createElement(m.Xa, {
                            margin: {
                                right: 1
                            }
                        }, i.createElement(m.z, r.__assign({
                            type: m.F.Hollow,
                            size: m.D.Small,
                            onClick: this.props.onCancelRaid
                        }, D), i.createElement(m.Cb, {
                            padding: {
                                x: 1
                            },
                            color: m.O.Overlay
                        }, Object(h.d)("Cancel", "RaidCreatorButton")))), i.createElement(m.Xa, null, i.createElement(m.z, r.__assign({
                            size: m.D.Small,
                            onClick: this.props.onRaidNow,
                            disabled: this.props.timerPhase.isWaiting
                        }, S), i.createElement(m.Xa, {
                            padding: {
                                x: 1
                            }
                        }, Object(h.d)("Raid Now", "RaidCreatorButton"))))))
                    }, t
                }(i.Component),
                I = function(e, t) {
                    return Object(h.d)("{raiderCount, plural,       one {<x:strong># viewer </x:strong><x:span>is ready to raid</x:span><x:block>{targetDisplayName} in {secondsRemaining}</x:block>}       other {<x:strong># viewers </x:strong><x:span>are ready to raid</x:span><x:block>{targetDisplayName} in {secondsRemaining}</x:block>}}", {
                        "x:block": function(e) {
                            return i.createElement(m.W, {
                                bold: !0
                            }, e)
                        },
                        "x:strong": function(e) {
                            return i.createElement(m.W, {
                                key: "raid-count",
                                type: m.Sb.Strong
                            }, e)
                        },
                        "x:span": function(e) {
                            return i.createElement(m.W, {
                                type: m.Sb.Span
                            }, e)
                        },
                        raiderCount: e.raid.viewerCount,
                        secondsRemaining: Object(f.b)(t, f.a.HumanizedShort),
                        targetDisplayName: e.targetChannel.displayName
                    }, "RaidCreatorMessageTimeLeft")
                },
                x = function(e) {
                    return Object(h.d)("{raiderCount, plural,       one {<x:strong># viewer </x:strong><x:span>is ready to raid</x:span><x:block>{targetDisplayName} now</x:block>}       other {<x:strong># viewers </x:strong><x:span>are ready to raid</x:span><x:block>{targetDisplayName} now</x:block>}}", {
                        "x:block": function(e) {
                            return i.createElement(m.W, {
                                bold: !0
                            }, e)
                        },
                        "x:strong": function(e) {
                            return i.createElement(m.W, {
                                key: "raid-count",
                                type: m.Sb.Strong
                            }, e)
                        },
                        "x:span": function(e) {
                            return i.createElement(m.W, {
                                type: m.Sb.Span
                            }, e)
                        },
                        raiderCount: e.raid.viewerCount,
                        targetDisplayName: e.targetChannel.displayName
                    }, "RaidCreatorMessageCanRaid")
                },
                N = function(e) {
                    return i.createElement(C.a, {
                        raid: e.raid
                    }, function(t) {
                        return i.createElement(k, r.__assign({}, e, {
                            timerPhase: t
                        }))
                    })
                },
                T = n("ll/k"),
                O = n("nIRf"),
                P = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            remainingSeconds: t.props.from
                        }, t.handleIntervalUpdate = function() {
                            if (t.state.remainingSeconds <= 0) return t.props.onCountdownEnd && t.props.onCountdownEnd(), t.countdownTimer.stop();
                            t.setState(function(e) {
                                return {
                                    remainingSeconds: e.remainingSeconds - 1
                                }
                            }, function() {
                                t.props.onSecondsUpdate(t.state.remainingSeconds)
                            })
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.countdownTimer = new O.a({
                            onInterval: this.handleIntervalUpdate,
                            intervalMillis: 1e3
                        }), this.countdownTimer.start()
                    }, t.prototype.componentWillUnmount = function() {
                        this.countdownTimer.stop()
                    }, t.prototype.render = function() {
                        return null
                    }, t
                }(i.Component),
                A = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            remainingJitterSeconds: t.props.raid.jitterSeconds
                        }, t.handleLeaveRaid = function() {
                            clearTimeout(t.joinDelayTimerID), t.props.onLeaveRaid()
                        }, t.handleCountdownEnd = function() {
                            t.props.onRaidGo(t.props.targetChannel.login)
                        }, t.handleSecondsUpdate = function(e) {
                            t.setState({
                                remainingJitterSeconds: e
                            })
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.hasJoined && (this.joinDelayTimerID = setTimeout(this.props.onJoinRaid, Object(T.a)(5e3))), R(this.props.raid, y)
                    }, t.prototype.componentWillUnmount = function() {
                        clearTimeout(this.joinDelayTimerID)
                    }, t.prototype.render = function() {
                        return i.createElement(i.Fragment, null, i.createElement(m.Xa, {
                            justifyContent: m.Wa.Between,
                            display: m.X.Flex
                        }, i.createElement(m.Xa, {
                            alignItems: m.f.Center,
                            display: m.X.Flex
                        }, i.createElement(g, {
                            sourceChannel: this.props.sourceChannel,
                            targetChannel: this.props.targetChannel
                        }), i.createElement(m.Xa, {
                            padding: {
                                left: 1
                            }
                        }, j(this.props))), i.createElement(m.Xa, {
                            alignSelf: m.g.Center
                        }, this.renderActionable())), this.props.raid.isGoing && i.createElement(P, {
                            from: this.props.raid.jitterSeconds,
                            onSecondsUpdate: this.handleSecondsUpdate,
                            onCountdownEnd: this.handleCountdownEnd
                        }))
                    }, t.prototype.renderActionable = function() {
                        return this.props.raid.isGoing && this.props.raid.jitterSeconds > 2 ? i.createElement(v, {
                            seconds: this.state.remainingJitterSeconds
                        }) : this.props.hasJoined ? i.createElement(L, {
                            onLeaveRaid: this.handleLeaveRaid
                        }) : i.createElement(U, {
                            onJoinRaid: this.props.onJoinRaid
                        })
                    }, t
                }(i.Component),
                j = function(e) {
                    return Object(h.d)("{viewerCount, plural,     one {<x:block>{sourceDisplayName} is</x:block><x:block>raiding {targetDisplayName}</x:block><x:block>with # raider</x:block>}     other {<x:block>{sourceDisplayName} is</x:block><x:block>raiding {targetDisplayName}</x:block><x:block>with # raiders</x:block>}}", {
                        "x:block": function(e) {
                            return i.createElement(m.W, null, e)
                        },
                        sourceDisplayName: i.createElement(m.W, {
                            type: m.Sb.Strong
                        }, e.sourceChannel.displayName),
                        targetDisplayName: i.createElement(m.W, {
                            type: m.Sb.Strong
                        }, e.targetChannel.displayName),
                        viewerCount: e.raid.viewerCount
                    }, "RaidViewerMessage")
                },
                L = function(e) {
                    var t = e.onLeaveRaid;
                    return i.createElement(m.z, {
                        size: m.D.Small,
                        type: m.F.Hollow,
                        onClick: t
                    }, i.createElement(m.Cb, {
                        padding: {
                            x: 1
                        },
                        color: m.O.Overlay
                    }, Object(h.d)("Leave", "RaidViewerButton")))
                },
                U = function(e) {
                    var t = e.onJoinRaid;
                    return i.createElement(m.z, {
                        size: m.D.Small,
                        onClick: t
                    }, i.createElement(m.Xa, {
                        padding: {
                            x: 1
                        }
                    }, Object(h.d)("Join", "RaidViewerButton")))
                },
                F = n("cr+I");
            var J = {
                    "data-test-selector": "raid-banner"
                },
                q = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleRaidGo = function(e) {
                            if (t.props.onExpire(t.props.raid), t.hasJoinedCurrentRaid) {
                                var n = function(e, t) {
                                    var n;
                                    if (function(e) {
                                            return !e.split("/")[2]
                                        }(e.pathname)) n = "/" + t;
                                    else {
                                        if (! function(e) {
                                                return /^\/.+\/chat$/.test(e)
                                            }(e.pathname)) return "";
                                        n = "/" + t + "/chat"
                                    }
                                    var i = r.__assign({}, F.parse(e.search), {
                                        referrer: "raid"
                                    });
                                    return n + "?" + F.stringify(i)
                                }(t.props.history.location, e);
                                n && t.props.history.push(n, b)
                            }
                        }, t.handleJoinRaid = function() {
                            ! function(e, t) {
                                w(_.SpadeEventType.RaidPromptJoin, e, t)
                            }(t.props.raid, y), t.props.onJoin(t.props.raid)
                        }, t.handleLeaveRaid = function() {
                            ! function(e, t) {
                                w(_.SpadeEventType.RaidPromptLeave, e, t)
                            }(t.props.raid, y), t.props.onLeave(t.props.raid)
                        }, t.handleRaidNow = function() {
                            ! function(e) {
                                w(_.SpadeEventType.RaidPromptNow, e, y)
                            }(t.props.raid), t.props.onRaidNow(t.props.raid)
                        }, t.handleCancelRaid = function() {
                            ! function(e, t) {
                                w(_.SpadeEventType.RaidPromptCancel, e, t)
                            }(t.props.raid, y), t.props.onCancel(t.props.raid)
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        if (this.shouldRenderRaidBanner) {
                            var e = this.props.raid,
                                t = this.props.data,
                                n = t.sourceChannel,
                                a = t.targetChannel,
                                o = i.createElement(A, {
                                    hasJoined: this.hasJoinedCurrentRaid,
                                    onJoinRaid: this.handleJoinRaid,
                                    onLeaveRaid: this.handleLeaveRaid,
                                    onRaidGo: this.handleRaidGo,
                                    raid: e,
                                    sourceChannel: n,
                                    targetChannel: a
                                });
                            return this.isRaidCreator && (o = i.createElement(N, {
                                onCancelRaid: this.handleCancelRaid,
                                onRaidNow: this.handleRaidNow,
                                onRaidGo: this.handleRaidGo,
                                raid: e,
                                sourceChannel: n,
                                targetChannel: a
                            })), i.createElement(m.Cb, r.__assign({
                                background: m.r.AccentAlt2,
                                color: m.O.Overlay,
                                position: m.hb.Absolute,
                                zIndex: m.fc.Above,
                                fullWidth: !0
                            }, J), i.createElement(m.Xa, {
                                padding: {
                                    y: 1,
                                    x: 2
                                }
                            }, o))
                        }
                        return null
                    }, Object.defineProperty(t.prototype, "shouldRenderRaidBanner", {
                        get: function() {
                            var e = this.props.raid,
                                t = e.isGoing && this.hasJoinedCurrentRaid;
                            return (e.isAnnouncing || t) && !e.isExpired
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "isRaidCreator", {
                        get: function() {
                            var e = this.props.raid;
                            return Boolean(e && this.props.user && this.props.user.id === e.creatorID)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "hasJoinedCurrentRaid", {
                        get: function() {
                            var e = this.props.raid;
                            return !!e && (this.isRaidCreator || e.hasJoined)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(i.Component);
            var G = Object(o.compose)(Object(s.connect)(function(e) {
                    return {
                        user: Object(d.e)(e)
                    }
                }), u.a, function(e) {
                    return function(t) {
                        return i.createElement(p, r.__assign({}, t, {
                            component: e
                        }))
                    }
                })(q),
                V = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return this.props.raid ? i.createElement(G, {
                            raid: this.props.raid,
                            onJoin: this.props.onJoin,
                            onLeave: this.props.onLeave,
                            onExpire: this.props.onExpire,
                            onCancel: this.props.onCancel,
                            onRaidNow: this.props.onRaidNow
                        }) : null
                    }, t
                }(i.Component),
                X = function(e) {
                    return i.createElement(a.a, {
                        channelID: e.channelID
                    }, function(t) {
                        return i.createElement(V, r.__assign({}, e, t))
                    })
                };
            n.d(t, "RaidNotificationComponent", function() {
                return V
            }), n.d(t, "RaidNotification", function() {
                return X
            })
        },
        "7qJZ": function(e, t, n) {
            "use strict";
            n.d(t, "c", function() {
                return i
            }), n.d(t, "a", function() {
                return a
            }), n.d(t, "b", function() {
                return o
            }), n.d(t, "d", function() {
                return s
            });
            var r = n("ll/k"),
                i = "raid_update_v2",
                a = "raid_cancel_v2",
                o = "raid_go_v2",
                s = function() {
                    function e(e, t, n) {
                        this.message = e, this.id = e.raid.id, this.type = e.type, this.creatorID = e.raid.creator_id, this.sourceChannelID = e.raid.source_id, this.targetChannelID = e.raid.target_id, this.viewerCount = e.raid.viewer_count, this.remainingDurationSeconds = e.raid.remaining_duration_seconds, this.targetLogin = e.raid.target_login, this.targetDisplayName = e.raid.target_display_name, this.targetProfileImage = e.raid.target_profile_image, this.storage = t, this.hasJoined = t.hasJoined(this), this.isExpired = t.isExpired(this), this.jitterSeconds = n ? n.jitterSeconds : Object(r.a)(e.raid.transition_jitter_seconds), this.isAnnouncing = e.type === i, this.isGoing = Boolean(n && n.isAnnouncing) && e.type === o, this.hasEnded = e.type === o || e.type === a, n && n.hasEnded && (this.isAnnouncing = !1, this.isGoing = n.isGoing, this.hasEnded = !0)
                    }
                    return e.prototype.withMessage = function(t) {
                        return this.id !== t.raid.id ? new e(t, this.storage) : new e(t, this.storage, this)
                    }, e.prototype.withStorage = function(t) {
                        return new e(this.message, t, this)
                    }, e
                }()
        },
        G8UE: function(e, t, n) {
            "use strict";
            var r = n("J1ZQ");
            n.d(t, "RaidStorage", function() {
                return r.a
            });
            var i = n("6TSi");
            n.o(i, "RAID_CANCEL_V2") && n.d(t, "RAID_CANCEL_V2", function() {
                return i.RAID_CANCEL_V2
            }), n.o(i, "RAID_GO_V2") && n.d(t, "RAID_GO_V2", function() {
                return i.RAID_GO_V2
            }), n.o(i, "RAID_UPDATE_V2") && n.d(t, "RAID_UPDATE_V2", function() {
                return i.RAID_UPDATE_V2
            }), n.o(i, "RaidV2") && n.d(t, "RaidV2", function() {
                return i.RaidV2
            }), n.o(i, "TimerPhase") && n.d(t, "TimerPhase", function() {
                return i.TimerPhase
            });
            var a = n("7qJZ");
            n.d(t, "RAID_CANCEL_V2", function() {
                return a.a
            }), n.d(t, "RAID_GO_V2", function() {
                return a.b
            }), n.d(t, "RAID_UPDATE_V2", function() {
                return a.c
            }), n.d(t, "RaidV2", function() {
                return a.d
            });
            var o = n("Tn5u");
            n.d(t, "TimerPhase", function() {
                return o.a
            })
        },
        J1ZQ: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            });
            var r, i = n("/7QA"),
                a = function() {
                    function e(e) {
                        this.expiredRaids = new Set, this.leftRaids = new Set, e && (this.expiredRaids = e.expiredRaids, this.leftRaids = e.leftRaids)
                    }
                    return Object.defineProperty(e, "instance", {
                        get: function() {
                            return r || (r = new e), r
                        },
                        enumerable: !0,
                        configurable: !0
                    }), e.prototype.isExpired = function(e) {
                        return this.expiredRaids.has(e.id)
                    }, e.prototype.hasJoined = function(e) {
                        return !this.leftRaids.has(e.id) && !this.getStorageData()[e.id]
                    }, e.prototype.expireRaid = function(t) {
                        var n = new Set(this.expiredRaids);
                        return n.add(t.id), new e({
                            expiredRaids: n,
                            leftRaids: this.leftRaids
                        })
                    }, e.prototype.joinRaid = function(t) {
                        var n = new Set(this.leftRaids);
                        n.delete(t.id);
                        var r = this.getStorageData();
                        return delete r[t.id], this.setStorageData(r), new e({
                            expiredRaids: this.expiredRaids,
                            leftRaids: n
                        })
                    }, e.prototype.leaveRaid = function(t) {
                        var n = new Set(this.leftRaids);
                        n.add(t.id);
                        var r = this.getStorageData();
                        return r[t.id] = !0, this.setStorageData(r), new e({
                            expiredRaids: this.expiredRaids,
                            leftRaids: n
                        })
                    }, e.prototype.destroy = function() {
                        r = void 0
                    }, e.prototype.setStorageData = function(e) {
                        i.m.set("raids-left", e)
                    }, e.prototype.getStorageData = function() {
                        return i.m.get("raids-left", {})
                    }, e
                }()
        },
        Kukq: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                i = n("q1tI"),
                a = n("/7QA"),
                o = n("/aPz"),
                s = n("G8UE"),
                u = n("aUoe"),
                d = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {}, t.raidStorage = s.RaidStorage.instance, t.handleJoin = function(e) {
                            return t.setState({
                                raid: e.withStorage(t.raidStorage.joinRaid(e))
                            }), u.c(e.id)
                        }, t.handleExpire = function(e) {
                            t.setState({
                                raid: e.withStorage(t.raidStorage.expireRaid(e))
                            })
                        }, t.handleLeave = function(e) {
                            return t.setState({
                                raid: e.withStorage(t.raidStorage.leaveRaid(e))
                            }), u.d(e.id)
                        }, t.handleCancel = function(e) {
                            return u.a(e.sourceChannelID)
                        }, t.handleRaidNow = function(e) {
                            return u.e(e.sourceChannelID)
                        }, t.unsubscribe = function() {}, t.handlePubsubMessage = function(e) {
                            switch (e.type) {
                                case s.RAID_UPDATE_V2:
                                case s.RAID_CANCEL_V2:
                                case s.RAID_GO_V2:
                                    return t.setState(function(n) {
                                        return n.raid ? r.__assign({}, n, {
                                            raid: n.raid.withMessage(e)
                                        }) : r.__assign({}, n, {
                                            raid: new s.RaidV2(e, t.raidStorage)
                                        })
                                    });
                                default:
                                    return
                            }
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.subscribe(this.props.channelID)
                    }, t.prototype.render = function() {
                        return this.props.children({
                            raid: this.state.raid,
                            onJoin: this.handleJoin,
                            onLeave: this.handleLeave,
                            onCancel: this.handleCancel,
                            onExpire: this.handleExpire,
                            onRaidNow: this.handleRaidNow
                        })
                    }, t.prototype.componentWillUnmount = function() {
                        this.unsubscribe()
                    }, t.prototype.componentDidUpdate = function(e) {
                        var t = this;
                        this.props.channelID !== e.channelID && (this.unsubscribe(), this.setState({
                            raid: void 0
                        }, function() {
                            return t.subscribe(t.props.channelID)
                        }))
                    }, t.prototype.subscribe = function(e) {
                        this.unsubscribe = a.p.pubsub.subscribe({
                            topic: Object(o.t)(e),
                            onMessage: this.handlePubsubMessage
                        })
                    }, t
                }(i.Component);
            n.d(t, "a", function() {
                return d
            })
        },
        Tn5u: function(e, t, n) {
            "use strict";
            var r;
            n.d(t, "a", function() {
                    return i
                }),
                function(e) {
                    e[e.Waiting = 0] = "Waiting", e[e.Ready = 1] = "Ready", e[e.Forced = 2] = "Forced"
                }(r || (r = {}));
            var i = function() {
                function e(e) {
                    this.status = e.status, this.secondsUntilTransition = e.secondsUntilTransition
                }
                return e.waitingFor = function(t) {
                    return new e({
                        status: r.Waiting,
                        secondsUntilTransition: t
                    })
                }, e.readyFor = function(t) {
                    return new e({
                        status: r.Ready,
                        secondsUntilTransition: t
                    })
                }, e.forced = function() {
                    return new e({
                        status: r.Forced,
                        secondsUntilTransition: 1 / 0
                    })
                }, Object.defineProperty(e.prototype, "isWaiting", {
                    get: function() {
                        return this.status === r.Waiting
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "isReady", {
                    get: function() {
                        return this.status === r.Ready
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "isForced", {
                    get: function() {
                        return this.status === r.Forced
                    },
                    enumerable: !0,
                    configurable: !0
                }), e
            }()
        },
        aUoe: function(e, t, n) {
            "use strict";
            n.d(t, "c", function() {
                return o
            }), n.d(t, "d", function() {
                return s
            }), n.d(t, "e", function() {
                return u
            }), n.d(t, "a", function() {
                return d
            }), n.d(t, "b", function() {
                return c
            });
            var r = n("mrSG"),
                i = n("/7QA"),
                a = n("6XEL");

            function o(e) {
                return Object(a.c)({
                    headers: l(),
                    path: "/kraken/raids/" + e + "/join",
                    method: "POST"
                })
            }

            function s(e) {
                return Object(a.c)({
                    headers: l(),
                    path: "/kraken/raids/" + e + "/leave",
                    method: "POST"
                })
            }

            function u(e) {
                return Object(a.c)({
                    headers: l(),
                    path: "/kraken/raids/go?source_id=" + e,
                    method: "POST"
                })
            }

            function d(e) {
                return Object(a.c)({
                    headers: l(),
                    path: "/kraken/raids?source_id=" + e,
                    method: "DELETE"
                })
            }

            function c(e, t) {
                return r.__awaiter(this, void 0, void 0, function() {
                    return r.__generator(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, Object(a.c)({
                                    headers: l(),
                                    path: "/kraken/raids?source_id=" + e + "&target_id=" + t,
                                    method: "POST"
                                })];
                            case 1:
                                return [2, n.sent()]
                        }
                    })
                })
            }

            function l() {
                return {
                    "X-Device-Id": i.p.session.deviceID
                }
            }
        },
        b6Yk: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            });
            var r = n("mrSG"),
                i = n("/7QA"),
                a = n("kRBY"),
                o = function() {
                    function e() {}
                    return e.get = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, Promise, function() {
                            return r.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, this.request(e, r.__assign({}, t, {
                                            method: "GET"
                                        }), n)];
                                    case 1:
                                        return [2, i.sent()]
                                }
                            })
                        })
                    }, e.getOrThrow = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, Promise, function() {
                            return r.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, r.__assign({}, t, {
                                            method: "GET"
                                        }), n)];
                                    case 1:
                                        return [2, i.sent()]
                                }
                            })
                        })
                    }, e.put = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, Promise, function() {
                            return r.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, this.request(e, r.__assign({}, t, {
                                            method: "PUT"
                                        }), n)];
                                    case 1:
                                        return [2, i.sent()]
                                }
                            })
                        })
                    }, e.putOrThrow = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, Promise, function() {
                            return r.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, r.__assign({}, t, {
                                            method: "PUT"
                                        }), n)];
                                    case 1:
                                        return [2, i.sent()]
                                }
                            })
                        })
                    }, e.post = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, Promise, function() {
                            return r.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, this.request(e, r.__assign({}, t, {
                                            method: "POST"
                                        }), n)];
                                    case 1:
                                        return [2, i.sent()]
                                }
                            })
                        })
                    }, e.postOrThrow = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, Promise, function() {
                            return r.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, r.__assign({}, t, {
                                            method: "POST"
                                        }), n)];
                                    case 1:
                                        return [2, i.sent()]
                                }
                            })
                        })
                    }, e.delete = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, Promise, function() {
                            return r.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, this.request(e, r.__assign({}, t, {
                                            method: "DELETE"
                                        }), n)];
                                    case 1:
                                        return [2, i.sent()]
                                }
                            })
                        })
                    }, e.deleteOrThrow = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, Promise, function() {
                            return r.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, r.__assign({}, t, {
                                            method: "DELETE"
                                        }), n)];
                                    case 1:
                                        return [2, i.sent()]
                                }
                            })
                        })
                    }, e.request = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, Promise, function() {
                            var i, a, o, s;
                            return r.__generator(this, function(u) {
                                switch (u.label) {
                                    case 0:
                                        return t = this.constructOptions(t, n), i = t.headers ? t.headers["Content-Type"] : void 0, a = this.serialize(t.body, i), o = r.__assign({}, t, {
                                            body: a
                                        }), [4, this._fetch(e, o)];
                                    case 1:
                                        return s = u.sent(), [4, this.constructLegacyAPIResponse(s)];
                                    case 2:
                                        return [2, u.sent()]
                                }
                            })
                        })
                    }, e.requestOrThrow = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, Promise, function() {
                            var i;
                            return r.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return a.trys.push([0, 2, , 3]), [4, this.request(e, t, n)];
                                    case 1:
                                        if ((i = a.sent()).requestError) throw i.requestError;
                                        if (i.error) throw new Error("Error while sending legacy-api request: " + i.error.status + " - " + i.error.message);
                                        return [2, r.__assign({}, i, {
                                            body: i.body
                                        })];
                                    case 2:
                                        throw a.sent();
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, e.getAPIURL = function(e) {
                        return new URL(e, i.p.config.apiBaseURL)
                    }, e.constructLegacyAPIResponse = function(e) {
                        return r.__awaiter(this, void 0, Promise, function() {
                            var t, n, i, a;
                            return r.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        t = {
                                            status: e.status
                                        }, r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 3, , 4]), [4, e.json()];
                                    case 2:
                                        return n = r.sent(), e.ok ? t.body = n : t.error = n, [3, 4];
                                    case 3:
                                        return i = r.sent(), e.headers && e.headers.get && (a = e.headers.get("Content-Type")) && -1 !== a.indexOf("application/json") && (t.requestError = i), [3, 4];
                                    case 4:
                                        return [2, t]
                                }
                            })
                        })
                    }, e._fetch = function(e, t) {
                        return void 0 === t && (t = {}), r.__awaiter(this, void 0, Promise, function() {
                            return r.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return [4, fetch(this.getAPIURL(e).toString(), t)];
                                    case 1:
                                        return [2, n.sent()]
                                }
                            })
                        })
                    }, e.constructOptions = function(e, t) {
                        return e = Object.assign({}, e, {
                            headers: r.__assign({}, this.getDefaultHeaders(e, t), e.headers)
                        })
                    }, e.serialize = function(e, t) {
                        return "application/json; charset=UTF-8" === t ? JSON.stringify(e) : "string" == typeof e ? e : e && FormData.prototype.isPrototypeOf(e) ? e : e ? (this.logger.error(new Error("Could not serialize this request body for the content-type provided."), "attempting to serialize object with a non-JSON content-type", {
                            contentType: t
                        }), null) : null
                    }, e.getDefaultHeaders = function(e, t) {
                        var n = i.p.store.getState(),
                            r = {
                                Accept: "application/vnd.twitchtv.v" + (t.version || 5) + "+json; charset=UTF-8",
                                "Accept-Language": "en-us",
                                "Client-ID": i.p.config.legacyClientID,
                                "X-Requested-With": "XMLHttpRequest"
                            };
                        e.body && FormData.prototype.isPrototypeOf(e.body) || (r["Content-Type"] = "application/json; charset=UTF-8");
                        var o = Object(a.e)(n);
                        return o && (r.Authorization = "OAuth " + o.authToken, o.legacyCSRFToken && (r["Twitch-Api-Token"] = o.legacyCSRFToken)), t.excludeHeaders && t.excludeHeaders.forEach(function(e) {
                            r[e] && delete r[e]
                        }), r
                    }, e.logger = i.p.logger.withCategory("legacy-api"), e
                }()
        },
        dG1e: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            });
            var r = n("mrSG"),
                i = n("b6Yk");

            function a(e, t) {
                return void 0 === t && (t = {}), r.__awaiter(this, void 0, void 0, function() {
                    var n;
                    return r.__generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return [4, i.a.request(e.path, e, t)];
                            case 1:
                                return n = r.sent(), [2, new o(n, e)]
                        }
                    })
                })
            }
            var o = function() {
                function e(e, t) {
                    this.status = e.status, this.body = e.body, this.error = e.error, this.requestError = e.requestError, this.request = t
                }
                return e.prototype.isSuccess = function() {
                    return this.status >= 200 && this.status < 400 && !this.requestError
                }, e.prototype.isError = function() {
                    return !this.isSuccess()
                }, e
            }()
        },
        eAwD: function(e, t, n) {
            "use strict";

            function r(e) {
                e && requestAnimationFrame(function() {
                    e.scrollIntoView({
                        behavior: "smooth"
                    })
                })
            }
            n.d(t, "a", function() {
                return r
            })
        },
        eRLD: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                i = n("q1tI"),
                a = n("G8UE"),
                o = 10,
                s = 90;

            function u(e) {
                return e < 10 ? a.TimerPhase.waitingFor(o - e) : e < s ? a.TimerPhase.readyFor(s - e) : a.TimerPhase.forced()
            }
            var d = new Map;
            var c = function() {},
                l = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            timerPhase: u(0)
                        }, t.stop = c, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        var e = this;
                        this.stop = function(e, t) {
                            var n = d.get(e);
                            if (n) n.listeners.add(t);
                            else {
                                var r = new Set([t]),
                                    i = 0,
                                    a = setInterval(function() {
                                        i++, r.forEach(function(e) {
                                            return e(i)
                                        })
                                    }, 1e3);
                                n = {
                                    listeners: r,
                                    timerID: a
                                }, d.set(e, n)
                            }
                            return function() {
                                n && (n.listeners.delete(t), 0 === n.listeners.size && (d.delete(e), clearInterval(n.timerID)))
                            }
                        }(this.props.raid.id, function(t) {
                            e.setState({
                                timerPhase: u(t)
                            })
                        })
                    }, t.prototype.componentWillUnmount = function() {
                        this.stop()
                    }, t.prototype.render = function() {
                        return this.props.children(this.state.timerPhase)
                    }, t
                }(i.Component);
            n.d(t, "a", function() {
                return l
            })
        },
        "ll/k": function(e, t, n) {
            "use strict";

            function r(e, t) {
                if (void 0 === t && (t = 0), t > e) {
                    var n = t;
                    t = e, e = n
                }
                return t + Math.floor(Math.random() * (e - t + 1))
            }

            function i(e) {
                return e[r(e.length - 1)]
            }

            function a(e, t) {
                for (var n = 0, r = []; n < e;) r.push(t(n)), n += 1;
                return r
            }
            n.d(t, "a", function() {
                return r
            }), n.d(t, "b", function() {
                return i
            }), n.d(t, "c", function() {
                return a
            })
        },
        nIRf: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            });
            var r = function() {
                return function(e) {
                    var t = this;
                    this.timerId = null, this.start = function() {
                        t.timerId && t.stop(), t.timerId = setInterval(t.onInterval, t.intervalMillis)
                    }, this.stop = function() {
                        t.timerId && (clearInterval(t.timerId), t.timerId = null)
                    }, this.restart = function(e) {
                        void 0 === e && (e = 0), t.stop(), t.timerId = setTimeout(function() {
                            t.onInterval(), t.start()
                        }, e)
                    }, this.onInterval = e.onInterval, this.intervalMillis = e.intervalMillis
                }
            }()
        },
        oMhb: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "RaidNotification_Channels"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "sourceChannelID"
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
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "targetChannelID"
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
                            alias: {
                                kind: "Name",
                                value: "sourceChannel"
                            },
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
                                        value: "sourceChannelID"
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
                                        value: "login"
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
                                }]
                            }
                        }, {
                            kind: "Field",
                            alias: {
                                kind: "Name",
                                value: "targetChannel"
                            },
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
                                        value: "targetChannelID"
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
                                        value: "login"
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
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 268
                }
            };
            n.loc.source = {
                body: "query RaidNotification_Channels($sourceChannelID: ID! $targetChannelID: ID!) {\nsourceChannel: user(id: $sourceChannelID) {\nid\nlogin\ndisplayName\nprofileImageURL(width: 70)\n}\ntargetChannel: user(id: $targetChannelID) {\nid\nlogin\ndisplayName\nprofileImageURL(width: 70)\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        rSo7: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            });
            var r = n("/7QA");

            function i(e) {
                var t = Math.floor(e / 60),
                    n = e % 60;
                return t && n ? Object(r.d)("{hours, number}h{minutes, number}m", {
                    hours: t,
                    minutes: n
                }, "StreamSummaryDuration") : t ? Object(r.d)("{hours, number}h", {
                    hours: t
                }, "StreamSummaryDuration") : Object(r.d)("{minutes, number}m", {
                    minutes: n
                }, "StreamSummaryDuration")
            }
        }
    }
]);