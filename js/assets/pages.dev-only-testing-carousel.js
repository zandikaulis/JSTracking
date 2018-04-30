webpackJsonp([76], {
    IzAE: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = a("TToO"),
            n = a("GiK3"),
            i = a("zCIC"),
            l = a("KqsW"),
            d = a("Odds"),
            m = (a("WWVW"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {}, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return n.createElement(i.b, null, n.createElement(d._8, {
                        className: "testing-carousel",
                        padding: 3
                    }, n.createElement(d.Q, {
                        type: d._49.H2
                    }, "Media Carousel - Standard"), n.createElement(d._8, {
                        "data-a-target": "carousel-standard"
                    }, n.createElement(d._2, {
                        margin: {
                            bottom: 3,
                            top: 1
                        }
                    }, n.createElement(l.a, {
                        items: this.renderStandardItems()
                    }))), n.createElement(d.Q, {
                        type: d._49.H2
                    }, "Media Carousel - Tiny"), n.createElement(d._8, {
                        "data-a-target": "carousel-standard-tiny"
                    }, n.createElement(d._2, {
                        margin: {
                            bottom: 3,
                            top: 1
                        }
                    }, n.createElement(l.a, {
                        items: this.renderStandardTinyItems()
                    }))), n.createElement(d.Q, {
                        type: d._49.H2
                    }, "Media Carousel - HUGE"), n.createElement(d._8, {
                        "data-a-target": "carousel-standard-huge"
                    }, n.createElement(d._2, {
                        margin: {
                            bottom: 3,
                            top: 1
                        }
                    }, n.createElement(l.a, {
                        items: this.renderStandardHugeItems()
                    }))), n.createElement(d.Q, {
                        type: d._49.H2
                    }, "Media Carousel - Single"), n.createElement(d._8, {
                        "data-a-target": "carousel-single"
                    }, n.createElement(d._2, {
                        margin: {
                            bottom: 3,
                            top: 1
                        }
                    }, n.createElement(l.a, {
                        items: this.renderSingleItem()
                    }))), n.createElement(d.Q, {
                        type: d._49.H2
                    }, "Media Carousel - Single and HUGE"), n.createElement(d._8, {
                        "data-a-target": "carousel-single-huge"
                    }, n.createElement(d._2, {
                        margin: {
                            bottom: 3,
                            top: 1
                        }
                    }, n.createElement(l.a, {
                        items: this.renderSingleHugeItem()
                    }))), n.createElement(d.Q, {
                        type: d._49.H2
                    }, "Media Carousel - Various Widths"), n.createElement(d._8, {
                        "data-a-target": "carousel-various-widths"
                    }, n.createElement(d._2, {
                        margin: {
                            bottom: 3,
                            top: 1
                        }
                    }, n.createElement(l.a, {
                        items: this.renderVariousWidthItems()
                    })))))
                }, t.prototype.renderStandardItems = function() {
                    return [0, 1, 2, 3, 4, 5, 6, 7, 8].map(function(e) {
                        return n.createElement(d._8, {
                            key: "placeholder-" + e,
                            padding: {
                                right: 2
                            },
                            "data-a-target": "standard-item-" + e
                        }, n.createElement("div", {
                            className: "testing-carousel__item",
                            style: {
                                width: 200,
                                height: 100
                            }
                        }, n.createElement(d.Q, {
                            type: d._49.H1,
                            color: d.K.Overlay
                        }, e)))
                    })
                }, t.prototype.renderStandardTinyItems = function() {
                    return [0, 1, 2].map(function(e) {
                        return n.createElement(d._8, {
                            key: "placeholder-" + e,
                            padding: {
                                right: 2
                            },
                            "data-a-target": "standard-tiny-item-" + e
                        }, n.createElement("div", {
                            className: "testing-carousel__item",
                            style: {
                                width: 20,
                                height: 100
                            }
                        }, n.createElement(d.Q, {
                            type: d._49.H1,
                            color: d.K.Overlay
                        }, e)))
                    })
                }, t.prototype.renderStandardHugeItems = function() {
                    return [0, 1, 2, 3, 4, 5, 6, 7, 8].map(function(e) {
                        return n.createElement(d._8, {
                            key: "placeholder-" + e,
                            padding: {
                                right: 2
                            },
                            "data-a-target": "standard-huge-item-" + e
                        }, n.createElement("div", {
                            className: "testing-carousel__item",
                            style: {
                                width: 2e3,
                                height: 100
                            }
                        }, n.createElement(d.Q, {
                            type: d._49.H1,
                            color: d.K.Overlay
                        }, e)))
                    })
                }, t.prototype.renderSingleItem = function() {
                    return [0].map(function(e) {
                        return n.createElement(d._8, {
                            key: "placeholder-" + e,
                            padding: {
                                right: 2
                            },
                            "data-a-target": "single-item-" + e
                        }, n.createElement("div", {
                            className: "testing-carousel__item",
                            style: {
                                width: 200,
                                height: 100
                            }
                        }, n.createElement(d.Q, {
                            type: d._49.H1,
                            color: d.K.Overlay
                        }, e)))
                    })
                }, t.prototype.renderSingleHugeItem = function() {
                    return [0].map(function(e) {
                        return n.createElement(d._8, {
                            key: "placeholder-" + e,
                            padding: {
                                right: 2
                            },
                            "data-a-target": "single-huge-item-" + e
                        }, n.createElement("div", {
                            className: "testing-carousel__item",
                            style: {
                                width: 2e3,
                                height: 100
                            }
                        }, n.createElement(d.Q, {
                            type: d._49.H1,
                            color: d.K.Overlay
                        }, e)))
                    })
                }, t.prototype.renderVariousWidthItems = function() {
                    return [0, 1, 2, 3, 4, 5, 6, 7, 8].map(function(e) {
                        return n.createElement(d._8, {
                            key: "placeholder-" + e,
                            padding: {
                                right: 2
                            },
                            "data-a-target": "various-width-item-" + e
                        }, n.createElement("div", {
                            className: "testing-carousel__item",
                            style: {
                                width: 30 * (e + 1),
                                height: 100
                            }
                        }, n.createElement(d.Q, {
                            type: d._49.H1,
                            color: d.K.Overlay
                        }, e)))
                    })
                }, t
            }(n.Component));
        a.d(t, "DevOnlyTestingCarouselPage", function() {
            return m
        })
    },
    WWVW: function(e, t) {}
});
//# sourceMappingURL=pages.dev-only-testing-carousel-c70ec817ab101a044990698bea0fceb3.js.map