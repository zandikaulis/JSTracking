webpackJsonp([49], {
    1001: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
        }), n.d(t, "d", function() {
            return a
        }), n.d(t, "e", function() {
            return s
        }), n.d(t, "c", function() {
            return i
        }), n.d(t, "b", function() {
            return o
        });
        var i, r = "carousel-player__main-description",
            a = "carousel-player-left-button",
            s = "carousel-player-right-button";
        ! function(e) {
            e[e.Horizontal = 1] = "Horizontal", e[e.Vertical = 2] = "Vertical"
        }(i || (i = {}));
        var o;
        ! function(e) {
            e[e.Stream = 1] = "Stream", e[e.Vod = 2] = "Vod"
        }(o || (o = {}))
    },
    1031: function(e, t, n) {
        "use strict";

        function i(e) {
            return {
                trackingSet: e.ads.trackingSet
            }
        }
        var r = n(8),
            a = n(0),
            s = n(1),
            o = n(2),
            l = n(111),
            c = n(415),
            u = "#google_ads_iframe_\\/3576121\\/twitch\\/directory_0",
            d = "#google_ads_iframe_\\/3576121\\/twitch\\/directory_1",
            p = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.logger = o.i.withCategory("ad-slot"), n.createSlot = function(e) {
                        return a.__awaiter(n, void 0, void 0, function() {
                            var t, n;
                            return a.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        if (this.state.slotCreated) return [2];
                                        this.setState({
                                            slotCreated: !0
                                        }), i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, , 4]), [4, l.a.createSlot(e.slotID, e.adUnit, e.adSize, e.targeting, e.autoEnable)];
                                    case 2:
                                        return t = i.sent(), Object(c.h)(t.getSlotElementId()), this.setState({
                                            slot: t
                                        }), [3, 4];
                                    case 3:
                                        return n = i.sent(), this.logger.warn("Unable to create ad slot", {
                                            slotID: e.slotID,
                                            adUnit: e.adUnit,
                                            adSize: e.adSize,
                                            targeting: e.targeting,
                                            autoEnable: e.autoEnable
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, n.setRef = function(e) {
                        return n.slotRef = e
                    }, n.onSlotRenderEnd = function(e) {
                        var t = e.slot.getSlotElementId();
                        if (n.state.slot && t === n.props.slotID) {
                            if (n.logger.debug("Ad slot render ended", {
                                    elementID: t,
                                    lineItemID: e.lineItemId,
                                    createdID: e.creativeId,
                                    isEmpty: e.isEmpty,
                                    serviceName: e.serviceName,
                                    size: e.size
                                }), e.isEmpty) return;
                            if (!n.slotRef) return;
                            if (n.props.slotID === c.b.anonFront.takeover) return void(document.body.classList.contains("takeover") && n.setState({
                                shouldDisplay: !0
                            }, function() {
                                return n.slotRendered(e.slot)
                            }));
                            if (n.props.slotID === c.b.directory.banner) {
                                var i = n.slotRef.querySelector(u);
                                return void(i && 1 !== i.clientWidth && n.setState({
                                    shouldDisplay: !0
                                }, function() {
                                    return n.slotRendered(e.slot)
                                }))
                            }
                            if (n.props.slotID === c.b.directory.rectangle) {
                                var i = n.slotRef.querySelector(d);
                                return void(i && 1 !== i.clientWidth && n.setState({
                                    shouldDisplay: !0
                                }, function() {
                                    return n.slotRendered(e.slot)
                                }))
                            }
                            n.setState({
                                shouldDisplay: !0
                            }, function() {
                                return n.slotRendered(e.slot)
                            })
                        }
                    }, n.slotRendered = function(e) {
                        n.props.slotRendered && n.props.slotRendered(e)
                    }, n.state = {
                        shouldDisplay: !1
                    }, n
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    c.g.addListener(c.f, this.onSlotRenderEnd), this.props.trackingSet ? (this.logger.debug("Tracking is set. Creating slot (componentDidMount)", this.props.slotID), this.createSlot(this.props)) : this.logger.debug("Tracking is not set. Skipping slot creation (componentDidMount)", this.props.slotID)
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.state.slotCreated || (e.trackingSet ? (this.logger.debug("Tracking is set. Creating slot (componentWillReceiveProps)", this.props.slotID), this.createSlot(e)) : this.logger.debug("Tracking is not set. Skipping slot creation (componentWillReceiveProps)", this.props.slotID))
                }, t.prototype.componentWillUnmount = function() {
                    this.logger.debug("Destroying Slot (componentWillUnmount)", this.props.slotID), c.g.removeListener(c.f, this.onSlotRenderEnd), this.state.slot && l.a.destroySlot(this.state.slot)
                }, t.prototype.shouldComponentUpdate = function(e, t) {
                    return t.shouldDisplay !== this.state.shouldDisplay
                }, t.prototype.render = function() {
                    var e = a.__assign({}, this.props.injectStyles);
                    return this.state.shouldDisplay || (e.display = "none"), s.createElement("div", {
                        style: e,
                        id: this.props.slotID,
                        ref: this.setRef
                    })
                }, t
            }(s.Component),
            m = p,
            h = Object(r.a)(i)(m);
        n.d(t, "a", function() {
            return h
        })
    },
    1051: function(e, t, n) {
        "use strict";
        var i, r, a, s = n(4),
            o = n(1),
            l = n(2),
            c = n(1052),
            u = n(3),
            d = (n(1132), i = {}, i[c.a.Live] = "stream-type-indicator--live", i[c.a.Premiere] = "stream-type-indicator--premiere", i[c.a.Rerun] = "stream-type-indicator--rerun", i[c.a.WatchParty] = "stream-type-indicator--rerun", i),
            p = (r = {}, r[c.a.Premiere] = u._9.VideoPremiere, r[c.a.Rerun] = u._9.VideoRerun, r[c.a.WatchParty] = u._9.VideoRerun, r),
            m = (a = {}, a[c.a.Premiere] = u._10.Live, a[c.a.Rerun] = u._10.Inherit, a[c.a.WatchParty] = u._10.Inherit, a),
            h = function(e) {
                var t = {
                    "stream-type-indicator": !0
                };
                t[d[e.type]] = !0;
                var n;
                n = e.type === c.a.Live ? o.createElement(u.U, {
                    className: "stream-type-indicator__live-wrapper",
                    display: u.H.Flex,
                    alignItems: u.c.Center
                }, o.createElement(u.V, {
                    size: u.W.Small
                })) : o.createElement(u._8, {
                    asset: p[e.type],
                    type: m[e.type],
                    width: 14,
                    height: 14
                });
                var i;
                switch (e.type) {
                    case c.a.Live:
                        i = Object(l.d)("Live", "StreamTypeIndicator");
                        break;
                    case c.a.Premiere:
                        i = Object(l.d)("Premiere", "StreamTypeIndicator");
                        break;
                    case c.a.Rerun:
                    case c.a.WatchParty:
                        i = Object(l.d)("Rerun", "StreamTypeIndicator");
                        break;
                    default:
                        i = ""
                }
                return o.createElement(u._17, {
                    className: s(t),
                    background: u.m.Overlay,
                    padding: {
                        x: .5
                    },
                    borderRadius: u.s.Small,
                    display: u.H.Flex
                }, o.createElement(u.U, {
                    display: u.H.Flex,
                    margin: {
                        right: .5
                    }
                }, n), o.createElement(u._21, {
                    type: u._26.Span
                }, i))
            };
        n.d(t, "a", function() {
            return h
        })
    },
    1052: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var i;
        ! function(e) {
            e.Live = "live", e.WatchParty = "watch_party", e.Premiere = "premiere", e.Rerun = "rerun"
        }(i || (i = {}))
    },
    1056: function(e, t, n) {
        "use strict";

        function i(e) {
            return {
                isLoggedIn: Object(w.d)(e)
            }
        }

        function r(e) {
            return Object(C.bindActionCreators)({
                login: function() {
                    return Object(O.f)(N.a.ReportHoster)
                },
                showReportUserModal: function(e) {
                    var t = u.__rest(e, []);
                    return Object(U.d)(I.a, t)
                }
            }, e)
        }

        function a() {
            return !!window.Twitch && !!window.Twitch.Player
        }

        function s(e) {
            return {
                theatreModeEnabled: e.ui.theatreModeEnabled,
                isLoggedIn: Object(w.d)(e),
                authToken: Object(w.a)(e)
            }
        }

        function o(e) {
            return Object(C.bindActionCreators)({
                enableTheatreMode: F.k,
                disableTheatreMode: F.j
            }, e)
        }

        function l(e, t, n) {
            if (!e.collectionID && e.videoID) return void t.push("/videos/" + e.videoID);
            if (e.collectionID && e.videoID) {
                if (n && n.currentVideoID && n.currentCollectionID && n.currentVideoID === e.videoID && n.currentCollectionID === e.collectionID) return;
                return void t.push("/videos/" + e.videoID + "?collection=" + e.collectionID)
            }
            if (e.collectionID && !e.videoID) return void t.push("/collections/" + e.collectionID);
            h.i.withCategory("video-player").error(new Error("No collection or video specified from the emitted player transition event."), "No collection or video specified from the emitted player transition event.")
        }
        var c, u = n(0),
            d = n(4),
            p = n(1),
            m = n(12),
            h = n(2),
            g = n(275),
            b = n(64),
            f = n(37),
            S = n(46),
            v = n(14),
            y = n(921),
            k = n(919),
            _ = n(934),
            E = n(3),
            P = (n(1274), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleReportHosterClick = function() {
                        t.props.isLoggedIn ? t.props.showReportUserModal({
                            onClose: t.handleReportModalClose,
                            reportContext: {
                                contentType: k.a.User,
                                targetUserID: t.props.hostChannelID
                            },
                            title: Object(h.d)("Report {channelDisplayName}", {
                                channelDisplayName: t.props.hostChannelDisplayName
                            }, "VideoPlayerHostingUI")
                        }) : t.props.login()
                    }, t.handleReportModalClose = function(e) {
                        (e === y.b.MutationError || e === y.b.Success) && t.props.history.push("/")
                    }, t
                }
                return u.__extends(t, e), t.prototype.render = function() {
                    var e = !!this.props.hostedChannelDisplayName,
                        t = d("video-player-hosting-ui__header", (i = {}, i["video-player-hosting-ui__header--visible"] = e, i["video-player-hosting-ui__header--hidden"] = !e, i)),
                        n = d("video-player-hosting-ui__footer", (r = {}, r["video-player-hosting-ui__footer--visible"] = e, r["video-player-hosting-ui__footer--hidden"] = !e, r));
                    return p.createElement(E.U, {
                        className: "video-player-hosting-ui__container " + Object(S.b)(f.a.Dark)
                    }, p.createElement(m.a, {
                        key: "hosting-ui-header",
                        className: "video-player-hosting-ui__link",
                        to: {
                            pathname: "/" + this.props.hostedChannelLogin,
                            state: {
                                medium: v.PageviewMedium.Channel,
                                content: v.PageviewContent.Host
                            }
                        },
                        "data-a-target": "hosting-ui-link",
                        "data-test-selector": "video-player-hosting-ui__header"
                    }, e && this.renderHeader(t)), p.createElement("span", {
                        key: "video-player"
                    }, this.props.children), p.createElement(E._17, {
                        key: "hosting-ui-footer",
                        className: n,
                        padding: 1,
                        background: E.m.Base,
                        zIndex: E._38.Above,
                        position: E._2.Relative,
                        "data-test-selector": "video-player-hosting-ui__footer",
                        "data-a-target": "hosting-ui-footer"
                    }, e && this.renderFooter()));
                    var i, r
                }, t.prototype.renderHeader = function(e) {
                    return p.createElement(E._17, {
                        className: e,
                        display: E.H.Flex,
                        alignItems: E.c.Center,
                        padding: {
                            x: 1,
                            y: .5
                        },
                        background: E.m.Base,
                        "data-a-target": "hosting-ui-header"
                    }, p.createElement(E.U, {
                        className: "video-player-hosting-ui__avatar-container"
                    }, p.createElement(E.l, {
                        imageSrc: this.props.hostedChannelProfileImageURL || "",
                        size: 30,
                        imageAlt: Object(h.d)("Hosted Channel {hostedChannelDisplayName}'s Avatar", {
                            hostedChannelDisplayName: this.props.hostedChannelDisplayName || ""
                        }, "VideoPlayerHostingUI")
                    })), p.createElement(E._17, {
                        margin: {
                            left: 1
                        },
                        fontSize: E.L.Size5,
                        color: E.F.Base
                    }, Object(h.d)("Hosting", "VideoPlayerHostingUI"), " ", p.createElement(E._17, {
                        className: "video-player-hosting-ui__channel-name",
                        color: E.F.Link,
                        "data-a-target": "hosting-ui-channel-name"
                    }, this.props.hostedChannelDisplayName)))
                }, t.prototype.renderFooter = function() {
                    return p.createElement(E.U, {
                        padding: {
                            y: .5
                        },
                        display: E.H.Flex,
                        justifyContent: E.T.Between
                    }, p.createElement(E.U, {
                        display: E.H.Flex
                    }, p.createElement(E.U, {
                        margin: {
                            right: 1
                        }
                    }, p.createElement(g.a, {
                        "data-a-target": "hosting-ui-follow-button",
                        channelName: this.props.hostedChannelLogin || "",
                        channelLogin: this.props.hostedChannelLogin,
                        hostChannelLogin: this.props.hostChannelLogin,
                        hostChannelID: this.props.hostChannelID,
                        isHostedFollow: !0,
                        balloonDirection: E.q.BottomLeft
                    })), p.createElement(E.U, null, p.createElement(_.b, {
                        channelLogin: this.props.hostedChannelLogin,
                        hostChannelID: this.props.hostChannelID,
                        hostChannelLogin: this.props.hostChannelLogin,
                        "data-a-target": "hosting-ui-subscribe-button"
                    }))), p.createElement(b.a, null, p.createElement(E.v, {
                        type: E.w.Hollow,
                        ariaLabel: Object(h.d)("More options", "HostingUI"),
                        icon: E._9.More,
                        onClick: this.handleReportHosterClick,
                        "data-a-target": "hosting-ui-more-button"
                    }), p.createElement(E.p, {
                        direction: E.q.TopRight,
                        "data-a-target": "hosting-ui-more-balloon"
                    }, p.createElement(E.U, {
                        padding: {
                            y: 1
                        }
                    }, p.createElement(E.S, {
                        onClick: this.handleReportHosterClick,
                        "data-a-target": "hosting-ui-report-button"
                    }, p.createElement(E.U, {
                        padding: {
                            x: 1,
                            y: .5
                        }
                    }, Object(h.d)("Report {hostChannelDisplayName}", {
                        hostChannelDisplayName: this.props.hostChannelDisplayName
                    }, "VideoPlayerHostingUI")))))))
                }, t
            }(p.Component)),
            T = n(8),
            C = n(11),
            N = n(51),
            U = n(50),
            O = n(35),
            w = n(19),
            I = n(928),
            D = Object(T.a)(i, r)(Object(m.f)(P)),
            F = n(69),
            R = n(427),
            x = n(456),
            L = n(21),
            j = n(998),
            A = n(6);
        ! function(e) {
            e.LoadStart = "loadstart", e.Error = "error", e.LoadedMetadata = "loadedmetadata", e.CanPlay = "canplay", e.Playing = "playing", e.Waiting = "waiting", e.Seeking = "seeking", e.Seeked = "seeked", e.Ended = "ended", e.DurationChange = "durationchange", e.TimeUpdate = "timeupdate", e.Play = "play", e.Pause = "pause", e.VolumeChange = "volumechange", e.RateChange = "ratechange"
        }(c || (c = {}));
        var M;
        ! function(e) {
            e.PlayerInit = "init", e.ContentShowing = "contentShowing", e.PlaybackStatistics = "playbackStatistics", e.ChansubRequired = "chansubRequired", e.VideoFailure = "videoFailure", e.Formats = "videoFormats", e.ABSStreamFormatChange = "abs_stream_format_change", e.FormatChanged = "videoFormatChanged", e.TimeChange = "timeChange", e.BufferChange = "bufferChange", e.SegmentChange = "segmentchange", e.UsherFailError = "usherFail", e.CaptionUpdate = "captions", e.SeekFailed = "seekfailed", e.VariantSwitchRequest = "variantSwitchRequested", e.ViewersChange = "viewerschange", e.StreamLoaded = "streamLoaded", e.VideoLoaded = "videoLoaded", e.VideoPaused = "videoPaused", e.QualityChange = "qualitychange", e.Online = "online", e.Offline = "offline", e.Restricted = "restricted", e.CastingChange = "castingchange", e.TheatreChange = "theatrechange", e.MidrollRequested = "midrollrequested", e.ManifestExtraInfo = "manifestExtraInfo", e.TransitionToCollectionVOD = "transitionToCollectionVod", e.TransitionToRecommendedVOD = "transitionToRecommendedVod", e.StitchedAdStart = "stitchedadstart", e.StichedAdEnd = "stitchedadend", e.PersistenPlayerToggle = "persistentPlayerEnableToggle", e.StatsUpdate = "statsupdate", e.PromptLoginModal = "prompt login modal", e.OpenStream = "openStream", e.PlayerReady = "ready", e.FullscreenChange = "fullscreenchange"
        }(M || (M = {}));
        var B, G = (n(1275), n(978));
        ! function(e) {
            e.Embed = "embed", e.Frontpage = "frontpage", e.Site = "site"
        }(B || (B = {}));
        var V = {
                allowfullscreen: !0,
                branding: !1,
                channelInfo: !1,
                controls: !0,
                height: "100%",
                playsinline: !0,
                player: B.Site,
                showInfo: !1,
                showtheatre: !1,
                trackingProperties: {
                    client_app: "twilight"
                },
                width: "100%",
                oauth_token: ""
            },
            H = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.logger = h.i.withCategory("video-player"), n.checkPlayerDependencyStatus = function() {
                        a() ? (n.setState({
                            canInitializePlayer: !0
                        }), n.checkPlayerDependencyAnimationFrame = null) : n.checkPlayerDependencyAnimationFrame = requestAnimationFrame(n.checkPlayerDependencyStatus)
                    }, n.attachRef = function(e) {
                        return n.playerRef = e
                    }, n.onOpenStream = function() {
                        n.props.playerTypeOverride === B.Frontpage && (n.props.channelLogin ? h.n.history.push("/" + n.props.channelLogin) : n.props.vodID ? h.n.history.push("/videos/" + n.props.vodID) : n.props.collectionID && h.n.history.push("/collections/" + n.props.collectionID))
                    }, n.onPlayerReady = function() {
                        n.player && (n.logger.debug("Ready"), n.props.latencyTracking.reportInteractive(), n.hasPlayed = !1, n.props.latencyTracking.reportCustomEvent(n.playerLoaded), n.setState({
                            playerInitialized: !0
                        }, function() {
                            return n.updatePlayerTrackingData(n.props.hostChannel)
                        }))
                    }, n.onPlayerPlay = function() {
                        n.logger.debug("Play"), n.reportPlayerPlayed()
                    }, n.onStreamStatusOnline = function() {
                        n.props.onStreamStatusChange && n.props.onStreamStatusChange(M.Online)
                    }, n.onStreamStatusOffline = function() {
                        n.props.onStreamStatusChange && n.props.onStreamStatusChange(M.Offline)
                    }, n.onTheatreChange = function(e) {
                        e ? (n.logger.debug("Theatre Entered"), n.props.enableTheatreMode && !n.props.theatreModeEnabled && n.props.enableTheatreMode()) : (n.logger.debug("Theatre Exited"), n.props.disableTheatreMode && n.props.theatreModeEnabled && n.props.disableTheatreMode())
                    }, n.onFullScreenChange = function() {
                        n.player && (n.logger.debug("Fullscreen change", n.player.fullscreen), n.player.fullscreen !== n.state.isFullScreen && n.setState({
                            isFullScreen: n.player.fullscreen
                        }))
                    }, n.onSeek = function() {
                        n.props.onSeek && n.player && n.props.onSeek(n.player.getCurrentTime())
                    }, n.onTimeUpdate = function() {
                        n.props.onVideoTimeChange && n.player && n.props.onVideoTimeChange(n.player.getCurrentTime())
                    }, n.onTransitionToCollectionVod = function(e) {
                        if (n.props.onNavigationRequest) {
                            var t = {};
                            e.vodId && (t.videoID = Object(j.a)(e.vodId)), e.collectionId && (t.collectionID = e.collectionId), n.props.onNavigationRequest(t)
                        }
                    }, n.onTransitionToRecommendedVod = function(e) {
                        if (n.props.onNavigationRequest) {
                            var t = {};
                            e.vodId && (t.videoID = Object(j.a)(e.vodId)), n.props.onNavigationRequest(t)
                        }
                    }, n.updatePlayerTrackingData = function(e) {
                        if (n.state.playerInitialized && n.player) {
                            var t = h.m.getLastPageview();
                            t ? n.logger.debug("Tracking data updated.", {
                                pageviewProperties: t,
                                hostChannel: e
                            }) : n.logger.debug("pageviewProperties not found; only hosting status updated", {
                                pageviewProperties: t,
                                hostChannel: e
                            }), n.player.setTrackingProperties(u.__assign({}, t, {
                                host_channel: e
                            }))
                        }
                    }, n.updatePlayerType = function() {
                        var e = n.props.playerTypeOverride || V.player;
                        n.player && n.playerType !== e && (n.player.setPlayerType(e), n.playerType = e)
                    }, n.maybeRecordClip = function() {
                        n.player && n.state.playerInitialized && n.player.recordClip()
                    }, n.playerCreated = n.registerCreatedEvent(), n.playerLoaded = n.registerLoadedEvent(), n.playerPlayed = n.registerPlayedEvent(), n.state = {
                        canInitializePlayer: a(),
                        playerInitialized: !1,
                        isFullScreen: !1
                    }, n.playerType = t.playerTypeOverride || V.player, n.lastSetChannel = t.channelLogin, n
                }
                return u.__extends(t, e), t.prototype.componentDidMount = function() {
                    var e = this;
                    if (this.props.latencyTracking.reportCustomEvent(this.playerCreated), this.bindHotKeys(), this.state.canInitializePlayer ? this.initializePlayer() : this.checkPlayerDependencyAnimationFrame = window.requestAnimationFrame(this.checkPlayerDependencyStatus), h.m.eventEmitter.addListener(v.SpadeEventType.Pageview, function() {
                            return e.updatePlayerTrackingData(e.props.hostChannel)
                        }), window.__playerScriptChunk && !t.tagInjected) {
                        this.logger.debug("Loading player chunk after page loaded");
                        var n = document.createElement("script");
                        n.crossOrigin = "anonymous", n.src = window.__jqueryChunk, n.onload = function() {
                            var e = document.createElement("script");
                            e.async = !0, e.crossOrigin = "anonymous", e.src = window.__playerScriptChunk, document.body.appendChild(e)
                        }, document.body.appendChild(n);
                        var i = document.createElement("link");
                        i.href = window.__playerStyleChunk, i.media = "screen", i.rel = "stylesheet", i.type = "text/css", document.body.appendChild(i), t.tagInjected = !0
                    }
                }, t.prototype.componentWillUpdate = function(e, t) {
                    if (!this.state.canInitializePlayer && t.canInitializePlayer) return void this.initializePlayer();
                    if (t.canInitializePlayer && t.playerInitialized) {
                        if (this.updatePlayerTrackingData(e.hostChannel), this.updatePlayerType(), this.player && e.theatreModeEnabled !== this.player.getTheatre() && this.player.setTheatre(e.theatreModeEnabled), this.player && e.channelLogin && e.channelLogin !== this.lastSetChannel) return this.logger.debug("Setting Channel: ", e.channelLogin), this.player.setChannel(e.channelLogin), this.lastSetChannel = e.channelLogin, void h.m.setVideoPlayerTrackingData({
                            vodID: void 0
                        });
                        var n = e.collectionID && this.props.collectionID !== e.collectionID,
                            i = e.vodID && this.props.vodID !== e.vodID;
                        if (n || i) {
                            var r = e.vodID ? Object(G.a)(e.vodID) : "";
                            if ("" !== r && h.m.setVideoPlayerTrackingData({
                                    vodID: e.vodID
                                }), !this.player) return;
                            return void(n || e.collectionID && i ? this.player.setCollection(e.collectionID, r, e.nextVideoOffset) : this.player.setVideo(r, e.nextVideoOffset))
                        }
                        void 0 !== e.nextVideoOffset && e.nextVideoOffset >= 0 && this.props.nextVideoOffset !== e.nextVideoOffset && this.player && this.player.setCurrentTime(e.nextVideoOffset)
                    }
                }, t.prototype.render = function() {
                    var e = d("video-player", {
                        "video-player--theatre": this.props.theatreModeEnabled,
                        "video-player--logged-in": this.props.isLoggedIn,
                        "video-player--fullscreen": this.state.isFullScreen
                    });
                    return p.createElement("div", {
                        className: d(e),
                        "data-test-selector": "video-player"
                    }, p.createElement("div", {
                        className: "video-player__container",
                        ref: this.attachRef
                    }))
                }, t.prototype.componentWillUnmount = function() {
                    this.unbindHotKeys(), this.checkPlayerDependencyAnimationFrame && cancelAnimationFrame(this.checkPlayerDependencyAnimationFrame), this.maybeDetachFromWindow(), this.props.onDestroy && this.props.onDestroy(), this.player && (h.m.eventEmitter.removeListener(v.SpadeEventType.Pageview, this.updatePlayerTrackingData), this.player.removeEventListener(M.PlayerReady, this.onPlayerReady), this.player.removeEventListener(M.Online, this.onStreamStatusOnline), this.player.removeEventListener(M.Offline, this.onStreamStatusOffline), this.player.removeEventListener(c.Ended, this.onStreamStatusOffline), this.player.removeEventListener(c.Play, this.onPlayerPlay), this.player.removeEventListener(M.TheatreChange, this.onTheatreChange), this.player.removeEventListener(M.TransitionToCollectionVOD, this.onTransitionToCollectionVod), this.player.removeEventListener(M.FullscreenChange, this.onFullScreenChange), this.player.removeEventListener(c.Seeked, this.onSeek), this.player.removeEventListener(c.TimeUpdate, this.onTimeUpdate), this.player.removeEventListener(M.OpenStream, this.onOpenStream), R.extensionService.unregisterPlayer(), this.player.destroy()), h.m.setVideoPlayerTrackingData({
                        vodID: void 0
                    })
                }, t.prototype.initializePlayer = function() {
                    var e = u.__assign({}, V, {
                        showtheatre: !this.props.disableTheatreButton
                    });
                    this.props.playerTypeOverride && (e.player = this.props.playerTypeOverride, this.playerType = this.props.playerTypeOverride), this.props.channelLogin && (e.channel = this.props.channelLogin, this.lastSetChannel = this.props.channelLogin), this.props.collectionID && (e.collection = this.props.collectionID), this.props.vodID && (e.video = Object(G.a)(this.props.vodID), h.m.setVideoPlayerTrackingData({
                        vodID: this.props.vodID
                    })), this.props.nextVideoOffset && (e.time = Object(G.b)(this.props.nextVideoOffset)), e.oauth_token = this.props.authToken || "", this.logger.debug("Initializing", e);
                    var t = new window.Twitch.Player(this.playerRef, e);
                    this.player = t, t.addEventListener(M.PlayerReady, this.onPlayerReady), t.addEventListener(M.Online, this.onStreamStatusOnline), t.addEventListener(M.Offline, this.onStreamStatusOffline), t.addEventListener(c.Ended, this.onStreamStatusOffline), t.addEventListener(c.Play, this.onPlayerPlay), t.addEventListener(c.Seeked, this.onSeek), t.addEventListener(c.TimeUpdate, this.onTimeUpdate), t.addEventListener(M.TheatreChange, this.onTheatreChange), t.addEventListener(M.FullscreenChange, this.onFullScreenChange), t.addEventListener(M.TransitionToCollectionVOD, this.onTransitionToCollectionVod), t.addEventListener(M.TransitionToRecommendedVOD, this.onTransitionToRecommendedVod), t.addEventListener(M.OpenStream, this.onOpenStream), R.extensionService.registerPlayer(this.player), this.props.onInit && this.props.onInit(t), this.maybeAttachToWindow(this.props)
                }, t.prototype.registerCreatedEvent = function() {
                    return this.props.latencyTracking.registerCustomEvent("Player", "player-created", "Created", 1e3)
                }, t.prototype.registerLoadedEvent = function() {
                    return this.props.latencyTracking.registerCustomEvent("Player", "player-loaded", "Init", 2500)
                }, t.prototype.registerPlayedEvent = function() {
                    return this.props.latencyTracking.registerCustomEvent("Player", "player-played", "First Frame", 4e3)
                }, t.prototype.reportPlayerPlayed = function() {
                    this.hasPlayed || (this.hasPlayed = !0, this.playerPlayed && this.props.latencyTracking.reportCustomEvent(this.playerPlayed))
                }, t.prototype.maybeAttachToWindow = function(e) {
                    L.parse(window.location.search).attachPlayer && e.attachToWindow && this.player && (window.player = this.player)
                }, t.prototype.maybeDetachFromWindow = function() {
                    window.player = void 0
                }, t.prototype.bindHotKeys = function() {
                    x.bind("alt+x", this.maybeRecordClip)
                }, t.prototype.unbindHotKeys = function() {
                    x.unbind("alt+x")
                }, t.tagInjected = !1, t
            }(p.Component),
            z = Object(A.c)("VideoPlayer")(H),
            W = Object(T.a)(s, o)(z);
        n.d(t, !1, function() {
            return "hosting-ui-report-button"
        }), n.d(t, !1, function() {
            return "hosting-ui-more-balloon"
        }), n.d(t, !1, function() {
            return "hosting-ui-more-button"
        }), n.d(t, !1, function() {
            return "hosting-ui-channel-name"
        }), n.d(t, !1, function() {
            return "video-player-hosting-ui__header"
        }), n.d(t, !1, function() {
            return "video-player-hosting-ui__footer"
        }), n.d(t, !1, function() {
            return "video-player-hosting-ui__header--hidden"
        }), n.d(t, !1, function() {
            return "video-player-hosting-ui__header--visible"
        }), n.d(t, !1, function() {
            return "video-player-hosting-ui__footer--hidden"
        }), n.d(t, !1, function() {
            return "video-player-hosting-ui__footer--visible"
        }), n.d(t, !1, function() {
            return P
        }), n.d(t, "a", function() {
            return D
        }), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, "b", function() {
            return B
        }), n.d(t, "c", function() {
            return W
        }), n.d(t, "d", function() {
            return l
        })
    },
    1057: function(e, t, n) {
        "use strict";
        var i = n(0),
            r = n(1),
            a = n(12),
            s = n(2),
            o = n(1051),
            l = n(3),
            c = (n(1133), function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.state = {
                        isPremiereExperimentActive: !1
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    return i.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return i.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, s.n.experiments.getAssignment("TWILIGHT_PREMIERE_UPLOAD_FLOW")];
                                case 1:
                                    return e = t.sent(), "yes" === e && s.b.get("premiere_video_manager_staff", !1) && this.setState({
                                        isPremiereExperimentActive: !0
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.render = function() {
                    var e = null;
                    !0 !== this.state.isPremiereExperimentActive && this.props.vodcast && (e = r.createElement(l.U, {
                        display: l.H.InlineBlock,
                        padding: {
                            right: .5
                        }
                    }, r.createElement(l.Z, {
                        label: Object(s.d)("Vodcast", "LiveChannelCard")
                    })));
                    var t = Object(s.d)("{viewerCount, plural, one {# viewer on {channel}} other {# viewers on {channel}}}", {
                        viewerCount: this.props.viewerCount,
                        channel: r.createElement(a.a, {
                            to: this.props.channelNameLinkTo,
                            className: "live-channel-card__videos",
                            "data-a-target": "live-channel-card-channel-name-link"
                        }, this.props.channelName)
                    }, "Live Channel Card");
                    return r.createElement("div", i.__assign({
                        className: "live-channel-card"
                    }, Object(l._39)(this.props)), r.createElement(l.A, {
                        key: this.props.title
                    }, r.createElement(l.U, {
                        fullWidth: !0
                    }, r.createElement(l.j, {
                        overflow: !0
                    }, r.createElement("div", null, r.createElement(a.a, {
                        to: this.props.linkTo,
                        title: this.props.title,
                        "data-a-target": "live-channel-card-thumbnail-link"
                    }, r.createElement(l.C, {
                        imageAlt: this.props.imageAlt,
                        imageSrc: this.props.imageSrc,
                        aspect: l.k.Aspect16x9
                    })), this.renderContentType(), this.renderGameBoxArt()))), r.createElement(l.B, null, r.createElement(a.a, {
                        to: this.props.linkTo,
                        className: "live-channel-card__channel",
                        "data-a-target": "live-channel-card-title-link"
                    }, r.createElement(l.P, {
                        margin: {
                            top: .5
                        }
                    }, r.createElement(l._21, {
                        type: l._26.H3,
                        fontSize: l.L.Size5,
                        ellipsis: !0,
                        className: "live-channel-card__title"
                    }, this.props.title))), r.createElement(l.U, {
                        className: "live-channel-card__meta",
                        display: l.H.Flex,
                        flexWrap: l.K.NoWrap
                    }, e, r.createElement(l._21, {
                        type: l._26.Span,
                        ellipsis: !0
                    }, t)))))
                }, t.prototype.renderGameBoxArt = function() {
                    var e = this.props.gameLinkTo,
                        t = this.props.gameTitle,
                        n = this.props.gameImageSrc;
                    return t && e ? r.createElement(a.a, {
                        to: e,
                        title: t,
                        "data-a-target": "live-channel-card-game-link"
                    }, r.createElement(l._17, {
                        className: "live-channel-card__boxart",
                        position: l._2.Absolute,
                        attachRight: !0,
                        attachBottom: !0
                    }, r.createElement(l._30, {
                        display: l.H.Block,
                        direction: l._32.Bottom,
                        label: t
                    }, r.createElement(l.C, {
                        imageSrc: n,
                        imageAlt: t,
                        aspect: l.k.BoxArt
                    })))) : null
                }, t.prototype.renderContentType = function() {
                    return !0 !== this.state.isPremiereExperimentActive ? null : "string" == typeof this.props.streamType && this.props.streamType ? r.createElement(l.U, {
                        position: l._2.Absolute,
                        attachLeft: !0,
                        attachTop: !0,
                        padding: .5
                    }, r.createElement(o.a, {
                        type: this.props.streamType
                    })) : null
                }, t
            }(r.Component)),
            u = c;
        n.d(t, !1, function() {
            return c
        }), n.d(t, "a", function() {
            return u
        })
    },
    1124: function(e, t, n) {
        "use strict";

        function i(e) {
            return {
                type: s,
                player: e
            }
        }

        function r() {
            return {
                type: o
            }
        }

        function a() {
            return {
                type: l
            }
        }
        n.d(t, "b", function() {
            return s
        }), n.d(t, "c", function() {
            return o
        }), n.d(t, "a", function() {
            return l
        }), t.e = i, t.f = r, t.d = a;
        var s = "carouselPlayer.CAROUSEL_REGISTERED",
            o = "carouselPlayer.CAROUSEL_UNREGISTERED",
            l = "carouselPlayer.CAROUSEL_PAUSED"
    },
    1132: function(e, t) {},
    1133: function(e, t) {},
    1274: function(e, t) {},
    1275: function(e, t) {},
    1295: function(e, t, n) {
        "use strict";

        function i() {
            return {
                isPlayerInitialized: !1
            }
        }

        function r(e, t) {
            switch (void 0 === e && (e = i()), t.type) {
                case b.b:
                    return m = t.player, h.__assign({}, e, {
                        isPlayerInitialized: !0
                    });
                case b.c:
                    return m = null, h.__assign({}, e, {
                        isPlayerInitialized: !1
                    });
                case b.a:
                    return e.isPlayerInitialized && m && m.pause(), e;
                default:
                    return e
            }
        }

        function a(e) {
            switch (e.type) {
                case k.b.Stream:
                    return y.createElement(I.c, {
                        channelLogin: e.id,
                        vodID: "",
                        disableTheatreButton: !0,
                        playerTypeOverride: I.b.Frontpage,
                        onInit: e.onPlayerInit,
                        onDestroy: e.onPlayerDestroy
                    });
                case k.b.Vod:
                    return y.createElement(I.c, {
                        channelLogin: "",
                        vodID: e.id,
                        disableTheatreButton: !0,
                        playerTypeOverride: I.b.Frontpage,
                        onInit: e.onPlayerInit,
                        onDestroy: e.onPlayerDestroy,
                        onVideoTimeChange: e.onVideoTimeChange
                    });
                default:
                    return null
            }
        }

        function s(e) {
            return {
                firstPageLoaded: e.session.firstPageLoaded
            }
        }

        function o(e) {
            var t = {};
            e.forEach(function(e, n) {
                t["carousel_slot_" + n + "_channel"] = e.broadcaster.login, t["carousel_slot_" + n + "_priority"] = e.priorityLevel, t["carousel_slot_" + n + "_game"] = e.content.gameName
            }), g.m.track(j.SpadeEventType.FrontPageCarouselDisplay, t)
        }

        function l(e) {
            g.m.track(j.SpadeEventType.FrontPageCarouselClick, e)
        }

        function c(e, t) {
            var n = h.__assign({
                clicked_element: t
            }, e);
            g.m.track(j.SpadeEventType.FrontPageCarouselPromotionCardClick, n)
        }

        function u(e) {
            g.m.track(j.SpadeEventType.FrontPageCarouselPromotionCardView, e)
        }

        function d(e) {
            g.m.track(j.SpadeEventType.FrontPageCarouselNavButtonClick, {
                direction: e
            })
        }

        function p(e) {
            return Object(S.bindActionCreators)({
                registerCarousel: b.e,
                unregisterCarousel: b.f
            }, e)
        }
        var m, h = n(0),
            g = n(2),
            b = n(1124);
        g.n.store.registerReducer("carouselPlayer", r);
        var f = n(8),
            S = n(11),
            v = n(4),
            y = n(1),
            k = n(1001),
            _ = n(6),
            E = n(3),
            P = (n(1362), "carousel-card-live"),
            T = "carousel-card-vod",
            C = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderLiveCounts = function() {
                        return t.props.showCounts ? y.createElement(E.U, {
                            className: "carousel-nav__meta",
                            alignItems: E.c.Center,
                            attachBottom: !0,
                            margin: {
                                left: .5
                            },
                            zIndex: E._38.Above
                        }, t.renderIndicator(), y.createElement(E.U, {
                            display: E.H.InlineFlex,
                            margin: {
                                left: .5
                            }
                        }, y.createElement(E._21, {
                            color: E.F.Overlay,
                            type: E._26.Span
                        }, Object(g.e)(t.props.item.content.viewersCount)))) : null
                    }, t.renderIndicator = function() {
                        return t.props.item.content.type === k.b.Stream ? y.createElement(E.V, {
                            size: E.W.Small,
                            "data-test-selector": P
                        }) : y.createElement(E._8, {
                            asset: E._9.GlyphViews,
                            "data-test-selector": T
                        })
                    }, t.itemClick = function() {
                        t.props.itemClick(t.props.item)
                    }, t
                }
                return h.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = v({
                        "carousel-nav__item": !0,
                        "carousel-nav__item--active": this.props.itemActive
                    });
                    return y.createElement(E.U, {
                        className: e,
                        margin: {
                            x: .5
                        },
                        padding: {
                            bottom: .5
                        },
                        flexGrow: 1,
                        position: E._2.Relative
                    }, y.createElement(E._30, {
                        label: (this.props.item.isSponsored ? Object(g.d)("Sponsored", "CarouselCardComponent") : "") + " " + this.props.item.broadcaster.displayName,
                        direction: E._32.Top,
                        display: E.H.Block
                    }, y.createElement(E.S, h.__assign({
                        onClick: this.itemClick
                    }, Object(E._39)(this.props)), y.createElement(E.j, {
                        ratio: E.k.Aspect16x9
                    }, this.renderLiveCounts(), y.createElement(E.U, {
                        className: "carousel-nav__img-container"
                    }, y.createElement("img", {
                        className: "carousel-nav__img",
                        "data-content-id": this.props.item.content.id,
                        src: this.props.item.imageURL,
                        alt: this.props.item.broadcaster.displayName,
                        "data-a-target": "carousel-image"
                    }), this.props.item.isSponsored ? y.createElement(E.U, {
                        position: E._2.Absolute,
                        attachRight: !0,
                        attachTop: !0
                    }, y.createElement(E._8, {
                        asset: E._9.Featured,
                        type: E._10.Brand,
                        width: 20,
                        height: 20
                    })) : "")))))
                }, t = h.__decorate([Object(_.c)("CarouselCard")], t)
            }(y.Component),
            N = C,
            U = n(68),
            O = n(12),
            w = n(52),
            I = n(1056),
            D = (n(1363), {
                content: "carousel",
                medium: "twitch_home"
            }),
            F = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.getContentRender = function() {
                        var e = v("horizontal-carousel-player__details", {
                                "horizontal-carousel-player__details--overlay": t.props.darkTheme
                            }),
                            n = Object(g.d)("playing {game}", {
                                game: y.createElement(O.a, {
                                    to: {
                                        pathname: "/directory/game/" + t.props.item.content.gameName,
                                        state: D
                                    }
                                }, t.props.item.content.gameName)
                            }, "HorizontalCarouselPlayer"),
                            i = {
                                type: t.props.item.content.type,
                                id: t.props.item.content.id,
                                onPlayerInit: t.props.onPlayerInit,
                                onPlayerDestroy: t.props.onPlayerDestroy,
                                onVideoTimeChange: t.onVideoTimeChange
                            };
                        return y.createElement(E._17, {
                            className: "horizontal-carousel-player",
                            margin: {
                                bottom: 2
                            },
                            display: E.H.Flex,
                            flexDirection: E.J.Row,
                            color: E.F.Alt
                        }, y.createElement(E.U, {
                            flexGrow: 1,
                            flexShrink: 0
                        }, y.createElement(E.U, {
                            className: "horizontal-carousel-player__video",
                            position: E._2.Relative,
                            overflow: E.Y.Hidden
                        }, a(i))), y.createElement(E.U, {
                            className: e,
                            flexGrow: 0,
                            padding: 2
                        }, y.createElement(E.U, {
                            display: E.H.Flex,
                            flexWrap: E.K.NoWrap,
                            textAlign: E._22.Left,
                            alignItems: E.c.Start
                        }, y.createElement(E.U, {
                            margin: {
                                right: 1
                            },
                            flexShrink: 0
                        }, y.createElement("span", {
                            onClick: t.promotionCardClick.bind(t, "thumbnail")
                        }, y.createElement(O.a, {
                            to: {
                                pathname: "/" + t.props.item.broadcaster.login,
                                state: D
                            },
                            "data-a-target": "carousel-profile-image"
                        }, y.createElement(E.l, {
                            imageSrc: t.props.item.broadcaster.profileImageURL,
                            imageAlt: Object(g.d)("Profile Picture for {login}", {
                                login: t.props.item.broadcaster.login
                            }, "HorizontalCarouselPlayer"),
                            size: 40
                        })))), y.createElement(E.U, {
                            margin: {
                                right: 1
                            },
                            flexGrow: 1
                        }, y.createElement(E._21, {
                            fontSize: E.L.Size4,
                            color: E.F.Base,
                            "data-a-target": "carousel-broadcaster-displayname"
                        }, Object(w.a)(t.props.item.broadcaster.login, t.props.item.broadcaster.displayName)), y.createElement(E._21, {
                            fontSize: E.L.Size6,
                            color: E.F.Base,
                            "data-a-target": "carousel-user-playing-message"
                        }, y.createElement("span", {
                            onClick: t.promotionCardClick.bind(t, "game_name")
                        }, n)))), y.createElement(E.U, {
                            margin: {
                                y: 1
                            }
                        }, y.createElement("span", {
                            onClick: t.promotionCardClick.bind(t, "stream_title")
                        }, y.createElement(O.a, {
                            to: t.getLinkForTitle()
                        }, y.createElement(E._21, {
                            type: E._26.Span,
                            "data-a-target": k.a,
                            fontSize: E.L.Size3
                        }, t.props.item.title)))), y.createElement(U, {
                            source: t.props.item.description || ""
                        })))
                    }, t.getLinkForTitle = function() {
                        if (t.props.item.content.type === k.b.Stream) return {
                            pathname: "/" + t.props.item.broadcaster.login,
                            state: D
                        };
                        var e = t.state ? t.state.videoOffset || 0 : 0;
                        return {
                            pathname: "/videos/" + t.props.item.content.id + "?t=" + e,
                            state: D
                        }
                    }, t.getPlaceholderRender = function() {
                        var e = v("horizontal-carousel-player__details", {
                            "horizontal-carousel-player__details--overlay": t.props.darkTheme
                        });
                        return y.createElement(E.U, {
                            display: E.H.Flex,
                            flexWrap: E.K.NoWrap,
                            flexShrink: 0,
                            margin: {
                                bottom: 2
                            }
                        }, y.createElement(E.U, {
                            flexGrow: 1,
                            flexShrink: 1,
                            fullWidth: !0
                        }, y.createElement(E.j, {
                            ratio: E.k.Aspect16x9
                        }, y.createElement(E._1, {
                            "data-test-selector": "carousel-player-placeholder"
                        }))), y.createElement(E.U, {
                            className: v(e),
                            flexGrow: 0,
                            flexShrink: 0,
                            padding: 2
                        }, y.createElement(E.U, {
                            display: E.H.Flex,
                            flexWrap: E.K.NoWrap,
                            textAlign: E._22.Left,
                            alignItems: E.c.Start
                        }, y.createElement(E.U, {
                            margin: {
                                right: 1
                            },
                            flexShrink: 0
                        }, y.createElement(E._1, {
                            width: 40,
                            height: 40
                        })), y.createElement(E.U, {
                            margin: {
                                right: 1
                            },
                            flexGrow: 1
                        }, y.createElement(E._21, null, y.createElement(E._1, {
                            width: 70
                        })), y.createElement(E._21, null, y.createElement(E._1, {
                            width: 70
                        })))), y.createElement(E.U, {
                            margin: {
                                y: 1
                            }
                        }, y.createElement(E._21, null, y.createElement(E._1, {
                            lineCount: 1
                        })), y.createElement(E._21, null, y.createElement(E._1, {
                            lineCount: 4
                        })))))
                    }, t.onVideoTimeChange = function(e) {
                        t.setState({
                            videoOffset: e
                        })
                    }, t.promotionCardClick = function(e) {
                        t.props.onPromotionCardClick(t.props.item, e)
                    }, t
                }
                return h.__extends(t, e), t.prototype.componentWillUpdate = function(e) {
                    e.item !== this.props.item && this.props.onPromotionCardView(e.item)
                }, t.prototype.render = function() {
                    return this.props.item ? this.getContentRender() : this.getPlaceholderRender()
                }, t
            }(y.Component),
            R = n(275),
            x = (n(1364), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.getContentRender = function() {
                        var e = v("vertical-carousel-player__details", {
                                "vertical-carousel-player__details--overlay": t.props.darkTheme
                            }),
                            n = Object(g.d)("{login} playing {game}", {
                                login: y.createElement("span", {
                                    onClick: t.promotionCardClick.bind(t, "display_name")
                                }, y.createElement(O.a, {
                                    to: "/" + t.props.item.broadcaster.login,
                                    "data-a-target": "carousel-broadcaster-displayname"
                                }, Object(w.a)(t.props.item.broadcaster.login, t.props.item.broadcaster.displayName))),
                                game: y.createElement("span", {
                                    onClick: t.promotionCardClick.bind(t, "game_name")
                                }, y.createElement(O.a, {
                                    to: "/directory/game/" + t.props.item.content.gameName,
                                    "data-a-target": "carousel-broadcaster-game-name"
                                }, t.props.item.content.gameName))
                            }, "VerticalCarouselPlayer"),
                            i = {
                                type: t.props.item.content.type,
                                id: t.props.item.content.id,
                                onPlayerInit: t.props.onPlayerInit,
                                onPlayerDestroy: t.props.onPlayerDestroy
                            };
                        return y.createElement(E._17, {
                            className: "vertical-carousel-player",
                            padding: {
                                bottom: 1,
                                x: 1
                            },
                            color: E.F.Alt
                        }, y.createElement(E.U, {
                            className: "vertical-carousel-player__video",
                            position: E._2.Relative,
                            overflow: E.Y.Hidden
                        }, a(i)), y.createElement(E.U, {
                            className: v(e),
                            display: E.H.Flex,
                            flexWrap: E.K.NoWrap,
                            textAlign: E._22.Left,
                            alignItems: E.c.Center,
                            padding: {
                                y: 1
                            }
                        }, y.createElement(E.U, {
                            margin: {
                                right: 1
                            },
                            flexShrink: 0
                        }, y.createElement("span", {
                            onClick: t.promotionCardClick.bind(t, "thumbnail")
                        }, y.createElement(O.a, {
                            to: "/" + t.props.item.broadcaster.login,
                            "data-a-target": "carousel-avatar-link"
                        }, y.createElement(E.l, {
                            imageSrc: t.props.item.broadcaster.profileImageURL,
                            imageAlt: Object(g.d)("Profile Picture for {login}", {
                                login: t.props.item.broadcaster.login
                            }, "VerticalCarouselPlayer"),
                            size: 40
                        })))), y.createElement(E.U, {
                            margin: {
                                right: 1
                            },
                            flexGrow: 1
                        }, y.createElement(E._21, {
                            "data-a-target": k.a,
                            fontSize: E.L.Size5,
                            color: E.F.Base,
                            bold: !0
                        }, t.props.item.title), y.createElement(E._21, {
                            fontSize: E.L.Size6,
                            color: E.F.Base
                        }, n)), y.createElement(E.U, {
                            flexShrink: 0
                        }, t.props.firstPageLoaded ? y.createElement(R.a, {
                            showLoadingPlaceholder: !0,
                            channelLogin: t.props.item.broadcaster.login,
                            "data-a-target": "carousel-follow-button"
                        }) : y.createElement(E._1, {
                            width: 70,
                            height: 30
                        }))), y.createElement(U, {
                            source: t.props.item.description || ""
                        }))
                    }, t.getPlaceholderRender = function() {
                        return y.createElement(E.U, {
                            padding: {
                                bottom: 1,
                                x: 1
                            }
                        }, y.createElement(E.j, {
                            ratio: E.k.Aspect16x9
                        }, y.createElement(E._1, {
                            "data-test-selector": "carousel-player-placeholder"
                        })), y.createElement(E.U, {
                            display: E.H.Flex,
                            flexWrap: E.K.NoWrap,
                            textAlign: E._22.Left,
                            alignItems: E.c.Center,
                            padding: {
                                y: 1
                            }
                        }, y.createElement(E.U, {
                            margin: {
                                right: 1
                            },
                            flexShrink: 0
                        }, y.createElement(E._1, {
                            width: 40,
                            height: 40
                        })), y.createElement(E.U, {
                            margin: {
                                right: 1
                            },
                            flexGrow: 1
                        }, y.createElement(E._21, null, y.createElement(E._1, {
                            width: 150
                        })), y.createElement(E._21, null, y.createElement(E._1, {
                            width: 100
                        }))), y.createElement(E.U, {
                            flexShrink: 0
                        }, y.createElement(E._1, {
                            width: 70,
                            height: 30
                        }))), y.createElement(E._21, null, y.createElement(E._1, {
                            lineCount: 3
                        })))
                    }, t.promotionCardClick = function(e) {
                        t.props.onPromotionCardClick(t.props.item, e)
                    }, t
                }
                return h.__extends(t, e), t.prototype.render = function() {
                    return this.props.item ? this.getContentRender() : this.getPlaceholderRender()
                }, t
            }(y.Component)),
            L = Object(f.a)(s)(x),
            j = n(14),
            A = (n(1365), 6),
            M = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        activeItem: t.props.items[0],
                        startingIndex: 0
                    }, t.displayEventFired = !1, t.renderLeftButton = function() {
                        if (t.props.items.length > A) {
                            var e = t.state.startingIndex > 0;
                            return y.createElement(E.U, {
                                display: E.H.Flex,
                                alignItems: E.c.Stretch
                            }, y.createElement(E.v, {
                                ariaLabel: Object(g.d)("Page Left", "CarouselPlayerComponent"),
                                icon: E._9.AngleLeft,
                                onClick: t.handlePageLeft,
                                "data-test-selector": k.d,
                                disabled: !e
                            }))
                        }
                        return null
                    }, t.renderRightButton = function() {
                        if (t.props.items.length > A) {
                            var e = t.props.items.length > t.state.startingIndex + A;
                            return y.createElement(E.U, {
                                display: E.H.Flex,
                                alignItems: E.c.Stretch
                            }, y.createElement(E.v, {
                                ariaLabel: Object(g.d)("Page Right", "CarouselPlayerComponent"),
                                icon: E._9.AngleRight,
                                onClick: t.handlePageRight,
                                "data-test-selector": k.e,
                                disabled: !e
                            }))
                        }
                        return null
                    }, t.getCardsRender = function() {
                        if (t.state.activeItem) {
                            t.displayEventFired || (o(t.props.items), t.displayEventFired = !0);
                            return t.props.items.slice(t.state.startingIndex, t.state.startingIndex + A).map(function(e, n) {
                                return y.createElement(N, {
                                    key: e.content.id,
                                    item: e,
                                    itemClick: t.selectContent,
                                    itemActive: e.content.id === t.state.activeItem.content.id,
                                    showCounts: t.props.showCounts,
                                    "data-a-target": "carousel-card-" + n
                                })
                            })
                        }
                        for (var e = [], n = 0; n < A; n++) e.push(y.createElement(E.U, {
                            key: n,
                            margin: {
                                x: .5
                            },
                            flexGrow: 1
                        }, y.createElement(E.j, {
                            ratio: E.k.Aspect16x9
                        }, y.createElement(E._1, null)), y.createElement(E.U, {
                            margin: {
                                top: .5
                            }
                        }, y.createElement(E._1, {
                            height: 4
                        }))));
                        return e
                    }, t.getLayoutRender = function() {
                        var e = {
                            darkTheme: t.props.darkTheme || !1,
                            item: t.state.activeItem,
                            onPromotionCardClick: t.trackPromotionClick,
                            onPromotionCardView: t.trackPromotionView,
                            onPlayerInit: t.registerCarousel,
                            onPlayerDestroy: t.unregisterCarousel
                        };
                        switch (t.props.layout) {
                            case k.c.Vertical:
                                return y.createElement(L, h.__assign({}, e));
                            default:
                                return y.createElement(F, h.__assign({}, e))
                        }
                    }, t.registerCarousel = function(e) {
                        t.props.registerCarousel && t.props.registerCarousel(e)
                    }, t.unregisterCarousel = function() {
                        t.props.unregisterCarousel && t.props.unregisterCarousel()
                    }, t.selectContent = function(e) {
                        t.setState({
                            activeItem: e
                        }), l({
                            broadcast_type: e.content.subType,
                            carousel_index: t.props.items.indexOf(e),
                            channel: e.broadcaster.login,
                            game: e.content.gameName,
                            promotion_was_scheduled: e.isScheduled,
                            views: e.content.viewersCount
                        })
                    }, t.trackPromotionClick = function(e, n) {
                        var i = e.broadcaster,
                            r = e.content,
                            a = e.isScheduled;
                        c({
                            broadcast_type: r.subType,
                            carousel_index: t.props.items.indexOf(t.state.activeItem),
                            channel: i.displayName,
                            game: r.gameName,
                            promotion_was_scheduled: a,
                            views: r.viewersCount
                        }, n)
                    }, t.trackPromotionView = function(e) {
                        u({
                            broadcast_type: e.content.subType,
                            carousel_index: t.props.items.indexOf(e),
                            channel: e.broadcaster.login,
                            game: e.content.gameName,
                            promotion_was_scheduled: e.isScheduled,
                            views: e.content.viewersCount
                        })
                    }, t.handlePageRight = function() {
                        var e = t.props.items.length - A;
                        e !== t.state.startingIndex && (d("next"), t.setState({
                            startingIndex: e
                        }))
                    }, t.handlePageLeft = function() {
                        t.state.startingIndex > 0 && (d("prev"), t.setState({
                            startingIndex: 0
                        }))
                    }, t
                }
                return h.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillUpdate = function(e) {
                    !this.state.activeItem && e.items.length > 0 && this.setState({
                        activeItem: e.items[0]
                    })
                }, t.prototype.render = function() {
                    return y.createElement(E.U, {
                        className: v("carousel-player", {
                            "theme--dark": this.props.darkTheme
                        })
                    }, this.getLayoutRender(), y.createElement(E._17, {
                        background: E.m.Alt
                    }, y.createElement(E.U, {
                        display: E.H.Flex,
                        flexWrap: E.K.NoWrap,
                        padding: {
                            x: .5,
                            y: 1
                        }
                    }, this.renderLeftButton(), this.getCardsRender(), this.renderRightButton())))
                }, t = h.__decorate([Object(_.c)("CarouselPlayer")], t)
            }(y.Component),
            B = M,
            G = Object(f.a)(null, p)(B);
        n.d(t, "a", function() {
            return G
        })
    },
    1296: function(e, t, n) {
        "use strict";

        function i(e) {
            return e.map(function(e) {
                var t = "",
                    n = null;
                return e.stream && e.stream.game && null !== e.stream.game.name && (t = e.stream.game.name), e.stream && e.stream.broadcaster && (n = e.stream.broadcaster), {
                    broadcaster: {
                        displayName: n ? n.displayName : "",
                        id: n ? n.id : "",
                        login: n ? n.login : "",
                        profileImageURL: n ? n.profileImageURL : ""
                    },
                    content: {
                        id: n ? n.login : "",
                        gameName: t,
                        type: s.b.Stream,
                        subType: e.stream ? e.stream.type : "",
                        viewersCount: e.stream ? e.stream.viewersCount : 0
                    },
                    description: a(e.description || ""),
                    imageURL: e.imageURL || "",
                    isScheduled: e.isScheduled || !1,
                    isSponsored: e.isSponsored || !1,
                    priorityLevel: e.priorityLevel,
                    title: e.title || ""
                }
            })
        }

        function r(e) {
            return e.map(function(e) {
                var t = "",
                    n = null;
                return e.video && e.video.game && null !== e.video.game.name && (t = e.video.game.name), e.video && e.video.owner && (n = e.video.owner), {
                    broadcaster: {
                        displayName: n ? n.displayName : "",
                        id: n ? n.id : "",
                        login: n ? n.login : "",
                        profileImageURL: n ? n.profileImageURL : ""
                    },
                    content: {
                        id: e.video ? e.video.id : "",
                        gameName: t,
                        type: s.b.Vod,
                        subType: "",
                        viewersCount: e.video ? e.video.viewCount : 0
                    },
                    description: a(e.description || ""),
                    imageURL: e.imageURL || "",
                    isScheduled: e.isScheduled || !1,
                    isSponsored: e.isSponsored || !1,
                    priorityLevel: e.priorityLevel,
                    title: e.title || ""
                }
            })
        }

        function a(e) {
            return e.replace(/\[\]\(.+\)/, "")
        }
        t.a = i, t.b = r;
        var s = n(1001)
    },
    1361: function(e, t, n) {
        "use strict";
        var i = n(0),
            r = n(1),
            a = n(2),
            s = n(413),
            o = n(113),
            l = n(73),
            c = n(74),
            u = n(293),
            d = function(e) {
                var t = {
                    name: "TWILIGHT_VIDEO_FEATURO_EN",
                    assignments: {
                        fallback: function() {
                            return o.a.wrap(function() {
                                return new Promise(function(e) {
                                    e()
                                }).then(n.bind(null, 73))
                            }, "FeaturedBroadcasters")(i.__assign({}, e))
                        },
                        mixed: function() {
                            return o.a.wrap(function() {
                                return new Promise(function(e) {
                                    e()
                                }).then(n.bind(null, 293))
                            }, "FeaturedContent")(i.__assign({}, e, {
                                shouldMixContent: !0
                            }))
                        },
                        last: function() {
                            return o.a.wrap(function() {
                                return new Promise(function(e) {
                                    e()
                                }).then(n.bind(null, 293))
                            }, "FeaturedContent")(i.__assign({}, e, {
                                shouldMixContent: !1
                            }))
                        }
                    },
                    loader: function() {
                        return Object(c.placeholderFeaturedBroadcasters)(e.renderContext)
                    }
                };
                return "en" === a.n.intl.getLanguageCode() ? r.createElement(s.a, i.__assign({}, t)) : r.createElement(l.FeaturedBroadcasters, {
                    renderContext: e.renderContext
                })
            };
        n.d(t, "a", function() {
            return u.FeaturedBroadcastersRenderContext
        }), n.d(t, "b", function() {
            return d
        })
    },
    1362: function(e, t) {},
    1363: function(e, t) {},
    1364: function(e, t) {},
    1365: function(e, t) {},
    1366: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "FeaturedStreams"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "language"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String"
                        }
                    },
                    defaultValue: null
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "first"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Int"
                        }
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "featuredStreams"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "language"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "language"
                                }
                            }
                        }, {
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "first"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "first"
                                }
                            }
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "description"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "imageURL"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "isScheduled"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "isSponsored"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "priorityLevel"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "stream"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "broadcaster"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "displayName"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "id"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
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
                                                        value: "150"
                                                    }
                                                }],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "login"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "game"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "id"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "name"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "id"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "type"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "viewersCount"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }]
                                }
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "title"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 419
            }
        };
        n.loc.source = {
            body: "query FeaturedStreams($language: String, $first: Int) {\n  featuredStreams(language: $language, first: $first) {\n    description\n    imageURL\n    isScheduled\n    isSponsored\n    priorityLevel\n    stream {\n      broadcaster {\n        displayName\n        id\n        profileImageURL(width: 150)\n        login\n      }\n      game {\n        id\n        name\n      }\n      id\n      type\n      viewersCount\n    }\n    title\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1367: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "FeaturedContent"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "language"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "String"
                            }
                        }
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "featuredStreams"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "language"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "language"
                                }
                            }
                        }, {
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "first"
                            },
                            value: {
                                kind: "IntValue",
                                value: "8"
                            }
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "description"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "imageURL"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "isScheduled"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "isSponsored"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "priorityLevel"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "stream"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "broadcaster"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "displayName"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "id"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
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
                                                        value: "150"
                                                    }
                                                }],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "login"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "game"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "id"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "name"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "id"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "type"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "viewersCount"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }]
                                }
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "title"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }]
                        }
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "featuredVideos"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "language"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "language"
                                }
                            }
                        }, {
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "first"
                            },
                            value: {
                                kind: "IntValue",
                                value: "2"
                            }
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "description"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "imageURL"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "isScheduled"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "isSponsored"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "priorityLevel"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "title"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "video"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "game"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "id"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "name"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "id"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "owner"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "displayName"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "id"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
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
                                                        value: "150"
                                                    }
                                                }],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "login"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "viewCount"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 1047
            }
        };
        n.loc.source = {
            body: "# Documentation about how to use GraphQL is located in the Data Access Guide:\n# https://git-aws.internal.justin.tv/pages/twilight/twilight-docs/docs/guides/data-access.html\n# Additionally, use the GraphQL explorer (https://api.twitch.tv/gql/explore) to browse\n# available GraphQL data and construct your query.\nquery FeaturedContent($language: String!) {\n  featuredStreams(language: $language, first: 8) {\n    description\n    imageURL\n    isScheduled\n    isSponsored\n    priorityLevel\n    stream {\n      broadcaster {\n        displayName\n        id\n        profileImageURL(width: 150)\n        login\n      }\n      game {\n        id\n        name\n      }\n      id\n      type\n      viewersCount\n    }\n    title\n  }\n  featuredVideos(language: $language, first: 2) {\n    description\n    imageURL\n    isScheduled\n    isSponsored\n    priorityLevel\n    title\n    video {\n      game {\n        id\n        name\n      }\n      id\n      owner {\n        displayName\n        id\n        profileImageURL(width: 150)\n        login\n      }\n      viewCount\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1657: function(e, t) {},
    1658: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "AnonFront_FeaturedGames"
                },
                variableDefinitions: [],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "games"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "first"
                            },
                            value: {
                                kind: "IntValue",
                                value: "11"
                            }
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "edges"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "node"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "id"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "name"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "viewersCount"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "boxArtURL"
                                                },
                                                arguments: [{
                                                    kind: "Argument",
                                                    name: {
                                                        kind: "Name",
                                                        value: "width"
                                                    },
                                                    value: {
                                                        kind: "IntValue",
                                                        value: "285"
                                                    }
                                                }, {
                                                    kind: "Argument",
                                                    name: {
                                                        kind: "Name",
                                                        value: "height"
                                                    },
                                                    value: {
                                                        kind: "IntValue",
                                                        value: "380"
                                                    }
                                                }],
                                                directives: [],
                                                selectionSet: null
                                            }]
                                        }
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 185
            }
        };
        n.loc.source = {
            body: "query AnonFront_FeaturedGames {\n  games(first: 11) {\n    edges {\n      node {\n        id\n        name\n        viewersCount\n        boxArtURL(width: 285 height: 380)\n      }\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1659: function(e, t) {},
    1660: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "AnonFrontPage_TopChannels"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "platformType"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "PlatformType"
                        }
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "streams"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "first"
                            },
                            value: {
                                kind: "IntValue",
                                value: "6"
                            }
                        }, {
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "platformType"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "platformType"
                                }
                            }
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "edges"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "node"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "id"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "game"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "id"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "name"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "boxArtURL"
                                                        },
                                                        arguments: [{
                                                            kind: "Argument",
                                                            name: {
                                                                kind: "Name",
                                                                value: "width"
                                                            },
                                                            value: {
                                                                kind: "IntValue",
                                                                value: "285"
                                                            }
                                                        }, {
                                                            kind: "Argument",
                                                            name: {
                                                                kind: "Name",
                                                                value: "height"
                                                            },
                                                            value: {
                                                                kind: "IntValue",
                                                                value: "380"
                                                            }
                                                        }],
                                                        directives: [],
                                                        selectionSet: null
                                                    }]
                                                }
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "viewersCount"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "title"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "previewImageURL"
                                                },
                                                arguments: [{
                                                    kind: "Argument",
                                                    name: {
                                                        kind: "Name",
                                                        value: "width"
                                                    },
                                                    value: {
                                                        kind: "IntValue",
                                                        value: "320"
                                                    }
                                                }, {
                                                    kind: "Argument",
                                                    name: {
                                                        kind: "Name",
                                                        value: "height"
                                                    },
                                                    value: {
                                                        kind: "IntValue",
                                                        value: "180"
                                                    }
                                                }],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "broadcaster"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "id"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "login"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "displayName"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }]
                                                }
                                            }]
                                        }
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 433
            }
        };
        n.loc.source = {
            body: "query AnonFrontPage_TopChannels($platformType: PlatformType) {\n  streams(first: 6, platformType: $platformType) {\n    edges {\n      node {\n        id\n        game {\n          id\n          name\n          boxArtURL(width: 285 height: 380)\n        }\n        viewersCount\n        title\n        previewImageURL(width: 320 height: 180)\n        broadcaster {\n          id\n          login\n          displayName\n        }\n      }\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1661: function(e, t) {},
    1662: function(e, t) {},
    2004: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i, r = n(0),
            a = n(1),
            s = n(2),
            o = n(471),
            l = n(64),
            c = n(6),
            u = n(3),
            d = (n(1657), function() {
                return a.createElement(u.U, {
                    className: "footer",
                    padding: {
                        y: 3
                    }
                }, a.createElement(u.U, {
                    className: "footer__link-container",
                    display: u.H.Flex,
                    alignItems: u.c.Center,
                    justifyContent: u.T.Center,
                    margin: "auto",
                    padding: {
                        y: 3
                    }
                }, a.createElement(u.U, {
                    className: "footer__glitch",
                    display: u.H.Flex,
                    alignItems: u.c.Center,
                    margin: {
                        right: 2
                    }
                }, a.createElement(u._8, {
                    asset: u._9.LogoGlitch,
                    width: 30,
                    height: 30
                })), a.createElement(u.U, {
                    margin: {
                        right: 1
                    }
                }, a.createElement("a", {
                    target: "_blank",
                    className: "footer__link",
                    href: "https://www.twitch.tv/p/about/"
                }, Object(s.d)("About", "Footer"))), a.createElement(u.U, {
                    margin: {
                        right: 1
                    }
                }, a.createElement("a", {
                    target: "_blank",
                    className: "footer__link",
                    href: "https://blog.twitch.tv/"
                }, Object(s.d)("Blog", "Footer"))), a.createElement(u.U, {
                    margin: {
                        right: 1
                    }
                }, a.createElement("a", {
                    target: "_blank",
                    className: "footer__link",
                    href: "https://www.twitch.tv/products/turbo/ticket?ref=footer"
                }, Object(s.d)("Turbo", "Footer"))), a.createElement(u.U, {
                    margin: {
                        right: 1
                    }
                }, a.createElement("a", {
                    target: "_blank",
                    className: "footer__link",
                    href: "https://music.twitch.tv/"
                }, Object(s.d)("Music", "Footer"))), a.createElement(u.U, {
                    margin: {
                        right: 1
                    }
                }, a.createElement("a", {
                    target: "_blank",
                    className: "footer__link",
                    href: "http://twitchadvertising.tv/"
                }, Object(s.d)("Advertise", "Footer"))), a.createElement(u.U, {
                    margin: {
                        right: 1
                    }
                }, a.createElement("a", {
                    target: "_blank",
                    className: "footer__link",
                    href: "https://dev.twitch.tv/"
                }, Object(s.d)("Developers", "Footer"))), a.createElement(u.U, {
                    margin: {
                        right: 1
                    }
                }, a.createElement("a", {
                    target: "_blank",
                    className: "footer__link",
                    href: "https://www.twitch.tv/p/partners/"
                }, Object(s.d)("Partners", "Footer"))), a.createElement(u.U, {
                    margin: {
                        right: 1
                    }
                }, a.createElement("a", {
                    target: "_blank",
                    className: "footer__link",
                    href: "https://www.twitch.tv/p/platforms/"
                }, Object(s.d)("Mobile", "Footer"))), a.createElement(u.U, {
                    margin: {
                        right: 1
                    }
                }, a.createElement("a", {
                    target: "_blank",
                    className: "footer__link",
                    href: "https://www.twitch.tv/p/jobs/"
                }, Object(s.d)("Jobs", "Footer"))), a.createElement(u.U, {
                    margin: {
                        right: 1
                    }
                }, a.createElement("a", {
                    target: "_blank",
                    className: "footer__link",
                    href: "https://help.twitch.tv/"
                }, Object(s.d)("Help", "Footer"))), a.createElement(u.U, {
                    margin: {
                        right: 1
                    }
                }, a.createElement("a", {
                    target: "_blank",
                    className: "footer__link",
                    href: "https://www.twitch.tv/p/legal/terms-of-service/"
                }, Object(s.d)("Terms", "Footer"))), a.createElement(u.U, {
                    margin: {
                        right: 1
                    }
                }, a.createElement("a", {
                    target: "_blank",
                    className: "footer__link",
                    href: "https://www.twitch.tv/p/legal/privacy-policy/"
                }, Object(s.d)("Privacy Policy", "Footer"))), a.createElement(u.U, {
                    margin: {
                        right: 1
                    }
                }, a.createElement("a", {
                    target: "_blank",
                    className: "footer__link",
                    href: "https://www.twitch.tv/p/legal/ad-choices/"
                }, Object(s.d)("Ad Choices", "Footer"))), a.createElement(u.U, {
                    margin: {
                        right: 1
                    }
                }, a.createElement("a", {
                    target: "_blank",
                    className: "footer__link",
                    href: "https://www.twitch.tv/p/legal/cookie-policy/"
                }, Object(s.d)("Cookie Policy", "Footer"))), a.createElement(u.U, {
                    margin: {
                        left: 5
                    }
                }, a.createElement(l.a, null, a.createElement("span", {
                    className: "footer__link"
                }, Object(s.d)("Language", "Footer")), a.createElement(u.p, {
                    size: u.r.Medium,
                    direction: u.q.TopRight
                }, a.createElement(o.a, null))))))
            }),
            p = Object(c.c)("Footer", {
                autoReportInteractive: !0
            })(d),
            m = n(30),
            h = n(922),
            g = n(918),
            b = n(111),
            f = n(14),
            S = n(1031),
            v = n(415),
            y = n(1361),
            k = n(462),
            _ = n(12),
            E = n(9),
            P = n(406),
            T = n(1658),
            C = (n(1659), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        adDisplayed: !1
                    }, t.getItems = function() {
                        if (t.props.data.loading || t.props.data.error) {
                            for (var e = [], n = 0; n < 12; n++) e.push(a.createElement(u.G, {
                                cols: 2,
                                key: "placeholder-" + n
                            }, a.createElement(u.U, {
                                key: n,
                                margin: {
                                    bottom: n < 6 ? 4 : 0
                                }
                            }, a.createElement(u.U, {
                                margin: {
                                    bottom: .5
                                }
                            }, a.createElement(u.j, {
                                ratio: u.k.Aspect3x4
                            }, a.createElement(u._1, null))), a.createElement(u._21, null, a.createElement(u._1, {
                                width: 120
                            })), a.createElement(u._21, {
                                fontSize: u.L.Size7
                            }, a.createElement(u._1, {
                                width: 80
                            })))));
                            return e
                        }
                        var i = t.props.data.games.edges.slice(0, t.state.adDisplayed ? 10 : 12).map(function(e, t) {
                                var n = e.node;
                                return a.createElement(u.G, {
                                    cols: 2,
                                    key: "game-" + n.id
                                }, a.createElement(u.U, {
                                    margin: {
                                        bottom: t < 6 ? 4 : 0
                                    }
                                }, a.createElement(u.t, {
                                    linkTo: Object(P.d)(n.name),
                                    title: n.name,
                                    imageAlt: n.name + " cover image",
                                    imageSrc: n.boxArtURL,
                                    info: Object(s.d)("{viewerCount,number} viewers", {
                                        viewerCount: n.viewersCount
                                    }, "FeaturedGames"),
                                    "data-a-target": "card-" + t,
                                    "data-a-id": "card-" + n.name.replace(/ /g, "")
                                })))
                            }),
                            r = a.createElement(u.U, {
                                display: u.H.Flex,
                                flexGrow: 1,
                                justifyContent: u.T.Center,
                                key: "ad"
                            }, a.createElement(S.a, {
                                adSize: v.c.anonFront.rect,
                                adUnit: v.d.frontpage,
                                slotID: v.b.anonFront.rect,
                                targeting: {
                                    pagetype: v.a.frontpage
                                },
                                slotRendered: t.onSlotRendered,
                                autoEnable: !1
                            }));
                        return i.splice(4, 0, r), i
                    }, t.onSlotRendered = function() {
                        t.state.adDisplayed || t.setState({
                            adDisplayed: !0
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.postRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.postRender()
                }, t.prototype.render = function() {
                    var e = a.createElement(u.U, {
                            display: u.H.Flex,
                            flexDirection: u.J.Row,
                            alignItems: u.c.Baseline,
                            margin: {
                                bottom: 1
                            }
                        }, a.createElement(u._21, {
                            fontSize: u.L.Size2,
                            color: u.F.Base
                        }, Object(s.d)("Featured Games", "FeaturedGames")), a.createElement(u.U, {
                            className: "anon-featured-games__subheader",
                            margin: {
                                left: 2
                            }
                        }, a.createElement(u._21, {
                            fontSize: u.L.Size3,
                            color: u.F.Alt2
                        }, Object(s.d)("Games people are watching now", "FeaturedGames")))),
                        t = a.createElement(u.U, {
                            display: u.H.Flex,
                            justifyContent: u.T.End
                        }, a.createElement(u.P, {
                            display: u.H.Flex,
                            alignItems: u.c.Center
                        }, a.createElement(_.a, {
                            to: "/directory",
                            "data-a-target": "see-all-live-games-link"
                        }, a.createElement(u._21, {
                            fontSize: u.L.Size4
                        }, Object(s.d)("See all live games", "FeaturedGames")), a.createElement(u._17, {
                            color: u.F.Link,
                            margin: {
                                left: .5
                            },
                            display: u.H.InlineFlex,
                            alignItems: u.c.Center
                        }, a.createElement(u._8, {
                            asset: u._9.AngleRight,
                            width: 14,
                            height: 14
                        })))));
                    return a.createElement(u._17, {
                        className: "anon-featured-games",
                        background: u.m.Base
                    }, e, a.createElement(u.N, null, this.getItems()), t)
                }, t.prototype.postRender = function() {
                    this.props.data.loading || this.props.latencyTracking.reportInteractive()
                }, t = r.__decorate([Object(E.a)(T), Object(c.c)("FeaturedGames")], t)
            }(a.Component)),
            N = C,
            U = n(1057),
            O = n(52);
        ! function(e) {
            e[e.All = 1] = "All", e[e.Xbox = 2] = "Xbox", e[e.PS4 = 3] = "PS4"
        }(i || (i = {}));
        var w = n(1660),
            I = (n(1661), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.getItems = function() {
                        if (t.props.data.loading || t.props.data.error) {
                            for (var e = [], n = 0; n < 6; n++) e.push(a.createElement(u.U, {
                                key: n,
                                margin: {
                                    bottom: 2
                                }
                            }, a.createElement(u.U, {
                                margin: {
                                    bottom: .5
                                }
                            }, a.createElement(u.j, {
                                ratio: u.k.Aspect16x9
                            }, a.createElement(u._1, null))), a.createElement(u._21, null, a.createElement(u._1, {
                                width: 150
                            })), a.createElement(u._21, {
                                fontSize: u.L.Size7
                            }, a.createElement(u._1, {
                                width: 100
                            }))));
                            return e
                        }
                        return t.props.data.streams.edges.map(function(e, n) {
                            var i = e.node,
                                r = Object(O.a)(i.broadcaster.login, i.broadcaster.displayName),
                                o = {
                                    medium: f.PageviewMedium.Following,
                                    content: f.PageviewContent.Live,
                                    content_index: n
                                };
                            return a.createElement(u.U, {
                                className: "anon-top-channels",
                                key: i.broadcaster.id,
                                margin: {
                                    bottom: 2
                                }
                            }, a.createElement(U.a, {
                                imageSrc: i && i.previewImageURL || s.a.defaultStreamPreviewURL,
                                imageAlt: i && i.title || "",
                                viewerCount: i && i.viewersCount || 0,
                                title: i && i.title || "",
                                channelName: r,
                                gameImageSrc: i && i.game && i.game.boxArtURL || s.a.defaultBoxArtURL,
                                gameTitle: i && i.game ? i.game.name : "",
                                gameLinkTo: {
                                    pathname: "/directory/game/" + (i && i.game ? i.game.name : ""),
                                    state: o
                                },
                                linkTo: {
                                    pathname: "/" + i.broadcaster.login,
                                    state: o
                                },
                                channelNameLinkTo: {
                                    pathname: "/" + i.broadcaster.login + "/videos",
                                    state: o
                                },
                                "data-a-target": "top-" + t.getDataProp() + "-channel-" + n
                            }))
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.postRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.postRender()
                }, t.prototype.render = function() {
                    var e = a.createElement(u.U, {
                            display: u.H.Flex,
                            flexDirection: u.J.Row,
                            alignItems: u.c.Baseline,
                            margin: {
                                bottom: 1
                            }
                        }, a.createElement(u._21, {
                            fontSize: u.L.Size2,
                            color: u.F.Base
                        }, this.getTitle()), a.createElement(u.U, {
                            className: "anon-top-channels__subheader",
                            margin: {
                                left: 2
                            }
                        }, a.createElement(u._21, {
                            fontSize: u.L.Size3,
                            color: u.F.Alt2
                        }, this.getSubtitle()))),
                        t = a.createElement(u.U, {
                            className: "anon-top-channels__footer",
                            display: u.H.Flex,
                            justifyContent: u.T.End
                        }, a.createElement(u.P, {
                            display: u.H.Flex,
                            alignItems: u.c.Center
                        }, a.createElement(_.a, {
                            to: this.getLink(),
                            "data-a-target": "see-all-" + this.getDataProp() + "-channels-link"
                        }, a.createElement(u._21, {
                            fontSize: u.L.Size4
                        }, this.getFooter()), a.createElement(u._17, {
                            color: u.F.Link,
                            margin: {
                                left: .5
                            },
                            display: u.H.InlineFlex,
                            alignItems: u.c.Center
                        }, a.createElement(u._8, {
                            asset: u._9.AngleRight,
                            width: 14,
                            height: 14
                        })))));
                    return a.createElement("div", null, e, a.createElement(u._33, {
                        gutterSize: u._35.Small,
                        childWidth: u._34.Large,
                        placeholderItems: 6
                    }, this.getItems()), t)
                }, t.prototype.postRender = function() {
                    this.props.data.loading || this.props.latencyTracking.reportInteractive()
                }, t.prototype.getFooter = function() {
                    switch (this.props.type) {
                        case i.All:
                            return Object(s.d)("See all live Channels", "TopChannels");
                        case i.PS4:
                            return Object(s.d)("See all PS4 Channels", "TopChannels");
                        case i.Xbox:
                            return Object(s.d)("See all Xbox One Channels", "TopChannels");
                        default:
                            return ""
                    }
                }, t.prototype.getSubtitle = function() {
                    switch (this.props.type) {
                        case i.All:
                            return Object(s.d)("Broadcasters people are watching now", "TopChannels");
                        case i.PS4:
                            return Object(s.d)("Channels broadcasted from Playstation 4", "TopChannels");
                        case i.Xbox:
                            return Object(s.d)("Channels broadcasted from Xbox one", "TopChannels");
                        default:
                            return ""
                    }
                }, t.prototype.getTitle = function() {
                    switch (this.props.type) {
                        case i.All:
                            return Object(s.d)("Top Live Channels", "TopChannels");
                        case i.PS4:
                            return Object(s.d)("Top PS4 Channels", "TopChannels");
                        case i.Xbox:
                            return Object(s.d)("Top Xbox One Channels", "TopChannels");
                        default:
                            return ""
                    }
                }, t.prototype.getDataProp = function() {
                    switch (this.props.type) {
                        case i.All:
                            return "live";
                        case i.PS4:
                            return "ps4";
                        case i.Xbox:
                            return "xbox";
                        default:
                            return ""
                    }
                }, t.prototype.getLink = function() {
                    switch (this.props.type) {
                        case i.All:
                            return "/directory/all";
                        case i.PS4:
                            return "/directory/all/ps4";
                        case i.Xbox:
                            return "/directory/all/xb1";
                        default:
                            return ""
                    }
                }, t = r.__decorate([Object(E.a)(w, {
                    options: function(e) {
                        var t = "";
                        switch (e.type) {
                            case i.PS4:
                                t = "ps4";
                                break;
                            case i.Xbox:
                                t = "xbox";
                                break;
                            default:
                                t = "all"
                        }
                        return {
                            variables: {
                                platformType: t
                            }
                        }
                    }
                }), Object(c.c)("TopChannels")], t)
            }(a.Component)),
            D = I,
            F = (n(1662), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        takeoverRendered: !1,
                        numSlotsAdded: 0
                    }, t.onTakeoverRendered = function() {
                        t.setState({
                            takeoverRendered: !0
                        })
                    }, t.onSlotAdded = function() {
                        t.setState(function(e) {
                            var t = e.numSlotsAdded + 1;
                            return t === Object.keys(v.b.anonFront).length && b.a.display(v.b.anonFront.takeover), {
                                numSlotsAdded: t
                            }
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentWillMount = function() {
                    v.g.addListener(v.e, this.onSlotAdded)
                }, t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive(), s.n.setPageTitle()
                }, t.prototype.render = function() {
                    return a.createElement(u.U, {
                        fullHeight: !0
                    }, a.createElement(k.a, null), a.createElement(u._17, {
                        className: "anon-front",
                        background: u.m.Base,
                        position: u._2.Relative,
                        zIndex: u._38.Default,
                        fullHeight: !0
                    }, a.createElement(m.b, null, a.createElement("div", {
                        id: "mantle_skin",
                        className: this.state.takeoverRendered ? "anon-front__takeover" : ""
                    }, a.createElement(S.a, {
                        adSize: v.c.anonFront.takeover,
                        adUnit: v.d.frontpage,
                        slotID: v.b.anonFront.takeover,
                        targeting: {
                            pagetype: v.a.frontpage
                        },
                        slotRendered: this.onTakeoverRendered,
                        autoEnable: !1
                    }), a.createElement(u.U, {
                        className: "anon-front__featured-section",
                        display: u.H.Flex,
                        justifyContent: u.T.Center
                    }, a.createElement(u.U, {
                        className: "anon-front__banner"
                    }, a.createElement(S.a, {
                        adSize: v.c.anonFront.banner,
                        adUnit: v.d.frontpage,
                        slotID: v.b.anonFront.banner,
                        targeting: {
                            pagetype: v.a.frontpage
                        },
                        injectStyles: {
                            display: "flex"
                        },
                        autoEnable: !1
                    })), a.createElement(u.U, {
                        className: "anon-front__content-section",
                        padding: this.state.takeoverRendered ? 2 : 0
                    }, a.createElement(y.b, {
                        renderContext: y.a.AnonFront
                    })), a.createElement(u.U, {
                        className: "anon-front__sizzle-strip",
                        display: u.H.Flex,
                        justifyContent: u.T.Center
                    }, a.createElement(S.a, {
                        adSize: v.c.anonFront.sizzle,
                        adUnit: v.d.sizzle,
                        slotID: v.b.anonFront.sizzle,
                        targeting: {
                            pagetype: v.a.frontpage
                        },
                        autoEnable: !1
                    }))), a.createElement(u._17, {
                        background: u.m.Base,
                        margin: {
                            x: "auto"
                        },
                        padding: {
                            x: 1,
                            top: 5,
                            bottom: 3
                        },
                        className: "anon-front__content-section"
                    }, a.createElement(N, null)), a.createElement(u._17, {
                        className: "anon-front__social-container",
                        display: u.H.Flex,
                        flexDirection: u.J.Column,
                        alignItems: u.c.Center,
                        justifyContent: u.T.Center,
                        borderTop: !0,
                        borderBottom: !0,
                        padding: {
                            y: 3,
                            x: 2
                        }
                    }, a.createElement(u._21, {
                        fontSize: u.L.Size3
                    }, Object(s.d)("Follow the latest Twitch news", "AnonFrontPage")), a.createElement(u.U, {
                        margin: {
                            top: 1
                        },
                        display: u.H.Flex,
                        flexDirection: u.J.Row
                    }, a.createElement(u.u, {
                        linkTo: "https://www.facebook.com/twitch",
                        targetBlank: !0,
                        size: u.x.Large,
                        "data-a-target": "frontpage-facebook-link"
                    }, Object(s.d)("Facebook", "AnonFrontPage")), a.createElement(u.U, {
                        margin: {
                            x: .5
                        }
                    }, a.createElement(u.u, {
                        linkTo: "https://www.twitter.com/twitch",
                        targetBlank: !0,
                        size: u.x.Large,
                        "data-a-target": "frontpage-twitter-link"
                    }, Object(s.d)("Twitter", "AnonFrontPage"))), a.createElement(u.u, {
                        linkTo: "https://blog.twitch.tv/",
                        targetBlank: !0,
                        size: u.x.Large,
                        "data-a-target": "frontpage-blog-link"
                    }, Object(s.d)("Official Blog", "AnonFrontPage")))), a.createElement(u._17, {
                        background: u.m.Base,
                        padding: {
                            x: 1,
                            top: 3,
                            bottom: 3
                        },
                        margin: {
                            x: "auto"
                        },
                        className: "anon-front__content-section"
                    }, a.createElement(D, {
                        type: i.All,
                        key: "channels.all"
                    })), a.createElement(u._17, {
                        background: u.m.Base,
                        padding: {
                            x: 1,
                            y: 3
                        },
                        margin: {
                            x: "auto"
                        },
                        className: "anon-front__content-section"
                    }, a.createElement(D, {
                        type: i.PS4,
                        key: "channels.ps4"
                    })), a.createElement(u._17, {
                        background: u.m.Base,
                        padding: {
                            x: 1,
                            y: 3
                        },
                        margin: {
                            x: "auto"
                        },
                        className: "anon-front__content-section"
                    }, a.createElement(D, {
                        type: i.Xbox,
                        key: "channels.xbox"
                    })), a.createElement(u.U, {
                        className: "anon-front__bottom",
                        display: u.H.Flex,
                        justifyContent: u.T.Center
                    }, a.createElement(S.a, {
                        adSize: v.c.anonFront.bottom,
                        adUnit: v.d.frontpage,
                        slotID: v.b.anonFront.bottom,
                        targeting: {
                            pagetype: v.a.frontpage
                        },
                        injectStyles: {
                            display: "flex"
                        },
                        autoEnable: !1
                    })), a.createElement(p, null)))))
                }, t.prototype.componentWillUnmount = function() {
                    v.g.removeListener(v.e, this.onSlotAdded)
                }, t = r.__decorate([Object(c.c)("AnonFrontPage", {
                    destination: g.a.Index
                }), Object(h.a)({
                    location: f.PageviewLocation.FrontPage
                })], t)
            }(a.Component)),
            R = F;
        n.d(t, "AnonFrontPage", function() {
            return R
        })
    },
    293: function(e, t, n) {
        "use strict";

        function i(e, t, n) {
            switch (t) {
                case p.FeaturedBroadcastersRenderContext.AnonFront:
                    return o.createElement(u.a, {
                        items: e,
                        isLoading: n,
                        layout: d.c.Horizontal,
                        showCounts: !0,
                        darkTheme: !0
                    });
                default:
                    return o.createElement(b._17, {
                        className: "featured-content",
                        background: b.m.Base,
                        elevation: 1
                    }, o.createElement(b.U, {
                        padding: 1
                    }, r(n)), o.createElement(u.a, {
                        items: e,
                        isLoading: n,
                        layout: d.c.Vertical,
                        showCounts: !0
                    }))
            }
        }

        function r(e) {
            return e ? o.createElement(b._21, {
                fontSize: b.L.Size5,
                color: b.F.Alt2
            }, o.createElement(b._1, {
                width: 100
            })) : o.createElement(b._21, {
                fontSize: b.L.Size5,
                color: b.F.Alt2
            }, Object(l.d)("Featured", "FeaturedContentComponent"))
        }

        function a(e) {
            return i([], e, !0)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.placeholderFeaturedBroadcasters = a, n.d(t, "FeaturedContent", function() {
            return S
        });
        var s = n(0),
            o = n(1),
            l = (n.n(o), n(2)),
            c = n(9),
            u = n(1295),
            d = n(1001),
            p = n(73),
            m = n(1367),
            h = (n.n(m), n(1296)),
            g = n(6),
            b = n(3);
        n.d(t, "FeaturedBroadcastersRenderContext", function() {
            return p.FeaturedBroadcastersRenderContext
        });
        var f = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return s.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.postRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.postRender()
                }, t.prototype.render = function() {
                    var e = this.props.data.featuredStreams || [],
                        t = Object(h.a)(e),
                        n = this.props.data.featuredVideos || [],
                        r = Object(h.b)(n);
                    if (t.length > 0 && t.splice(t.length - r.length), this.props.shouldMixContent && r.length > 0) {
                        var a = 6 - r.length,
                            s = t.splice(a);
                        t = t.concat(r).concat(s)
                    } else t = t.concat(r);
                    var o = !(!this.props.data.loading && !this.props.data.error);
                    return i(t, this.props.renderContext, o)
                }, t.prototype.postRender = function() {
                    this.props.data && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                }, t = s.__decorate([Object(c.a)(m, {
                    options: function() {
                        return {
                            variables: {
                                language: l.n.intl.getLanguageCode()
                            }
                        }
                    }
                }), Object(g.c)("FeaturedContent")], t)
            }(o.Component),
            S = f
    },
    73: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(0),
            r = n(1),
            a = n(413),
            s = n(113),
            o = n(74),
            l = function(e) {
                var t = {
                    name: "TWILIGHT_EXPANDO_FEATURO",
                    assignments: {
                        fallback: function() {
                            return s.a.wrap(function() {
                                return new Promise(function(e) {
                                    e()
                                }).then(n.bind(null, 74))
                            }, "FeaturedBroadcasters")(i.__assign({}, e, {
                                streamCount: 6,
                                showCounts: !1
                            }))
                        },
                        expanded: function() {
                            return s.a.wrap(function() {
                                return new Promise(function(e) {
                                    e()
                                }).then(n.bind(null, 74))
                            }, "FeaturedBroadcasters")(i.__assign({}, e, {
                                streamCount: 8,
                                showCounts: !0
                            }))
                        }
                    },
                    loader: function() {
                        return Object(o.placeholderFeaturedBroadcasters)(e.renderContext)
                    }
                };
                return r.createElement(a.a, i.__assign({}, t))
            };
        n.d(t, "FeaturedBroadcastersRenderContext", function() {
            return o.FeaturedBroadcastersRenderContext
        }), n.d(t, "FeaturedBroadcasters", function() {
            return l
        })
    },
    74: function(e, t, n) {
        "use strict";

        function i(e, t, n, i) {
            switch (t) {
                case a.AnonFront:
                    return o.createElement(u.a, {
                        items: e,
                        isLoading: n,
                        layout: d.c.Horizontal,
                        showCounts: i,
                        darkTheme: !0
                    });
                default:
                    return o.createElement(h._17, {
                        className: "featured-broadcasters",
                        background: h.m.Base,
                        elevation: 1
                    }, o.createElement(h.U, {
                        padding: 1
                    }, o.createElement(h._21, {
                        fontSize: h.L.Size5,
                        color: h.F.Alt2
                    }, Object(l.d)("Featured Broadcasters", "FeaturedBroadcastersComponent"))), o.createElement(u.a, {
                        items: e,
                        isLoading: n,
                        layout: d.c.Vertical,
                        showCounts: i
                    }))
            }
        }

        function r(e) {
            return i([], e, !0)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n.d(t, "FeaturedBroadcastersRenderContext", function() {
            return a
        }), t.placeholderFeaturedBroadcasters = r, n.d(t, "FeaturedBroadcasters", function() {
            return f
        });
        var a, s = n(0),
            o = n(1),
            l = (n.n(o), n(2)),
            c = n(9),
            u = n(1295),
            d = n(1001),
            p = n(1296),
            m = n(6),
            h = n(3),
            g = n(1366);
        n.n(g);
        ! function(e) {
            e[e.AnonFront = 1] = "AnonFront", e[e.Front = 2] = "Front"
        }(a || (a = {}));
        var b = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.getRender = function(e) {
                        var n = !(!t.props.data.loading && !t.props.data.error);
                        return i(e, t.props.renderContext, n, t.props.showCounts)
                    }, t
                }
                return s.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.postRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.postRender()
                }, t.prototype.render = function() {
                    var e = this.props.data.featuredStreams || [],
                        t = Object(p.a)(e);
                    return this.getRender(t)
                }, t.prototype.postRender = function() {
                    this.props.data && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                }, t = s.__decorate([Object(c.a)(g, {
                    options: function(e) {
                        return {
                            variables: {
                                language: l.n.intl.getLanguageCode(),
                                first: e.streamCount || 6
                            }
                        }
                    }
                }), Object(m.c)("FeaturedBroadcasters")], t)
            }(o.Component),
            f = b
    },
    918: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var i = {
            BrowseCommunities: "browse.communities",
            BrowseCreative: "browse.creative",
            BrowseForYou: "browse.for-you",
            ChannelIndex: "channel.index.index",
            ChannelDashboardAchievements: "channel.dashboard.achievements",
            ChannelDashboardModeration: "channel.dashboard.moderation",
            ChannelDashboardStreamSummary: "channel.dashboard.stream-summary",
            ChannelClips: "channel.clips",
            ChannelClipsManager: "videoManager.clips.channel",
            ChannelCollections: "channel.collections",
            ChannelEvents: "channel.events",
            ChatPopout: "chat",
            DevOnly: "dev",
            DirectoryCommunityByLanguage: "directory.community.language",
            DirectoryCommunityIndex: "directory.community.index",
            DirectoryCommunityDetails: "directory.community.details",
            DirectoryGames: "directory.games",
            DirectoryPopular: "directory.popular",
            DirectoryGameIndex: "directory.game.index",
            DirectoryGameClips: "directory.game.clips",
            DirectoryGameDetails: "directory.game.details",
            DirectoryGameVideos: "directory.game.videos",
            DirectoryFollowingIndex: "directory.following.index",
            DirectoryFollowingGames: "directory.following.games",
            DirectoryFollowingVideos: "directory.following.videos.video-type",
            DirectoryFollowingHosts: "directory.following.hosts",
            DirectoryFollowingLiveChannels: "directory.following.channels",
            DirectoryFollowingCommunities: "directory.following.communities",
            EmailVerification: "emailVerification",
            EventDetails: "event.details",
            Index: "index",
            MyClipsManager: "videoManager.clips",
            NotificationSettingsPage: "settings.notificationSettings",
            OnboardingIndex: "onboarding.index",
            ReportUserPage: "reportUser.page",
            StoreMerchPage: "store.merch",
            SubsLandingPage: "subs.landing",
            SubsBroadcasterPage: "subs.broadcaster",
            TeamsDashboardBasicInfo: "teams.dashboard.basic-info",
            TeamsDashboardCustomize: "teams.dashboard.customize",
            TeamsDashboardFeaturedChannels: "teams.dashboard.featured-channels",
            TeamsDashboardMembers: "teams.dashboard.members",
            TeamsDashboardStats: "teams.dashboard.stats",
            TeamsDashboardRevenue: "teams.dashboard.revenue",
            VideosPage: "videos",
            VideoWatchPage: "video",
            VideoManagerPage: "videoManager.page",
            VideoManagerEditPropertiesPage: "videoManager.edit",
            VideoManagerUploadPage: "videoManager.upload",
            VideoManagerUploadListPage: "videoManager.upload-list"
        }
    },
    919: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var i;
        ! function(e) {
            e.ChannelFeedComment = "CHANNEL_FEED_COMMENT_REPORT", e.ChannelFeedPost = "CHANNEL_FEED_POST_REPORT", e.Chat = "CHAT_REPORT", e.Clip = "CLIP_REPORT", e.Collection = "COLLECTION_REPORT", e.Community = "COMMUNITY_REPORT", e.Event = "EVENT_REPORT", e.Extension = "EXTENSION_REPORT", e.LiveUp = "LIVE_UP_REPORT", e.Raid = "RAID_REPORT", e.StreamUp = "STREAM_UP_REPORT", e.User = "USER_REPORT", e.VideoChatMessage = "VOD_COMMENT_REPORT", e.Vod = "VOD_REPORT"
        }(i || (i = {}))
    },
    921: function(e, t, n) {
        "use strict";
        var i = n(0),
            r = n(4),
            a = n(1),
            s = n(11),
            o = n(2),
            l = n(9),
            c = n(6),
            u = n(926),
            d = n(3),
            p = n(944),
            m = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleChange = function(e) {
                        t.props.onChange(e.target.value)
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidUpdate = function() {
                    this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = null,
                        t = Object(o.d)("Select One...", "ReportUserModal");
                    return e = this.props.data.loading ? [a.createElement("option", {
                        key: "Loading"
                    }, Object(o.d)("Loading...", "ReportReasonsSelect"))] : Object(u.b)(this.props.data.reportReasons).map(function(e) {
                        return a.createElement("option", {
                            key: e.canonical,
                            value: e.canonical
                        }, e.localized)
                    }), a.createElement(d.U, {
                        margin: {
                            bottom: 2
                        }
                    }, a.createElement(d.M, {
                        id: "reporting-modal__select",
                        label: Object(o.d)("Select Reason (required)", "ReportUserModal")
                    }, a.createElement(d._14, {
                        id: "reporting-modal__select",
                        "data-test-selector": "reporting-modal.select",
                        disabled: this.props.data.loading || !!this.props.data.error,
                        onChange: this.handleChange,
                        defaultValue: t
                    }, a.createElement("option", {
                        disabled: !0,
                        key: "default"
                    }, t), e)))
                }, t = i.__decorate([Object(c.c)("ReportReasonSelect")], t)
            }(a.Component),
            h = Object(l.a)(p, {
                options: function(e) {
                    return {
                        variables: {
                            content: e.reportContentType
                        }
                    }
                }
            })(m),
            g = (n(945), n(946));
        n.d(t, "a", function() {
            return f
        }), n.d(t, "b", function() {
            return b
        }), n.d(t, "c", function() {
            return v
        });
        var b, f = "community_rules_violation";
        ! function(e) {
            e[e.Unsubmitted = 0] = "Unsubmitted", e[e.Success = 1] = "Success", e[e.FormError = 2] = "FormError", e[e.MutationError = 3] = "MutationError"
        }(b || (b = {}));
        var S = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        community: null,
                        description: "",
                        reason: null,
                        isCommunityReason: !1,
                        selectedCommunityID: null,
                        selectedCommunityName: null
                    }, t.headerMessage = Object(o.d)("Tell us your concern about this content so that we can review it to determine whether there has been a violation of the {tosLink}. {br} (Abuse of this feature is a violation of the terms of service)", {
                        br: a.createElement("br", null),
                        tosLink: a.createElement("a", {
                            href: "https://www.twitch.tv/p/terms-of-service",
                            target: "_blank"
                        }, Object(o.d)("terms of service", "ReportUser"))
                    }, "ReportUser"), t.selectCommunity = function(e) {
                        t.setState({
                            selectedCommunityID: e.target.value,
                            selectedCommunityName: e.target.name
                        })
                    }, t.handleSubmit = function(e) {
                        e.preventDefault(), t.state.reason && t.state.description.length > 0 ? t.props.onSubmit(t.state.reason || "", t.state.description, t.state.selectedCommunityID, t.state.selectedCommunityName) : t.props.onError(b.FormError)
                    }, t.handleTextAreaChange = function(e) {
                        t.setState({
                            description: e.target.value
                        })
                    }, t.handleReasonChange = function(e) {
                        if (!t.props.data || t.props.data.loading || t.props.data.error || !t.props.data.user) return null;
                        var n = t.props.data.user.directories.nodes.filter(function(e) {
                            return "COMMUNITY" === e.directoryType
                        });
                        n.length && e === f ? t.setState({
                            reason: e,
                            selectedCommunityID: n[0].id,
                            selectedCommunityName: n[0].name,
                            isCommunityReason: !0
                        }) : t.setState({
                            reason: e,
                            isCommunityReason: !1
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(d.U, {
                        display: d.H.Flex,
                        flexDirection: d.J.Column,
                        alignItems: d.c.Center,
                        justifyContent: d.T.Center
                    }, this.renderStatusMessage(), this.renderBody())
                }, t.prototype.renderBody = function() {
                    return this.props.submitStatus === b.Success ? a.createElement("div", null, a.createElement(d.u, {
                        onClick: this.props.onClose
                    }, a.createElement(d.U, {
                        padding: {
                            x: 2
                        }
                    }, Object(o.d)("Close", "ReportUser")))) : a.createElement("div", null, a.createElement(d.U, {
                        "data-test-selector": "reporting.title",
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(d._21, {
                        type: d._26.H4
                    }, this.props.title), a.createElement(d._17, {
                        color: d.F.Alt2,
                        margin: {
                            top: 1
                        }
                    }, this.headerMessage)), a.createElement("form", null, a.createElement(d._17, {
                        borderTop: !0,
                        borderBottom: !0,
                        margin: {
                            y: 2
                        },
                        padding: {
                            y: 2
                        }
                    }, a.createElement(h, {
                        reportContentType: this.props.reportContentType,
                        onChange: this.handleReasonChange
                    }), this.renderCommunitiesSelector(), a.createElement(d.M, {
                        id: "reporting__text-area",
                        label: Object(o.d)("Description (required)", "ReportUser")
                    }, a.createElement(d._23, {
                        defaultValue: this.props.defaultDescription,
                        onChange: this.handleTextAreaChange
                    }))), a.createElement(d._17, {
                        display: d.H.Flex,
                        justifyContent: d.T.Center
                    }, a.createElement(d.u, {
                        onClick: this.handleSubmit
                    }, a.createElement(d.U, {
                        padding: {
                            x: 2
                        }
                    }, Object(o.d)("Send", "ReportUser"))))))
                }, t.prototype.renderCommunitiesSelector = function() {
                    if (!this.props.data || this.props.data.loading || this.props.data.error || !this.props.data.user) return null;
                    if (this.state.isCommunityReason) {
                        var e = this.props.data.user.directories.nodes.filter(function(e) {
                                return "COMMUNITY" === e.directoryType
                            }),
                            t = e.map(function(e) {
                                return a.createElement("option", {
                                    key: e.id,
                                    value: e.id,
                                    name: e.name
                                }, e.displayName)
                            });
                        return a.createElement(d.U, {
                            margin: {
                                bottom: 2
                            }
                        }, a.createElement(d.M, {
                            id: "reporting__select-community",
                            label: Object(o.d)("Community", "ReportUser")
                        }, a.createElement(d._14, {
                            id: "reporting__select-community",
                            "data-test-selector": "reporting.select-community",
                            disabled: this.props.data.loading || !!this.props.data.error,
                            onChange: this.selectCommunity
                        }, t)))
                    }
                }, t.prototype.renderStatusMessage = function() {
                    var e = null;
                    switch (this.props.submitStatus) {
                        case b.FormError:
                            e = Object(o.d)("Reason and Description are required.", "ReportUser");
                            break;
                        case b.MutationError:
                            e = Object(o.d)("Sorry, a network error occurred when submitting your report. Please try again later.", "ReportUser");
                            break;
                        case b.Success:
                            e = Object(o.d)("Thank you for your report.", "ReportUser");
                            break;
                        default:
                            return null
                    }
                    var t = r({
                        "reporting__error-container": this.props.submitStatus !== b.Success,
                        "reporting__success-container": this.props.submitStatus === b.Success
                    });
                    return a.createElement(d._17, {
                        className: t,
                        fullWidth: this.props.submitStatus !== b.Success,
                        "data-test-selector": "reporting.error",
                        margin: {
                            bottom: 2
                        },
                        padding: 1
                    }, e)
                }, t
            }(a.Component),
            v = Object(s.compose)(Object(l.a)(g, {
                options: function(e) {
                    return {
                        fetchPolicy: "network-only",
                        variables: {
                            userId: e.targetUserID
                        }
                    }
                }
            }))(S)
    },
    922: function(e, t, n) {
        "use strict";

        function i(e) {
            return function(t) {
                var n = function(n) {
                    function i(t) {
                        var i = n.call(this, t) || this;
                        return i.tracked = !1, i.referenceTracking = {}, i.trackPageview = function() {
                            if (!(i.tracked || e.skip && e.skip(i.props))) {
                                i.tracked = !0, l.n.adBlockSentinel.pageTransition();
                                var t = {};
                                "function" == typeof e.properties ? t = e.properties(i.props) : e.properties && (t = r.__assign({}, e.properties));
                                var n = r.__assign({}, i.props);
                                n.location && n.location.state && (t.medium = n.location.state.medium, t.content = n.location.state.content, t.content_index = n.location.state.content_index);
                                var a = i.referenceTracking,
                                    s = a.content,
                                    o = a.medium,
                                    c = a.content_index;
                                l.n.tracking.trackPageview(r.__assign({
                                    content: s,
                                    medium: o,
                                    content_index: c,
                                    location: e.location
                                }, t))
                            }
                        }, l.i.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : l.i.warn("No latency tracker exists! This means no data will be sent to Spade.", e), i
                    }
                    return r.__extends(i, n), i.prototype.componentDidMount = function() {
                        var e = this;
                        this.referenceTracking = this.stripTTParams(this.props.history.location), this.trackPageview(), this.props.history.listen(function(t, n) {
                            "REPLACE" !== n && (e.tracked = !1, e.referenceTracking = {})
                        })
                    }, i.prototype.componentDidUpdate = function() {
                        this.trackPageview()
                    }, i.prototype.render = function() {
                        return s.createElement(t, r.__assign({}, this.props))
                    }, i.prototype.stripTTParams = function(e) {
                        var t = "" !== e.search ? a.parse(e.search) : {},
                            n = {
                                content: t.tt_content,
                                content_index: t.tt_content_index,
                                medium: t.tt_medium
                            };
                        if (delete t.tt_content, delete t.tt_content_index, delete t.tt_medium, n.medium || n.content) {
                            var i = "",
                                r = a.stringify(t);
                            r.length > 0 && (i = "?" + r), this.props.history.replace({
                                pathname: e.pathname,
                                hash: e.hash,
                                search: i
                            })
                        }
                        return n
                    }, i
                }(s.Component);
                return Object(o.f)(n)
            }
        }
        var r = n(0),
            a = n(21),
            s = n(1),
            o = n(12),
            l = n(2);
        n.d(t, "a", function() {
            return i
        })
    },
    923: function(e, t, n) {
        "use strict";

        function i(e) {
            return "subscribe-button-modal-tab-" + e
        }
        var r, a = n(0),
            s = n(1),
            o = n(2),
            l = n(936),
            c = n(136),
            u = n(271),
            d = n(6),
            p = n(935),
            m = n(410),
            h = n(952),
            g = n(937),
            b = n(269),
            f = n(3),
            S = (n(973), "gift-subscription-button"),
            v = "subscribe-button";
        ! function(e) {
            e[e.Prime = 0] = "Prime", e[e.Tier1 = 1] = "Tier1", e[e.Tier2 = 2] = "Tier2", e[e.Tier3 = 3] = "Tier3"
        }(r || (r = {}));
        var y = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.toggleActiveTab = function(e) {
                        if (e.currentTarget.parentElement) switch (e.currentTarget.parentElement.getAttribute("data-a-target")) {
                            case "subscribe-button-modal-tab-" + r.Prime:
                                n.setState({
                                    activeTab: r.Prime,
                                    currentPurchasePrice: n.messages.tier1Price
                                }), n.props.onSelectTierTab(r.Prime);
                                break;
                            case "subscribe-button-modal-tab-" + r.Tier1:
                                n.setState({
                                    activeTab: r.Tier1,
                                    currentPurchasePrice: n.messages.tier1Price
                                }), n.props.onSelectTierTab(r.Tier1);
                                break;
                            case "subscribe-button-modal-tab-" + r.Tier2:
                                n.setState({
                                    activeTab: r.Tier2,
                                    currentPurchasePrice: n.messages.tier2Price
                                }), n.props.onSelectTierTab(r.Tier2);
                                break;
                            case "subscribe-button-modal-tab-" + r.Tier3:
                                n.setState({
                                    activeTab: r.Tier3,
                                    currentPurchasePrice: n.messages.tier3Price
                                }), n.props.onSelectTierTab(r.Tier3);
                                break;
                            default:
                                n.setState({
                                    activeTab: r.Prime,
                                    currentPurchasePrice: n.messages.tier1Price
                                }), n.props.onSelectTierTab(r.Prime)
                        }
                    }, n.getTabTitle = function() {
                        switch (n.state.activeTab) {
                            case r.Prime:
                                return n.messages.freeSubWithPrime;
                            case r.Tier1:
                                return n.messages.tier1Sub;
                            case r.Tier2:
                                return n.messages.tier2Sub;
                            case r.Tier3:
                                return n.messages.tier3Sub;
                            default:
                                return n.messages.tier1Sub
                        }
                    }, n.getTierSubscribeButton = function() {
                        var e = n.props.subscriptionProducts[n.state.activeTab - 1];
                        return n.props.isGift ? n.props.giftRecipient ? s.createElement(f.u, {
                            ariaLabel: n.messages.giftSubscription + " " + n.state.currentPurchasePrice,
                            "data-test-selector": S,
                            onClick: n.reportGiftCheckoutAction,
                            targetBlank: !0,
                            purchase: n.state.currentPurchasePrice,
                            linkTo: Object(c.a)(e.url, {
                                recipient: n.props.giftRecipient
                            })
                        }, n.messages.giftSubscription) : s.createElement(f.u, {
                            ariaLabel: n.messages.giftSubscription + " " + n.state.currentPurchasePrice,
                            "data-test-selector": S,
                            onClick: n.onGiftSelect,
                            purchase: n.state.currentPurchasePrice
                        }, n.messages.giftSubscription) : n.state.subbedTier === n.state.activeTab && n.state.activeTab === r.Prime ? s.createElement(h.a, {
                            authToken: n.props.authToken,
                            "data-a-target": "subscribe-with-prime-button",
                            isSubscribed: n.props.isSubscribed,
                            isSubscribedWithPrime: n.props.subbedTier === p.a,
                            onSubscribedWithPrime: n.onSubscribedWithPrime,
                            reportSubMenuAction: n.props.reportSubMenuAction,
                            subLogin: n.props.subLogin,
                            userHasPrime: n.props.userHasPrime,
                            canPrimeSubscribe: n.props.canPrimeSubscribe
                        }) : s.createElement(m.a, {
                            isSubbedToTier: n.state.subbedTier === n.state.activeTab,
                            tierPrice: n.state.currentPurchasePrice,
                            reportSubAction: n.props.reportSubMenuAction,
                            url: e.url,
                            "data-a-target": "subscribe-now-button",
                            "data-test-selector": v
                        })
                    }, n.onSubscribedWithPrime = function() {
                        n.props.onSubscribedWithPrime && n.props.onSubscribedWithPrime()
                    }, n.reportGiftCheckoutAction = function() {
                        n.props.reportSubMenuAction({
                            action: b.a.BuyGiftSub,
                            checkoutButtonTier: n.state.currentPurchasePrice,
                            giftRecipient: n.props.giftRecipient ? n.props.giftRecipient : null
                        })
                    }, n.onGiftSelect = function() {
                        n.props.reportSubMenuAction({
                            action: b.a.GiftASub,
                            checkoutButtonTier: n.state.currentPurchasePrice
                        }), n.props.onGiftSelect && n.props.onGiftSelect()
                    }, n.mapSubbedTierToTabs = function(e) {
                        e.subbedTier === l.a.Prime ? (n.setState({
                            activeTab: r.Prime,
                            subbedTier: r.Prime
                        }), e.onSelectTierTab(r.Prime)) : e.subbedTier === l.a.Tier1 ? (n.setState({
                            activeTab: r.Tier1,
                            subbedTier: r.Tier1
                        }), e.onSelectTierTab(r.Tier1)) : e.subbedTier === l.a.Tier2 ? (n.setState({
                            activeTab: r.Tier2,
                            subbedTier: r.Tier2
                        }), e.onSelectTierTab(r.Tier2)) : e.subbedTier === l.a.Tier3 ? (n.setState({
                            activeTab: r.Tier3,
                            subbedTier: r.Tier3
                        }), e.onSelectTierTab(r.Tier3)) : e.isGift ? e.onSelectTierTab(n.state.activeTab) : e.onSelectTierTab(r.Prime)
                    }, n.getExtraEmotes = function(e) {
                        return (e === r.Tier2 ? Object(u.b)(n.props.subscriptionProducts[1].emotes) : Object(u.b)(n.props.subscriptionProducts[2].emotes.concat(n.props.subscriptionProducts[1].emotes))).map(function(e) {
                            return s.createElement(f.U, {
                                display: f.H.InlineFlex,
                                margin: {
                                    right: .5
                                },
                                key: e.id
                            }, s.createElement("img", {
                                srcSet: "https://static-cdn.jtvnw.net/emoticons/v1/" + e.srcSet
                            }))
                        })
                    }, n.state = {
                        activeTab: r.Tier1,
                        currentPurchasePrice: n.props.subscriptionProducts[0].price,
                        subbedTier: null
                    }, n
                }
                return a.__extends(t, e), t.prototype.componentWillMount = function() {
                    this.setMessages(this.props), this.mapSubbedTierToTabs(this.props)
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.setMessages(e)
                }, t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = null;
                    this.state.subbedTier && (e = s.createElement(f.U, {
                        display: f.H.InlineFlex,
                        margin: {
                            right: .5
                        },
                        className: "subscription-balloon-options__subbed-star"
                    }, s.createElement(f._8, {
                        asset: f._9.Star
                    })));
                    var t = s.createElement(f._21, null),
                        n = null,
                        a = null,
                        c = null,
                        u = s.createElement(f.U, {
                            display: f.H.InlineFlex
                        }, this.state.subbedTier === r.Tier3 && e, s.createElement(f._18, {
                            active: this.state.activeTab === r.Tier3,
                            "data-a-target": i(r.Tier3),
                            onClick: this.toggleActiveTab
                        }, this.messages.tier3TabName));
                    this.hasDiscount(this.props) && this.state.activeTab !== r.Prime && (t = s.createElement(f.U, null, s.createElement(f._21, {
                        className: "tw-subscription-modal__old-price"
                    }, s.createElement("s", null, Object(g.a)(this.props.subscriptionProducts[this.state.activeTab - 1].self.oldPrice), " / Month")), s.createElement(f._21, {
                        className: "tw-subscription-modal__new-price",
                        type: f._26.H5,
                        bold: !0
                    }, Object(g.a)(this.props.subscriptionProducts[this.state.activeTab - 1].self.newPrice), " for the first month (Save 50%)"))), this.props.subbedTier !== l.a.Prime || this.props.isGift || (n = s.createElement(f.U, {
                        display: f.H.InlineFlex,
                        margin: {
                            right: 2
                        }
                    }, s.createElement(f.U, {
                        display: f.H.InlineFlex,
                        margin: {
                            right: 1
                        },
                        className: "subscription-balloon-options__prime-crown"
                    }, s.createElement(f._8, {
                        asset: f._9.Crown
                    })), s.createElement(f._18, {
                        active: this.state.activeTab === r.Prime,
                        "data-a-target": i(r.Prime),
                        onClick: this.toggleActiveTab
                    }, this.messages.prime))), this.props.subbedTier && this.props.subbedTier !== l.a.Tier1 || (a = s.createElement(f.U, {
                        display: f.H.InlineFlex,
                        margin: {
                            right: 2
                        }
                    }, this.state.subbedTier === r.Tier1 && e, s.createElement(f._18, {
                        active: this.state.activeTab === r.Tier1,
                        "data-a-target": i(r.Tier1),
                        onClick: this.toggleActiveTab
                    }, this.messages.tier1TabName))), this.props.subbedTier && this.props.subbedTier !== l.a.Prime && this.props.subbedTier !== l.a.Tier1 && this.props.subbedTier !== l.a.Tier2 || (c = s.createElement(f.U, {
                        display: f.H.InlineFlex,
                        margin: {
                            right: 2
                        }
                    }, this.state.subbedTier === r.Tier2 && e, s.createElement(f._18, {
                        active: this.state.activeTab === r.Tier2,
                        "data-a-target": i(r.Tier2),
                        onClick: this.toggleActiveTab
                    }, this.messages.tier2TabName)));
                    var d = null;
                    return (this.messages.tier2EmoteCount > 0 && this.state.activeTab === r.Tier2 || this.messages.tier3EmoteCount > 0 && this.state.activeTab === r.Tier3) && (d = s.createElement(f.U, {
                        display: f.H.InlineFlex,
                        alignItems: f.c.Center
                    }, this.getExtraEmotes(this.state.activeTab), s.createElement(f._21, {
                        bold: !0
                    }, Object(o.d)("Plus {extraEmoteCount, number} extra channel emote(s)", {
                        extraEmoteCount: this.state.activeTab === r.Tier2 ? this.messages.tier2EmoteCount : this.messages.tier3EmoteCount
                    }, "SubTierTabs")))), s.createElement(f.U, {
                        className: "channel-header__subscription-balloon-options"
                    }, s.createElement(f.U, {
                        margin: {
                            bottom: 1
                        }
                    }, s.createElement(f._19, null, n, a, c, u)), s.createElement(f.U, null, s.createElement(f.U, {
                        margin: {
                            bottom: 1
                        }
                    }, s.createElement(f._21, {
                        type: f._26.H5,
                        bold: !0
                    }, this.getTabTitle())), s.createElement(f.U, {
                        margin: {
                            bottom: 1
                        }
                    }, s.createElement(f._21, null, this.messages.subTierBenefits)), d, t, s.createElement(f.U, {
                        margin: {
                            top: 1,
                            right: 1
                        }
                    }, this.getTierSubscribeButton())))
                }, t.prototype.setMessages = function(e) {
                    var t = e.subscriptionProducts[1].emotes.length,
                        n = t + e.subscriptionProducts[2].emotes.length;
                    this.messages = {
                        tier2EmoteCount: t,
                        tier3EmoteCount: n,
                        prime: Object(o.d)("Prime", "SubTierTabs"),
                        subscribed: Object(o.d)("Subscribed", "SubTierTabs"),
                        subTierBenefits: Object(o.d)("Includes {availableEmoteCount, number} emoticon(s), subscriber badge, customizable messages upon subscribing, and ad-free viewing", {
                            availableEmoteCount: e.subscriptionProducts[0].emotes.length
                        }, "SubTierTabs"),
                        tier1Price: e.subscriptionProducts[0].price,
                        tier2Price: e.subscriptionProducts[1].price,
                        tier3Price: e.subscriptionProducts[2].price,
                        tier1TabName: e.subscriptionProducts[0].price,
                        tier2TabName: e.subscriptionProducts[1].price,
                        tier3TabName: e.subscriptionProducts[2].price,
                        subscribeNow: Object(o.d)("Subscribe Now", "SubTierTabs"),
                        freeSubWithPrime: Object(o.d)("Free Channel Sub with Twitch Prime", "SubTierTabs"),
                        giftSubscription: Object(o.d)("Gift A Subscription", "SubTierTabs"),
                        tier1Sub: e.subscriptionProducts[0].displayName,
                        tier2Sub: e.subscriptionProducts[1].displayName,
                        tier3Sub: e.subscriptionProducts[2].displayName
                    }, this.hasDiscount(e) && (this.messages.tier1Price = Object(g.a)(e.subscriptionProducts[0].self.newPrice), this.messages.tier2Price = Object(g.a)(e.subscriptionProducts[1].self.newPrice), this.messages.tier3Price = Object(g.a)(e.subscriptionProducts[2].self.newPrice))
                }, t.prototype.isSubscriptionDiscountReady = function(e) {
                    return void 0 !== e.subscriptionProducts[0].self
                }, t.prototype.hasDiscount = function(e) {
                    return !!this.isSubscriptionDiscountReady(e) && Object(g.b)(e.subscriptionProducts)
                }, t = a.__decorate([Object(d.c)("SubTierTabs")], t)
            }(s.Component),
            k = y;
        n.d(t, !1, function() {
            return S
        }), n.d(t, !1, function() {
            return v
        }), n.d(t, "b", function() {
            return r
        }), n.d(t, !1, function() {
            return i
        }), n.d(t, "a", function() {
            return k
        })
    },
    926: function(e, t, n) {
        "use strict";

        function i(e) {
            if (e) {
                var t = e.map(function(e) {
                    return e.id
                });
                return s().filter(function(e) {
                    return t.includes(e.canonical)
                })
            }
            return s()
        }
        var r = function(e, t) {
                return 'community report (<a href="{link}">{link}</a>) {description}'.replace(/{link}/g, "https://www.twitch.tv/communities/{communityName}".replace("{communityName}", e)).replace(/{description}/, t)
            },
            a = n(2),
            s = function() {
                return [{
                    localized: Object(a.d)("Site Suspension Evasion", "ReportUserModal"),
                    canonical: "tos_ban_evasion"
                }, {
                    localized: Object(a.d)("Chat Ban Evasion", "ReportUserModal"),
                    canonical: "chat_ban_evasion"
                }, {
                    localized: Object(a.d)("Self-Harm", "ReportUserModal"),
                    canonical: "selfharm"
                }, {
                    localized: Object(a.d)("Attempts or Threats to Harm", "ReportUserModal"),
                    canonical: "harm"
                }, {
                    localized: Object(a.d)("Harassment", "ReportUserModal"),
                    canonical: "harassment"
                }, {
                    localized: Object(a.d)("Hate Speech", "ReportUserModal"),
                    canonical: "hate_speech"
                }, {
                    localized: Object(a.d)("Offensive Username", "ReportUserModal"),
                    canonical: "offensive_username"
                }, {
                    localized: Object(a.d)("Impersonation", "ReportUserModal"),
                    canonical: "impersonation"
                }, {
                    localized: Object(a.d)("Spam, Scams, or Other Malicious Content", "ReportUserModal"),
                    canonical: "spam"
                }, {
                    localized: Object(a.d)("Porn or Other Sexually Explicit Content", "ReportUserModal"),
                    canonical: "porn"
                }, {
                    localized: Object(a.d)("Nudity or Sexual Behavior/Attire", "ReportUserModal"),
                    canonical: "nudity"
                }, {
                    localized: Object(a.d)("Extreme Violence, Gore, or Other Obscene Content", "ReportUserModal"),
                    canonical: "gore"
                }, {
                    localized: Object(a.d)("Underaged User", "ReportUserModal"),
                    canonical: "underaged"
                }, {
                    localized: Object(a.d)("Cheating in Online Game", "ReportUserModal"),
                    canonical: "cheating"
                }, {
                    localized: Object(a.d)("Prohibited Game", "ReportUserModal"),
                    canonical: "prohibited"
                }, {
                    localized: Object(a.d)("Miscategorized Content or Other Category Violation", "ReportUserModal"),
                    canonical: "miscategorized"
                }, {
                    localized: Object(a.d)("Community Rules Violation", "ReportUserModal"),
                    canonical: "community_rules_violation"
                }, {
                    localized: Object(a.d)("Community is Violating Terms of Service", "ReportUserModal"),
                    canonical: "community_tos_violation"
                }, {
                    localized: Object(a.d)("Bits Acceptable Use Policy Violation", "ReportUserModal"),
                    canonical: "bits_violation"
                }, {
                    localized: Object(a.d)("Other Terms of Service Violation", "ReportUserModal"),
                    canonical: "other"
                }]
            };
        n.d(t, "a", function() {
            return r
        }), n.d(t, "b", function() {
            return i
        })
    },
    927: function(e, t, n) {
        "use strict";

        function i(e) {
            return {
                sessionUser: e.session.user
            }
        }
        n.d(t, "a", function() {
            return y
        });
        var r = n(0),
            a = n(1),
            s = (n.n(a), n(8)),
            o = n(11),
            l = n(2),
            c = n(9),
            u = n(23),
            d = n(14),
            p = n(6),
            m = n(921),
            h = n(919),
            g = n(926),
            b = n(921),
            f = n(947),
            S = (n.n(f), n(948)),
            v = (n.n(S), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        submitStatus: b.b.Unsubmitted
                    }, t.handleSubmit = function(e, n, i, a) {
                        return r.__awaiter(t, void 0, void 0, function() {
                            var t, s, t, o;
                            return r.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        if (e !== m.a) return [3, 5];
                                        t = {
                                            userID: this.props.reportContext.targetUserID,
                                            communityID: i || "",
                                            reason: n
                                        }, r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 3, , 4]), [4, this.props.reportUserInCommunity(Object(u.a)(t))];
                                    case 2:
                                        return r.sent(), l.n.tracking.track(d.SpadeEventType.CommunityModeration, {
                                            community_id: i,
                                            name: a,
                                            is_official: !1,
                                            user_id: this.props.sessionUser && this.props.sessionUser.id,
                                            target_id: this.props.reportContext.targetUserID,
                                            action: "report",
                                            reason: e
                                        }), this.setState({
                                            submitStatus: b.b.Success
                                        }), [3, 4];
                                    case 3:
                                        return s = r.sent(), l.i.error(s, "ReportUserInCommunity Mutation failed."), this.setState({
                                            submitStatus: b.b.MutationError
                                        }), [3, 4];
                                    case 4:
                                        return [3, 9];
                                    case 5:
                                        t = {
                                            description: n,
                                            reason: e,
                                            content: this.props.reportContext.contentType,
                                            contentID: this.props.reportContext.contentID,
                                            extra: this.props.reportContext.extra,
                                            targetID: this.props.reportContext.targetUserID
                                        }, this.props.reportContext.contentType === h.a.Community && this.props.reportContext.extra && (t.description = Object(g.a)(this.props.reportContext.extra, n)), r.label = 6;
                                    case 6:
                                        return r.trys.push([6, 8, , 9]), [4, this.props.reportUser(Object(u.a)(t))];
                                    case 7:
                                        return r.sent(), this.props.reportContext.contentType === h.a.Community && l.n.tracking.track(d.SpadeEventType.CommunityReport, {
                                            community_id: this.props.reportContext.contentID,
                                            name: this.props.reportContext.extra,
                                            is_official: !1,
                                            user_id: this.props.sessionUser && this.props.sessionUser.id,
                                            reason: e
                                        }), this.setState({
                                            submitStatus: b.b.Success
                                        }), [3, 9];
                                    case 8:
                                        return o = r.sent(), l.i.error(o, "ReportUser Mutation failed."), this.setState({
                                            submitStatus: b.b.MutationError
                                        }), [3, 9];
                                    case 9:
                                        return [2]
                                }
                            })
                        })
                    }, t.handleChildError = function(e) {
                        return t.setState({
                            submitStatus: e
                        })
                    }, t.handleClose = function() {
                        t.props.onClose && t.props.onClose(t.state.submitStatus)
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillUnmount = function() {
                    this.handleClose()
                }, t.prototype.render = function() {
                    return a.createElement(b.c, {
                        onClose: this.handleClose,
                        onError: this.handleChildError,
                        onSubmit: this.handleSubmit,
                        reportContentType: this.props.reportContext.contentType,
                        submitStatus: this.state.submitStatus,
                        targetUserID: this.props.reportContext.targetUserID,
                        title: this.props.title,
                        defaultDescription: this.props.defaultDescription
                    })
                }, t
            }(a.Component)),
            y = Object(o.compose)(Object(c.a)(f, {
                name: "reportUserInCommunity"
            }), Object(c.a)(S, {
                name: "reportUser"
            }), Object(p.c)("ReportUser"), Object(s.a)(i, null))(v)
    },
    928: function(e, t, n) {
        "use strict";

        function i(e) {
            return Object(l.bindActionCreators)({
                closeModal: u.c
            }, e)
        }
        var r = n(927),
            a = n(0),
            s = n(1),
            o = n(8),
            l = n(11),
            c = n(134),
            u = n(50),
            d = n(6),
            p = n(3),
            m = (n(953), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleClose = function(e) {
                        t.props.closeModal(), t.props.onClose && t.props.onClose(e)
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return s.createElement(p._17, {
                        className: "reporting-modal__container",
                        background: p.m.Base,
                        padding: {
                            x: 2,
                            y: 3
                        }
                    }, s.createElement(r.a, {
                        onClose: this.handleClose,
                        reportContext: this.props.reportContext,
                        title: this.props.title,
                        defaultDescription: this.props.defaultDescription
                    }), s.createElement(c.a, null))
                }, t
            }(s.Component)),
            h = Object(l.compose)(Object(d.c)("ReportUserModal"), Object(o.a)(null, i))(m);
        n.d(t, !1, function() {}), n.d(t, !1, function() {
            return r.a
        }), n.d(t, !1, function() {
            return m
        }), n.d(t, "a", function() {
            return h
        })
    },
    934: function(e, t, n) {
        "use strict";

        function i(e) {
            return {
                authToken: Object(o.a)(e)
            }
        }
        var r = n(0),
            a = n(1),
            s = n(8),
            o = n(19),
            l = n(6),
            c = n(935),
            u = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.reportInteractive = function() {
                        t.props.latencyTracking.reportInteractive()
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(c.b, {
                        authToken: this.props.authToken,
                        hostChannelID: this.props.hostChannelID,
                        hostChannelLogin: this.props.hostChannelLogin,
                        channelLogin: this.props.channelLogin,
                        updateContainerWidth: this.props.updateContainerWidth,
                        reportInteractive: this.reportInteractive
                    })
                }, t = r.__decorate([Object(l.c)("SubscribeButton")], t)
            }(a.Component),
            d = Object(s.a)(i)(u);
        n.d(t, !1, function() {
            return u
        }), n.d(t, "b", function() {
            return d
        }), n.d(t, !1, function() {}), n.d(t, "a", function() {
            return c.a
        }), n.d(t, !1, function() {
            return c.b
        })
    },
    935: function(e, t, n) {
        "use strict";

        function i(e) {
            var t = new Map;
            return t.set(R.b.Prime, null), e.forEach(function(e, n) {
                t.set(n + 1, e)
            }), t
        }
        var r, a = n(0),
            s = n(1),
            o = n(2),
            l = n(64),
            c = n(9),
            u = n(109),
            d = n(936),
            p = n(142),
            m = n(23),
            h = n(36),
            g = n(20),
            b = n(6),
            f = n(65),
            S = n(89),
            v = n(139),
            y = n(409),
            k = n(30),
            _ = n(52),
            E = n(136),
            P = n(957),
            T = n(269),
            C = n(3),
            N = (n(972), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        selectedUser: null
                    }, t.messages = {
                        noResults: Object(o.d)("No Results", "GiftRecipientSearchResult"),
                        buyGift: Object(o.d)("Buy Gift Subscription", "GiftRecipientSearchResult"),
                        searchHint: Object(o.d)("Start typing to see a list of suggestions here.", "GiftRecipientSearchResult")
                    }, t.reportGiftCheckoutAction = function() {
                        t.props.reportSubMenuAction({
                            action: T.a.BuyGiftSub,
                            checkoutButtonTier: t.props.selectedProductPrice,
                            giftRecipient: t.state.selectedUser ? t.state.selectedUser.login : null
                        })
                    }, t.onUserClick = function(e) {
                        for (var n = e.target; n.parentElement && !n.dataset.user_id;) n = n.parentElement;
                        n.dataset.user_id && n.dataset.user_login && n.dataset.user_name ? t.setState({
                            selectedUser: {
                                id: n.dataset.userId || "",
                                login: n.dataset.user_login || "",
                                name: n.dataset.user_name || ""
                            }
                        }) : t.setState({
                            selectedUser: null
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    (e.isWaiting || e.isErrored || !e.hasInput) && this.setState({
                        selectedUser: null
                    })
                }, t.prototype.render = function() {
                    var e;
                    return e = this.props.isWaiting ? s.createElement(C.U, {
                        fullHeight: !0
                    }, s.createElement(C.X, {
                        fillContent: !0
                    })) : this.props.hasInput ? this.props.isErrored ? this.getErrorMessage() : this.props.userResults && this.props.userResults.totalHits > 0 ? this.getUserResultContent() : this.getNoResultsMessage() : s.createElement(C.U, {
                        margin: 1
                    }, s.createElement(C._21, {
                        color: C.F.Alt2
                    }, this.messages.searchHint)), s.createElement("div", {
                        onKeyDown: this.props.onKeyDown
                    }, s.createElement(C._17, {
                        className: "gift-recipient-search-result-view",
                        background: C.m.Alt,
                        position: C._2.Relative,
                        overflow: C.Y.Hidden,
                        display: C.H.Block,
                        margin: {
                            bottom: 2
                        },
                        borderLeft: !0,
                        borderBottom: !0,
                        borderRight: !0
                    }, s.createElement(C.P, {
                        overflow: C.Y.Hidden,
                        position: C._2.Relative
                    }, s.createElement(k.b, {
                        suppressScrollX: !0
                    }, s.createElement(C.U, null, e, s.createElement(k.a, {
                        enabled: !this.props.isWaiting && this.props.hasInput,
                        loadMore: this.props.loadMore
                    }))))), this.getBuyGiftButton())
                }, t.prototype.getBuyGiftButton = function() {
                    var e = Object(E.a)(this.props.selectedProductURL, {
                            recipient: this.state.selectedUser ? this.state.selectedUser.login : ""
                        }),
                        t = s.createElement(P.a, {
                            subProductId: this.props.selectedProductId,
                            giftRecipient: this.state.selectedUser ? this.state.selectedUser.login : null,
                            onClick: this.reportGiftCheckoutAction,
                            checkoutURL: e
                        }),
                        n = null;
                    if (this.state.selectedUser) {
                        var i = Object(_.a)(this.state.selectedUser.login || "", this.state.selectedUser.name || "");
                        n = s.createElement(C.P, {
                            margin: {
                                x: 1
                            }
                        }, s.createElement(C._21, null, Object(o.d)("for {displayName}", {
                            displayName: s.createElement(C._21, {
                                bold: !0,
                                type: C._26.Span
                            }, i)
                        }, "GiftRecipientSearchResult")))
                    }
                    return s.createElement(C.U, {
                        display: C.H.Flex,
                        alignItems: C.c.Center,
                        fullWidth: !0
                    }, t, n)
                }, t.prototype.getErrorMessage = function() {
                    return s.createElement(C.U, {
                        fullWidth: !0,
                        textAlign: C._22.Center,
                        justifyContent: C.T.Center
                    }, s.createElement(C._21, null, Object(o.d)("Something went wrong", "GiftRecipientSearchResult")))
                }, t.prototype.getUserResultContent = function() {
                    var e = this;
                    return this.props.userResults ? this.props.userResults.results.map(function(t) {
                        var n = Object(_.a)(t.login || "", t.name || "");
                        return s.createElement(C.S, {
                            tabIndex: -1,
                            "data-ts_selectable": !0,
                            "data-tt_content": !0,
                            key: "git-recipient-result__" + t.id,
                            "data-user_id": t.id,
                            "data-user_login": t.login,
                            "data-user_name": t.name,
                            onClick: e.onUserClick,
                            "data-test-selector": "subscribe-button__gift_search_result"
                        }, s.createElement(C.U, {
                            padding: .5
                        }, s.createElement(C.A, {
                            row: !0
                        }, s.createElement(C.C, {
                            imageAlt: t.thumbnailAltText,
                            imageSrc: t.thumbnail ? t.thumbnail : "",
                            size: C.D.Size4,
                            aspect: C.k.Aspect1x1
                        }), s.createElement(C.B, null, s.createElement(C.P, {
                            padding: {
                                x: 1
                            }
                        }, s.createElement(C._21, {
                            type: C._26.H5,
                            ellipsis: !0
                        }, n))))))
                    }) : s.createElement(C._1, null)
                }, t.prototype.getNoResultsMessage = function() {
                    return s.createElement(C.U, {
                        margin: 1
                    }, s.createElement(C._21, {
                        color: C.F.Alt2
                    }, this.messages.noResults))
                }, t = a.__decorate([Object(b.c)("GiftRecipientSearchResultPanel")], t)
            }(s.Component)),
            U = N,
            O = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleChange = function(e) {
                        t.props.onChange(e.target.value)
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return this.props.selectedSubProduct ? (this.formatMessages(), s.createElement(C.U, {
                        padding: 2
                    }, s.createElement(C.U, null, s.createElement(C.U, {
                        display: C.H.Flex,
                        justifyContent: C.T.Between,
                        alignItems: C.c.Center,
                        margin: {
                            bottom: 1
                        }
                    }, s.createElement(C._21, {
                        type: C._26.H4,
                        bold: !0
                    }, this.messages.giftSubscription), s.createElement(C.u, {
                        type: C.z.Text,
                        "data-a-target": "subscribe-back-button",
                        icon: C._9.AngleLeft,
                        onClick: this.props.onBack
                    }, s.createElement(C.U, {
                        alignItems: C.c.Center,
                        display: C.H.InlineFlex
                    }, s.createElement(C._21, null, this.messages.back)))), s.createElement(C.U, null, s.createElement(C._21, null, this.messages.giftSingleMonth), s.createElement(C.U, {
                        display: C.H.Flex,
                        justifyContent: C.T.Center,
                        fullWidth: !0
                    }, s.createElement(C.P, {
                        fullWidth: !0
                    }, s.createElement("div", null, s.createElement(C._11, {
                        onChange: this.handleChange,
                        onKeyDown: this.props.onKeyDown,
                        id: "gift-recipient-search",
                        placeholder: this.messages.searchPlaceholder
                    }), s.createElement(U, {
                        hasInput: this.props.hasInput,
                        userResults: this.props.userResults,
                        isErrored: this.props.isErrored,
                        isWaiting: this.props.isWaiting,
                        loadMore: this.props.loadMore,
                        onKeyDown: this.props.onKeyDown,
                        selectedProductId: this.props.selectedSubProduct.id,
                        selectedProductURL: this.props.selectedSubProduct.url,
                        selectedProductPrice: this.props.selectedSubProduct.price,
                        reportSubMenuAction: this.props.reportSubMenuAction
                    })))))))) : s.createElement(C._1, null)
                }, t.prototype.formatMessages = function() {
                    this.messages = {
                        giftSubscription: Object(o.d)("Choose a Gift Recipient", "GiftRecipientSearch"),
                        giftSingleMonth: Object(o.d)("{subDisplayName}: {giftPrice} Gift Subscription (Single Month)", {
                            subDisplayName: this.props.selectedSubProduct ? this.props.selectedSubProduct.displayName : "",
                            giftPrice: this.props.selectedSubProduct ? this.props.selectedSubProduct.price : ""
                        }, "GiftRecipientSearch"),
                        back: Object(o.d)("Back", "GiftRecipientSearch"),
                        searchPlaceholder: Object(o.d)("Search for a Twitch ID", "GiftRecipientSearch")
                    }
                }, t
            }(s.Component),
            w = 50,
            I = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.onChange = function(e) {
                        if (t.inputTimer && (clearTimeout(t.inputTimer), t.inputTimer = 0), !e) return void t.setState(t.getEmptyState());
                        t.setState({
                            isWaiting: !0
                        }), t.inputTimer = setTimeout(function() {
                            return t.doSearch(e)
                        }, w)
                    }, t.loadMore = function() {
                        return a.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, i;
                            return a.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        if (this.state.queryID || !0 === this.state.exhaustedHits) return [2];
                                        e = this.state.currentPage + 1, r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 3, , 4]), [4, this.searchClient.queryForType(S.a.Users, this.state.term, "", {
                                            page: e
                                        })];
                                    case 2:
                                        return t = r.sent(), [3, 4];
                                    case 3:
                                        return n = r.sent(), this.setState(a.__assign({}, this.getEmptyState(), {
                                            isErrored: !0,
                                            hasInput: !0
                                        })), [2];
                                    case 4:
                                        return t ? (i = Object(y.b)({
                                            searchResults: t,
                                            append: e > 0,
                                            currentUserResults: this.state.currentUserResults
                                        }), this.setState({
                                            currentUserResults: i.currentUserResults,
                                            term: this.state.term,
                                            hasInput: !0,
                                            isWaiting: !1,
                                            currentPage: e,
                                            exhaustedHits: i.exhaustedHits
                                        }), [2]) : (this.setState(a.__assign({}, this.getEmptyState(), {
                                            isErrored: !0,
                                            hasInput: !0
                                        })), [2])
                                }
                            })
                        })
                    }, t.onKeyDown = function(e) {
                        t.state.term && (e.keyCode === f.a.Esc ? t.setState({
                            hasInput: !1
                        }) : e.keyCode === f.a.Up ? t.focusNext(-1) : e.keyCode === f.a.Down && t.focusNext(1))
                    }, t.state = t.getEmptyState(), t.searchClient = new v.a(o.a.algoliaApplicationID, o.a.algoliaAPIKey), t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return s.createElement(O, {
                        onChange: this.onChange,
                        loadMore: this.loadMore,
                        onKeyDown: this.onKeyDown,
                        userResults: this.state.currentUserResults,
                        hasInput: this.state.hasInput,
                        isErrored: this.state.isErrored,
                        isWaiting: this.state.isWaiting,
                        onBack: this.props.onBack,
                        selectedSubProduct: this.props.selectedSubProduct,
                        reportSubMenuAction: this.props.reportSubMenuAction
                    })
                }, t.prototype.getEmptyState = function() {
                    return {
                        currentUserResults: {
                            totalHits: 0,
                            results: []
                        },
                        term: "",
                        hasInput: !1,
                        isErrored: !1,
                        queryID: "",
                        isWaiting: !1,
                        currentPage: -1,
                        focusSelectable: !1,
                        exhaustedHits: !1
                    }
                }, t.prototype.doSearch = function(e) {
                    return a.__awaiter(this, void 0, void 0, function() {
                        var t, n, i, r, s, o;
                        return a.__generator(this, function(l) {
                            switch (l.label) {
                                case 0:
                                    this.inputTimer = 0, t = -1, n = g.a(), i = "INPUT" === document.activeElement.tagName, this.setState({
                                        queryID: n,
                                        focusSelectable: !i && !!this.state.currentFocus
                                    }), l.label = 1;
                                case 1:
                                    return l.trys.push([1, 3, , 4]), t = 0, [4, this.searchClient.queryForType(S.a.Users, e, n)];
                                case 2:
                                    return r = l.sent(), [3, 4];
                                case 3:
                                    return s = l.sent(), this.setState(a.__assign({}, this.getEmptyState(), {
                                        isErrored: !0,
                                        hasInput: !0,
                                        term: e
                                    })), [2];
                                case 4:
                                    return r ? this.state.queryID !== r.id ? [2] : (o = Object(y.b)({
                                        searchResults: r,
                                        append: !1
                                    }), this.setState(function(n) {
                                        return a.__assign({}, n, o, {
                                            queryID: "",
                                            term: e,
                                            hasInput: !0,
                                            isWaiting: !1,
                                            currentPage: t
                                        })
                                    }), [2]) : (this.setState(a.__assign({}, this.getEmptyState(), {
                                        isErrored: !0,
                                        hasInput: !0,
                                        term: e
                                    })), [2])
                            }
                        })
                    })
                }, t.prototype.focusNext = function(e) {
                    var t, n = document.querySelectorAll("[data-ts_selectable=true]"),
                        i = document.activeElement,
                        r = Array.prototype.indexOf.call(n, i);
                    if (t = r < 0 ? e > 0 ? 0 : n.length - 1 : r + e, t < 0 && (t = 0), !(t >= n.length)) {
                        var a = n.item(t);
                        a.focus(), a.tabIndex = 0, this.state.currentFocus && (this.state.currentFocus.tabIndex = -1), this.setState({
                            currentFocus: a
                        })
                    }
                }, t = a.__decorate([Object(b.c)("GiftRecipientSearch")], t)
            }(s.Component),
            D = I,
            F = n(940),
            R = n(923),
            x = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentWillMount = function() {
                    this.setMessages()
                }, t.prototype.render = function() {
                    return s.createElement(C.U, {
                        padding: 2
                    }, s.createElement(C.U, null, s.createElement(C.U, {
                        display: C.H.Flex,
                        justifyContent: C.T.Between,
                        alignItems: C.c.Center,
                        margin: {
                            bottom: 1
                        }
                    }, s.createElement(C._21, {
                        type: C._26.H4,
                        bold: !0
                    }, this.messages.allSubscriptions), s.createElement(C.u, {
                        type: C.z.Text,
                        "data-a-target": "subscribe-back-button",
                        "data-test-selector": "subscribe-button__back-button",
                        icon: C._9.AngleLeft,
                        onClick: this.props.onBack
                    }, s.createElement(C.U, {
                        alignItems: C.c.Center,
                        display: C.H.InlineFlex
                    }, s.createElement(C._21, null, this.messages.back)))), s.createElement(R.a, {
                        channelDisplayName: this.props.channelDisplayName,
                        onSelectTierTab: this.props.onSelectTierTab,
                        reportSubMenuAction: this.props.reportSubMenuAction,
                        subscriptionProducts: this.props.subscriptionProducts,
                        userHasPrime: !1,
                        canPrimeSubscribe: !1,
                        isSubscribed: this.props.isSubscribed
                    })))
                }, t.prototype.setMessages = function() {
                    this.messages = {
                        back: Object(o.d)("Back", "PaidSubOptions"),
                        allSubscriptions: Object(o.d)("All Paid Subscriptions", "PaidSubOptions")
                    }
                }, t
            }(s.Component),
            L = x,
            j = n(934),
            A = n(952);
        ! function(e) {
            e[e.Top = 0] = "Top", e[e.SubOptions = 1] = "SubOptions", e[e.GiftOptions = 2] = "GiftOptions", e[e.RecipientSelect = 3] = "RecipientSelect"
        }(r || (r = {}));
        var M = n(937),
            B = n(974),
            G = (n(975), function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.handleTopPageSubButtonClick = function() {
                        n.props.reportSubMenuAction({
                            action: T.a.ClickCheckout,
                            checkoutButtonTier: n.messages.tier1Price
                        })
                    }, n.showGiftOptions = function() {
                        n.props.reportSubMenuAction({
                            action: T.a.ClickGiftSubOptions,
                            modalLevel: "second_page"
                        }), n.setState(function() {
                            return {
                                currentPage: r.GiftOptions
                            }
                        })
                    }, n.showSubOptions = function() {
                        n.props.reportSubMenuAction({
                            action: T.a.ClickMoreSubOptions,
                            modalLevel: "second_page"
                        }), n.setState(function() {
                            return {
                                currentPage: r.SubOptions
                            }
                        })
                    }, n.showRecipientSelect = function() {
                        n.setState(function() {
                            return {
                                currentPage: r.RecipientSelect
                            }
                        })
                    }, n.showTop = function() {
                        n.setState(function() {
                            return {
                                currentPage: r.Top
                            }
                        })
                    }, n.goToPreviousPage = function() {
                        return n.props.reportSubMenuAction({
                            action: T.a.ClickBack,
                            modalLevel: n.state.currentPage === r.SubOptions || n.state.currentPage === r.GiftOptions ? "top_page" : "second_page"
                        }), n.state.currentPage === r.SubOptions || n.state.currentPage === r.GiftOptions ? void n.showTop() : n.state.currentPage === r.RecipientSelect ? void n.showGiftOptions() : void 0
                    }, n.onSelectTierTab = function(e) {
                        var t = n.tabToSubProduct.get(e);
                        if (t) {
                            var i = n.props.subscriptionProducts.findIndex(function(e) {
                                return e.price === t.price
                            });
                            i !== n.state.selectedSubProductIndex && n.setState({
                                selectedSubProductIndex: i
                            }), n.props.onSelectTierTab(t.price)
                        } else n.props.onSelectTierTab(j.a)
                    }, n.state = {
                        currentPage: r.Top,
                        selectedSubProductIndex: 0,
                        giftingEnabled: !1
                    }, n.tabToSubProduct = i(t.subscriptionProducts), n
                }
                return a.__extends(t, e), t.prototype.componentWillMount = function() {
                    this.getGiftingExperimentAssignment()
                }, t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    if (!this.isSubscriptionDiscountReady(e) && this.isDiscountDataReady(e)) {
                        if (e.data.error) return;
                        var t = Object.assign({}, e.data.user.subscriptionProducts);
                        this.props.setPromotionData(t)
                    }
                }, t.prototype.render = function() {
                    return this.setMessages(), this.state.currentPage === r.Top ? this.getTopPage() : this.state.currentPage === r.SubOptions ? this.getPaidOptionsPage() : this.state.currentPage === r.GiftOptions ? this.getGiftOptionsPage() : this.state.currentPage === r.RecipientSelect ? this.getGiftRecipientSearchPage() : this.getTopPage()
                }, t.prototype.getGiftingExperimentAssignment = function() {
                    return a.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return a.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, o.n.experiments.getAssignment("TWILIGHT_SUB_GIFTING")];
                                case 1:
                                    return e = t.sent(), this.setState({
                                        giftingEnabled: "yes" === e
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.getPaidOptionsPage = function() {
                    return s.createElement(L, {
                        onBack: this.goToPreviousPage,
                        channelDisplayName: this.props.channelDisplayName,
                        onSelectTierTab: this.onSelectTierTab,
                        reportSubMenuAction: this.props.reportSubMenuAction,
                        subscriptionProducts: this.props.subscriptionProducts,
                        isSubscribed: !1,
                        hasDiscount: this.hasDiscount(this.props)
                    })
                }, t.prototype.getGiftOptionsPage = function() {
                    return s.createElement(C.U, {
                        padding: 2
                    }, s.createElement(F.a, {
                        onBack: this.goToPreviousPage,
                        channelDisplayName: this.props.channelDisplayName,
                        onSelectTierTab: this.onSelectTierTab,
                        reportSubMenuAction: this.props.reportSubMenuAction,
                        subscriptionProducts: this.props.subscriptionProducts,
                        onGiftSelect: this.showRecipientSelect
                    }))
                }, t.prototype.getGiftRecipientSearchPage = function() {
                    return s.createElement(D, {
                        onBack: this.goToPreviousPage,
                        selectedSubProduct: this.props.subscriptionProducts[this.state.selectedSubProductIndex],
                        reportSubMenuAction: this.props.reportSubMenuAction
                    })
                }, t.prototype.getTopPage = function() {
                    var e = null,
                        t = null,
                        n = null,
                        i = s.createElement(C._21, null, this.messages.tier1PricePerMonth),
                        r = this.messages.tier1Price;
                    return this.hasDiscount(this.props) && (i = s.createElement(C.U, null, s.createElement(C._21, {
                        className: "tw-subscription-modal__old-price"
                    }, s.createElement("s", null, this.messages.tier1PricePerMonth)), s.createElement(C._21, {
                        className: "tw-subscription-modal__new-price",
                        type: C._26.H5,
                        bold: !0
                    }, this.messages.discountMessage, " ")), r = Object(M.a)(this.props.subscriptionProducts[0].self.newPrice)), (this.props.inPrimeRegion || this.props.userHasPrime) && (n = this.renderPrimeSection()), this.props.isNonStandardSub || (e = s.createElement(C.U, {
                        margin: {
                            right: 1
                        },
                        display: C.H.Inline
                    }, s.createElement(C.u, {
                        ariaLabel: this.messages.seeMoreSubOptions,
                        onClick: this.showSubOptions,
                        type: C.z.Hollow,
                        "data-test-selector": "subscribe-button__more-sub-options-button",
                        "data-a-target": "see-more-sub-options-button"
                    }, this.messages.seeMoreSubOptions))), this.state.giftingEnabled && (t = s.createElement(C.U, {
                        display: C.H.Inline
                    }, s.createElement(C.u, {
                        ariaLabel: this.messages.giftSubscription,
                        onClick: this.showGiftOptions,
                        type: C.z.Hollow,
                        "data-test-selector": "subscribe-button__gift"
                    }, this.messages.giftSubscription))), s.createElement(C.U, {
                        padding: 2
                    }, n, s.createElement(C.U, null, s.createElement(C._21, {
                        type: C._26.H4,
                        bold: !0
                    }, this.messages.paidSubscription), i, s.createElement(C.U, {
                        display: C.H.Flex
                    }, s.createElement(C.U, {
                        margin: {
                            right: 1,
                            top: 1
                        }
                    }, s.createElement(C.u, {
                        ariaLabel: this.messages.subscribeTier1,
                        "data-a-target": "tier1-subscribe-button",
                        "data-test-selector": "subscribe-button__top-page-sub-button",
                        linkTo: this.props.subscriptionProducts[0].url,
                        onClick: this.handleTopPageSubButtonClick,
                        purchase: r,
                        targetBlank: !0
                    }, this.messages.subscribe)))), s.createElement(C.U, {
                        margin: {
                            right: 1,
                            top: 2
                        }
                    }, e, t))
                }, t.prototype.renderPrimeSection = function() {
                    var e = this.props.userHasPrime ? this.messages.useFreeChannelSub : this.messages.primeUpsell;
                    return s.createElement(C.U, {
                        margin: {
                            bottom: 2
                        }
                    }, s.createElement(C.U, {
                        margin: {
                            bottom: 1
                        }
                    }, s.createElement(C._21, {
                        type: C._26.H4,
                        bold: !0
                    }, this.messages.freeSubWithPrime)), s.createElement(C.U, null, s.createElement(C.U, {
                        margin: {
                            bottom: 1
                        }
                    }, s.createElement(C._21, null, e)), s.createElement(A.a, {
                        authToken: this.props.authToken,
                        "data-a-target": "subscribe-with-prime-button",
                        isSubscribed: !1,
                        isSubscribedWithPrime: !1,
                        onSubscribedWithPrime: this.props.onSubscribedWithPrime,
                        reportSubMenuAction: this.props.reportSubMenuAction,
                        subLogin: this.props.subLogin,
                        userHasPrime: this.props.userHasPrime,
                        canPrimeSubscribe: this.props.canPrimeSubscribe
                    })))
                }, t.prototype.setMessages = function() {
                    var e = this.props.subscriptionProducts[0].price;
                    this.hasDiscount(this.props) && this.props.subscriptionProducts[0].self.isEligibleForDiscount && (e = Object(M.a)(this.props.subscriptionProducts[0].self.newPrice)), this.messages = {
                        useFreeChannelSub: Object(o.d)("Use your free channel subscription to directly support your favorite streamer. {upsellTextLink}", {
                            upsellTextLink: s.createElement("a", {
                                href: "https://help.twitch.tv/customer/en/portal/articles/2572060-twitch-prime-guide",
                                target: "_blank"
                            }, Object(o.d)("Learn more about your free sub", "BalloonNonSubbedUser"))
                        }, "BalloonNonSubbedUser"),
                        primeUpsell: Object(o.d)("{upsellTextBold}, plus get free game loot every month, ad-free viewing, and loads more with Twitch Prime.", {
                            upsellTextBold: s.createElement("strong", null, Object(o.d)("Support your favorite streamer", "BalloonNonSubbedUser"))
                        }, "BalloonNonSubbedUser"),
                        freeSubWithPrime: Object(o.d)("Free Channel Sub with Twitch Prime", "BalloonNonSubbedUser"),
                        changeSubscription: Object(o.d)("Change Your Subscription", "BalloonNonSubbedUser"),
                        seeMoreSubOptions: Object(o.d)("More Paid Subscription Options", "BalloonNonSubbedUser"),
                        tier1Price: Object(o.d)("{tier1Price}", {
                            tier1Price: e
                        }, "BalloonNonSubbedUser"),
                        paidSubscription: Object(o.d)("Paid Subscription", "BalloonNonSubbedUser"),
                        tier1PricePerMonth: Object(o.d)("{price} / Month", {
                            price: this.props.subscriptionProducts[0].price
                        }, "BalloonNonSubbedUser"),
                        subscribeTier1: Object(o.d)("Subscribe {tier1Price}", {
                            tier1Price: e
                        }, "BalloonNonSubbedUser"),
                        subscribeToUser: Object(o.d)("Subscribe to {username}", {
                            username: this.props.channelDisplayName
                        }, "BalloonNonSubbedUser"),
                        subscribe: Object(o.d)("Subscribe", "BalloonNonSubbedUser"),
                        back: Object(o.d)("Back", "BalloonNonSubbedUser"),
                        allSubscriptions: Object(o.d)("All Paid Subscriptions", "BalloonNonSubbedUser"),
                        chooseGiftSubscription: Object(o.d)("Choose A Gift Subscription", "BalloonNonSubbedUser"),
                        discountMessage: Object(o.d)("{price} for the first month (Save 50%)", {
                            price: e
                        }, "BalloonNonSubbedUser"),
                        giftSubscription: Object(o.d)("Gift a Subscription", "BalloonNonSubbedUser"),
                        giftDiscountDisclaimer: Object(o.d)("Promotions do not apply to Gift Subscriptions", "BalloonNonSubbedUser")
                    }
                }, t.prototype.isDiscountDataReady = function(e) {
                    return e.data.user && e.data.user.subscriptionProducts && e.data.user.subscriptionProducts.length > 0 && e.data.user.subscriptionProducts[0] && e.data.user.subscriptionProducts[0].self && void 0 !== e.data.user.subscriptionProducts[0].self.isEligibleForDiscount
                }, t.prototype.isSubscriptionDiscountReady = function(e) {
                    return void 0 !== e.subscriptionProducts[0].self
                }, t.prototype.hasDiscount = function(e) {
                    return !!this.isDiscountDataReady(e) && Object(M.b)(e.subscriptionProducts)
                }, t = a.__decorate([Object(c.a)(B, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.channelLogin
                            }
                        }
                    },
                    skip: function(e) {
                        return !e.channelLogin
                    }
                }), Object(b.c)("BalloonNonSubbedUser")], t)
            }(s.Component)),
            V = G,
            H = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.showTop = function() {
                        n.setState(function() {
                            return {
                                currentPage: r.Top
                            }
                        })
                    }, n.showRecipientSelect = function() {
                        n.setState(function() {
                            return {
                                currentPage: r.RecipientSelect
                            }
                        })
                    }, n.showGiftOptions = function() {
                        n.props.reportSubMenuAction({
                            action: T.a.ClickGiftSubOptions
                        }), n.setState(function() {
                            return {
                                currentPage: r.GiftOptions
                            }
                        })
                    }, n.showSubOptions = function() {
                        n.setState(function() {
                            return {
                                currentPage: r.SubOptions
                            }
                        })
                    }, n.goToPreviousPage = function() {
                        return n.state.currentPage === r.GiftOptions || n.state.currentPage === r.SubOptions || n.state.giftShortcut ? (n.showTop(), void n.setState({
                            giftShortcut: !1
                        })) : n.state.currentPage === r.RecipientSelect ? void n.showGiftOptions() : void 0
                    }, n.onGiftSelect = function() {
                        n.props.reportSubMenuAction({
                            action: T.a.GiftASub,
                            checkoutButtonTier: n.props.subscriptionProducts[0].price
                        }), n.setState({
                            selectedSubProductIndex: 0,
                            giftShortcut: !0
                        }), n.showRecipientSelect()
                    }, n.handleTopPageSubButtonClick = function() {
                        n.props.reportSubMenuAction({
                            action: T.a.ClickCheckout,
                            checkoutButtonTier: n.props.subscriptionProducts[0].price
                        })
                    }, n.onSelectTierTab = function(e) {
                        var t = n.tabToSubProduct.get(e);
                        if (t) {
                            var i = n.props.subscriptionProducts.findIndex(function(e) {
                                return e.price === t.price
                            });
                            i !== n.state.selectedSubProductIndex && n.setState({
                                selectedSubProductIndex: i
                            }), n.props.onSelectTierTab(t.price)
                        } else n.props.onSelectTierTab(j.a)
                    }, n.state = {
                        currentPage: r.Top,
                        selectedSubProductIndex: 0,
                        giftShortcut: !1,
                        giftingEnabled: !1
                    }, n.tabToSubProduct = i(t.subscriptionProducts), n
                }
                return a.__extends(t, e), t.prototype.componentWillMount = function() {
                    this.getGiftingExperimentAssignment()
                }, t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return this.setMessages(), this.state.currentPage === r.Top ? this.getTopPage() : this.state.currentPage === r.SubOptions ? this.getSubOptionsPage() : this.state.currentPage === r.GiftOptions ? this.getGiftOptionsPage() : this.state.currentPage === r.RecipientSelect ? this.getGiftRecipientSearchPage() : this.getTopPage()
                }, t.prototype.getGiftingExperimentAssignment = function() {
                    return a.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return a.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, o.n.experiments.getAssignment("TWILIGHT_SUB_GIFTING")];
                                case 1:
                                    return e = t.sent(), this.setState({
                                        giftingEnabled: "yes" === e
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.getGiftRecipientSearchPage = function() {
                    return s.createElement(D, {
                        onBack: this.goToPreviousPage,
                        selectedSubProduct: this.props.subscriptionProducts[this.state.selectedSubProductIndex],
                        reportSubMenuAction: this.props.reportSubMenuAction
                    })
                }, t.prototype.getGiftOptionsPage = function() {
                    return s.createElement(C.U, {
                        padding: 2
                    }, s.createElement(F.a, {
                        onBack: this.goToPreviousPage,
                        channelDisplayName: this.props.channelDisplayName,
                        subscriptionProducts: this.props.subscriptionProducts,
                        onGiftSelect: this.showRecipientSelect,
                        onSelectTierTab: this.onSelectTierTab,
                        reportSubMenuAction: this.props.reportSubMenuAction
                    }))
                }, t.prototype.getSubOptionsPage = function() {
                    return s.createElement(L, {
                        onBack: this.goToPreviousPage,
                        channelDisplayName: this.props.channelDisplayName,
                        onSelectTierTab: this.onSelectTierTab,
                        reportSubMenuAction: this.props.reportSubMenuAction,
                        subscriptionProducts: this.props.subscriptionProducts,
                        hasDiscount: !1,
                        isSubscribed: !0
                    })
                }, t.prototype.getTopPageGiftSection = function() {
                    return s.createElement(C.U, null, s.createElement(C._21, {
                        type: C._26.H4,
                        bold: !0
                    }, this.messages.helpGrow), s.createElement(C.U, {
                        margin: {
                            top: 1,
                            bottom: 1
                        },
                        display: C.H.Flex
                    }, s.createElement(C.u, {
                        ariaLabel: this.messages.giftSubscription + " " + this.props.subscriptionProducts[0].price,
                        onClick: this.onGiftSelect,
                        purchase: this.props.subscriptionProducts[0].price
                    }, this.messages.giftSubscription), s.createElement(C.U, {
                        margin: {
                            left: 1
                        }
                    }, s.createElement(C.u, {
                        ariaLabel: this.messages.giftOptions,
                        onClick: this.showGiftOptions,
                        type: C.z.Hollow
                    }, this.messages.giftOptions))))
                }, t.prototype.getTopPageUpgradeSection = function() {
                    return s.createElement(C.U, null, s.createElement(C._21, {
                        type: C._26.H4,
                        bold: !0
                    }, this.messages.upgradeSubscription), s.createElement(R.a, {
                        authToken: this.props.authToken,
                        onSubscribedWithPrime: this.props.onSubscribedWithPrime,
                        subLogin: this.props.subLogin,
                        userHasPrime: this.props.userHasPrime,
                        canPrimeSubscribe: this.props.canPrimeSubscribe,
                        channelDisplayName: this.props.channelDisplayName,
                        onSelectTierTab: this.onSelectTierTab,
                        subbedTier: this.props.subbedTier,
                        subscriptionProducts: this.props.subscriptionProducts,
                        reportSubMenuAction: this.props.reportSubMenuAction,
                        onGiftSelect: this.showRecipientSelect,
                        isSubscribed: !0
                    }))
                }, t.prototype.getGiftInfoSection = function() {
                    var e, t, n = null;
                    return this.props.giftPaidUpgrade ? (e = this.messages.yourSubscription, t = this.messages.giftInfo, n = this.messages.giftUpgradeInfo) : (e = this.messages.yourGiftSub, t = this.messages.giftInfoWithExpiration), s.createElement(C.U, null, s.createElement(C._21, {
                        bold: !0,
                        type: C._26.H4
                    }, e), s.createElement(C.P, {
                        margin: {
                            y: 1
                        }
                    }, s.createElement(C._21, null, t)), n)
                }, t.prototype.getGiftExtendSection = function() {
                    var e = null,
                        t = null;
                    return this.props.isNonStandardSub || (e = s.createElement(C.U, {
                        margin: {
                            right: 1
                        },
                        display: C.H.Inline
                    }, s.createElement(C.u, {
                        ariaLabel: this.messages.seeMoreSubOptions,
                        onClick: this.showSubOptions,
                        type: C.z.Hollow,
                        "data-a-target": "see-more-sub-options-button"
                    }, this.messages.seeMoreSubOptions))), t = s.createElement(C.U, {
                        display: C.H.Inline
                    }, s.createElement(C.u, {
                        ariaLabel: this.messages.giftSubscription,
                        onClick: this.showGiftOptions,
                        type: C.z.Hollow
                    }, this.messages.giftSubscription)), s.createElement(C.U, null, s.createElement(C.U, {
                        margin: {
                            top: 1
                        }
                    }, s.createElement(C._21, {
                        type: C._26.H4,
                        bold: !0
                    }, this.messages.extendSubscription), s.createElement(C.P, {
                        margin: {
                            top: 1
                        }
                    }, s.createElement(C._21, null, this.messages.tier1PricePerMonth)), s.createElement(C.U, {
                        margin: {
                            right: 1,
                            top: 1
                        }
                    }, s.createElement(C.u, {
                        ariaLabel: this.props.subscriptionProducts[0].price,
                        "data-a-target": "tier1-subscribe-button",
                        linkTo: this.props.subscriptionProducts[0].url,
                        onClick: this.handleTopPageSubButtonClick,
                        purchase: this.props.subscriptionProducts[0].price,
                        targetBlank: !0
                    }, this.messages.subscribe))), s.createElement(C.U, {
                        margin: {
                            right: 1,
                            top: 2
                        }
                    }, e, t))
                }, t.prototype.getTopPage = function() {
                    return this.state.giftingEnabled ? this.props.userHasGiftSub ? this.props.userHasGiftSub && !this.props.giftPaidUpgrade ? s.createElement(C.U, {
                        className: "channel-header__subscription-modal-main",
                        padding: 2
                    }, s.createElement(C.U, {
                        margin: {
                            bottom: 2
                        }
                    }, this.getGiftInfoSection()), this.getGiftExtendSection()) : s.createElement(C.U, {
                        className: "channel-header__subscription-modal-main",
                        padding: 2
                    }, s.createElement(C.U, {
                        margin: {
                            bottom: 2
                        }
                    }, this.getGiftInfoSection()), this.getTopPageGiftSection()) : s.createElement(C.U, {
                        className: "channel-header__subscription-modal-main",
                        padding: 2
                    }, s.createElement(C.U, {
                        margin: {
                            bottom: 2
                        }
                    }, this.getTopPageGiftSection()), this.getTopPageUpgradeSection()) : s.createElement(C.U, {
                        className: "channel-header__subscription-modal-main",
                        padding: 2
                    }, this.getTopPageUpgradeSection())
                }, t.prototype.setMessages = function() {
                    switch (this.props.subbedTier) {
                        case d.a.Tier1:
                            this.props.subscriptionProducts[0].price;
                            break;
                        case d.a.Tier2:
                            this.props.subscriptionProducts[1].price;
                            break;
                        case d.a.Tier3:
                            this.props.subscriptionProducts[2].price;
                            break;
                        default:
                            this.props.subscriptionProducts[0].price
                    }
                    this.messages = {
                        upgradeSubscription: Object(o.d)("Upgrade Your Subscription", "BalloonSubbedUser"),
                        helpGrow: Object(o.d)("Help Grow {streamer}'s Community", {
                            streamer: this.props.channelDisplayName
                        }, "BalloonSubbedUser"),
                        giftSubscription: Object(o.d)("Gift A Subscription", "BalloonSubbedUser"),
                        giftOptions: Object(o.d)("More Gift Options", "BalloonSubbedUser"),
                        chooseGiftSubscription: Object(o.d)("Choose A Gift Subscription", "BalloonSubbedUser"),
                        back: Object(o.d)("Back", "BalloonSubbedUser"),
                        yourSubscription: Object(o.d)("Your Subscription", "BalloonSubbedUser"),
                        extendSubscription: Object(o.d)("Extend Your Subscription", "BalloonSubbedUser"),
                        yourGiftSub: Object(o.d)("Your Gift Subscription", "BalloonSubbedUser"),
                        seeMoreSubOptions: Object(o.d)("More Paid Subscription Options", "BalloonSubbedUser"),
                        subscribe: Object(o.d)("Subscribe", "BalloonSubbedUser"),
                        giftInfo: Object(o.d)("{giftPrice} Gift Subscription from {giftSender}", {
                            giftPrice: this.getCurrentSubPrice(),
                            giftSender: s.createElement(C._21, {
                                bold: !0,
                                type: C._26.Span
                            }, this.props.giftSender || "")
                        }, "BalloonSubbedUser"),
                        giftUpgradeInfo: Object(o.d)("Your new {upgradePrice} Paid Subscription will begin on {subStartDate}", {
                            upgradePrice: this.props.giftPaidUpgrade ? this.props.giftPaidUpgrade.price : "",
                            subStartDate: this.getFormattedGiftUpgradeStartDate()
                        }, "BalloonSubbedUser"),
                        giftInfoWithExpiration: Object(o.d)("{giftPrice} Subscription from {giftSender} - Benefits expire on {giftEndDate}", {
                            giftPrice: this.getCurrentSubPrice(),
                            giftSender: s.createElement(C._21, {
                                bold: !0,
                                type: C._26.Span
                            }, this.props.giftSender || ""),
                            giftEndDate: this.getFormattedGiftEndDate()
                        }, "BalloonSubbedUser"),
                        tier1PricePerMonth: Object(o.d)("{price} / Month", {
                            price: this.props.subscriptionProducts[0].price
                        }, "BalloonSubbedUser"),
                        allSubscriptions: Object(o.d)("All Paid Subscriptions", "BalloonSubbedUser")
                    }
                }, t.prototype.getFormattedGiftUpgradeStartDate = function() {
                    var e = "";
                    if (this.props.giftPaidUpgrade && this.props.giftPaidUpgrade.startsAt) try {
                        e = Object(o.c)(new Date(this.props.giftPaidUpgrade.startsAt), {
                            month: "long",
                            day: "numeric"
                        })
                    } catch (t) {
                        o.i.debug(t, "There was an error formatting gift upgrade start date."), e = ""
                    }
                    return e
                }, t.prototype.getFormattedGiftEndDate = function() {
                    var e = "";
                    if (this.props.giftSubEndDate) try {
                        e = Object(o.c)(new Date(this.props.giftSubEndDate), {
                            month: "long",
                            day: "numeric"
                        })
                    } catch (t) {
                        o.i.debug(t, "There was an error formatting gift end date."), e = ""
                    }
                    return e
                }, t.prototype.getCurrentSubPrice = function() {
                    switch (this.props.subbedTier) {
                        case "1000":
                            return this.props.subscriptionProducts[0].price;
                        case "2000":
                            return this.props.subscriptionProducts[1].price;
                        case "3000":
                            return this.props.subscriptionProducts[2].price;
                        default:
                            return this.props.subscriptionProducts[0].price
                    }
                }, t = a.__decorate([Object(b.c)("BalloonSubbedUser")], t)
            }(s.Component),
            z = H,
            W = (n(976), n(977));
        n.d(t, "a", function() {
            return q
        }), n.d(t, "b", function() {
            return K
        });
        var q = "prime",
            $ = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isSubscribed: !1,
                        activeTierPrice: q,
                        subbedTier: null,
                        subData: null,
                        inPrimeRegion: !1,
                        isNonStandardSub: !1,
                        isGiftSub: !1,
                        hasReconciledUser: !1,
                        subGiftingEnabled: !1
                    }, t.modalLevel = "top_page", t.reportSubMenuAction = function(e) {
                        Object(T.b)({
                            action: e.action || "",
                            channelLogin: t.props.channelLogin || "",
                            channelID: t.props.data && t.props.data.user.id,
                            checkoutButtonTier: e.checkoutButtonTier || t.state.activeTierPrice.slice(),
                            hasSubCredit: !!t.props.data.user.self && t.props.data.user.self.canPrimeSubscribe,
                            hostChannelID: t.props.hostChannelID,
                            hostChannelLogin: t.props.hostChannelLogin,
                            isMenuOpen: !(e.action === T.a.OpenSubMenu),
                            sub_location: "channel_page",
                            modal: !t.state.isSubscribed,
                            modalLevel: t.state.isSubscribed ? "" : t.modalLevel.slice(),
                            showPrimeContent: t.state.inPrimeRegion,
                            giftRecipient: e.giftRecipient || null
                        }), !e.modalLevel || e.action !== T.a.ClickMoreSubOptions && e.action !== T.a.ClickBack || (t.modalLevel = e.modalLevel, t.setState({
                            activeTierPrice: q
                        }))
                    }, t.handleMenuToggle = function(e) {
                        t.reportSubMenuAction({
                            action: e ? T.a.CloseSubMenu : T.a.OpenSubMenu
                        })
                    }, t.onSelectTierTab = function(e) {
                        t.state.activeTierPrice !== e && t.setState({
                            activeTierPrice: e
                        })
                    }, t.onSubscribedWithPrime = function() {
                        t.reportSubMenuAction({
                            action: T.a.SubWithPrime
                        }), t.modalLevel = "", t.setState({
                            isSubscribed: !0,
                            subbedTier: d.a.Prime
                        }), Object(m.d)(W, {
                            login: t.props.channelLogin
                        }, function(e) {
                            return e.user && e.user.self && (e.user.self.canPrimeSubscribe = !1, e.user.self.subscriptionBenefit = {
                                id: Object(g.a)(),
                                purchasedWithPrime: !0,
                                tier: q,
                                endsAt: null,
                                paidUpgrade: null,
                                gift: {
                                    isGift: !1,
                                    gifter: null,
                                    __typename: "SubscriptionGift"
                                },
                                __typename: "SubscriptionBenefit"
                            }), e
                        })
                    }, t.setMessages = function() {
                        var e;
                        e = t.state.subGiftingEnabled ? Object(o.d)("Gift A Sub", "SubscribeButton") : Object(o.d)("Subscribed", "SubscribeButton"), t.messages = {
                            subscribe: t.props.hostChannelID ? Object(o.d)("Subscribe to {username}", {
                                username: t.props.data.user.displayName
                            }, "SubscribeButton") : Object(o.d)("Subscribe", "SubscribeButton"),
                            subscribed: t.props.hostChannelID ? Object(o.d)("Subscribed to {username}", {
                                username: t.props.data.user.displayName
                            }, "SubscribeButton") : e,
                            discountMessage: Object(o.d)("Get 50% off the first month of any paid Subscription", "SubscribeButton")
                        }
                    }, t.setPromotionData = function(e) {
                        if (t.state) {
                            var n = Object.assign({}, t.state.subData);
                            if (null !== n) {
                                for (var i = [], r = 0; r < 3; r++) {
                                    var a = Object.assign({}, n.subscriptionProducts[r]);
                                    a.self = e[r].self, i.push(a)
                                }
                                n.subscriptionProducts = i, t.setState({
                                    subData: n
                                })
                            }
                        }
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentWillMount = function() {
                    this.getGiftingExperimentAssignment()
                }, t.prototype.componentDidMount = function() {
                    this.props.reportInteractive && this.isUserDataReady(this.props) && this.props.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.props.channelLogin && !this.isUserDataReady(this.props) || !this.props.updateContainerWidth || this.props.updateContainerWidth(), this.props.reportInteractive && this.isUserDataReady(this.props) && this.props.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    if (this.isUserDataReady(e) && e.pubsub.messages.subscriptionInfo !== this.props.pubsub.messages.subscriptionInfo && this.props.data.refetch(), this.props.channelLogin !== e.channelLogin && this.setState({
                            subData: null,
                            isSubscribed: !1,
                            hasReconciledUser: !1
                        }), this.isUserDataReady(e) && this.hasSubscriptionProducts(e)) {
                        if (!this.state.inPrimeRegion && e.data.requestInfo && Object(p.b)(e.data.requestInfo.countryCode) && this.setState({
                                inPrimeRegion: !0
                            }), e.data.currentUser && this.isOwnChannel(e)) return void this.setState({
                            hasReconciledUser: !0
                        });
                        if (this.setState({
                                subData: e.data.user,
                                isNonStandardSub: 1 === e.data.user.subscriptionProducts.length
                            }), e.data.user.subscriptionProducts.some(this.isSubscriptionProductInvalid) && this.setState({
                                isNonStandardSub: !0
                            }), e.data.currentUser && e.data.user.self)
                            if (e.data.user.self.subscriptionBenefit) {
                                var t = e.data.user.self.subscriptionBenefit.purchasedWithPrime ? q : e.data.user.self.subscriptionBenefit.tier;
                                this.modalLevel = "";
                                var n = e.data.user.self.subscriptionBenefit.gift.isGift;
                                this.setState({
                                    isSubscribed: !0,
                                    subbedTier: t,
                                    hasReconciledUser: !0,
                                    isGiftSub: n
                                })
                            } else this.setState({
                                isSubscribed: !1,
                                hasReconciledUser: !0
                            });
                        else this.setState({
                            hasReconciledUser: !0
                        })
                    }
                }, t.prototype.render = function() {
                    if (!this.shouldRender() || !this.hasSubscriptionProducts(this.props)) return null;
                    if (this.setMessages(), this.props.data.currentUser && this.state.isSubscribed && this.state.isNonStandardSub) return s.createElement(C.u, {
                        disabled: !0,
                        ariaLabel: this.messages.subscribed,
                        icon: C._9.Star
                    }, this.messages.subscribed);
                    var e = this.state.subbedTier === d.a.Prime ? C._9.Crown : C._9.Star,
                        t = this.state.isSubscribed ? this.messages.subscribed : this.messages.subscribe,
                        n = this.state.isSubscribed ? "subscribed-button" : "subscribe-button",
                        i = s.createElement(C.u, {
                            "data-a-target": n,
                            "data-test-selector": "subscribe-button__dropdown",
                            ariaLabel: t,
                            type: this.state.isSubscribed ? C.z.Success : C.z.Default,
                            dropdown: !0,
                            icon: this.state.isSubscribed ? e : void 0
                        }, t),
                        r = this.props.hostChannelID ? C.q.TopLeft : C.q.BottomRight;
                    return s.createElement(l.a, {
                        onToggle: this.handleMenuToggle
                    }, i, s.createElement(C.p, {
                        size: C.r.Large,
                        direction: r,
                        "data-a-target": "sub-balloon"
                    }, this.renderBalloonContent()))
                }, t.prototype.renderBalloonContent = function() {
                    if (!this.state.subData) return o.i.debug("NOT rendering sub balloon; sub data not yet ready", {
                        state: this.state
                    }), null;
                    if (o.i.debug("rendering sub balloon", {
                            state: this.state
                        }), this.props.data.currentUser) {
                        if (this.state.isSubscribed) return s.createElement(z, {
                            authToken: this.props.authToken,
                            canPrimeSubscribe: !!this.props.data.user.self && this.props.data.user.self.canPrimeSubscribe,
                            channelDisplayName: this.state.subData.displayName,
                            onSelectTierTab: this.onSelectTierTab,
                            reportSubMenuAction: this.reportSubMenuAction,
                            subbedTier: this.state.subbedTier,
                            isNonStandardSub: this.state.isNonStandardSub,
                            subscriptionProducts: this.state.subData.subscriptionProducts,
                            onSubscribedWithPrime: this.onSubscribedWithPrime,
                            userHasPrime: this.props.data.currentUser.hasPrime,
                            userHasGiftSub: this.state.isGiftSub,
                            subLogin: this.state.subData.login,
                            giftSubEndDate: this.props.data.user.self && this.props.data.user.self.subscriptionBenefit ? this.props.data.user.self.subscriptionBenefit.endsAt : void 0,
                            giftPaidUpgrade: this.props.data.user.self && this.props.data.user.self.subscriptionBenefit && this.props.data.user.self.subscriptionBenefit.paidUpgrade ? this.props.data.user.self.subscriptionBenefit.paidUpgrade : void 0,
                            giftSender: this.getGiftSender()
                        });
                        var e = null;
                        return this.hasDiscount() && (e = s.createElement(C.U, {
                            className: "tw-subscription-modal__discount-bar"
                        }, s.createElement(C._21, null, this.messages.discountMessage))), s.createElement(C.U, null, e, s.createElement(V, {
                            authToken: this.props.authToken,
                            channelDisplayName: this.state.subData.displayName,
                            channelLogin: this.props.channelLogin,
                            canPrimeSubscribe: !!this.props.data.user.self && this.props.data.user.self.canPrimeSubscribe,
                            inPrimeRegion: this.state.inPrimeRegion,
                            isNonStandardSub: this.state.isNonStandardSub,
                            onSelectTierTab: this.onSelectTierTab,
                            onSubscribedWithPrime: this.onSubscribedWithPrime,
                            reportSubMenuAction: this.reportSubMenuAction,
                            subLogin: this.state.subData.login,
                            subscriptionProducts: this.state.subData.subscriptionProducts,
                            userHasPrime: this.props.data.currentUser.hasPrime,
                            setPromotionData: this.setPromotionData
                        }))
                    }
                    return s.createElement(V, {
                        authToken: this.props.authToken,
                        channelDisplayName: this.state.subData.displayName,
                        channelLogin: this.props.channelLogin,
                        canPrimeSubscribe: !!this.props.data.user.self && this.props.data.user.self.canPrimeSubscribe,
                        inPrimeRegion: this.state.inPrimeRegion,
                        isNonStandardSub: this.state.isNonStandardSub,
                        onSelectTierTab: this.onSelectTierTab,
                        onSubscribedWithPrime: this.onSubscribedWithPrime,
                        reportSubMenuAction: this.reportSubMenuAction,
                        subLogin: this.state.subData.login,
                        subscriptionProducts: this.state.subData.subscriptionProducts,
                        userHasPrime: !1,
                        setPromotionData: this.setPromotionData
                    })
                }, t.prototype.hasSubscriptionProducts = function(e) {
                    return e.data.user.subscriptionProducts && e.data.user.subscriptionProducts.length > 0
                }, t.prototype.shouldRender = function() {
                    return !!this.isUserDataReady(this.props) && (!this.hasSubscriptionProducts(this.props) || !!this.isSubscriptionReady())
                }, t.prototype.isUserDataReady = function(e) {
                    return e.data && e.data.user && !e.data.loading && !e.data.error
                }, t.prototype.isOwnChannel = function(e) {
                    return e.data.user.id === (e.data.currentUser && e.data.currentUser.id)
                }, t.prototype.isSubscriptionReady = function() {
                    return this.state.subData && this.state.hasReconciledUser
                }, t.prototype.getGiftSender = function() {
                    return this.state.isGiftSub && this.props.data.user.self && this.props.data.user.self.subscriptionBenefit && this.props.data.user.self.subscriptionBenefit.gift.isGift ? this.props.data.user.self.subscriptionBenefit.gift.gifter.displayName : null
                }, t.prototype.getGiftingExperimentAssignment = function() {
                    return a.__awaiter(this, void 0, void 0, function() {
                        var e, t;
                        return a.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    e = "no", n.label = 1;
                                case 1:
                                    return n.trys.push([1, 3, , 4]), [4, o.n.experiments.getAssignment("TWILIGHT_SUB_GIFTING")];
                                case 2:
                                    return e = n.sent(), [3, 4];
                                case 3:
                                    return t = n.sent(), e = "no", [3, 4];
                                case 4:
                                    return this.setState({
                                        subGiftingEnabled: "yes" === e
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.isSubscriptionProductInvalid = function(e) {
                    return !e.emoteSetID
                }, t.prototype.isSubscriptionDiscountReady = function(e) {
                    return !(!e || !e.subData) && void 0 !== e.subData.subscriptionProducts[0].self
                }, t.prototype.hasDiscount = function() {
                    var e = this.state;
                    return !!this.isSubscriptionDiscountReady(e) && (!(!e || !e.subData) && Object(M.b)(e.subData.subscriptionProducts))
                }, t = a.__decorate([Object(c.a)(W, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.channelLogin
                            }
                        }
                    },
                    skip: function(e) {
                        return !e.channelLogin
                    }
                }), Object(u.a)([{
                    topic: function(e) {
                        return Object(h.n)(e.data.currentUser && e.data.currentUser.id || "")
                    },
                    mapMessageTypesToProps: {
                        "*": "subscriptionInfo"
                    },
                    skip: function(e) {
                        return !(e.data && !e.data.loading && !e.data.error && e.data.currentUser)
                    }
                }])], t)
            }(s.Component),
            K = $
    },
    936: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var i = {
            Prime: "prime",
            Tier1: "1000",
            Tier2: "2000",
            Tier3: "3000"
        }
    },
    937: function(e, t, n) {
        "use strict";

        function i(e) {
            return "$" + (e / 100).toFixed(2).toString()
        }

        function r(e) {
            if (e[0].self && e[1].self && e[2].self) {
                if (e[0].self.isEligibleForDiscount) return !0;
                if (e[1].self.isEligibleForDiscount) return !0;
                if (e[2].self.isEligibleForDiscount) return !0
            }
            return !1
        }
        t.a = i, t.b = r
    },
    940: function(e, t, n) {
        "use strict";
        var i = n(0),
            r = n(1),
            a = n(2),
            s = n(923),
            o = n(3),
            l = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onGiftSelect = function() {
                        t.props.onGiftSelect && t.props.onGiftSelect()
                    }, t.onSelectTierTab = function(e) {
                        t.props.onSelectTierTab && t.props.onSelectTierTab(e)
                    }, t.reportSubMenuAction = function(e) {
                        t.props.reportSubMenuAction && t.props.reportSubMenuAction(e)
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(o.U, null, r.createElement(o.U, {
                        display: o.H.Flex,
                        justifyContent: o.T.Between,
                        alignItems: o.c.Center,
                        fullWidth: !0
                    }, r.createElement(o._21, {
                        bold: !0,
                        type: o._26.H5
                    }, Object(a.d)("Choose A Gift Subscription", "GiftTierTabs")), r.createElement(o.u, {
                        type: o.z.Text,
                        icon: o._9.AngleLeft,
                        onClick: this.props.onBack,
                        "data-test-selector": "sub-gift-select-back-button"
                    }, r.createElement(o.U, {
                        alignItems: o.c.Center,
                        display: o.H.InlineFlex
                    }, r.createElement(o._21, null, Object(a.d)("Back", "GiftTierTabs"))))), r.createElement(s.a, {
                        isGift: !0,
                        giftRecipient: this.props.giftRecipient,
                        onGiftSelect: this.onGiftSelect,
                        channelDisplayName: this.props.channelDisplayName,
                        subscriptionProducts: this.props.subscriptionProducts,
                        onSelectTierTab: this.onSelectTierTab,
                        reportSubMenuAction: this.reportSubMenuAction,
                        userHasPrime: !1,
                        canPrimeSubscribe: !1,
                        isSubscribed: !1
                    }))
                }, t
            }(r.Component),
            c = l;
        n.d(t, !1, function() {
            return "sub-gift-select-back-button"
        }), n.d(t, "a", function() {
            return c
        })
    },
    944: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ReportUserModal_ReportReasons"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "content"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "ReportContentType"
                            }
                        }
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "reportReasons"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "content"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "content"
                                }
                            }
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 118
            }
        };
        n.loc.source = {
            body: "query ReportUserModal_ReportReasons($content: ReportContentType!) {\n  reportReasons(content: $content) {\n    id\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    945: function(e, t) {},
    946: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ReportUserModal_UserCommunities"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "userId"
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
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
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
                                    value: "userId"
                                }
                            }
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "directories"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "nodes"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "id"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "name"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "displayName"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "directoryType"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }]
                                        }
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 201
            }
        };
        n.loc.source = {
            body: "query ReportUserModal_UserCommunities($userId: ID!) {\n  user(id: $userId) {\n    id\n    directories {\n      nodes {\n        id\n        name\n        displayName\n        directoryType\n      }\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    947: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "ReportUserModal_ReportUserCommunity"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "input"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "ReportUserInCommunityInput"
                            }
                        }
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "reportUserInCommunity"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "input"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "input"
                                }
                            }
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "user"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "id"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 157
            }
        };
        n.loc.source = {
            body: "mutation ReportUserModal_ReportUserCommunity($input: ReportUserInCommunityInput!) {\n  reportUserInCommunity(input: $input) {\n    user {\n      id\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    948: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "ReportUserModal_ReportUser"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "input"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "ReportContentInput"
                            }
                        }
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "reportContent"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "input"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "input"
                                }
                            }
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "contentID"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 120
            }
        };
        n.loc.source = {
            body: "mutation ReportUserModal_ReportUser($input: ReportContentInput!) {\n  reportContent(input: $input) {\n    contentID\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    952: function(e, t, n) {
        "use strict";

        function i(e, t) {
            return r.__awaiter(this, void 0, void 0, function() {
                var n, i, a, l, c;
                return r.__generator(this, function(r) {
                    switch (r.label) {
                        case 0:
                            n = "https://api.twitch.tv/api/premium/credit/spend_token?channel_id=" + e, i = 1, r.label = 1;
                        case 1:
                            if (!(i <= o)) return [3, 7];
                            r.label = 2;
                        case 2:
                            return r.trys.push([2, 5, , 6]), [4, fetch(n, {
                                method: "POST",
                                headers: {
                                    "Client-ID": s.n.config.legacyClientID,
                                    Accept: "application/json; charset=UTF-8",
                                    "content-type": "application/json; charset=UTF-8",
                                    Authorization: "OAuth " + t
                                }
                            })];
                        case 3:
                            return a = r.sent(), [4, a.body];
                        case 4:
                            return l = r.sent(), [2, l];
                        case 5:
                            if (c = r.sent(), i === o) throw c;
                            return [3, 6];
                        case 6:
                            return ++i, [3, 1];
                        case 7:
                            return [2]
                    }
                })
            })
        }
        var r = n(0),
            a = n(1),
            s = n(2),
            o = 3,
            l = n(269),
            c = n(3),
            u = "subscribe-button__subscribe-with-prime",
            d = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isSubscribing: !1,
                        primeSubFailure: !0
                    }, t.handleStartPrimeTrialClick = function() {
                        t.props.reportSubMenuAction({
                            action: l.a.ClickSignupForPrime
                        })
                    }, t.handleSubWithPrimeClick = function() {
                        t.setState({
                            isSubscribing: !0
                        }, function() {
                            return r.__awaiter(t, void 0, void 0, function() {
                                var e;
                                return r.__generator(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return t.trys.push([0, 3, 4, 5]), this.props.authToken && this.props.userHasPrime && this.props.subLogin ? [4, i(this.props.subLogin, this.props.authToken)] : [3, 2];
                                        case 1:
                                            t.sent(), this.props.onSubscribedWithPrime(), t.label = 2;
                                        case 2:
                                            return [3, 5];
                                        case 3:
                                            return e = t.sent(), s.i.error(e, "Failed to subscribe with Prime", {
                                                subLogin: this.props.subLogin
                                            }), this.setState({
                                                isSubscribing: !1,
                                                primeSubFailure: !0
                                            }), [3, 5];
                                        case 4:
                                            return this.setState({
                                                isSubscribing: !1
                                            }), [7];
                                        case 5:
                                            return [2]
                                    }
                                })
                            })
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentWillMount = function() {
                    this.setMessages()
                }, t.prototype.render = function() {
                    var e = this.props.isSubscribedWithPrime && this.props.canPrimeSubscribe;
                    return this.props.userHasPrime ? this.props.isSubscribed && !e ? a.createElement(c.u, r.__assign({
                        ariaLabel: this.messages.subscribed,
                        "data-test-selector": u,
                        disabled: !0,
                        icon: c._9.Crown
                    }, Object(c._39)(this.props)), this.messages.subscribed) : this.props.canPrimeSubscribe ? a.createElement(c.u, r.__assign({
                        ariaLabel: this.messages.subscribeFree,
                        "data-test-selector": u,
                        disabled: this.state.isSubscribing,
                        icon: c._9.Crown,
                        state: this.state.isSubscribing ? c.y.Loading : c.y.Default,
                        onClick: this.handleSubWithPrimeClick
                    }, Object(c._39)(this.props)), e ? this.messages.resubscribeFree : this.messages.subscribeFree) : a.createElement(c.u, r.__assign({
                        ariaLabel: this.messages.primeSubNotAvailable,
                        "data-test-selector": u,
                        disabled: !0,
                        icon: c._9.Crown
                    }, Object(c._39)(this.props)), this.messages.primeSubNotAvailable) : a.createElement(c.u, r.__assign({
                        ariaLabel: this.messages.startPrimeTrial,
                        "data-test-selector": u,
                        icon: c._9.Crown,
                        linkTo: s.a.tryPrimeURI,
                        onClick: this.handleStartPrimeTrialClick
                    }, Object(c._39)(this.props), {
                        targetBlank: !0
                    }), this.messages.startPrimeTrial)
                }, t.prototype.setMessages = function() {
                    this.messages = {
                        subscribed: Object(s.d)("Subscribed", "SubscribeWithPrime"),
                        startPrimeTrial: Object(s.d)("Start Your Free Trial", "SubscribeWithPrime"),
                        primeSubNotAvailable: Object(s.d)("Not yet!", "SubscribeWithPrime"),
                        subscribeFree: Object(s.d)("Subscribe Free", "SubscribeWithPrime"),
                        resubscribeFree: Object(s.d)("Resubscribe Free", "SubscribeWithPrime")
                    }
                }, t
            }(a.Component),
            p = d;
        n.d(t, !1, function() {
            return u
        }), n.d(t, "a", function() {
            return p
        })
    },
    953: function(e, t) {},
    957: function(e, t, n) {
        "use strict";
        var i = n(0),
            r = n(1),
            a = n(2),
            s = n(9),
            o = n(6),
            l = n(3),
            c = n(971),
            u = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        canGift: !1,
                        giftingEnabled: !1
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentWillMount = function() {
                    this.getGiftingExperimentAssignment()
                }, t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    e.data && e.data.user && e.data.user.self ? this.setState({
                        canGift: e.data.user.self.canGift
                    }) : this.setState({
                        canGift: !1
                    })
                }, t.prototype.render = function() {
                    return this.state.giftingEnabled ? r.createElement(l.u, {
                        targetBlank: !0,
                        disabled: !this.state.canGift,
                        onClick: this.props.onClick,
                        linkTo: this.props.checkoutURL,
                        "data-test-selector": "gift-subscribe-button"
                    }, Object(a.d)("Gift Subscription", "GiftSubscribeButton")) : null
                }, t.prototype.getGiftingExperimentAssignment = function() {
                    return i.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return i.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, a.n.experiments.getAssignment("TWILIGHT_SUB_GIFTING")];
                                case 1:
                                    return e = t.sent(), "yes" === e ? this.setState({
                                        giftingEnabled: !0
                                    }) : this.setState({
                                        giftingEnabled: !1
                                    }), [2]
                            }
                        })
                    })
                }, t = i.__decorate([Object(o.c)("GiftSubscribeButton"), Object(s.a)(c, {
                    options: function(e) {
                        return {
                            variables: {
                                recipientLogin: e.giftRecipient,
                                subProductId: e.subProductId
                            }
                        }
                    },
                    skip: function(e) {
                        return !e.giftRecipient || !e.subProductId
                    }
                })], t)
            }(r.Component),
            d = u;
        n.d(t, !1, function() {
            return "gift-subscribe-button"
        }), n.d(t, "a", function() {
            return d
        })
    },
    971: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "GiftSubscribeButton_Gift_Eligibility"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "recipientLogin"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String"
                        }
                    },
                    defaultValue: null
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "subProductId"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "String"
                            }
                        }
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "user"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "login"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "recipientLogin"
                                }
                            }
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "self"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "canGift"
                                        },
                                        arguments: [{
                                            kind: "Argument",
                                            name: {
                                                kind: "Name",
                                                value: "product"
                                            },
                                            value: {
                                                kind: "Variable",
                                                name: {
                                                    kind: "Name",
                                                    value: "subProductId"
                                                }
                                            }
                                        }],
                                        directives: [],
                                        selectionSet: null
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 195
            }
        };
        n.loc.source = {
            body: "query GiftSubscribeButton_Gift_Eligibility($recipientLogin: String, $subProductId: String!) {\n  user(login: $recipientLogin) {\n    id\n    self {\n      canGift(product: $subProductId)\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    972: function(e, t) {},
    973: function(e, t) {},
    974: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ChannelPage_SubscribeButton_Promotion"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "login"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "String"
                            }
                        }
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "user"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "login"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "login"
                                }
                            }
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "subscriptionProducts"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "id"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "self"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "isEligibleForDiscount"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "newPrice"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "oldPrice"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "discountType"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "discountType"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }]
                                        }
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 246
            }
        };
        n.loc.source = {
            body: "query ChannelPage_SubscribeButton_Promotion($login: String!) {\n  user(login: $login) {\n    id\n    subscriptionProducts {\n      id\n      self {\n\t\t\t\tisEligibleForDiscount\n\t\t\t\tnewPrice\n\t\t\t\toldPrice\n\t\t\t\tdiscountType\n\t\t\t\tdiscountType\n\t\t\t}\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    975: function(e, t) {},
    976: function(e, t) {},
    977: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ChannelPage_SubscribeButton_User"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "login"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "String"
                            }
                        }
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "user"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "login"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "login"
                                }
                            }
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "login"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "displayName"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "subscriptionProducts"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "id"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "price"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "url"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "emoteSetID"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "displayName"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "name"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "emotes"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "id"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }]
                                        }
                                    }]
                                }
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "self"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "canPrimeSubscribe"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "subscriptionBenefit"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "id"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "purchasedWithPrime"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "tier"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "endsAt"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "paidUpgrade"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "price"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "startsAt"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }]
                                                }
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "gift"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "isGift"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "gifter"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                alias: null,
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "id"
                                                                },
                                                                arguments: [],
                                                                directives: [],
                                                                selectionSet: null
                                                            }, {
                                                                kind: "Field",
                                                                alias: null,
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "displayName"
                                                                },
                                                                arguments: [],
                                                                directives: [],
                                                                selectionSet: null
                                                            }]
                                                        }
                                                    }]
                                                }
                                            }]
                                        }
                                    }]
                                }
                            }]
                        }
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "currentUser"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "login"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "hasPrime"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }]
                        }
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "requestInfo"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "countryCode"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 673
            }
        };
        n.loc.source = {
            body: "query ChannelPage_SubscribeButton_User($login: String!) {\n  user(login: $login) {\n    id\n    login\n    displayName\n    subscriptionProducts {\n      id\n      price\n      url\n      emoteSetID\n      displayName\n      name\n      emotes {\n        id\n      }\n    }\n    self {\n      canPrimeSubscribe\n      subscriptionBenefit {\n        id\n        purchasedWithPrime\n        tier\n        endsAt\n        paidUpgrade {\n          price\n          startsAt\n        }\n        gift {\n          isGift\n          gifter {\n            id\n            displayName\n          }\n        }\n      }\n    }\n  }\n  currentUser {\n    id\n    login\n    hasPrime\n  }\n  requestInfo {\n    countryCode\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    978: function(e, t, n) {
        "use strict";

        function i(e) {
            var t = Math.floor(e / 3600),
                n = Math.floor((e - 3600 * t) / 60),
                i = e - 3600 * t - 60 * n;
            return t < 10 && (t = "0" + t), n < 10 && (n = "0" + n), i < 10 && (i = "0" + i), t + "h" + n + "m" + i + "s"
        }

        function r(e) {
            return "" === e ? "" : e.startsWith("v") ? e : "v" + e
        }
        t.b = i, t.a = r
    },
    998: function(e, t, n) {
        "use strict";

        function i(e) {
            return e && "v" === e.charAt(0) ? e.substring(1) : e
        }
        t.a = i
    }
});
//# sourceMappingURL=pages.anon-front-cd7cb21571f4f393ee89b02891307e3f.js.map