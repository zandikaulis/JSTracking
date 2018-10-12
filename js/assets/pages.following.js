(window.webpackJsonp = window.webpackJsonp || []).push([
    [61], {
        "+U0Y": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            }), n.d(t, "b", function() {
                return a
            });
            var i = "core.user-preferences.LANGUAGE_PREFERENCES_UPDATED";

            function a(e) {
                return {
                    type: i,
                    languagePreferences: e
                }
            }
        },
        "0INk": function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return l
            }), n.d(t, "c", function() {
                return d
            }), n.d(t, "a", function() {
                return c
            });
            var i = n("mrSG"),
                a = n("/7QA"),
                r = n("2xye"),
                o = n("gAd6"),
                s = function() {
                    var e = a.n.getLastPageview();
                    return e && e.location || r.PageviewLocation.None
                },
                l = function(e) {
                    a.n.trackItemSectionClick({
                        carousel_content: r.PageviewContent.Video,
                        channel_id: e.broadcasterID || "0",
                        channel: e.channelLogin || "unknown",
                        content: r.PageviewContent.PreviewCardGameName,
                        item_index: e.contentIndex,
                        medium: e.pageviewMedium,
                        item_id: e.videoID,
                        item_type: r.TwitchDataType.Video,
                        item_viewcount: null,
                        location: s()
                    })
                },
                d = function(e) {
                    a.n.trackItemSectionClick({
                        carousel_content: r.PageviewContent.PreviewCardGameBalloonGame,
                        channel_id: e.broadcasterID || "0",
                        channel: e.channelLogin || "unknown",
                        content: r.PageviewContent.PreviewCardGameBalloonGame,
                        item_index: e.contentIndex,
                        medium: e.pageviewMedium,
                        item_id: e.videoID,
                        item_type: r.TwitchDataType.Video,
                        item_viewcount: null,
                        location: s()
                    })
                },
                c = function(e) {
                    return i.__awaiter(void 0, void 0, void 0, function() {
                        var t, n, l, d, c, u = this;
                        return i.__generator(this, function(m) {
                            switch (m.label) {
                                case 0:
                                    return m.trys.push([0, 2, , 3]), t = e.map(function(e) {
                                        return i.__awaiter(u, void 0, void 0, function() {
                                            var t;
                                            return i.__generator(this, function(n) {
                                                switch (n.label) {
                                                    case 0:
                                                        return [4, a.o.apollo.client.query({
                                                            query: o,
                                                            variables: {
                                                                name: e
                                                            }
                                                        })];
                                                    case 1:
                                                        return [2, (t = n.sent().data).game && t.game.id]
                                                }
                                            })
                                        })
                                    }), [4, Promise.all(t)];
                                case 1:
                                    return n = m.sent(), l = n.filter(function(e) {
                                        return !!e
                                    }), d = l.map(function() {
                                        return r.TwitchDataType.Game
                                    }), c = l.map(function() {
                                        return null
                                    }), a.n.trackItemSectionLoad({
                                        carousel_content: r.PageviewContent.PreviewCardGameBalloonGame,
                                        rendered_item_count: l.length,
                                        rendered_item_list: l,
                                        rendered_item_types: d,
                                        rendered_items_viewcounts: c,
                                        location: s()
                                    }), [3, 3];
                                case 2:
                                    return m.sent(), [3, 3];
                                case 3:
                                    return [2]
                            }
                        })
                    })
                }
        },
        "0Rl0": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            });
            var i = n("q1tI"),
                a = n("Ue10"),
                r = function() {
                    return i.createElement(a.G, null, i.createElement(a.o, {
                        ratio: a.p.Aspect16x9
                    }, i.createElement(a.cb, null)), i.createElement(a.H, null, i.createElement(a.Va, {
                        display: a.W.Flex,
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(a.Va, {
                        display: a.W.InlineBlock,
                        margin: {
                            top: 1,
                            right: 1
                        }
                    }, i.createElement(a.cb, {
                        width: 40,
                        height: 56
                    })), i.createElement(a.Va, {
                        display: a.W.InlineBlock,
                        margin: {
                            top: 1
                        }
                    }, i.createElement(a.V, null, i.createElement(a.cb, {
                        width: 150
                    })), i.createElement(a.V, {
                        fontSize: a.Aa.Size7
                    }, i.createElement(a.cb, {
                        width: 100
                    }))))))
                }
        },
        "0T/G": function(e, t) {},
        "1ka0": function(e, t, n) {
            var i = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "SuggestedVideos_CurrentUser"
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
                                        value: "recommendations"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "videos"
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
                                                                    kind: "FragmentSpread",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "PreviewCardVideo"
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
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 240
                }
            };
            i.loc.source = {
                body: '#import "twilight/features/video-preview-card/models/preview-card-video-fragment.gql"\nquery SuggestedVideos_CurrentUser($limit: Int) {\ncurrentUser {\nid\nrecommendations {\nvideos(first: $limit) {\nedges {\nnode {\n...PreviewCardVideo\n}\n}\n}\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var a = {};
            i.definitions = i.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !a[t] && (a[t] = !0, !0)
                })
            }(n("he03").definitions)), e.exports = i
        },
        "1mcJ": function(e, t, n) {},
        "3sMy": function(e, t, n) {
            "use strict";
            var i;
            n.d(t, "a", function() {
                    return i
                }),
                function(e) {
                    e.GreatNewClipsYouMayHaveMissed = "GreatNewClipsYouMayHaveMissed", e.PopularClips = "PopularClips", e.PopularVideos = "PopularVideos", e.RecommendedBecauseYouWatchX = "RecommendedBecauseYouWatchX", e.RecommendedBecauseYouFollowX = "RecommendedBecauseYouFollowX", e.TopChannelsPlayingGame = "TopChannelsPlayingGame", e.TopGames = "TopGames", e.TopGamesForYou = "TopGamesForYou", e.TopLiveChannels = "TopLiveChannels", e.TopLiveChannelsYouMayLike = "TopLiveChannelsYouMayLike", e.TopNewVideosYouMayHaveMissed = "TopNewVideosYouMayHaveMissed"
                }(i || (i = {}))
        },
        "45mq": function(e, t, n) {
            var i = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "FollowedIndex_CurrentUser"
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
                                value: "isTagsExperiment"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Boolean"
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
                                                        value: "tags"
                                                    },
                                                    arguments: [{
                                                        kind: "Argument",
                                                        name: {
                                                            kind: "Name",
                                                            value: "tagType"
                                                        },
                                                        value: {
                                                            kind: "EnumValue",
                                                            value: "CONTENT"
                                                        }
                                                    }],
                                                    directives: [{
                                                        kind: "Directive",
                                                        name: {
                                                            kind: "Name",
                                                            value: "include"
                                                        },
                                                        arguments: [{
                                                            kind: "Argument",
                                                            name: {
                                                                kind: "Name",
                                                                value: "if"
                                                            },
                                                            value: {
                                                                kind: "Variable",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "isTagsExperiment"
                                                                }
                                                            }
                                                        }]
                                                    }],
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [{
                                                            kind: "FragmentSpread",
                                                            name: {
                                                                kind: "Name",
                                                                value: "tagFragment"
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
                                        value: "followedLiveUsers"
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
                                                            value: "50"
                                                        }
                                                    }],
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
                                                                            value: "40"
                                                                        }
                                                                    }, {
                                                                        kind: "Argument",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "height"
                                                                        },
                                                                        value: {
                                                                            kind: "IntValue",
                                                                            value: "56"
                                                                        }
                                                                    }],
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
                                                                value: "title"
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
                                                                    value: "320"
                                                                }
                                                            }, {
                                                                kind: "Argument",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "height"
                                                                },
                                                                value: {
                                                                    kind: "IntValue",
                                                                    value: "180"
                                                                }
                                                            }],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "tags"
                                                            },
                                                            arguments: [],
                                                            directives: [{
                                                                kind: "Directive",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "include"
                                                                },
                                                                arguments: [{
                                                                    kind: "Argument",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "if"
                                                                    },
                                                                    value: {
                                                                        kind: "Variable",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "isTagsExperiment"
                                                                        }
                                                                    }
                                                                }]
                                                            }],
                                                            selectionSet: {
                                                                kind: "SelectionSet",
                                                                selections: [{
                                                                    kind: "FragmentSpread",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "broadcastTagFragment"
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
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "followedHosts"
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
                                                                    value: "50"
                                                                }
                                                            }],
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
                                                                                    value: "40"
                                                                                }
                                                                            }, {
                                                                                kind: "Argument",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "height"
                                                                                },
                                                                                value: {
                                                                                    kind: "IntValue",
                                                                                    value: "56"
                                                                                }
                                                                            }],
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
                                                                        value: "title"
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
                                                                            value: "320"
                                                                        }
                                                                    }, {
                                                                        kind: "Argument",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "height"
                                                                        },
                                                                        value: {
                                                                            kind: "IntValue",
                                                                            value: "180"
                                                                        }
                                                                    }],
                                                                    directives: []
                                                                }, {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "tags"
                                                                    },
                                                                    arguments: [],
                                                                    directives: [{
                                                                        kind: "Directive",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "include"
                                                                        },
                                                                        arguments: [{
                                                                            kind: "Argument",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "if"
                                                                            },
                                                                            value: {
                                                                                kind: "Variable",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "isTagsExperiment"
                                                                                }
                                                                            }
                                                                        }]
                                                                    }],
                                                                    selectionSet: {
                                                                        kind: "SelectionSet",
                                                                        selections: [{
                                                                            kind: "FragmentSpread",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "broadcastTagFragment"
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
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "followedCommunities"
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
                                                                value: "avatarURL"
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
                                                                value: "broadcastersCount"
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
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "follows"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "totalCount"
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
                    end: 1160
                }
            };
            i.loc.source = {
                body: '#import "twilight/features/tags/models/tag-fragment.gql"\n#import "twilight/features/tags/models/broadcast-tag-fragment.gql"\nquery FollowedIndex_CurrentUser($limit: Int $isTagsExperiment: Boolean!) {\ncurrentUser {\nid\nfollowedGames(first: $limit) {\nnodes {\nid\nname\nboxArtURL(width: 285 height: 380)\nviewersCount\ntags(tagType: CONTENT) @include(if: $isTagsExperiment) {\n...tagFragment\n}\n}\n}\nfollowedLiveUsers(first: $limit) {\nnodes {\nid\nlogin\ndisplayName\nprofileImageURL(width: 50)\nstream {\nid\ngame {\nid\nname\nboxArtURL(width: 40 height: 56)\n}\nviewersCount\ntitle\ntype\npreviewImageURL(width: 320 height: 180)\ntags @include(if: $isTagsExperiment) {\n...broadcastTagFragment\n}\n}\n}\n}\nfollowedHosts(first: $limit) {\nnodes {\nid\nlogin\ndisplayName\nhosting {\nid\nlogin\ndisplayName\nprofileImageURL(width: 50)\nstream {\nid\ngame {\nid\nname\nboxArtURL(width: 40 height: 56)\n}\nviewersCount\ntitle\ntype\npreviewImageURL(width: 320 height: 180)\ntags @include(if: $isTagsExperiment) {\n...broadcastTagFragment\n}\n}\n}\n}\n}\nfollowedCommunities(first: $limit) {\nedges {\nnode {\nid\navatarURL(width: 285 height: 380)\nviewersCount\ndisplayName\nbroadcastersCount\nname\n}\n}\n}\nfollows {\ntotalCount\n}\n}\n}',
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
            i.definitions = i.definitions.concat(r(n("iiOx").definitions)), i.definitions = i.definitions.concat(r(n("Iqxx").definitions)), e.exports = i
        },
        "4ErZ": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "FollowGameCard_FollowGame"
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
                                    value: "FollowGameInput"
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
                                value: "followGame"
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
                                                                value: "followedAt"
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
                    end: 134
                }
            };
            n.loc.source = {
                body: "mutation FollowGameCard_FollowGame($input: FollowGameInput!) {\nfollowGame(input: $input) {\ngame {\nself {\nfollow {\nfollowedAt\n}\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "5NSO": function(e, t, n) {},
        "5cmV": function(e, t, n) {},
        "5myU": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            });
            var i = 10;

            function a(e, t, n) {
                if (void 0 === n && (n = 1), !t || !e) return -1;
                var a = window.getComputedStyle(document.documentElement).fontSize || i.toString(),
                    r = parseFloat(a) / i;
                return Math.floor(e / (t * r)) * n
            }
        },
        "5xw2": function(e, t, n) {
            "use strict";
            n.d(t, "c", function() {
                return l
            }), n.d(t, "a", function() {
                return d
            }), n.d(t, "b", function() {
                return c
            });
            var i = n("mrSG"),
                a = n("/7QA"),
                r = n("HSqT"),
                o = n("+U0Y"),
                s = "languageDirectoryFilters";

            function l(e, t) {
                var n = this;
                return function(r) {
                    return i.__awaiter(n, void 0, void 0, function() {
                        var n, l;
                        return i.__generator(this, function(i) {
                            return n = new Set(c()), t ? n.add(e) : n.delete(e), l = Array.from(n), a.l.set(s, l), r(Object(o.b)(l)), [2]
                        })
                    })
                }
            }

            function d() {
                var e = this;
                return function(t) {
                    return i.__awaiter(e, void 0, void 0, function() {
                        return i.__generator(this, function(e) {
                            return a.l.set(s, []), t(Object(o.b)([])), [2]
                        })
                    })
                }
            }

            function c() {
                return a.l.get(s, []).filter(function(e) {
                    return r.a.has(e)
                })
            }
        },
        "5zf8": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            }), n.d(t, "b", function() {
                return l
            });
            var i, a, r = n("/7QA");

            function o(e, t) {
                switch (e) {
                    case i.Second:
                        return Object(r.d)("{secondCount, plural, one {# second} other {# seconds}}", {
                            secondCount: t
                        }, "formatDuration");
                    case i.Minute:
                        return Object(r.d)("{minuteCount, plural, one {# minute} other {# minutes}}", {
                            minuteCount: t
                        }, "formatDuration");
                    case i.Hour:
                        return Object(r.d)("{hourCount, plural, one {# hour} other {# hours}}", {
                            hourCount: t
                        }, "formatDuration");
                    case i.Day:
                        return Object(r.d)("{dayCount, plural, one {# day} other {# days}}", {
                            dayCount: t
                        }, "formatDuration");
                    case i.Week:
                        return Object(r.d)("{weekCount, plural, one {# week} other {# weeks}}", {
                            weekCount: t
                        }, "formatDuration");
                    case i.Month:
                        return Object(r.d)("{monthCount, plural, one {# month} other {# months}}", {
                            monthCount: t
                        }, "formatDuration");
                    default:
                        return ""
                }
            }

            function s(e, t) {
                switch (e) {
                    case i.Second:
                        return Object(r.d)("{secondCount}s", {
                            secondCount: t
                        }, "formatDuration");
                    case i.Minute:
                        return Object(r.d)("{minuteCount}m", {
                            minuteCount: t
                        }, "formatDuration");
                    case i.Hour:
                        return Object(r.d)("{hourCount}h", {
                            hourCount: t
                        }, "formatDuration");
                    case i.Day:
                        return Object(r.d)("{dayCount}d", {
                            dayCount: t
                        }, "formatDuration");
                    case i.Week:
                        return Object(r.d)("{weekCount}w", {
                            weekCount: t
                        }, "formatDuration");
                    case i.Month:
                        return Object(r.d)("{monthCount}mo", {
                            monthCount: t
                        }, "formatDuration");
                    default:
                        return ""
                }
            }

            function l(e, t) {
                var n;
                switch (void 0 === t && (t = a.Humanized), t === a.ClockAuto && (t = e >= 3600 ? a.ClockHMS : a.ClockMS), t) {
                    case a.ClockHM:
                    case a.ClockHMS:
                        n = i.Hour;
                        break;
                    case a.ClockMS:
                        n = i.Minute
                }
                var l = 2;
                t === a.ClockHMS && (l = 3);
                var c = function(e, t) {
                        void 0 === t && (t = i.Month);
                        var n = {};
                        return n.seconds = e, e < 60 || t === i.Second ? n : (n.minutes = Math.floor(e / 60), n.seconds = e % 60, n.minutes < 60 || t === i.Minute ? n : (n.hours = Math.floor(n.minutes / 60), n.minutes = n.minutes % 60, n.hours < 24 || t === i.Hour ? n : (n.days = Math.floor(n.hours / 24), n.hours = n.hours % 24, n.days < 7 || t === i.Day ? n : n.days <= 26 || t === i.Week ? (n.weeks = Math.floor(n.days / 7), n.days = n.days % 7, n) : (n.months = Math.round((n.days + 3) / 30), n))))
                    }(e, n),
                    u = Object.keys(c);
                if (u.forEach(function(e, n) {
                        t !== a.Humanized && t !== a.HumanizedShort || c[e] || delete c[e], n < u.length - l && delete c[e]
                    }), t === a.Humanized) return function(e) {
                    return e.months ? o(i.Month, e.months) : e.weeks && e.days ? o(i.Week, e.weeks) + " " + o(i.Day, e.days) : e.weeks ? o(i.Week, e.weeks) : e.days && e.hours ? o(i.Day, e.days) + " " + o(i.Hour, e.hours) : e.days ? o(i.Day, e.days) : e.hours && e.minutes ? o(i.Hour, e.hours) + " " + o(i.Minute, e.minutes) : e.hours ? o(i.Hour, e.hours) : e.minutes && e.seconds ? o(i.Minute, e.minutes) + " " + o(i.Second, e.seconds) : e.minutes ? o(i.Minute, e.minutes) : o(i.Second, e.seconds || 0)
                }(c);
                if (t === a.HumanizedShort) return function(e) {
                    return e.months ? s(i.Month, e.months) : e.weeks && e.days ? "" + s(i.Week, e.weeks) + s(i.Day, e.days) : e.weeks ? s(i.Week, e.weeks) : e.days && e.hours ? "" + s(i.Day, e.days) + s(i.Hour, e.hours) : e.days ? s(i.Day, e.days) : e.hours && e.minutes ? "" + s(i.Hour, e.hours) + s(i.Minute, e.minutes) : e.hours ? s(i.Hour, e.hours) : e.minutes && e.seconds ? "" + s(i.Minute, e.minutes) + s(i.Second, e.seconds) : e.minutes ? s(i.Minute, e.minutes) : s(i.Second, e.seconds || 0)
                }(c);
                var m = ":",
                    p = !1;
                switch (r.o.intl.getLanguageCode()) {
                    case "cy":
                    case "da":
                    case "fi":
                    case "id":
                    case "nb":
                    case "si":
                        m = ".";
                        break;
                    case "af":
                    case "fr":
                    case "lt":
                        p = !0
                }
                var g = c.seconds || 0,
                    h = c.minutes || 0,
                    v = c.hours || 0;
                switch (t) {
                    case a.ClockHM:
                    case a.ClockHMS:
                        var f = (p ? d(v, 2) : v) + m + d(h, 2);
                        return t === a.ClockHMS && (f += m + d(g, 2)), f;
                    case a.ClockMS:
                        return (p ? d(h, 2) : h) + m + d(g, 2)
                }
            }

            function d(e, t) {
                var n = e.toString();
                return n.length < t ? "0".repeat(t - n.length) + n : n
            }! function(e) {
                e[e.Second = 0] = "Second", e[e.Minute = 1] = "Minute", e[e.Hour = 2] = "Hour", e[e.Day = 3] = "Day", e[e.Week = 4] = "Week", e[e.Month = 5] = "Month"
            }(i || (i = {})),
            function(e) {
                e[e.Humanized = 0] = "Humanized", e[e.HumanizedShort = 1] = "HumanizedShort", e[e.ClockAuto = 2] = "ClockAuto", e[e.ClockHM = 3] = "ClockHM", e[e.ClockMS = 4] = "ClockMS", e[e.ClockHMS = 5] = "ClockHMS"
            }(a || (a = {}))
        },
        "6H22": function(e, t, n) {
            e.exports = n.p + "assets/overwatch-chars-fe0fc1dca7ed645de58c.png"
        },
        "7I5b": function(e, t, n) {},
        "7sjZ": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            });
            var i = n("rShu"),
                a = function(e) {
                    return e === i.a.Communities ? "COMMUNITY" : "GAME"
                }
        },
        "80G/": function(e, t, n) {},
        "86FS": function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                a = n("q1tI"),
                r = n("H1ft"),
                o = n("SWMh"),
                s = n("cr+I"),
                l = n("/7QA"),
                d = n("GFmA"),
                c = n("0INk"),
                u = n("yWUM"),
                m = n("vRsq"),
                p = n("2xye"),
                g = n("3W+h"),
                h = n("GnwI"),
                v = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onClickHandler = function() {
                            t.props.onClick && t.props.onClick(t.props.tracking.content_index)
                        }, t.gameChangesWithLinks = function() {
                            return t.props.videoGameChanges.map(function(e) {
                                var n = {
                                    t: Object(u.a)(e.offset)
                                };
                                return t.props.collectionID && (n.collection = t.props.collectionID), i.__assign({}, e, {
                                    linkTo: {
                                        pathname: "/videos/" + t.props.video.id,
                                        search: s.stringify(n),
                                        state: {
                                            content: p.PageviewContent.PreviewCardGameBalloonGame,
                                            medium: t.props.tracking.medium
                                        }
                                    }
                                })
                            })
                        }, t.trackVideoGameBalloonClick = function(e) {
                            t.props.video.owner && t.props.video.owner.id && t.props.video.owner.login && Object(c.b)({
                                videoID: e,
                                broadcasterID: t.props.video.owner.id,
                                channelLogin: t.props.video.owner.login,
                                contentIndex: t.props.tracking.content_index,
                                pageviewMedium: t.props.tracking.medium
                            })
                        }, t.trackVideoGameBalloonItemClick = function(e, n) {
                            t.props.video.owner && t.props.video.owner.id && t.props.video.owner.login && Object(c.c)({
                                videoID: e,
                                broadcasterID: t.props.video.owner.id,
                                channelLogin: t.props.video.owner.login,
                                contentIndex: n,
                                pageviewMedium: t.props.tracking.medium
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(d.a, {
                            context: this.props.context,
                            onClick: this.onClickHandler,
                            title: this.props.video.title,
                            linkTo: {
                                pathname: Object(m.i)(void 0, this.props.video.id),
                                state: this.getLinkState(),
                                search: this.generateSearchString()
                            },
                            thumbnailImageProps: {
                                src: this.props.video.previewThumbnailURL,
                                alt: this.props.video.title
                            },
                            channelDisplayName: this.props.video.owner && this.props.video.owner.displayName || "",
                            channelLogin: this.props.video.owner && this.props.video.owner.login || "",
                            channelLinkTo: {
                                pathname: "/" + (this.props.video.owner ? this.props.video.owner.login : ""),
                                state: this.getLinkState()
                            },
                            channelImageProps: {
                                src: this.props.video.owner && this.props.video.owner.profileImageURL || "",
                                alt: this.props.video.owner ? this.props.video.owner.displayName : ""
                            },
                            gameTitle: this.props.video.game && this.props.video.game.name || "",
                            gameTitleLinkTo: {
                                pathname: "/directory/game/" + encodeURI(this.props.video.game && this.props.video.game.name || ""),
                                state: this.getLinkState()
                            },
                            gameBoxArtImageProps: {
                                src: this.props.video.game && this.props.video.game.boxArtURL || l.a.defaultBoxArtURL,
                                alt: this.props.video.game ? this.props.video.game.displayName : ""
                            },
                            videoGameChanges: this.gameChangesWithLinks(),
                            multipleVideoGameMarkersType: this.props.multipleVideoGameMarkersType,
                            datePublished: this.props.video.publishedAt,
                            viewCount: this.props.video.viewCount,
                            durationInSeconds: this.props.hideDuration ? void 0 : this.props.video.lengthSeconds,
                            animatedImageProps: this.props.video.animatedPreviewURL ? {
                                src: this.props.video.animatedPreviewURL,
                                alt: ""
                            } : void 0,
                            watchedProgressPercent: this.getVideoPreviousWatchPercentage() || 0,
                            listPosition: this.props.listPosition,
                            topBar: this.props.topBar,
                            restriction: this.getRestrictionProps(),
                            trackImageLatency: this.props.trackImageLatency,
                            onVideoGameBalloonClick: this.trackVideoGameBalloonClick,
                            onVideoGameBalloonItemClick: this.trackVideoGameBalloonItemClick,
                            trackingContext: this.props.tracking,
                            tagListProps: !0 !== this.props.hideTags && this.props.video.contentTags ? {
                                tags: this.props.video.contentTags,
                                linkPath: g.a.PopularTag
                            } : void 0
                        })
                    }, t.prototype.generateSearchString = function() {
                        var e = {};
                        this.props.collectionID && (e.collection = this.props.collectionID);
                        var t = s.stringify(e);
                        return t ? "?" + t : ""
                    }, t.prototype.getVideoPreviousWatchPercentage = function() {
                        return this.props.video && this.props.video.self && this.props.video.self.viewingHistory && null !== this.props.video.self.viewingHistory.position ? 0 === this.props.video.lengthSeconds || 0 === this.props.video.self.viewingHistory.position ? null : this.props.video.self.viewingHistory.position / this.props.video.lengthSeconds * 100 : null
                    }, t.prototype.getRestrictionProps = function() {
                        var e = this.props.video.restriction && this.props.video.restriction.productName ? "/products/" + this.props.video.restriction.productName : "";
                        return {
                            productName: this.props.video.restriction && this.props.video.restriction.productName,
                            title: this.props.video.restriction && this.props.video.restriction.productTitle,
                            canViewRestricted: this.props.video.self && !this.props.video.self.isRestricted || !1,
                            upsellLinkTo: {
                                pathname: e,
                                state: this.getLinkState()
                            }
                        }
                    }, t.prototype.getLinkState = function() {
                        return {
                            content: this.props.tracking.content,
                            content_index: this.props.tracking.content_index,
                            medium: this.props.tracking.medium
                        }
                    }, t
                }(a.Component),
                f = Object(h.c)("VideoPreviewCard", {
                    autoReportInteractive: !0
                })(v);
            n.d(t, "a", function() {
                return k
            });
            var k = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        videoGameChanges: []
                    }, t.maybeFetchVideoMarkers = function(e, n) {
                        return i.__awaiter(t, void 0, void 0, function() {
                            var t;
                            return i.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return this.promise = Object(o.a)(e, n, this.props.video.game), [4, this.promise];
                                    case 1:
                                        return t = i.sent(), this.setState({
                                            videoGameChanges: t
                                        }), [2]
                                }
                            })
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(f, i.__assign({
                        videoGameChanges: this.state.videoGameChanges
                    }, this.props))
                }, t.prototype.componentWillMount = function() {
                    this.props.multipleVideoGameMarkersType && this.props.multipleVideoGameMarkersType !== r.a.None && !this.promise && this.maybeFetchVideoMarkers(this.props.video.id, this.props.video.lengthSeconds)
                }, t
            }(a.Component)
        },
        "8rUg": function(e, t, n) {
            e.exports = n.p + "assets/counterstrike-skill-groups-24ec0fc40a78435bc373.png"
        },
        "9x/k": function(e, t, n) {
            "use strict";
            var i;
            n.d(t, "a", function() {
                    return i
                }),
                function(e) {
                    e.Channels = "channels", e.ChannelsPlaystation = "channels-playstation", e.ChannelsXbox = "channels-xbox", e.Communities = "communities", e.CreativeCommunities = "creative-communities", e.Games = "games"
                }(i || (i = {}))
        },
        A65o: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return s
            });
            var i = n("mrSG"),
                a = n("q1tI"),
                r = n("yI6f"),
                o = n("x75U");

            function s() {
                return function(e) {
                    return function(t) {
                        function n() {
                            var e = null !== t && t.apply(this, arguments) || this;
                            return e.trackImpression = function(t) {
                                e.context.trackImpression(e.props.shelf, e.props.contentEdge, e.props.itemPosition, t)
                            }, e.trackClick = function(t, n, i) {
                                "string" != typeof i && (i = void 0), e.context.trackClick(e.props.shelf, e.props.contentEdge, e.props.itemPosition, t, n, i)
                            }, e
                        }
                        return i.__extends(n, t), n.prototype.render = function() {
                            var t = this.context.cardIDtoItemTrackingIDMap && this.props.contentEdge.node && this.context.cardIDtoItemTrackingIDMap[this.props.contentEdge.node.id],
                                n = this.props,
                                o = n.itemPosition,
                                s = n.rowPosition,
                                l = n.shelf,
                                d = Object(r.f)(l.title).rowName,
                                c = {
                                    trackImpression: this.trackImpression,
                                    trackClick: this.trackClick,
                                    shelfCardTrackingProps: {
                                        item_tracking_id: t || null,
                                        item_position: o,
                                        row_name: d,
                                        row_position: s
                                    }
                                };
                            return a.createElement(e, i.__assign({}, this.props, c))
                        }, n.contextTypes = o.a, n
                    }(a.Component)
                }
            }
        },
        AO3T: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return i
            }), n.d(t, "a", function() {
                return a
            }), n.d(t, "g", function() {
                return s
            }), n.d(t, "f", function() {
                return l
            }), n.d(t, "d", function() {
                return d
            }), n.d(t, "e", function() {
                return c
            }), n.d(t, "c", function() {
                return u
            });
            var i, a, r = n("/7QA"),
                o = n("2xye");
            ! function(e) {
                e.HomepageCTA = "homepage_cta", e.NewSignup = "new_signup"
            }(i || (i = {})),
            function(e) {
                e.Click = "click", e.Impression = "impression", e.Start = "start", e.Dismissed = "dismissed", e.Completed = "completed"
            }(a || (a = {}));
            var s = function(e) {
                    var t = {
                        source: e.source,
                        action: a.Start
                    };
                    r.n.track(o.SpadeEventType.OnboardingEvent, t)
                },
                l = function() {
                    var e = {
                        source: i.HomepageCTA,
                        action: a.Dismissed
                    };
                    r.n.track(o.SpadeEventType.OnboardingEvent, e)
                },
                d = function() {
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
                u = function(e) {
                    r.n.track(o.SpadeEventType.BrowseForYou, e)
                }
        },
        AXwV: function(e, t, n) {},
        AZIu: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            }), n.d(t, "b", function() {
                return o
            });
            var i, a = n("/7QA"),
                r = n("2xye");

            function o(e) {
                var t = {
                    section: e.section,
                    tag_position: e.tagPosition,
                    item_page: "browse",
                    search_event: e.searchEvent,
                    tag_id: e.tagId,
                    dismiss: e.dismiss
                };
                a.n.track(r.SpadeEventType.BrowseFilter, t)
            }! function(e) {
                e.Categories = "browse_categories", e.LiveChannels = "browse_livechannels", e.IncategoryChannels = "browse_incategory_channels"
            }(i || (i = {}))
        },
        B3R5: function(e, t, n) {},
        BEfv: function(e, t, n) {
            var i = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "AnimatedTag_TagData"
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
                                value: "contentTag"
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
                                    kind: "FragmentSpread",
                                    name: {
                                        kind: "Name",
                                        value: "tagFragment"
                                    },
                                    directives: []
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 135
                }
            };
            i.loc.source = {
                body: '#import "twilight/features/tags/models/tag-fragment.gql"\nquery AnimatedTag_TagData($id: ID!) {\ncontentTag(id: $id) {\n...tagFragment\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var a = {};
            i.definitions = i.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !a[t] && (a[t] = !0, !0)
                })
            }(n("iiOx").definitions)), e.exports = i
        },
        BIFG: function(e, t, n) {},
        CCqK: function(e, t, n) {},
        EJax: function(e, t, n) {
            "use strict";
            var i, a = n("mrSG"),
                r = n("q1tI"),
                o = n("/7QA"),
                s = n("vSJR"),
                l = n("sLlB"),
                d = n("QzU5"),
                c = n("XKWF"),
                u = n("Ue10");
            ! function(e) {
                e.Button = "filter-dropdown-button", e.FilterItemAll = "filter-item-all", e.FilterItemPastPremiere = "filter-item-past-premiere", e.FilterItemArchive = "filter-item-archive", e.FilterItemHighlight = "filter-item-highlight", e.FilterItemUpload = "filter-item-upload", e.SortNewest = "sort-option-newest", e.SortPopular = "sort-option-popular", e.SortSelector = "sort-selector"
            }(i || (i = {}));
            var m = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.getBroadcastTypeLabel = function(e) {
                            var t, n = Object(o.d)("All Videos", "VideoFilter"),
                                i = Object(o.d)("Past Premieres", "VideoFilter"),
                                a = Object(o.d)("Past Broadcasts", "VideoFilter"),
                                r = Object(o.d)("Highlights", "VideoFilter"),
                                s = Object(o.d)("Uploads", "VideoFilter");
                            switch (e) {
                                case d.a.PastPremiere:
                                    t = i;
                                    break;
                                case d.a.Archive:
                                    t = a;
                                    break;
                                case d.a.Highlight:
                                    t = r;
                                    break;
                                case d.a.Upload:
                                    t = s;
                                    break;
                                default:
                                    t = n
                            }
                            return t
                        }, t.sortChangeHandler = function(e) {
                            t.props.onVideoSortChange(e.target.value)
                        }, t.typeChangeHandler = function(e) {
                            if (t.props.onVideoFilterChange) {
                                var n = e.currentTarget.getAttribute("data-filter-type");
                                n && t.props.onVideoFilterChange(n)
                            }
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return r.createElement(u.Va, {
                            alignItems: u.f.End,
                            display: u.W.Flex,
                            flexDirection: u.Y.Row,
                            fullWidth: !0,
                            justifyContent: u.Ua.Between
                        }, r.createElement(u.Va, {
                            display: u.W.Flex,
                            flexDirection: u.Y.Row
                        }, this.renderLanguageSelector(), r.createElement(s.a, {
                            buttonLabel: this.getBroadcastTypeLabel(this.props.broadcastType),
                            "data-test-selector": i.Button,
                            "data-a-target": "video-type-filter-dropdown",
                            hideDropdownOnInsideClick: !0
                        }, this.renderInteractables())), r.createElement("div", null, this.renderSortSelector()))
                    }, t.prototype.renderInteractables = function() {
                        return r.createElement(r.Fragment, null, r.createElement(u.Sa, {
                            "data-a-target": "video-type-filter-all",
                            "data-filter-type": "all",
                            "data-test-selector": i.FilterItemAll,
                            onClick: this.typeChangeHandler,
                            selected: !1
                        }, r.createElement(u.Va, {
                            display: u.W.Flex,
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, this.getBroadcastTypeLabel(), this.renderCheckmark())), r.createElement(u.Sa, {
                            "data-a-target": "video-type-filter-past-premieres",
                            "data-filter-type": d.a.PastPremiere,
                            "data-test-selector": i.FilterItemPastPremiere,
                            onClick: this.typeChangeHandler,
                            selected: !1
                        }, r.createElement(u.Va, {
                            display: u.W.Flex,
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, this.getBroadcastTypeLabel(d.a.PastPremiere), this.renderCheckmark(d.a.PastPremiere))), r.createElement(u.Sa, {
                            "data-a-target": "video-type-filter-past-broadcasts",
                            "data-filter-type": d.a.Archive,
                            "data-test-selector": i.FilterItemArchive,
                            onClick: this.typeChangeHandler,
                            selected: !1
                        }, r.createElement(u.Va, {
                            display: u.W.Flex,
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, this.getBroadcastTypeLabel(d.a.Archive), this.renderCheckmark(d.a.Archive))), r.createElement(u.Sa, {
                            "data-a-target": "video-type-filter-highlights",
                            "data-filter-type": d.a.Highlight,
                            "data-test-selector": i.FilterItemHighlight,
                            onClick: this.typeChangeHandler,
                            selected: !1
                        }, r.createElement(u.Va, {
                            display: u.W.Flex,
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, this.getBroadcastTypeLabel(d.a.Highlight), this.renderCheckmark(d.a.Highlight))), r.createElement(u.Sa, {
                            "data-a-target": "video-type-filter-uploads",
                            "data-filter-type": d.a.Upload,
                            "data-test-selector": i.FilterItemUpload,
                            onClick: this.typeChangeHandler,
                            selected: !1
                        }, r.createElement(u.Va, {
                            display: u.W.Flex,
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, this.getBroadcastTypeLabel(d.a.Upload), this.renderCheckmark(d.a.Upload))))
                    }, t.prototype.renderCheckmark = function(e) {
                        return this.props.broadcastType === e ? r.createElement(u.Va, {
                            attachRight: !0,
                            position: u.db.Absolute,
                            margin: {
                                right: 1
                            }
                        }, r.createElement(u.mb, {
                            asset: u.nb.Check,
                            height: 18,
                            width: 18
                        })) : null
                    }, t.prototype.renderLanguageSelector = function() {
                        return this.props.hideLanguageSelector ? null : r.createElement(u.Va, {
                            margin: {
                                right: 0
                            }
                        }, r.createElement(l.a, null))
                    }, t.prototype.renderSortSelector = function() {
                        if (this.props.hideSortSelector) return null;
                        var e = this.props.selectedSort && Object(c.b)(this.props.selectedSort) || c.a.Newest,
                            t = r.createElement(u.sb, {
                                "data-a-target": "video-sort-select",
                                "data-test-selector": i.SortSelector,
                                name: "sort",
                                onChange: this.sortChangeHandler,
                                size: u.Qa.Large,
                                value: e
                            }, r.createElement("option", {
                                "data-a-target": "video-sort-newest",
                                "data-test-selector": i.SortNewest,
                                value: c.a.Newest
                            }, Object(o.d)("Newest", "VideoFilter")), r.createElement("option", {
                                "data-a-target": "video-sort-popular",
                                "data-test-selector": i.SortPopular,
                                value: c.a.Popular
                            }, Object(o.d)("Popular", "VideoFilter")));
                        return r.createElement(u.Va, {
                            padding: {
                                y: .5
                            }
                        }, t)
                    }, t
                }(r.Component),
                p = n("daWW");
            n.d(t, "a", function() {
                return m
            }), n.d(t, "b", function() {
                return p.a
            }), n.d(t, !1, function() {
                return c.a
            })
        },
        Fj9y: function(e, t, n) {},
        GFmA: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                a = n("q1tI"),
                r = n("/7QA"),
                o = n("/MKj"),
                s = n("TSYQ"),
                l = n("YhoA"),
                d = n("Ue10"),
                c = (n("lRiI"), function(e) {
                    var t, n = e.spriteDetails,
                        i = e.game.toLowerCase(),
                        r = s("metadata-icon__appendage", ((t = {})["metadata-icon__appendage--csgo-skill"] = i === l.a.CounterStrike, t)),
                        o = i === l.a.CounterStrike ? 40 : 20;
                    return a.createElement(d.Va, {
                        className: r
                    }, a.createElement("div", {
                        style: {
                            backgroundImage: "url(" + n.spriteURL + ")",
                            backgroundPositionX: n.spriteOffsetX ? -1 * n.spriteOffsetX : 0,
                            backgroundPositionY: n.spriteOffsetY ? -1 * n.spriteOffsetY : 0,
                            width: n.imageWidth ? n.imageWidth + "px" : "2rem",
                            height: n.imageWidth ? n.imageHeight + "px" : "2rem",
                            transform: "scale(" + (n.imageWidth > 0 ? o / n.imageWidth : 1) + ")",
                            transformOrigin: "0 0"
                        }
                    }))
                }),
                u = n("On2s"),
                m = (n("CCqK"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            metadataDetails: null
                        }, t.didUnmount = !1, t.loadStreamMetadataDetails = function() {
                            return i.__awaiter(t, void 0, void 0, function() {
                                var e, t;
                                return i.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            if (!this.props.streamMetadata || !this.props.game) return [3, 4];
                                            n.label = 1;
                                        case 1:
                                            return n.trys.push([1, 3, , 4]), [4, Object(u.b)(this.props.streamMetadata, this.props.game)];
                                        case 2:
                                            if (e = n.sent()) {
                                                if (this.didUnmount) return [2];
                                                this.setState({
                                                    metadataDetails: e
                                                })
                                            }
                                            return [3, 4];
                                        case 3:
                                            return t = n.sent(), r.j.error(t, "Failed to get metadata details."), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.loadStreamMetadataDetails()
                    }, t.prototype.componentDidUpdate = function(e) {
                        !e.leagueOfLegends.championsMap && this.props.leagueOfLegends.championsMap && this.loadStreamMetadataDetails()
                    }, t.prototype.componentWillUnmount = function() {
                        this.didUnmount = !0
                    }, t.prototype.render = function() {
                        return this.props.streamMetadata && this.props.game && this.state.metadataDetails ? a.createElement(d.Va, {
                            className: "preview-card-appendage",
                            display: d.W.Flex
                        }, a.createElement(d.Va, {
                            className: "preview-card-appendage__image-wrapper",
                            flexGrow: 0,
                            flexShrink: 0,
                            display: d.W.Flex,
                            alignItems: d.f.Center,
                            justifyContent: d.Ua.End
                        }, a.createElement("div", null, a.createElement(c, {
                            game: this.props.game,
                            spriteDetails: this.state.metadataDetails.spriteDetails
                        }))), a.createElement(d.xb, {
                            flexGrow: 1,
                            flexShrink: 1,
                            borderTop: !0,
                            padding: {
                                y: .5
                            },
                            margin: {
                                left: 1
                            },
                            display: d.W.Flex,
                            overflow: d.Ya.Hidden
                        }, a.createElement(d.Va, {
                            flexGrow: 1,
                            flexShrink: 1,
                            overflow: d.Ya.Hidden
                        }, a.createElement(d.V, {
                            ellipsis: !0
                        }, this.state.metadataDetails.name)), a.createElement(d.Va, {
                            flexGrow: 0,
                            flexShrink: 0
                        }, a.createElement(d.V, null, this.state.metadataDetails.label)))) : null
                    }, t
                }(a.Component));
            var p = Object(o.connect)(function(e) {
                    return {
                        leagueOfLegends: {
                            championsMap: e.directory.leagueOfLegends.championsMap
                        }
                    }
                })(m),
                g = n("5zf8"),
                h = (n("Fj9y"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onBalloonItemClick = function() {
                            t.props.onBalloonItemClick && t.props.onBalloonItemClick(t.props.videoID, t.props.index)
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = {
                            src: this.props.gameChange.thumbnailUrl,
                            alt: this.props.gameChange.label
                        };
                        return a.createElement(d.Va, {
                            className: "preview-card-game-balloon-row",
                            display: d.W.Flex,
                            flexWrap: d.Z.NoWrap
                        }, a.createElement(d.Sa, {
                            linkTo: this.props.gameChange.linkTo,
                            onClick: this.onBalloonItemClick
                        }, a.createElement(d.Va, {
                            display: d.W.Flex,
                            flexDirection: d.Y.Row,
                            padding: .5
                        }, a.createElement(d.xb, {
                            className: "preview-card-game-balloon-row__image-wrapper",
                            flexGrow: 0,
                            flexShrink: 0,
                            borderRadius: d.x.Small,
                            overflow: d.Ya.Hidden,
                            position: d.db.Relative
                        }, a.createElement(d.o, {
                            align: d.d.Center,
                            ratio: d.p.BoxArt
                        }, a.createElement(d.S, i.__assign({}, e))), a.createElement(d.xb, {
                            className: "preview-card-game-balloon-row__image-play-overlay",
                            alignItems: d.f.Center,
                            background: d.r.Overlay,
                            color: d.O.Overlay,
                            display: d.W.Flex,
                            justifyContent: d.Ua.Center,
                            position: d.db.Absolute,
                            attachTop: !0,
                            attachBottom: !0,
                            attachLeft: !0,
                            attachRight: !0
                        }, a.createElement(d.mb, {
                            asset: d.nb.Play,
                            type: d.ob.Inherit
                        }))), a.createElement(d.Va, {
                            display: d.W.Flex,
                            flexDirection: d.Y.Column,
                            flexGrow: 1,
                            flexShrink: 1,
                            padding: {
                                left: 1,
                                top: 1
                            }
                        }, a.createElement(d.Va, {
                            className: "preview-card-game-balloon-row__info-label"
                        }, a.createElement(d.V, null, this.props.gameChange.label)), a.createElement(d.Va, {
                            className: "preview-card-game-balloon-row__info-duration"
                        }, a.createElement(d.V, null, Object(g.b)(this.props.gameChange.duration)))))))
                    }, t
                }(a.Component)),
                v = n("0INk"),
                f = n("8/mp"),
                k = n("eJ65"),
                y = (n("vDRX"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onBalloonToggle = function(e) {
                            t.props.onBalloonClick && !e && t.props.onBalloonClick(t.props.videoID)
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        if (this.props.videoGameChanges.length > 0) {
                            var e = this.props.videoGameChanges.map(function(e) {
                                return e.label
                            });
                            Object(v.a)(e)
                        }
                    }, t.prototype.render = function() {
                        return a.createElement(d.Va, {
                            className: "preview-card-game-balloon",
                            display: d.W.InlineBlock,
                            position: d.db.Relative,
                            margin: {
                                top: .5
                            }
                        }, a.createElement(k.a, {
                            key: "game-balloon",
                            display: d.W.Inline,
                            onToggle: this.onBalloonToggle
                        }, a.createElement(d.z, {
                            type: d.F.Hollow,
                            icon: d.nb.ViewerList
                        }, a.createElement(d.Va, {
                            display: d.W.Flex,
                            flexDirection: d.Y.Row
                        }, a.createElement(d.V, null, Object(r.d)("Chapters", "PreviewCardGameBalloon")), a.createElement(d.Va, {
                            margin: {
                                left: 1
                            }
                        }, a.createElement(d.ab, {
                            label: this.props.videoGameChanges.length.toString()
                        })))), a.createElement(d.u, {
                            direction: d.v.TopLeft,
                            size: d.w.Medium
                        }, a.createElement(d.Va, {
                            overflow: d.Ya.Hidden,
                            display: d.W.Flex,
                            flexDirection: d.Y.Column,
                            flexWrap: d.Z.NoWrap
                        }, a.createElement(d.Va, {
                            padding: .5,
                            flexShrink: 0,
                            flexGrow: 0
                        }, a.createElement(d.V, {
                            color: d.O.Alt2
                        }, Object(r.d)("Chapter Select", "PreviewCardGameBalloon"))), a.createElement(d.Va, {
                            className: "preview-card-game-balloon__content",
                            display: d.W.Flex,
                            flexDirection: d.Y.Column,
                            flexGrow: 1,
                            flexShrink: 1,
                            flexWrap: d.Z.NoWrap
                        }, a.createElement(f.b, null, a.createElement(d.Va, {
                            display: d.W.Flex,
                            flexDirection: d.Y.Column,
                            flexWrap: d.Z.NoWrap,
                            fullHeight: !0
                        }, this.renderAdditionalGameList(this.props.videoGameChanges))))))))
                    }, t.prototype.renderAdditionalGameList = function(e) {
                        var t = this;
                        return e.map(function(e, n) {
                            return a.createElement(h, {
                                index: n,
                                gameChange: e,
                                key: t.props.videoID + "-" + e.offset,
                                videoID: t.props.videoID,
                                onBalloonItemClick: t.props.onBalloonItemClick
                            })
                        })
                    }, t
                }(a.Component)),
                b = n("kduP"),
                w = n("2xye"),
                S = function(e) {
                    return a.createElement(d.Va, null, a.createElement(d.V, {
                        color: d.O.Alt,
                        ellipsis: !0
                    }, e.videoGameChanges.map(function(t, n, i) {
                        return a.createElement(d.Na, {
                            key: n
                        }, a.createElement(d.T, {
                            to: {
                                pathname: Object(b.c)(t.label),
                                state: {
                                    content: w.PageviewContent.TextLink,
                                    medium: e.trackingContext && e.trackingContext.medium
                                }
                            },
                            type: d.U.Inherit
                        }, t.label, C(n, i.length - 1) ? null : ", "))
                    })))
                },
                C = function(e, t) {
                    return e === t
                },
                N = n("N0BP"),
                _ = (n("XA5B"), function(e) {
                    var t = a.createElement(d.xb, {
                        className: "preview-card-iconic-image__wrapper",
                        borderRadius: d.x.Small,
                        overflow: d.Ya.Hidden
                    }, a.createElement(d.o, {
                        ratio: e.aspect || d.p.BoxArt,
                        align: d.d.Center
                    }, a.createElement(d.S, i.__assign({}, e.imageProps))));
                    return e.linkTo && (t = a.createElement(d.T, i.__assign({}, Object(N.a)(e), {
                        to: e.linkTo,
                        onClick: e.onClick
                    }), t)), t
                });
            _.displayName = "PreviewCardIconicImage";
            n("cRsL");
            var T, E = function(e) {
                    var t = s("preview-card-top-bar", {
                        "preview-card-top-bar--gray": !e.selected,
                        "preview-card-top-bar--green": e.selected
                    });
                    return a.createElement(d.Va, {
                        display: d.W.Flex,
                        padding: {
                            x: 1,
                            y: .5
                        },
                        justifyContent: d.Ua.Between,
                        alignItems: d.f.Center,
                        className: t
                    }, a.createElement(d.Va, {
                        display: d.W.InlineFlex
                    }, a.createElement(d.V, {
                        "data-test-selector": "top-bar-title-selector",
                        color: d.O.Overlay,
                        bold: !0,
                        transform: d.Mb.Uppercase
                    }, e.title)), e.subTitle && a.createElement(d.Va, {
                        display: d.W.InlineFlex
                    }, a.createElement(d.V, {
                        "data-test-selector": "top-bar-sub-title-selector",
                        color: d.O.Overlay
                    }, e.subTitle)))
                },
                F = (n("m493"), function(e) {
                    var t = .5,
                        n = null;
                    "number" == typeof e.progressBarPercent && e.progressBarPercent > 0 && (n = a.createElement(d.Va, {
                        position: d.db.Absolute,
                        attachBottom: !0,
                        fullWidth: !0
                    }, a.createElement(d.gb, {
                        borderRadius: d.x.None,
                        size: d.ib.Small,
                        value: e.progressBarPercent,
                        mask: !0
                    })), t = 1);
                    var r = 1,
                        o = null;
                    return e.topBar && (o = a.createElement(d.Va, {
                        position: d.db.Absolute,
                        attachTop: !0,
                        fullWidth: !0
                    }, a.createElement(E, i.__assign({}, e.topBar))), r = 3), a.createElement(d.Va, {
                        position: d.db.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        fullWidth: !0,
                        fullHeight: !0,
                        className: "preview-card-overlay"
                    }, o, n, a.createElement(d.Va, {
                        position: d.db.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        margin: e.topBar ? {
                            x: 1,
                            y: r
                        } : 1,
                        "data-test-selector": "top-left-selector"
                    }, e.topLeft), a.createElement(d.Va, {
                        position: d.db.Absolute,
                        attachTop: !0,
                        attachRight: !0,
                        margin: e.topBar ? {
                            x: 1,
                            y: r
                        } : 1,
                        "data-test-selector": "top-right-selector"
                    }, e.topRight), a.createElement(d.Va, {
                        position: d.db.Absolute,
                        attachBottom: !0,
                        attachLeft: !0,
                        margin: {
                            x: .5,
                            y: t
                        },
                        "data-test-selector": "bottom-left-selector"
                    }, e.bottomLeft), a.createElement(d.Va, {
                        position: d.db.Absolute,
                        attachBottom: !0,
                        attachRight: !0,
                        margin: {
                            x: .5,
                            y: t
                        },
                        "data-test-selector": "bottom-right-selector"
                    }, e.bottomRight))
                }),
                I = (n("kF1+"), function(e) {
                    var t = e.icon && a.createElement(d.Va, {
                        display: d.W.Flex,
                        margin: {
                            right: .5
                        }
                    }, a.createElement(d.mb, {
                        asset: e.icon,
                        width: 10,
                        height: 10
                    }));
                    return e.withBackground ? a.createElement(d.xb, {
                        alignItems: d.f.Center,
                        background: d.r.Overlay,
                        borderRadius: d.x.Small,
                        className: "preview-card-stat",
                        color: d.O.Overlay,
                        display: d.W.Flex,
                        fontSize: d.Aa.Size6,
                        justifyContent: d.Ua.Center
                    }, t, a.createElement(d.V, null, e.value)) : a.createElement(d.xb, {
                        className: "preview-card-stat",
                        color: d.O.Overlay,
                        display: d.W.Flex,
                        padding: {
                            x: .5
                        }
                    }, t, a.createElement(d.V, null, e.value))
                }),
                L = n("GnwI"),
                O = (n("B3R5"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            didAnimatedPreviewLoad: !1,
                            didAnimatedPreviewFailToLoad: !1,
                            isHovered: !1
                        }, t.onImageError = function() {
                            t.props.latencyTracking.reportInteractive()
                        }, t.onImageLoad = function() {
                            t.props.latencyTracking.reportInteractive()
                        }, t.onAnimatedImageLoad = function(e) {
                            void 0 !== t.props.animatedImageProps && e.currentTarget.src === t.props.animatedImageProps.src && t.setState({
                                didAnimatedPreviewLoad: !0
                            })
                        }, t.onAnimatedImageLoadError = function(e) {
                            void 0 !== t.props.animatedImageProps && e.currentTarget.src === t.props.animatedImageProps.src && t.setState({
                                didAnimatedPreviewFailToLoad: !0
                            })
                        }, t.handleFocus = function() {
                            t.setState({
                                isHovered: !0
                            })
                        }, t.handleBlur = function() {
                            t.setState({
                                isHovered: !1
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.trackImageLatency || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = {};
                        return this.props.animatedImageProps && (e = {
                            onMouseEnter: this.handleFocus,
                            onMouseLeave: this.handleBlur,
                            onFocus: this.handleFocus,
                            onBlur: this.handleBlur
                        }), a.createElement("div", i.__assign({}, e, {
                            onClick: this.props.onClick
                        }), a.createElement(d.xb, {
                            background: d.r.Alt2,
                            overflow: d.Ya.Hidden
                        }, a.createElement(d.o, {
                            ratio: this.props.aspectRatio
                        }, this.renderImage())))
                    }, t.prototype.renderImage = function() {
                        var e, t = !(!this.props.animatedImageProps || !this.state.isHovered || this.state.didAnimatedPreviewFailToLoad),
                            n = s("preview-card-thumbnail__image", ((e = {})["preview-card-thumbnail__image--animated"] = this.state.isHovered && this.state.didAnimatedPreviewLoad, e));
                        return t && void 0 !== this.props.animatedImageProps ? a.createElement("div", {
                            className: n
                        }, a.createElement(d.S, i.__assign({}, this.props.animatedImageProps, {
                            onLoad: this.onAnimatedImageLoad,
                            onError: this.onAnimatedImageLoadError,
                            "data-test-selector": "preview-card-thumbnail__image-selector"
                        }))) : a.createElement("div", {
                            className: n
                        }, a.createElement(d.S, i.__assign({}, this.props.staticImageProps, {
                            onLoad: this.onImageLoad,
                            onError: this.onImageError,
                            "data-test-selector": "preview-card-thumbnail__image-selector"
                        })))
                    }, t
                }(a.Component)),
                D = Object(L.c)("PreviewCardThumbnail")(O),
                x = (n("80G/"), function(e) {
                    var t = null;
                    return e.subtitles && e.subtitles.length > 0 && (t = e.subtitles.map(function(e, t) {
                        return a.createElement(d.Va, {
                            key: t,
                            "data-test-selector": "preview-card-titles__subtitle"
                        }, a.createElement(d.V, {
                            color: d.O.Alt,
                            ellipsis: !0
                        }, "string" == typeof e ? e : a.createElement(d.T, {
                            "data-a-target": e.automationSelector,
                            to: e.linkTo,
                            onClick: e.onClick,
                            type: d.U.Inherit
                        }, e.text)))
                    })), a.createElement("div", null, a.createElement(d.T, i.__assign({}, Object(N.a)(e), {
                        to: e.linkTo,
                        onClick: e.onClick,
                        type: d.U.Inherit,
                        "data-test-selector": "preview-card-titles__primary-link"
                    }), a.createElement(d.V, {
                        type: d.Nb.H3,
                        fontSize: d.Aa.Size5,
                        lines: 1,
                        bold: !0,
                        ellipsis: !0
                    }, e.title)), a.createElement(d.Va, {
                        className: "preview-card-titles__subtitle-wrapper"
                    }, t))
                }),
                V = n("H1ft"),
                P = n("ZbA5"),
                A = n("QVaV"),
                G = n("hyVY"),
                j = n("MXoD"),
                R = n("0LAi"),
                U = n("fVj5");
            ! function(e) {
                e.LockSelector = "video-lock", e.UpsellSelector = "upsell"
            }(T || (T = {}));
            var M, B, H = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    if (!this.props.restriction || !this.props.restriction.productName || !this.props.restriction.title) return null;
                    var e = Object(r.d)("Get It Now", "VideoPreviewCardRestriction"),
                        t = this.props.restriction.canViewRestricted,
                        n = t ? Object(r.d)("unlocked", "VideoPreviewCardRestriction") : Object(r.d)("locked", "VideoPreviewCardRestriction"),
                        i = t ? d.nb.Unlock : d.nb.Lock;
                    return a.createElement(d.Va, null, !t && a.createElement(d.xb, {
                        background: d.r.Overlay,
                        className: "video-preview-card-restriction",
                        color: d.O.Overlay,
                        display: d.W.Flex,
                        position: d.db.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        zIndex: d.ac.Default,
                        padding: {
                            x: 5
                        },
                        textAlign: d.Jb.Center,
                        fullWidth: !0,
                        fullHeight: !0,
                        alignItems: d.f.Center,
                        alignContent: d.e.Center,
                        flexDirection: d.Y.Column,
                        flexWrap: d.Z.Wrap,
                        justifyContent: d.Ua.Center,
                        "data-test-selector": T.LockSelector
                    }, a.createElement(d.Na, {
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(d.V, {
                        color: d.O.Overlay,
                        fontSize: d.Aa.Size5,
                        "data-test-selector": T.UpsellSelector
                    }, Object(r.d)("View with {title}", {
                        title: this.props.restriction.title
                    }, "VideoPreviewCardRestriction"))), a.createElement(d.Va, null, a.createElement(d.z, {
                        type: d.F.Hollow,
                        ariaLabel: e,
                        targetBlank: !0,
                        disabled: "" === this.props.restriction.upsellLinkTo,
                        linkTo: this.props.restriction.upsellLinkTo,
                        overlay: !0
                    }, e))), a.createElement(d.xb, {
                        display: d.W.InlineFlex,
                        position: d.db.Absolute,
                        attachTop: this.props.attachTop,
                        attachBottom: !this.props.attachTop,
                        attachRight: !0,
                        margin: .5,
                        zIndex: d.ac.Default,
                        fontSize: d.Aa.Size6,
                        background: d.r.Overlay,
                        borderRadius: d.x.Medium,
                        color: d.O.Overlay
                    }, a.createElement(d.Qb, {
                        direction: this.props.attachTop ? d.Sb.Bottom : d.Sb.Top,
                        align: d.Rb.Right,
                        label: n
                    }, a.createElement(d.mb, {
                        asset: i,
                        height: 20,
                        width: 20
                    }))))
                }, t
            }(a.PureComponent);
            n("5NSO");

            function W(e) {
                return void 0 !== e.watchedProgressPercent
            }

            function q(e) {
                return void 0 !== e.clipCreatedByChannelLogin
            }! function(e) {
                e.Avatar = "preview-card-avatar", e.BoxArt = "preview-card-box-art"
            }(M || (M = {})),
            function(e) {
                e[e.SingleGameList = 1] = "SingleGameList", e[e.SingleChannelList = 2] = "SingleChannelList", e[e.MixedGameAndChannelList = 3] = "MixedGameAndChannelList"
            }(B || (B = {}));
            var z = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.isTagsExperiment = Object(U.b)(), t.getTrackingContext = function(e) {
                            var n = t.props.trackingContext;
                            return {
                                content: n && n.content ? n.content : e,
                                medium: n && n.medium
                            }
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return a.createElement("div", i.__assign({
                            className: "preview-card"
                        }, Object(N.a)(this.props)), a.createElement(d.xb, {
                            position: d.db.Relative,
                            borderRadius: d.x.Medium,
                            overflow: d.Ya.Hidden
                        }, this.renderVODRestrictionOverlay(), a.createElement(d.T, {
                            to: Object(j.a)(this.getTrackingContext(w.PageviewContent.VideoThumbnail), this.props.linkTo),
                            onClick: this.props.onThumbnailClick || this.props.onClick,
                            "data-a-target": "preview-card-image-link"
                        }, this.props.thumbnailImageProps && a.createElement(D, {
                            staticImageProps: this.props.thumbnailImageProps,
                            animatedImageProps: W(this.props) && this.props.animatedImageProps || void 0,
                            trackImageLatency: this.props.trackImageLatency
                        }), this.renderOverlay())), a.createElement(d.Va, {
                            display: d.W.Flex,
                            flexWrap: d.Z.NoWrap,
                            margin: {
                                top: 1
                            }
                        }, a.createElement(d.Va, {
                            flexGrow: 0,
                            flexShrink: 0
                        }, this.renderIconicImage()), a.createElement(d.Va, {
                            className: "preview-card__titles-wrapper",
                            flexGrow: 1,
                            flexShrink: 1
                        }, this.renderTitles(), this.renderTags()), this.props.contextualCardActionProps && a.createElement(d.Va, {
                            flexGrow: 0,
                            flexShrink: 0
                        }, a.createElement(this.props.contextualCardActionProps.component, i.__assign({}, this.props.contextualCardActionProps.props)))), this.renderAppendages())
                    }, t.prototype.renderOverlay = function() {
                        return function(e) {
                            return void 0 !== e.streamType
                        }(this.props) ? a.createElement(F, {
                            topLeft: a.createElement(P.a, {
                                type: this.props.streamType,
                                hosting: !!this.props.hostedByChannelLogin
                            }),
                            topRight: void 0,
                            bottomLeft: a.createElement(I, {
                                value: Object(r.d)("{viewerCount, plural, one {# viewer} other {# viewers}}", {
                                    viewerCount: this.props.currentViewerCount
                                }, "VideoPreviewCard")
                            }),
                            bottomRight: void 0
                        }) : W(this.props) ? a.createElement(F, {
                            topLeft: void 0 !== this.props.durationInSeconds && a.createElement(I, {
                                value: Object(G.b)(this.props.durationInSeconds),
                                icon: d.nb.Play,
                                withBackground: !0
                            }),
                            topRight: this.props.listPosition && a.createElement(I, {
                                withBackground: !0,
                                value: this.getListPositionLabel()
                            }),
                            bottomLeft: a.createElement(I, {
                                value: this.getViewCountLabel()
                            }),
                            bottomRight: a.createElement(I, {
                                value: Object(r.c)(new Date(this.props.datePublished), "medium")
                            }),
                            progressBarPercent: this.props.watchedProgressPercent,
                            topBar: this.props.topBar
                        }) : q(this.props) ? a.createElement(F, {
                            topLeft: a.createElement(I, {
                                value: Object(G.b)(this.props.durationInSeconds),
                                icon: d.nb.Clip,
                                withBackground: !0
                            }),
                            topRight: void 0,
                            bottomLeft: a.createElement(I, {
                                value: this.getViewCountLabel()
                            }),
                            bottomRight: a.createElement(I, {
                                value: Object(r.c)(new Date(this.props.datePublished), "medium")
                            })
                        }) : void 0
                    }, t.prototype.getListPositionLabel = function() {
                        return W(this.props) && this.props.listPosition ? Object(r.d)("{totalVideos, plural, one {{position} / # video} other {{position} / # videos}}", {
                            position: this.props.listPosition.position,
                            totalVideos: this.props.listPosition.totalVideos
                        }, "VideoPreviewCard") : ""
                    }, t.prototype.getViewCountLabel = function() {
                        return W(this.props) || q(this.props) ? Object(r.d)("{viewerCount, plural, one {# view} other {# views}}", {
                            viewerCount: this.props.viewCount
                        }, "VideoPreviewCard") : ""
                    }, t.prototype.renderIconicImage = function() {
                        return this.props.context === B.SingleChannelList && this.props.gameBoxArtImageProps && this.props.gameBoxArtImageProps.src && this.props.gameTitleLinkTo ? a.createElement(d.Va, {
                            margin: {
                                right: 1
                            }
                        }, a.createElement(_, {
                            imageProps: this.props.gameBoxArtImageProps,
                            linkTo: Object(j.a)(this.getTrackingContext(w.PageviewContent.GameBoxart), this.props.gameTitleLinkTo),
                            onClick: this.props.onGameTitleClick,
                            aspect: d.p.BoxArt,
                            "data-test-selector": M.BoxArt,
                            "data-a-target": "preview-card-boxart-link"
                        })) : (this.props.context === B.SingleGameList || this.props.context === B.MixedGameAndChannelList) && this.props.channelImageProps && this.props.channelImageProps.src ? a.createElement(d.Va, {
                            margin: {
                                right: 1
                            }
                        }, a.createElement(_, {
                            imageProps: this.props.channelImageProps,
                            linkTo: Object(j.a)(this.getTrackingContext(w.PageviewContent.UserThumbnail), this.props.channelLinkTo),
                            onClick: this.props.onChannelImageClick || this.props.onChannelLoginClick,
                            aspect: d.p.Aspect1x1,
                            "data-test-selector": M.Avatar
                        })) : void 0
                    }, t.prototype.renderTitles = function() {
                        var e = null,
                            t = [];
                        return this.shouldShowGameBalloon(this.props) || t.push({
                            text: Object(A.a)(this.props.channelLogin, this.props.channelDisplayName, !0),
                            linkTo: Object(j.a)(this.getTrackingContext(w.PageviewContent.ChannelMetadata), this.props.channelLinkTo),
                            onClick: this.props.onChannelLoginClick,
                            automationSelector: "preview-card-channel-link"
                        }), q(this.props) && this.props.clipCreatedByChannelLoginLinkTo ? t.push({
                            text: Object(r.d)("Clipped by {userName}", {
                                userName: this.props.clipCreatedByChannelLogin || ""
                            }, "VideoPreviewCard"),
                            linkTo: this.props.clipCreatedByChannelLoginLinkTo,
                            onClick: this.props.onClipCreatedByChannelLoginClick,
                            automationSelector: "preview-card-clip-curator-link"
                        }) : W(this.props) && this.props.multipleVideoGameMarkersType && this.props.videoGameChanges && this.props.videoGameChanges.length > 0 ? e = this.renderPreviewCardGameInfo(this.props.multipleVideoGameMarkersType, this.props.videoGameChanges, this.props.onVideoGameBalloonClick, this.props.onVideoGameBalloonItemClick) : this.props.context !== B.SingleGameList && this.props.gameTitle && this.props.gameTitleLinkTo && t.push({
                            text: this.props.gameTitle,
                            linkTo: Object(j.a)(this.getTrackingContext(w.PageviewContent.GameMetadata), this.props.gameTitleLinkTo),
                            onClick: this.props.onGameTitleClick,
                            automationSelector: "preview-card-game-link"
                        }), a.createElement(a.Fragment, null, a.createElement(x, {
                            title: this.props.title,
                            onClick: this.props.onVideoTitleClick || this.props.onClick,
                            linkTo: Object(j.a)(this.getTrackingContext(w.PageviewContent.VideoTitle), this.props.linkTo),
                            subtitles: t,
                            "data-a-target": "preview-card-title-link"
                        }), e)
                    }, t.prototype.renderTags = function() {
                        return this.isTagsExperiment && this.props.tagListProps && 0 !== this.props.tagListProps.tags.length ? a.createElement(d.Va, {
                            margin: {
                                top: .5
                            }
                        }, a.createElement(R.a, i.__assign({}, this.props.tagListProps, {
                            tagNumberLimit: 3
                        }))) : null
                    }, t.prototype.renderAppendages = function() {
                        if (this.props.playerMetadata && this.props.playerMetadataGame) return a.createElement(d.Va, {
                            margin: {
                                top: this.props.tagListProps && 0 !== this.props.tagListProps.tags.length ? .5 : 0
                            }
                        }, a.createElement(p, {
                            streamMetadata: this.props.playerMetadata,
                            game: this.props.playerMetadataGame
                        }))
                    }, t.prototype.renderVODRestrictionOverlay = function() {
                        return W(this.props) && this.props.restriction && this.props.restriction.productName && this.props.restriction.title ? a.createElement(H, {
                            restriction: this.props.restriction,
                            attachTop: !0
                        }) : null
                    }, t.prototype.shouldShowGameBalloon = function(e) {
                        return !!W(e) && (!!(e.videoGameChanges && e.videoGameChanges.length > 0) && e.multipleVideoGameMarkersType === V.a.Balloon)
                    }, t.prototype.renderPreviewCardGameInfo = function(e, t, n, i) {
                        switch (e) {
                            case V.a.Balloon:
                                return a.createElement(y, {
                                    videoGameChanges: t,
                                    videoID: t[0].videoID,
                                    onBalloonClick: n,
                                    onBalloonItemClick: i
                                });
                            case V.a.Inline:
                                return a.createElement(S, {
                                    videoGameChanges: t,
                                    trackingContext: this.props.trackingContext
                                });
                            case V.a.None:
                                return null;
                            default:
                                return e
                        }
                    }, t
                }(a.Component),
                Y = Object(L.c)("PreviewCard", {
                    autoReportInteractive: !0
                })(z);
            n.d(t, !1, function() {
                return M
            }), n.d(t, "b", function() {
                return B
            }), n.d(t, !1, function() {
                return z
            }), n.d(t, "a", function() {
                return Y
            })
        },
        H1ft: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            }), n.d(t, "b", function() {
                return o
            });
            var i, a = n("/7QA"),
                r = n("D7An");
            ! function(e) {
                e.None = "None", e.Inline = "Inline", e.Balloon = "Balloon"
            }(i || (i = {}));
            var o = function() {
                switch (a.o.experiments.getAssignment(r.b.Archer)) {
                    case "balloon":
                        return i.Balloon;
                    case "inline":
                        return i.Inline;
                    case "control":
                    default:
                        return i.None
                }
            }
        },
        HSqT: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            }), n.d(t, "b", function() {
                return s
            });
            var i = n("/7QA"),
                a = [{
                    code: "ar",
                    label: "العربية"
                }, {
                    code: "bg",
                    label: "Български"
                }, {
                    code: "cs",
                    label: "Čeština"
                }, {
                    code: "da",
                    label: "Dansk"
                }, {
                    code: "de",
                    label: "Deutsch"
                }, {
                    code: "el",
                    label: "Ελληνικά"
                }, {
                    code: "en",
                    label: "English"
                }, {
                    code: "es",
                    label: "Español"
                }, {
                    code: "fi",
                    label: "Suomi"
                }, {
                    code: "fr",
                    label: "Français"
                }, {
                    code: "hu",
                    label: "Magyar"
                }, {
                    code: "it",
                    label: "Italiano"
                }, {
                    code: "ja",
                    label: "日本語"
                }, {
                    code: "ko",
                    label: "한국어"
                }, {
                    code: "nl",
                    label: "Nederlands"
                }, {
                    code: "no",
                    label: "Norsk"
                }, {
                    code: "pl",
                    label: "Polski"
                }, {
                    code: "pt",
                    label: "Português"
                }, {
                    code: "ro",
                    label: "Română"
                }, {
                    code: "ru",
                    label: "Русский"
                }, {
                    code: "sk",
                    label: "Slovenčina"
                }, {
                    code: "sv",
                    label: "Svenska"
                }, {
                    code: "th",
                    label: "ภาษาไทย"
                }, {
                    code: "tr",
                    label: "Türkçe"
                }, {
                    code: "vi",
                    label: "Tiếng Việt"
                }, {
                    code: "zh-hk",
                    label: "中文(粵語)"
                }, {
                    code: "zh",
                    label: "中文"
                }];

            function r(e) {
                return void 0 === e && (e = !1), [{
                    code: "asl",
                    label: "American Sign Language"
                }, {
                    code: "other",
                    label: e ? Object(i.d)("Other", "broadcaster-languages") : "Other"
                }]
            }
            var o = new Set(a.concat(r()).map(function(e) {
                return e.code
            }));

            function s() {
                var e = i.o.intl.getLanguageCode(),
                    t = function(t) {
                        return "en" === t.code ? 0 : e && e.startsWith(t.code) ? 1 : 2
                    };
                return a.slice().sort(function(e, n) {
                    var i = t(e),
                        a = t(n);
                    return i !== a ? i - a : i + ":" + e.label < a + ":" + n.label ? -1 : 1
                }).concat(r(!0))
            }
        },
        HrG3: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return l
            });
            var i = n("q1tI"),
                a = n("2iEm"),
                r = n("/7QA"),
                o = n("Ue10"),
                s = (n("RFKy"), "view-all-button-selector");

            function l(e) {
                var t = i.createElement(o.Va, {
                    padding: 1,
                    fullHeight: !0,
                    flexDirection: o.Y.Column,
                    justifyContent: o.Ua.Center,
                    display: o.W.Flex
                }, i.createElement(o.V, {
                    color: o.O.Link,
                    fontSize: o.Aa.Size4,
                    noWrap: !0
                }, Object(r.d)("View All", "Following--ViewAllButton")), i.createElement(o.V, {
                    color: o.O.Alt2,
                    fontSize: o.Aa.Size4,
                    noWrap: !0
                }, e.subHeader));
                return e.linkTo && (t = i.createElement(a.a, {
                    to: e.linkTo,
                    className: "following__view-all__link"
                }, t)), i.createElement("div", {
                    className: "following__view-all",
                    onClick: e.onClickViewAll,
                    "data-test-selector": s
                }, i.createElement(o.Va, {
                    margin: {
                        bottom: 5
                    }
                }, i.createElement(o.o, {
                    ratio: e.aspectRatio
                }, i.createElement(o.xb, {
                    background: o.r.Alt2,
                    fullHeight: !0
                }, t))))
            }
        },
        "Hz/u": function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                a = n("q1tI"),
                r = n("Uive"),
                o = n("cTNz"),
                s = n("GnwI"),
                l = n("yR8l"),
                d = n("7sjZ"),
                c = n("0OKo"),
                u = n("ZbA5"),
                m = n("oB8h"),
                p = n("17x9"),
                g = n("/7QA"),
                h = n("AO3T"),
                v = n("hX9f"),
                f = n("Ue10"),
                k = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.impressionEventFired = !1, t.setRef = function(e) {
                            return t.element = e
                        }, t.isVisible = function(e) {
                            if (null !== t.element) {
                                var n = t.element.getBoundingClientRect();
                                return n.left < e.right && n.right > e.left
                            }
                            return !1
                        }, t.trackImpression = function() {
                            var e = {
                                channel_id: t.props.streamNode.id,
                                action: h.a.Impression,
                                parent_game: t.props.streamNode.game ? t.props.streamNode.game.name : "",
                                content_index: t.props.streamIndex
                            };
                            Object(h.c)(e)
                        }, t.trackClickEvent = function() {
                            var e = {
                                channel_id: t.props.streamNode.id,
                                action: h.a.Click,
                                parent_game: t.props.streamNode.game ? t.props.streamNode.game.name : "",
                                content_index: t.props.streamIndex
                            };
                            Object(h.c)(e)
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        var e = this.context.registerReceiver;
                        e ? this.unregister = e(this) : g.j.warn("<StreamThumbnailWithTrackingComponent /> initialized missing a <ScrollableArea /> provider")
                    }, t.prototype.componentWillUnmount = function() {
                        this.unregister && this.unregister()
                    }, t.prototype.render = function() {
                        return a.createElement("div", {
                            onClick: this.trackClickEvent
                        }, a.createElement(f.Va, {
                            refDelegate: this.setRef
                        }, a.createElement(v.b, {
                            key: this.props.streamIndex,
                            directoryName: this.props.directoryName,
                            directoryType: this.props.directoryType,
                            streamIndex: this.props.streamIndex,
                            streamNode: this.props.streamNode,
                            trackingMedium: this.props.trackingMedium
                        })))
                    }, t.prototype.checkVisible = function(e) {
                        return i.__awaiter(this, void 0, void 0, function() {
                            return i.__generator(this, function(t) {
                                return !this.impressionEventFired && this.isVisible(e) && (this.trackImpression(), this.impressionEventFired = !0), [2]
                            })
                        })
                    }, t.contextTypes = {
                        registerReceiver: p.func
                    }, t
                }(a.Component),
                y = "community-stream__placeholder",
                b = "community-stream",
                w = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderStream = function() {
                            return t.props.data ? a.createElement(f.Va, {
                                "data-test-selector": b,
                                position: f.db.Relative
                            }, a.createElement(f.Va, {
                                padding: .5,
                                position: f.db.Absolute,
                                zIndex: f.ac.Above
                            }, a.createElement(u.a, {
                                type: m.a.Live
                            })), a.createElement(k, {
                                key: t.props.data.id,
                                trackingMedium: t.props.trackingMedium,
                                directoryName: t.props.directoryName,
                                directoryType: t.props.directoryType,
                                streamIndex: t.props.index,
                                streamNode: t.props.data
                            })) : a.createElement(f.Va, {
                                "data-test-selector": y,
                                margin: {
                                    bottom: 2
                                }
                            }, a.createElement(f.Va, {
                                margin: {
                                    bottom: .5
                                }
                            }, a.createElement(f.o, {
                                ratio: f.p.Aspect16x9
                            }, a.createElement(f.cb, null))), a.createElement(f.V, null, a.createElement(f.cb, {
                                width: 150
                            })), a.createElement(f.V, {
                                fontSize: f.Aa.Size7
                            }, a.createElement(f.cb, {
                                width: 100
                            })))
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(f.Va, null, this.renderStream())
                    }, t
                }(a.Component),
                S = n("chV5"),
                C = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.componentDidUpdate = function() {
                        this.props.data && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = null,
                            t = "/directory";
                        if (this.props.data && !this.props.data.loading && !this.props.data.error && this.props.data.directory && this.props.data.directory.streams && this.props.data.directory.streams.edges) {
                            t = this.props.data.directory.name;
                            var n = this.props.data.directory.streams.edges.filter(function(e) {
                                var t = e.node;
                                return t && t.broadcaster && t.broadcaster.login
                            }).slice(0, 1).map(function(e) {
                                return e.node
                            });
                            n.length && (e = n[0])
                        }
                        return a.createElement(w, {
                            data: e,
                            index: this.props.index,
                            directoryName: t,
                            directoryType: this.props.directoryType,
                            trackingMedium: this.props.trackingMedium
                        })
                    }, t = i.__decorate([Object(l.a)(S, {
                        options: function(e) {
                            return {
                                fetchPolicy: "network-only",
                                variables: {
                                    name: e.name,
                                    limit: e.limit ? e.limit : 3,
                                    type: Object(d.a)(e.directoryType)
                                }
                            }
                        }
                    }), Object(c.a)("CommunityStream")], t)
                }(a.Component),
                N = "community-streams-row__ad",
                _ = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            adDisplayed: !1
                        }, t.renderStreamGridWithAdSlot = function() {
                            var e = a.createElement(f.Va, {
                                    key: "ad",
                                    "data-test-selector": N,
                                    display: f.W.Flex,
                                    flexGrow: 1,
                                    justifyContent: f.Ua.Center,
                                    padding: {
                                        bottom: t.state.adDisplayed ? 2 : 0,
                                        left: t.state.adDisplayed ? .5 : 0
                                    }
                                }, a.createElement(r.a, {
                                    adSize: o.c.anonFront.rect,
                                    adUnit: o.d.frontpage,
                                    slotID: o.b.anonFront.rect,
                                    targeting: {
                                        pagetype: o.a.frontpage
                                    },
                                    slotRendered: t.onSlotRendered,
                                    autoEnable: !1
                                })),
                                n = t.renderStreams().map(function(e, t) {
                                    return a.createElement(f.P, {
                                        key: "stream-" + t.toString(),
                                        cols: 4
                                    }, e)
                                });
                            return n.splice(2, 0, e), a.createElement(f.Va, {
                                padding: {
                                    x: 1
                                }
                            }, a.createElement(f.Ha, {
                                gutterSize: f.Ia.Medium
                            }, n))
                        }, t.renderStreams = function() {
                            if (t.props.data) {
                                var e = t.props.data;
                                return t.props.withAd && t.state.adDisplayed && (e = e.slice(0, 2)), e.map(function(e, n) {
                                    return a.createElement(w, {
                                        key: e.id,
                                        data: e,
                                        index: n,
                                        directoryName: e.title,
                                        directoryType: t.props.directoryType,
                                        trackingMedium: t.props.trackingMedium
                                    })
                                })
                            }
                            if (t.props.names) {
                                var n = t.props.names;
                                return t.props.withAd && t.state.adDisplayed && (n = n.slice(0, 2)), n.map(function(e, n) {
                                    return a.createElement(C, {
                                        key: e,
                                        name: e,
                                        index: n,
                                        directoryType: t.props.directoryType,
                                        trackingMedium: t.props.trackingMedium
                                    })
                                })
                            }
                            throw new Error("Need to pass either data or names into CommunityStreamsRow")
                        }, t.onSlotRendered = function() {
                            t.state.adDisplayed || t.setState({
                                adDisplayed: !0
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        if (this.props.withAd) return this.renderStreamGridWithAdSlot();
                        var e = this.props.data && 1 === this.props.data.length || this.props.names && 1 === this.props.names.length ? 1 : 0;
                        return a.createElement(f.Va, {
                            margin: {
                                x: 1
                            }
                        }, a.createElement(f.Tb, {
                            gutterSize: f.Vb.Small,
                            childWidth: f.Ub.Large,
                            placeholderItems: e,
                            noWrap: !0
                        }, this.renderStreams()))
                    }, t
                }(a.Component),
                T = Object(s.c)("CommunityStreamsRow")(_);
            n.d(t, !1, function() {
                return N
            }), n.d(t, !1, function() {
                return _
            }), n.d(t, "a", function() {
                return T
            })
        },
        Igt5: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            }), n.d(t, "b", function() {
                return a
            }), n.d(t, "d", function() {
                return r
            }), n.d(t, "c", function() {
                return o
            }), n.d(t, "e", function() {
                return s
            }), n.d(t, "f", function() {
                return l
            }), n.d(t, "g", function() {
                return d
            }), n.d(t, "i", function() {
                return c
            }), n.d(t, "j", function() {
                return u
            }), n.d(t, "k", function() {
                return m
            }), n.d(t, "l", function() {
                return p
            }), n.d(t, "h", function() {
                return g
            }), n.d(t, "m", function() {
                return h
            });
            var i = "directory.LANGUAGE_TAGS_UPDATED",
                a = "directory.LOL_CHAMPIONS_CHANGED",
                r = "directory.LOL_CHAMPIONS_LOADING",
                o = "directory.LOL_CHAMPIONS_ERRORED",
                s = "directory.TAG_FILTER_ADDED",
                l = "directory.TAG_FILTER_CHANGED",
                d = "directory.TAG_FILTER_REMOVED";

            function c(e) {
                return {
                    type: i,
                    languageTags: e
                }
            }

            function u(e) {
                return {
                    type: o,
                    leagueOfLegendsChampionsErrored: e
                }
            }

            function m(e) {
                return {
                    type: r,
                    leagueOfLegendsChampionsLoading: e
                }
            }

            function p(e) {
                var t = {},
                    n = e.data;
                for (var i in n) n.hasOwnProperty(i) && (t[n[i].id] = n[i]);
                return {
                    type: a,
                    apiData: e,
                    championsMap: t,
                    apiVersion: e.version
                }
            }

            function g(e, t) {
                return {
                    type: s,
                    addedTag: e,
                    categoryName: t
                }
            }

            function h(e, t) {
                return {
                    type: d,
                    categoryName: t,
                    removedTag: e
                }
            }
        },
        Iqxx: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "broadcastTagFragment"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Tag"
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
                                value: "localizedName"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "tagName"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "isAutomated"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "localizedDescription"
                            },
                            arguments: [],
                            directives: []
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 98
                }
            };
            n.loc.source = {
                body: "fragment broadcastTagFragment on Tag {\nid\nlocalizedName\ntagName\nisAutomated\nlocalizedDescription\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        JRXu: function(e, t, n) {},
        Jl34: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "FollowGameButton_FollowGame"
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
                                    value: "FollowGameInput"
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
                                value: "followGame"
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
                                                                value: "followedAt"
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
                    end: 136
                }
            };
            n.loc.source = {
                body: "mutation FollowGameButton_FollowGame($input: FollowGameInput!) {\nfollowGame(input: $input) {\ngame {\nself {\nfollow {\nfollowedAt\n}\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        L5dg: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            });
            var i = n("q1tI"),
                a = n("0Rl0"),
                r = function(e) {
                    for (var t = [], n = void 0 === e.placeholderCount ? 20 : e.placeholderCount, r = 0; r < n; r++) t.push(i.createElement(a.a, {
                        key: r
                    }));
                    return i.createElement(i.Fragment, null, t)
                }
        },
        MJbm: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                a = n("q1tI"),
                r = n("/7QA"),
                o = (n("efEE"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.logger = r.o.logger.withCategory("resize-detector"), t.onScroll = function() {
                            var e = t.container,
                                n = e.offsetWidth,
                                i = e.offsetHeight,
                                a = e.offsetLeft,
                                r = e.offsetTop;
                            t.logger.debug("Resize Detector -- onScroll"), n === t.width && i === t.height && r === t.top && a === t.left || (t.width = n, t.height = i, t.props.onResize(n, i, r, a)), t.reset()
                        }, t.setGrowDivRef = function(e) {
                            return t.growDiv = e
                        }, t.setGrowChildDivRef = function(e) {
                            return t.growChildDiv = e
                        }, t.setShrinkDivRef = function(e) {
                            return t.shrinkDiv = e
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return a.createElement("div", {
                            className: "resize-detector"
                        }, a.createElement("div", {
                            className: "resize-detector",
                            ref: this.setGrowDivRef
                        }, a.createElement("div", {
                            className: "resize-detector__grow",
                            ref: this.setGrowChildDivRef
                        })), a.createElement("div", {
                            className: "resize-detector",
                            ref: this.setShrinkDivRef
                        }, a.createElement("div", {
                            className: "resize-detector__shrink"
                        })))
                    }, t.prototype.componentDidMount = function() {
                        if (this.growDiv) {
                            this.growDiv.parentElement || this.logger.warn("growDiv.parentElement is undefined!"), this.container = this.growDiv.parentElement.parentElement;
                            var e = this.container.style.position;
                            if ("relative" !== e && "absolute" !== e && "fixed" !== e) {
                                var t = window.getComputedStyle(this.container);
                                t && "static" === t.getPropertyValue("position") && (this.container.style.position = "relative")
                            }
                            this.onScroll(), this.growDiv.addEventListener("scroll", this.onScroll), this.shrinkDiv.addEventListener("scroll", this.onScroll)
                        } else this.logger.warn("growDiv is undefined!")
                    }, t.prototype.componentWillUnmount = function() {
                        this.growDiv.removeEventListener("scroll", this.onScroll), this.shrinkDiv.removeEventListener("scroll", this.onScroll)
                    }, t.prototype.reset = function() {
                        var e = this.growDiv,
                            t = this.shrinkDiv,
                            n = this.growChildDiv.style;
                        n.width = "100000px", n.height = "100000px", e.scrollLeft = 1e5, e.scrollTop = 1e5, t.scrollLeft = 1e5, t.scrollTop = 1e5
                    }, t
                }(a.Component));
            n.d(t, "a", function() {
                return o
            })
        },
        OhOW: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return s
            });
            var i = n("mrSG"),
                a = n("/7QA"),
                r = n("+U0Y"),
                o = n("5xw2");

            function s(e) {
                return e.userPreferences.languagePreferences
            }
            a.o.store.registerReducer("userPreferences", function(e, t) {
                switch (void 0 === e && (e = {
                    languagePreferences: Object(o.b)()
                }), t.type) {
                    case r.a:
                        return i.__assign({}, e, {
                            languagePreferences: t.languagePreferences
                        });
                    default:
                        return e
                }
            })
        },
        On2s: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            }), n.d(t, "b", function() {
                return f
            });
            var i, a = n("mrSG"),
                r = n("/7QA"),
                o = n("8rUg"),
                s = n.n(o),
                l = n("ZrRH"),
                d = n.n(l),
                c = n("6H22"),
                u = n.n(c),
                m = n("X7a7"),
                p = n("YhoA"),
                g = n("Pcnk"),
                h = n("mz1O"),
                v = r.o.logger.withCategory("metadata-info");
            ! function(e) {
                e.Hearthstone = "hearthstone", e.PUBG = "playerunknown's battlegrounds", e.League = "league of legends", e.Overwatch = "overwatch", e.CSGO = "counter-strike%3a global offensive"
            }(i || (i = {}));
            var f = function(e, t) {
                    return a.__awaiter(void 0, void 0, Promise, function() {
                        var n, i, o, s, l, d;
                        return a.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return n = t.toLowerCase(), i = e.counterStrikeGlobalOffensive && e.counterStrikeGlobalOffensive.skill, o = e.hearthstone && e.hearthstone.broadcasterHeroClass, s = e.leagueOfLegends && e.leagueOfLegends.championID, l = e.overwatch && e.overwatch.broadcasterCharacter, i && n === p.a.CounterStrike ? [4, k(i)] : [3, 2];
                                case 1:
                                    return [2, a.sent()];
                                case 2:
                                    return o && n === p.a.Hearthstone ? [4, y(o)] : [3, 4];
                                case 3:
                                    return [2, a.sent()];
                                case 4:
                                    return l && n === p.a.Overwatch ? [4, b(l)] : [3, 6];
                                case 5:
                                    return [2, a.sent()];
                                case 6:
                                    if (s && n === p.a.LeagueOfLegends && (d = r.o.store.getState()).directory)
                                        if (d.directory.leagueOfLegends.championsMap) {
                                            if (d.directory.leagueOfLegends.championsMap) return [2, w(s, d.directory.leagueOfLegends.championsMap, d.directory.leagueOfLegends.version)]
                                        } else r.o.store.dispatch(Object(m.b)());
                                    a.label = 7;
                                case 7:
                                    return [2, null]
                            }
                        })
                    })
                },
                k = function(e) {
                    return a.__awaiter(void 0, void 0, Promise, function() {
                        var t, n, i;
                        return a.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return a.trys.push([0, 2, , 3]), [4, Object(h.a)()];
                                case 1:
                                    return t = a.sent(), (n = {})[e] = t[0]["Skill Group"][e - 1], [2, {
                                        name: n[e].display_name,
                                        label: Object(g.b)(g.a.CSGOSkillGroup),
                                        spriteDetails: {
                                            imageWidth: n[e].image_width,
                                            imageHeight: n[e].image_height,
                                            spriteOffsetX: n[e].sprite_x_offset,
                                            spriteOffsetY: n[e].sprite_y_offset,
                                            spriteURL: s.a
                                        }
                                    }];
                                case 2:
                                    return i = a.sent(), v.error(i, "Failed to load Counter-Strike skill group data"), [2, null];
                                case 3:
                                    return [2]
                            }
                        })
                    })
                },
                y = function(e) {
                    return a.__awaiter(void 0, void 0, void 0, function() {
                        var t, n, i;
                        return a.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return a.trys.push([0, 2, , 3]), [4, Object(h.b)()];
                                case 1:
                                    return t = a.sent(), n = {}, t[0].Class.forEach(function(e) {
                                        n[e.class] = e
                                    }), [2, {
                                        name: n[e].display_name,
                                        label: Object(g.b)(g.a.HearthstoneClass),
                                        spriteDetails: {
                                            imageWidth: n[e].image_width,
                                            imageHeight: n[e].image_height,
                                            spriteOffsetX: n[e].sprite_x_offset,
                                            spriteOffsetY: n[e].sprite_y_offset,
                                            spriteURL: d.a
                                        }
                                    }];
                                case 2:
                                    return i = a.sent(), v.error(i, "Failed to load Hearthstone class data"), [2, null];
                                case 3:
                                    return [2]
                            }
                        })
                    })
                },
                b = function(e) {
                    return a.__awaiter(void 0, void 0, void 0, function() {
                        var t, n, i, r, o, s, l, d, c, m, p, f;
                        return a.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return a.trys.push([0, 2, , 3]), [4, Object(h.d)()];
                                case 1:
                                    for (n = a.sent(), i = void 0, r = 0, o = n; r < o.length; r++)
                                        for (s in i = o[r])
                                            if (i.hasOwnProperty(s))
                                                for (l = i[s], d = 0, c = l; d < c.length; d++)
                                                    if ((m = c[d]).character === e) return (t = {})[m.character] = m, [2, {
                                                        name: (p = t)[e].display_name,
                                                        label: Object(g.b)(g.a.OverwatchCharacter),
                                                        spriteDetails: {
                                                            imageWidth: p[e].image_width,
                                                            imageHeight: p[e].image_height,
                                                            spriteOffsetX: p[e].sprite_x_offset,
                                                            spriteOffsetY: p[e].sprite_y_offset,
                                                            spriteURL: u.a
                                                        }
                                                    }];
                                    return [2, null];
                                case 2:
                                    return f = a.sent(), v.error(f, "Failed to load Overwatch character data"), [2, null];
                                case 3:
                                    return [2]
                            }
                        })
                    })
                },
                w = function(e, t, n) {
                    if (!t || !e) return null;
                    var i = t[e],
                        a = "https://ddragon.leagueoflegends.com/cdn/" + n + "/img/sprite/" + i.image.sprite;
                    return {
                        name: i.name,
                        label: Object(g.b)(g.a.LeagueChampion),
                        spriteDetails: {
                            imageWidth: i.image.w,
                            imageHeight: i.image.h,
                            spriteOffsetX: i.image.x,
                            spriteOffsetY: i.image.y,
                            spriteURL: a
                        }
                    }
                }
        },
        Pcnk: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            }), n.d(t, "b", function() {
                return r
            });
            var i, a = n("/7QA");
            ! function(e) {
                e[e.CSGOMap = 0] = "CSGOMap", e[e.CSGOSkillGroup = 1] = "CSGOSkillGroup", e[e.HearthstoneClass = 2] = "HearthstoneClass", e[e.HearthstoneMode = 3] = "HearthstoneMode", e[e.LeagueChampion = 4] = "LeagueChampion", e[e.OverwatchCharacter = 5] = "OverwatchCharacter"
            }(i || (i = {}));
            var r = function(e) {
                switch (e) {
                    case i.CSGOMap:
                        return Object(a.d)("Map", "CSGOMapFilter");
                    case i.CSGOSkillGroup:
                        return Object(a.d)("Rank", "CSGORankFilter");
                    case i.HearthstoneClass:
                        return Object(a.d)("Class", "HearthstoneClassFilter");
                    case i.HearthstoneMode:
                        return Object(a.d)("Mode", "HearthstoneModeFilter");
                    case i.LeagueChampion:
                        return Object(a.d)("Champion", "LeagueFilter");
                    case i.OverwatchCharacter:
                        return Object(a.d)("Hero", "OverwatchFilter");
                    default:
                        return ""
                }
            }
        },
        PfQt: function(e, t, n) {
            "use strict";
            var i = n("HrG3");
            n.d(t, "a", function() {
                return i.a
            })
        },
        RFKy: function(e, t, n) {},
        RXle: function(e, t, n) {
            "use strict";
            var i = n("86FS");
            n.d(t, "VideoPreviewCard", function() {
                return i.a
            });
            n("0T/G");
            var a = n("0Rl0");
            n.d(t, "VideoPreviewCardPlaceholder", function() {
                return a.a
            })
        },
        S58p: function(e, t, n) {},
        SWMh: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            });
            var i = n("mrSG"),
                a = n("b6Yk"),
                r = function(e, t, n) {
                    return i.__awaiter(void 0, void 0, Promise, function() {
                        var r, o;
                        return i.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    r = null, i.label = 1;
                                case 1:
                                    return i.trys.push([1, 3, , 4]), [4, a.a.get("/v5/videos/" + e + "/markers")];
                                case 2:
                                    return (o = i.sent()).body && o.body.markers.game_changes && (r = o.body.markers.game_changes.sort(function(e, t) {
                                        return e.time - t.time
                                    }).map(function(e, n, i) {
                                        var a = i[n + 1];
                                        return {
                                            duration: a ? a.time - e.time : t - e.time,
                                            offset: e.time,
                                            label: e.label,
                                            thumbnailUrl: e.thumbnail.sheet_url,
                                            videoID: o.body.vod_id
                                        }
                                    }), n && n.boxArtURL && r.unshift({
                                        duration: r[0].offset,
                                        videoID: e,
                                        offset: 0,
                                        label: n.name,
                                        thumbnailUrl: n.boxArtURL
                                    })), [3, 4];
                                case 3:
                                    return i.sent(), [3, 4];
                                case 4:
                                    return [2, r || []]
                            }
                        })
                    })
                }
        },
        T2RZ: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return k
            });
            var i = n("mrSG"),
                a = n("q1tI"),
                r = n("/MKj"),
                o = n("fvjX"),
                s = n("/7QA"),
                l = n("2Ygb"),
                d = n("2xye"),
                c = n("oJov"),
                u = n("JVUd"),
                m = n("WRGI"),
                p = n("moLQ"),
                g = n("yI6f");

            function h(e, t) {
                if (t) {
                    var n = {};
                    return n = "string" == typeof t ? {
                        pathname: t
                    } : t, i.__assign({}, n, {
                        state: i.__assign({}, n.state, e)
                    })
                }
            }

            function v(e, t, n) {
                return n || (n = function() {}),
                    function(a) {
                        n && n(a), s.n.track(d.SpadeEventType.ItemClick, i.__assign({}, e, {
                            item_subsection: t
                        }))
                    }
            }

            function f(e, t) {
                return i.__assign({}, t, {
                    callback: function(n) {
                        t.callback && t.callback(n), s.n.track(d.SpadeEventType.ItemClick, i.__assign({}, e, {
                            item_subsection: d.PageviewContent.Tag,
                            tag_id: n.id
                        }))
                    }
                })
            }

            function k(e, t, n) {
                return function(k) {
                    var y = function(r) {
                        function o() {
                            var e = null !== r && r.apply(this, arguments) || this;
                            return e.itemTrackingID = Object(g.e)(), e.trackImpression = function() {
                                s.n.track(d.SpadeEventType.ItemDisplay, e.getCommonTrackingParams())
                            }, e
                        }
                        return i.__extends(o, r), o.prototype.componentDidMount = function() {
                            this.props.impressionListener.registerImpressionCallback(this.trackImpression)
                        }, o.prototype.render = function() {
                            if (k === c.a) {
                                var e = this.props;
                                return a.createElement(k, i.__assign({}, e, this.wrapGameCardPropsWithTracking(e)))
                            }
                            e = this.props;
                            return a.createElement(k, i.__assign({}, e, this.wrapPreviewCardPropsWithTracking(e)))
                        }, o.prototype.getTrackingLocationState = function() {
                            var t = this.props.tagListProps ? this.props.tagListProps.tags.map(function(e) {
                                    return e.id
                                }) : [],
                                n = this.props.tagFilters.map(function(e) {
                                    return e.id
                                }),
                                i = e;
                            this.props.tagFilters.length > 0 && (i === d.PageviewMedium.Browse ? i = d.PageviewMedium.BrowseDirectoryTags : i === d.PageviewMedium.Game && (i = d.PageviewMedium.GameDirectoryTags));
                            var a = {
                                tag_set: JSON.stringify(t),
                                tag_filter_set: JSON.stringify(n),
                                tag_streamer_set: "[]",
                                medium: i
                            };
                            return "POP" === s.o.history.action ? a : (s.o.history.location.state && s.o.history.location.state.medium === d.PageviewMedium.TwitchHome && (a.item_tracking_id = s.o.history.location.state.item_tracking_id, a.medium = s.o.history.location.state.medium, a.content = s.o.history.location.state.content), a)
                        }, o.prototype.getCommonTrackingParams = function() {
                            var i = this.props.trackingProps || {},
                                a = i.itemID,
                                r = i.category,
                                o = i.channelID,
                                s = i.itemPosition,
                                l = i.rowPosition,
                                d = this.props.tagListProps ? this.props.tagListProps.tags.map(function(e) {
                                    return e.id
                                }) : [];
                            return {
                                channel_id: void 0 !== o ? Number(o) : null,
                                component: null,
                                content_type: t,
                                item_tracking_id: this.itemTrackingID,
                                item_id: void 0 !== a ? a : null,
                                item_position: void 0 !== s ? s : null,
                                item_subsection: null,
                                item_page: e,
                                reason_target: null,
                                reason_target_type: null,
                                reason_type: null,
                                request_id: null,
                                row_name: null,
                                row_position: void 0 !== l ? l : null,
                                section: void 0 !== n ? n : null,
                                model_tracking_id: null,
                                tag_set: JSON.stringify(d),
                                tag_streamer_set: "[]",
                                filtered: this.props.tagFilters.length > 0,
                                category: void 0 !== r ? r : null,
                                tag_id: null
                            }
                        }, o.prototype.wrapPreviewCardPropsWithTracking = function(e) {
                            var t = this.getCommonTrackingParams(),
                                n = this.getTrackingLocationState();
                            return i.__assign({
                                onVideoTitleClick: v(t, d.PageviewContent.VideoTitle, e.onVideoTitleClick),
                                linkTo: h(n, this.props.linkTo),
                                onThumbnailClick: v(t, d.PageviewContent.VideoThumbnail, e.onThumbnailClick),
                                channelLinkTo: h(n, e.channelLinkTo),
                                onChannelLoginClick: v(t, d.PageviewContent.ChannelMetadata, e.onChannelLoginClick),
                                onChannelImageClick: v(t, d.PageviewContent.UserThumbnail, e.onChannelImageClick),
                                gameTitleLinkTo: h(n, e.gameTitleLinkTo),
                                onGameTitleClick: v(t, d.PageviewContent.GameName, e.onGameTitleClick)
                            }, e.tagListProps && {
                                tagListProps: f(t, e.tagListProps)
                            }, n.medium && {
                                trackingContext: {
                                    medium: n.medium,
                                    content: n.content
                                }
                            })
                        }, o.prototype.wrapGameCardPropsWithTracking = function(e) {
                            var t = this.getCommonTrackingParams(),
                                n = this.getTrackingLocationState();
                            return i.__assign({
                                linkTo: h(n, e.linkTo),
                                onClick: v(t, d.PageviewContent.GameBoxart, this.props.onClick)
                            }, e.tagListProps && {
                                tagListProps: f(t, e.tagListProps)
                            })
                        }, o.displayName = Object(l.a)(o.name, k), o
                    }(a.Component);
                    return Object(o.compose)(Object(u.a)("PreviewCard-" + e + "-" + t, {
                        percentage: 75
                    }), Object(r.connect)(function(t, n) {
                        var i = [];
                        if (e === d.PageviewMedium.Game) {
                            var a = n.trackingProps && n.trackingProps.categoryName;
                            i = a ? Object(p.a)(t, a) : []
                        } else i = Object(m.a)(t);
                        return {
                            tagFilters: i
                        }
                    }))(y)
                }
            }
        },
        Uc21: function(e, t, n) {
            var i = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "FollowingLive_CurrentUser"
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
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "isTagsExperiment"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Boolean"
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
                                        value: "follows"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "totalCount"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "followedLiveUsers"
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
                                                                    value: "50"
                                                                }
                                                            }],
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
                                                                                    value: "40"
                                                                                }
                                                                            }, {
                                                                                kind: "Argument",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "height"
                                                                                },
                                                                                value: {
                                                                                    kind: "IntValue",
                                                                                    value: "56"
                                                                                }
                                                                            }],
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
                                                                        value: "title"
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
                                                                            value: "320"
                                                                        }
                                                                    }, {
                                                                        kind: "Argument",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "height"
                                                                        },
                                                                        value: {
                                                                            kind: "IntValue",
                                                                            value: "180"
                                                                        }
                                                                    }],
                                                                    directives: []
                                                                }, {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "tags"
                                                                    },
                                                                    arguments: [],
                                                                    directives: [{
                                                                        kind: "Directive",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "include"
                                                                        },
                                                                        arguments: [{
                                                                            kind: "Argument",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "if"
                                                                            },
                                                                            value: {
                                                                                kind: "Variable",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "isTagsExperiment"
                                                                                }
                                                                            }
                                                                        }]
                                                                    }],
                                                                    selectionSet: {
                                                                        kind: "SelectionSet",
                                                                        selections: [{
                                                                            kind: "FragmentSpread",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "broadcastTagFragment"
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
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 544
                }
            };
            i.loc.source = {
                body: '#import "twilight/features/tags/models/broadcast-tag-fragment.gql"\nquery FollowingLive_CurrentUser($limit: Int $cursor: Cursor $isTagsExperiment: Boolean!) {\ncurrentUser {\nid\nfollows {\ntotalCount\n}\nfollowedLiveUsers(first: $limit after: $cursor) {\nedges {\nnode {\nid\nlogin\ndisplayName\nprofileImageURL(width: 50)\nstream {\nid\ngame {\nid\nname\nboxArtURL(width: 40 height: 56)\n}\nviewersCount\ntitle\ntype\npreviewImageURL(width: 320 height: 180)\ntags @include(if: $isTagsExperiment) {\n...broadcastTagFragment\n}\n}\n}\ncursor\n}\npageInfo {\nhasNextPage\n}\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var a = {};
            i.definitions = i.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !a[t] && (a[t] = !0, !0)
                })
            }(n("Iqxx").definitions)), e.exports = i
        },
        Uive: function(e, t, n) {
            "use strict";
            var i = n("/MKj"),
                a = n("mrSG"),
                r = n("q1tI"),
                o = n("/7QA"),
                s = n("N0BP"),
                l = n("MPw5"),
                d = n("cTNz"),
                c = n("KxT4"),
                u = n("YUvD"),
                m = "#google_ads_iframe_\\/3576121\\/twitch\\/directory_0",
                p = "#google_ads_iframe_\\/3576121\\/twitch\\/directory_1",
                g = function(e) {
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
                                            return n.trys.push([1, 3, , 4]), [4, l.a.createSlot(e.slotID, e.adUnit, e.adSize, e.targeting, e.autoEnable, e.gdpr.blockConsentRequiredContent)];
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
                                                autoEnable: e.autoEnable,
                                                blockConsentRequiredContent: e.gdpr.blockConsentRequiredContent
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
                                var i;
                                if (n.props.slotID === d.b.directory.banner) return void((i = n.slotRef.querySelector(m)) && 1 !== i.clientWidth && n.setState({
                                    shouldDisplay: !0
                                }, function() {
                                    return n.slotRendered(e.slot)
                                }));
                                if (n.props.slotID === d.b.directory.rectangle) return void((i = n.slotRef.querySelector(p)) && 1 !== i.clientWidth && n.setState({
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
                        }, n.shouldCreateSlot = function(e) {
                            return e.gdpr.status !== c.b.Loading && e.trackingSet
                        }, n.state = {
                            shouldDisplay: !1
                        }, n
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        d.g.addListener(d.f, this.onSlotRenderEnd), this.shouldCreateSlot(this.props) ? (this.logger.debug("Consent ready. Tracking is set. Creating slot (componentDidMount)", this.props.slotID), this.createSlot(this.props)) : this.logger.debug("Consent not ready or Tracking is not set. Skipping slot creation (componentDidMount)", this.props.slotID)
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        this.state.slotCreated || (!this.shouldCreateSlot(e) || e.gdpr.status === this.props.gdpr.status && e.trackingSet === this.props.trackingSet ? this.logger.debug("Tracking is not set. Skipping slot creation (componentWillReceiveProps)", this.props.slotID) : (this.logger.debug("Tracking is set. Creating slot (componentWillReceiveProps)", this.props.slotID), this.createSlot(e)))
                    }, t.prototype.componentWillUnmount = function() {
                        this.logger.debug("Destroying Slot (componentWillUnmount)", this.props.slotID), d.g.removeListener(d.f, this.onSlotRenderEnd), this.state.slot && l.a.destroySlot(this.state.slot)
                    }, t.prototype.shouldComponentUpdate = function(e, t) {
                        return t.shouldDisplay !== this.state.shouldDisplay
                    }, t.prototype.render = function() {
                        var e = a.__assign({}, this.props.injectStyles);
                        return this.state.shouldDisplay || (e.display = "none"), r.createElement("div", a.__assign({
                            style: e,
                            id: this.props.slotID,
                            ref: this.setRef
                        }, Object(s.a)(this.props)))
                    }, t
                }(r.Component),
                h = Object(u.a)(c.c.Amazon)(g);
            var v = Object(i.connect)(function(e) {
                return {
                    trackingSet: e.ads.trackingSet
                }
            })(h);
            n.d(t, "a", function() {
                return v
            })
        },
        Uyt6: function(e, t, n) {
            "use strict";
            n.r(t);
            var i = n("/MKj"),
                a = n("fvjX"),
                r = n("1/iK"),
                o = n("y5D0"),
                s = n("kRBY"),
                l = n("mrSG"),
                d = n("q1tI"),
                c = n("4p7I"),
                u = n("yoKv"),
                m = n("/7QA"),
                p = n("ZDlU"),
                g = n("GnwI"),
                h = n("Bh3T"),
                v = n("yR8l"),
                f = n("V+GM"),
                k = n("NvVO"),
                y = n("2xye"),
                b = n("D7An"),
                w = n("TDc0"),
                S = n("fVj5"),
                C = n("Ue10"),
                N = n("bp79"),
                _ = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        n.userDataLoaded = function() {
                            return n.props.data && !n.props.data.loading
                        };
                        var i = m.o.experiments.getAssignment(b.b.WebOnboarding),
                            a = m.o.experiments.getAssignment(b.b.DiscoveryFrontpageMVP);
                        return n.state = {
                            shouldSeeForYou: Object(w.g)(i) && !Object(w.f)(a)
                        }, n
                    }
                    return l.__extends(t, e), t.prototype.componentDidUpdate = function() {
                        this.userDataLoaded() && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        if (!this.userDataLoaded()) return null;
                        var e = this.props.activeCategory,
                            t = [d.createElement(C.yb, {
                                key: "following-overview-tab",
                                active: void 0 === e,
                                linkTo: "/directory/following",
                                "data-a-target": "following-overview-tab"
                            }, Object(m.d)("Overview", "FollowingHeaderTabs")), d.createElement(C.yb, {
                                key: "following-channels-tab",
                                active: e === y.SpadeFollowingCategory.Live,
                                "data-a-target": "following-channels-tab",
                                linkTo: "/directory/following/live"
                            }, Object(m.d)("Channels", "FollowingHeaderTabs")), d.createElement(C.yb, {
                                key: "following-hosts-tab",
                                active: e === y.SpadeFollowingCategory.Hosts,
                                "data-a-target": "following-hosts-tab",
                                linkTo: "/directory/following/hosts"
                            }, Object(m.d)("Hosts", "FollowingHeaderTabs")), d.createElement(C.yb, {
                                key: "following-games-tab",
                                active: e === y.SpadeFollowingCategory.Games,
                                "data-a-target": "following-games-tab",
                                linkTo: "/directory/following/games"
                            }, Object(m.d)("Games", "FollowingHeaderTabs")), !Object(S.b)() && d.createElement(C.yb, {
                                key: "following-communities-tab",
                                active: e === y.SpadeFollowingCategory.Communities,
                                linkTo: "/directory/following/communities",
                                "data-a-target": "following-communities-tab"
                            }, Object(m.d)("Communities", "FollowingPage"))];
                        if (this.state.shouldSeeForYou && !this.props.data.error && this.props.data.currentUser && Object(w.h)(new Date(this.props.data.currentUser.createdAt))) {
                            var n = d.createElement(C.yb, {
                                key: "following-foryou-tab",
                                "data-test-selector": "for-you-tab",
                                active: e === y.SpadeFollowingCategory.ForYou,
                                linkTo: "/directory/following/foryou",
                                "data-a-target": "following-foryou-tab"
                            }, Object(m.d)("For You", "FollowingHeaderTabs"));
                            t.unshift(n)
                        }
                        return d.createElement(C.Va, {
                            className: "following__header-tabs",
                            margin: {
                                bottom: 2
                            }
                        }, d.createElement(C.zb, null, t))
                    }, t = l.__decorate([Object(g.c)("FollowingHeaderTabs"), Object(v.a)(N)], t)
                }(d.Component),
                T = n("HrG3"),
                E = n("5myU");
            n("jE8A");

            function F(e) {
                var t;
                if (!e.communities || 0 === e.communities.length) return d.createElement(C.V, {
                    "data-a-target": "no-communities-text"
                }, Object(m.d)("No communities", "LiveCommunities"));
                var n, i = e.communities;
                if (e.showSample) {
                    var a = Object(E.a)(e.directoryWidth || 0, 180, 1); - 1 === a ? i = [] : a < i.length && (i = i.slice(0, a - 1), n = d.createElement(T.a, {
                        subHeader: Object(m.d)("Communities", "LiveCommunities--view-all"),
                        linkTo: "/directory/following/communities",
                        aspectRatio: C.p.Aspect3x4
                    })), t = d.createElement(C.Va, {
                        margin: {
                            bottom: 2
                        }
                    }, d.createElement(C.V, {
                        type: C.Nb.H4,
                        color: C.O.Base,
                        bold: !0,
                        "data-a-target": "live-communities-header"
                    }, Object(m.d)("Communities", "LiveCommunities")))
                }
                var r = i.map(function(e, t) {
                    var n = e.node,
                        i = Object(m.d)("{channelsCount,number} streams", {
                            channelsCount: n.broadcastersCount
                        }, "LiveCommunities"),
                        a = Object(m.d)("{viewerCount,number} viewers {streams}", {
                            viewerCount: n.viewersCount,
                            streams: d.createElement("span", null, i)
                        }, "LiveCommunities");
                    return d.createElement(C.Va, {
                        key: n.id,
                        margin: {
                            bottom: 2
                        }
                    }, d.createElement(C.y, {
                        linkTo: {
                            pathname: "/communities/" + encodeURIComponent(n.name),
                            state: {
                                content: "communities_select_click",
                                medium: "twitch_communities_directory",
                                content_index: t
                            }
                        },
                        title: n.displayName,
                        alt: n.displayName + " cover image",
                        src: n.avatarURL || m.a.defaultBoxArtURL,
                        info: d.createElement("span", {
                            className: "live-communities__info"
                        }, a),
                        "data-a-target": "live-community-card-" + t
                    }))
                });
                return d.createElement("div", null, t, d.createElement(C.Tb, {
                    gutterSize: C.Vb.Small,
                    childWidth: C.Ub.Small,
                    placeholderItems: 30
                }, r, n))
            }
            var I = n("gukg"),
                L = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return l.__extends(t, e), t.prototype.componentDidMount = function() {
                        m.o.setPageTitle(Object(m.d)("Communities You Follow", "FollowingCommunitiesPage")), this.onRender()
                    }, t.prototype.componentDidUpdate = function() {
                        this.onRender()
                    }, t.prototype.render = function() {
                        var e;
                        return e = this.props.data.loading ? d.createElement(C.Va, {
                            display: C.W.Flex,
                            position: C.db.Absolute,
                            fullHeight: !0,
                            fullWidth: !0
                        }, d.createElement(C.Xa, {
                            fillContent: !0
                        })) : this.props.data.error ? d.createElement(p.a, {
                            message: Object(m.d)("Error loading data.", "FollowingCommunitiesPage")
                        }) : d.createElement(F, {
                            communities: this.props.data.currentUser && this.props.data.currentUser.followedCommunities ? this.props.data.currentUser.followedCommunities.edges : []
                        }), d.createElement(C.Va, {
                            padding: 3
                        }, d.createElement(_, {
                            activeCategory: y.SpadeFollowingCategory.Communities
                        }), e)
                    }, t.prototype.onRender = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t = l.__decorate([Object(v.a)(I, {
                        options: {
                            fetchPolicy: "cache-and-network",
                            variables: {
                                limit: 100
                            }
                        }
                    }), Object(g.c)("FollowingCommunitiesPage", {
                        destination: k.a.DirectoryFollowingCommunities
                    }), Object(f.a)({
                        location: y.PageviewLocation.Directory,
                        properties: function() {
                            return {
                                content_type: y.PageviewDirectoryContentType.Communities,
                                tab: y.PageviewFollowingTab.Communities
                            }
                        }
                    })], t)
                }(d.Component),
                O = n("DMoW"),
                D = n("aCAx"),
                x = n("cZKs"),
                V = n("8/mp"),
                P = n("qyxT"),
                A = n("yziQ"),
                G = n("xugo"),
                j = (n("nrVK"), function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.state = {
                            followCount: 0
                        }, n.getAndStoreShuffledGameCards = function() {
                            n.props.data && n.props.data.games && (n.shuffledGameCards = Object(P.a)(n.props.data.games.edges.map(function(e, t) {
                                var i = e.node;
                                return i && i.id ? d.createElement(C.Va, {
                                    key: i.id
                                }, d.createElement(A.a, {
                                    info: "",
                                    title: i.name,
                                    imageAlt: i.name,
                                    imageSrc: i.boxArtURL,
                                    onFollow: n.onFollow,
                                    onUnfollow: n.onUnfollow,
                                    "data-a-target": "follow-game-card-" + t
                                })) : null
                            })))
                        }, n.onClickContinue = function() {
                            n.props.onContinue && n.props.onContinue(), m.o.store.dispatch(Object(D.c)())
                        }, n.onFollow = function() {
                            n.setState(function(e) {
                                return {
                                    followCount: e.followCount + 1
                                }
                            }), n.props.onFollowChange && n.props.onFollowChange()
                        }, n.onUnfollow = function() {
                            n.setState(function(e) {
                                return {
                                    followCount: e.followCount - 1
                                }
                            }), n.props.onFollowChange && n.props.onFollowChange()
                        }, n
                    }
                    return l.__extends(t, e), t.prototype.render = function() {
                        return !this.props.data || this.props.data.loading ? null : (this.shuffledGameCards || this.getAndStoreShuffledGameCards(), d.createElement(C.xb, {
                            className: "following-games-modal",
                            background: C.r.Base,
                            padding: 2,
                            overflow: C.Ya.Hidden,
                            "data-a-target": "follow-games-modal",
                            display: C.W.Flex,
                            flexDirection: C.Y.Column,
                            flexWrap: C.Z.NoWrap
                        }, d.createElement(C.Va, {
                            flexGrow: 0,
                            flexShrink: 0,
                            padding: {
                                bottom: .5
                            },
                            margin: {
                                bottom: 1
                            },
                            textAlign: C.Jb.Center,
                            display: C.W.Flex,
                            flexDirection: C.Y.Column,
                            alignContent: C.e.Center
                        }, d.createElement(C.Va, {
                            margin: {
                                bottom: .5
                            }
                        }, d.createElement(C.V, {
                            fontSize: C.Aa.Size4,
                            color: C.O.Base,
                            bold: !0
                        }, Object(m.d)("Choose some games that you'd like to follow.", "FollowGamesModal"))), d.createElement(C.V, {
                            fontSize: C.Aa.Size5,
                            color: C.O.Alt
                        }, Object(m.d)("This will let you pin your favorites for easy access.", "FollowGamesModal"))), d.createElement(C.Va, {
                            className: "following-games-modal__list",
                            margin: {
                                bottom: 1
                            },
                            flexGrow: 1
                        }, d.createElement(V.b, {
                            suppressScrollX: !0
                        }, d.createElement(C.Va, {
                            padding: 1
                        }, d.createElement(C.Tb, {
                            childWidth: C.Ub.Small,
                            gutterSize: C.Vb.Small,
                            placeholderItems: 99
                        }, this.shuffledGameCards)))), d.createElement(C.Va, {
                            display: C.W.Flex,
                            justifyContent: C.Ua.Center,
                            padding: {
                                y: 1
                            },
                            flexGrow: 0,
                            flexShrink: 0
                        }, d.createElement(C.z, {
                            size: C.D.Large,
                            onClick: this.onClickContinue,
                            disabled: 0 === this.state.followCount
                        }, Object(m.d)("Continue", "FollowGamesModal"))), d.createElement(x.a, null)))
                    }, t = l.__decorate([Object(v.a)(G, {
                        options: {
                            variables: {
                                limit: 40
                            }
                        }
                    })], t)
                }(d.Component)),
                R = n("kduP"),
                U = n("3W+h"),
                M = n("PfQt"),
                B = n("oJov"),
                H = n("AZIu"),
                W = n("x/sq"),
                q = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return l.__extends(t, e), t.prototype.render = function() {
                        var e = d.createElement(C.Va, {
                            margin: {
                                bottom: 2
                            }
                        }, d.createElement(C.V, {
                            type: C.Nb.H4,
                            color: C.O.Base,
                            bold: !0,
                            "data-a-target": "live-games-header"
                        }, Object(m.d)("Live games", "LiveGames")));
                        if (!this.props.games) return d.createElement("div", null, e);
                        var t, n = this.props.games.filter(function(e) {
                            return e && !!e.viewersCount
                        });
                        if (!(n = n.sort(function(e, t) {
                                if (!e) return -1;
                                if (!t) return 1;
                                var n = e.name.toLowerCase(),
                                    i = t.name.toLowerCase();
                                return n < i ? -1 : n > i ? 1 : 0
                            })) || 0 === n.length) return d.createElement(C.xb, {
                            fullWidth: !0,
                            background: C.r.Alt2,
                            display: C.W.Flex,
                            flexDirection: C.Y.Column,
                            alignItems: C.f.Center,
                            padding: {
                                y: 3
                            },
                            margin: {
                                y: 2
                            },
                            "data-target": "following__follow-games-cta"
                        }, d.createElement(C.Va, {
                            margin: {
                                bottom: 1
                            }
                        }, d.createElement(C.V, {
                            fontSize: C.Aa.Size4,
                            color: C.O.Alt2
                        }, Object(m.d)("You can now follow your favorite games!", "LiveGames"))), d.createElement(C.Va, {
                            margin: {
                                top: .5
                            }
                        }, d.createElement(C.z, {
                            size: C.D.Large,
                            onClick: this.props.showFollowGamesModal,
                            "data-a-target": "find-out-more-button"
                        }, Object(m.d)("Find Out More!", "LiveGames"))));
                        if (this.props.showSample && this.props.directoryWidth && this.props.directoryWidth > 0) {
                            var i = Object(E.a)(this.props.directoryWidth, 180, 1);
                            i < n.length && (n = n.slice(0, i - 1), t = d.createElement(C.Va, {
                                margin: {
                                    bottom: 2
                                }
                            }, d.createElement(M.a, {
                                subHeader: "Live Games",
                                linkTo: "/directory/following/games",
                                aspectRatio: C.p.Aspect3x4
                            })))
                        }
                        var a = n.map(function(e, t) {
                            if (!e) return null;
                            var n = Object(W.a)({
                                tags: e.tags,
                                section: H.a.Categories
                            });
                            return d.createElement(C.Va, {
                                key: e.id,
                                margin: {
                                    bottom: 2
                                }
                            }, d.createElement(B.a, {
                                linkTo: {
                                    pathname: Object(R.c)(e.name),
                                    state: {
                                        content: "twitch_following",
                                        medium: "live_game",
                                        content_index: t
                                    }
                                },
                                title: e.name,
                                alt: e.name + " cover image",
                                src: e.boxArtURL || m.a.defaultBoxArtURL,
                                info: e.viewersCount ? Object(m.d)("{viewerCount,number} viewers", {
                                    viewerCount: e.viewersCount
                                }, "LiveGames") : "",
                                "data-a-target": "live-game-card-" + t,
                                tagListProps: n && l.__assign({}, n, {
                                    linkPath: U.a.DirectoryTag
                                })
                            }))
                        });
                        return d.createElement("div", null, e, d.createElement(C.Tb, {
                            gutterSize: C.Vb.Small,
                            childWidth: C.Ub.Small,
                            placeholderItems: 30
                        }, a, t))
                    }, t
                }(d.Component);
            var z = Object(i.connect)(null, function(e, t) {
                    return Object.assign(Object(a.bindActionCreators)({
                        showFollowGamesModal: function() {
                            return Object(D.d)(j, {
                                onFollowChange: t.onFollowChange
                            })
                        }
                    }, e), t)
                })(q),
                Y = n("XHSL"),
                Q = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return l.__extends(t, e), t.prototype.componentDidMount = function() {
                        m.o.setPageTitle(Object(m.d)("Games You Follow", "FollowingGamesPage")), this.onRender()
                    }, t.prototype.componentDidUpdate = function() {
                        this.onRender()
                    }, t.prototype.render = function() {
                        var e;
                        if (this.props.data.loading) e = d.createElement(C.Va, {
                            display: C.W.Flex,
                            position: C.db.Absolute,
                            fullHeight: !0,
                            fullWidth: !0
                        }, d.createElement(C.Xa, {
                            fillContent: !0
                        }));
                        else if (this.props.data.error) e = d.createElement(p.a, {
                            message: Object(m.d)("Error loading data.", "FollowingGamesPage")
                        });
                        else {
                            var t = this.props.data.currentUser;
                            e = d.createElement(z, {
                                games: t && t.followedGames && t.followedGames.nodes ? t.followedGames.nodes : [],
                                onFollowChange: this.props.data.refetch
                            })
                        }
                        return d.createElement(C.Va, {
                            padding: 3
                        }, d.createElement(_, {
                            activeCategory: y.SpadeFollowingCategory.Games
                        }), e)
                    }, t.prototype.onRender = function() {
                        this.props.data.loading || this.props.latencyTracking.reportInteractive()
                    }, t
                }(d.Component),
                $ = Object(a.compose)(Object(v.a)(Y, {
                    options: {
                        fetchPolicy: "cache-and-network",
                        variables: {
                            isTagsExperiment: Object(S.a)(),
                            limit: 100,
                            type: O.v.LIVE
                        }
                    }
                }), Object(g.c)("FollowingGamesPage", {
                    destination: k.a.DirectoryFollowingGames
                }), Object(f.a)({
                    location: y.PageviewLocation.Directory,
                    skip: function(e) {
                        return e.data.loading || !!e.data.error
                    },
                    properties: function(e) {
                        var t = e.data.currentUser;
                        return {
                            content_type: y.PageviewDirectoryContentType.Games,
                            tab: y.PageviewFollowingTab.Games,
                            num_live_games: t && t.followedGames && t.followedGames.nodes && t.followedGames.nodes.filter(function(e) {
                                return e && e.viewersCount
                            }).length
                        }
                    }
                }))(Q),
                X = n("oJmH"),
                J = n("sqxy"),
                Z = n("QVaV");
            n("7I5b");

            function K() {
                return d.createElement(C.Va, {
                    className: "following__empty",
                    margin: {
                        x: "auto"
                    }
                }, d.createElement(C.Va, {
                    textAlign: C.Jb.Center,
                    margin: {
                        bottom: 2
                    }
                }, d.createElement(C.V, {
                    color: C.O.Alt2,
                    fontSize: C.Aa.Size4,
                    type: C.Nb.H4
                }, Object(m.d)("Never miss the Channels you love.", "EmptyChannelList"))), d.createElement(C.Va, {
                    display: C.W.Flex,
                    justifyContent: C.Ua.Between
                }, d.createElement(C.Va, {
                    className: "following__empty-information",
                    position: C.db.Relative
                }, d.createElement(C.Va, {
                    margin: {
                        bottom: 1
                    }
                }, d.createElement("figure", {
                    className: "following__empty-image"
                }, d.createElement("img", {
                    src: "//s.jtvnw.net/jtv_user_pictures/hosted_images/guide_1.png"
                }))), d.createElement(C.V, {
                    fontSize: C.Aa.Size5
                }, Object(m.d)("Like the channel you're watching? Follow it.", "EmptyChannelList")), d.createElement(C.xb, {
                    className: "following__empty-information-num",
                    position: C.db.Absolute,
                    attachLeft: !0,
                    attachTop: !0,
                    background: C.r.Alt,
                    textAlign: C.Jb.Center
                }, Object(m.e)(1))), d.createElement(C.Va, {
                    className: "following__empty-information",
                    position: C.db.Relative
                }, d.createElement(C.Va, {
                    margin: {
                        bottom: 1
                    }
                }, d.createElement("figure", {
                    className: "following__empty-image"
                }, d.createElement("img", {
                    src: "//s.jtvnw.net/jtv_user_pictures/hosted_images/guide_2.png"
                }))), d.createElement(C.V, {
                    fontSize: C.Aa.Size5
                }, Object(m.d)("We'll let you know when the channel goes live again.", "EmptyChannelList")), d.createElement(C.xb, {
                    className: "following__empty-information-num",
                    position: C.db.Absolute,
                    attachLeft: !0,
                    attachTop: !0,
                    background: C.r.Alt,
                    textAlign: C.Jb.Center
                }, Object(m.e)(2))), d.createElement(C.Va, {
                    className: "following__empty-information",
                    position: C.db.Relative
                }, d.createElement(C.Va, {
                    margin: {
                        bottom: 1
                    }
                }, d.createElement("figure", {
                    className: "following__empty-image"
                }, d.createElement("img", {
                    src: "//s.jtvnw.net/jtv_user_pictures/hosted_images/guide_3.png"
                }))), d.createElement(C.V, {
                    fontSize: C.Aa.Size5
                }, Object(m.d)("Come back and watch your favorite channels.", "EmptyChannelList")), d.createElement(C.xb, {
                    className: "following__empty-information-num",
                    position: C.db.Absolute,
                    attachLeft: !0,
                    attachTop: !0,
                    background: C.r.Alt,
                    textAlign: C.Jb.Center
                }, Object(m.e)(3)))))
            }

            function ee(e) {
                var t = Object(m.d)("Live hosts", "LiveHosts"),
                    n = d.createElement(C.Va, {
                        margin: {
                            bottom: 2
                        }
                    }, d.createElement(C.V, {
                        type: C.Nb.H4,
                        color: C.O.Base,
                        bold: !0,
                        "data-a-target": "live-hosts-header"
                    }, t));
                if (!e.hosts || 0 === e.hosts.length) return e.followsCount > 0 ? d.createElement("div", null, n, d.createElement(C.Va, {
                    textAlign: C.Jb.Center,
                    padding: {
                        y: 5
                    }
                }, d.createElement(C.V, {
                    color: C.O.Alt2,
                    fontSize: C.Aa.Size4,
                    "data-a-target": "no-hosts-live-text",
                    italic: !0
                }, Object(m.d)("No Hosts Live", "LiveHosts")))) : d.createElement("div", null, n, !e.showSample && d.createElement(K, null));
                var i, a = [];
                if (e.hosts.forEach(function(e) {
                        e && e.hosting && e.hosting.stream && e.hosting.id && a.push(e)
                    }), e.maxCount) e.maxCount < a.length && (a = a.slice(0, e.maxCount - 1), i = d.createElement(T.a, {
                    subHeader: "Live Hosts",
                    onClickViewAll: e.onClickViewAll
                }));
                else if (e.showSample && e.directoryWidth && e.directoryWidth > 0) {
                    var r = Object(E.a)(e.directoryWidth, 240, 2);
                    r < a.length && (a = a.slice(0, r - 1), i = d.createElement(T.a, {
                        subHeader: t,
                        linkTo: {
                            pathname: "/directory/following/hosts",
                            state: {
                                medium: y.PageviewMedium.Following,
                                content: y.PageviewContent.Following
                            }
                        }
                    }))
                }
                var o = a.map(function(e, t) {
                    if (e.hosting && e.hosting.stream && e.hosting.id) {
                        var n = Object(Z.a)(e.hosting.login, e.hosting.displayName, !0),
                            i = Object(Z.a)(e.login, e.displayName, !0),
                            a = Object(m.d)("{hostDisplayName} hosting {hostedDisplayName}", {
                                hostDisplayName: i,
                                hostedDisplayName: n
                            }, "LiveHosts"),
                            r = e.hosting.stream && e.hosting.stream.game ? Object(R.c)(e.hosting.stream.game.name) : "",
                            o = Object(W.a)({
                                tags: e.hosting.stream.tags,
                                section: H.a.LiveChannels
                            });
                        return o && (o.linkPath = U.a.PopularTag), d.createElement(C.Va, {
                            key: e.id,
                            margin: {
                                bottom: 2
                            }
                        }, d.createElement(J.a, {
                            imageSrc: e.hosting.stream.previewImageURL || m.a.defaultStreamPreviewURL,
                            imageAlt: a,
                            viewerCount: e.hosting.stream && e.hosting.stream.viewersCount || 0,
                            title: a,
                            channelDisplayName: e.hosting.displayName || "",
                            channelLogin: e.hosting.login || "",
                            gameImageSrc: e.hosting.stream && e.hosting.stream.game && e.hosting.stream.game.boxArtURL || m.a.defaultBoxArtURL,
                            gameTitle: e.hosting.stream.game && e.hosting.stream.game.name || "",
                            gameLinkTo: {
                                pathname: r,
                                state: {
                                    medium: y.PageviewMedium.Following,
                                    content: y.PageviewContent.LiveHost,
                                    content_index: t
                                }
                            },
                            linkTo: {
                                pathname: "/" + e.login,
                                state: {
                                    medium: y.PageviewMedium.Following,
                                    content: y.PageviewContent.LiveHost,
                                    content_index: t
                                }
                            },
                            channelNameLinkTo: {
                                pathname: "/" + e.hosting.login + "/videos",
                                state: {
                                    medium: y.PageviewMedium.Following,
                                    content: y.PageviewContent.LiveHost,
                                    content_index: t
                                }
                            },
                            "data-a-target": "live-host-card-" + t,
                            streamType: e.hosting.stream.type,
                            hosting: !0,
                            hostedByChannelLogin: e.login,
                            channelImageSrc: e.hosting.profileImageURL || "",
                            tagListProps: o
                        }))
                    }
                });
                return d.createElement("div", null, n, d.createElement(C.Tb, {
                    gutterSize: C.Vb.Small,
                    childWidth: C.Ub.Large,
                    placeholderItems: 20
                }, o, i))
            }
            var te = n("rJ4n"),
                ne = 50,
                ie = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            maxCount: ne
                        }, t.onClickViewAll = function() {
                            return l.__awaiter(t, void 0, void 0, function() {
                                return l.__generator(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return [4, this.props.data.refetch({
                                                limit: 100
                                            })];
                                        case 1:
                                            return e.sent(), this.setState({
                                                maxCount: null
                                            }), [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.componentDidMount = function() {
                        m.o.setPageTitle(Object(m.d)("Hosts You Follow", "FollowingHostsPage")), this.onRender()
                    }, t.prototype.componentDidUpdate = function() {
                        this.onRender()
                    }, t.prototype.render = function() {
                        var e;
                        if (this.props.data.loading) e = d.createElement(C.Va, {
                            display: C.W.Flex,
                            position: C.db.Absolute,
                            fullHeight: !0,
                            fullWidth: !0
                        }, d.createElement(C.Xa, {
                            fillContent: !0
                        }));
                        else if (this.props.data.error) e = d.createElement(p.a, {
                            message: Object(m.d)("Error loading data.", "FollowingHostsPage")
                        });
                        else {
                            var t = this.props.data.currentUser ? this.props.data.currentUser.followedHosts.nodes : [],
                                n = this.props.data.currentUser ? this.props.data.currentUser.follows.totalCount : 0;
                            e = d.createElement(ee, {
                                hosts: t,
                                followsCount: n,
                                maxCount: this.state.maxCount,
                                onClickViewAll: this.onClickViewAll
                            })
                        }
                        return d.createElement(C.Va, {
                            padding: 3
                        }, d.createElement(_, {
                            activeCategory: y.SpadeFollowingCategory.Hosts
                        }), e)
                    }, t.prototype.onRender = function() {
                        this.props.data.loading || this.props.latencyTracking.reportInteractive()
                    }, t
                }(d.Component),
                ae = Object(X.compose)(Object(v.a)(te, {
                    options: function() {
                        return {
                            fetchPolicy: "cache-and-network",
                            variables: {
                                isTagsExperiment: Object(S.a)(),
                                limit: 51
                            }
                        }
                    }
                }), Object(g.c)("FollowingHostsPage", {
                    destination: k.a.DirectoryFollowingHosts
                }), Object(f.a)({
                    location: y.PageviewLocation.Directory,
                    skip: function(e) {
                        return e.data.loading || !!e.data.error
                    },
                    properties: function(e) {
                        return {
                            content_type: y.PageviewDirectoryContentType.Hosts,
                            tab: y.PageviewFollowingTab.Hosts,
                            num_host_channels: e.data.currentUser && e.data.currentUser.followedHosts.nodes.length || 0
                        }
                    }
                }))(ie),
                re = n("MJbm"),
                oe = n("RXle");

            function se(e) {
                var t = Object(m.d)("Live channels", "LiveChannels"),
                    n = d.createElement(C.Va, {
                        margin: {
                            bottom: 2
                        }
                    }, d.createElement(C.V, {
                        type: C.Nb.H4,
                        color: C.O.Base,
                        bold: !0,
                        "data-a-target": "live-channels-header"
                    }, t));
                if (null !== e.users && 0 === e.users.length) return e.followsCount > 0 ? d.createElement("div", null, n, d.createElement(C.Va, {
                    textAlign: C.Jb.Center,
                    padding: {
                        y: 5
                    }
                }, d.createElement(C.V, {
                    color: C.O.Alt2,
                    fontSize: C.Aa.Size4,
                    "data-a-target": "no-channels-live-text",
                    italic: !0
                }, Object(m.d)("No Channels Live", "LiveChannels")))) : d.createElement("div", null, n, d.createElement(K, null));
                var i, a = e.users || [];
                if (e.maxDisplayCount && e.maxDisplayCount < a.length) a = a.slice(0, e.maxDisplayCount - 1), i = d.createElement(M.a, {
                    subHeader: "Live Channels",
                    onClickViewAll: e.onClickViewAll
                });
                else if (e.showSample && e.directoryWidth && e.directoryWidth > 0) {
                    var r = Object(E.a)(e.directoryWidth, 240, 2);
                    r < a.length && (a = a.slice(0, r - 1), i = d.createElement(M.a, {
                        subHeader: t,
                        linkTo: "/directory/following/live"
                    }))
                }
                var o = a.map(function(e, t) {
                    if (!e.stream || !e.id) return null;
                    var n = {
                            medium: y.PageviewMedium.Following,
                            content: y.PageviewContent.Live,
                            content_index: t
                        },
                        i = e.stream && e.stream.game ? Object(R.c)(e.stream.game.name) : "",
                        a = Object(W.a)({
                            tags: e.stream.tags,
                            section: H.a.LiveChannels
                        });
                    return a && (a.linkPath = U.a.PopularTag), d.createElement(C.Va, {
                        key: e.id,
                        margin: {
                            bottom: 2
                        }
                    }, d.createElement(J.a, {
                        imageSrc: e.stream && e.stream.previewImageURL || m.a.defaultStreamPreviewURL,
                        imageAlt: e.stream && e.stream.title || "",
                        viewerCount: e.stream && e.stream.viewersCount || 0,
                        title: e.stream && e.stream.title || Object(m.d)("Untitled Broadcast", "LiveChannels"),
                        channelDisplayName: e.displayName || "",
                        channelLogin: e.login || "",
                        gameImageSrc: e.stream && e.stream.game && e.stream.game.boxArtURL || m.a.defaultBoxArtURL,
                        gameTitle: e.stream && e.stream.game ? e.stream.game.name : "",
                        gameLinkTo: {
                            pathname: i,
                            state: n
                        },
                        linkTo: {
                            pathname: "/" + e.login,
                            state: n
                        },
                        channelNameLinkTo: {
                            pathname: "/" + e.login + "/videos",
                            state: n
                        },
                        "data-a-target": "live-channel-card-" + t,
                        vodcast: !(!e.stream || "watch_party" !== e.stream.type),
                        streamType: e.stream.type,
                        channelImageSrc: e.profileImageURL || "",
                        tagListProps: a
                    }))
                });
                if (0 === a.length)
                    for (var s = 0; s < 5; s++) o.push(d.createElement(oe.VideoPreviewCardPlaceholder, {
                        key: "live-channels-placeholder-" + s
                    }));
                return d.createElement("div", null, n, d.createElement(C.Tb, {
                    gutterSize: C.Vb.Small,
                    childWidth: C.Ub.Large,
                    placeholderItems: 20
                }, o, i))
            }
            var le = n("GFmA"),
                de = n("EJax"),
                ce = n("1ka0"),
                ue = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return l.__extends(t, e), t.prototype.componentDidUpdate = function() {
                        this.props.data.loading || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        if (this.props.data.loading || this.props.data.error || !this.props.data.currentUser || !this.props.data.currentUser.recommendations || 0 === this.props.data.currentUser.recommendations.videos.edges.length) return null;
                        var e = d.createElement(C.Va, {
                                margin: {
                                    bottom: 2
                                }
                            }, d.createElement(C.V, {
                                type: C.Nb.H4,
                                color: C.O.Base,
                                bold: !0
                            }, Object(m.d)("Based on your viewing history", "SuggestedVideos"))),
                            t = [];
                        if (this.props.data.currentUser.recommendations.videos && (t = this.props.data.currentUser.recommendations.videos.edges.map(function(e) {
                                return e.node
                            })), this.props.directoryWidth > 0) {
                            var n = Object(E.a)(this.props.directoryWidth, 240, 2);
                            t = t.slice(0, n)
                        }
                        return d.createElement("div", null, e, d.createElement(de.b, {
                            listContext: le.b.MixedGameAndChannelList,
                            trackingMedium: y.PageviewMedium.Following,
                            trackingContent: y.PageviewContent.SuggestedVideos,
                            videoCardSize: C.Ub.Large,
                            videos: t
                        }))
                    }, t = l.__decorate([Object(v.a)(ce, {
                        options: {
                            fetchPolicy: "network-only",
                            variables: {
                                limit: 30
                            }
                        }
                    }), Object(g.c)("SuggestedVideos")], t)
                }(d.Component),
                me = n("lZCe"),
                pe = n("ZS2+").a.wrap(function() {
                    return n.e(134).then(n.bind(null, "YBPT"))
                }, "LatestVideosFromFollowedCarousel"),
                ge = function(e) {
                    var t = {
                        assignments: {
                            fallback: function() {
                                return null
                            },
                            enabled: function() {
                                return d.createElement(pe, l.__assign({}, e))
                            }
                        },
                        loader: function() {
                            return d.createElement(C.Xa, null)
                        },
                        name: b.b.FollowingIndexLatestVideosV2
                    };
                    return d.createElement(me.a, l.__assign({}, t))
                },
                he = n("45mq"),
                ve = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            directoryWidth: -1
                        }, t.onResize = function(e) {
                            t.setState({
                                directoryWidth: e
                            })
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.componentDidMount = function() {
                        m.o.setPageTitle(Object(m.d)("Following", "FollowingPage")), this.onRender()
                    }, t.prototype.componentDidUpdate = function() {
                        this.onRender()
                    }, t.prototype.render = function() {
                        var e = this.props.data && this.props.data.currentUser;
                        return this.props.data.error || !this.props.data.loading && !e ? d.createElement(p.a, {
                            message: Object(m.d)("Error loading data.", "FollowingPage")
                        }) : d.createElement(C.Va, {
                            padding: 3
                        }, d.createElement(_, null), d.createElement(se, {
                            key: "live-channels",
                            showSample: !0,
                            directoryWidth: this.state.directoryWidth,
                            users: this.props.data.loading ? null : e && e.followedLiveUsers.nodes || [],
                            followsCount: e ? e.follows.totalCount : 0
                        }), d.createElement(ge, {
                            tracking: {
                                content: y.PageviewContent.Following,
                                location: y.PageviewLocation.Directory,
                                medium: y.PageviewMedium.Following
                            }
                        }), this.props.firstPageLoaded && e && e.followedHosts.nodes.length > 0 && d.createElement(ee, {
                            key: "live-hosts",
                            showSample: !0,
                            directoryWidth: this.state.directoryWidth,
                            hosts: e ? e.followedHosts.nodes : [],
                            followsCount: e ? e.follows.totalCount : 0
                        }), this.props.firstPageLoaded && e && d.createElement(z, {
                            key: "live-games",
                            showSample: !0,
                            directoryWidth: this.state.directoryWidth,
                            games: e ? e.followedGames.nodes : [],
                            onFollowChange: this.props.data.refetch
                        }), this.props.firstPageLoaded && d.createElement(ue, {
                            directoryWidth: this.state.directoryWidth
                        }), this.props.firstPageLoaded && e && !Object(S.b)() && d.createElement(F, {
                            key: "live-communities",
                            showSample: !0,
                            communities: e ? e.followedCommunities.edges : [],
                            directoryWidth: this.state.directoryWidth
                        }), d.createElement(re.a, {
                            onResize: this.onResize
                        }))
                    }, t.prototype.onRender = function() {
                        this.props.data.loading || this.props.latencyTracking.reportInteractive()
                    }, t = l.__decorate([Object(v.a)(he, {
                        options: {
                            fetchPolicy: "cache-and-network",
                            variables: {
                                isTagsExperiment: Object(S.a)(),
                                limit: 30
                            }
                        }
                    }), Object(g.c)("FollowingIndexPage", {
                        destination: k.a.DirectoryFollowingIndex
                    }), Object(f.a)({
                        location: y.PageviewLocation.Directory,
                        properties: function() {
                            return {
                                content_type: y.PageviewDirectoryContentType.Mixed,
                                tab: y.PageviewFollowingTab.Overview
                            }
                        }
                    })], t)
                }(d.Component);
            var fe = Object(i.connect)(function(e) {
                    return {
                        firstPageLoaded: e.session.firstPageLoaded
                    }
                })(ve),
                ke = n("Uc21");
            var ye = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return l.__extends(t, e), t.prototype.componentDidMount = function() {
                        m.o.setPageTitle(Object(m.d)("Channels You Follow", "FollowingLivePage")), this.onRender()
                    }, t.prototype.componentDidUpdate = function() {
                        this.onRender()
                    }, t.prototype.render = function() {
                        var e, t = !1;
                        if (this.props.data.loading && !this.props.data.currentUser) e = d.createElement(C.Va, {
                            display: C.W.Flex,
                            position: C.db.Absolute,
                            fullHeight: !0,
                            fullWidth: !0
                        }, d.createElement(C.Xa, {
                            fillContent: !0
                        }));
                        else if (this.props.data.error) e = d.createElement(p.a, {
                            message: Object(m.d)("Error loading data.", "FollowingLivePage")
                        });
                        else {
                            var n = this.props.data.currentUser,
                                i = [];
                            n && n.followedLiveUsers.edges && (i = n.followedLiveUsers.edges.map(function(e) {
                                return e.node
                            }));
                            var a = this.props.data.currentUser ? this.props.data.currentUser.follows.totalCount : 0;
                            e = d.createElement(se, {
                                users: i,
                                followsCount: a
                            }), t = !(!n || !n.followedLiveUsers.pageInfo.hasNextPage)
                        }
                        return d.createElement(C.Va, {
                            padding: 3
                        }, d.createElement(_, {
                            activeCategory: y.SpadeFollowingCategory.Live
                        }), e, d.createElement(V.a, {
                            enabled: t,
                            loadMore: this.props.loadMore,
                            pixelThreshold: 100
                        }))
                    }, t.prototype.onRender = function() {
                        this.props.data.loading || this.props.latencyTracking.reportInteractive()
                    }, t = l.__decorate([Object(v.a)(ke, {
                        options: function() {
                            return {
                                fetchPolicy: "cache-and-network",
                                variables: {
                                    limit: 50,
                                    isTagsExperiment: Object(S.a)()
                                }
                            }
                        },
                        props: function(e) {
                            return l.__assign({}, e, {
                                loadMore: function() {
                                    if (e.data.currentUser) {
                                        var t = e.data.currentUser.followedLiveUsers.edges,
                                            n = {
                                                limit: 30,
                                                cursor: t[t.length - 1].cursor,
                                                isTagsExperiment: Object(S.a)()
                                            };
                                        return e.data.fetchMore({
                                            query: ke,
                                            variables: n,
                                            updateQuery: function(e, t) {
                                                var n = t.fetchMoreResult;
                                                return n.currentUser && e.currentUser ? {
                                                    currentUser: l.__assign({}, n.currentUser, {
                                                        followedLiveUsers: l.__assign({}, n.currentUser.followedLiveUsers, {
                                                            edges: function(e, t) {
                                                                var n = new Set(e.map(function(e) {
                                                                    return e.node.id
                                                                }));
                                                                return e.concat(t.filter(function(e) {
                                                                    return !n.has(e.node.id)
                                                                }))
                                                            }(e.currentUser.followedLiveUsers.edges, n.currentUser.followedLiveUsers.edges)
                                                        })
                                                    })
                                                } : n
                                            }
                                        })
                                    }
                                }
                            })
                        }
                    }), Object(g.c)("FollowingLivePage", {
                        destination: k.a.DirectoryFollowingLiveChannels
                    }), Object(f.a)({
                        location: y.PageviewLocation.Directory,
                        skip: function(e) {
                            return e.data.loading || !!e.data.error
                        },
                        properties: function(e) {
                            return {
                                content_type: y.PageviewDirectoryContentType.Channels,
                                tab: y.PageviewFollowingTab.Channels,
                                num_live_channels: e.data.currentUser && e.data.currentUser.followedLiveUsers.edges.length || 0
                            }
                        }
                    })], t)
                }(d.Component),
                be = function() {
                    return n.e(135).then(function() {
                        var e = n("SufW");
                        return Object.assign({}, e, {
                            default: e
                        })
                    })
                },
                we = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.redirectToChannelSurfing = function() {
                            var e = "tt_medium=" + t.props.trackingMedium,
                                n = "" === location.search ? "?" + e : location.search + "&" + e;
                            window.location.assign("/hi/surf" + n)
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.render = function() {
                        return d.createElement(C.xb, {
                            "data-test-selector": "channel-surfing-upsell",
                            background: C.r.Alt2,
                            display: C.W.Flex,
                            flexDirection: C.Y.Column,
                            alignItems: C.f.Center,
                            padding: {
                                y: 3
                            }
                        }, d.createElement(C.Va, {
                            textAlign: C.Jb.Center,
                            margin: 1,
                            breakpointMedium: {
                                margin: {
                                    x: 2,
                                    y: 1
                                }
                            }
                        }, d.createElement(C.xb, {
                            color: C.O.Base,
                            fontSize: C.Aa.Size4,
                            breakpointMedium: {
                                fontSize: C.Aa.Size3
                            },
                            breakpointExtraLarge: {
                                fontSize: C.Aa.Size2
                            }
                        }, Object(m.d)("Need some more channels to follow?", "ChannelSurfingUpsell")), d.createElement(C.xb, {
                            color: C.O.Alt2,
                            margin: {
                                y: 1
                            },
                            fontSize: C.Aa.Size6,
                            display: C.W.Hide,
                            breakpointMedium: {
                                fontSize: C.Aa.Size5,
                                display: C.W.Block
                            },
                            breakpointExtraLarge: {
                                fontSize: C.Aa.Size4
                            }
                        }, Object(m.d)("We have crafted up a new way for you to seek and find new channels based on the games you follow.", "ChannelSurfingUpsell"))), d.createElement(C.Va, null, d.createElement(C.z, {
                            "data-test-selector": "channel-surfing-upsell__button",
                            size: C.D.Large,
                            onClick: this.redirectToChannelSurfing
                        }, Object(m.d)("Discover new channels", "ChannelSurfingUpsell"))))
                    }, t
                }(d.Component),
                Se = n("ni0n"),
                Ce = n("2iEm"),
                Ne = n("WCyn"),
                _e = n("Hz/u"),
                Te = (n("JRXu"), "for-you-community-streams-row__title"),
                Ee = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderTitle = function() {
                            if (t.props.title) return d.createElement(C.Va, {
                                className: "for-you-community-streams-row__title"
                            }, d.createElement(C.V, {
                                "data-test-selector": Te,
                                color: C.O.Alt2,
                                fontSize: C.Aa.Size5,
                                transform: C.Mb.Uppercase
                            }, d.createElement(Ce.a, {
                                to: Object(R.c)(t.props.name)
                            }, t.props.title)))
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return this.props.data.length ? d.createElement(C.Va, {
                            "data-test-selector": "for-you-community-streams-row",
                            flexShrink: 0
                        }, d.createElement(C.Va, {
                            alignItems: C.f.Center,
                            display: C.W.Flex,
                            flexWrap: C.Z.NoWrap,
                            justifyContent: C.Ua.Between,
                            margin: {
                                bottom: .5
                            }
                        }, this.renderTitle(), d.createElement(Ne.a, {
                            gameName: this.props.name,
                            src: y.PageviewMedium.BrowseForYou
                        })), d.createElement(V.b, null, d.createElement(C.Va, {
                            display: C.W.Flex
                        }, d.createElement(_e.a, {
                            data: this.props.data,
                            directoryType: this.props.type,
                            trackingMedium: y.PageviewMedium.BrowseForYou
                        })))) : null
                    }, t = l.__decorate([Object(g.c)("ForYouCommunityStreamsRow")], t)
                }(d.Component),
                Fe = n("mIH5"),
                Ie = 7,
                Le = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.getData = function() {
                            var e = t.rankedChannelStreamsInputPresent() && t.rankedChannelStreamsLoaded();
                            if (e && t.communityStreamsLoaded() && t.props.communityStreamsData.directory.streams && t.props.communityStreamsData.directory.streams.edges) {
                                var n = t.props.rankedChannelData.users.filter(function(e) {
                                    return e && e.stream && e.stream.id && e.stream.broadcaster && e.stream.broadcaster.login
                                }).slice(0, Ie).map(function(e) {
                                    return e.stream
                                });
                                if (n.length === Ie) return n;
                                var i = new Set(n.map(function(e) {
                                        return e.id
                                    })),
                                    a = t.props.communityStreamsData.directory.streams.edges.filter(function(e) {
                                        var t = e.node;
                                        return t && !i.has(t.id) && t.broadcaster && t.broadcaster.login
                                    }).map(function(e) {
                                        return e.node
                                    });
                                return n.concat(a.slice(0, Ie - n.length))
                            }
                            return !e && t.communityStreamsLoaded() && t.props.communityStreamsData.directory.streams && t.props.communityStreamsData.directory.streams.edges ? t.props.communityStreamsData.directory.streams.edges.filter(function(e) {
                                var t = e.node;
                                return t && t.broadcaster && t.broadcaster.login
                            }).map(function(e) {
                                return e.node
                            }) : []
                        }, t.communityStreamsLoaded = function() {
                            return t.props.communityStreamsData && !t.props.communityStreamsData.loading && !t.props.communityStreamsData.error && t.props.communityStreamsData.directory
                        }, t.rankedChannelStreamsInputPresent = function() {
                            return !!t.props.channelLogins && !!t.props.channelLogins.length
                        }, t.rankedChannelStreamsLoaded = function() {
                            return t.props.rankedChannelData && !t.props.rankedChannelData.loading && !t.props.rankedChannelData.error && t.props.rankedChannelData.users
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.componentDidUpdate = function() {
                        (this.rankedChannelStreamsInputPresent() && this.rankedChannelStreamsLoaded() || !this.rankedChannelStreamsInputPresent() && !this.rankedChannelStreamsLoaded()) && this.communityStreamsLoaded() && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return d.createElement(Ee, {
                            name: this.props.name,
                            title: this.props.title,
                            type: this.props.type,
                            data: this.getData()
                        })
                    }, t = l.__decorate([Object(v.a)(Se, {
                        name: "communityStreamsData",
                        options: function(e) {
                            return {
                                fetchPolicy: "network-only",
                                variables: {
                                    name: e.name,
                                    limit: Ie,
                                    type: e.type
                                }
                            }
                        }
                    }), Object(v.a)(Fe, {
                        name: "rankedChannelData",
                        options: function(e) {
                            return {
                                fetchPolicy: "network-only",
                                variables: {
                                    logins: e.channelLogins
                                }
                            }
                        },
                        skip: function(e) {
                            return !e.channelLogins || !e.channelLogins.length
                        }
                    }), Object(g.c)("ForYouCommunityStreamsRowContainer")], t)
                }(d.Component),
                Oe = (n("ns6o"), n("sabN")),
                De = "for-you__empty",
                xe = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            rankedChannelData: {},
                            loadingRankedChannelData: !1
                        }, t.logger = m.o.logger.withCategory("for-you"), t.loadedChannelRankingsData = !1, t.renderPage = function() {
                            return t.userFollowedGamesDataLoaded(t.props) ? t.props.data.currentUser.followedGames && t.props.data.currentUser.followedGames.nodes && t.props.data.currentUser.followedGames.nodes.length ? d.createElement(C.Va, null, t.renderFollowedCommunityStreams(), d.createElement(C.Va, {
                                margin: {
                                    top: .5
                                }
                            }, t.renderFooterCTA())) : t.renderEmptyFollowedState() : d.createElement(C.Va, null, d.createElement(C.Xa, {
                                fillContent: !0
                            }))
                        }, t.userFollowedGamesDataLoaded = function(e) {
                            return e.data && !e.data.loading && !e.data.error && e.data.currentUser
                        }, t.renderFollowedCommunityStreams = function() {
                            if (t.props.data.currentUser.followedGames && t.props.data.currentUser.followedGames.nodes && t.props.data.currentUser.followedGames.nodes.length) return t.props.data.currentUser.followedGames.nodes.filter(function(e) {
                                return null !== e
                            }).map(function(e) {
                                return d.createElement(C.Va, {
                                    key: e.id
                                }, d.createElement(Le, {
                                    key: e.id,
                                    title: Object(m.d)("BECAUSE YOU FOLLOW {name}", {
                                        name: e.name.toUpperCase()
                                    }, "ForYouPage"),
                                    name: e.name,
                                    type: e.directoryType,
                                    channelLogins: t.state.rankedChannelData[e.id]
                                }))
                            })
                        }, t.renderEmptyFollowedState = function() {
                            return d.createElement(C.xb, {
                                className: "for-you__empty",
                                "data-test-selector": De,
                                background: C.r.Base,
                                display: C.W.Flex,
                                flexDirection: C.Y.Column,
                                margin: {
                                    bottom: 1
                                },
                                alignItems: C.f.Center
                            }, d.createElement(j, {
                                onContinue: t.refetchFollowedData
                            }))
                        }, t.redirectToFollowing = function() {
                            m.o.history.push("/directory/following" + location.search)
                        }, t.redirectToCommunitySelectionPage = function() {
                            window.location.assign("/hi" + location.search)
                        }, t.refetchFollowedData = function() {
                            return l.__awaiter(t, void 0, void 0, function() {
                                return l.__generator(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return [4, this.props.data.refetch()];
                                        case 1:
                                            return e.sent(), [2]
                                    }
                                })
                            })
                        }, t.loadChannelRankingsByGameData = function() {
                            return l.__awaiter(t, void 0, void 0, function() {
                                var e, t;
                                return l.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            if (this.loadedChannelRankingsData) return [3, 4];
                                            this.loadedChannelRankingsData = !0, this.setState({
                                                loadingRankedChannelData: !0
                                            }), n.label = 1;
                                        case 1:
                                            return n.trys.push([1, 3, , 4]), [4, be()];
                                        case 2:
                                            return e = n.sent(), this.setState({
                                                rankedChannelData: e,
                                                loadingRankedChannelData: !1
                                            }), [3, 4];
                                        case 3:
                                            return t = n.sent(), this.logger.error(t, "failed to load channel ranking data"), this.setState({
                                                loadingRankedChannelData: !1
                                            }), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.componentDidMount = function() {
                        m.o.setPageTitle(Object(m.d)("For You", "ForYouPage"));
                        var e = m.o.experiments.getAssignment(b.b.WebOnboarding),
                            t = m.o.experiments.getAssignment(b.b.DiscoveryFrontpageMVP);
                        if (!Object(w.g)(e) || Object(w.f)(t)) this.redirectToFollowing();
                        else {
                            var n = m.o.experiments.getAssignment(b.b.WebOnboardingChannelRanking),
                                i = m.o.experiments.getAssignment(b.b.WebOnboardingChannelSurfing);
                            Object(w.d)(e, n) && this.loadChannelRankingsByGameData(), this.setState({
                                inChannelSurfingExperiment: Object(w.e)(e, i)
                            })
                        }
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        this.userFollowedGamesDataLoaded(e) && !Object(w.h)(new Date(e.data.currentUser.createdAt)) && this.redirectToFollowing()
                    }, t.prototype.componentDidUpdate = function() {
                        this.userFollowedGamesDataLoaded(this.props) && !this.state.loadingRankedChannelData && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return d.createElement(V.b, null, d.createElement(C.Va, {
                            className: "for-you-page",
                            padding: 3,
                            fullWidth: !0
                        }, d.createElement(_, {
                            activeCategory: y.SpadeFollowingCategory.ForYou
                        }), this.renderPage()))
                    }, t.prototype.renderFooterCTA = function() {
                        var e = this.props.data.currentUser.followedGames && this.props.data.currentUser.followedGames.nodes ? this.props.data.currentUser.followedGames.nodes.length : 0;
                        return e >= 10 ? null : 0 !== e && this.state.inChannelSurfingExperiment ? e > 0 && this.state.inChannelSurfingExperiment ? d.createElement(we, {
                            trackingMedium: y.PageviewMedium.BrowseForYou
                        }) : void 0 : this.renderAddMoreGamesCTA()
                    }, t.prototype.renderAddMoreGamesCTA = function() {
                        if (!this.props.data.currentUser.followedGames || !this.props.data.currentUser.followedGames.nodes || this.props.data.currentUser.followedGames.nodes.length < 10) return d.createElement(C.Sa, {
                            "data-test-selector": "for-you__add_more_games",
                            onClick: this.redirectToCommunitySelectionPage,
                            type: C.Ta.Alpha
                        }, d.createElement(C.xb, {
                            alignItems: C.f.Center,
                            border: !0,
                            display: C.W.Flex,
                            justifyContent: C.Ua.Center,
                            padding: 2
                        }, d.createElement(C.Va, {
                            alignItems: C.f.Center,
                            display: C.W.Flex,
                            margin: {
                                right: 1
                            }
                        }, d.createElement(C.mb, {
                            asset: C.nb.Plus,
                            type: C.ob.Alt2
                        })), d.createElement(C.V, {
                            fontSize: C.Aa.Size5,
                            color: C.O.Alt2
                        }, Object(m.d)("Add More Games", "ForYouPage"))))
                    }, t = l.__decorate([Object(g.c)("ForYouPage", {
                        destination: k.a.ForYou
                    }), Object(v.a)(Oe, {
                        options: {
                            fetchPolicy: "network-only",
                            variables: {
                                limit: 10
                            }
                        }
                    }), Object(f.a)({
                        location: y.PageviewLocation.BrowseForYou
                    })], t)
                }(d.Component),
                Ve = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return l.__extends(t, e), t.prototype.render = function() {
                        return this.props.isLoggedIn ? d.createElement(C.Va, null, d.createElement(h.b, {
                            addPaddingWhenPlayerIsPersisting: !0
                        }), d.createElement(u.a, null, d.createElement(c.a, {
                            path: "/directory/following/foryou",
                            component: xe
                        }), d.createElement(c.a, {
                            path: "/directory/following/live",
                            component: ye
                        }), d.createElement(c.a, {
                            path: "/directory/following/hosts",
                            component: ae
                        }), d.createElement(c.a, {
                            path: "/directory/following/games",
                            component: $
                        }), d.createElement(c.a, {
                            path: "/directory/following/communities",
                            component: L
                        }), d.createElement(c.a, {
                            path: "/",
                            component: fe
                        }))) : (this.props.login(), d.createElement(p.a, {
                            message: Object(m.d)("You must be logged in to view this page", "FollowingRoot")
                        }))
                    }, t
                }(d.Component),
                Pe = Object(g.c)("FollowingPageRoot", {
                    autoReportInteractive: !0
                })(Ve);
            var Ae = Object(i.connect)(function(e) {
                return {
                    isLoggedIn: Object(s.f)(e)
                }
            }, function(e) {
                return Object(a.bindActionCreators)({
                    login: function() {
                        return Object(o.e)(r.a.FollowingPage)
                    }
                }, e)
            })(Pe);
            n.d(t, "FollowingRootPage", function() {
                return Ae
            })
        },
        WCyn: function(e, t, n) {
            "use strict";
            var i = n("/MKj"),
                a = n("fvjX"),
                r = n("1/iK"),
                o = n("y5D0"),
                s = n("kRBY"),
                l = n("mrSG"),
                d = n("q1tI"),
                c = n("oJmH"),
                u = n("/7QA"),
                m = n("yR8l"),
                p = n("geRD"),
                g = n("2xye"),
                h = n("JcRA"),
                v = n("Ue10"),
                f = n("Jl34"),
                k = n("y5Wm"),
                y = n("k5cX"),
                b = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.followClicked = function() {
                            t.props.isLoggedIn ? t.isFollowing ? t.unfollow() : t.follow() : t.props.showLoginModal()
                        }, t.showUnfollowButton = function() {
                            return t.props.isLoggedIn && t.isFollowing
                        }, t.follow = function() {
                            return l.__awaiter(t, void 0, void 0, function() {
                                var e, t = this;
                                return l.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return this.props.followGame && this.props.data && this.props.data.game ? (e = l.__assign({}, Object(p.a)({
                                                gameID: this.props.data.game.id
                                            }), {
                                                optimisticResponse: {
                                                    followGame: {
                                                        __typename: "FollowGamePayload",
                                                        game: {
                                                            self: {
                                                                follow: {
                                                                    followedAt: (new Date).toISOString(),
                                                                    __typename: "GameFollow"
                                                                },
                                                                __typename: "GameSelfConnection"
                                                            },
                                                            __typename: "Game"
                                                        }
                                                    }
                                                },
                                                update: function(e, n) {
                                                    var i = n.data.followGame,
                                                        a = e.readQuery({
                                                            query: k,
                                                            variables: {
                                                                name: t.props.gameName
                                                            }
                                                        });
                                                    a && a.game && (a.game.self.follow = i.game.self.follow, e.writeQuery({
                                                        query: k,
                                                        variables: {
                                                            name: t.props.gameName
                                                        },
                                                        data: a
                                                    }))
                                                }
                                            }), [4, this.props.followGame(e)]) : [2];
                                        case 1:
                                            return n.sent(), this.track(g.SpadeEventType.GameFollow), [2]
                                    }
                                })
                            })
                        }, t.unfollow = function() {
                            return l.__awaiter(t, void 0, void 0, function() {
                                var e, t = this;
                                return l.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return this.props.unfollowGame && this.props.data && this.props.data.game ? (e = l.__assign({}, Object(p.a)({
                                                gameID: this.props.data.game.id
                                            }), {
                                                optimisticResponse: {
                                                    unfollowGame: {
                                                        __typename: "UnfollowGamePayload",
                                                        follow: null
                                                    }
                                                },
                                                update: function(e) {
                                                    var n = e.readQuery({
                                                        query: k,
                                                        variables: {
                                                            name: t.props.gameName
                                                        }
                                                    });
                                                    n && n.game && (n.game.self.follow = null, e.writeQuery({
                                                        query: k,
                                                        variables: {
                                                            name: t.props.gameName
                                                        },
                                                        data: n
                                                    }))
                                                }
                                            }), [4, this.props.unfollowGame(e)]) : [2];
                                        case 1:
                                            return n.sent(), this.track(g.SpadeEventType.GameUnfollow), [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.render = function() {
                        var e = Object(u.d)("Follow", "FollowGameButton"),
                            t = this.props.buttonType,
                            n = t && t === v.F.Hollow ? v.nb.FollowHollow : v.nb.Heart,
                            i = void 0 === this.props.fullWidthButton || this.props.fullWidthButton,
                            a = {};
                        if (i && (a.justifyContent = v.Ua.Center), this.props.isLoggedIn && this.isLoading) return d.createElement(v.Va, l.__assign({
                            display: v.W.Flex
                        }, a), d.createElement(v.Va, {
                            alignItems: v.f.Center
                        }, d.createElement(v.cb, {
                            width: 70,
                            height: 30
                        })));
                        var r = this.showUnfollowButton() ? Object(u.d)("Unfollow", "FollowGameButton") : e,
                            o = this.showUnfollowButton() ? "game-directory-unfollow-button" : "game-directory-follow-button",
                            s = this.showUnfollowButton() ? v.nb.Heart : n,
                            c = !this.showUnfollowButton() && t && t === v.F.Hollow ? v.nb.Heart : v.nb.Unheart,
                            m = this.showUnfollowButton() ? Object(u.d)("Following", "FollowGameButton") : e;
                        return this.props.animatedButton ? d.createElement(h.a, {
                            ariaLabel: r,
                            "data-a-target": o,
                            "data-test-selector": "follow-game-button-component",
                            icon: s,
                            iconOnHover: c,
                            onClick: this.followClicked,
                            text: m,
                            type: t || v.F.Default,
                            fullWidthButton: i
                        }) : d.createElement(v.z, {
                            ariaLabel: r,
                            "data-a-target": o,
                            "data-test-selector": "follow-game-button-component",
                            icon: s,
                            onClick: this.followClicked,
                            statusAlertIcon: this.props.isLoggedIn ? c : void 0,
                            type: t || v.F.Default,
                            fullWidth: i
                        }, m)
                    }, Object.defineProperty(t.prototype, "isFollowing", {
                        get: function() {
                            return !!(this.props.data && this.props.data.game && this.props.data.game.self && null !== this.props.data.game.self.follow)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "isLoading", {
                        get: function() {
                            return !this.props.data || this.props.data.loading
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.track = function(e) {
                        u.o.tracking.track(e, {
                            src: this.props.src,
                            kind: e === g.SpadeEventType.GameFollow ? "follow" : "unfollow",
                            name: this.props.gameName
                        })
                    }, t
                }(d.Component),
                w = Object(c.compose)(Object(m.a)(k, {
                    options: function(e) {
                        return {
                            variables: {
                                name: e.gameName
                            }
                        }
                    },
                    skip: function(e) {
                        return !e.isLoggedIn || !e.gameName
                    }
                }), Object(m.a)(f, {
                    name: "followGame"
                }), Object(m.a)(y, {
                    name: "unfollowGame"
                }))(b);
            var S = Object(i.connect)(function(e) {
                return {
                    isLoggedIn: Object(s.f)(e)
                }
            }, function(e) {
                return Object(a.bindActionCreators)({
                    showLoginModal: function() {
                        return Object(o.e)(r.a.FollowGameButton)
                    }
                }, e)
            })(w);
            n.d(t, "a", function() {
                return S
            })
        },
        WRGI: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return s
            }), n.d(t, "a", function() {
                return l
            });
            var i = n("mrSG"),
                a = n("/7QA"),
                r = n("oA7Y"),
                o = n("9x/k");

            function s(e) {
                return e.browse.browseType
            }

            function l(e) {
                return e.browse.tagFilters
            }
            a.o.store.registerReducer("browse", function(e, t) {
                switch (void 0 === e && (e = {
                    browseType: o.a.Games,
                    lastBrowsePath: "/directory",
                    tagFilters: []
                }), t.type) {
                    case r.a:
                        return i.__assign({}, e, {
                            browseType: t.browseType
                        });
                    case r.c:
                        var n = e.tagFilters.every(function(e) {
                                return e.id !== t.addedTag.id
                            }),
                            a = e.tagFilters.slice();
                        return n && a.push(t.addedTag), i.__assign({}, e, {
                            tagFilters: a
                        });
                    case r.d:
                        return i.__assign({}, e, {
                            tagFilters: t.tagFilters
                        });
                    case r.e:
                        var s = e.tagFilters.filter(function(e) {
                            return e.id !== t.removedTag.id
                        });
                        return i.__assign({}, e, {
                            tagFilters: s
                        });
                    case r.b:
                        return i.__assign({}, e, {
                            lastBrowsePath: t.lastBrowsePath
                        });
                    default:
                        return e
                }
            })
        },
        X7a7: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                a = n("cr+I"),
                r = n("/7QA"),
                o = n("b6Yk"),
                s = {
                    en: "en_US",
                    de: "de_DE",
                    es: "es_ES",
                    "es-mx": "es_ES",
                    fr: "fr_FR",
                    it: "it_IT",
                    hu: "hu_HU",
                    pl: "pl_PL",
                    pt: "pt_BR",
                    "pt-br": "pt_BR",
                    vi: "vn_VN",
                    tr: "tr_TR",
                    ro: "ro_RO",
                    cs: "cs_CZ",
                    el: "el_GR",
                    ru: "ru_RU",
                    th: "th_TH",
                    "zh-cn": "zh_CN",
                    "zh-tw": "zh_TW",
                    ja: "ja_JP",
                    ko: "ko_KR"
                },
                l = function(e) {
                    return e && s[e] || "en_US"
                },
                d = n("Igt5");
            n.d(t, "b", function() {
                return p
            }), n.d(t, "d", function() {
                return g
            }), n.d(t, "c", function() {
                return h
            }), n.d(t, "a", function() {
                return v
            });
            var c = "languageTags",
                u = 0,
                m = 350;

            function p() {
                var e = this;
                return function(t) {
                    clearTimeout(u), u = setTimeout(function() {
                        return i.__awaiter(e, void 0, void 0, function() {
                            var e, n, s, c, u, m;
                            return i.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        e = r.o.logger.withCategory("leagueoflegends-api"), t(Object(d.k)(!0)), i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, , 4]), n = r.o.intl.getLanguageCode(), s = l(n), c = o.a.getAPIURL("/api/lol/champions?" + a.stringify({
                                            locale: s,
                                            on_site: 1
                                        })).toString(), [4, o.a.get(c)];
                                    case 2:
                                        return (u = i.sent()).body ? t(Object(d.l)(u.body)) : (e.warn("LoL champion API response body was empty."), t(Object(d.j)(!0))), [3, 4];
                                    case 3:
                                        throw m = i.sent(), t(Object(d.j)(!0)), e.error(m, "Failed to load LoL champion data"), m;
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, m)
                }
            }

            function g(e, t) {
                var n = this;
                return function(a) {
                    return i.__awaiter(n, void 0, void 0, function() {
                        var n, o;
                        return i.__generator(this, function(i) {
                            return n = new Set(v()), t ? n.add(e) : n.delete(e), o = Array.from(n), r.l.set(c, o), a(Object(d.i)(o)), [2]
                        })
                    })
                }
            }

            function h(e) {
                var t = this;
                return function(n) {
                    return i.__awaiter(t, void 0, void 0, function() {
                        return i.__generator(this, function(t) {
                            return r.l.set(c, e), n(Object(d.i)(e)), [2]
                        })
                    })
                }
            }

            function v() {
                return r.l.get(c, [])
            }
        },
        XA5B: function(e, t, n) {},
        XHSL: function(e, t, n) {
            var i = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "FollowingGames_CurrentUser"
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
                                value: "type"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "FollowedGamesType"
                            }
                        }
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "isTagsExperiment"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Boolean"
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
                                    }, {
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "type"
                                        },
                                        value: {
                                            kind: "Variable",
                                            name: {
                                                kind: "Name",
                                                value: "type"
                                            }
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
                                                        value: "tags"
                                                    },
                                                    arguments: [{
                                                        kind: "Argument",
                                                        name: {
                                                            kind: "Name",
                                                            value: "tagType"
                                                        },
                                                        value: {
                                                            kind: "EnumValue",
                                                            value: "CONTENT"
                                                        }
                                                    }],
                                                    directives: [{
                                                        kind: "Directive",
                                                        name: {
                                                            kind: "Name",
                                                            value: "include"
                                                        },
                                                        arguments: [{
                                                            kind: "Argument",
                                                            name: {
                                                                kind: "Name",
                                                                value: "if"
                                                            },
                                                            value: {
                                                                kind: "Variable",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "isTagsExperiment"
                                                                }
                                                            }
                                                        }]
                                                    }],
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [{
                                                            kind: "FragmentSpread",
                                                            name: {
                                                                kind: "Name",
                                                                value: "tagFragment"
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
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 362
                }
            };
            i.loc.source = {
                body: '#import "twilight/features/tags/models/tag-fragment.gql"\nquery FollowingGames_CurrentUser($limit: Int $type: FollowedGamesType $isTagsExperiment: Boolean!) {\ncurrentUser {\nid\nfollowedGames(first: $limit type: $type) {\nnodes {\nid\nname\nboxArtURL(width: 285 height: 380)\nviewersCount\ntags(tagType: CONTENT) @include(if: $isTagsExperiment) {\n...tagFragment\n}\n}\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var a = {};
            i.definitions = i.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !a[t] && (a[t] = !0, !0)
                })
            }(n("iiOx").definitions)), e.exports = i
        },
        YhoA: function(e, t, n) {
            "use strict";
            var i;
            n.d(t, "a", function() {
                    return i
                }),
                function(e) {
                    e.CounterStrike = "counter-strike: global offensive", e.Hearthstone = "hearthstone", e.LeagueOfLegends = "league of legends", e.Overwatch = "overwatch"
                }(i || (i = {}))
        },
        ZbA5: function(e, t, n) {
            "use strict";
            var i, a, r, o, s = n("mrSG"),
                l = n("TSYQ"),
                d = n("q1tI"),
                c = n("/7QA"),
                u = n("oB8h"),
                m = n("Ue10");
            n("kVMo");
            ! function(e) {
                e.HostingDot = "stream-type-indicator__hosting-dot"
            }(o || (o = {}));
            var p = ((i = {})[u.a.Live] = "stream-type-indicator--live", i[u.a.Premiere] = "stream-type-indicator--premiere", i[u.a.Rerun] = "stream-type-indicator--rerun", i[u.a.WatchParty] = "stream-type-indicator--rerun", i),
                g = ((a = {})[u.a.Premiere] = m.nb.VideoPremiere, a[u.a.Rerun] = m.nb.VideoRerun, a[u.a.WatchParty] = m.nb.VideoRerun, a),
                h = ((r = {})[u.a.Premiere] = m.ob.Live, r[u.a.Rerun] = m.ob.Inherit, r[u.a.WatchParty] = m.ob.Inherit, r),
                v = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return s.__extends(t, e), t.prototype.render = function() {
                        return d.createElement(m.xb, {
                            className: this.getClassNames(),
                            color: m.O.Overlay,
                            background: m.r.Overlay,
                            padding: {
                                x: .5
                            },
                            borderRadius: m.x.Small,
                            display: m.W.Flex
                        }, d.createElement(m.Va, {
                            display: m.W.Flex,
                            alignItems: m.f.Center,
                            margin: {
                                right: .5
                            }
                        }, this.getIcon()), d.createElement(m.V, {
                            type: m.Nb.Span
                        }, this.getLabel()))
                    }, t.prototype.getClassNames = function() {
                        var e = {
                            "stream-type-indicator": !0
                        };
                        return e[p[this.props.type]] = !0, l(e)
                    }, t.prototype.getIcon = function() {
                        return this.props.hosting ? d.createElement(m.xb, {
                            borderRadius: m.x.Rounded,
                            className: "stream-type-indicator__hosting-dot",
                            "data-test-selector": o.HostingDot
                        }) : this.props.type === u.a.Live ? d.createElement(m.Va, {
                            className: "stream-type-indicator__live-wrapper",
                            display: m.W.Flex,
                            alignItems: m.f.Center
                        }, d.createElement(m.K, {
                            status: m.M.Live,
                            size: m.L.Small
                        })) : d.createElement(m.mb, {
                            asset: g[this.props.type],
                            type: h[this.props.type],
                            width: 14,
                            height: 14
                        })
                    }, t.prototype.getLabel = function() {
                        if (this.props.hosting) return Object(c.d)("Hosting", "StreamTypeIndicator");
                        switch (this.props.type) {
                            case u.a.Live:
                                return Object(c.d)("LIVE", "StreamTypeIndicator");
                            case u.a.Premiere:
                                return Object(c.d)("Premiere", "StreamTypeIndicator");
                            case u.a.Rerun:
                            case u.a.WatchParty:
                                return Object(c.d)("Rerun", "StreamTypeIndicator");
                            default:
                                return ""
                        }
                    }, t
                }(d.Component);
            n.d(t, !1, function() {
                return o
            }), n.d(t, "a", function() {
                return v
            })
        },
        ZrRH: function(e, t, n) {
            e.exports = n.p + "assets/hearthstone-classes-d5c707fb47547e9585bc.png"
        },
        b6Yk: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            });
            var i = n("mrSG"),
                a = n("/7QA"),
                r = n("kRBY"),
                o = function() {
                    function e() {}
                    return e.get = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, Promise, function() {
                            return i.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, this.request(e, i.__assign({}, t, {
                                            method: "GET"
                                        }), n)];
                                    case 1:
                                        return [2, a.sent()]
                                }
                            })
                        })
                    }, e.getOrThrow = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, Promise, function() {
                            return i.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, i.__assign({}, t, {
                                            method: "GET"
                                        }), n)];
                                    case 1:
                                        return [2, a.sent()]
                                }
                            })
                        })
                    }, e.put = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, Promise, function() {
                            return i.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, this.request(e, i.__assign({}, t, {
                                            method: "PUT"
                                        }), n)];
                                    case 1:
                                        return [2, a.sent()]
                                }
                            })
                        })
                    }, e.putOrThrow = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, Promise, function() {
                            return i.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, i.__assign({}, t, {
                                            method: "PUT"
                                        }), n)];
                                    case 1:
                                        return [2, a.sent()]
                                }
                            })
                        })
                    }, e.post = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, Promise, function() {
                            return i.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, this.request(e, i.__assign({}, t, {
                                            method: "POST"
                                        }), n)];
                                    case 1:
                                        return [2, a.sent()]
                                }
                            })
                        })
                    }, e.postOrThrow = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, Promise, function() {
                            return i.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, i.__assign({}, t, {
                                            method: "POST"
                                        }), n)];
                                    case 1:
                                        return [2, a.sent()]
                                }
                            })
                        })
                    }, e.delete = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, Promise, function() {
                            return i.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, this.request(e, i.__assign({}, t, {
                                            method: "DELETE"
                                        }), n)];
                                    case 1:
                                        return [2, a.sent()]
                                }
                            })
                        })
                    }, e.deleteOrThrow = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, Promise, function() {
                            return i.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, i.__assign({}, t, {
                                            method: "DELETE"
                                        }), n)];
                                    case 1:
                                        return [2, a.sent()]
                                }
                            })
                        })
                    }, e.request = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, Promise, function() {
                            var a, r, o, s;
                            return i.__generator(this, function(l) {
                                switch (l.label) {
                                    case 0:
                                        return t = this.constructOptions(t, n), a = t.headers ? t.headers["Content-Type"] : void 0, r = this.serialize(t.body, a), o = i.__assign({}, t, {
                                            body: r
                                        }), [4, this._fetch(e, o)];
                                    case 1:
                                        return s = l.sent(), [4, this.constructLegacyAPIResponse(s)];
                                    case 2:
                                        return [2, l.sent()]
                                }
                            })
                        })
                    }, e.requestOrThrow = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, Promise, function() {
                            var a;
                            return i.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return r.trys.push([0, 2, , 3]), [4, this.request(e, t, n)];
                                    case 1:
                                        if ((a = r.sent()).requestError) throw a.requestError;
                                        if (a.error) throw new Error("Error while sending legacy-api request: " + a.error.status + " - " + a.error.message);
                                        return [2, i.__assign({}, a, {
                                            body: a.body
                                        })];
                                    case 2:
                                        throw r.sent();
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, e.getAPIURL = function(e) {
                        return new URL(e, a.o.config.apiBaseURL)
                    }, e.constructLegacyAPIResponse = function(e) {
                        return i.__awaiter(this, void 0, Promise, function() {
                            var t, n, a, r;
                            return i.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        t = {
                                            status: e.status
                                        }, i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, , 4]), [4, e.json()];
                                    case 2:
                                        return n = i.sent(), e.ok ? t.body = n : t.error = n, [3, 4];
                                    case 3:
                                        return a = i.sent(), e.headers && e.headers.get && (r = e.headers.get("Content-Type")) && -1 !== r.indexOf("application/json") && (t.requestError = a), [3, 4];
                                    case 4:
                                        return [2, t]
                                }
                            })
                        })
                    }, e._fetch = function(e, t) {
                        return void 0 === t && (t = {}), i.__awaiter(this, void 0, Promise, function() {
                            return i.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return [4, fetch(this.getAPIURL(e).toString(), t)];
                                    case 1:
                                        return [2, n.sent()]
                                }
                            })
                        })
                    }, e.constructOptions = function(e, t) {
                        return e = Object.assign({}, e, {
                            headers: i.__assign({}, this.getDefaultHeaders(e, t), e.headers)
                        })
                    }, e.serialize = function(e, t) {
                        return "application/json; charset=UTF-8" === t ? JSON.stringify(e) : "string" == typeof e ? e : e && FormData.prototype.isPrototypeOf(e) ? e : e ? (this.logger.error(new Error("Could not serialize this request body for the content-type provided."), "attempting to serialize object with a non-JSON content-type", {
                            contentType: t
                        }), null) : null
                    }, e.getDefaultHeaders = function(e, t) {
                        var n = a.o.store.getState(),
                            i = {
                                Accept: "application/vnd.twitchtv.v" + (t.version || 5) + "+json; charset=UTF-8",
                                "Accept-Language": "en-us",
                                "Client-ID": a.o.config.legacyClientID,
                                "X-Requested-With": "XMLHttpRequest"
                            };
                        e.body && FormData.prototype.isPrototypeOf(e.body) || (i["Content-Type"] = "application/json; charset=UTF-8");
                        var o = Object(r.e)(n);
                        return o && (i.Authorization = "OAuth " + o.authToken, o.legacyCSRFToken && (i["Twitch-Api-Token"] = o.legacyCSRFToken)), t.excludeHeaders && t.excludeHeaders.forEach(function(e) {
                            i[e] && delete i[e]
                        }), i
                    }, e.logger = a.o.logger.withCategory("legacy-api"), e
                }()
        },
        bSYX: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "Game_FollowGameCard"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "name"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "String"
                            }
                        }
                    }],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "game"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "name"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "name"
                                    }
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
                                                        value: "followedAt"
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
                    end: 100
                }
            };
            n.loc.source = {
                body: "query Game_FollowGameCard($name: String) {\ngame(name: $name) {\nid\nself {\nfollow {\nfollowedAt\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        bp79: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "FollowingHeaderTabs_User"
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
                                        value: "createdAt"
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
                body: "query FollowingHeaderTabs_User {\ncurrentUser {\nid\ncreatedAt\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        cRsL: function(e, t, n) {},
        chV5: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "CommunityStreams_Streams_RENAME2"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "name"
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
                                value: "type"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "DirectoryType"
                                }
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
                    }],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "directory"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "name"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "name"
                                    }
                                }
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "type"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "type"
                                    }
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
                                        value: "name"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "streams"
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
                                                                value: "title"
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
                                                                    value: "320"
                                                                }
                                                            }, {
                                                                kind: "Argument",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "height"
                                                                },
                                                                value: {
                                                                    kind: "IntValue",
                                                                    value: "180"
                                                                }
                                                            }],
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
                                                                value: "type"
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
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 372
                }
            };
            n.loc.source = {
                body: "query CommunityStreams_Streams_RENAME2($name: String! $type: DirectoryType! $limit: Int) {\ndirectory(name: $name type: $type) {\nid\nname\nstreams(first: $limit) {\nedges {\ncursor\nnode {\nid\ntitle\nviewersCount\npreviewImageURL(width: 320 height: 180)\nbroadcaster {\nid\nlogin\ndisplayName\n}\ngame {\nid\nboxArtURL(width: 285 height: 380)\nname\n}\ntype\n}\n}\npageInfo {\nhasNextPage\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        daWW: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                a = n("q1tI"),
                r = n("GFmA"),
                o = n("PfQt"),
                s = n("GnwI"),
                l = n("RXle"),
                d = n("L5dg"),
                c = n("Ue10"),
                u = function(e) {
                    var t = null,
                        n = null;
                    if (null === e.videos) t = a.createElement(d.a, {
                        placeholderCount: e.placeholderCount
                    });
                    else {
                        e.viewAllButtonProps && (n = a.createElement(o.a, i.__assign({}, e.viewAllButtonProps)));
                        var s = e.videos.map(function(t, n) {
                            return a.createElement(c.Va, {
                                "data-a-target": "video-tower-card-" + n,
                                key: "video-" + n,
                                margin: {
                                    bottom: 2
                                }
                            }, a.createElement(l.VideoPreviewCard, {
                                hideGameArt: e.hideGameArt,
                                context: e.listContext || r.b.MixedGameAndChannelList,
                                tracking: {
                                    content: e.trackingContent,
                                    content_index: n,
                                    medium: e.trackingMedium
                                },
                                video: t,
                                trackImageLatency: 0 === n,
                                multipleVideoGameMarkersType: e.multipleVideoGameMarkersType,
                                hideTags: e.hideTags
                            }))
                        });
                        t = a.createElement(a.Fragment, null, s)
                    }
                    return a.createElement(c.Tb, {
                        gutterSize: c.Vb.Small,
                        childWidth: e.videoCardSize || c.Ub.Large,
                        placeholderItems: 20
                    }, t, n)
                },
                m = Object(s.c)("VideoTower", {
                    autoReportInteractive: !0
                })(u);
            n.d(t, !1, function() {
                return u
            }), n.d(t, "a", function() {
                return m
            })
        },
        efEE: function(e, t, n) {},
        "g3/t": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "FollowGameCard_UnfollowGame"
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
                                    value: "UnfollowGameInput"
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
                                value: "unfollowGame"
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
                                                                value: "followedAt"
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
                    end: 140
                }
            };
            n.loc.source = {
                body: "mutation FollowGameCard_UnfollowGame($input: UnfollowGameInput!) {\nunfollowGame(input: $input) {\ngame {\nself {\nfollow {\nfollowedAt\n}\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        gAd6: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "VideoPreviewCardGameID"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "name"
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
                                value: "game"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "name"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "name"
                                    }
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
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 73
                }
            };
            n.loc.source = {
                body: "query VideoPreviewCardGameID($name: String!) {\ngame(name: $name) {\nid\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        gukg: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "FollowingCommunities_CurrentUser"
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
                                        value: "followedCommunities"
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
                                                                value: "avatarURL"
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
                                                                value: "broadcastersCount"
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
                    end: 217
                }
            };
            n.loc.source = {
                body: "query FollowingCommunities_CurrentUser($limit: Int) {\ncurrentUser {\nid\nfollowedCommunities(first: $limit) {\nedges {\nnode {\nid\navatarURL(width: 285 height: 380)\nviewersCount\ndisplayName\nbroadcastersCount\nname\n}\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        hX9f: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                a = n("q1tI"),
                r = n("9C/b"),
                o = n("fvjX"),
                s = n("/7QA"),
                l = n("GFmA"),
                d = n("kduP"),
                c = n("2xye"),
                u = n("fVj5"),
                m = n("rShu"),
                p = n("yI6f"),
                g = n("T2RZ"),
                h = n("Ue10"),
                v = (n("zrz1"), Object(g.a)(c.PageviewMedium.Game, p.b.Live, p.c.BrowseInCategoryChannels)(l.a)),
                f = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.isTagsExperiment = Object(u.b)(), t.untitledBroadcastString = Object(s.d)("Untitled Broadcast", "StreamThumbnail"), t.getLinkTo = function(e, n) {
                            var a = t.props.trackingContent ? t.props.trackingContent : c.PageviewContent.Live,
                                r = c.PageviewMedium.Game;
                            t.props.trackingMedium && (r = t.props.trackingMedium);
                            var o = t.props.history.location && t.props.history.location.state || {};
                            return {
                                pathname: e,
                                state: i.__assign({}, o, {
                                    medium: r,
                                    content: a,
                                    content_index: n
                                })
                            }
                        }, t.shouldShowGame = function(e) {
                            return t.props.directoryType !== m.a.Games && t.props.streamNode.game ? t.props.streamNode.game[e] : ""
                        }, t.onClick = function(e) {
                            t.props.onClick && t.props.onClick(e, t.props.streamNode.broadcaster && t.props.streamNode.broadcaster.id)
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.streamNode,
                            t = this.props.streamIndex;
                        if (!e.broadcaster) return null;
                        var n = {
                            context: this.props.directoryType === m.a.Games ? l.b.SingleGameList : l.b.MixedGameAndChannelList,
                            title: e.title || this.untitledBroadcastString,
                            linkTo: this.getLinkTo("/" + e.broadcaster.login, t),
                            onVideoTitleClick: this.onClick,
                            thumbnailImageProps: {
                                src: e.previewImageURL || s.a.defaultStreamPreviewURL,
                                alt: "" + e.broadcaster.login
                            },
                            onThumbnailClick: this.onClick,
                            channelDisplayName: e.broadcaster.displayName || "",
                            channelLogin: e.broadcaster.login || "",
                            channelLinkTo: this.getLinkTo("/" + e.broadcaster.login + "/videos", t),
                            onChannelLoginClick: this.onClick,
                            channelImageProps: {
                                src: e.broadcaster.profileImageURL || "",
                                alt: "" + e.broadcaster.login
                            },
                            gameTitle: this.shouldShowGame("name"),
                            gameTitleLinkTo: this.getLinkTo(Object(d.c)(this.shouldShowGame("name")), t),
                            gameBoxArtImageProps: {
                                src: this.shouldShowGame("boxArtURL") || s.a.defaultBoxArtURL,
                                alt: this.shouldShowGame("name")
                            },
                            playerMetadata: !this.isTagsExperiment && e.streamMetadata || void 0,
                            playerMetadataGame: e.streamMetadata ? this.props.directoryName : void 0,
                            streamType: e.type,
                            currentViewerCount: e.viewersCount || 0,
                            trackImageLatency: this.props.trackImageLatency,
                            tagListProps: this.props.tagListProps
                        };
                        return a.createElement("div", {
                            className: "stream-thumbnail",
                            "data-target": t ? "" : "directory-first-item",
                            style: {
                                order: t
                            }
                        }, a.createElement(h.Va, {
                            className: "stream-thumbnail__card",
                            position: h.db.Relative,
                            margin: {
                                bottom: 2
                            },
                            "data-target": "directory-game__card_container"
                        }, a.createElement(v, i.__assign({}, n, {
                            "data-a-target": "card-" + t,
                            "data-a-id": "card-" + (e.broadcaster.login || "").replace(/ /g, ""),
                            trackingProps: {
                                category: e.game ? e.game.id : void 0,
                                categoryName: e.game ? e.game.name : void 0,
                                itemPosition: t,
                                rowPosition: 0,
                                channelID: e.broadcaster.id || void 0
                            }
                        }))))
                    }, t
                }(a.Component),
                k = Object(o.compose)(r.a)(f);
            n.d(t, "a", function() {
                return "directory-first-item"
            }), n.d(t, !1, function() {
                return "directory-game__card_container"
            }), n.d(t, !1, function() {
                return f
            }), n.d(t, "b", function() {
                return k
            })
        },
        he03: function(e, t, n) {
            var i = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "PreviewCardVideo"
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
                                value: "animatedPreviewURL"
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
                                            value: "40"
                                        }
                                    }, {
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "height"
                                        },
                                        value: {
                                            kind: "IntValue",
                                            value: "56"
                                        }
                                    }],
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
                                value: "id"
                            },
                            arguments: [],
                            directives: []
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
                                            value: "50"
                                        }
                                    }],
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
                                    value: "320"
                                }
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "height"
                                },
                                value: {
                                    kind: "IntValue",
                                    value: "180"
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
                                        value: "isRestricted"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "viewingHistory"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "position"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "updatedAt"
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
                                value: "restriction"
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "productName"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "productTitle"
                                    },
                                    arguments: [],
                                    directives: []
                                }]
                            }
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "contentTags"
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "FragmentSpread",
                                    name: {
                                        kind: "Name",
                                        value: "tagFragment"
                                    },
                                    directives: []
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 454
                }
            };
            i.loc.source = {
                body: '#import "twilight/features/tags/models/tag-fragment.gql"\nfragment PreviewCardVideo on Video {\nanimatedPreviewURL\ngame {\nboxArtURL(width: 40 height: 56)\nid\ndisplayName\nname\n}\nid\nlengthSeconds\nowner {\ndisplayName\nid\nlogin\nprofileImageURL(width: 50)\n}\npreviewThumbnailURL(width: 320 height: 180)\npublishedAt\nself {\nisRestricted\nviewingHistory {\nposition\nupdatedAt\n}\n}\ntitle\nviewCount\nrestriction {\nproductName\nproductTitle\n}\ncontentTags {\n...tagFragment\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var a = {};
            i.definitions = i.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !a[t] && (a[t] = !0, !0)
                })
            }(n("iiOx").definitions)), e.exports = i
        },
        jE8A: function(e, t, n) {},
        k5cX: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "FollowGameButton_UnfollowGame"
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
                                    value: "UnfollowGameInput"
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
                                value: "unfollowGame"
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
                                                value: "followedAt"
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
                body: "mutation FollowGameButton_UnfollowGame($input: UnfollowGameInput!) {\nunfollowGame(input: $input) {\nfollow {\nfollowedAt\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "kF1+": function(e, t, n) {},
        kVMo: function(e, t, n) {},
        lRiI: function(e, t, n) {},
        m493: function(e, t, n) {},
        mIH5: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "CommunityStreams_RankedChannelStreams"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "logins"
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
                                        value: "String"
                                    }
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
                                value: "users"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "logins"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "logins"
                                    }
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
                                                    value: "320"
                                                }
                                            }, {
                                                kind: "Argument",
                                                name: {
                                                    kind: "Name",
                                                    value: "height"
                                                },
                                                value: {
                                                    kind: "IntValue",
                                                    value: "180"
                                                }
                                            }],
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
                }],
                loc: {
                    start: 0,
                    end: 264
                }
            };
            n.loc.source = {
                body: "query CommunityStreams_RankedChannelStreams($logins: [String!]) {\nusers(logins: $logins) {\nid\nlogin\nstream {\nid\ntitle\nviewersCount\npreviewImageURL(width: 320 height: 180)\nbroadcaster {\nid\nlogin\ndisplayName\n}\ngame {\nid\nboxArtURL(width: 285 height: 380)\nname\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        moLQ: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return s
            }), n.d(t, "b", function() {
                return l
            });
            var i = n("mrSG"),
                a = n("/7QA"),
                r = n("Igt5"),
                o = n("X7a7");

            function s(e, t) {
                return e.directory.tagFilters[t] || []
            }

            function l(e) {
                return e.directory.languageTags
            }
            a.o.store.registerReducer("directory", function(e, t) {
                switch (void 0 === e && (e = {
                    languageTags: Object(o.a)(),
                    leagueOfLegends: {
                        apiData: null,
                        championsMap: null,
                        isError: !1,
                        isLoading: !1,
                        version: ""
                    },
                    tagFilters: {}
                }), t.type) {
                    case r.a:
                        return i.__assign({}, e, {
                            languageTags: t.languageTags
                        });
                    case r.b:
                        return i.__assign({}, e, {
                            leagueOfLegends: {
                                apiData: t.apiData,
                                championsMap: t.championsMap,
                                isError: !1,
                                isLoading: !1,
                                version: t.apiVersion
                            }
                        });
                    case r.c:
                        return i.__assign({}, e, {
                            leagueOfLegends: i.__assign({}, e.leagueOfLegends, {
                                isError: t.leagueOfLegendsChampionsErrored,
                                isLoading: !1
                            })
                        });
                    case r.d:
                        return i.__assign({}, e, {
                            leagueOfLegends: i.__assign({}, e.leagueOfLegends, {
                                isError: !1,
                                isLoading: t.leagueOfLegendsChampionsLoading
                            })
                        });
                    case r.e:
                        var n = i.__assign({}, e.tagFilters),
                            a = n[t.categoryName];
                        return (void 0 === a || a.every(function(e) {
                            return e.id !== t.addedTag.id
                        })) && (n[t.categoryName] = (n[t.categoryName] || []).concat([t.addedTag])), i.__assign({}, e, {
                            tagFilters: n
                        });
                    case r.f:
                        return e.tagFilters[t.categoryName] = t.tagFilters.slice(), i.__assign({}, e);
                    case r.g:
                        if (void 0 === e.tagFilters[t.categoryName]) return i.__assign({}, e);
                        var s = e.tagFilters[t.categoryName].filter(function(e) {
                            return e.id !== t.removedTag.id
                        });
                        return e.tagFilters[t.categoryName] = s, i.__assign({}, e);
                    default:
                        return e
                }
            })
        },
        mz1O: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            }), n.d(t, "b", function() {
                return r
            }), n.d(t, "c", function() {
                return o
            }), n.d(t, "d", function() {
                return s
            }), n.d(t, "e", function() {
                return l
            }), n.d(t, "f", function() {
                return d
            });
            var i = n("mrSG"),
                a = function() {
                    return i.__awaiter(void 0, void 0, void 0, function() {
                        return i.__generator(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, n.e(172).then(function() {
                                        var e = n("vrl6");
                                        return Object.assign({}, e, {
                                            default: e
                                        })
                                    })];
                                case 1:
                                    return [2, e.sent().items]
                            }
                        })
                    })
                },
                r = function() {
                    return i.__awaiter(void 0, void 0, void 0, function() {
                        return i.__generator(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, n.e(171).then(function() {
                                        var e = n("+4ZJ");
                                        return Object.assign({}, e, {
                                            default: e
                                        })
                                    })];
                                case 1:
                                    return [2, e.sent().items]
                            }
                        })
                    })
                },
                o = function() {
                    return i.__awaiter(void 0, void 0, void 0, function() {
                        return i.__generator(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, n.e(170).then(function() {
                                        var e = n("nSs0");
                                        return Object.assign({}, e, {
                                            default: e
                                        })
                                    })];
                                case 1:
                                    return [2, e.sent().items]
                            }
                        })
                    })
                },
                s = function() {
                    return i.__awaiter(void 0, void 0, void 0, function() {
                        return i.__generator(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, n.e(169).then(function() {
                                        var e = n("1Bro");
                                        return Object.assign({}, e, {
                                            default: e
                                        })
                                    })];
                                case 1:
                                    return [2, e.sent().items]
                            }
                        })
                    })
                },
                l = function() {
                    return i.__awaiter(void 0, void 0, void 0, function() {
                        return i.__generator(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, n.e(168).then(function() {
                                        var e = n("Dpq/");
                                        return Object.assign({}, e, {
                                            default: e
                                        })
                                    })];
                                case 1:
                                    return [2, e.sent().items]
                            }
                        })
                    })
                },
                d = function() {
                    return i.__awaiter(void 0, void 0, void 0, function() {
                        return i.__generator(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, n.e(167).then(function() {
                                        var e = n("bVYI");
                                        return Object.assign({}, e, {
                                            default: e
                                        })
                                    })];
                                case 1:
                                    return [2, e.sent().items]
                            }
                        })
                    })
                }
        },
        ni0n: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "CommunityStreams_Streams"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "name"
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
                                value: "type"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "DirectoryType"
                                }
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
                    }],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "directory"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "name"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "name"
                                    }
                                }
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "type"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "type"
                                    }
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
                                        value: "streams"
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
                                                                value: "title"
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
                                                                    value: "320"
                                                                }
                                                            }, {
                                                                kind: "Argument",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "height"
                                                                },
                                                                value: {
                                                                    kind: "IntValue",
                                                                    value: "180"
                                                                }
                                                            }],
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
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 354
                }
            };
            n.loc.source = {
                body: "query CommunityStreams_Streams($name: String! $type: DirectoryType! $limit: Int) {\ndirectory(name: $name type: $type) {\nid\nstreams(first: $limit) {\nedges {\ncursor\nnode {\nid\ntitle\nviewersCount\npreviewImageURL(width: 320 height: 180)\nbroadcaster {\nid\nlogin\ndisplayName\n}\ngame {\nid\nboxArtURL(width: 285 height: 380)\nname\n}\n}\n}\npageInfo {\nhasNextPage\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        nrVK: function(e, t, n) {},
        ns6o: function(e, t, n) {},
        oA7Y: function(e, t, n) {
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
                return s
            }), n.d(t, "f", function() {
                return l
            }), n.d(t, "g", function() {
                return d
            }), n.d(t, "i", function() {
                return c
            }), n.d(t, "h", function() {
                return u
            }), n.d(t, "j", function() {
                return m
            });
            var i = "browse.BROWSE_TYPE_CHANGED",
                a = "browse.LAST_BROWSE_PATH",
                r = "browse.TAG_FILTER_ADDED",
                o = "browse.TAG_FILTER_CHANGED",
                s = "browse.TAG_FILTER_REMOVED";

            function l(e) {
                return {
                    type: r,
                    addedTag: e
                }
            }

            function d(e) {
                return {
                    type: i,
                    browseType: e
                }
            }

            function c(e) {
                return {
                    type: o,
                    tagFilters: e
                }
            }

            function u(e) {
                return {
                    type: a,
                    lastBrowsePath: e
                }
            }

            function m(e) {
                return {
                    type: s,
                    removedTag: e
                }
            }
        },
        oJov: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                a = n("q1tI"),
                r = n("/7QA"),
                o = n("Ue10"),
                s = (n("1mcJ"), function(e) {
                    return a.createElement(o.Va, i.__assign({
                        className: "drops-badge",
                        position: o.db.Absolute,
                        attachTop: !0,
                        attachRight: !0
                    }, Object(o.bc)(e)), a.createElement(o.Qb, {
                        direction: o.Sb.Top,
                        align: o.Rb.Right,
                        label: Object(r.d)("Offers in-game Drops", "DropsBadge")
                    }, a.createElement(o.xb, {
                        className: "drops-badge__drops-icon",
                        position: o.db.Relative,
                        padding: {
                            top: .5,
                            right: .5,
                            bottom: 3,
                            left: 3
                        },
                        overflow: o.Ya.Hidden,
                        color: o.O.Overlay,
                        zIndex: o.ac.Default
                    }, a.createElement(o.T, {
                        type: o.U.Inherit,
                        hoverColorInherit: !0,
                        to: "https://help.twitch.tv/customer/en/portal/articles/2754380-how-to-earn-drops"
                    }, a.createElement(o.mb, {
                        asset: o.nb.Drops
                    })))))
                }),
                l = n("0LAi"),
                d = n("fVj5"),
                c = function(e) {
                    return a.createElement(o.Va, null, a.createElement(o.y, i.__assign({}, e)), Object(d.a)() && e.tagListProps && 0 !== e.tagListProps.tags.length && a.createElement(o.Va, {
                        margin: {
                            top: .5
                        }
                    }, a.createElement(l.a, i.__assign({}, e.tagListProps, {
                        tagNumberLimit: 3
                    }))), !0 === e.showDropsBadge && a.createElement(s, null))
                };
            n.d(t, "a", function() {
                return c
            })
        },
        odjZ: function(e, t, n) {
            "use strict";
            var i, a = n("mrSG"),
                r = n("q1tI"),
                o = n("fvjX"),
                s = n("yR8l"),
                l = n("Ue10"),
                d = (n("BIFG"), n("BEfv"));
            ! function(e) {
                e.Bounce = "animated-tag--bounce", e.NoBounce = "animated-tag--no-bounce"
            }(i || (i = {}));
            var c = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = null;
                        if (this.props.getTagFromGQL) {
                            if (!this.props.data || this.props.data.loading || this.props.data.error || !this.props.data.contentTag) return null;
                            var t = this.props.data.contentTag;
                            e = r.createElement(l.Ga, {
                                label: t.localizedName,
                                onClick: this.props.onClickForGQLTag && this.props.onClickForGQLTag.bind(this, t),
                                selected: !0,
                                size: l.Qa.Large
                            })
                        } else this.props.formTagProps && (e = r.createElement(l.Ga, a.__assign({}, this.props.formTagProps)));
                        return r.createElement("div", {
                            className: i.NoBounce,
                            "data-tag-filter": this.props.tagID
                        }, e)
                    }, t
                }(r.Component),
                u = Object(o.compose)(Object(s.a)(d, {
                    options: function(e) {
                        return {
                            variables: {
                                id: e.tagID
                            }
                        }
                    },
                    skip: function(e) {
                        return !e.getTagFromGQL
                    }
                }))(c);
            n.d(t, "b", function() {
                return i
            }), n.d(t, !1, function() {
                return c
            }), n.d(t, "a", function() {
                return u
            })
        },
        qyxT: function(e, t, n) {
            "use strict";

            function i(e) {
                for (var t = e.length - 1; t > 0; t--) {
                    var n = Math.floor(Math.random() * (t + 1)),
                        i = e[t];
                    e[t] = e[n], e[n] = i
                }
                return e
            }
            n.d(t, "a", function() {
                return i
            })
        },
        rJ4n: function(e, t, n) {
            var i = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "FollowingHosts_CurrentUser"
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
                                value: "isTagsExperiment"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Boolean"
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
                                        value: "follows"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "totalCount"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "followedHosts"
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
                                                                    value: "50"
                                                                }
                                                            }],
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
                                                                                    value: "40"
                                                                                }
                                                                            }, {
                                                                                kind: "Argument",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "height"
                                                                                },
                                                                                value: {
                                                                                    kind: "IntValue",
                                                                                    value: "56"
                                                                                }
                                                                            }],
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
                                                                        value: "title"
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
                                                                            value: "320"
                                                                        }
                                                                    }, {
                                                                        kind: "Argument",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "height"
                                                                        },
                                                                        value: {
                                                                            kind: "IntValue",
                                                                            value: "180"
                                                                        }
                                                                    }],
                                                                    directives: []
                                                                }, {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "tags"
                                                                    },
                                                                    arguments: [],
                                                                    directives: [{
                                                                        kind: "Directive",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "include"
                                                                        },
                                                                        arguments: [{
                                                                            kind: "Argument",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "if"
                                                                            },
                                                                            value: {
                                                                                kind: "Variable",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "isTagsExperiment"
                                                                                }
                                                                            }
                                                                        }]
                                                                    }],
                                                                    selectionSet: {
                                                                        kind: "SelectionSet",
                                                                        selections: [{
                                                                            kind: "FragmentSpread",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "broadcastTagFragment"
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
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 502
                }
            };
            i.loc.source = {
                body: '#import "twilight/features/tags/models/broadcast-tag-fragment.gql"\nquery FollowingHosts_CurrentUser($limit: Int $isTagsExperiment: Boolean!) {\ncurrentUser {\nid\nfollows {\ntotalCount\n}\nfollowedHosts(first: $limit) {\nnodes {\nid\nlogin\ndisplayName\nhosting {\nid\nlogin\ndisplayName\nprofileImageURL(width: 50)\nstream {\nid\ngame {\nid\nname\nboxArtURL(width: 40 height: 56)\n}\nviewersCount\ntitle\ntype\npreviewImageURL(width: 320 height: 180)\ntags @include(if: $isTagsExperiment) {\n...broadcastTagFragment\n}\n}\n}\n}\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var a = {};
            i.definitions = i.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !a[t] && (a[t] = !0, !0)
                })
            }(n("Iqxx").definitions)), e.exports = i
        },
        rShu: function(e, t, n) {
            "use strict";
            var i;
            n.d(t, "a", function() {
                    return i
                }),
                function(e) {
                    e.Games = "GAMES", e.Communities = "COMMUNITIES", e.Creative = "CREATIVE"
                }(i || (i = {}))
        },
        sLlB: function(e, t, n) {
            "use strict";
            var i, a = n("/MKj"),
                r = n("fvjX"),
                o = n("5xw2"),
                s = n("OhOW"),
                l = n("mrSG"),
                d = n("q1tI"),
                c = n("wIs1"),
                u = n("/7QA"),
                m = n("vSJR"),
                p = n("8/mp"),
                g = n("HSqT"),
                h = n("2xye"),
                v = n("GnwI"),
                f = n("Ue10");
            n("S58p");
            ! function(e) {
                e.ClearAllButton = "language-select-menu__clear-all-button"
            }(i || (i = {}));
            var k = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleLanguageChange = function(e) {
                            var n = e.currentTarget,
                                i = n.parentElement && n.parentElement.getAttribute("data-language-code");
                            i && (t.props.updateLanguagePreferences(i, n.checked), t.trackLanguageChange(i, n.checked))
                        }, t.renderDropdownContent = function() {
                            return d.createElement(d.Fragment, null, d.createElement("div", {
                                className: "language-select-menu__balloon"
                            }, d.createElement(p.b, null, d.createElement(f.Va, {
                                padding: .5
                            }, Object(g.b)().map(t.renderLanguageOption)))), d.createElement(f.xb, {
                                background: f.r.Alt,
                                borderTop: !0,
                                className: "language-select-menu__footer"
                            }, d.createElement(f.z, {
                                type: f.F.Text,
                                onClick: t.props.clearLanguagePreferences,
                                "data-a-target": "language-clear-all",
                                "data-test-selector": i.ClearAllButton
                            }, Object(u.d)("Clear all", "LanguageSelectMenu"))))
                        }, t.renderLanguageOption = function(e) {
                            return d.createElement(f.Va, {
                                padding: {
                                    x: 1,
                                    y: .5
                                },
                                key: e.code
                            }, d.createElement(f.N, {
                                label: e.label,
                                checked: t.props.languagePreferences.includes(e.code),
                                "data-language-code": e.code,
                                "data-a-target": "language-filter-" + e.code + "-checkbox",
                                onChange: t.handleLanguageChange
                            }))
                        }, t.renderButtonContent = function() {
                            var e = t.props.languagePreferences.length,
                                n = Object(u.d)("Language", "LanguageSelectMenu");
                            return d.createElement(f.Va, {
                                display: f.W.Flex
                            }, n, d.createElement(f.Va, {
                                margin: {
                                    left: .5
                                }
                            }, 0 !== e && d.createElement(f.ab, {
                                type: f.bb.Brand,
                                label: e.toString()
                            })))
                        }, t.trackLanguageChange = function(e, n) {
                            var i = "";
                            t.props.match && t.props.match.params && (i = decodeURIComponent(t.props.match.params.encodedCommunityName).toLowerCase()), u.o.tracking.track(h.SpadeEventType.LanguageFilterChange, {
                                item_name: "language",
                                item_value: e,
                                item_action: n ? "select" : "deselect",
                                game: i || null,
                                open_click: !0
                            })
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return d.createElement(f.Va, {
                            className: "language-select-menu"
                        }, d.createElement(m.a, {
                            "data-a-target": "language-filter-dropdown",
                            buttonLabel: this.renderButtonContent()
                        }, this.renderDropdownContent()))
                    }, t
                }(d.Component),
                y = Object(r.compose)(c.a, Object(v.c)("LanguageSelectMenu"))(k);
            var b = Object(a.connect)(function(e) {
                return {
                    languagePreferences: Object(s.a)(e)
                }
            }, function(e) {
                return Object(r.bindActionCreators)({
                    updateLanguagePreferences: o.c,
                    clearLanguagePreferences: o.a
                }, e)
            })(y);
            n.d(t, "a", function() {
                return b
            })
        },
        sabN: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ForYouPage_UserFollows"
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
                    end: 139
                }
            };
            n.loc.source = {
                body: "query ForYouPage_UserFollows($limit: Int) {\ncurrentUser {\nid\ncreatedAt\nfollowedGames(first: $limit) {\nnodes {\nid\nname\ndirectoryType\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        sqxy: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                a = n("q1tI"),
                r = n("GFmA"),
                o = n("oB8h"),
                s = n("Ue10"),
                l = (n("5cmV"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return a.createElement("div", i.__assign({
                            className: "live-channel-card"
                        }, Object(s.bc)(this.props)), a.createElement(r.a, {
                            context: r.b.MixedGameAndChannelList,
                            title: this.props.title,
                            linkTo: this.props.linkTo,
                            onVideoTitleClick: this.props.onClick,
                            thumbnailImageProps: {
                                src: this.props.imageSrc,
                                alt: this.props.imageAlt
                            },
                            onThumbnailClick: this.props.onClick,
                            channelDisplayName: this.props.channelDisplayName,
                            channelLogin: this.props.channelLogin,
                            channelLinkTo: this.props.channelNameLinkTo,
                            onChannelLoginClick: this.props.onClick,
                            channelImageProps: {
                                src: this.props.channelImageSrc || "",
                                alt: this.props.channelDisplayName
                            },
                            gameTitle: this.props.gameTitle,
                            gameTitleLinkTo: this.props.gameLinkTo,
                            gameBoxArtImageProps: {
                                src: this.props.gameImageSrc,
                                alt: this.props.gameTitle
                            },
                            playerMetadata: this.props.streamMetadata || void 0,
                            playerMetadataGame: this.props.streamMetadata ? this.props.gameTitle : void 0,
                            streamType: this.props.streamType || o.a.Live,
                            currentViewerCount: this.props.viewerCount,
                            hostedByChannelLogin: this.props.hostedByChannelLogin,
                            tagListProps: this.props.tagListProps
                        }))
                    }, t
                }(a.Component)),
                d = l;
            n.d(t, !1, function() {
                return l
            }), n.d(t, "a", function() {
                return d
            })
        },
        vDRX: function(e, t, n) {},
        vSJR: function(e, t, n) {
            "use strict";
            var i, a = n("mrSG"),
                r = n("q1tI"),
                o = n("u5aL"),
                s = n("N0BP"),
                l = n("Ue10");
            ! function(e) {
                e.DropdownInsideClickDetector = "dropdown-inside-click-detector", e.DropdownWrapper = "dropdown-wrapper"
            }(i || (i = {}));
            var d = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isOpen: !!t.props.openByDefault
                    }, t.handleOnClickOut = function() {
                        t.hideDropdown()
                    }, t.handleButtonClick = function() {
                        t.setState(function(e) {
                            return {
                                isOpen: !e.isOpen,
                                hasInteracted: !0
                            }
                        }, function() {
                            t.props.onToggle && t.props.onToggle(!t.state.isOpen)
                        })
                    }, t.hideDropdown = function() {
                        t.setState({
                            isOpen: !1
                        }, function() {
                            t.props.onToggle && t.props.onToggle(!0)
                        })
                    }, t.handleInsideDropdownClick = function() {
                        t.hideDropdown()
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.children;
                    return this.props.hideDropdownOnInsideClick && (e = r.createElement("div", {
                        "data-test-selector": i.DropdownInsideClickDetector,
                        onClick: this.handleInsideDropdownClick
                    }, e)), r.createElement(o.a, {
                        onClickOut: this.handleOnClickOut
                    }, r.createElement(l.xb, a.__assign({
                        background: this.state.isOpen ? l.r.Base : void 0,
                        borderRadius: l.x.Large,
                        className: "inline-dropdown",
                        elevation: this.state.isOpen ? 3 : void 0,
                        padding: .5,
                        position: l.db.Relative
                    }, Object(s.a)(this.props)), r.createElement("div", {
                        className: "inline-dropdown__button-wrapper"
                    }, r.createElement(l.z, {
                        blurAfterClick: !0,
                        dropdown: !0,
                        onClick: this.handleButtonClick,
                        size: l.D.Large,
                        type: l.F.Hollow
                    }, this.props.buttonLabel)), r.createElement(l.xb, {
                        attachLeft: !0,
                        background: l.r.Base,
                        borderRadius: l.x.Large,
                        "data-test-selector": i.DropdownWrapper,
                        display: this.state.isOpen ? l.W.Block : l.W.Hide,
                        elevation: 3,
                        fullWidth: !0,
                        padding: {
                            y: 1
                        },
                        position: l.db.Absolute,
                        zIndex: l.ac.Above
                    }, e)))
                }, t.prototype.toggleDropdown = function(e) {
                    void 0 === e && (e = !this.state.isOpen), this.setState({
                        isOpen: e
                    })
                }, t
            }(r.Component);
            n.d(t, "a", function() {
                return d
            })
        },
        "x/sq": function(e, t, n) {
            "use strict";
            var i = n("/7QA"),
                a = n("odjZ"),
                r = {},
                o = n("fVj5"),
                s = n("AZIu"),
                l = n("X7a7");
            n.d(t, "a", function() {
                return d
            });
            var d = function(e) {
                var t = e.tags,
                    n = e.section,
                    d = e.onClickTag,
                    c = e.tagFilters,
                    u = void 0 === c ? [] : c,
                    m = e.scrollToTop;
                if (Object(o.a)() && t) {
                    return {
                        tags: t,
                        callback: function(e) {
                            if (m && m(), e.isLanguageTag && i.o.store.dispatch(Object(l.d)(e.id, !0)), u.every(function(t) {
                                    return t.id !== e.id
                                })) {
                                d && d(e);
                                var t = {
                                    section: n,
                                    tagPosition: u.length,
                                    searchEvent: !1,
                                    tagId: e.id,
                                    dismiss: !1
                                };
                                Object(s.b)(t)
                            } else ! function(e) {
                                var t = document.querySelector('[data-tag-filter="' + e + '"]');
                                if (t) {
                                    var n = r[e];
                                    n && clearTimeout(n), t.classList.contains(a.b.NoBounce) && (t.classList.remove(a.b.NoBounce), t.classList.add(a.b.Bounce));
                                    var i = setTimeout(function() {
                                        t.classList.remove(a.b.Bounce), t.classList.add(a.b.NoBounce), delete r[e]
                                    }, 750);
                                    r[e] = i
                                }
                            }(e.id)
                        }
                    }
                }
            }
        },
        x75U: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return l
            }), n.d(t, "b", function() {
                return d
            });
            var i = n("mrSG"),
                a = n("17x9"),
                r = n("q1tI"),
                o = n("2xye"),
                s = n("yI6f"),
                l = {
                    cardIDtoItemTrackingIDMap: a.object,
                    trackTitleClick: a.func,
                    trackTitleImpression: a.func,
                    trackImpression: a.func,
                    trackClick: a.func
                };

            function d() {
                return function(e) {
                    return function(t) {
                        function n(e) {
                            var n = t.call(this, e) || this;
                            return n.getChildContext = function() {
                                return {
                                    trackTitleClick: n.trackTitleClick,
                                    trackTitleImpression: n.trackTitleImpression,
                                    trackImpression: n.trackImpression,
                                    trackClick: n.trackClick,
                                    cardIDtoItemTrackingIDMap: n.state.cardIDtoItemTrackingIDMap
                                }
                            }, n.mapShelfCardsToRequestIDs = function(e, t, n) {
                                return void 0 === n && (n = {}), e.reduce(function(e, n) {
                                    return n.node && !e[n.node.id] && (e[n.node.id] = t), e
                                }, n)
                            }, n.trackTitleImpression = function(e) {
                                var t = Object(s.f)(e.title),
                                    i = t.reasonType,
                                    a = t.reasonTarget,
                                    r = t.rowName,
                                    l = Object(s.e)(),
                                    d = {
                                        component: s.a.Header,
                                        contentEdge: null,
                                        itemTrackingID: l,
                                        itemPosition: null,
                                        reasonType: i,
                                        reasonTarget: a,
                                        reasonTargetType: null,
                                        requestID: n.props.requestID,
                                        rowName: r,
                                        rowPosition: n.props.position,
                                        tagID: null,
                                        filtered: !1,
                                        tagSet: "[]",
                                        tagStreamerSet: "[]"
                                    };
                                Object(s.h)(d, o.PageviewContent.HeaderGameName), n.setState({
                                    headerImpressionID: l
                                })
                            }, n.trackTitleClick = function() {
                                var e = n.props.shelf,
                                    t = Object(s.f)(e.title),
                                    i = t.reasonType,
                                    a = t.reasonTarget,
                                    r = t.reasonTargetType,
                                    l = t.rowName,
                                    d = {
                                        component: s.a.Header,
                                        contentEdge: null,
                                        itemTrackingID: n.state.headerImpressionID,
                                        requestID: n.state.headerRequestID,
                                        itemPosition: null,
                                        rowPosition: n.props.position,
                                        reasonType: i,
                                        reasonTarget: a,
                                        reasonTargetType: r,
                                        rowName: l,
                                        tagID: null,
                                        filtered: !1,
                                        tagSet: "[]",
                                        tagStreamerSet: "[]"
                                    };
                                Object(s.g)(d, o.PageviewContent.HeaderGameName)
                            }, n.trackImpression = function(e, t, i, a) {
                                if (t.node && !n.state.cardIDtoItemTrackingIDMap[t.node.id]) {
                                    var r = Object(s.e)(),
                                        o = Object(s.f)(e.title),
                                        l = o.reasonType,
                                        d = o.reasonTarget,
                                        c = o.reasonTargetType,
                                        u = o.rowName,
                                        m = {
                                            component: s.a.Card,
                                            contentEdge: t,
                                            itemTrackingID: r,
                                            itemPosition: i,
                                            reasonType: l,
                                            reasonTarget: d,
                                            reasonTargetType: c,
                                            requestID: n.state.cardIDtoRequestIDMap[t.node.id],
                                            rowName: u,
                                            rowPosition: n.props.position,
                                            tagID: null,
                                            filtered: !1,
                                            tagSet: JSON.stringify(a),
                                            tagStreamerSet: "[]"
                                        };
                                    Object(s.h)(m), n.setState(function(e) {
                                        var n = e.cardIDtoItemTrackingIDMap;
                                        return n[t.node.id] = r, {
                                            cardIDtoItemTrackingIDMap: n
                                        }
                                    })
                                }
                            }, n.trackClick = function(e, t, i, a, r, o) {
                                if (t.node) {
                                    var l = n.state,
                                        d = l.cardIDtoRequestIDMap,
                                        c = l.cardIDtoItemTrackingIDMap,
                                        u = Object(s.f)(e.title),
                                        m = u.reasonType,
                                        p = u.reasonTarget,
                                        g = u.reasonTargetType,
                                        h = u.rowName,
                                        v = {
                                            component: s.a.Card,
                                            contentEdge: t,
                                            itemTrackingID: c[t.node.id] || null,
                                            requestID: d[t.node.id],
                                            itemPosition: i,
                                            rowPosition: n.props.position,
                                            reasonType: m,
                                            reasonTarget: p,
                                            reasonTargetType: g,
                                            rowName: h,
                                            tagID: void 0 !== o ? o : null,
                                            filtered: !1,
                                            tagSet: JSON.stringify(r),
                                            tagStreamerSet: "[]"
                                        };
                                    Object(s.g)(v, a)
                                }
                            }, n.state = {
                                cardIDtoItemTrackingIDMap: {},
                                cardIDtoRequestIDMap: n.mapShelfCardsToRequestIDs(e.shelf.content.edges || [], e.requestID, {}),
                                headerImpressionID: null,
                                headerRequestID: e.requestID
                            }, n
                        }
                        return i.__extends(n, t), n.prototype.componentWillReceiveProps = function(e) {
                            var t = this,
                                n = e.shelf,
                                i = e.requestID;
                            n.content.edges !== this.props.shelf.content.edges && this.setState(function(e) {
                                return {
                                    cardIDtoRequestIDMap: t.mapShelfCardsToRequestIDs(n.content.edges || [], i, e.cardIDtoRequestIDMap)
                                }
                            })
                        }, n.prototype.render = function() {
                            var t = Object(s.f)(this.props.shelf.title).rowName,
                                n = {
                                    trackTitleClick: this.getChildContext().trackTitleClick,
                                    trackTitleImpression: this.getChildContext().trackTitleImpression,
                                    trackImpression: this.getChildContext().trackImpression,
                                    trackClick: this.getChildContext().trackClick,
                                    shelfTrackingProps: {
                                        item_tracking_id: this.state.headerImpressionID,
                                        item_position: null,
                                        row_name: t,
                                        row_position: this.props.position
                                    }
                                };
                            return r.createElement(e, i.__assign({}, this.props, n))
                        }, n.childContextTypes = l, n
                    }(r.Component)
                }
            }
        },
        xugo: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "FollowGamesModal_Games"
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
                    end: 131
                }
            };
            n.loc.source = {
                body: "query FollowGamesModal_Games($limit: Int) {\ngames(first: $limit) {\nedges {\nnode {\nid\nname\nboxArtURL(width: 285 height: 380)\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        y5Wm: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "FollowGameButton_Game"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "name"
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
                                value: "game"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "name"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "name"
                                    }
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
                                        value: "name"
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
                                                        value: "followedAt"
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
                    end: 127
                }
            };
            n.loc.source = {
                body: "query FollowGameButton_Game($name: String!) {\ngame(name: $name) {\nid\nname\nself {\nfollow {\nfollowedAt\n}\n}\n}\ncurrentUser {\nid\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        yI6f: function(e, t, n) {
            "use strict";
            var i, a, r, o, s, l, d, c = n("/7QA"),
                u = n("f00E"),
                m = n("2xye"),
                p = n("3sMy"),
                g = function() {
                    return Object(u.b)().substring(0, 16)
                };
            ! function(e) {
                e.TwitchHome = "twitch_home", e.BrowseLiveChannels = "browse_livechannels", e.BrowseCategories = "browse_categories", e.BrowseInCategoryChannels = "browse_incategory_channels"
            }(a || (a = {})),
            function(e) {
                e.Live = "live", e.Clip = "clip", e.Vod = "vod", e.Game = "game"
            }(r || (r = {})),
            function(e) {
                e.Card = "card", e.Header = "header"
            }(o || (o = {})),
            function(e) {
                e.Followed = "followed", e.Watched = "watched", e.Popularity = "popularity", e.Personalized = "personalized"
            }(s || (s = {})),
            function(e) {
                e.Live = "live", e.Clip = "clip", e.Vod = "vod", e.Game = "game"
            }(l || (l = {})),
            function(e) {
                e.Live = "recs_live", e.Vod = "recs_vod", e.Clip = "recs_clip"
            }(d || (d = {}));
            var h = ((i = {})[p.a.TopLiveChannels] = function(e) {
                return {
                    reasonType: s.Popularity,
                    reasonTarget: null,
                    reasonTargetType: l.Live,
                    rowName: e
                }
            }, i[p.a.TopGames] = function(e) {
                return {
                    reasonType: s.Popularity,
                    reasonTarget: null,
                    reasonTargetType: l.Game,
                    rowName: e
                }
            }, i[p.a.TopChannelsPlayingGame] = function(e, t) {
                return {
                    reasonType: s.Popularity,
                    reasonTarget: t.context && t.context.id || null,
                    reasonTargetType: l.Game,
                    rowName: e
                }
            }, i[p.a.TopLiveChannelsYouMayLike] = function(e) {
                return {
                    reasonType: s.Personalized,
                    reasonTarget: null,
                    reasonTargetType: l.Live,
                    rowName: e
                }
            }, i[p.a.TopGamesForYou] = function(e) {
                return {
                    reasonType: s.Personalized,
                    reasonTarget: null,
                    reasonTargetType: l.Game,
                    rowName: e
                }
            }, i[p.a.RecommendedBecauseYouWatchX] = function(e, t) {
                return {
                    reasonType: s.Watched,
                    reasonTarget: t.context && t.context.id || null,
                    reasonTargetType: l.Game,
                    rowName: e
                }
            }, i[p.a.RecommendedBecauseYouFollowX] = function(e, t) {
                return {
                    reasonType: s.Followed,
                    reasonTarget: t.context && t.context.id || null,
                    reasonTargetType: null,
                    rowName: e
                }
            }, i[p.a.GreatNewClipsYouMayHaveMissed] = function(e) {
                return {
                    reasonType: s.Popularity,
                    reasonTarget: null,
                    reasonTargetType: l.Clip,
                    rowName: e
                }
            }, i[p.a.TopNewVideosYouMayHaveMissed] = function(e) {
                return {
                    reasonType: s.Popularity,
                    reasonTarget: null,
                    reasonTargetType: l.Vod,
                    rowName: e
                }
            }, i);

            function v(e) {
                var t = e.key;
                return h[t] ? h[t](t, e) : {
                    reasonType: null,
                    reasonTarget: "",
                    reasonTargetType: null,
                    rowName: t
                }
            }

            function f(e, t) {
                var n, i = null,
                    o = null,
                    s = null,
                    l = e.contentEdge && e.contentEdge.node && e.contentEdge.node.id || "";
                if (e.contentEdge) switch (e.contentEdge.node && e.contentEdge.node.__typename) {
                    case "Stream":
                        i = (n = e.contentEdge.node).broadcaster && n.broadcaster.id, o = r.Live, l = String(n.broadcaster && n.broadcaster.id), s = n.game ? n.game.id : null;
                        break;
                    case "Clip":
                        i = (n = e.contentEdge.node).broadcaster && n.broadcaster.id, o = r.Clip, s = n.game ? n.game.id : null;
                        break;
                    case "Video":
                        i = (n = e.contentEdge.node).owner && n.owner.id, o = r.Vod, s = n.game ? n.game.id : null;
                        break;
                    case "Game":
                        n = e.contentEdge.node, i = null, o = r.Game, s = n.id
                }
                return {
                    component: e.component,
                    request_id: e.requestID,
                    section: a.TwitchHome,
                    model_tracking_id: e.contentEdge && e.contentEdge.trackingID,
                    item_tracking_id: e.itemTrackingID,
                    item_id: l,
                    channel_id: null === i ? null : Number(i),
                    item_position: e.itemPosition,
                    item_subsection: t || null,
                    item_page: m.PageviewMedium.TwitchHome,
                    row_position: e.rowPosition,
                    content_type: o,
                    reason_type: e.reasonType,
                    reason_target: e.reasonTarget,
                    reason_target_type: e.reasonTargetType,
                    row_name: e.rowName,
                    tag_set: e.tagSet,
                    tag_streamer_set: e.tagStreamerSet,
                    filtered: e.filtered,
                    category: s,
                    tag_id: e.tagID
                }
            }

            function k(e, t) {
                var n = f(e, t);
                c.n.track(m.SpadeEventType.ItemClick, n)
            }

            function y(e, t) {
                var n = f(e, t);
                c.n.track(m.SpadeEventType.ItemDisplay, n)
            }

            function b(e) {
                var t = {
                    endpoint: e.endpoint,
                    request_id: e.requestID,
                    section: e.section
                };
                c.n.track(m.SpadeEventType.RecRequestClient, t)
            }
            var w = n("x75U"),
                S = n("A65o");
            n.d(t, "e", function() {
                return g
            }), n.d(t, "c", function() {
                return a
            }), n.d(t, "b", function() {
                return r
            }), n.d(t, "a", function() {
                return o
            }), n.d(t, !1, function() {
                return s
            }), n.d(t, !1, function() {
                return l
            }), n.d(t, "d", function() {
                return d
            }), n.d(t, "f", function() {
                return v
            }), n.d(t, "g", function() {
                return k
            }), n.d(t, "h", function() {
                return y
            }), n.d(t, "i", function() {
                return b
            }), n.d(t, !1, function() {
                return w.a
            }), n.d(t, "j", function() {
                return w.b
            }), n.d(t, !1, function() {
                return S.a
            })
        },
        yWUM: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            });
            var i = "0h0m1s";

            function a(e) {
                if (0 === e) return i;
                if (!e || e < 0) return "";
                var t = e,
                    n = Math.floor(t / 3600);
                return t %= 3600, n + "h" + Math.floor(t / 60) + "m" + (t %= 60) + "s"
            }
        },
        yziQ: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                a = n("q1tI"),
                r = n("yR8l"),
                o = n("geRD"),
                s = n("G1cX");

            function l(e, t, n, i) {
                void 0 === n && (n = {});
                var a = e.readQuery({
                    query: t,
                    variables: n
                });
                if (a) {
                    var r = s(a, function(e) {
                        return e
                    }, function(e) {
                        return i(e)
                    });
                    e.writeQuery({
                        query: t,
                        variables: n,
                        data: r
                    })
                }
            }
            var d = n("Ue10"),
                c = n("4ErZ"),
                u = n("bSYX"),
                m = (n("AXwV"), n("g3/t"));
            n.d(t, "a", function() {
                return p
            });
            var p = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        hovered: !1,
                        inProgress: !1
                    }, t.onClick = function() {
                        t.state.inProgress || t.setState({
                            inProgress: !0
                        }, t.mutateFollowGame)
                    }, t.mutateFollowGame = function() {
                        return i.__awaiter(t, void 0, void 0, function() {
                            return i.__generator(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return this.followGameDataLoadedWithoutError() && this.props.data.game ? this.isFollowing() ? [3, 2] : [4, this.followGame(this.props.data.game.id)] : [2];
                                    case 1:
                                        return e.sent(), [3, 4];
                                    case 2:
                                        return [4, this.unfollowGame(this.props.data.game.id)];
                                    case 3:
                                        e.sent(), e.label = 4;
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t.onMouseEnter = function() {
                        t.setState({
                            hovered: !0
                        })
                    }, t.onMouseLeave = function() {
                        t.setState({
                            hovered: !1
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    !e.categoryChange || this.props.categoryChange && this.props.categoryChange.timestampMs === e.categoryChange.timestampMs || !e.categoryChange.category.games.includes(this.props.title) || this.isFollowing() !== e.categoryChange.shouldFollow && this.onClick()
                }, t.prototype.render = function() {
                    return a.createElement(d.Na, {
                        position: d.db.Relative,
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement("div", i.__assign({
                        className: "follow-game-card",
                        "data-test-selector": "follow-game-card",
                        onMouseEnter: this.onMouseEnter,
                        onMouseLeave: this.onMouseLeave,
                        onClick: this.onClick
                    }, Object(d.bc)(this.props)), a.createElement(d.G, {
                        key: this.props.title
                    }, a.createElement(d.Va, {
                        position: d.db.Relative
                    }, this.renderOverlay(), a.createElement(d.I, {
                        aspect: d.p.Aspect3x4,
                        alt: this.props.imageAlt,
                        src: this.props.imageSrc
                    })), a.createElement(d.H, null, a.createElement(d.Va, {
                        margin: {
                            top: .5,
                            bottom: 1
                        }
                    }, a.createElement(d.V, {
                        color: d.O.Base,
                        fontSize: d.Aa.Size5
                    }, this.props.title), a.createElement(d.V, {
                        color: d.O.Alt,
                        fontSize: d.Aa.Size6
                    }, this.props.info))))))
                }, t.prototype.renderOverlay = function() {
                    var e, t = this.isFollowing();
                    return this.state.inProgress ? e = a.createElement(d.Xa, {
                        delay: 0
                    }) : this.state.hovered ? e = a.createElement(d.mb, {
                        width: 50,
                        height: 50,
                        asset: t ? d.nb.Unheart : d.nb.Heart
                    }) : t && (e = a.createElement(d.mb, {
                        width: 50,
                        height: 50,
                        asset: d.nb.Heart
                    })), e ? a.createElement(d.xb, {
                        className: "follow-game-card__overlay " + (t ? "follow-game-card__overlay--followed" : ""),
                        background: d.r.Overlay,
                        color: d.O.Overlay,
                        "data-a-target": t ? "follow-game-card--followed" : "",
                        display: d.W.Flex,
                        alignItems: d.f.Center,
                        justifyContent: d.Ua.Center,
                        position: d.db.Absolute,
                        zIndex: d.ac.Above,
                        attachBottom: !0,
                        attachTop: !0,
                        attachLeft: !0,
                        attachRight: !0
                    }, e) : null
                }, t.prototype.followGame = function(e) {
                    return i.__awaiter(this, void 0, void 0, function() {
                        var t, n = this;
                        return i.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    t = i.__assign({}, Object(o.a)({
                                        gameID: e
                                    }), {
                                        update: function(e, t) {
                                            var i = t.data.followGame;
                                            l(e, u, {
                                                name: n.props.title
                                            }, function(e) {
                                                return e.game && i && i.game ? (e.game.self.follow = i.game.self.follow, e) : e
                                            })
                                        },
                                        optimisticResponse: {
                                            followGame: {
                                                __typename: "FollowGamePayload",
                                                game: {
                                                    __typename: "Game",
                                                    self: {
                                                        __typename: "GameSelfConnection",
                                                        follow: {
                                                            __typename: "GameFollow",
                                                            followedAt: (new Date).toISOString()
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }), a.label = 1;
                                case 1:
                                    return a.trys.push([1, 3, , 4]), [4, this.props.followGame(t)];
                                case 2:
                                    return a.sent(), this.setState({
                                        inProgress: !1
                                    }, function() {
                                        n.props.onFollow && n.props.onFollow(n.props.title)
                                    }), [3, 4];
                                case 3:
                                    return a.sent(), this.setState({
                                        inProgress: !1
                                    }), [3, 4];
                                case 4:
                                    return [2]
                            }
                        })
                    })
                }, t.prototype.unfollowGame = function(e) {
                    return i.__awaiter(this, void 0, void 0, function() {
                        var t, n = this;
                        return i.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    t = i.__assign({}, Object(o.a)({
                                        gameID: e
                                    }), {
                                        update: function(e, t) {
                                            var i = t.data.unfollowGame;
                                            l(e, u, {
                                                name: n.props.title
                                            }, function(e) {
                                                return e.game && i && i.game ? (e.game.self.follow = i.game.self.follow, e) : e
                                            })
                                        },
                                        optimisticResponse: {
                                            unfollowGame: {
                                                __typename: "UnfollowGamePayload",
                                                game: {
                                                    __typename: "Game",
                                                    self: {
                                                        __typename: "GameSelfConnection",
                                                        follow: null
                                                    }
                                                }
                                            }
                                        }
                                    }), a.label = 1;
                                case 1:
                                    return a.trys.push([1, 3, , 4]), [4, this.props.unfollowGame(t)];
                                case 2:
                                    return a.sent(), this.setState({
                                        inProgress: !1
                                    }, function() {
                                        n.props.onUnfollow && n.props.onUnfollow(n.props.title)
                                    }), [3, 4];
                                case 3:
                                    return a.sent(), this.setState({
                                        inProgress: !1
                                    }), [3, 4];
                                case 4:
                                    return [2]
                            }
                        })
                    })
                }, t.prototype.isFollowing = function() {
                    return !!(this.followGameDataLoadedWithoutError() && this.props.data.game && this.props.data.game.self && this.props.data.game.self.follow)
                }, t.prototype.followGameDataLoadedWithoutError = function() {
                    return !(!this.props || !this.props.data || this.props.data.loading || this.props.data.error || !this.props.data.game)
                }, t = i.__decorate([Object(r.a)(u, {
                    options: function(e) {
                        return {
                            variables: {
                                name: e.title
                            }
                        }
                    }
                }), Object(r.a)(c, {
                    name: "followGame"
                }), Object(r.a)(m, {
                    name: "unfollowGame"
                })], t)
            }(a.Component)
        },
        zrz1: function(e, t, n) {}
    }
]);