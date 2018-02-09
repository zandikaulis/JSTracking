webpackJsonp([78], {
    "97Ye": function(e, t, n) {
        var i = {
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
        i.loc.source = {
            body: '#import "twilight/features/video-preview-card/models/preview-card-video-fragment.gql"\nquery LatestVideosFromFollowedCarousel_CurrentUser {\ncurrentUser {\nid\nfollowedVideos(first: 30 sort: TIME) {\nedges {\nnode {\n...PreviewCardVideo\n}\n}\n}\n}\n}',
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
        }(n("qjMx").definitions)), e.exports = i
    },
    GJxf: function(e, t, n) {
        "use strict";
        var i, r, o = n("RH2O"),
            a = n("TToO"),
            s = n("HW6M"),
            d = n("KSGD"),
            c = n("U7vG"),
            l = n("6sO2"),
            u = n("vH/s"),
            p = n("CSlQ"),
            m = n("81qH"),
            v = n("Odds"),
            h = (n("yF7E"), "carousel-content"),
            f = 10,
            g = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        currentElementIndex: 0,
                        childrenRendered: !1,
                        hasTrackedItemSectionLoad: !1
                    }, t.onPreviewCardClick = function(e) {
                        if (t.props.videos) {
                            var n = t.props.videos[e];
                            l.m.trackItemSectionClick(a.__assign({
                                carousel_content: t.props.tracking.content,
                                item_id: n.id,
                                item_index: e,
                                item_type: u.TwitchDataType.Video,
                                item_viewcount: n.viewCount,
                                location: t.props.tracking.location
                            }, t.props.tracking.source))
                        }
                    }, t.getVideoCards = function() {
                        var e = t.props.videos;
                        if (null === e) {
                            for (var n = [], i = 0; i < f; i++) n.push(c.createElement(m.VideoPreviewCardPlaceholder, {
                                key: "carousel-placeholder-" + i
                            }));
                            return n
                        }
                        for (var r = [], o = 0; o < e.length; o++)
                            if (o < f || t.props.firstPageLoaded) {
                                if (e[o].id === t.props.currentlyWatchingVideoID) continue;
                                r.push(c.createElement(m.VideoPreviewCard, {
                                    collectionID: t.props.collectionID,
                                    onClick: t.onPreviewCardClick,
                                    key: "video-" + o,
                                    tracking: {
                                        content: t.props.tracking.content,
                                        content_index: o,
                                        medium: t.props.tracking.medium
                                    },
                                    overrideImageInteractivity: t.props.overrideCardImageInteractivity,
                                    video: e[o]
                                }))
                            } else r.push(c.createElement(m.VideoPreviewCardPlaceholder, {
                                key: "carousel-placeholder-" + o
                            }));
                        return r
                    }, t.moveCarouselForward = function() {
                        if (!t.isForwardButtonDisabled() && t.props.videos) {
                            var e = t.getNumberOfVisibleElements();
                            t.state.currentElementIndex + 2 * e > t.props.videos.length ? t.setState({
                                currentElementIndex: t.props.videos.length - e
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
                        if (t.props.videos) {
                            var e = 0,
                                n = t.carouselContainerRef.querySelector("[data-js-selector=" + h + "]");
                            return n && (e = n.childElementCount), t.getLastVisibleIndex() >= e
                        }
                        return !0
                    }, t.isBackButtonDisabled = function() {
                        return 0 === t.state.currentElementIndex
                    }, t.getLastVisibleIndex = function() {
                        return t.state.currentElementIndex + t.getNumberOfVisibleElements()
                    }, t.getNumberOfVisibleElements = function() {
                        var e = t.carouselContainerRef.getBoundingClientRect(),
                            n = e.left,
                            i = e.right - n,
                            r = t.getVideoCardEndPadding();
                        return Math.floor((i + r) / t.getChildWidth())
                    }, t.refHandler = function(e) {
                        return t.carouselContainerRef = e
                    }, t.getChildWidth = function() {
                        if (!t.carouselContainerRef) return 0;
                        var e = t.carouselContainerRef.querySelector("[data-js-selector=" + h + "]");
                        return e && e.children.length ? e.children[0].getBoundingClientRect().width : 0
                    }, t.getVideoCardEndPadding = function() {
                        var e = t.carouselContainerRef.querySelector("[data-js-selector=" + h + "]");
                        if (!e || 0 === e.children.length) return 0;
                        var n = window.getComputedStyle(e.children[0]).paddingRight || "";
                        return 2 * parseInt(n, 10) || 0
                    }, t.pixelOffset = function() {
                        return t.getChildWidth() * t.state.currentElementIndex * -1
                    }, t.transformString = function() {
                        return "translate3d(" + t.pixelOffset() + "px, 0px, 0px)"
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    var e = this.context.registerReceiver;
                    e && (this.unregisterScrollHandler = e(this)), null !== this.props.videos && this.onDataLoaded()
                }, t.prototype.componentDidUpdate = function(e) {
                    !e.videos && this.props.videos && this.onDataLoaded()
                }, t.prototype.componentWillUnmount = function() {
                    this.unregisterScrollHandler && this.unregisterScrollHandler()
                }, t.prototype.render = function() {
                    return c.createElement(v.V, a.__assign({}, this.props, {
                        margin: {
                            bottom: 2,
                            top: 1
                        },
                        position: v._8.Relative
                    }), c.createElement("div", {
                        className: "video-carousel",
                        ref: this.refHandler
                    }, c.createElement(v._1, {
                        className: "video-carousel__child-container",
                        overflow: v._4.Hidden,
                        position: v._8.Relative,
                        fullWidth: !0,
                        "data-test-selector": "child-container"
                    }, c.createElement(v.V, {
                        margin: {
                            bottom: 3
                        }
                    }, c.createElement("div", {
                        className: "video-carousel__body",
                        style: {
                            transform: this.transformString()
                        },
                        "data-test-selector": "carousel-body"
                    }, c.createElement(v._38, {
                        noWrap: !0,
                        noGrow: !0,
                        childWidth: this.props.videoCardSize || v._39.Large,
                        gutterSize: v._40.Small,
                        "data-js-selector": h
                    }, this.getVideoCards())))), c.createElement(v._1, {
                        className: "video-carousel__nav",
                        display: v.M.Flex,
                        alignItems: v.c.Center,
                        position: v._8.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        fullHeight: !0
                    }, c.createElement(b, {
                        direction: k.DirectionPrevious,
                        disabled: !this.state.childrenRendered || this.isBackButtonDisabled(),
                        onClickHandler: this.moveCarouselBackward
                    })), c.createElement(v._1, {
                        className: "video-carousel__nav",
                        display: v.M.Flex,
                        alignItems: v.c.Center,
                        position: v._8.Absolute,
                        attachTop: !0,
                        attachRight: !0,
                        fullHeight: !0
                    }, c.createElement(b, {
                        direction: k.DirectionNext,
                        disabled: !this.state.childrenRendered || this.isForwardButtonDisabled(),
                        onClickHandler: this.moveCarouselForward
                    }))))
                }, t.prototype.checkVisible = function(e) {
                    this.props.videos && this.props.videos.length > 0 && !1 === this.state.hasTrackedItemSectionLoad && function(e) {
                        if (!e) return !1;
                        var t = e.getBoundingClientRect(),
                            n = window.innerWidth,
                            i = window.innerHeight;
                        return !(t.right < 0 || t.bottom < 0 || t.left > n || t.top > i)
                    }(this.carouselContainerRef) && this.trackSectionLoad()
                }, t.prototype.trackSectionLoad = function() {
                    for (var e = this.props.videos ? this.props.videos : [], t = [], n = [], i = 0, r = e; i < r.length; i++) {
                        var o = r[i];
                        t.push(o.id), n.push(o.viewCount)
                    }
                    l.m.trackItemSectionLoad(a.__assign({
                        carousel_content: this.props.tracking.content,
                        location: this.props.tracking.location,
                        rendered_item_count: e.length,
                        rendered_item_list: t,
                        rendered_item_types: [u.TwitchDataType.Video],
                        rendered_items_viewcounts: n
                    }, this.props.tracking.source)), this.setState({
                        hasTrackedItemSectionLoad: !0
                    })
                }, t.prototype.onDataLoaded = function() {
                    var e = this;
                    this.state.childrenRendered || this.setState({
                        childrenRendered: !0
                    }, function() {
                        e.checkVisible()
                    })
                }, t.contextTypes = {
                    registerReceiver: d.func
                }, t
            }(c.Component),
            k = {
                DirectionPrevious: "previous",
                DirectionNext: "next"
            },
            _ = (i = {}, i[k.DirectionPrevious] = "previous", i[k.DirectionNext] = "next", i),
            C = (r = {}, r[k.DirectionPrevious] = v._15.AngleLeft, r[k.DirectionNext] = v._15.AngleRight, r),
            b = function(e) {
                var t = _[e.direction],
                    n = (r = {}, r[k.DirectionPrevious] = Object(l.d)("previous", "CarouselNavButton"), r[k.DirectionNext] = Object(l.d)("next", "CarouselNavButton"), r),
                    i = s("video-carousel__button", "video-carousel__button--" + t, {
                        "video-carousel__button--disabled": e.disabled
                    });
                return c.createElement(v._1, {
                    className: i,
                    position: v._8.Relative,
                    display: v.M.Flex,
                    alignItems: v.c.Stretch
                }, c.createElement(v.v, {
                    "data-test-selector": t + "-button",
                    onClick: e.onClickHandler,
                    disabled: e.disabled,
                    ariaLabel: n[e.direction],
                    icon: C[e.direction],
                    size: v.x.Large
                }));
                var r
            },
            S = Object(p.d)("VideoCarousel", {
                autoReportInteractive: !0
            })(g);
        n.d(t, "a", function() {
            return w
        });
        var w = Object(o.b)(function(e) {
            return {
                firstPageLoaded: e.session.firstPageLoaded
            }
        })(S)
    },
    IwGL: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n.d(t, "LatestVideosFromFollowedCarouselComponent", function() {
            return m
        }), n.d(t, "LatestVideosFromFollowedCarousel", function() {
            return v
        });
        var i = n("TToO"),
            r = n("U7vG"),
            o = (n.n(r), n("3zLD")),
            a = (n.n(o), n("6sO2")),
            s = n("7vx8"),
            d = n("CSlQ"),
            c = n("GJxf"),
            l = n("dc2a"),
            u = n("Odds"),
            p = n("97Ye"),
            m = (n.n(p), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.componentDidUpdate = function() {
                    this.props.data.loading || this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.data && !this.props.data.loading && this.props.data.currentUser && Object(l.a)(this.props.data.currentUser.followedVideos) || null;
                    return !this.props.data || this.props.data.loading || e && 0 !== e.length ? r.createElement(u._1, null, r.createElement(u._1, {
                        padding: {
                            bottom: 1
                        }
                    }, r.createElement(u._27, {
                        type: u._32.H4,
                        fontSize: u.Q.Size5,
                        transform: u._31.Uppercase,
                        color: u.I.Alt2
                    }, Object(a.d)("Latest videos", "LatestVideosFromFollowedCarousel"))), r.createElement(c.a, {
                        currentlyWatchingVideoID: this.props.currentlyWatchingVideoID,
                        overrideCardImageInteractivity: !0,
                        tracking: {
                            content: this.props.tracking.content,
                            location: this.props.tracking.location,
                            medium: this.props.tracking.medium,
                            source: {}
                        },
                        videoCardSize: u._39.Medium,
                        videos: e
                    })) : null
                }, t
            }(r.Component)),
            v = Object(o.compose)(Object(s.a)(p), Object(d.d)("LatestVideosFromFollowedCarousel"))(m)
    },
    dc2a: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            if (!e || 0 === e.edges.length) return [];
            var t = [];
            return e.edges.forEach(function(e) {
                e.node.id && t.push(e.node)
            }), t
        }
    },
    yF7E: function(e, t) {}
});
//# sourceMappingURL=features.video-carousel.components.latest-videos-from-followed-carousel.component-0cce31db90e8020f3d1002f68bb4a12b.js.map