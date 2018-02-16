webpackJsonp([53], {
    "+Znq": function(e, t, n) {
        "use strict";
        var i = n("jetF");
        n.d(t, "a", function() {
            return i.a
        })
    },
    "0CQq": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ClipsViewCount"
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
                                    value: "viewCount"
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
                end: 71
            }
        };
        n.loc.source = {
            body: "query ClipsViewCount($slug: ID!) {\nclip(slug: $slug) {\nid\nviewCount\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "0Kuu": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ClipsTitle"
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
                end: 63
            }
        };
        n.loc.source = {
            body: "query ClipsTitle($slug: ID!) {\nclip(slug: $slug) {\nid\ntitle\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "0QL4": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ClipsCurator"
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
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 92
            }
        };
        n.loc.source = {
            body: "query ClipsCurator($slug: ID!) {\nclip(slug: $slug) {\nid\ncurator {\nid\ndisplayName\nlogin\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "287o": function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var i;
        ! function(e) {
            e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove"
        }(i || (i = {}))
    },
    "2BvQ": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Core_Services_Spade_Video"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "id"
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
                                    value: "id"
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
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 81
            }
        };
        n.loc.source = {
            body: "query Core_Services_Spade_Video($id: ID!) {\nvideo(id: $id) {\nid\nbroadcastType\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "2hJ3": function(e, t, n) {
        "use strict";
        t.a = function(e) {
            var t = document.createElement("textarea");
            t.style.position = "fixed", t.style.top = "0", t.style.left = "0", t.style.width = "2em", t.style.height = "2em", t.style.padding = "0", t.style.border = "none", t.style.outline = "none", t.style.boxShadow = "none", t.style.background = "transparent", t.value = e, document.body.appendChild(t), t.select();
            var n = !0;
            try {
                n = document.execCommand("copy")
            } catch (e) {
                n = !1
            }
            return document.body.removeChild(t), n
        }
    },
    "3Fw+": function(e, t, n) {
        "use strict";
        t.a = function(e) {
            if (e < 0) return "";
            if (0 === e) return i;
            var t = e,
                n = Math.floor(t / 3600);
            return t %= 3600, n + "h" + Math.floor(t / 60) + "m" + (t %= 60) + "s"
        };
        var i = "0h0m1s"
    },
    "3KVC": function(e, t, n) {
        "use strict";
        t.a = function(e) {
            return void 0 === e && (e = ""), i.test(e)
        }, t.b = function(e) {
            void 0 === e && (e = "");
            var t = e.match(i);
            if (null === t) return "";
            if (t && t.length > 0 && void 0 !== t.index) return t[1];
            return ""
        };
        var i = new RegExp("(?:^|\\s)(?:https?://)?(?:(?:www|go).)?twitch.tv/videos/(\\d+)(?:$|\\s)?")
    },
    "3iBR": function(e, t, n) {
        "use strict";
        n.d(t, "m", function() {
            return o
        }), n.d(t, "c", function() {
            return r
        }), n.d(t, "b", function() {
            return l
        }), n.d(t, "a", function() {
            return s
        }), n.d(t, "i", function() {
            return d
        }), n.d(t, "k", function() {
            return c
        }), n.d(t, "j", function() {
            return u
        }), n.d(t, "l", function() {
            return p
        }), n.d(t, "g", function() {
            return m
        }), n.d(t, "h", function() {
            return v
        }), n.d(t, "d", function() {
            return k
        }), n.d(t, "e", function() {
            return f
        }), n.d(t, "f", function() {
            return g
        });
        var i, a = n("I89S"),
            o = {
                ERROR_DISPLAY_TIMEOUT: 5e3,
                GET_BALANCE_RATE_LIMIT: 5e3,
                UNDO_PROMPT_DURATION: 5e3
            },
            r = "https://d3aqoihi2n8ty8.cloudfront.net",
            l = r + "/cheer",
            s = r + "/actions",
            d = 8e5,
            c = 1e4,
            u = 500,
            p = 1e3,
            m = "cheer",
            v = a.a.Purple,
            k = "FIRST_PARTY",
            f = "THIRD_PARTY",
            g = (i = {}, i[a.a.Gray] = "#979797", i[a.a.Purple] = "#9c3ee8", i[a.a.Green] = "#1db2a5", i[a.a.Blue] = "#0099fe", i[a.a.Red] = "#f43021", i[a.a.Yellow] = "#f3a71a", i)
    },
    "3ydF": function(e, t) {},
    "7B9K": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "UserEmotes"
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
                                    value: "emoteSets"
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
                                            value: "emotes"
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
                                                    value: "token"
                                                },
                                                arguments: [],
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
                end: 76
            }
        };
        n.loc.source = {
            body: "query UserEmotes {\ncurrentUser {\nid\nemoteSets {\nid\nemotes {\nid\ntoken\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "8Wuk": function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("U7vG"),
            o = n("6sO2"),
            r = n("2hJ3"),
            l = n("yDzg"),
            s = "https://www.facebook.com/sharer/sharer.php",
            d = "https://www.twitter.com/share",
            c = "https://www.reddit.com/submit",
            u = "https://vk.com/share.php",
            p = n("Odds");
        n("bdk8");
        n.d(t, "b", function() {
            return m
        }), n.d(t, "a", function() {
            return v
        });
        var m;
        ! function(e) {
            e[e.Twitter = 0] = "Twitter", e[e.Reddit = 1] = "Reddit", e[e.VKontakte = 2] = "VKontakte", e[e.Facebook = 3] = "Facebook", e[e.Copy = 4] = "Copy", e[e.CopyInput = 5] = "CopyInput"
        }(m || (m = {}));
        var v = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.renderLink = function() {
                    var e = "social-button__link " + n.addSocialClassModifier("social-button__link");
                    return n.isLink() ? a.createElement("a", i.__assign({
                        href: n.getLinkTarget(),
                        target: "_blank",
                        className: e,
                        onClick: n.onShareClickHandler
                    }, Object(p._53)(n.props)), n.renderIcon()) : a.createElement("button", i.__assign({
                        onClick: n.copyPageUrl,
                        onMouseLeave: n.clearIsCopiedStatus,
                        className: e
                    }, Object(p._53)(n.props)), n.renderIcon())
                }, n.onShareClickHandler = function() {
                    n.props.onShareClick && n.props.onShareClick(n.props.type)
                }, n.clearIsCopiedStatus = function() {
                    n.setState({
                        isCopied: !1
                    })
                }, n.getUrl = function() {
                    return n.props.url || window.location.href
                }, n.copyPageUrl = function(e) {
                    e && e.preventDefault(), n.props.onShareClick && n.props.onShareClick(n.props.type), Object(r.a)(n.getUrl()), n.setState({
                        isCopied: !0
                    })
                }, n.renderIcon = function() {
                    var e = n.getAssetFromType();
                    return a.createElement(p._2, {
                        className: "social-button__icon " + n.addSocialClassModifier("social-button__icon")
                    }, a.createElement(p._15, {
                        asset: e,
                        width: 30,
                        height: 30
                    }))
                }, n.isLink = function() {
                    return n.props.type !== m.Copy
                }, n.getTooltipFromType = function() {
                    switch (n.props.type) {
                        case m.Twitter:
                            return "Twitter";
                        case m.Reddit:
                            return "Reddit";
                        case m.Facebook:
                            return "Facebook";
                        case m.VKontakte:
                            return "VKontakte";
                        case m.Copy:
                            return n.state.isCopied ? Object(o.d)("Copied", "SocialButton") : Object(o.d)("Copy to clipboard", "SocialButton");
                        default:
                            return ""
                    }
                }, n.getAssetFromType = function() {
                    switch (n.props.type) {
                        case m.Twitter:
                            return p._16.Twitter;
                        case m.Facebook:
                            return p._16.Facebook;
                        case m.VKontakte:
                            return p._16.VKontakte;
                        case m.Reddit:
                            return p._16.Reddit;
                        case m.Copy:
                        default:
                            return p._16.Copy
                    }
                }, n.addSocialClassModifier = function(e) {
                    switch (n.props.type) {
                        case m.Twitter:
                            return e + "--twitter";
                        case m.Reddit:
                            return e + "--reddit";
                        case m.Facebook:
                            return e + "--facebook";
                        case m.VKontakte:
                            return e + "--vkontakte";
                        case m.Copy:
                            return e + "--copy";
                        default:
                            return ""
                    }
                }, n.getLinkTarget = function() {
                    var e = n.props,
                        t = e.text,
                        i = e.type,
                        a = n.getUrl(),
                        o = t || "";
                    switch (i) {
                        case m.Reddit:
                            return function(e, t) {
                                return Object(l.a)(c, {
                                    url: e,
                                    title: t
                                })
                            }(a, o);
                        case m.VKontakte:
                            return function(e) {
                                return Object(l.a)(u, {
                                    url: e
                                })
                            }(a);
                        case m.Facebook:
                            return function(e) {
                                return Object(l.a)(s, {
                                    u: e
                                })
                            }(a);
                        case m.Twitter:
                            return function(e, t) {
                                return Object(l.a)(d, {
                                    url: e,
                                    text: t
                                })
                            }(a, o);
                        default:
                            return ""
                    }
                }, n.state = {
                    isCopied: !1
                }, n
            }
            return i.__extends(t, e), t.prototype.render = function() {
                return a.createElement(p._2, {
                    className: "social-button"
                }, a.createElement(p._43, {
                    label: this.getTooltipFromType(),
                    direction: p._45.Top
                }, this.renderLink()))
            }, t
        }(a.Component)
    },
    CFVp: function(e, t, n) {
        "use strict";

        function i(e, t) {
            var n = [o.a.Red, o.a.Blue, o.a.Green, o.a.Purple, o.a.Gray],
                i = new Map,
                l = n.map(function(t) {
                    var n = function(e, t) {
                        for (var n = [], i = {}, o = 0, l = s; o < l.length; o++)
                            for (var c = l[o], u = 0, p = d; u < p.length; u++) {
                                var m = p[u];
                                i[c] || (i[c] = {
                                    animated: new Map,
                                    static: new Map
                                });
                                var v = a(e, c, !0, t, m);
                                n.push(v), i[c].animated.set(m, v.url);
                                var k = a(e, c, !1, t, m);
                                n.push(k), i[c].static.set(m, k.url)
                            }
                        return {
                            id: e + ";" + t,
                            bits: t,
                            color: r.f[t],
                            images: n,
                            indexedImages: i
                        }
                    }(e, t);
                    return i.set(t, n), n
                });
            return {
                prefix: e,
                type: t,
                tiers: l,
                orderedTiers: l,
                indexedTiers: i
            }
        }

        function a(e, t, n, i, a) {
            var o = n ? "gif" : "png";
            return {
                theme: t,
                isAnimated: n,
                dpiScale: a,
                url: "https://d3aqoihi2n8ty8.cloudfront.net/actions/" + e.toLowerCase() + "/" + t.toLowerCase() + "/" + (n ? "animated" : "static") + "/" + i + "/" + a + "." + o
            }
        }
        t.a = function() {
            if (!c) {
                var e = [],
                    t = {};
                Object.keys(l).forEach(function(n) {
                    var a = i(n, l[n]);
                    e.push(a), t[n.toLowerCase()] = a
                }), c = {
                    orderedActions: e,
                    indexedActions: t
                }
            }
            return c
        }, t.b = function() {
            return u || (u = function(e) {
                return c ? c.indexedActions[e.toLowerCase()] : i(e, l[e])
            }("Cheer")), u
        };
        var o = n("I89S"),
            r = n("3iBR"),
            l = {
                Cheer: r.d,
                Kreygasm: r.d,
                Kappa: r.d,
                Muxy: r.e,
                Streamlabs: r.e,
                SwiftRage: r.d,
                VoHiYo: r.d
            },
            s = ["LIGHT", "DARK"],
            d = [1, 1.5, 2, 3, 4],
            c = null,
            u = null
    },
    Fg4Y: function(e, t, n) {
        "use strict";

        function i(e) {
            return "https://www.twitch.tv/" + e
        }

        function a(e) {
            return function(e) {
                return i(y.c(e))
            }(e) + "/clips"
        }

        function o(e) {
            return i("/" + e)
        }

        function r(e) {
            return S.test(e)
        }

        function l(e, t) {
            var n = Object(h.a)(function(e) {
                return o(e) + "/clips"
            }(e), {
                tt_content: t
            });
            return r(window.navigator.userAgent) ? N(e, n) : n
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s, d = n("TToO"),
            c = n("U7vG"),
            u = n("6sO2"),
            p = n("7vx8"),
            m = n("CSlQ"),
            v = n("Odds"),
            k = n("tGx1");
        ! function(e) {
            e.top = "top", e.similar = "similar", e.game = "game", e.broadcaster = "broadcaster", e.curator = "curator"
        }(s || (s = {}));
        var f = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderRowTypesOrdered = [s.similar, s.broadcaster, s.game, s.top], t.renderRow = function(e) {
                        return c.createElement("div", {
                            key: e
                        }, function(e, t) {
                            switch (e) {
                                case s.top:
                                    return Object(u.d)("Popular Clips", "ClipsRecommendations");
                                case s.similar:
                                    return Object(u.d)("Similar Clips", "ClipsRecommendations");
                                case s.game:
                                    return Object(u.d)("Popular Clips from {game}", {
                                        game: t.data.clip.game.displayName
                                    }, "ClipsRecommendations");
                                case s.broadcaster:
                                    return Object(u.d)("Popular Clips from {channel}", {
                                        channel: t.data.clip.broadcaster.displayName
                                    }, "ClipsRecommendations");
                                default:
                                    return null
                            }
                        }(e, t.props), t.props.data.clip.relatedClips[e].map(t.renderClip))
                    }, t.renderClip = function(e) {
                        return c.createElement("div", {
                            key: e.id
                        }, e.id)
                    }, t
                }
                return d.__extends(t, e), t.prototype.render = function() {
                    return this.props.data.clip ? c.createElement(v._2, null, this.renderRowTypesOrdered.map(this.renderRow)) : c.createElement(v._2, null)
                }, t = d.__decorate([Object(m.d)("ClipsRecommendations"), Object(p.a)(k)], t)
            }(c.Component),
            g = n("hdYS"),
            h = n("yDzg"),
            y = n("NY9D"),
            b = "https://player.twitch.tv",
            N = function(e, t) {
                return "intent://stream/" + e + "#Intent;scheme=twitch;package=tv.twitch.android.app;S.browser_fallback_url=" + t + ";end"
            },
            S = /Android/i,
            C = n("U5tC"),
            w = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return d.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return this.props.data.clip ? c.createElement(v._2, {
                        padding: 1,
                        display: v.N.Flex,
                        alignItems: v.c.Center
                    }, c.createElement("a", {
                        target: "_blank",
                        href: l(this.props.data.clip.broadcaster.login, "player_profile_img")
                    }, c.createElement(v.l, {
                        src: this.props.data.clip.broadcaster.profileImageURL,
                        alt: Object(u.d)("Broadcaster Avatar", "ClipsBroadcasterInfo"),
                        size: 30
                    })), c.createElement(v._2, {
                        display: v.N.Flex,
                        flexDirection: v.P.Column,
                        flexGrow: 1,
                        margin: {
                            left: 1
                        }
                    }, c.createElement("a", {
                        href: l(this.props.data.clip.broadcaster.login, "player_profile_img")
                    }, c.createElement(v._35, {
                        fontSize: v.R.Size4,
                        type: v._40.Span
                    }, this.props.data.clip.broadcaster.displayName), !!this.props.data.clip.broadcaster.stream && c.createElement(v._2, {
                        margin: {
                            left: .5
                        },
                        display: v.N.InlineBlock
                    }, c.createElement(v._6, {
                        label: Object(u.d)("LIVE", "ClipsBroadcasterInfo"),
                        type: v._7.Live
                    }))), c.createElement(v._2, null, c.createElement(v._35, {
                        color: v.I.Alt2,
                        fontSize: v.R.Size5
                    }, this.props.data.clip.game && Object(u.d)("playing {gameName}", {
                        gameName: c.createElement("a", {
                            target: "_blank",
                            href: Object(h.a)(a(this.props.data.clip.game.name), {
                                tt_medium: "clips_web"
                            })
                        }, this.props.data.clip.game.displayName)
                    }, "ClipsBroadcasterInfo")))), c.createElement(g.a, {
                        isHostedFollow: !1,
                        channelLogin: this.props.data.clip.broadcaster.login
                    })) : c.createElement(v._2, null)
                }, t = d.__decorate([Object(m.d)("ClipsBroadcasterInfo"), Object(p.a)(C)], t)
            }(c.Component),
            _ = n("3Fw+"),
            F = n("J4ib"),
            I = n("dQ/z"),
            R = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return d.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.reportInteractive()
                }, t.prototype.render = function() {
                    if (!this.props.data.clip) return c.createElement(v._2, null);
                    var e;
                    return e = this.props.data.clip.video ? c.createElement(v.u, {
                        targetBlank: !0,
                        linkTo: Object(h.a)(function(e) {
                            return i("/videos/" + e)
                        }(this.props.data.clip.video.id), {
                            t: Object(_.a)(this.props.data.clip.video.offsetSeconds),
                            tt_medium: "clips_web",
                            tt_content: "full_vod_button"
                        })
                    }, Object(F.d)("Watch Full Video", "ClipsFullVideoButton")) : c.createElement(v.u, {
                        disabled: !0
                    }, Object(F.d)("Full Video Unavailable", "ClipsFullVideoButton")), c.createElement(v._2, null, e)
                }, t.prototype.reportInteractive = function() {
                    this.props.data.clip && this.props.latencyTracking.reportInteractive()
                }, t = d.__decorate([Object(m.d)("ClipsFullVideoButton"), Object(p.a)(I)], t)
            }(c.Component),
            D = n("YJNl"),
            O = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {}, t
                }
                return d.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return this.props.data.loading || this.props.data.error ? c.createElement(v._2, null) : c.createElement(v._2, null, "ClipsChatReplay")
                }, t = d.__decorate([Object(m.d)("ClipsChatReplay"), Object(p.a)(D)], t)
            }(c.Component),
            E = n("0QL4"),
            x = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return d.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.reportInteractive()
                }, t.prototype.render = function() {
                    if (!this.props.data.clip) return c.createElement(v._2, null);
                    var e = Object(h.a)(o(this.props.data.clip.curator.login), {
                        tt_medium: "clips_web",
                        tt_content: "curator_name"
                    });
                    return c.createElement(v._2, null, Object(u.d)("clipped by {curatorName}", {
                        curatorName: c.createElement("a", {
                            href: e,
                            target: "_blank"
                        }, this.props.data.clip.curator.displayName)
                    }, "ClipsCurator"))
                }, t.prototype.reportInteractive = function() {
                    this.props.data.clip && this.props.latencyTracking.reportInteractive()
                }, t = d.__decorate([Object(m.d)("ClipsCurator"), Object(p.a)(E)], t)
            }(c.Component),
            T = n("0Kuu"),
            j = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return d.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.reportInteractive()
                }, t.prototype.render = function() {
                    return this.props.data.clip ? c.createElement(v._2, null, this.props.data.clip.title) : c.createElement(v._2, null)
                }, t.prototype.reportInteractive = function() {
                    this.props.data.clip && this.props.latencyTracking.reportInteractive()
                }, t = d.__decorate([Object(m.d)("ClipsTitle"), Object(p.a)(T)], t)
            }(c.Component),
            L = n("0CQq"),
            V = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return d.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.reportInteractive()
                }, t.prototype.render = function() {
                    return this.props.data.clip ? c.createElement(v._2, null, !this.props.hideSymbol && c.createElement(v._15, {
                        asset: v._16.GlyphViews,
                        type: v._17.Brand
                    }), Object(u.d)("{views} views", {
                        views: Object(u.e)(this.props.data.clip.viewCount)
                    }, "ClipsViewCount")) : c.createElement(v._2, null)
                }, t.prototype.reportInteractive = function() {
                    this.props.data.clip && this.props.latencyTracking.reportInteractive()
                }, t = d.__decorate([Object(m.d)("ClipsViewCount"), Object(p.a)(L)], t)
            }(c.Component),
            U = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return d.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.slug;
                    return c.createElement(v._2, null, c.createElement(V, {
                        slug: e
                    }), c.createElement(j, {
                        slug: e
                    }), c.createElement(x, {
                        slug: e
                    }), c.createElement(O, null))
                }, t
            }(c.Component),
            B = Object(m.d)("ClipsInfoCard")(U),
            A = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return d.__extends(t, e), t.prototype.render = function() {
                    return c.createElement(v._2, null, c.createElement(j, {
                        slug: this.props.slug
                    }), c.createElement(V, {
                        slug: this.props.slug,
                        hideSymbol: !0
                    }))
                }, t
            }(c.Component),
            q = Object(m.d)("ClipsInfoMini", {
                autoReportInteractive: !0
            })(A),
            M = n("RH2O"),
            G = n("2KeS"),
            P = n("+xm8"),
            Q = n("f2i/"),
            H = n("Aj/L"),
            $ = n("+Znq"),
            W = n("oIkB"),
            z = n("287o"),
            K = function() {
                return function(e) {
                    var t = this;
                    this.timerId = null, this.start = function() {
                        t.timerId && t.stop(), t.timerId = setInterval(t.onInterval, t.intervalMillis)
                    }, this.stop = function() {
                        t.timerId && (clearInterval(t.timerId), t.timerId = null)
                    }, this.restart = function(e) {
                        void 0 === e && (e = 0), t.stop(), t.timerId = setTimeout(function() {
                            t.onInterval(), t.start()
                        }, e)
                    }, this.onInterval = e.onInterval, this.intervalMillis = e.intervalMillis
                }
            }(),
            Y = n("l21v"),
            J = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.addReaction = function() {
                        return t.props.addClipReaction(t.props.emote)
                    }, t.removeReaction = function() {
                        return t.props.removeClipReaction(t.props.emote)
                    }, t
                }
                return d.__extends(t, e), t.prototype.render = function() {
                    return c.createElement("div", {
                        onClick: this.props.hasReacted ? this.removeReaction : this.addReaction,
                        "data-test-selector": "clips-emote-button"
                    }, c.createElement("img", {
                        src: Object(Y.e)(this.props.emote.id, 1)
                    }), " ", this.props.hasReacted ? "reacted!" : "no react")
                }, t = d.__decorate([Object(m.d)("ClipsEmote", {
                    autoReportInteractive: !0
                })], t)
            }(c.Component),
            Z = n("Ldv2"),
            X = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        emoteSearchText: ""
                    }, t.renderEmoteSet = function(e) {
                        return c.createElement("div", {
                            key: e.id
                        }, e.emotes.filter(t.filterEmote).map(t.renderEmote))
                    }, t.renderEmote = function(e) {
                        var n = t.props.sortedReactions.find(function(t) {
                                return t.emote.id === e.id
                            }),
                            i = !(!n || !n.self.hasReacted);
                        return c.createElement(J, {
                            key: e.id,
                            emote: e,
                            addClipReaction: t.props.addClipReaction,
                            removeClipReaction: t.props.removeClipReaction,
                            hasReacted: i
                        })
                    }, t.getEmoteSets = function() {
                        return t.props.emoteSetsData && t.props.emoteSetsData.emoteSets || []
                    }, t.filterEmote = function(e) {
                        return function(e, t) {
                            var n = t.length,
                                i = e.length;
                            if (i > n) return !1;
                            if (i === n) return e === t;
                            e: for (var a = 0, o = 0; a < i; a++) {
                                for (var r = e.charCodeAt(a); o < n;)
                                    if (t.charCodeAt(o++) === r) continue e;
                                return !1
                            }
                            return !0
                        }(t.state.emoteSearchText, e.token.toLowerCase())
                    }, t.onEmoteSearchTextChange = function(e) {
                        t.setState({
                            emoteSearchText: e.target.value.toLowerCase()
                        })
                    }, t
                }
                return d.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.attemptReportInteractive()
                }, t.prototype.componentWillReceiveProps = function() {
                    this.attemptReportInteractive()
                }, t.prototype.render = function() {
                    return c.createElement(v._2, {
                        className: "clips-user-emotes"
                    }, this.getEmoteSets().map(this.renderEmoteSet), c.createElement(v.Y, {
                        type: v.Z.Search,
                        onChange: this.onEmoteSearchTextChange
                    }))
                }, t.prototype.attemptReportInteractive = function() {
                    this.getEmoteSets().length && this.props.latencyTracking.reportInteractive()
                }, t = d.__decorate([Object(Z.a)(), Object(m.d)("ClipsUserEmotes")], t)
            }(c.Component),
            ee = Object(M.b)(function(e) {
                return {
                    isLoggedIn: Object(H.d)(e)
                }
            })(X),
            te = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        showHiddenReactions: !1
                    }, t.renderReaction = function(e) {
                        return c.createElement(J, {
                            key: e.emote.id,
                            emote: e.emote,
                            addClipReaction: t.props.addClipReaction,
                            removeClipReaction: t.props.removeClipReaction,
                            hasReacted: e.self.hasReacted
                        })
                    }, t.toggleShowHiddenReactions = function() {
                        t.setState({
                            showHiddenReactions: !t.state.showHiddenReactions
                        })
                    }, t
                }
                return d.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.sortedReactions.length >= 7,
                        t = this.state.showHiddenReactions || !e ? this.props.sortedReactions : this.props.sortedReactions.slice(0, 5);
                    return c.createElement(v._2, {
                        className: "clips-emote-picker"
                    }, t.map(this.renderReaction), e && c.createElement(v.u, {
                        onClick: this.toggleShowHiddenReactions,
                        "data-test-selector": "clips-emote-picker-toggler"
                    }, this.state.showHiddenReactions ? ">" : "<"), c.createElement(ee, {
                        addClipReaction: this.props.addClipReaction,
                        removeClipReaction: this.props.removeClipReaction,
                        sortedReactions: this.props.sortedReactions
                    }))
                }, t = d.__decorate([Object(m.d)("ClipsEmotePicker")], t)
            }(c.Component),
            ne = n("xwy4"),
            ie = n("jFCw"),
            ae = n("hMIs"),
            oe = 3e3,
            re = {
                count: 0,
                emote: {
                    id: "62835",
                    token: "bleedPurple"
                },
                self: {
                    hasReacted: !1
                }
            },
            le = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.state = {
                        activeReactionIndex: 0,
                        sortedReactions: []
                    }, n.hasInitializedSortedReactions = !1, n.showNextReaction = function() {
                        n.getActiveReaction() ? n.setState({
                            activeReactionIndex: n.getNextValidReactionIndex()
                        }) : n.setState({
                            activeReactionIndex: 0
                        })
                    }, n.addActiveClipReaction = function() {
                        n.getActiveReaction() && n.addClipReaction(n.getActiveReaction().emote)
                    }, n.removeActiveClipReaction = function() {
                        n.getActiveReaction() && n.removeClipReaction(n.getActiveReaction().emote)
                    }, n.addClipReaction = function(e) {
                        n.toggleReaction(z.a.Add, e)
                    }, n.removeClipReaction = function(e) {
                        n.toggleReaction(z.a.Remove, e)
                    }, n.toggleReaction = function(e, t) {
                        if (!n.props.isLoggedIn) return n.props.login(), Promise.reject(new Error("user not logged in"));
                        n.updateReactionLocal(e, t);
                        return (e === z.a.Add ? n.props.addClipReaction : n.props.removeClipReaction)(Object(W.a)({
                            entityID: "clip:" + n.props.slug.toLowerCase(),
                            emoteID: t.id
                        }))
                    }, n.getActiveReaction = function() {
                        return n.state.sortedReactions[n.state.activeReactionIndex]
                    }, n.getNextValidReactionIndex = function() {
                        var e = n.state.activeReactionIndex + 1;
                        return e >= n.state.sortedReactions.length ? 0 : e
                    }, n.reactionCarouselTimer = new K({
                        intervalMillis: oe,
                        onInterval: n.showNextReaction
                    }), n
                }
                return d.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.initializeSortedReactions()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.initializeSortedReactions(e)
                }, t.prototype.render = function() {
                    var e = this.getActiveReaction();
                    return c.createElement(v._2, null, c.createElement($.a, null, c.createElement(v.u, {
                        type: v.z.Hollow,
                        ariaLabel: Object(u.d)("Open Emote Picker", "ClipsReactionCarousel"),
                        "data-test-selector": "social-share-button"
                    }, "+"), c.createElement(v.p, {
                        direction: v.q.Top,
                        noTail: !0
                    }, c.createElement(te, {
                        addClipReaction: this.addClipReaction,
                        removeClipReaction: this.removeClipReaction,
                        sortedReactions: this.state.sortedReactions
                    }))), e && c.createElement("button", {
                        onMouseEnter: this.reactionCarouselTimer.stop,
                        onMouseLeave: this.reactionCarouselTimer.start,
                        "data-test-selector": "reaction-carousel-button"
                    }, c.createElement(J, {
                        key: e.emote.id,
                        emote: e.emote,
                        addClipReaction: this.addActiveClipReaction,
                        removeClipReaction: this.removeActiveClipReaction,
                        hasReacted: e.self.hasReacted
                    })))
                }, t.prototype.initializeSortedReactions = function(e) {
                    if (void 0 === e && (e = this.props), e.data.clip && e.data.clip.reactions && !this.hasInitializedSortedReactions) {
                        this.hasInitializedSortedReactions = !0;
                        var t = 0 === e.data.clip.reactions.length ? [re] : e.data.clip.reactions.slice().sort(function(e, t) {
                            return t.count - e.count
                        });
                        this.setState({
                            sortedReactions: t
                        }), this.reactionCarouselTimer.start(), this.props.latencyTracking.reportInteractive()
                    }
                }, t.prototype.updateReactionLocal = function(e, t) {
                    var n = this.state.sortedReactions.findIndex(function(e) {
                            return e.emote.id === t.id
                        }),
                        i = this.state.sortedReactions.slice();
                    if (-1 !== n) {
                        var a = this.state.sortedReactions[n],
                            o = e === z.a.Add,
                            r = {
                                count: a.count + (o ? 1 : -1),
                                emote: a.emote,
                                self: {
                                    hasReacted: o
                                }
                            };
                        i.splice(n, 1, r)
                    } else i.push({
                        count: 1,
                        emote: t,
                        self: {
                            hasReacted: !0
                        }
                    });
                    this.setState({
                        sortedReactions: i
                    }), this.getActiveReaction().emote.id === t.id && this.reactionCarouselTimer.restart(1e3)
                }, t = d.__decorate([Object(p.a)(ne, {
                    name: "addClipReaction"
                }), Object(p.a)(ae, {
                    name: "removeClipReaction"
                }), Object(p.a)(ie), Object(m.d)("ClipsReactionCarousel")], t)
            }(c.Component),
            se = Object(M.b)(function(e) {
                return {
                    isLoggedIn: Object(H.d)(e)
                }
            }, function(e) {
                return Object(G.b)({
                    login: function() {
                        return Object(Q.f)(P.a.FeedReactionToggle)
                    }
                }, e)
            })(le),
            de = (n("mK8J"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return d.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.slug;
                    return c.createElement(v._2, {
                        className: "clips-sidebar"
                    }, c.createElement(w, {
                        slug: e
                    }), c.createElement(q, {
                        slug: e
                    }), c.createElement(B, {
                        slug: e
                    }), c.createElement(se, {
                        slug: e
                    }), c.createElement(R, {
                        slug: e
                    }))
                }, t
            }(c.Component)),
            ce = Object(m.d)("ClipsSidebar", {
                autoReportInteractive: !0
            })(de),
            ue = n("xX9u"),
            pe = n("8Wuk"),
            me = n("sEID"),
            ve = n("bnNq"),
            ke = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return d.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this;
                    if (!this.props.data.clip) return c.createElement(v._2, null);
                    var t = Object(u.d)("More", "ClipsSocialShare");
                    return c.createElement(v._2, null, me.b.map(function(t) {
                        return c.createElement(v._2, {
                            display: v.N.InlineBlock,
                            key: t.type,
                            margin: {
                                right: 1
                            }
                        }, c.createElement(pe.a, {
                            key: t.type,
                            type: t.type,
                            text: e.props.data.clip.title,
                            url: Object(h.a)(e.props.data.clip.url, t.params)
                        }))
                    }), c.createElement(v._2, {
                        display: v.N.InlineBlock,
                        position: v._9.Relative
                    }, c.createElement($.a, null, c.createElement(v.u, {
                        type: v.z.Hollow,
                        ariaLabel: t,
                        "data-test-selector": "social-share-button"
                    }, t), c.createElement(v.p, {
                        direction: v.q.BottomRight,
                        noTail: !0
                    }, c.createElement(v.S, {
                        id: "social-share-link",
                        orientation: v.T.Vertical,
                        label: Object(u.d)("Link", "ClipsSocialShare"),
                        "data-test-selector": "social-share-link"
                    }, c.createElement(ue.a, {
                        value: this.props.data.clip.url
                    })), c.createElement(v.S, {
                        id: "social-share-embed-link",
                        orientation: v.T.Vertical,
                        label: Object(u.d)("Embed Code", "ClipsSocialShare")
                    }, c.createElement(ue.a, {
                        value: this.props.data.clip.embedURL
                    }))))))
                }, t.prototype.reportInteractive = function() {
                    this.props.data.clip && this.props.latencyTracking.reportInteractive()
                }, t = d.__decorate([Object(m.d)("ClipsSocialShare"), Object(p.a)(ve)], t)
            }(c.Component),
            fe = n("BzvE"),
            ge = {},
            he = "player-storage-added",
            ye = "player-storage-removed",
            be = new fe.EventEmitter,
            Ne = (n("vtXo"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.setPlayerRef = function(e) {
                        t.playerRef = e
                    }, t
                }
                return d.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive(), this.playerRef && (! function(e, t) {
                        ge[e] = t, be.emit(he)
                    }(this.props.slug, this.playerRef.contentWindow), this.playerRef.contentWindow.postMessage({
                        args: [],
                        method: "subscribe",
                        namespace: "player.embed.host"
                    }, b)), this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillUnmount = function() {
                    ! function(e) {
                        delete ge[e], be.emit(ye)
                    }(this.props.slug)
                }, t.prototype.render = function() {
                    return c.createElement(v._2, {
                        className: "clips-video-iframe",
                        position: v._9.Relative,
                        fullWidth: !0
                    }, c.createElement(v.W, {
                        display: v.N.Block,
                        position: v._9.Absolute,
                        attachLeft: !0,
                        attachTop: !0,
                        fullWidth: !0,
                        fullHeight: !0
                    }, c.createElement("iframe", {
                        src: b + "/?player=clips-viewing&clip=" + this.props.slug + "&origin=" + window.location.origin,
                        width: "640",
                        height: "360",
                        frameBorder: "0",
                        scrolling: "no",
                        allowFullScreen: !0,
                        ref: this.setPlayerRef
                    })))
                }, t = d.__decorate([Object(m.d)("ClipsVideoIframe")], t)
            }(c.Component)),
            Se = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {}, t
                }
                return d.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return c.createElement(v._2, {
                        flexGrow: 1
                    }, c.createElement(Ne, {
                        slug: this.props.slug
                    }))
                }, t = d.__decorate([Object(m.d)("ClipsVideoPlayer")], t)
            }(c.Component),
            Ce = (n("vlO0"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return d.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.match.params.slug;
                    return c.createElement(v._2, {
                        className: "clips-watch",
                        padding: {
                            x: 2
                        },
                        breakpointSmall: {
                            padding: {
                                x: 5
                            }
                        },
                        breakpointLarge: {
                            padding: {
                                x: 0
                            }
                        }
                    }, c.createElement(ke, {
                        slug: e
                    }), c.createElement(v._25, {
                        background: v.m.Base,
                        display: v.N.Flex,
                        elevation: 3,
                        flexDirection: v.P.Column,
                        breakpointLarge: {
                            flexDirection: v.P.Row
                        }
                    }, c.createElement(Se, {
                        slug: e
                    }), c.createElement(ce, {
                        slug: e
                    })), c.createElement(f, {
                        slug: e
                    }), ";")
                }, t
            }(c.Component));
        n.d(t, "ClipsWatch", function() {
            return Ce
        })
    },
    I89S: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var i;
        ! function(e) {
            e[e.Gray = 1] = "Gray", e[e.Purple = 100] = "Purple", e[e.Green = 1e3] = "Green", e[e.Blue = 5e3] = "Blue", e[e.Red = 1e4] = "Red", e[e.Yellow = 1e5] = "Yellow"
        }(i || (i = {}))
    },
    Ldv2: function(e, t, n) {
        "use strict";
        t.a = function() {
            return Object(a.a)(r, {
                props: function(e) {
                    if (e.data) {
                        var t = e.data.currentUser && e.data.currentUser.emoteSets,
                            n = t && Object(o.a)(t);
                        return {
                            emoteSetsData: i.__assign({}, e.data, {
                                emoteMap: n,
                                emoteSets: t
                            })
                        }
                    }
                    return {}
                },
                skip: function(e) {
                    return !e.isLoggedIn
                }
            })
        };
        var i = n("TToO"),
            a = n("7vx8"),
            o = n("YhVV"),
            r = n("7B9K");
        n.n(r)
    },
    NY9D: function(e, t, n) {
        "use strict";
        t.c = function(e) {
            return "/directory/game/" + encodeURIComponent(e)
        }, t.a = function(e) {
            return "/communities/" + encodeURIComponent(e)
        }, t.b = function(e) {
            return "/events/" + encodeURIComponent(e)
        }, t.d = function(e) {
            return "/" + encodeURIComponent(e) + "/manager"
        }
    },
    SUA7: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "FollowButton_UnfollowUser"
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
                                value: "UnfollowUserInput"
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
                            value: "unfollowUser"
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
                                    value: "follow"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "disableNotifications"
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
                end: 130
            }
        };
        n.loc.source = {
            body: "mutation FollowButton_UnfollowUser($input: UnfollowUserInput!) {\nunfollowUser(input: $input) {\nfollow {\ndisableNotifications\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    U5tC: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ClipsBroadcasterInfo"
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
                                                value: "28"
                                            }
                                        }],
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
                                            value: "login"
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
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 174
            }
        };
        n.loc.source = {
            body: "query ClipsBroadcasterInfo($slug: ID!) {\nclip(slug: $slug) {\nid\ngame {\nid\nname\ndisplayName\n}\nbroadcaster {\nid\nprofileImageURL(width: 28)\ndisplayName\nlogin\nstream {\nid\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    VNvG: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "FollowButton_FollowUser"
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
                                value: "FollowUserInput"
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
                            value: "followUser"
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
                                    value: "follow"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "disableNotifications"
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
                end: 124
            }
        };
        n.loc.source = {
            body: "mutation FollowButton_FollowUser($input: FollowUserInput!) {\nfollowUser(input: $input) {\nfollow {\ndisableNotifications\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    WNmM: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return s
        }), n.d(t, "b", function() {
            return d
        }), n.d(t, "d", function() {
            return u
        }), n.d(t, "c", function() {
            return p
        });
        var i, a = n("6sO2"),
            o = n("8Wuk"),
            r = n("vH/s"),
            l = (i = {}, i[o.b.Twitter] = "twitter", i[o.b.Reddit] = "reddit", i[o.b.VKontakte] = "vkontakte", i[o.b.Facebook] = "facebook", i[o.b.Copy] = "link", i[o.b.CopyInput] = "option_link", i),
            s = {
                MyClips: "MyClips",
                ClipsOfMyChannel: "ClipsOfMyChannel"
            },
            d = {
                Game: "TopClipsGame",
                Channel: "TopClipsChannel"
            },
            c = {
                MyClips: r.PageviewLocation.MyClipsManager,
                ClipsOfMyChannel: r.PageviewLocation.ChannelClipsManager,
                TopClipsGame: r.PageviewLocation.ClipsGame,
                TopClipsChannel: r.PageviewLocation.ChannelClips
            },
            u = function(e, t) {
                return function(n) {
                    a.n.tracking.track(r.SpadeEventType.VideoShare, {
                        vod_id: e.id,
                        vod_type: "clip",
                        share_platform: l[n],
                        location: c[t],
                        game: e.game ? e.game.name : null,
                        channel_id: e.broadcaster ? Number(e.broadcaster.id) : 0,
                        channel: e.broadcaster ? e.broadcaster.login : "",
                        live: null
                    })
                }
            },
            p = function(e) {
                var t = e.targetURL,
                    n = e.type;
                a.n.tracking.track(r.SpadeEventType.ClipChampHelpClick, {
                    target_url: t,
                    type: n.toLowerCase()
                })
            }
    },
    YJNl: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ClipsChatReplay"
                },
                variableDefinitions: [],
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
                                value: "login"
                            },
                            value: {
                                kind: "StringValue",
                                value: "lirik",
                                block: !1
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
                                    value: "displayName"
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
                end: 375
            }
        };
        n.loc.source = {
            body: '# Documentation about how to use GraphQL is located in the Data Access Guide:\n# https://git-aws.internal.justin.tv/pages/twilight/twilight-docs/docs/guides/data-access.html\n# Additionally use the GraphQL explorer (https://api.twitch.tv/gql/explore) to browse\n# available GraphQL data and construct your query.\nquery ClipsChatReplay {\nuser(login: "lirik") {\nid\ndisplayName\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    YhVV: function(e, t, n) {
        "use strict";
        t.b = function(e, t) {
            var n = [];
            if (!e || !t) return n;
            for (var a = /\S+/g, o = a.exec(e); o;) {
                var r = o[0],
                    l = t[r];
                if (l && "function" != typeof l) {
                    var s = Object(i.d)(e.slice(0, o.index)),
                        d = s ? s.length : o.index;
                    n[d] = {
                        startIndex: d,
                        endIndex: d + r.length,
                        data: {
                            alt: r,
                            images: {
                                themed: !1,
                                sources: {
                                    "1x": Object(i.e)(l.id, 1),
                                    "2x": Object(i.e)(l.id, 2),
                                    "4x": Object(i.e)(l.id, 4)
                                }
                            }
                        }
                    }
                }
                o = a.exec(e)
            }
            return n
        }, t.a = function(e) {
            for (var t = {}, n = 0, i = e; n < i.length; n++)
                for (var r = i[n], l = 0, s = r.emotes; l < s.length; l++)
                    for (var d = s[l], c = 0, u = a[d.token] || [d.token]; c < u.length; c++) {
                        var p = u[c];
                        t[p] && r.id === o || (t[p] = {
                            id: d.id,
                            token: p
                        })
                    }
            return t
        };
        var i = n("l21v"),
            a = {
                "\\:\\&gt\\;": [":>"],
                "\\&gt\\;\\(": [">("],
                "\\&lt\\;\\]": ["<]"],
                "\\&lt\\;3": ["<3"],
                ":-?(?:7|L)": [":-7", ":-L", ":7", ":L"],
                "[oO](_|\\.)[oO]": ["o_o", "O_O", "o_O", "O_o", "o.o", "O.O", "o.O", "O.o"],
                "\\;-?(p|P)": [";-p", ";-P", ";p", ";P"],
                "\\;-?\\)": [";-)", ";)"],
                "\\:-?(o|O)": [":-o", ":-O", ":o", ":O"],
                "\\:-?(p|P)": [":-p", ":-P", ":p", ":P"],
                "\\:-?(S|s)": [":-S", ":-s", ":s", ":S"],
                "\\:-?[\\\\/]": [":-/", ":-\\", ":/", ":\\"],
                "\\:-?[z|Z|\\|]": [":-|", ":-Z", ":-z", ":|", ":Z", ":z"],
                "\\:-?\\(": [":-(", ":("],
                "\\:-?\\)": [":-)", ":)"],
                "\\:-?D": [":-D", ":D"],
                "#-?[\\\\/]": ["#-/", "#-\\", "#/", "#\\"],
                "B-?\\)": ["B-)", "B)"],
                "R-?\\)": ["R-)", "R)"]
            },
            o = "0"
    },
    YugT: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "FollowButton_FollowEvent_User"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "id"
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
                                    value: "id"
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
                                    value: "isPartner"
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
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "hosting"
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
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 157
            }
        };
        n.loc.source = {
            body: "query FollowButton_FollowEvent_User($id: ID!) {\nuser(id: $id) {\nid\nisPartner\nstream {\nid\ngame {\nid\nname\n}\n}\nhosting {\nid\nstream {\nid\ngame {\nid\nname\n}\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    bdk8: function(e, t) {},
    bnNq: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ClipsSocialShare"
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
                end: 82
            }
        };
        n.loc.source = {
            body: "query ClipsSocialShare($slug: ID!) {\nclip(slug: $slug) {\nid\nurl\nembedURL\ntitle\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "dQ/z": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ClipsFullVideoButton"
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
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "offsetSeconds"
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
            body: "query ClipsFullVideoButton($slug: ID!) {\nclip(slug: $slug) {\nid\nvideo {\nid\noffsetSeconds\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    e1CU: function(e, t, n) {
        "use strict";
        t.a = function(e, t) {
            var n = e,
                i = !1;
            return n ? function(e) {
                return e.split("").map(function(e) {
                    return e.charCodeAt(0) > 127
                }).reduce(function(e, t) {
                    return e || t
                })
            }(n) && (i = !0) : n = t, {
                userDisplayName: n,
                isIntl: i
            }
        }
    },
    hMIs: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "Remove_Clip_Reaction"
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
                                value: "RemoveReactionInput"
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
                            value: "removeReaction"
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
                                    value: "content"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "InlineFragment",
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
                                                    value: "reactions"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "emote"
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
                                                                    value: "token"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "count"
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
                                                                    value: "hasReacted"
                                                                },
                                                                arguments: [],
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
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 187
            }
        };
        n.loc.source = {
            body: "mutation Remove_Clip_Reaction($input: RemoveReactionInput!) {\nremoveReaction(input: $input) {\ncontent {\n... on Clip {\nid\nreactions {\nemote {\nid\ntoken\n}\ncount\nself {\nhasReacted\n}\n}\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    hdYS: function(e, t, n) {
        "use strict";
        var i = n("RH2O"),
            a = n("2KeS"),
            o = n("+xm8"),
            r = n("f2i/"),
            l = n("Aj/L"),
            s = n("TToO"),
            d = n("U7vG"),
            c = n("6sO2"),
            u = n("+Znq"),
            p = n("7vx8"),
            m = n("oIkB"),
            v = n("2BvQ"),
            k = n("xrVp"),
            f = n("YugT"),
            g = {
                Channel: "channel"
            },
            h = n("vH/s"),
            y = n("CSlQ"),
            b = n("Odds"),
            N = n("VNvG"),
            S = (n("3ydF"), n("SUA7")),
            C = n("x4k6"),
            w = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isFollowing: !1,
                        showDropdown: !1,
                        disableNotifications: !0
                    }, t.userDataLoaded = function() {
                        return t.props.data && !t.props.data.loading && !t.props.data.error && t.props.data.user
                    }, t.toggleFollowing = function() {
                        var e;
                        t.state.isFollowing ? (t.unfollowUser(), e = h.SpadeEventType.Unfollow) : (t.followUser(), e = h.SpadeEventType.Follow);
                        var n = t.getFollowData();
                        n && function(e, t) {
                            s.__awaiter(this, void 0, void 0, function() {
                                var n, i, a, o, r, l, d, u, p, m;
                                return s.__generator(this, function(s) {
                                    switch (s.label) {
                                        case 0:
                                            if (n = null, i = null, a = null, o = null, r = null, !t.channelID) return [3, 5];
                                            s.label = 1;
                                        case 1:
                                            return s.trys.push([1, 3, , 4]), [4, c.n.apollo.client.query({
                                                query: f,
                                                variables: {
                                                    id: t.channelID
                                                }
                                            })];
                                        case 2:
                                            return o = s.sent(), [3, 4];
                                        case 3:
                                            return d = s.sent(), c.i.error(d, "Failed to make query for channel info in FollowEvent reporting.", {
                                                channelID: t.channelID
                                            }), [3, 4];
                                        case 4:
                                            (a = o && o.data && o.data.user) ? r = a.hosting.stream && a.hosting.stream.game ? a.hosting.stream.game.name : a.stream && a.stream.game && a.stream.game.name: c.i.error(new Error("GraphQL empty response"), "Query for channel info in FollowEvent reporting return no data.", {
                                                channelID: t.channelID
                                            }), s.label = 5;
                                        case 5:
                                            if (!(u = c.m.getVideoPlayerTrackingData().vodID)) return [3, 10];
                                            s.label = 6;
                                        case 6:
                                            return s.trys.push([6, 8, , 9]), [4, c.n.apollo.client.query({
                                                query: v,
                                                variables: {
                                                    id: u
                                                }
                                            })];
                                        case 7:
                                            return n = s.sent(), [3, 9];
                                        case 8:
                                            return p = s.sent(), c.i.error(p, "Failed to make query for VOd info in FollowEvent reporting.", {
                                                currentVODID: u
                                            }), [3, 9];
                                        case 9:
                                            (i = n && n.data && n.data.video) ? l = Object(k.a)(i.broadcastType): (l = null, c.i.error(new Error("GraphQL empty response"), "Query for video info in FollowEvent reporting return no data.", {
                                                currentVODID: u
                                            })), s.label = 10;
                                        case 10:
                                            return m = {
                                                channel: t.channelLogin,
                                                channel_id: t.channelID,
                                                channel_game: r,
                                                cta_visible: c.m.getVideoPlayerTrackingData().followCTAVisible,
                                                host_channel: t.hostChannelLogin,
                                                host_channel_id: t.hostChannelID,
                                                game: t.game,
                                                partner: a ? a.isPartner : null,
                                                src: t.src,
                                                vod_id: u,
                                                vod_type: l
                                            }, c.m.track(e, m), [2]
                                    }
                                })
                            })
                        }(e, {
                            channelLogin: n.user.login,
                            channelID: n.user.id,
                            hostChannelLogin: t.props.hostChannelLogin,
                            hostChannelID: t.props.hostChannelID,
                            src: g.Channel
                        }), t.setState(function(e) {
                            return {
                                isFollowing: !e.isFollowing,
                                disableNotifications: !1
                            }
                        })
                    }, t.followUser = function() {
                        var e = t.getFollowData();
                        if (t.props.followUser && e) {
                            t.setState({
                                showDropdown: !0
                            });
                            var n = s.__assign({}, Object(m.a)({
                                disableNotifications: !1,
                                targetID: e.user.id
                            }), {
                                optimisticResponse: {
                                    followUser: {
                                        __typename: "FollowUserPayload",
                                        follow: {
                                            disableNotifications: !1,
                                            __typename: "Follow"
                                        }
                                    }
                                }
                            });
                            t.props.followUser(n).then(function(e) {
                                Object(m.d)(C, {
                                    login: t.props.channelLogin
                                }, function(t) {
                                    return t.user.self.follower.disableNotifications = e.data.followUser.follow.disableNotifications, t
                                })
                            })
                        }
                    }, t.unfollowUser = function() {
                        var e = t.getFollowData();
                        if (t.props.unfollowUser && e) {
                            var n = s.__assign({}, Object(m.a)({
                                targetID: e.user.id
                            }), {
                                optimisticResponse: {
                                    unfollowUser: {
                                        __typename: "UnfollowUserPayload",
                                        follow: {
                                            disableNotifications: null,
                                            __typename: "Follow"
                                        }
                                    }
                                }
                            });
                            t.props.unfollowUser(n).then(function() {
                                Object(m.d)(C, {
                                    login: t.props.channelLogin
                                }, function(e) {
                                    return e.user.self.follower.disableNotifications = null, e
                                })
                            })
                        }
                    }, t.toggleNotificationsEnabled = function() {
                        var e = t.getFollowData();
                        if (t.props.followUser && e) {
                            var n = s.__assign({}, Object(m.a)({
                                disableNotifications: !t.state.disableNotifications,
                                targetID: e.user.id
                            }), {
                                optimisticResponse: {
                                    followUser: {
                                        __typename: "FollowUserPayload",
                                        follow: {
                                            disableNotifications: !t.state.disableNotifications,
                                            __typename: "Follow"
                                        }
                                    }
                                }
                            });
                            t.props.followUser(n).then(function(e) {
                                Object(m.d)(C, {
                                    login: t.props.channelLogin
                                }, function(t) {
                                    return t.user.self.follower.disableNotifications = e.data.followUser.follow.disableNotifications, t
                                })
                            }), t.setState(function(e) {
                                return {
                                    disableNotifications: !e.disableNotifications
                                }
                            })
                        }
                    }, t.getFollowData = function() {
                        return t.props.followData ? t.props.followData : t.props.data
                    }, t
                }
                return s.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.props.channelLogin && !this.userDataLoaded() || !this.props.updateContainerWidth || this.props.updateContainerWidth(), this.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    if (e.data && !e.data.loading && !e.data.error || this.props.followData) {
                        var t = e.data || this.props.followData;
                        this.setState({
                            isFollowing: !!t && (t.user.self && null !== t.user.self.follower.disableNotifications),
                            disableNotifications: !t || t.user.self && t.user.self.follower.disableNotifications
                        })
                    }
                }, t.prototype.render = function() {
                    var e = this.props.isHostedFollow && this.props.channelName ? Object(c.d)("Follow {username}", {
                        username: this.props.channelName
                    }, "FollowButton") : Object(c.d)("Follow", "FollowButton");
                    if (!this.props.isLoggedIn) return d.createElement(b.u, s.__assign({
                        tabIndex: this.props.tabIndex,
                        ariaLabel: e,
                        icon: this.props.hideIcon ? void 0 : b._16.Heart,
                        onClick: this.props.login,
                        blurAfterClick: this.props.blurAfterClick,
                        "data-a-target": "follow-button"
                    }, Object(b._53)(this.props), {
                        size: this.props.size
                    }), e);
                    if (this.props.showLoadingPlaceholder && (!this.props.data || this.props.data.loading)) return d.createElement(b._8, {
                        width: 70,
                        height: 30
                    });
                    if (!this.props.followUser || !this.props.unfollowUser || !this.props.followData && (!this.props.data || this.props.data.loading || this.props.data.error || this.props.data.user.id === this.props.data.currentUser.id)) return null;
                    var t = this.state.disableNotifications ? Object(c.d)("Opt in to notifications to receive updates on this channel's activity, including when they go live.", "FollowButton") : Object(c.d)("You will be notified on this channel's activity, including when they go live.", "FollowButton");
                    if (!this.state.isFollowing) return d.createElement(b.u, s.__assign({
                        blurAfterClick: this.props.blurAfterClick,
                        ariaLabel: e,
                        size: this.props.size,
                        "data-a-target": "follow-button",
                        "data-test-selector": "follow-button",
                        icon: this.props.hideIcon ? void 0 : b._16.Heart,
                        onClick: this.toggleFollowing
                    }, Object(b._53)(this.props), {
                        tabIndex: this.props.tabIndex
                    }), e);
                    if (this.props.hideWhenFollowing) return null;
                    var n = this.props.balloonDirection ? this.props.balloonDirection : b.q.BottomRight,
                        i = this.getFollowData(),
                        a = i ? i.user.displayName : "";
                    return d.createElement(b._2, {
                        display: b.N.Flex,
                        className: "follow-btn"
                    }, d.createElement(b._2, null, d.createElement(b.v, {
                        ariaLabel: Object(c.d)("Unfollow", "FollowButton"),
                        "data-a-target": "unfollow-button",
                        "data-test-selector": "unfollow-button",
                        icon: b._16.Heart,
                        onClick: this.toggleFollowing,
                        statusAlertIcon: b._16.Unheart
                    })), d.createElement(u.a, {
                        display: b.N.InlineFlex,
                        openByDefault: this.state.showDropdown
                    }, d.createElement("button", {
                        tabIndex: this.props.tabIndex,
                        "aria-label": Object(c.d)("Dropdown", "FollowButton"),
                        className: "follow-btn__dropdown-toggle",
                        "data-a-target": "follow-dropdown-toggle"
                    }, d.createElement(b._2, {
                        justifyContent: b._1.Center,
                        display: b.N.Flex,
                        alignItems: b.c.Stretch,
                        fullHeight: !0
                    }, d.createElement(b._15, {
                        asset: b._16.GlyphArrDown
                    }))), d.createElement(b.p, {
                        size: b.r.Small,
                        direction: n,
                        "data-a-target": "follow-notifications-balloon"
                    }, d.createElement(b._25, {
                        color: b.I.Base,
                        display: b.N.Flex,
                        flexWrap: b.Q.Wrap,
                        padding: 1
                    }, d.createElement(b._2, {
                        display: b.N.Flex,
                        margin: {
                            bottom: 1
                        }
                    }, d.createElement(b._35, {
                        type: b._40.H6
                    }, Object(c.d)("You are following {followingName}", {
                        followingName: a
                    }, "FollowButton"))), d.createElement(b._2, {
                        display: b.N.Flex,
                        flexWrap: b.Q.NoWrap,
                        padding: {
                            bottom: 1
                        }
                    }, d.createElement(b._2, {
                        display: b.N.Flex,
                        padding: {
                            right: 2
                        }
                    }, d.createElement("span", null, d.createElement(b._35, {
                        type: b._40.H6
                    }, Object(c.d)("Notifications", "FollowButton")))), d.createElement(b._2, {
                        display: b.N.Flex,
                        flexShrink: 0
                    }, d.createElement(b._42, {
                        onChange: this.toggleNotificationsEnabled,
                        checked: !this.state.disableNotifications,
                        "data-a-target": "notifications-toggle"
                    }))), d.createElement(b._2, {
                        display: b.N.InlineFlex,
                        padding: {
                            bottom: 1
                        }
                    }, d.createElement(b._35, {
                        type: b._40.Span,
                        color: b.I.Alt2
                    }, t))))))
                }, t.prototype.reportInteractive = function() {
                    this.props.isLoggedIn ? (!this.props.channelLogin || this.userDataLoaded() || this.props.followData) && this.props.latencyTracking.reportInteractive() : this.props.latencyTracking.reportInteractive()
                }, t = s.__decorate([Object(p.a)(C, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.channelLogin
                            }
                        }
                    },
                    skip: function(e) {
                        return !e.isLoggedIn || !e.channelLogin || !!e.followData
                    }
                }), Object(p.a)(N, {
                    name: "followUser"
                }), Object(p.a)(S, {
                    name: "unfollowUser"
                }), Object(y.d)("FollowButton")], t)
            }(d.Component),
            _ = Object(i.b)(function(e) {
                return {
                    isLoggedIn: Object(l.d)(e)
                }
            }, function(e) {
                return Object(a.b)({
                    login: function() {
                        return Object(r.f)(o.a.FollowButton)
                    }
                }, e)
            })(w);
        n.d(t, "a", function() {
            return _
        })
    },
    iydZ: function(e, t, n) {
        "use strict";

        function i(e, t, n) {
            void 0 === n && (n = !0);
            var i = n ? "animated" : "static";
            return t ? {
                themed: !0,
                dark: (a = {}, a[t + "x"] = e.indexedImages.DARK[i].get(t), a),
                light: (o = {}, o[t + "x"] = e.indexedImages.LIGHT[i].get(t), o)
            } : {
                themed: !0,
                dark: {
                    "1x": e.indexedImages.DARK[i].get(1),
                    "1.5x": e.indexedImages.DARK[i].get(1.5),
                    "2x": e.indexedImages.DARK[i].get(2),
                    "3x": e.indexedImages.DARK[i].get(3),
                    "4x": e.indexedImages.DARK[i].get(4)
                },
                light: {
                    "1x": e.indexedImages.LIGHT[i].get(1),
                    "1.5x": e.indexedImages.LIGHT[i].get(1.5),
                    "2x": e.indexedImages.LIGHT[i].get(2),
                    "3x": e.indexedImages.LIGHT[i].get(3),
                    "4x": e.indexedImages.LIGHT[i].get(4)
                }
            };
            var a, o
        }
        n.d(t, "a", function() {
            return l
        }), t.c = function(e, t) {
            var n = [],
                l = t.indexedActions,
                s = new RegExp("^(" + Object.keys(l).join("|") + ")(\\d+)$", "i"),
                d = e.split(/\s+/);
            return d.forEach(function(e, t) {
                var c = s.exec(e);
                if (c) {
                    var u = c[1].toLowerCase(),
                        p = +c[2],
                        m = l[u];
                    if (m || u !== a.g || (m = Object(o.b)()), m) {
                        var v = m.orderedTiers.find(function(e) {
                            return e.bits <= p
                        });
                        !v && p && (v = m.orderedTiers[0]), v && n.push({
                            type: r.a.Emote,
                            content: {
                                images: i(v),
                                alt: m.prefix,
                                cheerAmount: p,
                                cheerColor: v.color
                            }
                        })
                    }
                } else {
                    var k = n.length && n[n.length - 1],
                        f = "";
                    if (t < d.length - 1 && (f = " "), k && k.type === r.a.Text) k.content += e + f;
                    else {
                        var g = "";
                        t && (g = " "), n.push({
                            type: r.a.Text,
                            content: g + e + f
                        })
                    }
                }
            }), n
        }, t.b = i;
        var a = n("3iBR"),
            o = n("CFVp"),
            r = n("mwvJ"),
            l = {
                indexedActions: {},
                orderedActions: []
            }
    },
    jFCw: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ClipsReactionCarousel"
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
                                    value: "reactions"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "count"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "emote"
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
                                                    value: "token"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
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
                                                    value: "hasReacted"
                                                },
                                                arguments: [],
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
                end: 127
            }
        };
        n.loc.source = {
            body: "query ClipsReactionCarousel($slug: ID!) {\nclip(slug: $slug) {\nid\nreactions {\ncount\nemote {\nid\ntoken\n}\nself {\nhasReacted\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    jetF: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return l
        });
        var i = n("TToO"),
            a = n("U7vG"),
            o = (n.n(a), n("HM6l")),
            r = n("Odds"),
            l = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        showBalloon: !!t.props.openByDefault,
                        hasInteracted: !!t.props.openByDefault
                    }, t.toggleBalloonId = Object(o.a)(), t.handleButtonClick = function() {
                        t.setState(function(e) {
                            return {
                                showBalloon: !e.showBalloon,
                                hasInteracted: !0
                            }
                        }, function() {
                            t.props.onToggle && t.props.onToggle(!t.state.showBalloon)
                        })
                    }, t.handleGlobalClick = function(e) {
                        e.target.matches('[data-toggle-balloon-id="' + t.toggleBalloonId + '"] *') || t.setState({
                            showBalloon: !1
                        }, function() {
                            t.props.onToggle && t.props.onToggle(!t.state.showBalloon)
                        })
                    }, t.onMouseEnter = function() {
                        t.state.hasInteracted || t.setState({
                            hasInteracted: !0
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.openByDefault && document.addEventListener("click", this.handleGlobalClick, !0)
                }, t.prototype.componentWillUpdate = function(e, t) {
                    this.state.showBalloon !== t.showBalloon && (t.showBalloon ? document.addEventListener("click", this.handleGlobalClick, !0) : document.removeEventListener("click", this.handleGlobalClick, !0))
                }, t.prototype.componentWillUnmount = function() {
                    document.removeEventListener("click", this.handleGlobalClick, !0)
                }, t.prototype.render = function() {
                    var e = a.Children.toArray(this.props.children);
                    if (2 !== e.length) throw new Error("ToggleBalloonWrapper should only be given two children: a clickable and a Balloon");
                    var t = e[0],
                        n = e[1];
                    if (n.type !== r.p) throw new Error("ToggleBalloonWrapper needs a Balloon as its second child element");
                    var o = a.cloneElement(t, {
                            onClick: this.handleButtonClick
                        }),
                        l = null;
                    (this.state.hasInteracted || this.props.alwaysMountBalloonContent) && (l = a.cloneElement(n, {
                        show: this.state.showBalloon
                    }));
                    var s = o;
                    return this.props.tooltipProps && (s = a.createElement(r._43, i.__assign({}, this.props.tooltipProps), o)), a.createElement(r._2, {
                        "data-toggle-balloon-id": this.toggleBalloonId,
                        display: this.props.display,
                        position: r._9.Relative
                    }, a.createElement("div", {
                        style: {
                            display: "inherit"
                        },
                        onMouseEnter: this.onMouseEnter,
                        "data-test-selector": "toggle-balloon-wrapper__mouse-enter-detector"
                    }, s), l)
                }, t.prototype.toggleBalloon = function(e) {
                    void 0 === e && (e = !this.state.showBalloon), this.setState({
                        showBalloon: e,
                        hasInteracted: !0
                    })
                }, t
            }(a.Component)
    },
    l21v: function(e, t, n) {
        "use strict";

        function i(e, t) {
            return void 0 === t && (t = 15), "number" != typeof h[e] && (h[e] = Math.floor(Math.random() * t)), g[h[e]]
        }

        function a(e, t, n, i, a, s) {
            void 0 === t && (t = []);
            var c = [],
                u = 0,
                m = o(e);
            t.forEach(function(t) {
                var o = m ? m.slice(u, t.startIndex).join("") : e.slice(u, t.startIndex);
                o && (c = n ? c.concat(r(o, s, a, i)) : c.concat(l(o, s, a))), c.push({
                    type: p.a.Emote,
                    content: d.__assign({
                        alt: m ? m.slice(t.startIndex, t.endIndex).join("") : e.slice(t.startIndex, t.endIndex)
                    }, t.data)
                }), u = t.endIndex
            });
            var v = m ? m.slice(u).join("") : e.slice(u);
            return v && (c = n ? c.concat(r(v, s, a, i)) : c.concat(l(v, s, a))), c
        }

        function o(e) {
            return e.match(/[^\uD800-\uDFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDFFF]/g)
        }

        function r(e, t, n, i) {
            if (!i) return l(e, t, n);
            var a = Object(u.c)(e, i).map(function(e) {
                return e.type === p.a.Text ? l(e.content, t, n) : e
            });
            return [].concat.apply([], a)
        }

        function l(e, t, n) {
            var i = /^(?:(https?:\/\/)?(?:[\w@#%\-+=:~]+\.)+[a-z]{2,6}(?:\/[\w./@#%&()\-+=:?~]*)?)$/g,
                a = /([^\w@#%\-+=:~])?(@)([^\u0000-\u007F]+|\w+)+([^\w./@#%&()\-+=:?~]|\s|$)/g,
                o = [],
                r = e.split(/\s+/);
            return r.forEach(function(e, l) {
                i.lastIndex = 0;
                var s = i.exec(e);
                a.lastIndex = 0;
                var d = a.exec(e);
                if (s) {
                    var u = s.index;
                    0 !== u && o.push({
                        type: p.a.Text,
                        content: "" + e.slice(0, u)
                    });
                    var v = i.lastIndex;
                    if (n) o.push({
                        type: p.a.Text,
                        content: " <" + Object(c.d)("deleted link", "CreateMessageData") + "> "
                    });
                    else {
                        var f = (s[1] ? "" : "https://") + e.slice(u, v);
                        if (function(e) {
                                return void 0 === e && (e = ""), m.test(e) && !e.includes("clips.twitch.tv/2017/")
                            }(f)) {
                            var g = function(e) {
                                void 0 === e && (e = "");
                                var t = e.match(m);
                                if (null === t) return "";
                                if (t && t.length > 0 && void 0 !== t.index) return t[1];
                                return ""
                            }(f);
                            o.push({
                                type: p.a.ClipLink,
                                content: {
                                    slug: g,
                                    url: f,
                                    displayText: e.slice(u, v)
                                }
                            })
                        } else if (Object(k.a)(f)) {
                            var h = Object(k.b)(f);
                            o.push({
                                type: p.a.VideoLink,
                                content: {
                                    id: h,
                                    url: f,
                                    displayText: e.slice(u, v)
                                }
                            })
                        } else o.push({
                            type: p.a.Link,
                            content: {
                                displayText: e.slice(u, v),
                                url: f
                            }
                        })
                    }
                    var y = e.slice(v),
                        b = "";
                    l < r.length - 1 && (b = " "), y && o.push({
                        type: p.a.Text,
                        content: "" + y + b
                    })
                } else {
                    if (!d) {
                        var N = o.length && o[o.length - 1];
                        b = "";
                        if (l < r.length - 1 && (b = " "), N && N.type === p.a.Text) N.content += e + b;
                        else {
                            var S = "";
                            l && (S = " "), o.push({
                                type: p.a.Text,
                                content: S + e + b
                            })
                        }
                        return
                    }
                    var C = d[3];
                    o.push({
                        type: p.a.Mention,
                        content: {
                            sender: t,
                            recipient: C
                        }
                    })
                }
            }), o
        }

        function s(e, t) {
            return "https://static-cdn.jtvnw.net/emoticons/v1/" + e + "/" + Math.min(Math.ceil(t), 3) + ".0"
        }
        var d = n("TToO"),
            c = n("6sO2"),
            u = n("iydZ"),
            p = n("mwvJ"),
            m = new RegExp("(?:^|\\s)(?:https?://)?clips.twitch.tv/(\\w+)(?:/)?(\\w+)?(?:/edit)?(?:$|\\s)?"),
            v = n("YhVV"),
            k = n("3KVC"),
            f = n("e1CU");
        t.a = function(e, t, n, o, r, l) {
            void 0 === l && (l = !1);
            var c;
            c = r ? Object(v.b)(e, r) : function(e) {
                var t = [];
                return e && Object.keys(e).forEach(function(n) {
                    var i = e[n];
                    i.forEach(function(e) {
                        t[e.startIndex] = {
                            startIndex: e.startIndex,
                            endIndex: e.endIndex + 1,
                            data: {
                                images: {
                                    themed: !1,
                                    sources: {
                                        "1x": s(n, 1),
                                        "2x": s(n, 2),
                                        "4x": s(n, 4)
                                    }
                                }
                            }
                        }
                    })
                }), t
            }(t.emotes);
            var u = Object(f.a)(t.displayName, t.username);
            return {
                badges: t.badges || {},
                bits: t.bits,
                user: d.__assign({}, u, {
                    userLogin: t.username,
                    userID: t.userID,
                    userType: t.userType,
                    color: t.color || i(t.userID)
                }),
                messageParts: e ? a(e, c, t.bits, n, o, u.userDisplayName) : [],
                deleted: l,
                timestamp: Date.now()
            }
        }, t.b = i, t.f = a, t.d = o, t.c = l, t.e = s;
        var g = ["#FF0000", "#0000FF", "#008000", "#B22222", "#FF7F50", "#9ACD32", "#FF4500", "#2E8B57", "#DAA520", "#D2691E", "#5F9EA0", "#1E90FF", "#FF69B4", "#8A2BE2", "#00FF7F"],
            h = {}
    },
    mK8J: function(e, t) {},
    mwvJ: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var i;
        ! function(e) {
            e[e.Text = 0] = "Text", e[e.Mention = 1] = "Mention", e[e.Link = 2] = "Link", e[e.Emote = 3] = "Emote", e[e.ClipLink = 4] = "ClipLink", e[e.VideoLink = 5] = "VideoLink"
        }(i || (i = {}))
    },
    oIkB: function(e, t, n) {
        "use strict";
        t.b = function(e, t) {
            var n = new Set(e.map(function(e) {
                return e.node.id
            }));
            return e.concat(t.filter(function(e) {
                return !n.has(e.node.id)
            }))
        }, t.a = function(e) {
            return {
                variables: {
                    input: e
                }
            }
        }, t.d = function(e, t, n, o) {
            void 0 === t && (t = {});
            try {
                var r = a.n.apollo.client.readQuery({
                    query: e,
                    variables: t
                });
                if (!r || o && o(r)) return;
                var l = i(r, n);
                a.n.apollo.client.writeQuery({
                    query: e,
                    variables: t,
                    data: l
                })
            } catch (e) {
                a.i.warn("Failed writing updated query to Apollo", e)
            }
        }, t.c = function(e) {
            try {
                var t = e.id,
                    n = e.fragment,
                    o = e.mutator,
                    r = a.n.apollo.client.readFragment({
                        id: t,
                        fragment: n
                    }),
                    l = i(r, o);
                a.n.apollo.client.writeFragment({
                    fragment: n,
                    id: t,
                    data: l
                })
            } catch (e) {
                a.i.warn("Failed writing updated query to Apollo", e)
            }
        };
        n("+dIz");
        var i = n("LIeg"),
            a = (n.n(i), n("6sO2"))
    },
    sEID: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return s
        }), n.d(t, "a", function() {
            return d
        });
        var i = n("U7vG"),
            a = (n.n(i), n("8Wuk")),
            o = n("yDzg"),
            r = n("WNmM"),
            l = n("Odds"),
            s = [{
                type: a.b.Twitter,
                params: {
                    tt_medium: "twtr"
                }
            }, {
                type: a.b.Facebook,
                params: {
                    tt_medium: "fb"
                }
            }, {
                type: a.b.Reddit,
                params: {
                    tt_medium: "redt"
                }
            }, {
                type: a.b.Copy
            }],
            d = function(e) {
                return i.createElement(l._2, {
                    className: "clips-social-share",
                    display: l.N.Flex,
                    flexWrap: l.Q.NoWrap
                }, s.map(function(t) {
                    return i.createElement(l._2, {
                        key: t.type,
                        margin: {
                            right: 1
                        }
                    }, i.createElement(a.a, {
                        key: t.type,
                        type: t.type,
                        text: e.clip.title,
                        url: Object(o.a)(e.clip.url, t.params),
                        onShareClick: Object(r.d)(e.clip, e.pageType)
                    }))
                }))
            }
    },
    tGx1: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "recommendedClip"
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
                            value: "title"
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
                            }]
                        }
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "viewCount"
                        },
                        arguments: [],
                        directives: []
                    }]
                }
            }, {
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ClipsRecommendations"
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
                                    }]
                                }
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "relatedClips"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "similar"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "FragmentSpread",
                                                name: {
                                                    kind: "Name",
                                                    value: "recommendedClip"
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
                                                    value: "recommendedClip"
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
                                                    value: "recommendedClip"
                                                },
                                                directives: []
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "top"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "FragmentSpread",
                                                name: {
                                                    kind: "Name",
                                                    value: "recommendedClip"
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
                end: 371
            }
        };
        n.loc.source = {
            body: "fragment recommendedClip on Clip {\nid\ntitle\nbroadcaster {\nid\ndisplayName\n}\ngame {\nid\ndisplayName\n}\nviewCount\n}\nquery ClipsRecommendations($slug: ID!) {\nclip(slug: $slug) {\nid\ngame {\nid\ndisplayName\n}\nbroadcaster {\nid\ndisplayName\n}\nrelatedClips {\nsimilar {\n...recommendedClip\n}\nbroadcaster {\n...recommendedClip\n}\ngame {\n...recommendedClip\n}\ntop {\n...recommendedClip\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    vlO0: function(e, t) {},
    vtXo: function(e, t) {},
    x4k6: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "FollowButton_User"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "login"
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
                                    value: "login"
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
                                            value: "follower"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "disableNotifications"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }]
                                }
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
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 151
            }
        };
        n.loc.source = {
            body: "query FollowButton_User($login: String!) {\nuser(login: $login) {\nid\ndisplayName\nlogin\nself {\nfollower {\ndisableNotifications\n}\n}\n}\ncurrentUser {\nid\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    xX9u: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("U7vG"),
            o = n("Odds"),
            r = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleClickHandler = function(e) {
                        t.props.onClick && t.props.onClick(), e.currentTarget.select()
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(o.Y, {
                        readOnly: !0,
                        type: o.Z.Text,
                        value: this.props.value,
                        onClick: this.handleClickHandler
                    })
                }, t
            }(a.Component);
        n.d(t, "a", function() {
            return r
        })
    },
    xwy4: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "Add_Clip_Reaction"
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
                                value: "AddReactionInput"
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
                            value: "addReaction"
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
                                    value: "content"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "InlineFragment",
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
                                                    value: "reactions"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "emote"
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
                                                                    value: "token"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "count"
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
                                                                    value: "hasReacted"
                                                                },
                                                                arguments: [],
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
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 178
            }
        };
        n.loc.source = {
            body: "mutation Add_Clip_Reaction($input: AddReactionInput!) {\naddReaction(input: $input) {\ncontent {\n... on Clip {\nid\nreactions {\nemote {\nid\ntoken\n}\ncount\nself {\nhasReacted\n}\n}\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    }
});
//# sourceMappingURL=sites.clips.pages.clips-watch-2467a7b12e6cf925e9323b5f2efdd4ee.js.map