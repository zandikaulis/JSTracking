(window.webpackJsonp = window.webpackJsonp || []).push([
    [211], {
        "/PkA": function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ClipKeyboardShortcutsOverlay = t.ClipKeyboardShortcutsOverlayComponent = void 0;
            var a = u(n("q1tI")),
                r = u(n("17x9")),
                l = n("9kay"),
                i = n("h/Ds"),
                o = n("eiBJ");

            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var c = {
                    closeShortcutsPanel: r.default.func.isRequired,
                    t: r.default.func.isRequired
                },
                s = t.ClipKeyboardShortcutsOverlayComponent = function(e) {
                    var t = e.closeShortcutsPanel,
                        n = e.t;
                    return a.default.createElement("div", {
                        className: "pl-panel-overlay pl-flex"
                    }, a.default.createElement("div", {
                        className: "pl-panel__header pl-flex pl-flex--verticalCenter full-width"
                    }, a.default.createElement("div", {
                        className: "pl-panel__header-title pl-flex__item--grow"
                    }, n("Keyboard Shortcuts")), a.default.createElement("div", {
                        className: "pl-panel__header-action pl-flex__item--noGrow"
                    }, a.default.createElement("button", {
                        className: "pl-button pl-button--text pl-button--icon-only pd-0",
                        onClick: t
                    }, a.default.createElement("figure", {
                        className: "pl-panel__icon"
                    }, a.default.createElement(i.CloseButtonSVG, null))))), a.default.createElement("div", {
                        className: "pl-panel__body full-width"
                    }, a.default.createElement(o.ShortcutRow, {
                        label: n("Pause/Play"),
                        value: n("Space")
                    }), a.default.createElement(o.ShortcutRow, {
                        label: n("Back/Forward {{count}} second", {
                            count: 2
                        }),
                        value: "←",
                        valueAlt: "→"
                    }), a.default.createElement(o.ShortcutRow, {
                        label: n("Back/Forward 1 frame"),
                        value: "[",
                        valueAlt: "]"
                    }), a.default.createElement(o.ShortcutRow, {
                        label: n("Slow down/Speed up"),
                        value: "<",
                        valueAlt: ">"
                    }), a.default.createElement(o.ShortcutRow, {
                        label: n("Toggle Fullscreen"),
                        value: "f"
                    }), a.default.createElement(o.ShortcutRow, {
                        label: n("Exit Fullscreen"),
                        value: n("Esc")
                    }), a.default.createElement(o.ShortcutRow, {
                        label: n("Show this menu"),
                        value: "?"
                    })))
                };
            s.propTypes = c;
            t.ClipKeyboardShortcutsOverlay = (0, l.translate)()(s)
        },
        "8/R1": function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var a = t[n];
                            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                        }
                    }
                    return function(t, n, a) {
                        return n && e(t.prototype, n), a && e(t, a), t
                    }
                }(),
                r = _(n("q1tI")),
                l = _(n("17x9")),
                i = n("CJqN"),
                o = n("inRc"),
                u = n("/reP"),
                c = n("2gyh"),
                s = n("Wlf4"),
                d = n("FwvF"),
                f = n("x/3i"),
                p = n("kMbU"),
                m = n("olXp"),
                y = n("j63F"),
                h = n("A8Fc"),
                v = n("IPyt");

            function _(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            n("a1sr");
            var b = {
                    store: l.default.object.isRequired
                },
                g = {
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
                    }(t, r.default.Component), a(t, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this.props,
                                t = e.player,
                                n = e.root,
                                a = this.context.store;
                            n.classList.add("player", "theme--dark");
                            var r = new d.ClipsLoadingTimeSpentTracker(a, t),
                                l = new f.ClipsMinutesWatched(a);
                            this.setState({
                                playerProcesses: [r, l]
                            }), a.dispatch((0, h.trackClipsAppReadyEvent)())
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
                            return r.default.createElement("div", {
                                id: "clips_watch"
                            }, r.default.createElement(p.ClipPlayButtonOverlay, null), r.default.createElement(s.PlayerClickHandlerOverlay, null), r.default.createElement(m.ClipKeyboardShortcutsOverlayContainer, null), r.default.createElement(v.AutomatedMuteOverlay, null), r.default.createElement(i.LoadingOverlay, null), r.default.createElement(u.PlayerRoot, {
                                root: this.props.root
                            }, r.default.createElement(c.ShowOnHover, null, r.default.createElement(y.ClipPostplayRecommendations, null), r.default.createElement(o.PlayerControls, {
                                showTopControls: !1,
                                showBottomControls: !0,
                                player: this.props.player
                            }))))
                        }
                    }]), t
                }();
            t.default = C, C.contextTypes = b, C.propTypes = g
        },
        ARwq: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ClipTinySVG = void 0;
            var a = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(n("q1tI"));
            t.ClipTinySVG = function() {
                return a.default.createElement("svg", {
                    viewBox: "0 0 15 15"
                }, a.default.createElement("path", {
                    d: "M6.136 3.318l-2.74.734 2.095 1.66 2.74-.733-2.095-1.66zm2.07-.555L11.055 2l.556 2.073-1.309.35-2.094-1.66zM1.249 4.628L0 4.962l.555 2.073 2.788-.747-2.095-1.66zM.555 7.035H12v6.438H.555V7.035zm1.409 2.146h1.992l1.593-2.146H3.557L1.964 9.181zm5.02 0h1.992l1.593-2.146H8.577L6.984 9.181z",
                    fillRule: "evenodd"
                }))
            }
        },
        FwvF: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ClipsLoadingTimeSpentTracker = t.CAN_PLAY_CHECK_THRESHOLD = t.SECONDS_TO_MILLIS_MULT = void 0;
            var a = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var a = t[n];
                            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                        }
                    }
                    return function(t, n, a) {
                        return n && e(t.prototype, n), a && e(t, a), t
                    }
                }(),
                r = n("SaYp"),
                l = function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }(n("3OWR")),
                i = n("uAOA"),
                o = n("4b1H");
            t.SECONDS_TO_MILLIS_MULT = 1e3;
            var u = t.CAN_PLAY_CHECK_THRESHOLD = 250;
            t.ClipsLoadingTimeSpentTracker = function(e) {
                function t(e, n) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    var a = function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                    return a.store = e, a.bufferEmptyStartTime = null, a.videoPlayedOnceThrough = !1, a.lastCanPlayTime = 0, a.canPlayRefill = a.canPlayRefill.bind(a), a.canPlayFiredRecently = a.canPlayFiredRecently.bind(a), a.trackBufferRefill = a.trackBufferRefill.bind(a), a.trackBufferEmpty = a.trackBufferEmpty.bind(a), a.handleStateChange = a.handleStateChange.bind(a), n.addEventListener("canplay", a.canPlayRefill), n.addEventListener("canplaythrough", a.canPlayRefill), a.player = n, a.subscribe(e, ["playback", "quality"], function(e, t) {
                        a.handleStateChange(e, t)
                    }), a
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
                }(t, i.UIStateSubscriber), a(t, [{
                    key: "handleStateChange",
                    value: function(e, t) {
                        var n = e.playback,
                            a = e.quality,
                            r = t.playback,
                            l = t.quality;
                        n.ended && (this.videoPlayedOnceThrough = !0);
                        var i = n.hasPlayed && n.isLoading && !r.isLoading,
                            o = n.hasPlayed && l.selected !== a.selected;
                        this.videoPlayedOnceThrough || !o && !i ? this.bufferEmptyStartTime && !n.isLoading && this.trackBufferRefill() : o ? this.trackBufferEmpty() : i && this.trackBufferEmptyIfStalled()
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
                        this.bufferEmptyStartTime = e, this.store.getState().analyticsTracker.clipsTrackEvent(r.TRACKING_CLIPS_QOS, this.bufferTrackingProperties(r.TRACKING_CLIPS_BUFFER_EMPTY))
                    }
                }, {
                    key: "trackBufferRefill",
                    value: function() {
                        this.store.dispatch((0, o.play)());
                        var e = (this.currentTime() - this.bufferEmptyStartTime) / 1e3;
                        this.store.getState().analyticsTracker.clipsTrackEvent(r.TRACKING_CLIPS_QOS, (0, l.default)({}, this.bufferTrackingProperties(r.TRACKING_CLIPS_BUFFER_REFILL), {
                            buffering_time: e
                        })), this.bufferEmptyStartTime = null
                    }
                }, {
                    key: "bufferTrackingProperties",
                    value: function(e) {
                        return {
                            backend: r.TRACKING_LOCATION_CLIPS,
                            vod_format: r.TRACKING_CLIP_FORMAT,
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
        Hz4O: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CardContentPreview = t.CardContentPreviewComponent = void 0;
            var a = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var a = t[n];
                            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                        }
                    }
                    return function(t, n, a) {
                        return n && e(t.prototype, n), a && e(t, a), t
                    }
                }(),
                r = n("q1tI"),
                l = y(r),
                i = y(n("17x9")),
                o = n("iD95"),
                u = n("J0qE"),
                c = n("ARwq"),
                s = n("l8S6"),
                d = n("TwX9"),
                f = n("gGMp"),
                p = n("9kay"),
                m = y(n("TSYQ"));

            function y(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var h = ["pl-pill", "pl-pill--black", "pl-pd-05", "pl-flex--inline", "pl-flex--verticalCenter", "pl-flex__item--noGrow"],
                v = m.default.apply(void 0, h.concat(["pl-pill--red"])),
                _ = m.default.apply(void 0, h.concat(["pl-pill--clips-overlay"])),
                b = {
                    linkUrl: i.default.string.isRequired,
                    itemType: i.default.string.isRequired,
                    imageUrl: i.default.string.isRequired,
                    title: i.default.string.isRequired,
                    viewCount: i.default.number,
                    game: i.default.string.isRequired,
                    displayName: i.default.string.isRequired,
                    trackSelectionClick: i.default.func.isRequired,
                    t: i.default.func.isRequired,
                    cardDimensions: i.default.shape({
                        thumb: i.default.shape({
                            width: i.default.number.isRequired,
                            height: i.default.number.isRequired
                        }).isRequired,
                        card: i.default.shape({
                            width: i.default.number.isRequired,
                            height: i.default.number.isRequired
                        }).isRequired
                    }).isRequired
                },
                g = t.CardContentPreviewComponent = function(e) {
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
                    }(t, r.Component), a(t, [{
                        key: "clipSubtext",
                        value: function() {
                            var e = this.props,
                                t = e.viewCount,
                                n = e.game,
                                a = (0, e.t)("{{numberOfViews}} view", {
                                    numberOfViews: new f.NumberFormatter(parseInt(t, 10)).inCommas(),
                                    count: parseInt(t, 10)
                                });
                            return n ? a + " • " + n : a
                        }
                    }, {
                        key: "getContentSubtext",
                        value: function() {
                            var e = this.props,
                                t = e.itemType,
                                n = e.game,
                                a = e.displayName,
                                r = e.t;
                            return t === d.ITEM_TYPE_CLIP ? this.clipSubtext() : n ? r("{{displayName}} playing {{game}}", {
                                displayName: a,
                                game: n
                            }) : t === d.ITEM_TYPE_LIVE ? r("{{displayName}} streaming on Twitch", {
                                displayName: a
                            }) : t === d.ITEM_TYPE_VOD ? r("{{displayName}}'s video on Twitch", {
                                displayName: a
                            }) : null
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.cardDimensions,
                                n = e.linkUrl,
                                a = e.imageUrl,
                                r = e.title,
                                i = e.itemType,
                                f = e.displayName,
                                p = e.trackSelectionClick,
                                m = e.t;
                            return l.default.createElement("div", {
                                className: "pl-flex__item theme--dark cem-rec-two-up"
                            }, l.default.createElement("div", {
                                className: "pl-card cem-rec-card pos-relative"
                            }, l.default.createElement("a", {
                                href: n,
                                onMouseDown: p,
                                className: "pl-card__layout cem-rec__layout",
                                style: {
                                    width: t.card.width,
                                    height: t.card.height
                                },
                                target: "_blank",
                                rel: "noopener noreferrer"
                            }, l.default.createElement("div", {
                                className: "cem-rec-card__type strong"
                            }, i === d.ITEM_TYPE_LIVE && l.default.createElement("div", {
                                className: v
                            }, l.default.createElement("div", {
                                className: "cl-live-indicator inline-block relative"
                            }), l.default.createElement("div", null, m("Live"))), i === d.ITEM_TYPE_VOD && l.default.createElement("div", {
                                className: _
                            }, l.default.createElement("figure", {
                                className: "inline-block cem-rec__icon cem-rec__icon--overlay"
                            }, l.default.createElement(s.VodTinySVG, null)), l.default.createElement("div", null, m("Full Video"))), i === d.ITEM_TYPE_CLIP && l.default.createElement("div", {
                                className: _
                            }, l.default.createElement("figure", {
                                className: "inline-block cem-rec__icon cem-rec__icon--overlay"
                            }, l.default.createElement(c.ClipTinySVG, null)), l.default.createElement("div", null, m("Clip")))), l.default.createElement("figure", {
                                className: "pl-card__img cem-rec__img",
                                style: {
                                    width: t.thumb.width,
                                    height: t.thumb.height
                                }
                            }, l.default.createElement(o.ImageFallback, {
                                src: a,
                                altSrc: u.DEFAULT_AVATAR_URL,
                                alt: m("profile image")
                            })), l.default.createElement("div", {
                                className: "pl-card__body"
                            }, l.default.createElement("div", {
                                className: "pl-card__title card__title--cem ellipsis"
                            }, i === d.ITEM_TYPE_LIVE && l.default.createElement("span", {
                                className: "pl-strong"
                            }, m("Watch {{broadcaster}} Live", {
                                broadcaster: f
                            })), i === d.ITEM_TYPE_VOD && l.default.createElement("span", {
                                className: "pl-strong"
                            }, m("Continue Watching")), i === d.ITEM_TYPE_CLIP && l.default.createElement("span", null, r)), l.default.createElement("div", {
                                className: "pl-card__info card__info--cem ellipsis"
                            }, this.getContentSubtext())))))
                        }
                    }]), t
                }();
            g.propTypes = b;
            t.CardContentPreview = (0, p.translate)()(g)
        },
        TwX9: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.postPlayContentDataSelector = t.ITEM_TYPE_LIVE = t.ITEM_TYPE_VOD = t.ITEM_TYPE_CLIP = void 0;
            var a = n("SaYp"),
                r = n("GHcg"),
                l = n("XN9g"),
                i = n("7oTh"),
                o = n("ggpQ"),
                u = n("FxCM");

            function c(e) {
                if (Array.isArray(e)) {
                    for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                    return n
                }
                return Array.from(e)
            }
            var s = t.ITEM_TYPE_CLIP = "clip",
                d = t.ITEM_TYPE_VOD = "vod",
                f = t.ITEM_TYPE_LIVE = "live_channel";

            function p(e, t) {
                return e ? (0, r.ttAnalyticsQuery)(e, a.TRACKING_MEDIUM_EMBED, t) : ""
            }
            var m = function(e) {
                    return {
                        itemType: d,
                        linkUrl: function(e) {
                            var t = e.streamMetadata,
                                n = t.clipVideoId,
                                a = t.clipVideoOffset;
                            return p(r.Links.default.getVodLink(n, (0, u.toURLString)(a)), "recommend_vod_link")
                        }(e),
                        imageUrl: function(e) {
                            return p(e.streamMetadata.clipVideoPreviewImageUrl, "recommend_vod_img")
                        }(e),
                        title: "",
                        itemId: e.streamMetadata.clipVideoId,
                        viewCount: null,
                        channel: e.streamMetadata.channel.name,
                        displayName: e.streamMetadata.channel.displayName,
                        game: e.streamMetadata.game
                    }
                },
                y = function(e) {
                    return {
                        itemType: f,
                        linkUrl: function(e) {
                            return p((0, i.broadcasterStream)(e, e.streamMetadata.channel.name).channel.url, "recommend_stream_link")
                        }(e),
                        imageUrl: function(e) {
                            return p((0, i.broadcasterStream)(e, e.streamMetadata.channel.name).preview.medium, "recommend_stream_img")
                        }(e),
                        title: "",
                        itemId: e.streamMetadata.channel.name,
                        viewCount: null,
                        channel: e.streamMetadata.channel.name,
                        displayName: e.streamMetadata.channel.displayName,
                        game: e.streamMetadata.game
                    }
                },
                h = function(e) {
                    var t = e.id,
                        n = e.url,
                        r = e.thumbnails.medium,
                        l = e.viewCount,
                        i = e.game,
                        o = e.title,
                        u = e.channel,
                        c = u.name,
                        d = u.displayName;
                    return {
                        itemType: s,
                        linkUrl: p(n, a.TRACKING_PROPERTY_EMBED_CLIP_REC),
                        imageUrl: r,
                        title: o,
                        itemId: t,
                        viewCount: l,
                        channel: c,
                        displayName: d,
                        game: i
                    }
                };
            t.postPlayContentDataSelector = function(e, t) {
                var n = [(0, i.broadcasterLiveStatus)(e, e.streamMetadata.channel.name) === o.BROADCASTER_IS_LIVE ? y(e) : null, e.streamMetadata.clipHasVod ? m(e) : null].filter(function(e) {
                    return Boolean(e)
                });
                return [].concat(c(n), c(function(e, t) {
                    var n = (0, l.getRecommendedClipsForSlug)(e, e.streamMetadata.slug),
                        a = Math.min(t, n.length);
                    return n.slice(0, a).map(h)
                }(e, t - n.length)))
            }
        },
        Wlf4: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.PlayerClickHandlerOverlay = t.PlayerClickHandlerOverlayContainer = t.mapDispatchToProps = t.mapStateToProps = void 0;
            var a = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var a = t[n];
                            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                        }
                    }
                    return function(t, n, a) {
                        return n && e(t.prototype, n), a && e(t, a), t
                    }
                }(),
                r = n("q1tI"),
                l = s(r),
                i = s(n("17x9")),
                o = n("/MKj"),
                u = n("4b1H"),
                c = n("KE4D");

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var d = {
                    isPaused: i.default.bool.isRequired,
                    playVideo: i.default.func.isRequired,
                    pauseVideo: i.default.func.isRequired,
                    toggleFullScreen: i.default.func.isRequired
                },
                f = t.mapStateToProps = function(e) {
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
                            e((0, c.toggleFullScreen)())
                        }
                    }
                },
                m = t.PlayerClickHandlerOverlayContainer = function(e) {
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
                    }(t, r.Component), a(t, [{
                        key: "onVideoClick",
                        value: function() {
                            var e = this.props,
                                t = e.isPaused,
                                n = e.playVideo,
                                a = e.pauseVideo;
                            t ? n() : a()
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
            m.propTypes = d;
            t.PlayerClickHandlerOverlay = (0, o.connect)(f, p)(m)
        },
        a1sr: function(e, t, n) {},
        bm50: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            t.preloadImages = function(e) {
                e.forEach(function(e) {
                    (new Image).src = e
                })
            }
        },
        eiBJ: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ShortcutRow = void 0;
            var a = l(n("q1tI")),
                r = l(n("17x9"));

            function l(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var i = {
                label: r.default.string.isRequired,
                value: r.default.string.isRequired,
                valueAlt: r.default.string
            };
            (t.ShortcutRow = function(e) {
                var t = e.label,
                    n = e.value,
                    r = e.valueAlt,
                    l = n;
                return r && (l = a.default.createElement("span", null, n, a.default.createElement("span", {
                    className: "pl-panel__row-muted-value"
                }, "/"), r)), a.default.createElement("div", {
                    className: "pl-panel__body-row pl-flex flex--verticalCenter"
                }, a.default.createElement("div", {
                    className: "pl-panel__row-key pl-flex__item--grow"
                }, t), a.default.createElement("div", {
                    className: "pl-panel__row-value pl-flex__item--noGrow"
                }, l))
            }).propTypes = i
        },
        gGMp: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var a = t[n];
                        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                    }
                }
                return function(t, n, a) {
                    return n && e(t.prototype, n), a && e(t, a), t
                }
            }();
            t.NumberFormatter = function() {
                function e(t) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this._value = t
                }
                return a(e, [{
                    key: "inThousands",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                        return this._value < 1e3 ? parseFloat(this._value) : this._value > 1e6 ? this.constructor.decimalFormat(this._value / 1e6, e) : this.constructor.decimalFormat(this._value / 1e3, e)
                    }
                }, {
                    key: "inCommas",
                    value: function() {
                        return this._value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    }
                }, {
                    key: "toShortString",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                        return this._value < 1e3 ? this._value.toString() : "" + this.inThousands(e) + this.abbreviation
                    }
                }, {
                    key: "hasAbbreviation",
                    get: function() {
                        return "" !== this.abbreviation
                    }
                }, {
                    key: "abbreviation",
                    get: function() {
                        return this._value > 1e6 ? "m" : this._value > 1e3 ? "k" : ""
                    }
                }], [{
                    key: "decimalFormat",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                        return parseFloat(e).toFixed(t)
                    }
                }]), e
            }()
        },
        "h/Ds": function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CloseButtonSVG = void 0;
            var a = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(n("q1tI"));
            t.CloseButtonSVG = function() {
                return a.default.createElement("svg", {
                    width: "12",
                    height: "12",
                    viewBox: "0 0 12 12"
                }, a.default.createElement("path", {
                    d: "M11.657 1.757L7.414 6l4.243 4.242-1.415 1.415L6 7.414l-4.243 4.243-1.414-1.415L4.586 6 .343 1.757 1.757.343 6 4.586 10.242.343l1.415 1.414z",
                    fillRule: "evenodd"
                }))
            }
        },
        iD95: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ImageFallback = void 0;
            var a = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var a = t[n];
                            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                        }
                    }
                    return function(t, n, a) {
                        return n && e(t.prototype, n), a && e(t, a), t
                    }
                }(),
                r = n("q1tI"),
                l = o(r),
                i = o(n("17x9"));

            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var u = {
                    src: i.default.string.isRequired,
                    altSrc: i.default.string.isRequired,
                    className: i.default.string,
                    alt: i.default.string.isRequired
                },
                c = t.ImageFallback = function(e) {
                    function t(e) {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t);
                        var n = function(e, t) {
                            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || "object" != typeof t && "function" != typeof t ? e : t
                        }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                        return n.state = {
                            src: e.src
                        }, n.setImage = n.setImage.bind(n), n
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
                    }(t, r.Component), a(t, [{
                        key: "componentDidMount",
                        value: function() {
                            this.props.src && this.setImage(this.props)
                        }
                    }, {
                        key: "componentWillReceiveProps",
                        value: function(e) {
                            e.src !== this.props.src && this.setImage(e)
                        }
                    }, {
                        key: "setImage",
                        value: function(e) {
                            var t = this,
                                n = e.src,
                                a = e.altSrc,
                                r = new Image;
                            r.onerror = function() {
                                return t.setState({
                                    src: a
                                })
                            }, r.onload = function() {
                                return t.setState({
                                    src: n
                                })
                            }, r.src = n
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return l.default.createElement("img", {
                                src: this.state.src,
                                className: this.props.className,
                                alt: this.props.alt
                            })
                        }
                    }]), t
                }();
            c.defaultProps = {
                className: ""
            }, c.propTypes = u
        },
        j63F: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ClipPostplayRecommendations = t.ClipPostplayRecommendationsComponent = t.mapDispatchToProps = t.MAX_CONTENT_TO_SHOW = void 0;
            var a = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var a = t[n];
                            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                        }
                    }
                    return function(t, n, a) {
                        return n && e(t.prototype, n), a && e(t, a), t
                    }
                }(),
                r = n("q1tI"),
                l = b(r),
                i = b(n("17x9")),
                o = n("/MKj"),
                u = n("J0qE"),
                c = b(n("3OWR")),
                s = n("IyFf"),
                d = n("bm50"),
                f = n("jFcO"),
                p = n("TwX9"),
                m = n("SaYp"),
                y = n("d4Wk"),
                h = b(n("TSYQ")),
                v = n("ggpQ"),
                _ = n("7oTh");

            function b(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var g = t.MAX_CONTENT_TO_SHOW = 2,
                C = (0, h.default)("pl-flex", "pl-flex--verticalCenter", "pl-flex--horizontalCenter", "player-recommend", "pl-flex--nowrap", "pl-rec-wrapper", "player-overlay");

            function E(e, t) {
                return e.map(function(e) {
                    return e[t]
                }).map(function(e) {
                    return null === e ? "null" : e
                }).join(",")
            }
            var T = {
                    analyticsTracker: i.default.object.isRequired,
                    recommendationTrackingProperties: i.default.object.isRequired,
                    showOverlay: i.default.bool.isRequired,
                    channelName: i.default.string.isRequired,
                    postPlayContentData: i.default.arrayOf(i.default.shape({
                        itemType: i.default.string.isRequired,
                        linkUrl: i.default.string.isRequired,
                        title: i.default.string.isRequired,
                        itemId: i.default.string.isRequired,
                        viewCount: i.default.number,
                        channel: i.default.string.isRequired,
                        displayName: i.default.string.isRequired,
                        game: i.default.string.isRequired
                    })),
                    fetchRecommendationsSets: i.default.func.isRequired,
                    hasFetchedRelatedClips: i.default.bool.isRequired,
                    hasFetchedBroadcasterInfo: i.default.bool.isRequired,
                    clipSlug: i.default.string,
                    playerDimensions: i.default.shape({
                        height: i.default.number,
                        width: i.default.number
                    }).isRequired
                },
                P = t.mapDispatchToProps = function(e) {
                    return {
                        fetchRecommendationsSets: function() {
                            e((0, s.fetchClipRecommendations)())
                        }
                    }
                },
                w = t.ClipPostplayRecommendationsComponent = function(e) {
                    function t() {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t);
                        var e = function(e, t) {
                            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || "object" != typeof t && "function" != typeof t ? e : t
                        }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                        return e.state = {
                            isImagePreloadingComplete: !1,
                            postPlayContentData: []
                        }, e.trackedForVideoEnd = !1, e.attemptedRecommendationsFetched = !1, e
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
                    }(t, r.Component), a(t, [{
                        key: "handleTrackForClickGenerator",
                        value: function(e, t) {
                            var n = this,
                                a = e.itemId,
                                r = e.viewCount,
                                l = e.channel,
                                i = e.game,
                                o = e.itemType;
                            return function() {
                                n.props.analyticsTracker.clipsTrackEvent(m.TRACKING_ITEM_SECTION_CLICK, (0, c.default)({}, n.props.recommendationTrackingProperties, {
                                    item_id: a,
                                    item_viewcount: r,
                                    channel: l,
                                    game: i,
                                    item_type: o,
                                    item_index: t,
                                    section_index: 0
                                }))
                            }
                        }
                    }, {
                        key: "componentWillReceiveProps",
                        value: function(e) {
                            var t = e.hasFetchedRelatedClips,
                                n = e.hasFetchedBroadcasterInfo,
                                a = e.clipSlug,
                                r = e.fetchRecommendationsSets,
                                l = e.channelName;
                            a !== this.props.clipSlug && (this.attemptedRecommendationsFetched = !1), !this.attemptedRecommendationsFetched && a && l && (r(), this.attemptedRecommendationsFetched = !0), t && a && n && !this.state.isImagePreloadingComplete && this.handleContentPreLoading(e), e.showOverlay && !this.trackedForVideoEnd ? (this.props.analyticsTracker.clipsTrackEvent(m.TRACKING_ITEM_SECTION_LOAD, (0, c.default)({}, this.props.recommendationTrackingProperties, function(e) {
                                return {
                                    rendered_item_list: E(e, "itemId"),
                                    rendered_item_count: e.length,
                                    rendered_items_viewcounts: E(e, "viewCount"),
                                    num_recs_visible: e.length,
                                    rendered_items_types: E(e, "itemType"),
                                    section_index: 0
                                }
                            }(this.state.postPlayContentData))), this.trackedForVideoEnd = !0) : this.trackedForVideoEnd && !e.showOverlay && (this.trackedForVideoEnd = !1)
                        }
                    }, {
                        key: "handleContentPreLoading",
                        value: function(e) {
                            var t = this,
                                n = e.postPlayContentData,
                                a = n.map(function(e) {
                                    return e.imageUrl
                                });
                            (0, d.preloadImages)([].concat(function(e) {
                                if (Array.isArray(e)) {
                                    for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                                    return n
                                }
                                return Array.from(e)
                            }(a), [u.DEFAULT_AVATAR_URL]));
                            var r = n.slice(0, 2).map(function(e) {
                                return (0, c.default)({}, e, {
                                    trackSelectionClick: t.handleTrackForClickGenerator(e)
                                })
                            });
                            this.setState({
                                isImagePreloadingComplete: !0,
                                postPlayContentData: r
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return this.props.showOverlay ? l.default.createElement("div", {
                                className: C
                            }, l.default.createElement(f.PostplayContentTwoLayout, {
                                postPlayContentData: this.state.postPlayContentData,
                                playerWidth: this.props.playerDimensions.width,
                                playerHeight: this.props.playerDimensions.height
                            })) : null
                        }
                    }]), t
                }();
            w.propTypes = T;
            t.ClipPostplayRecommendations = (0, o.connect)(function(e) {
                var t = e.streamMetadata,
                    n = e.playback,
                    a = e.playerDimensions,
                    r = e.analyticsTracker,
                    l = Boolean(e.clipRecommendations.hasFetched[t.slug]),
                    i = n.ended;
                return {
                    clipSlug: t.slug,
                    channelName: t.channel.name,
                    showOverlay: l && i,
                    postPlayContentData: (0, p.postPlayContentDataSelector)(e, g),
                    hasFetchedRelatedClips: l,
                    playerDimensions: a,
                    hasFetchedBroadcasterInfo: (0, _.broadcasterLiveStatus)(e, t.channel.name) !== v.NOT_AVAILABLE,
                    analyticsTracker: r,
                    recommendationTrackingProperties: (0, y.clipsRecommendationProperties)(e)
                }
            }, P)(w)
        },
        jFcO: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.PostplayContentTwoLayout = v;
            var a = o(n("q1tI")),
                r = o(n("17x9")),
                l = o(n("TSYQ")),
                i = n("Hz4O");

            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var u = 16 / 9,
                c = 45,
                s = 1280,
                d = 230,
                f = 130,
                p = 350,
                m = 45,
                y = (0, l.default)("pl-flex", "pl-flex--verticalCenter", "pl-flex--horizontalCenter", "pl-flex--nowrap", "cem-rec-two-up-wrap", "pl-mg-x-1");
            var h = {
                postPlayContentData: r.default.arrayOf(r.default.object).isRequired,
                playerWidth: r.default.number.isRequired,
                playerHeight: r.default.number.isRequired
            };

            function v(e) {
                var t = e.postPlayContentData,
                    n = e.playerWidth,
                    r = e.playerHeight;
                return a.default.createElement("div", {
                    className: y
                }, t.map(function(e) {
                    return a.default.createElement(i.CardContentPreview, {
                        linkUrl: e.linkUrl,
                        itemType: e.itemType,
                        imageUrl: e.imageUrl,
                        title: e.title,
                        viewCount: e.viewCount,
                        game: e.game,
                        displayName: e.displayName,
                        trackSelectionClick: e.trackSelectionClick,
                        cardDimensions: function(e, t) {
                            var n = e - (e < p ? f : d),
                                a = (t > s ? s : t - c) / 2,
                                r = a * (1 / u);
                            return r > n && (a = n * u, r = n), {
                                thumb: {
                                    width: a,
                                    height: r
                                },
                                card: {
                                    width: a,
                                    height: r + m
                                }
                            }
                        }(r, n),
                        key: e.linkUrl
                    })
                }))
            }
            v.propTypes = h
        },
        kMbU: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ClipPlayButtonOverlay = t.mapStateToProps = void 0, t.ClipPlayButtonOverlayContainer = d;
            var a = u(n("q1tI")),
                r = u(n("17x9")),
                l = n("/MKj"),
                i = n("4b1H"),
                o = n("xkJG");

            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var c = {
                    showOverlay: r.default.bool.isRequired,
                    play: r.default.func.isRequired
                },
                s = t.mapStateToProps = function(e) {
                    var t = e.playback;
                    return {
                        showOverlay: !t.hasPlayed && !t.isLoading && !t.autoplay
                    }
                };

            function d(e) {
                var t = e.showOverlay,
                    n = e.play;
                return t ? a.default.createElement(o.PlayButtonOverlay, {
                    onClick: n
                }) : null
            }
            d.propTypes = c;
            t.ClipPlayButtonOverlay = (0, l.connect)(s, function(e) {
                return {
                    play: function() {
                        e((0, i.play)())
                    }
                }
            })(d)
        },
        l8S6: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.VodTinySVG = void 0;
            var a = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(n("q1tI"));
            t.VodTinySVG = function() {
                return a.default.createElement("svg", {
                    viewBox: "0 0 15 15"
                }, a.default.createElement("path", {
                    d: "M3 12V3l9 4.5z",
                    fillRule: "evenodd"
                }))
            }
        },
        olXp: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ClipKeyboardShortcutsOverlayContainer = t.ClipKeyboardShortcutsOverlayContainerComponent = void 0;
            var a = u(n("q1tI")),
                r = u(n("17x9")),
                l = n("/MKj"),
                i = n("/PkA"),
                o = n("uNCh");

            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var c = {
                    closeShortcutsPanel: r.default.func.isRequired,
                    shouldShowShortcutsPanel: r.default.bool.isRequired
                },
                s = t.ClipKeyboardShortcutsOverlayContainerComponent = function(e) {
                    return e.shouldShowShortcutsPanel ? a.default.createElement(i.ClipKeyboardShortcutsOverlay, e) : null
                };
            s.propTypes = c;
            t.ClipKeyboardShortcutsOverlayContainer = (0, l.connect)(function(e) {
                return {
                    shouldShowShortcutsPanel: e.screen[0] === o.CLIP_SHORTCUT_SCREEN
                }
            }, function(e) {
                return {
                    closeShortcutsPanel: function() {
                        e((0, o.popScreen)())
                    }
                }
            })(s)
        },
        "x/3i": function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ClipsMinutesWatched = t.SECONDS_TO_MILLIS_MULT = void 0;
            var a = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var a = t[n];
                            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                        }
                    }
                    return function(t, n, a) {
                        return n && e(t.prototype, n), a && e(t, a), t
                    }
                }(),
                r = n("SaYp"),
                l = n("ikhW"),
                i = n("uAOA");
            var o = t.SECONDS_TO_MILLIS_MULT = 1e3;
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
                }(t, i.UIStateSubscriber), a(t, [{
                    key: "handlePlaybackChange",
                    value: function(e) {
                        var t = this.minWatchedEmitter.isCurrentlyTracking();
                        !t && e.playing ? this.minWatchedEmitter.start() : t && e.paused && this.minWatchedEmitter.stop()
                    }
                }, {
                    key: "trackClipsMinuteWatched",
                    value: function() {
                        this.store.getState().analyticsTracker.clipsTrackEvent(r.TRACKING_CLIPS_MINUTE, {
                            minutes_logged: this.minWatchedEmitter.totalMinutes,
                            seconds_offset: this.minWatchedEmitter.initialDelay / o
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