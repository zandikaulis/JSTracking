(window.webpackJsonp = window.webpackJsonp || []).push([
    [59], {
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
                return s
            }), n.d(t, "c", function() {
                return d
            }), n.d(t, "a", function() {
                return c
            });
            var i = n("mrSG"),
                a = n("/7QA"),
                o = n("2xye"),
                r = n("gAd6"),
                l = function() {
                    var e = a.o.getLastPageview();
                    return e && e.location || o.PageviewLocation.None
                },
                s = function(e) {
                    a.o.trackItemSectionClick({
                        carousel_content: o.PageviewContent.Video,
                        channel_id: e.broadcasterID || "0",
                        channel: e.channelLogin || "unknown",
                        content: o.PageviewContent.PreviewCardGameName,
                        item_index: e.contentIndex,
                        medium: e.pageviewMedium,
                        item_id: e.videoID,
                        item_type: o.TwitchDataType.Video,
                        item_viewcount: null,
                        location: l()
                    })
                },
                d = function(e) {
                    a.o.trackItemSectionClick({
                        carousel_content: o.PageviewContent.PreviewCardGameBalloonGame,
                        channel_id: e.broadcasterID || "0",
                        channel: e.channelLogin || "unknown",
                        content: o.PageviewContent.PreviewCardGameBalloonGame,
                        item_index: e.contentIndex,
                        medium: e.pageviewMedium,
                        item_id: e.videoID,
                        item_type: o.TwitchDataType.Video,
                        item_viewcount: null,
                        location: l()
                    })
                },
                c = function(e) {
                    return i.__awaiter(void 0, void 0, void 0, function() {
                        var t, n, s, d, c, m = this;
                        return i.__generator(this, function(u) {
                            switch (u.label) {
                                case 0:
                                    return u.trys.push([0, 2, , 3]), t = e.map(function(e) {
                                        return i.__awaiter(m, void 0, void 0, function() {
                                            var t;
                                            return i.__generator(this, function(n) {
                                                switch (n.label) {
                                                    case 0:
                                                        return [4, a.p.apollo.client.query({
                                                            query: r,
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
                                    return n = u.sent(), s = n.filter(function(e) {
                                        return !!e
                                    }), d = s.map(function() {
                                        return o.TwitchDataType.Game
                                    }), c = s.map(function() {
                                        return null
                                    }), a.o.trackItemSectionLoad({
                                        carousel_content: o.PageviewContent.PreviewCardGameBalloonGame,
                                        rendered_item_count: s.length,
                                        rendered_item_list: s,
                                        rendered_item_types: d,
                                        rendered_items_viewcounts: c,
                                        location: l()
                                    }), [3, 3];
                                case 2:
                                    return u.sent(), [3, 3];
                                case 3:
                                    return [2]
                            }
                        })
                    })
                }
        },
        "0JAG": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            });
            var i = 10;

            function a(e, t, n) {
                if (void 0 === n && (n = 1), !t || !e) return -1;
                var a = window.getComputedStyle(document.documentElement).fontSize || i.toString(),
                    o = parseFloat(a) / i;
                return Math.floor(e / (t * o)) * n
            }
        },
        "0Rl0": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            });
            var i = n("q1tI"),
                a = n("Ue10"),
                o = function() {
                    return i.createElement(a.G, null, i.createElement(a.o, {
                        ratio: a.p.Aspect16x9
                    }, i.createElement(a.jb, null)), i.createElement(a.H, null, i.createElement(a.Ya, {
                        display: a.X.Flex,
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(a.Ya, {
                        display: a.X.InlineBlock,
                        margin: {
                            top: 1,
                            right: 1
                        }
                    }, i.createElement(a.jb, {
                        width: 40,
                        height: 56
                    })), i.createElement(a.Ya, {
                        display: a.X.InlineBlock,
                        margin: {
                            top: 1
                        }
                    }, i.createElement(a.W, null, i.createElement(a.jb, {
                        width: 150
                    })), i.createElement(a.W, {
                        fontSize: a.Ca.Size7
                    }, i.createElement(a.jb, {
                        width: 100
                    }))))))
                }
        },
        "0T/G": function(e, t) {},
        "1Ijn": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "VideoPreviewCard__VideoMoments"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "videoId"
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
                                        value: "videoId"
                                    }
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
                                        value: "moments"
                                    },
                                    arguments: [{
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "momentRequestType"
                                        },
                                        value: {
                                            kind: "EnumValue",
                                            value: "VIDEO_CHAPTER_MARKERS"
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
                                                    kind: "FragmentSpread",
                                                    name: {
                                                        kind: "Name",
                                                        value: "videoMomentEdge"
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
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "videoMomentEdge"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "VideoMomentEdge"
                        }
                    },
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
                                    kind: "FragmentSpread",
                                    name: {
                                        kind: "Name",
                                        value: "videoChapter"
                                    },
                                    directives: []
                                }]
                            }
                        }]
                    }
                }, {
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "videoChapter"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "VideoMoment"
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
                                value: "durationMilliseconds"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "positionMilliseconds"
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
                                value: "description"
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
                            kind: "FragmentSpread",
                            name: {
                                kind: "Name",
                                value: "momentDetails"
                            },
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
                                        value: "lengthSeconds"
                                    },
                                    arguments: [],
                                    directives: []
                                }]
                            }
                        }]
                    }
                }, {
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "momentDetails"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "VideoMoment"
                        }
                    },
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "details"
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "FragmentSpread",
                                    name: {
                                        kind: "Name",
                                        value: "gameChangeDetails"
                                    },
                                    directives: []
                                }, {
                                    kind: "FragmentSpread",
                                    name: {
                                        kind: "Name",
                                        value: "hearthstoneDetails"
                                    },
                                    directives: []
                                }, {
                                    kind: "FragmentSpread",
                                    name: {
                                        kind: "Name",
                                        value: "overwatchDetails"
                                    },
                                    directives: []
                                }, {
                                    kind: "FragmentSpread",
                                    name: {
                                        kind: "Name",
                                        value: "pubgDetails"
                                    },
                                    directives: []
                                }]
                            }
                        }]
                    }
                }, {
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "gameChangeDetails"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "GameChangeMomentDetails"
                        }
                    },
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
                                            value: "53"
                                        }
                                    }],
                                    directives: []
                                }]
                            }
                        }]
                    }
                }, {
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "hearthstoneDetails"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "HearthstoneMomentDetails"
                        }
                    },
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "broadcasterHero"
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
                                        value: "class"
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
                                value: "opponentHero"
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
                                        value: "class"
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
                                value: "gameMode"
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
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
                                        value: "value"
                                    },
                                    arguments: [],
                                    directives: []
                                }]
                            }
                        }]
                    }
                }, {
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "overwatchDetails"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "OverwatchMomentDetails"
                        }
                    },
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "role"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "heroName"
                            },
                            arguments: [],
                            directives: []
                        }]
                    }
                }, {
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "pubgDetails"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "PUBGMomentDetails"
                        }
                    },
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "maxPlayerCount"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "minPlayerCount"
                            },
                            arguments: [],
                            directives: []
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 946
                }
            };
            n.loc.source = {
                body: "query VideoPreviewCard__VideoMoments($videoId: ID!) {\nvideo(id: $videoId) {\nid\nmoments(momentRequestType: VIDEO_CHAPTER_MARKERS) {\nedges {\n...videoMomentEdge\n}\n}\n}\n}\nfragment videoMomentEdge on VideoMomentEdge {\ncursor\nnode {\n...videoChapter\n}\n}\nfragment videoChapter on VideoMoment {\nid\ndurationMilliseconds\npositionMilliseconds\ntype\ndescription\nthumbnailURL\n...momentDetails\nvideo {\nid\nlengthSeconds\n}\n}\nfragment momentDetails on VideoMoment {\ndetails {\n...gameChangeDetails\n...hearthstoneDetails\n...overwatchDetails\n...pubgDetails\n}\n}\nfragment gameChangeDetails on GameChangeMomentDetails {\ngame {\nid\ndisplayName\nboxArtURL(width: 40 height: 53)\n}\n}\nfragment hearthstoneDetails on HearthstoneMomentDetails {\nbroadcasterHero {\nid\nclass\nname\n}\nopponentHero {\nid\nclass\nname\n}\ngameMode {\ntype\nvalue\n}\n}\nfragment overwatchDetails on OverwatchMomentDetails {\nrole\nheroName\n}\nfragment pubgDetails on PUBGMomentDetails {\nmaxPlayerCount\nminPlayerCount\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
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
                                                            directives: [],
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
                                                                    directives: [],
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
                    end: 893
                }
            };
            i.loc.source = {
                body: '#import "twilight/features/tags/models/tag-fragment.gql"\n#import "twilight/features/tags/models/broadcast-tag-fragment.gql"\nquery FollowedIndex_CurrentUser($limit: Int) {\ncurrentUser {\nid\nfollowedGames(first: $limit) {\nnodes {\nid\nname\nboxArtURL(width: 285 height: 380)\nviewersCount\ntags(tagType: CONTENT) {\n...tagFragment\n}\n}\n}\nfollowedLiveUsers(first: $limit) {\nnodes {\nid\nlogin\ndisplayName\nprofileImageURL(width: 50)\nstream {\nid\ngame {\nid\nname\nboxArtURL(width: 40 height: 56)\n}\nviewersCount\ntitle\ntype\npreviewImageURL(width: 320 height: 180)\ntags {\n...broadcastTagFragment\n}\n}\n}\n}\nfollowedHosts(first: $limit) {\nnodes {\nid\nlogin\ndisplayName\nhosting {\nid\nlogin\ndisplayName\nprofileImageURL(width: 50)\nstream {\nid\ngame {\nid\nname\nboxArtURL(width: 40 height: 56)\n}\nviewersCount\ntitle\ntype\npreviewImageURL(width: 320 height: 180)\ntags {\n...broadcastTagFragment\n}\n}\n}\n}\n}\nfollows {\ntotalCount\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var a = {};

            function o(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !a[t] && (a[t] = !0, !0)
                })
            }
            i.definitions = i.definitions.concat(o(n("iiOx").definitions)), i.definitions = i.definitions.concat(o(n("Iqxx").definitions)), e.exports = i
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
        "5xw2": function(e, t, n) {
            "use strict";
            n.d(t, "c", function() {
                return s
            }), n.d(t, "a", function() {
                return d
            }), n.d(t, "b", function() {
                return c
            });
            var i = n("mrSG"),
                a = n("/7QA"),
                o = n("HSqT"),
                r = n("+U0Y"),
                l = "languageDirectoryFilters";

            function s(e, t) {
                var n = this;
                return function(o) {
                    return i.__awaiter(n, void 0, void 0, function() {
                        var n, s;
                        return i.__generator(this, function(i) {
                            return n = new Set(c()), t ? n.add(e) : n.delete(e), s = Array.from(n), a.m.set(l, s), o(Object(r.b)(s)), [2]
                        })
                    })
                }
            }

            function d() {
                var e = this;
                return function(t) {
                    return i.__awaiter(e, void 0, void 0, function() {
                        return i.__generator(this, function(e) {
                            return a.m.set(l, []), t(Object(r.b)([])), [2]
                        })
                    })
                }
            }

            function c() {
                return a.m.get(l, []).filter(function(e) {
                    return o.a.has(e)
                })
            }
        },
        "5zf8": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            }), n.d(t, "b", function() {
                return s
            });
            var i, a, o = n("/7QA");

            function r(e, t) {
                switch (e) {
                    case i.Second:
                        return Object(o.d)("{secondCount, plural, one {# second} other {# seconds}}", {
                            secondCount: t
                        }, "formatDuration");
                    case i.Minute:
                        return Object(o.d)("{minuteCount, plural, one {# minute} other {# minutes}}", {
                            minuteCount: t
                        }, "formatDuration");
                    case i.Hour:
                        return Object(o.d)("{hourCount, plural, one {# hour} other {# hours}}", {
                            hourCount: t
                        }, "formatDuration");
                    case i.Day:
                        return Object(o.d)("{dayCount, plural, one {# day} other {# days}}", {
                            dayCount: t
                        }, "formatDuration");
                    case i.Week:
                        return Object(o.d)("{weekCount, plural, one {# week} other {# weeks}}", {
                            weekCount: t
                        }, "formatDuration");
                    case i.Month:
                        return Object(o.d)("{monthCount, plural, one {# month} other {# months}}", {
                            monthCount: t
                        }, "formatDuration");
                    default:
                        return ""
                }
            }

            function l(e, t) {
                switch (e) {
                    case i.Second:
                        return Object(o.d)("{secondCount}s", {
                            secondCount: t
                        }, "formatDuration");
                    case i.Minute:
                        return Object(o.d)("{minuteCount}m", {
                            minuteCount: t
                        }, "formatDuration");
                    case i.Hour:
                        return Object(o.d)("{hourCount}h", {
                            hourCount: t
                        }, "formatDuration");
                    case i.Day:
                        return Object(o.d)("{dayCount}d", {
                            dayCount: t
                        }, "formatDuration");
                    case i.Week:
                        return Object(o.d)("{weekCount}w", {
                            weekCount: t
                        }, "formatDuration");
                    case i.Month:
                        return Object(o.d)("{monthCount}mo", {
                            monthCount: t
                        }, "formatDuration");
                    default:
                        return ""
                }
            }

            function s(e, t) {
                var n;
                switch (void 0 === t && (t = a.Humanized), t === a.ClockAuto && (t = e >= 3600 ? a.ClockHMS : a.ClockMS), t) {
                    case a.ClockHM:
                    case a.ClockHMS:
                        n = i.Hour;
                        break;
                    case a.ClockMS:
                        n = i.Minute
                }
                var s = 2;
                t === a.ClockHMS && (s = 3);
                var c = function(e, t) {
                        void 0 === t && (t = i.Month);
                        var n = {};
                        return n.seconds = e, e < 60 || t === i.Second ? n : (n.minutes = Math.floor(e / 60), n.seconds = e % 60, n.minutes < 60 || t === i.Minute ? n : (n.hours = Math.floor(n.minutes / 60), n.minutes = n.minutes % 60, n.hours < 24 || t === i.Hour ? n : (n.days = Math.floor(n.hours / 24), n.hours = n.hours % 24, n.days < 7 || t === i.Day ? n : n.days <= 26 || t === i.Week ? (n.weeks = Math.floor(n.days / 7), n.days = n.days % 7, n) : (n.months = Math.round((n.days + 3) / 30), n))))
                    }(e, n),
                    m = Object.keys(c);
                if (m.forEach(function(e, n) {
                        t !== a.Humanized && t !== a.HumanizedShort || c[e] || delete c[e], n < m.length - s && delete c[e]
                    }), t === a.Humanized) return function(e) {
                    return e.months ? r(i.Month, e.months) : e.weeks && e.days ? r(i.Week, e.weeks) + " " + r(i.Day, e.days) : e.weeks ? r(i.Week, e.weeks) : e.days && e.hours ? r(i.Day, e.days) + " " + r(i.Hour, e.hours) : e.days ? r(i.Day, e.days) : e.hours && e.minutes ? r(i.Hour, e.hours) + " " + r(i.Minute, e.minutes) : e.hours ? r(i.Hour, e.hours) : e.minutes && e.seconds ? r(i.Minute, e.minutes) + " " + r(i.Second, e.seconds) : e.minutes ? r(i.Minute, e.minutes) : r(i.Second, e.seconds || 0)
                }(c);
                if (t === a.HumanizedShort) return function(e) {
                    return e.months ? l(i.Month, e.months) : e.weeks && e.days ? "" + l(i.Week, e.weeks) + l(i.Day, e.days) : e.weeks ? l(i.Week, e.weeks) : e.days && e.hours ? "" + l(i.Day, e.days) + l(i.Hour, e.hours) : e.days ? l(i.Day, e.days) : e.hours && e.minutes ? "" + l(i.Hour, e.hours) + l(i.Minute, e.minutes) : e.hours ? l(i.Hour, e.hours) : e.minutes && e.seconds ? "" + l(i.Minute, e.minutes) + l(i.Second, e.seconds) : e.minutes ? l(i.Minute, e.minutes) : l(i.Second, e.seconds || 0)
                }(c);
                var u = ":",
                    p = !1;
                switch (o.p.intl.getLanguageCode()) {
                    case "cy":
                    case "da":
                    case "fi":
                    case "id":
                    case "nb":
                    case "si":
                        u = ".";
                        break;
                    case "af":
                    case "fr":
                    case "lt":
                        p = !0
                }
                var g = c.seconds || 0,
                    v = c.minutes || 0,
                    h = c.hours || 0;
                switch (t) {
                    case a.ClockHM:
                    case a.ClockHMS:
                        var k = (p ? d(h, 2) : h) + u + d(v, 2);
                        return t === a.ClockHMS && (k += u + d(g, 2)), k;
                    case a.ClockMS:
                        return (p ? d(v, 2) : v) + u + d(g, 2)
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
        "7I5b": function(e, t, n) {},
        "80G/": function(e, t, n) {},
        "86FS": function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                a = n("q1tI"),
                o = n("H1ft"),
                r = n("yR8l"),
                l = function(e) {
                    return e.map(function(e, t, n) {
                        var a, o = e.node;
                        if ("GAME_CHANGE" !== o.type || 0 !== o.durationMilliseconds) return s(o);
                        var r = n[t + 1] && n[t + 1].node;
                        a = r ? r.positionMilliseconds - o.positionMilliseconds : o.video && o.video.lengthSeconds && 1e3 * o.video.lengthSeconds - o.positionMilliseconds || 0;
                        var l = i.__assign({}, o, {
                            durationMilliseconds: a
                        });
                        return s(l)
                    })
                },
                s = function(e) {
                    return {
                        duration: e.durationMilliseconds / 1e3,
                        label: e.description || "",
                        offset: e.positionMilliseconds / 1e3,
                        thumbnailUrl: d(e),
                        videoID: e.video && e.video.id || ""
                    }
                },
                d = function(e) {
                    return e.thumbnailURL ? e.thumbnailURL : e.details && c(e.details) && e.details.game && e.details.game.boxArtURL ? e.details.game.boxArtURL : "https://static-cdn.jtvnw.net/ttv-static/404_boxart-285x380.jpg"
                },
                c = function(e) {
                    return !!e.game
                },
                m = n("cr+I"),
                u = n("/7QA"),
                p = n("GFmA"),
                g = n("0INk"),
                v = n("yWUM"),
                h = n("vRsq"),
                k = n("2xye"),
                f = n("GnwI"),
                b = n("4HIT"),
                w = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onClickHandler = function() {
                            t.props.onClick && t.props.onClick(t.props.tracking.content_index)
                        }, t.gameChangesWithLinks = function() {
                            return t.props.videoGameChanges.map(function(e) {
                                var n = {
                                    t: Object(v.a)(e.offset)
                                };
                                return t.props.collectionID && (n.collection = t.props.collectionID), i.__assign({}, e, {
                                    linkTo: {
                                        pathname: "/videos/" + t.props.video.id,
                                        search: m.stringify(n),
                                        state: {
                                            content: k.PageviewContent.PreviewCardGameBalloonGame,
                                            medium: t.props.tracking.medium
                                        }
                                    }
                                })
                            })
                        }, t.trackVideoGameBalloonClick = function() {
                            t.props.video.owner && t.props.video.owner.id && t.props.video.owner.login && Object(g.b)({
                                videoID: t.props.video.id,
                                broadcasterID: t.props.video.owner.id,
                                channelLogin: t.props.video.owner.login,
                                contentIndex: t.props.tracking.content_index,
                                pageviewMedium: t.props.tracking.medium
                            })
                        }, t.trackVideoGameBalloonItemClick = function(e) {
                            t.props.video.owner && t.props.video.owner.id && t.props.video.owner.login && Object(g.c)({
                                videoID: t.props.video.id,
                                broadcasterID: t.props.video.owner.id,
                                channelLogin: t.props.video.owner.login,
                                contentIndex: e,
                                pageviewMedium: t.props.tracking.medium
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = {
                            context: this.props.context,
                            onClick: this.onClickHandler,
                            title: this.props.video.title,
                            linkTo: {
                                pathname: Object(h.i)(void 0, this.props.video.id),
                                state: this.getLinkState(),
                                search: this.generateSearchString()
                            },
                            thumbnailImageProps: {
                                src: this.props.video.previewThumbnailURL,
                                alt: this.props.video.title || ""
                            },
                            channelDisplayName: this.props.video.owner && this.props.video.owner.displayName || "",
                            channelLogin: this.props.video.owner && this.props.video.owner.login || "",
                            channelLinkTo: {
                                pathname: "/" + (this.props.video.owner ? this.props.video.owner.login : ""),
                                state: this.getLinkState()
                            },
                            channelImageProps: {
                                src: this.props.video.owner && this.props.video.owner.profileImageURL || "",
                                alt: this.props.video.owner && this.props.video.owner.displayName || ""
                            },
                            gameTitle: this.props.video.game && this.props.video.game.name || "",
                            gameTitleLinkTo: {
                                pathname: "/directory/game/" + encodeURI(this.props.video.game && this.props.video.game.name || ""),
                                state: this.getLinkState()
                            },
                            gameBoxArtImageProps: {
                                src: this.props.video.game && this.props.video.game.boxArtURL || u.a.defaultBoxArtURL,
                                alt: this.props.video.game ? this.props.video.game.displayName : ""
                            },
                            videoGameChanges: this.gameChangesWithLinks(),
                            multipleVideoGameMarkersType: this.props.multipleVideoGameMarkersType,
                            datePublished: this.props.video.publishedAt,
                            viewCount: this.props.video.viewCount || 0,
                            durationInSeconds: !this.props.hideDuration && this.props.video.lengthSeconds ? this.props.video.lengthSeconds : void 0,
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
                                linkPath: b.a.PopularTag
                            } : void 0
                        };
                        return a.createElement(p.a, i.__assign({}, e))
                    }, t.prototype.generateSearchString = function() {
                        var e = {};
                        this.props.collectionID && (e.collection = this.props.collectionID);
                        var t = m.stringify(e);
                        return t ? "?" + t : ""
                    }, t.prototype.getVideoPreviousWatchPercentage = function() {
                        return this.props.video && this.props.video.self && this.props.video.self.viewingHistory && null !== this.props.video.self.viewingHistory.position ? 0 === this.props.video.lengthSeconds || 0 === this.props.video.self.viewingHistory.position ? null : this.props.video.self.viewingHistory.position / (this.props.video.lengthSeconds || 1 / 0) * 100 : null
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
                y = Object(f.b)("VideoPreviewCard", {
                    autoReportInteractive: !0
                })(w),
                S = n("1Ijn");
            n.d(t, "a", function() {
                return N
            });
            var C = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.convertMomentEdgesToChanges = function() {
                            var e = l(t.props.data && t.props.data.video && t.props.data.video.moments && t.props.data.video.moments.edges || []);
                            return e.length > 1 ? e : []
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(y, i.__assign({
                            videoGameChanges: this.convertMomentEdgesToChanges()
                        }, this.props))
                    }, t
                }(a.Component),
                N = Object(r.a)(S, {
                    options: function(e) {
                        return {
                            variables: {
                                videoId: e.video.id
                            }
                        }
                    },
                    skip: function(e) {
                        return !(e.multipleVideoGameMarkersType && (e.multipleVideoGameMarkersType !== o.a.None || e.video.id))
                    }
                })(C)
        },
        AXwV: function(e, t, n) {},
        AZIu: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            }), n.d(t, "b", function() {
                return r
            });
            var i, a = n("/7QA"),
                o = n("2xye");

            function r(e) {
                var t = {
                    section: e.section,
                    tag_position: e.tagPosition,
                    item_page: "browse",
                    search_event: e.searchEvent,
                    tag_id: e.tagId,
                    dismiss: e.dismiss
                };
                a.o.track(o.SpadeEventType.BrowseFilter, t)
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
        EJax: function(e, t, n) {
            "use strict";
            var i, a = n("mrSG"),
                o = n("q1tI"),
                r = n("/7QA"),
                l = n("vSJR"),
                s = n("sLlB"),
                d = n("QzU5"),
                c = n("XKWF"),
                m = n("Ue10");
            ! function(e) {
                e.Button = "filter-dropdown-button", e.FilterItemAll = "filter-item-all", e.FilterItemPastPremiere = "filter-item-past-premiere", e.FilterItemArchive = "filter-item-archive", e.FilterItemHighlight = "filter-item-highlight", e.FilterItemUpload = "filter-item-upload", e.SortNewest = "sort-option-newest", e.SortPopular = "sort-option-popular", e.SortSelector = "sort-selector"
            }(i || (i = {}));
            var u = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.getBroadcastTypeLabel = function(e) {
                            var t, n = Object(r.d)("All Videos", "VideoFilter"),
                                i = Object(r.d)("Past Premieres", "VideoFilter"),
                                a = Object(r.d)("Past Broadcasts", "VideoFilter"),
                                o = Object(r.d)("Highlights", "VideoFilter"),
                                l = Object(r.d)("Uploads", "VideoFilter");
                            switch (e) {
                                case d.a.PastPremiere:
                                    t = i;
                                    break;
                                case d.a.Archive:
                                    t = a;
                                    break;
                                case d.a.Highlight:
                                    t = o;
                                    break;
                                case d.a.Upload:
                                    t = l;
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
                        return o.createElement(m.Ya, {
                            alignItems: m.f.End,
                            display: m.X.Flex,
                            flexDirection: m.Aa.Row,
                            fullWidth: !0,
                            justifyContent: m.Xa.Between
                        }, o.createElement(m.Ya, {
                            display: m.X.Flex,
                            flexDirection: m.Aa.Row
                        }, this.renderLanguageSelector(), o.createElement(l.a, {
                            buttonLabel: this.getBroadcastTypeLabel(this.props.broadcastType),
                            "data-test-selector": i.Button,
                            "data-a-target": "video-type-filter-dropdown",
                            hideDropdownOnInsideClick: !0
                        }, this.renderInteractables())), o.createElement("div", null, this.renderSortSelector()))
                    }, t.prototype.renderInteractables = function() {
                        return o.createElement(o.Fragment, null, o.createElement(m.Va, {
                            "data-a-target": "video-type-filter-all",
                            "data-filter-type": "all",
                            "data-test-selector": i.FilterItemAll,
                            onClick: this.typeChangeHandler,
                            selected: !1
                        }, o.createElement(m.Ya, {
                            display: m.X.Flex,
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, this.getBroadcastTypeLabel(), this.renderCheckmark())), o.createElement(m.Va, {
                            "data-a-target": "video-type-filter-past-premieres",
                            "data-filter-type": d.a.PastPremiere,
                            "data-test-selector": i.FilterItemPastPremiere,
                            onClick: this.typeChangeHandler,
                            selected: !1
                        }, o.createElement(m.Ya, {
                            display: m.X.Flex,
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, this.getBroadcastTypeLabel(d.a.PastPremiere), this.renderCheckmark(d.a.PastPremiere))), o.createElement(m.Va, {
                            "data-a-target": "video-type-filter-past-broadcasts",
                            "data-filter-type": d.a.Archive,
                            "data-test-selector": i.FilterItemArchive,
                            onClick: this.typeChangeHandler,
                            selected: !1
                        }, o.createElement(m.Ya, {
                            display: m.X.Flex,
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, this.getBroadcastTypeLabel(d.a.Archive), this.renderCheckmark(d.a.Archive))), o.createElement(m.Va, {
                            "data-a-target": "video-type-filter-highlights",
                            "data-filter-type": d.a.Highlight,
                            "data-test-selector": i.FilterItemHighlight,
                            onClick: this.typeChangeHandler,
                            selected: !1
                        }, o.createElement(m.Ya, {
                            display: m.X.Flex,
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, this.getBroadcastTypeLabel(d.a.Highlight), this.renderCheckmark(d.a.Highlight))), o.createElement(m.Va, {
                            "data-a-target": "video-type-filter-uploads",
                            "data-filter-type": d.a.Upload,
                            "data-test-selector": i.FilterItemUpload,
                            onClick: this.typeChangeHandler,
                            selected: !1
                        }, o.createElement(m.Ya, {
                            display: m.X.Flex,
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, this.getBroadcastTypeLabel(d.a.Upload), this.renderCheckmark(d.a.Upload))))
                    }, t.prototype.renderCheckmark = function(e) {
                        return this.props.broadcastType === e ? o.createElement(m.Ya, {
                            attachRight: !0,
                            position: m.kb.Absolute,
                            margin: {
                                right: 1
                            }
                        }, o.createElement(m.tb, {
                            asset: m.ub.Check,
                            height: 18,
                            width: 18
                        })) : null
                    }, t.prototype.renderLanguageSelector = function() {
                        return this.props.hideLanguageSelector ? null : o.createElement(m.Ya, {
                            margin: {
                                right: 0
                            }
                        }, o.createElement(s.a, null))
                    }, t.prototype.renderSortSelector = function() {
                        if (this.props.hideSortSelector) return null;
                        var e = this.props.selectedSort && Object(c.b)(this.props.selectedSort) || c.a.Newest,
                            t = o.createElement(m.Ab, {
                                "data-a-target": "video-sort-select",
                                "data-test-selector": i.SortSelector,
                                name: "sort",
                                onChange: this.sortChangeHandler,
                                size: m.Ta.Large,
                                value: e
                            }, o.createElement("option", {
                                "data-a-target": "video-sort-newest",
                                "data-test-selector": i.SortNewest,
                                value: c.a.Newest
                            }, Object(r.d)("Newest", "VideoFilter")), o.createElement("option", {
                                "data-a-target": "video-sort-popular",
                                "data-test-selector": i.SortPopular,
                                value: c.a.Popular
                            }, Object(r.d)("Popular", "VideoFilter")));
                        return o.createElement(m.Ya, {
                            padding: {
                                y: .5
                            }
                        }, t)
                    }, t
                }(o.Component),
                p = n("daWW");
            n.d(t, "a", function() {
                return u
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
                o = n("/7QA"),
                r = n("5zf8"),
                l = n("Ue10"),
                s = (n("Fj9y"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onBalloonItemClick = function() {
                            t.props.onBalloonItemClick && t.props.onBalloonItemClick(t.props.index)
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = {
                            src: this.props.gameChange.thumbnailUrl,
                            alt: this.props.gameChange.label
                        };
                        return a.createElement(l.Ya, {
                            className: "preview-card-game-balloon-row",
                            display: l.X.Flex,
                            flexWrap: l.Ba.NoWrap
                        }, a.createElement(l.Va, {
                            linkTo: this.props.gameChange.linkTo,
                            onClick: this.onBalloonItemClick
                        }, a.createElement(l.Ya, {
                            display: l.X.Flex,
                            flexDirection: l.Aa.Row,
                            padding: .5
                        }, a.createElement(l.Fb, {
                            className: "preview-card-game-balloon-row__image-wrapper",
                            flexGrow: 0,
                            flexShrink: 0,
                            borderRadius: l.x.Small,
                            overflow: l.db.Hidden,
                            position: l.kb.Relative
                        }, a.createElement(l.o, {
                            align: l.d.Center,
                            ratio: l.p.BoxArt
                        }, a.createElement(l.S, i.__assign({}, e))), a.createElement(l.Fb, {
                            className: "preview-card-game-balloon-row__image-play-overlay",
                            alignItems: l.f.Center,
                            background: l.r.Overlay,
                            color: l.O.Overlay,
                            display: l.X.Flex,
                            justifyContent: l.Xa.Center,
                            position: l.kb.Absolute,
                            attachTop: !0,
                            attachBottom: !0,
                            attachLeft: !0,
                            attachRight: !0
                        }, a.createElement(l.tb, {
                            asset: l.ub.Play,
                            type: l.vb.Inherit
                        }))), a.createElement(l.Ya, {
                            display: l.X.Flex,
                            flexDirection: l.Aa.Column,
                            flexGrow: 1,
                            flexShrink: 1,
                            padding: {
                                left: 1,
                                top: 1
                            }
                        }, a.createElement(l.Ya, {
                            className: "preview-card-game-balloon-row__info-label"
                        }, a.createElement(l.W, null, this.props.gameChange.label)), a.createElement(l.Ya, {
                            className: "preview-card-game-balloon-row__info-duration"
                        }, a.createElement(l.W, null, Object(r.b)(this.props.gameChange.duration)))))))
                    }, t
                }(a.Component)),
                d = n("0INk"),
                c = n("8/mp"),
                m = n("eJ65"),
                u = (n("vDRX"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onBalloonToggle = function(e) {
                            t.props.onBalloonClick && !e && t.props.onBalloonClick()
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        if (this.props.videoGameChanges.length > 0) {
                            var e = this.props.videoGameChanges.map(function(e) {
                                return e.label
                            });
                            Object(d.a)(e)
                        }
                    }, t.prototype.render = function() {
                        return a.createElement(l.Ya, {
                            className: "preview-card-game-balloon",
                            display: l.X.InlineBlock,
                            position: l.kb.Relative,
                            margin: {
                                top: .5
                            }
                        }, a.createElement(m.a, {
                            key: "game-balloon",
                            display: l.X.Inline,
                            onToggle: this.onBalloonToggle,
                            hideBalloonOnInsideClick: !0
                        }, a.createElement(l.z, {
                            type: l.F.Hollow,
                            icon: l.ub.ViewerList
                        }, a.createElement(l.Ya, {
                            display: l.X.Flex,
                            flexDirection: l.Aa.Row
                        }, a.createElement(l.W, null, Object(o.d)("Chapters", "PreviewCardGameBalloon")), a.createElement(l.Ya, {
                            margin: {
                                left: 1
                            }
                        }, a.createElement(l.hb, {
                            label: this.props.videoGameChanges.length.toString()
                        })))), a.createElement(l.u, {
                            direction: l.v.TopLeft,
                            size: l.w.Medium
                        }, a.createElement(l.Ya, {
                            overflow: l.db.Hidden,
                            display: l.X.Flex,
                            flexDirection: l.Aa.Column,
                            flexWrap: l.Ba.NoWrap
                        }, a.createElement(l.Ya, {
                            padding: .5,
                            flexShrink: 0,
                            flexGrow: 0
                        }, a.createElement(l.W, {
                            color: l.O.Alt2
                        }, Object(o.d)("Chapter Select", "PreviewCardGameBalloon"))), a.createElement(l.Ya, {
                            className: "preview-card-game-balloon__content",
                            display: l.X.Flex,
                            flexDirection: l.Aa.Column,
                            flexGrow: 1,
                            flexShrink: 1,
                            flexWrap: l.Ba.NoWrap
                        }, a.createElement(c.b, null, a.createElement(l.Ya, {
                            display: l.X.Flex,
                            flexDirection: l.Aa.Column,
                            flexWrap: l.Ba.NoWrap,
                            fullHeight: !0
                        }, this.renderAdditionalGameList(this.props.videoGameChanges))))))))
                    }, t.prototype.renderAdditionalGameList = function(e) {
                        var t = this;
                        return e.map(function(e, n) {
                            return a.createElement(s, {
                                index: n,
                                gameChange: e,
                                key: e.offset,
                                onBalloonItemClick: t.props.onBalloonItemClick
                            })
                        })
                    }, t
                }(a.Component)),
                p = n("kduP"),
                g = n("2xye"),
                v = function(e) {
                    return a.createElement(l.Ya, null, a.createElement(l.W, {
                        color: l.O.Alt,
                        ellipsis: !0
                    }, e.videoGameChanges.map(function(t, n, i) {
                        return a.createElement(l.Qa, {
                            key: n
                        }, a.createElement(l.U, {
                            to: {
                                pathname: Object(p.c)(t.label),
                                state: {
                                    content: g.PageviewContent.TextLink,
                                    medium: e.trackingContext && e.trackingContext.medium
                                }
                            },
                            type: l.V.Inherit
                        }, t.label, h(n, i.length - 1) ? null : ", "))
                    })))
                },
                h = function(e, t) {
                    return e === t
                },
                k = n("N0BP"),
                f = (n("XA5B"), function(e) {
                    var t = a.createElement(l.Fb, {
                        className: "preview-card-iconic-image__wrapper",
                        borderRadius: l.x.Small,
                        overflow: l.db.Hidden
                    }, a.createElement(l.o, {
                        ratio: e.aspect || l.p.BoxArt,
                        align: l.d.Center
                    }, a.createElement(l.S, i.__assign({}, e.imageProps))));
                    return e.linkTo && (t = a.createElement(l.U, i.__assign({}, Object(k.a)(e), {
                        to: e.linkTo,
                        onClick: e.onClick
                    }), t)), t
                });
            f.displayName = "PreviewCardIconicImage";
            var b, w = n("TSYQ"),
                y = (n("cRsL"), function(e) {
                    var t = w("preview-card-top-bar", {
                        "preview-card-top-bar--gray": !e.selected,
                        "preview-card-top-bar--green": e.selected
                    });
                    return a.createElement(l.Ya, {
                        display: l.X.Flex,
                        padding: {
                            x: 1,
                            y: .5
                        },
                        justifyContent: l.Xa.Between,
                        alignItems: l.f.Center,
                        className: t
                    }, a.createElement(l.Ya, {
                        display: l.X.InlineFlex
                    }, a.createElement(l.W, {
                        "data-test-selector": "top-bar-title-selector",
                        color: l.O.Overlay,
                        bold: !0,
                        transform: l.Vb.Uppercase
                    }, e.title)), e.subTitle && a.createElement(l.Ya, {
                        display: l.X.InlineFlex
                    }, a.createElement(l.W, {
                        "data-test-selector": "top-bar-sub-title-selector",
                        color: l.O.Overlay
                    }, e.subTitle)))
                }),
                S = (n("m493"), function(e) {
                    var t = .5,
                        n = null;
                    "number" == typeof e.progressBarPercent && e.progressBarPercent > 0 && (n = a.createElement(l.Ya, {
                        position: l.kb.Absolute,
                        attachBottom: !0,
                        fullWidth: !0
                    }, a.createElement(l.nb, {
                        borderRadius: l.x.None,
                        size: l.pb.Small,
                        value: e.progressBarPercent,
                        mask: !0
                    })), t = 1);
                    var o = 1,
                        r = null;
                    return e.topBar && (r = a.createElement(l.Ya, {
                        position: l.kb.Absolute,
                        attachTop: !0,
                        fullWidth: !0
                    }, a.createElement(y, i.__assign({}, e.topBar))), o = 3), a.createElement(l.Ya, {
                        position: l.kb.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        fullWidth: !0,
                        fullHeight: !0,
                        className: "preview-card-overlay"
                    }, r, n, a.createElement(l.Ya, {
                        position: l.kb.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        margin: e.topBar ? {
                            x: 1,
                            y: o
                        } : 1,
                        "data-test-selector": "top-left-selector"
                    }, e.topLeft), a.createElement(l.Ya, {
                        position: l.kb.Absolute,
                        attachTop: !0,
                        attachRight: !0,
                        margin: e.topBar ? {
                            x: 1,
                            y: o
                        } : 1,
                        "data-test-selector": "top-right-selector"
                    }, e.topRight), a.createElement(l.Ya, {
                        position: l.kb.Absolute,
                        attachBottom: !0,
                        attachLeft: !0,
                        margin: {
                            x: .5,
                            y: t
                        },
                        "data-test-selector": "bottom-left-selector"
                    }, e.bottomLeft), a.createElement(l.Ya, {
                        position: l.kb.Absolute,
                        attachBottom: !0,
                        attachRight: !0,
                        margin: {
                            x: .5,
                            y: t
                        },
                        "data-test-selector": "bottom-right-selector"
                    }, e.bottomRight))
                }),
                C = (n("kF1+"), function(e) {
                    var t = e.icon && a.createElement(l.Ya, {
                        display: l.X.Flex,
                        margin: {
                            right: .5
                        }
                    }, a.createElement(l.tb, {
                        asset: e.icon,
                        width: 10,
                        height: 10
                    }));
                    return e.withBackground ? a.createElement(l.Fb, {
                        alignItems: l.f.Center,
                        background: l.r.Overlay,
                        borderRadius: l.x.Small,
                        className: "preview-card-stat",
                        color: l.O.Overlay,
                        display: l.X.Flex,
                        fontSize: l.Ca.Size6,
                        justifyContent: l.Xa.Center
                    }, t, a.createElement(l.W, null, e.value)) : a.createElement(l.Fb, {
                        className: "preview-card-stat",
                        color: l.O.Overlay,
                        display: l.X.Flex,
                        padding: {
                            x: .5
                        }
                    }, t, a.createElement(l.W, null, e.value))
                }),
                N = n("GnwI"),
                F = (n("B3R5"), function(e) {
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
                        }), a.createElement(l.Fb, {
                            background: l.r.Alt2,
                            overflow: l.db.Hidden
                        }, a.createElement(l.o, {
                            ratio: this.props.aspectRatio
                        }, this.renderImage())))
                    }, t.prototype.renderImage = function() {
                        var e, t = !(!this.props.animatedImageProps || !this.state.isHovered || this.state.didAnimatedPreviewFailToLoad),
                            n = w("preview-card-thumbnail__image", ((e = {})["preview-card-thumbnail__image--animated"] = this.state.isHovered && this.state.didAnimatedPreviewLoad, e));
                        return t && void 0 !== this.props.animatedImageProps ? a.createElement("div", {
                            className: n
                        }, a.createElement(l.S, i.__assign({}, this.props.animatedImageProps, {
                            onLoad: this.onAnimatedImageLoad,
                            onError: this.onAnimatedImageLoadError,
                            "data-test-selector": "preview-card-thumbnail__image-selector"
                        }))) : a.createElement("div", {
                            className: n
                        }, a.createElement(l.S, i.__assign({}, this.props.staticImageProps, {
                            onLoad: this.onImageLoad,
                            onError: this.onImageError,
                            "data-test-selector": "preview-card-thumbnail__image-selector"
                        })))
                    }, t
                }(a.Component)),
                E = Object(N.b)("PreviewCardThumbnail")(F),
                L = (n("80G/"), function(e) {
                    var t = null;
                    return e.subtitles && e.subtitles.length > 0 && (t = e.subtitles.map(function(e, t) {
                        return a.createElement(l.Ya, {
                            key: t,
                            "data-test-selector": "preview-card-titles__subtitle"
                        }, a.createElement(l.W, {
                            color: l.O.Alt,
                            ellipsis: !0
                        }, "string" == typeof e ? e : a.createElement(l.U, {
                            "data-a-target": e.automationSelector,
                            to: e.linkTo,
                            onClick: e.onClick,
                            type: l.V.Inherit
                        }, e.text)))
                    })), a.createElement("div", null, a.createElement(l.U, i.__assign({}, Object(k.a)(e), {
                        to: e.linkTo,
                        onClick: e.onClick,
                        type: l.V.Inherit,
                        "data-test-selector": "preview-card-titles__primary-link"
                    }), a.createElement(l.W, {
                        type: l.Wb.H3,
                        fontSize: l.Ca.Size5,
                        lines: 1,
                        bold: !0,
                        ellipsis: !0
                    }, e.title)), a.createElement(l.Ya, {
                        className: "preview-card-titles__subtitle-wrapper"
                    }, t))
                }),
                _ = n("H1ft"),
                x = n("ZbA5"),
                I = n("QVaV"),
                T = n("hyVY"),
                A = n("MXoD"),
                O = n("0LAi");
            ! function(e) {
                e.LockSelector = "video-lock", e.UpsellSelector = "upsell"
            }(b || (b = {}));
            var D, P, G = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    if (!this.props.restriction || !this.props.restriction.productName || !this.props.restriction.title) return null;
                    var e = Object(o.d)("Get It Now", "VideoPreviewCardRestriction"),
                        t = this.props.restriction.canViewRestricted,
                        n = t ? Object(o.d)("unlocked", "VideoPreviewCardRestriction") : Object(o.d)("locked", "VideoPreviewCardRestriction"),
                        i = t ? l.ub.Unlock : l.ub.Lock;
                    return a.createElement(l.Ya, null, !t && a.createElement(l.Fb, {
                        background: l.r.Overlay,
                        className: "video-preview-card-restriction",
                        color: l.O.Overlay,
                        display: l.X.Flex,
                        position: l.kb.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        zIndex: l.jc.Default,
                        padding: {
                            x: 5
                        },
                        textAlign: l.Sb.Center,
                        fullWidth: !0,
                        fullHeight: !0,
                        alignItems: l.f.Center,
                        alignContent: l.e.Center,
                        flexDirection: l.Aa.Column,
                        flexWrap: l.Ba.Wrap,
                        justifyContent: l.Xa.Center,
                        "data-test-selector": b.LockSelector
                    }, a.createElement(l.Qa, {
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(l.W, {
                        color: l.O.Overlay,
                        fontSize: l.Ca.Size5,
                        "data-test-selector": b.UpsellSelector
                    }, Object(o.d)("View with {title}", {
                        title: this.props.restriction.title
                    }, "VideoPreviewCardRestriction"))), a.createElement(l.Ya, null, a.createElement(l.z, {
                        type: l.F.Hollow,
                        ariaLabel: e,
                        targetBlank: !0,
                        disabled: "" === this.props.restriction.upsellLinkTo,
                        linkTo: this.props.restriction.upsellLinkTo,
                        overlay: !0
                    }, e))), a.createElement(l.Fb, {
                        display: l.X.InlineFlex,
                        position: l.kb.Absolute,
                        attachTop: this.props.attachTop,
                        attachBottom: !this.props.attachTop,
                        attachRight: !0,
                        margin: .5,
                        zIndex: l.jc.Default,
                        fontSize: l.Ca.Size6,
                        background: l.r.Overlay,
                        borderRadius: l.x.Medium,
                        color: l.O.Overlay
                    }, a.createElement(l.Zb, {
                        direction: this.props.attachTop ? l.bc.Bottom : l.bc.Top,
                        align: l.ac.Right,
                        label: n
                    }, a.createElement(l.tb, {
                        asset: i,
                        height: 20,
                        width: 20
                    }))))
                }, t
            }(a.PureComponent);
            n("5NSO");

            function U(e) {
                return void 0 !== e.watchedProgressPercent
            }

            function V(e) {
                return void 0 !== e.clipCreatedByChannelLogin
            }! function(e) {
                e.Avatar = "preview-card-avatar", e.BoxArt = "preview-card-box-art"
            }(D || (D = {})),
            function(e) {
                e[e.SingleGameList = 1] = "SingleGameList", e[e.SingleChannelList = 2] = "SingleChannelList", e[e.MixedGameAndChannelList = 3] = "MixedGameAndChannelList"
            }(P || (P = {}));
            var j = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.getTrackingContext = function(e) {
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
                        }, Object(k.a)(this.props)), a.createElement(l.Fb, {
                            position: l.kb.Relative,
                            borderRadius: l.x.Medium,
                            overflow: l.db.Hidden
                        }, this.renderVODRestrictionOverlay(), a.createElement(l.U, {
                            to: Object(A.a)(this.getTrackingContext(g.PageviewContent.VideoThumbnail), this.props.linkTo),
                            onClick: this.props.onThumbnailClick || this.props.onClick,
                            "data-a-target": "preview-card-image-link"
                        }, this.props.thumbnailImageProps && a.createElement(E, {
                            staticImageProps: this.props.thumbnailImageProps,
                            animatedImageProps: U(this.props) && this.props.animatedImageProps || void 0,
                            trackImageLatency: this.props.trackImageLatency
                        }), this.renderOverlay())), a.createElement(l.Ya, {
                            display: l.X.Flex,
                            flexWrap: l.Ba.NoWrap,
                            margin: {
                                top: 1
                            }
                        }, a.createElement(l.Ya, {
                            flexGrow: 0,
                            flexShrink: 0
                        }, this.renderIconicImage()), a.createElement(l.Ya, {
                            className: "preview-card__titles-wrapper",
                            flexGrow: 1,
                            flexShrink: 1,
                            fullWidth: !0
                        }, this.renderTitles(), this.renderTags()), this.props.contextualCardActionProps && a.createElement(l.Ya, {
                            flexGrow: 0,
                            flexShrink: 0
                        }, a.createElement(this.props.contextualCardActionProps.component, i.__assign({}, this.props.contextualCardActionProps.props)))))
                    }, t.prototype.renderOverlay = function() {
                        return function(e) {
                            return void 0 !== e.streamType
                        }(this.props) ? a.createElement(S, {
                            topLeft: a.createElement(x.a, {
                                type: this.props.streamType,
                                hosting: !!this.props.hostedByChannelLogin
                            }),
                            topRight: void 0,
                            bottomLeft: a.createElement(C, {
                                value: Object(o.d)("{viewerCount, plural, one {# viewer} other {# viewers}}", {
                                    viewerCount: this.props.currentViewerCount
                                }, "VideoPreviewCard")
                            }),
                            bottomRight: void 0
                        }) : U(this.props) ? a.createElement(S, {
                            topLeft: void 0 !== this.props.durationInSeconds && a.createElement(C, {
                                value: Object(T.b)(this.props.durationInSeconds),
                                icon: l.ub.Play,
                                withBackground: !0
                            }),
                            topRight: this.props.listPosition && a.createElement(C, {
                                withBackground: !0,
                                value: this.getListPositionLabel()
                            }),
                            bottomLeft: a.createElement(C, {
                                value: this.getViewCountLabel()
                            }),
                            bottomRight: this.props.datePublished ? a.createElement(C, {
                                value: Object(o.c)(new Date(this.props.datePublished), "medium")
                            }) : null,
                            progressBarPercent: this.props.watchedProgressPercent,
                            topBar: this.props.topBar
                        }) : V(this.props) ? a.createElement(S, {
                            topLeft: a.createElement(C, {
                                value: Object(T.b)(this.props.durationInSeconds),
                                icon: l.ub.Clip,
                                withBackground: !0
                            }),
                            topRight: void 0,
                            bottomLeft: a.createElement(C, {
                                value: this.getViewCountLabel()
                            }),
                            bottomRight: this.props.datePublished ? a.createElement(C, {
                                value: Object(o.c)(new Date(this.props.datePublished), "medium")
                            }) : null
                        }) : void 0
                    }, t.prototype.getListPositionLabel = function() {
                        return U(this.props) && this.props.listPosition ? Object(o.d)("{totalVideos, plural, one {{position} / # video} other {{position} / # videos}}", {
                            position: this.props.listPosition.position,
                            totalVideos: this.props.listPosition.totalVideos
                        }, "VideoPreviewCard") : ""
                    }, t.prototype.getViewCountLabel = function() {
                        return U(this.props) || V(this.props) ? Object(o.d)("{viewerCount, plural, one {# view} other {# views}}", {
                            viewerCount: this.props.viewCount
                        }, "VideoPreviewCard") : ""
                    }, t.prototype.renderIconicImage = function() {
                        return this.props.context === P.SingleChannelList && this.props.gameBoxArtImageProps && this.props.gameBoxArtImageProps.src && this.props.gameTitleLinkTo ? a.createElement(l.Ya, {
                            margin: {
                                right: 1
                            }
                        }, a.createElement(f, {
                            imageProps: this.props.gameBoxArtImageProps,
                            linkTo: Object(A.a)(this.getTrackingContext(g.PageviewContent.GameBoxart), this.props.gameTitleLinkTo),
                            onClick: this.props.onGameTitleClick,
                            aspect: l.p.BoxArt,
                            "data-test-selector": D.BoxArt,
                            "data-a-target": "preview-card-boxart-link"
                        })) : (this.props.context === P.SingleGameList || this.props.context === P.MixedGameAndChannelList) && this.props.channelImageProps && this.props.channelImageProps.src ? a.createElement(l.Ya, {
                            margin: {
                                right: 1
                            }
                        }, a.createElement(f, {
                            imageProps: this.props.channelImageProps,
                            linkTo: Object(A.a)(this.getTrackingContext(g.PageviewContent.UserThumbnail), this.props.channelLinkTo),
                            onClick: this.props.onChannelImageClick || this.props.onChannelLoginClick,
                            aspect: l.p.Aspect1x1,
                            "data-test-selector": D.Avatar
                        })) : void 0
                    }, t.prototype.renderTitles = function() {
                        var e = null,
                            t = [];
                        return this.shouldShowGameBalloon(this.props) || t.push({
                            text: Object(I.a)(this.props.channelLogin, this.props.channelDisplayName, !0),
                            linkTo: Object(A.a)(this.getTrackingContext(g.PageviewContent.ChannelMetadata), this.props.channelLinkTo),
                            onClick: this.props.onChannelLoginClick,
                            automationSelector: "preview-card-channel-link"
                        }), V(this.props) && this.props.clipCreatedByChannelLoginLinkTo ? t.push({
                            text: Object(o.d)("Clipped by {userName}", {
                                userName: this.props.clipCreatedByChannelLogin || ""
                            }, "VideoPreviewCard"),
                            linkTo: this.props.clipCreatedByChannelLoginLinkTo,
                            onClick: this.props.onClipCreatedByChannelLoginClick,
                            automationSelector: "preview-card-clip-curator-link"
                        }) : U(this.props) && this.props.multipleVideoGameMarkersType && this.props.videoGameChanges && this.props.videoGameChanges.length > 0 ? e = this.renderPreviewCardGameInfo(this.props.multipleVideoGameMarkersType, this.props.videoGameChanges, this.props.onVideoGameBalloonClick, this.props.onVideoGameBalloonItemClick) : this.props.context !== P.SingleGameList && this.props.gameTitle && this.props.gameTitleLinkTo && t.push({
                            text: this.props.gameTitle,
                            linkTo: Object(A.a)(this.getTrackingContext(g.PageviewContent.GameMetadata), this.props.gameTitleLinkTo),
                            onClick: this.props.onGameTitleClick,
                            automationSelector: "preview-card-game-link"
                        }), a.createElement(a.Fragment, null, a.createElement(L, {
                            title: this.props.title,
                            onClick: this.props.onVideoTitleClick || this.props.onClick,
                            linkTo: Object(A.a)(this.getTrackingContext(g.PageviewContent.VideoTitle), this.props.linkTo),
                            subtitles: t,
                            "data-a-target": "preview-card-title-link"
                        }), e)
                    }, t.prototype.renderTags = function() {
                        return this.props.tagListProps && 0 !== this.props.tagListProps.tags.length ? a.createElement(l.Ya, {
                            margin: {
                                top: .5
                            }
                        }, a.createElement(O.a, i.__assign({}, this.props.tagListProps, {
                            tagNumberLimit: 3
                        }))) : null
                    }, t.prototype.renderVODRestrictionOverlay = function() {
                        return U(this.props) && this.props.restriction && this.props.restriction.productName && this.props.restriction.title ? a.createElement(G, {
                            restriction: this.props.restriction,
                            attachTop: !0
                        }) : null
                    }, t.prototype.shouldShowGameBalloon = function(e) {
                        return !!U(e) && (!!(e.videoGameChanges && e.videoGameChanges.length > 0) && e.multipleVideoGameMarkersType === _.a.Balloon)
                    }, t.prototype.renderPreviewCardGameInfo = function(e, t, n, i) {
                        switch (e) {
                            case _.a.Balloon:
                                return a.createElement(u, {
                                    videoGameChanges: t,
                                    onBalloonClick: n,
                                    onBalloonItemClick: i
                                });
                            case _.a.Inline:
                                return a.createElement(v, {
                                    videoGameChanges: t,
                                    trackingContext: this.props.trackingContext
                                });
                            case _.a.None:
                                return null;
                            default:
                                return e
                        }
                    }, t
                }(a.Component),
                R = Object(N.b)("PreviewCard", {
                    autoReportInteractive: !0
                })(j);
            n.d(t, !1, function() {
                return D
            }), n.d(t, "b", function() {
                return P
            }), n.d(t, !1, function() {
                return j
            }), n.d(t, "a", function() {
                return R
            })
        },
        H1ft: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            }), n.d(t, "b", function() {
                return r
            });
            var i, a = n("/7QA"),
                o = n("D7An");
            ! function(e) {
                e.None = "None", e.Inline = "Inline", e.Balloon = "moments_with_images"
            }(i || (i = {}));
            var r = function() {
                switch (a.p.experiments.getAssignment(o.b.Archer)) {
                    case "moments_with_images":
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
                return r
            }), n.d(t, "b", function() {
                return l
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

            function o(e) {
                return void 0 === e && (e = !1), [{
                    code: "asl",
                    label: "American Sign Language"
                }, {
                    code: "other",
                    label: e ? Object(i.d)("Other", "broadcaster-languages") : "Other"
                }]
            }
            var r = new Set(a.concat(o()).map(function(e) {
                return e.code
            }));

            function l() {
                var e = i.p.intl.getLanguageCode(),
                    t = function(t) {
                        return "en" === t.code ? 0 : e && e.startsWith(t.code) ? 1 : 2
                    };
                return a.slice().sort(function(e, n) {
                    var i = t(e),
                        a = t(n);
                    return i !== a ? i - a : i + ":" + e.label < a + ":" + n.label ? -1 : 1
                }).concat(o(!0))
            }
        },
        HrG3: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return l
            });
            var i = n("q1tI"),
                a = n("/7QA"),
                o = n("Ue10"),
                r = (n("RFKy"), "view-all-button-selector");

            function l(e) {
                var t = i.createElement(o.Ya, {
                    padding: 1,
                    fullHeight: !0,
                    flexDirection: o.Aa.Column,
                    justifyContent: o.Xa.Center,
                    display: o.X.Flex
                }, i.createElement(o.W, {
                    color: o.O.Link,
                    fontSize: o.Ca.Size4,
                    noWrap: !0
                }, Object(a.d)("View All", "Following--ViewAllButton")), i.createElement(o.W, {
                    color: o.O.Alt2,
                    fontSize: o.Ca.Size4,
                    noWrap: !0
                }, e.subHeader));
                return e.linkTo && (t = i.createElement(o.U, {
                    to: e.linkTo,
                    className: "following__view-all__link",
                    hoverUnderlineNone: !0
                }, t)), i.createElement("div", {
                    className: "following__view-all",
                    onClick: e.onClickViewAll,
                    "data-test-selector": r
                }, i.createElement(o.Ya, {
                    margin: {
                        bottom: 5
                    }
                }, i.createElement(o.o, {
                    ratio: e.aspectRatio
                }, i.createElement(o.Fb, {
                    background: o.r.Alt2,
                    fullHeight: !0
                }, t))))
            }
        },
        ILhQ: function(e, t, n) {
            var i = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "liveHostFragment"
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
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 326
                }
            };
            i.loc.source = {
                body: '#import "twilight/features/tags/models/tag-fragment.gql"\nfragment liveHostFragment on User {\nid\nlogin\ndisplayName\nhosting {\nid\nlogin\ndisplayName\nprofileImageURL(width: 50)\nstream {\nid\ngame {\nid\nname\nboxArtURL(width: 40 height: 56)\n}\nviewersCount\ntitle\ntype\npreviewImageURL(width: 320 height: 180)\ntags {\n...tagFragment\n}\n}\n}\n}',
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
        Igt5: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            }), n.d(t, "b", function() {
                return a
            }), n.d(t, "c", function() {
                return o
            }), n.d(t, "d", function() {
                return r
            }), n.d(t, "g", function() {
                return l
            }), n.d(t, "e", function() {
                return s
            }), n.d(t, "f", function() {
                return d
            }), n.d(t, "h", function() {
                return c
            });
            var i = "directory.LANGUAGE_TAGS_UPDATED",
                a = "directory.TAG_FILTER_ADDED",
                o = "directory.TAG_FILTER_CHANGED",
                r = "directory.TAG_FILTER_REMOVED";

            function l(e) {
                return {
                    type: i,
                    languageTagFilters: e
                }
            }

            function s(e, t) {
                return {
                    type: a,
                    addedTag: e,
                    categoryName: t
                }
            }

            function d(e, t) {
                return {
                    type: o,
                    categoryName: t,
                    tagFilters: e
                }
            }

            function c(e, t) {
                return {
                    type: r,
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
        L5dg: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            });
            var i = n("q1tI"),
                a = n("0Rl0"),
                o = function(e) {
                    for (var t = [], n = void 0 === e.placeholderCount ? 20 : e.placeholderCount, o = 0; o < n; o++) t.push(i.createElement(a.a, {
                        key: o
                    }));
                    return i.createElement(i.Fragment, null, t)
                }
        },
        MJbm: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                a = n("q1tI"),
                o = n("/7QA"),
                r = (n("efEE"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.logger = o.p.logger.withCategory("resize-detector"), t.onScroll = function() {
                            var e = t.container,
                                n = e.offsetWidth,
                                i = e.offsetHeight,
                                a = e.offsetLeft,
                                o = e.offsetTop;
                            t.logger.debug("Resize Detector -- onScroll"), n === t.width && i === t.height && o === t.top && a === t.left || (t.width = n, t.height = i, t.props.onResize(n, i, o, a)), t.reset()
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
                return r
            })
        },
        OhOW: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return l
            });
            var i = n("mrSG"),
                a = n("/7QA"),
                o = n("+U0Y"),
                r = n("5xw2");

            function l(e) {
                return e.userPreferences.languagePreferences
            }
            a.p.store.registerReducer("userPreferences", function(e, t) {
                switch (void 0 === e && (e = {
                    languagePreferences: Object(r.b)()
                }), t.type) {
                    case o.a:
                        return i.__assign({}, e, {
                            languagePreferences: t.languagePreferences
                        });
                    default:
                        return e
                }
            })
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
                                                            kind: "FragmentSpread",
                                                            name: {
                                                                kind: "Name",
                                                                value: "liveChannelFragment"
                                                            },
                                                            directives: []
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
                    end: 321
                }
            };
            i.loc.source = {
                body: '#import "twilight/features/following/components/live-channels/live-channel-fragment.gql"\nquery FollowingLive_CurrentUser($limit: Int $cursor: Cursor) {\ncurrentUser {\nid\nfollows {\ntotalCount\n}\nfollowedLiveUsers(first: $limit after: $cursor) {\nedges {\nnode {\n...liveChannelFragment\n}\ncursor\n}\npageInfo {\nhasNextPage\n}\n}\n}\n}',
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
            }(n("Z/HV").definitions)), e.exports = i
        },
        Uyt6: function(e, t, n) {
            "use strict";
            n.r(t);
            var i = n("/MKj"),
                a = n("fvjX"),
                o = n("1/iK"),
                r = n("y5D0"),
                l = n("kRBY"),
                s = n("mrSG"),
                d = n("q1tI"),
                c = n("4p7I"),
                m = n("yoKv"),
                u = n("/7QA"),
                p = n("ZDlU"),
                g = n("GnwI"),
                v = n("Bh3T"),
                h = n("yR8l"),
                k = n("V+GM"),
                f = n("DMoW"),
                b = n("NvVO"),
                w = n("2xye"),
                y = n("Ue10"),
                S = n("bp79"),
                C = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.userDataLoaded = function() {
                            return t.props.data && !t.props.data.loading
                        }, t
                    }
                    return s.__extends(t, e), t.prototype.componentDidUpdate = function() {
                        this.userDataLoaded() && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        if (!this.userDataLoaded()) return null;
                        var e = this.props.activeCategory,
                            t = [d.createElement(y.Gb, {
                                key: "following-overview-tab",
                                active: void 0 === e,
                                linkTo: "/directory/following",
                                "data-a-target": "following-overview-tab"
                            }, Object(u.d)("Overview", "FollowingHeaderTabs")), d.createElement(y.Gb, {
                                key: "following-channels-tab",
                                active: e === w.SpadeFollowingCategory.Live,
                                "data-a-target": "following-channels-tab",
                                linkTo: "/directory/following/live"
                            }, Object(u.d)("Channels", "FollowingHeaderTabs")), d.createElement(y.Gb, {
                                key: "following-hosts-tab",
                                active: e === w.SpadeFollowingCategory.Hosts,
                                "data-a-target": "following-hosts-tab",
                                linkTo: "/directory/following/hosts"
                            }, Object(u.d)("Hosts", "FollowingHeaderTabs")), d.createElement(y.Gb, {
                                key: "following-games-tab",
                                active: e === w.SpadeFollowingCategory.Games,
                                "data-a-target": "following-games-tab",
                                linkTo: "/directory/following/games"
                            }, Object(u.d)("Games", "FollowingHeaderTabs"))];
                        return d.createElement(y.Ya, {
                            className: "following__header-tabs",
                            margin: {
                                bottom: 2
                            }
                        }, d.createElement(y.Hb, null, t))
                    }, t = s.__decorate([Object(g.b)("FollowingHeaderTabs"), Object(h.a)(S)], t)
                }(d.Component),
                N = n("aCAx"),
                F = n("cZKs"),
                E = n("8/mp"),
                L = n("qyxT"),
                _ = n("yziQ"),
                x = n("xugo"),
                I = (n("nrVK"), function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.state = {
                            followCount: 0
                        }, n.getAndStoreShuffledGameCards = function() {
                            n.props.data && n.props.data.games && n.props.data.games.edges && (n.shuffledGameCards = Object(L.a)(n.props.data.games.edges.map(function(e, t) {
                                var i = e.node;
                                return i && i.id ? d.createElement(y.Ya, {
                                    key: i.id
                                }, d.createElement(_.a, {
                                    info: "",
                                    title: i.name,
                                    imageAlt: i.name,
                                    imageSrc: i.boxArtURL || "",
                                    onFollow: n.onFollow,
                                    onUnfollow: n.onUnfollow,
                                    "data-a-target": "follow-game-card-" + t
                                })) : null
                            })))
                        }, n.onClickContinue = function() {
                            n.props.onContinue && n.props.onContinue(), u.p.store.dispatch(Object(N.c)())
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
                    return s.__extends(t, e), t.prototype.render = function() {
                        return !this.props.data || this.props.data.loading ? null : (this.shuffledGameCards || this.getAndStoreShuffledGameCards(), d.createElement(y.Fb, {
                            className: "following-games-modal",
                            background: y.r.Base,
                            padding: 2,
                            "data-a-target": "follow-games-modal",
                            display: y.X.Flex,
                            flexDirection: y.Aa.Column,
                            flexWrap: y.Ba.NoWrap
                        }, d.createElement(y.Ya, {
                            flexGrow: 0,
                            flexShrink: 0,
                            padding: {
                                bottom: .5
                            },
                            margin: {
                                bottom: 1
                            },
                            textAlign: y.Sb.Center,
                            display: y.X.Flex,
                            flexDirection: y.Aa.Column,
                            alignContent: y.e.Center
                        }, d.createElement(y.Ya, {
                            margin: {
                                bottom: .5
                            }
                        }, d.createElement(y.W, {
                            fontSize: y.Ca.Size4,
                            color: y.O.Base,
                            bold: !0
                        }, Object(u.d)("Choose some games that you'd like to follow.", "FollowGamesModal"))), d.createElement(y.W, {
                            fontSize: y.Ca.Size5,
                            color: y.O.Alt
                        }, Object(u.d)("This will let you pin your favorites for easy access.", "FollowGamesModal"))), d.createElement(y.Ya, {
                            className: "following-games-modal__list",
                            margin: {
                                bottom: 1
                            },
                            flexGrow: 1
                        }, d.createElement(E.b, {
                            suppressScrollX: !0
                        }, d.createElement(y.Ya, {
                            padding: 1
                        }, d.createElement(y.cc, {
                            childWidth: y.dc.Small,
                            gutterSize: y.ec.Small,
                            placeholderItems: 99
                        }, this.shuffledGameCards)))), d.createElement(y.Ya, {
                            display: y.X.Flex,
                            justifyContent: y.Xa.Center,
                            padding: {
                                y: 1
                            },
                            flexGrow: 0,
                            flexShrink: 0
                        }, d.createElement(y.z, {
                            size: y.D.Large,
                            onClick: this.onClickContinue,
                            disabled: 0 === this.state.followCount
                        }, Object(u.d)("Continue", "FollowGamesModal"))), d.createElement(F.a, {
                            closeOnBackdropClick: !0
                        })))
                    }, t
                }(d.Component)),
                T = Object(h.a)(x, {
                    options: {
                        variables: {
                            limit: 40
                        }
                    }
                })(I),
                A = n("0JAG"),
                O = n("kduP"),
                D = n("PfQt"),
                P = n("oJov"),
                G = n("AZIu"),
                U = n("4HIT"),
                V = n("x/sq"),
                j = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return s.__extends(t, e), t.prototype.render = function() {
                        var e = d.createElement(y.Ya, {
                            margin: {
                                bottom: 2
                            }
                        }, d.createElement(y.W, {
                            type: y.Wb.H4,
                            color: y.O.Base,
                            bold: !0,
                            "data-a-target": "live-games-header"
                        }, Object(u.d)("Live games", "LiveGames")));
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
                            })) || 0 === n.length) return d.createElement(y.Fb, {
                            fullWidth: !0,
                            background: y.r.Alt2,
                            display: y.X.Flex,
                            flexDirection: y.Aa.Column,
                            alignItems: y.f.Center,
                            padding: {
                                y: 3
                            },
                            margin: {
                                y: 2
                            },
                            "data-target": "following__follow-games-cta"
                        }, d.createElement(y.Ya, {
                            margin: {
                                bottom: 1
                            }
                        }, d.createElement(y.W, {
                            fontSize: y.Ca.Size4,
                            color: y.O.Alt2
                        }, Object(u.d)("You can now follow your favorite games!", "LiveGames"))), d.createElement(y.Ya, {
                            margin: {
                                top: .5
                            }
                        }, d.createElement(y.z, {
                            size: y.D.Large,
                            onClick: this.props.showFollowGamesModal,
                            "data-a-target": "find-out-more-button"
                        }, Object(u.d)("Find Out More!", "LiveGames"))));
                        if (this.props.showSample && this.props.directoryWidth && this.props.directoryWidth > 0) {
                            var i = Object(A.a)(this.props.directoryWidth, 180, 1);
                            i < n.length && (n = n.slice(0, i - 1), t = d.createElement(y.Ya, {
                                margin: {
                                    bottom: 2
                                }
                            }, d.createElement(D.a, {
                                subHeader: "Live Games",
                                linkTo: "/directory/following/games",
                                aspectRatio: y.p.Aspect3x4
                            })))
                        }
                        var a = n.map(function(e, t) {
                            if (!e) return null;
                            var n = Object(V.a)({
                                tags: e.tags,
                                section: G.a.Categories
                            });
                            return d.createElement(y.Ya, {
                                key: e.id,
                                margin: {
                                    bottom: 2
                                }
                            }, d.createElement(P.a, {
                                linkTo: {
                                    pathname: Object(O.c)(e.name),
                                    state: {
                                        content: "twitch_following",
                                        medium: "live_game",
                                        content_index: t
                                    }
                                },
                                title: e.name,
                                alt: e.name + " cover image",
                                src: e.boxArtURL || u.a.defaultBoxArtURL,
                                info: e.viewersCount ? Object(u.d)("{viewerCount,number} viewers", {
                                    viewerCount: e.viewersCount
                                }, "LiveGames") : "",
                                "data-a-target": "live-game-card-" + t,
                                tagListProps: n && s.__assign({}, n, {
                                    linkPath: U.a.DirectoryTag
                                })
                            }))
                        });
                        return d.createElement("div", null, e, d.createElement(y.cc, {
                            gutterSize: y.ec.Small,
                            childWidth: y.dc.Small,
                            placeholderItems: 30
                        }, a, t))
                    }, t
                }(d.Component);
            var R = Object(i.connect)(null, function(e, t) {
                    return Object.assign(Object(a.bindActionCreators)({
                        showFollowGamesModal: function() {
                            return Object(N.d)(T, {
                                onFollowChange: t.onFollowChange
                            })
                        }
                    }, e), t)
                })(j),
                H = n("XHSL"),
                B = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return s.__extends(t, e), t.prototype.componentDidMount = function() {
                        u.p.setPageTitle(Object(u.d)("Games You Follow", "FollowingGamesPage")), this.onRender()
                    }, t.prototype.componentDidUpdate = function() {
                        this.onRender()
                    }, t.prototype.render = function() {
                        var e;
                        if (this.props.data.loading) e = d.createElement(y.Ya, {
                            display: y.X.Flex,
                            position: y.kb.Absolute,
                            fullHeight: !0,
                            fullWidth: !0
                        }, d.createElement(y.ab, {
                            fillContent: !0
                        }));
                        else if (this.props.data.error) e = d.createElement(p.a, {
                            message: Object(u.d)("Error loading data.", "FollowingGamesPage")
                        });
                        else {
                            var t = this.props.data.currentUser;
                            e = d.createElement(R, {
                                games: t && t.followedGames && t.followedGames.nodes ? t.followedGames.nodes : [],
                                onFollowChange: this.props.data.refetch
                            })
                        }
                        return d.createElement(y.Ya, {
                            padding: 3
                        }, d.createElement(C, {
                            activeCategory: w.SpadeFollowingCategory.Games
                        }), e)
                    }, t.prototype.onRender = function() {
                        this.props.data.loading || this.props.latencyTracking.reportInteractive()
                    }, t
                }(d.Component),
                M = Object(a.compose)(Object(h.a)(H, {
                    options: {
                        fetchPolicy: "cache-and-network",
                        variables: {
                            limit: 100,
                            type: f.A.LIVE
                        }
                    }
                }), Object(g.b)("FollowingGamesPage", {
                    destination: b.a.DirectoryFollowingGames
                }), Object(k.a)({
                    location: w.PageviewLocation.Directory,
                    skip: function(e) {
                        return e.data.loading || !!e.data.error
                    },
                    properties: function(e) {
                        var t = e.data.currentUser;
                        return {
                            content_type: w.PageviewDirectoryContentType.Games,
                            tab: w.PageviewFollowingTab.Games,
                            num_live_games: t && t.followedGames && t.followedGames.nodes && t.followedGames.nodes.filter(function(e) {
                                return e && e.viewersCount
                            }).length
                        }
                    }
                }))(B),
                W = n("oJmH"),
                Y = n("sqxy"),
                z = n("QVaV");
            n("7I5b");

            function q() {
                return d.createElement(y.Ya, {
                    className: "following__empty",
                    margin: {
                        x: "auto"
                    }
                }, d.createElement(y.Ya, {
                    textAlign: y.Sb.Center,
                    margin: {
                        bottom: 2
                    }
                }, d.createElement(y.W, {
                    color: y.O.Alt2,
                    fontSize: y.Ca.Size4,
                    type: y.Wb.H4
                }, Object(u.d)("Never miss the Channels you love.", "EmptyChannelList"))), d.createElement(y.Ya, {
                    display: y.X.Flex,
                    justifyContent: y.Xa.Between
                }, d.createElement(y.Ya, {
                    className: "following__empty-information",
                    position: y.kb.Relative
                }, d.createElement(y.Ya, {
                    margin: {
                        bottom: 1
                    }
                }, d.createElement("figure", {
                    className: "following__empty-image"
                }, d.createElement("img", {
                    src: "//s.jtvnw.net/jtv_user_pictures/hosted_images/guide_1.png"
                }))), d.createElement(y.W, {
                    fontSize: y.Ca.Size5
                }, Object(u.d)("Like the channel you're watching? Follow it.", "EmptyChannelList")), d.createElement(y.Fb, {
                    className: "following__empty-information-num",
                    position: y.kb.Absolute,
                    attachLeft: !0,
                    attachTop: !0,
                    background: y.r.Alt,
                    textAlign: y.Sb.Center
                }, Object(u.f)(1))), d.createElement(y.Ya, {
                    className: "following__empty-information",
                    position: y.kb.Relative
                }, d.createElement(y.Ya, {
                    margin: {
                        bottom: 1
                    }
                }, d.createElement("figure", {
                    className: "following__empty-image"
                }, d.createElement("img", {
                    src: "//s.jtvnw.net/jtv_user_pictures/hosted_images/guide_2.png"
                }))), d.createElement(y.W, {
                    fontSize: y.Ca.Size5
                }, Object(u.d)("We'll let you know when the channel goes live again.", "EmptyChannelList")), d.createElement(y.Fb, {
                    className: "following__empty-information-num",
                    position: y.kb.Absolute,
                    attachLeft: !0,
                    attachTop: !0,
                    background: y.r.Alt,
                    textAlign: y.Sb.Center
                }, Object(u.f)(2))), d.createElement(y.Ya, {
                    className: "following__empty-information",
                    position: y.kb.Relative
                }, d.createElement(y.Ya, {
                    margin: {
                        bottom: 1
                    }
                }, d.createElement("figure", {
                    className: "following__empty-image"
                }, d.createElement("img", {
                    src: "//s.jtvnw.net/jtv_user_pictures/hosted_images/guide_3.png"
                }))), d.createElement(y.W, {
                    fontSize: y.Ca.Size5
                }, Object(u.d)("Come back and watch your favorite channels.", "EmptyChannelList")), d.createElement(y.Fb, {
                    className: "following__empty-information-num",
                    position: y.kb.Absolute,
                    attachLeft: !0,
                    attachTop: !0,
                    background: y.r.Alt,
                    textAlign: y.Sb.Center
                }, Object(u.f)(3)))))
            }
            var X = n("HrG3");

            function Q(e) {
                var t = Object(u.d)("Live hosts", "LiveHosts"),
                    n = d.createElement(y.Ya, {
                        margin: {
                            bottom: 2
                        }
                    }, d.createElement(y.W, {
                        type: y.Wb.H4,
                        color: y.O.Base,
                        bold: !0,
                        "data-a-target": "live-hosts-header"
                    }, t));
                if (!e.hosts || 0 === e.hosts.length) return e.followsCount > 0 ? d.createElement("div", null, n, d.createElement(y.Ya, {
                    textAlign: y.Sb.Center,
                    padding: {
                        y: 5
                    }
                }, d.createElement(y.W, {
                    color: y.O.Alt2,
                    fontSize: y.Ca.Size4,
                    "data-a-target": "no-hosts-live-text",
                    italic: !0
                }, Object(u.d)("No Hosts Live", "LiveHosts")))) : d.createElement("div", null, n, !e.showSample && d.createElement(q, null));
                var i, a = [];
                if (e.hosts.forEach(function(e) {
                        e && e.hosting && e.hosting.stream && e.hosting.id && a.push(e)
                    }), e.maxCount) e.maxCount < a.length && (a = a.slice(0, e.maxCount - 1), i = d.createElement(X.a, {
                    subHeader: "Live Hosts",
                    onClickViewAll: e.onClickViewAll
                }));
                else if (e.showSample && e.directoryWidth && e.directoryWidth > 0) {
                    var o = Object(A.a)(e.directoryWidth, 240, 2);
                    o < a.length && (a = a.slice(0, o - 1), i = d.createElement(X.a, {
                        subHeader: t,
                        linkTo: {
                            pathname: "/directory/following/hosts",
                            state: {
                                medium: w.PageviewMedium.Following,
                                content: w.PageviewContent.Following
                            }
                        }
                    }))
                }
                var r = a.map(function(e, t) {
                    if (e.id && e.hosting && e.hosting.stream && e.hosting.id) {
                        var n = Object(z.a)(e.hosting.login, e.hosting.displayName, !0),
                            i = Object(z.a)(e.login, e.displayName, !0),
                            a = Object(u.d)("{hostDisplayName} hosting {hostedDisplayName}", {
                                hostDisplayName: i,
                                hostedDisplayName: n
                            }, "LiveHosts"),
                            o = e.hosting.stream && e.hosting.stream.game ? Object(O.c)(e.hosting.stream.game.name) : "",
                            r = Object(V.a)({
                                tags: e.hosting.stream.tags,
                                section: G.a.LiveChannels
                            });
                        return r && (r.linkPath = U.a.PopularTag), d.createElement(y.Ya, {
                            key: e.id,
                            margin: {
                                bottom: 2
                            }
                        }, d.createElement(Y.a, {
                            imageSrc: e.hosting.stream.previewImageURL || u.a.defaultStreamPreviewURL,
                            imageAlt: a,
                            viewerCount: e.hosting.stream && e.hosting.stream.viewersCount || 0,
                            title: a,
                            channelDisplayName: e.hosting.displayName || "",
                            channelLogin: e.hosting.login || "",
                            gameImageSrc: e.hosting.stream && e.hosting.stream.game && e.hosting.stream.game.boxArtURL || u.a.defaultBoxArtURL,
                            gameTitle: e.hosting.stream.game && e.hosting.stream.game.name || "",
                            gameLinkTo: {
                                pathname: o,
                                state: {
                                    medium: w.PageviewMedium.Following,
                                    content: w.PageviewContent.LiveHost,
                                    content_index: t
                                }
                            },
                            linkTo: {
                                pathname: "/" + e.login,
                                state: {
                                    medium: w.PageviewMedium.Following,
                                    content: w.PageviewContent.LiveHost,
                                    content_index: t
                                }
                            },
                            channelNameLinkTo: {
                                pathname: "/" + e.hosting.login + "/videos",
                                state: {
                                    medium: w.PageviewMedium.Following,
                                    content: w.PageviewContent.LiveHost,
                                    content_index: t
                                }
                            },
                            "data-a-target": "live-host-card-" + t,
                            streamType: e.hosting.stream.type || void 0,
                            hosting: !0,
                            hostedByChannelLogin: e.login || "",
                            channelImageSrc: e.hosting.profileImageURL || "",
                            tagListProps: r
                        }))
                    }
                });
                return d.createElement("div", null, n, d.createElement(y.cc, {
                    gutterSize: y.ec.Small,
                    childWidth: y.dc.Large,
                    placeholderItems: 20
                }, r, i))
            }
            var $ = n("rJ4n"),
                J = 50,
                Z = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            maxCount: J
                        }, t.onClickViewAll = function() {
                            return s.__awaiter(t, void 0, void 0, function() {
                                return s.__generator(this, function(e) {
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
                    return s.__extends(t, e), t.prototype.componentDidMount = function() {
                        u.p.setPageTitle(Object(u.d)("Hosts You Follow", "FollowingHostsPage")), this.onRender()
                    }, t.prototype.componentDidUpdate = function() {
                        this.onRender()
                    }, t.prototype.render = function() {
                        var e;
                        if (this.props.data.loading) e = d.createElement(y.Ya, {
                            display: y.X.Flex,
                            position: y.kb.Absolute,
                            fullHeight: !0,
                            fullWidth: !0
                        }, d.createElement(y.ab, {
                            fillContent: !0
                        }));
                        else if (this.props.data.error) e = d.createElement(p.a, {
                            message: Object(u.d)("Error loading data.", "FollowingHostsPage")
                        });
                        else {
                            var t = this.props.data.currentUser,
                                n = t && t.followedHosts && t.followedHosts.nodes ? t.followedHosts.nodes.filter(function(e) {
                                    return null !== e
                                }) : [],
                                i = t && t.follows && t.follows.totalCount || 0;
                            e = d.createElement(Q, {
                                hosts: n,
                                followsCount: i,
                                maxCount: this.state.maxCount,
                                onClickViewAll: this.onClickViewAll
                            })
                        }
                        return d.createElement(y.Ya, {
                            padding: 3
                        }, d.createElement(C, {
                            activeCategory: w.SpadeFollowingCategory.Hosts
                        }), e)
                    }, t.prototype.onRender = function() {
                        this.props.data.loading || this.props.latencyTracking.reportInteractive()
                    }, t
                }(d.Component),
                K = Object(W.compose)(Object(h.a)($, {
                    options: function() {
                        return {
                            fetchPolicy: "cache-and-network",
                            variables: {
                                limit: 51
                            }
                        }
                    }
                }), Object(g.b)("FollowingHostsPage", {
                    destination: b.a.DirectoryFollowingHosts
                }), Object(k.a)({
                    location: w.PageviewLocation.Directory,
                    skip: function(e) {
                        return e.data.loading || !!e.data.error
                    },
                    properties: function(e) {
                        return {
                            content_type: w.PageviewDirectoryContentType.Hosts,
                            tab: w.PageviewFollowingTab.Hosts,
                            num_host_channels: e.data.currentUser && e.data.currentUser.followedHosts && e.data.currentUser.followedHosts.nodes && e.data.currentUser.followedHosts.nodes.length || 0
                        }
                    }
                }))(Z),
                ee = n("MJbm"),
                te = n("RXle");

            function ne(e) {
                var t = Object(u.d)("Live channels", "LiveChannels"),
                    n = d.createElement(y.Ya, {
                        margin: {
                            bottom: 2
                        }
                    }, d.createElement(y.W, {
                        type: y.Wb.H4,
                        color: y.O.Base,
                        bold: !0,
                        "data-a-target": "live-channels-header"
                    }, t));
                if (null !== e.users && 0 === e.users.length) return e.followsCount > 0 ? d.createElement("div", null, n, d.createElement(y.Ya, {
                    textAlign: y.Sb.Center,
                    padding: {
                        y: 5
                    }
                }, d.createElement(y.W, {
                    color: y.O.Alt2,
                    fontSize: y.Ca.Size4,
                    "data-a-target": "no-channels-live-text",
                    italic: !0
                }, Object(u.d)("No Channels Live", "LiveChannels")))) : d.createElement("div", null, n, d.createElement(q, null));
                var i, a = e.users || [];
                if (e.maxDisplayCount && e.maxDisplayCount < a.length) a = a.slice(0, e.maxDisplayCount - 1), i = d.createElement(D.a, {
                    subHeader: "Live Channels",
                    onClickViewAll: e.onClickViewAll
                });
                else if (e.showSample && e.directoryWidth && e.directoryWidth > 0) {
                    var o = Object(A.a)(e.directoryWidth, 240, 2);
                    o < a.length && (a = a.slice(0, o - 1), i = d.createElement(D.a, {
                        subHeader: t,
                        linkTo: "/directory/following/live"
                    }))
                }
                var r = a.map(function(e, t) {
                    if (!e.stream || !e.id) return null;
                    var n = {
                            medium: w.PageviewMedium.Following,
                            content: w.PageviewContent.Live,
                            content_index: t
                        },
                        i = e.stream && e.stream.game ? Object(O.c)(e.stream.game.name) : "",
                        a = Object(V.a)({
                            tags: e.stream.tags,
                            section: G.a.LiveChannels
                        });
                    return a && (a.linkPath = U.a.PopularTag), d.createElement(y.Ya, {
                        key: e.id,
                        margin: {
                            bottom: 2
                        }
                    }, d.createElement(Y.a, {
                        imageSrc: e.stream && e.stream.previewImageURL || u.a.defaultStreamPreviewURL,
                        imageAlt: e.stream && e.stream.title || "",
                        viewerCount: e.stream && e.stream.viewersCount || 0,
                        title: e.stream && e.stream.title || Object(u.d)("Untitled Broadcast", "LiveChannels"),
                        channelDisplayName: e.displayName || "",
                        channelLogin: e.login || "",
                        gameImageSrc: e.stream && e.stream.game && e.stream.game.boxArtURL || u.a.defaultBoxArtURL,
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
                    for (var l = 0; l < 5; l++) r.push(d.createElement(te.VideoPreviewCardPlaceholder, {
                        key: "live-channels-placeholder-" + l
                    }));
                return d.createElement("div", null, n, d.createElement(y.cc, {
                    gutterSize: y.ec.Small,
                    childWidth: y.dc.Large,
                    placeholderItems: 20
                }, r, i))
            }
            var ie = n("GFmA"),
                ae = n("EJax"),
                oe = n("1ka0"),
                re = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return s.__extends(t, e), t.prototype.componentDidUpdate = function() {
                        this.props.data.loading || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        if (this.props.data.loading || this.props.data.error || !this.props.data.currentUser || !this.props.data.currentUser.recommendations || !this.props.data.currentUser.recommendations.videos || !this.props.data.currentUser.recommendations.videos.edges || 0 === this.props.data.currentUser.recommendations.videos.edges.length) return null;
                        var e = d.createElement(y.Ya, {
                                margin: {
                                    bottom: 2
                                }
                            }, d.createElement(y.W, {
                                type: y.Wb.H4,
                                color: y.O.Base,
                                bold: !0
                            }, Object(u.d)("Based on your viewing history", "SuggestedVideos"))),
                            t = [];
                        if (this.props.data.currentUser.recommendations.videos && this.props.data.currentUser.recommendations.videos.edges && (t = this.props.data.currentUser.recommendations.videos.edges.map(function(e) {
                                if (e && e.node) return e.node
                            })), this.props.directoryWidth > 0) {
                            var n = Object(A.a)(this.props.directoryWidth, 240, 2);
                            t = t.slice(0, n)
                        }
                        return d.createElement("div", null, e, d.createElement(ae.b, {
                            listContext: ie.b.MixedGameAndChannelList,
                            trackingMedium: w.PageviewMedium.Following,
                            trackingContent: w.PageviewContent.SuggestedVideos,
                            videoCardSize: y.dc.Large,
                            videos: t
                        }))
                    }, t = s.__decorate([Object(h.a)(oe, {
                        options: {
                            fetchPolicy: "network-only",
                            variables: {
                                limit: 30
                            }
                        }
                    }), Object(g.b)("SuggestedVideos")], t)
                }(d.Component),
                le = n("lZCe"),
                se = n("ZS2+"),
                de = n("D7An"),
                ce = se.a.wrap(function() {
                    return n.e(145).then(n.bind(null, "YBPT"))
                }, "LatestVideosFromFollowedCarousel"),
                me = function(e) {
                    var t = {
                        assignments: {
                            fallback: function() {
                                return null
                            },
                            enabled: function() {
                                return d.createElement(ce, s.__assign({}, e))
                            }
                        },
                        loader: function() {
                            return d.createElement(y.ab, null)
                        },
                        name: de.b.FollowingIndexLatestVideosV2
                    };
                    return d.createElement(le.a, s.__assign({}, t))
                },
                ue = n("45mq"),
                pe = function(e) {
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
                    return s.__extends(t, e), t.prototype.componentDidMount = function() {
                        u.p.setPageTitle(Object(u.d)("Following", "FollowingPage")), this.onRender()
                    }, t.prototype.componentDidUpdate = function() {
                        this.onRender()
                    }, t.prototype.render = function() {
                        var e = this.props.data && this.props.data.currentUser;
                        if (this.props.data.error || !this.props.data.loading && !e) return d.createElement(p.a, {
                            message: Object(u.d)("Error loading data.", "FollowingPage")
                        });
                        var t = e && e.follows && e.follows.totalCount || 0,
                            n = e && e.followedHosts && e.followedHosts.nodes && e.followedHosts.nodes.filter(function(e) {
                                return null !== e
                            }),
                            i = e && e.followedLiveUsers && e.followedLiveUsers.nodes && e.followedLiveUsers.nodes.filter(function(e) {
                                return null !== e
                            });
                        return d.createElement(y.Ya, {
                            padding: 3
                        }, d.createElement(C, null), d.createElement(ne, {
                            key: "live-channels",
                            showSample: !0,
                            directoryWidth: this.state.directoryWidth,
                            users: this.props.data.loading ? null : i,
                            followsCount: t
                        }), d.createElement(me, {
                            tracking: {
                                content: w.PageviewContent.Following,
                                location: w.PageviewLocation.Directory,
                                medium: w.PageviewMedium.Following
                            }
                        }), this.props.firstPageLoaded && e && e.followedHosts && e.followedHosts.nodes && e.followedHosts.nodes.length > 0 && d.createElement(Q, {
                            key: "live-hosts",
                            showSample: !0,
                            directoryWidth: this.state.directoryWidth,
                            hosts: n || [],
                            followsCount: t
                        }), this.props.firstPageLoaded && e && d.createElement(R, {
                            key: "live-games",
                            showSample: !0,
                            directoryWidth: this.state.directoryWidth,
                            games: e && e.followedGames && e.followedGames.nodes || [],
                            onFollowChange: this.props.data.refetch
                        }), this.props.firstPageLoaded && d.createElement(re, {
                            directoryWidth: this.state.directoryWidth
                        }), d.createElement(ee.a, {
                            onResize: this.onResize
                        }))
                    }, t.prototype.onRender = function() {
                        this.props.data.loading || this.props.latencyTracking.reportInteractive()
                    }, t = s.__decorate([Object(h.a)(ue, {
                        options: {
                            fetchPolicy: "cache-and-network",
                            variables: {
                                limit: 30
                            }
                        }
                    }), Object(g.b)("FollowingIndexPage", {
                        destination: b.a.DirectoryFollowingIndex
                    }), Object(k.a)({
                        location: w.PageviewLocation.Directory,
                        properties: function() {
                            return {
                                content_type: w.PageviewDirectoryContentType.Mixed,
                                tab: w.PageviewFollowingTab.Overview
                            }
                        }
                    })], t)
                }(d.Component);
            var ge = Object(i.connect)(function(e) {
                    return {
                        firstPageLoaded: e.session.firstPageLoaded
                    }
                })(pe),
                ve = n("Uc21");
            var he = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return s.__extends(t, e), t.prototype.componentDidMount = function() {
                        u.p.setPageTitle(Object(u.d)("Channels You Follow", "FollowingLivePage")), this.onRender()
                    }, t.prototype.componentDidUpdate = function() {
                        this.onRender()
                    }, t.prototype.render = function() {
                        var e, t = !1;
                        if (this.props.data.loading && !this.props.data.currentUser) e = d.createElement(y.Ya, {
                            display: y.X.Flex,
                            position: y.kb.Absolute,
                            fullHeight: !0,
                            fullWidth: !0
                        }, d.createElement(y.ab, {
                            fillContent: !0
                        }));
                        else if (this.props.data.error) e = d.createElement(p.a, {
                            message: Object(u.d)("Error loading data.", "FollowingLivePage")
                        });
                        else {
                            var n = this.props.data.currentUser,
                                i = [];
                            n && n.followedLiveUsers && n.followedLiveUsers.edges && (i = n.followedLiveUsers.edges.filter(function(e) {
                                return e && null !== e.node
                            }).map(function(e) {
                                return e && e.node
                            }));
                            var a = n && n.follows && n.follows.totalCount || 0;
                            e = d.createElement(ne, {
                                users: i,
                                followsCount: a
                            }), t = !this.props.data.loading && !this.props.data.error && !!(n && n.followedLiveUsers && n.followedLiveUsers.pageInfo.hasNextPage)
                        }
                        return d.createElement(y.Ya, {
                            padding: 3
                        }, d.createElement(C, {
                            activeCategory: w.SpadeFollowingCategory.Live
                        }), e, d.createElement(E.a, {
                            enabled: t,
                            loadMore: this.props.loadMore,
                            pixelThreshold: 100
                        }))
                    }, t.prototype.onRender = function() {
                        this.props.data.loading || this.props.latencyTracking.reportInteractive()
                    }, t = s.__decorate([Object(h.a)(ve, {
                        options: function() {
                            return {
                                fetchPolicy: "cache-and-network",
                                variables: {
                                    limit: 50
                                }
                            }
                        },
                        props: function(e) {
                            return s.__assign({}, e, {
                                loadMore: function() {
                                    if (e.data.currentUser) {
                                        var t = e.data.currentUser.followedLiveUsers && e.data.currentUser.followedLiveUsers.edges,
                                            n = t && t[t.length - 1],
                                            i = {
                                                limit: 30,
                                                cursor: n && n.cursor || ""
                                            };
                                        return e.data.fetchMore({
                                            query: ve,
                                            variables: i,
                                            updateQuery: function(e, t) {
                                                var n = t.fetchMoreResult;
                                                if (!(n.currentUser && n.currentUser.followedLiveUsers && e.currentUser && e.currentUser.followedLiveUsers)) return n;
                                                var i = e.currentUser.followedLiveUsers.edges.filter(function(e) {
                                                        return e && e.node
                                                    }),
                                                    a = n.currentUser.followedLiveUsers.edges.filter(function(e) {
                                                        return e && e.node
                                                    });
                                                return {
                                                    currentUser: s.__assign({}, n.currentUser, {
                                                        followedLiveUsers: s.__assign({}, n.currentUser.followedLiveUsers, {
                                                            edges: function(e, t) {
                                                                var n = new Set(e.map(function(e) {
                                                                    return e && e.node && e.node.id
                                                                }));
                                                                return e.concat(t.filter(function(e) {
                                                                    return !n.has(e && e.node && e.node.id)
                                                                }))
                                                            }(i, a)
                                                        })
                                                    })
                                                }
                                            }
                                        })
                                    }
                                }
                            })
                        }
                    }), Object(g.b)("FollowingLivePage", {
                        destination: b.a.DirectoryFollowingLiveChannels
                    }), Object(k.a)({
                        location: w.PageviewLocation.Directory,
                        skip: function(e) {
                            return e.data.loading || !!e.data.error
                        },
                        properties: function(e) {
                            return {
                                content_type: w.PageviewDirectoryContentType.Channels,
                                tab: w.PageviewFollowingTab.Channels,
                                num_live_channels: e.data.currentUser && e.data.currentUser.followedLiveUsers && e.data.currentUser.followedLiveUsers.edges.length || 0
                            }
                        }
                    })], t)
                }(d.Component),
                ke = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return s.__extends(t, e), t.prototype.render = function() {
                        return this.props.isLoggedIn ? d.createElement(y.Ya, null, d.createElement(v.b, {
                            addPaddingWhenPlayerIsPersisting: !0
                        }), d.createElement(m.a, null, d.createElement(c.a, {
                            path: "/directory/following/live",
                            component: he
                        }), d.createElement(c.a, {
                            path: "/directory/following/hosts",
                            component: K
                        }), d.createElement(c.a, {
                            path: "/directory/following/games",
                            component: M
                        }), d.createElement(c.a, {
                            path: "/",
                            component: ge
                        }))) : (this.props.login(), d.createElement(p.a, {
                            message: Object(u.d)("You must be logged in to view this page", "FollowingRoot")
                        }))
                    }, t
                }(d.Component),
                fe = Object(g.b)("FollowingPageRoot", {
                    autoReportInteractive: !0
                })(ke);
            var be = Object(i.connect)(function(e) {
                return {
                    isLoggedIn: Object(l.f)(e)
                }
            }, function(e) {
                return Object(a.bindActionCreators)({
                    login: function() {
                        return Object(r.e)(o.a.FollowingPage)
                    }
                }, e)
            })(fe);
            n.d(t, "FollowingRootPage", function() {
                return be
            })
        },
        X7a7: function(e, t, n) {
            "use strict";
            n.d(t, "c", function() {
                return l
            }), n.d(t, "b", function() {
                return s
            }), n.d(t, "a", function() {
                return d
            });
            var i = n("mrSG"),
                a = n("/7QA"),
                o = n("Igt5"),
                r = "languageTags";

            function l(e, t) {
                var n = this;
                return function(l) {
                    return i.__awaiter(n, void 0, void 0, function() {
                        var n, s;
                        return i.__generator(this, function(i) {
                            return n = new Set(d()), t ? n.add(e) : n.delete(e), s = Array.from(n), a.m.set(r, s), l(Object(o.g)(s)), [2]
                        })
                    })
                }
            }

            function s(e) {
                var t = this;
                return function(n) {
                    return i.__awaiter(t, void 0, void 0, function() {
                        return i.__generator(this, function(t) {
                            return a.m.set(r, e), n(Object(o.g)(e)), [2]
                        })
                    })
                }
            }

            function d() {
                return a.m.get(r, [])
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
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 302
                }
            };
            i.loc.source = {
                body: '#import "twilight/features/tags/models/tag-fragment.gql"\nquery FollowingGames_CurrentUser($limit: Int $type: FollowedGamesType) {\ncurrentUser {\nid\nfollowedGames(first: $limit type: $type) {\nnodes {\nid\nname\nboxArtURL(width: 285 height: 380)\nviewersCount\ntags(tagType: CONTENT) {\n...tagFragment\n}\n}\n}\n}\n}',
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
        "Z/HV": function(e, t, n) {
            var i = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "liveChannelFragment"
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
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 296
                }
            };
            i.loc.source = {
                body: '#import "twilight/features/tags/models/tag-fragment.gql"\nfragment liveChannelFragment on User {\nid\nlogin\ndisplayName\nprofileImageURL(width: 50)\nstream {\nid\ngame {\nid\nname\nboxArtURL(width: 40 height: 56)\n}\nviewersCount\ntitle\ntype\npreviewImageURL(width: 320 height: 180)\ntags {\n...tagFragment\n}\n}\n}',
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
        ZbA5: function(e, t, n) {
            "use strict";
            var i, a, o, r, l = n("mrSG"),
                s = n("TSYQ"),
                d = n("q1tI"),
                c = n("/7QA"),
                m = n("oB8h"),
                u = n("Ue10");
            n("kVMo");
            ! function(e) {
                e.HostingDot = "stream-type-indicator__hosting-dot"
            }(r || (r = {}));
            var p = ((i = {})[m.a.Live] = "stream-type-indicator--live", i[m.a.Premiere] = "stream-type-indicator--premiere", i[m.a.Rerun] = "stream-type-indicator--rerun", i[m.a.WatchParty] = "stream-type-indicator--rerun", i),
                g = ((a = {})[m.a.Premiere] = u.ub.VideoPremiere, a[m.a.Rerun] = u.ub.VideoRerun, a[m.a.WatchParty] = u.ub.VideoRerun, a),
                v = ((o = {})[m.a.Premiere] = u.vb.Live, o[m.a.Rerun] = u.vb.Inherit, o[m.a.WatchParty] = u.vb.Inherit, o),
                h = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return l.__extends(t, e), t.prototype.render = function() {
                        return d.createElement(u.Fb, {
                            className: this.getClassNames(),
                            color: u.O.Overlay,
                            background: u.r.Overlay,
                            padding: {
                                x: .5
                            },
                            borderRadius: u.x.Small,
                            display: u.X.Flex
                        }, d.createElement(u.Ya, {
                            display: u.X.Flex,
                            alignItems: u.f.Center,
                            margin: {
                                right: .5
                            }
                        }, this.getIcon()), d.createElement(u.W, {
                            type: u.Wb.Span
                        }, this.getLabel()))
                    }, t.prototype.getClassNames = function() {
                        var e = {
                            "stream-type-indicator": !0
                        };
                        return e[p[this.props.type]] = !0, s(e)
                    }, t.prototype.getIcon = function() {
                        return this.props.hosting ? d.createElement(u.Fb, {
                            borderRadius: u.x.Rounded,
                            className: "stream-type-indicator__hosting-dot",
                            "data-test-selector": r.HostingDot
                        }) : this.props.type === m.a.Live ? d.createElement(u.Ya, {
                            className: "stream-type-indicator__live-wrapper",
                            display: u.X.Flex,
                            alignItems: u.f.Center
                        }, d.createElement(u.K, {
                            status: u.M.Live,
                            size: u.L.Small
                        })) : d.createElement(u.tb, {
                            asset: g[this.props.type],
                            type: v[this.props.type],
                            width: 14,
                            height: 14
                        })
                    }, t.prototype.getLabel = function() {
                        if (this.props.hosting) return Object(c.d)("Hosting", "StreamTypeIndicator");
                        switch (this.props.type) {
                            case m.a.Live:
                                return Object(c.d)("LIVE", "StreamTypeIndicator");
                            case m.a.Premiere:
                                return Object(c.d)("Premiere", "StreamTypeIndicator");
                            case m.a.Rerun:
                            case m.a.WatchParty:
                                return Object(c.d)("Rerun", "StreamTypeIndicator");
                            default:
                                return ""
                        }
                    }, t
                }(d.Component);
            n.d(t, !1, function() {
                return r
            }), n.d(t, "a", function() {
                return h
            })
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
        daWW: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                a = n("q1tI"),
                o = n("GFmA"),
                r = n("PfQt"),
                l = n("GnwI"),
                s = n("RXle"),
                d = n("L5dg"),
                c = n("Ue10"),
                m = function(e) {
                    var t = null,
                        n = null;
                    if (null === e.videos) t = a.createElement(d.a, {
                        placeholderCount: e.placeholderCount
                    });
                    else {
                        e.viewAllButtonProps && (n = a.createElement(r.a, i.__assign({}, e.viewAllButtonProps)));
                        var l = e.videos.map(function(t, n) {
                            return a.createElement(c.Ya, {
                                "data-a-target": "video-tower-card-" + n,
                                key: "video-" + n,
                                margin: {
                                    bottom: 2
                                }
                            }, a.createElement(s.VideoPreviewCard, {
                                hideGameArt: e.hideGameArt,
                                context: e.listContext || o.b.MixedGameAndChannelList,
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
                        t = a.createElement(a.Fragment, null, l)
                    }
                    return a.createElement(c.cc, {
                        gutterSize: c.ec.Small,
                        childWidth: e.videoCardSize || c.dc.Large,
                        placeholderItems: 20
                    }, t, n)
                },
                u = Object(l.b)("VideoTower", {
                    autoReportInteractive: !0
                })(m);
            n.d(t, !1, function() {
                return m
            }), n.d(t, "a", function() {
                return u
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
        "kF1+": function(e, t, n) {},
        kVMo: function(e, t, n) {},
        m493: function(e, t, n) {},
        nrVK: function(e, t, n) {},
        oJov: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                a = n("q1tI"),
                o = n("/7QA"),
                r = n("Ue10"),
                l = (n("1mcJ"), function(e) {
                    return a.createElement(r.Ya, i.__assign({
                        className: "drops-badge",
                        position: r.kb.Absolute,
                        attachTop: !0,
                        attachRight: !0
                    }, Object(r.kc)(e)), a.createElement(r.Zb, {
                        direction: r.bc.Top,
                        align: r.ac.Right,
                        label: Object(o.d)("Offers in-game Drops", "DropsBadge")
                    }, a.createElement(r.Fb, {
                        className: "drops-badge__drops-icon",
                        position: r.kb.Relative,
                        padding: {
                            top: .5,
                            right: .5,
                            bottom: 3,
                            left: 3
                        },
                        overflow: r.db.Hidden,
                        color: r.O.Overlay,
                        zIndex: r.jc.Default
                    }, a.createElement(r.U, {
                        type: r.V.Inherit,
                        hoverColorInherit: !0,
                        to: "https://help.twitch.tv/customer/en/portal/articles/2754380-how-to-earn-drops"
                    }, a.createElement(r.tb, {
                        asset: r.ub.Drops
                    })))))
                }),
                s = n("0LAi"),
                d = new Set(["alt", "src", "srcSet", "sizes", "onError", "onLoad", "refHandler"]);

            function c(e) {
                for (var t = {}, n = 0, i = Object.keys(e); n < i.length; n++) {
                    var a = i[n];
                    d.has(a) && (t[a] = e[a])
                }
                return t
            }
            var m = function(e) {
                var t;
                return e.placeholder ? a.createElement(a.Fragment, null, a.createElement(r.Ya, {
                    margin: {
                        bottom: .5
                    }
                }, a.createElement(r.o, {
                    ratio: r.p.Aspect3x4
                }, a.createElement(r.jb, null))), a.createElement(r.W, null, a.createElement(r.jb, {
                    width: 150
                })), a.createElement(r.W, {
                    fontSize: r.Ca.Size7
                }, a.createElement(r.jb, {
                    width: 100
                }))) : (t = a.createElement(a.Fragment, null, a.createElement(r.Ya, {
                    className: "tw-box-art-card__image " + (e.unavailable && !e.disabled ? "tw-box-art-card__image--unavailable" : ""),
                    "data-test-selector": "tw-card-image",
                    "data-a-target": "tw-card-image"
                }, a.createElement(r.I, i.__assign({
                    aspect: r.p.BoxArt,
                    borderRadius: r.x.Medium
                }, c(e)))), a.createElement(r.H, null, a.createElement(r.Ya, {
                    display: r.X.Flex
                }, a.createElement(r.Ya, {
                    "data-test-selector": "tw-card-title",
                    "data-a-target": "tw-card-title",
                    flexGrow: 1,
                    flexShrink: 1,
                    margin: {
                        top: .5
                    },
                    ellipsis: !0
                }, a.createElement(r.W, {
                    className: "tw-box-art-card__title",
                    type: r.Wb.H3,
                    fontSize: r.Ca.Size5,
                    lineHeight: r.Za.Body,
                    ellipsis: !0
                }, e.title)), e.contextualCardActionProps && a.createElement(r.Ya, {
                    margin: {
                        top: .5
                    },
                    flexGrow: 0,
                    flexShrink: 0
                }, a.createElement(e.contextualCardActionProps.component, i.__assign({}, e.contextualCardActionProps.props)))), a.createElement(r.W, {
                    color: r.O.Alt2,
                    ellipsis: !0
                }, e.info))), (e.linkTo || e.onClick || e.disabled) && (t = a.createElement(r.T, {
                    className: "tw-box-art-card__link " + (e.disabled ? "tw-box-art-card__link--disabled" : ""),
                    "data-a-target": "tw-box-art-card-link",
                    disabled: e.disabled,
                    download: e.download,
                    linkTo: e.linkTo,
                    ariaLabel: e.title,
                    blurAfterClick: e.blurAfterClick,
                    onClick: e.onClick,
                    renderLink: e.renderLink,
                    targetBlank: e.targetBlank,
                    tabIndex: e.tabIndex
                }, t)), a.createElement("div", i.__assign({
                    className: "tw-box-art-card"
                }, Object(r.kc)(e)), a.createElement(r.G, {
                    key: e.title
                }, t), e.tagListProps && 0 !== e.tagListProps.tags.length && a.createElement(r.Ya, {
                    margin: {
                        top: .5
                    }
                }, a.createElement(s.a, i.__assign({}, e.tagListProps, {
                    tagNumberLimit: 3
                }))), !0 === e.showDropsBadge && a.createElement(l, null)))
            };
            n.d(t, !1, function() {
                return c
            }), n.d(t, "a", function() {
                return m
            })
        },
        odjZ: function(e, t, n) {
            "use strict";
            var i, a = n("mrSG"),
                o = n("q1tI"),
                r = n("fvjX"),
                l = n("yR8l"),
                s = n("GnwI"),
                d = n("Ue10"),
                c = (n("BIFG"), n("BEfv"));
            ! function(e) {
                e.Bounce = "animated-tag--bounce", e.NoBounce = "animated-tag--no-bounce"
            }(i || (i = {}));
            var m = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.reportInteractive()
                    }, t.prototype.componentDidUpdate = function() {
                        this.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = null;
                        if (this.props.getTagFromGQL) {
                            if (!this.props.data || this.props.data.loading || this.props.data.error || !this.props.data.contentTag) return null;
                            var t = this.props.data.contentTag;
                            e = o.createElement(d.Ia, {
                                label: t.localizedName,
                                onClick: this.props.onClickForGQLTag && this.props.onClickForGQLTag.bind(this, t),
                                selected: !0,
                                size: d.Ta.Large
                            })
                        } else this.props.formTagProps && (e = o.createElement(d.Ia, a.__assign({}, this.props.formTagProps)));
                        return o.createElement("div", {
                            className: i.NoBounce,
                            "data-tag-filter": this.props.tagID
                        }, e)
                    }, t.prototype.reportInteractive = function() {
                        this.props.getTagFromGQL && this.props.data && (!this.props.data.loading || this.props.data.error) ? this.props.latencyTracking.reportInteractive() : this.props.getTagFromGQL || this.props.latencyTracking.reportInteractive()
                    }, t
                }(o.Component),
                u = Object(r.compose)(Object(l.a)(c, {
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
                }), Object(s.b)("AnimatedTag"))(m);
            n.d(t, "b", function() {
                return i
            }), n.d(t, !1, function() {
                return m
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
                                                    kind: "FragmentSpread",
                                                    name: {
                                                        kind: "Name",
                                                        value: "liveHostFragment"
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
                    end: 237
                }
            };
            i.loc.source = {
                body: '#import "twilight/features/following/components/live-hosts/live-host-fragment.gql"\nquery FollowingHosts_CurrentUser($limit: Int) {\ncurrentUser {\nid\nfollows {\ntotalCount\n}\nfollowedHosts(first: $limit) {\nnodes {\n...liveHostFragment\n}\n}\n}\n}',
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
            }(n("ILhQ").definitions)), e.exports = i
        },
        sLlB: function(e, t, n) {
            "use strict";
            var i, a = n("/MKj"),
                o = n("fvjX"),
                r = n("5xw2"),
                l = n("OhOW"),
                s = n("mrSG"),
                d = n("q1tI"),
                c = n("wIs1"),
                m = n("/7QA"),
                u = n("vSJR"),
                p = n("8/mp"),
                g = n("HSqT"),
                v = n("2xye"),
                h = n("GnwI"),
                k = n("Ue10");
            n("S58p");
            ! function(e) {
                e.ClearAllButton = "language-select-menu__clear-all-button"
            }(i || (i = {}));
            var f = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleLanguageChange = function(e) {
                            var n = e.currentTarget,
                                i = n.parentElement && n.parentElement.getAttribute("data-language-code");
                            i && (t.props.updateLanguagePreferences(i, n.checked), t.trackLanguageChange(i, n.checked))
                        }, t.renderDropdownContent = function() {
                            return d.createElement(d.Fragment, null, d.createElement("div", {
                                className: "language-select-menu__balloon"
                            }, d.createElement(p.b, null, d.createElement(k.Ya, {
                                padding: .5
                            }, Object(g.b)().map(t.renderLanguageOption)))), d.createElement(k.Fb, {
                                background: k.r.Alt,
                                borderTop: !0,
                                className: "language-select-menu__footer"
                            }, d.createElement(k.z, {
                                type: k.F.Text,
                                onClick: t.props.clearLanguagePreferences,
                                "data-a-target": "language-clear-all",
                                "data-test-selector": i.ClearAllButton
                            }, Object(m.d)("Clear all", "LanguageSelectMenu"))))
                        }, t.renderLanguageOption = function(e) {
                            return d.createElement(k.Ya, {
                                padding: {
                                    x: 1,
                                    y: .5
                                },
                                key: e.code
                            }, d.createElement(k.N, {
                                label: e.label,
                                checked: t.props.languagePreferences.includes(e.code),
                                "data-language-code": e.code,
                                "data-a-target": "language-filter-" + e.code + "-checkbox",
                                onChange: t.handleLanguageChange
                            }))
                        }, t.renderButtonContent = function() {
                            var e = t.props.languagePreferences.length,
                                n = Object(m.d)("Language", "LanguageSelectMenu");
                            return d.createElement(k.Ya, {
                                display: k.X.Flex
                            }, n, d.createElement(k.Ya, {
                                margin: {
                                    left: .5
                                }
                            }, 0 !== e && d.createElement(k.hb, {
                                type: k.ib.Brand,
                                label: e.toString()
                            })))
                        }, t.trackLanguageChange = function(e, n) {
                            var i = "";
                            t.props.match && t.props.match.params && (i = decodeURIComponent(t.props.match.params.encodedCommunityName).toLowerCase()), m.p.tracking.track(v.SpadeEventType.LanguageFilterChange, {
                                item_name: "language",
                                item_value: e,
                                item_action: n ? "select" : "deselect",
                                game: i || null,
                                open_click: !0
                            })
                        }, t
                    }
                    return s.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return d.createElement(k.Ya, {
                            className: "language-select-menu"
                        }, d.createElement(u.a, {
                            "data-a-target": "language-filter-dropdown",
                            buttonLabel: this.renderButtonContent()
                        }, this.renderDropdownContent()))
                    }, t
                }(d.Component),
                b = Object(o.compose)(c.a, Object(h.b)("LanguageSelectMenu"))(f);
            var w = Object(a.connect)(function(e) {
                return {
                    languagePreferences: Object(l.a)(e)
                }
            }, function(e) {
                return Object(o.bindActionCreators)({
                    updateLanguagePreferences: r.c,
                    clearLanguagePreferences: r.a
                }, e)
            })(b);
            n.d(t, "a", function() {
                return w
            })
        },
        sqxy: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                a = n("q1tI"),
                o = n("GFmA"),
                r = n("oB8h"),
                l = n("Ue10"),
                s = (n("5cmV"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return a.createElement("div", i.__assign({
                            className: "live-channel-card"
                        }, Object(l.kc)(this.props)), a.createElement(o.a, {
                            context: o.b.MixedGameAndChannelList,
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
                            streamType: this.props.streamType || r.a.Live,
                            currentViewerCount: this.props.viewerCount,
                            hostedByChannelLogin: this.props.hostedByChannelLogin,
                            tagListProps: this.props.tagListProps
                        }))
                    }, t
                }(a.Component)),
                d = s;
            n.d(t, !1, function() {
                return s
            }), n.d(t, "a", function() {
                return d
            })
        },
        vDRX: function(e, t, n) {},
        vSJR: function(e, t, n) {
            "use strict";
            var i, a = n("mrSG"),
                o = n("q1tI"),
                r = n("u5aL"),
                l = n("N0BP"),
                s = n("Ue10");
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
                    return this.props.hideDropdownOnInsideClick && (e = o.createElement("div", {
                        "data-test-selector": i.DropdownInsideClickDetector,
                        onClick: this.handleInsideDropdownClick
                    }, e)), o.createElement(r.a, {
                        onClickOut: this.handleOnClickOut
                    }, o.createElement(s.Fb, a.__assign({
                        background: this.state.isOpen ? s.r.Base : void 0,
                        borderRadius: s.x.Large,
                        className: "inline-dropdown",
                        elevation: this.state.isOpen ? 3 : void 0,
                        padding: .5,
                        position: s.kb.Relative
                    }, Object(l.a)(this.props)), o.createElement("div", {
                        className: "inline-dropdown__button-wrapper"
                    }, o.createElement(s.z, {
                        blurAfterClick: !0,
                        dropdown: !0,
                        onClick: this.handleButtonClick,
                        size: s.D.Large,
                        type: s.F.Hollow
                    }, this.props.buttonLabel)), o.createElement(s.Fb, {
                        attachLeft: !0,
                        background: s.r.Base,
                        borderRadius: s.x.Large,
                        "data-test-selector": i.DropdownWrapper,
                        display: this.state.isOpen ? s.X.Block : s.X.Hide,
                        elevation: 3,
                        fullWidth: !0,
                        padding: {
                            y: 1
                        },
                        position: s.kb.Absolute,
                        zIndex: s.jc.Above
                    }, e)))
                }, t.prototype.toggleDropdown = function(e) {
                    void 0 === e && (e = !this.state.isOpen), this.setState({
                        isOpen: e
                    })
                }, t
            }(o.Component);
            n.d(t, "a", function() {
                return d
            })
        },
        "x/sq": function(e, t, n) {
            "use strict";
            var i = n("/7QA"),
                a = n("odjZ"),
                o = {},
                r = n("AZIu"),
                l = n("X7a7");
            n.d(t, "a", function() {
                return s
            });
            var s = function(e) {
                var t = e.tags,
                    n = e.section,
                    s = e.onClickTag,
                    d = e.tagFilters,
                    c = void 0 === d ? [] : d,
                    m = e.scrollToTop;
                if (t) {
                    return {
                        tags: t,
                        callback: function(e) {
                            m && m(), e.isLanguageTag && i.p.store.dispatch(Object(l.c)(e.id, !0));
                            var t = c.every(function(t) {
                                    return t.id !== e.id
                                }),
                                d = Object(l.a)().every(function(t) {
                                    return t !== e.id
                                });
                            if (t && d) {
                                s && s(e);
                                var u = {
                                    section: n,
                                    tagPosition: c.length,
                                    searchEvent: !1,
                                    tagId: e.id,
                                    dismiss: !1
                                };
                                Object(r.b)(u)
                            } else ! function(e) {
                                var t = document.querySelector('[data-tag-filter="' + e + '"]');
                                if (t) {
                                    var n = o[e];
                                    n && clearTimeout(n), t.classList.contains(a.b.NoBounce) && (t.classList.remove(a.b.NoBounce), t.classList.add(a.b.Bounce));
                                    var i = setTimeout(function() {
                                        t.classList.remove(a.b.Bounce), t.classList.add(a.b.NoBounce), delete o[e]
                                    }, 750);
                                    o[e] = i
                                }
                            }(e.id)
                        }
                    }
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
            n.d(t, "a", function() {
                return p
            });
            var i = n("mrSG"),
                a = n("q1tI"),
                o = n("oJmH"),
                r = n("yR8l"),
                l = n("geRD"),
                s = n("Ue10"),
                d = n("4ErZ"),
                c = n("bSYX"),
                m = (n("AXwV"), n("g3/t")),
                u = function(e) {
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
                    return i.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(s.Qa, {
                            position: s.kb.Relative,
                            margin: {
                                bottom: 1
                            }
                        }, a.createElement("div", i.__assign({
                            className: "follow-game-card",
                            "data-test-selector": "follow-game-card",
                            onMouseEnter: this.onMouseEnter,
                            onMouseLeave: this.onMouseLeave,
                            onClick: this.onClick
                        }, Object(s.kc)(this.props)), a.createElement(s.G, {
                            key: this.props.title
                        }, a.createElement(s.Ya, {
                            position: s.kb.Relative
                        }, this.renderOverlay(), a.createElement(s.I, {
                            aspect: s.p.Aspect3x4,
                            alt: this.props.imageAlt,
                            src: this.props.imageSrc
                        })), a.createElement(s.H, null, a.createElement(s.Ya, {
                            margin: {
                                top: .5,
                                bottom: 1
                            }
                        }, a.createElement(s.W, {
                            color: s.O.Base,
                            fontSize: s.Ca.Size5
                        }, this.props.title), a.createElement(s.W, {
                            color: s.O.Alt,
                            fontSize: s.Ca.Size6
                        }, this.props.info))))))
                    }, t.prototype.renderOverlay = function() {
                        var e, t = this.isFollowing();
                        return this.state.inProgress ? e = a.createElement(s.ab, {
                            delay: 0
                        }) : this.state.hovered ? e = a.createElement(s.tb, {
                            width: 50,
                            height: 50,
                            asset: t ? s.ub.Unheart : s.ub.Heart
                        }) : t && (e = a.createElement(s.tb, {
                            width: 50,
                            height: 50,
                            asset: s.ub.Heart
                        })), e ? a.createElement(s.Fb, {
                            className: "follow-game-card__overlay " + (t ? "follow-game-card__overlay--followed" : ""),
                            background: s.r.Overlay,
                            color: s.O.Overlay,
                            "data-a-target": t ? "follow-game-card--followed" : "",
                            display: s.X.Flex,
                            alignItems: s.f.Center,
                            justifyContent: s.Xa.Center,
                            position: s.kb.Absolute,
                            zIndex: s.jc.Above,
                            attachBottom: !0,
                            attachTop: !0,
                            attachLeft: !0,
                            attachRight: !0
                        }, e) : null
                    }, t.prototype.followGame = function(e) {
                        return i.__awaiter(this, void 0, void 0, function() {
                            var t, n, a, o = this;
                            return i.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        t = {
                                            gameID: e
                                        }, n = {
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
                                        }, i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, , 4]), [4, this.props.followGame(Object(l.b)(t, n))];
                                    case 2:
                                        return a = i.sent(), Object(l.e)(c, {
                                            name: this.props.title
                                        }, function(e) {
                                            return e.game && e.game.self && a.data.followGame && a.data.followGame.game && a.data.followGame.game.self && (e.game.self.follow = a.data.followGame.game.self.follow), e
                                        }), this.setState({
                                            inProgress: !1
                                        }, function() {
                                            o.props.onFollow && o.props.onFollow(o.props.title)
                                        }), [3, 4];
                                    case 3:
                                        return i.sent(), this.setState({
                                            inProgress: !1
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t.prototype.unfollowGame = function(e) {
                        return i.__awaiter(this, void 0, void 0, function() {
                            var t, n, a, o = this;
                            return i.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        t = {
                                            gameID: e
                                        }, n = {
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
                                        }, i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, , 4]), [4, this.props.unfollowGame(Object(l.b)(t, n))];
                                    case 2:
                                        return a = i.sent(), Object(l.e)(c, {
                                            name: this.props.title
                                        }, function(e) {
                                            return e.game && e.game.self && a.data.unfollowGame && a.data.unfollowGame.game && a.data.unfollowGame.game.self && (e.game.self.follow = a.data.unfollowGame.game.self.follow), e
                                        }), this.setState({
                                            inProgress: !1
                                        }, function() {
                                            o.props.onUnfollow && o.props.onUnfollow(o.props.title)
                                        }), [3, 4];
                                    case 3:
                                        return i.sent(), this.setState({
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
                    }, t
                }(a.Component),
                p = Object(o.compose)(Object(r.a)(c, {
                    options: function(e) {
                        return {
                            variables: {
                                name: e.title
                            }
                        }
                    }
                }), Object(r.a)(d, {
                    name: "followGame"
                }), Object(r.a)(m, {
                    name: "unfollowGame"
                }))(u)
        }
    }
]);