window.features = window.features || [], window.features.push("premium"), define("web-client/adapters/offer", ["exports", "web-client/adapters/application"], function(e, t) {
    e.default = t.default.extend({
        findAll: function() {
            return this.get("api").request("get", "/api/premium/offers")
        }
    })
}), define("web-client/components/front-page/header-bar/premium/announcement/component", ["exports", "ember-component", "web-client/utilities/urls/prime-urls"], function(e, t, n) {
    e.default = t.default.extend({
        tryPrimeHref: n.FRONT_PAGE_URL
    })
}), define("web-client/components/front-page/header-bar/premium/announcement/template", ["exports"], function(e) {
    e.default = Ember.HTMLBars.template(function() {
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
                        line: 27,
                        column: 0
                    }
                },
                moduleName: "web-client/components/front-page/header-bar/premium/announcement/template.hbs"
            },
            isEmpty: !1,
            arity: 0,
            cachedFragment: null,
            hasRendered: !1,
            buildFragment: function(e) {
                var t = e.createDocumentFragment(),
                    n = e.createElement("div");
                e.setAttribute(n, "class", "front-page-announcement");
                var a = e.createTextNode("\n  ");
                e.appendChild(n, a);
                var a = e.createElement("div");
                e.setAttribute(a, "class", "wrapper");
                var r = e.createTextNode("\n    ");
                e.appendChild(a, r);
                var r = e.createElement("div");
                e.setAttribute(r, "class", "flex flex--verticalCenter front-page-announcement__bar");
                var l = e.createTextNode("\n      ");
                e.appendChild(r, l);
                var l = e.createElement("div");
                e.setAttribute(l, "class", "flex__item col-lg-3");
                var i = e.createTextNode("\n        ");
                e.appendChild(l, i);
                var i = e.createElement("div");
                e.setAttribute(i, "class", "front-page-announcement__logo");
                var o = e.createTextNode("\n          ");
                e.appendChild(i, o);
                var o = e.createElement("a");
                e.setAttribute(o, "target", "_blank");
                var c = e.createTextNode("\n            ");
                e.appendChild(o, c);
                var c = e.createComment("");
                e.appendChild(o, c);
                var c = e.createTextNode(" ");
                e.appendChild(o, c);
                var c = e.createTextNode("\n          ");
                e.appendChild(o, c), e.appendChild(i, o);
                var o = e.createTextNode("\n        ");
                e.appendChild(i, o), e.appendChild(l, i);
                var i = e.createTextNode("\n      ");
                e.appendChild(l, i), e.appendChild(r, l);
                var l = e.createTextNode("\n      ");
                e.appendChild(r, l);
                var l = e.createElement("div");
                e.setAttribute(l, "class", "flex__item col-lg-8");
                var i = e.createTextNode("\n        ");
                e.appendChild(l, i);
                var i = e.createElement("div");
                e.setAttribute(i, "class", "flex flex--column");
                var o = e.createTextNode("\n          ");
                e.appendChild(i, o);
                var o = e.createElement("div");
                e.setAttribute(o, "class", "flex__itme");
                var c = e.createTextNode("\n            ");
                e.appendChild(o, c);
                var c = e.createElement("h4");
                e.setAttribute(c, "class", "cl-white");
                var d = e.createComment("");
                e.appendChild(c, d), e.appendChild(o, c);
                var c = e.createTextNode("\n            ");
                e.appendChild(o, c);
                var c = e.createElement("h4");
                e.setAttribute(c, "class", "cl-white mg-t-1");
                var d = e.createComment("");
                e.appendChild(c, d), e.appendChild(o, c);
                var c = e.createTextNode("\n          ");
                e.appendChild(o, c), e.appendChild(i, o);
                var o = e.createTextNode("\n          ");
                e.appendChild(i, o);
                var o = e.createElement("div");
                e.setAttribute(o, "class", "flex__itme cl-white mg-t-2");
                var c = e.createTextNode("\n            ");
                e.appendChild(o, c);
                var c = e.createElement("a");
                e.setAttribute(c, "class", "front-page-announcement__link"), e.setAttribute(c, "target", "_blank");
                var d = e.createTextNode("\n              ");
                e.appendChild(c, d);
                var d = e.createComment("");
                e.appendChild(c, d);
                var d = e.createTextNode("\n            ");
                e.appendChild(c, d), e.appendChild(o, c);
                var c = e.createTextNode("\n          ");
                e.appendChild(o, c), e.appendChild(i, o);
                var o = e.createTextNode("\n        ");
                e.appendChild(i, o), e.appendChild(l, i);
                var i = e.createTextNode("\n      ");
                e.appendChild(l, i), e.appendChild(r, l);
                var l = e.createTextNode("\n    ");
                e.appendChild(r, l), e.appendChild(a, r);
                var r = e.createTextNode("\n  ");
                e.appendChild(a, r), e.appendChild(n, a);
                var a = e.createTextNode("\n");
                e.appendChild(n, a), e.appendChild(t, n);
                var n = e.createTextNode("\n");
                return e.appendChild(t, n), t
            },
            buildRenderNodes: function(e, t, n) {
                var a = e.childAt(t, [0, 1, 1]),
                    r = e.childAt(a, [1, 1, 1]),
                    l = e.childAt(a, [3, 1]),
                    i = e.childAt(l, [1]),
                    o = e.childAt(l, [3, 1]),
                    c = new Array(6);
                return c[0] = e.createAttrMorph(r, "href"), c[1] = e.createMorphAt(r, 1, 1), c[2] = e.createMorphAt(e.childAt(i, [1]), 0, 0), c[3] = e.createMorphAt(e.childAt(i, [3]), 0, 0), c[4] = e.createAttrMorph(o, "href"), c[5] = e.createMorphAt(o, 1, 1), c
            },
            statements: [
                ["attribute", "href", ["concat", [
                    ["get", "tryPrimeHref", ["loc", [null, [6, 21],
                        [6, 33]
                    ]]]
                ]]],
                ["inline", "partial", ["svg/samus/logo-tp"],
                    [],
                    ["loc", [null, [7, 12],
                        [7, 43]
                    ]]
                ],
                ["inline", "i18n", ["Free in-game loot every month, plus surprises"],
                    [],
                    ["loc", [null, [14, 33],
                        [14, 89]
                    ]]
                ],
                ["inline", "i18n", ["Ad-free viewing, free channel subscription, chat badge and exclusive emotes"],
                    [],
                    ["loc", [null, [15, 40],
                        [15, 126]
                    ]]
                ],
                ["attribute", "href", ["concat", [
                    ["get", "tryPrimeHref", ["loc", [null, [18, 61],
                        [18, 73]
                    ]]]
                ]]],
                ["inline", "i18n", ["Start 30-day Free Trial"],
                    [],
                    ["loc", [null, [19, 14],
                        [19, 48]
                    ]]
                ]
            ],
            locals: [],
            templates: []
        }
    }())
}), define("web-client/components/front-page/header-bar/premium/header-announcement/component", ["exports", "ember-component", "web-client/utilities/urls/prime-urls"], function(e, t, n) {
    e.default = t.default.extend({
        primeBlogPostHref: n.FRONT_PAGE_HEADER_URL
    })
}), define("web-client/components/front-page/header-bar/premium/header-announcement/template", ["exports"], function(e) {
    e.default = Ember.HTMLBars.template(function() {
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
                        line: 23,
                        column: 0
                    }
                },
                moduleName: "web-client/components/front-page/header-bar/premium/header-announcement/template.hbs"
            },
            isEmpty: !1,
            arity: 0,
            cachedFragment: null,
            hasRendered: !1,
            buildFragment: function(e) {
                var t = e.createDocumentFragment(),
                    n = e.createElement("div");
                e.setAttribute(n, "class", "header-announcement");
                var a = e.createTextNode("\n  ");
                e.appendChild(n, a);
                var a = e.createElement("div");
                e.setAttribute(a, "class", "wrapper");
                var r = e.createTextNode("\n    ");
                e.appendChild(a, r);
                var r = e.createElement("div");
                e.setAttribute(r, "class", "flex flex--verticalCenter header-announcement__bar");
                var l = e.createTextNode("\n      ");
                e.appendChild(r, l);
                var l = e.createElement("div");
                e.setAttribute(l, "class", "flex__item");
                var i = e.createTextNode("\n        ");
                e.appendChild(l, i);
                var i = e.createElement("div");
                e.setAttribute(i, "class", "flex flex--verticalCenter");
                var o = e.createTextNode("\n          ");
                e.appendChild(i, o);
                var o = e.createElement("div");
                e.setAttribute(o, "class", "header-announcement__logo");
                var c = e.createTextNode("\n            ");
                e.appendChild(o, c);
                var c = e.createComment("");
                e.appendChild(o, c);
                var c = e.createTextNode(" ");
                e.appendChild(o, c);
                var c = e.createTextNode("\n          ");
                e.appendChild(o, c), e.appendChild(i, o);
                var o = e.createTextNode("\n          ");
                e.appendChild(i, o);
                var o = e.createElement("a");
                e.setAttribute(o, "class", "header-announcement__link pd-l-1 pd-r-1"), e.setAttribute(o, "target", "_blank");
                var c = e.createTextNode("\n            ");
                e.appendChild(o, c);
                var c = e.createComment("");
                e.appendChild(o, c);
                var c = e.createTextNode("\n          ");
                e.appendChild(o, c), e.appendChild(i, o);
                var o = e.createTextNode("\n          ");
                e.appendChild(i, o);
                var o = e.createComment("");
                e.appendChild(i, o);
                var o = e.createTextNode("\n        ");
                e.appendChild(i, o), e.appendChild(l, i);
                var i = e.createTextNode("\n      ");
                e.appendChild(l, i), e.appendChild(r, l);
                var l = e.createTextNode("\n      ");
                e.appendChild(r, l);
                var l = e.createElement("div");
                e.setAttribute(l, "class", "flex__item");
                var i = e.createTextNode("\n        ");
                e.appendChild(l, i);
                var i = e.createElement("a");
                e.setAttribute(i, "class", "header-announcement__link"), e.setAttribute(i, "target", "_blank");
                var o = e.createTextNode("\n          ");
                e.appendChild(i, o);
                var o = e.createComment("");
                e.appendChild(i, o);
                var o = e.createTextNode("\n        ");
                e.appendChild(i, o), e.appendChild(l, i);
                var i = e.createTextNode("\n      ");
                e.appendChild(l, i), e.appendChild(r, l);
                var l = e.createTextNode("\n    ");
                e.appendChild(r, l), e.appendChild(a, r);
                var r = e.createTextNode("\n  ");
                e.appendChild(a, r), e.appendChild(n, a);
                var a = e.createTextNode("\n");
                e.appendChild(n, a), e.appendChild(t, n);
                var n = e.createTextNode("\n");
                return e.appendChild(t, n), t
            },
            buildRenderNodes: function(e, t, n) {
                var a = e.childAt(t, [0, 1, 1]),
                    r = e.childAt(a, [1, 1]),
                    l = e.childAt(r, [3]),
                    i = e.childAt(a, [3, 1]),
                    o = new Array(6);
                return o[0] = e.createMorphAt(e.childAt(r, [1]), 1, 1), o[1] = e.createAttrMorph(l, "href"), o[2] = e.createMorphAt(l, 1, 1), o[3] = e.createMorphAt(r, 5, 5), o[4] = e.createAttrMorph(i, "href"), o[5] = e.createMorphAt(i, 1, 1), o
            },
            statements: [
                ["inline", "partial", ["svg/samus/gp-crown"],
                    [],
                    ["loc", [null, [7, 12],
                        [7, 44]
                    ]]
                ],
                ["attribute", "href", ["concat", [
                    ["get", "primeBlogPostHref", ["loc", [null, [9, 69],
                        [9, 86]
                    ]]]
                ]]],
                ["inline", "i18n", ["Twitch Prime"],
                    [],
                    ["loc", [null, [10, 12],
                        [10, 35]
                    ]]
                ],
                ["inline", "i18n", ["Free loot every month, exclusive discount on new-release games, ad-free viewing, and loads more."],
                    [],
                    ["loc", [null, [12, 10],
                        [12, 117]
                    ]]
                ],
                ["attribute", "href", ["concat", [
                    ["get", "primeBlogPostHref", ["loc", [null, [16, 53],
                        [16, 70]
                    ]]]
                ]]],
                ["inline", "i18n", ["Start 30-day Free Trial"],
                    [],
                    ["loc", [null, [17, 10],
                        [17, 44]
                    ]]
                ]
            ],
            locals: [],
            templates: []
        }
    }())
}), define("web-client/components/front-page/header-bar/premium/upsell-premium/component", ["exports", "ember-component", "ember-service/inject", "ember-computed", "web-client/utilities/urls/prime-urls"], function(e, t, n, a, r) {
    e.default = t.default.extend({
        session: (0, n.default)(),
        geo: (0, n.default)("premium-geo"),
        showPrimeContent: a.default.readOnly("geo.showPrimeContent"),
        hasTwitchPrime: a.default.readOnly("session.userData.has_premium"),
        hasTurbo: a.default.readOnly("session.userData.has_turbo"),
        tryPrimeHeaderHref: r.FRONT_PAGE_HEADER_URL,
        showTryTwitchPrime: (0, a.default)("showPrimeContent", "hasTwitchPrime", function() {
            return this.get("showPrimeContent") && !this.get("hasTwitchPrime")
        }),
        showGoTurbo: (0, a.default)("showPrimeContent", "hasTurbo", function() {
            return !(this.get("showPrimeContent") || this.get("session").isAuthenticated && this.get("hasTurbo"))
        }),
        showTwitchUpsell: a.default.or("showTryTwitchPrime", "showGoTurbo")
    })
}), define("web-client/components/front-page/header-bar/premium/upsell-premium/template", ["exports"], function(e) {
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
                                    line: 2,
                                    column: 2
                                },
                                end: {
                                    line: 6,
                                    column: 2
                                }
                            },
                            moduleName: "web-client/components/front-page/header-bar/premium/upsell-premium/template.hbs"
                        },
                        isEmpty: !1,
                        arity: 0,
                        cachedFragment: null,
                        hasRendered: !1,
                        buildFragment: function(e) {
                            var t = e.createDocumentFragment(),
                                n = e.createTextNode("    ");
                            e.appendChild(t, n);
                            var n = e.createElement("a");
                            e.setAttribute(n, "class", "button button--text"), e.setAttribute(n, "data-header-bar-upsell", "");
                            var a = e.createTextNode("\n      ");
                            e.appendChild(n, a);
                            var a = e.createElement("span"),
                                r = e.createComment("");
                            e.appendChild(a, r), e.appendChild(n, a);
                            var a = e.createTextNode("\n    ");
                            e.appendChild(n, a), e.appendChild(t, n);
                            var n = e.createTextNode("\n");
                            return e.appendChild(t, n), t
                        },
                        buildRenderNodes: function(e, t, n) {
                            var a = e.childAt(t, [1]),
                                r = new Array(2);
                            return r[0] = e.createAttrMorph(a, "href"), r[1] = e.createMorphAt(e.childAt(a, [1]), 0, 0), r
                        },
                        statements: [
                            ["attribute", "href", ["get", "tryPrimeHeaderHref", ["loc", [null, [3, 14],
                                [3, 32]
                            ]]]],
                            ["inline", "i18n", ["Try Twitch Prime"],
                                [],
                                ["loc", [null, [4, 12],
                                    [4, 39]
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
                                    line: 8,
                                    column: 2
                                },
                                end: {
                                    line: 10,
                                    column: 2
                                }
                            },
                            moduleName: "web-client/components/front-page/header-bar/premium/upsell-premium/template.hbs"
                        },
                        isEmpty: !1,
                        arity: 0,
                        cachedFragment: null,
                        hasRendered: !1,
                        buildFragment: function(e) {
                            var t = e.createDocumentFragment(),
                                n = e.createTextNode("    ");
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
                            ["content", "front-page/header-bar/upsell-standard", ["loc", [null, [9, 4],
                                [9, 45]
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
                            line: 11,
                            column: 0
                        }
                    },
                    moduleName: "web-client/components/front-page/header-bar/premium/upsell-premium/template.hbs"
                },
                isEmpty: !1,
                arity: 0,
                cachedFragment: null,
                hasRendered: !1,
                buildFragment: function(e) {
                    var t = e.createDocumentFragment(),
                        n = e.createComment("");
                    e.appendChild(t, n);
                    var n = e.createTextNode("\n");
                    e.appendChild(t, n);
                    var n = e.createComment("");
                    return e.appendChild(t, n), t
                },
                buildRenderNodes: function(e, t, n) {
                    var a = new Array(2);
                    return a[0] = e.createMorphAt(t, 0, 0, n), a[1] = e.createMorphAt(t, 2, 2, n), e.insertBoundary(t, 0), e.insertBoundary(t, null), a
                },
                statements: [
                    ["block", "if", [
                            ["get", "showTryTwitchPrime", ["loc", [null, [2, 8],
                                [2, 26]
                            ]]]
                        ],
                        [], 0, null, ["loc", [null, [2, 2],
                            [6, 9]
                        ]]
                    ],
                    ["block", "if", [
                            ["get", "showGoTurbo", ["loc", [null, [8, 8],
                                [8, 19]
                            ]]]
                        ],
                        [], 1, null, ["loc", [null, [8, 2],
                            [10, 9]
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
                        line: 12,
                        column: 0
                    }
                },
                moduleName: "web-client/components/front-page/header-bar/premium/upsell-premium/template.hbs"
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
                        ["get", "showTwitchUpsell", ["loc", [null, [1, 6],
                            [1, 22]
                        ]]]
                    ],
                    [], 0, null, ["loc", [null, [1, 0],
                        [11, 7]
                    ]]
                ]
            ],
            locals: [],
            templates: [e]
        }
    }())
}), define("web-client/components/new-feature/baxter/component", ["exports", "ember-component", "ember-computed", "ember-service/inject"], function(e, t, n, a) {
    e.default = t.default.extend({
        geo: (0, a.default)("premium-geo"),
        hasPrimeContent: n.default.readOnly("geo.showPrimeContent")
    })
}), define("web-client/components/new-feature/baxter/template", ["exports"], function(e) {
    e.default = Ember.HTMLBars.template(function() {
        var e = function() {
            var e = function() {
                var e = function() {
                    var e = function() {
                        var e = function() {
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
                                            line: 19,
                                            column: 8
                                        }
                                    },
                                    moduleName: "web-client/components/new-feature/baxter/template.hbs"
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
                                    ["inline", "samus/offer-detail", [],
                                        ["offer", ["subexpr", "@mut", [
                                                ["get", "offer", ["loc", [null, [15, 18],
                                                    [15, 23]
                                                ]]]
                                            ],
                                            [],
                                            []
                                        ], "hasPrime", ["subexpr", "@mut", [
                                                ["get", "hasPrime", ["loc", [null, [16, 21],
                                                    [16, 29]
                                                ]]]
                                            ],
                                            [],
                                            []
                                        ], "tetherId", ["subexpr", "@mut", [
                                                ["get", "tetherId", ["loc", [null, [17, 21],
                                                    [17, 29]
                                                ]]]
                                            ],
                                            [],
                                            []
                                        ], "showAllOffers", ["subexpr", "@mut", [
                                                ["get", "showAllOffers", ["loc", [null, [18, 26],
                                                    [18, 39]
                                                ]]]
                                            ],
                                            [],
                                            []
                                        ]],
                                        ["loc", [null, [14, 10],
                                            [18, 41]
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
                                        line: 8,
                                        column: 6
                                    },
                                    end: {
                                        line: 20,
                                        column: 6
                                    }
                                },
                                moduleName: "web-client/components/new-feature/baxter/template.hbs"
                            },
                            isEmpty: !1,
                            arity: 2,
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
                                        ["get", "showTooltip", ["loc", [null, [13, 14],
                                            [13, 25]
                                        ]]]
                                    ],
                                    [], 0, null, ["loc", [null, [13, 8],
                                        [19, 15]
                                    ]]
                                ]
                            ],
                            locals: ["showTooltip", "tetherId"],
                            templates: [e]
                        }
                    }();
                    return {
                        meta: {
                            fragmentReason: !1,
                            revision: "Ember@2.4.4",
                            loc: {
                                source: null,
                                start: {
                                    line: 7,
                                    column: 4
                                },
                                end: {
                                    line: 21,
                                    column: 4
                                }
                            },
                            moduleName: "web-client/components/new-feature/baxter/template.hbs"
                        },
                        isEmpty: !1,
                        arity: 1,
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
                            ["block", "samus/offer-item", [],
                                ["offer", ["subexpr", "@mut", [
                                        ["get", "offer", ["loc", [null, [9, 14],
                                            [9, 19]
                                        ]]]
                                    ],
                                    [],
                                    []
                                ], "showAllOffers", ["subexpr", "@mut", [
                                        ["get", "showAllOffers", ["loc", [null, [10, 22],
                                            [10, 35]
                                        ]]]
                                    ],
                                    [],
                                    []
                                ], "isLeftColumnClosed", ["subexpr", "@mut", [
                                        ["get", "isLeftColumnClosed", ["loc", [null, [11, 27],
                                            [11, 45]
                                        ]]]
                                    ],
                                    [],
                                    []
                                ]], 0, null, ["loc", [null, [8, 6],
                                    [20, 27]
                                ]]
                            ]
                        ],
                        locals: ["offer"],
                        templates: [e]
                    }
                }();
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
                                line: 22,
                                column: 2
                            }
                        },
                        moduleName: "web-client/components/new-feature/baxter/template.hbs"
                    },
                    isEmpty: !1,
                    arity: 3,
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
                                ["get", "navOffers", ["loc", [null, [7, 12],
                                    [7, 21]
                                ]]]
                            ],
                            [], 0, null, ["loc", [null, [7, 4],
                                [21, 13]
                            ]]
                        ]
                    ],
                    locals: ["navOffers", "hasPrime", "showAllOffers"],
                    templates: [e]
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
                            line: 23,
                            column: 0
                        }
                    },
                    moduleName: "web-client/components/new-feature/baxter/template.hbs"
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
                    ["block", "samus/offer-list", [],
                        ["userData", ["subexpr", "@mut", [
                                ["get", "userData", ["loc", [null, [3, 13],
                                    [3, 21]
                                ]]]
                            ],
                            [],
                            []
                        ], "isLeftColumnClosed", ["subexpr", "@mut", [
                                ["get", "isLeftColumnClosed", ["loc", [null, [4, 23],
                                    [4, 41]
                                ]]]
                            ],
                            [],
                            []
                        ], "handleLeftColumnToggleClick", ["subexpr", "route-action", ["handleLeftColumnToggleClick"],
                            [],
                            ["loc", [null, [5, 32],
                                [5, 76]
                            ]]
                        ]], 0, null, ["loc", [null, [2, 2],
                            [22, 23]
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
                        line: 24,
                        column: 0
                    }
                },
                moduleName: "web-client/components/new-feature/baxter/template.hbs"
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
                        ["get", "hasPrimeContent", ["loc", [null, [1, 6],
                            [1, 21]
                        ]]]
                    ],
                    [], 0, null, ["loc", [null, [1, 0],
                        [23, 7]
                    ]]
                ]
            ],
            locals: [],
            templates: [e]
        }
    }())
}), define("web-client/components/pr/backpack-ticket-sm/component", ["exports", "ember-component", "ember-computed", "ember-string"], function(e, t, n, a) {
    e.default = t.default.extend({
        membershipIncludesTwitchPrime: (0, n.default)(function() {
            var e = i18n("Membership included free with [AmazonPrime logo]"),
                t = '<img src="https://images-na.ssl-images-amazon.com/images/G/01/sm/landing/amazonprime-logo-white.svg">';
            return (0, a.htmlSafe)(e.replace("[AmazonPrime logo]", t))
        })
    })
}), define("web-client/components/pr/backpack-ticket-sm/template", ["exports"], function(e) {
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
                                        line: 4,
                                        column: 6
                                    },
                                    end: {
                                        line: 6,
                                        column: 6
                                    }
                                },
                                moduleName: "web-client/components/pr/backpack-ticket-sm/template.hbs"
                            },
                            isEmpty: !1,
                            arity: 0,
                            cachedFragment: null,
                            hasRendered: !1,
                            buildFragment: function(e) {
                                var t = e.createDocumentFragment(),
                                    n = e.createTextNode("        ");
                                e.appendChild(t, n);
                                var n = e.createElement("img");
                                e.setAttribute(n, "class", "banner"), e.appendChild(t, n);
                                var n = e.createTextNode("\n");
                                return e.appendChild(t, n), t
                            },
                            buildRenderNodes: function(e, t, n) {
                                var a = e.childAt(t, [1]),
                                    r = new Array(1);
                                return r[0] = e.createAttrMorph(a, "src"), r
                            },
                            statements: [
                                ["attribute", "src", ["get", "banner", ["loc", [null, [5, 19],
                                    [5, 25]
                                ]]]]
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
                                        line: 7,
                                        column: 6
                                    },
                                    end: {
                                        line: 9,
                                        column: 6
                                    }
                                },
                                moduleName: "web-client/components/pr/backpack-ticket-sm/template.hbs"
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
                                e.setAttribute(n, "class", "profile-banner-color"), e.appendChild(t, n);
                                var n = e.createTextNode("\n");
                                return e.appendChild(t, n), t
                            },
                            buildRenderNodes: function(e, t, n) {
                                var a = e.childAt(t, [1]),
                                    r = new Array(1);
                                return r[0] = e.createAttrMorph(a, "style"), r
                            },
                            statements: [
                                ["attribute", "style", ["get", "profileBannerBackgroundColorStyle", ["loc", [null, [8, 21],
                                    [8, 54]
                                ]]]]
                            ],
                            locals: [],
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
                                        line: 10,
                                        column: 6
                                    },
                                    end: {
                                        line: 12,
                                        column: 6
                                    }
                                },
                                moduleName: "web-client/components/pr/backpack-ticket-sm/template.hbs"
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
                                e.setAttribute(n, "class", "profile-banner-color"), e.appendChild(t, n);
                                var n = e.createTextNode("\n");
                                return e.appendChild(t, n), t
                            },
                            buildRenderNodes: function() {
                                return []
                            },
                            statements: [],
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
                                        line: 13,
                                        column: 6
                                    },
                                    end: {
                                        line: 15,
                                        column: 6
                                    }
                                },
                                moduleName: "web-client/components/pr/backpack-ticket-sm/template.hbs"
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
                                e.appendChild(t, n);
                                var n = e.createTextNode("\n");
                                return e.appendChild(t, n), t
                            },
                            buildRenderNodes: function(e, t, n) {
                                var a = e.childAt(t, [1]),
                                    r = new Array(1);
                                return r[0] = e.createAttrMorph(a, "class"), r
                            },
                            statements: [
                                ["attribute", "class", ["concat", [
                                    ["subexpr", "if", [
                                            ["get", "isTurbo", ["loc", [null, [14, 25],
                                                [14, 32]
                                            ]]], "placeholder-banner-purple", "placeholder-banner"
                                        ],
                                        [],
                                        ["loc", [null, [14, 20],
                                            [14, 83]
                                        ]]
                                    ]
                                ]]]
                            ],
                            locals: [],
                            templates: []
                        }
                    }(),
                    r = function() {
                        return {
                            meta: {
                                fragmentReason: !1,
                                revision: "Ember@2.4.4",
                                loc: {
                                    source: null,
                                    start: {
                                        line: 16,
                                        column: 6
                                    },
                                    end: {
                                        line: 36,
                                        column: 6
                                    }
                                },
                                moduleName: "web-client/components/pr/backpack-ticket-sm/template.hbs"
                            },
                            isEmpty: !1,
                            arity: 0,
                            cachedFragment: null,
                            hasRendered: !1,
                            buildFragment: function(e) {
                                var t = e.createDocumentFragment(),
                                    n = e.createTextNode("        ");
                                e.appendChild(t, n);
                                var n = e.createElement("a");
                                e.setAttribute(n, "href", "/settings/prime"), e.setAttribute(n, "class", "channel-link");
                                var a = e.createTextNode("\n          ");
                                e.appendChild(n, a);
                                var a = e.createElement("div");
                                e.setAttribute(a, "class", "profile-photo");
                                var r = e.createTextNode("\n            ");
                                e.appendChild(a, r);
                                var r = e.createElement("div");
                                e.setAttribute(r, "class", "goto");
                                var l = e.createTextNode("\n              ");
                                e.appendChild(r, l);
                                var l = e.createComment("");
                                e.appendChild(r, l);
                                var l = e.createTextNode("\n            ");
                                e.appendChild(r, l), e.appendChild(a, r);
                                var r = e.createTextNode("\n            ");
                                e.appendChild(a, r);
                                var r = e.createElement("img");
                                e.setAttribute(r, "src", "https://images-na.ssl-images-amazon.com/images/G/01/sm/landing/chat-badge-72.png"), e.appendChild(a, r);
                                var r = e.createTextNode("\n          ");
                                e.appendChild(a, r), e.appendChild(n, a);
                                var a = e.createTextNode("\n        ");
                                e.appendChild(n, a), e.appendChild(t, n);
                                var n = e.createTextNode("\n        ");
                                e.appendChild(t, n);
                                var n = e.createElement("div");
                                e.setAttribute(n, "class", "profile-info flex");
                                var a = e.createTextNode("\n          ");
                                e.appendChild(n, a);
                                var a = e.createElement("span");
                                e.setAttribute(a, "class", "pr-left flex__item flex__item--grow");
                                var r = e.createTextNode("\n            ");
                                e.appendChild(a, r);
                                var r = e.createElement("h3");
                                e.setAttribute(r, "class", "profile-name");
                                var l = e.createTextNode("\n              ");
                                e.appendChild(r, l);
                                var l = e.createComment("");
                                e.appendChild(r, l);
                                var l = e.createTextNode("\n            ");
                                e.appendChild(r, l), e.appendChild(a, r);
                                var r = e.createTextNode("\n            ");
                                e.appendChild(a, r);
                                var r = e.createComment("");
                                e.appendChild(a, r);
                                var r = e.createTextNode("\n          ");
                                e.appendChild(a, r), e.appendChild(n, a);
                                var a = e.createTextNode("\n          ");
                                e.appendChild(n, a);
                                var a = e.createElement("span");
                                e.setAttribute(a, "class", "pr-right flex__item flex__item--noGrow");
                                var r = e.createTextNode("\n            ");
                                e.appendChild(a, r);
                                var r = e.createComment("");
                                e.appendChild(a, r);
                                var r = e.createTextNode("\n          ");
                                e.appendChild(a, r), e.appendChild(n, a);
                                var a = e.createTextNode("\n        ");
                                e.appendChild(n, a), e.appendChild(t, n);
                                var n = e.createTextNode("\n");
                                return e.appendChild(t, n), t
                            },
                            buildRenderNodes: function(e, t, n) {
                                var a = e.childAt(t, [3]),
                                    r = e.childAt(a, [1]),
                                    l = new Array(4);
                                return l[0] = e.createMorphAt(e.childAt(t, [1, 1, 1]), 1, 1), l[1] = e.createMorphAt(e.childAt(r, [1]), 1, 1), l[2] = e.createMorphAt(r, 3, 3), l[3] = e.createMorphAt(e.childAt(a, [3]), 1, 1), l
                            },
                            statements: [
                                ["inline", "i18n", ["Prime Settings"],
                                    [],
                                    ["loc", [null, [20, 14],
                                        [20, 39]
                                    ]]
                                ],
                                ["inline", "i18n", ["Twitch Prime"],
                                    [],
                                    ["loc", [null, [28, 14],
                                        [28, 37]
                                    ]]
                                ],
                                ["inline", "i18n", ["The best of Twitch: ad-free viewing, free monthly channel subscription, game loot included monthly, and loads more"],
                                    [],
                                    ["loc", [null, [30, 12],
                                        [30, 137]
                                    ]]
                                ],
                                ["content", "membershipIncludesTwitchPrime", ["loc", [null, [33, 12],
                                    [33, 45]
                                ]]]
                            ],
                            locals: [],
                            templates: []
                        }
                    }(),
                    l = function() {
                        var e = function() {
                                return {
                                    meta: {
                                        fragmentReason: !1,
                                        revision: "Ember@2.4.4",
                                        loc: {
                                            source: null,
                                            start: {
                                                line: 37,
                                                column: 8
                                            },
                                            end: {
                                                line: 46,
                                                column: 8
                                            }
                                        },
                                        moduleName: "web-client/components/pr/backpack-ticket-sm/template.hbs"
                                    },
                                    isEmpty: !1,
                                    arity: 0,
                                    cachedFragment: null,
                                    hasRendered: !1,
                                    buildFragment: function(e) {
                                        var t = e.createDocumentFragment(),
                                            n = e.createTextNode("          ");
                                        e.appendChild(t, n);
                                        var n = e.createElement("a");
                                        e.setAttribute(n, "class", "channel-link");
                                        var a = e.createTextNode("\n            ");
                                        e.appendChild(n, a);
                                        var a = e.createElement("div");
                                        e.setAttribute(a, "class", "profile-photo");
                                        var r = e.createTextNode("\n              ");
                                        e.appendChild(a, r);
                                        var r = e.createElement("div");
                                        e.setAttribute(r, "class", "goto");
                                        var l = e.createTextNode("\n                ");
                                        e.appendChild(r, l);
                                        var l = e.createComment("");
                                        e.appendChild(r, l);
                                        var l = e.createTextNode("\n              ");
                                        e.appendChild(r, l), e.appendChild(a, r);
                                        var r = e.createTextNode("\n              ");
                                        e.appendChild(a, r);
                                        var r = e.createElement("img");
                                        e.appendChild(a, r);
                                        var r = e.createTextNode("\n            ");
                                        e.appendChild(a, r), e.appendChild(n, a);
                                        var a = e.createTextNode("\n          ");
                                        e.appendChild(n, a), e.appendChild(t, n);
                                        var n = e.createTextNode("\n");
                                        return e.appendChild(t, n), t
                                    },
                                    buildRenderNodes: function(e, t, n) {
                                        var a = e.childAt(t, [1]),
                                            r = e.childAt(a, [1]),
                                            l = e.childAt(r, [3]),
                                            i = new Array(3);
                                        return i[0] = e.createAttrMorph(a, "href"), i[1] = e.createMorphAt(e.childAt(r, [1]), 1, 1), i[2] = e.createAttrMorph(l, "src"), i
                                    },
                                    statements: [
                                        ["attribute", "href", ["get", "productOwnerLink", ["loc", [null, [38, 20],
                                            [38, 36]
                                        ]]]],
                                        ["content", "productOwnerTypeLabel", ["loc", [null, [41, 16],
                                            [41, 41]
                                        ]]],
                                        ["attribute", "src", ["get", "logo", ["loc", [null, [43, 25],
                                            [43, 29]
                                        ]]]]
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
                                                line: 52,
                                                column: 12
                                            },
                                            end: {
                                                line: 56,
                                                column: 12
                                            }
                                        },
                                        moduleName: "web-client/components/pr/backpack-ticket-sm/template.hbs"
                                    },
                                    isEmpty: !1,
                                    arity: 1,
                                    cachedFragment: null,
                                    hasRendered: !1,
                                    buildFragment: function(e) {
                                        var t = e.createDocumentFragment(),
                                            n = e.createTextNode("              ");
                                        e.appendChild(t, n);
                                        var n = e.createElement("li"),
                                            a = e.createTextNode("\n                ");
                                        e.appendChild(n, a);
                                        var a = e.createComment("");
                                        e.appendChild(n, a);
                                        var a = e.createTextNode("\n              ");
                                        e.appendChild(n, a), e.appendChild(t, n);
                                        var n = e.createTextNode("\n");
                                        return e.appendChild(t, n), t
                                    },
                                    buildRenderNodes: function(e, t, n) {
                                        var a = new Array(1);
                                        return a[0] = e.createMorphAt(e.childAt(t, [1]), 1, 1), a
                                    },
                                    statements: [
                                        ["content", "benefit", ["loc", [null, [54, 16],
                                            [54, 27]
                                        ]]]
                                    ],
                                    locals: ["benefit"],
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
                                                line: 60,
                                                column: 12
                                            },
                                            end: {
                                                line: 62,
                                                column: 12
                                            }
                                        },
                                        moduleName: "web-client/components/pr/backpack-ticket-sm/template.hbs"
                                    },
                                    isEmpty: !1,
                                    arity: 0,
                                    cachedFragment: null,
                                    hasRendered: !1,
                                    buildFragment: function(e) {
                                        var t = e.createDocumentFragment(),
                                            n = e.createTextNode("              ");
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
                                        ["inline", "backpack/payment-info-button", [],
                                            ["ticket", ["subexpr", "@mut", [
                                                    ["get", "ticket", ["loc", [null, [61, 52],
                                                        [61, 58]
                                                    ]]]
                                                ],
                                                [],
                                                []
                                            ], "openedBalloon", ["subexpr", "@mut", [
                                                    ["get", "openedBalloon", ["loc", [null, [61, 73],
                                                        [61, 86]
                                                    ]]]
                                                ],
                                                [],
                                                []
                                            ], "toggleBalloon", ["subexpr", "@mut", [
                                                    ["get", "toggleBalloon", ["loc", [null, [61, 101],
                                                        [61, 114]
                                                    ]]]
                                                ],
                                                [],
                                                []
                                            ]],
                                            ["loc", [null, [61, 14],
                                                [61, 116]
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
                                                line: 63,
                                                column: 12
                                            },
                                            end: {
                                                line: 65,
                                                column: 12
                                            }
                                        },
                                        moduleName: "web-client/components/pr/backpack-ticket-sm/template.hbs"
                                    },
                                    isEmpty: !1,
                                    arity: 0,
                                    cachedFragment: null,
                                    hasRendered: !1,
                                    buildFragment: function(e) {
                                        var t = e.createDocumentFragment(),
                                            n = e.createTextNode("              ");
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
                                        ["inline", "backpack/benefit-info-button", [],
                                            ["ticket", ["subexpr", "@mut", [
                                                    ["get", "ticket", ["loc", [null, [64, 52],
                                                        [64, 58]
                                                    ]]]
                                                ],
                                                [],
                                                []
                                            ], "openedBalloon", ["subexpr", "@mut", [
                                                    ["get", "openedBalloon", ["loc", [null, [64, 73],
                                                        [64, 86]
                                                    ]]]
                                                ],
                                                [],
                                                []
                                            ], "toggleBalloon", ["subexpr", "@mut", [
                                                    ["get", "toggleBalloon", ["loc", [null, [64, 101],
                                                        [64, 114]
                                                    ]]]
                                                ],
                                                [],
                                                []
                                            ]],
                                            ["loc", [null, [64, 14],
                                                [64, 116]
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
                                        line: 36,
                                        column: 6
                                    },
                                    end: {
                                        line: 68,
                                        column: 6
                                    }
                                },
                                moduleName: "web-client/components/pr/backpack-ticket-sm/template.hbs"
                            },
                            isEmpty: !1,
                            arity: 0,
                            cachedFragment: null,
                            hasRendered: !1,
                            buildFragment: function(e) {
                                var t = e.createDocumentFragment(),
                                    n = e.createComment("");
                                e.appendChild(t, n);
                                var n = e.createTextNode("        ");
                                e.appendChild(t, n);
                                var n = e.createElement("div");
                                e.setAttribute(n, "class", "profile-info");
                                var a = e.createTextNode("\n          ");
                                e.appendChild(n, a);
                                var a = e.createElement("h3");
                                e.setAttribute(a, "class", "profile-name");
                                var r = e.createTextNode("\n            ");
                                e.appendChild(a, r);
                                var r = e.createComment("");
                                e.appendChild(a, r);
                                var r = e.createTextNode("\n          ");
                                e.appendChild(a, r), e.appendChild(n, a);
                                var a = e.createTextNode("\n          ");
                                e.appendChild(n, a);
                                var a = e.createElement("ul");
                                e.setAttribute(a, "class", "profile-bio");
                                var r = e.createTextNode("\n");
                                e.appendChild(a, r);
                                var r = e.createComment("");
                                e.appendChild(a, r);
                                var r = e.createTextNode("          ");
                                e.appendChild(a, r), e.appendChild(n, a);
                                var a = e.createTextNode("\n\n          ");
                                e.appendChild(n, a);
                                var a = e.createElement("div");
                                e.setAttribute(a, "class", "profile-actions");
                                var r = e.createTextNode("\n");
                                e.appendChild(a, r);
                                var r = e.createComment("");
                                e.appendChild(a, r);
                                var r = e.createComment("");
                                e.appendChild(a, r);
                                var r = e.createTextNode("          ");
                                e.appendChild(a, r), e.appendChild(n, a);
                                var a = e.createTextNode("\n        ");
                                e.appendChild(n, a), e.appendChild(t, n);
                                var n = e.createTextNode("\n");
                                return e.appendChild(t, n), t
                            },
                            buildRenderNodes: function(e, t, n) {
                                var a = e.childAt(t, [2]),
                                    r = e.childAt(a, [5]),
                                    l = new Array(5);
                                return l[0] = e.createMorphAt(t, 0, 0, n), l[1] = e.createMorphAt(e.childAt(a, [1]), 1, 1),
                                    l[2] = e.createMorphAt(e.childAt(a, [3]), 1, 1), l[3] = e.createMorphAt(r, 1, 1), l[4] = e.createMorphAt(r, 2, 2), e.insertBoundary(t, 0), l
                            },
                            statements: [
                                ["block", "if", [
                                        ["get", "productOwnerLink", ["loc", [null, [37, 14],
                                            [37, 30]
                                        ]]]
                                    ],
                                    [], 0, null, ["loc", [null, [37, 8],
                                        [46, 15]
                                    ]]
                                ],
                                ["content", "productNameLabel", ["loc", [null, [49, 12],
                                    [49, 32]
                                ]]],
                                ["block", "each", [
                                        ["get", "benefits", ["loc", [null, [52, 20],
                                            [52, 28]
                                        ]]]
                                    ],
                                    [], 1, null, ["loc", [null, [52, 12],
                                        [56, 21]
                                    ]]
                                ],
                                ["block", "if", [
                                        ["subexpr", "or", [
                                                ["get", "ticket.purchase_profile.will_renew", ["loc", [null, [60, 22],
                                                    [60, 56]
                                                ]]],
                                                ["get", "ticket.purchase_profile.refundable", ["loc", [null, [60, 57],
                                                    [60, 91]
                                                ]]]
                                            ],
                                            [],
                                            ["loc", [null, [60, 18],
                                                [60, 92]
                                            ]]
                                        ]
                                    ],
                                    [], 2, null, ["loc", [null, [60, 12],
                                        [62, 19]
                                    ]]
                                ],
                                ["block", "if", [
                                        ["subexpr", "and", [
                                                ["get", "ticket.product.recurring", ["loc", [null, [63, 23],
                                                    [63, 47]
                                                ]]],
                                                ["subexpr", "not", [
                                                        ["get", "ticket.purchase_profile.will_renew", ["loc", [null, [63, 53],
                                                            [63, 87]
                                                        ]]]
                                                    ],
                                                    [],
                                                    ["loc", [null, [63, 48],
                                                        [63, 88]
                                                    ]]
                                                ]
                                            ],
                                            [],
                                            ["loc", [null, [63, 18],
                                                [63, 89]
                                            ]]
                                        ]
                                    ],
                                    [], 3, null, ["loc", [null, [63, 12],
                                        [65, 19]
                                    ]]
                                ]
                            ],
                            locals: [],
                            templates: [e, t, n, a]
                        }
                    }(),
                    i = function() {
                        return {
                            meta: {
                                fragmentReason: !1,
                                revision: "Ember@2.4.4",
                                loc: {
                                    source: null,
                                    start: {
                                        line: 69,
                                        column: 6
                                    },
                                    end: {
                                        line: 73,
                                        column: 6
                                    }
                                },
                                moduleName: "web-client/components/pr/backpack-ticket-sm/template.hbs"
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
                                e.setAttribute(n, "class", "ticket-period");
                                var a = e.createTextNode("\n          ");
                                e.appendChild(n, a);
                                var a = e.createComment("");
                                e.appendChild(n, a);
                                var a = e.createTextNode(" ");
                                e.appendChild(n, a);
                                var a = e.createComment("");
                                e.appendChild(n, a);
                                var a = e.createTextNode(" ");
                                e.appendChild(n, a);
                                var a = e.createComment("");
                                e.appendChild(n, a);
                                var a = e.createTextNode(" ");
                                e.appendChild(n, a);
                                var a = e.createComment("");
                                e.appendChild(n, a);
                                var a = e.createTextNode("\n        ");
                                e.appendChild(n, a), e.appendChild(t, n);
                                var n = e.createTextNode("\n");
                                return e.appendChild(t, n), t
                            },
                            buildRenderNodes: function(e, t, n) {
                                var a = e.childAt(t, [1]),
                                    r = new Array(4);
                                return r[0] = e.createMorphAt(a, 1, 1), r[1] = e.createMorphAt(a, 3, 3), r[2] = e.createMorphAt(a, 5, 5), r[3] = e.createMorphAt(a, 7, 7), r
                            },
                            statements: [
                                ["inline", "i18n", ["Valid"],
                                    [],
                                    ["loc", [null, [71, 10],
                                        [71, 26]
                                    ]]
                                ],
                                ["content", "accessStartDate", ["loc", [null, [71, 27],
                                    [71, 46]
                                ]]],
                                ["inline", "i18n", ["to"],
                                    [],
                                    ["loc", [null, [71, 47],
                                        [71, 60]
                                    ]]
                                ],
                                ["content", "accessEndDate", ["loc", [null, [71, 61],
                                    [71, 78]
                                ]]]
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
                                line: 2,
                                column: 2
                            },
                            end: {
                                line: 75,
                                column: 2
                            }
                        },
                        moduleName: "web-client/components/pr/backpack-ticket-sm/template.hbs"
                    },
                    isEmpty: !1,
                    arity: 0,
                    cachedFragment: null,
                    hasRendered: !1,
                    buildFragment: function(e) {
                        var t = e.createDocumentFragment(),
                            n = e.createTextNode("    ");
                        e.appendChild(t, n);
                        var n = e.createElement("div");
                        e.setAttribute(n, "class", "banner-contain mini-profile");
                        var a = e.createTextNode("\n");
                        e.appendChild(n, a);
                        var a = e.createComment("");
                        e.appendChild(n, a);
                        var a = e.createComment("");
                        e.appendChild(n, a);
                        var a = e.createComment("");
                        e.appendChild(n, a);
                        var a = e.createComment("");
                        e.appendChild(n, a);
                        var a = e.createComment("");
                        e.appendChild(n, a);
                        var a = e.createComment("");
                        e.appendChild(n, a);
                        var a = e.createTextNode("    ");
                        e.appendChild(n, a), e.appendChild(t, n);
                        var n = e.createTextNode("\n");
                        return e.appendChild(t, n), t
                    },
                    buildRenderNodes: function(e, t, n) {
                        var a = e.childAt(t, [1]),
                            r = new Array(6);
                        return r[0] = e.createMorphAt(a, 1, 1), r[1] = e.createMorphAt(a, 2, 2), r[2] = e.createMorphAt(a, 3, 3), r[3] = e.createMorphAt(a, 4, 4), r[4] = e.createMorphAt(a, 5, 5), r[5] = e.createMorphAt(a, 6, 6), r
                    },
                    statements: [
                        ["block", "if", [
                                ["get", "banner", ["loc", [null, [4, 12],
                                    [4, 18]
                                ]]]
                            ],
                            [], 0, null, ["loc", [null, [4, 6],
                                [6, 13]
                            ]]
                        ],
                        ["block", "if", [
                                ["get", "profileBannerBackgroundColorStyle", ["loc", [null, [7, 12],
                                    [7, 45]
                                ]]]
                            ],
                            [], 1, null, ["loc", [null, [7, 6],
                                [9, 13]
                            ]]
                        ],
                        ["block", "if", [
                                ["subexpr", "eq", [
                                        ["get", "ticket.product.short_name", ["loc", [null, [10, 16],
                                            [10, 41]
                                        ]]], "twitch_prime"
                                    ],
                                    [],
                                    ["loc", [null, [10, 12],
                                        [10, 57]
                                    ]]
                                ]
                            ],
                            [], 2, null, ["loc", [null, [10, 6],
                                [12, 13]
                            ]]
                        ],
                        ["block", "unless", [
                                ["get", "banner", ["loc", [null, [13, 16],
                                    [13, 22]
                                ]]]
                            ],
                            [], 3, null, ["loc", [null, [13, 6],
                                [15, 17]
                            ]]
                        ],
                        ["block", "if", [
                                ["subexpr", "eq", [
                                        ["get", "ticket.product.short_name", ["loc", [null, [16, 16],
                                            [16, 41]
                                        ]]], "twitch_prime"
                                    ],
                                    [],
                                    ["loc", [null, [16, 12],
                                        [16, 57]
                                    ]]
                                ]
                            ],
                            [], 4, 5, ["loc", [null, [16, 6],
                                [68, 13]
                            ]]
                        ],
                        ["block", "if", [
                                ["get", "accessStartDate", ["loc", [null, [69, 12],
                                    [69, 27]
                                ]]]
                            ],
                            [], 6, null, ["loc", [null, [69, 6],
                                [73, 13]
                            ]]
                        ]
                    ],
                    locals: [],
                    templates: [e, t, n, a, r, l, i]
                }
            }(),
            t = function() {
                var e = function() {
                    var e = function() {
                            return {
                                meta: {
                                    fragmentReason: !1,
                                    revision: "Ember@2.4.4",
                                    loc: {
                                        source: null,
                                        start: {
                                            line: 87,
                                            column: 18
                                        },
                                        end: {
                                            line: 89,
                                            column: 18
                                        }
                                    },
                                    moduleName: "web-client/components/pr/backpack-ticket-sm/template.hbs"
                                },
                                isEmpty: !1,
                                arity: 0,
                                cachedFragment: null,
                                hasRendered: !1,
                                buildFragment: function(e) {
                                    var t = e.createDocumentFragment(),
                                        n = e.createTextNode("                    ");
                                    e.appendChild(t, n);
                                    var n = e.createElement("img");
                                    e.setAttribute(n, "class", "emoticon-img"), e.appendChild(t, n);
                                    var n = e.createTextNode("\n");
                                    return e.appendChild(t, n), t
                                },
                                buildRenderNodes: function(e, t, n) {
                                    var a = e.childAt(t, [1]),
                                        r = new Array(3);
                                    return r[0] = e.createAttrMorph(a, "src"), r[1] = e.createAttrMorph(a, "title"), r[2] = e.createAttrMorph(a, "alt"), r
                                },
                                statements: [
                                    ["attribute", "src", ["concat", [
                                        ["get", "emoticon.url", ["loc", [null, [88, 32],
                                            [88, 44]
                                        ]]]
                                    ]]],
                                    ["attribute", "title", ["concat", [
                                        ["get", "emoticon.regex_display", ["loc", [null, [88, 57],
                                            [88, 79]
                                        ]]]
                                    ]]],
                                    ["attribute", "alt", ["concat", [
                                        ["get", "emoticon.regex_display", ["loc", [null, [88, 90],
                                            [88, 112]
                                        ]]]
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
                                            line: 89,
                                            column: 18
                                        },
                                        end: {
                                            line: 91,
                                            column: 18
                                        }
                                    },
                                    moduleName: "web-client/components/pr/backpack-ticket-sm/template.hbs"
                                },
                                isEmpty: !1,
                                arity: 0,
                                cachedFragment: null,
                                hasRendered: !1,
                                buildFragment: function(e) {
                                    var t = e.createDocumentFragment(),
                                        n = e.createTextNode("                    ");
                                    e.appendChild(t, n);
                                    var n = e.createElement("img");
                                    e.setAttribute(n, "class", "emoticon-img"), e.appendChild(t, n);
                                    var n = e.createTextNode("\n");
                                    return e.appendChild(t, n), t
                                },
                                buildRenderNodes: function(e, t, n) {
                                    var a = e.childAt(t, [1]),
                                        r = new Array(3);
                                    return r[0] = e.createAttrMorph(a, "src"), r[1] = e.createAttrMorph(a, "title"), r[2] = e.createAttrMorph(a, "alt"), r
                                },
                                statements: [
                                    ["attribute", "src", ["concat", [
                                        ["get", "emoticon.url", ["loc", [null, [90, 32],
                                            [90, 44]
                                        ]]]
                                    ]]],
                                    ["attribute", "title", ["concat", [
                                        ["get", "emoticon.regex", ["loc", [null, [90, 57],
                                            [90, 71]
                                        ]]]
                                    ]]],
                                    ["attribute", "alt", ["concat", [
                                        ["get", "emoticon.regex", ["loc", [null, [90, 82],
                                            [90, 96]
                                        ]]]
                                    ]]]
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
                                    line: 85,
                                    column: 14
                                },
                                end: {
                                    line: 93,
                                    column: 14
                                }
                            },
                            moduleName: "web-client/components/pr/backpack-ticket-sm/template.hbs"
                        },
                        isEmpty: !1,
                        arity: 1,
                        cachedFragment: null,
                        hasRendered: !1,
                        buildFragment: function(e) {
                            var t = e.createDocumentFragment(),
                                n = e.createTextNode("                ");
                            e.appendChild(t, n);
                            var n = e.createElement("li"),
                                a = e.createTextNode("\n");
                            e.appendChild(n, a);
                            var a = e.createComment("");
                            e.appendChild(n, a);
                            var a = e.createTextNode("                ");
                            e.appendChild(n, a), e.appendChild(t, n);
                            var n = e.createTextNode("\n");
                            return e.appendChild(t, n), t
                        },
                        buildRenderNodes: function(e, t, n) {
                            var a = new Array(1);
                            return a[0] = e.createMorphAt(e.childAt(t, [1]), 1, 1), a
                        },
                        statements: [
                            ["block", "if", [
                                    ["get", "emoticon.regex_display", ["loc", [null, [87, 24],
                                        [87, 46]
                                    ]]]
                                ],
                                [], 0, 1, ["loc", [null, [87, 18],
                                    [91, 25]
                                ]]
                            ]
                        ],
                        locals: ["emoticon"],
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
                                line: 76,
                                column: 2
                            },
                            end: {
                                line: 99,
                                column: 2
                            }
                        },
                        moduleName: "web-client/components/pr/backpack-ticket-sm/template.hbs"
                    },
                    isEmpty: !1,
                    arity: 0,
                    cachedFragment: null,
                    hasRendered: !1,
                    buildFragment: function(e) {
                        var t = e.createDocumentFragment(),
                            n = e.createTextNode("    ");
                        e.appendChild(t, n);
                        var n = e.createElement("div");
                        e.setAttribute(n, "class", "benefits");
                        var a = e.createTextNode("\n      ");
                        e.appendChild(n, a);
                        var a = e.createElement("div");
                        e.setAttribute(a, "class", "benefit");
                        var r = e.createTextNode("\n        ");
                        e.appendChild(a, r);
                        var r = e.createElement("div");
                        e.setAttribute(r, "class", "chat-emoticons clearfix");
                        var l = e.createTextNode("\n          ");
                        e.appendChild(r, l);
                        var l = e.createElement("div");
                        e.setAttribute(l, "class", "label");
                        var i = e.createTextNode("\n            ");
                        e.appendChild(l, i);
                        var i = e.createComment("");
                        e.appendChild(l, i);
                        var i = e.createTextNode("\n          ");
                        e.appendChild(l, i), e.appendChild(r, l);
                        var l = e.createTextNode("\n          ");
                        e.appendChild(r, l);
                        var l = e.createElement("div");
                        e.setAttribute(l, "class", "benefit-content clearfix");
                        var i = e.createTextNode("\n            ");
                        e.appendChild(l, i);
                        var i = e.createElement("ul");
                        e.setAttribute(i, "class", "emoticon-list clearfix");
                        var o = e.createTextNode("\n");
                        e.appendChild(i, o);
                        var o = e.createComment("");
                        e.appendChild(i, o);
                        var o = e.createTextNode("            ");
                        e.appendChild(i, o), e.appendChild(l, i);
                        var i = e.createTextNode("\n          ");
                        e.appendChild(l, i), e.appendChild(r, l);
                        var l = e.createTextNode("\n        ");
                        e.appendChild(r, l), e.appendChild(a, r);
                        var r = e.createTextNode("\n      ");
                        e.appendChild(a, r), e.appendChild(n, a);
                        var a = e.createTextNode("\n    ");
                        e.appendChild(n, a), e.appendChild(t, n);
                        var n = e.createTextNode("\n");
                        return e.appendChild(t, n), t
                    },
                    buildRenderNodes: function(e, t, n) {
                        var a = e.childAt(t, [1, 1, 1]),
                            r = new Array(2);
                        return r[0] = e.createMorphAt(e.childAt(a, [1]), 1, 1), r[1] = e.createMorphAt(e.childAt(a, [3, 1]), 1, 1), r
                    },
                    statements: [
                        ["inline", "i18n", ["Chat Emoticons"],
                            [],
                            ["loc", [null, [81, 12],
                                [81, 37]
                            ]]
                        ],
                        ["block", "each", [
                                ["get", "product.emoticons", ["loc", [null, [85, 22],
                                    [85, 39]
                                ]]]
                            ],
                            [], 0, null, ["loc", [null, [85, 14],
                                [93, 23]
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
                        line: 101,
                        column: 0
                    }
                },
                moduleName: "web-client/components/pr/backpack-ticket-sm/template.hbs"
            },
            isEmpty: !1,
            arity: 0,
            cachedFragment: null,
            hasRendered: !1,
            buildFragment: function(e) {
                var t = e.createDocumentFragment(),
                    n = e.createElement("div"),
                    a = e.createTextNode("\n");
                e.appendChild(n, a);
                var a = e.createComment("");
                e.appendChild(n, a);
                var a = e.createComment("");
                e.appendChild(n, a), e.appendChild(t, n);
                var n = e.createTextNode("\n");
                return e.appendChild(t, n), t
            },
            buildRenderNodes: function(e, t, n) {
                var a = e.childAt(t, [0]),
                    r = new Array(3);
                return r[0] = e.createAttrMorph(a, "class"), r[1] = e.createMorphAt(a, 1, 1), r[2] = e.createMorphAt(a, 2, 2), r
            },
            statements: [
                ["attribute", "class", ["concat", ["ticket item ", ["subexpr", "unless", [
                        ["get", "ticket.purchase_profile.will_renew", ["loc", [null, [1, 33],
                            [1, 67]
                        ]]], "no-renewal"
                    ],
                    [],
                    ["loc", [null, [1, 24],
                        [1, 82]
                    ]]
                ], " ", ["subexpr", "if", [
                        ["subexpr", "eq", [
                                ["get", "ticket.product.short_name", ["loc", [null, [1, 92],
                                    [1, 117]
                                ]]], "twitch_prime"
                            ],
                            [],
                            ["loc", [null, [1, 88],
                                [1, 133]
                            ]]
                        ], "pr-ticket"
                    ],
                    [],
                    ["loc", [null, [1, 83],
                        [1, 147]
                    ]]
                ]]]],
                ["block", "unless", [
                        ["get", "product.partner.isLoading", ["loc", [null, [2, 12],
                            [2, 37]
                        ]]]
                    ],
                    [], 0, null, ["loc", [null, [2, 2],
                        [75, 13]
                    ]]
                ],
                ["block", "if", [
                        ["get", "product.emoticons", ["loc", [null, [76, 8],
                            [76, 25]
                        ]]]
                    ],
                    [], 1, null, ["loc", [null, [76, 2],
                        [99, 9]
                    ]]
                ]
            ],
            locals: [],
            templates: [e, t]
        }
    }())
}), define("web-client/components/pr/welcome-content/component", ["exports", "ember", "ember-component", "ember-service/inject", "web-client/utilities/url-params"], function(e, t, n, a, r) {
    var l = t.default.Logger;
    e.default = n.default.extend({
        tagName: "",
        layout: (0, a.default)(),
        geo: (0, a.default)("premium-geo"),
        buildPageTitle: function() {
            return {
                title: i18n("Welcome to Twitch Prime"),
                hasTwitchTitleSuffix: !1
            }
        },
        actions: {
            goToRedirectRouteWithOffers: function() {
                if (r.default.redirectRoute) try {
                    return void(window.location = "/" + atob(r.default.redirectRoute) + "?expandoffers=true")
                } catch (e) {
                    l.error("Failed to base64 decode parameter", r.default.redirectRoute)
                }
                window.location = "/directory/following?expandoffers=true"
            },
            goToRedirectRouteWithSubModal: function() {
                if (r.default.redirectRoute) try {
                    return void(window.location = "/" + atob(r.default.redirectRoute) + "?expandsubmodal=true")
                } catch (e) {
                    l.error("Failed to base64 decode parameter", r.default.redirectRoute)
                }
                window.location = "/directory/following"
            }
        }
    })
}), define("web-client/components/pr/welcome-content/template", ["exports"], function(e) {
    e.default = Ember.HTMLBars.template(function() {
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
                        line: 19,
                        column: 0
                    }
                },
                moduleName: "web-client/components/pr/welcome-content/template.hbs"
            },
            isEmpty: !1,
            arity: 0,
            cachedFragment: null,
            hasRendered: !1,
            buildFragment: function(e) {
                var t = e.createDocumentFragment(),
                    n = e.createElement("div");
                e.setAttribute(n, "class", "pr-welcome");
                var a = e.createTextNode("\n  ");
                e.appendChild(n, a);
                var a = e.createElement("div");
                e.setAttribute(a, "class", "pr-welcome__banner");
                var r = e.createTextNode("\n    ");
                e.appendChild(a, r);
                var r = e.createElement("div");
                e.setAttribute(r, "class", "wrapper pr-welcome__title");
                var l = e.createTextNode("\n      ");
                e.appendChild(r, l);
                var l = e.createElement("div");
                e.setAttribute(l, "class", "pr-welcome__logo-tp");
                var i = e.createTextNode("\n        ");
                e.appendChild(l, i);
                var i = e.createComment("");
                e.appendChild(l, i);
                var i = e.createTextNode(" ");
                e.appendChild(l, i);
                var i = e.createTextNode("\n      ");
                e.appendChild(l, i), e.appendChild(r, l);
                var l = e.createTextNode("\n\n      ");
                e.appendChild(r, l);
                var l = e.createElement("p");
                e.setAttribute(l, "class", "pr-welcome__caption");
                var i = e.createTextNode("\n        ");
                e.appendChild(l, i);
                var i = e.createComment("");
                e.appendChild(l, i);
                var i = e.createTextNode(" ");
                e.appendChild(l, i);
                var i = e.createElement("br");
                e.appendChild(l, i);
                var i = e.createTextNode("\n        ");
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
                var a = e.createElement("div");
                e.setAttribute(a, "class", "pr-benefits");
                var r = e.createTextNode("\n    ");
                e.appendChild(a, r);
                var r = e.createComment("");
                e.appendChild(a, r);
                var r = e.createTextNode("\n  ");
                e.appendChild(a, r), e.appendChild(n, a);
                var a = e.createTextNode("\n");
                e.appendChild(n, a), e.appendChild(t, n);
                var n = e.createTextNode("\n");
                return e.appendChild(t, n), t
            },
            buildRenderNodes: function(e, t, n) {
                var a = e.childAt(t, [0]),
                    r = e.childAt(a, [1, 1]),
                    l = e.childAt(r, [3]),
                    i = new Array(4);
                return i[0] = e.createMorphAt(e.childAt(r, [1]), 1, 1), i[1] = e.createMorphAt(l, 1, 1), i[2] = e.createMorphAt(l, 5, 5), i[3] = e.createMorphAt(e.childAt(a, [3]), 1, 1), i
            },
            statements: [
                ["inline", "partial", ["svg/samus/logo-tp"],
                    [],
                    ["loc", [null, [5, 8],
                        [5, 39]
                    ]]
                ],
                ["inline", "i18n", ["You have leveled up with Twitch Prime!"],
                    [],
                    ["loc", [null, [9, 8],
                        [9, 57]
                    ]]
                ],
                ["inline", "i18n", ["Feels nice, right?"],
                    [],
                    ["loc", [null, [10, 8],
                        [10, 37]
                    ]]
                ],
                ["inline", "samus/benefits-list", [],
                    ["goToRedirectRouteWithOffers", "goToRedirectRouteWithOffers", "goToRedirectRouteWithSubModal", "goToRedirectRouteWithSubModal"],
                    ["loc", [null, [16, 4],
                        [16, 147]
                    ]]
                ]
            ],
            locals: [],
            templates: []
        }
    }())
}), define("web-client/components/samus/benefits-list/component", ["exports", "ember-component", "ember-computed", "ember-string", "web-client/utilities/url-params", "web-client/utilities/urls/prime-urls"], function(e, t, n, a, r, l) {
    var i = "ATVPDKIKX0DER",
        o = {
            ATVPDKIKX0DER: "https://www.amazon.com/b?node=13584215011",
            A13V1IB3VIYZZH: "https://www.amazon.fr/b?node=11365189031",
            A1RKKUPIHCS9HS: "https://www.amazon.es/b?node=11301346031",
            A1PA6795UKMFR9: "https://www.amazon.de/b?node=11301327031",
            APJ6JRA9NG5V4: "https://www.amazon.it/b?node=11301380031",
            A2EUQ1WTGCTBG2: "https://www.amazon.ca/b?node=15281452011",
            A1F83G8C2ARO7P: "https://www.amazon.co.uk/b?node=11382284031"
        };
    e.default = t.default.extend({
        browseNodeUrl: (0, n.default)("primeSignupMarketplace", function() {
            var e = r.default.primeSignupMarketplace || i;
            return o[e].indexOf("?") >= 0 ? o[e] + "&" + l.BROWSE_GAMES_REF : o[e] + "?" + l.BROWSE_GAMES_REF
        }),
        prBadgeDescription: (0, n.default)("", function() {
            return (0, a.htmlSafe)(i18n('<strong class="pr-welcome__desc-emphasis">The badge of royalty. </strong>Appears next to your name in chat.'))
        }),
        gearIconPath: '<svg class="pr-welcome__gear" height="16" viewBox="0 0 16 16" width="16">\n                  <path d="M6.359 0h3.282l1.436 2.8h3.282L16 5.2 14.359 8 16 10.8l-1.641 2.4h-3.282L9.64 16H6.359l-1.436-2.8H1.641L0 10.8 1.641 8 0 5.2l1.641-2.4h3.282L6.36 0zM8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>\n                </svg>',
        prBadgePostScript: (0, n.default)("gearIconPath", function() {
            var e = i18n("Manage your badges by clicking the [GEAR ICON] icon in chat.");
            return e = e.replace("[GEAR ICON]", this.get("gearIconPath")), (0, a.htmlSafe)(e)
        }),
        settingsDescription: (0, n.default)("", function() {
            var e = i18n("Manage subscription notification under Settings > Twitch Prime");
            return (0, a.htmlSafe)(e.replace("Twitch Prime", '<a href="https://www.twitch.tv/settings/prime" target="_new">Twitch Prime</a>'))
        }),
        primeBlogPostHref: l.BASE_URL,
        actions: {
            goToRedirectRouteWithOffers: function() {
                this.sendAction("goToRedirectRouteWithOffers")
            },
            goToRedirectRouteWithSubModal: function() {
                this.sendAction("goToRedirectRouteWithSubModal")
            }
        }
    })
}), define("web-client/components/samus/benefits-list/template", ["exports"], function(e) {
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
                        line: 78,
                        column: 0
                    }
                },
                moduleName: "web-client/components/samus/benefits-list/template.hbs"
            },
            isEmpty: !1,
            arity: 0,
            cachedFragment: null,
            hasRendered: !1,
            buildFragment: function(e) {
                var t = e.createDocumentFragment(),
                    n = e.createElement("div");
                e.setAttribute(n, "class", "pr-welcome__section-content");
                var a = e.createTextNode("\n");
                e.appendChild(n, a);
                var a = e.createTextNode("  ");
                e.appendChild(n, a);
                var a = e.createElement("div");
                e.setAttribute(a, "class", "pr-welcome__icon pr-welcome__chat-badge");
                var r = e.createTextNode("\n    ");
                e.appendChild(a, r);
                var r = e.createElement("img");
                e.setAttribute(r, "src", "https://images-na.ssl-images-amazon.com/images/G/01/sm/landing/Crown.png"), e.setAttribute(r, "data-a-hires", "https://images-na.ssl-images-amazon.com/images/G/01/sm/landing/Crown.png"), e.appendChild(a, r);
                var r = e.createTextNode("\n  ");
                e.appendChild(a, r), e.appendChild(n, a);
                var a = e.createTextNode("\n  ");
                e.appendChild(n, a);
                var a = e.createElement("div");
                e.setAttribute(a, "class", "pr-welcome__content pr-welcome__content--chat-badge");
                var r = e.createTextNode("\n    ");
                e.appendChild(a, r);
                var r = e.createElement("div");
                e.setAttribute(r, "class", "pr-welcome__header");
                var l = e.createTextNode("\n      ");
                e.appendChild(r, l);
                var l = e.createComment("");
                e.appendChild(r, l);
                var l = e.createTextNode("\n    ");
                e.appendChild(r, l), e.appendChild(a, r);
                var r = e.createTextNode("\n    ");
                e.appendChild(a, r);
                var r = e.createElement("div");
                e.setAttribute(r, "class", "pr-welcome__description");
                var l = e.createTextNode("\n      ");
                e.appendChild(r, l);
                var l = e.createComment("");
                e.appendChild(r, l);
                var l = e.createTextNode("\n    ");
                e.appendChild(r, l), e.appendChild(a, r);
                var r = e.createTextNode("\n    ");
                e.appendChild(a, r);
                var r = e.createElement("img");
                e.setAttribute(r, "class", "pr-welcome__description-img"), e.setAttribute(r, "src", "https://images-na.ssl-images-amazon.com/images/G/01/sm/landing/welcome_chatbadge_example.png"), e.setAttribute(r, "data-a-hires", "https://images-na.ssl-images-amazon.com/images/G/01/sm/landing/welcome_chatbadge_example.png"), e.appendChild(a, r);
                var r = e.createTextNode("\n    ");
                e.appendChild(a, r);
                var r = e.createElement("div");
                e.setAttribute(r, "class", "pr-welcome__content--postscript");
                var l = e.createTextNode("\n      ");
                e.appendChild(r, l);
                var l = e.createComment("");
                e.appendChild(r, l);
                var l = e.createTextNode("\n    ");
                e.appendChild(r, l), e.appendChild(a, r);
                var r = e.createTextNode("\n  ");
                e.appendChild(a, r), e.appendChild(n, a);
                var a = e.createTextNode("\n  ");
                e.appendChild(n, a);
                var a = e.createElement("div");
                e.setAttribute(a, "class", "pr-welcome__cta");
                var r = e.createTextNode("\n");
                e.appendChild(a, r);
                var r = e.createTextNode("  ");
                e.appendChild(a, r), e.appendChild(n, a);
                var a = e.createTextNode("\n\n");
                e.appendChild(n, a);
                var a = e.createTextNode("  ");
                e.appendChild(n, a);
                var a = e.createElement("div");
                e.setAttribute(a, "class", "pr-welcome__icon pr-welcome__treasure-chest");
                var r = e.createTextNode("\n    ");
                e.appendChild(a, r);
                var r = e.createElement("img");
                e.setAttribute(r, "src", "https://images-na.ssl-images-amazon.com/images/G/01/sm/landing/Trunk_w_Star.png"), e.setAttribute(r, "data-a-hires", "https://images-na.ssl-images-amazon.com/images/G/01/sm/landing/Trunk_w_Star.png"), e.appendChild(a, r);
                var r = e.createTextNode("\n  ");
                e.appendChild(a, r), e.appendChild(n, a);
                var a = e.createTextNode("\n  ");
                e.appendChild(n, a);
                var a = e.createElement("div");
                e.setAttribute(a, "class", "pr-welcome__content");
                var r = e.createTextNode("\n    ");
                e.appendChild(a, r);
                var r = e.createElement("div");
                e.setAttribute(r, "class", "pr-welcome__header"), e.setAttribute(r, "data-test-benefits-welcome-header", "");
                var l = e.createTextNode("\n      ");
                e.appendChild(r, l);
                var l = e.createComment("");
                e.appendChild(r, l);
                var l = e.createTextNode("\n    ");
                e.appendChild(r, l), e.appendChild(a, r);
                var r = e.createTextNode("\n  ");
                e.appendChild(a, r), e.appendChild(n, a);
                var a = e.createTextNode("\n  ");
                e.appendChild(n, a);
                var a = e.createElement("button");
                e.setAttribute(a, "class", "pr-welcome__cta pr-welcome__cta--treasure-chest button button--large primary"), e.setAttribute(a, "data-test-benefits-welcome-button", "");
                var r = e.createComment("");
                e.appendChild(a, r), e.appendChild(n, a);
                var a = e.createTextNode("\n\n");
                e.appendChild(n, a);
                var a = e.createTextNode("  ");
                e.appendChild(n, a);
                var a = e.createElement("div");
                e.setAttribute(a, "class", "pr-welcome__icon pr-welcome__coin-stack");
                var r = e.createTextNode("\n    ");
                e.appendChild(a, r);
                var r = e.createElement("img");
                e.setAttribute(r, "src", "https://images-na.ssl-images-amazon.com/images/G/01/sm/landing/Coing.png"), e.setAttribute(r, "data-a-hires", "https://images-na.ssl-images-amazon.com/images/G/01/sm/landing/Coing.png"), e.appendChild(a, r);
                var r = e.createTextNode("\n  ");
                e.appendChild(a, r), e.appendChild(n, a);
                var a = e.createTextNode("\n  ");
                e.appendChild(n, a);
                var a = e.createElement("div");
                e.setAttribute(a, "class", "pr-welcome__content");
                var r = e.createTextNode("\n    ");
                e.appendChild(a, r);
                var r = e.createElement("div");
                e.setAttribute(r, "class", "pr-welcome__header");
                var l = e.createTextNode("\n      ");
                e.appendChild(r, l);
                var l = e.createComment("");
                e.appendChild(r, l);
                var l = e.createTextNode("\n    ");
                e.appendChild(r, l), e.appendChild(a, r);
                var r = e.createTextNode("\n  ");
                e.appendChild(a, r), e.appendChild(n, a);
                var a = e.createTextNode("\n  ");
                e.appendChild(n, a);
                var a = e.createElement("a");
                e.setAttribute(a, "class", "pr-welcome__cta pr-welcome__cta--coin-stack button button--large primary"), e.setAttribute(a, "target", "_new");
                var r = e.createComment("");
                e.appendChild(a, r), e.appendChild(n, a);
                var a = e.createTextNode("\n\n");
                e.appendChild(n, a);
                var a = e.createTextNode("  ");
                e.appendChild(n, a);
                var a = e.createElement("div");
                e.setAttribute(a, "class", "pr-welcome__icon pr-welcome__live-screen");
                var r = e.createTextNode("\n    ");
                e.appendChild(a, r);
                var r = e.createElement("img");
                e.setAttribute(r, "src", "https://images-na.ssl-images-amazon.com/images/G/01/sm/landing/Monitor_broadcaster.png"), e.setAttribute(r, "data-a-hires", "https://images-na.ssl-images-amazon.com/images/G/01/sm/landing/Monitor_broadcaster.png"), e.appendChild(a, r);
                var r = e.createTextNode("\n  ");
                e.appendChild(a, r), e.appendChild(n, a);
                var a = e.createTextNode("\n  ");
                e.appendChild(n, a);
                var a = e.createElement("div");
                e.setAttribute(a, "class", "pr-welcome__content pr-welcome__content--live-screen");
                var r = e.createTextNode("\n    ");
                e.appendChild(a, r);
                var r = e.createElement("div");
                e.setAttribute(r, "class", "pr-welcome__header");
                var l = e.createTextNode("\n      ");
                e.appendChild(r, l);
                var l = e.createComment("");
                e.appendChild(r, l);
                var l = e.createTextNode("\n    ");
                e.appendChild(r, l), e.appendChild(a, r);
                var r = e.createTextNode("\n    ");
                e.appendChild(a, r);
                var r = e.createElement("div");
                e.setAttribute(r, "class", "pr-welcome__description");
                var l = e.createTextNode("\n      ");
                e.appendChild(r, l);
                var l = e.createComment("");
                e.appendChild(r, l);
                var l = e.createTextNode("\n    ");
                e.appendChild(r, l), e.appendChild(a, r);
                var r = e.createTextNode("\n    ");
                e.appendChild(a, r);
                var r = e.createElement("img");
                e.setAttribute(r, "class", "pr-welcome__description-img"), e.setAttribute(r, "src", "https://images-na.ssl-images-amazon.com/images/G/01/sm/landing/welcome_freesubscription_example.png"), e.setAttribute(r, "data-a-hires", "https://images-na.ssl-images-amazon.com/images/G/01/sm/landing/welcome_freesubscription_example.png"), e.appendChild(a, r);
                var r = e.createTextNode("\n    ");
                e.appendChild(a, r);
                var r = e.createElement("div");
                e.setAttribute(r, "class", "pr-welcome__content--postscript");
                var l = e.createTextNode("\n      ");
                e.appendChild(r, l);
                var l = e.createComment("");
                e.appendChild(r, l);
                var l = e.createTextNode("\n    ");
                e.appendChild(r, l), e.appendChild(a, r);
                var r = e.createTextNode("\n  ");
                e.appendChild(a, r), e.appendChild(n, a);
                var a = e.createTextNode("\n  ");
                e.appendChild(n, a);
                var a = e.createElement("button");
                e.setAttribute(a, "class", "pr-welcome__cta pr-welcome__cta--live-screen button button--large primary");
                var r = e.createComment("");
                e.appendChild(a, r), e.appendChild(n, a);
                var a = e.createTextNode("\n");
                e.appendChild(n, a), e.appendChild(t, n);
                var n = e.createTextNode("\n\n");
                e.appendChild(t, n);
                var n = e.createElement("hr");
                e.setAttribute(n, "class", "par-welcome__faq-break"), e.appendChild(t, n);
                var n = e.createTextNode("\n\n");
                e.appendChild(t, n);
                var n = e.createElement("div");
                e.setAttribute(n, "class", "pr-welcome__footer");
                var a = e.createTextNode("\n  ");
                e.appendChild(n, a);
                var a = e.createElement("div");
                e.setAttribute(a, "class", "pr-welcome__header");
                var r = e.createTextNode("\n    ");
                e.appendChild(a, r);
                var r = e.createComment("");
                e.appendChild(a, r);
                var r = e.createTextNode("\n  ");
                e.appendChild(a, r), e.appendChild(n, a);
                var a = e.createTextNode("\n  ");
                e.appendChild(n, a);
                var a = e.createElement("div");
                e.setAttribute(a, "class", "pr-welcome__description");
                var r = e.createTextNode("\n    ");
                e.appendChild(a, r);
                var r = e.createElement("a");
                e.setAttribute(r, "class", "pr-welcome__faqs-url"), e.setAttribute(r, "target", "_new");
                var l = e.createComment("");
                e.appendChild(r, l), e.appendChild(a, r);
                var r = e.createTextNode("\n  ");
                e.appendChild(a, r), e.appendChild(n, a);
                var a = e.createTextNode("\n");
                e.appendChild(n, a), e.appendChild(t, n);
                var n = e.createTextNode("\n");
                return e.appendChild(t, n), t
            },
            buildRenderNodes: function(e, t, n) {
                var a = e.childAt(t, [0]),
                    r = e.childAt(a, [4]),
                    l = e.childAt(a, [13]),
                    i = e.childAt(a, [20]),
                    o = e.childAt(a, [25]),
                    c = e.childAt(a, [27]),
                    d = e.childAt(t, [4]),
                    s = e.childAt(d, [3, 1]),
                    p = new Array(17);
                return p[0] = e.createMorphAt(e.childAt(r, [1]), 1, 1), p[1] = e.createMorphAt(e.childAt(r, [3]), 1, 1), p[2] = e.createMorphAt(e.childAt(r, [7]), 1, 1), p[3] = e.createMorphAt(e.childAt(a, [11, 1]), 1, 1), p[4] = e.createElementMorph(l), p[5] = e.createMorphAt(l, 0, 0), p[6] = e.createMorphAt(e.childAt(a, [18, 1]), 1, 1), p[7] = e.createAttrMorph(i, "href"), p[8] = e.createMorphAt(i, 0, 0), p[9] = e.createMorphAt(e.childAt(o, [1]), 1, 1), p[10] = e.createMorphAt(e.childAt(o, [3]), 1, 1), p[11] = e.createMorphAt(e.childAt(o, [7]), 1, 1), p[12] = e.createElementMorph(c), p[13] = e.createMorphAt(c, 0, 0), p[14] = e.createMorphAt(e.childAt(d, [1]), 1, 1), p[15] = e.createAttrMorph(s, "href"), p[16] = e.createMorphAt(s, 0, 0), p
            },
            statements: [
                ["inline", "i18n", ["You now have the Twitch Prime badge"],
                    [],
                    ["loc", [null, [8, 6],
                        [8, 52]
                    ]]
                ],
                ["content", "prBadgeDescription", ["loc", [null, [11, 6],
                    [11, 28]
                ]]],
                ["content", "prBadgePostScript", ["loc", [null, [15, 6],
                    [15, 27]
                ]]],
                ["inline", "i18n", ["Claim your free loot"],
                    [],
                    ["loc", [null, [28, 6],
                        [28, 37]
                    ]]
                ],
                ["element", "action", ["goToRedirectRouteWithOffers"],
                    [],
                    ["loc", [null, [34, 4],
                        [34, 44]
                    ]]
                ],
                ["inline", "i18n", ["See loot"],
                    [],
                    ["loc", [null, [35, 4],
                        [35, 26]
                    ]]
                ],
                ["inline", "i18n", ["Start saving with your exclusive member pricing on Amazon"],
                    [],
                    ["loc", [null, [44, 6],
                        [44, 74]
                    ]]
                ],
                ["attribute", "href", ["concat", [
                    ["get", "browseNodeUrl", ["loc", [null, [47, 13],
                        [47, 26]
                    ]]]
                ]]],
                ["inline", "i18n", ["Browse Games"],
                    [],
                    ["loc", [null, [47, 125],
                        [47, 148]
                    ]]
                ],
                ["inline", "i18n", ["Use your free channel subscription"],
                    [],
                    ["loc", [null, [55, 6],
                        [55, 51]
                    ]]
                ],
                ["inline", "i18n", ["Directly supports your favorite streamer, and you can subscribe again for free every 30 days."],
                    [],
                    ["loc", [null, [58, 6],
                        [58, 110]
                    ]]
                ],
                ["content", "settingsDescription", ["loc", [null, [62, 6],
                    [62, 29]
                ]]],
                ["element", "action", ["goToRedirectRouteWithSubModal"],
                    [],
                    ["loc", [null, [65, 92],
                        [65, 134]
                    ]]
                ],
                ["inline", "i18n", ["Subscribe Free"],
                    [],
                    ["loc", [null, [65, 135],
                        [65, 160]
                    ]]
                ],
                ["inline", "i18n", ["Want to know more?"],
                    [],
                    ["loc", [null, [72, 4],
                        [72, 33]
                    ]]
                ],
                ["attribute", "href", ["concat", [
                    ["get", "primeBlogPostHref", ["loc", [null, [75, 44],
                        [75, 61]
                    ]]]
                ]]],
                ["inline", "i18n", ["Find out more about Twitch Prime in our FAQs"],
                    [],
                    ["loc", [null, [75, 79],
                        [75, 134]
                    ]]
                ]
            ],
            locals: [],
            templates: []
        }
    }())
}), define("web-client/components/samus/benefits-settings/template", ["exports"], function(e) {
    e.default = Ember.HTMLBars.template(function() {
        var e = function() {
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
                            line: 5,
                            column: 0
                        }
                    },
                    moduleName: "web-client/components/samus/benefits-settings/template.hbs"
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
                    e.setAttribute(n, "class", "cl-subheader");
                    var a = e.createTextNode("\n    ");
                    e.appendChild(n, a);
                    var a = e.createElement("p"),
                        r = e.createComment("");
                    e.appendChild(a, r), e.appendChild(n, a);
                    var a = e.createTextNode("\n  ");
                    e.appendChild(n, a), e.appendChild(t, n);
                    var n = e.createTextNode("\n");
                    return e.appendChild(t, n), t
                },
                buildRenderNodes: function(e, t, n) {
                    var a = new Array(1);
                    return a[0] = e.createMorphAt(e.childAt(t, [1, 1]), 0, 0), a
                },
                statements: [
                    ["inline", "i18n", [
                            ["get", "subheader", ["loc", [null, [3, 14],
                                [3, 23]
                            ]]]
                        ],
                        [],
                        ["loc", [null, [3, 7],
                            [3, 25]
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
                        line: 52,
                        column: 0
                    }
                },
                moduleName: "web-client/components/samus/benefits-settings/template.hbs"
            },
            isEmpty: !1,
            arity: 0,
            cachedFragment: null,
            hasRendered: !1,
            buildFragment: function(e) {
                var t = e.createDocumentFragment(),
                    n = e.createComment("");
                e.appendChild(t, n);
                var n = e.createElement("div");
                e.setAttribute(n, "class", "cl-subsection clearfix");
                var a = e.createTextNode("\n  ");
                e.appendChild(n, a);
                var a = e.createElement("fieldset");
                e.setAttribute(a, "class", "clearfix");
                var r = e.createTextNode("\n    ");
                e.appendChild(a, r);
                var r = e.createElement("div");
                e.setAttribute(r, "class", "label-wrapper");
                var l = e.createTextNode("\n      ");
                e.appendChild(r, l);
                var l = e.createElement("label"),
                    i = e.createComment("");
                e.appendChild(l, i), e.appendChild(r, l);
                var l = e.createTextNode("\n    ");
                e.appendChild(r, l), e.appendChild(a, r);
                var r = e.createTextNode("\n    ");
                e.appendChild(a, r);
                var r = e.createElement("div");
                e.setAttribute(r, "class", "pr-welcome__cl-input-container cl-input-container");
                var l = e.createTextNode("\n      ");
                e.appendChild(r, l);
                var l = e.createElement("div");
                e.setAttribute(l, "class", "input boolean optional");
                var i = e.createTextNode("\n        ");
                e.appendChild(l, i);
                var i = e.createElement("input");
                e.setAttribute(i, "id", "user_prime_post_sub"), e.setAttribute(i, "class", "boolean optional"), e.setAttribute(i, "type", "checkbox"), e.setAttribute(i, "value", "1"), e.appendChild(l, i);
                var i = e.createTextNode("\n        ");
                e.appendChild(l, i);
                var i = e.createElement("label");
                e.setAttribute(i, "for", "user_prime_post_sub"), e.setAttribute(i, "class", "boolean optional");
                var o = e.createComment("");
                e.appendChild(i, o), e.appendChild(l, i);
                var i = e.createTextNode("\n        ");
                e.appendChild(l, i);
                var i = e.createElement("p");
                e.setAttribute(i, "class", "form_microcopy");
                var o = e.createTextNode("\n          ");
                e.appendChild(i, o);
                var o = e.createComment("");
                e.appendChild(i, o);
                var o = e.createTextNode("\n        ");
                e.appendChild(i, o), e.appendChild(l, i);
                var i = e.createTextNode("\n      ");
                e.appendChild(l, i), e.appendChild(r, l);
                var l = e.createTextNode("\n    ");
                e.appendChild(r, l), e.appendChild(a, r);
                var r = e.createTextNode("\n  ");
                e.appendChild(a, r), e.appendChild(n, a);
                var a = e.createTextNode("\n\n  ");
                e.appendChild(n, a);
                var a = e.createElement("fieldset");
                e.setAttribute(a, "class", "clearfix");
                var r = e.createTextNode("\n    ");
                e.appendChild(a, r);
                var r = e.createElement("div");
                e.setAttribute(r, "class", "label-wrapper");
                var l = e.createTextNode("\n      ");
                e.appendChild(r, l);
                var l = e.createElement("label"),
                    i = e.createComment("");
                e.appendChild(l, i), e.appendChild(r, l);
                var l = e.createTextNode("\n    ");
                e.appendChild(r, l), e.appendChild(a, r);
                var r = e.createTextNode("\n    ");
                e.appendChild(a, r);
                var r = e.createElement("div");
                e.setAttribute(r, "class", "pr-welcome__cl-input-container cl-input-container");
                var l = e.createTextNode("\n      ");
                e.appendChild(r, l);
                var l = e.createElement("div");
                e.setAttribute(l, "class", "input boolean optional");
                var i = e.createTextNode("\n        ");
                e.appendChild(l, i);
                var i = e.createElement("input");
                e.setAttribute(i, "id", "user_prime_post_redemption"), e.setAttribute(i, "class", "boolean optional"), e.setAttribute(i, "type", "checkbox"), e.setAttribute(i, "value", "1"), e.appendChild(l, i);
                var i = e.createTextNode("\n        ");
                e.appendChild(l, i);
                var i = e.createElement("label");
                e.setAttribute(i, "for", "user_prime_post_redemption"), e.setAttribute(i, "class", "boolean optional");
                var o = e.createComment("");
                e.appendChild(i, o), e.appendChild(l, i);
                var i = e.createTextNode("\n        ");
                e.appendChild(l, i);
                var i = e.createElement("p");
                e.setAttribute(i, "class", "form_microcopy");
                var o = e.createTextNode("\n          ");
                e.appendChild(i, o);
                var o = e.createComment("");
                e.appendChild(i, o);
                var o = e.createTextNode("\n        ");
                e.appendChild(i, o), e.appendChild(l, i);
                var i = e.createTextNode("\n      ");
                e.appendChild(l, i), e.appendChild(r, l);
                var l = e.createTextNode("\n    ");
                e.appendChild(r, l), e.appendChild(a, r);
                var r = e.createTextNode("\n  ");
                e.appendChild(a, r), e.appendChild(n, a);
                var a = e.createTextNode("\n\n  ");
                e.appendChild(n, a);
                var a = e.createElement("fieldset");
                e.setAttribute(a, "class", "clearfix");
                var r = e.createTextNode("\n    ");
                e.appendChild(a, r);
                var r = e.createElement("div");
                e.setAttribute(r, "class", "label-wrapper");
                var l = e.createTextNode("\n      ");
                e.appendChild(r, l);
                var l = e.createElement("label"),
                    i = e.createComment("");
                e.appendChild(l, i), e.appendChild(r, l);
                var l = e.createTextNode("\n    ");
                e.appendChild(r, l), e.appendChild(a, r);
                var r = e.createTextNode("\n    ");
                e.appendChild(a, r);
                var r = e.createElement("div");
                e.setAttribute(r, "class", "pr-welcome__cl-input-container cl-input-container");
                var l = e.createTextNode("\n      ");
                e.appendChild(r, l);
                var l = e.createElement("div");
                e.setAttribute(l, "class", "input boolean optional");
                var i = e.createTextNode("\n        ");
                e.appendChild(l, i);
                var i = e.createElement("input");
                e.setAttribute(i, "id", "user_prime_show_badge"), e.setAttribute(i, "class", "boolean optional"), e.setAttribute(i, "type", "checkbox"), e.setAttribute(i, "value", "1"), e.appendChild(l, i);
                var i = e.createTextNode("\n        ");
                e.appendChild(l, i);
                var i = e.createElement("label");
                e.setAttribute(i, "for", "user_prime_show_badge"), e.setAttribute(i, "class", "boolean optional");
                var o = e.createComment("");
                e.appendChild(i, o), e.appendChild(l, i);
                var i = e.createTextNode("\n        ");
                e.appendChild(l, i);
                var i = e.createElement("p");
                e.setAttribute(i, "class", "form_microcopy");
                var o = e.createTextNode("\n          ");
                e.appendChild(i, o);
                var o = e.createComment("");
                e.appendChild(i, o);
                var o = e.createTextNode("\n        ");
                e.appendChild(i, o), e.appendChild(l, i);
                var i = e.createTextNode("\n      ");
                e.appendChild(l, i), e.appendChild(r, l);
                var l = e.createTextNode("\n    ");
                e.appendChild(r, l), e.appendChild(a, r);
                var r = e.createTextNode("\n  ");
                e.appendChild(a, r), e.appendChild(n, a);
                var a = e.createTextNode("\n");
                e.appendChild(n, a), e.appendChild(t, n);
                var n = e.createTextNode("\n");
                return e.appendChild(t, n), t
            },
            buildRenderNodes: function(e, t, n) {
                var a = e.childAt(t, [1]),
                    r = e.childAt(a, [1]),
                    l = e.childAt(r, [3, 1]),
                    i = e.childAt(a, [3]),
                    o = e.childAt(i, [3, 1]),
                    c = e.childAt(a, [5]),
                    d = e.childAt(c, [3, 1]),
                    s = new Array(10);
                return s[0] = e.createMorphAt(t, 0, 0, n), s[1] = e.createMorphAt(e.childAt(r, [1, 1]), 0, 0), s[2] = e.createMorphAt(e.childAt(l, [3]), 0, 0), s[3] = e.createMorphAt(e.childAt(l, [5]), 1, 1), s[4] = e.createMorphAt(e.childAt(i, [1, 1]), 0, 0), s[5] = e.createMorphAt(e.childAt(o, [3]), 0, 0), s[6] = e.createMorphAt(e.childAt(o, [5]), 1, 1), s[7] = e.createMorphAt(e.childAt(c, [1, 1]), 0, 0), s[8] = e.createMorphAt(e.childAt(d, [3]), 0, 0), s[9] = e.createMorphAt(e.childAt(d, [5]), 1, 1), e.insertBoundary(t, 0), s
            },
            statements: [
                ["block", "if", [
                        ["get", "subheader", ["loc", [null, [1, 6],
                            [1, 15]
                        ]]]
                    ],
                    [], 0, null, ["loc", [null, [1, 0],
                        [5, 7]
                    ]]
                ],
                ["inline", "i18n", ["Post Subscriptions"],
                    [],
                    ["loc", [null, [9, 13],
                        [9, 42]
                    ]]
                ],
                ["inline", "i18n", ["Automatically share in chat when I use my free subscription benefit"],
                    [],
                    ["loc", [null, [14, 66],
                        [14, 144]
                    ]]
                ],
                ["inline", "i18n", ["Let your favorite streamer know your free subscription supports them. Turning this off will hide your subscription announcement in chat."],
                    [],
                    ["loc", [null, [16, 10],
                        [16, 157]
                    ]]
                ],
                ["inline", "i18n", ["Share Content Activity"],
                    [],
                    ["loc", [null, [24, 13],
                        [24, 46]
                    ]]
                ],
                ["inline", "i18n", ["Automatically share in chat when I claim free game loot"],
                    [],
                    ["loc", [null, [29, 73],
                        [29, 139]
                    ]]
                ],
                ["inline", "i18n", ["We won't share content we think is not relevant to to your current activity."],
                    [],
                    ["loc", [null, [31, 10],
                        [31, 98]
                    ]]
                ],
                ["inline", "i18n", ["Show Badge"],
                    [],
                    ["loc", [null, [39, 13],
                        [39, 34]
                    ]]
                ],
                ["inline", "i18n", ["Show Twitch Prime badge by your name in Chat."],
                    [],
                    ["loc", [null, [44, 68],
                        [44, 124]
                    ]]
                ],
                ["inline", "i18n", ["This appears instead of the Turbo badge, and doesn't affect Mod or Subscriber badges."],
                    [],
                    ["loc", [null, [46, 10],
                        [46, 107]
                    ]]
                ]
            ],
            locals: [],
            templates: [e]
        }
    }())
}), define("web-client/components/samus/offer-detail/component", ["exports", "ember", "ember-computed", "ember-service/inject", "web-client/utilities/cdn-url", "web-client/config/environment", "web-client/utilities/redirect", "ember-tether/components/ember-tether", "web-client/utilities/urls/prime-urls"], function(e, t, n, a, r, l, i, o, c) {
    var d = t.default.Logger;
    e.default = o.default.extend({
        api: (0, a.default)(),
        session: (0, a.default)(),
        claimOffer: (0, a.default)(),
        classNames: ["offer-item__balloon", "balloon", "balloon--right"],
        target: n.default.readOnly("tetherId"),
        targetAttachment: "top right",
        attachment: "top left",
        offset: "170px 0",
        hasCode: null,
        isCopied: !1,
        isClaimingOffer: !1,
        errorMessage: null,
        stayOpen: !1,
        windowOpen: i.windowOpen,
        landingHref: (0, n.default)("landingHref", "window.location.pathname", function() {
            var e = btoa(window.location.pathname.substring(1));
            return c.CONTENT_CODE_URL + "&redirectRoute=" + e
        }),
        linkingHref: (0, n.default)("linkingHref", "window.location.pathname", function() {
            var e = btoa(window.location.pathname.substring(1));
            return c.CONTENT_CODE_LINK_URL + "&redirectRoute=" + e
        }),
        spinnerImage: (0, n.default)(function() {
            return (0, r.default)("images/spinner.gif")
        }),
        buttonText: (0, n.default)("offer.contentDeliveryMethod", function() {
            return "DIRECT_ENTITLEMENT" === this.get("offer.contentDeliveryMethod") ? i18n("Claim Offer") : i18n("Get Code")
        }),
        mouseEnter: function() {
            this.set("stayOpen", !0), this.set("parentView.childHover", !0)
        },
        mouseLeave: function() {
            var e = this;
            if (!this.get("isClaimingOffer")) {
                var t = l.default.delay.premium.flyout;
                this.set("stayOpen", !1), this.runTask(function() {
                    e.get("stayOpen") || e.set("parentView.childHover", !1)
                }, t)
            }
        },
        actions: {
            claimOffer: function() {
                var e = this;
                if (!this.get("isClaimingOffer")) {
                    this.set("isClaimingOffer", !0), this.set("stayOpen", !0);
                    var t = this.get("offer.id");
                    this.get("claimOffer").claim(t).then(function(t) {
                        if (!e.isDestroyed) {
                            if ("DIRECT_ENTITLEMENT" === t.type) {
                                e.set("isClaimingOffer", !1), e.mouseLeave();
                                var n = t.claimData.split("https://twitch.amazon.com/thanks?asin="),
                                    a = 2 === n.length ? n[1] : n[0];
                                return void e.windowOpen("/products/thankyou/" + a, "Twitch", "width=1024,height=600,scrollbars=yes")
                            }
                            e.set("hasCode", !0), e.set("code", t.claimData)
                        }
                    }).finally(function() {
                        if (!e.isDestroyed) {
                            var t = l.default.delay.premium.getCode;
                            e.runTask(function() {
                                e.set("isClaimingOffer", !1)
                            }, t)
                        }
                    })
                }
            },
            success: function() {
                var e = this;
                this.set("isCopied", !0), this.runTask(function() {
                    e.set("isCopied", !1)
                }, 1e3)
            },
            error: function() {
                d.error("Error copying to clipboard")
            }
        }
    })
}), define("web-client/components/samus/offer-detail/template", ["exports"], function(e) {
    e.default = Ember.HTMLBars.template(function() {
        var e = function() {
                return {
                    meta: {
                        fragmentReason: !1,
                        revision: "Ember@2.4.4",
                        loc: {
                            source: null,
                            start: {
                                line: 6,
                                column: 2
                            },
                            end: {
                                line: 18,
                                column: 2
                            }
                        },
                        moduleName: "web-client/components/samus/offer-detail/template.hbs"
                    },
                    isEmpty: !1,
                    arity: 0,
                    cachedFragment: null,
                    hasRendered: !1,
                    buildFragment: function(e) {
                        var t = e.createDocumentFragment(),
                            n = e.createTextNode("    ");
                        e.appendChild(t, n);
                        var n = e.createComment("");
                        e.appendChild(t, n);
                        var n = e.createTextNode("\n\n    ");
                        e.appendChild(t, n);
                        var n = e.createElement("div");
                        e.setAttribute(n, "class", "offer-item__ci pd-b-2");
                        var a = e.createTextNode("\n      ");
                        e.appendChild(n, a);
                        var a = e.createComment(" template-lint triple-curlies=false ");
                        e.appendChild(n, a);
                        var a = e.createTextNode("\n      ");
                        e.appendChild(n, a);
                        var a = e.createElement("p"),
                            r = e.createComment("");
                        e.appendChild(a, r), e.appendChild(n, a);
                        var a = e.createTextNode("\n      ");
                        e.appendChild(n, a);
                        var a = e.createComment(" template-lint triple-curlies=true ");
                        e.appendChild(n, a);
                        var a = e.createTextNode("\n    ");
                        e.appendChild(n, a), e.appendChild(t, n);
                        var n = e.createTextNode("\n");
                        return e.appendChild(t, n), t
                    },
                    buildRenderNodes: function(e, t, n) {
                        var a = new Array(2);
                        return a[0] = e.createMorphAt(t, 1, 1, n), a[1] = e.createUnsafeMorphAt(e.childAt(t, [3, 3]), 0, 0), a
                    },
                    statements: [
                        ["inline", "copyable-item", [],
                            ["text", ["subexpr", "@mut", [
                                    ["get", "code", ["loc", [null, [8, 11],
                                        [8, 15]
                                    ]]]
                                ],
                                [],
                                []
                            ], "isCopied", ["subexpr", "@mut", [
                                    ["get", "isCopied", ["loc", [null, [9, 15],
                                        [9, 23]
                                    ]]]
                                ],
                                [],
                                []
                            ], "success", ["subexpr", "action", ["success"],
                                [],
                                ["loc", [null, [10, 14],
                                    [10, 32]
                                ]]
                            ], "error", ["subexpr", "action", ["error"],
                                [],
                                ["loc", [null, [11, 12],
                                    [11, 28]
                                ]]
                            ]],
                            ["loc", [null, [7, 4],
                                [11, 30]
                            ]]
                        ],
                        ["content", "offer.contentClaimInstruction", ["loc", [null, [15, 9],
                            [15, 44]
                        ]]]
                    ],
                    locals: [],
                    templates: []
                }
            }(),
            t = function() {
                var e = function() {
                    var e = function() {
                            return {
                                meta: {
                                    fragmentReason: !1,
                                    revision: "Ember@2.4.4",
                                    loc: {
                                        source: null,
                                        start: {
                                            line: 19,
                                            column: 4
                                        },
                                        end: {
                                            line: 21,
                                            column: 4
                                        }
                                    },
                                    moduleName: "web-client/components/samus/offer-detail/template.hbs"
                                },
                                isEmpty: !1,
                                arity: 0,
                                cachedFragment: null,
                                hasRendered: !1,
                                buildFragment: function(e) {
                                    var t = e.createDocumentFragment(),
                                        n = e.createTextNode("      ");
                                    e.appendChild(t, n);
                                    var n = e.createElement("button");
                                    e.setAttribute(n, "class", "button primary button-block"), e.setAttribute(n, "type", "button");
                                    var a = e.createComment("");
                                    e.appendChild(n, a), e.appendChild(t, n);
                                    var n = e.createTextNode("\n");
                                    return e.appendChild(t, n), t
                                },
                                buildRenderNodes: function(e, t, n) {
                                    var a = e.childAt(t, [1]),
                                        r = new Array(2);
                                    return r[0] = e.createElementMorph(a), r[1] = e.createMorphAt(a, 0, 0), r
                                },
                                statements: [
                                    ["element", "action", ["claimOffer"],
                                        [],
                                        ["loc", [null, [20, 64],
                                            [20, 87]
                                        ]]
                                    ],
                                    ["content", "buttonText", ["loc", [null, [20, 88],
                                        [20, 102]
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
                                            line: 21,
                                            column: 4
                                        },
                                        end: {
                                            line: 25,
                                            column: 4
                                        }
                                    },
                                    moduleName: "web-client/components/samus/offer-detail/template.hbs"
                                },
                                isEmpty: !1,
                                arity: 0,
                                cachedFragment: null,
                                hasRendered: !1,
                                buildFragment: function(e) {
                                    var t = e.createDocumentFragment(),
                                        n = e.createTextNode("      ");
                                    e.appendChild(t, n);
                                    var n = e.createElement("div");
                                    e.setAttribute(n, "class", "align-center");
                                    var a = e.createTextNode("\n        ");
                                    e.appendChild(n, a);
                                    var a = e.createElement("img");
                                    e.setAttribute(a, "class", "loading js-spinner"), e.appendChild(n, a);
                                    var a = e.createTextNode("\n      ");
                                    e.appendChild(n, a), e.appendChild(t, n);
                                    var n = e.createTextNode("\n");
                                    return e.appendChild(t, n), t
                                },
                                buildRenderNodes: function(e, t, n) {
                                    var a = e.childAt(t, [1, 1]),
                                        r = new Array(1);
                                    return r[0] = e.createAttrMorph(a, "src"), r
                                },
                                statements: [
                                    ["attribute", "src", ["get", "spinnerImage", ["loc", [null, [23, 19],
                                        [23, 31]
                                    ]]]]
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
                                    line: 18,
                                    column: 2
                                },
                                end: {
                                    line: 32,
                                    column: 2
                                }
                            },
                            moduleName: "web-client/components/samus/offer-detail/template.hbs"
                        },
                        isEmpty: !1,
                        arity: 0,
                        cachedFragment: null,
                        hasRendered: !1,
                        buildFragment: function(e) {
                            var t = e.createDocumentFragment(),
                                n = e.createComment("");
                            e.appendChild(t, n);
                            var n = e.createTextNode("\n    ");
                            e.appendChild(t, n);
                            var n = e.createElement("div");
                            e.setAttribute(n, "class", "offer-item__ci pd-b-2");
                            var a = e.createTextNode("\n      ");
                            e.appendChild(n, a);
                            var a = e.createComment(" template-lint triple-curlies=false ");
                            e.appendChild(n, a);
                            var a = e.createTextNode("\n      ");
                            e.appendChild(n, a);
                            var a = e.createElement("p"),
                                r = e.createComment("");
                            e.appendChild(a, r);
                            var r = e.createTextNode(" ");
                            e.appendChild(a, r), e.appendChild(n, a);
                            var a = e.createTextNode("\n      ");
                            e.appendChild(n, a);
                            var a = e.createComment(" template-lint triple-curlies=true ");
                            e.appendChild(n, a);
                            var a = e.createTextNode("\n    ");
                            e.appendChild(n, a), e.appendChild(t, n);
                            var n = e.createTextNode("\n  ");
                            return e.appendChild(t, n), t
                        },
                        buildRenderNodes: function(e, t, n) {
                            var a = new Array(2);
                            return a[0] = e.createMorphAt(t, 0, 0, n), a[1] = e.createUnsafeMorphAt(e.childAt(t, [2, 3]), 0, 0), e.insertBoundary(t, 0), a
                        },
                        statements: [
                            ["block", "if", [
                                    ["subexpr", "not", [
                                            ["get", "isClaimingOffer", ["loc", [null, [19, 15],
                                                [19, 30]
                                            ]]]
                                        ],
                                        [],
                                        ["loc", [null, [19, 10],
                                            [19, 31]
                                        ]]
                                    ]
                                ],
                                [], 0, 1, ["loc", [null, [19, 4],
                                    [25, 11]
                                ]]
                            ],
                            ["content", "offer.offerDescription", ["loc", [null, [29, 9],
                                [29, 37]
                            ]]]
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
                                line: 18,
                                column: 2
                            },
                            end: {
                                line: 32,
                                column: 2
                            }
                        },
                        moduleName: "web-client/components/samus/offer-detail/template.hbs"
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
                                ["get", "hasPrime", ["loc", [null, [18, 12],
                                    [18, 20]
                                ]]]
                            ],
                            [], 0, null, ["loc", [null, [18, 2],
                                [32, 2]
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
                                line: 34,
                                column: 2
                            },
                            end: {
                                line: 48,
                                column: 2
                            }
                        },
                        moduleName: "web-client/components/samus/offer-detail/template.hbs"
                    },
                    isEmpty: !1,
                    arity: 0,
                    cachedFragment: null,
                    hasRendered: !1,
                    buildFragment: function(e) {
                        var t = e.createDocumentFragment(),
                            n = e.createTextNode("    ");
                        e.appendChild(t, n);
                        var n = e.createElement("div");
                        e.setAttribute(n, "class", "offer-item__upsell-header");
                        var a = e.createTextNode("\n      ");
                        e.appendChild(n, a);
                        var a = e.createElement("h4"),
                            r = e.createComment("");
                        e.appendChild(a, r), e.appendChild(n, a);
                        var a = e.createTextNode("\n    ");
                        e.appendChild(n, a), e.appendChild(t, n);
                        var n = e.createTextNode("\n    ");
                        e.appendChild(t, n);
                        var n = e.createElement("div");
                        e.setAttribute(n, "class", "offer-item__upsell-body");
                        var a = e.createTextNode("\n      ");
                        e.appendChild(n, a);
                        var a = e.createElement("p"),
                            r = e.createComment("");
                        e.appendChild(a, r), e.appendChild(n, a);
                        var a = e.createTextNode("\n      ");
                        e.appendChild(n, a);
                        var a = e.createElement("div");
                        e.setAttribute(a, "class", "align-center mg-t-1");
                        var r = e.createTextNode("\n        ");
                        e.appendChild(a, r);
                        var r = e.createElement("a");
                        e.setAttribute(r, "class", "button primary"), e.setAttribute(r, "target", "_blank");
                        var l = e.createTextNode("\n          ");
                        e.appendChild(r, l);
                        var l = e.createComment("");
                        e.appendChild(r, l);
                        var l = e.createTextNode("\n        ");
                        e.appendChild(r, l), e.appendChild(a, r);
                        var r = e.createTextNode("\n      ");
                        e.appendChild(a, r), e.appendChild(n, a);
                        var a = e.createTextNode("\n      ");
                        e.appendChild(n, a);
                        var a = e.createElement("p"),
                            r = e.createComment("");
                        e.appendChild(a, r), e.appendChild(n, a);
                        var a = e.createTextNode("\n      ");
                        e.appendChild(n, a);
                        var a = e.createElement("p"),
                            r = e.createElement("a");
                        e.setAttribute(r, "target", "_blank");
                        var l = e.createComment("");
                        e.appendChild(r, l), e.appendChild(a, r), e.appendChild(n, a);
                        var a = e.createTextNode("\n    ");
                        e.appendChild(n, a), e.appendChild(t, n);
                        var n = e.createTextNode("\n");
                        return e.appendChild(t, n), t
                    },
                    buildRenderNodes: function(e, t, n) {
                        var a = e.childAt(t, [3]),
                            r = e.childAt(a, [3, 1]),
                            l = e.childAt(a, [7, 0]),
                            i = new Array(7);
                        return i[0] = e.createMorphAt(e.childAt(t, [1, 1]), 0, 0), i[1] = e.createMorphAt(e.childAt(a, [1]), 0, 0), i[2] = e.createAttrMorph(r, "href"), i[3] = e.createMorphAt(r, 1, 1), i[4] = e.createMorphAt(e.childAt(a, [5]), 0, 0), i[5] = e.createAttrMorph(l, "href"), i[6] = e.createMorphAt(l, 0, 0), i
                    },
                    statements: [
                        ["inline", "i18n", ["Claim with Twitch Prime"],
                            [],
                            ["loc", [null, [36, 10],
                                [36, 44]
                            ]]
                        ],
                        ["inline", "i18n", ["Get free game loot like this every month plus surprises, ad-free viewing, free monthly channel subscription, and loads more, all included with Amazon Prime."],
                            [],
                            ["loc", [null, [39, 9],
                                [39, 176]
                            ]]
                        ],
                        ["attribute", "href", ["get", "landingHref", ["loc", [null, [41, 41],
                            [41, 52]
                        ]]]],
                        ["inline", "i18n", ["Start 30-day Free Trial"],
                            [],
                            ["loc", [null, [42, 10],
                                [42, 44]
                            ]]
                        ],
                        ["inline", "i18n", ["Already an Amazon Prime member? You get Twitch Prime at no additional cost, just"],
                            [],
                            ["loc", [null, [45, 9],
                                [45, 100]
                            ]]
                        ],
                        ["attribute", "href", ["get", "linkingHref", ["loc", [null, [46, 19],
                            [46, 30]
                        ]]]],
                        ["inline", "i18n", ["connect your Twitch account"],
                            [],
                            ["loc", [null, [46, 49],
                                [46, 87]
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
                        line: 50,
                        column: 0
                    }
                },
                moduleName: "web-client/components/samus/offer-detail/template.hbs"
            },
            isEmpty: !1,
            arity: 0,
            cachedFragment: null,
            hasRendered: !1,
            buildFragment: function(e) {
                var t = e.createDocumentFragment(),
                    n = e.createElement("img");
                e.setAttribute(n, "class", "offer-item__header-img"), e.appendChild(t, n);
                var n = e.createTextNode("\n");
                e.appendChild(t, n);
                var n = e.createElement("h4"),
                    a = e.createComment("");
                e.appendChild(n, a), e.appendChild(t, n);
                var n = e.createTextNode("\n");
                e.appendChild(t, n);
                var n = e.createElement("p"),
                    a = e.createComment("");
                e.appendChild(n, a);
                var a = e.createTextNode(" ");
                e.appendChild(n, a);
                var a = e.createComment("");
                e.appendChild(n, a), e.appendChild(t, n);
                var n = e.createTextNode("\n");
                e.appendChild(t, n);
                var n = e.createElement("p"),
                    a = e.createComment("");
                e.appendChild(n, a), e.appendChild(t, n);
                var n = e.createTextNode("\n");
                e.appendChild(t, n);
                var n = e.createElement("div");
                e.setAttribute(n, "class", "offer-item__instructions");
                var a = e.createTextNode("\n");
                e.appendChild(n, a);
                var a = e.createComment("");
                e.appendChild(n, a);
                var a = e.createTextNode("\n");
                e.appendChild(n, a);
                var a = e.createComment("");
                e.appendChild(n, a), e.appendChild(t, n);
                var n = e.createTextNode("\n");
                return e.appendChild(t, n), t
            },
            buildRenderNodes: function(e, t, n) {
                var a = e.childAt(t, [0]),
                    r = e.childAt(t, [4]),
                    l = e.childAt(t, [8]),
                    i = new Array(7);
                return i[0] = e.createAttrMorph(a, "src"), i[1] = e.createMorphAt(e.childAt(t, [2]), 0, 0), i[2] = e.createMorphAt(r, 0, 0), i[3] = e.createMorphAt(r, 2, 2), i[4] = e.createMorphAt(e.childAt(t, [6]), 0, 0), i[5] = e.createMorphAt(l, 1, 1), i[6] = e.createMorphAt(l, 3, 3), i
            },
            statements: [
                ["attribute", "src", ["get", "offer.detail.location", ["loc", [null, [1, 42],
                    [1, 63]
                ]]]],
                ["content", "offer.offerTitle", ["loc", [null, [2, 4],
                    [2, 24]
                ]]],
                ["content", "offer.applicableGame", ["loc", [null, [3, 3],
                    [3, 27]
                ]]],
                ["content", "offer.categories", ["loc", [null, [3, 28],
                    [3, 48]
                ]]],
                ["content", "offer.publisherName", ["loc", [null, [4, 3],
                    [4, 26]
                ]]],
                ["block", "liquid-if", [
                        ["subexpr", "and", [
                                ["get", "hasPrime", ["loc", [null, [6, 20],
                                    [6, 28]
                                ]]],
                                ["get", "hasCode", ["loc", [null, [6, 29],
                                    [6, 36]
                                ]]]
                            ],
                            [],
                            ["loc", [null, [6, 15],
                                [6, 37]
                            ]]
                        ]
                    ],
                    ["use", "fade"], 0, 1, ["loc", [null, [6, 2],
                        [32, 16]
                    ]]
                ],
                ["block", "if", [
                        ["subexpr", "eq", [
                                ["get", "hasPrime", ["loc", [null, [34, 12],
                                    [34, 20]
                                ]]], !1
                            ],
                            [],
                            ["loc", [null, [34, 8],
                                [34, 27]
                            ]]
                        ]
                    ],
                    [], 2, null, ["loc", [null, [34, 2],
                        [48, 9]
                    ]]
                ]
            ],
            locals: [],
            templates: [e, t, n]
        }
    }())
}), define("web-client/components/samus/offer-item/component", ["exports", "ember-component", "hoverintent", "ember-computed", "ember-runloop"], function(e, t, n, a, r) {
    e.default = t.default.extend({
        tagName: "dd",
        classNames: "warp__item balloon-wrapper offer-item",
        childHover: !1,
        tooltip: !1,
        showAllOffers: null,
        hoverListener: null,
        showTooltip: a.default.or("tooltip", "childHover"),
        didInsertElement: function() {
            var e = this;
            this._super.apply(this, arguments), this.hoverListener = (0, n.default)(this.$()[0], function() {
                (0, r.default)(function() {
                    e.set("tooltip", !0)
                })
            }, function() {
                e.runTask(function() {
                    e.set("tooltip", !1)
                }, 100)
            })
        },
        tetherId: (0, a.default)("elementId", function() {
            return "#" + this.get("elementId")
        }),
        willDestroyElement: function() {
            this.hoverListener.remove(), this._super.apply(this, arguments)
        }
    })
}), define("web-client/components/samus/offer-item/template", ["exports"], function(e) {
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
                                line: 5,
                                column: 2
                            }
                        },
                        moduleName: "web-client/components/samus/offer-item/template.hbs"
                    },
                    isEmpty: !1,
                    arity: 0,
                    cachedFragment: null,
                    hasRendered: !1,
                    buildFragment: function(e) {
                        var t = e.createDocumentFragment(),
                            n = e.createTextNode("    ");
                        e.appendChild(t, n);
                        var n = e.createElement("img");
                        e.setAttribute(n, "class", "warp__item--thumbnail-image"), e.appendChild(t, n);
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
                            ["get", "offer.thumbnail.location", ["loc", [null, [4, 52],
                                [4, 76]
                            ]]]
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
                                line: 5,
                                column: 2
                            },
                            end: {
                                line: 9,
                                column: 2
                            }
                        },
                        moduleName: "web-client/components/samus/offer-item/template.hbs"
                    },
                    isEmpty: !1,
                    arity: 0,
                    cachedFragment: null,
                    hasRendered: !1,
                    buildFragment: function(e) {
                        var t = e.createDocumentFragment(),
                            n = e.createTextNode("    ");
                        e.appendChild(t, n);
                        var n = e.createElement("figure");
                        e.setAttribute(n, "class", "warp__avatar");
                        var a = e.createTextNode("\n      ");
                        e.appendChild(n, a);
                        var a = e.createElement("img");
                        e.appendChild(n, a);
                        var a = e.createTextNode("\n    ");
                        e.appendChild(n, a), e.appendChild(t, n);
                        var n = e.createTextNode("\n");
                        return e.appendChild(t, n), t
                    },
                    buildRenderNodes: function(e, t, n) {
                        var a = e.childAt(t, [1, 1]),
                            r = new Array(1);
                        return r[0] = e.createAttrMorph(a, "src"), r
                    },
                    statements: [
                        ["attribute", "src", ["concat", [
                            ["get", "offer.icon.location", ["loc", [null, [7, 18],
                                [7, 37]
                            ]]]
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
                        line: 18,
                        column: 0
                    }
                },
                moduleName: "web-client/components/samus/offer-item/template.hbs"
            },
            isEmpty: !1,
            arity: 0,
            cachedFragment: null,
            hasRendered: !1,
            buildFragment: function(e) {
                var t = e.createDocumentFragment(),
                    n = e.createElement("a"),
                    a = e.createTextNode("\n\n");
                e.appendChild(n, a);
                var a = e.createComment("");
                e.appendChild(n, a);
                var a = e.createTextNode("\n  ");
                e.appendChild(n, a);
                var a = e.createElement("span");
                e.setAttribute(a, "class", "warp__text offer-title");
                var r = e.createTextNode("\n    ");
                e.appendChild(a, r);
                var r = e.createElement("span");
                e.setAttribute(r, "class", "warp__title");
                var l = e.createComment("");
                e.appendChild(r, l), e.appendChild(a, r);
                var r = e.createTextNode("\n    ");
                e.appendChild(a, r);
                var r = e.createElement("span");
                e.setAttribute(r, "class", "warp__status ellipsis");
                var l = e.createComment("");
                e.appendChild(r, l), e.appendChild(a, r);
                var r = e.createTextNode("\n  ");
                e.appendChild(a, r), e.appendChild(n, a);
                var a = e.createTextNode("\n");
                e.appendChild(n, a), e.appendChild(t, n);
                var n = e.createTextNode("\n\n");
                e.appendChild(t, n);
                var n = e.createComment("");
                e.appendChild(t, n);
                var n = e.createTextNode("\n");
                return e.appendChild(t, n), t
            },
            buildRenderNodes: function(e, t, n) {
                var a = e.childAt(t, [0]),
                    r = e.childAt(a, [3]),
                    l = new Array(5);
                return l[0] = e.createAttrMorph(a, "class"), l[1] = e.createMorphAt(a, 1, 1), l[2] = e.createMorphAt(e.childAt(r, [1]), 0, 0), l[3] = e.createMorphAt(e.childAt(r, [3]), 0, 0), l[4] = e.createMorphAt(t, 2, 2, n), l
            },
            statements: [
                ["attribute", "class", ["concat", ["js-offer-hover ", ["subexpr", "if", [
                        ["get", "showAllOffers", ["loc", [null, [1, 30],
                            [1, 43]
                        ]]], "warp__item--thumbnail"
                    ],
                    [],
                    ["loc", [null, [1, 25],
                        [1, 69]
                    ]]
                ]]]],
                ["block", "if", [
                        ["subexpr", "and", [
                                ["get", "showAllOffers", ["loc", [null, [3, 13],
                                    [3, 26]
                                ]]],
                                ["subexpr", "not", [
                                        ["get", "isLeftColumnClosed", ["loc", [null, [3, 32],
                                            [3, 50]
                                        ]]]
                                    ],
                                    [],
                                    ["loc", [null, [3, 27],
                                        [3, 51]
                                    ]]
                                ]
                            ],
                            [],
                            ["loc", [null, [3, 8],
                                [3, 52]
                            ]]
                        ]
                    ],
                    [], 0, 1, ["loc", [null, [3, 2],
                        [9, 9]
                    ]]
                ],
                ["content", "offer.offerTitle", ["loc", [null, [12, 30],
                    [12, 50]
                ]]],
                ["content", "offer.applicableGame", ["loc", [null, [13, 40],
                    [13, 64]
                ]]],
                ["inline", "yield", [
                        ["get", "showTooltip", ["loc", [null, [17, 8],
                            [17, 19]
                        ]]],
                        ["get", "tetherId", ["loc", [null, [17, 20],
                            [17, 28]
                        ]]]
                    ],
                    [],
                    ["loc", [null, [17, 0],
                        [17, 30]
                    ]]
                ]
            ],
            locals: [],
            templates: [e, t]
        }
    }())
}), define("web-client/components/samus/offer-list/component", ["exports", "ember-computed", "ember-component", "ember-service/inject", "web-client/utilities/url-params"], function(e, t, n, a, r) {
    e.default = n.default.extend({
        session: (0, a.default)(),
        store: (0, a.default)(),
        urlParams: r.default,
        tagName: "dl",
        classNames: "warp__list js-offers",
        offers: [],
        hasPrime: !1,
        showAllOffers: !1,
        orderSortingAsc: ["priority:asc"],
        offersSorted: t.default.sort("offers", "orderSortingAsc"),
        navOffers: (0, t.default)("isLeftColumnClosed", "showAllOffers", "offersSorted.[]", function() {
            return this.get("showAllOffers") && !this.get("isLeftColumnClosed") ? this.get("offersSorted") : this.get("offersSorted").slice(0, 3)
        }),
        init: function() {
            var e = this;
            this._super.apply(this, arguments), this.get("store").findAll("offer").then(function(t) {
                e.isDestroyed || e.set("offers", t)
            });
            var t = this.get("session"),
                n = t.isAuthenticated,
                a = t.userData;
            if (n) {
                var r = a.has_premium || !1;
                this.set("hasPrime", r)
            }
            this._handleSamusTypAction()
        },
        actions: {
            toggleShowAllOffers: function() {
                this.toggleProperty("showAllOffers")
            },
            expandAllOffers: function() {
                this.set("showAllOffers", !0)
            },
            expandToShowAll: function() {
                var e = this.get("showAllOffers");
                e || this.send("toggleShowAllOffers"), this.get("isLeftColumnClosed") && this.get("handleLeftColumnToggleClick")()
            }
        },
        _handleSamusTypAction: function() {
            this.get("urlParams").expandoffers && this.send("expandToShowAll")
        }
    })
}), define("web-client/components/samus/offer-list/template", ["exports"], function(e) {
    e.default = Ember.HTMLBars.template(function() {
        var e = function() {
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
                                line: 12,
                                column: 0
                            }
                        },
                        moduleName: "web-client/components/samus/offer-list/template.hbs"
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
                        e.setAttribute(n, "class", "sep sep--tiny"), e.appendChild(t, n);
                        var n = e.createTextNode("\n  ");
                        e.appendChild(t, n);
                        var n = e.createElement("dd");
                        e.setAttribute(n, "class", "offer-list__min-pr-nav-header warp__item");
                        var a = e.createTextNode("\n    ");
                        e.appendChild(n, a);
                        var a = e.createElement("div");
                        e.setAttribute(a, "class", "title align-center pd-t-1 pd-l-1 pd-r-1 pd-b-1");
                        var r = e.createTextNode("\n      ");
                        e.appendChild(a, r);
                        var r = e.createElement("button");
                        e.setAttribute(r, "class", "offer-list__pr-expand");
                        var l = e.createTextNode("\n        ");
                        e.appendChild(r, l);
                        var l = e.createComment("");
                        e.appendChild(r, l);
                        var l = e.createTextNode("\n      ");
                        e.appendChild(r, l), e.appendChild(a, r);
                        var r = e.createTextNode("\n    ");
                        e.appendChild(a, r), e.appendChild(n, a);
                        var a = e.createTextNode("\n  ");
                        e.appendChild(n, a), e.appendChild(t, n);
                        var n = e.createTextNode("\n  ");
                        e.appendChild(t, n);
                        var n = e.createComment("");
                        e.appendChild(t, n);
                        var n = e.createTextNode("\n  ");
                        e.appendChild(t, n);
                        var n = e.createElement("span");
                        e.setAttribute(n, "class", "sep sep--tiny"), e.appendChild(t, n);
                        var n = e.createTextNode("\n");
                        return e.appendChild(t, n), t
                    },
                    buildRenderNodes: function(e, t, n) {
                        var a = e.childAt(t, [3, 1, 1]),
                            r = new Array(4);
                        return r[0] = e.createAttrMorph(a, "title"), r[1] = e.createElementMorph(a), r[2] = e.createMorphAt(a, 1, 1), r[3] = e.createMorphAt(t, 5, 5, n), r
                    },
                    statements: [
                        ["attribute", "title", ["concat", [
                            ["subexpr", "i18n", ["Free with Prime"],
                                [],
                                ["loc", [null, [5, 51],
                                    [5, 77]
                                ]]
                            ]
                        ]]],
                        ["element", "action", ["expandToShowAll"],
                            [],
                            ["loc", [null, [5, 79],
                                [5, 107]
                            ]]
                        ],
                        ["inline", "partial", ["svg/samus/gp-crown"],
                            [],
                            ["loc", [null, [6, 8],
                                [6, 40]
                            ]]
                        ],
                        ["inline", "yield", [
                                ["get", "navOffers", ["loc", [null, [10, 10],
                                    [10, 19]
                                ]]],
                                ["get", "hasPrime", ["loc", [null, [10, 20],
                                    [10, 28]
                                ]]],
                                ["get", "showAllOffers", ["loc", [null, [10, 29],
                                    [10, 42]
                                ]]]
                            ],
                            [],
                            ["loc", [null, [10, 2],
                                [10, 44]
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
                                line: 12,
                                column: 0
                            },
                            end: {
                                line: 20,
                                column: 0
                            }
                        },
                        moduleName: "web-client/components/samus/offer-list/template.hbs"
                    },
                    isEmpty: !1,
                    arity: 0,
                    cachedFragment: null,
                    hasRendered: !1,
                    buildFragment: function(e) {
                        var t = e.createDocumentFragment(),
                            n = e.createTextNode("  ");
                        e.appendChild(t, n);
                        var n = e.createElement("dt");
                        e.setAttribute(n, "class", "offer-list__pr-nav-header warp__item warp__item--header");
                        var a = e.createTextNode("\n    ");
                        e.appendChild(n, a);
                        var a = e.createElement("div");
                        e.setAttribute(a, "class", "offer-list__pr-title title");
                        var r = e.createComment("");
                        e.appendChild(a, r), e.appendChild(n, a);
                        var a = e.createTextNode("\n    ");
                        e.appendChild(n, a);
                        var a = e.createElement("div");
                        e.setAttribute(a, "data-show-all-offers-open", "");
                        var r = e.createTextNode("\n      ");
                        e.appendChild(a, r);
                        var r = e.createElement("div");
                        e.setAttribute(r, "class", "arrow arrow--t"), e.appendChild(a, r);
                        var r = e.createTextNode("\n    ");
                        e.appendChild(a, r), e.appendChild(n, a);
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
                        return l[0] = e.createMorphAt(e.childAt(a, [1]), 0, 0), l[1] = e.createAttrMorph(r, "class"), l[2] = e.createElementMorph(r), l[3] = e.createMorphAt(t, 3, 3, n), l
                    },
                    statements: [
                        ["inline", "i18n", ["Free with Prime"],
                            [],
                            ["loc", [null, [14, 44],
                                [14, 70]
                            ]]
                        ],
                        ["attribute", "class", ["concat", ["warp__toggle ", ["subexpr", "unless", [
                                ["get", "showAllOffers", ["loc", [null, [15, 38],
                                    [15, 51]
                                ]]], "toggled"
                            ],
                            [],
                            ["loc", [null, [15, 29],
                                [15, 63]
                            ]]
                        ]]]],
                        ["element", "action", ["toggleShowAllOffers"],
                            [],
                            ["loc", [null, [15, 91],
                                [15, 123]
                            ]]
                        ],
                        ["inline", "yield", [
                                ["get", "navOffers", ["loc", [null, [19, 10],
                                    [19, 19]
                                ]]],
                                ["get", "hasPrime", ["loc", [null, [19, 20],
                                    [19, 28]
                                ]]],
                                ["get", "showAllOffers", ["loc", [null, [19, 29],
                                    [19, 42]
                                ]]]
                            ],
                            [],
                            ["loc", [null, [19, 2],
                                [19, 44]
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
                        line: 21,
                        column: 0
                    }
                },
                moduleName: "web-client/components/samus/offer-list/template.hbs"
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
                        ["get", "isLeftColumnClosed", ["loc", [null, [1, 6],
                            [1, 24]
                        ]]]
                    ],
                    [], 0, 1, ["loc", [null, [1, 0],
                        [20, 7]
                    ]]
                ]
            ],
            locals: [],
            templates: [e, t]
        }
    }())
}), define("web-client/components/subscribe/subscribe-button-dynamic/component", ["exports", "ember-computed", "ember-component", "ember-service/inject", "web-client/mixins/click-outside", "web-client/utilities/url-params"], function(e, t, n, a, r, l) {
    e.default = n.default.extend(r.default, {
        api: (0, a.default)(),
        session: (0, a.default)(),
        tagName: "span",
        hasSubCredit: null,
        channelName: null,
        campaign: null,
        shouldRenderUseCredit: !1,
        isSubscribing: !1,
        hasPrime: !1,
        urlParams: l.default,
        init: function() {
            this._super.apply(this, arguments);
            var e = this.get("session"),
                t = e.isAuthenticated,
                n = e.userData;
            t && (this.set("hasPrime", n.has_premium), this._loadBalance(n)), this._handleWelcomeAction()
        },
        href: (0, t.default)("channelName", "campaign", function() {
            return Twitch.uri.subscribe(this.get("channelName"), this.get("campaign"))
        }),
        clickedOutside: function() {
            this.get("isSubscribing") || this.set("isMenuOpen", !1)
        },
        tetherId: (0, t.default)("elementId", function() {
            return "#" + this.get("elementId")
        }),
        actions: {
            toggle: function() {
                this.toggleProperty("isMenuOpen")
            },
            setIsSubscribing: function(e) {
                this.set("isSubscribing", e)
            }
        },
        _loadBalance: function(e) {
            var t = this,
                n = e.chat_oauth_token,
                a = Date.now(),
                r = {
                    oauth_token: n,
                    api_version: 4,
                    cacheBuster: a
                },
                l = this.get("api").request("get", "/kraken/user/subscriptions/credit", r);
            l.then(function(e) {
                if (!t.isDestroyed) {
                    var n = e.balance > 0;
                    t.set("hasSubCredit", n)
                }
            }), l.catch(function(e) {
                if (!t.isDestroyed) {
                    if (e.status && e.status >= 400) return void t.set("hasSubCredit", !1);
                    throw e
                }
            })
        },
        _handleWelcomeAction: function() {
            this.get("urlParams").expandsubmodal && this.set("isMenuOpen", !0)
        }
    })
}), define("web-client/components/subscribe/subscribe-button-dynamic/template", ["exports"], function(e) {
    e.default = Ember.HTMLBars.template(function() {
        var e = function() {
            return {
                meta: {
                    fragmentReason: !1,
                    revision: "Ember@2.4.4",
                    loc: {
                        source: null,
                        start: {
                            line: 11,
                            column: 2
                        },
                        end: {
                            line: 27,
                            column: 2
                        }
                    },
                    moduleName: "web-client/components/subscribe/subscribe-button-dynamic/template.hbs"
                },
                isEmpty: !1,
                arity: 0,
                cachedFragment: null,
                hasRendered: !1,
                buildFragment: function(e) {
                    var t = e.createDocumentFragment(),
                        n = e.createTextNode("    ");
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
                    ["inline", "subscribe/subscription-button-modal", [],
                        ["price", ["subexpr", "@mut", [
                                ["get", "price", ["loc", [null, [13, 12],
                                    [13, 17]
                                ]]]
                            ],
                            [],
                            []
                        ], "channel", ["subexpr", "@mut", [
                                ["get", "channel", ["loc", [null, [14, 14],
                                    [14, 21]
                                ]]]
                            ],
                            [],
                            []
                        ], "hasSubCredit", ["subexpr", "@mut", [
                                ["get", "hasSubCredit", ["loc", [null, [15, 19],
                                    [15, 31]
                                ]]]
                            ],
                            [],
                            []
                        ], "hasPrime", ["subexpr", "@mut", [
                                ["get", "hasPrime", ["loc", [null, [16, 15],
                                    [16, 23]
                                ]]]
                            ],
                            [],
                            []
                        ], "tetherId", ["subexpr", "@mut", [
                                ["get", "tetherId", ["loc", [null, [17, 15],
                                    [17, 23]
                                ]]]
                            ],
                            [],
                            []
                        ], "href", ["subexpr", "@mut", [
                                ["get", "href", ["loc", [null, [18, 11],
                                    [18, 15]
                                ]]]
                            ],
                            [],
                            []
                        ], "isSubscribing", ["subexpr", "@mut", [
                                ["get", "isSubscribing", ["loc", [null, [19, 20],
                                    [19, 33]
                                ]]]
                            ],
                            [],
                            []
                        ], "attachment", ["subexpr", "@mut", [
                                ["get", "attachment", ["loc", [null, [20, 17],
                                    [20, 27]
                                ]]]
                            ],
                            [],
                            []
                        ], "targetAttachment", ["subexpr", "@mut", [
                                ["get", "targetAttachment", ["loc", [null, [21, 23],
                                    [21, 39]
                                ]]]
                            ],
                            [],
                            []
                        ], "offset", ["subexpr", "@mut", [
                                ["get", "offset", ["loc", [null, [22, 13],
                                    [22, 19]
                                ]]]
                            ],
                            [],
                            []
                        ], "classNames", ["subexpr", "@mut", [
                                ["get", "balloonClassNames", ["loc", [null, [23, 17],
                                    [23, 34]
                                ]]]
                            ],
                            [],
                            []
                        ], "toggle", ["subexpr", "action", ["toggle"],
                            [],
                            ["loc", [null, [24, 13],
                                [24, 30]
                            ]]
                        ], "setIsSubscribing", ["subexpr", "action", ["setIsSubscribing"],
                            [],
                            ["loc", [null, [25, 23],
                                [25, 50]
                            ]]
                        ], "toggleHasSubscribedMessage", ["subexpr", "@mut", [
                                ["get", "toggleHasSubscribedMessage", ["loc", [null, [26, 33],
                                    [26, 59]
                                ]]]
                            ],
                            [],
                            []
                        ]],
                        ["loc", [null, [12, 4],
                            [26, 61]
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
                        line: 29,
                        column: 0
                    }
                },
                moduleName: "web-client/components/subscribe/subscribe-button-dynamic/template.hbs"
            },
            isEmpty: !1,
            arity: 0,
            cachedFragment: null,
            hasRendered: !1,
            buildFragment: function(e) {
                var t = e.createDocumentFragment(),
                    n = e.createElement("div");
                e.setAttribute(n, "class", "balloon-wrapper inline-block js-subscribe-button-dynamic");
                var a = e.createTextNode("\n  ");
                e.appendChild(n, a);
                var a = e.createElement("div");
                e.setAttribute(a, "class", "button js-sub-button action primary subscribe-button-pr");
                var r = e.createTextNode("\n    ");
                e.appendChild(a, r);
                var r = e.createElement("span");
                e.setAttribute(r, "class", "subscribe-text js-subscribe-text");
                var l = e.createTextNode("\n      ");
                e.appendChild(r, l);
                var l = e.createComment("");
                e.appendChild(r, l);
                var l = e.createTextNode("\n    ");
                e.appendChild(r, l), e.appendChild(a, r);
                var r = e.createTextNode("\n    ");
                e.appendChild(a, r);
                var r = e.createElement("div");
                e.setAttribute(r, "class", "sub-modal-indicator");
                var l = e.createTextNode("\n      ");
                e.appendChild(r, l);
                var l = e.createElement("span");
                e.setAttribute(l, "class", "arrow"), e.appendChild(r, l);
                var l = e.createTextNode("\n    ");
                e.appendChild(r, l), e.appendChild(a, r);
                var r = e.createTextNode("\n  ");
                e.appendChild(a, r), e.appendChild(n, a);
                var a = e.createTextNode("\n\n");
                e.appendChild(n, a);
                var a = e.createComment("");
                e.appendChild(n, a), e.appendChild(t, n);
                var n = e.createTextNode("\n");
                return e.appendChild(t, n), t
            },
            buildRenderNodes: function(e, t, n) {
                var a = e.childAt(t, [0]),
                    r = e.childAt(a, [1]),
                    l = new Array(3);
                return l[0] = e.createElementMorph(r), l[1] = e.createMorphAt(e.childAt(r, [1]), 1, 1), l[2] = e.createMorphAt(a, 3, 3), l
            },
            statements: [
                ["element", "action", ["toggle"],
                    [],
                    ["loc", [null, [2, 71],
                        [2, 90]
                    ]]
                ],
                ["content", "subscribeToText", ["loc", [null, [4, 6],
                    [4, 25]
                ]]],
                ["block", "if", [
                        ["get", "isMenuOpen", ["loc", [null, [11, 8],
                            [11, 18]
                        ]]]
                    ],
                    [], 0, null, ["loc", [null, [11, 2],
                        [27, 9]
                    ]]
                ]
            ],
            locals: [],
            templates: [e]
        }
    }())
}), define("web-client/components/subscribe/subscribe-button/component", ["exports", "ember-component", "web-client/models/ticket", "ember-computed", "ember-service/inject"], function(e, t, n, a, r) {
    e.default = t.default.extend({
        tagName: "span",
        session: (0, r.default)(),
        geo: (0, r.default)("premium-geo"),
        experiments: (0, r.default)(),
        campaign: "below_video_subscribe_button",
        isMenuOpen: !1,
        hasMessage: !1,
        shouldSeeRedesign: a.default.readOnly("experiments.shouldSeeRedesign"),
        showPrimeContent: a.default.alias("geo.showPrimeContent"),
        isSubscribed: (0, a.default)("channel.isSubscribed.isSubscribed", "channel.isSubscribed.isLoading", "channel.id", function() {
            var e = this.get("session"),
                t = e.isAuthenticated;
            if ("undefined" == typeof this.get("channel.isSubscribed.isSubscribed") && t && (this.set("channel.isSubscribed", n.default.find("user", {
                    channel: this.get("channel.id")
                })), this.get("channel.isSubscribed.isLoaded") || this.get("channel.isSubscribed").load()), !this.get("channel.isSubscribed.isLoading")) return !!this.get("channel.isSubscribed.isSubscribed")
        }),
        shouldRender: (0, a.default)("price", "isSubscribed", function() {
            return this.get("price") && void 0 !== this.get("isSubscribed")
        }),
        subscribedToText: (0, a.default)("named", "channel.display_name", function() {
            var e = i18n("Subscribed to"),
                t = this.get("channel.display_name");
            return this.get("named") ? e + " " + t : i18n("Subscribed")
        }),
        isEnabledTwitchPrime: (0, a.default)("isEnabled", function() {
            return this.get("isEnabled")("twitchPrime")
        }),
        actions: {
            toggleHasSubscribedMessage: function() {
                this.toggleProperty("hasMessage")
            }
        }
    })
}), define("web-client/components/subscribe/subscribe-button/template", ["exports"], function(e) {
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
                                    line: 2,
                                    column: 2
                                },
                                end: {
                                    line: 6,
                                    column: 2
                                }
                            },
                            moduleName: "web-client/components/subscribe/subscribe-button/template.hbs"
                        },
                        isEmpty: !1,
                        arity: 0,
                        cachedFragment: null,
                        hasRendered: !1,
                        buildFragment: function(e) {
                            var t = e.createDocumentFragment(),
                                n = e.createTextNode("    ");
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
                            ["inline", "subscribe-button-subscribed", [],
                                ["subscribedToText", ["subexpr", "@mut", [
                                        ["get", "subscribedToText", ["loc", [null, [4, 23],
                                            [4, 39]
                                        ]]]
                                    ],
                                    [],
                                    []
                                ], "hasMessage", ["subexpr", "@mut", [
                                        ["get", "hasMessage", ["loc", [null, [5, 17],
                                            [5, 27]
                                        ]]]
                                    ],
                                    [],
                                    []
                                ]],
                                ["loc", [null, [3, 4],
                                    [5, 29]
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
                                            column: 4
                                        },
                                        end: {
                                            line: 18,
                                            column: 4
                                        }
                                    },
                                    moduleName: "web-client/components/subscribe/subscribe-button/template.hbs"
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
                                    ["inline", "subscribe/subscribe-button-dynamic", [],
                                        ["subscribeToText", ["subexpr", "@mut", [
                                                ["get", "subscribeToText", ["loc", [null, [9, 24],
                                                    [9, 39]
                                                ]]]
                                            ],
                                            [],
                                            []
                                        ], "price", ["subexpr", "@mut", [
                                                ["get", "price", ["loc", [null, [10, 14],
                                                    [10, 19]
                                                ]]]
                                            ],
                                            [],
                                            []
                                        ], "href", ["subexpr", "@mut", [
                                                ["get", "href", ["loc", [null, [11, 13],
                                                    [11, 17]
                                                ]]]
                                            ],
                                            [],
                                            []
                                        ], "channel", ["subexpr", "@mut", [
                                                ["get", "channel", ["loc", [null, [12, 16],
                                                    [12, 23]
                                                ]]]
                                            ],
                                            [],
                                            []
                                        ], "attachment", ["subexpr", "@mut", [
                                                ["get", "attachment", ["loc", [null, [13, 19],
                                                    [13, 29]
                                                ]]]
                                            ],
                                            [],
                                            []
                                        ], "targetAttachment", ["subexpr", "@mut", [
                                                ["get", "targetAttachment", ["loc", [null, [14, 25],
                                                    [14, 41]
                                                ]]]
                                            ],
                                            [],
                                            []
                                        ], "offset", ["subexpr", "@mut", [
                                                ["get", "offset", ["loc", [null, [15, 15],
                                                    [15, 21]
                                                ]]]
                                            ],
                                            [],
                                            []
                                        ], "balloonClassNames", ["subexpr", "@mut", [
                                                ["get", "balloonClassNames", ["loc", [null, [16, 26],
                                                    [16, 43]
                                                ]]]
                                            ],
                                            [],
                                            []
                                        ], "toggleHasSubscribedMessage", ["subexpr", "action", ["toggleHasSubscribedMessage"],
                                            [],
                                            ["loc", [null, [17, 35],
                                                [17, 72]
                                            ]]
                                        ]],
                                        ["loc", [null, [8, 6],
                                            [17, 74]
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
                                            line: 18,
                                            column: 4
                                        },
                                        end: {
                                            line: 23,
                                            column: 4
                                        }
                                    },
                                    moduleName: "web-client/components/subscribe/subscribe-button/template.hbs"
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
                                    ["inline", "subscribe-button-standard", [],
                                        ["subscribeToText", ["subexpr", "@mut", [
                                                ["get", "subscribeToText", ["loc", [null, [20, 24],
                                                    [20, 39]
                                                ]]]
                                            ],
                                            [],
                                            []
                                        ], "price", ["subexpr", "@mut", [
                                                ["get", "price", ["loc", [null, [21, 14],
                                                    [21, 19]
                                                ]]]
                                            ],
                                            [],
                                            []
                                        ], "href", ["subexpr", "@mut", [
                                                ["get", "href", ["loc", [null, [22, 13],
                                                    [22, 17]
                                                ]]]
                                            ],
                                            [],
                                            []
                                        ]],
                                        ["loc", [null, [19, 6],
                                            [22, 19]
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
                                    line: 6,
                                    column: 2
                                },
                                end: {
                                    line: 24,
                                    column: 2
                                }
                            },
                            moduleName: "web-client/components/subscribe/subscribe-button/template.hbs"
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
                                    ["get", "showPrimeContent", ["loc", [null, [7, 10],
                                        [7, 26]
                                    ]]]
                                ],
                                [], 0, 1, ["loc", [null, [7, 4],
                                    [23, 11]
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
                            line: 25,
                            column: 0
                        }
                    },
                    moduleName: "web-client/components/subscribe/subscribe-button/template.hbs"
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
                            ["get", "isSubscribed", ["loc", [null, [2, 8],
                                [2, 20]
                            ]]]
                        ],
                        [], 0, 1, ["loc", [null, [2, 2],
                            [24, 9]
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
                        line: 26,
                        column: 0
                    }
                },
                moduleName: "web-client/components/subscribe/subscribe-button/template.hbs"
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
                        ["get", "shouldRender", ["loc", [null, [1, 6],
                            [1, 18]
                        ]]]
                    ],
                    [], 0, null, ["loc", [null, [1, 0],
                        [25, 7]
                    ]]
                ]
            ],
            locals: [],
            templates: [e]
        }
    }())
}), define("web-client/components/subscribe/subscribed-message/component", ["exports", "ember-component"], function(e, t) {
    e.default = t.default.extend({
        tagName: "",
        hasMessage: !1
    })
}), define("web-client/components/subscribe/subscribed-message/template", ["exports"], function(e) {
    e.default = Ember.HTMLBars.template(function() {
        var e = function() {
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
                            line: 5,
                            column: 0
                        }
                    },
                    moduleName: "web-client/components/subscribe/subscribed-message/template.hbs"
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
                    e.setAttribute(n, "class", "balloon balloon--fancy balloon--purple balloon--down balloon--center show"), e.setAttribute(n, "data-test-subscribed-message", "");
                    var a = e.createTextNode("\n    ");
                    e.appendChild(n, a);
                    var a = e.createComment("");
                    e.appendChild(n, a);
                    var a = e.createTextNode("\n  ");
                    e.appendChild(n, a), e.appendChild(t, n);
                    var n = e.createTextNode("\n");
                    return e.appendChild(t, n), t
                },
                buildRenderNodes: function(e, t, n) {
                    var a = new Array(1);
                    return a[0] = e.createMorphAt(e.childAt(t, [1]), 1, 1), a
                },
                statements: [
                    ["inline", "i18n", ["Refresh to fully activate your subscription"],
                        [],
                        ["loc", [null, [3, 4],
                            [3, 58]
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
                        line: 6,
                        column: 0
                    }
                },
                moduleName: "web-client/components/subscribe/subscribed-message/template.hbs"
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
                        ["get", "hasMessage", ["loc", [null, [1, 6],
                            [1, 16]
                        ]]]
                    ],
                    [], 0, null, ["loc", [null, [1, 0],
                        [5, 7]
                    ]]
                ]
            ],
            locals: [],
            templates: [e]
        }
    }())
}), define("web-client/components/subscribe/subscription-button-modal/component", ["exports", "ember-computed", "ember-tether/components/ember-tether", "ember-service/inject", "web-client/utilities/cdn-url", "web-client/utilities/urls/prime-urls"], function(e, t, n, a, r, l) {
    e.default = n.default.extend({
        classNames: ["subscription-modal__balloon", "balloon", "balloon--no-padding"],
        api: (0, a.default)(),
        notify: (0, a.default)(),
        channel: void 0,
        target: t.default.readOnly("tetherId"),
        attachment: "bottom left",
        targetAttachment: "top left",
        offset: "0 0",
        spinnerImage: (0, t.default)(function() {
            return (0, r.default)("images/spinner.gif")
        }),
        click: function(e) {
            e.stopPropagation()
        },
        primeSubTrialHref: (0, t.default)("channel", "window.location.pathname", function() {
            var e = btoa(window.location.pathname.substring(1));
            return l.SUB_BUTTON_URL + "&redirectRoute=" + e
        }),
        primeSubLinkHref: (0, t.default)("channel", "window.location.pathname", function() {
            var e = btoa(window.location.pathname.substring(1));
            return l.SUB_BUTTON_LINK_URL + "&redirectRoute=" + e
        }),
        actions: {
            close: function() {
                this.get("toggle")()
            },
            samusSpendCredit: function(e) {
                var t = this;
                this.get("setIsSubscribing")(!0), this.set("shouldRenderUseCredit", !1), this.get("api").request("post", "/api/premium/credit/spend", {
                    channel_id: e.id
                }).then(function() {
                    t.isDestroyed || (t.get("toggleHasSubscribedMessage")(), e.set("isSubscribed.isSubscribed", !0))
                }).catch(function(e) {
                    if (!t.isDestroyed) {
                        if (e.status && e.status >= 400) return void t.get("notify").error(i18n("Sorry, there was a problem spending your Prime credit."));
                        throw e
                    }
                }).finally(function() {
                    t.isDestroyed || t.get("setIsSubscribing")(!1)
                })
            }
        }
    })
}), define("web-client/components/subscribe/subscription-button-modal/template", ["exports"], function(e) {
    e.default = Ember.HTMLBars.template(function() {
        var e = function() {
                var e = function() {
                        var e = function() {
                                return {
                                    meta: {
                                        fragmentReason: !1,
                                        revision: "Ember@2.4.4",
                                        loc: {
                                            source: null,
                                            start: {
                                                line: 39,
                                                column: 8
                                            },
                                            end: {
                                                line: 43,
                                                column: 8
                                            }
                                        },
                                        moduleName: "web-client/components/subscribe/subscription-button-modal/template.hbs"
                                    },
                                    isEmpty: !1,
                                    arity: 0,
                                    cachedFragment: null,
                                    hasRendered: !1,
                                    buildFragment: function(e) {
                                        var t = e.createDocumentFragment(),
                                            n = e.createTextNode("          ");
                                        e.appendChild(t, n);
                                        var n = e.createElement("button");
                                        e.setAttribute(n, "class", "button"), e.setAttribute(n, "data-samus-subscribe-text", "");
                                        var a = e.createTextNode("\n            ");
                                        e.appendChild(n, a);
                                        var a = e.createComment("");
                                        e.appendChild(n, a);
                                        var a = e.createTextNode("\n          ");
                                        e.appendChild(n, a), e.appendChild(t, n);
                                        var n = e.createTextNode("\n");
                                        return e.appendChild(t, n), t
                                    },
                                    buildRenderNodes: function(e, t, n) {
                                        var a = e.childAt(t, [1]),
                                            r = new Array(2);
                                        return r[0] = e.createElementMorph(a), r[1] = e.createMorphAt(a, 1, 1), r
                                    },
                                    statements: [
                                        ["element", "action", ["samusSpendCredit", ["get", "channel", ["loc", [null, [40, 61],
                                                [40, 68]
                                            ]]]],
                                            [],
                                            ["loc", [null, [40, 33],
                                                [40, 70]
                                            ]]
                                        ],
                                        ["inline", "i18n", ["Subscribe Free"],
                                            [],
                                            ["loc", [null, [41, 12],
                                                [41, 37]
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
                                                line: 43,
                                                column: 8
                                            },
                                            end: {
                                                line: 47,
                                                column: 8
                                            }
                                        },
                                        moduleName: "web-client/components/subscribe/subscription-button-modal/template.hbs"
                                    },
                                    isEmpty: !1,
                                    arity: 0,
                                    cachedFragment: null,
                                    hasRendered: !1,
                                    buildFragment: function(e) {
                                        var t = e.createDocumentFragment(),
                                            n = e.createTextNode("          ");
                                        e.appendChild(t, n);
                                        var n = e.createElement("button");
                                        e.setAttribute(n, "class", "button button--disabled no-credit js-samus-no-credit-text");
                                        var a = e.createTextNode("\n            ");
                                        e.appendChild(n, a);
                                        var a = e.createComment("");
                                        e.appendChild(n, a);
                                        var a = e.createTextNode("\n          ");
                                        e.appendChild(n, a), e.appendChild(t, n);
                                        var n = e.createTextNode("\n");
                                        return e.appendChild(t, n), t
                                    },
                                    buildRenderNodes: function(e, t, n) {
                                        var a = new Array(1);
                                        return a[0] = e.createMorphAt(e.childAt(t, [1]), 1, 1), a
                                    },
                                    statements: [
                                        ["inline", "i18n", ["Not yet!"],
                                            [],
                                            ["loc", [null, [45, 12],
                                                [45, 31]
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
                                        line: 38,
                                        column: 6
                                    },
                                    end: {
                                        line: 48,
                                        column: 6
                                    }
                                },
                                moduleName: "web-client/components/subscribe/subscription-button-modal/template.hbs"
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
                                        ["get", "hasSubCredit", ["loc", [null, [39, 14],
                                            [39, 26]
                                        ]]]
                                    ],
                                    [], 0, 1, ["loc", [null, [39, 8],
                                        [47, 15]
                                    ]]
                                ]
                            ],
                            locals: [],
                            templates: [e, t]
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
                                        line: 48,
                                        column: 6
                                    },
                                    end: {
                                        line: 50,
                                        column: 6
                                    }
                                },
                                moduleName: "web-client/components/subscribe/subscription-button-modal/template.hbs"
                            },
                            isEmpty: !1,
                            arity: 0,
                            cachedFragment: null,
                            hasRendered: !1,
                            buildFragment: function(e) {
                                var t = e.createDocumentFragment(),
                                    n = e.createTextNode("        ");
                                e.appendChild(t, n);
                                var n = e.createElement("img");
                                e.setAttribute(n, "class", "loading js-spinner"), e.appendChild(t, n);
                                var n = e.createTextNode("\n");
                                return e.appendChild(t, n), t
                            },
                            buildRenderNodes: function(e, t, n) {
                                var a = e.childAt(t, [1]),
                                    r = new Array(1);
                                return r[0] = e.createAttrMorph(a, "src"), r
                            },
                            statements: [
                                ["attribute", "src", ["get", "spinnerImage", ["loc", [null, [49, 19],
                                    [49, 31]
                                ]]]]
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
                                line: 37,
                                column: 4
                            },
                            end: {
                                line: 51,
                                column: 4
                            }
                        },
                        moduleName: "web-client/components/subscribe/subscription-button-modal/template.hbs"
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
                                ["subexpr", "not", [
                                        ["get", "isSubscribing", ["loc", [null, [38, 17],
                                            [38, 30]
                                        ]]]
                                    ],
                                    [],
                                    ["loc", [null, [38, 12],
                                        [38, 31]
                                    ]]
                                ]
                            ],
                            [], 0, 1, ["loc", [null, [38, 6],
                                [50, 13]
                            ]]
                        ]
                    ],
                    locals: [],
                    templates: [e, t]
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
                                line: 51,
                                column: 4
                            },
                            end: {
                                line: 55,
                                column: 4
                            }
                        },
                        moduleName: "web-client/components/subscribe/subscription-button-modal/template.hbs"
                    },
                    isEmpty: !1,
                    arity: 0,
                    cachedFragment: null,
                    hasRendered: !1,
                    buildFragment: function(e) {
                        var t = e.createDocumentFragment(),
                            n = e.createTextNode("      ");
                        e.appendChild(t, n);
                        var n = e.createElement("a");
                        e.setAttribute(n, "class", "button primary js-samus-trial-text"), e.setAttribute(n, "target", "_blank");
                        var a = e.createTextNode("\n        ");
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
                            r = new Array(2);
                        return r[0] = e.createAttrMorph(a, "href"), r[1] = e.createMorphAt(a, 1, 1), r
                    },
                    statements: [
                        ["attribute", "href", ["concat", [
                            ["get", "primeSubTrialHref", ["loc", [null, [52, 17],
                                [52, 34]
                            ]]]
                        ]]],
                        ["inline", "i18n", ["Start 30-day Free Trial"],
                            [],
                            ["loc", [null, [53, 8],
                                [53, 42]
                            ]]
                        ]
                    ],
                    locals: [],
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
                                line: 58,
                                column: 6
                            },
                            end: {
                                line: 62,
                                column: 6
                            }
                        },
                        moduleName: "web-client/components/subscribe/subscription-button-modal/template.hbs"
                    },
                    isEmpty: !1,
                    arity: 0,
                    cachedFragment: null,
                    hasRendered: !1,
                    buildFragment: function(e) {
                        var t = e.createDocumentFragment(),
                            n = e.createTextNode("        ");
                        e.appendChild(t, n);
                        var n = e.createElement("p"),
                            a = e.createElement("strong"),
                            r = e.createComment("");
                        e.appendChild(a, r), e.appendChild(n, a), e.appendChild(t, n);
                        var n = e.createTextNode("\n        ");
                        e.appendChild(t, n);
                        var n = e.createElement("p");
                        e.setAttribute(n, "class", "light");
                        var a = e.createElement("a");
                        e.setAttribute(a, "href", "https://help.twitch.tv/customer/portal/articles/2574674-how-to-use-twitch-prime-free-subscriptions");
                        var r = e.createComment("");
                        e.appendChild(a, r), e.appendChild(n, a), e.appendChild(t, n);
                        var n = e.createTextNode("\n");
                        return e.appendChild(t, n), t
                    },
                    buildRenderNodes: function(e, t, n) {
                        var a = new Array(2);
                        return a[0] = e.createMorphAt(e.childAt(t, [1, 0]), 0, 0), a[1] = e.createMorphAt(e.childAt(t, [3, 0]), 0, 0), a
                    },
                    statements: [
                        ["inline", "i18n", ["Use your free channel subscription to directly support your favorite streamer."],
                            [],
                            ["loc", [null, [60, 19],
                                [60, 108]
                            ]]
                        ],
                        ["inline", "i18n", ["Learn more about your free sub"],
                            [],
                            ["loc", [null, [61, 134],
                                [61, 175]
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
                                line: 62,
                                column: 6
                            },
                            end: {
                                line: 72,
                                column: 6
                            }
                        },
                        moduleName: "web-client/components/subscribe/subscription-button-modal/template.hbs"
                    },
                    isEmpty: !1,
                    arity: 0,
                    cachedFragment: null,
                    hasRendered: !1,
                    buildFragment: function(e) {
                        var t = e.createDocumentFragment(),
                            n = e.createTextNode("        ");
                        e.appendChild(t, n);
                        var n = e.createElement("p"),
                            a = e.createTextNode("\n          ");
                        e.appendChild(n, a);
                        var a = e.createElement("strong"),
                            r = e.createComment("");
                        e.appendChild(a, r), e.appendChild(n, a);
                        var a = e.createTextNode(" ");
                        e.appendChild(n, a);
                        var a = e.createComment("");
                        e.appendChild(n, a);
                        var a = e.createTextNode("\n        ");
                        e.appendChild(n, a), e.appendChild(t, n);
                        var n = e.createTextNode("\n        ");
                        e.appendChild(t, n);
                        var n = e.createElement("p"),
                            a = e.createTextNode("\n          ");
                        e.appendChild(n, a);
                        var a = e.createComment("");
                        e.appendChild(n, a);
                        var a = e.createTextNode("\n          ");
                        e.appendChild(n, a);
                        var a = e.createElement("a");
                        e.setAttribute(a, "target", "_blank");
                        var r = e.createTextNode("\n            ");
                        e.appendChild(a, r);
                        var r = e.createComment("");
                        e.appendChild(a, r);
                        var r = e.createTextNode("\n          ");
                        e.appendChild(a, r), e.appendChild(n, a);
                        var a = e.createTextNode("\n        ");
                        e.appendChild(n, a), e.appendChild(t, n);
                        var n = e.createTextNode("\n");
                        return e.appendChild(t, n), t
                    },
                    buildRenderNodes: function(e, t, n) {
                        var a = e.childAt(t, [1]),
                            r = e.childAt(t, [3]),
                            l = e.childAt(r, [3]),
                            i = new Array(5);
                        return i[0] = e.createMorphAt(e.childAt(a, [1]), 0, 0), i[1] = e.createMorphAt(a, 3, 3), i[2] = e.createMorphAt(r, 1, 1), i[3] = e.createAttrMorph(l, "href"), i[4] = e.createMorphAt(l, 1, 1), i
                    },
                    statements: [
                        ["inline", "i18n", ["Support your favorite streamer"],
                            [],
                            ["loc", [null, [64, 18],
                                [64, 59]
                            ]]
                        ],
                        ["inline", "i18n", [", plus get free game loot every month, ad-free viewing and loads more with an Amazon Prime membership."],
                            [],
                            ["loc", [null, [64, 69],
                                [64, 182]
                            ]]
                        ],
                        ["inline", "i18n", ["Already an Amazon Prime member? You get Twitch Prime at no additional cost, just"],
                            [],
                            ["loc", [null, [67, 10],
                                [67, 101]
                            ]]
                        ],
                        ["attribute", "href", ["concat", [
                            ["get", "primeSubLinkHref", ["loc", [null, [68, 21],
                                [68, 37]
                            ]]]
                        ]]],
                        ["inline", "i18n", ["connect your Twitch account"],
                            [],
                            ["loc", [null, [69, 12],
                                [69, 50]
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
                        line: 76,
                        column: 0
                    }
                },
                moduleName: "web-client/components/subscribe/subscription-button-modal/template.hbs"
            },
            isEmpty: !1,
            arity: 0,
            cachedFragment: null,
            hasRendered: !1,
            buildFragment: function(e) {
                var t = e.createDocumentFragment(),
                    n = e.createElement("div");
                e.setAttribute(n, "class", "subscription-modal js-subscribtion-modal");
                var a = e.createTextNode("\n  ");
                e.appendChild(n, a);
                var a = e.createElement("div");
                e.setAttribute(a, "class", "subscription-modal__bar");
                var r = e.createTextNode("\n    ");
                e.appendChild(a, r);
                var r = e.createElement("img");
                e.setAttribute(r, "class", "subscription-modal__logo"), e.appendChild(a, r);
                var r = e.createTextNode("\n    ");
                e.appendChild(a, r);
                var r = e.createElement("span");
                e.setAttribute(r, "class", "subscription-modal__title");
                var l = e.createTextNode("\n      ");
                e.appendChild(r, l);
                var l = e.createComment("");
                e.appendChild(r, l);
                var l = e.createTextNode(" ");
                e.appendChild(r, l);
                var l = e.createComment("");
                e.appendChild(r, l);
                var l = e.createTextNode("\n    ");
                e.appendChild(r, l), e.appendChild(a, r);
                var r = e.createTextNode("\n    ");
                e.appendChild(a, r);
                var r = e.createElement("span");
                e.setAttribute(r, "style", "float:right;margin-top:2px;cursor:pointer;");
                var l = e.createTextNode("\n      ");
                e.appendChild(r, l);
                var l = e.createComment("");
                e.appendChild(r, l);
                var l = e.createTextNode("\n    ");
                e.appendChild(r, l), e.appendChild(a, r);
                var r = e.createTextNode("\n  ");
                e.appendChild(a, r), e.appendChild(n, a);
                var a = e.createTextNode("\n\n  ");
                e.appendChild(n, a);
                var a = e.createElement("div");
                e.setAttribute(a, "class", "subscription-modal__left");
                var r = e.createTextNode("\n    ");
                e.appendChild(a, r);
                var r = e.createElement("div");
                e.setAttribute(r, "class", "header-row");
                var l = e.createTextNode("\n      ");
                e.appendChild(r, l);
                var l = e.createElement("span");
                e.setAttribute(l, "class", "subscription-modal__sub-header js-subscribe-price");
                var i = e.createTextNode("\n        ");
                e.appendChild(l, i);
                var i = e.createComment("");
                e.appendChild(l, i);
                var i = e.createTextNode(" / ");
                e.appendChild(l, i);
                var i = e.createComment("");
                e.appendChild(l, i);
                var i = e.createTextNode("\n      ");
                e.appendChild(l, i), e.appendChild(r, l);
                var l = e.createTextNode("\n    ");
                e.appendChild(r, l), e.appendChild(a, r);
                var r = e.createTextNode("\n    ");
                e.appendChild(a, r);
                var r = e.createElement("a");
                e.setAttribute(r, "class", "button primary"), e.setAttribute(r, "target", "_blank");
                var l = e.createTextNode("\n      ");
                e.appendChild(r, l);
                var l = e.createComment("");
                e.appendChild(r, l);
                var l = e.createTextNode("\n    ");
                e.appendChild(r, l), e.appendChild(a, r);
                var r = e.createTextNode("\n\n    ");
                e.appendChild(a, r);
                var r = e.createElement("div");
                e.setAttribute(r, "class", "cards recurly");
                var l = e.createTextNode("\n      ");
                e.appendChild(r, l);
                var l = e.createElement("span");
                e.setAttribute(l, "class", "card american_express");
                var i = e.createComment("");
                e.appendChild(l, i), e.appendChild(r, l);
                var l = e.createTextNode("\n      ");
                e.appendChild(r, l);
                var l = e.createElement("span");
                e.setAttribute(l, "class", "card discover");
                var i = e.createComment("");
                e.appendChild(l, i), e.appendChild(r, l);
                var l = e.createTextNode("\n      ");
                e.appendChild(r, l);
                var l = e.createElement("span");
                e.setAttribute(l, "class", "card mastercard");
                var i = e.createComment("");
                e.appendChild(l, i), e.appendChild(r, l);
                var l = e.createTextNode("\n      ");
                e.appendChild(r, l);
                var l = e.createElement("span");
                e.setAttribute(l, "class", "card visa");
                var i = e.createComment("");
                e.appendChild(l, i), e.appendChild(r, l);
                var l = e.createTextNode("\n      ");
                e.appendChild(r, l);
                var l = e.createElement("span");
                e.setAttribute(l, "class", "card xsolla_paypal");
                var i = e.createComment("");
                e.appendChild(l, i), e.appendChild(r, l);
                var l = e.createTextNode("\n    ");
                e.appendChild(r, l), e.appendChild(a, r);
                var r = e.createTextNode("\n  ");
                e.appendChild(a, r), e.appendChild(n, a);
                var a = e.createTextNode("\n\n  ");
                e.appendChild(n, a);
                var a = e.createElement("div");
                e.setAttribute(a, "class", "subscription-modal__right");
                var r = e.createTextNode("\n    ");
                e.appendChild(a, r);
                var r = e.createElement("div");
                e.setAttribute(r, "class", "header-row");
                var l = e.createTextNode("\n      ");
                e.appendChild(r, l);
                var l = e.createElement("span");
                e.setAttribute(l, "class", "subscription-modal__sub-header");
                var i = e.createTextNode("\n        ");
                e.appendChild(l, i);
                var i = e.createComment("");
                e.appendChild(l, i);
                var i = e.createTextNode("\n      ");
                e.appendChild(l, i), e.appendChild(r, l);
                var l = e.createTextNode("\n    ");
                e.appendChild(r, l), e.appendChild(a, r);
                var r = e.createTextNode("\n");
                e.appendChild(a, r);
                var r = e.createComment("");
                e.appendChild(a, r);
                var r = e.createTextNode("\n    ");
                e.appendChild(a, r);
                var r = e.createElement("div");
                e.setAttribute(r, "class", "description-text");
                var l = e.createTextNode("\n");
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
                var a = e.childAt(t, [0]),
                    r = e.childAt(a, [1]),
                    l = e.childAt(r, [1]),
                    i = e.childAt(r, [3]),
                    o = e.childAt(r, [5]),
                    c = e.childAt(a, [3]),
                    d = e.childAt(c, [1, 1]),
                    s = e.childAt(c, [3]),
                    p = e.childAt(c, [5]),
                    u = e.childAt(a, [5]),
                    m = new Array(18);
                return m[0] = e.createAttrMorph(l, "src"), m[1] = e.createAttrMorph(l, "alt"), m[2] = e.createMorphAt(i, 1, 1), m[3] = e.createMorphAt(i, 3, 3), m[4] = e.createElementMorph(o), m[5] = e.createMorphAt(o, 1, 1), m[6] = e.createMorphAt(d, 1, 1), m[7] = e.createMorphAt(d, 3, 3), m[8] = e.createAttrMorph(s, "href"), m[9] = e.createMorphAt(s, 1, 1), m[10] = e.createMorphAt(e.childAt(p, [1]), 0, 0), m[11] = e.createMorphAt(e.childAt(p, [3]), 0, 0), m[12] = e.createMorphAt(e.childAt(p, [5]), 0, 0), m[13] = e.createMorphAt(e.childAt(p, [7]), 0, 0), m[14] = e.createMorphAt(e.childAt(p, [9]), 0, 0), m[15] = e.createMorphAt(e.childAt(u, [1, 1]), 1, 1), m[16] = e.createMorphAt(u, 3, 3), m[17] = e.createMorphAt(e.childAt(u, [5]), 1, 1), m
            },
            statements: [
                ["attribute", "src", ["get", "channel.logo", ["loc", [null, [3, 15],
                    [3, 27]
                ]]]],
                ["attribute", "alt", ["get", "channel.name", ["loc", [null, [3, 36],
                    [3, 48]
                ]]]],
                ["inline", "i18n", ["Subscribe to"],
                    [],
                    ["loc", [null, [5, 6],
                        [5, 29]
                    ]]
                ],
                ["content", "channel.id", ["loc", [null, [5, 30],
                    [5, 44]
                ]]],
                ["element", "action", ["close"],
                    [],
                    ["loc", [null, [7, 61],
                        [7, 79]
                    ]]
                ],
                ["inline", "partial", ["svg/close"],
                    [],
                    ["loc", [null, [8, 6],
                        [8, 29]
                    ]]
                ],
                ["content", "price", ["loc", [null, [15, 8],
                    [15, 17]
                ]]],
                ["inline", "i18n", ["Month"],
                    [],
                    ["loc", [null, [15, 20],
                        [15, 36]
                    ]]
                ],
                ["attribute", "href", ["get", "href", ["loc", [null, [18, 14],
                    [18, 18]
                ]]]],
                ["inline", "i18n", ["Checkout"],
                    [],
                    ["loc", [null, [19, 6],
                        [19, 25]
                    ]]
                ],
                ["inline", "i18n", ["American Express"],
                    [],
                    ["loc", [null, [23, 42],
                        [23, 69]
                    ]]
                ],
                ["inline", "i18n", ["Discover"],
                    [],
                    ["loc", [null, [24, 34],
                        [24, 53]
                    ]]
                ],
                ["inline", "i18n", ["MasterCard"],
                    [],
                    ["loc", [null, [25, 36],
                        [25, 57]
                    ]]
                ],
                ["inline", "i18n", ["Visa"],
                    [],
                    ["loc", [null, [26, 30],
                        [26, 45]
                    ]]
                ],
                ["inline", "i18n", ["PayPal"],
                    [],
                    ["loc", [null, [27, 39],
                        [27, 56]
                    ]]
                ],
                ["inline", "i18n", ["Free Channel Sub with Twitch Prime"],
                    [],
                    ["loc", [null, [34, 8],
                        [34, 53]
                    ]]
                ],
                ["block", "if", [
                        ["get", "hasPrime", ["loc", [null, [37, 10],
                            [37, 18]
                        ]]]
                    ],
                    [], 0, 1, ["loc", [null, [37, 4],
                        [55, 11]
                    ]]
                ],
                ["block", "if", [
                        ["get", "hasPrime", ["loc", [null, [58, 12],
                            [58, 20]
                        ]]]
                    ],
                    [], 2, 3, ["loc", [null, [58, 6],
                        [72, 13]
                    ]]
                ]
            ],
            locals: [],
            templates: [e, t, n, a]
        }
    }())
}), define("web-client/models/offer-asset", ["exports", "ember-data/model", "ember-data/attr"], function(e, t, n) {
    e.default = t.default.extend({
        assetType: (0, n.default)("string"),
        location: (0, n.default)("string"),
        location2x: (0, n.default)("string"),
        mediaType: (0, n.default)("string")
    })
}), define("web-client/models/offer", ["exports", "ember-data/attr", "ember-data/model", "ember-data/relationships", "ember-computed"], function(e, t, n, a, r) {
    e.default = n.default.extend({
        offerId: (0, t.default)("string"),
        priority: (0, t.default)("number"),
        offerTitle: (0, t.default)("string"),
        offerDescription: (0, t.default)("string"),
        publisherName: (0, t.default)("string"),
        applicableGame: (0, t.default)("string"),
        contentClaimInstruction: (0, t.default)("string"),
        contentCategories: (0, t.default)(""),
        contentDeliveryMethod: (0, t.default)("string"),
        startTime: (0, t.default)("date"),
        endTime: (0, t.default)("date"),
        icon: (0, a.belongsTo)("offer-asset", {
            async: !1
        }),
        thumbnail: (0, a.belongsTo)("offer-asset", {
            async: !1
        }),
        detail: (0, a.belongsTo)("offer-asset", {
            async: !1
        }),
        categories: (0, r.default)("contentCategories", function() {
            return this.get("contentCategories") ? this.get("contentCategories").join(" ") : ""
        })
    })
}), define("web-client/serializers/offer-asset", ["exports", "web-client/serializers/application"], function(e, t) {
    e.default = t.default.extend({
        keyForAttribute: function(e) {
            return e
        }
    })
}), define("web-client/serializers/offer", ["exports", "web-client/serializers/application"], function(e, t) {
    e.default = t.default.extend({
        keyForAttribute: function(e) {
            return e
        },
        normalizeArrayResponse: function(e, t, a, r, l) {
            var i = n(a);
            return this._super(e, t, i, r, l)
        }
    });
    var n = function(e) {
            var t = {
                data: [],
                included: []
            };
            return e.offers.forEach(function(e) {
                var n = e.offerId,
                    l = {};
                if (Array.isArray(e.assets)) {
                    var i = ["ICON", "THUMBNAIL", "DETAIL"].map(function(t) {
                        return e.assets.find(function(e) {
                            return e.assetType === t
                        })
                    }).filter(function(e) {
                        return !!e
                    }).map(function(e) {
                        return a(e, n)
                    });
                    l = r(i), t.included = t.included.concat(i), delete e.assets
                }
                t.data.push({
                    id: n,
                    relationships: l,
                    type: "offer",
                    attributes: e
                })
            }), t
        },
        a = function(e, t) {
            var n = e.assetType.toLowerCase();
            return {
                type: "offer-asset",
                id: "offer-asset-" + t + "-" + n,
                attributes: e
            }
        },
        r = function(e) {
            var t = {};
            return e.forEach(function(e) {
                t[e.attributes.assetType.toLowerCase()] = {
                    data: {
                        type: "offer-asset",
                        id: e.id
                    }
                }
            }), t
        }
}), define("web-client/services/claim-offer", ["exports", "rsvp", "ember-service", "ember-service/inject"], function(e, t, n, a) {
    var r = t.default.Promise;
    e.default = n.default.extend({
        api: (0, a.default)(),
        notify: (0, a.default)(),
        session: (0, a.default)(),
        tracking: (0, a.default)(),
        claim: function(e) {
            var t = this;
            return new r(function(n, a) {
                var r = t.get("session"),
                    l = r.isAuthenticated,
                    i = r.userData;
                if (!l) return a();
                var o = t._trackingData(i, e);
                t.get("tracking").trackEvent({
                    event: "samus_claim_code_event",
                    data: o
                });
                var c = "/api/premium/offers/" + e + "/claim";
                t.get("api").request("post", c, o).then(function(e) {
                    return n(e)
                }).catch(function(e) {
                    if (e.status && e.status >= 400) {
                        var n = i18n("Sorry, there was an error retrieving your content");
                        return t.get("notify").error(n), a(e)
                    }
                    throw e
                })
            })
        },
        _trackingData: function(e, t) {
            var n = e.id;
            return {
                twitchUserId: n,
                eventType: "click",
                eventResult: "new-claim",
                offerId: t,
                timeStamp: Date.now(),
                metadata: {
                    currentUrl: window.location.toString()
                }
            }
        }
    })
}), define("web-client/services/premium-geo", ["exports", "ember-service", "web-client/utilities/promises", "web-client/utilities/samus/regions", "ember-service/inject", "ember-computed", "rsvp"], function(e, t, n, a, r, l, i) {
    var o = function() {
        function e(e, t) {
            var n = [],
                a = !0,
                r = !1,
                l = void 0;
            try {
                for (var i, o = e[Symbol.iterator](); !(a = (i = o.next()).done) && (n.push(i.value), !t || n.length !== t); a = !0);
            } catch (e) {
                r = !0, l = e
            } finally {
                try {
                    !a && o.return && o.return()
                } finally {
                    if (r) throw l
                }
            }
            return n
        }
        return function(t, n) {
            if (Array.isArray(t)) return t;
            if (Symbol.iterator in Object(t)) return e(t, n);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }();
    e.default = t.default.extend({
        api: (0, r.default)(),
        login: (0, r.default)(),
        primeGeos: a.PRIME_GEOS,
        isPrimeGeo: null,
        hasPrime: null,
        isLoggedIn: l.default.readOnly("login.isLoggedIn"),
        init: function() {
            var e = this;
            this._super.apply(this, arguments);
            var t = this.getGeo();
            if (this.get("isLoggedIn")) {
                var n = this.get("login").fetchUserData();
                i.default.all([t, n]).then(function(t) {
                    var n = o(t, 2),
                        a = n[0],
                        r = n[1];
                    e.isDestroyed || (e.set("isPrimeGeo", e.isGeoPrimeRegion(a.geo)), e.set("hasPrime", r.has_premium))
                })
            } else t.then(function(t) {
                e.isDestroyed || e.set("isPrimeGeo", e.isGeoPrimeRegion(t.geo))
            })
        },
        showPrimeContent: (0, l.default)("isPrimeGeo", "hasPrime", "isLoggedIn", function() {
            return this.get("isPrimeGeo") || this.get("hasPrime") && this.get("isLoggedIn")
        }),
        getGeo: function() {
            return (0, n.wrap)(function() {
                return Twitch.geo
            }, "GeoService#getGeo")
        },
        isGeoPrimeRegion: function(e) {
            return this.get("primeGeos").includes(e)
        }
    })
}), define("web-client/templates/pr/welcome", ["exports"], function(e) {
    e.default = Ember.HTMLBars.template(function() {
        var e = function() {
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
                            line: 3,
                            column: 0
                        }
                    },
                    moduleName: "web-client/templates/pr/welcome.hbs"
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
                    ["content", "pr/welcome-content", ["loc", [null, [2, 2],
                        [2, 26]
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
                        line: 4,
                        column: 0
                    }
                },
                moduleName: "web-client/templates/pr/welcome.hbs"
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
                        ["subexpr", "is-feature-loaded", ["premium"],
                            [],
                            ["loc", [null, [1, 6],
                                [1, 35]
                            ]]
                        ]
                    ],
                    [], 0, null, ["loc", [null, [1, 0],
                        [3, 7]
                    ]]
                ]
            ],
            locals: [],
            templates: [e]
        }
    }())
}), define("web-client/templates/svg/samus/gp-crown", ["exports"], function(e) {
    e.default = Ember.HTMLBars.template(function() {
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
                        line: 4,
                        column: 0
                    }
                },
                moduleName: "web-client/templates/svg/samus/gp-crown.hbs"
            },
            isEmpty: !1,
            arity: 0,
            cachedFragment: null,
            hasRendered: !1,
            buildFragment: function(e) {
                var t = e.createDocumentFragment();
                e.setNamespace("http://www.w3.org/2000/svg");
                var n = e.createElement("svg");
                e.setAttribute(n, "class", "svg-gp_crown"), e.setAttribute(n, "xmlns", "http://www.w3.org/2000/svg"), e.setAttribute(n, "viewBox", "36 0 83 50");
                var a = e.createTextNode("\n  ");
                e.appendChild(n, a);
                var a = e.createElement("path");
                e.setAttribute(a, "d", "M112.9 5.5L96.4 21.9 74.5 0 52.6 21.9 36.1 5.5v43.8h76.8V5.5"), e.appendChild(n, a);
                var a = e.createTextNode("\n");
                e.appendChild(n, a), e.appendChild(t, n);
                var n = e.createTextNode("\n");
                return e.appendChild(t, n), t
            },
            buildRenderNodes: function() {
                return []
            },
            statements: [],
            locals: [],
            templates: []
        }
    }())
}), define("web-client/templates/svg/samus/logo-tp-horizontal", ["exports"], function(e) {
    e.default = Ember.HTMLBars.template(function() {
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
                        line: 5,
                        column: 0
                    }
                },
                moduleName: "web-client/templates/svg/samus/logo-tp-horizontal.hbs"
            },
            isEmpty: !1,
            arity: 0,
            cachedFragment: null,
            hasRendered: !1,
            buildFragment: function(e) {
                var t = e.createDocumentFragment();
                e.setNamespace("http://www.w3.org/2000/svg");
                var n = e.createElement("svg");
                e.setAttribute(n, "xmlns", "http://www.w3.org/2000/svg"), e.setAttribute(n, "viewBox", "0 0 539.99 100.22");
                var a = e.createTextNode("\n  ");
                e.appendChild(n, a);
                var a = e.createElement("path");
                e.setAttribute(a, "fill", "#FFF"), e.setAttribute(a, "d", "M537 38c-2.5-4-7.3-8.5-16.6-8.5-9.4 0-23 8.3-24 9a1 1 0 0 1-.8.3 1 1 0 0 1-.7-.6 12.4 12.4 0 0 0-2.6-3.5c-3-3-6.4-4.2-11.3-4.2-3.2 0-9.2 2.4-9.8 2.8a1.3 1.3 0 0 1-1.2 0c-2.5-1.8-9.8-2.8-13.8-2.8a25.3 25.3 0 0 0-9.8 2h-.2a1 1 0 0 1-1 0 6.5 6.5 0 0 0-4.3-1.7 17 17 0 0 0-5 .8 24.6 24.6 0 0 1-3.2.7l-4.4.4a1 1 0 0 1-1-.4 1 1 0 0 1 0-1 14.6 14.6 0 0 0 .6-2 11 11 0 0 0-2-11 12 12 0 0 0-9.3-4 17 17 0 0 0-9.5 3c-.8.4-2.3 1.4-4.2 2.8-5.4 3.8-13.5 9.4-17.5 11.3-1.3.6-1.7-.8-3.7-1s-5 1-7.4 1.4l-3.8.5a1 1 0 0 1-1.2-.8 17 17 0 0 0-2.8-6c-4.8-7-12.8-8.6-18.6-8.8l-12.8-.2c-8 0-19.2.5-19.2.5l-16 14-15.4-15.4h-18.8V0h-32.6l-15.4 15.4h-17L192 24v-8.6h-15.3V0h-58.2v15.4H48L32.6 0H0v68.5L15.4 84 41 99.2h22.4V96l8.6 3.3h41.5l7.4-8.6 1 8.6h27l.6-8.6 9.8 8.6h24l1.7-8.6 8.7 8.6H221l8.7-8.6v8.6H245l12-8.6v8.6h51.2c5-3 10.4-6.3 13.2-8.3a1 1 0 0 1 1.5.3 1 1 0 0 1 0 .8c-.5 3-2 7.3-2 7.3h25.7l5.8-4a1.2 1.2 0 0 1 1.5 0 .4.4 0 0 1 0 .4l1.5 3.6h89.2l6-4.2a2.5 2.5 0 0 1 .8-.3 2 2 0 0 1 .8.2 28.3 28.3 0 0 0 8.6 4.4h.2a27.3 27.3 0 0 0 7.5.8c4.5 0 30.4-9 39-12.4l6.7-2.6a107.5 107.5 0 0 0 16-8 4 4 0 0 0 2-4c0-1-.7-3-1.4-6.6v-.4a1 1 0 0 1 .6-1c2.2-1 5.2-3.2 7-8.3 2.3-7 1.8-13.5-1.6-19zM41.2 41H25.7v17.2H41V77H19L7 65V7h18.7v15.3H41l.2 18.8zm77 24l-12 12H48V22.4h18.8v36h7v-36h18.7v36h7v-36H118V65zM144 77h-19V22.4h18.8V77zm0-61.5h-19V7h18.8v8.5zm41 25.7h-15.4v17H185v19h-22.3l-12-12V6.8h18.8v15.3H185v19zm48 0h-22.3v17H233v19h-29l-12-12V34l12-12h29v19zm60 36h-19v-36h-15.3v36h-19V7h19v15.3H281l12 12v43zm113.5-49.5a9.7 9.7 0 0 1 4-5 10.8 10.8 0 0 1 6-1.8 5.8 5.8 0 0 1 4.6 1.6 4.3 4.3 0 0 1 .7 4.6c-1.5 4.6-4.8 6.8-10 6.8-2.2 0-3.7-.5-4.7-1.6s-1.2-2.7-.5-4.7zm-55.3 33a26.6 26.6 0 0 1-17.7 6.5c-1 0-2.8 0-5-.2s-4 0-5 0a3 3 0 0 0-3 2 53.3 53.3 0 0 0-1.6 5.7l-.7 2.6h-15.8l4-11c2-6.5 3.8-11 4.8-14 3-9 5.7-18.2 8.2-28l.2-.5a1 1 0 0 1 1-.4c2.2-.3 7-.4 14.5-.4 4 0 8 0 12.5.2 6.3.2 10.8 2.2 13.4 6s3 9 1 15.5a38.7 38.7 0 0 1-10.8 16zm36.5-8h-2.3A10.6 10.6 0 0 0 380 54q-2 1-3 4.7-.7 1.6-1.6 4.8l-.2.7-1.8 5.5a34.5 34.5 0 0 0-1 3.6l-1 3.5a1 1 0 0 1-.7.6h-13-.4V77l3.4-10 1.6-4.8L364 57c2.3-6.7 3.5-12.2 3.7-16.5a1 1 0 0 1 0-.5.8.8 0 0 1 .5-.4l7-1c4.2-.8 6.3-1 7-1.3a5.7 5.7 0 0 1-.3 1.8c-.5 1.8-.8 3.3.2 3.6a.8.8 0 0 0 .8-.2 35 35 0 0 1 4-2 19.2 19.2 0 0 1 8-2 3 3 0 0 1 1.4.2A35.4 35.4 0 0 1 395 42l-1.5 3.4-1 3.3-.4 1.4-.5 2a1.5 1.5 0 0 1-1.7 1 4 4 0 0 0-2-.2zm22.4 5.8l-2.8 9.2c-1.5 4.7-2.3 7.3-3 9a.6.6 0 0 1-.5.6h-13.4l.2-.8 3-8.8c1.4-3.6 2.6-6.8 3.2-8.8a188.2 188.2 0 0 0 5.5-19.2l.2-.8s0-.4.7-.4c1.2 0 2.4 0 3.5.2a21.7 21.7 0 0 0 3.6.2c1 0 2.2 0 4-.2l3.5-.2s0 .3-.3.6c-2.3 5.5-4.7 11.8-7 19.3zM489.8 47l-2.4 6.7c-1 3-2 5.2-2.4 6.7-.7 1.7-1.5 4.4-2.6 8l-2.5 8a1.6 1.6 0 0 1-1 1h-13a2 2 0 0 1 0-1 49.6 49.6 0 0 1 1.7-4.8l.4-1c1-2.6 1.8-4.6 2.2-6q2.5-7.4 3.3-10.4c.5-2 .5-3.5-.3-4.5a4.2 4.2 0 0 0-3.5-1.4A8.3 8.3 0 0 0 465 50a9 9 0 0 0-3.8 4l-3.6 10.5-1.8 6-1.8 6a1 1 0 0 1-1 1h-13a1.2 1.2 0 0 1 .2-1l2-5.8c1-2.2 1.8-4.5 2.3-6l1.3-4 .2-.8 1.5-4.8c1-2.6 1-4.4 0-5.6a3.4 3.4 0 0 0-3.2-1.3 10.4 10.4 0 0 0-4.8 1.5 8.3 8.3 0 0 0-3.8 3.6l-3.2 9.7-1.8 5.5c-1 3.3-2 5.8-2.5 7.7a3 3 0 0 1-.5 1 .8.8 0 0 1-.5 0H414a4 4 0 0 1 .3-.6l.3-.8 3.2-9.2.5-1.4 3-8.7a138 138 0 0 0 4.2-15.6v-.3a4.3 4.3 0 0 1 0-.5 1.2 1.2 0 0 1 .6-.5 19.7 19.7 0 0 1 3.6-.6c2.3 0 3.5-.2 4-.3l3.6-1a16 16 0 0 1 3-.5 11.8 11.8 0 0 1-.4 2c-1 2.7-.8 3-.6 3.5a.7.7 0 0 0 .6.3h.2a5.4 5.4 0 0 0 1.3-.7 63 63 0 0 1 7.2-4 18 18 0 0 1 7.2-1.5 10.3 10.3 0 0 1 6 1.6 5.2 5.2 0 0 1 2.2 4.8l-.2 1.8 1.3-1.2a25.7 25.7 0 0 1 7.7-5 20 20 0 0 1 8-2c3.5 0 6 .8 7.7 2.4 2 2 2.3 4.4 1.3 7.8zm42.7 8c-1 2.6-2 4-3.8 4.4l-9 1-15.2 1h-.6v.7a5 5 0 0 0 2.4 5 10.6 10.6 0 0 0 5.5 1.4 22 22 0 0 0 8.5-2l1-.5 2.4-1.3a14 14 0 0 1 1 3.5c.6 3 .6 4.2.5 4.5a4.6 4.6 0 0 1-.6.7C520 77 514 78.7 507 78.7c-6.4 0-11-2-13.6-5.5s-3-8.8-1-15.2a33 33 0 0 1 10.8-15.5 26.6 26.6 0 0 1 17-6.2c5.2 0 9 2 11.2 5.5s2.6 8 1 13.2z"), e.appendChild(n, a);
                var a = e.createTextNode("\n  ");
                e.appendChild(n, a);
                var a = e.createElement("path");
                e.setAttribute(a, "fill", "#FFF"), e.setAttribute(a, "d", "M515 45.3a8 8 0 0 0-5.4 2.4 11.8 11.8 0 0 0-3.4 5 1.6 1.6 0 0 0 .6 2 1 1 0 0 0 .8 0c3.3 0 6.7-.3 10-.7 1 0 2-.4 2.2-1a6 6 0 0 0-.3-5.3 5 5 0 0 0-4.4-2.4zM339.2 34.8c-7 0-7.6.7-8 1s-.5.6-3.6 10l-1.2 4-1.2 3.7a1 1 0 0 0 0 .8c.5.5 1.3 1 8 1 6.4 0 10.8-3.3 13-9.7 1.2-3.6 1.2-6.4 0-8.2s-3.6-2.6-7-2.6z"), e.appendChild(n, a);
                var a = e.createTextNode("\n");
                e.appendChild(n, a), e.appendChild(t, n);
                var n = e.createTextNode("\n");
                return e.appendChild(t, n), t
            },
            buildRenderNodes: function() {
                return []
            },
            statements: [],
            locals: [],
            templates: []
        }
    }())
}), define("web-client/templates/svg/samus/logo-tp", ["exports"], function(e) {
    e.default = Ember.HTMLBars.template(function() {
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
                        line: 5,
                        column: 0
                    }
                },
                moduleName: "web-client/templates/svg/samus/logo-tp.hbs"
            },
            isEmpty: !1,
            arity: 0,
            cachedFragment: null,
            hasRendered: !1,
            buildFragment: function(e) {
                var t = e.createDocumentFragment();
                e.setNamespace("http://www.w3.org/2000/svg");
                var n = e.createElement("svg");
                e.setAttribute(n, "class", "svg-logo__tp"), e.setAttribute(n, "xmlns", "http://www.w3.org/2000/svg"), e.setAttribute(n, "viewBox", "0 0 303.5 138.5");
                var a = e.createTextNode("\n  ");
                e.appendChild(n, a);
                var a = e.createElement("path");
                e.setAttribute(a, "d", "M281.7 112.7c2.1-.1 4.2-.2 6.2-.5a1.56 1.56 0 0 0 1.3-.7 3.93 3.93 0 0 0-.2-3.2 3 3 0 0 0-2.7-1.5 5.29 5.29 0 0 0-3.5 1.5 6.91 6.91 0 0 0-2.1 3.2 1.39 1.39 0 0 0 0 .9 1.21 1.21 0 0 0 1 .3zM176.4 100.2c-4.4 0-4.8.4-4.9.6s-.4.4-2.3 6.2c-.1.4-.4 1.2-.8 2.4s-.6 2-.8 2.4a.44.44 0 0 0 .1.5c.2.3.8.6 4.9.6s6.8-2 8.1-6.1c.8-2.3.7-4-.1-5.1s-2.1-1.5-4.2-1.5z"), e.appendChild(n, a);
                var a = e.createTextNode("\n  ");
                e.appendChild(n, a);
                var a = e.createElement("path");
                e.setAttribute(a, "d", "M303 31.1l-15.6-15.6h-19V0h-32.9l-15.6 15.6h-17.3l-8.7 8.7v-8.7h-15.6V0h-58.9v15.6h-71L32.9 0H0v69.2l15.6 15.6 26 15.6h22.5v-3.5l8.7 3.5h42l7.4-8.7 1 8.7h27.5l.6-8.7 6.9 6.1c-1.3 4.7-2 7.1-2.7 9.3-1.8 5.7-10.4 28.4-11.2 30.5 0 .1-.1.2-.1.4a2.2 2.2 0 0 0 .8.1l6.1.2c3 0 11.2.2 12.7.2a.51.51 0 0 0 .5-.4l2.1-4.1a23.92 23.92 0 0 1 1.3-2.1 2.3 2.3 0 0 1 1.4-.4c2.5-.1 7.4-.9 10.4-3.8-.4 1.2-2.8 9.2-2.8 9.2s6 .1 8.7.1 8.2-.1 8.2-.1 2.4-3.4 3.1-3.2a2.54 2.54 0 0 1 1.2 1.1l1.3 2.2h56l3.2-2.5a43.68 43.68 0 0 0 5.6 3 17.68 17.68 0 0 0 5.1.5c3 0 21.8-7.1 26.4-10.1 1.6-1 2.8-1.8 2.9-3.1s-.5-2.3-1-4.8v-.2a8.34 8.34 0 0 0 4.7-5.5c1.5-4.7 1.2-8.8-1-12.4-1.6-2.6-4.9-5.7-11-5.7a20.31 20.31 0 0 0-7.7 1.5l21.1-14.5v-52h-.5zM41.6 41.5H26v17.3h15.6v19H19.1L7 65.8V6.9h19v15.6h15.6zm77.9 24.3l-12.1 12.1H48.5V22.5h19v36.3h6.9V22.5h19v36.3h6.9V22.5h19v43.3zm26 12.1h-19V22.5h19zm0-62.3h-19V6.9h19zm48.4 19l12.2-12.1h29.4v19H213v17.3h22.5v19H206l-12.1-12V34.6zm34 60.8c-1 2.9-3 4.3-6.2 4.3a3.83 3.83 0 0 1-2.9-1 2.74 2.74 0 0 1-.3-3 6.09 6.09 0 0 1 2.6-3.1 7 7 0 0 1 3.8-1.1 3.36 3.36 0 0 1 2.8 1.1 2.78 2.78 0 0 1 .2 2.8zm-75.5-29.6V6.9h19v15.6H187v19h-15.5v17.3h15.6v19h-22.5zm31.5 50.6a17.22 17.22 0 0 1-11 4.1c-.7 0-1.8 0-3.1-.1s-2.4-.1-3.2-.1a1.91 1.91 0 0 0-1.9 1.3c-.2.6-.5 1.8-1 3.6-.4 1.6-.7 2.7-.9 3.5a.32.32 0 0 1-.3.3c-1 0-2.6 0-4.8-.1s-3.8-.1-4.8-.1h-.1v-.2c.6-1.8 1.5-4.5 3-8.8 1.4-3.9 2.4-6.8 3-8.8 1.8-5.5 3.6-11.3 5.1-17.4l.1-.4a.86.86 0 0 1 .6-.3 82 82 0 0 1 9-.3c2.4 0 5 0 7.9.1 3.9.1 6.7 1.4 8.4 3.7s1.8 5.7.5 9.7a22.21 22.21 0 0 1-6.5 10.3zm22.7-5a9.51 9.51 0 0 0-1.4-.1 5.73 5.73 0 0 0-3.4.8 6 6 0 0 0-1.9 3c-.2.7-.5 1.7-.9 2.9l-.2.5c-.5 1.5-.9 2.7-1.1 3.4a14.6 14.6 0 0 0-.6 2.3c-.2 1-.5 1.8-.6 2.2a.57.57 0 0 1-.7.4c-.9.1-2.2.1-3.9.1a21.25 21.25 0 0 1-3.9-.2.37.37 0 0 1-.3-.1v-.2q.75-2.1 2.1-6.3l1-3c.5-1.3.8-2.4 1.1-3.3a40.44 40.44 0 0 0 2.3-10.3v-.3a.22.22 0 0 1 .2-.2c1.1-.1 2.5-.3 4.4-.6 2.5-.5 3.9-.7 4.3-.8a4.1 4.1 0 0 1-.1 1.1c-.3 1-.5 2 .2 2.2a.37.37 0 0 0 .49-.18c.8-.4 1.6-.8 2.5-1.2a11.35 11.35 0 0 1 5.1-1.3 2 2 0 0 1 .8.1c-.2.5-.5 1.3-.9 2.1s-.7 1.7-.9 2.2-.4 1.2-.7 2l-.3.8c-.2.6-.3 1-.4 1.2a.92.92 0 0 1-1.1.7c-.1.2-.5.2-1.2.1zm14 3.6c-.4 1-.9 2.9-1.8 5.8s-1.4 4.6-1.8 5.7a.66.66 0 0 1-.5.4c-1.3.1-2.7.2-4 .2a25.49 25.49 0 0 1-3.9-.2h-.2c0-.1.1-.2.2-.5.4-1.2 1-2.8 1.9-5.5.8-2.3 1.5-4.2 2-5.5a118.45 118.45 0 0 0 3.5-12 1.34 1.34 0 0 0 .1-.5c0-.1.1-.2.5-.2a14.92 14.92 0 0 1 2.1.2 16.35 16.35 0 0 0 2.2.2c.5 0 1.3 0 2.4-.1a23 23 0 0 1 2.3-.1c0 .1-.1.2-.2.4a87.22 87.22 0 0 0-4.8 11.7zm49.8-7.2q-.6 1.65-1.5 4.2-1 2.85-1.5 4.2c-.4 1.1-.9 2.7-1.6 5s-1.2 3.8-1.6 5a.85.85 0 0 1-.8.7c-.4 0-1.3.1-3.9.1a17 17 0 0 1-3.9-.2.1.1 0 0 1-.1-.1.88.88 0 0 1 .1-.7c.2-.7.6-1.7 1-2.9l.2-.7c.6-1.6 1-2.8 1.3-3.6 1.1-3.2 1.7-5.3 2.1-6.6a3.07 3.07 0 0 0-.2-2.8 2.44 2.44 0 0 0-2.2-.8 6.42 6.42 0 0 0-3 1.1 6.14 6.14 0 0 0-2.3 2.5c-.3.8-1.1 3-2.3 6.5-.3.8-.7 2.1-1.2 3.8s-.9 3-1.1 3.8a.67.67 0 0 1-.7.6h-8.1a.9.9 0 0 1 .1-.5c.2-.8.6-1.8 1.3-3.7s1.1-3 1.4-3.7a18.64 18.64 0 0 0 .8-2.5l.1-.5.9-3c.5-1.6.5-2.8 0-3.5a2.17 2.17 0 0 0-2-.8 6.3 6.3 0 0 0-3 1 4.87 4.87 0 0 0-2.4 2.3c-.5 1.4-1.1 3.5-2 6.1l-1.1 3.4c-.6 2-1.2 3.6-1.5 4.7l-.3.6a1.48 1.48 0 0 1-.7.1c-.9.1-2.1.1-3.8.1a26.25 26.25 0 0 1-3.7-.2h-.3a.76.76 0 0 1 .1-.4l.2-.5c.5-1.4 1.1-3.3 2-5.8l.2-.6c.9-2.4 1.5-4.4 2-5.7 1-3.2 1.9-6.5 2.6-9.8v-.1a.37.37 0 0 1 .1-.3.45.45 0 0 1 .3-.3 17 17 0 0 1 2.2-.4c1.5-.1 2.2-.2 2.4-.2s.9-.2 2.3-.5a6.28 6.28 0 0 1 1.9-.3 3.08 3.08 0 0 1-.3 1.3c-.5 1.7-.5 2-.4 2.2l.2.2h.4a2 2 0 0 0 .8-.4 32.53 32.53 0 0 1 4.5-2.5 11.66 11.66 0 0 1 4.5-.9 6.09 6.09 0 0 1 3.7 1 3.25 3.25 0 0 1 1.4 3v1.1l.8-.7a17.2 17.2 0 0 1 4.8-3.1 11.15 11.15 0 0 1 5-1.2q3.3 0 4.8 1.5a3.89 3.89 0 0 1 1 4.4zm19.2-6.8a7.76 7.76 0 0 1 7 3.5q2.25 3.45.6 8.4-.75 2.4-2.4 2.7c-.2 0-3 .3-5.6.5-2.1.2-5.2.5-9.5.8h-.4v.4a2.89 2.89 0 0 0 1.6 3.1 6 6 0 0 0 3.5.8 13.78 13.78 0 0 0 5.3-1.3l.6-.3 1.5-.8a8 8 0 0 1 .6 2.2 6.72 6.72 0 0 1 .3 2.8 1 1 0 0 1-.5.4 16.87 16.87 0 0 1-10.8 3.3c-4 0-6.9-1.2-8.5-3.5s-1.9-5.5-.6-9.5a20.55 20.55 0 0 1 6.7-9.7 17 17 0 0 1 10.6-3.8zm6.5-23.1h-19V41.5h-15.6v36.3h-19v-71h19v15.6H284l12.1 12.2z"), e.appendChild(n, a);
                var a = e.createTextNode("\n");
                e.appendChild(n, a), e.appendChild(t, n);
                var n = e.createTextNode("\n");
                return e.appendChild(t, n), t
            },
            buildRenderNodes: function() {
                return []
            },
            statements: [],
            locals: [],
            templates: []
        }
    }())
}), define("web-client/utilities/samus/regions", ["exports"], function(e) {
    var t = ["US", "CA", "GB", "DE", "ES", "IT", "FR", "BE", "AT"];
    e.PRIME_GEOS = t
}), define("web-client/utilities/urls/prime-urls", ["exports"], function(e) {
    var t = "https://twitch.amazon.com/prime";
    e.BASE_URL = t;
    var n = t + "?ref_=sm_w_thp_tn_t_all";
    e.FRONT_PAGE_HEADER_URL = n;
    var a = t + "?ref_=sm_w_thp_a_t_all";
    e.FRONT_PAGE_URL = a;
    var r = t + "?ref_=sm_w_tup_p_t_af";
    e.AD_FREE_URL = r;
    var l = t + "?ref_=sm_w_tup_p_t_af";
    e.AD_FREE_LINK_URL = l;
    var i = t + "?ref_=sm_w_tcp_m_t_sub";
    e.SUB_BUTTON_URL = i;
    var o = t + "?ref_=sm_w_tcp_m_l_sub";
    e.SUB_BUTTON_LINK_URL = o;
    var c = t + "?ref_=sm_w_tup_ln_t_c";
    e.CONTENT_CODE_URL = c;
    var d = t + "?ref_=sm_w_tup_ln_l_c";
    e.CONTENT_CODE_LINK_URL = d;
    var s = t + "?ref_=sm_w_tup_p_t_d";
    e.GAME_DISCOUNT_URL = s;
    var p = t + "?ref_=sm_w_tup_p_t_d";
    e.GAME_DISCOUNT_LINK_URL = p;
    var u = t + "?ref_=sm_w_tsp_p_mg_all";
    e.SUBSCRIPTIONS_PAGE = u;
    var m = t + "?" + h;
    e.BROWSE_GAMES_URL = m;
    var h = "ref_=sm_w_twp_p_ub_d";
    e.BROWSE_GAMES_REF = h
});