webpackJsonp([53], {
    "/+to": function(e, t, n) {
        "use strict";
        var i = n("RH2O"),
            a = n("TToO"),
            r = n("GiK3"),
            o = n("6sO2"),
            d = n("5kgt"),
            s = n("Us7i"),
            l = n("QG7y"),
            c = "#google_ads_iframe_\\/3576121\\/twitch\\/directory_0",
            m = "#google_ads_iframe_\\/3576121\\/twitch\\/directory_1",
            u = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.logger = o.j.withCategory("ad-slot"), n.createSlot = function(e) {
                        return a.__awaiter(n, void 0, void 0, function() {
                            var t;
                            return a.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        if (this.state.slotCreated) return [2];
                                        this.setState({
                                            slotCreated: !0
                                        }), n.label = 1;
                                    case 1:
                                        return n.trys.push([1, 3, , 4]), [4, s.a.createSlot(e.slotID, e.adUnit, e.adSize, e.targeting, e.autoEnable)];
                                    case 2:
                                        return t = n.sent(), Object(l.h)(t.getSlotElementId()), this.setState({
                                            slot: t
                                        }), [3, 4];
                                    case 3:
                                        return n.sent(), this.logger.warn("Unable to create ad slot", {
                                            slotID: e.slotID,
                                            adUnit: e.adUnit,
                                            adSize: e.adSize,
                                            targeting: e.targeting,
                                            autoEnable: e.autoEnable
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, n.setRef = function(e) {
                        return n.slotRef = e
                    }, n.onSlotRenderEnd = function(e) {
                        var t = e.slot.getSlotElementId();
                        if (n.state.slot && t === n.props.slotID) {
                            if (n.logger.debug("Ad slot render ended", {
                                    elementID: t,
                                    lineItemID: e.lineItemId,
                                    createdID: e.creativeId,
                                    isEmpty: e.isEmpty,
                                    serviceName: e.serviceName,
                                    size: e.size
                                }), e.isEmpty) return;
                            if (!n.slotRef) return;
                            if (n.props.slotID === l.b.anonFront.takeover) return void(document.body.classList.contains("takeover") && n.setState({
                                shouldDisplay: !0
                            }, function() {
                                return n.slotRendered(e.slot)
                            }));
                            var i;
                            if (n.props.slotID === l.b.directory.banner) return void((i = n.slotRef.querySelector(c)) && 1 !== i.clientWidth && n.setState({
                                shouldDisplay: !0
                            }, function() {
                                return n.slotRendered(e.slot)
                            }));
                            if (n.props.slotID === l.b.directory.rectangle) return void((i = n.slotRef.querySelector(m)) && 1 !== i.clientWidth && n.setState({
                                shouldDisplay: !0
                            }, function() {
                                return n.slotRendered(e.slot)
                            }));
                            n.setState({
                                shouldDisplay: !0
                            }, function() {
                                return n.slotRendered(e.slot)
                            })
                        }
                    }, n.slotRendered = function(e) {
                        n.props.slotRendered && n.props.slotRendered(e)
                    }, n.state = {
                        shouldDisplay: !1
                    }, n
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    l.g.addListener(l.f, this.onSlotRenderEnd), this.props.trackingSet ? (this.logger.debug("Tracking is set. Creating slot (componentDidMount)", this.props.slotID), this.createSlot(this.props)) : this.logger.debug("Tracking is not set. Skipping slot creation (componentDidMount)", this.props.slotID)
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.state.slotCreated || (e.trackingSet && !this.props.trackingSet ? (this.logger.debug("Tracking is set. Creating slot (componentWillReceiveProps)", this.props.slotID), this.createSlot(e)) : this.logger.debug("Tracking is not set. Skipping slot creation (componentWillReceiveProps)", this.props.slotID))
                }, t.prototype.componentWillUnmount = function() {
                    this.logger.debug("Destroying Slot (componentWillUnmount)", this.props.slotID), l.g.removeListener(l.f, this.onSlotRenderEnd), this.state.slot && s.a.destroySlot(this.state.slot)
                }, t.prototype.shouldComponentUpdate = function(e, t) {
                    return t.shouldDisplay !== this.state.shouldDisplay
                }, t.prototype.render = function() {
                    var e = a.__assign({}, this.props.injectStyles);
                    return this.state.shouldDisplay || (e.display = "none"), r.createElement("div", a.__assign({
                        style: e,
                        id: this.props.slotID,
                        ref: this.setRef
                    }, Object(d.a)(this.props)))
                }, t
            }(r.Component);
        var p = Object(i.b)(function(e) {
            return {
                trackingSet: e.ads.trackingSet
            }
        })(u);
        n.d(t, "a", function() {
            return p
        })
    },
    "/0cZ": function(e, t, n) {
        var i = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Pulse"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "limit"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Int"
                        }
                    }
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "cursor"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Cursor"
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
                            value: "currentUser"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "feedUser"
                                },
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "isConnectedToTwitter"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "pulseFeed"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "items"
                                        },
                                        arguments: [{
                                            kind: "Argument",
                                            name: {
                                                kind: "Name",
                                                value: "first"
                                            },
                                            value: {
                                                kind: "Variable",
                                                name: {
                                                    kind: "Name",
                                                    value: "limit"
                                                }
                                            }
                                        }, {
                                            kind: "Argument",
                                            name: {
                                                kind: "Name",
                                                value: "after"
                                            },
                                            value: {
                                                kind: "Variable",
                                                name: {
                                                    kind: "Name",
                                                    value: "cursor"
                                                }
                                            }
                                        }],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "FragmentSpread",
                                                name: {
                                                    kind: "Name",
                                                    value: "feed"
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
                end: 271
            }
        };
        i.loc.source = {
            body: '#import "twilight/features/feed/models/feed-fragment.gql"\n#import "twilight/features/feed/models/user-fragment.gql"\nquery Pulse($limit: Int $cursor: Cursor) {\ncurrentUser {\n...feedUser\nisConnectedToTwitter\npulseFeed {\nitems(first: $limit after: $cursor) {\n...feed\n}\n}\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var a = {};

        function r(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !a[t] && (a[t] = !0, !0)
            })
        }
        i.definitions = i.definitions.concat(r(n("VMA7").definitions)), i.definitions = i.definitions.concat(r(n("Lq4d").definitions)), e.exports = i
    },
    "0ImK": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "embeddedEmote"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "EmbeddedEmote"
                    }
                },
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "emoteID"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "setID"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "from"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "to"
                        },
                        arguments: [],
                        directives: []
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 65
            }
        };
        n.loc.source = {
            body: "fragment embeddedEmote on EmbeddedEmote {\nemoteID\nsetID\nfrom\nto\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "0OPT": function(e, t) {},
    "0v28": function(e, t) {},
    "1jVX": function(e, t, n) {
        "use strict";
        t.a = function(e, t, n, c) {
            void 0 === t && (t = []);
            for (var m, u = [], p = e.split(/\n/), v = function(e, v) {
                    if (e > 0 && (v += p[e - 1].length + 1), c && "" === p[e]) return u.push(i.createElement(s.Q, {
                        key: e
                    }, "\n")), m = v, "continue";
                    var g = t.map(function(e) {
                            return function(e, t) {
                                return {
                                    emoteID: e.emoteID,
                                    from: e.from - t,
                                    to: e.to - t,
                                    setID: e.setID
                                }
                            }(e, v)
                        }).filter(function(t) {
                            return ! function(e, t) {
                                return e.from < 0 || e.from >= t || e.to < 0 || e.to >= t
                            }(t, p[e].length)
                        }),
                        f = Object(o.g)(p[e], Object(d.b)(g), 0, {}, !1, n);
                    u.push(i.createElement(s.Q, {
                        key: e
                    }, function(e) {
                        for (var t = [], n = 0; n < e.length; n++) {
                            var o = e[n];
                            switch (o.type) {
                                case r.a.ClipLink:
                                    t.push(i.createElement("a", {
                                        key: n,
                                        href: o.content.url,
                                        target: "_blank"
                                    }, o.content.url));
                                    break;
                                case r.a.VideoLink:
                                case r.a.Link:
                                    o.content.url.match(l) ? t.push(i.createElement(a.a, {
                                        key: n,
                                        to: o.content.url.replace(l, "")
                                    }, o.content.displayText)) : t.push(i.createElement("a", {
                                        key: n,
                                        href: o.content.url,
                                        target: "_blank",
                                        rel: "noopener noreferrer"
                                    }, o.content.displayText));
                                    break;
                                case r.a.Mention:
                                    t.push(i.createElement(a.a, {
                                        key: n,
                                        to: "/" + o.content.recipient
                                    }, o.content.recipient));
                                    break;
                                case r.a.Emote:
                                    o.content.images.themed || t.push(i.createElement("img", {
                                        key: n,
                                        src: o.content.images.sources["1x"],
                                        alt: o.content.alt
                                    }));
                                    break;
                                case r.a.Text:
                                    t.push(i.createElement("span", {
                                        key: n
                                    }, o.content))
                            }
                        }
                        return t
                    }(f))), m = v
                }, g = 0, f = 0; g < p.length; g++) v(g, f), f = m;
            return u
        };
        var i = n("GiK3"),
            a = (n.n(i), n("F8kA")),
            r = n("mwvJ"),
            o = n("l21v"),
            d = n("dQj3"),
            s = n("Odds"),
            l = /^(https?:\/\/)?(www.)?twitch\.tv/
    },
    "24qG": function(e, t) {},
    "4mYF": function(e, t, n) {
        "use strict";
        var i, a = n("RH2O"),
            r = n("2KeS"),
            o = n("Hjbq"),
            d = n("j0cR"),
            s = n("TToO"),
            l = n("GiK3"),
            c = n("6sO2"),
            m = n("mi6k"),
            u = n("HM6l"),
            p = n("CSlQ"),
            v = n("Odds"),
            g = (n("kuCN"), "embed-overlay");
        ! function(e) {
            e[e.Clip = 0] = "Clip", e[e.Video = 1] = "Video", e[e.Stream = 2] = "Stream", e[e.VideoOEmbed = 3] = "VideoOEmbed"
        }(i || (i = {}));
        var f = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        showOverlay: !0,
                        playerRefID: Object(u.a)()
                    }, t.getOverlayComponent = function() {
                        var e = t.props,
                            n = e.createdAt,
                            a = e.lengthSeconds,
                            r = e.thumbnailURL,
                            o = e.type,
                            d = e.viewCount,
                            s = a && a > 0 ? Object(m.b)(a) : "";
                        return l.createElement("a", {
                            href: "#",
                            onClick: t.handleClick,
                            "data-test-selector": g
                        }, l.createElement(v.k, {
                            ratio: v.l.Aspect16x9
                        }, l.createElement(v._8, null, l.createElement(v._2, {
                            fullWidth: !0,
                            fullHeight: !0,
                            position: v._15.Absolute
                        }, l.createElement("img", {
                            src: r
                        })), l.createElement(v._8, {
                            className: "embed-card__overlay",
                            position: v._15.Absolute,
                            attachLeft: !0,
                            attachTop: !0,
                            fullWidth: !0,
                            fullHeight: !0
                        }, l.createElement(v._8, {
                            className: "embed-card__play",
                            display: v.R.Flex,
                            justifyContent: v._7.Center,
                            position: v._15.Absolute,
                            attachLeft: !0,
                            attachTop: !0,
                            fullWidth: !0,
                            fullHeight: !0
                        }, l.createElement(v._24, {
                            asset: v._25.Play,
                            width: 50,
                            height: 50
                        })), l.createElement(v._8, {
                            position: v._15.Absolute,
                            padding: 1,
                            attachBottom: !0,
                            attachLeft: !0
                        }, n && l.createElement(v.Q, null, Object(c.c)(new Date(n), "medium")), l.createElement(v._8, null, o === i.Stream && l.createElement(v._8, {
                            display: v.R.Inline,
                            margin: {
                                right: .5
                            }
                        }, l.createElement(v.G, {
                            status: v.I.Live
                        })), void 0 !== d && l.createElement("span", null, t.getFormattedViewCount(d, o)))), l.createElement(v._8, {
                            position: v._15.Absolute,
                            padding: 1,
                            attachBottom: !0,
                            attachRight: !0
                        }, s && l.createElement(v._8, null, l.createElement(v.Q, null, s)))), l.createElement(v._35, {
                            position: v._15.Absolute,
                            attachTop: !0,
                            attachLeft: !0,
                            margin: 1,
                            fontSize: v.V.Size5
                        }, o === i.Stream && l.createElement(v._12, {
                            label: Object(c.d)("Live", "EmbedOverlayPill"),
                            type: v._13.Live
                        }), o === i.Video && l.createElement(v._12, {
                            label: Object(c.d)("Video", "EmbedOverlayPill"),
                            type: v._13.Overlay
                        }), o === i.Clip && l.createElement(v._12, {
                            label: Object(c.d)("Clip", "EmbedOverlayPill"),
                            type: v._13.Overlay
                        })))))
                    }, t.handleClick = function(e) {
                        e.preventDefault(), t.setState({
                            showOverlay: !1
                        }), t.props.type === i.Clip && t.props.reportPlayerInstanceStarted(t.state.playerRefID), t.props.onClick && t.props.onClick()
                    }, t
                }
                return s.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    if (this.props.type === i.Clip) {
                        var t = e.activeVideoPlayerRefID;
                        t === this.state.playerRefID ? this.setState({
                            showOverlay: !1
                        }) : this.props.activeVideoPlayerRefID === t || t === this.state.playerRefID || this.state.showOverlay || this.setState({
                            showOverlay: !0
                        })
                    }
                }, t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return this.state.showOverlay ? this.getOverlayComponent() : l.createElement(v.k, {
                        ratio: v.l.Aspect16x9
                    }, l.createElement("div", {
                        "data-test-selector": "embed-overlay-wrapper"
                    }, this.props.children))
                }, t.prototype.getFormattedViewCount = function(e, t) {
                    switch (t) {
                        case i.Stream:
                            return Object(c.d)("{viewCount,number} viewers", {
                                viewCount: e
                            }, "OverlayViewCount");
                        case i.Clip:
                        case i.Video:
                            return Object(c.d)("{viewCount,number} views", {
                                viewCount: e
                            }, "OverlayViewCount");
                        default:
                            return ""
                    }
                }, t
            }(l.Component),
            k = Object(p.d)("EmbedOverlay")(f);
        var h = Object(a.b)(function(e) {
            return {
                activeVideoPlayerRefID: Object(d.a)(e)
            }
        }, function(e) {
            return Object(r.b)({
                reportPlayerInstanceStarted: o.b
            }, e)
        })(k);
        n.d(t, "a", function() {
            return h
        }), n.d(t, !1, function() {
            return g
        }), n.d(t, !1, function() {
            return "embed-overlay-wrapper"
        }), n.d(t, "b", function() {
            return i
        }), n.d(t, !1, function() {
            return f
        }), n.d(t, !1, function() {
            return k
        })
    },
    "6Agf": function(e, t, n) {
        "use strict";
        var i;
        n.d(t, "a", function() {
                return i
            }),
            function(e) {
                e.Admin = "admin", e.GlobalMod = "global_mod", e.Moderator = "mod", e.Owner = "owner", e.Staff = "staff", e.Subscriber = "subscriber", e.User = ""
            }(i || (i = {}))
    },
    "6hXa": function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        }), t.b = function(e) {
            var t = e.content.id;
            switch (e.content.__typename) {
                case "Clip":
                    var n = e.content;
                    return {
                        type: o.a,
                        id: n.slug
                    };
                case "Post":
                    var i = t.split(":");
                    return {
                        type: o.c,
                        id: i[i.length - 1]
                    };
                case "Stream":
                    var a = e.content;
                    return {
                        type: o.d,
                        id: a.broadcaster.id + ":" + t
                    };
                case "Video":
                    return {
                        type: o.e,
                        id: t
                    };
                default:
                    return {
                        type: "",
                        id: ""
                    }
            }
        }, n.d(t, "c", function() {
            return d
        });
        var i, a = n("TToO"),
            r = n("6sO2"),
            o = n("TWJL");
        ! function(e) {
            e.Create = "create", e.Remove = "remove"
        }(i || (i = {}));
        var d = function(e, t, n) {
            r.n.track(e, a.__assign({}, t, n))
        }
    },
    "86JD": function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("GiK3"),
            r = n("6sO2"),
            o = n("iOr9"),
            d = n("bZTi"),
            s = n("o8Pq"),
            l = n("bNhH"),
            c = n("Wjt1"),
            m = function(e) {
                var t = {
                    name: "TWILIGHT_VIDEO_FEATURO_EN",
                    assignments: {
                        fallback: function() {
                            return d.a.wrap(function() {
                                return new Promise(function(e) {
                                    e()
                                }).then(n.bind(null, "o8Pq"))
                            }, "FeaturedBroadcasters")(i.__assign({}, e))
                        },
                        mixed: function() {
                            return d.a.wrap(function() {
                                return new Promise(function(e) {
                                    e()
                                }).then(n.bind(null, "Wjt1"))
                            }, "FeaturedContent")(i.__assign({}, e, {
                                shouldMixContent: !0
                            }))
                        },
                        last: function() {
                            return d.a.wrap(function() {
                                return new Promise(function(e) {
                                    e()
                                }).then(n.bind(null, "Wjt1"))
                            }, "FeaturedContent")(i.__assign({}, e, {
                                shouldMixContent: !1
                            }))
                        }
                    },
                    loader: function() {
                        return Object(l.c)(e.renderContext)
                    }
                };
                return "en" === r.o.intl.getLanguageCode() ? a.createElement(o.a, i.__assign({}, t)) : a.createElement(s.FeaturedBroadcasters, {
                    renderContext: e.renderContext
                })
            };
        n.d(t, "a", function() {
            return c.FeaturedBroadcastersRenderContext
        }), n.d(t, "b", function() {
            return m
        })
    },
    "8atL": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "FeaturedContent"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "language"
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
                            value: "featuredStreams"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "language"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "language"
                                }
                            }
                        }, {
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "first"
                            },
                            value: {
                                kind: "IntValue",
                                value: "8"
                            }
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "description"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "imageURL"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "isScheduled"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "isSponsored"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "priorityLevel"
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
                                                    value: "displayName"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
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
                                                        value: "150"
                                                    }
                                                }],
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
                                    }, {
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
                                            value: "type"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "viewersCount"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
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
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "featuredVideos"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "language"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "language"
                                }
                            }
                        }, {
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "first"
                            },
                            value: {
                                kind: "IntValue",
                                value: "2"
                            }
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "description"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "imageURL"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "isScheduled"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "isSponsored"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "priorityLevel"
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
                                    }, {
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
                                            value: "owner"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
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
                                                        value: "150"
                                                    }
                                                }],
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
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 797
            }
        };
        n.loc.source = {
            body: "# Documentation about how to use GraphQL is located in the Data Access Guide:\n# https://git-aws.internal.justin.tv/pages/twilight/twilight-docs/docs/guides/data-access.html\n# Additionally use the GraphQL explorer (https://api.twitch.tv/gql/explore) to browse\n# available GraphQL data and construct your query.\nquery FeaturedContent($language: String!) {\nfeaturedStreams(language: $language first: 8) {\ndescription\nimageURL\nisScheduled\nisSponsored\npriorityLevel\nstream {\nbroadcaster {\ndisplayName\nid\nprofileImageURL(width: 150)\nlogin\n}\ngame {\nid\nname\n}\nid\ntype\nviewersCount\n}\ntitle\n}\nfeaturedVideos(language: $language first: 2) {\ndescription\nimageURL\nisScheduled\nisSponsored\npriorityLevel\ntitle\nvideo {\ngame {\nid\nname\n}\nid\nowner {\ndisplayName\nid\nprofileImageURL(width: 150)\nlogin\n}\nviewCount\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "9MIX": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "game"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "Game"
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
                            value: "name"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "viewersCount"
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
                            value: "boxArtURL"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "width"
                            },
                            value: {
                                kind: "IntValue",
                                value: "285"
                            }
                        }, {
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "height"
                            },
                            value: {
                                kind: "IntValue",
                                value: "380"
                            }
                        }],
                        directives: []
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 92
            }
        };
        n.loc.source = {
            body: "fragment game on Game {\nid\nname\nviewersCount\ndisplayName\nboxArtURL(width: 285 height: 380)\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    BLXQ: function(e, t) {},
    "C/8M": function(e, t, n) {
        "use strict";
        var i = n("6hXa"),
            a = n("TToO"),
            r = n("KSGD"),
            o = n("GiK3"),
            d = n("6sO2");

        function s() {
            return function(e) {
                return function(t) {
                    function n() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.state = {
                            impressionEventFired: !1,
                            impressionEvent: function(e) {
                                return {}
                            }
                        }, e.triggerImpressionEvent = function() {
                            e.state.impressionEvent(e.context.feedTrackingProps), e.setState({
                                impressionEventFired: !0
                            })
                        }, e.setImpressionEvent = function(t) {
                            e.setState({
                                impressionEvent: t
                            })
                        }, e.setRef = function(t) {
                            return e.element = t
                        }, e
                    }
                    return a.__extends(n, t), n.prototype.componentDidMount = function() {
                        if (this.context.feedImpressionSettings && this.context.feedImpressionSettings.autoReport) return this.triggerImpressionEvent();
                        var e = this.context.registerReceiver;
                        e ? this.unregister = e(this) : d.j.warn("<FeedItem /> initialized missing a <ScrollableArea /> provider")
                    }, n.prototype.componentWillUnmount = function() {
                        this.unregister && this.unregister()
                    }, n.prototype.render = function() {
                        var t = {
                            impressionTracking: {
                                onImpression: this.setImpressionEvent
                            }
                        };
                        return o.createElement("div", {
                            ref: this.setRef
                        }, o.createElement(e, a.__assign({}, this.props, t)))
                    }, n.prototype.checkVisible = function(e) {
                        return a.__awaiter(this, void 0, void 0, function() {
                            var t;
                            return a.__generator(this, function(n) {
                                return this.element ? (t = this.element.getBoundingClientRect(), t.top < e.bottom && t.bottom > e.top && !this.state.impressionEventFired && this.triggerImpressionEvent(), [2]) : [2]
                            })
                        })
                    }, n.contextTypes = {
                        registerReceiver: r.func,
                        feedTrackingProps: r.object,
                        feedImpressionSettings: r.object
                    }, n
                }(o.Component)
            }
        }

        function l(e) {
            return function(t) {
                return function(n) {
                    function i() {
                        var t = null !== n && n.apply(this, arguments) || this;
                        return t.getChildContext = function() {
                            var n = e(t.props);
                            return {
                                feedTrackingProps: a.__assign({}, t.context.feedTrackingProps, n)
                            }
                        }, t
                    }
                    return a.__extends(i, n), i.prototype.render = function() {
                        var e = {
                            feedTrackingProps: this.getChildContext().feedTrackingProps
                        };
                        return o.createElement(t, a.__assign({}, this.props, e))
                    }, i.contextTypes = {
                        feedTrackingProps: r.object
                    }, i.childContextTypes = {
                        feedTrackingProps: r.object
                    }, i
                }(o.Component)
            }
        }
        n.d(t, "a", function() {
            return i.a
        }), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, "b", function() {
            return i.b
        }), n.d(t, "c", function() {
            return s
        }), n.d(t, "d", function() {
            return l
        })
    },
    "CX2/": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "PostPermissions"
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
                            value: "feedItemContent"
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
                                kind: "InlineFragment",
                                typeCondition: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "Post"
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
                                                    value: "permissions"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "canDelete"
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
                end: 117
            }
        };
        n.loc.source = {
            body: "query PostPermissions($id: ID!) {\nfeedItemContent(id: $id) {\n...on Post {\nid\nself {\npermissions {\ncanDelete\n}\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    Dqkc: function(e, t, n) {
        var i = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "Reaction_Remove"
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
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "feedItemClip"
                                        },
                                        directives: []
                                    }, {
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "feedItemPost"
                                        },
                                        directives: []
                                    }, {
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "feedItemVideo"
                                        },
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
                end: 211
            }
        };
        i.loc.source = {
            body: '#import "twilight/features/feed/models/post-fragment.gql"\nmutation Reaction_Remove($input: RemoveReactionInput!) {\nremoveReaction(input: $input) {\ncontent {\n...feedItemClip\n...feedItemPost\n...feedItemVideo\n}\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var a = {};
        i.definitions = i.definitions.concat(n("S0OZ").definitions.filter(function(e) {
            if ("FragmentDefinition" !== e.kind) return !0;
            var t = e.name.value;
            return !a[t] && (a[t] = !0, !0)
        })), e.exports = i
    },
    EImC: function(e, t, n) {
        "use strict";
        var i = n("GiK3"),
            a = n("Odds"),
            r = function() {
                return i.createElement(a._35, {
                    elevation: 1,
                    margin: {
                        bottom: 2
                    },
                    background: a.n.Base
                }, i.createElement(a._35, {
                    display: a.R.Flex,
                    flexWrap: a.U.NoWrap,
                    padding: 1,
                    background: a.n.Base,
                    borderBottom: !0
                }, i.createElement(a._8, {
                    margin: {
                        right: 1
                    }
                }, i.createElement(a.Q, null, i.createElement(a._14, {
                    width: 40,
                    height: 40
                }))), i.createElement(a._8, {
                    flexGrow: 1
                }, i.createElement(a.Q, {
                    fontSize: a.V.Size6
                }, i.createElement(a._14, {
                    width: 100
                })), i.createElement(a.Q, {
                    fontSize: a.V.Size7
                }, i.createElement(a._14, {
                    width: 120
                })))), i.createElement(a._8, {
                    margin: {
                        bottom: .5
                    },
                    padding: 1
                }, i.createElement(a.Q, {
                    fontSize: a.V.Size6
                }, i.createElement(a._14, null)), i.createElement(a.Q, {
                    fontSize: a.V.Size6
                }, i.createElement(a._14, null)), i.createElement(a.Q, {
                    fontSize: a.V.Size6
                }, i.createElement(a._14, {
                    width: 280
                }))))
            },
            o = function() {
                return i.createElement(a._35, {
                    elevation: 1,
                    margin: {
                        bottom: 2
                    },
                    background: a.n.Base
                }, i.createElement(a._8, {
                    margin: {
                        bottom: .5
                    }
                }, i.createElement(a.k, {
                    ratio: a.l.Aspect16x9
                }, i.createElement(a._14, null))), i.createElement(a._35, {
                    display: a.R.Flex,
                    flexWrap: a.U.NoWrap,
                    padding: 1,
                    background: a.n.Base
                }, i.createElement(a._8, {
                    margin: {
                        right: 1
                    }
                }, i.createElement(a.Q, null, i.createElement(a._14, {
                    width: 40,
                    height: 40
                }))), i.createElement(a._8, {
                    flexGrow: 1
                }, i.createElement(a.Q, {
                    fontSize: a.V.Size6
                }, i.createElement(a._14, {
                    width: 100
                })), i.createElement(a.Q, {
                    fontSize: a.V.Size6
                }, i.createElement(a._14, {
                    width: 140
                })), i.createElement(a.Q, {
                    fontSize: a.V.Size6
                }, i.createElement(a._14, {
                    width: 120
                })))))
            };
        n.d(t, "b", function() {
            return r
        }), n.d(t, "a", function() {
            return o
        })
    },
    HgOP: function(e, t) {},
    "Hjo/": function(e, t, n) {
        var i = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Shelves"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "requestID"
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
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "platform"
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
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "langWeightedCCU"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Boolean"
                        }
                    }
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "limit"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Int"
                        }
                    }
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "itemsPerRow"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Int"
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
                            value: "shelves"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "requestID"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "requestID"
                                }
                            }
                        }, {
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "platform"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "platform"
                                }
                            }
                        }, {
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "langWeightedCCU"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "langWeightedCCU"
                                }
                            }
                        }, {
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "first"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "limit"
                                }
                            }
                        }, {
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "itemsPerRow"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "itemsPerRow"
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
                                                    value: "shelf"
                                                },
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
            }],
            loc: {
                start: 0,
                end: 356
            }
        };
        i.loc.source = {
            body: '#import "twilight/pages/front/v2/queries/shelf-fragment.gql"\nquery Shelves($requestID: String! $platform: String! $langWeightedCCU: Boolean $limit: Int $itemsPerRow: Int) {\nshelves(requestID: $requestID platform: $platform langWeightedCCU: $langWeightedCCU first: $limit itemsPerRow: $itemsPerRow) {\nedges {\nnode {\n...shelf\n}\n}\n}\ncurrentUser {\nid\nlogin\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var a = {};
        i.definitions = i.definitions.concat(n("bHBY").definitions.filter(function(e) {
            if ("FragmentDefinition" !== e.kind) return !0;
            var t = e.name.value;
            return !a[t] && (a[t] = !0, !0)
        })), e.exports = i
    },
    I5q7: function(e, t, n) {
        var i = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "feedItemClip"
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
                        alias: {
                            kind: "Name",
                            value: "clipCreatedAt"
                        },
                        name: {
                            kind: "Name",
                            value: "createdAt"
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
                            value: "thumbnailURL"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "width"
                            },
                            value: {
                                kind: "IntValue",
                                value: "480"
                            }
                        }, {
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "height"
                            },
                            value: {
                                kind: "IntValue",
                                value: "272"
                            }
                        }],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "viewCount"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "slug"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "durationSeconds"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        alias: {
                            kind: "Name",
                            value: "clipTitle"
                        },
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
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "feedUser"
                                },
                                directives: []
                            }]
                        }
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
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "setID"
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
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 346
            }
        };
        i.loc.source = {
            body: '#import "twilight/features/feed/models/user-fragment.gql"\nfragment feedItemClip on Clip {\nid\nclipCreatedAt: createdAt\nembedURL\nthumbnailURL(width:480 height:272)\nviewCount\nslug\ndurationSeconds\nclipTitle: title\nbroadcaster {\n...feedUser\n}\nreactions {\nemote {\nid\ntoken\nsetID\n}\ncount\nself {\nhasReacted\n}\n}\nvideo {\ngame {\nid\nname\n}\n}\ncurator {\nid\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var a = {};
        i.definitions = i.definitions.concat(n("Lq4d").definitions.filter(function(e) {
            if ("FragmentDefinition" !== e.kind) return !0;
            var t = e.name.value;
            return !a[t] && (a[t] = !0, !0)
        })), e.exports = i
    },
    IOEW: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n("RH2O"),
            a = n("TToO"),
            r = n("GiK3"),
            o = n("6sO2"),
            d = n("o5l+"),
            s = n("zCIC"),
            l = n("j7/Y"),
            c = n("HM6l"),
            m = n("w9tK"),
            u = n("Us7i"),
            p = n("vH/s"),
            v = n("/+to"),
            g = n("QG7y"),
            f = n("86JD"),
            k = n("CSlQ"),
            h = n("lbHh"),
            b = n("7vx8"),
            y = n("DBTH"),
            S = n("S4HN"),
            _ = n("yWCw"),
            N = n("F8kA"),
            E = n("NY9D"),
            C = n("Odds"),
            F = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = this.props,
                        t = r.createElement(C._8, {
                            padding: 1
                        }, r.createElement(C.Q, {
                            fontSize: C.V.Size5,
                            color: C.K.Alt2
                        }, Object(o.d)("{title}", {
                            title: e.title
                        }, "GameListComponent"))),
                        n = r.createElement(C._35, {
                            background: C.n.Alt,
                            padding: 1
                        }, r.createElement(C._2, {
                            fullWidth: !0,
                            fullHeight: !0,
                            display: C.R.Block
                        }, r.createElement(N.a, a.__assign({
                            to: e.viewAllLinkTo
                        }, Object(C._63)(e)), Object(o.d)("View All", "GameListComponent")))),
                        i = [];
                    if (e.loading)
                        for (var d = 0; d < e.limit; d++) i.push(r.createElement(C._8, {
                            key: d,
                            margin: {
                                bottom: 1
                            }
                        }, r.createElement(C.k, {
                            ratio: C.l.Aspect3x4
                        }, r.createElement(C._14, null)), r.createElement(C._8, null, r.createElement(C.Q, null, r.createElement(C._14, {
                            width: 100
                        })), r.createElement(C.Q, null, r.createElement(C._14, {
                            width: 70
                        })))));
                    else e.items && e.items.length > 0 && (i = e.items.map(function(e, t) {
                        if (!e) return null;
                        var n = e.id,
                            i = e.name,
                            a = e.viewersCount,
                            d = e.boxArtURL;
                        return r.createElement(C._8, {
                            key: n,
                            margin: {
                                bottom: 1
                            }
                        }, r.createElement(C.u, {
                            linkTo: Object(E.c)(i),
                            title: i,
                            alt: i + " cover image",
                            src: d,
                            info: Object(o.d)("{viewerCount,number} viewers", {
                                viewerCount: a
                            }, "GameListComponent"),
                            "data-a-target": "card-" + t,
                            "data-a-id": "card-" + i.replace(/ /g, "")
                        }))
                    }));
                    return r.createElement(C._35, {
                        elevation: 1,
                        background: C.n.Base,
                        display: C.R.Hide,
                        breakpointMedium: {
                            display: C.R.Block
                        }
                    }, t, r.createElement(C._8, {
                        padding: {
                            x: 1
                        }
                    }, r.createElement(C._55, {
                        gutterSize: C._57.ExtraSmall,
                        childWidth: C._56.ExtraSmall,
                        placeholderItems: 18
                    }, i)), n)
                }, t = a.__decorate([Object(k.d)("GameList", {
                    autoReportInteractive: !0
                })], t)
            }(r.Component),
            w = n("OkeX");
        var O = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.postRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.postRender()
                }, t.prototype.render = function() {
                    var e, t, n = [];
                    return this.props.data.error ? r.createElement(_.a, {
                        message: Object(o.d)("Followed Games are unavailable at this time.", "FollowedGamesCompoment")
                    }) : (this.props.data.loading || (e = this.props.data, t = [], (e.currentUser.followedGames && e.currentUser.followedGames.nodes || []).forEach(function(e) {
                        return e && e.id && t.push({
                            id: e.id,
                            name: e.name,
                            viewersCount: e.viewersCount,
                            boxArtURL: e.boxArtURL
                        })
                    }), n = t), this.props.data.loading || n && n.length > 0 ? r.createElement(F, {
                        "data-a-target": "view-all-followed-games-link",
                        items: n,
                        limit: 18,
                        loading: this.props.data.loading,
                        title: Object(o.d)("Followed Games", "FollowedGamesCompoment"),
                        viewAllLinkTo: "/directory/following/games"
                    }) : null)
                }, t.prototype.postRender = function() {
                    this.props.data.loading || this.props.latencyTracking.reportInteractive()
                }, t = a.__decorate([Object(b.a)(w, {
                    options: {
                        variables: {
                            limit: 18
                        }
                    }
                }), Object(k.d)("FollowedGames")], t)
            }(r.Component),
            R = n("Y4Yc"),
            I = "twilight_onboarding",
            T = "twilight_onboarding-prompt_dismissed",
            D = {
                domain: window.location.hostname.endsWith(".twitch.tv") ? ".twitch.tv" : void 0,
                secure: "https:" === window.location.protocol
            },
            x = a.__assign({}, D, {
                expires: 365
            }),
            P = 3,
            L = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    n.handleAutoOnboardingRedirect = function() {
                        void 0 === h.get(I) && Object(y.o)(new Date(n.props.data.currentUser.createdAt)) && (h.set(I, "true", x), n.redirectToOnboarding(S.b.NewSignup))
                    }, n.startOnboarding = function() {
                        n.redirectToOnboarding(S.b.HomepageCTA)
                    }, n.redirectToOnboarding = function(e) {
                        Object(S.g)({
                            source: e
                        }), window.location.assign("/hi" + location.search)
                    }, n.dismissOnboardingPrompt = function() {
                        Object(S.f)(), h.set(T, "true", x), n.setState({
                            isOnboardingDismissedCookieSet: !0
                        })
                    }, n.followedGamesForUserHasLoaded = function() {
                        return n.props.data && !n.props.data.loading && !n.props.data.error && n.props.data.currentUser && n.props.data.currentUser.followedGames
                    }, n.shouldSeeOnboarding = function() {
                        return !n.state.isOnboardingDismissedCookieSet && n.followedGamesForUserHasLoaded() && n.state.inOnboardingExperiment && n.props.data.currentUser.followedGames.nodes.length < P && Object(y.o)(new Date(n.props.data.currentUser.createdAt))
                    };
                    var i = o.o.experiments.getAssignment(y.i);
                    return n.state = {
                        inOnboardingExperiment: Object(y.n)(i),
                        isOnboardingDismissedCookieSet: void 0 !== h.get(T)
                    }, n
                }
                return a.__extends(t, e), t.prototype.componentDidUpdate = function() {
                    this.shouldSeeOnboarding() && this.handleAutoOnboardingRedirect()
                }, t.prototype.render = function() {
                    return this.shouldSeeOnboarding() ? r.createElement(C._35, {
                        "data-test-selector": "onboarding-prompt",
                        background: C.n.Base,
                        display: C.R.Flex,
                        flexDirection: C.T.Row,
                        margin: {
                            bottom: 1
                        },
                        elevation: 3,
                        borderMarked: !0
                    }, r.createElement(C._8, {
                        display: C.R.Flex,
                        flexDirection: C.T.Column,
                        flexWrap: C.U.NoWrap,
                        textAlign: C._45.Left,
                        padding: 1,
                        fullWidth: !0
                    }, r.createElement(C.Q, {
                        type: C._49.H5,
                        color: C.K.Base,
                        bold: !0
                    }, Object(o.d)("Welcome to your homepage, {displayName}!", {
                        displayName: this.props.data.currentUser.displayName
                    }, "OnboardingPrompt")), r.createElement(C._8, {
                        margin: {
                            y: 1
                        }
                    }, r.createElement(C.Q, null, Object(o.d)("Here you can find your Pulse Feed and popular content on Twitch. Take a moment to personalize this page to your interests.", "OnboardingPrompt"))), r.createElement(C._8, {
                        padding: {
                            bottom: .5
                        }
                    }, r.createElement(C.v, {
                        "data-test-selector": "onboarding-prompt__start",
                        onClick: this.startOnboarding
                    }, Object(o.d)("Start", "OnboardingPrompt")))), r.createElement(C._8, {
                        flexShrink: 0,
                        margin: {
                            top: .5
                        }
                    }, r.createElement(C.w, {
                        "data-test-selector": "onboarding-prompt__dismiss",
                        ariaLabel: Object(o.d)("dismiss onboarding", "OnboardingPrompt"),
                        type: C.y.Default,
                        icon: C._25.Close,
                        onClick: this.dismissOnboardingPrompt
                    }))) : null
                }, t = a.__decorate([Object(k.d)("OnboardingPrompt", {
                    autoReportInteractive: !0
                }), Object(b.a)(R, {
                    options: {
                        variables: {
                            limit: 18
                        }
                    },
                    skip: function(e) {
                        return !e.firstPageLoaded
                    }
                })], t)
            }(r.Component);
        var A = Object(i.b)(function(e) {
                return {
                    firstPageLoaded: e.session.firstPageLoaded
                }
            })(L),
            V = n("eXld"),
            U = n("2aoH"),
            j = n("8PKe"),
            q = n("oIkB"),
            M = n("VFqp"),
            G = n("cYgC"),
            Q = n("ojlS"),
            z = n("C/8M"),
            W = n("EImC"),
            B = function(e) {
                for (var t = e.cardCount, n = [], i = 0; i < t; i++) 1 === i ? n.push(r.createElement(W.b, {
                    key: i
                })) : n.push(r.createElement(W.a, {
                    key: i
                }));
                return r.createElement(C._8, null, n)
            },
            H = n("/0cZ"),
            K = Object(z.d)(function() {
                return {
                    feed_type: "rec"
                }
            })(G.a),
            $ = {
                limit: 5
            },
            X = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onCreatePost = function(e, n, i) {
                        return void 0 === i && (i = !1), t.props.createPost(e, n, i)
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.postRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.postRender()
                }, t.prototype.render = function() {
                    return this.props.data.loading ? r.createElement(B, {
                        cardCount: 5
                    }) : this.props.data.error ? (this.props.onDataError && this.props.onDataError(), r.createElement(C._8, {
                        margin: {
                            top: 3
                        }
                    }, r.createElement(_.a, {
                        message: Object(o.d)("Error loading data.", "PulseComponent")
                    }), ";")) : r.createElement(C._8, null, r.createElement(M.a, {
                        placeholder: Object(o.d)("Share a clip or video with your followers by adding links from Twitch, Vimeo, and YouTube.", "PulseComposer"),
                        onCreate: this.onCreatePost,
                        isConnectedToTwitter: this.props.data.currentUser.isConnectedToTwitter,
                        userID: this.props.data.currentUser.id,
                        composerLocation: M.b.HomePage
                    }), r.createElement(K, {
                        items: this.props.data.currentUser.pulseFeed.items || []
                    }), r.createElement(s.a, {
                        enabled: !this.props.data.loading && !this.props.data.error,
                        loadMore: this.props.loadMore,
                        contentLength: this.props.data.currentUser.pulseFeed.items.edges.length,
                        pixelThreshold: 100
                    }))
                }, t.prototype.postRender = function() {
                    this.props.data.loading || this.props.latencyTracking.reportInteractive()
                }, t = a.__decorate([Object(b.a)(H, {
                    options: {
                        fetchPolicy: "network-only",
                        variables: $
                    },
                    props: function(e) {
                        return a.__assign({}, e, {
                            loadMore: function() {
                                var t = e.data.currentUser.pulseFeed.items.edges;
                                return e.data.fetchMore({
                                    query: H,
                                    variables: {
                                        limit: 5,
                                        cursor: t[t.length - 1].cursor
                                    },
                                    updateQuery: function(e, t) {
                                        var n = t.fetchMoreResult;
                                        return {
                                            currentUser: a.__assign({}, n.currentUser, {
                                                pulseFeed: a.__assign({}, n.currentUser.pulseFeed, {
                                                    items: a.__assign({}, n.currentUser.pulseFeed.items, {
                                                        edges: e.currentUser.pulseFeed.items.edges.concat(n.currentUser.pulseFeed.items.edges)
                                                    })
                                                })
                                            })
                                        }
                                    }
                                })
                            }
                        })
                    }
                }), Object(b.a)(Q, {
                    props: function(e) {
                        return {
                            createPost: function(t, n, i) {
                                return e.mutate(a.__assign({}, Object(q.a)({
                                    channelID: e.ownProps.data.currentUser.id,
                                    body: t,
                                    embedURLs: n.map(function(e) {
                                        return e.sourceURL
                                    }),
                                    postToTwitter: i
                                }), {
                                    optimisticResponse: {
                                        createPost: {
                                            post: {
                                                id: "" + +new Date,
                                                createdAt: (new Date).toISOString(),
                                                body: {
                                                    content: t,
                                                    emotes: [],
                                                    __typename: "MessageBody"
                                                },
                                                author: e.ownProps.data.currentUser,
                                                embeds: n.map(function(e) {
                                                    return e.embed
                                                }),
                                                reactions: [],
                                                __typename: "Post"
                                            },
                                            tweetStatus: "",
                                            tweet: "",
                                            __typename: "Mutation"
                                        }
                                    },
                                    update: function(e, t) {
                                        var n = e.readQuery({
                                            query: H,
                                            variables: $
                                        });
                                        n && (n.currentUser.pulseFeed.items.edges = [{
                                            node: {
                                                content: t.data.createPost.post,
                                                reasons: [],
                                                tracking: {
                                                    batchID: "",
                                                    cardImpressionID: "",
                                                    recGenerationID: "",
                                                    recGenerationIndex: 0,
                                                    __typename: "FeedItemTracking"
                                                },
                                                __typename: "FeedItem"
                                            },
                                            cursor: "",
                                            __typename: "FeedItemEdge"
                                        }].concat(n.currentUser.pulseFeed.items.edges), e.writeQuery({
                                            query: H,
                                            data: n,
                                            variables: $
                                        }))
                                    }
                                }))
                            }
                        }
                    }
                }), Object(k.d)("Pulse")], t)
            }(r.Component),
            Z = n("L46p");
        var Y = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.postRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.postRender()
                }, t.prototype.render = function() {
                    var e, t, n = [];
                    return this.props.data.error ? r.createElement(_.a, {
                        message: Object(o.d)("Top Games are unavailable at this time.", "TopGamesCompoment")
                    }) : (this.props.data.loading || (e = this.props.data, t = [], e.games.edges.map(function(e) {
                        var n = e.node;
                        return n && n.id && t.push({
                            id: n.id,
                            name: n.name,
                            viewersCount: n.viewersCount,
                            boxArtURL: n.boxArtURL
                        })
                    }), n = t), r.createElement(F, {
                        title: Object(o.d)("Top Games", "TopGamesCompoment"),
                        items: n,
                        loading: this.props.data.loading,
                        limit: 18,
                        viewAllLinkTo: "/directory",
                        "data-a-target": "view-all-link"
                    }))
                }, t.prototype.postRender = function() {
                    this.props.data.loading || this.props.latencyTracking.reportInteractive()
                }, t = a.__decorate([Object(b.a)(Z, {
                    options: function(e) {
                        return {
                            variables: {
                                limit: e.count || 18
                            }
                        }
                    }
                }), Object(k.d)("TopGames")], t)
            }(r.Component),
            J = n("Hjo/"),
            ee = (n("jPY3"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        numSlotsAdded: 0,
                        pulseDataError: !1
                    }, t.logger = o.o.logger.withCategory("front-page"), t.recQueryFired = !1, t.onSlotAdded = function() {
                        t.setState(function(e) {
                            var t = e.numSlotsAdded + 1;
                            return t === Object.keys(g.b.front).length && u.a.display(g.b.front.leaderboard), {
                                numSlotsAdded: t
                            }
                        })
                    }, t.onPulseDataError = function() {
                        t.setState({
                            pulseDataError: !0
                        })
                    }, t.fireRecommendationsQuery = function(e) {
                        if (!t.recQueryFired && e.firstPageLoaded && "experiment" === o.o.experiments.getAssignment("TWILIGHT_NEW_HOMEPAGE")) {
                            t.recQueryFired = !0;
                            var n = Object(c.b)().substring(0, 16);
                            o.o.apollo.client.query({
                                query: J,
                                fetchPolicy: "network-only",
                                variables: {
                                    requestID: n,
                                    platform: "all",
                                    itemsPerRow: 12
                                }
                            }).then(function(e) {
                                var t = e.data;
                                t.currentUser && t.currentUser.login && o.o.tracking.track(p.SpadeEventType.RecRequestClient, {
                                    login: t.currentUser.login,
                                    request_id: n,
                                    endpoint: "recs_live",
                                    section: "twitch_home"
                                })
                            }).catch(function(e) {
                                t.logger.error(e, "Unable to query recommendation data")
                            })
                        }
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentWillMount = function() {
                    g.g.addListener(g.e, this.onSlotAdded)
                }, t.prototype.componentDidMount = function() {
                    this.onRender(), o.o.setPageTitle(), this.fireRecommendationsQuery(this.props)
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.fireRecommendationsQuery(e)
                }, t.prototype.render = function() {
                    return r.createElement(C._8, {
                        fullHeight: !0
                    }, r.createElement(V.b, {
                        suppressScrollX: !0,
                        disableDebounce: !0
                    }), r.createElement(U.a, null, r.createElement(j.a, null)), r.createElement(C._8, {
                        padding: 3
                    }, r.createElement(v.a, {
                        adSize: g.c.front.leaderboard,
                        adUnit: g.d.frontpage,
                        "data-a-target": "frontpage-leaderboard-ad-slot",
                        slotID: g.b.front.leaderboard,
                        targeting: {
                            pagetype: g.a.frontpage
                        },
                        injectStyles: {
                            display: "flex",
                            justifyContent: "center",
                            textAlign: "center",
                            marginBottom: "2rem"
                        },
                        autoEnable: !1
                    }), r.createElement(C._8, {
                        className: "front-page",
                        display: C.R.Flex,
                        flexDirection: C.T.ColumnReverse,
                        breakpointMedium: {
                            flexDirection: C.T.Row
                        },
                        flexWrap: C.U.NoWrap,
                        margin: {
                            x: "auto"
                        }
                    }, r.createElement(C._8, {
                        className: "front-page__main-col",
                        flexGrow: 0,
                        flexShrink: 0
                    }, r.createElement(A, null), r.createElement(X, {
                        onDataError: this.onPulseDataError
                    })), r.createElement(C._8, {
                        flexGrow: 1,
                        breakpointMedium: {
                            padding: {
                                left: 2
                            }
                        }
                    }, r.createElement(s.c, {
                        bottomPixelThreshold: 20,
                        disableStickinessBelowWidth: 1127,
                        disableStickiness: this.state.pulseDataError
                    }, r.createElement(C._8, {
                        margin: {
                            bottom: 1
                        }
                    }, r.createElement(f.b, {
                        renderContext: f.a.Front
                    })), r.createElement(C._8, {
                        display: C.R.Hide,
                        breakpointMedium: {
                            display: C.R.Block
                        }
                    }, r.createElement(v.a, {
                        adSize: g.c.front.rightTop,
                        adUnit: g.d.frontpage,
                        "data-a-target": "frontpage-right-top-ad-slot",
                        slotID: g.b.front.rightTop,
                        targeting: {
                            pagetype: g.a.frontpage
                        },
                        injectStyles: {
                            display: "flex",
                            justifyContent: "center",
                            textAlign: "center",
                            marginBottom: "1rem"
                        },
                        autoEnable: !1
                    })), r.createElement(C._8, {
                        margin: {
                            bottom: 1
                        }
                    }, r.createElement(O, null)), r.createElement(d.a, null, r.createElement(Y, null)), r.createElement(C._8, {
                        display: C.R.Hide,
                        breakpointMedium: {
                            display: C.R.Block
                        }
                    }, r.createElement(v.a, {
                        adSize: g.c.front.rightBottom,
                        adUnit: g.d.frontpage,
                        "data-a-target": "frontpage-right-bottom-ad-slot",
                        slotID: g.b.front.rightBottom,
                        targeting: {
                            pagetype: g.a.frontpage
                        },
                        injectStyles: {
                            display: "flex",
                            justifyContent: "center",
                            marginTop: "1rem"
                        },
                        autoEnable: !1
                    })))))))
                }, t.prototype.componentWillUnmount = function() {
                    g.g.removeListener(g.e, this.onSlotAdded)
                }, t.prototype.onRender = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t = a.__decorate([Object(k.d)("FrontPage", {
                    destination: m.a.Index
                }), Object(l.a)({
                    location: p.PageviewLocation.FrontPage
                })], t)
            }(r.Component));
        var te = Object(i.b)(function(e) {
            return {
                firstPageLoaded: e.session.firstPageLoaded
            }
        })(ee);
        n.d(t, "FrontPage", function() {
            return te
        })
    },
    KQs2: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("GiK3"),
            r = n("C/8M"),
            o = n("rzuL"),
            d = n("CSlQ"),
            s = n("Odds"),
            l = n("KSGD"),
            c = n("4mYF"),
            m = n("F8kA"),
            u = Object(d.d)("EmbedInfo", {
                autoReportInteractive: !0
            })(function(e) {
                var t = e.title,
                    n = e.author,
                    i = e.externalAuthorName,
                    r = e.description,
                    o = null,
                    d = null;
                return n ? (o = a.createElement(s._8, {
                    margin: {
                        right: 1
                    },
                    flexShrink: 0
                }, a.createElement(m.a, {
                    to: "/" + n.login,
                    "data-a-target": "pulse-profile-picture"
                }, a.createElement(s._2, {
                    flexShrink: 0
                }, a.createElement(s.m, {
                    size: 40,
                    src: n.profileImageURL,
                    alt: "User profile picture"
                })))), d = a.createElement(s.Q, {
                    fontSize: s.V.Size6,
                    color: s.K.Alt
                }, a.createElement(m.a, {
                    to: "/" + n.login,
                    "data-a-target": "pulse-displayname-link"
                }, n.displayName))) : i && "" !== i && (d = a.createElement(s.Q, {
                    fontSize: s.V.Size6,
                    color: s.K.Alt
                }, i)), a.createElement(s._35, {
                    display: s.R.Flex,
                    flexWrap: s.U.NoWrap,
                    padding: 1,
                    background: s.n.Base
                }, o, a.createElement(s._8, {
                    flexGrow: 1,
                    overflow: s._11.Hidden
                }, d, a.createElement(s.Q, {
                    fontSize: s.V.Size6,
                    color: s.K.Base,
                    bold: !0,
                    ellipsis: !0
                }, t), r && a.createElement(s.Q, {
                    fontSize: s.V.Size6,
                    color: s.K.Alt2,
                    noWrap: !0
                }, r)))
            }),
            p = n("fc0G"),
            v = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onChannelStatus = function() {}, t.onWheelPostMessage = function(e) {
                        if (t.postMessageIsWheelEvent(e) && t.componentEl) {
                            var n = e.data.args[0].data,
                                a = new WheelEvent("wheel", i.__assign({
                                    bubbles: !0
                                }, n));
                            t.componentEl.dispatchEvent(a)
                        }
                    }, t.setComponentRef = function(e) {
                        t.componentEl = e
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive(), window.addEventListener("message", this.onWheelPostMessage)
                }, t.prototype.componentWillUnmount = function() {
                    window.removeEventListener("message", this.onWheelPostMessage)
                }, t.prototype.render = function() {
                    return a.createElement("div", {
                        ref: this.setComponentRef
                    }, a.createElement(s.k, {
                        ratio: s.l.Aspect16x9
                    }, this.getVideoEmbedComponent()))
                }, t.prototype.getVideoEmbedComponent = function() {
                    var e = this.props,
                        t = e.channelLogin,
                        n = e.vodID,
                        r = e.embedURL,
                        o = e.playerTypeOverride,
                        d = {
                            disableTheatreButton: !0,
                            onChannelStatus: this.onChannelStatus,
                            playerTypeOverride: o || p.b.Frontpage
                        };
                    return r ? a.createElement("iframe", {
                        src: r,
                        width: "100%",
                        height: "100%",
                        allowFullScreen: !0
                    }) : t ? a.createElement(p.c, i.__assign({
                        channelLogin: t
                    }, d)) : n ? a.createElement(p.c, i.__assign({
                        vodID: n
                    }, d)) : a.createElement(s._8, null)
                }, t.prototype.postMessageIsWheelEvent = function(e) {
                    return "player.embed.client" === e.data.namespace && "bridgeplayereventwithpayload" === e.data.method && e.data.args.length > 0 && "wheel" === e.data.args[0].event
                }, t = i.__decorate([Object(d.d)("EmbedVideoPlayer")], t)
            }(a.Component),
            g = function(e, t) {
                var n = e.embed,
                    i = n.broadcaster,
                    r = n.clipTitle,
                    d = n.clipCreatedAt,
                    l = n.durationSeconds,
                    m = n.embedURL,
                    g = n.thumbnailURL,
                    f = n.video,
                    k = n.viewCount,
                    h = f && f.game ? f.game.name : "";
                return a.createElement(s._8, null, a.createElement(c.a, {
                    createdAt: d,
                    lengthSeconds: l,
                    onClick: function() {
                        Object(o.c)(e, t.feedTrackingProps)
                    },
                    thumbnailURL: g,
                    type: c.b.Clip,
                    viewCount: k
                }, a.createElement(v, {
                    embedURL: m,
                    playerTypeOverride: p.b.Feed
                })), a.createElement(u, {
                    author: i,
                    title: r,
                    description: h
                }))
            };
        g.contextTypes = {
            feedTrackingProps: l.object
        };
        var f = Object(d.d)("ClipEmbed", {
                autoReportInteractive: !0
            })(g),
            k = n("6sO2"),
            h = Object(d.d)("PhotoOEmbed", {
                autoReportInteractive: !0
            })(function(e) {
                var t = e.embed,
                    n = t.title,
                    i = t.inputURL,
                    r = t.providerName,
                    o = t.authorName,
                    d = t.thumbnail;
                return a.createElement("a", {
                    href: "" + i,
                    target: "_blank",
                    rel: "noopener noreferrer"
                }, a.createElement(s.k, {
                    ratio: s.l.Aspect16x9
                }, a.createElement(s._8, null, a.createElement(s._2, {
                    fullWidth: !0,
                    fullHeight: !0,
                    position: s._15.Absolute
                }, a.createElement("img", {
                    src: d && d.url || k.o.config.defaultStreamPreviewURL
                })))), a.createElement(u, {
                    externalAuthorName: o || "",
                    title: n || "",
                    description: r || ""
                }))
            }),
            b = function(e, t) {
                var n = e.embed,
                    i = n.broadcaster,
                    r = n.game,
                    d = n.title,
                    l = n.previewImageURL,
                    m = n.viewersCount,
                    g = r ? r.name : "";
                return a.createElement(s._8, null, a.createElement(c.a, {
                    onClick: function() {
                        Object(o.c)(e, t.feedTrackingProps)
                    },
                    thumbnailURL: l,
                    type: c.b.Stream,
                    viewCount: m
                }, a.createElement(v, {
                    channelLogin: i.login,
                    playerTypeOverride: p.b.Feed
                })), a.createElement(u, {
                    author: i,
                    title: d,
                    description: g
                }))
            };
        b.contextTypes = {
            feedTrackingProps: l.object
        };
        var y = Object(d.d)("StreamEmbed", {
                autoReportInteractive: !0
            })(b),
            S = function(e, t) {
                var n = e.embed,
                    i = n.id,
                    r = n.owner,
                    d = n.lengthSeconds,
                    l = n.game,
                    m = n.publishedAt,
                    g = n.previewThumbnailURL,
                    f = n.title,
                    k = n.videoViewCount,
                    h = l ? l.name : "";
                return a.createElement(s._8, null, a.createElement(c.a, {
                    createdAt: m || "",
                    lengthSeconds: d || 0,
                    onClick: function() {
                        Object(o.c)(e, t.feedTrackingProps)
                    },
                    thumbnailURL: g,
                    type: c.b.Video,
                    viewCount: k
                }, a.createElement(v, {
                    vodID: i,
                    playerTypeOverride: p.b.Feed
                })), a.createElement(u, {
                    author: r,
                    title: f || "",
                    description: h || ""
                }))
            };
        S.contextTypes = {
            feedTrackingProps: l.object
        };
        var _ = Object(d.d)("VideoEmbed", {
                autoReportInteractive: !0
            })(S),
            N = (n("HgOP"), function(e, t) {
                var n = e.embed,
                    i = n.title,
                    r = n.providerName,
                    d = n.authorName,
                    l = n.html,
                    m = n.thumbnail,
                    p = l.replace("autoplay=false", "autoplay=true");
                return a.createElement(s._8, null, a.createElement(c.a, {
                    thumbnailURL: m && m.url || k.o.config.defaultStreamPreviewURL,
                    type: c.b.VideoOEmbed,
                    onClick: function() {
                        Object(o.c)(e, t.feedTrackingProps)
                    }
                }, a.createElement("div", {
                    className: "video-oembed-container",
                    dangerouslySetInnerHTML: {
                        __html: p
                    }
                })), a.createElement(u, {
                    externalAuthorName: d || "",
                    title: i || "",
                    description: r || ""
                }))
            });
        N.contextTypes = {
            feedTrackingProps: l.object
        };
        var E = {
                PhotoOEmbed: h,
                VideoOEmbed: Object(d.d)("VideoOEmbed", {
                    autoReportInteractive: !0
                })(N),
                Clip: f,
                Stream: y,
                Video: _
            },
            C = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onImpression = function(e) {
                        Object(o.b)({
                            embed: t.props.embed
                        }, e)
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive(), this.props.impressionTracking.onImpression(this.onImpression)
                }, t.prototype.render = function() {
                    var e = E[this.props.embed.__typename];
                    return e ? a.createElement(e, {
                        embed: this.props.embed
                    }) : a.createElement(s._8, null)
                }, t = i.__decorate([Object(d.d)("Embed"), Object(r.c)()], t)
            }(a.Component);
        n.d(t, "a", function() {
            return C
        })
    },
    L46p: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "TopGames_Games"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "limit"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Int"
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
                            value: "games"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "first"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "limit"
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
                                                    value: "viewersCount"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "boxArtURL"
                                                },
                                                arguments: [{
                                                    kind: "Argument",
                                                    name: {
                                                        kind: "Name",
                                                        value: "width"
                                                    },
                                                    value: {
                                                        kind: "IntValue",
                                                        value: "285"
                                                    }
                                                }, {
                                                    kind: "Argument",
                                                    name: {
                                                        kind: "Name",
                                                        value: "height"
                                                    },
                                                    value: {
                                                        kind: "IntValue",
                                                        value: "380"
                                                    }
                                                }],
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
                end: 136
            }
        };
        n.loc.source = {
            body: "query TopGames_Games($limit: Int) {\ngames(first: $limit) {\nedges {\nnode {\nid\nname\nviewersCount\nboxArtURL(width: 285 height: 380)\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    LUP9: function(e, t, n) {
        "use strict";
        var i = n("GiK3"),
            a = n("6sO2"),
            r = {
                RECOMMENDATION_FOLLOWED: "followed",
                RECOMMENDATION_VIEWED: "viewed",
                RECOMMENDATION_POPULAR: "popular"
            },
            o = n("Odds");

        function d(e) {
            switch (e) {
                case r.RECOMMENDATION_VIEWED:
                    return Object(a.d)("Because of your viewing history", "FeedItemReason");
                case r.RECOMMENDATION_FOLLOWED:
                    return Object(a.d)("Because of who you follow", "FeedItemReason");
                case r.RECOMMENDATION_POPULAR:
                    return Object(a.d)("Because it's popular", "FeedItemReason");
                default:
                    return ""
            }
        }
        var s = function(e) {
            if (0 === e.reasons.length) return i.createElement(o._8, null);
            var t = d(e.reasons[0].reason);
            return "" === t ? i.createElement(o._8, null) : i.createElement(o._8, {
                padding: 1
            }, t)
        };
        n.d(t, "b", function() {
            return d
        }), n.d(t, "a", function() {
            return s
        })
    },
    Lq4d: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "feedUser"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "User"
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
                                value: "70"
                            }
                        }],
                        directives: []
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 76
            }
        };
        n.loc.source = {
            body: "fragment feedUser on User {\nid\ndisplayName\nlogin\nprofileImageURL(width:70)\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    MTWZ: function(e, t) {},
    Mlfg: function(e, t, n) {
        var i = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "Reaction_Add"
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
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "feedItemClip"
                                        },
                                        directives: []
                                    }, {
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "feedItemPost"
                                        },
                                        directives: []
                                    }, {
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "feedItemVideo"
                                        },
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
                end: 319
            }
        };
        i.loc.source = {
            body: '#import "twilight/features/feed/models/clip-fragment.gql"\n#import "twilight/features/feed/models/post-fragment.gql"\n#import "twilight/features/feed/models/video-fragment.gql"\nmutation Reaction_Add($input: AddReactionInput!) {\naddReaction(input: $input) {\ncontent {\n...feedItemClip\n...feedItemPost\n...feedItemVideo\n}\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var a = {};

        function r(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !a[t] && (a[t] = !0, !0)
            })
        }
        i.definitions = i.definitions.concat(r(n("I5q7").definitions)), i.definitions = i.definitions.concat(r(n("S0OZ").definitions)), i.definitions = i.definitions.concat(r(n("fWQn").definitions)), e.exports = i
    },
    OkeX: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "FollowedGames_Games"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "limit"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Int"
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
                                    value: "followedGames"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "first"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "limit"
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
                                            value: "nodes"
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
                                                    value: "viewersCount"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "boxArtURL"
                                                },
                                                arguments: [{
                                                    kind: "Argument",
                                                    name: {
                                                        kind: "Name",
                                                        value: "width"
                                                    },
                                                    value: {
                                                        kind: "IntValue",
                                                        value: "285"
                                                    }
                                                }, {
                                                    kind: "Argument",
                                                    name: {
                                                        kind: "Name",
                                                        value: "height"
                                                    },
                                                    value: {
                                                        kind: "IntValue",
                                                        value: "380"
                                                    }
                                                }],
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
                end: 156
            }
        };
        n.loc.source = {
            body: "query FollowedGames_Games($limit: Int) {\ncurrentUser{\nid\nfollowedGames(first: $limit){\nnodes{\nid\nname\nviewersCount\nboxArtURL(width: 285 height: 380)\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    S0OZ: function(e, t, n) {
        var i = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "feedItemPost"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "Post"
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
                            value: "createdAt"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "body"
                        },
                        arguments: [],
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
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "embeddedEmote"
                                        },
                                        directives: []
                                    }]
                                }
                            }]
                        }
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
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "setID"
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
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "embeds"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "feedItemClip"
                                },
                                directives: []
                            }, {
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "feedItemVideo"
                                },
                                directives: []
                            }, {
                                kind: "InlineFragment",
                                typeCondition: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "PhotoOEmbed"
                                    }
                                },
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
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
                                            value: "inputURL"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "providerName"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "authorName"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "thumbnail"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "url"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }]
                                }
                            }, {
                                kind: "InlineFragment",
                                typeCondition: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "VideoOEmbed"
                                    }
                                },
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
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
                                            value: "inputURL"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "providerName"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "authorName"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "thumbnail"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "url"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "html"
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
                            value: "author"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "feedUser"
                                },
                                directives: []
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 631
            }
        };
        i.loc.source = {
            body: '#import "twilight/features/chat/models/embedded-emote-fragment.gql"\n#import "twilight/features/feed/models/clip-fragment.gql"\n#import "twilight/features/feed/models/user-fragment.gql"\n#import "twilight/features/feed/models/video-fragment.gql"\nfragment feedItemPost on Post {\nid\ncreatedAt\nbody {\ncontent\nemotes {\n...embeddedEmote\n}\n}\nreactions {\nemote {\nid\ntoken\nsetID\n}\ncount\nself {\nhasReacted\n}\n}\nembeds {\n...feedItemClip\n...feedItemVideo\n... on PhotoOEmbed {\ntitle\ninputURL\nproviderName\nauthorName\nthumbnail {\nurl\n}\n}\n... on VideoOEmbed {\ntitle\ninputURL\nproviderName\nauthorName\nthumbnail {\nurl\n}\nhtml\n}\n}\nauthor {\n...feedUser\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var a = {};

        function r(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !a[t] && (a[t] = !0, !0)
            })
        }
        i.definitions = i.definitions.concat(r(n("0ImK").definitions)), i.definitions = i.definitions.concat(r(n("I5q7").definitions)), i.definitions = i.definitions.concat(r(n("Lq4d").definitions)), i.definitions = i.definitions.concat(r(n("fWQn").definitions)), e.exports = i
    },
    S4HN: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return i
        }), n.d(t, "a", function() {
            return a
        }), n.d(t, "g", function() {
            return d
        }), n.d(t, "f", function() {
            return s
        }), n.d(t, "d", function() {
            return l
        }), n.d(t, "e", function() {
            return c
        }), n.d(t, "c", function() {
            return m
        });
        var i, a, r = n("6sO2"),
            o = n("vH/s");
        ! function(e) {
            e.HomepageCTA = "homepage_cta", e.NewSignup = "new_signup"
        }(i || (i = {})),
        function(e) {
            e.Click = "click", e.Impression = "impression", e.Start = "start", e.Dismissed = "dismissed", e.Completed = "completed"
        }(a || (a = {}));
        var d = function(e) {
                var t = {
                    source: e.source,
                    action: a.Start
                };
                r.n.track(o.SpadeEventType.OnboardingEvent, t)
            },
            s = function() {
                var e = {
                    source: i.HomepageCTA,
                    action: a.Dismissed
                };
                r.n.track(o.SpadeEventType.OnboardingEvent, e)
            },
            l = function() {
                var e = {
                    source: i.HomepageCTA,
                    action: a.Completed
                };
                r.n.track(o.SpadeEventType.OnboardingEvent, e)
            },
            c = function(e, t) {
                var n = {
                    src: o.SpadeEventType.OnboardingEvent,
                    game: t
                };
                r.n.track(e, n)
            },
            m = function(e) {
                r.n.track(o.SpadeEventType.BrowseForYou, e)
            }
    },
    TUg1: function(e, t) {},
    TWJL: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        }), n.d(t, "b", function() {
            return a
        }), n.d(t, "c", function() {
            return r
        }), n.d(t, "d", function() {
            return o
        }), n.d(t, "e", function() {
            return d
        }), t.f = function(e) {
            var t = e.split(":");
            if (t.length < 2) return {
                type: "",
                id: ""
            };
            return {
                type: t[0],
                id: t[1]
            }
        };
        var i = "clip",
            a = "url",
            r = "post",
            o = "stream",
            d = "vod"
    },
    VFqp: function(e, t, n) {
        "use strict";
        var i, a = n("TToO"),
            r = n("GiK3"),
            o = n("6sO2"),
            d = n("rCmJ"),
            s = n("+Znq"),
            l = n("czpb"),
            c = n("ieBa"),
            m = n("C/8M"),
            u = n("rzuL"),
            p = n("CSlQ"),
            v = n("Odds"),
            g = n("KQs2"),
            f = n("7vx8"),
            k = n("Z/A0"),
            h = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentDidUpdate = function() {
                    this.props.data && this.props.data.embed && this.props.onLoad(this.props.url, this.props.data.embed)
                }, t.prototype.render = function() {
                    return null
                }, t = a.__decorate([Object(f.a)(k, {
                    skip: function(e) {
                        return !e.url
                    },
                    options: function(e) {
                        return {
                            variables: {
                                url: e.url
                            }
                        }
                    }
                })], t)
            }(r.Component),
            b = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        cachedEmbeds: {}
                    }, t.onEmbedLoad = function(e, n) {
                        var i;
                        t.setState({
                            cachedEmbeds: a.__assign({}, t.state.cachedEmbeds, (i = {}, i[e] = n, i))
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidUpdate = function() {
                    var e = this.state.cachedEmbeds[this.props.url];
                    e && this.props.onLoad(this.props.url, e)
                }, t.prototype.render = function() {
                    var e = this.props.url;
                    return !e || this.state.cachedEmbeds[e] ? null : r.createElement(h, {
                        url: e,
                        onLoad: this.onEmbedLoad
                    })
                }, t
            }(r.Component),
            y = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        embed: void 0,
                        removedEmbedURL: ""
                    }, t.onEmbedLoad = function(e, n) {
                        t.state.embed !== n && (t.setState({
                            embed: n
                        }), t.props.onSetEmbed({
                            embed: n,
                            sourceURL: e
                        }))
                    }, t.removeEmbed = function() {
                        t.setState({
                            embed: void 0,
                            removedEmbedURL: t.props.embedURL
                        }), t.props.onSetEmbed()
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidUpdate = function() {
                    !this.props.embedURL && this.state.removedEmbedURL && this.setState({
                        removedEmbedURL: ""
                    })
                }, t.prototype.render = function() {
                    var e = this.props.embedURL;
                    return (this.state.embed || this.state.removedEmbedURL === this.props.embedURL) && (e = ""), r.createElement(v._8, null, this.state.embed && r.createElement(v._8, {
                        position: v._15.Relative,
                        margin: {
                            top: 1
                        }
                    }, r.createElement(v._8, {
                        className: "embed-preview-close",
                        position: v._15.Absolute,
                        zIndex: v._62.Default,
                        attachTop: !0,
                        attachRight: !0
                    }, r.createElement(v.w, {
                        onClick: this.removeEmbed,
                        overlay: !0,
                        icon: v._25.Close,
                        ariaLabel: Object(o.d)("Close", "EmbedPreview")
                    })), r.createElement(g.a, {
                        embed: this.state.embed
                    })), r.createElement(b, {
                        url: e,
                        onLoad: this.onEmbedLoad
                    }))
                }, t
            }(r.Component),
            S = Object(l.a)("/settings/profile"),
            _ = /(?:https?:\/\/)?(?:[-a-zA-Z0-9@:%_\+~#=]+\.)+[a-z]{2,6}\b(?:[-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
        ! function(e) {
            e.HomePage = "home", e.Channel = "channel", e.Dashboard = "dashboard", e.Contextual = "contextual"
        }(i || (i = {}));
        var N = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        hasInteractedOrPageload: t.props.firstPageLoaded,
                        disabled: !1,
                        shareToTwitter: !1,
                        isEmotePickerMenuVisible: !1,
                        isTwitterBubbleVisible: !1,
                        embed: void 0,
                        inputEmbedURL: ""
                    }, t.minHeight = 50, t.setTextArea = function(e) {
                        t.textArea = e, t.resize()
                    }, t.handleSetEmbed = function(e) {
                        t.setState({
                            embed: e
                        })
                    }, t.parseEmbeds = function() {
                        if (t.textArea) {
                            var e = t.textArea.value.match(_);
                            t.setState({
                                inputEmbedURL: e && e.length ? e[0] : ""
                            })
                        }
                    }, t.onKeyDown = function(e) {
                        (e.metaKey || e.ctrlKey) && "Enter" === e.key && t.onSubmit()
                    }, t.resize = function() {
                        t.textArea && (t.textArea.style.height = t.minHeight + "px", t.textArea.style.height = t.textArea.scrollHeight + "px")
                    }, t.onChange = function(e) {
                        t.resize(), t.parseEmbeds()
                    }, t.onSubmit = function() {
                        var e = t.textArea.value.trim();
                        if (!t.state.disabled && e) {
                            t.disableComposer();
                            var n = [],
                                i = t.state.embed || {
                                    sourceURL: "",
                                    embed: void 0
                                };
                            i && i.sourceURL && i.embed && n.push(i), t.props.onCreate(e, n, t.state.shareToTwitter).then(function(e) {
                                t.resetComposer();
                                var n = e.data.createPost.post,
                                    i = n.id.split(":"),
                                    a = {
                                        action: m.a.Create,
                                        postID: i[i.length - 1],
                                        postContent: n.body && n.body.content || void 0,
                                        composerLocation: t.props.composerLocation
                                    };
                                Object(u.e)(a)
                            }, function() {
                                t.enableComposer()
                            })
                        }
                    }, t.interact = function() {
                        t.setState({
                            hasInteractedOrPageload: !0
                        })
                    }, t.onFocus = function() {
                        t.interact()
                    }, t.onMouseEnter = function() {
                        t.interact()
                    }, t.disableComposer = function() {
                        t.setState({
                            disabled: !0
                        })
                    }, t.enableComposer = function() {
                        t.setState({
                            disabled: !1
                        })
                    }, t.resetComposer = function() {
                        t.textArea.value = "", t.textArea.selectionStart = 0, t.textArea.selectionEnd = 0, t.setState({
                            shareToTwitter: !1,
                            embed: void 0,
                            inputEmbedURL: ""
                        }), t.enableComposer()
                    }, t.toggleShareActivity = function() {
                        t.setState(function(e) {
                            return {
                                shareToTwitter: !e.shareToTwitter
                            }
                        })
                    }, t.onEmotePickerClickOut = function() {
                        t.setState({
                            isEmotePickerMenuVisible: !1
                        })
                    }, t.closeTwitterBubble = function() {
                        t.setState({
                            isTwitterBubbleVisible: !1
                        })
                    }, t.toggleEmotePicker = function() {
                        t.interact(), t.setState(function(e) {
                            return {
                                isEmotePickerMenuVisible: !e.isEmotePickerMenuVisible
                            }
                        })
                    }, t.onClickEmote = function(e, n) {
                        e += " ", t.textArea.selectionStart > 0 && " " !== t.textArea.value[t.textArea.selectionStart - 1] && (e = " " + e);
                        var i = t.textArea.selectionStart + e.length,
                            a = t.textArea.value.substring(0, t.textArea.selectionStart) + e + t.textArea.value.substring(t.textArea.selectionEnd, t.textArea.value.length);
                        t.textArea.value = a, t.textArea.focus(), t.textArea.selectionStart = i, t.textArea.selectionEnd = i
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    !this.props.firstPageLoaded && e.firstPageLoaded && this.setState({
                        hasInteractedOrPageload: !0
                    })
                }, t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = Object(o.d)("Post", "Composer"),
                        t = r.createElement(c.b, {
                            key: "emote-picker",
                            onClick: this.toggleEmotePicker
                        }),
                        n = null;
                    this.state.hasInteractedOrPageload && (n = r.createElement(c.c, {
                        channelOwnerID: this.props.userID,
                        onClickEmote: this.onClickEmote,
                        toggleVisibility: this.toggleEmotePicker,
                        visible: this.state.isEmotePickerMenuVisible && !this.state.disabled,
                        direction: v.r.BottomRight
                    }));
                    var i, a = r.createElement(d.a, {
                        onClickOut: this.onEmotePickerClickOut
                    }, t, n);
                    return i = this.props.isConnectedToTwitter ? r.createElement(v.J, {
                        "data-test-selector": "twitter-checkbox",
                        id: "share-twitter-toggle",
                        label: Object(o.d)("Share Posts to Twitter", "TwitterShare"),
                        onChange: this.toggleShareActivity,
                        checked: this.state.shareToTwitter
                    }) : r.createElement("a", {
                        href: S
                    }, Object(o.d)("Connect Twitter", "ConnectTwitter")), r.createElement(v._35, {
                        elevation: 1,
                        padding: 1,
                        margin: {
                            bottom: 1
                        },
                        background: v.n.Base,
                        position: v._15.Relative,
                        "data-a-target": "pulse-post-container"
                    }, r.createElement("div", {
                        onMouseEnter: this.onMouseEnter
                    }, r.createElement(v._46, {
                        "data-test-selector": "composer",
                        "data-a-target": "pulse-input",
                        disabled: this.state.disabled,
                        onKeyDown: this.onKeyDown,
                        onChange: this.onChange,
                        onFocus: this.onFocus,
                        placeholder: this.props.placeholder ? this.props.placeholder : "",
                        noResize: !0,
                        refDelegate: this.setTextArea,
                        paddingRight: 30,
                        overflow: v._11.Hidden
                    }), r.createElement(v._35, {
                        textAlign: v._45.Right,
                        position: v._15.Absolute,
                        attachTop: !0,
                        attachRight: !0,
                        margin: {
                            top: 1,
                            right: 1
                        }
                    }, a), r.createElement(v._8, {
                        display: v.R.Flex,
                        margin: {
                            top: 1
                        }
                    }, r.createElement(v._8, {
                        flexGrow: 1
                    }), r.createElement(v._8, {
                        margin: {
                            right: 1
                        }
                    }, r.createElement(d.a, {
                        onClickOut: this.closeTwitterBubble
                    }, r.createElement(s.a, null, r.createElement(v.w, {
                        icon: v._25.Gear,
                        ariaLabel: Object(o.d)("Composer Settings", "ComposerSettings"),
                        "data-test-selector": "composer-setting",
                        "data-a-target": "pulse-settings"
                    }), r.createElement(v.q, {
                        direction: v.r.Left
                    }, r.createElement(v._8, {
                        padding: 1
                    }, i))))), r.createElement(v._8, null, r.createElement(v.v, {
                        "data-test-selector": "submit-post",
                        disabled: this.state.disabled,
                        ariaLabel: e,
                        onClick: this.onSubmit,
                        "data-a-target": "pulse-post-button"
                    }, e)))), !this.state.disabled && r.createElement(y, {
                        embedURL: this.state.inputEmbedURL,
                        onSetEmbed: this.handleSetEmbed
                    }))
                }, t = a.__decorate([Object(p.d)("Composer")], t)
            }(r.Component),
            E = n("RH2O");
        var C = Object(E.b)(function(e) {
            return {
                firstPageLoaded: e.session.firstPageLoaded
            }
        })(N);
        n.d(t, !1, function() {
            return "composer"
        }), n.d(t, !1, function() {
            return "submit-post"
        }), n.d(t, !1, function() {
            return "twitter-checkbox"
        }), n.d(t, !1, function() {
            return "composer-setting"
        }), n.d(t, !1, function() {
            return _
        }), n.d(t, "b", function() {
            return i
        }), n.d(t, !1, function() {
            return N
        }), n.d(t, "a", function() {
            return C
        })
    },
    VMA7: function(e, t, n) {
        var i = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "feed"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "FeedItemConnection"
                    }
                },
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
                                                kind: "FragmentSpread",
                                                name: {
                                                    kind: "Name",
                                                    value: "feedItemClip"
                                                },
                                                directives: []
                                            }, {
                                                kind: "FragmentSpread",
                                                name: {
                                                    kind: "Name",
                                                    value: "feedItemPost"
                                                },
                                                directives: []
                                            }, {
                                                kind: "FragmentSpread",
                                                name: {
                                                    kind: "Name",
                                                    value: "feedItemStream"
                                                },
                                                directives: []
                                            }, {
                                                kind: "FragmentSpread",
                                                name: {
                                                    kind: "Name",
                                                    value: "feedItemVideo"
                                                },
                                                directives: []
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "reasons"
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
                                                        value: "FeedItemReason"
                                                    }
                                                },
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "reason"
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
                                            value: "tracking"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "batchID"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "cardImpressionID"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "recGenerationID"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "recGenerationIndex"
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
                                    value: "cursor"
                                },
                                arguments: [],
                                directives: []
                            }]
                        }
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "pageInfo"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "hasNextPage"
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
                end: 522
            }
        };
        i.loc.source = {
            body: '#import "twilight/features/feed/models/post-fragment.gql"\n#import "twilight/features/feed/models/clip-fragment.gql"\n#import "twilight/features/feed/models/video-fragment.gql"\n#import "twilight/features/feed/models/stream-fragment.gql"\nfragment feed on FeedItemConnection {\nedges {\nnode {\ncontent {\n...feedItemClip\n...feedItemPost\n...feedItemStream\n...feedItemVideo\n}\nreasons {\n... on FeedItemReason {\nreason\n}\n}\ntracking {\nbatchID\ncardImpressionID\nrecGenerationID\nrecGenerationIndex\n}\n}\ncursor\n}\npageInfo {\nhasNextPage\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var a = {};

        function r(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !a[t] && (a[t] = !0, !0)
            })
        }
        i.definitions = i.definitions.concat(r(n("S0OZ").definitions)), i.definitions = i.definitions.concat(r(n("I5q7").definitions)), i.definitions = i.definitions.concat(r(n("fWQn").definitions)), i.definitions = i.definitions.concat(r(n("rogX").definitions)), e.exports = i
    },
    WKwZ: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
        }), n.d(t, "d", function() {
            return o
        }), n.d(t, "e", function() {
            return d
        }), n.d(t, "c", function() {
            return i
        }), n.d(t, "b", function() {
            return a
        });
        var i, a, r = "carousel-player__main-description",
            o = "carousel-player-left-button",
            d = "carousel-player-right-button";
        ! function(e) {
            e[e.Horizontal = 1] = "Horizontal", e[e.Vertical = 2] = "Vertical"
        }(i || (i = {})),
        function(e) {
            e[e.Stream = 1] = "Stream", e[e.Vod = 2] = "Vod"
        }(a || (a = {}))
    },
    Wjt1: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.placeholderFeaturedBroadcasters = function(e) {
            return v([], e, !0)
        }, n.d(t, "FeaturedContent", function() {
            return g
        });
        var i = n("TToO"),
            a = n("GiK3"),
            r = (n.n(a), n("6sO2")),
            o = n("7vx8"),
            d = n("g91j"),
            s = n("WKwZ"),
            l = n("o8Pq"),
            c = n("8atL"),
            m = (n.n(c), n("Xg86")),
            u = n("CSlQ"),
            p = n("Odds");
        n.d(t, "FeaturedBroadcastersRenderContext", function() {
            return l.FeaturedBroadcastersRenderContext
        });

        function v(e, t, n) {
            switch (t) {
                case l.FeaturedBroadcastersRenderContext.AnonFront:
                    return a.createElement(d.a, {
                        items: e,
                        isLoading: n,
                        layout: s.c.Horizontal,
                        darkTheme: !0
                    });
                default:
                    return a.createElement(p._35, {
                        className: "featured-content",
                        background: p.n.Base,
                        elevation: 1
                    }, a.createElement(p._8, {
                        padding: 1
                    }, function(e) {
                        return e ? a.createElement(p.Q, {
                            fontSize: p.V.Size5,
                            color: p.K.Alt2
                        }, a.createElement(p._14, {
                            width: 100
                        })) : a.createElement(p.Q, {
                            fontSize: p.V.Size5,
                            color: p.K.Alt2
                        }, Object(r.d)("Featured", "FeaturedContentComponent"))
                    }(n)), a.createElement(d.a, {
                        items: e,
                        isLoading: n,
                        layout: s.c.Vertical
                    }))
            }
        }
        var g = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return i.__extends(t, e), t.prototype.componentDidMount = function() {
                this.postRender()
            }, t.prototype.componentDidUpdate = function() {
                this.postRender()
            }, t.prototype.render = function() {
                var e = this.props.data.featuredStreams || [],
                    t = Object(m.a)(e),
                    n = this.props.data.featuredVideos || [],
                    i = Object(m.b)(n);
                if (t.length > 0 && t.splice(t.length - i.length), this.props.shouldMixContent && i.length > 0) {
                    var a = 6 - i.length,
                        r = t.splice(a);
                    t = t.concat(i).concat(r)
                } else t = t.concat(i);
                var o = !(!this.props.data.loading && !this.props.data.error);
                return v(t, this.props.renderContext, o)
            }, t.prototype.postRender = function() {
                this.props.data && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
            }, t = i.__decorate([Object(o.a)(c, {
                options: function() {
                    return {
                        variables: {
                            language: r.o.intl.getLanguageCode()
                        }
                    }
                }
            }), Object(u.d)("FeaturedContent")], t)
        }(a.Component)
    },
    Xg86: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            return e.map(function(e) {
                var t = "",
                    n = null;
                return e.stream && e.stream.game && null !== e.stream.game.name && (t = e.stream.game.name), e.stream && e.stream.broadcaster && (n = e.stream.broadcaster), {
                    broadcaster: {
                        displayName: n ? n.displayName : "",
                        id: n ? n.id : "",
                        login: n ? n.login : "",
                        profileImageURL: n ? n.profileImageURL : ""
                    },
                    content: {
                        id: n ? n.login : "",
                        gameName: t,
                        type: i.b.Stream,
                        subType: e.stream ? e.stream.type : "",
                        viewersCount: e.stream ? e.stream.viewersCount : 0
                    },
                    description: a(e.description || ""),
                    imageURL: e.imageURL || "",
                    isScheduled: e.isScheduled || !1,
                    isSponsored: e.isSponsored || !1,
                    priorityLevel: e.priorityLevel,
                    title: e.title || ""
                }
            })
        }, t.b = function(e) {
            return e.map(function(e) {
                var t = "",
                    n = null;
                return e.video && e.video.game && null !== e.video.game.name && (t = e.video.game.name), e.video && e.video.owner && (n = e.video.owner), {
                    broadcaster: {
                        displayName: n ? n.displayName : "",
                        id: n ? n.id : "",
                        login: n ? n.login : "",
                        profileImageURL: n ? n.profileImageURL : ""
                    },
                    content: {
                        id: e.video ? e.video.id : "",
                        gameName: t,
                        type: i.b.Vod,
                        subType: "video",
                        viewersCount: e.video ? e.video.viewCount : 0
                    },
                    description: a(e.description || ""),
                    imageURL: e.imageURL || "",
                    isScheduled: e.isScheduled || !1,
                    isSponsored: e.isSponsored || !1,
                    priorityLevel: e.priorityLevel,
                    title: e.title || ""
                }
            })
        };
        var i = n("WKwZ");

        function a(e) {
            return e.replace(/\[\]\(.+\)/, "")
        }
    },
    "Xh/U": function(e, t, n) {
        "use strict";
        var i, a = n("GiK3"),
            r = n("KQs2"),
            o = n("RH2O"),
            d = n("2KeS"),
            s = n("+xm8"),
            l = n("f2i/"),
            c = n("Aj/L"),
            m = n("TToO"),
            u = n("KSGD"),
            p = n("6sO2"),
            v = n("rCmJ"),
            g = n("7vx8"),
            f = n("Tzcg"),
            k = n("l21v");
        ! function(e) {
            e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove"
        }(i || (i = {}));
        var h = n("CSlQ"),
            b = n("Odds"),
            y = (n("kaF0"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        disabled: !1
                    }, t.toggleReaction = function() {
                        if (!t.state.disabled) {
                            var e, n = t.props.reaction.self.hasReacted ? i.Remove : i.Add,
                                a = ((e = {})[i.Add] = t.props.addReaction, e[i.Remove] = t.props.removeReaction, e);
                            t.setState({
                                disabled: !0
                            }), a[n](t.props.reaction.emote.id, t.props.reaction.emote.token).then(function() {
                                return t.setState({
                                    disabled: !1
                                })
                            }, function() {
                                return t.setState({
                                    disabled: !1
                                })
                            })
                        }
                    }, t
                }
                return m.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.reaction,
                        t = e.count,
                        n = e.emote,
                        i = e.self,
                        r = n.token;
                    return parseInt(n.id, 10) < 15 && (r = Object(f.c)(n.token)), a.createElement("div", m.__assign({
                        onClick: this.toggleReaction
                    }, Object(b._63)(this.props)), a.createElement(b._52, {
                        label: 0 === t ? r : t + " " + r,
                        direction: b._54.Top,
                        align: b._53.Center
                    }, a.createElement(b._8, {
                        alignItems: b.c.Center,
                        className: i.hasReacted ? "activity-reaction activity-reaction--active" : "activity-reaction",
                        display: b.R.Flex
                    }, a.createElement(b._8, {
                        className: "activity-reaction__emote-contain"
                    }, a.createElement("img", m.__assign({
                        alt: r,
                        className: "activity-reaction__emote"
                    }, Object(k.e)("endorse" === n.id ? "1" : n.id)))))))
                }, t = m.__decorate([Object(h.d)("Reaction")], t)
            }(a.Component)),
            S = Object(h.d)("AdditionalReactions", {
                autoReportInteractive: !0
            })(function(e) {
                var t = e.reactions.map(function(t, n) {
                    return a.createElement(b._8, {
                        key: n,
                        margin: {
                            right: 1,
                            bottom: 1
                        }
                    }, a.createElement(y, {
                        key: n,
                        reaction: t,
                        addReaction: e.addReaction,
                        removeReaction: e.removeReaction,
                        "data-a-target": "additional-reaction-" + n
                    }))
                });
                return a.createElement(b.q, {
                    direction: e.position || b.r.TopCenter,
                    size: b.s.Small,
                    show: !0
                }, a.createElement(b._35, {
                    display: b.R.Flex,
                    flexWrap: b.U.Wrap,
                    padding: {
                        left: 1,
                        top: 1
                    }
                }, t))
            }),
            _ = Object(h.d)("TopReactions", {
                autoReportInteractive: !0
            })(function(e) {
                var t = e.reactions.map(function(t, n) {
                    return a.createElement(b._8, {
                        key: n,
                        margin: {
                            right: 1
                        }
                    }, a.createElement(y, {
                        key: n,
                        reaction: t,
                        addReaction: e.addReaction,
                        removeReaction: e.removeReaction,
                        "data-a-target": "top-reaction-" + n
                    }))
                });
                return a.createElement(b._35, {
                    display: b.R.Flex
                }, t)
            });

        function N(e) {
            var t = [];
            return e && 0 !== e.length && (t = e.slice().sort(function(e, t) {
                return function(e, t) {
                    if (e.emote.id === D.emote.id) return -1;
                    if (t.emote.id === D.emote.id) return 1;
                    var n = e.self.hasReacted,
                        i = t.self.hasReacted;
                    if (e.count === t.count) {
                        if (n && !i) return -1;
                        if (!n && i) return 1
                    }
                    return t.count - e.count
                }(e, t)
            })), t
        }
        var E = n("oIkB");
        var C = function(e, t, n) {
                return function(a, r, o, d) {
                    var s, l = (t = t || []).map(function(e) {
                            return e.emote.id
                        }).indexOf(r),
                        c = t.slice();
                    return l > -1 ? c[l] = m.__assign({}, t[l], {
                        count: t[l].count + function(e, t) {
                            return e === i.Add && t.self.hasReacted ? 0 : e === i.Add ? 1 : -1
                        }(e, t[l]),
                        self: m.__assign({}, t[l].self, {
                            hasReacted: e === i.Add
                        })
                    }) : e === i.Add && c.push(m.__assign({}, D, {
                        emote: m.__assign({}, D.emote, {
                            id: r,
                            token: o
                        }),
                        count: 1,
                        self: m.__assign({}, D.self, {
                            hasReacted: !0
                        })
                    })), n(m.__assign({}, Object(E.a)({
                        entityID: a,
                        emoteID: r
                    }), {
                        optimisticResponse: (s = {}, s[e === i.Add ? "addReaction" : "removeReaction"] = {
                            content: m.__assign({}, d, {
                                reactions: c
                            }),
                            __typename: e === i.Add ? "AddReactionPayload" : "RemoveReactionPayload"
                        }, s)
                    }))
                }
            },
            F = n("C/8M"),
            w = n("rzuL"),
            O = n("Mlfg"),
            R = n("Dqkc"),
            I = n("P+j/"),
            T = (n("24qG"), function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.closeEmoteSelector = function() {
                        n.setState({
                            emoteSelectorVisible: !1
                        })
                    }, n.emotesLoaded = function() {
                        n.setState({
                            emotesLoaded: !0
                        })
                    }, n.onEmoteSelect = function(e, t) {
                        n.props.onEmoteSelect(t, e), n.closeEmoteSelector()
                    }, n.toggleEmoteSelector = function() {
                        n.setState(function(e) {
                            return {
                                emoteSelectorVisible: !e.emoteSelectorVisible
                            }
                        })
                    }, n.state = {
                        emotesLoaded: !1,
                        emoteSelectorVisible: !1
                    }, n
                }
                return m.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = a.createElement("div", {
                        onClick: this.toggleEmoteSelector,
                        "data-a-target": "add-reaction-button"
                    }, this.props.children);
                    return this.state.emoteSelectorVisible || (e = a.createElement(b._52, {
                        label: Object(p.d)("Add a Reaction", "ReactionSelector"),
                        direction: b._54.Top,
                        align: b._53.Center
                    }, e)), a.createElement(b._8, {
                        className: "reaction-selector",
                        position: b._15.Relative
                    }, a.createElement(v.a, {
                        onClickOut: this.closeEmoteSelector
                    }, this.state.emoteSelectorVisible && a.createElement(I.a, {
                        onClickEmote: this.onEmoteSelect,
                        visible: this.state.emoteSelectorVisible && this.state.emotesLoaded,
                        toggleVisibility: this.toggleEmoteSelector,
                        onLoad: this.emotesLoaded,
                        direction: this.props.position || b.r.TopLeft
                    }), e))
                }, t = m.__decorate([Object(h.d)("ReactionSelector")], t)
            }(a.Component)),
            D = {
                emote: {
                    id: "9",
                    token: "<3",
                    setID: "",
                    __typename: "Emote"
                },
                count: 0,
                self: {
                    hasReacted: !1,
                    __typename: "ReactionSelfConnection"
                },
                __typename: "Reaction"
            },
            x = 4,
            P = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        additionalReactionsVisible: !1
                    }, t.addReaction = function(e, n) {
                        return t.toggleReaction(i.Add, e, n)
                    }, t.hideAdditional = function() {
                        t.setState({
                            additionalReactionsVisible: !1
                        })
                    }, t.removeReaction = function(e, n) {
                        return t.toggleReaction(i.Remove, e, n)
                    }, t.toggleAdditional = function(e, n) {
                        n.preventDefault(), e.length <= x || t.setState(function(e) {
                            return {
                                additionalReactionsVisible: !e.additionalReactionsVisible
                            }
                        })
                    }, t.toggleReaction = function(e, n, a) {
                        if (!t.props.isLoggedIn) return t.props.login(), Promise.reject(new Error("user not logged in"));
                        var r = a;
                        return parseInt(n, 10) < 15 && (r = Object(f.c)(a)), (e === i.Add ? t.props.addReaction : t.props.removeReaction)(t.props.parentEntity, n, a, t.props.parent).then(function(a) {
                            var o = {
                                action: e === i.Add ? F.a.Create : F.a.Remove,
                                entity: t.props.parentEntity,
                                reactionInt: n,
                                reactionText: r
                            };
                            return Object(w.f)(o, t.context.feedTrackingProps), a
                        })
                    }, t
                }
                return m.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this,
                        t = N(this.props.reactions);
                    0 !== t.length && t[0].emote.id === D.emote.id || (t = [D].concat(t));
                    var n = this.props.emoteSelectorAndOverflowPos && this.props.emoteSelectorAndOverflowPos === b.r.Bottom ? b.r.BottomCenter : b.r.TopCenter,
                        i = null;
                    this.state.additionalReactionsVisible && (i = a.createElement(S, {
                        reactions: t.slice(x),
                        addReaction: this.addReaction,
                        removeReaction: this.removeReaction,
                        position: n
                    }));
                    var r = this.props.reactions ? this.props.reactions.reduce(function(e, t) {
                            return e + t.count
                        }, 0) : 0,
                        o = null;
                    this.props.reactions && r > 0 && (o = this.props.reactions.length >= x ? a.createElement("a", {
                        href: "#",
                        onClick: function(n) {
                            return e.toggleAdditional(t, n)
                        },
                        "data-test-selector": "additional-toggle-tracking"
                    }, r) : a.createElement("span", {
                        "data-test-selector": "additional-toggle-tracking",
                        "data-a-target": "pulse-reaction-count"
                    }, r)), this.state.additionalReactionsVisible || (o = a.createElement(b._52, {
                        label: Object(p.d)("Total Reactions", "ReactionList"),
                        direction: b._54.Top,
                        align: b._53.Center
                    }, o)), n = this.props.emoteSelectorAndOverflowPos && this.props.emoteSelectorAndOverflowPos === b.r.Bottom ? b.r.BottomLeft : b.r.TopLeft;
                    var d = null;
                    return this.props.isLoggedIn && (d = a.createElement(b._8, {
                        margin: {
                            right: 1
                        }
                    }, a.createElement(T, {
                        onEmoteSelect: this.addReaction,
                        position: n
                    }, a.createElement(b._24, {
                        asset: b._25.AddReaction,
                        type: b._26.Brand,
                        width: 24,
                        height: 24
                    })))), a.createElement(b._35, {
                        display: b.R.Flex,
                        alignItems: b.c.Center,
                        padding: 1
                    }, a.createElement(_, {
                        reactions: t.slice(0, x),
                        addReaction: this.addReaction,
                        removeReaction: this.removeReaction
                    }), a.createElement(b._8, {
                        margin: {
                            right: 1
                        }
                    }, d), a.createElement(b._2, {
                        position: b._15.Relative
                    }, a.createElement(v.a, {
                        onClickOut: this.hideAdditional
                    }, i, o)))
                }, t.contextTypes = {
                    feedTrackingProps: u.object
                }, t = m.__decorate([Object(g.a)(O, {
                    props: function(e) {
                        return {
                            addReaction: C(i.Add, e.ownProps.reactions, e.mutate)
                        }
                    }
                }), Object(g.a)(R, {
                    props: function(e) {
                        return {
                            removeReaction: C(i.Remove, e.ownProps.reactions, e.mutate)
                        }
                    }
                }), Object(h.d)("Reactions")], t)
            }(a.Component);
        var L = Object(o.b)(function(e) {
                return {
                    isLoggedIn: Object(c.d)(e)
                }
            }, function(e) {
                return Object(d.b)({
                    login: function() {
                        return Object(l.f)(s.a.FeedReactionToggle)
                    }
                }, e)
            })(P),
            A = Object(h.d)("ClipContent", {
                autoReportInteractive: !0
            })(function(e) {
                var t = e.content,
                    n = t.slug,
                    i = t.reactions;
                return a.createElement(b._8, null, a.createElement(r.a, {
                    embed: e.content
                }), a.createElement(L, {
                    parentEntity: "clip:" + n,
                    reactions: i,
                    parent: e.content
                }))
            }),
            V = n("F8kA"),
            U = n("1jVX");
        n("MTWZ");
        var j = {
            Clip: A,
            Post: Object(h.d)("PostContent", {
                autoReportInteractive: !0
            })(function(e) {
                var t, n = e.content,
                    i = n.author,
                    o = n.body,
                    d = n.createdAt,
                    s = n.embeds,
                    l = n.id,
                    c = n.reactions;
                return a.createElement(b._8, null, a.createElement(b._35, {
                    display: b.R.Flex,
                    alignItems: b.c.Center,
                    padding: 1,
                    borderBottom: !0
                }, a.createElement(b._8, {
                    margin: {
                        right: 1
                    }
                }, a.createElement(V.a, {
                    to: {
                        pathname: "/" + i.login,
                        state: {
                            content: "author_avatar",
                            medium: "pulse_card"
                        }
                    },
                    "data-a-target": "pulse-profile-picture"
                }, a.createElement(b.m, {
                    size: 40,
                    src: i.profileImageURL,
                    alt: "User profile picture"
                }))), a.createElement(b._8, {
                    flexGrow: 1
                }, a.createElement(b._8, {
                    display: b.R.Flex,
                    flexDirection: b.T.Column
                }, a.createElement(V.a, {
                    to: {
                        pathname: "/" + i.login,
                        state: {
                            content: "author_name",
                            medium: "pulse_card"
                        }
                    }
                }, a.createElement(b.Q, {
                    fontSize: b.V.Size4,
                    color: b.K.Base,
                    bold: !0
                }, i.displayName)), a.createElement(V.a, {
                    to: "/" + i.login + "/p/" + l,
                    "data-a-target": "pulse-post-link"
                }, a.createElement(b._52, {
                    label: (t = new Date(d), Object(p.d)("{dateTime, date, medium} {dateTime, time, short}", {
                        dateTime: t
                    }, "PostDate")),
                    direction: b._54.Bottom
                }, a.createElement(b.Q, {
                    fontSize: b.V.Size6,
                    color: b.K.Alt2
                }, Object(p.h)(new Date(d)))))))), o && a.createElement(b._35, {
                    padding: 1,
                    className: "feed-item-text"
                }, Object(U.a)(o.content.trim(), o.emotes, i.login)), a.createElement(b._8, null, s && s.slice(0, 1).map(function(e, t) {
                    return a.createElement(r.a, {
                        key: t,
                        embed: e
                    })
                })), a.createElement(L, {
                    parentEntity: "post:" + l,
                    reactions: c,
                    emoteSelectorAndOverflowPos: e.emoteSelectorAndOverflowPos,
                    parent: e.content
                }))
            }),
            Video: Object(h.d)("VideoContent", {
                autoReportInteractive: !0
            })(function(e) {
                var t = e.content,
                    n = t.id,
                    i = t.reactions;
                return a.createElement(b._8, null, a.createElement(r.a, {
                    embed: e.content
                }), a.createElement(L, {
                    parentEntity: "vod:" + n,
                    reactions: i,
                    parent: e.content
                }))
            }),
            Stream: function(e) {
                return a.createElement(r.a, {
                    embed: e.content
                })
            }
        };

        function q(e) {
            return void 0 !== j[e]
        }
        var M = function(e) {
            var t = j[e.content.__typename];
            return a.createElement(t, {
                content: e.content,
                emoteSelectorAndOverflowPos: e.emoteSelectorAndOverflowPos
            })
        };
        n.d(t, "b", function() {
            return q
        }), n.d(t, "a", function() {
            return M
        })
    },
    Y4Yc: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "OnboardingPrompt_User"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "limit"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Int"
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
                                    value: "displayName"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "createdAt"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "followedGames"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "first"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "limit"
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
                                            value: "nodes"
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
                end: 131
            }
        };
        n.loc.source = {
            body: "query OnboardingPrompt_User($limit: Int) {\ncurrentUser {\nid\ndisplayName\ncreatedAt\nfollowedGames(first: $limit) {\nnodes {\nid\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "Z/A0": function(e, t, n) {
        var i = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Feed_Embed"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "url"
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
                        alias: {
                            kind: "Name",
                            value: "embed"
                        },
                        name: {
                            kind: "Name",
                            value: "feedEmbed"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "url"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "url"
                                }
                            }
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "feedItemClip"
                                },
                                directives: []
                            }, {
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "feedItemVideo"
                                },
                                directives: []
                            }, {
                                kind: "InlineFragment",
                                typeCondition: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "PhotoOEmbed"
                                    }
                                },
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
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
                                            value: "inputURL"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "providerName"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "authorName"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "thumbnail"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "url"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }]
                                }
                            }, {
                                kind: "InlineFragment",
                                typeCondition: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "VideoOEmbed"
                                    }
                                },
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
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
                                            value: "inputURL"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "providerName"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "authorName"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "thumbnail"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "url"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "html"
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
                end: 382
            }
        };
        i.loc.source = {
            body: '#import "twilight/features/feed/models/clip-fragment.gql"\n#import "twilight/features/feed/models/video-fragment.gql"\nquery Feed_Embed($url: String!) {\nembed: feedEmbed(url: $url) {\n...feedItemClip\n...feedItemVideo\n... on PhotoOEmbed {\ntitle\ninputURL\nproviderName\nauthorName\nthumbnail {\nurl\n}\n}\n... on VideoOEmbed {\ntitle\ninputURL\nproviderName\nauthorName\nthumbnail {\nurl\n}\nhtml\n}\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var a = {};

        function r(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !a[t] && (a[t] = !0, !0)
            })
        }
        i.definitions = i.definitions.concat(r(n("I5q7").definitions)), i.definitions = i.definitions.concat(r(n("fWQn").definitions)), e.exports = i
    },
    bHBY: function(e, t, n) {
        var i = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "shelf"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "Shelf"
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
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "key"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "context"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "game"
                                        },
                                        directives: []
                                    }]
                                }
                            }]
                        }
                    }, {
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
                                                    value: "shelfClip"
                                                },
                                                directives: []
                                            }, {
                                                kind: "FragmentSpread",
                                                name: {
                                                    kind: "Name",
                                                    value: "video"
                                                },
                                                directives: []
                                            }, {
                                                kind: "FragmentSpread",
                                                name: {
                                                    kind: "Name",
                                                    value: "stream"
                                                },
                                                directives: []
                                            }, {
                                                kind: "FragmentSpread",
                                                name: {
                                                    kind: "Name",
                                                    value: "game"
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
                end: 378
            }
        };
        i.loc.source = {
            body: '#import "twilight/pages/front/v2/queries/clip-fragment.gql"\n#import "twilight/pages/front/v2/queries/video-fragment.gql"\n#import "twilight/pages/front/v2/queries/stream-fragment.gql"\n#import "twilight/pages/front/v2/queries/game-fragment.gql"\nfragment shelf on Shelf {\nid\ntitle {\nkey\ncontext {\n...game\n}\n}\ncontent {\nedges {\nnode {\n...shelfClip\n...video\n...stream\n...game\n}\n}\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var a = {};

        function r(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !a[t] && (a[t] = !0, !0)
            })
        }
        i.definitions = i.definitions.concat(r(n("ddhI").definitions)), i.definitions = i.definitions.concat(r(n("c36g").definitions)), i.definitions = i.definitions.concat(r(n("blAa").definitions)), i.definitions = i.definitions.concat(r(n("9MIX").definitions)), e.exports = i
    },
    bNhH: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return i
        }), t.c = function(e) {
            return v([], e, !0)
        }, n.d(t, "a", function() {
            return g
        });
        var i, a = n("TToO"),
            r = n("GiK3"),
            o = (n.n(r), n("6sO2")),
            d = n("7vx8"),
            s = n("g91j"),
            l = n("WKwZ"),
            c = n("Xg86"),
            m = n("CSlQ"),
            u = n("Odds"),
            p = n("uckt");
        n.n(p);
        ! function(e) {
            e[e.AnonFront = 1] = "AnonFront", e[e.Front = 2] = "Front"
        }(i || (i = {}));

        function v(e, t, n) {
            switch (t) {
                case i.AnonFront:
                    return r.createElement(s.a, {
                        items: e,
                        isLoading: n,
                        layout: l.c.Horizontal,
                        darkTheme: !0
                    });
                default:
                    return r.createElement(u._35, {
                        className: "featured-broadcasters",
                        background: u.n.Base,
                        elevation: 1
                    }, r.createElement(u._8, {
                        padding: 1
                    }, r.createElement(u.Q, {
                        fontSize: u.V.Size5,
                        color: u.K.Alt2
                    }, Object(o.d)("Featured Broadcasters", "FeaturedBroadcastersComponent"))), r.createElement(s.a, {
                        items: e,
                        isLoading: n,
                        layout: l.c.Vertical
                    }))
            }
        }
        var g = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.getRender = function(e) {
                    var n = !(!t.props.data.loading && !t.props.data.error);
                    return v(e, t.props.renderContext, n)
                }, t
            }
            return a.__extends(t, e), t.prototype.componentDidMount = function() {
                this.postRender()
            }, t.prototype.componentDidUpdate = function() {
                this.postRender()
            }, t.prototype.render = function() {
                var e = this.props.data.featuredStreams || [],
                    t = Object(c.a)(e);
                return this.getRender(t)
            }, t.prototype.postRender = function() {
                this.props.data && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
            }, t = a.__decorate([Object(d.a)(p, {
                options: function(e) {
                    return {
                        variables: {
                            language: o.o.intl.getLanguageCode(),
                            first: e.streamCount || 8
                        }
                    }
                }
            }), Object(m.d)("FeaturedBroadcasters")], t)
        }(r.Component)
    },
    blAa: function(e, t, n) {
        var i = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "stream"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "Stream"
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
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "user"
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
                                    value: "game"
                                },
                                directives: []
                            }]
                        }
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "viewersCount"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "previewImageURL"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "width"
                            },
                            value: {
                                kind: "IntValue",
                                value: "480"
                            }
                        }, {
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "height"
                            },
                            value: {
                                kind: "IntValue",
                                value: "272"
                            }
                        }],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "createdAt"
                        },
                        arguments: [],
                        directives: []
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 262
            }
        };
        i.loc.source = {
            body: '#import "twilight/pages/front/v2/queries/user-fragment.gql"\n#import "twilight/pages/front/v2/queries/game-fragment.gql"\nfragment stream on Stream {\nid\ntitle\nbroadcaster {\n...user\n}\ngame {\n...game\n}\nviewersCount\npreviewImageURL(width: 480 height: 272)\ncreatedAt\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var a = {};

        function r(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !a[t] && (a[t] = !0, !0)
            })
        }
        i.definitions = i.definitions.concat(r(n("y9X2").definitions)), i.definitions = i.definitions.concat(r(n("9MIX").definitions)), e.exports = i
    },
    c36g: function(e, t, n) {
        var i = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "video"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "Video"
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
                                    value: "game"
                                },
                                directives: []
                            }]
                        }
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "lengthSeconds"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "owner"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "user"
                                },
                                directives: []
                            }]
                        }
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "previewThumbnailURL"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "width"
                            },
                            value: {
                                kind: "IntValue",
                                value: "480"
                            }
                        }, {
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "height"
                            },
                            value: {
                                kind: "IntValue",
                                value: "272"
                            }
                        }],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "publishedAt"
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
                            value: "viewCount"
                        },
                        arguments: [],
                        directives: []
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 271
            }
        };
        i.loc.source = {
            body: '#import "twilight/pages/front/v2/queries/user-fragment.gql"\n#import "twilight/pages/front/v2/queries/game-fragment.gql"\nfragment video on Video {\nid\ngame {\n...game\n}\nlengthSeconds\nowner {\n...user\n}\npreviewThumbnailURL(width: 480 height: 272)\npublishedAt\ntitle\nviewCount\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var a = {};

        function r(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !a[t] && (a[t] = !0, !0)
            })
        }
        i.definitions = i.definitions.concat(r(n("y9X2").definitions)), i.definitions = i.definitions.concat(r(n("9MIX").definitions)), e.exports = i
    },
    cYgC: function(e, t, n) {
        "use strict";
        var i = n("GiK3"),
            a = n("6sO2"),
            r = n("TToO"),
            o = n("C/8M"),
            d = n("rzuL"),
            s = n("CSlQ"),
            l = n("Odds"),
            c = n("Xh/U"),
            m = n("qVoH"),
            u = n("LUP9"),
            p = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onImpression = function(e) {
                        var n = {
                            feedPresentation: "inline",
                            item: t.props.item
                        };
                        Object(d.a)(n, e)
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive(), this.props.impressionTracking.onImpression(this.onImpression)
                }, t.prototype.render = function() {
                    return Object(c.b)(this.props.item.content.__typename) ? i.createElement(l._35, r.__assign({
                        elevation: 1,
                        margin: {
                            bottom: 1
                        },
                        background: l.n.Base,
                        position: l._15.Relative
                    }, Object(l._63)(this.props), {
                        className: "feed-item"
                    }), i.createElement(l._8, {
                        position: l._15.Absolute,
                        attachTop: !0,
                        attachRight: !0,
                        margin: {
                            top: .5,
                            right: .5
                        }
                    }, i.createElement(m.a, {
                        content: this.props.item.content,
                        deletePost: this.props.deletePost
                    })), i.createElement(u.a, {
                        reasons: this.props.item.reasons
                    }), i.createElement(c.a, {
                        content: this.props.item.content
                    })) : i.createElement(l._8, null)
                }, t = r.__decorate([Object(s.d)("FeedItem"), Object(o.d)(function(e) {
                    var t = e.item,
                        n = e.index,
                        i = Object(o.b)(t);
                    return {
                        batch_id: t.tracking.batchID || "",
                        card_entity: i.type + ":" + i.id,
                        card_id: i.id,
                        card_impression_id: t.tracking.cardImpressionID || "",
                        card_type: i.type,
                        feed_index: n,
                        rec_generation_id: t.tracking.recGenerationID || "",
                        rec_generation_index: t.tracking.recGenerationIndex || null
                    }
                }), Object(o.c)()], t)
            }(i.Component);
        var v = Object(s.d)("Feed")(function(e) {
            var t, n, r = (t = e.items.edges, n = new Set, t.filter(function(e) {
                if (!e.node.content || !e.node.content.id) return !1;
                var t = n.has(e.node.content.id);
                return t || n.add(e.node.content.id), !t
            })).map(function(t, n) {
                var a = t.node;
                return i.createElement(p, {
                    key: a.content.id,
                    item: a,
                    index: n,
                    "data-a-target": "pulse-item-" + n,
                    deletePost: e.deletePost
                })
            });
            return e.latencyTracking.reportInteractive(r.length), r.length ? i.createElement(l._8, null, r) : i.createElement(l._8, {
                textAlign: l._45.Center
            }, i.createElement(l.Q, {
                color: l.K.Alt2
            }, Object(a.d)("There are no feed posts.", "ChannelFeedComponent")))
        });
        n.d(t, "a", function() {
            return v
        })
    },
    dQj3: function(e, t, n) {
        "use strict";
        t.b = s, t.a = function(e, t, n) {
            if (!e.author) return null;
            var l = s(e.body.emotes),
                c = e.badges.reduce(function(e, t) {
                    return e[t.setID] = t.version, e
                }, {});
            return {
                type: r.b.Message,
                messageType: r.c.Post,
                id: e.id,
                badges: c,
                bits: e.bitsUsed,
                timestamp: 0,
                deleted: !1,
                user: i.__assign({
                    userID: e.author.id,
                    userLogin: e.author.login,
                    userType: a.a.User,
                    color: e.authorColor
                }, Object(d.a)(e.authorName, e.author.login)),
                messageParts: Object(o.g)(e.body.content, l, e.bitsUsed, t, n, e.authorName)
            }
        }, t.c = function(e) {
            if (null === e.tags || null === e.message || null === e.bits_used) return null;
            var t = "ChatMessage:" + e.tags.msg_id;
            return {
                __typename: "ChatMessage",
                "Symbol(id)": t,
                id: e.tags.msg_id,
                authorName: e.tags.display_name,
                authorColor: e.tags.color,
                author: {
                    __typename: "User",
                    "Symbol(id)": "User:" + e.user_id,
                    id: e.user_id,
                    login: e.username
                },
                body: {
                    __typename: "MessageBody",
                    "Symbol(id)": "$" + t + ".body",
                    content: e.message,
                    emotes: e.tags.emotes.map(function(e, n) {
                        return {
                            __typename: "EmbeddedEmote",
                            "Symbol(id)": t + ".body.emotes." + n,
                            emoteID: e.id.toString(),
                            from: e.start,
                            to: e.end,
                            setID: e.set
                        }
                    })
                },
                badges: e.tags.badges.map(function(e, n) {
                    return {
                        __typename: "Badge",
                        "Symbol(id)": t + ".badges." + n,
                        setID: e.badge_set_id,
                        version: e.badge_set_version
                    }
                }),
                bitsUsed: e.bits_used
            }
        };
        var i = n("TToO"),
            a = n("6Agf"),
            r = n("qkCi"),
            o = n("l21v"),
            d = n("e1CU");

        function s(e) {
            var t = [];
            return e.forEach(function(e) {
                t[e.from] = {
                    startIndex: e.from,
                    endIndex: e.to + 1,
                    data: {
                        images: {
                            themed: !1,
                            sources: {
                                "1x": Object(o.f)(e.emoteID, 1),
                                "2x": Object(o.f)(e.emoteID, 2),
                                "4x": Object(o.f)(e.emoteID, 4)
                            }
                        }
                    }
                }
            }), t
        }
    },
    ddhI: function(e, t, n) {
        var i = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "shelfClip"
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
                            value: "slug"
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
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "viewCount"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "language"
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
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "user"
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
                                    value: "game"
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
                                    value: "user"
                                },
                                directives: []
                            }]
                        }
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "thumbnailURL"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "width"
                            },
                            value: {
                                kind: "IntValue",
                                value: "480"
                            }
                        }, {
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "height"
                            },
                            value: {
                                kind: "IntValue",
                                value: "272"
                            }
                        }],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "createdAt"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "durationSeconds"
                        },
                        arguments: [],
                        directives: []
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 318
            }
        };
        i.loc.source = {
            body: '#import "twilight/pages/front/v2/queries/user-fragment.gql"\n#import "twilight/pages/front/v2/queries/game-fragment.gql"\nfragment shelfClip on Clip {\nid\nslug\nurl\nembedURL\ntitle\nviewCount\nlanguage\ncurator {\n...user\n}\ngame {\n...game\n}\nbroadcaster {\n...user\n}\nthumbnailURL(width:480 height:272)\ncreatedAt\ndurationSeconds\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var a = {};

        function r(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !a[t] && (a[t] = !0, !0)
            })
        }
        i.definitions = i.definitions.concat(r(n("y9X2").definitions)), i.definitions = i.definitions.concat(r(n("9MIX").definitions)), e.exports = i
    },
    fWQn: function(e, t, n) {
        var i = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "feedItemVideo"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "Video"
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
                            value: "description"
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
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "lengthSeconds"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "owner"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "feedUser"
                                },
                                directives: []
                            }]
                        }
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "previewThumbnailURL"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "width"
                            },
                            value: {
                                kind: "IntValue",
                                value: "480"
                            }
                        }, {
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "height"
                            },
                            value: {
                                kind: "IntValue",
                                value: "272"
                            }
                        }],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "publishedAt"
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
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "setID"
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
                        alias: {
                            kind: "Name",
                            value: "videoViewCount"
                        },
                        name: {
                            kind: "Name",
                            value: "viewCount"
                        },
                        arguments: [],
                        directives: []
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 316
            }
        };
        i.loc.source = {
            body: '#import "twilight/features/feed/models/user-fragment.gql"\nfragment feedItemVideo on Video {\nid\ndescription\ngame {\nid\nname\n}\nlengthSeconds\nowner {\n...feedUser\n}\npreviewThumbnailURL(width: 480 height: 272)\npublishedAt\nreactions {\nemote {\nid\ntoken\nsetID\n}\ncount\nself {\nhasReacted\n}\n}\ntitle\nvideoViewCount: viewCount #\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var a = {};
        i.definitions = i.definitions.concat(n("Lq4d").definitions.filter(function(e) {
            if ("FragmentDefinition" !== e.kind) return !0;
            var t = e.name.value;
            return !a[t] && (a[t] = !0, !0)
        })), e.exports = i
    },
    g91j: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("HW6M"),
            r = n("GiK3"),
            o = n("6sO2"),
            d = n("NXs7"),
            s = n("VAT8"),
            l = n("WKwZ"),
            c = n("CSlQ"),
            m = n("Odds"),
            u = (n("TUg1"), "carousel-card-live"),
            p = "carousel-card-vod",
            v = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderIndicator = function() {
                        return t.props.item.content.type === l.b.Stream ? r.createElement(m.G, {
                            status: m.I.Live,
                            size: m.H.Small,
                            "data-test-selector": u
                        }) : r.createElement(m._24, {
                            asset: m._25.GlyphViews,
                            "data-test-selector": p
                        })
                    }, t.itemClick = function() {
                        t.props.itemClick(t.props.item)
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = a({
                        "carousel-nav__item": !0,
                        "carousel-nav__item--active": this.props.itemActive
                    });
                    return r.createElement(m._8, {
                        className: e,
                        margin: {
                            x: .5
                        },
                        padding: {
                            bottom: .5
                        },
                        flexGrow: 1,
                        position: m._15.Relative
                    }, r.createElement(m._52, {
                        label: (this.props.item.isSponsored ? Object(o.d)("Sponsored", "CarouselCardComponent") : "") + " " + this.props.item.broadcaster.displayName,
                        direction: m._54.Top,
                        display: m.R.Block
                    }, r.createElement(m._6, i.__assign({
                        onClick: this.itemClick
                    }, Object(m._63)(this.props)), r.createElement(m.k, {
                        ratio: m.l.Aspect16x9
                    }, r.createElement(m._8, {
                        className: "carousel-nav__meta",
                        alignItems: m.c.Center,
                        attachBottom: !0,
                        margin: {
                            left: .5
                        },
                        zIndex: m._62.Above
                    }, this.renderIndicator(), r.createElement(m._8, {
                        display: m.R.InlineFlex,
                        margin: {
                            left: .5
                        }
                    }, r.createElement(m.Q, {
                        color: m.K.Overlay,
                        type: m._49.Span
                    }, Object(o.e)(this.props.item.content.viewersCount)))), r.createElement(m._8, {
                        className: "carousel-nav__img-container"
                    }, r.createElement("img", {
                        className: "carousel-nav__img",
                        "data-content-id": this.props.item.content.id,
                        src: this.props.item.imageURL,
                        alt: this.props.item.broadcaster.displayName,
                        "data-a-target": "carousel-image"
                    }), this.props.item.isSponsored ? r.createElement(m._8, {
                        position: m._15.Absolute,
                        attachRight: !0,
                        attachTop: !0
                    }, r.createElement(m._24, {
                        asset: m._25.Featured,
                        type: m._26.Brand,
                        width: 20,
                        height: 20
                    })) : "")))))
                }, t = i.__decorate([Object(c.d)("CarouselCard")], t)
            }(r.Component),
            g = n("lfvs"),
            f = n("F8kA"),
            k = n("SZoP"),
            h = n("fc0G");

        function b(e) {
            switch (e.type) {
                case l.b.Stream:
                    return r.createElement(h.c, {
                        channelLogin: e.id,
                        vodID: "",
                        disableTheatreButton: !0,
                        playerTypeOverride: h.b.Frontpage,
                        onInit: e.onPlayerInit,
                        onDestroy: e.onPlayerDestroy
                    });
                case l.b.Vod:
                    return r.createElement(h.c, {
                        channelLogin: "",
                        vodID: e.id,
                        disableTheatreButton: !0,
                        playerTypeOverride: h.b.Frontpage,
                        onInit: e.onPlayerInit,
                        onDestroy: e.onPlayerDestroy,
                        onVideoTimeChange: e.onVideoTimeChange
                    });
                default:
                    return null
            }
        }
        n("i6UE");
        var y = {
                content: "carousel",
                medium: "twitch_home"
            },
            S = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.getContentRender = function() {
                        var e = a("horizontal-carousel-player__details", {
                                "horizontal-carousel-player__details--overlay": t.props.darkTheme
                            }),
                            n = Object(o.d)("playing {game}", {
                                game: r.createElement(f.a, {
                                    to: {
                                        pathname: "/directory/game/" + t.props.item.content.gameName,
                                        state: y
                                    }
                                }, t.props.item.content.gameName)
                            }, "HorizontalCarouselPlayer"),
                            i = {
                                type: t.props.item.content.type,
                                id: t.props.item.content.id,
                                onPlayerInit: t.props.onPlayerInit,
                                onPlayerDestroy: t.props.onPlayerDestroy,
                                onVideoTimeChange: t.onVideoTimeChange
                            };
                        return r.createElement(m._35, {
                            className: "horizontal-carousel-player",
                            margin: {
                                bottom: 2
                            },
                            display: m.R.Flex,
                            flexDirection: m.T.Row,
                            color: m.K.Alt
                        }, r.createElement(m._8, {
                            flexGrow: 1,
                            flexShrink: 0
                        }, r.createElement(m._8, {
                            className: "horizontal-carousel-player__video",
                            position: m._15.Relative,
                            overflow: m._11.Hidden
                        }, b(i))), r.createElement(m._8, {
                            className: e,
                            flexGrow: 0,
                            padding: 2
                        }, r.createElement(m._8, {
                            display: m.R.Flex,
                            flexWrap: m.U.NoWrap,
                            textAlign: m._45.Left,
                            alignItems: m.c.Center,
                            padding: {
                                bottom: .5
                            }
                        }, r.createElement(m._8, {
                            margin: {
                                right: 1
                            },
                            flexShrink: 0
                        }, r.createElement("span", {
                            onClick: t.promotionCardClick.bind(t, "thumbnail")
                        }, r.createElement(f.a, {
                            to: {
                                pathname: "/" + t.props.item.broadcaster.login,
                                state: y
                            },
                            "data-a-target": "carousel-profile-image"
                        }, r.createElement(m.m, {
                            src: t.props.item.broadcaster.profileImageURL,
                            alt: Object(o.d)("Profile Picture for {login}", {
                                login: t.props.item.broadcaster.login
                            }, "HorizontalCarouselPlayer"),
                            size: 40
                        })))), r.createElement(m._8, {
                            margin: {
                                right: 1
                            },
                            flexGrow: 1
                        }, r.createElement(m.Q, {
                            fontSize: m.V.Size4,
                            color: m.K.Base,
                            lineHeight: m._9.Heading,
                            "data-a-target": "carousel-broadcaster-displayname"
                        }, Object(k.a)(t.props.item.broadcaster.login, t.props.item.broadcaster.displayName)), r.createElement(m.Q, {
                            fontSize: m.V.Size6,
                            color: m.K.Base,
                            "data-a-target": "carousel-user-playing-message"
                        }, r.createElement("span", {
                            onClick: t.promotionCardClick.bind(t, "game_name")
                        }, n)))), r.createElement(m._8, {
                            margin: {
                                y: 1
                            }
                        }, r.createElement("span", {
                            onClick: t.promotionCardClick.bind(t, "stream_title")
                        }, r.createElement(f.a, {
                            to: t.getLinkForTitle()
                        }, r.createElement(m.Q, {
                            type: m._49.Span,
                            "data-a-target": l.a,
                            fontSize: m.V.Size3,
                            lineHeight: m._9.Heading
                        }, t.props.item.title)))), r.createElement(g, {
                            source: t.props.item.description || ""
                        })))
                    }, t.getLinkForTitle = function() {
                        if (t.props.item.content.type === l.b.Stream) return {
                            pathname: "/" + t.props.item.broadcaster.login,
                            state: y
                        };
                        var e = t.state && t.state.videoOffset || 0;
                        return {
                            pathname: "/videos/" + t.props.item.content.id + "?t=" + e,
                            state: y
                        }
                    }, t.getPlaceholderRender = function() {
                        var e = a("horizontal-carousel-player__details", {
                            "horizontal-carousel-player__details--overlay": t.props.darkTheme
                        });
                        return r.createElement(m._8, {
                            display: m.R.Flex,
                            flexWrap: m.U.NoWrap,
                            flexShrink: 0,
                            margin: {
                                bottom: 2
                            }
                        }, r.createElement(m._8, {
                            flexGrow: 1,
                            flexShrink: 1,
                            fullWidth: !0
                        }, r.createElement(m.k, {
                            ratio: m.l.Aspect16x9
                        }, r.createElement(m._14, {
                            "data-test-selector": "carousel-player-placeholder"
                        }))), r.createElement(m._8, {
                            className: a(e),
                            flexGrow: 0,
                            flexShrink: 0,
                            padding: 2
                        }, r.createElement(m._8, {
                            display: m.R.Flex,
                            flexWrap: m.U.NoWrap,
                            textAlign: m._45.Left,
                            alignItems: m.c.Start
                        }, r.createElement(m._8, {
                            margin: {
                                right: 1
                            },
                            flexShrink: 0
                        }, r.createElement(m._14, {
                            width: 40,
                            height: 40
                        })), r.createElement(m._8, {
                            margin: {
                                right: 1
                            },
                            flexGrow: 1
                        }, r.createElement(m.Q, null, r.createElement(m._14, {
                            width: 70
                        })), r.createElement(m.Q, null, r.createElement(m._14, {
                            width: 70
                        })))), r.createElement(m._8, {
                            margin: {
                                y: 1
                            }
                        }, r.createElement(m.Q, null, r.createElement(m._14, {
                            lineCount: 1
                        })), r.createElement(m.Q, null, r.createElement(m._14, {
                            lineCount: 4
                        })))))
                    }, t.onVideoTimeChange = function(e) {
                        t.setState({
                            videoOffset: e
                        })
                    }, t.promotionCardClick = function(e) {
                        t.props.onPromotionCardClick(t.props.item, e)
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentWillUpdate = function(e) {
                    e.item !== this.props.item && this.props.onPromotionCardView(e.item)
                }, t.prototype.render = function() {
                    return this.props.item ? this.getContentRender() : this.getPlaceholderRender()
                }, t
            }(r.Component),
            _ = n("RH2O"),
            N = n("hdYS"),
            E = (n("0v28"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.getContentRender = function() {
                        var e = a("vertical-carousel-player__details", {
                                "vertical-carousel-player__details--overlay": t.props.darkTheme
                            }),
                            n = Object(o.d)("{login} playing {game}", {
                                login: r.createElement("span", {
                                    onClick: t.promotionCardClick.bind(t, "display_name")
                                }, r.createElement(f.a, {
                                    to: {
                                        pathname: "/" + t.props.item.broadcaster.login,
                                        state: y
                                    },
                                    "data-a-target": "carousel-broadcaster-displayname"
                                }, Object(k.a)(t.props.item.broadcaster.login, t.props.item.broadcaster.displayName))),
                                game: r.createElement("span", {
                                    onClick: t.promotionCardClick.bind(t, "game_name")
                                }, r.createElement(f.a, {
                                    to: {
                                        pathname: "/directory/game/" + t.props.item.content.gameName,
                                        state: y
                                    },
                                    "data-a-target": "carousel-broadcaster-game-name"
                                }, t.props.item.content.gameName))
                            }, "VerticalCarouselPlayer"),
                            i = {
                                type: t.props.item.content.type,
                                id: t.props.item.content.id,
                                onPlayerInit: t.props.onPlayerInit,
                                onPlayerDestroy: t.props.onPlayerDestroy
                            };
                        return r.createElement(m._35, {
                            className: "vertical-carousel-player",
                            padding: {
                                bottom: 1,
                                x: 1
                            },
                            color: m.K.Alt
                        }, r.createElement(m._8, {
                            className: "vertical-carousel-player__video",
                            position: m._15.Relative,
                            overflow: m._11.Hidden
                        }, b(i)), r.createElement(m._8, {
                            className: a(e),
                            display: m.R.Flex,
                            flexWrap: m.U.NoWrap,
                            textAlign: m._45.Left,
                            alignItems: m.c.Center,
                            padding: {
                                y: 1
                            }
                        }, r.createElement(m._8, {
                            margin: {
                                right: 1
                            },
                            flexShrink: 0
                        }, r.createElement("span", {
                            onClick: t.promotionCardClick.bind(t, "thumbnail")
                        }, r.createElement(f.a, {
                            to: "/" + t.props.item.broadcaster.login,
                            "data-a-target": "carousel-avatar-link"
                        }, r.createElement(m.m, {
                            src: t.props.item.broadcaster.profileImageURL,
                            alt: Object(o.d)("Profile Picture for {login}", {
                                login: t.props.item.broadcaster.login
                            }, "VerticalCarouselPlayer"),
                            size: 40
                        })))), r.createElement(m._8, {
                            margin: {
                                right: 1
                            },
                            flexGrow: 1
                        }, r.createElement(m.Q, {
                            "data-a-target": l.a,
                            fontSize: m.V.Size5,
                            color: m.K.Base,
                            bold: !0
                        }, t.props.item.title), r.createElement(m.Q, {
                            fontSize: m.V.Size6,
                            color: m.K.Base
                        }, n)), r.createElement(m._8, {
                            flexShrink: 0
                        }, t.renderFollowButton())), r.createElement(g, {
                            source: t.props.item.description || ""
                        }))
                    }, t.getPlaceholderRender = function() {
                        return r.createElement(m._8, {
                            padding: {
                                bottom: 1,
                                x: 1
                            }
                        }, r.createElement(m.k, {
                            ratio: m.l.Aspect16x9
                        }, r.createElement(m._14, {
                            "data-test-selector": "carousel-player-placeholder"
                        })), r.createElement(m._8, {
                            display: m.R.Flex,
                            flexWrap: m.U.NoWrap,
                            textAlign: m._45.Left,
                            alignItems: m.c.Center,
                            padding: {
                                y: 1
                            }
                        }, r.createElement(m._8, {
                            margin: {
                                right: 1
                            },
                            flexShrink: 0
                        }, r.createElement(m._14, {
                            width: 40,
                            height: 40
                        })), r.createElement(m._8, {
                            margin: {
                                right: 1
                            },
                            flexGrow: 1
                        }, r.createElement(m.Q, null, r.createElement(m._14, {
                            width: 150
                        })), r.createElement(m.Q, null, r.createElement(m._14, {
                            width: 100
                        }))), r.createElement(m._8, {
                            flexShrink: 0
                        }, r.createElement(m._14, {
                            width: 70,
                            height: 30
                        }))), r.createElement(m.Q, null, r.createElement(m._14, {
                            lineCount: 3
                        })))
                    }, t.promotionCardClick = function(e) {
                        t.props.onPromotionCardClick(t.props.item, e)
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return this.props.item ? this.getContentRender() : this.getPlaceholderRender()
                }, t.prototype.renderFollowButton = function() {
                    return this.props.firstPageLoaded ? r.createElement(N.a, {
                        "data-a-target": "carousel-follow-button",
                        channelLogin: this.props.item.broadcaster.login,
                        followUIType: N.b.IconAndText,
                        unfollowUIType: N.b.IconOnly,
                        showLoadingPlaceholder: !0
                    }) : r.createElement(m._14, {
                        width: 70,
                        height: 30
                    })
                }, t
            }(r.Component));
        var C = Object(_.b)(function(e) {
                return {
                    firstPageLoaded: e.session.firstPageLoaded
                }
            })(E),
            F = n("vH/s"),
            w = "google_calendar",
            O = "backfill";

        function R(e) {
            o.n.track(F.SpadeEventType.FrontPageCarouselNavButtonClick, {
                direction: e
            })
        }
        n("0OPT");
        var I = 6,
            T = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        activeItem: t.props.items[0],
                        startingIndex: 0
                    }, t.displayEventFired = !1, t.renderLeftButton = function() {
                        if (t.props.items.length > I) {
                            var e = t.state.startingIndex > 0;
                            return r.createElement(m._8, {
                                display: m.R.Flex,
                                alignItems: m.c.Stretch
                            }, r.createElement(m.w, {
                                ariaLabel: Object(o.d)("Page Left", "CarouselPlayerComponent"),
                                icon: m._25.AngleLeft,
                                onClick: t.handlePageLeft,
                                "data-test-selector": l.d,
                                disabled: !e
                            }))
                        }
                        return null
                    }, t.renderRightButton = function() {
                        if (t.props.items.length > I) {
                            var e = t.props.items.length > t.state.startingIndex + I;
                            return r.createElement(m._8, {
                                display: m.R.Flex,
                                alignItems: m.c.Stretch
                            }, r.createElement(m.w, {
                                ariaLabel: Object(o.d)("Page Right", "CarouselPlayerComponent"),
                                icon: m._25.AngleRight,
                                onClick: t.handlePageRight,
                                "data-test-selector": l.e,
                                disabled: !e
                            }))
                        }
                        return null
                    }, t.getCardsRender = function() {
                        var e, n;
                        if (t.state.activeItem) return t.displayEventFired || (e = t.props.items, n = {}, e.forEach(function(e, t) {
                            n["carousel_slot_" + t + "_channel"] = e.broadcaster.login, n["carousel_slot_" + t + "_priority"] = e.priorityLevel, n["carousel_slot_" + t + "_game"] = e.content.gameName, n["carousel_slot_" + t + "_ccu"] = e.content.viewersCount, n["carousel_slot_" + t + "_type"] = e.content.subType, e.isScheduled ? n["carousel_slot_" + t + "_source"] = w : n["carousel_slot_" + t + "_source"] = O
                        }), o.n.track(F.SpadeEventType.FrontPageCarouselDisplay, n), t.displayEventFired = !0), t.props.items.slice(t.state.startingIndex, t.state.startingIndex + I).map(function(e, n) {
                            return r.createElement(v, {
                                key: e.content.id,
                                item: e,
                                itemClick: t.selectContent,
                                itemActive: e.content.id === t.state.activeItem.content.id,
                                "data-a-target": "carousel-card-" + n
                            })
                        });
                        for (var i = [], a = 0; a < I; a++) i.push(r.createElement(m._8, {
                            key: a,
                            margin: {
                                x: .5
                            },
                            flexGrow: 1
                        }, r.createElement(m.k, {
                            ratio: m.l.Aspect16x9
                        }, r.createElement(m._14, null)), r.createElement(m._8, {
                            margin: {
                                top: .5
                            }
                        }, r.createElement(m._14, {
                            height: 4
                        }))));
                        return i
                    }, t.getLayoutRender = function() {
                        var e = {
                            darkTheme: t.props.darkTheme || !1,
                            item: t.state.activeItem,
                            onPromotionCardClick: t.trackPromotionClick,
                            onPromotionCardView: t.trackPromotionView
                        };
                        switch (t.props.layout) {
                            case l.c.Vertical:
                                return r.createElement(C, i.__assign({}, e));
                            default:
                                return r.createElement(S, i.__assign({}, e))
                        }
                    }, t.selectContent = function(e) {
                        t.setState({
                            activeItem: e
                        });
                        var n, i = {
                            broadcast_type: e.content.subType,
                            carousel_index: t.props.items.indexOf(e),
                            channel: e.broadcaster.login,
                            game: e.content.gameName,
                            promotion_was_scheduled: e.isScheduled,
                            views: e.content.viewersCount
                        };
                        n = i, o.n.track(F.SpadeEventType.FrontPageCarouselClick, n)
                    }, t.trackPromotionClick = function(e, n) {
                        var a = e.broadcaster,
                            r = e.content,
                            d = e.isScheduled;
                        ! function(e, t) {
                            var n = i.__assign({
                                clicked_element: t
                            }, e);
                            o.n.track(F.SpadeEventType.FrontPageCarouselPromotionCardClick, n)
                        }({
                            broadcast_type: r.subType,
                            carousel_index: t.props.items.indexOf(t.state.activeItem),
                            channel: a.displayName,
                            game: r.gameName,
                            promotion_was_scheduled: d,
                            views: r.viewersCount
                        }, n)
                    }, t.trackPromotionView = function(e) {
                        var n, i = {
                            broadcast_type: e.content.subType,
                            carousel_index: t.props.items.indexOf(e),
                            channel: e.broadcaster.login,
                            game: e.content.gameName,
                            promotion_was_scheduled: e.isScheduled,
                            views: e.content.viewersCount
                        };
                        n = i, o.n.track(F.SpadeEventType.FrontPageCarouselPromotionCardView, n)
                    }, t.handlePageRight = function() {
                        var e = t.props.items.length - I;
                        e !== t.state.startingIndex && (R("next"), t.setState({
                            startingIndex: e
                        }))
                    }, t.handlePageLeft = function() {
                        t.state.startingIndex > 0 && (R("prev"), t.setState({
                            startingIndex: 0
                        }))
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillUpdate = function(e) {
                    !this.state.activeItem && e.items.length > 0 && this.setState({
                        activeItem: e.items[0]
                    })
                }, t.prototype.render = function() {
                    var e;
                    return this.props.darkTheme && (e = Object(s.c)(d.a.Dark)), r.createElement(m._8, {
                        className: a("carousel-player", e)
                    }, this.getLayoutRender(), r.createElement(m._35, {
                        background: m.n.Alt
                    }, r.createElement(m._8, {
                        display: m.R.Flex,
                        flexWrap: m.U.NoWrap,
                        padding: {
                            x: .5,
                            y: 1
                        }
                    }, this.renderLeftButton(), this.getCardsRender(), this.renderRightButton())))
                }, t = i.__decorate([Object(c.d)("CarouselPlayer")], t)
            }(r.Component);
        n.d(t, "a", function() {
            return T
        })
    },
    i6UE: function(e, t) {},
    "j7/Y": function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("OAwv"),
            r = n("GiK3"),
            o = n("F8kA"),
            d = n("6sO2");

        function s(e) {
            return function(t) {
                var n = function(n) {
                    function o(t) {
                        var a = n.call(this, t) || this;
                        return a.tracked = !1, a.referenceTracking = {}, a.trackPageview = function() {
                            if (!(a.tracked || e.skip && e.skip(a.props))) {
                                a.tracked = !0;
                                var t = {};
                                "function" == typeof e.properties ? t = e.properties(a.props) : e.properties && (t = i.__assign({}, e.properties));
                                var n = i.__assign({}, a.props);
                                n.location && n.location.state && (t.medium = n.location.state.medium, t.content = n.location.state.content, t.content_index = n.location.state.content_index);
                                var r = a.referenceTracking,
                                    o = r.content,
                                    s = r.medium,
                                    l = r.content_index;
                                d.o.tracking.trackPageview(i.__assign({
                                    content: o,
                                    medium: s,
                                    content_index: l,
                                    location: e.location
                                }, t))
                            }
                        }, d.j.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : d.j.warn("No latency tracker exists! This means no data will be sent to Spade.", e), a
                    }
                    return i.__extends(o, n), o.prototype.componentDidMount = function() {
                        var e = this;
                        this.referenceTracking = this.stripTTParams(this.props.history.location), this.trackPageview(), this.props.history.listen(function(t, n) {
                            "REPLACE" !== n && (e.tracked = !1, e.referenceTracking = {})
                        })
                    }, o.prototype.componentDidUpdate = function() {
                        this.trackPageview()
                    }, o.prototype.render = function() {
                        return r.createElement(t, i.__assign({}, this.props))
                    }, o.prototype.stripTTParams = function(e) {
                        var t = "" !== e.search ? a.parse(e.search) : {},
                            n = {
                                content: t.tt_content,
                                content_index: t.tt_content_index,
                                medium: t.tt_medium
                            };
                        if (delete t.tt_content, delete t.tt_content_index, delete t.tt_medium, n.medium || n.content) {
                            var i = "",
                                r = a.stringify(t);
                            r.length > 0 && (i = "?" + r), this.props.history.replace({
                                pathname: e.pathname,
                                hash: e.hash,
                                search: i
                            })
                        }
                        return n
                    }, o
                }(r.Component);
                return Object(o.f)(n)
            }
        }
        n.d(t, "a", function() {
            return s
        })
    },
    jPY3: function(e, t) {},
    kaF0: function(e, t) {},
    kuCN: function(e, t) {},
    o8Pq: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n("bNhH");
        n.d(t, "FeaturedBroadcastersRenderContext", function() {
            return i.b
        }), n.d(t, "placeholderFeaturedBroadcasters", function() {
            return i.c
        }), n.d(t, "FeaturedBroadcasters", function() {
            return i.a
        })
    },
    ojlS: function(e, t, n) {
        var i = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "Feed_Composer_CreatePost"
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
                                value: "CreatePostInput"
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
                            value: "createPost"
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
                                    value: "post"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "feedItemPost"
                                        },
                                        directives: []
                                    }]
                                }
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "tweetStatus"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "tweet"
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
                end: 194
            }
        };
        i.loc.source = {
            body: '#import "twilight/features/feed/models/post-fragment.gql"\nmutation Feed_Composer_CreatePost($input: CreatePostInput!) {\ncreatePost(input: $input) {\npost {\n...feedItemPost\n}\ntweetStatus\ntweet\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var a = {};
        i.definitions = i.definitions.concat(n("S0OZ").definitions.filter(function(e) {
            if ("FragmentDefinition" !== e.kind) return !0;
            var t = e.name.value;
            return !a[t] && (a[t] = !0, !0)
        })), e.exports = i
    },
    qVoH: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("RH2O"),
            r = n("2KeS"),
            o = n("+xm8"),
            d = n("V5M+"),
            s = n("f2i/"),
            l = n("Aj/L"),
            c = n("oSFp"),
            m = n("KSGD"),
            u = n("GiK3"),
            p = n("6sO2"),
            v = n("rCmJ"),
            g = n("C/8M"),
            f = n("rzuL"),
            k = n("CSlQ"),
            h = n("mw/a"),
            b = n("Odds"),
            y = n("CX2/"),
            S = (n("BLXQ"), "delete"),
            _ = "delete-confirm",
            N = "report",
            E = "Post";

        function C(e) {
            return e.__typename === E
        }
        var F = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                n.closeViews = function() {
                    n.setState({
                        showDeleteConfirmView: !1,
                        showOptionView: !1
                    })
                }, n.deletePost = function() {
                    if (n.props.deletePost) {
                        var e = n.props.content.id.split(":"),
                            t = e[e.length - 1];
                        n.props.deletePost(t).then(function() {
                            var e = {
                                action: g.a.Remove,
                                postID: t
                            };
                            Object(f.d)(e, n.context.feedTrackingProps)
                        })
                    }
                }, n.getDeleteConfirmView = function() {
                    return u.createElement(b._8, {
                        padding: 1
                    }, u.createElement(b._6, {
                        onClick: n.deletePost
                    }, u.createElement(b._8, {
                        padding: {
                            y: .5,
                            x: 1
                        },
                        className: _
                    }, Object(p.d)("Yes", "FeedItemOptions"))), u.createElement(b._6, {
                        onClick: n.showOptionView
                    }, u.createElement(b._8, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(p.d)("No", "FeedItemOptions"))))
                }, n.getDeleteEl = function() {
                    var e = null;
                    return n.state.userCanDelete && n.props.deletePost && (e = u.createElement(b._6, {
                        onClick: n.showDeleteConfirmView
                    }, u.createElement(b._8, {
                        className: S,
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(p.d)("Delete", "FeedItemOptions")))), e
                }, n.getOptionView = function() {
                    return n.state.loadingPermissions ? null : u.createElement(b._8, {
                        padding: 1
                    }, u.createElement(b._6, {
                        onClick: n.showReportModal,
                        "data-a-target": "pulse-post-report"
                    }, u.createElement(b._8, {
                        padding: {
                            y: .5,
                            x: 1
                        },
                        className: N
                    }, Object(p.d)("Report", "FeedItemOptions"))), n.getDeleteEl())
                }, n.getPostPermissions = function() {
                    return i.__awaiter(n, void 0, void 0, function() {
                        var e, t, n;
                        return i.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return this.setState({
                                        loadingPermissions: !0
                                    }), e = this.props.content.id.split(":"), [4, p.o.apollo.client.query({
                                        query: y,
                                        variables: {
                                            id: "post:" + e[e.length - 1]
                                        }
                                    })];
                                case 1:
                                    return t = i.sent(), n = t.data.feedItemContent, this.setState({
                                        loadingPermissions: !1,
                                        permissionQueryData: t,
                                        userCanDelete: n && n.self && n.self.permissions && n.self.permissions.canDelete || !1
                                    }), [2]
                            }
                        })
                    })
                }, n.showDeleteConfirmView = function() {
                    n.setState({
                        showDeleteConfirmView: !0,
                        showOptionView: !1
                    })
                }, n.showReportModal = function() {
                    n.props.user ? n.props.showReportUserModal({
                        reportContext: n.getReportContext(n.props.content),
                        title: Object(p.d)("Report {itemType}", {
                            itemType: n.props.content.__typename
                        }, "ReportFeedPost")
                    }) : n.props.login()
                }, n.showOptionView = function() {
                    n.setState({
                        showDeleteConfirmView: !1,
                        showOptionView: !0
                    })
                }, n.toggleOptionView = function() {
                    n.state.showDeleteConfirmView || n.state.showOptionView ? n.closeViews() : n.state.showOptionView || n.setState({
                        showOptionView: !0
                    }), !1 === n.state.userCanDelete && C(n.props.content) && !n.state.permissionQueryData && n.getPostPermissions()
                };
                var a = !1,
                    r = t.content,
                    o = t.deletePost,
                    d = t.user;
                return o && d && C(r) && d.id === r.author.id && (a = !0), n.state = {
                    loadingPermissions: !1,
                    permissionQueryData: void 0,
                    showDeleteConfirmView: !1,
                    showOptionView: !1,
                    userCanDelete: a
                }, n
            }
            return i.__extends(t, e), t.prototype.componentDidMount = function() {
                this.props.latencyTracking.reportInteractive()
            }, t.prototype.render = function() {
                var e = null;
                return (this.state.showDeleteConfirmView || this.state.showOptionView && !this.state.loadingPermissions) && (e = u.createElement(b.q, {
                    direction: b.r.Left,
                    size: b.s.Small,
                    show: !0
                }, this.state.showOptionView && this.getOptionView(), this.state.showDeleteConfirmView && this.getDeleteConfirmView())), u.createElement(b._8, {
                    position: b._15.Relative
                }, u.createElement(v.a, {
                    onClickOut: this.closeViews
                }, e, u.createElement("div", {
                    className: this.state.showOptionView || this.state.showDeleteConfirmView ? "button-icon--show" : "button-icon"
                }, u.createElement(b.w, {
                    icon: b._25.Gear,
                    ariaLabel: Object(p.d)("Post Options", "FeedPostOptions"),
                    onClick: this.toggleOptionView,
                    "data-a-target": "pulse-post-options"
                }))))
            }, t.prototype.getReportContext = function(e) {
                switch (e.__typename) {
                    case "Clip":
                        var t = e;
                        return {
                            contentType: h.a.Clip,
                            targetUserID: t.broadcaster && t.broadcaster.id || "",
                            contentID: t.slug,
                            additionalTrackingID: t.curator ? t.curator.id : ""
                        };
                    case E:
                        var n = e;
                        return {
                            contentType: h.a.ChannelFeedPost,
                            targetUserID: n.author.id,
                            contentID: n.id
                        };
                    case "Stream":
                        var i = e;
                        return {
                            contentType: h.a.User,
                            targetUserID: i.broadcaster.id
                        };
                    case "Video":
                        var a = e;
                        return {
                            contentType: h.a.Vod,
                            targetUserID: a.owner && a.owner.id || "",
                            contentID: a.id
                        };
                    default:
                        return {
                            contentType: h.a.User,
                            targetUserID: ""
                        }
                }
            }, t.contextTypes = {
                feedTrackingProps: m.object
            }, t = i.__decorate([Object(k.d)("FeedItemOptions")], t)
        }(u.Component);
        var w = Object(a.b)(function(e) {
            return {
                user: Object(l.c)(e)
            }
        }, function(e) {
            return Object(r.b)({
                showReportUserModal: function(e) {
                    var t = i.__rest(e, []);
                    return Object(d.d)(c.a, t)
                },
                login: function() {
                    return Object(s.f)(o.a.FeedReactionToggle)
                }
            }, e)
        })(F);
        n.d(t, "a", function() {
            return w
        })
    },
    qkCi: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return i
        }), n.d(t, "c", function() {
            return a
        }), n.d(t, "e", function() {
            return r
        }), n.d(t, "a", function() {
            return o
        });
        var i, a, r, o, d = n("aMxy");
        n.o(d, "ModerationActions") && n.d(t, "d", function() {
                return d.ModerationActions
            }),
            function(e) {
                e[e.Message = 0] = "Message", e[e.Moderation = 1] = "Moderation", e[e.ModerationAction = 2] = "ModerationAction", e[e.TargetedModerationAction = 3] = "TargetedModerationAction", e[e.AutoMod = 4] = "AutoMod", e[e.Connected = 5] = "Connected", e[e.Disconnected = 6] = "Disconnected", e[e.Reconnect = 7] = "Reconnect", e[e.Hosting = 8] = "Hosting", e[e.Unhost = 9] = "Unhost", e[e.Hosted = 10] = "Hosted", e[e.Subscription = 11] = "Subscription", e[e.Resubscription = 12] = "Resubscription", e[e.SubGift = 13] = "SubGift", e[e.Clear = 14] = "Clear", e[e.SubscriberOnlyMode = 15] = "SubscriberOnlyMode", e[e.FollowerOnlyMode = 16] = "FollowerOnlyMode", e[e.SlowMode = 17] = "SlowMode", e[e.EmoteOnlyMode = 18] = "EmoteOnlyMode", e[e.RoomMods = 19] = "RoomMods", e[e.RoomState = 20] = "RoomState", e[e.Raid = 21] = "Raid", e[e.Unraid = 22] = "Unraid", e[e.Ritual = 23] = "Ritual", e[e.Notice = 24] = "Notice", e[e.Info = 25] = "Info", e[e.BadgesUpdated = 26] = "BadgesUpdated", e[e.Purchase = 27] = "Purchase", e[e.BitsCharity = 28] = "BitsCharity", e[e.CrateGift = 29] = "CrateGift", e[e.RewardGift = 30] = "RewardGift"
            }(i || (i = {})),
            function(e) {
                e[e.Post = 0] = "Post", e[e.Action = 1] = "Action", e[e.PostWithMention = 2] = "PostWithMention"
            }(a || (a = {})),
            function(e) {
                e[e.Ban = 0] = "Ban", e[e.Timeout = 1] = "Timeout"
            }(r || (r = {})),
            function(e) {
                e[e.MessageRejectedPrompt = 0] = "MessageRejectedPrompt", e[e.MessageRejected = 1] = "MessageRejected", e[e.MessageAllowed = 2] = "MessageAllowed", e[e.MessageDenied = 3] = "MessageDenied"
            }(o || (o = {}))
    },
    rogX: function(e, t, n) {
        var i = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "feedItemStream"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "Stream"
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
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "feedUser"
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
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "viewersCount"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "previewImageURL"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "width"
                            },
                            value: {
                                kind: "IntValue",
                                value: "480"
                            }
                        }, {
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "height"
                            },
                            value: {
                                kind: "IntValue",
                                value: "272"
                            }
                        }],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "createdAt"
                        },
                        arguments: [],
                        directives: []
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 212
            }
        };
        i.loc.source = {
            body: '#import "twilight/features/feed/models/user-fragment.gql"\nfragment feedItemStream on Stream {\nid\ntitle\nbroadcaster {\n...feedUser\n}\ngame {\nid\nname\n}\nviewersCount\npreviewImageURL(width: 480 height: 272)\ncreatedAt\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var a = {};
        i.definitions = i.definitions.concat(n("Lq4d").definitions.filter(function(e) {
            if ("FragmentDefinition" !== e.kind) return !0;
            var t = e.name.value;
            return !a[t] && (a[t] = !0, !0)
        })), e.exports = i
    },
    rzuL: function(e, t, n) {
        "use strict";
        var i = n("vH/s"),
            a = n("LUP9"),
            r = n("6hXa"),
            o = function(e, t) {
                var n = d(e);
                Object(r.c)(i.SpadeEventType.FeedCardImpression, n, t)
            },
            d = function(e) {
                var t = e.item.reasons[0] ? Object(a.b)(e.item.reasons[0].reason) : "";
                switch (e.item.content.__typename) {
                    case "Clip":
                        var n = e.item.content;
                        return {
                            card_author_id: n.broadcaster && n.broadcaster.id || "",
                            display_reason: t,
                            feed_presentation: e.feedPresentation
                        };
                    case "Post":
                        return {
                            card_author_id: e.item.content.author.id,
                            display_reason: t,
                            feed_presentation: e.feedPresentation
                        };
                    case "Stream":
                        return {
                            card_author_id: e.item.content.broadcaster.id,
                            display_reason: t,
                            feed_presentation: e.feedPresentation
                        };
                    case "Video":
                        var i = e.item.content;
                        return {
                            card_author_id: i.owner && i.owner.id || "",
                            display_reason: t,
                            feed_presentation: e.feedPresentation
                        };
                    default:
                        return {
                            card_author_id: "",
                            display_reason: "",
                            feed_presentation: ""
                        }
                }
            },
            s = n("TWJL"),
            l = function(e, t) {
                var n = c(e.embed);
                Object(r.c)(i.SpadeEventType.FeedCardEmbedImpression, n, t)
            },
            c = function(e) {
                switch (e.__typename) {
                    case "Clip":
                        var t = e;
                        return {
                            embed_entity: s.a + ":" + t.id,
                            embed_id: t.id,
                            embed_type: s.a,
                            media_type: "video"
                        };
                    case "PhotoOEmbed":
                        var n = e;
                        return {
                            embed_entity: s.b + ":" + n.inputURL,
                            embed_id: n.inputURL,
                            embed_type: s.b,
                            media_type: "photo"
                        };
                    case "Stream":
                        var i = e;
                        return {
                            embed_entity: s.d + ":" + i.id,
                            embed_id: i.id,
                            embed_type: s.d,
                            media_type: "video"
                        };
                    case "Video":
                        var a = e;
                        return {
                            embed_entity: s.e + ":" + a.id,
                            embed_id: a.id,
                            embed_type: s.e,
                            media_type: "video"
                        };
                    case "VideoOEmbed":
                        var r = e;
                        return {
                            embed_entity: s.b + ":" + r.inputURL,
                            embed_id: r.inputURL,
                            embed_type: s.b,
                            media_type: "video"
                        };
                    default:
                        return {
                            embed_entity: "",
                            embed_id: "",
                            embed_type: "",
                            media_type: ""
                        }
                }
            },
            m = function(e, t) {
                var n = u(e.embed);
                Object(r.c)(i.SpadeEventType.FeedCardEmbedPlay, n, t)
            },
            u = function(e) {
                switch (e.__typename) {
                    case "Clip":
                        var t = e;
                        return {
                            action: "play",
                            embed_entity: s.a + ":" + t.id,
                            embed_id: t.id,
                            embed_type: s.a,
                            media_type: "video"
                        };
                    case "Stream":
                        var n = e;
                        return {
                            action: "play",
                            embed_entity: s.d + ":" + n.id,
                            embed_id: n.id,
                            embed_type: s.d,
                            media_type: "video"
                        };
                    case "Video":
                        var i = e;
                        return {
                            action: "play",
                            embed_entity: s.e + ":" + i.id,
                            embed_id: i.id,
                            embed_type: s.e,
                            media_type: "video"
                        };
                    case "VideoOEmbed":
                        var a = e;
                        return {
                            action: "play",
                            embed_entity: s.b + ":" + a.inputURL,
                            embed_id: a.inputURL,
                            embed_type: s.b,
                            media_type: "video"
                        };
                    default:
                        return {
                            action: "",
                            embed_entity: "",
                            embed_id: "",
                            embed_type: "",
                            media_type: ""
                        }
                }
            },
            p = n("6sO2"),
            v = function(e, t) {
                var n = {
                    action: e.action,
                    entity: "post:" + e.postID,
                    post_id: e.postID,
                    post_content: e.postContent,
                    composer_location: e.composerLocation
                };
                Object(r.c)(i.SpadeEventType.FeedPost, n, t)
            },
            g = function(e) {
                var t = {
                    action: e.action,
                    entity: "post:" + e.postID,
                    post_id: e.postID,
                    post_content: e.postContent,
                    composer_location: e.composerLocation
                };
                p.n.track(i.SpadeEventType.FeedPost, t)
            },
            f = function(e, t) {
                var n = Object(s.f)(e.entity),
                    a = {
                        action: e.action,
                        reaction_int: e.reactionInt,
                        reaction_text: e.reactionText,
                        target_entity: e.entity,
                        target_id: n.id,
                        target_type: n.type
                    };
                Object(r.c)(i.SpadeEventType.FeedReaction, a, t)
            };
        n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, "a", function() {
            return o
        }), n.d(t, "b", function() {
            return l
        }), n.d(t, "c", function() {
            return m
        }), n.d(t, "d", function() {
            return v
        }), n.d(t, "e", function() {
            return g
        }), n.d(t, "f", function() {
            return f
        })
    },
    uckt: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "FeaturedStreams"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "language"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String"
                        }
                    }
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "first"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Int"
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
                            value: "featuredStreams"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "language"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "language"
                                }
                            }
                        }, {
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "first"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "first"
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
                                    value: "description"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "imageURL"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "isScheduled"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "isSponsored"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "priorityLevel"
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
                                                    value: "displayName"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
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
                                                        value: "150"
                                                    }
                                                }],
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
                                    }, {
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
                                            value: "type"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "viewersCount"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
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
                end: 290
            }
        };
        n.loc.source = {
            body: "query FeaturedStreams($language: String $first: Int) {\nfeaturedStreams(language: $language first: $first) {\ndescription\nimageURL\nisScheduled\nisSponsored\npriorityLevel\nstream {\nbroadcaster {\ndisplayName\nid\nprofileImageURL(width: 150)\nlogin\n}\ngame {\nid\nname\n}\nid\ntype\nviewersCount\n}\ntitle\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    y9X2: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "user"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "User"
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
                            value: "broadcastSettings"
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
                                    value: "title"
                                },
                                arguments: [],
                                directives: []
                            }]
                        }
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
                                value: "70"
                            }
                        }],
                        directives: []
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 103
            }
        };
        n.loc.source = {
            body: "fragment user on User {\nid\nbroadcastSettings {\nid\ntitle\n}\ndisplayName\nlogin\nprofileImageURL(width:70)\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    }
});
//# sourceMappingURL=pages.front-05c7dd52e60376dae57c4d308f2a314f.js.map