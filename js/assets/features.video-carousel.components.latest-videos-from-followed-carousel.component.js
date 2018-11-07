(window.webpackJsonp = window.webpackJsonp || []).push([
    [146], {
        "0Ws6": function(e, t, i) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "LatestVideosFromFollowedCarousel_CurrentUser"
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
                                        value: "followedVideos"
                                    },
                                    arguments: [{
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "first"
                                        },
                                        value: {
                                            kind: "IntValue",
                                            value: "30"
                                        }
                                    }, {
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "sort"
                                        },
                                        value: {
                                            kind: "EnumValue",
                                            value: "TIME"
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
                                                                value: "PreviewCardVideo"
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
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 239
                }
            };
            n.loc.source = {
                body: '#import "twilight/features/video-preview-card/models/preview-card-video-fragment.gql"\nquery LatestVideosFromFollowedCarousel_CurrentUser {\ncurrentUser {\nid\nfollowedVideos(first: 30 sort: TIME) {\nedges {\nnode {\n...PreviewCardVideo\n}\n}\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var r = {};
            n.definitions = n.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !r[t] && (r[t] = !0, !0)
                })
            }(i("he03").definitions)), e.exports = n
        },
        "6h5w": function(e, t, i) {
            "use strict";
            var n, r = i("q1tI"),
                o = i("9C/b"),
                s = i("/7QA"),
                a = i("vRsq"),
                l = i("tuvy"),
                c = i("Ue10"),
                d = Object(o.a)(function(e) {
                    var t, i = e.options;
                    return t = Object(l.a)() ? Object(a.j)(e.channelLogin, e, i) : Object(a.q)(e.channelLogin, i && {
                        filter: i.filter ? Object(a.z)(i.filter) : void 0,
                        sort: i.sort
                    }), r.createElement(c.U, {
                        to: t,
                        hoverUnderlineNone: !0
                    }, r.createElement(c.Xa, {
                        display: c.X.InlineFlex,
                        flexDirection: c.Aa.Row,
                        alignItems: c.f.Center
                    }, r.createElement(c.W, {
                        type: c.Vb.H5
                    }, Object(s.d)("Expand All", "VideoShelfExpandLink")), r.createElement(c.sb, {
                        asset: c.tb.AngleRight,
                        height: 14
                    })))
                });
            i.d(t, "a", function() {
                    return p
                }),
                function(e) {
                    e.Title = "title", e.SubTitle = "subtitle"
                }(n || (n = {}));
            var p = function(e) {
                if (!e.titleMessage) return r.createElement(c.ib, {
                    width: 200
                });
                var t = r.createElement(c.W, {
                        type: c.Vb.H4,
                        color: c.O.Base,
                        bold: !0,
                        "data-test-selector": n.Title
                    }, e.titleMessage),
                    i = e.subTitle;
                return e.subTitle && "string" == typeof e.subTitle ? i = r.createElement(c.W, {
                    color: c.O.Alt2,
                    type: c.Vb.Span,
                    "data-test-selector": n.SubTitle
                }, e.subTitle) : e.subTitle && (i = r.createElement(c.Xa, {
                    "data-test-selector": n.SubTitle
                }, i)), r.createElement(r.Fragment, null, r.createElement(c.Xa, {
                    display: c.X.Flex,
                    flexDirection: c.Aa.Row,
                    alignItems: c.f.End
                }, t, e.expandLink && r.createElement(c.Xa, {
                    padding: {
                        left: 1
                    }
                }, r.createElement(d, {
                    channelLogin: e.expandLink.channelLogin,
                    options: e.expandLink.options
                }))), i)
            }
        },
        "A7Y/": function(e, t, i) {},
        XEwr: function(e, t, i) {
            "use strict";

            function n(e) {
                if (!e || 0 === e.edges.length) return [];
                var t = [];
                return e.edges.forEach(function(e) {
                    e.node.id && t.push(e.node)
                }), t
            }

            function r(e) {
                return "slug" in e
            }
            i.d(t, "b", function() {
                return n
            }), i.d(t, "a", function() {
                return r
            })
        },
        YBPT: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, "LatestVideosFromFollowedCarouselComponent", function() {
                return v
            }), i.d(t, "LatestVideosFromFollowedCarousel", function() {
                return f
            });
            var n = i("mrSG"),
                r = i("q1tI"),
                o = i("fvjX"),
                s = i("/7QA"),
                a = i("GFmA"),
                l = i("yR8l"),
                c = i("2xye"),
                d = i("GnwI"),
                p = i("6h5w"),
                u = i("eqgM"),
                h = i("XEwr"),
                g = i("Ue10"),
                m = i("0Ws6"),
                v = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return n.__extends(t, e), t.prototype.componentDidUpdate = function() {
                        this.props.data.loading || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this.props.data && !this.props.data.loading && this.props.data.currentUser && Object(h.b)(this.props.data.currentUser.followedVideos) || null;
                        return !this.props.data || this.props.data.loading || e && 0 !== e.length ? r.createElement("div", null, r.createElement(g.Xa, {
                            padding: {
                                bottom: 1
                            }
                        }, r.createElement(p.a, {
                            titleMessage: Object(s.d)("Latest videos", "LatestVideosFromFollowedCarousel")
                        })), r.createElement(u.a, {
                            currentlyWatchingVideoID: this.props.currentlyWatchingVideoID,
                            listContext: a.b.MixedGameAndChannelList,
                            overrideCardImageInteractivity: !0,
                            tracking: {
                                content: this.props.tracking.content,
                                location: this.props.tracking.location,
                                medium: this.props.tracking.medium,
                                source: {},
                                itemType: c.TwitchDataType.Video
                            },
                            videoCardSize: g.cc.Large,
                            videos: e
                        })) : null
                    }, t
                }(r.Component),
                f = Object(o.compose)(Object(l.a)(m), Object(d.b)("LatestVideosFromFollowedCarousel"))(v)
        },
        bdIb: function(e, t, i) {
            "use strict";
            i.d(t, "a", function() {
                return a
            });
            var n = i("mrSG"),
                r = i("q1tI"),
                o = i("/7QA"),
                s = i("GFmA"),
                a = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onClickHandler = function() {
                            t.props.onClick && t.props.onClick(t.props.tracking.content_index)
                        }, t
                    }
                    return n.__extends(t, e), t.prototype.render = function() {
                        return r.createElement(s.a, {
                            context: this.props.context,
                            title: this.props.clip.title,
                            linkTo: {
                                pathname: this.props.clip.broadcaster ? "/" + this.props.clip.broadcaster.login + "/clip/" + this.props.clip.slug : "",
                                state: this.getLinkState()
                            },
                            onClick: this.onClickHandler,
                            thumbnailImageProps: {
                                src: this.props.clip.thumbnailURL || o.p.config.defaultStreamPreviewURL,
                                alt: this.props.clip.title
                            },
                            channelDisplayName: this.props.clip.broadcaster && this.props.clip.broadcaster.displayName || "",
                            channelLogin: this.props.clip.broadcaster && this.props.clip.broadcaster.login || "",
                            channelLinkTo: {
                                pathname: this.props.clip.broadcaster ? "/" + this.props.clip.broadcaster.login : "",
                                state: this.getLinkState()
                            },
                            channelImageProps: {
                                src: this.props.clip.broadcaster && this.props.clip.broadcaster.profileImageURL || "",
                                alt: this.props.clip.broadcaster && this.props.clip.broadcaster.login || ""
                            },
                            gameTitle: this.props.clip.game && this.props.clip.game.name || void 0,
                            gameTitleLinkTo: this.props.clip.game ? {
                                pathname: "/directory/game/" + encodeURI(this.props.clip.game.name),
                                state: this.getLinkState()
                            } : void 0,
                            gameBoxArtImageProps: this.props.clip.game ? {
                                src: this.props.clip.game.boxArtURL || o.a.defaultBoxArtURL,
                                alt: this.props.clip.game.name
                            } : void 0,
                            datePublished: this.props.clip.createdAt,
                            viewCount: this.props.clip.viewCount,
                            durationInSeconds: this.props.clip.durationSeconds,
                            clipCreatedByChannelLogin: this.props.clip.curator && this.props.clip.curator.login || "",
                            clipCreatedByChannelLoginLinkTo: this.props.clip.curator ? "/" + this.props.clip.curator.login : ""
                        })
                    }, t.prototype.getLinkState = function() {
                        return {
                            content: this.props.tracking.content,
                            content_index: this.props.tracking.content_index,
                            medium: this.props.tracking.medium
                        }
                    }, t
                }(r.Component)
        },
        eqgM: function(e, t, i) {
            "use strict";
            var n, r, o = i("/MKj"),
                s = i("mrSG"),
                a = i("q1tI"),
                l = i("/7QA"),
                c = i("GnwI"),
                d = i("TSYQ"),
                p = i("17x9"),
                u = i("Ue10");
            i("A7Y/");
            var h = "carousel-content",
                g = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            currentElementIndex: 0,
                            hasBeenVisible: !1
                        }, t.moveCarouselToCardIndex = function(e) {
                            if (t.props.children && !(t.props.children.length <= 1)) {
                                var i = t.getNumberOfVisibleElements();
                                t.props.children.length < i || (e < t.props.children.length && e > t.props.children.length - i ? t.setState({
                                    currentElementIndex: t.props.children.length - i
                                }) : t.setState({
                                    currentElementIndex: e
                                }))
                            }
                        }, t.moveCarouselForward = function() {
                            if (!t.isForwardButtonDisabled() && t.props.children) {
                                var e = t.getNumberOfVisibleElements();
                                t.state.currentElementIndex + 2 * e > t.props.children.length ? t.setState({
                                    currentElementIndex: t.props.children.length - e
                                }) : t.setState({
                                    currentElementIndex: t.state.currentElementIndex + e
                                })
                            }
                        }, t.moveCarouselBackward = function() {
                            if (!t.isBackButtonDisabled()) {
                                var e = t.getNumberOfVisibleElements();
                                t.setState({
                                    currentElementIndex: Math.max(t.state.currentElementIndex - e, 0)
                                })
                            }
                        }, t.isForwardButtonDisabled = function() {
                            if (!t.carouselContainerRef) return !1;
                            if (t.props.children) {
                                var e = 0,
                                    i = t.carouselContainerRef.querySelector("[data-js-selector=" + h + "]");
                                return i && (e = i.childElementCount), t.getLastVisibleIndex() >= e
                            }
                            return !0
                        }, t.isBackButtonDisabled = function() {
                            return 0 === t.state.currentElementIndex
                        }, t.getLastVisibleIndex = function() {
                            return t.state.currentElementIndex + t.getNumberOfVisibleElements()
                        }, t.getNumberOfVisibleElements = function() {
                            var e = t.carouselContainerRef.getBoundingClientRect(),
                                i = e.left,
                                n = e.right - i,
                                r = t.getVideoCardEndPadding();
                            return Math.floor((n + r) / t.getChildWidth())
                        }, t.refHandler = function(e) {
                            return t.carouselContainerRef = e
                        }, t.getChildWidth = function() {
                            if (!t.carouselContainerRef) return 0;
                            var e = t.carouselContainerRef.querySelector("[data-js-selector=" + h + "]");
                            return e && e.children.length ? e.children[0].getBoundingClientRect().width : 0
                        }, t.getVideoCardEndPadding = function() {
                            var e = t.carouselContainerRef.querySelector("[data-js-selector=" + h + "]");
                            if (!e || 0 === e.children.length) return 0;
                            var i = window.getComputedStyle(e.children[0]).paddingRight || "";
                            return 2 * parseInt(i, 10) || 0
                        }, t.pixelOffset = function() {
                            return t.getChildWidth() * t.state.currentElementIndex * -1
                        }, t.transformString = function() {
                            return "translate3d(" + t.pixelOffset() + "px, 0px, 0px)"
                        }, t
                    }
                    return s.__extends(t, e), t.prototype.componentDidMount = function() {
                        var e = this.context.registerReceiver;
                        e && (this.unregisterScrollHandler = e(this)), null !== this.props.children && this.checkVisible()
                    }, t.prototype.componentDidUpdate = function(e) {
                        null === e.children && null !== this.props.children && this.checkVisible(), (!e.options && this.props.options || e.options && this.props.options && this.props.options.videoIndex !== e.options.videoIndex) && this.moveCarouselToCardIndex(this.props.options.videoIndex)
                    }, t.prototype.componentWillUnmount = function() {
                        this.unregisterScrollHandler && this.unregisterScrollHandler()
                    }, t.prototype.render = function() {
                        return a.createElement(u.Pa, {
                            margin: {
                                y: 1
                            },
                            position: u.jb.Relative
                        }, a.createElement("div", {
                            className: "preview-card-carousel",
                            ref: this.refHandler
                        }, a.createElement(u.Xa, {
                            className: "preview-card-carousel__child-container",
                            overflow: u.cb.Hidden,
                            position: u.jb.Relative,
                            fullWidth: !0,
                            "data-test-selector": "child-container"
                        }, a.createElement(u.Pa, {
                            margin: {
                                bottom: 1
                            }
                        }, a.createElement("div", {
                            className: "preview-card-carousel__body",
                            style: {
                                transform: this.transformString()
                            },
                            "data-test-selector": "carousel-body"
                        }, a.createElement(u.bc, {
                            noWrap: !0,
                            noGrow: !0,
                            childWidth: this.props.cardWidth || u.cc.Large,
                            gutterSize: u.dc.Small,
                            "data-js-selector": h
                        }, this.props.children)))), a.createElement(u.Xa, {
                            className: "preview-card-carousel__nav",
                            display: u.X.Flex,
                            alignItems: u.f.Center,
                            position: u.jb.Absolute,
                            attachTop: !0,
                            attachLeft: !0,
                            fullHeight: !0
                        }, a.createElement(b, {
                            direction: m.DirectionPrevious,
                            disabled: !this.props.children || this.isBackButtonDisabled(),
                            onClickHandler: this.moveCarouselBackward
                        })), a.createElement(u.Xa, {
                            className: "preview-card-carousel__nav",
                            display: u.X.Flex,
                            alignItems: u.f.Center,
                            position: u.jb.Absolute,
                            attachTop: !0,
                            attachRight: !0,
                            fullHeight: !0
                        }, a.createElement(b, {
                            direction: m.DirectionNext,
                            disabled: !this.props.children || this.isForwardButtonDisabled(),
                            onClickHandler: this.moveCarouselForward
                        }))))
                    }, t.prototype.checkVisible = function(e) {
                        this.props.children && this.props.children.length > 0 && !this.state.hasBeenVisible && function(e) {
                            if (!e) return !1;
                            var t = e.getBoundingClientRect(),
                                i = window.innerWidth,
                                n = window.innerHeight;
                            return !(t.right < 0 || t.bottom < 0 || t.left > i || t.top > n)
                        }(this.carouselContainerRef) && this.props.onFirstVisible()
                    }, t.contextTypes = {
                        registerReceiver: p.func
                    }, t
                }(a.Component),
                m = {
                    DirectionPrevious: "previous",
                    DirectionNext: "next"
                },
                v = ((n = {})[m.DirectionPrevious] = "previous", n[m.DirectionNext] = "next", n),
                f = ((r = {})[m.DirectionPrevious] = u.tb.AngleLeft, r[m.DirectionNext] = u.tb.AngleRight, r),
                b = function(e) {
                    var t, i = v[e.direction],
                        n = ((t = {})[m.DirectionPrevious] = Object(l.d)("previous", "CarouselNavButton"), t[m.DirectionNext] = Object(l.d)("next", "CarouselNavButton"), t),
                        r = d("preview-card-carousel__button", "preview-card-carousel__button--" + i, {
                            "preview-card-carousel__button--disabled": e.disabled
                        });
                    return a.createElement(u.Xa, {
                        className: r,
                        position: u.jb.Relative,
                        display: u.X.Flex,
                        alignItems: u.f.Stretch
                    }, a.createElement(u.A, {
                        ariaLabel: n[e.direction],
                        blurAfterClick: !0,
                        "data-test-selector": i + "-button",
                        disabled: e.disabled,
                        icon: f[e.direction],
                        onClick: e.onClickHandler,
                        size: u.B.Large
                    }))
                },
                C = i("bdIb"),
                k = i("XEwr"),
                y = i("RXle"),
                x = 10,
                I = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            hasTrackedItemSectionLoad: !1
                        }, t.handleFirstVisible = function() {
                            if (!t.state.hasTrackedItemSectionLoad) {
                                for (var e = t.props.videos ? t.props.videos : [], i = [], n = [], r = 0, o = e; r < o.length; r++) {
                                    var a = o[r];
                                    i.push(a.id), n.push(a.viewCount || 0)
                                }
                                l.o.trackItemSectionLoad(s.__assign({
                                    carousel_content: t.props.tracking.content,
                                    location: t.props.tracking.location,
                                    rendered_item_count: e.length,
                                    rendered_item_list: i,
                                    rendered_item_types: [t.props.tracking.itemType],
                                    rendered_items_viewcounts: n
                                }, t.props.tracking.source)), t.setState({
                                    hasTrackedItemSectionLoad: !0
                                })
                            }
                        }, t.onPreviewCardClick = function(e) {
                            if (t.props.videos) {
                                var i = t.props.videos[e];
                                l.o.trackItemSectionClick(s.__assign({
                                    carousel_content: t.props.tracking.content,
                                    item_id: i.id,
                                    item_index: e,
                                    item_type: t.props.tracking.itemType,
                                    item_viewcount: i.viewCount,
                                    location: t.props.tracking.location
                                }, t.props.tracking.source)), t.props.scrollToCurrentlyWatching && t.props.videos.length > 0 && t.setCarouselOptions({
                                    videoIndex: e
                                })
                            }
                        }, t.setCarouselOptions = function(e) {
                            t.props.videos && t.props.videos.length > 0 && t.setState({
                                scrollToOptions: e
                            })
                        }, t.getCurrentlyWatchingVideoIndex = function() {
                            var e = 0;
                            if (t.props.videos && t.props.videos.length > 0)
                                for (var i = 0; i < t.props.videos.length; i++) {
                                    if (t.props.videos[i].id === t.props.currentlyWatchingVideoID) {
                                        e = i;
                                        break
                                    }
                                }
                            return e
                        }, t.getVideoCards = function() {
                            var e = t.props.videos;
                            if (null === e) {
                                for (var i = [], n = 0; n < x; n++) i.push(a.createElement(y.VideoPreviewCardPlaceholder, {
                                    key: "carousel-placeholder-" + n
                                }));
                                return i
                            }
                            var r = [];
                            if (t.props.spotlight) {
                                var o = a.createElement(y.VideoPreviewCard, {
                                    key: "spotlight",
                                    collectionID: t.props.collectionID,
                                    topBar: {
                                        title: t.props.spotlight.title,
                                        subTitle: t.props.spotlight.subTitle
                                    },
                                    context: t.props.listContext,
                                    tracking: {
                                        content: t.props.tracking.content,
                                        content_index: r.length,
                                        medium: t.props.tracking.medium
                                    },
                                    video: t.props.spotlight.card,
                                    hideTags: t.props.hideTags
                                });
                                r.push(o)
                            }
                            var s = r.length;
                            if (t.props.currentlyWatchingVideoID && t.props.renderCurrentlyWatchingCard && t.props.scrollToCurrentlyWatching)
                                for (var l = t.getCurrentlyWatchingVideoIndex(), c = 0; c < e.length; c++) {
                                    var d = e[c];
                                    t.props.firstPageLoaded || !(c < l || c > l + x) ? Object(k.a)(d) || r.push(a.createElement(y.VideoPreviewCard, {
                                        context: t.props.listContext,
                                        collectionID: t.props.collectionID,
                                        onClick: t.onPreviewCardClick,
                                        key: "video-" + c,
                                        tracking: {
                                            content: t.props.tracking.content,
                                            content_index: c,
                                            medium: t.props.tracking.medium
                                        },
                                        video: d,
                                        multipleVideoGameMarkersType: t.props.multipleVideoGameMarkersType,
                                        listPosition: t.getPositionLabel(c),
                                        topBar: t.getPositionBanner(c),
                                        hideDuration: t.willRenderPositionBanner(c),
                                        hideTags: t.props.hideTags
                                    })) : r.push(a.createElement(y.VideoPreviewCardPlaceholder, {
                                        key: "carousel-placeholder-" + c
                                    }))
                                } else
                                    for (c = 0; c < e.length; c++)
                                        if (c + s < x || t.props.firstPageLoaded) {
                                            d = e[c];
                                            if (Object(k.a)(d)) {
                                                if (d.slug === t.props.currentlyWatchingVideoID) continue;
                                                r.push(a.createElement(C.a, {
                                                    context: t.props.listContext,
                                                    onClick: t.onPreviewCardClick,
                                                    key: "video-" + c,
                                                    tracking: {
                                                        content: t.props.tracking.content,
                                                        content_index: s + c,
                                                        medium: t.props.tracking.medium
                                                    },
                                                    clip: d
                                                }))
                                            } else {
                                                if (d.id === t.props.currentlyWatchingVideoID && !t.props.renderCurrentlyWatchingCard) continue;
                                                r.push(a.createElement(y.VideoPreviewCard, {
                                                    context: t.props.listContext,
                                                    collectionID: t.props.collectionID,
                                                    onClick: t.onPreviewCardClick,
                                                    key: "video-" + c,
                                                    tracking: {
                                                        content: t.props.tracking.content,
                                                        content_index: s + c,
                                                        medium: t.props.tracking.medium
                                                    },
                                                    video: d,
                                                    multipleVideoGameMarkersType: t.props.multipleVideoGameMarkersType,
                                                    listPosition: t.getPositionLabel(c),
                                                    topBar: t.getPositionBanner(c),
                                                    hideDuration: t.willRenderPositionBanner(c),
                                                    hideTags: t.props.hideTags
                                                }))
                                            }
                                        } else r.push(a.createElement(y.VideoPreviewCardPlaceholder, {
                                            key: "carousel-placeholder-" + c
                                        }));
                            return r
                        }, t.getPositionBanner = function(e) {
                            if (t.props.renderPositionBanner && t.props.renderCurrentlyWatchingCard && t.props.videos) {
                                var i = t.getCurrentlyWatchingVideoIndex(),
                                    n = e === i,
                                    r = e === i + 1,
                                    o = Object(l.d)("{totalVideos, plural, one {{position} / # video} other {{position} / # videos}}", {
                                        position: e + 1,
                                        totalVideos: t.props.videos.length
                                    }, "VideoCarousel");
                                return n ? {
                                    title: Object(l.d)("Now playing", "VideoCarousel"),
                                    subTitle: o,
                                    selected: !0
                                } : r ? {
                                    title: Object(l.d)("Up next", "VideoCarousel"),
                                    subTitle: o
                                } : void 0
                            }
                        }, t.willRenderPositionBanner = function(e) {
                            if (!t.props.renderPositionBanner || !t.props.videos) return !1;
                            var i = t.getCurrentlyWatchingVideoIndex();
                            return e === i || e === i + 1
                        }, t.getPositionLabel = function(e) {
                            if (t.props.renderPositionLabel && !t.willRenderPositionBanner(e) && t.props.videos) return {
                                position: e + 1,
                                totalVideos: t.props.videos.length
                            }
                        }, t
                    }
                    return s.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.videos && this.props.scrollToCurrentlyWatching && this.props.currentlyWatchingVideoID && !this.state.scrollToOptions && this.setCarouselOptions({
                            videoIndex: this.getCurrentlyWatchingVideoIndex()
                        })
                    }, t.prototype.componentDidUpdate = function(e) {
                        null === e.videos && null !== this.props.videos && this.props.scrollToCurrentlyWatching && this.props.currentlyWatchingVideoID ? this.setCarouselOptions({
                            videoIndex: this.getCurrentlyWatchingVideoIndex()
                        }) : this.props.videos && this.props.scrollToCurrentlyWatching && this.props.currentlyWatchingVideoID !== e.currentlyWatchingVideoID && this.setCarouselOptions({
                            videoIndex: this.getCurrentlyWatchingVideoIndex()
                        })
                    }, t.prototype.render = function() {
                        return a.createElement(g, {
                            options: this.state.scrollToOptions,
                            cardWidth: this.props.videoCardSize,
                            onFirstVisible: this.handleFirstVisible
                        }, this.getVideoCards())
                    }, t
                }(a.Component),
                w = Object(c.b)("VideoCarousel", {
                    autoReportInteractive: !0
                })(I);
            i.d(t, "a", function() {
                return V
            });
            var V = Object(o.connect)(function(e) {
                return {
                    firstPageLoaded: e.session.firstPageLoaded
                }
            })(w)
        }
    }
]);