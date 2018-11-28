(window.webpackJsonp = window.webpackJsonp || []).push([
    [56], {
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
                a = n("OUrp"),
                r = n("eFQ3");

            function o(e) {
                switch (e.type) {
                    case a.b.Stream:
                        return i.createElement(r.b, {
                            channelLogin: e.id,
                            vodID: "",
                            showChannelInfoOnHover: e.showChannelInfoOnHover,
                            disableTheatreButton: !0,
                            linkTrackingContext: e.linkTrackingContext,
                            playerTypeOverride: r.a.Frontpage,
                            onInit: e.onPlayerInit,
                            onDestroy: e.onPlayerDestroy,
                            onPauseToggled: e.onPauseToggled,
                            paused: e.paused
                        });
                    case a.b.Vod:
                        return i.createElement(r.b, {
                            channelLogin: "",
                            vodID: e.id,
                            disableTheatreButton: !0,
                            playerTypeOverride: r.a.Frontpage,
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
                for (var i = 0, r = n; i < r.length; i++) {
                    var o = r[i];
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
                                type: a.b.Stream,
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
                a = n("mrSG"),
                r = n("q1tI"),
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
                    return a.__extends(t, e), t.prototype.render = function() {
                        return r.createElement(u.Fb, {
                            className: "reporting-modal__container",
                            background: u.r.Base,
                            padding: {
                                x: 2,
                                y: 3
                            }
                        }, r.createElement(i.b, {
                            onClose: this.handleClose,
                            reportContext: this.props.reportContext,
                            title: this.props.title,
                            defaultDescription: this.props.defaultDescription
                        }), r.createElement(l.a, null))
                    }, t
                }(r.Component));
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
                a = n("/7QA"),
                r = n("2xye"),
                o = n("gAd6"),
                s = function() {
                    var e = a.o.getLastPageview();
                    return e && e.location || r.PageviewLocation.None
                },
                l = function(e) {
                    a.o.trackItemSectionClick({
                        carousel_content: r.PageviewContent.Video,
                        channel_id: e.broadcasterID || "0",
                        channel: e.channelLogin || "unknown",
                        content: r.PageviewContent.PreviewCardGameName,
                        item_index: e.contentIndex,
                        medium: e.pageviewMedium,
                        item_id: e.videoID,
                        item_type: r.TwitchDataType.Video,
                        item_viewcount: null,
                        location: s()
                    })
                },
                c = function(e) {
                    a.o.trackItemSectionClick({
                        carousel_content: r.PageviewContent.PreviewCardGameBalloonGame,
                        channel_id: e.broadcasterID || "0",
                        channel: e.channelLogin || "unknown",
                        content: r.PageviewContent.PreviewCardGameBalloonGame,
                        item_index: e.contentIndex,
                        medium: e.pageviewMedium,
                        item_id: e.videoID,
                        item_type: r.TwitchDataType.Video,
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
                                                        return [4, a.p.apollo.client.query({
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
                                        return r.TwitchDataType.Game
                                    }), d = l.map(function() {
                                        return null
                                    }), a.o.trackItemSectionLoad({
                                        carousel_content: r.PageviewContent.PreviewCardGameBalloonGame,
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
        "0JAG": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            });
            var i = 10;

            function a(e, t, n) {
                if (void 0 === n && (n = 1), !t || !e) return -1;
                var a = window.getComputedStyle(document.documentElement).fontSize || i.toString(),
                    r = parseFloat(a) / i;
                return Math.floor(e / (t * r)) * n
            }
        },
        "0Rl0": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            });
            var i = n("q1tI"),
                a = n("Ue10"),
                r = function() {
                    return i.createElement(a.G, null, i.createElement(a.o, {
                        ratio: a.p.Aspect16x9
                    }, i.createElement(a.jb, null)), i.createElement(a.H, null, i.createElement(a.Ya, {
                        display: a.X.Flex,
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(a.Ya, {
                        display: a.X.InlineBlock,
                        margin: {
                            top: 1,
                            right: 1
                        }
                    }, i.createElement(a.jb, {
                        width: 40,
                        height: 56
                    })), i.createElement(a.Ya, {
                        display: a.X.InlineBlock,
                        margin: {
                            top: 1
                        }
                    }, i.createElement(a.W, null, i.createElement(a.jb, {
                        width: 150
                    })), i.createElement(a.W, {
                        fontSize: a.Ca.Size7
                    }, i.createElement(a.jb, {
                        width: 100
                    }))))))
                }
        },
        "0T/G": function(e, t) {},
        "0fnA": function(e, t, n) {
            "use strict";
            n.r(t);
            var i, a, r = n("mrSG"),
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
            }(a || (a = {}));
            var N, E = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.loadVideo = function() {
                            n.setState({
                                videoStatus: a.Enter
                            })
                        }, n.fadeVideoIn = function() {
                            n.trackPromotionView(), n.state.videoStatus === a.Enter && requestAnimationFrame(function() {
                                n.setState({
                                    videoStatus: a.EnterActive
                                }), n.enterTimeout = setTimeout(function() {
                                    n.setState({
                                        videoStatus: a.Visible
                                    })
                                }, n.props.transitionDuration)
                            })
                        }, n.fadeVideoOut = function() {
                            clearTimeout(n.enterTimeout), n.setState({
                                videoStatus: a.Leave
                            }), requestAnimationFrame(function() {
                                n.setState({
                                    videoStatus: a.LeaveActive
                                }), setTimeout(function() {
                                    n.setState({
                                        videoStatus: a.Hidden
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
                            videoStatus: t.showVideo ? a.Visible : a.Hidden
                        }, n
                    }
                    return r.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                        !1 === this.props.showVideo && !0 === e.showVideo ? this.loadVideo() : !0 === this.props.showVideo && !1 === e.showVideo && this.fadeVideoOut()
                    }, t.prototype.render = function() {
                        return o.createElement("div", r.__assign({}, Object(_.kc)(this.props)), o.createElement("div", {
                            onClick: this.onClick,
                            "data-test-selector": i.Wrapper,
                            className: k("featured-content-carousel-featured-item", "featured-content-carousel-featured-item--offset-" + Math.abs(this.props.offsetFromCenter))
                        }, o.createElement(_.Fb, {
                            position: _.kb.Relative,
                            borderRadius: _.x.Large,
                            overflow: _.db.Hidden,
                            elevation: 3,
                            background: _.r.AccentAlt2,
                            fullWidth: !0,
                            fullHeight: !0
                        }, Object(w.d)(this.props.item.imageURL) && o.createElement(_.Ya, {
                            className: "featured-content-carousel-featured-item__logo-image-container",
                            position: _.kb.Absolute,
                            attachBottom: !0,
                            attachLeft: !this.props.isRightSide,
                            attachRight: this.props.isRightSide,
                            margin: 1,
                            zIndex: _.jc.Above,
                            "data-test-selector": i.Logo
                        }, o.createElement(_.S, {
                            src: this.props.item.imageURL,
                            alt: this.props.item.broadcaster.login
                        })), o.createElement(_.Fb, {
                            className: k("featured-content-carousel-featured-item__overlay", "featured-content-carousel-featured-item__overlay--offset-" + Math.abs(this.props.offsetFromCenter)),
                            position: _.kb.Absolute,
                            attachTop: !0,
                            attachLeft: !0,
                            attachRight: !0,
                            attachBottom: !0,
                            background: _.r.Overlay
                        }), this.renderVideo(), this.props.item.content.previewImageURL && o.createElement(_.Qa, {
                            fullWidth: !0
                        }, o.createElement(_.S, {
                            src: this.props.item.content.previewImageURL,
                            alt: this.props.item.title,
                            "data-test-selector": i.Image
                        })))))
                    }, t.prototype.renderVideo = function() {
                        if (this.props.item.content.id && this.state.videoStatus !== a.Hidden) {
                            var e = 0;
                            this.state.videoStatus !== a.EnterActive && this.state.videoStatus !== a.Leave && this.state.videoStatus !== a.Visible || (e = 1);
                            var t = {
                                type: C.b.Stream,
                                id: this.props.item.content.id,
                                paused: this.props.shouldPause,
                                showChannelInfoOnHover: !0,
                                linkTrackingContext: {
                                    medium: h.PageviewMedium.TwitchHome,
                                    content: this.props.isScheduled ? h.PageviewContent.CarouselPromo : h.PageviewContent.CarouselBackfill
                                },
                                onPauseToggled: this.props.onPauseToggled,
                                onPlayerInit: this.fadeVideoIn
                            };
                            return o.createElement(_.Ya, {
                                position: _.kb.Absolute,
                                attachTop: !0,
                                attachLeft: !0,
                                attachRight: !0,
                                attachBottom: !0,
                                zIndex: _.jc.Above,
                                refDelegate: this.props.setDomRef,
                                "data-test-selector": i.Video
                            }, this.state.videoStatus === a.Enter && o.createElement(_.Fb, {
                                position: _.kb.Absolute,
                                attachTop: !0,
                                attachLeft: !0,
                                attachRight: !0,
                                attachBottom: !0,
                                display: _.X.Flex,
                                alignItems: _.f.Center,
                                justifyContent: _.Xa.Center,
                                color: _.O.Overlay
                            }, o.createElement(_.ab, {
                                delay: this.props.transitionDuration + 500,
                                size: _.Db.Large,
                                inheritColor: !0
                            })), o.createElement("div", {
                                style: {
                                    transition: "opacity " + this.props.transitionDuration + "ms ease",
                                    opacity: e
                                }
                            }, o.createElement(_.Qa, {
                                fullWidth: !0
                            }, Object(w.c)(t))))
                        }
                    }, t
                }(o.Component),
                O = Object(s.compose)(Object(T.b)("FeaturedItem", {
                    autoReportInteractive: !0
                }))(E),
                R = function(e) {
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
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.unregister = this.context.registerReceiver(this)
                    }, t.prototype.componentWillUnmount = function() {
                        this.unregister()
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        e.autoplay !== this.props.autoplay && !0 === e.autoplay && this.setState({
                            shouldPause: !1,
                            userHasPaused: !1
                        })
                    }, t.prototype.render = function() {
                        return o.createElement(O, r.__assign({}, this.props, {
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
                I = function(e) {
                    return o.createElement(_.Fb, {
                        position: _.kb.Absolute,
                        attachLeft: e.left,
                        attachRight: e.right,
                        zIndex: _.jc.Above,
                        borderRadius: _.x.Rounded,
                        color: _.O.Alt2,
                        margin: .5
                    }, o.createElement(_.Va, r.__assign({
                        type: _.Wa.Alpha,
                        blurAfterClick: !0,
                        onClick: e.onClick,
                        borderRadius: _.x.Rounded
                    }, Object(_.kc)(e)), o.createElement(_.Ya, {
                        padding: 1,
                        display: _.X.Flex,
                        alignItems: _.f.Center,
                        justifyContent: _.Xa.Center
                    }, o.createElement(_.tb, {
                        asset: e.right && _.ub.AngleRight || _.ub.AngleLeft,
                        width: 30,
                        height: 30
                    }))))
                },
                D = n("kW4h"),
                x = (n("7D17"), 5),
                M = 200,
                F = 550;
            ! function(e) {
                e.LeftArrow = "featured-content-carousel-left-arrow", e.Placeholder = "featured-content-carousel-placeholder", e.RightArrow = "featured-content-carousel-right-arrow"
            }(N || (N = {}));
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
                                    var a = t.getMedianCount() + e,
                                        r = t.carouselItems.length - t.getMedianCount() + a + t.state.listOffset,
                                        o = Object(w.e)(t.carouselItems.length, r);
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
                            var a, r = t.carouselItems.indexOf(e),
                                s = n === t.getMedianCount() && 0 === t.state.listOffsetIsChanging && 0 === t.state.listOffsetWillChange,
                                l = s ? "featured-item" : void 0,
                                c = s ? "featured-item-index-" + r : void 0;
                            return o.createElement("div", {
                                key: e.content.id + "-" + i,
                                style: {
                                    position: "absolute",
                                    top: 0,
                                    left: "calc(50% - " + F / 2 + "px)",
                                    zIndex: t.getMedianCount() - t.getOffsetFromCenter(n),
                                    transform: t.transformX(n) + " scale(" + t.transformScalePercent(n) + ")",
                                    transition: "all " + t.options.transitionDuration + "ms ease"
                                },
                                className: k((a = {
                                    "featured-content-carousel__item-container": !0,
                                    "featured-content-carousel__item-container--leaving-or-entering": t.getOffsetFromCenter(n) >= t.getMedianCount()
                                }, a["featured-content-carousel__item-container--offset-" + t.getOffsetFromCenter(n)] = !0, a["featured-content-carousel__item-container--" + t.getPositionString(n)] = !0, a)),
                                "data-a-target": c
                            }, o.createElement(R, {
                                onClick: t.onListItemClick(t.getMedianCount() - n),
                                index: r,
                                item: e,
                                isRightSide: t.shouldMetaBeDisplayedOnRight(n),
                                showVideo: s,
                                isScheduled: e.isScheduled,
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
                            for (var i = 200, a = 1; a <= t.getNumToDisplay(); a++) i += t.transformScalePercent(a) * F;
                            var r = t.getOffsetFromCenter(e) / (n - 1),
                                o = Math.min(t.state.containerWidth, i) / 2 * r;
                            return e < n ? "translatex(-" + o + "px) translatex(" + 50 * r + "%)" : e > n ? "translatex(" + o + "px) translatex(-" + 50 * r + "%)" : ""
                        }, t.transformScalePercent = function(e) {
                            var n = t.getOffsetFromCenter(e),
                                i = t.getMedianCount() - 1,
                                a = (1 - t.options.transformScale) / i;
                            return Math.max(0, 1 - n * a)
                        }, t.getPositionString = function(e) {
                            var n = t.getMedianCount(),
                                i = t.getOffsetFromCenter(e);
                            return e < n ? "left-" + i : e > n ? "right-" + i : "center"
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentWillMount = function() {
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
                        }, o.createElement(_.Ya, {
                            display: _.X.Flex,
                            alignItems: _.f.Center,
                            justifyContent: _.Xa.Center,
                            position: _.kb.Relative,
                            className: "featured-content-carousel"
                        }, o.createElement(I, {
                            left: !0,
                            onClick: this.navigateLeft,
                            "data-test-selector": N.LeftArrow,
                            "data-a-target": "featured-item-left-button"
                        }), o.createElement(I, {
                            right: !0,
                            onClick: this.navigateRight,
                            "data-test-selector": N.RightArrow,
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
                                    left: "calc(50% - " + F / 2 + "px)",
                                    zIndex: e.getMedianCount() - e.getOffsetFromCenter(n + 1),
                                    transform: e.transformX(n + 1) + " scale(" + e.transformScalePercent(n + 1) + ")"
                                },
                                className: k((i = {
                                    "featured-content-carousel__item-container": !0,
                                    "featured-content-carousel__item-container--leaving-or-entering": e.getOffsetFromCenter(n + 1) >= e.getMedianCount()
                                }, i["featured-content-carousel__item-container--offset-" + e.getOffsetFromCenter(n + 1)] = !0, i["featured-content-carousel__item-container--" + e.getPositionString(n + 1)] = !0, i)),
                                "data-test-selector": N.Placeholder
                            }, o.createElement(_.Fb, {
                                className: "featured-content-carousel__item-placeholder",
                                borderRadius: _.x.Large,
                                background: _.r.Alt2,
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
                P = Object(b.compose)(Object(c.a)(D, {
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
                })(P),
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
            var q, Y, X = n("Bh3T"),
                Q = n("sSlw"),
                $ = n("9pSj"),
                K = n("MJbm"),
                J = n("0JAG"),
                Z = n("ZDlU"),
                ee = n("RXle"),
                te = n("G1cX"),
                ne = n("ZS2+"),
                ie = n("kduP"),
                ae = n("JVUd"),
                re = n("geRD"),
                oe = n("3lt/"),
                se = (n("DzyH"), n("IOBI"));

            function le(e, t) {
                var n = function(e) {
                    return Array.from(e.normalize ? e.normalize("NFC") : e)
                }(e);
                return n.length <= t ? e : n.slice(0, t - 3).join("").trim() + "..."
            }! function(e) {
                e.Large = "Large", e.Small = "Small"
            }(q || (q = {})),
            function(e) {
                e.Running = "Running", e.Paused = "Paused", e.Stopped = "Stopped"
            }(Y || (Y = {}));
            var ce, de = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            showError: !1,
                            countdownState: Y.Running
                        }, t.pauseCountdown = function() {
                            t.setState({
                                countdownState: Y.Paused
                            })
                        }, t.resumeCountdown = function() {
                            t.state.countdownState !== Y.Stopped && t.setState({
                                countdownState: Y.Running
                            })
                        }, t.onUndoClick = function() {
                            return r.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, i;
                                return r.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            if (!(e = this.props.addFeedbackPromise)) return [2];
                                            this.setState({
                                                countdownState: Y.Stopped
                                            }), a.label = 1;
                                        case 1:
                                            return a.trys.push([1, 7, , 8]), [4, e];
                                        case 2:
                                            if (t = a.sent(), !(n = t.data && t.data.addRecommendationFeedback && t.data.addRecommendationFeedback.recommendationFeedback)) return this.setState({
                                                showError: !0
                                            }), [2];
                                            i = Object(re.a)({
                                                feedbackID: n.id,
                                                sourceItemPage: oe.PageviewMedium.TwitchHome,
                                                sourceItemRequestID: this.props.sourceItemRequestID || "",
                                                sourceItemTrackingID: this.props.sourceItemTrackingID || ""
                                            }), a.label = 3;
                                        case 3:
                                            return a.trys.push([3, 5, , 6]), [4, this.props.undoFeedback(i)];
                                        case 4:
                                            return a.sent(), this.props.undoSuccessHandler(), [3, 6];
                                        case 5:
                                            return a.sent(), this.setState({
                                                showError: !0
                                            }), [3, 6];
                                        case 6:
                                            return [3, 8];
                                        case 7:
                                            return a.sent(), this.props.undoSuccessHandler(), [3, 8];
                                        case 8:
                                            return [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
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
                        }, "HiddenContentNotice")), o.createElement(_.Qa, {
                            fullHeight: !0
                        }, o.createElement("div", {
                            onMouseEnter: this.pauseCountdown,
                            onMouseLeave: this.resumeCountdown
                        }, o.createElement(_.Fb, {
                            className: "hidden-content-notice",
                            fullWidth: !0,
                            margin: {
                                bottom: 1
                            },
                            borderRadius: _.x.Large
                        }, o.createElement(_.Ya, {
                            padding: {
                                y: 4,
                                x: 2
                            },
                            display: _.X.Flex,
                            justifyContent: _.Xa.Center,
                            alignItems: _.f.Center,
                            flexDirection: _.Aa.Column,
                            fullHeight: !0
                        }, this.props.name && o.createElement(_.Ya, {
                            margin: {
                                bottom: q.Small ? 1 : 0
                            },
                            textAlign: _.Sb.Center
                        }, o.createElement(_.W, {
                            fontSize: this.props.size === q.Large ? _.Ca.Size3 : _.Ca.Size5
                        }, Object(l.d)("<x:content>Content</x:content> has been removed", {
                            "x:content": function() {
                                return o.createElement(_.W, {
                                    bold: !0,
                                    italic: !0,
                                    type: _.Wb.Span,
                                    fontSize: e.props.size === q.Large ? _.Ca.Size3 : _.Ca.Size4
                                }, "string" == typeof e.props.name ? le(e.props.name, 35) : e.props.name)
                            }
                        }, "HiddenContentNotice"))), o.createElement(_.Qa, {
                            textAlign: _.Sb.Center
                        }, o.createElement(_.W, {
                            fontSize: this.props.size === q.Large ? _.Ca.Size4 : _.Ca.Size6
                        }, t))), this.props.shouldRemoveContent && o.createElement(_.nb, {
                            animationDuration: 5,
                            animationDirection: _.ob.Down,
                            onAnimationEnd: this.props.onExpiration,
                            size: _.pb.ExtraSmall,
                            paused: this.state.countdownState !== Y.Running,
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
                    return r.__extends(t, e), t.prototype.getSnapshotBeforeUpdate = function() {
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
                            a = Math.max(this.props.itemSlotCount - i, 0),
                            r = Math.max(i + n + a, 0),
                            o = !1,
                            s = Array.from(new Array(r)).map(function(n, i) {
                                var a = e[i];
                                return a ? t.state.indexToHiddenMap[i] ? null : (o = !0, t.renderVisibleContent(a, i, r)) : t.renderEmptyPlaceholder(i)
                            });
                        return o || (this.isRenderingEmpty = !0), s
                    }, t.prototype.renderEmptyPlaceholder = function(e) {
                        return o.createElement("div", {
                            key: "p" + e,
                            ref: this.setItemRef
                        })
                    }, t.prototype.renderVisibleContent = function(e, t, n) {
                        var i = this.state.childTransformations[t],
                            a = {
                                "list-animation__item-animate": !i,
                                "list-animation__item-animate-in-prep": !!i && t === n - 1
                            };
                        return o.createElement("div", {
                            key: e.key || t,
                            className: k(a),
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
                        return t.forEach(function(t, a) {
                            t && a > e && (n[a] = "translateX(" + i + "px)")
                        }), n
                    }, t.prototype.ensureLayoutReflow = function() {
                        this.itemRef && this.itemRef.scrollTop
                    }, t
                }(o.Component),
                ke = (n("a+Ty"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this;
                        return o.createElement(_.Fb, {
                            className: "empty-shelf",
                            fullWidth: !0,
                            margin: {
                                bottom: 2
                            }
                        }, o.createElement(_.Ya, {
                            padding: {
                                y: 4,
                                x: 2
                            },
                            display: _.X.Flex,
                            justifyContent: _.Xa.Center,
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
                                    type: _.Wb.Span,
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
                    return r.__assign({}, e, {
                        title: e.clipTitle,
                        viewCount: e.clipViewCount,
                        createdAt: e.clipCreatedAt
                    })
                },
                Se = n("GFmA"),
                we = n("oB8h"),
                Te = n("oJov"),
                _e = n("4HIT"),
                Ne = n("QV0j"),
                Ee = n("9MO3"),
                Oe = n("OCR+"),
                Re = n("3sMy"),
                Ie = n("yI6f"),
                De = n("kRI/"),
                xe = n("A65o"),
                Me = (n("ReKM"), Object(Oe.a)()),
                Fe = ne.a.wrap(function() {
                    return n.e(148).then(n.bind(null, "GyBV"))
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
                                var a = t.props.contentEdge.node;
                                return o.createElement(Te.a, r.__assign({
                                    "data-a-target": "card-" + t.props.itemPosition
                                }, e, {
                                    tagListProps: n,
                                    contextualCardActionProps: t.getFeedbackProps({
                                        vodID: null,
                                        categoryID: a && a.id,
                                        categoryName: a && a.displayName,
                                        channelID: null,
                                        channelName: null,
                                        feedbackReasons: Object(Ee.b)(),
                                        hideContent: t.hideContent
                                    })
                                }))
                            }
                            return o.createElement(Se.a, r.__assign({}, e))
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
                                            state: r.__assign({
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
                                            state: r.__assign({
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
                                            state: r.__assign({
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
                                a = e.categoryID,
                                r = e.vodID,
                                o = e.categoryName,
                                s = e.channelName,
                                l = e.feedbackReasons,
                                c = e.hideContent;
                            if (Me() && t.props.firstPageLoaded) return {
                                component: Fe,
                                props: {
                                    shelfID: n,
                                    channelID: i,
                                    categoryID: a,
                                    vodID: r,
                                    categoryName: o,
                                    channelName: s,
                                    feedbackReasons: l,
                                    hideContent: c,
                                    onModalOpen: t.trackRecFeedbackPreModalClick,
                                    onMenuOpen: t.trackRecFeedbackMenuClick,
                                    trackRecFeedbackClickStep: t.trackRecFeedbackClickStep,
                                    sourceItemRequestID: t.props.itemRequestID,
                                    sourceItemTrackingID: t.props.shelfCardTrackingProps.item_tracking_id,
                                    isShelf: !1
                                }
                            }
                        }, t.showContent = function() {
                            t.setState({
                                showContent: !0,
                                addFeedbackPromise: null
                            }), t.trackPostSubmitStep(De.b.Undo)
                        }, t.onManageClick = function() {
                            t.trackPostSubmitStep(De.b.Manage)
                        }, t.trackPostSubmitStep = function(e) {
                            var n = Object(Ie.e)(t.props.contentEdge).itemID;
                            n && t.props.trackRecFeedbackClickStepPostSubmit(n, e)
                        }, t.hideContent = function(e) {
                            t.setState({
                                showContent: !1,
                                addFeedbackPromise: e
                            })
                        }, t.onHideContentExpire = function() {
                            t.props.hideListItem(t.props.itemPosition)
                        }, t.trackGameClick = function(e, n, i, a) {
                            e.preventDefault(), e.stopPropagation();
                            var o = "title" === ("IMG" === e.target.tagName ? "boxArt" : "title") ? h.PageviewContent.GameName : h.PageviewContent.GameBoxart,
                                s = r.__assign({}, t.props.shelfCardTrackingProps, {
                                    tag_set: a,
                                    tag_filter_set: [],
                                    tag_streamer_set: []
                                }),
                                c = {
                                    pathname: Object(ie.c)(n.name),
                                    state: r.__assign({
                                        content: o,
                                        content_index: i,
                                        medium: h.PageviewMedium.TwitchHome
                                    }, s)
                                };
                            t.trackClick(o, a), l.p.history.push(c.pathname, c.state)
                        }, t.trackClick = function(e, n, i) {
                            return t.props.trackClick(e, n, i)
                        }, t.trackRecFeedbackPreModalClick = function() {
                            return t.props.trackRecFeedbackPreModalClick(De.a.NotInterested, t.props.shelf, t.props.contentEdge, t.props.itemPosition, t.getShelfCardName())
                        }, t.trackRecFeedbackMenuClick = function() {
                            return t.props.trackRecFeedbackPreModalClick(De.a.Ellipsis, t.props.shelf, t.props.contentEdge, t.props.itemPosition, t.getShelfCardName())
                        }, t.trackRecFeedbackClickStep = function(e) {
                            var n = Object(Ie.e)(t.props.contentEdge).itemID;
                            if (n) return t.props.trackRecFeedbackClickStep(n, e)
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        var e = this,
                            t = this.getTagSet(this.props.contentEdge);
                        this.props.impressionListener.registerImpressionCallback(function() {
                            return e.props.trackImpression(t)
                        })
                    }, t.prototype.render = function() {
                        var e = this.getShelfCardProps(this.props.contentEdge, this.props.itemPosition);
                        return e && this.props.contentEdge.node ? this.state.showContent ? o.createElement(_.Ya, {
                            key: this.props.contentEdge.node.id,
                            padding: {
                                bottom: 2
                            },
                            "data-test-selector": "shelf-card-selector"
                        }, this.renderShelfCard(e)) : o.createElement(ue, {
                            name: this.getShelfCardName(),
                            undoSuccessHandler: this.showContent,
                            addFeedbackPromise: this.state.addFeedbackPromise,
                            size: q.Small,
                            onExpiration: this.onHideContentExpire,
                            onManageClick: this.onManageClick,
                            shouldRemoveContent: !0,
                            sourceItemRequestID: this.props.itemRequestID,
                            sourceItemTrackingID: this.props.shelfCardTrackingProps.item_tracking_id
                        }) : null
                    }, t.prototype.getShelfCardName = function() {
                        var e = this.getShelfCardProps(this.props.contentEdge, this.props.itemPosition);
                        if (!e || !this.props.contentEdge.node) return null;
                        var t = e.title,
                            n = this.props.contentEdge.node;
                        return n && "Stream" === n.__typename && n.broadcaster && n.broadcaster.displayName && (t = n.broadcaster.displayName), t
                    }, t.prototype.getShelfCardStreamProps = function(e) {
                        var t = this,
                            n = e.node,
                            i = this.getTagListProps(e),
                            a = this.getTagSet(e, i),
                            o = r.__assign({}, this.props.shelfCardTrackingProps, {
                                tag_set: a,
                                tag_filter_set: [],
                                tag_streamer_set: []
                            }),
                            s = this.props.shelf.title.key !== Re.a.RecommendedBecauseYouWatchX ? {
                                gameTitle: n.game && n.game.displayName || void 0,
                                gameTitleLinkTo: {
                                    pathname: n.game ? Object(ie.c)(n.game.name) : void 0,
                                    state: o
                                },
                                onGameTitleClick: this.trackClick.bind(this, h.PageviewContent.GameMetadata, a)
                            } : {};
                        return r.__assign({
                            context: Se.b.MixedGameAndChannelList,
                            title: n.broadcaster && n.broadcaster.broadcastSettings && n.broadcaster.broadcastSettings.title,
                            linkTo: n.broadcaster && n.broadcaster.login ? {
                                pathname: n.broadcaster.login,
                                state: o
                            } : void 0,
                            onClick: this.trackClick.bind(this, h.PageviewContent.VideoThumbnail, a),
                            onVideoTitleClick: this.trackClick.bind(this, h.PageviewContent.VideoTitle, a),
                            onChannelImageClick: this.trackClick.bind(this, h.PageviewContent.UserThumbnail, a),
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
                            onChannelLoginClick: this.trackClick.bind(this, h.PageviewContent.ChannelMetadata, a),
                            streamType: Object(Ne.a)(n.type) || we.a.Live,
                            currentViewerCount: n.viewersCount || 0,
                            trackingContext: {
                                medium: h.PageviewMedium.TwitchHome
                            },
                            contextualCardActionProps: this.getFeedbackProps({
                                channelID: n.broadcaster && n.broadcaster.id,
                                channelName: n.broadcaster && n.broadcaster.displayName,
                                categoryID: n.game && n.game.id,
                                categoryName: n.game && n.game.displayName,
                                feedbackReasons: Object(Ee.a)(),
                                hideContent: this.hideContent
                            })
                        }, i && {
                            tagListProps: r.__assign({}, i, {
                                callback: function(e) {
                                    i.callback && i.callback(e), t.trackClick(h.PageviewContent.Tag, a, e.id)
                                }
                            })
                        }, s)
                    }, t.prototype.getShelfCardClipProps = function(e, t) {
                        var n = this,
                            i = e.node,
                            a = this.getTagListProps(e),
                            o = this.getTagSet(e, a),
                            s = r.__assign({}, this.props.shelfCardTrackingProps, {
                                tag_set: o,
                                tag_filter_set: [],
                                tag_streamer_set: []
                            });
                        return r.__assign({
                            context: Se.b.MixedGameAndChannelList,
                            title: i.clipTitle,
                            linkTo: i.embedURL,
                            onClick: function(e) {
                                if (n.trackClick(h.PageviewContent.VideoThumbnail, o), e.preventDefault(), n.props.shelf.content && n.props.shelf.content.edges) {
                                    var a = n.props.shelf.content.edges.map(function(e) {
                                        return e.node
                                    });
                                    n.props.showClipsModal(i, t, n.props.shelf.content.edges, function() {
                                        return a
                                    })
                                }
                            },
                            onVideoTitleClick: function(e) {
                                if (n.trackClick(h.PageviewContent.VideoTitle, o), e.preventDefault(), n.props.shelf.content && n.props.shelf.content.edges) {
                                    var a = n.props.shelf.content.edges.map(function(e) {
                                        return e.node
                                    });
                                    n.props.showClipsModal(i, t, n.props.shelf.content.edges, function() {
                                        return a
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
                        }, a && {
                            tagListProps: r.__assign({}, a, {
                                callback: function(e) {
                                    a.callback && a.callback(e), n.trackClick(h.PageviewContent.Tag, o, e.id)
                                }
                            })
                        })
                    }, t.prototype.getShelfCardVideoProps = function(e) {
                        var t = this,
                            n = e.node,
                            i = this.getTagListProps(e),
                            a = this.getTagSet(e, i),
                            o = r.__assign({}, this.props.shelfCardTrackingProps, {
                                tag_set: a,
                                tag_filter_set: [],
                                tag_streamer_set: []
                            });
                        return r.__assign({
                            context: Se.b.MixedGameAndChannelList,
                            title: n.title,
                            linkTo: {
                                pathname: "/videos/" + n.id,
                                state: this.props.shelfCardTrackingProps
                            },
                            onClick: this.trackClick.bind(this, h.PageviewContent.VideoThumbnail, a),
                            onVideoTitleClick: this.trackClick.bind(this, h.PageviewContent.VideoTitle, a),
                            onChannelImageClick: this.trackClick.bind(this, h.PageviewContent.UserThumbnail, a),
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
                            onChannelLoginClick: this.trackClick.bind(this, h.PageviewContent.ChannelMetadata, a),
                            datePublished: n.publishedAt,
                            viewCount: n.viewCount,
                            durationInSeconds: n.lengthSeconds,
                            watchedProgressPercent: 0,
                            gameTitle: n.game && n.game.displayName,
                            gameTitleLinkTo: n.game ? {
                                pathname: Object(ie.c)(n.game.name),
                                state: o
                            } : void 0,
                            onGameTitleClick: this.trackClick.bind(this, h.PageviewContent.GameMetadata, a),
                            trackingContext: {
                                medium: h.PageviewMedium.TwitchHome
                            },
                            contextualCardActionProps: this.getFeedbackProps({
                                vodID: n.id,
                                categoryID: n.game && n.game.id,
                                categoryName: n.game && n.game.displayName,
                                channelID: n.owner && n.owner.id,
                                channelName: n.owner && n.owner.displayName,
                                feedbackReasons: Object(Ee.d)(null !== n.game),
                                hideContent: this.hideContent
                            })
                        }, i && {
                            tagListProps: r.__assign({}, i, {
                                callback: function(e) {
                                    i.callback && i.callback(e), t.trackClick(h.PageviewContent.Tag, a, e.id)
                                }
                            })
                        })
                    }, t.prototype.getShelfCardGameProps = function(e, t) {
                        var n = this,
                            i = e.node,
                            a = this.getTagSet(e);
                        return {
                            onClick: function(e) {
                                return n.trackGameClick(e, i, t, a)
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
                Pe = Object(s.compose)(Object(T.b)("ShelfCardComponent", {
                    autoReportInteractive: !0
                }), Object(ae.a)("ShelfCardComponent", {
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
                })(Pe)),
                Ue = Object(Oe.a)(),
                Ae = ne.a.wrap(function() {
                    return n.e(148).then(n.bind(null, "GyBV"))
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
                                state: r.__assign({
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
                                state: r.__assign({
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
                            return t.props.trackRecFeedbackPreModalClick(De.a.NotInterested, t.props.shelf, null, null, null)
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
                            }), t.props.trackRecFeedbackClickStepPostSubmit(t.props.shelf.id, De.b.Undo)
                        }, t.hideContent = function(e) {
                            t.setState({
                                showContent: !1,
                                addFeedbackPromise: e
                            })
                        }, t.onManageClick = function() {
                            t.props.trackRecFeedbackClickStepPostSubmit(t.props.shelf.id, De.b.Manage)
                        }, t.trackRecFeedbackClickStep = function(e) {
                            t.props.trackRecFeedbackClickStep(t.props.shelf.id, e)
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.shouldRenderShelf(this.props.shelf) ? (this.getEdges(this.props.shelf).length && this.props.latencyTracking.reportInteractive(), this.props.impressionListener.registerImpressionCallback(this.trackTitleImpression)) : this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this,
                            t = this.props,
                            n = t.position,
                            i = t.shelf,
                            a = this.getShelfTitle(i.title);
                        if (!this.shouldRenderShelf(i)) return null;
                        if (!this.state.showContent && null !== a) return o.createElement(ue, {
                            name: a,
                            undoSuccessHandler: this.showContent,
                            addFeedbackPromise: this.state.addFeedbackPromise,
                            size: q.Large,
                            onManageClick: this.onManageClick,
                            shouldRemoveContent: !1,
                            sourceItemRequestID: this.props.requestID,
                            sourceItemTrackingID: this.props.shelfTrackingProps.item_tracking_id
                        });
                        var r = 0,
                            s = _.dc.Large,
                            l = [];
                        if (i.content && i.content.edges) {
                            i.title.key.includes("TopGames") && (s = _.dc.ExtraSmall);
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
                            }), this.props.itemsToDisplay > i.content.edges.length && (r = this.props.itemsToDisplay - i.content.edges.length)
                        }
                        var u = this.props.itemsToDisplay;
                        i.title.key.includes("TopGames") && (u = this.props.itemsToDisplay * Xe);
                        var p = null;
                        return p = this.state.isShelfEmpty ? o.createElement(ke, {
                            name: a,
                            onManageClick: this.onManageClick
                        }) : o.createElement(_.cc, {
                            childWidth: s,
                            gutterSize: _.ec.Small,
                            noWrap: !0,
                            placeholderItems: r
                        }, o.createElement(ve, {
                            itemSlotCount: u,
                            onEmptyShelfRender: this.onEmptyShelfRender
                        }, l)), o.createElement(_.Ya, {
                            key: i.id
                        }, o.createElement(_.W, {
                            type: _.Wb.H4,
                            color: _.O.Base
                        }, o.createElement(_.Ya, {
                            padding: {
                                bottom: 1
                            },
                            display: _.X.Flex,
                            justifyContent: _.Xa.Between
                        }, o.createElement("div", null, a), this.props.firstPageLoaded && i.title.context && Ue() && o.createElement(Ae, {
                            shelfID: i.id,
                            categoryID: i.title.context.id,
                            categoryName: i.title.context.displayName,
                            feedbackReasons: Object(Ee.c)(),
                            hideContent: this.hideContent,
                            onModalOpen: this.trackRecFeedbackPreModalClickShelf,
                            trackRecFeedbackClickStep: this.trackRecFeedbackClickStep,
                            sourceItemRequestID: this.props.requestID,
                            sourceItemTrackingID: this.props.shelfTrackingProps.item_tracking_id,
                            isShelf: !0
                        }))), p)
                    }, t.prototype.getShelfTitle = function(e) {
                        var t, n = this,
                            i = ((t = {})[Re.a.TopLiveChannels] = function() {
                                return Object(l.d)("Popular <x:bold>live channels</x:bold>", {
                                    "x:bold": function(e) {
                                        return o.createElement("strong", null, e)
                                    }
                                }, "ShelfComponent")
                            }, t[Re.a.TopGames] = function() {
                                return Object(l.d)("Popular <x:bold>categories</x:bold>", {
                                    "x:bold": function(e) {
                                        return o.createElement("strong", null, n.linkToBrowse(e))
                                    }
                                }, "ShelfComponent")
                            }, t[Re.a.PopularVideos] = function() {
                                return Object(l.d)("Popular <x:bold>videos</x:bold>", {
                                    "x:bold": function(e) {
                                        return o.createElement("strong", null, e)
                                    }
                                }, "ShelfComponent")
                            }, t[Re.a.PopularClips] = function() {
                                return Object(l.d)("Popular <x:bold>clips</x:bold>", {
                                    "x:bold": function(e) {
                                        return o.createElement("strong", null, e)
                                    }
                                }, "ShelfComponent")
                            }, t[Re.a.TopChannelsPlayingGame] = function() {
                                return Object(l.d)("Popular <x:bold1>live channels</x:bold1> in <x:bold2>{game}</x:bold2>", {
                                    game: e.context ? e.context.name : "",
                                    "x:bold1": function(e) {
                                        return o.createElement("strong", null, e)
                                    },
                                    "x:bold2": function(e) {
                                        return o.createElement("strong", null, n.linkToDirectory(e))
                                    }
                                }, "ShelfComponent")
                            }, t[Re.a.TopLiveChannelsYouMayLike] = function() {
                                return Object(l.d)("<x:bold>Live channels</x:bold> you may like", {
                                    "x:bold": function(e) {
                                        return o.createElement("strong", null, e)
                                    }
                                }, "ShelfComponent")
                            }, t[Re.a.TopGamesForYou] = function() {
                                return Object(l.d)("<x:bold>Categories</x:bold> you may like", {
                                    "x:bold": function(e) {
                                        return o.createElement("strong", null, n.linkToBrowse(e))
                                    }
                                }, "ShelfComponent")
                            }, t[Re.a.RecommendedBecauseYouWatchX] = function() {
                                return Object(l.d)("<x:bold>{game}</x:bold> streamers you may like", {
                                    game: e.context ? e.context.name : "",
                                    "x:bold": function(e) {
                                        return o.createElement("strong", null, n.linkToDirectory(e))
                                    }
                                }, "ShelfComponent")
                            }, t[Re.a.RecommendedBecauseYouFollowX] = function() {
                                return Object(l.d)("Because you follow <x:bold>{name}</x:bold>", {
                                    name: e.context ? e.context.name : "",
                                    "x:bold": function(e) {
                                        return o.createElement("strong", null, n.linkToDirectory(e))
                                    }
                                }, "ShelfComponent")
                            }, t[Re.a.GreatNewClipsYouMayHaveMissed] = function() {
                                return Object(l.d)("<x:bold>Clips</x:bold> you may like", {
                                    "x:bold": function(e) {
                                        return o.createElement("strong", null, e)
                                    }
                                }, "ShelfComponent")
                            }, t[Re.a.TopNewVideosYouMayHaveMissed] = function() {
                                return Object(l.d)("<x:bold>Videos</x:bold> you may like", {
                                    "x:bold": function(e) {
                                        return o.createElement("strong", null, e)
                                    }
                                }, "ShelfComponent")
                            }, t);
                        return i[e.key] ? i[e.key]() : null
                    }, t
                }(o.Component),
                We = Object(s.compose)(Object(ae.a)("ShelfComponent", {
                    percentage: 15
                }), Object(T.b)("ShelfComponent"), Object(Ie.k)())(Ve);
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
                                endpoint: Ie.d.Live,
                                requestID: e,
                                section: Ie.c.TwitchHome
                            };
                            Object(Ie.j)(t)
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.trackRecRequest(this.state.requestID)
                    }, t.prototype.componentDidUpdate = function(e) {
                        if (!this.props.data.loading && this.props.data.shelves && this.props.data.shelves.edges && (this.props.latencyTracking.reportInteractive(this.props.data.shelves.edges.length), e.itemsToDisplay !== this.props.itemsToDisplay)) {
                            for (var t = [], n = 0, i = this.props.data.shelves.edges; n < i.length; n++) {
                                var a = i[n];
                                a && a.node && a.node.content && a.node.content.edges && t.push(a.node.content.edges.length)
                            }
                            if (this.props.itemsToDisplay * Xe > Math.min.apply(Math, t)) {
                                var r = Object(Ie.f)();
                                this.props.loadMore(r), this.trackRecRequest(r), this.setState({
                                    requestID: r
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
                        for (i = 0; i < 4; i++) t.push(o.createElement(_.Ya, {
                            margin: {
                                bottom: 2
                            },
                            key: "frontpage-shelves-placeholder-" + i
                        }, o.createElement(_.Ya, {
                            margin: {
                                bottom: 1
                            }
                        }, o.createElement(_.jb, {
                            height: 25,
                            width: 150
                        })), o.createElement(_.cc, {
                            gutterSize: _.ec.Small,
                            childWidth: _.dc.Medium,
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
                qe = Object(b.compose)(Object(c.a)(ze, {
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
                        return r.__assign({}, e, {
                            loadMore: function(t) {
                                return e.data.fetchMore({
                                    query: ze,
                                    variables: {
                                        itemsPerRow: e.ownProps.itemsToDisplay * Xe,
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
                                                                return e && t && t.node && t.node.content && t.node.content.edges ? Object(re.c)(e, t.node.content.edges) : null
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
                Ye = 2,
                Xe = 2,
                Qe = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            initialItemsToFetch: 0,
                            itemsToDisplay: 0
                        }, t.onResize = function(e) {
                            var n = Object(J.a)(e, 300, 1),
                                i = Math.max(Ye, n);
                            t.state.initialRequestID ? i !== t.state.itemsToDisplay && t.setState({
                                itemsToDisplay: i
                            }) : t.setState({
                                initialItemsToFetch: i * Xe,
                                initialRequestID: Object(Ie.f)(),
                                itemsToDisplay: i
                            })
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this.state.initialItemsToFetch > 0 && this.state.initialRequestID ? o.createElement(qe, {
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
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        l.p.setPageTitle(), f.g.addListener(f.e, this.onSlotAdded), this.shouldShowOnboarding() && !W() && H(B.a.NewSignup)
                    }, t.prototype.componentWillUnmount = function() {
                        f.g.removeListener(f.e, this.onSlotAdded)
                    }, t.prototype.componentDidUpdate = function(e) {
                        e.data.loading && this.shouldShowOnboarding() && !W() && H(B.a.NewSignup)
                    }, t.prototype.render = function() {
                        return o.createElement(_.Ya, {
                            fullHeight: !0
                        }, o.createElement(X.b, {
                            suppressScrollX: !0,
                            disableDebounce: !0
                        }), o.createElement(Q.a, null, o.createElement($.a, null)), this.renderFeaturedCarousel(), o.createElement(_.Ya, {
                            margin: 3
                        }, this.isCarouselHoldback() && !this.isPartnerOrStaff() && this.renderAd(), o.createElement(Qe, null)))
                    }, t.prototype.renderFeaturedCarousel = function() {
                        return this.isCarouselHoldback() && !this.isPartnerOrStaff() ? o.createElement(L, {
                            hideCarousel: !0
                        }) : o.createElement(_.Fb, {
                            className: "front-page-carousel",
                            padding: {
                                x: 3,
                                top: 2
                            }
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
        "1Ijn": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "VideoPreviewCard__VideoMoments"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "videoId"
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
                                        value: "videoId"
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
                                        value: "moments"
                                    },
                                    arguments: [{
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "momentRequestType"
                                        },
                                        value: {
                                            kind: "EnumValue",
                                            value: "VIDEO_CHAPTER_MARKERS"
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
                                                    kind: "FragmentSpread",
                                                    name: {
                                                        kind: "Name",
                                                        value: "videoMomentEdge"
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
                }, {
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "videoMomentEdge"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "VideoMomentEdge"
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
                                        value: "videoChapter"
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
                        value: "videoChapter"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "VideoMoment"
                        }
                    },
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "durationMilliseconds"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "positionMilliseconds"
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
                                value: "description"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "thumbnailURL"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "FragmentSpread",
                            name: {
                                kind: "Name",
                                value: "momentDetails"
                            },
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
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "lengthSeconds"
                                    },
                                    arguments: [],
                                    directives: []
                                }]
                            }
                        }]
                    }
                }, {
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "momentDetails"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "VideoMoment"
                        }
                    },
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "details"
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "FragmentSpread",
                                    name: {
                                        kind: "Name",
                                        value: "gameChangeDetails"
                                    },
                                    directives: []
                                }, {
                                    kind: "FragmentSpread",
                                    name: {
                                        kind: "Name",
                                        value: "hearthstoneDetails"
                                    },
                                    directives: []
                                }, {
                                    kind: "FragmentSpread",
                                    name: {
                                        kind: "Name",
                                        value: "overwatchDetails"
                                    },
                                    directives: []
                                }, {
                                    kind: "FragmentSpread",
                                    name: {
                                        kind: "Name",
                                        value: "pubgDetails"
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
                        value: "gameChangeDetails"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "GameChangeMomentDetails"
                        }
                    },
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
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
                                            value: "40"
                                        }
                                    }, {
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "height"
                                        },
                                        value: {
                                            kind: "IntValue",
                                            value: "53"
                                        }
                                    }],
                                    directives: []
                                }]
                            }
                        }]
                    }
                }, {
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "hearthstoneDetails"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "HearthstoneMomentDetails"
                        }
                    },
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "broadcasterHero"
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
                                        value: "class"
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
                                value: "opponentHero"
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
                                        value: "class"
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
                                value: "gameMode"
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
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
                                        value: "value"
                                    },
                                    arguments: [],
                                    directives: []
                                }]
                            }
                        }]
                    }
                }, {
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "overwatchDetails"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "OverwatchMomentDetails"
                        }
                    },
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "role"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "heroName"
                            },
                            arguments: [],
                            directives: []
                        }]
                    }
                }, {
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "pubgDetails"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "PUBGMomentDetails"
                        }
                    },
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "maxPlayerCount"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "minPlayerCount"
                            },
                            arguments: [],
                            directives: []
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 943
                }
            };
            n.loc.source = {
                body: "query VideoPreviewCard__VideoMoments($videoId: ID!) {\nvideo(id: $videoId) {\nid\nmoments(momentRequestType: VIDEO_CHAPTER_MARKERS) {\nedges {\n...videoMomentEdge\n}\n}\n}\n}\nfragment videoMomentEdge on VideoMomentEdge {\ncursor\nnode {\n...videoChapter\n}\n}\nfragment videoChapter on VideoMoment {\ndurationMilliseconds\npositionMilliseconds\ntype\ndescription\nthumbnailURL\n...momentDetails\nvideo {\nid\nlengthSeconds\n}\n}\nfragment momentDetails on VideoMoment {\ndetails {\n...gameChangeDetails\n...hearthstoneDetails\n...overwatchDetails\n...pubgDetails\n}\n}\nfragment gameChangeDetails on GameChangeMomentDetails {\ngame {\nid\ndisplayName\nboxArtURL(width: 40 height: 53)\n}\n}\nfragment hearthstoneDetails on HearthstoneMomentDetails {\nbroadcasterHero {\nid\nclass\nname\n}\nopponentHero {\nid\nclass\nname\n}\ngameMode {\ntype\nvalue\n}\n}\nfragment overwatchDetails on OverwatchMomentDetails {\nrole\nheroName\n}\nfragment pubgDetails on PUBGMomentDetails {\nmaxPlayerCount\nminPlayerCount\n}",
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
                a = n("q1tI"),
                r = n("/7QA"),
                o = n("2Ygb");

            function s(e, t) {
                var n = a.createContext(t),
                    s = n.Consumer,
                    l = n.Provider;
                return {
                    withContext: function(t) {
                        return function(n) {
                            var r;
                            return (r = function(e) {
                                function r() {
                                    return null !== e && e.apply(this, arguments) || this
                                }
                                return i.__extends(r, e), r.prototype.render = function() {
                                    var e = this;
                                    return a.createElement(s, null, function(r) {
                                        var o = t(r);
                                        return a.createElement(n, i.__assign({}, e.props, o))
                                    })
                                }, r
                            }(a.Component)).displayName = Object(o.a)("With" + e, n), r
                        }
                    },
                    InnerProvider: function(t) {
                        function n() {
                            return null !== t && t.apply(this, arguments) || this
                        }
                        return i.__extends(n, t), n.prototype.componentDidMount = function() {
                            "object" === typeof this.props.value && this.props.value || r.k.error(new Error(n.displayName + " rendered without an appropriate initial value"), "Set an initial value in your provider component at mount time.")
                        }, n.prototype.render = function() {
                            return a.createElement(l, {
                                value: this.props.value
                            }, this.props.children)
                        }, n.displayName = "Inner" + e + "Provider", n
                    }(a.Component)
                }
            }
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
                a = n("/7QA"),
                r = n("2xye"),
                o = "google_calendar",
                s = "backfill";

            function l(e) {
                var t = {};
                e.forEach(function(e, n) {
                    t["carousel_slot_" + n + "_channel"] = e.broadcaster.login, t["carousel_slot_" + n + "_priority"] = e.priorityLevel, t["carousel_slot_" + n + "_game"] = e.content.gameName, t["carousel_slot_" + n + "_ccu"] = e.content.viewersCount, t["carousel_slot_" + n + "_type"] = e.content.subType, e.isScheduled ? t["carousel_slot_" + n + "_source"] = o : t["carousel_slot_" + n + "_source"] = s
                }), a.o.track(r.SpadeEventType.FrontPageCarouselDisplay, t)
            }

            function c(e) {
                a.o.track(r.SpadeEventType.FrontPageCarouselClick, e)
            }

            function d(e, t) {
                var n = i.__assign({
                    clicked_element: t
                }, e);
                a.o.track(r.SpadeEventType.FrontPageCarouselPromotionCardClick, n)
            }

            function u(e) {
                a.o.track(r.SpadeEventType.FrontPageCarouselPromotionCardView, e)
            }

            function p(e) {
                a.o.track(r.SpadeEventType.FrontPageCarouselNavButtonClick, {
                    direction: e
                })
            }
        },
        "4L7N": function(e, t, n) {
            "use strict";
            var i = n("/MKj"),
                a = n("kRBY"),
                r = n("mrSG"),
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
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this,
                            t = this.props.data.clip,
                            n = "";
                        if (t && t.videoQualities) {
                            var i = t.videoQualities[0];
                            n = i.sourceURL
                        }
                        var a = this.props,
                            r = a.broadcasterId,
                            c = a.broadcasterLogin,
                            u = a.forceShow;
                        return o.createElement(s.a, {
                            ownerLogin: this.props.broadcasterLogin,
                            permittedRoles: {
                                editor: !0,
                                staff: !0
                            }
                        }, function(i) {
                            var a = i.permitted;
                            return n && (a || u) ? o.createElement(l.a, {
                                type: l.b.Download,
                                text: e.props.slug,
                                url: n,
                                onShareClick: t ? Object(d.c)(t.id, t.game && t.game.name, r, c, e.props.pageType) : void 0
                            }) : null
                        })
                    }, t
                }(o.Component),
                m = Object(c.a)(u)(p);
            var h = Object(i.connect)(function(e) {
                var t = Object(a.e)(e);
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
        "5zf8": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            }), n.d(t, "b", function() {
                return l
            });
            var i, a, r = n("/7QA");

            function o(e, t) {
                switch (e) {
                    case i.Second:
                        return Object(r.d)("{secondCount, plural, one {# second} other {# seconds}}", {
                            secondCount: t
                        }, "formatDuration");
                    case i.Minute:
                        return Object(r.d)("{minuteCount, plural, one {# minute} other {# minutes}}", {
                            minuteCount: t
                        }, "formatDuration");
                    case i.Hour:
                        return Object(r.d)("{hourCount, plural, one {# hour} other {# hours}}", {
                            hourCount: t
                        }, "formatDuration");
                    case i.Day:
                        return Object(r.d)("{dayCount, plural, one {# day} other {# days}}", {
                            dayCount: t
                        }, "formatDuration");
                    case i.Week:
                        return Object(r.d)("{weekCount, plural, one {# week} other {# weeks}}", {
                            weekCount: t
                        }, "formatDuration");
                    case i.Month:
                        return Object(r.d)("{monthCount, plural, one {# month} other {# months}}", {
                            monthCount: t
                        }, "formatDuration");
                    default:
                        return ""
                }
            }

            function s(e, t) {
                switch (e) {
                    case i.Second:
                        return Object(r.d)("{secondCount}s", {
                            secondCount: t
                        }, "formatDuration");
                    case i.Minute:
                        return Object(r.d)("{minuteCount}m", {
                            minuteCount: t
                        }, "formatDuration");
                    case i.Hour:
                        return Object(r.d)("{hourCount}h", {
                            hourCount: t
                        }, "formatDuration");
                    case i.Day:
                        return Object(r.d)("{dayCount}d", {
                            dayCount: t
                        }, "formatDuration");
                    case i.Week:
                        return Object(r.d)("{weekCount}w", {
                            weekCount: t
                        }, "formatDuration");
                    case i.Month:
                        return Object(r.d)("{monthCount}mo", {
                            monthCount: t
                        }, "formatDuration");
                    default:
                        return ""
                }
            }

            function l(e, t) {
                var n;
                switch (void 0 === t && (t = a.Humanized), t === a.ClockAuto && (t = e >= 3600 ? a.ClockHMS : a.ClockMS), t) {
                    case a.ClockHM:
                    case a.ClockHMS:
                        n = i.Hour;
                        break;
                    case a.ClockMS:
                        n = i.Minute
                }
                var l = 2;
                t === a.ClockHMS && (l = 3);
                var d = function(e, t) {
                        void 0 === t && (t = i.Month);
                        var n = {};
                        return n.seconds = e, e < 60 || t === i.Second ? n : (n.minutes = Math.floor(e / 60), n.seconds = e % 60, n.minutes < 60 || t === i.Minute ? n : (n.hours = Math.floor(n.minutes / 60), n.minutes = n.minutes % 60, n.hours < 24 || t === i.Hour ? n : (n.days = Math.floor(n.hours / 24), n.hours = n.hours % 24, n.days < 7 || t === i.Day ? n : n.days <= 26 || t === i.Week ? (n.weeks = Math.floor(n.days / 7), n.days = n.days % 7, n) : (n.months = Math.round((n.days + 3) / 30), n))))
                    }(e, n),
                    u = Object.keys(d);
                if (u.forEach(function(e, n) {
                        t !== a.Humanized && t !== a.HumanizedShort || d[e] || delete d[e], n < u.length - l && delete d[e]
                    }), t === a.Humanized) return function(e) {
                    return e.months ? o(i.Month, e.months) : e.weeks && e.days ? o(i.Week, e.weeks) + " " + o(i.Day, e.days) : e.weeks ? o(i.Week, e.weeks) : e.days && e.hours ? o(i.Day, e.days) + " " + o(i.Hour, e.hours) : e.days ? o(i.Day, e.days) : e.hours && e.minutes ? o(i.Hour, e.hours) + " " + o(i.Minute, e.minutes) : e.hours ? o(i.Hour, e.hours) : e.minutes && e.seconds ? o(i.Minute, e.minutes) + " " + o(i.Second, e.seconds) : e.minutes ? o(i.Minute, e.minutes) : o(i.Second, e.seconds || 0)
                }(d);
                if (t === a.HumanizedShort) return function(e) {
                    return e.months ? s(i.Month, e.months) : e.weeks && e.days ? "" + s(i.Week, e.weeks) + s(i.Day, e.days) : e.weeks ? s(i.Week, e.weeks) : e.days && e.hours ? "" + s(i.Day, e.days) + s(i.Hour, e.hours) : e.days ? s(i.Day, e.days) : e.hours && e.minutes ? "" + s(i.Hour, e.hours) + s(i.Minute, e.minutes) : e.hours ? s(i.Hour, e.hours) : e.minutes && e.seconds ? "" + s(i.Minute, e.minutes) + s(i.Second, e.seconds) : e.minutes ? s(i.Minute, e.minutes) : s(i.Second, e.seconds || 0)
                }(d);
                var p = ":",
                    m = !1;
                switch (r.p.intl.getLanguageCode()) {
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
                    case a.ClockHM:
                    case a.ClockHMS:
                        var v = (m ? c(f, 2) : f) + p + c(g, 2);
                        return t === a.ClockHMS && (v += p + c(h, 2)), v;
                    case a.ClockMS:
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
            }(a || (a = {}))
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
                a = n("q1tI"),
                r = n("H1ft"),
                o = n("yR8l"),
                s = function(e) {
                    return e.map(function(e) {
                        return l(e.node)
                    })
                },
                l = function(e) {
                    return {
                        duration: e.durationMilliseconds / 1e3,
                        label: e.description || "",
                        offset: e.positionMilliseconds / 1e3,
                        thumbnailUrl: c(e),
                        videoID: e.video && e.video.id || ""
                    }
                },
                c = function(e) {
                    return e.thumbnailURL ? e.thumbnailURL : e.details && d(e.details) && e.details.game && e.details.game.boxArtURL ? e.details.game.boxArtURL : "https://static-cdn.jtvnw.net/ttv-static/404_boxart-285x380.jpg"
                },
                d = function(e) {
                    return !!e.game
                },
                u = n("cr+I"),
                p = n("/7QA"),
                m = n("GFmA"),
                h = n("0INk"),
                g = n("yWUM"),
                f = n("vRsq"),
                v = n("2xye"),
                k = n("GnwI"),
                b = n("4HIT"),
                y = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onClickHandler = function() {
                            t.props.onClick && t.props.onClick(t.props.tracking.content_index)
                        }, t.gameChangesWithLinks = function() {
                            return t.props.videoGameChanges.map(function(e) {
                                var n = {
                                    t: Object(g.a)(e.offset)
                                };
                                return t.props.collectionID && (n.collection = t.props.collectionID), i.__assign({}, e, {
                                    linkTo: {
                                        pathname: "/videos/" + t.props.video.id,
                                        search: u.stringify(n),
                                        state: {
                                            content: v.PageviewContent.PreviewCardGameBalloonGame,
                                            medium: t.props.tracking.medium
                                        }
                                    }
                                })
                            })
                        }, t.trackVideoGameBalloonClick = function() {
                            t.props.video.owner && t.props.video.owner.id && t.props.video.owner.login && Object(h.b)({
                                videoID: t.props.video.id,
                                broadcasterID: t.props.video.owner.id,
                                channelLogin: t.props.video.owner.login,
                                contentIndex: t.props.tracking.content_index,
                                pageviewMedium: t.props.tracking.medium
                            })
                        }, t.trackVideoGameBalloonItemClick = function(e) {
                            t.props.video.owner && t.props.video.owner.id && t.props.video.owner.login && Object(h.c)({
                                videoID: t.props.video.id,
                                broadcasterID: t.props.video.owner.id,
                                channelLogin: t.props.video.owner.login,
                                contentIndex: e,
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
                                pathname: Object(f.i)(void 0, this.props.video.id),
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
                                src: this.props.video.game && this.props.video.game.boxArtURL || p.a.defaultBoxArtURL,
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
                                linkPath: b.a.PopularTag
                            } : void 0
                        };
                        return a.createElement(m.a, i.__assign({}, e))
                    }, t.prototype.generateSearchString = function() {
                        var e = {};
                        this.props.collectionID && (e.collection = this.props.collectionID), this.props.videoBrowseOptions && (this.props.videoBrowseOptions.filter && (e.filter = this.props.videoBrowseOptions.filter), this.props.videoBrowseOptions.sort && (e.sort = this.props.videoBrowseOptions.sort), this.props.videoBrowseOptions.range && (e.range = this.props.videoBrowseOptions.range));
                        var t = u.stringify(e);
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
                }(a.Component),
                C = Object(k.b)("VideoPreviewCard", {
                    autoReportInteractive: !0
                })(y),
                S = n("1Ijn");
            n.d(t, "a", function() {
                return T
            });
            var w = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.convertMomentEdgesToChanges = function() {
                            var e = s(t.props.data && t.props.data.video && t.props.data.video.moments && t.props.data.video.moments.edges || []);
                            return e.length > 1 ? e : []
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(C, i.__assign({
                            videoGameChanges: this.convertMomentEdgesToChanges()
                        }, this.props))
                    }, t
                }(a.Component),
                T = Object(o.a)(S, {
                    options: function(e) {
                        return {
                            variables: {
                                videoId: e.video.id
                            }
                        }
                    },
                    skip: function(e) {
                        return !(e.multipleVideoGameMarkersType && (e.multipleVideoGameMarkersType !== r.a.None || e.video.id))
                    }
                })(w)
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
            n.d(t, "e", function() {
                return o
            }), n.d(t, "c", function() {
                return p
            }), n.d(t, "a", function() {
                return h
            }), n.d(t, "b", function() {
                return f
            }), n.d(t, "d", function() {
                return b
            });
            var i = n("/7QA"),
                a = n("DMoW"),
                r = n("yI6f");

            function o(e, t, n) {
                if ("string" == typeof e.text) return e.text;
                var a = e.contentType === r.b.Live ? t : n;
                return a ? e.text(a) : Object(i.d)("I am not interested in this content", "RecFeedbackModal")
            }

            function s(e) {
                return Object(i.d)("I am not interested in this channel: {channel}", {
                    channel: e
                }, "FeedbackReason")
            }

            function l() {
                return {
                    text: function(e) {
                        return function(e) {
                            return Object(i.d)("I am not interested in this category: {category}", {
                                category: e
                            }, "FeedbackReason")
                        }(e)
                    },
                    contentType: r.b.Game,
                    feedbackType: a.M.NOT_INTERESTED
                }
            }

            function c() {
                return {
                    text: Object(i.d)("I am not interested in this video", "FeedbackReason"),
                    contentType: r.b.Vod,
                    feedbackType: a.M.NOT_INTERESTED
                }
            }

            function d() {
                return Object(i.d)("Other", "FeedbackReasonOther")
            }
            var u = null;

            function p() {
                return null === u && (u = [l()]), u
            }
            var m = null;

            function h() {
                return null === m && (m = [{
                    text: function(e) {
                        return s(e)
                    },
                    contentType: r.b.Live,
                    feedbackType: a.M.NOT_INTERESTED
                }, l(), {
                    text: d(),
                    contentType: r.b.Live,
                    feedbackType: a.M.OTHER
                }]), m
            }
            var g = null;

            function f() {
                return null === g && (g = [l(), {
                    text: d(),
                    contentType: r.b.Game,
                    feedbackType: a.M.OTHER
                }]), g
            }
            var v = null,
                k = null;

            function b(e) {
                var t = [];
                return e ? (null === v && (v = [c(), {
                    text: function(e) {
                        return s(e)
                    },
                    contentType: r.b.Live,
                    feedbackType: a.M.NOT_INTERESTED
                }, l(), {
                    text: d(),
                    contentType: r.b.Vod,
                    feedbackType: a.M.OTHER
                }]), t = v) : (null === k && (k = [c(), {
                    text: function(e) {
                        return s(e)
                    },
                    contentType: r.b.Live,
                    feedbackType: a.M.NOT_INTERESTED
                }, {
                    text: d(),
                    contentType: r.b.Vod,
                    feedbackType: a.M.OTHER
                }]), t = k), t
            }
        },
        "9a8W": function(e, t, n) {},
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
            var i, a, r = n("/7QA"),
                o = n("2xye");
            ! function(e) {
                e.HomepageCTA = "homepage_cta", e.NewSignup = "new_signup"
            }(i || (i = {})),
            function(e) {
                e.Click = "click", e.Impression = "impression", e.Start = "start", e.Dismissed = "dismissed", e.Completed = "completed"
            }(a || (a = {}));
            var s = function(e) {
                    var t = {
                        source: e.source,
                        action: a.Start
                    };
                    r.o.track(o.SpadeEventType.OnboardingEvent, t)
                },
                l = function() {
                    var e = {
                        source: i.HomepageCTA,
                        action: a.Completed
                    };
                    r.o.track(o.SpadeEventType.OnboardingEvent, e)
                },
                c = function(e, t) {
                    var n = {
                        src: o.SpadeEventType.OnboardingEvent,
                        game: t
                    };
                    r.o.track(e, n)
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
            var i, a = n("mrSG"),
                r = n("/7QA"),
                o = n("2xye"),
                s = n("I6K6"),
                l = n("bTcf"),
                c = n("L7EG");

            function d(e, t, n) {
                return a.__awaiter(this, void 0, void 0, function() {
                    var i, l, u, p;
                    return a.__generator(this, function(a) {
                        switch (a.label) {
                            case 0:
                                return a.trys.push([0, 2, , 3]), [4, n.query({
                                    query: c,
                                    variables: {
                                        videoID: e.id
                                    }
                                })];
                            case 1:
                                return i = a.sent().data, l = function(e, t) {
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
                                }, r.p.tracking.track(o.SpadeEventType.ShareItem, u), [3, 3];
                            case 2:
                                return p = a.sent(), r.k.error(p.toString(), d.name), [3, 3];
                            case 3:
                                return [2]
                        }
                    })
                })
            }

            function u(e, t, n) {
                return a.__awaiter(this, void 0, void 0, function() {
                    var i, s, c;
                    return a.__generator(this, function(a) {
                        switch (a.label) {
                            case 0:
                                return a.trys.push([0, 2, , 3]), [4, n.query({
                                    query: l,
                                    variables: {
                                        creatorID: e.owner.id
                                    }
                                })];
                            case 1:
                                return i = a.sent().data, s = {
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
                                }, r.p.tracking.track(o.SpadeEventType.ShareItem, s), [3, 3];
                            case 2:
                                return c = a.sent(), r.k.error(c.toString(), u.name), [3, 3];
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
                a = n("yR8l"),
                r = n("8jSG"),
                o = n("cMjZ"),
                s = n("kSkr");

            function l() {
                var e = this;
                return Object(a.a)(s, {
                    props: function(t) {
                        return {
                            blockUserMutation: function(n, a, s, l) {
                                return i.__awaiter(e, void 0, void 0, function() {
                                    return i.__generator(this, function(e) {
                                        switch (e.label) {
                                            case 0:
                                                return t.mutate ? [4, t.mutate({
                                                    variables: {
                                                        input: {
                                                            targetUserID: n,
                                                            sourceContext: s,
                                                            reason: a
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
                                                            fragment: r
                                                        });
                                                        t && (t.blockedUsers.push({
                                                            id: n,
                                                            __typename: "User"
                                                        }), e.writeFragment({
                                                            id: Object(o.a)(l),
                                                            fragment: r,
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
                a = n("q1tI"),
                r = n("/7QA"),
                o = n("5zf8"),
                s = n("Ue10"),
                l = (n("Fj9y"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onBalloonItemClick = function() {
                            t.props.onBalloonItemClick && t.props.onBalloonItemClick(t.props.index)
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = {
                            src: this.props.gameChange.thumbnailUrl,
                            alt: this.props.gameChange.label
                        };
                        return a.createElement(s.Ya, {
                            className: "preview-card-game-balloon-row",
                            display: s.X.Flex,
                            flexWrap: s.Ba.NoWrap
                        }, a.createElement(s.Va, {
                            linkTo: this.props.gameChange.linkTo,
                            onClick: this.onBalloonItemClick
                        }, a.createElement(s.Ya, {
                            display: s.X.Flex,
                            flexDirection: s.Aa.Row,
                            padding: .5
                        }, a.createElement(s.Fb, {
                            className: "preview-card-game-balloon-row__image-wrapper",
                            flexGrow: 0,
                            flexShrink: 0,
                            borderRadius: s.x.Small,
                            overflow: s.db.Hidden,
                            position: s.kb.Relative
                        }, a.createElement(s.o, {
                            align: s.d.Center,
                            ratio: s.p.BoxArt
                        }, a.createElement(s.S, i.__assign({}, e))), a.createElement(s.Fb, {
                            className: "preview-card-game-balloon-row__image-play-overlay",
                            alignItems: s.f.Center,
                            background: s.r.Overlay,
                            color: s.O.Overlay,
                            display: s.X.Flex,
                            justifyContent: s.Xa.Center,
                            position: s.kb.Absolute,
                            attachTop: !0,
                            attachBottom: !0,
                            attachLeft: !0,
                            attachRight: !0
                        }, a.createElement(s.tb, {
                            asset: s.ub.Play,
                            type: s.vb.Inherit
                        }))), a.createElement(s.Ya, {
                            display: s.X.Flex,
                            flexDirection: s.Aa.Column,
                            flexGrow: 1,
                            flexShrink: 1,
                            padding: {
                                left: 1,
                                top: 1
                            }
                        }, a.createElement(s.Ya, {
                            className: "preview-card-game-balloon-row__info-label"
                        }, a.createElement(s.W, null, this.props.gameChange.label)), a.createElement(s.Ya, {
                            className: "preview-card-game-balloon-row__info-duration"
                        }, a.createElement(s.W, null, Object(o.b)(this.props.gameChange.duration)))))))
                    }, t
                }(a.Component)),
                c = n("0INk"),
                d = n("8/mp"),
                u = n("eJ65"),
                p = (n("vDRX"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onBalloonToggle = function(e) {
                            t.props.onBalloonClick && !e && t.props.onBalloonClick()
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
                        return a.createElement(s.Ya, {
                            className: "preview-card-game-balloon",
                            display: s.X.InlineBlock,
                            position: s.kb.Relative,
                            margin: {
                                top: .5
                            }
                        }, a.createElement(u.a, {
                            key: "game-balloon",
                            display: s.X.Inline,
                            onToggle: this.onBalloonToggle,
                            hideBalloonOnInsideClick: !0
                        }, a.createElement(s.z, {
                            type: s.F.Hollow,
                            icon: s.ub.ViewerList
                        }, a.createElement(s.Ya, {
                            display: s.X.Flex,
                            flexDirection: s.Aa.Row
                        }, a.createElement(s.W, null, Object(r.d)("Chapters", "PreviewCardGameBalloon")), a.createElement(s.Ya, {
                            margin: {
                                left: 1
                            }
                        }, a.createElement(s.hb, {
                            label: this.props.videoGameChanges.length.toString()
                        })))), a.createElement(s.u, {
                            direction: s.v.TopLeft,
                            size: s.w.Medium
                        }, a.createElement(s.Ya, {
                            overflow: s.db.Hidden,
                            display: s.X.Flex,
                            flexDirection: s.Aa.Column,
                            flexWrap: s.Ba.NoWrap
                        }, a.createElement(s.Ya, {
                            padding: .5,
                            flexShrink: 0,
                            flexGrow: 0
                        }, a.createElement(s.W, {
                            color: s.O.Alt2
                        }, Object(r.d)("Chapter Select", "PreviewCardGameBalloon"))), a.createElement(s.Ya, {
                            className: "preview-card-game-balloon__content",
                            display: s.X.Flex,
                            flexDirection: s.Aa.Column,
                            flexGrow: 1,
                            flexShrink: 1,
                            flexWrap: s.Ba.NoWrap
                        }, a.createElement(d.b, null, a.createElement(s.Ya, {
                            display: s.X.Flex,
                            flexDirection: s.Aa.Column,
                            flexWrap: s.Ba.NoWrap,
                            fullHeight: !0
                        }, this.renderAdditionalGameList(this.props.videoGameChanges))))))))
                    }, t.prototype.renderAdditionalGameList = function(e) {
                        var t = this;
                        return e.map(function(e, n) {
                            return a.createElement(l, {
                                index: n,
                                gameChange: e,
                                key: e.offset,
                                onBalloonItemClick: t.props.onBalloonItemClick
                            })
                        })
                    }, t
                }(a.Component)),
                m = n("kduP"),
                h = n("2xye"),
                g = function(e) {
                    return a.createElement(s.Ya, null, a.createElement(s.W, {
                        color: s.O.Alt,
                        ellipsis: !0
                    }, e.videoGameChanges.map(function(t, n, i) {
                        return a.createElement(s.Qa, {
                            key: n
                        }, a.createElement(s.U, {
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
                    var t = a.createElement(s.Fb, {
                        className: "preview-card-iconic-image__wrapper",
                        borderRadius: s.x.Small,
                        overflow: s.db.Hidden
                    }, a.createElement(s.o, {
                        ratio: e.aspect || s.p.BoxArt,
                        align: s.d.Center
                    }, a.createElement(s.S, i.__assign({}, e.imageProps))));
                    return e.linkTo && (t = a.createElement(s.U, i.__assign({}, Object(v.a)(e), {
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
                    return a.createElement(s.Ya, {
                        display: s.X.Flex,
                        padding: {
                            x: 1,
                            y: .5
                        },
                        justifyContent: s.Xa.Between,
                        alignItems: s.f.Center,
                        className: t
                    }, a.createElement(s.Ya, {
                        display: s.X.InlineFlex
                    }, a.createElement(s.W, {
                        "data-test-selector": "top-bar-title-selector",
                        color: s.O.Overlay,
                        bold: !0,
                        transform: s.Vb.Uppercase
                    }, e.title)), e.subTitle && a.createElement(s.Ya, {
                        display: s.X.InlineFlex
                    }, a.createElement(s.W, {
                        "data-test-selector": "top-bar-sub-title-selector",
                        color: s.O.Overlay
                    }, e.subTitle)))
                }),
                S = (n("m493"), function(e) {
                    var t = .5,
                        n = null;
                    "number" == typeof e.progressBarPercent && e.progressBarPercent > 0 && (n = a.createElement(s.Ya, {
                        position: s.kb.Absolute,
                        attachBottom: !0,
                        fullWidth: !0
                    }, a.createElement(s.nb, {
                        borderRadius: s.x.None,
                        size: s.pb.Small,
                        value: e.progressBarPercent,
                        mask: !0
                    })), t = 1);
                    var r = 1,
                        o = null;
                    return e.topBar && (o = a.createElement(s.Ya, {
                        position: s.kb.Absolute,
                        attachTop: !0,
                        fullWidth: !0
                    }, a.createElement(C, i.__assign({}, e.topBar))), r = 3), a.createElement(s.Ya, {
                        position: s.kb.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        fullWidth: !0,
                        fullHeight: !0,
                        className: "preview-card-overlay"
                    }, o, n, a.createElement(s.Ya, {
                        position: s.kb.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        margin: e.topBar ? {
                            x: 1,
                            y: r
                        } : 1,
                        "data-test-selector": "top-left-selector"
                    }, e.topLeft), a.createElement(s.Ya, {
                        position: s.kb.Absolute,
                        attachTop: !0,
                        attachRight: !0,
                        margin: e.topBar ? {
                            x: 1,
                            y: r
                        } : 1,
                        "data-test-selector": "top-right-selector"
                    }, e.topRight), a.createElement(s.Ya, {
                        position: s.kb.Absolute,
                        attachBottom: !0,
                        attachLeft: !0,
                        margin: {
                            x: .5,
                            y: t
                        },
                        "data-test-selector": "bottom-left-selector"
                    }, e.bottomLeft), a.createElement(s.Ya, {
                        position: s.kb.Absolute,
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
                    var t = e.icon && a.createElement(s.Ya, {
                        display: s.X.Flex,
                        margin: {
                            right: .5
                        }
                    }, a.createElement(s.tb, {
                        asset: e.icon,
                        width: 10,
                        height: 10
                    }));
                    return e.withBackground ? a.createElement(s.Fb, {
                        alignItems: s.f.Center,
                        background: s.r.Overlay,
                        borderRadius: s.x.Small,
                        className: "preview-card-stat",
                        color: s.O.Overlay,
                        display: s.X.Flex,
                        fontSize: s.Ca.Size6,
                        justifyContent: s.Xa.Center
                    }, t, a.createElement(s.W, null, e.value)) : a.createElement(s.Fb, {
                        className: "preview-card-stat",
                        color: s.O.Overlay,
                        display: s.X.Flex,
                        padding: {
                            x: .5
                        }
                    }, t, a.createElement(s.W, null, e.value))
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
                        }), a.createElement("div", i.__assign({}, e, {
                            onClick: this.props.onClick
                        }), a.createElement(s.Fb, {
                            background: s.r.Alt2,
                            overflow: s.db.Hidden
                        }, a.createElement(s.o, {
                            ratio: this.props.aspectRatio
                        }, this.renderImage())))
                    }, t.prototype.renderImage = function() {
                        var e, t = !(!this.props.animatedImageProps || !this.state.isHovered || this.state.didAnimatedPreviewFailToLoad),
                            n = y("preview-card-thumbnail__image", ((e = {})["preview-card-thumbnail__image--animated"] = this.state.isHovered && this.state.didAnimatedPreviewLoad, e));
                        return t && void 0 !== this.props.animatedImageProps ? a.createElement("div", {
                            className: n
                        }, a.createElement(s.S, i.__assign({}, this.props.animatedImageProps, {
                            onLoad: this.onAnimatedImageLoad,
                            onError: this.onAnimatedImageLoadError,
                            "data-test-selector": "preview-card-thumbnail__image-selector"
                        }))) : a.createElement("div", {
                            className: n
                        }, a.createElement(s.S, i.__assign({}, this.props.staticImageProps, {
                            onLoad: this.onImageLoad,
                            onError: this.onImageError,
                            "data-test-selector": "preview-card-thumbnail__image-selector"
                        })))
                    }, t
                }(a.Component)),
                N = Object(T.b)("PreviewCardThumbnail")(_),
                E = (n("80G/"), function(e) {
                    var t = null;
                    return e.subtitles && e.subtitles.length > 0 && (t = e.subtitles.map(function(e, t) {
                        return a.createElement(s.Ya, {
                            key: t,
                            "data-test-selector": "preview-card-titles__subtitle"
                        }, a.createElement(s.W, {
                            color: s.O.Alt,
                            ellipsis: !0
                        }, "string" == typeof e ? e : a.createElement(s.U, {
                            "data-a-target": e.automationSelector,
                            to: e.linkTo,
                            onClick: e.onClick,
                            type: s.V.Inherit
                        }, e.text)))
                    })), a.createElement("div", null, a.createElement(s.U, i.__assign({}, Object(v.a)(e), {
                        to: e.linkTo,
                        onClick: e.onClick,
                        type: s.V.Inherit,
                        "data-test-selector": "preview-card-titles__primary-link"
                    }), a.createElement(s.W, {
                        type: s.Wb.H3,
                        fontSize: s.Ca.Size5,
                        lines: 1,
                        bold: !0,
                        ellipsis: !0
                    }, e.title)), a.createElement(s.Ya, {
                        className: "preview-card-titles__subtitle-wrapper"
                    }, t))
                }),
                O = n("H1ft"),
                R = n("ZbA5"),
                I = n("QVaV"),
                D = n("hyVY"),
                x = n("MXoD"),
                M = n("0LAi");
            ! function(e) {
                e.LockSelector = "video-lock", e.UpsellSelector = "upsell"
            }(b || (b = {}));
            var F, j, P = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    if (!this.props.restriction || !this.props.restriction.productName || !this.props.restriction.title) return null;
                    var e = Object(r.d)("Get It Now", "VideoPreviewCardRestriction"),
                        t = this.props.restriction.canViewRestricted,
                        n = t ? Object(r.d)("unlocked", "VideoPreviewCardRestriction") : Object(r.d)("locked", "VideoPreviewCardRestriction"),
                        i = t ? s.ub.Unlock : s.ub.Lock;
                    return a.createElement(s.Ya, null, !t && a.createElement(s.Fb, {
                        background: s.r.Overlay,
                        className: "video-preview-card-restriction",
                        color: s.O.Overlay,
                        display: s.X.Flex,
                        position: s.kb.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        zIndex: s.jc.Default,
                        padding: {
                            x: 5
                        },
                        textAlign: s.Sb.Center,
                        fullWidth: !0,
                        fullHeight: !0,
                        alignItems: s.f.Center,
                        alignContent: s.e.Center,
                        flexDirection: s.Aa.Column,
                        flexWrap: s.Ba.Wrap,
                        justifyContent: s.Xa.Center,
                        "data-test-selector": b.LockSelector
                    }, a.createElement(s.Qa, {
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(s.W, {
                        color: s.O.Overlay,
                        fontSize: s.Ca.Size5,
                        "data-test-selector": b.UpsellSelector
                    }, Object(r.d)("View with {title}", {
                        title: this.props.restriction.title
                    }, "VideoPreviewCardRestriction"))), a.createElement(s.Ya, null, a.createElement(s.z, {
                        type: s.F.Hollow,
                        ariaLabel: e,
                        targetBlank: !0,
                        disabled: "" === this.props.restriction.upsellLinkTo,
                        linkTo: this.props.restriction.upsellLinkTo,
                        overlay: !0
                    }, e))), a.createElement(s.Fb, {
                        display: s.X.InlineFlex,
                        position: s.kb.Absolute,
                        attachTop: this.props.attachTop,
                        attachBottom: !this.props.attachTop,
                        attachRight: !0,
                        margin: .5,
                        zIndex: s.jc.Default,
                        fontSize: s.Ca.Size6,
                        background: s.r.Overlay,
                        borderRadius: s.x.Medium,
                        color: s.O.Overlay
                    }, a.createElement(s.Zb, {
                        direction: this.props.attachTop ? s.bc.Bottom : s.bc.Top,
                        align: s.ac.Right,
                        label: n
                    }, a.createElement(s.tb, {
                        asset: i,
                        height: 20,
                        width: 20
                    }))))
                }, t
            }(a.PureComponent);
            n("5NSO");

            function L(e) {
                return void 0 !== e.watchedProgressPercent
            }

            function U(e) {
                return void 0 !== e.clipCreatedByChannelLogin
            }! function(e) {
                e.Avatar = "preview-card-avatar", e.BoxArt = "preview-card-box-art"
            }(F || (F = {})),
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
                        return a.createElement("div", i.__assign({
                            className: "preview-card"
                        }, Object(v.a)(this.props)), a.createElement(s.Fb, {
                            position: s.kb.Relative,
                            borderRadius: s.x.Medium,
                            overflow: s.db.Hidden
                        }, this.renderVODRestrictionOverlay(), a.createElement(s.U, {
                            to: Object(x.a)(this.getTrackingContext(h.PageviewContent.VideoThumbnail), this.props.linkTo),
                            onClick: this.props.onThumbnailClick || this.props.onClick,
                            "data-a-target": "preview-card-image-link"
                        }, this.props.thumbnailImageProps && a.createElement(N, {
                            staticImageProps: this.props.thumbnailImageProps,
                            animatedImageProps: L(this.props) && this.props.animatedImageProps || void 0,
                            trackImageLatency: this.props.trackImageLatency
                        }), this.renderOverlay())), a.createElement(s.Ya, {
                            display: s.X.Flex,
                            flexWrap: s.Ba.NoWrap,
                            margin: {
                                top: 1
                            }
                        }, a.createElement(s.Ya, {
                            flexGrow: 0,
                            flexShrink: 0
                        }, this.renderIconicImage()), a.createElement(s.Ya, {
                            className: "preview-card__titles-wrapper",
                            flexGrow: 1,
                            flexShrink: 1,
                            fullWidth: !0
                        }, this.renderTitles(), this.renderTags()), this.props.contextualCardActionProps && a.createElement(s.Ya, {
                            flexGrow: 0,
                            flexShrink: 0
                        }, a.createElement(this.props.contextualCardActionProps.component, i.__assign({}, this.props.contextualCardActionProps.props)))))
                    }, t.prototype.renderOverlay = function() {
                        return function(e) {
                            return void 0 !== e.streamType
                        }(this.props) ? a.createElement(S, {
                            topLeft: a.createElement(R.a, {
                                type: this.props.streamType,
                                hosting: !!this.props.hostedByChannelLogin
                            }),
                            topRight: void 0,
                            bottomLeft: a.createElement(w, {
                                value: Object(r.d)("{viewerCount, plural, one {# viewer} other {# viewers}}", {
                                    viewerCount: this.props.currentViewerCount
                                }, "VideoPreviewCard")
                            }),
                            bottomRight: void 0
                        }) : L(this.props) ? a.createElement(S, {
                            topLeft: void 0 !== this.props.durationInSeconds && a.createElement(w, {
                                value: Object(D.b)(this.props.durationInSeconds),
                                icon: s.ub.Play,
                                withBackground: !0
                            }),
                            topRight: this.props.listPosition && a.createElement(w, {
                                withBackground: !0,
                                value: this.getListPositionLabel()
                            }),
                            bottomLeft: a.createElement(w, {
                                value: this.getViewCountLabel()
                            }),
                            bottomRight: this.props.datePublished ? a.createElement(w, {
                                value: Object(r.c)(new Date(this.props.datePublished), "medium")
                            }) : null,
                            progressBarPercent: this.props.watchedProgressPercent,
                            topBar: this.props.topBar
                        }) : U(this.props) ? a.createElement(S, {
                            topLeft: a.createElement(w, {
                                value: Object(D.b)(this.props.durationInSeconds),
                                icon: s.ub.Clip,
                                withBackground: !0
                            }),
                            topRight: void 0,
                            bottomLeft: a.createElement(w, {
                                value: this.getViewCountLabel()
                            }),
                            bottomRight: this.props.datePublished ? a.createElement(w, {
                                value: Object(r.c)(new Date(this.props.datePublished), "medium")
                            }) : null
                        }) : void 0
                    }, t.prototype.getListPositionLabel = function() {
                        return L(this.props) && this.props.listPosition ? Object(r.d)("{totalVideos, plural, one {{position} / # video} other {{position} / # videos}}", {
                            position: this.props.listPosition.position,
                            totalVideos: this.props.listPosition.totalVideos
                        }, "VideoPreviewCard") : ""
                    }, t.prototype.getViewCountLabel = function() {
                        return L(this.props) || U(this.props) ? Object(r.d)("{viewerCount, plural, one {# view} other {# views}}", {
                            viewerCount: this.props.viewCount
                        }, "VideoPreviewCard") : ""
                    }, t.prototype.renderIconicImage = function() {
                        return this.props.context === j.SingleChannelList && this.props.gameBoxArtImageProps && this.props.gameBoxArtImageProps.src && this.props.gameTitleLinkTo ? a.createElement(s.Ya, {
                            margin: {
                                right: 1
                            }
                        }, a.createElement(k, {
                            imageProps: this.props.gameBoxArtImageProps,
                            linkTo: Object(x.a)(this.getTrackingContext(h.PageviewContent.GameBoxart), this.props.gameTitleLinkTo),
                            onClick: this.props.onGameTitleClick,
                            aspect: s.p.BoxArt,
                            "data-test-selector": F.BoxArt,
                            "data-a-target": "preview-card-boxart-link"
                        })) : (this.props.context === j.SingleGameList || this.props.context === j.MixedGameAndChannelList) && this.props.channelImageProps && this.props.channelImageProps.src ? a.createElement(s.Ya, {
                            margin: {
                                right: 1
                            }
                        }, a.createElement(k, {
                            imageProps: this.props.channelImageProps,
                            linkTo: Object(x.a)(this.getTrackingContext(h.PageviewContent.UserThumbnail), this.props.channelLinkTo),
                            onClick: this.props.onChannelImageClick || this.props.onChannelLoginClick,
                            aspect: s.p.Aspect1x1,
                            "data-test-selector": F.Avatar
                        })) : void 0
                    }, t.prototype.renderTitles = function() {
                        var e = null,
                            t = [];
                        return this.shouldShowGameBalloon(this.props) || t.push({
                            text: Object(I.a)(this.props.channelLogin, this.props.channelDisplayName, !0),
                            linkTo: Object(x.a)(this.getTrackingContext(h.PageviewContent.ChannelMetadata), this.props.channelLinkTo),
                            onClick: this.props.onChannelLoginClick,
                            automationSelector: "preview-card-channel-link"
                        }), U(this.props) && this.props.clipCreatedByChannelLoginLinkTo ? t.push({
                            text: Object(r.d)("Clipped by {userName}", {
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
                        }), a.createElement(a.Fragment, null, a.createElement(E, {
                            title: this.props.title,
                            onClick: this.props.onVideoTitleClick || this.props.onClick,
                            linkTo: Object(x.a)(this.getTrackingContext(h.PageviewContent.VideoTitle), this.props.linkTo),
                            subtitles: t,
                            "data-a-target": "preview-card-title-link"
                        }), e)
                    }, t.prototype.renderTags = function() {
                        return this.props.tagListProps && 0 !== this.props.tagListProps.tags.length ? a.createElement(s.Ya, {
                            margin: {
                                top: .5
                            }
                        }, a.createElement(M.a, i.__assign({}, this.props.tagListProps, {
                            tagNumberLimit: 3
                        }))) : null
                    }, t.prototype.renderVODRestrictionOverlay = function() {
                        return L(this.props) && this.props.restriction && this.props.restriction.productName && this.props.restriction.title ? a.createElement(P, {
                            restriction: this.props.restriction,
                            attachTop: !0
                        }) : null
                    }, t.prototype.shouldShowGameBalloon = function(e) {
                        return !!L(e) && (!!(e.videoGameChanges && e.videoGameChanges.length > 0) && e.multipleVideoGameMarkersType === O.a.Balloon)
                    }, t.prototype.renderPreviewCardGameInfo = function(e, t, n, i) {
                        switch (e) {
                            case O.a.Balloon:
                                return a.createElement(p, {
                                    videoGameChanges: t,
                                    onBalloonClick: n,
                                    onBalloonItemClick: i
                                });
                            case O.a.Inline:
                                return a.createElement(g, {
                                    videoGameChanges: t,
                                    trackingContext: this.props.trackingContext
                                });
                            case O.a.None:
                                return null;
                            default:
                                return e
                        }
                    }, t
                }(a.Component),
                V = Object(T.b)("PreviewCard", {
                    autoReportInteractive: !0
                })(A);
            n.d(t, !1, function() {
                return F
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
            var i, a = n("/7QA"),
                r = n("D7An");
            ! function(e) {
                e.None = "None", e.Inline = "Inline", e.Balloon = "moments_with_images"
            }(i || (i = {}));
            var o = function() {
                switch (a.p.experiments.getAssignment(r.b.Archer)) {
                    case "moments_with_images":
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
            var a = {};

            function r(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !a[t] && (a[t] = !0, !0)
                })
            }
            i.definitions = i.definitions.concat(r(n("NecO").definitions)), i.definitions = i.definitions.concat(r(n("yLKk").definitions)), i.definitions = i.definitions.concat(r(n("j48g").definitions)), i.definitions = i.definitions.concat(r(n("kEr+").definitions)), e.exports = i
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
                a = n("q1tI"),
                r = n("/7QA"),
                o = (n("efEE"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.logger = r.p.logger.withCategory("resize-detector"), t.onScroll = function() {
                            var e = t.container,
                                n = e.offsetWidth,
                                i = e.offsetHeight,
                                a = e.offsetLeft,
                                r = e.offsetTop;
                            t.logger.debug("Resize Detector -- onScroll"), n === t.width && i === t.height && r === t.top && a === t.left || (t.width = n, t.height = i, t.props.onResize(n, i, r, a)), t.reset()
                        }, t.setGrowDivRef = function(e) {
                            return t.growDiv = e
                        }, t.setGrowChildDivRef = function(e) {
                            return t.growChildDiv = e
                        }, t.setShrinkDivRef = function(e) {
                            return t.shrinkDiv = e
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return a.createElement("div", {
                            className: "resize-detector"
                        }, a.createElement("div", {
                            className: "resize-detector",
                            ref: this.setGrowDivRef
                        }, a.createElement("div", {
                            className: "resize-detector__grow",
                            ref: this.setGrowChildDivRef
                        })), a.createElement("div", {
                            className: "resize-detector",
                            ref: this.setShrinkDivRef
                        }, a.createElement("div", {
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
                }(a.Component));
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
            var i, a, r = n("/7QA"),
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
                p = ((a = {
                    MyClips: s.PageviewLocation.MyClipsManager,
                    ClipsOfMyChannel: s.PageviewLocation.ChannelClipsManager,
                    TopClipsGame: s.PageviewLocation.ClipsGame,
                    TopClipsChannel: s.PageviewLocation.ChannelClips
                })[s.PageviewLocation.ClipsEditing] = s.PageviewLocation.ClipsEditing, a[s.PageviewLocation.ClipsViewing] = s.PageviewLocation.ClipsViewing, a[s.PageviewLocation.ClipsWatchPage] = s.PageviewLocation.ClipsWatchPage, a),
                m = function(e, t, n, i, a) {
                    return function(o) {
                        r.p.tracking.track(s.SpadeEventType.VideoShare, {
                            vod_id: e,
                            vod_type: s.SpadeVideoBroadcastType.Clip,
                            share_platform: c[o],
                            location: p[a],
                            game: t,
                            channel_id: Number(n || 0),
                            channel: i,
                            live: null
                        })
                    }
                },
                h = function(e, t, n, i, a, o) {
                    return function() {
                        r.p.tracking.track(s.SpadeEventType.VideoShare, {
                            vod_id: e,
                            vod_type: s.SpadeVideoBroadcastType.Clip,
                            share_platform: l.a.Link,
                            location: p[a],
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
            var i, a = n("/MKj"),
                r = n("fvjX"),
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
                N = n("4rCz"),
                E = n("ndwU");
            ! function(e) {
                e[e.View = 0] = "View", e[e.Report = 1] = "Report", e[e.Delete = 2] = "Delete", e[e.DeleteAll = 3] = "DeleteAll", e[e.Ban = 4] = "Ban", e[e.Timeout = 5] = "Timeout"
            }(i || (i = {}));
            var O = n("Ue10"),
                R = n("WsU7"),
                I = [i.Delete, i.DeleteAll],
                D = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.clipsMaintenance = Object(E.a)(), n.renderMenuItem = function(e) {
                            var t = n.menuData.get(e);
                            return e && t ? c.createElement(O.Va, {
                                key: t.display,
                                onClick: t.destinationHandler,
                                "data-a-target": "clip-moderation-button-" + t.display,
                                disabled: n.clipsMaintenance && I.includes(e)
                            }, c.createElement(O.Ya, {
                                padding: {
                                    x: 1,
                                    y: .5
                                }
                            }, t.display)) : null
                        }, n.menuData = new Map([
                            [i.Report, {
                                display: Object(N.d)("Report", "ModerationMenu"),
                                destinationHandler: function() {
                                    return n.props.updateModalViewState(i.Report)
                                }
                            }],
                            [i.Delete, {
                                display: Object(N.d)("Delete", "ModerationMenu"),
                                destinationHandler: function() {
                                    return n.props.updateModalViewState(i.Delete)
                                }
                            }],
                            [i.DeleteAll, {
                                display: Object(N.d)("Delete All Clips from Video", "ModerationMenu"),
                                destinationHandler: function() {
                                    return n.props.updateModalViewState(i.DeleteAll)
                                }
                            }],
                            [i.Ban, {
                                display: Object(N.d)("Ban User", "ModerationMenu"),
                                destinationHandler: function() {
                                    return n.props.updateModalViewState(i.Ban)
                                }
                            }],
                            [i.Timeout, {
                                display: Object(N.d)("Timeout User (24 hr)", "ModerationMenu"),
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
                            a = !!t.curator && e.currentUser.id === t.curator.id,
                            r = !!t.broadcaster && e.currentUser.id === t.broadcaster.id,
                            o = a || r || n,
                            s = r || n,
                            l = [i.Report];
                        return o && l.push(i.Delete), s && (l.push(i.DeleteAll), t.curator && t.broadcaster && (l.push(i.Ban), l.push(i.Timeout))), c.createElement(O.Ya, {
                            className: "moderation-menu"
                        }, c.createElement(T.a, null, c.createElement(O.z, {
                            type: O.F.Hollow,
                            icon: O.ub.More,
                            ariaLabel: Object(N.d)("More Options", "ModerationMenu"),
                            "data-a-target": "moderation-menu-button"
                        }), c.createElement(O.u, {
                            direction: O.v.TopRight
                        }, c.createElement(O.Ya, {
                            padding: {
                                y: .5
                            }
                        }, this.moderationMenuRender(l)))))
                    }, t.prototype.moderationMenuRender = function(e) {
                        var t = this;
                        return e.map(function(e) {
                            return t.renderMenuItem(e)
                        })
                    }, t = s.__decorate([Object(_.a)(R), Object(h.b)("ModerationMenu")], t)
                }(c.Component),
                x = n("MLDe"),
                M = (n("n/Dx"), 2e3),
                F = function(e) {
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
                        var e, t = this.props.clip.broadcaster && c.createElement(O.U, {
                            to: "/" + this.props.clip.broadcaster.login,
                            onClick: this.props.closeModal,
                            "data-a-target": "clip-modal-broadcaster-link"
                        }, this.props.clip.broadcaster.login);
                        return e = this.props.clip.game && t ? Object(d.d)("{broadcaster} playing {game}", {
                            broadcaster: t,
                            game: c.createElement(O.U, {
                                to: "" + Object(C.c)(this.props.clip.game.name),
                                onClick: this.props.closeModal,
                                "data-a-target": "clip-modal-game-link"
                            }, this.props.clip.game.name)
                        }, "ClipsViewModalContent") : t, c.createElement(O.Fb, {
                            className: "clips-view-modal-content",
                            background: O.r.Base
                        }, c.createElement(O.Ya, {
                            padding: {
                                bottom: 2
                            }
                        }, c.createElement(O.o, {
                            ratio: O.p.Aspect16x9
                        }, c.createElement("iframe", {
                            src: this.props.clip.embedURL,
                            width: "100%",
                            height: "100%",
                            allowFullScreen: !0
                        }))), c.createElement(O.Ya, {
                            padding: {
                                x: 2,
                                bottom: 2
                            }
                        }, c.createElement(O.Ya, {
                            display: O.X.Flex,
                            flexWrap: O.Ba.NoWrap
                        }, c.createElement(O.Ya, {
                            flexGrow: 1,
                            margin: {
                                right: 1
                            }
                        }, c.createElement(v.a, {
                            onClickOut: this.dismissBalloon
                        }, c.createElement(k.a, {
                            text: this.props.clip.url,
                            icon: !0,
                            iconAsset: O.ub.Link,
                            onSelection: this.copyClipURL,
                            "data-a-target": "clip-share-input"
                        }, c.createElement(O.u, {
                            show: this.state.isShowingBalloon,
                            direction: O.v.TopRight
                        }, c.createElement(O.Va, {
                            onClick: this.dismissBalloon
                        }, c.createElement(O.Ya, {
                            padding: 1
                        }, c.createElement(O.W, {
                            bold: !0
                        }, Object(d.d)("Link copied to clipboard", "ClipsViewModalContent")))))))), c.createElement(w.a, {
                            clip: this.props.clip,
                            pageType: this.props.pageType
                        }), c.createElement(D, {
                            clip: this.props.clip,
                            updateModalViewState: this.props.updateModalViewState
                        }))), c.createElement(O.Ya, {
                            padding: {
                                x: 2,
                                bottom: 2
                            },
                            display: O.X.Flex,
                            flexWrap: O.Ba.NoWrap,
                            justifyContent: O.Xa.Between,
                            fullWidth: !0,
                            overflow: O.db.Hidden
                        }, c.createElement(O.Ya, {
                            flexGrow: 1,
                            ellipsis: !0
                        }, c.createElement(O.Qa, {
                            ellipsis: !0
                        }, c.createElement(O.Fb, {
                            display: O.X.Flex,
                            fontSize: O.Ca.Size5
                        }, c.createElement(O.Ya, {
                            ellipsis: !0
                        }, this.props.clip.title), c.createElement(O.Ya, {
                            flexShrink: 0
                        }, c.createElement(O.W, {
                            type: O.Wb.Span,
                            color: O.O.Alt2
                        }, " • ", Object(d.d)("{created, date, medium}", {
                            created: new Date(this.props.clip.createdAt)
                        }, "ClipsViewModalContent"))))), c.createElement(O.Qa, {
                            ellipsis: !0
                        }, c.createElement(O.Fb, {
                            color: O.O.Alt2
                        }, e, e && !!this.props.clip.curator && c.createElement("span", null, " • "), this.props.clip.curator && Object(d.d)("Clipped by {curator}", {
                            curator: c.createElement(O.U, {
                                to: "/" + this.props.clip.curator.login,
                                onClick: this.props.closeModal,
                                "data-a-target": "clip-modal-curator-link"
                            }, this.props.clip.curator.login)
                        }, "ClipsViewModalContent")))), c.createElement(O.Fb, {
                            display: O.X.Flex,
                            padding: {
                                bottom: 2,
                                left: 2
                            },
                            fontSize: O.Ca.Size5,
                            color: O.O.Alt2,
                            flexShrink: 0
                        }, c.createElement(O.Ya, {
                            margin: {
                                right: .5
                            },
                            alignItems: O.f.Center,
                            display: O.X.Flex
                        }, c.createElement(O.tb, {
                            asset: O.ub.GlyphViews
                        })), Object(d.d)("{viewCount, number} views", {
                            viewCount: this.props.clip.viewCount
                        }, "ClipsViewModalContent"))))
                    }, t = s.__decorate([Object(h.b)("ClipsViewModalContent")], t)
                }(c.Component),
                j = n("S1Za");
            var P = Object(a.connect)(null, function(e) {
                    return Object(r.bindActionCreators)({
                        reportPlayerInstanceStarted: j.b
                    }, e)
                })(F),
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
                        this.props.clipIndex > 0 && (e = c.createElement(O.Ya, {
                            position: O.kb.Absolute,
                            display: O.X.Flex,
                            alignItems: O.f.Stretch,
                            className: "clip-carousel-button clip-carousel-button--left"
                        }, c.createElement(O.A, {
                            ariaLabel: Object(d.d)("Previous clip", "ClipsViewModalNavigation"),
                            type: O.C.Primary,
                            icon: O.ub.AngleLeft,
                            onClick: this.updateClipBackward,
                            "data-test-selector": "clips-view-modal-navigation-back"
                        })));
                        var n = this.props.getClips();
                        return this.props.loadMoreClips && n.length - this.props.clipIndex < 4 && this.props.loadMoreClips(), this.props.clipIndex < n.length - 1 && (t = c.createElement(O.Ya, {
                            position: O.kb.Absolute,
                            display: O.X.Flex,
                            alignItems: O.f.Stretch,
                            className: "clip-carousel-button clip-carousel-button--right"
                        }, c.createElement(O.A, {
                            ariaLabel: Object(d.d)("Next clip", "ClipsViewModalNavigation"),
                            type: O.C.Primary,
                            icon: O.ub.AngleRight,
                            onClick: this.updateClipForward,
                            "data-test-selector": "clips-view-modal-navigation-forward"
                        }))), c.createElement(O.Ya, {
                            className: "clips-view-modal-navigation"
                        }, e, c.createElement(P, {
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
            var A = Object(a.connect)(null, function(e) {
                    return Object(r.bindActionCreators)({
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
                                        contentType: p.O.CLIP_REPORT,
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
                        return c.createElement(O.Ya, {
                            className: l(n)
                        }, t, c.createElement(u.a, {
                            closeOnBackdropClick: !0,
                            closeOnPageNavigation: !0
                        }))
                    }, t
                }(c.Component)),
                W = Object(h.b)("ClipsViewModal")(V);
            var B = Object(a.connect)(null, function(e) {
                return Object(r.bindActionCreators)({
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
            var a = {};

            function r(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !a[t] && (a[t] = !0, !0)
                })
            }
            i.definitions = i.definitions.concat(r(n("P8NS").definitions)), i.definitions = i.definitions.concat(r(n("kEr+").definitions)), e.exports = i
        },
        O3Y9: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            }), n.d(t, "b", function() {
                return o
            });
            var i, a = n("/7QA"),
                r = n("2xye");

            function o(e) {
                a.p.tracking.track(r.SpadeEventType.WhisperIgnoreUser, {
                    ui_context: e.context,
                    from_login: e.currentUserLogin,
                    ignored_login: e.targetUserLogin
                })
            }! function(e) {
                e.ViewerCard = "chat_card", e.ReportWizard = "report_wizard"
            }(i || (i = {}))
        },
        "OCR+": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return l
            });
            var i, a = n("/7QA"),
                r = n("D7An"),
                o = n("kRBY"),
                s = "gladiator_staff_alpha";

            function l() {
                var e = null;
                return function() {
                    if (null === e) {
                        var t = Object(o.e)(a.p.store.getState()),
                            n = t && t.roles && t.roles.isStaff;
                        e = !(!n || !a.b.get(s, !1)) || a.p.experiments.getAssignment(r.b.DiscoGladiator) === i.Variant1
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
                return r
            }), n.d(t, "d", function() {
                return o
            }), n.d(t, "e", function() {
                return s
            }), n.d(t, "c", function() {
                return i
            }), n.d(t, "b", function() {
                return a
            });
            var i, a, r = "carousel-player__main-description",
                o = "carousel-player-left-button",
                s = "carousel-player-right-button";
            ! function(e) {
                e[e.Horizontal = 1] = "Horizontal", e[e.Vertical = 2] = "Vertical"
            }(i || (i = {})),
            function(e) {
                e[e.Stream = 1] = "Stream", e[e.Vod = 2] = "Vod"
            }(a || (a = {}))
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
                return a
            });
            var i = n("HzXE");

            function a(e, t, n) {
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
                a = n("TSYQ"),
                r = n("q1tI"),
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
                        this.props.data.loading ? e = [r.createElement("option", {
                            key: "Loading"
                        }, Object(o.d)("Loading...", "ReportReasonsSelect"))] : e = (this.props.data.reportReasons || [{
                            id: "other",
                            text: Object(o.d)("Other Terms of Service Violation", "ReportUserModal")
                        }]).map(function(e) {
                            return r.createElement("option", {
                                key: e.id,
                                value: e.id
                            }, e.text)
                        });
                        return r.createElement(d.Ya, {
                            margin: {
                                bottom: 2
                            }
                        }, r.createElement(d.Ea, {
                            id: "reporting-modal__select",
                            label: Object(o.d)("Select Reason (required)", "ReportUserModal")
                        }, r.createElement(d.Ab, {
                            id: "reporting-modal__select",
                            "data-test-selector": "reporting-modal.select",
                            disabled: this.props.data.loading || !!this.props.data.error,
                            onChange: this.handleChange,
                            defaultValue: t
                        }, r.createElement("option", {
                            disabled: !0,
                            key: "default"
                        }, t), e)))
                    }, t
                }(r.Component),
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
                        br: r.createElement("br", null),
                        tosLink: r.createElement("a", {
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
                    return r.createElement(d.Ya, {
                        display: d.X.Flex,
                        flexDirection: d.Aa.Column,
                        alignItems: d.f.Center,
                        justifyContent: d.Xa.Center
                    }, this.renderStatusMessage(), this.renderBody())
                }, t.prototype.renderBody = function() {
                    return this.props.submitStatus === h.Success ? r.createElement("div", null, r.createElement(d.z, {
                        onClick: this.props.onClose
                    }, r.createElement(d.Ya, {
                        padding: {
                            x: 2
                        }
                    }, Object(o.d)("Close", "ReportUser")))) : r.createElement("div", null, r.createElement(d.Ya, {
                        "data-test-selector": "reporting.title",
                        margin: {
                            bottom: 1
                        },
                        "data-a-target": "reporting-channel-name"
                    }, r.createElement(d.W, {
                        type: d.Wb.H4
                    }, this.props.title), r.createElement(d.Fb, {
                        color: d.O.Alt2,
                        margin: {
                            top: 1
                        }
                    }, this.headerMessage)), r.createElement("form", null, r.createElement(d.Fb, {
                        borderTop: !0,
                        borderBottom: !0,
                        margin: {
                            y: 2
                        },
                        padding: {
                            y: 2
                        }
                    }, r.createElement(m, {
                        reportContentType: this.props.reportContentType,
                        onChange: this.handleReasonChange
                    }), r.createElement(d.Ea, {
                        id: "reporting__text-area",
                        label: Object(o.d)("Description (required)", "ReportUser")
                    }, r.createElement(d.Tb, {
                        defaultValue: this.props.defaultDescription,
                        onChange: this.handleTextAreaChange
                    }))), r.createElement(d.Fb, {
                        display: d.X.Flex,
                        justifyContent: d.Xa.Center
                    }, r.createElement(d.z, {
                        onClick: this.handleSubmit
                    }, r.createElement(d.Ya, {
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
                    var t = a({
                        "reporting__error-container": this.props.submitStatus !== h.Success,
                        "reporting__success-container": this.props.submitStatus === h.Success
                    });
                    return r.createElement(d.Fb, {
                        className: t,
                        fullWidth: this.props.submitStatus !== h.Success,
                        "data-test-selector": "reporting.error",
                        margin: {
                            bottom: 2
                        },
                        padding: 1
                    }, e)
                }, t
            }(r.Component)
        },
        RXle: function(e, t, n) {
            "use strict";
            var i = n("86FS");
            n.d(t, "VideoPreviewCard", function() {
                return i.a
            });
            n("0T/G");
            var a = n("0Rl0");
            n.d(t, "VideoPreviewCardPlaceholder", function() {
                return a.a
            })
        },
        ReKM: function(e, t, n) {},
        TDc0: function(e, t, n) {
            "use strict";
            var i;
            n.d(t, "a", function() {
                    return a
                }), n.d(t, "b", function() {
                    return r
                }),
                function(e) {
                    e.NoSkip = "no_skip"
                }(i || (i = {}));
            var a = function(e) {
                    return e === i.NoSkip
                },
                r = function(e) {
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
                a = n("mrSG"),
                r = n("q1tI"),
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
                            return a.__awaiter(n, void 0, void 0, function() {
                                var t;
                                return a.__generator(this, function(n) {
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
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        c.g.addListener(c.f, this.onSlotRenderEnd), this.shouldCreateSlot(this.props) ? (this.logger.debug("Consent ready. Tracking is set. Creating slot (componentDidMount)", this.props.slotID), this.createSlot(this.props)) : this.logger.debug("Consent not ready or Tracking is not set. Skipping slot creation (componentDidMount)", this.props.slotID)
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        this.state.slotCreated || (!this.shouldCreateSlot(e) || e.gdpr.status === this.props.gdpr.status && e.trackingSet === this.props.trackingSet ? this.logger.debug("Tracking is not set. Skipping slot creation (componentWillReceiveProps)", this.props.slotID) : (this.logger.debug("Tracking is set. Creating slot (componentWillReceiveProps)", this.props.slotID), this.createSlot(e)))
                    }, t.prototype.componentWillUnmount = function() {
                        this.logger.debug("Destroying Slot (componentWillUnmount)", this.props.slotID), c.g.removeListener(c.f, this.onSlotRenderEnd), this.state.slot && l.a.destroySlot(this.state.slot)
                    }, t.prototype.shouldComponentUpdate = function(e, t) {
                        return t.shouldDisplay !== this.state.shouldDisplay
                    }, t.prototype.render = function() {
                        var e = a.__assign({}, this.props.injectStyles);
                        return this.state.shouldDisplay || (e.display = "none"), r.createElement("div", a.__assign({
                            style: e,
                            id: this.props.slotID,
                            ref: this.setRef
                        }, Object(s.a)(this.props)))
                    }, t
                }(r.Component),
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
                a = n("kRBY"),
                r = n("mrSG"),
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
                    return r.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
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
                    isLoggedIn: Object(a.f)(e)
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
            var i, a, r, o, s = n("mrSG"),
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
                h = ((a = {})[u.a.Premiere] = p.ub.VideoPremiere, a[u.a.Rerun] = p.ub.VideoRerun, a[u.a.WatchParty] = p.ub.VideoRerun, a),
                g = ((r = {})[u.a.Premiere] = p.vb.Live, r[u.a.Rerun] = p.vb.Inherit, r[u.a.WatchParty] = p.vb.Inherit, r),
                f = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return s.__extends(t, e), t.prototype.render = function() {
                        return c.createElement(p.Fb, {
                            className: this.getClassNames(),
                            color: p.O.Overlay,
                            background: p.r.Overlay,
                            padding: {
                                x: .5
                            },
                            borderRadius: p.x.Small,
                            display: p.X.Flex
                        }, c.createElement(p.Ya, {
                            display: p.X.Flex,
                            alignItems: p.f.Center,
                            margin: {
                                right: .5
                            }
                        }, this.getIcon()), c.createElement(p.W, {
                            type: p.Wb.Span
                        }, this.getLabel()))
                    }, t.prototype.getClassNames = function() {
                        var e = {
                            "stream-type-indicator": !0
                        };
                        return e[m[this.props.type]] = !0, l(e)
                    }, t.prototype.getIcon = function() {
                        return this.props.hosting ? c.createElement(p.Fb, {
                            borderRadius: p.x.Rounded,
                            className: "stream-type-indicator__hosting-dot",
                            "data-test-selector": o.HostingDot
                        }) : this.props.type === u.a.Live ? c.createElement(p.Ya, {
                            className: "stream-type-indicator__live-wrapper",
                            display: p.X.Flex,
                            alignItems: p.f.Center
                        }, c.createElement(p.K, {
                            status: p.M.Live,
                            size: p.L.Small
                        })) : c.createElement(p.tb, {
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
                return a
            });
            var i = n("o4DC");

            function a(e) {
                return e && Object(i.c)(e) || ""
            }
        },
        cRsL: function(e, t, n) {},
        dAHa: function(e, t, n) {
            "use strict";
            var i, a, r = n("mrSG"),
                o = n("q1tI"),
                s = n("/MKj"),
                l = n("fvjX"),
                c = n("/7QA"),
                d = n("yR8l"),
                u = n("BhFH"),
                p = n("iS14"),
                m = n("geRD"),
                h = n("O3Y9"),
                g = n("f00E"),
                f = n("D7An"),
                v = n("DMoW"),
                k = n("2xye"),
                b = n("GnwI"),
                y = n("QVaV"),
                C = n("Ue10"),
                S = (n("MPK0"), "report-wizard-block"),
                w = "report-wizard-unblock",
                T = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            userBlocked: t.props.userBlocked || !1
                        }, t.renderBlock = function() {
                            return o.createElement(C.U, {
                                hoverUnderlineNone: !0,
                                onClick: t.handleBlock,
                                "data-test-selector": S
                            }, o.createElement(C.Ya, {
                                display: C.X.Flex,
                                alignItems: C.f.Center
                            }, o.createElement(C.tb, {
                                type: C.vb.Brand,
                                asset: C.ub.Ban
                            }), o.createElement(C.Ya, {
                                margin: {
                                    left: .5
                                }
                            }, Object(c.d)("Block {user}", {
                                user: t.displayName()
                            }, "ReportWizardBlockActions"))))
                        }, t.renderUnblock = function() {
                            return o.createElement(C.Ya, {
                                className: "reporting-wizard__block-actions",
                                display: C.X.Flex,
                                alignItems: C.f.Center
                            }, o.createElement(C.tb, {
                                type: C.vb.Success,
                                asset: C.ub.FollowCheck
                            }), o.createElement(C.Ya, {
                                margin: {
                                    right: 1
                                }
                            }, o.createElement(C.W, {
                                className: "block-user__success",
                                type: C.Wb.Span
                            }, Object(c.d)("{user} blocked", {
                                user: t.displayName()
                            }, "ReportWizardBlockActions"))), o.createElement(C.U, {
                                hoverUnderlineNone: !0,
                                onClick: t.handleUnblock,
                                "data-test-selector": w
                            }, o.createElement(C.Ya, {
                                margin: {
                                    left: .5
                                }
                            }, Object(c.d)("Unblock", "ReportWizardBlockActions"))))
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
                        }, t.displayName = function() {
                            var e = t.props.targetUser.displayName,
                                n = t.props.targetUser.login;
                            return e || (n || "")
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this.state.userBlocked ? this.renderUnblock() : this.renderBlock(),
                            t = Object(y.a)(this.props.targetUser.login, this.props.targetUser.displayName, !0);
                        return o.createElement(C.Fb, {
                            borderTop: !0,
                            padding: {
                                y: 1
                            },
                            margin: {
                                top: 1
                            }
                        }, o.createElement(C.Ya, null, Object(c.d)("Would you like to block {user}?", {
                            user: t
                        }, "ReportWizardBlockActions")), o.createElement(C.Fb, {
                            color: C.O.Alt2,
                            margin: {
                                y: 1
                            }
                        }, o.createElement(C.fc, {
                            baseFontSize: C.Ca.Size6
                        }, o.createElement("p", null, Object(c.d)("Blocking {user} will:", {
                            user: t
                        }, "ReportWizardBlockActions")), o.createElement("ul", null, o.createElement("li", null, Object(c.d)("Prevent them from sending you whispers", "ReportWizardBlockActions")), o.createElement("li", null, Object(c.d)("Prevent them from hosting you", "ReportWizardBlockActions")), o.createElement("li", null, Object(c.d)("Prevent them from adding you as a friend", "ReportWizardBlockActions")), o.createElement("li", null, Object(c.d)("Filter their messages out of chats you don’t moderate", "ReportWizardBlockActions"))))), o.createElement(C.Ya, {
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
            }(a || (a = {}));
            var _, N = {
                    generalFilter: function() {
                        return Object(c.d)("I don't think their content or behavior is allowed on Twitch", "ReportModalWizard")
                    },
                    me: function() {
                        return Object(c.d)("Me", "ReportModalWizard")
                    },
                    someoneElse: function() {
                        return Object(c.d)("Someone else", "ReportModalWizard")
                    },
                    abusiveViolence: function() {
                        return Object(c.d)("Threatening violence or physical harm", "ReportModalWizard")
                    },
                    commitingViolence: function() {
                        return Object(c.d)("Committing acts of violence or physical harm", "ReportModalWizard")
                    },
                    threatening: function() {
                        return Object(c.d)("Threatening, harming, or endangering someone", "ReportModalWizard")
                    },
                    abusive: function() {
                        return Object(c.d)("Being hateful, harassing, or abusive", "ReportModalWizard")
                    },
                    harassment: function() {
                        return Object(c.d)("Hate speech, harassment, or abuse", "ReportModalWizard")
                    },
                    moreOptions: function() {
                        return Object(c.d)("Give me more options...", "ReportModalWizard")
                    },
                    scam: function() {
                        return Object(c.d)("Attempts to scam other community members", "ReportModalWizard")
                    }
                },
                E = {
                    input_description: {
                        getTitle: function() {
                            return Object(c.d)("Could you provide more detail about this issue? You may include links to videos, clips, and content outside Twitch.", "ReportModalWizard")
                        },
                        value: "description",
                        type: a.Textarea,
                        required: !0
                    },
                    input_link: {
                        getTitle: function() {
                            return Object(c.d)("If possible, please provide a link to show us where the issue occurred. Links that do not lead to the original source of the content may not be usable as evidence.", "ReportModalWizard")
                        },
                        rows: 2,
                        value: "external links",
                        type: a.Textarea
                    },
                    input_usernames: {
                        getTitle: function() {
                            return Object(c.d)("If you know the usernames of any other Twitch accounts that may be owned by this person, please list them in this space.", "ReportModalWizard")
                        },
                        value: "other usernames",
                        rows: 2,
                        type: a.Textarea
                    },
                    input_connection: {
                        getTitle: function() {
                            return Object(c.d)("Please describe how you connected the offsite content to this Twitch account.", "ReportModalWizard")
                        },
                        value: "offsite content connection",
                        type: a.Textarea
                    },
                    input_comments: {
                        getTitle: function() {
                            return Object(c.d)("If you have any other comments you would like to add, please do so here.", "ReportModalWizard")
                        },
                        value: "comments",
                        type: a.Textarea
                    },
                    input_identifyOwner: {
                        getTitle: function() {
                            return Object(c.d)("Please describe how you identified this person as the owner of this Twitch account.", "ReportModalWizard")
                        },
                        rows: 2,
                        value: "connect account owner",
                        type: a.Textarea
                    },
                    endBlurb_socialmedia: {
                        getTitle: function() {
                            return Object(c.d)("Please submit a report on the site or service where the incident occurred as well if you have not already done so.", "ReportModalWizard")
                        },
                        type: a.Text
                    },
                    endBlurb_threat: {
                        getTitle: function() {
                            return Object(c.d)("If you feel you are in immediate danger, please contact your local law enforcement. To protect yourself on Twitch, you may also block the user.", "ReportModalWizard")
                        },
                        type: a.Text
                    },
                    endLink_selfharm: {
                        getTitle: function() {
                            return Object(c.d)("Learn more about mental health support", "ReportModalWizard")
                        },
                        value: "https://help.twitch.tv/customer/en/portal/articles/2904486-twitch-cares-mental-health-support-information",
                        type: a.Link
                    },
                    endLink_DMCA: {
                        getTitle: function() {
                            return Object(c.d)("View our DMCA Notification Guidelines", "ReportModalWizard")
                        },
                        value: "https://www.twitch.tv/p/legal/dmca-guidelines/",
                        type: a.Link
                    },
                    endLink_trademark: {
                        getTitle: function() {
                            return Object(c.d)("View our Trademark Policy", "ReportModalWizard")
                        },
                        value: "https://www.twitch.tv/p/legal/trademark-policy/",
                        type: a.Link
                    },
                    endLink_devAgreement: {
                        getTitle: function() {
                            return Object(c.d)("View our Developer Agreement", "ReportModalWizard")
                        },
                        value: "https://www.twitch.tv/p/legal/developer-agreement/",
                        type: a.Link
                    },
                    endLink_eventCoC: {
                        getTitle: function() {
                            return Object(c.d)("View our Events Code of Conduct", "ReportModalWizard")
                        },
                        value: "https://www.twitch.tv/p/legal/events-code-of-conduct",
                        type: a.Link
                    },
                    messaging_general: {
                        getTitle: N.generalFilter,
                        value: "general_messaging",
                        omitFromDescription: !0
                    },
                    profile_general: {
                        getTitle: N.generalFilter,
                        value: "general_profile",
                        omitFromDescription: !0
                    },
                    maliciousRaid: {
                        getTitle: function() {
                            return Object(c.d)("Participating in a malicious raid", "ReportModalWizard")
                        },
                        value: "malicious raid",
                        reportReason: i.Harassment
                    },
                    automod: {
                        getTitle: function() {
                            return Object(c.d)("It's being used to bypass AutoMod", "ReportModalWizard")
                        },
                        value: "bypass automod",
                        reportReason: i.Other
                    },
                    violence: {
                        getTitle: function() {
                            return Object(c.d)("Threats, harm, or endangerment of someone", "ReportModalWizard")
                        },
                        value: "violence/threats",
                        reportReason: i.Harm
                    },
                    report_username: {
                        getTitle: function() {
                            return Object(c.d)("The username is inappropriate", "ReportModalWizard")
                        },
                        value: "inappropriate username",
                        reportReason: i.OffensiveUsername
                    },
                    report_emotes: {
                        getTitle: function() {
                            return Object(c.d)("The emotes or badges", "ReportModalWizard")
                        },
                        value: "inappropriate emotes",
                        reportReason: i.Other
                    },
                    emotes_break_guidelines: {
                        getTitle: function() {
                            return Object(c.d)("The emotes break Twitch's guidelines", "ReportModalWizard")
                        },
                        value: "emotes break guidelines",
                        reportReason: i.Other
                    },
                    abusive: {
                        getTitle: N.harassment,
                        value: "abusive"
                    },
                    scam: {
                        getTitle: N.scam,
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
                    impersonating: {
                        getTitle: function() {
                            return Object(c.d)("Impersonating someone", "ReportModalWizard")
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
                    itsInappropriateContent: {
                        getTitle: function() {
                            return Object(c.d)("It's inappropriate or obscene", "ReportModalWizard")
                        },
                        value: "inappropriate content"
                    },
                    inappropriateContent: {
                        getTitle: function() {
                            return Object(c.d)("Inappropriate or obscene content", "ReportModalWizard")
                        },
                        value: "inappropriate content"
                    },
                    violateDevAgreement: {
                        getTitle: function() {
                            return Object(c.d)("They're breaking Twitch's Developer Agreement", "ReportModalWizard")
                        },
                        value: "violating developer agreement"
                    },
                    revealPersonalInfo: {
                        getTitle: function() {
                            return Object(c.d)("Revealing someone's personal information", "ReportModalWizard")
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
                            return Object(c.d)("The extensions are inappropriate or malicious", "ReportModalWizard")
                        },
                        value: "inappropriate extension",
                        reportReason: i.Other
                    },
                    cheating: {
                        getTitle: function() {
                            return Object(c.d)("Cheating in an online game", "ReportModalWizard")
                        },
                        value: "cheating",
                        reportReason: i.Cheating
                    },
                    bitsViolation: {
                        getTitle: function() {
                            return Object(c.d)("They're breaking Twitch's Bits Policy", "ReportModalWizard")
                        },
                        value: "bits violation",
                        reportReason: i.BitsViolation
                    },
                    compromisedAccount: {
                        getTitle: function() {
                            return Object(c.d)("The account is stolen or compromised", "ReportModalWizard")
                        },
                        value: "account compromised",
                        reportReason: i.Other
                    },
                    video_labeling: {
                        getTitle: function() {
                            return Object(c.d)("Their content is misclassified (wrong category or tags)", "ReportModalWizard")
                        },
                        value: "incorrect label",
                        reportReason: i.Miscategorized
                    },
                    video_inactive: {
                        getTitle: function() {
                            return Object(c.d)("There's no streamer, or the streamer is inactive", "ReportModalWizard")
                        },
                        value: "inactive stream",
                        reportReason: i.Miscategorized
                    },
                    video_general: {
                        getTitle: N.generalFilter,
                        value: "general_video",
                        omitFromDescription: !0
                    },
                    hateSpeechSymbols: {
                        getTitle: function() {
                            return Object(c.d)("It contains hate speech or hate symbols", "ReportModalWizard")
                        },
                        value: "hate speech symbols",
                        reportReason: i.HatefulConduct
                    },
                    hateSpeech: {
                        getTitle: function() {
                            return Object(c.d)("Hate speech, hateful symbols, or other hateful conduct", "ReportModalWizard")
                        },
                        value: "hate speech",
                        reportReason: i.HatefulConduct
                    },
                    harassing: {
                        getTitle: function() {
                            return Object(c.d)("It's harassing or bullying someone", "ReportModalWizard")
                        },
                        value: "harassment",
                        reportReason: i.Harassment
                    },
                    harassment: {
                        getTitle: function() {
                            return Object(c.d)("Harassing or bullying someone", "ReportModalWizard")
                        },
                        value: "harassment",
                        reportReason: i.Harassment
                    },
                    abusiveViolence: {
                        getTitle: N.abusiveViolence,
                        value: "threatening violence",
                        reportReason: i.Harm
                    },
                    commitingViolence: {
                        getTitle: N.commitingViolence,
                        value: "committing violence",
                        reportReason: i.Harm
                    },
                    swatting: {
                        getTitle: function() {
                            return Object(c.d)("Involvement in swatting or DDOS attacks", "ReportModalWizard")
                        },
                        value: "swatting/ddosing",
                        reportReason: i.Harassment
                    },
                    personalInfo: {
                        getTitle: function() {
                            return Object(c.d)("Doxxing (purposely revealing personal information)", "ReportModalWizard")
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
                    sexuallyViolentChildAnimal: {
                        getTitle: function() {
                            return Object(c.d)("Sexual conduct involving violence, children, or animals", "ReportModalWizard")
                        },
                        value: "sexual conduct: violent, child, or animal",
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
                            return Object(c.d)("Evading a block, ban, or suspension", "ReportModalWizard")
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
                        getTitle: N.me,
                        value: "impersonating me",
                        reportReason: i.Impersonation
                    },
                    impersonation_brand: {
                        getTitle: function() {
                            return Object(c.d)("Someone I represent, or a company I work for", "ReportModalWizard")
                        },
                        value: "impersonating brand",
                        reportReason: i.Impersonation
                    },
                    impersonation_other: {
                        getTitle: N.someoneElse,
                        value: "Impersonating someone else",
                        reportReason: i.Impersonation
                    },
                    selfharm: {
                        getTitle: function() {
                            return Object(c.d)("I'm concerned for their wellbeing", "ReportModalWizard")
                        },
                        value: "selfharm",
                        reportReason: i.SelfHarm
                    },
                    video: {
                        getTitle: function() {
                            return Object(c.d)("In a live stream, video, or clip", "ReportModalWizard")
                        },
                        value: "video"
                    },
                    video_more_options: {
                        getTitle: N.moreOptions,
                        value: "video more options"
                    },
                    whisper: {
                        getTitle: function() {
                            return Object(c.d)("In a whisper (private message)", "ReportModalWizard")
                        },
                        value: "whisper",
                        reportContext: v.O.WHISPER_REPORT
                    },
                    whisper_more_options: {
                        getTitle: N.moreOptions,
                        value: "whisper more options"
                    },
                    chat: {
                        getTitle: function() {
                            return Object(c.d)("In a chat message or room", "ReportModalWizard")
                        },
                        value: "chat"
                    },
                    chat_more_options: {
                        getTitle: N.moreOptions,
                        value: "chat more options"
                    },
                    moderating: {
                        getTitle: function(e) {
                            return Object(c.d)("{username} isn't moderating their chat", {
                                username: e
                            }, "ReportModalWizard")
                        },
                        value: "moderating",
                        reportReason: i.Other
                    },
                    otherContent: {
                        getTitle: function(e) {
                            return Object(c.d)("In {username}'s other content (profile, emotes, etc.)", {
                                username: e
                            }, "ReportModalWizard")
                        },
                        value: "other content"
                    },
                    profile: {
                        getTitle: function() {
                            return Object(c.d)("The profile content (avatar, panels, etc.)", "ReportModalWizard")
                        },
                        value: "profile"
                    },
                    profile_more_options: {
                        getTitle: N.moreOptions,
                        value: "profile more options"
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
                            return Object(c.d)("Inciting brigading or malicious raids", "ReportModalWizard")
                        },
                        reportReason: i.Harassment,
                        value: "brigading/raids"
                    },
                    external_threatening: {
                        getTitle: N.threatening,
                        value: "threatening"
                    },
                    external_harassment: {
                        getTitle: N.harassment,
                        value: "hateful/harassing"
                    },
                    external_abusiveViolence: {
                        getTitle: N.abusiveViolence,
                        value: "external site; threatening violence",
                        reportReason: i.Harm
                    },
                    external_commitingViolence: {
                        getTitle: N.commitingViolence,
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
                            return Object(c.d)("Spam, malicious links, or bot accounts", "ReportModalWizard")
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
                    spam_links: {
                        getTitle: function() {
                            return Object(c.d)("Sending malicious links", "ReportModalWizard")
                        },
                        value: "malicious links"
                    },
                    spam_scam: {
                        getTitle: N.scam,
                        value: "scam"
                    },
                    spam_repeated: {
                        getTitle: function() {
                            return Object(c.d)("Sending repeated messages (spam)", "ReportModalWizard")
                        },
                        value: "repeat messages"
                    }
                },
                O = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onChange = function(e) {
                            var n = e.target,
                                i = n.name,
                                a = n.value;
                            t.props.onChangeText(i, a)
                        }, t.onSelect = function(e) {
                            if (t.props.currentCard.items && e.currentTarget.parentElement) {
                                var n = Number(e.currentTarget.parentElement.getAttribute("data-a-index")),
                                    i = t.props.currentCard.items[n];
                                t.props.onChangeRadio(i)
                            }
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.currentCard.getDescription ? o.createElement(C.Ya, {
                            padding: {
                                bottom: 1
                            }
                        }, this.props.currentCard.getDescription()) : null;
                        return o.createElement(C.Ya, {
                            className: "reporting-wizard-card"
                        }, e, o.createElement(C.Ea, {
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
                                case a.Text:
                                    return o.createElement(C.Ya, {
                                        key: n,
                                        padding: {
                                            bottom: 1
                                        }
                                    }, t.getTitle());
                                case a.Link:
                                    return o.createElement(C.Ya, {
                                        key: n,
                                        padding: {
                                            bottom: 1
                                        }
                                    }, o.createElement(C.U, {
                                        to: t.value,
                                        targetBlank: !0
                                    }, o.createElement(C.Ya, {
                                        display: C.X.Flex
                                    }, o.createElement(C.Ya, {
                                        display: C.X.Inline,
                                        padding: {
                                            right: .5
                                        }
                                    }, o.createElement(C.tb, {
                                        asset: C.ub.Document
                                    })), t.getTitle())));
                                case a.Textarea:
                                    var i = t.value ? e.props.userTextInputs[t.value] : void 0,
                                        r = t.required && (!i || !!i && 0 === i.trim().length);
                                    return o.createElement(C.Ya, {
                                        key: n,
                                        padding: {
                                            bottom: 1
                                        }
                                    }, o.createElement(C.Ea, {
                                        label: t.getTitle(),
                                        labelOptional: t.required ? "" : Object(c.d)("Optional", "ReportModalWizardCard")
                                    }, o.createElement(C.Tb, {
                                        onChange: e.onChange,
                                        rows: t.rows || 3,
                                        name: t.value,
                                        error: e.props.error && r,
                                        value: i,
                                        "data-test-selector": "report-wizard-textarea"
                                    })));
                                case a.MultipleChoice:
                                default:
                                    return o.createElement(C.Ya, {
                                        key: n,
                                        padding: {
                                            y: .5
                                        }
                                    }, o.createElement(C.qb, {
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
            }(_ || (_ = {}));
            var I, D, x, M = {
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
                F = {
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
                    reportWhisper: function(e) {
                        return Object(c.d)("Report {username}'s Whisper", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    reportProfileOrOtherContent: function(e) {
                        return Object(c.d)("Report {username}'s Profile Or Other Content", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    reportProfile: function(e) {
                        return Object(c.d)("Report {username}'s Profile Content", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    reportEmotesBadges: function(e) {
                        return Object(c.d)("Report {username}'s Emotes or Badges", {
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
                j = {
                    getDescription: function() {
                        return Object(c.d)("Reports are reviewed by Twitch Staff 24 hours a day. We will issue penalties, such as account suspension and/or content removal, once we verify that a violation of our policies has occurred.", "ReportModalWizard")
                    },
                    blockPrompt: !0,
                    getTitle: F.thanks,
                    type: _.Info,
                    value: "end card"
                },
                P = {
                    socialMedia: r.__assign({}, j, {
                        items: [E.endBlurb_socialmedia]
                    }),
                    violence: r.__assign({}, j, {
                        items: [E.endBlurb_threat]
                    }),
                    legal: {
                        getTitle: F.thanksConcern,
                        getDescription: function() {
                            return Object(c.d)("To submit a claim or report a violation of this type, you will need to follow the steps listed on the relevant page below.", "ReportModalWizard")
                        },
                        items: [E.endLink_DMCA, E.endLink_trademark, E.endLink_devAgreement],
                        type: _.Info,
                        value: "ip end"
                    },
                    selfharm: {
                        getTitle: F.thanksConcern,
                        getDescription: function() {
                            return Object(c.d)("If you know the user personally, and you believe them to be in danger, please contact their local authorities immediately. The link below contains some general information that may be of use.", "ReportModalWizard")
                        },
                        items: [E.endLink_selfharm],
                        type: _.Info,
                        value: "selfharm end"
                    },
                    twitchEvent: {
                        getTitle: F.thanksConcern,
                        getDescription: function() {
                            return Object(c.d)("Please bring this concern to the attention of staff or security at the event if you have not already done so. More information is available at the link below.", "ReportModalWizard")
                        },
                        items: [E.endLink_eventCoC],
                        value: "twitch event end",
                        type: _.Info
                    }
                },
                L = {
                    getTitle: F.report,
                    getLabel: function() {
                        return Object(c.d)("Where is the problem?", "ReportModalWizard")
                    },
                    items: [E.video, E.whisper, E.chat, E.moderating, E.otherContent, E.report_username, E.report_other],
                    type: _.MultipleChoice,
                    value: "content type"
                },
                U = {
                    identifyUser: {
                        getTitle: F.reportVideo,
                        getLabel: M.identifyUser,
                        items: [E.video_streamer, E.video_someoneElse, E.video_chatSomeone],
                        type: _.MultipleChoice,
                        value: "video identify user"
                    },
                    content: {
                        getTitle: F.reportVideo,
                        getLabel: M.contentGeneral,
                        items: [E.violence, E.abusive, E.video_inactive, E.video_labeling, E.inappropriateContent, E.selfharm, E.video_more_options],
                        type: _.MultipleChoice,
                        value: "video report reason"
                    },
                    moreOptions: {
                        getTitle: F.reportVideo,
                        getLabel: M.contentGeneral,
                        items: [E.revealPersonalInfo, E.cheating, E.impersonating, E.underage, E.bitsViolation, E.report_ip, E.other],
                        type: _.MultipleChoice,
                        value: "video general report reason"
                    }
                },
                A = {
                    content: {
                        getTitle: F.reportMessage,
                        getLabel: M.contentGeneral,
                        items: [E.report_username, E.violence, E.abusive, E.evasion, E.spam, E.selfharm, E.chat_more_options],
                        type: _.MultipleChoice,
                        value: "message report reason"
                    },
                    moreOptions: {
                        getTitle: F.reportMessage,
                        getLabel: M.contentGeneral,
                        items: [E.emotes_break_guidelines, E.inappropriateContent, E.revealPersonalInfo, E.maliciousRaid, E.underage, E.bitsViolation, E.other],
                        type: _.MultipleChoice,
                        value: "message general report reason"
                    }
                },
                V = {
                    general: {
                        getTitle: F.reportWhisper,
                        getLabel: M.contentGeneral,
                        items: [E.report_username, E.violence, E.abusive, E.spam, E.selfharm, E.whisper_more_options],
                        type: _.MultipleChoice,
                        value: "whisper report reason",
                        getDescription: function() {
                            return Object(c.d)("Please note that we may review additional messages in this conversation to determine the context of your report.", "ReportModalWizard")
                        }
                    },
                    moreOptions: {
                        getTitle: F.reportWhisper,
                        getLabel: M.contentGeneral,
                        items: [E.emotes_break_guidelines, E.evasion, E.inappropriateContent, E.revealPersonalInfo, E.underage, E.other],
                        type: _.MultipleChoice,
                        value: "whisper general report reason"
                    }
                },
                W = {
                    profile: {
                        getTitle: F.reportProfile,
                        getLabel: M.contentGeneral,
                        items: [E.revealPersonalInfo, E.violence, E.abusive, E.inappropriateContent, E.selfharm, E.profile_more_options],
                        type: _.MultipleChoice,
                        value: "profile report reason"
                    },
                    profileMoreOptions: {
                        getTitle: F.reportProfile,
                        getLabel: M.contentGeneral,
                        items: [E.scam, E.evasion, E.impersonation, E.underage, E.report_ip, E.other],
                        type: _.MultipleChoice,
                        value: "profile general report reason"
                    },
                    emotes: {
                        getTitle: F.reportEmotesBadges,
                        getLabel: M.content,
                        items: [E.hateSpeechSymbols, E.harassing, E.itsInappropriateContent, E.automod, E.report_ip, E.other],
                        type: _.MultipleChoice,
                        value: "emote report reason"
                    },
                    general: {
                        getTitle: F.reportProfileOrOtherContent,
                        getLabel: M.content,
                        items: [E.report_username, E.profile, E.report_emotes, E.inappropriateExtension, E.compromisedAccount, E.violateDevAgreement],
                        type: _.MultipleChoice,
                        value: "profile content location"
                    }
                },
                B = {
                    getTitle: function(e) {
                        return Object(c.d)("Report {username}'s Room", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: M.identifyUser,
                    items: [E.report_channelOwner, E.report_member],
                    value: "room report user",
                    type: _.MultipleChoice
                },
                z = {
                    getTitle: F.tellUsMore,
                    items: [E.input_description],
                    type: _.Confirm,
                    value: "tell us more"
                },
                G = {
                    banEvasion: r.__assign({}, z, {
                        items: [E.input_usernames, E.input_description],
                        value: "ban evasion tell us more"
                    }),
                    socialMedia: r.__assign({}, z, {
                        items: [E.input_link, E.input_connection, E.input_description],
                        nextCard: P.socialMedia,
                        value: "social media tell us more"
                    })
                },
                H = {
                    content: {
                        getTitle: F.reportAbusive,
                        getLabel: M.relevantStatements,
                        items: [E.hateSpeech, E.harassment, E.abusiveViolence, E.commitingViolence, E.swatting, E.personalInfo],
                        type: _.MultipleChoice,
                        value: "abuse type"
                    }
                },
                q = {
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
                        type: _.MultipleChoice,
                        value: "off-site conduct location"
                    },
                    externalSite: {
                        getTitle: function(e) {
                            return Object(c.d)("Report {username}'s Conduct on Another Site or Service", {
                                username: e
                            }, "ReportModalWizard")
                        },
                        getLabel: M.contentGeneral,
                        getDescription: function() {
                            return Object(c.d)("Please note that incidents reported through this form must involve Twitch community members. If possible, please submit a report to the site or service where the incident occurred as well.", "ReportModalWizard")
                        },
                        items: [E.external_incitingRaids, E.external_threatening, E.external_harassment],
                        type: _.MultipleChoice,
                        nextCard: G.socialMedia,
                        value: "external site conduct"
                    },
                    external_abusive: r.__assign({}, H.content, {
                        items: [E.hateSpeech, E.harassment, E.external_abusiveViolence, E.external_commitingViolence, E.swatting, E.personalInfo],
                        nextCard: G.socialMedia
                    })
                },
                Y = {
                    getTitle: function(e) {
                        return Object(c.d)("Report {username}'s Spam or Malicious Links", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: M.contentGeneral,
                    items: [E.spam_bot, E.spam_scam, E.spam_links, E.spam_repeated],
                    type: _.MultipleChoice,
                    value: "spam type"
                },
                X = {
                    getTitle: function(e) {
                        return Object(c.d)("Report {username} for Inappropriate Content", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: M.relevantStatements,
                    items: [E.inappropriate_game, E.gory, E.sexuallyViolentChildAnimal, E.pornographic, E.suggestive, E.nudity, E.other],
                    type: _.MultipleChoice,
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
                    type: _.MultipleChoice,
                    nextCard: G.banEvasion
                },
                $ = {
                    getTitle: function(e) {
                        return Object(c.d)("Report {username} for Impersonation", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: function() {
                        return Object(c.d)("Who is being impersonated?", "ReportModalWizard")
                    },
                    getDescription: function() {
                        return Object(c.d)("Please note that parody, cosplay, and other portrayals without the intent to deceive or defraud are allowed under Twitch's Community Guidelines. If you would still like to submit a report, please continue.", "ReportModalWizard")
                    },
                    items: [E.impersonation_me, E.impersonation_brand, E.impersonation_other],
                    type: _.MultipleChoice,
                    value: "impersonation type"
                },
                K = L,
                J = z,
                Z = j,
                ee = {
                    video: U.content,
                    "video more options": U.moreOptions,
                    whisper: V.general,
                    "whisper more options": V.moreOptions,
                    chat: A.content,
                    "chat more options": A.moreOptions,
                    "other content": W.general,
                    profile: W.profile,
                    "profile more options": W.profileMoreOptions,
                    room: B,
                    "somewhere else": q.identifyLocation,
                    streamer: U.content,
                    "someone else in video": U.content,
                    "someone in chat": A.content,
                    general_video: U.moreOptions,
                    general_messaging: A.content,
                    general_profile: W.profile,
                    "channel owner": W.general,
                    "community member": A.content,
                    "on twitch": W.general,
                    "another site": q.externalSite,
                    "twitch event": P.twitchEvent,
                    "brigading/raids": G.socialMedia,
                    "hateful/harassing": q.external_abusive,
                    "external site; scam": G.socialMedia,
                    "ban evasion": Q,
                    spam: Y,
                    hateful: H.content,
                    impersonation: $,
                    abusive: H.content,
                    "inappropriate content": X,
                    "inappropriate emotes": W.emotes,
                    "intellectual property": P.legal,
                    "violating developer agreement": P.legal
                },
                te = {
                    selfharm: P.selfharm,
                    harm: P.violence,
                    other: Z
                },
                ne = {
                    CHANNEL_FEED_POST_REPORT: W.general,
                    COMMUNITY_REPORT: W.general,
                    CHAT_REPORT: A.content,
                    CLIP_REPORT: U.content,
                    EVENT_REPORT: W.general,
                    EXTENSION_REPORT: W.general,
                    LIVE_UP_REPORT: W.general,
                    ROOM_REPORT: B,
                    WHISPER_REPORT: V.general,
                    VOD_COMMENT_REPORT: A.content
                },
                ie = "report-wizard-back",
                ae = "report-wizard-close",
                re = "report-wizard-next",
                oe = "report-wizard-submit",
                se = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            currentCard: t.props.currentCard || ne[t.props.reportContentType] || K,
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
                            return o.createElement(C.Ya, {
                                margin: {
                                    top: 1
                                }
                            }, o.createElement(C.W, null, Object(c.d)("We are going to ask you a few questions to help us investigate your report quickly and accurately.", "ReportModalWizard")))
                        }, t.renderButtons = function() {
                            var e = Object(c.d)("Close", "ReportModalWizard"),
                                n = t.handleClose,
                                i = ae,
                                a = !1,
                                r = t.state.prevCards.length ? t.renderBack() : null;
                            switch (t.state.currentCard.type) {
                                case _.MultipleChoice:
                                    e = Object(c.d)("Next", "ReportModalWizard"), n = t.handleNext, i = re, a = !t.state.currentSelection;
                                    break;
                                case _.Confirm:
                                    e = Object(c.d)("Submit Report", "ReportModalWizard"), n = t.handleSubmit, a = !t.state.userTextInput, i = oe
                            }
                            return o.createElement(C.Ya, null, r, o.createElement(C.z, {
                                onClick: n,
                                disabled: a,
                                "data-test-selector": i
                            }, o.createElement(C.Ya, {
                                padding: {
                                    x: 1
                                }
                            }, e)))
                        }, t.renderBack = function() {
                            return o.createElement(C.Ya, {
                                margin: {
                                    right: 1
                                },
                                display: C.X.InlineBlock
                            }, o.createElement(C.z, {
                                type: C.F.Hollow,
                                onClick: t.handleBack,
                                "data-test-selector": ie
                            }, o.createElement(C.Ya, {
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
                                return t.props.trackClose(x.Finish, t.state.currentCard.value, t.getChoiceIndex())
                            }), t.props.onClose()
                        }, t.getChoiceIndex = function() {
                            var e = 0;
                            return t.state.currentCard && t.state.currentCard.items && (e = t.state.currentCard.items.findIndex(function(e) {
                                return t.state.currentSelection === e
                            }) + 1), e >= 1 ? e : void 0
                        }, t.handleNext = function() {
                            if (t.state.currentSelection && t.state.currentSelection.value) {
                                var e = t.state.currentCard,
                                    n = t.state.prevCards.concat(e),
                                    i = t.state.prevSelections.concat(t.state.currentSelection),
                                    a = t.state.displacedSelections[t.state.displacedSelections.length - 1],
                                    r = t.state.currentSelection.differentTarget || t.state.targetUnknown,
                                    o = t.state.currentSelection.reportContext || t.state.reportContext,
                                    s = t.getChoiceIndex(),
                                    l = e.nextCard || J;
                                ee[t.state.currentSelection.value] && (l = ee[t.state.currentSelection.value]);
                                var c = t.state.currentSelection.reportReason || t.state.reportReason,
                                    d = l.type === _.Info;
                                t.setState({
                                    currentCard: l,
                                    reportReason: c,
                                    prevCards: d ? [] : n,
                                    prevSelections: i,
                                    targetUnknown: r,
                                    currentSelection: a || null,
                                    displacedSelections: t.state.displacedSelections.slice(0, -1),
                                    reportContext: o
                                }, function() {
                                    return t.trackNavigation(D.Next, e.value, s)
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
                                if (e.type !== a.Textarea || !e.required) return !1;
                                var n = t.state.userTextInput[e.value],
                                    i = n && 0 === n.trim().length;
                                return !n || i
                            }).length
                        }, t.handleSubmit = function() {
                            return r.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, i, a, o = this;
                                return r.__generator(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            return e = Object(c.d)("Additional information is required.", "ReportModalWizard"), this.requiredInputsNonEmpty() ? (t = this.state.reportReason || "other", n = this.createReportDescription(), [4, this.props.onSubmit(t, n, this.state.reportContext)]) : [3, 2];
                                        case 1:
                                            switch (r.sent(), this.props.submitStatus) {
                                                case R.a.FormError:
                                                    this.setState({
                                                        error: e
                                                    });
                                                    break;
                                                case R.a.Success:
                                                    i = Z, te[t] && (i = te[t]), this.state.currentCard.nextCard && (i = this.state.currentCard.nextCard), a = this.getChoiceIndex(), this.setState({
                                                        currentCard: i,
                                                        prevCards: [],
                                                        prevSelections: [],
                                                        currentSelection: null,
                                                        displacedSelections: [],
                                                        userTextInput: {},
                                                        error: ""
                                                    }, function() {
                                                        return o.trackNavigation(D.Submit, void 0, a)
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
                                            }), r.label = 3;
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        }, t.handleBack = function() {
                            return r.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, i, a, o, s = this;
                                return r.__generator(this, function(r) {
                                    return e = this.state.currentCard, t = this.state.prevCards[this.state.prevCards.length - 1], n = this.state.prevSelections[this.state.prevSelections.length - 1], i = !n.differentTarget && this.state.targetUnknown, a = this.getChoiceIndex(), o = this.state.displacedSelections, this.state.currentSelection && (o = o.concat(this.state.currentSelection)), t && n && this.setState({
                                        currentCard: t,
                                        currentSelection: n,
                                        displacedSelections: o,
                                        prevCards: this.state.prevCards.slice(0, -1),
                                        prevSelections: this.state.prevSelections.slice(0, -1),
                                        error: "",
                                        targetUnknown: i
                                    }, function() {
                                        return s.trackNavigation(D.Back, e.value, a)
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
                        }, t.trackNavigation = function(e, n, i) {
                            t.props.trackAction(e, n, t.state.currentCard.value, i)
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentWillUnmount = function() {
                        this.state.modalCloseTracked || this.props.trackClose(x.Close, this.state.currentCard.value, this.getChoiceIndex())
                    }, t.prototype.render = function() {
                        var e = this.state.currentCard.type === _.Info && this.state.currentCard.blockPrompt ? o.createElement(T, {
                                targetUser: this.props.targetUser,
                                onBlock: this.props.onBlock,
                                onUnblock: this.props.onUnblock,
                                userBlocked: this.props.userBlocked
                            }) : null,
                            t = this.state.error ? o.createElement(C.Fb, {
                                fullWidth: !0,
                                margin: {
                                    bottom: 1
                                },
                                padding: 1,
                                className: "reporting__error-container"
                            }, this.state.error) : null,
                            n = this.state.prevCards.length || this.state.currentCard.type === _.Info ? null : this.renderPrimer();
                        return o.createElement(C.Fb, {
                            className: "reporting-wizard",
                            display: C.X.Flex,
                            margin: {
                                x: 1
                            },
                            flexDirection: C.Aa.Column,
                            fullHeight: !0,
                            "data-test-card-value": this.state.currentCard.value
                        }, t, o.createElement(C.W, {
                            bold: !0,
                            fontSize: C.Ca.Size4
                        }, this.getTitle()), n, o.createElement(C.Ya, {
                            margin: {
                                y: 1
                            }
                        }, o.createElement(O, {
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
                le = n("s8Ou"),
                ce = n("0hI/");
            n.d(t, "c", function() {
                    return D
                }), n.d(t, "a", function() {
                    return x
                }), n.d(t, "b", function() {
                    return ue
                }),
                function(e) {
                    e.Close = "close", e.Open = "open", e.Submit = "submit_report", e.ToggleSettings = "modal_settings"
                }(I || (I = {})),
                function(e) {
                    e.Back = "back", e.Close = "close", e.Open = "open", e.Next = "next", e.Submit = "submit_report", e.ToggleSettings = "modal_settings"
                }(D || (D = {})),
                function(e) {
                    e.Close = "close", e.Finish = "finish"
                }(x || (x = {}));
            var de = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    n.handleSubmit = function(e, t, i) {
                        return r.__awaiter(n, void 0, void 0, function() {
                            var n, a, o, s, l = this;
                            return r.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        if (n = i === v.O.WHISPER_REPORT ? i : this.props.reportContext.contentType, a = v.O[n], null === (o = {
                                                description: t,
                                                reason: e,
                                                content: a,
                                                contentID: this.props.reportContext.contentID,
                                                extra: this.props.reportContext.extra,
                                                targetID: this.props.data.targetUser.id
                                            }).targetID) return this.setState({
                                            submitStatus: R.a.UserError
                                        }), [2];
                                        r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 3, , 4]), [4, this.props.reportUser(Object(m.a)(o))];
                                    case 2:
                                        return r.sent(), this.setState({
                                            submitStatus: R.a.Success
                                        }, function() {
                                            l.state.showWizard || l.trackAction(I.Submit)
                                        }), [3, 4];
                                    case 3:
                                        return s = r.sent(), c.k.error(s, "ReportUser Mutation failed."), this.setState({
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
                        n.props.blockUserMutation(n.props.data.targetUser.id, void 0, void 0, r.__assign({}, n.props.sessionUser, {
                            __typename: "User"
                        })), n.setState({
                            userBlocked: !0
                        }), n.props.sessionUser && n.props.sessionUser.login && n.props.data.targetUser && n.props.data.targetUser.login && Object(h.b)({
                            context: h.a.ReportWizard,
                            targetUserLogin: n.props.data.targetUser.login,
                            currentUserLogin: n.props.sessionUser.login
                        })
                    }, n.onUnblock = function() {
                        n.props.unblockUserMutation(n.props.data.targetUser.id, r.__assign({}, n.props.sessionUser, {
                            __typename: "User"
                        })), n.setState({
                            userBlocked: !1
                        })
                    }, n.trackOpen = function(e) {
                        n.state.openEventSent || (n.state.showWizard ? n.trackWizardAction(D.Open, void 0, e) : n.trackAction(I.Open), n.setState({
                            openEventSent: !0
                        }))
                    }, n.trackClose = function(e, t, i) {
                        n.state.closeEventSent || (n.state.showWizard ? n.trackWizardAction(D.Close, t, void 0, i, e) : n.trackAction(I.Close), n.setState({
                            closeEventSent: !0
                        }))
                    }, n.trackWizardAction = function(e, t, i, a, r) {
                        c.p.tracking.track(k.SpadeEventType.ReportWizardFlowAction, {
                            ui_context: n.props.reportContext.contentType,
                            target_user_id: n.props.reportContext.targetUserID,
                            report_sent: n.state.submitStatus === R.a.Success,
                            modal_type: "wizard_v2",
                            extra_user_id: n.props.reportContext.additionalTrackingID,
                            action: e,
                            close_type: r,
                            report_session_id: n.reportID,
                            current_step: t,
                            navigated_to: i,
                            choice_index: a
                        })
                    }, n.trackAction = function(e) {
                        c.p.tracking.track(k.SpadeEventType.ReportFlowAction, {
                            ui_context: n.props.reportContext.contentType,
                            target_user_id: n.props.reportContext.targetUserID,
                            report_sent: n.state.submitStatus === R.a.Success,
                            extra_user_id: n.props.reportContext.additionalTrackingID,
                            action: e,
                            report_session_id: n.reportID
                        })
                    }, n.reportID = Object(g.a)();
                    var i = c.p.experiments.getAssignment(f.b.NewReportingWizard);
                    return n.state = {
                        submitStatus: R.a.Unsubmitted,
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
                    if (this.props.data.error) return o.createElement(C.Ya, {
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(C.W, {
                        fontSize: C.Ca.Size5
                    }, Object(c.d)("There was an unexpected error. Please refresh the page and try again", "ReportUser")));
                    if (this.props.data.loading) return o.createElement(C.jb, {
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
                        return this.state.showWizard ? this.props.data.loading ? o.createElement(C.ab, null) : o.createElement(se, r.__assign({}, e, {
                            user: this.props.sessionUser,
                            onBlock: this.onBlock,
                            onUnblock: this.onUnblock,
                            targetUser: this.props.data.targetUser,
                            trackAction: this.trackWizardAction,
                            trackClose: this.trackClose,
                            userBlocked: this.userBlocked
                        })) : o.createElement(R.b, r.__assign({}, e, {
                            targetUser: this.props.data.targetUser
                        }))
                    }
                    return o.createElement(C.Ya, {
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(C.W, {
                        fontSize: C.Ca.Size5
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
            var ue = Object(l.compose)(Object(d.a)(le, {
                name: "reportUser"
            }), Object(d.a)(ce, {
                options: function(e) {
                    return {
                        variables: {
                            targetUserID: e.reportContext.targetUserID
                        }
                    }
                }
            }), Object(b.b)("ReportUser", {
                autoReportInteractive: !0
            }), Object(u.a)(), Object(p.a)(), Object(s.connect)(function(e) {
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
                a = n("yR8l"),
                r = n("8jSG"),
                o = n("cMjZ"),
                s = n("zixI");

            function l() {
                var e = this;
                return Object(a.a)(s, {
                    props: function(t) {
                        return {
                            unblockUserMutation: function(n, a) {
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
                                                            id: Object(o.a)(a),
                                                            fragment: r
                                                        });
                                                        t && (t.blockedUsers = t.blockedUsers.filter(function(e) {
                                                            return null !== e && e.id !== n
                                                        }), e.writeFragment({
                                                            id: Object(o.a)(a),
                                                            fragment: r,
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
                a = n("yR8l"),
                r = n("Pub/"),
                o = n("HzXE"),
                s = 60,
                l = 60 * s,
                c = 24 * l,
                d = 7 * c,
                u = 4 * d;
            var p = n("4w0E");

            function m(e) {
                var t = this;
                return Object(a.a)(p, {
                    props: function(n) {
                        return {
                            banUserMutation: function(a, p, m) {
                                return void 0 === p && (p = null), void 0 === m && (m = null), i.__awaiter(t, void 0, void 0, function() {
                                    var t;
                                    return i.__generator(this, function(h) {
                                        switch (h.label) {
                                            case 0:
                                                if (t = e(n.ownProps).channelID, !n.mutate) return [3, 5];
                                                h.label = 1;
                                            case 1:
                                                return h.trys.push([1, 3, , 4]), [4, n.mutate({
                                                    variables: {
                                                        input: {
                                                            channelID: t,
                                                            bannedUserLogin: a,
                                                            expiresIn: p && function(e) {
                                                                if (!e) return "0s";
                                                                var t = e,
                                                                    n = "";
                                                                if (t > u) {
                                                                    var i = Math.floor(t / u);
                                                                    t -= i * u, n += i + "mo"
                                                                }
                                                                if (t > d) {
                                                                    var a = Math.floor(t / d);
                                                                    t -= a * d, n += a + "w"
                                                                }
                                                                if (t > c) {
                                                                    var r = Math.floor(t / c);
                                                                    t -= r * c, n += r + "d"
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
                                                            }(p),
                                                            reason: m
                                                        }
                                                    },
                                                    update: function(e, n) {
                                                        return function(e, t, n) {
                                                            if (t && t.data && t.data.banUserFromChatRoom && t.data.banUserFromChatRoom.ban && t.data.banUserFromChatRoom.ban.bannedUser && t.data.banUserFromChatRoom.ban.bannedUser.id) {
                                                                var a = Object(r.a)(e, n, t.data.banUserFromChatRoom.ban.bannedUser.id);
                                                                if (!a) return;
                                                                e.writeQuery({
                                                                    query: o,
                                                                    variables: {
                                                                        targetUserID: t.data.banUserFromChatRoom.ban.bannedUser.id,
                                                                        channelID: n
                                                                    },
                                                                    data: i.__assign({}, a, {
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
                                                return [2, h.sent().data];
                                            case 3:
                                                throw h.sent(), new Error("Unable to ban user");
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
            var a = {};

            function r(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !a[t] && (a[t] = !0, !0)
                })
            }
            i.definitions = i.definitions.concat(r(n("iiOx").definitions)), i.definitions = i.definitions.concat(r(n("P8NS").definitions)), i.definitions = i.definitions.concat(r(n("kEr+").definitions)), e.exports = i
        },
        jeZI: function(e, t, n) {},
        jsEL: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                a = n("q1tI"),
                r = n("/7QA"),
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
                            return t.props.successContent ? a.createElement(s.Fb, {
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
                            }, a.createElement(s.W, {
                                type: s.Wb.Strong
                            }, t.props.successContent)) : null
                        }, t.renderError = function() {
                            return t.props.errorContent ? a.createElement(s.Fb, {
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
                            }, a.createElement(s.W, {
                                type: s.Wb.Strong,
                                color: s.O.Error
                            }, t.props.errorContent)) : null
                        }, t.onSubmit = function() {
                            t.props.onSubmit()
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return this.props.successContent ? a.createElement(o.a, {
                            onClickOut: this.props.onClose
                        }, a.createElement(s.Fb, {
                            padding: 2,
                            background: s.r.Base,
                            className: "clip-modal"
                        }, this.renderSuccess(), a.createElement(s.Ya, {
                            display: s.X.Flex,
                            justifyContent: s.Xa.Center
                        }, a.createElement(s.Ya, {
                            margin: {
                                x: 1
                            }
                        }, a.createElement(s.z, {
                            "data-test-selector": l.CANCEL_BUTTON,
                            onClick: this.props.onClose
                        }, Object(r.d)("Close", "ClipsModal")))))) : a.createElement(o.a, {
                            onClickOut: this.props.onClose
                        }, a.createElement(s.Fb, {
                            padding: 2,
                            background: s.r.Base,
                            className: "clip-modal"
                        }, a.createElement(s.Fb, {
                            "data-test-selector": l.TITLE,
                            borderBottom: !0,
                            margin: {
                                bottom: 2
                            },
                            padding: {
                                bottom: 1
                            }
                        }, this.props.title), a.createElement(s.Fb, {
                            "data-test-selector": l.MAIN_BODY,
                            borderBottom: !0,
                            margin: {
                                bottom: 2
                            },
                            padding: {
                                bottom: 2
                            }
                        }, this.renderError(), this.props.body), a.createElement(s.Ya, {
                            display: s.X.Flex,
                            justifyContent: s.Xa.Center
                        }, a.createElement(s.Ya, {
                            margin: {
                                x: 1
                            }
                        }, a.createElement(s.z, {
                            "data-test-selector": l.CANCEL_BUTTON,
                            type: s.F.Text,
                            onClick: this.props.onClose
                        }, Object(r.d)("Cancel", "ClipsModal"))), a.createElement(s.Ya, {
                            margin: {
                                x: 1
                            }
                        }, a.createElement(s.z, {
                            "data-test-selector": l.SUBMIT_BUTTON,
                            type: this.props.buttonType ? this.props.buttonType : s.F.Default,
                            onClick: this.onSubmit,
                            disabled: this.props.submitDisabled
                        }, this.props.buttonContent), this.props.isLoading && a.createElement(s.ab, {
                            delay: 0
                        })))))
                    }, t
                }(a.Component),
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
                            return t.props.isTemporary ? a.createElement(s.W, {
                                type: s.Wb.H5,
                                ellipsis: !0
                            }, Object(r.d)("Timeout this Clip Creator for 24 hours from Your Channel", "ClipsModalBanUser")) : a.createElement(s.W, {
                                type: s.Wb.H5,
                                ellipsis: !0
                            }, Object(r.d)("Ban this Clip Creator from Your Channel", "ClipsModalBanUser"))
                        }, t.renderBodyText = function() {
                            return t.props.isTemporary ? a.createElement(s.W, null, Object(r.d)("{clipCreator} will temporarily be timed out from creating clips and chatting in your channel for 24 hours.", {
                                clipCreator: t.props.targetUser.displayName
                            }, "ClipsModalBanUser")) : a.createElement(s.W, null, Object(r.d)("{clipCreator} will be permanently banned from creating clips and chatting in your channel.", {
                                clipCreator: t.props.targetUser.displayName
                            }, "ClipsModalBanUser"))
                        }, t.renderButtonText = function() {
                            return t.props.isTemporary ? Object(r.d)("Timeout User", "ClipsModalBanUser") : Object(r.d)("Ban User", "ClipsModalBanUser")
                        }, t.renderSuccess = function() {
                            return t.state.hasSucceeded ? Object(r.d)("Success!", "ClipsModalBanUser") : null
                        }, t.renderFailure = function() {
                            return t.state.hasErrored ? t.props.isTemporary ? Object(r.d)("There was a problem timing out this clip creator", "ClipsModalBanUser") : Object(r.d)("There was a problem banning this clip creator", "ClipsModalBanUser") : null
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
                        return a.createElement(c, {
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
                }(a.Component),
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
                        var e = [a.createElement(s.W, {
                            key: "title",
                            type: s.Wb.H4
                        }, Object(r.d)("Delete This Clip", "ClipsModalDelete")), a.createElement(s.Ya, {
                            key: "message",
                            margin: {
                                top: 1
                            }
                        }, a.createElement(s.W, {
                            type: s.Wb.P,
                            color: s.O.Alt2
                        }, Object(r.d)("This clip will be permanently deleted.", "ClipsModalDelete")))];
                        if (!this.props.data.clip) return null;
                        var t = null;
                        this.props.data.clip.curator && this.props.data.clip.curator.login && (t = a.createElement("span", null, " • ", Object(r.d)("Clipped by {curator}", {
                            curator: this.props.data.clip.curator.login
                        }, "ClipsModalDelete")));
                        var n = a.createElement(s.Fb, {
                            display: s.X.Flex,
                            flexWrap: s.Ba.NoWrap
                        }, a.createElement(s.Ya, {
                            className: "clips-modal-delete__thumb",
                            margin: {
                                right: 1
                            }
                        }, a.createElement(s.o, {
                            ratio: s.p.Aspect16x9
                        }, a.createElement("img", {
                            src: this.props.data.clip.thumbnailURL
                        }))), a.createElement(s.Ya, null, a.createElement(s.W, {
                            type: s.Wb.H5
                        }, this.props.data.clip.title), a.createElement(s.W, {
                            color: s.O.Alt2
                        }, Object(r.d)("{created, date, medium}", {
                            created: new Date(this.props.data.clip.createdAt)
                        }, "ClipsModalDelete"), t), a.createElement(s.W, {
                            color: s.O.Alt2
                        }, Object(r.d)("{viewCount, number} views", {
                            viewCount: this.props.data.clip.viewCount
                        }, "ClipsModalDelete"))));
                        return a.createElement(c, {
                            onSubmit: this.onDeleteClick,
                            onClose: this.props.onClose,
                            title: e,
                            body: n,
                            buttonContent: Object(r.d)("Delete", "ClipsModalDelete"),
                            buttonType: s.F.Alert,
                            submitDisabled: this.state.hasSucceeded || this.state.isLoading,
                            successContent: this.state.hasSucceeded ? Object(r.d)("Success!", "ClipsModalDelete") : null,
                            errorContent: this.state.hasErrored ? Object(r.d)("There was a problem deleting this clip.", "ClipsModalDelete") : null,
                            isLoading: this.state.isLoading
                        })
                    }, t
                }(a.Component),
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
                                                throw n = i.sent(), r.k.error(n, "Failed to delete clip"), n;
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
                            return n.state.hasSucceeded ? Object(r.d)("A request has been made to delete the clip. Please wait a few minutes for this to take effect.", "ClipsModalDeleteAll") : null
                        }, n.renderFailure = function() {
                            return n.state.hasErrored ? Object(r.d)("There was a problem deleting this clip.", "ClipsModalDeleteAll") : null
                        }, n.state = T, n
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = a.createElement(s.W, {
                            type: s.Wb.P
                        }, Object(r.d)("This clip and all other clips created from the same video will be permanently deleted.", "ClipsModalDeleteAll"));
                        return a.createElement(c, {
                            onSubmit: this.deleteAll,
                            onClose: this.props.onClose,
                            title: a.createElement(s.W, {
                                type: s.Wb.H4
                            }, Object(r.d)("Delete All Clips from Related Video", "ClipsModalDeleteAll")),
                            body: e,
                            buttonContent: Object(r.d)("Delete", "ClipsModalDeleteAll"),
                            buttonType: s.F.Alert,
                            submitDisabled: this.state.isLoading || this.state.hasSucceeded || "" === this.props.broadcastID,
                            isLoading: this.state.isLoading,
                            successContent: this.renderSuccess(),
                            errorContent: this.renderFailure()
                        })
                    }, t
                }(a.Component),
                N = Object(S.compose)(Object(u.b)("ClipsModalDeleteAll"), v({
                    props: function(e) {
                        return {
                            deleteAllClips: function(t, n) {
                                return i.__awaiter(void 0, void 0, void 0, function() {
                                    var a, o, s;
                                    return i.__generator(this, function(i) {
                                        switch (i.label) {
                                            case 0:
                                                return i.trys.push([0, 6, , 7]), a = void 0, n ? [4, e.mutate({
                                                    variables: {
                                                        input: {
                                                            videoID: n
                                                        }
                                                    }
                                                })] : [3, 2];
                                            case 1:
                                                return o = i.sent(), a = o.data, [3, 5];
                                            case 2:
                                                return t ? [4, e.mutate({
                                                    variables: {
                                                        input: {
                                                            broadcastID: t
                                                        }
                                                    }
                                                })] : [3, 4];
                                            case 3:
                                                return o = i.sent(), a = o.data, [3, 5];
                                            case 4:
                                                throw new Error("Invalid broadcastID specified for deleteAllClips");
                                            case 5:
                                                return e.ownProps.onDeleteAll && a.deleteClips && a.deleteClips.clips && e.ownProps.onDeleteAll(a.deleteClips.clips), [3, 7];
                                            case 6:
                                                throw s = i.sent(), r.k.error(s, "Failed to delete clips from VOD"), s;
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
                            broadcastID: t.broadcast && t.broadcast.id || ""
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
                O = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.renderSuccess = function() {
                            return n.state.hasSucceeded ? Object(r.d)("Clips successfully deleted.", "ClipsModalBatchDelete") : null
                        }, n.renderError = function() {
                            return n.state.hasErrored ? Object(r.d)("There was a problem deleting this clip.", "ClipsModalBatchDelete") : null
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
                        }, n.state = E, n
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = a.createElement(s.W, {
                                type: s.Wb.H4
                            }, Object(r.d)("Delete these clips?", "ClipsModalBatchDelete")),
                            t = a.createElement(s.W, {
                                type: s.Wb.P
                            }, Object(r.d)("These clips will be permanently deleted. Are you sure?", "ClipsModalBatchDelete"));
                        return a.createElement(c, {
                            onSubmit: this.onDeleteClick,
                            onClose: this.props.onClose,
                            title: e,
                            body: t,
                            buttonContent: Object(r.d)("Delete", "ClipsModalBatchDelete"),
                            buttonType: s.F.Alert,
                            submitDisabled: this.state.hasSucceeded || this.state.isLoading,
                            isLoading: this.state.isLoading,
                            successContent: this.renderSuccess(),
                            errorContent: this.renderError()
                        })
                    }, t
                }(a.Component),
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
                                                throw t = n.sent(), r.k.error(t, "Failed to delete clips"), t;
                                            case 3:
                                                return [2]
                                        }
                                    })
                                })
                            }
                        }
                    }
                })(O);
            n.d(t, "a", function() {
                return c
            }), n.d(t, "b", function() {
                return h
            }), n.d(t, "d", function() {
                return C
            }), n.d(t, "e", function() {
                return N
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
            var a = {};
            i.definitions = i.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !a[t] && (a[t] = !0, !0)
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
            var a = {};
            i.definitions = i.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !a[t] && (a[t] = !0, !0)
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
                a = n("q1tI"),
                r = n("/7QA"),
                o = n("Ue10"),
                s = (n("1mcJ"), function(e) {
                    return a.createElement(o.Ya, i.__assign({
                        className: "drops-badge",
                        position: o.kb.Absolute,
                        attachTop: !0,
                        attachRight: !0
                    }, Object(o.kc)(e)), a.createElement(o.Zb, {
                        direction: o.bc.Top,
                        align: o.ac.Right,
                        label: Object(r.d)("Offers in-game Drops", "DropsBadge")
                    }, a.createElement(o.Fb, {
                        className: "drops-badge__drops-icon",
                        position: o.kb.Relative,
                        padding: {
                            top: .5,
                            right: .5,
                            bottom: 3,
                            left: 3
                        },
                        overflow: o.db.Hidden,
                        color: o.O.Overlay,
                        zIndex: o.jc.Default
                    }, a.createElement(o.U, {
                        type: o.V.Inherit,
                        hoverColorInherit: !0,
                        to: "https://help.twitch.tv/customer/en/portal/articles/2754380-how-to-earn-drops"
                    }, a.createElement(o.tb, {
                        asset: o.ub.Drops
                    })))))
                }),
                l = n("0LAi"),
                c = new Set(["alt", "src", "srcSet", "sizes", "onError", "onLoad", "refHandler"]);

            function d(e) {
                for (var t = {}, n = 0, i = Object.keys(e); n < i.length; n++) {
                    var a = i[n];
                    c.has(a) && (t[a] = e[a])
                }
                return t
            }
            var u = function(e) {
                var t;
                return e.placeholder ? a.createElement(a.Fragment, null, a.createElement(o.Ya, {
                    margin: {
                        bottom: .5
                    }
                }, a.createElement(o.o, {
                    ratio: o.p.Aspect3x4
                }, a.createElement(o.jb, null))), a.createElement(o.W, null, a.createElement(o.jb, {
                    width: 150
                })), a.createElement(o.W, {
                    fontSize: o.Ca.Size7
                }, a.createElement(o.jb, {
                    width: 100
                }))) : (t = a.createElement(a.Fragment, null, a.createElement(o.Ya, {
                    className: "tw-box-art-card__image " + (e.unavailable && !e.disabled ? "tw-box-art-card__image--unavailable" : ""),
                    "data-test-selector": "tw-card-image",
                    "data-a-target": "tw-card-image"
                }, a.createElement(o.I, i.__assign({
                    aspect: o.p.BoxArt,
                    borderRadius: o.x.Medium
                }, d(e)))), a.createElement(o.H, null, a.createElement(o.Ya, {
                    display: o.X.Flex
                }, a.createElement(o.Ya, {
                    "data-test-selector": "tw-card-title",
                    "data-a-target": "tw-card-title",
                    flexGrow: 1,
                    flexShrink: 1,
                    margin: {
                        top: .5
                    },
                    ellipsis: !0
                }, a.createElement(o.W, {
                    className: "tw-box-art-card__title",
                    type: o.Wb.H3,
                    fontSize: o.Ca.Size5,
                    lineHeight: o.Za.Body,
                    ellipsis: !0
                }, e.title)), e.contextualCardActionProps && a.createElement(o.Ya, {
                    margin: {
                        top: .5
                    },
                    flexGrow: 0,
                    flexShrink: 0
                }, a.createElement(e.contextualCardActionProps.component, i.__assign({}, e.contextualCardActionProps.props)))), a.createElement(o.W, {
                    color: o.O.Alt2,
                    ellipsis: !0
                }, e.info))), (e.linkTo || e.onClick || e.disabled) && (t = a.createElement(o.T, {
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
                }, t)), a.createElement("div", i.__assign({
                    className: "tw-box-art-card"
                }, Object(o.kc)(e)), a.createElement(o.G, {
                    key: e.title
                }, t), e.tagListProps && 0 !== e.tagListProps.tags.length && a.createElement(o.Ya, {
                    margin: {
                        top: .5
                    }
                }, a.createElement(l.a, i.__assign({}, e.tagListProps, {
                    tagNumberLimit: 3
                }))), !0 === e.showDropsBadge && a.createElement(s, null)))
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
                a = "https://www.facebook.com/sharer/sharer.php",
                r = "https://www.twitter.com/share",
                o = "https://www.reddit.com/submit",
                s = "https://vk.com/share.php";

            function l(e) {
                return Object(i.e)(a, {
                    u: e
                })
            }

            function c(e, t) {
                return Object(i.e)(r, {
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
                a = n("q1tI"),
                r = n("fvjX"),
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
                        return a.createElement(s.Ya, i.__assign({
                            position: s.kb.Relative,
                            className: "selectable-input-wrapper"
                        }, Object(s.kc)(this.props)), a.createElement(s.Sa, {
                            type: s.Ua.Text,
                            value: this.props.text,
                            readOnly: !0,
                            onFocus: this.selectOnFocus,
                            icon: this.props.iconAsset,
                            id: this.props.id
                        }), this.props.children)
                    }, t
                }(a.Component)),
                c = Object(r.compose)(Object(o.b)("SelectableInput"))(l)
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
            var i, a = n("mrSG"),
                r = n("q1tI"),
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
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = {
                            margin: {
                                right: 1
                            }
                        },
                        t = {};
                    return this.props.asBalloon && (t = {
                        justifyContent: p.Xa.Between
                    }, e = {}), r.createElement(p.Ya, a.__assign({
                        className: "clips-social-share",
                        display: p.X.Flex,
                        flexWrap: p.Ba.NoWrap
                    }, t, {
                        "data-test-selector": i.MainContainer
                    }), r.createElement(p.Ya, a.__assign({
                        display: p.X.InlineBlock
                    }, e, {
                        "data-test-selector": i.DownloadButtonContainer
                    }), r.createElement(u.a, {
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
                    return this.props.pageType === l.PageviewLocation.ClipsWatchPage && this.props.clip.broadcaster && this.props.clip.broadcaster.login && (u = Object(s.e)(Object(d.a)(this.props.clip.slug, this.props.clip.broadcaster.login), i)), r.createElement(p.Ya, a.__assign({
                        key: n
                    }, e, {
                        "data-test-selector": t
                    }), r.createElement(o.a, {
                        key: n,
                        type: n,
                        text: this.props.clip.title,
                        url: u,
                        onShareClick: Object(c.c)(this.props.clip.id, this.props.clip.game && this.props.clip.game.name, this.props.clip.broadcaster && this.props.clip.broadcaster.id, this.props.clip.broadcaster && this.props.clip.broadcaster.login, this.props.pageType)
                    }))
                }, t
            }(r.Component)
        },
        wC0O: function(e, t, n) {},
        wbMx: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return i
            }), n.d(t, "a", function() {
                return d
            });
            var i, a = n("mrSG"),
                r = n("q1tI"),
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
                        return n.props.type === i.Download ? r.createElement("a", a.__assign({
                            href: n.props.url,
                            target: "_blank",
                            className: e,
                            onClick: n.onShareClickHandler
                        }, Object(c.kc)(n.props), {
                            download: n.props.text
                        }), n.renderIcon()) : n.isLink() ? r.createElement("a", a.__assign({
                            href: n.getLinkTarget(),
                            target: "_blank",
                            className: e,
                            onClick: n.onShareClickHandler
                        }, Object(c.kc)(n.props)), n.renderIcon()) : r.createElement("button", a.__assign({
                            onClick: n.copyPageUrl,
                            onMouseLeave: n.clearIsCopiedStatus,
                            className: e
                        }, Object(c.kc)(n.props)), n.renderIcon())
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
                        return r.createElement(c.Ya, {
                            className: "social-button__icon " + n.addSocialClassModifier("social-button__icon"),
                            display: c.X.Flex,
                            alignItems: c.f.Center,
                            justifyContent: c.Xa.Center
                        }, r.createElement(c.tb, {
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
                                return c.ub.Twitter;
                            case i.Facebook:
                                return c.ub.Facebook;
                            case i.VKontakte:
                                return c.ub.VKontakte;
                            case i.Reddit:
                                return c.ub.Reddit;
                            case i.Download:
                                return c.ub.Download;
                            case i.Copy:
                            default:
                                return c.ub.Copy
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
                            a = e.type,
                            r = n.getUrl(),
                            o = t || "";
                        switch (a) {
                            case i.Reddit:
                                return Object(l.b)(r, o);
                            case i.VKontakte:
                                return Object(l.d)(r);
                            case i.Facebook:
                                return Object(l.a)(r);
                            case i.Twitter:
                                return Object(l.c)(r, o);
                            default:
                                return ""
                        }
                    }, n.state = {
                        isCopied: !1
                    }, n
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(c.Ya, {
                        className: "social-button"
                    }, r.createElement(c.Zb, {
                        label: this.getTooltipFromType(),
                        direction: c.bc.Bottom
                    }, this.renderLink()))
                }, t
            }(r.Component)
        },
        y4Ne: function(e, t, n) {},
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
            var a = {};

            function r(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !a[t] && (a[t] = !0, !0)
                })
            }
            i.definitions = i.definitions.concat(r(n("iiOx").definitions)), i.definitions = i.definitions.concat(r(n("P8NS").definitions)), i.definitions = i.definitions.concat(r(n("kEr+").definitions)), e.exports = i
        },
        yWUM: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            });
            var i = "0h0m1s";

            function a(e) {
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