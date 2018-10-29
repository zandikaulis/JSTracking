(window.webpackJsonp = window.webpackJsonp || []).push([
    [196], {
        "/PkA": function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ClipKeyboardShortcutsOverlay = t.ClipKeyboardShortcutsOverlayComponent = void 0;
            var r = u(n("q1tI")),
                a = u(n("17x9")),
                l = n("9kay"),
                o = n("h/Ds"),
                i = n("eiBJ");

            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var c = {
                    closeShortcutsPanel: a.default.func.isRequired,
                    t: a.default.func.isRequired
                },
                s = t.ClipKeyboardShortcutsOverlayComponent = function(e) {
                    var t = e.closeShortcutsPanel,
                        n = e.t;
                    return r.default.createElement("div", {
                        className: "pl-panel-overlay pl-flex"
                    }, r.default.createElement("div", {
                        className: "pl-panel__header pl-flex pl-flex--verticalCenter full-width"
                    }, r.default.createElement("div", {
                        className: "pl-panel__header-title pl-flex__item--grow"
                    }, n("Keyboard Shortcuts")), r.default.createElement("div", {
                        className: "pl-panel__header-action pl-flex__item--noGrow"
                    }, r.default.createElement("button", {
                        className: "pl-button pl-button--text pl-button--icon-only pd-0",
                        onClick: t
                    }, r.default.createElement("figure", {
                        className: "pl-panel__icon"
                    }, r.default.createElement(o.CloseButtonSVG, null))))), r.default.createElement("div", {
                        className: "pl-panel__body full-width"
                    }, r.default.createElement(i.ShortcutRow, {
                        label: n("Pause/Play"),
                        value: n("Space")
                    }), r.default.createElement(i.ShortcutRow, {
                        label: n("Back/Forward {{count}} second", {
                            count: 2
                        }),
                        value: "←",
                        valueAlt: "→"
                    }), r.default.createElement(i.ShortcutRow, {
                        label: n("Back/Forward 1 frame"),
                        value: "[",
                        valueAlt: "]"
                    }), r.default.createElement(i.ShortcutRow, {
                        label: n("Slow down/Speed up"),
                        value: "<",
                        valueAlt: ">"
                    }), r.default.createElement(i.ShortcutRow, {
                        label: n("Toggle Fullscreen"),
                        value: "f"
                    }), r.default.createElement(i.ShortcutRow, {
                        label: n("Exit Fullscreen"),
                        value: n("Esc")
                    }), r.default.createElement(i.ShortcutRow, {
                        label: n("Show this menu"),
                        value: "?"
                    })))
                };
            s.propTypes = c;
            t.ClipKeyboardShortcutsOverlay = (0, l.translate)()(s)
        },
        "5Kqy": function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }
                    return function(t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }(),
                a = b(n("q1tI")),
                l = b(n("17x9")),
                o = n("CJqN"),
                i = n("inRc"),
                u = n("/reP"),
                c = n("2gyh"),
                s = n("Wlf4"),
                f = n("FwvF"),
                p = n("x/3i"),
                d = n("kMbU"),
                y = n("olXp"),
                h = n("A8Fc"),
                v = n("IPyt");

            function b(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            n("a1sr");
            var m = {
                    store: l.default.object.isRequired
                },
                _ = {
                    player: l.default.object.isRequired,
                    root: l.default.object.isRequired
                },
                C = function(e) {
                    function t() {
                        return function(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                            }(this, t),
                            function(e, t) {
                                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return !t || "object" != typeof t && "function" != typeof t ? e : t
                            }(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                    }
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                    }(t, a.default.Component), r(t, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this.props,
                                t = e.player,
                                n = e.root,
                                r = this.context.store;
                            n.classList.add("player", "theme--dark");
                            var a = new f.ClipsLoadingTimeSpentTracker(r, t),
                                l = new p.ClipsMinutesWatched(r);
                            this.setState({
                                playerProcesses: [a, l]
                            }), t.setLoop(!0), r.dispatch((0, h.trackClipsAppReadyEvent)())
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.state.playerProcesses.forEach(function(e) {
                                e.destroy()
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return a.default.createElement("div", {
                                id: "clips_viewing"
                            }, a.default.createElement(d.ClipPlayButtonOverlay, null), a.default.createElement(s.PlayerClickHandlerOverlay, null), a.default.createElement(y.ClipKeyboardShortcutsOverlayContainer, null), a.default.createElement(v.AutomatedMuteOverlay, null), a.default.createElement(o.LoadingOverlay, null), a.default.createElement(u.PlayerRoot, {
                                root: this.props.root
                            }, a.default.createElement(c.ShowOnHover, null, a.default.createElement(i.PlayerControls, {
                                showTopControls: !1,
                                showBottomControls: !0,
                                player: this.props.player
                            }))))
                        }
                    }]), t
                }();
            t.default = C, C.contextTypes = m, C.propTypes = _
        },
        FwvF: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ClipsLoadingTimeSpentTracker = t.CAN_PLAY_CHECK_THRESHOLD = t.SECONDS_TO_MILLIS_MULT = void 0;
            var r = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }
                    return function(t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }(),
                a = n("SaYp"),
                l = function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }(n("3OWR")),
                o = n("uAOA"),
                i = n("4b1H");
            t.SECONDS_TO_MILLIS_MULT = 1e3;
            var u = t.CAN_PLAY_CHECK_THRESHOLD = 250;
            t.ClipsLoadingTimeSpentTracker = function(e) {
                function t(e, n) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    var r = function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                    return r.store = e, r.bufferEmptyStartTime = null, r.videoPlayedOnceThrough = !1, r.lastCanPlayTime = 0, r.canPlayRefill = r.canPlayRefill.bind(r), r.canPlayFiredRecently = r.canPlayFiredRecently.bind(r), r.trackBufferRefill = r.trackBufferRefill.bind(r), r.trackBufferEmpty = r.trackBufferEmpty.bind(r), r.handleStateChange = r.handleStateChange.bind(r), n.addEventListener("canplay", r.canPlayRefill), n.addEventListener("canplaythrough", r.canPlayRefill), r.player = n, r.subscribe(e, ["playback", "quality"], function(e, t) {
                        r.handleStateChange(e, t)
                    }), r
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, o.UIStateSubscriber), r(t, [{
                    key: "handleStateChange",
                    value: function(e, t) {
                        var n = e.playback,
                            r = e.quality,
                            a = t.playback,
                            l = t.quality;
                        n.ended && (this.videoPlayedOnceThrough = !0);
                        var o = n.hasPlayed && n.isLoading && !a.isLoading,
                            i = n.hasPlayed && l.selected !== r.selected;
                        this.videoPlayedOnceThrough || !i && !o ? this.bufferEmptyStartTime && !n.isLoading && this.trackBufferRefill() : i ? this.trackBufferEmpty() : o && this.trackBufferEmptyIfStalled()
                    }
                }, {
                    key: "trackBufferEmptyIfStalled",
                    value: function() {
                        var e = this,
                            t = this.currentTime();
                        setTimeout(function() {
                            e.canPlayFiredRecently() || e.trackBufferEmpty(t)
                        }, u)
                    }
                }, {
                    key: "canPlayFiredRecently",
                    value: function() {
                        return Date.now() - this.lastCanPlayTime < u
                    }
                }, {
                    key: "canPlayRefill",
                    value: function() {
                        this.lastCanPlayTime = Date.now(), this.bufferEmptyStartTime && this.trackBufferRefill()
                    }
                }, {
                    key: "trackBufferEmpty",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.currentTime();
                        this.bufferEmptyStartTime = e, this.store.getState().analyticsTracker.clipsTrackEvent(a.TRACKING_CLIPS_QOS, this.bufferTrackingProperties(a.TRACKING_CLIPS_BUFFER_EMPTY))
                    }
                }, {
                    key: "trackBufferRefill",
                    value: function() {
                        this.store.dispatch((0, i.play)());
                        var e = (this.currentTime() - this.bufferEmptyStartTime) / 1e3;
                        this.store.getState().analyticsTracker.clipsTrackEvent(a.TRACKING_CLIPS_QOS, (0, l.default)({}, this.bufferTrackingProperties(a.TRACKING_CLIPS_BUFFER_REFILL), {
                            buffering_time: e
                        })), this.bufferEmptyStartTime = null
                    }
                }, {
                    key: "bufferTrackingProperties",
                    value: function(e) {
                        return {
                            backend: a.TRACKING_LOCATION_CLIPS,
                            vod_format: a.TRACKING_CLIP_FORMAT,
                            type: e
                        }
                    }
                }, {
                    key: "currentTime",
                    value: function() {
                        return (new Date).getTime()
                    }
                }]), t
            }()
        },
        Wlf4: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.PlayerClickHandlerOverlay = t.PlayerClickHandlerOverlayContainer = t.mapDispatchToProps = t.mapStateToProps = void 0;
            var r = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }
                    return function(t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }(),
                a = n("q1tI"),
                l = s(a),
                o = s(n("17x9")),
                i = n("/MKj"),
                u = n("4b1H"),
                c = n("KE4D");

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var f = {
                    isPaused: o.default.bool.isRequired,
                    playVideo: o.default.func.isRequired,
                    pauseVideo: o.default.func.isRequired,
                    toggleFullScreen: o.default.func.isRequired
                },
                p = t.mapStateToProps = function(e) {
                    return {
                        isPaused: e.playback.paused
                    }
                },
                d = t.mapDispatchToProps = function(e) {
                    return {
                        playVideo: function() {
                            e((0, u.play)())
                        },
                        pauseVideo: function() {
                            e((0, u.pause)())
                        },
                        toggleFullScreen: function() {
                            e((0, c.toggleFullScreen)())
                        }
                    }
                },
                y = t.PlayerClickHandlerOverlayContainer = function(e) {
                    function t() {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t);
                        var e = function(e, t) {
                            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || "object" != typeof t && "function" != typeof t ? e : t
                        }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                        return e.onVideoClick = e.onVideoClick.bind(e), e
                    }
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                    }(t, a.Component), r(t, [{
                        key: "onVideoClick",
                        value: function() {
                            var e = this.props,
                                t = e.isPaused,
                                n = e.playVideo,
                                r = e.pauseVideo;
                            t ? n() : r()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return l.default.createElement("div", {
                                className: "player-overlay",
                                onClick: this.onVideoClick,
                                onDoubleClick: this.props.toggleFullScreen,
                                role: "presentation"
                            })
                        }
                    }]), t
                }();
            y.propTypes = f;
            t.PlayerClickHandlerOverlay = (0, i.connect)(p, d)(y)
        },
        a1sr: function(e, t, n) {},
        eiBJ: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ShortcutRow = void 0;
            var r = l(n("q1tI")),
                a = l(n("17x9"));

            function l(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var o = {
                label: a.default.string.isRequired,
                value: a.default.string.isRequired,
                valueAlt: a.default.string
            };
            (t.ShortcutRow = function(e) {
                var t = e.label,
                    n = e.value,
                    a = e.valueAlt,
                    l = n;
                return a && (l = r.default.createElement("span", null, n, r.default.createElement("span", {
                    className: "pl-panel__row-muted-value"
                }, "/"), a)), r.default.createElement("div", {
                    className: "pl-panel__body-row pl-flex flex--verticalCenter"
                }, r.default.createElement("div", {
                    className: "pl-panel__row-key pl-flex__item--grow"
                }, t), r.default.createElement("div", {
                    className: "pl-panel__row-value pl-flex__item--noGrow"
                }, l))
            }).propTypes = o
        },
        "h/Ds": function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CloseButtonSVG = void 0;
            var r = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(n("q1tI"));
            t.CloseButtonSVG = function() {
                return r.default.createElement("svg", {
                    width: "12",
                    height: "12",
                    viewBox: "0 0 12 12"
                }, r.default.createElement("path", {
                    d: "M11.657 1.757L7.414 6l4.243 4.242-1.415 1.415L6 7.414l-4.243 4.243-1.414-1.415L4.586 6 .343 1.757 1.757.343 6 4.586 10.242.343l1.415 1.414z",
                    fillRule: "evenodd"
                }))
            }
        },
        kMbU: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ClipPlayButtonOverlay = t.mapStateToProps = void 0, t.ClipPlayButtonOverlayContainer = f;
            var r = u(n("q1tI")),
                a = u(n("17x9")),
                l = n("/MKj"),
                o = n("4b1H"),
                i = n("xkJG");

            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var c = {
                    showOverlay: a.default.bool.isRequired,
                    play: a.default.func.isRequired
                },
                s = t.mapStateToProps = function(e) {
                    var t = e.playback;
                    return {
                        showOverlay: !t.hasPlayed && !t.isLoading && !t.autoplay
                    }
                };

            function f(e) {
                var t = e.showOverlay,
                    n = e.play;
                return t ? r.default.createElement(i.PlayButtonOverlay, {
                    onClick: n
                }) : null
            }
            f.propTypes = c;
            t.ClipPlayButtonOverlay = (0, l.connect)(s, function(e) {
                return {
                    play: function() {
                        e((0, o.play)())
                    }
                }
            })(f)
        },
        olXp: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ClipKeyboardShortcutsOverlayContainer = t.ClipKeyboardShortcutsOverlayContainerComponent = void 0;
            var r = u(n("q1tI")),
                a = u(n("17x9")),
                l = n("/MKj"),
                o = n("/PkA"),
                i = n("uNCh");

            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var c = {
                    closeShortcutsPanel: a.default.func.isRequired,
                    shouldShowShortcutsPanel: a.default.bool.isRequired
                },
                s = t.ClipKeyboardShortcutsOverlayContainerComponent = function(e) {
                    return e.shouldShowShortcutsPanel ? r.default.createElement(o.ClipKeyboardShortcutsOverlay, e) : null
                };
            s.propTypes = c;
            t.ClipKeyboardShortcutsOverlayContainer = (0, l.connect)(function(e) {
                return {
                    shouldShowShortcutsPanel: e.screen[0] === i.CLIP_SHORTCUT_SCREEN
                }
            }, function(e) {
                return {
                    closeShortcutsPanel: function() {
                        e((0, i.popScreen)())
                    }
                }
            })(s)
        },
        "x/3i": function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ClipsMinutesWatched = t.SECONDS_TO_MILLIS_MULT = void 0;
            var r = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }
                    return function(t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }(),
                a = n("SaYp"),
                l = n("ikhW"),
                o = n("uAOA");
            var i = t.SECONDS_TO_MILLIS_MULT = 1e3;
            t.ClipsMinutesWatched = function(e) {
                function t(e) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    var n = function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                    return n.store = e, n.trackClipsMinuteWatched = n.trackClipsMinuteWatched.bind(n), n.handlePlaybackChange = n.handlePlaybackChange.bind(n), n.minWatchedEmitter = new l.MinutesWatched, n.minWatchedEmitter.on(l.EVENT_MINUTE, n.trackClipsMinuteWatched), n.subscribe(e, ["playback"], function(e) {
                        var t = e.playback;
                        n.handlePlaybackChange(t)
                    }), n.handlePlaybackChange(e.getState()), n
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, o.UIStateSubscriber), r(t, [{
                    key: "handlePlaybackChange",
                    value: function(e) {
                        var t = this.minWatchedEmitter.isCurrentlyTracking();
                        !t && e.playing ? this.minWatchedEmitter.start() : t && e.paused && this.minWatchedEmitter.stop()
                    }
                }, {
                    key: "trackClipsMinuteWatched",
                    value: function() {
                        this.store.getState().analyticsTracker.clipsTrackEvent(a.TRACKING_CLIPS_MINUTE, {
                            minutes_logged: this.minWatchedEmitter.totalMinutes,
                            seconds_offset: this.minWatchedEmitter.initialDelay / i
                        })
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.minWatchedEmitter.destroy()
                    }
                }]), t
            }()
        }
    }
]);