(window.webpackJsonp = window.webpackJsonp || []).push([
    [175], {
        "6TSi": function(e, t) {},
        "6XEL": function(e, t, n) {
            "use strict";
            var i = {};

            function r(e) {
                return "/" + e + "/dashboard/achievements/"
            }

            function a(e) {
                return "/" + e.channelName + "/dashboard/achievements/" + e.id
            }
            n.d(i, "channelAchievements", function() {
                return r
            }), n.d(i, "achievement", function() {
                return a
            });
            var o, s = n("dG1e"),
                u = n("rSo7"),
                d = n("eAwD");

            function c(e, t, n) {
                return e.sort(function(e, i) {
                    for (var r = 0; r < t.length; r++) {
                        var a = t[r],
                            s = n[r] || o.Ascending,
                            u = l(a(e), a(i)) * s;
                        if (0 !== u) return u
                    }
                    return 0
                })
            }

            function l(e, t) {
                var n = null !== e && void 0 !== e,
                    i = null !== t && void 0 !== t;
                return n && i ? e > t ? 1 : e < t ? -1 : 0 : n ? -1 : i ? 1 : 0
            }! function(e) {
                e[e.Ascending = 1] = "Ascending", e[e.Descending = -1] = "Descending"
            }(o || (o = {})), n.d(t, "b", function() {
                return i
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
            var i = n("mrSG"),
                r = n("q1tI"),
                a = n("lZCe"),
                o = n("D7An"),
                s = n("/MKj"),
                u = n("9C/b"),
                d = n("/7QA"),
                c = n("/aPz"),
                l = n("kRBY"),
                p = n("ll/k"),
                h = 5,
                f = "raid_update",
                m = "raid_cancel",
                g = function() {
                    function e(e, t) {
                        this.id = e.raid.id, this.creatorID = e.raid.creator_id, this.sourceChannelID = e.raid.source_id, this.targetChannelID = e.raid.target_id, this.viewerCount = e.raid.viewer_count, t ? (this.jitterSeconds = t.jitterSeconds, this.totalDurationInSeconds = t.totalDurationInSeconds, this.clientCreatedAtTimestamp = t.clientCreatedAtTimestamp) : (this.jitterSeconds = Object(p.a)(e.raid.transition_jitter_seconds), this.totalDurationInSeconds = this.getTotalDurationInSeconds(e.raid.remaining_duration_seconds), this.clientCreatedAtTimestamp = (new Date).getTime()), this.isAnnouncing = e.type === f && this.totalDurationInSeconds > 0, this.hasTimeToJoin = this.totalDurationInSeconds > h
                    }
                    return e.prototype.withMessage = function(t) {
                        return this.id !== t.raid.id ? new e(t) : new e(t, this)
                    }, e.prototype.getRemainingJoinTime = function(e) {
                        void 0 === e && (e = new Date);
                        var t = e.getTime() - this.clientCreatedAtTimestamp;
                        return 1e3 * this.totalDurationInSeconds - t
                    }, e.prototype.getTotalDurationInSeconds = function(e) {
                        var t = e + this.jitterSeconds;
                        return Math.max(t, 0)
                    }, e
                }(),
                v = n("2xye"),
                b = {
                    raid_type: "now"
                },
                y = {
                    medium: "twitch_channel",
                    content: "raid_channel"
                };

            function _(e, t) {
                D(v.SpadeEventType.RaidPromptJoin, e, t)
            }

            function R(e, t) {
                D(v.SpadeEventType.RaidPromptLeave, e, t)
            }

            function C(e, t) {
                D(v.SpadeEventType.RaidPromptCancel, e, t)
            }

            function w(e, t) {
                D(v.SpadeEventType.RaidPromptImpression, e, t)
            }

            function D(e, t, n) {
                var r = i.__assign({
                    raid_creator_id: Number(t.creatorID),
                    raid_source_id: Number(t.sourceChannelID),
                    raid_target_id: Number(t.targetChannelID),
                    raid_id: t.id
                }, n);
                d.o.track(e, r)
            }
            var E = n("cr+I");

            function S(e, t) {
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
                var r = i.__assign({}, E.parse(e.search), {
                    referrer: "raid"
                });
                return n + "?" + E.stringify(r)
            }
            var I = n("G8UE"),
                k = n("aUoe"),
                T = n("yR8l"),
                O = n("oMhb");
            var x = Object(T.a)(O, {
                options: function(e) {
                    return {
                        variables: {
                            sourceChannelID: e.raid.sourceChannelID,
                            targetChannelID: e.raid.targetChannelID
                        }
                    }
                }
            })(function(e) {
                if (e.data.loading || e.data.error) return r.createElement("div", null);
                var t = e.component,
                    n = i.__rest(e, ["component"]);
                return r.createElement(t, i.__assign({}, n))
            });

            function N(e) {
                return function(t) {
                    return r.createElement(x, i.__assign({}, t, {
                        component: e
                    }))
                }
            }
            var P = n("Ue10"),
                A = n("zyCo"),
                j = (n("SUms"), {
                    "data-test-selector": "current-raiders"
                }),
                L = N(function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.getRemainingTime = function() {
                            return t.props.raid.getRemainingJoinTime()
                        }, t.handleCountdownEnd = function() {
                            t.props.onRaidInvitePeriodOver(t.props.data.targetChannel.login)
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        w(this.props.raid)
                    }, t.prototype.render = function() {
                        var e = this.props.data,
                            t = e.sourceChannel,
                            n = e.targetChannel;
                        return r.createElement(P.yb, {
                            className: "raid-notification",
                            background: P.r.AccentAlt2,
                            color: P.O.Overlay,
                            position: P.eb.Absolute,
                            zIndex: P.bc.Above,
                            fullWidth: !0
                        }, r.createElement(P.Wa, {
                            className: "raid-notification__content",
                            padding: {
                                y: 1,
                                x: 2
                            },
                            display: P.X.Flex,
                            justifyContent: P.Va.Between
                        }, r.createElement(P.Wa, {
                            alignItems: P.f.Center,
                            display: P.X.Flex
                        }, r.createElement(P.q, {
                            size: 36,
                            src: t.profileImageURL,
                            alt: t.displayName
                        }), r.createElement(P.nb, {
                            asset: P.ob.AngleRight,
                            height: 10
                        }), r.createElement(P.q, {
                            size: 36,
                            src: n.profileImageURL,
                            alt: n.displayName
                        }), r.createElement(P.Wa, {
                            padding: {
                                left: 1
                            }
                        }, r.createElement(P.W, {
                            color: P.O.OverlayAlt,
                            type: P.Ob.P,
                            className: "raid-notification__channel-name"
                        }, Object(d.d)("{sourceDisplayName} is", {
                            sourceDisplayName: t.displayName
                        }, "RaidCTASourceChannel")), r.createElement(P.W, null, Object(d.d)("raiding {targetDisplayName}", {
                            targetDisplayName: n.displayName
                        }, "RaidCTATargetChannel")), r.createElement(P.W, i.__assign({
                            bold: !0
                        }, j), Object(d.d)("{viewerCount, plural, one {# raider} other {# raiders}}", {
                            viewerCount: this.props.raid.viewerCount
                        }, "RaidCTATotalRaiders")))), this.props.children), r.createElement(A.a, {
                            totalCountdownTime: 1e3 * this.props.raid.totalDurationInSeconds,
                            getRemainingTime: this.getRemainingTime,
                            onCountdownEnd: this.handleCountdownEnd
                        }))
                    }, t
                }(r.Component)),
                J = {
                    "data-test-selector": "raid-cancel-button"
                },
                U = function(e) {
                    return r.createElement(P.Wa, {
                        alignSelf: P.g.Center
                    }, r.createElement(P.z, i.__assign({
                        size: P.D.Large,
                        type: P.F.Hollow,
                        overlay: !0,
                        onClick: e.onCancelRaid
                    }, J), Object(d.d)("Cancel", "RaidCTACancel")))
                },
                W = {
                    "data-test-selector": "join-raid-button"
                },
                F = {
                    "data-test-selector": "leave-raid-button"
                },
                q = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.timerID = 0, t.handleLeaveRaid = function() {
                            clearTimeout(t.timerID), t.props.onLeaveRaid()
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.hasJoined && (this.timerID = setTimeout(this.props.onJoinRaid, Object(p.a)(5e3)))
                    }, t.prototype.componentWillUnmount = function() {
                        clearTimeout(this.timerID)
                    }, t.prototype.render = function() {
                        return this.props.hasJoined ? r.createElement(P.Wa, {
                            alignSelf: P.g.Center
                        }, r.createElement(P.z, i.__assign({
                            size: P.D.Large,
                            type: P.F.Hollow,
                            overlay: !0,
                            onClick: this.handleLeaveRaid
                        }, F), Object(d.d)("Leave", "RaidCTALeave"))) : r.createElement(P.Wa, {
                            alignSelf: P.g.Center
                        }, r.createElement(P.z, i.__assign({
                            size: P.D.Large,
                            onClick: this.props.onJoinRaid
                        }, W), Object(d.d)("Join", "RaidCTAJoin")))
                    }, t
                }(r.Component),
                V = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            raidStorage: new I.RaidStorage
                        }, t.unsubscribe = function() {}, t.handlePubsubMessage = function(e) {
                            switch (e.type) {
                                case f:
                                case m:
                                    return t.setState(function(t) {
                                        return t.raid ? i.__assign({}, t, {
                                            raid: t.raid.withMessage(e)
                                        }) : i.__assign({}, t, {
                                            raid: new g(e)
                                        })
                                    });
                                default:
                                    return
                            }
                        }, t.handleRaidInvitePeriodOver = function(e) {
                            var n = t.hasJoinedCurrentRaid;
                            if (t.state.raid && t.setState({
                                    raidStorage: t.state.raidStorage.expireRaid(t.state.raid)
                                }), n) {
                                var i = S(t.props.history.location || window.location, e);
                                i && t.props.history.push(i, y)
                            }
                        }, t.handleJoinRaid = function() {
                            if (t.state.raid) {
                                var e = t.state.raid.id;
                                Object(k.c)(e), _(t.state.raid), t.setState({
                                    raidStorage: t.state.raidStorage.joinRaid(t.state.raid)
                                })
                            }
                        }, t.handleLeaveRaid = function() {
                            if (t.state.raid) {
                                var e = t.state.raid.id;
                                Object(k.d)(e), R(t.state.raid), t.setState({
                                    raidStorage: t.state.raidStorage.leaveRaid(t.state.raid)
                                })
                            }
                        }, t.handleCancelRaid = function() {
                            t.state.raid && (C(t.state.raid), Object(k.a)(t.props.channelID))
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.subscribe(this.props.channelID)
                    }, t.prototype.render = function() {
                        return this.shouldRenderRaidNotification ? r.createElement(L, {
                            raid: this.state.raid,
                            onRaidInvitePeriodOver: this.handleRaidInvitePeriodOver
                        }, this.renderCTAButton()) : null
                    }, t.prototype.componentWillUnmount = function() {
                        this.unsubscribe()
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        var t = this;
                        this.props.channelID !== e.channelID && (this.unsubscribe(), this.setState({
                            raid: void 0
                        }, function() {
                            return t.subscribe(e.channelID)
                        }))
                    }, t.prototype.subscribe = function(e) {
                        this.unsubscribe = d.p.pubsub.subscribe({
                            topic: Object(c.t)(e),
                            onMessage: this.handlePubsubMessage
                        })
                    }, t.prototype.renderCTAButton = function() {
                        return this.isRaidCreator ? r.createElement(U, {
                            onCancelRaid: this.handleCancelRaid
                        }) : r.createElement(q, {
                            onJoinRaid: this.handleJoinRaid,
                            onLeaveRaid: this.handleLeaveRaid,
                            hasJoined: this.hasJoinedCurrentRaid
                        })
                    }, Object.defineProperty(t.prototype, "shouldRenderRaidNotification", {
                        get: function() {
                            var e = this.state.raid;
                            return e && e.isAnnouncing && !this.state.raidStorage.isExpired(e) && (e.hasTimeToJoin || this.hasJoinedCurrentRaid)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "isRaidCreator", {
                        get: function() {
                            var e = this.state.raid;
                            return e && this.props.user && this.props.user.id === e.creatorID
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "hasJoinedCurrentRaid", {
                        get: function() {
                            var e = this.state.raid;
                            return !!e && (this.isRaidCreator || this.state.raidStorage.hasJoined(e))
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(r.Component);
            var G = Object(s.connect)(function(e) {
                    return {
                        user: Object(l.e)(e)
                    }
                })(V),
                M = Object(u.a)(G),
                z = n("Kukq"),
                B = n("oJmH"),
                X = n("5zf8"),
                H = function(e) {
                    var t = e.sourceChannel,
                        n = e.targetChannel;
                    return r.createElement(P.Wa, {
                        display: P.X.Flex
                    }, r.createElement(P.q, {
                        size: 36,
                        src: t.profileImageURL,
                        alt: t.displayName
                    }), r.createElement(P.nb, {
                        asset: P.ob.AngleRight,
                        height: 10
                    }), r.createElement(P.q, {
                        size: 36,
                        src: n.profileImageURL,
                        alt: n.displayName
                    }))
                },
                Q = function(e) {
                    var t = e.seconds;
                    return r.createElement(P.yb, {
                        display: P.X.Flex,
                        alignItems: P.f.Center,
                        justifyContent: P.Va.Center,
                        color: P.O.Overlay
                    }, r.createElement(P.Ya, {
                        size: P.wb.Large,
                        delay: 0,
                        inheritColor: !0
                    }), r.createElement(P.Wa, {
                        position: P.eb.Absolute
                    }, t))
                },
                Y = n("eRLD"),
                Z = {
                    "data-test-selector": "raid-message"
                },
                $ = {
                    "data-test-selector": "raid-cancel-button"
                },
                K = {
                    "data-test-selector": "raid-now-button"
                },
                ee = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        w(this.props.raid, b)
                    }, t.prototype.componentDidUpdate = function() {
                        this.props.raid.isGoing && this.props.onRaidGo(this.props.targetChannel.login), this.props.timerPhase.isForced && this.props.onRaidNow()
                    }, t.prototype.render = function() {
                        return r.createElement(r.Fragment, null, r.createElement(P.Wa, {
                            display: P.X.Flex,
                            justifyContent: P.Va.Between
                        }, r.createElement(P.Wa, {
                            alignItems: P.f.Center,
                            display: P.X.Flex
                        }, r.createElement(H, {
                            sourceChannel: this.props.sourceChannel,
                            targetChannel: this.props.targetChannel
                        }), r.createElement(P.Wa, i.__assign({
                            padding: {
                                left: 1
                            }
                        }, Z), this.props.timerPhase.isWaiting ? te(this.props, this.props.timerPhase.secondsUntilTransition) : ne(this.props))), this.props.timerPhase.isReady && this.props.timerPhase.secondsUntilTransition <= 10 && r.createElement(Q, {
                            seconds: this.props.timerPhase.secondsUntilTransition
                        })), r.createElement(P.Wa, {
                            display: P.X.Flex,
                            justifyContent: P.Va.End,
                            margin: {
                                top: 1
                            }
                        }, r.createElement(P.Wa, {
                            margin: {
                                right: 1
                            }
                        }, r.createElement(P.z, i.__assign({
                            type: P.F.Hollow,
                            size: P.D.Small,
                            onClick: this.props.onCancelRaid
                        }, $), r.createElement(P.yb, {
                            padding: {
                                x: 1
                            },
                            color: P.O.Overlay
                        }, Object(d.d)("Cancel", "RaidCreatorButton")))), r.createElement(P.Wa, null, r.createElement(P.z, i.__assign({
                            size: P.D.Small,
                            onClick: this.props.onRaidNow,
                            disabled: this.props.timerPhase.isWaiting
                        }, K), r.createElement(P.Wa, {
                            padding: {
                                x: 1
                            }
                        }, Object(d.d)("Raid Now", "RaidCreatorButton"))))))
                    }, t
                }(r.Component),
                te = function(e, t) {
                    return Object(d.d)("{raiderCount, plural,       one {<x:strong># viewer </x:strong><x:span>is ready to raid</x:span><x:block>{targetDisplayName} in {secondsRemaining}</x:block>}       other {<x:strong># viewers </x:strong><x:span>are ready to raid</x:span><x:block>{targetDisplayName} in {secondsRemaining}</x:block>}}", {
                        "x:block": function(e) {
                            return r.createElement(P.W, {
                                bold: !0
                            }, e)
                        },
                        "x:strong": function(e) {
                            return r.createElement(P.W, {
                                key: "raid-count",
                                type: P.Ob.Strong
                            }, e)
                        },
                        "x:span": function(e) {
                            return r.createElement(P.W, {
                                type: P.Ob.Span
                            }, e)
                        },
                        raiderCount: e.raid.viewerCount,
                        secondsRemaining: Object(X.b)(t, X.a.HumanizedShort),
                        targetDisplayName: e.targetChannel.displayName
                    }, "RaidCreatorMessageTimeLeft")
                },
                ne = function(e) {
                    return Object(d.d)("{raiderCount, plural,       one {<x:strong># viewer </x:strong><x:span>is ready to raid</x:span><x:block>{targetDisplayName} now</x:block>}       other {<x:strong># viewers </x:strong><x:span>are ready to raid</x:span><x:block>{targetDisplayName} now</x:block>}}", {
                        "x:block": function(e) {
                            return r.createElement(P.W, {
                                bold: !0
                            }, e)
                        },
                        "x:strong": function(e) {
                            return r.createElement(P.W, {
                                key: "raid-count",
                                type: P.Ob.Strong
                            }, e)
                        },
                        "x:span": function(e) {
                            return r.createElement(P.W, {
                                type: P.Ob.Span
                            }, e)
                        },
                        raiderCount: e.raid.viewerCount,
                        targetDisplayName: e.targetChannel.displayName
                    }, "RaidCreatorMessageCanRaid")
                },
                ie = function(e) {
                    return r.createElement(Y.a, {
                        raid: e.raid
                    }, function(t) {
                        return r.createElement(ee, i.__assign({}, e, {
                            timerPhase: t
                        }))
                    })
                },
                re = n("nIRf"),
                ae = function(e) {
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
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.countdownTimer = new re.a({
                            onInterval: this.handleIntervalUpdate,
                            intervalMillis: 1e3
                        }), this.countdownTimer.start()
                    }, t.prototype.componentWillUnmount = function() {
                        this.countdownTimer.stop()
                    }, t.prototype.render = function() {
                        return null
                    }, t
                }(r.Component),
                oe = function(e) {
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
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.hasJoined && (this.joinDelayTimerID = setTimeout(this.props.onJoinRaid, Object(p.a)(5e3))), w(this.props.raid, b)
                    }, t.prototype.componentWillUnmount = function() {
                        clearTimeout(this.joinDelayTimerID)
                    }, t.prototype.render = function() {
                        return r.createElement(r.Fragment, null, r.createElement(P.Wa, {
                            justifyContent: P.Va.Between,
                            display: P.X.Flex
                        }, r.createElement(P.Wa, {
                            alignItems: P.f.Center,
                            display: P.X.Flex
                        }, r.createElement(H, {
                            sourceChannel: this.props.sourceChannel,
                            targetChannel: this.props.targetChannel
                        }), r.createElement(P.Wa, {
                            padding: {
                                left: 1
                            }
                        }, se(this.props))), r.createElement(P.Wa, {
                            alignSelf: P.g.Center
                        }, this.renderActionable())), this.props.raid.isGoing && r.createElement(ae, {
                            from: this.props.raid.jitterSeconds,
                            onSecondsUpdate: this.handleSecondsUpdate,
                            onCountdownEnd: this.handleCountdownEnd
                        }))
                    }, t.prototype.renderActionable = function() {
                        return this.props.raid.isGoing && this.props.raid.jitterSeconds > 2 ? r.createElement(Q, {
                            seconds: this.state.remainingJitterSeconds
                        }) : this.props.hasJoined ? r.createElement(ue, {
                            onLeaveRaid: this.handleLeaveRaid
                        }) : r.createElement(de, {
                            onJoinRaid: this.props.onJoinRaid
                        })
                    }, t
                }(r.Component),
                se = function(e) {
                    return Object(d.d)("{viewerCount, plural,     one {<x:block>{sourceDisplayName} is</x:block><x:block>raiding {targetDisplayName}</x:block><x:block>with # raider</x:block>}     other {<x:block>{sourceDisplayName} is</x:block><x:block>raiding {targetDisplayName}</x:block><x:block>with # raiders</x:block>}}", {
                        "x:block": function(e) {
                            return r.createElement(P.W, null, e)
                        },
                        sourceDisplayName: r.createElement(P.W, {
                            type: P.Ob.Strong
                        }, e.sourceChannel.displayName),
                        targetDisplayName: r.createElement(P.W, {
                            type: P.Ob.Strong
                        }, e.targetChannel.displayName),
                        viewerCount: e.raid.viewerCount
                    }, "RaidViewerMessage")
                },
                ue = function(e) {
                    var t = e.onLeaveRaid;
                    return r.createElement(P.z, {
                        size: P.D.Small,
                        type: P.F.Hollow,
                        onClick: t
                    }, r.createElement(P.yb, {
                        padding: {
                            x: 1
                        },
                        color: P.O.Overlay
                    }, Object(d.d)("Leave", "RaidViewerButton")))
                },
                de = function(e) {
                    var t = e.onJoinRaid;
                    return r.createElement(P.z, {
                        size: P.D.Small,
                        onClick: t
                    }, r.createElement(P.Wa, {
                        padding: {
                            x: 1
                        }
                    }, Object(d.d)("Join", "RaidViewerButton")))
                },
                ce = {
                    "data-test-selector": "raid-banner"
                },
                le = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleRaidGo = function(e) {
                            if (t.props.onExpire(t.props.raid), t.hasJoinedCurrentRaid) {
                                var n = S(t.props.history.location, e);
                                n && t.props.history.push(n, y)
                            }
                        }, t.handleJoinRaid = function() {
                            _(t.props.raid, b), t.props.onJoin(t.props.raid)
                        }, t.handleLeaveRaid = function() {
                            R(t.props.raid, b), t.props.onLeave(t.props.raid)
                        }, t.handleRaidNow = function() {
                            ! function(e) {
                                D(v.SpadeEventType.RaidPromptNow, e, b)
                            }(t.props.raid), t.props.onRaidNow(t.props.raid)
                        }, t.handleCancelRaid = function() {
                            C(t.props.raid, b), t.props.onCancel(t.props.raid)
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        if (this.shouldRenderRaidBanner) {
                            var e = this.props.raid,
                                t = this.props.data,
                                n = t.sourceChannel,
                                a = t.targetChannel,
                                o = r.createElement(oe, {
                                    hasJoined: this.hasJoinedCurrentRaid,
                                    onJoinRaid: this.handleJoinRaid,
                                    onLeaveRaid: this.handleLeaveRaid,
                                    onRaidGo: this.handleRaidGo,
                                    raid: e,
                                    sourceChannel: n,
                                    targetChannel: a
                                });
                            return this.isRaidCreator && (o = r.createElement(ie, {
                                onCancelRaid: this.handleCancelRaid,
                                onRaidNow: this.handleRaidNow,
                                onRaidGo: this.handleRaidGo,
                                raid: e,
                                sourceChannel: n,
                                targetChannel: a
                            })), r.createElement(P.yb, i.__assign({
                                background: P.r.AccentAlt2,
                                color: P.O.Overlay,
                                position: P.eb.Absolute,
                                zIndex: P.bc.Above,
                                fullWidth: !0
                            }, ce), r.createElement(P.Wa, {
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
                }(r.Component);
            var pe = Object(B.compose)(Object(s.connect)(function(e) {
                    return {
                        user: Object(l.e)(e)
                    }
                }), u.a, N)(le),
                he = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return this.props.raid ? r.createElement(pe, {
                            raid: this.props.raid,
                            onJoin: this.props.onJoin,
                            onLeave: this.props.onLeave,
                            onExpire: this.props.onExpire,
                            onCancel: this.props.onCancel,
                            onRaidNow: this.props.onRaidNow
                        }) : null
                    }, t
                }(r.Component),
                fe = function(e) {
                    return r.createElement(z.a, {
                        channelID: e.channelID
                    }, function(t) {
                        return r.createElement(he, i.__assign({}, e, t))
                    })
                },
                me = function(e) {
                    return r.createElement(a.a, {
                        name: o.b.RaidNow,
                        channel: e.channelID,
                        assignments: {
                            fallback: function() {
                                return r.createElement(M, i.__assign({}, e))
                            },
                            test: function() {
                                return r.createElement(fe, {
                                    channelID: e.channelID
                                })
                            }
                        }
                    })
                };
            n.d(t, "RaidNotification", function() {
                return me
            }), n.d(t, "RaidNotificationWithPubsub", function() {
                return G
            }), n.d(t, "Props", function() {}), n.d(t, "PublicProps", function() {})
        },
        "7qJZ": function(e, t, n) {
            "use strict";
            n.d(t, "c", function() {
                return r
            }), n.d(t, "a", function() {
                return a
            }), n.d(t, "b", function() {
                return o
            }), n.d(t, "d", function() {
                return s
            });
            var i = n("ll/k"),
                r = "raid_update_v2",
                a = "raid_cancel_v2",
                o = "raid_go_v2",
                s = function() {
                    function e(e, t, n) {
                        this.message = e, this.id = e.raid.id, this.type = e.type, this.creatorID = e.raid.creator_id, this.sourceChannelID = e.raid.source_id, this.targetChannelID = e.raid.target_id, this.viewerCount = e.raid.viewer_count, this.remainingDurationSeconds = e.raid.remaining_duration_seconds, this.targetLogin = e.raid.target_login, this.targetDisplayName = e.raid.target_display_name, this.targetProfileImage = e.raid.target_profile_image, this.storage = t, this.hasJoined = t.hasJoined(this), this.isExpired = t.isExpired(this), this.jitterSeconds = n ? n.jitterSeconds : Object(i.a)(e.raid.transition_jitter_seconds), this.isAnnouncing = e.type === r, this.isGoing = Boolean(n && n.isAnnouncing) && e.type === o, this.hasEnded = e.type === o || e.type === a, n && n.hasEnded && (this.isAnnouncing = !1, this.isGoing = n.isGoing, this.hasEnded = !0)
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
            var i = n("J1ZQ");
            n.d(t, "RaidStorage", function() {
                return i.a
            });
            var r = n("6TSi");
            n.o(r, "RAID_CANCEL_V2") && n.d(t, "RAID_CANCEL_V2", function() {
                return r.RAID_CANCEL_V2
            }), n.o(r, "RAID_GO_V2") && n.d(t, "RAID_GO_V2", function() {
                return r.RAID_GO_V2
            }), n.o(r, "RAID_UPDATE_V2") && n.d(t, "RAID_UPDATE_V2", function() {
                return r.RAID_UPDATE_V2
            }), n.o(r, "RaidV2") && n.d(t, "RaidV2", function() {
                return r.RaidV2
            }), n.o(r, "TimerPhase") && n.d(t, "TimerPhase", function() {
                return r.TimerPhase
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
            var i, r = n("/7QA"),
                a = function() {
                    function e(e) {
                        this.expiredRaids = new Set, this.leftRaids = new Set, e && (this.expiredRaids = e.expiredRaids, this.leftRaids = e.leftRaids)
                    }
                    return Object.defineProperty(e, "instance", {
                        get: function() {
                            return i || (i = new e), i
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
                        var i = this.getStorageData();
                        return delete i[t.id], this.setStorageData(i), new e({
                            expiredRaids: this.expiredRaids,
                            leftRaids: n
                        })
                    }, e.prototype.leaveRaid = function(t) {
                        var n = new Set(this.leftRaids);
                        n.add(t.id);
                        var i = this.getStorageData();
                        return i[t.id] = !0, this.setStorageData(i), new e({
                            expiredRaids: this.expiredRaids,
                            leftRaids: n
                        })
                    }, e.prototype.destroy = function() {
                        i = void 0
                    }, e.prototype.setStorageData = function(e) {
                        r.m.set("raids-left", e)
                    }, e.prototype.getStorageData = function() {
                        return r.m.get("raids-left", {})
                    }, e
                }()
        },
        Kukq: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("q1tI"),
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
                                        return n.raid ? i.__assign({}, n, {
                                            raid: n.raid.withMessage(e)
                                        }) : i.__assign({}, n, {
                                            raid: new s.RaidV2(e, t.raidStorage)
                                        })
                                    });
                                default:
                                    return
                            }
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
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
                }(r.Component);
            n.d(t, "a", function() {
                return d
            })
        },
        Leb6: function(e, t, n) {},
        SUms: function(e, t, n) {},
        Tn5u: function(e, t, n) {
            "use strict";
            var i;
            n.d(t, "a", function() {
                    return r
                }),
                function(e) {
                    e[e.Waiting = 0] = "Waiting", e[e.Ready = 1] = "Ready", e[e.Forced = 2] = "Forced"
                }(i || (i = {}));
            var r = function() {
                function e(e) {
                    this.status = e.status, this.secondsUntilTransition = e.secondsUntilTransition
                }
                return e.waitingFor = function(t) {
                    return new e({
                        status: i.Waiting,
                        secondsUntilTransition: t
                    })
                }, e.readyFor = function(t) {
                    return new e({
                        status: i.Ready,
                        secondsUntilTransition: t
                    })
                }, e.forced = function() {
                    return new e({
                        status: i.Forced,
                        secondsUntilTransition: 1 / 0
                    })
                }, Object.defineProperty(e.prototype, "isWaiting", {
                    get: function() {
                        return this.status === i.Waiting
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "isReady", {
                    get: function() {
                        return this.status === i.Ready
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "isForced", {
                    get: function() {
                        return this.status === i.Forced
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
            var i = n("mrSG"),
                r = n("/7QA"),
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
                return i.__awaiter(this, void 0, void 0, function() {
                    return i.__generator(this, function(n) {
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
                    "X-Device-Id": r.p.session.deviceID
                }
            }
        },
        b6Yk: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            });
            var i = n("mrSG"),
                r = n("/7QA"),
                a = n("kRBY"),
                o = function() {
                    function e() {}
                    return e.get = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, Promise, function() {
                            return i.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, this.request(e, i.__assign({}, t, {
                                            method: "GET"
                                        }), n)];
                                    case 1:
                                        return [2, r.sent()]
                                }
                            })
                        })
                    }, e.getOrThrow = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, Promise, function() {
                            return i.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, i.__assign({}, t, {
                                            method: "GET"
                                        }), n)];
                                    case 1:
                                        return [2, r.sent()]
                                }
                            })
                        })
                    }, e.put = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, Promise, function() {
                            return i.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, this.request(e, i.__assign({}, t, {
                                            method: "PUT"
                                        }), n)];
                                    case 1:
                                        return [2, r.sent()]
                                }
                            })
                        })
                    }, e.putOrThrow = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, Promise, function() {
                            return i.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, i.__assign({}, t, {
                                            method: "PUT"
                                        }), n)];
                                    case 1:
                                        return [2, r.sent()]
                                }
                            })
                        })
                    }, e.post = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, Promise, function() {
                            return i.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, this.request(e, i.__assign({}, t, {
                                            method: "POST"
                                        }), n)];
                                    case 1:
                                        return [2, r.sent()]
                                }
                            })
                        })
                    }, e.postOrThrow = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, Promise, function() {
                            return i.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, i.__assign({}, t, {
                                            method: "POST"
                                        }), n)];
                                    case 1:
                                        return [2, r.sent()]
                                }
                            })
                        })
                    }, e.delete = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, Promise, function() {
                            return i.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, this.request(e, i.__assign({}, t, {
                                            method: "DELETE"
                                        }), n)];
                                    case 1:
                                        return [2, r.sent()]
                                }
                            })
                        })
                    }, e.deleteOrThrow = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, Promise, function() {
                            return i.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, i.__assign({}, t, {
                                            method: "DELETE"
                                        }), n)];
                                    case 1:
                                        return [2, r.sent()]
                                }
                            })
                        })
                    }, e.request = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, Promise, function() {
                            var r, a, o, s;
                            return i.__generator(this, function(u) {
                                switch (u.label) {
                                    case 0:
                                        return t = this.constructOptions(t, n), r = t.headers ? t.headers["Content-Type"] : void 0, a = this.serialize(t.body, r), o = i.__assign({}, t, {
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
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, Promise, function() {
                            var r;
                            return i.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return a.trys.push([0, 2, , 3]), [4, this.request(e, t, n)];
                                    case 1:
                                        if ((r = a.sent()).requestError) throw r.requestError;
                                        if (r.error) throw new Error("Error while sending legacy-api request: " + r.error.status + " - " + r.error.message);
                                        return [2, i.__assign({}, r, {
                                            body: r.body
                                        })];
                                    case 2:
                                        throw a.sent();
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, e.getAPIURL = function(e) {
                        return new URL(e, r.p.config.apiBaseURL)
                    }, e.constructLegacyAPIResponse = function(e) {
                        return i.__awaiter(this, void 0, Promise, function() {
                            var t, n, r, a;
                            return i.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        t = {
                                            status: e.status
                                        }, i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, , 4]), [4, e.json()];
                                    case 2:
                                        return n = i.sent(), e.ok ? t.body = n : t.error = n, [3, 4];
                                    case 3:
                                        return r = i.sent(), e.headers && e.headers.get && (a = e.headers.get("Content-Type")) && -1 !== a.indexOf("application/json") && (t.requestError = r), [3, 4];
                                    case 4:
                                        return [2, t]
                                }
                            })
                        })
                    }, e._fetch = function(e, t) {
                        return void 0 === t && (t = {}), i.__awaiter(this, void 0, Promise, function() {
                            return i.__generator(this, function(n) {
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
                            headers: i.__assign({}, this.getDefaultHeaders(e, t), e.headers)
                        })
                    }, e.serialize = function(e, t) {
                        return "application/json; charset=UTF-8" === t ? JSON.stringify(e) : "string" == typeof e ? e : e && FormData.prototype.isPrototypeOf(e) ? e : e ? (this.logger.error(new Error("Could not serialize this request body for the content-type provided."), "attempting to serialize object with a non-JSON content-type", {
                            contentType: t
                        }), null) : null
                    }, e.getDefaultHeaders = function(e, t) {
                        var n = r.p.store.getState(),
                            i = {
                                Accept: "application/vnd.twitchtv.v" + (t.version || 5) + "+json; charset=UTF-8",
                                "Accept-Language": "en-us",
                                "Client-ID": r.p.config.legacyClientID,
                                "X-Requested-With": "XMLHttpRequest"
                            };
                        e.body && FormData.prototype.isPrototypeOf(e.body) || (i["Content-Type"] = "application/json; charset=UTF-8");
                        var o = Object(a.e)(n);
                        return o && (i.Authorization = "OAuth " + o.authToken, o.legacyCSRFToken && (i["Twitch-Api-Token"] = o.legacyCSRFToken)), t.excludeHeaders && t.excludeHeaders.forEach(function(e) {
                            i[e] && delete i[e]
                        }), i
                    }, e.logger = r.p.logger.withCategory("legacy-api"), e
                }()
        },
        dG1e: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            });
            var i = n("mrSG"),
                r = n("b6Yk");

            function a(e, t) {
                return void 0 === t && (t = {}), i.__awaiter(this, void 0, void 0, function() {
                    var n;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, r.a.request(e.path, e, t)];
                            case 1:
                                return n = i.sent(), [2, new o(n, e)]
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

            function i(e) {
                e && requestAnimationFrame(function() {
                    e.scrollIntoView({
                        behavior: "smooth"
                    })
                })
            }
            n.d(t, "a", function() {
                return i
            })
        },
        eRLD: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("q1tI"),
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
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        var e = this;
                        this.stop = function(e, t) {
                            var n = d.get(e);
                            if (n) n.listeners.add(t);
                            else {
                                var i = new Set([t]),
                                    r = 0,
                                    a = setInterval(function() {
                                        r++, i.forEach(function(e) {
                                            return e(r)
                                        })
                                    }, 1e3);
                                n = {
                                    listeners: i,
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
                }(r.Component);
            n.d(t, "a", function() {
                return l
            })
        },
        "ll/k": function(e, t, n) {
            "use strict";

            function i(e, t) {
                if (void 0 === t && (t = 0), t > e) {
                    var n = t;
                    t = e, e = n
                }
                return t + Math.floor(Math.random() * (e - t + 1))
            }

            function r(e) {
                return e[i(e.length - 1)]
            }

            function a(e, t) {
                for (var n = 0, i = []; n < e;) i.push(t(n)), n += 1;
                return i
            }
            n.d(t, "a", function() {
                return i
            }), n.d(t, "b", function() {
                return r
            }), n.d(t, "c", function() {
                return a
            })
        },
        nIRf: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            });
            var i = function() {
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
                return r
            });
            var i = n("/7QA");

            function r(e) {
                var t = Math.floor(e / 60),
                    n = e % 60;
                return t && n ? Object(i.d)("{hours, number}h{minutes, number}m", {
                    hours: t,
                    minutes: n
                }, "StreamSummaryDuration") : t ? Object(i.d)("{hours, number}h", {
                    hours: t
                }, "StreamSummaryDuration") : Object(i.d)("{minutes, number}m", {
                    minutes: n
                }, "StreamSummaryDuration")
            }
        },
        zyCo: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("q1tI"),
                a = (n("Leb6"), {
                    "data-test-selector": "countdown-fill-width"
                }),
                o = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        var e = this,
                            t = this.props.startPolling || setInterval;
                        this.intervalID = t(function() {
                            return e.forceUpdate()
                        }, 1e3)
                    }, t.prototype.componentWillUnmount = function() {
                        clearInterval(this.intervalID)
                    }, t.prototype.componentDidUpdate = function() {
                        this.props.getRemainingTime() <= 0 && this.props.onCountdownEnd()
                    }, t.prototype.render = function() {
                        var e = this.countdownPercentage + "%";
                        return r.createElement("div", {
                            className: "raid-countdown-bar"
                        }, r.createElement("div", i.__assign({
                            className: "raid-countdown-bar__fill",
                            style: {
                                width: e
                            }
                        }, a)))
                    }, Object.defineProperty(t.prototype, "countdownPercentage", {
                        get: function() {
                            return this.props.getRemainingTime() / this.props.totalCountdownTime * 100
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(r.PureComponent);
            n.d(t, !1, function() {
                return a
            }), n.d(t, "a", function() {
                return o
            })
        }
    }
]);