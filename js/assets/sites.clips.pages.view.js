webpackJsonp([46], {
    "+ChX": function(e, t) {
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
                                            value: "login"
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
                                            }]
                                        }
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
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 125
            }
        };
        n.loc.source = {
            body: "query ClipsCurator($slug: ID!) {\nclip(slug: $slug) {\nid\nbroadcaster {\nid\nlogin\nisPartner\nstream {\nid\n}\n}\ngame {\nid\nname\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "+V/3": function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return i
        }), n.d(t, "c", function() {
            return a
        }), n.d(t, "d", function() {
            return r
        }), n.d(t, "a", function() {
            return o
        });
        var i = "subscribe_to_channel",
            a = "turbo",
            r = "visit_url",
            o = "broadcaster"
    },
    "+Znq": function(e, t, n) {
        "use strict";
        var i = n("jetF");
        n.d(t, "a", function() {
            return i.a
        })
    },
    "+g5R": function(e, t) {},
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
    "0vB1": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i, a = n("TToO"),
            r = n("KSGD"),
            o = n("GiK3"),
            l = n("6sO2"),
            s = n("j7/Y"),
            d = n("zcHb"),
            c = n("vH/s"),
            u = n("7vx8"),
            p = n("CSlQ");
        ! function(e) {
            e.top = "top", e.similar = "similar", e.game = "game", e.broadcaster = "broadcaster", e.curator = "curator"
        }(i || (i = {}));
        var m = [i.similar, i.broadcaster, i.game, i.top];

        function v(e) {
            switch (e) {
                case i.top:
                    return "popular_clips";
                case i.game:
                    return "game_popular_clips";
                case i.broadcaster:
                    return "channel_popular_clips";
                case i.similar:
                    return "similar_popular_clips";
                default:
                    return null
            }
        }
        var g = n("F8kA"),
            h = "https://clips-media-assets.twitch.tv/img/clips-404-320x180.png",
            f = n("Odds"),
            k = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        imageFailed: !1
                    }, t.onImageError = function() {
                        t.setState({
                            imageFailed: !0
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.recommendedClip,
                        t = e.broadcaster && e.game && o.createElement(f.O, {
                            color: f.J.Alt2,
                            ellipsis: !0
                        }, Object(l.d)("{broadcasterDisplayName} playing {gameDisplayName}", {
                            broadcasterDisplayName: e.broadcaster.displayName,
                            gameDisplayName: e.game.displayName
                        }, "ClipsRecommendations"));
                    return o.createElement(f._4, {
                        key: e.slug
                    }, o.createElement(g.a, {
                        to: "/" + e.slug,
                        onClick: this.props.trackSelectionClickHandler,
                        "data-test-selector": "clips-recommendation-view-rec-link"
                    }, o.createElement(f.B, null, o.createElement(f._27, {
                        position: f._11.Absolute,
                        attachTop: !0,
                        attachRight: !0,
                        padding: .5,
                        margin: .5,
                        background: f.m.Overlay,
                        color: f.J.Overlay,
                        elevation: 2,
                        zIndex: f._53.Default,
                        display: f.P.Flex,
                        justifyContent: f._3.Around,
                        alignItems: f.c.Center
                    }, o.createElement(f._4, {
                        display: f.P.Flex,
                        margin: {
                            right: .5
                        }
                    }, o.createElement(f._17, {
                        asset: f._18.GlyphViews
                    })), Object(l.d)("{views} views", {
                        views: Object(l.e)(e.viewCount)
                    }, "ClipsRecommendations")), o.createElement(f._27, {
                        background: f.m.Alt2
                    }, o.createElement(f.e, {
                        type: f.i.FadeIn,
                        duration: f.g.ExtraLong,
                        enabled: !0
                    }, o.createElement(f.D, {
                        src: this.getImageForClip(),
                        alt: Object(l.d)("Clip Thumbnail", "ClipsRecommendations"),
                        onError: this.onImageError
                    }))), o.createElement(f.C, null, o.createElement(f._4, {
                        padding: {
                            top: .5
                        }
                    }, o.createElement(f.O, {
                        ellipsis: !0,
                        type: f._41.H3,
                        fontSize: f.T.Size5
                    }, e.title), t)))))
                }, t.prototype.getImageForClip = function() {
                    return this.state.imageFailed ? h : this.props.recommendedClip.thumbnailURL
                }, t
            }(o.Component),
            y = n("+ChX");

        function b(e, t, n) {
            return a.__awaiter(this, void 0, void 0, function() {
                var i, r, o, s, d, c, u, p, m, v, g, h, f, k, b, S, C, _;
                return a.__generator(this, function(N) {
                    switch (N.label) {
                        case 0:
                            i = null, r = null, o = null, s = null, d = null, c = null, t || l.j.error(new Error, "Missing `slug` in trackClipsEvent", {
                                slug: t
                            }), N.label = 1;
                        case 1:
                            return N.trys.push([1, 3, , 4]), [4, l.o.apollo.client.query({
                                query: y,
                                variables: {
                                    slug: t
                                }
                            })];
                        case 2:
                            return u = N.sent(), i = !(!u.data.clip.broadcaster || !u.data.clip.broadcaster.stream), r = u.data.clip.broadcaster ? u.data.clip.broadcaster.login : null, o = u.data.clip.broadcaster ? u.data.clip.broadcaster.login : null, s = u.data.clip.game ? u.data.clip.game.name : null, d = u.data.clip.broadcaster ? u.data.clip.broadcaster.isPartner : null, c = u.data.clip.id, [3, 4];
                        case 3:
                            return p = N.sent(), l.j.error(p, "Failed to make query for Clip info for tracking event.", {
                                slug: t
                            }), [3, 4];
                        case 4:
                            return m = null, v = null, g = !1, (h = l.o.store.getState().session.user) && (v = h.id, m = h.login, g = !0), f = null, k = null, b = null, S = null, (C = l.n.getLastPageview()) && (f = C.medium || null, k = C.content || null, b = C.tab_session_id || null, S = C.location || null), _ = a.__assign({
                                game: s,
                                live: i,
                                channel: r,
                                channel_id: o,
                                logged_in: g,
                                login: m,
                                user_id: v,
                                tt_content: k,
                                tt_medium: f,
                                partner: d,
                                vod_id: c,
                                vod_type: "clip",
                                tab_session_id: b,
                                location: S,
                                play_session_id: "TODO"
                            }, n), l.n.track(e, _), [2]
                    }
                })
            })
        }

        function S(e, t) {
            return {
                source_channel: e.broadcaster ? e.broadcaster.login : null,
                source_game: e.game ? e.game.name : null,
                source_vod_id: e.video ? e.video.id : null,
                source_item_type: "clip",
                item_type: "clip",
                content: v(t),
                carousel_content: "similar_clips"
            }
        }

        function C(e, t, n, i) {
            b(c.SpadeEventType.ItemSectionLoad, e.slug, a.__assign({}, S(e, i), {
                num_recs_visible: n.length,
                rendered_item_count: n.map(function(e) {
                    return e.id
                }),
                rendered_item_list: n.map(function(e) {
                    return e.id
                }),
                rendered_items_types: n.map(function() {
                    return "clip"
                }),
                rendered_items_viewcounts: n.map(function(e) {
                    return e.viewCount
                }),
                section_index: t
            }))
        }
        var _ = n("tGx1");

        function N(e) {
            return o.createElement(f._4, {
                key: e
            }, o.createElement(f._4, {
                position: f._11.Relative
            }, o.createElement(f.j, {
                ratio: f.k.Aspect16x9
            }, o.createElement(f._10, null)), o.createElement(f._4, {
                position: f._11.Absolute,
                attachTop: !0,
                attachRight: !0,
                margin: .5
            }, o.createElement(f._10, {
                height: 28,
                width: 100
            }))), o.createElement(f._27, {
                margin: {
                    top: .5
                },
                fontSize: f.T.Size8
            }, o.createElement(f._10, {
                lineCount: 1,
                width: 180
            }), o.createElement(f._10, {
                lineCount: 1,
                width: 120
            })))
        }

        function E(e) {
            return o.createElement(f._4, {
                margin: {
                    bottom: 3
                },
                key: e
            }, o.createElement(f.O, {
                fontSize: f.T.Size5
            }, o.createElement(f._10, {
                lineCount: 1,
                width: 100
            })), o.createElement(f._4, {
                margin: {
                    top: 2
                }
            }, o.createElement(f.e, {
                type: f.i.FadeIn,
                duration: f.g.Medium,
                enabled: !0
            }, o.createElement(f._47, {
                childWidth: f._48.Medium,
                gutterSize: f._49.Small
            }, [1, 2, 3, 4].map(N)))))
        }
        var w = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.trackedLoad = !1, t.renderRow = function(e, n) {
                        if (t.props.data.clip && t.props.data.clip.relatedClips) {
                            var r = t.props.data.clip.relatedClips[e];
                            return o.createElement("div", {
                                key: e
                            }, o.createElement(f._4, {
                                padding: {
                                    top: 3,
                                    bottom: 2
                                }
                            }, o.createElement(f.O, {
                                fontSize: f.T.Size4
                            }, function(e, t) {
                                if (t.data.clip) switch (e) {
                                    case i.top:
                                        return Object(l.d)("Popular Clips", "ClipsRecommendations");
                                    case i.similar:
                                        return Object(l.d)("Similar Clips", "ClipsRecommendations");
                                    case i.game:
                                        return t.data.clip.game && Object(l.d)("Popular Clips from {game}", {
                                            game: t.data.clip.game.displayName
                                        }, "ClipsRecommendations");
                                    case i.broadcaster:
                                        return t.data.clip.broadcaster && Object(l.d)("Popular Clips from {channel}", {
                                            channel: t.data.clip.broadcaster.displayName
                                        }, "ClipsRecommendations");
                                    default:
                                        return null
                                }
                            }(e, t.props))), o.createElement(f._47, {
                                childWidth: f._48.Medium,
                                gutterSize: f._49.Small
                            }, r.map(function(i, r) {
                                return o.createElement(k, {
                                    key: i.id,
                                    recommendedClip: i,
                                    trackSelectionClickHandler: function() {
                                        ! function(e, t, n, i, r) {
                                            b(c.SpadeEventType.ItemSectionClick, e.slug, a.__assign({}, S(e, r), {
                                                item_id: t.slug,
                                                item_viewcount: t.viewCount,
                                                section_index: n,
                                                itemIndex: i
                                            }))
                                        }(t.props.data.clip, i, n, r, e)
                                    }
                                })
                            })))
                        }
                    }, t.trackSelectionLoad = function(e) {
                        if (!t.trackedLoad && e.data.clip && e.data.clip.relatedClips) {
                            t.trackedLoad = !0;
                            for (var n = t.getValidCategories(e), i = 0; i < n.length; i++) {
                                var a = n[i],
                                    r = e.data.clip.relatedClips[a];
                                r && C(e.data.clip, i, r, a)
                            }
                        }
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.trackSelectionLoad(this.props)
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.trackSelectionLoad(e)
                }, t.prototype.render = function() {
                    return this.props.data.clip ? o.createElement(f._4, null, this.getValidCategories(this.props).map(this.renderRow)) : o.createElement(f._4, null, this.renderPlaceholders())
                }, t.prototype.getValidCategories = function(e) {
                    var t = e.data.clip && e.data.clip.relatedClips;
                    return t ? m.filter(function(e) {
                        return 4 === t[e].length
                    }) : []
                }, t.prototype.renderPlaceholders = function() {
                    return o.createElement(f._4, {
                        margin: {
                            top: 3
                        }
                    }, [1, 2, 3].map(E))
                }, t = a.__decorate([Object(p.d)("ClipsRecommendations"), Object(u.a)(_)], t)
            }(o.Component),
            O = n("hdYS"),
            F = n("kJau"),
            T = n("CMkR"),
            R = n("U5tC"),
            I = {
                tt_content: "player_profile_img"
            },
            x = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return this.props.data.clip && this.props.data.clip.broadcaster ? o.createElement(f._4, {
                        className: "clips-broadcaster-info",
                        padding: 1,
                        display: f.P.Flex,
                        alignItems: f.c.Center
                    }, o.createElement("a", {
                        target: "_blank",
                        href: Object(F.d)(this.props.data.clip.broadcaster.login, I)
                    }, o.createElement(f.l, {
                        src: this.props.data.clip.broadcaster.profileImageURL,
                        alt: Object(l.d)("Broadcaster Avatar", "ClipsBroadcasterInfo"),
                        size: 30
                    })), o.createElement(f._4, {
                        display: f.P.Flex,
                        flexDirection: f.R.Column,
                        flexGrow: 1,
                        margin: {
                            left: 1
                        },
                        ellipsis: !0
                    }, o.createElement("a", {
                        href: Object(F.d)(this.props.data.clip.broadcaster.login, I)
                    }, o.createElement(f.O, {
                        fontSize: f.T.Size4,
                        type: f._41.Span
                    }, this.props.data.clip.broadcaster.displayName), !!this.props.data.clip.broadcaster.stream && o.createElement(f._4, {
                        margin: {
                            left: .5
                        },
                        display: f.P.InlineBlock
                    }, o.createElement(f._8, {
                        label: Object(l.d)("LIVE", "ClipsBroadcasterInfo"),
                        type: f._9.Live
                    }))), o.createElement(f._4, null, o.createElement(f.O, {
                        color: f.J.Alt2,
                        fontSize: f.T.Size5,
                        ellipsis: !0
                    }, this.props.data.clip.game && Object(l.d)("playing {gameName}", {
                        gameName: o.createElement("a", {
                            target: "_blank",
                            href: Object(F.e)(this.props.data.clip.game.name, {
                                tt_medium: "clips_web"
                            })
                        }, this.props.data.clip.game.displayName)
                    }, "ClipsBroadcasterInfo")))), o.createElement("div", {
                        onMouseEnter: this.pauseAutoplayTimer,
                        onMouseLeave: this.restartAutoplayTimer
                    }, o.createElement(O.a, {
                        isHostedFollow: !1,
                        channelLogin: this.props.data.clip.broadcaster.login,
                        followUIType: O.b.IconAndText,
                        unfollowUIType: O.b.IconOnly,
                        showLoadingPlaceholder: !0
                    }))) : o.createElement(f._4, null, this.renderPlaceholders())
                }, t.prototype.pauseAutoplayTimer = function() {
                    Object(T.e)(T.b.followButton)
                }, t.prototype.restartAutoplayTimer = function() {
                    Object(T.g)(T.b.followButton)
                }, t.prototype.renderPlaceholders = function() {
                    return o.createElement(f._4, {
                        padding: 1,
                        display: f.P.Flex,
                        alignItems: f.c.Center
                    }, o.createElement(f._4, null, o.createElement(f.e, {
                        type: f.i.FadeIn,
                        duration: f.g.Long,
                        enabled: !0
                    }, o.createElement(f._10, {
                        height: 30,
                        width: 30
                    }))), o.createElement(f._27, {
                        fontSize: f.T.Size5,
                        flexGrow: 1,
                        margin: {
                            x: 1
                        }
                    }, o.createElement(f.e, {
                        type: f.i.FadeIn,
                        duration: f.g.Long,
                        enabled: !0
                    }, o.createElement(f._10, {
                        lineCount: 1,
                        width: 80
                    })), o.createElement(f.e, {
                        type: f.i.FadeIn,
                        duration: f.g.Long,
                        delay: f.f.Short,
                        enabled: !0
                    }, o.createElement(f._10, {
                        lineCount: 1,
                        width: 120
                    }))), o.createElement(f._4, null, o.createElement(f.e, {
                        type: f.i.FadeIn,
                        duration: f.g.Long,
                        enabled: !0
                    }, o.createElement(f._10, {
                        height: 30,
                        width: 70
                    }))))
                }, t = a.__decorate([Object(p.d)("ClipsBroadcasterInfo"), Object(u.a)(R)], t)
            }(o.Component),
            D = n("RH2O"),
            A = n("Aj/L"),
            L = n("zCIC"),
            j = n("0QL4"),
            P = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.reportInteractive()
                }, t.prototype.render = function() {
                    if (!this.props.data.clip || !this.props.data.clip.curator) return o.createElement(f._4, null, this.renderPlaceholders());
                    var e = Object(F.c)(this.props.data.clip.curator.login, {
                        tt_medium: "clips_web",
                        tt_content: "curator_name"
                    });
                    return o.createElement(f.O, {
                        fontSize: this.props.fontSize ? this.props.fontSize : f.T.Size5
                    }, Object(l.d)("Clipped by {curatorName}", {
                        curatorName: o.createElement("a", {
                            href: e,
                            target: "_blank"
                        }, this.props.data.clip.curator.displayName)
                    }, "ClipsCurator"))
                }, t.prototype.reportInteractive = function() {
                    this.props.data.clip && this.props.data.clip.curator && this.props.latencyTracking.reportInteractive()
                }, t.prototype.renderPlaceholders = function() {
                    return o.createElement(f.e, {
                        type: f.i.FadeIn,
                        duration: f.g.Long,
                        delay: f.f.Medium,
                        enabled: !0
                    }, o.createElement(f.O, {
                        fontSize: this.props.fontSize ? this.props.fontSize : f.T.Size5
                    }, o.createElement(f._10, {
                        lineCount: 1,
                        width: 80
                    })))
                }, t = a.__decorate([Object(p.d)("ClipsCurator"), Object(u.a)(j)], t)
            }(o.Component),
            M = n("0Kuu"),
            U = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.reportInteractive()
                }, t.prototype.render = function() {
                    return this.props.data.clip ? o.createElement(f.O, {
                        fontSize: this.props.fontSize ? this.props.fontSize : f.T.Size3,
                        type: f._41.Span,
                        lineHeight: f._5.Heading,
                        ellipsis: this.props.ellipsis
                    }, this.props.data.clip.title) : o.createElement(f._4, null, this.renderPlaceholders())
                }, t.prototype.reportInteractive = function() {
                    this.props.data.clip && this.props.latencyTracking.reportInteractive()
                }, t.prototype.renderPlaceholders = function() {
                    return o.createElement(f.e, {
                        type: f.i.FadeIn,
                        duration: f.g.Long,
                        delay: f.f.Short,
                        enabled: !0
                    }, o.createElement(f.O, {
                        fontSize: this.props.fontSize ? this.props.fontSize : f.T.Size3
                    }, o.createElement(f._10, {
                        lineCount: 1,
                        width: 200
                    })))
                }, t = a.__decorate([Object(p.d)("ClipsTitle"), Object(u.a)(M)], t)
            }(o.Component),
            B = n("0CQq"),
            V = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.reportInteractive()
                }, t.prototype.render = function() {
                    if (!this.props.data.clip) return o.createElement(f._4, null, this.renderPlaceholders());
                    var e = this.props.padding && this.props.padding.bottom,
                        t = void 0 === e ? .5 : e;
                    return o.createElement(f._4, {
                        display: f.P.Flex,
                        alignItems: f.c.Center,
                        padding: {
                            bottom: t
                        }
                    }, !this.props.hideSymbol && o.createElement(f._4, {
                        margin: {
                            right: .5
                        },
                        display: f.P.Flex,
                        alignItems: f.c.Center
                    }, o.createElement(f._17, {
                        asset: f._18.GlyphViews,
                        type: f._19.Brand
                    })), o.createElement(f.O, {
                        bold: !0,
                        type: f._41.Span,
                        fontSize: this.props.fontSize ? this.props.fontSize : f.T.Size5
                    }, Object(l.d)("{views} views", {
                        views: Object(l.e)(this.props.data.clip.viewCount)
                    }, "ClipsViewCount")))
                }, t.prototype.reportInteractive = function() {
                    this.props.data.clip && this.props.latencyTracking.reportInteractive()
                }, t.prototype.renderPlaceholders = function() {
                    return o.createElement(f.e, {
                        type: f.i.FadeIn,
                        duration: f.g.Long,
                        enabled: !0
                    }, o.createElement(f.O, {
                        fontSize: this.props.fontSize ? this.props.fontSize : f.T.Size5
                    }, o.createElement(f._10, {
                        lineCount: 1,
                        width: 80
                    })))
                }, t = a.__decorate([Object(p.d)("ClipsViewCount"), Object(u.a)(B)], t)
            }(o.Component),
            z = n("QIXk"),
            q = n("E5Ip"),
            H = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onFinishedEditing = function() {
                        t.props.editTitleToggle()
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return this.props.data.clip ? o.createElement(f._4, {
                        className: "clips-view-title-edit"
                    }, o.createElement(z.a, {
                        clipId: this.props.data.clip.id,
                        clipSlug: this.props.slug,
                        clipTitle: this.props.data.clip.title,
                        clipBroadcasterId: this.props.data.clip.broadcaster ? Number(this.props.data.clip.broadcaster.id) : 0,
                        location: c.PageviewLocation.ClipsViewing,
                        onCancel: this.onFinishedEditing,
                        onSuccess: this.onFinishedEditing
                    })) : o.createElement(f._4, null)
                }, t = a.__decorate([Object(p.d)("ClipsViewTitleEdit"), Object(u.a)(q)], t)
            }(o.Component),
            G = n("mmqR"),
            W = (n("NjaO"), {
                isChatAutoScrolling: !0,
                isChatContentCollapsed: !1,
                isEditingTitle: !1
            }),
            $ = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = W, t.scrollPosition = 0, t.renderClipTitle = function() {
                        var e = t.props.data.clip,
                            n = e && e.curator && e.curator.login,
                            i = t.props.slug;
                        if (t.state.isEditingTitle) return o.createElement(H, {
                            slug: i,
                            editTitleToggle: t.editTitleToggle
                        });
                        var a = o.createElement(f._4, {
                            alignItems: f.c.Center,
                            display: f.P.Flex,
                            flexDirection: f.R.Row,
                            justifyContent: f._3.Start,
                            margin: {
                                y: 1
                            }
                        }, o.createElement(f.O, {
                            type: f._41.Span
                        }, t.createdAt), " • ", o.createElement(P, {
                            slug: i
                        }));
                        return t.props.userLogin !== n ? o.createElement(f._4, null, o.createElement(U, {
                            slug: i
                        }), a) : o.createElement(f._4, null, o.createElement("div", {
                            className: "clips-chat__edit",
                            onClick: t.editTitleToggle,
                            "data-test-selector": "clips-chat-card-edit"
                        }, o.createElement(U, {
                            slug: i
                        }), o.createElement(f._17, {
                            asset: f._18.Edit
                        })), a)
                    }, t.setChatContentRef = function(e) {
                        t.chatContentRef = e
                    }, t.setScrollableAreaEl = function(e) {
                        t.scrollableAreaEl = e
                    }, t.scrollChatToBottom = function() {
                        t.scrollableAreaEl.scrollTo(0, t.scrollableAreaEl.scrollHeight)
                    }, t.autoScrollChatToBottom = function() {
                        t.state.isChatAutoScrolling && t.scrollChatToBottom()
                    }, t.editTitleToggle = function() {
                        t.state.isEditingTitle ? Object(T.g)(T.b.titleEdit) : Object(T.e)(T.b.titleEdit), t.setState(function(e) {
                            return {
                                isEditingTitle: !e.isEditingTitle
                            }
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    e.slug !== this.props.slug && (this.scrollPosition = 0, this.scrollableAreaEl.scrollTo(0, 0), this.setState(W))
                }, t.prototype.componentDidMount = function() {
                    this.addScrollableAreaEventListener()
                }, t.prototype.render = function() {
                    var e = this.props.slug;
                    return o.createElement(f._4, {
                        display: f.P.Flex,
                        flexDirection: f.R.Column,
                        position: f._11.Relative,
                        flexGrow: 1
                    }, this.state.isChatContentCollapsed && o.createElement(be, {
                        slug: e
                    }), o.createElement(L.b, {
                        className: "clips-chat",
                        contentClassName: "clips-chat__content",
                        contentRef: this.setScrollableAreaEl,
                        suppressScrollX: !0
                    }, o.createElement(f._4, {
                        padding: {
                            x: 1
                        },
                        display: f.P.Flex,
                        flexDirection: f.R.Column,
                        fullWidth: !0
                    }, o.createElement(f._4, {
                        className: "clips-chat-info",
                        flexShrink: 1,
                        flexGrow: 1,
                        display: f.P.Flex,
                        alignItems: f.c.Start,
                        justifyContent: f._3.Center,
                        flexDirection: f.R.Column,
                        margin: {
                            top: 1
                        },
                        breakpointLarge: {
                            margin: {
                                y: 2
                            }
                        },
                        refDelegate: this.setChatContentRef
                    }, o.createElement(V, {
                        slug: e
                    }), this.renderClipTitle()), o.createElement(ye, {
                        autoScrollChatToBottom: this.autoScrollChatToBottom,
                        videoOffsetSeconds: this.props.data.clip ? this.props.data.clip.videoOffsetSeconds : null,
                        slug: e
                    }), this.renderMoreChatButton())))
                }, t.prototype.renderMoreChatButton = function() {
                    return !this.props.data.clip || this.props.data.clip && !this.props.data.clip.video || this.state.isChatAutoScrolling ? null : o.createElement(f._4, {
                        alignItems: f.c.Center,
                        attachBottom: !0,
                        attachLeft: !0,
                        display: f.P.Flex,
                        flexDirection: f.R.Column,
                        position: f._11.Absolute,
                        fullWidth: !0
                    }, o.createElement(f.u, {
                        size: f.y.Small,
                        onClick: this.scrollChatToBottom
                    }, Object(l.d)("MORE CHAT ↓", "ClipsChatCard")))
                }, t.prototype.addScrollableAreaEventListener = function() {
                    var e = this;
                    this.scrollableAreaEl && this.scrollableAreaEl.addEventListener("scroll", function() {
                        var t = {},
                            n = e.scrollableAreaEl;
                        e.scrollPosition > n.scrollTop ? t.isChatAutoScrolling = !1 : e.scrollPosition < n.scrollTop && n.scrollHeight === n.scrollTop + n.clientHeight && (t.isChatAutoScrolling = !0), e.scrollPosition = n.scrollTop;
                        var i = e.isChatContentCollapsed;
                        void 0 !== i && (t.isChatContentCollapsed = i), e.setState(t)
                    })
                }, Object.defineProperty(t.prototype, "createdAt", {
                    get: function() {
                        var e = this.props.data.clip;
                        if (!e) return null;
                        try {
                            var t = new Date(e && e.createdAt.replace(/(Z)/i, "")),
                                n = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()));
                            return Object(l.g)(n)
                        } catch (e) {
                            return Object(l.d)("N/A", "ClipsInfoCard")
                        }
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "isChatContentCollapsed", {
                    get: function() {
                        var e = this.chatContentRef.getBoundingClientRect().top,
                            t = this.scrollableAreaEl.getBoundingClientRect().top,
                            n = void 0;
                        return e < t && this.percentScrolled > .25 && !this.state.isChatContentCollapsed ? n = !0 : e >= t && this.percentScrolled <= .25 && this.state.isChatContentCollapsed && (n = !1), n
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "percentScrolled", {
                    get: function() {
                        var e = this.scrollableAreaEl;
                        return e.scrollTop / (e.scrollHeight - e.clientHeight)
                    },
                    enumerable: !0,
                    configurable: !0
                }), t = a.__decorate([Object(u.a)(G), Object(p.d)("ClipsChatCard", {
                    autoReportInteractive: !0
                })], t)
            }(o.Component);
        var K = Object(D.b)(function(e) {
                var t = Object(A.c)(e);
                return {
                    userLogin: t && t.login
                }
            })($),
            Q = n("3T7g"),
            J = n("+V/3"),
            Y = n("8RKZ"),
            Z = (n("dJGa"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.node,
                        t = e.message.userBadges || [],
                        n = e.commenter,
                        i = n.chatColor,
                        a = n.displayName,
                        r = n.login;
                    return o.createElement(f._4, {
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(f.e, {
                        type: f.i.SlideInBottom,
                        duration: f.g.Short,
                        enabled: !0
                    }, o.createElement(f.O, {
                        fontSize: f.T.Size5,
                        color: f.J.Alt
                    }, this.renderUserBadges(t.filter(function(e) {
                        return !!e
                    })), this.renderUserLink({
                        chatColor: i,
                        displayName: a,
                        login: r
                    }), o.createElement(f._4, {
                        display: f.P.InlineBlock,
                        margin: {
                            right: .5
                        }
                    }, ":"), this.renderFragments(e.message.fragments))))
                }, t.prototype.renderUserBadges = function(e) {
                    var t = this.props.video && this.props.video.owner.broadcastBadges.filter(function(e) {
                        return e.clickAction === J.b
                    }) || [];
                    return this.mergeSubscriberBadgeUrls(e, t).map(this.renderUserBadge)
                }, t.prototype.renderUserBadge = function(e, t) {
                    return o.createElement(Q.a, {
                        badge: e,
                        key: t
                    })
                }, t.prototype.mergeSubscriberBadgeUrls = function(e, t) {
                    var n = this;
                    return e.map(function(e) {
                        var i = n.props.channelName;
                        if (e.clickAction === J.b) {
                            var a = t.filter(function(t) {
                                    return t.version === e.version
                                })[0],
                                r = a.image1x,
                                o = a.image2x,
                                l = a.image4x;
                            return Object.assign({}, e, {
                                channelName: i,
                                image1x: r,
                                image2x: o,
                                image4x: l
                            })
                        }
                        return Object.assign({}, e, {
                            channelName: i
                        })
                    })
                }, t.prototype.renderUserLink = function(e) {
                    var t = e.chatColor,
                        n = e.displayName,
                        i = e.login;
                    return o.createElement("a", {
                        href: Object(F.d)(i),
                        style: {
                            color: t
                        }
                    }, o.createElement(f.O, {
                        type: f._41.Span,
                        bold: !0
                    }, n))
                }, t.prototype.renderFragments = function(e) {
                    var t = this;
                    return e.map(function(e, n) {
                        var i = e.emote,
                            a = e.text;
                        return o.createElement(f._4, {
                            display: f.P.Inline,
                            key: n
                        }, i ? t.renderFragmentEmote(i, a) : t.renderFragmentText(a))
                    })
                }, t.prototype.renderFragmentEmote = function(e, t) {
                    var n = e.emoteID;
                    return o.createElement(Y.a, {
                        alt: t,
                        className: "clips-chat-line-emote",
                        srcKey: "1x",
                        srcSet: {
                            themed: !1,
                            sources: {
                                "1x": "https://static-cdn.jtvnw.net/emoticons/v1/" + n + "/1.0"
                            }
                        }
                    })
                }, t.prototype.renderFragmentText = function(e) {
                    return o.createElement(f.O, {
                        type: f._41.Span
                    }, e)
                }, t
            }(o.Component)),
            X = Object(p.d)("ClipsChatLine", {
                autoReportInteractive: !0
            })(Z),
            ee = n("oIkB");

        function te(e) {
            return function(t) {
                return function(n) {
                    function i(t) {
                        var i = n.call(this, t) || this;
                        return i.messageHandlers = [], i.handlePlayerAdded = function() {
                            i.getPlayer() && !i.isConnected && (i.isConnected = !0, oe.off(ae, i.handlePlayerAdded), oe.on(re, i.handlePlayerRemoved), window.addEventListener("message", i.onIncomingPlayerMessage))
                        }, i.handlePlayerRemoved = function() {
                            !i.getPlayer() && i.isConnected && (i.isConnected = !1, oe.off(re, i.handlePlayerRemoved), oe.on(ae, i.handlePlayerAdded), window.removeEventListener("message", i.onIncomingPlayerMessage))
                        }, i.sendMessage = function(e) {
                            var t = i.getPlayer();
                            t && t.postMessage(e, F.a)
                        }, i.onIncomingPlayerMessage = function(e) {
                            e.origin === F.a && e.data.namespace === me && i.messageHandlers.forEach(function(t) {
                                t(e.data)
                            })
                        }, i.updatePlayerProps = function(t) {
                            if (e.requestedPlayerProps && (t.method === ce || t.method === ue)) {
                                var n = t.args[0],
                                    r = e.requestedPlayerProps.reduce(function(e, t) {
                                        var a = n[t];
                                        return void 0 !== a && i.state.playerProps[t] !== a && (e[t] = a), e
                                    }, {});
                                Object.keys(r).length && i.setState({
                                    playerProps: a.__assign({}, i.state.playerProps, r)
                                })
                            }
                        }, e.requestedPlayerProps && i.messageHandlers.push(i.updatePlayerProps), i.state = {
                            playerProps: {}
                        }, i
                    }
                    return a.__extends(i, n), i.prototype.componentWillMount = function() {
                        oe.on(ae, this.handlePlayerAdded)
                    }, i.prototype.componentWillUnmount = function() {
                        oe.off(ae, this.handlePlayerAdded), oe.off(re, this.handlePlayerRemoved)
                    }, i.prototype.render = function() {
                        var e = {
                            playerConnection: {
                                sendMessage: this.sendMessage,
                                registerMessageHandler: this.registerMessageHandler,
                                playerProps: this.state.playerProps
                            }
                        };
                        return o.createElement(t, a.__assign({}, this.props, e))
                    }, i.prototype.getPlayer = function() {
                        return ie[e.playerId(this.props)]
                    }, i.prototype.registerMessageHandler = function(e) {
                        this.messageHandlers.push(e)
                    }, i.displayName = te.name + "(" + (t.displayName || t.name) + ")", i
                }(o.Component)
            }
        }
        var ne = n("BzvE"),
            ie = {},
            ae = "player-storage-added",
            re = "player-storage-removed",
            oe = new ne.EventEmitter;

        function le(e) {
            return {
                args: [void 0 === e.arg ? {} : e.arg],
                method: e.method,
                namespace: void 0 === e.namespace ? pe : e.namespace
            }
        }
        var se = "subscribe",
            de = "setclip",
            ce = "bridgestateupdate",
            ue = "bridgestorestateupdate",
            pe = "player.embed.host",
            me = "player.embed.client",
            ve = n("YJNl"),
            ge = "";

        function he(e) {
            return e && e.clip && e.clip.video && e.clip.video.comments && e.clip.video.comments.edges || []
        }

        function fe(e) {
            var t = e[Math.max(e.length - 1, 0)];
            return t || {
                node: {
                    id: ge,
                    contentOffsetSeconds: 1 / 0
                },
                cursor: null
            }
        }
        var ke = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.prevCommentId = ge, t.filterChatLines = function(e) {
                        var n = t.props.videoOffsetSeconds,
                            i = n + Number(t.props.playerConnection.playerProps.currentTime);
                        return e.node.contentOffsetSeconds >= n && e.node.contentOffsetSeconds <= i
                    }, t.maybeLoadMore = function(e) {
                        var n = t.props.data && t.props.data.clip,
                            i = n && n.video;
                        if (!i || !i.comments || t.props.data.error || !t.props.videoOffsetSeconds) return null;
                        var a = fe(i.comments.edges).node,
                            r = e.videoOffsetSeconds + Number(e.data.clip.durationSeconds);
                        a.contentOffsetSeconds <= r && t.props.loadMore()
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidUpdate = function() {
                    this.props.autoScrollChatToBottom();
                    var e = fe(he(this.props.data)).node.id;
                    this.prevCommentId !== e && (this.prevCommentId = e, this.maybeLoadMore(this.props))
                }, t.prototype.render = function() {
                    var e = this.props.data && this.props.data.clip,
                        t = e && e.video;
                    if (!t || !t.comments || this.props.data.error || !this.props.videoOffsetSeconds) return null;
                    var n = t.comments.edges.filter(this.filterChatLines);
                    return 0 === n.length ? null : o.createElement(f._4, {
                        className: "clips-chat-replay",
                        flexGrow: 1,
                        flexShrink: 0,
                        display: f.P.Flex,
                        flexDirection: f.R.Column,
                        alignItems: f.c.Start,
                        justifyContent: f._3.End,
                        margin: {
                            top: 1
                        }
                    }, n.map(function(n, i) {
                        var a = n.node;
                        return o.createElement(X, {
                            channelName: e.broadcaster && e.broadcaster.displayName || void 0,
                            node: a,
                            video: t,
                            key: i
                        })
                    }))
                }, t
            }(o.Component),
            ye = te({
                playerId: function(e) {
                    return e.slug
                },
                requestedPlayerProps: ["currentTime"]
            })(Object(u.a)(ve, {
                skip: function(e) {
                    return !e.videoOffsetSeconds
                },
                options: function(e) {
                    return {
                        variables: {
                            slug: e.slug,
                            videoOffsetSeconds: e.videoOffsetSeconds
                        }
                    }
                },
                props: function(e) {
                    return a.__assign({}, e, {
                        loadMore: function() {
                            var t = he(e.data);
                            if (0 !== t.length) {
                                var n = fe(t).cursor;
                                return e.data.fetchMore({
                                    query: ve,
                                    variables: {
                                        slug: e.data.variables.slug,
                                        cursor: n
                                    },
                                    updateQuery: function(e, t) {
                                        var n = t.fetchMoreResult;
                                        return {
                                            clip: a.__assign({}, n.clip, {
                                                video: a.__assign({}, n.clip && n.clip.video || {}, {
                                                    comments: a.__assign({}, n.clip && n.clip.video && n.clip.video.comments || {}, {
                                                        edges: Object(ee.b)(he(e), he(n)),
                                                        __typename: "VideoCommentEdge"
                                                    })
                                                })
                                            })
                                        }
                                    }
                                })
                            }
                        }
                    })
                }
            })(ke)),
            be = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return o.createElement(f._27, {
                        alignItems: f.c.Center,
                        attachTop: !0,
                        className: "clips-chat-title",
                        display: f.P.Flex,
                        flexDirection: f.R.Row,
                        fullWidth: !0,
                        position: f._11.Absolute,
                        justifyContent: f._3.Start,
                        background: f.m.Base,
                        borderBottom: !0,
                        zIndex: f._53.Above,
                        padding: 1
                    }, o.createElement(U, {
                        fontSize: f.T.Size5,
                        slug: this.props.slug,
                        ellipsis: !0
                    }), o.createElement(f._4, {
                        flexShrink: 0,
                        margin: {
                            x: .5
                        }
                    }, o.createElement(f.O, {
                        type: f._41.Span
                    }, "•")), o.createElement(f._4, {
                        flexShrink: 0
                    }, o.createElement(V, {
                        padding: {
                            bottom: 0
                        },
                        slug: this.props.slug,
                        fontSize: f.T.Size6,
                        hideSymbol: !0
                    })), o.createElement(f._4, {
                        margin: {
                            x: .5
                        }
                    }, o.createElement(f.O, {
                        type: f._41.Span
                    }, "•")), o.createElement(f._4, {
                        flexShrink: 0
                    }, o.createElement(P, {
                        slug: this.props.slug,
                        fontSize: f.T.Size6
                    })))
                }, t
            }(o.Component),
            Se = (n("tIhJ"), n("3Fw+")),
            Ce = n("J4ib"),
            _e = n("dQ/z"),
            Ne = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.reportInteractive()
                }, t.prototype.render = function() {
                    return this.props.data.clip ? (e = this.props.data.clip.video ? o.createElement("div", {
                        onMouseEnter: this.pauseAutoplayTimer,
                        onMouseLeave: this.restartAutoplayTimer
                    }, o.createElement(f.u, {
                        targetBlank: !0,
                        linkTo: Object(F.g)(this.props.data.clip.video.id, {
                            t: Object(Se.a)(this.props.data.clip.video.offsetSeconds),
                            tt_medium: "clips_web",
                            tt_content: "full_vod_button"
                        })
                    }, Object(Ce.d)("Watch Full Video", "ClipsFullVideoButton"))) : o.createElement(f.u, {
                        disabled: !0
                    }, Object(Ce.d)("Full Video Unavailable", "ClipsFullVideoButton")), o.createElement(f._4, {
                        display: f.P.InlineBlock
                    }, e)) : o.createElement(f._4, null, this.renderPlaceholders());
                    var e
                }, t.prototype.pauseAutoplayTimer = function() {
                    Object(T.e)(T.b.fullVideoButton)
                }, t.prototype.restartAutoplayTimer = function() {
                    Object(T.g)(T.b.fullVideoButton)
                }, t.prototype.reportInteractive = function() {
                    this.props.data.clip && this.props.latencyTracking.reportInteractive()
                }, t.prototype.renderPlaceholders = function() {
                    return o.createElement(f.e, {
                        type: f.i.FadeIn,
                        duration: f.g.Long,
                        enabled: !0
                    }, o.createElement(f._10, {
                        width: 108,
                        height: 28
                    }))
                }, t = a.__decorate([Object(p.d)("ClipsFullVideoButton"), Object(u.a)(_e)], t)
            }(o.Component),
            Ee = n("2KeS"),
            we = n("+xm8"),
            Oe = n("f2i/"),
            Fe = n("+Znq"),
            Te = n("287o"),
            Re = function() {
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
            Ie = n("HW6M"),
            xe = n("l21v"),
            De = n("YhVV"),
            Ae = (n("HyIc"), function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.addReaction = function() {
                        n.props.addClipReaction(n.props.emote), n.setState({
                            isAnimating: !0
                        }), setInterval(function() {
                            return n.setState({
                                isAnimating: !1
                            })
                        }, 500)
                    }, n.removeReaction = function() {
                        return n.props.removeClipReaction(n.props.emote)
                    }, n.renderEmote = function() {
                        var e = Ie("clips-emote-button", {
                                "clips-emote-button--selected": n.props.hasReacted
                            }),
                            t = null;
                        return n.props.count && (t = o.createElement(f._4, {
                            className: "clips-emote-button__count",
                            margin: {
                                left: .5
                            }
                        }, o.createElement(f.O, {
                            align: f._51.Middle,
                            bold: n.props.hasReacted
                        }, n.props.count))), o.createElement(f.Z, {
                            display: f.P.Flex,
                            alignItems: f.c.Center,
                            padding: {
                                x: 1
                            },
                            borderTop: !n.props.hideBorders,
                            borderRight: !n.props.hideBorders,
                            borderBottom: !n.props.hideBorders,
                            borderLeft: !n.props.hideLeftBorder && !n.props.hideBorders
                        }, o.createElement("div", {
                            className: e,
                            onClick: n.props.hasReacted ? n.removeReaction : n.addReaction,
                            "data-test-selector": "clips-emote-button"
                        }, o.createElement(f._4, {
                            alignContent: f.b.Center,
                            className: "clips-emote-button__emote"
                        }, o.createElement(f.e, {
                            type: f.i.Bounce,
                            duration: f.g.Long,
                            enabled: n.state.isAnimating,
                            onAnimationEnd: n.handleAnimationEnd
                        }, o.createElement(f.Z, {
                            fullWidth: !0
                        }, o.createElement("img", {
                            src: Object(xe.e)(n.props.emote.id, 1)
                        })))), t))
                    }, n.state = {
                        isAnimating: !1
                    }, n
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return this.props.hideTooltip ? this.renderEmote() : o.createElement(f._44, {
                        label: this.getToken(this.props.emote.token)
                    }, this.renderEmote())
                }, t.prototype.handleAnimationEnd = function() {
                    this && this.setState && this.setState({
                        isAnimating: !1
                    })
                }, t.prototype.getToken = function(e) {
                    var t = De.a[this.props.emote.token];
                    return t && t.length > 0 ? t[0] : e
                }, t = a.__decorate([Object(p.d)("ClipsEmote", {
                    autoReportInteractive: !0
                })], t)
            }(o.Component)),
            Le = n("Ldv2");
        n("axV2");
        var je = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.state = {
                    emoteSearchText: ""
                }, t.renderEmoteSet = function(e, n) {
                    var i = Ie({
                        "clips-emote-picker__emote-set": n < t.getEmoteSets().length - 1
                    });
                    return o.createElement(f._4, {
                        display: f.P.Flex,
                        flexDirection: f.R.Row,
                        flexWrap: f.S.Wrap,
                        key: "emote-set-" + e.id,
                        margin: {
                            left: 1
                        },
                        className: i
                    }, e.emotes.filter(t.filterEmote).map(t.renderEmote))
                }, t.renderEmote = function(e) {
                    var n = t.props.sortedReactions.find(function(t) {
                            return t.emote.id === e.id
                        }),
                        i = !(!n || !n.self.hasReacted);
                    return o.createElement(f._4, {
                        className: "clips-emote-picker__emote",
                        key: "emote-" + e.id
                    }, o.createElement(Ae, {
                        emote: e,
                        addClipReaction: t.props.addClipReaction,
                        removeClipReaction: t.props.removeClipReaction,
                        hasReacted: i,
                        hideBorders: !0
                    }))
                }, t.getEmoteSets = function() {
                    return t.props.emoteSetsData && t.props.emoteSetsData.emoteSets || []
                }, t.filterEmote = function(e) {
                    return function(e, t) {
                        var n = t.length,
                            i = e.length;
                        if (i > n) return !1;
                        if (i === n) return e === t;
                        e: for (var a = 0, r = 0; a < i; a++) {
                            for (var o = e.charCodeAt(a); r < n;)
                                if (t.charCodeAt(r++) === o) continue e;
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
            return a.__extends(t, e), t.prototype.componentDidMount = function() {
                this.attemptReportInteractive()
            }, t.prototype.componentWillReceiveProps = function() {
                this.attemptReportInteractive()
            }, t.prototype.render = function() {
                return o.createElement(f._4, {
                    className: "clips-user-emotes"
                }, o.createElement(f._4, {
                    margin: {
                        left: 1,
                        right: 1,
                        bottom: 1
                    }
                }, o.createElement(f._0, {
                    type: f._1.Search,
                    onChange: this.onEmoteSearchTextChange,
                    placeholder: Object(l.d)("Search for Emotes", "ClipsReactionCarousel"),
                    spellCheck: !1
                })), o.createElement(f._4, {
                    display: f.P.Flex,
                    flexDirection: f.R.Column,
                    flexWrap: f.S.Wrap
                }, this.getEmoteSets().slice().reverse().map(this.renderEmoteSet)))
            }, t.prototype.attemptReportInteractive = function() {
                this.getEmoteSets().length && this.props.latencyTracking.reportInteractive()
            }, t = a.__decorate([Object(Le.a)(), Object(p.d)("ClipsUserEmotes")], t)
        }(o.Component);
        var Pe = Object(D.b)(function(e) {
                return {
                    isLoggedIn: Object(A.d)(e)
                }
            })(je),
            Me = (n("dRtS"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        showHiddenReactions: !1
                    }, t.filterReaction = function(e) {
                        return e.count > 0
                    }, t.renderReaction = function(e) {
                        return o.createElement(f._4, {
                            margin: {
                                right: .5,
                                bottom: .5
                            },
                            key: "reaction-" + e.emote.id
                        }, o.createElement(Ae, {
                            emote: e.emote,
                            addClipReaction: t.props.addClipReaction,
                            removeClipReaction: t.props.removeClipReaction,
                            hasReacted: e.self.hasReacted,
                            count: e.count
                        }))
                    }, t.toggleShowHiddenReactions = function() {
                        t.setState({
                            showHiddenReactions: !t.state.showHiddenReactions
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.sortedReactions.length >= 7,
                        t = this.state.showHiddenReactions || !e ? this.props.sortedReactions : this.props.sortedReactions.slice(0, 5);
                    return o.createElement(f._27, {
                        margin: {
                            bottom: .5,
                            left: 0
                        },
                        zIndex: f._53.Above,
                        className: "clips-emote-picker"
                    }, o.createElement(L.b, {
                        suppressScrollX: !0
                    }, o.createElement(f._4, {
                        className: "clips-emote-picker__content"
                    }, o.createElement(f._4, {
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(f._4, {
                        margin: {
                            left: 1
                        },
                        padding: {
                            y: .5
                        }
                    }, o.createElement(f.O, null, Object(l.d)("Reactions", "ClipsReactionCarousel"))), o.createElement(f._4, {
                        display: f.P.Flex,
                        flexDirection: f.R.Row,
                        flexWrap: f.S.Wrap,
                        padding: {
                            y: .5
                        },
                        margin: {
                            left: 1
                        }
                    }, t.filter(this.filterReaction).map(this.renderReaction), e && o.createElement(f._4, {
                        margin: {
                            bottom: .5
                        },
                        display: f.P.Flex,
                        alignItems: f.c.Center
                    }, o.createElement(f.v, {
                        ariaLabel: this.state.showHiddenReactions ? Object(l.d)("Show less reactions", "ClipsReactionCarousel") : Object(l.d)("Show more reactions", "ClipsReactionCarousel"),
                        onClick: this.toggleShowHiddenReactions,
                        "data-test-selector": "clips-emote-picker-toggler",
                        icon: this.state.showHiddenReactions ? f._18.AngleLeft : f._18.AngleRight
                    })))), o.createElement(Pe, {
                        addClipReaction: this.props.addClipReaction,
                        removeClipReaction: this.props.removeClipReaction,
                        sortedReactions: this.props.sortedReactions
                    }))))
                }, t = a.__decorate([Object(p.d)("ClipsEmotePicker")], t)
            }(o.Component)),
            Ue = n("xwy4"),
            Be = n("jFCw"),
            Ve = n("hMIs"),
            ze = (n("LepZ"), 3e3),
            qe = {
                count: 0,
                emote: {
                    id: "62835",
                    token: "bleedPurple"
                },
                self: {
                    hasReacted: !1
                }
            },
            He = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.state = {
                        activeReactionIndex: 0,
                        sortedReactions: []
                    }, n.hasInitializedSortedReactions = !1, n.renderPlusButton = function(e) {
                        var t = {
                            onClick: e
                        };
                        return o.createElement(f.v, a.__assign({
                            icon: f._18.Plus,
                            type: f.x.Hollow,
                            ariaLabel: Object(l.d)("Open Emote Picker", "ClipsReactionCarousel"),
                            "data-test-selector": "social-share-button",
                            size: f.w.Large,
                            blurAfterClick: !0
                        }, t))
                    }, n.renderEmotePickerBalloon = function() {
                        return o.createElement(Fe.a, {
                            display: f.P.InlineBlock,
                            onToggle: n.handleAutoplayTimer,
                            ref: n.saveBalloonWrapperRef
                        }, n.renderPlusButton(), o.createElement(f.p, {
                            direction: f.q.Top,
                            noTail: !0
                        }, o.createElement(Me, {
                            addClipReaction: n.addClipReaction,
                            removeClipReaction: n.removeClipReaction,
                            sortedReactions: n.state.sortedReactions
                        })))
                    }, n.renderLoginPromptBalloon = function() {
                        return o.createElement(f._44, {
                            direction: f._46.Top,
                            label: Object(l.d)("To react to this clip, log in or create a Twitch account.", "ClipsReactionCarousel"),
                            width: 200
                        }, n.renderPlusButton(n.props.login))
                    }, n.renderReaction = function(e, t) {
                        var i = t === n.state.activeReactionIndex;
                        return o.createElement(f.Y, {
                            display: f.P.InlineBlock,
                            position: f._11.Absolute,
                            key: e.emote.id
                        }, o.createElement("div", {
                            className: "clips-reaction " + (i ? "clips-reaction--active" : ""),
                            key: e.emote.id,
                            onMouseEnter: n.reactionCarouselTimer.stop,
                            onMouseLeave: n.reactionCarouselTimer.start
                        }, o.createElement(Ae, {
                            emote: e.emote,
                            addClipReaction: i ? n.addActiveClipReaction : n.toggleReactionDummy,
                            removeClipReaction: i ? n.removeActiveClipReaction : n.toggleReactionDummy,
                            hasReacted: e.self.hasReacted,
                            count: e.count,
                            hideTooltip: !0
                        })))
                    }, n.showNextReaction = function() {
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
                        n.toggleReaction(Te.a.Add, e)
                    }, n.removeClipReaction = function(e) {
                        n.toggleReaction(Te.a.Remove, e)
                    }, n.toggleReaction = function(e, t) {
                        return n.props.isLoggedIn ? (n.updateReactionLocal(e, t), (e === Te.a.Add ? n.props.addClipReaction : n.props.removeClipReaction)(Object(ee.a)({
                            entityID: "clip:" + n.props.slug.toLowerCase(),
                            emoteID: t.id
                        }))) : (n.props.login(), Promise.reject(new Error("user not logged in")))
                    }, n.getActiveReaction = function() {
                        return n.state.sortedReactions[n.state.activeReactionIndex]
                    }, n.getNextValidReactionIndex = function() {
                        var e = n.state.activeReactionIndex + 1;
                        return e >= n.state.sortedReactions.length ? 0 : e
                    }, n.saveBalloonWrapperRef = function(e) {
                        n.balloonWrapperRef = e
                    }, n.reactionCarouselTimer = new Re({
                        intervalMillis: ze,
                        onInterval: n.showNextReaction
                    }), n
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.initializeSortedReactions()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.props.slug !== e.slug && (this.hasInitializedSortedReactions = !1), e.data.clip && e.data.clip.reactions ? this.hasInitializedSortedReactions || this.initializeSortedReactions(e) : this.setState({
                        sortedReactions: []
                    }), e.slug !== this.props.slug && this.balloonWrapperRef && this.balloonWrapperRef.state.showBalloon && this.balloonWrapperRef.toggleBalloon(!1)
                }, t.prototype.render = function() {
                    return this.props.data.clip ? o.createElement(f._4, {
                        display: f.P.Flex,
                        flexGrow: 1
                    }, o.createElement(f._4, {
                        zIndex: f._53.Default,
                        padding: {
                            y: 1
                        }
                    }, this.props.isLoggedIn ? this.renderEmotePickerBalloon() : this.renderLoginPromptBalloon()), o.createElement(f._4, {
                        position: f._11.Relative,
                        display: f.P.Flex,
                        alignItems: f.c.Center,
                        overflow: f._7.Hidden,
                        flexGrow: 1
                    }, this.state.sortedReactions.map(this.renderReaction))) : o.createElement(f._4, null, this.renderPlaceholders())
                }, t.prototype.initializeSortedReactions = function(e) {
                    if (void 0 === e && (e = this.props), e.data.clip && e.data.clip.reactions && e.slug === e.data.clip.slug) {
                        this.hasInitializedSortedReactions = !0;
                        var t = 0 === e.data.clip.reactions.length ? [qe] : e.data.clip.reactions.slice().sort(function(e, t) {
                            return t.count - e.count
                        });
                        this.setState({
                            sortedReactions: t
                        }), this.reactionCarouselTimer.start(), this.props.latencyTracking.reportInteractive()
                    }
                }, t.prototype.toggleReactionDummy = function() {
                    return null
                }, t.prototype.updateReactionLocal = function(e, t) {
                    var n = this.state.sortedReactions.findIndex(function(e) {
                            return e.emote.id === t.id
                        }),
                        i = this.state.sortedReactions.slice();
                    if (-1 !== n) {
                        var a = this.state.sortedReactions[n],
                            r = e === Te.a.Add,
                            o = {
                                count: a.count + (r ? 1 : -1),
                                emote: a.emote,
                                self: {
                                    hasReacted: r
                                }
                            };
                        i.splice(n, 1, o)
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
                }, t.prototype.handleAutoplayTimer = function(e) {
                    e ? Object(T.g)(T.b.emotePicker) : Object(T.e)(T.b.emotePicker)
                }, t.prototype.renderPlaceholders = function() {
                    return o.createElement(f._4, {
                        padding: {
                            y: 1
                        },
                        display: f.P.Flex
                    }, o.createElement(f.e, {
                        type: f.i.FadeIn,
                        duration: f.g.Long,
                        enabled: !0
                    }, o.createElement(f._10, {
                        height: 36,
                        width: 36
                    })))
                }, t = a.__decorate([Object(u.a)(Ue, {
                    name: "addClipReaction"
                }), Object(u.a)(Ve, {
                    name: "removeClipReaction"
                }), Object(u.a)(Be), Object(p.d)("ClipsReactionCarousel")], t)
            }(o.Component);
        var Ge = Object(D.b)(function(e) {
                return {
                    isLoggedIn: Object(A.d)(e)
                }
            }, function(e) {
                return Object(Ee.b)({
                    login: function() {
                        return Object(Oe.f)(we.a.FeedReactionToggle)
                    }
                }, e)
            })(He),
            We = (n("mK8J"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.slug;
                    return o.createElement(f._4, {
                        className: "clips-sidebar",
                        display: f.P.Flex,
                        flexDirection: f.R.Column
                    }, o.createElement(f._27, {
                        borderBottom: !0
                    }, o.createElement(x, {
                        slug: e
                    })), o.createElement(f._4, {
                        className: "clips-sidebar-info",
                        display: f.P.Flex,
                        flexDirection: f.R.Column,
                        justifyContent: f._3.Around
                    }, o.createElement(K, {
                        slug: e
                    })), o.createElement(f._27, {
                        borderTop: !0
                    }, o.createElement(f._4, {
                        display: f.P.Flex,
                        justifyContent: f._3.Between,
                        alignItems: f.c.Center,
                        padding: {
                            x: 1
                        }
                    }, o.createElement(Ge, {
                        slug: e
                    }), o.createElement(Ne, {
                        slug: e
                    }))))
                }, t
            }(o.Component)),
            $e = Object(p.d)("ClipsSidebar", {
                autoReportInteractive: !0
            })(We),
            Ke = n("V5M+"),
            Qe = n("xX9u"),
            Je = n("8Wuk"),
            Ye = n("yDzg"),
            Ze = n("sEID"),
            Xe = n("46tX"),
            et = n("+8VM"),
            tt = n("C5rq"),
            nt = n("QX2Z"),
            it = (n("u0B+"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        hasShared: !1,
                        shareMessage: ""
                    }, t.renderHasNotShared = function() {
                        var e = t.props.data.clip,
                            n = e && e.broadcaster && e.curator && e.game && o.createElement(f._27, {
                                padding: 1,
                                borderTop: !0,
                                borderBottom: !0,
                                display: f.P.Flex,
                                flexDirection: f.R.Row
                            }, o.createElement(f.D, {
                                aspect: f.k.Aspect16x9,
                                alt: Object(l.d)("Clip thumbnail image", "ClipsFeedShare"),
                                src: e.thumbnailURL,
                                size: f.E.Size8
                            }), o.createElement(f._4, {
                                display: f.P.Flex,
                                flexDirection: f.R.Column,
                                padding: {
                                    left: 1
                                }
                            }, o.createElement(f.O, {
                                color: f.J.Alt2,
                                fontSize: f.T.Size4
                            }, Object(l.d)("{broadcasterDisplayName} playing {gameDisplayName}", {
                                broadcasterDisplayName: e.broadcaster.displayName,
                                gameDisplayName: e.game.displayName
                            }, "ClipsFeedShare")), o.createElement(f.O, {
                                color: f.J.Alt2
                            }, Object(l.d)("clipped by {curatorName}", {
                                curatorName: e.curator.displayName
                            }, "ClipsFeedShare"))));
                        return o.createElement("div", null, o.createElement(f._27, {
                            display: f.P.Flex,
                            padding: 1
                        }, o.createElement(f.l, {
                            alt: Object(l.d)("User Avatar", "ClipsFeedShare"),
                            size: 40
                        }), o.createElement("textarea", {
                            className: "clips-feed-share-text-area",
                            value: t.state.shareMessage,
                            onChange: t.handleMessageEdit,
                            placeholder: Object(l.d)("Add a description...", "ClipsFeedShare")
                        })), n, o.createElement(f._27, {
                            padding: 1,
                            display: f.P.Flex,
                            justifyContent: f._3.End
                        }, t.getCloseButton(), o.createElement(f._4, {
                            padding: {
                                left: 1
                            },
                            display: f.P.InlineBlock
                        }, o.createElement(f.u, {
                            "data-test-selector": "clips-feed-share-submit",
                            type: f.A.Default,
                            onClick: t.createFeedPost
                        }, Object(l.d)("Share", "ClipsFeedShare")))))
                    }, t.renderHasShared = function() {
                        return o.createElement(f._4, null, o.createElement(f._27, {
                            padding: {
                                x: 1,
                                y: 2
                            },
                            color: f.J.Link
                        }, o.createElement(f.O, {
                            fontSize: f.T.Size4
                        }, Object(l.d)("Clip Shared", "ClipsFeedShare"))), o.createElement(f._27, {
                            padding: 1
                        }, o.createElement(f.O, {
                            fontSize: f.T.Size5
                        }, Object(l.d)("Your clip was successfully shared to your Channel Feed.", "ClipsFeedShare"), " ", o.createElement("a", {
                            href: Object(F.c)(t.props.login)
                        }, Object(l.d)("View it now", "ClipsFeedShare")))), o.createElement(f._27, {
                            padding: 1,
                            display: f.P.Flex,
                            justifyContent: f._3.End,
                            borderTop: !0
                        }, t.getCloseButton()))
                    }, t.createFeedPost = function() {
                        t.props.createPost(t.state.shareMessage), t.setState({
                            hasShared: !0
                        })
                    }, t.handleMessageEdit = function(e) {
                        t.setState({
                            shareMessage: e.currentTarget.value
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e;
                    return e = this.props.data.clip ? this.state.hasShared ? this.renderHasShared() : this.renderHasNotShared() : o.createElement(f._4, null), o.createElement(f._4, {
                        className: "clips-feed-share"
                    }, o.createElement(et.a, {
                        closeOnBackdropClick: !0
                    }), o.createElement(f._27, {
                        background: f.m.Alt
                    }, e))
                }, t.prototype.getCloseButton = function() {
                    return o.createElement(f.u, {
                        "data-test-selector": "clips-feed-share-close",
                        type: f.A.Hollow,
                        onClick: this.props.closeModal
                    }, Object(l.d)("Close", "ClipsFeedShare"))
                }, t
            }(o.Component)),
            at = Object(u.a)(tt)(Object(u.a)(nt, {
                props: function(e) {
                    return {
                        createPost: function(t) {
                            if (e.mutate) return e.mutate(a.__assign({}, Object(ee.a)({
                                channelID: e.ownProps.userId,
                                body: t,
                                embedURLs: [Object(F.b)(e.ownProps.slug)],
                                postToTwitter: !1
                            })))
                        }
                    }
                }
            })(Object(p.d)("ClipsFeedShare")(it)));
        var rt, ot = Object(D.b)(function(e) {
                var t = Object(A.c)(e);
                return {
                    userId: t ? t.id : "",
                    login: t ? t.login : ""
                }
            }, function(e) {
                return Object(Ee.b)({
                    closeModal: Ke.c
                }, e)
            })(at),
            lt = n("2hJ3"),
            st = n("f6Cj");
        n("Jjeq");
        ! function(e) {
            e.ChannelFeed = "channel_feed"
        }(rt || (rt = {}));
        var dt = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.getUrl = function() {
                        return t.props.url || window.location.href
                    }, t.onShareClick = function() {
                        t.props.onShareClick && t.props.onShareClick(t.props.type)
                    }, t.copyPageUrl = function() {
                        t.onShareClick(), Object(lt.a)(t.getUrl())
                    }, t.renderIcon = function() {
                        var e = t.getAssetFromType();
                        return o.createElement(f._4, {
                            className: "clips-mobile-share-sheet__share-icon clips-social-button__icon " + t.addSocialClassModifier("clips-social-button__icon")
                        }, o.createElement(f._17, {
                            asset: e,
                            fill: !0
                        }))
                    }, t.isLink = function() {
                        return t.props.type !== Je.b.Copy && t.props.type !== rt.ChannelFeed
                    }, t.getAssetFromType = function() {
                        switch (t.props.type) {
                            case Je.b.Twitter:
                                return f._18.Twitter;
                            case Je.b.Facebook:
                                return f._18.Facebook;
                            case Je.b.VKontakte:
                                return f._18.VKontakte;
                            case Je.b.Reddit:
                                return f._18.Reddit;
                            case Je.b.Copy:
                                return f._18.Copy;
                            case rt.ChannelFeed:
                                return f._18.LogoGlitch;
                            default:
                                return f._18.Copy
                        }
                    }, t.getLabelFromType = function() {
                        switch (t.props.type) {
                            case Je.b.Twitter:
                                return Object(l.d)("Twitter", "ClipsSocialShare");
                            case Je.b.Facebook:
                                return Object(l.d)("Facebook", "ClipsSocialShare");
                            case Je.b.VKontakte:
                                return Object(l.d)("VK", "ClipsSocialShare");
                            case Je.b.Reddit:
                                return Object(l.d)("Reddit", "ClipsSocialShare");
                            case Je.b.Copy:
                                return Object(l.d)("Copy", "ClipsSocialShare");
                            case rt.ChannelFeed:
                                return Object(l.d)("Pulse", "ClipsSocialShare");
                            default:
                                return ""
                        }
                    }, t.addSocialClassModifier = function(e) {
                        switch (t.props.type) {
                            case Je.b.Twitter:
                                return e + "--twitter";
                            case Je.b.Reddit:
                                return e + "--reddit";
                            case Je.b.Facebook:
                                return e + "--facebook";
                            case Je.b.VKontakte:
                                return e + "--vkontakte";
                            case Je.b.Copy:
                                return e + "--copy";
                            case rt.ChannelFeed:
                                return e + "--pulse";
                            default:
                                return ""
                        }
                    }, t.getLinkTarget = function() {
                        var e = t.props,
                            n = e.text,
                            i = e.type,
                            a = t.getUrl(),
                            r = n || "";
                        switch (i) {
                            case Je.b.Reddit:
                                return Object(st.b)(a, r);
                            case Je.b.VKontakte:
                                return Object(st.d)(a);
                            case Je.b.Facebook:
                                return Object(st.a)(a);
                            case Je.b.Twitter:
                                return Object(st.c)(a, r);
                            default:
                                return ""
                        }
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = o.createElement(f._4, {
                        className: "clips-mobile-share-sheet__row",
                        display: f.P.Flex,
                        alignItems: f.c.Center,
                        key: this.props.type,
                        padding: {
                            right: 2
                        },
                        margin: {
                            bottom: 2,
                            left: 2
                        }
                    }, this.renderIcon(), o.createElement(f._27, {
                        margin: {
                            left: 1
                        }
                    }, o.createElement(f.O, {
                        type: f._41.Span
                    }, this.getLabelFromType())));
                    return this.renderLink(e)
                }, t.prototype.renderLink = function(e) {
                    var t = "clips-social-button__link " + this.addSocialClassModifier("clips-social-button__link");
                    return this.isLink() ? o.createElement("a", {
                        href: this.getLinkTarget(),
                        target: "_blank",
                        onClick: this.onShareClick,
                        className: t
                    }, e) : o.createElement("div", {
                        onClick: this.copyPageUrl,
                        className: t
                    }, e)
                }, t
            }(o.Component),
            ct = (n("EpdV"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isModalOpen: !1,
                        isCopiedModalOpen: !1
                    }, t.onToggleShareButton = function() {
                        t.setState(function(e) {
                            return {
                                isModalOpen: !e.isModalOpen
                            }
                        })
                    }, t.onShareClick = function(e) {
                        t.setState({
                            isModalOpen: !1
                        }), e === Je.b.Copy && (t.setState({
                            isCopiedModalOpen: !0
                        }), setTimeout(function() {
                            return t.setState({
                                isCopiedModalOpen: !1
                            })
                        }, 1500))
                    }, t.onOpenFeedShare = function() {
                        t.setState({
                            isModalOpen: !1
                        }), t.props.openFeedShare()
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    this.props.clip.id && e.clip.id && this.props.clip.id !== e.clip.id && this.setState({
                        isModalOpen: !1
                    })
                }, t.prototype.render = function() {
                    var e = this,
                        t = Object(l.d)("Share Clip", "ClipsSocialShare"),
                        n = Object(l.d)("Copied!", "ClipsSocialShare");
                    return o.createElement(f._4, {
                        display: f.P.Flex,
                        justifyContent: f._3.End,
                        alignItems: f.c.Center,
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(f.u, {
                        type: f.A.Hollow,
                        onClick: this.onToggleShareButton,
                        "data-test-selector": "social-share-mobile-button"
                    }, t), this.state.isModalOpen && o.createElement(f._27, {
                        attachLeft: !0,
                        attachRight: !0,
                        className: "clips-mobile-share-sheet",
                        display: f.P.Flex,
                        flexDirection: f.R.Column,
                        position: f._11.Fixed,
                        zIndex: f._53.Above,
                        padding: {
                            bottom: 4
                        },
                        "data-test-selector": "social-share-mobile-menu-root"
                    }, o.createElement(f._4, {
                        className: "clips-mobile-share-sheet__title",
                        display: f.P.Flex,
                        flexDirection: f.R.Row,
                        justifyContent: f._3.Between,
                        alignItems: f.c.Center,
                        margin: {
                            bottom: 2
                        },
                        padding: {
                            right: .5,
                            left: 2
                        }
                    }, o.createElement(f.O, {
                        type: f._41.Span,
                        "data-test-selector": "social-share-mobile-menu-title"
                    }, t), o.createElement(f.u, {
                        onClick: this.onToggleShareButton,
                        "data-test-selector": "social-share-mobile-menu-close"
                    }, o.createElement(f._17, {
                        asset: f._18.Close
                    }))), o.createElement(f._4, null, o.createElement(dt, {
                        key: rt.ChannelFeed,
                        type: rt.ChannelFeed,
                        onShareClick: this.onOpenFeedShare
                    }), Ze.b.map(function(t) {
                        return o.createElement(dt, {
                            key: t.type,
                            type: t.type,
                            text: e.props.clip.title,
                            url: Object(Ye.a)(e.props.clip.url, t.params),
                            onShareClick: e.onShareClick
                        })
                    }))), this.state.isCopiedModalOpen && o.createElement(f._27, {
                        fullWidth: !0,
                        attachLeft: !0,
                        attachBottom: !0,
                        className: "clips-mobile-share-sheet",
                        position: f._11.Fixed,
                        display: f.P.Flex,
                        flexDirection: f.R.Column,
                        alignItems: f.c.Center,
                        zIndex: f._53.Above,
                        padding: {
                            y: 3
                        },
                        textAlign: f._37.Center,
                        background: f.m.Accent
                    }, o.createElement(f.O, {
                        type: f._41.Span,
                        fontSize: f.T.Size4
                    }, n)))
                }, t
            }(o.Component)),
            ut = n("bnNq"),
            pt = (n("twHn"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.openFeedShare = function() {
                        t.props.isLoggedIn ? t.props.showModal(ot, {
                            slug: t.props.slug
                        }) : t.props.login()
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this;
                    if (!this.props.data.clip) return o.createElement(f._4, null, this.renderPlaceholders());
                    if (Object(Xe.c)(window.navigator.userAgent)) return o.createElement(ct, {
                        clip: this.props.data.clip,
                        openFeedShare: this.openFeedShare
                    });
                    var t = Object(l.d)("More", "ClipsSocialShare");
                    return o.createElement(f.Y, {
                        display: f.P.Flex,
                        justifyContent: f._3.End,
                        alignItems: f.c.Center,
                        margin: {
                            y: 1
                        }
                    }, o.createElement("div", {
                        onClick: this.cancelAutoplayTimer
                    }, Ze.b.map(function(t) {
                        return o.createElement(f._4, {
                            display: f.P.InlineBlock,
                            key: t.type,
                            margin: {
                                right: 1
                            }
                        }, o.createElement(Je.a, {
                            key: t.type,
                            type: t.type,
                            text: e.props.data.clip.title,
                            url: Object(Ye.a)(e.props.data.clip.url, t.params)
                        }))
                    }), o.createElement(f._27, {
                        margin: {
                            right: 1
                        }
                    }, o.createElement("div", {
                        className: "social-button"
                    }, o.createElement(f._44, {
                        label: "Twitch",
                        direction: f._46.Top
                    }, o.createElement("button", {
                        onClick: this.openFeedShare,
                        className: "social-button__link social-button__link--twitch",
                        "data-test-selector": "social-share-button-twitch"
                    }, o.createElement(f._4, {
                        className: "social-button__icon social-button__icon--twitch",
                        display: f.P.Flex,
                        alignItems: f.c.Center,
                        justifyContent: f._3.Center
                    }, o.createElement(f._17, {
                        asset: f._18.LogoGlitch,
                        width: 22,
                        height: 22
                    })))))), o.createElement(f._4, {
                        display: f.P.InlineBlock,
                        position: f._11.Relative
                    }, o.createElement(Fe.a, null, o.createElement(f.u, {
                        type: f.A.Hollow,
                        ariaLabel: t,
                        "data-test-selector": "social-share-button"
                    }, t), o.createElement(f.p, {
                        direction: f.q.BottomRight,
                        noTail: !0
                    }, o.createElement(f._4, {
                        padding: 1
                    }, o.createElement(f.U, {
                        id: "social-share-link",
                        orientation: f.V.Vertical,
                        label: Object(l.d)("Link", "ClipsSocialShare"),
                        "data-test-selector": "social-share-link"
                    }, o.createElement(Qe.a, {
                        value: this.props.data.clip.url
                    })), o.createElement(f._4, {
                        padding: {
                            top: 1
                        }
                    }, o.createElement(f.U, {
                        id: "social-share-embed-link",
                        orientation: f.V.Vertical,
                        label: Object(l.d)("Embed Code", "ClipsSocialShare")
                    }, o.createElement(Qe.a, {
                        value: this.props.data.clip.embedURL
                    })))))))))
                }, t.prototype.cancelAutoplayTimer = function() {
                    Object(T.d)(T.b.socialShare)
                }, t.prototype.reportInteractive = function() {
                    this.props.data.clip && this.props.latencyTracking.reportInteractive()
                }, t.prototype.renderPlaceholders = function() {
                    return o.createElement(f.e, {
                        type: f.i.FadeIn,
                        duration: f.g.Medium,
                        enabled: !0
                    }, o.createElement(f._4, {
                        margin: {
                            top: 1,
                            bottom: 1
                        },
                        display: f.P.Flex,
                        justifyContent: f._3.End
                    }, o.createElement(f._4, {
                        margin: {
                            left: 1
                        }
                    }, o.createElement(f._10, {
                        width: 30,
                        height: 30
                    })), o.createElement(f._4, {
                        margin: {
                            left: 1
                        }
                    }, o.createElement(f._10, {
                        width: 30,
                        height: 30
                    })), o.createElement(f._4, {
                        margin: {
                            left: 1
                        }
                    }, o.createElement(f._10, {
                        width: 30,
                        height: 30
                    })), o.createElement(f._4, {
                        margin: {
                            left: 1
                        }
                    }, o.createElement(f._10, {
                        width: 30,
                        height: 30
                    })), o.createElement(f._4, {
                        margin: {
                            left: 1
                        }
                    }, o.createElement(f._10, {
                        width: 30,
                        height: 30
                    })), o.createElement(f._4, {
                        margin: {
                            left: 1
                        }
                    }, o.createElement(f._10, {
                        width: 46,
                        height: 30
                    }))))
                }, t = a.__decorate([Object(p.d)("ClipsSocialShare"), Object(u.a)(ut)], t)
            }(o.Component));
        var mt = Object(D.b)(function(e) {
                return {
                    isLoggedIn: Object(A.d)(e)
                }
            }, function(e) {
                return Object(Ee.b)({
                    showModal: Ke.d,
                    login: function() {
                        return Object(Oe.f)(we.a.FeedReactionToggle)
                    }
                }, e)
            })(pt),
            vt = n("BhGt"),
            gt = "MOST_RECENT_CLIPS_WATCHED_STORAGE_KEY",
            ht = 10;

        function ft() {
            return JSON.parse(l.l.get(gt, "[]"))
        }

        function kt(e) {
            var t = ft();
            t && t.length >= ht && (t = t.slice(1, ht)), l.l.set(gt, JSON.stringify(t.concat([e])))
        }
        n("vtXo");
        var yt = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.state = {
                        initialSlug: "",
                        isLoaded: !1
                    }, n.hasSetPlayerRef = !1, n.setInitialSlug = function(e) {
                        n.setState({
                            initialSlug: e
                        }), kt(e), n.props.latencyTracking.reportInteractive()
                    }, n.setPlayerRef = function(e) {
                        n.playerRef = e
                    }, n.setIsLoaded = function() {
                        n.setState({
                            isLoaded: !0
                        })
                    }, n.setInitialSlug(n.props.slug), n
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.setInitialSlug(this.props.slug)
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.state.initialSlug || this.setInitialSlug(e.slug), this.props.slug !== e.slug && e.slug && this.setClip(e.slug)
                }, t.prototype.componentWillUnmount = function() {
                    var e;
                    e = this.props.slug, delete ie[e], oe.emit(re)
                }, t.prototype.componentDidUpdate = function() {
                    var e, t;
                    !this.hasSetPlayerRef && this.playerRef && (this.hasSetPlayerRef = !0, e = this.props.slug, t = this.playerRef.contentWindow, ie[e] = t, oe.emit(ae), this.playerRef.contentWindow.postMessage(le({
                        method: se
                    }), F.a))
                }, t.prototype.render = function() {
                    return this.state.initialSlug ? o.createElement(f._27, {
                        className: "clips-video-iframe",
                        position: f._11.Relative,
                        fullWidth: !0
                    }, o.createElement(f.j, {
                        ratio: f.k.Aspect16x9
                    }, o.createElement(f._27, {
                        display: this.state.isLoaded ? f.P.Hide : f.P.Flex,
                        color: f.J.Overlay,
                        alignItems: f.c.Center,
                        justifyContent: f._3.Center
                    }, o.createElement(f._6, {
                        size: f._25.Large,
                        inheritColor: !0
                    })), o.createElement(f.Y, {
                        display: this.state.isLoaded ? f.P.Block : f.P.HideAccessible
                    }, o.createElement("iframe", {
                        src: F.a + "/?player=clips-viewing&clip=" + this.state.initialSlug + "&origin=" + window.location.origin,
                        frameBorder: "0",
                        scrolling: "no",
                        allowFullScreen: !0,
                        ref: this.setPlayerRef,
                        onLoad: this.setIsLoaded
                    })))) : null
                }, t.prototype.setClip = function(e) {
                    this.playerRef && (this.playerRef.contentWindow.postMessage(function(e) {
                        return le({
                            method: de,
                            arg: e
                        })
                    }(e), F.a), kt(e))
                }, t = a.__decorate([Object(p.d)("ClipsVideoIframe")], t)
            }(o.Component),
            bt = n("CIox"),
            St = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.setImage = function(e) {
                        var t = e.src,
                            i = e.altSrc,
                            a = new Image;
                        a.onerror = function() {
                            return n.setState({
                                src: i
                            })
                        }, a.onload = function() {
                            return n.setState({
                                src: t
                            })
                        }, a.src = t
                    }, n.state = {
                        src: t.src
                    }, n
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.src && this.setImage(this.props)
                }, t.prototype.componentWillReceiveProps = function(e) {
                    e.src !== this.props.src && this.setImage(e)
                }, t.prototype.render = function() {
                    return o.createElement("img", {
                        src: this.state.src,
                        className: this.props.className,
                        width: "" + this.props.width,
                        height: "" + this.props.height,
                        alt: this.props.altText
                    })
                }, t
            }(o.Component),
            Ct = 9,
            _t = (n("r+Hw"), Object(p.d)("ClipsAutoplayView")(function(e) {
                var t, n = e.autoplayClip && e.autoplayClip.broadcaster && e.autoplayClip.game && Object(l.d)("{broadcasterDisplayName} playing {gameDisplayName}", {
                    broadcasterDisplayName: e.autoplayClip.broadcaster.displayName,
                    gameDisplayName: e.autoplayClip.game.displayName
                }, "ClipsAutoplayView");
                return t = "canceled" === e.timerState ? o.createElement(f._27, {
                    margin: {
                        bottom: .5
                    }
                }, o.createElement(f.O, {
                    ellipsis: !0,
                    fontSize: f.T.Size6,
                    breakpointExtraSmall: {
                        fontSize: f.T.Size5
                    }
                }, Object(l.d)("Next Clip", "ClipsAutoplayView"))) : o.createElement(f._27, {
                    display: f.P.Flex,
                    justifyContent: f._3.Between,
                    flexDirection: f.R.Row,
                    alignItems: f.c.Center,
                    margin: {
                        bottom: .5
                    }
                }, o.createElement(f.O, {
                    ellipsis: !0,
                    fontSize: f.T.Size6,
                    breakpointExtraSmall: {
                        fontSize: f.T.Size5
                    }
                }, Object(l.d)("{seconds, plural, one {Next Clip in {seconds} second} other {Next Clip in {seconds} seconds}}", {
                    seconds: e.countdownValue.toString()
                }, "ClipsAutoplayView")), o.createElement(f.u, {
                    type: f.A.Hollow,
                    onClick: e.cancelTimer,
                    overlay: !0
                }, Object(l.d)("Cancel", "ClipsAutoplayView"))), o.createElement(f._27, {
                    className: "clips-autoplay",
                    elevation: 2,
                    position: f._11.Absolute,
                    fullWidth: !0,
                    fullHeight: !0,
                    display: f.P.Flex,
                    alignItems: f.c.Center,
                    justifyContent: f._3.Center,
                    zIndex: f._53.Above,
                    padding: {
                        x: 1
                    }
                }, o.createElement(f._4, {
                    className: "clips-autoplay__container",
                    padding: {
                        x: 2
                    },
                    fullWidth: !0
                }, t, o.createElement(f._4, {
                    className: "clips-autoplay__preview",
                    position: f._11.Relative
                }, o.createElement("div", {
                    onClick: function() {
                        e.transitionToNextClip(!1)
                    },
                    "data-test-selector": "clips-autoplay-view-transition",
                    ref: e.setAutoplayRef
                }, o.createElement(f._4, {
                    position: f._11.Relative
                }, o.createElement(f.j, {
                    ratio: f.k.Aspect16x9,
                    overflow: !1
                }, o.createElement(St, {
                    className: "clips-autoplay__image",
                    src: e.autoplayClip.thumbnailURL,
                    altText: Object(l.d)("clip image preview", "ClipsAutoplayView"),
                    altSrc: h
                })), "running" === e.timerState && o.createElement(f._4, {
                    position: f._11.Absolute,
                    attachBottom: !0,
                    fullWidth: !0
                }, o.createElement(f._14, {
                    countdown: Ct,
                    size: f._15.Small
                }))), o.createElement(f._27, {
                    position: f._11.Absolute,
                    attachTop: !0,
                    attachLeft: !0,
                    fullHeight: !0,
                    fullWidth: !0,
                    zIndex: f._53.Above,
                    breakpointExtraSmall: {
                        display: f.P.Hide
                    }
                }), o.createElement(f._27, {
                    position: f._11.Absolute,
                    attachBottom: !0,
                    attachLeft: !0,
                    zIndex: f._53.Above,
                    padding: 1,
                    fullWidth: !0,
                    breakpointExtraSmall: {
                        position: f._11.Relative,
                        padding: 0,
                        margin: {
                            top: 1
                        }
                    }
                }, o.createElement(f.O, {
                    color: f.J.Overlay,
                    bold: !0,
                    ellipsis: !0,
                    fontSize: f.T.Size6,
                    breakpointExtraSmall: {
                        fontSize: f.T.Size5
                    }
                }, e.autoplayClip.title), o.createElement(f.O, {
                    color: f.J.OverlayAlt,
                    ellipsis: !0,
                    fontSize: f.T.Size6,
                    breakpointExtraSmall: {
                        fontSize: f.T.Size5
                    }
                }, n))))))
            }));

        function Nt(e, t, n) {
            return {
                vod: e.video ? e.video.id : null,
                content_mode: "clip",
                content: v(n),
                medium: "clips",
                recommended_vod_id: t.id,
                recommended_vod_type: "clip"
            }
        }

        function Et(e, t, n) {
            b(c.SpadeEventType.PlayerRecShow, e.slug, a.__assign({}, Nt(e, t, n), {
                type: "clip"
            }))
        }

        function wt(e, t, n) {
            b(c.SpadeEventType.PlayerShowFeatured, e.slug, a.__assign({}, Nt(e, t, n), {
                type: "clip"
            }))
        }
        var Ot = n("3yr7"),
            Ft = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.state = {
                        countdownValue: Ct,
                        timerState: "running",
                        autoplayClip: null,
                        autoplayClipCategory: null
                    }, n.autoplayTimerInfluencerState = T.c, n.hasSetAutoplayClip = !1, n.onTimerUpdate = function() {
                        n.state.countdownValue > 0 ? n.setState(function(e) {
                            return {
                                countdownValue: e.countdownValue - 1
                            }
                        }) : (n.countdownTimer.stop(), n.transitionToNextClip(!0))
                    }, n.cancelTimer = function() {
                        n.countdownTimer.stop(), n.setState({
                            timerState: "canceled"
                        })
                    }, n.transitionToNextClip = function(e) {
                        var t = n.state,
                            i = t.autoplayClip,
                            r = t.autoplayClipCategory,
                            o = n.props.data.clip;
                        i && (o && r && e && function(e, t, n) {
                            b(c.SpadeEventType.PlayerRecAutoplay, e.slug, a.__assign({}, Nt(e, t, n), {
                                recommended_vod_view: "featured"
                            }))
                        }(o, i, r), n.props.history.push("/" + i.slug))
                    }, n.onAutoplayInfluencerUpdate = function(e, t) {
                        if ("canceled" !== n.state.timerState)
                            if (e !== T.a.cancel) {
                                n.autoplayTimerInfluencerState = a.__assign({}, n.autoplayTimerInfluencerState, ((i = {})[t] = e === T.a.pause, i));
                                var i, r = Object.keys(n.autoplayTimerInfluencerState).some(function(e) {
                                    return n.autoplayTimerInfluencerState[e]
                                });
                                "running" === n.state.timerState || r ? "running" === n.state.timerState && r && (n.countdownTimer.stop(), n.setState({
                                    timerState: "paused"
                                })) : (n.countdownTimer.start(), n.setState({
                                    countdownValue: Ct,
                                    timerState: "running"
                                }))
                            } else n.cancelTimer()
                    }, n.setAutoplayClip = function(e) {
                        if (!e.data.clip || n.hasSetAutoplayClip) return null;
                        n.hasSetAutoplayClip = !0;
                        for (var t = ft(), i = 0; i < m.length; i++) {
                            var a = e.data.clip.relatedClips[m[i]].find(function(e) {
                                return !t.includes(e.slug)
                            });
                            if (a) {
                                var r = m[i];
                                return Et(e.data.clip, a, r), wt(e.data.clip, a, r), void n.setState({
                                    autoplayClip: a,
                                    autoplayClipCategory: r
                                })
                            }
                        }
                    }, n.setAutoplayRef = function(e) {
                        n.autoplayRef = e
                    }, n.countdownTimer = new Re({
                        onInterval: n.onTimerUpdate,
                        intervalMillis: 1e3
                    }), Object(T.f)(n.onAutoplayInfluencerUpdate), n
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.setUpContainerView(), this.setAutoplayClip(this.props), this.countdownTimer.start()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.setAutoplayClip(e)
                }, t.prototype.componentWillUnmount = function() {
                    this.unregister()
                }, t.prototype.checkVisible = function(e) {
                    return a.__awaiter(this, void 0, void 0, function() {
                        var t;
                        return a.__generator(this, function(n) {
                            return this.autoplayRef && (t = this.autoplayRef.getBoundingClientRect(), e.top > t.top + t.height / 4 ? Object(T.e)(T.b.playerView) : Object(T.g)(T.b.playerView)), [2]
                        })
                    })
                }, t.prototype.render = function() {
                    return null === this.state.autoplayClip ? o.createElement(f._4, null) : o.createElement(_t, {
                        countdownValue: this.state.countdownValue,
                        timerState: this.state.timerState,
                        autoplayClip: this.state.autoplayClip,
                        cancelTimer: this.cancelTimer,
                        transitionToNextClip: this.transitionToNextClip,
                        setAutoplayRef: this.setAutoplayRef
                    })
                }, t.prototype.setUpContainerView = function() {
                    var e = this.context.registerReceiver;
                    e ? this.unregister = e(this) : l.j.warn("<ClipsVideoIframeComponent /> initialized missing a <ScrollableArea /> provider")
                }, t.contextTypes = {
                    registerReceiver: r.func
                }, t
            }(o.Component),
            Tt = Object(bt.e)(Object(u.a)(Ot)(Object(p.d)("ClipsAutoplayContainer")(Ft))),
            Rt = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = "ended" === this.props.playerConnection.playerProps.playback;
                    return Object(Xe.c)(navigator.userAgent), e ? o.createElement(Tt, {
                        slug: this.props.slug
                    }) : null
                }, t
            }(o.Component),
            It = te({
                playerId: function(e) {
                    return e.slug
                },
                requestedPlayerProps: ["playback"]
            })(Object(p.d)("ClipsAutoplay", {
                autoReportInteractive: !0
            })(Rt)),
            xt = (n("+g5R"), n("RsNJ")),
            Dt = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isDismissed: !1,
                        isShowingLiveCTA: !1
                    }, t.dismissWatchLivePrompt = function(e) {
                        e.preventDefault(), t.setState({
                            isDismissed: !0
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    this.updateLiveVisibility(e)
                }, t.prototype.render = function() {
                    if (this.state.isDismissed || !this.state.isShowingLiveCTA || this.props.playerConnection.playerProps.ui && this.props.playerConnection.playerProps.ui.isSettingsShown || "ended" === this.props.playerConnection.playerProps.playback || !(this.props.data.clip && this.props.data.clip.game && this.props.data.clip.broadcaster && this.props.data.clip.broadcaster.stream)) return null;
                    var e = this.props.data.clip,
                        t = e.broadcaster,
                        n = e.game,
                        i = Object(F.c)(t.login);
                    return o.createElement(f.Z, {
                        className: "watch-live-prompt",
                        display: f.P.Flex,
                        padding: 1,
                        elevation: 2,
                        flexDirection: f.R.Row,
                        alignItems: f.c.Center,
                        position: f._11.Absolute,
                        zIndex: f._53.Above,
                        background: f.m.Overlay
                    }, o.createElement("a", {
                        href: i,
                        target: "_blank"
                    }, o.createElement(f._4, {
                        position: f._11.Relative
                    }, o.createElement(f._4, {
                        position: f._11.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        zIndex: f._53.Above
                    }, o.createElement(f._8, {
                        label: Object(l.d)("LIVE", "WatchLivePrompt"),
                        type: f._9.Live
                    })), o.createElement(f.B, {
                        row: !0
                    }, o.createElement(f.D, {
                        src: this.props.data.clip.thumbnailURL,
                        alt: Object(l.d)("Clip Thumbnail", "ClipWatchLivePrompt"),
                        aspect: f.k.Aspect16x9,
                        size: f.E.Size6
                    }), o.createElement(f.C, null, o.createElement(f._4, {
                        className: "watch-live-prompt__copy",
                        padding: {
                            x: 1
                        }
                    }, o.createElement(f.O, {
                        type: f._41.H5,
                        color: f.J.Overlay,
                        lineHeight: f._5.Heading,
                        ellipsis: !0
                    }, Object(l.d)("Watch {displayName} Live", {
                        displayName: t.displayName
                    }, "WatchLivePrompt")), o.createElement(f.O, {
                        type: f._41.H6,
                        color: f.J.OverlayAlt,
                        lineHeight: f._5.Heading,
                        ellipsis: !0
                    }, Object(l.d)("playing {gameName}", {
                        gameName: n.displayName
                    }, "WatchLivePrompt")))))), o.createElement(f.v, {
                        ariaLabel: Object(l.d)("Dismiss watch live prompt", "WatchLivePrompt"),
                        icon: f._18.Close,
                        onClick: this.dismissWatchLivePrompt,
                        type: f.x.Default,
                        overlay: !0,
                        size: f.w.Large
                    })))
                }, t.prototype.updateLiveVisibility = function(e) {
                    var t = e.playerConnection.playerProps,
                        n = t.currentTime,
                        i = t.duration;
                    if (!n || !i) return !1;
                    var a = parseInt(i, 10),
                        r = parseInt(n, 10),
                        o = .6 * a;
                    !this.state.isShowingLiveCTA && r > o && 18 <= a && this.setState({
                        isShowingLiveCTA: !0
                    })
                }, t = a.__decorate([Object(u.a)(xt)], t)
            }(o.Component),
            At = te({
                playerId: function(e) {
                    return e.slug
                },
                requestedPlayerProps: ["currentTime", "duration", "playback", "ui"]
            })(Dt),
            Lt = (n("zU1d"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return o.createElement(f.Y, {
                        position: f._11.Relative,
                        fullHeight: !0,
                        fullWidth: !0
                    }, o.createElement("div", {
                        ref: this.props.setPlayerWrapperRef
                    }, o.createElement(f._27, {
                        className: "clips-video-overlay",
                        fullHeight: !0,
                        fullWidth: !0,
                        position: f._11.Absolute
                    }, o.createElement(It, {
                        slug: this.props.slug
                    }), !Object(Xe.c)(window.navigator.userAgent) && o.createElement(At, {
                        slug: this.props.slug
                    })), o.createElement(f._4, null, this.props.children)))
                }, t
            }(o.Component)),
            jt = n("sikP"),
            Pt = n("oSFp"),
            Mt = n("mw/a"),
            Ut = n("Ev5K"),
            Bt = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleModalOpened = function(e) {
                        return t.props.playerConnection.sendMessage(function(e) {
                            return le({
                                method: "closeModeration",
                                arg: e
                            })
                        }(e))
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    var t = this.props.playerConnection.playerProps.clipsModeration,
                        n = e.playerConnection.playerProps.clipsModeration;
                    if (!n || !t) return null;
                    if (!t.isClipsReportModalOpen && n.isClipsReportModalOpen) {
                        var i = this.props.data.clip && this.props.data.clip.broadcaster ? this.props.data.clip.broadcaster.id : "";
                        this.props.showModal(Pt.a, {
                            title: Object(l.d)("Report this Clip", "ClipsViewModerationModals"),
                            reportContext: {
                                contentType: Mt.a.Clip,
                                contentID: this.props.slug,
                                targetUserID: i
                            },
                            onClose: this.props.closeModal
                        }), this.handleModalOpened("report")
                    }!t.isClipsDeleteModalOpen && n.isClipsDeleteModalOpen && (this.props.showModal(jt.d, {
                        slug: this.props.slug,
                        onClose: this.props.closeModal
                    }), this.handleModalOpened("delete")), !t.isClipsDeleteAllModalOpen && n.isClipsDeleteAllModalOpen && (this.props.showModal(jt.e, {
                        slug: this.props.slug,
                        onClose: this.props.closeModal
                    }), this.handleModalOpened("deleteAll"))
                }, t.prototype.render = function() {
                    return null
                }, t
            }(o.Component),
            Vt = te({
                playerId: function(e) {
                    return e.slug
                },
                requestedPlayerProps: ["clipsModeration"]
            })(Object(u.a)(Ut)(Object(p.d)("ClipsViewModerationModals")(Bt)));
        var zt = Object(D.b)(null, function(e) {
                return Object(Ee.b)({
                    showModal: Ke.d,
                    closeModal: Ke.c
                }, e)
            })(Vt),
            qt = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.playerWrapperRef = null, t.setPlayerWrapperRef = function(e) {
                        return t.playerWrapperRef = e
                    }, t.sendExitFullscreenMessage = function() {
                        t.props.playerConnection.sendMessage(le({
                            method: "fullscreen",
                            arg: !1
                        }))
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    var t = this.props.playerConnection.playerProps.ui,
                        n = e.playerConnection.playerProps.ui;
                    (t && t.isSettingsShown) !== (n && n.isSettingsShown) && (n && n.isSettingsShown ? Object(T.e)(T.b.playerMenu) : Object(T.g)(T.b.playerMenu));
                    var i = this.props.playerConnection.playerProps.screenMode,
                        a = e.playerConnection.playerProps.screenMode;
                    this.playerWrapperRef && (i && i.isFullScreen) !== (a && a.isFullScreen) && (vt.videoEnabled(this.playerWrapperRef) ? a && a.isFullScreen ? vt.request(this.playerWrapperRef, void 0, this.sendExitFullscreenMessage) : vt.exit() : this.sendExitFullscreenMessage());
                    var r = this.props.playerConnection.playerProps.playSessionId,
                        o = e.playerConnection.playerProps.playSessionId;
                    r !== o && o && l.n.setVideoPlayerTrackingData({
                        playSessionID: o
                    })
                }, t.prototype.render = function() {
                    var e = this.props.slug;
                    return o.createElement(f._4, {
                        flexGrow: 1
                    }, o.createElement(zt, {
                        slug: this.props.slug
                    }), o.createElement(Lt, {
                        slug: e,
                        setPlayerWrapperRef: this.setPlayerWrapperRef
                    }, o.createElement(yt, {
                        slug: e
                    })))
                }, t = a.__decorate([te({
                    playerId: function(e) {
                        return e.slug
                    },
                    requestedPlayerProps: ["ui", "screenMode", "playSessionId"]
                }), Object(p.d)("ClipsVideoPlayer")], t)
            }(o.Component),
            Ht = (n("IcDq"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    l.o.experiments.trackExperiment({
                        assignment: "variant1",
                        id: "0e636d13-56a8-44f4-bd51-7e65cd5a5225",
                        name: "twilight_clips_howdy_partner",
                        type: d.a.Device,
                        version: 1
                    })
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.props.match.params.slug !== e.match.params.slug && this.context.scrollToTop()
                }, t.prototype.render = function() {
                    var e = this.props.match.params.slug;
                    return o.createElement(f._4, {
                        className: "clips-watch",
                        padding: {
                            x: 2,
                            bottom: 2
                        },
                        breakpointSmall: {
                            padding: {
                                x: 5,
                                bottom: 3
                            }
                        },
                        breakpointLarge: {
                            padding: {
                                x: 0,
                                bottom: 5
                            }
                        }
                    }, o.createElement(mt, {
                        slug: e
                    }), o.createElement(f._27, {
                        background: f.m.Base,
                        display: f.P.Flex,
                        elevation: 3,
                        flexDirection: f.R.Column,
                        breakpointLarge: {
                            flexDirection: f.R.Row
                        }
                    }, o.createElement(qt, {
                        slug: e
                    }), o.createElement($e, {
                        slug: e
                    })), o.createElement(w, {
                        slug: e
                    }))
                }, t.contextTypes = {
                    scrollToTop: r.func
                }, t = a.__decorate([Object(s.a)({
                    location: c.PageviewLocation.ClipsViewing
                })], t)
            }(o.Component));
        n.d(t, "ClipsView", function() {
            return Ht
        })
    },
    "1EXI": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ReportUserModal_UserCommunities"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "userId"
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
                                    value: "userId"
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
                                    value: "directories"
                                },
                                arguments: [],
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
                                                    value: "displayName"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "directoryType"
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
                end: 140
            }
        };
        n.loc.source = {
            body: "query ReportUserModal_UserCommunities($userId: ID!) {\nuser(id: $userId) {\nid\ndirectories {\nnodes {\nid\nname\ndisplayName\ndirectoryType\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "1OO3": function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("7vx8"),
            r = 60,
            o = 60 * r,
            l = 24 * o,
            s = 7 * l,
            d = 4 * s;
        var c, u = n("MApH");
        n.d(t, "a", function() {
                return c
            }), t.b = function(e) {
                var t = this;
                return Object(a.a)(u, {
                    props: function(n) {
                        return {
                            banUserMutation: function(a, c) {
                                return void 0 === c && (c = null), i.__awaiter(t, void 0, void 0, function() {
                                    var t;
                                    return i.__generator(this, function(i) {
                                        switch (i.label) {
                                            case 0:
                                                if (t = e(n.ownProps).channelID, !n.mutate) return [3, 5];
                                                i.label = 1;
                                            case 1:
                                                return i.trys.push([1, 3, , 4]), [4, n.mutate({
                                                    variables: {
                                                        input: {
                                                            channelID: t,
                                                            bannedUserLogin: a,
                                                            expiresIn: c && function(e) {
                                                                if (!e) return "0s";
                                                                var t = e,
                                                                    n = "";
                                                                if (t > d) {
                                                                    var i = Math.floor(t / d);
                                                                    t -= i * d, n += i + "mo"
                                                                }
                                                                if (t > s) {
                                                                    var a = Math.floor(t / s);
                                                                    t -= a * s, n += a + "w"
                                                                }
                                                                if (t > l) {
                                                                    var c = Math.floor(t / l);
                                                                    t -= c * l, n += c + "d"
                                                                }
                                                                if (t > o) {
                                                                    var u = Math.floor(t / o);
                                                                    t -= u * o, n += u + "h"
                                                                }
                                                                if (t > r) {
                                                                    var p = Math.floor(t / r);
                                                                    t -= p * r, n += p + "m"
                                                                }
                                                                return t > 0 && (n += t + "s"), n
                                                            }(c)
                                                        }
                                                    }
                                                })];
                                            case 2:
                                                return [2, i.sent().data];
                                            case 3:
                                                throw i.sent(), new Error("Unable to ban user");
                                            case 4:
                                                return [3, 6];
                                            case 5:
                                                throw new Error("Ban user mutation is not ready");
                                            case 6:
                                                return [2]
                                        }
                                    })
                                })
                            }
                        }
                    }
                })
            },
            function(e) {
                e.Forbidden = "FORBIDDEN", e.TargetNotFound = "TARGET_NOT_FOUND", e.TargetIsSelf = "TARGET_IS_SELF", e.TargetIsAnonymous = "TARGET_IS_ANONYMOUS", e.TargetIsMod = "TARGET_IS_MOD", e.TargetIsBroadcaster = "TARGET_IS_BROADCASTER", e.TargetIsStaff = "TARGET_IS_STAFF", e.TargetIsAdmin = "TARGET_IS_ADMIN", e.TargetIsGlobalMod = "TARGET_IS_GLOBAL_MOD", e.TargetIsAlreadyBanned = "TARGET_ALREADY_BANNED", e.DurationInvalid = "DURATION_INVALID"
            }(c || (c = {}))
    },
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
    "2IkU": function(e, t) {},
    "2TZ0": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "ClipsTitleEdit_UpdateClip"
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
                                value: "UpdateClipInput"
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
                            value: "updateClip"
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
                                    value: "clip"
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
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 112
            }
        };
        n.loc.source = {
            body: "mutation ClipsTitleEdit_UpdateClip($input: UpdateClipInput!) {\nupdateClip(input: $input) {\nclip {\nid\ntitle\n}\n}\n}",
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
    "2rJy": function(e, t) {},
    "3Fw+": function(e, t, n) {
        "use strict";
        t.a = function(e) {
            if (e < 0) return "";
            if (0 === e) return i;
            var t = e,
                n = Math.floor(t / 3600);
            t %= 3600;
            var a = Math.floor(t / 60);
            return n + "h" + a + "m" + (t %= 60) + "s"
        };
        var i = "0h0m1s"
    },
    "3KVC": function(e, t, n) {
        "use strict";
        t.a = function(e) {
            void 0 === e && (e = "");
            return i.test(e)
        }, t.b = function(e) {
            void 0 === e && (e = "");
            var t = e.match(i);
            if (null === t) return "";
            if (t && t.length > 0 && void 0 !== t.index) {
                var n = t[1];
                return n
            }
            return ""
        };
        var i = new RegExp("(?:^|\\s)(?:https?://)?(?:(?:www|go).)?twitch.tv/videos/(\\d+)(?:$|\\s)?")
    },
    "3T7g": function(e, t, n) {
        "use strict";
        var i = n("RbGx"),
            a = n("mbxv"),
            r = n("+V/3"),
            o = (n("AwFw"), n("TToO")),
            l = function() {
                function e(e, t, n) {
                    this.globalsBySet = new Map, this.channelsBySet = new Map, this.indexBadges(e, this.globalsBySet, n), Array.isArray(t) && this.indexBadges(t, this.channelsBySet, n)
                }
                return e.prototype.getBadge = function(e, t) {
                    var n = this.channelsBySet.get(e);
                    return n && n.has(t) ? n.get(t) || null : void 0 !== (n = this.globalsBySet.get(e)) && n.get(t) || null
                }, e.prototype.indexBadges = function(e, t, n) {
                    e.forEach(function(e) {
                        n && e.clickAction === r.b && (e = o.__assign({}, e, {
                            channelName: n
                        }));
                        var i = t.get(e.setID);
                        i || (i = new Map, t.set(e.setID, i)), i.set(e.version, e)
                    })
                }, e
            }();
        new l([], [], "");
        n.d(t, "b", function() {
            return i.a
        }), n.d(t, "a", function() {
            return a.a
        }), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, "c", function() {
            return l
        })
    },
    "3iBR": function(e, t, n) {
        "use strict";
        n.d(t, "m", function() {
            return r
        }), n.d(t, "c", function() {
            return o
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
            return g
        }), n.d(t, "e", function() {
            return h
        }), n.d(t, "f", function() {
            return f
        });
        var i, a = n("I89S"),
            r = {
                ERROR_DISPLAY_TIMEOUT: 5e3,
                GET_BALANCE_RATE_LIMIT: 5e3,
                UNDO_PROMPT_DURATION: 5e3
            },
            o = "https://d3aqoihi2n8ty8.cloudfront.net",
            l = o + "/cheer",
            s = o + "/actions",
            d = 8e5,
            c = 1e4,
            u = 500,
            p = 1e3,
            m = "cheer",
            v = a.a.Purple,
            g = "FIRST_PARTY",
            h = "THIRD_PARTY",
            f = ((i = {})[a.a.Gray] = "#979797", i[a.a.Purple] = "#9c3ee8", i[a.a.Green] = "#1db2a5", i[a.a.Blue] = "#0099fe", i[a.a.Red] = "#f43021", i[a.a.Yellow] = "#f3a71a", i)
    },
    "3ydF": function(e, t) {},
    "3yr7": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "autoplayRecommendedClip"
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
                            value: "title"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "thumbnailURL"
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
                    value: "ClipsAutoplayContainer"
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
                                    value: "slug"
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
                                                    value: "autoplayRecommendedClip"
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
                                                    value: "autoplayRecommendedClip"
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
                                                    value: "autoplayRecommendedClip"
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
                                                    value: "autoplayRecommendedClip"
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
                end: 394
            }
        };
        n.loc.source = {
            body: "fragment autoplayRecommendedClip on Clip {\nid\nslug\ntitle\nthumbnailURL\nbroadcaster {\nid\ndisplayName\n}\ngame {\nid\ndisplayName\n}\nviewCount\n}\nquery ClipsAutoplayContainer($slug: ID!) {\nclip(slug: $slug) {\nid\nslug\nvideo {\nid\n}\nrelatedClips {\nsimilar {\n...autoplayRecommendedClip\n}\nbroadcaster {\n...autoplayRecommendedClip\n}\ngame {\n...autoplayRecommendedClip\n}\ntop {\n...autoplayRecommendedClip\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "4bQk": function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("GiK3"),
            r = n("6sO2"),
            o = n("+Znq"),
            l = n("7vx8"),
            s = n("oIkB"),
            d = n("2BvQ"),
            c = n("xrVp"),
            u = n("YugT"),
            p = {
                Channel: "channel"
            };
        var m = n("vH/s"),
            v = n("CSlQ"),
            g = n("Odds"),
            h = n("VNvG"),
            f = (n("3ydF"), n("SUA7")),
            k = n("x4k6");
        n.d(t, "b", function() {
            return y
        }), n.d(t, "a", function() {
            return b
        });
        var y;
        ! function(e) {
            e[e.IconOnly = 0] = "IconOnly", e[e.TextOnly = 1] = "TextOnly", e[e.IconAndText = 2] = "IconAndText"
        }(y || (y = {}));
        var b = function(e) {
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
                    t.state.isFollowing ? (t.unfollowUser(), e = m.SpadeEventType.Unfollow) : (t.followUser(), e = m.SpadeEventType.Follow);
                    var n = t.getFollowData();
                    n && function(e, t) {
                        i.__awaiter(this, void 0, void 0, function() {
                            var n, a, o, l, s, p, m, v, g, h;
                            return i.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        if (n = null, a = null, o = null, l = null, s = null, !t.channelID) return [3, 5];
                                        i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, , 4]), [4, r.o.apollo.client.query({
                                            query: u,
                                            variables: {
                                                id: t.channelID
                                            }
                                        })];
                                    case 2:
                                        return l = i.sent(), [3, 4];
                                    case 3:
                                        return m = i.sent(), r.j.error(m, "Failed to make query for channel info in FollowEvent reporting.", {
                                            channelID: t.channelID
                                        }), [3, 4];
                                    case 4:
                                        (o = l && l.data && l.data.user) ? s = o.hosting.stream && o.hosting.stream.game ? o.hosting.stream.game.name : o.stream && o.stream.game && o.stream.game.name: r.j.error(new Error("GraphQL empty response"), "Query for channel info in FollowEvent reporting return no data.", {
                                            channelID: t.channelID
                                        }), i.label = 5;
                                    case 5:
                                        if (!(v = r.n.getVideoPlayerTrackingData().vodID)) return [3, 10];
                                        i.label = 6;
                                    case 6:
                                        return i.trys.push([6, 8, , 9]), [4, r.o.apollo.client.query({
                                            query: d,
                                            variables: {
                                                id: v
                                            }
                                        })];
                                    case 7:
                                        return n = i.sent(), [3, 9];
                                    case 8:
                                        return g = i.sent(), r.j.error(g, "Failed to make query for VOd info in FollowEvent reporting.", {
                                            currentVODID: v
                                        }), [3, 9];
                                    case 9:
                                        (a = n && n.data && n.data.video) ? p = Object(c.a)(a.broadcastType): (p = null, r.j.error(new Error("GraphQL empty response"), "Query for video info in FollowEvent reporting return no data.", {
                                            currentVODID: v
                                        })), i.label = 10;
                                    case 10:
                                        return h = {
                                            channel: t.channelLogin,
                                            channel_id: t.channelID,
                                            channel_game: s,
                                            cta_visible: r.n.getVideoPlayerTrackingData().followCTAVisible,
                                            host_channel: t.hostChannelLogin,
                                            host_channel_id: t.hostChannelID,
                                            game: t.game,
                                            partner: o ? o.isPartner : null,
                                            src: t.src,
                                            vod_id: v,
                                            vod_type: p
                                        }, r.n.track(e, h), [2]
                                }
                            })
                        })
                    }(e, {
                        channelLogin: n.user && n.user.login || "",
                        channelID: n.user && n.user.id || "",
                        hostChannelLogin: t.props.hostChannelLogin,
                        hostChannelID: t.props.hostChannelID,
                        src: p.Channel
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
                        var n = i.__assign({}, Object(s.a)({
                            disableNotifications: !1,
                            targetID: e.user && e.user.id || ""
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
                            Object(s.d)(k, {
                                login: t.props.channelLogin
                            }, function(t) {
                                var n = t.user;
                                return n && n.self && (n.self.follower ? n.self.follower.disableNotifications = e.data.followUser.follow.disableNotifications : n.self.follower = {
                                    disableNotifications: e.data.followUser.follow.disableNotifications
                                }), t
                            }), t.props.onFollow && t.props.onFollow(t.props.channelLogin)
                        })
                    }
                }, t.unfollowUser = function() {
                    var e = t.getFollowData();
                    if (t.props.unfollowUser && e) {
                        var n = i.__assign({}, Object(s.a)({
                            targetID: e.user && e.user.id || ""
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
                            Object(s.d)(k, {
                                login: t.props.channelLogin
                            }, function(e) {
                                var t = e.user;
                                return t && t.self && (t.self.follower ? t.self.follower.disableNotifications = null : t.self.follower = {
                                    disableNotifications: null
                                }), e
                            }), t.props.onUnfollow && t.props.onUnfollow(t.props.channelLogin)
                        })
                    }
                }, t.toggleNotificationsEnabled = function() {
                    var e = t.getFollowData();
                    if (t.props.followUser && e) {
                        var n = i.__assign({}, Object(s.a)({
                            disableNotifications: !t.state.disableNotifications,
                            targetID: e.user && e.user.id || ""
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
                            Object(s.d)(k, {
                                login: t.props.channelLogin
                            }, function(t) {
                                var n = t.user;
                                return n && n.self && (n.self.follower ? n.self.follower.disableNotifications = e.data.followUser.follow.disableNotifications : n.self.follower = {
                                    disableNotifications: e.data.followUser.follow.disableNotifications
                                }), t
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
            return i.__extends(t, e), t.prototype.componentDidMount = function() {
                this.reportInteractive()
            }, t.prototype.componentDidUpdate = function() {
                this.props.channelLogin && !this.userDataLoaded() || !this.props.updateContainerWidth || this.props.updateContainerWidth(), this.reportInteractive()
            }, t.prototype.componentWillMount = function() {
                var e = this.props.followData;
                if (e) {
                    var t = e.user;
                    this.setState({
                        isFollowing: t && t.self && t.self.follower && null !== t.self.follower.disableNotifications || !1,
                        disableNotifications: t && t.self && t.self.follower && t.self.follower.disableNotifications
                    })
                }
            }, t.prototype.componentWillReceiveProps = function(e) {
                if (e.data && !e.data.loading && !e.data.error) {
                    var t = e.data.user;
                    this.setState({
                        isFollowing: t && t.self && t.self.follower && null !== t.self.follower.disableNotifications || !1,
                        disableNotifications: !(t && t.self && t.self.follower && null !== t.self.follower.disableNotifications) || t.self.follower.disableNotifications
                    })
                }
            }, t.prototype.render = function() {
                return this.props.isLoggedIn ? !this.props.showLoadingPlaceholder || this.props.data && !this.props.data.loading ? this.props.followUser && this.props.unfollowUser && (this.props.followData || this.props.data && !this.props.data.loading && !this.props.data.error && this.props.data.user && this.props.data.user.id !== this.props.data.currentUser.id) ? this.state.isFollowing ? this.props.hideWhenFollowing ? null : this.props.hideDropdownWhenFollowing ? this.renderUnfollowButton() : this.renderUnfollowButtonWithDropdown() : this.renderFollowButton(this.toggleFollowing) : null : this.renderPlaceholder() : this.renderFollowButton(this.props.login)
            }, t.prototype.renderPlaceholder = function() {
                switch (this.props.size) {
                    case g.y.Large:
                        return a.createElement(g._10, {
                            width: 93,
                            height: 36
                        });
                    case g.y.Small:
                        return a.createElement(g._10, {
                            width: 66,
                            height: 24
                        });
                    default:
                        return a.createElement(g._10, {
                            width: 70,
                            height: 30
                        })
                }
            }, t.prototype.renderFollowButton = function(e) {
                var t = this.props.isHostedFollow && this.props.channelName ? Object(r.d)("Follow {username}", {
                    username: this.props.channelName
                }, "FollowButton") : Object(r.d)("Follow", "FollowButton");
                return a.createElement(g.u, i.__assign({
                    ariaLabel: t,
                    blurAfterClick: this.props.blurAfterClick,
                    "data-a-target": "follow-button",
                    "data-test-selector": "follow-button",
                    icon: this.props.followUIType === y.TextOnly ? void 0 : g._18.Heart,
                    onClick: e,
                    size: this.props.size,
                    tabIndex: this.props.tabIndex
                }, Object(g._54)(this.props)), this.props.followUIType === y.IconOnly ? null : t)
            }, t.prototype.renderUnfollowButton = function() {
                var e = Object(r.d)("Unfollow", "FollowButton");
                return a.createElement(g.u, i.__assign({
                    ariaLabel: e,
                    blurAfterClick: this.props.blurAfterClick,
                    "data-a-target": "unfollow-button",
                    "data-test-selector": "unfollow-button",
                    icon: this.props.unfollowUIType === y.TextOnly ? void 0 : g._18.Heart,
                    statusAlertIcon: this.props.unfollowUIType === y.TextOnly ? void 0 : g._18.Unheart,
                    statusAlertText: this.props.unfollowUIType === y.IconOnly ? "" : e,
                    tabIndex: this.props.tabIndex,
                    size: this.props.size,
                    onClick: this.toggleFollowing
                }, Object(g._54)(this.props)), this.props.unfollowUIType === y.IconOnly ? null : Object(r.d)("Followed", "FollowButton"))
            }, t.prototype.renderUnfollowButtonWithDropdown = function() {
                var e = this.props.balloonDirection ? this.props.balloonDirection : g.q.BottomRight,
                    t = this.getFollowData(),
                    n = t && t.user ? t.user.displayName : "",
                    i = this.state.disableNotifications ? Object(r.d)("Opt in to notifications to receive updates on this channel's activity, including when they go live.", "FollowButton") : Object(r.d)("You will be notified on this channel's activity, including when they go live.", "FollowButton");
                return a.createElement(g._4, {
                    display: g.P.Flex,
                    className: "follow-btn",
                    "data-test-selector": "unfollow-button__dropdown"
                }, a.createElement(g._4, null, this.renderUnfollowButton()), a.createElement(o.a, {
                    display: g.P.InlineFlex,
                    openByDefault: this.state.showDropdown
                }, a.createElement("button", {
                    tabIndex: this.props.tabIndex,
                    "aria-label": Object(r.d)("Dropdown", "FollowButton"),
                    className: "follow-btn__dropdown-toggle",
                    "data-a-target": "follow-dropdown-toggle"
                }, a.createElement(g._4, {
                    justifyContent: g._3.Center,
                    display: g.P.Flex,
                    alignItems: g.c.Stretch,
                    fullHeight: !0
                }, a.createElement(g._17, {
                    asset: g._18.GlyphArrDown
                }))), a.createElement(g.p, {
                    size: g.r.Small,
                    direction: e,
                    "data-a-target": "follow-notifications-balloon"
                }, a.createElement(g._27, {
                    color: g.J.Base,
                    display: g.P.Flex,
                    flexWrap: g.S.Wrap,
                    padding: 1
                }, a.createElement(g._4, {
                    display: g.P.Flex,
                    margin: {
                        bottom: 1
                    }
                }, a.createElement(g.O, {
                    type: g._41.H6
                }, Object(r.d)("You are following {followingName}", {
                    followingName: n
                }, "FollowButton"))), a.createElement(g._4, {
                    display: g.P.Flex,
                    flexWrap: g.S.NoWrap,
                    padding: {
                        bottom: 1
                    }
                }, a.createElement(g._4, {
                    display: g.P.Flex,
                    padding: {
                        right: 2
                    }
                }, a.createElement("span", null, a.createElement(g.O, {
                    type: g._41.H6
                }, Object(r.d)("Notifications", "FollowButton")))), a.createElement(g._4, {
                    display: g.P.Flex,
                    flexShrink: 0
                }, a.createElement(g._43, {
                    onChange: this.toggleNotificationsEnabled,
                    checked: !this.state.disableNotifications,
                    "data-a-target": "notifications-toggle"
                }))), a.createElement(g._4, {
                    display: g.P.InlineFlex,
                    padding: {
                        bottom: 1
                    }
                }, a.createElement(g.O, {
                    type: g._41.Span,
                    color: g.J.Alt2
                }, i))))))
            }, t.prototype.reportInteractive = function() {
                this.props.isLoggedIn ? (!this.props.channelLogin || this.userDataLoaded() || this.props.followData) && this.props.latencyTracking.reportInteractive() : this.props.latencyTracking.reportInteractive()
            }, t = i.__decorate([Object(l.a)(k, {
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
            }), Object(l.a)(h, {
                name: "followUser"
            }), Object(l.a)(f, {
                name: "unfollowUser"
            }), Object(v.d)("FollowButton")], t)
        }(a.Component)
    },
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
    "8RKZ": function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("HW6M"),
            r = n("GiK3"),
            o = n("qe65"),
            l = n("Odds"),
            s = (n("2rJy"), function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.onImageLoad = function() {
                        n.setState({
                            imageLoaded: !0
                        })
                    }, n.onMouseOver = function() {
                        n.setState({
                            isHovering: !0
                        })
                    }, n.onMouseOut = function() {
                        n.setState({
                            isHovering: !1
                        })
                    }, n.renderImage = function() {
                        var e = null,
                            t = a("chat-image", {
                                "chat-image__animated": !!n.props.cheerText && n.state.imageLoaded
                            }, n.props.className);
                        if (n.props.srcSet.themed) e = r.createElement(l.Y, {
                            display: n.state.imageLoaded ? l.P.InlineBlock : l.P.Hide
                        }, r.createElement(o.a, {
                            alt: n.props.alt,
                            className: t,
                            defaultRes: n.props.srcKey,
                            onLoad: n.onImageLoad,
                            onMouseOver: n.onMouseOver,
                            onMouseOut: n.onMouseOut,
                            sources: n.props.srcSet
                        }));
                        else {
                            for (var i = [], s = 0, d = Object.keys(n.props.srcSet.sources); s < d.length; s++) {
                                var c = d[s];
                                i.push(n.props.srcSet.sources[c] + " " + c)
                            }
                            e = r.createElement(l.Y, {
                                display: n.state.imageLoaded ? l.P.InlineBlock : l.P.Hide
                            }, r.createElement("img", {
                                className: t,
                                onLoad: n.onImageLoad,
                                onMouseOver: n.onMouseOver,
                                onMouseOut: n.onMouseOut,
                                src: n.props.srcSet.sources[n.props.srcKey],
                                srcSet: i.join(","),
                                alt: n.props.alt
                            }))
                        }
                        return e
                    }, n.renderPlaceholder = function() {
                        return n.state.imageLoaded ? null : r.createElement(l.Y, {
                            display: l.P.InlineBlock
                        }, r.createElement(l.O, {
                            type: l._41.Span,
                            className: "chat-image__placeholder",
                            align: l._51.Top
                        }, r.createElement(l._10, {
                            height: 28,
                            width: 28
                        })))
                    }, n.state = {
                        imageLoaded: !1,
                        isHovering: !1
                    }, n
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e;
                    return e = this.state.isHovering && this.state.imageLoaded ? r.createElement(l._44, {
                        direction: this.props.tooltipDirection || l._46.Top,
                        label: this.props.alt,
                        display: l.P.Inline,
                        offsetY: "0.9rem",
                        "data-a-target": "emote-name"
                    }, this.renderPlaceholder(), this.renderImage(), this.props.cheerText) : r.createElement("span", {
                        "data-a-target": "emote-name"
                    }, this.renderPlaceholder(), this.renderImage(), this.props.cheerText), this.props.cheerText ? r.createElement(l.O, {
                        type: l._41.Span,
                        noWrap: !0
                    }, e) : e
                }, t
            }(r.Component));
        n.d(t, "a", function() {
            return s
        })
    },
    "8Wuk": function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return i
        }), n.d(t, "a", function() {
            return u
        });
        var i, a = n("TToO"),
            r = n("GiK3"),
            o = (n.n(r), n("6sO2")),
            l = n("2hJ3"),
            s = n("f6Cj"),
            d = n("Odds"),
            c = n("bdk8");
        n.n(c);
        ! function(e) {
            e[e.Twitter = 0] = "Twitter", e[e.Reddit = 1] = "Reddit", e[e.VKontakte = 2] = "VKontakte", e[e.Facebook = 3] = "Facebook", e[e.Copy = 4] = "Copy", e[e.CopyInput = 5] = "CopyInput"
        }(i || (i = {}));
        var u = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.renderLink = function() {
                    var e = "social-button__link " + n.addSocialClassModifier("social-button__link");
                    return n.isLink() ? r.createElement("a", a.__assign({
                        href: n.getLinkTarget(),
                        target: "_blank",
                        className: e,
                        onClick: n.onShareClickHandler
                    }, Object(d._54)(n.props)), n.renderIcon()) : r.createElement("button", a.__assign({
                        onClick: n.copyPageUrl,
                        onMouseLeave: n.clearIsCopiedStatus,
                        className: e
                    }, Object(d._54)(n.props)), n.renderIcon())
                }, n.onShareClickHandler = function() {
                    n.props.onShareClick && n.props.onShareClick(n.props.type)
                }, n.clearIsCopiedStatus = function() {
                    n.setState({
                        isCopied: !1
                    })
                }, n.getUrl = function() {
                    return n.props.url || window.location.href
                }, n.copyPageUrl = function(e) {
                    e && e.preventDefault(), n.props.onShareClick && n.props.onShareClick(n.props.type), Object(l.a)(n.getUrl()), n.setState({
                        isCopied: !0
                    })
                }, n.renderIcon = function() {
                    var e = n.getAssetFromType();
                    return r.createElement(d._4, {
                        className: "social-button__icon " + n.addSocialClassModifier("social-button__icon")
                    }, r.createElement(d._17, {
                        asset: e,
                        width: 30,
                        height: 30
                    }))
                }, n.isLink = function() {
                    return n.props.type !== i.Copy
                }, n.getTooltipFromType = function() {
                    switch (n.props.type) {
                        case i.Twitter:
                            return "Twitter";
                        case i.Reddit:
                            return "Reddit";
                        case i.Facebook:
                            return "Facebook";
                        case i.VKontakte:
                            return "VKontakte";
                        case i.Copy:
                            return n.state.isCopied ? Object(o.d)("Copied", "SocialButton") : Object(o.d)("Copy to clipboard", "SocialButton");
                        default:
                            return ""
                    }
                }, n.getAssetFromType = function() {
                    switch (n.props.type) {
                        case i.Twitter:
                            return d._18.Twitter;
                        case i.Facebook:
                            return d._18.Facebook;
                        case i.VKontakte:
                            return d._18.VKontakte;
                        case i.Reddit:
                            return d._18.Reddit;
                        case i.Copy:
                        default:
                            return d._18.Copy
                    }
                }, n.addSocialClassModifier = function(e) {
                    switch (n.props.type) {
                        case i.Twitter:
                            return e + "--twitter";
                        case i.Reddit:
                            return e + "--reddit";
                        case i.Facebook:
                            return e + "--facebook";
                        case i.VKontakte:
                            return e + "--vkontakte";
                        case i.Copy:
                            return e + "--copy";
                        default:
                            return ""
                    }
                }, n.getLinkTarget = function() {
                    var e = n.props,
                        t = e.text,
                        a = e.type,
                        r = n.getUrl(),
                        o = t || "";
                    switch (a) {
                        case i.Reddit:
                            return Object(s.b)(r, o);
                        case i.VKontakte:
                            return Object(s.d)(r);
                        case i.Facebook:
                            return Object(s.a)(r);
                        case i.Twitter:
                            return Object(s.c)(r, o);
                        default:
                            return ""
                    }
                }, n.state = {
                    isCopied: !1
                }, n
            }
            return a.__extends(t, e), t.prototype.render = function() {
                return r.createElement(d._4, {
                    className: "social-button"
                }, r.createElement(d._44, {
                    label: this.getTooltipFromType(),
                    direction: d._46.Top
                }, this.renderLink()))
            }, t
        }(r.Component)
    },
    A5Hr: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return y
        });
        var i = n("TToO"),
            a = n("GiK3"),
            r = (n.n(a), n("RH2O")),
            o = n("2KeS"),
            l = n("6sO2"),
            s = n("7vx8"),
            d = n("oIkB"),
            c = n("vH/s"),
            u = n("CSlQ"),
            p = n("LjAQ"),
            m = n("mw/a"),
            v = n("xwpJ"),
            g = n("LjAQ"),
            h = n("mmQh"),
            f = (n.n(h), n("mRH2")),
            k = (n.n(f), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        submitStatus: g.b.Unsubmitted
                    }, t.handleSubmit = function(e, n, a, r) {
                        return i.__awaiter(t, void 0, void 0, function() {
                            var t, o, s;
                            return i.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        if (e !== p.a) return [3, 5];
                                        o = {
                                            userID: this.props.reportContext.targetUserID,
                                            communityID: a || "",
                                            reason: n
                                        }, i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, , 4]), [4, this.props.reportUserInCommunity(Object(d.a)(o))];
                                    case 2:
                                        return i.sent(), l.o.tracking.track(c.SpadeEventType.CommunityModeration, {
                                            community_id: a,
                                            name: r,
                                            is_official: !1,
                                            user_id: this.props.sessionUser && this.props.sessionUser.id,
                                            target_id: this.props.reportContext.targetUserID,
                                            action: "report",
                                            reason: e
                                        }), this.setState({
                                            submitStatus: g.b.Success
                                        }), [3, 4];
                                    case 3:
                                        return t = i.sent(), l.j.error(t, "ReportUserInCommunity Mutation failed."), this.setState({
                                            submitStatus: g.b.MutationError
                                        }), [3, 4];
                                    case 4:
                                        return [3, 9];
                                    case 5:
                                        o = {
                                            description: n,
                                            reason: e,
                                            content: this.props.reportContext.contentType,
                                            contentID: this.props.reportContext.contentID,
                                            extra: this.props.reportContext.extra,
                                            targetID: this.props.reportContext.targetUserID
                                        }, this.props.reportContext.contentType === m.a.Community && this.props.reportContext.extra && (o.description = Object(v.a)(this.props.reportContext.extra, n)), i.label = 6;
                                    case 6:
                                        return i.trys.push([6, 8, , 9]), [4, this.props.reportUser(Object(d.a)(o))];
                                    case 7:
                                        return i.sent(), this.props.reportContext.contentType === m.a.Community && l.o.tracking.track(c.SpadeEventType.CommunityReport, {
                                            community_id: this.props.reportContext.contentID,
                                            name: this.props.reportContext.extra,
                                            is_official: !1,
                                            user_id: this.props.sessionUser && this.props.sessionUser.id,
                                            reason: e
                                        }), this.setState({
                                            submitStatus: g.b.Success
                                        }), [3, 9];
                                    case 8:
                                        return s = i.sent(), l.j.error(s, "ReportUser Mutation failed."), this.setState({
                                            submitStatus: g.b.MutationError
                                        }), [3, 9];
                                    case 9:
                                        return [2]
                                }
                            })
                        })
                    }, t.handleChildError = function(e) {
                        return t.setState({
                            submitStatus: e
                        })
                    }, t.handleClose = function() {
                        t.props.onClose && t.props.onClose(t.state.submitStatus)
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillUnmount = function() {
                    this.handleClose()
                }, t.prototype.render = function() {
                    return a.createElement(g.c, {
                        onClose: this.handleClose,
                        onError: this.handleChildError,
                        onSubmit: this.handleSubmit,
                        reportContentType: this.props.reportContext.contentType,
                        submitStatus: this.state.submitStatus,
                        targetUserID: this.props.reportContext.targetUserID,
                        title: this.props.title,
                        defaultDescription: this.props.defaultDescription
                    })
                }, t
            }(a.Component));
        var y = Object(o.d)(Object(s.a)(h, {
            name: "reportUserInCommunity"
        }), Object(s.a)(f, {
            name: "reportUser"
        }), Object(u.d)("ReportUser"), Object(r.b)(function(e) {
            return {
                sessionUser: e.session.user
            }
        }, null))(k)
    },
    AwFw: function(e, t) {},
    BhGt: function(e, t, n) {
        var i;
        ! function(a, r, o) {
            "use strict";

            function l(e) {
                var t = null;
                if ("VIDEO" === e.tagName) t = e;
                else {
                    var n = e.getElementsByTagName("video");
                    n[0] && (t = n[0])
                }
                return t
            }

            function s(e) {
                var t = l(e);
                if (t && t.webkitEnterFullscreen) {
                    try {
                        t.readyState < t.HAVE_METADATA ? (t.addEventListener("loadedmetadata", function e() {
                            t.removeEventListener("loadedmetadata", e, !1), t.webkitEnterFullscreen(), v = !!t.getAttribute("controls")
                        }, !1), t.load()) : (t.webkitEnterFullscreen(), v = !!t.getAttribute("controls")), m = t
                    } catch (t) {
                        return b("not_supported", e)
                    }
                    return !0
                }
                return b(void 0 === p.request ? "not_supported" : "not_enabled", e)
            }

            function d() {
                S.element || (y(), c())
            }

            function c() {
                o && "webkitfullscreenchange" === p.change && window.removeEventListener("resize", d, !1)
            }
            var u = /i(Pad|Phone|Pod)/.test(navigator.userAgent) && parseInt(navigator.userAgent.replace(/^.*OS (\d+)_(\d+).*$/, "$1.$2"), 10) >= 7,
                p = function() {
                    var e = r.createElement("video"),
                        t = {
                            request: ["requestFullscreen", "webkitRequestFullscreen", "webkitRequestFullScreen", "mozRequestFullScreen", "msRequestFullscreen"],
                            exit: ["exitFullscreen", "webkitCancelFullScreen", "webkitExitFullscreen", "mozCancelFullScreen", "msExitFullscreen"],
                            enabled: ["fullscreenEnabled", "webkitFullscreenEnabled", "mozFullScreenEnabled", "msFullscreenEnabled"],
                            element: ["fullscreenElement", "webkitFullscreenElement", "webkitCurrentFullScreenElement", "mozFullScreenElement", "msFullscreenElement"],
                            change: ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"],
                            error: ["fullscreenerror", "webkitfullscreenerror", "mozfullscreenerror", "MSFullscreenError"]
                        },
                        n = {};
                    for (var i in t)
                        for (var a = 0, o = t[i].length; o > a; a++)
                            if (t[i][a] in e || t[i][a] in r || "on" + t[i][a].toLowerCase() in r) {
                                n[i] = t[i][a];
                                break
                            }
                    return n
                }(),
                m = null,
                v = null,
                g = function() {},
                h = [],
                f = !1;
            navigator.userAgent.indexOf("Android") > -1 && navigator.userAgent.indexOf("Chrome") > -1 && (f = parseInt(navigator.userAgent.replace(/^.*Chrome\/(\d+).*$/, "$1"), 10) || !0);
            var k = function(e) {
                    var t = h[h.length - 1];
                    t && (e !== t.element && e !== m || !t.hasEntered) && ("VIDEO" === e.tagName && (m = e), 1 === h.length && S.onenter(S.element), t.enter.call(t.element, e || t.element), t.hasEntered = !0)
                },
                y = function() {
                    !m || v || u || (m.setAttribute("controls", "controls"), m.removeAttribute("controls")), m = null, v = null;
                    var e = h.pop();
                    e && (e.exit.call(e.element), S.element || (h.forEach(function(e) {
                        e.exit.call(e.element)
                    }), h = [], S.onexit()))
                },
                b = function(e, t) {
                    if (h.length > 0) {
                        var n = h.pop();
                        t = t || n.element, n.error.call(t, e), S.onerror(t, e)
                    }
                },
                S = {
                    request: function(e, t, n, i) {
                        if (e = e || r.body, h.push({
                                element: e,
                                enter: t || g,
                                exit: n || g,
                                error: i || g
                            }), void 0 !== p.request)
                            if (o && !1 === r[p.enabled]) s(e);
                            else if (!1 !== f && 32 > f) s(e);
                        else {
                            if (o && void 0 === p.enabled) return p.enabled = "webkitFullscreenEnabled", e[p.request](), void setTimeout(function() {
                                r[p.element] ? r[p.enabled] = !0 : (r[p.enabled] = !1, s(e))
                            }, 250);
                            try {
                                e[p.request](), setTimeout(function() {
                                    r[p.element] || b(o ? "not_enabled" : "not_allowed", e)
                                }, 100)
                            } catch (t) {
                                b("not_enabled", e)
                            }
                        } else s(e)
                    },
                    exit: function() {
                        c(), r[p.exit]()
                    },
                    toggle: function(e, t, n, i) {
                        S.element ? S.exit() : S.request(e, t, n, i)
                    },
                    videoEnabled: function(e) {
                        if (S.enabled) return !0;
                        var t = l(e = e || r.body);
                        return !(!t || void 0 === t.webkitSupportsFullscreen) && (t.readyState < t.HAVE_METADATA ? "maybe" : t.webkitSupportsFullscreen)
                    },
                    onenter: g,
                    onexit: g,
                    onchange: g,
                    onerror: g
                };
            try {
                Object.defineProperties(S, {
                    element: {
                        enumerable: !0,
                        get: function() {
                            return m && m.webkitDisplayingFullscreen ? m : r[p.element] || null
                        }
                    },
                    enabled: {
                        enumerable: !0,
                        get: function() {
                            return "webkitCancelFullScreen" === p.exit && !o || !(!1 !== f && 32 > f) && (r[p.enabled] || !1)
                        }
                    }
                }), p.change && r.addEventListener(p.change, function(e) {
                    if (S.onchange(S.element), S.element) {
                        var t = h[h.length - 2];
                        t && t.element === S.element ? y() : (k(S.element), o && "webkitfullscreenchange" === p.change && window.addEventListener("resize", d, !1))
                    } else y()
                }, !1), r.addEventListener("webkitbeginfullscreen", function(e) {
                    var t = !0;
                    if (h.length > 0)
                        for (var n = 0, i = h.length; i > n; n++) {
                            if (l(h[n].element) === e.srcElement) {
                                t = !1;
                                break
                            }
                        }
                    t && h.push({
                        element: e.srcElement,
                        enter: g,
                        exit: g,
                        error: g
                    }), S.onchange(e.srcElement), k(e.srcElement)
                }, !0), r.addEventListener("webkitendfullscreen", function(e) {
                    S.onchange(e.srcElement), y(e.srcElement)
                }, !0), p.error && r.addEventListener(p.error, function(e) {
                    b("not_allowed")
                }, !1)
            } catch (e) {
                S.element = null, S.enabled = !1
            }
            void 0 === (i = function() {
                return S
            }.call(t, n, t, e)) || (e.exports = i)
        }(0, document, self !== top)
    },
    C5rq: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ClipsFeedShare"
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
                                    value: "thumbnailURL"
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
            body: "query ClipsFeedShare($slug: ID!) {\nclip(slug: $slug) {\nid\nthumbnailURL\nbroadcaster {\nid\ndisplayName\n}\ncurator {\nid\ndisplayName\n}\ngame {\nid\ndisplayName\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    CFVp: function(e, t, n) {
        "use strict";
        t.a = function() {
            if (!s) {
                var e = [],
                    t = {};
                Object.keys(r).forEach(function(n) {
                    var i = c(n, r[n]);
                    e.push(i), t[n.toLowerCase()] = i
                }), s = {
                    orderedActions: e,
                    indexedActions: t
                }
            }
            return s
        }, t.b = function() {
            d || (d = function(e) {
                if (s) return s.indexedActions[e.toLowerCase()];
                return c(e, r[e])
            }("Cheer"));
            return d
        };
        var i = n("I89S"),
            a = n("3iBR"),
            r = {
                Cheer: a.d,
                Kreygasm: a.d,
                Kappa: a.d,
                Muxy: a.e,
                Streamlabs: a.e,
                SwiftRage: a.d,
                VoHiYo: a.d
            },
            o = ["LIGHT", "DARK"],
            l = [1, 1.5, 2, 3, 4],
            s = null;
        var d = null;

        function c(e, t) {
            var n = [i.a.Red, i.a.Blue, i.a.Green, i.a.Purple, i.a.Gray],
                a = new Map,
                r = [];
            if ("Cheer" === e) {
                var o = u(e, i.a.Yellow);
                a.set(i.a.Yellow, o), r.push(o)
            }
            return r.push.apply(r, n.map(function(t) {
                var n = u(e, t);
                return a.set(t, n), n
            })), {
                prefix: e,
                type: t,
                tiers: r,
                orderedTiers: r,
                indexedTiers: a
            }
        }

        function u(e, t) {
            for (var n = [], i = {}, r = 0, s = o; r < s.length; r++)
                for (var d = s[r], c = 0, u = l; c < u.length; c++) {
                    var m = u[c];
                    i[d] || (i[d] = {
                        animated: new Map,
                        static: new Map
                    });
                    var v = p(e, d, !0, t, m);
                    n.push(v), i[d].animated.set(m, v.url);
                    var g = p(e, d, !1, t, m);
                    n.push(g), i[d].static.set(m, g.url)
                }
            return {
                id: e + ";" + t,
                bits: t,
                color: a.f[t],
                images: n,
                indexedImages: i
            }
        }

        function p(e, t, n, i, a) {
            var r = n ? "gif" : "png";
            return {
                theme: t,
                isAnimated: n,
                dpiScale: a,
                url: "https://d3aqoihi2n8ty8.cloudfront.net/actions/" + e.toLowerCase() + "/" + t.toLowerCase() + "/" + (n ? "animated" : "static") + "/" + i + "/" + a + "." + r
            }
        }
    },
    E5Ip: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ClipsViewTitleEdit"
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
                end: 90
            }
        };
        n.loc.source = {
            body: "query ClipsViewTitleEdit($slug: ID!) {\nclip(slug: $slug) {\nid\nbroadcaster {\nid\n}\ntitle\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    EpdV: function(e, t) {},
    Ev5K: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ClipsViewModerationModals"
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
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 91
            }
        };
        n.loc.source = {
            body: "query ClipsViewModerationModals($slug: ID!) {\nclip(slug: $slug) {\nid\nbroadcaster {\nid\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    HyIc: function(e, t) {},
    I4TS: function(e, t) {},
    I89S: function(e, t, n) {
        "use strict";
        var i;
        n.d(t, "a", function() {
                return i
            }),
            function(e) {
                e[e.Gray = 1] = "Gray", e[e.Purple = 100] = "Purple", e[e.Green = 1e3] = "Green", e[e.Blue = 5e3] = "Blue", e[e.Red = 1e4] = "Red", e[e.Yellow = 1e5] = "Yellow"
            }(i || (i = {}))
    },
    IcDq: function(e, t) {},
    Jjeq: function(e, t) {},
    Ldv2: function(e, t, n) {
        "use strict";
        t.a = function() {
            return Object(a.a)(o, {
                props: function(e) {
                    if (e.data) {
                        var t = e.data.currentUser && e.data.currentUser.emoteSets,
                            n = t && Object(r.b)(t);
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
            r = n("YhVV"),
            o = n("7B9K");
        n.n(o)
    },
    LepZ: function(e, t) {},
    LjAQ: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("HW6M"),
            r = n("GiK3"),
            o = n("2KeS"),
            l = n("6sO2"),
            s = n("7vx8"),
            d = n("CSlQ"),
            c = n("xwpJ"),
            u = n("Odds"),
            p = n("x6ny"),
            m = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleChange = function(e) {
                        t.props.onChange(e.target.value)
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidUpdate = function() {
                    this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = null,
                        t = Object(l.d)("Select One...", "ReportUserModal");
                    this.props.data.loading ? e = [r.createElement("option", {
                        key: "Loading"
                    }, Object(l.d)("Loading...", "ReportReasonsSelect"))] : e = (this.props.data.reportReasons || Object(c.b)()).map(function(e) {
                        return r.createElement("option", {
                            key: e.id,
                            value: e.id
                        }, e.text)
                    });
                    return r.createElement(u._4, {
                        margin: {
                            bottom: 2
                        }
                    }, r.createElement(u.U, {
                        id: "reporting-modal__select",
                        label: Object(l.d)("Select Reason (required)", "ReportUserModal")
                    }, r.createElement(u._23, {
                        id: "reporting-modal__select",
                        "data-test-selector": "reporting-modal.select",
                        disabled: this.props.data.loading || !!this.props.data.error,
                        onChange: this.handleChange,
                        defaultValue: t
                    }, r.createElement("option", {
                        disabled: !0,
                        key: "default"
                    }, t), e)))
                }, t = i.__decorate([Object(d.d)("ReportReasonSelect")], t)
            }(r.Component),
            v = Object(s.a)(p, {
                options: function(e) {
                    return {
                        variables: {
                            content: e.reportContentType
                        }
                    }
                }
            })(m),
            g = (n("I4TS"), n("1EXI"));
        n.d(t, "a", function() {
            return f
        }), n.d(t, "b", function() {
            return h
        }), n.d(t, "c", function() {
            return y
        });
        var h, f = "community_rules_violation";
        ! function(e) {
            e[e.Unsubmitted = 0] = "Unsubmitted", e[e.Success = 1] = "Success", e[e.FormError = 2] = "FormError", e[e.MutationError = 3] = "MutationError"
        }(h || (h = {}));
        var k = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        community: null,
                        description: "",
                        reason: null,
                        isCommunityReason: !1,
                        selectedCommunityID: null,
                        selectedCommunityName: null
                    }, t.headerMessage = Object(l.d)("Tell us your concern about this content so that we can review it to determine whether there has been a violation of the {tosLink}. {br} (Abuse of this feature is a violation of the terms of service)", {
                        br: r.createElement("br", null),
                        tosLink: r.createElement("a", {
                            href: "https://www.twitch.tv/p/terms-of-service",
                            target: "_blank"
                        }, Object(l.d)("terms of service", "ReportUser"))
                    }, "ReportUser"), t.selectCommunity = function(e) {
                        t.setState({
                            selectedCommunityID: e.target.value,
                            selectedCommunityName: e.target.getAttribute("data-community-name")
                        })
                    }, t.handleSubmit = function(e) {
                        e.preventDefault(), t.state.reason && t.state.description.length > 0 ? t.props.onSubmit(t.state.reason || "", t.state.description, t.state.selectedCommunityID, t.state.selectedCommunityName) : t.props.onError(h.FormError)
                    }, t.handleTextAreaChange = function(e) {
                        t.setState({
                            description: e.target.value
                        })
                    }, t.handleReasonChange = function(e) {
                        if (!t.props.data || t.props.data.loading || t.props.data.error || !t.props.data.user) return null;
                        var n = t.props.data.user.directories.nodes.filter(function(e) {
                            return "COMMUNITY" === e.directoryType
                        });
                        n.length && e === f ? t.setState({
                            reason: e,
                            selectedCommunityID: n[0].id,
                            selectedCommunityName: n[0].name,
                            isCommunityReason: !0
                        }) : t.setState({
                            reason: e,
                            isCommunityReason: !1
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(u._4, {
                        display: u.P.Flex,
                        flexDirection: u.R.Column,
                        alignItems: u.c.Center,
                        justifyContent: u._3.Center
                    }, this.renderStatusMessage(), this.renderBody())
                }, t.prototype.renderBody = function() {
                    return this.props.submitStatus === h.Success ? r.createElement("div", null, r.createElement(u.u, {
                        onClick: this.props.onClose
                    }, r.createElement(u._4, {
                        padding: {
                            x: 2
                        }
                    }, Object(l.d)("Close", "ReportUser")))) : r.createElement("div", null, r.createElement(u._4, {
                        "data-test-selector": "reporting.title",
                        margin: {
                            bottom: 1
                        },
                        "data-a-target": "reporting-channel-name"
                    }, r.createElement(u.O, {
                        type: u._41.H4
                    }, this.props.title), r.createElement(u._27, {
                        color: u.J.Alt2,
                        margin: {
                            top: 1
                        }
                    }, this.headerMessage)), r.createElement("form", null, r.createElement(u._27, {
                        borderTop: !0,
                        borderBottom: !0,
                        margin: {
                            y: 2
                        },
                        padding: {
                            y: 2
                        }
                    }, r.createElement(v, {
                        reportContentType: this.props.reportContentType,
                        onChange: this.handleReasonChange
                    }), this.renderCommunitiesSelector(), r.createElement(u.U, {
                        id: "reporting__text-area",
                        label: Object(l.d)("Description (required)", "ReportUser")
                    }, r.createElement(u._38, {
                        defaultValue: this.props.defaultDescription,
                        onChange: this.handleTextAreaChange
                    }))), r.createElement(u._27, {
                        display: u.P.Flex,
                        justifyContent: u._3.Center
                    }, r.createElement(u.u, {
                        onClick: this.handleSubmit
                    }, r.createElement(u._4, {
                        padding: {
                            x: 2
                        }
                    }, Object(l.d)("Send", "ReportUser"))))))
                }, t.prototype.renderCommunitiesSelector = function() {
                    if (!this.props.data || this.props.data.loading || this.props.data.error || !this.props.data.user) return null;
                    if (this.state.isCommunityReason) {
                        var e = this.props.data.user.directories.nodes.filter(function(e) {
                            return "COMMUNITY" === e.directoryType
                        }).map(function(e) {
                            return r.createElement("option", {
                                key: e.id,
                                value: e.id,
                                "data-community-name": e.name
                            }, e.displayName)
                        });
                        return r.createElement(u._4, {
                            margin: {
                                bottom: 2
                            }
                        }, r.createElement(u.U, {
                            id: "reporting__select-community",
                            label: Object(l.d)("Community", "ReportUser")
                        }, r.createElement(u._23, {
                            id: "reporting__select-community",
                            "data-test-selector": "reporting.select-community",
                            disabled: this.props.data.loading || !!this.props.data.error,
                            onChange: this.selectCommunity
                        }, e)))
                    }
                }, t.prototype.renderStatusMessage = function() {
                    var e = null;
                    switch (this.props.submitStatus) {
                        case h.FormError:
                            e = Object(l.d)("Reason and Description are required.", "ReportUser");
                            break;
                        case h.MutationError:
                            e = Object(l.d)("Sorry, a network error occurred when submitting your report. Please try again later.", "ReportUser");
                            break;
                        case h.Success:
                            e = Object(l.d)("Thank you for your report.", "ReportUser");
                            break;
                        default:
                            return null
                    }
                    var t = a({
                        "reporting__error-container": this.props.submitStatus !== h.Success,
                        "reporting__success-container": this.props.submitStatus === h.Success
                    });
                    return r.createElement(u._27, {
                        className: t,
                        fullWidth: this.props.submitStatus !== h.Success,
                        "data-test-selector": "reporting.error",
                        margin: {
                            bottom: 2
                        },
                        padding: 1
                    }, e)
                }, t
            }(r.Component),
            y = Object(o.d)(Object(s.a)(g, {
                options: function(e) {
                    return {
                        fetchPolicy: "network-only",
                        variables: {
                            userId: e.targetUserID
                        }
                    }
                }
            }))(k)
    },
    LnKh: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Clips_ModalDelete"
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
                                    value: "thumbnailURL"
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
                                    value: "viewCount"
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
                end: 143
            }
        };
        n.loc.source = {
            body: "query Clips_ModalDelete($slug: ID!) {\nclip(slug: $slug) {\nid\nbroadcaster {\nid\n}\ncurator {\nid\nlogin\n}\nthumbnailURL\ncreatedAt\nviewCount\ntitle\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    MApH: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "Chat_BanUserFromChatRoom"
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
                                value: "BanUserFromChatRoomInput"
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
                            value: "banUserFromChatRoom"
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
                                    value: "error"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "code"
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
                end: 126
            }
        };
        n.loc.source = {
            body: "mutation Chat_BanUserFromChatRoom($input: BanUserFromChatRoomInput!) {\nbanUserFromChatRoom(input: $input) {\nerror {\ncode\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    NjaO: function(e, t) {},
    QIXk: function(e, t, n) {
        "use strict";
        var i, a = n("TToO"),
            r = n("GiK3"),
            o = n("6sO2"),
            l = n("7vx8"),
            s = n("6BvN"),
            d = n("vH/s"),
            c = function(e, t, n, i, a) {
                var r = Date.now() / 1e3;
                o.o.tracking.track(d.SpadeEventType.ClipEdit, {
                    channel_id: e,
                    client_time: r,
                    clip_edit_session_id: t + "," + Math.floor(r),
                    clip_id: t,
                    clip_slug: n,
                    effect_name: "title",
                    effect_setting: i,
                    front_end: !0,
                    location: a
                })
            },
            u = n("Odds"),
            p = n("2TZ0"),
            m = this,
            v = {
                TITLE_INPUT: "cmgr-title-input",
                TITLE_SAVE: "cmgr-title-save",
                TITLE_SAVE_TOOLTIP: "cmgr-title-save-tooltip"
            };
        ! function(e) {
            e.emptySubmission = "emptySubmission", e.characterLimitReached = "characterLimitReached", e.channelViolation = "channelViolation", e.notCurator = "notCurator", e.unknown = "unknown"
        }(i || (i = {}));
        var g = 100,
            h = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.renderForClipsViewing = function() {
                        return r.createElement("div", null, r.createElement(u._38, {
                            id: v.TITLE_INPUT,
                            "data-test-selector": v.TITLE_INPUT,
                            value: n.state.title,
                            onChange: n.handleTitleEdit,
                            onKeyDown: n.handleKeyDown
                        }), r.createElement(u._4, {
                            display: u.P.Flex,
                            justifyContent: u._3.Between,
                            alignItems: u.c.Center,
                            padding: {
                                top: 1
                            }
                        }, n.state.showError ? r.createElement(u.O, {
                            color: u.J.Error
                        }, n.getErrorMessage()) : r.createElement(u.O, {
                            color: u.J.Alt2
                        }, n.getRemainingCharacterText()), r.createElement(u._4, {
                            display: u.P.Flex
                        }, r.createElement(u.u, {
                            "data-test-selector": v.TITLE_SAVE,
                            onClick: n.props.onCancel,
                            type: u.A.Hollow
                        }, Object(o.d)("Cancel", "ClipsTitleEdit")), r.createElement(u._4, {
                            padding: {
                                left: 1
                            }
                        }, n.renderSave()))))
                    }, n.renderForManager = function() {
                        return r.createElement(u.U, {
                            id: v.TITLE_INPUT,
                            label: Object(o.d)("Title", "ClipsTitleEdit"),
                            hint: n.getRemainingCharacterText()
                        }, r.createElement(u._4, {
                            display: u.P.Flex,
                            flexWrap: u.S.NoWrap
                        }, r.createElement(u._4, {
                            flexGrow: 1,
                            margin: {
                                right: 1
                            }
                        }, r.createElement(u._0, {
                            id: v.TITLE_INPUT,
                            "data-test-selector": v.TITLE_INPUT,
                            type: u._1.Text,
                            value: n.state.title,
                            onChange: n.handleTitleEdit,
                            onKeyDown: n.handleKeyDown
                        })), r.createElement(u._4, {
                            flexShrink: 0,
                            flexGrow: 0
                        }, r.createElement(u._4, {
                            position: u._11.Relative
                        }, n.renderSave(), r.createElement(u._2, {
                            onClick: n.dismissMessage,
                            "data-test-selector": v.TITLE_SAVE_TOOLTIP
                        }, r.createElement(u.p, {
                            direction: u.q.TopRight,
                            show: n.state.showError || n.state.showSuccess
                        }, r.createElement(u._4, {
                            padding: 1
                        }, n.state.showSuccess ? r.createElement(u.O, {
                            color: u.J.Link
                        }, Object(o.d)("Title Saved!", "ClipsTitleEdit")) : r.createElement(u.O, {
                            color: u.J.Error
                        }, n.getErrorMessage()))))))))
                    }, n.renderSave = function() {
                        return r.createElement(u.u, {
                            "data-test-selector": v.TITLE_SAVE,
                            disabled: !n.canSaveEditedTitle(),
                            onClick: n.editClipTitle
                        }, Object(o.d)("Save", "ClipsTitleEdit"))
                    }, n.getRemainingCharacterText = function() {
                        return Object(o.d)("{characterCount, number} remaining", {
                            characterCount: g - n.state.title.length
                        }, "ClipsTitleEdit")
                    }, n.onSuccess = function() {
                        n.props.onSuccess && n.props.onSuccess(), n.setState({
                            showSuccess: !0,
                            showError: !1,
                            error: null
                        }), setTimeout(function() {
                            n.setState({
                                showSuccess: !1
                            })
                        }, 1500)
                    }, n.dismissMessage = function() {
                        n.setState({
                            showError: !1,
                            showSuccess: !1
                        })
                    }, n.handleTitleEdit = function(e) {
                        var t = e.currentTarget.value.slice(0, g);
                        n.setState({
                            title: t,
                            showError: !1,
                            showSuccess: !1
                        })
                    }, n.editClipTitle = function() {
                        return a.__awaiter(n, void 0, void 0, function() {
                            var e;
                            return a.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        if ("" === this.state.title.trim()) return this.setState({
                                            showError: !0,
                                            error: i.emptySubmission
                                        }), [2];
                                        t.label = 1;
                                    case 1:
                                        return t.trys.push([1, 3, , 4]), [4, this.props.editTitle(this.state.title.trim())];
                                    case 2:
                                        return t.sent(), c(Number(this.props.clipBroadcasterId), this.props.clipId, this.props.clipSlug, this.props.clipTitle, this.props.location), this.onSuccess(), [3, 4];
                                    case 3:
                                        return e = t.sent(), this.setState({
                                            showError: !0,
                                            error: this.errorMessageToError(e)
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, n.canSaveEditedTitle = function() {
                        return n.props.clipTitle !== n.state.title.trim()
                    }, n.handleKeyDown = function(e) {
                        switch (e.keyCode) {
                            case s.a.Enter:
                                return void(n.canSaveEditedTitle() && n.editClipTitle());
                            default:
                                return
                        }
                    }, n.state = {
                        title: t.clipTitle.trim(),
                        showError: !1,
                        showSuccess: !1,
                        error: null
                    }, n
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return this.props.location === d.PageviewLocation.MyClipsManager ? this.renderForManager() : this.renderForClipsViewing()
                }, t.prototype.getErrorMessage = function() {
                    switch (this.state.error) {
                        case i.channelViolation:
                            return Object(o.d)("Uh-oh. Check for inappropriate language and try again!", "ClipsTitleEdit");
                        case i.emptySubmission:
                            return Object(o.d)("Please add a title.", "ClipsTitleEdit");
                        default:
                            return Object(o.d)("Whoops. Something went wrong.", "ClipsTitleEdit")
                    }
                }, t.prototype.errorMessageToError = function(e) {
                    return e.message.includes("403:") ? i.channelViolation : i.unknown
                }, t
            }(r.Component),
            f = function(e) {
                return {
                    editTitle: function(t) {
                        return a.__awaiter(m, void 0, void 0, function() {
                            var n;
                            return a.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return i.trys.push([0, 2, , 3]), [4, e.mutate({
                                            variables: {
                                                input: {
                                                    slug: e.ownProps.clipSlug,
                                                    title: t
                                                }
                                            }
                                        })];
                                    case 1:
                                        return i.sent(), [3, 3];
                                    case 2:
                                        throw n = i.sent(), o.j.error(n, "Failed to edit clip title"), n;
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }
                }
            },
            k = Object(l.a)(p, {
                props: f
            })(h);
        n.d(t, !1, function() {
            return v
        }), n.d(t, !1, function() {
            return i
        }), n.d(t, !1, function() {
            return h
        }), n.d(t, !1, function() {
            return f
        }), n.d(t, "a", function() {
            return k
        })
    },
    QX2Z: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "ClipsCreateFeedPost"
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
            }],
            loc: {
                start: 0,
                end: 100
            }
        };
        n.loc.source = {
            body: "mutation ClipsCreateFeedPost($input: CreatePostInput!) {\ncreatePost(input: $input) {\npost {\nid\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    RbGx: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
        });
        var i = n("GiK3"),
            a = (n.n(i), n("mbxv")),
            r = function(e) {
                var t, n = e.badgesToRender,
                    r = e.badgeSets,
                    o = [];
                t = n, Array.isArray(t) ? o = n.map(function(e) {
                    var t = r.getBadge(e.setID, e.version);
                    return null === t ? null : i.createElement(a.a, {
                        key: t.setID + "/" + t.version,
                        badge: t
                    })
                }) : function(e) {
                    return !Array.isArray(e)
                }(n) && (o = Object.keys(n).map(function(e) {
                    var t = n[e],
                        o = r.getBadge(e, t);
                    return null === o ? null : i.createElement(a.a, {
                        key: o.setID + "/" + o.version,
                        badge: o
                    })
                }));
                var l = o.filter(function(e) {
                    return null !== e
                });
                return i.createElement("span", null, l)
            }
    },
    RsNJ: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "WatchLivePrompt"
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
                                            value: "login"
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
                                        value: "86"
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "height"
                                    },
                                    value: {
                                        kind: "IntValue",
                                        value: "45"
                                    }
                                }],
                                directives: []
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 172
            }
        };
        n.loc.source = {
            body: "query WatchLivePrompt($slug: ID!) {\nclip(slug: $slug) {\nid\ngame {\ndisplayName\nid\n}\nbroadcaster {\nid\nlogin\ndisplayName\nstream {\nid\n}\n}\nthumbnailURL(width: 86 height: 45)\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
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
            r = n("8Wuk"),
            o = n("vH/s"),
            l = ((i = {})[r.b.Twitter] = "twitter", i[r.b.Reddit] = "reddit", i[r.b.VKontakte] = "vkontakte", i[r.b.Facebook] = "facebook", i[r.b.Copy] = "link", i[r.b.CopyInput] = "option_link", i),
            s = {
                MyClips: "MyClips",
                ClipsOfMyChannel: "ClipsOfMyChannel"
            },
            d = {
                Game: "TopClipsGame",
                Channel: "TopClipsChannel"
            },
            c = {
                MyClips: o.PageviewLocation.MyClipsManager,
                ClipsOfMyChannel: o.PageviewLocation.ChannelClipsManager,
                TopClipsGame: o.PageviewLocation.ClipsGame,
                TopClipsChannel: o.PageviewLocation.ChannelClips
            },
            u = function(e, t) {
                return function(n) {
                    a.o.tracking.track(o.SpadeEventType.VideoShare, {
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
                a.o.tracking.track(o.SpadeEventType.ClipChampHelpClick, {
                    target_url: t,
                    type: n.toLowerCase()
                })
            }
    },
    XITx: function(e, t) {},
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
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "videoOffsetSeconds"
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
                                    value: "durationSeconds"
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
                                                    value: "id"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "broadcastBadges"
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
                                                            value: "clickAction"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        alias: {
                                                            kind: "Name",
                                                            value: "image1x"
                                                        },
                                                        name: {
                                                            kind: "Name",
                                                            value: "imageURL"
                                                        },
                                                        arguments: [{
                                                            kind: "Argument",
                                                            name: {
                                                                kind: "Name",
                                                                value: "size"
                                                            },
                                                            value: {
                                                                kind: "EnumValue",
                                                                value: "NORMAL"
                                                            }
                                                        }],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        alias: {
                                                            kind: "Name",
                                                            value: "image2x"
                                                        },
                                                        name: {
                                                            kind: "Name",
                                                            value: "imageURL"
                                                        },
                                                        arguments: [{
                                                            kind: "Argument",
                                                            name: {
                                                                kind: "Name",
                                                                value: "size"
                                                            },
                                                            value: {
                                                                kind: "EnumValue",
                                                                value: "DOUBLE"
                                                            }
                                                        }],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        alias: {
                                                            kind: "Name",
                                                            value: "image4x"
                                                        },
                                                        name: {
                                                            kind: "Name",
                                                            value: "imageURL"
                                                        },
                                                        arguments: [{
                                                            kind: "Argument",
                                                            name: {
                                                                kind: "Name",
                                                                value: "size"
                                                            },
                                                            value: {
                                                                kind: "EnumValue",
                                                                value: "QUADRUPLE"
                                                            }
                                                        }],
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
                                                            value: "version"
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
                                            value: "comments"
                                        },
                                        arguments: [{
                                            kind: "Argument",
                                            name: {
                                                kind: "Name",
                                                value: "first"
                                            },
                                            value: {
                                                kind: "IntValue",
                                                value: "100"
                                            }
                                        }, {
                                            kind: "Argument",
                                            name: {
                                                kind: "Name",
                                                value: "contentOffsetSeconds"
                                            },
                                            value: {
                                                kind: "Variable",
                                                name: {
                                                    kind: "Name",
                                                    value: "videoOffsetSeconds"
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
                                                            value: "cursor"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
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
                                                                    value: "commenter"
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
                                                                            value: "chatColor"
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
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "contentOffsetSeconds"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "message"
                                                                },
                                                                arguments: [],
                                                                directives: [],
                                                                selectionSet: {
                                                                    kind: "SelectionSet",
                                                                    selections: [{
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "fragments"
                                                                        },
                                                                        arguments: [],
                                                                        directives: [],
                                                                        selectionSet: {
                                                                            kind: "SelectionSet",
                                                                            selections: [{
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
                                                                                            value: "emoteID"
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
                                                                            value: "userBadges"
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
                                                                                    value: "setID"
                                                                                },
                                                                                arguments: [],
                                                                                directives: []
                                                                            }, {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "version"
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
                                                                                alias: {
                                                                                    kind: "Name",
                                                                                    value: "image1x"
                                                                                },
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "imageURL"
                                                                                },
                                                                                arguments: [{
                                                                                    kind: "Argument",
                                                                                    name: {
                                                                                        kind: "Name",
                                                                                        value: "size"
                                                                                    },
                                                                                    value: {
                                                                                        kind: "EnumValue",
                                                                                        value: "NORMAL"
                                                                                    }
                                                                                }],
                                                                                directives: []
                                                                            }, {
                                                                                kind: "Field",
                                                                                alias: {
                                                                                    kind: "Name",
                                                                                    value: "image2x"
                                                                                },
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "imageURL"
                                                                                },
                                                                                arguments: [{
                                                                                    kind: "Argument",
                                                                                    name: {
                                                                                        kind: "Name",
                                                                                        value: "size"
                                                                                    },
                                                                                    value: {
                                                                                        kind: "EnumValue",
                                                                                        value: "DOUBLE"
                                                                                    }
                                                                                }],
                                                                                directives: []
                                                                            }, {
                                                                                kind: "Field",
                                                                                alias: {
                                                                                    kind: "Name",
                                                                                    value: "image4x"
                                                                                },
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "imageURL"
                                                                                },
                                                                                arguments: [{
                                                                                    kind: "Argument",
                                                                                    name: {
                                                                                        kind: "Name",
                                                                                        value: "size"
                                                                                    },
                                                                                    value: {
                                                                                        kind: "EnumValue",
                                                                                        value: "QUADRUPLE"
                                                                                    }
                                                                                }],
                                                                                directives: []
                                                                            }, {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "clickAction"
                                                                                },
                                                                                arguments: [],
                                                                                directives: []
                                                                            }, {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "clickURL"
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
                                                                    value: "state"
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
                end: 738
            }
        };
        n.loc.source = {
            body: "query ClipsChatReplay($slug: ID! $videoOffsetSeconds: Int $cursor: Cursor) {\nclip(slug: $slug) {\nid\nbroadcaster {\nid\ndisplayName\n}\ncurator {\nid\nlogin\n}\ndurationSeconds\nvideo {\nid\nowner {\nid\nbroadcastBadges {\nid\nclickAction\nimage1x: imageURL(size: NORMAL)\nimage2x: imageURL(size: DOUBLE)\nimage4x: imageURL(size: QUADRUPLE)\nsetID\nversion\n}\n}\ncomments(first: 100 contentOffsetSeconds: $videoOffsetSeconds after: $cursor) {\nedges {\ncursor\nnode {\nid\ncommenter {\nid\nchatColor\ndisplayName\nlogin\n}\ncontentOffsetSeconds\nmessage {\nfragments {\ntext\nemote {\nid\nemoteID\n}\n}\nuserBadges {\nid\nsetID\nversion\ntitle\nimage1x: imageURL(size: NORMAL)\nimage2x: imageURL(size: DOUBLE)\nimage4x: imageURL(size: QUADRUPLE)\nclickAction\nclickURL\n}\n}\nstate\n}\n}\n}\n}\n}\n}",
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
        t.c = function(e, t) {
            var n = [];
            if (!e || !t) return n;
            var a = /\S+/g,
                r = a.exec(e);
            for (; r;) {
                var o = r[0],
                    l = t[o];
                if (l && "function" != typeof l) {
                    var s = Object(i.d)(e.slice(0, r.index)),
                        d = s ? s.length : r.index;
                    n[d] = {
                        startIndex: d,
                        endIndex: d + o.length,
                        data: {
                            alt: o,
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
                r = a.exec(e)
            }
            return n
        }, n.d(t, "a", function() {
            return a
        }), t.b = function(e) {
            for (var t = {}, n = 0, i = e; n < i.length; n++)
                for (var o = i[n], l = 0, s = o.emotes; l < s.length; l++)
                    for (var d = s[l], c = a[d.token] || [d.token], u = 0, p = c; u < p.length; u++) {
                        var m = p[u];
                        t[m] && o.id === r || (t[m] = {
                            id: d.id,
                            token: m
                        })
                    }
            return t
        };
        var i = n("l21v");
        var a = {
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
            r = "0"
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
    axV2: function(e, t) {},
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
    dJGa: function(e, t) {},
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
    dRtS: function(e, t) {},
    e1CU: function(e, t, n) {
        "use strict";
        t.a = function(e, t) {
            var n = e,
                i = !1;
            n ? n.split("").map(function(e) {
                return e.charCodeAt(0) > 127
            }).reduce(function(e, t) {
                return e || t
            }) && (i = !0) : n = t;
            return {
                userDisplayName: n,
                isIntl: i
            }
        }
    },
    f6Cj: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            return Object(i.a)(a, {
                u: e
            })
        }, t.c = function(e, t) {
            return Object(i.a)(r, {
                url: e,
                text: t
            })
        }, t.b = function(e, t) {
            return Object(i.a)(o, {
                url: e,
                title: t
            })
        }, t.d = function(e) {
            return Object(i.a)(l, {
                url: e
            })
        };
        var i = n("yDzg"),
            a = "https://www.facebook.com/sharer/sharer.php",
            r = "https://www.twitter.com/share",
            o = "https://www.reddit.com/submit",
            l = "https://vk.com/share.php"
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
            r = n("+xm8"),
            o = n("f2i/"),
            l = n("Aj/L"),
            s = n("4bQk");
        var d = Object(i.b)(function(e) {
            return {
                isLoggedIn: Object(l.d)(e)
            }
        }, function(e) {
            return Object(a.b)({
                login: function() {
                    return Object(o.f)(r.a.FollowButton)
                }
            }, e)
        })(s.a);
        n.d(t, "a", function() {
            return d
        }), n.d(t, !1, function() {}), n.d(t, "b", function() {
            return s.b
        })
    },
    iydZ: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return o
        }), t.c = function(e, t) {
            var n = [],
                o = t.indexedActions,
                s = new RegExp("^(" + Object.keys(o).join("|") + ")(\\d+)$", "i"),
                d = e.split(/\s+/);
            return d.forEach(function(e, t) {
                var c = s.exec(e);
                if (c) {
                    var u = c[1].toLowerCase(),
                        p = +c[2],
                        m = o[u];
                    if (m || u !== i.g || (m = Object(a.b)()), m) {
                        var v = m.orderedTiers.find(function(e) {
                            return e.bits <= p
                        });
                        !v && p && (v = m.orderedTiers[0]), v && n.push({
                            type: r.a.Emote,
                            content: {
                                images: l(v),
                                alt: m.prefix,
                                cheerAmount: p,
                                cheerColor: v.color
                            }
                        })
                    }
                } else {
                    var g = n.length && n[n.length - 1],
                        h = "";
                    if (t < d.length - 1 && (h = " "), g && g.type === r.a.Text) g.content += e + h;
                    else {
                        var f = "";
                        t && (f = " "), n.push({
                            type: r.a.Text,
                            content: f + e + h
                        })
                    }
                }
            }), n
        }, t.b = l;
        var i = n("3iBR"),
            a = n("CFVp"),
            r = n("mwvJ"),
            o = {
                indexedActions: {},
                orderedActions: []
            };

        function l(e, t, n) {
            void 0 === n && (n = !0);
            var i, a, r = n ? "animated" : "static";
            return t ? {
                themed: !0,
                dark: (i = {}, i[t + "x"] = e.indexedImages.DARK[r].get(t), i),
                light: (a = {}, a[t + "x"] = e.indexedImages.LIGHT[r].get(t), a)
            } : {
                themed: !0,
                dark: {
                    "1x": e.indexedImages.DARK[r].get(1),
                    "1.5x": e.indexedImages.DARK[r].get(1.5),
                    "2x": e.indexedImages.DARK[r].get(2),
                    "3x": e.indexedImages.DARK[r].get(3),
                    "4x": e.indexedImages.DARK[r].get(4)
                },
                light: {
                    "1x": e.indexedImages.LIGHT[r].get(1),
                    "1.5x": e.indexedImages.LIGHT[r].get(1.5),
                    "2x": e.indexedImages.LIGHT[r].get(2),
                    "3x": e.indexedImages.LIGHT[r].get(3),
                    "4x": e.indexedImages.LIGHT[r].get(4)
                }
            }
        }
    },
    "j7/Y": function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("OAwv"),
            r = n("GiK3"),
            o = n("F8kA"),
            l = n("6sO2");

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
                                    d = r.content_index;
                                l.o.tracking.trackPageview(i.__assign({
                                    content: o,
                                    medium: s,
                                    content_index: d,
                                    location: e.location
                                }, t))
                            }
                        }, l.j.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : l.j.warn("No latency tracker exists! This means no data will be sent to Spade.", e), a
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
                                    value: "slug"
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
                end: 132
            }
        };
        n.loc.source = {
            body: "query ClipsReactionCarousel($slug: ID!) {\nclip(slug: $slug) {\nid\nslug\nreactions {\ncount\nemote {\nid\ntoken\n}\nself {\nhasReacted\n}\n}\n}\n}",
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
            a = n("GiK3"),
            r = (n.n(a), n("HM6l")),
            o = n("Odds"),
            l = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        showBalloon: !!t.props.openByDefault,
                        hasInteracted: !!t.props.openByDefault
                    }, t.toggleBalloonId = Object(r.a)(), t.handleButtonClick = function() {
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
                    if (n.type !== o.p) throw new Error("ToggleBalloonWrapper needs a Balloon as its second child element");
                    var r = a.cloneElement(t, {
                            onClick: this.handleButtonClick
                        }),
                        l = null;
                    (this.state.hasInteracted || this.props.alwaysMountBalloonContent) && (l = a.cloneElement(n, {
                        show: this.state.showBalloon
                    }));
                    var s = r;
                    return this.props.tooltipProps && (s = a.createElement(o._44, i.__assign({}, this.props.tooltipProps), r)), a.createElement(o._4, {
                        "data-toggle-balloon-id": this.toggleBalloonId,
                        display: this.props.display,
                        position: o._11.Relative
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
        var i = n("TToO"),
            a = n("6sO2"),
            r = n("iydZ"),
            o = n("mwvJ"),
            l = new RegExp("(?:^|\\s)(?:https?://)?clips.twitch.tv/(\\w+)(?:/)?(\\w+)?(?:/edit)?(?:$|\\s)?");
        var s = n("YhVV"),
            d = n("3KVC"),
            c = n("e1CU");
        t.a = function(e, t, n, a, r, o) {
            void 0 === o && (o = !1);
            var l;
            l = r ? Object(s.c)(e, r) : function(e) {
                var t = [];
                e && Object.keys(e).forEach(function(n) {
                    var i = e[n];
                    i.forEach(function(e) {
                        t[e.startIndex] = {
                            startIndex: e.startIndex,
                            endIndex: e.endIndex + 1,
                            data: {
                                images: {
                                    themed: !1,
                                    sources: {
                                        "1x": k(n, 1),
                                        "2x": k(n, 2),
                                        "4x": k(n, 4)
                                    }
                                }
                            }
                        }
                    })
                });
                return t
            }(t.emotes);
            var d = Object(c.a)(t.displayName, t.username);
            return {
                badges: t.badges || {},
                bits: t.bits,
                user: i.__assign({}, d, {
                    userLogin: t.username,
                    userID: t.userID,
                    userType: t.userType,
                    color: t.color || m(t.userID)
                }),
                messageParts: e ? v(e, l, t.bits, n, a, d.userDisplayName) : [],
                deleted: o,
                timestamp: Date.now()
            }
        }, t.b = m, t.f = v, t.d = g, t.c = f, t.e = k;
        var u = ["#FF0000", "#0000FF", "#008000", "#B22222", "#FF7F50", "#9ACD32", "#FF4500", "#2E8B57", "#DAA520", "#D2691E", "#5F9EA0", "#1E90FF", "#FF69B4", "#8A2BE2", "#00FF7F"],
            p = {};

        function m(e, t) {
            return void 0 === t && (t = 15), "number" != typeof p[e] && (p[e] = Math.floor(Math.random() * t)), u[p[e]]
        }

        function v(e, t, n, a, r, l) {
            void 0 === t && (t = []);
            var s = [],
                d = 0,
                c = g(e);
            t.forEach(function(t) {
                var u = c ? c.slice(d, t.startIndex).join("") : e.slice(d, t.startIndex);
                u && (s = n ? s.concat(h(u, l, r, a)) : s.concat(f(u, l, r))), s.push({
                    type: o.a.Emote,
                    content: i.__assign({
                        alt: c ? c.slice(t.startIndex, t.endIndex).join("") : e.slice(t.startIndex, t.endIndex)
                    }, t.data)
                }), d = t.endIndex
            });
            var u = c ? c.slice(d).join("") : e.slice(d);
            return u && (s = n ? s.concat(h(u, l, r, a)) : s.concat(f(u, l, r))), s
        }

        function g(e) {
            return e.match(/[^\uD800-\uDFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDFFF]/g)
        }

        function h(e, t, n, i) {
            if (!i) return f(e, t, n);
            var a = Object(r.c)(e, i).map(function(e) {
                return e.type === o.a.Text ? f(e.content, t, n) : e
            });
            return [].concat.apply([], a)
        }

        function f(e, t, n) {
            var i = /^(?:(https?:\/\/)?(?:[\w@#%\-+=:~]+\.)+[a-z]{2,6}(?:\/[\w./@#%&()\-+=:?~]*)?)$/g,
                r = /([^\w@#%\-+=:~])?(@)([^\u0000-\u007F]+|\w+)+([^\w./@#%&()\-+=:?~]|\s|$)/g,
                s = [],
                c = e.split(/\s+/);
            return c.forEach(function(e, u) {
                i.lastIndex = 0;
                var p = i.exec(e);
                r.lastIndex = 0;
                var m = r.exec(e);
                if (p) {
                    var v = p.index;
                    0 !== v && s.push({
                        type: o.a.Text,
                        content: "" + e.slice(0, v)
                    });
                    var g = i.lastIndex;
                    if (n) s.push({
                        type: o.a.Text,
                        content: " <" + Object(a.d)("deleted link", "CreateMessageData") + "> "
                    });
                    else {
                        var h = (p[1] ? "" : "https://") + e.slice(v, g);
                        if (function(e) {
                                return void 0 === e && (e = ""), l.test(e) && !e.includes("clips.twitch.tv/2017/")
                            }(h)) {
                            var f = function(e) {
                                void 0 === e && (e = "");
                                var t = e.match(l);
                                return null === t ? "" : t && t.length > 0 && void 0 !== t.index ? t[1] : ""
                            }(h);
                            s.push({
                                type: o.a.ClipLink,
                                content: {
                                    slug: f,
                                    url: h,
                                    displayText: e.slice(v, g)
                                }
                            })
                        } else if (Object(d.a)(h)) {
                            var k = Object(d.b)(h);
                            s.push({
                                type: o.a.VideoLink,
                                content: {
                                    id: k,
                                    url: h,
                                    displayText: e.slice(v, g)
                                }
                            })
                        } else s.push({
                            type: o.a.Link,
                            content: {
                                displayText: e.slice(v, g),
                                url: h
                            }
                        })
                    }
                    var y = e.slice(g),
                        b = "";
                    u < c.length - 1 && (b = " "), y && s.push({
                        type: o.a.Text,
                        content: "" + y + b
                    })
                } else {
                    if (!m) {
                        var S = s.length && s[s.length - 1];
                        b = "";
                        if (u < c.length - 1 && (b = " "), S && S.type === o.a.Text) S.content += e + b;
                        else {
                            var C = "";
                            u && (C = " "), s.push({
                                type: o.a.Text,
                                content: C + e + b
                            })
                        }
                        return
                    }
                    var _ = m[3];
                    s.push({
                        type: o.a.Mention,
                        content: {
                            sender: t,
                            recipient: _
                        }
                    })
                }
            }), s
        }

        function k(e, t) {
            return "https://static-cdn.jtvnw.net/emoticons/v1/" + e + "/" + Math.min(Math.ceil(t), 3) + ".0"
        }
    },
    lTii: function(e, t) {},
    mK8J: function(e, t) {},
    mRH2: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "ReportUserModal_ReportUser"
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
                                value: "ReportContentInput"
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
                            value: "reportContent"
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
                                    value: "contentID"
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
                end: 111
            }
        };
        n.loc.source = {
            body: "mutation ReportUserModal_ReportUser($input: ReportContentInput!) {\nreportContent(input: $input) {\ncontentID\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    mbxv: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("GiK3"),
            r = n("+V/3"),
            o = n("Odds"),
            l = (n("2IkU"), n("6sO2")),
            s = n("vH/s"),
            d = function(e) {
                var t = Date.now() / 1e3;
                e.badge_type = e.badge_type.toLowerCase().replace(/( |\s)/g, "_"), l.o.tracking.track(s.SpadeEventType.ChatBadgeClick, Object.assign({
                    client_time: t
                }, e))
            };
        n.d(t, "a", function() {
            return c
        });
        var c = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.state = {
                    isHovering: !1
                }, t.onMouseOver = function() {
                    t.setState({
                        isHovering: !0
                    })
                }, t.onMouseOut = function() {
                    t.setState({
                        isHovering: !1
                    })
                }, t.onBadgeClickHandler = function() {
                    d({
                        badge_type: t.props.badge.title,
                        badge_url_target: t.targetURL
                    })
                }, t
            }
            return i.__extends(t, e), t.prototype.render = function() {
                var e = this.props.badge,
                    t = e.title,
                    n = e.image1x,
                    i = e.image2x,
                    r = e.image4x,
                    l = a.createElement("img", {
                        alt: t,
                        className: "chat-badge",
                        src: n,
                        srcSet: n + " 1x, " + i + " 2x, " + r + " 4x",
                        onMouseOver: this.onMouseOver,
                        onMouseOut: this.onMouseOut
                    });
                return this.targetURL = this.getTargetURL(), "" !== this.targetURL && (l = a.createElement("a", {
                    href: this.targetURL,
                    onClick: this.onBadgeClickHandler,
                    target: "_blank",
                    "data-a-target": "chat-badge"
                }, l)), this.state.isHovering ? a.createElement(o._44, {
                    align: o._45.Left,
                    "data-a-target": "chat-badge",
                    display: o.P.Inline,
                    key: n,
                    label: t,
                    offsetY: "0.9rem"
                }, l) : l
            }, t.prototype.getTargetURL = function() {
                var e = this.props.badge;
                switch (e.clickAction) {
                    case r.d:
                        return e.clickURL;
                    case r.b:
                        return e.channelName ? this.getSubscriberLink() : "";
                    case r.c:
                        return "https://www.twitch.tv/products/turbo?ref=chat_badge";
                    default:
                        return ""
                }
            }, t.prototype.getSubscriberLink = function() {
                return "https://www.twitch.tv/" + this.props.badge.channelName + "/subscribe?ref=in_chat_subscriber_link"
            }, t
        }(a.Component)
    },
    mmQh: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "ReportUserModal_ReportUserCommunity"
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
                                value: "ReportUserInCommunityInput"
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
                            value: "reportUserInCommunity"
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
                                    value: "user"
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
            }],
            loc: {
                start: 0,
                end: 138
            }
        };
        n.loc.source = {
            body: "mutation ReportUserModal_ReportUserCommunity($input: ReportUserInCommunityInput!) {\nreportUserInCommunity(input: $input) {\nuser {\nid\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    mmqR: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ClipsChatCard"
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
                                    value: "videoOffsetSeconds"
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
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 123
            }
        };
        n.loc.source = {
            body: "query ClipsChatCard($slug: ID!) {\nclip(slug: $slug) {\nid\nvideoOffsetSeconds\ncreatedAt\ncurator {\nid\nlogin\n}\nvideo {\nid\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "mw/a": function(e, t, n) {
        "use strict";
        var i;
        n.d(t, "a", function() {
                return i
            }),
            function(e) {
                e.ChannelFeedComment = "CHANNEL_FEED_COMMENT_REPORT", e.ChannelFeedPost = "CHANNEL_FEED_POST_REPORT", e.Chat = "CHAT_REPORT", e.Clip = "CLIP_REPORT", e.Collection = "COLLECTION_REPORT", e.Community = "COMMUNITY_REPORT", e.Event = "EVENT_REPORT", e.Extension = "EXTENSION_REPORT", e.LiveUp = "LIVE_UP_REPORT", e.Raid = "RAID_REPORT", e.Room = "ROOM_REPORT", e.StreamUp = "STREAM_UP_REPORT", e.User = "USER_REPORT", e.VideoChatMessage = "VOD_COMMENT_REPORT", e.Vod = "VOD_REPORT"
            }(i || (i = {}))
    },
    mwvJ: function(e, t, n) {
        "use strict";
        var i;
        n.d(t, "a", function() {
                return i
            }),
            function(e) {
                e[e.Text = 0] = "Text", e[e.Mention = 1] = "Mention", e[e.Link = 2] = "Link", e[e.Emote = 3] = "Emote", e[e.ClipLink = 4] = "ClipLink", e[e.VideoLink = 5] = "VideoLink"
            }(i || (i = {}))
    },
    oFw4: function(e, t) {},
    oSFp: function(e, t, n) {
        "use strict";
        var i = n("A5Hr"),
            a = n("TToO"),
            r = n("GiK3"),
            o = n("RH2O"),
            l = n("2KeS"),
            s = n("+8VM"),
            d = n("V5M+"),
            c = n("CSlQ"),
            u = n("Odds"),
            p = (n("oFw4"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleClose = function(e) {
                        t.props.closeModal(), t.props.onClose && t.props.onClose(e)
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(u._27, {
                        className: "reporting-modal__container",
                        background: u.m.Base,
                        padding: {
                            x: 2,
                            y: 3
                        }
                    }, r.createElement(i.a, {
                        onClose: this.handleClose,
                        reportContext: this.props.reportContext,
                        title: this.props.title,
                        defaultDescription: this.props.defaultDescription
                    }), r.createElement(s.a, null))
                }, t
            }(r.Component));
        var m = Object(l.d)(Object(c.d)("ReportUserModal"), Object(o.b)(null, function(e) {
            return Object(l.b)({
                closeModal: d.c
            }, e)
        }))(p);
        n.d(t, !1, function() {}), n.d(t, !1, function() {
            return i.a
        }), n.d(t, !1, function() {
            return p
        }), n.d(t, "a", function() {
            return m
        })
    },
    qe65: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("GiK3"),
            r = n("RH2O"),
            o = n("NXs7"),
            l = n("0nzt"),
            s = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = this.props,
                        t = (e.defaultRes, e.sources),
                        n = (e.darkModeEnabled, i.__rest(e, ["defaultRes", "sources", "darkModeEnabled"])),
                        r = this.props.darkModeEnabled ? t.dark : t.light,
                        o = Object.keys(r);
                    delete n.dispatch;
                    var l = i.__assign({}, n, {
                        src: r[this.props.defaultRes || o[0]],
                        srcSet: o.map(function(e) {
                            return r[e] + " " + e
                        }).join(",")
                    });
                    return a.createElement("img", i.__assign({}, l, {
                        onLoad: this.props.onLoad
                    }))
                }, t
            }(a.Component);
        var d = Object(r.b)(function(e) {
            return {
                darkModeEnabled: Object(l.a)(e) === o.a.Dark
            }
        })(s);
        n.d(t, "a", function() {
            return d
        })
    },
    "r+Hw": function(e, t) {},
    sEID: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return s
        }), n.d(t, "a", function() {
            return d
        });
        var i = n("GiK3"),
            a = (n.n(i), n("8Wuk")),
            r = n("yDzg"),
            o = n("WNmM"),
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
                return i.createElement(l._4, {
                    className: "clips-social-share",
                    display: l.P.Flex,
                    flexWrap: l.S.NoWrap
                }, s.map(function(t) {
                    return i.createElement(l._4, {
                        key: t.type,
                        margin: {
                            right: 1
                        }
                    }, i.createElement(a.a, {
                        key: t.type,
                        type: t.type,
                        text: e.clip.title,
                        url: Object(r.a)(e.clip.url, t.params),
                        onShareClick: Object(o.d)(e.clip, e.pageType)
                    }))
                }))
            }
    },
    sikP: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("GiK3"),
            r = n("6sO2"),
            o = n("rCmJ"),
            l = n("Odds"),
            s = (n("XITx"), {
                TITLE: "clips-modal-title",
                MAIN_BODY: "clips-modal-main-body",
                SUCCESS_BODY: "clips-modal-success-body",
                ERROR_BODY: "clips-modal-error-body",
                SUBMIT_BUTTON: "clips-modal-submit-button",
                CANCEL_BUTTON: "clips-modal-cancel-button"
            }),
            d = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderSuccess = function() {
                        return t.props.successContent ? a.createElement(l._27, {
                            "data-test-selector": s.SUCCESS_BODY,
                            padding: {
                                x: 2,
                                y: 1
                            },
                            margin: {
                                bottom: 1
                            },
                            borderMarked: !0,
                            background: l.m.Alt,
                            fullWidth: !0
                        }, a.createElement(l.O, {
                            type: l._41.Strong
                        }, t.props.successContent)) : null
                    }, t.renderError = function() {
                        return t.props.errorContent ? a.createElement(l._27, {
                            "data-test-selector": s.ERROR_BODY,
                            padding: {
                                x: 1,
                                y: .5
                            },
                            margin: {
                                bottom: 1
                            },
                            borderMarked: !0,
                            background: l.m.Alt,
                            fullWidth: !0
                        }, a.createElement(l.O, {
                            type: l._41.Strong,
                            color: l.J.Error
                        }, t.props.errorContent)) : null
                    }, t.onSubmit = function() {
                        t.props.onSubmit()
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return this.props.successContent ? a.createElement(o.a, {
                        onClickOut: this.props.onClose
                    }, a.createElement(l._27, {
                        padding: 2,
                        background: l.m.Base,
                        className: "clip-modal"
                    }, this.renderSuccess(), a.createElement(l._4, {
                        display: l.P.Flex,
                        justifyContent: l._3.Center
                    }, a.createElement(l._4, {
                        margin: {
                            x: 1
                        }
                    }, a.createElement(l.u, {
                        "data-test-selector": s.CANCEL_BUTTON,
                        onClick: this.props.onClose
                    }, Object(r.d)("Close", "ClipsModal")))))) : a.createElement(o.a, {
                        onClickOut: this.props.onClose
                    }, a.createElement(l._27, {
                        padding: 2,
                        background: l.m.Base,
                        className: "clip-modal"
                    }, a.createElement(l._27, {
                        "data-test-selector": s.TITLE,
                        borderBottom: !0,
                        margin: {
                            bottom: 2
                        },
                        padding: {
                            bottom: 1
                        }
                    }, this.props.title), a.createElement(l._27, {
                        "data-test-selector": s.MAIN_BODY,
                        borderBottom: !0,
                        margin: {
                            bottom: 2
                        },
                        padding: {
                            bottom: 2
                        }
                    }, this.renderError(), this.props.body), a.createElement(l._4, {
                        display: l.P.Flex,
                        justifyContent: l._3.Center
                    }, a.createElement(l._4, {
                        margin: {
                            x: 1
                        }
                    }, a.createElement(l.u, {
                        "data-test-selector": s.CANCEL_BUTTON,
                        type: l.A.Text,
                        onClick: this.props.onClose
                    }, Object(r.d)("Cancel", "ClipsModal"))), a.createElement(l._4, {
                        margin: {
                            x: 1
                        }
                    }, a.createElement(l.u, {
                        "data-test-selector": s.SUBMIT_BUTTON,
                        type: this.props.buttonType ? this.props.buttonType : l.A.Default,
                        onClick: this.onSubmit,
                        disabled: this.props.submitDisabled
                    }, this.props.buttonContent), this.props.isLoading && a.createElement(l._6, {
                        delay: 0
                    })))))
                }, t
            }(a.Component),
            c = n("1OO3"),
            u = n("CSlQ"),
            p = 86400,
            m = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isLoading: !1,
                        hasErrored: !1,
                        hasSucceeded: !1
                    }, t.renderTitle = function() {
                        return t.props.isTemporary ? a.createElement(l.O, {
                            type: l._41.H5,
                            ellipsis: !0
                        }, Object(r.d)("Timeout this Clip Creator for 24 hours from Your Channel", "ClipsModalBanUser")) : a.createElement(l.O, {
                            type: l._41.H5,
                            ellipsis: !0
                        }, Object(r.d)("Ban this Clip Creator from Your Channel", "ClipsModalBanUser"))
                    }, t.renderBodyText = function() {
                        return t.props.isTemporary ? a.createElement(l.O, null, Object(r.d)("{clipCreator} will temporarily be timed out from creating clips and chatting in your channel for 24 hours.", {
                            clipCreator: t.props.targetUser.displayName
                        }, "ClipsModalBanUser")) : a.createElement(l.O, null, Object(r.d)("{clipCreator} will be permanently banned from creating clips and chatting in your channel.", {
                            clipCreator: t.props.targetUser.displayName
                        }, "ClipsModalBanUser"))
                    }, t.renderButtonText = function() {
                        return t.props.isTemporary ? Object(r.d)("Timeout User", "ClipsModalBanUser") : Object(r.d)("Ban User", "ClipsModalBanUser")
                    }, t.renderSuccess = function() {
                        return t.state.hasSucceeded ? Object(r.d)("Success!", "ClipsModalBanUser") : null
                    }, t.renderFailure = function() {
                        return t.state.hasErrored ? t.props.isTemporary ? Object(r.d)("There was a problem timing out this clip creator", "ClipsModalBanUser") : Object(r.d)("There was a problem banning this clip creator", "ClipsModalBanUser") : null
                    }, t.banUser = function() {
                        return i.__awaiter(t, void 0, void 0, function() {
                            var e, t;
                            return i.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        this.setState({
                                            isLoading: !0,
                                            hasSucceeded: !1,
                                            hasErrored: !1
                                        }), e = this.props.targetUser.login, t = this.props.isTemporary ? this.props.banUserMutation(e, p) : this.props.banUserMutation(e), n.label = 1;
                                    case 1:
                                        return n.trys.push([1, 3, , 4]), [4, t];
                                    case 2:
                                        return n.sent().banUserFromChatRoom.error ? this.setState({
                                            hasErrored: !0,
                                            isLoading: !1
                                        }) : this.setState({
                                            hasSucceeded: !0,
                                            isLoading: !1
                                        }), [3, 4];
                                    case 3:
                                        return n.sent(), this.setState({
                                            hasErrored: !0,
                                            isLoading: !1
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return a.createElement(d, {
                        onSubmit: this.banUser,
                        onClose: this.props.onClose,
                        title: this.renderTitle(),
                        body: this.renderBodyText(),
                        buttonContent: this.renderButtonText(),
                        buttonType: l.A.Alert,
                        submitDisabled: this.state.isLoading || this.state.hasSucceeded,
                        successContent: this.renderSuccess(),
                        errorContent: this.renderFailure(),
                        isLoading: this.state.isLoading
                    })
                }, t
            }(a.Component),
            v = Object(u.d)("ClipsModalBanUser")(Object(c.b)(function(e) {
                return {
                    channelID: e.broadcasterID
                }
            })(m)),
            g = n("7vx8"),
            h = n("wnjK");

        function f(e) {
            return Object(g.a)(h, e)
        }
        var k = n("LnKh"),
            y = (n("lTii"), this),
            b = {
                isLoading: !1,
                hasErrored: !1,
                hasSucceeded: !1
            },
            S = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.onDeleteClick = function() {
                        return i.__awaiter(n, void 0, void 0, function() {
                            return i.__generator(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        this.setState({
                                            isLoading: !0,
                                            hasSucceeded: !1,
                                            hasErrored: !1
                                        }), e.label = 1;
                                    case 1:
                                        return e.trys.push([1, 3, , 4]), this.props.data.clip ? [4, this.props.deleteClip(this.props.slug)] : [2];
                                    case 2:
                                        return e.sent(), this.setState({
                                            isLoading: !1,
                                            hasSucceeded: !0
                                        }), [3, 4];
                                    case 3:
                                        return e.sent(), this.setState({
                                            isLoading: !1,
                                            hasErrored: !0
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, n.state = b, n
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = [a.createElement(l.O, {
                        key: "title",
                        type: l._41.H4
                    }, Object(r.d)("Delete This Clip", "ClipsModalDelete")), a.createElement(l._4, {
                        key: "message",
                        margin: {
                            top: 1
                        }
                    }, a.createElement(l.O, {
                        type: l._41.P,
                        color: l.J.Alt2
                    }, Object(r.d)("This clip will be permanently deleted.", "ClipsModalDelete")))];
                    if (!this.props.data.clip) return null;
                    var t = null;
                    this.props.data.clip.curator && (t = a.createElement("span", null, " • ", Object(r.d)("Clipped by {curator}", {
                        curator: this.props.data.clip.curator.login
                    }, "ClipsModalDelete")));
                    var n = a.createElement(l._27, {
                        display: l.P.Flex,
                        flexWrap: l.S.NoWrap
                    }, a.createElement(l._4, {
                        className: "clips-modal-delete__thumb",
                        margin: {
                            right: 1
                        }
                    }, a.createElement(l.j, {
                        ratio: l.k.Aspect16x9
                    }, a.createElement("img", {
                        src: this.props.data.clip.thumbnailURL
                    }))), a.createElement(l._4, null, a.createElement(l.O, {
                        type: l._41.H5
                    }, this.props.data.clip.title), a.createElement(l.O, {
                        color: l.J.Alt2
                    }, Object(r.d)("{created, date, medium}", {
                        created: new Date(this.props.data.clip.createdAt)
                    }, "ClipsModalDelete"), t), a.createElement(l.O, {
                        color: l.J.Alt2
                    }, Object(r.d)("{viewCount, number} views", {
                        viewCount: this.props.data.clip.viewCount
                    }, "ClipsModalDelete"))));
                    return a.createElement(d, {
                        onSubmit: this.onDeleteClick,
                        onClose: this.props.onClose,
                        title: e,
                        body: n,
                        buttonContent: Object(r.d)("Delete", "ClipsModalDelete"),
                        buttonType: l.A.Alert,
                        submitDisabled: this.state.hasSucceeded || this.state.isLoading,
                        successContent: this.state.hasSucceeded ? Object(r.d)("Success!", "ClipsModalDelete") : null,
                        errorContent: this.state.hasErrored ? Object(r.d)("There was a problem deleting this clip.", "ClipsModalDelete") : null,
                        isLoading: this.state.isLoading
                    })
                }, t
            }(a.Component),
            C = Object(g.a)(k)(f({
                props: function(e) {
                    return {
                        deleteClip: function(t) {
                            return i.__awaiter(y, void 0, void 0, function() {
                                var n;
                                return i.__generator(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            return i.trys.push([0, 2, , 3]), [4, e.mutate({
                                                variables: {
                                                    input: {
                                                        slugs: [t]
                                                    }
                                                }
                                            })];
                                        case 1:
                                            return i.sent(), e.ownProps.onDelete && e.ownProps.onDelete(t), [3, 3];
                                        case 2:
                                            throw n = i.sent(), r.j.error(n, "Failed to delete clip"), n;
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        }
                    }
                }
            })(S)),
            _ = n("3zLD"),
            N = n("wqRA"),
            E = this,
            w = {
                isLoading: !1,
                hasErrored: !1,
                hasSucceeded: !1
            },
            O = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.deleteAll = function() {
                        return i.__awaiter(n, void 0, void 0, function() {
                            return i.__generator(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        this.setState({
                                            isLoading: !0,
                                            hasSucceeded: !1,
                                            hasErrored: !1
                                        }), e.label = 1;
                                    case 1:
                                        return e.trys.push([1, 3, , 4]), [4, this.props.deleteAllClips(this.props.broadcastID, this.props.videoID)];
                                    case 2:
                                        return e.sent(), this.setState({
                                            isLoading: !1,
                                            hasSucceeded: !0
                                        }), [3, 4];
                                    case 3:
                                        return e.sent(), this.setState({
                                            isLoading: !1,
                                            hasErrored: !0
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, n.renderSuccess = function() {
                        return n.state.hasSucceeded ? Object(r.d)("A request has been made to delete the clip. Please wait a few minutes for this to take effect.", "ClipsModalDeleteAll") : null
                    }, n.renderFailure = function() {
                        return n.state.hasErrored ? Object(r.d)("There was a problem deleting this clip.", "ClipsModalDeleteAll") : null
                    }, n.state = w, n
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = a.createElement(l.O, {
                        type: l._41.P
                    }, Object(r.d)("This clip and all other clips created from the same video will be permanently deleted.", "ClipsModalDeleteAll"));
                    return a.createElement(d, {
                        onSubmit: this.deleteAll,
                        onClose: this.props.onClose,
                        title: a.createElement(l.O, {
                            type: l._41.H4
                        }, Object(r.d)("Delete All Clips from Related Video", "ClipsModalDeleteAll")),
                        body: e,
                        buttonContent: Object(r.d)("Delete", "ClipsModalDeleteAll"),
                        buttonType: l.A.Alert,
                        submitDisabled: this.state.isLoading || this.state.hasSucceeded || "" === this.props.broadcastID,
                        isLoading: this.state.isLoading,
                        successContent: this.renderSuccess(),
                        errorContent: this.renderFailure()
                    })
                }, t
            }(a.Component),
            F = Object(_.compose)(Object(u.d)("ClipsModalDeleteAll"), f({
                props: function(e) {
                    return {
                        deleteAllClips: function(t, n) {
                            return i.__awaiter(E, void 0, void 0, function() {
                                var a, o, l;
                                return i.__generator(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            return i.trys.push([0, 6, , 7]), a = void 0, n ? [4, e.mutate({
                                                variables: {
                                                    input: {
                                                        videoID: n
                                                    }
                                                }
                                            })] : [3, 2];
                                        case 1:
                                            return o = i.sent(), a = o.data, [3, 5];
                                        case 2:
                                            return t ? [4, e.mutate({
                                                variables: {
                                                    input: {
                                                        broadcastID: t
                                                    }
                                                }
                                            })] : [3, 4];
                                        case 3:
                                            return o = i.sent(), a = o.data, [3, 5];
                                        case 4:
                                            throw new Error("Invalid broadcastID specified for deleteAllClips");
                                        case 5:
                                            return e.ownProps.onDeleteAll && e.ownProps.onDeleteAll(a.deleteClips.clips), [3, 7];
                                        case 6:
                                            throw l = i.sent(), r.j.error(l, "Failed to delete clips from VOD"), l;
                                        case 7:
                                            return [2]
                                    }
                                })
                            })
                        }
                    }
                }
            }), Object(g.a)(N, {
                props: function(e) {
                    var t = e.data.clip;
                    return t ? {
                        videoID: t.video ? t.video.id : null,
                        broadcastID: t.broadcast.id
                    } : {
                        videoID: null,
                        broadcastID: ""
                    }
                },
                options: function(e) {
                    return {
                        variables: {
                            slug: e.slug
                        }
                    }
                }
            }))(O),
            T = this,
            R = {
                isLoading: !1,
                hasErrored: !1,
                hasSucceeded: !1
            },
            I = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.renderSuccess = function() {
                        return n.state.hasSucceeded ? Object(r.d)("Clips successfully deleted.", "ClipsModalBatchDelete") : null
                    }, n.renderError = function() {
                        return n.state.hasErrored ? Object(r.d)("There was a problem deleting this clip.", "ClipsModalBatchDelete") : null
                    }, n.onDeleteClick = function() {
                        return i.__awaiter(n, void 0, void 0, function() {
                            return i.__generator(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        this.setState({
                                            isLoading: !0,
                                            hasSucceeded: !1,
                                            hasErrored: !1
                                        }), e.label = 1;
                                    case 1:
                                        return e.trys.push([1, 3, , 4]), [4, this.props.deleteClips()];
                                    case 2:
                                        return e.sent(), this.setState({
                                            hasSucceeded: !0,
                                            isLoading: !1
                                        }), [3, 4];
                                    case 3:
                                        return e.sent(), this.setState({
                                            hasErrored: !0,
                                            isLoading: !1
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, n.state = R, n
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = a.createElement(l.O, {
                            type: l._41.H4
                        }, Object(r.d)("Delete these clips?", "ClipsModalBatchDelete")),
                        t = a.createElement(l.O, {
                            type: l._41.P
                        }, Object(r.d)("These clips will be permanently deleted. Are you sure?", "ClipsModalBatchDelete"));
                    return a.createElement(d, {
                        onSubmit: this.onDeleteClick,
                        onClose: this.props.onClose,
                        title: e,
                        body: t,
                        buttonContent: Object(r.d)("Delete", "ClipsModalBatchDelete"),
                        buttonType: l.A.Alert,
                        submitDisabled: this.state.hasSucceeded || this.state.isLoading,
                        isLoading: this.state.isLoading,
                        successContent: this.renderSuccess(),
                        errorContent: this.renderError()
                    })
                }, t
            }(a.Component),
            x = f({
                props: function(e) {
                    return {
                        deleteClips: function() {
                            return i.__awaiter(T, void 0, void 0, function() {
                                var t;
                                return i.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return n.trys.push([0, 2, , 3]), [4, e.mutate({
                                                variables: {
                                                    input: {
                                                        slugs: e.ownProps.clipSlugs
                                                    }
                                                }
                                            })];
                                        case 1:
                                            return n.sent(), e.ownProps.onBatchDelete && e.ownProps.onBatchDelete(), [3, 3];
                                        case 2:
                                            throw t = n.sent(), r.j.error(t, "Failed to delete clips"), t;
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        }
                    }
                }
            })(I);
        n.d(t, "a", function() {
            return d
        }), n.d(t, "b", function() {
            return v
        }), n.d(t, "d", function() {
            return C
        }), n.d(t, "e", function() {
            return F
        }), n.d(t, "c", function() {
            return x
        })
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
                            value: "thumbnailURL"
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
                                    value: "slug"
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
                                            value: "login"
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
                end: 418
            }
        };
        n.loc.source = {
            body: "fragment recommendedClip on Clip {\nid\ntitle\nthumbnailURL\nslug\nbroadcaster {\nid\ndisplayName\n}\ngame {\nid\ndisplayName\n}\nviewCount\n}\nquery ClipsRecommendations($slug: ID!) {\nclip(slug: $slug) {\nid\nslug\ngame {\nid\nname\ndisplayName\n}\nbroadcaster {\nid\nlogin\ndisplayName\n}\nvideo {\nid\n}\nrelatedClips {\nsimilar {\n...recommendedClip\n}\nbroadcaster {\n...recommendedClip\n}\ngame {\n...recommendedClip\n}\ntop {\n...recommendedClip\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    tIhJ: function(e, t) {},
    twHn: function(e, t) {},
    "u0B+": function(e, t) {},
    vtXo: function(e, t) {},
    wnjK: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "Clips_DeleteClips"
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
                                value: "DeleteClipsInput"
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
                            value: "deleteClips"
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
                                    value: "clips"
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
                                            value: "slug"
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
                end: 106
            }
        };
        n.loc.source = {
            body: "mutation Clips_DeleteClips($input: DeleteClipsInput!) {\ndeleteClips(input: $input) {\nclips {\nid\nslug\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    wqRA: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ClipsModalDeleteAll_Clip"
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
                                    }]
                                }
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "broadcast"
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
            }],
            loc: {
                start: 0,
                end: 101
            }
        };
        n.loc.source = {
            body: "query ClipsModalDeleteAll_Clip($slug: ID!) {\nclip(slug: $slug) {\nid\nvideo {\nid\n}\nbroadcast {\nid\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
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
    x6ny: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ReportUserModal_ReportReasons"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "content"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "ReportContentType"
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
                            value: "reportReasons"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "content"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "content"
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
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 114
            }
        };
        n.loc.source = {
            body: "query ReportUserModal_ReportReasons($content: ReportContentType!) {\nreportReasons(content: $content) {\nid\ntext\n}\n}",
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
            a = n("GiK3"),
            r = n("Odds"),
            o = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleClickHandler = function(e) {
                        t.props.onClick && t.props.onClick(), e.currentTarget.select()
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(r._0, {
                        readOnly: !0,
                        type: r._1.Text,
                        value: this.props.value,
                        onClick: this.handleClickHandler
                    })
                }, t
            }(a.Component);
        n.d(t, "a", function() {
            return o
        })
    },
    xwpJ: function(e, t, n) {
        "use strict";
        var i = function(e, t) {
                var n = "https://www.twitch.tv/communities/{communityName}".replace("{communityName}", e);
                return 'community report (<a href="{link}">{link}</a>) {description}'.replace(/{link}/g, n).replace(/{description}/, t)
            },
            a = n("6sO2");

        function r() {
            return [{
                id: "other",
                text: Object(a.d)("Other Terms of Service Violation", "ReportUserModal")
            }]
        }
        n.d(t, "a", function() {
            return i
        }), n.d(t, "b", function() {
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
    },
    zU1d: function(e, t) {}
});
//# sourceMappingURL=sites.clips.pages.view-8b61c6b2697b55d86a1d517982c2618f.js.map