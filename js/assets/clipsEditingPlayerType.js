(window.webpackJsonp = window.webpackJsonp || []).push([
    [213], {
        "3K1P": function(e, t, n) {
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
                i = h(n("q1tI")),
                a = h(n("17x9")),
                o = n("CJqN"),
                l = n("b/ad"),
                u = n("/reP"),
                s = n("FwvF"),
                c = n("x/3i"),
                f = n("Wlf4"),
                d = n("kMbU"),
                p = n("Xgyk"),
                y = n("A8Fc");

            function h(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            n("a1sr");
            var b = {
                    store: a.default.object.isRequired
                },
                m = {
                    player: a.default.object.isRequired,
                    root: a.default.object.isRequired
                },
                v = function(e) {
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
                    }(t, i.default.Component), r(t, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this.props,
                                t = e.player,
                                n = e.root,
                                r = this.context.store;
                            n.classList.add("player", "theme--dark");
                            var i = new s.ClipsLoadingTimeSpentTracker(r, t),
                                a = new c.ClipsMinutesWatched(r),
                                o = new p.ClipsEditingPlayback(r);
                            this.setState({
                                playerProcesses: [i, a, o]
                            }), t.setLoop(!0), r.dispatch((0, y.trackClipsAppReadyEvent)())
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
                            return i.default.createElement("div", {
                                id: "clips_editing"
                            }, i.default.createElement(d.ClipPlayButtonOverlay, null), i.default.createElement(f.PlayerClickHandlerOverlay, null), i.default.createElement(o.LoadingOverlay, null), i.default.createElement(u.PlayerRoot, {
                                root: this.props.root
                            }, i.default.createElement(l.EditingBottomControls, {
                                constrainSlider: !0,
                                getCurrentTime: this.props.player.getCurrentTime
                            })))
                        }
                    }]), t
                }();
            t.default = v, v.contextTypes = b, v.propTypes = m
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
                i = n("SaYp"),
                a = function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }(n("3OWR")),
                o = n("uAOA"),
                l = n("4b1H");
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
                            i = t.playback,
                            a = t.quality;
                        n.ended && (this.videoPlayedOnceThrough = !0);
                        var o = n.hasPlayed && n.isLoading && !i.isLoading,
                            l = n.hasPlayed && a.selected !== r.selected;
                        this.videoPlayedOnceThrough || !l && !o ? this.bufferEmptyStartTime && !n.isLoading && this.trackBufferRefill() : l ? this.trackBufferEmpty() : o && this.trackBufferEmptyIfStalled()
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
                        this.bufferEmptyStartTime = e, this.store.getState().analyticsTracker.clipsTrackEvent(i.TRACKING_CLIPS_QOS, this.bufferTrackingProperties(i.TRACKING_CLIPS_BUFFER_EMPTY))
                    }
                }, {
                    key: "trackBufferRefill",
                    value: function() {
                        this.store.dispatch((0, l.play)());
                        var e = (this.currentTime() - this.bufferEmptyStartTime) / 1e3;
                        this.store.getState().analyticsTracker.clipsTrackEvent(i.TRACKING_CLIPS_QOS, (0, a.default)({}, this.bufferTrackingProperties(i.TRACKING_CLIPS_BUFFER_REFILL), {
                            buffering_time: e
                        })), this.bufferEmptyStartTime = null
                    }
                }, {
                    key: "bufferTrackingProperties",
                    value: function(e) {
                        return {
                            backend: i.TRACKING_LOCATION_CLIPS,
                            vod_format: i.TRACKING_CLIP_FORMAT,
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
                i = n("q1tI"),
                a = c(i),
                o = c(n("17x9")),
                l = n("/MKj"),
                u = n("4b1H"),
                s = n("KE4D");

            function c(e) {
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
                d = t.mapStateToProps = function(e) {
                    return {
                        isPaused: e.playback.paused
                    }
                },
                p = t.mapDispatchToProps = function(e) {
                    return {
                        playVideo: function() {
                            e((0, u.play)())
                        },
                        pauseVideo: function() {
                            e((0, u.pause)())
                        },
                        toggleFullScreen: function() {
                            e((0, s.toggleFullScreen)())
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
                    }(t, i.Component), r(t, [{
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
                            return a.default.createElement("div", {
                                className: "player-overlay",
                                onClick: this.onVideoClick,
                                onDoubleClick: this.props.toggleFullScreen,
                                role: "presentation"
                            })
                        }
                    }]), t
                }();
            y.propTypes = f;
            t.PlayerClickHandlerOverlay = (0, l.connect)(d, p)(y)
        },
        Xgyk: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ClipsEditingPlayback = void 0;
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
                i = n("uAOA"),
                a = n("4b1H"),
                o = function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }(n("DzJC"));
            var l = 100;
            t.ClipsEditingPlayback = function(e) {
                function t(e) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    var n = function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                    n.store = e, n.handleTimeUpdate = n.handleTimeUpdate.bind(n), n.throttledSeek = (0, o.default)(n.seek.bind(n), l), n.recentSeekTime = null, n.subscribe(e, ["playback", "clipsEditing"], function(e, t) {
                        n.handleTimeUpdate(e, t)
                    });
                    var r = e.getState();
                    return n.handleTimeUpdate(r, r), n
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
                }(t, i.UIStateSubscriber), r(t, [{
                    key: "handleTimeUpdate",
                    value: function(e, t) {
                        var n = e.playback,
                            r = e.clipsEditing,
                            i = n.currentTime < r.startOffset || n.currentTime > r.endOffset,
                            a = r.startOffset !== t.clipsEditing.startOffset;
                        n.hasPlayed && (i || a) && this.throttledSeek(r.startOffset)
                    }
                }, {
                    key: "seek",
                    value: function(e) {
                        var t = this;
                        this.recentSeekTime !== e && (this.recentSeekTime = e, this.timerId && clearTimeout(this.timerId), this.timerId = setTimeout(function() {
                            t.recentSeekTime = null
                        }, 500), this.store.dispatch((0, a.seek)(e)))
                    }
                }]), t
            }()
        },
        Y4K0: function(e, t, n) {},
        YwTH: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.EditingSeekbar = t.EditingSeekbarComponent = t.ANIMATION_SKIP_THRESHOLD = t.sliderClassNames = t.mapDispatchToProps = t.mapStateToProps = void 0;
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
                i = k(n("puQj")),
                a = k(n("TSYQ")),
                o = k(n("ijCd")),
                l = k(n("17x9")),
                u = k(n("q1tI")),
                s = k(n("i8i4")),
                c = n("/MKj"),
                f = n("f0FL"),
                d = n("iSDK"),
                p = n("VPTj"),
                y = n("4b1H"),
                h = n("TaTA"),
                b = n("H/LY"),
                m = n("Bmgm"),
                v = n("uC+K");

            function k(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var T = {
                    currentTime: l.default.number,
                    duration: l.default.number,
                    getCurrentTime: l.default.func,
                    seek: l.default.func.isRequired,
                    thumbnailPreviews: l.default.object,
                    isClipsPlayerType: l.default.bool.isRequired,
                    startOffset: l.default.number,
                    endOffset: l.default.number,
                    windowObj: l.default.object.isRequired,
                    isPostEdit: l.default.bool.isRequired,
                    constrainSlider: l.default.bool
                },
                O = t.mapStateToProps = function(e) {
                    var t = e.env,
                        n = e.playback,
                        r = e.window,
                        i = e.clipsEditing,
                        a = e.timelineMetadata;
                    return {
                        windowObj: r,
                        currentTime: n.currentTime,
                        duration: n.duration,
                        startOffset: i.startOffset,
                        endOffset: i.endOffset,
                        isPostEdit: i.isPostEdit,
                        thumbnailPreviews: a.previews,
                        isClipsPlayerType: (0, o.default)(v.CLIPS_PLAYER_TYPES, t.playerType)
                    }
                },
                S = t.mapDispatchToProps = function(e) {
                    return {
                        seek: function(t) {
                            e((0, y.seek)(t)), e((0, p.setLoading)(!0))
                        }
                    }
                },
                P = t.sliderClassNames = {
                    slider: "player-slider js-player-slider",
                    sliderThumb: "player-slider__thumb"
                },
                g = (t.ANIMATION_SKIP_THRESHOLD = .05, t.EditingSeekbarComponent = function(e) {
                    function t() {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t);
                        var e = function(e, t) {
                            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || "object" != typeof t && "function" != typeof t ? e : t
                        }(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
                        return e.state = {
                            isDragging: !1,
                            mouseMoveClientX: 0,
                            mouseMoveOnSeekbar: !1,
                            showSeekbar: !1
                        }, e.$seekbar = null, e.handleDragStart = e.handleDragStart.bind(e), e.handleDragStop = e.handleDragStop.bind(e), e.handleClick = e.handleClick.bind(e), e.handleMouseMove = e.handleMouseMove.bind(e), e.handleMouseOut = e.handleMouseOut.bind(e), e.seekbarRefHandler = e.seekbarRefHandler.bind(e), e.seekToPosition = e.seekToPosition.bind(e), e
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
                    }(t, u.default.Component), r(t, [{
                        key: "componentWillReceiveProps",
                        value: function(e) {
                            var t = this;
                            !this.state.showSeekbar && e.startOffset >= 0 && setTimeout(function() {
                                t.setState({
                                    showSeekbar: !0
                                })
                            }, 200)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.currentTime,
                                n = e.duration,
                                r = e.isPostEdit,
                                i = e.isClipsPlayerType,
                                o = !r && this.state.showSeekbar,
                                l = (0, a.default)("player-seek-editing", {
                                    "player-seek-editing__hide": !o
                                }),
                                s = {
                                    currentTime: t,
                                    duration: n
                                };
                            return u.default.createElement("div", {
                                className: "player-seek " + l
                            }, i ? u.default.createElement(f.EditingSeekbarTimeDisplay, s) : u.default.createElement(b.SeekbarTimeDisplay, s), this.createSliderComponent())
                        }
                    }, {
                        key: "createSliderComponent",
                        value: function() {
                            var e = this.props,
                                t = e.constrainSlider,
                                n = e.duration,
                                r = e.getCurrentTime,
                                i = e.windowObj,
                                a = e.startOffset,
                                o = e.endOffset,
                                l = null;
                            this.state.mouseMoveOnSeekbar && n > 0 && (l = this.createSeekbarPreviews());
                            var s = void 0,
                                c = void 0;
                            return t && (s = a, c = o), u.default.createElement(d.Slider, {
                                classNames: P,
                                max: n,
                                min: 0,
                                onClick: this.handleClick,
                                onMouseMove: this.handleMouseMove,
                                onMouseOut: this.handleMouseOut,
                                onBlur: this.handleMouseOut,
                                ref: this.seekbarRefHandler,
                                dragHandlers: {
                                    onStart: this.handleDragStart,
                                    onStop: this.handleDragStop
                                },
                                windowObj: i,
                                getOptimizedValue: r,
                                valueOptimizationEnabled: !0,
                                afterSliderChildren: [this.getEditingOverlay(), l],
                                alwaysShowThumb: !0,
                                selectionAreaMinValue: s,
                                selectionAreaMaxValue: c
                            })
                        }
                    }, {
                        key: "getEditingOverlay",
                        value: function() {
                            if (void 0 === this.props.startOffset || void 0 === this.props.endOffset) return null;
                            var e = this.props.startOffset / this.props.duration,
                                t = (this.props.endOffset - this.props.startOffset) / this.props.duration,
                                n = {};
                            return n.left = 100 * e + "%", n.width = 100 * t + "%", u.default.createElement("div", {
                                key: "slider-overlay",
                                className: "editing-player-seek-overlay",
                                style: n
                            })
                        }
                    }, {
                        key: "getSeekbarDimensions",
                        value: function() {
                            var e = 0,
                                t = 0;
                            if (this.$seekbar) {
                                var n = this.$seekbar.getBoundingClientRect();
                                e = n.width, t = n.left
                            }
                            return {
                                seekbarWidth: e,
                                seekbarLeftOffset: t
                            }
                        }
                    }, {
                        key: "createSeekbarPreviews",
                        value: function() {
                            var e = this.state.mouseMoveClientX,
                                t = this.props,
                                n = t.duration,
                                r = t.thumbnailPreviews,
                                a = t.isClipsPlayerType,
                                o = this.getSeekbarDimensions(),
                                l = o.seekbarWidth,
                                s = o.seekbarLeftOffset,
                                c = i.default.msedge || i.default.msie;
                            return r.count > 0 && !c ? u.default.createElement(m.ThumbnailPreviews, {
                                key: "ThumbnailPreviews",
                                hideThumbnailPreview: this.state.hideThumbnailPreview,
                                duration: n,
                                previews: r,
                                mouseMoveClientX: e,
                                seekbarLeftOffset: s,
                                seekbarWidth: l
                            }) : u.default.createElement(h.TimestampPreview, {
                                key: "TimestampPreview",
                                duration: n,
                                mouseMoveClientX: e,
                                seekbarLeftOffset: s,
                                seekbarWidth: l,
                                shouldCleanString: a
                            })
                        }
                    }, {
                        key: "seekbarRefHandler",
                        value: function(e) {
                            this.$seekbar = s.default.findDOMNode(e)
                        }
                    }, {
                        key: "handleClick",
                        value: function(e) {
                            this.state.isDragging && this.seekToPosition(e)
                        }
                    }, {
                        key: "handleMouseMove",
                        value: function(e) {
                            this.setState({
                                mouseMoveOnSeekbar: !0,
                                mouseMoveClientX: e.clientX
                            })
                        }
                    }, {
                        key: "handleMouseOut",
                        value: function() {
                            var e = this;
                            this.setState({
                                hideThumbnailPreview: !0
                            });
                            setTimeout(function() {
                                e.state.hideThumbnailPreview && e.setState({
                                    mouseMoveOnSeekbar: !1,
                                    mouseMoveClientX: 0,
                                    hideThumbnailPreview: !1
                                })
                            }, 750)
                        }
                    }, {
                        key: "handleDragStart",
                        value: function() {
                            this.setState({
                                isDragging: !0
                            })
                        }
                    }, {
                        key: "handleDragStop",
                        value: function(e) {
                            this.setState({
                                isDragging: !1
                            }), this.seekToPosition(e)
                        }
                    }, {
                        key: "seekToPosition",
                        value: function(e) {
                            this.props.seek(e)
                        }
                    }]), t
                }());
            g.propTypes = T;
            t.EditingSeekbar = (0, c.connect)(O, S)(g)
        },
        a1sr: function(e, t, n) {},
        "b/ad": function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.EditingBottomControls = t.CONTAINER_CLASSES = void 0;
            var r = s(n("q1tI")),
                i = s(n("17x9")),
                a = n("mawI"),
                o = n("nWaZ"),
                l = s(n("TSYQ")),
                u = n("YwTH");

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            n("Y4K0");
            var c = {
                    getCurrentTime: i.default.func.isRequired,
                    constrainSlider: i.default.bool
                },
                f = t.CONTAINER_CLASSES = (0, l.default)("pl-controls-bottom", "pl-flex", "qa-controls-bottom");
            (t.EditingBottomControls = function(e) {
                var t = e.constrainSlider,
                    n = e.getCurrentTime;
                return r.default.createElement("div", {
                    className: f
                }, r.default.createElement(u.EditingSeekbar, {
                    getCurrentTime: n,
                    constrainSlider: t
                }), r.default.createElement(a.BottomLeftControls, null), r.default.createElement(o.BottomRightControls, null))
            }).propTypes = c
        },
        kMbU: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ClipPlayButtonOverlay = t.mapStateToProps = void 0, t.ClipPlayButtonOverlayContainer = f;
            var r = u(n("q1tI")),
                i = u(n("17x9")),
                a = n("/MKj"),
                o = n("4b1H"),
                l = n("xkJG");

            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var s = {
                    showOverlay: i.default.bool.isRequired,
                    play: i.default.func.isRequired
                },
                c = t.mapStateToProps = function(e) {
                    var t = e.playback;
                    return {
                        showOverlay: !t.hasPlayed && !t.isLoading && !t.autoplay
                    }
                };

            function f(e) {
                var t = e.showOverlay,
                    n = e.play;
                return t ? r.default.createElement(l.PlayButtonOverlay, {
                    onClick: n
                }) : null
            }
            f.propTypes = s;
            t.ClipPlayButtonOverlay = (0, a.connect)(c, function(e) {
                return {
                    play: function() {
                        e((0, o.play)())
                    }
                }
            })(f)
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
                i = n("SaYp"),
                a = n("ikhW"),
                o = n("uAOA");
            var l = t.SECONDS_TO_MILLIS_MULT = 1e3;
            t.ClipsMinutesWatched = function(e) {
                function t(e) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    var n = function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                    return n.store = e, n.trackClipsMinuteWatched = n.trackClipsMinuteWatched.bind(n), n.handlePlaybackChange = n.handlePlaybackChange.bind(n), n.minWatchedEmitter = new a.MinutesWatched, n.minWatchedEmitter.on(a.EVENT_MINUTE, n.trackClipsMinuteWatched), n.subscribe(e, ["playback"], function(e) {
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
                        this.store.getState().analyticsTracker.clipsTrackEvent(i.TRACKING_CLIPS_MINUTE, {
                            minutes_logged: this.minWatchedEmitter.totalMinutes,
                            seconds_offset: this.minWatchedEmitter.initialDelay / l
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