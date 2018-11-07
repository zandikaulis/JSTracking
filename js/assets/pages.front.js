(window.webpackJsonp = window.webpackJsonp || []).push([
    [58], {
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
            var i = n("q1tI"),
                r = n("OUrp"),
                a = n("eFQ3");

            function o(e) {
                switch (e.type) {
                    case r.b.Stream:
                        return i.createElement(a.b, {
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
                    case r.b.Vod:
                        return i.createElement(a.b, {
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
                for (var i = 0, a = n; i < a.length; i++) {
                    var o = a[i];
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
                                type: r.b.Stream,
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
            var i = n("dAHa"),
                r = n("mrSG"),
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
                    return r.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(u.Eb, {
                            className: "reporting-modal__container",
                            background: u.r.Base,
                            padding: {
                                x: 2,
                                y: 3
                            }
                        }, a.createElement(i.b, {
                            onClose: this.handleClose,
                            reportContext: this.props.reportContext,
                            title: this.props.title,
                            defaultDescription: this.props.defaultDescription
                        }), a.createElement(l.a, null))
                    }, t
                }(a.Component));
            var m = Object(s.compose)(Object(d.b)("ReportUserModal"), Object(o.connect)(null, function(e) {
                return Object(s.bindActionCreators)({
                    closeModal: c.c
                }, e)
            }))(p);
            n.d(t, !1, function() {}), n.d(t, !1, function() {
                return i.c
            }), n.d(t, !1, function() {
                return i.a
            }), n.d(t, !1, function() {}), n.d(t, !1, function() {
                return i.b
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
            var i = n("mrSG"),
                r = n("/7QA"),
                a = n("2xye"),
                o = n("gAd6"),
                s = function() {
                    var e = r.o.getLastPageview();
                    return e && e.location || a.PageviewLocation.None
                },
                l = function(e) {
                    r.o.trackItemSectionClick({
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
                    r.o.trackItemSectionClick({
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
                    return i.__awaiter(void 0, void 0, void 0, function() {
                        var t, n, l, c, d, u = this;
                        return i.__generator(this, function(p) {
                            switch (p.label) {
                                case 0:
                                    return p.trys.push([0, 2, , 3]), t = e.map(function(e) {
                                        return i.__awaiter(u, void 0, void 0, function() {
                                            var t;
                                            return i.__generator(this, function(n) {
                                                switch (n.label) {
                                                    case 0:
                                                        return [4, r.p.apollo.client.query({
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
                                    }), r.o.trackItemSectionLoad({
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
            var i = n("q1tI"),
                r = n("Ue10"),
                a = function() {
                    return i.createElement(r.G, null, i.createElement(r.o, {
                        ratio: r.p.Aspect16x9
                    }, i.createElement(r.ib, null)), i.createElement(r.H, null, i.createElement(r.Xa, {
                        display: r.X.Flex,
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(r.Xa, {
                        display: r.X.InlineBlock,
                        margin: {
                            top: 1,
                            right: 1
                        }
                    }, i.createElement(r.ib, {
                        width: 40,
                        height: 56
                    })), i.createElement(r.Xa, {
                        display: r.X.InlineBlock,
                        margin: {
                            top: 1
                        }
                    }, i.createElement(r.W, null, i.createElement(r.ib, {
                        width: 150
                    })), i.createElement(r.W, {
                        fontSize: r.Ca.Size7
                    }, i.createElement(r.ib, {
                        width: 100
                    }))))))
                }
        },
        "0T/G": function(e, t) {},
        "0fnA": function(e, t, n) {
            "use strict";
            n.r(t);
            var i, r, a = n("mrSG"),
                o = n("q1tI"),
                s = n("oJmH"),
                l = n("/7QA"),
                c = n("yR8l"),
                d = n("V+GM"),
                u = n("D7An"),
                p = n("NvVO"),
                m = n("MPw5"),
                h = n("2xye"),
                g = n("Uive"),
                f = n("cTNz"),
                v = n("/MKj"),
                k = n("TSYQ"),
                b = n("fvjX"),
                y = n("17x9"),
                C = n("OUrp"),
                S = n("44NB"),
                w = n("+qcr"),
                T = n("GnwI"),
                _ = n("Ue10");
            n("H9ix");
            ! function(e) {
                e.Image = "featured-item-image", e.Logo = "featured-item-logo", e.Video = "featured-item-video", e.Wrapper = "featured-item-wrapper"
            }(i || (i = {})),
            function(e) {
                e.Hidden = "hidden", e.Enter = "enter", e.EnterActive = "enterActive", e.Leave = "leave", e.LeaveActive = "leaveActive", e.Visible = "visible"
            }(r || (r = {}));
            var E, I = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.loadVideo = function() {
                            n.setState({
                                videoStatus: r.Enter
                            })
                        }, n.fadeVideoIn = function() {
                            n.trackPromotionView(), n.state.videoStatus === r.Enter && requestAnimationFrame(function() {
                                n.setState({
                                    videoStatus: r.EnterActive
                                }), n.enterTimeout = setTimeout(function() {
                                    n.setState({
                                        videoStatus: r.Visible
                                    })
                                }, n.props.transitionDuration)
                            })
                        }, n.fadeVideoOut = function() {
                            clearTimeout(n.enterTimeout), n.setState({
                                videoStatus: r.Leave
                            }), requestAnimationFrame(function() {
                                n.setState({
                                    videoStatus: r.LeaveActive
                                }), setTimeout(function() {
                                    n.setState({
                                        videoStatus: r.Hidden
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
                            Object(S.b)(e)
                        }, n.trackPromotionView = function() {
                            var e = {
                                broadcast_type: n.props.item.content.subType,
                                carousel_index: n.props.index,
                                channel: n.props.item.broadcaster.login,
                                game: n.props.item.content.gameName,
                                promotion_was_scheduled: n.props.item.isScheduled,
                                views: n.props.item.content.viewersCount
                            };
                            Object(S.e)(e)
                        }, n.onClick = function() {
                            n.trackCarouselClick(), n.props.onClick(n.props.offsetFromCenter)
                        }, n.state = {
                            videoStatus: t.showVideo ? r.Visible : r.Hidden
                        }, n
                    }
                    return a.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                        !1 === this.props.showVideo && !0 === e.showVideo ? this.loadVideo() : !0 === this.props.showVideo && !1 === e.showVideo && this.fadeVideoOut()
                    }, t.prototype.render = function() {
                        return o.createElement("div", a.__assign({}, Object(_.jc)(this.props)), o.createElement("div", {
                            onClick: this.onClick,
                            "data-test-selector": i.Wrapper,
                            className: k("featured-content-carousel-featured-item", "featured-content-carousel-featured-item--offset-" + Math.abs(this.props.offsetFromCenter))
                        }, o.createElement(_.Eb, {
                            position: _.jb.Relative,
                            borderRadius: _.x.Large,
                            overflow: _.cb.Hidden,
                            elevation: 3,
                            background: _.r.AccentAlt2,
                            fullWidth: !0,
                            fullHeight: !0
                        }, Object(w.d)(this.props.item.imageURL) && o.createElement(_.Xa, {
                            className: "featured-content-carousel-featured-item__logo-image-container",
                            position: _.jb.Absolute,
                            attachBottom: !0,
                            attachLeft: !this.props.isRightSide,
                            attachRight: this.props.isRightSide,
                            margin: 1,
                            zIndex: _.ic.Above,
                            "data-test-selector": i.Logo
                        }, o.createElement(_.S, {
                            src: this.props.item.imageURL,
                            alt: this.props.item.broadcaster.login
                        })), o.createElement(_.Eb, {
                            className: k("featured-content-carousel-featured-item__overlay", "featured-content-carousel-featured-item__overlay--offset-" + Math.abs(this.props.offsetFromCenter)),
                            position: _.jb.Absolute,
                            attachTop: !0,
                            attachLeft: !0,
                            attachRight: !0,
                            attachBottom: !0,
                            background: _.r.Overlay
                        }), this.renderVideo(), this.props.item.content.previewImageURL && o.createElement(_.Pa, {
                            fullWidth: !0
                        }, o.createElement(_.S, {
                            src: this.props.item.content.previewImageURL,
                            alt: this.props.item.title,
                            "data-test-selector": i.Image
                        })))))
                    }, t.prototype.renderVideo = function() {
                        if (this.props.item.content.id && this.state.videoStatus !== r.Hidden) {
                            var e = 0;
                            this.state.videoStatus !== r.EnterActive && this.state.videoStatus !== r.Leave && this.state.videoStatus !== r.Visible || (e = 1);
                            var t = {
                                type: C.b.Stream,
                                id: this.props.item.content.id,
                                paused: this.props.shouldPause,
                                showChannelInfoOnHover: !0,
                                onPauseToggled: this.props.onPauseToggled,
                                onPlayerInit: this.fadeVideoIn
                            };
                            return o.createElement(_.Xa, {
                                position: _.jb.Absolute,
                                attachTop: !0,
                                attachLeft: !0,
                                attachRight: !0,
                                attachBottom: !0,
                                zIndex: _.ic.Above,
                                refDelegate: this.props.setDomRef,
                                "data-test-selector": i.Video
                            }, this.state.videoStatus === r.Enter && o.createElement(_.Eb, {
                                position: _.jb.Absolute,
                                attachTop: !0,
                                attachLeft: !0,
                                attachRight: !0,
                                attachBottom: !0,
                                display: _.X.Flex,
                                alignItems: _.f.Center,
                                justifyContent: _.Wa.Center,
                                color: _.O.Overlay
                            }, o.createElement(_.Za, {
                                delay: this.props.transitionDuration + 500,
                                size: _.Cb.Large,
                                inheritColor: !0
                            })), o.createElement("div", {
                                style: {
                                    transition: "opacity " + this.props.transitionDuration + "ms ease",
                                    opacity: e
                                }
                            }, o.createElement(_.Pa, {
                                fullWidth: !0
                            }, Object(w.c)(t))))
                        }
                    }, t
                }(o.Component),
                R = Object(s.compose)(Object(T.b)("FeaturedItem", {
                    autoReportInteractive: !0
                }))(I),
                O = function(e) {
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
                        return o.createElement(R, a.__assign({}, this.props, {
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
                        registerReceiver: y.func,
                        getScrollContent: y.func,
                        scrollToTop: y.func
                    }, t
                }(o.Component),
                D = function(e) {
                    return o.createElement(_.Eb, {
                        position: _.jb.Absolute,
                        attachLeft: e.left,
                        attachRight: e.right,
                        zIndex: _.ic.Above,
                        borderRadius: _.x.Rounded,
                        color: _.O.Alt2,
                        margin: .5
                    }, o.createElement(_.Ua, a.__assign({
                        type: _.Va.Alpha,
                        blurAfterClick: !0,
                        onClick: e.onClick,
                        borderRadius: _.x.Rounded
                    }, Object(_.jc)(e)), o.createElement(_.Xa, {
                        padding: 1,
                        display: _.X.Flex,
                        alignItems: _.f.Center,
                        justifyContent: _.Wa.Center
                    }, o.createElement(_.sb, {
                        asset: e.right && _.tb.AngleRight || _.tb.AngleLeft,
                        width: 30,
                        height: 30
                    }))))
                },
                N = n("kW4h"),
                x = (n("7D17"), 5),
                M = 200,
                P = 550;
            ! function(e) {
                e.LeftArrow = "featured-content-carousel-left-arrow", e.Placeholder = "featured-content-carousel-placeholder", e.RightArrow = "featured-content-carousel-right-arrow"
            }(E || (E = {}));
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
                            autoplay: !t.props.hasActivePlayer && !l.p.integrations.app
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
                                    i = t.options.transitionDuration / 3;
                                if (!(n < t.lastChangeStartedAt + i)) {
                                    t.lastChangeStartedAt = n;
                                    var r = t.getMedianCount() + e,
                                        a = t.carouselItems.length - t.getMedianCount() + r + t.state.listOffset,
                                        o = Object(w.e)(t.carouselItems.length, a);
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
                            Object(S.b)(n)
                        }, t.getNumToDisplay = function() {
                            if (!t.props.data || t.props.data.loading || !t.props.data.featuredStreams) return x;
                            var e = Math.min(t.props.data.featuredStreams.length, x);
                            return e % 2 ? e : e - 1
                        }, t.getMedianCount = function() {
                            return Math.ceil(t.getNumToDisplay() / 2)
                        }, t.getOffsetFromCenter = function(e) {
                            return Math.abs(t.getMedianCount() - e)
                        }, t.debounceRecalculateDimensions = function() {
                            clearTimeout(t.recalculateTimeout), t.recalculateTimeout = setTimeout(function() {
                                t.recalculateDimensions()
                            }, M)
                        }, t.recalculateDimensions = function() {
                            if (t.containerRef) {
                                var e = t.containerRef.getBoundingClientRect();
                                t.setState({
                                    containerWidth: e.width,
                                    containerHeight: e.height
                                })
                            }
                        }, t.renderItem = function(e, n, i) {
                            var r, a = t.carouselItems.indexOf(e),
                                s = n === t.getMedianCount() && 0 === t.state.listOffsetIsChanging && 0 === t.state.listOffsetWillChange,
                                l = s ? "featured-item" : void 0,
                                c = s ? "featured-item-index-" + a : void 0;
                            return o.createElement("div", {
                                key: e.content.id + "-" + i,
                                style: {
                                    position: "absolute",
                                    top: 0,
                                    left: "calc(50% - " + P / 2 + "px)",
                                    zIndex: t.getMedianCount() - t.getOffsetFromCenter(n),
                                    transform: t.transformX(n) + " scale(" + t.transformScalePercent(n) + ")",
                                    transition: "all " + t.options.transitionDuration + "ms ease"
                                },
                                className: k((r = {
                                    "featured-content-carousel__item-container": !0,
                                    "featured-content-carousel__item-container--leaving-or-entering": t.getOffsetFromCenter(n) >= t.getMedianCount()
                                }, r["featured-content-carousel__item-container--offset-" + t.getOffsetFromCenter(n)] = !0, r["featured-content-carousel__item-container--" + t.getPositionString(n)] = !0, r)),
                                "data-a-target": c
                            }, o.createElement(O, {
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
                            for (var i = 200, r = 1; r <= t.getNumToDisplay(); r++) i += t.transformScalePercent(r) * P;
                            var a = t.getOffsetFromCenter(e) / (n - 1),
                                o = Math.min(t.state.containerWidth, i) / 2 * a;
                            return e < n ? "translatex(-" + o + "px) translatex(" + 50 * a + "%)" : e > n ? "translatex(" + o + "px) translatex(-" + 50 * a + "%)" : ""
                        }, t.transformScalePercent = function(e) {
                            var n = t.getOffsetFromCenter(e),
                                i = t.getMedianCount() - 1,
                                r = (1 - t.options.transformScale) / i;
                            return Math.max(0, 1 - n * r)
                        }, t.getPositionString = function(e) {
                            var n = t.getMedianCount(),
                                i = t.getOffsetFromCenter(e);
                            return e < n ? "left-" + i : e > n ? "right-" + i : "center"
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentWillMount = function() {
                        window.addEventListener("resize", this.debounceRecalculateDimensions, !0)
                    }, t.prototype.componentWillUnmount = function() {
                        window.removeEventListener("resize", this.debounceRecalculateDimensions, !0)
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        e.sideNavCollapsed !== this.props.sideNavCollapsed && requestAnimationFrame(this.recalculateDimensions)
                    }, t.prototype.componentDidMount = function() {
                        this.props.hideCarousel ? this.props.latencyTracking.reportInteractive() : this.props.latencyTracking.reportInteractive(this.getNumToDisplay())
                    }, t.prototype.render = function() {
                        return this.props.hideCarousel ? null : o.createElement("div", {
                            ref: this.setContainerRef
                        }, o.createElement(_.Xa, {
                            display: _.X.Flex,
                            alignItems: _.f.Center,
                            justifyContent: _.Wa.Center,
                            position: _.jb.Relative,
                            className: "featured-content-carousel"
                        }, o.createElement(D, {
                            left: !0,
                            onClick: this.navigateLeft,
                            "data-test-selector": E.LeftArrow,
                            "data-a-target": "featured-item-left-button"
                        }), o.createElement(D, {
                            right: !0,
                            onClick: this.navigateRight,
                            "data-test-selector": E.RightArrow,
                            "data-a-target": "featured-item-right-button"
                        }), this.renderItems()))
                    }, t.prototype.renderPlaceholders = function() {
                        var e = this;
                        return Array.from({
                            length: x
                        }, function(t, n) {
                            var i;
                            return o.createElement("div", {
                                key: n + 1,
                                style: {
                                    position: "absolute",
                                    top: 0,
                                    left: "calc(50% - " + P / 2 + "px)",
                                    zIndex: e.getMedianCount() - e.getOffsetFromCenter(n + 1),
                                    transform: e.transformX(n + 1) + " scale(" + e.transformScalePercent(n + 1) + ")"
                                },
                                className: k((i = {
                                    "featured-content-carousel__item-container": !0,
                                    "featured-content-carousel__item-container--leaving-or-entering": e.getOffsetFromCenter(n + 1) >= e.getMedianCount()
                                }, i["featured-content-carousel__item-container--offset-" + e.getOffsetFromCenter(n + 1)] = !0, i["featured-content-carousel__item-container--" + e.getPositionString(n + 1)] = !0, i)),
                                "data-test-selector": E.Placeholder
                            }, o.createElement(_.Eb, {
                                className: "featured-content-carousel__item-placeholder",
                                borderRadius: _.x.Large,
                                background: _.r.AccentAlt2,
                                elevation: 3
                            }))
                        })
                    }, t.prototype.renderItems = function() {
                        if (!this.props.data || this.props.data.loading || !this.props.data.featuredStreams) return this.renderPlaceholders();
                        if (this.props.data.error) return null;
                        var e = [];
                        this.carouselItems.length || (this.carouselItems = Object(w.a)(this.props.data)), this.displayTracked || (Object(S.a)(this.carouselItems), this.displayTracked = !0);
                        var t = 1,
                            n = this.getNumToDisplay();
                        t += Math.min(this.state.listOffsetWillChange, 0) - Math.max(this.state.listOffsetIsChanging, 0), n += Math.max(this.state.listOffsetWillChange, 0) - Math.min(this.state.listOffsetIsChanging, 0);
                        for (var i = t; i <= n; i++) e.push(this.getItemForSlot(i));
                        return e
                    }, t.prototype.getItemForSlot = function(e) {
                        var t = this.carouselItems.length - this.getMedianCount() + e + this.state.listOffset,
                            n = Object(w.e)(this.carouselItems.length, t),
                            i = Object(w.f)(this.carouselItems.length, t);
                        return this.renderItem(this.carouselItems[n], e, i)
                    }, t
                }(o.Component),
                F = Object(b.compose)(Object(c.a)(N, {
                    options: function() {
                        return {
                            variables: {
                                language: l.p.intl.getLanguageCode(),
                                first: 8,
                                acceptedMature: l.m.get("mature", !1)
                            }
                        }
                    }
                }), Object(T.b)("LoggedInCarousel"))(j);
            var L = Object(v.connect)(function(e) {
                    return {
                        sideNavCollapsed: !e.ui.sideNavExpanded,
                        hasActivePlayer: void 0 !== e.videoPlayer.activeVideoPlayerInstanceRefID
                    }
                })(F),
                U = n("TDc0"),
                A = "twilight-onboarding",
                V = "twilight-onboarding-prompt__dismissed";

            function W() {
                return l.p.storage.get(A, !1)
            }
            var B = n("AO3T"),
                z = 3;

            function G(e, t) {
                var n = l.p.experiments.getAssignment(u.b.WebOnboarding);
                return !l.p.storage.get(V, !1) && Object(U.a)(n) && e < z && Object(U.b)(new Date(t))
            }

            function H(e) {
                Object(B.d)({
                    source: e
                }), l.p.storage.set(A, !0), window.location.assign("/hi" + location.search)
            }
            var X, q, Q = n("Bh3T"),
                Y = n("sSlw"),
                $ = n("9pSj"),
                K = n("MJbm"),
                J = n("5myU"),
                Z = n("ZDlU"),
                ee = n("RXle"),
                te = n("G1cX"),
                ne = n("ZS2+"),
                ie = n("kduP"),
                re = n("JVUd"),
                ae = n("geRD"),
                oe = n("3lt/"),
                se = (n("DzyH"), n("IOBI"));

            function le(e, t) {
                var n = function(e) {
                    return Array.from(e.normalize ? e.normalize("NFC") : e)
                }(e);
                return n.length <= t ? e : n.slice(0, t - 3).join("").trim() + "..."
            }! function(e) {
                e.Large = "Large", e.Small = "Small"
            }(X || (X = {})),
            function(e) {
                e.Running = "Running", e.Paused = "Paused", e.Stopped = "Stopped"
            }(q || (q = {}));
            var ce, de = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            showError: !1,
                            countdownState: q.Running
                        }, t.pauseCountdown = function() {
                            t.setState({
                                countdownState: q.Paused
                            })
                        }, t.resumeCountdown = function() {
                            t.state.countdownState !== q.Stopped && t.setState({
                                countdownState: q.Running
                            })
                        }, t.onUndoClick = function() {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, i;
                                return a.__generator(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            if (!(e = this.props.addFeedbackPromise)) return [2];
                                            this.setState({
                                                countdownState: q.Stopped
                                            }), r.label = 1;
                                        case 1:
                                            return r.trys.push([1, 7, , 8]), [4, e];
                                        case 2:
                                            if (t = r.sent(), !(n = t.data && t.data.addRecommendationFeedback && t.data.addRecommendationFeedback.recommendationFeedback)) return this.setState({
                                                showError: !0
                                            }), [2];
                                            i = Object(ae.a)({
                                                feedbackID: n.id,
                                                sourceItemPage: oe.PageviewMedium.TwitchHome,
                                                sourceItemRequestID: this.props.sourceItemRequestID || ""
                                            }), r.label = 3;
                                        case 3:
                                            return r.trys.push([3, 5, , 6]), [4, this.props.undoFeedback(i)];
                                        case 4:
                                            return r.sent(), this.props.undoSuccessHandler(), [3, 6];
                                        case 5:
                                            return r.sent(), this.setState({
                                                showError: !0
                                            }), [3, 6];
                                        case 6:
                                            return [3, 8];
                                        case 7:
                                            return r.sent(), this.props.undoSuccessHandler(), [3, 8];
                                        case 8:
                                            return [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this,
                            t = Object(l.d)("You can still <x:link-undo>undo this</x:link-undo> or <x:link-manage>manage</x:link-manage> your recommendation feedback", {
                                "x:link-undo": function(t) {
                                    return o.createElement(_.U, {
                                        onClick: e.onUndoClick,
                                        "data-test-selector": "hidden-content-undo"
                                    }, o.createElement("strong", null, t))
                                },
                                "x:link-manage": function(t) {
                                    return o.createElement(_.U, {
                                        onClick: e.props.onManageClick,
                                        to: "/settings/recommendations",
                                        targetBlank: !0
                                    }, t)
                                }
                            }, "HiddenContentNotice");
                        return this.state.showError && (t = Object(l.d)("Something went wrong, please <x:link-manage>click here</x:link-manage> to manage your recommendation feedback", {
                            "x:link-manage": function(e) {
                                return o.createElement(_.U, {
                                    to: "/settings/recommendations",
                                    targetBlank: !0,
                                    "data-test-selector": "hidden-content-undo-error"
                                }, e)
                            }
                        }, "HiddenContentNotice")), o.createElement(_.Pa, {
                            fullHeight: !0
                        }, o.createElement("div", {
                            onMouseEnter: this.pauseCountdown,
                            onMouseLeave: this.resumeCountdown
                        }, o.createElement(_.Eb, {
                            className: "hidden-content-notice",
                            fullWidth: !0,
                            margin: {
                                bottom: 1
                            },
                            borderRadius: _.x.Large
                        }, o.createElement(_.Xa, {
                            padding: {
                                y: 4,
                                x: 2
                            },
                            display: _.X.Flex,
                            justifyContent: _.Wa.Center,
                            alignItems: _.f.Center,
                            flexDirection: _.Aa.Column,
                            fullHeight: !0
                        }, this.props.name && o.createElement(_.Xa, {
                            margin: {
                                bottom: X.Small ? 1 : 0
                            },
                            textAlign: _.Rb.Center
                        }, o.createElement(_.W, {
                            fontSize: this.props.size === X.Large ? _.Ca.Size3 : _.Ca.Size5
                        }, Object(l.d)("<x:content>Content</x:content> has been removed", {
                            "x:content": function() {
                                return o.createElement(_.W, {
                                    bold: !0,
                                    italic: !0,
                                    type: _.Vb.Span,
                                    fontSize: e.props.size === X.Large ? _.Ca.Size3 : _.Ca.Size4
                                }, "string" == typeof e.props.name ? le(e.props.name, 35) : e.props.name)
                            }
                        }, "HiddenContentNotice"))), o.createElement(_.Pa, {
                            textAlign: _.Rb.Center
                        }, o.createElement(_.W, {
                            fontSize: this.props.size === X.Large ? _.Ca.Size4 : _.Ca.Size6
                        }, t))), this.props.shouldRemoveContent && o.createElement(_.mb, {
                            animationDuration: 5,
                            animationDirection: this.state.countdownState === q.Running ? _.nb.Down : void 0,
                            onAnimationEnd: this.props.onExpiration,
                            size: _.ob.ExtraSmall,
                            value: this.state.countdownState === q.Running ? void 0 : 100,
                            mask: !0
                        }))))
                    }, t
                }(o.Component),
                ue = Object(c.a)(se, {
                    name: "undoFeedback"
                })(de),
                pe = n("1rIY"),
                me = (n("HrX3"), (ce = Object(pe.a)("ListAnimationContext", {
                    hideListItem: function() {
                        return null
                    }
                })).InnerProvider),
                he = ce.withContext;

            function ge(e) {
                return {
                    hideListItem: e.hideListItem
                }
            }

            function fe(e) {
                return Array.isArray(e)
            }
            var ve = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            indexToHiddenMap: {},
                            childTransformations: {},
                            removedIndex: null
                        }, t.isRenderingEmpty = !1, t.itemRef = null, t.setItemRef = function(e) {
                            t.itemRef = e
                        }, t.getContextValue = function() {
                            return {
                                hideListItem: t.hideListItem
                            }
                        }, t.hideListItem = function(e) {
                            t.setState(function(t) {
                                return t.indexToHiddenMap[e] = !0, {
                                    indexToHiddenMap: t.indexToHiddenMap,
                                    removedIndex: e
                                }
                            })
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.getSnapshotBeforeUpdate = function() {
                        var e = this.state.removedIndex;
                        return null !== e ? this.getChildTransforms(e) : null
                    }, t.prototype.componentDidUpdate = function(e, t, n) {
                        var i = this;
                        n && this.setState({
                            childTransformations: n,
                            removedIndex: null
                        }, function() {
                            i.ensureLayoutReflow(), i.setState({
                                childTransformations: {}
                            })
                        }), this.isRenderingEmpty && this.props.onEmptyShelfRender()
                    }, t.prototype.render = function() {
                        var e = this.props.children;
                        return e && fe(e) && 0 !== e.length ? o.createElement(me, {
                            value: this.getContextValue()
                        }, this.renderAllItems(e)) : null
                    }, t.prototype.renderAllItems = function(e) {
                        var t = this,
                            n = Object.keys(this.state.indexToHiddenMap).length,
                            i = Math.min(e.length - n, this.props.itemSlotCount),
                            r = Math.max(this.props.itemSlotCount - i, 0),
                            a = Math.max(i + n + r, 0),
                            o = !1,
                            s = Array.from(new Array(a)).map(function(n, i) {
                                var r = e[i];
                                return r ? t.state.indexToHiddenMap[i] ? null : (o = !0, t.renderVisibleContent(r, i, a)) : t.renderEmptyPlaceholder(i)
                            });
                        return o || (this.isRenderingEmpty = !0), s
                    }, t.prototype.renderEmptyPlaceholder = function(e) {
                        return o.createElement("div", {
                            key: "p" + e,
                            ref: this.setItemRef
                        })
                    }, t.prototype.renderVisibleContent = function(e, t, n) {
                        var i = this.state.childTransformations[t],
                            r = {
                                "list-animation__item-animate": !i,
                                "list-animation__item-animate-in-prep": !!i && t === n - 1
                            };
                        return o.createElement("div", {
                            key: e.key || t,
                            className: k(r),
                            style: {
                                transform: i
                            },
                            ref: this.setItemRef
                        }, e)
                    }, t.prototype.getChildTransforms = function(e) {
                        var t = this.props.children;
                        if (!t || !fe(t) || !this.itemRef) return {};
                        var n = {},
                            i = this.itemRef.getBoundingClientRect().width;
                        return t.forEach(function(t, r) {
                            t && r > e && (n[r] = "translateX(" + i + "px)")
                        }), n
                    }, t.prototype.ensureLayoutReflow = function() {
                        this.itemRef && this.itemRef.scrollTop
                    }, t
                }(o.Component),
                ke = (n("a+Ty"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this;
                        return o.createElement(_.Eb, {
                            className: "empty-shelf",
                            fullWidth: !0,
                            margin: {
                                bottom: 2
                            }
                        }, o.createElement(_.Xa, {
                            padding: {
                                y: 4,
                                x: 2
                            },
                            display: _.X.Flex,
                            justifyContent: _.Wa.Center,
                            alignItems: _.f.Center,
                            flexDirection: _.Aa.Column,
                            fullHeight: !0
                        }, this.props.name && o.createElement(_.W, {
                            fontSize: _.Ca.Size3
                        }, Object(l.d)("<x:content>Content</x:content> recommendations have all been removed", {
                            "x:content": function() {
                                return o.createElement(_.W, {
                                    bold: !0,
                                    italic: !0,
                                    type: _.Vb.Span,
                                    fontSize: _.Ca.Size2
                                }, e.props.name)
                            }
                        }, "EmptyShelf")), o.createElement(_.W, {
                            fontSize: _.Ca.Size4
                        }, Object(l.d)("<x:link-manage>Manage</x:link-manage> your recommendation feedback", {
                            "x:link-manage": function(t) {
                                return o.createElement(_.U, {
                                    onClick: e.props.onManageClick,
                                    to: "/settings/recommendations",
                                    targetBlank: !0
                                }, t)
                            }
                        }, "EmptyShelf"))))
                    }, t
                }(o.Component)),
                be = n("aCAx"),
                ye = n("MdYN"),
                Ce = function(e) {
                    return a.__assign({}, e, {
                        title: e.clipTitle,
                        viewCount: e.clipViewCount,
                        createdAt: e.clipCreatedAt
                    })
                },
                Se = n("GFmA"),
                we = n("oB8h"),
                Te = n("oJov"),
                _e = n("4HIT"),
                Ee = n("QV0j"),
                Ie = n("9MO3"),
                Re = n("OCR+"),
                Oe = n("3sMy"),
                De = n("yI6f"),
                Ne = n("kRI/"),
                xe = n("A65o"),
                Me = (n("ReKM"), Object(Re.a)()),
                Pe = ne.a.wrap(function() {
                    return n.e(147).then(n.bind(null, "GyBV"))
                }, "RecFeedbackButton", {
                    placeholder: null
                }),
                je = function(e) {
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
                                    i = t.getTagSet(t.props.contentEdge, n);
                                n && (n.callback = function(e) {
                                    t.trackClick(h.PageviewContent.Tag, i, e.id)
                                });
                                var r = t.props.contentEdge.node;
                                return o.createElement(Te.a, a.__assign({
                                    "data-a-target": "card-" + t.props.itemPosition
                                }, e, {
                                    tagListProps: n,
                                    contextualCardActionProps: t.getFeedbackProps({
                                        vodID: null,
                                        categoryID: r && r.id,
                                        channelID: null,
                                        feedbackReasons: Object(Ie.b)(),
                                        hideContent: t.hideContent
                                    })
                                }))
                            }
                            return o.createElement(Se.a, a.__assign({}, e))
                        }, t.isShelfGameBoxArtCardProps = function() {
                            var e = t.props.contentEdge.node;
                            return !(!e || !e.boxArtURL)
                        }, t.getShelfCardProps = function(e, n) {
                            return e.node && t.typeToPropMappings[e.node.__typename] ? t.typeToPropMappings[e.node.__typename](e, n) : null
                        }, t.getTagListProps = function(e) {
                            var n = void 0;
                            if (!e.node) return n;
                            switch (e.node.__typename) {
                                case "Stream":
                                    n = {
                                        tags: e.node.tags || [],
                                        linkTo: {
                                            pathname: _e.a.PopularTag,
                                            state: a.__assign({
                                                medium: h.PageviewMedium.TwitchHome
                                            }, t.props.shelfCardTrackingProps)
                                        }
                                    };
                                    break;
                                case "Game":
                                    n = {
                                        tags: e.node.gameTags || [],
                                        linkTo: {
                                            pathname: _e.a.DirectoryTag,
                                            state: a.__assign({
                                                medium: h.PageviewMedium.TwitchHome
                                            }, t.props.shelfCardTrackingProps)
                                        }
                                    };
                                    break;
                                case "Video":
                                    n = {
                                        tags: e.node.contentTags || [],
                                        linkTo: {
                                            pathname: _e.a.PopularTag,
                                            state: a.__assign({
                                                medium: h.PageviewMedium.TwitchHome
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
                                i = e.channelID,
                                r = e.categoryID,
                                a = e.vodID,
                                o = e.feedbackReasons,
                                s = e.hideContent;
                            if (Me() && t.props.firstPageLoaded) return {
                                component: Pe,
                                props: {
                                    shelfID: n,
                                    channelID: i,
                                    categoryID: r,
                                    vodID: a,
                                    feedbackReasons: o,
                                    hideContent: s,
                                    onModalOpen: t.trackRecFeedbackPreModalClick,
                                    onMenuOpen: t.trackRecFeedbackMenuClick,
                                    trackRecFeedbackClickStep: t.trackRecFeedbackClickStep,
                                    sourceItemRequestID: t.props.shelfCardTrackingProps.item_tracking_id,
                                    isShelf: !1
                                }
                            }
                        }, t.showContent = function() {
                            t.setState({
                                showContent: !0,
                                addFeedbackPromise: null
                            }), t.trackPostSubmitStep(Ne.b.Undo)
                        }, t.onManageClick = function() {
                            t.trackPostSubmitStep(Ne.b.Manage)
                        }, t.trackPostSubmitStep = function(e) {
                            var n = Object(De.e)(t.props.contentEdge).itemID;
                            n && t.props.trackRecFeedbackClickStepPostSubmit(n, e)
                        }, t.hideContent = function(e) {
                            t.setState({
                                showContent: !1,
                                addFeedbackPromise: e
                            })
                        }, t.onHideContentExpire = function() {
                            t.props.hideListItem(t.props.itemPosition)
                        }, t.trackGameClick = function(e, n, i, r) {
                            e.preventDefault(), e.stopPropagation();
                            var o = "title" === ("IMG" === e.target.tagName ? "boxArt" : "title") ? h.PageviewContent.GameName : h.PageviewContent.GameBoxart,
                                s = a.__assign({}, t.props.shelfCardTrackingProps, {
                                    tag_set: r,
                                    tag_filter_set: [],
                                    tag_streamer_set: []
                                }),
                                c = {
                                    pathname: Object(ie.c)(n.name),
                                    state: a.__assign({
                                        content: o,
                                        content_index: i,
                                        medium: h.PageviewMedium.TwitchHome
                                    }, s)
                                };
                            t.trackClick(o, r), l.p.history.push(c.pathname, c.state)
                        }, t.trackClick = function(e, n, i) {
                            return t.props.trackClick(e, n, i)
                        }, t.trackRecFeedbackPreModalClick = function() {
                            return t.props.trackRecFeedbackPreModalClick(Ne.a.NotInterested, t.props.shelf, t.props.contentEdge, t.props.itemPosition)
                        }, t.trackRecFeedbackMenuClick = function() {
                            return t.props.trackRecFeedbackPreModalClick(Ne.a.Ellipsis, t.props.shelf, t.props.contentEdge, t.props.itemPosition)
                        }, t.trackRecFeedbackClickStep = function(e) {
                            var n = Object(De.e)(t.props.contentEdge).itemID;
                            if (n) return t.props.trackRecFeedbackClickStep(n, e)
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
                        if (!e || !this.props.contentEdge.node) return null;
                        if (!this.state.showContent) {
                            var t = e.title,
                                n = this.props.contentEdge.node;
                            return n && "Stream" === n.__typename && n.broadcaster && n.broadcaster.displayName && (t = n.broadcaster.displayName), o.createElement(ue, {
                                name: t,
                                undoSuccessHandler: this.showContent,
                                addFeedbackPromise: this.state.addFeedbackPromise,
                                size: X.Small,
                                onExpiration: this.onHideContentExpire,
                                onManageClick: this.onManageClick,
                                shouldRemoveContent: !0,
                                sourceItemRequestID: this.props.shelfCardTrackingProps.item_tracking_id
                            })
                        }
                        return o.createElement(_.Xa, {
                            key: this.props.contentEdge.node.id,
                            padding: {
                                bottom: 2
                            },
                            "data-test-selector": "shelf-card-selector"
                        }, this.renderShelfCard(e))
                    }, t.prototype.getShelfCardStreamProps = function(e) {
                        var t = this,
                            n = e.node,
                            i = this.getTagListProps(e),
                            r = this.getTagSet(e, i),
                            o = a.__assign({}, this.props.shelfCardTrackingProps, {
                                tag_set: r,
                                tag_filter_set: [],
                                tag_streamer_set: []
                            }),
                            s = this.props.shelf.title.key !== Oe.a.RecommendedBecauseYouWatchX ? {
                                gameTitle: n.game && n.game.displayName || void 0,
                                gameTitleLinkTo: {
                                    pathname: n.game ? Object(ie.c)(n.game.name) : void 0,
                                    state: o
                                },
                                onGameTitleClick: this.trackClick.bind(this, h.PageviewContent.GameMetadata, r)
                            } : {};
                        return a.__assign({
                            context: Se.b.MixedGameAndChannelList,
                            title: n.broadcaster && n.broadcaster.broadcastSettings && n.broadcaster.broadcastSettings.title,
                            linkTo: n.broadcaster && n.broadcaster.login ? {
                                pathname: n.broadcaster.login,
                                state: o
                            } : void 0,
                            onClick: this.trackClick.bind(this, h.PageviewContent.VideoThumbnail, r),
                            onVideoTitleClick: this.trackClick.bind(this, h.PageviewContent.VideoTitle, r),
                            onChannelImageClick: this.trackClick.bind(this, h.PageviewContent.UserThumbnail, r),
                            thumbnailImageProps: {
                                src: n.previewImageURL || l.a.defaultStreamPreviewURL,
                                alt: n.broadcaster && n.broadcaster.broadcastSettings && n.broadcaster.broadcastSettings.title || ""
                            },
                            channelImageProps: {
                                src: n.broadcaster && n.broadcaster.profileImageURL || l.a.defaultAvatarURL,
                                alt: n.broadcaster && n.broadcaster.displayName || ""
                            },
                            channelDisplayName: n.broadcaster && n.broadcaster.displayName || "",
                            channelLogin: n.broadcaster && n.broadcaster.login,
                            channelLinkTo: n.broadcaster && n.broadcaster.login ? {
                                pathname: "/" + n.broadcaster.login + "/videos/all",
                                state: o
                            } : void 0,
                            onChannelLoginClick: this.trackClick.bind(this, h.PageviewContent.ChannelMetadata, r),
                            streamType: Object(Ee.a)(n.type) || we.a.Live,
                            currentViewerCount: n.viewersCount || 0,
                            trackingContext: {
                                medium: h.PageviewMedium.TwitchHome
                            },
                            contextualCardActionProps: this.getFeedbackProps({
                                channelID: n.broadcaster && n.broadcaster.id,
                                categoryID: n.game && n.game.id,
                                feedbackReasons: Object(Ie.a)(),
                                hideContent: this.hideContent
                            })
                        }, i && {
                            tagListProps: a.__assign({}, i, {
                                callback: function(e) {
                                    i.callback && i.callback(e), t.trackClick(h.PageviewContent.Tag, r, e.id)
                                }
                            })
                        }, s)
                    }, t.prototype.getShelfCardClipProps = function(e, t) {
                        var n = this,
                            i = e.node,
                            r = this.getTagListProps(e),
                            o = this.getTagSet(e, r),
                            s = a.__assign({}, this.props.shelfCardTrackingProps, {
                                tag_set: o,
                                tag_filter_set: [],
                                tag_streamer_set: []
                            });
                        return a.__assign({
                            context: Se.b.MixedGameAndChannelList,
                            title: i.clipTitle,
                            linkTo: i.embedURL,
                            onClick: function(e) {
                                if (n.trackClick(h.PageviewContent.VideoThumbnail, o), e.preventDefault(), n.props.shelf.content && n.props.shelf.content.edges) {
                                    var r = n.props.shelf.content.edges.map(function(e) {
                                        return e.node
                                    });
                                    n.props.showClipsModal(i, t, n.props.shelf.content.edges, function() {
                                        return r
                                    })
                                }
                            },
                            onVideoTitleClick: function(e) {
                                if (n.trackClick(h.PageviewContent.VideoTitle, o), e.preventDefault(), n.props.shelf.content && n.props.shelf.content.edges) {
                                    var r = n.props.shelf.content.edges.map(function(e) {
                                        return e.node
                                    });
                                    n.props.showClipsModal(i, t, n.props.shelf.content.edges, function() {
                                        return r
                                    })
                                }
                            },
                            thumbnailImageProps: {
                                src: i.thumbnailURL,
                                alt: i.clipTitle
                            },
                            channelImageProps: {
                                src: i.broadcaster && i.broadcaster.profileImageURL || l.a.defaultAvatarURL,
                                alt: i.broadcaster && i.broadcaster.displayName || ""
                            },
                            channelDisplayName: i.broadcaster && i.broadcaster.displayName || "",
                            channelLogin: i.broadcaster && i.broadcaster.login,
                            channelLinkTo: i.broadcaster && i.broadcaster.login ? {
                                pathname: "/" + i.broadcaster.login + "/videos/all",
                                state: s
                            } : void 0,
                            onChannelLoginClick: this.trackClick.bind(this, h.PageviewContent.ChannelMetadata, o),
                            datePublished: i.clipCreatedAt,
                            viewCount: i.clipViewCount,
                            durationInSeconds: i.durationSeconds,
                            clipCreatedByChannelLogin: i.curator && i.curator.login,
                            gameTitle: i.game && i.game.displayName || void 0,
                            gameTitleLinkTo: {
                                pathname: i.game && Object(ie.c)(i.game.name) || void 0,
                                state: s
                            },
                            onGameTitleClick: this.trackClick.bind(this, h.PageviewContent.GameMetadata, o),
                            trackingContext: {
                                medium: h.PageviewMedium.TwitchHome
                            }
                        }, r && {
                            tagListProps: a.__assign({}, r, {
                                callback: function(e) {
                                    r.callback && r.callback(e), n.trackClick(h.PageviewContent.Tag, o, e.id)
                                }
                            })
                        })
                    }, t.prototype.getShelfCardVideoProps = function(e) {
                        var t = this,
                            n = e.node,
                            i = this.getTagListProps(e),
                            r = this.getTagSet(e, i),
                            o = a.__assign({}, this.props.shelfCardTrackingProps, {
                                tag_set: r,
                                tag_filter_set: [],
                                tag_streamer_set: []
                            });
                        return a.__assign({
                            context: Se.b.MixedGameAndChannelList,
                            title: n.title,
                            linkTo: {
                                pathname: "/videos/" + n.id,
                                state: this.props.shelfCardTrackingProps
                            },
                            onClick: this.trackClick.bind(this, h.PageviewContent.VideoThumbnail, r),
                            onVideoTitleClick: this.trackClick.bind(this, h.PageviewContent.VideoTitle, r),
                            onChannelImageClick: this.trackClick.bind(this, h.PageviewContent.UserThumbnail, r),
                            thumbnailImageProps: {
                                src: n.previewThumbnailURL,
                                alt: n.title
                            },
                            channelImageProps: {
                                src: n.owner && n.owner.profileImageURL || l.a.defaultAvatarURL,
                                alt: n.owner && n.owner.displayName || ""
                            },
                            channelDisplayName: n.owner && n.owner.displayName || "",
                            channelLogin: n.owner && n.owner.login,
                            channelLinkTo: n.owner && n.owner.login ? {
                                pathname: "/" + n.owner.login + "/videos/all",
                                state: o
                            } : void 0,
                            onChannelLoginClick: this.trackClick.bind(this, h.PageviewContent.ChannelMetadata, r),
                            datePublished: n.publishedAt,
                            viewCount: n.viewCount,
                            durationInSeconds: n.lengthSeconds,
                            watchedProgressPercent: 0,
                            gameTitle: n.game && n.game.displayName,
                            gameTitleLinkTo: n.game ? {
                                pathname: Object(ie.c)(n.game.name),
                                state: o
                            } : void 0,
                            onGameTitleClick: this.trackClick.bind(this, h.PageviewContent.GameMetadata, r),
                            trackingContext: {
                                medium: h.PageviewMedium.TwitchHome
                            },
                            contextualCardActionProps: this.getFeedbackProps({
                                vodID: n.id,
                                categoryID: n.game && n.game.id,
                                channelID: n.owner && n.owner.id,
                                feedbackReasons: Object(Ie.d)(),
                                hideContent: this.hideContent
                            })
                        }, i && {
                            tagListProps: a.__assign({}, i, {
                                callback: function(e) {
                                    i.callback && i.callback(e), t.trackClick(h.PageviewContent.Tag, r, e.id)
                                }
                            })
                        })
                    }, t.prototype.getShelfCardGameProps = function(e, t) {
                        var n = this,
                            i = e.node,
                            r = this.getTagSet(e);
                        return {
                            onClick: function(e) {
                                return n.trackGameClick(e, i, t, r)
                            },
                            title: i.displayName,
                            alt: Object(l.d)("{displayName} cover image", {
                                displayName: i.displayName
                            }, "ShelfComponent"),
                            src: i.boxArtURL || l.a.defaultBoxArtURL,
                            linkTo: Object(ie.c)(i.name),
                            info: Object(l.d)("{viewerCount, plural, one {# viewer} other {# viewers}}", {
                                viewerCount: i.viewersCount || 0
                            }, "ShelfComponent")
                        }
                    }, t
                }(o.Component),
                Fe = Object(s.compose)(Object(T.b)("ShelfCardComponent", {
                    autoReportInteractive: !0
                }), Object(re.a)("ShelfCardComponent", {
                    percentage: 75,
                    impressionWrapperClassName: "shelf-card__impression-wrapper"
                }), Object(xe.a)())(je);
            var Le = function(e) {
                    return he(ge)(e)
                }(Object(v.connect)(null, function(e) {
                    return Object(b.bindActionCreators)({
                        showClipsModal: function(e, t, n) {
                            return Object(be.d)(ye.a, {
                                getClips: function() {
                                    return n.map(function(e) {
                                        return Ce(e.node)
                                    })
                                },
                                clip: Ce(e),
                                clipIndex: t,
                                pageType: "TopClipsGame"
                            })
                        }
                    }, e)
                })(Fe)),
                Ue = Object(Re.a)(),
                Ae = ne.a.wrap(function() {
                    return n.e(147).then(n.bind(null, "GyBV"))
                }, "RecFeedbackButton", {
                    placeholder: null
                }),
                Ve = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            showContent: !0,
                            addFeedbackPromise: null,
                            isShelfEmpty: !1
                        }, t.onEmptyShelfRender = function() {
                            t.state.isShelfEmpty || t.setState({
                                isShelfEmpty: !0
                            })
                        }, t.getEdges = function(e) {
                            return e.content && e.content.edges ? e.content.edges.filter(function(e) {
                                return e && e.node && e.node.id
                            }) : []
                        }, t.linkToBrowse = function(e) {
                            var n = {
                                pathname: "/directory",
                                state: a.__assign({
                                    content: h.PageviewContent.HeaderGameName,
                                    medium: h.PageviewMedium.TwitchHome
                                }, t.props.shelfTrackingProps)
                            };
                            return o.createElement(_.U, {
                                onClick: t.props.trackTitleClick,
                                to: n
                            }, e)
                        }, t.linkToDirectory = function(e) {
                            var n = {
                                pathname: Object(ie.c)(e),
                                state: a.__assign({
                                    content: h.PageviewContent.HeaderGameName,
                                    medium: h.PageviewMedium.TwitchHome
                                }, t.props.shelfTrackingProps)
                            };
                            return o.createElement(_.U, {
                                onClick: t.props.trackTitleClick,
                                to: n
                            }, e)
                        }, t.trackTitleImpression = function() {
                            return t.props.trackTitleImpression(t.props.shelf)
                        }, t.trackRecFeedbackPreModalClickShelf = function() {
                            return t.props.trackRecFeedbackPreModalClick(Ne.a.NotInterested, t.props.shelf, null, null)
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
                            }), t.props.trackRecFeedbackClickStepPostSubmit(t.props.shelf.id, Ne.b.Undo)
                        }, t.hideContent = function(e) {
                            t.setState({
                                showContent: !1,
                                addFeedbackPromise: e
                            })
                        }, t.onManageClick = function() {
                            t.props.trackRecFeedbackClickStepPostSubmit(t.props.shelf.id, Ne.b.Manage)
                        }, t.trackRecFeedbackClickStep = function(e) {
                            t.props.trackRecFeedbackClickStep(t.props.shelf.id, e)
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.shouldRenderShelf(this.props.shelf) ? (this.getEdges(this.props.shelf).length && this.props.latencyTracking.reportInteractive(), this.props.impressionListener.registerImpressionCallback(this.trackTitleImpression)) : this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this,
                            t = this.props,
                            n = t.position,
                            i = t.shelf,
                            r = this.getShelfTitle(i.title);
                        if (!this.shouldRenderShelf(i)) return null;
                        if (!this.state.showContent && null !== r) return o.createElement(ue, {
                            name: r,
                            undoSuccessHandler: this.showContent,
                            addFeedbackPromise: this.state.addFeedbackPromise,
                            size: X.Large,
                            onManageClick: this.onManageClick,
                            shouldRemoveContent: !1,
                            sourceItemRequestID: this.props.requestID
                        });
                        var a = 0,
                            s = _.cc.Large,
                            l = [];
                        if (i.content && i.content.edges) {
                            i.title.key.includes("TopGames") && (s = _.cc.ExtraSmall);
                            var c = this.getEdges(i),
                                d = te(i, function(e) {
                                    return e.content.edges || []
                                }, function() {
                                    return c
                                });
                            c.forEach(function(t, i) {
                                t && t.node && l.push(o.createElement(Le, {
                                    key: t.node.id,
                                    shelf: d,
                                    contentEdge: t,
                                    itemPosition: i,
                                    rowPosition: n,
                                    firstPageLoaded: e.props.firstPageLoaded
                                }))
                            }), this.props.itemsToDisplay > i.content.edges.length && (a = this.props.itemsToDisplay - i.content.edges.length)
                        }
                        var u = this.props.itemsToDisplay;
                        i.title.key.includes("TopGames") && (u = this.props.itemsToDisplay * Qe);
                        var p = null;
                        return p = this.state.isShelfEmpty ? o.createElement(ke, {
                            name: r,
                            onManageClick: this.onManageClick
                        }) : o.createElement(_.bc, {
                            childWidth: s,
                            gutterSize: _.dc.Small,
                            noWrap: !0,
                            placeholderItems: a
                        }, o.createElement(ve, {
                            itemSlotCount: u,
                            onEmptyShelfRender: this.onEmptyShelfRender
                        }, l)), o.createElement(_.Xa, {
                            key: i.id
                        }, o.createElement(_.W, {
                            type: _.Vb.H4,
                            color: _.O.Base
                        }, o.createElement(_.Xa, {
                            padding: {
                                bottom: 1
                            },
                            display: _.X.Flex,
                            justifyContent: _.Wa.Between
                        }, o.createElement("div", null, r), this.props.firstPageLoaded && i.title.context && Ue() && o.createElement(Ae, {
                            shelfID: i.id,
                            categoryID: i.title.context.id,
                            feedbackReasons: Object(Ie.c)(),
                            hideContent: this.hideContent,
                            onModalOpen: this.trackRecFeedbackPreModalClickShelf,
                            trackRecFeedbackClickStep: this.trackRecFeedbackClickStep,
                            sourceItemRequestID: this.props.requestID,
                            isShelf: !0
                        }))), p)
                    }, t.prototype.getShelfTitle = function(e) {
                        var t, n = this,
                            i = ((t = {})[Oe.a.TopLiveChannels] = function() {
                                return Object(l.d)("Popular <x:bold>live channels</x:bold>", {
                                    "x:bold": function(e) {
                                        return o.createElement("strong", null, e)
                                    }
                                }, "ShelfComponent")
                            }, t[Oe.a.TopGames] = function() {
                                return Object(l.d)("Popular <x:bold>categories</x:bold>", {
                                    "x:bold": function(e) {
                                        return o.createElement("strong", null, n.linkToBrowse(e))
                                    }
                                }, "ShelfComponent")
                            }, t[Oe.a.PopularVideos] = function() {
                                return Object(l.d)("Popular <x:bold>videos</x:bold>", {
                                    "x:bold": function(e) {
                                        return o.createElement("strong", null, e)
                                    }
                                }, "ShelfComponent")
                            }, t[Oe.a.PopularClips] = function() {
                                return Object(l.d)("Popular <x:bold>clips</x:bold>", {
                                    "x:bold": function(e) {
                                        return o.createElement("strong", null, e)
                                    }
                                }, "ShelfComponent")
                            }, t[Oe.a.TopChannelsPlayingGame] = function() {
                                return Object(l.d)("Popular <x:bold1>live channels</x:bold1> in <x:bold2>{game}</x:bold2>", {
                                    game: e.context ? e.context.name : "",
                                    "x:bold1": function(e) {
                                        return o.createElement("strong", null, e)
                                    },
                                    "x:bold2": function(e) {
                                        return o.createElement("strong", null, n.linkToDirectory(e))
                                    }
                                }, "ShelfComponent")
                            }, t[Oe.a.TopLiveChannelsYouMayLike] = function() {
                                return Object(l.d)("<x:bold>Live channels</x:bold> you may like", {
                                    "x:bold": function(e) {
                                        return o.createElement("strong", null, e)
                                    }
                                }, "ShelfComponent")
                            }, t[Oe.a.TopGamesForYou] = function() {
                                return Object(l.d)("<x:bold>Categories</x:bold> you may like", {
                                    "x:bold": function(e) {
                                        return o.createElement("strong", null, n.linkToBrowse(e))
                                    }
                                }, "ShelfComponent")
                            }, t[Oe.a.RecommendedBecauseYouWatchX] = function() {
                                return Object(l.d)("<x:bold>{game}</x:bold> streamers you may like", {
                                    game: e.context ? e.context.name : "",
                                    "x:bold": function(e) {
                                        return o.createElement("strong", null, n.linkToDirectory(e))
                                    }
                                }, "ShelfComponent")
                            }, t[Oe.a.RecommendedBecauseYouFollowX] = function() {
                                return Object(l.d)("Because you follow <x:bold>{name}</x:bold>", {
                                    name: e.context ? e.context.name : "",
                                    "x:bold": function(e) {
                                        return o.createElement("strong", null, n.linkToDirectory(e))
                                    }
                                }, "ShelfComponent")
                            }, t[Oe.a.GreatNewClipsYouMayHaveMissed] = function() {
                                return Object(l.d)("<x:bold>Clips</x:bold> you may like", {
                                    "x:bold": function(e) {
                                        return o.createElement("strong", null, e)
                                    }
                                }, "ShelfComponent")
                            }, t[Oe.a.TopNewVideosYouMayHaveMissed] = function() {
                                return Object(l.d)("<x:bold>Videos</x:bold> you may like", {
                                    "x:bold": function(e) {
                                        return o.createElement("strong", null, e)
                                    }
                                }, "ShelfComponent")
                            }, t);
                        return i[e.key] ? i[e.key]() : null
                    }, t
                }(o.Component),
                We = Object(s.compose)(Object(re.a)("ShelfComponent", {
                    percentage: 15
                }), Object(T.b)("ShelfComponent"), Object(De.k)())(Ve);
            var Be = Object(v.connect)(function(e) {
                    return {
                        firstPageLoaded: e.session.firstPageLoaded
                    }
                })(We),
                ze = n("nsVP");
            var Ge;
            ! function(e) {
                e.all = "all", e.ps4 = "ps4", e.xbox = "xbox"
            }(Ge || (Ge = {}));
            var He = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            requestID: t.props.initialRequestID
                        }, t.trackRecRequest = function(e) {
                            var t = {
                                endpoint: De.d.Live,
                                requestID: e,
                                section: De.c.TwitchHome
                            };
                            Object(De.j)(t)
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.trackRecRequest(this.state.requestID)
                    }, t.prototype.componentDidUpdate = function(e) {
                        if (!this.props.data.loading && this.props.data.shelves && this.props.data.shelves.edges && (this.props.latencyTracking.reportInteractive(this.props.data.shelves.edges.length), e.itemsToDisplay !== this.props.itemsToDisplay)) {
                            for (var t = [], n = 0, i = this.props.data.shelves.edges; n < i.length; n++) {
                                var r = i[n];
                                r && r.node && r.node.content && r.node.content.edges && t.push(r.node.content.edges.length)
                            }
                            if (this.props.itemsToDisplay * Qe > Math.min.apply(Math, t)) {
                                var a = Object(De.f)();
                                this.props.loadMore(a), this.trackRecRequest(a), this.setState({
                                    requestID: a
                                })
                            }
                        }
                    }, t.prototype.render = function() {
                        var e = this;
                        if (!this.props.data.shelves || !this.props.data.shelves.edges) return this.props.data.loading ? this.renderLoading() : this.props.data.error ? this.renderError() : null;
                        var t = this.props.data.shelves.edges.map(function(t, n) {
                            return o.createElement(Be, {
                                key: t.node.id,
                                shelf: t.node,
                                position: n,
                                itemsToDisplay: e.props.itemsToDisplay,
                                requestID: e.state.requestID
                            })
                        });
                        return t.splice(4, 0, this.renderAds(f.c.newFront.after4thShelf, f.b.newFront.after4thShelf, "frontpage-bottom-ad-slot")), t.splice(2, 0, this.renderAds(f.c.newFront.after2ndShelf, f.b.newFront.after2ndShelf, "frontpage-mid-ad-slot")), o.createElement(o.Fragment, null, t)
                    }, t.prototype.renderLoading = function() {
                        for (var e = this.props.itemsToDisplay, t = [], n = [], i = 0; i < e; i++) n.push(o.createElement(ee.VideoPreviewCardPlaceholder, {
                            key: "frontpage-thumbnails-placeholder-" + i
                        }));
                        for (i = 0; i < 4; i++) t.push(o.createElement(_.Xa, {
                            margin: {
                                bottom: 2
                            },
                            key: "frontpage-shelves-placeholder-" + i
                        }, o.createElement(_.Xa, {
                            margin: {
                                bottom: 1
                            }
                        }, o.createElement(_.ib, {
                            height: 25,
                            width: 150
                        })), o.createElement(_.bc, {
                            gutterSize: _.dc.Small,
                            childWidth: _.cc.Medium,
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
                        return o.createElement(g.a, {
                            adSize: e,
                            adUnit: f.d.frontpage,
                            autoEnable: !1,
                            injectStyles: {
                                display: "flex",
                                justifyContent: "center",
                                marginBottom: "2rem"
                            },
                            key: t,
                            slotID: t,
                            targeting: {
                                pagetype: f.a.frontpage
                            },
                            "data-a-target": n
                        })
                    }, t
                }(o.Component),
                Xe = Object(b.compose)(Object(c.a)(ze, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            errorPolicy: "all",
                            variables: {
                                requestID: e.initialRequestID,
                                platform: Ge.all,
                                itemsPerRow: e.initialItemsToFetch
                            }
                        }
                    },
                    props: function(e) {
                        return a.__assign({}, e, {
                            loadMore: function(t) {
                                return e.data.fetchMore({
                                    query: ze,
                                    variables: {
                                        itemsPerRow: e.ownProps.itemsToDisplay * Qe,
                                        platform: Ge.all,
                                        requestID: t
                                    },
                                    updateQuery: function(e, t) {
                                        return function(e, t) {
                                            return te(e, function(e) {
                                                return e && e.shelves && e.shelves.edges
                                            }, function(e) {
                                                return e && t && t.shelves && t.shelves.edges ? (t.shelves.edges.forEach(function(t) {
                                                    for (var n = !1, i = 0; i < e.length; i++)
                                                        if (e[i].node.id === t.node.id) {
                                                            n = !0, e[i] = te(e[i], function(e) {
                                                                return e.node.content.edges
                                                            }, function(e) {
                                                                return e && t && t.node && t.node.content && t.node.content.edges ? Object(ae.c)(e, t.node.content.edges) : null
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
                }), Object(T.b)("RecommendedContent"))(He),
                qe = 2,
                Qe = 2,
                Ye = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            initialItemsToFetch: 0,
                            itemsToDisplay: 0
                        }, t.onResize = function(e) {
                            var n = Object(J.a)(e, 300, 1),
                                i = Math.max(qe, n);
                            t.state.initialRequestID ? i !== t.state.itemsToDisplay && t.setState({
                                itemsToDisplay: i
                            }) : t.setState({
                                initialItemsToFetch: i * Qe,
                                initialRequestID: Object(De.f)(),
                                itemsToDisplay: i
                            })
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.state.initialItemsToFetch > 0 && this.state.initialRequestID ? o.createElement(Xe, {
                            itemsToDisplay: this.state.itemsToDisplay,
                            initialItemsToFetch: this.state.initialItemsToFetch,
                            initialRequestID: this.state.initialRequestID
                        }) : null;
                        return o.createElement(o.Fragment, null, e, o.createElement(K.a, {
                            onResize: this.onResize
                        }))
                    }, t
                }(o.Component),
                $e = n("6Oka"),
                Ke = (n("X2bz"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            numSlotsAdded: 0
                        }, t.onSlotAdded = function() {
                            t.setState(function(e) {
                                var t = e.numSlotsAdded + 1;
                                return t === Object.keys(f.b.newFront).length && m.a.display(f.b.newFront.top), {
                                    numSlotsAdded: t
                                }
                            })
                        }, t.shouldShowOnboarding = function() {
                            return !!(t.props.data && !t.props.data.loading && !t.props.data.error && t.props.data.currentUser && t.props.data.currentUser.followedGames && t.props.data.currentUser.followedGames.nodes && t.props.data.currentUser.createdAt) && G(t.props.data.currentUser.followedGames.nodes.length, t.props.data.currentUser.createdAt)
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        l.p.setPageTitle(), f.g.addListener(f.e, this.onSlotAdded), this.shouldShowOnboarding() && !W() && H(B.a.NewSignup)
                    }, t.prototype.componentWillUnmount = function() {
                        f.g.removeListener(f.e, this.onSlotAdded)
                    }, t.prototype.componentDidUpdate = function(e) {
                        e.data.loading && this.shouldShowOnboarding() && !W() && H(B.a.NewSignup)
                    }, t.prototype.render = function() {
                        return o.createElement(_.Xa, {
                            fullHeight: !0
                        }, o.createElement(Q.b, {
                            suppressScrollX: !0,
                            disableDebounce: !0
                        }), o.createElement(Y.a, null, o.createElement($.a, null)), this.renderFeaturedCarousel(), o.createElement(_.Xa, {
                            margin: 3
                        }, this.isCarouselHoldback() && !this.isPartnerOrStaff() && this.renderAd(), o.createElement(Ye, null)))
                    }, t.prototype.renderFeaturedCarousel = function() {
                        return this.isCarouselHoldback() && !this.isPartnerOrStaff() ? o.createElement(L, {
                            hideCarousel: !0
                        }) : o.createElement(_.Eb, {
                            className: "front-page-carousel",
                            padding: 3
                        }, this.renderAd(), o.createElement(L, null))
                    }, t.prototype.renderAd = function() {
                        return o.createElement(g.a, {
                            adSize: f.c.newFront.top,
                            adUnit: f.d.frontpage,
                            autoEnable: !1,
                            injectStyles: {
                                display: "flex",
                                justifyContent: "center",
                                marginBottom: this.isCarouselHoldback() && !this.isPartnerOrStaff() ? "2rem" : "3rem"
                            },
                            slotID: f.b.newFront.top,
                            targeting: {
                                pagetype: f.a.frontpage
                            },
                            "data-a-target": "frontpage-top-ad-slot"
                        })
                    }, t.prototype.isCarouselHoldback = function() {
                        return void 0 === this.isCarouselHoldbackCache && (this.isCarouselHoldbackCache = "experiment" === l.p.experiments.getAssignment(u.b.CarouselHoldback)), this.isCarouselHoldbackCache
                    }, t.prototype.isPartnerOrStaff = function() {
                        return !(!this.props.data || this.props.data.loading || this.props.data.error || !this.props.data.currentUser || !this.props.data.currentUser.roles) && (this.props.data.currentUser.roles.isPartner || this.props.data.currentUser.roles.isStaff)
                    }, t
                }(o.Component)),
                Je = Object(s.compose)(Object(T.b)("FrontPage", {
                    autoReportInteractive: !0,
                    destination: p.a.Index
                }), Object(d.a)({
                    location: h.PageviewLocation.FrontPage
                }), Object(c.a)($e, {
                    options: {
                        variables: {
                            limit: 18
                        }
                    }
                }))(Ke);
            n.d(t, "FrontPage", function() {
                return Je
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
                    end: 176
                }
            };
            n.loc.source = {
                body: "query ReportUserModal_ReportUserData($targetUserID: ID!) {\ntargetUser: user(id: $targetUserID lookupType: ALL) {\nid\nlogin\ndisplayName\n}\ncurrentUser {\nid\nblockedUsers {\nid\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "1mcJ": function(e, t, n) {},
        "1rIY": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return s
            });
            var i = n("mrSG"),
                r = n("q1tI"),
                a = n("/7QA"),
                o = n("2Ygb");

            function s(e, t) {
                var n = r.createContext(t),
                    s = n.Consumer,
                    l = n.Provider;
                return {
                    withContext: function(t) {
                        return function(n) {
                            var a;
                            return (a = function(e) {
                                function a() {
                                    return null !== e && e.apply(this, arguments) || this
                                }
                                return i.__extends(a, e), a.prototype.render = function() {
                                    var e = this;
                                    return r.createElement(s, null, function(a) {
                                        var o = t(a);
                                        return r.createElement(n, i.__assign({}, e.props, o))
                                    })
                                }, a
                            }(r.Component)).displayName = Object(o.a)("With" + e, n), a
                        }
                    },
                    InnerProvider: function(t) {
                        function n() {
                            return null !== t && t.apply(this, arguments) || this
                        }
                        return i.__extends(n, t), n.prototype.componentDidMount = function() {
                            "object" === typeof this.props.value && this.props.value || a.k.error(new Error(n.displayName + " rendered without an appropriate initial value"), "Set an initial value in your provider component at mount time.")
                        }, n.prototype.render = function() {
                            return r.createElement(l, {
                                value: this.props.value
                            }, this.props.children)
                        }, n.displayName = "Inner" + e + "Provider", n
                    }(r.Component)
                }
            }
        },
        "3lt/": function(e, t, n) {
            "use strict";
            n("mrSG"), n("uhBA");
            var i = n("L9xt");
            n.o(i, "PageviewContent") && n.d(t, "PageviewContent", function() {
                return i.PageviewContent
            }), n.o(i, "PageviewLocation") && n.d(t, "PageviewLocation", function() {
                return i.PageviewLocation
            }), n.o(i, "PageviewMedium") && n.d(t, "PageviewMedium", function() {
                return i.PageviewMedium
            }), n.o(i, "SpadeEventType") && n.d(t, "SpadeEventType", function() {
                return i.SpadeEventType
            })
        },
        "3sMy": function(e, t, n) {
            "use strict";
            var i;
            n.d(t, "a", function() {
                    return i
                }),
                function(e) {
                    e.GreatNewClipsYouMayHaveMissed = "GreatNewClipsYouMayHaveMissed", e.PopularClips = "PopularClips", e.PopularVideos = "PopularVideos", e.RecommendedBecauseYouWatchX = "RecommendedBecauseYouWatchX", e.RecommendedBecauseYouFollowX = "RecommendedBecauseYouFollowX", e.TopChannelsPlayingGame = "TopChannelsPlayingGame", e.TopGames = "TopGames", e.TopGamesForYou = "TopGamesForYou", e.TopLiveChannels = "TopLiveChannels", e.TopLiveChannelsYouMayLike = "TopLiveChannelsYouMayLike", e.TopNewVideosYouMayHaveMissed = "TopNewVideosYouMayHaveMissed"
                }(i || (i = {}))
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
            var i = n("mrSG"),
                r = n("/7QA"),
                a = n("2xye"),
                o = "google_calendar",
                s = "backfill";

            function l(e) {
                var t = {};
                e.forEach(function(e, n) {
                    t["carousel_slot_" + n + "_channel"] = e.broadcaster.login, t["carousel_slot_" + n + "_priority"] = e.priorityLevel, t["carousel_slot_" + n + "_game"] = e.content.gameName, t["carousel_slot_" + n + "_ccu"] = e.content.viewersCount, t["carousel_slot_" + n + "_type"] = e.content.subType, e.isScheduled ? t["carousel_slot_" + n + "_source"] = o : t["carousel_slot_" + n + "_source"] = s
                }), r.o.track(a.SpadeEventType.FrontPageCarouselDisplay, t)
            }

            function c(e) {
                r.o.track(a.SpadeEventType.FrontPageCarouselClick, e)
            }

            function d(e, t) {
                var n = i.__assign({
                    clicked_element: t
                }, e);
                r.o.track(a.SpadeEventType.FrontPageCarouselPromotionCardClick, n)
            }

            function u(e) {
                r.o.track(a.SpadeEventType.FrontPageCarouselPromotionCardView, e)
            }

            function p(e) {
                r.o.track(a.SpadeEventType.FrontPageCarouselNavButtonClick, {
                    direction: e
                })
            }
        },
        "4L7N": function(e, t, n) {
            "use strict";
            var i = n("/MKj"),
                r = n("kRBY"),
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
                            var i = t.videoQualities[0];
                            n = i.sourceURL
                        }
                        var r = this.props,
                            a = r.broadcasterId,
                            c = r.broadcasterLogin,
                            u = r.forceShow;
                        return o.createElement(s.a, {
                            ownerLogin: this.props.broadcasterLogin,
                            permittedRoles: {
                                editor: !0,
                                staff: !0
                            }
                        }, function(i) {
                            var r = i.permitted;
                            return n && (r || u) ? o.createElement(l.a, {
                                type: l.b.Download,
                                text: e.props.slug,
                                url: n,
                                onShareClick: t ? Object(d.c)(t.id, t.game && t.game.name, a, c, e.props.pageType) : void 0
                            }) : null
                        })
                    }, t
                }(o.Component),
                m = Object(c.a)(u)(p);
            var h = Object(i.connect)(function(e) {
                var t = Object(r.e)(e);
                return {
                    userLogin: t ? t.login : ""
                }
            })(m);
            n.d(t, "a", function() {
                return h
            })
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
                                        value: "ban"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "isPermanent"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "bannedUser"
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
                                }, {
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
                    end: 164
                }
            };
            n.loc.source = {
                body: "mutation Chat_BanUserFromChatRoom($input: BanUserFromChatRoomInput!) {\nbanUserFromChatRoom(input: $input) {\nban {\nisPermanent\nbannedUser {\nid\n}\n}\nerror {\ncode\n}\n}\n}",
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
                return r
            });
            var i = 10;

            function r(e, t, n) {
                if (void 0 === n && (n = 1), !t || !e) return -1;
                var r = window.getComputedStyle(document.documentElement).fontSize || i.toString(),
                    a = parseFloat(r) / i;
                return Math.floor(e / (t * a)) * n
            }
        },
        "5zf8": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            }), n.d(t, "b", function() {
                return l
            });
            var i, r, a = n("/7QA");

            function o(e, t) {
                switch (e) {
                    case i.Second:
                        return Object(a.d)("{secondCount, plural, one {# second} other {# seconds}}", {
                            secondCount: t
                        }, "formatDuration");
                    case i.Minute:
                        return Object(a.d)("{minuteCount, plural, one {# minute} other {# minutes}}", {
                            minuteCount: t
                        }, "formatDuration");
                    case i.Hour:
                        return Object(a.d)("{hourCount, plural, one {# hour} other {# hours}}", {
                            hourCount: t
                        }, "formatDuration");
                    case i.Day:
                        return Object(a.d)("{dayCount, plural, one {# day} other {# days}}", {
                            dayCount: t
                        }, "formatDuration");
                    case i.Week:
                        return Object(a.d)("{weekCount, plural, one {# week} other {# weeks}}", {
                            weekCount: t
                        }, "formatDuration");
                    case i.Month:
                        return Object(a.d)("{monthCount, plural, one {# month} other {# months}}", {
                            monthCount: t
                        }, "formatDuration");
                    default:
                        return ""
                }
            }

            function s(e, t) {
                switch (e) {
                    case i.Second:
                        return Object(a.d)("{secondCount}s", {
                            secondCount: t
                        }, "formatDuration");
                    case i.Minute:
                        return Object(a.d)("{minuteCount}m", {
                            minuteCount: t
                        }, "formatDuration");
                    case i.Hour:
                        return Object(a.d)("{hourCount}h", {
                            hourCount: t
                        }, "formatDuration");
                    case i.Day:
                        return Object(a.d)("{dayCount}d", {
                            dayCount: t
                        }, "formatDuration");
                    case i.Week:
                        return Object(a.d)("{weekCount}w", {
                            weekCount: t
                        }, "formatDuration");
                    case i.Month:
                        return Object(a.d)("{monthCount}mo", {
                            monthCount: t
                        }, "formatDuration");
                    default:
                        return ""
                }
            }

            function l(e, t) {
                var n;
                switch (void 0 === t && (t = r.Humanized), t === r.ClockAuto && (t = e >= 3600 ? r.ClockHMS : r.ClockMS), t) {
                    case r.ClockHM:
                    case r.ClockHMS:
                        n = i.Hour;
                        break;
                    case r.ClockMS:
                        n = i.Minute
                }
                var l = 2;
                t === r.ClockHMS && (l = 3);
                var d = function(e, t) {
                        void 0 === t && (t = i.Month);
                        var n = {};
                        return n.seconds = e, e < 60 || t === i.Second ? n : (n.minutes = Math.floor(e / 60), n.seconds = e % 60, n.minutes < 60 || t === i.Minute ? n : (n.hours = Math.floor(n.minutes / 60), n.minutes = n.minutes % 60, n.hours < 24 || t === i.Hour ? n : (n.days = Math.floor(n.hours / 24), n.hours = n.hours % 24, n.days < 7 || t === i.Day ? n : n.days <= 26 || t === i.Week ? (n.weeks = Math.floor(n.days / 7), n.days = n.days % 7, n) : (n.months = Math.round((n.days + 3) / 30), n))))
                    }(e, n),
                    u = Object.keys(d);
                if (u.forEach(function(e, n) {
                        t !== r.Humanized && t !== r.HumanizedShort || d[e] || delete d[e], n < u.length - l && delete d[e]
                    }), t === r.Humanized) return function(e) {
                    return e.months ? o(i.Month, e.months) : e.weeks && e.days ? o(i.Week, e.weeks) + " " + o(i.Day, e.days) : e.weeks ? o(i.Week, e.weeks) : e.days && e.hours ? o(i.Day, e.days) + " " + o(i.Hour, e.hours) : e.days ? o(i.Day, e.days) : e.hours && e.minutes ? o(i.Hour, e.hours) + " " + o(i.Minute, e.minutes) : e.hours ? o(i.Hour, e.hours) : e.minutes && e.seconds ? o(i.Minute, e.minutes) + " " + o(i.Second, e.seconds) : e.minutes ? o(i.Minute, e.minutes) : o(i.Second, e.seconds || 0)
                }(d);
                if (t === r.HumanizedShort) return function(e) {
                    return e.months ? s(i.Month, e.months) : e.weeks && e.days ? "" + s(i.Week, e.weeks) + s(i.Day, e.days) : e.weeks ? s(i.Week, e.weeks) : e.days && e.hours ? "" + s(i.Day, e.days) + s(i.Hour, e.hours) : e.days ? s(i.Day, e.days) : e.hours && e.minutes ? "" + s(i.Hour, e.hours) + s(i.Minute, e.minutes) : e.hours ? s(i.Hour, e.hours) : e.minutes && e.seconds ? "" + s(i.Minute, e.minutes) + s(i.Second, e.seconds) : e.minutes ? s(i.Minute, e.minutes) : s(i.Second, e.seconds || 0)
                }(d);
                var p = ":",
                    m = !1;
                switch (a.p.intl.getLanguageCode()) {
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
                    case r.ClockHM:
                    case r.ClockHMS:
                        var v = (m ? c(f, 2) : f) + p + c(g, 2);
                        return t === r.ClockHMS && (v += p + c(h, 2)), v;
                    case r.ClockMS:
                        return (m ? c(g, 2) : g) + p + c(h, 2)
                }
            }

            function c(e, t) {
                var n = e.toString();
                return n.length < t ? "0".repeat(t - n.length) + n : n
            }! function(e) {
                e[e.Second = 0] = "Second", e[e.Minute = 1] = "Minute", e[e.Hour = 2] = "Hour", e[e.Day = 3] = "Day", e[e.Week = 4] = "Week", e[e.Month = 5] = "Month"
            }(i || (i = {})),
            function(e) {
                e[e.Humanized = 0] = "Humanized", e[e.HumanizedShort = 1] = "HumanizedShort", e[e.ClockAuto = 2] = "ClockAuto", e[e.ClockHM = 3] = "ClockHM", e[e.ClockMS = 4] = "ClockMS", e[e.ClockHMS = 5] = "ClockHMS"
            }(r || (r = {}))
        },
        "6Oka": function(e, t) {
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
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 143
                }
            };
            n.loc.source = {
                body: "query FrontPageNew_User($limit: Int) {\ncurrentUser {\nid\ncreatedAt\nfollowedGames(first: $limit) {\nnodes {\nid\n}\n}\nroles {\nisPartner\nisStaff\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "7D17": function(e, t, n) {},
        "80G/": function(e, t, n) {},
        "86FS": function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("q1tI"),
                a = n("H1ft"),
                o = n("SWMh"),
                s = n("cr+I"),
                l = n("/7QA"),
                c = n("GFmA"),
                d = n("0INk"),
                u = n("yWUM"),
                p = n("vRsq"),
                m = n("2xye"),
                h = n("GnwI"),
                g = n("4HIT"),
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
                                return t.props.collectionID && (n.collection = t.props.collectionID), i.__assign({}, e, {
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
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = {
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
                                alt: this.props.video.title || ""
                            },
                            channelDisplayName: this.props.video.owner && this.props.video.owner.displayName || "",
                            channelLogin: this.props.video.owner && this.props.video.owner.login || "",
                            channelLinkTo: {
                                pathname: "/" + (this.props.video.owner ? this.props.video.owner.login : ""),
                                state: this.getLinkState()
                            },
                            channelImageProps: {
                                src: this.props.video.owner && this.props.video.owner.profileImageURL || "",
                                alt: this.props.video.owner && this.props.video.owner.displayName || ""
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
                            viewCount: this.props.video.viewCount || 0,
                            durationInSeconds: !this.props.hideDuration && this.props.video.lengthSeconds ? this.props.video.lengthSeconds : void 0,
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
                                linkPath: g.a.PopularTag
                            } : void 0
                        };
                        return r.createElement(c.a, i.__assign({}, e))
                    }, t.prototype.generateSearchString = function() {
                        var e = {};
                        this.props.collectionID && (e.collection = this.props.collectionID);
                        var t = s.stringify(e);
                        return t ? "?" + t : ""
                    }, t.prototype.getVideoPreviousWatchPercentage = function() {
                        return this.props.video && this.props.video.self && this.props.video.self.viewingHistory && null !== this.props.video.self.viewingHistory.position ? 0 === this.props.video.lengthSeconds || 0 === this.props.video.self.viewingHistory.position ? null : this.props.video.self.viewingHistory.position / (this.props.video.lengthSeconds || 1 / 0) * 100 : null
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
                }(r.Component),
                v = Object(h.b)("VideoPreviewCard", {
                    autoReportInteractive: !0
                })(f);
            n.d(t, "a", function() {
                return k
            });
            var k = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        videoGameChanges: []
                    }, t.maybeFetchVideoMarkers = function(e, n) {
                        return i.__awaiter(t, void 0, void 0, function() {
                            var t;
                            return i.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return this.promise = Object(o.a)(e, n, this.props.video.game), [4, this.promise];
                                    case 1:
                                        return t = i.sent(), this.setState({
                                            videoGameChanges: t
                                        }), [2]
                                }
                            })
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(v, i.__assign({
                        videoGameChanges: this.state.videoGameChanges
                    }, this.props))
                }, t.prototype.componentWillMount = function() {
                    this.props.multipleVideoGameMarkersType && this.props.multipleVideoGameMarkersType !== a.a.None && !this.promise && this.maybeFetchVideoMarkers(this.props.video.id, this.props.video.lengthSeconds || 0)
                }, t
            }(r.Component)
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
        "9MO3": function(e, t, n) {
            "use strict";
            n.d(t, "c", function() {
                return d
            }), n.d(t, "a", function() {
                return p
            }), n.d(t, "b", function() {
                return h
            }), n.d(t, "d", function() {
                return f
            });
            var i = n("/7QA"),
                r = n("DMoW"),
                a = n("yI6f");

            function o() {
                return {
                    text: Object(i.d)("I am not interested in this category", "FeedbackReason"),
                    contentType: a.b.Game,
                    feedbackType: r.L.NOT_INTERESTED
                }
            }

            function s() {
                return Object(i.d)("Other", "FeedbackReason")
            }

            function l() {
                return Object(i.d)("I am not interested in this channel", "FeedbackReason")
            }
            var c = null;

            function d() {
                return null === c && (c = [o(), {
                    text: s(),
                    contentType: a.b.Shelf,
                    feedbackType: r.L.OTHER
                }]), c
            }
            var u = null;

            function p() {
                return null === u && (u = [{
                    text: l(),
                    contentType: a.b.Live,
                    feedbackType: r.L.NOT_INTERESTED
                }, o(), {
                    text: s(),
                    contentType: a.b.Live,
                    feedbackType: r.L.OTHER
                }]), u
            }
            var m = null;

            function h() {
                return null === m && (m = [o(), {
                    text: s(),
                    contentType: a.b.Game,
                    feedbackType: r.L.OTHER
                }]), m
            }
            var g = null;

            function f() {
                return null === g && (g = [{
                    text: Object(i.d)("I am not interested in this video", "FeedbackReason"),
                    contentType: a.b.Vod,
                    feedbackType: r.L.NOT_INTERESTED
                }, {
                    text: l(),
                    contentType: a.b.Live,
                    feedbackType: r.L.NOT_INTERESTED
                }, o(), {
                    text: Object(i.d)("I have already watched this video", "FeedbackReason"),
                    contentType: a.b.Vod,
                    feedbackType: r.L.ALREADY_WATCHED
                }, {
                    text: s(),
                    contentType: a.b.Vod,
                    feedbackType: r.L.OTHER
                }]), g
            }
        },
        "9a8W": function(e, t, n) {},
        A65o: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return s
            });
            var i = n("mrSG"),
                r = n("q1tI"),
                a = n("yI6f"),
                o = n("x75U");

            function s() {
                return function(e) {
                    return function(t) {
                        function n() {
                            var e = null !== t && t.apply(this, arguments) || this;
                            return e.trackImpression = function(t) {
                                e.context.trackImpression(e.props.shelf, e.props.contentEdge, e.props.itemPosition, t)
                            }, e.trackClick = function(t, n, i) {
                                "string" != typeof i && (i = void 0), e.context.trackClick(e.props.shelf, e.props.contentEdge, e.props.itemPosition, t, n, i)
                            }, e
                        }
                        return i.__extends(n, t), n.prototype.render = function() {
                            var t = this.context.cardIDtoItemTrackingIDMap && this.props.contentEdge.node && this.context.cardIDtoItemTrackingIDMap[this.props.contentEdge.node.id],
                                n = this.props,
                                o = n.itemPosition,
                                s = n.rowPosition,
                                l = n.shelf,
                                c = Object(a.g)(l.title).rowName,
                                d = {
                                    trackImpression: this.trackImpression,
                                    trackRecFeedbackPreModalClick: this.context.trackRecFeedbackPreModalClick,
                                    trackRecFeedbackClickStep: this.context.trackRecFeedbackClickStep,
                                    trackRecFeedbackClickStepPostSubmit: this.context.trackRecFeedbackClickStepPostSubmit,
                                    trackClick: this.trackClick,
                                    shelfCardTrackingProps: {
                                        item_tracking_id: t || null,
                                        item_position: o,
                                        row_name: c,
                                        row_position: s
                                    }
                                };
                            return r.createElement(e, i.__assign({}, this.props, d))
                        }, n.contextTypes = o.a, n
                    }(r.Component)
                }
            }
        },
        AO3T: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            }), n.d(t, "d", function() {
                return s
            }), n.d(t, "b", function() {
                return l
            }), n.d(t, "c", function() {
                return c
            });
            var i, r, a = n("/7QA"),
                o = n("2xye");
            ! function(e) {
                e.HomepageCTA = "homepage_cta", e.NewSignup = "new_signup"
            }(i || (i = {})),
            function(e) {
                e.Click = "click", e.Impression = "impression", e.Start = "start", e.Dismissed = "dismissed", e.Completed = "completed"
            }(r || (r = {}));
            var s = function(e) {
                    var t = {
                        source: e.source,
                        action: r.Start
                    };
                    a.o.track(o.SpadeEventType.OnboardingEvent, t)
                },
                l = function() {
                    var e = {
                        source: i.HomepageCTA,
                        action: r.Completed
                    };
                    a.o.track(o.SpadeEventType.OnboardingEvent, e)
                },
                c = function(e, t) {
                    var n = {
                        src: o.SpadeEventType.OnboardingEvent,
                        game: t
                    };
                    a.o.track(e, n)
                }
        },
        B3R5: function(e, t, n) {},
        "BQs+": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            }), n.d(t, "c", function() {
                return d
            }), n.d(t, "b", function() {
                return u
            });
            var i, r = n("mrSG"),
                a = n("/7QA"),
                o = n("2xye"),
                s = n("I6K6"),
                l = n("bTcf"),
                c = n("L7EG");

            function d(e, t, n) {
                return r.__awaiter(this, void 0, void 0, function() {
                    var i, l, u, p;
                    return r.__generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return r.trys.push([0, 2, , 3]), [4, n.query({
                                    query: c,
                                    variables: {
                                        videoID: e.id
                                    }
                                })];
                            case 1:
                                return i = r.sent().data, l = function(e, t) {
                                    return {
                                        id: e.id,
                                        owner: t.owner,
                                        broadcastType: t.broadcastType,
                                        game: t.game
                                    }
                                }(e, i.video), u = {
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
                                }, a.p.tracking.track(o.SpadeEventType.ShareItem, u), [3, 3];
                            case 2:
                                return p = r.sent(), a.k.error(p.toString(), d.name), [3, 3];
                            case 3:
                                return [2]
                        }
                    })
                })
            }

            function u(e, t, n) {
                return r.__awaiter(this, void 0, void 0, function() {
                    var i, s, c;
                    return r.__generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return r.trys.push([0, 2, , 3]), [4, n.query({
                                    query: l,
                                    variables: {
                                        creatorID: e.owner.id
                                    }
                                })];
                            case 1:
                                return i = r.sent().data, s = {
                                    channel: i.user ? i.user.login : null,
                                    channel_id: Number(e.owner.id),
                                    game: null,
                                    partner: !!i.user && i.user.roles.isPartner,
                                    location: t.location,
                                    share_context: null,
                                    share_platform: t.platform,
                                    shared_item_id: e.id,
                                    shared_item_type: o.ShareItemType.Collection,
                                    shared_item_url: t.shareURL,
                                    source_item_id: e.id,
                                    source_item_type: o.SourceItemType.Collection
                                }, a.p.tracking.track(o.SpadeEventType.ShareItem, s), [3, 3];
                            case 2:
                                return c = r.sent(), a.k.error(c.toString(), u.name), [3, 3];
                            case 3:
                                return [2]
                        }
                    })
                })
            }! function(e) {
                e.Copy = "link", e.Embed = "option_embed", e.Facebook = "fb", e.Link = "option_link", e.Reddit = "reddit", e.Twitter = "twitter", e.Unknown = "", e.VKontakte = "vk", e.Download = "download"
            }(i || (i = {}))
        },
        BhFH: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return l
            });
            var i = n("mrSG"),
                r = n("yR8l"),
                a = n("8jSG"),
                o = n("cMjZ"),
                s = n("kSkr");

            function l() {
                var e = this;
                return Object(r.a)(s, {
                    props: function(t) {
                        return {
                            blockUserMutation: function(n, r, s, l) {
                                return i.__awaiter(e, void 0, void 0, function() {
                                    return i.__generator(this, function(e) {
                                        switch (e.label) {
                                            case 0:
                                                return t.mutate ? [4, t.mutate({
                                                    variables: {
                                                        input: {
                                                            targetUserID: n,
                                                            sourceContext: s,
                                                            reason: r
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
        DzyH: function(e, t, n) {},
        Fj9y: function(e, t, n) {},
        GFmA: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("q1tI"),
                a = n("/7QA"),
                o = n("5zf8"),
                s = n("Ue10"),
                l = (n("Fj9y"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onBalloonItemClick = function() {
                            t.props.onBalloonItemClick && t.props.onBalloonItemClick(t.props.videoID, t.props.index)
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = {
                            src: this.props.gameChange.thumbnailUrl,
                            alt: this.props.gameChange.label
                        };
                        return r.createElement(s.Xa, {
                            className: "preview-card-game-balloon-row",
                            display: s.X.Flex,
                            flexWrap: s.Ba.NoWrap
                        }, r.createElement(s.Ua, {
                            linkTo: this.props.gameChange.linkTo,
                            onClick: this.onBalloonItemClick
                        }, r.createElement(s.Xa, {
                            display: s.X.Flex,
                            flexDirection: s.Aa.Row,
                            padding: .5
                        }, r.createElement(s.Eb, {
                            className: "preview-card-game-balloon-row__image-wrapper",
                            flexGrow: 0,
                            flexShrink: 0,
                            borderRadius: s.x.Small,
                            overflow: s.cb.Hidden,
                            position: s.jb.Relative
                        }, r.createElement(s.o, {
                            align: s.d.Center,
                            ratio: s.p.BoxArt
                        }, r.createElement(s.S, i.__assign({}, e))), r.createElement(s.Eb, {
                            className: "preview-card-game-balloon-row__image-play-overlay",
                            alignItems: s.f.Center,
                            background: s.r.Overlay,
                            color: s.O.Overlay,
                            display: s.X.Flex,
                            justifyContent: s.Wa.Center,
                            position: s.jb.Absolute,
                            attachTop: !0,
                            attachBottom: !0,
                            attachLeft: !0,
                            attachRight: !0
                        }, r.createElement(s.sb, {
                            asset: s.tb.Play,
                            type: s.ub.Inherit
                        }))), r.createElement(s.Xa, {
                            display: s.X.Flex,
                            flexDirection: s.Aa.Column,
                            flexGrow: 1,
                            flexShrink: 1,
                            padding: {
                                left: 1,
                                top: 1
                            }
                        }, r.createElement(s.Xa, {
                            className: "preview-card-game-balloon-row__info-label"
                        }, r.createElement(s.W, null, this.props.gameChange.label)), r.createElement(s.Xa, {
                            className: "preview-card-game-balloon-row__info-duration"
                        }, r.createElement(s.W, null, Object(o.b)(this.props.gameChange.duration)))))))
                    }, t
                }(r.Component)),
                c = n("0INk"),
                d = n("8/mp"),
                u = n("eJ65"),
                p = (n("vDRX"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onBalloonToggle = function(e) {
                            t.props.onBalloonClick && !e && t.props.onBalloonClick(t.props.videoID)
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        if (this.props.videoGameChanges.length > 0) {
                            var e = this.props.videoGameChanges.map(function(e) {
                                return e.label
                            });
                            Object(c.a)(e)
                        }
                    }, t.prototype.render = function() {
                        return r.createElement(s.Xa, {
                            className: "preview-card-game-balloon",
                            display: s.X.InlineBlock,
                            position: s.jb.Relative,
                            margin: {
                                top: .5
                            }
                        }, r.createElement(u.a, {
                            key: "game-balloon",
                            display: s.X.Inline,
                            onToggle: this.onBalloonToggle
                        }, r.createElement(s.z, {
                            type: s.F.Hollow,
                            icon: s.tb.ViewerList
                        }, r.createElement(s.Xa, {
                            display: s.X.Flex,
                            flexDirection: s.Aa.Row
                        }, r.createElement(s.W, null, Object(a.d)("Chapters", "PreviewCardGameBalloon")), r.createElement(s.Xa, {
                            margin: {
                                left: 1
                            }
                        }, r.createElement(s.gb, {
                            label: this.props.videoGameChanges.length.toString()
                        })))), r.createElement(s.u, {
                            direction: s.v.TopLeft,
                            size: s.w.Medium
                        }, r.createElement(s.Xa, {
                            overflow: s.cb.Hidden,
                            display: s.X.Flex,
                            flexDirection: s.Aa.Column,
                            flexWrap: s.Ba.NoWrap
                        }, r.createElement(s.Xa, {
                            padding: .5,
                            flexShrink: 0,
                            flexGrow: 0
                        }, r.createElement(s.W, {
                            color: s.O.Alt2
                        }, Object(a.d)("Chapter Select", "PreviewCardGameBalloon"))), r.createElement(s.Xa, {
                            className: "preview-card-game-balloon__content",
                            display: s.X.Flex,
                            flexDirection: s.Aa.Column,
                            flexGrow: 1,
                            flexShrink: 1,
                            flexWrap: s.Ba.NoWrap
                        }, r.createElement(d.b, null, r.createElement(s.Xa, {
                            display: s.X.Flex,
                            flexDirection: s.Aa.Column,
                            flexWrap: s.Ba.NoWrap,
                            fullHeight: !0
                        }, this.renderAdditionalGameList(this.props.videoGameChanges))))))))
                    }, t.prototype.renderAdditionalGameList = function(e) {
                        var t = this;
                        return e.map(function(e, n) {
                            return r.createElement(l, {
                                index: n,
                                gameChange: e,
                                key: t.props.videoID + "-" + e.offset,
                                videoID: t.props.videoID,
                                onBalloonItemClick: t.props.onBalloonItemClick
                            })
                        })
                    }, t
                }(r.Component)),
                m = n("kduP"),
                h = n("2xye"),
                g = function(e) {
                    return r.createElement(s.Xa, null, r.createElement(s.W, {
                        color: s.O.Alt,
                        ellipsis: !0
                    }, e.videoGameChanges.map(function(t, n, i) {
                        return r.createElement(s.Pa, {
                            key: n
                        }, r.createElement(s.U, {
                            to: {
                                pathname: Object(m.c)(t.label),
                                state: {
                                    content: h.PageviewContent.TextLink,
                                    medium: e.trackingContext && e.trackingContext.medium
                                }
                            },
                            type: s.V.Inherit
                        }, t.label, f(n, i.length - 1) ? null : ", "))
                    })))
                },
                f = function(e, t) {
                    return e === t
                },
                v = n("N0BP"),
                k = (n("XA5B"), function(e) {
                    var t = r.createElement(s.Eb, {
                        className: "preview-card-iconic-image__wrapper",
                        borderRadius: s.x.Small,
                        overflow: s.cb.Hidden
                    }, r.createElement(s.o, {
                        ratio: e.aspect || s.p.BoxArt,
                        align: s.d.Center
                    }, r.createElement(s.S, i.__assign({}, e.imageProps))));
                    return e.linkTo && (t = r.createElement(s.U, i.__assign({}, Object(v.a)(e), {
                        to: e.linkTo,
                        onClick: e.onClick
                    }), t)), t
                });
            k.displayName = "PreviewCardIconicImage";
            var b, y = n("TSYQ"),
                C = (n("cRsL"), function(e) {
                    var t = y("preview-card-top-bar", {
                        "preview-card-top-bar--gray": !e.selected,
                        "preview-card-top-bar--green": e.selected
                    });
                    return r.createElement(s.Xa, {
                        display: s.X.Flex,
                        padding: {
                            x: 1,
                            y: .5
                        },
                        justifyContent: s.Wa.Between,
                        alignItems: s.f.Center,
                        className: t
                    }, r.createElement(s.Xa, {
                        display: s.X.InlineFlex
                    }, r.createElement(s.W, {
                        "data-test-selector": "top-bar-title-selector",
                        color: s.O.Overlay,
                        bold: !0,
                        transform: s.Ub.Uppercase
                    }, e.title)), e.subTitle && r.createElement(s.Xa, {
                        display: s.X.InlineFlex
                    }, r.createElement(s.W, {
                        "data-test-selector": "top-bar-sub-title-selector",
                        color: s.O.Overlay
                    }, e.subTitle)))
                }),
                S = (n("m493"), function(e) {
                    var t = .5,
                        n = null;
                    "number" == typeof e.progressBarPercent && e.progressBarPercent > 0 && (n = r.createElement(s.Xa, {
                        position: s.jb.Absolute,
                        attachBottom: !0,
                        fullWidth: !0
                    }, r.createElement(s.mb, {
                        borderRadius: s.x.None,
                        size: s.ob.Small,
                        value: e.progressBarPercent,
                        mask: !0
                    })), t = 1);
                    var a = 1,
                        o = null;
                    return e.topBar && (o = r.createElement(s.Xa, {
                        position: s.jb.Absolute,
                        attachTop: !0,
                        fullWidth: !0
                    }, r.createElement(C, i.__assign({}, e.topBar))), a = 3), r.createElement(s.Xa, {
                        position: s.jb.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        fullWidth: !0,
                        fullHeight: !0,
                        className: "preview-card-overlay"
                    }, o, n, r.createElement(s.Xa, {
                        position: s.jb.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        margin: e.topBar ? {
                            x: 1,
                            y: a
                        } : 1,
                        "data-test-selector": "top-left-selector"
                    }, e.topLeft), r.createElement(s.Xa, {
                        position: s.jb.Absolute,
                        attachTop: !0,
                        attachRight: !0,
                        margin: e.topBar ? {
                            x: 1,
                            y: a
                        } : 1,
                        "data-test-selector": "top-right-selector"
                    }, e.topRight), r.createElement(s.Xa, {
                        position: s.jb.Absolute,
                        attachBottom: !0,
                        attachLeft: !0,
                        margin: {
                            x: .5,
                            y: t
                        },
                        "data-test-selector": "bottom-left-selector"
                    }, e.bottomLeft), r.createElement(s.Xa, {
                        position: s.jb.Absolute,
                        attachBottom: !0,
                        attachRight: !0,
                        margin: {
                            x: .5,
                            y: t
                        },
                        "data-test-selector": "bottom-right-selector"
                    }, e.bottomRight))
                }),
                w = (n("kF1+"), function(e) {
                    var t = e.icon && r.createElement(s.Xa, {
                        display: s.X.Flex,
                        margin: {
                            right: .5
                        }
                    }, r.createElement(s.sb, {
                        asset: e.icon,
                        width: 10,
                        height: 10
                    }));
                    return e.withBackground ? r.createElement(s.Eb, {
                        alignItems: s.f.Center,
                        background: s.r.Overlay,
                        borderRadius: s.x.Small,
                        className: "preview-card-stat",
                        color: s.O.Overlay,
                        display: s.X.Flex,
                        fontSize: s.Ca.Size6,
                        justifyContent: s.Wa.Center
                    }, t, r.createElement(s.W, null, e.value)) : r.createElement(s.Eb, {
                        className: "preview-card-stat",
                        color: s.O.Overlay,
                        display: s.X.Flex,
                        padding: {
                            x: .5
                        }
                    }, t, r.createElement(s.W, null, e.value))
                }),
                T = n("GnwI"),
                _ = (n("B3R5"), function(e) {
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
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.trackImageLatency || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = {};
                        return this.props.animatedImageProps && (e = {
                            onMouseEnter: this.handleFocus,
                            onMouseLeave: this.handleBlur,
                            onFocus: this.handleFocus,
                            onBlur: this.handleBlur
                        }), r.createElement("div", i.__assign({}, e, {
                            onClick: this.props.onClick
                        }), r.createElement(s.Eb, {
                            background: s.r.Alt2,
                            overflow: s.cb.Hidden
                        }, r.createElement(s.o, {
                            ratio: this.props.aspectRatio
                        }, this.renderImage())))
                    }, t.prototype.renderImage = function() {
                        var e, t = !(!this.props.animatedImageProps || !this.state.isHovered || this.state.didAnimatedPreviewFailToLoad),
                            n = y("preview-card-thumbnail__image", ((e = {})["preview-card-thumbnail__image--animated"] = this.state.isHovered && this.state.didAnimatedPreviewLoad, e));
                        return t && void 0 !== this.props.animatedImageProps ? r.createElement("div", {
                            className: n
                        }, r.createElement(s.S, i.__assign({}, this.props.animatedImageProps, {
                            onLoad: this.onAnimatedImageLoad,
                            onError: this.onAnimatedImageLoadError,
                            "data-test-selector": "preview-card-thumbnail__image-selector"
                        }))) : r.createElement("div", {
                            className: n
                        }, r.createElement(s.S, i.__assign({}, this.props.staticImageProps, {
                            onLoad: this.onImageLoad,
                            onError: this.onImageError,
                            "data-test-selector": "preview-card-thumbnail__image-selector"
                        })))
                    }, t
                }(r.Component)),
                E = Object(T.b)("PreviewCardThumbnail")(_),
                I = (n("80G/"), function(e) {
                    var t = null;
                    return e.subtitles && e.subtitles.length > 0 && (t = e.subtitles.map(function(e, t) {
                        return r.createElement(s.Xa, {
                            key: t,
                            "data-test-selector": "preview-card-titles__subtitle"
                        }, r.createElement(s.W, {
                            color: s.O.Alt,
                            ellipsis: !0
                        }, "string" == typeof e ? e : r.createElement(s.U, {
                            "data-a-target": e.automationSelector,
                            to: e.linkTo,
                            onClick: e.onClick,
                            type: s.V.Inherit
                        }, e.text)))
                    })), r.createElement("div", null, r.createElement(s.U, i.__assign({}, Object(v.a)(e), {
                        to: e.linkTo,
                        onClick: e.onClick,
                        type: s.V.Inherit,
                        "data-test-selector": "preview-card-titles__primary-link"
                    }), r.createElement(s.W, {
                        type: s.Vb.H3,
                        fontSize: s.Ca.Size5,
                        lines: 1,
                        bold: !0,
                        ellipsis: !0
                    }, e.title)), r.createElement(s.Xa, {
                        className: "preview-card-titles__subtitle-wrapper"
                    }, t))
                }),
                R = n("H1ft"),
                O = n("ZbA5"),
                D = n("QVaV"),
                N = n("hyVY"),
                x = n("MXoD"),
                M = n("0LAi");
            ! function(e) {
                e.LockSelector = "video-lock", e.UpsellSelector = "upsell"
            }(b || (b = {}));
            var P, j, F = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    if (!this.props.restriction || !this.props.restriction.productName || !this.props.restriction.title) return null;
                    var e = Object(a.d)("Get It Now", "VideoPreviewCardRestriction"),
                        t = this.props.restriction.canViewRestricted,
                        n = t ? Object(a.d)("unlocked", "VideoPreviewCardRestriction") : Object(a.d)("locked", "VideoPreviewCardRestriction"),
                        i = t ? s.tb.Unlock : s.tb.Lock;
                    return r.createElement(s.Xa, null, !t && r.createElement(s.Eb, {
                        background: s.r.Overlay,
                        className: "video-preview-card-restriction",
                        color: s.O.Overlay,
                        display: s.X.Flex,
                        position: s.jb.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        zIndex: s.ic.Default,
                        padding: {
                            x: 5
                        },
                        textAlign: s.Rb.Center,
                        fullWidth: !0,
                        fullHeight: !0,
                        alignItems: s.f.Center,
                        alignContent: s.e.Center,
                        flexDirection: s.Aa.Column,
                        flexWrap: s.Ba.Wrap,
                        justifyContent: s.Wa.Center,
                        "data-test-selector": b.LockSelector
                    }, r.createElement(s.Pa, {
                        margin: {
                            bottom: 1
                        }
                    }, r.createElement(s.W, {
                        color: s.O.Overlay,
                        fontSize: s.Ca.Size5,
                        "data-test-selector": b.UpsellSelector
                    }, Object(a.d)("View with {title}", {
                        title: this.props.restriction.title
                    }, "VideoPreviewCardRestriction"))), r.createElement(s.Xa, null, r.createElement(s.z, {
                        type: s.F.Hollow,
                        ariaLabel: e,
                        targetBlank: !0,
                        disabled: "" === this.props.restriction.upsellLinkTo,
                        linkTo: this.props.restriction.upsellLinkTo,
                        overlay: !0
                    }, e))), r.createElement(s.Eb, {
                        display: s.X.InlineFlex,
                        position: s.jb.Absolute,
                        attachTop: this.props.attachTop,
                        attachBottom: !this.props.attachTop,
                        attachRight: !0,
                        margin: .5,
                        zIndex: s.ic.Default,
                        fontSize: s.Ca.Size6,
                        background: s.r.Overlay,
                        borderRadius: s.x.Medium,
                        color: s.O.Overlay
                    }, r.createElement(s.Yb, {
                        direction: this.props.attachTop ? s.ac.Bottom : s.ac.Top,
                        align: s.Zb.Right,
                        label: n
                    }, r.createElement(s.sb, {
                        asset: i,
                        height: 20,
                        width: 20
                    }))))
                }, t
            }(r.PureComponent);
            n("5NSO");

            function L(e) {
                return void 0 !== e.watchedProgressPercent
            }

            function U(e) {
                return void 0 !== e.clipCreatedByChannelLogin
            }! function(e) {
                e.Avatar = "preview-card-avatar", e.BoxArt = "preview-card-box-art"
            }(P || (P = {})),
            function(e) {
                e[e.SingleGameList = 1] = "SingleGameList", e[e.SingleChannelList = 2] = "SingleChannelList", e[e.MixedGameAndChannelList = 3] = "MixedGameAndChannelList"
            }(j || (j = {}));
            var A = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.getTrackingContext = function(e) {
                            var n = t.props.trackingContext;
                            return {
                                content: n && n.content ? n.content : e,
                                medium: n && n.medium
                            }
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return r.createElement("div", i.__assign({
                            className: "preview-card"
                        }, Object(v.a)(this.props)), r.createElement(s.Eb, {
                            position: s.jb.Relative,
                            borderRadius: s.x.Medium,
                            overflow: s.cb.Hidden
                        }, this.renderVODRestrictionOverlay(), r.createElement(s.U, {
                            to: Object(x.a)(this.getTrackingContext(h.PageviewContent.VideoThumbnail), this.props.linkTo),
                            onClick: this.props.onThumbnailClick || this.props.onClick,
                            "data-a-target": "preview-card-image-link"
                        }, this.props.thumbnailImageProps && r.createElement(E, {
                            staticImageProps: this.props.thumbnailImageProps,
                            animatedImageProps: L(this.props) && this.props.animatedImageProps || void 0,
                            trackImageLatency: this.props.trackImageLatency
                        }), this.renderOverlay())), r.createElement(s.Xa, {
                            display: s.X.Flex,
                            flexWrap: s.Ba.NoWrap,
                            margin: {
                                top: 1
                            }
                        }, r.createElement(s.Xa, {
                            flexGrow: 0,
                            flexShrink: 0
                        }, this.renderIconicImage()), r.createElement(s.Xa, {
                            className: "preview-card__titles-wrapper",
                            flexGrow: 1,
                            flexShrink: 1,
                            fullWidth: !0
                        }, this.renderTitles(), this.renderTags()), this.props.contextualCardActionProps && r.createElement(s.Xa, {
                            flexGrow: 0,
                            flexShrink: 0
                        }, r.createElement(this.props.contextualCardActionProps.component, i.__assign({}, this.props.contextualCardActionProps.props)))))
                    }, t.prototype.renderOverlay = function() {
                        return function(e) {
                            return void 0 !== e.streamType
                        }(this.props) ? r.createElement(S, {
                            topLeft: r.createElement(O.a, {
                                type: this.props.streamType,
                                hosting: !!this.props.hostedByChannelLogin
                            }),
                            topRight: void 0,
                            bottomLeft: r.createElement(w, {
                                value: Object(a.d)("{viewerCount, plural, one {# viewer} other {# viewers}}", {
                                    viewerCount: this.props.currentViewerCount
                                }, "VideoPreviewCard")
                            }),
                            bottomRight: void 0
                        }) : L(this.props) ? r.createElement(S, {
                            topLeft: void 0 !== this.props.durationInSeconds && r.createElement(w, {
                                value: Object(N.b)(this.props.durationInSeconds),
                                icon: s.tb.Play,
                                withBackground: !0
                            }),
                            topRight: this.props.listPosition && r.createElement(w, {
                                withBackground: !0,
                                value: this.getListPositionLabel()
                            }),
                            bottomLeft: r.createElement(w, {
                                value: this.getViewCountLabel()
                            }),
                            bottomRight: this.props.datePublished ? r.createElement(w, {
                                value: Object(a.c)(new Date(this.props.datePublished), "medium")
                            }) : null,
                            progressBarPercent: this.props.watchedProgressPercent,
                            topBar: this.props.topBar
                        }) : U(this.props) ? r.createElement(S, {
                            topLeft: r.createElement(w, {
                                value: Object(N.b)(this.props.durationInSeconds),
                                icon: s.tb.Clip,
                                withBackground: !0
                            }),
                            topRight: void 0,
                            bottomLeft: r.createElement(w, {
                                value: this.getViewCountLabel()
                            }),
                            bottomRight: this.props.datePublished ? r.createElement(w, {
                                value: Object(a.c)(new Date(this.props.datePublished), "medium")
                            }) : null
                        }) : void 0
                    }, t.prototype.getListPositionLabel = function() {
                        return L(this.props) && this.props.listPosition ? Object(a.d)("{totalVideos, plural, one {{position} / # video} other {{position} / # videos}}", {
                            position: this.props.listPosition.position,
                            totalVideos: this.props.listPosition.totalVideos
                        }, "VideoPreviewCard") : ""
                    }, t.prototype.getViewCountLabel = function() {
                        return L(this.props) || U(this.props) ? Object(a.d)("{viewerCount, plural, one {# view} other {# views}}", {
                            viewerCount: this.props.viewCount
                        }, "VideoPreviewCard") : ""
                    }, t.prototype.renderIconicImage = function() {
                        return this.props.context === j.SingleChannelList && this.props.gameBoxArtImageProps && this.props.gameBoxArtImageProps.src && this.props.gameTitleLinkTo ? r.createElement(s.Xa, {
                            margin: {
                                right: 1
                            }
                        }, r.createElement(k, {
                            imageProps: this.props.gameBoxArtImageProps,
                            linkTo: Object(x.a)(this.getTrackingContext(h.PageviewContent.GameBoxart), this.props.gameTitleLinkTo),
                            onClick: this.props.onGameTitleClick,
                            aspect: s.p.BoxArt,
                            "data-test-selector": P.BoxArt,
                            "data-a-target": "preview-card-boxart-link"
                        })) : (this.props.context === j.SingleGameList || this.props.context === j.MixedGameAndChannelList) && this.props.channelImageProps && this.props.channelImageProps.src ? r.createElement(s.Xa, {
                            margin: {
                                right: 1
                            }
                        }, r.createElement(k, {
                            imageProps: this.props.channelImageProps,
                            linkTo: Object(x.a)(this.getTrackingContext(h.PageviewContent.UserThumbnail), this.props.channelLinkTo),
                            onClick: this.props.onChannelImageClick || this.props.onChannelLoginClick,
                            aspect: s.p.Aspect1x1,
                            "data-test-selector": P.Avatar
                        })) : void 0
                    }, t.prototype.renderTitles = function() {
                        var e = null,
                            t = [];
                        return this.shouldShowGameBalloon(this.props) || t.push({
                            text: Object(D.a)(this.props.channelLogin, this.props.channelDisplayName, !0),
                            linkTo: Object(x.a)(this.getTrackingContext(h.PageviewContent.ChannelMetadata), this.props.channelLinkTo),
                            onClick: this.props.onChannelLoginClick,
                            automationSelector: "preview-card-channel-link"
                        }), U(this.props) && this.props.clipCreatedByChannelLoginLinkTo ? t.push({
                            text: Object(a.d)("Clipped by {userName}", {
                                userName: this.props.clipCreatedByChannelLogin || ""
                            }, "VideoPreviewCard"),
                            linkTo: this.props.clipCreatedByChannelLoginLinkTo,
                            onClick: this.props.onClipCreatedByChannelLoginClick,
                            automationSelector: "preview-card-clip-curator-link"
                        }) : L(this.props) && this.props.multipleVideoGameMarkersType && this.props.videoGameChanges && this.props.videoGameChanges.length > 0 ? e = this.renderPreviewCardGameInfo(this.props.multipleVideoGameMarkersType, this.props.videoGameChanges, this.props.onVideoGameBalloonClick, this.props.onVideoGameBalloonItemClick) : this.props.context !== j.SingleGameList && this.props.gameTitle && this.props.gameTitleLinkTo && t.push({
                            text: this.props.gameTitle,
                            linkTo: Object(x.a)(this.getTrackingContext(h.PageviewContent.GameMetadata), this.props.gameTitleLinkTo),
                            onClick: this.props.onGameTitleClick,
                            automationSelector: "preview-card-game-link"
                        }), r.createElement(r.Fragment, null, r.createElement(I, {
                            title: this.props.title,
                            onClick: this.props.onVideoTitleClick || this.props.onClick,
                            linkTo: Object(x.a)(this.getTrackingContext(h.PageviewContent.VideoTitle), this.props.linkTo),
                            subtitles: t,
                            "data-a-target": "preview-card-title-link"
                        }), e)
                    }, t.prototype.renderTags = function() {
                        return this.props.tagListProps && 0 !== this.props.tagListProps.tags.length ? r.createElement(s.Xa, {
                            margin: {
                                top: .5
                            }
                        }, r.createElement(M.a, i.__assign({}, this.props.tagListProps, {
                            tagNumberLimit: 3
                        }))) : null
                    }, t.prototype.renderVODRestrictionOverlay = function() {
                        return L(this.props) && this.props.restriction && this.props.restriction.productName && this.props.restriction.title ? r.createElement(F, {
                            restriction: this.props.restriction,
                            attachTop: !0
                        }) : null
                    }, t.prototype.shouldShowGameBalloon = function(e) {
                        return !!L(e) && (!!(e.videoGameChanges && e.videoGameChanges.length > 0) && e.multipleVideoGameMarkersType === R.a.Balloon)
                    }, t.prototype.renderPreviewCardGameInfo = function(e, t, n, i) {
                        switch (e) {
                            case R.a.Balloon:
                                return r.createElement(p, {
                                    videoGameChanges: t,
                                    videoID: t[0].videoID,
                                    onBalloonClick: n,
                                    onBalloonItemClick: i
                                });
                            case R.a.Inline:
                                return r.createElement(g, {
                                    videoGameChanges: t,
                                    trackingContext: this.props.trackingContext
                                });
                            case R.a.None:
                                return null;
                            default:
                                return e
                        }
                    }, t
                }(r.Component),
                V = Object(T.b)("PreviewCard", {
                    autoReportInteractive: !0
                })(A);
            n.d(t, !1, function() {
                return P
            }), n.d(t, "b", function() {
                return j
            }), n.d(t, !1, function() {
                return A
            }), n.d(t, "a", function() {
                return V
            })
        },
        H1ft: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            }), n.d(t, "b", function() {
                return o
            });
            var i, r = n("/7QA"),
                a = n("D7An");
            ! function(e) {
                e.None = "None", e.Inline = "Inline", e.Balloon = "Balloon"
            }(i || (i = {}));
            var o = function() {
                switch (r.p.experiments.getAssignment(a.b.Archer)) {
                    case "balloon":
                        return i.Balloon;
                    case "inline":
                        return i.Inline;
                    case "control":
                    default:
                        return i.None
                }
            }
        },
        H9ix: function(e, t, n) {},
        HXRw: function(e, t, n) {
            var i = {
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
                    end: 506
                }
            };
            i.loc.source = {
                body: '#import "twilight/pages/front/queries/clip-fragment.gql"\n#import "twilight/pages/front/queries/video-fragment.gql"\n#import "twilight/pages/front/queries/stream-fragment.gql"\n#import "twilight/pages/front/queries/game-fragment.gql"\nfragment shelf on Shelf {\nid\ntitle {\n...shelfTitle\n}\ncontent {\nedges {\n...shelfContentEdge\n}\n}\n}\nfragment shelfTitle on ShelfTitle {\nkey\ncontext {\n...game\n}\n}\nfragment shelfContentEdge on ShelfContentEdge {\ncursor\nnode {\n...shelfClip\n...video\n...stream\n...game\n}\ntrackingID\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var r = {};

            function a(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !r[t] && (r[t] = !0, !0)
                })
            }
            i.definitions = i.definitions.concat(a(n("NecO").definitions)), i.definitions = i.definitions.concat(a(n("yLKk").definitions)), i.definitions = i.definitions.concat(a(n("j48g").definitions)), i.definitions = i.definitions.concat(a(n("kEr+").definitions)), e.exports = i
        },
        HrX3: function(e, t, n) {},
        HzXE: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ChatRoomBanStatus"
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
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "channelID"
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
                                value: "chatRoomBanStatus"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "channelID"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "channelID"
                                    }
                                }
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "userID"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "targetUserID"
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
                                        value: "isPermanent"
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
                    end: 142
                }
            };
            n.loc.source = {
                body: "query ChatRoomBanStatus($targetUserID: ID! $channelID: ID!) {\nchatRoomBanStatus(channelID: $channelID userID: $targetUserID) {\nisPermanent\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        IOBI: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "UndoRecommendationFeedback"
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
                                    value: "UndoRecommendationFeedbackInput"
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
                                value: "undoRecommendationFeedback"
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
                                        value: "feedbackID"
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
                    end: 138
                }
            };
            n.loc.source = {
                body: "mutation UndoRecommendationFeedback($input: UndoRecommendationFeedbackInput!) {\nundoRecommendationFeedback(input: $input) {\nfeedbackID\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "Jxh/": function(e, t, n) {
            "use strict";

            function i(e) {
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
                return i
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
        MJbm: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("q1tI"),
                a = n("/7QA"),
                o = (n("efEE"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.logger = a.p.logger.withCategory("resize-detector"), t.onScroll = function() {
                            var e = t.container,
                                n = e.offsetWidth,
                                i = e.offsetHeight,
                                r = e.offsetLeft,
                                a = e.offsetTop;
                            t.logger.debug("Resize Detector -- onScroll"), n === t.width && i === t.height && a === t.top && r === t.left || (t.width = n, t.height = i, t.props.onResize(n, i, a, r)), t.reset()
                        }, t.setGrowDivRef = function(e) {
                            return t.growDiv = e
                        }, t.setGrowChildDivRef = function(e) {
                            return t.growChildDiv = e
                        }, t.setShrinkDivRef = function(e) {
                            return t.shrinkDiv = e
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return r.createElement("div", {
                            className: "resize-detector"
                        }, r.createElement("div", {
                            className: "resize-detector",
                            ref: this.setGrowDivRef
                        }, r.createElement("div", {
                            className: "resize-detector__grow",
                            ref: this.setGrowChildDivRef
                        })), r.createElement("div", {
                            className: "resize-detector",
                            ref: this.setShrinkDivRef
                        }, r.createElement("div", {
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
                }(r.Component));
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
            var i, r, a = n("/7QA"),
                o = n("wbMx"),
                s = n("2xye"),
                l = n("BQs+"),
                c = ((i = {})[o.b.Twitter] = "twitter", i[o.b.Reddit] = "reddit", i[o.b.VKontakte] = "vkontakte", i[o.b.Facebook] = "facebook", i[o.b.Copy] = "link", i[o.b.CopyInput] = "option_link", i[o.b.Download] = "download", i),
                d = {
                    MyClips: "MyClips",
                    ClipsOfMyChannel: "ClipsOfMyChannel"
                },
                u = {
                    Game: "TopClipsGame",
                    Channel: "TopClipsChannel"
                },
                p = ((r = {
                    MyClips: s.PageviewLocation.MyClipsManager,
                    ClipsOfMyChannel: s.PageviewLocation.ChannelClipsManager,
                    TopClipsGame: s.PageviewLocation.ClipsGame,
                    TopClipsChannel: s.PageviewLocation.ChannelClips
                })[s.PageviewLocation.ClipsEditing] = s.PageviewLocation.ClipsEditing, r[s.PageviewLocation.ClipsViewing] = s.PageviewLocation.ClipsViewing, r[s.PageviewLocation.ClipsWatchPage] = s.PageviewLocation.ClipsWatchPage, r),
                m = function(e, t, n, i, r) {
                    return function(o) {
                        a.p.tracking.track(s.SpadeEventType.VideoShare, {
                            vod_id: e,
                            vod_type: s.SpadeVideoBroadcastType.Clip,
                            share_platform: c[o],
                            location: p[r],
                            game: t,
                            channel_id: Number(n || 0),
                            channel: i,
                            live: null
                        })
                    }
                },
                h = function(e, t, n, i, r, o) {
                    return function() {
                        a.p.tracking.track(s.SpadeEventType.VideoShare, {
                            vod_id: e,
                            vod_type: s.SpadeVideoBroadcastType.Clip,
                            share_platform: l.a.Link,
                            location: p[r],
                            game: t,
                            channel_id: Number(n || 0),
                            channel: i,
                            live: null,
                            shared_item_url: o
                        })
                    }
                }
        },
        MPK0: function(e, t, n) {},
        McYG: function(e, t, n) {
            "use strict";

            function i(e, t) {
                return "https://www.twitch.tv/" + t + "/clip/" + e
            }
            n.d(t, "a", function() {
                return i
            })
        },
        MdYN: function(e, t, n) {
            "use strict";
            var i, r = n("/MKj"),
                a = n("fvjX"),
                o = n("aCAx"),
                s = n("mrSG"),
                l = n("TSYQ"),
                c = n("q1tI"),
                d = n("/7QA"),
                u = n("cZKs"),
                p = n("DMoW"),
                m = n("jsEL"),
                h = n("GnwI"),
                g = n("/HY+"),
                f = n("8Ad5"),
                v = n("u5aL"),
                k = n("uX80"),
                b = n("wbMx"),
                y = n("Jxh/"),
                C = n("kduP"),
                S = n("f00E"),
                w = n("vhpE"),
                T = n("bq0i"),
                _ = n("yR8l"),
                E = n("4rCz"),
                I = n("ndwU");
            ! function(e) {
                e[e.View = 0] = "View", e[e.Report = 1] = "Report", e[e.Delete = 2] = "Delete", e[e.DeleteAll = 3] = "DeleteAll", e[e.Ban = 4] = "Ban", e[e.Timeout = 5] = "Timeout"
            }(i || (i = {}));
            var R = n("Ue10"),
                O = n("WsU7"),
                D = [i.Delete, i.DeleteAll],
                N = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.clipsMaintenance = Object(I.a)(), n.renderMenuItem = function(e) {
                            var t = n.menuData.get(e);
                            return e && t ? c.createElement(R.Ua, {
                                key: t.display,
                                onClick: t.destinationHandler,
                                "data-a-target": "clip-moderation-button-" + t.display,
                                disabled: n.clipsMaintenance && D.includes(e)
                            }, c.createElement(R.Xa, {
                                padding: {
                                    x: 1,
                                    y: .5
                                }
                            }, t.display)) : null
                        }, n.menuData = new Map([
                            [i.Report, {
                                display: Object(E.d)("Report", "ModerationMenu"),
                                destinationHandler: function() {
                                    return n.props.updateModalViewState(i.Report)
                                }
                            }],
                            [i.Delete, {
                                display: Object(E.d)("Delete", "ModerationMenu"),
                                destinationHandler: function() {
                                    return n.props.updateModalViewState(i.Delete)
                                }
                            }],
                            [i.DeleteAll, {
                                display: Object(E.d)("Delete All Clips from Video", "ModerationMenu"),
                                destinationHandler: function() {
                                    return n.props.updateModalViewState(i.DeleteAll)
                                }
                            }],
                            [i.Ban, {
                                display: Object(E.d)("Ban User", "ModerationMenu"),
                                destinationHandler: function() {
                                    return n.props.updateModalViewState(i.Ban)
                                }
                            }],
                            [i.Timeout, {
                                display: Object(E.d)("Timeout User (24 hr)", "ModerationMenu"),
                                destinationHandler: function() {
                                    return n.props.updateModalViewState(i.Timeout)
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
                            r = !!t.curator && e.currentUser.id === t.curator.id,
                            a = !!t.broadcaster && e.currentUser.id === t.broadcaster.id,
                            o = r || a || n,
                            s = a || n,
                            l = [i.Report];
                        return o && l.push(i.Delete), s && (l.push(i.DeleteAll), t.curator && t.broadcaster && (l.push(i.Ban), l.push(i.Timeout))), c.createElement(R.Xa, {
                            className: "moderation-menu"
                        }, c.createElement(T.a, null, c.createElement(R.z, {
                            type: R.F.Hollow,
                            icon: R.tb.More,
                            ariaLabel: Object(E.d)("More Options", "ModerationMenu"),
                            "data-a-target": "moderation-menu-button"
                        }), c.createElement(R.u, {
                            direction: R.v.TopRight
                        }, c.createElement(R.Xa, {
                            padding: {
                                y: .5
                            }
                        }, this.moderationMenuRender(l)))))
                    }, t.prototype.moderationMenuRender = function(e) {
                        var t = this;
                        return e.map(function(e) {
                            return t.renderMenuItem(e)
                        })
                    }, t = s.__decorate([Object(_.a)(O), Object(h.b)("ModerationMenu")], t)
                }(c.Component),
                x = n("MLDe"),
                M = (n("n/Dx"), 2e3),
                P = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isShowingBalloon: !1,
                            playerRefID: Object(S.a)()
                        }, t.timeoutID = null, t.copyClipURL = function() {
                            var e;
                            try {
                                e = Object(y.a)(t.props.clip.url)
                            } catch (e) {
                                return void d.k.warn("Failed to copy", e)
                            }
                            e && (t.setState({
                                isShowingBalloon: !0
                            }), t.timeoutID = setTimeout(function() {
                                t.setState({
                                    isShowingBalloon: !1
                                })
                            }, M), Object(x.c)(t.props.clip.id, t.props.clip.game && t.props.clip.game.name, t.props.clip.broadcaster && t.props.clip.broadcaster.id, t.props.clip.broadcaster && t.props.clip.broadcaster.login, t.props.pageType)(b.b.CopyInput))
                        }, t.dismissBalloon = function() {
                            t.setState({
                                isShowingBalloon: !1
                            }), t.timeoutID && (clearTimeout(t.timeoutID), t.timeoutID = null)
                        }, t
                    }
                    return s.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive(), this.props.reportPlayerInstanceStarted(this.state.playerRefID)
                    }, t.prototype.render = function() {
                        var e, t = this.props.clip.broadcaster && c.createElement(R.U, {
                            to: "/" + this.props.clip.broadcaster.login,
                            onClick: this.props.closeModal,
                            "data-a-target": "clip-modal-broadcaster-link"
                        }, this.props.clip.broadcaster.login);
                        return e = this.props.clip.game && t ? Object(d.d)("{broadcaster} playing {game}", {
                            broadcaster: t,
                            game: c.createElement(R.U, {
                                to: "" + Object(C.c)(this.props.clip.game.name),
                                onClick: this.props.closeModal,
                                "data-a-target": "clip-modal-game-link"
                            }, this.props.clip.game.name)
                        }, "ClipsViewModalContent") : t, c.createElement(R.Eb, {
                            className: "clips-view-modal-content",
                            background: R.r.Base
                        }, c.createElement(R.Xa, {
                            padding: {
                                bottom: 2
                            }
                        }, c.createElement(R.o, {
                            ratio: R.p.Aspect16x9
                        }, c.createElement("iframe", {
                            src: this.props.clip.embedURL,
                            width: "100%",
                            height: "100%",
                            allowFullScreen: !0
                        }))), c.createElement(R.Xa, {
                            padding: {
                                x: 2,
                                bottom: 2
                            }
                        }, c.createElement(R.Xa, {
                            display: R.X.Flex,
                            flexWrap: R.Ba.NoWrap
                        }, c.createElement(R.Xa, {
                            flexGrow: 1,
                            margin: {
                                right: 1
                            }
                        }, c.createElement(v.a, {
                            onClickOut: this.dismissBalloon
                        }, c.createElement(k.a, {
                            text: this.props.clip.url,
                            icon: !0,
                            iconAsset: R.tb.Link,
                            onSelection: this.copyClipURL,
                            "data-a-target": "clip-share-input"
                        }, c.createElement(R.u, {
                            show: this.state.isShowingBalloon,
                            direction: R.v.TopRight
                        }, c.createElement(R.Ua, {
                            onClick: this.dismissBalloon
                        }, c.createElement(R.Xa, {
                            padding: 1
                        }, c.createElement(R.W, {
                            bold: !0
                        }, Object(d.d)("Link copied to clipboard", "ClipsViewModalContent")))))))), c.createElement(w.a, {
                            clip: this.props.clip,
                            pageType: this.props.pageType
                        }), c.createElement(N, {
                            clip: this.props.clip,
                            updateModalViewState: this.props.updateModalViewState
                        }))), c.createElement(R.Xa, {
                            padding: {
                                x: 2,
                                bottom: 2
                            },
                            display: R.X.Flex,
                            flexWrap: R.Ba.NoWrap,
                            justifyContent: R.Wa.Between,
                            fullWidth: !0,
                            overflow: R.cb.Hidden
                        }, c.createElement(R.Xa, {
                            flexGrow: 1,
                            ellipsis: !0
                        }, c.createElement(R.Pa, {
                            ellipsis: !0
                        }, c.createElement(R.Eb, {
                            display: R.X.Flex,
                            fontSize: R.Ca.Size5
                        }, c.createElement(R.Xa, {
                            ellipsis: !0
                        }, this.props.clip.title), c.createElement(R.Xa, {
                            flexShrink: 0
                        }, c.createElement(R.W, {
                            type: R.Vb.Span,
                            color: R.O.Alt2
                        }, " • ", Object(d.d)("{created, date, medium}", {
                            created: new Date(this.props.clip.createdAt)
                        }, "ClipsViewModalContent"))))), c.createElement(R.Pa, {
                            ellipsis: !0
                        }, c.createElement(R.Eb, {
                            color: R.O.Alt2
                        }, e, e && !!this.props.clip.curator && c.createElement("span", null, " • "), this.props.clip.curator && Object(d.d)("Clipped by {curator}", {
                            curator: c.createElement(R.U, {
                                to: "/" + this.props.clip.curator.login,
                                onClick: this.props.closeModal,
                                "data-a-target": "clip-modal-curator-link"
                            }, this.props.clip.curator.login)
                        }, "ClipsViewModalContent")))), c.createElement(R.Eb, {
                            display: R.X.Flex,
                            padding: {
                                bottom: 2,
                                left: 2
                            },
                            fontSize: R.Ca.Size5,
                            color: R.O.Alt2,
                            flexShrink: 0
                        }, c.createElement(R.Xa, {
                            margin: {
                                right: .5
                            },
                            alignItems: R.f.Center,
                            display: R.X.Flex
                        }, c.createElement(R.sb, {
                            asset: R.tb.GlyphViews
                        })), Object(d.d)("{viewCount, number} views", {
                            viewCount: this.props.clip.viewCount
                        }, "ClipsViewModalContent"))))
                    }, t = s.__decorate([Object(h.b)("ClipsViewModalContent")], t)
                }(c.Component),
                j = n("S1Za");
            var F = Object(r.connect)(null, function(e) {
                    return Object(a.bindActionCreators)({
                        reportPlayerInstanceStarted: j.b
                    }, e)
                })(P),
                L = (n("9a8W"), function(e) {
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
                        this.props.clipIndex > 0 && (e = c.createElement(R.Xa, {
                            position: R.jb.Absolute,
                            display: R.X.Flex,
                            alignItems: R.f.Stretch,
                            className: "clip-carousel-button clip-carousel-button--left"
                        }, c.createElement(R.A, {
                            ariaLabel: Object(d.d)("Previous clip", "ClipsViewModalNavigation"),
                            type: R.C.Primary,
                            icon: R.tb.AngleLeft,
                            onClick: this.updateClipBackward,
                            "data-test-selector": "clips-view-modal-navigation-back"
                        })));
                        var n = this.props.getClips();
                        return this.props.loadMoreClips && n.length - this.props.clipIndex < 4 && this.props.loadMoreClips(), this.props.clipIndex < n.length - 1 && (t = c.createElement(R.Xa, {
                            position: R.jb.Absolute,
                            display: R.X.Flex,
                            alignItems: R.f.Stretch,
                            className: "clip-carousel-button clip-carousel-button--right"
                        }, c.createElement(R.A, {
                            ariaLabel: Object(d.d)("Next clip", "ClipsViewModalNavigation"),
                            type: R.C.Primary,
                            icon: R.tb.AngleRight,
                            onClick: this.updateClipForward,
                            "data-test-selector": "clips-view-modal-navigation-forward"
                        }))), c.createElement(R.Xa, {
                            className: "clips-view-modal-navigation"
                        }, e, c.createElement(F, {
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
                        n.length - t < 4 && this.props.loadMoreClips && this.props.loadMoreClips(), t < n.length && this.props.showModal(B, {
                            getClips: this.props.getClips,
                            clip: n[t],
                            clipIndex: t,
                            loadMoreClips: this.props.loadMoreClips,
                            pageType: this.props.pageType
                        })
                    }, t
                }(c.Component)),
                U = Object(h.b)("ClipsViewModalNavigation")(L);
            var A = Object(r.connect)(null, function(e) {
                    return Object(a.bindActionCreators)({
                        showModal: o.d,
                        closeModal: o.c
                    }, e)
                })(U),
                V = (n("ygyh"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            modalView: i.View
                        }, t.setToViewState = function() {
                            t.updateClipsModalViewState(i.View)
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
                            case i.Report:
                                t = c.createElement(g.a, {
                                    title: Object(d.d)("Report this Clip", "ClipsViewModal"),
                                    reportContext: {
                                        contentType: p.N.CLIP_REPORT,
                                        contentID: this.props.clip.slug,
                                        targetUserID: this.props.clip.broadcaster && this.props.clip.broadcaster.id || "",
                                        additionalTrackingID: this.props.clip.curator && this.props.clip.curator.id || ""
                                    },
                                    onClose: this.setToViewState
                                });
                                break;
                            case i.Delete:
                                t = c.createElement(m.d, {
                                    slug: this.props.clip.slug,
                                    onClose: this.setToViewState
                                });
                                break;
                            case i.DeleteAll:
                                t = c.createElement(m.e, {
                                    slug: this.props.clip.slug,
                                    onClose: this.setToViewState
                                });
                                break;
                            case i.Ban:
                            case i.Timeout:
                                if (this.props.clip.curator && this.props.clip.broadcaster) {
                                    t = c.createElement(m.b, {
                                        targetUser: {
                                            displayName: this.props.clip.curator.displayName || "",
                                            login: this.props.clip.curator.login || ""
                                        },
                                        broadcasterID: this.props.clip.broadcaster.id || "",
                                        isTemporary: this.state.modalView === i.Timeout,
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
                        return c.createElement(R.Xa, {
                            className: l(n)
                        }, t, c.createElement(u.a, {
                            closeOnBackdropClick: !0,
                            closeOnPageNavigation: !0
                        }))
                    }, t
                }(c.Component)),
                W = Object(h.b)("ClipsViewModal")(V);
            var B = Object(r.connect)(null, function(e) {
                return Object(a.bindActionCreators)({
                    showModal: o.d
                }, e)
            })(W);
            n.d(t, "a", function() {
                return B
            }), n.d(t, !1, function() {})
        },
        NecO: function(e, t, n) {
            var i = {
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
                    end: 371
                }
            };
            i.loc.source = {
                body: '#import "twilight/pages/front/queries/user-fragment.gql"\n#import "twilight/pages/front/queries/game-fragment.gql"\nfragment shelfClip on Clip {\nid\nslug\nurl\nembedURL\nclipTitle: title\nclipViewCount: viewCount\ncurator {\n...user\n}\ngame {\n...game\n}\nbroadcaster {\n...user\n}\nthumbnailURL(width:480 height:272)\nclipCreatedAt: createdAt\ndurationSeconds\nlanguage\nchampBadge {\nid\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var r = {};

            function a(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !r[t] && (r[t] = !0, !0)
                })
            }
            i.definitions = i.definitions.concat(a(n("P8NS").definitions)), i.definitions = i.definitions.concat(a(n("kEr+").definitions)), e.exports = i
        },
        "OCR+": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return l
            });
            var i, r = n("/7QA"),
                a = n("D7An"),
                o = n("kRBY"),
                s = "gladiator_staff_alpha";

            function l() {
                var e = null;
                return function() {
                    if (null === e) {
                        var t = Object(o.e)(r.p.store.getState()),
                            n = t && t.roles && t.roles.isStaff;
                        e = !(!n || !r.b.get(s, !1)) || r.p.experiments.getAssignment(a.b.DiscoGladiator) === i.Variant1
                    }
                    return e
                }
            }! function(e) {
                e.Control = "control", e.Variant1 = "variant1"
            }(i || (i = {}))
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
                return i
            }), n.d(t, "b", function() {
                return r
            });
            var i, r, a = "carousel-player__main-description",
                o = "carousel-player-left-button",
                s = "carousel-player-right-button";
            ! function(e) {
                e[e.Horizontal = 1] = "Horizontal", e[e.Vertical = 2] = "Vertical"
            }(i || (i = {})),
            function(e) {
                e[e.Stream = 1] = "Stream", e[e.Vod = 2] = "Vod"
            }(r || (r = {}))
        },
        Oy4H: function(e, t, n) {},
        P8NS: function(e, t) {
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
        "Pub/": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            });
            var i = n("HzXE");

            function r(e, t, n) {
                try {
                    return e.readQuery({
                        query: i,
                        variables: {
                            channelID: t,
                            targetUserID: n
                        }
                    })
                } catch (e) {}
            }
        },
        RQ6e: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("TSYQ"),
                a = n("q1tI"),
                o = n("/7QA"),
                s = n("fvjX"),
                l = n("yR8l"),
                c = n("GnwI");
            var d = n("Ue10"),
                u = n("gIsd"),
                p = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleChange = function(e) {
                            t.props.onChange && t.props.onChange(e.target.value)
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidUpdate = function() {
                        this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = null,
                            t = Object(o.d)("Select One...", "ReportUserModal");
                        this.props.data.loading ? e = [a.createElement("option", {
                            key: "Loading"
                        }, Object(o.d)("Loading...", "ReportReasonsSelect"))] : e = (this.props.data.reportReasons || [{
                            id: "other",
                            text: Object(o.d)("Other Terms of Service Violation", "ReportUserModal")
                        }]).map(function(e) {
                            return a.createElement("option", {
                                key: e.id,
                                value: e.id
                            }, e.text)
                        });
                        return a.createElement(d.Xa, {
                            margin: {
                                bottom: 2
                            }
                        }, a.createElement(d.Ea, {
                            id: "reporting-modal__select",
                            label: Object(o.d)("Select Reason (required)", "ReportUserModal")
                        }, a.createElement(d.zb, {
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
                m = Object(s.compose)(Object(l.a)(u, {
                    options: function(e) {
                        return {
                            variables: {
                                content: e.reportContentType
                            }
                        }
                    }
                }), Object(c.b)("ReportReasonSelect"))(p);
            n("y4Ne");
            n.d(t, "a", function() {
                return h
            }), n.d(t, "b", function() {
                return g
            });
            var h;
            ! function(e) {
                e[e.Unsubmitted = 0] = "Unsubmitted", e[e.Success = 1] = "Success", e[e.FormError = 2] = "FormError", e[e.MutationError = 3] = "MutationError", e[e.UserError = 4] = "UserError"
            }(h || (h = {}));
            var g = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        description: "",
                        reason: null
                    }, t.headerMessage = Object(o.d)("Tell us your concern about this content so that we can review it to determine whether there has been a violation of the {tosLink}. {br} (Abuse of this feature is a violation of the terms of service)", {
                        br: a.createElement("br", null),
                        tosLink: a.createElement("a", {
                            href: "https://www.twitch.tv/p/terms-of-service",
                            target: "_blank"
                        }, Object(o.d)("terms of service", "ReportUser"))
                    }, "ReportUser"), t.handleSubmit = function(e) {
                        e.preventDefault(), t.state.reason && t.state.description.length > 0 ? t.props.onSubmit(t.state.reason || "", t.state.description) : t.props.onError(h.FormError)
                    }, t.handleTextAreaChange = function(e) {
                        t.setState({
                            description: e.target.value
                        })
                    }, t.handleReasonChange = function(e) {
                        t.setState({
                            reason: e
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(d.Xa, {
                        display: d.X.Flex,
                        flexDirection: d.Aa.Column,
                        alignItems: d.f.Center,
                        justifyContent: d.Wa.Center
                    }, this.renderStatusMessage(), this.renderBody())
                }, t.prototype.renderBody = function() {
                    return this.props.submitStatus === h.Success ? a.createElement("div", null, a.createElement(d.z, {
                        onClick: this.props.onClose
                    }, a.createElement(d.Xa, {
                        padding: {
                            x: 2
                        }
                    }, Object(o.d)("Close", "ReportUser")))) : a.createElement("div", null, a.createElement(d.Xa, {
                        "data-test-selector": "reporting.title",
                        margin: {
                            bottom: 1
                        },
                        "data-a-target": "reporting-channel-name"
                    }, a.createElement(d.W, {
                        type: d.Vb.H4
                    }, this.props.title), a.createElement(d.Eb, {
                        color: d.O.Alt2,
                        margin: {
                            top: 1
                        }
                    }, this.headerMessage)), a.createElement("form", null, a.createElement(d.Eb, {
                        borderTop: !0,
                        borderBottom: !0,
                        margin: {
                            y: 2
                        },
                        padding: {
                            y: 2
                        }
                    }, a.createElement(m, {
                        reportContentType: this.props.reportContentType,
                        onChange: this.handleReasonChange
                    }), a.createElement(d.Ea, {
                        id: "reporting__text-area",
                        label: Object(o.d)("Description (required)", "ReportUser")
                    }, a.createElement(d.Sb, {
                        defaultValue: this.props.defaultDescription,
                        onChange: this.handleTextAreaChange
                    }))), a.createElement(d.Eb, {
                        display: d.X.Flex,
                        justifyContent: d.Wa.Center
                    }, a.createElement(d.z, {
                        onClick: this.handleSubmit
                    }, a.createElement(d.Xa, {
                        padding: {
                            x: 2
                        }
                    }, Object(o.d)("Send", "ReportUser"))))))
                }, t.prototype.renderStatusMessage = function() {
                    var e = null;
                    switch (this.props.submitStatus) {
                        case h.FormError:
                            e = Object(o.d)("Reason and Description are required.", "ReportUser");
                            break;
                        case h.MutationError:
                            e = Object(o.d)("Sorry, a network error occurred when submitting your report. Please try again later.", "ReportUser");
                            break;
                        case h.Success:
                            e = Object(o.d)("Thank you for your report.", "ReportUser");
                            break;
                        case h.UserError:
                            e = Object(o.d)("This account could not be reported. It may have already been suspended, or the owner may have deleted it.", "ReportUser");
                            break;
                        default:
                            return null
                    }
                    var t = r({
                        "reporting__error-container": this.props.submitStatus !== h.Success,
                        "reporting__success-container": this.props.submitStatus === h.Success
                    });
                    return a.createElement(d.Eb, {
                        className: t,
                        fullWidth: this.props.submitStatus !== h.Success,
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
            var i = n("86FS");
            n.d(t, "VideoPreviewCard", function() {
                return i.a
            });
            n("0T/G");
            var r = n("0Rl0");
            n.d(t, "VideoPreviewCardPlaceholder", function() {
                return r.a
            })
        },
        ReKM: function(e, t, n) {},
        SWMh: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            });
            var i = n("mrSG"),
                r = n("b6Yk"),
                a = function(e, t, n) {
                    return i.__awaiter(void 0, void 0, Promise, function() {
                        var a, o;
                        return i.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    a = null, i.label = 1;
                                case 1:
                                    return i.trys.push([1, 3, , 4]), [4, r.a.get("/v5/videos/" + e + "/markers")];
                                case 2:
                                    return (o = i.sent()).body && o.body.markers.game_changes && (a = o.body.markers.game_changes.sort(function(e, t) {
                                        return e.time - t.time
                                    }).map(function(e, n, i) {
                                        var r = i[n + 1];
                                        return {
                                            duration: r ? r.time - e.time : t - e.time,
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
                                    return i.sent(), [3, 4];
                                case 4:
                                    return [2, a || []]
                            }
                        })
                    })
                }
        },
        TDc0: function(e, t, n) {
            "use strict";
            var i;
            n.d(t, "a", function() {
                    return r
                }), n.d(t, "b", function() {
                    return a
                }),
                function(e) {
                    e.NoSkip = "no_skip"
                }(i || (i = {}));
            var r = function(e) {
                    return e === i.NoSkip
                },
                a = function(e) {
                    return e.getTime() >= o().getTime()
                },
                o = function() {
                    return new Date((new Date).getTime() - 12096e5)
                }
        },
        TVuH: function(e, t, n) {},
        Uive: function(e, t, n) {
            "use strict";
            var i = n("/MKj"),
                r = n("mrSG"),
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
                        return n.logger = o.k.withCategory("ad-slot"), n.createSlot = function(e) {
                            return r.__awaiter(n, void 0, void 0, function() {
                                var t;
                                return r.__generator(this, function(n) {
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
                                var i;
                                if (n.props.slotID === c.b.directory.banner) return void((i = n.slotRef.querySelector(p)) && 1 !== i.clientWidth && n.setState({
                                    shouldDisplay: !0
                                }, function() {
                                    return n.slotRendered(e.slot)
                                }));
                                if (n.props.slotID === c.b.directory.rectangle) return void((i = n.slotRef.querySelector(m)) && 1 !== i.clientWidth && n.setState({
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
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        c.g.addListener(c.f, this.onSlotRenderEnd), this.shouldCreateSlot(this.props) ? (this.logger.debug("Consent ready. Tracking is set. Creating slot (componentDidMount)", this.props.slotID), this.createSlot(this.props)) : this.logger.debug("Consent not ready or Tracking is not set. Skipping slot creation (componentDidMount)", this.props.slotID)
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        this.state.slotCreated || (!this.shouldCreateSlot(e) || e.gdpr.status === this.props.gdpr.status && e.trackingSet === this.props.trackingSet ? this.logger.debug("Tracking is not set. Skipping slot creation (componentWillReceiveProps)", this.props.slotID) : (this.logger.debug("Tracking is set. Creating slot (componentWillReceiveProps)", this.props.slotID), this.createSlot(e)))
                    }, t.prototype.componentWillUnmount = function() {
                        this.logger.debug("Destroying Slot (componentWillUnmount)", this.props.slotID), c.g.removeListener(c.f, this.onSlotRenderEnd), this.state.slot && l.a.destroySlot(this.state.slot)
                    }, t.prototype.shouldComponentUpdate = function(e, t) {
                        return t.shouldDisplay !== this.state.shouldDisplay
                    }, t.prototype.render = function() {
                        var e = r.__assign({}, this.props.injectStyles);
                        return this.state.shouldDisplay || (e.display = "none"), a.createElement("div", r.__assign({
                            style: e,
                            id: this.props.slotID,
                            ref: this.setRef
                        }, Object(s.a)(this.props)))
                    }, t
                }(a.Component),
                g = Object(u.a)(d.c.Amazon)(h);
            var f = Object(i.connect)(function(e) {
                return {
                    trackingSet: e.ads.trackingSet
                }
            })(g);
            n.d(t, "a", function() {
                return f
            })
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
            var i = n("/MKj"),
                r = n("kRBY"),
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
                        return n.logger = l.k.withCategory("role-restricted"), n.state = {
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
            }), Object(d.b)("RoleRestricted"))(p);
            var h = Object(i.connect)(function(e) {
                return {
                    isLoggedIn: Object(r.f)(e)
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
        X2bz: function(e, t, n) {},
        X7Ac: function(e, t, n) {
            "use strict";
            var i = n("wbMx");
            n.d(t, "a", function() {
                return i.a
            }), n.d(t, "b", function() {
                return i.b
            })
        },
        XA5B: function(e, t, n) {},
        ZbA5: function(e, t, n) {
            "use strict";
            var i, r, a, o, s = n("mrSG"),
                l = n("TSYQ"),
                c = n("q1tI"),
                d = n("/7QA"),
                u = n("oB8h"),
                p = n("Ue10");
            n("kVMo");
            ! function(e) {
                e.HostingDot = "stream-type-indicator__hosting-dot"
            }(o || (o = {}));
            var m = ((i = {})[u.a.Live] = "stream-type-indicator--live", i[u.a.Premiere] = "stream-type-indicator--premiere", i[u.a.Rerun] = "stream-type-indicator--rerun", i[u.a.WatchParty] = "stream-type-indicator--rerun", i),
                h = ((r = {})[u.a.Premiere] = p.tb.VideoPremiere, r[u.a.Rerun] = p.tb.VideoRerun, r[u.a.WatchParty] = p.tb.VideoRerun, r),
                g = ((a = {})[u.a.Premiere] = p.ub.Live, a[u.a.Rerun] = p.ub.Inherit, a[u.a.WatchParty] = p.ub.Inherit, a),
                f = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return s.__extends(t, e), t.prototype.render = function() {
                        return c.createElement(p.Eb, {
                            className: this.getClassNames(),
                            color: p.O.Overlay,
                            background: p.r.Overlay,
                            padding: {
                                x: .5
                            },
                            borderRadius: p.x.Small,
                            display: p.X.Flex
                        }, c.createElement(p.Xa, {
                            display: p.X.Flex,
                            alignItems: p.f.Center,
                            margin: {
                                right: .5
                            }
                        }, this.getIcon()), c.createElement(p.W, {
                            type: p.Vb.Span
                        }, this.getLabel()))
                    }, t.prototype.getClassNames = function() {
                        var e = {
                            "stream-type-indicator": !0
                        };
                        return e[m[this.props.type]] = !0, l(e)
                    }, t.prototype.getIcon = function() {
                        return this.props.hosting ? c.createElement(p.Eb, {
                            borderRadius: p.x.Rounded,
                            className: "stream-type-indicator__hosting-dot",
                            "data-test-selector": o.HostingDot
                        }) : this.props.type === u.a.Live ? c.createElement(p.Xa, {
                            className: "stream-type-indicator__live-wrapper",
                            display: p.X.Flex,
                            alignItems: p.f.Center
                        }, c.createElement(p.K, {
                            status: p.M.Live,
                            size: p.L.Small
                        })) : c.createElement(p.sb, {
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
        "a+Ty": function(e, t, n) {},
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
                            return i.__generator(this, function(l) {
                                switch (l.label) {
                                    case 0:
                                        return t = this.constructOptions(t, n), r = t.headers ? t.headers["Content-Type"] : void 0, a = this.serialize(t.body, r), o = i.__assign({}, t, {
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
                return r
            });
            var i = n("o4DC");

            function r(e) {
                return e && Object(i.c)(e) || ""
            }
        },
        cRsL: function(e, t, n) {},
        dAHa: function(e, t, n) {
            "use strict";
            var i, r, a = n("mrSG"),
                o = n("q1tI"),
                s = n("/MKj"),
                l = n("fvjX"),
                c = n("/7QA"),
                d = n("yR8l"),
                u = n("BhFH"),
                p = n("iS14"),
                m = n("geRD"),
                h = n("f00E"),
                g = n("D7An"),
                f = n("DMoW"),
                v = n("2xye"),
                k = n("GnwI"),
                b = n("QVaV"),
                y = n("Ue10"),
                C = (n("MPK0"), "report-wizard-block"),
                S = "report-wizard-unblock",
                w = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            userBlocked: t.props.userBlocked || !1
                        }, t.renderBlock = function() {
                            return o.createElement(y.U, {
                                hoverUnderlineNone: !0,
                                onClick: t.handleBlock,
                                "data-test-selector": C
                            }, o.createElement(y.Xa, {
                                display: y.X.Flex,
                                alignItems: y.f.Center
                            }, o.createElement(y.sb, {
                                type: y.ub.Brand,
                                asset: y.tb.Ban
                            }), o.createElement(y.Xa, {
                                margin: {
                                    left: .5
                                }
                            }, Object(c.d)("Block {user}", {
                                user: t.displayName()
                            }, "ReportWizardBlockActions"))))
                        }, t.renderUnblock = function() {
                            return o.createElement(y.Xa, {
                                className: "reporting-wizard__block-actions",
                                display: y.X.Flex,
                                alignItems: y.f.Center
                            }, o.createElement(y.sb, {
                                type: y.ub.Success,
                                asset: y.tb.FollowCheck
                            }), o.createElement(y.Xa, {
                                margin: {
                                    right: 1
                                }
                            }, o.createElement(y.W, {
                                className: "block-user__success",
                                type: y.Vb.Span
                            }, Object(c.d)("{user} blocked", {
                                user: t.displayName()
                            }, "ReportWizardBlockActions"))), o.createElement(y.U, {
                                hoverUnderlineNone: !0,
                                onClick: t.handleUnblock,
                                "data-test-selector": S
                            }, o.createElement(y.Xa, {
                                margin: {
                                    left: .5
                                }
                            }, Object(c.d)("Unblock", "ReportWizardBlockActions"))))
                        }, t.handleBlock = function() {
                            return a.__awaiter(t, void 0, void 0, function() {
                                return a.__generator(this, function(e) {
                                    return this.props.onBlock(), this.setState({
                                        userBlocked: !0
                                    }), [2]
                                })
                            })
                        }, t.handleUnblock = function() {
                            t.props.onUnblock(), t.setState({
                                userBlocked: !1
                            })
                        }, t.displayName = function() {
                            var e = t.props.targetUser.displayName,
                                n = t.props.targetUser.login;
                            return e || (n || "")
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.state.userBlocked ? this.renderUnblock() : this.renderBlock(),
                            t = Object(b.a)(this.props.targetUser.login, this.props.targetUser.displayName, !0);
                        return o.createElement(y.Eb, {
                            borderTop: !0,
                            padding: {
                                y: 1
                            },
                            margin: {
                                top: 1
                            }
                        }, o.createElement(y.Xa, null, Object(c.d)("Would you like to block {user}?", {
                            user: t
                        }, "ReportWizardBlockActions")), o.createElement(y.Eb, {
                            color: y.O.Alt2,
                            margin: {
                                y: 1
                            }
                        }, o.createElement(y.ec, {
                            baseFontSize: y.Ca.Size6
                        }, o.createElement("p", null, Object(c.d)("Blocking {user} will:", {
                            user: t
                        }, "ReportWizardBlockActions")), o.createElement("ul", null, o.createElement("li", null, Object(c.d)("Prevent them from sending you whispers", "ReportWizardBlockActions")), o.createElement("li", null, Object(c.d)("Prevent them from hosting you", "ReportWizardBlockActions")), o.createElement("li", null, Object(c.d)("Prevent them from adding you as a friend", "ReportWizardBlockActions")), o.createElement("li", null, Object(c.d)("Filter their messages out of chats you don’t moderate", "ReportWizardBlockActions"))))), o.createElement(y.Xa, {
                            margin: {
                                top: 1
                            }
                        }, e))
                    }, t
                }(o.Component);
            ! function(e) {
                e.BitsViolation = "bits_violation", e.ChatBanEvasion = "chat_ban_evasion", e.Cheating = "cheating", e.Gore = "gore", e.Harassment = "harassment", e.Harm = "harm", e.HatefulConduct = "hateful_conduct", e.Impersonation = "impersonation", e.Miscategorized = "miscategorized", e.OffensiveUsername = "offensive_username", e.Other = "other", e.Porn = "porn", e.Prohibited = "prohibited", e.SelfHarm = "selfharm", e.SexualContent = "sexual_content", e.SexualViolence = "sexual_violence", e.Spam = "spam", e.TosBanEvasion = "tos_ban_evasion", e.Underaged = "underaged"
            }(i || (i = {})),
            function(e) {
                e.Link = "link", e.MultipleChoice = "multiple choice", e.Text = "text", e.Textarea = "textarea"
            }(r || (r = {}));
            var T, _ = {
                    generalFilter: function() {
                        return Object(c.d)("I don't think their content or behavior is allowed on Twitch", "ReportModalWizard")
                    },
                    me: function() {
                        return Object(c.d)("Me", "ReportModalWizard")
                    },
                    someoneElse: function() {
                        return Object(c.d)("Someone else", "ReportModalWizard")
                    },
                    sexuallyCoercive: function() {
                        return Object(c.d)("acting in a sexually coercive or inappropriate way", "ReportModalWizard")
                    },
                    abusiveViolence: function() {
                        return Object(c.d)("They're threatening violence or physical harm", "ReportModalWizard")
                    },
                    commitingViolence: function() {
                        return Object(c.d)("They're committing acts of violence or physical harm", "ReportModalWizard")
                    },
                    threatening: function() {
                        return Object(c.d)("threatening, harming, or endangering someone", "ReportModalWizard")
                    },
                    abusive: function() {
                        return Object(c.d)("being hateful, harassing, or abusive", "ReportModalWizard")
                    }
                },
                E = {
                    input_description: {
                        getTitle: function() {
                            return Object(c.d)("Could you provide more detail about this issue? You may include links to videos, clips, and content outside Twitch.", "ReportModalWizard")
                        },
                        value: "description",
                        type: r.Textarea,
                        required: !0
                    },
                    input_link: {
                        getTitle: function() {
                            return Object(c.d)("If possible, please provide a link to show us where the issue occurred. Links that do not lead to the original source of the content may not be usable as evidence.", "ReportModalWizard")
                        },
                        rows: 2,
                        value: "external links",
                        type: r.Textarea
                    },
                    input_usernames: {
                        getTitle: function() {
                            return Object(c.d)("If you know the usernames of any other Twitch accounts that may be owned by this person, please list them in this space.", "ReportModalWizard")
                        },
                        value: "other usernames",
                        rows: 2,
                        type: r.Textarea
                    },
                    input_connection: {
                        getTitle: function() {
                            return Object(c.d)("Please describe how you connected the offsite content to this Twitch account.", "ReportModalWizard")
                        },
                        value: "offsite content connection",
                        type: r.Textarea
                    },
                    input_comments: {
                        getTitle: function() {
                            return Object(c.d)("If you have any other comments you would like to add, please do so here.", "ReportModalWizard")
                        },
                        value: "comments",
                        type: r.Textarea
                    },
                    input_identifyOwner: {
                        getTitle: function() {
                            return Object(c.d)("Please describe how you identified this person as the owner of this Twitch account.", "ReportModalWizard")
                        },
                        rows: 2,
                        value: "connect account owner",
                        type: r.Textarea
                    },
                    endBlurb_socialmedia: {
                        getTitle: function() {
                            return Object(c.d)("Please submit a report to the site or service where the incident occurred as well if you have not already done so.", "ReportModalWizard")
                        },
                        type: r.Text
                    },
                    endBlurb_threat: {
                        getTitle: function() {
                            return Object(c.d)("If you feel you are in immediate danger, please contact your local law enforcement.", "ReportModalWizard")
                        },
                        type: r.Text
                    },
                    endLink_selfharm: {
                        getTitle: function() {
                            return Object(c.d)("Learn more about mental health support", "ReportModalWizard")
                        },
                        value: "https://help.twitch.tv/customer/en/portal/articles/2904486-twitch-cares-mental-health-support-information",
                        type: r.Link
                    },
                    endLink_DMCA: {
                        getTitle: function() {
                            return Object(c.d)("View our DMCA Notification Guidelines", "ReportModalWizard")
                        },
                        value: "https://www.twitch.tv/p/legal/dmca-guidelines/",
                        type: r.Link
                    },
                    endLink_trademark: {
                        getTitle: function() {
                            return Object(c.d)("View our Trademark Policy", "ReportModalWizard")
                        },
                        value: "https://www.twitch.tv/p/legal/trademark-policy/",
                        type: r.Link
                    },
                    endLink_devAgreement: {
                        getTitle: function() {
                            return Object(c.d)("View our Developer Agreement", "ReportModalWizard")
                        },
                        value: "https://www.twitch.tv/p/legal/developer-agreement/",
                        type: r.Link
                    },
                    endLink_eventCoC: {
                        getTitle: function() {
                            return Object(c.d)("View our Events Code of Conduct", "ReportModalWizard")
                        },
                        value: "https://www.twitch.tv/p/legal/events-code-of-conduct",
                        type: r.Link
                    },
                    messaging_general: {
                        getTitle: _.generalFilter,
                        value: "general_messaging",
                        omitFromDescription: !0
                    },
                    profile_general: {
                        getTitle: _.generalFilter,
                        value: "general_profile",
                        omitFromDescription: !0
                    },
                    maliciousRaid: {
                        getTitle: function() {
                            return Object(c.d)("They're participating in a malicious raid", "ReportModalWizard")
                        },
                        value: "malicious raid",
                        reportReason: i.Harassment
                    },
                    violence: {
                        getTitle: function() {
                            return Object(c.d)("It contains threats, harm, or endangerment of someone", "ReportModalWizard")
                        },
                        value: "violence/threats",
                        reportReason: i.Harm
                    },
                    report_username: {
                        getTitle: function() {
                            return Object(c.d)("They're using an inappropriate or offensive username", "ReportModalWizard")
                        },
                        value: "inappropriate username",
                        reportReason: i.OffensiveUsername
                    },
                    report_emotes: {
                        getTitle: function() {
                            return Object(c.d)("The emotes are inappropriate or offensive", "ReportModalWizard")
                        },
                        value: "inappropriate emotes",
                        reportReason: i.Other
                    },
                    abusive: {
                        getTitle: function() {
                            return Object(c.d)("It's hateful, harassing, or abusive", "ReportModalWizard")
                        },
                        value: "abusive"
                    },
                    scam: {
                        getTitle: function() {
                            return Object(c.d)("It contains attempts to scam other community members", "ReportModalWizard")
                        },
                        value: "scam",
                        reportReason: i.Spam
                    },
                    emptyStream: {
                        getTitle: function() {
                            return Object(c.d)("There's nobody on the stream", "ReportModalWizard")
                        },
                        value: "empty stream"
                    },
                    impersonation: {
                        getTitle: function() {
                            return Object(c.d)("They're impersonating someone", "ReportModalWizard")
                        },
                        value: "impersonation",
                        reportReason: i.Impersonation
                    },
                    underage: {
                        getTitle: function() {
                            return Object(c.d)("They're underage (12 or younger)", "ReportModalWizard")
                        },
                        value: "underage",
                        reportReason: i.Underaged
                    },
                    report_ip: {
                        getTitle: function() {
                            return Object(c.d)("I think they're using copyrighted content, trademarks, or other intellectual property that's not theirs", "ReportModalWizard")
                        },
                        value: "intellectual property"
                    },
                    inappropriateContent: {
                        getTitle: function() {
                            return Object(c.d)("It's inappropriate or obscene", "ReportModalWizard")
                        },
                        value: "inappropriate content"
                    },
                    violateDevAgreement: {
                        getTitle: function() {
                            return Object(c.d)("I think they're violating Twitch's Developer Agreement", "ReportModalWizard")
                        },
                        value: "violating developer agreement"
                    },
                    revealPersonalInfo: {
                        getTitle: function() {
                            return Object(c.d)("They might have revealed someone's personal information", "ReportModalWizard")
                        },
                        value: "revealing personal info",
                        reportReason: i.Other
                    },
                    inappropriateBadge: {
                        getTitle: function() {
                            return Object(c.d)("Their emote or subscriber badge violates Twitch's Guidelines", "ReportModalWizard")
                        },
                        value: "emote/subscriber badge",
                        reportReason: i.Other
                    },
                    noModeration: {
                        getTitle: function() {
                            return Object(c.d)("They're not moderating their chat appropriately", "ReportModalWizard")
                        },
                        value: "not moderating chat",
                        reportReason: i.Other
                    },
                    inappropriateExtension: {
                        getTitle: function() {
                            return Object(c.d)("Their extension contains malicious or inappropriate content", "ReportModalWizard")
                        },
                        value: "inappropriate extension",
                        reportReason: i.Other
                    },
                    cheating: {
                        getTitle: function() {
                            return Object(c.d)("They're cheating in an online game", "ReportModalWizard")
                        },
                        value: "cheating",
                        reportReason: i.Cheating
                    },
                    bitsViolation: {
                        getTitle: function() {
                            return Object(c.d)("Their use of Bits goes against Twitch's Policy", "ReportModalWizard")
                        },
                        value: "bits violation",
                        reportReason: i.BitsViolation
                    },
                    video_labeling: {
                        getTitle: function() {
                            return Object(c.d)("Their content is labeled incorrectly", "ReportModalWizard")
                        },
                        value: "incorrect label",
                        reportReason: i.Miscategorized
                    },
                    video_inactive: {
                        getTitle: function() {
                            return Object(c.d)("The stream is inactive (sleeping/AFK)", "ReportModalWizard")
                        },
                        value: "inactive stream",
                        reportReason: i.Miscategorized
                    },
                    video_general: {
                        getTitle: _.generalFilter,
                        value: "general_video",
                        omitFromDescription: !0
                    },
                    hateSpeech: {
                        getTitle: function() {
                            return Object(c.d)("They're using hate speech, hateful symbols, or hateful media", "ReportModalWizard")
                        },
                        value: "hate speech",
                        reportReason: i.HatefulConduct
                    },
                    harassment: {
                        getTitle: function() {
                            return Object(c.d)("They're harassing or bullying someone", "ReportModalWizard")
                        },
                        value: "harassment",
                        reportReason: i.Harassment
                    },
                    abusiveViolence: {
                        getTitle: _.abusiveViolence,
                        value: "threatening violence",
                        reportReason: i.Harm
                    },
                    commitingViolence: {
                        getTitle: _.commitingViolence,
                        value: "committing violence",
                        reportReason: i.Harm
                    },
                    swatting: {
                        getTitle: function() {
                            return Object(c.d)("They're inciting or committing swatting or a DDOS attack", "ReportModalWizard")
                        },
                        value: "swatting/ddosing",
                        reportReason: i.Harassment
                    },
                    personalInfo: {
                        getTitle: function() {
                            return Object(c.d)("They're purposely revealing personal information", "ReportModalWizard")
                        },
                        value: "revealing personal info",
                        reportReason: i.Harassment
                    },
                    threat_me: {
                        getTitle: function() {
                            return Object(c.d)("At me", "ReportModalWizard")
                        },
                        value: "against me",
                        reportReason: i.Harm
                    },
                    threat_person: {
                        getTitle: function() {
                            return Object(c.d)("At someone else", "ReportModalWizard")
                        },
                        value: "against another person",
                        reportReason: i.Harm
                    },
                    threat_group: {
                        getTitle: function() {
                            return Object(c.d)("At a group of people", "ReportModalWizard")
                        },
                        value: "against group of people",
                        reportReason: i.Harm
                    },
                    threat_selfharm: {
                        getTitle: function() {
                            return Object(c.d)("They're threatening self-harm", "ReportModalWizard")
                        },
                        value: "selfharm"
                    },
                    inappropriate_game: {
                        getTitle: function() {
                            return Object(c.d)("The game isn't allowed on Twitch", "ReportModalWizard")
                        },
                        value: "prohibited game",
                        reportReason: i.Prohibited
                    },
                    sexuallyViolent: {
                        getTitle: function() {
                            return Object(c.d)("Violent sexual conduct", "ReportModalWizard")
                        },
                        value: "sexually violent",
                        reportReason: i.SexualViolence
                    },
                    childAnimal: {
                        getTitle: function() {
                            return Object(c.d)("Sexual conduct involving a child or animal", "ReportModalWizard")
                        },
                        value: "sexual conduct; child or animal",
                        reportReason: i.SexualViolence
                    },
                    pornographic: {
                        getTitle: function() {
                            return Object(c.d)("Sexually explicit or pornographic content", "ReportModalWizard")
                        },
                        value: "pornographic",
                        reportReason: i.SexualContent
                    },
                    gory: {
                        getTitle: function() {
                            return Object(c.d)("Extreme violence or gore", "ReportModalWizard")
                        },
                        value: "gory",
                        reportReason: i.Gore
                    },
                    suggestive: {
                        getTitle: function() {
                            return Object(c.d)("Sexually suggestive content", "ReportModalWizard")
                        },
                        value: "sexually suggestive",
                        reportReason: i.SexualContent
                    },
                    nudity: {
                        getTitle: function() {
                            return Object(c.d)("Full or partial nudity", "ReportModalWizard")
                        },
                        value: "nudity",
                        reportReason: i.SexualContent
                    },
                    other: {
                        getTitle: function() {
                            return Object(c.d)("There's something else wrong with it...", "ReportModalWizard")
                        },
                        value: "other",
                        reportReason: i.Other
                    },
                    evasion: {
                        getTitle: function() {
                            return Object(c.d)("They were banned or suspended and are trying to get around it (ban evasion)", "ReportModalWizard")
                        },
                        value: "ban evasion"
                    },
                    evasion_sitewide: {
                        getTitle: function() {
                            return Object(c.d)("A sitewide ban from Twitch", "ReportModalWizard")
                        },
                        value: "sitewide ban",
                        reportReason: i.TosBanEvasion
                    },
                    evasion_chat: {
                        getTitle: function() {
                            return Object(c.d)("A chat ban from one or more channels", "ReportModalWizard")
                        },
                        value: "chat ban",
                        reportReason: i.ChatBanEvasion
                    },
                    evasion_messaging: {
                        getTitle: function() {
                            return Object(c.d)("A block from messaging me", "ReportModalWizard")
                        },
                        value: "messaging block",
                        reportReason: i.ChatBanEvasion
                    },
                    impersonation_me: {
                        getTitle: _.me,
                        value: "impersonating me",
                        reportReason: i.Impersonation
                    },
                    impersonation_brand: {
                        getTitle: function() {
                            return Object(c.d)("Someone I represent, or a brand/company I work for", "ReportModalWizard")
                        },
                        value: "impersonating brand",
                        reportReason: i.Impersonation
                    },
                    impersonation_other: {
                        getTitle: _.someoneElse,
                        value: "impersonating someone else",
                        reportReason: i.Impersonation
                    },
                    selfharm: {
                        getTitle: function() {
                            return Object(c.d)("I'm concerned for their wellbeing", "ReportModalWizard")
                        },
                        value: "selfharm",
                        reportReason: i.SelfHarm
                    },
                    chat: {
                        getTitle: function() {
                            return Object(c.d)("In a stream chat message", "ReportModalWizard")
                        },
                        value: "chat"
                    },
                    profile: {
                        getTitle: function() {
                            return Object(c.d)("In the profile content, extensions, or emotes", "ReportModalWizard")
                        },
                        value: "profile"
                    },
                    video: {
                        getTitle: function() {
                            return Object(c.d)("In a live stream, video, or clip", "ReportModalWizard")
                        },
                        value: "video"
                    },
                    room: {
                        getTitle: function(e) {
                            return Object(c.d)("In one of {username}'s rooms", {
                                username: e
                            }, "ReportModalWizard")
                        },
                        value: "room"
                    },
                    whisper: {
                        getTitle: function() {
                            return Object(c.d)("In a whisper (private message)", "ReportModalWizard")
                        },
                        value: "whisper",
                        reportContext: f.N.WHISPER_REPORT
                    },
                    username: {
                        getTitle: function() {
                            return Object(c.d)("In the username", "ReportModalWizard")
                        },
                        value: "username",
                        reportReason: i.OffensiveUsername
                    },
                    report_other: {
                        getTitle: function() {
                            return Object(c.d)("Somewhere else...", "ReportModalWizard")
                        },
                        value: "somewhere else",
                        omitFromDescription: !0
                    },
                    video_streamer: {
                        getTitle: function() {
                            return Object(c.d)("The streamer or channel owner", "ReportModalWizard")
                        },
                        value: "streamer"
                    },
                    video_someoneElse: {
                        getTitle: function() {
                            return Object(c.d)("Someone else in the video", "ReportModalWizard")
                        },
                        value: "someone else in video"
                    },
                    video_chatSomeone: {
                        getTitle: function() {
                            return Object(c.d)("Someone in chat", "ReportModalWizard")
                        },
                        value: "someone in chat",
                        differentTarget: !0
                    },
                    report_channelOwner: {
                        getTitle: function() {
                            return Object(c.d)("The channel owner", "ReportModalWizard")
                        },
                        value: "channel owner"
                    },
                    report_member: {
                        getTitle: function() {
                            return Object(c.d)("Another community member", "ReportModalWizard")
                        },
                        value: "community member",
                        differentTarget: !0
                    },
                    location_onTwitch: {
                        getTitle: function() {
                            return Object(c.d)("On Twitch", "ReportModalWizard")
                        },
                        value: "on twitch"
                    },
                    location_anotherSite: {
                        getTitle: function() {
                            return Object(c.d)("On another site or service", "RpoertModalWizard")
                        },
                        value: "another site"
                    },
                    location_TwitchEvent: {
                        getTitle: function() {
                            return Object(c.d)("In person, at a Twitch event", "ReportModalWizard")
                        },
                        value: "twitch event"
                    },
                    external_incitingRaids: {
                        getTitle: function() {
                            return Object(c.d)("inciting brigading or malicious raids", "ReportModalWizard")
                        },
                        reportReason: i.Harassment,
                        value: "brigading/raids"
                    },
                    external_threatening: {
                        getTitle: _.threatening,
                        value: "threatening"
                    },
                    external_harassment: {
                        getTitle: _.abusive,
                        value: "hateful/harassing"
                    },
                    external_abusiveViolence: {
                        getTitle: _.abusiveViolence,
                        value: "external site; threatening violence",
                        reportReason: i.Harm
                    },
                    external_commitingViolence: {
                        getTitle: _.commitingViolence,
                        value: "external site; committing violence",
                        reportReason: i.Harm
                    },
                    conduct_impersonation: {
                        getTitle: function() {
                            return Object(c.d)("impersonating someone", "ReportModalWizard")
                        },
                        value: "impersonation",
                        reportReason: i.Impersonation
                    },
                    spam: {
                        getTitle: function() {
                            return Object(c.d)("They're spamming or spreading malicious links", "ReportModalWizard")
                        },
                        value: "spam",
                        reportReason: i.Spam
                    },
                    spam_bot: {
                        getTitle: function() {
                            return Object(c.d)("I think this is a bot account", "ReportModalWizard")
                        },
                        value: "bot"
                    },
                    spam_scam: {
                        getTitle: function() {
                            return Object(c.d)("They're trying to scam other community members or sending malicious links", "ReportModalWizard")
                        },
                        value: "scam or malicious links"
                    },
                    spam_repeated: {
                        getTitle: function() {
                            return Object(c.d)("They're sending repeated messages (spam)", "ReportModalWizard")
                        },
                        value: "repeat messages"
                    }
                },
                I = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onChange = function(e) {
                            var n = e.target,
                                i = n.name,
                                r = n.value;
                            t.props.onChangeText(i, r)
                        }, t.onSelect = function(e) {
                            if (t.props.currentCard.items && e.currentTarget.parentElement) {
                                var n = Number(e.currentTarget.parentElement.getAttribute("data-a-index")),
                                    i = t.props.currentCard.items[n];
                                t.props.onChangeRadio(i)
                            }
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.currentCard.getDescription ? o.createElement(y.Xa, {
                            padding: {
                                bottom: 1
                            }
                        }, this.props.currentCard.getDescription()) : null;
                        return o.createElement(y.Xa, {
                            className: "reporting-wizard-card"
                        }, e, o.createElement(y.Ea, {
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
                                    return o.createElement(y.Xa, {
                                        key: n,
                                        padding: {
                                            bottom: 1
                                        }
                                    }, t.getTitle());
                                case r.Link:
                                    return o.createElement(y.Xa, {
                                        key: n,
                                        padding: {
                                            bottom: 1
                                        }
                                    }, o.createElement(y.U, {
                                        to: t.value,
                                        targetBlank: !0
                                    }, o.createElement(y.Xa, {
                                        display: y.X.Flex
                                    }, o.createElement(y.Xa, {
                                        display: y.X.Inline,
                                        padding: {
                                            right: .5
                                        }
                                    }, o.createElement(y.sb, {
                                        asset: y.tb.Document
                                    })), t.getTitle())));
                                case r.Textarea:
                                    var i = t.value ? e.props.userTextInputs[t.value] : void 0,
                                        a = t.required && (!i || !!i && 0 === i.trim().length);
                                    return o.createElement(y.Xa, {
                                        key: n,
                                        padding: {
                                            bottom: 1
                                        }
                                    }, o.createElement(y.Ea, {
                                        label: t.getTitle(),
                                        labelOptional: t.required ? "" : Object(c.d)("Optional", "ReportModalWizardCard")
                                    }, o.createElement(y.Sb, {
                                        onChange: e.onChange,
                                        rows: t.rows || 3,
                                        name: t.value,
                                        error: e.props.error && a,
                                        value: i,
                                        "data-test-selector": "report-wizard-textarea"
                                    })));
                                case r.MultipleChoice:
                                default:
                                    return o.createElement(y.Xa, {
                                        key: n,
                                        padding: {
                                            y: .5
                                        }
                                    }, o.createElement(y.pb, {
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
                }(o.Component),
                R = n("RQ6e");
            ! function(e) {
                e.Confirm = "Confirm", e.MultipleChoice = "MultipleChoice", e.Info = "End Card"
            }(T || (T = {}));
            var O, D, N, x = {
                    contentGeneral: function() {
                        return Object(c.d)("What would you like to report?", "ReportModalWizard")
                    },
                    content: function() {
                        return Object(c.d)("What's wrong with this content?", "ReportModalWizard")
                    },
                    identifyUser: function() {
                        return Object(c.d)("Who do you want to report?", "ReportModalWizard")
                    },
                    thisPersonIs: function() {
                        return Object(c.d)("This person is...", "ReportModalWizard")
                    },
                    relevantStatements: function() {
                        return Object(c.d)("What would you like to report? (Please choose the most relevant statement that applies.)", "ReportModalWizard")
                    }
                },
                M = {
                    report: function(e) {
                        return Object(c.d)("Report {username}", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    reportVideo: function(e) {
                        return Object(c.d)("Report {username}'s Video", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    reportMessage: function(e) {
                        return Object(c.d)("Report {username}'s Message", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    reportProfile: function(e) {
                        return Object(c.d)("Report {username}'s Profile Or Other Content", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    reportAbusive: function(e) {
                        return Object(c.d)("Report {username} for Abusive Conduct", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    tellUsMore: function() {
                        return Object(c.d)("Tell Us More", "ReportModalWizard")
                    },
                    thanks: function() {
                        return Object(c.d)("Thanks for letting us know", "ReportModalWizard")
                    },
                    thanksConcern: function() {
                        return Object(c.d)("Thank you for your concern", "ReportModalWizard")
                    }
                },
                P = {
                    getDescription: function() {
                        return Object(c.d)("Reports are reviewed by Twitch Staff 24 hours a day. We will issue penalties, such as account suspension and/or content removal, once we verify that a violation of our policies has occurred.", "ReportModalWizard")
                    },
                    blockPrompt: !0,
                    getTitle: M.thanks,
                    type: T.Info,
                    value: "end card"
                },
                j = {
                    socialMedia: a.__assign({}, P, {
                        items: [E.endBlurb_socialmedia]
                    }),
                    violence: a.__assign({}, P, {
                        items: [E.endBlurb_threat]
                    }),
                    legal: {
                        getTitle: M.thanksConcern,
                        getDescription: function() {
                            return Object(c.d)("To submit a claim or report a violation of this type, you will need to follow the steps listed on the relevant page below.", "ReportModalWizard")
                        },
                        items: [E.endLink_DMCA, E.endLink_trademark, E.endLink_devAgreement],
                        type: T.Info,
                        value: "ip end"
                    },
                    selfharm: {
                        getTitle: M.thanksConcern,
                        getDescription: function() {
                            return Object(c.d)("If you know the user personally, and you believe them to be in danger, please contact their local authorities immediately. The link below contains some general information that may be of use.", "ReportModalWizard")
                        },
                        items: [E.endLink_selfharm],
                        type: T.Info,
                        value: "selfharm end"
                    },
                    twitchEvent: {
                        getTitle: M.thanksConcern,
                        getDescription: function() {
                            return Object(c.d)("Please bring this concern to the attention of staff or security at the event if you have not already done so. More information is available at the link below.", "ReportModalWizard")
                        },
                        items: [E.endLink_eventCoC],
                        value: "twitch event end",
                        type: T.Info
                    }
                },
                F = {
                    getTitle: M.report,
                    getLabel: function() {
                        return Object(c.d)("Where is the problem?", "ReportModalWizard")
                    },
                    items: [E.video, E.whisper, E.chat, E.room, E.profile, E.username, E.report_other],
                    type: T.MultipleChoice,
                    value: "content type"
                },
                L = {
                    identifyUser: {
                        getTitle: M.reportVideo,
                        getLabel: x.identifyUser,
                        items: [E.video_streamer, E.video_someoneElse, E.video_chatSomeone],
                        type: T.MultipleChoice,
                        value: "video identify user"
                    },
                    content: {
                        getTitle: M.reportVideo,
                        getLabel: x.contentGeneral,
                        items: [E.revealPersonalInfo, E.video_labeling, E.video_inactive, E.video_general, E.report_ip, E.violateDevAgreement, E.selfharm],
                        type: T.MultipleChoice,
                        value: "video report reason"
                    },
                    general: {
                        getTitle: M.reportVideo,
                        getLabel: x.content,
                        items: [E.report_username, E.violence, E.abusive, E.cheating, E.scam, E.inappropriateContent, E.evasion, E.impersonation, E.underage, E.bitsViolation],
                        type: T.MultipleChoice,
                        value: "video general report reason"
                    }
                },
                U = {
                    content: {
                        getTitle: M.reportMessage,
                        getLabel: x.contentGeneral,
                        items: [E.revealPersonalInfo, E.evasion, E.spam, E.maliciousRaid, E.report_username, E.messaging_general, E.selfharm],
                        type: T.MultipleChoice,
                        value: "message report reason"
                    },
                    general: {
                        getTitle: M.reportMessage,
                        getLabel: x.content,
                        items: [E.report_emotes, E.violence, E.abusive, E.inappropriateContent, E.impersonation, E.underage, E.bitsViolation],
                        type: T.MultipleChoice,
                        value: "message general report reason"
                    }
                },
                A = a.__assign({}, U.content, {
                    getDescription: function() {
                        return Object(c.d)("Please note that we may review additional messages in this conversation to determine the context of your report.", "ReportModalWizard")
                    }
                }),
                V = {
                    content: {
                        getTitle: M.reportProfile,
                        getLabel: x.contentGeneral,
                        items: [E.revealPersonalInfo, E.inappropriateBadge, E.inappropriateExtension, E.noModeration, E.profile_general, E.report_ip, E.violateDevAgreement, E.selfharm],
                        type: T.MultipleChoice,
                        value: "profile report reason"
                    },
                    general: {
                        getTitle: M.reportProfile,
                        getLabel: x.content,
                        items: [E.report_username, E.violence, E.abusive, E.scam, E.inappropriateContent, E.evasion, E.impersonation, E.underage, E.bitsViolation],
                        type: T.MultipleChoice,
                        value: "profile general report reason"
                    }
                },
                W = {
                    getTitle: function(e) {
                        return Object(c.d)("Report {username}'s Room", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: x.identifyUser,
                    items: [E.report_channelOwner, E.report_member],
                    value: "room report user",
                    type: T.MultipleChoice
                },
                B = {
                    getTitle: M.tellUsMore,
                    items: [E.input_description],
                    type: T.Confirm,
                    value: "tell us more"
                },
                z = {
                    banEvasion: a.__assign({}, B, {
                        items: [E.input_usernames, E.input_description],
                        value: "ban evasion tell us more"
                    }),
                    socialMedia: a.__assign({}, B, {
                        items: [E.input_link, E.input_connection, E.input_description],
                        nextCard: j.socialMedia,
                        value: "social media tell us more"
                    })
                },
                G = {
                    content: {
                        getTitle: M.reportAbusive,
                        getLabel: x.relevantStatements,
                        items: [E.hateSpeech, E.harassment, E.abusiveViolence, E.commitingViolence, E.swatting, E.personalInfo],
                        type: T.MultipleChoice,
                        value: "abuse type"
                    },
                    violence: {
                        getTitle: function(e) {
                            return Object(c.d)("Report {username} for Violence or Threats", {
                                username: e
                            }, "ReportModalWizard")
                        },
                        getLabel: function() {
                            return Object(c.d)("Are the threats or actions directed at you or someone else?", "ReportModalWizard")
                        },
                        items: [E.threat_me, E.threat_person, E.threat_group, E.threat_selfharm],
                        type: T.MultipleChoice,
                        value: "violence type"
                    }
                },
                H = {
                    identifyLocation: {
                        getTitle: function(e) {
                            return Object(c.d)("Report {username} for something else...", {
                                username: e
                            }, "ReportModalWizard")
                        },
                        getLabel: function() {
                            return Object(c.d)("Where did the problem happen?", "ReportModalWizard")
                        },
                        items: [E.location_onTwitch, E.location_anotherSite, E.location_TwitchEvent],
                        type: T.MultipleChoice,
                        value: "off-site conduct location"
                    },
                    externalSite: {
                        getTitle: function(e) {
                            return Object(c.d)("Report {username}'s Conduct on Another Site or Service", {
                                username: e
                            }, "ReportModalWizard")
                        },
                        getLabel: x.thisPersonIs,
                        getDescription: function() {
                            return Object(c.d)("Please note that incidents reported through this form must involve Twitch community members. If possible, please submit a report to the site or service where the incident occurred as well.", "ReportModalWizard")
                        },
                        items: [E.external_incitingRaids, E.external_threatening, E.external_harassment],
                        type: T.MultipleChoice,
                        nextCard: z.socialMedia,
                        value: "external site conduct"
                    },
                    external_violence: a.__assign({}, G.violence, {
                        items: [E.threat_me, E.threat_person, E.threat_group],
                        nextCard: z.socialMedia
                    }),
                    external_abusive: a.__assign({}, G.content, {
                        items: [E.hateSpeech, E.harassment, E.external_abusiveViolence, E.external_commitingViolence, E.swatting, E.personalInfo],
                        nextCard: z.socialMedia
                    })
                },
                X = {
                    getTitle: function(e) {
                        return Object(c.d)("Report {username}'s Spam or Malicious Links", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: x.contentGeneral,
                    items: [E.spam_bot, E.spam_scam, E.spam_repeated],
                    type: T.MultipleChoice,
                    value: "spam type"
                },
                q = {
                    getTitle: function(e) {
                        return Object(c.d)("Report {username} for Inappropriate Content", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: x.relevantStatements,
                    items: [E.inappropriate_game, E.gory, E.sexuallyViolent, E.childAnimal, E.pornographic, E.suggestive, E.nudity, E.other],
                    type: T.MultipleChoice,
                    value: "inappropriate content type"
                },
                Q = {
                    getTitle: function(e) {
                        return Object(c.d)("Report {username} for Evading a Ban", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: function() {
                        return Object(c.d)("What kind of ban are they evading?", "ReportModalWizard")
                    },
                    value: "ban type",
                    items: [E.evasion_chat, E.evasion_sitewide, E.evasion_messaging],
                    type: T.MultipleChoice,
                    nextCard: z.banEvasion
                },
                Y = {
                    getTitle: function(e) {
                        return Object(c.d)("Report {username} for Impersonation", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: function() {
                        return Object(c.d)("Who is being impersonated?", "ReportModalWizard")
                    },
                    getDescription: function() {
                        return Object(c.d)("Parody, cosplay, and other portrayals without the intent to deceive or defraud are allowed under Twitch's Community Guidelines. If you would still like to submit a report, please continue.", "ReportModalWizard")
                    },
                    items: [E.impersonation_me, E.impersonation_brand, E.impersonation_other],
                    type: T.MultipleChoice,
                    value: "impersonation type"
                },
                $ = F,
                K = B,
                J = P,
                Z = {
                    video: L.identifyUser,
                    whisper: A,
                    chat: U.content,
                    profile: V.content,
                    room: W,
                    "somewhere else": H.identifyLocation,
                    streamer: L.content,
                    "someone else in video": L.content,
                    "someone in chat": U.content,
                    general_video: L.general,
                    general_messaging: U.general,
                    general_profile: V.general,
                    "channel owner": V.content,
                    "community member": U.content,
                    "on twitch": V.content,
                    "another site": H.externalSite,
                    "twitch event": j.twitchEvent,
                    "brigading/raids": z.socialMedia,
                    threatening: H.external_violence,
                    "hateful/harassing": H.external_abusive,
                    "external site; threatening violence": H.external_violence,
                    "external site; committing violence": H.external_violence,
                    "external site; scam": z.socialMedia,
                    "ban evasion": Q,
                    spam: X,
                    hateful: G.content,
                    impersonation: Y,
                    "violence/threats": G.violence,
                    "threatening violence": G.violence,
                    "committing violence": G.violence,
                    abusive: G.content,
                    "inappropriate content": q,
                    "intellectual property": j.legal,
                    "violating developer agreement": j.legal
                },
                ee = {
                    selfharm: j.selfharm,
                    harm: j.violence,
                    other: J
                },
                te = {
                    CHANNEL_FEED_POST_REPORT: V.content,
                    COMMUNITY_REPORT: V.content,
                    CHAT_REPORT: U.content,
                    CLIP_REPORT: L.content,
                    EVENT_REPORT: V.content,
                    EXTENSION_REPORT: V.content,
                    LIVE_UP_REPORT: V.content,
                    ROOM_REPORT: W,
                    WHISPER_REPORT: A,
                    VOD_COMMENT_REPORT: U.content
                },
                ne = "report-wizard-back",
                ie = "report-wizard-close",
                re = "report-wizard-next",
                ae = "report-wizard-submit",
                oe = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            currentCard: t.props.currentCard || te[t.props.reportContentType] || $,
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
                            return o.createElement(y.Xa, {
                                margin: {
                                    top: 1
                                }
                            }, o.createElement(y.W, null, Object(c.d)("We are going to ask you a few questions to help us investigate your report quickly and accurately.", "ReportModalWizard")))
                        }, t.renderButtons = function() {
                            var e = Object(c.d)("Close", "ReportModalWizard"),
                                n = t.handleClose,
                                i = ie,
                                r = !1,
                                a = t.state.prevCards.length ? t.renderBack() : null;
                            switch (t.state.currentCard.type) {
                                case T.MultipleChoice:
                                    e = Object(c.d)("Next", "ReportModalWizard"), n = t.handleNext, i = re, r = !t.state.currentSelection;
                                    break;
                                case T.Confirm:
                                    e = Object(c.d)("Submit Report", "ReportModalWizard"), n = t.handleSubmit, r = !t.state.userTextInput, i = ae
                            }
                            return o.createElement(y.Xa, null, a, o.createElement(y.z, {
                                onClick: n,
                                disabled: r,
                                "data-test-selector": i
                            }, o.createElement(y.Xa, {
                                padding: {
                                    x: 1
                                }
                            }, e)))
                        }, t.renderBack = function() {
                            return o.createElement(y.Xa, {
                                margin: {
                                    right: 1
                                },
                                display: y.X.InlineBlock
                            }, o.createElement(y.z, {
                                type: y.F.Hollow,
                                onClick: t.handleBack,
                                "data-test-selector": ne
                            }, o.createElement(y.Xa, {
                                padding: {
                                    x: 1
                                }
                            }, Object(c.d)("Back", "ReportModalWizard"))))
                        }, t.getTitle = function() {
                            return t.state.currentCard.getTitle && t.props.targetUser.displayName && t.props.targetUser.id ? t.state.targetUnknown ? t.state.currentCard.getTitle(Object(c.d)("Another User", "ReportModalWizard")) : t.state.currentCard.getTitle(t.props.targetUser.displayName) : t.state.targetUnknown ? Object(c.d)("Report User", "ReportModalWizard") : t.props.title
                        }, t.handleClose = function() {
                            t.setState({
                                modalCloseTracked: !0
                            }, function() {
                                return t.props.trackClose(N.Finish, t.state.currentCard.value)
                            }), t.props.onClose()
                        }, t.handleNext = function() {
                            if (t.state.currentSelection && t.state.currentSelection.value) {
                                var e = t.state.currentCard,
                                    n = t.state.prevCards.concat(e),
                                    i = t.state.prevSelections.concat(t.state.currentSelection),
                                    r = t.state.displacedSelections[t.state.displacedSelections.length - 1],
                                    a = t.state.currentSelection.differentTarget || t.state.targetUnknown,
                                    o = t.state.currentSelection.reportContext || t.state.reportContext,
                                    s = e.nextCard || K;
                                Z[t.state.currentSelection.value] && (s = Z[t.state.currentSelection.value]);
                                var l = t.state.currentSelection.reportReason || t.state.reportReason,
                                    c = s.type === T.Info;
                                t.setState({
                                    currentCard: s,
                                    reportReason: l,
                                    prevCards: c ? [] : n,
                                    prevSelections: i,
                                    targetUnknown: a,
                                    currentSelection: r || null,
                                    displacedSelections: t.state.displacedSelections.slice(0, -1),
                                    reportContext: o
                                }, function() {
                                    return t.trackNavigation(D.Next, e.value)
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
                            return a.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, i, r = this;
                                return a.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            return e = Object(c.d)("Additional information is required.", "ReportModalWizard"), this.requiredInputsNonEmpty() ? (t = this.state.reportReason || "other", n = this.createReportDescription(), [4, this.props.onSubmit(t, n, this.state.reportContext)]) : [3, 2];
                                        case 1:
                                            switch (a.sent(), this.props.submitStatus) {
                                                case R.a.FormError:
                                                    this.setState({
                                                        error: e
                                                    });
                                                    break;
                                                case R.a.Success:
                                                    i = J, ee[t] && (i = ee[t]), this.state.currentCard.nextCard && (i = this.state.currentCard.nextCard), this.setState({
                                                        currentCard: i,
                                                        prevCards: [],
                                                        prevSelections: [],
                                                        currentSelection: null,
                                                        displacedSelections: [],
                                                        userTextInput: {},
                                                        error: ""
                                                    }, function() {
                                                        return r.trackNavigation(D.Submit)
                                                    });
                                                    break;
                                                case R.a.UserError:
                                                    this.setState({
                                                        error: Object(c.d)("This account could not be reported. It may have already been suspended, or the owner may have deleted it.", "ReportModalWizard")
                                                    });
                                                    break;
                                                case R.a.MutationError:
                                                default:
                                                    this.setState({
                                                        error: Object(c.d)("Sorry, a network error occurred when submitting your report. Please try again later.", "ReportModalWizard")
                                                    })
                                            }
                                            return [3, 3];
                                        case 2:
                                            this.props.onError(R.a.FormError), this.setState({
                                                error: e
                                            }), a.label = 3;
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        }, t.handleBack = function() {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, i, r, o = this;
                                return a.__generator(this, function(a) {
                                    return e = this.state.currentCard, t = this.state.prevCards[this.state.prevCards.length - 1], n = this.state.prevSelections[this.state.prevSelections.length - 1], i = !n.differentTarget && this.state.targetUnknown, r = this.state.displacedSelections, this.state.currentSelection && (r = r.concat(this.state.currentSelection)), t && n && this.setState({
                                        currentCard: t,
                                        currentSelection: n,
                                        displacedSelections: r,
                                        prevCards: this.state.prevCards.slice(0, -1),
                                        prevSelections: this.state.prevSelections.slice(0, -1),
                                        error: "",
                                        targetUnknown: i
                                    }, function() {
                                        return o.trackNavigation(D.Back, e.value)
                                    }), [2]
                                })
                            })
                        }, t.handleTextInput = function(e, n) {
                            var i = t.state.userTextInput;
                            i[e] = n, t.setState({
                                userTextInput: i
                            })
                        }, t.handleSelection = function(e) {
                            if (t.state.currentCard.items && e !== t.state.currentSelection) {
                                var n = t.state.targetUnknown;
                                if (n) n = 0 === t.state.displacedSelections.filter(function(e) {
                                    return e.differentTarget
                                }).length;
                                var i = t.state.reportContext;
                                (t.state.displacedSelections.filter(function(e) {
                                    return e.reportContext
                                }).length || t.state.currentSelection && t.state.currentSelection.reportContext) && (i = t.props.reportContentType), t.setState({
                                    currentSelection: e,
                                    displacedSelections: [],
                                    userTextInput: {},
                                    targetUnknown: n,
                                    reportContext: i
                                })
                            }
                        }, t.trackNavigation = function(e, n) {
                            t.props.trackAction(e, n, t.state.currentCard.value)
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentWillUnmount = function() {
                        this.state.modalCloseTracked || this.props.trackClose(N.Close, this.state.currentCard.value)
                    }, t.prototype.render = function() {
                        var e = this.state.currentCard.type === T.Info && this.state.currentCard.blockPrompt ? o.createElement(w, {
                                targetUser: this.props.targetUser,
                                onBlock: this.props.onBlock,
                                onUnblock: this.props.onUnblock,
                                userBlocked: this.props.userBlocked
                            }) : null,
                            t = this.state.error ? o.createElement(y.Eb, {
                                fullWidth: !0,
                                margin: {
                                    bottom: 1
                                },
                                padding: 1,
                                className: "reporting__error-container"
                            }, this.state.error) : null,
                            n = this.state.prevCards.length || this.state.currentCard.type === T.Info ? null : this.renderPrimer();
                        return o.createElement(y.Eb, {
                            className: "reporting-wizard",
                            display: y.X.Flex,
                            margin: {
                                x: 1
                            },
                            flexDirection: y.Aa.Column,
                            fullHeight: !0,
                            "data-test-card-value": this.state.currentCard.value
                        }, t, o.createElement(y.W, {
                            bold: !0,
                            fontSize: y.Ca.Size4
                        }, this.getTitle()), n, o.createElement(y.Xa, {
                            margin: {
                                y: 1
                            }
                        }, o.createElement(I, {
                            currentCard: this.state.currentCard,
                            currentSelection: this.state.currentSelection,
                            targetUser: this.props.targetUser,
                            targetUserID: this.props.targetUser.id,
                            onChangeRadio: this.handleSelection,
                            onChangeText: this.handleTextInput,
                            userTextInputs: this.state.userTextInput,
                            error: this.props.submitStatus === R.a.FormError && !!this.state.error
                        }), e), this.renderButtons())
                    }, t
                }(o.Component),
                se = n("s8Ou"),
                le = n("0hI/");
            n.d(t, "c", function() {
                    return D
                }), n.d(t, "a", function() {
                    return N
                }), n.d(t, "b", function() {
                    return de
                }),
                function(e) {
                    e.Close = "close", e.Open = "open", e.Submit = "submit_report", e.ToggleSettings = "modal_settings"
                }(O || (O = {})),
                function(e) {
                    e.Back = "back", e.Close = "close", e.Open = "open", e.Next = "next", e.Submit = "submit_report", e.ToggleSettings = "modal_settings"
                }(D || (D = {})),
                function(e) {
                    e.Close = "close", e.Finish = "finish"
                }(N || (N = {}));
            var ce = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    n.handleSubmit = function(e, t, i) {
                        return a.__awaiter(n, void 0, void 0, function() {
                            var n, r, o, s, l = this;
                            return a.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        if (n = i === f.N.WHISPER_REPORT ? i : this.props.reportContext.contentType, r = f.N[n], null === (o = {
                                                description: t,
                                                reason: e,
                                                content: r,
                                                contentID: this.props.reportContext.contentID,
                                                extra: this.props.reportContext.extra,
                                                targetID: this.props.data.targetUser.id
                                            }).targetID) return this.setState({
                                            submitStatus: R.a.UserError
                                        }), [2];
                                        a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), [4, this.props.reportUser(Object(m.a)(o))];
                                    case 2:
                                        return a.sent(), this.setState({
                                            submitStatus: R.a.Success
                                        }, function() {
                                            l.state.showWizard || l.trackAction(O.Submit)
                                        }), [3, 4];
                                    case 3:
                                        return s = a.sent(), c.k.error(s, "ReportUser Mutation failed."), this.setState({
                                            submitStatus: R.a.MutationError
                                        }), [3, 4];
                                    case 4:
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
                        n.props.blockUserMutation(n.props.data.targetUser.id, void 0, void 0, a.__assign({}, n.props.sessionUser, {
                            __typename: "User"
                        })), n.setState({
                            userBlocked: !0
                        })
                    }, n.onUnblock = function() {
                        n.props.unblockUserMutation(n.props.data.targetUser.id, a.__assign({}, n.props.sessionUser, {
                            __typename: "User"
                        })), n.setState({
                            userBlocked: !1
                        })
                    }, n.trackOpen = function(e) {
                        n.state.openEventSent || (n.state.showWizard ? n.trackWizardAction(D.Open, void 0, e) : n.trackAction(O.Open), n.setState({
                            openEventSent: !0
                        }))
                    }, n.trackClose = function(e, t) {
                        n.state.closeEventSent || (n.state.showWizard ? n.trackWizardAction(D.Close, t, void 0, e) : n.trackAction(O.Close), n.setState({
                            closeEventSent: !0
                        }))
                    }, n.trackWizardAction = function(e, t, i, r) {
                        c.p.tracking.track(v.SpadeEventType.ReportWizardFlowAction, {
                            ui_context: n.props.reportContext.contentType,
                            target_user_id: n.props.reportContext.targetUserID,
                            report_sent: n.state.submitStatus === R.a.Success,
                            modal_type: "wizard_v1",
                            extra_user_id: n.props.reportContext.additionalTrackingID,
                            action: e,
                            close_type: r,
                            report_session_id: n.reportID,
                            current_step: t,
                            navigated_to: i
                        })
                    }, n.trackAction = function(e) {
                        c.p.tracking.track(v.SpadeEventType.ReportFlowAction, {
                            ui_context: n.props.reportContext.contentType,
                            target_user_id: n.props.reportContext.targetUserID,
                            report_sent: n.state.submitStatus === R.a.Success,
                            extra_user_id: n.props.reportContext.additionalTrackingID,
                            action: e,
                            report_session_id: n.reportID
                        })
                    }, n.reportID = Object(h.a)();
                    var i = c.p.experiments.getAssignment(g.b.NewReportingWizard);
                    return n.state = {
                        submitStatus: R.a.Unsubmitted,
                        showWizard: "yes" === i,
                        openEventSent: !1,
                        closeEventSent: !1,
                        userBlocked: !1
                    }, n
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.trackOpen()
                }, t.prototype.componentWillUnmount = function() {
                    this.handleClose(), this.state.showWizard || this.trackClose()
                }, t.prototype.render = function() {
                    if (this.props.data.error) return o.createElement(y.Xa, {
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(y.W, {
                        fontSize: y.Ca.Size5
                    }, Object(c.d)("There was an unexpected error. Please refresh the page and try again", "ReportUser")));
                    if (this.props.data.loading) return o.createElement(y.ib, {
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
                        return this.state.showWizard ? this.props.data.loading ? o.createElement(y.Za, null) : o.createElement(oe, a.__assign({}, e, {
                            user: this.props.sessionUser,
                            onBlock: this.onBlock,
                            onUnblock: this.onUnblock,
                            targetUser: this.props.data.targetUser,
                            trackAction: this.trackWizardAction,
                            trackClose: this.trackClose,
                            userBlocked: this.userBlocked
                        })) : o.createElement(R.b, a.__assign({}, e, {
                            targetUser: this.props.data.targetUser
                        }))
                    }
                    return o.createElement(y.Xa, {
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(y.W, {
                        fontSize: y.Ca.Size5
                    }, Object(c.d)("The user you are trying to report does not exist", "ReportUser")))
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
            }(o.Component);
            var de = Object(l.compose)(Object(d.a)(se, {
                name: "reportUser"
            }), Object(d.a)(le, {
                options: function(e) {
                    return {
                        variables: {
                            targetUserID: e.reportContext.targetUserID
                        }
                    }
                }
            }), Object(k.b)("ReportUser", {
                autoReportInteractive: !0
            }), Object(u.a)(), Object(p.a)(), Object(s.connect)(function(e) {
                return {
                    sessionUser: e.session.user
                }
            }, null))(ce)
        },
        efEE: function(e, t, n) {},
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
            var i = n("mrSG"),
                r = n("yR8l"),
                a = n("8jSG"),
                o = n("cMjZ"),
                s = n("zixI");

            function l() {
                var e = this;
                return Object(r.a)(s, {
                    props: function(t) {
                        return {
                            unblockUserMutation: function(n, r) {
                                return i.__awaiter(e, void 0, void 0, function() {
                                    return i.__generator(this, function(e) {
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
                                                            id: Object(o.a)(r),
                                                            fragment: a
                                                        });
                                                        t && (t.blockedUsers = t.blockedUsers.filter(function(e) {
                                                            return null !== e && e.id !== n
                                                        }), e.writeFragment({
                                                            id: Object(o.a)(r),
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
            var i = n("mrSG"),
                r = n("yR8l"),
                a = n("Pub/"),
                o = n("HzXE"),
                s = 60,
                l = 60 * s,
                c = 24 * l,
                d = 7 * c,
                u = 4 * d;
            var p = n("4w0E");

            function m(e) {
                var t = this;
                return Object(r.a)(p, {
                    props: function(n) {
                        return {
                            banUserMutation: function(r, p) {
                                return void 0 === p && (p = null), i.__awaiter(t, void 0, void 0, function() {
                                    var t;
                                    return i.__generator(this, function(m) {
                                        switch (m.label) {
                                            case 0:
                                                if (t = e(n.ownProps).channelID, !n.mutate) return [3, 5];
                                                m.label = 1;
                                            case 1:
                                                return m.trys.push([1, 3, , 4]), [4, n.mutate({
                                                    variables: {
                                                        input: {
                                                            channelID: t,
                                                            bannedUserLogin: r,
                                                            expiresIn: p && function(e) {
                                                                if (!e) return "0s";
                                                                var t = e,
                                                                    n = "";
                                                                if (t > u) {
                                                                    var i = Math.floor(t / u);
                                                                    t -= i * u, n += i + "mo"
                                                                }
                                                                if (t > d) {
                                                                    var r = Math.floor(t / d);
                                                                    t -= r * d, n += r + "w"
                                                                }
                                                                if (t > c) {
                                                                    var a = Math.floor(t / c);
                                                                    t -= a * c, n += a + "d"
                                                                }
                                                                if (t > l) {
                                                                    var o = Math.floor(t / l);
                                                                    t -= o * l, n += o + "h"
                                                                }
                                                                if (t > s) {
                                                                    var p = Math.floor(t / s);
                                                                    t -= p * s, n += p + "m"
                                                                }
                                                                return t > 0 && (n += t + "s"), n
                                                            }(p)
                                                        }
                                                    },
                                                    update: function(e, n) {
                                                        return function(e, t, n) {
                                                            if (t && t.data && t.data.banUserFromChatRoom && t.data.banUserFromChatRoom.ban && t.data.banUserFromChatRoom.ban.bannedUser && t.data.banUserFromChatRoom.ban.bannedUser.id) {
                                                                var r = Object(a.a)(e, n, t.data.banUserFromChatRoom.ban.bannedUser.id);
                                                                if (!r) return;
                                                                e.writeQuery({
                                                                    query: o,
                                                                    variables: {
                                                                        targetUserID: t.data.banUserFromChatRoom.ban.bannedUser.id,
                                                                        channelID: n
                                                                    },
                                                                    data: i.__assign({}, r, {
                                                                        chatRoomBanStatus: {
                                                                            isPermanent: t.data.banUserFromChatRoom.ban.isPermanent,
                                                                            __typename: "ChatRoomBanStatus"
                                                                        }
                                                                    })
                                                                })
                                                            }
                                                        }(e, n, t)
                                                    }
                                                })];
                                            case 2:
                                                return [2, m.sent().data];
                                            case 3:
                                                throw m.sent(), new Error("Unable to ban user");
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
                return m
            })
        },
        j48g: function(e, t, n) {
            var i = {
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
                    end: 336
                }
            };
            i.loc.source = {
                body: '#import "twilight/features/tags/models/tag-fragment.gql"\n#import "twilight/pages/front/queries/user-fragment.gql"\n#import "twilight/pages/front/queries/game-fragment.gql"\nfragment stream on Stream {\nid\nbroadcaster {\n...user\n}\ngame {\n...game\n}\ntags {\n...tagFragment\n}\nviewersCount\npreviewImageURL(width: 400 height: 225)\ncreatedAt\ntype\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var r = {};

            function a(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !r[t] && (r[t] = !0, !0)
                })
            }
            i.definitions = i.definitions.concat(a(n("iiOx").definitions)), i.definitions = i.definitions.concat(a(n("P8NS").definitions)), i.definitions = i.definitions.concat(a(n("kEr+").definitions)), e.exports = i
        },
        jeZI: function(e, t, n) {},
        jsEL: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("q1tI"),
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
                            return t.props.successContent ? r.createElement(s.Eb, {
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
                            }, r.createElement(s.W, {
                                type: s.Vb.Strong
                            }, t.props.successContent)) : null
                        }, t.renderError = function() {
                            return t.props.errorContent ? r.createElement(s.Eb, {
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
                            }, r.createElement(s.W, {
                                type: s.Vb.Strong,
                                color: s.O.Error
                            }, t.props.errorContent)) : null
                        }, t.onSubmit = function() {
                            t.props.onSubmit()
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return this.props.successContent ? r.createElement(o.a, {
                            onClickOut: this.props.onClose
                        }, r.createElement(s.Eb, {
                            padding: 2,
                            background: s.r.Base,
                            className: "clip-modal"
                        }, this.renderSuccess(), r.createElement(s.Xa, {
                            display: s.X.Flex,
                            justifyContent: s.Wa.Center
                        }, r.createElement(s.Xa, {
                            margin: {
                                x: 1
                            }
                        }, r.createElement(s.z, {
                            "data-test-selector": l.CANCEL_BUTTON,
                            onClick: this.props.onClose
                        }, Object(a.d)("Close", "ClipsModal")))))) : r.createElement(o.a, {
                            onClickOut: this.props.onClose
                        }, r.createElement(s.Eb, {
                            padding: 2,
                            background: s.r.Base,
                            className: "clip-modal"
                        }, r.createElement(s.Eb, {
                            "data-test-selector": l.TITLE,
                            borderBottom: !0,
                            margin: {
                                bottom: 2
                            },
                            padding: {
                                bottom: 1
                            }
                        }, this.props.title), r.createElement(s.Eb, {
                            "data-test-selector": l.MAIN_BODY,
                            borderBottom: !0,
                            margin: {
                                bottom: 2
                            },
                            padding: {
                                bottom: 2
                            }
                        }, this.renderError(), this.props.body), r.createElement(s.Xa, {
                            display: s.X.Flex,
                            justifyContent: s.Wa.Center
                        }, r.createElement(s.Xa, {
                            margin: {
                                x: 1
                            }
                        }, r.createElement(s.z, {
                            "data-test-selector": l.CANCEL_BUTTON,
                            type: s.F.Text,
                            onClick: this.props.onClose
                        }, Object(a.d)("Cancel", "ClipsModal"))), r.createElement(s.Xa, {
                            margin: {
                                x: 1
                            }
                        }, r.createElement(s.z, {
                            "data-test-selector": l.SUBMIT_BUTTON,
                            type: this.props.buttonType ? this.props.buttonType : s.F.Default,
                            onClick: this.onSubmit,
                            disabled: this.props.submitDisabled
                        }, this.props.buttonContent), this.props.isLoading && r.createElement(s.Za, {
                            delay: 0
                        })))))
                    }, t
                }(r.Component),
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
                            return t.props.isTemporary ? r.createElement(s.W, {
                                type: s.Vb.H5,
                                ellipsis: !0
                            }, Object(a.d)("Timeout this Clip Creator for 24 hours from Your Channel", "ClipsModalBanUser")) : r.createElement(s.W, {
                                type: s.Vb.H5,
                                ellipsis: !0
                            }, Object(a.d)("Ban this Clip Creator from Your Channel", "ClipsModalBanUser"))
                        }, t.renderBodyText = function() {
                            return t.props.isTemporary ? r.createElement(s.W, null, Object(a.d)("{clipCreator} will temporarily be timed out from creating clips and chatting in your channel for 24 hours.", {
                                clipCreator: t.props.targetUser.displayName
                            }, "ClipsModalBanUser")) : r.createElement(s.W, null, Object(a.d)("{clipCreator} will be permanently banned from creating clips and chatting in your channel.", {
                                clipCreator: t.props.targetUser.displayName
                            }, "ClipsModalBanUser"))
                        }, t.renderButtonText = function() {
                            return t.props.isTemporary ? Object(a.d)("Timeout User", "ClipsModalBanUser") : Object(a.d)("Ban User", "ClipsModalBanUser")
                        }, t.renderSuccess = function() {
                            return t.state.hasSucceeded ? Object(a.d)("Success!", "ClipsModalBanUser") : null
                        }, t.renderFailure = function() {
                            return t.state.hasErrored ? t.props.isTemporary ? Object(a.d)("There was a problem timing out this clip creator", "ClipsModalBanUser") : Object(a.d)("There was a problem banning this clip creator", "ClipsModalBanUser") : null
                        }, t.banUser = function() {
                            return i.__awaiter(t, void 0, void 0, function() {
                                var e, t, n;
                                return i.__generator(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            this.setState({
                                                isLoading: !0,
                                                hasSucceeded: !1,
                                                hasErrored: !1
                                            }), e = this.props.targetUser.login, t = this.props.isTemporary ? this.props.banUserMutation(e, p) : this.props.banUserMutation(e), i.label = 1;
                                        case 1:
                                            return i.trys.push([1, 3, , 4]), [4, t];
                                        case 2:
                                            return !(n = i.sent().banUserFromChatRoom) || n.error ? this.setState({
                                                hasErrored: !0,
                                                isLoading: !1
                                            }) : this.setState({
                                                hasSucceeded: !0,
                                                isLoading: !1
                                            }), [3, 4];
                                        case 3:
                                            return i.sent(), this.setState({
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
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return r.createElement(c, {
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
                }(r.Component),
                h = Object(u.b)("ClipsModalBanUser")(Object(d.a)(function(e) {
                    return {
                        channelID: e.broadcasterID
                    }
                })(m)),
                g = n("yR8l"),
                f = n("vUXZ");

            function v(e) {
                return Object(g.a)(f, e)
            }
            var k = n("DJtx"),
                b = (n("n9Ey"), {
                    isLoading: !1,
                    hasErrored: !1,
                    hasSucceeded: !1
                }),
                y = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.onDeleteClick = function() {
                            return i.__awaiter(n, void 0, void 0, function() {
                                return i.__generator(this, function(e) {
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
                        }, n.state = b, n
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = [r.createElement(s.W, {
                            key: "title",
                            type: s.Vb.H4
                        }, Object(a.d)("Delete This Clip", "ClipsModalDelete")), r.createElement(s.Xa, {
                            key: "message",
                            margin: {
                                top: 1
                            }
                        }, r.createElement(s.W, {
                            type: s.Vb.P,
                            color: s.O.Alt2
                        }, Object(a.d)("This clip will be permanently deleted.", "ClipsModalDelete")))];
                        if (!this.props.data.clip) return null;
                        var t = null;
                        this.props.data.clip.curator && (t = r.createElement("span", null, " • ", Object(a.d)("Clipped by {curator}", {
                            curator: this.props.data.clip.curator.login
                        }, "ClipsModalDelete")));
                        var n = r.createElement(s.Eb, {
                            display: s.X.Flex,
                            flexWrap: s.Ba.NoWrap
                        }, r.createElement(s.Xa, {
                            className: "clips-modal-delete__thumb",
                            margin: {
                                right: 1
                            }
                        }, r.createElement(s.o, {
                            ratio: s.p.Aspect16x9
                        }, r.createElement("img", {
                            src: this.props.data.clip.thumbnailURL
                        }))), r.createElement(s.Xa, null, r.createElement(s.W, {
                            type: s.Vb.H5
                        }, this.props.data.clip.title), r.createElement(s.W, {
                            color: s.O.Alt2
                        }, Object(a.d)("{created, date, medium}", {
                            created: new Date(this.props.data.clip.createdAt)
                        }, "ClipsModalDelete"), t), r.createElement(s.W, {
                            color: s.O.Alt2
                        }, Object(a.d)("{viewCount, number} views", {
                            viewCount: this.props.data.clip.viewCount
                        }, "ClipsModalDelete"))));
                        return r.createElement(c, {
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
                }(r.Component),
                C = Object(g.a)(k)(v({
                    props: function(e) {
                        return {
                            deleteClip: function(t) {
                                return i.__awaiter(void 0, void 0, void 0, function() {
                                    var n;
                                    return i.__generator(this, function(i) {
                                        switch (i.label) {
                                            case 0:
                                                return i.trys.push([0, 2, , 3]), [4, e.mutate({
                                                    variables: {
                                                        input: {
                                                            slugs: [t]
                                                        }
                                                    }
                                                })];
                                            case 1:
                                                return i.sent(), e.ownProps.onDelete && e.ownProps.onDelete(t), [3, 3];
                                            case 2:
                                                throw n = i.sent(), a.k.error(n, "Failed to delete clip"), n;
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
                            return i.__awaiter(n, void 0, void 0, function() {
                                return i.__generator(this, function(e) {
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
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = r.createElement(s.W, {
                            type: s.Vb.P
                        }, Object(a.d)("This clip and all other clips created from the same video will be permanently deleted.", "ClipsModalDeleteAll"));
                        return r.createElement(c, {
                            onSubmit: this.deleteAll,
                            onClose: this.props.onClose,
                            title: r.createElement(s.W, {
                                type: s.Vb.H4
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
                }(r.Component),
                E = Object(S.compose)(Object(u.b)("ClipsModalDeleteAll"), v({
                    props: function(e) {
                        return {
                            deleteAllClips: function(t, n) {
                                return i.__awaiter(void 0, void 0, void 0, function() {
                                    var r, o, s;
                                    return i.__generator(this, function(i) {
                                        switch (i.label) {
                                            case 0:
                                                return i.trys.push([0, 6, , 7]), r = void 0, n ? [4, e.mutate({
                                                    variables: {
                                                        input: {
                                                            videoID: n
                                                        }
                                                    }
                                                })] : [3, 2];
                                            case 1:
                                                return o = i.sent(), r = o.data, [3, 5];
                                            case 2:
                                                return t ? [4, e.mutate({
                                                    variables: {
                                                        input: {
                                                            broadcastID: t
                                                        }
                                                    }
                                                })] : [3, 4];
                                            case 3:
                                                return o = i.sent(), r = o.data, [3, 5];
                                            case 4:
                                                throw new Error("Invalid broadcastID specified for deleteAllClips");
                                            case 5:
                                                return e.ownProps.onDeleteAll && e.ownProps.onDeleteAll(r.deleteClips.clips), [3, 7];
                                            case 6:
                                                throw s = i.sent(), a.k.error(s, "Failed to delete clips from VOD"), s;
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
                I = {
                    isLoading: !1,
                    hasErrored: !1,
                    hasSucceeded: !1
                },
                R = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.renderSuccess = function() {
                            return n.state.hasSucceeded ? Object(a.d)("Clips successfully deleted.", "ClipsModalBatchDelete") : null
                        }, n.renderError = function() {
                            return n.state.hasErrored ? Object(a.d)("There was a problem deleting this clip.", "ClipsModalBatchDelete") : null
                        }, n.onDeleteClick = function() {
                            return i.__awaiter(n, void 0, void 0, function() {
                                return i.__generator(this, function(e) {
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
                        }, n.state = I, n
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = r.createElement(s.W, {
                                type: s.Vb.H4
                            }, Object(a.d)("Delete these clips?", "ClipsModalBatchDelete")),
                            t = r.createElement(s.W, {
                                type: s.Vb.P
                            }, Object(a.d)("These clips will be permanently deleted. Are you sure?", "ClipsModalBatchDelete"));
                        return r.createElement(c, {
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
                }(r.Component),
                O = v({
                    props: function(e) {
                        return {
                            deleteClips: function() {
                                return i.__awaiter(void 0, void 0, void 0, function() {
                                    var t;
                                    return i.__generator(this, function(n) {
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
                                                throw t = n.sent(), a.k.error(t, "Failed to delete clips"), t;
                                            case 3:
                                                return [2]
                                        }
                                    })
                                })
                            }
                        }
                    }
                })(R);
            n.d(t, "a", function() {
                return c
            }), n.d(t, "b", function() {
                return h
            }), n.d(t, "d", function() {
                return C
            }), n.d(t, "e", function() {
                return E
            }), n.d(t, "c", function() {
                return O
            })
        },
        "kEr+": function(e, t, n) {
            var i = {
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
            i.loc.source = {
                body: '#import "twilight/features/tags/models/tag-fragment.gql"\nfragment game on Game {\nid\nname\nviewersCount\ndisplayName\nboxArtURL(width: 188 height: 250)\ngameTags: tags(tagType: CONTENT) {\n...tagFragment\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var r = {};
            i.definitions = i.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !r[t] && (r[t] = !0, !0)
                })
            }(n("iiOx").definitions)), e.exports = i
        },
        "kF1+": function(e, t, n) {},
        "kRI/": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            }), n.d(t, "b", function() {
                return r
            }), n.d(t, "c", function() {
                return p
            }), n.d(t, "d", function() {
                return m
            }), n.d(t, "e", function() {
                return h
            });
            var i, r, a, o = n("mrSG"),
                s = n("/7QA"),
                l = n("DMoW"),
                c = n("yI6f"),
                d = n("3lt/");

            function u(e) {
                s.p.tracking.track(d.SpadeEventType.RecFeedbackClick, o.__assign({}, e))
            }

            function p(e) {
                u({
                    section: a.TwitchHome,
                    item_page: d.PageviewMedium.TwitchHome,
                    feedback_type: null,
                    feedbacked_item_id: null,
                    feedback_action: null,
                    feedback_reason: null,
                    item_name: null,
                    click_step: e.clickStep,
                    clicked_item_id: e.clickedItemID,
                    item_tracking_id: e.itemTrackingID,
                    item_position: e.itemPosition,
                    row_position: e.rowPosition,
                    reason_type: e.reasonType,
                    reason_target: e.reasonTarget,
                    reason_target_type: e.reasonTargetType,
                    row_name: e.rowName,
                    model_tracking_id: e.modelTrackingID,
                    clicked_content_type: e.clickedContentType
                })
            }

            function m(e) {
                u({
                    section: e.clickStep === i.SettingsChange ? null : a.TwitchHome,
                    item_page: e.clickStep === i.SettingsChange ? d.PageviewMedium.Settings : d.PageviewMedium.TwitchHome,
                    item_name: null,
                    click_step: e.clickStep,
                    feedback_type: e.feedbackType,
                    feedbacked_item_id: e.feedbackedItemID,
                    feedback_action: e.feedbackAction,
                    feedback_reason: e.feedbackReason,
                    clicked_item_id: e.clickedItemID,
                    item_tracking_id: e.itemTrackingID,
                    item_position: e.itemPosition,
                    row_position: e.rowPosition,
                    reason_type: e.reasonType,
                    reason_target: e.reasonTarget,
                    reason_target_type: e.reasonTargetType,
                    row_name: e.rowName,
                    model_tracking_id: e.modelTrackingID,
                    clicked_content_type: e.clickedContentType
                })
            }

            function h(e) {
                u({
                    click_step: i.SettingsChange,
                    item_page: d.PageviewMedium.Settings,
                    feedback_action: r.Remove,
                    feedback_type: function(e) {
                        switch (e) {
                            case l.M.CATEGORY:
                                return c.b.Game;
                            case l.M.CHANNEL:
                                return c.b.Live;
                            case l.M.SHELF:
                                return c.b.Shelf;
                            case l.M.VOD:
                                return c.b.Vod;
                            case l.M.UNSPECIFIED:
                                return null;
                            default:
                                return e
                        }
                    }(e.feedbackType),
                    section: null,
                    clicked_item_id: null,
                    item_tracking_id: null,
                    item_position: null,
                    row_position: null,
                    reason_type: null,
                    reason_target: null,
                    reason_target_type: null,
                    row_name: null,
                    model_tracking_id: null,
                    clicked_content_type: null,
                    item_name: e.itemName,
                    feedbacked_item_id: e.feedbackedItemID,
                    feedback_reason: e.feedbackReason
                })
            }! function(e) {
                e.Ellipsis = "ellipsis", e.NotInterested = "not_interested", e.Close = "close", e.Submit = "submit", e.PostSubmit = "post_submit", e.SettingsChange = "settings_change"
            }(i || (i = {})),
            function(e) {
                e.Add = "add", e.Remove = "remove", e.Undo = "undo", e.Manage = "manage"
            }(r || (r = {})),
            function(e) {
                e.LeftNav = "leftnav", e.Carousel = "carousel", e.TwitchHome = "twitch_home"
            }(a || (a = {}))
        },
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
        m493: function(e, t, n) {},
        "n/Dx": function(e, t, n) {},
        n9Ey: function(e, t, n) {},
        nsVP: function(e, t, n) {
            var i = {
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
                    end: 328
                }
            };
            i.loc.source = {
                body: '#import "twilight/pages/front/queries/shelf-fragment.gql"\nquery Shelves($requestID: String! $platform: String! $langWeightedCCU: Boolean $limit: Int $itemsPerRow: Int) {\nshelves(requestID: $requestID platform: $platform langWeightedCCU: $langWeightedCCU first: $limit itemsPerRow: $itemsPerRow) {\nedges {\nnode {\n...shelf\n}\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var r = {};
            i.definitions = i.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !r[t] && (r[t] = !0, !0)
                })
            }(n("HXRw").definitions)), e.exports = i
        },
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
            var i = n("mrSG"),
                r = n("q1tI"),
                a = n("/7QA"),
                o = n("Ue10"),
                s = (n("1mcJ"), function(e) {
                    return r.createElement(o.Xa, i.__assign({
                        className: "drops-badge",
                        position: o.jb.Absolute,
                        attachTop: !0,
                        attachRight: !0
                    }, Object(o.jc)(e)), r.createElement(o.Yb, {
                        direction: o.ac.Top,
                        align: o.Zb.Right,
                        label: Object(a.d)("Offers in-game Drops", "DropsBadge")
                    }, r.createElement(o.Eb, {
                        className: "drops-badge__drops-icon",
                        position: o.jb.Relative,
                        padding: {
                            top: .5,
                            right: .5,
                            bottom: 3,
                            left: 3
                        },
                        overflow: o.cb.Hidden,
                        color: o.O.Overlay,
                        zIndex: o.ic.Default
                    }, r.createElement(o.U, {
                        type: o.V.Inherit,
                        hoverColorInherit: !0,
                        to: "https://help.twitch.tv/customer/en/portal/articles/2754380-how-to-earn-drops"
                    }, r.createElement(o.sb, {
                        asset: o.tb.Drops
                    })))))
                }),
                l = n("0LAi"),
                c = new Set(["alt", "src", "srcSet", "sizes", "onError", "onLoad", "refHandler"]);

            function d(e) {
                for (var t = {}, n = 0, i = Object.keys(e); n < i.length; n++) {
                    var r = i[n];
                    c.has(r) && (t[r] = e[r])
                }
                return t
            }
            var u = function(e) {
                var t;
                return e.placeholder ? r.createElement(r.Fragment, null, r.createElement(o.Xa, {
                    margin: {
                        bottom: .5
                    }
                }, r.createElement(o.o, {
                    ratio: o.p.Aspect3x4
                }, r.createElement(o.ib, null))), r.createElement(o.W, null, r.createElement(o.ib, {
                    width: 150
                })), r.createElement(o.W, {
                    fontSize: o.Ca.Size7
                }, r.createElement(o.ib, {
                    width: 100
                }))) : (t = r.createElement(r.Fragment, null, r.createElement(o.Xa, {
                    className: "tw-box-art-card__image " + (e.unavailable && !e.disabled ? "tw-box-art-card__image--unavailable" : ""),
                    "data-test-selector": "tw-card-image",
                    "data-a-target": "tw-card-image"
                }, r.createElement(o.I, i.__assign({
                    aspect: o.p.BoxArt,
                    borderRadius: o.x.Medium
                }, d(e)))), r.createElement(o.H, null, r.createElement(o.Xa, {
                    display: o.X.Flex
                }, r.createElement(o.Xa, {
                    "data-test-selector": "tw-card-title",
                    "data-a-target": "tw-card-title",
                    flexGrow: 1,
                    flexShrink: 1,
                    margin: {
                        top: .5
                    },
                    ellipsis: !0
                }, r.createElement(o.W, {
                    className: "tw-box-art-card__title",
                    type: o.Vb.H3,
                    fontSize: o.Ca.Size5,
                    lineHeight: o.Ya.Body,
                    ellipsis: !0
                }, e.title)), e.contextualCardActionProps && r.createElement(o.Xa, {
                    margin: {
                        top: .5
                    },
                    flexGrow: 0,
                    flexShrink: 0
                }, r.createElement(e.contextualCardActionProps.component, i.__assign({}, e.contextualCardActionProps.props)))), r.createElement(o.W, {
                    color: o.O.Alt2,
                    ellipsis: !0
                }, e.info))), (e.linkTo || e.onClick || e.disabled) && (t = r.createElement(o.T, {
                    className: "tw-box-art-card__link " + (e.disabled ? "tw-box-art-card__link--disabled" : ""),
                    "data-a-target": "tw-box-art-card-link",
                    disabled: e.disabled,
                    download: e.download,
                    linkTo: e.linkTo,
                    ariaLabel: e.title,
                    blurAfterClick: e.blurAfterClick,
                    onClick: e.onClick,
                    renderLink: e.renderLink,
                    targetBlank: e.targetBlank,
                    tabIndex: e.tabIndex
                }, t)), r.createElement("div", i.__assign({
                    className: "tw-box-art-card"
                }, Object(o.jc)(e)), r.createElement(o.G, {
                    key: e.title
                }, t), e.tagListProps && 0 !== e.tagListProps.tags.length && r.createElement(o.Xa, {
                    margin: {
                        top: .5
                    }
                }, r.createElement(l.a, i.__assign({}, e.tagListProps, {
                    tagNumberLimit: 3
                }))), !0 === e.showDropsBadge && r.createElement(s, null)))
            };
            n.d(t, !1, function() {
                return d
            }), n.d(t, "a", function() {
                return u
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
            var i = n("+GjP"),
                r = "https://www.facebook.com/sharer/sharer.php",
                a = "https://www.twitter.com/share",
                o = "https://www.reddit.com/submit",
                s = "https://vk.com/share.php";

            function l(e) {
                return Object(i.e)(r, {
                    u: e
                })
            }

            function c(e, t) {
                return Object(i.e)(a, {
                    url: e,
                    text: t
                })
            }

            function d(e, t) {
                return Object(i.e)(o, {
                    url: e,
                    title: t
                })
            }

            function u(e) {
                return Object(i.e)(s, {
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
            var i = n("mrSG"),
                r = n("q1tI"),
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
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return r.createElement(s.Xa, i.__assign({
                            position: s.jb.Relative,
                            className: "selectable-input-wrapper"
                        }, Object(s.jc)(this.props)), r.createElement(s.Ra, {
                            type: s.Ta.Text,
                            value: this.props.text,
                            readOnly: !0,
                            onFocus: this.selectOnFocus,
                            icon: this.props.iconAsset,
                            id: this.props.id
                        }), this.props.children)
                    }, t
                }(r.Component)),
                c = Object(a.compose)(Object(o.b)("SelectableInput"))(l)
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
            var i, r = n("mrSG"),
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
            }(i || (i = {}));
            var h = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = {
                            margin: {
                                right: 1
                            }
                        },
                        t = {};
                    return this.props.asBalloon && (t = {
                        justifyContent: p.Wa.Between
                    }, e = {}), a.createElement(p.Xa, r.__assign({
                        className: "clips-social-share",
                        display: p.X.Flex,
                        flexWrap: p.Ba.NoWrap
                    }, t, {
                        "data-test-selector": i.MainContainer
                    }), a.createElement(p.Xa, r.__assign({
                        display: p.X.InlineBlock
                    }, e, {
                        "data-test-selector": i.DownloadButtonContainer
                    }), a.createElement(u.a, {
                        broadcasterLogin: this.props.clip.broadcaster && this.props.clip.broadcaster.login || "",
                        broadcasterId: this.props.clip.broadcaster && this.props.clip.broadcaster.id || "",
                        slug: this.props.clip.slug,
                        pageType: this.props.pageType
                    })), this.renderSocialButton(e, i.ShareButtonTwitter, o.b.Twitter, {
                        tt_medium: "twtr"
                    }), this.renderSocialButton(e, i.ShareButtonFacebook, o.b.Facebook, {
                        tt_medium: "fb"
                    }), this.renderSocialButton(e, i.ShareButtonReddit, o.b.Reddit, {
                        tt_medium: "redt"
                    }), this.renderSocialButton(e, i.ShareButtonCopy, o.b.Copy))
                }, t.prototype.renderSocialButton = function(e, t, n, i) {
                    var u = Object(s.e)(this.props.clip.url, i);
                    return this.props.pageType === l.PageviewLocation.ClipsWatchPage && this.props.clip.broadcaster && this.props.clip.broadcaster.login && (u = Object(s.e)(Object(d.a)(this.props.clip.slug, this.props.clip.broadcaster.login), i)), a.createElement(p.Xa, r.__assign({
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
                return i
            }), n.d(t, "a", function() {
                return d
            });
            var i, r = n("mrSG"),
                a = n("q1tI"),
                o = n("/7QA"),
                s = n("Jxh/"),
                l = n("r62z"),
                c = n("Ue10");
            n("jeZI");
            ! function(e) {
                e[e.Twitter = 0] = "Twitter", e[e.Reddit = 1] = "Reddit", e[e.VKontakte = 2] = "VKontakte", e[e.Facebook = 3] = "Facebook", e[e.Copy = 4] = "Copy", e[e.CopyInput = 5] = "CopyInput", e[e.Download = 6] = "Download"
            }(i || (i = {}));
            var d = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.renderLink = function() {
                        var e = "social-button__link " + n.addSocialClassModifier("social-button__link");
                        return n.props.type === i.Download ? a.createElement("a", r.__assign({
                            href: n.props.url,
                            target: "_blank",
                            className: e,
                            onClick: n.onShareClickHandler
                        }, Object(c.jc)(n.props), {
                            download: n.props.text
                        }), n.renderIcon()) : n.isLink() ? a.createElement("a", r.__assign({
                            href: n.getLinkTarget(),
                            target: "_blank",
                            className: e,
                            onClick: n.onShareClickHandler
                        }, Object(c.jc)(n.props)), n.renderIcon()) : a.createElement("button", r.__assign({
                            onClick: n.copyPageUrl,
                            onMouseLeave: n.clearIsCopiedStatus,
                            className: e
                        }, Object(c.jc)(n.props)), n.renderIcon())
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
                        return a.createElement(c.Xa, {
                            className: "social-button__icon " + n.addSocialClassModifier("social-button__icon"),
                            display: c.X.Flex,
                            alignItems: c.f.Center,
                            justifyContent: c.Wa.Center
                        }, a.createElement(c.sb, {
                            asset: e
                        }))
                    }, n.isLink = function() {
                        return n.props.type !== i.Copy
                    }, n.getTooltipFromType = function() {
                        switch (n.props.type) {
                            case i.Twitter:
                                return "Twitter";
                            case i.Reddit:
                                return "Reddit";
                            case i.Facebook:
                                return "Facebook";
                            case i.VKontakte:
                                return "VKontakte";
                            case i.Download:
                                return Object(o.d)("Download", "SocialButton");
                            case i.Copy:
                                return n.state.isCopied ? Object(o.d)("Copied", "SocialButton") : Object(o.d)("Copy to clipboard", "SocialButton");
                            default:
                                return ""
                        }
                    }, n.getAssetFromType = function() {
                        switch (n.props.type) {
                            case i.Twitter:
                                return c.tb.Twitter;
                            case i.Facebook:
                                return c.tb.Facebook;
                            case i.VKontakte:
                                return c.tb.VKontakte;
                            case i.Reddit:
                                return c.tb.Reddit;
                            case i.Download:
                                return c.tb.Download;
                            case i.Copy:
                            default:
                                return c.tb.Copy
                        }
                    }, n.addSocialClassModifier = function(e) {
                        switch (n.props.type) {
                            case i.Twitter:
                                return e + "--twitter";
                            case i.Reddit:
                                return e + "--reddit";
                            case i.Facebook:
                                return e + "--facebook";
                            case i.VKontakte:
                                return e + "--vkontakte";
                            case i.Download:
                                return e + "--download";
                            case i.Copy:
                                return e + "--copy";
                            default:
                                return ""
                        }
                    }, n.getLinkTarget = function() {
                        var e = n.props,
                            t = e.text,
                            r = e.type,
                            a = n.getUrl(),
                            o = t || "";
                        switch (r) {
                            case i.Reddit:
                                return Object(l.b)(a, o);
                            case i.VKontakte:
                                return Object(l.d)(a);
                            case i.Facebook:
                                return Object(l.a)(a);
                            case i.Twitter:
                                return Object(l.c)(a, o);
                            default:
                                return ""
                        }
                    }, n.state = {
                        isCopied: !1
                    }, n
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(c.Xa, {
                        className: "social-button"
                    }, a.createElement(c.Yb, {
                        label: this.getTooltipFromType(),
                        direction: c.ac.Bottom
                    }, this.renderLink()))
                }, t
            }(a.Component)
        },
        x75U: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return c
            }), n.d(t, "b", function() {
                return d
            });
            var i = n("mrSG"),
                r = n("17x9"),
                a = n("q1tI"),
                o = n("2xye"),
                s = n("yI6f"),
                l = n("kRI/"),
                c = {
                    cardIDtoItemTrackingIDMap: r.object,
                    trackTitleClick: r.func,
                    trackTitleImpression: r.func,
                    trackImpression: r.func,
                    trackClick: r.func,
                    trackRecFeedbackPreModalClick: r.func,
                    trackRecFeedbackClickStep: r.func,
                    trackRecFeedbackClickStepPostSubmit: r.func
                };

            function d() {
                return function(e) {
                    return function(t) {
                        function n(e) {
                            var n = t.call(this, e) || this;
                            return n.feedbackDataMap = {}, n.getChildContext = function() {
                                return {
                                    trackTitleClick: n.trackTitleClick,
                                    trackTitleImpression: n.trackTitleImpression,
                                    trackRecFeedbackPreModalClick: n.trackRecFeedbackPreModalClick,
                                    trackRecFeedbackClickStep: n.trackRecFeedbackClickStep,
                                    trackRecFeedbackClickStepPostSubmit: n.trackRecFeedbackClickStepPostSubmit,
                                    trackImpression: n.trackImpression,
                                    trackClick: n.trackClick,
                                    cardIDtoItemTrackingIDMap: n.state.cardIDtoItemTrackingIDMap
                                }
                            }, n.mapShelfCardsToRequestIDs = function(e, t, n) {
                                return void 0 === n && (n = {}), e.reduce(function(e, n) {
                                    return n.node && !e[n.node.id] && (e[n.node.id] = t), e
                                }, n)
                            }, n.trackTitleImpression = function(e) {
                                var t = Object(s.g)(e.title),
                                    i = t.reasonType,
                                    r = t.reasonTarget,
                                    a = t.rowName,
                                    l = Object(s.f)(),
                                    c = {
                                        component: s.a.Header,
                                        contentEdge: null,
                                        itemTrackingID: l,
                                        itemPosition: null,
                                        reasonType: i,
                                        reasonTarget: r,
                                        reasonTargetType: null,
                                        requestID: n.props.requestID,
                                        rowName: a,
                                        rowPosition: n.props.position,
                                        tagID: null,
                                        filtered: !1,
                                        tagSet: "[]",
                                        tagStreamerSet: "[]"
                                    };
                                Object(s.i)(c, o.PageviewContent.HeaderGameName), n.setState({
                                    headerImpressionID: l
                                })
                            }, n.trackTitleClick = function() {
                                var e = n.props.shelf,
                                    t = Object(s.g)(e.title),
                                    i = t.reasonType,
                                    r = t.reasonTarget,
                                    a = t.reasonTargetType,
                                    l = t.rowName,
                                    c = {
                                        component: s.a.Header,
                                        contentEdge: null,
                                        itemTrackingID: n.state.headerImpressionID,
                                        requestID: n.state.headerRequestID,
                                        itemPosition: null,
                                        rowPosition: n.props.position,
                                        reasonType: i,
                                        reasonTarget: r,
                                        reasonTargetType: a,
                                        rowName: l,
                                        tagID: null,
                                        filtered: !1,
                                        tagSet: "[]",
                                        tagStreamerSet: "[]"
                                    };
                                Object(s.h)(c, o.PageviewContent.HeaderGameName)
                            }, n.trackImpression = function(e, t, i, r) {
                                if (t.node && !n.state.cardIDtoItemTrackingIDMap[t.node.id]) {
                                    var a = Object(s.f)(),
                                        o = Object(s.g)(e.title),
                                        l = o.reasonType,
                                        c = o.reasonTarget,
                                        d = o.reasonTargetType,
                                        u = o.rowName,
                                        p = {
                                            component: s.a.Card,
                                            contentEdge: t,
                                            itemTrackingID: a,
                                            itemPosition: i,
                                            reasonType: l,
                                            reasonTarget: c,
                                            reasonTargetType: d,
                                            requestID: n.state.cardIDtoRequestIDMap[t.node.id],
                                            rowName: u,
                                            rowPosition: n.props.position,
                                            tagID: null,
                                            filtered: !1,
                                            tagSet: JSON.stringify(r),
                                            tagStreamerSet: "[]"
                                        };
                                    Object(s.i)(p), n.setState(function(e) {
                                        var n = e.cardIDtoItemTrackingIDMap;
                                        return n[t.node.id] = a, {
                                            cardIDtoItemTrackingIDMap: n
                                        }
                                    })
                                }
                            }, n.trackClick = function(e, t, i, r, a, o) {
                                if (t.node) {
                                    var l = n.state,
                                        c = l.cardIDtoRequestIDMap,
                                        d = l.cardIDtoItemTrackingIDMap,
                                        u = Object(s.g)(e.title),
                                        p = u.reasonType,
                                        m = u.reasonTarget,
                                        h = u.reasonTargetType,
                                        g = u.rowName,
                                        f = {
                                            component: s.a.Card,
                                            contentEdge: t,
                                            itemTrackingID: d[t.node.id] || null,
                                            requestID: c[t.node.id],
                                            itemPosition: i,
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
                                    Object(s.h)(f, r)
                                }
                            }, n.trackRecFeedbackPreModalClick = function(e, t, r, a) {
                                var o, c = n.state.cardIDtoItemTrackingIDMap,
                                    d = Object(s.g)(t.title),
                                    u = d.reasonType,
                                    p = d.reasonTarget,
                                    m = d.reasonTargetType,
                                    h = d.rowName,
                                    g = Object(s.e)(r),
                                    f = g.itemID,
                                    v = g.contentType,
                                    k = f || t.id,
                                    b = {
                                        clickStep: e,
                                        itemTrackingID: r && r.node ? c[r.node.id] : null,
                                        itemPosition: a,
                                        rowPosition: n.props.position,
                                        reasonType: u,
                                        reasonTarget: p,
                                        reasonTargetType: m,
                                        rowName: h,
                                        modelTrackingID: r ? r.trackingID : null,
                                        clickedContentType: v || s.b.Shelf,
                                        clickedItemID: f || t.id
                                    };
                                n.feedbackDataMap = i.__assign({}, n.feedbackDataMap, ((o = {})[k] = b, o)), Object(l.c)(b)
                            }, n.trackRecFeedbackClickStep = function(e, t) {
                                var r, a = i.__assign({}, n.feedbackDataMap[e], {
                                    clickStep: t.clickStep,
                                    feedbackAction: t.feedbackAction,
                                    feedbackType: t.feedbackType,
                                    feedbackedItemID: t.feedbackedItemID,
                                    feedbackReason: t.feedbackReason
                                });
                                n.feedbackDataMap = i.__assign({}, n.feedbackDataMap, ((r = {})[e] = a, r)), Object(l.d)(a)
                            }, n.trackRecFeedbackClickStepPostSubmit = function(e, t) {
                                Object(l.d)(i.__assign({}, n.feedbackDataMap[e], {
                                    clickStep: l.a.PostSubmit,
                                    feedbackAction: t
                                }))
                            }, n.state = {
                                cardIDtoItemTrackingIDMap: {},
                                cardIDtoRequestIDMap: n.mapShelfCardsToRequestIDs(e.shelf.content.edges || [], e.requestID, {}),
                                headerImpressionID: null,
                                headerRequestID: e.requestID
                            }, n
                        }
                        return i.__extends(n, t), n.prototype.componentWillReceiveProps = function(e) {
                            var t = this,
                                n = e.shelf,
                                i = e.requestID;
                            n.content.edges !== this.props.shelf.content.edges && this.setState(function(e) {
                                return {
                                    cardIDtoRequestIDMap: t.mapShelfCardsToRequestIDs(n.content.edges || [], i, e.cardIDtoRequestIDMap)
                                }
                            })
                        }, n.prototype.render = function() {
                            var t = Object(s.g)(this.props.shelf.title).rowName,
                                n = {
                                    trackTitleClick: this.getChildContext().trackTitleClick,
                                    trackTitleImpression: this.getChildContext().trackTitleImpression,
                                    trackRecFeedbackPreModalClick: this.getChildContext().trackRecFeedbackPreModalClick,
                                    trackImpression: this.getChildContext().trackImpression,
                                    trackClick: this.getChildContext().trackClick,
                                    trackRecFeedbackClickStep: this.getChildContext().trackRecFeedbackClickStep,
                                    trackRecFeedbackClickStepPostSubmit: this.getChildContext().trackRecFeedbackClickStepPostSubmit,
                                    shelfTrackingProps: {
                                        item_tracking_id: this.state.headerImpressionID,
                                        item_position: null,
                                        row_name: t,
                                        row_position: this.props.position
                                    }
                                };
                            return a.createElement(e, i.__assign({}, this.props, n))
                        }, n.childContextTypes = c, n
                    }(a.Component)
                }
            }
        },
        y4Ne: function(e, t, n) {},
        yI6f: function(e, t, n) {
            "use strict";
            var i, r, a, o, s, l, c = n("/7QA"),
                d = n("f00E"),
                u = n("2xye"),
                p = n("3sMy"),
                m = function() {
                    return Object(d.b)().substring(0, 16)
                };
            ! function(e) {
                e.TwitchHome = "twitch_home", e.BrowseLiveChannels = "browse_livechannels", e.BrowseCategories = "browse_categories", e.BrowseInCategoryChannels = "browse_incategory_channels"
            }(r || (r = {})),
            function(e) {
                e.Live = "live", e.Clip = "clip", e.Vod = "vod", e.Game = "game", e.Shelf = "shelf"
            }(a || (a = {})),
            function(e) {
                e.Card = "card", e.Header = "header"
            }(o || (o = {})),
            function(e) {
                e.Followed = "followed", e.Watched = "watched", e.Popularity = "popularity", e.Personalized = "personalized"
            }(s || (s = {})),
            function(e) {
                e.Live = "recs_live", e.Vod = "recs_vod", e.Clip = "recs_clip"
            }(l || (l = {}));
            var h = ((i = {})[p.a.TopLiveChannels] = function(e) {
                return {
                    reasonType: s.Popularity,
                    reasonTarget: null,
                    reasonTargetType: a.Live,
                    rowName: e
                }
            }, i[p.a.TopGames] = function(e) {
                return {
                    reasonType: s.Popularity,
                    reasonTarget: null,
                    reasonTargetType: a.Game,
                    rowName: e
                }
            }, i[p.a.TopChannelsPlayingGame] = function(e, t) {
                return {
                    reasonType: s.Popularity,
                    reasonTarget: t.context && t.context.id || null,
                    reasonTargetType: a.Game,
                    rowName: e
                }
            }, i[p.a.TopLiveChannelsYouMayLike] = function(e) {
                return {
                    reasonType: s.Personalized,
                    reasonTarget: null,
                    reasonTargetType: a.Live,
                    rowName: e
                }
            }, i[p.a.TopGamesForYou] = function(e) {
                return {
                    reasonType: s.Personalized,
                    reasonTarget: null,
                    reasonTargetType: a.Game,
                    rowName: e
                }
            }, i[p.a.RecommendedBecauseYouWatchX] = function(e, t) {
                return {
                    reasonType: s.Watched,
                    reasonTarget: t.context && t.context.id || null,
                    reasonTargetType: a.Game,
                    rowName: e
                }
            }, i[p.a.RecommendedBecauseYouFollowX] = function(e, t) {
                return {
                    reasonType: s.Followed,
                    reasonTarget: t.context && t.context.id || null,
                    reasonTargetType: null,
                    rowName: e
                }
            }, i[p.a.GreatNewClipsYouMayHaveMissed] = function(e) {
                return {
                    reasonType: s.Popularity,
                    reasonTarget: null,
                    reasonTargetType: a.Clip,
                    rowName: e
                }
            }, i[p.a.TopNewVideosYouMayHaveMissed] = function(e) {
                return {
                    reasonType: s.Popularity,
                    reasonTarget: null,
                    reasonTargetType: a.Vod,
                    rowName: e
                }
            }, i);

            function g(e) {
                var t = e.key;
                return h[t] ? h[t](t, e) : {
                    reasonType: null,
                    reasonTarget: "",
                    reasonTargetType: null,
                    rowName: t
                }
            }

            function f(e, t) {
                var n = v(e.contentEdge),
                    i = n.itemID,
                    a = n.channelID,
                    o = n.category,
                    s = n.contentType;
                return {
                    component: e.component,
                    request_id: e.requestID,
                    section: r.TwitchHome,
                    model_tracking_id: e.contentEdge && e.contentEdge.trackingID,
                    item_tracking_id: e.itemTrackingID,
                    item_id: i,
                    channel_id: null === a ? null : Number(a),
                    item_position: e.itemPosition,
                    item_subsection: t || null,
                    item_page: u.PageviewMedium.TwitchHome,
                    row_position: e.rowPosition,
                    content_type: s,
                    reason_type: e.reasonType,
                    reason_target: e.reasonTarget,
                    reason_target_type: e.reasonTargetType,
                    row_name: e.rowName,
                    tag_set: e.tagSet,
                    tag_streamer_set: e.tagStreamerSet,
                    filtered: e.filtered,
                    category: o,
                    tag_id: e.tagID
                }
            }

            function v(e) {
                var t, n = null,
                    i = null,
                    r = null,
                    o = e && e.node && e.node.id || "";
                if (e) switch (e.node && e.node.__typename) {
                    case "Stream":
                        n = (t = e.node).broadcaster && t.broadcaster.id, i = a.Live, o = String(t.broadcaster && t.broadcaster.id), r = t.game ? t.game.id : null;
                        break;
                    case "Clip":
                        n = (t = e.node).broadcaster && t.broadcaster.id, i = a.Clip, r = t.game ? t.game.id : null;
                        break;
                    case "Video":
                        n = (t = e.node).owner && t.owner.id, i = a.Vod, r = t.game ? t.game.id : null;
                        break;
                    case "Game":
                        t = e.node, n = null, i = a.Game, r = t.id
                }
                return {
                    itemID: o,
                    channelID: n,
                    category: r,
                    contentType: i
                }
            }

            function k(e, t) {
                var n = f(e, t);
                c.o.track(u.SpadeEventType.ItemClick, n)
            }

            function b(e, t) {
                var n = f(e, t);
                c.o.track(u.SpadeEventType.ItemDisplay, n)
            }

            function y(e) {
                var t = {
                    endpoint: e.endpoint,
                    request_id: e.requestID,
                    section: e.section
                };
                c.o.track(u.SpadeEventType.RecRequestClient, t)
            }
            var C = n("x75U"),
                S = n("A65o");
            n.d(t, "f", function() {
                return m
            }), n.d(t, "c", function() {
                return r
            }), n.d(t, "b", function() {
                return a
            }), n.d(t, "a", function() {
                return o
            }), n.d(t, !1, function() {
                return s
            }), n.d(t, "d", function() {
                return l
            }), n.d(t, "g", function() {
                return g
            }), n.d(t, "e", function() {
                return v
            }), n.d(t, "h", function() {
                return k
            }), n.d(t, "i", function() {
                return b
            }), n.d(t, "j", function() {
                return y
            }), n.d(t, !1, function() {
                return C.a
            }), n.d(t, "k", function() {
                return C.b
            }), n.d(t, !1, function() {
                return S.a
            })
        },
        yLKk: function(e, t, n) {
            var i = {
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
                    end: 353
                }
            };
            i.loc.source = {
                body: '#import "twilight/features/tags/models/tag-fragment.gql"\n#import "twilight/pages/front/queries/user-fragment.gql"\n#import "twilight/pages/front/queries/game-fragment.gql"\nfragment video on Video {\nid\ngame {\n...game\n}\nlengthSeconds\nowner {\n...user\n}\npreviewThumbnailURL(width: 400 height: 225)\npublishedAt\ntitle\nviewCount\ncontentTags {\n...tagFragment\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var r = {};

            function a(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !r[t] && (r[t] = !0, !0)
                })
            }
            i.definitions = i.definitions.concat(a(n("iiOx").definitions)), i.definitions = i.definitions.concat(a(n("P8NS").definitions)), i.definitions = i.definitions.concat(a(n("kEr+").definitions)), e.exports = i
        },
        yWUM: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            });
            var i = "0h0m1s";

            function r(e) {
                if (0 === e) return i;
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