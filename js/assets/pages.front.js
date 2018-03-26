webpackJsonp([50], {
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
    "/7C1": function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return i
        }), n.d(t, "c", function() {
            return a
        }), n.d(t, "a", function() {
            return r
        }), t.e = function(e) {
            return {
                type: i,
                player: e
            }
        }, t.f = function() {
            return {
                type: a
            }
        }, t.d = function() {
            return {
                type: r
            }
        };
        var i = "carouselPlayer.CAROUSEL_REGISTERED",
            a = "carouselPlayer.CAROUSEL_UNREGISTERED",
            r = "carouselPlayer.CAROUSEL_PAUSED"
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
            for (var m, u = [], p = e.split(/\n/), g = function(e, g) {
                    if (e > 0 && (g += p[e - 1].length + 1), c && "" === p[e]) return u.push(i.createElement(s.O, {
                        key: e
                    }, "\n")), m = g, "continue";
                    var v = t.map(function(e) {
                            return function(e, t) {
                                return {
                                    emoteID: e.emoteID,
                                    from: e.from - t,
                                    to: e.to - t,
                                    setID: e.setID
                                }
                            }(e, g)
                        }).filter(function(t) {
                            return ! function(e, t) {
                                return e.from < 0 || e.from >= t || e.to < 0 || e.to >= t
                            }(t, p[e].length)
                        }),
                        f = Object(o.f)(p[e], Object(d.b)(v), 0, {}, !1, n);
                    u.push(i.createElement(s.O, {
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
                    }(f))), m = g
                }, v = 0, f = 0; v < p.length; v++) g(v, f), f = m;
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
    "287o": function(e, t, n) {
        "use strict";
        var i;
        n.d(t, "a", function() {
                return i
            }),
            function(e) {
                e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove"
            }(i || (i = {}))
    },
    "4mYF": function(e, t, n) {
        "use strict";
        var i, a = n("TToO"),
            r = n("GiK3"),
            o = n("6sO2"),
            d = n("mi6k"),
            s = n("CSlQ"),
            l = n("Odds"),
            c = (n("kuCN"), "embed-overlay");
        ! function(e) {
            e[e.Clip = 0] = "Clip", e[e.Video = 1] = "Video", e[e.Stream = 2] = "Stream", e[e.VideoOEmbed = 3] = "VideoOEmbed"
        }(i || (i = {}));
        var m = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        showOverlay: !0
                    }, t.getOverlayComponent = function() {
                        var e = t.props,
                            n = e.createdAt,
                            a = e.lengthSeconds,
                            s = e.thumbnailURL,
                            m = e.type,
                            u = e.viewCount,
                            p = a && a > 0 ? Object(d.a)(a) : "";
                        return r.createElement("a", {
                            href: "#",
                            onClick: t.handleClick,
                            "data-test-selector": c
                        }, r.createElement(l.j, {
                            ratio: l.k.Aspect16x9
                        }, r.createElement(l._6, null, r.createElement(l._0, {
                            fullWidth: !0,
                            fullHeight: !0,
                            position: l._13.Absolute
                        }, r.createElement("img", {
                            src: s
                        })), r.createElement(l._6, {
                            className: "embed-card__overlay",
                            position: l._13.Absolute,
                            attachLeft: !0,
                            attachTop: !0,
                            fullWidth: !0,
                            fullHeight: !0
                        }, r.createElement(l._6, {
                            className: "embed-card__play",
                            display: l.P.Flex,
                            justifyContent: l._5.Center,
                            position: l._13.Absolute,
                            attachLeft: !0,
                            attachTop: !0,
                            fullWidth: !0,
                            fullHeight: !0
                        }, r.createElement(l._19, {
                            asset: l._20.Play,
                            width: 50,
                            height: 50
                        })), r.createElement(l._6, {
                            position: l._13.Absolute,
                            padding: 1,
                            attachBottom: !0,
                            attachLeft: !0
                        }, n && r.createElement(l.O, null, Object(o.c)(new Date(n), "medium")), r.createElement(l._6, null, m === i.Stream && r.createElement(l._6, {
                            display: l.P.Inline,
                            margin: {
                                right: .5
                            }
                        }, r.createElement(l.F, {
                            status: l.H.Live
                        })), u && r.createElement("span", null, t.getFormattedViewCount(u, m)))), r.createElement(l._6, {
                            position: l._13.Absolute,
                            padding: 1,
                            attachBottom: !0,
                            attachRight: !0
                        }, p && r.createElement(l._6, null, r.createElement(l.O, null, p)))), r.createElement(l._29, {
                            position: l._13.Absolute,
                            attachTop: !0,
                            attachLeft: !0,
                            margin: 1,
                            fontSize: l.T.Size5
                        }, m === i.Stream && r.createElement(l._10, {
                            label: Object(o.d)("Live", "EmbedOverlayPill"),
                            type: l._11.Live
                        }), m === i.Video && r.createElement(l._10, {
                            label: Object(o.d)("Video", "EmbedOverlayPill"),
                            type: l._11.Overlay
                        }), m === i.Clip && r.createElement(l._10, {
                            label: Object(o.d)("Clip", "EmbedOverlayPill"),
                            type: l._11.Overlay
                        })))))
                    }, t.handleClick = function(e) {
                        e.preventDefault(), t.setState({
                            showOverlay: !1
                        }), t.props.onClick && t.props.onClick()
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return this.state.showOverlay ? this.getOverlayComponent() : r.createElement(l.j, {
                        ratio: l.k.Aspect16x9
                    }, this.props.children)
                }, t.prototype.getFormattedViewCount = function(e, t) {
                    switch (t) {
                        case i.Stream:
                            return Object(o.d)("{viewCount,number} viewers", {
                                viewCount: e
                            }, "OverlayViewCount");
                        case i.Clip:
                        case i.Video:
                            return Object(o.d)("{viewCount,number} views", {
                                viewCount: e
                            }, "OverlayViewCount");
                        default:
                            return ""
                    }
                }, t
            }(r.Component),
            u = Object(s.d)("EmbedOverlay")(m);
        n.d(t, !1, function() {
            return c
        }), n.d(t, "b", function() {
            return i
        }), n.d(t, "a", function() {
            return u
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
                return i.createElement(a._29, {
                    elevation: 1,
                    margin: {
                        bottom: 2
                    },
                    background: a.m.Base
                }, i.createElement(a._29, {
                    display: a.P.Flex,
                    flexWrap: a.S.NoWrap,
                    padding: 1,
                    background: a.m.Base,
                    borderBottom: !0
                }, i.createElement(a._6, {
                    margin: {
                        right: 1
                    }
                }, i.createElement(a.O, null, i.createElement(a._12, {
                    width: 40,
                    height: 40
                }))), i.createElement(a._6, {
                    flexGrow: 1
                }, i.createElement(a.O, {
                    fontSize: a.T.Size6
                }, i.createElement(a._12, {
                    width: 100
                })), i.createElement(a.O, {
                    fontSize: a.T.Size7
                }, i.createElement(a._12, {
                    width: 120
                })))), i.createElement(a._6, {
                    margin: {
                        bottom: .5
                    },
                    padding: 1
                }, i.createElement(a.O, {
                    fontSize: a.T.Size6
                }, i.createElement(a._12, null)), i.createElement(a.O, {
                    fontSize: a.T.Size6
                }, i.createElement(a._12, null)), i.createElement(a.O, {
                    fontSize: a.T.Size6
                }, i.createElement(a._12, {
                    width: 280
                }))))
            },
            o = function() {
                return i.createElement(a._29, {
                    elevation: 1,
                    margin: {
                        bottom: 2
                    },
                    background: a.m.Base
                }, i.createElement(a._6, {
                    margin: {
                        bottom: .5
                    }
                }, i.createElement(a.j, {
                    ratio: a.k.Aspect16x9
                }, i.createElement(a._12, null))), i.createElement(a._29, {
                    display: a.P.Flex,
                    flexWrap: a.S.NoWrap,
                    padding: 1,
                    background: a.m.Base
                }, i.createElement(a._6, {
                    margin: {
                        right: 1
                    }
                }, i.createElement(a.O, null, i.createElement(a._12, {
                    width: 40,
                    height: 40
                }))), i.createElement(a._6, {
                    flexGrow: 1
                }, i.createElement(a.O, {
                    fontSize: a.T.Size6
                }, i.createElement(a._12, {
                    width: 100
                })), i.createElement(a.O, {
                    fontSize: a.T.Size6
                }, i.createElement(a._12, {
                    width: 140
                })), i.createElement(a.O, {
                    fontSize: a.T.Size6
                }, i.createElement(a._12, {
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
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 331
            }
        };
        i.loc.source = {
            body: '#import "twilight/features/feed/models/user-fragment.gql"\nfragment feedItemClip on Clip {\nid\nclipCreatedAt: createdAt\nembedURL\nthumbnailURL(width:480 height:272)\nviewCount\nslug\ndurationSeconds\nclipTitle: title\nbroadcaster {\n...feedUser\n}\nreactions {\nemote {\nid\ntoken\nsetID\n}\ncount\nself {\nhasReacted\n}\n}\nvideo {\ngame {\nid\nname\n}\n}\n}',
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
        var i = n("TToO"),
            a = n("GiK3"),
            r = n("6sO2"),
            o = n("o5l+"),
            d = n("zCIC"),
            s = n("j7/Y"),
            l = n("w9tK"),
            c = n("Us7i"),
            m = n("vH/s"),
            u = n("/+to"),
            p = n("QG7y"),
            g = n("86JD"),
            v = n("CSlQ"),
            f = n("RH2O"),
            k = n("lbHh"),
            h = n("7vx8"),
            b = n("DBTH"),
            _ = n("S4HN"),
            y = n("yWCw"),
            S = n("F8kA"),
            E = n("NY9D"),
            N = n("Odds"),
            C = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = this.props,
                        t = a.createElement(N._6, {
                            padding: 1
                        }, a.createElement(N.O, {
                            fontSize: N.T.Size5,
                            color: N.J.Alt2
                        }, Object(r.d)("{title}", {
                            title: e.title
                        }, "GameListComponent"))),
                        n = a.createElement(N._29, {
                            background: N.m.Alt,
                            padding: 1
                        }, a.createElement(N._0, {
                            fullWidth: !0,
                            fullHeight: !0,
                            display: N.P.Block
                        }, a.createElement(S.a, i.__assign({
                            to: e.viewAllLinkTo
                        }, Object(N._56)(e)), Object(r.d)("View All", "GameListComponent")))),
                        o = [];
                    if (e.loading)
                        for (var d = 0; d < e.limit; d++) o.push(a.createElement(N._6, {
                            key: d,
                            margin: {
                                bottom: 1
                            }
                        }, a.createElement(N.j, {
                            ratio: N.k.Aspect3x4
                        }, a.createElement(N._12, null)), a.createElement(N._6, null, a.createElement(N.O, null, a.createElement(N._12, {
                            width: 100
                        })), a.createElement(N.O, null, a.createElement(N._12, {
                            width: 70
                        })))));
                    else e.items && e.items.length > 0 && (o = e.items.map(function(e, t) {
                        if (!e) return null;
                        var n = e.id,
                            i = e.name,
                            o = e.viewersCount,
                            d = e.boxArtURL;
                        return a.createElement(N._6, {
                            key: n,
                            margin: {
                                bottom: 1
                            }
                        }, a.createElement(N.t, {
                            linkTo: Object(E.c)(i),
                            title: i,
                            alt: i + " cover image",
                            src: d,
                            info: Object(r.d)("{viewerCount,number} viewers", {
                                viewerCount: o
                            }, "GameListComponent"),
                            "data-a-target": "card-" + t,
                            "data-a-id": "card-" + i.replace(/ /g, "")
                        }))
                    }));
                    return a.createElement(N._29, {
                        elevation: 1,
                        background: N.m.Base,
                        display: N.P.Hide,
                        breakpointMedium: {
                            display: N.P.Block
                        }
                    }, t, a.createElement(N._6, {
                        padding: {
                            x: 1
                        }
                    }, a.createElement(N._49, {
                        gutterSize: N._51.ExtraSmall,
                        childWidth: N._50.ExtraSmall,
                        placeholderItems: 18
                    }, o)), n)
                }, t = i.__decorate([Object(v.d)("GameList", {
                    autoReportInteractive: !0
                })], t)
            }(a.Component),
            O = n("OkeX");
        var w = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.postRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.postRender()
                }, t.prototype.render = function() {
                    var e, t, n = [];
                    return this.props.data.error ? a.createElement(y.a, {
                        message: Object(r.d)("Followed Games are unavailable at this time.", "FollowedGamesCompoment")
                    }) : (this.props.data.loading || (e = this.props.data, t = [], (e.currentUser.followedGames && e.currentUser.followedGames.nodes || []).forEach(function(e) {
                        return e && e.id && t.push({
                            id: e.id,
                            name: e.name,
                            viewersCount: e.viewersCount,
                            boxArtURL: e.boxArtURL
                        })
                    }), n = t), this.props.data.loading || n && n.length > 0 ? a.createElement(C, {
                        "data-a-target": "view-all-followed-games-link",
                        items: n,
                        limit: 18,
                        loading: this.props.data.loading,
                        title: Object(r.d)("Followed Games", "FollowedGamesCompoment"),
                        viewAllLinkTo: "/directory/following/games"
                    }) : null)
                }, t.prototype.postRender = function() {
                    this.props.data.loading || this.props.latencyTracking.reportInteractive()
                }, t = i.__decorate([Object(h.a)(O, {
                    options: {
                        variables: {
                            limit: 18
                        }
                    }
                }), Object(v.d)("FollowedGames")], t)
            }(a.Component),
            F = n("Y4Yc"),
            I = "twilight_onboarding",
            R = "twilight_onboarding-prompt_dismissed",
            T = {
                domain: window.location.hostname.endsWith(".twitch.tv") ? ".twitch.tv" : void 0,
                secure: "https:" === window.location.protocol
            },
            P = i.__assign({}, T, {
                expires: 365
            }),
            x = 3,
            D = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isOnboardingDismissedCookieSet: void 0 !== k.get(R)
                    }, t.handleAutoOnboardingRedirect = function() {
                        void 0 === k.get(I) && Object(b.q)(new Date(t.props.data.currentUser.createdAt)) && (k.set(I, "true", P), t.redirectToOnboarding(_.b.NewSignup))
                    }, t.startOnboarding = function() {
                        t.redirectToOnboarding(_.b.HomepageCTA)
                    }, t.redirectToOnboarding = function(e) {
                        Object(_.g)({
                            source: e
                        }), window.location.assign("/hi" + location.search)
                    }, t.dismissOnboardingPrompt = function() {
                        Object(_.f)(), k.set(R, "true", P), t.setState({
                            isOnboardingDismissedCookieSet: !0
                        })
                    }, t.followedGamesForUserHasLoaded = function() {
                        return t.props.data && !t.props.data.loading && !t.props.data.error && t.props.data.currentUser && t.props.data.currentUser.followedGames
                    }, t.shouldSeeOnboarding = function() {
                        return !t.state.isOnboardingDismissedCookieSet && t.followedGamesForUserHasLoaded() && t.state.inOnboardingExperiment && t.props.data.currentUser.followedGames.nodes.length < x && Object(b.q)(new Date(t.props.data.currentUser.createdAt))
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    return i.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return i.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, r.o.experiments.getAssignment(b.j)];
                                case 1:
                                    return e = t.sent(), this.setState({
                                        inOnboardingExperiment: Object(b.p)(e)
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.componentDidUpdate = function() {
                    this.shouldSeeOnboarding() && this.handleAutoOnboardingRedirect()
                }, t.prototype.render = function() {
                    return this.shouldSeeOnboarding() ? a.createElement(N._29, {
                        "data-test-selector": "onboarding-prompt",
                        background: N.m.Base,
                        display: N.P.Flex,
                        elevation: 3,
                        margin: {
                            bottom: 1
                        },
                        padding: 1,
                        borderMarked: !0
                    }, a.createElement(N._29, {
                        display: N.P.Flex,
                        flexWrap: N.S.NoWrap,
                        textAlign: N._39.Left,
                        alignItems: N.c.Center,
                        fullWidth: !0,
                        padding: {
                            bottom: 1
                        }
                    }, a.createElement(N._6, {
                        margin: {
                            right: 1
                        },
                        flexGrow: 1
                    }, a.createElement(N.O, {
                        type: N._43.H5,
                        color: N.J.Base,
                        bold: !0
                    }, Object(r.d)("Welcome to your homepage, {displayName}!", {
                        displayName: this.props.data.currentUser.displayName
                    }, "OnboardingPrompt"))), a.createElement(N._6, {
                        flexShrink: 0
                    }, a.createElement(N.v, {
                        "data-test-selector": "onboarding-prompt__dismiss",
                        ariaLabel: Object(r.d)("dismiss onboarding", "OnboardingPrompt"),
                        type: N.x.Default,
                        onClick: this.dismissOnboardingPrompt,
                        icon: N._20.Close
                    }))), a.createElement(N._6, {
                        padding: {
                            bottom: 1
                        }
                    }, a.createElement(N.O, null, Object(r.d)("Here you can find your Pulse Feed and popular content on Twitch. Take a moment to personalize this page to your interests.", "OnboardingPrompt"))), a.createElement(N._6, {
                        margin: {
                            y: .5
                        }
                    }, a.createElement(N.u, {
                        "data-test-selector": "onboarding-prompt__start",
                        onClick: this.startOnboarding
                    }, a.createElement(N._6, {
                        padding: {
                            x: 1
                        }
                    }, Object(r.d)("Start", "OnboardingPrompt"))))) : null
                }, t = i.__decorate([Object(v.d)("OnboardingPrompt", {
                    autoReportInteractive: !0
                }), Object(h.a)(F, {
                    options: {
                        variables: {
                            limit: 18
                        }
                    },
                    skip: function(e) {
                        return !e.firstPageLoaded
                    }
                })], t)
            }(a.Component);
        var L = Object(f.b)(function(e) {
                return {
                    firstPageLoaded: e.session.firstPageLoaded
                }
            })(D),
            A = n("eXld"),
            j = n("2aoH"),
            U = n("8PKe"),
            V = n("oIkB"),
            M = n("VFqp"),
            G = n("cYgC"),
            z = n("ojlS"),
            q = n("C/8M"),
            B = n("EImC"),
            W = function(e) {
                for (var t = e.cardCount, n = [], i = 0; i < t; i++) 1 === i ? n.push(a.createElement(B.b, {
                    key: i
                })) : n.push(a.createElement(B.a, {
                    key: i
                }));
                return a.createElement(N._6, null, n)
            },
            H = n("/0cZ"),
            Q = Object(q.d)(function() {
                return {
                    feed_type: "rec"
                }
            })(G.a),
            K = {
                limit: 5
            },
            J = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onCreatePost = function(e, n, i) {
                        return void 0 === i && (i = !1), t.props.createPost(e, n, i)
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.postRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.postRender()
                }, t.prototype.render = function() {
                    return this.props.data.loading ? a.createElement(W, {
                        cardCount: 5
                    }) : this.props.data.error ? a.createElement(y.a, {
                        message: Object(r.d)("Error loading data.", "PulseComponent")
                    }) : a.createElement(N._6, null, a.createElement(M.a, {
                        placeholder: Object(r.d)("Share a clip or video with your followers by adding links from Twitch, Vimeo, and YouTube.", "PulseComposer"),
                        onCreate: this.onCreatePost,
                        isConnectedToTwitter: this.props.data.currentUser.isConnectedToTwitter,
                        userID: this.props.data.currentUser.id,
                        composerLocation: M.b.HomePage
                    }), a.createElement(Q, {
                        items: this.props.data.currentUser.pulseFeed.items
                    }), a.createElement(d.a, {
                        enabled: !this.props.data.loading && !this.props.data.error,
                        loadMore: this.props.loadMore,
                        contentLength: this.props.data.currentUser.pulseFeed.items.edges.length,
                        pixelThreshold: 100
                    }))
                }, t.prototype.postRender = function() {
                    this.props.data.loading || this.props.latencyTracking.reportInteractive()
                }, t = i.__decorate([Object(h.a)(H, {
                    options: {
                        fetchPolicy: "network-only",
                        variables: K
                    },
                    props: function(e) {
                        return i.__assign({}, e, {
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
                                            currentUser: i.__assign({}, n.currentUser, {
                                                pulseFeed: i.__assign({}, n.currentUser.pulseFeed, {
                                                    items: i.__assign({}, n.currentUser.pulseFeed.items, {
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
                }), Object(h.a)(z, {
                    props: function(e) {
                        return {
                            createPost: function(t, n, a) {
                                return e.mutate(i.__assign({}, Object(V.a)({
                                    channelID: e.ownProps.data.currentUser.id,
                                    body: t,
                                    embedURLs: n.map(function(e) {
                                        return e.sourceURL
                                    }),
                                    postToTwitter: a
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
                                            variables: K
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
                                            variables: K
                                        }))
                                    }
                                }))
                            }
                        }
                    }
                }), Object(v.d)("Pulse")], t)
            }(a.Component),
            $ = n("L46p");
        var X = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.postRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.postRender()
                }, t.prototype.render = function() {
                    var e, t, n = [];
                    return this.props.data.error ? a.createElement(y.a, {
                        message: Object(r.d)("Top Games are unavailable at this time.", "TopGamesCompoment")
                    }) : (this.props.data.loading || (e = this.props.data, t = [], e.games.edges.map(function(e) {
                        var n = e.node;
                        return n && n.id && t.push({
                            id: n.id,
                            name: n.name,
                            viewersCount: n.viewersCount,
                            boxArtURL: n.boxArtURL
                        })
                    }), n = t), a.createElement(C, {
                        title: Object(r.d)("Top Games", "TopGamesCompoment"),
                        items: n,
                        loading: this.props.data.loading,
                        limit: 18,
                        viewAllLinkTo: "/directory",
                        "data-a-target": "view-all-link"
                    }))
                }, t.prototype.postRender = function() {
                    this.props.data.loading || this.props.latencyTracking.reportInteractive()
                }, t = i.__decorate([Object(h.a)($, {
                    options: function(e) {
                        return {
                            variables: {
                                limit: e.count || 18
                            }
                        }
                    }
                }), Object(v.d)("TopGames")], t)
            }(a.Component),
            Z = (n("jPY3"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        numSlotsAdded: 0
                    }, t.onSlotAdded = function() {
                        t.setState(function(e) {
                            var t = e.numSlotsAdded + 1;
                            return t === Object.keys(p.b.front).length && c.a.display(p.b.front.leaderboard), {
                                numSlotsAdded: t
                            }
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentWillMount = function() {
                    p.g.addListener(p.e, this.onSlotAdded)
                }, t.prototype.componentDidMount = function() {
                    this.onRender(), r.o.setPageTitle()
                }, t.prototype.render = function() {
                    return a.createElement(N._6, {
                        fullHeight: !0
                    }, a.createElement(A.b, {
                        suppressScrollX: !0,
                        disableDebounce: !0
                    }), a.createElement(j.a, null, a.createElement(U.a, null)), a.createElement(N._6, {
                        padding: 3
                    }, a.createElement(u.a, {
                        adSize: p.c.front.leaderboard,
                        adUnit: p.d.frontpage,
                        "data-a-target": "frontpage-leaderboard-ad-slot",
                        slotID: p.b.front.leaderboard,
                        targeting: {
                            pagetype: p.a.frontpage
                        },
                        injectStyles: {
                            display: "flex",
                            justifyContent: "center",
                            textAlign: "center",
                            marginBottom: "2rem"
                        },
                        autoEnable: !1
                    }), a.createElement(N._6, {
                        className: "front-page",
                        display: N.P.Flex,
                        flexDirection: N.R.ColumnReverse,
                        breakpointMedium: {
                            flexDirection: N.R.Row
                        },
                        flexWrap: N.S.NoWrap,
                        margin: {
                            x: "auto"
                        }
                    }, a.createElement(N._6, {
                        className: "front-page__main-col",
                        flexGrow: 0,
                        flexShrink: 0
                    }, a.createElement(L, null), a.createElement(J, null)), a.createElement(N._6, {
                        flexGrow: 1,
                        breakpointMedium: {
                            padding: {
                                left: 2
                            }
                        }
                    }, a.createElement(d.c, {
                        bottomPixelThreshold: 20,
                        disableStickinessBelowWidth: 1127
                    }, a.createElement(N._6, {
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(g.b, {
                        renderContext: g.a.Front
                    })), a.createElement(N._6, {
                        display: N.P.Hide,
                        breakpointMedium: {
                            display: N.P.Block
                        }
                    }, a.createElement(u.a, {
                        adSize: p.c.front.rightTop,
                        adUnit: p.d.frontpage,
                        "data-a-target": "frontpage-right-top-ad-slot",
                        slotID: p.b.front.rightTop,
                        targeting: {
                            pagetype: p.a.frontpage
                        },
                        injectStyles: {
                            display: "flex",
                            justifyContent: "center",
                            textAlign: "center",
                            marginBottom: "1rem"
                        },
                        autoEnable: !1
                    })), a.createElement(N._6, {
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(w, null)), a.createElement(o.a, null, a.createElement(X, null)), a.createElement(N._6, {
                        display: N.P.Hide,
                        breakpointMedium: {
                            display: N.P.Block
                        }
                    }, a.createElement(u.a, {
                        adSize: p.c.front.rightBottom,
                        adUnit: p.d.frontpage,
                        "data-a-target": "frontpage-right-bottom-ad-slot",
                        slotID: p.b.front.rightBottom,
                        targeting: {
                            pagetype: p.a.frontpage
                        },
                        injectStyles: {
                            display: "flex",
                            justifyContent: "center",
                            marginTop: "1rem"
                        },
                        autoEnable: !1
                    })))))))
                }, t.prototype.componentWillUnmount = function() {
                    p.g.removeListener(p.e, this.onSlotAdded)
                }, t.prototype.onRender = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t = i.__decorate([Object(v.d)("FrontPage", {
                    destination: l.a.Index
                }), Object(s.a)({
                    location: m.PageviewLocation.FrontPage
                })], t)
            }(a.Component));
        n.d(t, "FrontPage", function() {
            return Z
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
            l = n("RH2O"),
            c = n("2KeS"),
            m = n("/7C1"),
            u = n("KSGD"),
            p = n("4mYF"),
            g = n("F8kA"),
            v = Object(d.d)("EmbedInfo", {
                autoReportInteractive: !0
            })(function(e) {
                var t = e.title,
                    n = e.author,
                    i = e.externalAuthorName,
                    r = e.description,
                    o = null,
                    d = null;
                return n ? (o = a.createElement(s._6, {
                    margin: {
                        right: 1
                    },
                    flexShrink: 0
                }, a.createElement(g.a, {
                    to: "/" + n.login,
                    "data-a-target": "pulse-profile-picture"
                }, a.createElement(s._0, {
                    flexShrink: 0
                }, a.createElement(s.l, {
                    size: 40,
                    src: n.profileImageURL,
                    alt: "User profile picture"
                })))), d = a.createElement(s.O, {
                    fontSize: s.T.Size6,
                    color: s.J.Alt
                }, a.createElement(g.a, {
                    to: "/" + n.login,
                    "data-a-target": "pulse-displayname-link"
                }, n.displayName))) : i && "" !== i && (d = a.createElement(s.O, {
                    fontSize: s.T.Size6,
                    color: s.J.Alt
                }, i)), a.createElement(s._29, {
                    display: s.P.Flex,
                    flexWrap: s.S.NoWrap,
                    padding: 1,
                    background: s.m.Base
                }, o, a.createElement(s._6, {
                    flexGrow: 1,
                    overflow: s._9.Hidden
                }, d, a.createElement(s.O, {
                    fontSize: s.T.Size6,
                    color: s.J.Base,
                    bold: !0,
                    ellipsis: !0
                }, t), r && a.createElement(s.O, {
                    fontSize: s.T.Size6,
                    color: s.J.Alt2,
                    noWrap: !0
                }, r)))
            }),
            f = n("fc0G"),
            k = function(e) {
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
                    }, a.createElement(s.j, {
                        ratio: s.k.Aspect16x9
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
                            playerTypeOverride: o || f.b.Frontpage
                        };
                    return r ? a.createElement("iframe", {
                        src: r,
                        width: "100%",
                        height: "100%",
                        allowFullScreen: !0
                    }) : t ? a.createElement(f.c, i.__assign({
                        channelLogin: t
                    }, d)) : n ? a.createElement(f.c, i.__assign({
                        vodID: n
                    }, d)) : a.createElement(s._6, null)
                }, t.prototype.postMessageIsWheelEvent = function(e) {
                    return "player.embed.client" === e.data.namespace && "bridgeplayereventwithpayload" === e.data.method && e.data.args.length > 0 && "wheel" === e.data.args[0].event
                }, t = i.__decorate([Object(d.d)("EmbedVideoPlayer")], t)
            }(a.Component),
            h = function(e, t) {
                var n = e.embed,
                    i = n.broadcaster,
                    r = n.clipTitle,
                    d = n.clipCreatedAt,
                    l = n.durationSeconds,
                    c = n.embedURL,
                    m = n.thumbnailURL,
                    u = n.video,
                    g = n.viewCount,
                    h = u && u.game ? u.game.name : "";
                return a.createElement(s._6, null, a.createElement(p.a, {
                    createdAt: d,
                    lengthSeconds: l,
                    onClick: function() {
                        e.pauseCarousel && e.pauseCarousel(), Object(o.c)(e, t.feedTrackingProps)
                    },
                    thumbnailURL: m,
                    type: p.b.Clip,
                    viewCount: g
                }, a.createElement(k, {
                    embedURL: c,
                    playerTypeOverride: f.b.Feed
                })), a.createElement(v, {
                    author: i,
                    title: r,
                    description: h
                }))
            };
        h.contextTypes = {
            feedTrackingProps: u.object
        };
        var b = Object(d.d)("ClipEmbed", {
            autoReportInteractive: !0
        })(h);
        var _ = Object(l.b)(null, function(e) {
                return Object(c.b)({
                    pauseCarousel: m.d
                }, e)
            })(b),
            y = n("6sO2"),
            S = Object(d.d)("PhotoOEmbed", {
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
                }, a.createElement(s.j, {
                    ratio: s.k.Aspect16x9
                }, a.createElement(s._6, null, a.createElement(s._0, {
                    fullWidth: !0,
                    fullHeight: !0,
                    position: s._13.Absolute
                }, a.createElement("img", {
                    src: d && d.url || y.o.config.defaultStreamPreviewURL
                })))), a.createElement(v, {
                    externalAuthorName: o,
                    title: n,
                    description: r
                }))
            }),
            E = function(e, t) {
                var n = e.embed,
                    i = n.broadcaster,
                    r = n.game,
                    d = n.title,
                    l = n.previewImageURL,
                    c = n.viewersCount,
                    m = r ? r.name : "";
                return a.createElement(s._6, null, a.createElement(p.a, {
                    onClick: function() {
                        Object(o.c)(e, t.feedTrackingProps)
                    },
                    thumbnailURL: l,
                    type: p.b.Stream,
                    viewCount: c
                }, a.createElement(k, {
                    channelLogin: i.login,
                    playerTypeOverride: f.b.Feed
                })), a.createElement(v, {
                    author: i,
                    title: d,
                    description: m
                }))
            };
        E.contextTypes = {
            feedTrackingProps: u.object
        };
        var N = Object(d.d)("StreamEmbed", {
                autoReportInteractive: !0
            })(E),
            C = function(e, t) {
                var n = e.embed,
                    i = n.id,
                    r = n.owner,
                    d = n.lengthSeconds,
                    l = n.game,
                    c = n.publishedAt,
                    m = n.previewThumbnailURL,
                    u = n.title,
                    g = n.videoViewCount,
                    h = l ? l.name : "";
                return a.createElement(s._6, null, a.createElement(p.a, {
                    createdAt: c,
                    lengthSeconds: d,
                    onClick: function() {
                        e.pauseCarousel && e.pauseCarousel(), Object(o.c)(e, t.feedTrackingProps)
                    },
                    thumbnailURL: m,
                    type: p.b.Video,
                    viewCount: g
                }, a.createElement(k, {
                    vodID: i,
                    playerTypeOverride: f.b.Feed
                })), a.createElement(v, {
                    author: r,
                    title: u,
                    description: h
                }))
            };
        C.contextTypes = {
            feedTrackingProps: u.object
        };
        var O = Object(d.d)("VideoEmbed", {
            autoReportInteractive: !0
        })(C);
        var w = Object(l.b)(null, function(e) {
                return Object(c.b)({
                    pauseCarousel: m.d
                }, e)
            })(O),
            F = (n("HgOP"), function(e, t) {
                var n = e.embed,
                    i = n.title,
                    r = n.providerName,
                    d = n.authorName,
                    l = n.html,
                    c = n.thumbnail,
                    m = l.replace("autoplay=false", "autoplay=true");
                return a.createElement(s._6, null, a.createElement(p.a, {
                    thumbnailURL: c && c.url || y.o.config.defaultStreamPreviewURL,
                    type: p.b.VideoOEmbed,
                    onClick: function() {
                        Object(o.c)(e, t.feedTrackingProps)
                    }
                }, a.createElement("div", {
                    className: "video-oembed-container",
                    dangerouslySetInnerHTML: {
                        __html: m
                    }
                })), a.createElement(v, {
                    externalAuthorName: d,
                    title: i,
                    description: r
                }))
            });
        F.contextTypes = {
            feedTrackingProps: u.object
        };
        var I = {
                PhotoOEmbed: S,
                VideoOEmbed: Object(d.d)("VideoOEmbed", {
                    autoReportInteractive: !0
                })(F),
                Clip: _,
                Stream: N,
                Video: w
            },
            R = function(e) {
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
                    var e = I[this.props.embed.__typename];
                    return e ? a.createElement(e, {
                        embed: this.props.embed
                    }) : a.createElement(s._6, null)
                }, t = i.__decorate([Object(d.d)("Embed"), Object(r.c)()], t)
            }(a.Component);
        n.d(t, "a", function() {
            return R
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
            if (0 === e.reasons.length) return i.createElement(o._6, null);
            var t = d(e.reasons[0].reason);
            return "" === t ? i.createElement(o._6, null) : i.createElement(o._6, {
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
    QG7y: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return r
        }), n.d(t, "c", function() {
            return o
        }), n.d(t, "d", function() {
            return d
        }), n.d(t, "a", function() {
            return s
        }), n.d(t, "f", function() {
            return l
        }), n.d(t, "e", function() {
            return c
        }), n.d(t, "g", function() {
            return m
        }), t.i = function(e) {
            m.emit(l, e)
        }, t.h = function(e) {
            m.emit(c, e)
        };
        var i = n("BzvE"),
            a = (n.n(i), n("6sO2")),
            r = {
                directory: {
                    banner: "dfp-directory-banner",
                    rectangle: "dfp-directory-rectangle"
                },
                channel250: "google_companion_300x250",
                anonFront: {
                    rect: "Twitch_FPMedRect_holder",
                    banner: "Twitch_FPopaBanner_holder",
                    takeover: "Twitch_FPTakeoverSkinv2_holder",
                    bottom: "Twitch_FP970Bottom_holder",
                    sizzle: "sizzle_strip"
                },
                front: {
                    leaderboard: "hpto_logged_in_leaderboard",
                    rightTop: "hpto_logged_in_rcol_top",
                    rightBottom: "hpto_logged_in_rcol_bottom"
                }
            },
            o = {
                directory: {
                    banner: [
                        [970, 66],
                        [970, 250],
                        [728, 90]
                    ],
                    rectangle: [
                        [300, 250]
                    ]
                },
                channel250: [300, 250],
                anonFront: {
                    rect: [
                        [300, 250]
                    ],
                    banner: [
                        [970, 418],
                        [970, 67],
                        [970, 250],
                        [970, 150],
                        [980, 250]
                    ],
                    takeover: [
                        [1, 1]
                    ],
                    bottom: [
                        [970, 66],
                        [728, 90]
                    ],
                    sizzle: [
                        [980, 250]
                    ]
                },
                front: {
                    leaderboard: [
                        [970, 66],
                        [728, 90]
                    ],
                    rightTop: [
                        [300, 250]
                    ],
                    rightBottom: [
                        [300, 600]
                    ]
                }
            },
            d = {
                directory: "/" + a.a.dfpNetworkCode + "/twitch/directory",
                channel: "/" + a.a.dfpNetworkCode + "/twitch/channels",
                frontpage: "/" + a.a.dfpNetworkCode + "/twitch/homepage",
                sizzle: "/" + a.a.dfpNetworkCode + "/twitch/sizzle_strip"
            },
            s = {
                games: "games",
                channel: "channel",
                frontpage: "homepage"
            },
            l = "ads.slot-render-end",
            c = "ads.slot-ready",
            m = new i.EventEmitter
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
            g = n("Odds"),
            v = n("KQs2"),
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
            _ = function(e) {
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
                    return (this.state.embed || this.state.removedEmbedURL === this.props.embedURL) && (e = ""), r.createElement(g._6, null, this.state.embed && r.createElement(g._6, {
                        position: g._13.Relative,
                        margin: {
                            top: 1
                        }
                    }, r.createElement(g._6, {
                        className: "embed-preview-close",
                        position: g._13.Absolute,
                        zIndex: g._55.Default,
                        attachTop: !0,
                        attachRight: !0
                    }, r.createElement(g.v, {
                        onClick: this.removeEmbed,
                        overlay: !0,
                        icon: g._20.Close,
                        ariaLabel: Object(o.d)("Close", "EmbedPreview")
                    })), r.createElement(v.a, {
                        embed: this.state.embed
                    })), r.createElement(b, {
                        url: e,
                        onLoad: this.onEmbedLoad
                    }))
                }, t
            }(r.Component),
            y = Object(l.a)("/settings/profile"),
            S = /(?:https?:\/\/)?(?:[-a-zA-Z0-9@:%_\+~#=]+\.)+[a-z]{2,6}\b(?:[-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
        ! function(e) {
            e.HomePage = "home", e.Channel = "channel", e.Dashboard = "dashboard", e.Contextual = "contextual"
        }(i || (i = {}));
        var E = function(e) {
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
                            var e = t.textArea.value.match(S);
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
                        direction: g.q.BottomRight
                    }));
                    var i, a = r.createElement(d.a, {
                        onClickOut: this.onEmotePickerClickOut
                    }, t, n);
                    return i = this.props.isConnectedToTwitter ? r.createElement(g.I, {
                        "data-test-selector": "twitter-checkbox",
                        id: "share-twitter-toggle",
                        label: Object(o.d)("Share Posts to Twitter", "TwitterShare"),
                        onChange: this.toggleShareActivity,
                        checked: this.state.shareToTwitter
                    }) : r.createElement("a", {
                        href: y
                    }, Object(o.d)("Connect Twitter", "ConnectTwitter")), r.createElement(g._29, {
                        elevation: 1,
                        padding: 1,
                        margin: {
                            bottom: 1
                        },
                        background: g.m.Base,
                        position: g._13.Relative,
                        "data-a-target": "pulse-post-container"
                    }, r.createElement("div", {
                        onMouseEnter: this.onMouseEnter
                    }, r.createElement(g._40, {
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
                        overflow: g._9.Hidden
                    }), r.createElement(g._29, {
                        textAlign: g._39.Right,
                        position: g._13.Absolute,
                        attachTop: !0,
                        attachRight: !0,
                        margin: {
                            top: 1,
                            right: 1
                        }
                    }, a), r.createElement(g._6, {
                        display: g.P.Flex,
                        margin: {
                            top: 1
                        }
                    }, r.createElement(g._6, {
                        flexGrow: 1
                    }), r.createElement(g._6, {
                        margin: {
                            right: 1
                        }
                    }, r.createElement(d.a, {
                        onClickOut: this.closeTwitterBubble
                    }, r.createElement(s.a, null, r.createElement(g.v, {
                        icon: g._20.Gear,
                        ariaLabel: Object(o.d)("Composer Settings", "ComposerSettings"),
                        "data-test-selector": "composer-setting",
                        "data-a-target": "pulse-settings"
                    }), r.createElement(g.p, {
                        direction: g.q.Left
                    }, r.createElement(g._6, {
                        padding: 1
                    }, i))))), r.createElement(g._6, null, r.createElement(g.u, {
                        "data-test-selector": "submit-post",
                        disabled: this.state.disabled,
                        ariaLabel: e,
                        onClick: this.onSubmit,
                        "data-a-target": "pulse-post-button"
                    }, e)))), !this.state.disabled && r.createElement(_, {
                        embedURL: this.state.inputEmbedURL,
                        onSetEmbed: this.handleSetEmbed
                    }))
                }, t = a.__decorate([Object(p.d)("Composer")], t)
            }(r.Component),
            N = n("RH2O");
        var C = Object(N.b)(function(e) {
            return {
                firstPageLoaded: e.session.firstPageLoaded
            }
        })(E);
        n.d(t, !1, function() {
            return "composer"
        }), n.d(t, !1, function() {
            return "submit-post"
        }), n.d(t, !1, function() {
            return "twitter-checkbox"
        }), n.d(t, !1, function() {
            return "composer-setting"
        }), n.d(t, !1, function() {
            return S
        }), n.d(t, "b", function() {
            return i
        }), n.d(t, !1, function() {
            return E
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
            return g([], e, !0)
        }, n.d(t, "FeaturedContent", function() {
            return v
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

        function g(e, t, n) {
            switch (t) {
                case l.FeaturedBroadcastersRenderContext.AnonFront:
                    return a.createElement(d.a, {
                        items: e,
                        isLoading: n,
                        layout: s.c.Horizontal,
                        darkTheme: !0
                    });
                default:
                    return a.createElement(p._29, {
                        className: "featured-content",
                        background: p.m.Base,
                        elevation: 1
                    }, a.createElement(p._6, {
                        padding: 1
                    }, function(e) {
                        return e ? a.createElement(p.O, {
                            fontSize: p.T.Size5,
                            color: p.J.Alt2
                        }, a.createElement(p._12, {
                            width: 100
                        })) : a.createElement(p.O, {
                            fontSize: p.T.Size5,
                            color: p.J.Alt2
                        }, Object(r.d)("Featured", "FeaturedContentComponent"))
                    }(n)), a.createElement(d.a, {
                        items: e,
                        isLoading: n,
                        layout: s.c.Vertical
                    }))
            }
        }
        var v = function(e) {
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
                return g(t, this.props.renderContext, o)
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
        var i = n("GiK3"),
            a = n("KQs2"),
            r = n("RH2O"),
            o = n("2KeS"),
            d = n("+xm8"),
            s = n("f2i/"),
            l = n("Aj/L"),
            c = n("TToO"),
            m = n("KSGD"),
            u = n("6sO2"),
            p = n("rCmJ"),
            g = n("7vx8"),
            v = n("Tzcg"),
            f = n("l21v"),
            k = n("287o"),
            h = n("CSlQ"),
            b = n("Odds"),
            _ = (n("kaF0"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        disabled: !1
                    }, t.toggleReaction = function() {
                        if (!t.state.disabled) {
                            var e, n = t.props.reaction.self.hasReacted ? k.a.Remove : k.a.Add,
                                i = ((e = {})[k.a.Add] = t.props.addReaction, e[k.a.Remove] = t.props.removeReaction, e);
                            t.setState({
                                disabled: !0
                            }), i[n](t.props.reaction.emote.id, t.props.reaction.emote.token).then(function() {
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
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.reaction,
                        t = e.count,
                        n = e.emote,
                        a = e.self,
                        r = n.token;
                    return parseInt(n.id, 10) < 15 && (r = Object(v.c)(n.token)), i.createElement("div", c.__assign({
                        onClick: this.toggleReaction
                    }, Object(b._56)(this.props)), i.createElement(b._46, {
                        label: 0 === t ? r : t + " " + r,
                        direction: b._48.Top,
                        align: b._47.Center
                    }, i.createElement(b._6, {
                        className: a.hasReacted ? "activity-reaction activity-reaction--active" : "activity-reaction"
                    }, i.createElement(b._6, {
                        className: "activity-reaction__emote-contain"
                    }, i.createElement("img", {
                        src: Object(f.e)("endorse" === n.id ? "1" : n.id, 3),
                        alt: r,
                        className: "activity-reaction__emote"
                    })))))
                }, t = c.__decorate([Object(h.d)("Reaction")], t)
            }(i.Component)),
            y = Object(h.d)("AdditionalReactions", {
                autoReportInteractive: !0
            })(function(e) {
                var t = e.reactions.map(function(t, n) {
                    return i.createElement(b._6, {
                        key: n,
                        margin: {
                            right: 1,
                            bottom: 1
                        }
                    }, i.createElement(_, {
                        key: n,
                        reaction: t,
                        addReaction: e.addReaction,
                        removeReaction: e.removeReaction,
                        "data-a-target": "additional-reaction-" + n
                    }))
                });
                return i.createElement(b.p, {
                    direction: e.position || b.q.TopCenter,
                    size: b.r.Small,
                    show: !0
                }, i.createElement(b._29, {
                    display: b.P.Flex,
                    flexWrap: b.S.Wrap,
                    padding: {
                        left: 1,
                        top: 1
                    }
                }, t))
            }),
            S = Object(h.d)("TopReactions", {
                autoReportInteractive: !0
            })(function(e) {
                var t = e.reactions.map(function(t, n) {
                    return i.createElement(b._6, {
                        key: n,
                        margin: {
                            right: 1
                        }
                    }, i.createElement(_, {
                        key: n,
                        reaction: t,
                        addReaction: e.addReaction,
                        removeReaction: e.removeReaction,
                        "data-a-target": "top-reaction-" + n
                    }))
                });
                return i.createElement(b._29, {
                    display: b.P.Flex
                }, t)
            });

        function E(e) {
            var t = [];
            return e && 0 !== e.length && (t = e.slice().sort(function(e, t) {
                return function(e, t) {
                    if (e.emote.id === P.emote.id) return -1;
                    if (t.emote.id === P.emote.id) return 1;
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
        var N = n("oIkB");
        var C = function(e, t, n) {
                return function(i, a, r, o) {
                    var d, s = (t = t || []).map(function(e) {
                            return e.emote.id
                        }).indexOf(a),
                        l = t.slice();
                    return s > -1 ? l[s] = c.__assign({}, t[s], {
                        count: t[s].count + function(e, t) {
                            return e === k.a.Add && t.self.hasReacted ? 0 : e === k.a.Add ? 1 : -1
                        }(e, t[s]),
                        self: c.__assign({}, t[s].self, {
                            hasReacted: e === k.a.Add
                        })
                    }) : e === k.a.Add && l.push(c.__assign({}, P, {
                        emote: c.__assign({}, P.emote, {
                            id: a,
                            token: r
                        }),
                        count: 1,
                        self: c.__assign({}, P.self, {
                            hasReacted: !0
                        })
                    })), n(c.__assign({}, Object(N.a)({
                        entityID: i,
                        emoteID: a
                    }), {
                        optimisticResponse: (d = {}, d[e === k.a.Add ? "addReaction" : "removeReaction"] = {
                            content: c.__assign({}, o, {
                                reactions: l
                            }),
                            __typename: e === k.a.Add ? "AddReactionPayload" : "RemoveReactionPayload"
                        }, d)
                    }))
                }
            },
            O = n("C/8M"),
            w = n("rzuL"),
            F = n("Mlfg"),
            I = n("Dqkc"),
            R = n("P+j/"),
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
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = i.createElement("div", {
                        onClick: this.toggleEmoteSelector,
                        "data-a-target": "add-reaction-button"
                    }, this.props.children);
                    return this.state.emoteSelectorVisible || (e = i.createElement(b._46, {
                        label: Object(u.d)("Add a Reaction", "ReactionSelector"),
                        direction: b._48.Top,
                        align: b._47.Center
                    }, e)), i.createElement(b._6, {
                        className: "reaction-selector",
                        position: b._13.Relative
                    }, i.createElement(p.a, {
                        onClickOut: this.closeEmoteSelector
                    }, this.state.emoteSelectorVisible && i.createElement(R.a, {
                        onClickEmote: this.onEmoteSelect,
                        visible: this.state.emoteSelectorVisible && this.state.emotesLoaded,
                        toggleVisibility: this.toggleEmoteSelector,
                        onLoad: this.emotesLoaded,
                        direction: this.props.position || b.q.TopLeft
                    }), e))
                }, t = c.__decorate([Object(h.d)("ReactionSelector")], t)
            }(i.Component)),
            P = {
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
            D = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        additionalReactionsVisible: !1
                    }, t.addReaction = function(e, n) {
                        return t.toggleReaction(k.a.Add, e, n)
                    }, t.hideAdditional = function() {
                        t.setState({
                            additionalReactionsVisible: !1
                        })
                    }, t.removeReaction = function(e, n) {
                        return t.toggleReaction(k.a.Remove, e, n)
                    }, t.toggleAdditional = function(e, n) {
                        n.preventDefault(), e.length <= x || t.setState(function(e) {
                            return {
                                additionalReactionsVisible: !e.additionalReactionsVisible
                            }
                        })
                    }, t.toggleReaction = function(e, n, i) {
                        if (!t.props.isLoggedIn) return t.props.login(), Promise.reject(new Error("user not logged in"));
                        var a = i;
                        return parseInt(n, 10) < 15 && (a = Object(v.c)(i)), (e === k.a.Add ? t.props.addReaction : t.props.removeReaction)(t.props.parentEntity, n, i, t.props.parent).then(function(i) {
                            var r = {
                                action: e === k.a.Add ? O.a.Create : O.a.Remove,
                                entity: t.props.parentEntity,
                                reactionInt: n,
                                reactionText: a
                            };
                            return Object(w.f)(r, t.context.feedTrackingProps), i
                        })
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this,
                        t = E(this.props.reactions);
                    0 !== t.length && t[0].emote.id === P.emote.id || (t = [P].concat(t));
                    var n = this.props.emoteSelectorAndOverflowPos && this.props.emoteSelectorAndOverflowPos === b.q.Bottom ? b.q.BottomCenter : b.q.TopCenter,
                        a = null;
                    this.state.additionalReactionsVisible && (a = i.createElement(y, {
                        reactions: t.slice(x),
                        addReaction: this.addReaction,
                        removeReaction: this.removeReaction,
                        position: n
                    }));
                    var r = this.props.reactions ? this.props.reactions.reduce(function(e, t) {
                            return e + t.count
                        }, 0) : 0,
                        o = null;
                    this.props.reactions && r > 0 && (o = this.props.reactions.length >= x ? i.createElement("a", {
                        href: "#",
                        onClick: function(n) {
                            return e.toggleAdditional(t, n)
                        },
                        "data-test-selector": "additional-toggle-tracking"
                    }, r) : i.createElement("span", {
                        "data-test-selector": "additional-toggle-tracking",
                        "data-a-target": "pulse-reaction-count"
                    }, r)), this.state.additionalReactionsVisible || (o = i.createElement(b._46, {
                        label: Object(u.d)("Total Reactions", "ReactionList"),
                        direction: b._48.Top,
                        align: b._47.Center
                    }, o)), n = this.props.emoteSelectorAndOverflowPos && this.props.emoteSelectorAndOverflowPos === b.q.Bottom ? b.q.BottomLeft : b.q.TopLeft;
                    var d = null;
                    return this.props.isLoggedIn && (d = i.createElement(b._6, {
                        margin: {
                            right: 1
                        }
                    }, i.createElement(T, {
                        onEmoteSelect: this.addReaction,
                        position: n
                    }, i.createElement(b._19, {
                        asset: b._20.AddReaction,
                        type: b._21.Brand,
                        width: 24,
                        height: 24
                    })))), i.createElement(b._29, {
                        display: b.P.Flex,
                        alignItems: b.c.Center,
                        padding: 1
                    }, i.createElement(S, {
                        reactions: t.slice(0, x),
                        addReaction: this.addReaction,
                        removeReaction: this.removeReaction
                    }), i.createElement(b._6, {
                        margin: {
                            right: 1
                        }
                    }, d), i.createElement(b._0, {
                        position: b._13.Relative
                    }, i.createElement(p.a, {
                        onClickOut: this.hideAdditional
                    }, a, o)))
                }, t.contextTypes = {
                    feedTrackingProps: m.object
                }, t = c.__decorate([Object(g.a)(F, {
                    props: function(e) {
                        return {
                            addReaction: C(k.a.Add, e.ownProps.reactions, e.mutate)
                        }
                    }
                }), Object(g.a)(I, {
                    props: function(e) {
                        return {
                            removeReaction: C(k.a.Remove, e.ownProps.reactions, e.mutate)
                        }
                    }
                }), Object(h.d)("Reactions")], t)
            }(i.Component);
        var L = Object(r.b)(function(e) {
                return {
                    isLoggedIn: Object(l.d)(e)
                }
            }, function(e) {
                return Object(o.b)({
                    login: function() {
                        return Object(s.f)(d.a.FeedReactionToggle)
                    }
                }, e)
            })(D),
            A = Object(h.d)("ClipContent", {
                autoReportInteractive: !0
            })(function(e) {
                var t = e.content,
                    n = t.slug,
                    r = t.reactions;
                return i.createElement(b._6, null, i.createElement(a.a, {
                    embed: e.content
                }), i.createElement(L, {
                    parentEntity: "clip:" + n,
                    reactions: r,
                    parent: e.content
                }))
            }),
            j = n("F8kA"),
            U = n("1jVX");
        n("MTWZ");
        var V = {
            Clip: A,
            Post: Object(h.d)("PostContent", {
                autoReportInteractive: !0
            })(function(e) {
                var t, n = e.content,
                    r = n.author,
                    o = n.body,
                    d = n.createdAt,
                    s = n.embeds,
                    l = n.id,
                    c = n.reactions;
                return i.createElement(b._6, null, i.createElement(b._29, {
                    display: b.P.Flex,
                    alignItems: b.c.Center,
                    padding: 1,
                    borderBottom: !0
                }, i.createElement(b._6, {
                    margin: {
                        right: 1
                    }
                }, i.createElement(j.a, {
                    to: {
                        pathname: "/" + r.login,
                        state: {
                            content: "author_avatar",
                            medium: "pulse_card"
                        }
                    },
                    "data-a-target": "pulse-profile-picture"
                }, i.createElement(b.l, {
                    size: 40,
                    src: r.profileImageURL,
                    alt: "User profile picture"
                }))), i.createElement(b._6, {
                    flexGrow: 1
                }, i.createElement(b._6, {
                    display: b.P.Flex,
                    flexDirection: b.R.Column
                }, i.createElement(j.a, {
                    to: {
                        pathname: "/" + r.login,
                        state: {
                            content: "author_name",
                            medium: "pulse_card"
                        }
                    }
                }, i.createElement(b.O, {
                    fontSize: b.T.Size4,
                    color: b.J.Base,
                    bold: !0
                }, r.displayName)), i.createElement(j.a, {
                    to: "/" + r.login + "/p/" + l,
                    "data-a-target": "pulse-post-link"
                }, i.createElement(b._46, {
                    label: (t = new Date(d), Object(u.d)("{dateTime, date, medium} {dateTime, time, short}", {
                        dateTime: t
                    }, "PostDate")),
                    direction: b._48.Bottom
                }, i.createElement(b.O, {
                    fontSize: b.T.Size6,
                    color: b.J.Alt2
                }, Object(u.h)(new Date(d)))))))), o && i.createElement(b._29, {
                    padding: 1,
                    className: "feed-item-text"
                }, Object(U.a)(o.content.trim(), o.emotes, r.login)), i.createElement(b._6, null, s && s.slice(0, 1).map(function(e, t) {
                    return i.createElement(a.a, {
                        key: t,
                        embed: e
                    })
                })), i.createElement(L, {
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
                    r = t.reactions;
                return i.createElement(b._6, null, i.createElement(a.a, {
                    embed: e.content
                }), i.createElement(L, {
                    parentEntity: "vod:" + n,
                    reactions: r,
                    parent: e.content
                }))
            }),
            Stream: function(e) {
                return i.createElement(a.a, {
                    embed: e.content
                })
            }
        };

        function M(e) {
            return void 0 !== V[e]
        }
        var G = function(e) {
            var t = V[e.content.__typename];
            return i.createElement(t, {
                content: e.content,
                emoteSelectorAndOverflowPos: e.emoteSelectorAndOverflowPos
            })
        };
        n.d(t, "b", function() {
            return M
        }), n.d(t, "a", function() {
            return G
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
    bNhH: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return i
        }), t.c = function(e) {
            return g([], e, !0)
        }, n.d(t, "a", function() {
            return v
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

        function g(e, t, n) {
            switch (t) {
                case i.AnonFront:
                    return r.createElement(s.a, {
                        items: e,
                        isLoading: n,
                        layout: l.c.Horizontal,
                        darkTheme: !0
                    });
                default:
                    return r.createElement(u._29, {
                        className: "featured-broadcasters",
                        background: u.m.Base,
                        elevation: 1
                    }, r.createElement(u._6, {
                        padding: 1
                    }, r.createElement(u.O, {
                        fontSize: u.T.Size5,
                        color: u.J.Alt2
                    }, Object(o.d)("Featured Broadcasters", "FeaturedBroadcastersComponent"))), r.createElement(s.a, {
                        items: e,
                        isLoading: n,
                        layout: l.c.Vertical
                    }))
            }
        }
        var v = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.getRender = function(e) {
                    var n = !(!t.props.data.loading && !t.props.data.error);
                    return g(e, t.props.renderContext, n)
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
                    return Object(c.b)(this.props.item.content.__typename) ? i.createElement(l._29, r.__assign({
                        elevation: 1,
                        margin: {
                            bottom: 1
                        },
                        background: l.m.Base,
                        position: l._13.Relative
                    }, Object(l._56)(this.props), {
                        className: "feed-item"
                    }), i.createElement(l._6, {
                        position: l._13.Absolute,
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
                    })) : i.createElement(l._6, null)
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
        var g = Object(s.d)("Feed")(function(e) {
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
            return e.latencyTracking.reportInteractive(r.length), r.length ? i.createElement(l._6, null, r) : i.createElement(l._6, {
                textAlign: l._39.Center
            }, i.createElement(l.O, {
                color: l.J.Alt2
            }, Object(a.d)("There are no feed posts.", "ChannelFeedComponent")))
        });
        n.d(t, "a", function() {
            return g
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
                messageParts: Object(o.f)(e.body.content, l, e.bitsUsed, t, n, e.authorName)
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
                                "1x": Object(o.e)(e.emoteID, 1),
                                "2x": Object(o.e)(e.emoteID, 2),
                                "4x": Object(o.e)(e.emoteID, 4)
                            }
                        }
                    }
                }
            }), t
        }
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
        var i, a = n("TToO"),
            r = n("6sO2"),
            o = n("/7C1");
        r.o.store.registerReducer("carouselPlayer", function(e, t) {
            switch (void 0 === e && (e = {
                isPlayerInitialized: !1
            }), t.type) {
                case o.b:
                    return i = t.player, a.__assign({}, e, {
                        isPlayerInitialized: !0
                    });
                case o.c:
                    return i = null, a.__assign({}, e, {
                        isPlayerInitialized: !1
                    });
                case o.a:
                    return e.isPlayerInitialized && i && i.pause(), e;
                default:
                    return e
            }
        });
        var d = n("RH2O"),
            s = n("2KeS"),
            l = n("HW6M"),
            c = n("GiK3"),
            m = n("NXs7"),
            u = n("VAT8"),
            p = n("WKwZ"),
            g = n("CSlQ"),
            v = n("Odds"),
            f = (n("TUg1"), "carousel-card-live"),
            k = "carousel-card-vod",
            h = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderIndicator = function() {
                        return t.props.item.content.type === p.b.Stream ? c.createElement(v.F, {
                            status: v.H.Live,
                            size: v.G.Small,
                            "data-test-selector": f
                        }) : c.createElement(v._19, {
                            asset: v._20.GlyphViews,
                            "data-test-selector": k
                        })
                    }, t.itemClick = function() {
                        t.props.itemClick(t.props.item)
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = l({
                        "carousel-nav__item": !0,
                        "carousel-nav__item--active": this.props.itemActive
                    });
                    return c.createElement(v._6, {
                        className: e,
                        margin: {
                            x: .5
                        },
                        padding: {
                            bottom: .5
                        },
                        flexGrow: 1,
                        position: v._13.Relative
                    }, c.createElement(v._46, {
                        label: (this.props.item.isSponsored ? Object(r.d)("Sponsored", "CarouselCardComponent") : "") + " " + this.props.item.broadcaster.displayName,
                        direction: v._48.Top,
                        display: v.P.Block
                    }, c.createElement(v._4, a.__assign({
                        onClick: this.itemClick
                    }, Object(v._56)(this.props)), c.createElement(v.j, {
                        ratio: v.k.Aspect16x9
                    }, c.createElement(v._6, {
                        className: "carousel-nav__meta",
                        alignItems: v.c.Center,
                        attachBottom: !0,
                        margin: {
                            left: .5
                        },
                        zIndex: v._55.Above
                    }, this.renderIndicator(), c.createElement(v._6, {
                        display: v.P.InlineFlex,
                        margin: {
                            left: .5
                        }
                    }, c.createElement(v.O, {
                        color: v.J.Overlay,
                        type: v._43.Span
                    }, Object(r.e)(this.props.item.content.viewersCount)))), c.createElement(v._6, {
                        className: "carousel-nav__img-container"
                    }, c.createElement("img", {
                        className: "carousel-nav__img",
                        "data-content-id": this.props.item.content.id,
                        src: this.props.item.imageURL,
                        alt: this.props.item.broadcaster.displayName,
                        "data-a-target": "carousel-image"
                    }), this.props.item.isSponsored ? c.createElement(v._6, {
                        position: v._13.Absolute,
                        attachRight: !0,
                        attachTop: !0
                    }, c.createElement(v._19, {
                        asset: v._20.Featured,
                        type: v._21.Brand,
                        width: 20,
                        height: 20
                    })) : "")))))
                }, t = a.__decorate([Object(g.d)("CarouselCard")], t)
            }(c.Component),
            b = n("lfvs"),
            _ = n("F8kA"),
            y = n("SZoP"),
            S = n("fc0G");

        function E(e) {
            switch (e.type) {
                case p.b.Stream:
                    return c.createElement(S.c, {
                        channelLogin: e.id,
                        vodID: "",
                        disableTheatreButton: !0,
                        playerTypeOverride: S.b.Frontpage,
                        onInit: e.onPlayerInit,
                        onDestroy: e.onPlayerDestroy
                    });
                case p.b.Vod:
                    return c.createElement(S.c, {
                        channelLogin: "",
                        vodID: e.id,
                        disableTheatreButton: !0,
                        playerTypeOverride: S.b.Frontpage,
                        onInit: e.onPlayerInit,
                        onDestroy: e.onPlayerDestroy,
                        onVideoTimeChange: e.onVideoTimeChange
                    });
                default:
                    return null
            }
        }
        n("i6UE");
        var N = {
                content: "carousel",
                medium: "twitch_home"
            },
            C = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.getContentRender = function() {
                        var e = l("horizontal-carousel-player__details", {
                                "horizontal-carousel-player__details--overlay": t.props.darkTheme
                            }),
                            n = Object(r.d)("playing {game}", {
                                game: c.createElement(_.a, {
                                    to: {
                                        pathname: "/directory/game/" + t.props.item.content.gameName,
                                        state: N
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
                        return c.createElement(v._29, {
                            className: "horizontal-carousel-player",
                            margin: {
                                bottom: 2
                            },
                            display: v.P.Flex,
                            flexDirection: v.R.Row,
                            color: v.J.Alt
                        }, c.createElement(v._6, {
                            flexGrow: 1,
                            flexShrink: 0
                        }, c.createElement(v._6, {
                            className: "horizontal-carousel-player__video",
                            position: v._13.Relative,
                            overflow: v._9.Hidden
                        }, E(i))), c.createElement(v._6, {
                            className: e,
                            flexGrow: 0,
                            padding: 2
                        }, c.createElement(v._6, {
                            display: v.P.Flex,
                            flexWrap: v.S.NoWrap,
                            textAlign: v._39.Left,
                            alignItems: v.c.Center,
                            padding: {
                                bottom: .5
                            }
                        }, c.createElement(v._6, {
                            margin: {
                                right: 1
                            },
                            flexShrink: 0
                        }, c.createElement("span", {
                            onClick: t.promotionCardClick.bind(t, "thumbnail")
                        }, c.createElement(_.a, {
                            to: {
                                pathname: "/" + t.props.item.broadcaster.login,
                                state: N
                            },
                            "data-a-target": "carousel-profile-image"
                        }, c.createElement(v.l, {
                            src: t.props.item.broadcaster.profileImageURL,
                            alt: Object(r.d)("Profile Picture for {login}", {
                                login: t.props.item.broadcaster.login
                            }, "HorizontalCarouselPlayer"),
                            size: 40
                        })))), c.createElement(v._6, {
                            margin: {
                                right: 1
                            },
                            flexGrow: 1
                        }, c.createElement(v.O, {
                            fontSize: v.T.Size4,
                            color: v.J.Base,
                            lineHeight: v._7.Heading,
                            "data-a-target": "carousel-broadcaster-displayname"
                        }, Object(y.a)(t.props.item.broadcaster.login, t.props.item.broadcaster.displayName)), c.createElement(v.O, {
                            fontSize: v.T.Size6,
                            color: v.J.Base,
                            "data-a-target": "carousel-user-playing-message"
                        }, c.createElement("span", {
                            onClick: t.promotionCardClick.bind(t, "game_name")
                        }, n)))), c.createElement(v._6, {
                            margin: {
                                y: 1
                            }
                        }, c.createElement("span", {
                            onClick: t.promotionCardClick.bind(t, "stream_title")
                        }, c.createElement(_.a, {
                            to: t.getLinkForTitle()
                        }, c.createElement(v.O, {
                            type: v._43.Span,
                            "data-a-target": p.a,
                            fontSize: v.T.Size3,
                            lineHeight: v._7.Heading
                        }, t.props.item.title)))), c.createElement(b, {
                            source: t.props.item.description || ""
                        })))
                    }, t.getLinkForTitle = function() {
                        if (t.props.item.content.type === p.b.Stream) return {
                            pathname: "/" + t.props.item.broadcaster.login,
                            state: N
                        };
                        var e = t.state && t.state.videoOffset || 0;
                        return {
                            pathname: "/videos/" + t.props.item.content.id + "?t=" + e,
                            state: N
                        }
                    }, t.getPlaceholderRender = function() {
                        var e = l("horizontal-carousel-player__details", {
                            "horizontal-carousel-player__details--overlay": t.props.darkTheme
                        });
                        return c.createElement(v._6, {
                            display: v.P.Flex,
                            flexWrap: v.S.NoWrap,
                            flexShrink: 0,
                            margin: {
                                bottom: 2
                            }
                        }, c.createElement(v._6, {
                            flexGrow: 1,
                            flexShrink: 1,
                            fullWidth: !0
                        }, c.createElement(v.j, {
                            ratio: v.k.Aspect16x9
                        }, c.createElement(v._12, {
                            "data-test-selector": "carousel-player-placeholder"
                        }))), c.createElement(v._6, {
                            className: l(e),
                            flexGrow: 0,
                            flexShrink: 0,
                            padding: 2
                        }, c.createElement(v._6, {
                            display: v.P.Flex,
                            flexWrap: v.S.NoWrap,
                            textAlign: v._39.Left,
                            alignItems: v.c.Start
                        }, c.createElement(v._6, {
                            margin: {
                                right: 1
                            },
                            flexShrink: 0
                        }, c.createElement(v._12, {
                            width: 40,
                            height: 40
                        })), c.createElement(v._6, {
                            margin: {
                                right: 1
                            },
                            flexGrow: 1
                        }, c.createElement(v.O, null, c.createElement(v._12, {
                            width: 70
                        })), c.createElement(v.O, null, c.createElement(v._12, {
                            width: 70
                        })))), c.createElement(v._6, {
                            margin: {
                                y: 1
                            }
                        }, c.createElement(v.O, null, c.createElement(v._12, {
                            lineCount: 1
                        })), c.createElement(v.O, null, c.createElement(v._12, {
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
                return a.__extends(t, e), t.prototype.componentWillUpdate = function(e) {
                    e.item !== this.props.item && this.props.onPromotionCardView(e.item)
                }, t.prototype.render = function() {
                    return this.props.item ? this.getContentRender() : this.getPlaceholderRender()
                }, t
            }(c.Component),
            O = n("hdYS"),
            w = (n("0v28"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.getContentRender = function() {
                        var e = l("vertical-carousel-player__details", {
                                "vertical-carousel-player__details--overlay": t.props.darkTheme
                            }),
                            n = Object(r.d)("{login} playing {game}", {
                                login: c.createElement("span", {
                                    onClick: t.promotionCardClick.bind(t, "display_name")
                                }, c.createElement(_.a, {
                                    to: {
                                        pathname: "/" + t.props.item.broadcaster.login,
                                        state: N
                                    },
                                    "data-a-target": "carousel-broadcaster-displayname"
                                }, Object(y.a)(t.props.item.broadcaster.login, t.props.item.broadcaster.displayName))),
                                game: c.createElement("span", {
                                    onClick: t.promotionCardClick.bind(t, "game_name")
                                }, c.createElement(_.a, {
                                    to: {
                                        pathname: "/directory/game/" + t.props.item.content.gameName,
                                        state: N
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
                        return c.createElement(v._29, {
                            className: "vertical-carousel-player",
                            padding: {
                                bottom: 1,
                                x: 1
                            },
                            color: v.J.Alt
                        }, c.createElement(v._6, {
                            className: "vertical-carousel-player__video",
                            position: v._13.Relative,
                            overflow: v._9.Hidden
                        }, E(i)), c.createElement(v._6, {
                            className: l(e),
                            display: v.P.Flex,
                            flexWrap: v.S.NoWrap,
                            textAlign: v._39.Left,
                            alignItems: v.c.Center,
                            padding: {
                                y: 1
                            }
                        }, c.createElement(v._6, {
                            margin: {
                                right: 1
                            },
                            flexShrink: 0
                        }, c.createElement("span", {
                            onClick: t.promotionCardClick.bind(t, "thumbnail")
                        }, c.createElement(_.a, {
                            to: "/" + t.props.item.broadcaster.login,
                            "data-a-target": "carousel-avatar-link"
                        }, c.createElement(v.l, {
                            src: t.props.item.broadcaster.profileImageURL,
                            alt: Object(r.d)("Profile Picture for {login}", {
                                login: t.props.item.broadcaster.login
                            }, "VerticalCarouselPlayer"),
                            size: 40
                        })))), c.createElement(v._6, {
                            margin: {
                                right: 1
                            },
                            flexGrow: 1
                        }, c.createElement(v.O, {
                            "data-a-target": p.a,
                            fontSize: v.T.Size5,
                            color: v.J.Base,
                            bold: !0
                        }, t.props.item.title), c.createElement(v.O, {
                            fontSize: v.T.Size6,
                            color: v.J.Base
                        }, n)), c.createElement(v._6, {
                            flexShrink: 0
                        }, t.renderFollowButton())), c.createElement(b, {
                            source: t.props.item.description || ""
                        }))
                    }, t.getPlaceholderRender = function() {
                        return c.createElement(v._6, {
                            padding: {
                                bottom: 1,
                                x: 1
                            }
                        }, c.createElement(v.j, {
                            ratio: v.k.Aspect16x9
                        }, c.createElement(v._12, {
                            "data-test-selector": "carousel-player-placeholder"
                        })), c.createElement(v._6, {
                            display: v.P.Flex,
                            flexWrap: v.S.NoWrap,
                            textAlign: v._39.Left,
                            alignItems: v.c.Center,
                            padding: {
                                y: 1
                            }
                        }, c.createElement(v._6, {
                            margin: {
                                right: 1
                            },
                            flexShrink: 0
                        }, c.createElement(v._12, {
                            width: 40,
                            height: 40
                        })), c.createElement(v._6, {
                            margin: {
                                right: 1
                            },
                            flexGrow: 1
                        }, c.createElement(v.O, null, c.createElement(v._12, {
                            width: 150
                        })), c.createElement(v.O, null, c.createElement(v._12, {
                            width: 100
                        }))), c.createElement(v._6, {
                            flexShrink: 0
                        }, c.createElement(v._12, {
                            width: 70,
                            height: 30
                        }))), c.createElement(v.O, null, c.createElement(v._12, {
                            lineCount: 3
                        })))
                    }, t.promotionCardClick = function(e) {
                        t.props.onPromotionCardClick(t.props.item, e)
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return this.props.item ? this.getContentRender() : this.getPlaceholderRender()
                }, t.prototype.renderFollowButton = function() {
                    return this.props.firstPageLoaded ? c.createElement(O.a, {
                        "data-a-target": "carousel-follow-button",
                        channelLogin: this.props.item.broadcaster.login,
                        followUIType: O.b.IconAndText,
                        unfollowUIType: O.b.IconOnly,
                        showLoadingPlaceholder: !0
                    }) : c.createElement(v._12, {
                        width: 70,
                        height: 30
                    })
                }, t
            }(c.Component));
        var F = Object(d.b)(function(e) {
                return {
                    firstPageLoaded: e.session.firstPageLoaded
                }
            })(w),
            I = n("vH/s");

        function R(e) {
            r.n.track(I.SpadeEventType.FrontPageCarouselNavButtonClick, {
                direction: e
            })
        }
        n("0OPT");
        var T = 6,
            P = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        activeItem: t.props.items[0],
                        startingIndex: 0
                    }, t.displayEventFired = !1, t.renderLeftButton = function() {
                        if (t.props.items.length > T) {
                            var e = t.state.startingIndex > 0;
                            return c.createElement(v._6, {
                                display: v.P.Flex,
                                alignItems: v.c.Stretch
                            }, c.createElement(v.v, {
                                ariaLabel: Object(r.d)("Page Left", "CarouselPlayerComponent"),
                                icon: v._20.AngleLeft,
                                onClick: t.handlePageLeft,
                                "data-test-selector": p.d,
                                disabled: !e
                            }))
                        }
                        return null
                    }, t.renderRightButton = function() {
                        if (t.props.items.length > T) {
                            var e = t.props.items.length > t.state.startingIndex + T;
                            return c.createElement(v._6, {
                                display: v.P.Flex,
                                alignItems: v.c.Stretch
                            }, c.createElement(v.v, {
                                ariaLabel: Object(r.d)("Page Right", "CarouselPlayerComponent"),
                                icon: v._20.AngleRight,
                                onClick: t.handlePageRight,
                                "data-test-selector": p.e,
                                disabled: !e
                            }))
                        }
                        return null
                    }, t.getCardsRender = function() {
                        var e, n;
                        if (t.state.activeItem) return t.displayEventFired || (e = t.props.items, n = {}, e.forEach(function(e, t) {
                            n["carousel_slot_" + t + "_channel"] = e.broadcaster.login, n["carousel_slot_" + t + "_priority"] = e.priorityLevel, n["carousel_slot_" + t + "_game"] = e.content.gameName, n["carousel_slot_" + t + "_ccu"] = e.content.viewersCount, n["carousel_slot_" + t + "_type"] = e.content.subType
                        }), r.n.track(I.SpadeEventType.FrontPageCarouselDisplay, n), t.displayEventFired = !0), t.props.items.slice(t.state.startingIndex, t.state.startingIndex + T).map(function(e, n) {
                            return c.createElement(h, {
                                key: e.content.id,
                                item: e,
                                itemClick: t.selectContent,
                                itemActive: e.content.id === t.state.activeItem.content.id,
                                "data-a-target": "carousel-card-" + n
                            })
                        });
                        for (var i = [], a = 0; a < T; a++) i.push(c.createElement(v._6, {
                            key: a,
                            margin: {
                                x: .5
                            },
                            flexGrow: 1
                        }, c.createElement(v.j, {
                            ratio: v.k.Aspect16x9
                        }, c.createElement(v._12, null)), c.createElement(v._6, {
                            margin: {
                                top: .5
                            }
                        }, c.createElement(v._12, {
                            height: 4
                        }))));
                        return i
                    }, t.getLayoutRender = function() {
                        var e = {
                            darkTheme: t.props.darkTheme || !1,
                            item: t.state.activeItem,
                            onPromotionCardClick: t.trackPromotionClick,
                            onPromotionCardView: t.trackPromotionView,
                            onPlayerInit: t.registerCarousel,
                            onPlayerDestroy: t.unregisterCarousel
                        };
                        switch (t.props.layout) {
                            case p.c.Vertical:
                                return c.createElement(F, a.__assign({}, e));
                            default:
                                return c.createElement(C, a.__assign({}, e))
                        }
                    }, t.registerCarousel = function(e) {
                        t.props.registerCarousel && t.props.registerCarousel(e)
                    }, t.unregisterCarousel = function() {
                        t.props.unregisterCarousel && t.props.unregisterCarousel()
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
                        n = i, r.n.track(I.SpadeEventType.FrontPageCarouselClick, n)
                    }, t.trackPromotionClick = function(e, n) {
                        var i = e.broadcaster,
                            o = e.content,
                            d = e.isScheduled;
                        ! function(e, t) {
                            var n = a.__assign({
                                clicked_element: t
                            }, e);
                            r.n.track(I.SpadeEventType.FrontPageCarouselPromotionCardClick, n)
                        }({
                            broadcast_type: o.subType,
                            carousel_index: t.props.items.indexOf(t.state.activeItem),
                            channel: i.displayName,
                            game: o.gameName,
                            promotion_was_scheduled: d,
                            views: o.viewersCount
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
                        n = i, r.n.track(I.SpadeEventType.FrontPageCarouselPromotionCardView, n)
                    }, t.handlePageRight = function() {
                        var e = t.props.items.length - T;
                        e !== t.state.startingIndex && (R("next"), t.setState({
                            startingIndex: e
                        }))
                    }, t.handlePageLeft = function() {
                        t.state.startingIndex > 0 && (R("prev"), t.setState({
                            startingIndex: 0
                        }))
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillUpdate = function(e) {
                    !this.state.activeItem && e.items.length > 0 && this.setState({
                        activeItem: e.items[0]
                    })
                }, t.prototype.render = function() {
                    var e;
                    return this.props.darkTheme && (e = Object(u.c)(m.a.Dark)), c.createElement(v._6, {
                        className: l("carousel-player", e)
                    }, this.getLayoutRender(), c.createElement(v._29, {
                        background: v.m.Alt
                    }, c.createElement(v._6, {
                        display: v.P.Flex,
                        flexWrap: v.S.NoWrap,
                        padding: {
                            x: .5,
                            y: 1
                        }
                    }, this.renderLeftButton(), this.getCardsRender(), this.renderRightButton())))
                }, t = a.__decorate([Object(g.d)("CarouselPlayer")], t)
            }(c.Component);
        var x = Object(d.b)(null, function(e) {
            return Object(s.b)({
                registerCarousel: o.e,
                unregisterCarousel: o.f
            }, e)
        })(P);
        n.d(t, "a", function() {
            return x
        })
    },
    i6UE: function(e, t) {},
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
            g = n("rCmJ"),
            v = n("C/8M"),
            f = n("rzuL"),
            k = n("CSlQ"),
            h = n("mw/a"),
            b = n("Odds"),
            _ = n("CX2/"),
            y = (n("BLXQ"), "delete"),
            S = "delete-confirm",
            E = "report",
            N = "Post";

        function C(e) {
            return e.__typename === N
        }
        var O = function(e) {
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
                                action: v.a.Remove,
                                postID: t
                            };
                            Object(f.d)(e, n.context.feedTrackingProps)
                        })
                    }
                }, n.getDeleteConfirmView = function() {
                    return u.createElement(b._6, {
                        padding: 1
                    }, u.createElement(b._4, {
                        onClick: n.deletePost
                    }, u.createElement(b._6, {
                        padding: {
                            y: .5,
                            x: 1
                        },
                        className: S
                    }, Object(p.d)("Yes", "FeedItemOptions"))), u.createElement(b._4, {
                        onClick: n.showOptionView
                    }, u.createElement(b._6, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(p.d)("No", "FeedItemOptions"))))
                }, n.getDeleteEl = function() {
                    var e = null;
                    return n.state.userCanDelete && n.props.deletePost && (e = u.createElement(b._4, {
                        onClick: n.showDeleteConfirmView
                    }, u.createElement(b._6, {
                        className: y,
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(p.d)("Delete", "FeedItemOptions")))), e
                }, n.getOptionView = function() {
                    return n.state.loadingPermissions ? null : u.createElement(b._6, {
                        padding: 1
                    }, u.createElement(b._4, {
                        onClick: n.showReportModal,
                        "data-a-target": "pulse-post-report"
                    }, u.createElement(b._6, {
                        padding: {
                            y: .5,
                            x: 1
                        },
                        className: E
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
                                        query: _,
                                        variables: {
                                            id: "post:" + e[e.length - 1]
                                        }
                                    })];
                                case 1:
                                    return t = i.sent(), n = t.data.feedItemContent, this.setState({
                                        loadingPermissions: !1,
                                        permissionQueryData: t,
                                        userCanDelete: n && n.self.permissions.canDelete
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
                return (this.state.showDeleteConfirmView || this.state.showOptionView && !this.state.loadingPermissions) && (e = u.createElement(b.p, {
                    direction: b.q.Left,
                    size: b.r.Small,
                    show: !0
                }, this.state.showOptionView && this.getOptionView(), this.state.showDeleteConfirmView && this.getDeleteConfirmView())), u.createElement(b._6, {
                    position: b._13.Relative
                }, u.createElement(g.a, {
                    onClickOut: this.closeViews
                }, e, u.createElement("div", {
                    className: this.state.showOptionView || this.state.showDeleteConfirmView ? "button-icon--show" : "button-icon"
                }, u.createElement(b.v, {
                    icon: b._20.Gear,
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
                            targetUserID: t.broadcaster.id,
                            contentID: t.id
                        };
                    case N:
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
                            targetUserID: a.owner.id,
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
        })(O);
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
                e[e.Message = 0] = "Message", e[e.Moderation = 1] = "Moderation", e[e.ModerationAction = 2] = "ModerationAction", e[e.TargetedModerationAction = 3] = "TargetedModerationAction", e[e.AutoMod = 4] = "AutoMod", e[e.Connected = 5] = "Connected", e[e.Disconnected = 6] = "Disconnected", e[e.Reconnect = 7] = "Reconnect", e[e.Hosting = 8] = "Hosting", e[e.Unhost = 9] = "Unhost", e[e.Hosted = 10] = "Hosted", e[e.Subscription = 11] = "Subscription", e[e.Resubscription = 12] = "Resubscription", e[e.SubGift = 13] = "SubGift", e[e.Clear = 14] = "Clear", e[e.SubscriberOnlyMode = 15] = "SubscriberOnlyMode", e[e.FollowerOnlyMode = 16] = "FollowerOnlyMode", e[e.SlowMode = 17] = "SlowMode", e[e.EmoteOnlyMode = 18] = "EmoteOnlyMode", e[e.RoomMods = 19] = "RoomMods", e[e.RoomState = 20] = "RoomState", e[e.Raid = 21] = "Raid", e[e.Unraid = 22] = "Unraid", e[e.Ritual = 23] = "Ritual", e[e.Notice = 24] = "Notice", e[e.Info = 25] = "Info", e[e.BadgesUpdated = 26] = "BadgesUpdated", e[e.Purchase = 27] = "Purchase", e[e.BitsCharity = 28] = "BitsCharity", e[e.CrateGift = 29] = "CrateGift"
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
                        return {
                            card_author_id: e.item.content.broadcaster.id,
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
                        return {
                            card_author_id: e.item.content.owner.id,
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
            g = function(e, t) {
                var n = {
                    action: e.action,
                    entity: "post:" + e.postID,
                    post_id: e.postID,
                    post_content: e.postContent,
                    composer_location: e.composerLocation
                };
                Object(r.c)(i.SpadeEventType.FeedPost, n, t)
            },
            v = function(e) {
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
            return g
        }), n.d(t, "e", function() {
            return v
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
    }
});
//# sourceMappingURL=pages.front-d4560d2c3b2cba37618c704d116d9d53.js.map