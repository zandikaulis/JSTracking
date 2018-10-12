(window.webpackJsonp = window.webpackJsonp || []).push([
    [60], {
        "+PZR": function(e, t, n) {
            "use strict";
            var r = function(e, t) {
                    var n = "https://www.twitch.tv/communities/{communityName}".replace("{communityName}", e);
                    return 'community report (<a href="{link}">{link}</a>) {description}'.replace(/{link}/g, n).replace(/{description}/, t)
                },
                i = n("/7QA");

            function a() {
                return [{
                    id: "other",
                    text: Object(i.d)("Other Terms of Service Violation", "ReportUserModal")
                }]
            }
            n.d(t, "a", function() {
                return r
            }), n.d(t, "b", function() {
                return a
            })
        },
        "+qcr": function(e, t, n) {
            "use strict";
            n.d(t, "c", function() {
                return o
            }), n.d(t, "a", function() {
                return s
            }), n.d(t, "b", function() {
                return l
            }), n.d(t, "e", function() {
                return c
            }), n.d(t, "f", function() {
                return d
            }), n.d(t, "d", function() {
                return u
            });
            var r = n("q1tI"),
                i = n("OUrp"),
                a = n("eFQ3");

            function o(e) {
                switch (e.type) {
                    case i.b.Stream:
                        return r.createElement(a.b, {
                            channelLogin: e.id,
                            vodID: "",
                            showChannelInfoOnHover: e.showChannelInfoOnHover,
                            disableTheatreButton: !0,
                            playerTypeOverride: a.a.Frontpage,
                            onInit: e.onPlayerInit,
                            onDestroy: e.onPlayerDestroy,
                            onPauseToggled: e.onPauseToggled,
                            paused: e.paused
                        });
                    case i.b.Vod:
                        return r.createElement(a.b, {
                            channelLogin: "",
                            vodID: e.id,
                            disableTheatreButton: !0,
                            playerTypeOverride: a.a.Frontpage,
                            onInit: e.onPlayerInit,
                            onDestroy: e.onPlayerDestroy,
                            onVideoTimeChange: e.onVideoTimeChange,
                            onPauseToggled: e.onPauseToggled,
                            paused: e.paused
                        });
                    default:
                        return null
                }
            }

            function s(e) {
                var t = [],
                    n = e.featuredStreams;
                if (!n) return t;
                for (var r = 0, a = n; r < a.length; r++) {
                    var o = a[r];
                    if (o) {
                        var s = "",
                            l = null;
                        o.stream && o.stream.game && null !== o.stream.game.name && (s = o.stream.game.name), o.stream && o.stream.broadcaster && (l = o.stream.broadcaster);
                        var c = {
                            broadcaster: {
                                displayName: l && l.displayName ? l.displayName : "",
                                id: l && l.id ? l.id : "",
                                login: l && l.login ? l.login : "",
                                profileImageURL: l && l.profileImageURL ? l.profileImageURL : ""
                            },
                            content: {
                                id: l && l.login ? l.login : "",
                                gameName: s,
                                previewImageURL: o.stream && o.stream.previewImageURL ? o.stream.previewImageURL : "",
                                type: i.b.Stream,
                                subType: o.stream && o.stream.type ? o.stream.type : "",
                                viewersCount: o.stream && o.stream.viewersCount ? o.stream.viewersCount : 0
                            },
                            description: "",
                            imageURL: o.imageURL || "",
                            isScheduled: o.isScheduled || !1,
                            isSponsored: o.isSponsored || !1,
                            priorityLevel: o.priorityLevel || 10,
                            title: o.title || ""
                        };
                        t.push(c)
                    }
                }
                return t
            }

            function l(e) {
                return {
                    medium: "twitch_home",
                    content: e ? "carousel_promo" : "carousel_backfill"
                }
            }

            function c(e, t) {
                return t >= 0 ? t % e : (t % e + e) % e
            }

            function d(e, t) {
                return Math.floor(t / e)
            }

            function u(e) {
                return e && /^https:\/\/[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/.test(e)
            }
        },
        "/HY+": function(e, t, n) {
            "use strict";
            var r = n("dAHa"),
                i = n("mrSG"),
                a = n("q1tI"),
                o = n("/MKj"),
                s = n("fvjX"),
                l = n("cZKs"),
                c = n("aCAx"),
                d = n("GnwI"),
                u = n("Ue10"),
                p = (n("Oy4H"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleClose = function(e, n) {
                            t.props.closeModal(), t.props.onClose && t.props.onClose(e, n)
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(u.xb, {
                            className: "reporting-modal__container",
                            background: u.r.Base,
                            padding: {
                                x: 2,
                                y: 3
                            }
                        }, a.createElement(r.b, {
                            onClose: this.handleClose,
                            reportContext: this.props.reportContext,
                            title: this.props.title,
                            defaultDescription: this.props.defaultDescription
                        }), a.createElement(l.a, null))
                    }, t
                }(a.Component));
            var m = Object(s.compose)(Object(d.c)("ReportUserModal"), Object(o.connect)(null, function(e) {
                return Object(s.bindActionCreators)({
                    closeModal: c.c
                }, e)
            }))(p);
            n.d(t, !1, function() {}), n.d(t, !1, function() {
                return r.c
            }), n.d(t, !1, function() {
                return r.a
            }), n.d(t, !1, function() {}), n.d(t, !1, function() {
                return r.b
            }), n.d(t, !1, function() {
                return p
            }), n.d(t, "a", function() {
                return m
            })
        },
        "0INk": function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return l
            }), n.d(t, "c", function() {
                return c
            }), n.d(t, "a", function() {
                return d
            });
            var r = n("mrSG"),
                i = n("/7QA"),
                a = n("2xye"),
                o = n("gAd6"),
                s = function() {
                    var e = i.n.getLastPageview();
                    return e && e.location || a.PageviewLocation.None
                },
                l = function(e) {
                    i.n.trackItemSectionClick({
                        carousel_content: a.PageviewContent.Video,
                        channel_id: e.broadcasterID || "0",
                        channel: e.channelLogin || "unknown",
                        content: a.PageviewContent.PreviewCardGameName,
                        item_index: e.contentIndex,
                        medium: e.pageviewMedium,
                        item_id: e.videoID,
                        item_type: a.TwitchDataType.Video,
                        item_viewcount: null,
                        location: s()
                    })
                },
                c = function(e) {
                    i.n.trackItemSectionClick({
                        carousel_content: a.PageviewContent.PreviewCardGameBalloonGame,
                        channel_id: e.broadcasterID || "0",
                        channel: e.channelLogin || "unknown",
                        content: a.PageviewContent.PreviewCardGameBalloonGame,
                        item_index: e.contentIndex,
                        medium: e.pageviewMedium,
                        item_id: e.videoID,
                        item_type: a.TwitchDataType.Video,
                        item_viewcount: null,
                        location: s()
                    })
                },
                d = function(e) {
                    return r.__awaiter(void 0, void 0, void 0, function() {
                        var t, n, l, c, d, u = this;
                        return r.__generator(this, function(p) {
                            switch (p.label) {
                                case 0:
                                    return p.trys.push([0, 2, , 3]), t = e.map(function(e) {
                                        return r.__awaiter(u, void 0, void 0, function() {
                                            var t;
                                            return r.__generator(this, function(n) {
                                                switch (n.label) {
                                                    case 0:
                                                        return [4, i.o.apollo.client.query({
                                                            query: o,
                                                            variables: {
                                                                name: e
                                                            }
                                                        })];
                                                    case 1:
                                                        return [2, (t = n.sent().data).game && t.game.id]
                                                }
                                            })
                                        })
                                    }), [4, Promise.all(t)];
                                case 1:
                                    return n = p.sent(), l = n.filter(function(e) {
                                        return !!e
                                    }), c = l.map(function() {
                                        return a.TwitchDataType.Game
                                    }), d = l.map(function() {
                                        return null
                                    }), i.n.trackItemSectionLoad({
                                        carousel_content: a.PageviewContent.PreviewCardGameBalloonGame,
                                        rendered_item_count: l.length,
                                        rendered_item_list: l,
                                        rendered_item_types: c,
                                        rendered_items_viewcounts: d,
                                        location: s()
                                    }), [3, 3];
                                case 2:
                                    return p.sent(), [3, 3];
                                case 3:
                                    return [2]
                            }
                        })
                    })
                }
        },
        "0Rl0": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            });
            var r = n("q1tI"),
                i = n("Ue10"),
                a = function() {
                    return r.createElement(i.G, null, r.createElement(i.o, {
                        ratio: i.p.Aspect16x9
                    }, r.createElement(i.cb, null)), r.createElement(i.H, null, r.createElement(i.Va, {
                        display: i.W.Flex,
                        margin: {
                            bottom: 1
                        }
                    }, r.createElement(i.Va, {
                        display: i.W.InlineBlock,
                        margin: {
                            top: 1,
                            right: 1
                        }
                    }, r.createElement(i.cb, {
                        width: 40,
                        height: 56
                    })), r.createElement(i.Va, {
                        display: i.W.InlineBlock,
                        margin: {
                            top: 1
                        }
                    }, r.createElement(i.V, null, r.createElement(i.cb, {
                        width: 150
                    })), r.createElement(i.V, {
                        fontSize: i.Aa.Size7
                    }, r.createElement(i.cb, {
                        width: 100
                    }))))))
                }
        },
        "0T/G": function(e, t) {},
        "0fnA": function(e, t, n) {
            "use strict";
            n.r(t);
            var r, i, a = n("mrSG"),
                o = n("q1tI"),
                s = n("oJmH"),
                l = n("/7QA"),
                c = n("yR8l"),
                d = n("V+GM"),
                u = n("NvVO"),
                p = n("MPw5"),
                m = n("2xye"),
                h = n("Uive"),
                g = n("cTNz"),
                f = n("/MKj"),
                v = n("TSYQ"),
                b = n("fvjX"),
                k = n("17x9"),
                y = n("OUrp"),
                C = n("44NB"),
                S = n("+qcr"),
                w = n("GnwI"),
                T = n("Ue10");
            n("H9ix");
            ! function(e) {
                e.Image = "featured-item-image", e.Logo = "featured-item-logo", e.Video = "featured-item-video", e.Wrapper = "featured-item-wrapper"
            }(r || (r = {})),
            function(e) {
                e.Hidden = "hidden", e.Enter = "enter", e.EnterActive = "enterActive", e.Leave = "leave", e.LeaveActive = "leaveActive", e.Visible = "visible"
            }(i || (i = {}));
            var _, O = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.loadVideo = function() {
                            n.setState({
                                videoStatus: i.Enter
                            })
                        }, n.fadeVideoIn = function() {
                            n.trackPromotionView(), n.state.videoStatus === i.Enter && requestAnimationFrame(function() {
                                n.setState({
                                    videoStatus: i.EnterActive
                                }), n.enterTimeout = setTimeout(function() {
                                    n.setState({
                                        videoStatus: i.Visible
                                    })
                                }, n.props.transitionDuration)
                            })
                        }, n.fadeVideoOut = function() {
                            clearTimeout(n.enterTimeout), n.setState({
                                videoStatus: i.Leave
                            }), requestAnimationFrame(function() {
                                n.setState({
                                    videoStatus: i.LeaveActive
                                }), setTimeout(function() {
                                    n.setState({
                                        videoStatus: i.Hidden
                                    })
                                }, n.props.transitionDuration)
                            })
                        }, n.trackCarouselClick = function() {
                            var e = {
                                broadcast_type: n.props.item.content.subType,
                                carousel_index: n.props.index,
                                channel: n.props.item.broadcaster.login,
                                game: n.props.item.content.gameName,
                                promotion_was_scheduled: n.props.item.isScheduled,
                                views: n.props.item.content.viewersCount
                            };
                            Object(C.b)(e)
                        }, n.trackPromotionView = function() {
                            var e = {
                                broadcast_type: n.props.item.content.subType,
                                carousel_index: n.props.index,
                                channel: n.props.item.broadcaster.login,
                                game: n.props.item.content.gameName,
                                promotion_was_scheduled: n.props.item.isScheduled,
                                views: n.props.item.content.viewersCount
                            };
                            Object(C.e)(e)
                        }, n.onClick = function() {
                            n.trackCarouselClick(), n.props.onClick(n.props.offsetFromCenter)
                        }, n.state = {
                            videoStatus: t.showVideo ? i.Visible : i.Hidden
                        }, n
                    }
                    return a.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                        !1 === this.props.showVideo && !0 === e.showVideo ? this.loadVideo() : !0 === this.props.showVideo && !1 === e.showVideo && this.fadeVideoOut()
                    }, t.prototype.render = function() {
                        return o.createElement("div", a.__assign({}, Object(T.bc)(this.props)), o.createElement("div", {
                            onClick: this.onClick,
                            "data-test-selector": r.Wrapper,
                            className: v("featured-content-carousel-featured-item", "featured-content-carousel-featured-item--offset-" + Math.abs(this.props.offsetFromCenter))
                        }, o.createElement(T.xb, {
                            position: T.db.Relative,
                            borderRadius: T.x.Large,
                            overflow: T.Ya.Hidden,
                            elevation: 3,
                            background: T.r.AccentAlt2,
                            fullWidth: !0,
                            fullHeight: !0
                        }, Object(S.d)(this.props.item.imageURL) && o.createElement(T.Va, {
                            className: "featured-content-carousel-featured-item__logo-image-container",
                            position: T.db.Absolute,
                            attachBottom: !0,
                            attachLeft: !this.props.isRightSide,
                            attachRight: this.props.isRightSide,
                            margin: 1,
                            zIndex: T.ac.Above,
                            "data-test-selector": r.Logo
                        }, o.createElement(T.S, {
                            src: this.props.item.imageURL,
                            alt: this.props.item.broadcaster.login
                        })), o.createElement(T.xb, {
                            className: v("featured-content-carousel-featured-item__overlay", "featured-content-carousel-featured-item__overlay--offset-" + Math.abs(this.props.offsetFromCenter)),
                            position: T.db.Absolute,
                            attachTop: !0,
                            attachLeft: !0,
                            attachRight: !0,
                            attachBottom: !0,
                            background: T.r.Overlay
                        }), this.renderVideo(), this.props.item.content.previewImageURL && o.createElement(T.Na, {
                            fullWidth: !0
                        }, o.createElement(T.S, {
                            src: this.props.item.content.previewImageURL,
                            alt: this.props.item.title,
                            "data-test-selector": r.Image
                        })))))
                    }, t.prototype.renderVideo = function() {
                        if (this.props.item.content.id && this.state.videoStatus !== i.Hidden) {
                            var e = 0;
                            this.state.videoStatus !== i.EnterActive && this.state.videoStatus !== i.Leave && this.state.videoStatus !== i.Visible || (e = 1);
                            var t = {
                                type: y.b.Stream,
                                id: this.props.item.content.id,
                                paused: this.props.shouldPause,
                                showChannelInfoOnHover: !0,
                                onPauseToggled: this.props.onPauseToggled,
                                onPlayerInit: this.fadeVideoIn
                            };
                            return o.createElement(T.Va, {
                                position: T.db.Absolute,
                                attachTop: !0,
                                attachLeft: !0,
                                attachRight: !0,
                                attachBottom: !0,
                                zIndex: T.ac.Above,
                                refDelegate: this.props.setDomRef,
                                "data-test-selector": r.Video
                            }, this.state.videoStatus === i.Enter && o.createElement(T.xb, {
                                position: T.db.Absolute,
                                attachTop: !0,
                                attachLeft: !0,
                                attachRight: !0,
                                attachBottom: !0,
                                display: T.W.Flex,
                                alignItems: T.f.Center,
                                justifyContent: T.Ua.Center,
                                color: T.O.Overlay
                            }, o.createElement(T.Xa, {
                                delay: this.props.transitionDuration + 500,
                                size: T.vb.Large,
                                inheritColor: !0
                            })), o.createElement("div", {
                                style: {
                                    transition: "opacity " + this.props.transitionDuration + "ms ease",
                                    opacity: e
                                }
                            }, o.createElement(T.Na, {
                                fullWidth: !0
                            }, Object(S.c)(t))))
                        }
                    }, t
                }(o.Component),
                E = Object(s.compose)(Object(w.c)("FeaturedItem", {
                    autoReportInteractive: !0
                }))(O),
                I = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            shouldPause: !t.props.autoplay,
                            userHasPaused: !t.props.autoplay
                        }, t.setDomRef = function(e) {
                            return t.domRef = e
                        }, t.onPauseToggled = function(e) {
                            t.state.userHasPaused !== e && t.state.shouldPause !== e && t.setState({
                                shouldPause: e,
                                userHasPaused: e
                            })
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.unregister = this.context.registerReceiver(this)
                    }, t.prototype.componentWillUnmount = function() {
                        this.unregister()
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        e.autoplay !== this.props.autoplay && !0 === e.autoplay && this.setState({
                            shouldPause: !1,
                            userHasPaused: !1
                        })
                    }, t.prototype.render = function() {
                        return o.createElement(E, a.__assign({}, this.props, {
                            onPauseToggled: this.onPauseToggled,
                            setDomRef: this.setDomRef,
                            shouldPause: this.state.shouldPause
                        }))
                    }, t.prototype.checkVisible = function(e, t) {
                        if (t && this.domRef) {
                            var n = this.domRef.getBoundingClientRect();
                            n.bottom < e.top || n.top > e.bottom ? this.state.shouldPause || this.state.userHasPaused || this.setState({
                                shouldPause: !0
                            }) : this.state.shouldPause && !this.state.userHasPaused && this.setState({
                                shouldPause: !1
                            })
                        }
                    }, t.contextTypes = {
                        registerReceiver: k.func,
                        getScrollContent: k.func,
                        scrollToTop: k.func
                    }, t
                }(o.Component),
                N = function(e) {
                    return o.createElement(T.xb, {
                        position: T.db.Absolute,
                        attachLeft: e.left,
                        attachRight: e.right,
                        zIndex: T.ac.Above,
                        borderRadius: T.x.Rounded,
                        color: T.O.Alt2,
                        margin: .5
                    }, o.createElement(T.Sa, a.__assign({
                        type: T.Ta.Alpha,
                        blurAfterClick: !0,
                        onClick: e.onClick,
                        borderRadius: T.x.Rounded
                    }, Object(T.bc)(e)), o.createElement(T.Va, {
                        padding: 1,
                        display: T.W.Flex,
                        alignItems: T.f.Center,
                        justifyContent: T.Ua.Center
                    }, o.createElement(T.mb, {
                        asset: e.right && T.nb.AngleRight || T.nb.AngleLeft,
                        width: 30,
                        height: 30
                    }))))
                },
                R = n("kW4h"),
                D = (n("7D17"), 5),
                x = 200,
                M = 550;
            ! function(e) {
                e.LeftArrow = "featured-content-carousel-left-arrow", e.Placeholder = "featured-content-carousel-placeholder", e.RightArrow = "featured-content-carousel-right-arrow"
            }(_ || (_ = {}));
            var j = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            listOffset: 0,
                            listOffsetWillChange: 0,
                            listOffsetIsChanging: 0,
                            listOffsetLastChanged: 0,
                            containerWidth: null,
                            containerHeight: null,
                            autoplay: !t.props.hasActivePlayer && !l.o.integrations.app
                        }, t.carouselItems = [], t.options = {
                            transitionDuration: 450,
                            transformScale: .7
                        }, t.initialResizeEventFired = !1, t.displayTracked = !1, t.recalculateTimeout = 0, t.setContainerRef = function(e) {
                            t.containerRef = e, t.initialResizeEventFired || (t.recalculateDimensions(), t.initialResizeEventFired = !0)
                        }, t.onListItemClick = function(e) {
                            return function() {
                                t.triggerListOffsetChange(-e)
                            }
                        }, t.navigateLeft = function() {
                            t.triggerListOffsetChange(-1)
                        }, t.navigateRight = function() {
                            t.triggerListOffsetChange(1)
                        }, t.triggerListOffsetChange = function(e) {
                            if (t.setState({
                                    autoplay: !0
                                }), 0 === t.state.listOffsetIsChanging || Math.sign(e) === Math.sign(t.state.listOffsetIsChanging)) {
                                var n = Date.now(),
                                    r = t.options.transitionDuration / 3;
                                if (!(n < t.lastChangeStartedAt + r)) {
                                    t.lastChangeStartedAt = n;
                                    var i = t.getMedianCount() + e,
                                        a = t.carouselItems.length - t.getMedianCount() + i + t.state.listOffset,
                                        o = Object(S.e)(t.carouselItems.length, a);
                                    t.trackCarouselClick(t.carouselItems[o]), t.setState(function(t) {
                                        return {
                                            listOffsetWillChange: t.listOffsetWillChange + e
                                        }
                                    }, function() {
                                        requestAnimationFrame(function() {
                                            t.setState(function(e) {
                                                return {
                                                    listOffset: e.listOffset + e.listOffsetWillChange,
                                                    listOffsetIsChanging: e.listOffsetIsChanging + e.listOffsetWillChange,
                                                    listOffsetWillChange: 0
                                                }
                                            }), clearTimeout(t.transitionCompletionTimeout), t.transitionCompletionTimeout = setTimeout(function() {
                                                t.setState(function(e) {
                                                    return {
                                                        listOffsetIsChanging: 0,
                                                        listOffsetLastChanged: e.listOffsetIsChanging
                                                    }
                                                })
                                            }, t.options.transitionDuration)
                                        })
                                    })
                                }
                            }
                        }, t.trackCarouselClick = function(e) {
                            var n = {
                                broadcast_type: e.content.subType,
                                carousel_index: t.carouselItems.indexOf(e),
                                channel: e.broadcaster.login,
                                game: e.content.gameName,
                                promotion_was_scheduled: e.isScheduled,
                                views: e.content.viewersCount
                            };
                            Object(C.b)(n)
                        }, t.getNumToDisplay = function() {
                            if (!t.props.data || t.props.data.loading || !t.props.data.featuredStreams) return D;
                            var e = Math.min(t.props.data.featuredStreams.length, D);
                            return e % 2 ? e : e - 1
                        }, t.getMedianCount = function() {
                            return Math.ceil(t.getNumToDisplay() / 2)
                        }, t.getOffsetFromCenter = function(e) {
                            return Math.abs(t.getMedianCount() - e)
                        }, t.debounceRecalculateDimensions = function() {
                            clearTimeout(t.recalculateTimeout), t.recalculateTimeout = setTimeout(function() {
                                t.recalculateDimensions()
                            }, x)
                        }, t.recalculateDimensions = function() {
                            if (t.containerRef) {
                                var e = t.containerRef.getBoundingClientRect();
                                t.setState({
                                    containerWidth: e.width,
                                    containerHeight: e.height
                                })
                            }
                        }, t.renderItem = function(e, n, r) {
                            var i, a = t.carouselItems.indexOf(e),
                                s = n === t.getMedianCount() && 0 === t.state.listOffsetIsChanging && 0 === t.state.listOffsetWillChange,
                                l = s ? "featured-item" : void 0,
                                c = s ? "featured-item-index-" + a : void 0;
                            return o.createElement("div", {
                                key: e.content.id + "-" + r,
                                style: {
                                    position: "absolute",
                                    top: 0,
                                    left: "calc(50% - " + M / 2 + "px)",
                                    zIndex: t.getMedianCount() - t.getOffsetFromCenter(n),
                                    transform: t.transformX(n) + " scale(" + t.transformScalePercent(n) + ")",
                                    transition: "all " + t.options.transitionDuration + "ms ease"
                                },
                                className: v((i = {
                                    "featured-content-carousel__item-container": !0,
                                    "featured-content-carousel__item-container--leaving-or-entering": t.getOffsetFromCenter(n) >= t.getMedianCount()
                                }, i["featured-content-carousel__item-container--offset-" + t.getOffsetFromCenter(n)] = !0, i["featured-content-carousel__item-container--" + t.getPositionString(n)] = !0, i)),
                                "data-a-target": c
                            }, o.createElement(I, {
                                onClick: t.onListItemClick(t.getMedianCount() - n),
                                index: a,
                                item: e,
                                isRightSide: t.shouldMetaBeDisplayedOnRight(n),
                                showVideo: s,
                                autoplay: t.state.autoplay,
                                transitionDuration: t.options.transitionDuration,
                                offsetFromCenter: t.getMedianCount() - n,
                                "data-a-target": l
                            }))
                        }, t.shouldMetaBeDisplayedOnRight = function(e) {
                            var n = t.getMedianCount();
                            return e !== n ? e > n : t.state.listOffsetIsChanging > 0 || 0 === t.state.listOffsetIsChanging && t.state.listOffsetLastChanged > 0
                        }, t.transformX = function(e) {
                            var n = t.getMedianCount();
                            if (e === n || null === t.state.containerWidth) return "";
                            for (var r = 200, i = 1; i <= t.getNumToDisplay(); i++) r += t.transformScalePercent(i) * M;
                            var a = t.getOffsetFromCenter(e) / (n - 1),
                                o = Math.min(t.state.containerWidth, r) / 2 * a;
                            return e < n ? "translatex(-" + o + "px) translatex(" + 50 * a + "%)" : e > n ? "translatex(" + o + "px) translatex(-" + 50 * a + "%)" : ""
                        }, t.transformScalePercent = function(e) {
                            var n = t.getOffsetFromCenter(e),
                                r = t.getMedianCount() - 1,
                                i = (1 - t.options.transformScale) / r;
                            return Math.max(0, 1 - n * i)
                        }, t.getPositionString = function(e) {
                            var n = t.getMedianCount(),
                                r = t.getOffsetFromCenter(e);
                            return e < n ? "left-" + r : e > n ? "right-" + r : "center"
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentWillMount = function() {
                        window.addEventListener("resize", this.debounceRecalculateDimensions, !0)
                    }, t.prototype.componentWillUnmount = function() {
                        window.removeEventListener("resize", this.debounceRecalculateDimensions, !0)
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        e.sideNavCollapsed !== this.props.sideNavCollapsed && requestAnimationFrame(this.recalculateDimensions)
                    }, t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive(this.getNumToDisplay())
                    }, t.prototype.render = function() {
                        return o.createElement("div", {
                            ref: this.setContainerRef
                        }, o.createElement(T.Va, {
                            display: T.W.Flex,
                            alignItems: T.f.Center,
                            justifyContent: T.Ua.Center,
                            position: T.db.Relative,
                            className: "featured-content-carousel"
                        }, o.createElement(N, {
                            left: !0,
                            onClick: this.navigateLeft,
                            "data-test-selector": _.LeftArrow,
                            "data-a-target": "featured-item-left-button"
                        }), o.createElement(N, {
                            right: !0,
                            onClick: this.navigateRight,
                            "data-test-selector": _.RightArrow,
                            "data-a-target": "featured-item-right-button"
                        }), this.renderItems()))
                    }, t.prototype.renderPlaceholders = function() {
                        var e = this;
                        return Array.from({
                            length: D
                        }, function(t, n) {
                            var r;
                            return o.createElement("div", {
                                key: n + 1,
                                style: {
                                    position: "absolute",
                                    top: 0,
                                    left: "calc(50% - " + M / 2 + "px)",
                                    zIndex: e.getMedianCount() - e.getOffsetFromCenter(n + 1),
                                    transform: e.transformX(n + 1) + " scale(" + e.transformScalePercent(n + 1) + ")"
                                },
                                className: v((r = {
                                    "featured-content-carousel__item-container": !0,
                                    "featured-content-carousel__item-container--leaving-or-entering": e.getOffsetFromCenter(n + 1) >= e.getMedianCount()
                                }, r["featured-content-carousel__item-container--offset-" + e.getOffsetFromCenter(n + 1)] = !0, r["featured-content-carousel__item-container--" + e.getPositionString(n + 1)] = !0, r)),
                                "data-test-selector": _.Placeholder
                            }, o.createElement(T.xb, {
                                className: "featured-content-carousel__item-placeholder",
                                borderRadius: T.x.Large,
                                background: T.r.AccentAlt2,
                                elevation: 3
                            }))
                        })
                    }, t.prototype.renderItems = function() {
                        if (!this.props.data || this.props.data.loading || !this.props.data.featuredStreams) return this.renderPlaceholders();
                        if (this.props.data.error) return null;
                        var e = [];
                        this.carouselItems.length || (this.carouselItems = Object(S.a)(this.props.data)), this.displayTracked || (Object(C.a)(this.carouselItems), this.displayTracked = !0);
                        var t = 1,
                            n = this.getNumToDisplay();
                        t += Math.min(this.state.listOffsetWillChange, 0) - Math.max(this.state.listOffsetIsChanging, 0), n += Math.max(this.state.listOffsetWillChange, 0) - Math.min(this.state.listOffsetIsChanging, 0);
                        for (var r = t; r <= n; r++) e.push(this.getItemForSlot(r));
                        return e
                    }, t.prototype.getItemForSlot = function(e) {
                        var t = this.carouselItems.length - this.getMedianCount() + e + this.state.listOffset,
                            n = Object(S.e)(this.carouselItems.length, t),
                            r = Object(S.f)(this.carouselItems.length, t);
                        return this.renderItem(this.carouselItems[n], e, r)
                    }, t
                }(o.Component),
                L = Object(b.compose)(Object(c.a)(R, {
                    options: function() {
                        return {
                            variables: {
                                language: l.o.intl.getLanguageCode(),
                                first: 8,
                                acceptedMature: l.l.get("mature", !1)
                            }
                        }
                    }
                }), Object(w.c)("LoggedInCarousel"))(j);
            var P = Object(f.connect)(function(e) {
                    return {
                        sideNavCollapsed: !e.ui.sideNavExpanded,
                        hasActivePlayer: void 0 !== e.videoPlayer.activeVideoPlayerInstanceRefID
                    }
                })(L),
                V = n("D7An"),
                F = n("TDc0"),
                U = "twilight-onboarding",
                A = "twilight-onboarding-prompt__dismissed";

            function W() {
                return l.o.storage.get(U, !1)
            }
            var B = n("AO3T"),
                G = 3;

            function z(e, t) {
                var n = l.o.experiments.getAssignment(V.b.WebOnboarding);
                return !l.o.storage.get(A, !1) && Object(F.e)(n) && e < G && Object(F.f)(new Date(t))
            }

            function H(e) {
                Object(B.f)({
                    source: e
                }), l.o.storage.set(U, !0), window.location.assign("/hi" + location.search)
            }
            var q = n("Bh3T"),
                Y = n("sSlw"),
                Q = n("9pSj"),
                $ = n("MJbm"),
                X = n("5myU"),
                K = n("yI6f"),
                Z = n("ZDlU"),
                J = n("RXle"),
                ee = n("G1cX"),
                te = n("geRD");
            var ne = n("ZS2+"),
                re = n("kduP"),
                ie = n("JVUd"),
                ae = n("fVj5"),
                oe = n("3sMy");
            n("MIhF");
            var se;
            ! function(e) {
                e.Large = "Large", e.Small = "Small"
            }(se || (se = {}));
            var le = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            showError: !1
                        }, t.onUndoClick = function() {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var e, t;
                                return a.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            if (!(e = this.props.addFeedbackPromise)) return [2];
                                            n.label = 1;
                                        case 1:
                                            return n.trys.push([1, 7, , 8]), [4, e];
                                        case 2:
                                            t = n.sent(), n.label = 3;
                                        case 3:
                                            return n.trys.push([3, 5, , 6]), [4, (t.id, Promise.resolve())];
                                        case 4:
                                            return n.sent(), this.props.undoSuccessHandler(), [3, 6];
                                        case 5:
                                            return n.sent(), this.setState({
                                                showError: !0
                                            }), [3, 6];
                                        case 6:
                                            return [3, 8];
                                        case 7:
                                            return n.sent(), this.props.undoSuccessHandler(), [3, 8];
                                        case 8:
                                            return [2]
                                    }
                                })
                            })
                        }, t.onTimeout = function() {}, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this,
                            t = Object(l.d)("You can still <x:link-undo>undo this</x:link-undo> or <x:link-manage>manage</x:link-manage> your recommendation feedback", {
                                "x:link-undo": function(t) {
                                    return o.createElement(T.T, {
                                        onClick: e.onUndoClick,
                                        "data-test-selector": "hidden-content-undo"
                                    }, o.createElement("strong", null, t))
                                },
                                "x:link-manage": function(e) {
                                    return o.createElement(T.T, {
                                        to: "/settings/recommendations",
                                        targetBlank: !0
                                    }, e)
                                }
                            }, "HiddenContentNotice");
                        return this.state.showError && (t = Object(l.d)("Something went wrong, please <x:link-manage>click here</x:link-manage> to manage your recommendation feedback", {
                            "x:link-manage": function(e) {
                                return o.createElement(T.T, {
                                    to: "/settings/recommendations",
                                    targetBlank: !0,
                                    "data-test-selector": "hidden-content-undo-error"
                                }, e)
                            }
                        }, "HiddenContentNotice")), o.createElement(T.xb, {
                            className: "hidden-content-notice",
                            border: !0,
                            fullWidth: !0,
                            margin: {
                                bottom: 1
                            }
                        }, o.createElement(T.Va, {
                            padding: {
                                y: 4,
                                x: 2
                            },
                            display: T.W.Flex,
                            justifyContent: T.Ua.Center,
                            alignItems: T.f.Center,
                            flexDirection: T.Y.Column,
                            fullHeight: !0
                        }, this.props.name && o.createElement(T.Va, {
                            margin: {
                                bottom: 2
                            }
                        }, o.createElement(T.V, {
                            fontSize: this.props.size === se.Large ? T.Aa.Size3 : T.Aa.Size5
                        }, Object(l.d)("<x:content>Content</x:content> has been removed.", {
                            "x:content": function() {
                                return o.createElement(T.V, {
                                    bold: !0,
                                    italic: !0,
                                    type: T.Nb.Span,
                                    fontSize: e.props.size === se.Large ? T.Aa.Size2 : T.Aa.Size4
                                }, e.props.name)
                            }
                        }, "HiddenContentNotice"))), o.createElement(T.V, {
                            fontSize: this.props.size === se.Large ? T.Aa.Size4 : T.Aa.Size6
                        }, t)), o.createElement(T.gb, {
                            animationDuration: 8,
                            borderRadius: T.x.None,
                            animationDirection: T.hb.Up,
                            onAnimationEnd: this.onTimeout,
                            size: T.ib.ExtraSmall,
                            mask: !0
                        }))
                    }, t
                }(o.Component),
                ce = n("aCAx"),
                de = n("MdYN"),
                ue = function(e) {
                    return a.__assign({}, e, {
                        title: e.clipTitle,
                        viewCount: e.clipViewCount,
                        createdAt: e.clipCreatedAt
                    })
                },
                pe = n("GFmA"),
                me = n("oB8h"),
                he = n("3W+h"),
                ge = n("oJov"),
                fe = n("QV0j"),
                ve = n("A65o"),
                be = n("jtyt");

            function ke() {
                return {
                    text: Object(l.d)("I am not interested in the game or category", "FeedbackReason"),
                    contentType: be.a.Category,
                    feedbackType: be.b.NotInterested
                }
            }

            function ye() {
                return Object(l.d)("Other", "FeedbackReason")
            }

            function Ce() {
                return Object(l.d)("I am not interested in the channel", "FeedbackReason")
            }
            var Se = null;
            var we = null;
            var Te = null;
            var _e = n("j4u0"),
                Oe = Object(_e.a)(),
                Ee = ne.a.wrap(function() {
                    return n.e(135).then(n.bind(null, "EJJy"))
                }, "RecFeedbackButton", {
                    placeholder: null
                }),
                Ie = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            showContent: !0,
                            addFeedbackPromise: null
                        }, t.typeToPropMappings = {
                            Clip: t.getShelfCardClipProps.bind(t),
                            Game: t.getShelfCardGameProps.bind(t),
                            Stream: t.getShelfCardStreamProps.bind(t),
                            Video: t.getShelfCardVideoProps.bind(t)
                        }, t.renderShelfCard = function(e) {
                            if (t.isShelfGameBoxArtCardProps()) {
                                var n = t.getTagListProps(t.props.contentEdge),
                                    r = t.getTagSet(t.props.contentEdge, n);
                                return n && (n.callback = function(e) {
                                    t.trackClick(m.PageviewContent.Tag, r, e.id)
                                }), o.createElement(ge.a, a.__assign({
                                    "data-a-target": "card-" + t.props.itemPosition
                                }, e, {
                                    tagListProps: n
                                }))
                            }
                            return o.createElement(pe.a, a.__assign({}, e))
                        }, t.isShelfGameBoxArtCardProps = function() {
                            var e = t.props.contentEdge.node;
                            return !(!e || !e.boxArtURL)
                        }, t.getShelfCardProps = function(e, n) {
                            return e.node && t.typeToPropMappings[e.node.__typename] ? t.typeToPropMappings[e.node.__typename](e, n) : null
                        }, t.getTagListProps = function(e) {
                            var n = void 0;
                            if (!e.node || !t.props.isTagsExperiment) return n;
                            switch (e.node.__typename) {
                                case "Stream":
                                    n = {
                                        tags: e.node.tags || [],
                                        linkTo: {
                                            pathname: he.a.PopularTag,
                                            state: a.__assign({
                                                medium: m.PageviewMedium.TwitchHome
                                            }, t.props.shelfCardTrackingProps)
                                        }
                                    };
                                    break;
                                case "Game":
                                    n = {
                                        tags: e.node.gameTags || [],
                                        linkTo: {
                                            pathname: he.a.DirectoryTag,
                                            state: a.__assign({
                                                medium: m.PageviewMedium.TwitchHome
                                            }, t.props.shelfCardTrackingProps)
                                        }
                                    };
                                    break;
                                case "Video":
                                    n = {
                                        tags: e.node.contentTags || [],
                                        linkTo: {
                                            pathname: he.a.PopularTag,
                                            state: a.__assign({
                                                medium: m.PageviewMedium.TwitchHome
                                            }, t.props.shelfCardTrackingProps)
                                        }
                                    }
                            }
                            return n
                        }, t.getTagSet = function(e, n) {
                            return n || (n = t.getTagListProps(e)), n ? n.tags.map(function(e) {
                                return e.id
                            }) : []
                        }, t.getFeedbackProps = function(e) {
                            var n = e.shelfID,
                                r = e.channelID,
                                i = e.categoryID,
                                a = e.vodID,
                                o = e.feedbackReasons,
                                s = e.hideContent;
                            if (Oe() && t.props.firstPageLoaded) return {
                                component: Ee,
                                props: {
                                    shelfID: n,
                                    channelID: r,
                                    categoryID: i,
                                    vodID: a,
                                    feedbackReasons: o,
                                    hideContent: s
                                }
                            }
                        }, t.showContent = function() {
                            t.setState({
                                showContent: !0,
                                addFeedbackPromise: null
                            })
                        }, t.hideContent = function(e) {
                            t.setState({
                                showContent: !1,
                                addFeedbackPromise: e
                            })
                        }, t.trackGameClick = function(e, n, r, i) {
                            e.preventDefault(), e.stopPropagation();
                            var o = "title" === ("IMG" === e.target.tagName ? "boxArt" : "title") ? m.PageviewContent.GameName : m.PageviewContent.GameBoxart,
                                s = a.__assign({}, t.props.shelfCardTrackingProps, {
                                    tag_set: i,
                                    tag_filter_set: [],
                                    tag_streamer_set: []
                                }),
                                c = {
                                    pathname: Object(re.c)(n.name),
                                    state: a.__assign({
                                        content: o,
                                        content_index: r,
                                        medium: m.PageviewMedium.TwitchHome
                                    }, s)
                                };
                            t.trackClick(o, i), l.o.history.push(c.pathname, c.state)
                        }, t.trackClick = function(e, n, r) {
                            return t.props.trackClick(e, n, r)
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        var e = this,
                            t = this.getTagSet(this.props.contentEdge);
                        this.props.impressionListener.registerImpressionCallback(function() {
                            return e.props.trackImpression(t)
                        })
                    }, t.prototype.render = function() {
                        var e = this.getShelfCardProps(this.props.contentEdge, this.props.itemPosition);
                        return e && this.props.contentEdge.node ? this.state.showContent ? o.createElement(T.Va, {
                            key: this.props.contentEdge.node.id,
                            padding: {
                                bottom: 2
                            },
                            "data-test-selector": "shelf-card-selector"
                        }, this.renderShelfCard(e)) : o.createElement(le, {
                            name: e.title,
                            undoSuccessHandler: this.showContent,
                            addFeedbackPromise: this.state.addFeedbackPromise,
                            size: se.Small
                        }) : null
                    }, t.prototype.getShelfCardStreamProps = function(e) {
                        var t = this,
                            n = e.node,
                            r = this.getTagListProps(e),
                            i = this.getTagSet(e, r),
                            o = a.__assign({}, this.props.shelfCardTrackingProps, {
                                tag_set: i,
                                tag_filter_set: [],
                                tag_streamer_set: []
                            }),
                            s = this.props.shelf.title.key !== oe.a.RecommendedBecauseYouWatchX ? {
                                gameTitle: n.game && n.game.displayName || void 0,
                                gameTitleLinkTo: {
                                    pathname: n.game ? Object(re.c)(n.game.name) : void 0,
                                    state: o
                                },
                                onGameTitleClick: this.trackClick.bind(this, m.PageviewContent.GameMetadata, i)
                            } : {};
                        return a.__assign({
                            context: pe.b.MixedGameAndChannelList,
                            title: n.broadcaster && n.broadcaster.broadcastSettings && n.broadcaster.broadcastSettings.title,
                            linkTo: n.broadcaster && n.broadcaster.login ? {
                                pathname: n.broadcaster.login,
                                state: o
                            } : void 0,
                            onClick: this.trackClick.bind(this, m.PageviewContent.VideoThumbnail, i),
                            onVideoTitleClick: this.trackClick.bind(this, m.PageviewContent.VideoTitle, i),
                            onChannelImageClick: this.trackClick.bind(this, m.PageviewContent.UserThumbnail, i),
                            thumbnailImageProps: n.previewImageURL && n.broadcaster && n.broadcaster.broadcastSettings && n.broadcaster.broadcastSettings.title ? {
                                src: n.previewImageURL,
                                alt: n.broadcaster.broadcastSettings.title
                            } : void 0,
                            channelImageProps: n.broadcaster && n.broadcaster.profileImageURL && n.broadcaster.displayName ? {
                                src: n.broadcaster && n.broadcaster.profileImageURL,
                                alt: n.broadcaster && n.broadcaster.displayName
                            } : void 0,
                            channelDisplayName: n.broadcaster && n.broadcaster.displayName || "",
                            channelLogin: n.broadcaster && n.broadcaster.login,
                            channelLinkTo: n.broadcaster && n.broadcaster.login ? {
                                pathname: "/" + n.broadcaster.login + "/videos/all",
                                state: o
                            } : void 0,
                            onChannelLoginClick: this.trackClick.bind(this, m.PageviewContent.ChannelMetadata, i),
                            streamType: Object(fe.a)(n.type) || me.a.Live,
                            currentViewerCount: n.viewersCount || 0,
                            trackingContext: {
                                medium: m.PageviewMedium.TwitchHome
                            },
                            contextualCardActionProps: this.getFeedbackProps({
                                channelID: n.id,
                                categoryID: n.game && n.game.id,
                                feedbackReasons: (null === we && (we = [{
                                    text: Ce(),
                                    contentType: be.a.Channel,
                                    feedbackType: be.b.NotInterested
                                }, ke(), {
                                    text: ye(),
                                    contentType: be.a.Channel,
                                    feedbackType: be.b.Other
                                }]), we),
                                hideContent: this.hideContent
                            })
                        }, r && {
                            tagListProps: a.__assign({}, r, {
                                callback: function(e) {
                                    r.callback && r.callback(e), t.trackClick(m.PageviewContent.Tag, i, e.id)
                                }
                            })
                        }, s)
                    }, t.prototype.getShelfCardClipProps = function(e, t) {
                        var n = this,
                            r = e.node,
                            i = this.getTagListProps(e),
                            o = this.getTagSet(e, i),
                            s = a.__assign({}, this.props.shelfCardTrackingProps, {
                                tag_set: o,
                                tag_filter_set: [],
                                tag_streamer_set: []
                            });
                        return a.__assign({
                            context: pe.b.MixedGameAndChannelList,
                            title: r.clipTitle,
                            linkTo: r.embedURL,
                            onClick: function(e) {
                                if (n.trackClick(m.PageviewContent.VideoThumbnail, o), e.preventDefault(), n.props.shelf.content && n.props.shelf.content.edges) {
                                    var i = n.props.shelf.content.edges.map(function(e) {
                                        return e.node
                                    });
                                    n.props.showClipsModal(r, t, n.props.shelf.content.edges, function() {
                                        return i
                                    })
                                }
                            },
                            onVideoTitleClick: function(e) {
                                if (n.trackClick(m.PageviewContent.VideoTitle, o), e.preventDefault(), n.props.shelf.content && n.props.shelf.content.edges) {
                                    var i = n.props.shelf.content.edges.map(function(e) {
                                        return e.node
                                    });
                                    n.props.showClipsModal(r, t, n.props.shelf.content.edges, function() {
                                        return i
                                    })
                                }
                            },
                            thumbnailImageProps: {
                                src: r.thumbnailURL,
                                alt: r.clipTitle
                            },
                            channelImageProps: r.broadcaster && r.broadcaster.profileImageURL && r.broadcaster.displayName ? {
                                src: r.broadcaster && r.broadcaster.profileImageURL,
                                alt: r.broadcaster && r.broadcaster.displayName
                            } : void 0,
                            channelDisplayName: r.broadcaster && r.broadcaster.displayName || "",
                            channelLogin: r.broadcaster && r.broadcaster.login,
                            channelLinkTo: r.broadcaster && r.broadcaster.login ? {
                                pathname: "/" + r.broadcaster.login + "/videos/all",
                                state: s
                            } : void 0,
                            onChannelLoginClick: this.trackClick.bind(this, m.PageviewContent.ChannelMetadata, o),
                            datePublished: r.clipCreatedAt,
                            viewCount: r.clipViewCount,
                            durationInSeconds: r.durationSeconds,
                            clipCreatedByChannelLogin: r.curator && r.curator.login,
                            gameTitle: r.game && r.game.displayName || void 0,
                            gameTitleLinkTo: {
                                pathname: r.game && Object(re.c)(r.game.name) || void 0,
                                state: s
                            },
                            onGameTitleClick: this.trackClick.bind(this, m.PageviewContent.GameMetadata, o),
                            trackingContext: {
                                medium: m.PageviewMedium.TwitchHome
                            }
                        }, i && {
                            tagListProps: a.__assign({}, i, {
                                callback: function(e) {
                                    i.callback && i.callback(e), n.trackClick(m.PageviewContent.Tag, o, e.id)
                                }
                            })
                        })
                    }, t.prototype.getShelfCardVideoProps = function(e) {
                        var t = this,
                            n = e.node,
                            r = this.getTagListProps(e),
                            i = this.getTagSet(e, r),
                            o = a.__assign({}, this.props.shelfCardTrackingProps, {
                                tag_set: i,
                                tag_filter_set: [],
                                tag_streamer_set: []
                            });
                        return a.__assign({
                            context: pe.b.MixedGameAndChannelList,
                            title: n.title,
                            linkTo: {
                                pathname: "/videos/" + n.id,
                                state: this.props.shelfCardTrackingProps
                            },
                            onClick: this.trackClick.bind(this, m.PageviewContent.VideoThumbnail, i),
                            onVideoTitleClick: this.trackClick.bind(this, m.PageviewContent.VideoTitle, i),
                            onChannelImageClick: this.trackClick.bind(this, m.PageviewContent.UserThumbnail, i),
                            thumbnailImageProps: n.title && n.previewThumbnailURL && {
                                src: n.previewThumbnailURL,
                                alt: n.title
                            },
                            channelImageProps: n.owner && n.owner.profileImageURL && n.owner.profileImageURL && {
                                src: n.owner && n.owner.profileImageURL,
                                alt: n.owner && n.owner.displayName
                            },
                            channelDisplayName: n.owner && n.owner.displayName || "",
                            channelLogin: n.owner && n.owner.login,
                            channelLinkTo: n.owner && n.owner.login ? {
                                pathname: "/" + n.owner.login + "/videos/all",
                                state: o
                            } : void 0,
                            onChannelLoginClick: this.trackClick.bind(this, m.PageviewContent.ChannelMetadata, i),
                            datePublished: n.publishedAt,
                            viewCount: n.viewCount,
                            durationInSeconds: n.lengthSeconds,
                            watchedProgressPercent: 0,
                            gameTitle: n.game && n.game.displayName,
                            gameTitleLinkTo: n.game ? {
                                pathname: Object(re.c)(n.game.name),
                                state: o
                            } : void 0,
                            onGameTitleClick: this.trackClick.bind(this, m.PageviewContent.GameMetadata, i),
                            trackingContext: {
                                medium: m.PageviewMedium.TwitchHome
                            },
                            contextualCardActionProps: this.getFeedbackProps({
                                vodID: n.id,
                                categoryID: n.game && n.game.id,
                                channelID: n.owner && n.owner.id,
                                feedbackReasons: (null === Te && (Te = [{
                                    text: Object(l.d)("I am not interested in the video", "FeedbackReason"),
                                    contentType: be.a.Vod,
                                    feedbackType: be.b.NotInterested
                                }, {
                                    text: Ce(),
                                    contentType: be.a.Channel,
                                    feedbackType: be.b.NotInterested
                                }, ke(), {
                                    text: Object(l.d)("I have already watched this video", "FeedbackReason"),
                                    contentType: be.a.Vod,
                                    feedbackType: be.b.AlreadyWatched
                                }, {
                                    text: ye(),
                                    contentType: be.a.Vod,
                                    feedbackType: be.b.Other
                                }]), Te),
                                hideContent: this.hideContent
                            })
                        }, r && {
                            tagListProps: a.__assign({}, r, {
                                callback: function(e) {
                                    r.callback && r.callback(e), t.trackClick(m.PageviewContent.Tag, i, e.id)
                                }
                            })
                        })
                    }, t.prototype.getShelfCardGameProps = function(e, t) {
                        var n = this,
                            r = e.node,
                            i = this.getTagSet(e);
                        return {
                            onClick: function(e) {
                                return n.trackGameClick(e, r, t, i)
                            },
                            title: r.displayName,
                            alt: Object(l.d)("{displayName} cover image", {
                                displayName: r.displayName
                            }, "ShelfComponent"),
                            src: r.boxArtURL || "",
                            linkTo: Object(re.c)(r.name),
                            info: Object(l.d)("{viewerCount, plural, one {# viewer} other {# viewers}}", {
                                viewerCount: r.viewersCount || 0
                            }, "ShelfComponent")
                        }
                    }, t
                }(o.Component),
                Ne = Object(s.compose)(Object(w.c)("ShelfCardComponent", {
                    autoReportInteractive: !0
                }), Object(ie.a)("ShelfCardComponent", {
                    percentage: 75
                }), Object(ve.a)())(Ie);
            var Re = Object(f.connect)(null, function(e) {
                    return Object(b.bindActionCreators)({
                        showClipsModal: function(e, t, n) {
                            return Object(ce.d)(de.a, {
                                getClips: function() {
                                    return n.map(function(e) {
                                        return ue(e.node)
                                    })
                                },
                                clip: ue(e),
                                clipIndex: t,
                                pageType: "TopClipsGame"
                            })
                        }
                    }, e)
                })(Ne),
                De = Object(_e.a)(),
                xe = ne.a.wrap(function() {
                    return n.e(135).then(n.bind(null, "EJJy"))
                }, "RecFeedbackButton", {
                    placeholder: null
                }),
                Me = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            showContent: !0,
                            addFeedbackPromise: null
                        }, t.isTagsExperiment = Object(ae.b)(), t.getEdges = function(e) {
                            if (e.content && e.content.edges) {
                                var n = t.props.itemsToDisplay;
                                return e.title.key.includes("TopGames") && (n = t.props.itemsToDisplay * We), e.content.edges.filter(function(e) {
                                    return e && e.node && e.node.id
                                }).slice(0, n)
                            }
                            return []
                        }, t.linkToBrowse = function(e) {
                            var n = {
                                pathname: "/directory",
                                state: a.__assign({
                                    content: m.PageviewContent.HeaderGameName,
                                    medium: m.PageviewMedium.TwitchHome
                                }, t.props.shelfTrackingProps)
                            };
                            return o.createElement(T.T, {
                                onClick: t.props.trackTitleClick,
                                to: n
                            }, e)
                        }, t.linkToDirectory = function(e) {
                            var n = {
                                pathname: Object(re.c)(e),
                                state: a.__assign({
                                    content: m.PageviewContent.HeaderGameName,
                                    medium: m.PageviewMedium.TwitchHome
                                }, t.props.shelfTrackingProps)
                            };
                            return o.createElement(T.T, {
                                onClick: t.props.trackTitleClick,
                                to: n
                            }, e)
                        }, t.trackTitleImpression = function() {
                            return t.props.trackTitleImpression(t.props.shelf)
                        }, t.shouldRenderShelf = function(e) {
                            var n;
                            if (!t.getShelfTitle(e.title)) return !1;
                            if (e.content && e.content.edges && e.content.edges[0] && e.content.edges[0].node && (n = e.content.edges && e.content.edges[0].node), !(n && n.id && n.__typename)) return !1;
                            if ("Stream" === n.__typename) {
                                if (!(n = n).previewImageURL || !n.broadcaster || !n.broadcaster.login) return !1
                            } else if ("Game" === n.__typename) {
                                if (!(n = n).name) return !1
                            } else if ("Clip" === n.__typename) {
                                if (!(n = n).thumbnailURL || !n.url) return !1
                            } else if ("Video" === n.__typename && !(n = n).previewThumbnailURL) return !1;
                            return !0
                        }, t.showContent = function() {
                            t.setState({
                                showContent: !0,
                                addFeedbackPromise: null
                            })
                        }, t.hideContent = function(e) {
                            t.setState({
                                showContent: !1,
                                addFeedbackPromise: e
                            })
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        if (this.shouldRenderShelf(this.props.shelf)) {
                            var e = this.getEdges(this.props.shelf);
                            this.props.latencyTracking.reportInteractive(e.length), this.props.impressionListener.registerImpressionCallback(this.trackTitleImpression)
                        } else this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this,
                            t = this.props,
                            n = t.position,
                            r = t.shelf,
                            i = this.getShelfTitle(r.title);
                        if (!this.shouldRenderShelf(r)) return null;
                        if (!this.state.showContent && null !== i) return o.createElement(le, {
                            name: i,
                            undoSuccessHandler: this.showContent,
                            addFeedbackPromise: this.state.addFeedbackPromise,
                            size: se.Large
                        });
                        var a = 0,
                            s = T.Ub.Large,
                            l = [];
                        if (r.content && r.content.edges) {
                            r.title.key.includes("TopGames") && (s = T.Ub.ExtraSmall);
                            var c = this.getEdges(r),
                                d = ee(r, function(e) {
                                    return e.content.edges || []
                                }, function() {
                                    return c
                                });
                            c.forEach(function(t, r) {
                                t && t.node && l.push(o.createElement(Re, {
                                    key: t.node.id,
                                    shelf: d,
                                    contentEdge: t,
                                    isTagsExperiment: e.isTagsExperiment,
                                    itemPosition: r,
                                    rowPosition: n,
                                    firstPageLoaded: e.props.firstPageLoaded
                                }))
                            }), this.props.itemsToDisplay > r.content.edges.length && (a = this.props.itemsToDisplay - r.content.edges.length)
                        }
                        return o.createElement(T.Va, {
                            key: r.id
                        }, o.createElement(T.Va, {
                            padding: {
                                bottom: 1
                            }
                        }, o.createElement(T.V, {
                            type: T.Nb.H4,
                            color: T.O.Base
                        }, i, this.props.firstPageLoaded && r.title.context && De() && o.createElement(T.Va, {
                            display: T.W.InlineBlock,
                            margin: {
                                left: .5
                            }
                        }, o.createElement(xe, {
                            shelfID: r.id,
                            categoryID: r.title.context.id,
                            feedbackReasons: (null === Se && (Se = [ke(), {
                                text: ye(),
                                contentType: be.a.Shelf,
                                feedbackType: be.b.Other
                            }]), Se),
                            hideContent: this.hideContent
                        })))), o.createElement(T.Tb, {
                            childWidth: s,
                            gutterSize: T.Vb.Small,
                            noWrap: !0,
                            placeholderItems: a
                        }, l))
                    }, t.prototype.getShelfTitle = function(e) {
                        var t, n = this,
                            r = ((t = {})[oe.a.TopLiveChannels] = function() {
                                return Object(l.d)("Popular <x:bold>live channels</x:bold>", {
                                    "x:bold": function(e) {
                                        return o.createElement("strong", null, e)
                                    }
                                }, "ShelfComponent")
                            }, t[oe.a.TopGames] = function() {
                                return n.isTagsExperiment ? Object(l.d)("Popular <x:bold>categories</x:bold>", {
                                    "x:bold": function(e) {
                                        return o.createElement("strong", null, n.linkToBrowse(e))
                                    }
                                }, "ShelfComponent") : Object(l.d)("Popular <x:bold>games</x:bold>", {
                                    "x:bold": function(e) {
                                        return o.createElement("strong", null, n.linkToBrowse(e))
                                    }
                                }, "ShelfComponent")
                            }, t[oe.a.PopularVideos] = function() {
                                return Object(l.d)("Popular <x:bold>videos</x:bold>", {
                                    "x:bold": function(e) {
                                        return o.createElement("strong", null, e)
                                    }
                                }, "ShelfComponent")
                            }, t[oe.a.PopularClips] = function() {
                                return Object(l.d)("Popular <x:bold>clips</x:bold>", {
                                    "x:bold": function(e) {
                                        return o.createElement("strong", null, e)
                                    }
                                }, "ShelfComponent")
                            }, t[oe.a.TopChannelsPlayingGame] = function() {
                                return Object(l.d)("Popular <x:bold1>live channels</x:bold1> in <x:bold2>{game}</x:bold2>", {
                                    game: e.context ? e.context.name : "",
                                    "x:bold1": function(e) {
                                        return o.createElement("strong", null, e)
                                    },
                                    "x:bold2": function(e) {
                                        return o.createElement("strong", null, n.linkToDirectory(e))
                                    }
                                }, "ShelfComponent")
                            }, t[oe.a.TopLiveChannelsYouMayLike] = function() {
                                return Object(l.d)("<x:bold>Live channels</x:bold> you may like", {
                                    "x:bold": function(e) {
                                        return o.createElement("strong", null, e)
                                    }
                                }, "ShelfComponent")
                            }, t[oe.a.TopGamesForYou] = function() {
                                return n.isTagsExperiment ? Object(l.d)("<x:bold>Categories</x:bold> you may like", {
                                    "x:bold": function(e) {
                                        return o.createElement("strong", null, n.linkToBrowse(e))
                                    }
                                }, "ShelfComponent") : Object(l.d)("<x:bold>Games</x:bold> you may like", {
                                    "x:bold": function(e) {
                                        return o.createElement("strong", null, n.linkToBrowse(e))
                                    }
                                }, "ShelfComponent")
                            }, t[oe.a.RecommendedBecauseYouWatchX] = function() {
                                return Object(l.d)("<x:bold>{game}</x:bold> streamers you may like", {
                                    game: e.context ? e.context.name : "",
                                    "x:bold": function(e) {
                                        return o.createElement("strong", null, n.linkToDirectory(e))
                                    }
                                }, "ShelfComponent")
                            }, t[oe.a.RecommendedBecauseYouFollowX] = function() {
                                return Object(l.d)("Because you follow <x:bold>{name}</x:bold>", {
                                    name: e.context ? e.context.name : "",
                                    "x:bold": function(e) {
                                        return o.createElement("strong", null, n.linkToDirectory(e))
                                    }
                                }, "ShelfComponent")
                            }, t[oe.a.GreatNewClipsYouMayHaveMissed] = function() {
                                return Object(l.d)("<x:bold>Clips</x:bold> you may like", {
                                    "x:bold": function(e) {
                                        return o.createElement("strong", null, e)
                                    }
                                }, "ShelfComponent")
                            }, t[oe.a.TopNewVideosYouMayHaveMissed] = function() {
                                return Object(l.d)("<x:bold>Videos</x:bold> you may like", {
                                    "x:bold": function(e) {
                                        return o.createElement("strong", null, e)
                                    }
                                }, "ShelfComponent")
                            }, t);
                        return r[e.key] ? r[e.key]() : null
                    }, t
                }(o.Component),
                je = Object(s.compose)(Object(ie.a)("ShelfComponent", {
                    percentage: 15
                }), Object(w.c)("ShelfComponent"), Object(K.j)())(Me);
            var Le, Pe = Object(f.connect)(function(e) {
                    return {
                        firstPageLoaded: e.session.firstPageLoaded
                    }
                })(je),
                Ve = n("HfKK");
            ! function(e) {
                e.all = "all", e.ps4 = "ps4", e.xbox = "xbox"
            }(Le || (Le = {}));
            var Fe = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            requestID: t.props.initialRequestID
                        }, t.trackRecRequest = function(e) {
                            var t = {
                                endpoint: K.d.Live,
                                requestID: e,
                                section: K.c.TwitchHome
                            };
                            Object(K.i)(t)
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.trackRecRequest(this.state.requestID)
                    }, t.prototype.componentDidUpdate = function(e) {
                        if (!this.props.data.loading && this.props.data.shelves && this.props.data.shelves.edges && (this.props.latencyTracking.reportInteractive(this.props.data.shelves.edges.length), e.itemsToDisplay !== this.props.itemsToDisplay)) {
                            for (var t = [], n = 0, r = this.props.data.shelves.edges; n < r.length; n++) {
                                var i = r[n];
                                i && i.node && i.node.content && i.node.content.edges && t.push(i.node.content.edges.length)
                            }
                            if (this.props.itemsToDisplay * We > Math.min.apply(Math, t)) {
                                var a = Object(K.e)();
                                this.props.loadMore(a), this.trackRecRequest(a), this.setState({
                                    requestID: a
                                })
                            }
                        }
                    }, t.prototype.render = function() {
                        var e = this;
                        if (!this.props.data.shelves || !this.props.data.shelves.edges) return this.props.data.loading ? this.renderLoading() : this.props.data.error ? this.renderError() : null;
                        var t = this.props.data.shelves.edges.map(function(t, n) {
                            return o.createElement(Pe, {
                                key: t.node.id,
                                shelf: t.node,
                                position: n,
                                itemsToDisplay: e.props.itemsToDisplay,
                                requestID: e.state.requestID
                            })
                        });
                        return t.splice(4, 0, this.renderAds(g.c.newFront.after4thShelf, g.b.newFront.after4thShelf, "frontpage-bottom-ad-slot")), t.splice(2, 0, this.renderAds(g.c.newFront.after2ndShelf, g.b.newFront.after2ndShelf, "frontpage-mid-ad-slot")), o.createElement(o.Fragment, null, t)
                    }, t.prototype.renderLoading = function() {
                        for (var e = this.props.itemsToDisplay, t = [], n = [], r = 0; r < e; r++) n.push(o.createElement(J.VideoPreviewCardPlaceholder, {
                            key: "frontpage-thumbnails-placeholder-" + r
                        }));
                        for (r = 0; r < 4; r++) t.push(o.createElement(T.Va, {
                            margin: {
                                bottom: 2
                            },
                            key: "frontpage-shelves-placeholder-" + r
                        }, o.createElement(T.Va, {
                            margin: {
                                bottom: 1
                            }
                        }, o.createElement(T.cb, {
                            height: 25,
                            width: 150
                        })), o.createElement(T.Tb, {
                            gutterSize: T.Vb.Small,
                            childWidth: T.Ub.Medium,
                            placeholderItems: 0
                        }, n)));
                        return o.createElement(o.Fragment, null, t)
                    }, t.prototype.renderError = function() {
                        var e = Object(l.d)("Error loading data.", "NewFrontPageComponent");
                        return o.createElement(Z.a, {
                            inline: !0,
                            message: e
                        })
                    }, t.prototype.renderAds = function(e, t, n) {
                        return o.createElement(h.a, {
                            adSize: e,
                            adUnit: g.d.frontpage,
                            autoEnable: !1,
                            injectStyles: {
                                display: "flex",
                                justifyContent: "center",
                                marginBottom: "2rem"
                            },
                            key: t,
                            slotID: t,
                            targeting: {
                                pagetype: g.a.frontpage
                            },
                            "data-a-target": n
                        })
                    }, t
                }(o.Component),
                Ue = Object(b.compose)(Object(c.a)(Ve, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            errorPolicy: "all",
                            variables: {
                                requestID: e.initialRequestID,
                                platform: Le.all,
                                itemsPerRow: e.initialItemsToFetch
                            }
                        }
                    },
                    props: function(e) {
                        return a.__assign({}, e, {
                            loadMore: function(t) {
                                return e.data.fetchMore({
                                    query: Ve,
                                    variables: {
                                        itemsPerRow: e.ownProps.itemsToDisplay * We,
                                        platform: Le.all,
                                        requestID: t
                                    },
                                    updateQuery: function(e, t) {
                                        return function(e, t) {
                                            return ee(e, function(e) {
                                                return e && e.shelves && e.shelves.edges
                                            }, function(e) {
                                                return e && t && t.shelves && t.shelves.edges ? (t.shelves.edges.forEach(function(t) {
                                                    for (var n = !1, r = 0; r < e.length; r++)
                                                        if (e[r].node.id === t.node.id) {
                                                            n = !0, e[r] = ee(e[r], function(e) {
                                                                return e.node.content.edges
                                                            }, function(e) {
                                                                return e && t && t.node && t.node.content && t.node.content.edges ? Object(te.c)(e, t.node.content.edges) : null
                                                            });
                                                            break
                                                        }
                                                    n || e.push(t)
                                                }), e) : null
                                            })
                                        }(e, t.fetchMoreResult)
                                    }
                                })
                            }
                        })
                    }
                }), Object(w.c)("RecommendedContent"))(Fe),
                Ae = 2,
                We = 2,
                Be = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            initialItemsToFetch: 0,
                            itemsToDisplay: 0
                        }, t.onResize = function(e) {
                            var n = Object(X.a)(e, 300, 1),
                                r = Math.max(Ae, n);
                            t.state.initialRequestID ? r !== t.state.itemsToDisplay && t.setState({
                                itemsToDisplay: r
                            }) : t.setState({
                                initialItemsToFetch: r * We,
                                initialRequestID: Object(K.e)(),
                                itemsToDisplay: r
                            })
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.state.initialItemsToFetch > 0 && this.state.initialRequestID ? o.createElement(Ue, {
                            itemsToDisplay: this.state.itemsToDisplay,
                            initialItemsToFetch: this.state.initialItemsToFetch,
                            initialRequestID: this.state.initialRequestID
                        }) : null;
                        return o.createElement(o.Fragment, null, e, o.createElement($.a, {
                            onResize: this.onResize
                        }))
                    }, t
                }(o.Component),
                Ge = n("kDHn"),
                ze = (n("mhEZ"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            numSlotsAdded: 0
                        }, t.onSlotAdded = function() {
                            t.setState(function(e) {
                                var t = e.numSlotsAdded + 1;
                                return t === Object.keys(g.b.newFront).length && p.a.display(g.b.newFront.top), {
                                    numSlotsAdded: t
                                }
                            })
                        }, t.shouldShowOnboarding = function() {
                            return t.followedGamesForUserHasLoaded() && z(t.props.data.currentUser.followedGames.nodes.length, t.props.data.currentUser.createdAt)
                        }, t.followedGamesForUserHasLoaded = function() {
                            return t.props.data && !t.props.data.loading && !t.props.data.error && t.props.data.currentUser && t.props.data.currentUser.followedGames
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        l.o.setPageTitle(), g.g.addListener(g.e, this.onSlotAdded), this.shouldShowOnboarding() && !W() && H(B.b.NewSignup)
                    }, t.prototype.componentWillUnmount = function() {
                        g.g.removeListener(g.e, this.onSlotAdded)
                    }, t.prototype.componentDidUpdate = function(e) {
                        e.data.loading && this.shouldShowOnboarding() && !W() && H(B.b.NewSignup)
                    }, t.prototype.render = function() {
                        return o.createElement(T.Va, {
                            fullHeight: !0
                        }, o.createElement(q.b, {
                            suppressScrollX: !0,
                            disableDebounce: !0
                        }), o.createElement(Y.a, null, o.createElement(Q.a, null)), o.createElement(T.xb, {
                            className: "front-page-carousel",
                            padding: 3
                        }, o.createElement(h.a, {
                            adSize: g.c.newFront.top,
                            adUnit: g.d.frontpage,
                            autoEnable: !1,
                            injectStyles: {
                                display: "flex",
                                justifyContent: "center",
                                marginBottom: "3rem"
                            },
                            slotID: g.b.newFront.top,
                            targeting: {
                                pagetype: g.a.frontpage
                            },
                            "data-a-target": "frontpage-top-ad-slot"
                        }), o.createElement(P, null)), o.createElement(T.Va, {
                            margin: 3
                        }, o.createElement(Be, null)))
                    }, t
                }(o.Component)),
                He = Object(s.compose)(Object(w.c)("FrontPage", {
                    autoReportInteractive: !0,
                    destination: u.a.Index
                }), Object(d.a)({
                    location: m.PageviewLocation.FrontPage
                }), Object(c.a)(Ge, {
                    options: {
                        variables: {
                            limit: 18
                        }
                    }
                }))(ze);
            n.d(t, "FrontPage", function() {
                return He
            })
        },
        "0hI/": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ReportUserModal_ReportUserData"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "targetUserID"
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
                                value: "targetUser"
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
                                        value: "targetUserID"
                                    }
                                }
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "lookupType"
                                },
                                value: {
                                    kind: "EnumValue",
                                    value: "ALL"
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
                                        value: "directories"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
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
                                                        value: "name"
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
                                                        value: "directoryType"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }]
                                            }
                                        }]
                                    }
                                }]
                            }
                        }, {
                            kind: "Field",
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
                                        value: "blockedUsers"
                                    },
                                    arguments: [],
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
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 236
                }
            };
            n.loc.source = {
                body: "query ReportUserModal_ReportUserData($targetUserID: ID!) {\ntargetUser: user(id: $targetUserID lookupType: ALL) {\nid\nlogin\ndisplayName\ndirectories {\nnodes {\nid\nname\ndisplayName\ndirectoryType\n}\n}\n}\ncurrentUser {\nid\nblockedUsers {\nid\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "0ubH": function(e, t, n) {
            var r = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "game"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Game"
                        }
                    },
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
                                value: "name"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "viewersCount"
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
                                    value: "188"
                                }
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "height"
                                },
                                value: {
                                    kind: "IntValue",
                                    value: "250"
                                }
                            }],
                            directives: []
                        }, {
                            kind: "Field",
                            alias: {
                                kind: "Name",
                                value: "gameTags"
                            },
                            name: {
                                kind: "Name",
                                value: "tags"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "tagType"
                                },
                                value: {
                                    kind: "EnumValue",
                                    value: "CONTENT"
                                }
                            }],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "FragmentSpread",
                                    name: {
                                        kind: "Name",
                                        value: "tagFragment"
                                    },
                                    directives: []
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
            r.loc.source = {
                body: '#import "twilight/features/tags/models/tag-fragment.gql"\nfragment game on Game {\nid\nname\nviewersCount\ndisplayName\nboxArtURL(width: 188 height: 250)\ngameTags: tags(tagType: CONTENT) {\n...tagFragment\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var i = {};
            r.definitions = r.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !i[t] && (i[t] = !0, !0)
                })
            }(n("iiOx").definitions)), e.exports = r
        },
        "1mcJ": function(e, t, n) {},
        "3sMy": function(e, t, n) {
            "use strict";
            var r;
            n.d(t, "a", function() {
                    return r
                }),
                function(e) {
                    e.GreatNewClipsYouMayHaveMissed = "GreatNewClipsYouMayHaveMissed", e.PopularClips = "PopularClips", e.PopularVideos = "PopularVideos", e.RecommendedBecauseYouWatchX = "RecommendedBecauseYouWatchX", e.RecommendedBecauseYouFollowX = "RecommendedBecauseYouFollowX", e.TopChannelsPlayingGame = "TopChannelsPlayingGame", e.TopGames = "TopGames", e.TopGamesForYou = "TopGamesForYou", e.TopLiveChannels = "TopLiveChannels", e.TopLiveChannelsYouMayLike = "TopLiveChannelsYouMayLike", e.TopNewVideosYouMayHaveMissed = "TopNewVideosYouMayHaveMissed"
                }(r || (r = {}))
        },
        "44NB": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return l
            }), n.d(t, "b", function() {
                return c
            }), n.d(t, "d", function() {
                return d
            }), n.d(t, "e", function() {
                return u
            }), n.d(t, "c", function() {
                return p
            });
            var r = n("mrSG"),
                i = n("/7QA"),
                a = n("2xye"),
                o = "google_calendar",
                s = "backfill";

            function l(e) {
                var t = {};
                e.forEach(function(e, n) {
                    t["carousel_slot_" + n + "_channel"] = e.broadcaster.login, t["carousel_slot_" + n + "_priority"] = e.priorityLevel, t["carousel_slot_" + n + "_game"] = e.content.gameName, t["carousel_slot_" + n + "_ccu"] = e.content.viewersCount, t["carousel_slot_" + n + "_type"] = e.content.subType, e.isScheduled ? t["carousel_slot_" + n + "_source"] = o : t["carousel_slot_" + n + "_source"] = s
                }), i.n.track(a.SpadeEventType.FrontPageCarouselDisplay, t)
            }

            function c(e) {
                i.n.track(a.SpadeEventType.FrontPageCarouselClick, e)
            }

            function d(e, t) {
                var n = r.__assign({
                    clicked_element: t
                }, e);
                i.n.track(a.SpadeEventType.FrontPageCarouselPromotionCardClick, n)
            }

            function u(e) {
                i.n.track(a.SpadeEventType.FrontPageCarouselPromotionCardView, e)
            }

            function p(e) {
                i.n.track(a.SpadeEventType.FrontPageCarouselNavButtonClick, {
                    direction: e
                })
            }
        },
        "4L7N": function(e, t, n) {
            "use strict";
            var r = n("/MKj"),
                i = n("kRBY"),
                a = n("mrSG"),
                o = n("q1tI"),
                s = n("VwyG"),
                l = n("X7Ac"),
                c = n("yR8l"),
                d = n("MLDe"),
                u = n("v8tf"),
                p = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this,
                            t = this.props.data.clip,
                            n = "";
                        if (t && t.videoQualities) {
                            var r = t.videoQualities[0];
                            n = r.sourceURL
                        }
                        var i = this.props,
                            a = i.broadcasterId,
                            c = i.broadcasterLogin,
                            u = i.forceShow;
                        return o.createElement(s.a, {
                            ownerLogin: this.props.broadcasterLogin,
                            permittedRoles: {
                                editor: !0,
                                staff: !0
                            }
                        }, function(r) {
                            var i = r.permitted;
                            return n && (i || u) ? o.createElement(l.a, {
                                type: l.b.Download,
                                text: e.props.slug,
                                url: n,
                                onShareClick: t ? Object(d.c)(t.id, t.game && t.game.name, a, c, e.props.pageType) : void 0
                            }) : null
                        })
                    }, t
                }(o.Component),
                m = Object(c.a)(u)(p);
            var h = Object(r.connect)(function(e) {
                var t = Object(i.e)(e);
                return {
                    userLogin: t ? t.login : ""
                }
            })(m);
            n.d(t, "a", function() {
                return h
            })
        },
        "4qQ0": function(e, t, n) {
            "use strict";
            var r, i;
            n.d(t, "a", function() {
                    return r
                }), n.d(t, "b", function() {
                    return i
                }),
                function(e) {
                    e.ChannelFeedComment = "CHANNEL_FEED_COMMENT_REPORT", e.ChannelFeedPost = "CHANNEL_FEED_POST_REPORT", e.Chat = "CHAT_REPORT", e.Clip = "CLIP_REPORT", e.Collection = "COLLECTION_REPORT", e.Community = "COMMUNITY_REPORT", e.Event = "EVENT_REPORT", e.Extension = "EXTENSION_REPORT", e.LiveUp = "LIVE_UP_REPORT", e.Raid = "RAID_REPORT", e.Room = "ROOM_REPORT", e.StreamUp = "STREAM_UP_REPORT", e.User = "USER_REPORT", e.VideoChatMessage = "VOD_COMMENT_REPORT", e.Vod = "VOD_REPORT", e.Whisper = "WHISPER_REPORT"
                }(r || (r = {})),
                function(e) {
                    e.BitsViolation = "bits_violation", e.ChatBanEvasion = "chat_ban_evasion", e.Cheating = "cheating", e.Gore = "gore", e.Harassment = "harassment", e.Harm = "harm", e.HatefulConduct = "hateful_conduct", e.Impersonation = "impersonation", e.Miscategorized = "miscategorized", e.OffensiveUsername = "offensive_username", e.Other = "other", e.Porn = "porn", e.Prohibited = "prohibited", e.SelfHarm = "selfharm", e.SexualContent = "sexual_content", e.SexualViolence = "sexual_violence", e.Spam = "spam", e.TosBanEvasion = "tos_ban_evasion", e.Underaged = "underaged"
                }(i || (i = {}))
        },
        "4w0E": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "Chat_BanUserFromChatRoom"
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
                                    value: "BanUserFromChatRoomInput"
                                }
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
                                value: "banUserFromChatRoom"
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
                                    name: {
                                        kind: "Name",
                                        value: "error"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "code"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 126
                }
            };
            n.loc.source = {
                body: "mutation Chat_BanUserFromChatRoom($input: BanUserFromChatRoomInput!) {\nbanUserFromChatRoom(input: $input) {\nerror {\ncode\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "5NSO": function(e, t, n) {},
        "5myU": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            });
            var r = 10;

            function i(e, t, n) {
                if (void 0 === n && (n = 1), !t || !e) return -1;
                var i = window.getComputedStyle(document.documentElement).fontSize || r.toString(),
                    a = parseFloat(i) / r;
                return Math.floor(e / (t * a)) * n
            }
        },
        "5zf8": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            }), n.d(t, "b", function() {
                return l
            });
            var r, i, a = n("/7QA");

            function o(e, t) {
                switch (e) {
                    case r.Second:
                        return Object(a.d)("{secondCount, plural, one {# second} other {# seconds}}", {
                            secondCount: t
                        }, "formatDuration");
                    case r.Minute:
                        return Object(a.d)("{minuteCount, plural, one {# minute} other {# minutes}}", {
                            minuteCount: t
                        }, "formatDuration");
                    case r.Hour:
                        return Object(a.d)("{hourCount, plural, one {# hour} other {# hours}}", {
                            hourCount: t
                        }, "formatDuration");
                    case r.Day:
                        return Object(a.d)("{dayCount, plural, one {# day} other {# days}}", {
                            dayCount: t
                        }, "formatDuration");
                    case r.Week:
                        return Object(a.d)("{weekCount, plural, one {# week} other {# weeks}}", {
                            weekCount: t
                        }, "formatDuration");
                    case r.Month:
                        return Object(a.d)("{monthCount, plural, one {# month} other {# months}}", {
                            monthCount: t
                        }, "formatDuration");
                    default:
                        return ""
                }
            }

            function s(e, t) {
                switch (e) {
                    case r.Second:
                        return Object(a.d)("{secondCount}s", {
                            secondCount: t
                        }, "formatDuration");
                    case r.Minute:
                        return Object(a.d)("{minuteCount}m", {
                            minuteCount: t
                        }, "formatDuration");
                    case r.Hour:
                        return Object(a.d)("{hourCount}h", {
                            hourCount: t
                        }, "formatDuration");
                    case r.Day:
                        return Object(a.d)("{dayCount}d", {
                            dayCount: t
                        }, "formatDuration");
                    case r.Week:
                        return Object(a.d)("{weekCount}w", {
                            weekCount: t
                        }, "formatDuration");
                    case r.Month:
                        return Object(a.d)("{monthCount}mo", {
                            monthCount: t
                        }, "formatDuration");
                    default:
                        return ""
                }
            }

            function l(e, t) {
                var n;
                switch (void 0 === t && (t = i.Humanized), t === i.ClockAuto && (t = e >= 3600 ? i.ClockHMS : i.ClockMS), t) {
                    case i.ClockHM:
                    case i.ClockHMS:
                        n = r.Hour;
                        break;
                    case i.ClockMS:
                        n = r.Minute
                }
                var l = 2;
                t === i.ClockHMS && (l = 3);
                var d = function(e, t) {
                        void 0 === t && (t = r.Month);
                        var n = {};
                        return n.seconds = e, e < 60 || t === r.Second ? n : (n.minutes = Math.floor(e / 60), n.seconds = e % 60, n.minutes < 60 || t === r.Minute ? n : (n.hours = Math.floor(n.minutes / 60), n.minutes = n.minutes % 60, n.hours < 24 || t === r.Hour ? n : (n.days = Math.floor(n.hours / 24), n.hours = n.hours % 24, n.days < 7 || t === r.Day ? n : n.days <= 26 || t === r.Week ? (n.weeks = Math.floor(n.days / 7), n.days = n.days % 7, n) : (n.months = Math.round((n.days + 3) / 30), n))))
                    }(e, n),
                    u = Object.keys(d);
                if (u.forEach(function(e, n) {
                        t !== i.Humanized && t !== i.HumanizedShort || d[e] || delete d[e], n < u.length - l && delete d[e]
                    }), t === i.Humanized) return function(e) {
                    return e.months ? o(r.Month, e.months) : e.weeks && e.days ? o(r.Week, e.weeks) + " " + o(r.Day, e.days) : e.weeks ? o(r.Week, e.weeks) : e.days && e.hours ? o(r.Day, e.days) + " " + o(r.Hour, e.hours) : e.days ? o(r.Day, e.days) : e.hours && e.minutes ? o(r.Hour, e.hours) + " " + o(r.Minute, e.minutes) : e.hours ? o(r.Hour, e.hours) : e.minutes && e.seconds ? o(r.Minute, e.minutes) + " " + o(r.Second, e.seconds) : e.minutes ? o(r.Minute, e.minutes) : o(r.Second, e.seconds || 0)
                }(d);
                if (t === i.HumanizedShort) return function(e) {
                    return e.months ? s(r.Month, e.months) : e.weeks && e.days ? "" + s(r.Week, e.weeks) + s(r.Day, e.days) : e.weeks ? s(r.Week, e.weeks) : e.days && e.hours ? "" + s(r.Day, e.days) + s(r.Hour, e.hours) : e.days ? s(r.Day, e.days) : e.hours && e.minutes ? "" + s(r.Hour, e.hours) + s(r.Minute, e.minutes) : e.hours ? s(r.Hour, e.hours) : e.minutes && e.seconds ? "" + s(r.Minute, e.minutes) + s(r.Second, e.seconds) : e.minutes ? s(r.Minute, e.minutes) : s(r.Second, e.seconds || 0)
                }(d);
                var p = ":",
                    m = !1;
                switch (a.o.intl.getLanguageCode()) {
                    case "cy":
                    case "da":
                    case "fi":
                    case "id":
                    case "nb":
                    case "si":
                        p = ".";
                        break;
                    case "af":
                    case "fr":
                    case "lt":
                        m = !0
                }
                var h = d.seconds || 0,
                    g = d.minutes || 0,
                    f = d.hours || 0;
                switch (t) {
                    case i.ClockHM:
                    case i.ClockHMS:
                        var v = (m ? c(f, 2) : f) + p + c(g, 2);
                        return t === i.ClockHMS && (v += p + c(h, 2)), v;
                    case i.ClockMS:
                        return (m ? c(g, 2) : g) + p + c(h, 2)
                }
            }

            function c(e, t) {
                var n = e.toString();
                return n.length < t ? "0".repeat(t - n.length) + n : n
            }! function(e) {
                e[e.Second = 0] = "Second", e[e.Minute = 1] = "Minute", e[e.Hour = 2] = "Hour", e[e.Day = 3] = "Day", e[e.Week = 4] = "Week", e[e.Month = 5] = "Month"
            }(r || (r = {})),
            function(e) {
                e[e.Humanized = 0] = "Humanized", e[e.HumanizedShort = 1] = "HumanizedShort", e[e.ClockAuto = 2] = "ClockAuto", e[e.ClockHM = 3] = "ClockHM", e[e.ClockMS = 4] = "ClockMS", e[e.ClockHMS = 5] = "ClockHMS"
            }(i || (i = {}))
        },
        "6H22": function(e, t, n) {
            e.exports = n.p + "assets/overwatch-chars-fe0fc1dca7ed645de58c.png"
        },
        "7D17": function(e, t, n) {},
        "80G/": function(e, t, n) {},
        "86FS": function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                i = n("q1tI"),
                a = n("H1ft"),
                o = n("SWMh"),
                s = n("cr+I"),
                l = n("/7QA"),
                c = n("GFmA"),
                d = n("0INk"),
                u = n("yWUM"),
                p = n("vRsq"),
                m = n("2xye"),
                h = n("3W+h"),
                g = n("GnwI"),
                f = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onClickHandler = function() {
                            t.props.onClick && t.props.onClick(t.props.tracking.content_index)
                        }, t.gameChangesWithLinks = function() {
                            return t.props.videoGameChanges.map(function(e) {
                                var n = {
                                    t: Object(u.a)(e.offset)
                                };
                                return t.props.collectionID && (n.collection = t.props.collectionID), r.__assign({}, e, {
                                    linkTo: {
                                        pathname: "/videos/" + t.props.video.id,
                                        search: s.stringify(n),
                                        state: {
                                            content: m.PageviewContent.PreviewCardGameBalloonGame,
                                            medium: t.props.tracking.medium
                                        }
                                    }
                                })
                            })
                        }, t.trackVideoGameBalloonClick = function(e) {
                            t.props.video.owner && t.props.video.owner.id && t.props.video.owner.login && Object(d.b)({
                                videoID: e,
                                broadcasterID: t.props.video.owner.id,
                                channelLogin: t.props.video.owner.login,
                                contentIndex: t.props.tracking.content_index,
                                pageviewMedium: t.props.tracking.medium
                            })
                        }, t.trackVideoGameBalloonItemClick = function(e, n) {
                            t.props.video.owner && t.props.video.owner.id && t.props.video.owner.login && Object(d.c)({
                                videoID: e,
                                broadcasterID: t.props.video.owner.id,
                                channelLogin: t.props.video.owner.login,
                                contentIndex: n,
                                pageviewMedium: t.props.tracking.medium
                            })
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(c.a, {
                            context: this.props.context,
                            onClick: this.onClickHandler,
                            title: this.props.video.title,
                            linkTo: {
                                pathname: Object(p.i)(void 0, this.props.video.id),
                                state: this.getLinkState(),
                                search: this.generateSearchString()
                            },
                            thumbnailImageProps: {
                                src: this.props.video.previewThumbnailURL,
                                alt: this.props.video.title
                            },
                            channelDisplayName: this.props.video.owner && this.props.video.owner.displayName || "",
                            channelLogin: this.props.video.owner && this.props.video.owner.login || "",
                            channelLinkTo: {
                                pathname: "/" + (this.props.video.owner ? this.props.video.owner.login : ""),
                                state: this.getLinkState()
                            },
                            channelImageProps: {
                                src: this.props.video.owner && this.props.video.owner.profileImageURL || "",
                                alt: this.props.video.owner ? this.props.video.owner.displayName : ""
                            },
                            gameTitle: this.props.video.game && this.props.video.game.name || "",
                            gameTitleLinkTo: {
                                pathname: "/directory/game/" + encodeURI(this.props.video.game && this.props.video.game.name || ""),
                                state: this.getLinkState()
                            },
                            gameBoxArtImageProps: {
                                src: this.props.video.game && this.props.video.game.boxArtURL || l.a.defaultBoxArtURL,
                                alt: this.props.video.game ? this.props.video.game.displayName : ""
                            },
                            videoGameChanges: this.gameChangesWithLinks(),
                            multipleVideoGameMarkersType: this.props.multipleVideoGameMarkersType,
                            datePublished: this.props.video.publishedAt,
                            viewCount: this.props.video.viewCount,
                            durationInSeconds: this.props.hideDuration ? void 0 : this.props.video.lengthSeconds,
                            animatedImageProps: this.props.video.animatedPreviewURL ? {
                                src: this.props.video.animatedPreviewURL,
                                alt: ""
                            } : void 0,
                            watchedProgressPercent: this.getVideoPreviousWatchPercentage() || 0,
                            listPosition: this.props.listPosition,
                            topBar: this.props.topBar,
                            restriction: this.getRestrictionProps(),
                            trackImageLatency: this.props.trackImageLatency,
                            onVideoGameBalloonClick: this.trackVideoGameBalloonClick,
                            onVideoGameBalloonItemClick: this.trackVideoGameBalloonItemClick,
                            trackingContext: this.props.tracking,
                            tagListProps: !0 !== this.props.hideTags && this.props.video.contentTags ? {
                                tags: this.props.video.contentTags,
                                linkPath: h.a.PopularTag
                            } : void 0
                        })
                    }, t.prototype.generateSearchString = function() {
                        var e = {};
                        this.props.collectionID && (e.collection = this.props.collectionID);
                        var t = s.stringify(e);
                        return t ? "?" + t : ""
                    }, t.prototype.getVideoPreviousWatchPercentage = function() {
                        return this.props.video && this.props.video.self && this.props.video.self.viewingHistory && null !== this.props.video.self.viewingHistory.position ? 0 === this.props.video.lengthSeconds || 0 === this.props.video.self.viewingHistory.position ? null : this.props.video.self.viewingHistory.position / this.props.video.lengthSeconds * 100 : null
                    }, t.prototype.getRestrictionProps = function() {
                        var e = this.props.video.restriction && this.props.video.restriction.productName ? "/products/" + this.props.video.restriction.productName : "";
                        return {
                            productName: this.props.video.restriction && this.props.video.restriction.productName,
                            title: this.props.video.restriction && this.props.video.restriction.productTitle,
                            canViewRestricted: this.props.video.self && !this.props.video.self.isRestricted || !1,
                            upsellLinkTo: {
                                pathname: e,
                                state: this.getLinkState()
                            }
                        }
                    }, t.prototype.getLinkState = function() {
                        return {
                            content: this.props.tracking.content,
                            content_index: this.props.tracking.content_index,
                            medium: this.props.tracking.medium
                        }
                    }, t
                }(i.Component),
                v = Object(g.c)("VideoPreviewCard", {
                    autoReportInteractive: !0
                })(f);
            n.d(t, "a", function() {
                return b
            });
            var b = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        videoGameChanges: []
                    }, t.maybeFetchVideoMarkers = function(e, n) {
                        return r.__awaiter(t, void 0, void 0, function() {
                            var t;
                            return r.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return this.promise = Object(o.a)(e, n, this.props.video.game), [4, this.promise];
                                    case 1:
                                        return t = r.sent(), this.setState({
                                            videoGameChanges: t
                                        }), [2]
                                }
                            })
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return i.createElement(v, r.__assign({
                        videoGameChanges: this.state.videoGameChanges
                    }, this.props))
                }, t.prototype.componentWillMount = function() {
                    this.props.multipleVideoGameMarkersType && this.props.multipleVideoGameMarkersType !== a.a.None && !this.promise && this.maybeFetchVideoMarkers(this.props.video.id, this.props.video.lengthSeconds)
                }, t
            }(i.Component)
        },
        "8jSG": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "blockedUsers"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "User"
                        }
                    },
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
                                value: "blockedUsers"
                            },
                            arguments: [],
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
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 56
                }
            };
            n.loc.source = {
                body: "fragment blockedUsers on User {\nid\nblockedUsers {\nid\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "8rUg": function(e, t, n) {
            e.exports = n.p + "assets/counterstrike-skill-groups-24ec0fc40a78435bc373.png"
        },
        "9a8W": function(e, t, n) {},
        A65o: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return s
            });
            var r = n("mrSG"),
                i = n("q1tI"),
                a = n("yI6f"),
                o = n("x75U");

            function s() {
                return function(e) {
                    return function(t) {
                        function n() {
                            var e = null !== t && t.apply(this, arguments) || this;
                            return e.trackImpression = function(t) {
                                e.context.trackImpression(e.props.shelf, e.props.contentEdge, e.props.itemPosition, t)
                            }, e.trackClick = function(t, n, r) {
                                "string" != typeof r && (r = void 0), e.context.trackClick(e.props.shelf, e.props.contentEdge, e.props.itemPosition, t, n, r)
                            }, e
                        }
                        return r.__extends(n, t), n.prototype.render = function() {
                            var t = this.context.cardIDtoItemTrackingIDMap && this.props.contentEdge.node && this.context.cardIDtoItemTrackingIDMap[this.props.contentEdge.node.id],
                                n = this.props,
                                o = n.itemPosition,
                                s = n.rowPosition,
                                l = n.shelf,
                                c = Object(a.f)(l.title).rowName,
                                d = {
                                    trackImpression: this.trackImpression,
                                    trackClick: this.trackClick,
                                    shelfCardTrackingProps: {
                                        item_tracking_id: t || null,
                                        item_position: o,
                                        row_name: c,
                                        row_position: s
                                    }
                                };
                            return i.createElement(e, r.__assign({}, this.props, d))
                        }, n.contextTypes = o.a, n
                    }(i.Component)
                }
            }
        },
        A8tl: function(e, t, n) {
            var r = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "stream"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Stream"
                        }
                    },
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
                                value: "broadcaster"
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "FragmentSpread",
                                    name: {
                                        kind: "Name",
                                        value: "user"
                                    },
                                    directives: []
                                }]
                            }
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "game"
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "FragmentSpread",
                                    name: {
                                        kind: "Name",
                                        value: "game"
                                    },
                                    directives: []
                                }]
                            }
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "tags"
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "FragmentSpread",
                                    name: {
                                        kind: "Name",
                                        value: "tagFragment"
                                    },
                                    directives: []
                                }]
                            }
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "viewersCount"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
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
                                    value: "400"
                                }
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "height"
                                },
                                value: {
                                    kind: "IntValue",
                                    value: "225"
                                }
                            }],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "createdAt"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "type"
                            },
                            arguments: [],
                            directives: []
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 342
                }
            };
            r.loc.source = {
                body: '#import "twilight/features/tags/models/tag-fragment.gql"\n#import "twilight/pages/front/v2/queries/user-fragment.gql"\n#import "twilight/pages/front/v2/queries/game-fragment.gql"\nfragment stream on Stream {\nid\nbroadcaster {\n...user\n}\ngame {\n...game\n}\ntags {\n...tagFragment\n}\nviewersCount\npreviewImageURL(width: 400 height: 225)\ncreatedAt\ntype\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var i = {};

            function a(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !i[t] && (i[t] = !0, !0)
                })
            }
            r.definitions = r.definitions.concat(a(n("iiOx").definitions)), r.definitions = r.definitions.concat(a(n("fga6").definitions)), r.definitions = r.definitions.concat(a(n("0ubH").definitions)), e.exports = r
        },
        AO3T: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return r
            }), n.d(t, "a", function() {
                return i
            }), n.d(t, "f", function() {
                return s
            }), n.d(t, "d", function() {
                return l
            }), n.d(t, "e", function() {
                return c
            }), n.d(t, "c", function() {
                return d
            });
            var r, i, a = n("/7QA"),
                o = n("2xye");
            ! function(e) {
                e.HomepageCTA = "homepage_cta", e.NewSignup = "new_signup"
            }(r || (r = {})),
            function(e) {
                e.Click = "click", e.Impression = "impression", e.Start = "start", e.Dismissed = "dismissed", e.Completed = "completed"
            }(i || (i = {}));
            var s = function(e) {
                    var t = {
                        source: e.source,
                        action: i.Start
                    };
                    a.n.track(o.SpadeEventType.OnboardingEvent, t)
                },
                l = function() {
                    var e = {
                        source: r.HomepageCTA,
                        action: i.Completed
                    };
                    a.n.track(o.SpadeEventType.OnboardingEvent, e)
                },
                c = function(e, t) {
                    var n = {
                        src: o.SpadeEventType.OnboardingEvent,
                        game: t
                    };
                    a.n.track(e, n)
                },
                d = function(e) {
                    a.n.track(o.SpadeEventType.BrowseForYou, e)
                }
        },
        B3R5: function(e, t, n) {},
        "BQs+": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            }), n.d(t, "c", function() {
                return d
            }), n.d(t, "b", function() {
                return u
            });
            var r, i = n("mrSG"),
                a = n("/7QA"),
                o = n("2xye"),
                s = n("I6K6"),
                l = n("bTcf"),
                c = n("L7EG");

            function d(e, t, n) {
                return i.__awaiter(this, void 0, void 0, function() {
                    var r, l, u, p;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return i.trys.push([0, 2, , 3]), [4, n.query({
                                    query: c,
                                    variables: {
                                        videoID: e.id
                                    }
                                })];
                            case 1:
                                return r = i.sent().data, l = function(e, t) {
                                    return {
                                        id: e.id,
                                        owner: t.owner,
                                        broadcastType: t.broadcastType,
                                        game: t.game
                                    }
                                }(e, r.video), u = {
                                    channel: l.owner ? l.owner.login : null,
                                    channel_id: Number(e.owner.id),
                                    game: l.game ? l.game.name : null,
                                    partner: !!l.owner && l.owner.roles.isPartner,
                                    location: t.location,
                                    share_context: t.collectionID ? o.ShareItemContext.Collection : null,
                                    share_platform: t.platform,
                                    shared_item_id: t.collectionID ? t.collectionID : l.id,
                                    shared_item_type: t.collectionID ? o.ShareItemType.Collection : Object(s.a)(l.broadcastType),
                                    shared_item_url: t.shareURL,
                                    source_item_id: l.id,
                                    source_item_type: Object(s.a)(l.broadcastType)
                                }, a.o.tracking.track(o.SpadeEventType.ShareItem, u), [3, 3];
                            case 2:
                                return p = i.sent(), a.j.error(p.toString(), d.name), [3, 3];
                            case 3:
                                return [2]
                        }
                    })
                })
            }

            function u(e, t, n) {
                return i.__awaiter(this, void 0, void 0, function() {
                    var r, s, c;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return i.trys.push([0, 2, , 3]), [4, n.query({
                                    query: l,
                                    variables: {
                                        creatorID: e.owner.id
                                    }
                                })];
                            case 1:
                                return r = i.sent().data, s = {
                                    channel: r.user ? r.user.login : null,
                                    channel_id: Number(e.owner.id),
                                    game: null,
                                    partner: !!r.user && r.user.roles.isPartner,
                                    location: t.location,
                                    share_context: null,
                                    share_platform: t.platform,
                                    shared_item_id: e.id,
                                    shared_item_type: o.ShareItemType.Collection,
                                    shared_item_url: t.shareURL,
                                    source_item_id: e.id,
                                    source_item_type: o.SourceItemType.Collection
                                }, a.o.tracking.track(o.SpadeEventType.ShareItem, s), [3, 3];
                            case 2:
                                return c = i.sent(), a.j.error(c.toString(), u.name), [3, 3];
                            case 3:
                                return [2]
                        }
                    })
                })
            }! function(e) {
                e.Copy = "link", e.Embed = "option_embed", e.Facebook = "fb", e.Link = "option_link", e.Reddit = "reddit", e.Twitter = "twitter", e.Unknown = "", e.VKontakte = "vk", e.Download = "download"
            }(r || (r = {}))
        },
        BhFH: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return l
            });
            var r = n("mrSG"),
                i = n("yR8l"),
                a = n("8jSG"),
                o = n("cMjZ"),
                s = n("kSkr");

            function l() {
                var e = this;
                return Object(i.a)(s, {
                    props: function(t) {
                        return {
                            blockUserMutation: function(n, i, s, l) {
                                return r.__awaiter(e, void 0, void 0, function() {
                                    return r.__generator(this, function(e) {
                                        switch (e.label) {
                                            case 0:
                                                return t.mutate ? [4, t.mutate({
                                                    variables: {
                                                        input: {
                                                            targetUserID: n,
                                                            sourceContext: s,
                                                            reason: i
                                                        }
                                                    },
                                                    optimisticResponse: {
                                                        blockUser: {
                                                            __typename: "BlockUserPayload",
                                                            targetUser: {
                                                                __typename: "User",
                                                                id: n
                                                            }
                                                        }
                                                    },
                                                    update: function(e) {
                                                        var t = e.readFragment({
                                                            id: Object(o.a)(l),
                                                            fragment: a
                                                        });
                                                        t && (t.blockedUsers.push({
                                                            id: n,
                                                            __typename: "User"
                                                        }), e.writeFragment({
                                                            id: Object(o.a)(l),
                                                            fragment: a,
                                                            data: t
                                                        }))
                                                    }
                                                })] : [3, 2];
                                            case 1:
                                                return e.sent(), [3, 3];
                                            case 2:
                                                throw new Error("blockUserMutation is not ready");
                                            case 3:
                                                return [2]
                                        }
                                    })
                                })
                            }
                        }
                    }
                })
            }
        },
        CCqK: function(e, t, n) {},
        DJtx: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "Clips_ModalDelete"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "slug"
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
                            name: {
                                kind: "Name",
                                value: "clip"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "slug"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "slug"
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
                                        value: "broadcaster"
                                    },
                                    arguments: [],
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
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "curator"
                                    },
                                    arguments: [],
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
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "thumbnailURL"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "createdAt"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "viewCount"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "title"
                                    },
                                    arguments: [],
                                    directives: []
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 143
                }
            };
            n.loc.source = {
                body: "query Clips_ModalDelete($slug: ID!) {\nclip(slug: $slug) {\nid\nbroadcaster {\nid\n}\ncurator {\nid\nlogin\n}\nthumbnailURL\ncreatedAt\nviewCount\ntitle\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        Fj9y: function(e, t, n) {},
        GFmA: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                i = n("q1tI"),
                a = n("/7QA"),
                o = n("/MKj"),
                s = n("TSYQ"),
                l = n("YhoA"),
                c = n("Ue10"),
                d = (n("lRiI"), function(e) {
                    var t, n = e.spriteDetails,
                        r = e.game.toLowerCase(),
                        a = s("metadata-icon__appendage", ((t = {})["metadata-icon__appendage--csgo-skill"] = r === l.a.CounterStrike, t)),
                        o = r === l.a.CounterStrike ? 40 : 20;
                    return i.createElement(c.Va, {
                        className: a
                    }, i.createElement("div", {
                        style: {
                            backgroundImage: "url(" + n.spriteURL + ")",
                            backgroundPositionX: n.spriteOffsetX ? -1 * n.spriteOffsetX : 0,
                            backgroundPositionY: n.spriteOffsetY ? -1 * n.spriteOffsetY : 0,
                            width: n.imageWidth ? n.imageWidth + "px" : "2rem",
                            height: n.imageWidth ? n.imageHeight + "px" : "2rem",
                            transform: "scale(" + (n.imageWidth > 0 ? o / n.imageWidth : 1) + ")",
                            transformOrigin: "0 0"
                        }
                    }))
                }),
                u = n("On2s"),
                p = (n("CCqK"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            metadataDetails: null
                        }, t.didUnmount = !1, t.loadStreamMetadataDetails = function() {
                            return r.__awaiter(t, void 0, void 0, function() {
                                var e, t;
                                return r.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            if (!this.props.streamMetadata || !this.props.game) return [3, 4];
                                            n.label = 1;
                                        case 1:
                                            return n.trys.push([1, 3, , 4]), [4, Object(u.b)(this.props.streamMetadata, this.props.game)];
                                        case 2:
                                            if (e = n.sent()) {
                                                if (this.didUnmount) return [2];
                                                this.setState({
                                                    metadataDetails: e
                                                })
                                            }
                                            return [3, 4];
                                        case 3:
                                            return t = n.sent(), a.j.error(t, "Failed to get metadata details."), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.loadStreamMetadataDetails()
                    }, t.prototype.componentDidUpdate = function(e) {
                        !e.leagueOfLegends.championsMap && this.props.leagueOfLegends.championsMap && this.loadStreamMetadataDetails()
                    }, t.prototype.componentWillUnmount = function() {
                        this.didUnmount = !0
                    }, t.prototype.render = function() {
                        return this.props.streamMetadata && this.props.game && this.state.metadataDetails ? i.createElement(c.Va, {
                            className: "preview-card-appendage",
                            display: c.W.Flex
                        }, i.createElement(c.Va, {
                            className: "preview-card-appendage__image-wrapper",
                            flexGrow: 0,
                            flexShrink: 0,
                            display: c.W.Flex,
                            alignItems: c.f.Center,
                            justifyContent: c.Ua.End
                        }, i.createElement("div", null, i.createElement(d, {
                            game: this.props.game,
                            spriteDetails: this.state.metadataDetails.spriteDetails
                        }))), i.createElement(c.xb, {
                            flexGrow: 1,
                            flexShrink: 1,
                            borderTop: !0,
                            padding: {
                                y: .5
                            },
                            margin: {
                                left: 1
                            },
                            display: c.W.Flex,
                            overflow: c.Ya.Hidden
                        }, i.createElement(c.Va, {
                            flexGrow: 1,
                            flexShrink: 1,
                            overflow: c.Ya.Hidden
                        }, i.createElement(c.V, {
                            ellipsis: !0
                        }, this.state.metadataDetails.name)), i.createElement(c.Va, {
                            flexGrow: 0,
                            flexShrink: 0
                        }, i.createElement(c.V, null, this.state.metadataDetails.label)))) : null
                    }, t
                }(i.Component));
            var m = Object(o.connect)(function(e) {
                    return {
                        leagueOfLegends: {
                            championsMap: e.directory.leagueOfLegends.championsMap
                        }
                    }
                })(p),
                h = n("5zf8"),
                g = (n("Fj9y"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onBalloonItemClick = function() {
                            t.props.onBalloonItemClick && t.props.onBalloonItemClick(t.props.videoID, t.props.index)
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = {
                            src: this.props.gameChange.thumbnailUrl,
                            alt: this.props.gameChange.label
                        };
                        return i.createElement(c.Va, {
                            className: "preview-card-game-balloon-row",
                            display: c.W.Flex,
                            flexWrap: c.Z.NoWrap
                        }, i.createElement(c.Sa, {
                            linkTo: this.props.gameChange.linkTo,
                            onClick: this.onBalloonItemClick
                        }, i.createElement(c.Va, {
                            display: c.W.Flex,
                            flexDirection: c.Y.Row,
                            padding: .5
                        }, i.createElement(c.xb, {
                            className: "preview-card-game-balloon-row__image-wrapper",
                            flexGrow: 0,
                            flexShrink: 0,
                            borderRadius: c.x.Small,
                            overflow: c.Ya.Hidden,
                            position: c.db.Relative
                        }, i.createElement(c.o, {
                            align: c.d.Center,
                            ratio: c.p.BoxArt
                        }, i.createElement(c.S, r.__assign({}, e))), i.createElement(c.xb, {
                            className: "preview-card-game-balloon-row__image-play-overlay",
                            alignItems: c.f.Center,
                            background: c.r.Overlay,
                            color: c.O.Overlay,
                            display: c.W.Flex,
                            justifyContent: c.Ua.Center,
                            position: c.db.Absolute,
                            attachTop: !0,
                            attachBottom: !0,
                            attachLeft: !0,
                            attachRight: !0
                        }, i.createElement(c.mb, {
                            asset: c.nb.Play,
                            type: c.ob.Inherit
                        }))), i.createElement(c.Va, {
                            display: c.W.Flex,
                            flexDirection: c.Y.Column,
                            flexGrow: 1,
                            flexShrink: 1,
                            padding: {
                                left: 1,
                                top: 1
                            }
                        }, i.createElement(c.Va, {
                            className: "preview-card-game-balloon-row__info-label"
                        }, i.createElement(c.V, null, this.props.gameChange.label)), i.createElement(c.Va, {
                            className: "preview-card-game-balloon-row__info-duration"
                        }, i.createElement(c.V, null, Object(h.b)(this.props.gameChange.duration)))))))
                    }, t
                }(i.Component)),
                f = n("0INk"),
                v = n("8/mp"),
                b = n("eJ65"),
                k = (n("vDRX"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onBalloonToggle = function(e) {
                            t.props.onBalloonClick && !e && t.props.onBalloonClick(t.props.videoID)
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        if (this.props.videoGameChanges.length > 0) {
                            var e = this.props.videoGameChanges.map(function(e) {
                                return e.label
                            });
                            Object(f.a)(e)
                        }
                    }, t.prototype.render = function() {
                        return i.createElement(c.Va, {
                            className: "preview-card-game-balloon",
                            display: c.W.InlineBlock,
                            position: c.db.Relative,
                            margin: {
                                top: .5
                            }
                        }, i.createElement(b.a, {
                            key: "game-balloon",
                            display: c.W.Inline,
                            onToggle: this.onBalloonToggle
                        }, i.createElement(c.z, {
                            type: c.F.Hollow,
                            icon: c.nb.ViewerList
                        }, i.createElement(c.Va, {
                            display: c.W.Flex,
                            flexDirection: c.Y.Row
                        }, i.createElement(c.V, null, Object(a.d)("Chapters", "PreviewCardGameBalloon")), i.createElement(c.Va, {
                            margin: {
                                left: 1
                            }
                        }, i.createElement(c.ab, {
                            label: this.props.videoGameChanges.length.toString()
                        })))), i.createElement(c.u, {
                            direction: c.v.TopLeft,
                            size: c.w.Medium
                        }, i.createElement(c.Va, {
                            overflow: c.Ya.Hidden,
                            display: c.W.Flex,
                            flexDirection: c.Y.Column,
                            flexWrap: c.Z.NoWrap
                        }, i.createElement(c.Va, {
                            padding: .5,
                            flexShrink: 0,
                            flexGrow: 0
                        }, i.createElement(c.V, {
                            color: c.O.Alt2
                        }, Object(a.d)("Chapter Select", "PreviewCardGameBalloon"))), i.createElement(c.Va, {
                            className: "preview-card-game-balloon__content",
                            display: c.W.Flex,
                            flexDirection: c.Y.Column,
                            flexGrow: 1,
                            flexShrink: 1,
                            flexWrap: c.Z.NoWrap
                        }, i.createElement(v.b, null, i.createElement(c.Va, {
                            display: c.W.Flex,
                            flexDirection: c.Y.Column,
                            flexWrap: c.Z.NoWrap,
                            fullHeight: !0
                        }, this.renderAdditionalGameList(this.props.videoGameChanges))))))))
                    }, t.prototype.renderAdditionalGameList = function(e) {
                        var t = this;
                        return e.map(function(e, n) {
                            return i.createElement(g, {
                                index: n,
                                gameChange: e,
                                key: t.props.videoID + "-" + e.offset,
                                videoID: t.props.videoID,
                                onBalloonItemClick: t.props.onBalloonItemClick
                            })
                        })
                    }, t
                }(i.Component)),
                y = n("kduP"),
                C = n("2xye"),
                S = function(e) {
                    return i.createElement(c.Va, null, i.createElement(c.V, {
                        color: c.O.Alt,
                        ellipsis: !0
                    }, e.videoGameChanges.map(function(t, n, r) {
                        return i.createElement(c.Na, {
                            key: n
                        }, i.createElement(c.T, {
                            to: {
                                pathname: Object(y.c)(t.label),
                                state: {
                                    content: C.PageviewContent.TextLink,
                                    medium: e.trackingContext && e.trackingContext.medium
                                }
                            },
                            type: c.U.Inherit
                        }, t.label, w(n, r.length - 1) ? null : ", "))
                    })))
                },
                w = function(e, t) {
                    return e === t
                },
                T = n("N0BP"),
                _ = (n("XA5B"), function(e) {
                    var t = i.createElement(c.xb, {
                        className: "preview-card-iconic-image__wrapper",
                        borderRadius: c.x.Small,
                        overflow: c.Ya.Hidden
                    }, i.createElement(c.o, {
                        ratio: e.aspect || c.p.BoxArt,
                        align: c.d.Center
                    }, i.createElement(c.S, r.__assign({}, e.imageProps))));
                    return e.linkTo && (t = i.createElement(c.T, r.__assign({}, Object(T.a)(e), {
                        to: e.linkTo,
                        onClick: e.onClick
                    }), t)), t
                });
            _.displayName = "PreviewCardIconicImage";
            n("cRsL");
            var O, E = function(e) {
                    var t = s("preview-card-top-bar", {
                        "preview-card-top-bar--gray": !e.selected,
                        "preview-card-top-bar--green": e.selected
                    });
                    return i.createElement(c.Va, {
                        display: c.W.Flex,
                        padding: {
                            x: 1,
                            y: .5
                        },
                        justifyContent: c.Ua.Between,
                        alignItems: c.f.Center,
                        className: t
                    }, i.createElement(c.Va, {
                        display: c.W.InlineFlex
                    }, i.createElement(c.V, {
                        "data-test-selector": "top-bar-title-selector",
                        color: c.O.Overlay,
                        bold: !0,
                        transform: c.Mb.Uppercase
                    }, e.title)), e.subTitle && i.createElement(c.Va, {
                        display: c.W.InlineFlex
                    }, i.createElement(c.V, {
                        "data-test-selector": "top-bar-sub-title-selector",
                        color: c.O.Overlay
                    }, e.subTitle)))
                },
                I = (n("m493"), function(e) {
                    var t = .5,
                        n = null;
                    "number" == typeof e.progressBarPercent && e.progressBarPercent > 0 && (n = i.createElement(c.Va, {
                        position: c.db.Absolute,
                        attachBottom: !0,
                        fullWidth: !0
                    }, i.createElement(c.gb, {
                        borderRadius: c.x.None,
                        size: c.ib.Small,
                        value: e.progressBarPercent,
                        mask: !0
                    })), t = 1);
                    var a = 1,
                        o = null;
                    return e.topBar && (o = i.createElement(c.Va, {
                        position: c.db.Absolute,
                        attachTop: !0,
                        fullWidth: !0
                    }, i.createElement(E, r.__assign({}, e.topBar))), a = 3), i.createElement(c.Va, {
                        position: c.db.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        fullWidth: !0,
                        fullHeight: !0,
                        className: "preview-card-overlay"
                    }, o, n, i.createElement(c.Va, {
                        position: c.db.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        margin: e.topBar ? {
                            x: 1,
                            y: a
                        } : 1,
                        "data-test-selector": "top-left-selector"
                    }, e.topLeft), i.createElement(c.Va, {
                        position: c.db.Absolute,
                        attachTop: !0,
                        attachRight: !0,
                        margin: e.topBar ? {
                            x: 1,
                            y: a
                        } : 1,
                        "data-test-selector": "top-right-selector"
                    }, e.topRight), i.createElement(c.Va, {
                        position: c.db.Absolute,
                        attachBottom: !0,
                        attachLeft: !0,
                        margin: {
                            x: .5,
                            y: t
                        },
                        "data-test-selector": "bottom-left-selector"
                    }, e.bottomLeft), i.createElement(c.Va, {
                        position: c.db.Absolute,
                        attachBottom: !0,
                        attachRight: !0,
                        margin: {
                            x: .5,
                            y: t
                        },
                        "data-test-selector": "bottom-right-selector"
                    }, e.bottomRight))
                }),
                N = (n("kF1+"), function(e) {
                    var t = e.icon && i.createElement(c.Va, {
                        display: c.W.Flex,
                        margin: {
                            right: .5
                        }
                    }, i.createElement(c.mb, {
                        asset: e.icon,
                        width: 10,
                        height: 10
                    }));
                    return e.withBackground ? i.createElement(c.xb, {
                        alignItems: c.f.Center,
                        background: c.r.Overlay,
                        borderRadius: c.x.Small,
                        className: "preview-card-stat",
                        color: c.O.Overlay,
                        display: c.W.Flex,
                        fontSize: c.Aa.Size6,
                        justifyContent: c.Ua.Center
                    }, t, i.createElement(c.V, null, e.value)) : i.createElement(c.xb, {
                        className: "preview-card-stat",
                        color: c.O.Overlay,
                        display: c.W.Flex,
                        padding: {
                            x: .5
                        }
                    }, t, i.createElement(c.V, null, e.value))
                }),
                R = n("GnwI"),
                D = (n("B3R5"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            didAnimatedPreviewLoad: !1,
                            didAnimatedPreviewFailToLoad: !1,
                            isHovered: !1
                        }, t.onImageError = function() {
                            t.props.latencyTracking.reportInteractive()
                        }, t.onImageLoad = function() {
                            t.props.latencyTracking.reportInteractive()
                        }, t.onAnimatedImageLoad = function(e) {
                            void 0 !== t.props.animatedImageProps && e.currentTarget.src === t.props.animatedImageProps.src && t.setState({
                                didAnimatedPreviewLoad: !0
                            })
                        }, t.onAnimatedImageLoadError = function(e) {
                            void 0 !== t.props.animatedImageProps && e.currentTarget.src === t.props.animatedImageProps.src && t.setState({
                                didAnimatedPreviewFailToLoad: !0
                            })
                        }, t.handleFocus = function() {
                            t.setState({
                                isHovered: !0
                            })
                        }, t.handleBlur = function() {
                            t.setState({
                                isHovered: !1
                            })
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.trackImageLatency || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = {};
                        return this.props.animatedImageProps && (e = {
                            onMouseEnter: this.handleFocus,
                            onMouseLeave: this.handleBlur,
                            onFocus: this.handleFocus,
                            onBlur: this.handleBlur
                        }), i.createElement("div", r.__assign({}, e, {
                            onClick: this.props.onClick
                        }), i.createElement(c.xb, {
                            background: c.r.Alt2,
                            overflow: c.Ya.Hidden
                        }, i.createElement(c.o, {
                            ratio: this.props.aspectRatio
                        }, this.renderImage())))
                    }, t.prototype.renderImage = function() {
                        var e, t = !(!this.props.animatedImageProps || !this.state.isHovered || this.state.didAnimatedPreviewFailToLoad),
                            n = s("preview-card-thumbnail__image", ((e = {})["preview-card-thumbnail__image--animated"] = this.state.isHovered && this.state.didAnimatedPreviewLoad, e));
                        return t && void 0 !== this.props.animatedImageProps ? i.createElement("div", {
                            className: n
                        }, i.createElement(c.S, r.__assign({}, this.props.animatedImageProps, {
                            onLoad: this.onAnimatedImageLoad,
                            onError: this.onAnimatedImageLoadError,
                            "data-test-selector": "preview-card-thumbnail__image-selector"
                        }))) : i.createElement("div", {
                            className: n
                        }, i.createElement(c.S, r.__assign({}, this.props.staticImageProps, {
                            onLoad: this.onImageLoad,
                            onError: this.onImageError,
                            "data-test-selector": "preview-card-thumbnail__image-selector"
                        })))
                    }, t
                }(i.Component)),
                x = Object(R.c)("PreviewCardThumbnail")(D),
                M = (n("80G/"), function(e) {
                    var t = null;
                    return e.subtitles && e.subtitles.length > 0 && (t = e.subtitles.map(function(e, t) {
                        return i.createElement(c.Va, {
                            key: t,
                            "data-test-selector": "preview-card-titles__subtitle"
                        }, i.createElement(c.V, {
                            color: c.O.Alt,
                            ellipsis: !0
                        }, "string" == typeof e ? e : i.createElement(c.T, {
                            "data-a-target": e.automationSelector,
                            to: e.linkTo,
                            onClick: e.onClick,
                            type: c.U.Inherit
                        }, e.text)))
                    })), i.createElement("div", null, i.createElement(c.T, r.__assign({}, Object(T.a)(e), {
                        to: e.linkTo,
                        onClick: e.onClick,
                        type: c.U.Inherit,
                        "data-test-selector": "preview-card-titles__primary-link"
                    }), i.createElement(c.V, {
                        type: c.Nb.H3,
                        fontSize: c.Aa.Size5,
                        lines: 1,
                        bold: !0,
                        ellipsis: !0
                    }, e.title)), i.createElement(c.Va, {
                        className: "preview-card-titles__subtitle-wrapper"
                    }, t))
                }),
                j = n("H1ft"),
                L = n("ZbA5"),
                P = n("QVaV"),
                V = n("hyVY"),
                F = n("MXoD"),
                U = n("0LAi"),
                A = n("fVj5");
            ! function(e) {
                e.LockSelector = "video-lock", e.UpsellSelector = "upsell"
            }(O || (O = {}));
            var W, B, G = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    if (!this.props.restriction || !this.props.restriction.productName || !this.props.restriction.title) return null;
                    var e = Object(a.d)("Get It Now", "VideoPreviewCardRestriction"),
                        t = this.props.restriction.canViewRestricted,
                        n = t ? Object(a.d)("unlocked", "VideoPreviewCardRestriction") : Object(a.d)("locked", "VideoPreviewCardRestriction"),
                        r = t ? c.nb.Unlock : c.nb.Lock;
                    return i.createElement(c.Va, null, !t && i.createElement(c.xb, {
                        background: c.r.Overlay,
                        className: "video-preview-card-restriction",
                        color: c.O.Overlay,
                        display: c.W.Flex,
                        position: c.db.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        zIndex: c.ac.Default,
                        padding: {
                            x: 5
                        },
                        textAlign: c.Jb.Center,
                        fullWidth: !0,
                        fullHeight: !0,
                        alignItems: c.f.Center,
                        alignContent: c.e.Center,
                        flexDirection: c.Y.Column,
                        flexWrap: c.Z.Wrap,
                        justifyContent: c.Ua.Center,
                        "data-test-selector": O.LockSelector
                    }, i.createElement(c.Na, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(c.V, {
                        color: c.O.Overlay,
                        fontSize: c.Aa.Size5,
                        "data-test-selector": O.UpsellSelector
                    }, Object(a.d)("View with {title}", {
                        title: this.props.restriction.title
                    }, "VideoPreviewCardRestriction"))), i.createElement(c.Va, null, i.createElement(c.z, {
                        type: c.F.Hollow,
                        ariaLabel: e,
                        targetBlank: !0,
                        disabled: "" === this.props.restriction.upsellLinkTo,
                        linkTo: this.props.restriction.upsellLinkTo,
                        overlay: !0
                    }, e))), i.createElement(c.xb, {
                        display: c.W.InlineFlex,
                        position: c.db.Absolute,
                        attachTop: this.props.attachTop,
                        attachBottom: !this.props.attachTop,
                        attachRight: !0,
                        margin: .5,
                        zIndex: c.ac.Default,
                        fontSize: c.Aa.Size6,
                        background: c.r.Overlay,
                        borderRadius: c.x.Medium,
                        color: c.O.Overlay
                    }, i.createElement(c.Qb, {
                        direction: this.props.attachTop ? c.Sb.Bottom : c.Sb.Top,
                        align: c.Rb.Right,
                        label: n
                    }, i.createElement(c.mb, {
                        asset: r,
                        height: 20,
                        width: 20
                    }))))
                }, t
            }(i.PureComponent);
            n("5NSO");

            function z(e) {
                return void 0 !== e.watchedProgressPercent
            }

            function H(e) {
                return void 0 !== e.clipCreatedByChannelLogin
            }! function(e) {
                e.Avatar = "preview-card-avatar", e.BoxArt = "preview-card-box-art"
            }(W || (W = {})),
            function(e) {
                e[e.SingleGameList = 1] = "SingleGameList", e[e.SingleChannelList = 2] = "SingleChannelList", e[e.MixedGameAndChannelList = 3] = "MixedGameAndChannelList"
            }(B || (B = {}));
            var q = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.isTagsExperiment = Object(A.b)(), t.getTrackingContext = function(e) {
                            var n = t.props.trackingContext;
                            return {
                                content: n && n.content ? n.content : e,
                                medium: n && n.medium
                            }
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return i.createElement("div", r.__assign({
                            className: "preview-card"
                        }, Object(T.a)(this.props)), i.createElement(c.xb, {
                            position: c.db.Relative,
                            borderRadius: c.x.Medium,
                            overflow: c.Ya.Hidden
                        }, this.renderVODRestrictionOverlay(), i.createElement(c.T, {
                            to: Object(F.a)(this.getTrackingContext(C.PageviewContent.VideoThumbnail), this.props.linkTo),
                            onClick: this.props.onThumbnailClick || this.props.onClick,
                            "data-a-target": "preview-card-image-link"
                        }, this.props.thumbnailImageProps && i.createElement(x, {
                            staticImageProps: this.props.thumbnailImageProps,
                            animatedImageProps: z(this.props) && this.props.animatedImageProps || void 0,
                            trackImageLatency: this.props.trackImageLatency
                        }), this.renderOverlay())), i.createElement(c.Va, {
                            display: c.W.Flex,
                            flexWrap: c.Z.NoWrap,
                            margin: {
                                top: 1
                            }
                        }, i.createElement(c.Va, {
                            flexGrow: 0,
                            flexShrink: 0
                        }, this.renderIconicImage()), i.createElement(c.Va, {
                            className: "preview-card__titles-wrapper",
                            flexGrow: 1,
                            flexShrink: 1
                        }, this.renderTitles(), this.renderTags()), this.props.contextualCardActionProps && i.createElement(c.Va, {
                            flexGrow: 0,
                            flexShrink: 0
                        }, i.createElement(this.props.contextualCardActionProps.component, r.__assign({}, this.props.contextualCardActionProps.props)))), this.renderAppendages())
                    }, t.prototype.renderOverlay = function() {
                        return function(e) {
                            return void 0 !== e.streamType
                        }(this.props) ? i.createElement(I, {
                            topLeft: i.createElement(L.a, {
                                type: this.props.streamType,
                                hosting: !!this.props.hostedByChannelLogin
                            }),
                            topRight: void 0,
                            bottomLeft: i.createElement(N, {
                                value: Object(a.d)("{viewerCount, plural, one {# viewer} other {# viewers}}", {
                                    viewerCount: this.props.currentViewerCount
                                }, "VideoPreviewCard")
                            }),
                            bottomRight: void 0
                        }) : z(this.props) ? i.createElement(I, {
                            topLeft: void 0 !== this.props.durationInSeconds && i.createElement(N, {
                                value: Object(V.b)(this.props.durationInSeconds),
                                icon: c.nb.Play,
                                withBackground: !0
                            }),
                            topRight: this.props.listPosition && i.createElement(N, {
                                withBackground: !0,
                                value: this.getListPositionLabel()
                            }),
                            bottomLeft: i.createElement(N, {
                                value: this.getViewCountLabel()
                            }),
                            bottomRight: i.createElement(N, {
                                value: Object(a.c)(new Date(this.props.datePublished), "medium")
                            }),
                            progressBarPercent: this.props.watchedProgressPercent,
                            topBar: this.props.topBar
                        }) : H(this.props) ? i.createElement(I, {
                            topLeft: i.createElement(N, {
                                value: Object(V.b)(this.props.durationInSeconds),
                                icon: c.nb.Clip,
                                withBackground: !0
                            }),
                            topRight: void 0,
                            bottomLeft: i.createElement(N, {
                                value: this.getViewCountLabel()
                            }),
                            bottomRight: i.createElement(N, {
                                value: Object(a.c)(new Date(this.props.datePublished), "medium")
                            })
                        }) : void 0
                    }, t.prototype.getListPositionLabel = function() {
                        return z(this.props) && this.props.listPosition ? Object(a.d)("{totalVideos, plural, one {{position} / # video} other {{position} / # videos}}", {
                            position: this.props.listPosition.position,
                            totalVideos: this.props.listPosition.totalVideos
                        }, "VideoPreviewCard") : ""
                    }, t.prototype.getViewCountLabel = function() {
                        return z(this.props) || H(this.props) ? Object(a.d)("{viewerCount, plural, one {# view} other {# views}}", {
                            viewerCount: this.props.viewCount
                        }, "VideoPreviewCard") : ""
                    }, t.prototype.renderIconicImage = function() {
                        return this.props.context === B.SingleChannelList && this.props.gameBoxArtImageProps && this.props.gameBoxArtImageProps.src && this.props.gameTitleLinkTo ? i.createElement(c.Va, {
                            margin: {
                                right: 1
                            }
                        }, i.createElement(_, {
                            imageProps: this.props.gameBoxArtImageProps,
                            linkTo: Object(F.a)(this.getTrackingContext(C.PageviewContent.GameBoxart), this.props.gameTitleLinkTo),
                            onClick: this.props.onGameTitleClick,
                            aspect: c.p.BoxArt,
                            "data-test-selector": W.BoxArt,
                            "data-a-target": "preview-card-boxart-link"
                        })) : (this.props.context === B.SingleGameList || this.props.context === B.MixedGameAndChannelList) && this.props.channelImageProps && this.props.channelImageProps.src ? i.createElement(c.Va, {
                            margin: {
                                right: 1
                            }
                        }, i.createElement(_, {
                            imageProps: this.props.channelImageProps,
                            linkTo: Object(F.a)(this.getTrackingContext(C.PageviewContent.UserThumbnail), this.props.channelLinkTo),
                            onClick: this.props.onChannelImageClick || this.props.onChannelLoginClick,
                            aspect: c.p.Aspect1x1,
                            "data-test-selector": W.Avatar
                        })) : void 0
                    }, t.prototype.renderTitles = function() {
                        var e = null,
                            t = [];
                        return this.shouldShowGameBalloon(this.props) || t.push({
                            text: Object(P.a)(this.props.channelLogin, this.props.channelDisplayName, !0),
                            linkTo: Object(F.a)(this.getTrackingContext(C.PageviewContent.ChannelMetadata), this.props.channelLinkTo),
                            onClick: this.props.onChannelLoginClick,
                            automationSelector: "preview-card-channel-link"
                        }), H(this.props) && this.props.clipCreatedByChannelLoginLinkTo ? t.push({
                            text: Object(a.d)("Clipped by {userName}", {
                                userName: this.props.clipCreatedByChannelLogin || ""
                            }, "VideoPreviewCard"),
                            linkTo: this.props.clipCreatedByChannelLoginLinkTo,
                            onClick: this.props.onClipCreatedByChannelLoginClick,
                            automationSelector: "preview-card-clip-curator-link"
                        }) : z(this.props) && this.props.multipleVideoGameMarkersType && this.props.videoGameChanges && this.props.videoGameChanges.length > 0 ? e = this.renderPreviewCardGameInfo(this.props.multipleVideoGameMarkersType, this.props.videoGameChanges, this.props.onVideoGameBalloonClick, this.props.onVideoGameBalloonItemClick) : this.props.context !== B.SingleGameList && this.props.gameTitle && this.props.gameTitleLinkTo && t.push({
                            text: this.props.gameTitle,
                            linkTo: Object(F.a)(this.getTrackingContext(C.PageviewContent.GameMetadata), this.props.gameTitleLinkTo),
                            onClick: this.props.onGameTitleClick,
                            automationSelector: "preview-card-game-link"
                        }), i.createElement(i.Fragment, null, i.createElement(M, {
                            title: this.props.title,
                            onClick: this.props.onVideoTitleClick || this.props.onClick,
                            linkTo: Object(F.a)(this.getTrackingContext(C.PageviewContent.VideoTitle), this.props.linkTo),
                            subtitles: t,
                            "data-a-target": "preview-card-title-link"
                        }), e)
                    }, t.prototype.renderTags = function() {
                        return this.isTagsExperiment && this.props.tagListProps && 0 !== this.props.tagListProps.tags.length ? i.createElement(c.Va, {
                            margin: {
                                top: .5
                            }
                        }, i.createElement(U.a, r.__assign({}, this.props.tagListProps, {
                            tagNumberLimit: 3
                        }))) : null
                    }, t.prototype.renderAppendages = function() {
                        if (this.props.playerMetadata && this.props.playerMetadataGame) return i.createElement(c.Va, {
                            margin: {
                                top: this.props.tagListProps && 0 !== this.props.tagListProps.tags.length ? .5 : 0
                            }
                        }, i.createElement(m, {
                            streamMetadata: this.props.playerMetadata,
                            game: this.props.playerMetadataGame
                        }))
                    }, t.prototype.renderVODRestrictionOverlay = function() {
                        return z(this.props) && this.props.restriction && this.props.restriction.productName && this.props.restriction.title ? i.createElement(G, {
                            restriction: this.props.restriction,
                            attachTop: !0
                        }) : null
                    }, t.prototype.shouldShowGameBalloon = function(e) {
                        return !!z(e) && (!!(e.videoGameChanges && e.videoGameChanges.length > 0) && e.multipleVideoGameMarkersType === j.a.Balloon)
                    }, t.prototype.renderPreviewCardGameInfo = function(e, t, n, r) {
                        switch (e) {
                            case j.a.Balloon:
                                return i.createElement(k, {
                                    videoGameChanges: t,
                                    videoID: t[0].videoID,
                                    onBalloonClick: n,
                                    onBalloonItemClick: r
                                });
                            case j.a.Inline:
                                return i.createElement(S, {
                                    videoGameChanges: t,
                                    trackingContext: this.props.trackingContext
                                });
                            case j.a.None:
                                return null;
                            default:
                                return e
                        }
                    }, t
                }(i.Component),
                Y = Object(R.c)("PreviewCard", {
                    autoReportInteractive: !0
                })(q);
            n.d(t, !1, function() {
                return W
            }), n.d(t, "b", function() {
                return B
            }), n.d(t, !1, function() {
                return q
            }), n.d(t, "a", function() {
                return Y
            })
        },
        H1ft: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            }), n.d(t, "b", function() {
                return o
            });
            var r, i = n("/7QA"),
                a = n("D7An");
            ! function(e) {
                e.None = "None", e.Inline = "Inline", e.Balloon = "Balloon"
            }(r || (r = {}));
            var o = function() {
                switch (i.o.experiments.getAssignment(a.b.Archer)) {
                    case "balloon":
                        return r.Balloon;
                    case "inline":
                        return r.Inline;
                    case "control":
                    default:
                        return r.None
                }
            }
        },
        H9ix: function(e, t, n) {},
        HfKK: function(e, t, n) {
            var r = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "Shelves"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "requestID"
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
                        }
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "platform"
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
                        }
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "langWeightedCCU"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Boolean"
                            }
                        }
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "limit"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Int"
                            }
                        }
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "itemsPerRow"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Int"
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
                                value: "shelves"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "requestID"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "requestID"
                                    }
                                }
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "platform"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "platform"
                                    }
                                }
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "langWeightedCCU"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "langWeightedCCU"
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
                                        value: "limit"
                                    }
                                }
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "itemsPerRow"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "itemsPerRow"
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
                                        value: "edges"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "node"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "FragmentSpread",
                                                    name: {
                                                        kind: "Name",
                                                        value: "shelf"
                                                    },
                                                    directives: []
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
                    end: 331
                }
            };
            r.loc.source = {
                body: '#import "twilight/pages/front/v2/queries/shelf-fragment.gql"\nquery Shelves($requestID: String! $platform: String! $langWeightedCCU: Boolean $limit: Int $itemsPerRow: Int) {\nshelves(requestID: $requestID platform: $platform langWeightedCCU: $langWeightedCCU first: $limit itemsPerRow: $itemsPerRow) {\nedges {\nnode {\n...shelf\n}\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var i = {};
            r.definitions = r.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !i[t] && (i[t] = !0, !0)
                })
            }(n("Vn2t").definitions)), e.exports = r
        },
        Igt5: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            }), n.d(t, "b", function() {
                return i
            }), n.d(t, "d", function() {
                return a
            }), n.d(t, "c", function() {
                return o
            }), n.d(t, "e", function() {
                return s
            }), n.d(t, "f", function() {
                return l
            }), n.d(t, "g", function() {
                return c
            }), n.d(t, "i", function() {
                return d
            }), n.d(t, "j", function() {
                return u
            }), n.d(t, "k", function() {
                return p
            }), n.d(t, "l", function() {
                return m
            }), n.d(t, "h", function() {
                return h
            }), n.d(t, "m", function() {
                return g
            });
            var r = "directory.LANGUAGE_TAGS_UPDATED",
                i = "directory.LOL_CHAMPIONS_CHANGED",
                a = "directory.LOL_CHAMPIONS_LOADING",
                o = "directory.LOL_CHAMPIONS_ERRORED",
                s = "directory.TAG_FILTER_ADDED",
                l = "directory.TAG_FILTER_CHANGED",
                c = "directory.TAG_FILTER_REMOVED";

            function d(e) {
                return {
                    type: r,
                    languageTags: e
                }
            }

            function u(e) {
                return {
                    type: o,
                    leagueOfLegendsChampionsErrored: e
                }
            }

            function p(e) {
                return {
                    type: a,
                    leagueOfLegendsChampionsLoading: e
                }
            }

            function m(e) {
                var t = {},
                    n = e.data;
                for (var r in n) n.hasOwnProperty(r) && (t[n[r].id] = n[r]);
                return {
                    type: i,
                    apiData: e,
                    championsMap: t,
                    apiVersion: e.version
                }
            }

            function h(e, t) {
                return {
                    type: s,
                    addedTag: e,
                    categoryName: t
                }
            }

            function g(e, t) {
                return {
                    type: c,
                    categoryName: t,
                    removedTag: e
                }
            }
        },
        "Jxh/": function(e, t, n) {
            "use strict";

            function r(e) {
                var t = document.createElement("textarea");
                t.style.position = "fixed", t.style.top = "0", t.style.left = "0", t.style.fontSize = "12pt", t.style.width = "2em", t.style.height = "2em", t.style.padding = "0", t.style.border = "none", t.style.outline = "none", t.style.boxShadow = "none", t.style.background = "transparent", t.value = e, document.body.appendChild(t), t.select();
                var n = !0;
                try {
                    n = document.execCommand("copy")
                } catch (e) {
                    n = !1
                }
                return document.body.removeChild(t), n
            }
            n.d(t, "a", function() {
                return r
            })
        },
        L7EG: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "VideoShareBox_TrackingVideoContext"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "videoID"
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
                            name: {
                                kind: "Name",
                                value: "video"
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
                                        value: "videoID"
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
                                        value: "broadcastType"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
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
                                                value: "roles"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "isPartner"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }]
                                            }
                                        }]
                                    }
                                }, {
                                    kind: "Field",
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
                                                value: "name"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 156
                }
            };
            n.loc.source = {
                body: "query VideoShareBox_TrackingVideoContext($videoID: ID!) {\nvideo(id: $videoID) {\nid\nbroadcastType\nowner {\nid\nlogin\nroles {\nisPartner\n}\n}\ngame {\nid\nname\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        MIhF: function(e, t, n) {},
        MJbm: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                i = n("q1tI"),
                a = n("/7QA"),
                o = (n("efEE"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.logger = a.o.logger.withCategory("resize-detector"), t.onScroll = function() {
                            var e = t.container,
                                n = e.offsetWidth,
                                r = e.offsetHeight,
                                i = e.offsetLeft,
                                a = e.offsetTop;
                            t.logger.debug("Resize Detector -- onScroll"), n === t.width && r === t.height && a === t.top && i === t.left || (t.width = n, t.height = r, t.props.onResize(n, r, a, i)), t.reset()
                        }, t.setGrowDivRef = function(e) {
                            return t.growDiv = e
                        }, t.setGrowChildDivRef = function(e) {
                            return t.growChildDiv = e
                        }, t.setShrinkDivRef = function(e) {
                            return t.shrinkDiv = e
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return i.createElement("div", {
                            className: "resize-detector"
                        }, i.createElement("div", {
                            className: "resize-detector",
                            ref: this.setGrowDivRef
                        }, i.createElement("div", {
                            className: "resize-detector__grow",
                            ref: this.setGrowChildDivRef
                        })), i.createElement("div", {
                            className: "resize-detector",
                            ref: this.setShrinkDivRef
                        }, i.createElement("div", {
                            className: "resize-detector__shrink"
                        })))
                    }, t.prototype.componentDidMount = function() {
                        if (this.growDiv) {
                            this.growDiv.parentElement || this.logger.warn("growDiv.parentElement is undefined!"), this.container = this.growDiv.parentElement.parentElement;
                            var e = this.container.style.position;
                            if ("relative" !== e && "absolute" !== e && "fixed" !== e) {
                                var t = window.getComputedStyle(this.container);
                                t && "static" === t.getPropertyValue("position") && (this.container.style.position = "relative")
                            }
                            this.onScroll(), this.growDiv.addEventListener("scroll", this.onScroll), this.shrinkDiv.addEventListener("scroll", this.onScroll)
                        } else this.logger.warn("growDiv is undefined!")
                    }, t.prototype.componentWillUnmount = function() {
                        this.growDiv.removeEventListener("scroll", this.onScroll), this.shrinkDiv.removeEventListener("scroll", this.onScroll)
                    }, t.prototype.reset = function() {
                        var e = this.growDiv,
                            t = this.shrinkDiv,
                            n = this.growChildDiv.style;
                        n.width = "100000px", n.height = "100000px", e.scrollLeft = 1e5, e.scrollTop = 1e5, t.scrollLeft = 1e5, t.scrollTop = 1e5
                    }, t
                }(i.Component));
            n.d(t, "a", function() {
                return o
            })
        },
        MLDe: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return d
            }), n.d(t, "b", function() {
                return u
            }), n.d(t, "c", function() {
                return m
            }), n.d(t, "d", function() {
                return h
            });
            var r, i, a = n("/7QA"),
                o = n("wbMx"),
                s = n("2xye"),
                l = n("BQs+"),
                c = ((r = {})[o.b.Twitter] = "twitter", r[o.b.Reddit] = "reddit", r[o.b.VKontakte] = "vkontakte", r[o.b.Facebook] = "facebook", r[o.b.Copy] = "link", r[o.b.CopyInput] = "option_link", r[o.b.Download] = "download", r),
                d = {
                    MyClips: "MyClips",
                    ClipsOfMyChannel: "ClipsOfMyChannel"
                },
                u = {
                    Game: "TopClipsGame",
                    Channel: "TopClipsChannel"
                },
                p = ((i = {
                    MyClips: s.PageviewLocation.MyClipsManager,
                    ClipsOfMyChannel: s.PageviewLocation.ChannelClipsManager,
                    TopClipsGame: s.PageviewLocation.ClipsGame,
                    TopClipsChannel: s.PageviewLocation.ChannelClips
                })[s.PageviewLocation.ClipsEditing] = s.PageviewLocation.ClipsEditing, i[s.PageviewLocation.ClipsViewing] = s.PageviewLocation.ClipsViewing, i[s.PageviewLocation.ClipsWatchPage] = s.PageviewLocation.ClipsWatchPage, i),
                m = function(e, t, n, r, i) {
                    return function(o) {
                        a.o.tracking.track(s.SpadeEventType.VideoShare, {
                            vod_id: e,
                            vod_type: s.SpadeVideoBroadcastType.Clip,
                            share_platform: c[o],
                            location: p[i],
                            game: t,
                            channel_id: Number(n || 0),
                            channel: r,
                            live: null
                        })
                    }
                },
                h = function(e, t, n, r, i, o) {
                    return function() {
                        a.o.tracking.track(s.SpadeEventType.VideoShare, {
                            vod_id: e,
                            vod_type: s.SpadeVideoBroadcastType.Clip,
                            share_platform: l.a.Link,
                            location: p[i],
                            game: t,
                            channel_id: Number(n || 0),
                            channel: r,
                            live: null,
                            shared_item_url: o
                        })
                    }
                }
        },
        MPK0: function(e, t, n) {},
        McYG: function(e, t, n) {
            "use strict";

            function r(e, t) {
                return "https://www.twitch.tv/" + t + "/clip/" + e
            }
            n.d(t, "a", function() {
                return r
            })
        },
        MdYN: function(e, t, n) {
            "use strict";
            var r, i = n("/MKj"),
                a = n("fvjX"),
                o = n("aCAx"),
                s = n("mrSG"),
                l = n("TSYQ"),
                c = n("q1tI"),
                d = n("/7QA"),
                u = n("cZKs"),
                p = n("jsEL"),
                m = n("GnwI"),
                h = n("/HY+"),
                g = n("4qQ0"),
                f = n("8Ad5"),
                v = n("2iEm"),
                b = n("u5aL"),
                k = n("uX80"),
                y = n("wbMx"),
                C = n("Jxh/"),
                S = n("kduP"),
                w = n("f00E"),
                T = n("vhpE"),
                _ = n("bq0i"),
                O = n("yR8l"),
                E = n("4rCz"),
                I = n("ndwU");
            ! function(e) {
                e[e.View = 0] = "View", e[e.Report = 1] = "Report", e[e.Delete = 2] = "Delete", e[e.DeleteAll = 3] = "DeleteAll", e[e.Ban = 4] = "Ban", e[e.Timeout = 5] = "Timeout"
            }(r || (r = {}));
            var N = n("Ue10"),
                R = n("WsU7"),
                D = [r.Delete, r.DeleteAll],
                x = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.clipsMaintenance = Object(I.a)(), n.renderMenuItem = function(e) {
                            var t = n.menuData.get(e);
                            return e && t ? c.createElement(N.Sa, {
                                key: t.display,
                                onClick: t.destinationHandler,
                                "data-a-target": "clip-moderation-button-" + t.display,
                                disabled: n.clipsMaintenance && D.includes(e)
                            }, c.createElement(N.Va, {
                                padding: {
                                    x: 1,
                                    y: .5
                                }
                            }, t.display)) : null
                        }, n.menuData = new Map([
                            [r.Report, {
                                display: Object(E.d)("Report", "ModerationMenu"),
                                destinationHandler: function() {
                                    return n.props.updateModalViewState(r.Report)
                                }
                            }],
                            [r.Delete, {
                                display: Object(E.d)("Delete", "ModerationMenu"),
                                destinationHandler: function() {
                                    return n.props.updateModalViewState(r.Delete)
                                }
                            }],
                            [r.DeleteAll, {
                                display: Object(E.d)("Delete All Clips from Video", "ModerationMenu"),
                                destinationHandler: function() {
                                    return n.props.updateModalViewState(r.DeleteAll)
                                }
                            }],
                            [r.Ban, {
                                display: Object(E.d)("Ban User", "ModerationMenu"),
                                destinationHandler: function() {
                                    return n.props.updateModalViewState(r.Ban)
                                }
                            }],
                            [r.Timeout, {
                                display: Object(E.d)("Timeout User (24 hr)", "ModerationMenu"),
                                destinationHandler: function() {
                                    return n.props.updateModalViewState(r.Timeout)
                                }
                            }]
                        ]), n
                    }
                    return s.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this.props.data,
                            t = this.props.clip;
                        if (!e || !e.currentUser) return null;
                        var n = e.currentUser.isStaff || e.currentUser.isSiteAdmin,
                            i = !!t.curator && e.currentUser.id === t.curator.id,
                            a = !!t.broadcaster && e.currentUser.id === t.broadcaster.id,
                            o = i || a || n,
                            s = a || n,
                            l = [r.Report];
                        return o && l.push(r.Delete), s && (l.push(r.DeleteAll), t.curator && t.broadcaster && (l.push(r.Ban), l.push(r.Timeout))), c.createElement(N.Va, {
                            className: "moderation-menu"
                        }, c.createElement(_.a, null, c.createElement(N.z, {
                            type: N.F.Hollow,
                            icon: N.nb.More,
                            ariaLabel: Object(E.d)("More Options", "ModerationMenu"),
                            "data-a-target": "moderation-menu-button"
                        }), c.createElement(N.u, {
                            direction: N.v.TopRight
                        }, c.createElement(N.Va, {
                            padding: {
                                y: .5
                            }
                        }, this.moderationMenuRender(l)))))
                    }, t.prototype.moderationMenuRender = function(e) {
                        var t = this;
                        return e.map(function(e) {
                            return t.renderMenuItem(e)
                        })
                    }, t = s.__decorate([Object(O.a)(R), Object(m.c)("ModerationMenu")], t)
                }(c.Component),
                M = n("MLDe"),
                j = (n("n/Dx"), 2e3),
                L = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isShowingBalloon: !1,
                            playerRefID: Object(w.a)()
                        }, t.timeoutID = null, t.copyClipURL = function() {
                            var e;
                            try {
                                e = Object(C.a)(t.props.clip.url)
                            } catch (e) {
                                return void d.j.warn("Failed to copy", e)
                            }
                            e && (t.setState({
                                isShowingBalloon: !0
                            }), t.timeoutID = setTimeout(function() {
                                t.setState({
                                    isShowingBalloon: !1
                                })
                            }, j), Object(M.c)(t.props.clip.id, t.props.clip.game && t.props.clip.game.name, t.props.clip.broadcaster && t.props.clip.broadcaster.id, t.props.clip.broadcaster && t.props.clip.broadcaster.login, t.props.pageType)(y.b.CopyInput))
                        }, t.dismissBalloon = function() {
                            t.setState({
                                isShowingBalloon: !1
                            }), t.timeoutID && (clearTimeout(t.timeoutID), t.timeoutID = null)
                        }, t
                    }
                    return s.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive(), this.props.reportPlayerInstanceStarted(this.state.playerRefID)
                    }, t.prototype.render = function() {
                        var e, t = this.props.clip.broadcaster && c.createElement(v.a, {
                            to: "/" + this.props.clip.broadcaster.login,
                            onClick: this.props.closeModal,
                            "data-a-target": "clip-modal-broadcaster-link"
                        }, this.props.clip.broadcaster.login);
                        return e = this.props.clip.game && t ? Object(d.d)("{broadcaster} playing {game}", {
                            broadcaster: t,
                            game: c.createElement(v.a, {
                                to: "" + Object(S.c)(this.props.clip.game.name),
                                onClick: this.props.closeModal,
                                "data-a-target": "clip-modal-game-link"
                            }, this.props.clip.game.name)
                        }, "ClipsViewModalContent") : t, c.createElement(N.xb, {
                            className: "clips-view-modal-content",
                            background: N.r.Base
                        }, c.createElement(N.Va, {
                            padding: {
                                bottom: 2
                            }
                        }, c.createElement(N.o, {
                            ratio: N.p.Aspect16x9
                        }, c.createElement("iframe", {
                            src: this.props.clip.embedURL,
                            width: "100%",
                            height: "100%",
                            allowFullScreen: !0
                        }))), c.createElement(N.Va, {
                            padding: {
                                x: 2,
                                bottom: 2
                            }
                        }, c.createElement(N.Va, {
                            display: N.W.Flex,
                            flexWrap: N.Z.NoWrap
                        }, c.createElement(N.Va, {
                            flexGrow: 1,
                            margin: {
                                right: 1
                            }
                        }, c.createElement(b.a, {
                            onClickOut: this.dismissBalloon
                        }, c.createElement(k.a, {
                            text: this.props.clip.url,
                            icon: !0,
                            iconAsset: N.nb.Link,
                            onSelection: this.copyClipURL,
                            "data-a-target": "clip-share-input"
                        }, c.createElement(N.u, {
                            show: this.state.isShowingBalloon,
                            direction: N.v.TopRight
                        }, c.createElement(N.Sa, {
                            onClick: this.dismissBalloon
                        }, c.createElement(N.Va, {
                            padding: 1
                        }, c.createElement(N.V, {
                            bold: !0
                        }, Object(d.d)("Link copied to clipboard", "ClipsViewModalContent")))))))), c.createElement(T.a, {
                            clip: this.props.clip,
                            pageType: this.props.pageType
                        }), c.createElement(x, {
                            clip: this.props.clip,
                            updateModalViewState: this.props.updateModalViewState
                        }))), c.createElement(N.Va, {
                            padding: {
                                x: 2,
                                bottom: 2
                            },
                            display: N.W.Flex,
                            flexWrap: N.Z.NoWrap,
                            justifyContent: N.Ua.Between,
                            fullWidth: !0,
                            overflow: N.Ya.Hidden
                        }, c.createElement(N.Va, {
                            flexGrow: 1,
                            ellipsis: !0
                        }, c.createElement(N.Na, {
                            ellipsis: !0
                        }, c.createElement(N.xb, {
                            display: N.W.Flex,
                            fontSize: N.Aa.Size5
                        }, c.createElement(N.Va, {
                            ellipsis: !0
                        }, this.props.clip.title), c.createElement(N.Va, {
                            flexShrink: 0
                        }, c.createElement(N.V, {
                            type: N.Nb.Span,
                            color: N.O.Alt2
                        }, " • ", Object(d.d)("{created, date, medium}", {
                            created: new Date(this.props.clip.createdAt)
                        }, "ClipsViewModalContent"))))), c.createElement(N.Na, {
                            ellipsis: !0
                        }, c.createElement(N.xb, {
                            color: N.O.Alt2
                        }, e, e && !!this.props.clip.curator && c.createElement("span", null, " • "), this.props.clip.curator && Object(d.d)("Clipped by {curator}", {
                            curator: c.createElement(v.a, {
                                to: "/" + this.props.clip.curator.login,
                                onClick: this.props.closeModal,
                                "data-a-target": "clip-modal-curator-link"
                            }, this.props.clip.curator.login)
                        }, "ClipsViewModalContent")))), c.createElement(N.xb, {
                            display: N.W.Flex,
                            padding: {
                                bottom: 2,
                                left: 2
                            },
                            fontSize: N.Aa.Size5,
                            color: N.O.Alt2,
                            flexShrink: 0
                        }, c.createElement(N.Va, {
                            margin: {
                                right: .5
                            },
                            alignItems: N.f.Center,
                            display: N.W.Flex
                        }, c.createElement(N.mb, {
                            asset: N.nb.GlyphViews
                        })), Object(d.d)("{viewCount, number} views", {
                            viewCount: this.props.clip.viewCount
                        }, "ClipsViewModalContent"))))
                    }, t = s.__decorate([Object(m.c)("ClipsViewModalContent")], t)
                }(c.Component),
                P = n("S1Za");
            var V = Object(i.connect)(null, function(e) {
                    return Object(a.bindActionCreators)({
                        reportPlayerInstanceStarted: P.b
                    }, e)
                })(L),
                F = (n("9a8W"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onKeyDown = function(e) {
                            var n = e.charCode || e.keyCode;
                            n === f.a.Left ? t.updateClipBackward() : n === f.a.Right && t.updateClipForward()
                        }, t.updateClipForward = function() {
                            t.updateClipIndex(t.props.clipIndex + 1)
                        }, t.updateClipBackward = function() {
                            t.updateClipIndex(t.props.clipIndex - 1)
                        }, t
                    }
                    return s.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive(), this.setUpArrowListeners()
                    }, t.prototype.render = function() {
                        var e = null,
                            t = null;
                        this.props.clipIndex > 0 && (e = c.createElement(N.Va, {
                            position: N.db.Absolute,
                            display: N.W.Flex,
                            alignItems: N.f.Stretch,
                            className: "clip-carousel-button clip-carousel-button--left"
                        }, c.createElement(N.A, {
                            ariaLabel: Object(d.d)("Previous clip", "ClipsViewModalNavigation"),
                            type: N.C.Primary,
                            icon: N.nb.AngleLeft,
                            onClick: this.updateClipBackward,
                            "data-test-selector": "clips-view-modal-navigation-back"
                        })));
                        var n = this.props.getClips();
                        return this.props.loadMoreClips && n.length - this.props.clipIndex < 4 && this.props.loadMoreClips(), this.props.clipIndex < n.length - 1 && (t = c.createElement(N.Va, {
                            position: N.db.Absolute,
                            display: N.W.Flex,
                            alignItems: N.f.Stretch,
                            className: "clip-carousel-button clip-carousel-button--right"
                        }, c.createElement(N.A, {
                            ariaLabel: Object(d.d)("Next clip", "ClipsViewModalNavigation"),
                            type: N.C.Primary,
                            icon: N.nb.AngleRight,
                            onClick: this.updateClipForward,
                            "data-test-selector": "clips-view-modal-navigation-forward"
                        }))), c.createElement(N.Va, {
                            className: "clips-view-modal-navigation"
                        }, e, c.createElement(V, {
                            clip: this.props.clip,
                            updateModalViewState: this.props.updateModalViewState,
                            pageType: this.props.pageType,
                            closeModal: this.props.closeModal
                        }), t)
                    }, t.prototype.componentWillUnmount = function() {
                        document.removeEventListener("keydown", this.onKeyDown)
                    }, t.prototype.setUpArrowListeners = function() {
                        document.addEventListener("keydown", this.onKeyDown)
                    }, t.prototype.updateClipIndex = function(e) {
                        var t = Math.max(0, e),
                            n = this.props.getClips();
                        n.length - t < 4 && this.props.loadMoreClips && this.props.loadMoreClips(), t < n.length && this.props.showModal(G, {
                            getClips: this.props.getClips,
                            clip: n[t],
                            clipIndex: t,
                            loadMoreClips: this.props.loadMoreClips,
                            pageType: this.props.pageType
                        })
                    }, t
                }(c.Component)),
                U = Object(m.c)("ClipsViewModalNavigation")(F);
            var A = Object(i.connect)(null, function(e) {
                    return Object(a.bindActionCreators)({
                        showModal: o.d,
                        closeModal: o.c
                    }, e)
                })(U),
                W = (n("ygyh"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            modalView: r.View
                        }, t.setToViewState = function() {
                            t.updateClipsModalViewState(r.View)
                        }, t.updateClipsModalViewState = function(e) {
                            t.setState({
                                modalView: e
                            })
                        }, t
                    }
                    return s.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e, t, n = ((e = {})["clips-modal-view"] = !0, e["clips-modal-view--wide"] = !1, e);
                        switch (this.state.modalView) {
                            case r.Report:
                                t = c.createElement(h.a, {
                                    title: Object(d.d)("Report this Clip", "ClipsViewModal"),
                                    reportContext: {
                                        contentType: g.a.Clip,
                                        contentID: this.props.clip.slug,
                                        targetUserID: this.props.clip.broadcaster && this.props.clip.broadcaster.id || "",
                                        additionalTrackingID: this.props.clip.curator && this.props.clip.curator.id || ""
                                    },
                                    onClose: this.setToViewState
                                });
                                break;
                            case r.Delete:
                                t = c.createElement(p.d, {
                                    slug: this.props.clip.slug,
                                    onClose: this.setToViewState
                                });
                                break;
                            case r.DeleteAll:
                                t = c.createElement(p.e, {
                                    slug: this.props.clip.slug,
                                    onClose: this.setToViewState
                                });
                                break;
                            case r.Ban:
                            case r.Timeout:
                                if (this.props.clip.curator && this.props.clip.broadcaster) {
                                    t = c.createElement(p.b, {
                                        targetUser: {
                                            displayName: this.props.clip.curator.displayName || "",
                                            login: this.props.clip.curator.login || ""
                                        },
                                        broadcasterID: this.props.clip.broadcaster.id || "",
                                        isTemporary: this.state.modalView === r.Timeout,
                                        onClose: this.setToViewState
                                    });
                                    break
                                }
                            default:
                                t = c.createElement(A, {
                                    getClips: this.props.getClips,
                                    clip: this.props.clip,
                                    clipIndex: this.props.clipIndex,
                                    updateModalViewState: this.updateClipsModalViewState,
                                    loadMoreClips: this.props.loadMoreClips,
                                    pageType: this.props.pageType
                                }), n["clips-modal-view--wide"] = !0
                        }
                        return c.createElement(N.Va, {
                            className: l(n)
                        }, t, c.createElement(u.a, {
                            closeOnBackdropClick: !0,
                            closeOnPageNavigation: !0
                        }))
                    }, t
                }(c.Component)),
                B = Object(m.c)("ClipsViewModal")(W);
            var G = Object(i.connect)(null, function(e) {
                return Object(a.bindActionCreators)({
                    showModal: o.d
                }, e)
            })(B);
            n.d(t, "a", function() {
                return G
            }), n.d(t, !1, function() {})
        },
        OUrp: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            }), n.d(t, "d", function() {
                return o
            }), n.d(t, "e", function() {
                return s
            }), n.d(t, "c", function() {
                return r
            }), n.d(t, "b", function() {
                return i
            });
            var r, i, a = "carousel-player__main-description",
                o = "carousel-player-left-button",
                s = "carousel-player-right-button";
            ! function(e) {
                e[e.Horizontal = 1] = "Horizontal", e[e.Vertical = 2] = "Vertical"
            }(r || (r = {})),
            function(e) {
                e[e.Stream = 1] = "Stream", e[e.Vod = 2] = "Vod"
            }(i || (i = {}))
        },
        OhvS: function(e, t, n) {
            var r = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "video"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Video"
                        }
                    },
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
                                value: "game"
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "FragmentSpread",
                                    name: {
                                        kind: "Name",
                                        value: "game"
                                    },
                                    directives: []
                                }]
                            }
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "lengthSeconds"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "owner"
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "FragmentSpread",
                                    name: {
                                        kind: "Name",
                                        value: "user"
                                    },
                                    directives: []
                                }]
                            }
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "previewThumbnailURL"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "width"
                                },
                                value: {
                                    kind: "IntValue",
                                    value: "400"
                                }
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "height"
                                },
                                value: {
                                    kind: "IntValue",
                                    value: "225"
                                }
                            }],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "publishedAt"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "title"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "viewCount"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "contentTags"
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "FragmentSpread",
                                    name: {
                                        kind: "Name",
                                        value: "tagFragment"
                                    },
                                    directives: []
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 359
                }
            };
            r.loc.source = {
                body: '#import "twilight/features/tags/models/tag-fragment.gql"\n#import "twilight/pages/front/v2/queries/user-fragment.gql"\n#import "twilight/pages/front/v2/queries/game-fragment.gql"\nfragment video on Video {\nid\ngame {\n...game\n}\nlengthSeconds\nowner {\n...user\n}\npreviewThumbnailURL(width: 400 height: 225)\npublishedAt\ntitle\nviewCount\ncontentTags {\n...tagFragment\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var i = {};

            function a(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !i[t] && (i[t] = !0, !0)
                })
            }
            r.definitions = r.definitions.concat(a(n("iiOx").definitions)), r.definitions = r.definitions.concat(a(n("fga6").definitions)), r.definitions = r.definitions.concat(a(n("0ubH").definitions)), e.exports = r
        },
        On2s: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            }), n.d(t, "b", function() {
                return v
            });
            var r, i = n("mrSG"),
                a = n("/7QA"),
                o = n("8rUg"),
                s = n.n(o),
                l = n("ZrRH"),
                c = n.n(l),
                d = n("6H22"),
                u = n.n(d),
                p = n("X7a7"),
                m = n("YhoA"),
                h = n("Pcnk"),
                g = n("mz1O"),
                f = a.o.logger.withCategory("metadata-info");
            ! function(e) {
                e.Hearthstone = "hearthstone", e.PUBG = "playerunknown's battlegrounds", e.League = "league of legends", e.Overwatch = "overwatch", e.CSGO = "counter-strike%3a global offensive"
            }(r || (r = {}));
            var v = function(e, t) {
                    return i.__awaiter(void 0, void 0, Promise, function() {
                        var n, r, o, s, l, c;
                        return i.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return n = t.toLowerCase(), r = e.counterStrikeGlobalOffensive && e.counterStrikeGlobalOffensive.skill, o = e.hearthstone && e.hearthstone.broadcasterHeroClass, s = e.leagueOfLegends && e.leagueOfLegends.championID, l = e.overwatch && e.overwatch.broadcasterCharacter, r && n === m.a.CounterStrike ? [4, b(r)] : [3, 2];
                                case 1:
                                    return [2, i.sent()];
                                case 2:
                                    return o && n === m.a.Hearthstone ? [4, k(o)] : [3, 4];
                                case 3:
                                    return [2, i.sent()];
                                case 4:
                                    return l && n === m.a.Overwatch ? [4, y(l)] : [3, 6];
                                case 5:
                                    return [2, i.sent()];
                                case 6:
                                    if (s && n === m.a.LeagueOfLegends && (c = a.o.store.getState()).directory)
                                        if (c.directory.leagueOfLegends.championsMap) {
                                            if (c.directory.leagueOfLegends.championsMap) return [2, C(s, c.directory.leagueOfLegends.championsMap, c.directory.leagueOfLegends.version)]
                                        } else a.o.store.dispatch(Object(p.b)());
                                    i.label = 7;
                                case 7:
                                    return [2, null]
                            }
                        })
                    })
                },
                b = function(e) {
                    return i.__awaiter(void 0, void 0, Promise, function() {
                        var t, n, r;
                        return i.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return i.trys.push([0, 2, , 3]), [4, Object(g.a)()];
                                case 1:
                                    return t = i.sent(), (n = {})[e] = t[0]["Skill Group"][e - 1], [2, {
                                        name: n[e].display_name,
                                        label: Object(h.b)(h.a.CSGOSkillGroup),
                                        spriteDetails: {
                                            imageWidth: n[e].image_width,
                                            imageHeight: n[e].image_height,
                                            spriteOffsetX: n[e].sprite_x_offset,
                                            spriteOffsetY: n[e].sprite_y_offset,
                                            spriteURL: s.a
                                        }
                                    }];
                                case 2:
                                    return r = i.sent(), f.error(r, "Failed to load Counter-Strike skill group data"), [2, null];
                                case 3:
                                    return [2]
                            }
                        })
                    })
                },
                k = function(e) {
                    return i.__awaiter(void 0, void 0, void 0, function() {
                        var t, n, r;
                        return i.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return i.trys.push([0, 2, , 3]), [4, Object(g.b)()];
                                case 1:
                                    return t = i.sent(), n = {}, t[0].Class.forEach(function(e) {
                                        n[e.class] = e
                                    }), [2, {
                                        name: n[e].display_name,
                                        label: Object(h.b)(h.a.HearthstoneClass),
                                        spriteDetails: {
                                            imageWidth: n[e].image_width,
                                            imageHeight: n[e].image_height,
                                            spriteOffsetX: n[e].sprite_x_offset,
                                            spriteOffsetY: n[e].sprite_y_offset,
                                            spriteURL: c.a
                                        }
                                    }];
                                case 2:
                                    return r = i.sent(), f.error(r, "Failed to load Hearthstone class data"), [2, null];
                                case 3:
                                    return [2]
                            }
                        })
                    })
                },
                y = function(e) {
                    return i.__awaiter(void 0, void 0, void 0, function() {
                        var t, n, r, a, o, s, l, c, d, p, m, v;
                        return i.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return i.trys.push([0, 2, , 3]), [4, Object(g.d)()];
                                case 1:
                                    for (n = i.sent(), r = void 0, a = 0, o = n; a < o.length; a++)
                                        for (s in r = o[a])
                                            if (r.hasOwnProperty(s))
                                                for (l = r[s], c = 0, d = l; c < d.length; c++)
                                                    if ((p = d[c]).character === e) return (t = {})[p.character] = p, [2, {
                                                        name: (m = t)[e].display_name,
                                                        label: Object(h.b)(h.a.OverwatchCharacter),
                                                        spriteDetails: {
                                                            imageWidth: m[e].image_width,
                                                            imageHeight: m[e].image_height,
                                                            spriteOffsetX: m[e].sprite_x_offset,
                                                            spriteOffsetY: m[e].sprite_y_offset,
                                                            spriteURL: u.a
                                                        }
                                                    }];
                                    return [2, null];
                                case 2:
                                    return v = i.sent(), f.error(v, "Failed to load Overwatch character data"), [2, null];
                                case 3:
                                    return [2]
                            }
                        })
                    })
                },
                C = function(e, t, n) {
                    if (!t || !e) return null;
                    var r = t[e],
                        i = "https://ddragon.leagueoflegends.com/cdn/" + n + "/img/sprite/" + r.image.sprite;
                    return {
                        name: r.name,
                        label: Object(h.b)(h.a.LeagueChampion),
                        spriteDetails: {
                            imageWidth: r.image.w,
                            imageHeight: r.image.h,
                            spriteOffsetX: r.image.x,
                            spriteOffsetY: r.image.y,
                            spriteURL: i
                        }
                    }
                }
        },
        Oy4H: function(e, t, n) {},
        PDCe: function(e, t) {
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
                        }
                    }],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
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
                                            name: {
                                                kind: "Name",
                                                value: "id"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 138
                }
            };
            n.loc.source = {
                body: "mutation ReportUserModal_ReportUserCommunity($input: ReportUserInCommunityInput!) {\nreportUserInCommunity(input: $input) {\nuser {\nid\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        Pcnk: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            }), n.d(t, "b", function() {
                return a
            });
            var r, i = n("/7QA");
            ! function(e) {
                e[e.CSGOMap = 0] = "CSGOMap", e[e.CSGOSkillGroup = 1] = "CSGOSkillGroup", e[e.HearthstoneClass = 2] = "HearthstoneClass", e[e.HearthstoneMode = 3] = "HearthstoneMode", e[e.LeagueChampion = 4] = "LeagueChampion", e[e.OverwatchCharacter = 5] = "OverwatchCharacter"
            }(r || (r = {}));
            var a = function(e) {
                switch (e) {
                    case r.CSGOMap:
                        return Object(i.d)("Map", "CSGOMapFilter");
                    case r.CSGOSkillGroup:
                        return Object(i.d)("Rank", "CSGORankFilter");
                    case r.HearthstoneClass:
                        return Object(i.d)("Class", "HearthstoneClassFilter");
                    case r.HearthstoneMode:
                        return Object(i.d)("Mode", "HearthstoneModeFilter");
                    case r.LeagueChampion:
                        return Object(i.d)("Champion", "LeagueFilter");
                    case r.OverwatchCharacter:
                        return Object(i.d)("Hero", "OverwatchFilter");
                    default:
                        return ""
                }
            }
        },
        QV0j: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            });
            var r = n("oB8h"),
                i = function(e) {
                    switch (e) {
                        case r.a.Live:
                            return r.a.Live;
                        case r.a.Premiere:
                            return r.a.Premiere;
                        case r.a.Rerun:
                            return r.a.Rerun;
                        case r.a.WatchParty:
                            return r.a.WatchParty;
                        default:
                            return null
                    }
                }
        },
        RQ6e: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                i = n("TSYQ"),
                a = n("q1tI"),
                o = n("/7QA"),
                s = n("fvjX"),
                l = n("yR8l"),
                c = n("GnwI"),
                d = n("+PZR"),
                u = n("Ue10"),
                p = n("gIsd"),
                m = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleChange = function(e) {
                            t.props.onChange && t.props.onChange(e.target.value)
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidUpdate = function() {
                        this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = null,
                            t = Object(o.d)("Select One...", "ReportUserModal");
                        this.props.data.loading ? e = [a.createElement("option", {
                            key: "Loading"
                        }, Object(o.d)("Loading...", "ReportReasonsSelect"))] : e = (this.props.data.reportReasons || Object(d.b)()).map(function(e) {
                            return a.createElement("option", {
                                key: e.id,
                                value: e.id
                            }, e.text)
                        });
                        return a.createElement(u.Va, {
                            margin: {
                                bottom: 2
                            }
                        }, a.createElement(u.Ca, {
                            id: "reporting-modal__select",
                            label: Object(o.d)("Select Reason (required)", "ReportUserModal")
                        }, a.createElement(u.sb, {
                            id: "reporting-modal__select",
                            "data-test-selector": "reporting-modal.select",
                            disabled: this.props.data.loading || !!this.props.data.error,
                            onChange: this.handleChange,
                            defaultValue: t
                        }, a.createElement("option", {
                            disabled: !0,
                            key: "default"
                        }, t), e)))
                    }, t
                }(a.Component),
                h = Object(s.compose)(Object(l.a)(p, {
                    options: function(e) {
                        return {
                            variables: {
                                content: e.reportContentType
                            }
                        }
                    }
                }), Object(c.c)("ReportReasonSelect"))(m);
            n("y4Ne");
            n.d(t, "a", function() {
                return f
            }), n.d(t, "b", function() {
                return g
            }), n.d(t, "c", function() {
                return v
            });
            var g, f = "community_rules_violation";
            ! function(e) {
                e[e.Unsubmitted = 0] = "Unsubmitted", e[e.Success = 1] = "Success", e[e.FormError = 2] = "FormError", e[e.MutationError = 3] = "MutationError", e[e.UserError = 4] = "UserError", e[e.CommunityError = 5] = "CommunityError"
            }(g || (g = {}));
            var v = function(e) {
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
                    }, "ReportUser"), t.handleSubmit = function(e) {
                        if (e.preventDefault(), t.state.reason && t.state.description.length > 0) {
                            if (t.state.reason === f && !t.state.selectedCommunityID) {
                                if (!t.props.targetUser.directories.nodes.length) return void t.props.onError(g.CommunityError);
                                t.props.onError(g.FormError)
                            }
                            t.props.onSubmit(t.state.reason || "", t.state.description, t.state.selectedCommunityID, t.state.selectedCommunityName)
                        } else t.props.onError(g.FormError)
                    }, t.handleTextAreaChange = function(e) {
                        t.setState({
                            description: e.target.value
                        })
                    }, t.handleReasonChange = function(e) {
                        t.setState({
                            reason: e,
                            isCommunityReason: !1
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(u.Va, {
                        display: u.W.Flex,
                        flexDirection: u.Y.Column,
                        alignItems: u.f.Center,
                        justifyContent: u.Ua.Center
                    }, this.renderStatusMessage(), this.renderBody())
                }, t.prototype.renderBody = function() {
                    return this.props.submitStatus === g.Success ? a.createElement("div", null, a.createElement(u.z, {
                        onClick: this.props.onClose
                    }, a.createElement(u.Va, {
                        padding: {
                            x: 2
                        }
                    }, Object(o.d)("Close", "ReportUser")))) : a.createElement("div", null, a.createElement(u.Va, {
                        "data-test-selector": "reporting.title",
                        margin: {
                            bottom: 1
                        },
                        "data-a-target": "reporting-channel-name"
                    }, a.createElement(u.V, {
                        type: u.Nb.H4
                    }, this.props.title), a.createElement(u.xb, {
                        color: u.O.Alt2,
                        margin: {
                            top: 1
                        }
                    }, this.headerMessage)), a.createElement("form", null, a.createElement(u.xb, {
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
                    }), a.createElement(u.Ca, {
                        id: "reporting__text-area",
                        label: Object(o.d)("Description (required)", "ReportUser")
                    }, a.createElement(u.Kb, {
                        defaultValue: this.props.defaultDescription,
                        onChange: this.handleTextAreaChange
                    }))), a.createElement(u.xb, {
                        display: u.W.Flex,
                        justifyContent: u.Ua.Center
                    }, a.createElement(u.z, {
                        onClick: this.handleSubmit
                    }, a.createElement(u.Va, {
                        padding: {
                            x: 2
                        }
                    }, Object(o.d)("Send", "ReportUser"))))))
                }, t.prototype.renderStatusMessage = function() {
                    var e = null;
                    switch (this.props.submitStatus) {
                        case g.FormError:
                            e = Object(o.d)("Reason and Description are required.", "ReportUser");
                            break;
                        case g.MutationError:
                            e = Object(o.d)("Sorry, a network error occurred when submitting your report. Please try again later.", "ReportUser");
                            break;
                        case g.Success:
                            e = Object(o.d)("Thank you for your report.", "ReportUser");
                            break;
                        case g.UserError:
                            e = Object(o.d)("This account could not be reported. It may have already been suspended, or the owner may have deleted it.", "ReportUser");
                            break;
                        case g.CommunityError:
                            e = Object(o.d)("A report of this type could not be sent because this user has not selected a Community.", "ReportUser");
                            break;
                        default:
                            return null
                    }
                    var t = i({
                        "reporting__error-container": this.props.submitStatus !== g.Success,
                        "reporting__success-container": this.props.submitStatus === g.Success
                    });
                    return a.createElement(u.xb, {
                        className: t,
                        fullWidth: this.props.submitStatus !== g.Success,
                        "data-test-selector": "reporting.error",
                        margin: {
                            bottom: 2
                        },
                        padding: 1
                    }, e)
                }, t
            }(a.Component)
        },
        RXle: function(e, t, n) {
            "use strict";
            var r = n("86FS");
            n.d(t, "VideoPreviewCard", function() {
                return r.a
            });
            n("0T/G");
            var i = n("0Rl0");
            n.d(t, "VideoPreviewCardPlaceholder", function() {
                return i.a
            })
        },
        SWMh: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            });
            var r = n("mrSG"),
                i = n("b6Yk"),
                a = function(e, t, n) {
                    return r.__awaiter(void 0, void 0, Promise, function() {
                        var a, o;
                        return r.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    a = null, r.label = 1;
                                case 1:
                                    return r.trys.push([1, 3, , 4]), [4, i.a.get("/v5/videos/" + e + "/markers")];
                                case 2:
                                    return (o = r.sent()).body && o.body.markers.game_changes && (a = o.body.markers.game_changes.sort(function(e, t) {
                                        return e.time - t.time
                                    }).map(function(e, n, r) {
                                        var i = r[n + 1];
                                        return {
                                            duration: i ? i.time - e.time : t - e.time,
                                            offset: e.time,
                                            label: e.label,
                                            thumbnailUrl: e.thumbnail.sheet_url,
                                            videoID: o.body.vod_id
                                        }
                                    }), n && n.boxArtURL && a.unshift({
                                        duration: a[0].offset,
                                        videoID: e,
                                        offset: 0,
                                        label: n.name,
                                        thumbnailUrl: n.boxArtURL
                                    })), [3, 4];
                                case 3:
                                    return r.sent(), [3, 4];
                                case 4:
                                    return [2, a || []]
                            }
                        })
                    })
                }
        },
        TDc0: function(e, t, n) {
            "use strict";
            var r, i, a, o, s;
            n.d(t, "a", function() {
                    return a
                }), n.d(t, "c", function() {
                    return o
                }), n.d(t, "b", function() {
                    return s
                }), n.d(t, "e", function() {
                    return c
                }), n.d(t, "d", function() {
                    return d
                }), n.d(t, "f", function() {
                    return u
                }),
                function(e) {
                    e.NoSkip = "no_skip"
                }(r || (r = {})),
                function(e) {
                    e.Yes = "yes"
                }(i || (i = {})),
                function(e) {
                    e.Yes = "yes"
                }(a || (a = {})),
                function(e) {
                    e.ENABLED = "enabled"
                }(o || (o = {})),
                function(e) {
                    e.Chat = "chat", e.NoChat = "no_chat"
                }(s || (s = {}));
            var l = new Set([s.Chat.toString(), s.NoChat.toString()]),
                c = function(e) {
                    return e === r.NoSkip
                },
                d = function(e, t) {
                    return c(e) && !!t && l.has(t)
                },
                u = function(e) {
                    return e.getTime() >= p().getTime()
                },
                p = function() {
                    return new Date((new Date).getTime() - 12096e5)
                }
        },
        TVuH: function(e, t, n) {},
        Uive: function(e, t, n) {
            "use strict";
            var r = n("/MKj"),
                i = n("mrSG"),
                a = n("q1tI"),
                o = n("/7QA"),
                s = n("N0BP"),
                l = n("MPw5"),
                c = n("cTNz"),
                d = n("KxT4"),
                u = n("YUvD"),
                p = "#google_ads_iframe_\\/3576121\\/twitch\\/directory_0",
                m = "#google_ads_iframe_\\/3576121\\/twitch\\/directory_1",
                h = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.logger = o.j.withCategory("ad-slot"), n.createSlot = function(e) {
                            return i.__awaiter(n, void 0, void 0, function() {
                                var t;
                                return i.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            if (this.state.slotCreated) return [2];
                                            this.setState({
                                                slotCreated: !0
                                            }), n.label = 1;
                                        case 1:
                                            return n.trys.push([1, 3, , 4]), [4, l.a.createSlot(e.slotID, e.adUnit, e.adSize, e.targeting, e.autoEnable, e.gdpr.blockConsentRequiredContent)];
                                        case 2:
                                            return t = n.sent(), Object(c.h)(t.getSlotElementId()), this.setState({
                                                slot: t
                                            }), [3, 4];
                                        case 3:
                                            return n.sent(), this.logger.warn("Unable to create ad slot", {
                                                slotID: e.slotID,
                                                adUnit: e.adUnit,
                                                adSize: e.adSize,
                                                targeting: e.targeting,
                                                autoEnable: e.autoEnable,
                                                blockConsentRequiredContent: e.gdpr.blockConsentRequiredContent
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
                                var r;
                                if (n.props.slotID === c.b.directory.banner) return void((r = n.slotRef.querySelector(p)) && 1 !== r.clientWidth && n.setState({
                                    shouldDisplay: !0
                                }, function() {
                                    return n.slotRendered(e.slot)
                                }));
                                if (n.props.slotID === c.b.directory.rectangle) return void((r = n.slotRef.querySelector(m)) && 1 !== r.clientWidth && n.setState({
                                    shouldDisplay: !0
                                }, function() {
                                    return n.slotRendered(e.slot)
                                }));
                                n.setState({
                                    shouldDisplay: !0
                                }, function() {
                                    return n.slotRendered(e.slot)
                                })
                            }
                        }, n.slotRendered = function(e) {
                            n.props.slotRendered && n.props.slotRendered(e)
                        }, n.shouldCreateSlot = function(e) {
                            return e.gdpr.status !== d.b.Loading && e.trackingSet
                        }, n.state = {
                            shouldDisplay: !1
                        }, n
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        c.g.addListener(c.f, this.onSlotRenderEnd), this.shouldCreateSlot(this.props) ? (this.logger.debug("Consent ready. Tracking is set. Creating slot (componentDidMount)", this.props.slotID), this.createSlot(this.props)) : this.logger.debug("Consent not ready or Tracking is not set. Skipping slot creation (componentDidMount)", this.props.slotID)
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        this.state.slotCreated || (!this.shouldCreateSlot(e) || e.gdpr.status === this.props.gdpr.status && e.trackingSet === this.props.trackingSet ? this.logger.debug("Tracking is not set. Skipping slot creation (componentWillReceiveProps)", this.props.slotID) : (this.logger.debug("Tracking is set. Creating slot (componentWillReceiveProps)", this.props.slotID), this.createSlot(e)))
                    }, t.prototype.componentWillUnmount = function() {
                        this.logger.debug("Destroying Slot (componentWillUnmount)", this.props.slotID), c.g.removeListener(c.f, this.onSlotRenderEnd), this.state.slot && l.a.destroySlot(this.state.slot)
                    }, t.prototype.shouldComponentUpdate = function(e, t) {
                        return t.shouldDisplay !== this.state.shouldDisplay
                    }, t.prototype.render = function() {
                        var e = i.__assign({}, this.props.injectStyles);
                        return this.state.shouldDisplay || (e.display = "none"), a.createElement("div", i.__assign({
                            style: e,
                            id: this.props.slotID,
                            ref: this.setRef
                        }, Object(s.a)(this.props)))
                    }, t
                }(a.Component),
                g = Object(u.a)(d.c.Amazon)(h);
            var f = Object(r.connect)(function(e) {
                return {
                    trackingSet: e.ads.trackingSet
                }
            })(g);
            n.d(t, "a", function() {
                return f
            })
        },
        Vn2t: function(e, t, n) {
            var r = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "shelf"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Shelf"
                        }
                    },
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
                                value: "title"
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "FragmentSpread",
                                    name: {
                                        kind: "Name",
                                        value: "shelfTitle"
                                    },
                                    directives: []
                                }]
                            }
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "content"
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "edges"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "shelfContentEdge"
                                            },
                                            directives: []
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }, {
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "shelfTitle"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "ShelfTitle"
                        }
                    },
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "key"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "context"
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "FragmentSpread",
                                    name: {
                                        kind: "Name",
                                        value: "game"
                                    },
                                    directives: []
                                }]
                            }
                        }]
                    }
                }, {
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "shelfContentEdge"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "ShelfContentEdge"
                        }
                    },
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "cursor"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "node"
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "FragmentSpread",
                                    name: {
                                        kind: "Name",
                                        value: "shelfClip"
                                    },
                                    directives: []
                                }, {
                                    kind: "FragmentSpread",
                                    name: {
                                        kind: "Name",
                                        value: "video"
                                    },
                                    directives: []
                                }, {
                                    kind: "FragmentSpread",
                                    name: {
                                        kind: "Name",
                                        value: "stream"
                                    },
                                    directives: []
                                }, {
                                    kind: "FragmentSpread",
                                    name: {
                                        kind: "Name",
                                        value: "game"
                                    },
                                    directives: []
                                }]
                            }
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "trackingID"
                            },
                            arguments: [],
                            directives: []
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 518
                }
            };
            r.loc.source = {
                body: '#import "twilight/pages/front/v2/queries/clip-fragment.gql"\n#import "twilight/pages/front/v2/queries/video-fragment.gql"\n#import "twilight/pages/front/v2/queries/stream-fragment.gql"\n#import "twilight/pages/front/v2/queries/game-fragment.gql"\nfragment shelf on Shelf {\nid\ntitle {\n...shelfTitle\n}\ncontent {\nedges {\n...shelfContentEdge\n}\n}\n}\nfragment shelfTitle on ShelfTitle {\nkey\ncontext {\n...game\n}\n}\nfragment shelfContentEdge on ShelfContentEdge {\ncursor\nnode {\n...shelfClip\n...video\n...stream\n...game\n}\ntrackingID\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var i = {};

            function a(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !i[t] && (i[t] = !0, !0)
                })
            }
            r.definitions = r.definitions.concat(a(n("jMH6").definitions)), r.definitions = r.definitions.concat(a(n("OhvS").definitions)), r.definitions = r.definitions.concat(a(n("A8tl").definitions)), r.definitions = r.definitions.concat(a(n("0ubH").definitions)), e.exports = r
        },
        Vsf8: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ClipsModalDeleteAll_Clip"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "slug"
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
                            name: {
                                kind: "Name",
                                value: "clip"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "slug"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "slug"
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
                                        value: "video"
                                    },
                                    arguments: [],
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
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "broadcast"
                                    },
                                    arguments: [],
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
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 101
                }
            };
            n.loc.source = {
                body: "query ClipsModalDeleteAll_Clip($slug: ID!) {\nclip(slug: $slug) {\nid\nvideo {\nid\n}\nbroadcast {\nid\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        VwyG: function(e, t, n) {
            "use strict";
            var r = n("/MKj"),
                i = n("kRBY"),
                a = n("mrSG"),
                o = n("q1tI"),
                s = n("oJmH"),
                l = n("/7QA"),
                c = n("yR8l"),
                d = n("GnwI"),
                u = n("nt5g"),
                p = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.logger = l.j.withCategory("role-restricted"), n.state = {
                            loading: t.isLoggedIn,
                            permitted: !1,
                            roles: {
                                staff: !1,
                                editor: !1,
                                owner: !1
                            },
                            error: null
                        }, n
                    }
                    return a.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
                        var t = e.data && e.data.loading,
                            n = this.props.data && this.props.data.loading;
                        (!this.props.isLoggedIn || t && !n) && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        this.maybeSetRoleState(e)
                    }, t.prototype.componentDidMount = function() {
                        this.maybeSetRoleState(this.props)
                    }, t.prototype.render = function() {
                        return this.props.children(this.state)
                    }, t.prototype.maybeSetRoleState = function(e) {
                        if (e.isLoggedIn && e.data) {
                            var t = function(e) {
                                    var t = e.data,
                                        n = {
                                            staff: !1,
                                            editor: !1,
                                            owner: !1
                                        };
                                    t && !t.error && !t.loading && t.user && t.currentUser && (n.staff = !(!t.currentUser.roles || !t.currentUser.roles.isStaff), n.editor = !(!t.user.self || !t.user.self.isEditor), n.owner = t.user.id === t.currentUser.id);
                                    return n
                                }(e),
                                n = {
                                    loading: e.data.loading,
                                    permitted: function(e, t) {
                                        if (e.owner) return !0;
                                        if (e.staff && t.staff) return !0;
                                        if (e.editor && t.editor) return !0;
                                        return !1
                                    }(t, e.permittedRoles),
                                    roles: t,
                                    error: null
                                };
                            e.data.error ? (n.error = new Error(e.data.error.toString()), this.logger.warn("Unable to retrieve data from GraphQL.", {
                                err: n.error
                            })) : e.data.loading || e.data.user && e.data.currentUser || (n.error = new Error("Failed to fetch user information"), this.logger.warn("Failed to fetch user information.", {
                                err: n.error
                            })), this.setState(n)
                        }
                    }, t
                }(o.Component);
            var m = Object(s.compose)(Object(c.a)(u, {
                options: function(e) {
                    return {
                        variables: {
                            contentOwnerLogin: e.ownerLogin
                        }
                    }
                },
                skip: function(e) {
                    return !e.isLoggedIn
                }
            }), Object(d.c)("RoleRestricted"))(p);
            var h = Object(r.connect)(function(e) {
                return {
                    isLoggedIn: Object(i.f)(e)
                }
            })(m);
            n.d(t, "a", function() {
                return h
            })
        },
        WsU7: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ModerationMenu_CurrentUser"
                    },
                    variableDefinitions: [],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
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
                                        value: "isSiteAdmin"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "isStaff"
                                    },
                                    arguments: [],
                                    directives: []
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 75
                }
            };
            n.loc.source = {
                body: "query ModerationMenu_CurrentUser {\ncurrentUser {\nid\nisSiteAdmin\nisStaff\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        X7Ac: function(e, t, n) {
            "use strict";
            var r = n("wbMx");
            n.d(t, "a", function() {
                return r.a
            }), n.d(t, "b", function() {
                return r.b
            })
        },
        X7a7: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                i = n("cr+I"),
                a = n("/7QA"),
                o = n("b6Yk"),
                s = {
                    en: "en_US",
                    de: "de_DE",
                    es: "es_ES",
                    "es-mx": "es_ES",
                    fr: "fr_FR",
                    it: "it_IT",
                    hu: "hu_HU",
                    pl: "pl_PL",
                    pt: "pt_BR",
                    "pt-br": "pt_BR",
                    vi: "vn_VN",
                    tr: "tr_TR",
                    ro: "ro_RO",
                    cs: "cs_CZ",
                    el: "el_GR",
                    ru: "ru_RU",
                    th: "th_TH",
                    "zh-cn": "zh_CN",
                    "zh-tw": "zh_TW",
                    ja: "ja_JP",
                    ko: "ko_KR"
                },
                l = function(e) {
                    return e && s[e] || "en_US"
                },
                c = n("Igt5");
            n.d(t, "b", function() {
                return m
            }), n.d(t, "d", function() {
                return h
            }), n.d(t, "c", function() {
                return g
            }), n.d(t, "a", function() {
                return f
            });
            var d = "languageTags",
                u = 0,
                p = 350;

            function m() {
                var e = this;
                return function(t) {
                    clearTimeout(u), u = setTimeout(function() {
                        return r.__awaiter(e, void 0, void 0, function() {
                            var e, n, s, d, u, p;
                            return r.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        e = a.o.logger.withCategory("leagueoflegends-api"), t(Object(c.k)(!0)), r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 3, , 4]), n = a.o.intl.getLanguageCode(), s = l(n), d = o.a.getAPIURL("/api/lol/champions?" + i.stringify({
                                            locale: s,
                                            on_site: 1
                                        })).toString(), [4, o.a.get(d)];
                                    case 2:
                                        return (u = r.sent()).body ? t(Object(c.l)(u.body)) : (e.warn("LoL champion API response body was empty."), t(Object(c.j)(!0))), [3, 4];
                                    case 3:
                                        throw p = r.sent(), t(Object(c.j)(!0)), e.error(p, "Failed to load LoL champion data"), p;
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, p)
                }
            }

            function h(e, t) {
                var n = this;
                return function(i) {
                    return r.__awaiter(n, void 0, void 0, function() {
                        var n, o;
                        return r.__generator(this, function(r) {
                            return n = new Set(f()), t ? n.add(e) : n.delete(e), o = Array.from(n), a.l.set(d, o), i(Object(c.i)(o)), [2]
                        })
                    })
                }
            }

            function g(e) {
                var t = this;
                return function(n) {
                    return r.__awaiter(t, void 0, void 0, function() {
                        return r.__generator(this, function(t) {
                            return a.l.set(d, e), n(Object(c.i)(e)), [2]
                        })
                    })
                }
            }

            function f() {
                return a.l.get(d, [])
            }
        },
        XA5B: function(e, t, n) {},
        YhoA: function(e, t, n) {
            "use strict";
            var r;
            n.d(t, "a", function() {
                    return r
                }),
                function(e) {
                    e.CounterStrike = "counter-strike: global offensive", e.Hearthstone = "hearthstone", e.LeagueOfLegends = "league of legends", e.Overwatch = "overwatch"
                }(r || (r = {}))
        },
        ZbA5: function(e, t, n) {
            "use strict";
            var r, i, a, o, s = n("mrSG"),
                l = n("TSYQ"),
                c = n("q1tI"),
                d = n("/7QA"),
                u = n("oB8h"),
                p = n("Ue10");
            n("kVMo");
            ! function(e) {
                e.HostingDot = "stream-type-indicator__hosting-dot"
            }(o || (o = {}));
            var m = ((r = {})[u.a.Live] = "stream-type-indicator--live", r[u.a.Premiere] = "stream-type-indicator--premiere", r[u.a.Rerun] = "stream-type-indicator--rerun", r[u.a.WatchParty] = "stream-type-indicator--rerun", r),
                h = ((i = {})[u.a.Premiere] = p.nb.VideoPremiere, i[u.a.Rerun] = p.nb.VideoRerun, i[u.a.WatchParty] = p.nb.VideoRerun, i),
                g = ((a = {})[u.a.Premiere] = p.ob.Live, a[u.a.Rerun] = p.ob.Inherit, a[u.a.WatchParty] = p.ob.Inherit, a),
                f = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return s.__extends(t, e), t.prototype.render = function() {
                        return c.createElement(p.xb, {
                            className: this.getClassNames(),
                            color: p.O.Overlay,
                            background: p.r.Overlay,
                            padding: {
                                x: .5
                            },
                            borderRadius: p.x.Small,
                            display: p.W.Flex
                        }, c.createElement(p.Va, {
                            display: p.W.Flex,
                            alignItems: p.f.Center,
                            margin: {
                                right: .5
                            }
                        }, this.getIcon()), c.createElement(p.V, {
                            type: p.Nb.Span
                        }, this.getLabel()))
                    }, t.prototype.getClassNames = function() {
                        var e = {
                            "stream-type-indicator": !0
                        };
                        return e[m[this.props.type]] = !0, l(e)
                    }, t.prototype.getIcon = function() {
                        return this.props.hosting ? c.createElement(p.xb, {
                            borderRadius: p.x.Rounded,
                            className: "stream-type-indicator__hosting-dot",
                            "data-test-selector": o.HostingDot
                        }) : this.props.type === u.a.Live ? c.createElement(p.Va, {
                            className: "stream-type-indicator__live-wrapper",
                            display: p.W.Flex,
                            alignItems: p.f.Center
                        }, c.createElement(p.K, {
                            status: p.M.Live,
                            size: p.L.Small
                        })) : c.createElement(p.mb, {
                            asset: h[this.props.type],
                            type: g[this.props.type],
                            width: 14,
                            height: 14
                        })
                    }, t.prototype.getLabel = function() {
                        if (this.props.hosting) return Object(d.d)("Hosting", "StreamTypeIndicator");
                        switch (this.props.type) {
                            case u.a.Live:
                                return Object(d.d)("LIVE", "StreamTypeIndicator");
                            case u.a.Premiere:
                                return Object(d.d)("Premiere", "StreamTypeIndicator");
                            case u.a.Rerun:
                            case u.a.WatchParty:
                                return Object(d.d)("Rerun", "StreamTypeIndicator");
                            default:
                                return ""
                        }
                    }, t
                }(c.Component);
            n.d(t, !1, function() {
                return o
            }), n.d(t, "a", function() {
                return f
            })
        },
        ZrRH: function(e, t, n) {
            e.exports = n.p + "assets/hearthstone-classes-d5c707fb47547e9585bc.png"
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
                            return r.__generator(this, function(l) {
                                switch (l.label) {
                                    case 0:
                                        return t = this.constructOptions(t, n), i = t.headers ? t.headers["Content-Type"] : void 0, a = this.serialize(t.body, i), o = r.__assign({}, t, {
                                            body: a
                                        }), [4, this._fetch(e, o)];
                                    case 1:
                                        return s = l.sent(), [4, this.constructLegacyAPIResponse(s)];
                                    case 2:
                                        return [2, l.sent()]
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
                        return new URL(e, i.o.config.apiBaseURL)
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
                        var n = i.o.store.getState(),
                            r = {
                                Accept: "application/vnd.twitchtv.v" + (t.version || 5) + "+json; charset=UTF-8",
                                "Accept-Language": "en-us",
                                "Client-ID": i.o.config.legacyClientID,
                                "X-Requested-With": "XMLHttpRequest"
                            };
                        e.body && FormData.prototype.isPrototypeOf(e.body) || (r["Content-Type"] = "application/json; charset=UTF-8");
                        var o = Object(a.e)(n);
                        return o && (r.Authorization = "OAuth " + o.authToken, o.legacyCSRFToken && (r["Twitch-Api-Token"] = o.legacyCSRFToken)), t.excludeHeaders && t.excludeHeaders.forEach(function(e) {
                            r[e] && delete r[e]
                        }), r
                    }, e.logger = i.o.logger.withCategory("legacy-api"), e
                }()
        },
        bTcf: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "VideoShareBox_CollectionTrackingMeta"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "creatorID"
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
                                        value: "creatorID"
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
                                        value: "roles"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "isPartner"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 117
                }
            };
            n.loc.source = {
                body: "query VideoShareBox_CollectionTrackingMeta($creatorID: ID!) {\nuser(id: $creatorID) {\nid\nlogin\nroles {\nisPartner\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        cMjZ: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            });
            var r = n("o4DC");

            function i(e) {
                return e && Object(r.c)(e) || ""
            }
        },
        cRsL: function(e, t, n) {},
        dAHa: function(e, t, n) {
            "use strict";
            var r, i = n("mrSG"),
                a = n("q1tI"),
                o = n("/MKj"),
                s = n("fvjX"),
                l = n("/7QA"),
                c = n("yR8l"),
                d = n("BhFH"),
                u = n("iS14"),
                p = n("geRD"),
                m = n("f00E"),
                h = n("D7An"),
                g = n("2xye"),
                f = n("GnwI"),
                v = n("QVaV"),
                b = n("Ue10"),
                k = (n("MPK0"), "report-wizard-block"),
                y = "report-wizard-unblock",
                C = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            userBlocked: t.props.userBlocked || !1
                        }, t.renderBlock = function() {
                            return a.createElement(b.T, {
                                hoverUnderlineNone: !0,
                                onClick: t.handleBlock,
                                "data-test-selector": k
                            }, a.createElement(b.Va, {
                                display: b.W.Flex,
                                alignItems: b.f.Center
                            }, a.createElement(b.mb, {
                                type: b.ob.Brand,
                                asset: b.nb.Ban
                            }), a.createElement(b.Va, {
                                margin: {
                                    left: .5
                                }
                            }, Object(l.d)("Block {user}", {
                                user: t.props.targetUser.displayName
                            }, "ReportWizardBlockActions"))))
                        }, t.renderUnblock = function() {
                            return a.createElement(b.Va, {
                                className: "reporting-wizard__block-actions",
                                display: b.W.Flex,
                                alignItems: b.f.Center
                            }, a.createElement(b.mb, {
                                type: b.ob.Success,
                                asset: b.nb.FollowCheck
                            }), a.createElement(b.Va, {
                                margin: {
                                    right: 1
                                }
                            }, a.createElement(b.V, {
                                className: "block-user__success",
                                type: b.Nb.Span
                            }, Object(l.d)("{user} blocked", {
                                user: t.props.targetUser.displayName
                            }, "ReportWizardBlockActions"))), a.createElement(b.T, {
                                hoverUnderlineNone: !0,
                                onClick: t.handleUnblock,
                                "data-test-selector": y
                            }, a.createElement(b.Va, {
                                margin: {
                                    left: .5
                                }
                            }, Object(l.d)("Unblock", "ReportWizardBlockActions"))))
                        }, t.handleBlock = function() {
                            return i.__awaiter(t, void 0, void 0, function() {
                                return i.__generator(this, function(e) {
                                    return this.props.onBlock(), this.setState({
                                        userBlocked: !0
                                    }), [2]
                                })
                            })
                        }, t.handleUnblock = function() {
                            t.props.onUnblock(), t.setState({
                                userBlocked: !1
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = this.state.userBlocked ? this.renderUnblock() : this.renderBlock(),
                            t = Object(v.a)(this.props.targetUser.login, this.props.targetUser.displayName, !0);
                        return a.createElement(b.xb, {
                            borderTop: !0,
                            padding: {
                                y: 1
                            },
                            margin: {
                                top: 1
                            }
                        }, a.createElement(b.Va, null, Object(l.d)("Would you like to block {user}?", {
                            user: t
                        }, "ReportWizardBlockActions")), a.createElement(b.xb, {
                            color: b.O.Alt2,
                            margin: {
                                y: 1
                            }
                        }, a.createElement(b.Wb, {
                            baseFontSize: b.Aa.Size6
                        }, a.createElement("p", null, Object(l.d)("Blocking {user} will:", {
                            user: t
                        }, "ReportWizardBlockActions")), a.createElement("ul", null, a.createElement("li", null, Object(l.d)("Prevent them from sending you whispers", "ReportWizardBlockActions")), a.createElement("li", null, Object(l.d)("Prevent them from hosting you", "ReportWizardBlockActions")), a.createElement("li", null, Object(l.d)("Prevent them from adding you as a friend", "ReportWizardBlockActions")), a.createElement("li", null, Object(l.d)("Filter their messages out of chats you don’t moderate", "ReportWizardBlockActions"))))), a.createElement(b.Va, {
                            margin: {
                                top: 1
                            }
                        }, e))
                    }, t
                }(a.Component),
                S = n("4qQ0");
            ! function(e) {
                e.Link = "link", e.MultipleChoice = "multiple choice", e.Text = "text", e.Textarea = "textarea"
            }(r || (r = {}));
            var w, T = {
                    generalFilter: function() {
                        return Object(l.d)("I don't think their content or behavior is allowed on Twitch", "ReportModalWizard")
                    },
                    me: function() {
                        return Object(l.d)("Me", "ReportModalWizard")
                    },
                    someoneElse: function() {
                        return Object(l.d)("Someone else", "ReportModalWizard")
                    },
                    sexuallyCoercive: function() {
                        return Object(l.d)("acting in a sexually coercive or inappropriate way", "ReportModalWizard")
                    },
                    abusiveViolence: function() {
                        return Object(l.d)("They're threatening violence or physical harm", "ReportModalWizard")
                    },
                    commitingViolence: function() {
                        return Object(l.d)("They're committing acts of violence or physical harm", "ReportModalWizard")
                    },
                    threatening: function() {
                        return Object(l.d)("threatening, harming, or endangering someone", "ReportModalWizard")
                    },
                    abusive: function() {
                        return Object(l.d)("being hateful, harassing, or abusive", "ReportModalWizard")
                    }
                },
                _ = {
                    input_description: {
                        getTitle: function() {
                            return Object(l.d)("Could you provide more detail about this issue? You may include links to videos, clips, and content outside Twitch.", "ReportModalWizard")
                        },
                        value: "description",
                        type: r.Textarea,
                        required: !0
                    },
                    input_link: {
                        getTitle: function() {
                            return Object(l.d)("If possible, please provide a link to show us where the issue occurred. Links that do not lead to the original source of the content may not be usable as evidence.", "ReportModalWizard")
                        },
                        rows: 2,
                        value: "external links",
                        type: r.Textarea
                    },
                    input_usernames: {
                        getTitle: function() {
                            return Object(l.d)("If you know the usernames of any other Twitch accounts that may be owned by this person, please list them in this space.", "ReportModalWizard")
                        },
                        value: "other usernames",
                        rows: 2,
                        type: r.Textarea
                    },
                    input_connection: {
                        getTitle: function() {
                            return Object(l.d)("Please describe how you connected the offsite content to this Twitch account.", "ReportModalWizard")
                        },
                        value: "offsite content connection",
                        type: r.Textarea
                    },
                    input_comments: {
                        getTitle: function() {
                            return Object(l.d)("If you have any other comments you would like to add, please do so here.", "ReportModalWizard")
                        },
                        value: "comments",
                        type: r.Textarea
                    },
                    input_identifyOwner: {
                        getTitle: function() {
                            return Object(l.d)("Please describe how you identified this person as the owner of this Twitch account.", "ReportModalWizard")
                        },
                        rows: 2,
                        value: "connect account owner",
                        type: r.Textarea
                    },
                    endBlurb_socialmedia: {
                        getTitle: function() {
                            return Object(l.d)("Please submit a report to the site or service where the incident occurred as well if you have not already done so.", "ReportModalWizard")
                        },
                        type: r.Text
                    },
                    endBlurb_threat: {
                        getTitle: function() {
                            return Object(l.d)("If you feel you are in immediate danger, please contact your local law enforcement.", "ReportModalWizard")
                        },
                        type: r.Text
                    },
                    endLink_selfharm: {
                        getTitle: function() {
                            return Object(l.d)("Learn more about mental health support", "ReportModalWizard")
                        },
                        value: "https://help.twitch.tv/customer/en/portal/articles/2904486-twitch-cares-mental-health-support-information",
                        type: r.Link
                    },
                    endLink_DMCA: {
                        getTitle: function() {
                            return Object(l.d)("View our DMCA Notification Guidelines", "ReportModalWizard")
                        },
                        value: "https://www.twitch.tv/p/legal/dmca-guidelines/",
                        type: r.Link
                    },
                    endLink_trademark: {
                        getTitle: function() {
                            return Object(l.d)("View our Trademark Policy", "ReportModalWizard")
                        },
                        value: "https://www.twitch.tv/p/legal/trademark-policy/",
                        type: r.Link
                    },
                    endLink_devAgreement: {
                        getTitle: function() {
                            return Object(l.d)("View our Developer Agreement", "ReportModalWizard")
                        },
                        value: "https://www.twitch.tv/p/legal/developer-agreement/",
                        type: r.Link
                    },
                    endLink_eventCoC: {
                        getTitle: function() {
                            return Object(l.d)("View our Events Code of Conduct", "ReportModalWizard")
                        },
                        value: "https://www.twitch.tv/p/legal/events-code-of-conduct",
                        type: r.Link
                    },
                    messaging_general: {
                        getTitle: T.generalFilter,
                        value: "general_messaging",
                        omitFromDescription: !0
                    },
                    profile_general: {
                        getTitle: T.generalFilter,
                        value: "general_profile",
                        omitFromDescription: !0
                    },
                    maliciousRaid: {
                        getTitle: function() {
                            return Object(l.d)("They're participating in a malicious raid", "ReportModalWizard")
                        },
                        value: "malicious raid",
                        reportReason: S.b.Harassment
                    },
                    violence: {
                        getTitle: function() {
                            return Object(l.d)("It contains threats, harm, or endangerment of someone", "ReportModalWizard")
                        },
                        value: "violence/threats",
                        reportReason: S.b.Harm
                    },
                    report_username: {
                        getTitle: function() {
                            return Object(l.d)("They're using an inappropriate or offensive username", "ReportModalWizard")
                        },
                        value: "inappropriate username",
                        reportReason: S.b.OffensiveUsername
                    },
                    report_emotes: {
                        getTitle: function() {
                            return Object(l.d)("The emotes are inappropriate or offensive", "ReportModalWizard")
                        },
                        value: "inappropriate emotes",
                        reportReason: S.b.Other
                    },
                    abusive: {
                        getTitle: function() {
                            return Object(l.d)("It's hateful, harassing, or abusive", "ReportModalWizard")
                        },
                        value: "abusive"
                    },
                    scam: {
                        getTitle: function() {
                            return Object(l.d)("It contains attempts to scam other community members", "ReportModalWizard")
                        },
                        value: "scam",
                        reportReason: S.b.Spam
                    },
                    emptyStream: {
                        getTitle: function() {
                            return Object(l.d)("There's nobody on the stream", "ReportModalWizard")
                        },
                        value: "empty stream"
                    },
                    impersonation: {
                        getTitle: function() {
                            return Object(l.d)("They're impersonating someone", "ReportModalWizard")
                        },
                        value: "impersonation",
                        reportReason: S.b.Impersonation
                    },
                    underage: {
                        getTitle: function() {
                            return Object(l.d)("They're underage (12 or younger)", "ReportModalWizard")
                        },
                        value: "underage",
                        reportReason: S.b.Underaged
                    },
                    report_ip: {
                        getTitle: function() {
                            return Object(l.d)("I think they're using copyrighted content, trademarks, or other intellectual property that's not theirs", "ReportModalWizard")
                        },
                        value: "intellectual property"
                    },
                    inappropriateContent: {
                        getTitle: function() {
                            return Object(l.d)("It's inappropriate or obscene", "ReportModalWizard")
                        },
                        value: "inappropriate content"
                    },
                    violateDevAgreement: {
                        getTitle: function() {
                            return Object(l.d)("I think they're violating Twitch's Developer Agreement", "ReportModalWizard")
                        },
                        value: "violating developer agreement"
                    },
                    revealPersonalInfo: {
                        getTitle: function() {
                            return Object(l.d)("They might have revealed someone's personal information", "ReportModalWizard")
                        },
                        value: "revealing personal info",
                        reportReason: S.b.Other
                    },
                    inappropriateBadge: {
                        getTitle: function() {
                            return Object(l.d)("Their emote or subscriber badge violates Twitch's Guidelines", "ReportModalWizard")
                        },
                        value: "emote/subscriber badge",
                        reportReason: S.b.Other
                    },
                    noModeration: {
                        getTitle: function() {
                            return Object(l.d)("They're not moderating their chat appropriately", "ReportModalWizard")
                        },
                        value: "not moderating chat",
                        reportReason: S.b.Other
                    },
                    inappropriateExtension: {
                        getTitle: function() {
                            return Object(l.d)("Their extension contains malicious or inappropriate content", "ReportModalWizard")
                        },
                        value: "inappropriate extension",
                        reportReason: S.b.Other
                    },
                    cheating: {
                        getTitle: function() {
                            return Object(l.d)("They're cheating in an online game", "ReportModalWizard")
                        },
                        value: "cheating",
                        reportReason: S.b.Cheating
                    },
                    bitsViolation: {
                        getTitle: function() {
                            return Object(l.d)("Their use of Bits goes against Twitch's Policy", "ReportModalWizard")
                        },
                        value: "bits violation",
                        reportReason: S.b.BitsViolation
                    },
                    video_labeling: {
                        getTitle: function() {
                            return Object(l.d)("Their content is labeled incorrectly", "ReportModalWizard")
                        },
                        value: "incorrect label",
                        reportReason: S.b.Miscategorized
                    },
                    video_inactive: {
                        getTitle: function() {
                            return Object(l.d)("The stream is inactive (sleeping/AFK)", "ReportModalWizard")
                        },
                        value: "inactive stream",
                        reportReason: S.b.Miscategorized
                    },
                    video_general: {
                        getTitle: T.generalFilter,
                        value: "general_video",
                        omitFromDescription: !0
                    },
                    hateSpeech: {
                        getTitle: function() {
                            return Object(l.d)("They're using hate speech, hateful symbols, or hateful media", "ReportModalWizard")
                        },
                        value: "hate speech",
                        reportReason: S.b.HatefulConduct
                    },
                    harassment: {
                        getTitle: function() {
                            return Object(l.d)("They're harassing or bullying someone", "ReportModalWizard")
                        },
                        value: "harassment",
                        reportReason: S.b.Harassment
                    },
                    abusiveViolence: {
                        getTitle: T.abusiveViolence,
                        value: "threatening violence",
                        reportReason: S.b.Harm
                    },
                    commitingViolence: {
                        getTitle: T.commitingViolence,
                        value: "committing violence",
                        reportReason: S.b.Harm
                    },
                    swatting: {
                        getTitle: function() {
                            return Object(l.d)("They're inciting or committing swatting or a DDOS attack", "ReportModalWizard")
                        },
                        value: "swatting/ddosing",
                        reportReason: S.b.Harassment
                    },
                    personalInfo: {
                        getTitle: function() {
                            return Object(l.d)("They're purposely revealing personal information", "ReportModalWizard")
                        },
                        value: "revealing personal info",
                        reportReason: S.b.Harassment
                    },
                    threat_me: {
                        getTitle: function() {
                            return Object(l.d)("At me", "ReportModalWizard")
                        },
                        value: "against me",
                        reportReason: S.b.Harm
                    },
                    threat_person: {
                        getTitle: function() {
                            return Object(l.d)("At someone else", "ReportModalWizard")
                        },
                        value: "against another person",
                        reportReason: S.b.Harm
                    },
                    threat_group: {
                        getTitle: function() {
                            return Object(l.d)("At a group of people", "ReportModalWizard")
                        },
                        value: "against group of people",
                        reportReason: S.b.Harm
                    },
                    threat_selfharm: {
                        getTitle: function() {
                            return Object(l.d)("They're threatening self-harm", "ReportModalWizard")
                        },
                        value: "selfharm"
                    },
                    inappropriate_game: {
                        getTitle: function() {
                            return Object(l.d)("The game isn't allowed on Twitch", "ReportModalWizard")
                        },
                        value: "prohibited game",
                        reportReason: S.b.Prohibited
                    },
                    sexuallyViolent: {
                        getTitle: function() {
                            return Object(l.d)("Violent sexual conduct", "ReportModalWizard")
                        },
                        value: "sexually violent",
                        reportReason: S.b.SexualViolence
                    },
                    childAnimal: {
                        getTitle: function() {
                            return Object(l.d)("Sexual conduct involving a child or animal", "ReportModalWizard")
                        },
                        value: "sexual conduct; child or animal",
                        reportReason: S.b.SexualViolence
                    },
                    pornographic: {
                        getTitle: function() {
                            return Object(l.d)("Sexually explicit or pornographic content", "ReportModalWizard")
                        },
                        value: "pornographic",
                        reportReason: S.b.SexualContent
                    },
                    gory: {
                        getTitle: function() {
                            return Object(l.d)("Extreme violence or gore", "ReportModalWizard")
                        },
                        value: "gory",
                        reportReason: S.b.Gore
                    },
                    suggestive: {
                        getTitle: function() {
                            return Object(l.d)("Sexually suggestive content", "ReportModalWizard")
                        },
                        value: "sexually suggestive",
                        reportReason: S.b.SexualContent
                    },
                    nudity: {
                        getTitle: function() {
                            return Object(l.d)("Full or partial nudity", "ReportModalWizard")
                        },
                        value: "nudity",
                        reportReason: S.b.SexualContent
                    },
                    other: {
                        getTitle: function() {
                            return Object(l.d)("There's something else wrong with it...", "ReportModalWizard")
                        },
                        value: "other",
                        reportReason: S.b.Other
                    },
                    evasion: {
                        getTitle: function() {
                            return Object(l.d)("They were banned or suspended and are trying to get around it (ban evasion)", "ReportModalWizard")
                        },
                        value: "ban evasion"
                    },
                    evasion_sitewide: {
                        getTitle: function() {
                            return Object(l.d)("A sitewide ban from Twitch", "ReportModalWizard")
                        },
                        value: "sitewide ban",
                        reportReason: S.b.TosBanEvasion
                    },
                    evasion_chat: {
                        getTitle: function() {
                            return Object(l.d)("A chat ban from one or more channels", "ReportModalWizard")
                        },
                        value: "chat ban",
                        reportReason: S.b.ChatBanEvasion
                    },
                    evasion_messaging: {
                        getTitle: function() {
                            return Object(l.d)("A block from messaging me", "ReportModalWizard")
                        },
                        value: "messaging block",
                        reportReason: S.b.ChatBanEvasion
                    },
                    impersonation_me: {
                        getTitle: T.me,
                        value: "impersonating me",
                        reportReason: S.b.Impersonation
                    },
                    impersonation_brand: {
                        getTitle: function() {
                            return Object(l.d)("Someone I represent, or a brand/company I work for", "ReportModalWizard")
                        },
                        value: "impersonating brand",
                        reportReason: S.b.Impersonation
                    },
                    impersonation_other: {
                        getTitle: T.someoneElse,
                        value: "impersonating someone else",
                        reportReason: S.b.Impersonation
                    },
                    selfharm: {
                        getTitle: function() {
                            return Object(l.d)("I'm concerned for their wellbeing", "ReportModalWizard")
                        },
                        value: "selfharm",
                        reportReason: S.b.SelfHarm
                    },
                    chat: {
                        getTitle: function() {
                            return Object(l.d)("In a stream chat message", "ReportModalWizard")
                        },
                        value: "chat"
                    },
                    profile: {
                        getTitle: function() {
                            return Object(l.d)("In the profile content, extensions, or emotes", "ReportModalWizard")
                        },
                        value: "profile"
                    },
                    video: {
                        getTitle: function() {
                            return Object(l.d)("In a live stream, video, or clip", "ReportModalWizard")
                        },
                        value: "video"
                    },
                    room: {
                        getTitle: function(e) {
                            return Object(l.d)("In one of {username}'s rooms", {
                                username: e
                            }, "ReportModalWizard")
                        },
                        value: "room"
                    },
                    whisper: {
                        getTitle: function() {
                            return Object(l.d)("In a whisper (private message)", "ReportModalWizard")
                        },
                        value: "whisper",
                        reportContext: S.a.Whisper
                    },
                    username: {
                        getTitle: function() {
                            return Object(l.d)("In the username", "ReportModalWizard")
                        },
                        value: "username",
                        reportReason: S.b.OffensiveUsername
                    },
                    report_other: {
                        getTitle: function() {
                            return Object(l.d)("Somewhere else...", "ReportModalWizard")
                        },
                        value: "somewhere else",
                        omitFromDescription: !0
                    },
                    video_streamer: {
                        getTitle: function() {
                            return Object(l.d)("The streamer or channel owner", "ReportModalWizard")
                        },
                        value: "streamer"
                    },
                    video_someoneElse: {
                        getTitle: function() {
                            return Object(l.d)("Someone else in the video", "ReportModalWizard")
                        },
                        value: "someone else in video"
                    },
                    video_chatSomeone: {
                        getTitle: function() {
                            return Object(l.d)("Someone in chat", "ReportModalWizard")
                        },
                        value: "someone in chat",
                        differentTarget: !0
                    },
                    report_channelOwner: {
                        getTitle: function() {
                            return Object(l.d)("The channel owner", "ReportModalWizard")
                        },
                        value: "channel owner"
                    },
                    report_member: {
                        getTitle: function() {
                            return Object(l.d)("Another community member", "ReportModalWizard")
                        },
                        value: "community member",
                        differentTarget: !0
                    },
                    location_onTwitch: {
                        getTitle: function() {
                            return Object(l.d)("On Twitch", "ReportModalWizard")
                        },
                        value: "on twitch"
                    },
                    location_anotherSite: {
                        getTitle: function() {
                            return Object(l.d)("On another site or service", "RpoertModalWizard")
                        },
                        value: "another site"
                    },
                    location_TwitchEvent: {
                        getTitle: function() {
                            return Object(l.d)("In person, at a Twitch event", "ReportModalWizard")
                        },
                        value: "twitch event"
                    },
                    external_incitingRaids: {
                        getTitle: function() {
                            return Object(l.d)("inciting brigading or malicious raids", "ReportModalWizard")
                        },
                        reportReason: S.b.Harassment,
                        value: "brigading/raids"
                    },
                    external_threatening: {
                        getTitle: T.threatening,
                        value: "threatening"
                    },
                    external_harassment: {
                        getTitle: T.abusive,
                        value: "hateful/harassing"
                    },
                    external_abusiveViolence: {
                        getTitle: T.abusiveViolence,
                        value: "external site; threatening violence",
                        reportReason: S.b.Harm
                    },
                    external_commitingViolence: {
                        getTitle: T.commitingViolence,
                        value: "external site; committing violence",
                        reportReason: S.b.Harm
                    },
                    conduct_impersonation: {
                        getTitle: function() {
                            return Object(l.d)("impersonating someone", "ReportModalWizard")
                        },
                        value: "impersonation",
                        reportReason: S.b.Impersonation
                    },
                    spam: {
                        getTitle: function() {
                            return Object(l.d)("They're spamming or spreading malicious links", "ReportModalWizard")
                        },
                        value: "spam",
                        reportReason: S.b.Spam
                    },
                    spam_bot: {
                        getTitle: function() {
                            return Object(l.d)("I think this is a bot account", "ReportModalWizard")
                        },
                        value: "bot"
                    },
                    spam_scam: {
                        getTitle: function() {
                            return Object(l.d)("They're trying to scam other community members or sending malicious links", "ReportModalWizard")
                        },
                        value: "scam or malicious links"
                    },
                    spam_repeated: {
                        getTitle: function() {
                            return Object(l.d)("They're sending repeated messages (spam)", "ReportModalWizard")
                        },
                        value: "repeat messages"
                    }
                },
                O = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onChange = function(e) {
                            var n = e.target,
                                r = n.name,
                                i = n.value;
                            t.props.onChangeText(r, i)
                        }, t.onSelect = function(e) {
                            if (t.props.currentCard.items && e.currentTarget.parentElement) {
                                var n = Number(e.currentTarget.parentElement.getAttribute("data-a-index")),
                                    r = t.props.currentCard.items[n];
                                t.props.onChangeRadio(r)
                            }
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.currentCard.getDescription ? a.createElement(b.Va, {
                            padding: {
                                bottom: 1
                            }
                        }, this.props.currentCard.getDescription()) : null;
                        return a.createElement(b.Va, {
                            className: "reporting-wizard-card"
                        }, e, a.createElement(b.Ca, {
                            label: this.props.currentCard.getLabel ? this.props.currentCard.getLabel() : ""
                        }, this.renderCardItems()))
                    }, t.prototype.renderCardItems = function() {
                        var e = this,
                            t = this.props.currentCard,
                            n = [];
                        return t.items && t.type && (n = t.items.filter(function(e) {
                            return !!e
                        }).map(function(t, n) {
                            switch (t.type) {
                                case r.Text:
                                    return a.createElement(b.Va, {
                                        key: n,
                                        padding: {
                                            bottom: 1
                                        }
                                    }, t.getTitle());
                                case r.Link:
                                    return a.createElement(b.Va, {
                                        key: n,
                                        padding: {
                                            bottom: 1
                                        }
                                    }, a.createElement(b.T, {
                                        to: t.value,
                                        targetBlank: !0
                                    }, a.createElement(b.Va, {
                                        display: b.W.Flex
                                    }, a.createElement(b.Va, {
                                        display: b.W.Inline,
                                        padding: {
                                            right: .5
                                        }
                                    }, a.createElement(b.mb, {
                                        asset: b.nb.Document
                                    })), t.getTitle())));
                                case r.Textarea:
                                    var i = t.value ? e.props.userTextInputs[t.value] : void 0,
                                        o = t.required && (!i || !!i && 0 === i.trim().length);
                                    return a.createElement(b.Va, {
                                        key: n,
                                        padding: {
                                            bottom: 1
                                        }
                                    }, a.createElement(b.Ca, {
                                        label: t.getTitle(),
                                        labelOptional: t.required ? "" : Object(l.d)("Optional", "ReportModalWizardCard")
                                    }, a.createElement(b.Kb, {
                                        onChange: e.onChange,
                                        rows: t.rows || 3,
                                        name: t.value,
                                        error: e.props.error && o,
                                        value: i,
                                        "data-test-selector": "report-wizard-textarea"
                                    })));
                                case r.MultipleChoice:
                                default:
                                    return a.createElement(b.Va, {
                                        key: n,
                                        padding: {
                                            y: .5
                                        }
                                    }, a.createElement(b.jb, {
                                        checked: !!e.props.currentSelection && e.props.currentSelection.value === t.value,
                                        onChange: e.onSelect,
                                        label: t.getTitle(e.props.targetUser.displayName),
                                        "data-a-index": n,
                                        name: "card",
                                        value: t.value
                                    }))
                            }
                        })), n
                    }, t
                }(a.Component),
                E = n("RQ6e");
            ! function(e) {
                e.Confirm = "Confirm", e.MultipleChoice = "MultipleChoice", e.Info = "End Card"
            }(w || (w = {}));
            var I, N, R, D = {
                    contentGeneral: function() {
                        return Object(l.d)("What would you like to report?", "ReportModalWizard")
                    },
                    content: function() {
                        return Object(l.d)("What's wrong with this content?", "ReportModalWizard")
                    },
                    identifyUser: function() {
                        return Object(l.d)("Who do you want to report?", "ReportModalWizard")
                    },
                    thisPersonIs: function() {
                        return Object(l.d)("This person is...", "ReportModalWizard")
                    },
                    relevantStatements: function() {
                        return Object(l.d)("What would you like to report? (Please choose the most relevant statement that applies.)", "ReportModalWizard")
                    }
                },
                x = {
                    report: function(e) {
                        return Object(l.d)("Report {username}", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    reportVideo: function(e) {
                        return Object(l.d)("Report {username}'s Video", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    reportMessage: function(e) {
                        return Object(l.d)("Report {username}'s Message", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    reportProfile: function(e) {
                        return Object(l.d)("Report {username}'s Profile Or Other Content", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    reportAbusive: function(e) {
                        return Object(l.d)("Report {username} for Abusive Conduct", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    tellUsMore: function() {
                        return Object(l.d)("Tell Us More", "ReportModalWizard")
                    },
                    thanks: function() {
                        return Object(l.d)("Thanks for letting us know", "ReportModalWizard")
                    },
                    thanksConcern: function() {
                        return Object(l.d)("Thank you for your concern", "ReportModalWizard")
                    }
                },
                M = {
                    getDescription: function() {
                        return Object(l.d)("Reports are reviewed by Twitch Staff 24 hours a day. We will issue penalties, such as account suspension and/or content removal, once we verify that a violation of our policies has occurred.", "ReportModalWizard")
                    },
                    blockPrompt: !0,
                    getTitle: x.thanks,
                    type: w.Info,
                    value: "end card"
                },
                j = {
                    socialMedia: i.__assign({}, M, {
                        items: [_.endBlurb_socialmedia]
                    }),
                    violence: i.__assign({}, M, {
                        items: [_.endBlurb_threat]
                    }),
                    legal: {
                        getTitle: x.thanksConcern,
                        getDescription: function() {
                            return Object(l.d)("To submit a claim or report a violation of this type, you will need to follow the steps listed on the relevant page below.", "ReportModalWizard")
                        },
                        items: [_.endLink_DMCA, _.endLink_trademark, _.endLink_devAgreement],
                        type: w.Info,
                        value: "ip end"
                    },
                    selfharm: {
                        getTitle: x.thanksConcern,
                        getDescription: function() {
                            return Object(l.d)("If you know the user personally, and you believe them to be in danger, please contact their local authorities immediately. The link below contains some general information that may be of use.", "ReportModalWizard")
                        },
                        items: [_.endLink_selfharm],
                        type: w.Info,
                        value: "selfharm end"
                    },
                    twitchEvent: {
                        getTitle: x.thanksConcern,
                        getDescription: function() {
                            return Object(l.d)("Please bring this concern to the attention of staff or security at the event if you have not already done so. More information is available at the link below.", "ReportModalWizard")
                        },
                        items: [_.endLink_eventCoC],
                        value: "twitch event end",
                        type: w.Info
                    }
                },
                L = {
                    getTitle: x.report,
                    getLabel: function() {
                        return Object(l.d)("Where is the problem?", "ReportModalWizard")
                    },
                    items: [_.video, _.whisper, _.chat, _.room, _.profile, _.username, _.report_other],
                    type: w.MultipleChoice,
                    value: "content type"
                },
                P = {
                    identifyUser: {
                        getTitle: x.reportVideo,
                        getLabel: D.identifyUser,
                        items: [_.video_streamer, _.video_someoneElse, _.video_chatSomeone],
                        type: w.MultipleChoice,
                        value: "video identify user"
                    },
                    content: {
                        getTitle: x.reportVideo,
                        getLabel: D.contentGeneral,
                        items: [_.revealPersonalInfo, _.video_labeling, _.video_inactive, _.video_general, _.report_ip, _.violateDevAgreement, _.selfharm],
                        type: w.MultipleChoice,
                        value: "video report reason"
                    },
                    general: {
                        getTitle: x.reportVideo,
                        getLabel: D.content,
                        items: [_.report_username, _.violence, _.abusive, _.cheating, _.scam, _.inappropriateContent, _.evasion, _.impersonation, _.underage, _.bitsViolation],
                        type: w.MultipleChoice,
                        value: "video general report reason"
                    }
                },
                V = {
                    content: {
                        getTitle: x.reportMessage,
                        getLabel: D.contentGeneral,
                        items: [_.revealPersonalInfo, _.evasion, _.spam, _.maliciousRaid, _.report_username, _.messaging_general, _.selfharm],
                        type: w.MultipleChoice,
                        value: "message report reason"
                    },
                    general: {
                        getTitle: x.reportMessage,
                        getLabel: D.content,
                        items: [_.report_emotes, _.violence, _.abusive, _.inappropriateContent, _.impersonation, _.underage, _.bitsViolation],
                        type: w.MultipleChoice,
                        value: "message general report reason"
                    }
                },
                F = i.__assign({}, V.content, {
                    getDescription: function() {
                        return Object(l.d)("Please note that we may review additional messages in this conversation to determine the context of your report.", "ReportModalWizard")
                    }
                }),
                U = {
                    content: {
                        getTitle: x.reportProfile,
                        getLabel: D.contentGeneral,
                        items: [_.revealPersonalInfo, _.inappropriateBadge, _.inappropriateExtension, _.noModeration, _.profile_general, _.report_ip, _.violateDevAgreement, _.selfharm],
                        type: w.MultipleChoice,
                        value: "profile report reason"
                    },
                    general: {
                        getTitle: x.reportProfile,
                        getLabel: D.content,
                        items: [_.report_username, _.violence, _.abusive, _.scam, _.inappropriateContent, _.evasion, _.impersonation, _.underage, _.bitsViolation],
                        type: w.MultipleChoice,
                        value: "profile general report reason"
                    }
                },
                A = {
                    getTitle: function(e) {
                        return Object(l.d)("Report {username}'s Room", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: D.identifyUser,
                    items: [_.report_channelOwner, _.report_member],
                    value: "room report user",
                    type: w.MultipleChoice
                },
                W = {
                    getTitle: x.tellUsMore,
                    items: [_.input_description],
                    type: w.Confirm,
                    value: "tell us more"
                },
                B = {
                    banEvasion: i.__assign({}, W, {
                        items: [_.input_usernames, _.input_description],
                        value: "ban evasion tell us more"
                    }),
                    socialMedia: i.__assign({}, W, {
                        items: [_.input_link, _.input_connection, _.input_description],
                        nextCard: j.socialMedia,
                        value: "social media tell us more"
                    })
                },
                G = {
                    content: {
                        getTitle: x.reportAbusive,
                        getLabel: D.relevantStatements,
                        items: [_.hateSpeech, _.harassment, _.abusiveViolence, _.commitingViolence, _.swatting, _.personalInfo],
                        type: w.MultipleChoice,
                        value: "abuse type"
                    },
                    violence: {
                        getTitle: function(e) {
                            return Object(l.d)("Report {username} for Violence or Threats", {
                                username: e
                            }, "ReportModalWizard")
                        },
                        getLabel: function() {
                            return Object(l.d)("Are the threats or actions directed at you or someone else?", "ReportModalWizard")
                        },
                        items: [_.threat_me, _.threat_person, _.threat_group, _.threat_selfharm],
                        type: w.MultipleChoice,
                        value: "violence type"
                    }
                },
                z = {
                    identifyLocation: {
                        getTitle: function(e) {
                            return Object(l.d)("Report {username} for something else...", {
                                username: e
                            }, "ReportModalWizard")
                        },
                        getLabel: function() {
                            return Object(l.d)("Where did the problem happen?", "ReportModalWizard")
                        },
                        items: [_.location_onTwitch, _.location_anotherSite, _.location_TwitchEvent],
                        type: w.MultipleChoice,
                        value: "off-site conduct location"
                    },
                    externalSite: {
                        getTitle: function(e) {
                            return Object(l.d)("Report {username}'s Conduct on Another Site or Service", {
                                username: e
                            }, "ReportModalWizard")
                        },
                        getLabel: D.thisPersonIs,
                        getDescription: function() {
                            return Object(l.d)("Please note that incidents reported through this form must involve Twitch community members. If possible, please submit a report to the site or service where the incident occurred as well.", "ReportModalWizard")
                        },
                        items: [_.external_incitingRaids, _.external_threatening, _.external_harassment],
                        type: w.MultipleChoice,
                        nextCard: B.socialMedia,
                        value: "external site conduct"
                    },
                    external_violence: i.__assign({}, G.violence, {
                        items: [_.threat_me, _.threat_person, _.threat_group],
                        nextCard: B.socialMedia
                    }),
                    external_abusive: i.__assign({}, G.content, {
                        items: [_.hateSpeech, _.harassment, _.external_abusiveViolence, _.external_commitingViolence, _.swatting, _.personalInfo],
                        nextCard: B.socialMedia
                    })
                },
                H = {
                    getTitle: function(e) {
                        return Object(l.d)("Report {username}'s Spam or Malicious Links", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: D.contentGeneral,
                    items: [_.spam_bot, _.spam_scam, _.spam_repeated],
                    type: w.MultipleChoice,
                    value: "spam type"
                },
                q = {
                    getTitle: function(e) {
                        return Object(l.d)("Report {username} for Inappropriate Content", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: D.relevantStatements,
                    items: [_.inappropriate_game, _.gory, _.sexuallyViolent, _.childAnimal, _.pornographic, _.suggestive, _.nudity, _.other],
                    type: w.MultipleChoice,
                    value: "inappropriate content type"
                },
                Y = {
                    getTitle: function(e) {
                        return Object(l.d)("Report {username} for Evading a Ban", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: function() {
                        return Object(l.d)("What kind of ban are they evading?", "ReportModalWizard")
                    },
                    value: "ban type",
                    items: [_.evasion_chat, _.evasion_sitewide, _.evasion_messaging],
                    type: w.MultipleChoice,
                    nextCard: B.banEvasion
                },
                Q = {
                    getTitle: function(e) {
                        return Object(l.d)("Report {username} for Impersonation", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: function() {
                        return Object(l.d)("Who is being impersonated?", "ReportModalWizard")
                    },
                    getDescription: function() {
                        return Object(l.d)("Parody, cosplay, and other portrayals without the intent to deceive or defraud are allowed under Twitch's Community Guidelines. If you would still like to submit a report, please continue.", "ReportModalWizard")
                    },
                    items: [_.impersonation_me, _.impersonation_brand, _.impersonation_other],
                    type: w.MultipleChoice,
                    value: "impersonation type"
                },
                $ = L,
                X = W,
                K = M,
                Z = {
                    video: P.identifyUser,
                    whisper: F,
                    chat: V.content,
                    profile: U.content,
                    room: A,
                    "somewhere else": z.identifyLocation,
                    streamer: P.content,
                    "someone else in video": P.content,
                    "someone in chat": V.content,
                    general_video: P.general,
                    general_messaging: V.general,
                    general_profile: U.general,
                    "channel owner": U.content,
                    "community member": V.content,
                    "on twitch": U.content,
                    "another site": z.externalSite,
                    "twitch event": j.twitchEvent,
                    "brigading/raids": B.socialMedia,
                    threatening: z.external_violence,
                    "hateful/harassing": z.external_abusive,
                    "external site; threatening violence": z.external_violence,
                    "external site; committing violence": z.external_violence,
                    "external site; scam": B.socialMedia,
                    "ban evasion": Y,
                    spam: H,
                    hateful: G.content,
                    impersonation: Q,
                    "violence/threats": G.violence,
                    "threatening violence": G.violence,
                    "committing violence": G.violence,
                    abusive: G.content,
                    "inappropriate content": q,
                    "intellectual property": j.legal,
                    "violating developer agreement": j.legal
                },
                J = {
                    selfharm: j.selfharm,
                    harm: j.violence,
                    other: K
                },
                ee = {
                    CHANNEL_FEED_POST_REPORT: U.content,
                    COMMUNITY_REPORT: U.content,
                    CHAT_REPORT: V.content,
                    CLIP_REPORT: P.content,
                    EVENT_REPORT: U.content,
                    EXTENSION_REPORT: U.content,
                    LIVE_UP_REPORT: U.content,
                    ROOM_REPORT: A,
                    WHISPER_REPORT: F,
                    VOD_COMMENT_REPORT: V.content
                },
                te = "report-wizard-back",
                ne = "report-wizard-close",
                re = "report-wizard-next",
                ie = "report-wizard-submit",
                ae = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            currentCard: t.props.currentCard || ee[t.props.reportContentType] || $,
                            prevCards: [],
                            currentSelection: null,
                            prevSelections: [],
                            displacedSelections: [],
                            userTextInput: {},
                            error: "",
                            reportReason: t.props.reportReason || "",
                            modalCloseTracked: !1,
                            targetUnknown: !1,
                            reportContext: t.props.reportContentType
                        }, t.renderPrimer = function() {
                            return a.createElement(b.Va, {
                                margin: {
                                    top: 1
                                }
                            }, a.createElement(b.V, null, Object(l.d)("We are going to ask you a few questions to help us investigate your report quickly and accurately.", "ReportModalWizard")))
                        }, t.renderButtons = function() {
                            var e = Object(l.d)("Close", "ReportModalWizard"),
                                n = t.handleClose,
                                r = ne,
                                i = !1,
                                o = t.state.prevCards.length ? t.renderBack() : null;
                            switch (t.state.currentCard.type) {
                                case w.MultipleChoice:
                                    e = Object(l.d)("Next", "ReportModalWizard"), n = t.handleNext, r = re, i = !t.state.currentSelection;
                                    break;
                                case w.Confirm:
                                    e = Object(l.d)("Submit Report", "ReportModalWizard"), n = t.handleSubmit, i = !t.state.userTextInput, r = ie
                            }
                            return a.createElement(b.Va, null, o, a.createElement(b.z, {
                                onClick: n,
                                disabled: i,
                                "data-test-selector": r
                            }, a.createElement(b.Va, {
                                padding: {
                                    x: 1
                                }
                            }, e)))
                        }, t.renderBack = function() {
                            return a.createElement(b.Va, {
                                margin: {
                                    right: 1
                                },
                                display: b.W.InlineBlock
                            }, a.createElement(b.z, {
                                type: b.F.Hollow,
                                onClick: t.handleBack,
                                "data-test-selector": te
                            }, a.createElement(b.Va, {
                                padding: {
                                    x: 1
                                }
                            }, Object(l.d)("Back", "ReportModalWizard"))))
                        }, t.getTitle = function() {
                            return t.state.currentCard.getTitle && t.props.targetUser.displayName && t.props.targetUser.id ? t.state.targetUnknown ? t.state.currentCard.getTitle(Object(l.d)("Another User", "ReportModalWizard")) : t.state.currentCard.getTitle(t.props.targetUser.displayName) : t.state.targetUnknown ? Object(l.d)("Report User", "ReportModalWizard") : t.props.title
                        }, t.handleClose = function() {
                            t.setState({
                                modalCloseTracked: !0
                            }, function() {
                                return t.props.trackClose(R.Finish, t.state.currentCard.value)
                            }), t.props.onClose()
                        }, t.handleNext = function() {
                            if (t.state.currentSelection && t.state.currentSelection.value) {
                                var e = t.state.currentCard,
                                    n = t.state.prevCards.concat(e),
                                    r = t.state.prevSelections.concat(t.state.currentSelection),
                                    i = t.state.displacedSelections[t.state.displacedSelections.length - 1],
                                    a = t.state.currentSelection.differentTarget || t.state.targetUnknown,
                                    o = t.state.currentSelection.reportContext || t.state.reportContext,
                                    s = e.nextCard || X;
                                Z[t.state.currentSelection.value] && (s = Z[t.state.currentSelection.value]);
                                var l = t.state.currentSelection.reportReason || t.state.reportReason,
                                    c = s.type === w.Info;
                                t.setState({
                                    currentCard: s,
                                    reportReason: l,
                                    prevCards: c ? [] : n,
                                    prevSelections: r,
                                    targetUnknown: a,
                                    currentSelection: i || null,
                                    displacedSelections: t.state.displacedSelections.slice(0, -1),
                                    reportContext: o
                                }, function() {
                                    return t.trackNavigation(N.Next, e.value)
                                })
                            }
                        }, t.createReportDescription = function() {
                            return "" + (t.state.reportContext !== t.props.reportContentType ? "report context: " + t.props.reportContentType + "\n\n" : "") + t.state.prevSelections.map(function(e) {
                                if (!e.omitFromDescription) return e.value
                            }).filter(function(e) {
                                return !!e
                            }).join(" > ") + "\n\n" + Object.keys(t.state.userTextInput).map(function(e) {
                                return e + ": " + t.state.userTextInput[e]
                            }).join("\n")
                        }, t.requiredInputsNonEmpty = function() {
                            if (t.state.currentCard.items) return 0 === t.state.currentCard.items.filter(function(e) {
                                if (e.type !== r.Textarea || !e.required) return !1;
                                var n = t.state.userTextInput[e.value],
                                    i = n && 0 === n.trim().length;
                                return !n || i
                            }).length
                        }, t.handleSubmit = function() {
                            return i.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, r, a = this;
                                return i.__generator(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            return e = Object(l.d)("Additional information is required.", "ReportModalWizard"), this.requiredInputsNonEmpty() ? (t = this.state.reportReason || "other", n = this.createReportDescription(), [4, this.props.onSubmit(t, n, null, null, this.state.reportContext)]) : [3, 2];
                                        case 1:
                                            switch (i.sent(), this.props.submitStatus) {
                                                case E.b.FormError:
                                                    this.setState({
                                                        error: e
                                                    });
                                                    break;
                                                case E.b.Success:
                                                    r = K, J[t] && (r = J[t]), this.state.currentCard.nextCard && (r = this.state.currentCard.nextCard), this.setState({
                                                        currentCard: r,
                                                        prevCards: [],
                                                        prevSelections: [],
                                                        currentSelection: null,
                                                        displacedSelections: [],
                                                        userTextInput: {},
                                                        error: ""
                                                    }, function() {
                                                        return a.trackNavigation(N.Submit)
                                                    });
                                                    break;
                                                case E.b.UserError:
                                                    this.setState({
                                                        error: Object(l.d)("This account could not be reported. It may have already been suspended, or the owner may have deleted it.", "ReportModalWizard")
                                                    });
                                                    break;
                                                case E.b.MutationError:
                                                default:
                                                    this.setState({
                                                        error: Object(l.d)("Sorry, a network error occurred when submitting your report. Please try again later.", "ReportModalWizard")
                                                    })
                                            }
                                            return [3, 3];
                                        case 2:
                                            this.props.onError(E.b.FormError), this.setState({
                                                error: e
                                            }), i.label = 3;
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        }, t.handleBack = function() {
                            return i.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, r, a, o = this;
                                return i.__generator(this, function(i) {
                                    return e = this.state.currentCard, t = this.state.prevCards[this.state.prevCards.length - 1], n = this.state.prevSelections[this.state.prevSelections.length - 1], r = !n.differentTarget && this.state.targetUnknown, a = this.state.displacedSelections, this.state.currentSelection && (a = a.concat(this.state.currentSelection)), t && n && this.setState({
                                        currentCard: t,
                                        currentSelection: n,
                                        displacedSelections: a,
                                        prevCards: this.state.prevCards.slice(0, -1),
                                        prevSelections: this.state.prevSelections.slice(0, -1),
                                        error: "",
                                        targetUnknown: r
                                    }, function() {
                                        return o.trackNavigation(N.Back, e.value)
                                    }), [2]
                                })
                            })
                        }, t.handleTextInput = function(e, n) {
                            var r = t.state.userTextInput;
                            r[e] = n, t.setState({
                                userTextInput: r
                            })
                        }, t.handleSelection = function(e) {
                            if (t.state.currentCard.items && e !== t.state.currentSelection) {
                                var n = t.state.targetUnknown;
                                if (n) n = 0 === t.state.displacedSelections.filter(function(e) {
                                    return e.differentTarget
                                }).length;
                                var r = t.state.reportContext;
                                (t.state.displacedSelections.filter(function(e) {
                                    return e.reportContext
                                }).length || t.state.currentSelection && t.state.currentSelection.reportContext) && (r = t.props.reportContentType), t.setState({
                                    currentSelection: e,
                                    displacedSelections: [],
                                    userTextInput: {},
                                    targetUnknown: n,
                                    reportContext: r
                                })
                            }
                        }, t.trackNavigation = function(e, n) {
                            t.props.trackAction(e, n, t.state.currentCard.value)
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentWillUnmount = function() {
                        this.state.modalCloseTracked || this.props.trackClose(R.Close, this.state.currentCard.value)
                    }, t.prototype.render = function() {
                        var e = this.state.currentCard.type === w.Info && this.state.currentCard.blockPrompt ? a.createElement(C, {
                                targetUser: this.props.targetUser,
                                onBlock: this.props.onBlock,
                                onUnblock: this.props.onUnblock,
                                userBlocked: this.props.userBlocked
                            }) : null,
                            t = this.state.error ? a.createElement(b.xb, {
                                fullWidth: !0,
                                margin: {
                                    bottom: 1
                                },
                                padding: 1,
                                className: "reporting__error-container"
                            }, this.state.error) : null,
                            n = this.state.prevCards.length || this.state.currentCard.type === w.Info ? null : this.renderPrimer();
                        return a.createElement(b.xb, {
                            className: "reporting-wizard",
                            display: b.W.Flex,
                            margin: {
                                x: 1
                            },
                            flexDirection: b.Y.Column,
                            fullHeight: !0,
                            "data-test-card-value": this.state.currentCard.value
                        }, t, a.createElement(b.V, {
                            bold: !0,
                            fontSize: b.Aa.Size4
                        }, this.getTitle()), n, a.createElement(b.Va, {
                            margin: {
                                y: 1
                            }
                        }, a.createElement(O, {
                            currentCard: this.state.currentCard,
                            currentSelection: this.state.currentSelection,
                            targetUser: this.props.targetUser,
                            targetUserID: this.props.targetUser.id,
                            onChangeRadio: this.handleSelection,
                            onChangeText: this.handleTextInput,
                            userTextInputs: this.state.userTextInput,
                            error: this.props.submitStatus === E.b.FormError && !!this.state.error
                        }), e), this.renderButtons())
                    }, t
                }(a.Component),
                oe = n("+PZR"),
                se = n("PDCe"),
                le = n("s8Ou"),
                ce = n("0hI/");
            n.d(t, "c", function() {
                    return N
                }), n.d(t, "a", function() {
                    return R
                }), n.d(t, "b", function() {
                    return ue
                }),
                function(e) {
                    e.Close = "close", e.Open = "open", e.Submit = "submit_report", e.ToggleSettings = "modal_settings"
                }(I || (I = {})),
                function(e) {
                    e.Back = "back", e.Close = "close", e.Open = "open", e.Next = "next", e.Submit = "submit_report", e.ToggleSettings = "modal_settings"
                }(N || (N = {})),
                function(e) {
                    e.Close = "close", e.Finish = "finish"
                }(R || (R = {}));
            var de = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    n.handleSubmit = function(e, t, r, a, o) {
                        return i.__awaiter(n, void 0, void 0, function() {
                            var n, s, c, d, u = this;
                            return i.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        if (e !== E.a) return [3, 5];
                                        c = {
                                            userID: this.props.data.targetUser.id,
                                            communityID: r || "",
                                            reason: t
                                        }, i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, , 4]), [4, this.props.reportUserInCommunity(Object(p.a)(c))];
                                    case 2:
                                        return i.sent(), l.o.tracking.track(g.SpadeEventType.CommunityModeration, {
                                            community_id: r,
                                            name: a,
                                            is_official: !1,
                                            user_id: this.props.sessionUser && this.props.sessionUser.id,
                                            target_id: this.props.reportContext.targetUserID,
                                            action: "report",
                                            reason: e
                                        }), this.setState({
                                            submitStatus: E.b.Success
                                        }, function() {
                                            u.state.showWizard || u.trackAction(I.Submit)
                                        }), [3, 4];
                                    case 3:
                                        return n = i.sent(), l.j.error(n, "ReportUserInCommunity Mutation failed."), this.setState({
                                            submitStatus: E.b.MutationError
                                        }), [3, 4];
                                    case 4:
                                        return [3, 9];
                                    case 5:
                                        if (s = o === S.a.Whisper ? o : this.props.reportContext.contentType, c = {
                                                description: t,
                                                reason: e,
                                                content: s,
                                                contentID: this.props.reportContext.contentID,
                                                extra: this.props.reportContext.extra,
                                                targetID: this.props.data.targetUser.id
                                            }, this.props.reportContext.contentType === S.a.Community && this.props.reportContext.extra && (c.description = Object(oe.a)(this.props.reportContext.extra, t)), null === c.targetID) return this.setState({
                                            submitStatus: E.b.UserError
                                        }), [2];
                                        i.label = 6;
                                    case 6:
                                        return i.trys.push([6, 8, , 9]), [4, this.props.reportUser(Object(p.a)(c))];
                                    case 7:
                                        return i.sent(), this.props.reportContext.contentType === S.a.Community && l.o.tracking.track(g.SpadeEventType.CommunityReport, {
                                            community_id: this.props.reportContext.contentID,
                                            name: this.props.reportContext.extra,
                                            is_official: !1,
                                            user_id: this.props.sessionUser && this.props.sessionUser.id,
                                            reason: e
                                        }), this.setState({
                                            submitStatus: E.b.Success
                                        }, function() {
                                            u.state.showWizard || u.trackAction(I.Submit)
                                        }), [3, 9];
                                    case 8:
                                        return d = i.sent(), l.j.error(d, "ReportUser Mutation failed."), this.setState({
                                            submitStatus: E.b.MutationError
                                        }), [3, 9];
                                    case 9:
                                        return [2]
                                }
                            })
                        })
                    }, n.handleChildError = function(e) {
                        return n.setState({
                            submitStatus: e
                        })
                    }, n.handleClose = function() {
                        n.props.onClose && n.props.onClose(n.state.submitStatus, n.state.userBlocked)
                    }, n.onBlock = function() {
                        n.props.blockUserMutation(n.props.data.targetUser.id, void 0, void 0, i.__assign({}, n.props.sessionUser, {
                            __typename: "User"
                        })), n.setState({
                            userBlocked: !0
                        })
                    }, n.onUnblock = function() {
                        n.props.unblockUserMutation(n.props.data.targetUser.id, i.__assign({}, n.props.sessionUser, {
                            __typename: "User"
                        })), n.setState({
                            userBlocked: !1
                        })
                    }, n.trackOpen = function(e) {
                        n.state.openEventSent || (n.state.showWizard ? n.trackWizardAction(N.Open, void 0, e) : n.trackAction(I.Open), n.setState({
                            openEventSent: !0
                        }))
                    }, n.trackClose = function(e, t) {
                        n.state.closeEventSent || (n.state.showWizard ? n.trackWizardAction(N.Close, t, void 0, e) : n.trackAction(I.Close), n.setState({
                            closeEventSent: !0
                        }))
                    }, n.trackWizardAction = function(e, t, r, i) {
                        l.o.tracking.track(g.SpadeEventType.ReportWizardFlowAction, {
                            ui_context: n.props.reportContext.contentType,
                            target_user_id: n.props.reportContext.targetUserID,
                            report_sent: n.state.submitStatus === E.b.Success,
                            modal_type: "wizard_v1",
                            extra_user_id: n.props.reportContext.additionalTrackingID,
                            action: e,
                            close_type: i,
                            report_session_id: n.reportID,
                            current_step: t,
                            navigated_to: r
                        })
                    }, n.trackAction = function(e) {
                        l.o.tracking.track(g.SpadeEventType.ReportFlowAction, {
                            ui_context: n.props.reportContext.contentType,
                            target_user_id: n.props.reportContext.targetUserID,
                            report_sent: n.state.submitStatus === E.b.Success,
                            extra_user_id: n.props.reportContext.additionalTrackingID,
                            action: e,
                            report_session_id: n.reportID
                        })
                    }, n.reportID = Object(m.a)();
                    var r = l.o.experiments.getAssignment(h.b.NewReportingWizard);
                    return n.state = {
                        submitStatus: E.b.Unsubmitted,
                        showWizard: "yes" === r,
                        openEventSent: !1,
                        closeEventSent: !1,
                        userBlocked: !1
                    }, n
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.trackOpen()
                }, t.prototype.componentWillUnmount = function() {
                    this.handleClose(), this.state.showWizard || this.trackClose()
                }, t.prototype.render = function() {
                    if (this.props.data.error) return a.createElement(b.Va, {
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(b.V, {
                        fontSize: b.Aa.Size5
                    }, Object(l.d)("There was an unexpected error. Please refresh the page and try again", "ReportUser")));
                    if (this.props.data.loading) return a.createElement(b.cb, {
                        lineCount: 3
                    });
                    if (this.props.data.targetUser) {
                        var e = {
                            onClose: this.handleClose,
                            onError: this.handleChildError,
                            onSubmit: this.handleSubmit,
                            reportContentType: this.props.reportContext.contentType,
                            submitStatus: this.state.submitStatus,
                            title: this.props.title,
                            defaultDescription: this.props.defaultDescription
                        };
                        return this.state.showWizard ? this.props.data.loading ? a.createElement(b.Xa, null) : a.createElement(ae, i.__assign({}, e, {
                            user: this.props.sessionUser,
                            onBlock: this.onBlock,
                            onUnblock: this.onUnblock,
                            targetUser: this.props.data.targetUser,
                            trackAction: this.trackWizardAction,
                            trackClose: this.trackClose,
                            userBlocked: this.userBlocked
                        })) : a.createElement(E.c, i.__assign({}, e, {
                            targetUser: this.props.data.targetUser
                        }))
                    }
                    return a.createElement(b.Va, {
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(b.V, {
                        fontSize: b.Aa.Size5
                    }, Object(l.d)("The user you are trying to report does not exist", "ReportUser")))
                }, Object.defineProperty(t.prototype, "userBlocked", {
                    get: function() {
                        var e = this;
                        return !!(this.props.data.currentUser && this.props.data.currentUser.blockedUsers && this.props.data.currentUser.blockedUsers.find(function(t) {
                            return !!t && t.id === e.props.reportContext.targetUserID
                        }))
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(a.Component);
            var ue = Object(s.compose)(Object(c.a)(se, {
                name: "reportUserInCommunity"
            }), Object(c.a)(le, {
                name: "reportUser"
            }), Object(c.a)(ce, {
                options: function(e) {
                    return {
                        variables: {
                            targetUserID: e.reportContext.targetUserID
                        }
                    }
                }
            }), Object(f.c)("ReportUser", {
                autoReportInteractive: !0
            }), Object(d.a)(), Object(u.a)(), Object(o.connect)(function(e) {
                return {
                    sessionUser: e.session.user
                }
            }, null))(de)
        },
        efEE: function(e, t, n) {},
        fga6: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "user"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "User"
                        }
                    },
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
                                value: "broadcastSettings"
                            },
                            arguments: [],
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
                                        value: "title"
                                    },
                                    arguments: [],
                                    directives: []
                                }]
                            }
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
                                value: "login"
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
                                    value: "50"
                                }
                            }],
                            directives: []
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 104
                }
            };
            n.loc.source = {
                body: "fragment user on User {\nid\nbroadcastSettings {\nid\ntitle\n}\ndisplayName\nlogin\nprofileImageURL(width: 50)\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        gAd6: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "VideoPreviewCardGameID"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "name"
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
                        }
                    }],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "game"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "name"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "name"
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
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 73
                }
            };
            n.loc.source = {
                body: "query VideoPreviewCardGameID($name: String!) {\ngame(name: $name) {\nid\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        gIsd: function(e, t) {
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
                        }
                    }],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
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
                                        value: "text"
                                    },
                                    arguments: [],
                                    directives: []
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 114
                }
            };
            n.loc.source = {
                body: "query ReportUserModal_ReportReasons($content: ReportContentType!) {\nreportReasons(content: $content) {\nid\ntext\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        iS14: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return l
            });
            var r = n("mrSG"),
                i = n("yR8l"),
                a = n("8jSG"),
                o = n("cMjZ"),
                s = n("zixI");

            function l() {
                var e = this;
                return Object(i.a)(s, {
                    props: function(t) {
                        return {
                            unblockUserMutation: function(n, i) {
                                return r.__awaiter(e, void 0, void 0, function() {
                                    return r.__generator(this, function(e) {
                                        switch (e.label) {
                                            case 0:
                                                return t.mutate ? [4, t.mutate({
                                                    variables: {
                                                        input: {
                                                            targetUserID: n
                                                        }
                                                    },
                                                    optimisticResponse: {
                                                        unblockUser: {
                                                            __typename: "UnblockUserPayload",
                                                            targetUser: {
                                                                __typename: "User",
                                                                id: n
                                                            }
                                                        }
                                                    },
                                                    update: function(e) {
                                                        var t = e.readFragment({
                                                            id: Object(o.a)(i),
                                                            fragment: a
                                                        });
                                                        t && (t.blockedUsers = t.blockedUsers.filter(function(e) {
                                                            return null !== e && e.id !== n
                                                        }), e.writeFragment({
                                                            id: Object(o.a)(i),
                                                            fragment: a,
                                                            data: t
                                                        }))
                                                    }
                                                })] : [3, 2];
                                            case 1:
                                                return e.sent(), [3, 3];
                                            case 2:
                                                throw new Error("unblockUserMutation is not ready");
                                            case 3:
                                                return [2]
                                        }
                                    })
                                })
                            }
                        }
                    }
                })
            }
        },
        iyGE: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                i = n("yR8l"),
                a = 60,
                o = 60 * a,
                s = 24 * o,
                l = 7 * s,
                c = 4 * l;
            var d, u = n("4w0E");

            function p(e) {
                var t = this;
                return Object(i.a)(u, {
                    props: function(n) {
                        return {
                            banUserMutation: function(i, d) {
                                return void 0 === d && (d = null), r.__awaiter(t, void 0, void 0, function() {
                                    var t;
                                    return r.__generator(this, function(r) {
                                        switch (r.label) {
                                            case 0:
                                                if (t = e(n.ownProps).channelID, !n.mutate) return [3, 5];
                                                r.label = 1;
                                            case 1:
                                                return r.trys.push([1, 3, , 4]), [4, n.mutate({
                                                    variables: {
                                                        input: {
                                                            channelID: t,
                                                            bannedUserLogin: i,
                                                            expiresIn: d && function(e) {
                                                                if (!e) return "0s";
                                                                var t = e,
                                                                    n = "";
                                                                if (t > c) {
                                                                    var r = Math.floor(t / c);
                                                                    t -= r * c, n += r + "mo"
                                                                }
                                                                if (t > l) {
                                                                    var i = Math.floor(t / l);
                                                                    t -= i * l, n += i + "w"
                                                                }
                                                                if (t > s) {
                                                                    var d = Math.floor(t / s);
                                                                    t -= d * s, n += d + "d"
                                                                }
                                                                if (t > o) {
                                                                    var u = Math.floor(t / o);
                                                                    t -= u * o, n += u + "h"
                                                                }
                                                                if (t > a) {
                                                                    var p = Math.floor(t / a);
                                                                    t -= p * a, n += p + "m"
                                                                }
                                                                return t > 0 && (n += t + "s"), n
                                                            }(d)
                                                        }
                                                    }
                                                })];
                                            case 2:
                                                return [2, r.sent().data];
                                            case 3:
                                                throw r.sent(), new Error("Unable to ban user");
                                            case 4:
                                                return [3, 6];
                                            case 5:
                                                throw new Error("Ban user mutation is not ready");
                                            case 6:
                                                return [2]
                                        }
                                    })
                                })
                            }
                        }
                    }
                })
            }
            n.d(t, "a", function() {
                    return d
                }), n.d(t, "b", function() {
                    return p
                }),
                function(e) {
                    e.Forbidden = "FORBIDDEN", e.TargetNotFound = "TARGET_NOT_FOUND", e.TargetIsSelf = "TARGET_IS_SELF", e.TargetIsAnonymous = "TARGET_IS_ANONYMOUS", e.TargetIsMod = "TARGET_IS_MOD", e.TargetIsBroadcaster = "TARGET_IS_BROADCASTER", e.TargetIsStaff = "TARGET_IS_STAFF", e.TargetIsAdmin = "TARGET_IS_ADMIN", e.TargetIsGlobalMod = "TARGET_IS_GLOBAL_MOD", e.TargetIsAlreadyBanned = "TARGET_ALREADY_BANNED", e.DurationInvalid = "DURATION_INVALID"
                }(d || (d = {}))
        },
        j4u0: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return l
            });
            var r, i = n("/7QA"),
                a = n("D7An"),
                o = n("kRBY"),
                s = "gladiator_staff_alpha";

            function l() {
                var e = null;
                return function() {
                    if (null === e) {
                        var t = Object(o.e)(i.o.store.getState()),
                            n = t && t.roles && t.roles.isStaff;
                        e = !(!n || !i.b.get(s, !1)) || i.o.experiments.getAssignment(a.b.DiscoGladiator) === r.Variant1
                    }
                    return e
                }
            }! function(e) {
                e.Control = "control", e.Variant1 = "variant1"
            }(r || (r = {}))
        },
        jMH6: function(e, t, n) {
            var r = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "shelfClip"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Clip"
                        }
                    },
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
                                value: "slug"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "url"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "embedURL"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            alias: {
                                kind: "Name",
                                value: "clipTitle"
                            },
                            name: {
                                kind: "Name",
                                value: "title"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            alias: {
                                kind: "Name",
                                value: "clipViewCount"
                            },
                            name: {
                                kind: "Name",
                                value: "viewCount"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "curator"
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "FragmentSpread",
                                    name: {
                                        kind: "Name",
                                        value: "user"
                                    },
                                    directives: []
                                }]
                            }
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "game"
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "FragmentSpread",
                                    name: {
                                        kind: "Name",
                                        value: "game"
                                    },
                                    directives: []
                                }]
                            }
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "broadcaster"
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "FragmentSpread",
                                    name: {
                                        kind: "Name",
                                        value: "user"
                                    },
                                    directives: []
                                }]
                            }
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "thumbnailURL"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "width"
                                },
                                value: {
                                    kind: "IntValue",
                                    value: "480"
                                }
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "height"
                                },
                                value: {
                                    kind: "IntValue",
                                    value: "272"
                                }
                            }],
                            directives: []
                        }, {
                            kind: "Field",
                            alias: {
                                kind: "Name",
                                value: "clipCreatedAt"
                            },
                            name: {
                                kind: "Name",
                                value: "createdAt"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "durationSeconds"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "language"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "champBadge"
                            },
                            arguments: [],
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
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 377
                }
            };
            r.loc.source = {
                body: '#import "twilight/pages/front/v2/queries/user-fragment.gql"\n#import "twilight/pages/front/v2/queries/game-fragment.gql"\nfragment shelfClip on Clip {\nid\nslug\nurl\nembedURL\nclipTitle: title\nclipViewCount: viewCount\ncurator {\n...user\n}\ngame {\n...game\n}\nbroadcaster {\n...user\n}\nthumbnailURL(width:480 height:272)\nclipCreatedAt: createdAt\ndurationSeconds\nlanguage\nchampBadge {\nid\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var i = {};

            function a(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !i[t] && (i[t] = !0, !0)
                })
            }
            r.definitions = r.definitions.concat(a(n("fga6").definitions)), r.definitions = r.definitions.concat(a(n("0ubH").definitions)), e.exports = r
        },
        jeZI: function(e, t, n) {},
        jsEL: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                i = n("q1tI"),
                a = n("/7QA"),
                o = n("u5aL"),
                s = n("Ue10"),
                l = (n("wC0O"), {
                    TITLE: "clips-modal-title",
                    MAIN_BODY: "clips-modal-main-body",
                    SUCCESS_BODY: "clips-modal-success-body",
                    ERROR_BODY: "clips-modal-error-body",
                    SUBMIT_BUTTON: "clips-modal-submit-button",
                    CANCEL_BUTTON: "clips-modal-cancel-button"
                }),
                c = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderSuccess = function() {
                            return t.props.successContent ? i.createElement(s.xb, {
                                "data-test-selector": l.SUCCESS_BODY,
                                padding: {
                                    x: 2,
                                    y: 1
                                },
                                margin: {
                                    bottom: 1
                                },
                                borderMarked: !0,
                                background: s.r.Alt,
                                fullWidth: !0
                            }, i.createElement(s.V, {
                                type: s.Nb.Strong
                            }, t.props.successContent)) : null
                        }, t.renderError = function() {
                            return t.props.errorContent ? i.createElement(s.xb, {
                                "data-test-selector": l.ERROR_BODY,
                                padding: {
                                    x: 1,
                                    y: .5
                                },
                                margin: {
                                    bottom: 1
                                },
                                borderMarked: !0,
                                background: s.r.Alt,
                                fullWidth: !0
                            }, i.createElement(s.V, {
                                type: s.Nb.Strong,
                                color: s.O.Error
                            }, t.props.errorContent)) : null
                        }, t.onSubmit = function() {
                            t.props.onSubmit()
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return this.props.successContent ? i.createElement(o.a, {
                            onClickOut: this.props.onClose
                        }, i.createElement(s.xb, {
                            padding: 2,
                            background: s.r.Base,
                            className: "clip-modal"
                        }, this.renderSuccess(), i.createElement(s.Va, {
                            display: s.W.Flex,
                            justifyContent: s.Ua.Center
                        }, i.createElement(s.Va, {
                            margin: {
                                x: 1
                            }
                        }, i.createElement(s.z, {
                            "data-test-selector": l.CANCEL_BUTTON,
                            onClick: this.props.onClose
                        }, Object(a.d)("Close", "ClipsModal")))))) : i.createElement(o.a, {
                            onClickOut: this.props.onClose
                        }, i.createElement(s.xb, {
                            padding: 2,
                            background: s.r.Base,
                            className: "clip-modal"
                        }, i.createElement(s.xb, {
                            "data-test-selector": l.TITLE,
                            borderBottom: !0,
                            margin: {
                                bottom: 2
                            },
                            padding: {
                                bottom: 1
                            }
                        }, this.props.title), i.createElement(s.xb, {
                            "data-test-selector": l.MAIN_BODY,
                            borderBottom: !0,
                            margin: {
                                bottom: 2
                            },
                            padding: {
                                bottom: 2
                            }
                        }, this.renderError(), this.props.body), i.createElement(s.Va, {
                            display: s.W.Flex,
                            justifyContent: s.Ua.Center
                        }, i.createElement(s.Va, {
                            margin: {
                                x: 1
                            }
                        }, i.createElement(s.z, {
                            "data-test-selector": l.CANCEL_BUTTON,
                            type: s.F.Text,
                            onClick: this.props.onClose
                        }, Object(a.d)("Cancel", "ClipsModal"))), i.createElement(s.Va, {
                            margin: {
                                x: 1
                            }
                        }, i.createElement(s.z, {
                            "data-test-selector": l.SUBMIT_BUTTON,
                            type: this.props.buttonType ? this.props.buttonType : s.F.Default,
                            onClick: this.onSubmit,
                            disabled: this.props.submitDisabled
                        }, this.props.buttonContent), this.props.isLoading && i.createElement(s.Xa, {
                            delay: 0
                        })))))
                    }, t
                }(i.Component),
                d = n("iyGE"),
                u = n("GnwI"),
                p = 86400,
                m = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isLoading: !1,
                            hasErrored: !1,
                            hasSucceeded: !1
                        }, t.renderTitle = function() {
                            return t.props.isTemporary ? i.createElement(s.V, {
                                type: s.Nb.H5,
                                ellipsis: !0
                            }, Object(a.d)("Timeout this Clip Creator for 24 hours from Your Channel", "ClipsModalBanUser")) : i.createElement(s.V, {
                                type: s.Nb.H5,
                                ellipsis: !0
                            }, Object(a.d)("Ban this Clip Creator from Your Channel", "ClipsModalBanUser"))
                        }, t.renderBodyText = function() {
                            return t.props.isTemporary ? i.createElement(s.V, null, Object(a.d)("{clipCreator} will temporarily be timed out from creating clips and chatting in your channel for 24 hours.", {
                                clipCreator: t.props.targetUser.displayName
                            }, "ClipsModalBanUser")) : i.createElement(s.V, null, Object(a.d)("{clipCreator} will be permanently banned from creating clips and chatting in your channel.", {
                                clipCreator: t.props.targetUser.displayName
                            }, "ClipsModalBanUser"))
                        }, t.renderButtonText = function() {
                            return t.props.isTemporary ? Object(a.d)("Timeout User", "ClipsModalBanUser") : Object(a.d)("Ban User", "ClipsModalBanUser")
                        }, t.renderSuccess = function() {
                            return t.state.hasSucceeded ? Object(a.d)("Success!", "ClipsModalBanUser") : null
                        }, t.renderFailure = function() {
                            return t.state.hasErrored ? t.props.isTemporary ? Object(a.d)("There was a problem timing out this clip creator", "ClipsModalBanUser") : Object(a.d)("There was a problem banning this clip creator", "ClipsModalBanUser") : null
                        }, t.banUser = function() {
                            return r.__awaiter(t, void 0, void 0, function() {
                                var e, t;
                                return r.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            this.setState({
                                                isLoading: !0,
                                                hasSucceeded: !1,
                                                hasErrored: !1
                                            }), e = this.props.targetUser.login, t = this.props.isTemporary ? this.props.banUserMutation(e, p) : this.props.banUserMutation(e), n.label = 1;
                                        case 1:
                                            return n.trys.push([1, 3, , 4]), [4, t];
                                        case 2:
                                            return n.sent().banUserFromChatRoom.error ? this.setState({
                                                hasErrored: !0,
                                                isLoading: !1
                                            }) : this.setState({
                                                hasSucceeded: !0,
                                                isLoading: !1
                                            }), [3, 4];
                                        case 3:
                                            return n.sent(), this.setState({
                                                hasErrored: !0,
                                                isLoading: !1
                                            }), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return i.createElement(c, {
                            onSubmit: this.banUser,
                            onClose: this.props.onClose,
                            title: this.renderTitle(),
                            body: this.renderBodyText(),
                            buttonContent: this.renderButtonText(),
                            buttonType: s.F.Alert,
                            submitDisabled: this.state.isLoading || this.state.hasSucceeded,
                            successContent: this.renderSuccess(),
                            errorContent: this.renderFailure(),
                            isLoading: this.state.isLoading
                        })
                    }, t
                }(i.Component),
                h = Object(u.c)("ClipsModalBanUser")(Object(d.b)(function(e) {
                    return {
                        channelID: e.broadcasterID
                    }
                })(m)),
                g = n("yR8l"),
                f = n("vUXZ");

            function v(e) {
                return Object(g.a)(f, e)
            }
            var b = n("DJtx"),
                k = (n("n9Ey"), {
                    isLoading: !1,
                    hasErrored: !1,
                    hasSucceeded: !1
                }),
                y = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.onDeleteClick = function() {
                            return r.__awaiter(n, void 0, void 0, function() {
                                return r.__generator(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            this.setState({
                                                isLoading: !0,
                                                hasSucceeded: !1,
                                                hasErrored: !1
                                            }), e.label = 1;
                                        case 1:
                                            return e.trys.push([1, 3, , 4]), this.props.data.clip ? [4, this.props.deleteClip(this.props.slug)] : [2];
                                        case 2:
                                            return e.sent(), this.setState({
                                                isLoading: !1,
                                                hasSucceeded: !0
                                            }), [3, 4];
                                        case 3:
                                            return e.sent(), this.setState({
                                                isLoading: !1,
                                                hasErrored: !0
                                            }), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, n.state = k, n
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = [i.createElement(s.V, {
                            key: "title",
                            type: s.Nb.H4
                        }, Object(a.d)("Delete This Clip", "ClipsModalDelete")), i.createElement(s.Va, {
                            key: "message",
                            margin: {
                                top: 1
                            }
                        }, i.createElement(s.V, {
                            type: s.Nb.P,
                            color: s.O.Alt2
                        }, Object(a.d)("This clip will be permanently deleted.", "ClipsModalDelete")))];
                        if (!this.props.data.clip) return null;
                        var t = null;
                        this.props.data.clip.curator && (t = i.createElement("span", null, " • ", Object(a.d)("Clipped by {curator}", {
                            curator: this.props.data.clip.curator.login
                        }, "ClipsModalDelete")));
                        var n = i.createElement(s.xb, {
                            display: s.W.Flex,
                            flexWrap: s.Z.NoWrap
                        }, i.createElement(s.Va, {
                            className: "clips-modal-delete__thumb",
                            margin: {
                                right: 1
                            }
                        }, i.createElement(s.o, {
                            ratio: s.p.Aspect16x9
                        }, i.createElement("img", {
                            src: this.props.data.clip.thumbnailURL
                        }))), i.createElement(s.Va, null, i.createElement(s.V, {
                            type: s.Nb.H5
                        }, this.props.data.clip.title), i.createElement(s.V, {
                            color: s.O.Alt2
                        }, Object(a.d)("{created, date, medium}", {
                            created: new Date(this.props.data.clip.createdAt)
                        }, "ClipsModalDelete"), t), i.createElement(s.V, {
                            color: s.O.Alt2
                        }, Object(a.d)("{viewCount, number} views", {
                            viewCount: this.props.data.clip.viewCount
                        }, "ClipsModalDelete"))));
                        return i.createElement(c, {
                            onSubmit: this.onDeleteClick,
                            onClose: this.props.onClose,
                            title: e,
                            body: n,
                            buttonContent: Object(a.d)("Delete", "ClipsModalDelete"),
                            buttonType: s.F.Alert,
                            submitDisabled: this.state.hasSucceeded || this.state.isLoading,
                            successContent: this.state.hasSucceeded ? Object(a.d)("Success!", "ClipsModalDelete") : null,
                            errorContent: this.state.hasErrored ? Object(a.d)("There was a problem deleting this clip.", "ClipsModalDelete") : null,
                            isLoading: this.state.isLoading
                        })
                    }, t
                }(i.Component),
                C = Object(g.a)(b)(v({
                    props: function(e) {
                        return {
                            deleteClip: function(t) {
                                return r.__awaiter(void 0, void 0, void 0, function() {
                                    var n;
                                    return r.__generator(this, function(r) {
                                        switch (r.label) {
                                            case 0:
                                                return r.trys.push([0, 2, , 3]), [4, e.mutate({
                                                    variables: {
                                                        input: {
                                                            slugs: [t]
                                                        }
                                                    }
                                                })];
                                            case 1:
                                                return r.sent(), e.ownProps.onDelete && e.ownProps.onDelete(t), [3, 3];
                                            case 2:
                                                throw n = r.sent(), a.j.error(n, "Failed to delete clip"), n;
                                            case 3:
                                                return [2]
                                        }
                                    })
                                })
                            }
                        }
                    }
                })(y)),
                S = n("oJmH"),
                w = n("Vsf8"),
                T = {
                    isLoading: !1,
                    hasErrored: !1,
                    hasSucceeded: !1
                },
                _ = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.deleteAll = function() {
                            return r.__awaiter(n, void 0, void 0, function() {
                                return r.__generator(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            this.setState({
                                                isLoading: !0,
                                                hasSucceeded: !1,
                                                hasErrored: !1
                                            }), e.label = 1;
                                        case 1:
                                            return e.trys.push([1, 3, , 4]), [4, this.props.deleteAllClips(this.props.broadcastID, this.props.videoID)];
                                        case 2:
                                            return e.sent(), this.setState({
                                                isLoading: !1,
                                                hasSucceeded: !0
                                            }), [3, 4];
                                        case 3:
                                            return e.sent(), this.setState({
                                                isLoading: !1,
                                                hasErrored: !0
                                            }), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, n.renderSuccess = function() {
                            return n.state.hasSucceeded ? Object(a.d)("A request has been made to delete the clip. Please wait a few minutes for this to take effect.", "ClipsModalDeleteAll") : null
                        }, n.renderFailure = function() {
                            return n.state.hasErrored ? Object(a.d)("There was a problem deleting this clip.", "ClipsModalDeleteAll") : null
                        }, n.state = T, n
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = i.createElement(s.V, {
                            type: s.Nb.P
                        }, Object(a.d)("This clip and all other clips created from the same video will be permanently deleted.", "ClipsModalDeleteAll"));
                        return i.createElement(c, {
                            onSubmit: this.deleteAll,
                            onClose: this.props.onClose,
                            title: i.createElement(s.V, {
                                type: s.Nb.H4
                            }, Object(a.d)("Delete All Clips from Related Video", "ClipsModalDeleteAll")),
                            body: e,
                            buttonContent: Object(a.d)("Delete", "ClipsModalDeleteAll"),
                            buttonType: s.F.Alert,
                            submitDisabled: this.state.isLoading || this.state.hasSucceeded || "" === this.props.broadcastID,
                            isLoading: this.state.isLoading,
                            successContent: this.renderSuccess(),
                            errorContent: this.renderFailure()
                        })
                    }, t
                }(i.Component),
                O = Object(S.compose)(Object(u.c)("ClipsModalDeleteAll"), v({
                    props: function(e) {
                        return {
                            deleteAllClips: function(t, n) {
                                return r.__awaiter(void 0, void 0, void 0, function() {
                                    var i, o, s;
                                    return r.__generator(this, function(r) {
                                        switch (r.label) {
                                            case 0:
                                                return r.trys.push([0, 6, , 7]), i = void 0, n ? [4, e.mutate({
                                                    variables: {
                                                        input: {
                                                            videoID: n
                                                        }
                                                    }
                                                })] : [3, 2];
                                            case 1:
                                                return o = r.sent(), i = o.data, [3, 5];
                                            case 2:
                                                return t ? [4, e.mutate({
                                                    variables: {
                                                        input: {
                                                            broadcastID: t
                                                        }
                                                    }
                                                })] : [3, 4];
                                            case 3:
                                                return o = r.sent(), i = o.data, [3, 5];
                                            case 4:
                                                throw new Error("Invalid broadcastID specified for deleteAllClips");
                                            case 5:
                                                return e.ownProps.onDeleteAll && e.ownProps.onDeleteAll(i.deleteClips.clips), [3, 7];
                                            case 6:
                                                throw s = r.sent(), a.j.error(s, "Failed to delete clips from VOD"), s;
                                            case 7:
                                                return [2]
                                        }
                                    })
                                })
                            }
                        }
                    }
                }), Object(g.a)(w, {
                    props: function(e) {
                        var t = e.data.clip;
                        return t ? {
                            videoID: t.video ? t.video.id : null,
                            broadcastID: t.broadcast.id
                        } : {
                            videoID: null,
                            broadcastID: ""
                        }
                    },
                    options: function(e) {
                        return {
                            variables: {
                                slug: e.slug
                            }
                        }
                    }
                }))(_),
                E = {
                    isLoading: !1,
                    hasErrored: !1,
                    hasSucceeded: !1
                },
                I = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.renderSuccess = function() {
                            return n.state.hasSucceeded ? Object(a.d)("Clips successfully deleted.", "ClipsModalBatchDelete") : null
                        }, n.renderError = function() {
                            return n.state.hasErrored ? Object(a.d)("There was a problem deleting this clip.", "ClipsModalBatchDelete") : null
                        }, n.onDeleteClick = function() {
                            return r.__awaiter(n, void 0, void 0, function() {
                                return r.__generator(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            this.setState({
                                                isLoading: !0,
                                                hasSucceeded: !1,
                                                hasErrored: !1
                                            }), e.label = 1;
                                        case 1:
                                            return e.trys.push([1, 3, , 4]), [4, this.props.deleteClips()];
                                        case 2:
                                            return e.sent(), this.setState({
                                                hasSucceeded: !0,
                                                isLoading: !1
                                            }), [3, 4];
                                        case 3:
                                            return e.sent(), this.setState({
                                                hasErrored: !0,
                                                isLoading: !1
                                            }), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, n.state = E, n
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = i.createElement(s.V, {
                                type: s.Nb.H4
                            }, Object(a.d)("Delete these clips?", "ClipsModalBatchDelete")),
                            t = i.createElement(s.V, {
                                type: s.Nb.P
                            }, Object(a.d)("These clips will be permanently deleted. Are you sure?", "ClipsModalBatchDelete"));
                        return i.createElement(c, {
                            onSubmit: this.onDeleteClick,
                            onClose: this.props.onClose,
                            title: e,
                            body: t,
                            buttonContent: Object(a.d)("Delete", "ClipsModalBatchDelete"),
                            buttonType: s.F.Alert,
                            submitDisabled: this.state.hasSucceeded || this.state.isLoading,
                            isLoading: this.state.isLoading,
                            successContent: this.renderSuccess(),
                            errorContent: this.renderError()
                        })
                    }, t
                }(i.Component),
                N = v({
                    props: function(e) {
                        return {
                            deleteClips: function() {
                                return r.__awaiter(void 0, void 0, void 0, function() {
                                    var t;
                                    return r.__generator(this, function(n) {
                                        switch (n.label) {
                                            case 0:
                                                return n.trys.push([0, 2, , 3]), [4, e.mutate({
                                                    variables: {
                                                        input: {
                                                            slugs: e.ownProps.clipSlugs
                                                        }
                                                    }
                                                })];
                                            case 1:
                                                return n.sent(), e.ownProps.onBatchDelete && e.ownProps.onBatchDelete(), [3, 3];
                                            case 2:
                                                throw t = n.sent(), a.j.error(t, "Failed to delete clips"), t;
                                            case 3:
                                                return [2]
                                        }
                                    })
                                })
                            }
                        }
                    }
                })(I);
            n.d(t, "a", function() {
                return c
            }), n.d(t, "b", function() {
                return h
            }), n.d(t, "d", function() {
                return C
            }), n.d(t, "e", function() {
                return O
            }), n.d(t, "c", function() {
                return N
            })
        },
        jtyt: function(e, t, n) {
            "use strict";
            var r, i;
            n.d(t, "b", function() {
                    return r
                }), n.d(t, "a", function() {
                    return i
                }),
                function(e) {
                    e[e.Unspecified = 0] = "Unspecified", e[e.NotInterested = 1] = "NotInterested", e[e.AlreadyWatched = 3] = "AlreadyWatched", e[e.Other = 4] = "Other"
                }(r || (r = {})),
                function(e) {
                    e[e.Channel = 1] = "Channel", e[e.Category = 2] = "Category", e[e.Shelf = 3] = "Shelf", e[e.Vod = 4] = "Vod"
                }(i || (i = {}))
        },
        kDHn: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "FrontPageNew_User"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "limit"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Int"
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
                                value: "currentUser"
                            },
                            arguments: [],
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
                                        value: "createdAt"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "followedGames"
                                    },
                                    arguments: [{
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "first"
                                        },
                                        value: {
                                            kind: "Variable",
                                            name: {
                                                kind: "Name",
                                                value: "limit"
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
                                                value: "nodes"
                                            },
                                            arguments: [],
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
                    end: 115
                }
            };
            n.loc.source = {
                body: "query FrontPageNew_User($limit: Int) {\ncurrentUser {\nid\ncreatedAt\nfollowedGames(first: $limit) {\nnodes {\nid\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "kF1+": function(e, t, n) {},
        kSkr: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "BlockUser"
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
                                    value: "BlockUserInput"
                                }
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
                                value: "blockUser"
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
                                    name: {
                                        kind: "Name",
                                        value: "targetUser"
                                    },
                                    arguments: [],
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
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 94
                }
            };
            n.loc.source = {
                body: "mutation BlockUser($input: BlockUserInput!) {\nblockUser(input: $input) {\ntargetUser {\nid\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        kVMo: function(e, t, n) {},
        kW4h: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "FeaturedContentCarouselStreams"
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
                        }
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
                        }
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "acceptedMature"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Boolean"
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
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "acceptedMature"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "acceptedMature"
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
                                        value: "imageURL"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "isScheduled"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "isSponsored"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "priorityLevel"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
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
                                                        value: "id"
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
                                                            value: "150"
                                                        }
                                                    }],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "login"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }]
                                            }
                                        }, {
                                            kind: "Field",
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
                                                        value: "name"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }]
                                            }
                                        }, {
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
                                                value: "type"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "viewersCount"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
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
                                            directives: []
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "title"
                                    },
                                    arguments: [],
                                    directives: []
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 390
                }
            };
            n.loc.source = {
                body: "query FeaturedContentCarouselStreams($language: String $first: Int $acceptedMature: Boolean) {\nfeaturedStreams(language: $language first: $first acceptedMature: $acceptedMature) {\nimageURL\nisScheduled\nisSponsored\npriorityLevel\nstream {\nbroadcaster {\ndisplayName\nid\nprofileImageURL(width: 150)\nlogin\n}\ngame {\nid\nname\n}\nid\ntype\nviewersCount\npreviewImageURL(width: 320 height: 180)\n}\ntitle\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        lRiI: function(e, t, n) {},
        m493: function(e, t, n) {},
        mhEZ: function(e, t, n) {},
        mz1O: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            }), n.d(t, "b", function() {
                return a
            }), n.d(t, "c", function() {
                return o
            }), n.d(t, "d", function() {
                return s
            }), n.d(t, "e", function() {
                return l
            }), n.d(t, "f", function() {
                return c
            });
            var r = n("mrSG"),
                i = function() {
                    return r.__awaiter(void 0, void 0, void 0, function() {
                        return r.__generator(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, n.e(172).then(function() {
                                        var e = n("vrl6");
                                        return Object.assign({}, e, {
                                            default: e
                                        })
                                    })];
                                case 1:
                                    return [2, e.sent().items]
                            }
                        })
                    })
                },
                a = function() {
                    return r.__awaiter(void 0, void 0, void 0, function() {
                        return r.__generator(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, n.e(171).then(function() {
                                        var e = n("+4ZJ");
                                        return Object.assign({}, e, {
                                            default: e
                                        })
                                    })];
                                case 1:
                                    return [2, e.sent().items]
                            }
                        })
                    })
                },
                o = function() {
                    return r.__awaiter(void 0, void 0, void 0, function() {
                        return r.__generator(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, n.e(170).then(function() {
                                        var e = n("nSs0");
                                        return Object.assign({}, e, {
                                            default: e
                                        })
                                    })];
                                case 1:
                                    return [2, e.sent().items]
                            }
                        })
                    })
                },
                s = function() {
                    return r.__awaiter(void 0, void 0, void 0, function() {
                        return r.__generator(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, n.e(169).then(function() {
                                        var e = n("1Bro");
                                        return Object.assign({}, e, {
                                            default: e
                                        })
                                    })];
                                case 1:
                                    return [2, e.sent().items]
                            }
                        })
                    })
                },
                l = function() {
                    return r.__awaiter(void 0, void 0, void 0, function() {
                        return r.__generator(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, n.e(168).then(function() {
                                        var e = n("Dpq/");
                                        return Object.assign({}, e, {
                                            default: e
                                        })
                                    })];
                                case 1:
                                    return [2, e.sent().items]
                            }
                        })
                    })
                },
                c = function() {
                    return r.__awaiter(void 0, void 0, void 0, function() {
                        return r.__generator(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, n.e(167).then(function() {
                                        var e = n("bVYI");
                                        return Object.assign({}, e, {
                                            default: e
                                        })
                                    })];
                                case 1:
                                    return [2, e.sent().items]
                            }
                        })
                    })
                }
        },
        "n/Dx": function(e, t, n) {},
        n9Ey: function(e, t, n) {},
        nt5g: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "RoleRestricted"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "contentOwnerLogin"
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
                        }
                    }],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
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
                                        value: "roles"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "isStaff"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
                                }]
                            }
                        }, {
                            kind: "Field",
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
                                        value: "contentOwnerLogin"
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
                                        value: "self"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "isEditor"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 147
                }
            };
            n.loc.source = {
                body: "query RoleRestricted($contentOwnerLogin: String!) {\ncurrentUser {\nid\nroles {\nisStaff\n}\n}\nuser(login: $contentOwnerLogin) {\nid\nself {\nisEditor\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        oJov: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                i = n("q1tI"),
                a = n("/7QA"),
                o = n("Ue10"),
                s = (n("1mcJ"), function(e) {
                    return i.createElement(o.Va, r.__assign({
                        className: "drops-badge",
                        position: o.db.Absolute,
                        attachTop: !0,
                        attachRight: !0
                    }, Object(o.bc)(e)), i.createElement(o.Qb, {
                        direction: o.Sb.Top,
                        align: o.Rb.Right,
                        label: Object(a.d)("Offers in-game Drops", "DropsBadge")
                    }, i.createElement(o.xb, {
                        className: "drops-badge__drops-icon",
                        position: o.db.Relative,
                        padding: {
                            top: .5,
                            right: .5,
                            bottom: 3,
                            left: 3
                        },
                        overflow: o.Ya.Hidden,
                        color: o.O.Overlay,
                        zIndex: o.ac.Default
                    }, i.createElement(o.T, {
                        type: o.U.Inherit,
                        hoverColorInherit: !0,
                        to: "https://help.twitch.tv/customer/en/portal/articles/2754380-how-to-earn-drops"
                    }, i.createElement(o.mb, {
                        asset: o.nb.Drops
                    })))))
                }),
                l = n("0LAi"),
                c = n("fVj5"),
                d = function(e) {
                    return i.createElement(o.Va, null, i.createElement(o.y, r.__assign({}, e)), Object(c.a)() && e.tagListProps && 0 !== e.tagListProps.tags.length && i.createElement(o.Va, {
                        margin: {
                            top: .5
                        }
                    }, i.createElement(l.a, r.__assign({}, e.tagListProps, {
                        tagNumberLimit: 3
                    }))), !0 === e.showDropsBadge && i.createElement(s, null))
                };
            n.d(t, "a", function() {
                return d
            })
        },
        r62z: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return l
            }), n.d(t, "c", function() {
                return c
            }), n.d(t, "b", function() {
                return d
            }), n.d(t, "d", function() {
                return u
            });
            var r = n("+GjP"),
                i = "https://www.facebook.com/sharer/sharer.php",
                a = "https://www.twitter.com/share",
                o = "https://www.reddit.com/submit",
                s = "https://vk.com/share.php";

            function l(e) {
                return Object(r.e)(i, {
                    u: e
                })
            }

            function c(e, t) {
                return Object(r.e)(a, {
                    url: e,
                    text: t
                })
            }

            function d(e, t) {
                return Object(r.e)(o, {
                    url: e,
                    title: t
                })
            }

            function u(e) {
                return Object(r.e)(s, {
                    url: e
                })
            }
        },
        s8Ou: function(e, t) {
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
                        }
                    }],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
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
                                    name: {
                                        kind: "Name",
                                        value: "contentID"
                                    },
                                    arguments: [],
                                    directives: []
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 111
                }
            };
            n.loc.source = {
                body: "mutation ReportUserModal_ReportUser($input: ReportContentInput!) {\nreportContent(input: $input) {\ncontentID\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        uX80: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return c
            });
            var r = n("mrSG"),
                i = n("q1tI"),
                a = n("fvjX"),
                o = n("GnwI"),
                s = n("Ue10"),
                l = (n("TVuH"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.selectOnFocus = function(e) {
                            e.currentTarget.select(), t.props.onSelection && t.props.onSelection()
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return i.createElement(s.Va, r.__assign({
                            position: s.db.Relative,
                            className: "selectable-input-wrapper"
                        }, Object(s.bc)(this.props)), i.createElement(s.Pa, {
                            type: s.Ra.Text,
                            value: this.props.text,
                            readOnly: !0,
                            onFocus: this.selectOnFocus,
                            icon: this.props.iconAsset,
                            id: this.props.id
                        }), this.props.children)
                    }, t
                }(i.Component)),
                c = Object(a.compose)(Object(o.c)("SelectableInput"))(l)
        },
        v8tf: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ClipsDownloadButton"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "slug"
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
                            name: {
                                kind: "Name",
                                value: "clip"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "slug"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "slug"
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
                                        value: "broadcaster"
                                    },
                                    arguments: [],
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
                                        }]
                                    }
                                }, {
                                    kind: "Field",
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
                                                value: "name"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "videoQualities"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "sourceURL"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 131
                }
            };
            n.loc.source = {
                body: "query ClipsDownloadButton($slug: ID!) {\nclip(slug: $slug) {\nid\nbroadcaster {\nid\n}\ngame {\nid\nname\n}\nvideoQualities {\nsourceURL\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        vDRX: function(e, t, n) {},
        vUXZ: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "Clips_DeleteClips"
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
                                    value: "DeleteClipsInput"
                                }
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
                                value: "deleteClips"
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
                                    name: {
                                        kind: "Name",
                                        value: "clips"
                                    },
                                    arguments: [],
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
                                                value: "slug"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 106
                }
            };
            n.loc.source = {
                body: "mutation Clips_DeleteClips($input: DeleteClipsInput!) {\ndeleteClips(input: $input) {\nclips {\nid\nslug\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        vhpE: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return m
            }), n.d(t, "a", function() {
                return h
            });
            var r, i = n("mrSG"),
                a = n("q1tI"),
                o = n("wbMx"),
                s = n("+GjP"),
                l = n("2xye"),
                c = n("MLDe"),
                d = n("McYG"),
                u = n("4L7N"),
                p = n("Ue10"),
                m = [{
                    type: o.b.Twitter,
                    params: {
                        tt_medium: "twtr"
                    }
                }, {
                    type: o.b.Facebook,
                    params: {
                        tt_medium: "fb"
                    }
                }, {
                    type: o.b.Reddit,
                    params: {
                        tt_medium: "redt"
                    }
                }, {
                    type: o.b.Copy
                }];
            ! function(e) {
                e.MainContainer = "main-container", e.DownloadButtonContainer = "download-button-container", e.ShareButtonTwitter = "share-button-twitter", e.ShareButtonFacebook = "share-button-facebook", e.ShareButtonReddit = "share-button-reddit", e.ShareButtonCopy = "share-button-copy"
            }(r || (r = {}));
            var h = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = {
                            margin: {
                                right: 1
                            }
                        },
                        t = {};
                    return this.props.asBalloon && (t = {
                        justifyContent: p.Ua.Between
                    }, e = {}), a.createElement(p.Va, i.__assign({
                        className: "clips-social-share",
                        display: p.W.Flex,
                        flexWrap: p.Z.NoWrap
                    }, t, {
                        "data-test-selector": r.MainContainer
                    }), a.createElement(p.Va, i.__assign({
                        display: p.W.InlineBlock
                    }, e, {
                        "data-test-selector": r.DownloadButtonContainer
                    }), a.createElement(u.a, {
                        broadcasterLogin: this.props.clip.broadcaster && this.props.clip.broadcaster.login || "",
                        broadcasterId: this.props.clip.broadcaster && this.props.clip.broadcaster.id || "",
                        slug: this.props.clip.slug,
                        pageType: this.props.pageType
                    })), this.renderSocialButton(e, r.ShareButtonTwitter, o.b.Twitter, {
                        tt_medium: "twtr"
                    }), this.renderSocialButton(e, r.ShareButtonFacebook, o.b.Facebook, {
                        tt_medium: "fb"
                    }), this.renderSocialButton(e, r.ShareButtonReddit, o.b.Reddit, {
                        tt_medium: "redt"
                    }), this.renderSocialButton(e, r.ShareButtonCopy, o.b.Copy))
                }, t.prototype.renderSocialButton = function(e, t, n, r) {
                    var u = Object(s.e)(this.props.clip.url, r);
                    return this.props.pageType === l.PageviewLocation.ClipsWatchPage && this.props.clip.broadcaster && this.props.clip.broadcaster.login && (u = Object(s.e)(Object(d.a)(this.props.clip.slug, this.props.clip.broadcaster.login), r)), a.createElement(p.Va, i.__assign({
                        key: n
                    }, e, {
                        "data-test-selector": t
                    }), a.createElement(o.a, {
                        key: n,
                        type: n,
                        text: this.props.clip.title,
                        url: u,
                        onShareClick: Object(c.c)(this.props.clip.id, this.props.clip.game && this.props.clip.game.name, this.props.clip.broadcaster && this.props.clip.broadcaster.id, this.props.clip.broadcaster && this.props.clip.broadcaster.login, this.props.pageType)
                    }))
                }, t
            }(a.Component)
        },
        wC0O: function(e, t, n) {},
        wbMx: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return r
            }), n.d(t, "a", function() {
                return d
            });
            var r, i = n("mrSG"),
                a = n("q1tI"),
                o = n("/7QA"),
                s = n("Jxh/"),
                l = n("r62z"),
                c = n("Ue10");
            n("jeZI");
            ! function(e) {
                e[e.Twitter = 0] = "Twitter", e[e.Reddit = 1] = "Reddit", e[e.VKontakte = 2] = "VKontakte", e[e.Facebook = 3] = "Facebook", e[e.Copy = 4] = "Copy", e[e.CopyInput = 5] = "CopyInput", e[e.Download = 6] = "Download"
            }(r || (r = {}));
            var d = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.renderLink = function() {
                        var e = "social-button__link " + n.addSocialClassModifier("social-button__link");
                        return n.props.type === r.Download ? a.createElement("a", i.__assign({
                            href: n.props.url,
                            target: "_blank",
                            className: e,
                            onClick: n.onShareClickHandler
                        }, Object(c.bc)(n.props), {
                            download: n.props.text
                        }), n.renderIcon()) : n.isLink() ? a.createElement("a", i.__assign({
                            href: n.getLinkTarget(),
                            target: "_blank",
                            className: e,
                            onClick: n.onShareClickHandler
                        }, Object(c.bc)(n.props)), n.renderIcon()) : a.createElement("button", i.__assign({
                            onClick: n.copyPageUrl,
                            onMouseLeave: n.clearIsCopiedStatus,
                            className: e
                        }, Object(c.bc)(n.props)), n.renderIcon())
                    }, n.onShareClickHandler = function() {
                        n.props.onShareClick && n.props.onShareClick(n.props.type)
                    }, n.clearIsCopiedStatus = function() {
                        n.setState({
                            isCopied: !1
                        })
                    }, n.getUrl = function() {
                        return n.props.url || window.location.href
                    }, n.copyPageUrl = function(e) {
                        e && e.preventDefault(), n.props.onShareClick && n.props.onShareClick(n.props.type), Object(s.a)(n.getUrl()), n.setState({
                            isCopied: !0
                        })
                    }, n.renderIcon = function() {
                        var e = n.getAssetFromType();
                        return a.createElement(c.Va, {
                            className: "social-button__icon " + n.addSocialClassModifier("social-button__icon"),
                            display: c.W.Flex,
                            alignItems: c.f.Center,
                            justifyContent: c.Ua.Center
                        }, a.createElement(c.mb, {
                            asset: e
                        }))
                    }, n.isLink = function() {
                        return n.props.type !== r.Copy
                    }, n.getTooltipFromType = function() {
                        switch (n.props.type) {
                            case r.Twitter:
                                return "Twitter";
                            case r.Reddit:
                                return "Reddit";
                            case r.Facebook:
                                return "Facebook";
                            case r.VKontakte:
                                return "VKontakte";
                            case r.Download:
                                return Object(o.d)("Download", "SocialButton");
                            case r.Copy:
                                return n.state.isCopied ? Object(o.d)("Copied", "SocialButton") : Object(o.d)("Copy to clipboard", "SocialButton");
                            default:
                                return ""
                        }
                    }, n.getAssetFromType = function() {
                        switch (n.props.type) {
                            case r.Twitter:
                                return c.nb.Twitter;
                            case r.Facebook:
                                return c.nb.Facebook;
                            case r.VKontakte:
                                return c.nb.VKontakte;
                            case r.Reddit:
                                return c.nb.Reddit;
                            case r.Download:
                                return c.nb.Download;
                            case r.Copy:
                            default:
                                return c.nb.Copy
                        }
                    }, n.addSocialClassModifier = function(e) {
                        switch (n.props.type) {
                            case r.Twitter:
                                return e + "--twitter";
                            case r.Reddit:
                                return e + "--reddit";
                            case r.Facebook:
                                return e + "--facebook";
                            case r.VKontakte:
                                return e + "--vkontakte";
                            case r.Download:
                                return e + "--download";
                            case r.Copy:
                                return e + "--copy";
                            default:
                                return ""
                        }
                    }, n.getLinkTarget = function() {
                        var e = n.props,
                            t = e.text,
                            i = e.type,
                            a = n.getUrl(),
                            o = t || "";
                        switch (i) {
                            case r.Reddit:
                                return Object(l.b)(a, o);
                            case r.VKontakte:
                                return Object(l.d)(a);
                            case r.Facebook:
                                return Object(l.a)(a);
                            case r.Twitter:
                                return Object(l.c)(a, o);
                            default:
                                return ""
                        }
                    }, n.state = {
                        isCopied: !1
                    }, n
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(c.Va, {
                        className: "social-button"
                    }, a.createElement(c.Qb, {
                        label: this.getTooltipFromType(),
                        direction: c.Sb.Bottom
                    }, this.renderLink()))
                }, t
            }(a.Component)
        },
        x75U: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return l
            }), n.d(t, "b", function() {
                return c
            });
            var r = n("mrSG"),
                i = n("17x9"),
                a = n("q1tI"),
                o = n("2xye"),
                s = n("yI6f"),
                l = {
                    cardIDtoItemTrackingIDMap: i.object,
                    trackTitleClick: i.func,
                    trackTitleImpression: i.func,
                    trackImpression: i.func,
                    trackClick: i.func
                };

            function c() {
                return function(e) {
                    return function(t) {
                        function n(e) {
                            var n = t.call(this, e) || this;
                            return n.getChildContext = function() {
                                return {
                                    trackTitleClick: n.trackTitleClick,
                                    trackTitleImpression: n.trackTitleImpression,
                                    trackImpression: n.trackImpression,
                                    trackClick: n.trackClick,
                                    cardIDtoItemTrackingIDMap: n.state.cardIDtoItemTrackingIDMap
                                }
                            }, n.mapShelfCardsToRequestIDs = function(e, t, n) {
                                return void 0 === n && (n = {}), e.reduce(function(e, n) {
                                    return n.node && !e[n.node.id] && (e[n.node.id] = t), e
                                }, n)
                            }, n.trackTitleImpression = function(e) {
                                var t = Object(s.f)(e.title),
                                    r = t.reasonType,
                                    i = t.reasonTarget,
                                    a = t.rowName,
                                    l = Object(s.e)(),
                                    c = {
                                        component: s.a.Header,
                                        contentEdge: null,
                                        itemTrackingID: l,
                                        itemPosition: null,
                                        reasonType: r,
                                        reasonTarget: i,
                                        reasonTargetType: null,
                                        requestID: n.props.requestID,
                                        rowName: a,
                                        rowPosition: n.props.position,
                                        tagID: null,
                                        filtered: !1,
                                        tagSet: "[]",
                                        tagStreamerSet: "[]"
                                    };
                                Object(s.h)(c, o.PageviewContent.HeaderGameName), n.setState({
                                    headerImpressionID: l
                                })
                            }, n.trackTitleClick = function() {
                                var e = n.props.shelf,
                                    t = Object(s.f)(e.title),
                                    r = t.reasonType,
                                    i = t.reasonTarget,
                                    a = t.reasonTargetType,
                                    l = t.rowName,
                                    c = {
                                        component: s.a.Header,
                                        contentEdge: null,
                                        itemTrackingID: n.state.headerImpressionID,
                                        requestID: n.state.headerRequestID,
                                        itemPosition: null,
                                        rowPosition: n.props.position,
                                        reasonType: r,
                                        reasonTarget: i,
                                        reasonTargetType: a,
                                        rowName: l,
                                        tagID: null,
                                        filtered: !1,
                                        tagSet: "[]",
                                        tagStreamerSet: "[]"
                                    };
                                Object(s.g)(c, o.PageviewContent.HeaderGameName)
                            }, n.trackImpression = function(e, t, r, i) {
                                if (t.node && !n.state.cardIDtoItemTrackingIDMap[t.node.id]) {
                                    var a = Object(s.e)(),
                                        o = Object(s.f)(e.title),
                                        l = o.reasonType,
                                        c = o.reasonTarget,
                                        d = o.reasonTargetType,
                                        u = o.rowName,
                                        p = {
                                            component: s.a.Card,
                                            contentEdge: t,
                                            itemTrackingID: a,
                                            itemPosition: r,
                                            reasonType: l,
                                            reasonTarget: c,
                                            reasonTargetType: d,
                                            requestID: n.state.cardIDtoRequestIDMap[t.node.id],
                                            rowName: u,
                                            rowPosition: n.props.position,
                                            tagID: null,
                                            filtered: !1,
                                            tagSet: JSON.stringify(i),
                                            tagStreamerSet: "[]"
                                        };
                                    Object(s.h)(p), n.setState(function(e) {
                                        var n = e.cardIDtoItemTrackingIDMap;
                                        return n[t.node.id] = a, {
                                            cardIDtoItemTrackingIDMap: n
                                        }
                                    })
                                }
                            }, n.trackClick = function(e, t, r, i, a, o) {
                                if (t.node) {
                                    var l = n.state,
                                        c = l.cardIDtoRequestIDMap,
                                        d = l.cardIDtoItemTrackingIDMap,
                                        u = Object(s.f)(e.title),
                                        p = u.reasonType,
                                        m = u.reasonTarget,
                                        h = u.reasonTargetType,
                                        g = u.rowName,
                                        f = {
                                            component: s.a.Card,
                                            contentEdge: t,
                                            itemTrackingID: d[t.node.id] || null,
                                            requestID: c[t.node.id],
                                            itemPosition: r,
                                            rowPosition: n.props.position,
                                            reasonType: p,
                                            reasonTarget: m,
                                            reasonTargetType: h,
                                            rowName: g,
                                            tagID: void 0 !== o ? o : null,
                                            filtered: !1,
                                            tagSet: JSON.stringify(a),
                                            tagStreamerSet: "[]"
                                        };
                                    Object(s.g)(f, i)
                                }
                            }, n.state = {
                                cardIDtoItemTrackingIDMap: {},
                                cardIDtoRequestIDMap: n.mapShelfCardsToRequestIDs(e.shelf.content.edges || [], e.requestID, {}),
                                headerImpressionID: null,
                                headerRequestID: e.requestID
                            }, n
                        }
                        return r.__extends(n, t), n.prototype.componentWillReceiveProps = function(e) {
                            var t = this,
                                n = e.shelf,
                                r = e.requestID;
                            n.content.edges !== this.props.shelf.content.edges && this.setState(function(e) {
                                return {
                                    cardIDtoRequestIDMap: t.mapShelfCardsToRequestIDs(n.content.edges || [], r, e.cardIDtoRequestIDMap)
                                }
                            })
                        }, n.prototype.render = function() {
                            var t = Object(s.f)(this.props.shelf.title).rowName,
                                n = {
                                    trackTitleClick: this.getChildContext().trackTitleClick,
                                    trackTitleImpression: this.getChildContext().trackTitleImpression,
                                    trackImpression: this.getChildContext().trackImpression,
                                    trackClick: this.getChildContext().trackClick,
                                    shelfTrackingProps: {
                                        item_tracking_id: this.state.headerImpressionID,
                                        item_position: null,
                                        row_name: t,
                                        row_position: this.props.position
                                    }
                                };
                            return a.createElement(e, r.__assign({}, this.props, n))
                        }, n.childContextTypes = l, n
                    }(a.Component)
                }
            }
        },
        y4Ne: function(e, t, n) {},
        yI6f: function(e, t, n) {
            "use strict";
            var r, i, a, o, s, l, c, d = n("/7QA"),
                u = n("f00E"),
                p = n("2xye"),
                m = n("3sMy"),
                h = function() {
                    return Object(u.b)().substring(0, 16)
                };
            ! function(e) {
                e.TwitchHome = "twitch_home", e.BrowseLiveChannels = "browse_livechannels", e.BrowseCategories = "browse_categories", e.BrowseInCategoryChannels = "browse_incategory_channels"
            }(i || (i = {})),
            function(e) {
                e.Live = "live", e.Clip = "clip", e.Vod = "vod", e.Game = "game"
            }(a || (a = {})),
            function(e) {
                e.Card = "card", e.Header = "header"
            }(o || (o = {})),
            function(e) {
                e.Followed = "followed", e.Watched = "watched", e.Popularity = "popularity", e.Personalized = "personalized"
            }(s || (s = {})),
            function(e) {
                e.Live = "live", e.Clip = "clip", e.Vod = "vod", e.Game = "game"
            }(l || (l = {})),
            function(e) {
                e.Live = "recs_live", e.Vod = "recs_vod", e.Clip = "recs_clip"
            }(c || (c = {}));
            var g = ((r = {})[m.a.TopLiveChannels] = function(e) {
                return {
                    reasonType: s.Popularity,
                    reasonTarget: null,
                    reasonTargetType: l.Live,
                    rowName: e
                }
            }, r[m.a.TopGames] = function(e) {
                return {
                    reasonType: s.Popularity,
                    reasonTarget: null,
                    reasonTargetType: l.Game,
                    rowName: e
                }
            }, r[m.a.TopChannelsPlayingGame] = function(e, t) {
                return {
                    reasonType: s.Popularity,
                    reasonTarget: t.context && t.context.id || null,
                    reasonTargetType: l.Game,
                    rowName: e
                }
            }, r[m.a.TopLiveChannelsYouMayLike] = function(e) {
                return {
                    reasonType: s.Personalized,
                    reasonTarget: null,
                    reasonTargetType: l.Live,
                    rowName: e
                }
            }, r[m.a.TopGamesForYou] = function(e) {
                return {
                    reasonType: s.Personalized,
                    reasonTarget: null,
                    reasonTargetType: l.Game,
                    rowName: e
                }
            }, r[m.a.RecommendedBecauseYouWatchX] = function(e, t) {
                return {
                    reasonType: s.Watched,
                    reasonTarget: t.context && t.context.id || null,
                    reasonTargetType: l.Game,
                    rowName: e
                }
            }, r[m.a.RecommendedBecauseYouFollowX] = function(e, t) {
                return {
                    reasonType: s.Followed,
                    reasonTarget: t.context && t.context.id || null,
                    reasonTargetType: null,
                    rowName: e
                }
            }, r[m.a.GreatNewClipsYouMayHaveMissed] = function(e) {
                return {
                    reasonType: s.Popularity,
                    reasonTarget: null,
                    reasonTargetType: l.Clip,
                    rowName: e
                }
            }, r[m.a.TopNewVideosYouMayHaveMissed] = function(e) {
                return {
                    reasonType: s.Popularity,
                    reasonTarget: null,
                    reasonTargetType: l.Vod,
                    rowName: e
                }
            }, r);

            function f(e) {
                var t = e.key;
                return g[t] ? g[t](t, e) : {
                    reasonType: null,
                    reasonTarget: "",
                    reasonTargetType: null,
                    rowName: t
                }
            }

            function v(e, t) {
                var n, r = null,
                    o = null,
                    s = null,
                    l = e.contentEdge && e.contentEdge.node && e.contentEdge.node.id || "";
                if (e.contentEdge) switch (e.contentEdge.node && e.contentEdge.node.__typename) {
                    case "Stream":
                        r = (n = e.contentEdge.node).broadcaster && n.broadcaster.id, o = a.Live, l = String(n.broadcaster && n.broadcaster.id), s = n.game ? n.game.id : null;
                        break;
                    case "Clip":
                        r = (n = e.contentEdge.node).broadcaster && n.broadcaster.id, o = a.Clip, s = n.game ? n.game.id : null;
                        break;
                    case "Video":
                        r = (n = e.contentEdge.node).owner && n.owner.id, o = a.Vod, s = n.game ? n.game.id : null;
                        break;
                    case "Game":
                        n = e.contentEdge.node, r = null, o = a.Game, s = n.id
                }
                return {
                    component: e.component,
                    request_id: e.requestID,
                    section: i.TwitchHome,
                    model_tracking_id: e.contentEdge && e.contentEdge.trackingID,
                    item_tracking_id: e.itemTrackingID,
                    item_id: l,
                    channel_id: null === r ? null : Number(r),
                    item_position: e.itemPosition,
                    item_subsection: t || null,
                    item_page: p.PageviewMedium.TwitchHome,
                    row_position: e.rowPosition,
                    content_type: o,
                    reason_type: e.reasonType,
                    reason_target: e.reasonTarget,
                    reason_target_type: e.reasonTargetType,
                    row_name: e.rowName,
                    tag_set: e.tagSet,
                    tag_streamer_set: e.tagStreamerSet,
                    filtered: e.filtered,
                    category: s,
                    tag_id: e.tagID
                }
            }

            function b(e, t) {
                var n = v(e, t);
                d.n.track(p.SpadeEventType.ItemClick, n)
            }

            function k(e, t) {
                var n = v(e, t);
                d.n.track(p.SpadeEventType.ItemDisplay, n)
            }

            function y(e) {
                var t = {
                    endpoint: e.endpoint,
                    request_id: e.requestID,
                    section: e.section
                };
                d.n.track(p.SpadeEventType.RecRequestClient, t)
            }
            var C = n("x75U"),
                S = n("A65o");
            n.d(t, "e", function() {
                return h
            }), n.d(t, "c", function() {
                return i
            }), n.d(t, "b", function() {
                return a
            }), n.d(t, "a", function() {
                return o
            }), n.d(t, !1, function() {
                return s
            }), n.d(t, !1, function() {
                return l
            }), n.d(t, "d", function() {
                return c
            }), n.d(t, "f", function() {
                return f
            }), n.d(t, "g", function() {
                return b
            }), n.d(t, "h", function() {
                return k
            }), n.d(t, "i", function() {
                return y
            }), n.d(t, !1, function() {
                return C.a
            }), n.d(t, "j", function() {
                return C.b
            }), n.d(t, !1, function() {
                return S.a
            })
        },
        yWUM: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            });
            var r = "0h0m1s";

            function i(e) {
                if (0 === e) return r;
                if (!e || e < 0) return "";
                var t = e,
                    n = Math.floor(t / 3600);
                return t %= 3600, n + "h" + Math.floor(t / 60) + "m" + (t %= 60) + "s"
            }
        },
        ygyh: function(e, t, n) {},
        zixI: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "UnblockUser"
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
                                    value: "UnblockUserInput"
                                }
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
                                value: "unblockUser"
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
                                    name: {
                                        kind: "Name",
                                        value: "targetUser"
                                    },
                                    arguments: [],
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
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 100
                }
            };
            n.loc.source = {
                body: "mutation UnblockUser($input: UnblockUserInput!) {\nunblockUser(input: $input) {\ntargetUser {\nid\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        }
    }
]);