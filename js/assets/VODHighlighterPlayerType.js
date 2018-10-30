(window.webpackJsonp = window.webpackJsonp || []).push([
    [193], {
        SVNA: function(e, t, n) {
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
                i = f(n("q1tI")),
                a = f(n("17x9")),
                o = n("CJqN"),
                s = n("b/ad"),
                l = n("/reP"),
                u = n("A8Fc"),
                d = n("Lnk8");

            function f(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var c = {
                    store: a.default.object.isRequired
                },
                p = {
                    player: a.default.object.isRequired,
                    root: a.default.object.isRequired
                },
                h = function(e) {
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
                            n.classList.add("player", "theme--dark"), t.setLoop(!0), r.dispatch((0, u.trackClipsAppReadyEvent)())
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return i.default.createElement("div", {
                                id: "vod_editing"
                            }, i.default.createElement(d.PlayButtonOverlay, null), i.default.createElement(o.LoadingOverlay, null), i.default.createElement(l.PlayerRoot, {
                                root: this.props.root
                            }, i.default.createElement(s.EditingBottomControls, {
                                constrainSlider: !1,
                                getCurrentTime: this.props.player.getCurrentTime
                            })))
                        }
                    }]), t
                }();
            t.default = h, h.contextTypes = c, h.propTypes = p
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
                s = k(n("17x9")),
                l = k(n("q1tI")),
                u = k(n("i8i4")),
                d = n("/MKj"),
                f = n("f0FL"),
                c = n("iSDK"),
                p = n("VPTj"),
                h = n("4b1H"),
                b = n("TaTA"),
                m = n("H/LY"),
                v = n("Bmgm"),
                y = n("uC+K");

            function k(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var S = {
                    currentTime: s.default.number,
                    duration: s.default.number,
                    getCurrentTime: s.default.func,
                    seek: s.default.func.isRequired,
                    thumbnailPreviews: s.default.object,
                    isClipsPlayerType: s.default.bool.isRequired,
                    startOffset: s.default.number,
                    endOffset: s.default.number,
                    windowObj: s.default.object.isRequired,
                    isPostEdit: s.default.bool.isRequired,
                    constrainSlider: s.default.bool
                },
                g = t.mapStateToProps = function(e) {
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
                        isClipsPlayerType: (0, o.default)(y.CLIPS_PLAYER_TYPES, t.playerType)
                    }
                },
                O = t.mapDispatchToProps = function(e) {
                    return {
                        seek: function(t) {
                            e((0, h.seek)(t)), e((0, p.setLoading)(!0))
                        }
                    }
                },
                T = t.sliderClassNames = {
                    slider: "player-slider js-player-slider",
                    sliderThumb: "player-slider__thumb"
                },
                w = (t.ANIMATION_SKIP_THRESHOLD = .05, t.EditingSeekbarComponent = function(e) {
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
                    }(t, l.default.Component), r(t, [{
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
                                s = (0, a.default)("player-seek-editing", {
                                    "player-seek-editing__hide": !o
                                }),
                                u = {
                                    currentTime: t,
                                    duration: n
                                };
                            return l.default.createElement("div", {
                                className: "player-seek " + s
                            }, i ? l.default.createElement(f.EditingSeekbarTimeDisplay, u) : l.default.createElement(m.SeekbarTimeDisplay, u), this.createSliderComponent())
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
                                s = null;
                            this.state.mouseMoveOnSeekbar && n > 0 && (s = this.createSeekbarPreviews());
                            var u = void 0,
                                d = void 0;
                            return t && (u = a, d = o), l.default.createElement(c.Slider, {
                                classNames: T,
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
                                afterSliderChildren: [this.getEditingOverlay(), s],
                                alwaysShowThumb: !0,
                                selectionAreaMinValue: u,
                                selectionAreaMaxValue: d
                            })
                        }
                    }, {
                        key: "getEditingOverlay",
                        value: function() {
                            if (void 0 === this.props.startOffset || void 0 === this.props.endOffset) return null;
                            var e = this.props.startOffset / this.props.duration,
                                t = (this.props.endOffset - this.props.startOffset) / this.props.duration,
                                n = {};
                            return n.left = 100 * e + "%", n.width = 100 * t + "%", l.default.createElement("div", {
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
                                s = o.seekbarWidth,
                                u = o.seekbarLeftOffset,
                                d = i.default.msedge || i.default.msie;
                            return r.count > 0 && !d ? l.default.createElement(v.ThumbnailPreviews, {
                                key: "ThumbnailPreviews",
                                hideThumbnailPreview: this.state.hideThumbnailPreview,
                                duration: n,
                                previews: r,
                                mouseMoveClientX: e,
                                seekbarLeftOffset: u,
                                seekbarWidth: s
                            }) : l.default.createElement(b.TimestampPreview, {
                                key: "TimestampPreview",
                                duration: n,
                                mouseMoveClientX: e,
                                seekbarLeftOffset: u,
                                seekbarWidth: s,
                                shouldCleanString: a
                            })
                        }
                    }, {
                        key: "seekbarRefHandler",
                        value: function(e) {
                            this.$seekbar = u.default.findDOMNode(e)
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
            w.propTypes = S;
            t.EditingSeekbar = (0, d.connect)(g, O)(w)
        },
        "b/ad": function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.EditingBottomControls = t.CONTAINER_CLASSES = void 0;
            var r = u(n("q1tI")),
                i = u(n("17x9")),
                a = n("mawI"),
                o = n("nWaZ"),
                s = u(n("TSYQ")),
                l = n("YwTH");

            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            n("Y4K0");
            var d = {
                    getCurrentTime: i.default.func.isRequired,
                    constrainSlider: i.default.bool
                },
                f = t.CONTAINER_CLASSES = (0, s.default)("pl-controls-bottom", "pl-flex", "qa-controls-bottom");
            (t.EditingBottomControls = function(e) {
                var t = e.constrainSlider,
                    n = e.getCurrentTime;
                return r.default.createElement("div", {
                    className: f
                }, r.default.createElement(l.EditingSeekbar, {
                    getCurrentTime: n,
                    constrainSlider: t
                }), r.default.createElement(a.BottomLeftControls, null), r.default.createElement(o.BottomRightControls, null))
            }).propTypes = d
        }
    }
]);