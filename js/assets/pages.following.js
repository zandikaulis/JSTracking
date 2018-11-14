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
                        var t, n, s, d, c, u = this;
                        return i.__generator(this, function(m) {
                            switch (m.label) {
                                case 0:
                                    return m.trys.push([0, 2, , 3]), t = e.map(function(e) {
                                        return i.__awaiter(u, void 0, void 0, function() {
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
                                    return n = m.sent(), s = n.filter(function(e) {
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
                                    return m.sent(), [3, 3];
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
                    r = parseFloat(a) / i;
                return Math.floor(e / (t * r)) * n
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
                r = n("HSqT"),
                o = n("+U0Y"),
                l = "languageDirectoryFilters";

            function s(e, t) {
                var n = this;
                return function(r) {
                    return i.__awaiter(n, void 0, void 0, function() {
                        var n, s;
                        return i.__generator(this, function(i) {
                            return n = new Set(c()), t ? n.add(e) : n.delete(e), s = Array.from(n), a.m.set(l, s), r(Object(o.b)(s)), [2]
                        })
                    })
                }
            }

            function d() {
                var e = this;
                return function(t) {
                    return i.__awaiter(e, void 0, void 0, function() {
                        return i.__generator(this, function(e) {
                            return a.m.set(l, []), t(Object(o.b)([])), [2]
                        })
                    })
                }
            }

            function c() {
                return a.m.get(l, []).filter(function(e) {
                    return r.a.has(e)
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

            function l(e, t) {
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
                    u = Object.keys(c);
                if (u.forEach(function(e, n) {
                        t !== a.Humanized && t !== a.HumanizedShort || c[e] || delete c[e], n < u.length - s && delete c[e]
                    }), t === a.Humanized) return function(e) {
                    return e.months ? o(i.Month, e.months) : e.weeks && e.days ? o(i.Week, e.weeks) + " " + o(i.Day, e.days) : e.weeks ? o(i.Week, e.weeks) : e.days && e.hours ? o(i.Day, e.days) + " " + o(i.Hour, e.hours) : e.days ? o(i.Day, e.days) : e.hours && e.minutes ? o(i.Hour, e.hours) + " " + o(i.Minute, e.minutes) : e.hours ? o(i.Hour, e.hours) : e.minutes && e.seconds ? o(i.Minute, e.minutes) + " " + o(i.Second, e.seconds) : e.minutes ? o(i.Minute, e.minutes) : o(i.Second, e.seconds || 0)
                }(c);
                if (t === a.HumanizedShort) return function(e) {
                    return e.months ? l(i.Month, e.months) : e.weeks && e.days ? "" + l(i.Week, e.weeks) + l(i.Day, e.days) : e.weeks ? l(i.Week, e.weeks) : e.days && e.hours ? "" + l(i.Day, e.days) + l(i.Hour, e.hours) : e.days ? l(i.Day, e.days) : e.hours && e.minutes ? "" + l(i.Hour, e.hours) + l(i.Minute, e.minutes) : e.hours ? l(i.Hour, e.hours) : e.minutes && e.seconds ? "" + l(i.Minute, e.minutes) + l(i.Second, e.seconds) : e.minutes ? l(i.Minute, e.minutes) : l(i.Second, e.seconds || 0)
                }(c);
                var m = ":",
                    p = !1;
                switch (r.p.intl.getLanguageCode()) {
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
                    v = c.minutes || 0,
                    h = c.hours || 0;
                switch (t) {
                    case a.ClockHM:
                    case a.ClockHMS:
                        var f = (p ? d(h, 2) : h) + m + d(v, 2);
                        return t === a.ClockHMS && (f += m + d(g, 2)), f;
                    case a.ClockMS:
                        return (p ? d(v, 2) : v) + m + d(g, 2)
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
                r = n("H1ft"),
                o = n("SWMh"),
                l = n("cr+I"),
                s = n("/7QA"),
                d = n("GFmA"),
                c = n("0INk"),
                u = n("yWUM"),
                m = n("vRsq"),
                p = n("2xye"),
                g = n("GnwI"),
                v = n("4HIT"),
                h = function(e) {
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
                                        search: l.stringify(n),
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
                        var e = {
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
                                src: this.props.video.game && this.props.video.game.boxArtURL || s.a.defaultBoxArtURL,
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
                                linkPath: v.a.PopularTag
                            } : void 0
                        };
                        return a.createElement(d.a, i.__assign({}, e))
                    }, t.prototype.generateSearchString = function() {
                        var e = {};
                        this.props.collectionID && (e.collection = this.props.collectionID);
                        var t = l.stringify(e);
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
                f = Object(g.b)("VideoPreviewCard", {
                    autoReportInteractive: !0
                })(h);
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
                    this.props.multipleVideoGameMarkersType && this.props.multipleVideoGameMarkersType !== r.a.None && !this.promise && this.maybeFetchVideoMarkers(this.props.video.id, this.props.video.lengthSeconds || 0)
                }, t
            }(a.Component)
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
                a.o.track(r.SpadeEventType.BrowseFilter, t)
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
                r = n("q1tI"),
                o = n("/7QA"),
                l = n("vSJR"),
                s = n("sLlB"),
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
                        return r.createElement(u.Ya, {
                            alignItems: u.f.End,
                            display: u.X.Flex,
                            flexDirection: u.Aa.Row,
                            fullWidth: !0,
                            justifyContent: u.Xa.Between
                        }, r.createElement(u.Ya, {
                            display: u.X.Flex,
                            flexDirection: u.Aa.Row
                        }, this.renderLanguageSelector(), r.createElement(l.a, {
                            buttonLabel: this.getBroadcastTypeLabel(this.props.broadcastType),
                            "data-test-selector": i.Button,
                            "data-a-target": "video-type-filter-dropdown",
                            hideDropdownOnInsideClick: !0
                        }, this.renderInteractables())), r.createElement("div", null, this.renderSortSelector()))
                    }, t.prototype.renderInteractables = function() {
                        return r.createElement(r.Fragment, null, r.createElement(u.Va, {
                            "data-a-target": "video-type-filter-all",
                            "data-filter-type": "all",
                            "data-test-selector": i.FilterItemAll,
                            onClick: this.typeChangeHandler,
                            selected: !1
                        }, r.createElement(u.Ya, {
                            display: u.X.Flex,
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, this.getBroadcastTypeLabel(), this.renderCheckmark())), r.createElement(u.Va, {
                            "data-a-target": "video-type-filter-past-premieres",
                            "data-filter-type": d.a.PastPremiere,
                            "data-test-selector": i.FilterItemPastPremiere,
                            onClick: this.typeChangeHandler,
                            selected: !1
                        }, r.createElement(u.Ya, {
                            display: u.X.Flex,
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, this.getBroadcastTypeLabel(d.a.PastPremiere), this.renderCheckmark(d.a.PastPremiere))), r.createElement(u.Va, {
                            "data-a-target": "video-type-filter-past-broadcasts",
                            "data-filter-type": d.a.Archive,
                            "data-test-selector": i.FilterItemArchive,
                            onClick: this.typeChangeHandler,
                            selected: !1
                        }, r.createElement(u.Ya, {
                            display: u.X.Flex,
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, this.getBroadcastTypeLabel(d.a.Archive), this.renderCheckmark(d.a.Archive))), r.createElement(u.Va, {
                            "data-a-target": "video-type-filter-highlights",
                            "data-filter-type": d.a.Highlight,
                            "data-test-selector": i.FilterItemHighlight,
                            onClick: this.typeChangeHandler,
                            selected: !1
                        }, r.createElement(u.Ya, {
                            display: u.X.Flex,
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, this.getBroadcastTypeLabel(d.a.Highlight), this.renderCheckmark(d.a.Highlight))), r.createElement(u.Va, {
                            "data-a-target": "video-type-filter-uploads",
                            "data-filter-type": d.a.Upload,
                            "data-test-selector": i.FilterItemUpload,
                            onClick: this.typeChangeHandler,
                            selected: !1
                        }, r.createElement(u.Ya, {
                            display: u.X.Flex,
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, this.getBroadcastTypeLabel(d.a.Upload), this.renderCheckmark(d.a.Upload))))
                    }, t.prototype.renderCheckmark = function(e) {
                        return this.props.broadcastType === e ? r.createElement(u.Ya, {
                            attachRight: !0,
                            position: u.kb.Absolute,
                            margin: {
                                right: 1
                            }
                        }, r.createElement(u.tb, {
                            asset: u.ub.Check,
                            height: 18,
                            width: 18
                        })) : null
                    }, t.prototype.renderLanguageSelector = function() {
                        return this.props.hideLanguageSelector ? null : r.createElement(u.Ya, {
                            margin: {
                                right: 0
                            }
                        }, r.createElement(s.a, null))
                    }, t.prototype.renderSortSelector = function() {
                        if (this.props.hideSortSelector) return null;
                        var e = this.props.selectedSort && Object(c.b)(this.props.selectedSort) || c.a.Newest,
                            t = r.createElement(u.Ab, {
                                "data-a-target": "video-sort-select",
                                "data-test-selector": i.SortSelector,
                                name: "sort",
                                onChange: this.sortChangeHandler,
                                size: u.Ta.Large,
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
                        return r.createElement(u.Ya, {
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
                o = n("5zf8"),
                l = n("Ue10"),
                s = (n("Fj9y"), function(e) {
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
                u = n("eJ65"),
                m = (n("vDRX"), function(e) {
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
                        }, a.createElement(u.a, {
                            key: "game-balloon",
                            display: l.X.Inline,
                            onToggle: this.onBalloonToggle
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
                                key: t.props.videoID + "-" + e.offset,
                                videoID: t.props.videoID,
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
                f = n("N0BP"),
                k = (n("XA5B"), function(e) {
                    var t = a.createElement(l.Fb, {
                        className: "preview-card-iconic-image__wrapper",
                        borderRadius: l.x.Small,
                        overflow: l.db.Hidden
                    }, a.createElement(l.o, {
                        ratio: e.aspect || l.p.BoxArt,
                        align: l.d.Center
                    }, a.createElement(l.S, i.__assign({}, e.imageProps))));
                    return e.linkTo && (t = a.createElement(l.U, i.__assign({}, Object(f.a)(e), {
                        to: e.linkTo,
                        onClick: e.onClick
                    }), t)), t
                });
            k.displayName = "PreviewCardIconicImage";
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
                C = (n("m493"), function(e) {
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
                    }, a.createElement(y, i.__assign({}, e.topBar))), r = 3), a.createElement(l.Ya, {
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
                S = (n("kF1+"), function(e) {
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
                _ = (n("80G/"), function(e) {
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
                    })), a.createElement("div", null, a.createElement(l.U, i.__assign({}, Object(f.a)(e), {
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
                L = n("H1ft"),
                T = n("ZbA5"),
                I = n("QVaV"),
                x = n("hyVY"),
                O = n("MXoD"),
                A = n("0LAi");
            ! function(e) {
                e.LockSelector = "video-lock", e.UpsellSelector = "upsell"
            }(b || (b = {}));
            var P, D, G = function(e) {
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
                        "data-test-selector": b.LockSelector
                    }, a.createElement(l.Qa, {
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(l.W, {
                        color: l.O.Overlay,
                        fontSize: l.Ca.Size5,
                        "data-test-selector": b.UpsellSelector
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

            function U(e) {
                return void 0 !== e.watchedProgressPercent
            }

            function j(e) {
                return void 0 !== e.clipCreatedByChannelLogin
            }! function(e) {
                e.Avatar = "preview-card-avatar", e.BoxArt = "preview-card-box-art"
            }(P || (P = {})),
            function(e) {
                e[e.SingleGameList = 1] = "SingleGameList", e[e.SingleChannelList = 2] = "SingleChannelList", e[e.MixedGameAndChannelList = 3] = "MixedGameAndChannelList"
            }(D || (D = {}));
            var V = function(e) {
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
                        }, Object(f.a)(this.props)), a.createElement(l.Fb, {
                            position: l.kb.Relative,
                            borderRadius: l.x.Medium,
                            overflow: l.db.Hidden
                        }, this.renderVODRestrictionOverlay(), a.createElement(l.U, {
                            to: Object(O.a)(this.getTrackingContext(g.PageviewContent.VideoThumbnail), this.props.linkTo),
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
                        }(this.props) ? a.createElement(C, {
                            topLeft: a.createElement(T.a, {
                                type: this.props.streamType,
                                hosting: !!this.props.hostedByChannelLogin
                            }),
                            topRight: void 0,
                            bottomLeft: a.createElement(S, {
                                value: Object(r.d)("{viewerCount, plural, one {# viewer} other {# viewers}}", {
                                    viewerCount: this.props.currentViewerCount
                                }, "VideoPreviewCard")
                            }),
                            bottomRight: void 0
                        }) : U(this.props) ? a.createElement(C, {
                            topLeft: void 0 !== this.props.durationInSeconds && a.createElement(S, {
                                value: Object(x.b)(this.props.durationInSeconds),
                                icon: l.ub.Play,
                                withBackground: !0
                            }),
                            topRight: this.props.listPosition && a.createElement(S, {
                                withBackground: !0,
                                value: this.getListPositionLabel()
                            }),
                            bottomLeft: a.createElement(S, {
                                value: this.getViewCountLabel()
                            }),
                            bottomRight: this.props.datePublished ? a.createElement(S, {
                                value: Object(r.c)(new Date(this.props.datePublished), "medium")
                            }) : null,
                            progressBarPercent: this.props.watchedProgressPercent,
                            topBar: this.props.topBar
                        }) : j(this.props) ? a.createElement(C, {
                            topLeft: a.createElement(S, {
                                value: Object(x.b)(this.props.durationInSeconds),
                                icon: l.ub.Clip,
                                withBackground: !0
                            }),
                            topRight: void 0,
                            bottomLeft: a.createElement(S, {
                                value: this.getViewCountLabel()
                            }),
                            bottomRight: this.props.datePublished ? a.createElement(S, {
                                value: Object(r.c)(new Date(this.props.datePublished), "medium")
                            }) : null
                        }) : void 0
                    }, t.prototype.getListPositionLabel = function() {
                        return U(this.props) && this.props.listPosition ? Object(r.d)("{totalVideos, plural, one {{position} / # video} other {{position} / # videos}}", {
                            position: this.props.listPosition.position,
                            totalVideos: this.props.listPosition.totalVideos
                        }, "VideoPreviewCard") : ""
                    }, t.prototype.getViewCountLabel = function() {
                        return U(this.props) || j(this.props) ? Object(r.d)("{viewerCount, plural, one {# view} other {# views}}", {
                            viewerCount: this.props.viewCount
                        }, "VideoPreviewCard") : ""
                    }, t.prototype.renderIconicImage = function() {
                        return this.props.context === D.SingleChannelList && this.props.gameBoxArtImageProps && this.props.gameBoxArtImageProps.src && this.props.gameTitleLinkTo ? a.createElement(l.Ya, {
                            margin: {
                                right: 1
                            }
                        }, a.createElement(k, {
                            imageProps: this.props.gameBoxArtImageProps,
                            linkTo: Object(O.a)(this.getTrackingContext(g.PageviewContent.GameBoxart), this.props.gameTitleLinkTo),
                            onClick: this.props.onGameTitleClick,
                            aspect: l.p.BoxArt,
                            "data-test-selector": P.BoxArt,
                            "data-a-target": "preview-card-boxart-link"
                        })) : (this.props.context === D.SingleGameList || this.props.context === D.MixedGameAndChannelList) && this.props.channelImageProps && this.props.channelImageProps.src ? a.createElement(l.Ya, {
                            margin: {
                                right: 1
                            }
                        }, a.createElement(k, {
                            imageProps: this.props.channelImageProps,
                            linkTo: Object(O.a)(this.getTrackingContext(g.PageviewContent.UserThumbnail), this.props.channelLinkTo),
                            onClick: this.props.onChannelImageClick || this.props.onChannelLoginClick,
                            aspect: l.p.Aspect1x1,
                            "data-test-selector": P.Avatar
                        })) : void 0
                    }, t.prototype.renderTitles = function() {
                        var e = null,
                            t = [];
                        return this.shouldShowGameBalloon(this.props) || t.push({
                            text: Object(I.a)(this.props.channelLogin, this.props.channelDisplayName, !0),
                            linkTo: Object(O.a)(this.getTrackingContext(g.PageviewContent.ChannelMetadata), this.props.channelLinkTo),
                            onClick: this.props.onChannelLoginClick,
                            automationSelector: "preview-card-channel-link"
                        }), j(this.props) && this.props.clipCreatedByChannelLoginLinkTo ? t.push({
                            text: Object(r.d)("Clipped by {userName}", {
                                userName: this.props.clipCreatedByChannelLogin || ""
                            }, "VideoPreviewCard"),
                            linkTo: this.props.clipCreatedByChannelLoginLinkTo,
                            onClick: this.props.onClipCreatedByChannelLoginClick,
                            automationSelector: "preview-card-clip-curator-link"
                        }) : U(this.props) && this.props.multipleVideoGameMarkersType && this.props.videoGameChanges && this.props.videoGameChanges.length > 0 ? e = this.renderPreviewCardGameInfo(this.props.multipleVideoGameMarkersType, this.props.videoGameChanges, this.props.onVideoGameBalloonClick, this.props.onVideoGameBalloonItemClick) : this.props.context !== D.SingleGameList && this.props.gameTitle && this.props.gameTitleLinkTo && t.push({
                            text: this.props.gameTitle,
                            linkTo: Object(O.a)(this.getTrackingContext(g.PageviewContent.GameMetadata), this.props.gameTitleLinkTo),
                            onClick: this.props.onGameTitleClick,
                            automationSelector: "preview-card-game-link"
                        }), a.createElement(a.Fragment, null, a.createElement(_, {
                            title: this.props.title,
                            onClick: this.props.onVideoTitleClick || this.props.onClick,
                            linkTo: Object(O.a)(this.getTrackingContext(g.PageviewContent.VideoTitle), this.props.linkTo),
                            subtitles: t,
                            "data-a-target": "preview-card-title-link"
                        }), e)
                    }, t.prototype.renderTags = function() {
                        return this.props.tagListProps && 0 !== this.props.tagListProps.tags.length ? a.createElement(l.Ya, {
                            margin: {
                                top: .5
                            }
                        }, a.createElement(A.a, i.__assign({}, this.props.tagListProps, {
                            tagNumberLimit: 3
                        }))) : null
                    }, t.prototype.renderVODRestrictionOverlay = function() {
                        return U(this.props) && this.props.restriction && this.props.restriction.productName && this.props.restriction.title ? a.createElement(G, {
                            restriction: this.props.restriction,
                            attachTop: !0
                        }) : null
                    }, t.prototype.shouldShowGameBalloon = function(e) {
                        return !!U(e) && (!!(e.videoGameChanges && e.videoGameChanges.length > 0) && e.multipleVideoGameMarkersType === L.a.Balloon)
                    }, t.prototype.renderPreviewCardGameInfo = function(e, t, n, i) {
                        switch (e) {
                            case L.a.Balloon:
                                return a.createElement(m, {
                                    videoGameChanges: t,
                                    videoID: t[0].videoID,
                                    onBalloonClick: n,
                                    onBalloonItemClick: i
                                });
                            case L.a.Inline:
                                return a.createElement(v, {
                                    videoGameChanges: t,
                                    trackingContext: this.props.trackingContext
                                });
                            case L.a.None:
                                return null;
                            default:
                                return e
                        }
                    }, t
                }(a.Component),
                R = Object(N.b)("PreviewCard", {
                    autoReportInteractive: !0
                })(V);
            n.d(t, !1, function() {
                return P
            }), n.d(t, "b", function() {
                return D
            }), n.d(t, !1, function() {
                return V
            }), n.d(t, "a", function() {
                return R
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
                switch (a.p.experiments.getAssignment(r.b.Archer)) {
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

            function l() {
                var e = i.p.intl.getLanguageCode(),
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
                return r
            }), n.d(t, "d", function() {
                return o
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
                r = "directory.TAG_FILTER_CHANGED",
                o = "directory.TAG_FILTER_REMOVED";

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
                    type: r,
                    categoryName: t,
                    tagFilters: e
                }
            }

            function c(e, t) {
                return {
                    type: o,
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
                        return t.logger = r.p.logger.withCategory("resize-detector"), t.onScroll = function() {
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
                return l
            });
            var i = n("mrSG"),
                a = n("/7QA"),
                r = n("+U0Y"),
                o = n("5xw2");

            function l(e) {
                return e.userPreferences.languagePreferences
            }
            a.p.store.registerReducer("userPreferences", function(e, t) {
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
                r = n("1/iK"),
                o = n("y5D0"),
                l = n("kRBY"),
                s = n("mrSG"),
                d = n("q1tI"),
                c = n("4p7I"),
                u = n("yoKv"),
                m = n("/7QA"),
                p = n("ZDlU"),
                g = n("GnwI"),
                v = n("Bh3T"),
                h = n("yR8l"),
                f = n("V+GM"),
                k = n("DMoW"),
                b = n("NvVO"),
                w = n("2xye"),
                y = n("Ue10"),
                C = n("bp79"),
                S = function(e) {
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
                            }, Object(m.d)("Overview", "FollowingHeaderTabs")), d.createElement(y.Gb, {
                                key: "following-channels-tab",
                                active: e === w.SpadeFollowingCategory.Live,
                                "data-a-target": "following-channels-tab",
                                linkTo: "/directory/following/live"
                            }, Object(m.d)("Channels", "FollowingHeaderTabs")), d.createElement(y.Gb, {
                                key: "following-hosts-tab",
                                active: e === w.SpadeFollowingCategory.Hosts,
                                "data-a-target": "following-hosts-tab",
                                linkTo: "/directory/following/hosts"
                            }, Object(m.d)("Hosts", "FollowingHeaderTabs")), d.createElement(y.Gb, {
                                key: "following-games-tab",
                                active: e === w.SpadeFollowingCategory.Games,
                                "data-a-target": "following-games-tab",
                                linkTo: "/directory/following/games"
                            }, Object(m.d)("Games", "FollowingHeaderTabs"))];
                        return d.createElement(y.Ya, {
                            className: "following__header-tabs",
                            margin: {
                                bottom: 2
                            }
                        }, d.createElement(y.Hb, null, t))
                    }, t = s.__decorate([Object(g.b)("FollowingHeaderTabs"), Object(h.a)(C)], t)
                }(d.Component),
                N = n("aCAx"),
                F = n("cZKs"),
                E = n("8/mp"),
                _ = n("qyxT"),
                L = n("yziQ"),
                T = n("xugo"),
                I = (n("nrVK"), function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.state = {
                            followCount: 0
                        }, n.getAndStoreShuffledGameCards = function() {
                            n.props.data && n.props.data.games && n.props.data.games.edges && (n.shuffledGameCards = Object(_.a)(n.props.data.games.edges.map(function(e, t) {
                                var i = e.node;
                                return i && i.id ? d.createElement(y.Ya, {
                                    key: i.id
                                }, d.createElement(L.a, {
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
                            n.props.onContinue && n.props.onContinue(), m.p.store.dispatch(Object(N.c)())
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
                        }, Object(m.d)("Choose some games that you'd like to follow.", "FollowGamesModal"))), d.createElement(y.W, {
                            fontSize: y.Ca.Size5,
                            color: y.O.Alt
                        }, Object(m.d)("This will let you pin your favorites for easy access.", "FollowGamesModal"))), d.createElement(y.Ya, {
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
                        }, Object(m.d)("Continue", "FollowGamesModal"))), d.createElement(F.a, {
                            closeOnBackdropClick: !0
                        })))
                    }, t
                }(d.Component)),
                x = Object(h.a)(T, {
                    options: {
                        variables: {
                            limit: 40
                        }
                    }
                })(I),
                O = n("0JAG"),
                A = n("kduP"),
                P = n("PfQt"),
                D = n("oJov"),
                G = n("AZIu"),
                U = n("4HIT"),
                j = n("x/sq"),
                V = function(e) {
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
                        }, Object(m.d)("You can now follow your favorite games!", "LiveGames"))), d.createElement(y.Ya, {
                            margin: {
                                top: .5
                            }
                        }, d.createElement(y.z, {
                            size: y.D.Large,
                            onClick: this.props.showFollowGamesModal,
                            "data-a-target": "find-out-more-button"
                        }, Object(m.d)("Find Out More!", "LiveGames"))));
                        if (this.props.showSample && this.props.directoryWidth && this.props.directoryWidth > 0) {
                            var i = Object(O.a)(this.props.directoryWidth, 180, 1);
                            i < n.length && (n = n.slice(0, i - 1), t = d.createElement(y.Ya, {
                                margin: {
                                    bottom: 2
                                }
                            }, d.createElement(P.a, {
                                subHeader: "Live Games",
                                linkTo: "/directory/following/games",
                                aspectRatio: y.p.Aspect3x4
                            })))
                        }
                        var a = n.map(function(e, t) {
                            if (!e) return null;
                            var n = Object(j.a)({
                                tags: e.tags,
                                section: G.a.Categories
                            });
                            return d.createElement(y.Ya, {
                                key: e.id,
                                margin: {
                                    bottom: 2
                                }
                            }, d.createElement(D.a, {
                                linkTo: {
                                    pathname: Object(A.c)(e.name),
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
                            return Object(N.d)(x, {
                                onFollowChange: t.onFollowChange
                            })
                        }
                    }, e), t)
                })(V),
                H = n("XHSL"),
                B = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return s.__extends(t, e), t.prototype.componentDidMount = function() {
                        m.p.setPageTitle(Object(m.d)("Games You Follow", "FollowingGamesPage")), this.onRender()
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
                            message: Object(m.d)("Error loading data.", "FollowingGamesPage")
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
                        }, d.createElement(S, {
                            activeCategory: w.SpadeFollowingCategory.Games
                        }), e)
                    }, t.prototype.onRender = function() {
                        this.props.data.loading || this.props.latencyTracking.reportInteractive()
                    }, t
                }(d.Component),
                W = Object(a.compose)(Object(h.a)(H, {
                    options: {
                        fetchPolicy: "cache-and-network",
                        variables: {
                            limit: 100,
                            type: k.A.LIVE
                        }
                    }
                }), Object(g.b)("FollowingGamesPage", {
                    destination: b.a.DirectoryFollowingGames
                }), Object(f.a)({
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
                M = n("oJmH"),
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
                }, Object(m.d)("Never miss the Channels you love.", "EmptyChannelList"))), d.createElement(y.Ya, {
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
                }, Object(m.d)("Like the channel you're watching? Follow it.", "EmptyChannelList")), d.createElement(y.Fb, {
                    className: "following__empty-information-num",
                    position: y.kb.Absolute,
                    attachLeft: !0,
                    attachTop: !0,
                    background: y.r.Alt,
                    textAlign: y.Sb.Center
                }, Object(m.f)(1))), d.createElement(y.Ya, {
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
                }, Object(m.d)("We'll let you know when the channel goes live again.", "EmptyChannelList")), d.createElement(y.Fb, {
                    className: "following__empty-information-num",
                    position: y.kb.Absolute,
                    attachLeft: !0,
                    attachTop: !0,
                    background: y.r.Alt,
                    textAlign: y.Sb.Center
                }, Object(m.f)(2))), d.createElement(y.Ya, {
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
                }, Object(m.d)("Come back and watch your favorite channels.", "EmptyChannelList")), d.createElement(y.Fb, {
                    className: "following__empty-information-num",
                    position: y.kb.Absolute,
                    attachLeft: !0,
                    attachTop: !0,
                    background: y.r.Alt,
                    textAlign: y.Sb.Center
                }, Object(m.f)(3)))))
            }
            var X = n("HrG3");

            function Q(e) {
                var t = Object(m.d)("Live hosts", "LiveHosts"),
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
                }, Object(m.d)("No Hosts Live", "LiveHosts")))) : d.createElement("div", null, n, !e.showSample && d.createElement(q, null));
                var i, a = [];
                if (e.hosts.forEach(function(e) {
                        e && e.hosting && e.hosting.stream && e.hosting.id && a.push(e)
                    }), e.maxCount) e.maxCount < a.length && (a = a.slice(0, e.maxCount - 1), i = d.createElement(X.a, {
                    subHeader: "Live Hosts",
                    onClickViewAll: e.onClickViewAll
                }));
                else if (e.showSample && e.directoryWidth && e.directoryWidth > 0) {
                    var r = Object(O.a)(e.directoryWidth, 240, 2);
                    r < a.length && (a = a.slice(0, r - 1), i = d.createElement(X.a, {
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
                var o = a.map(function(e, t) {
                    if (e.id && e.hosting && e.hosting.stream && e.hosting.id) {
                        var n = Object(z.a)(e.hosting.login, e.hosting.displayName, !0),
                            i = Object(z.a)(e.login, e.displayName, !0),
                            a = Object(m.d)("{hostDisplayName} hosting {hostedDisplayName}", {
                                hostDisplayName: i,
                                hostedDisplayName: n
                            }, "LiveHosts"),
                            r = e.hosting.stream && e.hosting.stream.game ? Object(A.c)(e.hosting.stream.game.name) : "",
                            o = Object(j.a)({
                                tags: e.hosting.stream.tags,
                                section: G.a.LiveChannels
                            });
                        return o && (o.linkPath = U.a.PopularTag), d.createElement(y.Ya, {
                            key: e.id,
                            margin: {
                                bottom: 2
                            }
                        }, d.createElement(Y.a, {
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
                            tagListProps: o
                        }))
                    }
                });
                return d.createElement("div", null, n, d.createElement(y.cc, {
                    gutterSize: y.ec.Small,
                    childWidth: y.dc.Large,
                    placeholderItems: 20
                }, o, i))
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
                        m.p.setPageTitle(Object(m.d)("Hosts You Follow", "FollowingHostsPage")), this.onRender()
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
                            message: Object(m.d)("Error loading data.", "FollowingHostsPage")
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
                        }, d.createElement(S, {
                            activeCategory: w.SpadeFollowingCategory.Hosts
                        }), e)
                    }, t.prototype.onRender = function() {
                        this.props.data.loading || this.props.latencyTracking.reportInteractive()
                    }, t
                }(d.Component),
                K = Object(M.compose)(Object(h.a)($, {
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
                }), Object(f.a)({
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
                var t = Object(m.d)("Live channels", "LiveChannels"),
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
                }, Object(m.d)("No Channels Live", "LiveChannels")))) : d.createElement("div", null, n, d.createElement(q, null));
                var i, a = e.users || [];
                if (e.maxDisplayCount && e.maxDisplayCount < a.length) a = a.slice(0, e.maxDisplayCount - 1), i = d.createElement(P.a, {
                    subHeader: "Live Channels",
                    onClickViewAll: e.onClickViewAll
                });
                else if (e.showSample && e.directoryWidth && e.directoryWidth > 0) {
                    var r = Object(O.a)(e.directoryWidth, 240, 2);
                    r < a.length && (a = a.slice(0, r - 1), i = d.createElement(P.a, {
                        subHeader: t,
                        linkTo: "/directory/following/live"
                    }))
                }
                var o = a.map(function(e, t) {
                    if (!e.stream || !e.id) return null;
                    var n = {
                            medium: w.PageviewMedium.Following,
                            content: w.PageviewContent.Live,
                            content_index: t
                        },
                        i = e.stream && e.stream.game ? Object(A.c)(e.stream.game.name) : "",
                        a = Object(j.a)({
                            tags: e.stream.tags,
                            section: G.a.LiveChannels
                        });
                    return a && (a.linkPath = U.a.PopularTag), d.createElement(y.Ya, {
                        key: e.id,
                        margin: {
                            bottom: 2
                        }
                    }, d.createElement(Y.a, {
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
                    for (var l = 0; l < 5; l++) o.push(d.createElement(te.VideoPreviewCardPlaceholder, {
                        key: "live-channels-placeholder-" + l
                    }));
                return d.createElement("div", null, n, d.createElement(y.cc, {
                    gutterSize: y.ec.Small,
                    childWidth: y.dc.Large,
                    placeholderItems: 20
                }, o, i))
            }
            var ie = n("GFmA"),
                ae = n("EJax"),
                re = n("1ka0"),
                oe = function(e) {
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
                            }, Object(m.d)("Based on your viewing history", "SuggestedVideos"))),
                            t = [];
                        if (this.props.data.currentUser.recommendations.videos && this.props.data.currentUser.recommendations.videos.edges && (t = this.props.data.currentUser.recommendations.videos.edges.map(function(e) {
                                if (e && e.node) return e.node
                            })), this.props.directoryWidth > 0) {
                            var n = Object(O.a)(this.props.directoryWidth, 240, 2);
                            t = t.slice(0, n)
                        }
                        return d.createElement("div", null, e, d.createElement(ae.b, {
                            listContext: ie.b.MixedGameAndChannelList,
                            trackingMedium: w.PageviewMedium.Following,
                            trackingContent: w.PageviewContent.SuggestedVideos,
                            videoCardSize: y.dc.Large,
                            videos: t
                        }))
                    }, t = s.__decorate([Object(h.a)(re, {
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
                    return n.e(146).then(n.bind(null, "YBPT"))
                }, "LatestVideosFromFollowedCarousel"),
                ue = function(e) {
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
                me = n("45mq"),
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
                        m.p.setPageTitle(Object(m.d)("Following", "FollowingPage")), this.onRender()
                    }, t.prototype.componentDidUpdate = function() {
                        this.onRender()
                    }, t.prototype.render = function() {
                        var e = this.props.data && this.props.data.currentUser;
                        if (this.props.data.error || !this.props.data.loading && !e) return d.createElement(p.a, {
                            message: Object(m.d)("Error loading data.", "FollowingPage")
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
                        }, d.createElement(S, null), d.createElement(ne, {
                            key: "live-channels",
                            showSample: !0,
                            directoryWidth: this.state.directoryWidth,
                            users: this.props.data.loading ? null : i,
                            followsCount: t
                        }), d.createElement(ue, {
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
                        }), this.props.firstPageLoaded && d.createElement(oe, {
                            directoryWidth: this.state.directoryWidth
                        }), d.createElement(ee.a, {
                            onResize: this.onResize
                        }))
                    }, t.prototype.onRender = function() {
                        this.props.data.loading || this.props.latencyTracking.reportInteractive()
                    }, t = s.__decorate([Object(h.a)(me, {
                        options: {
                            fetchPolicy: "cache-and-network",
                            variables: {
                                limit: 30
                            }
                        }
                    }), Object(g.b)("FollowingIndexPage", {
                        destination: b.a.DirectoryFollowingIndex
                    }), Object(f.a)({
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
                        m.p.setPageTitle(Object(m.d)("Channels You Follow", "FollowingLivePage")), this.onRender()
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
                            message: Object(m.d)("Error loading data.", "FollowingLivePage")
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
                        }, d.createElement(S, {
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
                    }), Object(f.a)({
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
                fe = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return s.__extends(t, e), t.prototype.render = function() {
                        return this.props.isLoggedIn ? d.createElement(y.Ya, null, d.createElement(v.b, {
                            addPaddingWhenPlayerIsPersisting: !0
                        }), d.createElement(u.a, null, d.createElement(c.a, {
                            path: "/directory/following/live",
                            component: he
                        }), d.createElement(c.a, {
                            path: "/directory/following/hosts",
                            component: K
                        }), d.createElement(c.a, {
                            path: "/directory/following/games",
                            component: W
                        }), d.createElement(c.a, {
                            path: "/",
                            component: ge
                        }))) : (this.props.login(), d.createElement(p.a, {
                            message: Object(m.d)("You must be logged in to view this page", "FollowingRoot")
                        }))
                    }, t
                }(d.Component),
                ke = Object(g.b)("FollowingPageRoot", {
                    autoReportInteractive: !0
                })(fe);
            var be = Object(i.connect)(function(e) {
                return {
                    isLoggedIn: Object(l.f)(e)
                }
            }, function(e) {
                return Object(a.bindActionCreators)({
                    login: function() {
                        return Object(o.e)(r.a.FollowingPage)
                    }
                }, e)
            })(ke);
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
                r = n("Igt5"),
                o = "languageTags";

            function l(e, t) {
                var n = this;
                return function(l) {
                    return i.__awaiter(n, void 0, void 0, function() {
                        var n, s;
                        return i.__generator(this, function(i) {
                            return n = new Set(d()), t ? n.add(e) : n.delete(e), s = Array.from(n), a.m.set(o, s), l(Object(r.g)(s)), [2]
                        })
                    })
                }
            }

            function s(e) {
                var t = this;
                return function(n) {
                    return i.__awaiter(t, void 0, void 0, function() {
                        return i.__generator(this, function(t) {
                            return a.m.set(o, e), n(Object(r.g)(e)), [2]
                        })
                    })
                }
            }

            function d() {
                return a.m.get(o, [])
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
            var i, a, r, o, l = n("mrSG"),
                s = n("TSYQ"),
                d = n("q1tI"),
                c = n("/7QA"),
                u = n("oB8h"),
                m = n("Ue10");
            n("kVMo");
            ! function(e) {
                e.HostingDot = "stream-type-indicator__hosting-dot"
            }(o || (o = {}));
            var p = ((i = {})[u.a.Live] = "stream-type-indicator--live", i[u.a.Premiere] = "stream-type-indicator--premiere", i[u.a.Rerun] = "stream-type-indicator--rerun", i[u.a.WatchParty] = "stream-type-indicator--rerun", i),
                g = ((a = {})[u.a.Premiere] = m.ub.VideoPremiere, a[u.a.Rerun] = m.ub.VideoRerun, a[u.a.WatchParty] = m.ub.VideoRerun, a),
                v = ((r = {})[u.a.Premiere] = m.vb.Live, r[u.a.Rerun] = m.vb.Inherit, r[u.a.WatchParty] = m.vb.Inherit, r),
                h = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return l.__extends(t, e), t.prototype.render = function() {
                        return d.createElement(m.Fb, {
                            className: this.getClassNames(),
                            color: m.O.Overlay,
                            background: m.r.Overlay,
                            padding: {
                                x: .5
                            },
                            borderRadius: m.x.Small,
                            display: m.X.Flex
                        }, d.createElement(m.Ya, {
                            display: m.X.Flex,
                            alignItems: m.f.Center,
                            margin: {
                                right: .5
                            }
                        }, this.getIcon()), d.createElement(m.W, {
                            type: m.Wb.Span
                        }, this.getLabel()))
                    }, t.prototype.getClassNames = function() {
                        var e = {
                            "stream-type-indicator": !0
                        };
                        return e[p[this.props.type]] = !0, s(e)
                    }, t.prototype.getIcon = function() {
                        return this.props.hosting ? d.createElement(m.Fb, {
                            borderRadius: m.x.Rounded,
                            className: "stream-type-indicator__hosting-dot",
                            "data-test-selector": o.HostingDot
                        }) : this.props.type === u.a.Live ? d.createElement(m.Ya, {
                            className: "stream-type-indicator__live-wrapper",
                            display: m.X.Flex,
                            alignItems: m.f.Center
                        }, d.createElement(m.K, {
                            status: m.M.Live,
                            size: m.L.Small
                        })) : d.createElement(m.tb, {
                            asset: g[this.props.type],
                            type: v[this.props.type],
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
                return h
            })
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
                            var a, r, o, l;
                            return i.__generator(this, function(s) {
                                switch (s.label) {
                                    case 0:
                                        return t = this.constructOptions(t, n), a = t.headers ? t.headers["Content-Type"] : void 0, r = this.serialize(t.body, a), o = i.__assign({}, t, {
                                            body: r
                                        }), [4, this._fetch(e, o)];
                                    case 1:
                                        return l = s.sent(), [4, this.constructLegacyAPIResponse(l)];
                                    case 2:
                                        return [2, s.sent()]
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
                        return new URL(e, a.p.config.apiBaseURL)
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
                        var n = a.p.store.getState(),
                            i = {
                                Accept: "application/vnd.twitchtv.v" + (t.version || 5) + "+json; charset=UTF-8",
                                "Accept-Language": "en-us",
                                "Client-ID": a.p.config.legacyClientID,
                                "X-Requested-With": "XMLHttpRequest"
                            };
                        e.body && FormData.prototype.isPrototypeOf(e.body) || (i["Content-Type"] = "application/json; charset=UTF-8");
                        var o = Object(r.e)(n);
                        return o && (i.Authorization = "OAuth " + o.authToken, o.legacyCSRFToken && (i["Twitch-Api-Token"] = o.legacyCSRFToken)), t.excludeHeaders && t.excludeHeaders.forEach(function(e) {
                            i[e] && delete i[e]
                        }), i
                    }, e.logger = a.p.logger.withCategory("legacy-api"), e
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
                u = function(e) {
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
                m = Object(l.b)("VideoTower", {
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
                r = n("/7QA"),
                o = n("Ue10"),
                l = (n("1mcJ"), function(e) {
                    return a.createElement(o.Ya, i.__assign({
                        className: "drops-badge",
                        position: o.kb.Absolute,
                        attachTop: !0,
                        attachRight: !0
                    }, Object(o.kc)(e)), a.createElement(o.Zb, {
                        direction: o.bc.Top,
                        align: o.ac.Right,
                        label: Object(r.d)("Offers in-game Drops", "DropsBadge")
                    }, a.createElement(o.Fb, {
                        className: "drops-badge__drops-icon",
                        position: o.kb.Relative,
                        padding: {
                            top: .5,
                            right: .5,
                            bottom: 3,
                            left: 3
                        },
                        overflow: o.db.Hidden,
                        color: o.O.Overlay,
                        zIndex: o.jc.Default
                    }, a.createElement(o.U, {
                        type: o.V.Inherit,
                        hoverColorInherit: !0,
                        to: "https://help.twitch.tv/customer/en/portal/articles/2754380-how-to-earn-drops"
                    }, a.createElement(o.tb, {
                        asset: o.ub.Drops
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
            var u = function(e) {
                var t;
                return e.placeholder ? a.createElement(a.Fragment, null, a.createElement(o.Ya, {
                    margin: {
                        bottom: .5
                    }
                }, a.createElement(o.o, {
                    ratio: o.p.Aspect3x4
                }, a.createElement(o.jb, null))), a.createElement(o.W, null, a.createElement(o.jb, {
                    width: 150
                })), a.createElement(o.W, {
                    fontSize: o.Ca.Size7
                }, a.createElement(o.jb, {
                    width: 100
                }))) : (t = a.createElement(a.Fragment, null, a.createElement(o.Ya, {
                    className: "tw-box-art-card__image " + (e.unavailable && !e.disabled ? "tw-box-art-card__image--unavailable" : ""),
                    "data-test-selector": "tw-card-image",
                    "data-a-target": "tw-card-image"
                }, a.createElement(o.I, i.__assign({
                    aspect: o.p.BoxArt,
                    borderRadius: o.x.Medium
                }, c(e)))), a.createElement(o.H, null, a.createElement(o.Ya, {
                    display: o.X.Flex
                }, a.createElement(o.Ya, {
                    "data-test-selector": "tw-card-title",
                    "data-a-target": "tw-card-title",
                    flexGrow: 1,
                    flexShrink: 1,
                    margin: {
                        top: .5
                    },
                    ellipsis: !0
                }, a.createElement(o.W, {
                    className: "tw-box-art-card__title",
                    type: o.Wb.H3,
                    fontSize: o.Ca.Size5,
                    lineHeight: o.Za.Body,
                    ellipsis: !0
                }, e.title)), e.contextualCardActionProps && a.createElement(o.Ya, {
                    margin: {
                        top: .5
                    },
                    flexGrow: 0,
                    flexShrink: 0
                }, a.createElement(e.contextualCardActionProps.component, i.__assign({}, e.contextualCardActionProps.props)))), a.createElement(o.W, {
                    color: o.O.Alt2,
                    ellipsis: !0
                }, e.info))), (e.linkTo || e.onClick || e.disabled) && (t = a.createElement(o.T, {
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
                }, Object(o.kc)(e)), a.createElement(o.G, {
                    key: e.title
                }, t), e.tagListProps && 0 !== e.tagListProps.tags.length && a.createElement(o.Ya, {
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
                return u
            })
        },
        odjZ: function(e, t, n) {
            "use strict";
            var i, a = n("mrSG"),
                r = n("q1tI"),
                o = n("fvjX"),
                l = n("yR8l"),
                s = n("GnwI"),
                d = n("Ue10"),
                c = (n("BIFG"), n("BEfv"));
            ! function(e) {
                e.Bounce = "animated-tag--bounce", e.NoBounce = "animated-tag--no-bounce"
            }(i || (i = {}));
            var u = function(e) {
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
                            e = r.createElement(d.Ia, {
                                label: t.localizedName,
                                onClick: this.props.onClickForGQLTag && this.props.onClickForGQLTag.bind(this, t),
                                selected: !0,
                                size: d.Ta.Large
                            })
                        } else this.props.formTagProps && (e = r.createElement(d.Ia, a.__assign({}, this.props.formTagProps)));
                        return r.createElement("div", {
                            className: i.NoBounce,
                            "data-tag-filter": this.props.tagID
                        }, e)
                    }, t.prototype.reportInteractive = function() {
                        this.props.getTagFromGQL && this.props.data && (!this.props.data.loading || this.props.data.error) ? this.props.latencyTracking.reportInteractive() : this.props.getTagFromGQL || this.props.latencyTracking.reportInteractive()
                    }, t
                }(r.Component),
                m = Object(o.compose)(Object(l.a)(c, {
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
                }), Object(s.b)("AnimatedTag"))(u);
            n.d(t, "b", function() {
                return i
            }), n.d(t, !1, function() {
                return u
            }), n.d(t, "a", function() {
                return m
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
                r = n("fvjX"),
                o = n("5xw2"),
                l = n("OhOW"),
                s = n("mrSG"),
                d = n("q1tI"),
                c = n("wIs1"),
                u = n("/7QA"),
                m = n("vSJR"),
                p = n("8/mp"),
                g = n("HSqT"),
                v = n("2xye"),
                h = n("GnwI"),
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
                            }, d.createElement(p.b, null, d.createElement(f.Ya, {
                                padding: .5
                            }, Object(g.b)().map(t.renderLanguageOption)))), d.createElement(f.Fb, {
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
                            return d.createElement(f.Ya, {
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
                            return d.createElement(f.Ya, {
                                display: f.X.Flex
                            }, n, d.createElement(f.Ya, {
                                margin: {
                                    left: .5
                                }
                            }, 0 !== e && d.createElement(f.hb, {
                                type: f.ib.Brand,
                                label: e.toString()
                            })))
                        }, t.trackLanguageChange = function(e, n) {
                            var i = "";
                            t.props.match && t.props.match.params && (i = decodeURIComponent(t.props.match.params.encodedCommunityName).toLowerCase()), u.p.tracking.track(v.SpadeEventType.LanguageFilterChange, {
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
                        return d.createElement(f.Ya, {
                            className: "language-select-menu"
                        }, d.createElement(m.a, {
                            "data-a-target": "language-filter-dropdown",
                            buttonLabel: this.renderButtonContent()
                        }, this.renderDropdownContent()))
                    }, t
                }(d.Component),
                b = Object(r.compose)(c.a, Object(h.b)("LanguageSelectMenu"))(k);
            var w = Object(a.connect)(function(e) {
                return {
                    languagePreferences: Object(l.a)(e)
                }
            }, function(e) {
                return Object(r.bindActionCreators)({
                    updateLanguagePreferences: o.c,
                    clearLanguagePreferences: o.a
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
                r = n("GFmA"),
                o = n("oB8h"),
                l = n("Ue10"),
                s = (n("5cmV"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return a.createElement("div", i.__assign({
                            className: "live-channel-card"
                        }, Object(l.kc)(this.props)), a.createElement(r.a, {
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
                            streamType: this.props.streamType || o.a.Live,
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
                r = n("q1tI"),
                o = n("u5aL"),
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
                    return this.props.hideDropdownOnInsideClick && (e = r.createElement("div", {
                        "data-test-selector": i.DropdownInsideClickDetector,
                        onClick: this.handleInsideDropdownClick
                    }, e)), r.createElement(o.a, {
                        onClickOut: this.handleOnClickOut
                    }, r.createElement(s.Fb, a.__assign({
                        background: this.state.isOpen ? s.r.Base : void 0,
                        borderRadius: s.x.Large,
                        className: "inline-dropdown",
                        elevation: this.state.isOpen ? 3 : void 0,
                        padding: .5,
                        position: s.kb.Relative
                    }, Object(l.a)(this.props)), r.createElement("div", {
                        className: "inline-dropdown__button-wrapper"
                    }, r.createElement(s.z, {
                        blurAfterClick: !0,
                        dropdown: !0,
                        onClick: this.handleButtonClick,
                        size: s.D.Large,
                        type: s.F.Hollow
                    }, this.props.buttonLabel)), r.createElement(s.Fb, {
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
                o = n("AZIu"),
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
                    u = e.scrollToTop;
                if (t) {
                    return {
                        tags: t,
                        callback: function(e) {
                            u && u(), e.isLanguageTag && i.p.store.dispatch(Object(l.c)(e.id, !0));
                            var t = c.every(function(t) {
                                    return t.id !== e.id
                                }),
                                d = Object(l.a)().every(function(t) {
                                    return t !== e.id
                                });
                            if (t && d) {
                                s && s(e);
                                var m = {
                                    section: n,
                                    tagPosition: c.length,
                                    searchEvent: !1,
                                    tagId: e.id,
                                    dismiss: !1
                                };
                                Object(o.b)(m)
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
                r = n("oJmH"),
                o = n("yR8l"),
                l = n("geRD"),
                s = n("Ue10"),
                d = n("4ErZ"),
                c = n("bSYX"),
                u = (n("AXwV"), n("g3/t")),
                m = function(e) {
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
                            var t, n, a, r = this;
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
                                            r.props.onFollow && r.props.onFollow(r.props.title)
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
                            var t, n, a, r = this;
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
                                            r.props.onUnfollow && r.props.onUnfollow(r.props.title)
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
                p = Object(r.compose)(Object(o.a)(c, {
                    options: function(e) {
                        return {
                            variables: {
                                name: e.title
                            }
                        }
                    }
                }), Object(o.a)(d, {
                    name: "followGame"
                }), Object(o.a)(u, {
                    name: "unfollowGame"
                }))(m)
        }
    }
]);