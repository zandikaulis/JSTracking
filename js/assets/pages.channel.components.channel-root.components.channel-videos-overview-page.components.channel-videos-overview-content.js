(window.webpackJsonp = window.webpackJsonp || []).push([
    [125], {
        "+Vfn": function(e, t, n) {
            var i = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "CollectionConnectionFields"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "CollectionConnection"
                        }
                    },
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
                        }, {
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
                }],
                loc: {
                    start: 0,
                    end: 199
                }
            };
            i.loc.source = {
                body: '#import "twilight/features/video-preview-card/models/preview-card-video-fragment.gql"\nfragment CollectionConnectionFields on CollectionConnection {\ntotalCount\nedges {\nnode {\n...PreviewCardVideo\n}\n}\n}',
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
        "+Zgt": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "PreviewCardClip"
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
                                value: "viewCount"
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
                                            value: "52"
                                        }
                                    }, {
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "height"
                                        },
                                        value: {
                                            kind: "IntValue",
                                            value: "72"
                                        }
                                    }],
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
                                value: "durationSeconds"
                            },
                            arguments: [],
                            directives: []
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 245
                }
            };
            n.loc.source = {
                body: "fragment PreviewCardClip on Clip {\nid\nslug\ntitle\nviewCount\ncurator {\nid\nlogin\ndisplayName\n}\ngame {\nid\nname\nboxArtURL(width: 52 height: 72)\n}\nbroadcaster {\nid\nlogin\ndisplayName\nprofileImageURL(width: 50)\n}\nthumbnailURL\ncreatedAt\ndurationSeconds\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
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
                r = n("2xye"),
                o = n("gAd6"),
                l = function() {
                    var e = a.o.getLastPageview();
                    return e && e.location || r.PageviewLocation.None
                },
                s = function(e) {
                    a.o.trackItemSectionClick({
                        carousel_content: r.PageviewContent.Video,
                        channel_id: e.broadcasterID || "0",
                        channel: e.channelLogin || "unknown",
                        content: r.PageviewContent.PreviewCardGameName,
                        item_index: e.contentIndex,
                        medium: e.pageviewMedium,
                        item_id: e.videoID,
                        item_type: r.TwitchDataType.Video,
                        item_viewcount: null,
                        location: l()
                    })
                },
                d = function(e) {
                    a.o.trackItemSectionClick({
                        carousel_content: r.PageviewContent.PreviewCardGameBalloonGame,
                        channel_id: e.broadcasterID || "0",
                        channel: e.channelLogin || "unknown",
                        content: r.PageviewContent.PreviewCardGameBalloonGame,
                        item_index: e.contentIndex,
                        medium: e.pageviewMedium,
                        item_id: e.videoID,
                        item_type: r.TwitchDataType.Video,
                        item_viewcount: null,
                        location: l()
                    })
                },
                c = function(e) {
                    return i.__awaiter(void 0, void 0, void 0, function() {
                        var t, n, s, d, c, p = this;
                        return i.__generator(this, function(u) {
                            switch (u.label) {
                                case 0:
                                    return u.trys.push([0, 2, , 3]), t = e.map(function(e) {
                                        return i.__awaiter(p, void 0, void 0, function() {
                                            var t;
                                            return i.__generator(this, function(n) {
                                                switch (n.label) {
                                                    case 0:
                                                        return [4, a.p.apollo.client.query({
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
                                    return n = u.sent(), s = n.filter(function(e) {
                                        return !!e
                                    }), d = s.map(function() {
                                        return r.TwitchDataType.Game
                                    }), c = s.map(function() {
                                        return null
                                    }), a.o.trackItemSectionLoad({
                                        carousel_content: r.PageviewContent.PreviewCardGameBalloonGame,
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
        "0Nms": function(e, t, n) {
            var i = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "CurrentCollectionCarousel"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "collectionID"
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
                                value: "collection"
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
                                        value: "collectionID"
                                    }
                                }
                            }],
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
                                            kind: "IntValue",
                                            value: "100"
                                        }
                                    }],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "CollectionConnectionFields"
                                            },
                                            directives: []
                                        }]
                                    }
                                }, {
                                    kind: "FragmentSpread",
                                    name: {
                                        kind: "Name",
                                        value: "CollectionFields"
                                    },
                                    directives: []
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 396
                }
            };
            i.loc.source = {
                body: '#import "twilight/features/video-carousel/components/collection-carousel/models/collection-fields-fragment.gql"\n#import "twilight/features/video-carousel/components/collection-carousel/models/collection-connection-fields-fragment.gql"\nquery CurrentCollectionCarousel($collectionID: ID!) {\ncollection(id: $collectionID) {\nitems (first:100) {\n...CollectionConnectionFields\n}\n...CollectionFields\n}\n}',
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
            i.definitions = i.definitions.concat(r(n("msok").definitions)), i.definitions = i.definitions.concat(r(n("+Vfn").definitions)), e.exports = i
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
        "5NSO": function(e, t, n) {},
        "6h5w": function(e, t, n) {
            "use strict";
            var i, a = n("q1tI"),
                r = n("9C/b"),
                o = n("/7QA"),
                l = n("vRsq"),
                s = n("tuvy"),
                d = n("Ue10"),
                c = Object(r.a)(function(e) {
                    var t, n = e.options;
                    return t = Object(s.a)() ? Object(l.j)(e.channelLogin, e, n) : Object(l.q)(e.channelLogin, n && {
                        filter: n.filter ? Object(l.z)(n.filter) : void 0,
                        sort: n.sort
                    }), a.createElement(d.U, {
                        to: t,
                        hoverUnderlineNone: !0
                    }, a.createElement(d.Ya, {
                        display: d.X.InlineFlex,
                        flexDirection: d.Aa.Row,
                        alignItems: d.f.Center
                    }, a.createElement(d.W, {
                        type: d.Wb.H5
                    }, Object(o.d)("Expand All", "VideoShelfExpandLink")), a.createElement(d.tb, {
                        asset: d.ub.AngleRight,
                        height: 14
                    })))
                });
            n.d(t, "a", function() {
                    return p
                }),
                function(e) {
                    e.Title = "title", e.SubTitle = "subtitle"
                }(i || (i = {}));
            var p = function(e) {
                if (!e.titleMessage) return a.createElement(d.jb, {
                    width: 200
                });
                var t = a.createElement(d.W, {
                    type: d.Wb.H4,
                    color: d.O.Base,
                    bold: !0,
                    "data-test-selector": i.Title
                }, e.titleMessage);
                e.titleLinkTo && (t = a.createElement(d.U, {
                    to: e.titleLinkTo,
                    type: d.V.Inherit
                }, t));
                var n = e.subTitle;
                return e.subTitle && "string" == typeof e.subTitle ? n = a.createElement(d.W, {
                    color: d.O.Alt2,
                    type: d.Wb.Span,
                    "data-test-selector": i.SubTitle
                }, e.subTitle) : e.subTitle && (n = a.createElement(d.Ya, {
                    "data-test-selector": i.SubTitle
                }, n)), a.createElement(a.Fragment, null, a.createElement(d.Ya, {
                    display: d.X.Flex,
                    flexDirection: d.Aa.Row,
                    alignItems: d.f.End
                }, t, e.expandLink && a.createElement(d.Ya, {
                    padding: {
                        left: 1
                    }
                }, a.createElement(c, {
                    channelLogin: e.expandLink.channelLogin,
                    options: e.expandLink.options
                }))), n)
            }
        },
        "7g+E": function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                a = n("q1tI"),
                r = n("oJmH"),
                o = n("9C/b"),
                l = n("/7QA"),
                s = n("yR8l"),
                d = n("vRsq"),
                c = n("2xye"),
                p = n("L9xt"),
                u = n("GnwI"),
                m = n("GFmA"),
                v = n("6h5w"),
                h = n("eqgM"),
                g = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        if (null === this.props.videos || 0 !== this.props.videos.length) return a.createElement(a.Fragment, null, a.createElement(v.a, {
                            titleMessage: Object(l.d)("Video Queue", "VideoQueueCarousel"),
                            subTitle: this.props.subTitle
                        }), a.createElement(h.a, {
                            collectionID: this.props.collectionID,
                            listContext: m.b.SingleChannelList,
                            multipleVideoGameMarkersType: this.props.multipleVideoGameMarkersType,
                            tracking: {
                                content: this.props.trackingContext.content,
                                medium: this.props.trackingContext.medium,
                                location: this.props.trackingContext.location,
                                source: this.props.trackingContext.source,
                                itemType: this.props.trackingContext.itemType
                            },
                            videos: this.props.videos,
                            scrollToCurrentlyWatching: this.props.scrollToCurrentlyWatching,
                            currentlyWatchingVideoID: this.props.currentlyWatchingVideoID,
                            renderPositionLabel: !0,
                            renderPositionBanner: !0,
                            renderCurrentlyWatchingCard: !0
                        }))
                    }, t
                }(a.Component),
                k = Object(r.compose)(Object(u.b)("VideoQueueCarousel", {
                    autoReportInteractive: !0
                }))(g),
                f = n("Ue10"),
                C = n("0Nms");
            n.d(t, "a", function() {
                return b
            });
            var y = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
                        e.data.loading && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this;
                        if (this.props.data.error) return null;
                        var t = null,
                            n = null;
                        if (!this.props.data.loading && !this.props.data.collection) return null;
                        if (this.props.data && this.props.data.collection) {
                            if (0 === (t = this.getCollectionVideos()).length) return null;
                            var i = this.props.data.collection.title;
                            n = a.createElement(f.W, {
                                color: f.O.Alt2,
                                type: f.Wb.Span
                            }, Object(l.d)("{numVideos, plural, one {Playing # video from collection: <x:link>collectionTitle</x:link>} other {Playing # videos from collection: <x:link>collectionTitle</x:link>}}", {
                                numVideos: t.length,
                                "x:link": function() {
                                    return a.createElement(f.U, {
                                        to: Object(d.i)(null, null, e.props.collectionID)
                                    }, a.createElement(f.W, {
                                        bold: !0,
                                        type: f.Wb.Span
                                    }, i))
                                }
                            }, "VideoQueueCollectionCarousel"))
                        } else n = a.createElement(f.jb, {
                            width: 250,
                            lineCount: 1
                        });
                        return a.createElement(k, {
                            collectionID: this.props.collectionID,
                            multipleVideoGameMarkersType: this.props.multipleVideoGameMarkersType,
                            trackingContext: {
                                content: c.PageviewContent.VideoQueueCollection,
                                source: {},
                                itemType: p.TwitchDataType.Video,
                                medium: this.props.trackingContext.medium,
                                location: this.props.trackingContext.location
                            },
                            videos: t,
                            subTitle: n,
                            scrollToCurrentlyWatching: !0,
                            currentlyWatchingVideoID: this.getCurrentlyWatchingVideoID()
                        })
                    }, t.prototype.getCurrentlyWatchingVideoID = function() {
                        if (this.props.data.collection) {
                            var e = Object(d.s)(this.props);
                            return e || this.getCollectionVideos()[0].id
                        }
                    }, t.prototype.getCollectionVideos = function() {
                        var e = this.props.data.collection;
                        if (!e || !e.items || !e.items.edges) return [];
                        var t = [];
                        return e.items.edges.forEach(function(e) {
                            e && t.push(e.node)
                        }), t
                    }, t
                }(a.Component),
                b = Object(r.compose)(Object(u.b)("VideoQueueCollectionCarousel"), Object(s.a)(C, {
                    options: function(e) {
                        return {
                            variables: {
                                collectionID: e.collectionID
                            }
                        }
                    }
                }))(Object(o.a)(y))
        },
        "80G/": function(e, t, n) {},
        "86FS": function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                a = n("q1tI"),
                r = n("H1ft"),
                o = n("yR8l"),
                l = function(e) {
                    return e.map(function(e, t, n) {
                        var a, r = e.node;
                        if ("GAME_CHANGE" !== r.type || 0 !== r.durationMilliseconds) return s(r);
                        var o = n[t + 1] && n[t + 1].node;
                        a = o ? o.positionMilliseconds - r.positionMilliseconds : r.video && r.video.lengthSeconds && 1e3 * r.video.lengthSeconds - r.positionMilliseconds || 0;
                        var l = i.__assign({}, r, {
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
                p = n("cr+I"),
                u = n("/7QA"),
                m = n("GFmA"),
                v = n("0INk"),
                h = n("yWUM"),
                g = n("vRsq"),
                k = n("2xye"),
                f = n("GnwI"),
                C = n("4HIT"),
                y = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onClickHandler = function() {
                            t.props.onClick && t.props.onClick(t.props.tracking.content_index)
                        }, t.gameChangesWithLinks = function() {
                            return t.props.videoGameChanges.map(function(e) {
                                var n = {
                                    t: Object(h.a)(e.offset)
                                };
                                return t.props.collectionID && (n.collection = t.props.collectionID), i.__assign({}, e, {
                                    linkTo: {
                                        pathname: "/videos/" + t.props.video.id,
                                        search: p.stringify(n),
                                        state: {
                                            content: k.PageviewContent.PreviewCardGameBalloonGame,
                                            medium: t.props.tracking.medium
                                        }
                                    }
                                })
                            })
                        }, t.trackVideoGameBalloonClick = function() {
                            t.props.video.owner && t.props.video.owner.id && t.props.video.owner.login && Object(v.b)({
                                videoID: t.props.video.id,
                                broadcasterID: t.props.video.owner.id,
                                channelLogin: t.props.video.owner.login,
                                contentIndex: t.props.tracking.content_index,
                                pageviewMedium: t.props.tracking.medium
                            })
                        }, t.trackVideoGameBalloonItemClick = function(e) {
                            t.props.video.owner && t.props.video.owner.id && t.props.video.owner.login && Object(v.c)({
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
                                pathname: Object(g.i)(void 0, this.props.video.id),
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
                                linkPath: C.a.PopularTag
                            } : void 0
                        };
                        return a.createElement(m.a, i.__assign({}, e))
                    }, t.prototype.generateSearchString = function() {
                        var e = {};
                        this.props.collectionID && (e.collection = this.props.collectionID);
                        var t = p.stringify(e);
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
                b = Object(f.b)("VideoPreviewCard", {
                    autoReportInteractive: !0
                })(y),
                S = n("1Ijn");
            n.d(t, "a", function() {
                return w
            });
            var N = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.convertMomentEdgesToChanges = function() {
                            var e = l(t.props.data && t.props.data.video && t.props.data.video.moments && t.props.data.video.moments.edges || []);
                            return e.length > 1 ? e : []
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(b, i.__assign({
                            videoGameChanges: this.convertMomentEdgesToChanges()
                        }, this.props))
                    }, t
                }(a.Component),
                w = Object(o.a)(S, {
                    options: function(e) {
                        return {
                            variables: {
                                videoId: e.video.id
                            }
                        }
                    },
                    skip: function(e) {
                        return !(e.multipleVideoGameMarkersType && (e.multipleVideoGameMarkersType !== r.a.None || e.video.id))
                    }
                })(N)
        },
        "9kuA": function(e, t, n) {
            var i = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "RecentBroadcasterClipsCarousel_UserClips"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "channelLogin"
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
                                value: "criteria"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "UserClipsInput"
                            }
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
                                        value: "channelLogin"
                                    }
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
                                        value: "clips"
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
                                            value: "criteria"
                                        },
                                        value: {
                                            kind: "Variable",
                                            name: {
                                                kind: "Name",
                                                value: "criteria"
                                            }
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
                                                                value: "PreviewCardClip"
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
                    end: 396
                }
            };
            i.loc.source = {
                body: '#import "twilight/features/video-carousel/components/recent-broadcaster-clips-carousel/components/clip-preview-card/models/preview-card-clip-fragment.gql"\nquery RecentBroadcasterClipsCarousel_UserClips($channelLogin: String! $limit: Int $criteria: UserClipsInput) {\nuser(login: $channelLogin) {\nid\ndisplayName\nclips(first: $limit criteria: $criteria) {\nedges {\nnode {\n...PreviewCardClip\n}\n}\n}\n}\n}',
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
            }(n("+Zgt").definitions)), e.exports = i
        },
        "A7Y/": function(e, t, n) {},
        B3R5: function(e, t, n) {},
        EJax: function(e, t, n) {
            "use strict";
            var i, a = n("mrSG"),
                r = n("q1tI"),
                o = n("/7QA"),
                l = n("vSJR"),
                s = n("sLlB"),
                d = n("QzU5"),
                c = n("XKWF"),
                p = n("Ue10");
            ! function(e) {
                e.Button = "filter-dropdown-button", e.FilterItemAll = "filter-item-all", e.FilterItemPastPremiere = "filter-item-past-premiere", e.FilterItemArchive = "filter-item-archive", e.FilterItemHighlight = "filter-item-highlight", e.FilterItemUpload = "filter-item-upload", e.SortNewest = "sort-option-newest", e.SortPopular = "sort-option-popular", e.SortSelector = "sort-selector"
            }(i || (i = {}));
            var u = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.getBroadcastTypeLabel = function(e) {
                            var t, n = Object(o.d)("All Videos", "VideoFilter"),
                                i = Object(o.d)("Past Premieres", "VideoFilter"),
                                a = Object(o.d)("Past Broadcasts", "VideoFilter"),
                                r = Object(o.d)("Highlights", "VideoFilter"),
                                l = Object(o.d)("Uploads", "VideoFilter");
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
                        return r.createElement(p.Ya, {
                            alignItems: p.f.End,
                            display: p.X.Flex,
                            flexDirection: p.Aa.Row,
                            fullWidth: !0,
                            justifyContent: p.Xa.Between
                        }, r.createElement(p.Ya, {
                            display: p.X.Flex,
                            flexDirection: p.Aa.Row
                        }, this.renderLanguageSelector(), r.createElement(l.a, {
                            buttonLabel: this.getBroadcastTypeLabel(this.props.broadcastType),
                            "data-test-selector": i.Button,
                            "data-a-target": "video-type-filter-dropdown",
                            hideDropdownOnInsideClick: !0
                        }, this.renderInteractables())), r.createElement("div", null, this.renderSortSelector()))
                    }, t.prototype.renderInteractables = function() {
                        return r.createElement(r.Fragment, null, r.createElement(p.Va, {
                            "data-a-target": "video-type-filter-all",
                            "data-filter-type": "all",
                            "data-test-selector": i.FilterItemAll,
                            onClick: this.typeChangeHandler,
                            selected: !1
                        }, r.createElement(p.Ya, {
                            display: p.X.Flex,
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, this.getBroadcastTypeLabel(), this.renderCheckmark())), r.createElement(p.Va, {
                            "data-a-target": "video-type-filter-past-premieres",
                            "data-filter-type": d.a.PastPremiere,
                            "data-test-selector": i.FilterItemPastPremiere,
                            onClick: this.typeChangeHandler,
                            selected: !1
                        }, r.createElement(p.Ya, {
                            display: p.X.Flex,
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, this.getBroadcastTypeLabel(d.a.PastPremiere), this.renderCheckmark(d.a.PastPremiere))), r.createElement(p.Va, {
                            "data-a-target": "video-type-filter-past-broadcasts",
                            "data-filter-type": d.a.Archive,
                            "data-test-selector": i.FilterItemArchive,
                            onClick: this.typeChangeHandler,
                            selected: !1
                        }, r.createElement(p.Ya, {
                            display: p.X.Flex,
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, this.getBroadcastTypeLabel(d.a.Archive), this.renderCheckmark(d.a.Archive))), r.createElement(p.Va, {
                            "data-a-target": "video-type-filter-highlights",
                            "data-filter-type": d.a.Highlight,
                            "data-test-selector": i.FilterItemHighlight,
                            onClick: this.typeChangeHandler,
                            selected: !1
                        }, r.createElement(p.Ya, {
                            display: p.X.Flex,
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, this.getBroadcastTypeLabel(d.a.Highlight), this.renderCheckmark(d.a.Highlight))), r.createElement(p.Va, {
                            "data-a-target": "video-type-filter-uploads",
                            "data-filter-type": d.a.Upload,
                            "data-test-selector": i.FilterItemUpload,
                            onClick: this.typeChangeHandler,
                            selected: !1
                        }, r.createElement(p.Ya, {
                            display: p.X.Flex,
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, this.getBroadcastTypeLabel(d.a.Upload), this.renderCheckmark(d.a.Upload))))
                    }, t.prototype.renderCheckmark = function(e) {
                        return this.props.broadcastType === e ? r.createElement(p.Ya, {
                            attachRight: !0,
                            position: p.kb.Absolute,
                            margin: {
                                right: 1
                            }
                        }, r.createElement(p.tb, {
                            asset: p.ub.Check,
                            height: 18,
                            width: 18
                        })) : null
                    }, t.prototype.renderLanguageSelector = function() {
                        return this.props.hideLanguageSelector ? null : r.createElement(p.Ya, {
                            margin: {
                                right: 0
                            }
                        }, r.createElement(s.a, null))
                    }, t.prototype.renderSortSelector = function() {
                        if (this.props.hideSortSelector) return null;
                        var e = this.props.selectedSort && Object(c.b)(this.props.selectedSort) || c.a.Newest,
                            t = r.createElement(p.Ab, {
                                "data-a-target": "video-sort-select",
                                "data-test-selector": i.SortSelector,
                                name: "sort",
                                onChange: this.sortChangeHandler,
                                size: p.Ta.Large,
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
                        return r.createElement(p.Ya, {
                            padding: {
                                y: .5
                            }
                        }, t)
                    }, t
                }(r.Component),
                m = n("daWW");
            n.d(t, "a", function() {
                return u
            }), n.d(t, "b", function() {
                return m.a
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
                o = n("5zf8"),
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
                        }, a.createElement(l.W, null, Object(o.b)(this.props.gameChange.duration)))))))
                    }, t
                }(a.Component)),
                d = n("0INk"),
                c = n("8/mp"),
                p = n("eJ65"),
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
                        }, a.createElement(p.a, {
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
                        }, a.createElement(l.W, null, Object(r.d)("Chapters", "PreviewCardGameBalloon")), a.createElement(l.Ya, {
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
                        }, Object(r.d)("Chapter Select", "PreviewCardGameBalloon"))), a.createElement(l.Ya, {
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
                m = n("kduP"),
                v = n("2xye"),
                h = function(e) {
                    return a.createElement(l.Ya, null, a.createElement(l.W, {
                        color: l.O.Alt,
                        ellipsis: !0
                    }, e.videoGameChanges.map(function(t, n, i) {
                        return a.createElement(l.Qa, {
                            key: n
                        }, a.createElement(l.U, {
                            to: {
                                pathname: Object(m.c)(t.label),
                                state: {
                                    content: v.PageviewContent.TextLink,
                                    medium: e.trackingContext && e.trackingContext.medium
                                }
                            },
                            type: l.V.Inherit
                        }, t.label, g(n, i.length - 1) ? null : ", "))
                    })))
                },
                g = function(e, t) {
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
            var C, y = n("TSYQ"),
                b = (n("cRsL"), function(e) {
                    var t = y("preview-card-top-bar", {
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
                    var r = 1,
                        o = null;
                    return e.topBar && (o = a.createElement(l.Ya, {
                        position: l.kb.Absolute,
                        attachTop: !0,
                        fullWidth: !0
                    }, a.createElement(b, i.__assign({}, e.topBar))), r = 3), a.createElement(l.Ya, {
                        position: l.kb.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        fullWidth: !0,
                        fullHeight: !0,
                        className: "preview-card-overlay"
                    }, o, n, a.createElement(l.Ya, {
                        position: l.kb.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        margin: e.topBar ? {
                            x: 1,
                            y: r
                        } : 1,
                        "data-test-selector": "top-left-selector"
                    }, e.topLeft), a.createElement(l.Ya, {
                        position: l.kb.Absolute,
                        attachTop: !0,
                        attachRight: !0,
                        margin: e.topBar ? {
                            x: 1,
                            y: r
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
                N = (n("kF1+"), function(e) {
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
                w = n("GnwI"),
                T = (n("B3R5"), function(e) {
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
                            n = y("preview-card-thumbnail__image", ((e = {})["preview-card-thumbnail__image--animated"] = this.state.isHovered && this.state.didAnimatedPreviewLoad, e));
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
                V = Object(w.b)("PreviewCardThumbnail")(T),
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
                x = n("H1ft"),
                E = n("ZbA5"),
                F = n("QVaV"),
                I = n("hyVY"),
                P = n("MXoD"),
                D = n("0LAi");
            ! function(e) {
                e.LockSelector = "video-lock", e.UpsellSelector = "upsell"
            }(C || (C = {}));
            var _, O, A = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    if (!this.props.restriction || !this.props.restriction.productName || !this.props.restriction.title) return null;
                    var e = Object(r.d)("Get It Now", "VideoPreviewCardRestriction"),
                        t = this.props.restriction.canViewRestricted,
                        n = t ? Object(r.d)("unlocked", "VideoPreviewCardRestriction") : Object(r.d)("locked", "VideoPreviewCardRestriction"),
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
                        "data-test-selector": C.LockSelector
                    }, a.createElement(l.Qa, {
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(l.W, {
                        color: l.O.Overlay,
                        fontSize: l.Ca.Size5,
                        "data-test-selector": C.UpsellSelector
                    }, Object(r.d)("View with {title}", {
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

            function R(e) {
                return void 0 !== e.watchedProgressPercent
            }

            function G(e) {
                return void 0 !== e.clipCreatedByChannelLogin
            }! function(e) {
                e.Avatar = "preview-card-avatar", e.BoxArt = "preview-card-box-art"
            }(_ || (_ = {})),
            function(e) {
                e[e.SingleGameList = 1] = "SingleGameList", e[e.SingleChannelList = 2] = "SingleChannelList", e[e.MixedGameAndChannelList = 3] = "MixedGameAndChannelList"
            }(O || (O = {}));
            var B = function(e) {
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
                            to: Object(P.a)(this.getTrackingContext(v.PageviewContent.VideoThumbnail), this.props.linkTo),
                            onClick: this.props.onThumbnailClick || this.props.onClick,
                            "data-a-target": "preview-card-image-link"
                        }, this.props.thumbnailImageProps && a.createElement(V, {
                            staticImageProps: this.props.thumbnailImageProps,
                            animatedImageProps: R(this.props) && this.props.animatedImageProps || void 0,
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
                            topLeft: a.createElement(E.a, {
                                type: this.props.streamType,
                                hosting: !!this.props.hostedByChannelLogin
                            }),
                            topRight: void 0,
                            bottomLeft: a.createElement(N, {
                                value: Object(r.d)("{viewerCount, plural, one {# viewer} other {# viewers}}", {
                                    viewerCount: this.props.currentViewerCount
                                }, "VideoPreviewCard")
                            }),
                            bottomRight: void 0
                        }) : R(this.props) ? a.createElement(S, {
                            topLeft: void 0 !== this.props.durationInSeconds && a.createElement(N, {
                                value: Object(I.b)(this.props.durationInSeconds),
                                icon: l.ub.Play,
                                withBackground: !0
                            }),
                            topRight: this.props.listPosition && a.createElement(N, {
                                withBackground: !0,
                                value: this.getListPositionLabel()
                            }),
                            bottomLeft: a.createElement(N, {
                                value: this.getViewCountLabel()
                            }),
                            bottomRight: this.props.datePublished ? a.createElement(N, {
                                value: Object(r.c)(new Date(this.props.datePublished), "medium")
                            }) : null,
                            progressBarPercent: this.props.watchedProgressPercent,
                            topBar: this.props.topBar
                        }) : G(this.props) ? a.createElement(S, {
                            topLeft: a.createElement(N, {
                                value: Object(I.b)(this.props.durationInSeconds),
                                icon: l.ub.Clip,
                                withBackground: !0
                            }),
                            topRight: void 0,
                            bottomLeft: a.createElement(N, {
                                value: this.getViewCountLabel()
                            }),
                            bottomRight: this.props.datePublished ? a.createElement(N, {
                                value: Object(r.c)(new Date(this.props.datePublished), "medium")
                            }) : null
                        }) : void 0
                    }, t.prototype.getListPositionLabel = function() {
                        return R(this.props) && this.props.listPosition ? Object(r.d)("{totalVideos, plural, one {{position} / # video} other {{position} / # videos}}", {
                            position: this.props.listPosition.position,
                            totalVideos: this.props.listPosition.totalVideos
                        }, "VideoPreviewCard") : ""
                    }, t.prototype.getViewCountLabel = function() {
                        return R(this.props) || G(this.props) ? Object(r.d)("{viewerCount, plural, one {# view} other {# views}}", {
                            viewerCount: this.props.viewCount
                        }, "VideoPreviewCard") : ""
                    }, t.prototype.renderIconicImage = function() {
                        return this.props.context === O.SingleChannelList && this.props.gameBoxArtImageProps && this.props.gameBoxArtImageProps.src && this.props.gameTitleLinkTo ? a.createElement(l.Ya, {
                            margin: {
                                right: 1
                            }
                        }, a.createElement(f, {
                            imageProps: this.props.gameBoxArtImageProps,
                            linkTo: Object(P.a)(this.getTrackingContext(v.PageviewContent.GameBoxart), this.props.gameTitleLinkTo),
                            onClick: this.props.onGameTitleClick,
                            aspect: l.p.BoxArt,
                            "data-test-selector": _.BoxArt,
                            "data-a-target": "preview-card-boxart-link"
                        })) : (this.props.context === O.SingleGameList || this.props.context === O.MixedGameAndChannelList) && this.props.channelImageProps && this.props.channelImageProps.src ? a.createElement(l.Ya, {
                            margin: {
                                right: 1
                            }
                        }, a.createElement(f, {
                            imageProps: this.props.channelImageProps,
                            linkTo: Object(P.a)(this.getTrackingContext(v.PageviewContent.UserThumbnail), this.props.channelLinkTo),
                            onClick: this.props.onChannelImageClick || this.props.onChannelLoginClick,
                            aspect: l.p.Aspect1x1,
                            "data-test-selector": _.Avatar
                        })) : void 0
                    }, t.prototype.renderTitles = function() {
                        var e = null,
                            t = [];
                        return this.shouldShowGameBalloon(this.props) || t.push({
                            text: Object(F.a)(this.props.channelLogin, this.props.channelDisplayName, !0),
                            linkTo: Object(P.a)(this.getTrackingContext(v.PageviewContent.ChannelMetadata), this.props.channelLinkTo),
                            onClick: this.props.onChannelLoginClick,
                            automationSelector: "preview-card-channel-link"
                        }), G(this.props) && this.props.clipCreatedByChannelLoginLinkTo ? t.push({
                            text: Object(r.d)("Clipped by {userName}", {
                                userName: this.props.clipCreatedByChannelLogin || ""
                            }, "VideoPreviewCard"),
                            linkTo: this.props.clipCreatedByChannelLoginLinkTo,
                            onClick: this.props.onClipCreatedByChannelLoginClick,
                            automationSelector: "preview-card-clip-curator-link"
                        }) : R(this.props) && this.props.multipleVideoGameMarkersType && this.props.videoGameChanges && this.props.videoGameChanges.length > 0 ? e = this.renderPreviewCardGameInfo(this.props.multipleVideoGameMarkersType, this.props.videoGameChanges, this.props.onVideoGameBalloonClick, this.props.onVideoGameBalloonItemClick) : this.props.context !== O.SingleGameList && this.props.gameTitle && this.props.gameTitleLinkTo && t.push({
                            text: this.props.gameTitle,
                            linkTo: Object(P.a)(this.getTrackingContext(v.PageviewContent.GameMetadata), this.props.gameTitleLinkTo),
                            onClick: this.props.onGameTitleClick,
                            automationSelector: "preview-card-game-link"
                        }), a.createElement(a.Fragment, null, a.createElement(L, {
                            title: this.props.title,
                            onClick: this.props.onVideoTitleClick || this.props.onClick,
                            linkTo: Object(P.a)(this.getTrackingContext(v.PageviewContent.VideoTitle), this.props.linkTo),
                            subtitles: t,
                            "data-a-target": "preview-card-title-link"
                        }), e)
                    }, t.prototype.renderTags = function() {
                        return this.props.tagListProps && 0 !== this.props.tagListProps.tags.length ? a.createElement(l.Ya, {
                            margin: {
                                top: .5
                            }
                        }, a.createElement(D.a, i.__assign({}, this.props.tagListProps, {
                            tagNumberLimit: 3
                        }))) : null
                    }, t.prototype.renderVODRestrictionOverlay = function() {
                        return R(this.props) && this.props.restriction && this.props.restriction.productName && this.props.restriction.title ? a.createElement(A, {
                            restriction: this.props.restriction,
                            attachTop: !0
                        }) : null
                    }, t.prototype.shouldShowGameBalloon = function(e) {
                        return !!R(e) && (!!(e.videoGameChanges && e.videoGameChanges.length > 0) && e.multipleVideoGameMarkersType === x.a.Balloon)
                    }, t.prototype.renderPreviewCardGameInfo = function(e, t, n, i) {
                        switch (e) {
                            case x.a.Balloon:
                                return a.createElement(u, {
                                    videoGameChanges: t,
                                    onBalloonClick: n,
                                    onBalloonItemClick: i
                                });
                            case x.a.Inline:
                                return a.createElement(h, {
                                    videoGameChanges: t,
                                    trackingContext: this.props.trackingContext
                                });
                            case x.a.None:
                                return null;
                            default:
                                return e
                        }
                    }, t
                }(a.Component),
                M = Object(w.b)("PreviewCard", {
                    autoReportInteractive: !0
                })(B);
            n.d(t, !1, function() {
                return _
            }), n.d(t, "b", function() {
                return O
            }), n.d(t, !1, function() {
                return B
            }), n.d(t, "a", function() {
                return M
            })
        },
        HrG3: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return l
            });
            var i = n("q1tI"),
                a = n("/7QA"),
                r = n("Ue10"),
                o = (n("RFKy"), "view-all-button-selector");

            function l(e) {
                var t = i.createElement(r.Ya, {
                    padding: 1,
                    fullHeight: !0,
                    flexDirection: r.Aa.Column,
                    justifyContent: r.Xa.Center,
                    display: r.X.Flex
                }, i.createElement(r.W, {
                    color: r.O.Link,
                    fontSize: r.Ca.Size4,
                    noWrap: !0
                }, Object(a.d)("View All", "Following--ViewAllButton")), i.createElement(r.W, {
                    color: r.O.Alt2,
                    fontSize: r.Ca.Size4,
                    noWrap: !0
                }, e.subHeader));
                return e.linkTo && (t = i.createElement(r.U, {
                    to: e.linkTo,
                    className: "following__view-all__link",
                    hoverUnderlineNone: !0
                }, t)), i.createElement("div", {
                    className: "following__view-all",
                    onClick: e.onClickViewAll,
                    "data-test-selector": o
                }, i.createElement(r.Ya, {
                    margin: {
                        bottom: 5
                    }
                }, i.createElement(r.o, {
                    ratio: e.aspectRatio
                }, i.createElement(r.Fb, {
                    background: r.r.Alt2,
                    fullHeight: !0
                }, t))))
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
        XA5B: function(e, t, n) {},
        XEwr: function(e, t, n) {
            "use strict";

            function i(e) {
                if (!e || 0 === e.edges.length) return [];
                var t = [];
                return e.edges.forEach(function(e) {
                    e.node.id && t.push(e.node)
                }), t
            }

            function a(e) {
                return "slug" in e
            }
            n.d(t, "b", function() {
                return i
            }), n.d(t, "a", function() {
                return a
            })
        },
        YDp0: function(e, t, n) {
            var i = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "LatestCollectionsShelf_Collections"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "channelLogin"
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
                                value: "first"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Int"
                                }
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
                                        value: "channelLogin"
                                    }
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
                                        value: "collections"
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
                                                value: "first"
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
                                                value: "PreviewCollectionConnection"
                                            },
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
                                                value: "isEditor"
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
                    end: 369
                }
            };
            i.loc.source = {
                body: '#import "twilight/features/video-carousel/components/collection-carousel/models/preview-collection-connection-fragment.gql"\nquery LatestCollectionsShelf_Collections($channelLogin: String! $first: Int! $cursor: Cursor) {\nuser(login: $channelLogin) {\nid\ncollections(first: $first after: $cursor) {\n...PreviewCollectionConnection\n}\nself {\nisEditor\n}\n}\ncurrentUser {\nid\n}\n}',
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
            }(n("izJ5").definitions)), e.exports = i
        },
        Z57o: function(e, t, n) {
            "use strict";
            var i, a, r = n("mrSG"),
                o = n("q1tI"),
                l = n("oJmH"),
                s = n("lZCe"),
                d = n("H1ft"),
                c = n("QzU5"),
                p = n("vRsq"),
                u = n("D7An"),
                m = n("2xye"),
                v = n("tuvy"),
                h = n("GnwI"),
                g = n("pfAL"),
                k = n("7g+E"),
                f = n("NAv5"),
                C = n("fvjX"),
                y = n("yR8l"),
                b = n("9C/b"),
                S = n("8/mp"),
                N = n("hkkJ"),
                w = n("Ue10"),
                T = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this,
                            t = this.props.collections;
                        if (!t) return o.createElement(w.ab, {
                            fillContent: !0
                        });
                        var n = null;
                        Object(v.a)() && Object(v.c)() && (n = Object(p.n)(this.props));
                        var i = t.reduce(function(t, i) {
                                return i.id !== n && t.push(o.createElement(N.a, {
                                    key: i.id,
                                    collection: i,
                                    multipleVideoGameMarkersType: e.props.multipleVideoGameMarkersType,
                                    tracking: {
                                        content: m.PageviewContent.VideoShelf,
                                        location: m.PageviewLocation.ChannelVideos,
                                        medium: m.PageviewMedium.ChannelVideos,
                                        source: {
                                            source_channel: e.props.channelLogin,
                                            source_item_type: m.TwitchDataType.Channel
                                        },
                                        itemType: m.TwitchDataType.Video
                                    },
                                    userCanEdit: e.props.userCanEdit
                                })), t
                            }, []),
                            a = null;
                        return this.props.pagination && (a = o.createElement(S.a, {
                            enabled: this.props.pagination.enabled,
                            loadMore: this.props.pagination.onMoreCollectionsRequest
                        })), o.createElement(o.Fragment, null, i, a)
                    }, t
                }(o.Component),
                V = Object(h.b)("LatestCollectionsShelf", {
                    autoReportInteractive: !0
                })(Object(b.a)(T)),
                L = n("YDp0"),
                x = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.data && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        if (this.props.data && this.props.data.error) return null;
                        if (!this.props.data || this.props.data.loading) return o.createElement(V, {
                            channelLogin: this.props.channelLogin,
                            collections: null,
                            multipleVideoGameMarkersType: this.props.multipleVideoGameMarkersType,
                            userCanEdit: !1
                        });
                        var e = this.props.data.user;
                        if (!e || !e.collections) return null;
                        var t = e.collections.edges.reduce(function(e, t) {
                            return t && e.push(t.node), e
                        }, []);
                        if (t && 0 === t.length) return null;
                        if (this.props.lastUpdateCutOff) {
                            var n = this.props.lastUpdateCutOff;
                            t = t.filter(function(e) {
                                return Object(f.isAfter)(new Date(e.updatedAt), n)
                            })
                        }
                        var i = this.props.data.currentUser,
                            a = !(!i || i.id !== e.id) || !(!e.self || !e.self.isEditor);
                        return o.createElement(V, {
                            channelLogin: this.props.channelLogin,
                            collections: t,
                            multipleVideoGameMarkersType: this.props.multipleVideoGameMarkersType,
                            pagination: this.props.data.user && this.props.data.user.collections ? this.computePagingProp(this.props.data.user.collections) : void 0,
                            userCanEdit: a
                        })
                    }, t.prototype.componentDidUpdate = function() {
                        this.props.data && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.computePagingProp = function(e) {
                        if (this.props.shelf.allowPaging) return {
                            enabled: !!e.pageInfo.hasNextPage,
                            onMoreCollectionsRequest: this.props.loadMore
                        }
                    }, t
                }(o.Component),
                E = Object(C.compose)(Object(y.a)(L, {
                    options: function(e) {
                        return {
                            variables: {
                                channelLogin: e.channelLogin,
                                first: e.shelf.first
                            }
                        }
                    },
                    props: function(e) {
                        return r.__assign({}, e, {
                            loadMore: function() {
                                if (!e.data.user || !e.data.user.collections) return Promise.resolve();
                                var t = Math.max(e.data.user.collections.edges.length - 1, 0),
                                    n = e.data.user.collections.edges[t];
                                return n ? e.data.fetchMore({
                                    query: L,
                                    variables: r.__assign({}, e.data.variables, {
                                        cursor: n.cursor
                                    }),
                                    updateQuery: function(e, t) {
                                        var n = t.fetchMoreResult;
                                        return e.user && e.user.collections && n.user && n.user.collections ? {
                                            user: r.__assign({}, n.user, {
                                                collections: r.__assign({}, n.user.collections, {
                                                    edges: e.user.collections.edges.concat(n.user.collections.edges)
                                                })
                                            })
                                        } : e
                                    }
                                }) : Promise.resolve()
                            }
                        })
                    },
                    skip: function(e) {
                        return !e.channelLogin
                    }
                }), Object(h.b)("LatestCollectionsShelfContainer"))(x),
                F = n("/7QA"),
                I = n("XKWF"),
                P = n("GFmA"),
                D = n("6h5w"),
                _ = n("eqgM"),
                O = n("EJax");
            ! function(e) {
                e.LatestCollections = "latest-collections", e.VideoSet = "video-set", e.TimeBoxVideoSet = "time-box-video-set"
            }(i || (i = {})),
            function(e) {
                e.Tower = "video-tower", e.Carousel = "video-carousel"
            }(a || (a = {}));
            var A, R = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.videos,
                            t = this.props.minimum || 1;
                        if (e && e.length < t) return null;
                        var n = this.props.expandLinkOptions && {
                            channelLogin: this.props.channelLogin,
                            options: this.props.expandLinkOptions
                        };
                        return o.createElement(o.Fragment, null, o.createElement(D.a, {
                            expandLink: n,
                            titleMessage: this.props.title
                        }), this.renderShelfType(this.props.format))
                    }, t.prototype.renderShelfType = function(e) {
                        switch (e) {
                            case a.Carousel:
                                return this.renderVideoCarousel();
                            case a.Tower:
                                return this.renderVideoTower();
                            default:
                                return e
                        }
                    }, t.prototype.renderVideoCarousel = function() {
                        var e = this.props.videos ? this.props.videos.slice(0, 10) : null;
                        return o.createElement(_.a, {
                            listContext: P.b.SingleChannelList,
                            multipleVideoGameMarkersType: this.props.multipleVideoGameMarkersType,
                            tracking: {
                                content: m.PageviewContent.VideoShelf,
                                medium: m.PageviewMedium.ChannelVideos,
                                location: m.PageviewLocation.ChannelVideos,
                                source: {
                                    source_channel: this.props.channelLogin,
                                    source_item_type: m.TwitchDataType.Channel
                                },
                                itemType: m.TwitchDataType.Video
                            },
                            videos: e,
                            hideTags: !0
                        })
                    }, t.prototype.renderVideoTower = function() {
                        return o.createElement(O.b, {
                            listContext: P.b.SingleChannelList,
                            multipleVideoGameMarkersType: this.props.multipleVideoGameMarkersType,
                            trackingContent: m.PageviewContent.VideoShelf,
                            trackingMedium: m.PageviewMedium.ChannelVideos,
                            videos: this.props.videos,
                            hideTags: !0
                        })
                    }, t
                }(o.Component),
                G = n("cy7x");
            ! function(e) {
                e.QuickHits = "quick-hits", e.LongHits = "long-hits"
            }(A || (A = {}));
            var B = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.data && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        if (!this.props.data || this.props.data.error) return null;
                        if (!(this.props.data.loading || this.props.data.user && this.props.data.user.videos)) return null;
                        var e = this.props.shelf,
                            t = !this.props.data.loading && this.props.data.user && this.props.data.user.videos ? this.props.data.user.videos.edges : null,
                            n = t ? [] : null;
                        if (t && n)
                            for (var i = 0, a = t; i < a.length; i++) {
                                var r = a[i];
                                r && r.node && n.push(r.node)
                            }
                        var l, s = e.maxAgeDays;
                        if (n && n.length > 0 && s && !(Object(f.differenceInDays)(new Date, new Date(n[0].publishedAt || 0)) <= s)) return null;
                        if (e.separateGames) return this.renderGameShelves(n);
                        if (e.quickHits) return this.renderQuickHitsShelf(e.quickHits, n);
                        var d = e.videoTypes;
                        if (d && 1 === d.length) {
                            var c = Object(p.B)(d[0]);
                            c && (l = {
                                filter: c,
                                sort: e.sortBy
                            })
                        }
                        return o.createElement(R, {
                            channelLogin: this.props.channelLogin,
                            expandLinkOptions: l,
                            format: e.format,
                            minimum: e.minimum,
                            multipleVideoGameMarkersType: this.props.multipleVideoGameMarkersType,
                            title: this.formatTitle(),
                            videos: n
                        })
                    }, t.prototype.componentDidUpdate = function() {
                        this.props.data && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.renderQuickHitsShelf = function(e, t) {
                        var n = null,
                            i = null;
                        if (t) {
                            var a = [],
                                r = [];
                            t.forEach(function(t) {
                                (t.lengthSeconds || 0) <= e.maxLengthSeconds ? a.push(t) : r.push(t)
                            }), n = a, i = r
                        }
                        return o.createElement(o.Fragment, null, o.createElement(R, {
                            channelLogin: this.props.channelLogin,
                            "data-test-selector": A.QuickHits,
                            format: this.props.shelf.format,
                            minimum: this.props.shelf.minimum,
                            multipleVideoGameMarkersType: this.props.multipleVideoGameMarkersType,
                            title: Object(F.d)("Short Videos", "VideoShelfSet"),
                            videos: n
                        }), o.createElement(R, {
                            channelLogin: this.props.channelLogin,
                            "data-test-selector": A.LongHits,
                            format: this.props.shelf.format,
                            minimum: this.props.shelf.minimum,
                            multipleVideoGameMarkersType: this.props.multipleVideoGameMarkersType,
                            title: Object(F.d)("Long Videos", "VideoShelfSet"),
                            videos: i
                        }))
                    }, t.prototype.renderGameShelves = function(e) {
                        var t = this;
                        if (null === e) return null;
                        var n = [],
                            i = {};
                        e.forEach(function(e) {
                            if (e.game && e.game.id && "" !== e.game.displayName) {
                                var t = e.game.displayName;
                                t in i || (i[t] = [], n.push(t)), i[t].push(e)
                            }
                        });
                        var a = this.props.shelf.minimum || 1,
                            r = (n = (n = n.filter(function(e) {
                                return i[e].length >= a
                            })).slice(0, 4)).map(function(e) {
                                var n = i[e];
                                return o.createElement(R, {
                                    channelLogin: t.props.channelLogin,
                                    format: t.props.shelf.format,
                                    key: e,
                                    minimum: t.props.shelf.minimum,
                                    multipleVideoGameMarkersType: t.props.multipleVideoGameMarkersType,
                                    title: e,
                                    videos: n
                                })
                            });
                        return o.createElement(o.Fragment, null, r)
                    }, t.prototype.formatTitle = function() {
                        var e = this.props.shelf.videoTypes;
                        if (!e) return Object(F.d)("Latest Videos", "VideoShelfSet");
                        var t = Object(F.d)("Latest Highlights", "VideoShelfSet");
                        if (e.length > 1) return t;
                        var n = e[0];
                        switch (n) {
                            case c.a.PastPremiere:
                                return Object(F.d)("Latest Premieres", "VideoShelfSet");
                            case c.a.Highlight:
                                return t;
                            case c.a.Archive:
                                return Object(F.d)("Latest Broadcasts", "VideoShelfSet");
                            case c.a.Upload:
                            case c.a.PremiereUpload:
                                return Object(F.d)("Latest Uploads", "VideoShelfSet");
                            default:
                                return n
                        }
                    }, t
                }(o.Component),
                M = Object(l.compose)(Object(y.a)(G, {
                    options: function(e) {
                        var t = 10;
                        return e.shelf.separateGames ? t = 100 : e.shelf.quickHits && (t = 50), {
                            variables: {
                                first: t,
                                channelLogin: e.channelLogin,
                                sort: Object(I.c)(e.shelf.sortBy),
                                types: e.shelf.videoTypes
                            }
                        }
                    },
                    skip: function(e) {
                        return !e.channelLogin
                    }
                }), Object(h.b)("VideoSetShelf"))(B),
                j = n("ZDlU"),
                W = n("DMoW"),
                U = n("QdeI"),
                H = n("3lt/"),
                q = n("xwKp"),
                Y = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderCollectionsButton = function() {
                            return o.createElement(w.z, {
                                linkTo: "/" + t.props.channelLogin + "/collections",
                                type: w.F.Text,
                                size: w.D.Large
                            }, Object(F.d)("See all collections", "ChannelVideoShelves"))
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidUpdate = function() {
                        !this.props.data.loading && this.props.data.user && this.props.data.user.videoShelves && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this;
                        if (this.props.data.loading && !this.props.data.user) return o.createElement(U.a, null);
                        if (this.props.data.error || !this.props.data.user || !this.props.data.user.videoShelves || !this.props.data.user.videoShelves.edges) return o.createElement(w.Ya, {
                            padding: 5
                        }, o.createElement(j.a, {
                            message: Object(F.d)("These videos are temporarily unavailable.", "ChannelVideoShelves")
                        }));
                        if (this.props.data.user && this.props.data.user.videoShelves && 0 === this.props.data.user.videoShelves.totalCount) return this.props.latencyTracking.reportInteractive(), null;
                        var t = !1,
                            n = this.props.data.user.videoShelves.edges.reduce(function(n, i) {
                                var a, r = e.renderShelf(i);
                                if (!r || !i.node || !i.node.items) return n;
                                i.node.type === W.Da.LATEST_BROADCASTS ? a = {
                                    filter: p.e.PastBroadcasts,
                                    sort: p.f.Newest
                                } : i.node.type === W.Da.TOP_CLIPS ? a = {
                                    filter: p.e.Clips,
                                    range: p.b.Month
                                } : i.node.type === W.Da.ALL_VIDEOS && (a = {
                                    filter: p.e.All
                                }, t = !0);
                                var l = o.createElement(D.a, {
                                    titleMessage: i.node.title,
                                    subTitle: i.node.description || void 0,
                                    expandLink: a && {
                                        channelLogin: e.props.channelLogin,
                                        options: a
                                    } || void 0
                                });
                                if (i.node.type === W.Da.COLLECTION && i.node.collection) {
                                    var s = Object(F.d)("{itemCount, plural, one {# video} other {# videos}}", {
                                            itemCount: i.node.collection.items.totalCount
                                        }, "ChannelVideoShelves"),
                                        d = "";
                                    if (i.node.description) {
                                        d = i.node.description + " · " + s
                                    } else d = s;
                                    l = o.createElement(D.a, {
                                        titleMessage: i.node.title,
                                        subTitle: d,
                                        titleLinkTo: "/collections/" + i.node.collection.id
                                    })
                                }
                                return n.push(o.createElement(w.Ya, {
                                    key: i.node.id,
                                    margin: 0 === n.length ? {
                                        bottom: 2
                                    } : {
                                        y: 2
                                    }
                                }, l, r)), n
                            }, []),
                            i = !!this.props.data.user.videoShelves.pageInfo && !!this.props.data.user.videoShelves.pageInfo.hasNextPage;
                        return o.createElement(o.Fragment, null, n, o.createElement(S.a, {
                            enabled: i,
                            key: "channel-video-shelves-" + this.props.channelLogin,
                            loadMore: this.props.loadMore
                        }), o.createElement(w.Ya, {
                            display: w.X.Flex,
                            justifyContent: w.Xa.Center,
                            fullWidth: !0,
                            margin: {
                                bottom: 3
                            }
                        }, i && this.props.data.loading && o.createElement(w.ab, {
                            fillContent: !0
                        }), !i && !t && this.renderCollectionsButton()))
                    }, t.prototype.renderShelf = function(e) {
                        var t = this;
                        if (!e.node || !e.node.items) return null;
                        var n = null;
                        switch (e.node.type) {
                            case W.Da.COLLECTION:
                                var i = e.node.items.filter(function(e) {
                                    return !!e.id
                                });
                                if (0 === i.length) {
                                    n = null;
                                    break
                                }
                                n = o.createElement(_.a, {
                                    hideTags: !0,
                                    collectionID: e.node.collection && e.node.collection.id || void 0,
                                    listContext: P.b.SingleChannelList,
                                    multipleVideoGameMarkersType: this.props.multipleVideoGameMarkersType,
                                    videos: i,
                                    tracking: {
                                        content: H.PageviewContent.VideoShelf,
                                        medium: H.PageviewMedium.ChannelVideos,
                                        location: H.PageviewLocation.ChannelVideos,
                                        source: {
                                            source_channel: this.props.channelLogin,
                                            source_item_type: H.TwitchDataType.Channel
                                        },
                                        itemType: H.TwitchDataType.Video
                                    }
                                });
                                break;
                            case W.Da.SHORT_VIDEOS:
                            case W.Da.LONG_VIDEOS:
                            case W.Da.GAME_VIDEOS:
                            case W.Da.LATEST_BROADCASTS:
                            case W.Da.LATEST_NON_BROADCASTS:
                            case W.Da.ALL_VIDEOS:
                                n = o.createElement(_.a, {
                                    hideTags: !0,
                                    listContext: P.b.SingleChannelList,
                                    multipleVideoGameMarkersType: this.props.multipleVideoGameMarkersType,
                                    videos: e.node.items,
                                    tracking: {
                                        content: H.PageviewContent.VideoShelf,
                                        medium: H.PageviewMedium.ChannelVideos,
                                        location: H.PageviewLocation.ChannelVideos,
                                        source: {
                                            source_channel: this.props.channelLogin,
                                            source_item_type: H.TwitchDataType.Channel
                                        },
                                        itemType: H.TwitchDataType.Video
                                    }
                                });
                                break;
                            case W.Da.TOP_CLIPS:
                                var a = e.node.items.map(function(e) {
                                    return t.convertShelfClipToCardClip(e)
                                });
                                n = o.createElement(_.a, {
                                    hideTags: !0,
                                    listContext: P.b.SingleChannelList,
                                    tracking: {
                                        content: H.PageviewContent.ClipsCuratorCarousel,
                                        location: H.PageviewLocation.ChannelVideos,
                                        medium: H.PageviewMedium.ChannelVideos,
                                        source: {
                                            source_channel: this.props.channelLogin,
                                            source_item_type: H.TwitchDataType.Channel
                                        },
                                        itemType: H.TwitchDataType.Clip
                                    },
                                    videos: a
                                });
                                break;
                            default:
                                n = null
                        }
                        return n
                    }, t.prototype.convertShelfClipToCardClip = function(e) {
                        var t = r.__assign({}, e, {
                            title: e.clipTitle,
                            viewCount: e.clipViewCount,
                            game: e.clipGame
                        });
                        return delete t.clipTitle, delete t.clipViewCount, delete t.clipGame, t
                    }, t
                }(o.Component),
                X = {
                    options: function(e) {
                        return {
                            variables: {
                                channelLogin: e.channelLogin,
                                first: 5
                            },
                            notifyOnNetworkStatusChange: !0
                        }
                    },
                    props: function(e) {
                        return r.__assign({}, e, {
                            loadMore: function() {
                                var t = e.data.user && e.data.user.videoShelves && e.data.user.videoShelves.edges || [],
                                    n = t && t.length > 0 ? t[t.length - 1].cursor : void 0;
                                return e.data.fetchMore({
                                    query: q,
                                    variables: r.__assign({}, e.data.variables, {
                                        cursor: n
                                    }),
                                    updateQuery: function(e, t) {
                                        var n = t.fetchMoreResult;
                                        if (!n.user || !n.user.videoShelves || !n.user.videoShelves.edges) return e;
                                        var i = e.user && e.user.videoShelves && e.user.videoShelves.edges || [],
                                            a = n.user.videoShelves.edges || [];
                                        return {
                                            user: r.__assign({}, n.user, {
                                                videoShelves: r.__assign({}, n.user.videoShelves, {
                                                    edges: i.concat(a)
                                                })
                                            })
                                        }
                                    }
                                })
                            }
                        })
                    }
                },
                Q = Object(C.compose)(Object(h.b)("ChannelVideoShelves"), Object(y.a)(q, X))(Y);
            n("nPIx");
            n.d(t, "b", function() {
                return z
            }), n.d(t, "a", function() {
                return $
            });
            var z = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderCurrentCollection = function() {
                            if (t.props.collectionID && Object(v.a)() && Object(v.c)()) return o.createElement(w.Ya, {
                                className: "channel-videos-overview__video-queue",
                                padding: {
                                    bottom: 1
                                },
                                margin: {
                                    bottom: 1
                                }
                            }, o.createElement(k.a, {
                                collectionID: t.props.collectionID,
                                trackingContext: {
                                    location: m.PageviewLocation.ChannelVideos,
                                    medium: m.PageviewMedium.ChannelVideos
                                },
                                multipleVideoGameMarkersType: Object(d.b)()
                            }))
                        }, t.renderCustomShelves = function(e) {
                            return o.createElement(Q, {
                                channelLogin: t.props.channelLogin,
                                multipleVideoGameMarkersType: e
                            })
                        }, t.renderOrderedVideoSetShelves = function(e) {
                            return o.createElement(o.Fragment, null, o.createElement(M, {
                                channelLogin: t.props.channelLogin,
                                shelf: {
                                    __typename: i.VideoSet,
                                    format: a.Carousel,
                                    maxAgeDays: 180,
                                    sortBy: p.f.Newest,
                                    videoTypes: [c.a.Archive]
                                },
                                multipleVideoGameMarkersType: e
                            }), o.createElement(g.a, {
                                channelLogin: t.props.channelLogin,
                                includeExpandTitleLink: !0,
                                omitCreatorInTitle: !0,
                                tracking: {
                                    location: m.PageviewLocation.ChannelVideos,
                                    medium: m.PageviewMedium.ChannelVideos
                                },
                                criteria: {
                                    limit: 15,
                                    range: p.b.Month
                                }
                            }), o.createElement(M, {
                                channelLogin: t.props.channelLogin,
                                shelf: {
                                    __typename: i.VideoSet,
                                    format: a.Carousel,
                                    quickHits: {
                                        maxLengthSeconds: 1800
                                    },
                                    maxAgeDays: 180,
                                    sortBy: p.f.Newest,
                                    videoTypes: [c.a.Highlight, c.a.Upload, c.a.PastPremiere, c.a.PremiereUpload]
                                },
                                multipleVideoGameMarkersType: e
                            }), o.createElement(E, {
                                channelLogin: t.props.channelLogin,
                                shelf: {
                                    __typename: i.LatestCollections,
                                    allowPaging: !0,
                                    first: 2
                                },
                                multipleVideoGameMarkersType: e
                            }))
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this,
                            t = Object(d.b)(),
                            n = {
                                assignments: {
                                    fallback: function() {
                                        return e.renderOrderedVideoSetShelves(t)
                                    },
                                    on: function() {
                                        return e.renderCustomShelves(t)
                                    }
                                },
                                name: u.b.VODMrPotatoHead
                            };
                        return o.createElement("div", null, this.renderCurrentCollection(), o.createElement(s.a, r.__assign({}, n)))
                    }, t
                }(o.Component),
                $ = Object(l.compose)(Object(h.b)("ChannelVideosOverviewContent", {
                    autoReportInteractive: !0
                }))(z)
        },
        ZbA5: function(e, t, n) {
            "use strict";
            var i, a, r, o, l = n("mrSG"),
                s = n("TSYQ"),
                d = n("q1tI"),
                c = n("/7QA"),
                p = n("oB8h"),
                u = n("Ue10");
            n("kVMo");
            ! function(e) {
                e.HostingDot = "stream-type-indicator__hosting-dot"
            }(o || (o = {}));
            var m = ((i = {})[p.a.Live] = "stream-type-indicator--live", i[p.a.Premiere] = "stream-type-indicator--premiere", i[p.a.Rerun] = "stream-type-indicator--rerun", i[p.a.WatchParty] = "stream-type-indicator--rerun", i),
                v = ((a = {})[p.a.Premiere] = u.ub.VideoPremiere, a[p.a.Rerun] = u.ub.VideoRerun, a[p.a.WatchParty] = u.ub.VideoRerun, a),
                h = ((r = {})[p.a.Premiere] = u.vb.Live, r[p.a.Rerun] = u.vb.Inherit, r[p.a.WatchParty] = u.vb.Inherit, r),
                g = function(e) {
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
                        return e[m[this.props.type]] = !0, s(e)
                    }, t.prototype.getIcon = function() {
                        return this.props.hosting ? d.createElement(u.Fb, {
                            borderRadius: u.x.Rounded,
                            className: "stream-type-indicator__hosting-dot",
                            "data-test-selector": o.HostingDot
                        }) : this.props.type === p.a.Live ? d.createElement(u.Ya, {
                            className: "stream-type-indicator__live-wrapper",
                            display: u.X.Flex,
                            alignItems: u.f.Center
                        }, d.createElement(u.K, {
                            status: u.M.Live,
                            size: u.L.Small
                        })) : d.createElement(u.tb, {
                            asset: v[this.props.type],
                            type: h[this.props.type],
                            width: 14,
                            height: 14
                        })
                    }, t.prototype.getLabel = function() {
                        if (this.props.hosting) return Object(c.d)("Hosting", "StreamTypeIndicator");
                        switch (this.props.type) {
                            case p.a.Live:
                                return Object(c.d)("LIVE", "StreamTypeIndicator");
                            case p.a.Premiere:
                                return Object(c.d)("Premiere", "StreamTypeIndicator");
                            case p.a.Rerun:
                            case p.a.WatchParty:
                                return Object(c.d)("Rerun", "StreamTypeIndicator");
                            default:
                                return ""
                        }
                    }, t
                }(d.Component);
            n.d(t, !1, function() {
                return o
            }), n.d(t, "a", function() {
                return g
            })
        },
        bdIb: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return l
            });
            var i = n("mrSG"),
                a = n("q1tI"),
                r = n("/7QA"),
                o = n("GFmA"),
                l = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onClickHandler = function() {
                            t.props.onClick && t.props.onClick(t.props.tracking.content_index)
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(o.a, {
                            context: this.props.context,
                            title: this.props.clip.title,
                            linkTo: {
                                pathname: this.props.clip.broadcaster ? "/" + this.props.clip.broadcaster.login + "/clip/" + this.props.clip.slug : "",
                                state: this.getLinkState()
                            },
                            onClick: this.onClickHandler,
                            thumbnailImageProps: {
                                src: this.props.clip.thumbnailURL || r.p.config.defaultStreamPreviewURL,
                                alt: this.props.clip.title
                            },
                            channelDisplayName: this.props.clip.broadcaster && this.props.clip.broadcaster.displayName || "",
                            channelLogin: this.props.clip.broadcaster && this.props.clip.broadcaster.login || "",
                            channelLinkTo: {
                                pathname: this.props.clip.broadcaster ? "/" + this.props.clip.broadcaster.login : "",
                                state: this.getLinkState()
                            },
                            channelImageProps: {
                                src: this.props.clip.broadcaster && this.props.clip.broadcaster.profileImageURL || "",
                                alt: this.props.clip.broadcaster && this.props.clip.broadcaster.login || ""
                            },
                            gameTitle: this.props.clip.game && this.props.clip.game.name || void 0,
                            gameTitleLinkTo: this.props.clip.game ? {
                                pathname: "/directory/game/" + encodeURI(this.props.clip.game.name),
                                state: this.getLinkState()
                            } : void 0,
                            gameBoxArtImageProps: this.props.clip.game ? {
                                src: this.props.clip.game.boxArtURL || r.a.defaultBoxArtURL,
                                alt: this.props.clip.game.name
                            } : void 0,
                            datePublished: this.props.clip.createdAt,
                            viewCount: this.props.clip.viewCount,
                            durationInSeconds: this.props.clip.durationSeconds,
                            clipCreatedByChannelLogin: this.props.clip.curator && this.props.clip.curator.login || "",
                            clipCreatedByChannelLoginLinkTo: this.props.clip.curator ? "/" + this.props.clip.curator.login : ""
                        })
                    }, t.prototype.getLinkState = function() {
                        return {
                            content: this.props.tracking.content,
                            content_index: this.props.tracking.content_index,
                            medium: this.props.tracking.medium
                        }
                    }, t
                }(a.Component)
        },
        cRsL: function(e, t, n) {},
        cy7x: function(e, t, n) {
            var i = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "VideoSetShelf_Videos"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "channelLogin"
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
                                value: "sort"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "VideoSort"
                                }
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
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Int"
                                }
                            }
                        }
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "types"
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
                                        value: "BroadcastType"
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
                                        value: "channelLogin"
                                    }
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
                                                value: "first"
                                            }
                                        }
                                    }, {
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "sort"
                                        },
                                        value: {
                                            kind: "Variable",
                                            name: {
                                                kind: "Name",
                                                value: "sort"
                                            }
                                        }
                                    }, {
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "types"
                                        },
                                        value: {
                                            kind: "Variable",
                                            name: {
                                                kind: "Name",
                                                value: "types"
                                            }
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
                }],
                loc: {
                    start: 0,
                    end: 321
                }
            };
            i.loc.source = {
                body: '#import "twilight/features/video-preview-card/models/preview-card-video-fragment.gql"\nquery VideoSetShelf_Videos($channelLogin: String! $sort: VideoSort! $first: Int! $types: [BroadcastType!]) {\nuser(login: $channelLogin) {\nid\nvideos(first: $first sort: $sort types: $types) {\nedges {\nnode {\n...PreviewCardVideo\n}\n}\n}\n}\n}',
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
        daWW: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                a = n("q1tI"),
                r = n("GFmA"),
                o = n("PfQt"),
                l = n("GnwI"),
                s = n("RXle"),
                d = n("L5dg"),
                c = n("Ue10"),
                p = function(e) {
                    var t = null,
                        n = null;
                    if (null === e.videos) t = a.createElement(d.a, {
                        placeholderCount: e.placeholderCount
                    });
                    else {
                        e.viewAllButtonProps && (n = a.createElement(o.a, i.__assign({}, e.viewAllButtonProps)));
                        var l = e.videos.map(function(t, n) {
                            return a.createElement(c.Ya, {
                                "data-a-target": "video-tower-card-" + n,
                                key: "video-" + n,
                                margin: {
                                    bottom: 2
                                }
                            }, a.createElement(s.VideoPreviewCard, {
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
                })(p);
            n.d(t, !1, function() {
                return p
            }), n.d(t, "a", function() {
                return u
            })
        },
        eqgM: function(e, t, n) {
            "use strict";
            var i, a, r = n("/MKj"),
                o = n("mrSG"),
                l = n("q1tI"),
                s = n("/7QA"),
                d = n("GnwI"),
                c = n("TSYQ"),
                p = n("17x9"),
                u = n("Ue10");
            n("A7Y/");
            var m = "carousel-content",
                v = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            currentElementIndex: 0,
                            hasBeenVisible: !1
                        }, t.moveCarouselToCardIndex = function(e) {
                            if (t.props.children && !(t.props.children.length <= 1)) {
                                var n = t.getNumberOfVisibleElements();
                                t.props.children.length < n || (e < t.props.children.length && e > t.props.children.length - n ? t.setState({
                                    currentElementIndex: t.props.children.length - n
                                }) : t.setState({
                                    currentElementIndex: e
                                }))
                            }
                        }, t.moveCarouselForward = function() {
                            if (!t.isForwardButtonDisabled() && t.props.children) {
                                var e = t.getNumberOfVisibleElements();
                                t.state.currentElementIndex + 2 * e > t.props.children.length ? t.setState({
                                    currentElementIndex: t.props.children.length - e
                                }) : t.setState({
                                    currentElementIndex: t.state.currentElementIndex + e
                                })
                            }
                        }, t.moveCarouselBackward = function() {
                            if (!t.isBackButtonDisabled()) {
                                var e = t.getNumberOfVisibleElements();
                                t.setState({
                                    currentElementIndex: Math.max(t.state.currentElementIndex - e, 0)
                                })
                            }
                        }, t.isForwardButtonDisabled = function() {
                            if (!t.carouselContainerRef) return !1;
                            if (t.props.children) {
                                var e = 0,
                                    n = t.carouselContainerRef.querySelector("[data-js-selector=" + m + "]");
                                return n && (e = n.childElementCount), t.getLastVisibleIndex() >= e
                            }
                            return !0
                        }, t.isBackButtonDisabled = function() {
                            return 0 === t.state.currentElementIndex
                        }, t.getLastVisibleIndex = function() {
                            return t.state.currentElementIndex + t.getNumberOfVisibleElements()
                        }, t.getNumberOfVisibleElements = function() {
                            var e = t.carouselContainerRef.getBoundingClientRect(),
                                n = e.left,
                                i = e.right - n,
                                a = t.getVideoCardEndPadding();
                            return Math.floor((i + a) / t.getChildWidth())
                        }, t.refHandler = function(e) {
                            return t.carouselContainerRef = e
                        }, t.getChildWidth = function() {
                            if (!t.carouselContainerRef) return 0;
                            var e = t.carouselContainerRef.querySelector("[data-js-selector=" + m + "]");
                            return e && e.children.length ? e.children[0].getBoundingClientRect().width : 0
                        }, t.getVideoCardEndPadding = function() {
                            var e = t.carouselContainerRef.querySelector("[data-js-selector=" + m + "]");
                            if (!e || 0 === e.children.length) return 0;
                            var n = window.getComputedStyle(e.children[0]).paddingRight || "";
                            return 2 * parseInt(n, 10) || 0
                        }, t.pixelOffset = function() {
                            return t.getChildWidth() * t.state.currentElementIndex * -1
                        }, t.transformString = function() {
                            return "translate3d(" + t.pixelOffset() + "px, 0px, 0px)"
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.componentDidMount = function() {
                        var e = this.context.registerReceiver;
                        e && (this.unregisterScrollHandler = e(this)), null !== this.props.children && this.checkVisible()
                    }, t.prototype.componentDidUpdate = function(e) {
                        null === e.children && null !== this.props.children && this.checkVisible(), (!e.options && this.props.options || e.options && this.props.options && this.props.options.videoIndex !== e.options.videoIndex) && this.moveCarouselToCardIndex(this.props.options.videoIndex)
                    }, t.prototype.componentWillUnmount = function() {
                        this.unregisterScrollHandler && this.unregisterScrollHandler()
                    }, t.prototype.render = function() {
                        return l.createElement(u.Qa, {
                            margin: {
                                y: 1
                            },
                            position: u.kb.Relative
                        }, l.createElement("div", {
                            className: "preview-card-carousel",
                            ref: this.refHandler
                        }, l.createElement(u.Ya, {
                            className: "preview-card-carousel__child-container",
                            overflow: u.db.Hidden,
                            position: u.kb.Relative,
                            fullWidth: !0,
                            "data-test-selector": "child-container"
                        }, l.createElement(u.Qa, {
                            margin: {
                                bottom: 1
                            }
                        }, l.createElement("div", {
                            className: "preview-card-carousel__body",
                            style: {
                                transform: this.transformString()
                            },
                            "data-test-selector": "carousel-body"
                        }, l.createElement(u.cc, {
                            noWrap: !0,
                            noGrow: !0,
                            childWidth: this.props.cardWidth || u.dc.Large,
                            gutterSize: u.ec.Small,
                            "data-js-selector": m
                        }, this.props.children)))), l.createElement(f, {
                            direction: h.DirectionPrevious,
                            disabled: !this.props.children || this.isBackButtonDisabled(),
                            onClickHandler: this.moveCarouselBackward
                        }), l.createElement(f, {
                            direction: h.DirectionNext,
                            disabled: !this.props.children || this.isForwardButtonDisabled(),
                            onClickHandler: this.moveCarouselForward
                        })))
                    }, t.prototype.checkVisible = function(e) {
                        this.props.children && this.props.children.length > 0 && !this.state.hasBeenVisible && function(e) {
                            if (!e) return !1;
                            var t = e.getBoundingClientRect(),
                                n = window.innerWidth,
                                i = window.innerHeight;
                            return !(t.right < 0 || t.bottom < 0 || t.left > n || t.top > i)
                        }(this.carouselContainerRef) && this.props.onFirstVisible()
                    }, t.contextTypes = {
                        registerReceiver: p.func
                    }, t
                }(l.Component),
                h = {
                    DirectionPrevious: "previous",
                    DirectionNext: "next"
                },
                g = ((i = {})[h.DirectionPrevious] = "previous", i[h.DirectionNext] = "next", i),
                k = ((a = {})[h.DirectionPrevious] = u.ub.AngleLeft, a[h.DirectionNext] = u.ub.AngleRight, a),
                f = function(e) {
                    var t, n = g[e.direction],
                        i = ((t = {})[h.DirectionPrevious] = Object(s.d)("previous", "CarouselNavButton"), t[h.DirectionNext] = Object(s.d)("next", "CarouselNavButton"), t),
                        a = c("preview-card-carousel__button", "preview-card-carousel__button--" + n, {
                            "preview-card-carousel__button--disabled": e.disabled
                        });
                    return l.createElement(u.Ya, {
                        className: "preview-card-carousel__nav",
                        display: u.X.Flex,
                        alignItems: u.f.Center,
                        position: u.kb.Absolute,
                        attachTop: !0,
                        attachLeft: e.direction && "previous" === e.direction,
                        attachRight: e.direction && "next" === e.direction,
                        fullHeight: !0
                    }, l.createElement(u.Fb, {
                        className: a,
                        position: u.kb.Relative,
                        display: u.X.Flex,
                        borderRadius: u.x.Medium,
                        background: e.disabled ? u.r.Base : void 0
                    }, l.createElement(u.Va, {
                        ariaLabel: i[e.direction],
                        blurAfterClick: !0,
                        "data-test-selector": n + "-button",
                        disabled: e.disabled,
                        onClick: e.onClickHandler,
                        type: u.Wa.Base,
                        borderRadius: u.x.Medium
                    }, l.createElement(u.Fb, {
                        color: u.O.Link,
                        display: u.X.InlineFlex,
                        padding: {
                            x: .5,
                            y: 2
                        }
                    }, l.createElement(u.La, {
                        asset: k[e.direction]
                    })))))
                },
                C = n("bdIb"),
                y = n("XEwr"),
                b = n("RXle"),
                S = 10,
                N = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            hasTrackedItemSectionLoad: !1
                        }, t.handleFirstVisible = function() {
                            if (!t.state.hasTrackedItemSectionLoad) {
                                for (var e = t.props.videos ? t.props.videos : [], n = [], i = [], a = 0, r = e; a < r.length; a++) {
                                    var l = r[a];
                                    n.push(l.id), i.push(l.viewCount || 0)
                                }
                                s.o.trackItemSectionLoad(o.__assign({
                                    carousel_content: t.props.tracking.content,
                                    location: t.props.tracking.location,
                                    rendered_item_count: e.length,
                                    rendered_item_list: n,
                                    rendered_item_types: [t.props.tracking.itemType],
                                    rendered_items_viewcounts: i
                                }, t.props.tracking.source)), t.setState({
                                    hasTrackedItemSectionLoad: !0
                                })
                            }
                        }, t.onPreviewCardClick = function(e) {
                            if (t.props.videos) {
                                var n = t.props.videos[e];
                                s.o.trackItemSectionClick(o.__assign({
                                    carousel_content: t.props.tracking.content,
                                    item_id: n.id,
                                    item_index: e,
                                    item_type: t.props.tracking.itemType,
                                    item_viewcount: n.viewCount,
                                    location: t.props.tracking.location
                                }, t.props.tracking.source)), t.props.scrollToCurrentlyWatching && t.props.videos.length > 0 && t.setCarouselOptions({
                                    videoIndex: e
                                })
                            }
                        }, t.setCarouselOptions = function(e) {
                            t.props.videos && t.props.videos.length > 0 && t.setState({
                                scrollToOptions: e
                            })
                        }, t.getCurrentlyWatchingVideoIndex = function() {
                            var e = 0;
                            if (t.props.videos && t.props.videos.length > 0)
                                for (var n = 0; n < t.props.videos.length; n++) {
                                    if (t.props.videos[n].id === t.props.currentlyWatchingVideoID) {
                                        e = n;
                                        break
                                    }
                                }
                            return e
                        }, t.getVideoCards = function() {
                            var e = t.props.videos;
                            if (null === e) {
                                for (var n = [], i = 0; i < S; i++) n.push(l.createElement(b.VideoPreviewCardPlaceholder, {
                                    key: "carousel-placeholder-" + i
                                }));
                                return n
                            }
                            var a = [];
                            if (t.props.spotlight) {
                                var r = l.createElement(b.VideoPreviewCard, {
                                    key: "spotlight",
                                    collectionID: t.props.collectionID,
                                    topBar: {
                                        title: t.props.spotlight.title,
                                        subTitle: t.props.spotlight.subTitle
                                    },
                                    context: t.props.listContext,
                                    tracking: {
                                        content: t.props.tracking.content,
                                        content_index: a.length,
                                        medium: t.props.tracking.medium
                                    },
                                    video: t.props.spotlight.card,
                                    hideTags: t.props.hideTags
                                });
                                a.push(r)
                            }
                            var o = a.length;
                            if (t.props.currentlyWatchingVideoID && t.props.renderCurrentlyWatchingCard && t.props.scrollToCurrentlyWatching)
                                for (var s = t.getCurrentlyWatchingVideoIndex(), d = 0; d < e.length; d++) {
                                    var c = e[d];
                                    t.props.firstPageLoaded || !(d < s || d > s + S) ? Object(y.a)(c) || a.push(l.createElement(b.VideoPreviewCard, {
                                        context: t.props.listContext,
                                        collectionID: t.props.collectionID,
                                        onClick: t.onPreviewCardClick,
                                        key: "video-" + d,
                                        tracking: {
                                            content: t.props.tracking.content,
                                            content_index: d,
                                            medium: t.props.tracking.medium
                                        },
                                        video: c,
                                        multipleVideoGameMarkersType: t.props.multipleVideoGameMarkersType,
                                        listPosition: t.getPositionLabel(d),
                                        topBar: t.getPositionBanner(d),
                                        hideDuration: t.willRenderPositionBanner(d),
                                        hideTags: t.props.hideTags
                                    })) : a.push(l.createElement(b.VideoPreviewCardPlaceholder, {
                                        key: "carousel-placeholder-" + d
                                    }))
                                } else
                                    for (d = 0; d < e.length; d++)
                                        if (d + o < S || t.props.firstPageLoaded) {
                                            c = e[d];
                                            if (Object(y.a)(c)) {
                                                if (c.slug === t.props.currentlyWatchingVideoID) continue;
                                                a.push(l.createElement(C.a, {
                                                    context: t.props.listContext,
                                                    onClick: t.onPreviewCardClick,
                                                    key: "video-" + d,
                                                    tracking: {
                                                        content: t.props.tracking.content,
                                                        content_index: o + d,
                                                        medium: t.props.tracking.medium
                                                    },
                                                    clip: c
                                                }))
                                            } else {
                                                if (c.id === t.props.currentlyWatchingVideoID && !t.props.renderCurrentlyWatchingCard) continue;
                                                a.push(l.createElement(b.VideoPreviewCard, {
                                                    context: t.props.listContext,
                                                    collectionID: t.props.collectionID,
                                                    onClick: t.onPreviewCardClick,
                                                    key: "video-" + d,
                                                    tracking: {
                                                        content: t.props.tracking.content,
                                                        content_index: o + d,
                                                        medium: t.props.tracking.medium
                                                    },
                                                    video: c,
                                                    multipleVideoGameMarkersType: t.props.multipleVideoGameMarkersType,
                                                    listPosition: t.getPositionLabel(d),
                                                    topBar: t.getPositionBanner(d),
                                                    hideDuration: t.willRenderPositionBanner(d),
                                                    hideTags: t.props.hideTags
                                                }))
                                            }
                                        } else a.push(l.createElement(b.VideoPreviewCardPlaceholder, {
                                            key: "carousel-placeholder-" + d
                                        }));
                            return a
                        }, t.getPositionBanner = function(e) {
                            if (t.props.renderPositionBanner && t.props.renderCurrentlyWatchingCard && t.props.videos) {
                                var n = t.getCurrentlyWatchingVideoIndex(),
                                    i = e === n,
                                    a = e === n + 1,
                                    r = Object(s.d)("{totalVideos, plural, one {{position} / # video} other {{position} / # videos}}", {
                                        position: e + 1,
                                        totalVideos: t.props.videos.length
                                    }, "VideoCarousel");
                                return i ? {
                                    title: Object(s.d)("Now playing", "VideoCarousel"),
                                    subTitle: r,
                                    selected: !0
                                } : a ? {
                                    title: Object(s.d)("Up next", "VideoCarousel"),
                                    subTitle: r
                                } : void 0
                            }
                        }, t.willRenderPositionBanner = function(e) {
                            if (!t.props.renderPositionBanner || !t.props.videos) return !1;
                            var n = t.getCurrentlyWatchingVideoIndex();
                            return e === n || e === n + 1
                        }, t.getPositionLabel = function(e) {
                            if (t.props.renderPositionLabel && !t.willRenderPositionBanner(e) && t.props.videos) return {
                                position: e + 1,
                                totalVideos: t.props.videos.length
                            }
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.videos && this.props.scrollToCurrentlyWatching && this.props.currentlyWatchingVideoID && !this.state.scrollToOptions && this.setCarouselOptions({
                            videoIndex: this.getCurrentlyWatchingVideoIndex()
                        })
                    }, t.prototype.componentDidUpdate = function(e) {
                        null === e.videos && null !== this.props.videos && this.props.scrollToCurrentlyWatching && this.props.currentlyWatchingVideoID ? this.setCarouselOptions({
                            videoIndex: this.getCurrentlyWatchingVideoIndex()
                        }) : this.props.videos && this.props.scrollToCurrentlyWatching && this.props.currentlyWatchingVideoID !== e.currentlyWatchingVideoID && this.setCarouselOptions({
                            videoIndex: this.getCurrentlyWatchingVideoIndex()
                        })
                    }, t.prototype.render = function() {
                        return l.createElement(v, {
                            options: this.state.scrollToOptions,
                            cardWidth: this.props.videoCardSize,
                            onFirstVisible: this.handleFirstVisible
                        }, this.getVideoCards())
                    }, t
                }(l.Component),
                w = Object(d.b)("VideoCarousel", {
                    autoReportInteractive: !0
                })(N);
            n.d(t, "a", function() {
                return T
            });
            var T = Object(r.connect)(function(e) {
                return {
                    firstPageLoaded: e.session.firstPageLoaded
                }
            })(w)
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
        gcyA: function(e, t, n) {
            "use strict";
            n.r(t);
            var i = n("Z57o");
            n.d(t, "ChannelVideosOverviewPresentation", function() {
                return i.b
            }), n.d(t, "ChannelVideosOverviewContent", function() {
                return i.a
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
        hkkJ: function(e, t, n) {
            "use strict";
            var i, a = n("mrSG"),
                r = n("q1tI"),
                o = n("/7QA"),
                l = n("GFmA"),
                s = n("DMoW"),
                d = n("tuvy"),
                c = n("GnwI"),
                p = n("NAv5");
            ! function(e) {
                e.KeepWatching = "keep-watching", e.WatchNext = "watch-next"
            }(i || (i = {}));
            var u = .8;
            var m = n("6h5w"),
                v = n("eqgM"),
                h = n("Ue10");
            n.d(t, "a", function() {
                return f
            });
            var g;
            ! function(e) {
                e.Metadata = "collection-metadata", e.PlayAllButton = "play-all-button", e.TitleLink = "collection-title-link"
            }(g || (g = {}));
            var k = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e, t = this.props.collection,
                            n = this.getCollectionVideos();
                        if (n && 0 === n.length) return null;
                        var a = 0,
                            c = t && t.type === s.p.SERIES && n && n.length >= 4;
                        if (t && n && c && Object(d.a)() && Object(d.c)()) {
                            var m = function(e) {
                                for (var t = e.items.edges, n = t.length, a = null, r = 0; r < t.length; r++) {
                                    var o = t[r];
                                    if (o) {
                                        var l = o.node,
                                            s = l.self && l.self.viewingHistory && l.self.viewingHistory;
                                        if (s && s.updatedAt && s.position)
                                            if (a) {
                                                var d = new Date(a.viewedAt),
                                                    c = new Date(s.updatedAt);
                                                Object(p.isAfter)(c, d) && (a = {
                                                    index: r,
                                                    value: l,
                                                    viewedAt: s.updatedAt,
                                                    viewingPosition: s.position
                                                })
                                            } else a = {
                                                index: r,
                                                value: l,
                                                viewedAt: s.updatedAt,
                                                viewingPosition: s.position
                                            }
                                    }
                                }
                                if (!a) return null;
                                if (a.viewingPosition / (a.value.lengthSeconds || 1 / 0) > u) {
                                    var m = a.index + 1;
                                    if (m < n) {
                                        var v = t[m];
                                        if (v && v.node) return {
                                            item: v.node,
                                            position: m,
                                            type: i.WatchNext
                                        }
                                    }
                                }
                                return {
                                    item: a.value,
                                    position: a.index,
                                    type: i.KeepWatching
                                }
                            }(t);
                            if (m && (e = {
                                    card: m.item,
                                    title: function(e) {
                                        switch (e) {
                                            case i.KeepWatching:
                                                return Object(o.d)("Continue Watching", "SeriesResumeRecommendation");
                                            case i.WatchNext:
                                                return Object(o.d)("Watch Next", "SeriesResumeRecommendation");
                                            default:
                                                return e
                                        }
                                    }(m.type)
                                }, a = m.position + 1), !e) e = {
                                card: n[n.length - 1],
                                title: Object(o.d)("Latest Video", "CollectionCarousel")
                            }, a = n.length;
                            e.subTitle = Object(o.d)("{totalVideos, plural, one {{position} / # video} other {{position} / # videos}}", {
                                position: a,
                                totalVideos: n.length
                            }, "CollectionCarousel")
                        }
                        return r.createElement(r.Fragment, null, this.renderCarouselHeader(), r.createElement(v.a, {
                            collectionID: t ? t.id : void 0,
                            listContext: l.b.SingleChannelList,
                            multipleVideoGameMarkersType: this.props.multipleVideoGameMarkersType,
                            spotlight: e,
                            tracking: {
                                content: this.props.tracking.content,
                                medium: this.props.tracking.medium,
                                location: this.props.tracking.location,
                                source: this.props.tracking.source,
                                itemType: this.props.tracking.itemType
                            },
                            videos: n,
                            renderPositionLabel: !!e
                        }))
                    }, t.prototype.renderCarouselHeader = function() {
                        var e = this.props.collection;
                        return e ? r.createElement(h.Ya, null, r.createElement(h.Ya, {
                            display: h.X.Flex,
                            flexDirection: h.Aa.Row
                        }, r.createElement(h.Ya, {
                            margin: {
                                right: 1
                            }
                        }, r.createElement(h.U, {
                            "data-test-selector": g.TitleLink,
                            to: "/collections/" + e.id,
                            type: h.V.Inherit
                        }, r.createElement(m.a, {
                            titleMessage: e.title || this.props.fallbackTitle || ""
                        }))), !Object(d.a)() && r.createElement(h.z, {
                            type: h.F.Hollow,
                            size: h.D.Small,
                            icon: h.ub.Play,
                            linkTo: "/collections/" + e.id,
                            "data-test-selector": g.PlayAllButton
                        }, Object(o.d)("Play all", "LatestCollectionCarousel"))), r.createElement(h.W, {
                            color: h.O.Alt2,
                            type: h.Wb.Span,
                            "data-test-selector": g.Metadata
                        }, this.renderSubTitle(e))) : r.createElement(h.jb, {
                            width: 250,
                            lineCount: 1
                        })
                    }, t.prototype.renderSubTitle = function(e) {
                        var t = e.items ? e.items.totalCount : 0,
                            n = Object(o.d)("{videoCountText, plural, one {# video} other {# videos}}", {
                                videoCountText: t
                            }, "LatestCollectionCarousel");
                        return this.props.subTitle ? r.createElement(r.Fragment, null, this.props.subTitle, " · ", n) : e.description ? r.createElement(r.Fragment, null, e.description, " · ", n) : n
                    }, t.prototype.getCollectionVideos = function() {
                        var e = this.props.collection;
                        if (!e) return null;
                        var t = [];
                        return e.items.edges.forEach(function(e) {
                            e && "" !== e.node.id && t.push(e.node)
                        }), t
                    }, t
                }(r.Component),
                f = Object(c.b)("CollectionCarousel", {
                    autoReportInteractive: !0
                })(k)
        },
        izJ5: function(e, t, n) {
            var i = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "PreviewCollectionConnection"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "CollectionsConnection"
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
                                                value: "PreviewCollection"
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
                    end: 250
                }
            };
            i.loc.source = {
                body: '#import "twilight/features/video-carousel/components/collection-carousel/models/preview-collection-fragment.gql"\nfragment PreviewCollectionConnection on CollectionsConnection {\nedges {\ncursor\nnode {\n...PreviewCollection\n}\n}\npageInfo {\nhasNextPage\n}\n}',
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
            }(n("jr2J").definitions)), e.exports = i
        },
        jr2J: function(e, t, n) {
            var i = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "PreviewCollection"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Collection"
                        }
                    },
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "FragmentSpread",
                            name: {
                                kind: "Name",
                                value: "CollectionFields"
                            },
                            directives: []
                        }, {
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
                                    kind: "IntValue",
                                    value: "30"
                                }
                            }],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "FragmentSpread",
                                    name: {
                                        kind: "Name",
                                        value: "CollectionConnectionFields"
                                    },
                                    directives: []
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 350
                }
            };
            i.loc.source = {
                body: '#import "twilight/features/video-carousel/components/collection-carousel/models/collection-fields-fragment.gql"\n#import "twilight/features/video-carousel/components/collection-carousel/models/collection-connection-fields-fragment.gql"\nfragment PreviewCollection on Collection {\n...CollectionFields\nitems (first:30) {\n...CollectionConnectionFields\n}\n}',
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
            i.definitions = i.definitions.concat(r(n("msok").definitions)), i.definitions = i.definitions.concat(r(n("+Vfn").definitions)), e.exports = i
        },
        "kF1+": function(e, t, n) {},
        kVMo: function(e, t, n) {},
        m493: function(e, t, n) {},
        msok: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "CollectionFields"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Collection"
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
                                value: "updatedAt"
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
                    end: 221
                }
            };
            n.loc.source = {
                body: "fragment CollectionFields on Collection {\nid\ndescription\nowner {\nid\nlogin\n}\nthumbnailURL(width: 320 height: 180) # only used for legacy CollectionCard\ntitle\ntype\nupdatedAt\nviewCount # only used for legacy CollectionCard\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        nPIx: function(e, t, n) {},
        pfAL: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return g
            });
            var i = n("mrSG"),
                a = n("q1tI"),
                r = n("fvjX"),
                o = n("/7QA"),
                l = n("GFmA"),
                s = n("yR8l"),
                d = n("vRsq"),
                c = n("2xye"),
                p = n("GnwI"),
                u = n("6h5w"),
                m = n("eqgM"),
                v = n("9kuA"),
                h = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return !this.props.data || this.props.data.loading ? this.renderCarousel(null) : !this.props.data.user || this.props.data.error ? null : this.renderCarousel(this.props.data.user)
                    }, t.prototype.renderCarousel = function(e) {
                        var t = e ? this.parseClips(e) : null;
                        if (t && 0 === t.length) return null;
                        var n = this.props.channelLogin && this.props.includeExpandTitleLink ? {
                            channelLogin: this.props.channelLogin,
                            options: {
                                filter: d.e.Clips,
                                range: this.props.criteria.range
                            }
                        } : void 0;
                        return a.createElement("div", null, a.createElement(u.a, {
                            expandLink: n,
                            titleMessage: this.getTitle()
                        }), a.createElement(m.a, {
                            currentlyWatchingVideoID: this.props.currentlyWatchingClipSlug,
                            listContext: l.b.SingleChannelList,
                            tracking: {
                                content: c.PageviewContent.ClipsCuratorCarousel,
                                medium: this.props.tracking.medium,
                                location: this.props.tracking.location,
                                source: this.getTrackingSource(),
                                itemType: c.TwitchDataType.Clip
                            },
                            videos: t
                        }))
                    }, t.prototype.getTitle = function() {
                        return this.props.omitCreatorInTitle || !this.props.data ? Object(o.d)("Top Clips", "RecentBroadcasterClipsCarousel") : this.props.data.user && this.props.data.user.displayName ? Object(o.d)("Top Clips from {broadcaster}", {
                            broadcaster: this.props.data.user.displayName
                        }, "RecentBroadcasterClipsCarousel") : null
                    }, t.prototype.getTrackingSource = function() {
                        return this.props.channelLogin ? {
                            source_channel: this.props.channelLogin,
                            source_item_type: c.TwitchDataType.Channel
                        } : {
                            source_channel: "",
                            source_item_type: c.TwitchDataType.Channel
                        }
                    }, t.prototype.parseClips = function(e) {
                        if (!e || !e.clips || !e.clips.edges || 0 === e.clips.edges.length) return [];
                        var t = [];
                        return e.clips.edges.forEach(function(e) {
                            e && e.node && e.node.id && t.push(e.node)
                        }), t
                    }, t
                }(a.Component),
                g = Object(r.compose)(Object(s.a)(v, {
                    options: function(e) {
                        return {
                            variables: {
                                channelLogin: e.channelLogin,
                                limit: e.criteria.limit,
                                criteria: {
                                    period: Object(d.l)(e.criteria.range)
                                }
                            }
                        }
                    },
                    skip: function(e) {
                        return !e.channelLogin
                    }
                }), Object(p.b)("RecentBroadcasterClipsCarousel", {
                    autoReportInteractive: !0
                }))(h)
        },
        vDRX: function(e, t, n) {},
        xwKp: function(e, t, n) {
            var i = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ChannelVideoShelvesQuery"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "channelLogin"
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
                                value: "first"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Int"
                                }
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
                                        value: "channelLogin"
                                    }
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
                                        value: "videoShelves"
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
                                                value: "first"
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
                                                    kind: "FragmentSpread",
                                                    name: {
                                                        kind: "Name",
                                                        value: "VideoShelfEdge"
                                                    },
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
                                        }, {
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
                }, {
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "VideoShelfEdge"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "VideoShelfEdge"
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
                                    kind: "Field",
                                    name: {
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
                                        value: "description"
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
                                        value: "collection"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "id"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "items"
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
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "items"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "ShelfPreviewCardClip"
                                            },
                                            directives: []
                                        }, {
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
                }, {
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "ShelfPreviewCardClip"
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
                            alias: {
                                kind: "Name",
                                value: "clipViewCount"
                            },
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
                            alias: {
                                kind: "Name",
                                value: "clipGame"
                            },
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
                                            value: "52"
                                        }
                                    }, {
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "height"
                                        },
                                        value: {
                                            kind: "IntValue",
                                            value: "72"
                                        }
                                    }],
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
                                value: "durationSeconds"
                            },
                            arguments: [],
                            directives: []
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 786
                }
            };
            i.loc.source = {
                body: '#import "twilight/features/video-preview-card/models/preview-card-video-fragment.gql"\nquery ChannelVideoShelvesQuery($channelLogin: String! $first: Int! $cursor: Cursor) {\nuser(login: $channelLogin) {\nid\nvideoShelves(first: $first after: $cursor) {\nedges {\n...VideoShelfEdge\n}\npageInfo {\nhasNextPage\n}\ntotalCount\n}\n}\n}\nfragment VideoShelfEdge on VideoShelfEdge {\ncursor\nnode {\nid\ntitle\ndescription\ntype\ncollection {\nid\nitems {\ntotalCount\n}\n}\nitems {\n...ShelfPreviewCardClip\n...PreviewCardVideo\n}\n}\n}\nfragment ShelfPreviewCardClip on Clip {\nid\nslug\nclipTitle: title\nclipViewCount: viewCount\ncurator {\nid\nlogin\ndisplayName\n}\nclipGame: game {\nid\nname\nboxArtURL(width: 52 height: 72)\n}\nbroadcaster {\nid\nlogin\ndisplayName\nprofileImageURL(width: 50)\n}\nthumbnailURL\ncreatedAt\ndurationSeconds\n}',
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
        }
    }
]);