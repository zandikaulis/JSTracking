webpackJsonp([54], {
    1076: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return p
        });
        var r, a = n(0),
            i = n(4),
            o = (n.n(i), n(1)),
            l = (n.n(o), n(2)),
            s = n(5),
            d = n(3),
            c = n(1077),
            u = (n.n(c), "[data-js-selector=carousel-content]");
        ! function(e) {
            e.Previous = "previous", e.Next = "next"
        }(r || (r = {}));
        var m, g = (m = {}, m[r.Previous] = d._9.AngleLeft, m[r.Next] = d._9.AngleRight, m),
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
                            for (var e = t.getCarouselChildren(), n = t.getCarouselWidth(), r = t.state.currentElementIndex + 1, a = r; a < e.length; a++) {
                                if (e[a].getBoundingClientRect().right - t.getBaseOffset() > n) {
                                    r = a;
                                    break
                                }
                            }
                            t.setState({
                                currentElementIndex: r
                            })
                        }
                    }, t.moveCarouselBackward = function() {
                        if (!t.isBackButtonDisabled()) {
                            for (var e = t.getCarouselChildren(), n = t.getCarouselWidth(), r = t.state.currentElementIndex - 1, a = r - 1; a >= 0; a--) {
                                if (n < -1 * (e[a].getBoundingClientRect().left - t.getBaseOffset())) break;
                                r = a
                            }
                            t.setState({
                                currentElementIndex: r
                            })
                        }
                    }, t.isForwardButtonDisabled = function() {
                        if (!t.carouselContainerRef) return !0;
                        if (t.props.items) {
                            var e = t.getCarouselWidth(),
                                n = t.getCarouselChildren();
                            if (t.state.currentElementIndex >= n.length - 1) return !0;
                            var r = n[t.state.currentElementIndex].getBoundingClientRect().left;
                            if (n[n.length - 1].getBoundingClientRect().right - r > e) return !1
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
                        var n = t.getCarouselChildren();
                        return 0 === n.length || n.length <= e ? 0 : n[e].getBoundingClientRect().left
                    }, t.transformString = function() {
                        return -1 * (t.getChildOffset(t.state.currentElementIndex) - t.getSliderOffset()) + "px"
                    }, t.refHandler = function(e) {
                        return t.state.childrenRendered || null === t.props.items || t.setState({
                            childrenRendered: !0
                        }), t.carouselContainerRef = e
                    }, t.renderNavButton = function(e, n, a) {
                        var s = (u = {}, u[r.Previous] = Object(l.d)("previous", "MediaCarouselNavButton"), u[r.Next] = Object(l.d)("next", "MediaCarouselNavButton"), u),
                            c = i("media-carousel__button", {
                                "media-carousel__button--previous": e === r.Previous,
                                "media-carousel__button--next": e === r.Next,
                                "media-carousel__button--disabled": n
                            }, {
                                "media-carousel__button--inset": !0 === t.props.insetStyle
                            });
                        return o.createElement(d.U, {
                            className: c,
                            position: d._2.Relative,
                            display: d.H.Flex,
                            alignItems: d.c.Stretch
                        }, o.createElement(d.v, {
                            "data-test-selector": e + "-button",
                            "data-a-target": e + "-button",
                            onClick: a,
                            disabled: n,
                            ariaLabel: s[e],
                            icon: g[e],
                            size: d.x.Large
                        }));
                        var u
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
                    return o.createElement(d.P, a.__assign({}, this.props, {
                        position: d._2.Relative
                    }), o.createElement("div", {
                        className: "media-carousel",
                        ref: this.refHandler,
                        "data-test-selector": "carousel-container"
                    }, o.createElement(d.U, {
                        className: "media-carousel__child-container",
                        overflow: d.Y.Hidden,
                        fullWidth: !0,
                        "data-test-selector": "child-container"
                    }, o.createElement("div", {
                        className: "media-carousel__body",
                        style: {
                            marginLeft: this.transformString()
                        },
                        "data-test-selector": "carousel-body"
                    }, o.createElement(d.P, {
                        className: "media-carousel__content",
                        display: d.H.Flex,
                        flexWrap: d.K.NoWrap,
                        flexDirection: d.J.Row,
                        alignItems: d.c.Center,
                        "data-js-selector": "carousel-content"
                    }, o.createElement("div", {
                        style: {
                            width: "max-content"
                        }
                    }, this.props.items)))), o.createElement(d.U, {
                        className: "media-carousel__nav",
                        display: d.H.Flex,
                        alignItems: d.c.Center,
                        position: d._2.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        fullHeight: !0
                    }, this.renderNavButton(r.Previous, !this.state.childrenRendered || this.isBackButtonDisabled(), this.moveCarouselBackward)), o.createElement(d.U, {
                        className: "media-carousel__nav",
                        display: d.H.Flex,
                        alignItems: d.c.Center,
                        position: d._2.Absolute,
                        attachTop: !0,
                        attachRight: !0,
                        fullHeight: !0
                    }, this.renderNavButton(r.Next, !this.state.childrenRendered || this.isForwardButtonDisabled(), this.moveCarouselForward))))
                }, t = a.__decorate([Object(s.c)("MediaCarousel", {
                    autoReportInteractive: !0
                })], t)
            }(o.Component),
            p = h
    },
    1077: function(e, t) {},
    1900: function(e, t) {},
    2069: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(0),
            a = n(1),
            i = n(28),
            o = n(1076),
            l = n(3),
            s = (n(1900), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {}, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(i.b, null, a.createElement(l.U, {
                        className: "testing-carousel",
                        padding: 3
                    }, a.createElement(l._21, {
                        type: l._26.H2
                    }, "Media Carousel - Standard"), a.createElement(l.U, {
                        "data-a-target": "carousel-standard"
                    }, a.createElement(l.P, {
                        margin: {
                            bottom: 3,
                            top: 1
                        }
                    }, a.createElement(o.a, {
                        items: this.renderStandardItems()
                    }))), a.createElement(l._21, {
                        type: l._26.H2
                    }, "Media Carousel - Tiny"), a.createElement(l.U, {
                        "data-a-target": "carousel-standard-tiny"
                    }, a.createElement(l.P, {
                        margin: {
                            bottom: 3,
                            top: 1
                        }
                    }, a.createElement(o.a, {
                        items: this.renderStandardTinyItems()
                    }))), a.createElement(l._21, {
                        type: l._26.H2
                    }, "Media Carousel - HUGE"), a.createElement(l.U, {
                        "data-a-target": "carousel-standard-huge"
                    }, a.createElement(l.P, {
                        margin: {
                            bottom: 3,
                            top: 1
                        }
                    }, a.createElement(o.a, {
                        items: this.renderStandardHugeItems()
                    }))), a.createElement(l._21, {
                        type: l._26.H2
                    }, "Media Carousel - Single"), a.createElement(l.U, {
                        "data-a-target": "carousel-single"
                    }, a.createElement(l.P, {
                        margin: {
                            bottom: 3,
                            top: 1
                        }
                    }, a.createElement(o.a, {
                        items: this.renderSingleItem()
                    }))), a.createElement(l._21, {
                        type: l._26.H2
                    }, "Media Carousel - Single and HUGE"), a.createElement(l.U, {
                        "data-a-target": "carousel-single-huge"
                    }, a.createElement(l.P, {
                        margin: {
                            bottom: 3,
                            top: 1
                        }
                    }, a.createElement(o.a, {
                        items: this.renderSingleHugeItem()
                    }))), a.createElement(l._21, {
                        type: l._26.H2
                    }, "Media Carousel - Various Widths"), a.createElement(l.U, {
                        "data-a-target": "carousel-various-widths"
                    }, a.createElement(l.P, {
                        margin: {
                            bottom: 3,
                            top: 1
                        }
                    }, a.createElement(o.a, {
                        items: this.renderVariousWidthItems()
                    })))))
                }, t.prototype.renderStandardItems = function() {
                    return [0, 1, 2, 3, 4, 5, 6, 7, 8].map(function(e) {
                        return a.createElement(l.U, {
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
                        }, a.createElement(l._21, {
                            type: l._26.H1,
                            color: l.F.Overlay
                        }, e)))
                    })
                }, t.prototype.renderStandardTinyItems = function() {
                    return [0, 1, 2].map(function(e) {
                        return a.createElement(l.U, {
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
                        }, a.createElement(l._21, {
                            type: l._26.H1,
                            color: l.F.Overlay
                        }, e)))
                    })
                }, t.prototype.renderStandardHugeItems = function() {
                    return [0, 1, 2, 3, 4, 5, 6, 7, 8].map(function(e) {
                        return a.createElement(l.U, {
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
                        }, a.createElement(l._21, {
                            type: l._26.H1,
                            color: l.F.Overlay
                        }, e)))
                    })
                }, t.prototype.renderSingleItem = function() {
                    return [0].map(function(e) {
                        return a.createElement(l.U, {
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
                        }, a.createElement(l._21, {
                            type: l._26.H1,
                            color: l.F.Overlay
                        }, e)))
                    })
                }, t.prototype.renderSingleHugeItem = function() {
                    return [0].map(function(e) {
                        return a.createElement(l.U, {
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
                        }, a.createElement(l._21, {
                            type: l._26.H1,
                            color: l.F.Overlay
                        }, e)))
                    })
                }, t.prototype.renderVariousWidthItems = function() {
                    return [0, 1, 2, 3, 4, 5, 6, 7, 8].map(function(e) {
                        return a.createElement(l.U, {
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
                        }, a.createElement(l._21, {
                            type: l._26.H1,
                            color: l.F.Overlay
                        }, e)))
                    })
                }, t
            }(a.Component)),
            d = s;
        n.d(t, "DevOnlyTestingCarouselPage", function() {
            return d
        })
    }
});
//# sourceMappingURL=pages.dev-only-testing-carousel-85a66f6278cb921373cd88ec0ae87bfa.js.map