(window.webpackJsonp = window.webpackJsonp || []).push([
    [69], {
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
                    }],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
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
                    end: 531
                }
            };
            a.loc.source = {
                body: '#import "twilight/features/tags/models/tag-fragment.gql"\nquery BrowsePage_AllDirectories($limit: Int $cursor: Cursor $tags: [String!]) {\ndirectoriesWithTags: games(first: $limit after: $cursor tags: $tags) {\nedges {\n...browsePageDirectoriesWithTagsEdge\n}\npageInfo {\nhasNextPage\n}\n}\n}\nfragment browsePageDirectoriesWithTagsEdge on GameEdge {\ncursor\nnode {\nid\ndisplayName\nname\navatarURL(width: 285 height: 380)\nviewersCount\ndirectoryType\ntags(tagType: CONTENT) {\n...tagFragment\n}\nactiveDropCampaigns {\napplicableChannels {\nid\n}\n}\n}\n}',
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
        "3lt/": function(e, t, n) {
            "use strict";
            n("mrSG"), n("uhBA");
            var a = n("L9xt");
            n.o(a, "PageviewContent") && n.d(t, "PageviewContent", function() {
                return a.PageviewContent
            }), n.o(a, "PageviewLocation") && n.d(t, "PageviewLocation", function() {
                return a.PageviewLocation
            }), n.o(a, "PageviewMedium") && n.d(t, "PageviewMedium", function() {
                return a.PageviewMedium
            }), n.o(a, "SpadeEventType") && n.d(t, "SpadeEventType", function() {
                return a.SpadeEventType
            }), n.o(a, "TwitchDataType") && n.d(t, "TwitchDataType", function() {
                return a.TwitchDataType
            })
        },
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
            var a = n("mrSG"),
                r = n("/7QA"),
                i = n("oA7Y"),
                o = n("9x/k");
            r.p.store.registerReducer("browse", function(e, t) {
                switch (void 0 === e && (e = {
                    browseType: o.a.Games,
                    lastBrowsePath: "/directory"
                }), t.type) {
                    case i.a:
                        return a.__assign({}, e, {
                            browseType: t.browseType
                        });
                    case i.b:
                        return a.__assign({}, e, {
                            lastBrowsePath: t.lastBrowsePath
                        });
                    default:
                        return e
                }
            });
            var s, c = n("SKDF"),
                l = n("/MKj"),
                d = n("fvjX"),
                u = n("4HIT"),
                p = function(e) {
                    return e === u.a.Popular || e === u.a.PopularEncodedLanguage || e === u.a.PopularTag
                },
                g = n("Igt5"),
                m = n("X7a7"),
                h = n("moLQ"),
                f = n("q1tI"),
                k = n("4p7I"),
                v = n("yoKv"),
                T = n("mf+E"),
                y = n("ZS2+"),
                b = n("yR8l"),
                C = n("Uive"),
                S = n("cTNz");
            ! function(e) {
                e.Categories = "categories", e.LiveChannels = "live-channels"
            }(s || (s = {}));
            var w = n("vSJR"),
                _ = n("Ue10"),
                I = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.getLinkTo = function(e) {
                            switch (e) {
                                case s.Categories:
                                    return "/directory";
                                case s.LiveChannels:
                                    return "/directory/all";
                                default:
                                    return e
                            }
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return f.createElement(w.a, {
                            buttonLabel: this.getShowingLabel(this.props.showingType),
                            hideDropdownOnInsideClick: !0,
                            "data-a-target": "browse-filter-dropdown"
                        }, this.renderShowingItem(s.Categories), this.renderShowingItem(s.LiveChannels))
                    }, t.prototype.renderShowingItem = function(e) {
                        var t = this.props.showingType === e ? f.createElement(_.Ya, {
                                attachRight: !0,
                                position: _.kb.Absolute,
                                margin: {
                                    right: 1
                                }
                            }, f.createElement(_.tb, {
                                asset: _.ub.Check,
                                height: 18,
                                width: 18
                            })) : null,
                            n = "categories";
                        return e === s.LiveChannels && (n = "channels"), f.createElement(_.Va, {
                            "data-test-selector": e + "-selector",
                            "data-a-target": "browse-" + n + "-button",
                            linkTo: this.getLinkTo(e)
                        }, f.createElement(_.Ya, {
                            display: _.X.Flex,
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, this.getShowingLabel(e), t))
                    }, t.prototype.getShowingLabel = function(e) {
                        switch (e) {
                            case s.LiveChannels:
                                return Object(r.d)("Live Channels", "BrowseHeader");
                            case s.Categories:
                                return Object(r.d)("Categories", "BrowseHeader");
                            default:
                                return e
                        }
                    }, t
                }(f.Component),
                N = n("si2W"),
                D = n("C29h"),
                F = n("TCeE"),
                E = n("AZIu"),
                x = (n("TFM5"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.addTagFilter = function(e, n) {
                            var a = n === F.b.All ? h.a.LiveChannels : h.a.Categories;
                            t.props.addTagFilter(e, a)
                        }, t.removeTagFilter = function(e) {
                            var n = t.props.showingType === s.LiveChannels ? h.a.LiveChannels : h.a.Categories;
                            t.props.removeTagFilter(e, n)
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return f.createElement(_.Ya, {
                            className: "browse-header__filters",
                            display: _.X.Flex,
                            flexWrap: _.Ba.Wrap,
                            padding: {
                                top: 2,
                                right: 3
                            }
                        }, f.createElement(_.Ya, null, f.createElement(_.Ya, {
                            padding: {
                                left: .5,
                                top: 1
                            }
                        }, f.createElement(_.W, null, Object(r.d)("Showing", "BrowseHeader"))), f.createElement(I, {
                            showingType: this.props.showingType
                        })), f.createElement(_.Ya, null, f.createElement(_.Ya, {
                            padding: {
                                left: .5,
                                top: 1
                            }
                        }, f.createElement(_.W, null, Object(r.d)("Filters", "BrowseHeader"))), f.createElement(N.a, {
                            onAddTagFilter: this.addTagFilter,
                            onRemoveTagFilter: this.removeTagFilter,
                            section: this.props.showingType === s.Categories ? E.a.Categories : E.a.LiveChannels,
                            selectedTags: this.props.tagFilters,
                            tagSearchType: this.props.showingType === s.Categories ? D.b.TagCategory : D.b.TagAll
                        })))
                    }, t
                }(f.Component));
            var O = Object(l.connect)(function(e, t) {
                    var n = t.showingType === s.LiveChannels ? h.a.LiveChannels : h.a.Categories;
                    return {
                        tagFilters: Object(h.b)(e, n)
                    }
                }, function(e) {
                    return Object(d.bindActionCreators)({
                        addTagFilter: g.e,
                        removeTagFilter: g.h
                    }, e)
                })(x),
                P = n("JoTo"),
                L = n("cnlr"),
                A = n("y5I9"),
                R = function(e) {
                    return e === u.a.DirectoryTag || e === u.a.PopularTag
                },
                j = n("G1iw"),
                M = y.a.wrap(function() {
                    return Promise.resolve().then(n.bind(null, "SKDF"))
                }, "BrowseGamesPage"),
                B = y.a.wrap(function() {
                    return n.e(130).then(n.bind(null, "JTXL"))
                }, "DirectoryPopularPage"),
                G = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderSideNavInfoSection = function() {
                            return f.createElement(P.a, null, f.createElement(L.a, null))
                        }, t.renderAds = function() {
                            return f.createElement(C.a, {
                                injectStyles: {
                                    textAlign: "center",
                                    marginBottom: 0,
                                    marginTop: 30
                                },
                                adUnit: S.d.directory,
                                "data-a-target": "browse-banner-ad-slot",
                                slotID: S.b.directory.banner,
                                adSize: S.c.directory.banner,
                                targeting: {
                                    pagetype: S.a.games
                                },
                                autoEnable: !1
                            })
                        }, t.getActiveShowing = function() {
                            return p(t.props.match.path) ? s.LiveChannels : s.Categories
                        }, t.updateTagFiltersFromPath = function(e) {
                            if (e.data && !e.data.loading && !e.data.error && e.data.contentTag) {
                                var n = e.data.contentTag;
                                t.props.tagFilters.some(function(e) {
                                    return e.id === n.id
                                }) || (t.setTagFilters({
                                    props: e,
                                    tagFromPath: n
                                }), n.isLanguageTag && t.props.replaceLanguageTags([n.id]), t.props.data && t.props.data.contentTag && t.props.data.contentTag.id === n.id || t.trackEdit(n, e))
                            }
                        }, t.setTagFilters = function(e) {
                            var n = e.props,
                                a = e.tagFromPath,
                                r = [],
                                i = [];
                            (e.getTagsFromRedux ? (r = n.languageTagFilters, i = n.tagFilters) : (r = t.getLocationStateLanguageTags(n), i = t.getLocationStateTagFilters(n)), a) && (i.some(function(e) {
                                return !!a && e.id === a.id
                            }) || (i = [a].concat(i)));
                            var o = p(n.match.path) ? h.a.LiveChannels : h.a.Categories;
                            Object(A.b)(n.tagFilters, i) && t.props.changeTagFilters(i, o), Object(A.a)(n.languageTagFilters, r) && t.props.replaceLanguageTags(r)
                        }, t.updateHistory = function(e, n) {
                            if (void 0 === n && (n = !1), R(e.match.path) && 1 === e.tagFilters.length) t.props.history.replace({
                                pathname: e.location.pathname,
                                state: {
                                    languageTagFilters: e.languageTagFilters,
                                    tagFilters: e.tagFilters
                                }
                            });
                            else if (Object(A.b)(e.tagFilters, t.getLocationStateTagFilters(e)) || Object(A.a)(e.languageTagFilters, t.getLocationStateLanguageTags(e))) {
                                var a = e.tagFilters.length + e.languageTagFilters.length;
                                t.props.history[n ? "replace" : "push"]({
                                    pathname: e.location.pathname,
                                    search: a > 0 ? "?tl=" + a : void 0,
                                    state: {
                                        languageTagFilters: e.languageTagFilters,
                                        tagFilters: e.tagFilters
                                    }
                                })
                            }
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.setBrowseType(this.props.match.path), R(this.props.match.path) ? this.updateTagFiltersFromPath(this.props) : this.setTagFilters({
                            props: this.props,
                            getTagsFromRedux: !0
                        }), this.updateHistory(this.props, !0)
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        var t = this.props.match.path,
                            n = e.match.path;
                        t !== n ? (this.setBrowseType(n), R(n) ? this.updateTagFiltersFromPath(e) : this.setTagFilters({
                            props: e,
                            getTagsFromRedux: !0
                        })) : this.props.location.search !== e.location.search ? this.setTagFilters({
                            props: e
                        }) : R(n) && this.updateTagFiltersFromPath(e), (Object(A.b)(this.props.tagFilters, e.tagFilters) || Object(A.a)(this.props.languageTagFilters, e.languageTagFilters)) && this.updateHistory(e, t !== n)
                    }, t.prototype.render = function() {
                        return f.createElement(_.Ya, null, this.renderAds(), f.createElement(O, {
                            showingType: this.getActiveShowing()
                        }), f.createElement(_.Ya, {
                            padding: {
                                bottom: 3,
                                top: 2,
                                x: 3
                            }
                        }, this.renderSideNavInfoSection(), f.createElement(v.a, null, f.createElement(k.a, {
                            path: u.a.CreativeCommunities,
                            render: this.redirectToTagCreative
                        }), f.createElement(k.a, {
                            path: u.a.PopularTag,
                            component: B
                        }), f.createElement(k.a, {
                            path: u.a.Popular,
                            component: B
                        }), f.createElement(k.a, {
                            path: u.a.DirectoryTag,
                            component: M
                        }), f.createElement(k.a, {
                            path: u.a.DirectoryCategory,
                            component: M
                        }))))
                    }, t.prototype.redirectToTagCreative = function() {
                        return f.createElement(T.a, {
                            path: "/",
                            to: u.a.TagCreative
                        })
                    }, t.prototype.setBrowseType = function(e) {
                        e === u.a.DirectoryCategory ? this.props.changeBrowseType(o.a.Games) : p(e) && this.props.changeBrowseType(o.a.Channels)
                    }, t.prototype.trackEdit = function(e, t) {
                        var n = {
                            section: t.match.path === u.a.DirectoryTag ? E.a.Categories : E.a.LiveChannels,
                            tagPosition: 0,
                            searchEvent: !1,
                            tagId: e.id,
                            dismiss: !1
                        };
                        Object(E.b)(n)
                    }, t.prototype.getLocationStateTagFilters = function(e) {
                        return e.location.state && e.location.state.tagFilters || []
                    }, t.prototype.getLocationStateLanguageTags = function(e) {
                        return e.location.state && e.location.state.languageTagFilters || []
                    }, t
                }(f.Component),
                W = Object(d.compose)(Object(b.a)(j, {
                    options: function(e) {
                        return {
                            variables: {
                                id: e.match.params.tagID
                            }
                        }
                    },
                    skip: function(e) {
                        return !e.match.params.tagID
                    }
                }))(G);
            var q = Object(l.connect)(function(e, t) {
                var n = p(t.match.path) ? h.a.LiveChannels : h.a.Categories;
                return {
                    browseType: function(e) {
                        return e.browse.browseType
                    }(e),
                    languageTagFilters: Object(h.c)(e),
                    tagFilters: Object(h.b)(e, n)
                }
            }, function(e) {
                return Object(d.bindActionCreators)({
                    changeBrowseType: i.c,
                    changeTagFilters: g.f,
                    replaceLanguageTags: m.b
                }, e)
            })(W);
            n.d(t, "BrowseGamesPage", function() {
                return c.BrowseGamesPage
            }), n.d(t, "BrowseRootPage", function() {
                return q
            })
        },
        "9x/k": function(e, t, n) {
            "use strict";
            var a;
            n.d(t, "a", function() {
                    return a
                }),
                function(e) {
                    e.Channels = "channels", e.Games = "games"
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
                                n = this.context.cardIDtoRequestIDMap && this.props.contentEdge.node && this.context.cardIDtoRequestIDMap[this.props.contentEdge.node.id],
                                o = this.props,
                                s = o.itemPosition,
                                c = o.rowPosition,
                                l = o.shelf,
                                d = Object(i.g)(l.title).rowName,
                                u = {
                                    trackImpression: this.trackImpression,
                                    trackRecFeedbackPreModalClick: this.context.trackRecFeedbackPreModalClick,
                                    trackRecFeedbackClickStep: this.context.trackRecFeedbackClickStep,
                                    trackRecFeedbackClickStepPostSubmit: this.context.trackRecFeedbackClickStepPostSubmit,
                                    trackClick: this.trackClick,
                                    itemRequestID: n,
                                    shelfCardTrackingProps: {
                                        item_tracking_id: t || null,
                                        item_position: s,
                                        row_name: d,
                                        row_position: c
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
                r.o.track(i.SpadeEventType.BrowseFilter, t)
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
        Bk78: function(e, t, n) {
            "use strict";

            function a(e) {
                var t = Date.now() - e;
                return function() {
                    var n = Date.now();
                    return t + e <= n ? (t = n, "network-only") : "cache-first"
                }
            }
            n.d(t, "a", function() {
                return a
            })
        },
        C29h: function(e, t, n) {
            "use strict";
            var a, r = n("mrSG"),
                i = n("q1tI"),
                o = n("9C/b"),
                s = n("fvjX"),
                c = n("/7QA"),
                l = n("N3I0"),
                d = n("8/mp"),
                u = n("f00E"),
                p = n("H/lO"),
                g = n("NZDK"),
                m = n("yR8l"),
                h = n("DMoW"),
                f = n("GIun"),
                k = n("Ue10"),
                v = function(e) {
                    var t, n = e.onClick,
                        a = e.tag;
                    n && (t = function() {
                        return n(a)
                    });
                    var r = "localizedDescription" in e.tag ? e.tag.localizedDescription : void 0;
                    return i.createElement(f.a, null, i.createElement(k.Va, {
                        onClick: t
                    }, i.createElement(k.Ya, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, i.createElement(k.W, {
                        title: r
                    }, a.localizedName))))
                },
                T = n("y5I9"),
                y = n("Ryvb");
            ! function(e) {
                e.SuggestedTags = "suggested-tags"
            }(a || (a = {}));
            var b, C, S = function(e) {
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
                            return e = t.state.filteredTopTags.map(t.renderSuggestedTag), i.createElement(k.Ya, {
                                padding: {
                                    bottom: 1
                                }
                            }, e)
                        }, t.renderSuggestedTag = function(e) {
                            return i.createElement(v, {
                                "data-test-selector": a.SuggestedTags,
                                key: e.id,
                                onClick: function() {
                                    return t.props.onAddTag(e)
                                },
                                tag: e
                            })
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                        var t = this.props.data.game,
                            n = e.data.game;
                        if (Object(T.a)(this.props.selectedTagIDs, e.selectedTagIDs) || Object(T.b)(t && t.tags, n && n.tags)) {
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
                        return this.props.data.loading || this.props.data.error ? null : this.props.data.game && this.props.data.game.tags && 0 !== this.props.data.game.tags.length && this.state.filteredTopTags && 0 !== this.state.filteredTopTags.length ? i.createElement(k.Ya, null, i.createElement(k.Ya, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, i.createElement(k.W, {
                            bold: !0
                        }, Object(c.d)("Suggestions", "TagSuggestions"))), this.renderTags(), i.createElement(k.Ya, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, i.createElement(k.W, {
                            bold: !0
                        }, Object(c.d)("All Tags", "AllTagsTitle")))) : null
                    }, t
                }(i.Component),
                w = Object(m.a)(y, {
                    options: function(e) {
                        return {
                            variables: {
                                gameName: e.gameName,
                                tagType: h.X.TOP,
                                limit: 50
                            }
                        }
                    }
                })(S),
                _ = n("TCeE"),
                I = n("79jw"),
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
                            var n = t.props.categoryName ? _.b.Category : _.b.All;
                            return i.createElement(f.a, {
                                key: e.id
                            }, i.createElement(k.Va, {
                                onClick: function() {
                                    return t.props.onAddTag(e, n)
                                }
                            }, i.createElement(k.Ya, {
                                padding: {
                                    y: .5,
                                    x: 1
                                }
                            }, e.localizedName || e.tagName)))
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return this.props.data.error ? null : this.props.data.loading ? i.createElement(k.Ya, {
                            display: k.X.Flex,
                            justifyContent: k.Xa.Center,
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, i.createElement(k.ab, null)) : i.createElement(k.Ya, null, this.renderTags())
                    }, t
                }(i.Component),
                D = Object(s.compose)(Object(m.a)(I, {
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
                F = n("sLmD"),
                E = n("AZIu"),
                x = n("4HIT");
            n("97MP");
            ! function(e) {
                e[e.TagAll = 0] = "TagAll", e[e.TagAllMinusAutomation = 1] = "TagAllMinusAutomation", e[e.TagCategory = 2] = "TagCategory", e[e.StreamTag = 3] = "StreamTag"
            }(b || (b = {})),
            function(e) {
                e.SearchContent = "tag-search-search-content", e.SearchDropdown = "search-dropdown-selector"
            }(C || (C = {}));
            var O = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.state = {
                            isOpen: !1,
                            searching: !1,
                            searchTerm: ""
                        }, n.languageCode = Object(F.a)(), n.renderSearchContent = function() {
                            var e = null;
                            return e = n.props.type === b.StreamTag ? n.renderStreamTagResults() : n.renderTagResults(), i.createElement(d.b, {
                                className: "tag-search__scrollable-area",
                                suppressScrollX: !0
                            }, i.createElement(k.Ya, {
                                "data-test-selector": C.SearchContent
                            }, n.renderSuggestedTags(), e))
                        }, n.renderTagSearchResult = function(e) {
                            var t = Object(F.b)(e, n.props.type === b.TagAllMinusAutomation),
                                a = "tag_scope" in e ? e.tag_scope : void 0;
                            return i.createElement(v, {
                                key: t.id,
                                onClick: function() {
                                    return n.onTagResultSelected(t, a)
                                },
                                tag: t
                            })
                        }, n.renderStreamTagResults = function() {
                            return n.props.type === b.StreamTag && n.state.isOpen ? "" === n.state.searchTerm ? i.createElement(D, {
                                categoryName: n.props.categoryName,
                                onAddTag: n.onTagResultSelected,
                                tagsLimit: 100
                            }) : !n.state.searchResults && n.state.searching ? n.renderLoading() : n.state.searchResults && n.state.searchResults.streamTags && n.state.searchResults.streamTags.hits.length ? n.state.searchResults.streamTags.hits.map(n.renderTagSearchResult) : n.renderNoResults() : null
                        }, n.renderTagResults = function() {
                            return n.state.isOpen ? n.props.type === b.TagAll && "" === n.state.searchTerm ? i.createElement(D, {
                                onAddTag: n.onTagResultSelected,
                                tagsLimit: 100
                            }) : !n.state.searchResults && n.state.searching ? n.renderLoading() : n.state.searchResults && n.state.searchResults.tags && n.state.searchResults.tags.hits.length ? n.state.searchResults.tags.hits.map(n.renderTagSearchResult) : n.renderNoResults() : null
                        }, n.setTagSearchRef = function(e) {
                            n.tagSearch = e
                        }, n.onTagResultSelected = function(e, t) {
                            if (n.toggleTagSearch(!1), n.clearSearchTerm(), n.props.type === b.TagCategory && t === _.b.All ? c.p.history.push(x.a.Popular) : n.props.type === b.TagAll && t === _.b.Category && c.p.history.push(x.a.Games), n.props.onTagClick && (n.props.onTagClick(e, t), n.props.section && n.props.numSelectedTags)) {
                                var a = {
                                    section: n.props.section,
                                    tagPosition: n.props.numSelectedTags,
                                    searchEvent: !0,
                                    tagId: e.id,
                                    dismiss: !1
                                };
                                Object(E.b)(a)
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
                            appId: c.a.algoliaApplicationID,
                            apiKey: c.a.algoliaAPIKey,
                            apolloClient: c.p.apollo.client,
                            logger: c.k,
                            config: c.a,
                            stats: c.p.stats
                        }), n
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(l.a, {
                            autoFocus: this.props.autoFocus,
                            "data-test-selector": C.SearchDropdown,
                            inline: this.props.inline,
                            inputSize: this.props.inputSize,
                            onChange: this.onInputChange,
                            onFocusInput: this.onFocusInput,
                            onClose: this.onSearchClose,
                            placeholder: Object(c.d)("Search Tags", "TagSearch"),
                            ref: this.setTagSearchRef
                        }, this.renderSearchContent())
                    }, t.prototype.renderLoading = function() {
                        return i.createElement(k.Ya, {
                            display: k.X.Flex,
                            justifyContent: k.Xa.Center,
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, i.createElement(k.ab, {
                            delay: 0
                        }))
                    }, t.prototype.renderNoResults = function() {
                        return this.state.searching ? null : i.createElement(k.Ya, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, Object(c.d)("No results found", "TagSearch"))
                    }, t.prototype.renderSuggestedTags = function() {
                        if (this.props.type !== b.TagAllMinusAutomation || "" !== this.state.searchTerm) return null;
                        var e = this.props.selectedTags && this.props.selectedTags.map(function(e) {
                            return e.id
                        }) || [];
                        return i.createElement(k.Ya, null, i.createElement(w, {
                            gameName: this.props.categoryName,
                            onAddTag: this.onTagResultSelected,
                            selectedTagIDs: e
                        }))
                    }, t.prototype.search = function(e) {
                        return r.__awaiter(this, void 0, void 0, function() {
                            var t, n, a;
                            return r.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return e = e || "", t = {
                                            hitsPerPage: 100,
                                            restrictSearchableAttributes: ["localizations." + this.languageCode, "tag_name"]
                                        }, n = p.a.Tags, this.props.type === b.TagAllMinusAutomation ? (t.facetFilters = '["automated:false", "tag_scope:' + _.b.All + '"]', this.props.showAllDashboardTags && (t.hitsPerPage = 300)) : this.props.type === b.TagAll ? this.props.selectedTags && this.props.selectedTags.length ? t.facetFilters = "tag_scope:" + _.b.All : t.facetFilters = '[["tag_scope:' + _.b.All + '", "tag_scope:' + _.b.Category + '"]]' : this.props.type === b.TagCategory ? "" === e || this.props.selectedTags && this.props.selectedTags.length ? t.facetFilters = "tag_scope:" + _.b.Category : t.facetFilters = '[["tag_scope:' + _.b.All + '", "tag_scope:' + _.b.Category + '"]]' : this.props.type === b.StreamTag && (n = p.a.StreamTags, t.facetFilters = "category_id:" + this.props.categoryID), [4, this.searchClient.queryForType(n, e, u.a(), t)];
                                    case 1:
                                        return a = r.sent(), this.setState({
                                            searchResults: a,
                                            searching: !1
                                        }), [2]
                                }
                            })
                        })
                    }, t
                }(i.Component),
                P = Object(s.compose)(o.a)(O);
            n.d(t, "b", function() {
                return b
            }), n.d(t, !1, function() {
                return C
            }), n.d(t, !1, function() {
                return O
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
                    end: 134
                }
            };
            a.loc.source = {
                body: '#import "twilight/features/tags/models/tag-fragment.gql"\nquery BrowseRootPage_Tag($id: ID!) {\ncontentTag(id: $id) {\n...tagFragment\n}\n}',
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
        Igt5: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            }), n.d(t, "b", function() {
                return r
            }), n.d(t, "c", function() {
                return i
            }), n.d(t, "d", function() {
                return o
            }), n.d(t, "g", function() {
                return s
            }), n.d(t, "e", function() {
                return c
            }), n.d(t, "f", function() {
                return l
            }), n.d(t, "h", function() {
                return d
            });
            var a = "directory.LANGUAGE_TAGS_UPDATED",
                r = "directory.TAG_FILTER_ADDED",
                i = "directory.TAG_FILTER_CHANGED",
                o = "directory.TAG_FILTER_REMOVED";

            function s(e) {
                return {
                    type: a,
                    languageTagFilters: e
                }
            }

            function c(e, t) {
                return {
                    type: r,
                    addedTag: e,
                    categoryName: t
                }
            }

            function l(e, t) {
                return {
                    type: i,
                    categoryName: t,
                    tagFilters: e
                }
            }

            function d(e, t) {
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
                            s.b ? s.b.provideContent(e, n.contentID) : i.k.warn("SideNavPageInfoSection must be defined on the SideNav component to manipulate its content.")
                        }, n.removePortal = function() {
                            s.b ? s.b.removeContent() : i.k.warn("SideNavPageInfoSection must be defined on the SideNav component to manipulate its content.")
                        }, n.contentID = Object(o.a)(), n
                    }
                    return a.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                        e.children ? this.renderPortal(e.children) : this.removePortal()
                    }, t.prototype.componentDidMount = function() {
                        s.b || i.k.warn("SideNavPageInfoSection must be defined on the SideNav component to manipulate its content."), this.props.children && this.renderPortal(this.props.children)
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
                    return r.createElement(s.Ya, {
                        display: s.X.Flex,
                        flexDirection: s.Aa.Column,
                        justifyContent: s.Xa.Center,
                        alignItems: s.f.Center,
                        flexGrow: 1,
                        fullHeight: !0,
                        padding: {
                            y: 1
                        },
                        zIndex: s.jc.Above
                    }, r.createElement(s.Fb, {
                        color: s.O.Alt2,
                        textAlign: s.Sb.Center,
                        flexShrink: 1
                    }, r.createElement(s.tb, {
                        asset: s.ub.DeadGlitch,
                        width: 46,
                        height: 48
                    })), r.createElement(s.Qa, {
                        margin: {
                            top: 1
                        },
                        textAlign: s.Sb.Center
                    }, r.createElement(s.W, {
                        type: s.Wb.H4,
                        "data-test-selector": "search-error-message"
                    }, Object(o.d)("Search is not available at this time", "DropdownSearchError"))), r.createElement(s.W, {
                        type: s.Wb.P
                    }, Object(o.d)("Please try again later", "DropdownSearchError")))
                },
                l = n("8Ad5"),
                d = function(e) {
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
                            n = r.createElement(s.wb, {
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
                        }, r.createElement(s.Fb, {
                            background: this.state.isInputFocused || this.state.isOpen ? s.r.Base : void 0,
                            borderRadius: s.x.Large,
                            padding: .5,
                            position: s.kb.Relative,
                            elevation: this.state.isInputFocused || this.state.isOpen ? 3 : void 0
                        }, n, e && r.createElement(s.Fb, {
                            attachLeft: !0,
                            background: s.r.Base,
                            borderRadius: s.x.Large,
                            display: this.state.isOpen ? s.X.Block : s.X.Hide,
                            fullWidth: !0,
                            padding: {
                                y: 1
                            },
                            position: s.kb.Absolute,
                            zIndex: s.jc.Above,
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
                return d
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
                d = n("GnwI"),
                u = n("/MKj"),
                p = n("fvjX"),
                g = n("oA7Y"),
                m = n("Igt5"),
                h = n("moLQ"),
                f = n("17x9"),
                k = n("wIs1"),
                v = n("ZDlU"),
                T = n("8/mp"),
                y = n("yR8l"),
                b = n("Bk78"),
                C = n("geRD"),
                S = n("kduP"),
                w = n("MPw5"),
                _ = n("Uive"),
                I = n("cTNz"),
                N = n("oJov"),
                D = n("Bh3T"),
                F = n("bUox"),
                E = n("TCeE"),
                x = n("AZIu"),
                O = n("9x/k"),
                P = n("rShu"),
                L = n("x/sq"),
                A = n("vuN2"),
                R = n("yI6f"),
                j = n("T2RZ"),
                M = n("Ue10"),
                B = n("0egc"),
                G = Object(j.a)(l.PageviewMedium.Browse, R.b.Game, R.c.BrowseCategories)(N.a),
                W = "directory-first-item",
                q = "directory-container",
                U = Object(b.a)(3e5),
                Y = Object(A.a)();

            function z(e) {
                return (e.directoriesWithTags && e.directoriesWithTags.edges || []).filter(function(e) {
                    return e && e.node && e.node.id
                })
            }
            var V = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            numSlotsAdded: 0
                        }, t.onWindowResize = function() {
                            return requestAnimationFrame(t.updateDisplayAdOrder)
                        }, t.updateDisplayAdOrder = function() {
                            var e = document.querySelector('[data-target="' + q + '"]'),
                                t = document.querySelector('[data-target="' + W + '"]'),
                                n = document.querySelector("#" + I.b.directory.rectangle);
                            if (t && e && n) {
                                var a = Math.round((e.clientWidth - 300) / t.clientWidth).toString();
                                n.style.order !== a && "0" !== a && (n.style.order = a)
                            }
                        }, t.addTagFilter = function(e) {
                            t.props.addTagFilter(e, h.a.Categories)
                        }, t.removeLastTag = function() {
                            var e = t.props.tagFilters[t.props.tagFilters.length - 1],
                                n = {
                                    section: t.props.browseType === O.a.Games ? x.a.Categories : x.a.LiveChannels,
                                    tagPosition: t.props.tagFilters.length - 1,
                                    searchEvent: !0,
                                    tagId: e.id,
                                    dismiss: !0
                                };
                            Object(x.b)(n), t.props.removeTagFilter(e, h.a.Categories)
                        }, t.onSlotAdded = function() {
                            t.setState(function(e) {
                                var t = e.numSlotsAdded + 1;
                                return t === Object.keys(I.b.directory).length && w.a.display(I.b.directory.banner), {
                                    numSlotsAdded: t
                                }
                            })
                        }, t.canPaginate = function() {
                            return !(t.props.data.loading || t.props.data.error || !t.props.data.directoriesWithTags || !t.props.data.directoriesWithTags.pageInfo.hasNextPage)
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentWillMount = function() {
                        I.g.addListener(I.e, this.onSlotAdded)
                    }, t.prototype.componentDidMount = function() {
                        window.addEventListener("resize", this.onWindowResize), this.onRender()
                    }, t.prototype.componentDidUpdate = function() {
                        this.onRender()
                    }, t.prototype.componentWillUnmount = function() {
                        window.removeEventListener("resize", this.onWindowResize), I.g.removeListener(I.e, this.onSlotAdded)
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        this.props.sideNavExpanded !== e.sideNavExpanded && this.onWindowResize(), this.props.lastBrowsePath !== e.location.pathname && this.props.changeLastBrowsePath(decodeURIComponent(e.location.pathname))
                    }, t.prototype.render = function() {
                        var e = this;
                        if (this.props.tagFilters.length > E.a) return r.createElement(F.a, {
                            errorType: F.b.TooManyTags,
                            onClickRemoveLastTag: this.removeLastTag,
                            tagFilters: this.props.tagFilters
                        });
                        if (this.props.data.loading) return r.createElement(M.ab, {
                            fillContent: !0
                        });
                        if (!this.props.data.directoriesWithTags) return r.createElement(v.a, {
                            message: Object(o.d)("Error loading data.", "BrowseDirectory")
                        });
                        if (this.props.data.directoriesWithTags && this.props.data.directoriesWithTags.edges && 0 === this.props.data.directoriesWithTags.edges.length) return r.createElement(F.a, {
                            errorType: F.b.NoResults,
                            onClickRemoveLastTag: this.removeLastTag,
                            tagFilters: this.props.tagFilters
                        });
                        var t = l.PageviewContent.Game,
                            n = z(this.props.data).map(function(n, a) {
                                var i = n && n.node;
                                if (i) {
                                    var s = Object(L.a)({
                                            tags: n && n.node && n.node.tags,
                                            onClickTag: e.addTagFilter,
                                            tagFilters: e.props.tagFilters,
                                            section: e.props.browseType === O.a.Games ? x.a.Categories : x.a.LiveChannels,
                                            scrollToTop: e.context.scrollToTop
                                        }),
                                        c = !1,
                                        d = i && "Game" === i.__typename && i.activeDropCampaigns;
                                    return d && (c = d.some(function(e) {
                                        return e && e.applicableChannels && 0 === e.applicableChannels.length || !1
                                    })), r.createElement("div", {
                                        key: i.id,
                                        "data-target": a ? "" : W,
                                        style: {
                                            order: a
                                        }
                                    }, r.createElement(M.Ya, {
                                        margin: {
                                            bottom: 2
                                        },
                                        "data-target": "directory-page__card-container",
                                        position: M.kb.Relative
                                    }, r.createElement(G, {
                                        linkTo: {
                                            pathname: Object(S.c)(i.name),
                                            state: {
                                                content: t,
                                                content_index: a,
                                                medium: l.PageviewMedium.Browse
                                            }
                                        },
                                        title: i.displayName,
                                        alt: Object(o.d)("{displayName} cover image", {
                                            displayName: i.displayName
                                        }, "BrowseDirectory"),
                                        src: i.avatarURL || o.a.defaultBoxArtURL,
                                        info: Object(o.d)("{viewerCount, plural, one {# viewer} other {# viewers}}", {
                                            viewerCount: i.viewersCount || 0
                                        }, "BrowseDirectory"),
                                        "data-a-target": "card-" + a,
                                        "data-a-id": "card-" + i.displayName.replace(/ /g, ""),
                                        tagListProps: s,
                                        showDropsBadge: c,
                                        trackingProps: {
                                            category: i.id,
                                            categoryName: i.displayName,
                                            itemPosition: a,
                                            rowPosition: 0,
                                            itemID: i.id
                                        }
                                    })))
                                }
                                return null
                            });
                        return r.createElement(M.Ya, null, r.createElement(D.b, {
                            addPaddingWhenPlayerIsPersisting: !0
                        }), r.createElement("div", {
                            "data-target": q
                        }, r.createElement(M.cc, {
                            gutterSize: M.ec.Small,
                            childWidth: M.dc.Small,
                            placeholderItems: 20
                        }, r.createElement(_.a, {
                            key: -1,
                            injectStyles: {
                                textAlign: "center",
                                marginBottom: 20,
                                order: 999,
                                width: 300,
                                height: 250
                            },
                            adUnit: I.d.directory,
                            slotID: I.b.directory.rectangle,
                            adSize: I.c.directory.rectangle,
                            "data-a-target": "browse-card-ad-slot",
                            targeting: {
                                pagetype: I.a.games
                            },
                            slotRendered: this.updateDisplayAdOrder,
                            autoEnable: !1
                        }), n), r.createElement(T.a, {
                            enabled: this.canPaginate(),
                            loadMore: this.props.loadMore,
                            pixelThreshold: 300
                        })), this.props.children)
                    }, t.prototype.onRender = function() {
                        this.props.data && !this.props.data.loading && this.props.latencyTracking.reportInteractive(), this.updateDisplayAdOrder()
                    }, t.contextTypes = {
                        scrollToTop: f.func
                    }, t
                }(r.Component),
                H = Object(p.compose)(Object(d.b)("BrowseDirectory"), Object(y.a)(B, {
                    options: function(e) {
                        return {
                            fetchPolicy: Y() ? U() : "network-only",
                            errorPolicy: "all",
                            variables: {
                                limit: 30,
                                directoryFilters: [P.a.Games],
                                tags: e.tagFilters.map(function(e) {
                                    return e.id
                                })
                            }
                        }
                    },
                    props: function(e) {
                        return a.__assign({}, e, {
                            loadMore: function() {
                                return e.data.fetchMore({
                                    query: B,
                                    variables: a.__assign({}, e.data.variables, {
                                        cursor: function(e) {
                                            if (!e.directoriesWithTags || !e.directoriesWithTags.edges) return null;
                                            var t = e.directoriesWithTags.edges,
                                                n = t[t.length - 5];
                                            return n ? n.cursor : null
                                        }(e.data)
                                    }),
                                    updateQuery: function(e, t) {
                                        var n = t.fetchMoreResult;
                                        return {
                                            directoriesWithTags: a.__assign({}, n.directoriesWithTags, {
                                                edges: Object(C.c)(z(e), z(n))
                                            })
                                        }
                                    }
                                })
                            }
                        })
                    }
                }))(Object(k.a)(V));
            var Q = Object(u.connect)(function(e) {
                    return {
                        browseType: e.browse.browseType,
                        lastBrowsePath: e.browse.lastBrowsePath,
                        sideNavExpanded: e.ui.sideNavExpanded,
                        tagFilters: Object(h.b)(e, h.a.Categories)
                    }
                }, function(e) {
                    return Object(p.bindActionCreators)({
                        addTagFilter: m.e,
                        changeLastBrowsePath: g.d,
                        removeTagFilter: m.h
                    }, e)
                })(H),
                X = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        o.p.setPageTitle(Object(o.d)("All Games", "BrowseGamePage"))
                    }, t.prototype.render = function() {
                        return r.createElement(Q, {
                            category: O.a.Games
                        })
                    }, t
                }(r.Component),
                $ = Object(i.compose)(Object(d.b)("DirectoryPage", {
                    autoReportInteractive: !0,
                    destination: c.a.BrowseGames
                }), Object(s.a)({
                    location: l.PageviewLocation.Browse
                }))(X);
            n.d(t, "BrowseGamesPageComponent", function() {
                return X
            }), n.d(t, "BrowseGamesPage", function() {
                return $
            })
        },
        T2RZ: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return k
            });
            var a = n("mrSG"),
                r = n("q1tI"),
                i = n("/MKj"),
                o = n("fvjX"),
                s = n("/7QA"),
                c = n("2Ygb"),
                l = n("2xye"),
                d = n("oJov"),
                u = n("JVUd"),
                p = n("moLQ"),
                g = n("yI6f");

            function m(e, t) {
                if (t) {
                    var n = {};
                    return n = "string" == typeof t ? {
                        pathname: t
                    } : t, a.__assign({}, n, {
                        state: a.__assign({}, n.state, e)
                    })
                }
            }

            function h(e, t, n) {
                return n || (n = function() {}),
                    function(r) {
                        n && n(r), s.o.track(l.SpadeEventType.ItemClick, a.__assign({}, e, {
                            item_subsection: t
                        }))
                    }
            }

            function f(e, t) {
                return a.__assign({}, t, {
                    callback: function(n) {
                        t.callback && t.callback(n), s.o.track(l.SpadeEventType.ItemClick, a.__assign({}, e, {
                            item_subsection: l.PageviewContent.Tag,
                            tag_id: n.id
                        }))
                    }
                })
            }

            function k(e, t, n) {
                return function(k) {
                    var v = function(i) {
                        function o() {
                            var e = null !== i && i.apply(this, arguments) || this;
                            return e.itemTrackingID = Object(g.f)(), e.trackImpression = function() {
                                s.o.track(l.SpadeEventType.ItemDisplay, e.getCommonTrackingParams())
                            }, e
                        }
                        return a.__extends(o, i), o.prototype.componentDidMount = function() {
                            this.props.impressionListener.registerImpressionCallback(this.trackImpression)
                        }, o.prototype.render = function() {
                            if (k === d.a) {
                                var e = this.props;
                                return r.createElement(k, a.__assign({}, e, this.wrapGameCardPropsWithTracking(e)))
                            }
                            e = this.props;
                            return r.createElement(k, a.__assign({}, e, this.wrapPreviewCardPropsWithTracking(e)))
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
                            return "POP" === s.p.history.action ? r : (s.p.history.location.state && s.p.history.location.state.medium === l.PageviewMedium.TwitchHome && (r.item_tracking_id = s.p.history.location.state.item_tracking_id, r.medium = s.p.history.location.state.medium, r.content = s.p.history.location.state.content), r)
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
                                onVideoTitleClick: h(t, l.PageviewContent.VideoTitle, e.onVideoTitleClick),
                                linkTo: m(n, this.props.linkTo),
                                onThumbnailClick: h(t, l.PageviewContent.VideoThumbnail, e.onThumbnailClick),
                                channelLinkTo: m(n, e.channelLinkTo),
                                onChannelLoginClick: h(t, l.PageviewContent.ChannelMetadata, e.onChannelLoginClick),
                                onChannelImageClick: h(t, l.PageviewContent.UserThumbnail, e.onChannelImageClick),
                                gameTitleLinkTo: m(n, e.gameTitleLinkTo),
                                onGameTitleClick: h(t, l.PageviewContent.GameName, e.onGameTitleClick)
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
                            return a.__assign({
                                linkTo: m(n, e.linkTo),
                                onClick: h(t, l.PageviewContent.GameBoxart, this.props.onClick)
                            }, e.tagListProps && {
                                tagListProps: f(t, e.tagListProps)
                            })
                        }, o.displayName = Object(c.a)(o.name, k), o
                    }(r.Component);
                    return Object(o.compose)(Object(u.a)("PreviewCard-" + e + "-" + t, {
                        percentage: 75
                    }), Object(i.connect)(function(n, a) {
                        var r = [];
                        if (e === l.PageviewMedium.Game) {
                            var i = a.trackingProps && a.trackingProps.categoryName;
                            r = i ? Object(p.b)(n, i) : []
                        } else r = t === g.b.Live ? Object(p.b)(n, p.a.LiveChannels) : Object(p.b)(n, p.a.Categories);
                        return {
                            tagFilters: r
                        }
                    }))(v)
                }
            }
        },
        TCeE: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            }), n.d(t, "b", function() {
                return a
            });
            var a, r = 5;
            ! function(e) {
                e.All = "SCOPE_ALL", e.Category = "SCOPE_CATEGORY"
            }(a || (a = {}))
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
                d = n("KxT4"),
                u = n("YUvD"),
                p = "#google_ads_iframe_\\/3576121\\/twitch\\/directory_0",
                g = "#google_ads_iframe_\\/3576121\\/twitch\\/directory_1",
                m = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.logger = o.k.withCategory("ad-slot"), n.createSlot = function(e) {
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
                            return e.gdpr.status !== d.b.Loading && e.trackingSet
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
                h = Object(u.a)(d.c.Amazon)(m);
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
        X7a7: function(e, t, n) {
            "use strict";
            n.d(t, "c", function() {
                return s
            }), n.d(t, "b", function() {
                return c
            }), n.d(t, "a", function() {
                return l
            });
            var a = n("mrSG"),
                r = n("/7QA"),
                i = n("Igt5"),
                o = "languageTags";

            function s(e, t) {
                var n = this;
                return function(s) {
                    return a.__awaiter(n, void 0, void 0, function() {
                        var n, c;
                        return a.__generator(this, function(a) {
                            return n = new Set(l()), t ? n.add(e) : n.delete(e), c = Array.from(n), r.m.set(o, c), s(Object(i.g)(c)), [2]
                        })
                    })
                }
            }

            function c(e) {
                var t = this;
                return function(n) {
                    return a.__awaiter(t, void 0, void 0, function() {
                        return a.__generator(this, function(t) {
                            return r.m.set(o, e), n(Object(i.g)(e)), [2]
                        })
                    })
                }
            }

            function l() {
                return r.m.get(o, [])
            }
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
                            return i.createElement(s.Ya, {
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
                    return i.createElement(s.Ya, null, i.createElement(s.W, {
                        type: s.Wb.H3
                    }, this.getErrorMessage()), i.createElement(s.W, {
                        color: s.O.Alt2,
                        fontSize: s.Ca.Size5
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
                d = n.n(l),
                u = n("yR8l"),
                p = n("1/iK"),
                g = n("y5D0"),
                m = n("ugtu"),
                h = n("D7An");
            ! function(e) {
                e.Learn = "learn", e.Support = "support", e.LiveUp = "liveup", e.Recommendation = "rec", e.Bullet = "bullet"
            }(a || (a = {}));
            var f, k, v = n("Ue10"),
                T = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            upsellCenterChannelsAssignment: t.props.showDefault ? null : function() {
                                var e = c.p.experiments.getAssignment(h.b.WebSideNavUpsellCenterChannels);
                                return e === a.Learn || e === a.Support || e === a.LiveUp || e === a.Recommendation || e === a.Bullet ? e : null
                            }()
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(v.Ya, {
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
                        return i.createElement(i.Fragment, null, i.createElement(v.W, {
                            color: v.O.Base,
                            fontSize: v.Ca.Size4
                        }, e), i.createElement(v.W, {
                            color: v.O.Alt2,
                            fontSize: v.Ca.Size5
                        }, t))
                    }, t.prototype.renderBulletPoints = function(e, t) {
                        var n = t.map(function(e, t) {
                            return i.createElement(v.Ya, {
                                key: "upsell-center-text-" + t,
                                display: v.X.Flex,
                                flexDirection: v.Aa.Row,
                                alignItems: v.f.Start
                            }, i.createElement(v.tb, {
                                type: v.vb.Alt2,
                                asset: v.ub.Check
                            }), i.createElement(v.Ya, {
                                margin: {
                                    left: 1
                                },
                                textAlign: v.Sb.Left
                            }, i.createElement(v.W, {
                                color: v.O.Alt2,
                                fontSize: v.Ca.Size6
                            }, e)))
                        });
                        return i.createElement(i.Fragment, null, i.createElement(v.W, {
                            color: v.O.Base,
                            fontSize: v.Ca.Size4
                        }, e), i.createElement(v.Ya, {
                            margin: {
                                top: 1
                            }
                        }, n))
                    }, t
                }(i.Component),
                y = n("2xye");
            ! function(e) {
                e.SideNav = "sidenav"
            }(f || (f = {})),
            function(e) {
                e.Upsell = "upsell"
            }(k || (k = {}));
            var b = n("Ve5Q"),
                C = (n("wqI2"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.impressionEventFired = !1, t.signup = function() {
                            ! function(e) {
                                var t = r.__assign({
                                    section: f.SideNav,
                                    click_subsection: k.Upsell
                                }, e);
                                c.o.track(y.SpadeEventType.ItemClick, t)
                            }(), t.props.signup()
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.trackImpression()
                    }, t.prototype.componentDidUpdate = function() {
                        this.trackImpression()
                    }, t.prototype.render = function() {
                        return i.createElement(v.Fb, {
                            background: v.r.AccentAlt2,
                            display: v.X.Flex,
                            flexDirection: v.Aa.Column,
                            padding: {
                                y: 2,
                                x: 1
                            },
                            margin: 1
                        }, this.renderImage(), i.createElement(v.Ya, {
                            textAlign: v.Sb.Center
                        }, this.renderText(), i.createElement(v.z, {
                            onClick: this.signup,
                            size: v.D.Large
                        }, i.createElement(v.Ya, {
                            padding: {
                                x: 1
                            }
                        }, i.createElement(v.W, {
                            color: v.O.Base
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
                        var e = i.createElement(v.S, {
                            alt: Object(c.d)("Upsell Center", "UpsellCenter"),
                            src: d.a
                        });
                        return this.props.channelLogin && this.props.data && this.props.data.user && this.props.data.user.profileImageURL ? i.createElement(v.Ya, {
                            position: v.kb.Relative
                        }, i.createElement(v.Ya, {
                            className: "upsell-center__avatar",
                            position: v.kb.Absolute,
                            zIndex: v.jc.Above
                        }, i.createElement(v.q, {
                            src: this.props.data.user.profileImageURL,
                            alt: Object(c.d)("{displayName}'s Profile Image", {
                                displayName: this.props.data.user.displayName || ""
                            }, "UpsellCenter"),
                            borderRadius: v.x.Large,
                            size: 40
                        })), e) : e
                    }, t.prototype.trackImpression = function() {
                        this.impressionEventFired || (! function(e) {
                            var t = r.__assign({
                                section: f.SideNav
                            }, e);
                            c.o.track(y.SpadeEventType.ItemDisplay, t)
                        }(), this.impressionEventFired = !0)
                    }, t
                }(i.PureComponent));
            var S = Object(s.compose)(Object(u.a)(b, {
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
                w = n("kRBY"),
                _ = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return this.props.isLoggedIn || this.props.collapsed ? null : i.createElement(S, r.__assign({}, this.props))
                    }, t
                }(i.PureComponent);
            var I = Object(o.connect)(function(e) {
                return {
                    collapsed: !e.ui.sideNavExpanded,
                    isLoggedIn: Object(w.f)(e)
                }
            })(_);
            n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {
                return C
            }), n.d(t, !1, function() {
                return _
            }), n.d(t, "a", function() {
                return I
            })
        },
        "kRI/": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            }), n.d(t, "b", function() {
                return r
            }), n.d(t, "c", function() {
                return p
            }), n.d(t, "d", function() {
                return g
            }), n.d(t, "e", function() {
                return m
            });
            var a, r, i, o = n("mrSG"),
                s = n("/7QA"),
                c = n("DMoW"),
                l = n("yI6f"),
                d = n("3lt/");

            function u(e) {
                s.p.tracking.track(d.SpadeEventType.RecFeedbackClick, o.__assign({}, e))
            }

            function p(e) {
                u({
                    section: i.TwitchHome,
                    item_page: d.PageviewMedium.TwitchHome,
                    feedback_type: null,
                    feedbacked_item_id: null,
                    feedback_action: null,
                    feedback_reason: null,
                    click_step: e.clickStep,
                    clicked_item_id: e.clickedItemID,
                    item_tracking_id: e.itemTrackingID,
                    item_position: e.itemPosition,
                    row_position: e.rowPosition,
                    reason_type: e.reasonType,
                    reason_target: e.reasonTarget,
                    reason_target_type: e.reasonTargetType,
                    row_name: e.rowName,
                    model_tracking_id: e.modelTrackingID,
                    clicked_content_type: e.clickedContentType,
                    item_name: e.itemName
                })
            }

            function g(e) {
                u({
                    section: e.clickStep === a.SettingsChange ? null : i.TwitchHome,
                    item_page: e.clickStep === a.SettingsChange ? d.PageviewMedium.Settings : d.PageviewMedium.TwitchHome,
                    click_step: e.clickStep,
                    feedback_type: e.feedbackType,
                    feedbacked_item_id: e.feedbackedItemID,
                    feedback_action: e.feedbackAction,
                    feedback_reason: e.feedbackReason,
                    clicked_item_id: e.clickedItemID,
                    item_tracking_id: e.itemTrackingID,
                    item_position: e.itemPosition,
                    row_position: e.rowPosition,
                    reason_type: e.reasonType,
                    reason_target: e.reasonTarget,
                    reason_target_type: e.reasonTargetType,
                    row_name: e.rowName,
                    model_tracking_id: e.modelTrackingID,
                    clicked_content_type: e.clickedContentType,
                    item_name: e.itemName
                })
            }

            function m(e) {
                u({
                    click_step: a.SettingsChange,
                    item_page: d.PageviewMedium.Settings,
                    feedback_action: r.Remove,
                    feedback_type: function(e) {
                        switch (e) {
                            case c.M.CATEGORY:
                                return l.b.Game;
                            case c.M.CHANNEL:
                                return l.b.Live;
                            case c.M.SHELF:
                                return l.b.Shelf;
                            case c.M.VOD:
                                return l.b.Vod;
                            case c.M.UNSPECIFIED:
                                return null;
                            default:
                                return e
                        }
                    }(e.feedbackType),
                    section: null,
                    clicked_item_id: null,
                    item_tracking_id: null,
                    item_position: null,
                    row_position: null,
                    reason_type: null,
                    reason_target: null,
                    reason_target_type: null,
                    row_name: null,
                    model_tracking_id: null,
                    clicked_content_type: null,
                    item_name: e.itemName,
                    feedbacked_item_id: e.feedbackedItemID,
                    feedback_reason: e.feedbackReason
                })
            }! function(e) {
                e.Ellipsis = "ellipsis", e.NotInterested = "not_interested", e.Close = "close", e.Submit = "submit", e.PostSubmit = "post_submit", e.SettingsChange = "settings_change"
            }(a || (a = {})),
            function(e) {
                e.Add = "add", e.Remove = "remove", e.Undo = "undo", e.Manage = "manage"
            }(r || (r = {})),
            function(e) {
                e.LeftNav = "leftnav", e.Carousel = "carousel", e.TwitchHome = "twitch_home"
            }(i || (i = {}))
        },
        moLQ: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            }), n.d(t, "b", function() {
                return c
            }), n.d(t, "c", function() {
                return l
            });
            var a, r = n("mrSG"),
                i = n("/7QA"),
                o = n("Igt5"),
                s = n("X7a7");

            function c(e, t) {
                return t = t.toLowerCase(), e.directory.tagFilters[t] || []
            }

            function l(e) {
                return e.directory.languageTagFilters
            }! function(e) {
                e.Categories = "browse-categories", e.LiveChannels = "browse-live-channels"
            }(a || (a = {})), i.p.store.registerReducer("directory", function(e, t) {
                switch (void 0 === e && (e = {
                    languageTagFilters: Object(s.a)(),
                    tagFilters: {}
                }), t.type) {
                    case o.a:
                        return r.__assign({}, e, {
                            languageTagFilters: t.languageTagFilters
                        });
                    case o.b:
                        var n = r.__assign({}, e.tagFilters),
                            a = t.categoryName.toLowerCase(),
                            i = n[a];
                        return (void 0 === i || i.every(function(e) {
                            return e.id !== t.addedTag.id
                        })) && (n[a] = (n[a] || []).concat([t.addedTag])), r.__assign({}, e, {
                            tagFilters: n
                        });
                    case o.c:
                        var c = t.categoryName.toLowerCase();
                        return e.tagFilters[c] = t.tagFilters.slice(), r.__assign({}, e);
                    case o.d:
                        var l = t.categoryName.toLowerCase();
                        if (void 0 === e.tagFilters[l]) return r.__assign({}, e);
                        var d = e.tagFilters[l].filter(function(e) {
                            return e.id !== t.removedTag.id
                        });
                        return e.tagFilters[l] = d, r.__assign({}, e);
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
            });
            var a = "browse.BROWSE_TYPE_CHANGED",
                r = "browse.LAST_BROWSE_PATH";

            function i(e) {
                return {
                    type: a,
                    browseType: e
                }
            }

            function o(e) {
                return {
                    type: r,
                    lastBrowsePath: e
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
                    return r.createElement(o.Ya, a.__assign({
                        className: "drops-badge",
                        position: o.kb.Absolute,
                        attachTop: !0,
                        attachRight: !0
                    }, Object(o.kc)(e)), r.createElement(o.Zb, {
                        direction: o.bc.Top,
                        align: o.ac.Right,
                        label: Object(i.d)("Offers in-game Drops", "DropsBadge")
                    }, r.createElement(o.Fb, {
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
                    }, r.createElement(o.U, {
                        type: o.V.Inherit,
                        hoverColorInherit: !0,
                        to: "https://help.twitch.tv/customer/en/portal/articles/2754380-how-to-earn-drops"
                    }, r.createElement(o.tb, {
                        asset: o.ub.Drops
                    })))))
                }),
                c = n("0LAi"),
                l = new Set(["alt", "src", "srcSet", "sizes", "onError", "onLoad", "refHandler"]);

            function d(e) {
                for (var t = {}, n = 0, a = Object.keys(e); n < a.length; n++) {
                    var r = a[n];
                    l.has(r) && (t[r] = e[r])
                }
                return t
            }
            var u = function(e) {
                var t;
                return e.placeholder ? r.createElement(r.Fragment, null, r.createElement(o.Ya, {
                    margin: {
                        bottom: .5
                    }
                }, r.createElement(o.o, {
                    ratio: o.p.Aspect3x4
                }, r.createElement(o.jb, null))), r.createElement(o.W, null, r.createElement(o.jb, {
                    width: 150
                })), r.createElement(o.W, {
                    fontSize: o.Ca.Size7
                }, r.createElement(o.jb, {
                    width: 100
                }))) : (t = r.createElement(r.Fragment, null, r.createElement(o.Ya, {
                    className: "tw-box-art-card__image " + (e.unavailable && !e.disabled ? "tw-box-art-card__image--unavailable" : ""),
                    "data-test-selector": "tw-card-image",
                    "data-a-target": "tw-card-image"
                }, r.createElement(o.I, a.__assign({
                    aspect: o.p.BoxArt,
                    borderRadius: o.x.Medium
                }, d(e)))), r.createElement(o.H, null, r.createElement(o.Ya, {
                    display: o.X.Flex
                }, r.createElement(o.Ya, {
                    "data-test-selector": "tw-card-title",
                    "data-a-target": "tw-card-title",
                    flexGrow: 1,
                    flexShrink: 1,
                    margin: {
                        top: .5
                    },
                    ellipsis: !0
                }, r.createElement(o.W, {
                    className: "tw-box-art-card__title",
                    type: o.Wb.H3,
                    fontSize: o.Ca.Size5,
                    lineHeight: o.Za.Body,
                    ellipsis: !0
                }, e.title)), e.contextualCardActionProps && r.createElement(o.Ya, {
                    margin: {
                        top: .5
                    },
                    flexGrow: 0,
                    flexShrink: 0
                }, r.createElement(e.contextualCardActionProps.component, a.__assign({}, e.contextualCardActionProps.props)))), r.createElement(o.W, {
                    color: o.O.Alt2,
                    ellipsis: !0
                }, e.info))), (e.linkTo || e.onClick || e.disabled) && (t = r.createElement(o.T, {
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
                }, t)), r.createElement("div", a.__assign({
                    className: "tw-box-art-card"
                }, Object(o.kc)(e)), r.createElement(o.G, {
                    key: e.title
                }, t), e.tagListProps && 0 !== e.tagListProps.tags.length && r.createElement(o.Ya, {
                    margin: {
                        top: .5
                    }
                }, r.createElement(c.a, a.__assign({}, e.tagListProps, {
                    tagNumberLimit: 3
                }))), !0 === e.showDropsBadge && r.createElement(s, null)))
            };
            n.d(t, !1, function() {
                return d
            }), n.d(t, "a", function() {
                return u
            })
        },
        odjZ: function(e, t, n) {
            "use strict";
            var a, r = n("mrSG"),
                i = n("q1tI"),
                o = n("fvjX"),
                s = n("yR8l"),
                c = n("GnwI"),
                l = n("Ue10"),
                d = (n("BIFG"), n("BEfv"));
            ! function(e) {
                e.Bounce = "animated-tag--bounce", e.NoBounce = "animated-tag--no-bounce"
            }(a || (a = {}));
            var u = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.reportInteractive()
                    }, t.prototype.componentDidUpdate = function() {
                        this.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = null;
                        if (this.props.getTagFromGQL) {
                            if (!this.props.data || this.props.data.loading || this.props.data.error || !this.props.data.contentTag) return null;
                            var t = this.props.data.contentTag;
                            e = i.createElement(l.Ia, {
                                label: t.localizedName,
                                onClick: this.props.onClickForGQLTag && this.props.onClickForGQLTag.bind(this, t),
                                selected: !0,
                                size: l.Ta.Large
                            })
                        } else this.props.formTagProps && (e = i.createElement(l.Ia, r.__assign({}, this.props.formTagProps)));
                        return i.createElement("div", {
                            className: a.NoBounce,
                            "data-tag-filter": this.props.tagID
                        }, e)
                    }, t.prototype.reportInteractive = function() {
                        this.props.getTagFromGQL && this.props.data && (!this.props.data.loading || this.props.data.error) ? this.props.latencyTracking.reportInteractive() : this.props.getTagFromGQL || this.props.latencyTracking.reportInteractive()
                    }, t
                }(i.Component),
                p = Object(o.compose)(Object(s.a)(d, {
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
                }), Object(c.b)("AnimatedTag"))(u);
            n.d(t, "b", function() {
                return a
            }), n.d(t, !1, function() {
                return u
            }), n.d(t, "a", function() {
                return p
            })
        },
        rShu: function(e, t, n) {
            "use strict";
            var a;
            n.d(t, "a", function() {
                    return a
                }),
                function(e) {
                    e.Games = "GAMES", e.Communities = "COMMUNITIES"
                }(a || (a = {}))
        },
        si2W: function(e, t, n) {
            "use strict";
            var a, r = n("/MKj"),
                i = n("fvjX"),
                o = n("X7a7"),
                s = n("moLQ"),
                c = n("mrSG"),
                l = n("q1tI"),
                d = n("wIs1"),
                u = n("/7QA"),
                p = n("GnwI"),
                g = n("odjZ"),
                m = n("C29h"),
                h = n("AZIu"),
                f = n("4HIT"),
                k = n("Ue10"),
                v = [f.a.Popular, f.a.PopularTag, "/directory/game/:encodedCommunityName"];
            ! function(e) {
                e.Tag = "tag-filter", e.TagAddButton = "tag-add-button-selector", e.TagAddButtonWrapper = "tag-add-button-wrapper-selector", e.TagSearchWrapper = "tag-search-wrapper-selector"
            }(a || (a = {}));
            var T = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isShowingTagSearch: !1
                        }, t.renderLanguageTags = function() {
                            if (!v.includes(t.props.match.path)) return null;
                            var e = t.props.selectedTags.map(function(e) {
                                    return e.id
                                }),
                                n = t.props.languageTagFilters.slice();
                            return (n = n.filter(function(t) {
                                return !e.includes(t)
                            })).map(function(e) {
                                return l.createElement(k.Ya, {
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
                                return l.createElement(k.Ya, {
                                    key: "tag-filter-" + e.id,
                                    margin: .5
                                }, l.createElement(g.a, {
                                    "data-test-selector": a.Tag,
                                    formTagProps: {
                                        label: e.localizedName || e.tagName,
                                        onClick: t.removeTagOnClick.bind(t, e),
                                        selected: !0,
                                        size: k.Ta.Large
                                    },
                                    tagID: e.id
                                }))
                            })
                        }, t.renderAddTags = function() {
                            return l.createElement(l.Fragment, null, l.createElement(k.Ya, {
                                "data-test-selector": a.TagSearchWrapper,
                                display: t.state.isShowingTagSearch ? k.X.Block : k.X.Hide,
                                margin: {
                                    right: 1
                                }
                            }, t.renderTagSearch()), l.createElement(k.Ya, {
                                "data-test-selector": a.TagAddButtonWrapper,
                                display: t.state.isShowingTagSearch ? k.X.Hide : k.X.Block,
                                margin: {
                                    left: .5,
                                    y: .5
                                }
                            }, l.createElement(k.Ia, {
                                "data-test-selector": a.TagAddButton,
                                label: Object(u.d)("Add Filter", "TagFilter"),
                                onClick: t.showTagSearch,
                                size: k.Ta.Large
                            })))
                        }, t.renderTagSearch = function() {
                            if (t.props.tagSearchType === m.b.StreamTag) {
                                var e = {
                                    autoFocus: t.state.isShowingTagSearch,
                                    categoryID: t.props.categoryID,
                                    categoryName: t.props.categoryName,
                                    inline: !0,
                                    inputSize: k.Ta.Large,
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
                                inputSize: k.Ta.Large,
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
                        }, t.addTagOnClick = function(e, n) {
                            e.isLanguageTag && t.props.updateLanguageTags(e.id, !0), t.props.onAddTagFilter(e, n)
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
                            t.props.match.path === f.a.DirectoryTag ? u.p.history.push(f.a.Games) : t.props.match.path === f.a.PopularTag && u.p.history.push(f.a.Popular)
                        }, t
                    }
                    return c.__extends(t, e), t.prototype.render = function() {
                        return l.createElement(k.Ya, {
                            display: k.X.Flex,
                            flexWrap: k.Ba.Wrap,
                            "data-a-target": "tags-filter-dropdown"
                        }, this.renderLanguageTags(), this.renderTags(), this.renderAddTags())
                    }, t
                }(l.Component),
                y = Object(i.compose)(Object(p.b)("TagFilter", {
                    autoReportInteractive: !0
                }), d.a)(T);
            var b = Object(r.connect)(function(e) {
                return {
                    languageTagFilters: Object(s.c)(e)
                }
            }, function(e) {
                return Object(i.bindActionCreators)({
                    updateLanguageTags: o.c
                }, e)
            })(y);
            n.d(t, "a", function() {
                return b
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
                return d
            }), n.d(t, "d", function() {
                return u
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
                return k
            }), n.d(t, "a", function() {
                return v
            });
            var a = n("q1tI"),
                r = n("/7QA"),
                i = n("GxR5"),
                o = n("Ue10");

            function s(e) {
                return a.createElement(o.W, {
                    type: o.Wb.Strong
                }, e)
            }

            function c(e, t) {
                return a.createElement(o.U, {
                    to: t,
                    targetBlank: !0
                }, e)
            }

            function l(e, t) {
                return a.createElement(o.U, {
                    onClick: t
                }, e)
            }

            function d() {
                return Object(r.d)("<x:link>Forgot your username</x:link>?", {
                    "x:link": function(e) {
                        return c(e, i.b)
                    }
                }, "ServerMessage")
            }

            function u() {
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

            function k(e) {
                return Object(r.d)("If you need a Twitch account, you can <x:click>create one here</x:click>.", {
                    "x:click": function(t) {
                        return l(t, e)
                    }
                }, "ServerMessage")
            }

            function v(e) {
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
                    }, i.createElement(c.Fb, r.__assign({
                        background: this.state.isOpen ? c.r.Base : void 0,
                        borderRadius: c.x.Large,
                        className: "inline-dropdown",
                        elevation: this.state.isOpen ? 3 : void 0,
                        padding: .5,
                        position: c.kb.Relative
                    }, Object(s.a)(this.props)), i.createElement("div", {
                        className: "inline-dropdown__button-wrapper"
                    }, i.createElement(c.z, {
                        blurAfterClick: !0,
                        dropdown: !0,
                        onClick: this.handleButtonClick,
                        size: c.D.Large,
                        type: c.F.Hollow
                    }, this.props.buttonLabel)), i.createElement(c.Fb, {
                        attachLeft: !0,
                        background: c.r.Base,
                        borderRadius: c.x.Large,
                        "data-test-selector": a.DropdownWrapper,
                        display: this.state.isOpen ? c.X.Block : c.X.Hide,
                        elevation: 3,
                        fullWidth: !0,
                        padding: {
                            y: 1
                        },
                        position: c.kb.Absolute,
                        zIndex: c.jc.Above
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
        vuN2: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            });
            var a, r = n("/7QA"),
                i = n("D7An");

            function o() {
                var e = null;
                return function() {
                    return null === e && (e = r.p.experiments.getAssignment(i.b.DirectoryTTL) === a.Experiment), e
                }
            }! function(e) {
                e.Control = "control", e.Experiment = "experiment"
            }(a || (a = {}))
        },
        wqI2: function(e, t, n) {},
        "x/sq": function(e, t, n) {
            "use strict";
            var a = n("/7QA"),
                r = n("odjZ"),
                i = {},
                o = n("AZIu"),
                s = n("X7a7");
            n.d(t, "a", function() {
                return c
            });
            var c = function(e) {
                var t = e.tags,
                    n = e.section,
                    c = e.onClickTag,
                    l = e.tagFilters,
                    d = void 0 === l ? [] : l,
                    u = e.scrollToTop;
                if (t) {
                    return {
                        tags: t,
                        callback: function(e) {
                            u && u(), e.isLanguageTag && a.p.store.dispatch(Object(s.c)(e.id, !0));
                            var t = d.every(function(t) {
                                    return t.id !== e.id
                                }),
                                l = Object(s.a)().every(function(t) {
                                    return t !== e.id
                                });
                            if (t && l) {
                                c && c(e);
                                var p = {
                                    section: n,
                                    tagPosition: d.length,
                                    searchEvent: !1,
                                    tagId: e.id,
                                    dismiss: !1
                                };
                                Object(o.b)(p)
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
                return l
            }), n.d(t, "b", function() {
                return d
            });
            var a = n("mrSG"),
                r = n("17x9"),
                i = n("q1tI"),
                o = n("2xye"),
                s = n("yI6f"),
                c = n("kRI/"),
                l = {
                    cardIDtoItemTrackingIDMap: r.object,
                    cardIDtoRequestIDMap: r.object,
                    trackTitleClick: r.func,
                    trackTitleImpression: r.func,
                    trackImpression: r.func,
                    trackClick: r.func,
                    trackRecFeedbackPreModalClick: r.func,
                    trackRecFeedbackClickStep: r.func,
                    trackRecFeedbackClickStepPostSubmit: r.func
                };

            function d() {
                return function(e) {
                    return function(t) {
                        function n(e) {
                            var n = t.call(this, e) || this;
                            return n.feedbackDataMap = {}, n.getChildContext = function() {
                                return {
                                    trackTitleClick: n.trackTitleClick,
                                    trackTitleImpression: n.trackTitleImpression,
                                    trackRecFeedbackPreModalClick: n.trackRecFeedbackPreModalClick,
                                    trackRecFeedbackClickStep: n.trackRecFeedbackClickStep,
                                    trackRecFeedbackClickStepPostSubmit: n.trackRecFeedbackClickStepPostSubmit,
                                    trackImpression: n.trackImpression,
                                    trackClick: n.trackClick,
                                    cardIDtoItemTrackingIDMap: n.state.cardIDtoItemTrackingIDMap,
                                    cardIDtoRequestIDMap: n.state.cardIDtoRequestIDMap
                                }
                            }, n.mapShelfCardsToRequestIDs = function(e, t, n) {
                                return void 0 === n && (n = {}), e.reduce(function(e, n) {
                                    return n.node && !e[n.node.id] && (e[n.node.id] = t), e
                                }, n)
                            }, n.trackTitleImpression = function(e) {
                                var t = Object(s.g)(e.title),
                                    a = t.reasonType,
                                    r = t.reasonTarget,
                                    i = t.rowName,
                                    c = Object(s.f)(),
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
                                Object(s.i)(l, o.PageviewContent.HeaderGameName), n.setState({
                                    headerImpressionID: c
                                })
                            }, n.trackTitleClick = function() {
                                var e = n.props.shelf,
                                    t = Object(s.g)(e.title),
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
                                Object(s.h)(l, o.PageviewContent.HeaderGameName)
                            }, n.trackImpression = function(e, t, a, r) {
                                if (t.node && !n.state.cardIDtoItemTrackingIDMap[t.node.id]) {
                                    var i = Object(s.f)(),
                                        o = Object(s.g)(e.title),
                                        c = o.reasonType,
                                        l = o.reasonTarget,
                                        d = o.reasonTargetType,
                                        u = o.rowName,
                                        p = {
                                            component: s.a.Card,
                                            contentEdge: t,
                                            itemTrackingID: i,
                                            itemPosition: a,
                                            reasonType: c,
                                            reasonTarget: l,
                                            reasonTargetType: d,
                                            requestID: n.state.cardIDtoRequestIDMap[t.node.id],
                                            rowName: u,
                                            rowPosition: n.props.position,
                                            tagID: null,
                                            filtered: !1,
                                            tagSet: JSON.stringify(r),
                                            tagStreamerSet: "[]"
                                        };
                                    Object(s.i)(p), n.setState(function(e) {
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
                                        d = c.cardIDtoItemTrackingIDMap,
                                        u = Object(s.g)(e.title),
                                        p = u.reasonType,
                                        g = u.reasonTarget,
                                        m = u.reasonTargetType,
                                        h = u.rowName,
                                        f = {
                                            component: s.a.Card,
                                            contentEdge: t,
                                            itemTrackingID: d[t.node.id] || null,
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
                                    Object(s.h)(f, r)
                                }
                            }, n.trackRecFeedbackPreModalClick = function(e, t, r, i, o) {
                                var l, d = n.state.cardIDtoItemTrackingIDMap,
                                    u = Object(s.g)(t.title),
                                    p = u.reasonType,
                                    g = u.reasonTarget,
                                    m = u.reasonTargetType,
                                    h = u.rowName,
                                    f = Object(s.e)(r),
                                    k = f.itemID,
                                    v = f.contentType,
                                    T = k || t.id,
                                    y = {
                                        clickStep: e,
                                        itemTrackingID: r && r.node ? d[r.node.id] : null,
                                        itemPosition: i,
                                        rowPosition: n.props.position,
                                        reasonType: p,
                                        reasonTarget: g,
                                        reasonTargetType: m,
                                        rowName: h,
                                        itemName: o,
                                        modelTrackingID: r ? r.trackingID : null,
                                        clickedContentType: v || s.b.Shelf,
                                        clickedItemID: k || t.id
                                    };
                                n.feedbackDataMap = a.__assign({}, n.feedbackDataMap, ((l = {})[T] = y, l)), Object(c.c)(y)
                            }, n.trackRecFeedbackClickStep = function(e, t) {
                                var r, i = a.__assign({}, n.feedbackDataMap[e], {
                                    clickStep: t.clickStep,
                                    feedbackAction: t.feedbackAction,
                                    feedbackType: t.feedbackType,
                                    feedbackedItemID: t.feedbackedItemID,
                                    feedbackReason: t.feedbackReason
                                });
                                n.feedbackDataMap = a.__assign({}, n.feedbackDataMap, ((r = {})[e] = i, r)), Object(c.d)(i)
                            }, n.trackRecFeedbackClickStepPostSubmit = function(e, t) {
                                Object(c.d)(a.__assign({}, n.feedbackDataMap[e], {
                                    clickStep: c.a.PostSubmit,
                                    feedbackAction: t
                                }))
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
                            var t = Object(s.g)(this.props.shelf.title).rowName,
                                n = {
                                    trackTitleClick: this.getChildContext().trackTitleClick,
                                    trackTitleImpression: this.getChildContext().trackTitleImpression,
                                    trackRecFeedbackPreModalClick: this.getChildContext().trackRecFeedbackPreModalClick,
                                    trackImpression: this.getChildContext().trackImpression,
                                    trackClick: this.getChildContext().trackClick,
                                    trackRecFeedbackClickStep: this.getChildContext().trackRecFeedbackClickStep,
                                    trackRecFeedbackClickStepPostSubmit: this.getChildContext().trackRecFeedbackClickStepPostSubmit,
                                    shelfTrackingProps: {
                                        item_tracking_id: this.state.headerImpressionID,
                                        item_position: null,
                                        row_name: t,
                                        row_position: this.props.position
                                    }
                                };
                            return i.createElement(e, a.__assign({}, this.props, n))
                        }, n.childContextTypes = l, n
                    }(i.Component)
                }
            }
        },
        y5I9: function(e, t, n) {
            "use strict";

            function a(e, t) {
                return e.length !== t.length || e.some(function(e, n) {
                    return t[n] !== e
                })
            }

            function r(e, t) {
                var n = e || [],
                    a = t || [];
                return n.length !== a.length || n.some(function(e, t) {
                    return e.id !== a[t].id
                })
            }
            n.d(t, "a", function() {
                return a
            }), n.d(t, "b", function() {
                return r
            })
        },
        yI6f: function(e, t, n) {
            "use strict";
            var a, r, i, o, s, c, l = n("/7QA"),
                d = n("f00E"),
                u = n("2xye"),
                p = n("3sMy"),
                g = function() {
                    return Object(d.b)().substring(0, 16)
                };
            ! function(e) {
                e.TwitchHome = "twitch_home", e.BrowseLiveChannels = "browse_livechannels", e.BrowseCategories = "browse_categories", e.BrowseInCategoryChannels = "browse_incategory_channels"
            }(r || (r = {})),
            function(e) {
                e.Live = "live", e.Clip = "clip", e.Vod = "vod", e.Game = "game", e.Shelf = "shelf"
            }(i || (i = {})),
            function(e) {
                e.Card = "card", e.Header = "header"
            }(o || (o = {})),
            function(e) {
                e.Followed = "followed", e.Watched = "watched", e.Popularity = "popularity", e.Personalized = "personalized"
            }(s || (s = {})),
            function(e) {
                e.Live = "recs_live", e.Vod = "recs_vod", e.Clip = "recs_clip"
            }(c || (c = {}));
            var m = ((a = {})[p.a.TopLiveChannels] = function(e) {
                return {
                    reasonType: s.Popularity,
                    reasonTarget: null,
                    reasonTargetType: i.Live,
                    rowName: e
                }
            }, a[p.a.TopGames] = function(e) {
                return {
                    reasonType: s.Popularity,
                    reasonTarget: null,
                    reasonTargetType: i.Game,
                    rowName: e
                }
            }, a[p.a.TopChannelsPlayingGame] = function(e, t) {
                return {
                    reasonType: s.Popularity,
                    reasonTarget: t.context && t.context.id || null,
                    reasonTargetType: i.Game,
                    rowName: e
                }
            }, a[p.a.TopLiveChannelsYouMayLike] = function(e) {
                return {
                    reasonType: s.Personalized,
                    reasonTarget: null,
                    reasonTargetType: i.Live,
                    rowName: e
                }
            }, a[p.a.TopGamesForYou] = function(e) {
                return {
                    reasonType: s.Personalized,
                    reasonTarget: null,
                    reasonTargetType: i.Game,
                    rowName: e
                }
            }, a[p.a.RecommendedBecauseYouWatchX] = function(e, t) {
                return {
                    reasonType: s.Watched,
                    reasonTarget: t.context && t.context.id || null,
                    reasonTargetType: i.Game,
                    rowName: e
                }
            }, a[p.a.RecommendedBecauseYouFollowX] = function(e, t) {
                return {
                    reasonType: s.Followed,
                    reasonTarget: t.context && t.context.id || null,
                    reasonTargetType: null,
                    rowName: e
                }
            }, a[p.a.GreatNewClipsYouMayHaveMissed] = function(e) {
                return {
                    reasonType: s.Popularity,
                    reasonTarget: null,
                    reasonTargetType: i.Clip,
                    rowName: e
                }
            }, a[p.a.TopNewVideosYouMayHaveMissed] = function(e) {
                return {
                    reasonType: s.Popularity,
                    reasonTarget: null,
                    reasonTargetType: i.Vod,
                    rowName: e
                }
            }, a);

            function h(e) {
                var t = e.key;
                return m[t] ? m[t](t, e) : {
                    reasonType: null,
                    reasonTarget: "",
                    reasonTargetType: null,
                    rowName: t
                }
            }

            function f(e, t) {
                var n = k(e.contentEdge),
                    a = n.itemID,
                    i = n.channelID,
                    o = n.category,
                    s = n.contentType;
                return {
                    component: e.component,
                    request_id: e.requestID,
                    section: r.TwitchHome,
                    model_tracking_id: e.contentEdge && e.contentEdge.trackingID,
                    item_tracking_id: e.itemTrackingID,
                    item_id: a,
                    channel_id: null === i ? null : Number(i),
                    item_position: e.itemPosition,
                    item_subsection: t || null,
                    item_page: u.PageviewMedium.TwitchHome,
                    row_position: e.rowPosition,
                    content_type: s,
                    reason_type: e.reasonType,
                    reason_target: e.reasonTarget,
                    reason_target_type: e.reasonTargetType,
                    row_name: e.rowName,
                    tag_set: e.tagSet,
                    tag_streamer_set: e.tagStreamerSet,
                    filtered: e.filtered,
                    category: o,
                    tag_id: e.tagID
                }
            }

            function k(e) {
                var t, n = null,
                    a = null,
                    r = null,
                    o = e && e.node && e.node.id || "";
                if (e) switch (e.node && e.node.__typename) {
                    case "Stream":
                        n = (t = e.node).broadcaster && t.broadcaster.id, a = i.Live, o = String(t.broadcaster && t.broadcaster.id), r = t.game ? t.game.id : null;
                        break;
                    case "Clip":
                        n = (t = e.node).broadcaster && t.broadcaster.id, a = i.Clip, r = t.game ? t.game.id : null;
                        break;
                    case "Video":
                        n = (t = e.node).owner && t.owner.id, a = i.Vod, r = t.game ? t.game.id : null;
                        break;
                    case "Game":
                        t = e.node, n = null, a = i.Game, r = t.id
                }
                return {
                    itemID: o,
                    channelID: n,
                    category: r,
                    contentType: a
                }
            }

            function v(e, t) {
                var n = f(e, t);
                l.o.track(u.SpadeEventType.ItemClick, n)
            }

            function T(e, t) {
                var n = f(e, t);
                l.o.track(u.SpadeEventType.ItemDisplay, n)
            }

            function y(e) {
                var t = {
                    endpoint: e.endpoint,
                    request_id: e.requestID,
                    section: e.section
                };
                l.o.track(u.SpadeEventType.RecRequestClient, t)
            }
            var b = n("x75U"),
                C = n("A65o");
            n.d(t, "f", function() {
                return g
            }), n.d(t, "c", function() {
                return r
            }), n.d(t, "b", function() {
                return i
            }), n.d(t, "a", function() {
                return o
            }), n.d(t, !1, function() {
                return s
            }), n.d(t, "d", function() {
                return c
            }), n.d(t, "g", function() {
                return h
            }), n.d(t, "e", function() {
                return k
            }), n.d(t, "h", function() {
                return v
            }), n.d(t, "i", function() {
                return T
            }), n.d(t, "j", function() {
                return y
            }), n.d(t, !1, function() {
                return b.a
            }), n.d(t, "k", function() {
                return b.b
            }), n.d(t, !1, function() {
                return C.a
            })
        }
    }
]);