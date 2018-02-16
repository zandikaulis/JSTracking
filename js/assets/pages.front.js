webpackJsonp([49], {
    "/+to": function(e, t, n) {
        "use strict";
        var i = n("RH2O"),
            r = n("TToO"),
            a = n("U7vG"),
            o = n("6sO2"),
            s = n("Us7i"),
            d = n("QG7y"),
            l = "#google_ads_iframe_\\/3576121\\/twitch\\/directory_0",
            c = "#google_ads_iframe_\\/3576121\\/twitch\\/directory_1",
            m = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.logger = o.i.withCategory("ad-slot"), n.createSlot = function(e) {
                        return r.__awaiter(n, void 0, void 0, function() {
                            var t;
                            return r.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        if (this.state.slotCreated) return [2];
                                        this.setState({
                                            slotCreated: !0
                                        }), n.label = 1;
                                    case 1:
                                        return n.trys.push([1, 3, , 4]), [4, s.a.createSlot(e.slotID, e.adUnit, e.adSize, e.targeting, e.autoEnable)];
                                    case 2:
                                        return t = n.sent(), Object(d.h)(t.getSlotElementId()), this.setState({
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
                            if (n.props.slotID === d.b.anonFront.takeover) return void(document.body.classList.contains("takeover") && n.setState({
                                shouldDisplay: !0
                            }, function() {
                                return n.slotRendered(e.slot)
                            }));
                            if (n.props.slotID === d.b.directory.banner) {
                                return void((i = n.slotRef.querySelector(l)) && 1 !== i.clientWidth && n.setState({
                                    shouldDisplay: !0
                                }, function() {
                                    return n.slotRendered(e.slot)
                                }))
                            }
                            if (n.props.slotID === d.b.directory.rectangle) {
                                var i;
                                return void((i = n.slotRef.querySelector(c)) && 1 !== i.clientWidth && n.setState({
                                    shouldDisplay: !0
                                }, function() {
                                    return n.slotRendered(e.slot)
                                }))
                            }
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
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    d.g.addListener(d.f, this.onSlotRenderEnd), this.props.trackingSet ? (this.logger.debug("Tracking is set. Creating slot (componentDidMount)", this.props.slotID), this.createSlot(this.props)) : this.logger.debug("Tracking is not set. Skipping slot creation (componentDidMount)", this.props.slotID)
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.state.slotCreated || (e.trackingSet && !this.props.trackingSet ? (this.logger.debug("Tracking is set. Creating slot (componentWillReceiveProps)", this.props.slotID), this.createSlot(e)) : this.logger.debug("Tracking is not set. Skipping slot creation (componentWillReceiveProps)", this.props.slotID))
                }, t.prototype.componentWillUnmount = function() {
                    this.logger.debug("Destroying Slot (componentWillUnmount)", this.props.slotID), d.g.removeListener(d.f, this.onSlotRenderEnd), this.state.slot && s.a.destroySlot(this.state.slot)
                }, t.prototype.shouldComponentUpdate = function(e, t) {
                    return t.shouldDisplay !== this.state.shouldDisplay
                }, t.prototype.render = function() {
                    var e = r.__assign({}, this.props.injectStyles);
                    return this.state.shouldDisplay || (e.display = "none"), a.createElement("div", {
                        style: e,
                        id: this.props.slotID,
                        ref: this.setRef
                    })
                }, t
            }(a.Component),
            u = Object(i.b)(function(e) {
                return {
                    trackingSet: e.ads.trackingSet
                }
            })(m);
        n.d(t, "a", function() {
            return u
        })
    },
    "/0cZ": function(e, t, n) {
        function i(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !a[t] && (a[t] = !0, !0)
            })
        }
        var r = {
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
        r.loc.source = {
            body: '#import "twilight/features/feed/models/feed-fragment.gql"\n#import "twilight/features/feed/models/user-fragment.gql"\nquery Pulse($limit: Int $cursor: Cursor) {\ncurrentUser {\n...feedUser\nisConnectedToTwitter\npulseFeed {\nitems(first: $limit after: $cursor) {\n...feed\n}\n}\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var a = {};
        r.definitions = r.definitions.concat(i(n("VMA7").definitions)), r.definitions = r.definitions.concat(i(n("Lq4d").definitions)), e.exports = r
    },
    "/7C1": function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return i
        }), n.d(t, "c", function() {
            return r
        }), n.d(t, "a", function() {
            return a
        }), t.e = function(e) {
            return {
                type: i,
                player: e
            }
        }, t.f = function() {
            return {
                type: r
            }
        }, t.d = function() {
            return {
                type: a
            }
        };
        var i = "carouselPlayer.CAROUSEL_REGISTERED",
            r = "carouselPlayer.CAROUSEL_UNREGISTERED",
            a = "carouselPlayer.CAROUSEL_PAUSED"
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
            for (var m, u = [], p = e.split(/\n/), f = function(e, f) {
                    if (e > 0 && (f += p[e - 1].length + 1), c && "" === p[e]) return u.push(i.createElement(d._35, {
                        key: e
                    }, "\n")), m = f, "continue";
                    var g = t.map(function(e) {
                            return function(e, t) {
                                return {
                                    emoteID: e.emoteID,
                                    from: e.from - t,
                                    to: e.to - t,
                                    setID: e.setID
                                }
                            }(e, f)
                        }).filter(function(t) {
                            return ! function(e, t) {
                                return e.from < 0 || e.from >= t || e.to < 0 || e.to >= t
                            }(t, p[e].length)
                        }),
                        v = Object(o.f)(p[e], Object(s.b)(g), 0, {}, !1, n);
                    u.push(i.createElement(d._35, {
                        key: e
                    }, function(e) {
                        for (var t = [], n = 0; n < e.length; n++) {
                            var o = e[n];
                            switch (o.type) {
                                case a.a.ClipLink:
                                    t.push(i.createElement("a", {
                                        key: n,
                                        href: o.content.url,
                                        target: "_blank"
                                    }, o.content.url));
                                    break;
                                case a.a.VideoLink:
                                case a.a.Link:
                                    o.content.url.match(l) ? t.push(i.createElement(r.a, {
                                        key: n,
                                        to: o.content.url.replace(l, "")
                                    }, o.content.displayText)) : t.push(i.createElement("a", {
                                        key: n,
                                        href: o.content.url,
                                        target: "_blank",
                                        rel: "noopener noreferrer"
                                    }, o.content.displayText));
                                    break;
                                case a.a.Mention:
                                    t.push(i.createElement(r.a, {
                                        key: n,
                                        to: "/" + o.content.recipient
                                    }, o.content.recipient));
                                    break;
                                case a.a.Emote:
                                    o.content.images.themed || t.push(i.createElement("img", {
                                        key: n,
                                        src: o.content.images.sources["1x"],
                                        alt: o.content.alt
                                    }));
                                    break;
                                case a.a.Text:
                                    t.push(i.createElement("span", {
                                        key: n
                                    }, o.content))
                            }
                        }
                        return t
                    }(v))), m = f
                }, g = 0, v = 0; g < p.length; g++) f(g, v), v = m;
            return u
        };
        var i = n("U7vG"),
            r = (n.n(i), n("F8kA")),
            a = n("mwvJ"),
            o = n("l21v"),
            s = n("dQj3"),
            d = n("Odds"),
            l = /^(https?:\/\/)?(www.)?twitch\.tv/
    },
    "24qG": function(e, t) {},
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
    "4mYF": function(e, t, n) {
        "use strict";
        var i, r = n("TToO"),
            a = n("U7vG"),
            o = n("6sO2"),
            s = n("mi6k"),
            d = n("CSlQ"),
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
                            r = e.lengthSeconds,
                            d = e.thumbnailURL,
                            m = e.type,
                            u = e.viewCount,
                            p = r && r > 0 ? Object(s.a)(r) : "";
                        return a.createElement("a", {
                            href: "#",
                            onClick: t.handleClick,
                            "data-test-selector": c
                        }, a.createElement(l.j, {
                            ratio: l.k.Aspect16x9
                        }, a.createElement(l._2, null, a.createElement(l.W, {
                            fullWidth: !0,
                            fullHeight: !0,
                            position: l._9.Absolute
                        }, a.createElement("img", {
                            src: d
                        })), a.createElement(l._2, {
                            className: "embed-card__overlay",
                            position: l._9.Absolute,
                            attachLeft: !0,
                            attachTop: !0,
                            fullWidth: !0,
                            fullHeight: !0
                        }, a.createElement(l._2, {
                            className: "embed-card__play",
                            display: l.N.Flex,
                            justifyContent: l._1.Center,
                            position: l._9.Absolute,
                            attachLeft: !0,
                            attachTop: !0,
                            fullWidth: !0,
                            fullHeight: !0
                        }, a.createElement(l._15, {
                            asset: l._16.Play,
                            width: 50,
                            height: 50
                        })), a.createElement(l._2, {
                            position: l._9.Absolute,
                            padding: 1,
                            attachBottom: !0,
                            attachLeft: !0
                        }, n && a.createElement(l._35, null, Object(o.c)(new Date(n), "medium")), a.createElement(l._2, null, m === i.Stream && a.createElement(l._2, {
                            display: l.N.Inline,
                            margin: {
                                right: .5
                            }
                        }, a.createElement(l.E, {
                            status: l.G.Live
                        })), u && a.createElement("span", null, t.getFormattedViewCount(u, m)))), a.createElement(l._2, {
                            position: l._9.Absolute,
                            padding: 1,
                            attachBottom: !0,
                            attachRight: !0
                        }, p && a.createElement(l._2, null, a.createElement(l._35, null, p)))), a.createElement(l._25, {
                            position: l._9.Absolute,
                            attachTop: !0,
                            attachLeft: !0,
                            margin: 1,
                            fontSize: l.R.Size5
                        }, m === i.Stream && a.createElement(l._6, {
                            label: Object(o.d)("Live", "EmbedOverlayPill"),
                            type: l._7.Live
                        }), m === i.Video && a.createElement(l._6, {
                            label: Object(o.d)("Video", "EmbedOverlayPill"),
                            type: l._7.Overlay
                        }), m === i.Clip && a.createElement(l._6, {
                            label: Object(o.d)("Clip", "EmbedOverlayPill"),
                            type: l._7.Overlay
                        })))))
                    }, t.handleClick = function(e) {
                        e.preventDefault(), t.setState({
                            showOverlay: !1
                        }), t.props.onClick && t.props.onClick()
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return this.state.showOverlay ? this.getOverlayComponent() : a.createElement(l.j, {
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
            }(a.Component),
            u = Object(d.d)("EmbedOverlay")(m);
        n.d(t, !1, function() {
            return c
        }), n.d(t, "b", function() {
            return i
        }), n.d(t, "a", function() {
            return u
        })
    },
    "65au": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Current_User"
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
                                    value: "hasPrime"
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
                end: 50
            }
        };
        n.loc.source = {
            body: "query Current_User {\ncurrentUser {\nid\nhasPrime\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "6Agf": function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var i;
        ! function(e) {
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
                    var r = e.content;
                    return {
                        type: o.d,
                        id: r.broadcaster.id + ":" + t
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
            return s
        });
        var i, r = n("TToO"),
            a = n("6sO2"),
            o = n("TWJL");
        ! function(e) {
            e.Create = "create", e.Remove = "remove"
        }(i || (i = {}));
        var s = function(e, t, n) {
            a.m.track(e, r.__assign({}, t, n))
        }
    },
    "7L7x": function(e, t) {},
    "86JD": function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            r = n("U7vG"),
            a = n("6sO2"),
            o = n("iOr9"),
            s = n("bZTi"),
            d = n("o8Pq"),
            l = n("bNhH"),
            c = n("Wjt1"),
            m = function(e) {
                var t = {
                    name: "TWILIGHT_VIDEO_FEATURO_EN",
                    assignments: {
                        fallback: function() {
                            return s.a.wrap(function() {
                                return new Promise(function(e) {
                                    e()
                                }).then(n.bind(null, "o8Pq"))
                            }, "FeaturedBroadcasters")(i.__assign({}, e))
                        },
                        mixed: function() {
                            return s.a.wrap(function() {
                                return new Promise(function(e) {
                                    e()
                                }).then(n.bind(null, "Wjt1"))
                            }, "FeaturedContent")(i.__assign({}, e, {
                                shouldMixContent: !0
                            }))
                        },
                        last: function() {
                            return s.a.wrap(function() {
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
                return "en" === a.n.intl.getLanguageCode() ? r.createElement(o.a, i.__assign({}, t)) : r.createElement(d.FeaturedBroadcasters, {
                    renderContext: e.renderContext
                })
            };
        n.d(t, "a", function() {
            return c.FeaturedBroadcastersRenderContext
        }), n.d(t, "b", function() {
            return m
        })
    },
    "8PKe": function(e, t, n) {
        "use strict";
        var i = n("RH2O"),
            r = n("TToO"),
            a = n("OAwv"),
            o = n("U7vG"),
            s = n("6sO2"),
            d = n("+Znq"),
            l = n("7vx8"),
            c = n("S1vB"),
            m = n("ZVME"),
            u = n("CSlQ"),
            p = n("Odds"),
            f = (n("f8UT"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return o.createElement(p._2, null, o.createElement(p._25, {
                        className: "prime-offer-header",
                        borderBottom: !0,
                        background: p.m.Alt2,
                        padding: {
                            x: 1,
                            y: .5
                        }
                    }, o.createElement(p._35, {
                        bold: !0,
                        type: p._40.H6
                    }, Object(s.d)("Free with Prime", "PrimeOfferHeader"))), this.getNumOfUnseenOffersDisplay())
                }, t.prototype.getNumOfUnseenOffersDisplay = function() {
                    var e = this.props.numOfUnseenOffers;
                    if (e) return o.createElement(p._25, {
                        className: "prime-offer__new-offer-header",
                        borderBottom: !0,
                        background: p.m.Alt2,
                        padding: {
                            x: 1,
                            y: .5
                        }
                    }, o.createElement(p._2, {
                        fullWidth: !0,
                        display: p.N.Flex,
                        alignItems: p.c.Center
                    }, o.createElement(p._2, {
                        flexGrow: 1
                    }, o.createElement(p._35, {
                        bold: !0,
                        type: p._40.H6
                    }, Object(s.d)("New Prime Loot", "PrimeOfferHeader"))), o.createElement(p._2, {
                        className: "prime-offer__new-offer-header-count",
                        textAlign: p._36.Center
                    }, o.createElement(p._25, {
                        className: "prime-offer__new-offer-header-count__text",
                        background: p.m.Base,
                        color: p.I.Base,
                        display: p.N.Flex,
                        alignItems: p.c.Center,
                        justifyContent: p._1.Center
                    }, o.createElement(p._35, null, e.toString())))))
                }, t = r.__decorate([Object(u.d)("PrimeOfferHeader")], t)
            }(o.Component)),
            g = n("zCIC"),
            v = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = Object(s.d)("You'll get characters, vehicles, skins, and boosts for games like {hearthstone} and {smite}, plus surprises like a rotating selection of indie games.", {
                        hearthstone: o.createElement(p._35, {
                            italic: !0,
                            type: p._40.Span
                        }, Object(s.d)("Hearthstone", "PrimeEmpty")),
                        smite: o.createElement(p._35, {
                            italic: !0,
                            type: p._40.Span
                        }, Object(s.d)("Smite", "PrimeEmpty"))
                    }, "PrimeEmpty");
                    return o.createElement(p._2, {
                        className: "prime-empty",
                        margin: 2
                    }, o.createElement(p._2, {
                        textAlign: p._36.Center,
                        margin: 2
                    }, o.createElement("img", {
                        className: "prime-empty__image",
                        src: "https://m.media-amazon.com/images/G/01/sm/landing/Trunk_w_Star_transparent._V530838660_.png",
                        alt: Object(s.d)("Prime Treasure Chest", "PrimeEmpty")
                    })), o.createElement(p._35, {
                        type: p._40.P,
                        bold: !0
                    }, Object(s.d)("Free in-game loot every month, plus surprises", "PrimeEmpty")), o.createElement("div", null, e))
                }, t = r.__decorate([Object(u.d)("PrimeEmpty")], t)
            }(o.Component),
            h = n("lfvs"),
            k = n("oIkB"),
            b = n("R0Kh"),
            _ = (n("w/8h"), n("sq7i")),
            y = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return o.createElement(p._2, {
                        className: "prime-claim-button"
                    }, this.getClaimButton())
                }, t.prototype.getClaimButton = function() {
                    var e = this.props,
                        t = this.getButtonText(),
                        n = o.createElement(p.u, {
                            fullWidth: !0,
                            state: this.props.claiming ? p.y.Loading : p.y.Default,
                            disabled: this.props.claiming,
                            onClick: this.props.claimCallback,
                            "data-a-target": "prime-claim-button"
                        }, t);
                    return e.offerType === b.a.EXTERNAL_OFFER ? o.createElement(p.u, {
                        fullWidth: !0,
                        linkTo: e.offerLinkUri,
                        targetBlank: !0
                    }, t) : o.createElement(p._2, {
                        position: p._9.Relative
                    }, n)
                }, t.prototype.getButtonText = function() {
                    return this.props.offerType === b.a.CLAIM_CODE ? Object(s.d)("Get Code", "PrimeClaimButton") : this.props.offerType === b.a.EXTERNAL_OFFER ? Object(s.d)("Learn More", "PrimeClaimButton") : Object(s.d)("Claim Offer", "PrimeClaimButton")
                }, t = r.__decorate([Object(l.a)(_), Object(u.d)("PrimeClaimButton")], t)
            }(o.Component),
            E = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.toggleShowDescription = function() {
                        t.setState({
                            showDescription: !t.state.showDescription
                        })
                    }, t.state = {
                        showDescription: !1
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return o.createElement(p._2, {
                        className: "prime-claim-description",
                        margin: {
                            top: 1
                        }
                    }, o.createElement(p.u, {
                        fullWidth: !0,
                        type: p.z.Hollow,
                        onClick: this.toggleShowDescription
                    }, this.getDescriptionButtonText()), this.getDescriptionBlock())
                }, t.prototype.getDescriptionButtonText = function() {
                    return this.state.showDescription ? Object(s.d)("Close Info", "PrimeClaimDescription") : Object(s.d)("More Info", "PrimeClaimDescription")
                }, t.prototype.getDescriptionBlock = function() {
                    var e = null;
                    return this.state.showDescription && (e = o.createElement(p._25, {
                        className: "prime-claim-description__body",
                        background: p.m.Alt2,
                        border: !0
                    }, o.createElement(p._2, {
                        margin: {
                            bottom: 2
                        },
                        padding: 1
                    }, o.createElement(h, {
                        source: this.props.description || ""
                    })))), e
                }, t = r.__decorate([Object(u.d)("PrimeClaimDescription")], t)
            }(o.Component),
            S = n("Hs3O"),
            N = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.getLink = function() {
                    return this.props.externalUri ? this.props.externalUri : Object(S.d)(S.c, window.location.pathname.substring(1))
                }, t.prototype.render = function() {
                    return o.createElement(p._2, {
                        className: "prime-upsell-button",
                        margin: {
                            top: 2,
                            bottom: 1
                        }
                    }, o.createElement(p.u, {
                        fullWidth: !0,
                        linkTo: this.getLink(),
                        targetBlank: !0
                    }, Object(s.d)("Start Your Free Trial", "PrimeUpsellButton")))
                }, t = r.__decorate([Object(u.d)("PrimeUpsellButton")], t)
            }(o.Component),
            O = n("e2wA"),
            C = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return o.createElement(p._2, {
                        className: "prime-claim",
                        margin: {
                            top: 2,
                            bottom: 1
                        }
                    }, this.getCallToAction(), this.getClaimDescriptionSection())
                }, t.prototype.getCallToAction = function() {
                    var e = this.props.data;
                    return !e.loading && !e.error && e.currentUser && e.currentUser.hasPrime ? o.createElement(y, {
                        offerType: this.props.offerType,
                        offerId: this.props.offerId,
                        claimCallback: this.props.claimCallback,
                        claiming: this.props.claiming,
                        offerLinkUri: this.props.externalUri
                    }) : o.createElement(N, {
                        externalUri: this.props.externalUri
                    })
                }, t.prototype.getClaimDescriptionSection = function() {
                    return this.props.offerType === b.a.EXTERNAL_OFFER ? null : o.createElement(E, {
                        description: this.props.offerDescription
                    })
                }, t = r.__decorate([Object(l.a)(O), Object(u.d)("PrimeInstructions")], t)
            }(o.Component),
            w = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return o.createElement(p._25, {
                        background: p.m.Alt2,
                        display: p.N.Flex,
                        justifyContent: p._1.Center,
                        padding: {
                            y: 1
                        },
                        margin: {
                            bottom: 1
                        },
                        textAlign: p._36.Center
                    }, o.createElement(p._35, {
                        type: p._40.H4,
                        align: p._50.Middle
                    }, o.createElement(p._25, {
                        padding: 1,
                        display: p.N.InlineFlex,
                        flexGrow: 1,
                        flexWrap: p.Q.NoWrap,
                        alignItems: p.c.Center,
                        fontSize: this.props.fontSize ? this.props.fontSize : p.R.Size5,
                        "data-a-target": "prime-error-glitch"
                    }, o.createElement(p._2, {
                        margin: {
                            right: 1
                        },
                        display: p.N.InlineFlex,
                        flexGrow: 1,
                        flexWrap: p.Q.NoWrap,
                        alignItems: p.c.Center
                    }, o.createElement(p._15, {
                        asset: p._16.DeadGlitch,
                        type: p._17.Alert,
                        width: 20,
                        height: 20
                    })), Object(s.d)("Something has gone wrong. Please try again later.", "PrimeError"))))
                }, t = r.__decorate([Object(u.d)("PrimeError")], t)
            }(o.Component),
            F = (n("nFc2"), function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.setRef = function(e) {
                        t.setState({
                            clipboardInput: e
                        })
                    }, t.copy = function() {
                        var e;
                        try {
                            t.state.clipboardInput && t.state.clipboardInput.select(), e = document.execCommand("copy")
                        } catch (t) {
                            e = !1
                        }
                        return t.setState({
                            copied: e
                        }), e
                    }, t.state = {
                        copied: !1,
                        clipboardInput: void 0
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.state.copied ? Object(s.d)("copied", "CopyButton") : Object(s.d)("copy", "CopyButton");
                    return o.createElement(p._2, {
                        className: "copy-button copy-btn",
                        display: p.N.Flex,
                        "data-test-target": "copy-button"
                    }, o.createElement(p.W, {
                        className: "copy-button__btn"
                    }, o.createElement(p.u, {
                        onClick: this.copy,
                        type: this.state.copied ? p.z.Success : p.z.Default
                    }, e)), o.createElement("input", {
                        className: "copy-button__copy-input",
                        ref: this.setRef,
                        value: this.props.clipboardText,
                        readOnly: !0
                    }))
                }, t = r.__decorate([Object(u.d)("CopyButton")], t)
            }(o.Component)),
            I = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onChange = function(e) {
                        t.setState({
                            value: e.currentTarget.value,
                            copied: !1
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillMount = function() {
                    this.props.initialText && this.setState({
                        value: this.props.initialText,
                        copied: !1
                    })
                }, t.prototype.render = function() {
                    return this.state && this.state.value ? o.createElement(p._2, {
                        className: "copyable-item",
                        display: p.N.Flex,
                        flexGrow: 1
                    }, o.createElement(p._2, {
                        flexGrow: 1
                    }, o.createElement(p.Y, {
                        type: p.Z.Text,
                        onChange: this.onChange,
                        value: this.state.value,
                        disabled: this.props.disabled,
                        readOnly: this.props.readOnly
                    })), o.createElement(p._2, null, o.createElement(F, {
                        clipboardText: this.state.value
                    }))) : null
                }, t = r.__decorate([Object(u.d)("CopyableItem")], t)
            }(o.Component),
            R = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return o.createElement(p._25, {
                        className: "prime-claim-instructions",
                        background: p.m.Alt2,
                        border: !0,
                        padding: 1,
                        fontSize: p.R.Size6
                    }, o.createElement(p._49, null, o.createElement(h, {
                        source: this.props.claimInstructions || "",
                        escapeHtml: !0,
                        renderers: {
                            Link: function(e) {
                                return o.createElement("a", {
                                    href: e.href,
                                    target: "_blank",
                                    rel: "nofollow noopener noreferrer"
                                }, e.children)
                            }
                        }
                    })))
                }, t = r.__decorate([Object(u.d)("PrimeClaimInstructions")], t)
            }(o.Component),
            T = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return o.createElement(p._2, {
                        className: "prime-redeem",
                        margin: {
                            top: 1
                        }
                    }, this.getCodeOrConfirmation(), this.getPrimeClaimInstructions())
                }, t.prototype.getCodeOrConfirmation = function() {
                    return this.props.code && this.props.deliveryMethod === b.a.CLAIM_CODE ? o.createElement(p._2, null, o.createElement(I, {
                        initialText: this.props.code,
                        readOnly: !0,
                        textCenter: !0
                    })) : o.createElement(p._25, {
                        background: p.m.Alt2,
                        display: p.N.Flex,
                        justifyContent: p._1.Center,
                        padding: {
                            y: 1
                        },
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(p._35, {
                        type: p._40.H4,
                        align: p._50.Middle
                    }, o.createElement(p._2, {
                        padding: 1,
                        display: p.N.InlineFlex,
                        flexGrow: 1,
                        flexWrap: p.Q.NoWrap,
                        alignItems: p.c.Center,
                        "data-a-target": "prime-redeem-check"
                    }, o.createElement(p._2, {
                        margin: {
                            right: 1
                        },
                        display: p.N.InlineFlex,
                        flexGrow: 1,
                        flexWrap: p.Q.NoWrap,
                        alignItems: p.c.Center
                    }, o.createElement(p._15, {
                        asset: p._16.Check,
                        type: p._17.Success,
                        width: 20,
                        height: 20
                    })), Object(s.d)("Added To Your Twitch Account", "PrimeRedeem"))))
                }, t.prototype.getPrimeClaimInstructions = function() {
                    if (this.props.claimInstructions) return o.createElement(R, {
                        claimInstructions: this.props.claimInstructions || ""
                    })
                }, t = r.__decorate([Object(u.d)("PrimeRedeem")], t)
            }(o.Component),
            D = n("el3o"),
            P = (n("v+rJ"), n("rM0q")),
            x = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        claimed: !1,
                        claiming: !1,
                        error: !1,
                        claimData: ""
                    }, t.renderRedeemUpsellOrClaimSection = function(e) {
                        var n = e.content || {},
                            i = e.self || {
                                claimData: ""
                            },
                            r = (t.props.data || {}).currentUser || {};
                        if (t.state.error) return o.createElement(w, {
                            fontSize: p.R.Size6
                        });
                        if ((t.isCurrentOfferClaimed(e) || t.state.claimed) && r && r.hasPrime) {
                            var a = t.state.claimData || i.claimData;
                            return o.createElement(T, {
                                claimInstructions: e.claimInstructions,
                                code: a,
                                deliveryMethod: e.deliveryMethod
                            })
                        }
                        return o.createElement(C, {
                            offerId: e.id,
                            offerDescription: e.description || "",
                            offerType: e.deliveryMethod || "",
                            externalUri: n.externalURL || "",
                            claimCallback: t.claimOffer,
                            claiming: t.state.claiming
                        })
                    }, t.claimOffer = function(e) {
                        e.nativeEvent.stopImmediatePropagation(), t.setState({
                            claiming: !0
                        });
                        var n = t.props.data;
                        if (!n.loading && !n.error && n.currentUser.id) {
                            var i = n.currentUser.id,
                                r = t.props.offer,
                                a = Object(k.a)({
                                    offerID: r.id
                                });
                            t.props.claimPrimeOffer(a).then(function(e) {
                                var n = ((e.data || {}).claimPrimeOffer || {}).self || {};
                                n && r && t.setState({
                                    claimData: n.claimData
                                }), t.markAsClaimedInLocalStorage(i)
                            }).catch(function() {
                                t.setState({
                                    claiming: !1,
                                    claimed: !1,
                                    error: !0
                                })
                            })
                        }
                    }, t.markAsClaimedInLocalStorage = function(e) {
                        var n = t.props.offer,
                            i = b.b(n.id, e),
                            r = b.c();
                        r.push(i), b.f(r), t.setState({
                            claiming: !1,
                            claimed: !0,
                            error: !1
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.offer,
                        t = this.props.isLast || !1;
                    if (e) {
                        var n = e.content || {},
                            i = n.game || {},
                            r = n.categories || [];
                        return o.createElement(p._25, {
                            className: "prime-offer",
                            alignItems: p.c.Center,
                            borderBottom: !t,
                            padding: {
                                x: 2,
                                y: 1
                            }
                        }, o.createElement(p._2, {
                            className: "prime-offer__title",
                            padding: {
                                y: .5
                            }
                        }, o.createElement(h, {
                            className: "prime-offer__title__markdown",
                            containerTagName: "h4",
                            source: e.title || ""
                        })), o.createElement("img", {
                            src: e.imageURL
                        }), o.createElement(p._2, {
                            className: "prime-offer__description",
                            padding: {
                                top: .5
                            }
                        }, o.createElement(p._35, {
                            type: p._40.P
                        }, i.name, " ", r[0])), o.createElement(p._2, {
                            className: "prime-offer__publisher"
                        }, o.createElement(p._35, {
                            type: p._40.P,
                            color: p.I.Alt2,
                            fontSize: p.R.Size7
                        }, n.publisher)), this.renderRedeemUpsellOrClaimSection(e))
                    }
                    return null
                }, t.prototype.isCurrentOfferClaimed = function(e) {
                    return (e.self || {
                        hasEntitlement: !1
                    }).hasEntitlement || this.isCurrentOfferClaimedInLocalStorage()
                }, t.prototype.isCurrentOfferClaimedInLocalStorage = function() {
                    var e = this.props.data,
                        t = this.props.offer;
                    if (!e.loading && !e.error && e.currentUser) {
                        var n = e.currentUser.id,
                            i = b.b(t.id, n);
                        return b.c().includes(i)
                    }
                }, t = r.__decorate([Object(l.a)(P, {
                    name: "data"
                }), Object(l.a)(D, {
                    name: "claimPrimeOffer"
                }), Object(u.d)("PrimeOffer")], t)
            }(o.Component),
            L = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return o.createElement(p._25, {
                        className: "prime-offer-placeholder",
                        alignItems: p.c.Center,
                        borderBottom: !0,
                        padding: {
                            x: 2,
                            y: 1
                        }
                    }, o.createElement(p._2, {
                        className: "prime-offer-placeholder__title",
                        padding: {
                            y: .5
                        }
                    }, o.createElement(p._8, {
                        height: 20
                    })), o.createElement(p._8, {
                        height: 160
                    }), o.createElement(p._2, {
                        className: "prime-offer-placeholder__description",
                        padding: {
                            y: .5
                        }
                    }, o.createElement(p._8, {
                        height: 20,
                        width: 160
                    })), o.createElement(p._2, {
                        className: "prime-offer-placeholder__publisher"
                    }, o.createElement(p._8, {
                        height: 20,
                        width: 80
                    })), o.createElement(p._2, {
                        className: "prime-offer-placeholder__claim",
                        margin: {
                            top: 2,
                            bottom: 1
                        }
                    }, o.createElement(p._8, {
                        height: 40
                    })))
                }, t = r.__decorate([Object(u.d)("PrimeOfferPlaceholder")], t)
            }(o.Component),
            U = (n("7L7x"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return o.createElement(p._25, {
                        "data-test-target": "prime-offers-upsell",
                        "data-a-target": "prime-offers-upsell",
                        className: "prime-offers-upsell",
                        alignItems: p.c.Center,
                        padding: {
                            x: 2,
                            y: 1
                        },
                        borderBottom: !0
                    }, o.createElement(p._35, {
                        type: p._40.H4
                    }, Object(s.d)("Claim With Twitch Prime", "PrimeUpsell")), o.createElement(p._2, {
                        className: "prime-upsell__logo-container",
                        fullWidth: !0,
                        margin: {
                            y: 2
                        },
                        textAlign: p._36.Center
                    }, o.createElement(p._15, {
                        asset: p._16.LogoTwitchPrime,
                        width: 330,
                        height: 150,
                        type: p._17.Brand
                    })), o.createElement(p._35, {
                        type: p._40.P
                    }, Object(s.d)("Get free game loot like this every month plus surprises, ad-free viewing, and loads more with Twitch Prime.", "PrimeUpsell")), o.createElement(N, null))
                }, t = r.__decorate([Object(u.d)("PrimeUpsell")], t)
            }(o.Component)),
            A = n("eY4D"),
            j = (n("DgR+"), n("65au")),
            V = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.shouldShowPlaceholders = function() {
                        var e = t.props.offersData,
                            n = e.primeOffers,
                            i = void 0 === n || null === n;
                        return e.loading || !e.error && i && t.props.showByDefault
                    }, t.renderOfferPlaceholders = function() {
                        for (var e = [], t = 0; t < 3; ++t) e.push(o.createElement(L, {
                            key: t
                        }));
                        return e
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidUpdate = function() {
                    var e = this.props.offersData;
                    e && e.primeOffers && this.props.latencyTracking.reportInteractive(e.primeOffers.length)
                }, t.prototype.render = function() {
                    return o.createElement(g.b, {
                        className: "prime-offer-listing"
                    }, o.createElement(p._2, {
                        className: "prime-offer-listing__content",
                        alignItems: p.c.Center,
                        padding: {
                            top: 1,
                            bottom: 2,
                            left: 1,
                            right: 1
                        }
                    }, this.renderUpsell(), this.renderOfferExperience()))
                }, t.prototype.renderUpsell = function() {
                    var e = this.props.userData;
                    if (!e.loading && !e.error && !this.currentUserHasPrime(e)) return o.createElement(U, null)
                }, t.prototype.renderOfferExperience = function() {
                    var e = this.props.offersData;
                    if (this.shouldShowPlaceholders()) return this.renderOfferPlaceholders();
                    if (!e.error && e.primeOffers && e.primeOffers.length) {
                        var t = this.getSortedOffers(),
                            n = t[t.length - 1];
                        return t.map(function(e) {
                            return o.createElement(x, {
                                key: e.id,
                                offer: e,
                                isLast: n.id === e.id
                            })
                        })
                    }
                    return o.createElement(v, null)
                }, t.prototype.getSortedOffers = function() {
                    var e = this.props.offersData.primeOffers,
                        t = this.getUserId();
                    if (t) {
                        var n = Object(b.c)(),
                            i = e.filter(function(e) {
                                return !n.includes(Object(b.b)(e.id, t))
                            }).sort(b.i),
                            r = e.filter(function(e) {
                                return !i.includes(e)
                            }).sort(b.i);
                        return i.concat(r)
                    }
                    return e.slice().sort(b.i)
                }, t.prototype.getUserId = function() {
                    var e = this.props.userData;
                    return !e.loading && !e.error && e.currentUser && e.currentUser.id ? e.currentUser.id : ""
                }, t.prototype.currentUserHasPrime = function(e) {
                    var t = e.currentUser;
                    return t && t.hasPrime
                }, t = r.__decorate([Object(l.a)(A, {
                    name: "offersData",
                    options: function() {
                        return {
                            variables: {
                                dateOverride: Object(b.d)()
                            }
                        }
                    }
                }), Object(l.a)(j, {
                    name: "userData"
                }), Object(u.d)("PrimeOfferList")], t)
            }(o.Component),
            M = n("tTbW"),
            G = (n("9856"), n("wjhu")),
            B = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        numOfUnseenOffers: 0
                    }, t.showOffersByDefault = function() {
                        var e = location.search,
                            n = a.parse(e);
                        return n && !!n.expandoffers || t.props.openByDefault
                    }, t.onToggleMenu = function(e) {
                        t.offersLoadedEvent = t.registerOffersLoadedEvent();
                        var n = t.props.offersData;
                        !n || n.loading || n.error || t.props.latencyTracking.reportCustomEvent(t.offersLoadedEvent), t.seeOffers(), e && t.setState({
                            numOfUnseenOffers: 0
                        })
                    }, t.registerOffersLoadedEvent = function() {
                        return t.props.latencyTracking.registerCustomEvent({
                            benchmark: 1e3,
                            group: m.a.TwitchPrime,
                            key: m.b.PrimeOfferLoaded,
                            label: m.c.Loaded,
                            start: m.d.Registration
                        })
                    }, t.getUnseenOffers = function(e) {
                        var n = e.offersData;
                        if (n && !n.loading && !n.error) {
                            var i = n.primeOffers || [],
                                r = b.e();
                            t.setState({
                                numOfUnseenOffers: i.filter(function(e) {
                                    return !(r.includes(e.id) || t.offerIsClaimed(e))
                                }).length
                            })
                        }
                    }, t.offerIsClaimed = function(e) {
                        return e.self && e.self.hasEntitlement
                    }, t.seeOffers = function() {
                        var e = t.props.offersData;
                        if (e && !e.loading && !e.error) {
                            var n = (e.primeOffers || []).map(function(e) {
                                return "" + e.id
                            });
                            b.g(n)
                        }
                    }, t.renderOfferList = function() {
                        var e = t.props.offersData,
                            n = t.showOffersByDefault() || !1,
                            i = e && !e.loading && !e.error;
                        return t.offersLoadedEvent && i && t.props.latencyTracking.reportCustomEvent(t.offersLoadedEvent), i || n ? o.createElement(p._2, {
                            "data-a-target": "offers-list",
                            className: "prime-offers__list"
                        }, o.createElement(f, {
                            numOfUnseenOffers: t.state.numOfUnseenOffers
                        }), o.createElement(V, {
                            showByDefault: n
                        })) : null
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.getUnseenOffers(this.props)
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.getUnseenOffers(e)
                }, t.prototype.render = function() {
                    var e = this.props.userData && this.props.userData.requestInfo && Object(c.a)(this.props.userData.requestInfo.countryCode),
                        t = this.props.userData && this.props.userData.currentUser && this.props.userData.currentUser.hasPrime;
                    if (!e && !t) return null;
                    var n = {
                        align: p._44.Center,
                        direction: p._45.Bottom,
                        label: ""
                    };
                    return this.state.numOfUnseenOffers > 0 ? n.label = Object(s.d)("New Prime Loot", "PrimeOffers") : n.label = Object(s.d)("Prime Loot", "PrimeOffers"), o.createElement(p._2, {
                        className: "prime-offers",
                        position: p._9.Relative
                    }, o.createElement(d.a, {
                        onToggle: this.onToggleMenu,
                        openByDefault: this.showOffersByDefault(),
                        tooltipProps: n
                    }, o.createElement(p.v, {
                        ariaLabel: Object(s.d)("Prime offers", "PrimeOffers"),
                        overlay: !0,
                        size: p.x.Large,
                        icon: p._16.Crown,
                        "data-a-target": "prime-offers-icon",
                        "data-target": "prime-offers-icon"
                    }), o.createElement(p.p, {
                        direction: p.q.BottomRight,
                        size: p.r.Large,
                        offsetX: "9px"
                    }, this.renderOfferList())), this.renderUnseenOffersDisplay())
                }, t.prototype.renderUnseenOffersDisplay = function() {
                    var e = this.state.numOfUnseenOffers;
                    if (e) return o.createElement(p._2, {
                        className: "prime-offers__pill",
                        position: p._9.Absolute
                    }, o.createElement(p.e, {
                        type: p.i.BounceIn,
                        duration: p.g.Medium,
                        timing: p.h.EaseIn,
                        enabled: e > 0
                    }, o.createElement(p._6, {
                        label: e.toString(),
                        type: p._7.Notification
                    })))
                }, t = r.__decorate([Object(l.a)(M, {
                    name: "offersData",
                    skip: function(e) {
                        return !e.firstPageLoaded
                    },
                    options: function() {
                        return {
                            variables: {
                                dateOverride: Object(b.d)()
                            }
                        }
                    }
                }), Object(l.a)(G, {
                    name: "userData"
                }), Object(u.d)("PrimeOffers", {
                    autoReportInteractive: !0
                })], t)
            }(o.Component),
            q = Object(i.b)(function(e) {
                return {
                    firstPageLoaded: !!e.session.firstPageLoaded
                }
            })(B),
            z = (n("ukY1"), n("F1v6")),
            W = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.data.currentUser && this.props.data.currentUser.hasPrime,
                        t = this.props.data.requestInfo && this.props.data.requestInfo.countryCode;
                    if (!Object(b.h)(e, t)) return null;
                    if (this.props.data.loading) return null;
                    var n = Object(S.d)(S.a, ""),
                        i = Object(s.d)("Twitch Prime", "BlueBar"),
                        r = o.createElement("span", null, Object(s.d)("Free loot every month, plus exclusives and surprises, ad-free viewing, and loads more.", "BlueBar")),
                        a = Object(S.d)(S.a, ""),
                        d = Object(s.d)("Start Your Free Trial", "BlueBar");
                    if (!this.props.data.loading && !this.props.data.error) {
                        var l = this.props.data;
                        l && l.primePromotions && l.primePromotions.forEach(function(e) {
                            switch (e.id) {
                                case "twitch.prime.bluebar.left1":
                                    n = e.externalURL, i = e.text;
                                    break;
                                case "twitch.prime.bluebar.center1":
                                    r = o.createElement(h, {
                                        source: e.text,
                                        renderers: {
                                            Link: function(e) {
                                                return o.createElement("a", {
                                                    href: e.href,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer"
                                                }, e.children)
                                            }
                                        }
                                    });
                                    break;
                                case "twitch.prime.bluebar.right1":
                                    a = e.externalURL, d = e.text
                            }
                        })
                    }
                    return o.createElement(p._25, {
                        color: p.I.Base,
                        className: "blue-bar",
                        position: p._9.Relative,
                        fullWidth: !0
                    }, o.createElement(p._2, {
                        className: "blue-bar__bar",
                        display: p.N.Flex,
                        alignItems: p.c.Center,
                        justifyContent: p._1.Between,
                        flexWrap: p.Q.NoWrap,
                        margin: "auto",
                        padding: {
                            x: 2,
                            y: .5
                        }
                    }, o.createElement(p._2, {
                        display: p.N.InlineFlex,
                        alignItems: p.c.Center,
                        padding: {
                            right: .5
                        }
                    }, o.createElement(p._2, {
                        className: "blue-bar__logo",
                        display: p.N.InlineFlex,
                        margin: {
                            right: .5
                        },
                        flexShrink: 0
                    }, o.createElement(p._15, {
                        asset: p._16.Crown,
                        width: 20,
                        height: 13
                    })), o.createElement(p._35, {
                        bold: !0,
                        type: p._40.Span,
                        noWrap: !0,
                        fontSize: p.R.Size6
                    }, o.createElement(p.W, {
                        padding: {
                            x: 1
                        }
                    }, o.createElement("a", {
                        className: "blue-bar__link",
                        href: n,
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, i))), o.createElement(p._35, {
                        className: "blue-bar__headline",
                        type: p._40.Span,
                        fontSize: p.R.Size6
                    }, r)), o.createElement(p._2, {
                        display: p.N.InlineFlex,
                        flexShrink: 0
                    }, o.createElement(p._35, {
                        bold: !0,
                        type: p._40.Span,
                        noWrap: !0,
                        fontSize: p.R.Size6,
                        color: p.I.Base
                    }, o.createElement("a", {
                        className: "blue-bar__link",
                        href: a,
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, d)))))
                }, t = r.__decorate([Object(l.a)(z, {
                    options: function() {
                        return {
                            variables: {
                                stringIds: ["twitch.prime.bluebar.left1", "twitch.prime.bluebar.center1", "twitch.prime.bluebar.right1"],
                                dateOverride: Object(b.d)()
                            }
                        }
                    }
                }), Object(u.d)("BlueBarComponent")], t)
            }(o.Component);
        n.d(t, "b", function() {
            return q
        }), n.d(t, "a", function() {
            return W
        }), n.d(t, "c", function() {
            return b.d
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
    9856: function(e, t) {},
    BLXQ: function(e, t) {},
    "C/8M": function(e, t, n) {
        "use strict";

        function i() {
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
                    return o.__extends(n, t), n.prototype.componentDidMount = function() {
                        if (this.context.feedImpressionSettings && this.context.feedImpressionSettings.autoReport) return this.triggerImpressionEvent();
                        var e = this.context.registerReceiver;
                        e ? this.unregister = e(this) : l.i.warn("<FeedItem /> initialized missing a <ScrollableArea /> provider")
                    }, n.prototype.componentWillUnmount = function() {
                        this.unregister && this.unregister()
                    }, n.prototype.render = function() {
                        var t = {
                            impressionTracking: {
                                onImpression: this.setImpressionEvent
                            }
                        };
                        return d.createElement("div", {
                            ref: this.setRef
                        }, d.createElement(e, o.__assign({}, this.props, t)))
                    }, n.prototype.checkVisible = function(e) {
                        return o.__awaiter(this, void 0, void 0, function() {
                            var t;
                            return o.__generator(this, function(n) {
                                return this.element ? (t = this.element.getBoundingClientRect(), t.top < e.bottom && t.bottom > e.top && !this.state.impressionEventFired && this.triggerImpressionEvent(), [2]) : [2]
                            })
                        })
                    }, n.contextTypes = {
                        registerReceiver: s.func,
                        feedTrackingProps: s.object,
                        feedImpressionSettings: s.object
                    }, n
                }(d.Component)
            }
        }

        function r(e) {
            return function(t) {
                return function(n) {
                    function i() {
                        var t = null !== n && n.apply(this, arguments) || this;
                        return t.getChildContext = function() {
                            var n = e(t.props);
                            return {
                                feedTrackingProps: o.__assign({}, t.context.feedTrackingProps, n)
                            }
                        }, t
                    }
                    return o.__extends(i, n), i.prototype.render = function() {
                        var e = {
                            feedTrackingProps: this.getChildContext().feedTrackingProps
                        };
                        return d.createElement(t, o.__assign({}, this.props, e))
                    }, i.contextTypes = {
                        feedTrackingProps: s.object
                    }, i.childContextTypes = {
                        feedTrackingProps: s.object
                    }, i
                }(d.Component)
            }
        }
        var a = n("6hXa"),
            o = n("TToO"),
            s = n("KSGD"),
            d = n("U7vG"),
            l = n("6sO2");
        n.d(t, "a", function() {
            return a.a
        }), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, "b", function() {
            return a.b
        }), n.d(t, "c", function() {
            return i
        }), n.d(t, "d", function() {
            return r
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
    DBTH: function(e, t, n) {
        "use strict";
        n.d(t, "g", function() {
            return r
        }), n.d(t, "f", function() {
            return a
        }), n.d(t, "h", function() {
            return o
        }), n.d(t, "j", function() {
            return s
        }), n.d(t, "i", function() {
            return d
        }), n.d(t, "l", function() {
            return l
        }), n.d(t, "k", function() {
            return c
        }), n.d(t, "d", function() {
            return m
        }), n.d(t, "b", function() {
            return f
        }), n.d(t, "a", function() {
            return g
        }), n.d(t, "c", function() {
            return v
        }), n.d(t, "e", function() {
            return k
        }), n.d(t, "q", function() {
            return b
        }), n.d(t, "o", function() {
            return _
        }), n.d(t, "p", function() {
            return y
        }), n.d(t, "n", function() {
            return E
        }), n.d(t, "m", function() {
            return S
        }), n.d(t, "r", function() {
            return N
        });
        var i, r = "TWILIGHT_WEB_ONBOARDING_CATEGORIES",
            a = "TWILIGHT_WEB_ONBOARDING_CATEGORIES_ANON_FRONT_PAGE",
            o = "TWILIGHT_WEB_ONBOARDING_CHANNEL_RANKING",
            s = "TWILIGHT_WEB_ONBOARDING_FOLLOWING_FOR_YOU",
            d = "TWILIGHT_WEB_ONBOARDING",
            l = "TWILIGHT_WEB_ONBOARDING_RANDOMIZED_GAMES",
            c = "TWILIGHT_WEB_ONBOARDING_FOLLOW_CATEGORIES";
        (i || (i = {})).NoSkip = "no_skip";
        var m;
        ! function(e) {
            e.First = "first", e.Last = "last"
        }(m || (m = {}));
        var u, p = new Set([m.First.toString(), m.Last.toString()]);
        (u || (u = {})).Yes = "yes";
        var f;
        (f || (f = {})).Yes = "yes";
        var g;
        ! function(e) {
            e.Games = "games", e.Streams = "streams"
        }(g || (g = {}));
        var v, h = new Set([g.Games.toString(), g.Streams.toString()]);
        (v || (v = {})).ENABLED = "enabled";
        var k;
        (k || (k = {})).ENABLED = "enabled";
        var b = function(e) {
                return e === i.NoSkip
            },
            _ = function(e) {
                return !!e && p.has(e)
            },
            y = function(e, t) {
                return b(e) && _(t)
            },
            E = function(e, t, n) {
                return b(e) && _(t) && n === u.Yes
            },
            S = function(e) {
                return !!e && h.has(e)
            },
            N = function(e) {
                return e.getTime() >= O().getTime()
            },
            O = function() {
                return new Date((new Date).getTime() - 12096e5)
            }
    },
    "DgR+": function(e, t) {},
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
        var r = {};
        i.definitions = i.definitions.concat(function(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !r[t] && (r[t] = !0, !0)
            })
        }(n("S0OZ").definitions)), e.exports = i
    },
    EImC: function(e, t, n) {
        "use strict";
        var i = n("U7vG"),
            r = n("Odds"),
            a = function() {
                return i.createElement(r._25, {
                    elevation: 1,
                    margin: {
                        bottom: 2
                    },
                    background: r.m.Base
                }, i.createElement(r._25, {
                    display: r.N.Flex,
                    flexWrap: r.Q.NoWrap,
                    padding: 1,
                    background: r.m.Base,
                    borderBottom: !0
                }, i.createElement(r._2, {
                    margin: {
                        right: 1
                    }
                }, i.createElement(r._35, null, i.createElement(r._8, {
                    width: 40,
                    height: 40
                }))), i.createElement(r._2, {
                    flexGrow: 1
                }, i.createElement(r._35, {
                    fontSize: r.R.Size6
                }, i.createElement(r._8, {
                    width: 100
                })), i.createElement(r._35, {
                    fontSize: r.R.Size7
                }, i.createElement(r._8, {
                    width: 120
                })))), i.createElement(r._2, {
                    margin: {
                        bottom: .5
                    },
                    padding: 1
                }, i.createElement(r._35, {
                    fontSize: r.R.Size6
                }, i.createElement(r._8, null)), i.createElement(r._35, {
                    fontSize: r.R.Size6
                }, i.createElement(r._8, null)), i.createElement(r._35, {
                    fontSize: r.R.Size6
                }, i.createElement(r._8, {
                    width: 280
                }))))
            },
            o = function() {
                return i.createElement(r._25, {
                    elevation: 1,
                    margin: {
                        bottom: 2
                    },
                    background: r.m.Base
                }, i.createElement(r._2, {
                    margin: {
                        bottom: .5
                    }
                }, i.createElement(r.j, {
                    ratio: r.k.Aspect16x9
                }, i.createElement(r._8, null))), i.createElement(r._25, {
                    display: r.N.Flex,
                    flexWrap: r.Q.NoWrap,
                    padding: 1,
                    background: r.m.Base
                }, i.createElement(r._2, {
                    margin: {
                        right: 1
                    }
                }, i.createElement(r._35, null, i.createElement(r._8, {
                    width: 40,
                    height: 40
                }))), i.createElement(r._2, {
                    flexGrow: 1
                }, i.createElement(r._35, {
                    fontSize: r.R.Size6
                }, i.createElement(r._8, {
                    width: 100
                })), i.createElement(r._35, {
                    fontSize: r.R.Size6
                }, i.createElement(r._8, {
                    width: 140
                })), i.createElement(r._35, {
                    fontSize: r.R.Size6
                }, i.createElement(r._8, {
                    width: 120
                })))))
            };
        n.d(t, "b", function() {
            return a
        }), n.d(t, "a", function() {
            return o
        })
    },
    F1v6: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Prime_BlueBar_CurrentUser"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "stringIds"
                        }
                    },
                    type: {
                        kind: "ListType",
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
                    }
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "dateOverride"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Time"
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
                                    value: "hasPrime"
                                },
                                arguments: [],
                                directives: []
                            }]
                        }
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "primePromotions"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "ids"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "stringIds"
                                }
                            }
                        }, {
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "dateOverride"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "dateOverride"
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
                                    value: "text"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "externalURL"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "isExternalLink"
                                },
                                arguments: [],
                                directives: []
                            }]
                        }
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "requestInfo"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "countryCode"
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
                end: 231
            }
        };
        n.loc.source = {
            body: "query Prime_BlueBar_CurrentUser($stringIds: [ID!] $dateOverride: Time) {\ncurrentUser {\nid\nhasPrime\n}\nprimePromotions (ids: $stringIds dateOverride: $dateOverride) {\nid\ntext\nexternalURL\nisExternalLink\n}\nrequestInfo {\ncountryCode\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    HgOP: function(e, t) {},
    Hs3O: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return r
        }), n.d(t, "a", function() {
            return a
        }), n.d(t, "c", function() {
            return o
        }), t.d = function(e, t) {
            var n = i.b.get(s, "https://twitch.amazon.com/prime"),
                r = "";
            try {
                r = btoa(t)
            } catch (e) {
                d.error(e, "Could not decode location pathname substring for redirect")
            }
            return r ? n + "?ref_=" + e + "&redirectRoute=" + r : n + "?ref_=" + e
        };
        var i = n("6sO2"),
            r = "sm_tw_tup_ntp_t_all",
            a = "sm_tw_thp_blue_t_all",
            o = "sm_w_tup_ntp_t_c",
            s = "prime_landing_page_base_url",
            d = i.i.withCategory("PrimeUtilsLogger")
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
        var r = {};
        i.definitions = i.definitions.concat(function(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !r[t] && (r[t] = !0, !0)
            })
        }(n("Lq4d").definitions)), e.exports = i
    },
    IOEW: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n("TToO"),
            r = n("U7vG"),
            a = n("6sO2"),
            o = n("zCIC"),
            s = n("j7/Y"),
            d = n("w9tK"),
            l = n("Us7i"),
            c = n("vH/s"),
            m = n("/+to"),
            u = n("QG7y"),
            p = n("86JD"),
            f = n("CSlQ"),
            g = n("RH2O"),
            v = n("lbHh"),
            h = n("7vx8"),
            k = n("DBTH"),
            b = n("S4HN"),
            _ = n("yWCw"),
            y = n("F8kA"),
            E = n("NY9D"),
            S = n("Odds"),
            N = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = this.props,
                        t = r.createElement(S._2, {
                            padding: 1
                        }, r.createElement(S._35, {
                            fontSize: S.R.Size5,
                            color: S.I.Alt2
                        }, Object(a.d)("{title}", {
                            title: e.title
                        }, "GameListComponent"))),
                        n = r.createElement(S._25, {
                            background: S.m.Alt,
                            padding: 1
                        }, r.createElement(S.W, {
                            fullWidth: !0,
                            fullHeight: !0,
                            display: S.N.Block
                        }, r.createElement(y.a, i.__assign({
                            to: e.viewAllLinkTo
                        }, Object(S._53)(e)), Object(a.d)("View All", "GameListComponent")))),
                        o = [];
                    if (e.loading)
                        for (var s = 0; s < e.limit; s++) o.push(r.createElement(S._2, {
                            key: s,
                            margin: {
                                bottom: 1
                            }
                        }, r.createElement(S.j, {
                            ratio: S.k.Aspect3x4
                        }, r.createElement(S._8, null)), r.createElement(S._2, null, r.createElement(S._35, null, r.createElement(S._8, {
                            width: 100
                        })), r.createElement(S._35, null, r.createElement(S._8, {
                            width: 70
                        })))));
                    else e.items && e.items.length > 0 && (o = e.items.map(function(e, t) {
                        if (!e) return null;
                        var n = e.id,
                            i = e.name,
                            o = e.viewersCount,
                            s = e.boxArtURL;
                        return r.createElement(S._2, {
                            key: n,
                            margin: {
                                bottom: 1
                            }
                        }, r.createElement(S.t, {
                            linkTo: Object(E.c)(i),
                            title: i,
                            alt: i + " cover image",
                            src: s,
                            info: Object(a.d)("{viewerCount,number} viewers", {
                                viewerCount: o
                            }, "GameListComponent"),
                            "data-a-target": "card-" + t,
                            "data-a-id": "card-" + i.replace(/ /g, "")
                        }))
                    }));
                    return r.createElement(S._25, {
                        elevation: 1,
                        background: S.m.Base,
                        display: S.N.Hide,
                        breakpointMedium: {
                            display: S.N.Block
                        }
                    }, t, r.createElement(S._2, {
                        padding: {
                            x: 1
                        }
                    }, r.createElement(S._46, {
                        gutterSize: S._48.ExtraSmall,
                        childWidth: S._47.ExtraSmall,
                        placeholderItems: 18
                    }, o)), n)
                }, t = i.__decorate([Object(f.d)("GameList", {
                    autoReportInteractive: !0
                })], t)
            }(r.Component),
            O = n("OkeX"),
            C = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.postRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.postRender()
                }, t.prototype.render = function() {
                    var e = [];
                    return this.props.data.error ? r.createElement(_.a, {
                        message: Object(a.d)("Followed Games are unavailable at this time.", "FollowedGamesCompoment")
                    }) : (this.props.data.loading || (e = this.props.data.currentUser.followedGames && this.props.data.currentUser.followedGames.nodes || []), this.props.data.loading || e && e.length > 0 ? r.createElement(N, {
                        "data-a-target": "view-all-followed-games-link",
                        items: e,
                        limit: 18,
                        loading: this.props.data.loading,
                        title: Object(a.d)("Followed Games", "FollowedGamesCompoment"),
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
                }), Object(f.d)("FollowedGames")], t)
            }(r.Component),
            w = n("Y4Yc"),
            F = "twilight_onboarding",
            I = "twilight_onboarding-prompt_dismissed",
            R = {
                domain: window.location.hostname.endsWith(".twitch.tv") ? ".twitch.tv" : void 0,
                secure: "https:" === window.location.protocol
            },
            T = i.__assign({}, R, {
                expires: 365
            }),
            D = 3,
            P = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isOnboardingDismissedCookieSet: void 0 !== v.get(I)
                    }, t.handleAutoOnboardingRedirect = function() {
                        void 0 === v.get(F) && Object(k.r)(new Date(t.props.data.currentUser.createdAt)) && (v.set(F, !0, T), t.redirectToOnboarding(b.b.NewSignup))
                    }, t.startOnboarding = function() {
                        t.redirectToOnboarding(b.b.HomepageCTA)
                    }, t.redirectToOnboarding = function(e) {
                        Object(b.g)({
                            source: e
                        }), window.location.assign("/hi" + location.search)
                    }, t.dismissOnboardingPrompt = function() {
                        Object(b.f)(), v.set(I, !0, T), t.setState({
                            isOnboardingDismissedCookieSet: !0
                        })
                    }, t.followedGamesForUserHasLoaded = function() {
                        return t.props.data && !t.props.data.loading && !t.props.data.error && t.props.data.currentUser && t.props.data.currentUser.followedGames
                    }, t.shouldSeeOnboarding = function() {
                        return !t.state.isOnboardingDismissedCookieSet && t.followedGamesForUserHasLoaded() && t.state.inOnboardingExperiment && t.props.data.currentUser.followedGames.nodes.length < D && Object(k.r)(new Date(t.props.data.currentUser.createdAt))
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    return i.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return i.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, a.n.experiments.getAssignment(k.i)];
                                case 1:
                                    return e = t.sent(), this.setState({
                                        inOnboardingExperiment: Object(k.q)(e)
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.componentDidUpdate = function() {
                    this.shouldSeeOnboarding() && this.handleAutoOnboardingRedirect()
                }, t.prototype.render = function() {
                    return this.shouldSeeOnboarding() ? r.createElement(S._25, {
                        "data-test-selector": "onboarding-prompt",
                        background: S.m.Base,
                        display: S.N.Flex,
                        elevation: 3,
                        margin: {
                            bottom: 1
                        },
                        padding: 1,
                        borderMarked: !0
                    }, r.createElement(S._25, {
                        display: S.N.Flex,
                        flexWrap: S.Q.NoWrap,
                        textAlign: S._36.Left,
                        alignItems: S.c.Center,
                        fullWidth: !0,
                        padding: {
                            bottom: 1
                        }
                    }, r.createElement(S._2, {
                        margin: {
                            right: 1
                        },
                        flexGrow: 1
                    }, r.createElement(S._35, {
                        type: S._40.H5,
                        color: S.I.Base,
                        bold: !0
                    }, Object(a.d)("Welcome to your homepage, {displayName}!", {
                        displayName: this.props.data.currentUser.displayName
                    }, "OnboardingPrompt"))), r.createElement(S._2, {
                        flexShrink: 0
                    }, r.createElement(S.v, {
                        "data-test-selector": "onboarding-prompt__dismiss",
                        ariaLabel: Object(a.d)("dismiss onboarding", "OnboardingPrompt"),
                        type: S.w.Default,
                        onClick: this.dismissOnboardingPrompt,
                        icon: S._16.Close
                    }))), r.createElement(S._2, {
                        padding: {
                            bottom: 1
                        }
                    }, r.createElement(S._35, null, Object(a.d)("Here you can find your Pulse Feed and popular content on Twitch. Take a moment to personalize this page to your interests.", "OnboardingPrompt"))), r.createElement(S._2, {
                        margin: {
                            y: .5
                        }
                    }, r.createElement(S.u, {
                        "data-test-selector": "onboarding-prompt__start",
                        onClick: this.startOnboarding
                    }, r.createElement(S._2, {
                        padding: {
                            x: 1
                        }
                    }, Object(a.d)("Start", "OnboardingPrompt"))))) : null
                }, t = i.__decorate([Object(f.d)("OnboardingPrompt", {
                    autoReportInteractive: !0
                }), Object(h.a)(w, {
                    options: {
                        variables: {
                            limit: 18
                        }
                    },
                    skip: function(e) {
                        return !e.firstPageLoaded
                    }
                })], t)
            }(r.Component),
            x = Object(g.b)(function(e) {
                return {
                    firstPageLoaded: e.session.firstPageLoaded
                }
            })(P),
            L = n("eXld"),
            U = n("2aoH"),
            A = n("8PKe"),
            j = n("oIkB"),
            V = n("VFqp"),
            M = n("cYgC"),
            G = n("ojlS"),
            B = n("C/8M"),
            q = n("EImC"),
            z = function(e) {
                for (var t = e.cardCount, n = [], i = 0; i < t; i++) 1 === i ? n.push(r.createElement(q.b, {
                    key: i
                })) : n.push(r.createElement(q.a, {
                    key: i
                }));
                return r.createElement(S._2, null, n)
            },
            W = n("/0cZ"),
            H = Object(B.d)(function() {
                return {
                    feed_type: "rec"
                }
            })(M.a),
            Q = {
                limit: 5
            },
            $ = function(e) {
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
                    return this.props.data.loading ? r.createElement(z, {
                        cardCount: 5
                    }) : this.props.data.error ? r.createElement(_.a, {
                        message: Object(a.d)("Error loading data.", "PulseComponent")
                    }) : r.createElement(S._2, null, r.createElement(V.a, {
                        placeholder: Object(a.d)("Share a clip or video with your followers by adding links from Twitch, Vimeo, and YouTube.", "PulseComposer"),
                        onCreate: this.onCreatePost,
                        isConnectedToTwitter: this.props.data.currentUser.isConnectedToTwitter,
                        userID: this.props.data.currentUser.id,
                        composerLocation: V.b.HomePage
                    }), r.createElement(H, {
                        items: this.props.data.currentUser.pulseFeed.items
                    }), r.createElement(o.a, {
                        enabled: !this.props.data.loading && !this.props.data.error,
                        loadMore: this.props.loadMore,
                        contentLength: this.props.data.currentUser.pulseFeed.items.edges.length,
                        pixelThreshold: 100
                    }))
                }, t.prototype.postRender = function() {
                    this.props.data.loading || this.props.latencyTracking.reportInteractive()
                }, t = i.__decorate([Object(h.a)(W, {
                    options: {
                        fetchPolicy: "network-only",
                        variables: Q
                    },
                    props: function(e) {
                        return i.__assign({}, e, {
                            loadMore: function() {
                                var t = e.data.currentUser.pulseFeed.items.edges;
                                return e.data.fetchMore({
                                    query: W,
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
                }), Object(h.a)(G, {
                    props: function(e) {
                        return {
                            createPost: function(t, n, r) {
                                return e.mutate(i.__assign({}, Object(j.a)({
                                    channelID: e.ownProps.data.currentUser.id,
                                    body: t,
                                    embedURLs: n.map(function(e) {
                                        return e.sourceURL
                                    }),
                                    postToTwitter: r
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
                                            query: W,
                                            variables: Q
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
                                            query: W,
                                            data: n,
                                            variables: Q
                                        }))
                                    }
                                }))
                            }
                        }
                    }
                }), Object(f.d)("Pulse")], t)
            }(r.Component),
            Y = n("L46p"),
            K = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.postRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.postRender()
                }, t.prototype.render = function() {
                    var e = [];
                    return this.props.data.error ? r.createElement(_.a, {
                        message: Object(a.d)("Top Games are unavailable at this time.", "TopGamesCompoment")
                    }) : (this.props.data.loading || (e = function(e) {
                        var t = [];
                        return e.games.edges.map(function(e) {
                            var n = e.node;
                            return t.push({
                                id: n.id,
                                name: n.name,
                                viewersCount: n.viewersCount,
                                boxArtURL: n.boxArtURL
                            })
                        }), t
                    }(this.props.data)), r.createElement(N, {
                        title: Object(a.d)("Top Games", "TopGamesCompoment"),
                        items: e,
                        loading: this.props.data.loading,
                        limit: 18,
                        viewAllLinkTo: "/directory",
                        "data-a-target": "view-all-link"
                    }))
                }, t.prototype.postRender = function() {
                    this.props.data.loading || this.props.latencyTracking.reportInteractive()
                }, t = i.__decorate([Object(h.a)(Y, {
                    options: function(e) {
                        return {
                            variables: {
                                limit: e.count || 18
                            }
                        }
                    }
                }), Object(f.d)("TopGames")], t)
            }(r.Component),
            X = (n("jPY3"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        numSlotsAdded: 0
                    }, t.onSlotAdded = function() {
                        t.setState(function(e) {
                            var t = e.numSlotsAdded + 1;
                            return t === Object.keys(u.b.front).length && l.a.display(u.b.front.leaderboard), {
                                numSlotsAdded: t
                            }
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentWillMount = function() {
                    u.g.addListener(u.e, this.onSlotAdded)
                }, t.prototype.componentDidMount = function() {
                    this.onRender(), a.n.setPageTitle()
                }, t.prototype.render = function() {
                    return r.createElement(S._2, {
                        fullHeight: !0
                    }, r.createElement(L.b, {
                        suppressScrollX: !0,
                        disableDebounce: !0
                    }), r.createElement(U.a, null, r.createElement(A.a, null)), r.createElement(S._2, {
                        padding: 3
                    }, r.createElement(m.a, {
                        adSize: u.c.front.leaderboard,
                        adUnit: u.d.frontpage,
                        slotID: u.b.front.leaderboard,
                        targeting: {
                            pagetype: u.a.frontpage
                        },
                        injectStyles: {
                            display: "flex",
                            justifyContent: "center",
                            textAlign: "center",
                            marginBottom: "2rem"
                        },
                        autoEnable: !1
                    }), r.createElement(S._2, {
                        className: "front-page",
                        display: S.N.Flex,
                        flexDirection: S.P.ColumnReverse,
                        breakpointMedium: {
                            flexDirection: S.P.Row
                        },
                        flexWrap: S.Q.NoWrap,
                        margin: {
                            x: "auto"
                        }
                    }, r.createElement(S._2, {
                        className: "front-page__main-col",
                        flexGrow: 0,
                        flexShrink: 0
                    }, r.createElement(x, null), r.createElement($, null)), r.createElement(S._2, {
                        flexGrow: 1,
                        breakpointMedium: {
                            padding: {
                                left: 2
                            }
                        }
                    }, r.createElement(o.c, {
                        bottomPixelThreshold: 20,
                        disableStickinessBelowWidth: 1127
                    }, r.createElement(S._2, {
                        margin: {
                            bottom: 1
                        }
                    }, r.createElement(p.b, {
                        renderContext: p.a.Front
                    })), r.createElement(S._2, {
                        display: S.N.Hide,
                        breakpointMedium: {
                            display: S.N.Block
                        }
                    }, r.createElement(m.a, {
                        adSize: u.c.front.rightTop,
                        adUnit: u.d.frontpage,
                        slotID: u.b.front.rightTop,
                        targeting: {
                            pagetype: u.a.frontpage
                        },
                        injectStyles: {
                            display: "flex",
                            justifyContent: "center",
                            textAlign: "center",
                            marginBottom: "1rem"
                        },
                        autoEnable: !1
                    })), r.createElement(S._2, {
                        margin: {
                            bottom: 1
                        }
                    }, r.createElement(C, null)), r.createElement(K, null), r.createElement(S._2, {
                        display: S.N.Hide,
                        breakpointMedium: {
                            display: S.N.Block
                        }
                    }, r.createElement(m.a, {
                        adSize: u.c.front.rightBottom,
                        adUnit: u.d.frontpage,
                        slotID: u.b.front.rightBottom,
                        targeting: {
                            pagetype: u.a.frontpage
                        },
                        injectStyles: {
                            display: "flex",
                            justifyContent: "center",
                            marginTop: "1rem"
                        },
                        autoEnable: !1
                    })))))))
                }, t.prototype.componentWillUnmount = function() {
                    u.g.removeListener(u.e, this.onSlotAdded)
                }, t.prototype.onRender = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t = i.__decorate([Object(f.d)("FrontPage", {
                    destination: d.a.Index
                }), Object(s.a)({
                    location: c.PageviewLocation.FrontPage
                })], t)
            }(r.Component));
        n.d(t, "FrontPage", function() {
            return X
        })
    },
    KQs2: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            r = n("U7vG"),
            a = n("C/8M"),
            o = n("rzuL"),
            s = n("CSlQ"),
            d = n("Odds"),
            l = n("RH2O"),
            c = n("2KeS"),
            m = n("/7C1"),
            u = n("KSGD"),
            p = n("4mYF"),
            f = n("F8kA"),
            g = Object(s.d)("EmbedInfo", {
                autoReportInteractive: !0
            })(function(e) {
                var t = e.title,
                    n = e.author,
                    i = e.externalAuthorName,
                    a = e.description,
                    o = null,
                    s = null;
                return n ? (o = r.createElement(d._2, {
                    margin: {
                        right: 1
                    },
                    flexShrink: 0
                }, r.createElement(f.a, {
                    to: "/" + n.login,
                    "data-a-target": "pulse-profile-picture"
                }, r.createElement(d.W, {
                    flexShrink: 0
                }, r.createElement(d.l, {
                    size: 40,
                    src: n.profileImageURL,
                    alt: "User profile picture"
                })))), s = r.createElement(d._35, {
                    fontSize: d.R.Size6,
                    color: d.I.Alt
                }, r.createElement(f.a, {
                    to: "/" + n.login,
                    "data-a-target": "pulse-displayname-link"
                }, n.displayName))) : i && "" !== i && (s = r.createElement(d._35, {
                    fontSize: d.R.Size6,
                    color: d.I.Alt
                }, i)), r.createElement(d._25, {
                    display: d.N.Flex,
                    flexWrap: d.Q.NoWrap,
                    padding: 1,
                    background: d.m.Base
                }, o, r.createElement(d._2, {
                    flexGrow: 1,
                    overflow: d._5.Hidden
                }, s, r.createElement(d._35, {
                    fontSize: d.R.Size6,
                    color: d.I.Base,
                    bold: !0,
                    ellipsis: !0
                }, t), a && r.createElement(d._35, {
                    fontSize: d.R.Size6,
                    color: d.I.Alt2,
                    noWrap: !0
                }, a)))
            }),
            v = n("fc0G"),
            h = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onChannelStatus = function() {}, t.onWheelPostMessage = function(e) {
                        if (t.postMessageIsWheelEvent(e) && t.componentEl) {
                            var n = e.data.args[0].data,
                                r = new WheelEvent("wheel", i.__assign({
                                    bubbles: !0
                                }, n));
                            t.componentEl.dispatchEvent(r)
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
                    return r.createElement("div", {
                        ref: this.setComponentRef
                    }, r.createElement(d.j, {
                        ratio: d.k.Aspect16x9
                    }, this.getVideoEmbedComponent()))
                }, t.prototype.getVideoEmbedComponent = function() {
                    var e = this.props,
                        t = e.channelLogin,
                        n = e.vodID,
                        a = e.embedURL,
                        o = e.playerTypeOverride,
                        s = {
                            disableTheatreButton: !0,
                            onChannelStatus: this.onChannelStatus,
                            playerTypeOverride: o || v.b.Frontpage
                        };
                    return a ? r.createElement("iframe", {
                        src: a,
                        width: "100%",
                        height: "100%",
                        allowFullScreen: !0
                    }) : t ? r.createElement(v.c, i.__assign({
                        channelLogin: t
                    }, s)) : n ? r.createElement(v.c, i.__assign({
                        vodID: n
                    }, s)) : r.createElement(d._2, null)
                }, t.prototype.postMessageIsWheelEvent = function(e) {
                    return "player.embed.client" === e.data.namespace && "bridgeplayereventwithpayload" === e.data.method && e.data.args.length > 0 && "wheel" === e.data.args[0].event
                }, t = i.__decorate([Object(s.d)("EmbedVideoPlayer")], t)
            }(r.Component),
            k = function(e, t) {
                var n = e.embed,
                    i = n.broadcaster,
                    a = n.clipTitle,
                    s = n.clipCreatedAt,
                    l = n.durationSeconds,
                    c = n.embedURL,
                    m = n.thumbnailURL,
                    u = n.video,
                    f = n.viewCount,
                    k = u && u.game ? u.game.name : "";
                return r.createElement(d._2, null, r.createElement(p.a, {
                    createdAt: s,
                    lengthSeconds: l,
                    onClick: function() {
                        e.pauseCarousel && e.pauseCarousel(), Object(o.c)(e, t.feedTrackingProps)
                    },
                    thumbnailURL: m,
                    type: p.b.Clip,
                    viewCount: f
                }, r.createElement(h, {
                    embedURL: c,
                    playerTypeOverride: v.b.Feed
                })), r.createElement(g, {
                    author: i,
                    title: a,
                    description: k
                }))
            };
        k.contextTypes = {
            feedTrackingProps: u.object
        };
        var b = Object(s.d)("ClipEmbed", {
                autoReportInteractive: !0
            })(k),
            _ = Object(l.b)(null, function(e) {
                return Object(c.b)({
                    pauseCarousel: m.d
                }, e)
            })(b),
            y = n("6sO2"),
            E = Object(s.d)("PhotoOEmbed", {
                autoReportInteractive: !0
            })(function(e) {
                var t = e.embed,
                    n = t.title,
                    i = t.inputURL,
                    a = t.providerName,
                    o = t.authorName,
                    s = t.thumbnail;
                return r.createElement("a", {
                    href: "" + i,
                    target: "_blank",
                    rel: "noopener noreferrer"
                }, r.createElement(d.j, {
                    ratio: d.k.Aspect16x9
                }, r.createElement(d._2, null, r.createElement(d.W, {
                    fullWidth: !0,
                    fullHeight: !0,
                    position: d._9.Absolute
                }, r.createElement("img", {
                    src: s && s.url || y.n.config.defaultStreamPreviewURL
                })))), r.createElement(g, {
                    externalAuthorName: o,
                    title: n,
                    description: a
                }))
            }),
            S = function(e, t) {
                var n = e.embed,
                    i = n.broadcaster,
                    a = n.game,
                    s = n.title,
                    l = n.previewImageURL,
                    c = n.viewersCount,
                    m = a ? a.name : "";
                return r.createElement(d._2, null, r.createElement(p.a, {
                    onClick: function() {
                        Object(o.c)(e, t.feedTrackingProps)
                    },
                    thumbnailURL: l,
                    type: p.b.Stream,
                    viewCount: c
                }, r.createElement(h, {
                    channelLogin: i.login,
                    playerTypeOverride: v.b.Feed
                })), r.createElement(g, {
                    author: i,
                    title: s,
                    description: m
                }))
            };
        S.contextTypes = {
            feedTrackingProps: u.object
        };
        var N = Object(s.d)("StreamEmbed", {
                autoReportInteractive: !0
            })(S),
            O = function(e, t) {
                var n = e.embed,
                    i = n.id,
                    a = n.owner,
                    s = n.lengthSeconds,
                    l = n.game,
                    c = n.publishedAt,
                    m = n.previewThumbnailURL,
                    u = n.title,
                    f = n.videoViewCount,
                    k = l ? l.name : "";
                return r.createElement(d._2, null, r.createElement(p.a, {
                    createdAt: c,
                    lengthSeconds: s,
                    onClick: function() {
                        e.pauseCarousel && e.pauseCarousel(), Object(o.c)(e, t.feedTrackingProps)
                    },
                    thumbnailURL: m,
                    type: p.b.Video,
                    viewCount: f
                }, r.createElement(h, {
                    vodID: i,
                    playerTypeOverride: v.b.Feed
                })), r.createElement(g, {
                    author: a,
                    title: u,
                    description: k
                }))
            };
        O.contextTypes = {
            feedTrackingProps: u.object
        };
        var C = Object(s.d)("VideoEmbed", {
                autoReportInteractive: !0
            })(O),
            w = Object(l.b)(null, function(e) {
                return Object(c.b)({
                    pauseCarousel: m.d
                }, e)
            })(C),
            F = (n("HgOP"), function(e, t) {
                var n = e.embed,
                    i = n.title,
                    a = n.providerName,
                    s = n.authorName,
                    l = n.html,
                    c = n.thumbnail,
                    m = l.replace("autoplay=false", "autoplay=true");
                return r.createElement(d._2, null, r.createElement(p.a, {
                    thumbnailURL: c && c.url || y.n.config.defaultStreamPreviewURL,
                    type: p.b.VideoOEmbed,
                    onClick: function() {
                        Object(o.c)(e, t.feedTrackingProps)
                    }
                }, r.createElement("div", {
                    className: "video-oembed-container",
                    dangerouslySetInnerHTML: {
                        __html: m
                    }
                })), r.createElement(g, {
                    externalAuthorName: s,
                    title: i,
                    description: a
                }))
            });
        F.contextTypes = {
            feedTrackingProps: u.object
        };
        var I = {
                PhotoOEmbed: E,
                VideoOEmbed: Object(s.d)("VideoOEmbed", {
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
                    return e ? r.createElement(e, {
                        embed: this.props.embed
                    }) : r.createElement(d._2, null)
                }, t = i.__decorate([Object(s.d)("Embed"), Object(a.c)()], t)
            }(r.Component);
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

        function i(e) {
            switch (e) {
                case o.RECOMMENDATION_VIEWED:
                    return Object(a.d)("Because of your viewing history", "FeedItemReason");
                case o.RECOMMENDATION_FOLLOWED:
                    return Object(a.d)("Because of who you follow", "FeedItemReason");
                case o.RECOMMENDATION_POPULAR:
                    return Object(a.d)("Because it's popular", "FeedItemReason");
                default:
                    return ""
            }
        }
        var r = n("U7vG"),
            a = n("6sO2"),
            o = {
                RECOMMENDATION_FOLLOWED: "followed",
                RECOMMENDATION_VIEWED: "viewed",
                RECOMMENDATION_POPULAR: "popular"
            },
            s = n("Odds"),
            d = function(e) {
                if (0 === e.reasons.length) return r.createElement(s._2, null);
                var t = i(e.reasons[0].reason);
                return "" === t ? r.createElement(s._2, null) : r.createElement(s._2, {
                    padding: 1
                }, t)
            };
        n.d(t, "b", function() {
            return i
        }), n.d(t, "a", function() {
            return d
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
    MSvX: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            r = n("OAwv"),
            a = n("U7vG"),
            o = n("6sO2"),
            s = n("Ejve"),
            d = "legacy_routes_enabled",
            l = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.isEnabled = !1, n.onHistoryChange = function(e, t) {
                        n.isEnabled ? "REPLACE" !== t ? e && e.pathname ? (n.logger.debug("Location changed", {
                            path: e.pathname
                        }), n.legacyRoutes.forEach(function(t) {
                            try {
                                if (e.pathname.match(t)) {
                                    n.logger.debug("Found legacy route. Reloading...");
                                    var i = "" !== e.search ? r.parse(e.search) : {};
                                    i["from-redirect"] = "true";
                                    var a = r.stringify(i),
                                        d = o.a.buildType === s.a.Dev ? window.location.host : window.location.hostname,
                                        l = window.location.protocol + "//" + d + e.pathname + "?" + a;
                                    return n.logger.debug("Redirecting to legacy route", {
                                        newUrl: l
                                    }), void window.location.replace(l)
                                }
                            } catch (e) {
                                o.i.withCategory("legacy").error(e, "Unable to determine legacy reload match", {
                                    regex: t
                                })
                            }
                        })) : n.logger.debug("Unable to process history change. Path is null or empty.") : n.logger.debug("Skipping legacy route processing, due to history replace.") : n.logger.debug("Legacy routing not enabled.")
                    }, n.processRedirectParam = function(e) {
                        if (e && e.pathname && e.search) {
                            var t = "" !== e.search ? r.parse(e.search) : {};
                            if (t["from-redirect"]) {
                                delete t["from-redirect"];
                                var i = r.stringify(t),
                                    a = "";
                                i.length > 0 && (a = "?" + i), n.props.history.replace({
                                    pathname: e.pathname,
                                    hash: e.hash,
                                    search: a
                                })
                            }
                        }
                    }, n.isEnabled = o.b.get(d, !1), n.logger = o.i.withCategory("legacy-routes"), n.legacyRoutes = n.buildRoutes(), n.props.history.listen(n.onHistoryChange), n
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return null
                }, t.prototype.componentDidMount = function() {
                    this.processRedirectParam(this.props.history.location)
                }, t.prototype.buildRoutes = function() {
                    if (!this.isEnabled) return [];
                    this.logger.debug("Building legacy routes...");
                    var e = o.b.get("legacy_routes", []),
                        t = [];
                    if (!e || 0 === e.length) return this.logger.debug("No legacy routes found in settings."), t;
                    for (var n = 0, i = e; n < i.length; n++) {
                        var r = i[n];
                        try {
                            var a = new RegExp(r, "i");
                            t.push(a)
                        } catch (e) {
                            this.logger.debug("Failed to parse route!", {
                                val: r,
                                err: e
                            })
                        }
                    }
                    return this.logger.debug("Done building legacy routes!", {
                        count: t.length
                    }), t
                }, t
            }(a.Component);
        n.d(t, "a", function() {
            return d
        }), n.d(t, !1, function() {
            return "legacy_routes"
        }), n.d(t, "b", function() {
            return l
        })
    },
    MTWZ: function(e, t) {},
    Mlfg: function(e, t, n) {
        function i(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !a[t] && (a[t] = !0, !0)
            })
        }
        var r = {
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
        r.loc.source = {
            body: '#import "twilight/features/feed/models/clip-fragment.gql"\n#import "twilight/features/feed/models/post-fragment.gql"\n#import "twilight/features/feed/models/video-fragment.gql"\nmutation Reaction_Add($input: AddReactionInput!) {\naddReaction(input: $input) {\ncontent {\n...feedItemClip\n...feedItemPost\n...feedItemVideo\n}\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var a = {};
        r.definitions = r.definitions.concat(i(n("I5q7").definitions)), r.definitions = r.definitions.concat(i(n("S0OZ").definitions)), r.definitions = r.definitions.concat(i(n("fWQn").definitions)), e.exports = r
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
            return a
        }), n.d(t, "c", function() {
            return o
        }), n.d(t, "d", function() {
            return s
        }), n.d(t, "a", function() {
            return d
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
            r = (n.n(i), n("6sO2")),
            a = {
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
            s = {
                directory: "/" + r.a.dfpNetworkCode + "/twitch/directory",
                channel: "/" + r.a.dfpNetworkCode + "/twitch/channels",
                frontpage: "/" + r.a.dfpNetworkCode + "/twitch/homepage",
                sizzle: "/" + r.a.dfpNetworkCode + "/twitch/sizzle_strip"
            },
            d = {
                games: "games",
                channel: "channel",
                frontpage: "homepage"
            },
            l = "ads.slot-render-end",
            c = "ads.slot-ready",
            m = new i.EventEmitter
    },
    R0Kh: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return o
        }), n.d(t, "b", function() {
            return s
        }), n.d(t, "c", function() {
            return d
        }), n.d(t, "f", function() {
            return l
        }), n.d(t, "e", function() {
            return c
        }), n.d(t, "g", function() {
            return m
        }), n.d(t, "i", function() {
            return u
        }), n.d(t, "h", function() {
            return f
        }), n.d(t, "d", function() {
            return g
        });
        var i = n("OAwv"),
            r = (n.n(i), n("6sO2")),
            a = n("S1vB"),
            o = {
                DIRECT_ENTITLEMENT: "DIRECT_ENTITLEMENT",
                CLAIM_CODE: "CLAIM_CODE",
                EXTERNAL_OFFER: "EXTERNAL_OFFER"
            },
            s = function(e, t) {
                return e + "-" + t
            },
            d = function() {
                return p("claimedOffers")
            },
            l = function(e) {
                r.k.set("claimedOffers", e)
            },
            c = function() {
                return p("seenOffers")
            },
            m = function(e) {
                r.k.set("seenOffers", e)
            },
            u = function(e, t) {
                return (e && (e.priority || 0 === e.priority) ? e.priority : 99999) - (t && (t.priority || 0 === t.priority) ? t.priority : 99999)
            },
            p = function(e) {
                return r.k.get(e, [])
            },
            f = function(e, t) {
                return void 0 !== e && void 0 !== t && (!e && Object(a.a)(t))
            },
            g = function() {
                var e = location.search,
                    t = i.parse(e);
                return t && t.dateOverride || void 0
            }
    },
    S0OZ: function(e, t, n) {
        function i(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !a[t] && (a[t] = !0, !0)
            })
        }
        var r = {
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
        r.loc.source = {
            body: '#import "twilight/features/chat/models/embedded-emote-fragment.gql"\n#import "twilight/features/feed/models/clip-fragment.gql"\n#import "twilight/features/feed/models/user-fragment.gql"\n#import "twilight/features/feed/models/video-fragment.gql"\nfragment feedItemPost on Post {\nid\ncreatedAt\nbody {\ncontent\nemotes {\n...embeddedEmote\n}\n}\nreactions {\nemote {\nid\ntoken\nsetID\n}\ncount\nself {\nhasReacted\n}\n}\nembeds {\n...feedItemClip\n...feedItemVideo\n... on PhotoOEmbed {\ntitle\ninputURL\nproviderName\nauthorName\nthumbnail {\nurl\n}\n}\n... on VideoOEmbed {\ntitle\ninputURL\nproviderName\nauthorName\nthumbnail {\nurl\n}\nhtml\n}\n}\nauthor {\n...feedUser\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var a = {};
        r.definitions = r.definitions.concat(i(n("0ImK").definitions)), r.definitions = r.definitions.concat(i(n("I5q7").definitions)), r.definitions = r.definitions.concat(i(n("Lq4d").definitions)), r.definitions = r.definitions.concat(i(n("fWQn").definitions)), e.exports = r
    },
    S4HN: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return i
        }), n.d(t, "a", function() {
            return o
        }), n.d(t, "g", function() {
            return s
        }), n.d(t, "f", function() {
            return d
        }), n.d(t, "d", function() {
            return l
        }), n.d(t, "e", function() {
            return c
        }), n.d(t, "c", function() {
            return m
        });
        var i, r = n("6sO2"),
            a = n("vH/s");
        ! function(e) {
            e.HomepageCTA = "homepage_cta", e.NewSignup = "new_signup"
        }(i || (i = {}));
        var o;
        ! function(e) {
            e.Click = "click", e.Impression = "impression", e.Start = "start", e.Dismissed = "dismissed", e.Completed = "completed"
        }(o || (o = {}));
        var s = function(e) {
                var t = {
                    source: e.source,
                    action: o.Start
                };
                r.m.track(a.SpadeEventType.OnboardingEvent, t)
            },
            d = function() {
                var e = {
                    source: i.HomepageCTA,
                    action: o.Dismissed
                };
                r.m.track(a.SpadeEventType.OnboardingEvent, e)
            },
            l = function() {
                var e = {
                    source: i.HomepageCTA,
                    action: o.Completed
                };
                r.m.track(a.SpadeEventType.OnboardingEvent, e)
            },
            c = function(e, t) {
                var n = {
                    src: a.SpadeEventType.OnboardingEvent,
                    game: t
                };
                r.m.track(e, n)
            },
            m = function(e) {
                r.m.track(a.SpadeEventType.BrowseForYou, e)
            }
    },
    TUg1: function(e, t) {},
    TWJL: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        }), n.d(t, "b", function() {
            return r
        }), n.d(t, "c", function() {
            return a
        }), n.d(t, "d", function() {
            return o
        }), n.d(t, "e", function() {
            return s
        }), t.f = function(e) {
            var t = e.split(":");
            return t.length < 2 ? {
                type: "",
                id: ""
            } : {
                type: t[0],
                id: t[1]
            }
        };
        var i = "clip",
            r = "url",
            a = "post",
            o = "stream",
            s = "vod"
    },
    VFqp: function(e, t, n) {
        "use strict";
        var i, r = n("TToO"),
            a = n("U7vG"),
            o = n("6sO2"),
            s = n("rCmJ"),
            d = n("+Znq"),
            l = n("czpb"),
            c = n("ieBa"),
            m = n("C/8M"),
            u = n("rzuL"),
            p = n("CSlQ"),
            f = n("Odds"),
            g = n("KQs2"),
            v = n("7vx8"),
            h = n("Z/A0"),
            k = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.componentDidUpdate = function() {
                    this.props.data && this.props.data.embed && this.props.onLoad(this.props.url, this.props.data.embed)
                }, t.prototype.render = function() {
                    return null
                }, t = r.__decorate([Object(v.a)(h, {
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
            }(a.Component),
            b = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        cachedEmbeds: {}
                    }, t.onEmbedLoad = function(e, n) {
                        t.setState({
                            cachedEmbeds: r.__assign({}, t.state.cachedEmbeds, (i = {}, i[e] = n, i))
                        });
                        var i
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidUpdate = function() {
                    var e = this.state.cachedEmbeds[this.props.url];
                    e && this.props.onLoad(this.props.url, e)
                }, t.prototype.render = function() {
                    var e = this.props.url;
                    return !e || this.state.cachedEmbeds[e] ? null : a.createElement(k, {
                        url: e,
                        onLoad: this.onEmbedLoad
                    })
                }, t
            }(a.Component),
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
                return r.__extends(t, e), t.prototype.componentDidUpdate = function() {
                    !this.props.embedURL && this.state.removedEmbedURL && this.setState({
                        removedEmbedURL: ""
                    })
                }, t.prototype.render = function() {
                    var e = this.props.embedURL;
                    return (this.state.embed || this.state.removedEmbedURL === this.props.embedURL) && (e = ""), a.createElement(f._2, null, this.state.embed && a.createElement(f._2, {
                        position: f._9.Relative,
                        margin: {
                            top: 1
                        }
                    }, a.createElement(f._2, {
                        className: "embed-preview-close",
                        position: f._9.Absolute,
                        zIndex: 1,
                        attachTop: !0,
                        attachRight: !0
                    }, a.createElement(f.v, {
                        onClick: this.removeEmbed,
                        overlay: !0,
                        icon: f._16.Close,
                        ariaLabel: Object(o.d)("Close", "EmbedPreview")
                    })), a.createElement(g.a, {
                        embed: this.state.embed
                    })), a.createElement(b, {
                        url: e,
                        onLoad: this.onEmbedLoad
                    }))
                }, t
            }(a.Component),
            y = Object(l.a)("/settings/profile"),
            E = /(?:https?:\/\/)?(?:[-a-zA-Z0-9@:%_\+~#=]+\.)+[a-z]{2,6}\b(?:[-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
        ! function(e) {
            e.HomePage = "home", e.Channel = "channel", e.Dashboard = "dashboard", e.Contextual = "contextual"
        }(i || (i = {}));
        var S = function(e) {
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
                            var e = t.textArea.value.match(E);
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
                                    r = {
                                        action: m.a.Create,
                                        postID: i[i.length - 1],
                                        postContent: n.body && n.body.content || void 0,
                                        composerLocation: t.props.composerLocation
                                    };
                                Object(u.e)(r)
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
                            r = t.textArea.value.substring(0, t.textArea.selectionStart) + e + t.textArea.value.substring(t.textArea.selectionEnd, t.textArea.value.length);
                        t.textArea.value = r, t.textArea.focus(), t.textArea.selectionStart = i, t.textArea.selectionEnd = i
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    !this.props.firstPageLoaded && e.firstPageLoaded && this.setState({
                        hasInteractedOrPageload: !0
                    })
                }, t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = Object(o.d)("Post", "Composer"),
                        t = a.createElement(c.b, {
                            key: "emote-picker",
                            onClick: this.toggleEmotePicker
                        }),
                        n = null;
                    this.state.hasInteractedOrPageload && (n = a.createElement(c.c, {
                        channelOwnerID: this.props.userID,
                        onClickEmote: this.onClickEmote,
                        toggleVisibility: this.toggleEmotePicker,
                        visible: this.state.isEmotePickerMenuVisible && !this.state.disabled,
                        direction: f.q.BottomRight
                    }));
                    var i, r = a.createElement(s.a, {
                        onClickOut: this.onEmotePickerClickOut
                    }, t, n);
                    return i = this.props.isConnectedToTwitter ? a.createElement(f.H, {
                        "data-test-selector": "twitter-checkbox",
                        id: "share-twitter-toggle",
                        label: Object(o.d)("Share Posts to Twitter", "TwitterShare"),
                        onChange: this.toggleShareActivity,
                        checked: this.state.shareToTwitter
                    }) : a.createElement("a", {
                        href: y
                    }, Object(o.d)("Connect Twitter", "ConnectTwitter")), a.createElement(f._25, {
                        elevation: 1,
                        padding: 1,
                        margin: {
                            bottom: 1
                        },
                        background: f.m.Base,
                        position: f._9.Relative,
                        "data-a-target": "pulse-post-container"
                    }, a.createElement("div", {
                        onMouseEnter: this.onMouseEnter
                    }, a.createElement(f._37, {
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
                        overflow: f._5.Hidden
                    }), a.createElement(f._25, {
                        textAlign: f._36.Right,
                        position: f._9.Absolute,
                        attachTop: !0,
                        attachRight: !0,
                        margin: {
                            top: 1,
                            right: 1
                        }
                    }, r), a.createElement(f._2, {
                        display: f.N.Flex,
                        margin: {
                            top: 1
                        }
                    }, a.createElement(f._2, {
                        flexGrow: 1
                    }), a.createElement(f._2, {
                        margin: {
                            right: 1
                        }
                    }, a.createElement(s.a, {
                        onClickOut: this.closeTwitterBubble
                    }, a.createElement(d.a, null, a.createElement(f.v, {
                        icon: f._16.Gear,
                        ariaLabel: Object(o.d)("Composer Settings", "ComposerSettings"),
                        "data-test-selector": "composer-setting",
                        "data-a-target": "pulse-settings"
                    }), a.createElement(f.p, {
                        direction: f.q.Left
                    }, a.createElement(f._2, {
                        padding: 1
                    }, i))))), a.createElement(f._2, null, a.createElement(f.u, {
                        "data-test-selector": "submit-post",
                        disabled: this.state.disabled,
                        ariaLabel: e,
                        onClick: this.onSubmit,
                        "data-a-target": "pulse-post-button"
                    }, e)))), !this.state.disabled && a.createElement(_, {
                        embedURL: this.state.inputEmbedURL,
                        onSetEmbed: this.handleSetEmbed
                    }))
                }, t = r.__decorate([Object(p.d)("Composer")], t)
            }(a.Component),
            N = n("RH2O"),
            O = Object(N.b)(function(e) {
                return {
                    firstPageLoaded: e.session.firstPageLoaded
                }
            })(S);
        n.d(t, !1, function() {
            return "composer"
        }), n.d(t, !1, function() {
            return "submit-post"
        }), n.d(t, !1, function() {
            return "twitter-checkbox"
        }), n.d(t, !1, function() {
            return "composer-setting"
        }), n.d(t, !1, function() {
            return E
        }), n.d(t, "b", function() {
            return i
        }), n.d(t, !1, function() {
            return S
        }), n.d(t, "a", function() {
            return O
        })
    },
    VMA7: function(e, t, n) {
        function i(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !a[t] && (a[t] = !0, !0)
            })
        }
        var r = {
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
        r.loc.source = {
            body: '#import "twilight/features/feed/models/post-fragment.gql"\n#import "twilight/features/feed/models/clip-fragment.gql"\n#import "twilight/features/feed/models/video-fragment.gql"\n#import "twilight/features/feed/models/stream-fragment.gql"\nfragment feed on FeedItemConnection {\nedges {\nnode {\ncontent {\n...feedItemClip\n...feedItemPost\n...feedItemStream\n...feedItemVideo\n}\nreasons {\n... on FeedItemReason {\nreason\n}\n}\ntracking {\nbatchID\ncardImpressionID\nrecGenerationID\nrecGenerationIndex\n}\n}\ncursor\n}\npageInfo {\nhasNextPage\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var a = {};
        r.definitions = r.definitions.concat(i(n("S0OZ").definitions)), r.definitions = r.definitions.concat(i(n("I5q7").definitions)), r.definitions = r.definitions.concat(i(n("fWQn").definitions)), r.definitions = r.definitions.concat(i(n("rogX").definitions)), e.exports = r
    },
    WKwZ: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
        }), n.d(t, "d", function() {
            return a
        }), n.d(t, "e", function() {
            return o
        }), n.d(t, "c", function() {
            return i
        }), n.d(t, "b", function() {
            return s
        });
        var i, r = "carousel-player__main-description",
            a = "carousel-player-left-button",
            o = "carousel-player-right-button";
        ! function(e) {
            e[e.Horizontal = 1] = "Horizontal", e[e.Vertical = 2] = "Vertical"
        }(i || (i = {}));
        var s;
        ! function(e) {
            e[e.Stream = 1] = "Stream", e[e.Vod = 2] = "Vod"
        }(s || (s = {}))
    },
    Wjt1: function(e, t, n) {
        "use strict";

        function i(e, t, n) {
            switch (t) {
                case c.FeaturedBroadcastersRenderContext.AnonFront:
                    return a.createElement(d.a, {
                        items: e,
                        isLoading: n,
                        layout: l.c.Horizontal,
                        darkTheme: !0
                    });
                default:
                    return a.createElement(f._25, {
                        className: "featured-content",
                        background: f.m.Base,
                        elevation: 1
                    }, a.createElement(f._2, {
                        padding: 1
                    }, function(e) {
                        return e ? a.createElement(f._35, {
                            fontSize: f.R.Size5,
                            color: f.I.Alt2
                        }, a.createElement(f._8, {
                            width: 100
                        })) : a.createElement(f._35, {
                            fontSize: f.R.Size5,
                            color: f.I.Alt2
                        }, Object(o.d)("Featured", "FeaturedContentComponent"))
                    }(n)), a.createElement(d.a, {
                        items: e,
                        isLoading: n,
                        layout: l.c.Vertical
                    }))
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.placeholderFeaturedBroadcasters = function(e) {
            return i([], e, !0)
        }, n.d(t, "FeaturedContent", function() {
            return g
        });
        var r = n("TToO"),
            a = n("U7vG"),
            o = (n.n(a), n("6sO2")),
            s = n("7vx8"),
            d = n("g91j"),
            l = n("WKwZ"),
            c = n("o8Pq"),
            m = n("8atL"),
            u = (n.n(m), n("Xg86")),
            p = n("CSlQ"),
            f = n("Odds");
        n.d(t, "FeaturedBroadcastersRenderContext", function() {
            return c.FeaturedBroadcastersRenderContext
        });
        var g = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return r.__extends(t, e), t.prototype.componentDidMount = function() {
                this.postRender()
            }, t.prototype.componentDidUpdate = function() {
                this.postRender()
            }, t.prototype.render = function() {
                var e = this.props.data.featuredStreams || [],
                    t = Object(u.a)(e),
                    n = this.props.data.featuredVideos || [],
                    r = Object(u.b)(n);
                if (t.length > 0 && t.splice(t.length - r.length), this.props.shouldMixContent && r.length > 0) {
                    var a = 6 - r.length,
                        o = t.splice(a);
                    t = t.concat(r).concat(o)
                } else t = t.concat(r);
                var s = !(!this.props.data.loading && !this.props.data.error);
                return i(t, this.props.renderContext, s)
            }, t.prototype.postRender = function() {
                this.props.data && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
            }, t = r.__decorate([Object(s.a)(m, {
                options: function() {
                    return {
                        variables: {
                            language: o.n.intl.getLanguageCode()
                        }
                    }
                }
            }), Object(p.d)("FeaturedContent")], t)
        }(a.Component)
    },
    Xg86: function(e, t, n) {
        "use strict";

        function i(e) {
            return e.replace(/\[\]\(.+\)/, "")
        }
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
                        type: r.b.Stream,
                        subType: e.stream ? e.stream.type : "",
                        viewersCount: e.stream ? e.stream.viewersCount : 0
                    },
                    description: i(e.description || ""),
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
                        type: r.b.Vod,
                        subType: "video",
                        viewersCount: e.video ? e.video.viewCount : 0
                    },
                    description: i(e.description || ""),
                    imageURL: e.imageURL || "",
                    isScheduled: e.isScheduled || !1,
                    isSponsored: e.isSponsored || !1,
                    priorityLevel: e.priorityLevel,
                    title: e.title || ""
                }
            })
        };
        var r = n("WKwZ")
    },
    "Xh/U": function(e, t, n) {
        "use strict";

        function i(e) {
            var t = [];
            return e && 0 !== e.length && (t = e.slice().sort(function(e, t) {
                return function(e, t) {
                    if (e.emote.id === x.emote.id) return -1;
                    if (t.emote.id === x.emote.id) return 1;
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

        function r(e) {
            return void 0 !== G[e]
        }
        var a = n("U7vG"),
            o = n("KQs2"),
            s = n("RH2O"),
            d = n("2KeS"),
            l = n("+xm8"),
            c = n("f2i/"),
            m = n("Aj/L"),
            u = n("TToO"),
            p = n("KSGD"),
            f = n("6sO2"),
            g = n("rCmJ"),
            v = n("7vx8"),
            h = n("Tzcg"),
            k = n("l21v"),
            b = n("287o"),
            _ = n("CSlQ"),
            y = n("Odds"),
            E = (n("kaF0"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        disabled: !1
                    }, t.toggleReaction = function() {
                        if (!t.state.disabled) {
                            var e = t.props.reaction.self.hasReacted ? b.a.Remove : b.a.Add,
                                n = (i = {}, i[b.a.Add] = t.props.addReaction, i[b.a.Remove] = t.props.removeReaction, i);
                            t.setState({
                                disabled: !0
                            }), n[e](t.props.reaction.emote.id, t.props.reaction.emote.token).then(function() {
                                return t.setState({
                                    disabled: !1
                                })
                            }, function() {
                                return t.setState({
                                    disabled: !1
                                })
                            });
                            var i
                        }
                    }, t
                }
                return u.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.reaction,
                        t = e.count,
                        n = e.emote,
                        i = e.self,
                        r = n.token;
                    return parseInt(n.id, 10) < 15 && (r = Object(h.c)(n.token)), a.createElement("div", u.__assign({
                        onClick: this.toggleReaction
                    }, Object(y._53)(this.props)), a.createElement(y._43, {
                        label: 0 === t ? r : t + " " + r,
                        direction: y._45.Top,
                        align: y._44.Center
                    }, a.createElement(y._2, {
                        className: i.hasReacted ? "activity-reaction activity-reaction--active" : "activity-reaction"
                    }, a.createElement(y._2, {
                        className: "activity-reaction__emote-contain"
                    }, a.createElement("img", {
                        src: Object(k.e)("endorse" === n.id ? "1" : n.id, 3),
                        alt: r,
                        className: "activity-reaction__emote"
                    })))))
                }, t = u.__decorate([Object(_.d)("Reaction")], t)
            }(a.Component)),
            S = Object(_.d)("AdditionalReactions", {
                autoReportInteractive: !0
            })(function(e) {
                var t = e.reactions.map(function(t, n) {
                    return a.createElement(y._2, {
                        key: n,
                        margin: {
                            right: 1,
                            bottom: 1
                        }
                    }, a.createElement(E, {
                        key: n,
                        reaction: t,
                        addReaction: e.addReaction,
                        removeReaction: e.removeReaction,
                        "data-a-target": "additional-reaction-" + n
                    }))
                });
                return a.createElement(y.p, {
                    direction: e.position || y.q.TopCenter,
                    size: y.r.Small,
                    show: !0
                }, a.createElement(y._25, {
                    display: y.N.Flex,
                    flexWrap: y.Q.Wrap,
                    padding: {
                        left: 1,
                        top: 1
                    }
                }, t))
            }),
            N = Object(_.d)("TopReactions", {
                autoReportInteractive: !0
            })(function(e) {
                var t = e.reactions.map(function(t, n) {
                    return a.createElement(y._2, {
                        key: n,
                        margin: {
                            right: 1
                        }
                    }, a.createElement(E, {
                        key: n,
                        reaction: t,
                        addReaction: e.addReaction,
                        removeReaction: e.removeReaction,
                        "data-a-target": "top-reaction-" + n
                    }))
                });
                return a.createElement(y._25, {
                    display: y.N.Flex
                }, t)
            }),
            O = n("oIkB"),
            C = function(e, t, n) {
                return function(i, r, a, o) {
                    var s = (t = t || []).map(function(e) {
                            return e.emote.id
                        }).indexOf(r),
                        d = t.slice();
                    return s > -1 ? d[s] = u.__assign({}, t[s], {
                        count: t[s].count + function(e, t) {
                            return e === b.a.Add && t.self.hasReacted ? 0 : e === b.a.Add ? 1 : -1
                        }(e, t[s]),
                        self: u.__assign({}, t[s].self, {
                            hasReacted: e === b.a.Add
                        })
                    }) : e === b.a.Add && d.push(u.__assign({}, x, {
                        emote: u.__assign({}, x.emote, {
                            id: r,
                            token: a
                        }),
                        count: 1,
                        self: u.__assign({}, x.self, {
                            hasReacted: !0
                        })
                    })), n(u.__assign({}, Object(O.a)({
                        entityID: i,
                        emoteID: r
                    }), {
                        optimisticResponse: (l = {}, l[e === b.a.Add ? "addReaction" : "removeReaction"] = {
                            content: u.__assign({}, o, {
                                reactions: d
                            }),
                            __typename: e === b.a.Add ? "AddReactionPayload" : "RemoveReactionPayload"
                        }, l)
                    }));
                    var l
                }
            },
            w = n("C/8M"),
            F = n("rzuL"),
            I = n("Mlfg"),
            R = n("Dqkc"),
            T = n("P+j/"),
            D = (n("24qG"), function(e) {
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
                return u.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = a.createElement("div", {
                        onClick: this.toggleEmoteSelector,
                        "data-a-target": "add-reaction-button"
                    }, this.props.children);
                    return this.state.emoteSelectorVisible || (e = a.createElement(y._43, {
                        label: Object(f.d)("Add a Reaction", "ReactionSelector"),
                        direction: y._45.Top,
                        align: y._44.Center
                    }, e)), a.createElement(y._2, {
                        className: "reaction-selector",
                        position: y._9.Relative
                    }, a.createElement(g.a, {
                        onClickOut: this.closeEmoteSelector
                    }, this.state.emoteSelectorVisible && a.createElement(T.a, {
                        onClickEmote: this.onEmoteSelect,
                        visible: this.state.emoteSelectorVisible && this.state.emotesLoaded,
                        toggleVisibility: this.toggleEmoteSelector,
                        onLoad: this.emotesLoaded,
                        direction: this.props.position || y.q.TopLeft
                    }), e))
                }, t = u.__decorate([Object(_.d)("ReactionSelector")], t)
            }(a.Component)),
            P = "additional-toggle-tracking",
            x = {
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
            L = 4,
            U = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        additionalReactionsVisible: !1
                    }, t.addReaction = function(e, n) {
                        return t.toggleReaction(b.a.Add, e, n)
                    }, t.hideAdditional = function() {
                        t.setState({
                            additionalReactionsVisible: !1
                        })
                    }, t.removeReaction = function(e, n) {
                        return t.toggleReaction(b.a.Remove, e, n)
                    }, t.toggleAdditional = function(e, n) {
                        n.preventDefault(), e.length <= L || t.setState(function(e) {
                            return {
                                additionalReactionsVisible: !e.additionalReactionsVisible
                            }
                        })
                    }, t.toggleReaction = function(e, n, i) {
                        if (!t.props.isLoggedIn) return t.props.login(), Promise.reject(new Error("user not logged in"));
                        var r = i;
                        parseInt(n, 10) < 15 && (r = Object(h.c)(i));
                        return (e === b.a.Add ? t.props.addReaction : t.props.removeReaction)(t.props.parentEntity, n, i, t.props.parent).then(function(i) {
                            var a = {
                                action: e === b.a.Add ? w.a.Create : w.a.Remove,
                                entity: t.props.parentEntity,
                                reactionInt: n,
                                reactionText: r
                            };
                            return Object(F.f)(a, t.context.feedTrackingProps), i
                        })
                    }, t
                }
                return u.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this,
                        t = i(this.props.reactions);
                    0 !== t.length && t[0].emote.id === x.emote.id || (t = [x].concat(t));
                    var n = function(n) {
                            return e.toggleAdditional(t, n)
                        },
                        r = this.props.emoteSelectorAndOverflowPos && this.props.emoteSelectorAndOverflowPos === y.q.Bottom ? y.q.BottomCenter : y.q.TopCenter,
                        o = null;
                    this.state.additionalReactionsVisible && (o = a.createElement(S, {
                        reactions: t.slice(L),
                        addReaction: this.addReaction,
                        removeReaction: this.removeReaction,
                        position: r
                    }));
                    var s = this.props.reactions ? this.props.reactions.reduce(function(e, t) {
                            return e + t.count
                        }, 0) : 0,
                        d = null;
                    this.props.reactions && s > 0 && (d = this.props.reactions.length >= L ? a.createElement("a", {
                        href: "#",
                        onClick: n,
                        "data-test-selector": P
                    }, s) : a.createElement("span", {
                        "data-test-selector": P,
                        "data-a-target": "pulse-reaction-count"
                    }, s)), this.state.additionalReactionsVisible || (d = a.createElement(y._43, {
                        label: Object(f.d)("Total Reactions", "ReactionList"),
                        direction: y._45.Top,
                        align: y._44.Center
                    }, d)), r = this.props.emoteSelectorAndOverflowPos && this.props.emoteSelectorAndOverflowPos === y.q.Bottom ? y.q.BottomLeft : y.q.TopLeft;
                    var l = null;
                    return this.props.isLoggedIn && (l = a.createElement(y._2, {
                        margin: {
                            right: 1
                        }
                    }, a.createElement(D, {
                        onEmoteSelect: this.addReaction,
                        position: r
                    }, a.createElement(y._15, {
                        asset: y._16.AddReaction,
                        type: y._17.Brand,
                        width: 24,
                        height: 24
                    })))), a.createElement(y._25, {
                        display: y.N.Flex,
                        alignItems: y.c.Center,
                        padding: 1
                    }, a.createElement(N, {
                        reactions: t.slice(0, L),
                        addReaction: this.addReaction,
                        removeReaction: this.removeReaction
                    }), a.createElement(y._2, {
                        margin: {
                            right: 1
                        }
                    }, l), a.createElement(y.W, {
                        position: y._9.Relative
                    }, a.createElement(g.a, {
                        onClickOut: this.hideAdditional
                    }, o, d)))
                }, t.contextTypes = {
                    feedTrackingProps: p.object
                }, t = u.__decorate([Object(v.a)(I, {
                    props: function(e) {
                        return {
                            addReaction: C(b.a.Add, e.ownProps.reactions, e.mutate)
                        }
                    }
                }), Object(v.a)(R, {
                    props: function(e) {
                        return {
                            removeReaction: C(b.a.Remove, e.ownProps.reactions, e.mutate)
                        }
                    }
                }), Object(_.d)("Reactions")], t)
            }(a.Component),
            A = Object(s.b)(function(e) {
                return {
                    isLoggedIn: Object(m.d)(e)
                }
            }, function(e) {
                return Object(d.b)({
                    login: function() {
                        return Object(c.f)(l.a.FeedReactionToggle)
                    }
                }, e)
            })(U),
            j = Object(_.d)("ClipContent", {
                autoReportInteractive: !0
            })(function(e) {
                var t = e.content,
                    n = t.slug,
                    i = t.reactions;
                return a.createElement(y._2, null, a.createElement(o.a, {
                    embed: e.content
                }), a.createElement(A, {
                    parentEntity: "clip:" + n,
                    reactions: i,
                    parent: e.content
                }))
            }),
            V = n("F8kA"),
            M = n("1jVX"),
            G = (n("MTWZ"), {
                Clip: j,
                Post: Object(_.d)("PostContent", {
                    autoReportInteractive: !0
                })(function(e) {
                    var t = e.content,
                        n = t.author,
                        i = t.body,
                        r = t.createdAt,
                        s = t.embeds,
                        d = t.id,
                        l = t.reactions;
                    return a.createElement(y._2, null, a.createElement(y._25, {
                        display: y.N.Flex,
                        alignItems: y.c.Center,
                        padding: 1,
                        borderBottom: !0
                    }, a.createElement(y._2, {
                        margin: {
                            right: 1
                        }
                    }, a.createElement(V.a, {
                        to: {
                            pathname: "/" + n.login,
                            state: {
                                content: "author_avatar",
                                medium: "pulse_card"
                            }
                        },
                        "data-a-target": "pulse-profile-picture"
                    }, a.createElement(y.l, {
                        size: 40,
                        src: n.profileImageURL,
                        alt: "User profile picture"
                    }))), a.createElement(y._2, {
                        flexGrow: 1
                    }, a.createElement(y._2, {
                        display: y.N.Flex,
                        flexDirection: y.P.Column
                    }, a.createElement(V.a, {
                        to: {
                            pathname: "/" + n.login,
                            state: {
                                content: "author_name",
                                medium: "pulse_card"
                            }
                        }
                    }, a.createElement(y._35, {
                        fontSize: y.R.Size4,
                        color: y.I.Base,
                        bold: !0
                    }, n.displayName)), a.createElement(V.a, {
                        to: "/" + n.login + "/p/" + d,
                        "data-a-target": "pulse-post-link"
                    }, a.createElement(y._43, {
                        label: function(e) {
                            return Object(f.d)("{dateTime, date, medium} {dateTime, time, short}", {
                                dateTime: e
                            }, "PostDate")
                        }(new Date(r)),
                        direction: y._45.Bottom
                    }, a.createElement(y._35, {
                        fontSize: y.R.Size6,
                        color: y.I.Alt2
                    }, Object(f.g)(new Date(r)))))))), i && a.createElement(y._25, {
                        padding: 1,
                        className: "feed-item-text"
                    }, Object(M.a)(i.content.trim(), i.emotes, n.login)), a.createElement(y._2, null, s && s.slice(0, 1).map(function(e, t) {
                        return a.createElement(o.a, {
                            key: t,
                            embed: e
                        })
                    })), a.createElement(A, {
                        parentEntity: "post:" + d,
                        reactions: l,
                        emoteSelectorAndOverflowPos: e.emoteSelectorAndOverflowPos,
                        parent: e.content
                    }))
                }),
                Video: Object(_.d)("VideoContent", {
                    autoReportInteractive: !0
                })(function(e) {
                    var t = e.content,
                        n = t.id,
                        i = t.reactions;
                    return a.createElement(y._2, null, a.createElement(o.a, {
                        embed: e.content
                    }), a.createElement(A, {
                        parentEntity: "vod:" + n,
                        reactions: i,
                        parent: e.content
                    }))
                }),
                Stream: function(e) {
                    return a.createElement(o.a, {
                        embed: e.content
                    })
                }
            }),
            B = function(e) {
                var t = G[e.content.__typename];
                return a.createElement(t, {
                    content: e.content,
                    emoteSelectorAndOverflowPos: e.emoteSelectorAndOverflowPos
                })
            };
        n.d(t, "b", function() {
            return r
        }), n.d(t, "a", function() {
            return B
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
        function i(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !a[t] && (a[t] = !0, !0)
            })
        }
        var r = {
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
        r.loc.source = {
            body: '#import "twilight/features/feed/models/clip-fragment.gql"\n#import "twilight/features/feed/models/video-fragment.gql"\nquery Feed_Embed($url: String!) {\nembed: feedEmbed(url: $url) {\n...feedItemClip\n...feedItemVideo\n... on PhotoOEmbed {\ntitle\ninputURL\nproviderName\nauthorName\nthumbnail {\nurl\n}\n}\n... on VideoOEmbed {\ntitle\ninputURL\nproviderName\nauthorName\nthumbnail {\nurl\n}\nhtml\n}\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var a = {};
        r.definitions = r.definitions.concat(i(n("I5q7").definitions)), r.definitions = r.definitions.concat(i(n("fWQn").definitions)), e.exports = r
    },
    bNhH: function(e, t, n) {
        "use strict";

        function i(e, t, n) {
            switch (t) {
                case r.AnonFront:
                    return o.createElement(l.a, {
                        items: e,
                        isLoading: n,
                        layout: c.c.Horizontal,
                        darkTheme: !0
                    });
                default:
                    return o.createElement(p._25, {
                        className: "featured-broadcasters",
                        background: p.m.Base,
                        elevation: 1
                    }, o.createElement(p._2, {
                        padding: 1
                    }, o.createElement(p._35, {
                        fontSize: p.R.Size5,
                        color: p.I.Alt2
                    }, Object(s.d)("Featured Broadcasters", "FeaturedBroadcastersComponent"))), o.createElement(l.a, {
                        items: e,
                        isLoading: n,
                        layout: c.c.Vertical
                    }))
            }
        }
        n.d(t, "b", function() {
            return r
        }), t.c = function(e) {
            return i([], e, !0)
        }, n.d(t, "a", function() {
            return g
        });
        var r, a = n("TToO"),
            o = n("U7vG"),
            s = (n.n(o), n("6sO2")),
            d = n("7vx8"),
            l = n("g91j"),
            c = n("WKwZ"),
            m = n("Xg86"),
            u = n("CSlQ"),
            p = n("Odds"),
            f = n("uckt");
        n.n(f);
        ! function(e) {
            e[e.AnonFront = 1] = "AnonFront", e[e.Front = 2] = "Front"
        }(r || (r = {}));
        var g = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.getRender = function(e) {
                    var n = !(!t.props.data.loading && !t.props.data.error);
                    return i(e, t.props.renderContext, n)
                }, t
            }
            return a.__extends(t, e), t.prototype.componentDidMount = function() {
                this.postRender()
            }, t.prototype.componentDidUpdate = function() {
                this.postRender()
            }, t.prototype.render = function() {
                var e = this.props.data.featuredStreams || [],
                    t = Object(m.a)(e);
                return this.getRender(t)
            }, t.prototype.postRender = function() {
                this.props.data && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
            }, t = a.__decorate([Object(d.a)(f, {
                options: function(e) {
                    return {
                        variables: {
                            language: s.n.intl.getLanguageCode(),
                            first: e.streamCount || 8
                        }
                    }
                }
            }), Object(u.d)("FeaturedBroadcasters")], t)
        }(o.Component)
    },
    cYgC: function(e, t, n) {
        "use strict";
        var i = n("U7vG"),
            r = n("6sO2"),
            a = n("TToO"),
            o = n("C/8M"),
            s = n("rzuL"),
            d = n("CSlQ"),
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
                        Object(s.a)(n, e)
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive(), this.props.impressionTracking.onImpression(this.onImpression)
                }, t.prototype.render = function() {
                    return Object(c.b)(this.props.item.content.__typename) ? i.createElement(l._25, a.__assign({
                        elevation: 1,
                        margin: {
                            bottom: 1
                        },
                        background: l.m.Base,
                        position: l._9.Relative
                    }, Object(l._53)(this.props), {
                        className: "feed-item"
                    }), i.createElement(l._2, {
                        position: l._9.Absolute,
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
                    })) : i.createElement(l._2, null)
                }, t = a.__decorate([Object(d.d)("FeedItem"), Object(o.d)(function(e) {
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
            }(i.Component),
            f = Object(d.d)("Feed")(function(e) {
                var t = function(e) {
                    var t = new Set;
                    return e.filter(function(e) {
                        var n = t.has(e.node.content.id);
                        return n || t.add(e.node.content.id), !n
                    })
                }(e.items.edges).filter(function(e) {
                    return e.node.content.id
                }).map(function(t, n) {
                    var r = t.node;
                    return i.createElement(p, {
                        key: r.content.id,
                        item: r,
                        index: n,
                        "data-a-target": "pulse-item-" + n,
                        deletePost: e.deletePost
                    })
                });
                return e.latencyTracking.reportInteractive(t.length), t.length ? i.createElement(l._2, null, t) : i.createElement(l._2, {
                    textAlign: l._36.Center
                }, i.createElement(l._35, {
                    color: l.I.Alt2
                }, Object(r.d)("There are no feed posts.", "ChannelFeedComponent")))
            });
        n.d(t, "a", function() {
            return f
        })
    },
    czpb: function(e, t, n) {
        "use strict";
        var i = n("6sO2"),
            r = n("Ejve"),
            a = n("MSvX");
        t.a = function(e) {
            return i.b.get(a.a, !1) || i.a.buildType !== r.a.Production ? "string" == typeof e ? e : e.pathname || "" : "string" == typeof e ? o + e : o + e.pathname
        }, t.b = function() {
            return !i.b.get(a.a, !1) && i.a.buildType === r.a.Production
        };
        var o = "https://www.twitch.tv"
    },
    dQj3: function(e, t, n) {
        "use strict";

        function i(e) {
            var t = [];
            return e.forEach(function(e) {
                t[e.from] = {
                    startIndex: e.from,
                    endIndex: e.to + 1,
                    data: {
                        images: {
                            themed: !1,
                            sources: {
                                "1x": Object(s.e)(e.emoteID, 1),
                                "2x": Object(s.e)(e.emoteID, 2),
                                "4x": Object(s.e)(e.emoteID, 4)
                            }
                        }
                    }
                }
            }), t
        }
        t.b = i, t.a = function(e, t, n) {
            var l = i(e.body.emotes),
                c = e.badges.reduce(function(e, t) {
                    return e[t.setID] = t.version, e
                }, {});
            return {
                type: o.a.Post,
                id: e.id,
                badges: c,
                bits: e.bitsUsed,
                timestamp: 0,
                deleted: !1,
                user: r.__assign({
                    userID: e.author.id,
                    userLogin: e.author.login,
                    userType: a.a.User,
                    color: e.authorColor
                }, Object(d.a)(e.authorName, e.author.login)),
                messageParts: Object(s.f)(e.body.content, l, e.bitsUsed, t, n, e.authorName)
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
        var r = n("TToO"),
            a = n("6Agf"),
            o = n("qkCi"),
            s = n("l21v"),
            d = n("e1CU")
    },
    e2wA: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Current_User"
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
                                    value: "hasPrime"
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
                end: 50
            }
        };
        n.loc.source = {
            body: "query Current_User {\ncurrentUser {\nid\nhasPrime\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    eY4D: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Prime_PrimeOfferList_PrimeOffers"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "dateOverride"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Time"
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
                            value: "primeOffers"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "dateOverride"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "dateOverride"
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
                                    value: "claimInstructions"
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
                                    value: "deliveryMethod"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "priority"
                                },
                                arguments: [],
                                directives: []
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
                                            value: "externalURL"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "publisher"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "categories"
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
                                            value: "hasEntitlement"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "claimData"
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
                end: 276
            }
        };
        n.loc.source = {
            body: "query Prime_PrimeOfferList_PrimeOffers($dateOverride: Time) {\nprimeOffers(dateOverride: $dateOverride) {\nid\ntitle\nimageURL\nclaimInstructions\ndescription\ndeliveryMethod\npriority\ncontent {\ngame {\nid\nname\n}\nexternalURL\npublisher\ncategories\n}\nself {\nhasEntitlement\nclaimData\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    el3o: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "claimPrimeOffer"
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
                                value: "ClaimPrimeOfferInput"
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
                            value: "claimPrimeOffer"
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
                                            value: "claimData"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "hasEntitlement"
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
                end: 128
            }
        };
        n.loc.source = {
            body: "mutation claimPrimeOffer($input: ClaimPrimeOfferInput!) {\nclaimPrimeOffer(input: $input) {\nself {\nclaimData\nhasEntitlement\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    f8UT: function(e, t) {},
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
        var r = {};
        i.definitions = i.definitions.concat(function(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !r[t] && (r[t] = !0, !0)
            })
        }(n("Lq4d").definitions)), e.exports = i
    },
    g91j: function(e, t, n) {
        "use strict";

        function i(e) {
            switch (e.type) {
                case g.b.Stream:
                    return u.createElement(N.c, {
                        channelLogin: e.id,
                        vodID: "",
                        disableTheatreButton: !0,
                        playerTypeOverride: N.b.Frontpage,
                        onInit: e.onPlayerInit,
                        onDestroy: e.onPlayerDestroy
                    });
                case g.b.Vod:
                    return u.createElement(N.c, {
                        channelLogin: "",
                        vodID: e.id,
                        disableTheatreButton: !0,
                        playerTypeOverride: N.b.Frontpage,
                        onInit: e.onPlayerInit,
                        onDestroy: e.onPlayerDestroy,
                        onVideoTimeChange: e.onVideoTimeChange
                    });
                default:
                    return null
            }
        }

        function r(e) {
            s.m.track(R.SpadeEventType.FrontPageCarouselNavButtonClick, {
                direction: e
            })
        }
        var a, o = n("TToO"),
            s = n("6sO2"),
            d = n("/7C1");
        s.n.store.registerReducer("carouselPlayer", function(e, t) {
            switch (void 0 === e && (e = {
                isPlayerInitialized: !1
            }), t.type) {
                case d.b:
                    return a = t.player, o.__assign({}, e, {
                        isPlayerInitialized: !0
                    });
                case d.c:
                    return a = null, o.__assign({}, e, {
                        isPlayerInitialized: !1
                    });
                case d.a:
                    return e.isPlayerInitialized && a && a.pause(), e;
                default:
                    return e
            }
        });
        var l = n("RH2O"),
            c = n("2KeS"),
            m = n("HW6M"),
            u = n("U7vG"),
            p = n("NXs7"),
            f = n("VAT8"),
            g = n("WKwZ"),
            v = n("CSlQ"),
            h = n("Odds"),
            k = (n("TUg1"), "carousel-card-live"),
            b = "carousel-card-vod",
            _ = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderIndicator = function() {
                        return t.props.item.content.type === g.b.Stream ? u.createElement(h.E, {
                            status: h.G.Live,
                            size: h.F.Small,
                            "data-test-selector": k
                        }) : u.createElement(h._15, {
                            asset: h._16.GlyphViews,
                            "data-test-selector": b
                        })
                    }, t.itemClick = function() {
                        t.props.itemClick(t.props.item)
                    }, t
                }
                return o.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = m({
                        "carousel-nav__item": !0,
                        "carousel-nav__item--active": this.props.itemActive
                    });
                    return u.createElement(h._2, {
                        className: e,
                        margin: {
                            x: .5
                        },
                        padding: {
                            bottom: .5
                        },
                        flexGrow: 1,
                        position: h._9.Relative
                    }, u.createElement(h._43, {
                        label: (this.props.item.isSponsored ? Object(s.d)("Sponsored", "CarouselCardComponent") : "") + " " + this.props.item.broadcaster.displayName,
                        direction: h._45.Top,
                        display: h.N.Block
                    }, u.createElement(h._0, o.__assign({
                        onClick: this.itemClick
                    }, Object(h._53)(this.props)), u.createElement(h.j, {
                        ratio: h.k.Aspect16x9
                    }, u.createElement(h._2, {
                        className: "carousel-nav__meta",
                        alignItems: h.c.Center,
                        attachBottom: !0,
                        margin: {
                            left: .5
                        },
                        zIndex: h._52.Above
                    }, this.renderIndicator(), u.createElement(h._2, {
                        display: h.N.InlineFlex,
                        margin: {
                            left: .5
                        }
                    }, u.createElement(h._35, {
                        color: h.I.Overlay,
                        type: h._40.Span
                    }, Object(s.e)(this.props.item.content.viewersCount)))), u.createElement(h._2, {
                        className: "carousel-nav__img-container"
                    }, u.createElement("img", {
                        className: "carousel-nav__img",
                        "data-content-id": this.props.item.content.id,
                        src: this.props.item.imageURL,
                        alt: this.props.item.broadcaster.displayName,
                        "data-a-target": "carousel-image"
                    }), this.props.item.isSponsored ? u.createElement(h._2, {
                        position: h._9.Absolute,
                        attachRight: !0,
                        attachTop: !0
                    }, u.createElement(h._15, {
                        asset: h._16.Featured,
                        type: h._17.Brand,
                        width: 20,
                        height: 20
                    })) : "")))))
                }, t = o.__decorate([Object(v.d)("CarouselCard")], t)
            }(u.Component),
            y = n("lfvs"),
            E = n("F8kA"),
            S = n("SZoP"),
            N = n("fc0G"),
            O = (n("i6UE"), {
                content: "carousel",
                medium: "twitch_home"
            }),
            C = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.getContentRender = function() {
                        var e = m("horizontal-carousel-player__details", {
                                "horizontal-carousel-player__details--overlay": t.props.darkTheme
                            }),
                            n = Object(s.d)("playing {game}", {
                                game: u.createElement(E.a, {
                                    to: {
                                        pathname: "/directory/game/" + t.props.item.content.gameName,
                                        state: O
                                    }
                                }, t.props.item.content.gameName)
                            }, "HorizontalCarouselPlayer"),
                            r = {
                                type: t.props.item.content.type,
                                id: t.props.item.content.id,
                                onPlayerInit: t.props.onPlayerInit,
                                onPlayerDestroy: t.props.onPlayerDestroy,
                                onVideoTimeChange: t.onVideoTimeChange
                            };
                        return u.createElement(h._25, {
                            className: "horizontal-carousel-player",
                            margin: {
                                bottom: 2
                            },
                            display: h.N.Flex,
                            flexDirection: h.P.Row,
                            color: h.I.Alt
                        }, u.createElement(h._2, {
                            flexGrow: 1,
                            flexShrink: 0
                        }, u.createElement(h._2, {
                            className: "horizontal-carousel-player__video",
                            position: h._9.Relative,
                            overflow: h._5.Hidden
                        }, i(r))), u.createElement(h._2, {
                            className: e,
                            flexGrow: 0,
                            padding: 2
                        }, u.createElement(h._2, {
                            display: h.N.Flex,
                            flexWrap: h.Q.NoWrap,
                            textAlign: h._36.Left,
                            alignItems: h.c.Center,
                            padding: {
                                bottom: .5
                            }
                        }, u.createElement(h._2, {
                            margin: {
                                right: 1
                            },
                            flexShrink: 0
                        }, u.createElement("span", {
                            onClick: t.promotionCardClick.bind(t, "thumbnail")
                        }, u.createElement(E.a, {
                            to: {
                                pathname: "/" + t.props.item.broadcaster.login,
                                state: O
                            },
                            "data-a-target": "carousel-profile-image"
                        }, u.createElement(h.l, {
                            src: t.props.item.broadcaster.profileImageURL,
                            alt: Object(s.d)("Profile Picture for {login}", {
                                login: t.props.item.broadcaster.login
                            }, "HorizontalCarouselPlayer"),
                            size: 40
                        })))), u.createElement(h._2, {
                            margin: {
                                right: 1
                            },
                            flexGrow: 1
                        }, u.createElement(h._35, {
                            fontSize: h.R.Size4,
                            color: h.I.Base,
                            lineHeight: h._3.Heading,
                            "data-a-target": "carousel-broadcaster-displayname"
                        }, Object(S.a)(t.props.item.broadcaster.login, t.props.item.broadcaster.displayName)), u.createElement(h._35, {
                            fontSize: h.R.Size6,
                            color: h.I.Base,
                            "data-a-target": "carousel-user-playing-message"
                        }, u.createElement("span", {
                            onClick: t.promotionCardClick.bind(t, "game_name")
                        }, n)))), u.createElement(h._2, {
                            margin: {
                                y: 1
                            }
                        }, u.createElement("span", {
                            onClick: t.promotionCardClick.bind(t, "stream_title")
                        }, u.createElement(E.a, {
                            to: t.getLinkForTitle()
                        }, u.createElement(h._35, {
                            type: h._40.Span,
                            "data-a-target": g.a,
                            fontSize: h.R.Size3,
                            lineHeight: h._3.Heading
                        }, t.props.item.title)))), u.createElement(y, {
                            source: t.props.item.description || ""
                        })))
                    }, t.getLinkForTitle = function() {
                        if (t.props.item.content.type === g.b.Stream) return {
                            pathname: "/" + t.props.item.broadcaster.login,
                            state: O
                        };
                        var e = t.state ? t.state.videoOffset || 0 : 0;
                        return {
                            pathname: "/videos/" + t.props.item.content.id + "?t=" + e,
                            state: O
                        }
                    }, t.getPlaceholderRender = function() {
                        var e = m("horizontal-carousel-player__details", {
                            "horizontal-carousel-player__details--overlay": t.props.darkTheme
                        });
                        return u.createElement(h._2, {
                            display: h.N.Flex,
                            flexWrap: h.Q.NoWrap,
                            flexShrink: 0,
                            margin: {
                                bottom: 2
                            }
                        }, u.createElement(h._2, {
                            flexGrow: 1,
                            flexShrink: 1,
                            fullWidth: !0
                        }, u.createElement(h.j, {
                            ratio: h.k.Aspect16x9
                        }, u.createElement(h._8, {
                            "data-test-selector": "carousel-player-placeholder"
                        }))), u.createElement(h._2, {
                            className: m(e),
                            flexGrow: 0,
                            flexShrink: 0,
                            padding: 2
                        }, u.createElement(h._2, {
                            display: h.N.Flex,
                            flexWrap: h.Q.NoWrap,
                            textAlign: h._36.Left,
                            alignItems: h.c.Start
                        }, u.createElement(h._2, {
                            margin: {
                                right: 1
                            },
                            flexShrink: 0
                        }, u.createElement(h._8, {
                            width: 40,
                            height: 40
                        })), u.createElement(h._2, {
                            margin: {
                                right: 1
                            },
                            flexGrow: 1
                        }, u.createElement(h._35, null, u.createElement(h._8, {
                            width: 70
                        })), u.createElement(h._35, null, u.createElement(h._8, {
                            width: 70
                        })))), u.createElement(h._2, {
                            margin: {
                                y: 1
                            }
                        }, u.createElement(h._35, null, u.createElement(h._8, {
                            lineCount: 1
                        })), u.createElement(h._35, null, u.createElement(h._8, {
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
                return o.__extends(t, e), t.prototype.componentWillUpdate = function(e) {
                    e.item !== this.props.item && this.props.onPromotionCardView(e.item)
                }, t.prototype.render = function() {
                    return this.props.item ? this.getContentRender() : this.getPlaceholderRender()
                }, t
            }(u.Component),
            w = n("hdYS"),
            F = (n("0v28"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.getContentRender = function() {
                        var e = m("vertical-carousel-player__details", {
                                "vertical-carousel-player__details--overlay": t.props.darkTheme
                            }),
                            n = Object(s.d)("{login} playing {game}", {
                                login: u.createElement("span", {
                                    onClick: t.promotionCardClick.bind(t, "display_name")
                                }, u.createElement(E.a, {
                                    to: "/" + t.props.item.broadcaster.login,
                                    "data-a-target": "carousel-broadcaster-displayname"
                                }, Object(S.a)(t.props.item.broadcaster.login, t.props.item.broadcaster.displayName))),
                                game: u.createElement("span", {
                                    onClick: t.promotionCardClick.bind(t, "game_name")
                                }, u.createElement(E.a, {
                                    to: "/directory/game/" + t.props.item.content.gameName,
                                    "data-a-target": "carousel-broadcaster-game-name"
                                }, t.props.item.content.gameName))
                            }, "VerticalCarouselPlayer"),
                            r = {
                                type: t.props.item.content.type,
                                id: t.props.item.content.id,
                                onPlayerInit: t.props.onPlayerInit,
                                onPlayerDestroy: t.props.onPlayerDestroy
                            };
                        return u.createElement(h._25, {
                            className: "vertical-carousel-player",
                            padding: {
                                bottom: 1,
                                x: 1
                            },
                            color: h.I.Alt
                        }, u.createElement(h._2, {
                            className: "vertical-carousel-player__video",
                            position: h._9.Relative,
                            overflow: h._5.Hidden
                        }, i(r)), u.createElement(h._2, {
                            className: m(e),
                            display: h.N.Flex,
                            flexWrap: h.Q.NoWrap,
                            textAlign: h._36.Left,
                            alignItems: h.c.Center,
                            padding: {
                                y: 1
                            }
                        }, u.createElement(h._2, {
                            margin: {
                                right: 1
                            },
                            flexShrink: 0
                        }, u.createElement("span", {
                            onClick: t.promotionCardClick.bind(t, "thumbnail")
                        }, u.createElement(E.a, {
                            to: "/" + t.props.item.broadcaster.login,
                            "data-a-target": "carousel-avatar-link"
                        }, u.createElement(h.l, {
                            src: t.props.item.broadcaster.profileImageURL,
                            alt: Object(s.d)("Profile Picture for {login}", {
                                login: t.props.item.broadcaster.login
                            }, "VerticalCarouselPlayer"),
                            size: 40
                        })))), u.createElement(h._2, {
                            margin: {
                                right: 1
                            },
                            flexGrow: 1
                        }, u.createElement(h._35, {
                            "data-a-target": g.a,
                            fontSize: h.R.Size5,
                            color: h.I.Base,
                            bold: !0
                        }, t.props.item.title), u.createElement(h._35, {
                            fontSize: h.R.Size6,
                            color: h.I.Base
                        }, n)), u.createElement(h._2, {
                            flexShrink: 0
                        }, t.props.firstPageLoaded ? u.createElement(w.a, {
                            showLoadingPlaceholder: !0,
                            channelLogin: t.props.item.broadcaster.login,
                            "data-a-target": "carousel-follow-button"
                        }) : u.createElement(h._8, {
                            width: 70,
                            height: 30
                        }))), u.createElement(y, {
                            source: t.props.item.description || ""
                        }))
                    }, t.getPlaceholderRender = function() {
                        return u.createElement(h._2, {
                            padding: {
                                bottom: 1,
                                x: 1
                            }
                        }, u.createElement(h.j, {
                            ratio: h.k.Aspect16x9
                        }, u.createElement(h._8, {
                            "data-test-selector": "carousel-player-placeholder"
                        })), u.createElement(h._2, {
                            display: h.N.Flex,
                            flexWrap: h.Q.NoWrap,
                            textAlign: h._36.Left,
                            alignItems: h.c.Center,
                            padding: {
                                y: 1
                            }
                        }, u.createElement(h._2, {
                            margin: {
                                right: 1
                            },
                            flexShrink: 0
                        }, u.createElement(h._8, {
                            width: 40,
                            height: 40
                        })), u.createElement(h._2, {
                            margin: {
                                right: 1
                            },
                            flexGrow: 1
                        }, u.createElement(h._35, null, u.createElement(h._8, {
                            width: 150
                        })), u.createElement(h._35, null, u.createElement(h._8, {
                            width: 100
                        }))), u.createElement(h._2, {
                            flexShrink: 0
                        }, u.createElement(h._8, {
                            width: 70,
                            height: 30
                        }))), u.createElement(h._35, null, u.createElement(h._8, {
                            lineCount: 3
                        })))
                    }, t.promotionCardClick = function(e) {
                        t.props.onPromotionCardClick(t.props.item, e)
                    }, t
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    return this.props.item ? this.getContentRender() : this.getPlaceholderRender()
                }, t
            }(u.Component)),
            I = Object(l.b)(function(e) {
                return {
                    firstPageLoaded: e.session.firstPageLoaded
                }
            })(F),
            R = n("vH/s"),
            T = (n("0OPT"), 6),
            D = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        activeItem: t.props.items[0],
                        startingIndex: 0
                    }, t.displayEventFired = !1, t.renderLeftButton = function() {
                        if (t.props.items.length > T) {
                            var e = t.state.startingIndex > 0;
                            return u.createElement(h._2, {
                                display: h.N.Flex,
                                alignItems: h.c.Stretch
                            }, u.createElement(h.v, {
                                ariaLabel: Object(s.d)("Page Left", "CarouselPlayerComponent"),
                                icon: h._16.AngleLeft,
                                onClick: t.handlePageLeft,
                                "data-test-selector": g.d,
                                disabled: !e
                            }))
                        }
                        return null
                    }, t.renderRightButton = function() {
                        if (t.props.items.length > T) {
                            var e = t.props.items.length > t.state.startingIndex + T;
                            return u.createElement(h._2, {
                                display: h.N.Flex,
                                alignItems: h.c.Stretch
                            }, u.createElement(h.v, {
                                ariaLabel: Object(s.d)("Page Right", "CarouselPlayerComponent"),
                                icon: h._16.AngleRight,
                                onClick: t.handlePageRight,
                                "data-test-selector": g.e,
                                disabled: !e
                            }))
                        }
                        return null
                    }, t.getCardsRender = function() {
                        if (t.state.activeItem) {
                            t.displayEventFired || (! function(e) {
                                var t = {};
                                e.forEach(function(e, n) {
                                    t["carousel_slot_" + n + "_channel"] = e.broadcaster.login, t["carousel_slot_" + n + "_priority"] = e.priorityLevel, t["carousel_slot_" + n + "_game"] = e.content.gameName, t["carousel_slot_" + n + "_ccu"] = e.content.viewersCount, t["carousel_slot_" + n + "_type"] = e.content.subType
                                }), s.m.track(R.SpadeEventType.FrontPageCarouselDisplay, t)
                            }(t.props.items), t.displayEventFired = !0);
                            return t.props.items.slice(t.state.startingIndex, t.state.startingIndex + T).map(function(e, n) {
                                return u.createElement(_, {
                                    key: e.content.id,
                                    item: e,
                                    itemClick: t.selectContent,
                                    itemActive: e.content.id === t.state.activeItem.content.id,
                                    "data-a-target": "carousel-card-" + n
                                })
                            })
                        }
                        for (var e = [], n = 0; n < T; n++) e.push(u.createElement(h._2, {
                            key: n,
                            margin: {
                                x: .5
                            },
                            flexGrow: 1
                        }, u.createElement(h.j, {
                            ratio: h.k.Aspect16x9
                        }, u.createElement(h._8, null)), u.createElement(h._2, {
                            margin: {
                                top: .5
                            }
                        }, u.createElement(h._8, {
                            height: 4
                        }))));
                        return e
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
                            case g.c.Vertical:
                                return u.createElement(I, o.__assign({}, e));
                            default:
                                return u.createElement(C, o.__assign({}, e))
                        }
                    }, t.registerCarousel = function(e) {
                        t.props.registerCarousel && t.props.registerCarousel(e)
                    }, t.unregisterCarousel = function() {
                        t.props.unregisterCarousel && t.props.unregisterCarousel()
                    }, t.selectContent = function(e) {
                        t.setState({
                            activeItem: e
                        });
                        ! function(e) {
                            s.m.track(R.SpadeEventType.FrontPageCarouselClick, e)
                        }({
                            broadcast_type: e.content.subType,
                            carousel_index: t.props.items.indexOf(e),
                            channel: e.broadcaster.login,
                            game: e.content.gameName,
                            promotion_was_scheduled: e.isScheduled,
                            views: e.content.viewersCount
                        })
                    }, t.trackPromotionClick = function(e, n) {
                        var i = e.broadcaster,
                            r = e.content,
                            a = e.isScheduled;
                        ! function(e, t) {
                            var n = o.__assign({
                                clicked_element: t
                            }, e);
                            s.m.track(R.SpadeEventType.FrontPageCarouselPromotionCardClick, n)
                        }({
                            broadcast_type: r.subType,
                            carousel_index: t.props.items.indexOf(t.state.activeItem),
                            channel: i.displayName,
                            game: r.gameName,
                            promotion_was_scheduled: a,
                            views: r.viewersCount
                        }, n)
                    }, t.trackPromotionView = function(e) {
                        ! function(e) {
                            s.m.track(R.SpadeEventType.FrontPageCarouselPromotionCardView, e)
                        }({
                            broadcast_type: e.content.subType,
                            carousel_index: t.props.items.indexOf(e),
                            channel: e.broadcaster.login,
                            game: e.content.gameName,
                            promotion_was_scheduled: e.isScheduled,
                            views: e.content.viewersCount
                        })
                    }, t.handlePageRight = function() {
                        var e = t.props.items.length - T;
                        e !== t.state.startingIndex && (r("next"), t.setState({
                            startingIndex: e
                        }))
                    }, t.handlePageLeft = function() {
                        t.state.startingIndex > 0 && (r("prev"), t.setState({
                            startingIndex: 0
                        }))
                    }, t
                }
                return o.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillUpdate = function(e) {
                    !this.state.activeItem && e.items.length > 0 && this.setState({
                        activeItem: e.items[0]
                    })
                }, t.prototype.render = function() {
                    var e;
                    return this.props.darkTheme && (e = Object(f.c)(p.a.Dark)), u.createElement(h._2, {
                        className: m("carousel-player", e)
                    }, this.getLayoutRender(), u.createElement(h._25, {
                        background: h.m.Alt
                    }, u.createElement(h._2, {
                        display: h.N.Flex,
                        flexWrap: h.Q.NoWrap,
                        padding: {
                            x: .5,
                            y: 1
                        }
                    }, this.renderLeftButton(), this.getCardsRender(), this.renderRightButton())))
                }, t = o.__decorate([Object(v.d)("CarouselPlayer")], t)
            }(u.Component),
            P = Object(l.b)(null, function(e) {
                return Object(c.b)({
                    registerCarousel: d.e,
                    unregisterCarousel: d.f
                }, e)
            })(D);
        n.d(t, "a", function() {
            return P
        })
    },
    i6UE: function(e, t) {},
    "j7/Y": function(e, t, n) {
        "use strict";

        function i(e) {
            return function(t) {
                var n = function(n) {
                    function i(t) {
                        var i = n.call(this, t) || this;
                        return i.tracked = !1, i.referenceTracking = {}, i.trackPageview = function() {
                            if (!(i.tracked || e.skip && e.skip(i.props))) {
                                i.tracked = !0;
                                var t = {};
                                "function" == typeof e.properties ? t = e.properties(i.props) : e.properties && (t = r.__assign({}, e.properties));
                                var n = r.__assign({}, i.props);
                                n.location && n.location.state && (t.medium = n.location.state.medium, t.content = n.location.state.content, t.content_index = n.location.state.content_index);
                                var a = i.referenceTracking,
                                    o = a.content,
                                    s = a.medium,
                                    l = a.content_index;
                                d.n.tracking.trackPageview(r.__assign({
                                    content: o,
                                    medium: s,
                                    content_index: l,
                                    location: e.location
                                }, t))
                            }
                        }, d.i.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : d.i.warn("No latency tracker exists! This means no data will be sent to Spade.", e), i
                    }
                    return r.__extends(i, n), i.prototype.componentDidMount = function() {
                        var e = this;
                        this.referenceTracking = this.stripTTParams(this.props.history.location), this.trackPageview(), this.props.history.listen(function(t, n) {
                            "REPLACE" !== n && (e.tracked = !1, e.referenceTracking = {})
                        })
                    }, i.prototype.componentDidUpdate = function() {
                        this.trackPageview()
                    }, i.prototype.render = function() {
                        return o.createElement(t, r.__assign({}, this.props))
                    }, i.prototype.stripTTParams = function(e) {
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
                    }, i
                }(o.Component);
                return Object(s.f)(n)
            }
        }
        var r = n("TToO"),
            a = n("OAwv"),
            o = n("U7vG"),
            s = n("F8kA"),
            d = n("6sO2");
        n.d(t, "a", function() {
            return i
        })
    },
    jPY3: function(e, t) {},
    kaF0: function(e, t) {},
    kuCN: function(e, t) {},
    mi6k: function(e, t, n) {
        "use strict";

        function i(e, t) {
            return (t -= e.toString().length) > 0 ? new Array(t + (/\./.test(e.toString()) ? 2 : 1)).join("0") + e : e.toString()
        }
        t.a = function(e, t) {
            var n = Math.floor(e % 60),
                r = Math.floor(e % 3600 / 60),
                a = Math.floor(e / 3600);
            return t && t.zeroPadAll ? i(a, 2) + ":" + i(r, 2) + ":" + i(n, 2) : a ? a + ":" + i(r, 2) + ":" + i(n, 2) : r + ":" + i(n, 2)
        }
    },
    nFc2: function(e, t) {},
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
        var r = {};
        i.definitions = i.definitions.concat(function(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !r[t] && (r[t] = !0, !0)
            })
        }(n("S0OZ").definitions)), e.exports = i
    },
    qVoH: function(e, t, n) {
        "use strict";

        function i(e) {
            return e.__typename === O
        }
        var r = n("TToO"),
            a = n("RH2O"),
            o = n("2KeS"),
            s = n("+xm8"),
            d = n("V5M+"),
            l = n("f2i/"),
            c = n("Aj/L"),
            m = n("oSFp"),
            u = n("KSGD"),
            p = n("U7vG"),
            f = n("6sO2"),
            g = n("rCmJ"),
            v = n("C/8M"),
            h = n("rzuL"),
            k = n("CSlQ"),
            b = n("mw/a"),
            _ = n("Odds"),
            y = n("CX2/"),
            E = (n("BLXQ"), "delete"),
            S = "delete-confirm",
            N = "report",
            O = "Post",
            C = function(e) {
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
                                Object(h.d)(e, n.context.feedTrackingProps)
                            })
                        }
                    }, n.getDeleteConfirmView = function() {
                        return p.createElement(_._2, {
                            padding: 1
                        }, p.createElement(_._0, {
                            onClick: n.deletePost
                        }, p.createElement(_._2, {
                            padding: {
                                y: .5,
                                x: 1
                            },
                            className: S
                        }, Object(f.d)("Yes", "FeedItemOptions"))), p.createElement(_._0, {
                            onClick: n.showOptionView
                        }, p.createElement(_._2, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, Object(f.d)("No", "FeedItemOptions"))))
                    }, n.getDeleteEl = function() {
                        var e = null;
                        return n.state.userCanDelete && n.props.deletePost && (e = p.createElement(_._0, {
                            onClick: n.showDeleteConfirmView
                        }, p.createElement(_._2, {
                            className: E,
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, Object(f.d)("Delete", "FeedItemOptions")))), e
                    }, n.getOptionView = function() {
                        return n.state.loadingPermissions ? null : p.createElement(_._2, {
                            padding: 1
                        }, p.createElement(_._0, {
                            onClick: n.showReportModal,
                            "data-a-target": "pulse-post-report"
                        }, p.createElement(_._2, {
                            padding: {
                                y: .5,
                                x: 1
                            },
                            className: N
                        }, Object(f.d)("Report", "FeedItemOptions"))), n.getDeleteEl())
                    }, n.getPostPermissions = function() {
                        return r.__awaiter(n, void 0, void 0, function() {
                            var e, t, n;
                            return r.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return this.setState({
                                            loadingPermissions: !0
                                        }), e = this.props.content.id.split(":"), [4, f.n.apollo.client.query({
                                            query: y,
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
                            title: Object(f.d)("Report {itemType}", {
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
                        }), !1 === n.state.userCanDelete && i(n.props.content) && !n.state.permissionQueryData && n.getPostPermissions()
                    };
                    var a = !1,
                        o = t.content,
                        s = t.deletePost,
                        d = t.user;
                    return s && d && i(o) && d.id === o.author.id && (a = !0), n.state = {
                        loadingPermissions: !1,
                        permissionQueryData: void 0,
                        showDeleteConfirmView: !1,
                        showOptionView: !1,
                        userCanDelete: a
                    }, n
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = null;
                    return (this.state.showDeleteConfirmView || this.state.showOptionView && !this.state.loadingPermissions) && (e = p.createElement(_.p, {
                        direction: _.q.Left,
                        size: _.r.Small,
                        show: !0
                    }, this.state.showOptionView && this.getOptionView(), this.state.showDeleteConfirmView && this.getDeleteConfirmView())), p.createElement(_._2, {
                        position: _._9.Relative
                    }, p.createElement(g.a, {
                        onClickOut: this.closeViews
                    }, e, p.createElement("div", {
                        className: this.state.showOptionView || this.state.showDeleteConfirmView ? "button-icon--show" : "button-icon"
                    }, p.createElement(_.v, {
                        icon: _._16.Gear,
                        ariaLabel: Object(f.d)("Post Options", "FeedPostOptions"),
                        onClick: this.toggleOptionView,
                        "data-a-target": "pulse-post-options"
                    }))))
                }, t.prototype.getReportContext = function(e) {
                    switch (e.__typename) {
                        case "Clip":
                            var t = e;
                            return {
                                contentType: b.a.Clip,
                                targetUserID: t.broadcaster.id,
                                contentID: t.id
                            };
                        case O:
                            var n = e;
                            return {
                                contentType: b.a.ChannelFeedPost,
                                targetUserID: n.author.id,
                                contentID: n.id
                            };
                        case "Stream":
                            var i = e;
                            return {
                                contentType: b.a.User,
                                targetUserID: i.broadcaster.id
                            };
                        case "Video":
                            var r = e;
                            return {
                                contentType: b.a.Vod,
                                targetUserID: r.owner.id,
                                contentID: r.id
                            };
                        default:
                            return {
                                contentType: b.a.User,
                                targetUserID: ""
                            }
                    }
                }, t.contextTypes = {
                    feedTrackingProps: u.object
                }, t = r.__decorate([Object(k.d)("FeedItemOptions")], t)
            }(p.Component),
            w = Object(a.b)(function(e) {
                return {
                    user: Object(c.c)(e)
                }
            }, function(e) {
                return Object(o.b)({
                    showReportUserModal: function(e) {
                        var t = r.__rest(e, []);
                        return Object(d.d)(m.a, t)
                    },
                    login: function() {
                        return Object(l.f)(s.a.FeedReactionToggle)
                    }
                }, e)
            })(C);
        n.d(t, "a", function() {
            return w
        })
    },
    qkCi: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var i;
        ! function(e) {
            e[e.Post = 0] = "Post", e[e.Action = 1] = "Action", e[e.PostWithMention = 2] = "PostWithMention", e[e.Ban = 3] = "Ban", e[e.Timeout = 4] = "Timeout", e[e.AutoModRejectedPrompt = 5] = "AutoModRejectedPrompt", e[e.AutoModMessageRejected = 6] = "AutoModMessageRejected", e[e.AutoModMessageAllowed = 7] = "AutoModMessageAllowed", e[e.AutoModMessageDenied = 8] = "AutoModMessageDenied", e[e.Connected = 9] = "Connected", e[e.Disconnected = 10] = "Disconnected", e[e.Reconnect = 11] = "Reconnect", e[e.Hosting = 12] = "Hosting", e[e.Unhost = 13] = "Unhost", e[e.Subscription = 14] = "Subscription", e[e.Resubscription = 15] = "Resubscription", e[e.SubGift = 16] = "SubGift", e[e.Clear = 17] = "Clear", e[e.SubscriberOnlyMode = 18] = "SubscriberOnlyMode", e[e.FollowerOnlyMode = 19] = "FollowerOnlyMode", e[e.SlowMode = 20] = "SlowMode", e[e.EmoteOnlyMode = 21] = "EmoteOnlyMode", e[e.RoomMods = 22] = "RoomMods", e[e.RoomState = 23] = "RoomState", e[e.Raid = 24] = "Raid", e[e.Unraid = 25] = "Unraid", e[e.Ritual = 26] = "Ritual", e[e.Notice = 27] = "Notice", e[e.Info = 28] = "Info", e[e.BadgesUpdated = 29] = "BadgesUpdated", e[e.Purchase = 30] = "Purchase", e[e.BitsCharity = 31] = "BitsCharity", e[e.CrateGift = 32] = "CrateGift"
        }(i || (i = {}))
    },
    rM0q: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Current_User"
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
                                    value: "hasPrime"
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
                end: 50
            }
        };
        n.loc.source = {
            body: "query Current_User {\ncurrentUser {\nid\nhasPrime\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
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
        var r = {};
        i.definitions = i.definitions.concat(function(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !r[t] && (r[t] = !0, !0)
            })
        }(n("Lq4d").definitions)), e.exports = i
    },
    rzuL: function(e, t, n) {
        "use strict";
        var i = n("vH/s"),
            r = n("LUP9"),
            a = n("6hXa"),
            o = function(e, t) {
                var n = s(e);
                Object(a.c)(i.SpadeEventType.FeedCardImpression, n, t)
            },
            s = function(e) {
                var t = e.item.reasons[0] ? Object(r.b)(e.item.reasons[0].reason) : "";
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
            d = n("TWJL"),
            l = function(e, t) {
                var n = c(e.embed);
                Object(a.c)(i.SpadeEventType.FeedCardEmbedImpression, n, t)
            },
            c = function(e) {
                switch (e.__typename) {
                    case "Clip":
                        var t = e;
                        return {
                            embed_entity: d.a + ":" + t.id,
                            embed_id: t.id,
                            embed_type: d.a,
                            media_type: "video"
                        };
                    case "PhotoOEmbed":
                        var n = e;
                        return {
                            embed_entity: d.b + ":" + n.inputURL,
                            embed_id: n.inputURL,
                            embed_type: d.b,
                            media_type: "photo"
                        };
                    case "Stream":
                        var i = e;
                        return {
                            embed_entity: d.d + ":" + i.id,
                            embed_id: i.id,
                            embed_type: d.d,
                            media_type: "video"
                        };
                    case "Video":
                        var r = e;
                        return {
                            embed_entity: d.e + ":" + r.id,
                            embed_id: r.id,
                            embed_type: d.e,
                            media_type: "video"
                        };
                    case "VideoOEmbed":
                        var a = e;
                        return {
                            embed_entity: d.b + ":" + a.inputURL,
                            embed_id: a.inputURL,
                            embed_type: d.b,
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
                Object(a.c)(i.SpadeEventType.FeedCardEmbedPlay, n, t)
            },
            u = function(e) {
                switch (e.__typename) {
                    case "Clip":
                        var t = e;
                        return {
                            action: "play",
                            embed_entity: d.a + ":" + t.id,
                            embed_id: t.id,
                            embed_type: d.a,
                            media_type: "video"
                        };
                    case "Stream":
                        var n = e;
                        return {
                            action: "play",
                            embed_entity: d.d + ":" + n.id,
                            embed_id: n.id,
                            embed_type: d.d,
                            media_type: "video"
                        };
                    case "Video":
                        var i = e;
                        return {
                            action: "play",
                            embed_entity: d.e + ":" + i.id,
                            embed_id: i.id,
                            embed_type: d.e,
                            media_type: "video"
                        };
                    case "VideoOEmbed":
                        var r = e;
                        return {
                            action: "play",
                            embed_entity: d.b + ":" + r.inputURL,
                            embed_id: r.inputURL,
                            embed_type: d.b,
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
            f = function(e, t) {
                var n = {
                    action: e.action,
                    entity: "post:" + e.postID,
                    post_id: e.postID,
                    post_content: e.postContent,
                    composer_location: e.composerLocation
                };
                Object(a.c)(i.SpadeEventType.FeedPost, n, t)
            },
            g = function(e) {
                var t = {
                    action: e.action,
                    entity: "post:" + e.postID,
                    post_id: e.postID,
                    post_content: e.postContent,
                    composer_location: e.composerLocation
                };
                p.m.track(i.SpadeEventType.FeedPost, t)
            },
            v = function(e, t) {
                var n = Object(d.f)(e.entity),
                    r = {
                        action: e.action,
                        reaction_int: e.reactionInt,
                        reaction_text: e.reactionText,
                        target_entity: e.entity,
                        target_id: n.id,
                        target_type: n.type
                    };
                Object(a.c)(i.SpadeEventType.FeedReaction, r, t)
            };
        n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, "a", function() {
            return o
        }), n.d(t, "b", function() {
            return l
        }), n.d(t, "c", function() {
            return m
        }), n.d(t, "d", function() {
            return f
        }), n.d(t, "e", function() {
            return g
        }), n.d(t, "f", function() {
            return v
        })
    },
    sq7i: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Current_User"
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
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 41
            }
        };
        n.loc.source = {
            body: "query Current_User {\ncurrentUser {\nid\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    tTbW: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Prime_PrimeOffers_PrimeOfferIds"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "dateOverride"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Time"
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
                            value: "primeOffers"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "dateOverride"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "dateOverride"
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
                                            value: "hasEntitlement"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "claimData"
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
                end: 144
            }
        };
        n.loc.source = {
            body: "query Prime_PrimeOffers_PrimeOfferIds($dateOverride: Time) {\nprimeOffers(dateOverride: $dateOverride) {\nid\nself {\nhasEntitlement\nclaimData\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
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
    ukY1: function(e, t) {},
    "v+rJ": function(e, t) {},
    "w/8h": function(e, t) {},
    wjhu: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Prime_PrimeOffers_CurrentUser"
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
                                    value: "hasPrime"
                                },
                                arguments: [],
                                directives: []
                            }]
                        }
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "requestInfo"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "countryCode"
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
                end: 95
            }
        };
        n.loc.source = {
            body: "query Prime_PrimeOffers_CurrentUser {\ncurrentUser {\nid\nhasPrime\n}\nrequestInfo {\ncountryCode\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    }
});
//# sourceMappingURL=pages.front-f9f1b65e1ebfc160c49cf15192e2c3e1.js.map