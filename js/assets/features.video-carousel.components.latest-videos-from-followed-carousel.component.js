webpackJsonp([82], {
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
        i.definitions = i.definitions.concat(n("qjMx").definitions.filter(function(e) {
            if ("FragmentDefinition" !== e.kind) return !0;
            var t = e.name.value;
            return !r[t] && (r[t] = !0, !0)
        })), e.exports = i
    },
    GJxf: function(e, t, n) {
        "use strict";
        var i = n("RH2O"),
            r = n("TToO"),
            o = n("HW6M"),
            a = n("KSGD"),
            s = n("GiK3"),
            d = n("6sO2"),
            c = n("vH/s"),
            l = n("CSlQ"),
            u = n("81qH"),
            p = n("Odds");
        n("yF7E");
        var m, v, h = "carousel-content",
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
                            d.n.trackItemSectionClick(r.__assign({
                                carousel_content: t.props.tracking.content,
                                item_id: n.id,
                                item_index: e,
                                item_type: c.TwitchDataType.Video,
                                item_viewcount: n.viewCount,
                                location: t.props.tracking.location
                            }, t.props.tracking.source))
                        }
                    }, t.getVideoCards = function() {
                        var e = t.props.videos;
                        if (null === e) {
                            for (var n = [], i = 0; i < f; i++) n.push(s.createElement(u.VideoPreviewCardPlaceholder, {
                                key: "carousel-placeholder-" + i
                            }));
                            return n
                        }
                        for (var r = [], o = 0; o < e.length; o++)
                            if (o < f || t.props.firstPageLoaded) {
                                if (e[o].id === t.props.currentlyWatchingVideoID) continue;
                                r.push(s.createElement(u.VideoPreviewCard, {
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
                            } else r.push(s.createElement(u.VideoPreviewCardPlaceholder, {
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
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    var e = this.context.registerReceiver;
                    e && (this.unregisterScrollHandler = e(this)), null !== this.props.videos && this.onDataLoaded()
                }, t.prototype.componentDidUpdate = function(e) {
                    !e.videos && this.props.videos && this.onDataLoaded()
                }, t.prototype.componentWillUnmount = function() {
                    this.unregisterScrollHandler && this.unregisterScrollHandler()
                }, t.prototype.render = function() {
                    return s.createElement(p.Y, r.__assign({}, this.props, {
                        margin: {
                            bottom: 2,
                            top: 1
                        },
                        position: p._11.Relative
                    }), s.createElement("div", {
                        className: "video-carousel",
                        ref: this.refHandler
                    }, s.createElement(p._4, {
                        className: "video-carousel__child-container",
                        overflow: p._7.Hidden,
                        position: p._11.Relative,
                        fullWidth: !0,
                        "data-test-selector": "child-container"
                    }, s.createElement(p.Y, {
                        margin: {
                            bottom: 3
                        }
                    }, s.createElement("div", {
                        className: "video-carousel__body",
                        style: {
                            transform: this.transformString()
                        },
                        "data-test-selector": "carousel-body"
                    }, s.createElement(p._47, {
                        noWrap: !0,
                        noGrow: !0,
                        childWidth: this.props.videoCardSize || p._48.Large,
                        gutterSize: p._49.Small,
                        "data-js-selector": h
                    }, this.getVideoCards())))), s.createElement(p._4, {
                        className: "video-carousel__nav",
                        display: p.P.Flex,
                        alignItems: p.c.Center,
                        position: p._11.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        fullHeight: !0
                    }, s.createElement(b, {
                        direction: k.DirectionPrevious,
                        disabled: !this.state.childrenRendered || this.isBackButtonDisabled(),
                        onClickHandler: this.moveCarouselBackward
                    })), s.createElement(p._4, {
                        className: "video-carousel__nav",
                        display: p.P.Flex,
                        alignItems: p.c.Center,
                        position: p._11.Absolute,
                        attachTop: !0,
                        attachRight: !0,
                        fullHeight: !0
                    }, s.createElement(b, {
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
                    for (var e = this.props.videos ? this.props.videos : [], t = [], n = [], i = 0, o = e; i < o.length; i++) {
                        var a = o[i];
                        t.push(a.id), n.push(a.viewCount)
                    }
                    d.n.trackItemSectionLoad(r.__assign({
                        carousel_content: this.props.tracking.content,
                        location: this.props.tracking.location,
                        rendered_item_count: e.length,
                        rendered_item_list: t,
                        rendered_item_types: [c.TwitchDataType.Video],
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
                    registerReceiver: a.func
                }, t
            }(s.Component),
            k = {
                DirectionPrevious: "previous",
                DirectionNext: "next"
            },
            C = ((m = {})[k.DirectionPrevious] = "previous", m[k.DirectionNext] = "next", m),
            _ = ((v = {})[k.DirectionPrevious] = p._18.AngleLeft, v[k.DirectionNext] = p._18.AngleRight, v),
            b = function(e) {
                var t, n = C[e.direction],
                    i = ((t = {})[k.DirectionPrevious] = Object(d.d)("previous", "CarouselNavButton"), t[k.DirectionNext] = Object(d.d)("next", "CarouselNavButton"), t),
                    r = o("video-carousel__button", "video-carousel__button--" + n, {
                        "video-carousel__button--disabled": e.disabled
                    });
                return s.createElement(p._4, {
                    className: r,
                    position: p._11.Relative,
                    display: p.P.Flex,
                    alignItems: p.c.Stretch
                }, s.createElement(p.v, {
                    "data-test-selector": n + "-button",
                    onClick: e.onClickHandler,
                    disabled: e.disabled,
                    ariaLabel: i[e.direction],
                    icon: _[e.direction],
                    size: p.w.Large
                }))
            },
            S = Object(l.d)("VideoCarousel", {
                autoReportInteractive: !0
            })(g);
        n.d(t, "a", function() {
            return w
        });
        var w = Object(i.b)(function(e) {
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
            r = n("GiK3"),
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
                    return !this.props.data || this.props.data.loading || e && 0 !== e.length ? r.createElement(u._4, null, r.createElement(u._4, {
                        padding: {
                            bottom: 1
                        }
                    }, r.createElement(u.O, {
                        type: u._41.H4,
                        fontSize: u.T.Size5,
                        transform: u._40.Uppercase,
                        color: u.J.Alt2
                    }, Object(a.d)("Latest videos", "LatestVideosFromFollowedCarousel"))), r.createElement(c.a, {
                        currentlyWatchingVideoID: this.props.currentlyWatchingVideoID,
                        overrideCardImageInteractivity: !0,
                        tracking: {
                            content: this.props.tracking.content,
                            location: this.props.tracking.location,
                            medium: this.props.tracking.medium,
                            source: {}
                        },
                        videoCardSize: u._48.Medium,
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
//# sourceMappingURL=features.video-carousel.components.latest-videos-from-followed-carousel.component-cb472859e3a79302cb122d8f3ac0690a.js.map