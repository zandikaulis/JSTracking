(window.webpackJsonp = window.webpackJsonp || []).push([
    [208], {
        "/PkA": function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ClipKeyboardShortcutsOverlay = t.ClipKeyboardShortcutsOverlayComponent = void 0;
            var n = u(a("q1tI")),
                r = u(a("17x9")),
                l = a("9kay"),
                i = a("h/Ds"),
                o = a("eiBJ");

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
                        a = e.t;
                    return n.default.createElement("div", {
                        className: "pl-panel-overlay pl-flex"
                    }, n.default.createElement("div", {
                        className: "pl-panel__header pl-flex pl-flex--verticalCenter full-width"
                    }, n.default.createElement("div", {
                        className: "pl-panel__header-title pl-flex__item--grow"
                    }, a("Keyboard Shortcuts")), n.default.createElement("div", {
                        className: "pl-panel__header-action pl-flex__item--noGrow"
                    }, n.default.createElement("button", {
                        className: "pl-button pl-button--text pl-button--icon-only pd-0",
                        onClick: t
                    }, n.default.createElement("figure", {
                        className: "pl-panel__icon"
                    }, n.default.createElement(i.CloseButtonSVG, null))))), n.default.createElement("div", {
                        className: "pl-panel__body full-width"
                    }, n.default.createElement(o.ShortcutRow, {
                        label: a("Pause/Play"),
                        value: a("Space")
                    }), n.default.createElement(o.ShortcutRow, {
                        label: a("Back/Forward {{count}} second", {
                            count: 2
                        }),
                        value: "←",
                        valueAlt: "→"
                    }), n.default.createElement(o.ShortcutRow, {
                        label: a("Back/Forward 1 frame"),
                        value: "[",
                        valueAlt: "]"
                    }), n.default.createElement(o.ShortcutRow, {
                        label: a("Slow down/Speed up"),
                        value: "<",
                        valueAlt: ">"
                    }), n.default.createElement(o.ShortcutRow, {
                        label: a("Toggle Fullscreen"),
                        value: "f"
                    }), n.default.createElement(o.ShortcutRow, {
                        label: a("Exit Fullscreen"),
                        value: a("Esc")
                    }), n.default.createElement(o.ShortcutRow, {
                        label: a("Show this menu"),
                        value: "?"
                    })))
                };
            s.propTypes = c;
            t.ClipKeyboardShortcutsOverlay = (0, l.translate)()(s)
        },
        "2kYa": function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.TwitterSVG = void 0;
            var n = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(a("q1tI"));
            t.TwitterSVG = function() {
                return n.default.createElement("svg", {
                    viewBox: "0 0 32 32"
                }, n.default.createElement("path", {
                    clipRule: "evenodd",
                    d: "M23.966 11.533c-.55.26-1.142.436-1.763.515a3.252 3.252 0 0 0 1.35-1.81c-.6.38-1.26.649-1.95.794A2.983 2.983 0 0 0 19.362 10c-1.696 0-3.07 1.464-3.07 3.27 0 .256.026.505.079.745-2.552-.136-4.815-1.438-6.33-3.417a3.417 3.417 0 0 0-.415 1.644c0 1.134.543 2.135 1.366 2.722a2.918 2.918 0 0 1-1.39-.41v.042c0 1.584 1.057 2.906 2.463 3.206-.452.131-.928.15-1.388.056.392 1.3 1.526 2.245 2.869 2.271A5.917 5.917 0 0 1 9 21.482a8.311 8.311 0 0 0 4.707 1.47c5.648 0 8.736-4.982 8.736-9.304 0-.141-.003-.283-.008-.422a6.481 6.481 0 0 0 1.531-1.693",
                    fillRule: "evenodd"
                }))
            }
        },
        ARwq: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ClipTinySVG = void 0;
            var n = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(a("q1tI"));
            t.ClipTinySVG = function() {
                return n.default.createElement("svg", {
                    viewBox: "0 0 15 15"
                }, n.default.createElement("path", {
                    d: "M6.136 3.318l-2.74.734 2.095 1.66 2.74-.733-2.095-1.66zm2.07-.555L11.055 2l.556 2.073-1.309.35-2.094-1.66zM1.249 4.628L0 4.962l.555 2.073 2.788-.747-2.095-1.66zM.555 7.035H12v6.438H.555V7.035zm1.409 2.146h1.992l1.593-2.146H3.557L1.964 9.181zm5.02 0h1.992l1.593-2.146H8.577L6.984 9.181z",
                    fillRule: "evenodd"
                }))
            }
        },
        C0vZ: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ChevronLeftSVG = void 0;
            var n = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(a("q1tI"));
            t.ChevronLeftSVG = function() {
                return n.default.createElement("svg", {
                    viewBox: "0 0 30 30"
                }, n.default.createElement("path", {
                    d: "M11 15.007l5.657-5.657 1.768 1.768-3.89 3.889 3.89 3.889-1.768 1.768z",
                    fillRule: "evenodd"
                }))
            }
        },
        Cb6d: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ClipInfoOverlay = void 0, t.ClipInfoOverlayComponent = v;
            var n = m(a("q1tI")),
                r = m(a("17x9")),
                l = a("/MKj"),
                i = a("9kay"),
                o = a("gGMp"),
                u = a("GHcg"),
                c = a("iD95"),
                s = a("SaYp"),
                d = a("Wsnx"),
                f = a("J0qE"),
                p = m(a("puQj"));

            function m(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function h(e, t) {
                var a = u.Links.default.getClipsOnChannelPageLink(e);
                return p.default.android ? u.Links.android.getChannelLink(e, a) : (0, u.ttAnalyticsQuery)(a, s.TRACKING_MEDIUM_EMBED, t ? s.TRACKING_CONTENT_PROFILE_IMAGE : s.TRACKING_CONTENT_CHANNEL)
            }
            var y = {
                logoUrl: r.default.string.isRequired,
                title: r.default.string,
                clipURL: r.default.string.isRequired,
                broadcasterDisplayName: r.default.string.isRequired,
                broadcasterLogin: r.default.string.isRequired,
                viewCount: r.default.number,
                game: r.default.string,
                gameLink: r.default.string,
                t: r.default.func.isRequired
            };

            function v(e) {
                var t = e.logoUrl,
                    a = e.title,
                    r = e.clipURL,
                    l = e.broadcasterDisplayName,
                    i = e.broadcasterLogin,
                    p = e.game,
                    m = e.viewCount,
                    y = e.t;
                return i ? n.default.createElement("div", {
                    className: "pl-controls-top clip-player-userinfo"
                }, n.default.createElement("a", {
                    href: function(e) {
                        return h(e, !0)
                    }(i),
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "clip-userinfo__picture"
                }, n.default.createElement(c.ImageFallback, {
                    src: t,
                    altSrc: f.DEFAULT_AVATAR_URL,
                    alt: y("profile image")
                })), n.default.createElement("div", {
                    className: "clip-userinfo__meta-container"
                }, n.default.createElement("div", {
                    className: "clip-userinfo__name ellipsis"
                }, a && n.default.createElement("a", {
                    href: (0, u.ttAnalyticsQuery)(r, s.TRACKING_MEDIUM_EMBED, s.TRACKING_CONTENT_TITLE),
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "clip-userinfo__title-link"
                }, a)), n.default.createElement("div", {
                    className: "clip-userinfo__title"
                }, n.default.createElement(d.BroadcasterPlayingGameLink, {
                    broadcasterDisplayName: l,
                    channelURL: function(e) {
                        return h(e, !1)
                    }(i),
                    game: p,
                    gameUrl: function(e) {
                        if (e) {
                            var t = u.Links.default.getClipsOnGamePageLink(e);
                            return (0, u.ttAnalyticsQuery)(t, s.TRACKING_MEDIUM_EMBED, s.TRACKING_CONTENT_GAME)
                        }
                        return ""
                    }(p)
                })), n.default.createElement("div", {
                    className: "clip-userinfo__title"
                }, y("{{numberOfViews}} view", {
                    numberOfViews: new o.NumberFormatter(m).inCommas(),
                    count: m
                })))) : null
            }
            v.propTypes = y;
            t.ClipInfoOverlay = (0, i.translate)()((0, l.connect)(function(e) {
                var t = e.streamMetadata;
                return {
                    title: t.title,
                    clipURL: t.url,
                    game: t.game,
                    broadcasterDisplayName: t.channel.displayName,
                    broadcasterLogin: t.channel.name,
                    logoUrl: t.channel.logo,
                    isLive: !0,
                    viewCount: t.viewCount
                }
            })(v))
        },
        EUmO: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.BroadcasterLink = void 0;
            var n = l(a("q1tI")),
                r = l(a("17x9"));

            function l(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var i = {
                broadcasterDisplayName: r.default.string.isRequired,
                channelURL: r.default.string.isRequired
            };
            (t.BroadcasterLink = function(e) {
                var t = e.broadcasterDisplayName,
                    a = e.channelURL;
                return n.default.createElement("a", {
                    target: "_blank",
                    className: "broadcaster-info__name-link",
                    rel: "nofollow noopener noreferrer",
                    href: a
                }, t)
            }).propTypes = i
        },
        FwvF: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ClipsLoadingTimeSpentTracker = t.CAN_PLAY_CHECK_THRESHOLD = t.SECONDS_TO_MILLIS_MULT = void 0;
            var n = function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var n = t[a];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                        }
                    }
                    return function(t, a, n) {
                        return a && e(t.prototype, a), n && e(t, n), t
                    }
                }(),
                r = a("SaYp"),
                l = function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }(a("3OWR")),
                i = a("uAOA"),
                o = a("4b1H");
            t.SECONDS_TO_MILLIS_MULT = 1e3;
            var u = t.CAN_PLAY_CHECK_THRESHOLD = 250;
            t.ClipsLoadingTimeSpentTracker = function(e) {
                function t(e, a) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    var n = function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                    return n.store = e, n.bufferEmptyStartTime = null, n.videoPlayedOnceThrough = !1, n.lastCanPlayTime = 0, n.canPlayRefill = n.canPlayRefill.bind(n), n.canPlayFiredRecently = n.canPlayFiredRecently.bind(n), n.trackBufferRefill = n.trackBufferRefill.bind(n), n.trackBufferEmpty = n.trackBufferEmpty.bind(n), n.handleStateChange = n.handleStateChange.bind(n), a.addEventListener("canplay", n.canPlayRefill), a.addEventListener("canplaythrough", n.canPlayRefill), n.player = a, n.subscribe(e, ["playback", "quality"], function(e, t) {
                        n.handleStateChange(e, t)
                    }), n
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
                }(t, i.UIStateSubscriber), n(t, [{
                    key: "handleStateChange",
                    value: function(e, t) {
                        var a = e.playback,
                            n = e.quality,
                            r = t.playback,
                            l = t.quality;
                        a.ended && (this.videoPlayedOnceThrough = !0);
                        var i = a.hasPlayed && a.isLoading && !r.isLoading,
                            o = a.hasPlayed && l.selected !== n.selected;
                        this.videoPlayedOnceThrough || !o && !i ? this.bufferEmptyStartTime && !a.isLoading && this.trackBufferRefill() : o ? this.trackBufferEmpty() : i && this.trackBufferEmptyIfStalled()
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
        "H/ej": function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SocialLinkHelper = t.HASHTAG_CLIPS = void 0;
            var n = a("sJUF"),
                r = a("SaYp"),
                l = a("GHcg"),
                i = t.HASHTAG_CLIPS = "#twitchclips",
                o = t.SocialLinkHelper = {
                    socialListenerData: function(e, t, a, n, r) {
                        var l = o.getSocialShareData(e, t, n, r)[a],
                            i = l.url,
                            u = l.width,
                            c = l.height;
                        return {
                            url: i,
                            windowName: "Social Share",
                            newWindowOptions: u && c ? "status = 1, width = " + u + ", height = " + c + ", resizable = 0" : null
                        }
                    },
                    getSocialShareData: function(e, t, a, n) {
                        var r = o.formatShareText(o.generateCaption(e, a, n)),
                            i = o.formatShareText(o.generateCaption(e, a, n), o.generateTwitterSuffix(e), 117);
                        return {
                            facebook: {
                                url: "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent((0, l.withQueryParams)(t, {
                                    tt_medium: "fb"
                                }, !0)),
                                width: 560,
                                height: 656
                            },
                            twitter: {
                                url: "http://www.twitter.com/share?text=" + i + "&url=" + encodeURIComponent((0, l.withQueryParams)(t, {
                                    tt_medium: "twtr"
                                }, !0)),
                                width: 845,
                                height: 443
                            },
                            reddit: {
                                url: "http://www.reddit.com/submit?title=" + r + "&url=" + encodeURIComponent((0, l.withQueryParams)(t, {
                                    tt_medium: "redt"
                                }, !0))
                            }
                        }
                    },
                    generateEmbedScript: function(e) {
                        return '<iframe src="' + (0, l.withQueryParams)(e, {
                            autoplay: "false",
                            tt_medium: r.TRACKING_MEDIUM_EMBED
                        }) + '" width="640" height="360" frameborder="0" scrolling="no" allowfullscreen="true"></iframe>'
                    },
                    generateCaption: function(e, t, a) {
                        return "" !== t ? t : a("Check out this clip from {{displayName}}'s broadcast", {
                            displayName: e.displayName
                        })
                    },
                    generateTwitterSuffix: function(e) {
                        var t = e.twitterLogin ? " @" + e.twitterLogin : "";
                        return " " + i + t + " "
                    },
                    formatShareText: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                            a = e,
                            r = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1 / 0) - t.length;
                        return a.length > r && (a = (0, n.cleanCondense)(a, r - 3) + "..."), encodeURIComponent((0, n.cleanCondense)("" + a + t))
                    }
                }
        },
        Hh1s: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SelectableInput = o;
            var n = l(a("q1tI")),
                r = l(a("17x9"));

            function l(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var i = {
                value: r.default.string.isRequired,
                label: r.default.string.isRequired,
                id: r.default.string.isRequired,
                onSelect: r.default.func.isRequired
            };

            function o(e) {
                var t = e.value,
                    a = e.label,
                    r = e.id,
                    l = e.onSelect;
                return n.default.createElement("div", {
                    className: "form__group pl-pd-y-05 cs-form pl-flex__item--grow"
                }, n.default.createElement("label", {
                    htmlFor: "input-clip-" + r,
                    className: "form__label pd-b-1"
                }, a), n.default.createElement("input", {
                    id: "input-clip-" + r,
                    className: "pl-form__input cs-form__input",
                    type: "text",
                    onClick: function(e) {
                        l(), e.target.select()
                    },
                    value: t,
                    readOnly: !0
                }))
            }
            o.propTypes = i
        },
        HqgC: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ClipShareOverlayContainer = void 0;
            var n = s(a("q1tI")),
                r = s(a("17x9")),
                l = a("9kay"),
                i = a("/MKj"),
                o = a("H/ej"),
                u = a("uNCh"),
                c = a("i3s7");

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function d(e) {
                var t = e.clipUrl,
                    a = e.hideSharing,
                    r = e.shouldShow,
                    l = e.clipEmbedUrl,
                    i = e.analyticsTracker;
                return r ? n.default.createElement(c.ClipShareOverlay, {
                    clipUrl: t,
                    hideSharing: a,
                    clipEmbedUrl: l,
                    analyticsTracker: i
                }) : null
            }
            d.propTypes = {
                clipUrl: r.default.string.isRequired,
                hideSharing: r.default.func.isRequired,
                shouldShow: r.default.bool.isRequired,
                clipEmbedUrl: r.default.string.isRequired,
                analyticsTracker: r.default.object.isRequired
            };
            t.ClipShareOverlayContainer = (0, l.translate)()((0, i.connect)(function(e) {
                var t = e.streamMetadata,
                    a = e.analyticsTracker,
                    n = e.screen;
                return {
                    clipUrl: t.url,
                    clipEmbedUrl: o.SocialLinkHelper.generateEmbedScript(t.embedUrl),
                    shouldShow: n[0] === u.CLIP_SHARING_SCREEN,
                    analyticsTracker: a
                }
            }, function(e) {
                return {
                    hideSharing: function() {
                        e((0, u.popScreen)())
                    }
                }
            })(d))
        },
        Hz4O: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CardContentPreview = t.CardContentPreviewComponent = void 0;
            var n = function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var n = t[a];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                        }
                    }
                    return function(t, a, n) {
                        return a && e(t.prototype, a), n && e(t, n), t
                    }
                }(),
                r = a("q1tI"),
                l = h(r),
                i = h(a("17x9")),
                o = a("iD95"),
                u = a("J0qE"),
                c = a("ARwq"),
                s = a("l8S6"),
                d = a("TwX9"),
                f = a("gGMp"),
                p = a("9kay"),
                m = h(a("TSYQ"));

            function h(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var y = ["pl-pill", "pl-pill--black", "pl-pd-05", "pl-flex--inline", "pl-flex--verticalCenter", "pl-flex__item--noGrow"],
                v = m.default.apply(void 0, y.concat(["pl-pill--red"])),
                _ = m.default.apply(void 0, y.concat(["pl-pill--clips-overlay"])),
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
                    }(t, r.Component), n(t, [{
                        key: "clipSubtext",
                        value: function() {
                            var e = this.props,
                                t = e.viewCount,
                                a = e.game,
                                n = (0, e.t)("{{numberOfViews}} view", {
                                    numberOfViews: new f.NumberFormatter(parseInt(t, 10)).inCommas(),
                                    count: parseInt(t, 10)
                                });
                            return a ? n + " • " + a : n
                        }
                    }, {
                        key: "getContentSubtext",
                        value: function() {
                            var e = this.props,
                                t = e.itemType,
                                a = e.game,
                                n = e.displayName,
                                r = e.t;
                            return t === d.ITEM_TYPE_CLIP ? this.clipSubtext() : a ? r("{{displayName}} playing {{game}}", {
                                displayName: n,
                                game: a
                            }) : t === d.ITEM_TYPE_LIVE ? r("{{displayName}} streaming on Twitch", {
                                displayName: n
                            }) : t === d.ITEM_TYPE_VOD ? r("{{displayName}}'s video on Twitch", {
                                displayName: n
                            }) : null
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.cardDimensions,
                                a = e.linkUrl,
                                n = e.imageUrl,
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
                                href: a,
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
                                src: n,
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
        I9bg: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ShareIcon = t.ShareIconComponent = void 0;
            var n = function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var n = t[a];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                        }
                    }
                    return function(t, a, n) {
                        return a && e(t.prototype, a), n && e(t, n), t
                    }
                }(),
                r = a("q1tI"),
                l = d(r),
                i = d(a("17x9")),
                o = a("/MKj"),
                u = a("H/ej"),
                c = a("9kay"),
                s = d(a("TSYQ"));

            function d(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var f = {
                    companySVG: i.default.object.isRequired,
                    companyName: i.default.string.isRequired,
                    broadcaster: i.default.object.isRequired,
                    clipUrl: i.default.string.isRequired,
                    clipTitle: i.default.string,
                    localWindow: i.default.object.isRequired,
                    onClick: i.default.func,
                    t: i.default.func.isRequired
                },
                p = t.ShareIconComponent = function(e) {
                    function t() {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t);
                        var e = function(e, t) {
                            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || "object" != typeof t && "function" != typeof t ? e : t
                        }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                        return e.onClickHandler = e.onClickHandler.bind(e), e
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
                    }(t, r.Component), n(t, [{
                        key: "onClickHandler",
                        value: function() {
                            this.props.onClick(this.props.companyName),
                                function(e) {
                                    var t = e.broadcaster,
                                        a = e.clipUrl,
                                        n = e.companyName,
                                        r = e.clipTitle,
                                        l = e.t,
                                        i = e.localWindow,
                                        o = u.SocialLinkHelper.socialListenerData(t, a, n, r, l);
                                    i.open(o.url, o.windowName, o.newWindowOptions)
                                }(this.props)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = (0, s.default)(function(e, t, a) {
                                return t in e ? Object.defineProperty(e, t, {
                                    value: a,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }) : e[t] = a, e
                            }({
                                flex__item: !0,
                                "share-icon": !0,
                                "cs-icon": !0
                            }, this.props.companyName, !0));
                            return l.default.createElement("button", {
                                className: e,
                                onClick: this.onClickHandler
                            }, this.props.companySVG)
                        }
                    }]), t
                }();
            p.propTypes = f, p.defaultProps = {
                onClick: function() {}
            };
            t.ShareIcon = (0, c.translate)()((0, o.connect)(function(e) {
                var t = e.streamMetadata,
                    a = e.window;
                return {
                    broadcaster: t.channel,
                    clipUrl: t.url,
                    clipTitle: t.title,
                    localWindow: a
                }
            })(p))
        },
        LvtY: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CrossSVG = void 0;
            var n = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(a("q1tI"));
            t.CrossSVG = function() {
                return n.default.createElement("svg", {
                    viewBox: "0 0 30 30",
                    className: "svg--cross"
                }, n.default.createElement("path", {
                    clipRule: "evenodd",
                    d: "M20.657 10.757L16.414 15l4.243 4.242-1.415 1.415L15 16.414l-4.243 4.243-1.414-1.415L13.586 15l-4.243-4.243 1.414-1.414L15 13.586l4.242-4.243 1.415 1.414z",
                    fillRule: "evenodd"
                }))
            }
        },
        TwX9: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.postPlayContentDataSelector = t.ITEM_TYPE_LIVE = t.ITEM_TYPE_VOD = t.ITEM_TYPE_CLIP = void 0;
            var n = a("SaYp"),
                r = a("GHcg"),
                l = a("XN9g"),
                i = a("7oTh"),
                o = a("ggpQ"),
                u = a("FxCM");

            function c(e) {
                if (Array.isArray(e)) {
                    for (var t = 0, a = Array(e.length); t < e.length; t++) a[t] = e[t];
                    return a
                }
                return Array.from(e)
            }
            var s = t.ITEM_TYPE_CLIP = "clip",
                d = t.ITEM_TYPE_VOD = "vod",
                f = t.ITEM_TYPE_LIVE = "live_channel";

            function p(e, t) {
                return e ? (0, r.ttAnalyticsQuery)(e, n.TRACKING_MEDIUM_EMBED, t) : ""
            }
            var m = function(e) {
                    return {
                        itemType: d,
                        linkUrl: function(e) {
                            var t = e.streamMetadata,
                                a = t.clipVideoId,
                                n = t.clipVideoOffset;
                            return p(r.Links.default.getVodLink(a, (0, u.toURLString)(n)), "recommend_vod_link")
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
                h = function(e) {
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
                y = function(e) {
                    var t = e.id,
                        a = e.url,
                        r = e.thumbnails.medium,
                        l = e.viewCount,
                        i = e.game,
                        o = e.title,
                        u = e.channel,
                        c = u.name,
                        d = u.displayName;
                    return {
                        itemType: s,
                        linkUrl: p(a, n.TRACKING_PROPERTY_EMBED_CLIP_REC),
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
                var a = [(0, i.broadcasterLiveStatus)(e, e.streamMetadata.channel.name) === o.BROADCASTER_IS_LIVE ? h(e) : null, e.streamMetadata.clipHasVod ? m(e) : null].filter(function(e) {
                    return Boolean(e)
                });
                return [].concat(c(a), c(function(e, t) {
                    var a = (0, l.getRecommendedClipsForSlug)(e, e.streamMetadata.slug),
                        n = Math.min(t, a.length);
                    return a.slice(0, n).map(y)
                }(e, t - a.length)))
            }
        },
        Wlf4: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.PlayerClickHandlerOverlay = t.PlayerClickHandlerOverlayContainer = t.mapDispatchToProps = t.mapStateToProps = void 0;
            var n = function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var n = t[a];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                        }
                    }
                    return function(t, a, n) {
                        return a && e(t.prototype, a), n && e(t, n), t
                    }
                }(),
                r = a("q1tI"),
                l = s(r),
                i = s(a("17x9")),
                o = a("/MKj"),
                u = a("4b1H"),
                c = a("KE4D");

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
                    }(t, r.Component), n(t, [{
                        key: "onVideoClick",
                        value: function() {
                            var e = this.props,
                                t = e.isPaused,
                                a = e.playVideo,
                                n = e.pauseVideo;
                            t ? a() : n()
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
        Wsnx: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.BroadcasterPlayingGameLink = t.BroadcasterPlayingGameLinkComponent = void 0;
            var n = u(a("q1tI")),
                r = u(a("17x9")),
                l = a("9kay"),
                i = a("EUmO"),
                o = a("mDwp");

            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var c = {
                    broadcasterDisplayName: r.default.string.isRequired,
                    channelURL: r.default.string.isRequired,
                    game: r.default.string,
                    gameUrl: r.default.string
                },
                s = t.BroadcasterPlayingGameLinkComponent = function(e) {
                    var t = e.broadcasterDisplayName,
                        a = e.channelURL,
                        r = e.game,
                        u = e.gameUrl,
                        c = n.default.createElement(i.BroadcasterLink, {
                            broadcasterDisplayName: t,
                            channelURL: a
                        });
                    return r ? n.default.createElement(l.Interpolate, {
                        i18nKey: "{{displayName}} playing {{game}}",
                        displayName: c,
                        game: n.default.createElement(o.GameLink, {
                            game: r,
                            gameLink: u
                        })
                    }) : c
                };
            s.defaultProps = {
                game: "",
                gameUrl: ""
            }, s.propTypes = c;
            t.BroadcasterPlayingGameLink = (0, l.translate)()(s)
        },
        a1sr: function(e, t, a) {},
        aRgI: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var n = t[a];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                        }
                    }
                    return function(t, a, n) {
                        return a && e(t.prototype, a), n && e(t, n), t
                    }
                }(),
                r = g(a("q1tI")),
                l = g(a("17x9")),
                i = a("CJqN"),
                o = a("inRc"),
                u = a("/reP"),
                c = a("2gyh"),
                s = a("Cb6d"),
                d = a("FwvF"),
                f = a("x/3i"),
                p = a("Wlf4"),
                m = a("kMbU"),
                h = a("olXp"),
                y = a("HqgC"),
                v = a("j63F"),
                _ = a("A8Fc"),
                b = a("IPyt");

            function g(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            a("a1sr");
            var C = {
                    store: l.default.object.isRequired
                },
                E = {
                    player: l.default.object.isRequired,
                    root: l.default.object.isRequired
                },
                k = function(e) {
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
                    }(t, r.default.Component), n(t, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this.props,
                                t = e.player,
                                a = e.root,
                                n = this.context.store;
                            a.classList.add("player", "theme--dark");
                            var r = new d.ClipsLoadingTimeSpentTracker(n, t),
                                l = new f.ClipsMinutesWatched(n);
                            this.setState({
                                legacyUI: [r, l]
                            }), n.dispatch((0, _.trackClipsAppReadyEvent)())
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.state.legacyUI.forEach(function(e) {
                                e.destroy()
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return r.default.createElement("div", {
                                id: "clips_embed"
                            }, r.default.createElement(m.ClipPlayButtonOverlay, null), r.default.createElement(p.PlayerClickHandlerOverlay, null), r.default.createElement(y.ClipShareOverlayContainer, null), r.default.createElement(h.ClipKeyboardShortcutsOverlayContainer, null), r.default.createElement(b.AutomatedMuteOverlay, null), r.default.createElement(i.LoadingOverlay, null), r.default.createElement(u.PlayerRoot, {
                                root: this.props.root
                            }, r.default.createElement(c.ShowOnHover, null, r.default.createElement(s.ClipInfoOverlay, null), r.default.createElement(v.ClipPostplayRecommendations, null), r.default.createElement(o.PlayerControls, {
                                showTopControls: !1,
                                showBottomControls: !0,
                                player: this.props.player
                            }))))
                        }
                    }]), t
                }();
            t.default = k, k.contextTypes = C, k.propTypes = E
        },
        bm50: function(e, t, a) {
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
        cS6m: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.RedditSVG = void 0;
            var n = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(a("q1tI"));
            t.RedditSVG = function() {
                return n.default.createElement("svg", {
                    viewBox: "0 0 32 32"
                }, n.default.createElement("path", {
                    d: "M21.998 8.692c.545 0 .988.447.988.994a.992.992 0 0 1-.987.995.991.991 0 0 1-.987-.995c0-.547.442-.994.987-.994h-.001zm-.5 5.159c-1.38-.895-3.162-1.418-5.07-1.494l1.047-3.335 2.85.675c.003.923.75 1.671 1.674 1.676a1.683 1.683 0 0 0 1.674-1.687A1.683 1.683 0 0 0 22 8c-.688 0-1.28.42-1.538 1.018l-3.139-.744a.342.342 0 0 0-.406.233l-1.208 3.842c-2.005.038-3.887.567-5.328 1.502a2.014 2.014 0 0 0-1.347-.518A2.042 2.042 0 0 0 7 15.38c0 .72.376 1.386.992 1.757-.03.191-.045.386-.045.58 0 1.465.85 2.83 2.396 3.845a8.483 8.483 0 0 0 1.62.822c2.509.964 6.692.602 7.952 0 1.26-.601 1.128-.498 1.62-.822 1.545-1.015 2.396-2.38 2.396-3.844 0-.195-.015-.39-.045-.581a2.049 2.049 0 0 0-1.04-3.805c-.499 0-.979.185-1.348.519zm-5.56 7.327c1.333 0 2.284-.294 2.887-.901a.348.348 0 0 0 0-.49.342.342 0 0 0-.486 0c-.468.47-1.26.699-2.4.699-1.141 0-1.932-.229-2.4-.698a.342.342 0 0 0-.486 0 .347.347 0 0 0 0 .489c.603.607 1.553.901 2.886.901zm2.695-5.688a1.245 1.245 0 0 0-1.238 1.248c0 .686.555 1.246 1.238 1.246a1.245 1.245 0 0 0 1.239-1.247c0-.687-.556-1.246-1.239-1.246zm-5.39.001c-.682 0-1.237.559-1.237 1.247 0 .686.555 1.245 1.238 1.245.682 0 1.237-.559 1.237-1.245 0-.688-.555-1.247-1.237-1.247z",
                    fillRule: "evenodd"
                }))
            }
        },
        eiBJ: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ShortcutRow = void 0;
            var n = l(a("q1tI")),
                r = l(a("17x9"));

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
                    a = e.value,
                    r = e.valueAlt,
                    l = a;
                return r && (l = n.default.createElement("span", null, a, n.default.createElement("span", {
                    className: "pl-panel__row-muted-value"
                }, "/"), r)), n.default.createElement("div", {
                    className: "pl-panel__body-row pl-flex flex--verticalCenter"
                }, n.default.createElement("div", {
                    className: "pl-panel__row-key pl-flex__item--grow"
                }, t), n.default.createElement("div", {
                    className: "pl-panel__row-value pl-flex__item--noGrow"
                }, l))
            }).propTypes = i
        },
        gGMp: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = function() {
                function e(e, t) {
                    for (var a = 0; a < t.length; a++) {
                        var n = t[a];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, a, n) {
                    return a && e(t.prototype, a), n && e(t, n), t
                }
            }();
            t.NumberFormatter = function() {
                function e(t) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this._value = t
                }
                return n(e, [{
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
        "h/Ds": function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CloseButtonSVG = void 0;
            var n = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(a("q1tI"));
            t.CloseButtonSVG = function() {
                return n.default.createElement("svg", {
                    width: "12",
                    height: "12",
                    viewBox: "0 0 12 12"
                }, n.default.createElement("path", {
                    d: "M11.657 1.757L7.414 6l4.243 4.242-1.415 1.415L6 7.414l-4.243 4.243-1.414-1.415L4.586 6 .343 1.757 1.757.343 6 4.586 10.242.343l1.415 1.414z",
                    fillRule: "evenodd"
                }))
            }
        },
        i3s7: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ClipShareOverlay = t.ClipShareOverlayComponent = void 0;
            var n = function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var n = t[a];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                        }
                    }
                    return function(t, a, n) {
                        return a && e(t.prototype, a), n && e(t, n), t
                    }
                }(),
                r = a("q1tI"),
                l = b(r),
                i = b(a("17x9")),
                o = a("9kay"),
                u = b(a("TSYQ")),
                c = a("I9bg"),
                s = a("LvtY"),
                d = a("uQze"),
                f = a("Hh1s"),
                p = a("C0vZ"),
                m = a("urmQ"),
                h = a("cS6m"),
                y = a("2kYa"),
                v = a("SaYp"),
                _ = b(a("P5Jw"));

            function b(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var g = (0, u.default)("flex", "flex--verticalCenter", "flex--horizontalCenter", "flex--nowrap", "cs-wrapper", "player-overlay--recommendations"),
                C = (0, u.default)("cs-input", "pl-flex", "pl-flex--horizontalCenter", "pl-flex--verticalCenter", "pl-flex--nowrap"),
                E = (0, u.default)("pl-flex", "pl-flex--verticalCenter", "pl-flex--horizontalCenter", "cs-wrapper", "player-overlay--recommendations"),
                k = (0, u.default)("cs-shareIcons", "pl-flex", "pl-flex--horizontalCenter", "pl-flex--verticalCenter", "pl-flex--nowrap"),
                w = t.ClipShareOverlayComponent = function(e) {
                    function t() {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t);
                        var e = function(e, t) {
                            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || "object" != typeof t && "function" != typeof t ? e : t
                        }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                        return e.hideEmbedLink = e.setShowEmbedLink.bind(e, !1), e.showEmbedLink = e.setShowEmbedLink.bind(e, !0), e.trackLinkClick = e.trackLinkClick.bind(e), e.trackShareClick = e.trackShareClick.bind(e), e.state = {
                            showEmbedLink: !1
                        }, e
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
                    }(t, r.Component), n(t, [{
                        key: "trackLinkClick",
                        value: function() {
                            this.trackShareClick("link")
                        }
                    }, {
                        key: "trackShareClick",
                        value: function(e) {
                            this.props.analyticsTracker.clipsTrackEvent(v.TRACKING_VIDEO_SHARE_EVENT, {
                                share_platform: e,
                                location: v.TRACKING_MEDIUM_EMBED
                            })
                        }
                    }, {
                        key: "setShowEmbedLink",
                        value: function(e) {
                            this.setState({
                                showEmbedLink: e
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.clipUrl,
                                a = e.clipEmbedUrl,
                                n = e.hideSharing,
                                r = e.t,
                                i = this.state.showEmbedLink,
                                o = l.default.createElement("button", {
                                    className: "pl-button pl-button--text cs-close-button",
                                    onClick: n
                                }, l.default.createElement("figure", {
                                    className: "cs-nav-icon"
                                }, l.default.createElement(s.CrossSVG, null)));
                            return i ? l.default.createElement("div", {
                                className: g
                            }, l.default.createElement("button", {
                                className: "pl-button pl-button--text cs-back-button",
                                onClick: this.hideEmbedLink
                            }, l.default.createElement("figure", {
                                className: "cs-nav-icon"
                            }, l.default.createElement(p.ChevronLeftSVG, null))), o, l.default.createElement("div", {
                                className: "flex flex--verticalCenter flex--horizontalCenter cs-layout theme--dark"
                            }, l.default.createElement("div", {
                                className: "cs-title pl-align-center"
                            }, l.default.createElement("h1", {
                                className: "pl-pd-b-0"
                            }, r("Embed"))), l.default.createElement("div", {
                                className: "cs-divider"
                            }), l.default.createElement("div", {
                                className: C
                            }, l.default.createElement(f.SelectableInput, {
                                id: "embed",
                                label: r("Embed Code"),
                                value: a,
                                onSelect: this.trackLinkClick
                            }), l.default.createElement(_.default, {
                                text: a
                            }, l.default.createElement("button", {
                                target: "_blank",
                                className: "pl-flex__item cs-button pl-button",
                                onClick: this.trackLinkClick
                            }, r("Copy")))))) : l.default.createElement("div", {
                                className: E
                            }, o, l.default.createElement("div", {
                                className: "pl-flex pl-flex--verticalCenter pl-flex--horizontalCenter cs-layout theme--dark"
                            }, l.default.createElement("div", {
                                className: "cs-title pl-align-center"
                            }, l.default.createElement("h1", {
                                className: "pl-mg-b-2"
                            }, r("Sharing is Caring"))), l.default.createElement("div", {
                                className: k
                            }, l.default.createElement(c.ShareIcon, {
                                companySVG: l.default.createElement(y.TwitterSVG, null),
                                companyName: "twitter",
                                onClick: this.trackShareClick
                            }), l.default.createElement(c.ShareIcon, {
                                companySVG: l.default.createElement(m.FacebookSVG, null),
                                companyName: "facebook",
                                onClick: this.trackShareClick
                            }), l.default.createElement(c.ShareIcon, {
                                companySVG: l.default.createElement(h.RedditSVG, null),
                                companyName: "reddit",
                                onClick: this.trackShareClick
                            }), l.default.createElement("button", {
                                className: "cs-icon cs-icon--embed",
                                onClick: this.showEmbedLink
                            }, l.default.createElement(d.EmbedSVG, null))), l.default.createElement("div", {
                                className: "cs-divider"
                            }), l.default.createElement("div", {
                                className: "cs-input pl-flex pl-flex--horizontalCenter pl-flex--verticalCenter pl-flex--nowrap"
                            }, l.default.createElement(f.SelectableInput, {
                                id: "link",
                                label: r("Link"),
                                value: t,
                                onSelect: this.trackLinkClick
                            }), l.default.createElement(_.default, {
                                text: t
                            }, l.default.createElement("button", {
                                target: "_blank",
                                className: "pl-flex__item button cs-button pl-button",
                                onClick: this.trackLinkClick
                            }, r("Copy"))))))
                        }
                    }]), t
                }();
            w.propTypes = {
                clipUrl: i.default.string.isRequired,
                hideSharing: i.default.func.isRequired,
                clipEmbedUrl: i.default.string.isRequired,
                analyticsTracker: i.default.object.isRequired,
                t: i.default.func.isRequired
            };
            t.ClipShareOverlay = (0, o.translate)()(w)
        },
        iD95: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ImageFallback = void 0;
            var n = function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var n = t[a];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                        }
                    }
                    return function(t, a, n) {
                        return a && e(t.prototype, a), n && e(t, n), t
                    }
                }(),
                r = a("q1tI"),
                l = o(r),
                i = o(a("17x9"));

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
                        var a = function(e, t) {
                            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || "object" != typeof t && "function" != typeof t ? e : t
                        }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                        return a.state = {
                            src: e.src
                        }, a.setImage = a.setImage.bind(a), a
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
                    }(t, r.Component), n(t, [{
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
                                a = e.src,
                                n = e.altSrc,
                                r = new Image;
                            r.onerror = function() {
                                return t.setState({
                                    src: n
                                })
                            }, r.onload = function() {
                                return t.setState({
                                    src: a
                                })
                            }, r.src = a
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
        j63F: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ClipPostplayRecommendations = t.ClipPostplayRecommendationsComponent = t.mapDispatchToProps = t.MAX_CONTENT_TO_SHOW = void 0;
            var n = function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var n = t[a];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                        }
                    }
                    return function(t, a, n) {
                        return a && e(t.prototype, a), n && e(t, n), t
                    }
                }(),
                r = a("q1tI"),
                l = b(r),
                i = b(a("17x9")),
                o = a("/MKj"),
                u = a("J0qE"),
                c = b(a("3OWR")),
                s = a("IyFf"),
                d = a("bm50"),
                f = a("jFcO"),
                p = a("TwX9"),
                m = a("SaYp"),
                h = a("d4Wk"),
                y = b(a("TSYQ")),
                v = a("ggpQ"),
                _ = a("7oTh");

            function b(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var g = t.MAX_CONTENT_TO_SHOW = 2,
                C = (0, y.default)("pl-flex", "pl-flex--verticalCenter", "pl-flex--horizontalCenter", "player-recommend", "pl-flex--nowrap", "pl-rec-wrapper", "player-overlay");

            function E(e, t) {
                return e.map(function(e) {
                    return e[t]
                }).map(function(e) {
                    return null === e ? "null" : e
                }).join(",")
            }
            var k = {
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
                w = t.mapDispatchToProps = function(e) {
                    return {
                        fetchRecommendationsSets: function() {
                            e((0, s.fetchClipRecommendations)())
                        }
                    }
                },
                S = t.ClipPostplayRecommendationsComponent = function(e) {
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
                    }(t, r.Component), n(t, [{
                        key: "handleTrackForClickGenerator",
                        value: function(e, t) {
                            var a = this,
                                n = e.itemId,
                                r = e.viewCount,
                                l = e.channel,
                                i = e.game,
                                o = e.itemType;
                            return function() {
                                a.props.analyticsTracker.clipsTrackEvent(m.TRACKING_ITEM_SECTION_CLICK, (0, c.default)({}, a.props.recommendationTrackingProperties, {
                                    item_id: n,
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
                                a = e.hasFetchedBroadcasterInfo,
                                n = e.clipSlug,
                                r = e.fetchRecommendationsSets,
                                l = e.channelName;
                            n !== this.props.clipSlug && (this.attemptedRecommendationsFetched = !1), !this.attemptedRecommendationsFetched && n && l && (r(), this.attemptedRecommendationsFetched = !0), t && n && a && !this.state.isImagePreloadingComplete && this.handleContentPreLoading(e), e.showOverlay && !this.trackedForVideoEnd ? (this.props.analyticsTracker.clipsTrackEvent(m.TRACKING_ITEM_SECTION_LOAD, (0, c.default)({}, this.props.recommendationTrackingProperties, function(e) {
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
                                a = e.postPlayContentData,
                                n = a.map(function(e) {
                                    return e.imageUrl
                                });
                            (0, d.preloadImages)([].concat(function(e) {
                                if (Array.isArray(e)) {
                                    for (var t = 0, a = Array(e.length); t < e.length; t++) a[t] = e[t];
                                    return a
                                }
                                return Array.from(e)
                            }(n), [u.DEFAULT_AVATAR_URL]));
                            var r = a.slice(0, 2).map(function(e) {
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
            S.propTypes = k;
            t.ClipPostplayRecommendations = (0, o.connect)(function(e) {
                var t = e.streamMetadata,
                    a = e.playback,
                    n = e.playerDimensions,
                    r = e.analyticsTracker,
                    l = Boolean(e.clipRecommendations.hasFetched[t.slug]),
                    i = a.ended;
                return {
                    clipSlug: t.slug,
                    channelName: t.channel.name,
                    showOverlay: l && i,
                    postPlayContentData: (0, p.postPlayContentDataSelector)(e, g),
                    hasFetchedRelatedClips: l,
                    playerDimensions: n,
                    hasFetchedBroadcasterInfo: (0, _.broadcasterLiveStatus)(e, t.channel.name) !== v.NOT_AVAILABLE,
                    analyticsTracker: r,
                    recommendationTrackingProperties: (0, h.clipsRecommendationProperties)(e)
                }
            }, w)(S)
        },
        jFcO: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.PostplayContentTwoLayout = v;
            var n = o(a("q1tI")),
                r = o(a("17x9")),
                l = o(a("TSYQ")),
                i = a("Hz4O");

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
                h = (0, l.default)("pl-flex", "pl-flex--verticalCenter", "pl-flex--horizontalCenter", "pl-flex--nowrap", "cem-rec-two-up-wrap", "pl-mg-x-1");
            var y = {
                postPlayContentData: r.default.arrayOf(r.default.object).isRequired,
                playerWidth: r.default.number.isRequired,
                playerHeight: r.default.number.isRequired
            };

            function v(e) {
                var t = e.postPlayContentData,
                    a = e.playerWidth,
                    r = e.playerHeight;
                return n.default.createElement("div", {
                    className: h
                }, t.map(function(e) {
                    return n.default.createElement(i.CardContentPreview, {
                        linkUrl: e.linkUrl,
                        itemType: e.itemType,
                        imageUrl: e.imageUrl,
                        title: e.title,
                        viewCount: e.viewCount,
                        game: e.game,
                        displayName: e.displayName,
                        trackSelectionClick: e.trackSelectionClick,
                        cardDimensions: function(e, t) {
                            var a = e - (e < p ? f : d),
                                n = (t > s ? s : t - c) / 2,
                                r = n * (1 / u);
                            return r > a && (n = a * u, r = a), {
                                thumb: {
                                    width: n,
                                    height: r
                                },
                                card: {
                                    width: n,
                                    height: r + m
                                }
                            }
                        }(r, a),
                        key: e.linkUrl
                    })
                }))
            }
            v.propTypes = y
        },
        kMbU: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ClipPlayButtonOverlay = t.mapStateToProps = void 0, t.ClipPlayButtonOverlayContainer = d;
            var n = u(a("q1tI")),
                r = u(a("17x9")),
                l = a("/MKj"),
                i = a("4b1H"),
                o = a("xkJG");

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
                    a = e.play;
                return t ? n.default.createElement(o.PlayButtonOverlay, {
                    onClick: a
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
        l8S6: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.VodTinySVG = void 0;
            var n = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(a("q1tI"));
            t.VodTinySVG = function() {
                return n.default.createElement("svg", {
                    viewBox: "0 0 15 15"
                }, n.default.createElement("path", {
                    d: "M3 12V3l9 4.5z",
                    fillRule: "evenodd"
                }))
            }
        },
        mDwp: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.GameLink = void 0;
            var n = l(a("q1tI")),
                r = l(a("17x9"));

            function l(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var i = {
                game: r.default.string.isRequired,
                gameLink: r.default.string.isRequired
            };
            (t.GameLink = function(e) {
                var t = e.game,
                    a = e.gameLink;
                return n.default.createElement("a", {
                    target: "_blank",
                    className: "broadcaster-info__game-link",
                    rel: "nofollow noopener noreferrer",
                    href: a
                }, t)
            }).propTypes = i
        },
        olXp: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ClipKeyboardShortcutsOverlayContainer = t.ClipKeyboardShortcutsOverlayContainerComponent = void 0;
            var n = u(a("q1tI")),
                r = u(a("17x9")),
                l = a("/MKj"),
                i = a("/PkA"),
                o = a("uNCh");

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
                    return e.shouldShowShortcutsPanel ? n.default.createElement(i.ClipKeyboardShortcutsOverlay, e) : null
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
        sJUF: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.cleanCondense = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1 / 0,
                    a = e.replace(/\s+/g, n).trim(),
                    l = /\S/.test(a[t] || r) && /\S/.test(a[t - 1] || r),
                    i = a.substring(0, t).trim(),
                    o = i.indexOf(n) >= 0;
                if (l && o) {
                    var u = i.split(n);
                    return u.slice(0, u.length - 1).join(n)
                }
                return i
            };
            var n = " ",
                r = ""
        },
        uQze: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.EmbedSVG = void 0;
            var n = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(a("q1tI"));
            t.EmbedSVG = function() {
                return n.default.createElement("svg", {
                    viewBox: "0 0 32 32"
                }, n.default.createElement("path", {
                    d: "M13.5 23H15l3-13h-1.5l-3 13zm-6.543-7v1L12 21v-2l-3-2.5 3-2.5v-2l-5.043 4zM25 16v1l-5 4v-2l2.957-2.5L20 14v-2l5 4z",
                    fillRule: "evenodd"
                }))
            }
        },
        urmQ: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.FacebookSVG = void 0;
            var n = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(a("q1tI"));
            t.FacebookSVG = function() {
                return n.default.createElement("svg", {
                    viewBox: "0 0 32 32"
                }, n.default.createElement("path", {
                    clipRule: "evenodd",
                    d: "M16.842 24v-6.842h2.653l.398-2.667h-3.051V12.79c0-.772.247-1.298 1.526-1.298L20 11.49V9.105A25.285 25.285 0 0 0 17.623 9c-2.353 0-3.963 1.243-3.963 3.525v1.967H11v2.666h2.66V24h3.182",
                    fillRule: "evenodd"
                }))
            }
        },
        "x/3i": function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ClipsMinutesWatched = t.SECONDS_TO_MILLIS_MULT = void 0;
            var n = function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var n = t[a];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                        }
                    }
                    return function(t, a, n) {
                        return a && e(t.prototype, a), n && e(t, n), t
                    }
                }(),
                r = a("SaYp"),
                l = a("ikhW"),
                i = a("uAOA");
            var o = t.SECONDS_TO_MILLIS_MULT = 1e3;
            t.ClipsMinutesWatched = function(e) {
                function t(e) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    var a = function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                    return a.store = e, a.trackClipsMinuteWatched = a.trackClipsMinuteWatched.bind(a), a.handlePlaybackChange = a.handlePlaybackChange.bind(a), a.minWatchedEmitter = new l.MinutesWatched, a.minWatchedEmitter.on(l.EVENT_MINUTE, a.trackClipsMinuteWatched), a.subscribe(e, ["playback"], function(e) {
                        var t = e.playback;
                        a.handlePlaybackChange(t)
                    }), a.handlePlaybackChange(e.getState()), a
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
                }(t, i.UIStateSubscriber), n(t, [{
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