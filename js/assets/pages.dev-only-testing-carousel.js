webpackJsonp([58], {
    1377: function(e, t, r) {
        "use strict";
        r.d(t, "a", function() {
            return p
        });
        var n, a = r(0),
            i = r(4),
            l = (r.n(i), r(1)),
            o = (r.n(l), r(2)),
            s = r(5),
            d = r(3),
            c = r(1378),
            u = (r.n(c), "[data-js-selector=carousel-content]");
        ! function(e) {
            e.Previous = "previous", e.Next = "next"
        }(n || (n = {}));
        var m, g = (m = {}, m[n.Previous] = d._9.AngleLeft, m[n.Next] = d._9.AngleRight, m),
            h = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        currentElementIndex: 0,
                        childrenRendered: !1,
                        windowWidth: window.innerWidth
                    }, t.onResize = function() {
                        t.setState({
                            windowWidth: window.innerWidth
                        })
                    }, t.moveCarouselForward = function() {
                        if (!t.isForwardButtonDisabled() && t.props.items) {
                            for (var e = t.getCarouselChildren(), r = t.getCarouselWidth(), n = t.state.currentElementIndex + 1, a = n; a < e.length; a++) {
                                if (e[a].getBoundingClientRect().right - t.getBaseOffset() > r) {
                                    n = a;
                                    break
                                }
                            }
                            t.setState({
                                currentElementIndex: n
                            })
                        }
                    }, t.moveCarouselBackward = function() {
                        if (!t.isBackButtonDisabled()) {
                            for (var e = t.getCarouselChildren(), r = t.getCarouselWidth(), n = t.state.currentElementIndex - 1, a = n - 1; a >= 0; a--) {
                                if (r < -1 * (e[a].getBoundingClientRect().left - t.getBaseOffset())) break;
                                n = a
                            }
                            t.setState({
                                currentElementIndex: n
                            })
                        }
                    }, t.isForwardButtonDisabled = function() {
                        if (!t.carouselContainerRef) return !0;
                        if (t.props.items) {
                            var e = t.getCarouselWidth(),
                                r = t.getCarouselChildren();
                            if (t.state.currentElementIndex >= r.length - 1) return !0;
                            var n = r[t.state.currentElementIndex].getBoundingClientRect().left;
                            if (r[r.length - 1].getBoundingClientRect().right - n > e) return !1
                        }
                        return !0
                    }, t.isBackButtonDisabled = function() {
                        return 0 === t.state.currentElementIndex
                    }, t.getCarouselChildren = function() {
                        if (!t.carouselContainerRef) return [];
                        var e = t.getCarouselSlider();
                        return e && e.children.length ? Array.prototype.slice.call(e.children) : []
                    }, t.getCarouselSlider = function() {
                        return t.carouselContainerRef.querySelector(u)
                    }, t.getCarouselWidth = function() {
                        return t.carouselContainerRef ? t.carouselContainerRef.getBoundingClientRect().width : 0
                    }, t.getBaseOffset = function() {
                        return t.carouselContainerRef ? t.carouselContainerRef.getBoundingClientRect().left : 0
                    }, t.getSliderOffset = function() {
                        if (!t.carouselContainerRef) return 0;
                        var e = t.getCarouselSlider();
                        return e ? e.getBoundingClientRect().left : 0
                    }, t.getChildOffset = function(e) {
                        var r = t.getCarouselChildren();
                        return 0 === r.length || r.length <= e ? 0 : r[e].getBoundingClientRect().left
                    }, t.transformString = function() {
                        return "translate3d(" + -1 * (t.getChildOffset(t.state.currentElementIndex) - t.getSliderOffset()) + "px, 0px, 0px)"
                    }, t.refHandler = function(e) {
                        return t.state.childrenRendered || null === t.props.items || t.setState({
                            childrenRendered: !0
                        }), t.carouselContainerRef = e
                    }, t.renderNavButton = function(e, t, r) {
                        var a = (c = {}, c[n.Previous] = Object(o.d)("previous", "MediaCarouselNavButton"), c[n.Next] = Object(o.d)("next", "MediaCarouselNavButton"), c),
                            s = i("media-carousel__button", {
                                "media-carousel__button--previous": e === n.Previous,
                                "media-carousel__button--next": e === n.Next,
                                "media-carousel__button--disabled": t
                            });
                        return l.createElement(d.U, {
                            className: s,
                            position: d._2.Relative,
                            display: d.H.Flex,
                            alignItems: d.c.Stretch
                        }, l.createElement(d.v, {
                            "data-test-selector": e + "-button",
                            "data-a-target": e + "-button",
                            onClick: r,
                            disabled: t,
                            ariaLabel: a[e],
                            icon: g[e],
                            size: d.x.Large
                        }));
                        var c
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidUpdate = function() {
                    this.state.childrenRendered || null === this.props.items || this.setState({
                        childrenRendered: !0
                    })
                }, t.prototype.componentDidMount = function() {
                    window.addEventListener("resize", this.onResize)
                }, t.prototype.componentWillUnmount = function() {
                    window.removeEventListener("resize", this.onResize)
                }, t.prototype.render = function() {
                    return l.createElement(d.P, a.__assign({}, this.props, {
                        margin: {
                            bottom: 3,
                            top: 1
                        },
                        position: d._2.Relative
                    }), l.createElement("div", {
                        className: "media-carousel",
                        ref: this.refHandler,
                        "data-test-selector": "carousel-container"
                    }, l.createElement(d.U, {
                        className: "media-carousel__child-container",
                        overflow: d.Y.Hidden,
                        position: d._2.Relative,
                        fullWidth: !0,
                        "data-test-selector": "child-container"
                    }, l.createElement("div", {
                        className: "media-carousel__body",
                        style: {
                            transform: this.transformString()
                        },
                        "data-test-selector": "carousel-body"
                    }, l.createElement(d.P, {
                        className: "media-carousel__content",
                        display: d.H.Flex,
                        flexWrap: d.K.NoWrap,
                        flexDirection: d.J.Row,
                        "data-js-selector": "carousel-content"
                    }, l.createElement("div", {
                        style: {
                            width: "max-content"
                        }
                    }, this.props.items)))), l.createElement(d.U, {
                        className: "media-carousel__nav",
                        display: d.H.Flex,
                        alignItems: d.c.Center,
                        position: d._2.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        fullHeight: !0
                    }, this.renderNavButton(n.Previous, !this.state.childrenRendered || this.isBackButtonDisabled(), this.moveCarouselBackward)), l.createElement(d.U, {
                        className: "media-carousel__nav",
                        display: d.H.Flex,
                        alignItems: d.c.Center,
                        position: d._2.Absolute,
                        attachTop: !0,
                        attachRight: !0,
                        fullHeight: !0
                    }, this.renderNavButton(n.Next, !this.state.childrenRendered || this.isForwardButtonDisabled(), this.moveCarouselForward))))
                }, t = a.__decorate([Object(s.c)("MediaCarousel", {
                    autoReportInteractive: !0
                })], t)
            }(l.Component),
            p = h
    },
    1378: function(e, t) {},
    1867: function(e, t) {},
    2058: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(0),
            a = r(1),
            i = r(28),
            l = r(1377),
            o = r(3),
            s = (r(1867), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {}, t
                }
                return n.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(i.b, null, a.createElement(o.U, {
                        className: "testing-carousel",
                        padding: 3
                    }, a.createElement(o._21, {
                        type: o._26.H2
                    }, "Media Carousel - Standard"), a.createElement(o.U, {
                        "data-a-target": "carousel-standard"
                    }, a.createElement(l.a, {
                        items: this.renderStandardItems()
                    })), a.createElement(o._21, {
                        type: o._26.H2
                    }, "Media Carousel - Tiny"), a.createElement(o.U, {
                        "data-a-target": "carousel-standard-tiny"
                    }, a.createElement(l.a, {
                        items: this.renderStandardTinyItems()
                    })), a.createElement(o._21, {
                        type: o._26.H2
                    }, "Media Carousel - HUGE"), a.createElement(o.U, {
                        "data-a-target": "carousel-standard-huge"
                    }, a.createElement(l.a, {
                        items: this.renderStandardHugeItems()
                    })), a.createElement(o._21, {
                        type: o._26.H2
                    }, "Media Carousel - Single"), a.createElement(o.U, {
                        "data-a-target": "carousel-single"
                    }, a.createElement(l.a, {
                        items: this.renderSingleItem()
                    })), a.createElement(o._21, {
                        type: o._26.H2
                    }, "Media Carousel - Single and HUGE"), a.createElement(o.U, {
                        "data-a-target": "carousel-single-huge"
                    }, a.createElement(l.a, {
                        items: this.renderSingleHugeItem()
                    })), a.createElement(o._21, {
                        type: o._26.H2
                    }, "Media Carousel - Various Widths"), a.createElement(o.U, {
                        "data-a-target": "carousel-various-widths"
                    }, a.createElement(l.a, {
                        items: this.renderVariousWidthItems()
                    }))))
                }, t.prototype.renderStandardItems = function() {
                    return [0, 1, 2, 3, 4, 5, 6, 7, 8].map(function(e) {
                        return a.createElement(o.U, {
                            key: "placeholder-" + e,
                            padding: {
                                right: 2
                            },
                            "data-a-target": "standard-item-" + e
                        }, a.createElement("div", {
                            className: "testing-carousel__item",
                            style: {
                                width: 200,
                                height: 100
                            }
                        }, a.createElement(o._21, {
                            type: o._26.H1,
                            color: o.F.Overlay
                        }, e)))
                    })
                }, t.prototype.renderStandardTinyItems = function() {
                    return [0, 1, 2].map(function(e) {
                        return a.createElement(o.U, {
                            key: "placeholder-" + e,
                            padding: {
                                right: 2
                            },
                            "data-a-target": "standard-tiny-item-" + e
                        }, a.createElement("div", {
                            className: "testing-carousel__item",
                            style: {
                                width: 20,
                                height: 100
                            }
                        }, a.createElement(o._21, {
                            type: o._26.H1,
                            color: o.F.Overlay
                        }, e)))
                    })
                }, t.prototype.renderStandardHugeItems = function() {
                    return [0, 1, 2, 3, 4, 5, 6, 7, 8].map(function(e) {
                        return a.createElement(o.U, {
                            key: "placeholder-" + e,
                            padding: {
                                right: 2
                            },
                            "data-a-target": "standard-huge-item-" + e
                        }, a.createElement("div", {
                            className: "testing-carousel__item",
                            style: {
                                width: 2e3,
                                height: 100
                            }
                        }, a.createElement(o._21, {
                            type: o._26.H1,
                            color: o.F.Overlay
                        }, e)))
                    })
                }, t.prototype.renderSingleItem = function() {
                    return [0].map(function(e) {
                        return a.createElement(o.U, {
                            key: "placeholder-" + e,
                            padding: {
                                right: 2
                            },
                            "data-a-target": "single-item-" + e
                        }, a.createElement("div", {
                            className: "testing-carousel__item",
                            style: {
                                width: 200,
                                height: 100
                            }
                        }, a.createElement(o._21, {
                            type: o._26.H1,
                            color: o.F.Overlay
                        }, e)))
                    })
                }, t.prototype.renderSingleHugeItem = function() {
                    return [0].map(function(e) {
                        return a.createElement(o.U, {
                            key: "placeholder-" + e,
                            padding: {
                                right: 2
                            },
                            "data-a-target": "single-huge-item-" + e
                        }, a.createElement("div", {
                            className: "testing-carousel__item",
                            style: {
                                width: 2e3,
                                height: 100
                            }
                        }, a.createElement(o._21, {
                            type: o._26.H1,
                            color: o.F.Overlay
                        }, e)))
                    })
                }, t.prototype.renderVariousWidthItems = function() {
                    return [0, 1, 2, 3, 4, 5, 6, 7, 8].map(function(e) {
                        return a.createElement(o.U, {
                            key: "placeholder-" + e,
                            padding: {
                                right: 2
                            },
                            "data-a-target": "various-width-item-" + e
                        }, a.createElement("div", {
                            className: "testing-carousel__item",
                            style: {
                                width: 30 * (e + 1),
                                height: 100
                            }
                        }, a.createElement(o._21, {
                            type: o._26.H1,
                            color: o.F.Overlay
                        }, e)))
                    })
                }, t
            }(a.Component)),
            d = s;
        r.d(t, "DevOnlyTestingCarouselPage", function() {
            return d
        })
    }
});
//# sourceMappingURL=pages.dev-only-testing-carousel-53dc9253d0b8edbe80779b04b9d7dc92.js.map