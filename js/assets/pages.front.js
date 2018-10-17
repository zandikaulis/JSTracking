(window.webpackJsonp = window.webpackJsonp || []).push([
    [60], {
        "+PZR": function(e, t, n) {
            "use strict";
            var i = function(e, t) {
                    var n = "https://www.twitch.tv/communities/{communityName}".replace("{communityName}", e);
                    return 'community report (<a href="{link}">{link}</a>) {description}'.replace(/{link}/g, n).replace(/{description}/, t)
                },
                r = n("/7QA");

            function a() {
                return [{
                    id: "other",
                    text: Object(r.d)("Other Terms of Service Violation", "ReportUserModal")
                }]
            }
            n.d(t, "a", function() {
                return i
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
                        return a.createElement(u.yb, {
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
                    }, i.createElement(r.eb, null)), i.createElement(r.H, null, i.createElement(r.Xa, {
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
                    }, i.createElement(r.eb, {
                        width: 40,
                        height: 56
                    })), i.createElement(r.Xa, {
                        display: r.X.InlineBlock,
                        margin: {
                            top: 1
                        }
                    }, i.createElement(r.W, null, i.createElement(r.eb, {
                        width: 150
                    })), i.createElement(r.W, {
                        fontSize: r.Ca.Size7
                    }, i.createElement(r.eb, {
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
            }(i || (i = {})),
            function(e) {
                e.Hidden = "hidden", e.Enter = "enter", e.EnterActive = "enterActive", e.Leave = "leave", e.LeaveActive = "leaveActive", e.Visible = "visible"
            }(r || (r = {}));
            var _, E = function(e) {
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
                            videoStatus: t.showVideo ? r.Visible : r.Hidden
                        }, n
                    }
                    return a.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                        !1 === this.props.showVideo && !0 === e.showVideo ? this.loadVideo() : !0 === this.props.showVideo && !1 === e.showVideo && this.fadeVideoOut()
                    }, t.prototype.render = function() {
                        return o.createElement("div", a.__assign({}, Object(T.cc)(this.props)), o.createElement("div", {
                            onClick: this.onClick,
                            "data-test-selector": i.Wrapper,
                            className: v("featured-content-carousel-featured-item", "featured-content-carousel-featured-item--offset-" + Math.abs(this.props.offsetFromCenter))
                        }, o.createElement(T.yb, {
                            position: T.fb.Relative,
                            borderRadius: T.x.Large,
                            overflow: T.ab.Hidden,
                            elevation: 3,
                            background: T.r.AccentAlt2,
                            fullWidth: !0,
                            fullHeight: !0
                        }, Object(S.d)(this.props.item.imageURL) && o.createElement(T.Xa, {
                            className: "featured-content-carousel-featured-item__logo-image-container",
                            position: T.fb.Absolute,
                            attachBottom: !0,
                            attachLeft: !this.props.isRightSide,
                            attachRight: this.props.isRightSide,
                            margin: 1,
                            zIndex: T.bc.Above,
                            "data-test-selector": i.Logo
                        }, o.createElement(T.S, {
                            src: this.props.item.imageURL,
                            alt: this.props.item.broadcaster.login
                        })), o.createElement(T.yb, {
                            className: v("featured-content-carousel-featured-item__overlay", "featured-content-carousel-featured-item__overlay--offset-" + Math.abs(this.props.offsetFromCenter)),
                            position: T.fb.Absolute,
                            attachTop: !0,
                            attachLeft: !0,
                            attachRight: !0,
                            attachBottom: !0,
                            background: T.r.Overlay
                        }), this.renderVideo(), this.props.item.content.previewImageURL && o.createElement(T.Pa, {
                            fullWidth: !0
                        }, o.createElement(T.S, {
                            src: this.props.item.content.previewImageURL,
                            alt: this.props.item.title,
                            "data-test-selector": i.Image
                        })))))
                    }, t.prototype.renderVideo = function() {
                        if (this.props.item.content.id && this.state.videoStatus !== r.Hidden) {
                            var e = 0;
                            this.state.videoStatus !== r.EnterActive && this.state.videoStatus !== r.Leave && this.state.videoStatus !== r.Visible || (e = 1);
                            var t = {
                                type: y.b.Stream,
                                id: this.props.item.content.id,
                                paused: this.props.shouldPause,
                                showChannelInfoOnHover: !0,
                                onPauseToggled: this.props.onPauseToggled,
                                onPlayerInit: this.fadeVideoIn
                            };
                            return o.createElement(T.Xa, {
                                position: T.fb.Absolute,
                                attachTop: !0,
                                attachLeft: !0,
                                attachRight: !0,
                                attachBottom: !0,
                                zIndex: T.bc.Above,
                                refDelegate: this.props.setDomRef,
                                "data-test-selector": i.Video
                            }, this.state.videoStatus === r.Enter && o.createElement(T.yb, {
                                position: T.fb.Absolute,
                                attachTop: !0,
                                attachLeft: !0,
                                attachRight: !0,
                                attachBottom: !0,
                                display: T.X.Flex,
                                alignItems: T.f.Center,
                                justifyContent: T.Wa.Center,
                                color: T.O.Overlay
                            }, o.createElement(T.Za, {
                                delay: this.props.transitionDuration + 500,
                                size: T.wb.Large,
                                inheritColor: !0
                            })), o.createElement("div", {
                                style: {
                                    transition: "opacity " + this.props.transitionDuration + "ms ease",
                                    opacity: e
                                }
                            }, o.createElement(T.Pa, {
                                fullWidth: !0
                            }, Object(S.c)(t))))
                        }
                    }, t
                }(o.Component),
                O = Object(s.compose)(Object(w.b)("FeaturedItem", {
                    autoReportInteractive: !0
                }))(E),
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
                        return o.createElement(O, a.__assign({}, this.props, {
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
                R = function(e) {
                    return o.createElement(T.yb, {
                        position: T.fb.Absolute,
                        attachLeft: e.left,
                        attachRight: e.right,
                        zIndex: T.bc.Above,
                        borderRadius: T.x.Rounded,
                        color: T.O.Alt2,
                        margin: .5
                    }, o.createElement(T.Ua, a.__assign({
                        type: T.Va.Alpha,
                        blurAfterClick: !0,
                        onClick: e.onClick,
                        borderRadius: T.x.Rounded
                    }, Object(T.cc)(e)), o.createElement(T.Xa, {
                        padding: 1,
                        display: T.X.Flex,
                        alignItems: T.f.Center,
                        justifyContent: T.Wa.Center
                    }, o.createElement(T.ob, {
                        asset: e.right && T.pb.AngleRight || T.pb.AngleLeft,
                        width: 30,
                        height: 30
                    }))))
                },
                N = n("kW4h"),
                D = (n("7D17"), 5),
                x = 200,
                M = 550;
            ! function(e) {
                e.LeftArrow = "featured-content-carousel-left-arrow", e.Placeholder = "featured-content-carousel-placeholder", e.RightArrow = "featured-content-carousel-right-arrow"
            }(_ || (_ = {}));
            var P = function(e) {
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
                                    left: "calc(50% - " + M / 2 + "px)",
                                    zIndex: t.getMedianCount() - t.getOffsetFromCenter(n),
                                    transform: t.transformX(n) + " scale(" + t.transformScalePercent(n) + ")",
                                    transition: "all " + t.options.transitionDuration + "ms ease"
                                },
                                className: v((r = {
                                    "featured-content-carousel__item-container": !0,
                                    "featured-content-carousel__item-container--leaving-or-entering": t.getOffsetFromCenter(n) >= t.getMedianCount()
                                }, r["featured-content-carousel__item-container--offset-" + t.getOffsetFromCenter(n)] = !0, r["featured-content-carousel__item-container--" + t.getPositionString(n)] = !0, r)),
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
                            for (var i = 200, r = 1; r <= t.getNumToDisplay(); r++) i += t.transformScalePercent(r) * M;
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
                        this.props.latencyTracking.reportInteractive(this.getNumToDisplay())
                    }, t.prototype.render = function() {
                        return o.createElement("div", {
                            ref: this.setContainerRef
                        }, o.createElement(T.Xa, {
                            display: T.X.Flex,
                            alignItems: T.f.Center,
                            justifyContent: T.Wa.Center,
                            position: T.fb.Relative,
                            className: "featured-content-carousel"
                        }, o.createElement(R, {
                            left: !0,
                            onClick: this.navigateLeft,
                            "data-test-selector": _.LeftArrow,
                            "data-a-target": "featured-item-left-button"
                        }), o.createElement(R, {
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
                            var i;
                            return o.createElement("div", {
                                key: n + 1,
                                style: {
                                    position: "absolute",
                                    top: 0,
                                    left: "calc(50% - " + M / 2 + "px)",
                                    zIndex: e.getMedianCount() - e.getOffsetFromCenter(n + 1),
                                    transform: e.transformX(n + 1) + " scale(" + e.transformScalePercent(n + 1) + ")"
                                },
                                className: v((i = {
                                    "featured-content-carousel__item-container": !0,
                                    "featured-content-carousel__item-container--leaving-or-entering": e.getOffsetFromCenter(n + 1) >= e.getMedianCount()
                                }, i["featured-content-carousel__item-container--offset-" + e.getOffsetFromCenter(n + 1)] = !0, i["featured-content-carousel__item-container--" + e.getPositionString(n + 1)] = !0, i)),
                                "data-test-selector": _.Placeholder
                            }, o.createElement(T.yb, {
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
                        for (var i = t; i <= n; i++) e.push(this.getItemForSlot(i));
                        return e
                    }, t.prototype.getItemForSlot = function(e) {
                        var t = this.carouselItems.length - this.getMedianCount() + e + this.state.listOffset,
                            n = Object(S.e)(this.carouselItems.length, t),
                            i = Object(S.f)(this.carouselItems.length, t);
                        return this.renderItem(this.carouselItems[n], e, i)
                    }, t
                }(o.Component),
                L = Object(b.compose)(Object(c.a)(N, {
                    options: function() {
                        return {
                            variables: {
                                language: l.p.intl.getLanguageCode(),
                                first: 8,
                                acceptedMature: l.m.get("mature", !1)
                            }
                        }
                    }
                }), Object(w.b)("LoggedInCarousel"))(P);
            var j = Object(f.connect)(function(e) {
                    return {
                        sideNavCollapsed: !e.ui.sideNavExpanded,
                        hasActivePlayer: void 0 !== e.videoPlayer.activeVideoPlayerInstanceRefID
                    }
                })(L),
                F = n("D7An"),
                U = n("TDc0"),
                A = "twilight-onboarding",
                V = "twilight-onboarding-prompt__dismissed";

            function W() {
                return l.p.storage.get(A, !1)
            }
            var B = n("AO3T"),
                z = 3;

            function G(e, t) {
                var n = l.p.experiments.getAssignment(F.b.WebOnboarding);
                return !l.p.storage.get(V, !1) && Object(U.a)(n) && e < z && Object(U.b)(new Date(t))
            }

            function X(e) {
                Object(B.d)({
                    source: e
                }), l.p.storage.set(A, !0), window.location.assign("/hi" + location.search)
            }
            var q = n("Bh3T"),
                H = n("sSlw"),
                Q = n("9pSj"),
                Y = n("MJbm"),
                $ = n("5myU"),
                K = n("ZDlU"),
                J = n("RXle"),
                Z = n("G1cX"),
                ee = n("ZS2+"),
                te = n("kduP"),
                ne = n("JVUd"),
                ie = n("fVj5");
            n("DzyH");
            var re;
            ! function(e) {
                e.Large = "Large", e.Small = "Small"
            }(re || (re = {}));
            var ae = function(e) {
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
                                    return o.createElement(T.U, {
                                        onClick: e.onUndoClick,
                                        "data-test-selector": "hidden-content-undo"
                                    }, o.createElement("strong", null, t))
                                },
                                "x:link-manage": function(e) {
                                    return o.createElement(T.U, {
                                        to: "/settings/recommendations",
                                        targetBlank: !0
                                    }, e)
                                }
                            }, "HiddenContentNotice");
                        return this.state.showError && (t = Object(l.d)("Something went wrong, please <x:link-manage>click here</x:link-manage> to manage your recommendation feedback", {
                            "x:link-manage": function(e) {
                                return o.createElement(T.U, {
                                    to: "/settings/recommendations",
                                    targetBlank: !0,
                                    "data-test-selector": "hidden-content-undo-error"
                                }, e)
                            }
                        }, "HiddenContentNotice")), o.createElement(T.yb, {
                            className: "hidden-content-notice",
                            border: !0,
                            fullWidth: !0,
                            margin: {
                                bottom: 1
                            }
                        }, o.createElement(T.Xa, {
                            padding: {
                                y: 4,
                                x: 2
                            },
                            display: T.X.Flex,
                            justifyContent: T.Wa.Center,
                            alignItems: T.f.Center,
                            flexDirection: T.Aa.Column,
                            fullHeight: !0
                        }, this.props.name && o.createElement(T.Xa, {
                            margin: {
                                bottom: 2
                            }
                        }, o.createElement(T.W, {
                            fontSize: this.props.size === re.Large ? T.Ca.Size3 : T.Ca.Size5
                        }, Object(l.d)("<x:content>Content</x:content> has been removed.", {
                            "x:content": function() {
                                return o.createElement(T.W, {
                                    bold: !0,
                                    italic: !0,
                                    type: T.Ob.Span,
                                    fontSize: e.props.size === re.Large ? T.Ca.Size2 : T.Ca.Size4
                                }, e.props.name)
                            }
                        }, "HiddenContentNotice"))), o.createElement(T.W, {
                            fontSize: this.props.size === re.Large ? T.Ca.Size4 : T.Ca.Size6
                        }, t)), o.createElement(T.ib, {
                            animationDuration: 8,
                            borderRadius: T.x.None,
                            animationDirection: T.jb.Up,
                            onAnimationEnd: this.onTimeout,
                            size: T.kb.ExtraSmall,
                            mask: !0
                        }))
                    }, t
                }(o.Component),
                oe = n("aCAx"),
                se = n("MdYN"),
                le = function(e) {
                    return a.__assign({}, e, {
                        title: e.clipTitle,
                        viewCount: e.clipViewCount,
                        createdAt: e.clipCreatedAt
                    })
                },
                ce = n("GFmA"),
                de = n("oB8h"),
                ue = n("oJov"),
                pe = n("4HIT"),
                me = n("QV0j"),
                he = n("Yurh");

            function ge() {
                return {
                    text: Object(l.d)("I am not interested in the game or category", "FeedbackReason"),
                    contentType: he.a.Category,
                    feedbackType: he.b.NotInterested
                }
            }

            function fe() {
                return Object(l.d)("Other", "FeedbackReason")
            }

            function ve() {
                return Object(l.d)("I am not interested in the channel", "FeedbackReason")
            }
            var be = null;
            var ke = null;
            var ye = null;
            var Ce = null;
            var Se = n("OCR+"),
                we = n("3sMy"),
                Te = n("A65o"),
                _e = Object(Se.a)(),
                Ee = ee.a.wrap(function() {
                    return n.e(134).then(n.bind(null, "GyBV"))
                }, "RecFeedbackButton", {
                    placeholder: null
                }),
                Oe = function(e) {
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
                                    t.trackClick(m.PageviewContent.Tag, i, e.id)
                                });
                                var r = t.props.contentEdge.node;
                                return o.createElement(ue.a, a.__assign({
                                    "data-a-target": "card-" + t.props.itemPosition
                                }, e, {
                                    tagListProps: n,
                                    contextualCardActionProps: t.getFeedbackProps({
                                        vodID: null,
                                        categoryID: r && r.id,
                                        channelID: null,
                                        feedbackReasons: (null === ye && (ye = [ge(), {
                                            text: fe(),
                                            contentType: he.a.Category,
                                            feedbackType: he.b.Other
                                        }]), ye),
                                        hideContent: t.hideContent
                                    })
                                }))
                            }
                            return o.createElement(ce.a, a.__assign({}, e))
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
                                            pathname: pe.a.PopularTag,
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
                                            pathname: pe.a.DirectoryTag,
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
                                            pathname: pe.a.PopularTag,
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
                                i = e.channelID,
                                r = e.categoryID,
                                a = e.vodID,
                                o = e.feedbackReasons,
                                s = e.hideContent;
                            if (_e() && t.props.firstPageLoaded) return {
                                component: Ee,
                                props: {
                                    shelfID: n,
                                    channelID: i,
                                    categoryID: r,
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
                        }, t.trackGameClick = function(e, n, i, r) {
                            e.preventDefault(), e.stopPropagation();
                            var o = "title" === ("IMG" === e.target.tagName ? "boxArt" : "title") ? m.PageviewContent.GameName : m.PageviewContent.GameBoxart,
                                s = a.__assign({}, t.props.shelfCardTrackingProps, {
                                    tag_set: r,
                                    tag_filter_set: [],
                                    tag_streamer_set: []
                                }),
                                c = {
                                    pathname: Object(te.c)(n.name),
                                    state: a.__assign({
                                        content: o,
                                        content_index: i,
                                        medium: m.PageviewMedium.TwitchHome
                                    }, s)
                                };
                            t.trackClick(o, r), l.p.history.push(c.pathname, c.state)
                        }, t.trackClick = function(e, n, i) {
                            return t.props.trackClick(e, n, i)
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
                        return e && this.props.contentEdge.node ? this.state.showContent ? o.createElement(T.Xa, {
                            key: this.props.contentEdge.node.id,
                            padding: {
                                bottom: 2
                            },
                            "data-test-selector": "shelf-card-selector"
                        }, this.renderShelfCard(e)) : o.createElement(ae, {
                            name: e.title,
                            undoSuccessHandler: this.showContent,
                            addFeedbackPromise: this.state.addFeedbackPromise,
                            size: re.Small
                        }) : null
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
                            s = this.props.shelf.title.key !== we.a.RecommendedBecauseYouWatchX ? {
                                gameTitle: n.game && n.game.displayName || void 0,
                                gameTitleLinkTo: {
                                    pathname: n.game ? Object(te.c)(n.game.name) : void 0,
                                    state: o
                                },
                                onGameTitleClick: this.trackClick.bind(this, m.PageviewContent.GameMetadata, r)
                            } : {};
                        return a.__assign({
                            context: ce.b.MixedGameAndChannelList,
                            title: n.broadcaster && n.broadcaster.broadcastSettings && n.broadcaster.broadcastSettings.title,
                            linkTo: n.broadcaster && n.broadcaster.login ? {
                                pathname: n.broadcaster.login,
                                state: o
                            } : void 0,
                            onClick: this.trackClick.bind(this, m.PageviewContent.VideoThumbnail, r),
                            onVideoTitleClick: this.trackClick.bind(this, m.PageviewContent.VideoTitle, r),
                            onChannelImageClick: this.trackClick.bind(this, m.PageviewContent.UserThumbnail, r),
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
                            onChannelLoginClick: this.trackClick.bind(this, m.PageviewContent.ChannelMetadata, r),
                            streamType: Object(me.a)(n.type) || de.a.Live,
                            currentViewerCount: n.viewersCount || 0,
                            trackingContext: {
                                medium: m.PageviewMedium.TwitchHome
                            },
                            contextualCardActionProps: this.getFeedbackProps({
                                channelID: n.id,
                                categoryID: n.game && n.game.id,
                                feedbackReasons: (null === ke && (ke = [{
                                    text: ve(),
                                    contentType: he.a.Channel,
                                    feedbackType: he.b.NotInterested
                                }, ge(), {
                                    text: fe(),
                                    contentType: he.a.Channel,
                                    feedbackType: he.b.Other
                                }]), ke),
                                hideContent: this.hideContent
                            })
                        }, i && {
                            tagListProps: a.__assign({}, i, {
                                callback: function(e) {
                                    i.callback && i.callback(e), t.trackClick(m.PageviewContent.Tag, r, e.id)
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
                            context: ce.b.MixedGameAndChannelList,
                            title: i.clipTitle,
                            linkTo: i.embedURL,
                            onClick: function(e) {
                                if (n.trackClick(m.PageviewContent.VideoThumbnail, o), e.preventDefault(), n.props.shelf.content && n.props.shelf.content.edges) {
                                    var r = n.props.shelf.content.edges.map(function(e) {
                                        return e.node
                                    });
                                    n.props.showClipsModal(i, t, n.props.shelf.content.edges, function() {
                                        return r
                                    })
                                }
                            },
                            onVideoTitleClick: function(e) {
                                if (n.trackClick(m.PageviewContent.VideoTitle, o), e.preventDefault(), n.props.shelf.content && n.props.shelf.content.edges) {
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
                            channelImageProps: i.broadcaster && i.broadcaster.profileImageURL && i.broadcaster.displayName ? {
                                src: i.broadcaster && i.broadcaster.profileImageURL,
                                alt: i.broadcaster && i.broadcaster.displayName
                            } : void 0,
                            channelDisplayName: i.broadcaster && i.broadcaster.displayName || "",
                            channelLogin: i.broadcaster && i.broadcaster.login,
                            channelLinkTo: i.broadcaster && i.broadcaster.login ? {
                                pathname: "/" + i.broadcaster.login + "/videos/all",
                                state: s
                            } : void 0,
                            onChannelLoginClick: this.trackClick.bind(this, m.PageviewContent.ChannelMetadata, o),
                            datePublished: i.clipCreatedAt,
                            viewCount: i.clipViewCount,
                            durationInSeconds: i.durationSeconds,
                            clipCreatedByChannelLogin: i.curator && i.curator.login,
                            gameTitle: i.game && i.game.displayName || void 0,
                            gameTitleLinkTo: {
                                pathname: i.game && Object(te.c)(i.game.name) || void 0,
                                state: s
                            },
                            onGameTitleClick: this.trackClick.bind(this, m.PageviewContent.GameMetadata, o),
                            trackingContext: {
                                medium: m.PageviewMedium.TwitchHome
                            }
                        }, r && {
                            tagListProps: a.__assign({}, r, {
                                callback: function(e) {
                                    r.callback && r.callback(e), n.trackClick(m.PageviewContent.Tag, o, e.id)
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
                            context: ce.b.MixedGameAndChannelList,
                            title: n.title,
                            linkTo: {
                                pathname: "/videos/" + n.id,
                                state: this.props.shelfCardTrackingProps
                            },
                            onClick: this.trackClick.bind(this, m.PageviewContent.VideoThumbnail, r),
                            onVideoTitleClick: this.trackClick.bind(this, m.PageviewContent.VideoTitle, r),
                            onChannelImageClick: this.trackClick.bind(this, m.PageviewContent.UserThumbnail, r),
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
                            onChannelLoginClick: this.trackClick.bind(this, m.PageviewContent.ChannelMetadata, r),
                            datePublished: n.publishedAt,
                            viewCount: n.viewCount,
                            durationInSeconds: n.lengthSeconds,
                            watchedProgressPercent: 0,
                            gameTitle: n.game && n.game.displayName,
                            gameTitleLinkTo: n.game ? {
                                pathname: Object(te.c)(n.game.name),
                                state: o
                            } : void 0,
                            onGameTitleClick: this.trackClick.bind(this, m.PageviewContent.GameMetadata, r),
                            trackingContext: {
                                medium: m.PageviewMedium.TwitchHome
                            },
                            contextualCardActionProps: this.getFeedbackProps({
                                vodID: n.id,
                                categoryID: n.game && n.game.id,
                                channelID: n.owner && n.owner.id,
                                feedbackReasons: (null === Ce && (Ce = [{
                                    text: Object(l.d)("I am not interested in the video", "FeedbackReason"),
                                    contentType: he.a.Vod,
                                    feedbackType: he.b.NotInterested
                                }, {
                                    text: ve(),
                                    contentType: he.a.Channel,
                                    feedbackType: he.b.NotInterested
                                }, ge(), {
                                    text: Object(l.d)("I have already watched this video", "FeedbackReason"),
                                    contentType: he.a.Vod,
                                    feedbackType: he.b.AlreadyWatched
                                }, {
                                    text: fe(),
                                    contentType: he.a.Vod,
                                    feedbackType: he.b.Other
                                }]), Ce),
                                hideContent: this.hideContent
                            })
                        }, i && {
                            tagListProps: a.__assign({}, i, {
                                callback: function(e) {
                                    i.callback && i.callback(e), t.trackClick(m.PageviewContent.Tag, r, e.id)
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
                            src: i.boxArtURL || "",
                            linkTo: Object(te.c)(i.name),
                            info: Object(l.d)("{viewerCount, plural, one {# viewer} other {# viewers}}", {
                                viewerCount: i.viewersCount || 0
                            }, "ShelfComponent")
                        }
                    }, t
                }(o.Component),
                Ie = Object(s.compose)(Object(w.b)("ShelfCardComponent", {
                    autoReportInteractive: !0
                }), Object(ne.a)("ShelfCardComponent", {
                    percentage: 75
                }), Object(Te.a)())(Oe);
            var Re = Object(f.connect)(null, function(e) {
                    return Object(b.bindActionCreators)({
                        showClipsModal: function(e, t, n) {
                            return Object(oe.d)(se.a, {
                                getClips: function() {
                                    return n.map(function(e) {
                                        return le(e.node)
                                    })
                                },
                                clip: le(e),
                                clipIndex: t,
                                pageType: "TopClipsGame"
                            })
                        }
                    }, e)
                })(Ie),
                Ne = n("yI6f"),
                De = Object(Se.a)(),
                xe = ee.a.wrap(function() {
                    return n.e(134).then(n.bind(null, "GyBV"))
                }, "RecFeedbackButton", {
                    placeholder: null
                }),
                Me = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            showContent: !0,
                            addFeedbackPromise: null
                        }, t.isTagsExperiment = Object(ie.b)(), t.getEdges = function(e) {
                            if (e.content && e.content.edges) {
                                var n = t.props.itemsToDisplay;
                                return e.title.key.includes("TopGames") && (n = t.props.itemsToDisplay * Be), e.content.edges.filter(function(e) {
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
                            return o.createElement(T.U, {
                                onClick: t.props.trackTitleClick,
                                to: n
                            }, e)
                        }, t.linkToDirectory = function(e) {
                            var n = {
                                pathname: Object(te.c)(e),
                                state: a.__assign({
                                    content: m.PageviewContent.HeaderGameName,
                                    medium: m.PageviewMedium.TwitchHome
                                }, t.props.shelfTrackingProps)
                            };
                            return o.createElement(T.U, {
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
                            i = t.shelf,
                            r = this.getShelfTitle(i.title);
                        if (!this.shouldRenderShelf(i)) return null;
                        if (!this.state.showContent && null !== r) return o.createElement(ae, {
                            name: r,
                            undoSuccessHandler: this.showContent,
                            addFeedbackPromise: this.state.addFeedbackPromise,
                            size: re.Large
                        });
                        var a = 0,
                            s = T.Vb.Large,
                            l = [];
                        if (i.content && i.content.edges) {
                            i.title.key.includes("TopGames") && (s = T.Vb.ExtraSmall);
                            var c = this.getEdges(i),
                                d = Z(i, function(e) {
                                    return e.content.edges || []
                                }, function() {
                                    return c
                                });
                            c.forEach(function(t, i) {
                                t && t.node && l.push(o.createElement(Re, {
                                    key: t.node.id,
                                    shelf: d,
                                    contentEdge: t,
                                    isTagsExperiment: e.isTagsExperiment,
                                    itemPosition: i,
                                    rowPosition: n,
                                    firstPageLoaded: e.props.firstPageLoaded
                                }))
                            }), this.props.itemsToDisplay > i.content.edges.length && (a = this.props.itemsToDisplay - i.content.edges.length)
                        }
                        return o.createElement(T.Xa, {
                            key: i.id
                        }, o.createElement(T.Xa, {
                            padding: {
                                bottom: 1
                            }
                        }, o.createElement(T.W, {
                            type: T.Ob.H4,
                            color: T.O.Base
                        }, r, this.props.firstPageLoaded && i.title.context && De() && o.createElement(T.Xa, {
                            display: T.X.InlineBlock,
                            margin: {
                                left: .5
                            }
                        }, o.createElement(xe, {
                            shelfID: i.id,
                            categoryID: i.title.context.id,
                            feedbackReasons: (null === be && (be = [ge(), {
                                text: fe(),
                                contentType: he.a.Shelf,
                                feedbackType: he.b.Other
                            }]), be),
                            hideContent: this.hideContent
                        })))), o.createElement(T.Ub, {
                            childWidth: s,
                            gutterSize: T.Wb.Small,
                            noWrap: !0,
                            placeholderItems: a
                        }, l))
                    }, t.prototype.getShelfTitle = function(e) {
                        var t, n = this,
                            i = ((t = {})[we.a.TopLiveChannels] = function() {
                                return Object(l.d)("Popular <x:bold>live channels</x:bold>", {
                                    "x:bold": function(e) {
                                        return o.createElement("strong", null, e)
                                    }
                                }, "ShelfComponent")
                            }, t[we.a.TopGames] = function() {
                                return n.isTagsExperiment ? Object(l.d)("Popular <x:bold>categories</x:bold>", {
                                    "x:bold": function(e) {
                                        return o.createElement("strong", null, n.linkToBrowse(e))
                                    }
                                }, "ShelfComponent") : Object(l.d)("Popular <x:bold>games</x:bold>", {
                                    "x:bold": function(e) {
                                        return o.createElement("strong", null, n.linkToBrowse(e))
                                    }
                                }, "ShelfComponent")
                            }, t[we.a.PopularVideos] = function() {
                                return Object(l.d)("Popular <x:bold>videos</x:bold>", {
                                    "x:bold": function(e) {
                                        return o.createElement("strong", null, e)
                                    }
                                }, "ShelfComponent")
                            }, t[we.a.PopularClips] = function() {
                                return Object(l.d)("Popular <x:bold>clips</x:bold>", {
                                    "x:bold": function(e) {
                                        return o.createElement("strong", null, e)
                                    }
                                }, "ShelfComponent")
                            }, t[we.a.TopChannelsPlayingGame] = function() {
                                return Object(l.d)("Popular <x:bold1>live channels</x:bold1> in <x:bold2>{game}</x:bold2>", {
                                    game: e.context ? e.context.name : "",
                                    "x:bold1": function(e) {
                                        return o.createElement("strong", null, e)
                                    },
                                    "x:bold2": function(e) {
                                        return o.createElement("strong", null, n.linkToDirectory(e))
                                    }
                                }, "ShelfComponent")
                            }, t[we.a.TopLiveChannelsYouMayLike] = function() {
                                return Object(l.d)("<x:bold>Live channels</x:bold> you may like", {
                                    "x:bold": function(e) {
                                        return o.createElement("strong", null, e)
                                    }
                                }, "ShelfComponent")
                            }, t[we.a.TopGamesForYou] = function() {
                                return n.isTagsExperiment ? Object(l.d)("<x:bold>Categories</x:bold> you may like", {
                                    "x:bold": function(e) {
                                        return o.createElement("strong", null, n.linkToBrowse(e))
                                    }
                                }, "ShelfComponent") : Object(l.d)("<x:bold>Games</x:bold> you may like", {
                                    "x:bold": function(e) {
                                        return o.createElement("strong", null, n.linkToBrowse(e))
                                    }
                                }, "ShelfComponent")
                            }, t[we.a.RecommendedBecauseYouWatchX] = function() {
                                return Object(l.d)("<x:bold>{game}</x:bold> streamers you may like", {
                                    game: e.context ? e.context.name : "",
                                    "x:bold": function(e) {
                                        return o.createElement("strong", null, n.linkToDirectory(e))
                                    }
                                }, "ShelfComponent")
                            }, t[we.a.RecommendedBecauseYouFollowX] = function() {
                                return Object(l.d)("Because you follow <x:bold>{name}</x:bold>", {
                                    name: e.context ? e.context.name : "",
                                    "x:bold": function(e) {
                                        return o.createElement("strong", null, n.linkToDirectory(e))
                                    }
                                }, "ShelfComponent")
                            }, t[we.a.GreatNewClipsYouMayHaveMissed] = function() {
                                return Object(l.d)("<x:bold>Clips</x:bold> you may like", {
                                    "x:bold": function(e) {
                                        return o.createElement("strong", null, e)
                                    }
                                }, "ShelfComponent")
                            }, t[we.a.TopNewVideosYouMayHaveMissed] = function() {
                                return Object(l.d)("<x:bold>Videos</x:bold> you may like", {
                                    "x:bold": function(e) {
                                        return o.createElement("strong", null, e)
                                    }
                                }, "ShelfComponent")
                            }, t);
                        return i[e.key] ? i[e.key]() : null
                    }, t
                }(o.Component),
                Pe = Object(s.compose)(Object(ne.a)("ShelfComponent", {
                    percentage: 15
                }), Object(w.b)("ShelfComponent"), Object(Ne.j)())(Me);
            var Le = Object(f.connect)(function(e) {
                    return {
                        firstPageLoaded: e.session.firstPageLoaded
                    }
                })(Pe),
                je = n("nsVP"),
                Fe = n("geRD");
            var Ue;
            ! function(e) {
                e.all = "all", e.ps4 = "ps4", e.xbox = "xbox"
            }(Ue || (Ue = {}));
            var Ae = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            requestID: t.props.initialRequestID
                        }, t.trackRecRequest = function(e) {
                            var t = {
                                endpoint: Ne.d.Live,
                                requestID: e,
                                section: Ne.c.TwitchHome
                            };
                            Object(Ne.i)(t)
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
                            if (this.props.itemsToDisplay * Be > Math.min.apply(Math, t)) {
                                var a = Object(Ne.e)();
                                this.props.loadMore(a), this.trackRecRequest(a), this.setState({
                                    requestID: a
                                })
                            }
                        }
                    }, t.prototype.render = function() {
                        var e = this;
                        if (!this.props.data.shelves || !this.props.data.shelves.edges) return this.props.data.loading ? this.renderLoading() : this.props.data.error ? this.renderError() : null;
                        var t = this.props.data.shelves.edges.map(function(t, n) {
                            return o.createElement(Le, {
                                key: t.node.id,
                                shelf: t.node,
                                position: n,
                                itemsToDisplay: e.props.itemsToDisplay,
                                requestID: e.state.requestID
                            })
                        });
                        return t.splice(4, 0, this.renderAds(g.c.newFront.after4thShelf, g.b.newFront.after4thShelf, "frontpage-bottom-ad-slot")), t.splice(2, 0, this.renderAds(g.c.newFront.after2ndShelf, g.b.newFront.after2ndShelf, "frontpage-mid-ad-slot")), o.createElement(o.Fragment, null, t)
                    }, t.prototype.renderLoading = function() {
                        for (var e = this.props.itemsToDisplay, t = [], n = [], i = 0; i < e; i++) n.push(o.createElement(J.VideoPreviewCardPlaceholder, {
                            key: "frontpage-thumbnails-placeholder-" + i
                        }));
                        for (i = 0; i < 4; i++) t.push(o.createElement(T.Xa, {
                            margin: {
                                bottom: 2
                            },
                            key: "frontpage-shelves-placeholder-" + i
                        }, o.createElement(T.Xa, {
                            margin: {
                                bottom: 1
                            }
                        }, o.createElement(T.eb, {
                            height: 25,
                            width: 150
                        })), o.createElement(T.Ub, {
                            gutterSize: T.Wb.Small,
                            childWidth: T.Vb.Medium,
                            placeholderItems: 0
                        }, n)));
                        return o.createElement(o.Fragment, null, t)
                    }, t.prototype.renderError = function() {
                        var e = Object(l.d)("Error loading data.", "NewFrontPageComponent");
                        return o.createElement(K.a, {
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
                Ve = Object(b.compose)(Object(c.a)(je, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            errorPolicy: "all",
                            variables: {
                                requestID: e.initialRequestID,
                                platform: Ue.all,
                                itemsPerRow: e.initialItemsToFetch
                            }
                        }
                    },
                    props: function(e) {
                        return a.__assign({}, e, {
                            loadMore: function(t) {
                                return e.data.fetchMore({
                                    query: je,
                                    variables: {
                                        itemsPerRow: e.ownProps.itemsToDisplay * Be,
                                        platform: Ue.all,
                                        requestID: t
                                    },
                                    updateQuery: function(e, t) {
                                        return function(e, t) {
                                            return Z(e, function(e) {
                                                return e && e.shelves && e.shelves.edges
                                            }, function(e) {
                                                return e && t && t.shelves && t.shelves.edges ? (t.shelves.edges.forEach(function(t) {
                                                    for (var n = !1, i = 0; i < e.length; i++)
                                                        if (e[i].node.id === t.node.id) {
                                                            n = !0, e[i] = Z(e[i], function(e) {
                                                                return e.node.content.edges
                                                            }, function(e) {
                                                                return e && t && t.node && t.node.content && t.node.content.edges ? Object(Fe.c)(e, t.node.content.edges) : null
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
                }), Object(w.b)("RecommendedContent"))(Ae),
                We = 2,
                Be = 2,
                ze = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            initialItemsToFetch: 0,
                            itemsToDisplay: 0
                        }, t.onResize = function(e) {
                            var n = Object($.a)(e, 300, 1),
                                i = Math.max(We, n);
                            t.state.initialRequestID ? i !== t.state.itemsToDisplay && t.setState({
                                itemsToDisplay: i
                            }) : t.setState({
                                initialItemsToFetch: i * Be,
                                initialRequestID: Object(Ne.e)(),
                                itemsToDisplay: i
                            })
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.state.initialItemsToFetch > 0 && this.state.initialRequestID ? o.createElement(Ve, {
                            itemsToDisplay: this.state.itemsToDisplay,
                            initialItemsToFetch: this.state.initialItemsToFetch,
                            initialRequestID: this.state.initialRequestID
                        }) : null;
                        return o.createElement(o.Fragment, null, e, o.createElement(Y.a, {
                            onResize: this.onResize
                        }))
                    }, t
                }(o.Component),
                Ge = n("6Oka"),
                Xe = (n("X2bz"), function(e) {
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
                            return t.followedGamesForUserHasLoaded() && G(t.props.data.currentUser.followedGames.nodes.length, t.props.data.currentUser.createdAt)
                        }, t.followedGamesForUserHasLoaded = function() {
                            return t.props.data && !t.props.data.loading && !t.props.data.error && t.props.data.currentUser && t.props.data.currentUser.followedGames
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        l.p.setPageTitle(), g.g.addListener(g.e, this.onSlotAdded), this.shouldShowOnboarding() && !W() && X(B.a.NewSignup)
                    }, t.prototype.componentWillUnmount = function() {
                        g.g.removeListener(g.e, this.onSlotAdded)
                    }, t.prototype.componentDidUpdate = function(e) {
                        e.data.loading && this.shouldShowOnboarding() && !W() && X(B.a.NewSignup)
                    }, t.prototype.render = function() {
                        return o.createElement(T.Xa, {
                            fullHeight: !0
                        }, o.createElement(q.b, {
                            suppressScrollX: !0,
                            disableDebounce: !0
                        }), o.createElement(H.a, null, o.createElement(Q.a, null)), o.createElement(T.yb, {
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
                        }), o.createElement(j, null)), o.createElement(T.Xa, {
                            margin: 3
                        }, o.createElement(ze, null)))
                    }, t
                }(o.Component)),
                qe = Object(s.compose)(Object(w.b)("FrontPage", {
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
                }))(Xe);
            n.d(t, "FrontPage", function() {
                return qe
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
        "1mcJ": function(e, t, n) {},
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
        "4qQ0": function(e, t, n) {
            "use strict";
            var i, r;
            n.d(t, "a", function() {
                    return i
                }), n.d(t, "b", function() {
                    return r
                }),
                function(e) {
                    e.ChannelFeedComment = "CHANNEL_FEED_COMMENT_REPORT", e.ChannelFeedPost = "CHANNEL_FEED_POST_REPORT", e.Chat = "CHAT_REPORT", e.Clip = "CLIP_REPORT", e.Collection = "COLLECTION_REPORT", e.Community = "COMMUNITY_REPORT", e.Event = "EVENT_REPORT", e.Extension = "EXTENSION_REPORT", e.LiveUp = "LIVE_UP_REPORT", e.Raid = "RAID_REPORT", e.Room = "ROOM_REPORT", e.StreamUp = "STREAM_UP_REPORT", e.User = "USER_REPORT", e.VideoChatMessage = "VOD_COMMENT_REPORT", e.Vod = "VOD_REPORT", e.Whisper = "WHISPER_REPORT"
                }(i || (i = {})),
                function(e) {
                    e.BitsViolation = "bits_violation", e.ChatBanEvasion = "chat_ban_evasion", e.Cheating = "cheating", e.Gore = "gore", e.Harassment = "harassment", e.Harm = "harm", e.HatefulConduct = "hateful_conduct", e.Impersonation = "impersonation", e.Miscategorized = "miscategorized", e.OffensiveUsername = "offensive_username", e.Other = "other", e.Porn = "porn", e.Prohibited = "prohibited", e.SelfHarm = "selfharm", e.SexualContent = "sexual_content", e.SexualViolence = "sexual_violence", e.Spam = "spam", e.TosBanEvasion = "tos_ban_evasion", e.Underaged = "underaged"
                }(r || (r = {}))
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
                        return r.createElement(c.a, {
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
                                linkPath: g.a.PopularTag
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
                }(r.Component),
                v = Object(h.b)("VideoPreviewCard", {
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
                    this.props.multipleVideoGameMarkersType && this.props.multipleVideoGameMarkersType !== a.a.None && !this.promise && this.maybeFetchVideoMarkers(this.props.video.id, this.props.video.lengthSeconds)
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
                        }, r.createElement(s.yb, {
                            className: "preview-card-game-balloon-row__image-wrapper",
                            flexGrow: 0,
                            flexShrink: 0,
                            borderRadius: s.x.Small,
                            overflow: s.ab.Hidden,
                            position: s.fb.Relative
                        }, r.createElement(s.o, {
                            align: s.d.Center,
                            ratio: s.p.BoxArt
                        }, r.createElement(s.S, i.__assign({}, e))), r.createElement(s.yb, {
                            className: "preview-card-game-balloon-row__image-play-overlay",
                            alignItems: s.f.Center,
                            background: s.r.Overlay,
                            color: s.O.Overlay,
                            display: s.X.Flex,
                            justifyContent: s.Wa.Center,
                            position: s.fb.Absolute,
                            attachTop: !0,
                            attachBottom: !0,
                            attachLeft: !0,
                            attachRight: !0
                        }, r.createElement(s.ob, {
                            asset: s.pb.Play,
                            type: s.qb.Inherit
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
                            position: s.fb.Relative,
                            margin: {
                                top: .5
                            }
                        }, r.createElement(u.a, {
                            key: "game-balloon",
                            display: s.X.Inline,
                            onToggle: this.onBalloonToggle
                        }, r.createElement(s.z, {
                            type: s.F.Hollow,
                            icon: s.pb.ViewerList
                        }, r.createElement(s.Xa, {
                            display: s.X.Flex,
                            flexDirection: s.Aa.Row
                        }, r.createElement(s.W, null, Object(a.d)("Chapters", "PreviewCardGameBalloon")), r.createElement(s.Xa, {
                            margin: {
                                left: 1
                            }
                        }, r.createElement(s.cb, {
                            label: this.props.videoGameChanges.length.toString()
                        })))), r.createElement(s.u, {
                            direction: s.v.TopLeft,
                            size: s.w.Medium
                        }, r.createElement(s.Xa, {
                            overflow: s.ab.Hidden,
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
                b = (n("XA5B"), function(e) {
                    var t = r.createElement(s.yb, {
                        className: "preview-card-iconic-image__wrapper",
                        borderRadius: s.x.Small,
                        overflow: s.ab.Hidden
                    }, r.createElement(s.o, {
                        ratio: e.aspect || s.p.BoxArt,
                        align: s.d.Center
                    }, r.createElement(s.S, i.__assign({}, e.imageProps))));
                    return e.linkTo && (t = r.createElement(s.U, i.__assign({}, Object(v.a)(e), {
                        to: e.linkTo,
                        onClick: e.onClick
                    }), t)), t
                });
            b.displayName = "PreviewCardIconicImage";
            var k, y = n("TSYQ"),
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
                        transform: s.Nb.Uppercase
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
                        position: s.fb.Absolute,
                        attachBottom: !0,
                        fullWidth: !0
                    }, r.createElement(s.ib, {
                        borderRadius: s.x.None,
                        size: s.kb.Small,
                        value: e.progressBarPercent,
                        mask: !0
                    })), t = 1);
                    var a = 1,
                        o = null;
                    return e.topBar && (o = r.createElement(s.Xa, {
                        position: s.fb.Absolute,
                        attachTop: !0,
                        fullWidth: !0
                    }, r.createElement(C, i.__assign({}, e.topBar))), a = 3), r.createElement(s.Xa, {
                        position: s.fb.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        fullWidth: !0,
                        fullHeight: !0,
                        className: "preview-card-overlay"
                    }, o, n, r.createElement(s.Xa, {
                        position: s.fb.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        margin: e.topBar ? {
                            x: 1,
                            y: a
                        } : 1,
                        "data-test-selector": "top-left-selector"
                    }, e.topLeft), r.createElement(s.Xa, {
                        position: s.fb.Absolute,
                        attachTop: !0,
                        attachRight: !0,
                        margin: e.topBar ? {
                            x: 1,
                            y: a
                        } : 1,
                        "data-test-selector": "top-right-selector"
                    }, e.topRight), r.createElement(s.Xa, {
                        position: s.fb.Absolute,
                        attachBottom: !0,
                        attachLeft: !0,
                        margin: {
                            x: .5,
                            y: t
                        },
                        "data-test-selector": "bottom-left-selector"
                    }, e.bottomLeft), r.createElement(s.Xa, {
                        position: s.fb.Absolute,
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
                    }, r.createElement(s.ob, {
                        asset: e.icon,
                        width: 10,
                        height: 10
                    }));
                    return e.withBackground ? r.createElement(s.yb, {
                        alignItems: s.f.Center,
                        background: s.r.Overlay,
                        borderRadius: s.x.Small,
                        className: "preview-card-stat",
                        color: s.O.Overlay,
                        display: s.X.Flex,
                        fontSize: s.Ca.Size6,
                        justifyContent: s.Wa.Center
                    }, t, r.createElement(s.W, null, e.value)) : r.createElement(s.yb, {
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
                        }), r.createElement(s.yb, {
                            background: s.r.Alt2,
                            overflow: s.ab.Hidden
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
                O = (n("80G/"), function(e) {
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
                        type: s.Ob.H3,
                        fontSize: s.Ca.Size5,
                        lines: 1,
                        bold: !0,
                        ellipsis: !0
                    }, e.title)), r.createElement(s.Xa, {
                        className: "preview-card-titles__subtitle-wrapper"
                    }, t))
                }),
                I = n("H1ft"),
                R = n("ZbA5"),
                N = n("QVaV"),
                D = n("hyVY"),
                x = n("MXoD"),
                M = n("0LAi");
            ! function(e) {
                e.LockSelector = "video-lock", e.UpsellSelector = "upsell"
            }(k || (k = {}));
            var P, L, j = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    if (!this.props.restriction || !this.props.restriction.productName || !this.props.restriction.title) return null;
                    var e = Object(a.d)("Get It Now", "VideoPreviewCardRestriction"),
                        t = this.props.restriction.canViewRestricted,
                        n = t ? Object(a.d)("unlocked", "VideoPreviewCardRestriction") : Object(a.d)("locked", "VideoPreviewCardRestriction"),
                        i = t ? s.pb.Unlock : s.pb.Lock;
                    return r.createElement(s.Xa, null, !t && r.createElement(s.yb, {
                        background: s.r.Overlay,
                        className: "video-preview-card-restriction",
                        color: s.O.Overlay,
                        display: s.X.Flex,
                        position: s.fb.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        zIndex: s.bc.Default,
                        padding: {
                            x: 5
                        },
                        textAlign: s.Kb.Center,
                        fullWidth: !0,
                        fullHeight: !0,
                        alignItems: s.f.Center,
                        alignContent: s.e.Center,
                        flexDirection: s.Aa.Column,
                        flexWrap: s.Ba.Wrap,
                        justifyContent: s.Wa.Center,
                        "data-test-selector": k.LockSelector
                    }, r.createElement(s.Pa, {
                        margin: {
                            bottom: 1
                        }
                    }, r.createElement(s.W, {
                        color: s.O.Overlay,
                        fontSize: s.Ca.Size5,
                        "data-test-selector": k.UpsellSelector
                    }, Object(a.d)("View with {title}", {
                        title: this.props.restriction.title
                    }, "VideoPreviewCardRestriction"))), r.createElement(s.Xa, null, r.createElement(s.z, {
                        type: s.F.Hollow,
                        ariaLabel: e,
                        targetBlank: !0,
                        disabled: "" === this.props.restriction.upsellLinkTo,
                        linkTo: this.props.restriction.upsellLinkTo,
                        overlay: !0
                    }, e))), r.createElement(s.yb, {
                        display: s.X.InlineFlex,
                        position: s.fb.Absolute,
                        attachTop: this.props.attachTop,
                        attachBottom: !this.props.attachTop,
                        attachRight: !0,
                        margin: .5,
                        zIndex: s.bc.Default,
                        fontSize: s.Ca.Size6,
                        background: s.r.Overlay,
                        borderRadius: s.x.Medium,
                        color: s.O.Overlay
                    }, r.createElement(s.Rb, {
                        direction: this.props.attachTop ? s.Tb.Bottom : s.Tb.Top,
                        align: s.Sb.Right,
                        label: n
                    }, r.createElement(s.ob, {
                        asset: i,
                        height: 20,
                        width: 20
                    }))))
                }, t
            }(r.PureComponent);
            n("5NSO");

            function F(e) {
                return void 0 !== e.watchedProgressPercent
            }

            function U(e) {
                return void 0 !== e.clipCreatedByChannelLogin
            }! function(e) {
                e.Avatar = "preview-card-avatar", e.BoxArt = "preview-card-box-art"
            }(P || (P = {})),
            function(e) {
                e[e.SingleGameList = 1] = "SingleGameList", e[e.SingleChannelList = 2] = "SingleChannelList", e[e.MixedGameAndChannelList = 3] = "MixedGameAndChannelList"
            }(L || (L = {}));
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
                        }, Object(v.a)(this.props)), r.createElement(s.yb, {
                            position: s.fb.Relative,
                            borderRadius: s.x.Medium,
                            overflow: s.ab.Hidden
                        }, this.renderVODRestrictionOverlay(), r.createElement(s.U, {
                            to: Object(x.a)(this.getTrackingContext(h.PageviewContent.VideoThumbnail), this.props.linkTo),
                            onClick: this.props.onThumbnailClick || this.props.onClick,
                            "data-a-target": "preview-card-image-link"
                        }, this.props.thumbnailImageProps && r.createElement(E, {
                            staticImageProps: this.props.thumbnailImageProps,
                            animatedImageProps: F(this.props) && this.props.animatedImageProps || void 0,
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
                            flexShrink: 1
                        }, this.renderTitles(), this.renderTags()), this.props.contextualCardActionProps && r.createElement(s.Xa, {
                            flexGrow: 0,
                            flexShrink: 0
                        }, r.createElement(this.props.contextualCardActionProps.component, i.__assign({}, this.props.contextualCardActionProps.props)))))
                    }, t.prototype.renderOverlay = function() {
                        return function(e) {
                            return void 0 !== e.streamType
                        }(this.props) ? r.createElement(S, {
                            topLeft: r.createElement(R.a, {
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
                        }) : F(this.props) ? r.createElement(S, {
                            topLeft: void 0 !== this.props.durationInSeconds && r.createElement(w, {
                                value: Object(D.b)(this.props.durationInSeconds),
                                icon: s.pb.Play,
                                withBackground: !0
                            }),
                            topRight: this.props.listPosition && r.createElement(w, {
                                withBackground: !0,
                                value: this.getListPositionLabel()
                            }),
                            bottomLeft: r.createElement(w, {
                                value: this.getViewCountLabel()
                            }),
                            bottomRight: r.createElement(w, {
                                value: Object(a.c)(new Date(this.props.datePublished), "medium")
                            }),
                            progressBarPercent: this.props.watchedProgressPercent,
                            topBar: this.props.topBar
                        }) : U(this.props) ? r.createElement(S, {
                            topLeft: r.createElement(w, {
                                value: Object(D.b)(this.props.durationInSeconds),
                                icon: s.pb.Clip,
                                withBackground: !0
                            }),
                            topRight: void 0,
                            bottomLeft: r.createElement(w, {
                                value: this.getViewCountLabel()
                            }),
                            bottomRight: r.createElement(w, {
                                value: Object(a.c)(new Date(this.props.datePublished), "medium")
                            })
                        }) : void 0
                    }, t.prototype.getListPositionLabel = function() {
                        return F(this.props) && this.props.listPosition ? Object(a.d)("{totalVideos, plural, one {{position} / # video} other {{position} / # videos}}", {
                            position: this.props.listPosition.position,
                            totalVideos: this.props.listPosition.totalVideos
                        }, "VideoPreviewCard") : ""
                    }, t.prototype.getViewCountLabel = function() {
                        return F(this.props) || U(this.props) ? Object(a.d)("{viewerCount, plural, one {# view} other {# views}}", {
                            viewerCount: this.props.viewCount
                        }, "VideoPreviewCard") : ""
                    }, t.prototype.renderIconicImage = function() {
                        return this.props.context === L.SingleChannelList && this.props.gameBoxArtImageProps && this.props.gameBoxArtImageProps.src && this.props.gameTitleLinkTo ? r.createElement(s.Xa, {
                            margin: {
                                right: 1
                            }
                        }, r.createElement(b, {
                            imageProps: this.props.gameBoxArtImageProps,
                            linkTo: Object(x.a)(this.getTrackingContext(h.PageviewContent.GameBoxart), this.props.gameTitleLinkTo),
                            onClick: this.props.onGameTitleClick,
                            aspect: s.p.BoxArt,
                            "data-test-selector": P.BoxArt,
                            "data-a-target": "preview-card-boxart-link"
                        })) : (this.props.context === L.SingleGameList || this.props.context === L.MixedGameAndChannelList) && this.props.channelImageProps && this.props.channelImageProps.src ? r.createElement(s.Xa, {
                            margin: {
                                right: 1
                            }
                        }, r.createElement(b, {
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
                            text: Object(N.a)(this.props.channelLogin, this.props.channelDisplayName, !0),
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
                        }) : F(this.props) && this.props.multipleVideoGameMarkersType && this.props.videoGameChanges && this.props.videoGameChanges.length > 0 ? e = this.renderPreviewCardGameInfo(this.props.multipleVideoGameMarkersType, this.props.videoGameChanges, this.props.onVideoGameBalloonClick, this.props.onVideoGameBalloonItemClick) : this.props.context !== L.SingleGameList && this.props.gameTitle && this.props.gameTitleLinkTo && t.push({
                            text: this.props.gameTitle,
                            linkTo: Object(x.a)(this.getTrackingContext(h.PageviewContent.GameMetadata), this.props.gameTitleLinkTo),
                            onClick: this.props.onGameTitleClick,
                            automationSelector: "preview-card-game-link"
                        }), r.createElement(r.Fragment, null, r.createElement(O, {
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
                        return F(this.props) && this.props.restriction && this.props.restriction.productName && this.props.restriction.title ? r.createElement(j, {
                            restriction: this.props.restriction,
                            attachTop: !0
                        }) : null
                    }, t.prototype.shouldShowGameBalloon = function(e) {
                        return !!F(e) && (!!(e.videoGameChanges && e.videoGameChanges.length > 0) && e.multipleVideoGameMarkersType === I.a.Balloon)
                    }, t.prototype.renderPreviewCardGameInfo = function(e, t, n, i) {
                        switch (e) {
                            case I.a.Balloon:
                                return r.createElement(p, {
                                    videoGameChanges: t,
                                    videoID: t[0].videoID,
                                    onBalloonClick: n,
                                    onBalloonItemClick: i
                                });
                            case I.a.Inline:
                                return r.createElement(g, {
                                    videoGameChanges: t,
                                    trackingContext: this.props.trackingContext
                                });
                            case I.a.None:
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
                return L
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
                p = n("jsEL"),
                m = n("GnwI"),
                h = n("/HY+"),
                g = n("4qQ0"),
                f = n("8Ad5"),
                v = n("u5aL"),
                b = n("uX80"),
                k = n("wbMx"),
                y = n("Jxh/"),
                C = n("kduP"),
                S = n("f00E"),
                w = n("vhpE"),
                T = n("bq0i"),
                _ = n("yR8l"),
                E = n("4rCz"),
                O = n("ndwU");
            ! function(e) {
                e[e.View = 0] = "View", e[e.Report = 1] = "Report", e[e.Delete = 2] = "Delete", e[e.DeleteAll = 3] = "DeleteAll", e[e.Ban = 4] = "Ban", e[e.Timeout = 5] = "Timeout"
            }(i || (i = {}));
            var I = n("Ue10"),
                R = n("WsU7"),
                N = [i.Delete, i.DeleteAll],
                D = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.clipsMaintenance = Object(O.a)(), n.renderMenuItem = function(e) {
                            var t = n.menuData.get(e);
                            return e && t ? c.createElement(I.Ua, {
                                key: t.display,
                                onClick: t.destinationHandler,
                                "data-a-target": "clip-moderation-button-" + t.display,
                                disabled: n.clipsMaintenance && N.includes(e)
                            }, c.createElement(I.Xa, {
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
                        return o && l.push(i.Delete), s && (l.push(i.DeleteAll), t.curator && t.broadcaster && (l.push(i.Ban), l.push(i.Timeout))), c.createElement(I.Xa, {
                            className: "moderation-menu"
                        }, c.createElement(T.a, null, c.createElement(I.z, {
                            type: I.F.Hollow,
                            icon: I.pb.More,
                            ariaLabel: Object(E.d)("More Options", "ModerationMenu"),
                            "data-a-target": "moderation-menu-button"
                        }), c.createElement(I.u, {
                            direction: I.v.TopRight
                        }, c.createElement(I.Xa, {
                            padding: {
                                y: .5
                            }
                        }, this.moderationMenuRender(l)))))
                    }, t.prototype.moderationMenuRender = function(e) {
                        var t = this;
                        return e.map(function(e) {
                            return t.renderMenuItem(e)
                        })
                    }, t = s.__decorate([Object(_.a)(R), Object(m.b)("ModerationMenu")], t)
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
                            }, M), Object(x.c)(t.props.clip.id, t.props.clip.game && t.props.clip.game.name, t.props.clip.broadcaster && t.props.clip.broadcaster.id, t.props.clip.broadcaster && t.props.clip.broadcaster.login, t.props.pageType)(k.b.CopyInput))
                        }, t.dismissBalloon = function() {
                            t.setState({
                                isShowingBalloon: !1
                            }), t.timeoutID && (clearTimeout(t.timeoutID), t.timeoutID = null)
                        }, t
                    }
                    return s.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive(), this.props.reportPlayerInstanceStarted(this.state.playerRefID)
                    }, t.prototype.render = function() {
                        var e, t = this.props.clip.broadcaster && c.createElement(I.U, {
                            to: "/" + this.props.clip.broadcaster.login,
                            onClick: this.props.closeModal,
                            "data-a-target": "clip-modal-broadcaster-link"
                        }, this.props.clip.broadcaster.login);
                        return e = this.props.clip.game && t ? Object(d.d)("{broadcaster} playing {game}", {
                            broadcaster: t,
                            game: c.createElement(I.U, {
                                to: "" + Object(C.c)(this.props.clip.game.name),
                                onClick: this.props.closeModal,
                                "data-a-target": "clip-modal-game-link"
                            }, this.props.clip.game.name)
                        }, "ClipsViewModalContent") : t, c.createElement(I.yb, {
                            className: "clips-view-modal-content",
                            background: I.r.Base
                        }, c.createElement(I.Xa, {
                            padding: {
                                bottom: 2
                            }
                        }, c.createElement(I.o, {
                            ratio: I.p.Aspect16x9
                        }, c.createElement("iframe", {
                            src: this.props.clip.embedURL,
                            width: "100%",
                            height: "100%",
                            allowFullScreen: !0
                        }))), c.createElement(I.Xa, {
                            padding: {
                                x: 2,
                                bottom: 2
                            }
                        }, c.createElement(I.Xa, {
                            display: I.X.Flex,
                            flexWrap: I.Ba.NoWrap
                        }, c.createElement(I.Xa, {
                            flexGrow: 1,
                            margin: {
                                right: 1
                            }
                        }, c.createElement(v.a, {
                            onClickOut: this.dismissBalloon
                        }, c.createElement(b.a, {
                            text: this.props.clip.url,
                            icon: !0,
                            iconAsset: I.pb.Link,
                            onSelection: this.copyClipURL,
                            "data-a-target": "clip-share-input"
                        }, c.createElement(I.u, {
                            show: this.state.isShowingBalloon,
                            direction: I.v.TopRight
                        }, c.createElement(I.Ua, {
                            onClick: this.dismissBalloon
                        }, c.createElement(I.Xa, {
                            padding: 1
                        }, c.createElement(I.W, {
                            bold: !0
                        }, Object(d.d)("Link copied to clipboard", "ClipsViewModalContent")))))))), c.createElement(w.a, {
                            clip: this.props.clip,
                            pageType: this.props.pageType
                        }), c.createElement(D, {
                            clip: this.props.clip,
                            updateModalViewState: this.props.updateModalViewState
                        }))), c.createElement(I.Xa, {
                            padding: {
                                x: 2,
                                bottom: 2
                            },
                            display: I.X.Flex,
                            flexWrap: I.Ba.NoWrap,
                            justifyContent: I.Wa.Between,
                            fullWidth: !0,
                            overflow: I.ab.Hidden
                        }, c.createElement(I.Xa, {
                            flexGrow: 1,
                            ellipsis: !0
                        }, c.createElement(I.Pa, {
                            ellipsis: !0
                        }, c.createElement(I.yb, {
                            display: I.X.Flex,
                            fontSize: I.Ca.Size5
                        }, c.createElement(I.Xa, {
                            ellipsis: !0
                        }, this.props.clip.title), c.createElement(I.Xa, {
                            flexShrink: 0
                        }, c.createElement(I.W, {
                            type: I.Ob.Span,
                            color: I.O.Alt2
                        }, " • ", Object(d.d)("{created, date, medium}", {
                            created: new Date(this.props.clip.createdAt)
                        }, "ClipsViewModalContent"))))), c.createElement(I.Pa, {
                            ellipsis: !0
                        }, c.createElement(I.yb, {
                            color: I.O.Alt2
                        }, e, e && !!this.props.clip.curator && c.createElement("span", null, " • "), this.props.clip.curator && Object(d.d)("Clipped by {curator}", {
                            curator: c.createElement(I.U, {
                                to: "/" + this.props.clip.curator.login,
                                onClick: this.props.closeModal,
                                "data-a-target": "clip-modal-curator-link"
                            }, this.props.clip.curator.login)
                        }, "ClipsViewModalContent")))), c.createElement(I.yb, {
                            display: I.X.Flex,
                            padding: {
                                bottom: 2,
                                left: 2
                            },
                            fontSize: I.Ca.Size5,
                            color: I.O.Alt2,
                            flexShrink: 0
                        }, c.createElement(I.Xa, {
                            margin: {
                                right: .5
                            },
                            alignItems: I.f.Center,
                            display: I.X.Flex
                        }, c.createElement(I.ob, {
                            asset: I.pb.GlyphViews
                        })), Object(d.d)("{viewCount, number} views", {
                            viewCount: this.props.clip.viewCount
                        }, "ClipsViewModalContent"))))
                    }, t = s.__decorate([Object(m.b)("ClipsViewModalContent")], t)
                }(c.Component),
                L = n("S1Za");
            var j = Object(r.connect)(null, function(e) {
                    return Object(a.bindActionCreators)({
                        reportPlayerInstanceStarted: L.b
                    }, e)
                })(P),
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
                        this.props.clipIndex > 0 && (e = c.createElement(I.Xa, {
                            position: I.fb.Absolute,
                            display: I.X.Flex,
                            alignItems: I.f.Stretch,
                            className: "clip-carousel-button clip-carousel-button--left"
                        }, c.createElement(I.A, {
                            ariaLabel: Object(d.d)("Previous clip", "ClipsViewModalNavigation"),
                            type: I.C.Primary,
                            icon: I.pb.AngleLeft,
                            onClick: this.updateClipBackward,
                            "data-test-selector": "clips-view-modal-navigation-back"
                        })));
                        var n = this.props.getClips();
                        return this.props.loadMoreClips && n.length - this.props.clipIndex < 4 && this.props.loadMoreClips(), this.props.clipIndex < n.length - 1 && (t = c.createElement(I.Xa, {
                            position: I.fb.Absolute,
                            display: I.X.Flex,
                            alignItems: I.f.Stretch,
                            className: "clip-carousel-button clip-carousel-button--right"
                        }, c.createElement(I.A, {
                            ariaLabel: Object(d.d)("Next clip", "ClipsViewModalNavigation"),
                            type: I.C.Primary,
                            icon: I.pb.AngleRight,
                            onClick: this.updateClipForward,
                            "data-test-selector": "clips-view-modal-navigation-forward"
                        }))), c.createElement(I.Xa, {
                            className: "clips-view-modal-navigation"
                        }, e, c.createElement(j, {
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
                U = Object(m.b)("ClipsViewModalNavigation")(F);
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
                            case i.Delete:
                                t = c.createElement(p.d, {
                                    slug: this.props.clip.slug,
                                    onClose: this.setToViewState
                                });
                                break;
                            case i.DeleteAll:
                                t = c.createElement(p.e, {
                                    slug: this.props.clip.slug,
                                    onClose: this.setToViewState
                                });
                                break;
                            case i.Ban:
                            case i.Timeout:
                                if (this.props.clip.curator && this.props.clip.broadcaster) {
                                    t = c.createElement(p.b, {
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
                        return c.createElement(I.Xa, {
                            className: l(n)
                        }, t, c.createElement(u.a, {
                            closeOnBackdropClick: !0,
                            closeOnPageNavigation: !0
                        }))
                    }, t
                }(c.Component)),
                W = Object(m.b)("ClipsViewModal")(V);
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
        QV0j: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            });
            var i = n("oB8h"),
                r = function(e) {
                    switch (e) {
                        case i.a.Live:
                            return i.a.Live;
                        case i.a.Premiere:
                            return i.a.Premiere;
                        case i.a.Rerun:
                            return i.a.Rerun;
                        case i.a.WatchParty:
                            return i.a.WatchParty;
                        default:
                            return null
                    }
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
                    return i.__extends(t, e), t.prototype.componentDidUpdate = function() {
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
                        return a.createElement(u.Xa, {
                            margin: {
                                bottom: 2
                            }
                        }, a.createElement(u.Ea, {
                            id: "reporting-modal__select",
                            label: Object(o.d)("Select Reason (required)", "ReportUserModal")
                        }, a.createElement(u.ub, {
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
                }), Object(c.b)("ReportReasonSelect"))(m);
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
                return i.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(u.Xa, {
                        display: u.X.Flex,
                        flexDirection: u.Aa.Column,
                        alignItems: u.f.Center,
                        justifyContent: u.Wa.Center
                    }, this.renderStatusMessage(), this.renderBody())
                }, t.prototype.renderBody = function() {
                    return this.props.submitStatus === g.Success ? a.createElement("div", null, a.createElement(u.z, {
                        onClick: this.props.onClose
                    }, a.createElement(u.Xa, {
                        padding: {
                            x: 2
                        }
                    }, Object(o.d)("Close", "ReportUser")))) : a.createElement("div", null, a.createElement(u.Xa, {
                        "data-test-selector": "reporting.title",
                        margin: {
                            bottom: 1
                        },
                        "data-a-target": "reporting-channel-name"
                    }, a.createElement(u.W, {
                        type: u.Ob.H4
                    }, this.props.title), a.createElement(u.yb, {
                        color: u.O.Alt2,
                        margin: {
                            top: 1
                        }
                    }, this.headerMessage)), a.createElement("form", null, a.createElement(u.yb, {
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
                    }), a.createElement(u.Ea, {
                        id: "reporting__text-area",
                        label: Object(o.d)("Description (required)", "ReportUser")
                    }, a.createElement(u.Lb, {
                        defaultValue: this.props.defaultDescription,
                        onChange: this.handleTextAreaChange
                    }))), a.createElement(u.yb, {
                        display: u.X.Flex,
                        justifyContent: u.Wa.Center
                    }, a.createElement(u.z, {
                        onClick: this.handleSubmit
                    }, a.createElement(u.Xa, {
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
                    var t = r({
                        "reporting__error-container": this.props.submitStatus !== g.Success,
                        "reporting__success-container": this.props.submitStatus === g.Success
                    });
                    return a.createElement(u.yb, {
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
        Yurh: function(e, t, n) {
            "use strict";
            var i, r;
            n.d(t, "b", function() {
                    return i
                }), n.d(t, "a", function() {
                    return r
                }),
                function(e) {
                    e[e.Unspecified = 0] = "Unspecified", e[e.NotInterested = 1] = "NotInterested", e[e.AlreadyWatched = 3] = "AlreadyWatched", e[e.Other = 4] = "Other"
                }(i || (i = {})),
                function(e) {
                    e[e.Channel = 1] = "Channel", e[e.Category = 2] = "Category", e[e.Shelf = 3] = "Shelf", e[e.Vod = 4] = "Vod"
                }(r || (r = {}))
        },
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
                h = ((r = {})[u.a.Premiere] = p.pb.VideoPremiere, r[u.a.Rerun] = p.pb.VideoRerun, r[u.a.WatchParty] = p.pb.VideoRerun, r),
                g = ((a = {})[u.a.Premiere] = p.qb.Live, a[u.a.Rerun] = p.qb.Inherit, a[u.a.WatchParty] = p.qb.Inherit, a),
                f = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return s.__extends(t, e), t.prototype.render = function() {
                        return c.createElement(p.yb, {
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
                            type: p.Ob.Span
                        }, this.getLabel()))
                    }, t.prototype.getClassNames = function() {
                        var e = {
                            "stream-type-indicator": !0
                        };
                        return e[m[this.props.type]] = !0, l(e)
                    }, t.prototype.getIcon = function() {
                        return this.props.hosting ? c.createElement(p.yb, {
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
                        })) : c.createElement(p.ob, {
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
            var i, r = n("mrSG"),
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
                            return a.createElement(b.U, {
                                hoverUnderlineNone: !0,
                                onClick: t.handleBlock,
                                "data-test-selector": k
                            }, a.createElement(b.Xa, {
                                display: b.X.Flex,
                                alignItems: b.f.Center
                            }, a.createElement(b.ob, {
                                type: b.qb.Brand,
                                asset: b.pb.Ban
                            }), a.createElement(b.Xa, {
                                margin: {
                                    left: .5
                                }
                            }, Object(l.d)("Block {user}", {
                                user: t.props.targetUser.displayName
                            }, "ReportWizardBlockActions"))))
                        }, t.renderUnblock = function() {
                            return a.createElement(b.Xa, {
                                className: "reporting-wizard__block-actions",
                                display: b.X.Flex,
                                alignItems: b.f.Center
                            }, a.createElement(b.ob, {
                                type: b.qb.Success,
                                asset: b.pb.FollowCheck
                            }), a.createElement(b.Xa, {
                                margin: {
                                    right: 1
                                }
                            }, a.createElement(b.W, {
                                className: "block-user__success",
                                type: b.Ob.Span
                            }, Object(l.d)("{user} blocked", {
                                user: t.props.targetUser.displayName
                            }, "ReportWizardBlockActions"))), a.createElement(b.U, {
                                hoverUnderlineNone: !0,
                                onClick: t.handleUnblock,
                                "data-test-selector": y
                            }, a.createElement(b.Xa, {
                                margin: {
                                    left: .5
                                }
                            }, Object(l.d)("Unblock", "ReportWizardBlockActions"))))
                        }, t.handleBlock = function() {
                            return r.__awaiter(t, void 0, void 0, function() {
                                return r.__generator(this, function(e) {
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
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this.state.userBlocked ? this.renderUnblock() : this.renderBlock(),
                            t = Object(v.a)(this.props.targetUser.login, this.props.targetUser.displayName, !0);
                        return a.createElement(b.yb, {
                            borderTop: !0,
                            padding: {
                                y: 1
                            },
                            margin: {
                                top: 1
                            }
                        }, a.createElement(b.Xa, null, Object(l.d)("Would you like to block {user}?", {
                            user: t
                        }, "ReportWizardBlockActions")), a.createElement(b.yb, {
                            color: b.O.Alt2,
                            margin: {
                                y: 1
                            }
                        }, a.createElement(b.Xb, {
                            baseFontSize: b.Ca.Size6
                        }, a.createElement("p", null, Object(l.d)("Blocking {user} will:", {
                            user: t
                        }, "ReportWizardBlockActions")), a.createElement("ul", null, a.createElement("li", null, Object(l.d)("Prevent them from sending you whispers", "ReportWizardBlockActions")), a.createElement("li", null, Object(l.d)("Prevent them from hosting you", "ReportWizardBlockActions")), a.createElement("li", null, Object(l.d)("Prevent them from adding you as a friend", "ReportWizardBlockActions")), a.createElement("li", null, Object(l.d)("Filter their messages out of chats you don’t moderate", "ReportWizardBlockActions"))))), a.createElement(b.Xa, {
                            margin: {
                                top: 1
                            }
                        }, e))
                    }, t
                }(a.Component),
                S = n("4qQ0");
            ! function(e) {
                e.Link = "link", e.MultipleChoice = "multiple choice", e.Text = "text", e.Textarea = "textarea"
            }(i || (i = {}));
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
                        type: i.Textarea,
                        required: !0
                    },
                    input_link: {
                        getTitle: function() {
                            return Object(l.d)("If possible, please provide a link to show us where the issue occurred. Links that do not lead to the original source of the content may not be usable as evidence.", "ReportModalWizard")
                        },
                        rows: 2,
                        value: "external links",
                        type: i.Textarea
                    },
                    input_usernames: {
                        getTitle: function() {
                            return Object(l.d)("If you know the usernames of any other Twitch accounts that may be owned by this person, please list them in this space.", "ReportModalWizard")
                        },
                        value: "other usernames",
                        rows: 2,
                        type: i.Textarea
                    },
                    input_connection: {
                        getTitle: function() {
                            return Object(l.d)("Please describe how you connected the offsite content to this Twitch account.", "ReportModalWizard")
                        },
                        value: "offsite content connection",
                        type: i.Textarea
                    },
                    input_comments: {
                        getTitle: function() {
                            return Object(l.d)("If you have any other comments you would like to add, please do so here.", "ReportModalWizard")
                        },
                        value: "comments",
                        type: i.Textarea
                    },
                    input_identifyOwner: {
                        getTitle: function() {
                            return Object(l.d)("Please describe how you identified this person as the owner of this Twitch account.", "ReportModalWizard")
                        },
                        rows: 2,
                        value: "connect account owner",
                        type: i.Textarea
                    },
                    endBlurb_socialmedia: {
                        getTitle: function() {
                            return Object(l.d)("Please submit a report to the site or service where the incident occurred as well if you have not already done so.", "ReportModalWizard")
                        },
                        type: i.Text
                    },
                    endBlurb_threat: {
                        getTitle: function() {
                            return Object(l.d)("If you feel you are in immediate danger, please contact your local law enforcement.", "ReportModalWizard")
                        },
                        type: i.Text
                    },
                    endLink_selfharm: {
                        getTitle: function() {
                            return Object(l.d)("Learn more about mental health support", "ReportModalWizard")
                        },
                        value: "https://help.twitch.tv/customer/en/portal/articles/2904486-twitch-cares-mental-health-support-information",
                        type: i.Link
                    },
                    endLink_DMCA: {
                        getTitle: function() {
                            return Object(l.d)("View our DMCA Notification Guidelines", "ReportModalWizard")
                        },
                        value: "https://www.twitch.tv/p/legal/dmca-guidelines/",
                        type: i.Link
                    },
                    endLink_trademark: {
                        getTitle: function() {
                            return Object(l.d)("View our Trademark Policy", "ReportModalWizard")
                        },
                        value: "https://www.twitch.tv/p/legal/trademark-policy/",
                        type: i.Link
                    },
                    endLink_devAgreement: {
                        getTitle: function() {
                            return Object(l.d)("View our Developer Agreement", "ReportModalWizard")
                        },
                        value: "https://www.twitch.tv/p/legal/developer-agreement/",
                        type: i.Link
                    },
                    endLink_eventCoC: {
                        getTitle: function() {
                            return Object(l.d)("View our Events Code of Conduct", "ReportModalWizard")
                        },
                        value: "https://www.twitch.tv/p/legal/events-code-of-conduct",
                        type: i.Link
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
                E = function(e) {
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
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.currentCard.getDescription ? a.createElement(b.Xa, {
                            padding: {
                                bottom: 1
                            }
                        }, this.props.currentCard.getDescription()) : null;
                        return a.createElement(b.Xa, {
                            className: "reporting-wizard-card"
                        }, e, a.createElement(b.Ea, {
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
                                case i.Text:
                                    return a.createElement(b.Xa, {
                                        key: n,
                                        padding: {
                                            bottom: 1
                                        }
                                    }, t.getTitle());
                                case i.Link:
                                    return a.createElement(b.Xa, {
                                        key: n,
                                        padding: {
                                            bottom: 1
                                        }
                                    }, a.createElement(b.U, {
                                        to: t.value,
                                        targetBlank: !0
                                    }, a.createElement(b.Xa, {
                                        display: b.X.Flex
                                    }, a.createElement(b.Xa, {
                                        display: b.X.Inline,
                                        padding: {
                                            right: .5
                                        }
                                    }, a.createElement(b.ob, {
                                        asset: b.pb.Document
                                    })), t.getTitle())));
                                case i.Textarea:
                                    var r = t.value ? e.props.userTextInputs[t.value] : void 0,
                                        o = t.required && (!r || !!r && 0 === r.trim().length);
                                    return a.createElement(b.Xa, {
                                        key: n,
                                        padding: {
                                            bottom: 1
                                        }
                                    }, a.createElement(b.Ea, {
                                        label: t.getTitle(),
                                        labelOptional: t.required ? "" : Object(l.d)("Optional", "ReportModalWizardCard")
                                    }, a.createElement(b.Lb, {
                                        onChange: e.onChange,
                                        rows: t.rows || 3,
                                        name: t.value,
                                        error: e.props.error && o,
                                        value: r,
                                        "data-test-selector": "report-wizard-textarea"
                                    })));
                                case i.MultipleChoice:
                                default:
                                    return a.createElement(b.Xa, {
                                        key: n,
                                        padding: {
                                            y: .5
                                        }
                                    }, a.createElement(b.lb, {
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
                O = n("RQ6e");
            ! function(e) {
                e.Confirm = "Confirm", e.MultipleChoice = "MultipleChoice", e.Info = "End Card"
            }(w || (w = {}));
            var I, R, N, D = {
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
                P = {
                    socialMedia: r.__assign({}, M, {
                        items: [_.endBlurb_socialmedia]
                    }),
                    violence: r.__assign({}, M, {
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
                j = {
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
                F = {
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
                U = r.__assign({}, F.content, {
                    getDescription: function() {
                        return Object(l.d)("Please note that we may review additional messages in this conversation to determine the context of your report.", "ReportModalWizard")
                    }
                }),
                A = {
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
                V = {
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
                    banEvasion: r.__assign({}, W, {
                        items: [_.input_usernames, _.input_description],
                        value: "ban evasion tell us more"
                    }),
                    socialMedia: r.__assign({}, W, {
                        items: [_.input_link, _.input_connection, _.input_description],
                        nextCard: P.socialMedia,
                        value: "social media tell us more"
                    })
                },
                z = {
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
                G = {
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
                    external_violence: r.__assign({}, z.violence, {
                        items: [_.threat_me, _.threat_person, _.threat_group],
                        nextCard: B.socialMedia
                    }),
                    external_abusive: r.__assign({}, z.content, {
                        items: [_.hateSpeech, _.harassment, _.external_abusiveViolence, _.external_commitingViolence, _.swatting, _.personalInfo],
                        nextCard: B.socialMedia
                    })
                },
                X = {
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
                H = {
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
                Y = L,
                $ = W,
                K = M,
                J = {
                    video: j.identifyUser,
                    whisper: U,
                    chat: F.content,
                    profile: A.content,
                    room: V,
                    "somewhere else": G.identifyLocation,
                    streamer: j.content,
                    "someone else in video": j.content,
                    "someone in chat": F.content,
                    general_video: j.general,
                    general_messaging: F.general,
                    general_profile: A.general,
                    "channel owner": A.content,
                    "community member": F.content,
                    "on twitch": A.content,
                    "another site": G.externalSite,
                    "twitch event": P.twitchEvent,
                    "brigading/raids": B.socialMedia,
                    threatening: G.external_violence,
                    "hateful/harassing": G.external_abusive,
                    "external site; threatening violence": G.external_violence,
                    "external site; committing violence": G.external_violence,
                    "external site; scam": B.socialMedia,
                    "ban evasion": H,
                    spam: X,
                    hateful: z.content,
                    impersonation: Q,
                    "violence/threats": z.violence,
                    "threatening violence": z.violence,
                    "committing violence": z.violence,
                    abusive: z.content,
                    "inappropriate content": q,
                    "intellectual property": P.legal,
                    "violating developer agreement": P.legal
                },
                Z = {
                    selfharm: P.selfharm,
                    harm: P.violence,
                    other: K
                },
                ee = {
                    CHANNEL_FEED_POST_REPORT: A.content,
                    COMMUNITY_REPORT: A.content,
                    CHAT_REPORT: F.content,
                    CLIP_REPORT: j.content,
                    EVENT_REPORT: A.content,
                    EXTENSION_REPORT: A.content,
                    LIVE_UP_REPORT: A.content,
                    ROOM_REPORT: V,
                    WHISPER_REPORT: U,
                    VOD_COMMENT_REPORT: F.content
                },
                te = "report-wizard-back",
                ne = "report-wizard-close",
                ie = "report-wizard-next",
                re = "report-wizard-submit",
                ae = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            currentCard: t.props.currentCard || ee[t.props.reportContentType] || Y,
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
                            return a.createElement(b.Xa, {
                                margin: {
                                    top: 1
                                }
                            }, a.createElement(b.W, null, Object(l.d)("We are going to ask you a few questions to help us investigate your report quickly and accurately.", "ReportModalWizard")))
                        }, t.renderButtons = function() {
                            var e = Object(l.d)("Close", "ReportModalWizard"),
                                n = t.handleClose,
                                i = ne,
                                r = !1,
                                o = t.state.prevCards.length ? t.renderBack() : null;
                            switch (t.state.currentCard.type) {
                                case w.MultipleChoice:
                                    e = Object(l.d)("Next", "ReportModalWizard"), n = t.handleNext, i = ie, r = !t.state.currentSelection;
                                    break;
                                case w.Confirm:
                                    e = Object(l.d)("Submit Report", "ReportModalWizard"), n = t.handleSubmit, r = !t.state.userTextInput, i = re
                            }
                            return a.createElement(b.Xa, null, o, a.createElement(b.z, {
                                onClick: n,
                                disabled: r,
                                "data-test-selector": i
                            }, a.createElement(b.Xa, {
                                padding: {
                                    x: 1
                                }
                            }, e)))
                        }, t.renderBack = function() {
                            return a.createElement(b.Xa, {
                                margin: {
                                    right: 1
                                },
                                display: b.X.InlineBlock
                            }, a.createElement(b.z, {
                                type: b.F.Hollow,
                                onClick: t.handleBack,
                                "data-test-selector": te
                            }, a.createElement(b.Xa, {
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
                                    s = e.nextCard || $;
                                J[t.state.currentSelection.value] && (s = J[t.state.currentSelection.value]);
                                var l = t.state.currentSelection.reportReason || t.state.reportReason,
                                    c = s.type === w.Info;
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
                                    return t.trackNavigation(R.Next, e.value)
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
                                if (e.type !== i.Textarea || !e.required) return !1;
                                var n = t.state.userTextInput[e.value],
                                    r = n && 0 === n.trim().length;
                                return !n || r
                            }).length
                        }, t.handleSubmit = function() {
                            return r.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, i, a = this;
                                return r.__generator(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            return e = Object(l.d)("Additional information is required.", "ReportModalWizard"), this.requiredInputsNonEmpty() ? (t = this.state.reportReason || "other", n = this.createReportDescription(), [4, this.props.onSubmit(t, n, null, null, this.state.reportContext)]) : [3, 2];
                                        case 1:
                                            switch (r.sent(), this.props.submitStatus) {
                                                case O.b.FormError:
                                                    this.setState({
                                                        error: e
                                                    });
                                                    break;
                                                case O.b.Success:
                                                    i = K, Z[t] && (i = Z[t]), this.state.currentCard.nextCard && (i = this.state.currentCard.nextCard), this.setState({
                                                        currentCard: i,
                                                        prevCards: [],
                                                        prevSelections: [],
                                                        currentSelection: null,
                                                        displacedSelections: [],
                                                        userTextInput: {},
                                                        error: ""
                                                    }, function() {
                                                        return a.trackNavigation(R.Submit)
                                                    });
                                                    break;
                                                case O.b.UserError:
                                                    this.setState({
                                                        error: Object(l.d)("This account could not be reported. It may have already been suspended, or the owner may have deleted it.", "ReportModalWizard")
                                                    });
                                                    break;
                                                case O.b.MutationError:
                                                default:
                                                    this.setState({
                                                        error: Object(l.d)("Sorry, a network error occurred when submitting your report. Please try again later.", "ReportModalWizard")
                                                    })
                                            }
                                            return [3, 3];
                                        case 2:
                                            this.props.onError(O.b.FormError), this.setState({
                                                error: e
                                            }), r.label = 3;
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        }, t.handleBack = function() {
                            return r.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, i, a, o = this;
                                return r.__generator(this, function(r) {
                                    return e = this.state.currentCard, t = this.state.prevCards[this.state.prevCards.length - 1], n = this.state.prevSelections[this.state.prevSelections.length - 1], i = !n.differentTarget && this.state.targetUnknown, a = this.state.displacedSelections, this.state.currentSelection && (a = a.concat(this.state.currentSelection)), t && n && this.setState({
                                        currentCard: t,
                                        currentSelection: n,
                                        displacedSelections: a,
                                        prevCards: this.state.prevCards.slice(0, -1),
                                        prevSelections: this.state.prevSelections.slice(0, -1),
                                        error: "",
                                        targetUnknown: i
                                    }, function() {
                                        return o.trackNavigation(R.Back, e.value)
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
                    return r.__extends(t, e), t.prototype.componentWillUnmount = function() {
                        this.state.modalCloseTracked || this.props.trackClose(N.Close, this.state.currentCard.value)
                    }, t.prototype.render = function() {
                        var e = this.state.currentCard.type === w.Info && this.state.currentCard.blockPrompt ? a.createElement(C, {
                                targetUser: this.props.targetUser,
                                onBlock: this.props.onBlock,
                                onUnblock: this.props.onUnblock,
                                userBlocked: this.props.userBlocked
                            }) : null,
                            t = this.state.error ? a.createElement(b.yb, {
                                fullWidth: !0,
                                margin: {
                                    bottom: 1
                                },
                                padding: 1,
                                className: "reporting__error-container"
                            }, this.state.error) : null,
                            n = this.state.prevCards.length || this.state.currentCard.type === w.Info ? null : this.renderPrimer();
                        return a.createElement(b.yb, {
                            className: "reporting-wizard",
                            display: b.X.Flex,
                            margin: {
                                x: 1
                            },
                            flexDirection: b.Aa.Column,
                            fullHeight: !0,
                            "data-test-card-value": this.state.currentCard.value
                        }, t, a.createElement(b.W, {
                            bold: !0,
                            fontSize: b.Ca.Size4
                        }, this.getTitle()), n, a.createElement(b.Xa, {
                            margin: {
                                y: 1
                            }
                        }, a.createElement(E, {
                            currentCard: this.state.currentCard,
                            currentSelection: this.state.currentSelection,
                            targetUser: this.props.targetUser,
                            targetUserID: this.props.targetUser.id,
                            onChangeRadio: this.handleSelection,
                            onChangeText: this.handleTextInput,
                            userTextInputs: this.state.userTextInput,
                            error: this.props.submitStatus === O.b.FormError && !!this.state.error
                        }), e), this.renderButtons())
                    }, t
                }(a.Component),
                oe = n("+PZR"),
                se = n("PDCe"),
                le = n("s8Ou"),
                ce = n("0hI/");
            n.d(t, "c", function() {
                    return R
                }), n.d(t, "a", function() {
                    return N
                }), n.d(t, "b", function() {
                    return ue
                }),
                function(e) {
                    e.Close = "close", e.Open = "open", e.Submit = "submit_report", e.ToggleSettings = "modal_settings"
                }(I || (I = {})),
                function(e) {
                    e.Back = "back", e.Close = "close", e.Open = "open", e.Next = "next", e.Submit = "submit_report", e.ToggleSettings = "modal_settings"
                }(R || (R = {})),
                function(e) {
                    e.Close = "close", e.Finish = "finish"
                }(N || (N = {}));
            var de = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    n.handleSubmit = function(e, t, i, a, o) {
                        return r.__awaiter(n, void 0, void 0, function() {
                            var n, s, c, d, u = this;
                            return r.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        if (e !== O.a) return [3, 5];
                                        c = {
                                            userID: this.props.data.targetUser.id,
                                            communityID: i || "",
                                            reason: t
                                        }, r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 3, , 4]), [4, this.props.reportUserInCommunity(Object(p.a)(c))];
                                    case 2:
                                        return r.sent(), l.p.tracking.track(g.SpadeEventType.CommunityModeration, {
                                            community_id: i,
                                            name: a,
                                            is_official: !1,
                                            user_id: this.props.sessionUser && this.props.sessionUser.id,
                                            target_id: this.props.reportContext.targetUserID,
                                            action: "report",
                                            reason: e
                                        }), this.setState({
                                            submitStatus: O.b.Success
                                        }, function() {
                                            u.state.showWizard || u.trackAction(I.Submit)
                                        }), [3, 4];
                                    case 3:
                                        return n = r.sent(), l.k.error(n, "ReportUserInCommunity Mutation failed."), this.setState({
                                            submitStatus: O.b.MutationError
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
                                            submitStatus: O.b.UserError
                                        }), [2];
                                        r.label = 6;
                                    case 6:
                                        return r.trys.push([6, 8, , 9]), [4, this.props.reportUser(Object(p.a)(c))];
                                    case 7:
                                        return r.sent(), this.props.reportContext.contentType === S.a.Community && l.p.tracking.track(g.SpadeEventType.CommunityReport, {
                                            community_id: this.props.reportContext.contentID,
                                            name: this.props.reportContext.extra,
                                            is_official: !1,
                                            user_id: this.props.sessionUser && this.props.sessionUser.id,
                                            reason: e
                                        }), this.setState({
                                            submitStatus: O.b.Success
                                        }, function() {
                                            u.state.showWizard || u.trackAction(I.Submit)
                                        }), [3, 9];
                                    case 8:
                                        return d = r.sent(), l.k.error(d, "ReportUser Mutation failed."), this.setState({
                                            submitStatus: O.b.MutationError
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
                        n.props.blockUserMutation(n.props.data.targetUser.id, void 0, void 0, r.__assign({}, n.props.sessionUser, {
                            __typename: "User"
                        })), n.setState({
                            userBlocked: !0
                        })
                    }, n.onUnblock = function() {
                        n.props.unblockUserMutation(n.props.data.targetUser.id, r.__assign({}, n.props.sessionUser, {
                            __typename: "User"
                        })), n.setState({
                            userBlocked: !1
                        })
                    }, n.trackOpen = function(e) {
                        n.state.openEventSent || (n.state.showWizard ? n.trackWizardAction(R.Open, void 0, e) : n.trackAction(I.Open), n.setState({
                            openEventSent: !0
                        }))
                    }, n.trackClose = function(e, t) {
                        n.state.closeEventSent || (n.state.showWizard ? n.trackWizardAction(R.Close, t, void 0, e) : n.trackAction(I.Close), n.setState({
                            closeEventSent: !0
                        }))
                    }, n.trackWizardAction = function(e, t, i, r) {
                        l.p.tracking.track(g.SpadeEventType.ReportWizardFlowAction, {
                            ui_context: n.props.reportContext.contentType,
                            target_user_id: n.props.reportContext.targetUserID,
                            report_sent: n.state.submitStatus === O.b.Success,
                            modal_type: "wizard_v1",
                            extra_user_id: n.props.reportContext.additionalTrackingID,
                            action: e,
                            close_type: r,
                            report_session_id: n.reportID,
                            current_step: t,
                            navigated_to: i
                        })
                    }, n.trackAction = function(e) {
                        l.p.tracking.track(g.SpadeEventType.ReportFlowAction, {
                            ui_context: n.props.reportContext.contentType,
                            target_user_id: n.props.reportContext.targetUserID,
                            report_sent: n.state.submitStatus === O.b.Success,
                            extra_user_id: n.props.reportContext.additionalTrackingID,
                            action: e,
                            report_session_id: n.reportID
                        })
                    }, n.reportID = Object(m.a)();
                    var i = l.p.experiments.getAssignment(h.b.NewReportingWizard);
                    return n.state = {
                        submitStatus: O.b.Unsubmitted,
                        showWizard: "yes" === i,
                        openEventSent: !1,
                        closeEventSent: !1,
                        userBlocked: !1
                    }, n
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.trackOpen()
                }, t.prototype.componentWillUnmount = function() {
                    this.handleClose(), this.state.showWizard || this.trackClose()
                }, t.prototype.render = function() {
                    if (this.props.data.error) return a.createElement(b.Xa, {
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(b.W, {
                        fontSize: b.Ca.Size5
                    }, Object(l.d)("There was an unexpected error. Please refresh the page and try again", "ReportUser")));
                    if (this.props.data.loading) return a.createElement(b.eb, {
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
                        return this.state.showWizard ? this.props.data.loading ? a.createElement(b.Za, null) : a.createElement(ae, r.__assign({}, e, {
                            user: this.props.sessionUser,
                            onBlock: this.onBlock,
                            onUnblock: this.onUnblock,
                            targetUser: this.props.data.targetUser,
                            trackAction: this.trackWizardAction,
                            trackClose: this.trackClose,
                            userBlocked: this.userBlocked
                        })) : a.createElement(O.c, r.__assign({}, e, {
                            targetUser: this.props.data.targetUser
                        }))
                    }
                    return a.createElement(b.Xa, {
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(b.W, {
                        fontSize: b.Ca.Size5
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
            }), Object(f.b)("ReportUser", {
                autoReportInteractive: !0
            }), Object(d.a)(), Object(u.a)(), Object(o.connect)(function(e) {
                return {
                    sessionUser: e.session.user
                }
            }, null))(de)
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
                a = 60,
                o = 60 * a,
                s = 24 * o,
                l = 7 * s,
                c = 4 * l;
            var d, u = n("4w0E");

            function p(e) {
                var t = this;
                return Object(r.a)(u, {
                    props: function(n) {
                        return {
                            banUserMutation: function(r, d) {
                                return void 0 === d && (d = null), i.__awaiter(t, void 0, void 0, function() {
                                    var t;
                                    return i.__generator(this, function(i) {
                                        switch (i.label) {
                                            case 0:
                                                if (t = e(n.ownProps).channelID, !n.mutate) return [3, 5];
                                                i.label = 1;
                                            case 1:
                                                return i.trys.push([1, 3, , 4]), [4, n.mutate({
                                                    variables: {
                                                        input: {
                                                            channelID: t,
                                                            bannedUserLogin: r,
                                                            expiresIn: d && function(e) {
                                                                if (!e) return "0s";
                                                                var t = e,
                                                                    n = "";
                                                                if (t > c) {
                                                                    var i = Math.floor(t / c);
                                                                    t -= i * c, n += i + "mo"
                                                                }
                                                                if (t > l) {
                                                                    var r = Math.floor(t / l);
                                                                    t -= r * l, n += r + "w"
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
                                                return [2, i.sent().data];
                                            case 3:
                                                throw i.sent(), new Error("Unable to ban user");
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
                            return t.props.successContent ? r.createElement(s.yb, {
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
                                type: s.Ob.Strong
                            }, t.props.successContent)) : null
                        }, t.renderError = function() {
                            return t.props.errorContent ? r.createElement(s.yb, {
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
                                type: s.Ob.Strong,
                                color: s.O.Error
                            }, t.props.errorContent)) : null
                        }, t.onSubmit = function() {
                            t.props.onSubmit()
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return this.props.successContent ? r.createElement(o.a, {
                            onClickOut: this.props.onClose
                        }, r.createElement(s.yb, {
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
                        }, r.createElement(s.yb, {
                            padding: 2,
                            background: s.r.Base,
                            className: "clip-modal"
                        }, r.createElement(s.yb, {
                            "data-test-selector": l.TITLE,
                            borderBottom: !0,
                            margin: {
                                bottom: 2
                            },
                            padding: {
                                bottom: 1
                            }
                        }, this.props.title), r.createElement(s.yb, {
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
                                type: s.Ob.H5,
                                ellipsis: !0
                            }, Object(a.d)("Timeout this Clip Creator for 24 hours from Your Channel", "ClipsModalBanUser")) : r.createElement(s.W, {
                                type: s.Ob.H5,
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
                                var e, t;
                                return i.__generator(this, function(n) {
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
                h = Object(u.b)("ClipsModalBanUser")(Object(d.b)(function(e) {
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
                        }, n.state = k, n
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = [r.createElement(s.W, {
                            key: "title",
                            type: s.Ob.H4
                        }, Object(a.d)("Delete This Clip", "ClipsModalDelete")), r.createElement(s.Xa, {
                            key: "message",
                            margin: {
                                top: 1
                            }
                        }, r.createElement(s.W, {
                            type: s.Ob.P,
                            color: s.O.Alt2
                        }, Object(a.d)("This clip will be permanently deleted.", "ClipsModalDelete")))];
                        if (!this.props.data.clip) return null;
                        var t = null;
                        this.props.data.clip.curator && (t = r.createElement("span", null, " • ", Object(a.d)("Clipped by {curator}", {
                            curator: this.props.data.clip.curator.login
                        }, "ClipsModalDelete")));
                        var n = r.createElement(s.yb, {
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
                            type: s.Ob.H5
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
                C = Object(g.a)(b)(v({
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
                            type: s.Ob.P
                        }, Object(a.d)("This clip and all other clips created from the same video will be permanently deleted.", "ClipsModalDeleteAll"));
                        return r.createElement(c, {
                            onSubmit: this.deleteAll,
                            onClose: this.props.onClose,
                            title: r.createElement(s.W, {
                                type: s.Ob.H4
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
                O = {
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
                        }, n.state = O, n
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = r.createElement(s.W, {
                                type: s.Ob.H4
                            }, Object(a.d)("Delete these clips?", "ClipsModalBatchDelete")),
                            t = r.createElement(s.W, {
                                type: s.Ob.P
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
                R = v({
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
                })(I);
            n.d(t, "a", function() {
                return c
            }), n.d(t, "b", function() {
                return h
            }), n.d(t, "d", function() {
                return C
            }), n.d(t, "e", function() {
                return E
            }), n.d(t, "c", function() {
                return R
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
                        position: o.fb.Absolute,
                        attachTop: !0,
                        attachRight: !0
                    }, Object(o.cc)(e)), r.createElement(o.Rb, {
                        direction: o.Tb.Top,
                        align: o.Sb.Right,
                        label: Object(a.d)("Offers in-game Drops", "DropsBadge")
                    }, r.createElement(o.yb, {
                        className: "drops-badge__drops-icon",
                        position: o.fb.Relative,
                        padding: {
                            top: .5,
                            right: .5,
                            bottom: 3,
                            left: 3
                        },
                        overflow: o.ab.Hidden,
                        color: o.O.Overlay,
                        zIndex: o.bc.Default
                    }, r.createElement(o.U, {
                        type: o.V.Inherit,
                        hoverColorInherit: !0,
                        to: "https://help.twitch.tv/customer/en/portal/articles/2754380-how-to-earn-drops"
                    }, r.createElement(o.ob, {
                        asset: o.pb.Drops
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
                }, r.createElement(o.eb, null))), r.createElement(o.W, null, r.createElement(o.eb, {
                    width: 150
                })), r.createElement(o.W, {
                    fontSize: o.Ca.Size7
                }, r.createElement(o.eb, {
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
                    type: o.Ob.H3,
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
                }, Object(o.cc)(e)), r.createElement(o.G, {
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
                            position: s.fb.Relative,
                            className: "selectable-input-wrapper"
                        }, Object(s.cc)(this.props)), r.createElement(s.Ra, {
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
                        }, Object(c.cc)(n.props), {
                            download: n.props.text
                        }), n.renderIcon()) : n.isLink() ? a.createElement("a", r.__assign({
                            href: n.getLinkTarget(),
                            target: "_blank",
                            className: e,
                            onClick: n.onShareClickHandler
                        }, Object(c.cc)(n.props)), n.renderIcon()) : a.createElement("button", r.__assign({
                            onClick: n.copyPageUrl,
                            onMouseLeave: n.clearIsCopiedStatus,
                            className: e
                        }, Object(c.cc)(n.props)), n.renderIcon())
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
                        }, a.createElement(c.ob, {
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
                                return c.pb.Twitter;
                            case i.Facebook:
                                return c.pb.Facebook;
                            case i.VKontakte:
                                return c.pb.VKontakte;
                            case i.Reddit:
                                return c.pb.Reddit;
                            case i.Download:
                                return c.pb.Download;
                            case i.Copy:
                            default:
                                return c.pb.Copy
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
                    }, a.createElement(c.Rb, {
                        label: this.getTooltipFromType(),
                        direction: c.Tb.Bottom
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
            var i = n("mrSG"),
                r = n("17x9"),
                a = n("q1tI"),
                o = n("2xye"),
                s = n("yI6f"),
                l = {
                    cardIDtoItemTrackingIDMap: r.object,
                    trackTitleClick: r.func,
                    trackTitleImpression: r.func,
                    trackImpression: r.func,
                    trackClick: r.func
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
                                    i = t.reasonType,
                                    r = t.reasonTarget,
                                    a = t.rowName,
                                    l = Object(s.e)(),
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
                                Object(s.h)(c, o.PageviewContent.HeaderGameName), n.setState({
                                    headerImpressionID: l
                                })
                            }, n.trackTitleClick = function() {
                                var e = n.props.shelf,
                                    t = Object(s.f)(e.title),
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
                                Object(s.g)(c, o.PageviewContent.HeaderGameName)
                            }, n.trackImpression = function(e, t, i, r) {
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
                                    Object(s.h)(p), n.setState(function(e) {
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
                                    Object(s.g)(f, r)
                                }
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
                            return a.createElement(e, i.__assign({}, this.props, n))
                        }, n.childContextTypes = l, n
                    }(a.Component)
                }
            }
        },
        y4Ne: function(e, t, n) {},
        yI6f: function(e, t, n) {
            "use strict";
            var i, r, a, o, s, l, c, d = n("/7QA"),
                u = n("f00E"),
                p = n("2xye"),
                m = n("3sMy"),
                h = function() {
                    return Object(u.b)().substring(0, 16)
                };
            ! function(e) {
                e.TwitchHome = "twitch_home", e.BrowseLiveChannels = "browse_livechannels", e.BrowseCategories = "browse_categories", e.BrowseInCategoryChannels = "browse_incategory_channels"
            }(r || (r = {})),
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
            var g = ((i = {})[m.a.TopLiveChannels] = function(e) {
                return {
                    reasonType: s.Popularity,
                    reasonTarget: null,
                    reasonTargetType: l.Live,
                    rowName: e
                }
            }, i[m.a.TopGames] = function(e) {
                return {
                    reasonType: s.Popularity,
                    reasonTarget: null,
                    reasonTargetType: l.Game,
                    rowName: e
                }
            }, i[m.a.TopChannelsPlayingGame] = function(e, t) {
                return {
                    reasonType: s.Popularity,
                    reasonTarget: t.context && t.context.id || null,
                    reasonTargetType: l.Game,
                    rowName: e
                }
            }, i[m.a.TopLiveChannelsYouMayLike] = function(e) {
                return {
                    reasonType: s.Personalized,
                    reasonTarget: null,
                    reasonTargetType: l.Live,
                    rowName: e
                }
            }, i[m.a.TopGamesForYou] = function(e) {
                return {
                    reasonType: s.Personalized,
                    reasonTarget: null,
                    reasonTargetType: l.Game,
                    rowName: e
                }
            }, i[m.a.RecommendedBecauseYouWatchX] = function(e, t) {
                return {
                    reasonType: s.Watched,
                    reasonTarget: t.context && t.context.id || null,
                    reasonTargetType: l.Game,
                    rowName: e
                }
            }, i[m.a.RecommendedBecauseYouFollowX] = function(e, t) {
                return {
                    reasonType: s.Followed,
                    reasonTarget: t.context && t.context.id || null,
                    reasonTargetType: null,
                    rowName: e
                }
            }, i[m.a.GreatNewClipsYouMayHaveMissed] = function(e) {
                return {
                    reasonType: s.Popularity,
                    reasonTarget: null,
                    reasonTargetType: l.Clip,
                    rowName: e
                }
            }, i[m.a.TopNewVideosYouMayHaveMissed] = function(e) {
                return {
                    reasonType: s.Popularity,
                    reasonTarget: null,
                    reasonTargetType: l.Vod,
                    rowName: e
                }
            }, i);

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
                var n, i = null,
                    o = null,
                    s = null,
                    l = e.contentEdge && e.contentEdge.node && e.contentEdge.node.id || "";
                if (e.contentEdge) switch (e.contentEdge.node && e.contentEdge.node.__typename) {
                    case "Stream":
                        i = (n = e.contentEdge.node).broadcaster && n.broadcaster.id, o = a.Live, l = String(n.broadcaster && n.broadcaster.id), s = n.game ? n.game.id : null;
                        break;
                    case "Clip":
                        i = (n = e.contentEdge.node).broadcaster && n.broadcaster.id, o = a.Clip, s = n.game ? n.game.id : null;
                        break;
                    case "Video":
                        i = (n = e.contentEdge.node).owner && n.owner.id, o = a.Vod, s = n.game ? n.game.id : null;
                        break;
                    case "Game":
                        n = e.contentEdge.node, i = null, o = a.Game, s = n.id
                }
                return {
                    component: e.component,
                    request_id: e.requestID,
                    section: r.TwitchHome,
                    model_tracking_id: e.contentEdge && e.contentEdge.trackingID,
                    item_tracking_id: e.itemTrackingID,
                    item_id: l,
                    channel_id: null === i ? null : Number(i),
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
                d.o.track(p.SpadeEventType.ItemClick, n)
            }

            function k(e, t) {
                var n = v(e, t);
                d.o.track(p.SpadeEventType.ItemDisplay, n)
            }

            function y(e) {
                var t = {
                    endpoint: e.endpoint,
                    request_id: e.requestID,
                    section: e.section
                };
                d.o.track(p.SpadeEventType.RecRequestClient, t)
            }
            var C = n("x75U"),
                S = n("A65o");
            n.d(t, "e", function() {
                return h
            }), n.d(t, "c", function() {
                return r
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