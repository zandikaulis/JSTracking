webpackJsonp([53], {
    IzAE: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r("TToO"),
            a = r("U7vG"),
            i = r("zCIC"),
            o = r("KqsW"),
            l = r("Odds"),
            s = (r("WWVW"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {}, t
                }
                return n.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(i.b, null, a.createElement(l.U, {
                        className: "testing-carousel",
                        padding: 3
                    }, a.createElement(l._22, {
                        type: l._27.H2
                    }, "Media Carousel - Standard"), a.createElement(l.U, {
                        "data-a-target": "carousel-standard"
                    }, a.createElement(l.P, {
                        margin: {
                            bottom: 3,
                            top: 1
                        }
                    }, a.createElement(o.a, {
                        items: this.renderStandardItems()
                    }))), a.createElement(l._22, {
                        type: l._27.H2
                    }, "Media Carousel - Tiny"), a.createElement(l.U, {
                        "data-a-target": "carousel-standard-tiny"
                    }, a.createElement(l.P, {
                        margin: {
                            bottom: 3,
                            top: 1
                        }
                    }, a.createElement(o.a, {
                        items: this.renderStandardTinyItems()
                    }))), a.createElement(l._22, {
                        type: l._27.H2
                    }, "Media Carousel - HUGE"), a.createElement(l.U, {
                        "data-a-target": "carousel-standard-huge"
                    }, a.createElement(l.P, {
                        margin: {
                            bottom: 3,
                            top: 1
                        }
                    }, a.createElement(o.a, {
                        items: this.renderStandardHugeItems()
                    }))), a.createElement(l._22, {
                        type: l._27.H2
                    }, "Media Carousel - Single"), a.createElement(l.U, {
                        "data-a-target": "carousel-single"
                    }, a.createElement(l.P, {
                        margin: {
                            bottom: 3,
                            top: 1
                        }
                    }, a.createElement(o.a, {
                        items: this.renderSingleItem()
                    }))), a.createElement(l._22, {
                        type: l._27.H2
                    }, "Media Carousel - Single and HUGE"), a.createElement(l.U, {
                        "data-a-target": "carousel-single-huge"
                    }, a.createElement(l.P, {
                        margin: {
                            bottom: 3,
                            top: 1
                        }
                    }, a.createElement(o.a, {
                        items: this.renderSingleHugeItem()
                    }))), a.createElement(l._22, {
                        type: l._27.H2
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
                        }, a.createElement(l._22, {
                            type: l._27.H1,
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
                        }, a.createElement(l._22, {
                            type: l._27.H1,
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
                        }, a.createElement(l._22, {
                            type: l._27.H1,
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
                        }, a.createElement(l._22, {
                            type: l._27.H1,
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
                        }, a.createElement(l._22, {
                            type: l._27.H1,
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
                        }, a.createElement(l._22, {
                            type: l._27.H1,
                            color: l.F.Overlay
                        }, e)))
                    })
                }, t
            }(a.Component));
        r.d(t, "DevOnlyTestingCarouselPage", function() {
            return s
        })
    },
    KqsW: function(e, t, r) {
        "use strict";
        r.d(t, "a", function() {
            return h
        });
        var n, a = r("TToO"),
            i = r("HW6M"),
            o = (r.n(i), r("U7vG")),
            l = (r.n(o), r("6sO2")),
            s = r("CSlQ"),
            d = r("Odds"),
            c = r("M4d4"),
            u = (r.n(c), "[data-js-selector=carousel-content]");
        ! function(e) {
            e.Previous = "previous", e.Next = "next"
        }(n || (n = {}));
        var m, g = (m = {}, m[n.Previous] = d._10.AngleLeft, m[n.Next] = d._10.AngleRight, m),
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
                        if (!e || !e.children.length) return [];
                        return Array.prototype.slice.call(e.children)
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
                        return -1 * (t.getChildOffset(t.state.currentElementIndex) - t.getSliderOffset()) + "px"
                    }, t.refHandler = function(e) {
                        return t.state.childrenRendered || null === t.props.items || t.setState({
                            childrenRendered: !0
                        }), t.carouselContainerRef = e
                    }, t.renderNavButton = function(e, r, a) {
                        var s = (u = {}, u[n.Previous] = Object(l.d)("previous", "MediaCarouselNavButton"), u[n.Next] = Object(l.d)("next", "MediaCarouselNavButton"), u),
                            c = i("media-carousel__button", {
                                "media-carousel__button--previous": e === n.Previous,
                                "media-carousel__button--next": e === n.Next,
                                "media-carousel__button--disabled": r
                            }, {
                                "media-carousel__button--inset": !0 === t.props.insetStyle
                            });
                        return o.createElement(d.U, {
                            className: c,
                            position: d._3.Relative,
                            display: d.H.Flex,
                            alignItems: d.c.Stretch
                        }, o.createElement(d.v, {
                            "data-test-selector": e + "-button",
                            "data-a-target": e + "-button",
                            onClick: a,
                            disabled: r,
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
                        position: d._3.Relative
                    }), o.createElement("div", {
                        className: "media-carousel",
                        ref: this.refHandler,
                        "data-test-selector": "carousel-container"
                    }, o.createElement(d.U, {
                        className: "media-carousel__child-container",
                        overflow: d.Z.Hidden,
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
                        position: d._3.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        fullHeight: !0
                    }, this.renderNavButton(n.Previous, !this.state.childrenRendered || this.isBackButtonDisabled(), this.moveCarouselBackward)), o.createElement(d.U, {
                        className: "media-carousel__nav",
                        display: d.H.Flex,
                        alignItems: d.c.Center,
                        position: d._3.Absolute,
                        attachTop: !0,
                        attachRight: !0,
                        fullHeight: !0
                    }, this.renderNavButton(n.Next, !this.state.childrenRendered || this.isForwardButtonDisabled(), this.moveCarouselForward))))
                }, t = a.__decorate([Object(s.c)("MediaCarousel", {
                    autoReportInteractive: !0
                })], t)
            }(o.Component)
    },
    M4d4: function(e, t) {},
    WWVW: function(e, t) {}
});
//# sourceMappingURL=pages.dev-only-testing-carousel-73940c0b932b4c06963a9c7950232512.js.map