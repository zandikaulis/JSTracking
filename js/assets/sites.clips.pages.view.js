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
    "+ppV": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ReportUserModal_TargetReportUser"
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
                end: 93
            }
        };
        n.loc.source = {
            body: "query ReportUserModal_TargetReportUser($userId: ID!) {\nuser(id: $userId) {\nid\ndisplayName\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
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
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "champBadge"
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
                end: 110
            }
        };
        n.loc.source = {
            body: "query ClipsCurator($slug: ID!) {\nclip(slug: $slug) {\nid\ncurator {\nid\ndisplayName\nlogin\n}\nchampBadge {\nid\n}\n}\n}",
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
            c = n("w9tK"),
            d = n("zcHb"),
            u = n("vH/s"),
            p = n("CSlQ"),
            m = n("7vx8");
        ! function(e) {
            e.top = "top", e.similar = "similar", e.game = "game", e.broadcaster = "broadcaster", e.curator = "curator"
        }(i || (i = {}));
        var h = [i.similar, i.broadcaster, i.game, i.top];

        function g(e) {
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
        var v = "https://clips-media-assets.twitch.tv/img/clips-404-320x180.png",
            f = n("kJau"),
            k = n("Odds"),
            b = function(e) {
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
                        t = e.broadcaster && e.game && o.createElement(k.O, {
                            color: k.J.Alt2,
                            ellipsis: !0
                        }, Object(l.d)("{broadcasterDisplayName} playing {gameDisplayName}", {
                            broadcasterDisplayName: o.createElement(k.M, {
                                type: k.N.Inherit,
                                to: Object(f.d)(e.broadcaster.login, {
                                    tt_medium: "clips",
                                    tt_content: "player_channel_name"
                                })
                            }, e.broadcaster.displayName),
                            gameDisplayName: o.createElement(k.M, {
                                type: k.N.Inherit,
                                to: Object(f.e)(e.game.name, {
                                    tt_medium: "clips",
                                    tt_content: "player_game"
                                })
                            }, e.game.displayName)
                        }, "ClipsRecommendations")),
                        n = "/" + e.slug + "?tt_medium=clips&tt_content=recommendation";
                    return o.createElement(k._6, {
                        key: e.slug,
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(k.B, null, o.createElement(k.M, {
                        to: n,
                        onClick: this.props.trackSelectionClickHandler,
                        "data-test-selector": "clips-recommendation-view-rec-link"
                    }, o.createElement(k._29, {
                        position: k._13.Absolute,
                        attachTop: !0,
                        attachRight: !0,
                        padding: .5,
                        margin: .5,
                        background: k.m.Overlay,
                        color: k.J.Overlay,
                        elevation: 2,
                        zIndex: k._55.Default,
                        display: k.P.Flex,
                        justifyContent: k._5.Around,
                        alignItems: k.c.Center
                    }, o.createElement(k._6, {
                        display: k.P.Flex,
                        margin: {
                            right: .5
                        }
                    }, o.createElement(k._19, {
                        asset: k._20.GlyphViews
                    })), Object(l.d)("{views} views", {
                        views: Object(l.e)(e.viewCount)
                    }, "ClipsRecommendations"))), o.createElement(k._29, {
                        background: k.m.Alt2
                    }, o.createElement(k.e, {
                        type: k.i.FadeIn,
                        duration: k.g.ExtraLong,
                        enabled: !0
                    }, o.createElement(k.M, {
                        to: n,
                        onClick: this.props.trackSelectionClickHandler,
                        "data-test-selector": "clips-recommendation-view-rec-link"
                    }, o.createElement(k.D, {
                        src: this.getImageForClip(),
                        alt: Object(l.d)("Clip Thumbnail", "ClipsRecommendations"),
                        onError: this.onImageError
                    })))), o.createElement(k.C, null, o.createElement(k._6, {
                        padding: {
                            top: .5
                        }
                    }, o.createElement(k.M, {
                        to: n,
                        onClick: this.props.trackSelectionClickHandler,
                        "data-test-selector": "clips-recommendation-view-rec-link"
                    }, o.createElement(k.O, {
                        ellipsis: !0,
                        type: k._43.H3,
                        fontSize: k.T.Size5
                    }, e.title)), t))))
                }, t.prototype.getImageForClip = function() {
                    return this.state.imageFailed ? v : this.props.recommendedClip.thumbnailURL
                }, t
            }(o.Component),
            y = n("+ChX");

        function _(e, t, n) {
            return a.__awaiter(this, void 0, void 0, function() {
                var i, r, o, s, c, d, u, p, m, h, g, v, f, k, b, _, S, C;
                return a.__generator(this, function(N) {
                    switch (N.label) {
                        case 0:
                            i = null, r = null, o = null, s = null, c = null, d = null, t || l.j.error(new Error, "Missing `slug` in trackClipsEvent", {
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
                            return u = N.sent(), i = !!(u.data.clip.broadcaster && u.data.clip.broadcaster.stream && u.data.clip.broadcaster.stream.id), r = u.data.clip.broadcaster ? u.data.clip.broadcaster.login : null, o = u.data.clip.broadcaster ? u.data.clip.broadcaster.login : null, s = u.data.clip.game ? u.data.clip.game.name : null, c = u.data.clip.broadcaster ? u.data.clip.broadcaster.isPartner : null, d = u.data.clip.id, [3, 4];
                        case 3:
                            return p = N.sent(), l.j.error(p, "Failed to make query for Clip info for tracking event.", {
                                slug: t
                            }), [3, 4];
                        case 4:
                            return m = null, h = null, g = !1, (v = l.o.store.getState().session.user) && (h = v.id, m = v.login, g = !0), f = null, k = null, b = null, _ = null, (S = l.n.getLastPageview()) && (f = S.medium || null, k = S.content || null, b = S.tab_session_id || null, _ = S.location || null), C = a.__assign({
                                game: s,
                                live: i,
                                channel: r,
                                channel_id: o,
                                logged_in: g,
                                login: m,
                                user_id: h,
                                tt_content: k,
                                tt_medium: f,
                                partner: c,
                                vod_id: d,
                                vod_type: "clip",
                                tab_session_id: b,
                                location: _,
                                play_session_id: "TODO"
                            }, n), l.n.track(e, C), [2]
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
                content: g(t),
                carousel_content: "similar_clips"
            }
        }

        function C(e, t, n, i) {
            _(u.SpadeEventType.ItemSectionLoad, e.slug, a.__assign({}, S(e, i), {
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
        var N = n("tGx1");

        function E(e) {
            return o.createElement(k._6, {
                key: e
            }, o.createElement(k._6, {
                position: k._13.Relative
            }, o.createElement(k.j, {
                ratio: k.k.Aspect16x9
            }, o.createElement(k._12, null)), o.createElement(k._6, {
                position: k._13.Absolute,
                attachTop: !0,
                attachRight: !0,
                margin: .5
            }, o.createElement(k._12, {
                height: 28,
                width: 100
            }))), o.createElement(k._29, {
                margin: {
                    top: .5
                },
                fontSize: k.T.Size8
            }, o.createElement(k._12, {
                lineCount: 1,
                width: 180
            }), o.createElement(k._12, {
                lineCount: 1,
                width: 120
            })))
        }

        function O(e) {
            return o.createElement(k._6, {
                margin: {
                    bottom: 3
                },
                key: e
            }, o.createElement(k.O, {
                fontSize: k.T.Size5
            }, o.createElement(k._12, {
                lineCount: 1,
                width: 100
            })), o.createElement(k._6, {
                margin: {
                    top: 2
                }
            }, o.createElement(k.e, {
                type: k.i.FadeIn,
                duration: k.g.Medium,
                enabled: !0
            }, o.createElement(k._49, {
                childWidth: k._50.Medium,
                gutterSize: k._51.Small
            }, [1, 2, 3, 4].map(E)))))
        }
        var w = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.trackedLoad = !1, t.renderRow = function(e, n) {
                        if (t.props.data.clip && t.props.data.clip.relatedClips) {
                            var r = t.props.data.clip.relatedClips[e];
                            return o.createElement("div", {
                                key: e
                            }, o.createElement(k._6, {
                                padding: {
                                    y: 2
                                }
                            }, o.createElement(k.O, {
                                fontSize: k.T.Size4
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
                            }(e, t.props))), o.createElement(k._49, {
                                childWidth: k._50.Medium,
                                gutterSize: k._51.Small
                            }, r.map(function(i, r) {
                                return o.createElement(b, {
                                    key: i.id,
                                    recommendedClip: i,
                                    trackSelectionClickHandler: function() {
                                        ! function(e, t, n, i, r) {
                                            _(u.SpadeEventType.ItemSectionClick, e.slug, a.__assign({}, S(e, r), {
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
                            t.props.latencyTracking.reportInteractive(), t.trackedLoad = !0;
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
                    return this.props.data.clip ? o.createElement(k._6, {
                        padding: {
                            top: 1
                        }
                    }, this.getValidCategories(this.props).map(this.renderRow)) : o.createElement(k._6, null, this.renderPlaceholders())
                }, t.prototype.getValidCategories = function(e) {
                    var t = e.data.clip && e.data.clip.relatedClips;
                    return t ? h.filter(function(e) {
                        return 4 === t[e].length
                    }) : []
                }, t.prototype.renderPlaceholders = function() {
                    return o.createElement(k._6, {
                        margin: {
                            top: 3
                        }
                    }, [1, 2, 3].map(O))
                }, t
            }(o.Component),
            T = Object(p.d)("ClipsRecommendations")(Object(m.a)(N)(w)),
            F = n("hdYS"),
            R = n("CMkR"),
            I = n("U5tC"),
            x = {
                tt_content: "player_profile_img"
            },
            D = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return this.props.data.clip && this.props.data.clip.broadcaster ? o.createElement(k._6, {
                        className: "clips-broadcaster-info",
                        padding: 1,
                        display: k.P.Flex,
                        alignItems: k.c.Center
                    }, o.createElement("a", {
                        target: "_blank",
                        href: Object(f.d)(this.props.data.clip.broadcaster.login, x)
                    }, o.createElement(k.l, {
                        src: this.props.data.clip.broadcaster.profileImageURL,
                        alt: Object(l.d)("Broadcaster Avatar", "ClipsBroadcasterInfo"),
                        size: 30
                    })), o.createElement(k._6, {
                        display: k.P.Flex,
                        flexDirection: k.R.Column,
                        flexGrow: 1,
                        margin: {
                            left: 1
                        },
                        ellipsis: !0
                    }, o.createElement("a", {
                        href: Object(f.d)(this.props.data.clip.broadcaster.login, x)
                    }, o.createElement(k.O, {
                        fontSize: k.T.Size4,
                        type: k._43.Span
                    }, this.props.data.clip.broadcaster.displayName), !(!this.props.data.clip.broadcaster.stream || !this.props.data.clip.broadcaster.stream.id) && o.createElement(k._6, {
                        margin: {
                            left: .5
                        },
                        display: k.P.InlineBlock
                    }, o.createElement(k._10, {
                        label: Object(l.d)("LIVE", "ClipsBroadcasterInfo"),
                        type: k._11.Live
                    }))), o.createElement(k._6, null, o.createElement(k.O, {
                        color: k.J.Alt2,
                        fontSize: k.T.Size5,
                        ellipsis: !0
                    }, this.props.data.clip.game && Object(l.d)("playing {gameName}", {
                        gameName: o.createElement("a", {
                            target: "_blank",
                            href: Object(f.e)(this.props.data.clip.game.name, {
                                tt_medium: "clips_web"
                            })
                        }, this.props.data.clip.game.displayName)
                    }, "ClipsBroadcasterInfo")))), o.createElement("div", {
                        onMouseEnter: this.pauseAutoplayTimer,
                        onMouseLeave: this.restartAutoplayTimer
                    }, o.createElement(F.a, {
                        isHostedFollow: !1,
                        channelLogin: this.props.data.clip.broadcaster.login,
                        followUIType: F.b.IconAndText,
                        unfollowUIType: F.b.IconOnly,
                        showLoadingPlaceholder: !0
                    }))) : o.createElement(k._6, null, this.renderPlaceholders())
                }, t.prototype.pauseAutoplayTimer = function() {
                    Object(R.e)(R.b.followButton)
                }, t.prototype.restartAutoplayTimer = function() {
                    Object(R.g)(R.b.followButton)
                }, t.prototype.renderPlaceholders = function() {
                    return o.createElement(k._6, {
                        padding: 1,
                        display: k.P.Flex,
                        alignItems: k.c.Center
                    }, o.createElement(k._6, null, o.createElement(k.e, {
                        type: k.i.FadeIn,
                        duration: k.g.Long,
                        enabled: !0
                    }, o.createElement(k._12, {
                        height: 30,
                        width: 30
                    }))), o.createElement(k._29, {
                        fontSize: k.T.Size5,
                        flexGrow: 1,
                        margin: {
                            x: 1
                        }
                    }, o.createElement(k.e, {
                        type: k.i.FadeIn,
                        duration: k.g.Long,
                        enabled: !0
                    }, o.createElement(k._12, {
                        lineCount: 1,
                        width: 80
                    })), o.createElement(k.e, {
                        type: k.i.FadeIn,
                        duration: k.g.Long,
                        delay: k.f.Short,
                        enabled: !0
                    }, o.createElement(k._12, {
                        lineCount: 1,
                        width: 120
                    }))), o.createElement(k._6, null, o.createElement(k.e, {
                        type: k.i.FadeIn,
                        duration: k.g.Long,
                        enabled: !0
                    }, o.createElement(k._12, {
                        height: 30,
                        width: 70
                    }))))
                }, t = a.__decorate([Object(p.d)("ClipsBroadcasterInfo"), Object(m.a)(I)], t)
            }(o.Component),
            j = n("RH2O"),
            A = n("Aj/L"),
            M = n("zCIC"),
            L = n("XOun"),
            U = n("0QL4"),
            P = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.data.clip;
                    if (!e || !e.curator) return o.createElement(k._6, null, this.renderPlaceholders());
                    var t = Object(f.c)(e.curator.login, {
                        tt_medium: "clips_web",
                        tt_content: "curator_name"
                    });
                    return o.createElement(k._6, {
                        ellipsis: this.props.ellipsis
                    }, e.champBadge && e.champBadge.id && o.createElement(k._6, {
                        margin: {
                            right: .5
                        },
                        display: k.P.InlineBlock
                    }, o.createElement(L.a, {
                        pageType: u.PageviewLocation.ClipsViewing
                    })), o.createElement(k._0, {
                        display: k.P.Inline
                    }, o.createElement(k.O, {
                        fontSize: this.props.fontSize ? this.props.fontSize : k.T.Size5
                    }, Object(l.d)("Clipped by {curatorName}", {
                        curatorName: o.createElement("a", {
                            href: t,
                            target: "_blank"
                        }, e.curator.displayName)
                    }, "ClipsCurator"))))
                }, t.prototype.reportInteractive = function() {
                    this.props.data.clip && this.props.data.clip.curator && this.props.latencyTracking.reportInteractive()
                }, t.prototype.renderPlaceholders = function() {
                    return o.createElement(k.e, {
                        type: k.i.FadeIn,
                        duration: k.g.Long,
                        delay: k.f.Medium,
                        enabled: !0
                    }, o.createElement(k.O, {
                        fontSize: this.props.fontSize ? this.props.fontSize : k.T.Size5
                    }, o.createElement(k._12, {
                        lineCount: 1,
                        width: 80
                    })))
                }, t = a.__decorate([Object(p.d)("ClipsCurator"), Object(m.a)(U)], t)
            }(o.Component),
            B = n("0Kuu"),
            V = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.reportInteractive()
                }, t.prototype.render = function() {
                    return this.props.data.clip ? o.createElement(k.O, {
                        fontSize: this.props.fontSize ? this.props.fontSize : k.T.Size3,
                        type: k._43.Span,
                        lineHeight: k._7.Heading,
                        ellipsis: this.props.ellipsis
                    }, this.props.data.clip.title) : o.createElement(k._6, null, this.renderPlaceholders())
                }, t.prototype.reportInteractive = function() {
                    this.props.data.clip && this.props.latencyTracking.reportInteractive()
                }, t.prototype.renderPlaceholders = function() {
                    return o.createElement(k.e, {
                        type: k.i.FadeIn,
                        duration: k.g.Long,
                        delay: k.f.Short,
                        enabled: !0
                    }, o.createElement(k.O, {
                        fontSize: this.props.fontSize ? this.props.fontSize : k.T.Size3
                    }, o.createElement(k._12, {
                        lineCount: 1,
                        width: 100
                    })))
                }, t = a.__decorate([Object(p.d)("ClipsTitle"), Object(m.a)(B)], t)
            }(o.Component),
            z = n("0CQq"),
            W = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.reportInteractive()
                }, t.prototype.render = function() {
                    if (!this.props.data.clip) return o.createElement(k._6, null, this.renderPlaceholders());
                    var e = this.props.padding && this.props.padding.bottom,
                        t = void 0 === e ? .5 : e;
                    return o.createElement(k._6, {
                        display: k.P.Flex,
                        alignItems: k.c.Center,
                        padding: {
                            bottom: t
                        }
                    }, !this.props.hideSymbol && o.createElement(k._6, {
                        margin: {
                            right: .5
                        },
                        display: k.P.Flex,
                        alignItems: k.c.Center
                    }, o.createElement(k._19, {
                        asset: k._20.GlyphViews,
                        type: k._21.Brand
                    })), o.createElement(k.O, {
                        bold: !0,
                        type: k._43.Span,
                        fontSize: this.props.fontSize ? this.props.fontSize : k.T.Size5
                    }, Object(l.d)("{views} views", {
                        views: Object(l.e)(this.props.data.clip.viewCount)
                    }, "ClipsViewCount")))
                }, t.prototype.reportInteractive = function() {
                    this.props.data.clip && this.props.latencyTracking.reportInteractive()
                }, t.prototype.renderPlaceholders = function() {
                    return o.createElement(k.e, {
                        type: k.i.FadeIn,
                        duration: k.g.Long,
                        enabled: !0
                    }, o.createElement(k.O, {
                        fontSize: this.props.fontSize ? this.props.fontSize : k.T.Size5
                    }, o.createElement(k._12, {
                        lineCount: 1,
                        width: 80
                    })))
                }, t = a.__decorate([Object(p.d)("ClipsViewCount"), Object(m.a)(z)], t)
            }(o.Component),
            q = n("QIXk"),
            H = n("E5Ip"),
            G = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onFinishedEditing = function() {
                        t.props.editTitleToggle()
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return this.props.data.clip ? o.createElement(k._6, {
                        fullWidth: !0,
                        className: "clips-view-title-edit"
                    }, o.createElement(q.a, {
                        clipId: this.props.data.clip.id,
                        clipSlug: this.props.slug,
                        clipTitle: this.props.data.clip.title,
                        clipBroadcasterId: this.props.data.clip.broadcaster ? Number(this.props.data.clip.broadcaster.id) : 0,
                        location: u.PageviewLocation.ClipsViewing,
                        onCancel: this.onFinishedEditing,
                        onSuccess: this.onFinishedEditing
                    })) : o.createElement(k._6, null)
                }, t = a.__decorate([Object(m.a)(H)], t)
            }(o.Component),
            $ = n("mmqR"),
            K = (n("NjaO"), {
                isChatAutoScrolling: !0,
                isChatContentCollapsed: !1,
                isEditingTitle: !1
            }),
            Q = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = K, t.scrollPosition = 0, t.renderClipTitle = function() {
                        var e = t.props.data.clip,
                            n = e && e.curator && e.curator.login,
                            i = t.props.slug;
                        if (t.state.isEditingTitle) return o.createElement(G, {
                            slug: i,
                            editTitleToggle: t.editTitleToggle
                        });
                        var a = o.createElement(k._6, {
                            alignItems: k.c.Center,
                            display: k.P.Flex,
                            flexDirection: k.R.Row,
                            justifyContent: k._5.Start,
                            margin: {
                                y: 1
                            },
                            ellipsis: !0
                        }, t.renderCreatedAt(), o.createElement(P, {
                            slug: i,
                            ellipsis: !0
                        }));
                        return t.props.userLogin !== n ? o.createElement(k._6, null, o.createElement(V, {
                            slug: i
                        }), a) : o.createElement(k._6, null, o.createElement("div", {
                            className: "clips-chat__edit",
                            onClick: t.editTitleToggle,
                            "data-test-selector": "clips-chat-card-edit"
                        }, o.createElement(V, {
                            slug: i
                        }), o.createElement(k._19, {
                            asset: k._20.Edit
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
                        t.state.isEditingTitle ? Object(R.g)(R.b.titleEdit) : Object(R.e)(R.b.titleEdit), t.setState(function(e) {
                            return {
                                isEditingTitle: !e.isEditingTitle
                            }
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    e.slug !== this.props.slug && (this.scrollPosition = 0, this.scrollableAreaEl.scrollTo(0, 0), this.setState(K))
                }, t.prototype.componentDidMount = function() {
                    this.addScrollableAreaEventListener()
                }, t.prototype.render = function() {
                    var e = this.props.slug;
                    return o.createElement(k._6, {
                        display: k.P.Flex,
                        flexDirection: k.R.Column,
                        position: k._13.Relative,
                        flexGrow: 1
                    }, o.createElement(k._6, {
                        position: k._13.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        attachRight: !0,
                        attachBottom: !0
                    }, this.state.isChatContentCollapsed && o.createElement(ce, {
                        slug: e
                    }), o.createElement(M.b, {
                        className: "clips-chat",
                        contentClassName: "clips-chat__content",
                        contentRef: this.setScrollableAreaEl,
                        suppressScrollX: !0
                    }, o.createElement(k._6, {
                        padding: {
                            x: 1
                        },
                        display: k.P.Flex,
                        flexDirection: k.R.Column,
                        fullWidth: !0
                    }, o.createElement(k._6, {
                        className: "clips-chat-info",
                        flexShrink: 1,
                        flexGrow: 1,
                        display: k.P.Flex,
                        alignItems: k.c.Start,
                        justifyContent: k._5.Center,
                        flexDirection: k.R.Column,
                        margin: {
                            top: 1
                        },
                        breakpointLarge: {
                            margin: {
                                y: 2
                            }
                        },
                        refDelegate: this.setChatContentRef
                    }, o.createElement(W, {
                        slug: e
                    }), this.renderClipTitle()), o.createElement(se, {
                        autoScrollChatToBottom: this.autoScrollChatToBottom,
                        videoOffsetSeconds: this.props.data.clip ? this.props.data.clip.videoOffsetSeconds : null,
                        slug: e
                    }), this.renderMoreChatButton()))))
                }, t.prototype.renderMoreChatButton = function() {
                    return !this.props.data.clip || this.props.data.clip && !this.props.data.clip.video || this.state.isChatAutoScrolling ? null : o.createElement(k._6, {
                        alignItems: k.c.Center,
                        attachBottom: !0,
                        attachLeft: !0,
                        display: k.P.Flex,
                        flexDirection: k.R.Column,
                        position: k._13.Absolute,
                        fullWidth: !0
                    }, o.createElement(k.u, {
                        size: k.y.Small,
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
                }, t.prototype.renderCreatedAt = function() {
                    var e = this.props.data.clip,
                        t = "";
                    if (!e) return null;
                    try {
                        var n = new Date(e && e.createdAt.replace(/(Z)/i, "")),
                            i = new Date(Date.UTC(n.getFullYear(), n.getMonth(), n.getDate(), n.getHours(), n.getMinutes(), n.getSeconds(), n.getMilliseconds()));
                        t = Object(l.g)(i)
                    } catch (e) {
                        t = Object(l.d)("N/A", "ClipsInfoCard")
                    }
                    return o.createElement(k._29, {
                        display: k.P.Flex,
                        fontSize: k.T.Size5
                    }, o.createElement(k.O, {
                        type: k._43.Span
                    }, t), o.createElement(k._6, {
                        margin: {
                            x: .5
                        }
                    }, "•"))
                }, Object.defineProperty(t.prototype, "isChatContentCollapsed", {
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
                }), t = a.__decorate([Object(m.a)($), Object(p.d)("ClipsChatCard", {
                    autoReportInteractive: !0
                })], t)
            }(o.Component);
        var J = Object(j.b)(function(e) {
                var t = Object(A.c)(e);
                return {
                    userLogin: t && t.login
                }
            })(Q),
            Y = n("3T7g"),
            X = n("+V/3"),
            Z = n("8RKZ"),
            ee = (n("dJGa"), function(e) {
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
                    return o.createElement(k._6, {
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(k.e, {
                        type: k.i.SlideInBottom,
                        duration: k.g.Short,
                        enabled: !0
                    }, this.renderUserBadges(t.filter(function(e) {
                        return !!e
                    })), this.renderUserLink({
                        chatColor: i,
                        displayName: a,
                        login: r
                    }), o.createElement(k._6, {
                        display: k.P.InlineBlock,
                        margin: {
                            right: .5
                        }
                    }, ":"), this.renderFragments(e.message.fragments)))
                }, t.prototype.renderUserBadges = function(e) {
                    var t = this.props.video && this.props.video.owner.broadcastBadges.filter(function(e) {
                        return e.clickAction === X.b
                    }) || [];
                    return this.mergeSubscriberBadgeUrls(e, t).map(this.renderUserBadge)
                }, t.prototype.renderUserBadge = function(e, t) {
                    return o.createElement(Y.a, {
                        badge: e,
                        key: t
                    })
                }, t.prototype.mergeSubscriberBadgeUrls = function(e, t) {
                    var n = this;
                    return e.map(function(e) {
                        var i = n.props.channelName,
                            a = e.clickAction === X.b,
                            r = t.filter(function(t) {
                                return t.version === e.version
                            })[0];
                        if (a && r) {
                            var o = r.image1x,
                                l = r.image2x,
                                s = r.image4x;
                            return Object.assign({}, e, {
                                channelName: i,
                                image1x: o,
                                image2x: l,
                                image4x: s
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
                        href: Object(f.d)(i),
                        style: {
                            color: t
                        }
                    }, o.createElement(k.O, {
                        type: k._43.Span,
                        fontSize: k.T.Size5,
                        bold: !0
                    }, n))
                }, t.prototype.renderFragments = function(e) {
                    var t = this;
                    return e.map(function(e, n) {
                        var i = e.emote,
                            a = e.text;
                        return o.createElement(k._6, {
                            display: k.P.Inline,
                            key: n
                        }, i ? t.renderFragmentEmote(i, a) : t.renderFragmentText(a))
                    })
                }, t.prototype.renderFragmentEmote = function(e, t) {
                    var n = e.emoteID;
                    return o.createElement(Z.a, {
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
                    return o.createElement(k.O, {
                        type: k._43.Span,
                        fontSize: k.T.Size5,
                        color: k.J.Alt
                    }, e)
                }, t
            }(o.Component)),
            te = n("oIkB"),
            ne = n("rqhk"),
            ie = n("YJNl"),
            ae = "";

        function re(e) {
            return e && e.clip && e.clip.video && e.clip.video.comments && e.clip.video.comments.edges || []
        }

        function oe(e) {
            var t = e[Math.max(e.length - 1, 0)];
            return t || {
                node: {
                    id: ae,
                    contentOffsetSeconds: 1 / 0
                },
                cursor: null
            }
        }
        var le = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.prevCommentId = ae, t.filterChatLines = function(e) {
                        var n = t.props.videoOffsetSeconds,
                            i = n + Number(t.props.playerConnection.playerProps.currentTime);
                        return e.node.contentOffsetSeconds >= n && e.node.contentOffsetSeconds <= i
                    }, t.maybeLoadMore = function(e) {
                        var n = t.props.data && t.props.data.clip,
                            i = n && n.video;
                        if (!i || !i.comments || t.props.data.error || !t.props.videoOffsetSeconds) return null;
                        var a = oe(i.comments.edges).node,
                            r = e.videoOffsetSeconds + Number(e.data.clip.durationSeconds);
                        a.contentOffsetSeconds <= r && t.props.loadMore()
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidUpdate = function() {
                    this.props.autoScrollChatToBottom();
                    var e = oe(re(this.props.data)).node.id;
                    this.prevCommentId !== e && (this.prevCommentId = e, this.maybeLoadMore(this.props))
                }, t.prototype.render = function() {
                    var e = this.props.data && this.props.data.clip,
                        t = e && e.video;
                    if (!t || !t.comments || this.props.data.error || !this.props.videoOffsetSeconds) return null;
                    var n = t.comments.edges.filter(this.filterChatLines);
                    return 0 === n.length ? null : o.createElement(k._6, {
                        className: "clips-chat-replay",
                        flexGrow: 1,
                        flexShrink: 0,
                        display: k.P.Flex,
                        flexDirection: k.R.Column,
                        alignItems: k.c.Start,
                        justifyContent: k._5.End,
                        margin: {
                            top: 1
                        }
                    }, n.map(function(n, i) {
                        var a = n.node;
                        return o.createElement(ee, {
                            channelName: e.broadcaster && e.broadcaster.displayName || void 0,
                            node: a,
                            video: t,
                            key: i
                        })
                    }))
                }, t
            }(o.Component),
            se = Object(ne.t)({
                playerId: function(e) {
                    return e.slug
                },
                requestedPlayerProps: ["currentTime"]
            })(Object(m.a)(ie, {
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
                            var t = re(e.data);
                            if (0 !== t.length) {
                                var n = oe(t).cursor;
                                return e.data.fetchMore({
                                    query: ie,
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
                                                        edges: Object(te.b)(re(e), re(n)),
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
            })(le)),
            ce = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return o.createElement(k._29, {
                        alignItems: k.c.Center,
                        attachTop: !0,
                        className: "clips-chat-title",
                        display: k.P.Flex,
                        flexDirection: k.R.Row,
                        fullWidth: !0,
                        position: k._13.Absolute,
                        justifyContent: k._5.Start,
                        background: k.m.Base,
                        borderBottom: !0,
                        zIndex: k._55.Default,
                        padding: 1
                    }, o.createElement(V, {
                        fontSize: k.T.Size5,
                        slug: this.props.slug,
                        ellipsis: !0
                    }), o.createElement(k._6, {
                        flexShrink: 0,
                        margin: {
                            x: .5
                        }
                    }, o.createElement(k.O, {
                        type: k._43.Span
                    }, "•")), o.createElement(k._6, {
                        flexShrink: 0
                    }, o.createElement(W, {
                        padding: {
                            bottom: 0
                        },
                        slug: this.props.slug,
                        fontSize: k.T.Size6,
                        hideSymbol: !0
                    })), o.createElement(k._6, {
                        margin: {
                            x: .5
                        }
                    }, o.createElement(k.O, {
                        type: k._43.Span
                    }, "•")), o.createElement(P, {
                        slug: this.props.slug,
                        fontSize: k.T.Size6,
                        ellipsis: !0
                    }))
                }, t
            }(o.Component),
            de = (n("tIhJ"), n("3Fw+")),
            ue = n("J4ib"),
            pe = n("dQ/z"),
            me = function(e) {
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
                    }, o.createElement(k.u, {
                        targetBlank: !0,
                        linkTo: Object(f.g)(this.props.data.clip.video.id, {
                            t: Object(de.a)(this.props.data.clip.video.offsetSeconds),
                            tt_medium: "clips_web",
                            tt_content: "full_vod_button"
                        })
                    }, Object(ue.d)("Watch Full Video", "ClipsFullVideoButton"))) : o.createElement(k.u, {
                        disabled: !0
                    }, Object(ue.d)("Full Video Unavailable", "ClipsFullVideoButton")), o.createElement(k._6, {
                        display: k.P.InlineBlock
                    }, e)) : o.createElement(k._6, null, this.renderPlaceholders());
                    var e
                }, t.prototype.pauseAutoplayTimer = function() {
                    Object(R.e)(R.b.fullVideoButton)
                }, t.prototype.restartAutoplayTimer = function() {
                    Object(R.g)(R.b.fullVideoButton)
                }, t.prototype.reportInteractive = function() {
                    this.props.data.clip && this.props.latencyTracking.reportInteractive()
                }, t.prototype.renderPlaceholders = function() {
                    return o.createElement(k.e, {
                        type: k.i.FadeIn,
                        duration: k.g.Long,
                        enabled: !0
                    }, o.createElement(k._12, {
                        width: 108,
                        height: 28
                    }))
                }, t = a.__decorate([Object(p.d)("ClipsFullVideoButton"), Object(m.a)(pe)], t)
            }(o.Component),
            he = n("2KeS"),
            ge = n("+xm8"),
            ve = n("f2i/"),
            fe = n("+Znq"),
            ke = n("287o"),
            be = function() {
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
            ye = n("HW6M"),
            _e = n("l21v"),
            Se = n("YhVV"),
            Ce = (n("HyIc"), function(e) {
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
                        var e = ye("clips-emote-button", {
                                "clips-emote-button--selected": n.props.hasReacted
                            }),
                            t = null;
                        return n.props.count && (t = o.createElement(k._6, {
                            className: "clips-emote-button__count",
                            margin: {
                                left: .5
                            }
                        }, o.createElement(k.O, {
                            align: k._53.Middle,
                            bold: n.props.hasReacted
                        }, n.props.count))), o.createElement(k._1, {
                            display: k.P.Flex,
                            alignItems: k.c.Center,
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
                        }, o.createElement(k._6, {
                            alignContent: k.b.Center,
                            className: "clips-emote-button__emote"
                        }, o.createElement(k.e, {
                            type: k.i.Bounce,
                            duration: k.g.Long,
                            enabled: n.state.isAnimating,
                            onAnimationEnd: n.handleAnimationEnd
                        }, o.createElement(k._1, {
                            fullWidth: !0
                        }, o.createElement("img", {
                            src: Object(_e.e)(n.props.emote.id, 1)
                        })))), t))
                    }, n.state = {
                        isAnimating: !1
                    }, n
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return this.props.hideTooltip ? this.renderEmote() : o.createElement(k._46, {
                        label: this.getToken(this.props.emote.token)
                    }, this.renderEmote())
                }, t.prototype.handleAnimationEnd = function() {
                    this && this.setState && this.setState({
                        isAnimating: !1
                    })
                }, t.prototype.getToken = function(e) {
                    var t = Se.a[this.props.emote.token];
                    return t && t.length > 0 ? t[0] : e
                }, t
            }(o.Component)),
            Ne = n("Ldv2");
        n("axV2");
        var Ee = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.state = {
                    emoteSearchText: ""
                }, t.renderEmoteSet = function(e, n) {
                    var i = ye({
                        "clips-emote-picker__emote-set": n < t.getEmoteSets().length - 1
                    });
                    return o.createElement(k._6, {
                        display: k.P.Flex,
                        flexDirection: k.R.Row,
                        flexWrap: k.S.Wrap,
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
                    return o.createElement(k._6, {
                        className: "clips-emote-picker__emote",
                        key: "emote-" + e.id
                    }, o.createElement(Ce, {
                        emote: e,
                        addClipReaction: t.props.addClipReaction,
                        removeClipReaction: t.props.removeClipReaction,
                        hasReacted: i,
                        hideBorders: !0
                    }))
                }, t.getEmoteSets = function(e) {
                    return void 0 === e && (e = t.props), e.emoteSetsData && e.emoteSetsData.emoteSets || []
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
                this.attemptReportInteractive(this.props)
            }, t.prototype.componentWillReceiveProps = function(e) {
                this.attemptReportInteractive(e)
            }, t.prototype.render = function() {
                return o.createElement(k._6, {
                    className: "clips-user-emotes"
                }, o.createElement(k._6, {
                    margin: {
                        left: 1,
                        right: 1,
                        bottom: 1
                    }
                }, o.createElement(k._2, {
                    type: k._3.Search,
                    onChange: this.onEmoteSearchTextChange,
                    placeholder: Object(l.d)("Search for Emotes", "ClipsReactionCarousel"),
                    spellCheck: !1
                })), o.createElement(k._6, {
                    display: k.P.Flex,
                    flexDirection: k.R.Column,
                    flexWrap: k.S.Wrap
                }, this.getEmoteSets().slice().reverse().map(this.renderEmoteSet)))
            }, t.prototype.attemptReportInteractive = function(e) {
                !this.getEmoteSets(e).length && e.isLoggedIn || this.props.latencyTracking.reportInteractive()
            }, t = a.__decorate([Object(Ne.a)(), Object(p.d)("ClipsUserEmotes")], t)
        }(o.Component);
        var Oe = Object(j.b)(function(e) {
                return {
                    isLoggedIn: Object(A.d)(e)
                }
            })(Ee),
            we = (n("dRtS"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        showHiddenReactions: !1
                    }, t.filterReaction = function(e) {
                        return e.count > 0
                    }, t.renderReaction = function(e) {
                        return o.createElement(k._6, {
                            margin: {
                                right: .5,
                                bottom: .5
                            },
                            key: "reaction-" + e.emote.id
                        }, o.createElement(Ce, {
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
                    return o.createElement(k._29, {
                        margin: {
                            bottom: .5,
                            left: 0
                        },
                        zIndex: k._55.Above,
                        className: "clips-emote-picker"
                    }, o.createElement(M.b, {
                        suppressScrollX: !0
                    }, o.createElement(k._6, {
                        className: "clips-emote-picker__content"
                    }, o.createElement(k._6, {
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(k._6, {
                        margin: {
                            left: 1
                        },
                        padding: {
                            y: .5
                        }
                    }, o.createElement(k.O, null, Object(l.d)("Reactions", "ClipsReactionCarousel"))), o.createElement(k._6, {
                        display: k.P.Flex,
                        flexDirection: k.R.Row,
                        flexWrap: k.S.Wrap,
                        padding: {
                            y: .5
                        },
                        margin: {
                            left: 1
                        }
                    }, t.filter(this.filterReaction).map(this.renderReaction), e && o.createElement(k._6, {
                        margin: {
                            bottom: .5
                        },
                        display: k.P.Flex,
                        alignItems: k.c.Center
                    }, o.createElement(k.v, {
                        ariaLabel: this.state.showHiddenReactions ? Object(l.d)("Show less reactions", "ClipsReactionCarousel") : Object(l.d)("Show more reactions", "ClipsReactionCarousel"),
                        onClick: this.toggleShowHiddenReactions,
                        "data-test-selector": "clips-emote-picker-toggler",
                        icon: this.state.showHiddenReactions ? k._20.AngleLeft : k._20.AngleRight
                    })))), o.createElement(Oe, {
                        addClipReaction: this.props.addClipReaction,
                        removeClipReaction: this.props.removeClipReaction,
                        sortedReactions: this.props.sortedReactions
                    }))))
                }, t = a.__decorate([Object(p.d)("ClipsEmotePicker", {
                    autoReportInteractive: !0
                })], t)
            }(o.Component)),
            Te = n("xwy4"),
            Fe = n("jFCw"),
            Re = n("hMIs"),
            Ie = (n("LepZ"), 3e3),
            xe = {
                count: 0,
                emote: {
                    id: "62835",
                    token: "bleedPurple"
                },
                self: {
                    hasReacted: !1
                }
            },
            De = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.state = {
                        activeReactionIndex: 0,
                        sortedReactions: []
                    }, n.hasInitializedSortedReactions = !1, n.renderPlusButton = function(e) {
                        var t = {
                            onClick: e
                        };
                        return o.createElement(k.v, a.__assign({
                            icon: k._20.Plus,
                            type: k.x.Hollow,
                            ariaLabel: Object(l.d)("Open Emote Picker", "ClipsReactionCarousel"),
                            "data-test-selector": "social-share-button",
                            size: k.w.Large,
                            blurAfterClick: !0
                        }, t))
                    }, n.renderEmotePickerBalloon = function() {
                        return o.createElement(fe.a, {
                            display: k.P.InlineBlock,
                            onToggle: n.handleAutoplayTimer,
                            ref: n.saveBalloonWrapperRef
                        }, n.renderPlusButton(), o.createElement(k.p, {
                            direction: k.q.Top,
                            noTail: !0
                        }, o.createElement(we, {
                            addClipReaction: n.addClipReaction,
                            removeClipReaction: n.removeClipReaction,
                            sortedReactions: n.state.sortedReactions
                        })))
                    }, n.renderLoginPromptBalloon = function() {
                        return o.createElement(k._46, {
                            direction: k._48.Top,
                            label: Object(l.d)("To react to this clip, log in or create a Twitch account.", "ClipsReactionCarousel"),
                            width: 200
                        }, n.renderPlusButton(n.props.login))
                    }, n.renderReaction = function(e, t) {
                        var i = t === n.state.activeReactionIndex;
                        return o.createElement(k._0, {
                            display: k.P.InlineBlock,
                            position: k._13.Absolute,
                            attachTop: !0,
                            attachLeft: !0,
                            key: e.emote.id
                        }, o.createElement("div", {
                            className: "clips-reaction " + (i ? "clips-reaction--active" : ""),
                            key: e.emote.id,
                            onMouseEnter: n.reactionCarouselTimer.stop,
                            onMouseLeave: n.reactionCarouselTimer.start
                        }, o.createElement(Ce, {
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
                        n.toggleReaction(ke.a.Add, e)
                    }, n.removeClipReaction = function(e) {
                        n.toggleReaction(ke.a.Remove, e)
                    }, n.toggleReaction = function(e, t) {
                        return n.props.isLoggedIn ? (n.updateReactionLocal(e, t), (e === ke.a.Add ? n.props.addClipReaction : n.props.removeClipReaction)(Object(te.a)({
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
                    }, n.reactionCarouselTimer = new be({
                        intervalMillis: Ie,
                        onInterval: n.showNextReaction
                    }), n
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.initializeSortedReactions(), this.reportInterative()
                }, t.prototype.componentDidUpdate = function() {
                    this.reportInterative()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.props.slug !== e.slug && (this.hasInitializedSortedReactions = !1), e.data.clip && e.data.clip.reactions ? this.hasInitializedSortedReactions || this.initializeSortedReactions(e) : this.setState({
                        sortedReactions: []
                    }), e.slug !== this.props.slug && this.balloonWrapperRef && this.balloonWrapperRef.state.showBalloon && this.balloonWrapperRef.toggleBalloon(!1)
                }, t.prototype.render = function() {
                    return this.props.data.clip ? o.createElement(k._6, {
                        display: k.P.Flex,
                        flexGrow: 1
                    }, o.createElement(k._6, {
                        zIndex: k._55.Default,
                        padding: {
                            y: 1
                        }
                    }, this.props.isLoggedIn ? this.renderEmotePickerBalloon() : this.renderLoginPromptBalloon()), o.createElement(k._6, {
                        padding: {
                            y: 1
                        },
                        overflow: k._9.Hidden,
                        flexGrow: 1
                    }, o.createElement(k._6, {
                        position: k._13.Relative
                    }, this.state.sortedReactions.map(this.renderReaction)))) : o.createElement(k._6, null, this.renderPlaceholders())
                }, t.prototype.initializeSortedReactions = function(e) {
                    if (void 0 === e && (e = this.props), e.data.clip && e.data.clip.reactions && e.slug === e.data.clip.slug) {
                        this.hasInitializedSortedReactions = !0;
                        var t = 0 === e.data.clip.reactions.length ? [xe] : e.data.clip.reactions.slice().sort(function(e, t) {
                            return t.count - e.count
                        });
                        this.setState({
                            sortedReactions: t
                        }), this.reactionCarouselTimer.start()
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
                            r = e === ke.a.Add,
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
                    e ? Object(R.g)(R.b.emotePicker) : Object(R.e)(R.b.emotePicker)
                }, t.prototype.renderPlaceholders = function() {
                    return o.createElement(k._6, {
                        padding: {
                            y: 1
                        },
                        display: k.P.Flex
                    }, o.createElement(k.e, {
                        type: k.i.FadeIn,
                        duration: k.g.Long,
                        enabled: !0
                    }, o.createElement(k._12, {
                        height: 36,
                        width: 36
                    })))
                }, t.prototype.reportInterative = function() {
                    this.props.data.clip && this.props.latencyTracking.reportInteractive()
                }, t = a.__decorate([Object(m.a)(Te, {
                    name: "addClipReaction"
                }), Object(m.a)(Re, {
                    name: "removeClipReaction"
                }), Object(m.a)(Fe), Object(p.d)("ClipsReactionCarousel")], t)
            }(o.Component);
        var je = Object(j.b)(function(e) {
                return {
                    isLoggedIn: Object(A.d)(e)
                }
            }, function(e) {
                return Object(he.b)({
                    login: function() {
                        return Object(ve.f)(ge.a.FeedReactionToggle)
                    }
                }, e)
            })(De),
            Ae = (n("mK8J"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.slug;
                    return o.createElement(k._6, {
                        className: "clips-sidebar",
                        display: k.P.Flex,
                        flexDirection: k.R.Column
                    }, o.createElement(k._29, {
                        borderBottom: !0
                    }, o.createElement(D, {
                        slug: e
                    })), o.createElement(k._6, {
                        className: "clips-sidebar-info",
                        display: k.P.Flex,
                        flexDirection: k.R.Column,
                        justifyContent: k._5.Around
                    }, o.createElement(J, {
                        slug: e
                    })), o.createElement(k._29, {
                        borderTop: !0
                    }, o.createElement(k._6, {
                        display: k.P.Flex,
                        justifyContent: k._5.Between,
                        alignItems: k.c.Center,
                        padding: {
                            x: 1
                        }
                    }, o.createElement(je, {
                        slug: e
                    }), o.createElement(me, {
                        slug: e
                    }))))
                }, t
            }(o.Component)),
            Me = Object(p.d)("ClipsSidebar", {
                autoReportInteractive: !0
            })(Ae),
            Le = n("V5M+"),
            Ue = n("xX9u"),
            Pe = n("8Wuk"),
            Be = n("yDzg"),
            Ve = n("sEID"),
            ze = n("46tX"),
            We = n("+8VM"),
            qe = n("C5rq"),
            He = n("QX2Z"),
            Ge = (n("u0B+"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        hasShared: !1,
                        shareMessage: ""
                    }, t.renderHasNotShared = function() {
                        var e = t.props.data.clip,
                            n = e && e.broadcaster && e.curator && e.game && o.createElement(k._29, {
                                padding: 1,
                                borderTop: !0,
                                borderBottom: !0,
                                display: k.P.Flex,
                                flexDirection: k.R.Row
                            }, o.createElement(k.D, {
                                aspect: k.k.Aspect16x9,
                                alt: Object(l.d)("Clip thumbnail image", "ClipsFeedShare"),
                                src: e.thumbnailURL,
                                size: k.E.Size8
                            }), o.createElement(k._6, {
                                display: k.P.Flex,
                                flexDirection: k.R.Column,
                                padding: {
                                    left: 1
                                }
                            }, o.createElement(k.O, {
                                color: k.J.Alt2,
                                fontSize: k.T.Size4
                            }, Object(l.d)("{broadcasterDisplayName} playing {gameDisplayName}", {
                                broadcasterDisplayName: e.broadcaster.displayName,
                                gameDisplayName: e.game.displayName
                            }, "ClipsFeedShare")), o.createElement(k.O, {
                                color: k.J.Alt2
                            }, Object(l.d)("clipped by {curatorName}", {
                                curatorName: e.curator.displayName
                            }, "ClipsFeedShare"))));
                        return o.createElement("div", null, o.createElement(k._29, {
                            display: k.P.Flex,
                            padding: 1
                        }, o.createElement(k.l, {
                            alt: Object(l.d)("User Avatar", "ClipsFeedShare"),
                            size: 40
                        }), o.createElement("textarea", {
                            className: "clips-feed-share-text-area",
                            value: t.state.shareMessage,
                            onChange: t.handleMessageEdit,
                            placeholder: Object(l.d)("Add a description...", "ClipsFeedShare")
                        })), n, o.createElement(k._29, {
                            padding: 1,
                            display: k.P.Flex,
                            justifyContent: k._5.End
                        }, t.getCloseButton(), o.createElement(k._6, {
                            padding: {
                                left: 1
                            },
                            display: k.P.InlineBlock
                        }, o.createElement(k.u, {
                            "data-test-selector": "clips-feed-share-submit",
                            type: k.A.Default,
                            onClick: t.createFeedPost
                        }, Object(l.d)("Share", "ClipsFeedShare")))))
                    }, t.renderHasShared = function() {
                        return o.createElement(k._6, null, o.createElement(k._29, {
                            padding: {
                                x: 1,
                                y: 2
                            },
                            color: k.J.Link
                        }, o.createElement(k.O, {
                            fontSize: k.T.Size4
                        }, Object(l.d)("Clip Shared", "ClipsFeedShare"))), o.createElement(k._29, {
                            padding: 1
                        }, o.createElement(k.O, {
                            fontSize: k.T.Size5
                        }, Object(l.d)("Your clip was successfully shared to your Channel Feed.", "ClipsFeedShare"), " ", o.createElement("a", {
                            href: Object(f.c)(t.props.login)
                        }, Object(l.d)("View it now", "ClipsFeedShare")))), o.createElement(k._29, {
                            padding: 1,
                            display: k.P.Flex,
                            justifyContent: k._5.End,
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
                    return e = this.props.data.clip ? this.state.hasShared ? this.renderHasShared() : this.renderHasNotShared() : o.createElement(k._6, null), o.createElement(k._6, {
                        className: "clips-feed-share"
                    }, o.createElement(We.a, {
                        closeOnBackdropClick: !0
                    }), o.createElement(k._29, {
                        background: k.m.Alt
                    }, e))
                }, t.prototype.getCloseButton = function() {
                    return o.createElement(k.u, {
                        "data-test-selector": "clips-feed-share-close",
                        type: k.A.Hollow,
                        onClick: this.props.closeModal
                    }, Object(l.d)("Close", "ClipsFeedShare"))
                }, t
            }(o.Component)),
            $e = Object(m.a)(qe)(Object(m.a)(He, {
                props: function(e) {
                    return {
                        createPost: function(t) {
                            if (e.mutate) return e.mutate(a.__assign({}, Object(te.a)({
                                channelID: e.ownProps.userId,
                                body: t,
                                embedURLs: [Object(f.b)(e.ownProps.slug)],
                                postToTwitter: !1
                            })))
                        }
                    }
                }
            })(Object(p.d)("ClipsFeedShare")(Ge)));
        var Ke, Qe = Object(j.b)(function(e) {
                var t = Object(A.c)(e);
                return {
                    userId: t ? t.id : "",
                    login: t ? t.login : ""
                }
            }, function(e) {
                return Object(he.b)({
                    closeModal: Le.c
                }, e)
            })($e),
            Je = n("rCmJ"),
            Ye = n("2hJ3"),
            Xe = n("f6Cj");
        n("Jjeq");
        ! function(e) {
            e.ChannelFeed = "channel_feed"
        }(Ke || (Ke = {}));
        var Ze = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.getUrl = function() {
                        return t.props.url || window.location.href
                    }, t.onShareClick = function() {
                        t.props.onShareClick && t.props.onShareClick(t.props.type)
                    }, t.copyPageUrl = function() {
                        t.onShareClick(), Object(Ye.a)(t.getUrl())
                    }, t.renderIcon = function() {
                        var e = t.getAssetFromType();
                        return o.createElement(k._6, {
                            className: "clips-mobile-share-sheet__share-icon clips-social-button__icon " + t.addSocialClassModifier("clips-social-button__icon")
                        }, o.createElement(k._19, {
                            asset: e,
                            fill: !0
                        }))
                    }, t.isLink = function() {
                        return t.props.type !== Pe.b.Copy && t.props.type !== Ke.ChannelFeed
                    }, t.getAssetFromType = function() {
                        switch (t.props.type) {
                            case Pe.b.Twitter:
                                return k._20.Twitter;
                            case Pe.b.Facebook:
                                return k._20.Facebook;
                            case Pe.b.VKontakte:
                                return k._20.VKontakte;
                            case Pe.b.Reddit:
                                return k._20.Reddit;
                            case Pe.b.Copy:
                                return k._20.Copy;
                            case Ke.ChannelFeed:
                                return k._20.LogoGlitch;
                            default:
                                return k._20.Copy
                        }
                    }, t.getLabelFromType = function() {
                        switch (t.props.type) {
                            case Pe.b.Twitter:
                                return Object(l.d)("Twitter", "ClipsSocialShare");
                            case Pe.b.Facebook:
                                return Object(l.d)("Facebook", "ClipsSocialShare");
                            case Pe.b.VKontakte:
                                return Object(l.d)("VK", "ClipsSocialShare");
                            case Pe.b.Reddit:
                                return Object(l.d)("Reddit", "ClipsSocialShare");
                            case Pe.b.Copy:
                                return Object(l.d)("Copy", "ClipsSocialShare");
                            case Ke.ChannelFeed:
                                return Object(l.d)("Pulse", "ClipsSocialShare");
                            default:
                                return ""
                        }
                    }, t.addSocialClassModifier = function(e) {
                        switch (t.props.type) {
                            case Pe.b.Twitter:
                                return e + "--twitter";
                            case Pe.b.Reddit:
                                return e + "--reddit";
                            case Pe.b.Facebook:
                                return e + "--facebook";
                            case Pe.b.VKontakte:
                                return e + "--vkontakte";
                            case Pe.b.Copy:
                                return e + "--copy";
                            case Ke.ChannelFeed:
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
                            case Pe.b.Reddit:
                                return Object(Xe.b)(a, r);
                            case Pe.b.VKontakte:
                                return Object(Xe.d)(a);
                            case Pe.b.Facebook:
                                return Object(Xe.a)(a);
                            case Pe.b.Twitter:
                                return Object(Xe.c)(a, r);
                            default:
                                return ""
                        }
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = o.createElement(k._6, {
                        className: "clips-mobile-share-sheet__row",
                        display: k.P.Flex,
                        alignItems: k.c.Center,
                        key: this.props.type,
                        margin: {
                            bottom: 1,
                            x: 2
                        }
                    }, this.renderIcon(), o.createElement(k._29, {
                        margin: {
                            left: 1
                        }
                    }, o.createElement(k.O, {
                        type: k._43.Span
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
            et = function(e) {
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
                        }), e === Pe.b.Copy && (t.setState({
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
                    }, t.onClickOut = function() {
                        t.setState({
                            isModalOpen: !1
                        })
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
                    return o.createElement(k._6, {
                        display: k.P.Flex,
                        justifyContent: k._5.End,
                        alignItems: k.c.Center,
                        margin: {
                            top: 1,
                            bottom: 1
                        }
                    }, o.createElement(k.u, {
                        type: k.A.Hollow,
                        onClick: this.onToggleShareButton,
                        "data-test-selector": "social-share-mobile-button"
                    }, t), this.state.isModalOpen && o.createElement(k._29, {
                        position: k._13.Fixed,
                        background: k.m.Overlay,
                        zIndex: k._55.Above,
                        attachLeft: !0,
                        attachTop: !0,
                        fullHeight: !0,
                        fullWidth: !0
                    }, o.createElement(Je.a, {
                        onClickOut: this.onClickOut
                    }, o.createElement(k._6, {
                        position: k._13.Absolute,
                        attachLeft: !0,
                        attachRight: !0,
                        attachBottom: !0,
                        className: "clips-mobile-share-sheet",
                        display: k.P.Flex,
                        flexDirection: k.R.Column,
                        zIndex: k._55.Above,
                        "data-test-selector": "social-share-mobile-menu-root"
                    }, o.createElement(k.e, {
                        type: k.i.SlideInBottom,
                        enabled: this.state.isModalOpen
                    }, o.createElement(k._29, {
                        background: k.m.Base,
                        elevation: 3,
                        padding: {
                            bottom: 2
                        }
                    }, o.createElement(k._29, {
                        className: "clips-mobile-share-sheet__title",
                        display: k.P.Flex,
                        flexDirection: k.R.Row,
                        justifyContent: k._5.Between,
                        alignItems: k.c.Center,
                        margin: {
                            bottom: 2
                        },
                        padding: {
                            right: 1,
                            left: 2
                        },
                        borderBottom: !0
                    }, o.createElement(k.O, {
                        bold: !0,
                        color: k.J.Alt,
                        type: k._43.Span,
                        fontSize: k.T.Size6,
                        "data-test-selector": "social-share-mobile-menu-title"
                    }, t), o.createElement(k.v, {
                        "data-test-selector": "social-share-mobile-menu-close",
                        icon: k._20.Close,
                        ariaLabel: "Close Share",
                        size: k.w.Large,
                        onClick: this.onToggleShareButton
                    })), o.createElement(k._6, null, o.createElement(Ze, {
                        key: Ke.ChannelFeed,
                        type: Ke.ChannelFeed,
                        onShareClick: this.onOpenFeedShare
                    }), Ve.b.map(function(t) {
                        return o.createElement(Ze, {
                            key: t.type,
                            type: t.type,
                            text: e.props.clip.title,
                            url: Object(Be.a)(e.props.clip.url, t.params),
                            onShareClick: e.onShareClick
                        })
                    }))))))), this.state.isCopiedModalOpen && o.createElement(k._6, {
                        fullWidth: !0,
                        attachLeft: !0,
                        attachBottom: !0,
                        className: "clips-mobile-share-sheet",
                        position: k._13.Fixed,
                        zIndex: k._55.Above
                    }, o.createElement(k.e, {
                        type: k.i.SlideInBottom,
                        duration: k.g.Short,
                        enabled: this.state.isCopiedModalOpen
                    }, o.createElement(k._29, {
                        padding: {
                            x: 1,
                            y: 1
                        },
                        background: k.m.Base,
                        elevation: 3,
                        borderTop: !0,
                        display: k.P.Flex,
                        alignItems: k.c.Center
                    }, o.createElement(k._6, {
                        margin: {
                            right: .5
                        }
                    }, o.createElement(k.e, {
                        type: k.i.BounceIn,
                        duration: k.g.Medium,
                        delay: k.f.Short,
                        enabled: this.state.isCopiedModalOpen
                    }, o.createElement(k._19, {
                        type: k._21.Success,
                        asset: k._20.Check
                    }))), o.createElement(k.O, {
                        type: k._43.Span,
                        fontSize: k.T.Size4,
                        bold: !0
                    }, n)))))
                }, t
            }(o.Component),
            tt = n("bnNq"),
            nt = (n("twHn"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.openFeedShare = function() {
                        t.props.isLoggedIn ? t.props.showModal(Qe, {
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
                    if (!this.props.data.clip && !Object(ze.d)(window.navigator.userAgent)) return o.createElement(k._6, null, this.renderPlaceholders());
                    if (!this.props.data.clip && Object(ze.d)(window.navigator.userAgent)) return o.createElement(k._6, null, this.renderMobilePlaceholders());
                    if (Object(ze.d)(window.navigator.userAgent)) return o.createElement(et, {
                        clip: this.props.data.clip,
                        openFeedShare: this.openFeedShare
                    });
                    var t = Object(l.d)("More", "ClipsSocialShare");
                    return o.createElement(k._0, {
                        display: k.P.Flex,
                        justifyContent: k._5.End,
                        alignItems: k.c.Center,
                        margin: {
                            y: 1
                        }
                    }, o.createElement("div", {
                        onClick: this.cancelAutoplayTimer
                    }, Ve.b.map(function(t) {
                        return o.createElement(k._6, {
                            display: k.P.InlineBlock,
                            key: t.type,
                            margin: {
                                right: 1
                            }
                        }, o.createElement(Pe.a, {
                            key: t.type,
                            type: t.type,
                            text: e.props.data.clip.title,
                            url: Object(Be.a)(e.props.data.clip.url, t.params)
                        }))
                    }), o.createElement(k._29, {
                        margin: {
                            right: 1
                        }
                    }, o.createElement("div", {
                        className: "social-button"
                    }, o.createElement(k._46, {
                        label: "Twitch",
                        direction: k._48.Top
                    }, o.createElement("button", {
                        onClick: this.openFeedShare,
                        className: "social-button__link social-button__link--twitch",
                        "data-test-selector": "social-share-button-twitch"
                    }, o.createElement(k._6, {
                        className: "social-button__icon social-button__icon--twitch",
                        display: k.P.Flex,
                        alignItems: k.c.Center,
                        justifyContent: k._5.Center
                    }, o.createElement(k._19, {
                        asset: k._20.LogoGlitch,
                        width: 22,
                        height: 22
                    })))))), o.createElement(k._6, {
                        display: k.P.InlineBlock,
                        position: k._13.Relative
                    }, o.createElement(fe.a, null, o.createElement(k.u, {
                        type: k.A.Hollow,
                        ariaLabel: t,
                        "data-test-selector": "social-share-button"
                    }, t), o.createElement(k.p, {
                        direction: k.q.BottomRight,
                        noTail: !0
                    }, o.createElement(k._6, {
                        padding: 1
                    }, o.createElement(k.U, {
                        id: "social-share-link",
                        orientation: k.V.Vertical,
                        label: Object(l.d)("Link", "ClipsSocialShare"),
                        "data-test-selector": "social-share-link"
                    }, o.createElement(Ue.a, {
                        value: this.props.data.clip.url
                    })), o.createElement(k._6, {
                        padding: {
                            top: 1
                        }
                    }, o.createElement(k.U, {
                        id: "social-share-embed-link",
                        orientation: k.V.Vertical,
                        label: Object(l.d)("Embed Code", "ClipsSocialShare")
                    }, o.createElement(Ue.a, {
                        value: this.props.data.clip.embedURL
                    })))))))))
                }, t.prototype.cancelAutoplayTimer = function() {
                    Object(R.d)(R.b.socialShare)
                }, t.prototype.reportInteractive = function() {
                    this.props.data.clip && this.props.latencyTracking.reportInteractive()
                }, t.prototype.renderPlaceholders = function() {
                    return o.createElement(k.e, {
                        type: k.i.FadeIn,
                        duration: k.g.Medium,
                        enabled: !0
                    }, o.createElement(k._6, {
                        margin: {
                            top: 1,
                            bottom: 1
                        },
                        display: k.P.Flex,
                        justifyContent: k._5.End
                    }, o.createElement(k._6, {
                        margin: {
                            left: 1
                        }
                    }, o.createElement(k._12, {
                        width: 30,
                        height: 30
                    })), o.createElement(k._6, {
                        margin: {
                            left: 1
                        }
                    }, o.createElement(k._12, {
                        width: 30,
                        height: 30
                    })), o.createElement(k._6, {
                        margin: {
                            left: 1
                        }
                    }, o.createElement(k._12, {
                        width: 30,
                        height: 30
                    })), o.createElement(k._6, {
                        margin: {
                            left: 1
                        }
                    }, o.createElement(k._12, {
                        width: 30,
                        height: 30
                    })), o.createElement(k._6, {
                        margin: {
                            left: 1
                        }
                    }, o.createElement(k._12, {
                        width: 30,
                        height: 30
                    })), o.createElement(k._6, {
                        margin: {
                            left: 1
                        }
                    }, o.createElement(k._12, {
                        width: 46,
                        height: 30
                    }))))
                }, t.prototype.renderMobilePlaceholders = function() {
                    return o.createElement(k._6, {
                        margin: {
                            y: 1
                        },
                        display: k.P.Flex,
                        justifyContent: k._5.End
                    }, o.createElement(k._6, null, o.createElement(k._12, {
                        width: 72,
                        height: 30
                    })))
                }, t = a.__decorate([Object(p.d)("ClipsSocialShare"), Object(m.a)(tt)], t)
            }(o.Component));
        var it = Object(j.b)(function(e) {
                return {
                    isLoggedIn: Object(A.d)(e)
                }
            }, function(e) {
                return Object(he.b)({
                    showModal: Le.d,
                    login: function() {
                        return Object(ve.f)(ge.a.FeedReactionToggle)
                    }
                }, e)
            })(nt),
            at = n("BhGt"),
            rt = n("vwd7"),
            ot = n("CIox"),
            lt = n("icZh"),
            st = function(e) {
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
            ct = 9,
            dt = (n("r+Hw"), function(e) {
                var t, n = e.autoplayClip && e.autoplayClip.broadcaster && e.autoplayClip.game && Object(l.d)("{broadcasterDisplayName} playing {gameDisplayName}", {
                    broadcasterDisplayName: e.autoplayClip.broadcaster.displayName,
                    gameDisplayName: e.autoplayClip.game.displayName
                }, "ClipsAutoplayView");
                return t = "canceled" === e.timerState ? o.createElement(k._29, {
                    margin: {
                        bottom: .5
                    }
                }, o.createElement(k.O, {
                    ellipsis: !0,
                    color: k.J.Overlay,
                    fontSize: k.T.Size6,
                    breakpointExtraSmall: {
                        fontSize: k.T.Size5
                    }
                }, Object(l.d)("Next Clip", "ClipsAutoplayView"))) : o.createElement(k._29, {
                    display: k.P.Flex,
                    justifyContent: k._5.Between,
                    flexDirection: k.R.Row,
                    alignItems: k.c.Center,
                    margin: {
                        bottom: .5
                    }
                }, o.createElement(k.O, {
                    ellipsis: !0,
                    color: k.J.Overlay,
                    fontSize: k.T.Size6,
                    breakpointExtraSmall: {
                        fontSize: k.T.Size5
                    }
                }, "running" === e.timerState ? Object(l.d)("{seconds, plural, one {Next Clip in {seconds} second} other {Next Clip in {seconds} seconds}}", {
                    seconds: e.countdownValue.toString()
                }, "ClipsAutoplayView") : Object(l.d)("Paused", "ClipsAutoplayView")), o.createElement(k.u, {
                    type: k.A.Hollow,
                    onClick: e.cancelTimer,
                    overlay: !0
                }, Object(l.d)("Cancel", "ClipsAutoplayView"))), o.createElement(k._6, {
                    className: "clips-autoplay",
                    position: k._13.Absolute,
                    fullWidth: !0,
                    fullHeight: !0,
                    display: k.P.Flex,
                    alignItems: k.c.Center,
                    justifyContent: k._5.Center,
                    zIndex: k._55.Above,
                    padding: {
                        x: 1
                    }
                }, o.createElement(k._6, {
                    className: "clips-autoplay__container",
                    fullWidth: !0,
                    padding: {
                        x: 2
                    }
                }, o.createElement(k.e, {
                    type: k.i.FadeIn,
                    delay: k.f.Medium,
                    enabled: !0
                }, t, o.createElement(k._6, {
                    className: "clips-autoplay__preview",
                    position: k._13.Relative
                }, o.createElement("div", {
                    onClick: function() {
                        e.transitionToNextClip(!1)
                    },
                    "data-test-selector": "clips-autoplay-view-transition",
                    ref: e.setAutoplayRef
                }, o.createElement(k._6, {
                    position: k._13.Relative
                }, o.createElement(k.j, {
                    ratio: k.k.Aspect16x9,
                    overflow: !1
                }, o.createElement(st, {
                    className: "clips-autoplay__image",
                    src: e.autoplayClip.thumbnailURL,
                    altText: Object(l.d)("clip image preview", "ClipsAutoplayView"),
                    altSrc: v
                })), "running" === e.timerState && o.createElement(k._6, {
                    position: k._13.Absolute,
                    attachBottom: !0,
                    fullWidth: !0
                }, o.createElement(k._16, {
                    countdown: ct,
                    size: k._17.Small
                }))), o.createElement(k._29, {
                    position: k._13.Absolute,
                    attachTop: !0,
                    attachLeft: !0,
                    fullHeight: !0,
                    fullWidth: !0,
                    zIndex: k._55.Above,
                    breakpointExtraSmall: {
                        display: k.P.Hide
                    }
                }), o.createElement(k._29, {
                    position: k._13.Absolute,
                    attachBottom: !0,
                    attachLeft: !0,
                    zIndex: k._55.Above,
                    padding: 1,
                    fullWidth: !0,
                    breakpointExtraSmall: {
                        position: k._13.Relative,
                        padding: 0,
                        margin: {
                            top: 1
                        }
                    }
                }, o.createElement(k.O, {
                    color: k.J.Overlay,
                    bold: !0,
                    ellipsis: !0,
                    fontSize: k.T.Size6,
                    breakpointExtraSmall: {
                        fontSize: k.T.Size5
                    }
                }, e.autoplayClip.title), o.createElement(k.O, {
                    color: k.J.OverlayAlt,
                    ellipsis: !0,
                    fontSize: k.T.Size6,
                    breakpointExtraSmall: {
                        fontSize: k.T.Size5
                    }
                }, n)))))))
            });

        function ut(e, t, n) {
            return {
                vod: e.video ? e.video.id : null,
                content_mode: "clip",
                content: g(n),
                medium: "clips",
                recommended_vod_id: t.id,
                recommended_vod_type: "clip"
            }
        }

        function pt(e, t, n) {
            _(u.SpadeEventType.PlayerRecShow, e.slug, a.__assign({}, ut(e, t, n), {
                type: "clip"
            }))
        }

        function mt(e, t, n) {
            _(u.SpadeEventType.PlayerShowFeatured, e.slug, a.__assign({}, ut(e, t, n), {
                type: "clip"
            }))
        }
        var ht = n("3yr7"),
            gt = 7,
            vt = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.state = {
                        countdownValue: ct,
                        timerState: "running",
                        autoplayClip: null,
                        autoplayClipCategory: null
                    }, n.autoplayTimerInfluencerState = R.c, n.hasSetAutoplayClip = !1, n.autoplayCount = 1, n.removeAutoplay = function() {
                        n.setState({
                            countdownValue: ct,
                            autoplayClip: null,
                            autoplayClipCategory: null
                        }), n.hasSetAutoplayClip = !1, n.countdownTimer.stop()
                    }, n.pauseAutoplayTimer = function() {
                        n.countdownTimer.stop(), n.setState({
                            timerState: "paused"
                        })
                    }, n.cancelAutoplayTimer = function() {
                        n.countdownTimer.stop(), n.setState({
                            timerState: "canceled"
                        })
                    }, n.onTimerUpdate = function() {
                        n.state.countdownValue > 0 ? n.setState(function(e) {
                            return {
                                countdownValue: e.countdownValue - 1
                            }
                        }) : (n.countdownTimer.stop(), n.transitionToNextClip(!0))
                    }, n.transitionToNextClip = function(e) {
                        var t = n.state,
                            i = t.autoplayClip,
                            r = t.autoplayClipCategory,
                            o = n.props.data.clip;
                        i && (o && r && e && function(e, t, n) {
                            _(u.SpadeEventType.PlayerRecAutoplay, e.slug, a.__assign({}, ut(e, t, n), {
                                recommended_vod_view: "featured"
                            }))
                        }(o, i, r), n.props.history.push("/" + i.slug), n.autoplayCount = e ? n.autoplayCount + 1 : 1, n.autoplayCount > gt ? n.cancelAutoplayTimer() : (n.removeAutoplay(), n.setState({
                            timerState: "running"
                        })))
                    }, n.onAutoplayInfluencerUpdate = function(e, t) {
                        if ("canceled" !== n.state.timerState)
                            if (e !== R.a.cancel) {
                                if (n.autoplayTimerInfluencerState = a.__assign({}, n.autoplayTimerInfluencerState, ((i = {})[t] = e === R.a.pause, i)), n.state.autoplayClip) {
                                    var i, r = n.autoplayTimerIsBlocked();
                                    "running" === n.state.timerState || r ? "running" === n.state.timerState && r && n.pauseAutoplayTimer() : n.showAutoplay()
                                }
                            } else n.cancelAutoplayTimer()
                    }, n.autoplayTimerIsBlocked = function() {
                        return "canceled" === n.state.timerState || Object.keys(n.autoplayTimerInfluencerState).some(function(e) {
                            return n.autoplayTimerInfluencerState[e]
                        })
                    }, n.setAutoplayClip = function(e) {
                        if (!e.data.clip || n.hasSetAutoplayClip) return null;
                        n.hasSetAutoplayClip = !0;
                        for (var t = Object(lt.a)(), i = 0; i < h.length; i++) {
                            var a = e.data.clip.relatedClips[h[i]].find(function(e) {
                                return !t.includes(e.slug)
                            });
                            if (a) {
                                var r = h[i];
                                return pt(e.data.clip, a, r), mt(e.data.clip, a, r), void n.setState({
                                    autoplayClip: a,
                                    autoplayClipCategory: r
                                })
                            }
                        }
                    }, n.setAutoplayRef = function(e) {
                        n.autoplayRef = e
                    }, n.countdownTimer = new be({
                        onInterval: n.onTimerUpdate,
                        intervalMillis: 1e3
                    }), Object(R.f)(n.onAutoplayInfluencerUpdate), n
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.setUpContainerView()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    var t = "ended" === this.props.playerConnection.playerProps.playback,
                        n = "ended" === e.playerConnection.playerProps.playback;
                    !t && n ? this.showAutoplay() : t && !n && this.removeAutoplay(), this.props.data.clip && this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillUnmount = function() {
                    this.unregister()
                }, t.prototype.checkVisible = function(e) {
                    return a.__awaiter(this, void 0, void 0, function() {
                        var t;
                        return a.__generator(this, function(n) {
                            return this.autoplayRef && (t = this.autoplayRef.getBoundingClientRect(), e.top > t.top + t.height / 4 ? Object(R.e)(R.b.playerView) : Object(R.g)(R.b.playerView)), [2]
                        })
                    })
                }, t.prototype.render = function() {
                    return null === this.state.autoplayClip ? o.createElement(k._6, null) : o.createElement(dt, {
                        countdownValue: this.state.countdownValue,
                        timerState: this.state.timerState,
                        autoplayClip: this.state.autoplayClip,
                        cancelTimer: this.cancelAutoplayTimer,
                        transitionToNextClip: this.transitionToNextClip,
                        setAutoplayRef: this.setAutoplayRef
                    })
                }, t.prototype.showAutoplay = function() {
                    this.setAutoplayClip(this.props);
                    var e = {
                        countdownValue: ct,
                        timerState: this.state.timerState
                    };
                    this.autoplayTimerIsBlocked() || (e.timerState = "running", this.countdownTimer.start()), this.setState(e)
                }, t.prototype.setUpContainerView = function() {
                    var e = this.context.registerReceiver;
                    e ? this.unregister = e(this) : l.j.warn("<ClipsVideoIframeComponent /> initialized missing a <ScrollableArea /> provider")
                }, t.contextTypes = {
                    registerReceiver: r.func
                }, t
            }(o.Component),
            ft = Object(ot.f)(Object(m.a)(ht)(Object(p.d)("ClipsAutoplayContainer")(Object(ne.t)({
                playerId: function(e) {
                    return e.slug
                },
                requestedPlayerProps: ["playback"]
            })(vt)))),
            kt = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.playerConnection.playerProps.screenMode && this.props.playerConnection.playerProps.screenMode.isFullScreen;
                    return (Object(ze.d)(navigator.userAgent) || Object(ze.c)(navigator.userAgent)) && e ? null : o.createElement(ft, {
                        slug: this.props.slug
                    })
                }, t
            }(o.Component),
            bt = Object(ne.t)({
                playerId: function(e) {
                    return e.slug
                },
                requestedPlayerProps: ["screenMode"]
            })(Object(p.d)("ClipsAutoplay", {
                autoReportInteractive: !0
            })(kt)),
            yt = (n("+g5R"), n("RsNJ")),
            _t = function(e) {
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
                    this.props.slug !== e.slug && this.setState({
                        isShowingLiveCTA: !1
                    }), this.updateLiveVisibility(e)
                }, t.prototype.render = function() {
                    var e = this.props.data.clip;
                    if (this.state.isDismissed || !this.state.isShowingLiveCTA || this.props.playerConnection.playerProps.ui && this.props.playerConnection.playerProps.ui.isSettingsShown || "ended" === this.props.playerConnection.playerProps.playback || !(e && e.game && e.broadcaster && e.broadcaster.stream && e.broadcaster.stream.id)) return null;
                    var t = e.broadcaster,
                        n = e.game,
                        i = Object(f.c)(t.login);
                    return o.createElement(k._6, {
                        className: "watch-live-prompt",
                        position: k._13.Absolute,
                        zIndex: k._55.Above,
                        attachRight: !0
                    }, o.createElement(k.M, {
                        to: i,
                        targetBlank: !0
                    }, o.createElement(k.e, {
                        type: k.i.SlideInRight,
                        duration: k.g.Short,
                        enabled: !0
                    }, o.createElement(k._29, {
                        padding: 1,
                        elevation: 2,
                        background: k.m.Overlay
                    }, o.createElement(k._6, {
                        position: k._13.Relative,
                        display: k.P.Flex,
                        flexDirection: k.R.Row,
                        alignItems: k.c.Center
                    }, o.createElement(k._6, {
                        position: k._13.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        zIndex: k._55.Above
                    }, o.createElement(k._10, {
                        label: Object(l.d)("LIVE", "WatchLivePrompt"),
                        type: k._11.Live
                    })), o.createElement(k.B, {
                        row: !0
                    }, o.createElement(k.D, {
                        src: e.thumbnailURL,
                        alt: Object(l.d)("Clip Thumbnail", "ClipWatchLivePrompt"),
                        aspect: k.k.Aspect16x9,
                        size: k.E.Size6
                    }), o.createElement(k.C, null, o.createElement(k._6, {
                        className: "watch-live-prompt__copy",
                        padding: {
                            x: 1
                        }
                    }, o.createElement(k.O, {
                        type: k._43.H5,
                        color: k.J.Overlay,
                        lineHeight: k._7.Heading,
                        ellipsis: !0
                    }, Object(l.d)("Watch {displayName} Live", {
                        displayName: t.displayName
                    }, "WatchLivePrompt")), o.createElement(k.O, {
                        type: k._43.H6,
                        color: k.J.OverlayAlt,
                        lineHeight: k._7.Heading,
                        ellipsis: !0
                    }, Object(l.d)("playing {gameName}", {
                        gameName: n.displayName
                    }, "WatchLivePrompt"))))), o.createElement(k.v, {
                        ariaLabel: Object(l.d)("Dismiss watch live prompt", "WatchLivePrompt"),
                        icon: k._20.Close,
                        onClick: this.dismissWatchLivePrompt,
                        type: k.x.Default,
                        overlay: !0,
                        size: k.w.Large
                    }))))))
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
                }, t = a.__decorate([Object(m.a)(yt)], t)
            }(o.Component),
            St = Object(ne.t)({
                playerId: function(e) {
                    return e.slug
                },
                requestedPlayerProps: ["currentTime", "duration", "playback", "ui"]
            })(_t),
            Ct = (n("zU1d"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return o.createElement(k._0, {
                        position: k._13.Absolute,
                        fullHeight: !0,
                        fullWidth: !0
                    }, o.createElement("div", {
                        ref: this.props.setPlayerWrapperRef
                    }, o.createElement(k._29, {
                        className: "clips-video-overlay",
                        fullHeight: !0,
                        fullWidth: !0,
                        position: k._13.Absolute,
                        overflow: k._9.Hidden
                    }, o.createElement(bt, {
                        slug: this.props.slug
                    }), !Object(ze.d)(window.navigator.userAgent) && o.createElement(St, {
                        slug: this.props.slug
                    })), o.createElement(k._6, {
                        position: k._13.Absolute,
                        fullHeight: !0,
                        fullWidth: !0
                    }, this.props.children)))
                }, t
            }(o.Component)),
            Nt = n("sikP"),
            Et = n("oSFp"),
            Ot = n("mw/a"),
            wt = n("Ev5K"),
            Tt = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleModalOpened = function(e) {
                        return t.props.playerConnection.sendMessage(Object(ne.h)(e))
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    var t = this.props.playerConnection.playerProps.clipsModeration,
                        n = e.playerConnection.playerProps.clipsModeration;
                    if (!n || !t) return null;
                    if (!t.isClipsReportModalOpen && n.isClipsReportModalOpen) {
                        var i = this.props.data.clip && this.props.data.clip.broadcaster ? this.props.data.clip.broadcaster.id : "";
                        this.props.showModal(Et.a, {
                            title: Object(l.d)("Report this Clip", "ClipsViewModerationModals"),
                            reportContext: {
                                contentType: Ot.a.Clip,
                                contentID: this.props.slug,
                                targetUserID: i
                            },
                            onClose: this.props.closeModal
                        }), this.handleModalOpened("report")
                    }!t.isClipsDeleteModalOpen && n.isClipsDeleteModalOpen && (this.props.showModal(Nt.d, {
                        slug: this.props.slug,
                        onClose: this.props.closeModal
                    }), this.handleModalOpened("delete")), !t.isClipsDeleteAllModalOpen && n.isClipsDeleteAllModalOpen && (this.props.showModal(Nt.e, {
                        slug: this.props.slug,
                        onClose: this.props.closeModal
                    }), this.handleModalOpened("deleteAll"))
                }, t.prototype.render = function() {
                    return null
                }, t
            }(o.Component),
            Ft = Object(ne.t)({
                playerId: function(e) {
                    return e.slug
                },
                requestedPlayerProps: ["clipsModeration"]
            })(Object(m.a)(wt)(Object(p.d)("ClipsViewModerationModals", {
                autoReportInteractive: !0
            })(Tt)));
        var Rt = Object(j.b)(null, function(e) {
                return Object(he.b)({
                    showModal: Le.d,
                    closeModal: Le.c
                }, e)
            })(Ft),
            It = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.playerWrapperRef = null, t.hasSetAutoplay = !1, t.setPlayerWrapperRef = function(e) {
                        return t.playerWrapperRef = e
                    }, t.sendExitFullscreenMessage = function() {
                        t.props.playerConnection.sendMessage(Object(ne.j)())
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.hasSetAutoplay || "playing" !== this.props.playerConnection.playerProps.playback || (this.hasSetAutoplay = !0, this.props.playerConnection.sendMessage(Object(ne.k)(!0)));
                    var t = this.props.playerConnection.playerProps.ui,
                        n = e.playerConnection.playerProps.ui;
                    (t && t.isSettingsShown) !== (n && n.isSettingsShown) && (n && n.isSettingsShown ? Object(R.e)(R.b.playerMenu) : Object(R.g)(R.b.playerMenu));
                    var i = this.props.playerConnection.playerProps.screenMode,
                        a = e.playerConnection.playerProps.screenMode;
                    this.playerWrapperRef && (i && i.isFullScreen) !== (a && a.isFullScreen) && (at.videoEnabled(this.playerWrapperRef) ? a && a.isFullScreen ? at.request(this.playerWrapperRef, void 0, this.sendExitFullscreenMessage) : at.exit() : this.sendExitFullscreenMessage());
                    var r = this.props.playerConnection.playerProps.playSessionId,
                        o = e.playerConnection.playerProps.playSessionId;
                    r !== o && o && l.n.setVideoPlayerTrackingData({
                        playSessionID: o
                    })
                }, t.prototype.render = function() {
                    var e = this.props.slug;
                    return o.createElement(k._6, {
                        flexGrow: 1
                    }, o.createElement(Rt, {
                        slug: this.props.slug
                    }), o.createElement(k.j, {
                        ratio: k.k.Aspect16x9
                    }, o.createElement(Ct, {
                        slug: e,
                        setPlayerWrapperRef: this.setPlayerWrapperRef
                    }, o.createElement(rt.b, {
                        slug: e,
                        playerType: rt.a.Viewing
                    }))))
                }, t = a.__decorate([Object(ne.t)({
                    playerId: function(e) {
                        return e.slug
                    },
                    requestedPlayerProps: ["ui", "screenMode", "playSessionId", "playback"]
                }), Object(p.d)("ClipsVideoPlayer")], t)
            }(o.Component),
            xt = (n("IcDq"), function(e) {
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
                    }), this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.props.match.params.slug !== e.match.params.slug && this.context.scrollToTop()
                }, t.prototype.render = function() {
                    var e = this.props.match.params.slug;
                    return o.createElement(k._6, {
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
                    }, o.createElement(it, {
                        slug: e
                    }), o.createElement(k._29, {
                        background: k.m.Base,
                        display: k.P.Flex,
                        elevation: 3,
                        flexDirection: k.R.Column,
                        breakpointLarge: {
                            flexDirection: k.R.Row
                        }
                    }, o.createElement(It, {
                        slug: e
                    }), o.createElement(Me, {
                        slug: e
                    })), o.createElement(T, {
                        slug: e
                    }))
                }, t.contextTypes = {
                    scrollToTop: r.func
                }, t = a.__decorate([Object(p.d)("ClipsViewPage", {
                    destination: c.a.ClipsViewing
                }), Object(s.a)({
                    location: u.PageviewLocation.ClipsViewing
                })], t)
            }(o.Component));
        n.d(t, "ClipsView", function() {
            return xt
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
            c = 4 * s;
        var d, u = n("MApH");
        n.d(t, "a", function() {
                return d
            }), t.b = function(e) {
                var t = this;
                return Object(a.a)(u, {
                    props: function(n) {
                        return {
                            banUserMutation: function(a, d) {
                                return void 0 === d && (d = null), i.__awaiter(t, void 0, void 0, function() {
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
                                                            expiresIn: d && function(e) {
                                                                if (!e) return "0s";
                                                                var t = e,
                                                                    n = "";
                                                                if (t > c) {
                                                                    var i = Math.floor(t / c);
                                                                    t -= i * c, n += i + "mo"
                                                                }
                                                                if (t > s) {
                                                                    var a = Math.floor(t / s);
                                                                    t -= a * s, n += a + "w"
                                                                }
                                                                if (t > l) {
                                                                    var d = Math.floor(t / l);
                                                                    t -= d * l, n += d + "d"
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
                                                            }(d)
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
            }(d || (d = {}))
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
            return c
        }), n.d(t, "k", function() {
            return d
        }), n.d(t, "j", function() {
            return u
        }), n.d(t, "l", function() {
            return p
        }), n.d(t, "g", function() {
            return m
        }), n.d(t, "h", function() {
            return h
        }), n.d(t, "d", function() {
            return g
        }), n.d(t, "e", function() {
            return v
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
            c = 8e5,
            d = 1e4,
            u = 500,
            p = 1e3,
            m = "cheer",
            h = a.a.Purple,
            g = "FIRST_PARTY",
            v = "THIRD_PARTY",
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
            c = n("2BvQ"),
            d = n("xrVp"),
            u = n("YugT"),
            p = {
                Channel: "channel"
            };
        var m = n("vH/s"),
            h = n("CSlQ"),
            g = n("Odds"),
            v = n("VNvG"),
            f = (n("3ydF"), n("SUA7")),
            k = n("x4k6");
        n.d(t, "b", function() {
            return b
        }), n.d(t, "a", function() {
            return y
        });
        var b;
        ! function(e) {
            e[e.IconOnly = 0] = "IconOnly", e[e.TextOnly = 1] = "TextOnly", e[e.IconAndText = 2] = "IconAndText"
        }(b || (b = {}));
        var y = function(e) {
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
                            var n, a, o, l, s, p, m, h, g, v;
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
                                        if (!(h = r.n.getVideoPlayerTrackingData().vodID)) return [3, 10];
                                        i.label = 6;
                                    case 6:
                                        return i.trys.push([6, 8, , 9]), [4, r.o.apollo.client.query({
                                            query: c,
                                            variables: {
                                                id: h
                                            }
                                        })];
                                    case 7:
                                        return n = i.sent(), [3, 9];
                                    case 8:
                                        return g = i.sent(), r.j.error(g, "Failed to make query for VOd info in FollowEvent reporting.", {
                                            currentVODID: h
                                        }), [3, 9];
                                    case 9:
                                        (a = n && n.data && n.data.video) ? p = Object(d.a)(a.broadcastType): (p = null, r.j.error(new Error("GraphQL empty response"), "Query for video info in FollowEvent reporting return no data.", {
                                            currentVODID: h
                                        })), i.label = 10;
                                    case 10:
                                        return v = {
                                            channel: t.channelLogin,
                                            channel_id: t.channelID,
                                            channel_game: s,
                                            cta_visible: r.n.getVideoPlayerTrackingData().followCTAVisible,
                                            host_channel: t.hostChannelLogin,
                                            host_channel_id: t.hostChannelID,
                                            game: t.game,
                                            partner: o ? o.isPartner : null,
                                            src: t.src,
                                            vod_id: h,
                                            vod_type: p
                                        }, r.n.track(e, v), [2]
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
                        return a.createElement(g._12, {
                            width: 93,
                            height: 36
                        });
                    case g.y.Small:
                        return a.createElement(g._12, {
                            width: 66,
                            height: 24
                        });
                    default:
                        return a.createElement(g._12, {
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
                    icon: this.props.followUIType === b.TextOnly ? void 0 : g._20.Heart,
                    onClick: e,
                    size: this.props.size,
                    tabIndex: this.props.tabIndex
                }, Object(g._56)(this.props)), this.props.followUIType === b.IconOnly ? null : t)
            }, t.prototype.renderUnfollowButton = function() {
                var e = Object(r.d)("Unfollow", "FollowButton");
                return a.createElement(g.u, i.__assign({
                    ariaLabel: e,
                    blurAfterClick: this.props.blurAfterClick,
                    "data-a-target": "unfollow-button",
                    "data-test-selector": "unfollow-button",
                    icon: this.props.unfollowUIType === b.TextOnly ? void 0 : g._20.Heart,
                    statusAlertIcon: this.props.unfollowUIType === b.TextOnly ? void 0 : g._20.Unheart,
                    statusAlertText: this.props.unfollowUIType === b.IconOnly ? "" : e,
                    tabIndex: this.props.tabIndex,
                    size: this.props.size,
                    onClick: this.toggleFollowing
                }, Object(g._56)(this.props)), this.props.unfollowUIType === b.IconOnly ? null : Object(r.d)("Followed", "FollowButton"))
            }, t.prototype.renderUnfollowButtonWithDropdown = function() {
                var e = this.props.balloonDirection ? this.props.balloonDirection : g.q.BottomRight,
                    t = this.getFollowData(),
                    n = t && t.user ? t.user.displayName : "",
                    i = this.state.disableNotifications ? Object(r.d)("Opt in to notifications to receive updates on this channel's activity, including when they go live.", "FollowButton") : Object(r.d)("You will be notified on this channel's activity, including when they go live.", "FollowButton");
                return a.createElement(g._6, {
                    display: g.P.Flex,
                    className: "follow-btn",
                    "data-test-selector": "unfollow-button__dropdown"
                }, a.createElement(g._6, null, this.renderUnfollowButton()), a.createElement(o.a, {
                    display: g.P.InlineFlex,
                    openByDefault: this.state.showDropdown
                }, a.createElement("button", {
                    tabIndex: this.props.tabIndex,
                    "aria-label": Object(r.d)("Dropdown", "FollowButton"),
                    className: "follow-btn__dropdown-toggle",
                    "data-a-target": "follow-dropdown-toggle"
                }, a.createElement(g._6, {
                    justifyContent: g._5.Center,
                    display: g.P.Flex,
                    alignItems: g.c.Stretch,
                    fullHeight: !0
                }, a.createElement(g._19, {
                    asset: g._20.GlyphArrDown
                }))), a.createElement(g.p, {
                    size: g.r.Small,
                    direction: e,
                    "data-a-target": "follow-notifications-balloon"
                }, a.createElement(g._29, {
                    color: g.J.Base,
                    display: g.P.Flex,
                    flexWrap: g.S.Wrap,
                    padding: 1
                }, a.createElement(g._6, {
                    display: g.P.Flex,
                    margin: {
                        bottom: 1
                    }
                }, a.createElement(g.O, {
                    type: g._43.H6
                }, Object(r.d)("You are following {followingName}", {
                    followingName: n
                }, "FollowButton"))), a.createElement(g._6, {
                    display: g.P.Flex,
                    flexWrap: g.S.NoWrap,
                    padding: {
                        bottom: 1
                    }
                }, a.createElement(g._6, {
                    display: g.P.Flex,
                    padding: {
                        right: 2
                    }
                }, a.createElement("span", null, a.createElement(g.O, {
                    type: g._43.H6
                }, Object(r.d)("Notifications", "FollowButton")))), a.createElement(g._6, {
                    display: g.P.Flex,
                    flexShrink: 0
                }, a.createElement(g._45, {
                    onChange: this.toggleNotificationsEnabled,
                    checked: !this.state.disableNotifications,
                    "data-a-target": "notifications-toggle"
                }))), a.createElement(g._6, {
                    display: g.P.InlineFlex,
                    padding: {
                        bottom: 1
                    }
                }, a.createElement(g.O, {
                    type: g._43.Span,
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
            }), Object(l.a)(v, {
                name: "followUser"
            }), Object(l.a)(f, {
                name: "unfollowUser"
            }), Object(h.d)("FollowButton")], t)
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
                        if (n.props.srcSet.themed) e = r.createElement(l._0, {
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
                            for (var i = [], s = 0, c = Object.keys(n.props.srcSet.sources); s < c.length; s++) {
                                var d = c[s];
                                i.push(n.props.srcSet.sources[d] + " " + d)
                            }
                            e = r.createElement(l._0, {
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
                        return n.state.imageLoaded ? null : r.createElement(l._0, {
                            display: l.P.InlineBlock
                        }, r.createElement(l.O, {
                            type: l._43.Span,
                            className: "chat-image__placeholder",
                            align: l._53.Top
                        }, r.createElement(l._12, {
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
                    return e = this.state.isHovering && this.state.imageLoaded ? r.createElement(l._46, {
                        direction: this.props.tooltipDirection || l._48.Top,
                        label: this.props.alt,
                        display: l.P.Inline,
                        offsetY: "0.9rem",
                        "data-a-target": "emote-name"
                    }, this.renderPlaceholder(), this.renderImage(), this.props.cheerText) : r.createElement("span", {
                        "data-a-target": "emote-name"
                    }, this.renderPlaceholder(), this.renderImage(), this.props.cheerText), this.props.cheerText ? r.createElement(l.O, {
                        type: l._43.Span,
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
            c = n("Odds"),
            d = n("bdk8");
        n.n(d);
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
                    }, Object(c._56)(n.props)), n.renderIcon()) : r.createElement("button", a.__assign({
                        onClick: n.copyPageUrl,
                        onMouseLeave: n.clearIsCopiedStatus,
                        className: e
                    }, Object(c._56)(n.props)), n.renderIcon())
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
                    return r.createElement(c._6, {
                        className: "social-button__icon " + n.addSocialClassModifier("social-button__icon")
                    }, r.createElement(c._19, {
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
                            return c._20.Twitter;
                        case i.Facebook:
                            return c._20.Facebook;
                        case i.VKontakte:
                            return c._20.VKontakte;
                        case i.Reddit:
                            return c._20.Reddit;
                        case i.Copy:
                        default:
                            return c._20.Copy
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
                return r.createElement(c._6, {
                    className: "social-button"
                }, r.createElement(c._46, {
                    label: this.getTooltipFromType(),
                    direction: c._48.Top
                }, this.renderLink()))
            }, t
        }(r.Component)
    },
    A5Hr: function(e, t, n) {
        "use strict";
        var i, a = n("TToO"),
            r = n("GiK3"),
            o = n("RH2O"),
            l = n("2KeS"),
            s = n("6sO2"),
            c = n("7vx8"),
            d = n("u8SD"),
            u = n("Kxgf"),
            p = n("oIkB"),
            m = n("HM6l"),
            h = n("vH/s"),
            g = n("CSlQ"),
            v = n("Odds"),
            f = (n("Vr0l"), n("+ppV")),
            k = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        userBlocked: t.props.userBlocked || !1
                    }, t.renderBlock = function() {
                        return r.createElement(v.M, {
                            hoverUnderlineNone: !0,
                            onClick: t.handleBlock
                        }, r.createElement(v._6, {
                            display: v.P.Flex,
                            alignItems: v.c.Center
                        }, r.createElement(v._19, {
                            type: v._21.Brand,
                            asset: v._20.Ban
                        }), r.createElement(v._6, {
                            margin: {
                                left: .5
                            }
                        }, Object(s.d)("Block {user}", {
                            user: t.props.data.user.displayName
                        }, "ReportWizardBlockActions"))))
                    }, t.renderUnblock = function() {
                        return r.createElement(v._6, {
                            className: "reporting-wizard__block-actions",
                            display: v.P.Flex,
                            alignItems: v.c.Center
                        }, r.createElement(v._19, {
                            type: v._21.Success,
                            asset: v._20.FollowCheck
                        }), r.createElement(v._6, {
                            margin: {
                                right: 1
                            }
                        }, r.createElement(v.O, {
                            className: "block-user__success",
                            type: v._43.Span
                        }, Object(s.d)("{user} blocked", {
                            user: t.props.data.user.displayName
                        }, "ReportWizardBlockActions"))), r.createElement(v.M, {
                            hoverUnderlineNone: !0,
                            onClick: t.handleUnblock
                        }, r.createElement(v._6, {
                            margin: {
                                left: .5
                            }
                        }, Object(s.d)("Unblock", "ReportWizardBlockActions"))))
                    }, t.handleBlock = function() {
                        return a.__awaiter(t, void 0, void 0, function() {
                            return a.__generator(this, function(e) {
                                return this.props.onBlock(), this.setState({
                                    userBlocked: !0
                                }), [2]
                            })
                        })
                    }, t.handleUnblock = function() {
                        t.props.onUnblock(), t.setState({
                            userBlocked: !1
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = this.state.userBlocked ? this.renderUnblock() : this.renderBlock();
                    return r.createElement(v._29, {
                        borderTop: !0,
                        padding: {
                            y: 1
                        },
                        margin: {
                            top: 1
                        }
                    }, r.createElement(v._6, null, Object(s.d)("Would you like to block {user}?", {
                        user: this.props.data.user.displayName
                    }, "ReportWizardBlockActions")), r.createElement(v._6, {
                        margin: {
                            y: 2
                        }
                    }, Object(s.d)("By blocking this user, you will no longer see their messages in chat or whispers.", "ReportWizardBlockActions")), r.createElement(v._6, {
                        margin: {
                            top: 1
                        }
                    }, e))
                }, t
            }(r.Component),
            b = Object(c.a)(f, {
                options: function(e) {
                    return {
                        variables: {
                            userId: e.targetUserID
                        }
                    }
                }
            })(k);
        ! function(e) {
            e[e.Link = 0] = "Link", e[e.MultipleChoice = 1] = "MultipleChoice", e[e.Text = 2] = "Text"
        }(i || (i = {}));
        var y, _ = {
                generalFilter: function() {
                    return Object(s.d)("I think their content or behavior shouldn't be allowed on Twitch", "ReportModalWizard")
                },
                me: function() {
                    return Object(s.d)("Me", "ReportModalWizard")
                },
                someoneElse: function() {
                    return Object(s.d)("Someone else", "ReportModalWizard")
                }
            },
            S = {
                reportContent_chat: {
                    getTitle: function() {
                        return Object(s.d)("In a chat message", "ReportModalWizard")
                    },
                    value: "chat"
                },
                reportContent_profile: {
                    getTitle: function() {
                        return Object(s.d)("In the profile content, images, or emotes", "ReportModalWizard")
                    },
                    value: "profile"
                },
                reportContent_video: {
                    getTitle: function() {
                        return Object(s.d)("In a live stream, video, or clip", "ReportModalWizard")
                    },
                    value: "video"
                },
                reportContent_whisper: {
                    getTitle: function() {
                        return Object(s.d)("In a whisper (private message)", "ReportModalWizard")
                    },
                    value: "whisper"
                },
                reportContent_other: {
                    getTitle: function() {
                        return Object(s.d)("Somewhere else", "ReportModalWizard")
                    },
                    value: "other"
                },
                reportFilter_general_messaging: {
                    getTitle: _.generalFilter,
                    value: "general_messaging",
                    omitFromDescription: !0
                },
                reportFilter_general_profile: {
                    getTitle: _.generalFilter,
                    value: "general_profile",
                    omitFromDescription: !0
                },
                reportFilter_general_video: {
                    getTitle: _.generalFilter,
                    value: "general_video",
                    omitFromDescription: !0
                },
                reportFilter_spam: {
                    getTitle: function() {
                        return Object(s.d)("They're spamming or spreading malicious links", "ReportModalWizard")
                    },
                    value: "spam",
                    reportReason: "spam"
                },
                reportFilter_selfHarm: {
                    getTitle: function() {
                        return Object(s.d)("I'm concerned for their wellbeing", "ReportModalWizard")
                    },
                    value: "selfharm",
                    reportReason: "selfharm"
                },
                reportFilter_labeling: {
                    getTitle: function() {
                        return Object(s.d)("Their content is labeled incorrectly", "ReportModalWizard")
                    },
                    value: "incorrect label"
                },
                report_rude: {
                    getTitle: function() {
                        return Object(s.d)("They're being rude", "ReportModalWizard")
                    },
                    value: "rude"
                },
                report_violence: {
                    getTitle: function() {
                        return Object(s.d)("They're threatening someone", "ReportModalWizard")
                    },
                    value: "violence",
                    reportReason: "harm"
                },
                report_username: {
                    getTitle: function() {
                        return Object(s.d)("Their username is inappropriate", "ReportModalWizard")
                    },
                    value: "inappropriate username",
                    reportReason: "offensive_username"
                },
                report_abusive: {
                    getTitle: function() {
                        return Object(s.d)("They're being hateful, harassing, or abusive", "ReportModalWizard")
                    },
                    value: "abusive"
                },
                report_emptyStream: {
                    getTitle: function() {
                        return Object(s.d)("There's nobody on the stream", "ReportModalWizard")
                    },
                    value: "empty stream"
                },
                report_banEvasion: {
                    getTitle: function() {
                        return Object(s.d)("They're evading a ban", "ReportModalWizard")
                    },
                    value: "ban evasion"
                },
                report_impersonation: {
                    getTitle: function() {
                        return Object(s.d)("They're impersonating someone", "ReportModalWizard")
                    },
                    value: "impersonation",
                    reportReason: "impersonation"
                },
                report_underage: {
                    getTitle: function() {
                        return Object(s.d)("They're underage (12 or younger)", "ReportModalWizard")
                    },
                    value: "underage",
                    reportReason: "underaged"
                },
                report_ip: {
                    getTitle: function() {
                        return Object(s.d)("They're using intellectual property that's not theirs", "ReportModalWizard")
                    },
                    value: "intellectual property"
                },
                report_inappropriate_messages: {
                    getTitle: function() {
                        return Object(s.d)("Their messages contain inappropriate content", "ReportModalWizard")
                    },
                    value: "inappropriate content"
                },
                report_inappropriate_content: {
                    getTitle: function() {
                        return Object(s.d)("Their content is inappropriate", "ReportModalWizard")
                    },
                    value: "inappropriate content"
                },
                report_inappropriate_stream: {
                    getTitle: function() {
                        return Object(s.d)("They're streaming something inappropriate", "ReportModalWizard")
                    },
                    value: "inappropriate content"
                },
                report_hate_speech: {
                    getTitle: function() {
                        return Object(s.d)("They're using hate speech", "ReportModalWizard")
                    },
                    value: "hate speech",
                    reportReason: "hatespeech"
                },
                report_harassment: {
                    getTitle: function() {
                        return Object(s.d)("They're harassing or bullying a person or group", "ReportModalWizard")
                    },
                    value: "harassment",
                    reportReason: "harassment"
                },
                report_abusive_violence: {
                    getTitle: function() {
                        return Object(s.d)("They're threatening violence or physical harm", "ReportModalWizard")
                    },
                    value: "violence",
                    reportReason: "harm"
                },
                violence_end_label: {
                    getTitle: function() {
                        return Object(s.d)("Thank you for letting us know. If you feel you are in immediate danger, please contact your local law enforcement.\nTo protect yourself on Twitch, you may block the user to prevent them from contacting you in chat or whispers.", "ReportModalWizard")
                    },
                    type: i.Text
                },
                report_threat_me: {
                    getTitle: function() {
                        return Object(s.d)("At me", "ReportModalWizard")
                    },
                    value: "against me"
                },
                report_threat_person: {
                    getTitle: function() {
                        return Object(s.d)("At someone else", "ReportModalWizard")
                    },
                    value: "against another person"
                },
                report_threat_group: {
                    getTitle: function() {
                        return Object(s.d)("At a group of people", "ReportModalWizard")
                    },
                    value: "against group of people"
                },
                report_threat_selfharm: {
                    getTitle: function() {
                        return Object(s.d)("They're threatening self-harm", "ReportModalWizard")
                    },
                    value: "selfharm"
                },
                report_harassment_me: {
                    getTitle: _.me,
                    value: "harassing me"
                },
                report_harassment_person: {
                    getTitle: _.someoneElse,
                    value: "harassing another person"
                },
                report_harassment_group: {
                    getTitle: function() {
                        return Object(s.d)("A group of people", "ReportModalWizard")
                    },
                    value: "harassing group"
                },
                inappropriate_dont_like: {
                    getTitle: function() {
                        return Object(s.d)("I just don't like it", "ReportModalWizard")
                    },
                    value: "dont like"
                },
                inappropriate_sexually_violent: {
                    getTitle: function() {
                        return Object(s.d)("It contains violent sex acts", "ReportModalWizard")
                    },
                    value: "sexually violent",
                    reportReason: "sexual violence"
                },
                inappropriate_child_or_animal: {
                    getTitle: function() {
                        return Object(s.d)("It contains sex acts involving a child or animal", "ReportModalWizard")
                    },
                    value: "child or animal",
                    reportReason: "sexual violence"
                },
                inappropriate_pornographic: {
                    getTitle: function() {
                        return Object(s.d)("It's sexually explicit or pornographic", "ReportModalWizard")
                    },
                    value: "pornographic",
                    reportReason: "sexual content"
                },
                inappropriate_gory: {
                    getTitle: function() {
                        return Object(s.d)("It's overtly violent or gory", "ReportModalWizard")
                    },
                    value: "gory",
                    reportReason: "gore"
                },
                evasion_sitewide: {
                    getTitle: function() {
                        return Object(s.d)("A sitewide ban from Twitch", "ReportModalWizard")
                    },
                    value: "sitewide ban",
                    reportReason: "tos ban evasion"
                },
                evasion_chat: {
                    getTitle: function() {
                        return Object(s.d)("A chat ban from one or more channels", "ReportModalWizard")
                    },
                    value: "chat ban",
                    reportReason: "channel ban evasion"
                },
                impersonation_me: {
                    getTitle: _.me,
                    value: "impersonating me",
                    reportReason: "spam"
                },
                impersonation_brand: {
                    getTitle: function() {
                        return Object(s.d)("Someone I represent, or a brand/company I work for", "ReportImpersonation")
                    },
                    value: "impersonating brand",
                    reportReason: "spam"
                },
                impersonation_other: {
                    getTitle: _.someoneElse,
                    value: "impersonating someone else",
                    reportReason: "spam"
                },
                spam_bot: {
                    getTitle: function() {
                        return Object(s.d)("I think this account is a bot", "ReportModalWizard")
                    },
                    value: "bot"
                },
                spam_scam: {
                    getTitle: function() {
                        return Object(s.d)("They're trying to scam other users or sending malicious links", "ReportModalWizard")
                    },
                    value: "scam"
                },
                spam_repeated: {
                    getTitle: function() {
                        return Object(s.d)("They're sending repeated messages", "ReportModalWizard")
                    },
                    value: "repeat messages"
                },
                selfharm_help_link: {
                    getTitle: function() {
                        return Object(s.d)("Learn more about mental health support and information", "ReportModalWizard")
                    },
                    value: "https://help.twitch.tv/customer/en/portal/articles/2904486-twitch-cares-mental-health-support-information",
                    type: i.Link
                },
                ip_help_link: {
                    getTitle: function() {
                        return Object(s.d)("https://www.twitch.tv/p/legal/dmca-guidelines/", "ReportModalWizard")
                    },
                    value: "https://www.twitch.tv/p/legal/dmca-guidelines/",
                    type: i.Link
                }
            };
        ! function(e) {
            e.Confirm = "Confirm", e.MultipleChoice = "MultipleChoice", e.Info = "End Card"
        }(y || (y = {}));
        var C, N, E, O = {
                contentFilter: function() {
                    return Object(s.d)("Tell us more about this account:", "ReportModalWizard")
                },
                contentGeneral: function() {
                    return Object(s.d)("What's wrong with this account?", "ReportModalWizard")
                },
                thanks: function() {
                    return Object(s.d)("Thank you for your report", "ReportModalWizard")
                }
            },
            w = {
                getLabel: function() {
                    return Object(s.d)("Tell us where the problem is:", "ReportModalWizard")
                },
                items: [S.reportContent_chat, S.reportContent_profile, S.reportContent_video, S.reportContent_whisper, S.reportContent_other],
                type: y.MultipleChoice,
                value: "content type"
            },
            T = {
                type: y.Confirm,
                value: "tell us more"
            },
            F = {
                getTitle: O.thanks,
                type: y.Info,
                value: "default end"
            },
            R = {
                getTitle: O.thanks,
                type: y.Info,
                blockPrompt: !0,
                value: "thanks and block end"
            },
            I = {
                messaging: {
                    getLabel: O.contentFilter,
                    type: y.MultipleChoice,
                    items: [S.reportFilter_general_messaging, S.reportFilter_selfHarm, S.reportFilter_spam],
                    value: "report reason"
                },
                profile: {
                    getLabel: O.contentFilter,
                    type: y.MultipleChoice,
                    items: [S.reportFilter_general_profile, S.reportFilter_selfHarm, S.reportFilter_spam],
                    value: "report reason"
                },
                video: {
                    getLabel: O.contentFilter,
                    type: y.MultipleChoice,
                    items: [S.reportFilter_labeling, S.reportFilter_general_video, S.reportFilter_selfHarm],
                    value: "report reason"
                }
            },
            x = {
                video: {
                    getLabel: O.contentGeneral,
                    type: y.MultipleChoice,
                    items: [S.report_rude, S.report_violence, S.report_abusive, S.report_inappropriate_stream, S.report_emptyStream, S.report_banEvasion, S.report_impersonation, S.report_underage, S.report_ip],
                    value: "report reason"
                },
                profile: {
                    getLabel: O.contentGeneral,
                    type: y.MultipleChoice,
                    items: [S.report_username, S.report_violence, S.report_abusive, S.report_inappropriate_content, S.report_banEvasion, S.report_impersonation, S.report_underage, S.report_ip],
                    value: "report reason"
                },
                messaging: {
                    getLabel: O.contentGeneral,
                    type: y.MultipleChoice,
                    items: [S.report_rude, S.report_username, S.report_violence, S.report_abusive, S.report_inappropriate_messages, S.report_banEvasion, S.report_impersonation, S.report_underage, S.report_ip],
                    value: "report reason"
                }
            },
            D = {
                type: {
                    getLabel: function() {
                        return Object(s.d)("Tell us more about the account sending spam.", "ReportModalWizard")
                    },
                    items: [S.spam_bot, S.spam_scam, S.spam_repeated],
                    type: y.MultipleChoice,
                    value: "spam type"
                }
            },
            j = {
                info: {
                    getLabel: function() {
                        return Object(s.d)("Thank you for your report and your concern. We will reach out to the person you reported with resources they can use to seek help.", "ReportModalWizard")
                    },
                    items: [S.selfharm_help_link],
                    type: y.Info,
                    value: "selfharm end"
                }
            },
            A = {
                type: {
                    items: [S.report_hate_speech, S.report_harassment, S.report_abusive_violence],
                    getLabel: function() {
                        return Object(s.d)("How is this account hateful or abusive?", "ReportModalWizard")
                    },
                    type: y.MultipleChoice,
                    value: "abuse type"
                },
                violence: {
                    getLabel: function() {
                        return Object(s.d)("Are the threats directed at you or someone else?", "ReportModalWizard")
                    },
                    items: [S.report_threat_me, S.report_threat_person, S.report_threat_group, S.report_threat_selfharm],
                    type: y.MultipleChoice,
                    value: "violence type"
                },
                harassment: {
                    getLabel: function() {
                        return Object(s.d)("Who is being harassed or bullied?", "ReportModalWizard")
                    },
                    items: [S.report_harassment_me, S.report_harassment_person, S.report_harassment_group],
                    type: y.MultipleChoice,
                    value: "harassment type"
                },
                violence_end: {
                    items: [S.violence_end_getLabel],
                    blockPrompt: !0,
                    type: y.Info,
                    value: "violence end"
                }
            },
            M = {
                type: {
                    getLabel: function() {
                        return Object(s.d)("What's wrong with this content?", "ReportModalWizard")
                    },
                    items: [S.inappropriate_dont_like, S.inappropriate_sexually_violent, S.inappropriate_child_or_animal, S.inappropriate_pornographic, S.inappropriate_gory],
                    type: y.MultipleChoice,
                    value: "inappropriate content type"
                }
            },
            L = {
                type: {
                    getLabel: function() {
                        return Object(s.d)("What kind of ban are they evading?", "ReportModalWizard")
                    },
                    value: "ban type",
                    items: [S.evasion_sitewide, S.evasion_chat],
                    type: y.MultipleChoice
                }
            },
            U = {
                type: {
                    getLabel: function() {
                        return Object(s.d)("Who is being impersonated?", "ReportModalWizard")
                    },
                    items: [S.impersonation_me, S.impersonation_brand, S.impersonation_other],
                    type: y.MultipleChoice,
                    value: "impersonation type"
                }
            },
            P = {
                getTitle: function() {
                    return Object(s.d)("Thank you for your concern.", "ReportModalWizard")
                },
                getLabel: function() {
                    return Object(s.d)("Please click on the link below to continue to our guidelines for submitting a claim.", "ReportModalWizard")
                },
                items: [S.ip_help_link],
                type: y.Info,
                value: "ip end"
            },
            B = w,
            V = T,
            z = F,
            W = {
                video: I.video,
                whisper: I.messaging,
                profile: I.profile,
                chat: I.messaging,
                other: I.profile,
                general_messaging: x.messaging,
                general_profile: x.profile,
                general_video: x.video,
                abusive: A.type,
                "ban evasion": L.type,
                "inappropriate content": M.type,
                impersonation: U.type,
                spam: D.type,
                rude: R,
                "dont like": R,
                violence: A.violence,
                harassment: A.harassment,
                "intellectual property": P
            },
            q = {
                impersonation: R,
                selfharm: j.info,
                spam: R,
                harm: A.violence_end,
                other: z
            },
            H = {
                CHANNEL_FEED_POST_REPORT: I.profile,
                COMMUNITY_REPORT: I.profile,
                CHAT_REPORT: I.messaging,
                CLIP_REPORT: I.video,
                EVENT_REPORT: I.profile,
                EXTENSION_REPORT: I.profile,
                LIVE_UP_REPORT: I.profile,
                VOD_COMMENT_REPORT: I.messaging
            },
            G = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onChange = function(e) {
                        t.props.onChangeText(e.target.value)
                    }, t.onSelect = function(e) {
                        if (t.props.currentCard.items && e.currentTarget.parentElement) {
                            var n = Number(e.currentTarget.parentElement.getAttribute("data-a-index")),
                                i = t.props.currentCard.items[n];
                            t.props.onChangeRadio(i)
                        }
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(v._6, {
                        className: "reporting-wizard-card"
                    }, r.createElement(v.U, {
                        label: this.props.currentCard.getLabel ? this.props.currentCard.getLabel() : ""
                    }, this.renderCardItems()))
                }, t.prototype.renderCardItems = function() {
                    var e = this,
                        t = this.props.currentCard,
                        n = [];
                    return t.items && t.type !== y.Confirm && (n = t.items.map(function(t, n) {
                        switch (t.type) {
                            case i.Text:
                                return r.createElement(v._6, {
                                    key: n,
                                    padding: {
                                        y: 1
                                    }
                                }, t.getTitle());
                            case i.Link:
                                return r.createElement(v.M, {
                                    key: n,
                                    to: t.value,
                                    targetBlank: !0
                                }, t.getTitle());
                            case i.MultipleChoice:
                            default:
                                return r.createElement(v._6, {
                                    key: n,
                                    padding: {
                                        y: .5
                                    }
                                }, r.createElement(v._18, {
                                    checked: !!e.props.currentSelection && e.props.currentSelection.value === t.value,
                                    onChange: e.onSelect,
                                    label: t.getTitle(),
                                    "data-a-index": n,
                                    name: "card",
                                    value: t.value
                                }))
                        }
                    })), t.type === y.Confirm && n.push(r.createElement(v._6, {
                        key: "tellusmore_prompt"
                    }, r.createElement(v._6, {
                        padding: {
                            bottom: 1
                        }
                    }, Object(s.d)("Could you tell us more? You may include links to videos, clips, screenshots, or content outside Twitch", "ReportModalWizard")), r.createElement(v._40, {
                        key: "tellusmore_textarea",
                        onChange: this.onChange,
                        rows: 6,
                        autoFocus: !0,
                        "data-test-selector": "report-wizard-textarea",
                        error: this.props.error
                    }))), n
                }, t
            }(r.Component),
            $ = n("LjAQ"),
            K = "report-wizard-back",
            Q = "report-wizard-close",
            J = "report-wizard-next",
            Y = "report-wizard-submit",
            X = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        currentCard: t.props.currentCard || H[t.props.reportContentType] || B,
                        prevCards: [],
                        currentSelection: null,
                        prevSelections: [],
                        displacedSelections: [],
                        reportDescription: "",
                        error: "",
                        reportReason: t.props.reportReason || "",
                        modalCloseTracked: !1
                    }, t.renderButtons = function() {
                        var e = Object(s.d)("Close", "ReportModalWizard"),
                            n = t.handleClose,
                            i = Q,
                            a = !1,
                            o = t.state.prevCards.length ? t.renderBack() : null;
                        switch (t.state.currentCard.type) {
                            case y.MultipleChoice:
                                e = Object(s.d)("Next", "ReportModalWizard"), n = t.handleNext, i = J, a = !t.state.currentSelection;
                                break;
                            case y.Confirm:
                                e = Object(s.d)("Submit Report", "ReportModalWizard"), n = t.handleSubmit, a = !t.state.reportDescription, i = Y
                        }
                        return r.createElement(v._6, null, o, r.createElement(v.u, {
                            onClick: n,
                            disabled: a,
                            "data-test-selector": i
                        }, r.createElement(v._6, {
                            padding: {
                                x: 2
                            }
                        }, e)))
                    }, t.renderBack = function() {
                        return r.createElement(v._6, {
                            margin: {
                                right: 1
                            },
                            display: v.P.InlineBlock
                        }, r.createElement(v.u, {
                            type: v.A.Hollow,
                            onClick: t.handleBack,
                            "data-test-selector": K
                        }, r.createElement(v._6, {
                            padding: {
                                x: 2
                            }
                        }, Object(s.d)("Back", "ReportModalWizard"))))
                    }, t.handleClose = function() {
                        t.setState({
                            modalCloseTracked: !0
                        }, function() {
                            return t.props.trackClose(E.Finish, t.state.currentCard.value)
                        }), t.props.onClose()
                    }, t.handleNext = function() {
                        if (t.state.currentSelection && t.state.currentSelection.value) {
                            var e = t.state.currentCard,
                                n = t.state.prevCards.concat(e),
                                i = t.state.prevSelections.concat(t.state.currentSelection),
                                a = t.state.displacedSelections[t.state.displacedSelections.length - 1],
                                r = V;
                            W[t.state.currentSelection.value] && (r = W[t.state.currentSelection.value]);
                            var o = t.state.currentSelection.reportReason || t.state.reportReason,
                                l = r.type === y.Info;
                            t.setState({
                                currentCard: r,
                                reportReason: o,
                                prevCards: l ? [] : n,
                                prevSelections: i,
                                currentSelection: a || null,
                                displacedSelections: t.state.displacedSelections.slice(0, -1)
                            }, function() {
                                return t.trackNavigation(N.Next, e.value)
                            })
                        }
                    }, t.createReportDescription = function() {
                        return t.state.prevSelections.map(function(e, n) {
                            if (!e.omitFromDescription) return t.state.prevCards[n].value + ": " + e.value
                        }).filter(function(e) {
                            return !!e
                        }).join("\n") + "\n\n" + t.state.reportDescription
                    }, t.handleSubmit = function() {
                        return a.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, i = this;
                            return a.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return this.state.reportDescription.trim().length > 0 ? (e = this.state.reportReason || "other", t = this.createReportDescription(), [4, this.props.onSubmit(e, t, null, null)]) : [3, 2];
                                    case 1:
                                        switch (a.sent(), this.props.submitStatus) {
                                            case $.b.FormError:
                                                this.setState({
                                                    error: Object(s.d)("Description is required.", "ReportModalWizard")
                                                });
                                                break;
                                            case $.b.Success:
                                                n = z, q[e] && (n = q[e]), this.setState({
                                                    currentCard: n,
                                                    prevCards: [],
                                                    prevSelections: [],
                                                    currentSelection: null,
                                                    displacedSelections: [],
                                                    reportDescription: "",
                                                    error: ""
                                                }, function() {
                                                    return i.trackNavigation(N.Submit)
                                                });
                                                break;
                                            case $.b.MutationError:
                                            default:
                                                this.setState({
                                                    error: Object(s.d)("Sorry, a network error occurred when submitting your report. Please try again later.", "ReportModalWizard")
                                                })
                                        }
                                        return [3, 3];
                                    case 2:
                                        this.props.onError($.b.FormError), this.setState({
                                            error: Object(s.d)("Description cannot be empty.", "ReportModalWizard")
                                        }), a.label = 3;
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, t.handleBack = function() {
                        return a.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, i, r = this;
                            return a.__generator(this, function(a) {
                                return e = this.state.currentCard, t = this.state.prevCards[this.state.prevCards.length - 1], n = this.state.prevSelections[this.state.prevSelections.length - 1], i = this.state.displacedSelections, this.state.currentSelection && (i = i.concat(this.state.currentSelection)), t && n && this.setState({
                                    currentCard: t,
                                    currentSelection: n,
                                    displacedSelections: i,
                                    prevCards: this.state.prevCards.slice(0, -1),
                                    prevSelections: this.state.prevSelections.slice(0, -1),
                                    error: ""
                                }, function() {
                                    return r.trackNavigation(N.Back, e.value)
                                }), [2]
                            })
                        })
                    }, t.handleTextInput = function(e) {
                        t.setState({
                            reportDescription: e
                        })
                    }, t.handleSelection = function(e) {
                        t.state.currentCard.items && e !== t.state.currentSelection && t.setState({
                            currentSelection: e,
                            displacedSelections: [],
                            reportDescription: ""
                        })
                    }, t.trackNavigation = function(e, n) {
                        t.props.trackAction(e, n, t.state.currentCard.value)
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentWillUnmount = function() {
                    this.state.modalCloseTracked || this.props.trackClose(E.Close, this.state.currentCard.value)
                }, t.prototype.render = function() {
                    var e = this.state.currentCard.type === y.Info && this.state.currentCard.blockPrompt ? r.createElement(b, {
                            targetUserID: this.props.targetUserID,
                            onBlock: this.props.onBlock,
                            onUnblock: this.props.onUnblock
                        }) : null,
                        t = this.state.error ? r.createElement(v._29, {
                            fullWidth: !0,
                            margin: {
                                bottom: 1
                            },
                            padding: 1,
                            className: "reporting__error-container"
                        }, this.state.error) : null;
                    return r.createElement(v._29, {
                        className: "reporting-wizard",
                        display: v.P.Flex,
                        margin: {
                            x: 1
                        },
                        flexDirection: v.R.Column,
                        fullHeight: !0,
                        "data-test-card-value": this.state.currentCard.value
                    }, t, r.createElement(v.O, {
                        bold: !0,
                        type: v._43.H4
                    }, this.state.currentCard.getTitle ? this.state.currentCard.getTitle() : this.props.title), r.createElement(v._6, {
                        margin: {
                            top: 1,
                            bottom: 2
                        }
                    }, r.createElement(G, {
                        currentCard: this.state.currentCard,
                        currentSelection: this.state.currentSelection,
                        targetUserID: this.props.targetUserID,
                        onChangeRadio: this.handleSelection,
                        onChangeText: this.handleTextInput,
                        error: this.props.submitStatus === $.b.FormError
                    }), e), this.renderButtons())
                }, t
            }(r.Component),
            Z = n("mw/a"),
            ee = n("xwpJ"),
            te = n("mmQh"),
            ne = n("mRH2");
        n.d(t, "c", function() {
                return N
            }), n.d(t, "a", function() {
                return E
            }), n.d(t, "b", function() {
                return ae
            }),
            function(e) {
                e.Close = "close", e.Open = "open", e.Submit = "submit_report", e.ToggleSettings = "modal_settings"
            }(C || (C = {})),
            function(e) {
                e.Back = "back", e.Close = "close", e.Open = "open", e.Next = "next", e.Submit = "submit_report", e.ToggleSettings = "modal_settings"
            }(N || (N = {})),
            function(e) {
                e.Close = "close", e.Finish = "finish"
            }(E || (E = {}));
        var ie = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.state = {
                    submitStatus: $.b.Unsubmitted,
                    showWizard: !1,
                    openEventSent: !1,
                    closeEventSent: !1
                }, t.handleSubmit = function(e, n, i, r) {
                    return a.__awaiter(t, void 0, void 0, function() {
                        var t, o, l, c = this;
                        return a.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    if (e !== $.a) return [3, 5];
                                    o = {
                                        userID: this.props.reportContext.targetUserID,
                                        communityID: i || "",
                                        reason: n
                                    }, a.label = 1;
                                case 1:
                                    return a.trys.push([1, 3, , 4]), [4, this.props.reportUserInCommunity(Object(p.a)(o))];
                                case 2:
                                    return a.sent(), s.o.tracking.track(h.SpadeEventType.CommunityModeration, {
                                        community_id: i,
                                        name: r,
                                        is_official: !1,
                                        user_id: this.props.sessionUser && this.props.sessionUser.id,
                                        target_id: this.props.reportContext.targetUserID,
                                        action: "report",
                                        reason: e
                                    }), this.setState({
                                        submitStatus: $.b.Success
                                    }, function() {
                                        c.state.showWizard || c.trackAction(C.Submit)
                                    }), [3, 4];
                                case 3:
                                    return t = a.sent(), s.j.error(t, "ReportUserInCommunity Mutation failed."), this.setState({
                                        submitStatus: $.b.MutationError
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
                                    }, this.props.reportContext.contentType === Z.a.Community && this.props.reportContext.extra && (o.description = Object(ee.a)(this.props.reportContext.extra, n)), a.label = 6;
                                case 6:
                                    return a.trys.push([6, 8, , 9]), [4, this.props.reportUser(Object(p.a)(o))];
                                case 7:
                                    return a.sent(), this.props.reportContext.contentType === Z.a.Community && s.o.tracking.track(h.SpadeEventType.CommunityReport, {
                                        community_id: this.props.reportContext.contentID,
                                        name: this.props.reportContext.extra,
                                        is_official: !1,
                                        user_id: this.props.sessionUser && this.props.sessionUser.id,
                                        reason: e
                                    }), this.setState({
                                        submitStatus: $.b.Success
                                    }, function() {
                                        c.state.showWizard || c.trackAction(C.Submit)
                                    }), [3, 9];
                                case 8:
                                    return l = a.sent(), s.j.error(l, "ReportUser Mutation failed."), this.setState({
                                        submitStatus: $.b.MutationError
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
                }, t.onBlock = function() {
                    t.props.blockUserMutation(t.props.reportContext.targetUserID, void 0, void 0, a.__assign({}, t.props.sessionUser, {
                        __typename: "User"
                    }))
                }, t.onUnblock = function() {
                    t.props.unblockUserMutation(t.props.reportContext.targetUserID, a.__assign({}, t.props.sessionUser, {
                        __typename: "User"
                    }))
                }, t.trackOpen = function(e) {
                    t.state.openEventSent || (t.state.showWizard ? t.trackWizardAction(N.Open, void 0, e) : t.trackAction(C.Open), t.setState({
                        openEventSent: !0
                    }))
                }, t.trackClose = function(e, n) {
                    t.state.closeEventSent || (t.state.showWizard ? t.trackWizardAction(N.Close, n, void 0, e) : t.trackAction(C.Close), t.setState({
                        closeEventSent: !0
                    }))
                }, t.trackWizardAction = function(e, n, i, a) {
                    var r = null;
                    if (t.props.reportContext.extra) try {
                        r = JSON.parse(t.props.reportContext.extra).channel_id
                    } catch (e) {
                        r = null
                    }
                    s.o.tracking.track(h.SpadeEventType.ReportWizardFlowAction, {
                        ui_context: t.props.reportContext.contentType,
                        target_user_id: t.props.reportContext.targetUserID,
                        report_sent: t.state.submitStatus === $.b.Success,
                        modal_type: "wizard_v1",
                        channel_id: r,
                        action: e,
                        close_type: a,
                        report_session_id: t.reportID,
                        current_step: n,
                        navigated_to: i
                    })
                }, t.trackAction = function(e) {
                    var n = null;
                    if (t.props.reportContext.extra) try {
                        n = JSON.parse(t.props.reportContext.extra).channel_id
                    } catch (e) {
                        n = null
                    }
                    s.o.tracking.track(h.SpadeEventType.ReportFlowAction, {
                        ui_context: t.props.reportContext.contentType,
                        target_user_id: t.props.reportContext.targetUserID,
                        report_sent: t.state.submitStatus === $.b.Success,
                        channel_id: n,
                        action: e,
                        report_session_id: t.reportID
                    })
                }, t
            }
            return a.__extends(t, e), t.prototype.componentWillUnmount = function() {
                this.handleClose(), this.state.showWizard || this.trackClose()
            }, t.prototype.componentWillMount = function() {
                this.reportID = Object(m.a)()
            }, t.prototype.componentDidMount = function() {
                return a.__awaiter(this, void 0, void 0, function() {
                    var e, t = this;
                    return a.__generator(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, s.o.experiments.getAssignment("TWILIGHT_NEW_REPORTING_WIZARD")];
                            case 1:
                                return e = n.sent(), this.setState({
                                    showWizard: "yes" === e
                                }, function() {
                                    t.trackOpen()
                                }), this.props.latencyTracking.reportInteractive(), [2]
                        }
                    })
                })
            }, t.prototype.render = function() {
                var e = {
                    onClose: this.handleClose,
                    onError: this.handleChildError,
                    onSubmit: this.handleSubmit,
                    reportContentType: this.props.reportContext.contentType,
                    submitStatus: this.state.submitStatus,
                    targetUserID: this.props.reportContext.targetUserID,
                    title: this.props.title,
                    defaultDescription: this.props.defaultDescription
                };
                switch (this.state.showWizard) {
                    case !0:
                        return r.createElement(X, a.__assign({}, e, {
                            user: this.props.sessionUser,
                            onBlock: this.onBlock,
                            onUnblock: this.onUnblock,
                            trackAction: this.trackWizardAction,
                            trackClose: this.trackClose
                        }));
                    case !1:
                    default:
                        return r.createElement($.c, a.__assign({}, e))
                }
            }, t
        }(r.Component);
        var ae = Object(l.d)(Object(c.a)(te, {
            name: "reportUserInCommunity"
        }), Object(c.a)(ne, {
            name: "reportUser"
        }), Object(g.d)("ReportUser"), Object(d.a)(), Object(u.a)(), Object(o.b)(function(e) {
            return {
                sessionUser: e.session.user
            }
        }, null))(ie)
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
                            t.removeEventListener("loadedmetadata", e, !1), t.webkitEnterFullscreen(), h = !!t.getAttribute("controls")
                        }, !1), t.load()) : (t.webkitEnterFullscreen(), h = !!t.getAttribute("controls")), m = t
                    } catch (t) {
                        return y("not_supported", e)
                    }
                    return !0
                }
                return y(void 0 === p.request ? "not_supported" : "not_enabled", e)
            }

            function c() {
                _.element || (b(), d())
            }

            function d() {
                o && "webkitfullscreenchange" === p.change && window.removeEventListener("resize", c, !1)
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
                h = null,
                g = function() {},
                v = [],
                f = !1;
            navigator.userAgent.indexOf("Android") > -1 && navigator.userAgent.indexOf("Chrome") > -1 && (f = parseInt(navigator.userAgent.replace(/^.*Chrome\/(\d+).*$/, "$1"), 10) || !0);
            var k = function(e) {
                    var t = v[v.length - 1];
                    t && (e !== t.element && e !== m || !t.hasEntered) && ("VIDEO" === e.tagName && (m = e), 1 === v.length && _.onenter(_.element), t.enter.call(t.element, e || t.element), t.hasEntered = !0)
                },
                b = function() {
                    !m || h || u || (m.setAttribute("controls", "controls"), m.removeAttribute("controls")), m = null, h = null;
                    var e = v.pop();
                    e && (e.exit.call(e.element), _.element || (v.forEach(function(e) {
                        e.exit.call(e.element)
                    }), v = [], _.onexit()))
                },
                y = function(e, t) {
                    if (v.length > 0) {
                        var n = v.pop();
                        t = t || n.element, n.error.call(t, e), _.onerror(t, e)
                    }
                },
                _ = {
                    request: function(e, t, n, i) {
                        if (e = e || r.body, v.push({
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
                                    r[p.element] || y(o ? "not_enabled" : "not_allowed", e)
                                }, 100)
                            } catch (t) {
                                y("not_enabled", e)
                            }
                        } else s(e)
                    },
                    exit: function() {
                        d(), r[p.exit]()
                    },
                    toggle: function(e, t, n, i) {
                        _.element ? _.exit() : _.request(e, t, n, i)
                    },
                    videoEnabled: function(e) {
                        if (_.enabled) return !0;
                        var t = l(e = e || r.body);
                        return !(!t || void 0 === t.webkitSupportsFullscreen) && (t.readyState < t.HAVE_METADATA ? "maybe" : t.webkitSupportsFullscreen)
                    },
                    onenter: g,
                    onexit: g,
                    onchange: g,
                    onerror: g
                };
            try {
                Object.defineProperties(_, {
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
                    if (_.onchange(_.element), _.element) {
                        var t = v[v.length - 2];
                        t && t.element === _.element ? b() : (k(_.element), o && "webkitfullscreenchange" === p.change && window.addEventListener("resize", c, !1))
                    } else b()
                }, !1), r.addEventListener("webkitbeginfullscreen", function(e) {
                    var t = !0;
                    if (v.length > 0)
                        for (var n = 0, i = v.length; i > n; n++) {
                            if (l(v[n].element) === e.srcElement) {
                                t = !1;
                                break
                            }
                        }
                    t && v.push({
                        element: e.srcElement,
                        enter: g,
                        exit: g,
                        error: g
                    }), _.onchange(e.srcElement), k(e.srcElement)
                }, !0), r.addEventListener("webkitendfullscreen", function(e) {
                    _.onchange(e.srcElement), b(e.srcElement)
                }, !0), p.error && r.addEventListener(p.error, function(e) {
                    y("not_allowed")
                }, !1)
            } catch (e) {
                _.element = null, _.enabled = !1
            }
            void 0 === (i = function() {
                return _
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
                    var i = d(n, r[n]);
                    e.push(i), t[n.toLowerCase()] = i
                }), s = {
                    orderedActions: e,
                    indexedActions: t
                }
            }
            return s
        }, t.b = function() {
            c || (c = function(e) {
                if (s) return s.indexedActions[e.toLowerCase()];
                return d(e, r[e])
            }("Cheer"));
            return c
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
        var c = null;

        function d(e, t) {
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
                for (var c = s[r], d = 0, u = l; d < u.length; d++) {
                    var m = u[d];
                    i[c] || (i[c] = {
                        animated: new Map,
                        static: new Map
                    });
                    var h = p(e, c, !0, t, m);
                    n.push(h), i[c].animated.set(m, h.url);
                    var g = p(e, c, !1, t, m);
                    n.push(g), i[c].static.set(m, g.url)
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
    KJtg: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "UnblockUser"
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
                                value: "UnblockUserInput"
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
                            value: "unblockUser"
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
                                    value: "targetUser"
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
            body: "mutation UnblockUser($input: UnblockUserInput!) {\nunblockUser(input: $input) {\ntargetUser {\nid\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    Kxgf: function(e, t, n) {
        "use strict";
        t.a = function() {
            var e = this;
            return Object(a.a)(l, {
                props: function(t) {
                    return {
                        unblockUserMutation: function(n, a) {
                            return i.__awaiter(e, void 0, void 0, function() {
                                return i.__generator(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return t.mutate ? [4, t.mutate({
                                                variables: {
                                                    input: {
                                                        targetUserID: n
                                                    }
                                                },
                                                optimisticResponse: {
                                                    unblockUser: {
                                                        __typename: "UnblockUserPayload",
                                                        targetUser: {
                                                            __typename: "User",
                                                            id: n
                                                        }
                                                    }
                                                },
                                                update: function(e) {
                                                    var t = e.readFragment({
                                                        id: Object(o.a)(a),
                                                        fragment: r
                                                    });
                                                    t && (t.blockedUsers = t.blockedUsers.filter(function(e) {
                                                        return null !== e && e.id !== n
                                                    }), e.writeFragment({
                                                        id: Object(o.a)(a),
                                                        fragment: r,
                                                        data: t
                                                    }))
                                                }
                                            })] : [3, 2];
                                        case 1:
                                            return e.sent(), [3, 3];
                                        case 2:
                                            throw new Error("unblockUserMutation is not ready");
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        }
                    }
                }
            })
        };
        var i = n("TToO"),
            a = n("7vx8"),
            r = n("nmYW"),
            o = (n.n(r), n("yADj")),
            l = n("KJtg");
        n.n(l)
    },
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
            c = n("CSlQ"),
            d = n("xwpJ"),
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
                    }, Object(l.d)("Loading...", "ReportReasonsSelect"))] : e = (this.props.data.reportReasons || Object(d.b)()).map(function(e) {
                        return r.createElement("option", {
                            key: e.id,
                            value: e.id
                        }, e.text)
                    });
                    return r.createElement(u._6, {
                        margin: {
                            bottom: 2
                        }
                    }, r.createElement(u.U, {
                        id: "reporting-modal__select",
                        label: Object(l.d)("Select Reason (required)", "ReportUserModal")
                    }, r.createElement(u._25, {
                        id: "reporting-modal__select",
                        "data-test-selector": "reporting-modal.select",
                        disabled: this.props.data.loading || !!this.props.data.error,
                        onChange: this.handleChange,
                        defaultValue: t
                    }, r.createElement("option", {
                        disabled: !0,
                        key: "default"
                    }, t), e)))
                }, t = i.__decorate([Object(c.d)("ReportReasonSelect")], t)
            }(r.Component),
            h = Object(s.a)(p, {
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
            return v
        }), n.d(t, "c", function() {
            return b
        });
        var v, f = "community_rules_violation";
        ! function(e) {
            e[e.Unsubmitted = 0] = "Unsubmitted", e[e.Success = 1] = "Success", e[e.FormError = 2] = "FormError", e[e.MutationError = 3] = "MutationError"
        }(v || (v = {}));
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
                        e.preventDefault(), t.state.reason && t.state.description.length > 0 ? t.props.onSubmit(t.state.reason || "", t.state.description, t.state.selectedCommunityID, t.state.selectedCommunityName) : t.props.onError(v.FormError)
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
                    return r.createElement(u._6, {
                        display: u.P.Flex,
                        flexDirection: u.R.Column,
                        alignItems: u.c.Center,
                        justifyContent: u._5.Center
                    }, this.renderStatusMessage(), this.renderBody())
                }, t.prototype.renderBody = function() {
                    return this.props.submitStatus === v.Success ? r.createElement("div", null, r.createElement(u.u, {
                        onClick: this.props.onClose
                    }, r.createElement(u._6, {
                        padding: {
                            x: 2
                        }
                    }, Object(l.d)("Close", "ReportUser")))) : r.createElement("div", null, r.createElement(u._6, {
                        "data-test-selector": "reporting.title",
                        margin: {
                            bottom: 1
                        },
                        "data-a-target": "reporting-channel-name"
                    }, r.createElement(u.O, {
                        type: u._43.H4
                    }, this.props.title), r.createElement(u._29, {
                        color: u.J.Alt2,
                        margin: {
                            top: 1
                        }
                    }, this.headerMessage)), r.createElement("form", null, r.createElement(u._29, {
                        borderTop: !0,
                        borderBottom: !0,
                        margin: {
                            y: 2
                        },
                        padding: {
                            y: 2
                        }
                    }, r.createElement(h, {
                        reportContentType: this.props.reportContentType,
                        onChange: this.handleReasonChange
                    }), this.renderCommunitiesSelector(), r.createElement(u.U, {
                        id: "reporting__text-area",
                        label: Object(l.d)("Description (required)", "ReportUser")
                    }, r.createElement(u._40, {
                        defaultValue: this.props.defaultDescription,
                        onChange: this.handleTextAreaChange
                    }))), r.createElement(u._29, {
                        display: u.P.Flex,
                        justifyContent: u._5.Center
                    }, r.createElement(u.u, {
                        onClick: this.handleSubmit
                    }, r.createElement(u._6, {
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
                        return r.createElement(u._6, {
                            margin: {
                                bottom: 2
                            }
                        }, r.createElement(u.U, {
                            id: "reporting__select-community",
                            label: Object(l.d)("Community", "ReportUser")
                        }, r.createElement(u._25, {
                            id: "reporting__select-community",
                            "data-test-selector": "reporting.select-community",
                            disabled: this.props.data.loading || !!this.props.data.error,
                            onChange: this.selectCommunity
                        }, e)))
                    }
                }, t.prototype.renderStatusMessage = function() {
                    var e = null;
                    switch (this.props.submitStatus) {
                        case v.FormError:
                            e = Object(l.d)("Reason and Description are required.", "ReportUser");
                            break;
                        case v.MutationError:
                            e = Object(l.d)("Sorry, a network error occurred when submitting your report. Please try again later.", "ReportUser");
                            break;
                        case v.Success:
                            e = Object(l.d)("Thank you for your report.", "ReportUser");
                            break;
                        default:
                            return null
                    }
                    var t = a({
                        "reporting__error-container": this.props.submitStatus !== v.Success,
                        "reporting__success-container": this.props.submitStatus === v.Success
                    });
                    return r.createElement(u._29, {
                        className: t,
                        fullWidth: this.props.submitStatus !== v.Success,
                        "data-test-selector": "reporting.error",
                        margin: {
                            bottom: 2
                        },
                        padding: 1
                    }, e)
                }, t
            }(r.Component),
            b = Object(o.d)(Object(s.a)(g, {
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
        var i, a, r = n("TToO"),
            o = n("GiK3"),
            l = n("6sO2"),
            s = n("7vx8"),
            c = n("6BvN"),
            d = n("vH/s"),
            u = function(e, t, n, i, a) {
                var r = Date.now() / 1e3;
                l.o.tracking.track(d.SpadeEventType.ClipEdit, {
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
            p = n("CIox"),
            m = n("oIkB");
        ! function(e) {
            e.AlreadyPublished = "already_published", e.EditingWindowExpired = "editing_window_expired", e.InvalidSpeedDuration = "invalid_speed_duration", e.InvalidDuration = "invalid_duration", e.Unknown = "unknown"
        }(i || (i = {})),
        function(e) {
            e.Unsent = "unsent", e.Sending = "sending", e.Error = "error", e.Successful = "successful"
        }(a || (a = {}));
        var h, g = 5,
            v = 60,
            f = n("Odds"),
            k = n("isxN"),
            b = {
                publishState: a.Unsent,
                errorMessage: null
            },
            y = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = b, t.onError = function(e) {
                        t.setState({
                            publishState: a.Error,
                            errorMessage: e
                        }), t.props.onError(e)
                    }, t.onPublish = function() {
                        return r.__awaiter(t, void 0, void 0, function() {
                            var e, t, n;
                            return r.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        if (this.setState({
                                                publishState: a.Sending
                                            }), e = this.props.endOffset - this.props.startOffset, this.props.startOffset > this.props.endOffset || e < g || e > v) return this.setState({
                                            publishState: a.Error,
                                            errorMessage: i.InvalidDuration
                                        }), [2];
                                        r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 3, , 4]), [4, this.props.publishClip(Object(m.a)({
                                            segments: [{
                                                offsetSeconds: this.props.startOffset,
                                                durationSeconds: this.props.endOffset - this.props.startOffset,
                                                speed: 1
                                            }],
                                            slug: this.props.slug,
                                            title: this.props.title
                                        }))];
                                    case 2:
                                        return (t = r.sent()).data.publishClip && t.data.publishClip.error && t.data.publishClip.error.message ? (n = t.data.publishClip.error.message, this.onError(n)) : (this.setState({
                                            publishState: a.Successful
                                        }), this.props.history.push("/" + this.props.slug)), [3, 4];
                                    case 3:
                                        return r.sent(), n = i.Unknown, this.onError(n), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    this.state.publishState === a.Error && e.title.length > 0 && this.props.title !== e.title && this.setState(b), e.isSubmitted && !this.props.isSubmitted && this.onPublish()
                }, t.prototype.render = function() {
                    var e = this.props.title.length < 1 || this.state.publishState === a.Error,
                        t = this.state.publishState === a.Sending;
                    return o.createElement(f._6, null, o.createElement(f.u, {
                        onClick: this.onPublish,
                        disabled: e,
                        state: t ? f.z.Loading : f.z.Default,
                        size: f.y.Large,
                        blurAfterClick: !0
                    }, Object(l.d)("Publish", "ClipsPublishButton")))
                }, t = r.__decorate([Object(s.a)(k, {
                    name: "publishClip"
                })], t)
            }(o.Component),
            _ = Object(p.f)(y),
            S = n("2TZ0"),
            C = this,
            N = {
                TITLE_INPUT: "cmgr-title-input",
                TITLE_SAVE: "cmgr-title-save",
                TITLE_SAVE_TOOLTIP: "cmgr-title-save-tooltip"
            };
        ! function(e) {
            e.emptySubmission = "emptySubmission", e.characterLimitReached = "characterLimitReached", e.channelViolation = "channelViolation", e.notCurator = "notCurator", e.unknown = "unknown"
        }(h || (h = {}));
        var E = 100,
            O = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.renderForClipsViewing = function() {
                        return o.createElement("div", null, o.createElement(f._40, {
                            id: N.TITLE_INPUT,
                            "data-test-selector": N.TITLE_INPUT,
                            value: n.state.title,
                            onChange: n.handleTitleEdit,
                            onKeyDown: n.handleKeyDown
                        }), o.createElement(f._6, {
                            display: f.P.Flex,
                            justifyContent: f._5.Between,
                            alignItems: f.c.Center,
                            padding: {
                                top: 1
                            }
                        }, n.state.showError ? o.createElement(f.O, {
                            color: f.J.Error
                        }, n.getErrorMessage()) : o.createElement(f.O, {
                            color: f.J.Alt2
                        }, n.getRemainingCharacterText()), o.createElement(f._6, {
                            display: f.P.Flex
                        }, o.createElement(f.u, {
                            "data-test-selector": N.TITLE_SAVE,
                            onClick: n.props.onCancel,
                            type: f.A.Hollow
                        }, Object(l.d)("Cancel", "ClipsTitleEdit")), o.createElement(f._6, {
                            padding: {
                                left: 1
                            }
                        }, n.renderSave()))))
                    }, n.renderForManager = function() {
                        return o.createElement(f.U, {
                            id: N.TITLE_INPUT,
                            label: Object(l.d)("Title", "ClipsTitleEdit"),
                            hint: n.getRemainingCharacterText()
                        }, o.createElement(f._6, {
                            display: f.P.Flex,
                            flexWrap: f.S.NoWrap
                        }, o.createElement(f._6, {
                            flexGrow: 1,
                            margin: {
                                right: 1
                            }
                        }, o.createElement(f._2, {
                            id: N.TITLE_INPUT,
                            "data-test-selector": N.TITLE_INPUT,
                            type: f._3.Text,
                            value: n.state.title,
                            onChange: n.handleTitleEdit,
                            onKeyDown: n.handleKeyDown
                        })), o.createElement(f._6, {
                            flexShrink: 0,
                            flexGrow: 0
                        }, o.createElement(f._6, {
                            position: f._13.Relative
                        }, n.renderSave(), o.createElement(f._4, {
                            onClick: n.dismissMessage,
                            "data-test-selector": N.TITLE_SAVE_TOOLTIP
                        }, o.createElement(f.p, {
                            direction: f.q.TopRight,
                            show: n.state.showError || n.state.showSuccess
                        }, o.createElement(f._6, {
                            padding: 1
                        }, n.state.showSuccess ? o.createElement(f.O, {
                            color: f.J.Link
                        }, Object(l.d)("Title Saved!", "ClipsTitleEdit")) : o.createElement(f.O, {
                            color: f.J.Error
                        }, n.getErrorMessage()))))))))
                    }, n.renderForEdit = function() {
                        var e;
                        if ((n.props.startOffset || 0 === n.props.startOffset) && n.props.endOffset) return e = n.state.showError ? o.createElement(f.O, {
                            color: f.J.Alt2
                        }, n.getErrorMessage()) : 0 === n.state.title.length && n.props.broadcasterName ? o.createElement(f.O, {
                            color: f.J.Alt2
                        }, Object(l.d)("Clips with titles get more views. Help {broadcasterName} get discovered by adding a title.", {
                            broadcasterName: n.props.broadcasterName
                        }, "ClipsTitleEdit")) : o.createElement(f.O, {
                            color: f.J.Alt2
                        }, n.getRemainingCharacterText()), o.createElement(f._6, {
                            display: f.P.Flex,
                            flexWrap: f.S.NoWrap
                        }, o.createElement(f._6, {
                            flexGrow: 1,
                            margin: {
                                right: 1
                            }
                        }, o.createElement(f._2, {
                            id: N.TITLE_INPUT,
                            "data-test-selector": N.TITLE_INPUT,
                            type: f._3.Text,
                            value: n.state.title,
                            onChange: n.handleTitleEdit,
                            onKeyDown: n.handleKeyDown
                        })), o.createElement(f._6, {
                            display: f.P.Flex,
                            justifyContent: f._5.Between,
                            alignItems: f.c.Center,
                            padding: {
                                top: 1
                            }
                        }, e, o.createElement(f._6, {
                            display: f.P.Flex
                        }, o.createElement(f._6, {
                            padding: {
                                left: 1
                            }
                        }, o.createElement(_, {
                            isSubmitted: n.state.showSuccess,
                            title: n.state.title,
                            slug: n.props.clipSlug,
                            startOffset: n.props.startOffset,
                            endOffset: n.props.endOffset,
                            onError: n.onPublishClipError
                        })))))
                    }, n.renderSave = function() {
                        return o.createElement(f.u, {
                            "data-test-selector": N.TITLE_SAVE,
                            disabled: !n.canSaveEditedTitle(),
                            onClick: n.editClipTitle
                        }, Object(l.d)("Save", "ClipsTitleEdit"))
                    }, n.onPublishClipError = function(e) {
                        n.setState({
                            showError: !0,
                            error: e
                        })
                    }, n.getRemainingCharacterText = function() {
                        return Object(l.d)("{characterCount, number} remaining", {
                            characterCount: E - n.state.title.length
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
                        var t = e.currentTarget.value.slice(0, E);
                        n.setState({
                            title: t,
                            showError: !1,
                            showSuccess: !1
                        })
                    }, n.editClipTitle = function() {
                        return r.__awaiter(n, void 0, void 0, function() {
                            var e;
                            return r.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        if ("" === this.state.title.trim()) return this.setState({
                                            showError: !0,
                                            error: h.emptySubmission
                                        }), [2];
                                        t.label = 1;
                                    case 1:
                                        return t.trys.push([1, 3, , 4]), [4, this.props.editTitle(this.state.title.trim())];
                                    case 2:
                                        return t.sent(), this.props.clipBroadcasterId && this.props.clipId && this.props.clipTitle && u(Number(this.props.clipBroadcasterId), this.props.clipId, this.props.clipSlug, this.props.clipTitle, this.props.location), this.onSuccess(), [3, 4];
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
                            case c.a.Enter:
                                return void(n.props.location === d.PageviewLocation.ClipsEditing ? n.setState({
                                    showSuccess: !0
                                }) : n.canSaveEditedTitle() && n.editClipTitle());
                            default:
                                return
                        }
                    }, n.state = {
                        title: t.clipTitle ? t.clipTitle.trim() : "",
                        showError: !1,
                        showSuccess: !1,
                        error: null
                    }, n
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return this.props.location === d.PageviewLocation.MyClipsManager ? this.renderForManager() : this.props.location === d.PageviewLocation.ClipsEditing ? this.renderForEdit() : this.renderForClipsViewing()
                }, t.prototype.getErrorMessage = function() {
                    switch (this.state.error) {
                        case h.channelViolation:
                            return Object(l.d)("Uh-oh. Check for inappropriate language and try again!", "ClipsTitleEdit");
                        case h.emptySubmission:
                            return Object(l.d)("Please add a title.", "ClipsTitleEdit");
                        default:
                            return Object(l.d)("Whoops. Something went wrong.", "ClipsTitleEdit")
                    }
                }, t.prototype.errorMessageToError = function(e) {
                    return e.message.includes("403:") ? h.channelViolation : h.unknown
                }, t
            }(o.Component),
            w = function(e) {
                return {
                    editTitle: function(t) {
                        return r.__awaiter(C, void 0, void 0, function() {
                            var n;
                            return r.__generator(this, function(i) {
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
                                        throw n = i.sent(), l.j.error(n, "Failed to edit clip title"), n;
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }
                }
            },
            T = Object(s.a)(S, {
                props: w
            })(O);
        n.d(t, !1, function() {
            return N
        }), n.d(t, !1, function() {
            return h
        }), n.d(t, !1, function() {
            return O
        }), n.d(t, !1, function() {
            return w
        }), n.d(t, "a", function() {
            return T
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
    RsvU: function(e, t) {},
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
    Vr0l: function(e, t) {},
    WNmM: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return s
        }), n.d(t, "b", function() {
            return c
        }), n.d(t, "c", function() {
            return u
        });
        var i, a = n("6sO2"),
            r = n("8Wuk"),
            o = n("vH/s"),
            l = ((i = {})[r.b.Twitter] = "twitter", i[r.b.Reddit] = "reddit", i[r.b.VKontakte] = "vkontakte", i[r.b.Facebook] = "facebook", i[r.b.Copy] = "link", i[r.b.CopyInput] = "option_link", i),
            s = {
                MyClips: "MyClips",
                ClipsOfMyChannel: "ClipsOfMyChannel"
            },
            c = {
                Game: "TopClipsGame",
                Channel: "TopClipsChannel"
            },
            d = {
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
                        location: d[t],
                        game: e.game ? e.game.name : null,
                        channel_id: e.broadcaster ? Number(e.broadcaster.id) : 0,
                        channel: e.broadcaster ? e.broadcaster.login : "",
                        live: null
                    })
                }
            }
    },
    XITx: function(e, t) {},
    XOun: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("GiK3"),
            r = n("6sO2"),
            o = n("vH/s"),
            l = "https://help.twitch.tv/customer/portal/articles/2918323-clip-champs-guide",
            s = function(e) {
                var t = e.type;
                r.o.tracking.track(o.SpadeEventType.ClipChampHelpClick, {
                    target_url: l,
                    type: t.toLowerCase()
                })
            };
        n("RsvU");
        n.d(t, "a", function() {
            return c
        });
        var c = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.onClick = function() {
                    s({
                        type: t.props.pageType
                    })
                }, t
            }
            return i.__extends(t, e), t.prototype.render = function() {
                return a.createElement("a", {
                    href: l,
                    onClick: this.onClick,
                    target: "_blank"
                }, a.createElement("img", {
                    alt: Object(r.d)("clip champ badge", "ClipsCurator"),
                    className: "clips-champ-badge-img",
                    src: "https://s.jtvnw.net/jtv_user_pictures/hosted_images/clipchampbadge"
                }))
            }, t
        }(a.Component)
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
                        c = s ? s.length : r.index;
                    n[c] = {
                        startIndex: c,
                        endIndex: c + o.length,
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
                    for (var c = s[l], d = a[c.token] || [c.token], u = 0, p = d; u < p.length; u++) {
                        var m = p[u];
                        t[m] && o.id === r || (t[m] = {
                            id: c.id,
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
        var c = Object(i.b)(function(e) {
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
            return c
        }), n.d(t, !1, function() {}), n.d(t, "b", function() {
            return s.b
        })
    },
    icZh: function(e, t, n) {
        "use strict";
        t.a = o, t.b = function(e) {
            var t = o();
            t && t.length >= r && (t = t.slice(1, r));
            i.l.set(a, JSON.stringify(t.concat([e])))
        };
        var i = n("6sO2"),
            a = "MOST_RECENT_CLIPS_WATCHED_STORAGE_KEY",
            r = 10;

        function o() {
            return JSON.parse(i.l.get(a, "[]"))
        }
    },
    isxN: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "PublishClip"
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
                                value: "PublishClipInput"
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
                            value: "publishClip"
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
                                            value: "title"
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
                            }, {
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
                                            value: "message"
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
                end: 120
            }
        };
        n.loc.source = {
            body: "mutation PublishClip($input: PublishClipInput!) {\npublishClip(input: $input) {\nclip {\ntitle\nslug\n}\nerror {\nmessage\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    iydZ: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return o
        }), t.c = function(e, t) {
            var n = [],
                o = t.indexedActions,
                s = new RegExp("^(" + Object.keys(o).join("|") + ")(\\d+)$", "i"),
                c = e.split(/\s+/);
            return c.forEach(function(e, t) {
                var d = s.exec(e);
                if (d) {
                    var u = d[1].toLowerCase(),
                        p = +d[2],
                        m = o[u];
                    if (m || u !== i.g || (m = Object(a.b)()), m) {
                        var h = m.orderedTiers.find(function(e) {
                            return e.bits <= p
                        });
                        !h && p && (h = m.orderedTiers[0]), h && n.push({
                            type: r.a.Emote,
                            content: {
                                images: l(h),
                                alt: m.prefix,
                                cheerAmount: p,
                                cheerColor: h.color
                            }
                        })
                    }
                } else {
                    var g = n.length && n[n.length - 1],
                        v = "";
                    if (t < c.length - 1 && (v = " "), g && g.type === r.a.Text) g.content += e + v;
                    else {
                        var f = "";
                        t && (f = " "), n.push({
                            type: r.a.Text,
                            content: f + e + v
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
                                    c = r.content_index;
                                l.o.tracking.trackPageview(i.__assign({
                                    content: o,
                                    medium: s,
                                    content_index: c,
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
                    return this.props.tooltipProps && (s = a.createElement(o._46, i.__assign({}, this.props.tooltipProps), r)), a.createElement(o._6, {
                        "data-toggle-balloon-id": this.toggleBalloonId,
                        display: this.props.display,
                        position: o._13.Relative
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
            c = n("3KVC"),
            d = n("e1CU");
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
            var c = Object(d.a)(t.displayName, t.username);
            return {
                badges: t.badges || {},
                bits: t.bits,
                user: i.__assign({}, c, {
                    userLogin: t.username,
                    userID: t.userID,
                    userType: t.userType,
                    color: t.color || m(t.userID)
                }),
                messageParts: e ? h(e, l, t.bits, n, a, c.userDisplayName) : [],
                deleted: o,
                timestamp: Date.now()
            }
        }, t.b = m, t.f = h, t.d = g, t.c = f, t.e = k;
        var u = ["#FF0000", "#0000FF", "#008000", "#B22222", "#FF7F50", "#9ACD32", "#FF4500", "#2E8B57", "#DAA520", "#D2691E", "#5F9EA0", "#1E90FF", "#FF69B4", "#8A2BE2", "#00FF7F"],
            p = {};

        function m(e, t) {
            return void 0 === t && (t = 15), "number" != typeof p[e] && (p[e] = Math.floor(Math.random() * t)), u[p[e]]
        }

        function h(e, t, n, a, r, l) {
            void 0 === t && (t = []);
            var s = [],
                c = 0,
                d = g(e);
            t.forEach(function(t) {
                var u = d ? d.slice(c, t.startIndex).join("") : e.slice(c, t.startIndex);
                u && (s = n ? s.concat(v(u, l, r, a)) : s.concat(f(u, l, r))), s.push({
                    type: o.a.Emote,
                    content: i.__assign({
                        alt: d ? d.slice(t.startIndex, t.endIndex).join("") : e.slice(t.startIndex, t.endIndex)
                    }, t.data)
                }), c = t.endIndex
            });
            var u = d ? d.slice(c).join("") : e.slice(c);
            return u && (s = n ? s.concat(v(u, l, r, a)) : s.concat(f(u, l, r))), s
        }

        function g(e) {
            return e.match(/[^\uD800-\uDFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDFFF]/g)
        }

        function v(e, t, n, i) {
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
                d = e.split(/\s+/);
            return d.forEach(function(e, u) {
                i.lastIndex = 0;
                var p = i.exec(e);
                r.lastIndex = 0;
                var m = r.exec(e);
                if (p) {
                    var h = p.index;
                    0 !== h && s.push({
                        type: o.a.Text,
                        content: "" + e.slice(0, h)
                    });
                    var g = i.lastIndex;
                    if (n) s.push({
                        type: o.a.Text,
                        content: " <" + Object(a.d)("deleted link", "CreateMessageData") + "> "
                    });
                    else {
                        var v = (p[1] ? "" : "https://") + e.slice(h, g);
                        if (function(e) {
                                return void 0 === e && (e = ""), l.test(e) && !e.includes("clips.twitch.tv/2017/")
                            }(v)) {
                            var f = function(e) {
                                void 0 === e && (e = "");
                                var t = e.match(l);
                                return null === t ? "" : t && t.length > 0 && void 0 !== t.index ? t[1] : ""
                            }(v);
                            s.push({
                                type: o.a.ClipLink,
                                content: {
                                    slug: f,
                                    url: v,
                                    displayText: e.slice(h, g)
                                }
                            })
                        } else if (Object(c.a)(v)) {
                            var k = Object(c.b)(v);
                            s.push({
                                type: o.a.VideoLink,
                                content: {
                                    id: k,
                                    url: v,
                                    displayText: e.slice(h, g)
                                }
                            })
                        } else s.push({
                            type: o.a.Link,
                            content: {
                                displayText: e.slice(h, g),
                                url: v
                            }
                        })
                    }
                    var b = e.slice(g),
                        y = "";
                    u < d.length - 1 && (y = " "), b && s.push({
                        type: o.a.Text,
                        content: "" + b + y
                    })
                } else {
                    if (!m) {
                        var _ = s.length && s[s.length - 1];
                        y = "";
                        if (u < d.length - 1 && (y = " "), _ && _.type === o.a.Text) _.content += e + y;
                        else {
                            var S = "";
                            u && (S = " "), s.push({
                                type: o.a.Text,
                                content: S + e + y
                            })
                        }
                        return
                    }
                    var C = m[3];
                    s.push({
                        type: o.a.Mention,
                        content: {
                            sender: t,
                            recipient: C
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
            c = function(e) {
                var t = Date.now() / 1e3;
                e.badge_type = e.badge_type.toLowerCase().replace(/( |\s)/g, "_"), l.o.tracking.track(s.SpadeEventType.ChatBadgeClick, Object.assign({
                    client_time: t
                }, e))
            };
        n.d(t, "a", function() {
            return d
        });
        var d = function(e) {
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
                    c({
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
                }, l)), this.state.isHovering ? a.createElement(o._46, {
                    align: o._47.Left,
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
    nmYW: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "blockedUsers"
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
                            value: "blockedUsers"
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
                end: 56
            }
        };
        n.loc.source = {
            body: "fragment blockedUsers on User {\nid\nblockedUsers {\nid\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
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
            c = n("V5M+"),
            d = n("CSlQ"),
            u = n("Odds"),
            p = (n("oFw4"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleClose = function(e) {
                        t.props.closeModal(), t.props.onClose && t.props.onClose(e)
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(u._29, {
                        className: "reporting-modal__container",
                        background: u.m.Base,
                        padding: {
                            x: 2,
                            y: 3
                        }
                    }, r.createElement(i.b, {
                        onClose: this.handleClose,
                        reportContext: this.props.reportContext,
                        title: this.props.title,
                        defaultDescription: this.props.defaultDescription
                    }), r.createElement(s.a, null))
                }, t
            }(r.Component));
        var m = Object(l.d)(Object(d.d)("ReportUserModal"), Object(o.b)(null, function(e) {
            return Object(l.b)({
                closeModal: c.c
            }, e)
        }))(p);
        n.d(t, !1, function() {}), n.d(t, !1, function() {
            return i.c
        }), n.d(t, !1, function() {
            return i.a
        }), n.d(t, !1, function() {}), n.d(t, !1, function() {
            return i.b
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
        var c = Object(r.b)(function(e) {
            return {
                darkModeEnabled: Object(l.a)(e) === o.a.Dark
            }
        })(s);
        n.d(t, "a", function() {
            return c
        })
    },
    "r+Hw": function(e, t) {},
    rWzl: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "BlockUser"
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
                                value: "BlockUserInput"
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
                            value: "blockUser"
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
                                    value: "targetUser"
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
                end: 94
            }
        };
        n.loc.source = {
            body: "mutation BlockUser($input: BlockUserInput!) {\nblockUser(input: $input) {\ntargetUser {\nid\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    rqhk: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("GiK3"),
            r = n("kJau");

        function o(e) {
            return function(t) {
                return function(n) {
                    function l(t) {
                        var a = n.call(this, t) || this;
                        return a.messageHandlers = [], a.handlePlayerAdded = function() {
                            a.getPlayer() && !a.isConnected && (a.isConnected = !0, u.off(c, a.handlePlayerAdded), u.on(d, a.handlePlayerRemoved), window.addEventListener("message", a.onIncomingPlayerMessage))
                        }, a.handlePlayerRemoved = function() {
                            !a.getPlayer() && a.isConnected && (a.isConnected = !1, u.off(d, a.handlePlayerRemoved), u.on(c, a.handlePlayerAdded), window.removeEventListener("message", a.onIncomingPlayerMessage))
                        }, a.sendMessage = function(e) {
                            var t = a.getPlayer();
                            t && t.postMessage(e, r.a)
                        }, a.onIncomingPlayerMessage = function(e) {
                            e.origin === r.a && e.data.namespace === F && a.messageHandlers.forEach(function(t) {
                                t(e.data)
                            })
                        }, a.updatePlayerProps = function(t) {
                            if (e.requestedPlayerProps && (t.method === O || t.method === w)) {
                                var n = t.args[0],
                                    r = e.requestedPlayerProps.reduce(function(e, t) {
                                        var i = n[t];
                                        return void 0 !== i && a.state.playerProps[t] !== i && (e[t] = i), e
                                    }, {});
                                Object.keys(r).length && a.setState({
                                    playerProps: i.__assign({}, a.state.playerProps, r)
                                })
                            }
                        }, e.requestedPlayerProps && a.messageHandlers.push(a.updatePlayerProps), a.state = {
                            playerProps: {}
                        }, a
                    }
                    return i.__extends(l, n), l.prototype.componentWillMount = function() {
                        u.on(c, this.handlePlayerAdded)
                    }, l.prototype.componentWillUnmount = function() {
                        u.off(c, this.handlePlayerAdded), u.off(d, this.handlePlayerRemoved)
                    }, l.prototype.render = function() {
                        var e = {
                            playerConnection: {
                                sendMessage: this.sendMessage,
                                registerMessageHandler: this.registerMessageHandler,
                                playerProps: this.state.playerProps
                            }
                        };
                        return a.createElement(t, i.__assign({}, this.props, e))
                    }, l.prototype.getPlayer = function() {
                        return s[e.playerId(this.props)]
                    }, l.prototype.registerMessageHandler = function(e) {
                        this.messageHandlers.push(e)
                    }, l.displayName = o.name + "(" + (t.displayName || t.name) + ")", l
                }(a.Component)
            }
        }
        var l = n("BzvE"),
            s = {},
            c = "player-storage-added",
            d = "player-storage-removed",
            u = new l.EventEmitter;

        function p(e, t) {
            s[e] = t, u.emit(c)
        }

        function m(e) {
            delete s[e], u.emit(d)
        }

        function h(e) {
            return {
                args: [void 0 === e.arg ? {} : e.arg],
                method: e.method,
                namespace: void 0 === e.namespace ? T : e.namespace
            }
        }

        function g() {
            return h({
                method: "pause"
            })
        }

        function v() {
            return h({
                method: "play"
            })
        }

        function f(e) {
            return h({
                method: "closeModeration",
                arg: e
            })
        }

        function k() {
            return h({
                method: C
            })
        }

        function b(e) {
            return h({
                method: E,
                arg: e
            })
        }

        function y(e) {
            return h({
                method: N,
                arg: e
            })
        }

        function _() {
            return h({
                method: "fullscreen",
                arg: !1
            })
        }

        function S(e) {
            return h({
                method: "setEditClip",
                arg: e
            })
        }
        var C = "subscribe",
            N = "setclip",
            E = "setAutoplay",
            O = "bridgestateupdate",
            w = "bridgestorestateupdate",
            T = "player.embed.host",
            F = "player.embed.client";
        n.d(t, "t", function() {
            return o
        }), n.d(t, "p", function() {
            return s
        }), n.d(t, "n", function() {
            return c
        }), n.d(t, "o", function() {
            return d
        }), n.d(t, "i", function() {
            return u
        }), n.d(t, "s", function() {
            return p
        }), n.d(t, "q", function() {
            return m
        }), n.d(t, !1, function() {
            return h
        }), n.d(t, !1, function() {
            return g
        }), n.d(t, !1, function() {
            return v
        }), n.d(t, "h", function() {
            return f
        }), n.d(t, "m", function() {
            return k
        }), n.d(t, "k", function() {
            return b
        }), n.d(t, "l", function() {
            return y
        }), n.d(t, "j", function() {
            return _
        }), n.d(t, "r", function() {
            return S
        }), n.d(t, "g", function() {
            return C
        }), n.d(t, "f", function() {
            return N
        }), n.d(t, "e", function() {
            return E
        }), n.d(t, "c", function() {
            return O
        }), n.d(t, "d", function() {
            return w
        }), n.d(t, "b", function() {
            return T
        }), n.d(t, "a", function() {
            return F
        }), n.d(t, !1, function() {
            return "report"
        }), n.d(t, !1, function() {
            return "delete"
        }), n.d(t, !1, function() {
            return "deleteAll"
        })
    },
    sEID: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return s
        }), n.d(t, "a", function() {
            return c
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
            c = function(e) {
                return i.createElement(l._6, {
                    className: "clips-social-share",
                    display: l.P.Flex,
                    flexWrap: l.S.NoWrap
                }, s.map(function(t) {
                    return i.createElement(l._6, {
                        key: t.type,
                        margin: {
                            right: 1
                        }
                    }, i.createElement(a.a, {
                        key: t.type,
                        type: t.type,
                        text: e.clip.title,
                        url: Object(r.a)(e.clip.url, t.params),
                        onShareClick: Object(o.c)(e.clip, e.pageType)
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
            c = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderSuccess = function() {
                        return t.props.successContent ? a.createElement(l._29, {
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
                            type: l._43.Strong
                        }, t.props.successContent)) : null
                    }, t.renderError = function() {
                        return t.props.errorContent ? a.createElement(l._29, {
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
                            type: l._43.Strong,
                            color: l.J.Error
                        }, t.props.errorContent)) : null
                    }, t.onSubmit = function() {
                        t.props.onSubmit()
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return this.props.successContent ? a.createElement(o.a, {
                        onClickOut: this.props.onClose
                    }, a.createElement(l._29, {
                        padding: 2,
                        background: l.m.Base,
                        className: "clip-modal"
                    }, this.renderSuccess(), a.createElement(l._6, {
                        display: l.P.Flex,
                        justifyContent: l._5.Center
                    }, a.createElement(l._6, {
                        margin: {
                            x: 1
                        }
                    }, a.createElement(l.u, {
                        "data-test-selector": s.CANCEL_BUTTON,
                        onClick: this.props.onClose
                    }, Object(r.d)("Close", "ClipsModal")))))) : a.createElement(o.a, {
                        onClickOut: this.props.onClose
                    }, a.createElement(l._29, {
                        padding: 2,
                        background: l.m.Base,
                        className: "clip-modal"
                    }, a.createElement(l._29, {
                        "data-test-selector": s.TITLE,
                        borderBottom: !0,
                        margin: {
                            bottom: 2
                        },
                        padding: {
                            bottom: 1
                        }
                    }, this.props.title), a.createElement(l._29, {
                        "data-test-selector": s.MAIN_BODY,
                        borderBottom: !0,
                        margin: {
                            bottom: 2
                        },
                        padding: {
                            bottom: 2
                        }
                    }, this.renderError(), this.props.body), a.createElement(l._6, {
                        display: l.P.Flex,
                        justifyContent: l._5.Center
                    }, a.createElement(l._6, {
                        margin: {
                            x: 1
                        }
                    }, a.createElement(l.u, {
                        "data-test-selector": s.CANCEL_BUTTON,
                        type: l.A.Text,
                        onClick: this.props.onClose
                    }, Object(r.d)("Cancel", "ClipsModal"))), a.createElement(l._6, {
                        margin: {
                            x: 1
                        }
                    }, a.createElement(l.u, {
                        "data-test-selector": s.SUBMIT_BUTTON,
                        type: this.props.buttonType ? this.props.buttonType : l.A.Default,
                        onClick: this.onSubmit,
                        disabled: this.props.submitDisabled
                    }, this.props.buttonContent), this.props.isLoading && a.createElement(l._8, {
                        delay: 0
                    })))))
                }, t
            }(a.Component),
            d = n("1OO3"),
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
                            type: l._43.H5,
                            ellipsis: !0
                        }, Object(r.d)("Timeout this Clip Creator for 24 hours from Your Channel", "ClipsModalBanUser")) : a.createElement(l.O, {
                            type: l._43.H5,
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
                    return a.createElement(c, {
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
            h = Object(u.d)("ClipsModalBanUser")(Object(d.b)(function(e) {
                return {
                    channelID: e.broadcasterID
                }
            })(m)),
            g = n("7vx8"),
            v = n("wnjK");

        function f(e) {
            return Object(g.a)(v, e)
        }
        var k = n("LnKh"),
            b = (n("lTii"), this),
            y = {
                isLoading: !1,
                hasErrored: !1,
                hasSucceeded: !1
            },
            _ = function(e) {
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
                    }, n.state = y, n
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = [a.createElement(l.O, {
                        key: "title",
                        type: l._43.H4
                    }, Object(r.d)("Delete This Clip", "ClipsModalDelete")), a.createElement(l._6, {
                        key: "message",
                        margin: {
                            top: 1
                        }
                    }, a.createElement(l.O, {
                        type: l._43.P,
                        color: l.J.Alt2
                    }, Object(r.d)("This clip will be permanently deleted.", "ClipsModalDelete")))];
                    if (!this.props.data.clip) return null;
                    var t = null;
                    this.props.data.clip.curator && (t = a.createElement("span", null, " • ", Object(r.d)("Clipped by {curator}", {
                        curator: this.props.data.clip.curator.login
                    }, "ClipsModalDelete")));
                    var n = a.createElement(l._29, {
                        display: l.P.Flex,
                        flexWrap: l.S.NoWrap
                    }, a.createElement(l._6, {
                        className: "clips-modal-delete__thumb",
                        margin: {
                            right: 1
                        }
                    }, a.createElement(l.j, {
                        ratio: l.k.Aspect16x9
                    }, a.createElement("img", {
                        src: this.props.data.clip.thumbnailURL
                    }))), a.createElement(l._6, null, a.createElement(l.O, {
                        type: l._43.H5
                    }, this.props.data.clip.title), a.createElement(l.O, {
                        color: l.J.Alt2
                    }, Object(r.d)("{created, date, medium}", {
                        created: new Date(this.props.data.clip.createdAt)
                    }, "ClipsModalDelete"), t), a.createElement(l.O, {
                        color: l.J.Alt2
                    }, Object(r.d)("{viewCount, number} views", {
                        viewCount: this.props.data.clip.viewCount
                    }, "ClipsModalDelete"))));
                    return a.createElement(c, {
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
            S = Object(g.a)(k)(f({
                props: function(e) {
                    return {
                        deleteClip: function(t) {
                            return i.__awaiter(b, void 0, void 0, function() {
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
            })(_)),
            C = n("3zLD"),
            N = n("wqRA"),
            E = this,
            O = {
                isLoading: !1,
                hasErrored: !1,
                hasSucceeded: !1
            },
            w = function(e) {
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
                    }, n.state = O, n
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = a.createElement(l.O, {
                        type: l._43.P
                    }, Object(r.d)("This clip and all other clips created from the same video will be permanently deleted.", "ClipsModalDeleteAll"));
                    return a.createElement(c, {
                        onSubmit: this.deleteAll,
                        onClose: this.props.onClose,
                        title: a.createElement(l.O, {
                            type: l._43.H4
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
            T = Object(C.compose)(Object(u.d)("ClipsModalDeleteAll"), f({
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
            }))(w),
            F = this,
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
                            type: l._43.H4
                        }, Object(r.d)("Delete these clips?", "ClipsModalBatchDelete")),
                        t = a.createElement(l.O, {
                            type: l._43.P
                        }, Object(r.d)("These clips will be permanently deleted. Are you sure?", "ClipsModalBatchDelete"));
                    return a.createElement(c, {
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
                            return i.__awaiter(F, void 0, void 0, function() {
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
            return c
        }), n.d(t, "b", function() {
            return h
        }), n.d(t, "d", function() {
            return S
        }), n.d(t, "e", function() {
            return T
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
                                    value: "displayName"
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
                end: 429
            }
        };
        n.loc.source = {
            body: "fragment recommendedClip on Clip {\nid\ntitle\nthumbnailURL\nslug\nbroadcaster {\nid\ndisplayName\nlogin\n}\ngame {\nid\ndisplayName\nname\n}\nviewCount\n}\nquery ClipsRecommendations($slug: ID!) {\nclip(slug: $slug) {\nid\nslug\ngame {\nid\nname\ndisplayName\n}\nbroadcaster {\nid\nlogin\ndisplayName\n}\nvideo {\nid\n}\nrelatedClips {\nsimilar {\n...recommendedClip\n}\nbroadcaster {\n...recommendedClip\n}\ngame {\n...recommendedClip\n}\ntop {\n...recommendedClip\n}\n}\n}\n}",
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
    u8SD: function(e, t, n) {
        "use strict";
        t.a = function() {
            var e = this;
            return Object(a.a)(l, {
                props: function(t) {
                    return {
                        blockUserMutation: function(n, a, l, s) {
                            return i.__awaiter(e, void 0, void 0, function() {
                                return i.__generator(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return t.mutate ? [4, t.mutate({
                                                variables: {
                                                    input: {
                                                        targetUserID: n,
                                                        sourceContext: l,
                                                        reason: a
                                                    }
                                                },
                                                optimisticResponse: {
                                                    blockUser: {
                                                        __typename: "BlockUserPayload",
                                                        targetUser: {
                                                            __typename: "User",
                                                            id: n
                                                        }
                                                    }
                                                },
                                                update: function(e) {
                                                    var t = e.readFragment({
                                                        id: Object(o.a)(s),
                                                        fragment: r
                                                    });
                                                    t && (t.blockedUsers.push({
                                                        id: n,
                                                        __typename: "User"
                                                    }), e.writeFragment({
                                                        id: Object(o.a)(s),
                                                        fragment: r,
                                                        data: t
                                                    }))
                                                }
                                            })] : [3, 2];
                                        case 1:
                                            return e.sent(), [3, 3];
                                        case 2:
                                            throw new Error("blockUserMutation is not ready");
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        }
                    }
                }
            })
        };
        var i = n("TToO"),
            a = n("7vx8"),
            r = n("nmYW"),
            o = (n.n(r), n("yADj")),
            l = n("rWzl");
        n.n(l)
    },
    vtXo: function(e, t) {},
    vwd7: function(e, t, n) {
        "use strict";
        var i, a = n("TToO"),
            r = n("GiK3"),
            o = n("CSlQ"),
            l = n("rqhk"),
            s = n("kJau"),
            c = n("icZh"),
            d = n("46tX"),
            u = n("Odds");
        n("vtXo");
        ! function(e) {
            e.Viewing = "clips-viewing", e.Editing = "clips-editing"
        }(i || (i = {}));
        var p = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                n.hasSetPlayerRef = !1, n.setInitialSlug = function(e) {
                    n.state.initialSlug || (n.setState({
                        initialSlug: e
                    }), Object(c.b)(e))
                }, n.setPlayerRef = function(e) {
                    n.playerRef = e
                }, n.setIsLoaded = function() {
                    n.setState({
                        isLoaded: !0
                    }), n.props.onLoaded && n.props.onLoaded()
                };
                var i = n.props.slug;
                return n.state = {
                    initialSlug: i,
                    isLoaded: !1
                }, i && Object(c.b)(i), n
            }
            return a.__extends(t, e), t.prototype.componentDidMount = function() {
                this.setInitialSlug(this.props.slug)
            }, t.prototype.componentWillReceiveProps = function(e) {
                this.state.initialSlug || this.setInitialSlug(e.slug), this.props.slug !== e.slug && e.slug && this.setClip(e.slug)
            }, t.prototype.componentWillUnmount = function() {
                Object(l.q)(this.props.slug)
            }, t.prototype.componentDidUpdate = function() {
                !this.hasSetPlayerRef && this.playerRef && (this.hasSetPlayerRef = !0, Object(l.s)(this.props.slug, this.playerRef.contentWindow), this.playerRef.contentWindow.postMessage(Object(l.m)(), s.a))
            }, t.prototype.render = function() {
                return this.state.initialSlug ? r.createElement(u._29, {
                    className: "clips-video-iframe",
                    position: u._13.Relative,
                    fullWidth: !0,
                    fullHeight: !0
                }, r.createElement(u._29, {
                    display: this.state.isLoaded ? u.P.Hide : u.P.Flex,
                    color: u.J.Overlay,
                    alignItems: u.c.Center,
                    justifyContent: u._5.Center,
                    position: u._13.Absolute,
                    fullHeight: !0,
                    fullWidth: !0
                }, r.createElement(u._8, {
                    size: u._27.Large,
                    inheritColor: !0
                })), r.createElement(u._0, {
                    display: this.state.isLoaded ? u.P.Block : u.P.HideAccessible,
                    position: u._13.Absolute,
                    fullHeight: !0,
                    fullWidth: !0
                }, r.createElement("iframe", {
                    src: s.a + "/?player=" + this.props.playerType + "&clip=" + this.state.initialSlug + "&origin=" + window.location.origin + "&branding=false&externalfullscreen=" + !Object(d.c)(navigator.userAgent),
                    frameBorder: "0",
                    scrolling: "no",
                    allowFullScreen: !0,
                    ref: this.setPlayerRef,
                    onLoad: this.setIsLoaded
                }))) : null
            }, t.prototype.setClip = function(e) {
                this.playerRef && (this.playerRef.contentWindow.postMessage(Object(l.l)(e), s.a), Object(c.b)(e))
            }, t = a.__decorate([Object(o.d)("ClipsVideoIframe", {
                autoReportInteractive: !0
            })], t)
        }(r.Component);
        n.d(t, "a", function() {
            return i
        }), n.d(t, "b", function() {
            return p
        })
    },
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
                    return a.createElement(r._2, {
                        readOnly: !0,
                        type: r._3.Text,
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
    yADj: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            return e && Object(i.c)(e) || ""
        };
        var i = n("+dIz")
    },
    zU1d: function(e, t) {}
});
//# sourceMappingURL=sites.clips.pages.view-eecd72895fdcafb5fc45b77dee77a60c.js.map