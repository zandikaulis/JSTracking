(window.webpackJsonp = window.webpackJsonp || []).push([
    [70], {
        "+U0Y": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            }), n.d(t, "b", function() {
                return r
            });
            var a = "core.user-preferences.LANGUAGE_PREFERENCES_UPDATED";

            function r(e) {
                return {
                    type: a,
                    languagePreferences: e
                }
            }
        },
        "0egc": function(e, t, n) {
            var a = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "BrowsePage_AllDirectories"
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
                                value: "directoryFilters"
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
                                        value: "DirectoryFilter"
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
                                value: "tags"
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
                                value: "directories"
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
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "filterBySet"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "directoryFilters"
                                    }
                                }
                            }],
                            directives: [{
                                kind: "Directive",
                                name: {
                                    kind: "Name",
                                    value: "skip"
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
                                                value: "browsePageDirectoriesEdge"
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
                                }]
                            }
                        }, {
                            kind: "Field",
                            alias: {
                                kind: "Name",
                                value: "directoriesWithTags"
                            },
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
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "tags"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "tags"
                                    }
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
                                                value: "browsePageDirectoriesWithTagsEdge"
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
                                }]
                            }
                        }]
                    }
                }, {
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "browsePageDirectoriesEdge"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "DirectoryEdge"
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
                                        value: "directoryType"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "InlineFragment",
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
                                                value: "activeDropCampaigns"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "applicableChannels"
                                                    },
                                                    arguments: [],
                                                    directives: [],
                                                    selectionSet: {
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
                        }]
                    }
                }, {
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "browsePageDirectoriesWithTagsEdge"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "GameEdge"
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
                                        value: "directoryType"
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
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "activeDropCampaigns"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "applicableChannels"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
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
                    end: 1018
                }
            };
            a.loc.source = {
                body: '#import "twilight/features/tags/models/tag-fragment.gql"\nquery BrowsePage_AllDirectories($limit: Int $cursor: Cursor $directoryFilters: [DirectoryFilter!] $tags: [String!] $isTagsExperiment: Boolean!) {\ndirectories(first: $limit after: $cursor filterBySet: $directoryFilters) @skip(if: $isTagsExperiment) {\nedges {\n...browsePageDirectoriesEdge\n}\npageInfo {\nhasNextPage\n}\n}\ndirectoriesWithTags: games(first: $limit after: $cursor tags: $tags) @include(if: $isTagsExperiment) {\nedges {\n...browsePageDirectoriesWithTagsEdge\n}\npageInfo {\nhasNextPage\n}\n}\n}\nfragment browsePageDirectoriesEdge on DirectoryEdge {\ncursor\nnode {\nid\ndisplayName\nname\navatarURL(width: 285 height: 380)\nviewersCount\ndirectoryType\n... on Game {\nactiveDropCampaigns {\napplicableChannels {\nid\n}\n}\n}\n}\n}\nfragment browsePageDirectoriesWithTagsEdge on GameEdge {\ncursor\nnode {\nid\ndisplayName\nname\navatarURL(width: 285 height: 380)\nviewersCount\ndirectoryType\ntags(tagType: CONTENT) {\n...tagFragment\n}\nactiveDropCampaigns {\napplicableChannels {\nid\n}\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var r = {};
            a.definitions = a.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !r[t] && (r[t] = !0, !0)
                })
            }(n("iiOx").definitions)), e.exports = a
        },
        "1mcJ": function(e, t, n) {},
        "3sMy": function(e, t, n) {
            "use strict";
            var a;
            n.d(t, "a", function() {
                    return a
                }),
                function(e) {
                    e.GreatNewClipsYouMayHaveMissed = "GreatNewClipsYouMayHaveMissed", e.PopularClips = "PopularClips", e.PopularVideos = "PopularVideos", e.RecommendedBecauseYouWatchX = "RecommendedBecauseYouWatchX", e.RecommendedBecauseYouFollowX = "RecommendedBecauseYouFollowX", e.TopChannelsPlayingGame = "TopChannelsPlayingGame", e.TopGames = "TopGames", e.TopGamesForYou = "TopGamesForYou", e.TopLiveChannels = "TopLiveChannels", e.TopLiveChannelsYouMayLike = "TopLiveChannelsYouMayLike", e.TopNewVideosYouMayHaveMissed = "TopNewVideosYouMayHaveMissed"
                }(a || (a = {}))
        },
        "4u5W": function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n("mrSG"),
                r = n("q1tI"),
                i = n("oJmH"),
                o = n("/7QA"),
                s = n("V+GM"),
                c = n("NvVO"),
                l = n("2xye"),
                u = n("GnwI"),
                d = n("NmVs"),
                p = n("9x/k"),
                g = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        o.o.setPageTitle(Object(o.d)("Communities", "BrowseCommunitiesPage"))
                    }, t.prototype.render = function() {
                        return r.createElement(d.a, {
                            category: p.a.Communities
                        })
                    }, t
                }(r.Component),
                m = Object(i.compose)(Object(u.c)("DirectoryPage", {
                    autoReportInteractive: !0,
                    destination: c.a.BrowseCommunities
                }), Object(s.a)({
                    location: l.PageviewLocation.BrowseCommunities
                }))(g);
            n.d(t, "BrowseCommunitiesPageComponent", function() {
                return g
            }), n.d(t, "BrowseCommunitiesPage", function() {
                return m
            })
        },
        "5xw2": function(e, t, n) {
            "use strict";
            n.d(t, "c", function() {
                return c
            }), n.d(t, "a", function() {
                return l
            }), n.d(t, "b", function() {
                return u
            });
            var a = n("mrSG"),
                r = n("/7QA"),
                i = n("HSqT"),
                o = n("+U0Y"),
                s = "languageDirectoryFilters";

            function c(e, t) {
                var n = this;
                return function(i) {
                    return a.__awaiter(n, void 0, void 0, function() {
                        var n, c;
                        return a.__generator(this, function(a) {
                            return n = new Set(u()), t ? n.add(e) : n.delete(e), c = Array.from(n), r.l.set(s, c), i(Object(o.b)(c)), [2]
                        })
                    })
                }
            }

            function l() {
                var e = this;
                return function(t) {
                    return a.__awaiter(e, void 0, void 0, function() {
                        return a.__generator(this, function(e) {
                            return r.l.set(s, []), t(Object(o.b)([])), [2]
                        })
                    })
                }
            }

            function u() {
                return r.l.get(s, []).filter(function(e) {
                    return i.a.has(e)
                })
            }
        },
        "79jw": function(e, t, n) {
            var a = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "TopTags"
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
                                value: "showTopTagsByCategory"
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
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "categoryName"
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
                                        value: "categoryName"
                                    }
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
                                            value: "showTopTagsByCategory"
                                        }
                                    }
                                }]
                            }],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "id"
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
                                            value: "TOP"
                                        }
                                    }, {
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "limit"
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
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "topTags"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "limit"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "limit"
                                    }
                                }
                            }],
                            directives: [{
                                kind: "Directive",
                                name: {
                                    kind: "Name",
                                    value: "skip"
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
                                            value: "showTopTagsByCategory"
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
                }],
                loc: {
                    start: 0,
                    end: 341
                }
            };
            a.loc.source = {
                body: '#import "twilight/features/tags/models/tag-fragment.gql"\nquery TopTags($limit: Int! $showTopTagsByCategory: Boolean! $categoryName: String) {\ngame(name: $categoryName) @include(if: $showTopTagsByCategory) {\nid\ntags(tagType: TOP limit: $limit) {\n...tagFragment\n}\n}\ntopTags(limit: $limit) @skip(if: $showTopTagsByCategory) {\n...tagFragment\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var r = {};
            a.definitions = a.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !r[t] && (r[t] = !0, !0)
                })
            }(n("iiOx").definitions)), e.exports = a
        },
        "97MP": function(e, t, n) {},
        "99ae": function(e, t, n) {
            "use strict";
            n.r(t);
            var a, r = n("WRGI"),
                i = n("4u5W"),
                o = n("xPP4"),
                s = n("SKDF"),
                c = n("/MKj"),
                l = n("fvjX"),
                u = n("oA7Y"),
                d = n("X7a7"),
                p = n("mrSG"),
                g = n("q1tI"),
                m = n("4p7I"),
                h = n("yoKv"),
                f = n("mf+E"),
                v = n("lZCe"),
                y = n("ZS2+"),
                T = n("yR8l"),
                k = n("D7An"),
                b = n("Uive"),
                C = n("cTNz"),
                w = n("/7QA"),
                S = n("vSJR");
            ! function(e) {
                e.Categories = "categories", e.LiveChannels = "live-channels"
            }(a || (a = {}));
            var _ = n("Ue10"),
                N = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.getLinkTo = function(e) {
                            switch (e) {
                                case a.Categories:
                                    return "/directory";
                                case a.LiveChannels:
                                    return "/directory/all";
                                default:
                                    return e
                            }
                        }, t
                    }
                    return p.__extends(t, e), t.prototype.render = function() {
                        return g.createElement(S.a, {
                            buttonLabel: this.getShowingLabel(this.props.showingType),
                            hideDropdownOnInsideClick: !0
                        }, this.renderShowingItem(a.Categories), this.renderShowingItem(a.LiveChannels))
                    }, t.prototype.renderShowingItem = function(e) {
                        var t = this.props.showingType === e ? g.createElement(_.Va, {
                            attachRight: !0,
                            position: _.db.Absolute,
                            margin: {
                                right: 1
                            }
                        }, g.createElement(_.mb, {
                            asset: _.nb.Check,
                            height: 18,
                            width: 18
                        })) : null;
                        return g.createElement(_.Sa, {
                            "data-test-selector": e + "-selector",
                            linkTo: this.getLinkTo(e)
                        }, g.createElement(_.Va, {
                            display: _.W.Flex,
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, this.getShowingLabel(e), t))
                    }, t.prototype.getShowingLabel = function(e) {
                        switch (e) {
                            case a.LiveChannels:
                                return Object(w.d)("Live Channels", "BrowseHeader");
                            case a.Categories:
                                return Object(w.d)("Categories", "BrowseHeader");
                            default:
                                return e
                        }
                    }, t
                }(g.Component),
                E = n("si2W"),
                I = n("C29h"),
                O = n("AZIu"),
                D = (n("TFM5"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return p.__extends(t, e), t.prototype.render = function() {
                        return g.createElement(_.Va, {
                            className: "browse-header__filters",
                            display: _.W.Flex,
                            flexWrap: _.Z.Wrap,
                            padding: {
                                top: 2,
                                right: 3
                            }
                        }, g.createElement(_.Va, null, g.createElement(_.Va, {
                            padding: {
                                left: .5,
                                top: 1
                            }
                        }, g.createElement(_.V, null, Object(w.d)("Showing", "BrowseHeader"))), g.createElement(N, {
                            showingType: this.props.showingType
                        })), g.createElement(_.Va, null, g.createElement(_.Va, {
                            padding: {
                                left: .5,
                                top: 1
                            }
                        }, g.createElement(_.V, null, Object(w.d)("Filters", "BrowseHeader"))), g.createElement(E.a, {
                            onAddTagFilter: this.props.addTagFilter,
                            onRemoveTagFilter: this.props.removeTagFilter,
                            section: this.props.showingType === a.Categories ? O.a.Categories : O.a.LiveChannels,
                            selectedTags: this.props.tagFilters,
                            tagSearchType: this.props.showingType === a.Categories ? I.b.TagCategory : I.b.TagAll
                        })))
                    }, t
                }(g.Component));
            var P = Object(c.connect)(function(e) {
                    return {
                        tagFilters: Object(r.a)(e)
                    }
                }, function(e) {
                    return Object(l.bindActionCreators)({
                        addTagFilter: u.f,
                        removeTagFilter: u.j
                    }, e)
                })(D),
                x = n("wIs1"),
                F = n("sLlB"),
                L = n("eJ65"),
                j = n("3W+h"),
                A = n("9x/k");

            function R(e) {
                switch (e) {
                    case A.a.Channels:
                        return Object(w.d)("Channels", "NewBrowseHeader");
                    case A.a.Communities:
                        return Object(w.d)("Communities", "NewBrowseHeader");
                    case A.a.CreativeCommunities:
                        return Object(w.d)("Creative Communities", "NewBrowseHeader");
                    case A.a.Games:
                        return Object(w.d)("Games", "NewBrowseHeader");
                    default:
                        return Object(w.d)("Games and Communities", "NewBrowseHeader")
                }
            }
            var B = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.typeChangeHandler = function(e) {
                        switch (t.balloonWrapperRef.toggleBalloon(!1), e.currentTarget.getAttribute("data-filter-type")) {
                            case A.a.Channels:
                                w.o.history.push(j.a.Popular), t.props.changeBrowseType(A.a.Channels);
                                break;
                            case A.a.Communities:
                                w.o.history.push(j.a.Communities), t.props.changeBrowseType(A.a.Communities);
                                break;
                            case A.a.CreativeCommunities:
                                w.o.history.push(j.a.CreativeCommunities), t.props.changeBrowseType(A.a.CreativeCommunities);
                                break;
                            default:
                                w.o.history.push(j.a.Games), t.props.changeBrowseType(A.a.Games)
                        }
                    }, t.saveBalloonWrapperRef = function(e) {
                        t.balloonWrapperRef = e
                    }, t
                }
                return p.__extends(t, e), t.prototype.render = function() {
                    return g.createElement(_.Va, {
                        display: _.W.Flex
                    }, g.createElement(_.Va, {
                        display: _.W.InlineFlex
                    }, g.createElement(L.a, {
                        ref: this.saveBalloonWrapperRef
                    }, g.createElement(_.z, {
                        type: _.F.Hollow,
                        "data-test-selector": "filter-dropdown-button",
                        "data-a-target": "browse-filter-dropdown",
                        dropdown: !0
                    }, R(this.props.browseType)), g.createElement(_.u, {
                        direction: _.v.Bottom,
                        noTail: !0
                    }, g.createElement(_.Va, {
                        padding: {
                            y: 1
                        }
                    }, this.renderFilterItem(A.a.Games), this.renderFilterItem(A.a.Communities), this.renderFilterItem(A.a.CreativeCommunities), this.renderFilterItem(A.a.Channels))))))
                }, t.prototype.renderFilterItem = function(e) {
                    return g.createElement(_.Sa, {
                        onClick: this.typeChangeHandler,
                        "data-filter-type": e,
                        "data-test-selector": e + "-selector",
                        "data-a-target": "browse-" + e + "-button",
                        selected: this.props.browseType === e
                    }, g.createElement(_.Va, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, R(e)))
                }, t
            }(g.Component);
            var V = Object(c.connect)(function(e) {
                    return {
                        browseType: Object(r.b)(e)
                    }
                }, function(e) {
                    return Object(l.bindActionCreators)({
                        changeBrowseType: u.g
                    }, e)
                })(B),
                G = function(e) {
                    return e === j.a.Popular || e === j.a.PopularEncodedLanguage || e === j.a.PopularPlaystation || e === j.a.PopularXbox || e === j.a.PopularTag
                },
                M = n("TSYQ"),
                W = (n("I4m/"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.typeChangeHandler = function(e) {
                            t.balloonWrapperRef.toggleBalloon(!1);
                            var n = e.currentTarget.getAttribute("data-filter-type");
                            "all" === n ? w.o.history.push("/directory/all/") : w.o.history.push("/directory/all/" + n)
                        }, t.saveBalloonWrapperRef = function(e) {
                            t.balloonWrapperRef = e
                        }, t
                    }
                    return p.__extends(t, e), t.prototype.render = function() {
                        var e, t = Object(w.d)("All Platforms", "PlatformFilter"),
                            n = Object(w.d)("Xbox One", "PlatformFilter"),
                            a = Object(w.d)("PlayStation 4", "PlatformFilter");
                        switch (this.props.broadcastType) {
                            case "xbox":
                                e = n;
                                break;
                            case "ps4":
                                e = a;
                                break;
                            default:
                                e = t
                        }
                        return g.createElement(_.Va, {
                            display: _.W.Flex
                        }, g.createElement("div", null, g.createElement(_.Va, {
                            display: _.W.InlineFlex
                        }, g.createElement(L.a, {
                            ref: this.saveBalloonWrapperRef,
                            "data-a-target": "platform-filter-balloon"
                        }, g.createElement(_.z, {
                            type: _.F.Hollow,
                            "data-test-selector": "filter-dropdown-button",
                            "data-a-target": "platform-filter-dropdown",
                            dropdown: !0
                        }, e), g.createElement(_.u, {
                            direction: _.v.Bottom,
                            noTail: !0
                        }, g.createElement(_.Va, {
                            className: "layout",
                            padding: {
                                y: 1
                            }
                        }, this.renderFilterItem("all", t, "filter-item-all"), this.renderFilterItem("xbox", n, "filter-item-xbox"), this.renderFilterItem("ps4", a, "filter-item-ps4")))))))
                    }, t.prototype.renderFilterItem = function(e, t, n) {
                        var a = M("platform-filter", {
                            "platform-filter--active": !this.props.broadcastType || this.props.broadcastType === e
                        });
                        return g.createElement(_.Sa, {
                            onClick: this.typeChangeHandler,
                            "data-filter-type": e,
                            "data-a-target": "platform-filter-" + e + "-button"
                        }, g.createElement(_.Va, {
                            className: a,
                            padding: {
                                y: .5,
                                x: 1
                            },
                            "data-test-selector": n
                        }, t))
                    }, t
                }(g.Component)),
                q = n("xktb"),
                U = "create-community-button",
                z = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderSortOrStream = function() {
                            return G(t.props.match.path) ? Object(w.d)("Show me {filter} streaming from {platform}", {
                                filter: g.createElement(_.Va, {
                                    margin: {
                                        x: 1
                                    }
                                }, g.createElement(V, null)),
                                platform: g.createElement(_.Va, {
                                    margin: {
                                        x: 1
                                    }
                                }, g.createElement(W, {
                                    broadcastType: q.a[decodeURIComponent(t.props.match.path)] || "all"
                                }))
                            }, "NewBrowseHeader") : Object(w.d)("Show me {filter}", {
                                filter: g.createElement(_.Va, {
                                    margin: {
                                        x: 1
                                    }
                                }, g.createElement(V, null))
                            }, "NewBrowseHeader")
                        }, t.renderCreateCommunity = function() {
                            return t.props.location.pathname !== j.a.Communities ? null : g.createElement(_.z, {
                                type: _.F.Hollow,
                                linkTo: "/communities/create",
                                "data-test-selector": U
                            }, Object(w.d)("Create Community", "NewBrowseHeader"))
                        }, t.renderLanguageSelect = function() {
                            return G(t.props.match.path) ? g.createElement(F.a, null) : null
                        }, t
                    }
                    return p.__extends(t, e), t.prototype.render = function() {
                        return g.createElement(_.xb, {
                            background: _.r.Base,
                            border: !0,
                            display: _.W.Flex,
                            flexDirection: _.Y.Row,
                            margin: {
                                bottom: 2
                            },
                            padding: 2,
                            borderRadius: _.x.Large
                        }, g.createElement(_.Va, {
                            display: _.W.Flex,
                            flexGrow: 1
                        }, g.createElement(_.Va, {
                            display: _.W.Flex,
                            alignItems: _.f.Center
                        }, this.renderSortOrStream())), g.createElement(_.Va, {
                            display: _.W.Flex,
                            flexGrow: 1,
                            justifyContent: _.Ua.End
                        }, g.createElement(_.Va, {
                            display: _.W.Flex,
                            flexDirection: _.Y.Row
                        }, this.renderCreateCommunity(), this.renderLanguageSelect())))
                    }, t
                }(g.Component),
                H = Object(x.a)(z),
                Q = n("JoTo"),
                Y = n("cnlr"),
                $ = n("fVj5"),
                J = n("G1iw"),
                X = y.a.wrap(function() {
                    return Promise.resolve().then(n.bind(null, "4u5W"))
                }, "BrowseCommunitiesPage"),
                K = y.a.wrap(function() {
                    return Promise.resolve().then(n.bind(null, "xPP4"))
                }, "BrowseCreativePage"),
                Z = y.a.wrap(function() {
                    return Promise.resolve().then(n.bind(null, "SKDF"))
                }, "BrowseGamesPage"),
                ee = y.a.wrap(function() {
                    return n.e(128).then(n.bind(null, "JTXL"))
                }, "DirectoryPopularByLanguagePage"),
                te = y.a.wrap(function() {
                    return n.e(128).then(n.bind(null, "JTXL"))
                }, "DirectoryPopularPage"),
                ne = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.isTagsExperiment = Object($.b)(), t.renderExperiment = function() {
                            return g.createElement(_.Va, null, t.renderAds(), g.createElement(P, {
                                showingType: t.getActiveShowing()
                            }), g.createElement(_.Va, {
                                padding: {
                                    bottom: 3,
                                    top: 2,
                                    x: 3
                                }
                            }, t.renderSideNavInfoSection(), g.createElement(h.a, null, g.createElement(m.a, {
                                path: j.a.Communities,
                                render: t.redirectToMainBrowse
                            }), g.createElement(m.a, {
                                path: j.a.CreativeCommunities,
                                render: t.redirectToTagCreative
                            }), g.createElement(m.a, {
                                path: j.a.PopularPlaystation,
                                render: t.redirectToMainBrowse
                            }), g.createElement(m.a, {
                                path: j.a.PopularXbox,
                                render: t.redirectToMainBrowse
                            }), g.createElement(m.a, {
                                path: j.a.PopularTag,
                                component: te
                            }), g.createElement(m.a, {
                                path: j.a.PopularEncodedLanguage,
                                component: ee
                            }), g.createElement(m.a, {
                                path: j.a.Popular,
                                component: te
                            }), g.createElement(m.a, {
                                path: j.a.DirectoryTag,
                                component: Z
                            }), g.createElement(m.a, {
                                path: j.a.DirectoryCategory,
                                component: Z
                            }))))
                        }, t.renderFallback = function() {
                            return g.createElement(_.Va, {
                                padding: 3
                            }, t.renderSideNavInfoSection(), t.renderAds(), g.createElement(H, null), g.createElement(h.a, null, g.createElement(m.a, {
                                path: j.a.Communities,
                                component: X
                            }), g.createElement(m.a, {
                                path: j.a.CreativeCommunities,
                                component: K
                            }), g.createElement(m.a, {
                                path: j.a.PopularPlaystation,
                                component: te
                            }), g.createElement(m.a, {
                                path: j.a.PopularXbox,
                                component: te
                            }), g.createElement(m.a, {
                                path: j.a.PopularEncodedLanguage,
                                component: ee
                            }), g.createElement(m.a, {
                                path: j.a.Popular,
                                component: te
                            }), g.createElement(m.a, {
                                path: j.a.DirectoryCategory,
                                component: Z
                            })))
                        }, t.renderSideNavInfoSection = function() {
                            return g.createElement(Q.a, null, g.createElement(Y.a, null))
                        }, t.renderAds = function() {
                            return g.createElement(b.a, {
                                injectStyles: {
                                    textAlign: "center",
                                    marginBottom: t.isTagsExperiment ? 0 : 30,
                                    marginTop: t.isTagsExperiment ? 30 : 0
                                },
                                adUnit: C.d.directory,
                                "data-a-target": "browse-banner-ad-slot",
                                slotID: C.b.directory.banner,
                                adSize: C.c.directory.banner,
                                targeting: {
                                    pagetype: C.a.games
                                },
                                autoEnable: !1
                            })
                        }, t.getActiveShowing = function() {
                            return G(t.props.match.path) ? a.LiveChannels : a.Categories
                        }, t.isBrowseTagsPath = function(e) {
                            return e === j.a.DirectoryTag || e === j.a.PopularTag
                        }, t.updateTagFilterFromPath = function(e, n) {
                            if (t.isBrowseTagsPath(e) && n && !n.loading && !n.error && n.contentTag) {
                                var a = n.contentTag;
                                if (t.props.tagFilters.every(function(e) {
                                        return e.id !== a.id
                                    }) && (t.props.changeTagFilters([{
                                        id: a.id,
                                        isLanguageTag: a.isLanguageTag,
                                        localizedName: a.localizedName,
                                        tagName: a.tagName
                                    }]), a.isLanguageTag && t.props.replaceLanguageTags([a.id]), !t.props.data || !t.props.data.contentTag || t.props.data.contentTag.id !== a.id)) {
                                    var r = {
                                        section: e === j.a.DirectoryTag ? O.a.Categories : O.a.LiveChannels,
                                        tagPosition: 0,
                                        searchEvent: !1,
                                        tagId: a.id,
                                        dismiss: !1
                                    };
                                    Object(O.b)(r)
                                }
                            }
                        }, t
                    }
                    return p.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.setBrowseType(this.props.match.path);
                        var e = decodeURIComponent(this.props.location.pathname);
                        this.props.lastBrowsePath !== e && (this.props.changeLastBrowsePath(e), this.props.changeTagFilters([])), this.updateTagFilterFromPath(this.props.match.path, this.props.data)
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        var t = this.props.match.path,
                            n = e.match.path;
                        if (t !== n) {
                            this.setBrowseType(n);
                            var a = e.location.state && e.location.state.persistTags;
                            t === j.a.DirectoryTag && n === j.a.DirectoryCategory || t === j.a.PopularTag && n === j.a.Popular || a || this.props.changeTagFilters([])
                        }
                        var r = decodeURIComponent(e.location.pathname);
                        this.props.lastBrowsePath !== r && this.props.changeLastBrowsePath(r), this.updateTagFilterFromPath(n, e.data)
                    }, t.prototype.render = function() {
                        var e = {
                            assignments: {
                                fallback: this.renderFallback,
                                experiment: this.renderExperiment
                            },
                            name: k.b.Tags
                        };
                        return g.createElement(v.a, p.__assign({}, e))
                    }, t.prototype.redirectToMainBrowse = function() {
                        return g.createElement(f.a, {
                            path: "/",
                            to: j.a.Games
                        })
                    }, t.prototype.redirectToTagCreative = function() {
                        return g.createElement(f.a, {
                            path: "/",
                            to: j.a.TagCreative
                        })
                    }, t.prototype.setBrowseType = function(e) {
                        e === j.a.DirectoryCategory ? this.props.changeBrowseType(A.a.Games) : e === j.a.Communities ? this.props.changeBrowseType(A.a.Communities) : e === j.a.CreativeCommunities ? this.props.changeBrowseType(A.a.CreativeCommunities) : G(e) && this.props.changeBrowseType(A.a.Channels)
                    }, t
                }(g.Component),
                ae = Object(l.compose)(Object(T.a)(J, {
                    options: function(e) {
                        return {
                            variables: {
                                id: e.match.params.tagID,
                                isTagsExperiment: Object($.b)()
                            }
                        }
                    },
                    skip: function(e) {
                        return !e.match.params.tagID
                    }
                }))(ne);
            var re = Object(c.connect)(function(e) {
                return {
                    browseType: Object(r.b)(e),
                    lastBrowsePath: e.browse.lastBrowsePath,
                    tagFilters: Object(r.a)(e)
                }
            }, function(e) {
                return Object(l.bindActionCreators)({
                    changeBrowseType: u.g,
                    changeLastBrowsePath: u.h,
                    changeTagFilters: u.i,
                    replaceLanguageTags: d.c
                }, e)
            })(ae);
            n.d(t, "BrowseCommunitiesPage", function() {
                return i.BrowseCommunitiesPage
            }), n.d(t, "BrowseCreativePage", function() {
                return o.BrowseCreativePage
            }), n.d(t, "BrowseGamesPage", function() {
                return s.BrowseGamesPage
            }), n.d(t, "BrowseRootPage", function() {
                return re
            })
        },
        "9x/k": function(e, t, n) {
            "use strict";
            var a;
            n.d(t, "a", function() {
                    return a
                }),
                function(e) {
                    e.Channels = "channels", e.ChannelsPlaystation = "channels-playstation", e.ChannelsXbox = "channels-xbox", e.Communities = "communities", e.CreativeCommunities = "creative-communities", e.Games = "games"
                }(a || (a = {}))
        },
        A65o: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return s
            });
            var a = n("mrSG"),
                r = n("q1tI"),
                i = n("yI6f"),
                o = n("x75U");

            function s() {
                return function(e) {
                    return function(t) {
                        function n() {
                            var e = null !== t && t.apply(this, arguments) || this;
                            return e.trackImpression = function(t) {
                                e.context.trackImpression(e.props.shelf, e.props.contentEdge, e.props.itemPosition, t)
                            }, e.trackClick = function(t, n, a) {
                                "string" != typeof a && (a = void 0), e.context.trackClick(e.props.shelf, e.props.contentEdge, e.props.itemPosition, t, n, a)
                            }, e
                        }
                        return a.__extends(n, t), n.prototype.render = function() {
                            var t = this.context.cardIDtoItemTrackingIDMap && this.props.contentEdge.node && this.context.cardIDtoItemTrackingIDMap[this.props.contentEdge.node.id],
                                n = this.props,
                                o = n.itemPosition,
                                s = n.rowPosition,
                                c = n.shelf,
                                l = Object(i.f)(c.title).rowName,
                                u = {
                                    trackImpression: this.trackImpression,
                                    trackClick: this.trackClick,
                                    shelfCardTrackingProps: {
                                        item_tracking_id: t || null,
                                        item_position: o,
                                        row_name: l,
                                        row_position: s
                                    }
                                };
                            return r.createElement(e, a.__assign({}, this.props, u))
                        }, n.contextTypes = o.a, n
                    }(r.Component)
                }
            }
        },
        AZIu: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            }), n.d(t, "b", function() {
                return o
            });
            var a, r = n("/7QA"),
                i = n("2xye");

            function o(e) {
                var t = {
                    section: e.section,
                    tag_position: e.tagPosition,
                    item_page: "browse",
                    search_event: e.searchEvent,
                    tag_id: e.tagId,
                    dismiss: e.dismiss
                };
                r.n.track(i.SpadeEventType.BrowseFilter, t)
            }! function(e) {
                e.Categories = "browse_categories", e.LiveChannels = "browse_livechannels", e.IncategoryChannels = "browse_incategory_channels"
            }(a || (a = {}))
        },
        BEfv: function(e, t, n) {
            var a = {
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
            a.loc.source = {
                body: '#import "twilight/features/tags/models/tag-fragment.gql"\nquery AnimatedTag_TagData($id: ID!) {\ncontentTag(id: $id) {\n...tagFragment\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var r = {};
            a.definitions = a.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !r[t] && (r[t] = !0, !0)
                })
            }(n("iiOx").definitions)), e.exports = a
        },
        BIFG: function(e, t, n) {},
        C29h: function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                r = n("q1tI"),
                i = n("9C/b"),
                o = n("fvjX"),
                s = n("/7QA"),
                c = n("N3I0"),
                l = n("8/mp"),
                u = n("f00E"),
                d = n("3W+h"),
                p = n("H/lO"),
                g = n("NZDK"),
                m = n("yR8l"),
                h = n("DMoW"),
                f = n("GIun"),
                v = n("Ue10"),
                y = function(e) {
                    var t, n = e.onClick,
                        a = e.tag;
                    n && (t = function() {
                        return n(a)
                    });
                    var i = "localizedDescription" in e.tag ? e.tag.localizedDescription : void 0;
                    return r.createElement(f.a, null, r.createElement(v.Sa, {
                        onClick: t
                    }, r.createElement(v.Va, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, r.createElement(v.V, {
                        title: i
                    }, a.localizedName))))
                };
            var T, k = n("Ryvb");
            ! function(e) {
                e.SuggestedTags = "suggested-tags"
            }(T || (T = {}));
            var b, C, w = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            filteredTopTags: t.props.data.game && t.props.data.game.tags && t.props.data.game.tags.filter(function(e) {
                                return !e.isAutomated
                            }).filter(function(e) {
                                return !t.props.selectedTagIDs.includes(e.id)
                            }).slice(0, 7) || []
                        }, t.renderTags = function() {
                            if (!t.props.data.game || !t.props.data.game.tags || !t.state.filteredTopTags) return null;
                            var e;
                            return e = t.state.filteredTopTags.map(t.renderSuggestedTag), r.createElement(v.Va, {
                                padding: {
                                    bottom: 1
                                }
                            }, e)
                        }, t.renderSuggestedTag = function(e) {
                            return r.createElement(y, {
                                "data-test-selector": T.SuggestedTags,
                                key: e.id,
                                onClick: function() {
                                    return t.props.onAddTag(e)
                                },
                                tag: e
                            })
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                        var t = this.props.data.game,
                            n = e.data.game;
                        if (function(e, t) {
                                return e.length !== t.length || e.some(function(e, n) {
                                    return t[n] !== e
                                })
                            }(this.props.selectedTagIDs, e.selectedTagIDs) || function(e, t) {
                                var n = e || [],
                                    a = t || [];
                                return n.length !== a.length || n.some(function(e, t) {
                                    return e.id !== a[t].id
                                })
                            }(t && t.tags, n && n.tags)) {
                            var a = n && n.tags && n.tags.filter(function(e) {
                                return !e.isAutomated
                            }).filter(function(t) {
                                return !e.selectedTagIDs.includes(t.id)
                            }).slice(0, 7) || [];
                            this.setState({
                                filteredTopTags: a
                            })
                        }
                    }, t.prototype.render = function() {
                        return this.props.data.loading || this.props.data.error ? null : this.props.data.game && this.props.data.game.tags && 0 !== this.props.data.game.tags.length && this.state.filteredTopTags && 0 !== this.state.filteredTopTags.length ? r.createElement(v.Va, null, r.createElement(v.Va, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, r.createElement(v.V, {
                            bold: !0
                        }, Object(s.d)("Suggestions", "TagSuggestions"))), this.renderTags(), r.createElement(v.Va, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, r.createElement(v.V, {
                            bold: !0
                        }, Object(s.d)("All Tags", "AllTagsTitle")))) : null
                    }, t
                }(r.Component),
                S = Object(m.a)(k, {
                    options: function(e) {
                        return {
                            variables: {
                                gameName: e.gameName,
                                tagType: h.J.TOP,
                                limit: 50
                            }
                        }
                    }
                })(w),
                _ = n("79jw"),
                N = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderTags = function() {
                            return t.props.categoryName ? t.props.data.game && t.props.data.game.tags && 0 !== t.props.data.game.tags.length ? t.props.data.game.tags.slice().sort(function(e, t) {
                                return e.localizedName.localeCompare(t.localizedName)
                            }).map(t.renderTag) : null : t.props.data.topTags && 0 !== t.props.data.topTags.length ? t.props.data.topTags.slice().sort(function(e, t) {
                                return e.localizedName.localeCompare(t.localizedName)
                            }).map(t.renderTag) : null
                        }, t.renderTag = function(e) {
                            return r.createElement(f.a, {
                                key: e.id
                            }, r.createElement(v.Sa, {
                                onClick: function() {
                                    return t.props.onAddTag(e)
                                }
                            }, r.createElement(v.Va, {
                                padding: {
                                    y: .5,
                                    x: 1
                                }
                            }, e.localizedName || e.tagName)))
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return this.props.data.error ? null : this.props.data.loading ? r.createElement(v.Va, {
                            display: v.W.Flex,
                            justifyContent: v.Ua.Center,
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, r.createElement(v.Xa, null)) : r.createElement(v.Va, null, this.renderTags())
                    }, t
                }(r.Component),
                E = Object(o.compose)(Object(m.a)(_, {
                    options: function(e) {
                        return {
                            variables: {
                                categoryName: e.categoryName,
                                limit: e.tagsLimit || 5,
                                showTopTagsByCategory: !!e.categoryName
                            }
                        }
                    }
                }))(N),
                I = n("sLmD"),
                O = n("AZIu");
            n("97MP");
            ! function(e) {
                e[e.TagAll = 0] = "TagAll", e[e.TagAllMinusAutomation = 1] = "TagAllMinusAutomation", e[e.TagCategory = 2] = "TagCategory", e[e.StreamTag = 3] = "StreamTag"
            }(b || (b = {})),
            function(e) {
                e.SearchContent = "tag-search-search-content", e.SearchDropdown = "search-dropdown-selector"
            }(C || (C = {}));
            var D = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.state = {
                            isOpen: !1,
                            searching: !1,
                            searchTerm: ""
                        }, n.languageCode = Object(I.a)(), n.renderSearchContent = function() {
                            var e = null;
                            return e = n.props.type === b.StreamTag ? n.renderStreamTagResults() : n.renderTagResults(), r.createElement(l.b, {
                                className: "tag-search__scrollable-area",
                                suppressScrollX: !0
                            }, r.createElement(v.Va, {
                                "data-test-selector": C.SearchContent
                            }, n.renderSuggestedTags(), e))
                        }, n.renderTagSearchResult = function(e) {
                            var t = Object(I.b)(e),
                                a = "tag_scope" in e ? e.tag_scope : void 0;
                            return r.createElement(y, {
                                key: t.id,
                                onClick: function() {
                                    return n.onTagResultSelected(t, a)
                                },
                                tag: t
                            })
                        }, n.renderStreamTagResults = function() {
                            return n.props.type === b.StreamTag && n.state.isOpen ? "" === n.state.searchTerm ? r.createElement(E, {
                                categoryName: n.props.categoryName,
                                onAddTag: n.onTagResultSelected,
                                tagsLimit: 100
                            }) : !n.state.searchResults && n.state.searching ? n.renderLoading() : n.state.searchResults && n.state.searchResults.streamTags && n.state.searchResults.streamTags.hits.length ? n.state.searchResults.streamTags.hits.map(n.renderTagSearchResult) : n.renderNoResults() : null
                        }, n.renderTagResults = function() {
                            return n.state.isOpen ? n.props.type === b.TagAll && "" === n.state.searchTerm ? r.createElement(E, {
                                onAddTag: n.onTagResultSelected,
                                tagsLimit: 100
                            }) : !n.state.searchResults && n.state.searching ? n.renderLoading() : n.state.searchResults && n.state.searchResults.tags && n.state.searchResults.tags.hits.length ? n.state.searchResults.tags.hits.map(n.renderTagSearchResult) : n.renderNoResults() : null
                        }, n.setTagSearchRef = function(e) {
                            n.tagSearch = e
                        }, n.onTagResultSelected = function(e, t) {
                            if (n.toggleTagSearch(!1), n.clearSearchTerm(), n.props.type === b.TagCategory && "SCOPE_ALL" === t ? s.o.history.push(d.a.Popular, {
                                    persistTags: !0
                                }) : n.props.type === b.TagAll && "SCOPE_CATEGORY" === t && s.o.history.push(d.a.Games, {
                                    persistTags: !0
                                }), n.props.onTagClick && (n.props.onTagClick(e), n.props.section && n.props.numSelectedTags)) {
                                var a = {
                                    section: n.props.section,
                                    tagPosition: n.props.numSelectedTags,
                                    searchEvent: !0,
                                    tagId: e.id,
                                    dismiss: !1
                                };
                                Object(O.b)(a)
                            }
                        }, n.onInputChange = function(e) {
                            n.props.onInputChange && n.props.onInputChange(e), clearTimeout(n.inputTimeout), n.toggleTagSearch(!0), n.setState({
                                searchTerm: e,
                                searching: !0
                            }, function() {
                                (n.props.type !== b.TagAll && n.props.type !== b.StreamTag || n.props.type === b.TagAll && "" !== n.state.searchTerm || n.props.type === b.StreamTag && "" !== n.state.searchTerm) && (n.inputTimeout = setTimeout(function() {
                                    n.search(n.state.searchTerm)
                                }, 200))
                            })
                        }, n.onFocusInput = function() {
                            "" === n.state.searchTerm ? n.onInputChange("") : n.toggleTagSearch(!0)
                        }, n.onSearchClose = function() {
                            n.toggleTagSearch(!1)
                        }, n.toggleTagSearch = function(e) {
                            n.tagSearch && n.tagSearch.toggle(e), n.setState({
                                isOpen: e
                            })
                        }, n.clearSearchTerm = function() {
                            n.tagSearch && n.tagSearch.setValue(""), n.setState({
                                searchTerm: "",
                                searching: !1
                            })
                        }, n.searchClient = new g.a({
                            appId: s.a.algoliaApplicationID,
                            apiKey: s.a.algoliaAPIKey,
                            apolloClient: s.o.apollo.client,
                            logger: s.j,
                            config: s.a,
                            stats: s.o.stats
                        }), n
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return r.createElement(c.a, {
                            autoFocus: this.props.autoFocus,
                            "data-test-selector": C.SearchDropdown,
                            inline: this.props.inline,
                            inputSize: this.props.inputSize,
                            onChange: this.onInputChange,
                            onFocusInput: this.onFocusInput,
                            onClose: this.onSearchClose,
                            placeholder: Object(s.d)("Search Tags", "TagSearch"),
                            ref: this.setTagSearchRef
                        }, this.renderSearchContent())
                    }, t.prototype.renderLoading = function() {
                        return r.createElement(v.Va, {
                            display: v.W.Flex,
                            justifyContent: v.Ua.Center,
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, r.createElement(v.Xa, {
                            delay: 0
                        }))
                    }, t.prototype.renderNoResults = function() {
                        return this.state.searching ? null : r.createElement(v.Va, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, Object(s.d)("No results found", "TagSearch"))
                    }, t.prototype.renderSuggestedTags = function() {
                        if (this.props.type !== b.TagAllMinusAutomation || "" !== this.state.searchTerm) return null;
                        var e = this.props.selectedTags && this.props.selectedTags.map(function(e) {
                            return e.id
                        }) || [];
                        return r.createElement(v.Va, null, r.createElement(S, {
                            gameName: this.props.categoryName,
                            onAddTag: this.onTagResultSelected,
                            selectedTagIDs: e
                        }))
                    }, t.prototype.search = function(e) {
                        return a.__awaiter(this, void 0, void 0, function() {
                            var t, n, r;
                            return a.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return e = e || "", t = {
                                            hitsPerPage: 100,
                                            restrictSearchableAttributes: ["localizations." + this.languageCode, "tag_name"]
                                        }, n = p.a.Tags, this.props.type === b.TagAllMinusAutomation ? (t.facetFilters = '["automated:false", "tag_scope:SCOPE_ALL"]', this.props.showAllDashboardTags && (t.hitsPerPage = 300)) : this.props.type === b.TagAll ? this.props.selectedTags && this.props.selectedTags.length ? t.facetFilters = "tag_scope:SCOPE_ALL" : t.facetFilters = '[["tag_scope:SCOPE_ALL", "tag_scope:SCOPE_CATEGORY"]]' : this.props.type === b.TagCategory ? "" === e || this.props.selectedTags && this.props.selectedTags.length ? t.facetFilters = "tag_scope:SCOPE_CATEGORY" : t.facetFilters = '[["tag_scope:SCOPE_ALL", "tag_scope:SCOPE_CATEGORY"]]' : this.props.type === b.StreamTag && (n = p.a.StreamTags, t.facetFilters = "category_id:" + this.props.categoryID), [4, this.searchClient.queryForType(n, e, u.a(), t)];
                                    case 1:
                                        return r = a.sent(), this.setState({
                                            searchResults: r,
                                            searching: !1
                                        }), [2]
                                }
                            })
                        })
                    }, t
                }(r.Component),
                P = Object(o.compose)(i.a)(D);
            n.d(t, "b", function() {
                return b
            }), n.d(t, !1, function() {
                return C
            }), n.d(t, !1, function() {
                return D
            }), n.d(t, "a", function() {
                return P
            })
        },
        G1iw: function(e, t, n) {
            var a = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "BrowseRootPage_Tag"
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
                }],
                loc: {
                    start: 0,
                    end: 194
                }
            };
            a.loc.source = {
                body: '#import "twilight/features/tags/models/tag-fragment.gql"\nquery BrowseRootPage_Tag($id: ID! $isTagsExperiment: Boolean!) {\ncontentTag(id: $id) @include(if: $isTagsExperiment) {\n...tagFragment\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var r = {};
            a.definitions = a.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !r[t] && (r[t] = !0, !0)
                })
            }(n("iiOx").definitions)), e.exports = a
        },
        GIun: function(e, t, n) {
            "use strict";
            var a = n("q1tI"),
                r = function(e) {
                    var t = a.Children.only(e.children);
                    return a.cloneElement(t, {
                        "data-selectable": !0,
                        tabIndex: -1
                    })
                };
            n.d(t, "a", function() {
                return r
            })
        },
        GxR5: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return r
            }), n.d(t, "a", function() {
                return i
            }), n.d(t, "c", function() {
                return o
            }), n.d(t, "d", function() {
                return s
            }), n.d(t, "e", function() {
                return c
            });
            var a = n("/7QA"),
                r = "https://passport.twitch.tv/forgot_username/new",
                i = "https://help.twitch.tv/customer/portal/emails/new",
                o = "https://help.twitch.tv/customer/portal/articles/1727973-about-site-suspensions-channel-bans-and-dmca",
                s = "https://www.twitch.tv/p/legal/terms-of-service/";

            function c() {
                return "https://passport.twitch.tv/password_resets/new?client_id=" + a.a.authSettings.clientID
            }
        },
        HSqT: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            }), n.d(t, "b", function() {
                return s
            });
            var a = n("/7QA"),
                r = [{
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

            function i(e) {
                return void 0 === e && (e = !1), [{
                    code: "asl",
                    label: "American Sign Language"
                }, {
                    code: "other",
                    label: e ? Object(a.d)("Other", "broadcaster-languages") : "Other"
                }]
            }
            var o = new Set(r.concat(i()).map(function(e) {
                return e.code
            }));

            function s() {
                var e = a.o.intl.getLanguageCode(),
                    t = function(t) {
                        return "en" === t.code ? 0 : e && e.startsWith(t.code) ? 1 : 2
                    };
                return r.slice().sort(function(e, n) {
                    var a = t(e),
                        r = t(n);
                    return a !== r ? a - r : a + ":" + e.label < r + ":" + n.label ? -1 : 1
                }).concat(i(!0))
            }
        },
        "I4m/": function(e, t, n) {},
        Igt5: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            }), n.d(t, "b", function() {
                return r
            }), n.d(t, "d", function() {
                return i
            }), n.d(t, "c", function() {
                return o
            }), n.d(t, "e", function() {
                return s
            }), n.d(t, "f", function() {
                return c
            }), n.d(t, "g", function() {
                return l
            }), n.d(t, "i", function() {
                return u
            }), n.d(t, "j", function() {
                return d
            }), n.d(t, "k", function() {
                return p
            }), n.d(t, "l", function() {
                return g
            }), n.d(t, "h", function() {
                return m
            }), n.d(t, "m", function() {
                return h
            });
            var a = "directory.LANGUAGE_TAGS_UPDATED",
                r = "directory.LOL_CHAMPIONS_CHANGED",
                i = "directory.LOL_CHAMPIONS_LOADING",
                o = "directory.LOL_CHAMPIONS_ERRORED",
                s = "directory.TAG_FILTER_ADDED",
                c = "directory.TAG_FILTER_CHANGED",
                l = "directory.TAG_FILTER_REMOVED";

            function u(e) {
                return {
                    type: a,
                    languageTags: e
                }
            }

            function d(e) {
                return {
                    type: o,
                    leagueOfLegendsChampionsErrored: e
                }
            }

            function p(e) {
                return {
                    type: i,
                    leagueOfLegendsChampionsLoading: e
                }
            }

            function g(e) {
                var t = {},
                    n = e.data;
                for (var a in n) n.hasOwnProperty(a) && (t[n[a].id] = n[a]);
                return {
                    type: r,
                    apiData: e,
                    championsMap: t,
                    apiVersion: e.version
                }
            }

            function m(e, t) {
                return {
                    type: s,
                    addedTag: e,
                    categoryName: t
                }
            }

            function h(e, t) {
                return {
                    type: l,
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
        JoTo: function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                r = n("q1tI"),
                i = n("/7QA"),
                o = n("f00E"),
                s = n("/IfK"),
                c = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.renderPortal = function(e) {
                            s.b ? s.b.provideContent(e, n.contentID) : i.j.warn("SideNavPageInfoSection must be defined on the SideNav component to manipulate its content.")
                        }, n.removePortal = function() {
                            s.b ? s.b.removeContent() : i.j.warn("SideNavPageInfoSection must be defined on the SideNav component to manipulate its content.")
                        }, n.contentID = Object(o.a)(), n
                    }
                    return a.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                        e.children ? this.renderPortal(e.children) : this.removePortal()
                    }, t.prototype.componentDidMount = function() {
                        s.b || i.j.warn("SideNavPageInfoSection must be defined on the SideNav component to manipulate its content."), this.props.children && this.renderPortal(this.props.children)
                    }, t.prototype.componentWillUnmount = function() {
                        this.removePortal()
                    }, t.prototype.render = function() {
                        return null
                    }, t
                }(r.Component);
            n.d(t, "a", function() {
                return c
            })
        },
        Lmqf: function(e, t, n) {
            e.exports = n.p + "assets/upsell-center-dark-6c092df86238db84cff1.png"
        },
        N3I0: function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                r = n("q1tI"),
                i = n("u5aL"),
                o = n("/7QA"),
                s = n("Ue10"),
                c = function() {
                    return r.createElement(s.Va, {
                        display: s.W.Flex,
                        flexDirection: s.Y.Column,
                        justifyContent: s.Ua.Center,
                        alignItems: s.f.Center,
                        flexGrow: 1,
                        fullHeight: !0,
                        padding: {
                            y: 1
                        },
                        zIndex: s.ac.Above
                    }, r.createElement(s.xb, {
                        color: s.O.Alt2,
                        textAlign: s.Jb.Center,
                        flexShrink: 1
                    }, r.createElement(s.mb, {
                        asset: s.nb.DeadGlitch,
                        width: 46,
                        height: 48
                    })), r.createElement(s.Na, {
                        margin: {
                            top: 1
                        },
                        textAlign: s.Jb.Center
                    }, r.createElement(s.V, {
                        type: s.Nb.H4,
                        "data-test-selector": "search-error-message"
                    }, Object(o.d)("Search is not available at this time", "DropdownSearchError"))), r.createElement(s.V, {
                        type: s.Nb.P
                    }, Object(o.d)("Please try again later", "DropdownSearchError")))
                },
                l = n("8Ad5"),
                u = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            focusSelectable: !1,
                            isInputFocused: !1,
                            isOpen: !1
                        }, t.handleChange = function(e) {
                            t.props.onChange(e.target.value)
                        }, t.handleFocus = function() {
                            t.props.onFocusInput && t.props.onFocusInput(), t.setState({
                                isInputFocused: !0
                            })
                        }, t.handleBlur = function() {
                            t.setState({
                                isInputFocused: !1
                            })
                        }, t.onKeyDown = function(e) {
                            var n = function() {
                                e.preventDefault(), e.stopPropagation()
                            };
                            e.keyCode === l.a.Esc ? t.setState({
                                isOpen: !1
                            }) : e.keyCode === l.a.Up ? (n(), t.focusNext(-1)) : e.keyCode === l.a.Down && (n(), t.focusNext(1))
                        }, t.onClickOut = function() {
                            t.state.isOpen && t.setState({
                                isOpen: !1
                            }), t.props.onClose && t.props.onClose()
                        }, t.onMouseOver = function(e) {
                            var n = e.target.closest("[data-selectable]");
                            n && (n.focus(), n.tabIndex = 0, t.state.currentFocus && (t.state.currentFocus.tabIndex = -1), t.setState({
                                currentFocus: n
                            }), t.props.onFocusChange && t.props.onFocusChange(n))
                        }, t.getInputRef = function(e) {
                            t.inputRef = e
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = void 0 === this.props.showDropdown || this.props.showDropdown,
                            t = this.props.isErrored ? r.createElement(c, null) : r.Children.only(this.props.children),
                            n = r.createElement(s.pb, {
                                onChange: this.handleChange,
                                onKeyDown: this.onKeyDown,
                                onBlur: this.handleBlur,
                                onFocus: this.handleFocus,
                                placeholder: this.props.placeholder,
                                id: "nav-search-input",
                                "data-a-target": "nav-search-input",
                                spellCheck: !1,
                                refDelegate: this.getInputRef,
                                size: this.props.inputSize,
                                autoFocus: this.props.autoFocus
                            });
                        return this.props.inline ? r.createElement(i.a, {
                            onClickOut: this.onClickOut
                        }, r.createElement(s.xb, {
                            background: this.state.isInputFocused || this.state.isOpen ? s.r.Base : void 0,
                            borderRadius: s.x.Large,
                            padding: .5,
                            position: s.db.Relative,
                            elevation: this.state.isInputFocused || this.state.isOpen ? 3 : void 0
                        }, n, e && r.createElement(s.xb, {
                            attachLeft: !0,
                            background: s.r.Base,
                            borderRadius: s.x.Large,
                            display: this.state.isOpen ? s.W.Block : s.W.Hide,
                            fullWidth: !0,
                            padding: {
                                y: 1
                            },
                            position: s.db.Absolute,
                            zIndex: s.ac.Above,
                            elevation: 3
                        }, r.createElement("div", {
                            tabIndex: 0,
                            onKeyDown: this.onKeyDown,
                            onMouseOver: this.props.enableMouseEvents ? this.onMouseOver : void 0
                        }, t)))) : r.createElement(i.a, {
                            onClickOut: this.onClickOut
                        }, n, e && r.createElement(s.u, a.__assign({
                            noTail: !0
                        }, this.props.balloonProps, {
                            show: this.state.isOpen
                        }), r.createElement("div", {
                            tabIndex: 0,
                            onKeyDown: this.onKeyDown,
                            onMouseOver: this.props.enableMouseEvents ? this.onMouseOver : void 0
                        }, t)))
                    }, t.prototype.toggle = function(e) {
                        e !== this.state.isOpen && this.setState({
                            isOpen: e
                        })
                    }, t.prototype.setValue = function(e) {
                        this.inputRef.value = e
                    }, t.prototype.focusNext = function(e) {
                        var t, n = document.querySelectorAll("[data-selectable=true]"),
                            a = document.activeElement,
                            r = Array.prototype.indexOf.call(n, a);
                        if ((t = r < 0 ? e > 0 ? 0 : n.length - 1 : r + e) < 0 && (t = 0), !(t >= n.length)) {
                            var i = n.item(t);
                            i.focus(), i.tabIndex = 0, this.state.currentFocus && (this.state.currentFocus.tabIndex = -1), this.setState({
                                currentFocus: i
                            }), this.props.onFocusChange && this.props.onFocusChange(i)
                        }
                    }, t
                }(r.Component);
            n.d(t, "a", function() {
                return u
            })
        },
        NmVs: function(e, t, n) {
            "use strict";
            var a = n("/MKj"),
                r = n("fvjX"),
                i = n("oA7Y"),
                o = n("WRGI"),
                s = n("mrSG"),
                c = n("17x9"),
                l = n("q1tI"),
                u = n("wIs1"),
                d = n("/7QA"),
                p = n("ZDlU"),
                g = n("8/mp"),
                m = n("yR8l"),
                h = n("geRD"),
                f = n("kduP"),
                v = n("MPw5"),
                y = n("2xye"),
                T = n("Uive"),
                k = n("cTNz"),
                b = n("oJov"),
                C = n("GnwI"),
                w = n("Bh3T"),
                S = n("bUox"),
                _ = n("TCeE"),
                N = n("fVj5"),
                E = n("AZIu"),
                I = n("9x/k"),
                O = n("rShu"),
                D = n("x/sq"),
                P = n("yI6f"),
                x = n("T2RZ"),
                F = n("Ue10"),
                L = n("0egc"),
                j = Object(x.a)(y.PageviewMedium.Browse, P.b.Game, P.c.BrowseCategories)(b.a),
                A = "directory-first-item",
                R = "directory-container";

            function B(e) {
                return (e.directories ? e.directories && e.directories.edges : e.directoriesWithTags && e.directoriesWithTags.edges || []).filter(function(e) {
                    return e && e.node && e.node.id
                })
            }
            var V = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            numSlotsAdded: 0
                        }, t.isTagsExperiment = Object(N.b)(), t.onWindowResize = function() {
                            return requestAnimationFrame(t.updateDisplayAdOrder)
                        }, t.updateDisplayAdOrder = function() {
                            var e = document.querySelector('[data-target="' + R + '"]'),
                                t = document.querySelector('[data-target="' + A + '"]'),
                                n = document.querySelector("#" + k.b.directory.rectangle);
                            if (t && e && n) {
                                var a = Math.round((e.clientWidth - 300) / t.clientWidth).toString();
                                n.style.order !== a && "0" !== a && (n.style.order = a)
                            }
                        }, t.removeLastTag = function() {
                            var e = t.props.tagFilters[t.props.tagFilters.length - 1],
                                n = {
                                    section: t.props.browseType === I.a.Games ? E.a.Categories : E.a.LiveChannels,
                                    tagPosition: t.props.tagFilters.length - 1,
                                    searchEvent: !0,
                                    tagId: e.id,
                                    dismiss: !0
                                };
                            Object(E.b)(n), t.props.removeTagFilter(e)
                        }, t.onSlotAdded = function() {
                            t.setState(function(e) {
                                var t = e.numSlotsAdded + 1;
                                return t === Object.keys(k.b.directory).length && v.a.display(k.b.directory.banner), {
                                    numSlotsAdded: t
                                }
                            })
                        }, t.canPaginate = function() {
                            return t.isTagsExperiment ? !(t.props.data.loading || t.props.data.error || !t.props.data.directoriesWithTags || !t.props.data.directoriesWithTags.pageInfo.hasNextPage) : !(t.props.data.loading || t.props.data.error || !t.props.data.directories || !t.props.data.directories.pageInfo.hasNextPage)
                        }, t
                    }
                    return s.__extends(t, e), t.prototype.componentWillMount = function() {
                        k.g.addListener(k.e, this.onSlotAdded)
                    }, t.prototype.componentDidMount = function() {
                        window.addEventListener("resize", this.onWindowResize), this.onRender()
                    }, t.prototype.componentDidUpdate = function() {
                        this.onRender()
                    }, t.prototype.componentWillUnmount = function() {
                        window.removeEventListener("resize", this.onWindowResize), k.g.removeListener(k.e, this.onSlotAdded)
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        this.props.sideNavExpanded !== e.sideNavExpanded && this.onWindowResize(), this.props.lastBrowsePath !== e.location.pathname && this.props.changeLastBrowsePath(decodeURIComponent(e.location.pathname))
                    }, t.prototype.render = function() {
                        var e = this;
                        if (this.isTagsExperiment && this.props.tagFilters.length > _.a) return l.createElement(S.a, {
                            errorType: S.b.TooManyTags,
                            onClickRemoveLastTag: this.removeLastTag,
                            tagFilters: this.props.tagFilters
                        });
                        if (this.props.data.loading) return l.createElement(F.Xa, {
                            fillContent: !0
                        });
                        if (!this.props.data.directories && !this.props.data.directoriesWithTags) return l.createElement(p.a, {
                            message: Object(d.d)("Error loading data.", "BrowseDirectory")
                        });
                        if (this.isTagsExperiment && this.props.data.directoriesWithTags && this.props.data.directoriesWithTags.edges && 0 === this.props.data.directoriesWithTags.edges.length) return l.createElement(S.a, {
                            errorType: S.b.NoResults,
                            onClickRemoveLastTag: this.removeLastTag,
                            tagFilters: this.props.tagFilters
                        });
                        var t = this.props.category === I.a.Communities ? y.PageviewContent.Community : y.PageviewContent.Game,
                            n = B(this.props.data).map(function(n, a) {
                                var r = n && n.node;
                                if (r) {
                                    var i = Object(D.a)({
                                            tags: n && n.node && n.node.tags,
                                            onClickTag: e.props.addTagFilter,
                                            tagFilters: e.props.tagFilters,
                                            section: e.props.browseType === I.a.Games ? E.a.Categories : E.a.LiveChannels,
                                            scrollToTop: e.context.scrollToTop
                                        }),
                                        o = !1,
                                        s = r && "Game" === r.__typename && r.activeDropCampaigns;
                                    return s && (o = s.some(function(e) {
                                        return e && e.applicableChannels && 0 === e.applicableChannels.length || !1
                                    })), l.createElement("div", {
                                        key: r.id,
                                        "data-target": a ? "" : A,
                                        style: {
                                            order: a
                                        }
                                    }, l.createElement(F.Va, {
                                        margin: {
                                            bottom: 2
                                        },
                                        "data-target": "directory-page__card-container",
                                        position: F.db.Relative
                                    }, l.createElement(j, {
                                        linkTo: {
                                            pathname: e.getPathURL(r.name, r.directoryType),
                                            state: {
                                                content: t,
                                                content_index: a,
                                                medium: y.PageviewMedium.Browse
                                            }
                                        },
                                        title: r.displayName,
                                        alt: Object(d.d)("{displayName} cover image", {
                                            displayName: r.displayName
                                        }, "BrowseDirectory"),
                                        src: r.avatarURL || d.a.defaultBoxArtURL,
                                        info: Object(d.d)("{viewerCount, plural, one {# viewer} other {# viewers}}", {
                                            viewerCount: r.viewersCount || 0
                                        }, "BrowseDirectory"),
                                        "data-a-target": "card-" + a,
                                        "data-a-id": "card-" + r.displayName.replace(/ /g, ""),
                                        tagListProps: i,
                                        showDropsBadge: o,
                                        trackingProps: {
                                            category: r.id,
                                            categoryName: r.displayName,
                                            itemPosition: a,
                                            rowPosition: 0,
                                            itemID: r.id
                                        }
                                    })))
                                }
                                return null
                            });
                        return l.createElement(F.Va, null, l.createElement(w.b, {
                            addPaddingWhenPlayerIsPersisting: !0
                        }), l.createElement("div", {
                            "data-target": R
                        }, l.createElement(F.Tb, {
                            gutterSize: F.Vb.Small,
                            childWidth: F.Ub.Small,
                            placeholderItems: 20
                        }, l.createElement(T.a, {
                            key: -1,
                            injectStyles: {
                                textAlign: "center",
                                marginBottom: 20,
                                order: 999,
                                width: 300,
                                height: 250
                            },
                            adUnit: k.d.directory,
                            slotID: k.b.directory.rectangle,
                            adSize: k.c.directory.rectangle,
                            "data-a-target": "browse-card-ad-slot",
                            targeting: {
                                pagetype: k.a.games
                            },
                            slotRendered: this.updateDisplayAdOrder,
                            autoEnable: !1
                        }), n), l.createElement(g.a, {
                            enabled: this.canPaginate(),
                            loadMore: this.props.loadMore,
                            pixelThreshold: 300
                        })), this.props.children)
                    }, t.prototype.getPathURL = function(e, t) {
                        return "COMMUNITY" === t || this.props.category === I.a.Communities || this.props.category === I.a.CreativeCommunities ? Object(f.a)(e) : Object(f.c)(e)
                    }, t.prototype.onRender = function() {
                        this.props.data && !this.props.data.loading && this.props.latencyTracking.reportInteractive(), this.updateDisplayAdOrder()
                    }, t.contextTypes = {
                        scrollToTop: c.func
                    }, t
                }(l.Component),
                G = Object(r.compose)(Object(C.c)("BrowseDirectory"), Object(m.a)(L, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            errorPolicy: "all",
                            variables: {
                                limit: 30,
                                directoryFilters: function(e) {
                                    switch (e) {
                                        case I.a.Communities:
                                            return [O.a.Communities, O.a.Creative];
                                        case I.a.CreativeCommunities:
                                            return [O.a.Creative];
                                        default:
                                            return [O.a.Games]
                                    }
                                }(e.browseType),
                                isTagsExperiment: Object(N.b)(),
                                tags: e.tagFilters.map(function(e) {
                                    return e.id
                                })
                            }
                        }
                    },
                    props: function(e) {
                        return s.__assign({}, e, {
                            loadMore: function() {
                                return e.data.fetchMore({
                                    query: L,
                                    variables: s.__assign({}, e.data.variables, {
                                        cursor: function(e) {
                                            var t;
                                            if (Object(N.b)()) {
                                                if (!e.directoriesWithTags || !e.directoriesWithTags.edges) return null;
                                                t = e.directoriesWithTags.edges
                                            } else {
                                                if (!e.directories || !e.directories.edges) return null;
                                                t = e.directories.edges
                                            }
                                            var n = t[t.length - 5];
                                            return n ? n.cursor : null
                                        }(e.data)
                                    }),
                                    updateQuery: function(e, t) {
                                        var n = t.fetchMoreResult;
                                        return Object(N.b)() ? {
                                            directoriesWithTags: s.__assign({}, n.directoriesWithTags, {
                                                edges: Object(h.c)(B(e), B(n))
                                            })
                                        } : {
                                            directories: s.__assign({}, n.directories, {
                                                edges: Object(h.c)(B(e), B(n))
                                            })
                                        }
                                    }
                                })
                            }
                        })
                    }
                }))(Object(u.a)(V));
            var M = Object(a.connect)(function(e) {
                return {
                    browseType: e.browse.browseType,
                    lastBrowsePath: e.browse.lastBrowsePath,
                    sideNavExpanded: e.ui.sideNavExpanded,
                    tagFilters: Object(o.a)(e)
                }
            }, function(e) {
                return Object(r.bindActionCreators)({
                    addTagFilter: i.f,
                    changeLastBrowsePath: i.h,
                    removeTagFilter: i.j
                }, e)
            })(G);
            n.d(t, "a", function() {
                return M
            })
        },
        OhOW: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return s
            });
            var a = n("mrSG"),
                r = n("/7QA"),
                i = n("+U0Y"),
                o = n("5xw2");

            function s(e) {
                return e.userPreferences.languagePreferences
            }
            r.o.store.registerReducer("userPreferences", function(e, t) {
                switch (void 0 === e && (e = {
                    languagePreferences: Object(o.b)()
                }), t.type) {
                    case i.a:
                        return a.__assign({}, e, {
                            languagePreferences: t.languagePreferences
                        });
                    default:
                        return e
                }
            })
        },
        Ryvb: function(e, t, n) {
            var a = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "SuggestedTags"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "gameName"
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
                                value: "tagType"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "TagType"
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
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Int"
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
                                        value: "gameName"
                                    }
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
                                        value: "tags"
                                    },
                                    arguments: [{
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "tagType"
                                        },
                                        value: {
                                            kind: "Variable",
                                            name: {
                                                kind: "Name",
                                                value: "tagType"
                                            }
                                        }
                                    }, {
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "limit"
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
                }],
                loc: {
                    start: 0,
                    end: 237
                }
            };
            a.loc.source = {
                body: '#import "twilight/features/tags/models/broadcast-tag-fragment.gql"\nquery SuggestedTags($gameName: String! $tagType: TagType! $limit: Int!) {\ngame(name: $gameName) {\nid\ntags(tagType: $tagType limit: $limit) {\n...broadcastTagFragment\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var r = {};
            a.definitions = a.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !r[t] && (r[t] = !0, !0)
                })
            }(n("Iqxx").definitions)), e.exports = a
        },
        S58p: function(e, t, n) {},
        SKDF: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n("mrSG"),
                r = n("q1tI"),
                i = n("oJmH"),
                o = n("/7QA"),
                s = n("V+GM"),
                c = n("NvVO"),
                l = n("2xye"),
                u = n("GnwI"),
                d = n("NmVs"),
                p = n("9x/k"),
                g = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        o.o.setPageTitle(Object(o.d)("All Games", "BrowseGamePage"))
                    }, t.prototype.render = function() {
                        return r.createElement(d.a, {
                            category: p.a.Games
                        })
                    }, t
                }(r.Component),
                m = Object(i.compose)(Object(u.c)("DirectoryPage", {
                    autoReportInteractive: !0,
                    destination: c.a.BrowseGames
                }), Object(s.a)({
                    location: l.PageviewLocation.Browse
                }))(g);
            n.d(t, "BrowseGamesPageComponent", function() {
                return g
            }), n.d(t, "BrowseGamesPage", function() {
                return m
            })
        },
        T2RZ: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return y
            });
            var a = n("mrSG"),
                r = n("q1tI"),
                i = n("/MKj"),
                o = n("fvjX"),
                s = n("/7QA"),
                c = n("2Ygb"),
                l = n("2xye"),
                u = n("oJov"),
                d = n("JVUd"),
                p = n("WRGI"),
                g = n("moLQ"),
                m = n("yI6f");

            function h(e, t) {
                if (t) {
                    var n = {};
                    return n = "string" == typeof t ? {
                        pathname: t
                    } : t, a.__assign({}, n, {
                        state: a.__assign({}, n.state, e)
                    })
                }
            }

            function f(e, t, n) {
                return n || (n = function() {}),
                    function(r) {
                        n && n(r), s.n.track(l.SpadeEventType.ItemClick, a.__assign({}, e, {
                            item_subsection: t
                        }))
                    }
            }

            function v(e, t) {
                return a.__assign({}, t, {
                    callback: function(n) {
                        t.callback && t.callback(n), s.n.track(l.SpadeEventType.ItemClick, a.__assign({}, e, {
                            item_subsection: l.PageviewContent.Tag,
                            tag_id: n.id
                        }))
                    }
                })
            }

            function y(e, t, n) {
                return function(y) {
                    var T = function(i) {
                        function o() {
                            var e = null !== i && i.apply(this, arguments) || this;
                            return e.itemTrackingID = Object(m.e)(), e.trackImpression = function() {
                                s.n.track(l.SpadeEventType.ItemDisplay, e.getCommonTrackingParams())
                            }, e
                        }
                        return a.__extends(o, i), o.prototype.componentDidMount = function() {
                            this.props.impressionListener.registerImpressionCallback(this.trackImpression)
                        }, o.prototype.render = function() {
                            if (y === u.a) {
                                var e = this.props;
                                return r.createElement(y, a.__assign({}, e, this.wrapGameCardPropsWithTracking(e)))
                            }
                            e = this.props;
                            return r.createElement(y, a.__assign({}, e, this.wrapPreviewCardPropsWithTracking(e)))
                        }, o.prototype.getTrackingLocationState = function() {
                            var t = this.props.tagListProps ? this.props.tagListProps.tags.map(function(e) {
                                    return e.id
                                }) : [],
                                n = this.props.tagFilters.map(function(e) {
                                    return e.id
                                }),
                                a = e;
                            this.props.tagFilters.length > 0 && (a === l.PageviewMedium.Browse ? a = l.PageviewMedium.BrowseDirectoryTags : a === l.PageviewMedium.Game && (a = l.PageviewMedium.GameDirectoryTags));
                            var r = {
                                tag_set: JSON.stringify(t),
                                tag_filter_set: JSON.stringify(n),
                                tag_streamer_set: "[]",
                                medium: a
                            };
                            return "POP" === s.o.history.action ? r : (s.o.history.location.state && s.o.history.location.state.medium === l.PageviewMedium.TwitchHome && (r.item_tracking_id = s.o.history.location.state.item_tracking_id, r.medium = s.o.history.location.state.medium, r.content = s.o.history.location.state.content), r)
                        }, o.prototype.getCommonTrackingParams = function() {
                            var a = this.props.trackingProps || {},
                                r = a.itemID,
                                i = a.category,
                                o = a.channelID,
                                s = a.itemPosition,
                                c = a.rowPosition,
                                l = this.props.tagListProps ? this.props.tagListProps.tags.map(function(e) {
                                    return e.id
                                }) : [];
                            return {
                                channel_id: void 0 !== o ? Number(o) : null,
                                component: null,
                                content_type: t,
                                item_tracking_id: this.itemTrackingID,
                                item_id: void 0 !== r ? r : null,
                                item_position: void 0 !== s ? s : null,
                                item_subsection: null,
                                item_page: e,
                                reason_target: null,
                                reason_target_type: null,
                                reason_type: null,
                                request_id: null,
                                row_name: null,
                                row_position: void 0 !== c ? c : null,
                                section: void 0 !== n ? n : null,
                                model_tracking_id: null,
                                tag_set: JSON.stringify(l),
                                tag_streamer_set: "[]",
                                filtered: this.props.tagFilters.length > 0,
                                category: void 0 !== i ? i : null,
                                tag_id: null
                            }
                        }, o.prototype.wrapPreviewCardPropsWithTracking = function(e) {
                            var t = this.getCommonTrackingParams(),
                                n = this.getTrackingLocationState();
                            return a.__assign({
                                onVideoTitleClick: f(t, l.PageviewContent.VideoTitle, e.onVideoTitleClick),
                                linkTo: h(n, this.props.linkTo),
                                onThumbnailClick: f(t, l.PageviewContent.VideoThumbnail, e.onThumbnailClick),
                                channelLinkTo: h(n, e.channelLinkTo),
                                onChannelLoginClick: f(t, l.PageviewContent.ChannelMetadata, e.onChannelLoginClick),
                                onChannelImageClick: f(t, l.PageviewContent.UserThumbnail, e.onChannelImageClick),
                                gameTitleLinkTo: h(n, e.gameTitleLinkTo),
                                onGameTitleClick: f(t, l.PageviewContent.GameName, e.onGameTitleClick)
                            }, e.tagListProps && {
                                tagListProps: v(t, e.tagListProps)
                            }, n.medium && {
                                trackingContext: {
                                    medium: n.medium,
                                    content: n.content
                                }
                            })
                        }, o.prototype.wrapGameCardPropsWithTracking = function(e) {
                            var t = this.getCommonTrackingParams(),
                                n = this.getTrackingLocationState();
                            return a.__assign({
                                linkTo: h(n, e.linkTo),
                                onClick: f(t, l.PageviewContent.GameBoxart, this.props.onClick)
                            }, e.tagListProps && {
                                tagListProps: v(t, e.tagListProps)
                            })
                        }, o.displayName = Object(c.a)(o.name, y), o
                    }(r.Component);
                    return Object(o.compose)(Object(d.a)("PreviewCard-" + e + "-" + t, {
                        percentage: 75
                    }), Object(i.connect)(function(t, n) {
                        var a = [];
                        if (e === l.PageviewMedium.Game) {
                            var r = n.trackingProps && n.trackingProps.categoryName;
                            a = r ? Object(g.a)(t, r) : []
                        } else a = Object(p.a)(t);
                        return {
                            tagFilters: a
                        }
                    }))(T)
                }
            }
        },
        TCeE: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            });
            var a = 5
        },
        TFM5: function(e, t, n) {},
        Uive: function(e, t, n) {
            "use strict";
            var a = n("/MKj"),
                r = n("mrSG"),
                i = n("q1tI"),
                o = n("/7QA"),
                s = n("N0BP"),
                c = n("MPw5"),
                l = n("cTNz"),
                u = n("KxT4"),
                d = n("YUvD"),
                p = "#google_ads_iframe_\\/3576121\\/twitch\\/directory_0",
                g = "#google_ads_iframe_\\/3576121\\/twitch\\/directory_1",
                m = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.logger = o.j.withCategory("ad-slot"), n.createSlot = function(e) {
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
                                            return n.trys.push([1, 3, , 4]), [4, c.a.createSlot(e.slotID, e.adUnit, e.adSize, e.targeting, e.autoEnable, e.gdpr.blockConsentRequiredContent)];
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
                                if (n.props.slotID === l.b.anonFront.takeover) return void(document.body.classList.contains("takeover") && n.setState({
                                    shouldDisplay: !0
                                }, function() {
                                    return n.slotRendered(e.slot)
                                }));
                                var a;
                                if (n.props.slotID === l.b.directory.banner) return void((a = n.slotRef.querySelector(p)) && 1 !== a.clientWidth && n.setState({
                                    shouldDisplay: !0
                                }, function() {
                                    return n.slotRendered(e.slot)
                                }));
                                if (n.props.slotID === l.b.directory.rectangle) return void((a = n.slotRef.querySelector(g)) && 1 !== a.clientWidth && n.setState({
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
                            return e.gdpr.status !== u.b.Loading && e.trackingSet
                        }, n.state = {
                            shouldDisplay: !1
                        }, n
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        l.g.addListener(l.f, this.onSlotRenderEnd), this.shouldCreateSlot(this.props) ? (this.logger.debug("Consent ready. Tracking is set. Creating slot (componentDidMount)", this.props.slotID), this.createSlot(this.props)) : this.logger.debug("Consent not ready or Tracking is not set. Skipping slot creation (componentDidMount)", this.props.slotID)
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        this.state.slotCreated || (!this.shouldCreateSlot(e) || e.gdpr.status === this.props.gdpr.status && e.trackingSet === this.props.trackingSet ? this.logger.debug("Tracking is not set. Skipping slot creation (componentWillReceiveProps)", this.props.slotID) : (this.logger.debug("Tracking is set. Creating slot (componentWillReceiveProps)", this.props.slotID), this.createSlot(e)))
                    }, t.prototype.componentWillUnmount = function() {
                        this.logger.debug("Destroying Slot (componentWillUnmount)", this.props.slotID), l.g.removeListener(l.f, this.onSlotRenderEnd), this.state.slot && c.a.destroySlot(this.state.slot)
                    }, t.prototype.shouldComponentUpdate = function(e, t) {
                        return t.shouldDisplay !== this.state.shouldDisplay
                    }, t.prototype.render = function() {
                        var e = r.__assign({}, this.props.injectStyles);
                        return this.state.shouldDisplay || (e.display = "none"), i.createElement("div", r.__assign({
                            style: e,
                            id: this.props.slotID,
                            ref: this.setRef
                        }, Object(s.a)(this.props)))
                    }, t
                }(i.Component),
                h = Object(d.a)(u.c.Amazon)(m);
            var f = Object(a.connect)(function(e) {
                return {
                    trackingSet: e.ads.trackingSet
                }
            })(h);
            n.d(t, "a", function() {
                return f
            })
        },
        Ve5Q: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "UpsellCenter_Channel"
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
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 162
                }
            };
            n.loc.source = {
                body: "query UpsellCenter_Channel($login: String!) {\nuser(login: $login) {\nid\ndisplayName\nprofileImageURL(width: 70)\nbroadcastSettings {\nid\ngame {\nid\ndisplayName\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        WRGI: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return s
            }), n.d(t, "a", function() {
                return c
            });
            var a = n("mrSG"),
                r = n("/7QA"),
                i = n("oA7Y"),
                o = n("9x/k");

            function s(e) {
                return e.browse.browseType
            }

            function c(e) {
                return e.browse.tagFilters
            }
            r.o.store.registerReducer("browse", function(e, t) {
                switch (void 0 === e && (e = {
                    browseType: o.a.Games,
                    lastBrowsePath: "/directory",
                    tagFilters: []
                }), t.type) {
                    case i.a:
                        return a.__assign({}, e, {
                            browseType: t.browseType
                        });
                    case i.c:
                        var n = e.tagFilters.every(function(e) {
                                return e.id !== t.addedTag.id
                            }),
                            r = e.tagFilters.slice();
                        return n && r.push(t.addedTag), a.__assign({}, e, {
                            tagFilters: r
                        });
                    case i.d:
                        return a.__assign({}, e, {
                            tagFilters: t.tagFilters
                        });
                    case i.e:
                        var s = e.tagFilters.filter(function(e) {
                            return e.id !== t.removedTag.id
                        });
                        return a.__assign({}, e, {
                            tagFilters: s
                        });
                    case i.b:
                        return a.__assign({}, e, {
                            lastBrowsePath: t.lastBrowsePath
                        });
                    default:
                        return e
                }
            })
        },
        X7a7: function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                r = n("cr+I"),
                i = n("/7QA"),
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
                c = function(e) {
                    return e && s[e] || "en_US"
                },
                l = n("Igt5");
            n.d(t, "b", function() {
                return g
            }), n.d(t, "d", function() {
                return m
            }), n.d(t, "c", function() {
                return h
            }), n.d(t, "a", function() {
                return f
            });
            var u = "languageTags",
                d = 0,
                p = 350;

            function g() {
                var e = this;
                return function(t) {
                    clearTimeout(d), d = setTimeout(function() {
                        return a.__awaiter(e, void 0, void 0, function() {
                            var e, n, s, u, d, p;
                            return a.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        e = i.o.logger.withCategory("leagueoflegends-api"), t(Object(l.k)(!0)), a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), n = i.o.intl.getLanguageCode(), s = c(n), u = o.a.getAPIURL("/api/lol/champions?" + r.stringify({
                                            locale: s,
                                            on_site: 1
                                        })).toString(), [4, o.a.get(u)];
                                    case 2:
                                        return (d = a.sent()).body ? t(Object(l.l)(d.body)) : (e.warn("LoL champion API response body was empty."), t(Object(l.j)(!0))), [3, 4];
                                    case 3:
                                        throw p = a.sent(), t(Object(l.j)(!0)), e.error(p, "Failed to load LoL champion data"), p;
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, p)
                }
            }

            function m(e, t) {
                var n = this;
                return function(r) {
                    return a.__awaiter(n, void 0, void 0, function() {
                        var n, o;
                        return a.__generator(this, function(a) {
                            return n = new Set(f()), t ? n.add(e) : n.delete(e), o = Array.from(n), i.l.set(u, o), r(Object(l.i)(o)), [2]
                        })
                    })
                }
            }

            function h(e) {
                var t = this;
                return function(n) {
                    return a.__awaiter(t, void 0, void 0, function() {
                        return a.__generator(this, function(t) {
                            return i.l.set(u, e), n(Object(l.i)(e)), [2]
                        })
                    })
                }
            }

            function f() {
                return i.l.get(u, [])
            }
        },
        b6Yk: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            });
            var a = n("mrSG"),
                r = n("/7QA"),
                i = n("kRBY"),
                o = function() {
                    function e() {}
                    return e.get = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), a.__awaiter(this, void 0, Promise, function() {
                            return a.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, this.request(e, a.__assign({}, t, {
                                            method: "GET"
                                        }), n)];
                                    case 1:
                                        return [2, r.sent()]
                                }
                            })
                        })
                    }, e.getOrThrow = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), a.__awaiter(this, void 0, Promise, function() {
                            return a.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, a.__assign({}, t, {
                                            method: "GET"
                                        }), n)];
                                    case 1:
                                        return [2, r.sent()]
                                }
                            })
                        })
                    }, e.put = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), a.__awaiter(this, void 0, Promise, function() {
                            return a.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, this.request(e, a.__assign({}, t, {
                                            method: "PUT"
                                        }), n)];
                                    case 1:
                                        return [2, r.sent()]
                                }
                            })
                        })
                    }, e.putOrThrow = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), a.__awaiter(this, void 0, Promise, function() {
                            return a.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, a.__assign({}, t, {
                                            method: "PUT"
                                        }), n)];
                                    case 1:
                                        return [2, r.sent()]
                                }
                            })
                        })
                    }, e.post = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), a.__awaiter(this, void 0, Promise, function() {
                            return a.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, this.request(e, a.__assign({}, t, {
                                            method: "POST"
                                        }), n)];
                                    case 1:
                                        return [2, r.sent()]
                                }
                            })
                        })
                    }, e.postOrThrow = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), a.__awaiter(this, void 0, Promise, function() {
                            return a.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, a.__assign({}, t, {
                                            method: "POST"
                                        }), n)];
                                    case 1:
                                        return [2, r.sent()]
                                }
                            })
                        })
                    }, e.delete = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), a.__awaiter(this, void 0, Promise, function() {
                            return a.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, this.request(e, a.__assign({}, t, {
                                            method: "DELETE"
                                        }), n)];
                                    case 1:
                                        return [2, r.sent()]
                                }
                            })
                        })
                    }, e.deleteOrThrow = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), a.__awaiter(this, void 0, Promise, function() {
                            return a.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, a.__assign({}, t, {
                                            method: "DELETE"
                                        }), n)];
                                    case 1:
                                        return [2, r.sent()]
                                }
                            })
                        })
                    }, e.request = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), a.__awaiter(this, void 0, Promise, function() {
                            var r, i, o, s;
                            return a.__generator(this, function(c) {
                                switch (c.label) {
                                    case 0:
                                        return t = this.constructOptions(t, n), r = t.headers ? t.headers["Content-Type"] : void 0, i = this.serialize(t.body, r), o = a.__assign({}, t, {
                                            body: i
                                        }), [4, this._fetch(e, o)];
                                    case 1:
                                        return s = c.sent(), [4, this.constructLegacyAPIResponse(s)];
                                    case 2:
                                        return [2, c.sent()]
                                }
                            })
                        })
                    }, e.requestOrThrow = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), a.__awaiter(this, void 0, Promise, function() {
                            var r;
                            return a.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return i.trys.push([0, 2, , 3]), [4, this.request(e, t, n)];
                                    case 1:
                                        if ((r = i.sent()).requestError) throw r.requestError;
                                        if (r.error) throw new Error("Error while sending legacy-api request: " + r.error.status + " - " + r.error.message);
                                        return [2, a.__assign({}, r, {
                                            body: r.body
                                        })];
                                    case 2:
                                        throw i.sent();
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, e.getAPIURL = function(e) {
                        return new URL(e, r.o.config.apiBaseURL)
                    }, e.constructLegacyAPIResponse = function(e) {
                        return a.__awaiter(this, void 0, Promise, function() {
                            var t, n, r, i;
                            return a.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        t = {
                                            status: e.status
                                        }, a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), [4, e.json()];
                                    case 2:
                                        return n = a.sent(), e.ok ? t.body = n : t.error = n, [3, 4];
                                    case 3:
                                        return r = a.sent(), e.headers && e.headers.get && (i = e.headers.get("Content-Type")) && -1 !== i.indexOf("application/json") && (t.requestError = r), [3, 4];
                                    case 4:
                                        return [2, t]
                                }
                            })
                        })
                    }, e._fetch = function(e, t) {
                        return void 0 === t && (t = {}), a.__awaiter(this, void 0, Promise, function() {
                            return a.__generator(this, function(n) {
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
                            headers: a.__assign({}, this.getDefaultHeaders(e, t), e.headers)
                        })
                    }, e.serialize = function(e, t) {
                        return "application/json; charset=UTF-8" === t ? JSON.stringify(e) : "string" == typeof e ? e : e && FormData.prototype.isPrototypeOf(e) ? e : e ? (this.logger.error(new Error("Could not serialize this request body for the content-type provided."), "attempting to serialize object with a non-JSON content-type", {
                            contentType: t
                        }), null) : null
                    }, e.getDefaultHeaders = function(e, t) {
                        var n = r.o.store.getState(),
                            a = {
                                Accept: "application/vnd.twitchtv.v" + (t.version || 5) + "+json; charset=UTF-8",
                                "Accept-Language": "en-us",
                                "Client-ID": r.o.config.legacyClientID,
                                "X-Requested-With": "XMLHttpRequest"
                            };
                        e.body && FormData.prototype.isPrototypeOf(e.body) || (a["Content-Type"] = "application/json; charset=UTF-8");
                        var o = Object(i.e)(n);
                        return o && (a.Authorization = "OAuth " + o.authToken, o.legacyCSRFToken && (a["Twitch-Api-Token"] = o.legacyCSRFToken)), t.excludeHeaders && t.excludeHeaders.forEach(function(e) {
                            a[e] && delete a[e]
                        }), a
                    }, e.logger = r.o.logger.withCategory("legacy-api"), e
                }()
        },
        bUox: function(e, t, n) {
            "use strict";
            var a, r = n("mrSG"),
                i = n("q1tI"),
                o = n("/7QA"),
                s = n("Ue10");
            ! function(e) {
                e[e.NoResults = 0] = "NoResults", e[e.TooManyTags = 1] = "TooManyTags"
            }(a || (a = {}));
            var c = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderRemoveButton = function() {
                        if (t.props.tagFilters && t.props.tagFilters.length && t.props.onClickRemoveLastTag) {
                            var e = t.props.tagFilters[t.props.tagFilters.length - 1];
                            return i.createElement(s.Va, {
                                margin: {
                                    top: 2
                                }
                            }, i.createElement(s.z, {
                                onClick: t.props.onClickRemoveLastTag,
                                type: s.F.Hollow
                            }, Object(o.d)("Remove the {lastAdded} tag and try again", {
                                lastAdded: e.localizedName || e.tagName
                            }, "TagError")))
                        }
                    }, t.getErrorMessage = function() {
                        switch (t.props.errorType) {
                            case a.NoResults:
                                return Object(o.d)("No results found", "TagError");
                            case a.TooManyTags:
                                return Object(o.d)("You cannot apply more than five tags", "TagError");
                            default:
                                return t.props.errorType
                        }
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return i.createElement(s.Va, null, i.createElement(s.V, {
                        type: s.Nb.H3
                    }, this.getErrorMessage()), i.createElement(s.V, {
                        color: s.O.Alt2,
                        fontSize: s.Aa.Size5
                    }, Object(o.d)("Try adjusting your tags to find what you're looking for.", "TagError")), this.renderRemoveButton())
                }, t
            }(i.Component);
            n.d(t, "b", function() {
                return a
            }), n.d(t, "a", function() {
                return c
            })
        },
        cnlr: function(e, t, n) {
            "use strict";
            var a, r = n("mrSG"),
                i = n("q1tI"),
                o = n("/MKj"),
                s = n("fvjX"),
                c = n("/7QA"),
                l = n("Lmqf"),
                u = n.n(l),
                d = n("yR8l"),
                p = n("1/iK"),
                g = n("y5D0"),
                m = n("ugtu"),
                h = n("D7An");
            ! function(e) {
                e.Learn = "learn", e.Support = "support", e.LiveUp = "liveup", e.Recommendation = "rec", e.Bullet = "bullet"
            }(a || (a = {}));
            var f, v, y = n("Ue10"),
                T = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            upsellCenterChannelsAssignment: t.props.showDefault ? null : function() {
                                var e = c.o.experiments.getAssignment(h.b.WebSideNavUpsellCenterChannels);
                                return e === a.Learn || e === a.Support || e === a.LiveUp || e === a.Recommendation || e === a.Bullet ? e : null
                            }()
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(y.Va, {
                            margin: {
                                y: 1
                            }
                        }, this.renderText())
                    }, t.prototype.renderText = function() {
                        if (!this.props.data || this.props.showDefault || !this.state.upsellCenterChannelsAssignment) return this.renderDefault();
                        switch (this.state.upsellCenterChannelsAssignment) {
                            case a.Learn:
                                return this.renderTextContent(Object(c.d)("Want to master <x:bold>{game}</x:bold>?", {
                                    game: this.props.data.game,
                                    "x:bold": m.j
                                }, "UpsellCenterText"), Object(c.d)("Sign up to learn from the best.", "UpsellCenterText"));
                            case a.Support:
                                return this.renderTextContent(Object(c.d)("Sign up and follow to support <x:bold>{name}</x:bold> and all your favorite streamers!", {
                                    name: this.props.data.channelDisplayName,
                                    "x:bold": m.j
                                }, "UpsellCenterText"));
                            case a.LiveUp:
                                return this.renderTextContent(Object(c.d)("Late to the show?", "UpsellCenterText"), Object(c.d)("Sign up and get notifications next time <x:bold>{name}</x:bold> goes live.", {
                                    name: this.props.data.channelDisplayName,
                                    "x:bold": m.j
                                }, "UpsellCenterText"));
                            case a.Recommendation:
                                return this.renderTextContent(Object(c.d)("Discover more streamers like <x:bold>{name}</x:bold>!", {
                                    name: this.props.data.channelDisplayName,
                                    "x:bold": m.j
                                }, "UpsellCenterText"), Object(c.d)("Sign up to see which channels we've picked just for you.", "UpsellCenterText"));
                            case a.Bullet:
                                return this.renderBulletPoints(Object(c.d)("Sign up to experience the best of <x:bold>{name}</x:bold>:", {
                                    name: this.props.data.channelDisplayName,
                                    "x:bold": m.j
                                }, "UpsellCenterText"), [Object(c.d)("Chat with other fans", "UpsellCenterText"), Object(c.d)("Capture your favorite moments", "UpsellCenterText"), Object(c.d)("Watch in Dark Mode!", "UpsellCenterText")]);
                            default:
                                return this.renderDefault()
                        }
                    }, t.prototype.renderDefault = function() {
                        return this.renderTextContent(Object(c.d)("Join the Twitch community!", "UpsellCenterText"), Object(c.d)("Discover the best live streams anywhere.", "UpsellCenterText"))
                    }, t.prototype.renderTextContent = function(e, t) {
                        return i.createElement(i.Fragment, null, i.createElement(y.V, {
                            color: y.O.Base,
                            fontSize: y.Aa.Size4
                        }, e), i.createElement(y.V, {
                            color: y.O.Alt2,
                            fontSize: y.Aa.Size5
                        }, t))
                    }, t.prototype.renderBulletPoints = function(e, t) {
                        var n = t.map(function(e, t) {
                            return i.createElement(y.Va, {
                                key: "upsell-center-text-" + t,
                                display: y.W.Flex,
                                flexDirection: y.Y.Row,
                                alignItems: y.f.Start
                            }, i.createElement(y.mb, {
                                type: y.ob.Alt2,
                                asset: y.nb.Check
                            }), i.createElement(y.Va, {
                                margin: {
                                    left: 1
                                },
                                textAlign: y.Jb.Left
                            }, i.createElement(y.V, {
                                color: y.O.Alt2,
                                fontSize: y.Aa.Size6
                            }, e)))
                        });
                        return i.createElement(i.Fragment, null, i.createElement(y.V, {
                            color: y.O.Base,
                            fontSize: y.Aa.Size4
                        }, e), i.createElement(y.Va, {
                            margin: {
                                top: 1
                            }
                        }, n))
                    }, t
                }(i.Component),
                k = n("2xye");
            ! function(e) {
                e.SideNav = "sidenav"
            }(f || (f = {})),
            function(e) {
                e.Upsell = "upsell"
            }(v || (v = {}));
            var b = n("Ve5Q"),
                C = (n("wqI2"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.impressionEventFired = !1, t.signup = function() {
                            ! function(e) {
                                var t = r.__assign({
                                    section: f.SideNav,
                                    click_subsection: v.Upsell
                                }, e);
                                c.n.track(k.SpadeEventType.ItemClick, t)
                            }(), t.props.signup()
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.trackImpression()
                    }, t.prototype.componentDidUpdate = function() {
                        this.trackImpression()
                    }, t.prototype.render = function() {
                        return i.createElement(y.xb, {
                            background: y.r.AccentAlt2,
                            display: y.W.Flex,
                            flexDirection: y.Y.Column,
                            padding: {
                                y: 2,
                                x: 1
                            },
                            margin: 1
                        }, this.renderImage(), i.createElement(y.Va, {
                            textAlign: y.Jb.Center
                        }, this.renderText(), i.createElement(y.z, {
                            onClick: this.signup,
                            size: y.D.Large
                        }, i.createElement(y.Va, {
                            padding: {
                                x: 1
                            }
                        }, i.createElement(y.V, {
                            color: y.O.Base
                        }, Object(c.d)("Sign up", "UpsellCenter"))))))
                    }, t.prototype.renderText = function() {
                        if (!this.props.channelLogin) return i.createElement(T, {
                            showDefault: !0
                        });
                        if (this.props.data && this.props.data.user) {
                            var e = {
                                game: this.props.data.user.broadcastSettings && this.props.data.user.broadcastSettings.game && this.props.data.user.broadcastSettings.game.displayName || "",
                                channelDisplayName: this.props.data.user.displayName || ""
                            };
                            return i.createElement(T, {
                                data: e
                            })
                        }
                    }, t.prototype.renderImage = function() {
                        var e = i.createElement(y.S, {
                            alt: Object(c.d)("Upsell Center", "UpsellCenter"),
                            src: u.a
                        });
                        return this.props.channelLogin && this.props.data && this.props.data.user && this.props.data.user.profileImageURL ? i.createElement(y.Va, {
                            position: y.db.Relative
                        }, i.createElement(y.Va, {
                            className: "upsell-center__avatar",
                            position: y.db.Absolute,
                            zIndex: y.ac.Above
                        }, i.createElement(y.q, {
                            src: this.props.data.user.profileImageURL,
                            alt: Object(c.d)("{displayName}'s Profile Image", {
                                displayName: this.props.data.user.displayName || ""
                            }, "UpsellCenter"),
                            borderRadius: y.x.Large,
                            size: 40
                        })), e) : e
                    }, t.prototype.trackImpression = function() {
                        this.impressionEventFired || (! function(e) {
                            var t = r.__assign({
                                section: f.SideNav
                            }, e);
                            c.n.track(k.SpadeEventType.ItemDisplay, t)
                        }(), this.impressionEventFired = !0)
                    }, t
                }(i.PureComponent));
            var w = Object(s.compose)(Object(d.a)(b, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.channelLogin || ""
                            }
                        }
                    },
                    skip: function(e) {
                        return !e.channelLogin
                    }
                }), Object(o.connect)(null, function(e) {
                    return Object(s.bindActionCreators)({
                        signup: function() {
                            return Object(g.g)(p.a.SideNavUpsellCenter)
                        }
                    }, e)
                }))(C),
                S = n("kRBY"),
                _ = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return this.props.isLoggedIn || this.props.collapsed ? null : i.createElement(w, r.__assign({}, this.props))
                    }, t
                }(i.PureComponent);
            var N = Object(o.connect)(function(e) {
                return {
                    collapsed: !e.ui.sideNavExpanded,
                    isLoggedIn: Object(S.f)(e)
                }
            })(_);
            n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {
                return C
            }), n.d(t, !1, function() {
                return _
            }), n.d(t, "a", function() {
                return N
            })
        },
        moLQ: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return s
            }), n.d(t, "b", function() {
                return c
            });
            var a = n("mrSG"),
                r = n("/7QA"),
                i = n("Igt5"),
                o = n("X7a7");

            function s(e, t) {
                return e.directory.tagFilters[t] || []
            }

            function c(e) {
                return e.directory.languageTags
            }
            r.o.store.registerReducer("directory", function(e, t) {
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
                    case i.a:
                        return a.__assign({}, e, {
                            languageTags: t.languageTags
                        });
                    case i.b:
                        return a.__assign({}, e, {
                            leagueOfLegends: {
                                apiData: t.apiData,
                                championsMap: t.championsMap,
                                isError: !1,
                                isLoading: !1,
                                version: t.apiVersion
                            }
                        });
                    case i.c:
                        return a.__assign({}, e, {
                            leagueOfLegends: a.__assign({}, e.leagueOfLegends, {
                                isError: t.leagueOfLegendsChampionsErrored,
                                isLoading: !1
                            })
                        });
                    case i.d:
                        return a.__assign({}, e, {
                            leagueOfLegends: a.__assign({}, e.leagueOfLegends, {
                                isError: !1,
                                isLoading: t.leagueOfLegendsChampionsLoading
                            })
                        });
                    case i.e:
                        var n = a.__assign({}, e.tagFilters),
                            r = n[t.categoryName];
                        return (void 0 === r || r.every(function(e) {
                            return e.id !== t.addedTag.id
                        })) && (n[t.categoryName] = (n[t.categoryName] || []).concat([t.addedTag])), a.__assign({}, e, {
                            tagFilters: n
                        });
                    case i.f:
                        return e.tagFilters[t.categoryName] = t.tagFilters.slice(), a.__assign({}, e);
                    case i.g:
                        if (void 0 === e.tagFilters[t.categoryName]) return a.__assign({}, e);
                        var s = e.tagFilters[t.categoryName].filter(function(e) {
                            return e.id !== t.removedTag.id
                        });
                        return e.tagFilters[t.categoryName] = s, a.__assign({}, e);
                    default:
                        return e
                }
            })
        },
        oA7Y: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            }), n.d(t, "b", function() {
                return r
            }), n.d(t, "c", function() {
                return i
            }), n.d(t, "d", function() {
                return o
            }), n.d(t, "e", function() {
                return s
            }), n.d(t, "f", function() {
                return c
            }), n.d(t, "g", function() {
                return l
            }), n.d(t, "i", function() {
                return u
            }), n.d(t, "h", function() {
                return d
            }), n.d(t, "j", function() {
                return p
            });
            var a = "browse.BROWSE_TYPE_CHANGED",
                r = "browse.LAST_BROWSE_PATH",
                i = "browse.TAG_FILTER_ADDED",
                o = "browse.TAG_FILTER_CHANGED",
                s = "browse.TAG_FILTER_REMOVED";

            function c(e) {
                return {
                    type: i,
                    addedTag: e
                }
            }

            function l(e) {
                return {
                    type: a,
                    browseType: e
                }
            }

            function u(e) {
                return {
                    type: o,
                    tagFilters: e
                }
            }

            function d(e) {
                return {
                    type: r,
                    lastBrowsePath: e
                }
            }

            function p(e) {
                return {
                    type: s,
                    removedTag: e
                }
            }
        },
        oJov: function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                r = n("q1tI"),
                i = n("/7QA"),
                o = n("Ue10"),
                s = (n("1mcJ"), function(e) {
                    return r.createElement(o.Va, a.__assign({
                        className: "drops-badge",
                        position: o.db.Absolute,
                        attachTop: !0,
                        attachRight: !0
                    }, Object(o.bc)(e)), r.createElement(o.Qb, {
                        direction: o.Sb.Top,
                        align: o.Rb.Right,
                        label: Object(i.d)("Offers in-game Drops", "DropsBadge")
                    }, r.createElement(o.xb, {
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
                    }, r.createElement(o.T, {
                        type: o.U.Inherit,
                        hoverColorInherit: !0,
                        to: "https://help.twitch.tv/customer/en/portal/articles/2754380-how-to-earn-drops"
                    }, r.createElement(o.mb, {
                        asset: o.nb.Drops
                    })))))
                }),
                c = n("0LAi"),
                l = n("fVj5"),
                u = function(e) {
                    return r.createElement(o.Va, null, r.createElement(o.y, a.__assign({}, e)), Object(l.a)() && e.tagListProps && 0 !== e.tagListProps.tags.length && r.createElement(o.Va, {
                        margin: {
                            top: .5
                        }
                    }, r.createElement(c.a, a.__assign({}, e.tagListProps, {
                        tagNumberLimit: 3
                    }))), !0 === e.showDropsBadge && r.createElement(s, null))
                };
            n.d(t, "a", function() {
                return u
            })
        },
        odjZ: function(e, t, n) {
            "use strict";
            var a, r = n("mrSG"),
                i = n("q1tI"),
                o = n("fvjX"),
                s = n("yR8l"),
                c = n("Ue10"),
                l = (n("BIFG"), n("BEfv"));
            ! function(e) {
                e.Bounce = "animated-tag--bounce", e.NoBounce = "animated-tag--no-bounce"
            }(a || (a = {}));
            var u = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = null;
                        if (this.props.getTagFromGQL) {
                            if (!this.props.data || this.props.data.loading || this.props.data.error || !this.props.data.contentTag) return null;
                            var t = this.props.data.contentTag;
                            e = i.createElement(c.Ga, {
                                label: t.localizedName,
                                onClick: this.props.onClickForGQLTag && this.props.onClickForGQLTag.bind(this, t),
                                selected: !0,
                                size: c.Qa.Large
                            })
                        } else this.props.formTagProps && (e = i.createElement(c.Ga, r.__assign({}, this.props.formTagProps)));
                        return i.createElement("div", {
                            className: a.NoBounce,
                            "data-tag-filter": this.props.tagID
                        }, e)
                    }, t
                }(i.Component),
                d = Object(o.compose)(Object(s.a)(l, {
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
                }))(u);
            n.d(t, "b", function() {
                return a
            }), n.d(t, !1, function() {
                return u
            }), n.d(t, "a", function() {
                return d
            })
        },
        rShu: function(e, t, n) {
            "use strict";
            var a;
            n.d(t, "a", function() {
                    return a
                }),
                function(e) {
                    e.Games = "GAMES", e.Communities = "COMMUNITIES", e.Creative = "CREATIVE"
                }(a || (a = {}))
        },
        sLlB: function(e, t, n) {
            "use strict";
            var a, r = n("/MKj"),
                i = n("fvjX"),
                o = n("5xw2"),
                s = n("OhOW"),
                c = n("mrSG"),
                l = n("q1tI"),
                u = n("wIs1"),
                d = n("/7QA"),
                p = n("vSJR"),
                g = n("8/mp"),
                m = n("HSqT"),
                h = n("2xye"),
                f = n("GnwI"),
                v = n("Ue10");
            n("S58p");
            ! function(e) {
                e.ClearAllButton = "language-select-menu__clear-all-button"
            }(a || (a = {}));
            var y = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleLanguageChange = function(e) {
                            var n = e.currentTarget,
                                a = n.parentElement && n.parentElement.getAttribute("data-language-code");
                            a && (t.props.updateLanguagePreferences(a, n.checked), t.trackLanguageChange(a, n.checked))
                        }, t.renderDropdownContent = function() {
                            return l.createElement(l.Fragment, null, l.createElement("div", {
                                className: "language-select-menu__balloon"
                            }, l.createElement(g.b, null, l.createElement(v.Va, {
                                padding: .5
                            }, Object(m.b)().map(t.renderLanguageOption)))), l.createElement(v.xb, {
                                background: v.r.Alt,
                                borderTop: !0,
                                className: "language-select-menu__footer"
                            }, l.createElement(v.z, {
                                type: v.F.Text,
                                onClick: t.props.clearLanguagePreferences,
                                "data-a-target": "language-clear-all",
                                "data-test-selector": a.ClearAllButton
                            }, Object(d.d)("Clear all", "LanguageSelectMenu"))))
                        }, t.renderLanguageOption = function(e) {
                            return l.createElement(v.Va, {
                                padding: {
                                    x: 1,
                                    y: .5
                                },
                                key: e.code
                            }, l.createElement(v.N, {
                                label: e.label,
                                checked: t.props.languagePreferences.includes(e.code),
                                "data-language-code": e.code,
                                "data-a-target": "language-filter-" + e.code + "-checkbox",
                                onChange: t.handleLanguageChange
                            }))
                        }, t.renderButtonContent = function() {
                            var e = t.props.languagePreferences.length,
                                n = Object(d.d)("Language", "LanguageSelectMenu");
                            return l.createElement(v.Va, {
                                display: v.W.Flex
                            }, n, l.createElement(v.Va, {
                                margin: {
                                    left: .5
                                }
                            }, 0 !== e && l.createElement(v.ab, {
                                type: v.bb.Brand,
                                label: e.toString()
                            })))
                        }, t.trackLanguageChange = function(e, n) {
                            var a = "";
                            t.props.match && t.props.match.params && (a = decodeURIComponent(t.props.match.params.encodedCommunityName).toLowerCase()), d.o.tracking.track(h.SpadeEventType.LanguageFilterChange, {
                                item_name: "language",
                                item_value: e,
                                item_action: n ? "select" : "deselect",
                                game: a || null,
                                open_click: !0
                            })
                        }, t
                    }
                    return c.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return l.createElement(v.Va, {
                            className: "language-select-menu"
                        }, l.createElement(p.a, {
                            "data-a-target": "language-filter-dropdown",
                            buttonLabel: this.renderButtonContent()
                        }, this.renderDropdownContent()))
                    }, t
                }(l.Component),
                T = Object(i.compose)(u.a, Object(f.c)("LanguageSelectMenu"))(y);
            var k = Object(r.connect)(function(e) {
                return {
                    languagePreferences: Object(s.a)(e)
                }
            }, function(e) {
                return Object(i.bindActionCreators)({
                    updateLanguagePreferences: o.c,
                    clearLanguagePreferences: o.a
                }, e)
            })(T);
            n.d(t, "a", function() {
                return k
            })
        },
        si2W: function(e, t, n) {
            "use strict";
            var a, r = n("/MKj"),
                i = n("fvjX"),
                o = n("X7a7"),
                s = n("moLQ"),
                c = n("mrSG"),
                l = n("q1tI"),
                u = n("wIs1"),
                d = n("/7QA"),
                p = n("3W+h"),
                g = n("odjZ"),
                m = n("C29h"),
                h = n("AZIu"),
                f = n("Ue10"),
                v = [p.a.Popular, p.a.PopularTag, "/directory/game/:encodedCommunityName"];
            ! function(e) {
                e.Tag = "tag-filter", e.TagAddButton = "tag-add-button-selector", e.TagAddButtonWrapper = "tag-add-button-wrapper-selector", e.TagSearchWrapper = "tag-search-wrapper-selector"
            }(a || (a = {}));
            var y = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isShowingTagSearch: !1
                        }, t.renderLanguageTags = function() {
                            if (!v.includes(t.props.match.path)) return null;
                            var e = t.props.selectedTags.map(function(e) {
                                    return e.id
                                }),
                                n = t.props.languageTags.slice();
                            return (n = n.filter(function(t) {
                                return !e.includes(t)
                            })).map(function(e) {
                                return l.createElement(f.Va, {
                                    key: "language-tag-filter-" + e,
                                    margin: .5
                                }, l.createElement(g.a, {
                                    "data-test-selector": a.Tag,
                                    getTagFromGQL: !0,
                                    onClickForGQLTag: t.removeTagOnClick,
                                    tagID: e
                                }))
                            })
                        }, t.renderTags = function() {
                            return t.props.selectedTags.map(function(e) {
                                return l.createElement(f.Va, {
                                    key: "tag-filter-" + e.id,
                                    margin: .5
                                }, l.createElement(g.a, {
                                    "data-test-selector": a.Tag,
                                    formTagProps: {
                                        label: e.localizedName || e.tagName,
                                        onClick: t.removeTagOnClick.bind(t, e),
                                        selected: !0,
                                        size: f.Qa.Large
                                    },
                                    tagID: e.id
                                }))
                            })
                        }, t.renderAddTags = function() {
                            return l.createElement(l.Fragment, null, l.createElement(f.Va, {
                                "data-test-selector": a.TagSearchWrapper,
                                display: t.state.isShowingTagSearch ? f.W.Block : f.W.Hide,
                                margin: {
                                    right: 1
                                }
                            }, t.renderTagSearch()), l.createElement(f.Va, {
                                "data-test-selector": a.TagAddButtonWrapper,
                                display: t.state.isShowingTagSearch ? f.W.Hide : f.W.Block,
                                margin: {
                                    left: .5,
                                    y: .5
                                }
                            }, l.createElement(f.Ga, {
                                "data-test-selector": a.TagAddButton,
                                label: Object(d.d)("Add Filter", "TagFilter"),
                                onClick: t.showTagSearch,
                                size: f.Qa.Large
                            })))
                        }, t.renderTagSearch = function() {
                            if (t.props.tagSearchType === m.b.StreamTag) {
                                var e = {
                                    autoFocus: t.state.isShowingTagSearch,
                                    categoryID: t.props.categoryID,
                                    categoryName: t.props.categoryName,
                                    inline: !0,
                                    inputSize: f.Qa.Large,
                                    onTagClick: t.addTagOnClick,
                                    type: t.props.tagSearchType,
                                    section: t.props.section,
                                    selectedTags: t.props.selectedTags,
                                    numSelectedTags: t.props.selectedTags.length
                                };
                                return l.createElement(m.a, c.__assign({}, e))
                            }
                            var n = {
                                autoFocus: t.state.isShowingTagSearch,
                                inline: !0,
                                inputSize: f.Qa.Large,
                                onTagClick: t.addTagOnClick,
                                type: t.props.tagSearchType,
                                section: t.props.section,
                                selectedTags: t.props.selectedTags,
                                numSelectedTags: t.props.selectedTags.length
                            };
                            return l.createElement(m.a, c.__assign({}, n))
                        }, t.showTagSearch = function() {
                            t.setState({
                                isShowingTagSearch: !0
                            })
                        }, t.addTagOnClick = function(e) {
                            e.isLanguageTag && t.props.updateLanguageTags(e.id, !0), t.props.onAddTagFilter(e)
                        }, t.removeTagOnClick = function(e) {
                            t.props.match.params.tagID === e.id && t.removeTagFromPath(), e.isLanguageTag && t.props.updateLanguageTags(e.id, !1);
                            var n = t.props.selectedTags.findIndex(function(t) {
                                    return t.id === e.id
                                }),
                                a = {
                                    section: t.props.section,
                                    tagPosition: n,
                                    searchEvent: !0,
                                    tagId: e.id,
                                    dismiss: !0
                                };
                            Object(h.b)(a), t.props.onRemoveTagFilter(e)
                        }, t.removeTagFromPath = function() {
                            t.props.match.path === p.a.DirectoryTag ? d.o.history.push(p.a.Games) : t.props.match.path === p.a.PopularTag && d.o.history.push(p.a.Popular)
                        }, t
                    }
                    return c.__extends(t, e), t.prototype.render = function() {
                        return l.createElement(f.Va, {
                            display: f.W.Flex,
                            flexWrap: f.Z.Wrap
                        }, this.renderLanguageTags(), this.renderTags(), this.renderAddTags())
                    }, t
                }(l.Component),
                T = Object(i.compose)(u.a)(y);
            var k = Object(r.connect)(function(e) {
                return {
                    languageTags: Object(s.b)(e)
                }
            }, function(e) {
                return Object(i.bindActionCreators)({
                    updateLanguageTags: o.d
                }, e)
            })(T);
            n.d(t, "a", function() {
                return k
            })
        },
        ugtu: function(e, t, n) {
            "use strict";
            n.d(t, "j", function() {
                return s
            }), n.d(t, "k", function() {
                return c
            }), n.d(t, "l", function() {
                return l
            }), n.d(t, "e", function() {
                return u
            }), n.d(t, "d", function() {
                return d
            }), n.d(t, "h", function() {
                return p
            }), n.d(t, "b", function() {
                return g
            }), n.d(t, "i", function() {
                return m
            }), n.d(t, "c", function() {
                return h
            }), n.d(t, "f", function() {
                return f
            }), n.d(t, "g", function() {
                return v
            }), n.d(t, "a", function() {
                return y
            });
            var a = n("q1tI"),
                r = n("/7QA"),
                i = n("GxR5"),
                o = n("Ue10");

            function s(e) {
                return a.createElement(o.V, {
                    type: o.Nb.Strong
                }, e)
            }

            function c(e, t) {
                return a.createElement(o.T, {
                    to: t,
                    targetBlank: !0
                }, e)
            }

            function l(e, t) {
                return a.createElement(o.T, {
                    onClick: t
                }, e)
            }

            function u() {
                return Object(r.d)("<x:link>Forgot your username</x:link>?", {
                    "x:link": function(e) {
                        return c(e, i.b)
                    }
                }, "ServerMessage")
            }

            function d() {
                return Object(r.d)("<x:link>Forgot your password</x:link>?", {
                    "x:link": function(e) {
                        return c(e, Object(i.e)())
                    }
                }, "ServerMessage")
            }

            function p() {
                return Object(r.d)("Please <x:link>reset your password</x:link>.", {
                    "x:link": function(e) {
                        return c(e, Object(i.e)())
                    }
                }, "ServerMessage")
            }

            function g() {
                return Object(r.d)("Please <x:link>contact support</x:link> for assistance.", {
                    "x:link": function(e) {
                        return c(e, i.a)
                    }
                }, "ServerMessage")
            }

            function m() {
                return Object(r.d)("To learn more, please read <x:link>this article</x:link>.", {
                    "x:link": function(e) {
                        return c(e, i.c)
                    }
                }, "ServerMessage")
            }

            function h(e) {
                return Object(r.d)("Want to <x:click>create a new account</x:click>?", {
                    "x:click": function(t) {
                        return l(t, e)
                    }
                }, "ServerMessage")
            }

            function f(e) {
                return Object(r.d)("Want to <x:click>log in</x:click> instead?", {
                    "x:click": function(t) {
                        return l(t, e)
                    }
                }, "ServerMessage")
            }

            function v(e) {
                return Object(r.d)("If you need a Twitch account, you can <x:click>create one here</x:click>.", {
                    "x:click": function(t) {
                        return l(t, e)
                    }
                }, "ServerMessage")
            }

            function y(e) {
                return Object(r.d)("If you want to use an existing Twitch ID, you can <x:click>connect it here</x:click>.", {
                    "x:click": function(t) {
                        return l(t, e)
                    }
                }, "ServerMessage")
            }
        },
        vSJR: function(e, t, n) {
            "use strict";
            var a, r = n("mrSG"),
                i = n("q1tI"),
                o = n("u5aL"),
                s = n("N0BP"),
                c = n("Ue10");
            ! function(e) {
                e.DropdownInsideClickDetector = "dropdown-inside-click-detector", e.DropdownWrapper = "dropdown-wrapper"
            }(a || (a = {}));
            var l = function(e) {
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
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.children;
                    return this.props.hideDropdownOnInsideClick && (e = i.createElement("div", {
                        "data-test-selector": a.DropdownInsideClickDetector,
                        onClick: this.handleInsideDropdownClick
                    }, e)), i.createElement(o.a, {
                        onClickOut: this.handleOnClickOut
                    }, i.createElement(c.xb, r.__assign({
                        background: this.state.isOpen ? c.r.Base : void 0,
                        borderRadius: c.x.Large,
                        className: "inline-dropdown",
                        elevation: this.state.isOpen ? 3 : void 0,
                        padding: .5,
                        position: c.db.Relative
                    }, Object(s.a)(this.props)), i.createElement("div", {
                        className: "inline-dropdown__button-wrapper"
                    }, i.createElement(c.z, {
                        blurAfterClick: !0,
                        dropdown: !0,
                        onClick: this.handleButtonClick,
                        size: c.D.Large,
                        type: c.F.Hollow
                    }, this.props.buttonLabel)), i.createElement(c.xb, {
                        attachLeft: !0,
                        background: c.r.Base,
                        borderRadius: c.x.Large,
                        "data-test-selector": a.DropdownWrapper,
                        display: this.state.isOpen ? c.W.Block : c.W.Hide,
                        elevation: 3,
                        fullWidth: !0,
                        padding: {
                            y: 1
                        },
                        position: c.db.Absolute,
                        zIndex: c.ac.Above
                    }, e)))
                }, t.prototype.toggleDropdown = function(e) {
                    void 0 === e && (e = !this.state.isOpen), this.setState({
                        isOpen: e
                    })
                }, t
            }(i.Component);
            n.d(t, "a", function() {
                return l
            })
        },
        wqI2: function(e, t, n) {},
        "x/sq": function(e, t, n) {
            "use strict";
            var a = n("/7QA"),
                r = n("odjZ"),
                i = {},
                o = n("fVj5"),
                s = n("AZIu"),
                c = n("X7a7");
            n.d(t, "a", function() {
                return l
            });
            var l = function(e) {
                var t = e.tags,
                    n = e.section,
                    l = e.onClickTag,
                    u = e.tagFilters,
                    d = void 0 === u ? [] : u,
                    p = e.scrollToTop;
                if (Object(o.a)() && t) {
                    return {
                        tags: t,
                        callback: function(e) {
                            if (p && p(), e.isLanguageTag && a.o.store.dispatch(Object(c.d)(e.id, !0)), d.every(function(t) {
                                    return t.id !== e.id
                                })) {
                                l && l(e);
                                var t = {
                                    section: n,
                                    tagPosition: d.length,
                                    searchEvent: !1,
                                    tagId: e.id,
                                    dismiss: !1
                                };
                                Object(s.b)(t)
                            } else ! function(e) {
                                var t = document.querySelector('[data-tag-filter="' + e + '"]');
                                if (t) {
                                    var n = i[e];
                                    n && clearTimeout(n), t.classList.contains(r.b.NoBounce) && (t.classList.remove(r.b.NoBounce), t.classList.add(r.b.Bounce));
                                    var a = setTimeout(function() {
                                        t.classList.remove(r.b.Bounce), t.classList.add(r.b.NoBounce), delete i[e]
                                    }, 750);
                                    i[e] = a
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
                return c
            }), n.d(t, "b", function() {
                return l
            });
            var a = n("mrSG"),
                r = n("17x9"),
                i = n("q1tI"),
                o = n("2xye"),
                s = n("yI6f"),
                c = {
                    cardIDtoItemTrackingIDMap: r.object,
                    trackTitleClick: r.func,
                    trackTitleImpression: r.func,
                    trackImpression: r.func,
                    trackClick: r.func
                };

            function l() {
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
                                    a = t.reasonType,
                                    r = t.reasonTarget,
                                    i = t.rowName,
                                    c = Object(s.e)(),
                                    l = {
                                        component: s.a.Header,
                                        contentEdge: null,
                                        itemTrackingID: c,
                                        itemPosition: null,
                                        reasonType: a,
                                        reasonTarget: r,
                                        reasonTargetType: null,
                                        requestID: n.props.requestID,
                                        rowName: i,
                                        rowPosition: n.props.position,
                                        tagID: null,
                                        filtered: !1,
                                        tagSet: "[]",
                                        tagStreamerSet: "[]"
                                    };
                                Object(s.h)(l, o.PageviewContent.HeaderGameName), n.setState({
                                    headerImpressionID: c
                                })
                            }, n.trackTitleClick = function() {
                                var e = n.props.shelf,
                                    t = Object(s.f)(e.title),
                                    a = t.reasonType,
                                    r = t.reasonTarget,
                                    i = t.reasonTargetType,
                                    c = t.rowName,
                                    l = {
                                        component: s.a.Header,
                                        contentEdge: null,
                                        itemTrackingID: n.state.headerImpressionID,
                                        requestID: n.state.headerRequestID,
                                        itemPosition: null,
                                        rowPosition: n.props.position,
                                        reasonType: a,
                                        reasonTarget: r,
                                        reasonTargetType: i,
                                        rowName: c,
                                        tagID: null,
                                        filtered: !1,
                                        tagSet: "[]",
                                        tagStreamerSet: "[]"
                                    };
                                Object(s.g)(l, o.PageviewContent.HeaderGameName)
                            }, n.trackImpression = function(e, t, a, r) {
                                if (t.node && !n.state.cardIDtoItemTrackingIDMap[t.node.id]) {
                                    var i = Object(s.e)(),
                                        o = Object(s.f)(e.title),
                                        c = o.reasonType,
                                        l = o.reasonTarget,
                                        u = o.reasonTargetType,
                                        d = o.rowName,
                                        p = {
                                            component: s.a.Card,
                                            contentEdge: t,
                                            itemTrackingID: i,
                                            itemPosition: a,
                                            reasonType: c,
                                            reasonTarget: l,
                                            reasonTargetType: u,
                                            requestID: n.state.cardIDtoRequestIDMap[t.node.id],
                                            rowName: d,
                                            rowPosition: n.props.position,
                                            tagID: null,
                                            filtered: !1,
                                            tagSet: JSON.stringify(r),
                                            tagStreamerSet: "[]"
                                        };
                                    Object(s.h)(p), n.setState(function(e) {
                                        var n = e.cardIDtoItemTrackingIDMap;
                                        return n[t.node.id] = i, {
                                            cardIDtoItemTrackingIDMap: n
                                        }
                                    })
                                }
                            }, n.trackClick = function(e, t, a, r, i, o) {
                                if (t.node) {
                                    var c = n.state,
                                        l = c.cardIDtoRequestIDMap,
                                        u = c.cardIDtoItemTrackingIDMap,
                                        d = Object(s.f)(e.title),
                                        p = d.reasonType,
                                        g = d.reasonTarget,
                                        m = d.reasonTargetType,
                                        h = d.rowName,
                                        f = {
                                            component: s.a.Card,
                                            contentEdge: t,
                                            itemTrackingID: u[t.node.id] || null,
                                            requestID: l[t.node.id],
                                            itemPosition: a,
                                            rowPosition: n.props.position,
                                            reasonType: p,
                                            reasonTarget: g,
                                            reasonTargetType: m,
                                            rowName: h,
                                            tagID: void 0 !== o ? o : null,
                                            filtered: !1,
                                            tagSet: JSON.stringify(i),
                                            tagStreamerSet: "[]"
                                        };
                                    Object(s.g)(f, r)
                                }
                            }, n.state = {
                                cardIDtoItemTrackingIDMap: {},
                                cardIDtoRequestIDMap: n.mapShelfCardsToRequestIDs(e.shelf.content.edges || [], e.requestID, {}),
                                headerImpressionID: null,
                                headerRequestID: e.requestID
                            }, n
                        }
                        return a.__extends(n, t), n.prototype.componentWillReceiveProps = function(e) {
                            var t = this,
                                n = e.shelf,
                                a = e.requestID;
                            n.content.edges !== this.props.shelf.content.edges && this.setState(function(e) {
                                return {
                                    cardIDtoRequestIDMap: t.mapShelfCardsToRequestIDs(n.content.edges || [], a, e.cardIDtoRequestIDMap)
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
                            return i.createElement(e, a.__assign({}, this.props, n))
                        }, n.childContextTypes = c, n
                    }(i.Component)
                }
            }
        },
        xPP4: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n("mrSG"),
                r = n("q1tI"),
                i = n("oJmH"),
                o = n("/7QA"),
                s = n("V+GM"),
                c = n("NvVO"),
                l = n("2xye"),
                u = n("GnwI"),
                d = n("Ue10"),
                p = function() {
                    return r.createElement(d.xb, {
                        borderTop: !0,
                        padding: {
                            top: 3
                        },
                        textAlign: d.Jb.Center
                    }, r.createElement(d.V, {
                        fontSize: d.Aa.Size4,
                        color: d.O.Alt2
                    }, Object(o.d)("Not what you're looking for?", "BrowseCreativePage")), r.createElement(d.Va, {
                        margin: {
                            top: 2
                        }
                    }, r.createElement(d.z, {
                        type: d.F.Hollow,
                        linkTo: "/directory/game/creative",
                        "data-a-target": "view-all-creative"
                    }, Object(o.d)("View All Creative Broadcasters", "BrowseCreativePage"))))
                },
                g = n("NmVs"),
                m = n("9x/k"),
                h = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        o.o.setPageTitle(Object(o.d)("Creative", "BrowseCreativePage"))
                    }, t.prototype.render = function() {
                        return r.createElement(g.a, {
                            category: m.a.CreativeCommunities
                        }, r.createElement(p, null))
                    }, t
                }(r.Component),
                f = Object(i.compose)(Object(u.c)("DirectoryPage", {
                    autoReportInteractive: !0,
                    destination: c.a.BrowseCreative
                }), Object(s.a)({
                    location: l.PageviewLocation.BrowseCreative
                }))(h);
            n.d(t, "BrowseCreativePageComponent", function() {
                return h
            }), n.d(t, "BrowseCreativePage", function() {
                return f
            })
        },
        xktb: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            });
            var a = {
                "/directory/all": "all",
                "/directory/all/:encodedLanguage": "all",
                "/directory/all/xbox": "xbox",
                "/directory/all/xb1": "xbox",
                "/directory/all/ps4": "ps4"
            }
        },
        yI6f: function(e, t, n) {
            "use strict";
            var a, r, i, o, s, c, l, u = n("/7QA"),
                d = n("f00E"),
                p = n("2xye"),
                g = n("3sMy"),
                m = function() {
                    return Object(d.b)().substring(0, 16)
                };
            ! function(e) {
                e.TwitchHome = "twitch_home", e.BrowseLiveChannels = "browse_livechannels", e.BrowseCategories = "browse_categories", e.BrowseInCategoryChannels = "browse_incategory_channels"
            }(r || (r = {})),
            function(e) {
                e.Live = "live", e.Clip = "clip", e.Vod = "vod", e.Game = "game"
            }(i || (i = {})),
            function(e) {
                e.Card = "card", e.Header = "header"
            }(o || (o = {})),
            function(e) {
                e.Followed = "followed", e.Watched = "watched", e.Popularity = "popularity", e.Personalized = "personalized"
            }(s || (s = {})),
            function(e) {
                e.Live = "live", e.Clip = "clip", e.Vod = "vod", e.Game = "game"
            }(c || (c = {})),
            function(e) {
                e.Live = "recs_live", e.Vod = "recs_vod", e.Clip = "recs_clip"
            }(l || (l = {}));
            var h = ((a = {})[g.a.TopLiveChannels] = function(e) {
                return {
                    reasonType: s.Popularity,
                    reasonTarget: null,
                    reasonTargetType: c.Live,
                    rowName: e
                }
            }, a[g.a.TopGames] = function(e) {
                return {
                    reasonType: s.Popularity,
                    reasonTarget: null,
                    reasonTargetType: c.Game,
                    rowName: e
                }
            }, a[g.a.TopChannelsPlayingGame] = function(e, t) {
                return {
                    reasonType: s.Popularity,
                    reasonTarget: t.context && t.context.id || null,
                    reasonTargetType: c.Game,
                    rowName: e
                }
            }, a[g.a.TopLiveChannelsYouMayLike] = function(e) {
                return {
                    reasonType: s.Personalized,
                    reasonTarget: null,
                    reasonTargetType: c.Live,
                    rowName: e
                }
            }, a[g.a.TopGamesForYou] = function(e) {
                return {
                    reasonType: s.Personalized,
                    reasonTarget: null,
                    reasonTargetType: c.Game,
                    rowName: e
                }
            }, a[g.a.RecommendedBecauseYouWatchX] = function(e, t) {
                return {
                    reasonType: s.Watched,
                    reasonTarget: t.context && t.context.id || null,
                    reasonTargetType: c.Game,
                    rowName: e
                }
            }, a[g.a.RecommendedBecauseYouFollowX] = function(e, t) {
                return {
                    reasonType: s.Followed,
                    reasonTarget: t.context && t.context.id || null,
                    reasonTargetType: null,
                    rowName: e
                }
            }, a[g.a.GreatNewClipsYouMayHaveMissed] = function(e) {
                return {
                    reasonType: s.Popularity,
                    reasonTarget: null,
                    reasonTargetType: c.Clip,
                    rowName: e
                }
            }, a[g.a.TopNewVideosYouMayHaveMissed] = function(e) {
                return {
                    reasonType: s.Popularity,
                    reasonTarget: null,
                    reasonTargetType: c.Vod,
                    rowName: e
                }
            }, a);

            function f(e) {
                var t = e.key;
                return h[t] ? h[t](t, e) : {
                    reasonType: null,
                    reasonTarget: "",
                    reasonTargetType: null,
                    rowName: t
                }
            }

            function v(e, t) {
                var n, a = null,
                    o = null,
                    s = null,
                    c = e.contentEdge && e.contentEdge.node && e.contentEdge.node.id || "";
                if (e.contentEdge) switch (e.contentEdge.node && e.contentEdge.node.__typename) {
                    case "Stream":
                        a = (n = e.contentEdge.node).broadcaster && n.broadcaster.id, o = i.Live, c = String(n.broadcaster && n.broadcaster.id), s = n.game ? n.game.id : null;
                        break;
                    case "Clip":
                        a = (n = e.contentEdge.node).broadcaster && n.broadcaster.id, o = i.Clip, s = n.game ? n.game.id : null;
                        break;
                    case "Video":
                        a = (n = e.contentEdge.node).owner && n.owner.id, o = i.Vod, s = n.game ? n.game.id : null;
                        break;
                    case "Game":
                        n = e.contentEdge.node, a = null, o = i.Game, s = n.id
                }
                return {
                    component: e.component,
                    request_id: e.requestID,
                    section: r.TwitchHome,
                    model_tracking_id: e.contentEdge && e.contentEdge.trackingID,
                    item_tracking_id: e.itemTrackingID,
                    item_id: c,
                    channel_id: null === a ? null : Number(a),
                    item_position: e.itemPosition,
                    item_subsection: t || null,
                    item_page: p.PageviewMedium.TwitchHome,
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

            function y(e, t) {
                var n = v(e, t);
                u.n.track(p.SpadeEventType.ItemClick, n)
            }

            function T(e, t) {
                var n = v(e, t);
                u.n.track(p.SpadeEventType.ItemDisplay, n)
            }

            function k(e) {
                var t = {
                    endpoint: e.endpoint,
                    request_id: e.requestID,
                    section: e.section
                };
                u.n.track(p.SpadeEventType.RecRequestClient, t)
            }
            var b = n("x75U"),
                C = n("A65o");
            n.d(t, "e", function() {
                return m
            }), n.d(t, "c", function() {
                return r
            }), n.d(t, "b", function() {
                return i
            }), n.d(t, "a", function() {
                return o
            }), n.d(t, !1, function() {
                return s
            }), n.d(t, !1, function() {
                return c
            }), n.d(t, "d", function() {
                return l
            }), n.d(t, "f", function() {
                return f
            }), n.d(t, "g", function() {
                return y
            }), n.d(t, "h", function() {
                return T
            }), n.d(t, "i", function() {
                return k
            }), n.d(t, !1, function() {
                return b.a
            }), n.d(t, "j", function() {
                return b.b
            }), n.d(t, !1, function() {
                return C.a
            })
        }
    }
]);