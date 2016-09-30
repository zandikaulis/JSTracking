window.features = window.features || [], window.features.push("game-details"), define("web-client/components/channel-redesign/metadata-box/fl-md/component", ["exports", "ember-computed", "ember-component", "ember-service/inject", "web-client/utilities/game-names", "web-client/utilities/urls/fuel"], function(e, t, n, a, r, l) {
    e.default = n.default.extend({
        session: (0, a.default)(),
        globals: (0, a.default)(),
        gameSettings: (0, a.default)(),
        bkAlphaUrl: l.BREAKAWAY_ALPHA_LINK,
        isBreakaway: t.default.equal("channel.game", r.BREAKAWAY),
        isStreamline: t.default.equal("channel.game", r.STREAMLINE),
        isFlEnabled: t.default.readOnly("gameSettings.isFlEnabled"),
        classNames: ["inline-block"],
        isPartner: (0, t.default)("channel.product", "channel.product.isLoaded", "channel.product.price", function() {
            return this.get("channel.product") && !this.get("channel.product.isLoaded") && this.get("channel.product").load(), void 0 !== this.get("channel.product.price")
        })
    })
}), define("web-client/components/channel-redesign/metadata-box/fl-md/template", ["exports"], function(e) {
    e.default = Ember.HTMLBars.template(function() {
        var e = function() {
                return {
                    meta: {
                        fragmentReason: {
                            name: "missing-wrapper",
                            problems: ["multiple-nodes"]
                        },
                        revision: "Ember@2.4.4",
                        loc: {
                            source: null,
                            start: {
                                line: 1,
                                column: 0
                            },
                            end: {
                                line: 4,
                                column: 0
                            }
                        },
                        moduleName: "web-client/components/channel-redesign/metadata-box/fl-md/template.hbs"
                    },
                    isEmpty: !1,
                    arity: 0,
                    cachedFragment: null,
                    hasRendered: !1,
                    buildFragment: function(e) {
                        var t = e.createDocumentFragment(),
                            n = e.createTextNode("  ");
                        e.appendChild(t, n);
                        var n = e.createElement("span");
                        e.setAttribute(n, "class", "card__pipe mg-l-1 mg-r-1");
                        var a = e.createTextNode("|");
                        e.appendChild(n, a), e.appendChild(t, n);
                        var n = e.createTextNode("\n  ");
                        e.appendChild(t, n);
                        var n = e.createElement("a");
                        e.setAttribute(n, "rel", "noopener noreferrer"), e.setAttribute(n, "target", "_blank");
                        var a = e.createComment("");
                        e.appendChild(n, a), e.appendChild(t, n);
                        var n = e.createTextNode("\n");
                        return e.appendChild(t, n), t
                    },
                    buildRenderNodes: function(e, t, n) {
                        var a = e.childAt(t, [3]),
                            r = new Array(2);
                        return r[0] = e.createAttrMorph(a, "href"), r[1] = e.createMorphAt(a, 0, 0), r
                    },
                    statements: [
                        ["attribute", "href", ["get", "bkAlphaUrl", ["loc", [null, [3, 12],
                            [3, 22]
                        ]]]],
                        ["inline", "i18n", ["Sign up for the Breakaway Alpha"],
                            [],
                            ["loc", [null, [3, 67],
                                [3, 109]
                            ]]
                        ]
                    ],
                    locals: [],
                    templates: []
                }
            }(),
            t = function() {
                var e = function() {
                    return {
                        meta: {
                            fragmentReason: !1,
                            revision: "Ember@2.4.4",
                            loc: {
                                source: null,
                                start: {
                                    line: 7,
                                    column: 2
                                },
                                end: {
                                    line: 7,
                                    column: 219
                                }
                            },
                            moduleName: "web-client/components/channel-redesign/metadata-box/fl-md/template.hbs"
                        },
                        isEmpty: !1,
                        arity: 0,
                        cachedFragment: null,
                        hasRendered: !1,
                        buildFragment: function(e) {
                            var t = e.createDocumentFragment(),
                                n = e.createComment("");
                            return e.appendChild(t, n), t
                        },
                        buildRenderNodes: function(e, t, n) {
                            var a = new Array(1);
                            return a[0] = e.createMorphAt(t, 0, 0, n), e.insertBoundary(t, 0), e.insertBoundary(t, null), a
                        },
                        statements: [
                            ["inline", "i18n", ["Get this game"],
                                [],
                                ["loc", [null, [7, 195],
                                    [7, 219]
                                ]]
                            ]
                        ],
                        locals: [],
                        templates: []
                    }
                }();
                return {
                    meta: {
                        fragmentReason: !1,
                        revision: "Ember@2.4.4",
                        loc: {
                            source: null,
                            start: {
                                line: 5,
                                column: 0
                            },
                            end: {
                                line: 8,
                                column: 0
                            }
                        },
                        moduleName: "web-client/components/channel-redesign/metadata-box/fl-md/template.hbs"
                    },
                    isEmpty: !1,
                    arity: 0,
                    cachedFragment: null,
                    hasRendered: !1,
                    buildFragment: function(e) {
                        var t = e.createDocumentFragment(),
                            n = e.createTextNode("  ");
                        e.appendChild(t, n);
                        var n = e.createElement("span");
                        e.setAttribute(n, "class", "card__pipe mg-l-1 mg-r-1");
                        var a = e.createTextNode("|");
                        e.appendChild(n, a), e.appendChild(t, n);
                        var n = e.createTextNode("\n  ");
                        e.appendChild(t, n);
                        var n = e.createComment("");
                        e.appendChild(t, n);
                        var n = e.createTextNode("\n");
                        return e.appendChild(t, n), t
                    },
                    buildRenderNodes: function(e, t, n) {
                        var a = new Array(1);
                        return a[0] = e.createMorphAt(t, 3, 3, n), a
                    },
                    statements: [
                        ["block", "link-to", ["directory.game-details", ["get", "channel.game", ["loc", [null, [7, 38],
                                    [7, 50]
                                ]]],
                                ["subexpr", "query-params", [],
                                    ["br_name", ["get", "channel.name", ["loc", [null, [7, 73],
                                        [7, 85]
                                    ]]]],
                                    ["loc", [null, [7, 51],
                                        [7, 86]
                                    ]]
                                ]
                            ],
                            ["rel", "noopener noreferrer", "target", "_blank", "data-tt_content", "channel_page", "data-tt_medium", "show_detail_link"], 0, null, ["loc", [null, [7, 2],
                                [7, 231]
                            ]]
                        ]
                    ],
                    locals: [],
                    templates: [e]
                }
            }();
        return {
            meta: {
                fragmentReason: {
                    name: "missing-wrapper",
                    problems: ["wrong-type", "multiple-nodes"]
                },
                revision: "Ember@2.4.4",
                loc: {
                    source: null,
                    start: {
                        line: 1,
                        column: 0
                    },
                    end: {
                        line: 8,
                        column: 7
                    }
                },
                moduleName: "web-client/components/channel-redesign/metadata-box/fl-md/template.hbs"
            },
            isEmpty: !1,
            arity: 0,
            cachedFragment: null,
            hasRendered: !1,
            buildFragment: function(e) {
                var t = e.createDocumentFragment(),
                    n = e.createComment("");
                e.appendChild(t, n);
                var n = e.createComment("");
                return e.appendChild(t, n), t
            },
            buildRenderNodes: function(e, t, n) {
                var a = new Array(2);
                return a[0] = e.createMorphAt(t, 0, 0, n), a[1] = e.createMorphAt(t, 1, 1, n), e.insertBoundary(t, 0), e.insertBoundary(t, null), a
            },
            statements: [
                ["block", "if", [
                        ["subexpr", "and", [
                                ["get", "isFlEnabled", ["loc", [null, [1, 11],
                                    [1, 22]
                                ]]],
                                ["get", "isBreakaway", ["loc", [null, [1, 23],
                                    [1, 34]
                                ]]]
                            ],
                            [],
                            ["loc", [null, [1, 6],
                                [1, 35]
                            ]]
                        ]
                    ],
                    [], 0, null, ["loc", [null, [1, 0],
                        [4, 7]
                    ]]
                ],
                ["block", "if", [
                        ["subexpr", "and", [
                                ["get", "isFlEnabled", ["loc", [null, [5, 11],
                                    [5, 22]
                                ]]],
                                ["get", "isStreamline", ["loc", [null, [5, 23],
                                    [5, 35]
                                ]]],
                                ["get", "isPartner", ["loc", [null, [5, 36],
                                    [5, 45]
                                ]]]
                            ],
                            [],
                            ["loc", [null, [5, 6],
                                [5, 46]
                            ]]
                        ]
                    ],
                    [], 1, null, ["loc", [null, [5, 0],
                        [8, 7]
                    ]]
                ]
            ],
            locals: [],
            templates: [e, t]
        }
    }())
}), define("web-client/components/directory/game-details/carousel/component", ["exports", "ember-computed", "ember-component", "ember-runloop", "ember-service/inject", "ember-metal/observer"], function(e, t, n, a, r, l) {
    var i = ".carousel__slider",
        d = ".carousel__menu",
        o = ".carousel__nav button";
    e.default = n.default.extend({
        layout: (0, r.default)(),
        playerRemoteControl: (0, r.default)(),
        classNames: ["carousel"],
        itemWidth: 160,
        nextVisible: !1,
        prevVisible: !1,
        slider: null,
        actions: {
            pausePlayer: function() {
                this.get("playerRemoteControl").pause()
            }
        },
        showArrows: t.default.or("nextVisible", "prevVisible"),
        didInsertElement: function() {
            this._super.apply(this, arguments), a.default.scheduleOnce("afterRender", this, "_setupFlexbox"), this.get("layout.contentWidth")
        },
        resizeObserver: (0, l.default)("layout.contentWidth", function() {
            this.debounceTask("_inferGridSize", 100)
        }),
        _inferGridSize: function() {
            var e = this.slider;
            this.slider.resize(), this.set("prevVisible", e.paging > 1 && e.currentSlide > 0), this.set("nextVisible", e.pagingCount > 1 && e.currentSlide !== e.last), this._updateNav(e)
        },
        _setupFlexbox: function() {
            var e = this,
                t = this.$(o);
            this.$(i).flexslider({
                animation: "slide",
                controlNav: !0,
                directionNav: !1,
                animationLoop: !1,
                slideshow: !1,
                sync: d
            }), this.$(d).flexslider({
                animation: "slide",
                controlNav: !0,
                animationLoop: !0,
                customDirectionNav: t,
                slideshow: !1,
                itemWidth: this.get("itemWidth"),
                itemMargin: 20,
                asNavFor: i,
                start: function(t) {
                    e.slider = t, (0, a.default)(e, e._updateNav, t)
                },
                before: function(t) {
                    (0, a.default)(e, e._updateNav, t)
                }
            })
        },
        willDestroyElement: function() {
            this._super.apply(this, arguments), this.$(i).flexslider("destroy"), this.$(d).flexslider("destroy")
        },
        _updateNav: function(e) {
            this.isDestroyed || (this._isPrevVisible(e), this._isNextVisible(e))
        },
        _isPrevVisible: function(e) {
            this.set("prevVisible", e.pagingCount > 1 && 0 !== e.animatingTo);
            var t = this.$(".flex-prev");
            t && (t[0].disabled = !this.get("prevVisible"))
        },
        _isNextVisible: function(e) {
            this.set("nextVisible", e.pagingCount > 1 && e.animatingTo !== e.last);
            var t = this.$(".flex-next");
            t && (t[0].disabled = !this.get("nextVisible"))
        }
    })
}), define("web-client/components/directory/game-details/carousel/template", ["exports"], function(e) {
    e.default = Ember.HTMLBars.template(function() {
        var e = function() {
                return {
                    meta: {
                        fragmentReason: !1,
                        revision: "Ember@2.4.4",
                        loc: {
                            source: null,
                            start: {
                                line: 3,
                                column: 4
                            },
                            end: {
                                line: 16,
                                column: 4
                            }
                        },
                        moduleName: "web-client/components/directory/game-details/carousel/template.hbs"
                    },
                    isEmpty: !1,
                    arity: 2,
                    cachedFragment: null,
                    hasRendered: !1,
                    buildFragment: function(e) {
                        var t = e.createDocumentFragment(),
                            n = e.createTextNode("      ");
                        e.appendChild(t, n);
                        var n = e.createElement("li");
                        e.setAttribute(n, "class", "carousel__item");
                        var a = e.createTextNode("\n        ");
                        e.appendChild(n, a);
                        var a = e.createElement("figure");
                        e.setAttribute(a, "class", "card__img aspect");
                        var r = e.createTextNode("\n          ");
                        e.appendChild(a, r);
                        var r = e.createComment("");
                        e.appendChild(a, r);
                        var r = e.createTextNode("\n        ");
                        e.appendChild(a, r), e.appendChild(n, a);
                        var a = e.createTextNode("\n      ");
                        e.appendChild(n, a), e.appendChild(t, n);
                        var n = e.createTextNode("\n");
                        return e.appendChild(t, n), t
                    },
                    buildRenderNodes: function(e, t, n) {
                        var a = new Array(1);
                        return a[0] = e.createMorphAt(e.childAt(t, [1, 1]), 1, 1), a
                    },
                    statements: [
                        ["inline", "twitch-player2", [],
                            ["video", ["subexpr", "@mut", [
                                    ["get", "video.video_id", ["loc", [null, [7, 18],
                                        [7, 32]
                                    ]]]
                                ],
                                [],
                                []
                            ], "videoEl", ["subexpr", "concat", ["video-", ["get", "index", ["loc", [null, [8, 37],
                                    [8, 42]
                                ]]]],
                                [],
                                ["loc", [null, [8, 20],
                                    [8, 43]
                                ]]
                            ], "branding", !1, "shouldStartPaused", !0, "showCompanionAds", !1, "class", "aspect__fill"],
                            ["loc", [null, [6, 10],
                                [13, 12]
                            ]]
                        ]
                    ],
                    locals: ["video", "index"],
                    templates: []
                }
            }(),
            t = function() {
                return {
                    meta: {
                        fragmentReason: !1,
                        revision: "Ember@2.4.4",
                        loc: {
                            source: null,
                            start: {
                                line: 17,
                                column: 4
                            },
                            end: {
                                line: 23,
                                column: 4
                            }
                        },
                        moduleName: "web-client/components/directory/game-details/carousel/template.hbs"
                    },
                    isEmpty: !1,
                    arity: 1,
                    cachedFragment: null,
                    hasRendered: !1,
                    buildFragment: function(e) {
                        var t = e.createDocumentFragment(),
                            n = e.createTextNode("      ");
                        e.appendChild(t, n);
                        var n = e.createElement("li");
                        e.setAttribute(n, "class", "carousel__item");
                        var a = e.createTextNode("\n        ");
                        e.appendChild(n, a);
                        var a = e.createElement("figure");
                        e.setAttribute(a, "class", "card__img");
                        var r = e.createTextNode("\n          ");
                        e.appendChild(a, r);
                        var r = e.createElement("img");
                        e.appendChild(a, r);
                        var r = e.createTextNode(" \n        ");
                        e.appendChild(a, r), e.appendChild(n, a);
                        var a = e.createTextNode("\n      ");
                        e.appendChild(n, a), e.appendChild(t, n);
                        var n = e.createTextNode("\n");
                        return e.appendChild(t, n), t
                    },
                    buildRenderNodes: function(e, t, n) {
                        var a = e.childAt(t, [1, 1, 1]),
                            r = new Array(1);
                        return r[0] = e.createAttrMorph(a, "src"), r
                    },
                    statements: [
                        ["attribute", "src", ["concat", [
                            ["get", "url", ["loc", [null, [20, 22],
                                [20, 25]
                            ]]]
                        ]]]
                    ],
                    locals: ["url"],
                    templates: []
                }
            }(),
            n = function() {
                return {
                    meta: {
                        fragmentReason: !1,
                        revision: "Ember@2.4.4",
                        loc: {
                            source: null,
                            start: {
                                line: 38,
                                column: 4
                            },
                            end: {
                                line: 44,
                                column: 4
                            }
                        },
                        moduleName: "web-client/components/directory/game-details/carousel/template.hbs"
                    },
                    isEmpty: !1,
                    arity: 1,
                    cachedFragment: null,
                    hasRendered: !1,
                    buildFragment: function(e) {
                        var t = e.createDocumentFragment(),
                            n = e.createTextNode("      ");
                        e.appendChild(t, n);
                        var n = e.createElement("li");
                        e.setAttribute(n, "class", "carousel__item carousel__menu__item");
                        var a = e.createTextNode("\n        ");
                        e.appendChild(n, a);
                        var a = e.createElement("figure");
                        e.setAttribute(a, "class", "card__img carousel__video-thumbnail");
                        var r = e.createTextNode("\n          ");
                        e.appendChild(a, r);
                        var r = e.createElement("img");
                        e.appendChild(a, r);
                        var r = e.createTextNode(" \n        ");
                        e.appendChild(a, r), e.appendChild(n, a);
                        var a = e.createTextNode("\n      ");
                        e.appendChild(n, a), e.appendChild(t, n);
                        var n = e.createTextNode("\n");
                        return e.appendChild(t, n), t
                    },
                    buildRenderNodes: function(e, t, n) {
                        var a = e.childAt(t, [1, 1, 1]),
                            r = new Array(1);
                        return r[0] = e.createAttrMorph(a, "src"), r
                    },
                    statements: [
                        ["attribute", "src", ["concat", [
                            ["get", "video.thumbnail_url", ["loc", [null, [41, 22],
                                [41, 41]
                            ]]]
                        ]]]
                    ],
                    locals: ["video"],
                    templates: []
                }
            }(),
            a = function() {
                return {
                    meta: {
                        fragmentReason: !1,
                        revision: "Ember@2.4.4",
                        loc: {
                            source: null,
                            start: {
                                line: 45,
                                column: 4
                            },
                            end: {
                                line: 51,
                                column: 4
                            }
                        },
                        moduleName: "web-client/components/directory/game-details/carousel/template.hbs"
                    },
                    isEmpty: !1,
                    arity: 1,
                    cachedFragment: null,
                    hasRendered: !1,
                    buildFragment: function(e) {
                        var t = e.createDocumentFragment(),
                            n = e.createTextNode("      ");
                        e.appendChild(t, n);
                        var n = e.createElement("li");
                        e.setAttribute(n, "class", "carousel__item carousel__menu__item");
                        var a = e.createTextNode("\n        ");
                        e.appendChild(n, a);
                        var a = e.createElement("figure");
                        e.setAttribute(a, "class", "card__img");
                        var r = e.createTextNode("\n          ");
                        e.appendChild(a, r);
                        var r = e.createElement("img");
                        e.appendChild(a, r);
                        var r = e.createTextNode(" \n        ");
                        e.appendChild(a, r), e.appendChild(n, a);
                        var a = e.createTextNode("\n      ");
                        e.appendChild(n, a), e.appendChild(t, n);
                        var n = e.createTextNode("\n");
                        return e.appendChild(t, n), t
                    },
                    buildRenderNodes: function(e, t, n) {
                        var a = e.childAt(t, [1]),
                            r = e.childAt(a, [1, 1]),
                            l = new Array(2);
                        return l[0] = e.createElementMorph(a), l[1] = e.createAttrMorph(r, "src"), l
                    },
                    statements: [
                        ["element", "action", ["pausePlayer"],
                            [],
                            ["loc", [null, [46, 54],
                                [46, 78]
                            ]]
                        ],
                        ["attribute", "src", ["concat", [
                            ["get", "url", ["loc", [null, [48, 22],
                                [48, 25]
                            ]]]
                        ]]]
                    ],
                    locals: ["url"],
                    templates: []
                }
            }();
        return {
            meta: {
                fragmentReason: {
                    name: "missing-wrapper",
                    problems: ["multiple-nodes"]
                },
                revision: "Ember@2.4.4",
                loc: {
                    source: null,
                    start: {
                        line: 1,
                        column: 0
                    },
                    end: {
                        line: 54,
                        column: 0
                    }
                },
                moduleName: "web-client/components/directory/game-details/carousel/template.hbs"
            },
            isEmpty: !1,
            arity: 0,
            cachedFragment: null,
            hasRendered: !1,
            buildFragment: function(e) {
                var t = e.createDocumentFragment(),
                    n = e.createElement("div");
                e.setAttribute(n, "class", "carousel__slider");
                var a = e.createTextNode("\n  ");
                e.appendChild(n, a);
                var a = e.createElement("ul");
                e.setAttribute(a, "class", "carousel__items slides clearfix");
                var r = e.createTextNode("\n");
                e.appendChild(a, r);
                var r = e.createComment("");
                e.appendChild(a, r);
                var r = e.createComment("");
                e.appendChild(a, r);
                var r = e.createTextNode("  ");
                e.appendChild(a, r), e.appendChild(n, a);
                var a = e.createTextNode("\n");
                e.appendChild(n, a), e.appendChild(t, n);
                var n = e.createTextNode("\n\n");
                e.appendChild(t, n);
                var n = e.createElement("div");
                e.setAttribute(n, "class", "carousel__nav");
                var a = e.createTextNode("\n  ");
                e.appendChild(n, a);
                var a = e.createElement("button");
                e.setAttribute(a, "data-test-selector", "twitch-carousel-prev-button");
                var r = e.createTextNode("\n    ");
                e.appendChild(a, r);
                var r = e.createElement("div");
                e.setAttribute(r, "class", "carousel__arrow carousel__arrow--prev"), e.appendChild(a, r);
                var r = e.createTextNode("\n  ");
                e.appendChild(a, r), e.appendChild(n, a);
                var a = e.createTextNode("\n  ");
                e.appendChild(n, a);
                var a = e.createElement("button");
                e.setAttribute(a, "data-test-selector", "twitch-carousel-next-button");
                var r = e.createTextNode("\n    ");
                e.appendChild(a, r);
                var r = e.createElement("div");
                e.setAttribute(r, "class", "carousel__arrow carousel__arrow--next"), e.appendChild(a, r);
                var r = e.createTextNode("\n  ");
                e.appendChild(a, r), e.appendChild(n, a);
                var a = e.createTextNode("\n");
                e.appendChild(n, a), e.appendChild(t, n);
                var n = e.createTextNode("\n\n");
                e.appendChild(t, n);
                var n = e.createElement("div");
                e.setAttribute(n, "class", "carousel__menu");
                var a = e.createTextNode("\n  ");
                e.appendChild(n, a);
                var a = e.createElement("ul");
                e.setAttribute(a, "class", "carousel__items slides");
                var r = e.createTextNode("\n");
                e.appendChild(a, r);
                var r = e.createComment("");
                e.appendChild(a, r);
                var r = e.createComment("");
                e.appendChild(a, r);
                var r = e.createTextNode("  ");
                e.appendChild(a, r), e.appendChild(n, a);
                var a = e.createTextNode("\n");
                e.appendChild(n, a), e.appendChild(t, n);
                var n = e.createTextNode("\n");
                return e.appendChild(t, n), t
            },
            buildRenderNodes: function(e, t, n) {
                var a = e.childAt(t, [0, 1]),
                    r = e.childAt(t, [2]),
                    l = e.childAt(r, [1]),
                    i = e.childAt(r, [3]),
                    d = e.childAt(t, [4, 1]),
                    o = new Array(6);
                return o[0] = e.createMorphAt(a, 1, 1), o[1] = e.createMorphAt(a, 2, 2), o[2] = e.createAttrMorph(l, "class"), o[3] = e.createAttrMorph(i, "class"), o[4] = e.createMorphAt(d, 1, 1), o[5] = e.createMorphAt(d, 2, 2), o
            },
            statements: [
                ["block", "each", [
                        ["get", "product.media.videos", ["loc", [null, [3, 12],
                            [3, 32]
                        ]]]
                    ],
                    [], 0, null, ["loc", [null, [3, 4],
                        [16, 13]
                    ]]
                ],
                ["block", "each", [
                        ["get", "product.media.screenshot_urls", ["loc", [null, [17, 12],
                            [17, 41]
                        ]]]
                    ],
                    [], 1, null, ["loc", [null, [17, 4],
                        [23, 13]
                    ]]
                ],
                ["attribute", "class", ["concat", ["carousel__nav__button ", ["subexpr", "unless", [
                        ["get", "showArrows", ["loc", [null, [28, 97],
                            [28, 107]
                        ]]], "hidden"
                    ],
                    [],
                    ["loc", [null, [28, 88],
                        [28, 118]
                    ]]
                ], " ", ["subexpr", "unless", [
                        ["get", "prevVisible", ["loc", [null, [28, 128],
                            [28, 139]
                        ]]], "disabled"
                    ],
                    [],
                    ["loc", [null, [28, 119],
                        [28, 152]
                    ]]
                ], " carousel__button--prev flex-prev"]]],
                ["attribute", "class", ["concat", ["carousel__nav__button ", ["subexpr", "unless", [
                        ["get", "showArrows", ["loc", [null, [31, 97],
                            [31, 107]
                        ]]], "hidden"
                    ],
                    [],
                    ["loc", [null, [31, 88],
                        [31, 118]
                    ]]
                ], " ", ["subexpr", "unless", [
                        ["get", "nextVisible", ["loc", [null, [31, 128],
                            [31, 139]
                        ]]], "disabled"
                    ],
                    [],
                    ["loc", [null, [31, 119],
                        [31, 152]
                    ]]
                ], " carousel__button--next flex-next"]]],
                ["block", "each", [
                        ["get", "product.media.videos", ["loc", [null, [38, 12],
                            [38, 32]
                        ]]]
                    ],
                    [], 2, null, ["loc", [null, [38, 4],
                        [44, 13]
                    ]]
                ],
                ["block", "each", [
                        ["get", "product.media.screenshot_urls", ["loc", [null, [45, 12],
                            [45, 41]
                        ]]]
                    ],
                    [], 3, null, ["loc", [null, [45, 4],
                        [51, 13]
                    ]]
                ]
            ],
            locals: [],
            templates: [e, t, n, a]
        }
    }())
}), define("web-client/components/directory/game-details/component", ["exports", "ember-component"], function(e, t) {
    e.default = t.default.extend({
        classNames: ["details"]
    })
}), define("web-client/components/directory/game-details/detail-component/component", ["exports", "ember-component"], function(e, t) {
    e.default = t.default.extend({
        classNames: ["product__card-row", "tower"]
    })
}), define("web-client/components/directory/game-details/detail-component/template", ["exports"], function(e) {
    e.default = Ember.HTMLBars.template(function() {
        var e = function() {
                var e = function() {
                    return {
                        meta: {
                            fragmentReason: !1,
                            revision: "Ember@2.4.4",
                            loc: {
                                source: null,
                                start: {
                                    line: 7,
                                    column: 6
                                },
                                end: {
                                    line: 9,
                                    column: 6
                                }
                            },
                            moduleName: "web-client/components/directory/game-details/detail-component/template.hbs"
                        },
                        isEmpty: !1,
                        arity: 1,
                        cachedFragment: null,
                        hasRendered: !1,
                        buildFragment: function(e) {
                            var t = e.createDocumentFragment(),
                                n = e.createTextNode("        ");
                            e.appendChild(t, n);
                            var n = e.createElement("li"),
                                a = e.createComment("");
                            e.appendChild(n, a), e.appendChild(t, n);
                            var n = e.createTextNode("\n");
                            return e.appendChild(t, n), t
                        },
                        buildRenderNodes: function(e, t, n) {
                            var a = new Array(1);
                            return a[0] = e.createMorphAt(e.childAt(t, [1]), 0, 0), a
                        },
                        statements: [
                            ["content", "detail", ["loc", [null, [8, 12],
                                [8, 22]
                            ]]]
                        ],
                        locals: ["detail"],
                        templates: []
                    }
                }();
                return {
                    meta: {
                        fragmentReason: !1,
                        revision: "Ember@2.4.4",
                        loc: {
                            source: null,
                            start: {
                                line: 6,
                                column: 4
                            },
                            end: {
                                line: 10,
                                column: 4
                            }
                        },
                        moduleName: "web-client/components/directory/game-details/detail-component/template.hbs"
                    },
                    isEmpty: !1,
                    arity: 0,
                    cachedFragment: null,
                    hasRendered: !1,
                    buildFragment: function(e) {
                        var t = e.createDocumentFragment(),
                            n = e.createComment("");
                        return e.appendChild(t, n), t
                    },
                    buildRenderNodes: function(e, t, n) {
                        var a = new Array(1);
                        return a[0] = e.createMorphAt(t, 0, 0, n), e.insertBoundary(t, 0), e.insertBoundary(t, null), a
                    },
                    statements: [
                        ["block", "each", [
                                ["get", "details", ["loc", [null, [7, 14],
                                    [7, 21]
                                ]]]
                            ],
                            [], 0, null, ["loc", [null, [7, 6],
                                [9, 15]
                            ]]
                        ]
                    ],
                    locals: [],
                    templates: [e]
                }
            }(),
            t = function() {
                return {
                    meta: {
                        fragmentReason: !1,
                        revision: "Ember@2.4.4",
                        loc: {
                            source: null,
                            start: {
                                line: 10,
                                column: 4
                            },
                            end: {
                                line: 12,
                                column: 4
                            }
                        },
                        moduleName: "web-client/components/directory/game-details/detail-component/template.hbs"
                    },
                    isEmpty: !1,
                    arity: 0,
                    cachedFragment: null,
                    hasRendered: !1,
                    buildFragment: function(e) {
                        var t = e.createDocumentFragment(),
                            n = e.createTextNode("      ");
                        e.appendChild(t, n);
                        var n = e.createElement("li"),
                            a = e.createComment("");
                        e.appendChild(n, a), e.appendChild(t, n);
                        var n = e.createTextNode("\n");
                        return e.appendChild(t, n), t
                    },
                    buildRenderNodes: function(e, t, n) {
                        var a = new Array(1);
                        return a[0] = e.createMorphAt(e.childAt(t, [1]), 0, 0), a
                    },
                    statements: [
                        ["content", "details", ["loc", [null, [11, 10],
                            [11, 21]
                        ]]]
                    ],
                    locals: [],
                    templates: []
                }
            }();
        return {
            meta: {
                fragmentReason: {
                    name: "missing-wrapper",
                    problems: ["multiple-nodes"]
                },
                revision: "Ember@2.4.4",
                loc: {
                    source: null,
                    start: {
                        line: 1,
                        column: 0
                    },
                    end: {
                        line: 15,
                        column: 0
                    }
                },
                moduleName: "web-client/components/directory/game-details/detail-component/template.hbs"
            },
            isEmpty: !1,
            arity: 0,
            cachedFragment: null,
            hasRendered: !1,
            buildFragment: function(e) {
                var t = e.createDocumentFragment(),
                    n = e.createElement("div");
                e.setAttribute(n, "class", "product__card-label col-xs-6");
                var a = e.createTextNode("\n  ");
                e.appendChild(n, a);
                var a = e.createComment("");
                e.appendChild(n, a);
                var a = e.createTextNode("\n");
                e.appendChild(n, a), e.appendChild(t, n);
                var n = e.createTextNode("\n");
                e.appendChild(t, n);
                var n = e.createElement("div");
                e.setAttribute(n, "class", "col-xs-6");
                var a = e.createTextNode("\n  ");
                e.appendChild(n, a);
                var a = e.createElement("ul"),
                    r = e.createTextNode("\n");
                e.appendChild(a, r);
                var r = e.createComment("");
                e.appendChild(a, r);
                var r = e.createTextNode("  ");
                e.appendChild(a, r), e.appendChild(n, a);
                var a = e.createTextNode("\n");
                e.appendChild(n, a), e.appendChild(t, n);
                var n = e.createTextNode("\n");
                return e.appendChild(t, n), t
            },
            buildRenderNodes: function(e, t, n) {
                var a = new Array(2);
                return a[0] = e.createMorphAt(e.childAt(t, [0]), 1, 1), a[1] = e.createMorphAt(e.childAt(t, [2, 1]), 1, 1), a
            },
            statements: [
                ["content", "title", ["loc", [null, [2, 2],
                    [2, 11]
                ]]],
                ["block", "if", [
                        ["subexpr", "is-array", [
                                ["get", "details", ["loc", [null, [6, 20],
                                    [6, 27]
                                ]]]
                            ],
                            [],
                            ["loc", [null, [6, 10],
                                [6, 28]
                            ]]
                        ]
                    ],
                    [], 0, 1, ["loc", [null, [6, 4],
                        [12, 11]
                    ]]
                ]
            ],
            locals: [],
            templates: [e, t]
        }
    }())
}), define("web-client/components/directory/game-details/game-description/component", ["exports", "ember-computed", "ember-component", "ember-string"], function(e, t, n, a) {
    e.default = n.default.extend({
        productDescription: (0, t.default)("product", function() {
            return (0, a.htmlSafe)(this.get("product.description"))
        }),
        productFeatures: (0, t.default)("product.feature_details.[]", function() {
            return this.get("product.feature_details").map(function(e) {
                return (0, a.htmlSafe)(e)
            })
        })
    })
}), define("web-client/components/directory/game-details/game-description/template", ["exports"], function(e) {
    e.default = Ember.HTMLBars.template(function() {
        var e = function() {
                return {
                    meta: {
                        fragmentReason: !1,
                        revision: "Ember@2.4.4",
                        loc: {
                            source: null,
                            start: {
                                line: 2,
                                column: 2
                            },
                            end: {
                                line: 5,
                                column: 2
                            }
                        },
                        moduleName: "web-client/components/directory/game-details/game-description/template.hbs"
                    },
                    isEmpty: !1,
                    arity: 0,
                    cachedFragment: null,
                    hasRendered: !1,
                    buildFragment: function(e) {
                        var t = e.createDocumentFragment(),
                            n = e.createTextNode("    ");
                        e.appendChild(t, n);
                        var n = e.createElement("h4"),
                            a = e.createComment("");
                        e.appendChild(n, a), e.appendChild(t, n);
                        var n = e.createTextNode("\n    ");
                        e.appendChild(t, n);
                        var n = e.createElement("p"),
                            a = e.createComment("");
                        e.appendChild(n, a), e.appendChild(t, n);
                        var n = e.createTextNode("\n");
                        return e.appendChild(t, n), t
                    },
                    buildRenderNodes: function(e, t, n) {
                        var a = new Array(2);
                        return a[0] = e.createMorphAt(e.childAt(t, [1]), 0, 0), a[1] = e.createMorphAt(e.childAt(t, [3]), 0, 0), a
                    },
                    statements: [
                        ["inline", "i18n", ["Description"],
                            [],
                            ["loc", [null, [3, 8],
                                [3, 30]
                            ]]
                        ],
                        ["content", "productDescription", ["loc", [null, [4, 7],
                            [4, 29]
                        ]]]
                    ],
                    locals: [],
                    templates: []
                }
            }(),
            t = function() {
                return {
                    meta: {
                        fragmentReason: !1,
                        revision: "Ember@2.4.4",
                        loc: {
                            source: null,
                            start: {
                                line: 12,
                                column: 4
                            },
                            end: {
                                line: 14,
                                column: 4
                            }
                        },
                        moduleName: "web-client/components/directory/game-details/game-description/template.hbs"
                    },
                    isEmpty: !1,
                    arity: 1,
                    cachedFragment: null,
                    hasRendered: !1,
                    buildFragment: function(e) {
                        var t = e.createDocumentFragment(),
                            n = e.createTextNode("      ");
                        e.appendChild(t, n);
                        var n = e.createElement("li");
                        e.setAttribute(n, "class", "mg-b-1");
                        var a = e.createComment("");
                        e.appendChild(n, a), e.appendChild(t, n);
                        var n = e.createTextNode("\n");
                        return e.appendChild(t, n), t
                    },
                    buildRenderNodes: function(e, t, n) {
                        var a = new Array(1);
                        return a[0] = e.createMorphAt(e.childAt(t, [1]), 0, 0), a
                    },
                    statements: [
                        ["content", "featureDetail", ["loc", [null, [13, 25],
                            [13, 42]
                        ]]]
                    ],
                    locals: ["featureDetail"],
                    templates: []
                }
            }();
        return {
            meta: {
                fragmentReason: {
                    name: "missing-wrapper",
                    problems: ["multiple-nodes"]
                },
                revision: "Ember@2.4.4",
                loc: {
                    source: null,
                    start: {
                        line: 1,
                        column: 0
                    },
                    end: {
                        line: 17,
                        column: 0
                    }
                },
                moduleName: "web-client/components/directory/game-details/game-description/template.hbs"
            },
            isEmpty: !1,
            arity: 0,
            cachedFragment: null,
            hasRendered: !1,
            buildFragment: function(e) {
                var t = e.createDocumentFragment(),
                    n = e.createElement("div");
                e.setAttribute(n, "class", "product__description typeset");
                var a = e.createTextNode("\n");
                e.appendChild(n, a);
                var a = e.createComment("");
                e.appendChild(n, a), e.appendChild(t, n);
                var n = e.createTextNode("\n\n");
                e.appendChild(t, n);
                var n = e.createElement("div");
                e.setAttribute(n, "class", "product__game-features mg-t-2 mg-b-5 typeset");
                var a = e.createTextNode("\n  ");
                e.appendChild(n, a);
                var a = e.createElement("h4"),
                    r = e.createComment("");
                e.appendChild(a, r), e.appendChild(n, a);
                var a = e.createTextNode("\n  ");
                e.appendChild(n, a);
                var a = e.createElement("ul");
                e.setAttribute(a, "class", "product__list");
                var r = e.createTextNode("\n");
                e.appendChild(a, r);
                var r = e.createComment("");
                e.appendChild(a, r);
                var r = e.createTextNode("  ");
                e.appendChild(a, r), e.appendChild(n, a);
                var a = e.createTextNode("\n");
                e.appendChild(n, a), e.appendChild(t, n);
                var n = e.createTextNode("\n");
                return e.appendChild(t, n), t
            },
            buildRenderNodes: function(e, t, n) {
                var a = e.childAt(t, [2]),
                    r = new Array(3);
                return r[0] = e.createMorphAt(e.childAt(t, [0]), 1, 1), r[1] = e.createMorphAt(e.childAt(a, [1]), 0, 0), r[2] = e.createMorphAt(e.childAt(a, [3]), 1, 1), r
            },
            statements: [
                ["block", "directory/game-details/read-more", [],
                    ["maxHeight", 300], 0, null, ["loc", [null, [2, 2],
                        [5, 39]
                    ]]
                ],
                ["inline", "i18n", ["Features"],
                    [],
                    ["loc", [null, [10, 6],
                        [10, 25]
                    ]]
                ],
                ["block", "each", [
                        ["get", "productFeatures", ["loc", [null, [12, 12],
                            [12, 27]
                        ]]]
                    ],
                    [], 1, null, ["loc", [null, [12, 4],
                        [14, 13]
                    ]]
                ]
            ],
            locals: [],
            templates: [e, t]
        }
    }())
}), define("web-client/components/directory/game-details/game-features/component", ["exports", "ember-component"], function(e, t) {
    e.default = t.default.extend({
        classNames: ["brick", "brick--pd-lg", "brick--theme-grey", "mg-t-2 mg-b-2"]
    })
}), define("web-client/components/directory/game-details/game-features/template", ["exports"], function(e) {
    e.default = Ember.HTMLBars.template(function() {
        var e = function() {
            return {
                meta: {
                    fragmentReason: !1,
                    revision: "Ember@2.4.4",
                    loc: {
                        source: null,
                        start: {
                            line: 3,
                            column: 2
                        },
                        end: {
                            line: 8,
                            column: 2
                        }
                    },
                    moduleName: "web-client/components/directory/game-details/game-features/template.hbs"
                },
                isEmpty: !1,
                arity: 1,
                cachedFragment: null,
                hasRendered: !1,
                buildFragment: function(e) {
                    var t = e.createDocumentFragment(),
                        n = e.createTextNode("    ");
                    e.appendChild(t, n);
                    var n = e.createElement("div");
                    e.setAttribute(n, "class", "product__feature");
                    var a = e.createTextNode("\n      ");
                    e.appendChild(n, a);
                    var a = e.createElement("img");
                    e.appendChild(n, a);
                    var a = e.createTextNode("\n      ");
                    e.appendChild(n, a);
                    var a = e.createElement("span");
                    e.setAttribute(a, "class", "product__feature__description");
                    var r = e.createComment("");
                    e.appendChild(a, r), e.appendChild(n, a);
                    var a = e.createTextNode("\n    ");
                    e.appendChild(n, a), e.appendChild(t, n);
                    var n = e.createTextNode("\n");
                    return e.appendChild(t, n), t
                },
                buildRenderNodes: function(e, t, n) {
                    var a = e.childAt(t, [1]),
                        r = e.childAt(a, [1]),
                        l = new Array(2);
                    return l[0] = e.createAttrMorph(r, "src"), l[1] = e.createMorphAt(e.childAt(a, [3]), 0, 0), l
                },
                statements: [
                    ["attribute", "src", ["concat", [
                        ["get", "featureIcon.icon_url", ["loc", [null, [5, 18],
                            [5, 38]
                        ]]]
                    ]]],
                    ["content", "featureIcon.name", ["loc", [null, [6, 50],
                        [6, 70]
                    ]]]
                ],
                locals: ["featureIcon"],
                templates: []
            }
        }();
        return {
            meta: {
                fragmentReason: {
                    name: "missing-wrapper",
                    problems: ["multiple-nodes"]
                },
                revision: "Ember@2.4.4",
                loc: {
                    source: null,
                    start: {
                        line: 1,
                        column: 0
                    },
                    end: {
                        line: 10,
                        column: 0
                    }
                },
                moduleName: "web-client/components/directory/game-details/game-features/template.hbs"
            },
            isEmpty: !1,
            arity: 0,
            cachedFragment: null,
            hasRendered: !1,
            buildFragment: function(e) {
                var t = e.createDocumentFragment(),
                    n = e.createElement("h3");
                e.setAttribute(n, "class", "product__card-title");
                var a = e.createComment("");
                e.appendChild(n, a), e.appendChild(t, n);
                var n = e.createTextNode("\n");
                e.appendChild(t, n);
                var n = e.createElement("div");
                e.setAttribute(n, "class", "tower tower--xs-1-3");
                var a = e.createTextNode("\n");
                e.appendChild(n, a);
                var a = e.createComment("");
                e.appendChild(n, a), e.appendChild(t, n);
                var n = e.createTextNode("\n");
                return e.appendChild(t, n), t
            },
            buildRenderNodes: function(e, t, n) {
                var a = new Array(2);
                return a[0] = e.createMorphAt(e.childAt(t, [0]), 0, 0), a[1] = e.createMorphAt(e.childAt(t, [2]), 1, 1), a
            },
            statements: [
                ["inline", "i18n", ["Features"],
                    [],
                    ["loc", [null, [1, 32],
                        [1, 51]
                    ]]
                ],
                ["block", "each", [
                        ["get", "product.feature_icons", ["loc", [null, [3, 10],
                            [3, 31]
                        ]]]
                    ],
                    [], 0, null, ["loc", [null, [3, 2],
                        [8, 11]
                    ]]
                ]
            ],
            locals: [],
            templates: [e]
        }
    }())
}), define("web-client/components/directory/game-details/game-information/component", ["exports", "ember-component"], function(e, t) {
    e.default = t.default.extend({
        classNames: ["brick", "brick--pd-lg", "brick--theme-grey", "mg-t-2 mg-b-2"]
    })
}), define("web-client/components/directory/game-details/game-information/template", ["exports"], function(e) {
    e.default = Ember.HTMLBars.template(function() {
        var e = function() {
                return {
                    meta: {
                        fragmentReason: !1,
                        revision: "Ember@2.4.4",
                        loc: {
                            source: null,
                            start: {
                                line: 5,
                                column: 0
                            },
                            end: {
                                line: 7,
                                column: 0
                            }
                        },
                        moduleName: "web-client/components/directory/game-details/game-information/template.hbs"
                    },
                    isEmpty: !1,
                    arity: 0,
                    cachedFragment: null,
                    hasRendered: !1,
                    buildFragment: function(e) {
                        var t = e.createDocumentFragment(),
                            n = e.createTextNode("  ");
                        e.appendChild(t, n);
                        var n = e.createComment("");
                        e.appendChild(t, n);
                        var n = e.createTextNode("\n");
                        return e.appendChild(t, n), t
                    },
                    buildRenderNodes: function(e, t, n) {
                        var a = new Array(1);
                        return a[0] = e.createMorphAt(t, 1, 1, n), a
                    },
                    statements: [
                        ["inline", "directory/game-details/detail-component", [],
                            ["title", "Genre", "details", ["subexpr", "@mut", [
                                    ["get", "product.genres", ["loc", [null, [6, 66],
                                        [6, 80]
                                    ]]]
                                ],
                                [],
                                []
                            ]],
                            ["loc", [null, [6, 2],
                                [6, 82]
                            ]]
                        ]
                    ],
                    locals: [],
                    templates: []
                }
            }(),
            t = function() {
                return {
                    meta: {
                        fragmentReason: !1,
                        revision: "Ember@2.4.4",
                        loc: {
                            source: null,
                            start: {
                                line: 30,
                                column: 6
                            },
                            end: {
                                line: 32,
                                column: 6
                            }
                        },
                        moduleName: "web-client/components/directory/game-details/game-information/template.hbs"
                    },
                    isEmpty: !1,
                    arity: 1,
                    cachedFragment: null,
                    hasRendered: !1,
                    buildFragment: function(e) {
                        var t = e.createDocumentFragment(),
                            n = e.createTextNode("        ");
                        e.appendChild(t, n);
                        var n = e.createElement("li"),
                            a = e.createComment("");
                        e.appendChild(n, a), e.appendChild(t, n);
                        var n = e.createTextNode("\n");
                        return e.appendChild(t, n), t
                    },
                    buildRenderNodes: function(e, t, n) {
                        var a = new Array(1);
                        return a[0] = e.createMorphAt(e.childAt(t, [1]), 0, 0), a
                    },
                    statements: [
                        ["content", "detail", ["loc", [null, [31, 12],
                            [31, 22]
                        ]]]
                    ],
                    locals: ["detail"],
                    templates: []
                }
            }();
        return {
            meta: {
                fragmentReason: {
                    name: "missing-wrapper",
                    problems: ["multiple-nodes", "wrong-type"]
                },
                revision: "Ember@2.4.4",
                loc: {
                    source: null,
                    start: {
                        line: 1,
                        column: 0
                    },
                    end: {
                        line: 36,
                        column: 0
                    }
                },
                moduleName: "web-client/components/directory/game-details/game-information/template.hbs"
            },
            isEmpty: !1,
            arity: 0,
            cachedFragment: null,
            hasRendered: !1,
            buildFragment: function(e) {
                var t = e.createDocumentFragment(),
                    n = e.createElement("h3");
                e.setAttribute(n, "class", "product__card-title");
                var a = e.createComment("");
                e.appendChild(n, a), e.appendChild(t, n);
                var n = e.createTextNode("\n\n");
                e.appendChild(t, n);
                var n = e.createComment("");
                e.appendChild(t, n);
                var n = e.createTextNode("\n\n");
                e.appendChild(t, n);
                var n = e.createComment("");
                e.appendChild(t, n);
                var n = e.createTextNode("\n");
                e.appendChild(t, n);
                var n = e.createComment("");
                e.appendChild(t, n);
                var n = e.createTextNode("\n\n");
                e.appendChild(t, n);
                var n = e.createComment("");
                e.appendChild(t, n);
                var n = e.createTextNode("\n\n");
                e.appendChild(t, n);
                var n = e.createElement("div");
                e.setAttribute(n, "class", "product__card-row tower");
                var a = e.createTextNode("\n  ");
                e.appendChild(n, a);
                var a = e.createElement("div");
                e.setAttribute(a, "class", "product__card-label col-xs-6");
                var r = e.createTextNode("\n    ");
                e.appendChild(a, r);
                var r = e.createComment("");
                e.appendChild(a, r);
                var r = e.createTextNode("\n  ");
                e.appendChild(a, r), e.appendChild(n, a);
                var a = e.createTextNode("\n  ");
                e.appendChild(n, a);
                var a = e.createElement("div");
                e.setAttribute(a, "class", "col-xs-6");
                var r = e.createTextNode("\n    ");
                e.appendChild(a, r);
                var r = e.createElement("ul"),
                    l = e.createTextNode("\n      ");
                e.appendChild(r, l);
                var l = e.createElement("li"),
                    i = e.createElement("a"),
                    d = e.createComment("");
                e.appendChild(i, d), e.appendChild(l, i), e.appendChild(r, l);
                var l = e.createTextNode("\n    ");
                e.appendChild(r, l), e.appendChild(a, r);
                var r = e.createTextNode("\n  ");
                e.appendChild(a, r), e.appendChild(n, a);
                var a = e.createTextNode("\n");
                e.appendChild(n, a), e.appendChild(t, n);
                var n = e.createTextNode("\n\n");
                e.appendChild(t, n);
                var n = e.createElement("div");
                e.setAttribute(n, "class", "product__card-row tower");
                var a = e.createTextNode("\n  ");
                e.appendChild(n, a);
                var a = e.createElement("div");
                e.setAttribute(a, "class", "product__esrb pd-t-1 col-xs-6");
                var r = e.createTextNode("\n    ");
                e.appendChild(a, r);
                var r = e.createElement("img");
                e.appendChild(a, r);
                var r = e.createTextNode("\n  ");
                e.appendChild(a, r), e.appendChild(n, a);
                var a = e.createTextNode("\n  ");
                e.appendChild(n, a);
                var a = e.createElement("div");
                e.setAttribute(a, "class", "col-xs-6");
                var r = e.createTextNode("\n    ");
                e.appendChild(a, r);
                var r = e.createElement("ul"),
                    l = e.createTextNode("\n");
                e.appendChild(r, l);
                var l = e.createComment("");
                e.appendChild(r, l);
                var l = e.createTextNode("    ");
                e.appendChild(r, l), e.appendChild(a, r);
                var r = e.createTextNode("\n  ");
                e.appendChild(a, r), e.appendChild(n, a);
                var a = e.createTextNode("\n");
                e.appendChild(n, a), e.appendChild(t, n);
                var n = e.createTextNode("\n");
                return e.appendChild(t, n), t
            },
            buildRenderNodes: function(e, t, n) {
                var a = e.childAt(t, [10]),
                    r = e.childAt(a, [3, 1, 1, 0]),
                    l = e.childAt(t, [12]),
                    i = e.childAt(l, [1, 1]),
                    d = new Array(10);
                return d[0] = e.createMorphAt(e.childAt(t, [0]), 0, 0), d[1] = e.createMorphAt(t, 2, 2, n), d[2] = e.createMorphAt(t, 4, 4, n), d[3] = e.createMorphAt(t, 6, 6, n), d[4] = e.createMorphAt(t, 8, 8, n), d[5] = e.createMorphAt(e.childAt(a, [1]), 1, 1), d[6] = e.createAttrMorph(r, "href"), d[7] = e.createMorphAt(r, 0, 0), d[8] = e.createAttrMorph(i, "src"), d[9] = e.createMorphAt(e.childAt(l, [3, 1]), 1, 1), d
            },
            statements: [
                ["inline", "i18n", ["Game Information"],
                    [],
                    ["loc", [null, [1, 32],
                        [1, 59]
                    ]]
                ],
                ["inline", "directory/game-details/detail-component", [],
                    ["title", "Title", "details", ["subexpr", "@mut", [
                            ["get", "product.title", ["loc", [null, [3, 64],
                                [3, 77]
                            ]]]
                        ],
                        [],
                        []
                    ]],
                    ["loc", [null, [3, 0],
                        [3, 79]
                    ]]
                ],
                ["block", "if", [
                        ["get", "product.genres", ["loc", [null, [5, 6],
                            [5, 20]
                        ]]]
                    ],
                    [], 0, null, ["loc", [null, [5, 0],
                        [7, 7]
                    ]]
                ],
                ["inline", "directory/game-details/detail-component", [],
                    ["title", "Developer", "details", ["subexpr", "@mut", [
                            ["get", "product.developer_name", ["loc", [null, [9, 68],
                                [9, 90]
                            ]]]
                        ],
                        [],
                        []
                    ]],
                    ["loc", [null, [9, 0],
                        [9, 92]
                    ]]
                ],
                ["inline", "directory/game-details/detail-component", [],
                    ["title", "Publisher", "details", ["subexpr", "@mut", [
                            ["get", "product.publisher_name", ["loc", [null, [11, 68],
                                [11, 90]
                            ]]]
                        ],
                        [],
                        []
                    ]],
                    ["loc", [null, [11, 0],
                        [11, 92]
                    ]]
                ],
                ["inline", "i18n", ["More Info"],
                    [],
                    ["loc", [null, [15, 4],
                        [15, 24]
                    ]]
                ],
                ["attribute", "href", ["concat", [
                    ["get", "product.website_url", ["loc", [null, [19, 21],
                        [19, 40]
                    ]]]
                ]]],
                ["inline", "i18n", ["Website"],
                    [],
                    ["loc", [null, [19, 44],
                        [19, 62]
                    ]]
                ],
                ["attribute", "src", ["concat", [
                    ["get", "product.maturity_ratings.esrb.icon_url", ["loc", [null, [26, 16],
                        [26, 54]
                    ]]]
                ]]],
                ["block", "each", [
                        ["get", "product.maturity_ratings.esrb.details", ["loc", [null, [30, 14],
                            [30, 51]
                        ]]]
                    ],
                    [], 1, null, ["loc", [null, [30, 6],
                        [32, 15]
                    ]]
                ]
            ],
            locals: [],
            templates: [e, t]
        }
    }())
}), define("web-client/components/directory/game-details/get-game-card/component", ["exports", "ember-component", "web-client/utilities/urls/fuel", "ember-service/inject", "ember-computed"], function(e, t, n, a, r) {
    e.default = t.default.extend({
        classNames: ["brick", " brick--pd-none", "brick--theme-white", "mg-b-2"],
        launcher: n.LAUNCHER,
        launcherInfo: n.LAUNCHER_INFO,
        session: (0, a.default)(),
        tracking: (0, a.default)(),
        userData: r.default.alias("session.userData"),
        actions: {
            trackFlow: function() {
                var e = {
                    login: this.get("userData.login"),
                    user_id: this.get("userData.id"),
                    device_id: Twitch.idsForMixpanel.getOrCreateUniqueId(),
                    client_time: (new Date).getTime(),
                    platform: "web",
                    location: "game_detail",
                    game: this.get("gameDetails.product.title"),
                    channel: this.get("broadcasterName"),
                    urls: this.get("launcher")
                };
                this.get("tracking").trackEvent({
                    event: "fuel_download_launcher",
                    data: e
                })
            }
        }
    })
}), define("web-client/components/directory/game-details/get-game-card/offer/component", ["exports", "ember-computed", "ember-component", "ember-service/inject", "web-client/utilities/redirect", "web-client/utilities/urls/fuel"], function(e, t, n, a, r, l) {
    e.default = n.default.extend({
        store: (0, a.default)(),
        notify: (0, a.default)(),
        session: (0, a.default)(),
        claimOffer: (0, a.default)(),
        premiumGeo: (0, a.default)(),
        tracking: (0, a.default)(),
        windowOpen: r.windowOpen,
        connectHref: l.SUB_BUTTON_LINK_URL,
        landingHref: l.CONTENT_CODE_URL,
        learnMoreUrl: l.BASE_URL,
        broadcasterId: null,
        hasPrime: null,
        isClaimingOffer: !1,
        showPrimeContent: t.default.readOnly("premiumGeo.showPrimeContent"),
        linkingHref: (0, t.default)("linkingHref", "window.location.pathname", function() {
            var e = btoa(window.location.pathname.substring(1));
            return l.CONTENT_CODE_LINK_URL + "&redirectRoute=" + e
        }),
        checkoutDestinationUrl: (0, t.default)("gameDetails.actionDetails.destination_url", "broadcasterId", function() {
            return this.get("broadcasterId") ? this.get("gameDetails.actionDetails.destination_url") + "&br_id=" + this.get("broadcasterId") : this.get("gameDetails.actionDetails.destination_url")
        }),
        init: function() {
            var e = this;
            this._super.apply(this, arguments);
            var t = this.get("session"),
                n = t.isAuthenticated,
                a = t.userData;
            if (n) {
                var r = a.has_premium || !1;
                this.set("hasPrime", r)
            }
            return this.get("store").findAll("offer").then(function(t) {
                if (!e.isDestroyed) {
                    var n = t.filterBy("contentDeliveryMethod", "DIRECT_ENTITLEMENT");
                    return e._offerId = n.get("firstObject.id")
                }
            })
        },
        actions: {
            claimOffer: function() {
                var e = this;
                this.set("isClaimingOffer", !0);
                var t = this._offerId;
                this.get("claimOffer").claim(t).then(function(t) {
                    if (!e.isDestroyed && "DIRECT_ENTITLEMENT" === t.type) {
                        e.set("isClaimingOffer", !1);
                        var n = t.claimData.split("https://twitch.amazon.com/thanks?asin="),
                            a = 2 === n.length ? n[1] : n[0],
                            r = e.windowOpen("/products/thankyou/" + a, "Twitch", "width=1024,height=700,scrollbars=yes");
                        onPopoutClose(r, function() {
                            return e.reloadPage()
                        })
                    }
                }).finally(function() {
                    e.isDestroyed || e.set("isClaimingOffer", !1)
                })
            },
            buyGame: function() {
                var e = this,
                    t = {
                        login: this.get("userData.login"),
                        user_id: this.get("userData.id"),
                        device_id: Twitch.idsForMixpanel.getOrCreateUniqueId(),
                        client_time: (new Date).getTime(),
                        platform: "web",
                        location: "game_detail",
                        game_id: this.get("gameDetails.product.game_id"),
                        game_name: this.get("gameDetails.product.title"),
                        developer: this.get("gameDetails.product.developer_name"),
                        genre: this.get("gameDetails.product.genres"),
                        asin: this.get("gameDetails.product.asin"),
                        channel: this.get("broadcasterName")
                    };
                this.get("tracking").trackEvent({
                    event: "fuel_buy_button",
                    data: t
                });
                var n = this.windowOpen(this.get("checkoutDestinationUrl"), "Twitch", "width=1024,height=700,scrollbars=yes");
                onPopoutClose(n, function() {
                    return e.reloadPage()
                })
            }
        },
        reloadPage: function() {
            window.location.reload()
        }
    })
}), define("web-client/components/directory/game-details/get-game-card/offer/offer-buy-button/component", ["exports", "ember-component"], function(e, t) {
    e.default = t.default.extend({
        actions: {
            buyGame: function() {
                this.get("buyGame")()
            }
        }
    })
}), define("web-client/components/directory/game-details/get-game-card/offer/offer-buy-button/template", ["exports"], function(e) {
    e.default = Ember.HTMLBars.template(function() {
        return {
            meta: {
                fragmentReason: {
                    name: "modifiers",
                    modifiers: ["action"]
                },
                revision: "Ember@2.4.4",
                loc: {
                    source: null,
                    start: {
                        line: 1,
                        column: 0
                    },
                    end: {
                        line: 4,
                        column: 9
                    }
                },
                moduleName: "web-client/components/directory/game-details/get-game-card/offer/offer-buy-button/template.hbs"
            },
            isEmpty: !1,
            arity: 0,
            cachedFragment: null,
            hasRendered: !1,
            buildFragment: function(e) {
                var t = e.createDocumentFragment(),
                    n = e.createElement("button");
                e.setAttribute(n, "class", "button button--purchase full-width"), e.setAttribute(n, "data-test-offer-detail-button", "");
                var a = e.createTextNode("\n  ");
                e.appendChild(n, a);
                var a = e.createElement("span"),
                    r = e.createComment("");
                e.appendChild(a, r), e.appendChild(n, a);
                var a = e.createTextNode("\n  ");
                e.appendChild(n, a);
                var a = e.createElement("span");
                e.setAttribute(a, "class", "button__num-block");
                var r = e.createComment("");
                e.appendChild(a, r);
                var r = e.createTextNode(" ");
                e.appendChild(a, r);
                var r = e.createComment("");
                e.appendChild(a, r), e.appendChild(n, a);
                var a = e.createTextNode("\n");
                return e.appendChild(n, a), e.appendChild(t, n), t
            },
            buildRenderNodes: function(e, t, n) {
                var a = e.childAt(t, [0]),
                    r = e.childAt(a, [3]),
                    l = new Array(4);
                return l[0] = e.createElementMorph(a), l[1] = e.createMorphAt(e.childAt(a, [1]), 0, 0), l[2] = e.createMorphAt(r, 0, 0), l[3] = e.createMorphAt(r, 2, 2), l
            },
            statements: [
                ["element", "action", ["buyGame"],
                    [],
                    ["loc", [null, [1, 51],
                        [1, 71]
                    ]]
                ],
                ["inline", "i18n", ["Buy this Game"],
                    [],
                    ["loc", [null, [2, 8],
                        [2, 32]
                    ]]
                ],
                ["content", "price.price", ["loc", [null, [3, 34],
                    [3, 49]
                ]]],
                ["content", "price.currency_unit", ["loc", [null, [3, 50],
                    [3, 73]
                ]]]
            ],
            locals: [],
            templates: []
        }
    }())
}), define("web-client/components/directory/game-details/get-game-card/offer/template", ["exports"], function(e) {
    e.default = Ember.HTMLBars.template(function() {
        var e = function() {
                return {
                    meta: {
                        fragmentReason: {
                            name: "missing-wrapper",
                            problems: ["multiple-nodes"]
                        },
                        revision: "Ember@2.4.4",
                        loc: {
                            source: null,
                            start: {
                                line: 1,
                                column: 0
                            },
                            end: {
                                line: 20,
                                column: 0
                            }
                        },
                        moduleName: "web-client/components/directory/game-details/get-game-card/offer/template.hbs"
                    },
                    isEmpty: !1,
                    arity: 0,
                    cachedFragment: null,
                    hasRendered: !1,
                    buildFragment: function(e) {
                        var t = e.createDocumentFragment(),
                            n = e.createTextNode("  ");
                        e.appendChild(t, n);
                        var n = e.createElement("div");
                        e.setAttribute(n, "class", "flex get-game-card-offer__detail");
                        var a = e.createTextNode("\n    ");
                        e.appendChild(n, a);
                        var a = e.createElement("div");
                        e.setAttribute(a, "class", "get-game-card-offer__logo");
                        var r = e.createTextNode("\n      ");
                        e.appendChild(a, r);
                        var r = e.createComment("");
                        e.appendChild(a, r);
                        var r = e.createTextNode(" ");
                        e.appendChild(a, r);
                        var r = e.createTextNode("\n    ");
                        e.appendChild(a, r), e.appendChild(n, a);
                        var a = e.createTextNode("\n    ");
                        e.appendChild(n, a);
                        var a = e.createElement("h5"),
                            r = e.createComment("");
                        e.appendChild(a, r), e.appendChild(n, a);
                        var a = e.createTextNode("\n  ");
                        e.appendChild(n, a), e.appendChild(t, n);
                        var n = e.createTextNode("\n  ");
                        e.appendChild(t, n);
                        var n = e.createElement("a");
                        e.setAttribute(n, "class", "button full-width align-center"), e.setAttribute(n, "rel", "noopener noreferrer"), e.setAttribute(n, "target", "_blank"), e.setAttribute(n, "data-test-offer-detail", "");
                        var a = e.createTextNode("\n    ");
                        e.appendChild(n, a);
                        var a = e.createComment("");
                        e.appendChild(n, a);
                        var a = e.createTextNode("\n  ");
                        e.appendChild(n, a), e.appendChild(t, n);
                        var n = e.createTextNode("\n  ");
                        e.appendChild(t, n);
                        var n = e.createElement("div");
                        e.setAttribute(n, "class", "mg-t-1");
                        var a = e.createTextNode("\n    ");
                        e.appendChild(n, a);
                        var a = e.createComment("");
                        e.appendChild(n, a);
                        var a = e.createTextNode(" ");
                        e.appendChild(n, a);
                        var a = e.createElement("a");
                        e.setAttribute(a, "rel", "noopener noreferrer"), e.setAttribute(a, "target", "_blank");
                        var r = e.createComment("");
                        e.appendChild(a, r), e.appendChild(n, a);
                        var a = e.createTextNode("\n\n    ");
                        e.appendChild(n, a);
                        var a = e.createElement("div");
                        e.setAttribute(a, "class", "get-game-card-offer__fancy mg-y-1");
                        var r = e.createTextNode("\n      ");
                        e.appendChild(a, r);
                        var r = e.createElement("span");
                        e.setAttribute(r, "class", "get-game-card-offer__fancy-line inline-block pos-relative");
                        var l = e.createComment("");
                        e.appendChild(r, l), e.appendChild(a, r);
                        var r = e.createTextNode("\n    ");
                        e.appendChild(a, r), e.appendChild(n, a);
                        var a = e.createTextNode("\n\n    ");
                        e.appendChild(n, a);
                        var a = e.createComment("");
                        e.appendChild(n, a);
                        var a = e.createTextNode("\n  ");
                        e.appendChild(n, a), e.appendChild(t, n);
                        var n = e.createTextNode("\n");
                        return e.appendChild(t, n), t
                    },
                    buildRenderNodes: function(e, t, n) {
                        var a = e.childAt(t, [1]),
                            r = e.childAt(t, [3]),
                            l = e.childAt(t, [5]),
                            i = e.childAt(l, [3]),
                            d = new Array(9);
                        return d[0] = e.createMorphAt(e.childAt(a, [1]), 1, 1), d[1] = e.createMorphAt(e.childAt(a, [3]), 0, 0), d[2] = e.createAttrMorph(r, "href"), d[3] = e.createMorphAt(r, 1, 1), d[4] = e.createMorphAt(l, 1, 1), d[5] = e.createAttrMorph(i, "href"), d[6] = e.createMorphAt(i, 0, 0), d[7] = e.createMorphAt(e.childAt(l, [5, 1]), 0, 0), d[8] = e.createMorphAt(l, 7, 7), d
                    },
                    statements: [
                        ["inline", "partial", ["svg/samus/gp-crown"],
                            [],
                            ["loc", [null, [4, 6],
                                [4, 38]
                            ]]
                        ],
                        ["inline", "i18n", ["Free with Twitch Prime"],
                            [],
                            ["loc", [null, [6, 8],
                                [6, 41]
                            ]]
                        ],
                        ["attribute", "href", ["get", "landingHref", ["loc", [null, [8, 51],
                            [8, 62]
                        ]]]],
                        ["inline", "i18n", ["Start Your 30-day Free Trial"],
                            [],
                            ["loc", [null, [9, 4],
                                [9, 43]
                            ]]
                        ],
                        ["inline", "i18n", ["Already a Prime member?"],
                            [],
                            ["loc", [null, [12, 4],
                                [12, 38]
                            ]]
                        ],
                        ["attribute", "href", ["concat", [
                            ["get", "linkingHref", ["loc", [null, [12, 50],
                                [12, 61]
                            ]]]
                        ]]],
                        ["inline", "i18n", ["Connect your Amazon account"],
                            [],
                            ["loc", [null, [12, 107],
                                [12, 145]
                            ]]
                        ],
                        ["inline", "i18n", ["OR"],
                            [],
                            ["loc", [null, [15, 78],
                                [15, 91]
                            ]]
                        ],
                        ["inline", "directory/game-details/get-game-card/offer/offer-buy-button", [],
                            ["price", ["subexpr", "@mut", [
                                    ["get", "gameDetails.product.price", ["loc", [null, [18, 72],
                                        [18, 97]
                                    ]]]
                                ],
                                [],
                                []
                            ], "buyGame", ["subexpr", "action", ["buyGame"],
                                [],
                                ["loc", [null, [18, 106],
                                    [18, 124]
                                ]]
                            ]],
                            ["loc", [null, [18, 4],
                                [18, 126]
                            ]]
                        ]
                    ],
                    locals: [],
                    templates: []
                }
            }(),
            t = function() {
                var e = function() {
                        return {
                            meta: {
                                fragmentReason: !1,
                                revision: "Ember@2.4.4",
                                loc: {
                                    source: null,
                                    start: {
                                        line: 20,
                                        column: 0
                                    },
                                    end: {
                                        line: 37,
                                        column: 0
                                    }
                                },
                                moduleName: "web-client/components/directory/game-details/get-game-card/offer/template.hbs"
                            },
                            isEmpty: !1,
                            arity: 0,
                            cachedFragment: null,
                            hasRendered: !1,
                            buildFragment: function(e) {
                                var t = e.createDocumentFragment(),
                                    n = e.createTextNode("  ");
                                e.appendChild(t, n);
                                var n = e.createElement("div");
                                e.setAttribute(n, "class", "flex get-game-card-offer__detail");
                                var a = e.createTextNode("\n    ");
                                e.appendChild(n, a);
                                var a = e.createElement("div");
                                e.setAttribute(a, "class", "get-game-card-offer__logo");
                                var r = e.createTextNode("\n      ");
                                e.appendChild(a, r);
                                var r = e.createComment("");
                                e.appendChild(a, r);
                                var r = e.createTextNode(" ");
                                e.appendChild(a, r);
                                var r = e.createTextNode("\n    ");
                                e.appendChild(a, r), e.appendChild(n, a);
                                var a = e.createTextNode("\n    ");
                                e.appendChild(n, a);
                                var a = e.createElement("h5"),
                                    r = e.createComment("");
                                e.appendChild(a, r), e.appendChild(n, a);
                                var a = e.createTextNode("\n  ");
                                e.appendChild(n, a), e.appendChild(t, n);
                                var n = e.createTextNode("\n  ");
                                e.appendChild(t, n);
                                var n = e.createElement("button");
                                e.setAttribute(n, "type", "button"), e.setAttribute(n, "data-test-offer-detail", "");
                                var a = e.createTextNode("\n    ");
                                e.appendChild(n, a);
                                var a = e.createComment("");
                                e.appendChild(n, a);
                                var a = e.createTextNode("\n  ");
                                e.appendChild(n, a), e.appendChild(t, n);
                                var n = e.createTextNode("\n  ");
                                e.appendChild(t, n);
                                var n = e.createElement("div");
                                e.setAttribute(n, "class", "mg-t-1");
                                var a = e.createTextNode("\n    ");
                                e.appendChild(n, a);
                                var a = e.createElement("div");
                                e.setAttribute(a, "class", "get-game-card-offer__fancy mg-y-1");
                                var r = e.createTextNode("\n      ");
                                e.appendChild(a, r);
                                var r = e.createElement("span");
                                e.setAttribute(r, "class", "get-game-card-offer__fancy-line inline-block pos-relative");
                                var l = e.createComment("");
                                e.appendChild(r, l), e.appendChild(a, r);
                                var r = e.createTextNode("\n    ");
                                e.appendChild(a, r), e.appendChild(n, a);
                                var a = e.createTextNode("\n\n    ");
                                e.appendChild(n, a);
                                var a = e.createComment("");
                                e.appendChild(n, a);
                                var a = e.createTextNode("\n  ");
                                e.appendChild(n, a), e.appendChild(t, n);
                                var n = e.createTextNode("\n");
                                return e.appendChild(t, n), t
                            },
                            buildRenderNodes: function(e, t, n) {
                                var a = e.childAt(t, [1]),
                                    r = e.childAt(t, [3]),
                                    l = e.childAt(t, [5]),
                                    i = new Array(8);
                                return i[0] = e.createMorphAt(e.childAt(a, [1]), 1, 1), i[1] = e.createMorphAt(e.childAt(a, [3]), 0, 0), i[2] = e.createAttrMorph(r, "class"), i[3] = e.createAttrMorph(r, "disabled"), i[4] = e.createElementMorph(r), i[5] = e.createMorphAt(r, 1, 1), i[6] = e.createMorphAt(e.childAt(l, [1, 1]), 0, 0), i[7] = e.createMorphAt(l, 3, 3), i
                            },
                            statements: [
                                ["inline", "partial", ["svg/samus/gp-crown"],
                                    [],
                                    ["loc", [null, [23, 6],
                                        [23, 38]
                                    ]]
                                ],
                                ["inline", "i18n", ["Free with Twitch Prime"],
                                    [],
                                    ["loc", [null, [25, 8],
                                        [25, 41]
                                    ]]
                                ],
                                ["attribute", "class", ["concat", ["button full-width ", ["subexpr", "if", [
                                        ["get", "isClaimingOffer", ["loc", [null, [27, 40],
                                            [27, 55]
                                        ]]],
                                        ["get", "disablied", ["loc", [null, [27, 56],
                                            [27, 65]
                                        ]]]
                                    ],
                                    [],
                                    ["loc", [null, [27, 35],
                                        [27, 67]
                                    ]]
                                ]]]],
                                ["attribute", "disabled", ["get", "isClaimingOffer", ["loc", [null, [27, 80],
                                    [27, 95]
                                ]]]],
                                ["element", "action", ["claimOffer"],
                                    [],
                                    ["loc", [null, [27, 112],
                                        [27, 135]
                                    ]]
                                ],
                                ["inline", "i18n", ["Get this game with Prime"],
                                    [],
                                    ["loc", [null, [28, 4],
                                        [28, 39]
                                    ]]
                                ],
                                ["inline", "i18n", ["OR"],
                                    [],
                                    ["loc", [null, [32, 78],
                                        [32, 91]
                                    ]]
                                ],
                                ["inline", "directory/game-details/get-game-card/offer/offer-buy-button", [],
                                    ["price", ["subexpr", "@mut", [
                                            ["get", "gameDetails.product.price", ["loc", [null, [35, 72],
                                                [35, 97]
                                            ]]]
                                        ],
                                        [],
                                        []
                                    ], "buyGame", ["subexpr", "action", ["buyGame"],
                                        [],
                                        ["loc", [null, [35, 106],
                                            [35, 124]
                                        ]]
                                    ]],
                                    ["loc", [null, [35, 4],
                                        [35, 126]
                                    ]]
                                ]
                            ],
                            locals: [],
                            templates: []
                        }
                    }(),
                    t = function() {
                        return {
                            meta: {
                                fragmentReason: !1,
                                revision: "Ember@2.4.4",
                                loc: {
                                    source: null,
                                    start: {
                                        line: 37,
                                        column: 0
                                    },
                                    end: {
                                        line: 45,
                                        column: 0
                                    }
                                },
                                moduleName: "web-client/components/directory/game-details/get-game-card/offer/template.hbs"
                            },
                            isEmpty: !1,
                            arity: 0,
                            cachedFragment: null,
                            hasRendered: !1,
                            buildFragment: function(e) {
                                var t = e.createDocumentFragment(),
                                    n = e.createTextNode("  ");
                                e.appendChild(t, n);
                                var n = e.createElement("div");
                                e.setAttribute(n, "class", "get-game-card-offer__detail mg-t-1 mg-b-1");
                                var a = e.createTextNode("\n    ");
                                e.appendChild(n, a);
                                var a = e.createElement("span"),
                                    r = e.createTextNode("\n      ");
                                e.appendChild(a, r);
                                var r = e.createComment("");
                                e.appendChild(a, r);
                                var r = e.createElement("br");
                                e.appendChild(a, r);
                                var r = e.createTextNode("\n    ");
                                e.appendChild(a, r), e.appendChild(n, a);
                                var a = e.createTextNode("\n    ");
                                e.appendChild(n, a);
                                var a = e.createElement("a"),
                                    r = e.createComment("");
                                e.appendChild(a, r), e.appendChild(n, a);
                                var a = e.createElement("br");
                                e.appendChild(n, a);
                                var a = e.createTextNode("\n  ");
                                e.appendChild(n, a), e.appendChild(t, n);
                                var n = e.createTextNode("\n  ");
                                e.appendChild(t, n);
                                var n = e.createComment("");
                                e.appendChild(t, n);
                                var n = e.createTextNode("\n");
                                return e.appendChild(t, n), t
                            },
                            buildRenderNodes: function(e, t, n) {
                                var a = e.childAt(t, [1]),
                                    r = e.childAt(a, [3]),
                                    l = new Array(4);
                                return l[0] = e.createMorphAt(e.childAt(a, [1]), 1, 1), l[1] = e.createAttrMorph(r, "href"), l[2] = e.createMorphAt(r, 0, 0), l[3] = e.createMorphAt(t, 3, 3, n), l
                            },
                            statements: [
                                ["inline", "i18n", ["Sorry Twitch Prime is not available in your country"],
                                    [],
                                    ["loc", [null, [40, 6],
                                        [40, 68]
                                    ]]
                                ],
                                ["attribute", "href", ["get", "learnMoreUrl", ["loc", [null, [42, 14],
                                    [42, 26]
                                ]]]],
                                ["inline", "i18n", ["Learn More"],
                                    [],
                                    ["loc", [null, [42, 29],
                                        [42, 50]
                                    ]]
                                ],
                                ["inline", "directory/game-details/get-game-card/offer/offer-buy-button", [],
                                    ["price", ["subexpr", "@mut", [
                                            ["get", "gameDetails.product.price", ["loc", [null, [44, 70],
                                                [44, 95]
                                            ]]]
                                        ],
                                        [],
                                        []
                                    ], "buyGame", ["subexpr", "action", ["buyGame"],
                                        [],
                                        ["loc", [null, [44, 104],
                                            [44, 122]
                                        ]]
                                    ]],
                                    ["loc", [null, [44, 2],
                                        [44, 124]
                                    ]]
                                ]
                            ],
                            locals: [],
                            templates: []
                        }
                    }();
                return {
                    meta: {
                        fragmentReason: !1,
                        revision: "Ember@2.4.4",
                        loc: {
                            source: null,
                            start: {
                                line: 20,
                                column: 0
                            },
                            end: {
                                line: 45,
                                column: 0
                            }
                        },
                        moduleName: "web-client/components/directory/game-details/get-game-card/offer/template.hbs"
                    },
                    isEmpty: !1,
                    arity: 0,
                    cachedFragment: null,
                    hasRendered: !1,
                    buildFragment: function(e) {
                        var t = e.createDocumentFragment(),
                            n = e.createComment("");
                        return e.appendChild(t, n), t
                    },
                    buildRenderNodes: function(e, t, n) {
                        var a = new Array(1);
                        return a[0] = e.createMorphAt(t, 0, 0, n), e.insertBoundary(t, 0), e.insertBoundary(t, null), a
                    },
                    statements: [
                        ["block", "if", [
                                ["get", "hasPrime", ["loc", [null, [20, 10],
                                    [20, 18]
                                ]]]
                            ],
                            [], 0, 1, ["loc", [null, [20, 0],
                                [45, 0]
                            ]]
                        ]
                    ],
                    locals: [],
                    templates: [e, t]
                }
            }();
        return {
            meta: {
                fragmentReason: {
                    name: "missing-wrapper",
                    problems: ["wrong-type"]
                },
                revision: "Ember@2.4.4",
                loc: {
                    source: null,
                    start: {
                        line: 1,
                        column: 0
                    },
                    end: {
                        line: 46,
                        column: 0
                    }
                },
                moduleName: "web-client/components/directory/game-details/get-game-card/offer/template.hbs"
            },
            isEmpty: !1,
            arity: 0,
            cachedFragment: null,
            hasRendered: !1,
            buildFragment: function(e) {
                var t = e.createDocumentFragment(),
                    n = e.createComment("");
                return e.appendChild(t, n), t
            },
            buildRenderNodes: function(e, t, n) {
                var a = new Array(1);
                return a[0] = e.createMorphAt(t, 0, 0, n), e.insertBoundary(t, 0), e.insertBoundary(t, null), a
            },
            statements: [
                ["block", "if", [
                        ["subexpr", "and", [
                                ["get", "showPrimeContent", ["loc", [null, [1, 11],
                                    [1, 27]
                                ]]],
                                ["subexpr", "not", [
                                        ["get", "hasPrime", ["loc", [null, [1, 33],
                                            [1, 41]
                                        ]]]
                                    ],
                                    [],
                                    ["loc", [null, [1, 28],
                                        [1, 42]
                                    ]]
                                ]
                            ],
                            [],
                            ["loc", [null, [1, 6],
                                [1, 43]
                            ]]
                        ]
                    ],
                    [], 0, 1, ["loc", [null, [1, 0],
                        [45, 7]
                    ]]
                ]
            ],
            locals: [],
            templates: [e, t]
        }
    }())
}), define("web-client/components/directory/game-details/get-game-card/template", ["exports"], function(e) {
    e.default = Ember.HTMLBars.template(function() {
        var e = function() {
                return {
                    meta: {
                        fragmentReason: !1,
                        revision: "Ember@2.4.4",
                        loc: {
                            source: null,
                            start: {
                                line: 8,
                                column: 6
                            },
                            end: {
                                line: 13,
                                column: 6
                            }
                        },
                        moduleName: "web-client/components/directory/game-details/get-game-card/template.hbs"
                    },
                    isEmpty: !1,
                    arity: 0,
                    cachedFragment: null,
                    hasRendered: !1,
                    buildFragment: function(e) {
                        var t = e.createDocumentFragment(),
                            n = e.createTextNode("        ");
                        e.appendChild(t, n);
                        var n = e.createElement("h5");
                        e.setAttribute(n, "class", "get-game-card-offer__already-owned mg-t-1");
                        var a = e.createComment("");
                        e.appendChild(n, a), e.appendChild(t, n);
                        var n = e.createTextNode("\n        ");
                        e.appendChild(t, n);
                        var n = e.createElement("a");
                        e.setAttribute(n, "class", "button button--success full-width align-center mg-b-1"), e.setAttribute(n, "type", "button"), e.setAttribute(n, "rel", "noopener noreferrer"), e.setAttribute(n, "target", "_blank"), e.setAttribute(n, "data-test-card-detail", "");
                        var a = e.createTextNode("\n          ");
                        e.appendChild(n, a);
                        var a = e.createComment("");
                        e.appendChild(n, a);
                        var a = e.createTextNode("\n        ");
                        e.appendChild(n, a), e.appendChild(t, n);
                        var n = e.createTextNode("\n");
                        return e.appendChild(t, n), t
                    },
                    buildRenderNodes: function(e, t, n) {
                        var a = e.childAt(t, [3]),
                            r = new Array(4);
                        return r[0] = e.createMorphAt(e.childAt(t, [1]), 0, 0), r[1] = e.createAttrMorph(a, "href"), r[2] = e.createElementMorph(a), r[3] = e.createMorphAt(a, 1, 1), r
                    },
                    statements: [
                        ["inline", "i18n", ["You own this"],
                            [],
                            ["loc", [null, [9, 62],
                                [9, 85]
                            ]]
                        ],
                        ["attribute", "href", ["concat", [
                            ["get", "launcher", ["loc", [null, [10, 19],
                                [10, 27]
                            ]]]
                        ]]],
                        ["element", "action", ["trackFlow"],
                            ["preventDefault", !1],
                            ["loc", [null, [10, 149],
                                [10, 192]
                            ]]
                        ],
                        ["inline", "i18n", ["Download the Launcher"],
                            [],
                            ["loc", [null, [11, 10],
                                [11, 42]
                            ]]
                        ]
                    ],
                    locals: [],
                    templates: []
                }
            }(),
            t = function() {
                var e = function() {
                        return {
                            meta: {
                                fragmentReason: !1,
                                revision: "Ember@2.4.4",
                                loc: {
                                    source: null,
                                    start: {
                                        line: 13,
                                        column: 6
                                    },
                                    end: {
                                        line: 17,
                                        column: 6
                                    }
                                },
                                moduleName: "web-client/components/directory/game-details/get-game-card/template.hbs"
                            },
                            isEmpty: !1,
                            arity: 0,
                            cachedFragment: null,
                            hasRendered: !1,
                            buildFragment: function(e) {
                                var t = e.createDocumentFragment(),
                                    n = e.createTextNode("        ");
                                e.appendChild(t, n);
                                var n = e.createElement("div");
                                e.setAttribute(n, "class", "get-game-card-offer__link mg-t-1");
                                var a = e.createTextNode("\n          ");
                                e.appendChild(n, a);
                                var a = e.createElement("a");
                                e.setAttribute(a, "rel", "noopener noreferrer"), e.setAttribute(a, "target", "_blank");
                                var r = e.createComment("");
                                e.appendChild(a, r), e.appendChild(n, a);
                                var a = e.createTextNode("\n        ");
                                e.appendChild(n, a), e.appendChild(t, n);
                                var n = e.createTextNode("\n");
                                return e.appendChild(t, n), t
                            },
                            buildRenderNodes: function(e, t, n) {
                                var a = e.childAt(t, [1, 1]),
                                    r = new Array(2);
                                return r[0] = e.createAttrMorph(a, "href"), r[1] = e.createMorphAt(a, 0, 0), r
                            },
                            statements: [
                                ["attribute", "href", ["concat", [
                                    ["get", "gameDetails.actionDetails.destination_url", ["loc", [null, [15, 21],
                                        [15, 62]
                                    ]]]
                                ]]],
                                ["inline", "i18n", ["Sign up for the Breakaway Alpha"],
                                    [],
                                    ["loc", [null, [15, 108],
                                        [15, 150]
                                    ]]
                                ]
                            ],
                            locals: [],
                            templates: []
                        }
                    }(),
                    t = function() {
                        var e = function() {
                                return {
                                    meta: {
                                        fragmentReason: !1,
                                        revision: "Ember@2.4.4",
                                        loc: {
                                            source: null,
                                            start: {
                                                line: 17,
                                                column: 6
                                            },
                                            end: {
                                                line: 19,
                                                column: 6
                                            }
                                        },
                                        moduleName: "web-client/components/directory/game-details/get-game-card/template.hbs"
                                    },
                                    isEmpty: !1,
                                    arity: 0,
                                    cachedFragment: null,
                                    hasRendered: !1,
                                    buildFragment: function(e) {
                                        var t = e.createDocumentFragment(),
                                            n = e.createTextNode("        ");
                                        e.appendChild(t, n);
                                        var n = e.createComment("");
                                        e.appendChild(t, n);
                                        var n = e.createTextNode("\n");
                                        return e.appendChild(t, n), t
                                    },
                                    buildRenderNodes: function(e, t, n) {
                                        var a = new Array(1);
                                        return a[0] = e.createMorphAt(t, 1, 1, n), a
                                    },
                                    statements: [
                                        ["inline", "directory/game-details/get-game-card/offer", [],
                                            ["gameDetails", ["subexpr", "@mut", [
                                                    ["get", "gameDetails", ["loc", [null, [18, 65],
                                                        [18, 76]
                                                    ]]]
                                                ],
                                                [],
                                                []
                                            ], "broadcasterId", ["subexpr", "@mut", [
                                                    ["get", "broadcasterId", ["loc", [null, [18, 91],
                                                        [18, 104]
                                                    ]]]
                                                ],
                                                [],
                                                []
                                            ], "userData", ["subexpr", "@mut", [
                                                    ["get", "userData", ["loc", [null, [18, 114],
                                                        [18, 122]
                                                    ]]]
                                                ],
                                                [],
                                                []
                                            ], "broadcasterName", ["subexpr", "@mut", [
                                                    ["get", "broadcasterName", ["loc", [null, [18, 139],
                                                        [18, 154]
                                                    ]]]
                                                ],
                                                [],
                                                []
                                            ]],
                                            ["loc", [null, [18, 8],
                                                [18, 156]
                                            ]]
                                        ]
                                    ],
                                    locals: [],
                                    templates: []
                                }
                            }(),
                            t = function() {
                                return {
                                    meta: {
                                        fragmentReason: !1,
                                        revision: "Ember@2.4.4",
                                        loc: {
                                            source: null,
                                            start: {
                                                line: 19,
                                                column: 6
                                            },
                                            end: {
                                                line: 21,
                                                column: 6
                                            }
                                        },
                                        moduleName: "web-client/components/directory/game-details/get-game-card/template.hbs"
                                    },
                                    isEmpty: !1,
                                    arity: 0,
                                    cachedFragment: null,
                                    hasRendered: !1,
                                    buildFragment: function(e) {
                                        var t = e.createDocumentFragment(),
                                            n = e.createTextNode("        ");
                                        e.appendChild(t, n);
                                        var n = e.createComment("");
                                        e.appendChild(t, n);
                                        var n = e.createTextNode("\n      ");
                                        return e.appendChild(t, n), t
                                    },
                                    buildRenderNodes: function(e, t, n) {
                                        var a = new Array(1);
                                        return a[0] = e.createMorphAt(t, 1, 1, n), a
                                    },
                                    statements: [
                                        ["inline", "i18n", ["Unable to load feature"],
                                            [],
                                            ["loc", [null, [20, 8],
                                                [20, 41]
                                            ]]
                                        ]
                                    ],
                                    locals: [],
                                    templates: []
                                }
                            }();
                        return {
                            meta: {
                                fragmentReason: !1,
                                revision: "Ember@2.4.4",
                                loc: {
                                    source: null,
                                    start: {
                                        line: 17,
                                        column: 6
                                    },
                                    end: {
                                        line: 21,
                                        column: 6
                                    }
                                },
                                moduleName: "web-client/components/directory/game-details/get-game-card/template.hbs"
                            },
                            isEmpty: !1,
                            arity: 0,
                            cachedFragment: null,
                            hasRendered: !1,
                            buildFragment: function(e) {
                                var t = e.createDocumentFragment(),
                                    n = e.createComment("");
                                return e.appendChild(t, n), t
                            },
                            buildRenderNodes: function(e, t, n) {
                                var a = new Array(1);
                                return a[0] = e.createMorphAt(t, 0, 0, n), e.insertBoundary(t, 0), e.insertBoundary(t, null), a
                            },
                            statements: [
                                ["block", "if", [
                                        ["subexpr", "and", [
                                                ["subexpr", "is-feature-loaded", ["game-details"],
                                                    [],
                                                    ["loc", [null, [17, 21],
                                                        [17, 55]
                                                    ]]
                                                ],
                                                ["subexpr", "is-feature-loaded", ["premium"],
                                                    [],
                                                    ["loc", [null, [17, 56],
                                                        [17, 85]
                                                    ]]
                                                ]
                                            ],
                                            [],
                                            ["loc", [null, [17, 16],
                                                [17, 86]
                                            ]]
                                        ]
                                    ],
                                    [], 0, 1, ["loc", [null, [17, 6],
                                        [21, 6]
                                    ]]
                                ]
                            ],
                            locals: [],
                            templates: [e, t]
                        }
                    }();
                return {
                    meta: {
                        fragmentReason: !1,
                        revision: "Ember@2.4.4",
                        loc: {
                            source: null,
                            start: {
                                line: 13,
                                column: 6
                            },
                            end: {
                                line: 21,
                                column: 6
                            }
                        },
                        moduleName: "web-client/components/directory/game-details/get-game-card/template.hbs"
                    },
                    isEmpty: !1,
                    arity: 0,
                    cachedFragment: null,
                    hasRendered: !1,
                    buildFragment: function(e) {
                        var t = e.createDocumentFragment(),
                            n = e.createComment("");
                        return e.appendChild(t, n), t
                    },
                    buildRenderNodes: function(e, t, n) {
                        var a = new Array(1);
                        return a[0] = e.createMorphAt(t, 0, 0, n), e.insertBoundary(t, 0), e.insertBoundary(t, null), a
                    },
                    statements: [
                        ["block", "if", [
                                ["get", "gameDetails.product.is_externally_entitled", ["loc", [null, [13, 16],
                                    [13, 58]
                                ]]]
                            ],
                            [], 0, 1, ["loc", [null, [13, 6],
                                [21, 6]
                            ]]
                        ]
                    ],
                    locals: [],
                    templates: [e, t]
                }
            }(),
            n = function() {
                return {
                    meta: {
                        fragmentReason: !1,
                        revision: "Ember@2.4.4",
                        loc: {
                            source: null,
                            start: {
                                line: 23,
                                column: 4
                            },
                            end: {
                                line: 27,
                                column: 4
                            }
                        },
                        moduleName: "web-client/components/directory/game-details/get-game-card/template.hbs"
                    },
                    isEmpty: !1,
                    arity: 0,
                    cachedFragment: null,
                    hasRendered: !1,
                    buildFragment: function(e) {
                        var t = e.createDocumentFragment(),
                            n = e.createTextNode("      ");
                        e.appendChild(t, n);
                        var n = e.createElement("span");
                        e.setAttribute(n, "class", "block mg-t-1");
                        var a = e.createTextNode("\n        ");
                        e.appendChild(n, a);
                        var a = e.createComment("");
                        e.appendChild(n, a);
                        var a = e.createTextNode(" ");
                        e.appendChild(n, a);
                        var a = e.createElement("a");
                        e.setAttribute(a, "href", "link.twitch.tv/streamline-support"), e.setAttribute(a, "rel", "noopener noreferrer"), e.setAttribute(a, "target", "_blank");
                        var r = e.createComment("");
                        e.appendChild(a, r), e.appendChild(n, a);
                        var a = e.createTextNode(" ");
                        e.appendChild(n, a);
                        var a = e.createComment("");
                        e.appendChild(n, a);
                        var a = e.createTextNode("\n      ");
                        e.appendChild(n, a), e.appendChild(t, n);
                        var n = e.createTextNode("\n");
                        return e.appendChild(t, n), t
                    },
                    buildRenderNodes: function(e, t, n) {
                        var a = e.childAt(t, [1]),
                            r = new Array(3);
                        return r[0] = e.createMorphAt(a, 1, 1), r[1] = e.createMorphAt(e.childAt(a, [3]), 0, 0), r[2] = e.createMorphAt(a, 5, 5), r
                    },
                    statements: [
                        ["inline", "i18n", ["This purchase"],
                            [],
                            ["loc", [null, [25, 8],
                                [25, 32]
                            ]]
                        ],
                        ["inline", "i18n", ["may support"],
                            [],
                            ["loc", [null, [25, 119],
                                [25, 141]
                            ]]
                        ],
                        ["content", "broadcasterName", ["loc", [null, [25, 146],
                            [25, 165]
                        ]]]
                    ],
                    locals: [],
                    templates: []
                }
            }(),
            a = function() {
                return {
                    meta: {
                        fragmentReason: !1,
                        revision: "Ember@2.4.4",
                        loc: {
                            source: null,
                            start: {
                                line: 33,
                                column: 4
                            },
                            end: {
                                line: 35,
                                column: 4
                            }
                        },
                        moduleName: "web-client/components/directory/game-details/get-game-card/template.hbs"
                    },
                    isEmpty: !1,
                    arity: 1,
                    cachedFragment: null,
                    hasRendered: !1,
                    buildFragment: function(e) {
                        var t = e.createDocumentFragment(),
                            n = e.createTextNode("      ");
                        e.appendChild(t, n);
                        var n = e.createElement("img");
                        e.appendChild(t, n);
                        var n = e.createTextNode("\n");
                        return e.appendChild(t, n), t
                    },
                    buildRenderNodes: function(e, t, n) {
                        var a = e.childAt(t, [1]),
                            r = new Array(1);
                        return r[0] = e.createAttrMorph(a, "src"), r
                    },
                    statements: [
                        ["attribute", "src", ["concat", [
                            ["get", "supportedPlatform.icon_url", ["loc", [null, [34, 18],
                                [34, 44]
                            ]]]
                        ]]]
                    ],
                    locals: ["supportedPlatform"],
                    templates: []
                }
            }();
        return {
            meta: {
                fragmentReason: {
                    name: "missing-wrapper",
                    problems: ["multiple-nodes"]
                },
                revision: "Ember@2.4.4",
                loc: {
                    source: null,
                    start: {
                        line: 1,
                        column: 0
                    },
                    end: {
                        line: 39,
                        column: 0
                    }
                },
                moduleName: "web-client/components/directory/game-details/get-game-card/template.hbs"
            },
            isEmpty: !1,
            arity: 0,
            cachedFragment: null,
            hasRendered: !1,
            buildFragment: function(e) {
                var t = e.createDocumentFragment(),
                    n = e.createElement("div");
                e.setAttribute(n, "class", "product__item tower tower--gutter-none");
                var a = e.createTextNode("\n  ");
                e.appendChild(n, a);
                var a = e.createElement("div");
                e.setAttribute(a, "class", "product__box-art col-xs-4");
                var r = e.createTextNode("\n    ");
                e.appendChild(a, r);
                var r = e.createElement("img");
                e.appendChild(a, r);
                var r = e.createTextNode("\n  ");
                e.appendChild(a, r), e.appendChild(n, a);
                var a = e.createTextNode("\n  ");
                e.appendChild(n, a);
                var a = e.createElement("div");
                e.setAttribute(a, "class", "col-xs-8");
                var r = e.createTextNode("\n    ");
                e.appendChild(a, r);
                var r = e.createElement("h3");
                e.setAttribute(r, "class", "product__title"), e.setAttribute(r, "data-test-product-title", "");
                var l = e.createComment("");
                e.appendChild(r, l), e.appendChild(a, r);
                var r = e.createTextNode("\n    ");
                e.appendChild(a, r);
                var r = e.createElement("div");
                e.setAttribute(r, "class", "get-game-card-offer");
                var l = e.createTextNode("\n");
                e.appendChild(r, l);
                var l = e.createComment("");
                e.appendChild(r, l);
                var l = e.createTextNode("    ");
                e.appendChild(r, l), e.appendChild(a, r);
                var r = e.createTextNode("\n");
                e.appendChild(a, r);
                var r = e.createComment("");
                e.appendChild(a, r);
                var r = e.createTextNode("  ");
                e.appendChild(a, r), e.appendChild(n, a);
                var a = e.createTextNode("\n");
                e.appendChild(n, a), e.appendChild(t, n);
                var n = e.createTextNode("\n\n");
                e.appendChild(t, n);
                var n = e.createElement("div");
                e.setAttribute(n, "class", "product__card-footer");
                var a = e.createTextNode("\n  ");
                e.appendChild(n, a);
                var a = e.createElement("div");
                e.setAttribute(a, "class", "product__platform");
                var r = e.createTextNode("\n");
                e.appendChild(a, r);
                var r = e.createComment("");
                e.appendChild(a, r);
                var r = e.createTextNode("  ");
                e.appendChild(a, r), e.appendChild(n, a);
                var a = e.createTextNode("\n  ");
                e.appendChild(n, a);
                var a = e.createElement("span");
                e.setAttribute(a, "class", "product__footnote col-xs-8");
                var r = e.createComment("");
                e.appendChild(a, r);
                var r = e.createTextNode(" ");
                e.appendChild(a, r);
                var r = e.createElement("a");
                e.setAttribute(r, "rel", "noopener noreferrer"), e.setAttribute(r, "target", "_blank");
                var l = e.createComment("");
                e.appendChild(r, l), e.appendChild(a, r), e.appendChild(n, a);
                var a = e.createTextNode("\n");
                e.appendChild(n, a), e.appendChild(t, n);
                var n = e.createTextNode("\n");
                return e.appendChild(t, n), t
            },
            buildRenderNodes: function(e, t, n) {
                var a = e.childAt(t, [0]),
                    r = e.childAt(a, [1, 1]),
                    l = e.childAt(a, [3]),
                    i = e.childAt(t, [2]),
                    d = e.childAt(i, [3]),
                    o = e.childAt(d, [2]),
                    c = new Array(8);
                return c[0] = e.createAttrMorph(r, "src"), c[1] = e.createMorphAt(e.childAt(l, [1]), 0, 0), c[2] = e.createMorphAt(e.childAt(l, [3]), 1, 1), c[3] = e.createMorphAt(l, 5, 5), c[4] = e.createMorphAt(e.childAt(i, [1]), 1, 1), c[5] = e.createMorphAt(d, 0, 0), c[6] = e.createAttrMorph(o, "href"), c[7] = e.createMorphAt(o, 0, 0), c
            },
            statements: [
                ["attribute", "src", ["concat", [
                    ["get", "gameDetails.product.media.box_art_url", ["loc", [null, [3, 16],
                        [3, 53]
                    ]]]
                ]]],
                ["content", "gameDetails.product.title", ["loc", [null, [6, 55],
                    [6, 84]
                ]]],
                ["block", "if", [
                        ["get", "gameDetails.userEntitlement.entitled", ["loc", [null, [8, 12],
                            [8, 48]
                        ]]]
                    ],
                    [], 0, 1, ["loc", [null, [8, 6],
                        [21, 13]
                    ]]
                ],
                ["block", "if", [
                        ["get", "broadcasterName", ["loc", [null, [23, 10],
                            [23, 25]
                        ]]]
                    ],
                    [], 2, null, ["loc", [null, [23, 4],
                        [27, 11]
                    ]]
                ],
                ["block", "each", [
                        ["get", "gameDetails.product.supported_platforms", ["loc", [null, [33, 12],
                            [33, 51]
                        ]]]
                    ],
                    [], 3, null, ["loc", [null, [33, 4],
                        [35, 13]
                    ]]
                ],
                ["inline", "i18n", ["Available as a digital download via the "],
                    [],
                    ["loc", [null, [37, 43],
                        [37, 94]
                    ]]
                ],
                ["attribute", "href", ["concat", [
                    ["get", "launcherInfo", ["loc", [null, [37, 106],
                        [37, 118]
                    ]]]
                ]]],
                ["inline", "i18n", ["Twitch Launcher"],
                    [],
                    ["loc", [null, [37, 164],
                        [37, 190]
                    ]]
                ]
            ],
            locals: [],
            templates: [e, t, n, a]
        }
    }())
}), define("web-client/components/directory/game-details/navigation/component", ["exports", "ember-component", "ember-service/inject", "ember-metal/observer", "ember-runloop"], function(e, t, n, a, r) {
    e.default = t.default.extend({
        layout: (0, n.default)(),
        didInsertElement: function() {
            this._super.apply(this, arguments);
            var e = "url(" + this.get("product.media.background_image_url") + ")";
            this.$(".details-backdrop").css("background-image", e), this.get("layout.contentWidth"), this.$().find("img").one("load", function() {
                r.default.debounce(this, this._setBackdropHeight, 1)
            }.bind(this))
        },
        resizeObserver: (0,
            a.default)("layout.contentWidth", function() {
            this.debounceTask("_setBackdropHeight", 100)
        }),
        _setBackdropHeight: function() {
            var e = this.$(".directory_header").outerHeight(!0),
                t = this.$(".carousel").height(),
                n = 60,
                a = e + t + n + "px";
            this.$(".details-backdrop").css("height", a)
        }
    })
}), define("web-client/components/directory/game-details/navigation/template", ["exports"], function(e) {
    e.default = Ember.HTMLBars.template(function() {
        var e = function() {
                var e = function() {
                    return {
                        meta: {
                            fragmentReason: !1,
                            revision: "Ember@2.4.4",
                            loc: {
                                source: null,
                                start: {
                                    line: 14,
                                    column: 10
                                },
                                end: {
                                    line: 14,
                                    column: 72
                                }
                            },
                            moduleName: "web-client/components/directory/game-details/navigation/template.hbs"
                        },
                        isEmpty: !1,
                        arity: 0,
                        cachedFragment: null,
                        hasRendered: !1,
                        buildFragment: function(e) {
                            var t = e.createDocumentFragment(),
                                n = e.createComment("");
                            return e.appendChild(t, n), t
                        },
                        buildRenderNodes: function(e, t, n) {
                            var a = new Array(1);
                            return a[0] = e.createMorphAt(t, 0, 0, n), e.insertBoundary(t, 0), e.insertBoundary(t, null), a
                        },
                        statements: [
                            ["inline", "i18n", ["Live Channels"],
                                [],
                                ["loc", [null, [14, 48],
                                    [14, 72]
                                ]]
                            ]
                        ],
                        locals: [],
                        templates: []
                    }
                }();
                return {
                    meta: {
                        fragmentReason: !1,
                        revision: "Ember@2.4.4",
                        loc: {
                            source: null,
                            start: {
                                line: 13,
                                column: 8
                            },
                            end: {
                                line: 15,
                                column: 8
                            }
                        },
                        moduleName: "web-client/components/directory/game-details/navigation/template.hbs"
                    },
                    isEmpty: !1,
                    arity: 0,
                    cachedFragment: null,
                    hasRendered: !1,
                    buildFragment: function(e) {
                        var t = e.createDocumentFragment(),
                            n = e.createTextNode("          ");
                        e.appendChild(t, n);
                        var n = e.createComment("");
                        e.appendChild(t, n);
                        var n = e.createTextNode("\n");
                        return e.appendChild(t, n), t
                    },
                    buildRenderNodes: function(e, t, n) {
                        var a = new Array(1);
                        return a[0] = e.createMorphAt(t, 1, 1, n), a
                    },
                    statements: [
                        ["block", "link-to", ["directory.csgo.channels"],
                            [], 0, null, ["loc", [null, [14, 10],
                                [14, 84]
                            ]]
                        ]
                    ],
                    locals: [],
                    templates: [e]
                }
            }(),
            t = function() {
                var e = function() {
                    return {
                        meta: {
                            fragmentReason: !1,
                            revision: "Ember@2.4.4",
                            loc: {
                                source: null,
                                start: {
                                    line: 16,
                                    column: 10
                                },
                                end: {
                                    line: 16,
                                    column: 85
                                }
                            },
                            moduleName: "web-client/components/directory/game-details/navigation/template.hbs"
                        },
                        isEmpty: !1,
                        arity: 0,
                        cachedFragment: null,
                        hasRendered: !1,
                        buildFragment: function(e) {
                            var t = e.createDocumentFragment(),
                                n = e.createComment("");
                            return e.appendChild(t, n), t
                        },
                        buildRenderNodes: function(e, t, n) {
                            var a = new Array(1);
                            return a[0] = e.createMorphAt(t, 0, 0, n), e.insertBoundary(t, 0), e.insertBoundary(t, null), a
                        },
                        statements: [
                            ["inline", "i18n", ["Live Channels"],
                                [],
                                ["loc", [null, [16, 61],
                                    [16, 85]
                                ]]
                            ]
                        ],
                        locals: [],
                        templates: []
                    }
                }();
                return {
                    meta: {
                        fragmentReason: !1,
                        revision: "Ember@2.4.4",
                        loc: {
                            source: null,
                            start: {
                                line: 15,
                                column: 8
                            },
                            end: {
                                line: 17,
                                column: 8
                            }
                        },
                        moduleName: "web-client/components/directory/game-details/navigation/template.hbs"
                    },
                    isEmpty: !1,
                    arity: 0,
                    cachedFragment: null,
                    hasRendered: !1,
                    buildFragment: function(e) {
                        var t = e.createDocumentFragment(),
                            n = e.createTextNode("          ");
                        e.appendChild(t, n);
                        var n = e.createComment("");
                        e.appendChild(t, n);
                        var n = e.createTextNode("\n");
                        return e.appendChild(t, n), t
                    },
                    buildRenderNodes: function(e, t, n) {
                        var a = new Array(1);
                        return a[0] = e.createMorphAt(t, 1, 1, n), a
                    },
                    statements: [
                        ["block", "link-to", ["directory.game.index", ["get", "product.game_id", ["loc", [null, [16, 44],
                                [16, 59]
                            ]]]],
                            [], 0, null, ["loc", [null, [16, 10],
                                [16, 97]
                            ]]
                        ]
                    ],
                    locals: [],
                    templates: [e]
                }
            }(),
            n = function() {
                return {
                    meta: {
                        fragmentReason: !1,
                        revision: "Ember@2.4.4",
                        loc: {
                            source: null,
                            start: {
                                line: 20,
                                column: 8
                            },
                            end: {
                                line: 20,
                                column: 77
                            }
                        },
                        moduleName: "web-client/components/directory/game-details/navigation/template.hbs"
                    },
                    isEmpty: !1,
                    arity: 0,
                    cachedFragment: null,
                    hasRendered: !1,
                    buildFragment: function(e) {
                        var t = e.createDocumentFragment(),
                            n = e.createComment("");
                        return e.appendChild(t, n), t
                    },
                    buildRenderNodes: function(e, t, n) {
                        var a = new Array(1);
                        return a[0] = e.createMorphAt(t, 0, 0, n), e.insertBoundary(t, 0), e.insertBoundary(t, null), a
                    },
                    statements: [
                        ["inline", "i18n", ["Videos"],
                            [],
                            ["loc", [null, [20, 60],
                                [20, 77]
                            ]]
                        ]
                    ],
                    locals: [],
                    templates: []
                }
            }(),
            a = function() {
                return {
                    meta: {
                        fragmentReason: !1,
                        revision: "Ember@2.4.4",
                        loc: {
                            source: null,
                            start: {
                                line: 23,
                                column: 8
                            },
                            end: {
                                line: 23,
                                column: 84
                            }
                        },
                        moduleName: "web-client/components/directory/game-details/navigation/template.hbs"
                    },
                    isEmpty: !1,
                    arity: 0,
                    cachedFragment: null,
                    hasRendered: !1,
                    buildFragment: function(e) {
                        var t = e.createDocumentFragment(),
                            n = e.createComment("");
                        return e.appendChild(t, n), t
                    },
                    buildRenderNodes: function(e, t, n) {
                        var a = new Array(1);
                        return a[0] = e.createMorphAt(t, 0, 0, n), e.insertBoundary(t, 0), e.insertBoundary(t, null), a
                    },
                    statements: [
                        ["inline", "i18n", ["Game Details"],
                            [],
                            ["loc", [null, [23, 61],
                                [23, 84]
                            ]]
                        ]
                    ],
                    locals: [],
                    templates: []
                }
            }();
        return {
            meta: {
                fragmentReason: {
                    name: "missing-wrapper",
                    problems: ["multiple-nodes"]
                },
                revision: "Ember@2.4.4",
                loc: {
                    source: null,
                    start: {
                        line: 1,
                        column: 0
                    },
                    end: {
                        line: 30,
                        column: 0
                    }
                },
                moduleName: "web-client/components/directory/game-details/navigation/template.hbs"
            },
            isEmpty: !1,
            arity: 0,
            cachedFragment: null,
            hasRendered: !1,
            buildFragment: function(e) {
                var t = e.createDocumentFragment(),
                    n = e.createElement("div");
                e.setAttribute(n, "class", "details-backdrop");
                var a = e.createTextNode("\n  ");
                e.appendChild(n, a);
                var a = e.createElement("div");
                e.setAttribute(a, "class", "details-backdrop-fade");
                var r = e.createTextNode("\n  ");
                e.appendChild(a, r), e.appendChild(n, a);
                var a = e.createTextNode("\n");
                e.appendChild(n, a), e.appendChild(t, n);
                var n = e.createTextNode("\n");
                e.appendChild(t, n);
                var n = e.createElement("div");
                e.setAttribute(n, "class", "details-wrapper");
                var a = e.createTextNode("\n  ");
                e.appendChild(n, a);
                var a = e.createElement("div");
                e.setAttribute(a, "class", "directory_header");
                var r = e.createTextNode("\n    ");
                e.appendChild(a, r);
                var r = e.createElement("div");
                e.setAttribute(r, "class", "game-heading");
                var l = e.createTextNode("\n      ");
                e.appendChild(r, l);
                var l = e.createElement("h2");
                e.setAttribute(l, "class", "title");
                var i = e.createComment("");
                e.appendChild(l, i), e.appendChild(r, l);
                var l = e.createTextNode("\n    ");
                e.appendChild(r, l), e.appendChild(a, r);
                var r = e.createTextNode("\n\n    ");
                e.appendChild(a, r);
                var r = e.createElement("ul");
                e.setAttribute(r, "class", "details-nav tabs");
                var l = e.createTextNode("\n      ");
                e.appendChild(r, l);
                var l = e.createElement("li"),
                    i = e.createTextNode("\n");
                e.appendChild(l, i);
                var i = e.createComment("");
                e.appendChild(l, i);
                var i = e.createTextNode("      ");
                e.appendChild(l, i), e.appendChild(r, l);
                var l = e.createTextNode("\n      ");
                e.appendChild(r, l);
                var l = e.createElement("li"),
                    i = e.createTextNode("\n        ");
                e.appendChild(l, i);
                var i = e.createComment("");
                e.appendChild(l, i);
                var i = e.createTextNode("\n      ");
                e.appendChild(l, i), e.appendChild(r, l);
                var l = e.createTextNode("\n      ");
                e.appendChild(r, l);
                var l = e.createElement("li"),
                    i = e.createTextNode("\n        ");
                e.appendChild(l, i);
                var i = e.createComment("");
                e.appendChild(l, i);
                var i = e.createTextNode("\n      ");
                e.appendChild(l, i), e.appendChild(r, l);
                var l = e.createTextNode("\n    ");
                e.appendChild(r, l), e.appendChild(a, r);
                var r = e.createTextNode("\n  ");
                e.appendChild(a, r), e.appendChild(n, a);
                var a = e.createTextNode("\n\n  ");
                e.appendChild(n, a);
                var a = e.createComment("");
                e.appendChild(n, a);
                var a = e.createTextNode("\n");
                e.appendChild(n, a), e.appendChild(t, n);
                var n = e.createTextNode("\n");
                return e.appendChild(t, n), t
            },
            buildRenderNodes: function(e, t, n) {
                var a = e.childAt(t, [2]),
                    r = e.childAt(a, [1]),
                    l = e.childAt(r, [3]),
                    i = new Array(5);
                return i[0] = e.createMorphAt(e.childAt(r, [1, 1]), 0, 0), i[1] = e.createMorphAt(e.childAt(l, [1]), 1, 1), i[2] = e.createMorphAt(e.childAt(l, [3]), 1, 1), i[3] = e.createMorphAt(e.childAt(l, [5]), 1, 1), i[4] = e.createMorphAt(a, 3, 3), i
            },
            statements: [
                ["content", "product.title", ["loc", [null, [8, 24],
                    [8, 41]
                ]]],
                ["block", "if", [
                        ["get", "isCsgo", ["loc", [null, [13, 14],
                            [13, 20]
                        ]]]
                    ],
                    [], 0, 1, ["loc", [null, [13, 8],
                        [17, 15]
                    ]]
                ],
                ["block", "link-to", ["directory.game.videos", ["get", "product.game_id", ["loc", [null, [20, 43],
                        [20, 58]
                    ]]]],
                    [], 2, null, ["loc", [null, [20, 8],
                        [20, 89]
                    ]]
                ],
                ["block", "link-to", ["directory.game-details", ["get", "product.game_id", ["loc", [null, [23, 44],
                        [23, 59]
                    ]]]],
                    [], 3, null, ["loc", [null, [23, 8],
                        [23, 96]
                    ]]
                ],
                ["content", "yield", ["loc", [null, [28, 2],
                    [28, 11]
                ]]]
            ],
            locals: [],
            templates: [e, t, n, a]
        }
    }())
}), define("web-client/components/directory/game-details/pc-requirements/component", ["exports", "ember-component"], function(e, t) {
    e.default = t.default.extend({
        classNames: ["brick", "brick--pd-lg", "brick--theme-grey", "mg-t-2 mg-b-2"],
        minimumReqs: !0,
        actions: {
            openRecommended: function() {
                this.set("minimumReqs", !1)
            },
            openMinimum: function() {
                this.set("minimumReqs", !0)
            }
        }
    })
}), define("web-client/components/directory/game-details/pc-requirements/requirement-detail/template", ["exports"], function(e) {
    e.default = Ember.HTMLBars.template(function() {
        return {
            meta: {
                fragmentReason: {
                    name: "missing-wrapper",
                    problems: ["wrong-type", "multiple-nodes"]
                },
                revision: "Ember@2.4.4",
                loc: {
                    source: null,
                    start: {
                        line: 1,
                        column: 0
                    },
                    end: {
                        line: 12,
                        column: 0
                    }
                },
                moduleName: "web-client/components/directory/game-details/pc-requirements/requirement-detail/template.hbs"
            },
            isEmpty: !1,
            arity: 0,
            cachedFragment: null,
            hasRendered: !1,
            buildFragment: function(e) {
                var t = e.createDocumentFragment(),
                    n = e.createComment("");
                e.appendChild(t, n);
                var n = e.createTextNode("\n\n");
                e.appendChild(t, n);
                var n = e.createComment("");
                e.appendChild(t, n);
                var n = e.createTextNode("\n\n");
                e.appendChild(t, n);
                var n = e.createComment("");
                e.appendChild(t, n);
                var n = e.createTextNode("\n\n");
                e.appendChild(t, n);
                var n = e.createComment("");
                e.appendChild(t, n);
                var n = e.createTextNode("\n\n");
                e.appendChild(t, n);
                var n = e.createComment("");
                e.appendChild(t, n);
                var n = e.createTextNode("\n\n");
                e.appendChild(t, n);
                var n = e.createComment("");
                e.appendChild(t, n);
                var n = e.createTextNode("\n");
                return e.appendChild(t, n), t
            },
            buildRenderNodes: function(e, t, n) {
                var a = new Array(6);
                return a[0] = e.createMorphAt(t, 0, 0, n), a[1] = e.createMorphAt(t, 2, 2, n), a[2] = e.createMorphAt(t, 4, 4, n), a[3] = e.createMorphAt(t, 6, 6, n), a[4] = e.createMorphAt(t, 8, 8, n), a[5] = e.createMorphAt(t, 10, 10, n), e.insertBoundary(t, 0), a
            },
            statements: [
                ["inline", "directory/game-details/detail-component", [],
                    ["title", "Video Card", "details", ["subexpr", "@mut", [
                            ["get", "requirements.video_card", ["loc", [null, [1, 69],
                                [1, 92]
                            ]]]
                        ],
                        [],
                        []
                    ]],
                    ["loc", [null, [1, 0],
                        [1, 94]
                    ]]
                ],
                ["inline", "directory/game-details/detail-component", [],
                    ["title", "RAM", "details", ["subexpr", "@mut", [
                            ["get", "requirements.ram", ["loc", [null, [3, 62],
                                [3, 78]
                            ]]]
                        ],
                        [],
                        []
                    ]],
                    ["loc", [null, [3, 0],
                        [3, 80]
                    ]]
                ],
                ["inline", "directory/game-details/detail-component", [],
                    ["title", "Hard Drive Space", "details", ["subexpr", "@mut", [
                            ["get", "requirements.hard_drive_space", ["loc", [null, [5, 75],
                                [5, 104]
                            ]]]
                        ],
                        [],
                        []
                    ]],
                    ["loc", [null, [5, 0],
                        [5, 106]
                    ]]
                ],
                ["inline", "directory/game-details/detail-component", [],
                    ["title", "Operating System", "details", ["subexpr", "@mut", [
                            ["get", "requirements.os_version", ["loc", [null, [7, 75],
                                [7, 98]
                            ]]]
                        ],
                        [],
                        []
                    ]],
                    ["loc", [null, [7, 0],
                        [7, 100]
                    ]]
                ],
                ["inline", "directory/game-details/detail-component", [],
                    ["title", "Processor", "details", ["subexpr", "@mut", [
                            ["get", "requirements.processor", ["loc", [null, [9, 68],
                                [9, 90]
                            ]]]
                        ],
                        [],
                        []
                    ]],
                    ["loc", [null, [9, 0],
                        [9, 92]
                    ]]
                ],
                ["inline", "directory/game-details/detail-component", [],
                    ["title", "DirectX", "details", ["subexpr", "@mut", [
                            ["get", "requirements.direct_x_version", ["loc", [null, [11, 66],
                                [11, 95]
                            ]]]
                        ],
                        [],
                        []
                    ]],
                    ["loc", [null, [11, 0],
                        [11, 97]
                    ]]
                ]
            ],
            locals: [],
            templates: []
        }
    }())
}), define("web-client/components/directory/game-details/pc-requirements/template", ["exports"], function(e) {
    e.default = Ember.HTMLBars.template(function() {
        var e = function() {
                return {
                    meta: {
                        fragmentReason: !1,
                        revision: "Ember@2.4.4",
                        loc: {
                            source: null,
                            start: {
                                line: 8,
                                column: 0
                            },
                            end: {
                                line: 10,
                                column: 0
                            }
                        },
                        moduleName: "web-client/components/directory/game-details/pc-requirements/template.hbs"
                    },
                    isEmpty: !1,
                    arity: 0,
                    cachedFragment: null,
                    hasRendered: !1,
                    buildFragment: function(e) {
                        var t = e.createDocumentFragment(),
                            n = e.createTextNode("  ");
                        e.appendChild(t, n);
                        var n = e.createComment("");
                        e.appendChild(t, n);
                        var n = e.createTextNode("\n");
                        return e.appendChild(t, n), t
                    },
                    buildRenderNodes: function(e, t, n) {
                        var a = new Array(1);
                        return a[0] = e.createMorphAt(t, 1, 1, n), a
                    },
                    statements: [
                        ["inline", "directory/game-details/pc-requirements/requirement-detail", [],
                            ["requirements", ["subexpr", "@mut", [
                                    ["get", "pcRequirements.minimum", ["loc", [null, [9, 75],
                                        [9, 97]
                                    ]]]
                                ],
                                [],
                                []
                            ]],
                            ["loc", [null, [9, 2],
                                [9, 99]
                            ]]
                        ]
                    ],
                    locals: [],
                    templates: []
                }
            }(),
            t = function() {
                return {
                    meta: {
                        fragmentReason: !1,
                        revision: "Ember@2.4.4",
                        loc: {
                            source: null,
                            start: {
                                line: 13,
                                column: 0
                            },
                            end: {
                                line: 15,
                                column: 0
                            }
                        },
                        moduleName: "web-client/components/directory/game-details/pc-requirements/template.hbs"
                    },
                    isEmpty: !1,
                    arity: 0,
                    cachedFragment: null,
                    hasRendered: !1,
                    buildFragment: function(e) {
                        var t = e.createDocumentFragment(),
                            n = e.createTextNode("  ");
                        e.appendChild(t, n);
                        var n = e.createComment("");
                        e.appendChild(t, n);
                        var n = e.createTextNode("\n");
                        return e.appendChild(t, n), t
                    },
                    buildRenderNodes: function(e, t, n) {
                        var a = new Array(1);
                        return a[0] = e.createMorphAt(t, 1, 1, n), a
                    },
                    statements: [
                        ["inline", "directory/game-details/pc-requirements/requirement-detail", [],
                            ["requirements", ["subexpr", "@mut", [
                                    ["get", "pcRequirements.recommended", ["loc", [null, [14, 75],
                                        [14, 101]
                                    ]]]
                                ],
                                [],
                                []
                            ]],
                            ["loc", [null, [14, 2],
                                [14, 103]
                            ]]
                        ]
                    ],
                    locals: [],
                    templates: []
                }
            }();
        return {
            meta: {
                fragmentReason: {
                    name: "missing-wrapper",
                    problems: ["multiple-nodes", "wrong-type"]
                },
                revision: "Ember@2.4.4",
                loc: {
                    source: null,
                    start: {
                        line: 1,
                        column: 0
                    },
                    end: {
                        line: 16,
                        column: 0
                    }
                },
                moduleName: "web-client/components/directory/game-details/pc-requirements/template.hbs"
            },
            isEmpty: !1,
            arity: 0,
            cachedFragment: null,
            hasRendered: !1,
            buildFragment: function(e) {
                var t = e.createDocumentFragment(),
                    n = e.createElement("h3");
                e.setAttribute(n, "class", "product__card-title");
                var a = e.createComment("");
                e.appendChild(n, a), e.appendChild(t, n);
                var n = e.createTextNode("\n");
                e.appendChild(t, n);
                var n = e.createElement("ul");
                e.setAttribute(n, "class", "product__tabs tabs clearfix");
                var a = e.createTextNode("\n  ");
                e.appendChild(n, a);
                var a = e.createElement("li"),
                    r = e.createElement("button");
                e.setAttribute(r, "class", "button button--text pd-x-0");
                var l = e.createComment("");
                e.appendChild(r, l), e.appendChild(a, r), e.appendChild(n, a);
                var a = e.createTextNode("\n  ");
                e.appendChild(n, a);
                var a = e.createElement("li"),
                    r = e.createElement("button");
                e.setAttribute(r, "class", "button button--text pd-x-0");
                var l = e.createComment("");
                e.appendChild(r, l), e.appendChild(a, r), e.appendChild(n, a);
                var a = e.createTextNode("\n");
                e.appendChild(n, a), e.appendChild(t, n);
                var n = e.createTextNode("\n\n");
                e.appendChild(t, n);
                var n = e.createComment("");
                e.appendChild(t, n);
                var n = e.createTextNode("\n");
                e.appendChild(t, n);
                var n = e.createComment("");
                return e.appendChild(t, n), t
            },
            buildRenderNodes: function(e, t, n) {
                var a = e.childAt(t, [2]),
                    r = e.childAt(a, [1]),
                    l = e.childAt(r, [0]),
                    i = e.childAt(a, [3]),
                    d = e.childAt(i, [0]),
                    o = new Array(9);
                return o[0] = e.createMorphAt(e.childAt(t, [0]), 0, 0), o[1] = e.createAttrMorph(r, "class"), o[2] = e.createElementMorph(l), o[3] = e.createMorphAt(l, 0, 0), o[4] = e.createAttrMorph(i, "class"), o[5] = e.createElementMorph(d), o[6] = e.createMorphAt(d, 0, 0), o[7] = e.createMorphAt(t, 4, 4, n), o[8] = e.createMorphAt(t, 6, 6, n), e.insertBoundary(t, null), o
            },
            statements: [
                ["inline", "i18n", ["PC Requirements"],
                    [],
                    ["loc", [null, [1, 32],
                        [1, 58]
                    ]]
                ],
                ["attribute", "class", ["concat", ["tabs__item ", ["subexpr", "if", [
                        ["get", "minimumReqs", ["loc", [null, [3, 29],
                            [3, 40]
                        ]]], "selected"
                    ],
                    [],
                    ["loc", [null, [3, 24],
                        [3, 53]
                    ]]
                ]]]],
                ["element", "action", ["openMinimum"],
                    [],
                    ["loc", [null, [3, 63],
                        [3, 87]
                    ]]
                ],
                ["inline", "i18n", ["Minimum"],
                    [],
                    ["loc", [null, [3, 123],
                        [3, 141]
                    ]]
                ],
                ["attribute", "class", ["concat", ["tabs__item ", ["subexpr", "unless", [
                        ["get", "minimumReqs", ["loc", [null, [4, 33],
                            [4, 44]
                        ]]], "selected"
                    ],
                    [],
                    ["loc", [null, [4, 24],
                        [4, 57]
                    ]]
                ]]]],
                ["element", "action", ["openRecommended"],
                    [],
                    ["loc", [null, [4, 67],
                        [4, 95]
                    ]]
                ],
                ["inline", "i18n", ["Recommended"],
                    [],
                    ["loc", [null, [4, 131],
                        [4, 153]
                    ]]
                ],
                ["block", "if", [
                        ["get", "minimumReqs", ["loc", [null, [8, 6],
                            [8, 17]
                        ]]]
                    ],
                    [], 0, null, ["loc", [null, [8, 0],
                        [10, 7]
                    ]]
                ],
                ["block", "unless", [
                        ["get", "minimumReqs", ["loc", [null, [13, 10],
                            [13, 21]
                        ]]]
                    ],
                    [], 1, null, ["loc", [null, [13, 0],
                        [15, 11]
                    ]]
                ]
            ],
            locals: [],
            templates: [e, t]
        }
    }())
}), define("web-client/components/directory/game-details/read-more/component", ["exports", "ember-component", "ember-computed", "ember-metal/observer", "ember-service/inject", "ember-runloop"], function(e, t, n, a, r, l) {
    e.default = t.default.extend({
        layout: (0, r.default)(),
        classNames: ["product__description", "read-more"],
        actions: {
            toggle: function() {
                this.toggleProperty("isOpen"), this._contentHeight()
            }
        },
        didInsertElement: function() {
            this._super.apply(this, arguments), l.default.scheduleOnce("afterRender", this, "_setReadMoreButton"), this.get("layout.contentWidth")
        },
        resizeObserver: (0, a.default)("layout.contentWidth", function() {
            this.debounceTask("_setReadMoreButton", 100)
        }),
        _setReadMoreButton: function() {
            var e = this.$(".read-more-content"),
                t = this.$(".product__description-content");
            this.set("contentHeight", t[0].scrollHeight);
            var n = this.get("maxHeight"),
                a = this.get("contentHeight");
            a < n ? (this.$(".read-more-button").addClass("hide"), e.height(a)) : (this.$(".read-more-button").removeClass("hide"), e.height(n))
        },
        isOpen: !1,
        contentHeight: 0,
        maxHeight: 0,
        toggleClass: "read-more-toggle",
        openText: "Read more",
        closeText: "Read less",
        toggleText: (0, n.default)("openText", "closeText", "isOpen", function() {
            return this.get("isOpen") ? this.get("closeText") : this.get("openText")
        }),
        _contentHeight: function() {
            var e = this.$(".read-more-content");
            this.get("isOpen") ? e.animate({
                height: this.get("contentHeight")
            }, 100, "linear") : e.animate({
                height: this.get("maxHeight")
            }, 100, "linear")
        }
    })
}), define("web-client/components/directory/game-details/read-more/template", ["exports"], function(e) {
    e.default = Ember.HTMLBars.template(function() {
        return {
            meta: {
                fragmentReason: {
                    name: "missing-wrapper",
                    problems: ["multiple-nodes"]
                },
                revision: "Ember@2.4.4",
                loc: {
                    source: null,
                    start: {
                        line: 1,
                        column: 0
                    },
                    end: {
                        line: 6,
                        column: 114
                    }
                },
                moduleName: "web-client/components/directory/game-details/read-more/template.hbs"
            },
            isEmpty: !1,
            arity: 0,
            cachedFragment: null,
            hasRendered: !1,
            buildFragment: function(e) {
                var t = e.createDocumentFragment(),
                    n = e.createElement("div");
                e.setAttribute(n, "class", "read-more-content");
                var a = e.createTextNode("\n  ");
                e.appendChild(n, a);
                var a = e.createElement("div");
                e.setAttribute(a, "class", "product__description-content");
                var r = e.createTextNode("\n    ");
                e.appendChild(a, r);
                var r = e.createComment("");
                e.appendChild(a, r);
                var r = e.createTextNode("\n  ");
                e.appendChild(a, r), e.appendChild(n, a);
                var a = e.createTextNode("\n");
                e.appendChild(n, a), e.appendChild(t, n);
                var n = e.createTextNode("\n");
                e.appendChild(t, n);
                var n = e.createElement("button"),
                    a = e.createComment("");
                return e.appendChild(n, a), e.appendChild(t, n), t
            },
            buildRenderNodes: function(e, t, n) {
                var a = e.childAt(t, [2]),
                    r = new Array(4);
                return r[0] = e.createMorphAt(e.childAt(t, [0, 1]), 1, 1), r[1] = e.createAttrMorph(a, "class"), r[2] = e.createElementMorph(a), r[3] = e.createMorphAt(a, 0, 0), r
            },
            statements: [
                ["content", "yield", ["loc", [null, [3, 4],
                    [3, 13]
                ]]],
                ["attribute", "class", ["concat", [
                    ["get", "toggleClass", ["loc", [null, [6, 37],
                        [6, 48]
                    ]]], " read-more-button button button--hollow"
                ]]],
                ["element", "action", ["toggle"],
                    [],
                    ["loc", [null, [6, 8],
                        [6, 27]
                    ]]
                ],
                ["content", "toggleText", ["loc", [null, [6, 91],
                    [6, 105]
                ]]]
            ],
            locals: [],
            templates: []
        }
    }())
}), define("web-client/components/directory/game-details/support-information/component", ["exports", "ember-component"], function(e, t) {
    e.default = t.default.extend({
        classNames: ["brick", "brick--pd-lg", "brick--theme-grey", "mg-t-2", "mg-b-5"]
    })
}), define("web-client/components/directory/game-details/support-information/template", ["exports"], function(e) {
    e.default = Ember.HTMLBars.template(function() {
        var e = function() {
                return {
                    meta: {
                        fragmentReason: !1,
                        revision: "Ember@2.4.4",
                        loc: {
                            source: null,
                            start: {
                                line: 2,
                                column: 0
                            },
                            end: {
                                line: 13,
                                column: 0
                            }
                        },
                        moduleName: "web-client/components/directory/game-details/support-information/template.hbs"
                    },
                    isEmpty: !1,
                    arity: 0,
                    cachedFragment: null,
                    hasRendered: !1,
                    buildFragment: function(e) {
                        var t = e.createDocumentFragment(),
                            n = e.createTextNode("  ");
                        e.appendChild(t, n);
                        var n = e.createElement("div");
                        e.setAttribute(n, "class", "product__card-row tower");
                        var a = e.createTextNode("\n    ");
                        e.appendChild(n, a);
                        var a = e.createElement("div");
                        e.setAttribute(a, "class", "product__card-label col-xs-6");
                        var r = e.createTextNode("\n      ");
                        e.appendChild(a, r);
                        var r = e.createComment("");
                        e.appendChild(a, r);
                        var r = e.createTextNode("\n    ");
                        e.appendChild(a, r), e.appendChild(n, a);
                        var a = e.createTextNode("\n    ");
                        e.appendChild(n, a);
                        var a = e.createElement("div");
                        e.setAttribute(a, "class", "col-xs-6");
                        var r = e.createTextNode("\n      ");
                        e.appendChild(a, r);
                        var r = e.createElement("ul"),
                            l = e.createTextNode("\n        ");
                        e.appendChild(r, l);
                        var l = e.createElement("li"),
                            i = e.createElement("a"),
                            d = e.createComment("");
                        e.appendChild(i, d), e.appendChild(l, i), e.appendChild(r, l);
                        var l = e.createTextNode("\n      ");
                        e.appendChild(r, l), e.appendChild(a, r);
                        var r = e.createTextNode("\n    ");
                        e.appendChild(a, r), e.appendChild(n, a);
                        var a = e.createTextNode("\n  ");
                        e.appendChild(n, a), e.appendChild(t, n);
                        var n = e.createTextNode("\n");
                        return e.appendChild(t, n), t
                    },
                    buildRenderNodes: function(e, t, n) {
                        var a = e.childAt(t, [1]),
                            r = e.childAt(a, [3, 1, 1, 0]),
                            l = new Array(3);
                        return l[0] = e.createMorphAt(e.childAt(a, [1]), 1, 1), l[1] = e.createAttrMorph(r, "href"), l[2] = e.createMorphAt(r, 0, 0), l
                    },
                    statements: [
                        ["inline", "i18n", ["License Agreement"],
                            [],
                            ["loc", [null, [5, 6],
                                [5, 34]
                            ]]
                        ],
                        ["attribute", "href", ["concat", [
                            ["get", "product.eula_url", ["loc", [null, [9, 23],
                                [9, 39]
                            ]]]
                        ]]],
                        ["inline", "i18n", ["Check out the EULA"],
                            [],
                            ["loc", [null, [9, 43],
                                [9, 72]
                            ]]
                        ]
                    ],
                    locals: [],
                    templates: []
                }
            }(),
            t = function() {
                return {
                    meta: {
                        fragmentReason: !1,
                        revision: "Ember@2.4.4",
                        loc: {
                            source: null,
                            start: {
                                line: 14,
                                column: 0
                            },
                            end: {
                                line: 25,
                                column: 0
                            }
                        },
                        moduleName: "web-client/components/directory/game-details/support-information/template.hbs"
                    },
                    isEmpty: !1,
                    arity: 0,
                    cachedFragment: null,
                    hasRendered: !1,
                    buildFragment: function(e) {
                        var t = e.createDocumentFragment(),
                            n = e.createTextNode("  ");
                        e.appendChild(t, n);
                        var n = e.createElement("div");
                        e.setAttribute(n, "class", "product__card-row tower");
                        var a = e.createTextNode("\n    ");
                        e.appendChild(n, a);
                        var a = e.createElement("div");
                        e.setAttribute(a, "class", "product__card-label col-xs-6");
                        var r = e.createTextNode("\n      ");
                        e.appendChild(a, r);
                        var r = e.createComment("");
                        e.appendChild(a, r);
                        var r = e.createTextNode("\n    ");
                        e.appendChild(a, r), e.appendChild(n, a);
                        var a = e.createTextNode("\n    ");
                        e.appendChild(n, a);
                        var a = e.createElement("div");
                        e.setAttribute(a, "class", "col-xs-6");
                        var r = e.createTextNode("\n      ");
                        e.appendChild(a, r);
                        var r = e.createElement("ul"),
                            l = e.createTextNode("\n        ");
                        e.appendChild(r, l);
                        var l = e.createElement("li"),
                            i = e.createElement("a"),
                            d = e.createComment("");
                        e.appendChild(i, d), e.appendChild(l, i), e.appendChild(r, l);
                        var l = e.createTextNode("\n      ");
                        e.appendChild(r, l), e.appendChild(a, r);
                        var r = e.createTextNode("\n    ");
                        e.appendChild(a, r), e.appendChild(n, a);
                        var a = e.createTextNode("\n  ");
                        e.appendChild(n, a), e.appendChild(t, n);
                        var n = e.createTextNode("\n");
                        return e.appendChild(t, n), t
                    },
                    buildRenderNodes: function(e, t, n) {
                        var a = e.childAt(t, [1]),
                            r = e.childAt(a, [3, 1, 1, 0]),
                            l = new Array(3);
                        return l[0] = e.createMorphAt(e.childAt(a, [1]), 1, 1), l[1] = e.createAttrMorph(r, "href"), l[2] = e.createMorphAt(r, 0, 0), l
                    },
                    statements: [
                        ["inline", "i18n", ["Need Help?"],
                            [],
                            ["loc", [null, [17, 6],
                                [17, 27]
                            ]]
                        ],
                        ["attribute", "href", ["concat", [
                            ["get", "product.support_url", ["loc", [null, [21, 23],
                                [21, 42]
                            ]]]
                        ]]],
                        ["inline", "i18n", ["Contact Support"],
                            [],
                            ["loc", [null, [21, 46],
                                [21, 72]
                            ]]
                        ]
                    ],
                    locals: [],
                    templates: []
                }
            }();
        return {
            meta: {
                fragmentReason: {
                    name: "missing-wrapper",
                    problems: ["multiple-nodes", "wrong-type"]
                },
                revision: "Ember@2.4.4",
                loc: {
                    source: null,
                    start: {
                        line: 1,
                        column: 0
                    },
                    end: {
                        line: 26,
                        column: 0
                    }
                },
                moduleName: "web-client/components/directory/game-details/support-information/template.hbs"
            },
            isEmpty: !1,
            arity: 0,
            cachedFragment: null,
            hasRendered: !1,
            buildFragment: function(e) {
                var t = e.createDocumentFragment(),
                    n = e.createElement("h3");
                e.setAttribute(n, "class", "product__card-title");
                var a = e.createComment("");
                e.appendChild(n, a), e.appendChild(t, n);
                var n = e.createTextNode("\n");
                e.appendChild(t, n);
                var n = e.createComment("");
                e.appendChild(t, n);
                var n = e.createComment("");
                return e.appendChild(t, n), t
            },
            buildRenderNodes: function(e, t, n) {
                var a = new Array(3);
                return a[0] = e.createMorphAt(e.childAt(t, [0]), 0, 0), a[1] = e.createMorphAt(t, 2, 2, n), a[2] = e.createMorphAt(t, 3, 3, n), e.insertBoundary(t, null), a
            },
            statements: [
                ["inline", "i18n", ["Support"],
                    [],
                    ["loc", [null, [1, 32],
                        [1, 50]
                    ]]
                ],
                ["block", "if", [
                        ["get", "product.eula_url", ["loc", [null, [2, 6],
                            [2, 22]
                        ]]]
                    ],
                    [], 0, null, ["loc", [null, [2, 0],
                        [13, 7]
                    ]]
                ],
                ["block", "if", [
                        ["get", "product.support_url", ["loc", [null, [14, 6],
                            [14, 25]
                        ]]]
                    ],
                    [], 1, null, ["loc", [null, [14, 0],
                        [25, 7]
                    ]]
                ]
            ],
            locals: [],
            templates: [e, t]
        }
    }())
}), define("web-client/components/directory/game-details/template", ["exports"], function(e) {
    e.default = Ember.HTMLBars.template(function() {
        var e = function() {
                return {
                    meta: {
                        fragmentReason: !1,
                        revision: "Ember@2.4.4",
                        loc: {
                            source: null,
                            start: {
                                line: 13,
                                column: 4
                            },
                            end: {
                                line: 15,
                                column: 4
                            }
                        },
                        moduleName: "web-client/components/directory/game-details/template.hbs"
                    },
                    isEmpty: !1,
                    arity: 0,
                    cachedFragment: null,
                    hasRendered: !1,
                    buildFragment: function(e) {
                        var t = e.createDocumentFragment(),
                            n = e.createTextNode("      ");
                        e.appendChild(t, n);
                        var n = e.createComment("");
                        e.appendChild(t, n);
                        var n = e.createTextNode("\n");
                        return e.appendChild(t, n), t
                    },
                    buildRenderNodes: function(e, t, n) {
                        var a = new Array(1);
                        return a[0] = e.createMorphAt(t, 1, 1, n), a
                    },
                    statements: [
                        ["inline", "directory/game-details/game-features", [],
                            ["product", ["subexpr", "@mut", [
                                    ["get", "model.product", ["loc", [null, [14, 53],
                                        [14, 66]
                                    ]]]
                                ],
                                [],
                                []
                            ]],
                            ["loc", [null, [14, 6],
                                [14, 68]
                            ]]
                        ]
                    ],
                    locals: [],
                    templates: []
                }
            }(),
            t = function() {
                return {
                    meta: {
                        fragmentReason: !1,
                        revision: "Ember@2.4.4",
                        loc: {
                            source: null,
                            start: {
                                line: 24,
                                column: 4
                            },
                            end: {
                                line: 26,
                                column: 4
                            }
                        },
                        moduleName: "web-client/components/directory/game-details/template.hbs"
                    },
                    isEmpty: !1,
                    arity: 0,
                    cachedFragment: null,
                    hasRendered: !1,
                    buildFragment: function(e) {
                        var t = e.createDocumentFragment(),
                            n = e.createTextNode("      ");
                        e.appendChild(t, n);
                        var n = e.createComment("");
                        e.appendChild(t, n);
                        var n = e.createTextNode("\n");
                        return e.appendChild(t, n), t
                    },
                    buildRenderNodes: function(e, t, n) {
                        var a = new Array(1);
                        return a[0] = e.createMorphAt(t, 1, 1, n), a
                    },
                    statements: [
                        ["inline", "directory/game-details/support-information", [],
                            ["product", ["subexpr", "@mut", [
                                    ["get", "model.product", ["loc", [null, [25, 59],
                                        [25, 72]
                                    ]]]
                                ],
                                [],
                                []
                            ]],
                            ["loc", [null, [25, 6],
                                [25, 74]
                            ]]
                        ]
                    ],
                    locals: [],
                    templates: []
                }
            }();
        return {
            meta: {
                fragmentReason: {
                    name: "triple-curlies"
                },
                revision: "Ember@2.4.4",
                loc: {
                    source: null,
                    start: {
                        line: 1,
                        column: 0
                    },
                    end: {
                        line: 28,
                        column: 6
                    }
                },
                moduleName: "web-client/components/directory/game-details/template.hbs"
            },
            isEmpty: !1,
            arity: 0,
            cachedFragment: null,
            hasRendered: !1,
            buildFragment: function(e) {
                var t = e.createDocumentFragment(),
                    n = e.createElement("div");
                e.setAttribute(n, "class", "tower details-flex");
                var a = e.createTextNode("\n  ");
                e.appendChild(n, a);
                var a = e.createElement("div");
                e.setAttribute(a, "class", "col-lg-12 col-xs-12 details__carousel");
                var r = e.createTextNode("\n    ");
                e.appendChild(a, r);
                var r = e.createComment("");
                e.appendChild(a, r);
                var r = e.createTextNode("\n\n    ");
                e.appendChild(a, r);
                var r = e.createComment("");
                e.appendChild(a, r);
                var r = e.createTextNode("\n  ");
                e.appendChild(a, r), e.appendChild(n, a);
                var a = e.createTextNode("\n\n  ");
                e.appendChild(n, a);
                var a = e.createElement("div");
                e.setAttribute(a, "class", "product col-xs-12");
                var r = e.createTextNode("\n");
                e.appendChild(a, r);
                var r = e.createTextNode("    ");
                e.appendChild(a, r);
                var r = e.createComment("");
                e.appendChild(a, r);
                var r = e.createTextNode("\n\n");
                e.appendChild(a, r);
                var r = e.createComment("");
                e.appendChild(a, r);
                var r = e.createTextNode("\n");
                e.appendChild(a, r);
                var r = e.createTextNode("    ");
                e.appendChild(a, r);
                var r = e.createComment("");
                e.appendChild(a, r);
                var r = e.createTextNode("\n\n");
                e.appendChild(a, r);
                var r = e.createTextNode("    ");
                e.appendChild(a, r);
                var r = e.createComment("");
                e.appendChild(a, r);
                var r = e.createTextNode("\n\n");
                e.appendChild(a, r);
                var r = e.createComment("");
                e.appendChild(a, r);
                var r = e.createTextNode("  ");
                e.appendChild(a, r), e.appendChild(n, a);
                var a = e.createTextNode("\n");
                return e.appendChild(n, a), e.appendChild(t, n), t
            },
            buildRenderNodes: function(e, t, n) {
                var a = e.childAt(t, [0]),
                    r = e.childAt(a, [1]),
                    l = e.childAt(a, [3]),
                    i = new Array(7);
                return i[0] = e.createMorphAt(r, 1, 1), i[1] = e.createMorphAt(r, 3, 3), i[2] = e.createMorphAt(l, 2, 2), i[3] = e.createMorphAt(l, 4, 4), i[4] = e.createMorphAt(l, 7, 7), i[5] = e.createMorphAt(l, 10, 10), i[6] = e.createMorphAt(l, 12, 12), i
            },
            statements: [
                ["inline", "directory/game-details/carousel", [],
                    ["product", ["subexpr", "@mut", [
                            ["get", "model.product", ["loc", [null, [3, 46],
                                [3, 59]
                            ]]]
                        ],
                        [],
                        []
                    ]],
                    ["loc", [null, [3, 4],
                        [3, 61]
                    ]]
                ],
                ["inline", "directory/game-details/game-description", [],
                    ["product", ["subexpr", "@mut", [
                            ["get", "model.product", ["loc", [null, [5, 54],
                                [5, 67]
                            ]]]
                        ],
                        [],
                        []
                    ]],
                    ["loc", [null, [5, 4],
                        [5, 69]
                    ]]
                ],
                ["inline", "directory/game-details/get-game-card", [],
                    ["gameDetails", ["subexpr", "@mut", [
                            ["get", "model", ["loc", [null, [10, 55],
                                [10, 60]
                            ]]]
                        ],
                        [],
                        []
                    ], "broadcasterName", ["subexpr", "@mut", [
                            ["get", "broadcasterName", ["loc", [null, [10, 77],
                                [10, 92]
                            ]]]
                        ],
                        [],
                        []
                    ], "broadcasterId", ["subexpr", "@mut", [
                            ["get", "broadcasterId", ["loc", [null, [10, 107],
                                [10, 120]
                            ]]]
                        ],
                        [],
                        []
                    ]],
                    ["loc", [null, [10, 4],
                        [10, 122]
                    ]]
                ],
                ["block", "if", [
                        ["get", "model.product.feature_icons", ["loc", [null, [13, 10],
                            [13, 37]
                        ]]]
                    ],
                    [], 0, null, ["loc", [null, [13, 4],
                        [15, 11]
                    ]]
                ],
                ["inline", "directory/game-details/game-information", [],
                    ["product", ["subexpr", "@mut", [
                            ["get", "model.product", ["loc", [null, [18, 54],
                                [18, 67]
                            ]]]
                        ],
                        [],
                        []
                    ]],
                    ["loc", [null, [18, 4],
                        [18, 69]
                    ]]
                ],
                ["inline", "directory/game-details/pc-requirements", [],
                    ["pcRequirements", ["subexpr", "@mut", [
                            ["get", "model.product.system_requirements", ["loc", [null, [21, 60],
                                [21, 93]
                            ]]]
                        ],
                        [],
                        []
                    ]],
                    ["loc", [null, [21, 4],
                        [21, 95]
                    ]]
                ],
                ["block", "if", [
                        ["subexpr", "or", [
                                ["get", "model.product.eula_url", ["loc", [null, [24, 14],
                                    [24, 36]
                                ]]],
                                ["get", "model.product.support_url", ["loc", [null, [24, 37],
                                    [24, 62]
                                ]]]
                            ],
                            [],
                            ["loc", [null, [24, 10],
                                [24, 63]
                            ]]
                        ]
                    ],
                    [], 1, null, ["loc", [null, [24, 4],
                        [26, 11]
                    ]]
                ]
            ],
            locals: [],
            templates: [e, t]
        }
    }())
}), define("web-client/utilities/urls/fuel", ["exports"], function(e) {
    var t = "https://twitch.amazon.com/thanks";
    e.THANKYOU_PAGE = t;
    var n = "https://launcher.twitch.tv/TwitchLauncherInstaller.exe";
    e.LAUNCHER = n;
    var a = "http://link.twitch.tv/twitch-launcher";
    e.LAUNCHER_INFO = a;
    var r = "https://twitch.amazon.com/prime";
    e.BASE_URL = r;
    var l = "https://launch1.co/serve?action=click&publisher_id=338416&site_id=129844&destination_id=441264";
    e.BREAKAWAY_ALPHA_LINK = l;
    var i = r + "?ref_=sm_w_tcp_m_l_sub";
    e.SUB_BUTTON_LINK_URL = i;
    var d = r + "?ref_=sm_w_tup_ln_t_c";
    e.CONTENT_CODE_URL = d;
    var o = r + "?ref_=sm_w_tup_ln_l_c";
    e.CONTENT_CODE_LINK_URL = o
});