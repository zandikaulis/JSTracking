webpackJsonp([54], {
    "+Znq": function(e, n, t) {
        "use strict";
        var i = t("jetF");
        t.d(n, "a", function() {
            return i.a
        })
    },
    "0CQq": function(e, n) {
        var t = {
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
        t.loc.source = {
            body: "query ClipsViewCount($slug: ID!) {\nclip(slug: $slug) {\nid\nviewCount\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = t
    },
    "0Kuu": function(e, n) {
        var t = {
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
        t.loc.source = {
            body: "query ClipsTitle($slug: ID!) {\nclip(slug: $slug) {\nid\ntitle\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = t
    },
    "0QL4": function(e, n) {
        var t = {
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
        t.loc.source = {
            body: "query ClipsCurator($slug: ID!) {\nclip(slug: $slug) {\nid\ncurator {\nid\ndisplayName\nlogin\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = t
    },
    "287o": function(e, n, t) {
        "use strict";
        t.d(n, "a", function() {
            return i
        });
        var i;
        ! function(e) {
            e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove"
        }(i || (i = {}))
    },
    "2BvQ": function(e, n) {
        var t = {
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
        t.loc.source = {
            body: "query Core_Services_Spade_Video($id: ID!) {\nvideo(id: $id) {\nid\nbroadcastType\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = t
    },
    "2hJ3": function(e, n, t) {
        "use strict";
        n.a = function(e) {
            var n = document.createElement("textarea");
            n.style.position = "fixed", n.style.top = "0", n.style.left = "0", n.style.width = "2em", n.style.height = "2em", n.style.padding = "0", n.style.border = "none", n.style.outline = "none", n.style.boxShadow = "none", n.style.background = "transparent", n.value = e, document.body.appendChild(n), n.select();
            var t = !0;
            try {
                t = document.execCommand("copy")
            } catch (e) {
                t = !1
            }
            return document.body.removeChild(n), t
        }
    },
    "3Fw+": function(e, n, t) {
        "use strict";
        n.a = function(e) {
            if (e < 0) return "";
            if (0 === e) return i;
            var n = e,
                t = Math.floor(n / 3600);
            return n %= 3600, t + "h" + Math.floor(n / 60) + "m" + (n %= 60) + "s"
        };
        var i = "0h0m1s"
    },
    "3ydF": function(e, n) {},
    "8Wuk": function(e, n, t) {
        "use strict";
        var i = t("TToO"),
            a = t("U7vG"),
            o = t("6sO2"),
            l = t("2hJ3"),
            r = t("yDzg"),
            s = "https://www.facebook.com/sharer/sharer.php",
            d = "https://www.twitter.com/share",
            c = "https://www.reddit.com/submit",
            u = "https://vk.com/share.php",
            p = t("Odds");
        t("bdk8");
        t.d(n, "b", function() {
            return m
        }), t.d(n, "a", function() {
            return k
        });
        var m;
        ! function(e) {
            e[e.Twitter = 0] = "Twitter", e[e.Reddit = 1] = "Reddit", e[e.VKontakte = 2] = "VKontakte", e[e.Facebook = 3] = "Facebook", e[e.Copy = 4] = "Copy", e[e.CopyInput = 5] = "CopyInput"
        }(m || (m = {}));
        var k = function(e) {
            function n(n) {
                var t = e.call(this, n) || this;
                return t.renderLink = function() {
                    var e = "social-button__link " + t.addSocialClassModifier("social-button__link");
                    return t.isLink() ? a.createElement("a", i.__assign({
                        href: t.getLinkTarget(),
                        target: "_blank",
                        className: e,
                        onClick: t.onShareClickHandler
                    }, Object(p._53)(t.props)), t.renderIcon()) : a.createElement("button", i.__assign({
                        onClick: t.copyPageUrl,
                        onMouseLeave: t.clearIsCopiedStatus,
                        className: e
                    }, Object(p._53)(t.props)), t.renderIcon())
                }, t.onShareClickHandler = function() {
                    t.props.onShareClick && t.props.onShareClick(t.props.type)
                }, t.clearIsCopiedStatus = function() {
                    t.setState({
                        isCopied: !1
                    })
                }, t.getUrl = function() {
                    return t.props.url || window.location.href
                }, t.copyPageUrl = function(e) {
                    e && e.preventDefault(), t.props.onShareClick && t.props.onShareClick(t.props.type), Object(l.a)(t.getUrl()), t.setState({
                        isCopied: !0
                    })
                }, t.renderIcon = function() {
                    var e = t.getAssetFromType();
                    return a.createElement(p._2, {
                        className: "social-button__icon " + t.addSocialClassModifier("social-button__icon")
                    }, a.createElement(p._15, {
                        asset: e,
                        width: 30,
                        height: 30
                    }))
                }, t.isLink = function() {
                    return t.props.type !== m.Copy
                }, t.getTooltipFromType = function() {
                    switch (t.props.type) {
                        case m.Twitter:
                            return "Twitter";
                        case m.Reddit:
                            return "Reddit";
                        case m.Facebook:
                            return "Facebook";
                        case m.VKontakte:
                            return "VKontakte";
                        case m.Copy:
                            return t.state.isCopied ? Object(o.d)("Copied", "SocialButton") : Object(o.d)("Copy to clipboard", "SocialButton");
                        default:
                            return ""
                    }
                }, t.getAssetFromType = function() {
                    switch (t.props.type) {
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
                }, t.addSocialClassModifier = function(e) {
                    switch (t.props.type) {
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
                }, t.getLinkTarget = function() {
                    var e = t.props,
                        n = e.text,
                        i = e.type,
                        a = t.getUrl(),
                        o = n || "";
                    switch (i) {
                        case m.Reddit:
                            return function(e, n) {
                                return Object(r.a)(c, {
                                    url: e,
                                    title: n
                                })
                            }(a, o);
                        case m.VKontakte:
                            return function(e) {
                                return Object(r.a)(u, {
                                    url: e
                                })
                            }(a);
                        case m.Facebook:
                            return function(e) {
                                return Object(r.a)(s, {
                                    u: e
                                })
                            }(a);
                        case m.Twitter:
                            return function(e, n) {
                                return Object(r.a)(d, {
                                    url: e,
                                    text: n
                                })
                            }(a, o);
                        default:
                            return ""
                    }
                }, t.state = {
                    isCopied: !1
                }, t
            }
            return i.__extends(n, e), n.prototype.render = function() {
                return a.createElement(p._2, {
                    className: "social-button"
                }, a.createElement(p._43, {
                    label: this.getTooltipFromType(),
                    direction: p._45.Top
                }, this.renderLink()))
            }, n
        }(a.Component)
    },
    Fg4Y: function(e, n, t) {
        "use strict";

        function i(e) {
            return "https://www.twitch.tv/" + e
        }

        function a(e) {
            return function(e) {
                return i(N.c(e))
            }(e) + "/clips"
        }

        function o(e) {
            return i("/" + e)
        }

        function l(e) {
            return "endorse" === e ? "1" : e
        }

        function r(e) {
            return "" + S + l(e) + "/2.0"
        }

        function s(e) {
            return C.test(e)
        }

        function d(e, n) {
            var t = Object(b.a)(function(e) {
                return o(e) + "/clips"
            }(e), {
                tt_content: n
            });
            return s(window.navigator.userAgent) ? w(e, t) : t
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var c, u = t("TToO"),
            p = t("U7vG"),
            m = t("6sO2"),
            k = t("7vx8"),
            v = t("CSlQ"),
            f = t("Odds"),
            g = t("tGx1");
        ! function(e) {
            e.top = "top", e.similar = "similar", e.game = "game", e.broadcaster = "broadcaster", e.curator = "curator"
        }(c || (c = {}));
        var h = function(e) {
                function n() {
                    var n = null !== e && e.apply(this, arguments) || this;
                    return n.renderRowTypesOrdered = [c.similar, c.broadcaster, c.game, c.top], n.renderRow = function(e) {
                        return p.createElement("div", {
                            key: e
                        }, function(e, n) {
                            switch (e) {
                                case c.top:
                                    return Object(m.d)("Popular Clips", "ClipsRecommendations");
                                case c.similar:
                                    return Object(m.d)("Similar Clips", "ClipsRecommendations");
                                case c.game:
                                    return Object(m.d)("Popular Clips from {game}", {
                                        game: n.data.clip.game.displayName
                                    }, "ClipsRecommendations");
                                case c.broadcaster:
                                    return Object(m.d)("Popular Clips from {channel}", {
                                        channel: n.data.clip.broadcaster.displayName
                                    }, "ClipsRecommendations");
                                default:
                                    return null
                            }
                        }(e, n.props), n.props.data.clip.relatedClips[e].map(n.renderClip))
                    }, n.renderClip = function(e) {
                        return p.createElement("div", {
                            key: e.id
                        }, e.id)
                    }, n
                }
                return u.__extends(n, e), n.prototype.render = function() {
                    return this.props.data.clip ? p.createElement(f._2, null, this.renderRowTypesOrdered.map(this.renderRow)) : p.createElement(f._2, null)
                }, n = u.__decorate([Object(v.d)("ClipsRecommendations"), Object(k.a)(g)], n)
            }(p.Component),
            y = t("hdYS"),
            b = t("yDzg"),
            N = t("NY9D"),
            S = "https://static-cdn.jtvnw.net/emoticons/v1/",
            w = function(e, n) {
                return "intent://stream/" + e + "#Intent;scheme=twitch;package=tv.twitch.android.app;S.browser_fallback_url=" + n + ";end"
            },
            C = /Android/i,
            F = t("U5tC"),
            _ = function(e) {
                function n() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return u.__extends(n, e), n.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, n.prototype.componentDidUpdate = function() {
                    this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                }, n.prototype.render = function() {
                    return this.props.data.clip ? p.createElement(f._2, null, p.createElement("a", {
                        target: "_blank",
                        href: d(this.props.data.clip.broadcaster.login, "player_profile_img")
                    }, p.createElement(f.l, {
                        src: this.props.data.clip.broadcaster.profileImageURL,
                        alt: Object(m.d)("Broadcaster Avatar", "ClipsBroadcasterInfo"),
                        size: 30
                    })), p.createElement("a", {
                        href: d(this.props.data.clip.broadcaster.login, "player_profile_img")
                    }, this.props.data.clip.broadcaster.displayName, !!this.props.data.clip.broadcaster.stream && p.createElement(f._6, {
                        label: Object(m.d)("LIVE", "ClipsBroadcasterInfo"),
                        type: f._7.Live
                    })), this.props.data.clip.game && Object(m.d)("playing {gameName}", {
                        gameName: p.createElement("a", {
                            target: "_blank",
                            href: Object(b.a)(a(this.props.data.clip.game.name), {
                                tt_medium: "clips_web"
                            })
                        }, this.props.data.clip.game.displayName)
                    }, "ClipsBroadcasterInfo"), p.createElement(y.a, {
                        isHostedFollow: !1,
                        channelLogin: this.props.data.clip.broadcaster.login
                    })) : p.createElement(f._2, null)
                }, n = u.__decorate([Object(v.d)("ClipsBroadcasterInfo"), Object(k.a)(F)], n)
            }(p.Component),
            I = t("3Fw+"),
            D = t("J4ib"),
            O = t("dQ/z"),
            E = function(e) {
                function n() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return u.__extends(n, e), n.prototype.componentDidMount = function() {
                    this.reportInteractive()
                }, n.prototype.componentDidUpdate = function() {
                    this.reportInteractive()
                }, n.prototype.render = function() {
                    if (!this.props.data.clip) return p.createElement(f._2, null);
                    var e;
                    return e = this.props.data.clip.video ? p.createElement(f.u, {
                        targetBlank: !0,
                        linkTo: Object(b.a)(function(e) {
                            return i("/videos/" + e)
                        }(this.props.data.clip.video.id), {
                            t: Object(I.a)(this.props.data.clip.video.offsetSeconds),
                            tt_medium: "clips_web",
                            tt_content: "full_vod_button"
                        })
                    }, Object(D.d)("Watch Full Video", "ClipsFullVideoButton")) : p.createElement(f.u, {
                        disabled: !0
                    }, Object(D.d)("Full Video Unavailable", "ClipsFullVideoButton")), p.createElement(f._2, null, e)
                }, n.prototype.reportInteractive = function() {
                    this.props.data.clip && this.props.latencyTracking.reportInteractive()
                }, n = u.__decorate([Object(v.d)("ClipsFullVideoButton"), Object(k.a)(O)], n)
            }(p.Component),
            R = t("YJNl"),
            T = function(e) {
                function n() {
                    var n = null !== e && e.apply(this, arguments) || this;
                    return n.state = {}, n
                }
                return u.__extends(n, e), n.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, n.prototype.render = function() {
                    return this.props.data.loading || this.props.data.error ? p.createElement(f._2, null) : p.createElement(f._2, null, "ClipsChatReplay")
                }, n = u.__decorate([Object(v.d)("ClipsChatReplay"), Object(k.a)(R)], n)
            }(p.Component),
            j = t("0QL4"),
            x = function(e) {
                function n() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return u.__extends(n, e), n.prototype.componentDidMount = function() {
                    this.reportInteractive()
                }, n.prototype.componentDidUpdate = function() {
                    this.reportInteractive()
                }, n.prototype.render = function() {
                    if (!this.props.data.clip) return p.createElement(f._2, null);
                    var e = Object(b.a)(o(this.props.data.clip.curator.login), {
                        tt_medium: "clips_web",
                        tt_content: "curator_name"
                    });
                    return p.createElement(f._2, null, Object(m.d)("clipped by {curatorName}", {
                        curatorName: p.createElement("a", {
                            href: e,
                            target: "_blank"
                        }, this.props.data.clip.curator.displayName)
                    }, "ClipsCurator"))
                }, n.prototype.reportInteractive = function() {
                    this.props.data.clip && this.props.latencyTracking.reportInteractive()
                }, n = u.__decorate([Object(v.d)("ClipsCurator"), Object(k.a)(j)], n)
            }(p.Component),
            L = t("0Kuu"),
            V = function(e) {
                function n() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return u.__extends(n, e), n.prototype.componentDidMount = function() {
                    this.reportInteractive()
                }, n.prototype.componentDidUpdate = function() {
                    this.reportInteractive()
                }, n.prototype.render = function() {
                    return this.props.data.clip ? p.createElement(f._2, null, this.props.data.clip.title) : p.createElement(f._2, null)
                }, n.prototype.reportInteractive = function() {
                    this.props.data.clip && this.props.latencyTracking.reportInteractive()
                }, n = u.__decorate([Object(v.d)("ClipsTitle"), Object(k.a)(L)], n)
            }(p.Component),
            U = t("0CQq"),
            B = function(e) {
                function n() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return u.__extends(n, e), n.prototype.componentDidMount = function() {
                    this.reportInteractive()
                }, n.prototype.componentDidUpdate = function() {
                    this.reportInteractive()
                }, n.prototype.render = function() {
                    return this.props.data.clip ? p.createElement(f._2, null, !this.props.hideSymbol && p.createElement(f._15, {
                        asset: f._16.GlyphViews,
                        type: f._17.Brand
                    }), Object(m.d)("{views} views", {
                        views: Object(m.e)(this.props.data.clip.viewCount)
                    }, "ClipsViewCount")) : p.createElement(f._2, null)
                }, n.prototype.reportInteractive = function() {
                    this.props.data.clip && this.props.latencyTracking.reportInteractive()
                }, n = u.__decorate([Object(v.d)("ClipsViewCount"), Object(k.a)(U)], n)
            }(p.Component),
            q = function(e) {
                function n() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return u.__extends(n, e), n.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, n.prototype.render = function() {
                    return p.createElement(f._2, null, p.createElement(B, {
                        slug: "FrailQuaintHeronRuleFive"
                    }), p.createElement(V, {
                        slug: "FrailQuaintHeronRuleFive"
                    }), p.createElement(x, {
                        slug: "FrailQuaintHeronRuleFive"
                    }), p.createElement(T, null))
                }, n
            }(p.Component),
            A = Object(v.d)("ClipsInfoCard")(q),
            Q = function(e) {
                function n() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return u.__extends(n, e), n.prototype.render = function() {
                    return p.createElement(f._2, null, p.createElement(V, {
                        slug: this.props.slug
                    }), p.createElement(B, {
                        slug: this.props.slug,
                        hideSymbol: !0
                    }))
                }, n
            }(p.Component),
            G = Object(v.d)("ClipsInfoMini", {
                autoReportInteractive: !0
            })(Q),
            M = t("RH2O"),
            P = t("2KeS"),
            $ = t("+xm8"),
            H = t("f2i/"),
            W = t("Aj/L"),
            z = t("oIkB"),
            K = t("287o"),
            Y = function() {
                function e(e) {
                    var n = this;
                    this.timerId = null, this.start = function() {
                        n.timerId && n.stop(), n.timerId = setInterval(n.onInterval, n.intervalMillis)
                    }, this.stop = function() {
                        n.timerId && (clearInterval(n.timerId), n.timerId = null)
                    }, this.onInterval = e.onInterval, this.intervalMillis = e.intervalMillis
                }
                return e.prototype.restart = function() {
                    this.start()
                }, e
            }(),
            J = t("wLXg"),
            X = function(e) {
                function n() {
                    var n = null !== e && e.apply(this, arguments) || this;
                    return n.state = {}, n
                }
                return u.__extends(n, e), n.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, n.prototype.render = function() {
                    return this.props.data.loading || this.props.data.error ? p.createElement(f._2, null) : p.createElement(f._2, null, "ClipsEmotePicker")
                }, n = u.__decorate([Object(v.d)("ClipsEmotePicker"), Object(k.a)(J)], n)
            }(p.Component),
            Z = t("xwy4"),
            ee = t("jFCw"),
            ne = t("hMIs"),
            te = 3e3,
            ie = {
                count: 0,
                emote: {
                    id: "62835",
                    token: "bleedPurple"
                },
                self: {
                    hasReacted: !1
                }
            },
            ae = function(e) {
                function n(n) {
                    var t = e.call(this, n) || this;
                    return t.state = {
                        activeReactionIndex: 0,
                        sortedReactions: []
                    }, t.hasInitializedSortedReactions = !1, t.showNextReaction = function() {
                        t.getActiveReaction() ? t.setState({
                            activeReactionIndex: t.getNextValidReactionIndex()
                        }) : t.setState({
                            activeReactionIndex: 0
                        })
                    }, t.addClipReaction = function() {
                        t.getActiveReaction() && t.toggleReaction(K.a.Add, t.getActiveReaction().emote.id)
                    }, t.removeClipReaction = function() {
                        t.getActiveReaction() && t.toggleReaction(K.a.Remove, t.getActiveReaction().emote.id)
                    }, t.toggleReaction = function(e, n) {
                        if (!t.props.isLoggedIn) return t.props.login(), Promise.reject(new Error("user not logged in"));
                        t.updateReactionLocal(e, n);
                        return (e === K.a.Add ? t.props.addClipReaction : t.props.removeClipReaction)(Object(z.a)({
                            entityID: "clip:" + t.props.slug.toLowerCase(),
                            emoteID: n
                        }))
                    }, t.getActiveReaction = function() {
                        return t.state.sortedReactions[t.state.activeReactionIndex]
                    }, t.getNextValidReactionIndex = function() {
                        var e = t.state.activeReactionIndex + 1;
                        return e >= t.state.sortedReactions.length ? 0 : e
                    }, t.reactionCarouselTimer = new Y({
                        intervalMillis: te,
                        onInterval: t.showNextReaction
                    }), t
                }
                return u.__extends(n, e), n.prototype.componentDidMount = function() {
                    this.initializeSortedReactions()
                }, n.prototype.componentWillReceiveProps = function(e) {
                    this.initializeSortedReactions(e)
                }, n.prototype.render = function() {
                    var e = this.getActiveReaction();
                    return p.createElement(f._2, null, e && p.createElement("button", {
                        onClick: e.self.hasReacted ? this.removeClipReaction : this.addClipReaction,
                        onMouseEnter: this.reactionCarouselTimer.stop,
                        onMouseLeave: this.reactionCarouselTimer.start,
                        "data-test-selector": "reaction-carousel-button"
                    }, p.createElement("img", {
                        src: r(e.emote.id)
                    }), e.count, e.self.hasReacted ? "react!" : "did not react"), p.createElement(X, null))
                }, n.prototype.initializeSortedReactions = function(e) {
                    if (void 0 === e && (e = this.props), e.data.clip && e.data.clip.reactions && !this.hasInitializedSortedReactions) {
                        this.hasInitializedSortedReactions = !0;
                        var n = 0 === e.data.clip.reactions.length ? [ie] : e.data.clip.reactions.slice().sort(function(e, n) {
                            return n.count - e.count
                        });
                        this.setState({
                            sortedReactions: n
                        }), this.reactionCarouselTimer.start(), this.props.latencyTracking.reportInteractive()
                    }
                }, n.prototype.updateReactionLocal = function(e, n) {
                    var t = this.state.sortedReactions.findIndex(function(e) {
                            return e.emote.id === n
                        }),
                        i = this.state.sortedReactions[t],
                        a = e === K.a.Add,
                        o = {
                            count: i.count + (a ? 1 : -1),
                            emote: i.emote,
                            self: {
                                hasReacted: a
                            }
                        },
                        l = this.state.sortedReactions.slice();
                    l.splice(t, 1, o), this.setState({
                        sortedReactions: l
                    }), this.nextClickTimerId && clearInterval(this.nextClickTimerId), this.nextClickTimerId = setTimeout(this.showNextReaction, 1e3)
                }, n = u.__decorate([Object(k.a)(Z, {
                    name: "addClipReaction"
                }), Object(k.a)(ne, {
                    name: "removeClipReaction"
                }), Object(k.a)(ee), Object(v.d)("ClipsReactionCarousel")], n)
            }(p.Component),
            oe = Object(M.b)(function(e) {
                return {
                    isLoggedIn: Object(W.d)(e)
                }
            }, function(e) {
                return Object(P.b)({
                    login: function() {
                        return Object(H.f)($.a.FeedReactionToggle)
                    }
                }, e)
            })(ae),
            le = function(e) {
                function n() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return u.__extends(n, e), n.prototype.render = function() {
                    return p.createElement(f._2, null, p.createElement(_, {
                        slug: "FrailQuaintHeronRuleFive"
                    }), p.createElement(G, {
                        slug: "FrailQuaintHeronRuleFive"
                    }), p.createElement(A, null), p.createElement(oe, {
                        slug: "FrailQuaintHeronRuleFive"
                    }), p.createElement(E, {
                        slug: "FrailQuaintHeronRuleFive"
                    }))
                }, n
            }(p.Component),
            re = Object(v.d)("ClipsSidebar", {
                autoReportInteractive: !0
            })(le),
            se = t("xX9u"),
            de = t("8Wuk"),
            ce = t("+Znq"),
            ue = t("sEID"),
            pe = t("bnNq"),
            me = function(e) {
                function n() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return u.__extends(n, e), n.prototype.componentDidMount = function() {
                    this.reportInteractive()
                }, n.prototype.componentDidUpdate = function() {
                    this.reportInteractive()
                }, n.prototype.render = function() {
                    var e = this;
                    if (!this.props.data.clip) return p.createElement(f._2, null);
                    var n = Object(m.d)("More", "ClipsSocialShare");
                    return p.createElement(f._2, null, ue.b.map(function(n) {
                        return p.createElement(f._2, {
                            display: f.N.InlineBlock,
                            key: n.type,
                            margin: {
                                right: 1
                            }
                        }, p.createElement(de.a, {
                            key: n.type,
                            type: n.type,
                            text: e.props.data.clip.title,
                            url: Object(b.a)(e.props.data.clip.url, n.params)
                        }))
                    }), p.createElement(f._2, {
                        display: f.N.InlineBlock,
                        position: f._9.Relative
                    }, p.createElement(ce.a, null, p.createElement(f.u, {
                        type: f.z.Hollow,
                        ariaLabel: n,
                        "data-test-selector": "social-share-button"
                    }, n), p.createElement(f.p, {
                        direction: f.q.BottomRight,
                        noTail: !0
                    }, p.createElement(f.S, {
                        id: "social-share-link",
                        orientation: f.T.Vertical,
                        label: Object(m.d)("Link", "ClipsSocialShare"),
                        "data-test-selector": "social-share-link"
                    }, p.createElement(se.a, {
                        value: this.props.data.clip.url
                    })), p.createElement(f.S, {
                        id: "social-share-embed-link",
                        orientation: f.T.Vertical,
                        label: Object(m.d)("Embed Code", "ClipsSocialShare")
                    }, p.createElement(se.a, {
                        value: this.props.data.clip.embedURL
                    }))))))
                }, n.prototype.reportInteractive = function() {
                    this.props.data.clip && this.props.latencyTracking.reportInteractive()
                }, n = u.__decorate([Object(v.d)("ClipsSocialShare"), Object(k.a)(pe)], n)
            }(p.Component),
            ke = t("BzvE"),
            ve = {},
            fe = "player-storage-added",
            ge = "player-storage-removed",
            he = new ke.EventEmitter,
            ye = function(e) {
                function n() {
                    var n = null !== e && e.apply(this, arguments) || this;
                    return n.setPlayerRef = function(e) {
                        n.playerRef = e
                    }, n
                }
                return u.__extends(n, e), n.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive(), this.playerRef && function(e, n) {
                        ve[e] = n, he.emit(fe)
                    }(this.props.slug, this.playerRef.contentWindow), this.props.latencyTracking.reportInteractive()
                }, n.prototype.componentWillUnmount = function() {
                    ! function(e) {
                        delete ve[e], he.emit(ge)
                    }(this.props.slug)
                }, n.prototype.render = function() {
                    return p.createElement(f._2, null, p.createElement("iframe", {
                        src: "https://player.twitch.tv/?player=clips-embed&clip=" + this.props.slug,
                        width: "640",
                        height: "360",
                        frameBorder: "0",
                        scrolling: "no",
                        allowFullScreen: !0,
                        ref: this.setPlayerRef
                    }))
                }, n = u.__decorate([Object(v.d)("ClipsVideoIframe")], n)
            }(p.Component),
            be = function(e) {
                function n() {
                    var n = null !== e && e.apply(this, arguments) || this;
                    return n.state = {}, n
                }
                return u.__extends(n, e), n.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, n.prototype.render = function() {
                    return p.createElement(f._2, null, p.createElement(ye, {
                        slug: "FrailQuaintHeronRuleFive"
                    }))
                }, n = u.__decorate([Object(v.d)("ClipsVideoPlayer")], n)
            }(p.Component),
            Ne = function(e) {
                function n() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return u.__extends(n, e), n.prototype.render = function() {
                    return p.createElement(f._2, null, p.createElement(me, {
                        slug: "FrailQuaintHeronRuleFive"
                    }), p.createElement(be, null), p.createElement(re, null), p.createElement(h, {
                        slug: "FrailQuaintHeronRuleFive"
                    }))
                }, n
            }(p.Component);
        t.d(n, "ClipsWatch", function() {
            return Ne
        })
    },
    NY9D: function(e, n, t) {
        "use strict";
        n.c = function(e) {
            return "/directory/game/" + encodeURIComponent(e)
        }, n.a = function(e) {
            return "/communities/" + encodeURIComponent(e)
        }, n.b = function(e) {
            return "/events/" + encodeURIComponent(e)
        }, n.d = function(e) {
            return "/" + encodeURIComponent(e) + "/manager"
        }
    },
    SUA7: function(e, n) {
        var t = {
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
        t.loc.source = {
            body: "mutation FollowButton_UnfollowUser($input: UnfollowUserInput!) {\nunfollowUser(input: $input) {\nfollow {\ndisableNotifications\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = t
    },
    U5tC: function(e, n) {
        var t = {
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
        t.loc.source = {
            body: "query ClipsBroadcasterInfo($slug: ID!) {\nclip(slug: $slug) {\nid\ngame {\nid\nname\ndisplayName\n}\nbroadcaster {\nid\nprofileImageURL(width: 28)\ndisplayName\nlogin\nstream {\nid\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = t
    },
    VNvG: function(e, n) {
        var t = {
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
        t.loc.source = {
            body: "mutation FollowButton_FollowUser($input: FollowUserInput!) {\nfollowUser(input: $input) {\nfollow {\ndisableNotifications\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = t
    },
    WNmM: function(e, n, t) {
        "use strict";
        t.d(n, "a", function() {
            return s
        }), t.d(n, "b", function() {
            return d
        }), t.d(n, "d", function() {
            return u
        }), t.d(n, "c", function() {
            return p
        });
        var i, a = t("6sO2"),
            o = t("8Wuk"),
            l = t("vH/s"),
            r = (i = {}, i[o.b.Twitter] = "twitter", i[o.b.Reddit] = "reddit", i[o.b.VKontakte] = "vkontakte", i[o.b.Facebook] = "facebook", i[o.b.Copy] = "link", i[o.b.CopyInput] = "option_link", i),
            s = {
                MyClips: "MyClips",
                ClipsOfMyChannel: "ClipsOfMyChannel"
            },
            d = {
                Game: "TopClipsGame",
                Channel: "TopClipsChannel"
            },
            c = {
                MyClips: l.PageviewLocation.MyClipsManager,
                ClipsOfMyChannel: l.PageviewLocation.ChannelClipsManager,
                TopClipsGame: l.PageviewLocation.ClipsGame,
                TopClipsChannel: l.PageviewLocation.ChannelClips
            },
            u = function(e, n) {
                return function(t) {
                    a.n.tracking.track(l.SpadeEventType.VideoShare, {
                        vod_id: e.id,
                        vod_type: "clip",
                        share_platform: r[t],
                        location: c[n],
                        game: e.game ? e.game.name : null,
                        channel_id: e.broadcaster ? Number(e.broadcaster.id) : 0,
                        channel: e.broadcaster ? e.broadcaster.login : "",
                        live: null
                    })
                }
            },
            p = function(e) {
                var n = e.targetURL,
                    t = e.type;
                a.n.tracking.track(l.SpadeEventType.ClipChampHelpClick, {
                    target_url: n,
                    type: t.toLowerCase()
                })
            }
    },
    YJNl: function(e, n) {
        var t = {
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
        t.loc.source = {
            body: '# Documentation about how to use GraphQL is located in the Data Access Guide:\n# https://git-aws.internal.justin.tv/pages/twilight/twilight-docs/docs/guides/data-access.html\n# Additionally use the GraphQL explorer (https://api.twitch.tv/gql/explore) to browse\n# available GraphQL data and construct your query.\nquery ClipsChatReplay {\nuser(login: "lirik") {\nid\ndisplayName\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = t
    },
    YugT: function(e, n) {
        var t = {
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
        t.loc.source = {
            body: "query FollowButton_FollowEvent_User($id: ID!) {\nuser(id: $id) {\nid\nisPartner\nstream {\nid\ngame {\nid\nname\n}\n}\nhosting {\nid\nstream {\nid\ngame {\nid\nname\n}\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = t
    },
    bdk8: function(e, n) {},
    bnNq: function(e, n) {
        var t = {
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
        t.loc.source = {
            body: "query ClipsSocialShare($slug: ID!) {\nclip(slug: $slug) {\nid\nurl\nembedURL\ntitle\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = t
    },
    "dQ/z": function(e, n) {
        var t = {
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
        t.loc.source = {
            body: "query ClipsFullVideoButton($slug: ID!) {\nclip(slug: $slug) {\nid\nvideo {\nid\noffsetSeconds\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = t
    },
    hMIs: function(e, n) {
        var t = {
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
        t.loc.source = {
            body: "mutation Remove_Clip_Reaction($input: RemoveReactionInput!) {\nremoveReaction(input: $input) {\ncontent {\n... on Clip {\nid\nreactions {\nemote {\nid\ntoken\n}\ncount\nself {\nhasReacted\n}\n}\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = t
    },
    hdYS: function(e, n, t) {
        "use strict";
        var i = t("RH2O"),
            a = t("2KeS"),
            o = t("+xm8"),
            l = t("f2i/"),
            r = t("Aj/L"),
            s = t("TToO"),
            d = t("U7vG"),
            c = t("6sO2"),
            u = t("+Znq"),
            p = t("7vx8"),
            m = t("oIkB"),
            k = t("2BvQ"),
            v = t("xrVp"),
            f = t("YugT"),
            g = {
                Channel: "channel"
            },
            h = t("vH/s"),
            y = t("CSlQ"),
            b = t("Odds"),
            N = t("VNvG"),
            S = (t("3ydF"), t("SUA7")),
            w = t("x4k6"),
            C = function(e) {
                function n() {
                    var n = null !== e && e.apply(this, arguments) || this;
                    return n.state = {
                        isFollowing: !1,
                        showDropdown: !1,
                        disableNotifications: !0
                    }, n.userDataLoaded = function() {
                        return n.props.data && !n.props.data.loading && !n.props.data.error && n.props.data.user
                    }, n.toggleFollowing = function() {
                        var e;
                        n.state.isFollowing ? (n.unfollowUser(), e = h.SpadeEventType.Unfollow) : (n.followUser(), e = h.SpadeEventType.Follow);
                        var t = n.getFollowData();
                        t && function(e, n) {
                            s.__awaiter(this, void 0, void 0, function() {
                                var t, i, a, o, l, r, d, u, p, m;
                                return s.__generator(this, function(s) {
                                    switch (s.label) {
                                        case 0:
                                            if (t = null, i = null, a = null, o = null, l = null, !n.channelID) return [3, 5];
                                            s.label = 1;
                                        case 1:
                                            return s.trys.push([1, 3, , 4]), [4, c.n.apollo.client.query({
                                                query: f,
                                                variables: {
                                                    id: n.channelID
                                                }
                                            })];
                                        case 2:
                                            return o = s.sent(), [3, 4];
                                        case 3:
                                            return d = s.sent(), c.i.error(d, "Failed to make query for channel info in FollowEvent reporting.", {
                                                channelID: n.channelID
                                            }), [3, 4];
                                        case 4:
                                            (a = o && o.data && o.data.user) ? l = a.hosting.stream && a.hosting.stream.game ? a.hosting.stream.game.name : a.stream && a.stream.game && a.stream.game.name: c.i.error(new Error("GraphQL empty response"), "Query for channel info in FollowEvent reporting return no data.", {
                                                channelID: n.channelID
                                            }), s.label = 5;
                                        case 5:
                                            if (!(u = c.m.getVideoPlayerTrackingData().vodID)) return [3, 10];
                                            s.label = 6;
                                        case 6:
                                            return s.trys.push([6, 8, , 9]), [4, c.n.apollo.client.query({
                                                query: k,
                                                variables: {
                                                    id: u
                                                }
                                            })];
                                        case 7:
                                            return t = s.sent(), [3, 9];
                                        case 8:
                                            return p = s.sent(), c.i.error(p, "Failed to make query for VOd info in FollowEvent reporting.", {
                                                currentVODID: u
                                            }), [3, 9];
                                        case 9:
                                            (i = t && t.data && t.data.video) ? r = Object(v.a)(i.broadcastType): (r = null, c.i.error(new Error("GraphQL empty response"), "Query for video info in FollowEvent reporting return no data.", {
                                                currentVODID: u
                                            })), s.label = 10;
                                        case 10:
                                            return m = {
                                                channel: n.channelLogin,
                                                channel_id: n.channelID,
                                                channel_game: l,
                                                cta_visible: c.m.getVideoPlayerTrackingData().followCTAVisible,
                                                host_channel: n.hostChannelLogin,
                                                host_channel_id: n.hostChannelID,
                                                game: n.game,
                                                partner: a ? a.isPartner : null,
                                                src: n.src,
                                                vod_id: u,
                                                vod_type: r
                                            }, c.m.track(e, m), [2]
                                    }
                                })
                            })
                        }(e, {
                            channelLogin: t.user.login,
                            channelID: t.user.id,
                            hostChannelLogin: n.props.hostChannelLogin,
                            hostChannelID: n.props.hostChannelID,
                            src: g.Channel
                        }), n.setState(function(e) {
                            return {
                                isFollowing: !e.isFollowing,
                                disableNotifications: !1
                            }
                        })
                    }, n.followUser = function() {
                        var e = n.getFollowData();
                        if (n.props.followUser && e) {
                            n.setState({
                                showDropdown: !0
                            });
                            var t = s.__assign({}, Object(m.a)({
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
                            n.props.followUser(t).then(function(e) {
                                Object(m.d)(w, {
                                    login: n.props.channelLogin
                                }, function(n) {
                                    return n.user.self.follower.disableNotifications = e.data.followUser.follow.disableNotifications, n
                                })
                            })
                        }
                    }, n.unfollowUser = function() {
                        var e = n.getFollowData();
                        if (n.props.unfollowUser && e) {
                            var t = s.__assign({}, Object(m.a)({
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
                            n.props.unfollowUser(t).then(function() {
                                Object(m.d)(w, {
                                    login: n.props.channelLogin
                                }, function(e) {
                                    return e.user.self.follower.disableNotifications = null, e
                                })
                            })
                        }
                    }, n.toggleNotificationsEnabled = function() {
                        var e = n.getFollowData();
                        if (n.props.followUser && e) {
                            var t = s.__assign({}, Object(m.a)({
                                disableNotifications: !n.state.disableNotifications,
                                targetID: e.user.id
                            }), {
                                optimisticResponse: {
                                    followUser: {
                                        __typename: "FollowUserPayload",
                                        follow: {
                                            disableNotifications: !n.state.disableNotifications,
                                            __typename: "Follow"
                                        }
                                    }
                                }
                            });
                            n.props.followUser(t).then(function(e) {
                                Object(m.d)(w, {
                                    login: n.props.channelLogin
                                }, function(n) {
                                    return n.user.self.follower.disableNotifications = e.data.followUser.follow.disableNotifications, n
                                })
                            }), n.setState(function(e) {
                                return {
                                    disableNotifications: !e.disableNotifications
                                }
                            })
                        }
                    }, n.getFollowData = function() {
                        return n.props.followData ? n.props.followData : n.props.data
                    }, n
                }
                return s.__extends(n, e), n.prototype.componentDidMount = function() {
                    this.reportInteractive()
                }, n.prototype.componentDidUpdate = function() {
                    this.props.channelLogin && !this.userDataLoaded() || !this.props.updateContainerWidth || this.props.updateContainerWidth(), this.reportInteractive()
                }, n.prototype.componentWillReceiveProps = function(e) {
                    if (e.data && !e.data.loading && !e.data.error || this.props.followData) {
                        var n = e.data || this.props.followData;
                        this.setState({
                            isFollowing: !!n && (n.user.self && null !== n.user.self.follower.disableNotifications),
                            disableNotifications: !n || n.user.self && n.user.self.follower.disableNotifications
                        })
                    }
                }, n.prototype.render = function() {
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
                    var n = this.state.disableNotifications ? Object(c.d)("Opt in to notifications to receive updates on this channel's activity, including when they go live.", "FollowButton") : Object(c.d)("You will be notified on this channel's activity, including when they go live.", "FollowButton");
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
                    var t = this.props.balloonDirection ? this.props.balloonDirection : b.q.BottomRight,
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
                        direction: t,
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
                    }, n))))))
                }, n.prototype.reportInteractive = function() {
                    this.props.isLoggedIn ? (!this.props.channelLogin || this.userDataLoaded() || this.props.followData) && this.props.latencyTracking.reportInteractive() : this.props.latencyTracking.reportInteractive()
                }, n = s.__decorate([Object(p.a)(w, {
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
                }), Object(y.d)("FollowButton")], n)
            }(d.Component),
            F = Object(i.b)(function(e) {
                return {
                    isLoggedIn: Object(r.d)(e)
                }
            }, function(e) {
                return Object(a.b)({
                    login: function() {
                        return Object(l.f)(o.a.FollowButton)
                    }
                }, e)
            })(C);
        t.d(n, "a", function() {
            return F
        })
    },
    jFCw: function(e, n) {
        var t = {
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
        t.loc.source = {
            body: "query ClipsReactionCarousel($slug: ID!) {\nclip(slug: $slug) {\nid\nreactions {\ncount\nemote {\nid\ntoken\n}\nself {\nhasReacted\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = t
    },
    jetF: function(e, n, t) {
        "use strict";
        t.d(n, "a", function() {
            return r
        });
        var i = t("TToO"),
            a = t("U7vG"),
            o = (t.n(a), t("HM6l")),
            l = t("Odds"),
            r = function(e) {
                function n() {
                    var n = null !== e && e.apply(this, arguments) || this;
                    return n.state = {
                        showBalloon: !!n.props.openByDefault,
                        hasInteracted: !!n.props.openByDefault
                    }, n.toggleBalloonId = Object(o.a)(), n.handleButtonClick = function() {
                        n.setState(function(e) {
                            return {
                                showBalloon: !e.showBalloon,
                                hasInteracted: !0
                            }
                        }, function() {
                            n.props.onToggle && n.props.onToggle(!n.state.showBalloon)
                        })
                    }, n.handleGlobalClick = function(e) {
                        e.target.matches('[data-toggle-balloon-id="' + n.toggleBalloonId + '"] *') || n.setState({
                            showBalloon: !1
                        }, function() {
                            n.props.onToggle && n.props.onToggle(!n.state.showBalloon)
                        })
                    }, n.onMouseEnter = function() {
                        n.state.hasInteracted || n.setState({
                            hasInteracted: !0
                        })
                    }, n
                }
                return i.__extends(n, e), n.prototype.componentDidMount = function() {
                    this.props.openByDefault && document.addEventListener("click", this.handleGlobalClick, !0)
                }, n.prototype.componentWillUpdate = function(e, n) {
                    this.state.showBalloon !== n.showBalloon && (n.showBalloon ? document.addEventListener("click", this.handleGlobalClick, !0) : document.removeEventListener("click", this.handleGlobalClick, !0))
                }, n.prototype.componentWillUnmount = function() {
                    document.removeEventListener("click", this.handleGlobalClick, !0)
                }, n.prototype.render = function() {
                    var e = a.Children.toArray(this.props.children);
                    if (2 !== e.length) throw new Error("ToggleBalloonWrapper should only be given two children: a clickable and a Balloon");
                    var n = e[0],
                        t = e[1];
                    if (t.type !== l.p) throw new Error("ToggleBalloonWrapper needs a Balloon as its second child element");
                    var o = a.cloneElement(n, {
                            onClick: this.handleButtonClick
                        }),
                        r = null;
                    (this.state.hasInteracted || this.props.alwaysMountBalloonContent) && (r = a.cloneElement(t, {
                        show: this.state.showBalloon
                    }));
                    var s = o;
                    return this.props.tooltipProps && (s = a.createElement(l._43, i.__assign({}, this.props.tooltipProps), o)), a.createElement(l._2, {
                        "data-toggle-balloon-id": this.toggleBalloonId,
                        display: this.props.display,
                        position: l._9.Relative
                    }, a.createElement("div", {
                        style: {
                            display: "inherit"
                        },
                        onMouseEnter: this.onMouseEnter,
                        "data-test-selector": "toggle-balloon-wrapper__mouse-enter-detector"
                    }, s), r)
                }, n.prototype.toggleBalloon = function(e) {
                    void 0 === e && (e = !this.state.showBalloon), this.setState({
                        showBalloon: e,
                        hasInteracted: !0
                    })
                }, n
            }(a.Component)
    },
    oIkB: function(e, n, t) {
        "use strict";
        n.b = function(e, n) {
            var t = new Set(e.map(function(e) {
                return e.node.id
            }));
            return e.concat(n.filter(function(e) {
                return !t.has(e.node.id)
            }))
        }, n.a = function(e) {
            return {
                variables: {
                    input: e
                }
            }
        }, n.d = function(e, n, t, o) {
            void 0 === n && (n = {});
            try {
                var l = a.n.apollo.client.readQuery({
                    query: e,
                    variables: n
                });
                if (!l || o && o(l)) return;
                var r = i(l, t);
                a.n.apollo.client.writeQuery({
                    query: e,
                    variables: n,
                    data: r
                })
            } catch (e) {
                a.i.warn("Failed writing updated query to Apollo", e)
            }
        }, n.c = function(e) {
            try {
                var n = e.id,
                    t = e.fragment,
                    o = e.mutator,
                    l = a.n.apollo.client.readFragment({
                        id: n,
                        fragment: t
                    }),
                    r = i(l, o);
                a.n.apollo.client.writeFragment({
                    fragment: t,
                    id: n,
                    data: r
                })
            } catch (e) {
                a.i.warn("Failed writing updated query to Apollo", e)
            }
        };
        t("+dIz");
        var i = t("LIeg"),
            a = (t.n(i), t("6sO2"))
    },
    sEID: function(e, n, t) {
        "use strict";
        t.d(n, "b", function() {
            return s
        }), t.d(n, "a", function() {
            return d
        });
        var i = t("U7vG"),
            a = (t.n(i), t("8Wuk")),
            o = t("yDzg"),
            l = t("WNmM"),
            r = t("Odds"),
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
                return i.createElement(r._2, {
                    className: "clips-social-share",
                    display: r.N.Flex,
                    flexWrap: r.Q.NoWrap
                }, s.map(function(n) {
                    return i.createElement(r._2, {
                        key: n.type,
                        margin: {
                            right: 1
                        }
                    }, i.createElement(a.a, {
                        key: n.type,
                        type: n.type,
                        text: e.clip.title,
                        url: Object(o.a)(e.clip.url, n.params),
                        onShareClick: Object(l.d)(e.clip, e.pageType)
                    }))
                }))
            }
    },
    tGx1: function(e, n) {
        var t = {
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
        t.loc.source = {
            body: "fragment recommendedClip on Clip {\nid\ntitle\nbroadcaster {\nid\ndisplayName\n}\ngame {\nid\ndisplayName\n}\nviewCount\n}\nquery ClipsRecommendations($slug: ID!) {\nclip(slug: $slug) {\nid\ngame {\nid\ndisplayName\n}\nbroadcaster {\nid\ndisplayName\n}\nrelatedClips {\nsimilar {\n...recommendedClip\n}\nbroadcaster {\n...recommendedClip\n}\ngame {\n...recommendedClip\n}\ntop {\n...recommendedClip\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = t
    },
    wLXg: function(e, n) {
        var t = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ClipsEmotePicker"
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
                end: 376
            }
        };
        t.loc.source = {
            body: '# Documentation about how to use GraphQL is located in the Data Access Guide:\n# https://git-aws.internal.justin.tv/pages/twilight/twilight-docs/docs/guides/data-access.html\n# Additionally use the GraphQL explorer (https://api.twitch.tv/gql/explore) to browse\n# available GraphQL data and construct your query.\nquery ClipsEmotePicker {\nuser(login: "lirik") {\nid\ndisplayName\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = t
    },
    x4k6: function(e, n) {
        var t = {
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
        t.loc.source = {
            body: "query FollowButton_User($login: String!) {\nuser(login: $login) {\nid\ndisplayName\nlogin\nself {\nfollower {\ndisableNotifications\n}\n}\n}\ncurrentUser {\nid\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = t
    },
    xX9u: function(e, n, t) {
        "use strict";
        var i = t("TToO"),
            a = t("U7vG"),
            o = t("Odds"),
            l = function(e) {
                function n() {
                    var n = null !== e && e.apply(this, arguments) || this;
                    return n.handleClickHandler = function(e) {
                        n.props.onClick && n.props.onClick(), e.currentTarget.select()
                    }, n
                }
                return i.__extends(n, e), n.prototype.render = function() {
                    return a.createElement(o.Y, {
                        readOnly: !0,
                        type: o.Z.Text,
                        value: this.props.value,
                        onClick: this.handleClickHandler
                    })
                }, n
            }(a.Component);
        t.d(n, "a", function() {
            return l
        })
    },
    xwy4: function(e, n) {
        var t = {
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
        t.loc.source = {
            body: "mutation Add_Clip_Reaction($input: AddReactionInput!) {\naddReaction(input: $input) {\ncontent {\n... on Clip {\nid\nreactions {\nemote {\nid\ntoken\n}\ncount\nself {\nhasReacted\n}\n}\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = t
    }
});
//# sourceMappingURL=sites.clips.pages.clips-watch-8b71adf1a1e13e8a38c65f7f62f0f4ac.js.map