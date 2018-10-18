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
            var a, r = n("WRGI"),
                i = n("SKDF"),
                o = n("/MKj"),
                s = n("fvjX"),
                c = n("oA7Y"),
                l = n("X7a7"),
                d = n("mrSG"),
                u = n("q1tI"),
                p = n("4p7I"),
                g = n("yoKv"),
                m = n("mf+E"),
                h = n("ZS2+"),
                f = n("yR8l"),
                v = n("Uive"),
                T = n("cTNz"),
                y = n("/7QA"),
                k = n("vSJR");
            ! function(e) {
                e.Categories = "categories", e.LiveChannels = "live-channels"
            }(a || (a = {}));
            var b = n("Ue10"),
                S = function(e) {
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
                    return d.__extends(t, e), t.prototype.render = function() {
                        return u.createElement(k.a, {
                            buttonLabel: this.getShowingLabel(this.props.showingType),
                            hideDropdownOnInsideClick: !0,
                            "data-a-target": "browse-filter-dropdown"
                        }, this.renderShowingItem(a.Categories), this.renderShowingItem(a.LiveChannels))
                    }, t.prototype.renderShowingItem = function(e) {
                        var t = this.props.showingType === e ? u.createElement(b.Xa, {
                                attachRight: !0,
                                position: b.fb.Absolute,
                                margin: {
                                    right: 1
                                }
                            }, u.createElement(b.ob, {
                                asset: b.pb.Check,
                                height: 18,
                                width: 18
                            })) : null,
                            n = "categories";
                        return e === a.LiveChannels && (n = "channels"), u.createElement(b.Ua, {
                            "data-test-selector": e + "-selector",
                            "data-a-target": "browse-" + n + "-button",
                            linkTo: this.getLinkTo(e)
                        }, u.createElement(b.Xa, {
                            display: b.X.Flex,
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, this.getShowingLabel(e), t))
                    }, t.prototype.getShowingLabel = function(e) {
                        switch (e) {
                            case a.LiveChannels:
                                return Object(y.d)("Live Channels", "BrowseHeader");
                            case a.Categories:
                                return Object(y.d)("Categories", "BrowseHeader");
                            default:
                                return e
                        }
                    }, t
                }(u.Component),
                C = n("si2W"),
                w = n("C29h"),
                N = n("AZIu"),
                I = (n("TFM5"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return d.__extends(t, e), t.prototype.render = function() {
                        return u.createElement(b.Xa, {
                            className: "browse-header__filters",
                            display: b.X.Flex,
                            flexWrap: b.Ba.Wrap,
                            padding: {
                                top: 2,
                                right: 3
                            }
                        }, u.createElement(b.Xa, null, u.createElement(b.Xa, {
                            padding: {
                                left: .5,
                                top: 1
                            }
                        }, u.createElement(b.W, null, Object(y.d)("Showing", "BrowseHeader"))), u.createElement(S, {
                            showingType: this.props.showingType
                        })), u.createElement(b.Xa, null, u.createElement(b.Xa, {
                            padding: {
                                left: .5,
                                top: 1
                            }
                        }, u.createElement(b.W, null, Object(y.d)("Filters", "BrowseHeader"))), u.createElement(C.a, {
                            onAddTagFilter: this.props.addTagFilter,
                            onRemoveTagFilter: this.props.removeTagFilter,
                            section: this.props.showingType === a.Categories ? N.a.Categories : N.a.LiveChannels,
                            selectedTags: this.props.tagFilters,
                            tagSearchType: this.props.showingType === a.Categories ? w.b.TagCategory : w.b.TagAll
                        })))
                    }, t
                }(u.Component));
            var _ = Object(o.connect)(function(e) {
                    return {
                        tagFilters: Object(r.a)(e)
                    }
                }, function(e) {
                    return Object(s.bindActionCreators)({
                        addTagFilter: c.f,
                        removeTagFilter: c.j
                    }, e)
                })(I),
                E = n("JoTo"),
                D = n("cnlr"),
                O = n("4HIT"),
                x = n("9x/k"),
                F = function(e) {
                    return e === O.a.Popular || e === O.a.PopularEncodedLanguage || e === O.a.PopularTag
                },
                P = n("G1iw"),
                L = h.a.wrap(function() {
                    return Promise.resolve().then(n.bind(null, "SKDF"))
                }, "BrowseGamesPage"),
                A = h.a.wrap(function() {
                    return n.e(128).then(n.bind(null, "JTXL"))
                }, "DirectoryPopularPage"),
                R = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderSideNavInfoSection = function() {
                            return u.createElement(E.a, null, u.createElement(D.a, null))
                        }, t.renderAds = function() {
                            return u.createElement(v.a, {
                                injectStyles: {
                                    textAlign: "center",
                                    marginBottom: 0,
                                    marginTop: 30
                                },
                                adUnit: T.d.directory,
                                "data-a-target": "browse-banner-ad-slot",
                                slotID: T.b.directory.banner,
                                adSize: T.c.directory.banner,
                                targeting: {
                                    pagetype: T.a.games
                                },
                                autoEnable: !1
                            })
                        }, t.getActiveShowing = function() {
                            return F(t.props.match.path) ? a.LiveChannels : a.Categories
                        }, t.isBrowseTagsPath = function(e) {
                            return e === O.a.DirectoryTag || e === O.a.PopularTag
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
                                        section: e === O.a.DirectoryTag ? N.a.Categories : N.a.LiveChannels,
                                        tagPosition: 0,
                                        searchEvent: !1,
                                        tagId: a.id,
                                        dismiss: !1
                                    };
                                    Object(N.b)(r)
                                }
                            }
                        }, t
                    }
                    return d.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.setBrowseType(this.props.match.path);
                        var e = decodeURIComponent(this.props.location.pathname);
                        this.props.lastBrowsePath !== e && (this.props.changeLastBrowsePath(e), this.props.changeTagFilters([])), this.updateTagFilterFromPath(this.props.match.path, this.props.data)
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        var t = this.props.match.path,
                            n = e.match.path;
                        if (t !== n) {
                            this.setBrowseType(n);
                            var a = e.location.state && e.location.state.persistTags;
                            t === O.a.DirectoryTag && n === O.a.DirectoryCategory || t === O.a.PopularTag && n === O.a.Popular || a || this.props.changeTagFilters([])
                        }
                        var r = decodeURIComponent(e.location.pathname);
                        this.props.lastBrowsePath !== r && this.props.changeLastBrowsePath(r), this.updateTagFilterFromPath(n, e.data)
                    }, t.prototype.render = function() {
                        return u.createElement(b.Xa, null, this.renderAds(), u.createElement(_, {
                            showingType: this.getActiveShowing()
                        }), u.createElement(b.Xa, {
                            padding: {
                                bottom: 3,
                                top: 2,
                                x: 3
                            }
                        }, this.renderSideNavInfoSection(), u.createElement(g.a, null, u.createElement(p.a, {
                            path: O.a.CreativeCommunities,
                            render: this.redirectToTagCreative
                        }), u.createElement(p.a, {
                            path: O.a.PopularTag,
                            component: A
                        }), u.createElement(p.a, {
                            path: O.a.Popular,
                            component: A
                        }), u.createElement(p.a, {
                            path: O.a.DirectoryTag,
                            component: L
                        }), u.createElement(p.a, {
                            path: O.a.DirectoryCategory,
                            component: L
                        }))))
                    }, t.prototype.redirectToTagCreative = function() {
                        return u.createElement(m.a, {
                            path: "/",
                            to: O.a.TagCreative
                        })
                    }, t.prototype.setBrowseType = function(e) {
                        e === O.a.DirectoryCategory ? this.props.changeBrowseType(x.a.Games) : F(e) && this.props.changeBrowseType(x.a.Channels)
                    }, t
                }(u.Component),
                j = Object(s.compose)(Object(f.a)(P, {
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
                }))(R);
            var B = Object(o.connect)(function(e) {
                return {
                    browseType: Object(r.b)(e),
                    lastBrowsePath: e.browse.lastBrowsePath,
                    tagFilters: Object(r.a)(e)
                }
            }, function(e) {
                return Object(s.bindActionCreators)({
                    changeBrowseType: c.g,
                    changeLastBrowsePath: c.h,
                    changeTagFilters: c.i,
                    replaceLanguageTags: l.b
                }, e)
            })(j);
            n.d(t, "BrowseGamesPage", function() {
                return i.BrowseGamesPage
            }), n.d(t, "BrowseRootPage", function() {
                return B
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
                                n = this.props,
                                o = n.itemPosition,
                                s = n.rowPosition,
                                c = n.shelf,
                                l = Object(i.f)(c.title).rowName,
                                d = {
                                    trackImpression: this.trackImpression,
                                    trackClick: this.trackClick,
                                    shelfCardTrackingProps: {
                                        item_tracking_id: t || null,
                                        item_position: o,
                                        row_name: l,
                                        row_position: s
                                    }
                                };
                            return r.createElement(e, a.__assign({}, this.props, d))
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
        C29h: function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                r = n("q1tI"),
                i = n("9C/b"),
                o = n("fvjX"),
                s = n("/7QA"),
                c = n("N3I0"),
                l = n("8/mp"),
                d = n("f00E"),
                u = n("H/lO"),
                p = n("NZDK"),
                g = n("yR8l"),
                m = n("DMoW"),
                h = n("GIun"),
                f = n("Ue10"),
                v = function(e) {
                    var t, n = e.onClick,
                        a = e.tag;
                    n && (t = function() {
                        return n(a)
                    });
                    var i = "localizedDescription" in e.tag ? e.tag.localizedDescription : void 0;
                    return r.createElement(h.a, null, r.createElement(f.Ua, {
                        onClick: t
                    }, r.createElement(f.Xa, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, r.createElement(f.W, {
                        title: i
                    }, a.localizedName))))
                };
            var T, y = n("Ryvb");
            ! function(e) {
                e.SuggestedTags = "suggested-tags"
            }(T || (T = {}));
            var k, b, S = function(e) {
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
                            return e = t.state.filteredTopTags.map(t.renderSuggestedTag), r.createElement(f.Xa, {
                                padding: {
                                    bottom: 1
                                }
                            }, e)
                        }, t.renderSuggestedTag = function(e) {
                            return r.createElement(v, {
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
                        return this.props.data.loading || this.props.data.error ? null : this.props.data.game && this.props.data.game.tags && 0 !== this.props.data.game.tags.length && this.state.filteredTopTags && 0 !== this.state.filteredTopTags.length ? r.createElement(f.Xa, null, r.createElement(f.Xa, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, r.createElement(f.W, {
                            bold: !0
                        }, Object(s.d)("Suggestions", "TagSuggestions"))), this.renderTags(), r.createElement(f.Xa, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, r.createElement(f.W, {
                            bold: !0
                        }, Object(s.d)("All Tags", "AllTagsTitle")))) : null
                    }, t
                }(r.Component),
                C = Object(g.a)(y, {
                    options: function(e) {
                        return {
                            variables: {
                                gameName: e.gameName,
                                tagType: m.N.TOP,
                                limit: 50
                            }
                        }
                    }
                })(S),
                w = n("79jw"),
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
                            return r.createElement(h.a, {
                                key: e.id
                            }, r.createElement(f.Ua, {
                                onClick: function() {
                                    return t.props.onAddTag(e)
                                }
                            }, r.createElement(f.Xa, {
                                padding: {
                                    y: .5,
                                    x: 1
                                }
                            }, e.localizedName || e.tagName)))
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return this.props.data.error ? null : this.props.data.loading ? r.createElement(f.Xa, {
                            display: f.X.Flex,
                            justifyContent: f.Wa.Center,
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, r.createElement(f.Za, null)) : r.createElement(f.Xa, null, this.renderTags())
                    }, t
                }(r.Component),
                I = Object(o.compose)(Object(g.a)(w, {
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
                _ = n("sLmD"),
                E = n("AZIu"),
                D = n("4HIT");
            n("97MP");
            ! function(e) {
                e[e.TagAll = 0] = "TagAll", e[e.TagAllMinusAutomation = 1] = "TagAllMinusAutomation", e[e.TagCategory = 2] = "TagCategory", e[e.StreamTag = 3] = "StreamTag"
            }(k || (k = {})),
            function(e) {
                e.SearchContent = "tag-search-search-content", e.SearchDropdown = "search-dropdown-selector"
            }(b || (b = {}));
            var O = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.state = {
                            isOpen: !1,
                            searching: !1,
                            searchTerm: ""
                        }, n.languageCode = Object(_.a)(), n.renderSearchContent = function() {
                            var e = null;
                            return e = n.props.type === k.StreamTag ? n.renderStreamTagResults() : n.renderTagResults(), r.createElement(l.b, {
                                className: "tag-search__scrollable-area",
                                suppressScrollX: !0
                            }, r.createElement(f.Xa, {
                                "data-test-selector": b.SearchContent
                            }, n.renderSuggestedTags(), e))
                        }, n.renderTagSearchResult = function(e) {
                            var t = Object(_.b)(e),
                                a = "tag_scope" in e ? e.tag_scope : void 0;
                            return r.createElement(v, {
                                key: t.id,
                                onClick: function() {
                                    return n.onTagResultSelected(t, a)
                                },
                                tag: t
                            })
                        }, n.renderStreamTagResults = function() {
                            return n.props.type === k.StreamTag && n.state.isOpen ? "" === n.state.searchTerm ? r.createElement(I, {
                                categoryName: n.props.categoryName,
                                onAddTag: n.onTagResultSelected,
                                tagsLimit: 100
                            }) : !n.state.searchResults && n.state.searching ? n.renderLoading() : n.state.searchResults && n.state.searchResults.streamTags && n.state.searchResults.streamTags.hits.length ? n.state.searchResults.streamTags.hits.map(n.renderTagSearchResult) : n.renderNoResults() : null
                        }, n.renderTagResults = function() {
                            return n.state.isOpen ? n.props.type === k.TagAll && "" === n.state.searchTerm ? r.createElement(I, {
                                onAddTag: n.onTagResultSelected,
                                tagsLimit: 100
                            }) : !n.state.searchResults && n.state.searching ? n.renderLoading() : n.state.searchResults && n.state.searchResults.tags && n.state.searchResults.tags.hits.length ? n.state.searchResults.tags.hits.map(n.renderTagSearchResult) : n.renderNoResults() : null
                        }, n.setTagSearchRef = function(e) {
                            n.tagSearch = e
                        }, n.onTagResultSelected = function(e, t) {
                            if (n.toggleTagSearch(!1), n.clearSearchTerm(), n.props.type === k.TagCategory && "SCOPE_ALL" === t ? s.p.history.push(D.a.Popular, {
                                    persistTags: !0
                                }) : n.props.type === k.TagAll && "SCOPE_CATEGORY" === t && s.p.history.push(D.a.Games, {
                                    persistTags: !0
                                }), n.props.onTagClick && (n.props.onTagClick(e), n.props.section && n.props.numSelectedTags)) {
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
                                (n.props.type !== k.TagAll && n.props.type !== k.StreamTag || n.props.type === k.TagAll && "" !== n.state.searchTerm || n.props.type === k.StreamTag && "" !== n.state.searchTerm) && (n.inputTimeout = setTimeout(function() {
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
                        }, n.searchClient = new p.a({
                            appId: s.a.algoliaApplicationID,
                            apiKey: s.a.algoliaAPIKey,
                            apolloClient: s.p.apollo.client,
                            logger: s.k,
                            config: s.a,
                            stats: s.p.stats
                        }), n
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return r.createElement(c.a, {
                            autoFocus: this.props.autoFocus,
                            "data-test-selector": b.SearchDropdown,
                            inline: this.props.inline,
                            inputSize: this.props.inputSize,
                            onChange: this.onInputChange,
                            onFocusInput: this.onFocusInput,
                            onClose: this.onSearchClose,
                            placeholder: Object(s.d)("Search Tags", "TagSearch"),
                            ref: this.setTagSearchRef
                        }, this.renderSearchContent())
                    }, t.prototype.renderLoading = function() {
                        return r.createElement(f.Xa, {
                            display: f.X.Flex,
                            justifyContent: f.Wa.Center,
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, r.createElement(f.Za, {
                            delay: 0
                        }))
                    }, t.prototype.renderNoResults = function() {
                        return this.state.searching ? null : r.createElement(f.Xa, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, Object(s.d)("No results found", "TagSearch"))
                    }, t.prototype.renderSuggestedTags = function() {
                        if (this.props.type !== k.TagAllMinusAutomation || "" !== this.state.searchTerm) return null;
                        var e = this.props.selectedTags && this.props.selectedTags.map(function(e) {
                            return e.id
                        }) || [];
                        return r.createElement(f.Xa, null, r.createElement(C, {
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
                                        }, n = u.a.Tags, this.props.type === k.TagAllMinusAutomation ? (t.facetFilters = '["automated:false", "tag_scope:SCOPE_ALL"]', this.props.showAllDashboardTags && (t.hitsPerPage = 300)) : this.props.type === k.TagAll ? this.props.selectedTags && this.props.selectedTags.length ? t.facetFilters = "tag_scope:SCOPE_ALL" : t.facetFilters = '[["tag_scope:SCOPE_ALL", "tag_scope:SCOPE_CATEGORY"]]' : this.props.type === k.TagCategory ? "" === e || this.props.selectedTags && this.props.selectedTags.length ? t.facetFilters = "tag_scope:SCOPE_CATEGORY" : t.facetFilters = '[["tag_scope:SCOPE_ALL", "tag_scope:SCOPE_CATEGORY"]]' : this.props.type === k.StreamTag && (n = u.a.StreamTags, t.facetFilters = "category_id:" + this.props.categoryID), [4, this.searchClient.queryForType(n, e, d.a(), t)];
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
                x = Object(o.compose)(i.a)(O);
            n.d(t, "b", function() {
                return k
            }), n.d(t, !1, function() {
                return b
            }), n.d(t, !1, function() {
                return O
            }), n.d(t, "a", function() {
                return x
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
            }), n.d(t, "f", function() {
                return s
            }), n.d(t, "e", function() {
                return c
            }), n.d(t, "g", function() {
                return l
            });
            var a = "directory.LANGUAGE_TAGS_UPDATED",
                r = "directory.TAG_FILTER_ADDED",
                i = "directory.TAG_FILTER_CHANGED",
                o = "directory.TAG_FILTER_REMOVED";

            function s(e) {
                return {
                    type: a,
                    languageTags: e
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
                    return r.createElement(s.Xa, {
                        display: s.X.Flex,
                        flexDirection: s.Aa.Column,
                        justifyContent: s.Wa.Center,
                        alignItems: s.f.Center,
                        flexGrow: 1,
                        fullHeight: !0,
                        padding: {
                            y: 1
                        },
                        zIndex: s.cc.Above
                    }, r.createElement(s.zb, {
                        color: s.O.Alt2,
                        textAlign: s.Lb.Center,
                        flexShrink: 1
                    }, r.createElement(s.ob, {
                        asset: s.pb.DeadGlitch,
                        width: 46,
                        height: 48
                    })), r.createElement(s.Pa, {
                        margin: {
                            top: 1
                        },
                        textAlign: s.Lb.Center
                    }, r.createElement(s.W, {
                        type: s.Pb.H4,
                        "data-test-selector": "search-error-message"
                    }, Object(o.d)("Search is not available at this time", "DropdownSearchError"))), r.createElement(s.W, {
                        type: s.Pb.P
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
                            n = r.createElement(s.rb, {
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
                        }, r.createElement(s.zb, {
                            background: this.state.isInputFocused || this.state.isOpen ? s.r.Base : void 0,
                            borderRadius: s.x.Large,
                            padding: .5,
                            position: s.fb.Relative,
                            elevation: this.state.isInputFocused || this.state.isOpen ? 3 : void 0
                        }, n, e && r.createElement(s.zb, {
                            attachLeft: !0,
                            background: s.r.Base,
                            borderRadius: s.x.Large,
                            display: this.state.isOpen ? s.X.Block : s.X.Hide,
                            fullWidth: !0,
                            padding: {
                                y: 1
                            },
                            position: s.fb.Absolute,
                            zIndex: s.cc.Above,
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
                m = n("WRGI"),
                h = n("17x9"),
                f = n("wIs1"),
                v = n("ZDlU"),
                T = n("8/mp"),
                y = n("yR8l"),
                k = n("geRD"),
                b = n("kduP"),
                S = n("MPw5"),
                C = n("Uive"),
                w = n("cTNz"),
                N = n("oJov"),
                I = n("Bh3T"),
                _ = n("bUox"),
                E = n("TCeE"),
                D = n("AZIu"),
                O = n("9x/k"),
                x = n("rShu"),
                F = n("x/sq"),
                P = n("yI6f"),
                L = n("T2RZ"),
                A = n("Ue10"),
                R = n("0egc"),
                j = Object(L.a)(l.PageviewMedium.Browse, P.b.Game, P.c.BrowseCategories)(N.a),
                B = "directory-first-item",
                G = "directory-container";

            function M(e) {
                return (e.directoriesWithTags && e.directoriesWithTags.edges || []).filter(function(e) {
                    return e && e.node && e.node.id
                })
            }
            var W = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            numSlotsAdded: 0
                        }, t.onWindowResize = function() {
                            return requestAnimationFrame(t.updateDisplayAdOrder)
                        }, t.updateDisplayAdOrder = function() {
                            var e = document.querySelector('[data-target="' + G + '"]'),
                                t = document.querySelector('[data-target="' + B + '"]'),
                                n = document.querySelector("#" + w.b.directory.rectangle);
                            if (t && e && n) {
                                var a = Math.round((e.clientWidth - 300) / t.clientWidth).toString();
                                n.style.order !== a && "0" !== a && (n.style.order = a)
                            }
                        }, t.removeLastTag = function() {
                            var e = t.props.tagFilters[t.props.tagFilters.length - 1],
                                n = {
                                    section: t.props.browseType === O.a.Games ? D.a.Categories : D.a.LiveChannels,
                                    tagPosition: t.props.tagFilters.length - 1,
                                    searchEvent: !0,
                                    tagId: e.id,
                                    dismiss: !0
                                };
                            Object(D.b)(n), t.props.removeTagFilter(e)
                        }, t.onSlotAdded = function() {
                            t.setState(function(e) {
                                var t = e.numSlotsAdded + 1;
                                return t === Object.keys(w.b.directory).length && S.a.display(w.b.directory.banner), {
                                    numSlotsAdded: t
                                }
                            })
                        }, t.canPaginate = function() {
                            return !(t.props.data.loading || t.props.data.error || !t.props.data.directoriesWithTags || !t.props.data.directoriesWithTags.pageInfo.hasNextPage)
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentWillMount = function() {
                        w.g.addListener(w.e, this.onSlotAdded)
                    }, t.prototype.componentDidMount = function() {
                        window.addEventListener("resize", this.onWindowResize), this.onRender()
                    }, t.prototype.componentDidUpdate = function() {
                        this.onRender()
                    }, t.prototype.componentWillUnmount = function() {
                        window.removeEventListener("resize", this.onWindowResize), w.g.removeListener(w.e, this.onSlotAdded)
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        this.props.sideNavExpanded !== e.sideNavExpanded && this.onWindowResize(), this.props.lastBrowsePath !== e.location.pathname && this.props.changeLastBrowsePath(decodeURIComponent(e.location.pathname))
                    }, t.prototype.render = function() {
                        var e = this;
                        if (this.props.tagFilters.length > E.a) return r.createElement(_.a, {
                            errorType: _.b.TooManyTags,
                            onClickRemoveLastTag: this.removeLastTag,
                            tagFilters: this.props.tagFilters
                        });
                        if (this.props.data.loading) return r.createElement(A.Za, {
                            fillContent: !0
                        });
                        if (!this.props.data.directoriesWithTags) return r.createElement(v.a, {
                            message: Object(o.d)("Error loading data.", "BrowseDirectory")
                        });
                        if (this.props.data.directoriesWithTags && this.props.data.directoriesWithTags.edges && 0 === this.props.data.directoriesWithTags.edges.length) return r.createElement(_.a, {
                            errorType: _.b.NoResults,
                            onClickRemoveLastTag: this.removeLastTag,
                            tagFilters: this.props.tagFilters
                        });
                        var t = l.PageviewContent.Game,
                            n = M(this.props.data).map(function(n, a) {
                                var i = n && n.node;
                                if (i) {
                                    var s = Object(F.a)({
                                            tags: n && n.node && n.node.tags,
                                            onClickTag: e.props.addTagFilter,
                                            tagFilters: e.props.tagFilters,
                                            section: e.props.browseType === O.a.Games ? D.a.Categories : D.a.LiveChannels,
                                            scrollToTop: e.context.scrollToTop
                                        }),
                                        c = !1,
                                        d = i && "Game" === i.__typename && i.activeDropCampaigns;
                                    return d && (c = d.some(function(e) {
                                        return e && e.applicableChannels && 0 === e.applicableChannels.length || !1
                                    })), r.createElement("div", {
                                        key: i.id,
                                        "data-target": a ? "" : B,
                                        style: {
                                            order: a
                                        }
                                    }, r.createElement(A.Xa, {
                                        margin: {
                                            bottom: 2
                                        },
                                        "data-target": "directory-page__card-container",
                                        position: A.fb.Relative
                                    }, r.createElement(j, {
                                        linkTo: {
                                            pathname: Object(b.c)(i.name),
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
                        return r.createElement(A.Xa, null, r.createElement(I.b, {
                            addPaddingWhenPlayerIsPersisting: !0
                        }), r.createElement("div", {
                            "data-target": G
                        }, r.createElement(A.Vb, {
                            gutterSize: A.Xb.Small,
                            childWidth: A.Wb.Small,
                            placeholderItems: 20
                        }, r.createElement(C.a, {
                            key: -1,
                            injectStyles: {
                                textAlign: "center",
                                marginBottom: 20,
                                order: 999,
                                width: 300,
                                height: 250
                            },
                            adUnit: w.d.directory,
                            slotID: w.b.directory.rectangle,
                            adSize: w.c.directory.rectangle,
                            "data-a-target": "browse-card-ad-slot",
                            targeting: {
                                pagetype: w.a.games
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
                        scrollToTop: h.func
                    }, t
                }(r.Component),
                q = Object(p.compose)(Object(d.b)("BrowseDirectory"), Object(y.a)(R, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            errorPolicy: "all",
                            variables: {
                                limit: 30,
                                directoryFilters: [x.a.Games],
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
                                    query: R,
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
                                                edges: Object(k.c)(M(e), M(n))
                                            })
                                        }
                                    }
                                })
                            }
                        })
                    }
                }))(Object(f.a)(W));
            var U = Object(u.connect)(function(e) {
                    return {
                        browseType: e.browse.browseType,
                        lastBrowsePath: e.browse.lastBrowsePath,
                        sideNavExpanded: e.ui.sideNavExpanded,
                        tagFilters: Object(m.a)(e)
                    }
                }, function(e) {
                    return Object(p.bindActionCreators)({
                        addTagFilter: g.f,
                        changeLastBrowsePath: g.h,
                        removeTagFilter: g.j
                    }, e)
                })(q),
                X = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        o.p.setPageTitle(Object(o.d)("All Games", "BrowseGamePage"))
                    }, t.prototype.render = function() {
                        return r.createElement(U, {
                            category: O.a.Games
                        })
                    }, t
                }(r.Component),
                z = Object(i.compose)(Object(d.b)("DirectoryPage", {
                    autoReportInteractive: !0,
                    destination: c.a.BrowseGames
                }), Object(s.a)({
                    location: l.PageviewLocation.Browse
                }))(X);
            n.d(t, "BrowseGamesPageComponent", function() {
                return X
            }), n.d(t, "BrowseGamesPage", function() {
                return z
            })
        },
        T2RZ: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return T
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
                        n && n(r), s.o.track(l.SpadeEventType.ItemClick, a.__assign({}, e, {
                            item_subsection: t
                        }))
                    }
            }

            function v(e, t) {
                return a.__assign({}, t, {
                    callback: function(n) {
                        t.callback && t.callback(n), s.o.track(l.SpadeEventType.ItemClick, a.__assign({}, e, {
                            item_subsection: l.PageviewContent.Tag,
                            tag_id: n.id
                        }))
                    }
                })
            }

            function T(e, t, n) {
                return function(T) {
                    var y = function(i) {
                        function o() {
                            var e = null !== i && i.apply(this, arguments) || this;
                            return e.itemTrackingID = Object(m.e)(), e.trackImpression = function() {
                                s.o.track(l.SpadeEventType.ItemDisplay, e.getCommonTrackingParams())
                            }, e
                        }
                        return a.__extends(o, i), o.prototype.componentDidMount = function() {
                            this.props.impressionListener.registerImpressionCallback(this.trackImpression)
                        }, o.prototype.render = function() {
                            if (T === d.a) {
                                var e = this.props;
                                return r.createElement(T, a.__assign({}, e, this.wrapGameCardPropsWithTracking(e)))
                            }
                            e = this.props;
                            return r.createElement(T, a.__assign({}, e, this.wrapPreviewCardPropsWithTracking(e)))
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
                        }, o.displayName = Object(c.a)(o.name, T), o
                    }(r.Component);
                    return Object(o.compose)(Object(u.a)("PreviewCard-" + e + "-" + t, {
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
                    }))(y)
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
            r.p.store.registerReducer("browse", function(e, t) {
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
                            return n = new Set(l()), t ? n.add(e) : n.delete(e), c = Array.from(n), r.m.set(o, c), s(Object(i.f)(c)), [2]
                        })
                    })
                }
            }

            function c(e) {
                var t = this;
                return function(n) {
                    return a.__awaiter(t, void 0, void 0, function() {
                        return a.__generator(this, function(t) {
                            return r.m.set(o, e), n(Object(i.f)(e)), [2]
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
                            return i.createElement(s.Xa, {
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
                    return i.createElement(s.Xa, null, i.createElement(s.W, {
                        type: s.Pb.H3
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
            var f, v, T = n("Ue10"),
                y = function(e) {
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
                        return i.createElement(T.Xa, {
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
                        return i.createElement(i.Fragment, null, i.createElement(T.W, {
                            color: T.O.Base,
                            fontSize: T.Ca.Size4
                        }, e), i.createElement(T.W, {
                            color: T.O.Alt2,
                            fontSize: T.Ca.Size5
                        }, t))
                    }, t.prototype.renderBulletPoints = function(e, t) {
                        var n = t.map(function(e, t) {
                            return i.createElement(T.Xa, {
                                key: "upsell-center-text-" + t,
                                display: T.X.Flex,
                                flexDirection: T.Aa.Row,
                                alignItems: T.f.Start
                            }, i.createElement(T.ob, {
                                type: T.qb.Alt2,
                                asset: T.pb.Check
                            }), i.createElement(T.Xa, {
                                margin: {
                                    left: 1
                                },
                                textAlign: T.Lb.Left
                            }, i.createElement(T.W, {
                                color: T.O.Alt2,
                                fontSize: T.Ca.Size6
                            }, e)))
                        });
                        return i.createElement(i.Fragment, null, i.createElement(T.W, {
                            color: T.O.Base,
                            fontSize: T.Ca.Size4
                        }, e), i.createElement(T.Xa, {
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
                S = (n("wqI2"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.impressionEventFired = !1, t.signup = function() {
                            ! function(e) {
                                var t = r.__assign({
                                    section: f.SideNav,
                                    click_subsection: v.Upsell
                                }, e);
                                c.o.track(k.SpadeEventType.ItemClick, t)
                            }(), t.props.signup()
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.trackImpression()
                    }, t.prototype.componentDidUpdate = function() {
                        this.trackImpression()
                    }, t.prototype.render = function() {
                        return i.createElement(T.zb, {
                            background: T.r.AccentAlt2,
                            display: T.X.Flex,
                            flexDirection: T.Aa.Column,
                            padding: {
                                y: 2,
                                x: 1
                            },
                            margin: 1
                        }, this.renderImage(), i.createElement(T.Xa, {
                            textAlign: T.Lb.Center
                        }, this.renderText(), i.createElement(T.z, {
                            onClick: this.signup,
                            size: T.D.Large
                        }, i.createElement(T.Xa, {
                            padding: {
                                x: 1
                            }
                        }, i.createElement(T.W, {
                            color: T.O.Base
                        }, Object(c.d)("Sign up", "UpsellCenter"))))))
                    }, t.prototype.renderText = function() {
                        if (!this.props.channelLogin) return i.createElement(y, {
                            showDefault: !0
                        });
                        if (this.props.data && this.props.data.user) {
                            var e = {
                                game: this.props.data.user.broadcastSettings && this.props.data.user.broadcastSettings.game && this.props.data.user.broadcastSettings.game.displayName || "",
                                channelDisplayName: this.props.data.user.displayName || ""
                            };
                            return i.createElement(y, {
                                data: e
                            })
                        }
                    }, t.prototype.renderImage = function() {
                        var e = i.createElement(T.S, {
                            alt: Object(c.d)("Upsell Center", "UpsellCenter"),
                            src: d.a
                        });
                        return this.props.channelLogin && this.props.data && this.props.data.user && this.props.data.user.profileImageURL ? i.createElement(T.Xa, {
                            position: T.fb.Relative
                        }, i.createElement(T.Xa, {
                            className: "upsell-center__avatar",
                            position: T.fb.Absolute,
                            zIndex: T.cc.Above
                        }, i.createElement(T.q, {
                            src: this.props.data.user.profileImageURL,
                            alt: Object(c.d)("{displayName}'s Profile Image", {
                                displayName: this.props.data.user.displayName || ""
                            }, "UpsellCenter"),
                            borderRadius: T.x.Large,
                            size: 40
                        })), e) : e
                    }, t.prototype.trackImpression = function() {
                        this.impressionEventFired || (! function(e) {
                            var t = r.__assign({
                                section: f.SideNav
                            }, e);
                            c.o.track(k.SpadeEventType.ItemDisplay, t)
                        }(), this.impressionEventFired = !0)
                    }, t
                }(i.PureComponent));
            var C = Object(s.compose)(Object(u.a)(b, {
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
                }))(S),
                w = n("kRBY"),
                N = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return this.props.isLoggedIn || this.props.collapsed ? null : i.createElement(C, r.__assign({}, this.props))
                    }, t
                }(i.PureComponent);
            var I = Object(o.connect)(function(e) {
                return {
                    collapsed: !e.ui.sideNavExpanded,
                    isLoggedIn: Object(w.f)(e)
                }
            })(N);
            n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {
                return S
            }), n.d(t, !1, function() {
                return N
            }), n.d(t, "a", function() {
                return I
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
            r.p.store.registerReducer("directory", function(e, t) {
                switch (void 0 === e && (e = {
                    languageTags: Object(o.a)(),
                    tagFilters: {}
                }), t.type) {
                    case i.a:
                        return a.__assign({}, e, {
                            languageTags: t.languageTags
                        });
                    case i.b:
                        var n = a.__assign({}, e.tagFilters),
                            r = n[t.categoryName];
                        return (void 0 === r || r.every(function(e) {
                            return e.id !== t.addedTag.id
                        })) && (n[t.categoryName] = (n[t.categoryName] || []).concat([t.addedTag])), a.__assign({}, e, {
                            tagFilters: n
                        });
                    case i.c:
                        return e.tagFilters[t.categoryName] = t.tagFilters.slice(), a.__assign({}, e);
                    case i.d:
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
                return d
            }), n.d(t, "h", function() {
                return u
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

            function d(e) {
                return {
                    type: o,
                    tagFilters: e
                }
            }

            function u(e) {
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
                    return r.createElement(o.Xa, a.__assign({
                        className: "drops-badge",
                        position: o.fb.Absolute,
                        attachTop: !0,
                        attachRight: !0
                    }, Object(o.dc)(e)), r.createElement(o.Sb, {
                        direction: o.Ub.Top,
                        align: o.Tb.Right,
                        label: Object(i.d)("Offers in-game Drops", "DropsBadge")
                    }, r.createElement(o.zb, {
                        className: "drops-badge__drops-icon",
                        position: o.fb.Relative,
                        padding: {
                            top: .5,
                            right: .5,
                            bottom: 3,
                            left: 3
                        },
                        overflow: o.ab.Hidden,
                        color: o.O.Overlay,
                        zIndex: o.cc.Default
                    }, r.createElement(o.U, {
                        type: o.V.Inherit,
                        hoverColorInherit: !0,
                        to: "https://help.twitch.tv/customer/en/portal/articles/2754380-how-to-earn-drops"
                    }, r.createElement(o.ob, {
                        asset: o.pb.Drops
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
                return e.placeholder ? r.createElement(r.Fragment, null, r.createElement(o.Xa, {
                    margin: {
                        bottom: .5
                    }
                }, r.createElement(o.o, {
                    ratio: o.p.Aspect3x4
                }, r.createElement(o.eb, null))), r.createElement(o.W, null, r.createElement(o.eb, {
                    width: 150
                })), r.createElement(o.W, {
                    fontSize: o.Ca.Size7
                }, r.createElement(o.eb, {
                    width: 100
                }))) : (t = r.createElement(r.Fragment, null, r.createElement(o.Xa, {
                    className: "tw-box-art-card__image " + (e.unavailable && !e.disabled ? "tw-box-art-card__image--unavailable" : ""),
                    "data-test-selector": "tw-card-image",
                    "data-a-target": "tw-card-image"
                }, r.createElement(o.I, a.__assign({
                    aspect: o.p.BoxArt,
                    borderRadius: o.x.Medium
                }, d(e)))), r.createElement(o.H, null, r.createElement(o.Xa, {
                    display: o.X.Flex
                }, r.createElement(o.Xa, {
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
                    type: o.Pb.H3,
                    fontSize: o.Ca.Size5,
                    lineHeight: o.Ya.Body,
                    ellipsis: !0
                }, e.title)), e.contextualCardActionProps && r.createElement(o.Xa, {
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
                }, Object(o.dc)(e)), r.createElement(o.G, {
                    key: e.title
                }, t), e.tagListProps && 0 !== e.tagListProps.tags.length && r.createElement(o.Xa, {
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
                c = n("Ue10"),
                l = (n("BIFG"), n("BEfv"));
            ! function(e) {
                e.Bounce = "animated-tag--bounce", e.NoBounce = "animated-tag--no-bounce"
            }(a || (a = {}));
            var d = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = null;
                        if (this.props.getTagFromGQL) {
                            if (!this.props.data || this.props.data.loading || this.props.data.error || !this.props.data.contentTag) return null;
                            var t = this.props.data.contentTag;
                            e = i.createElement(c.Ia, {
                                label: t.localizedName,
                                onClick: this.props.onClickForGQLTag && this.props.onClickForGQLTag.bind(this, t),
                                selected: !0,
                                size: c.Sa.Large
                            })
                        } else this.props.formTagProps && (e = i.createElement(c.Ia, r.__assign({}, this.props.formTagProps)));
                        return i.createElement("div", {
                            className: a.NoBounce,
                            "data-tag-filter": this.props.tagID
                        }, e)
                    }, t
                }(i.Component),
                u = Object(o.compose)(Object(s.a)(l, {
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
                }))(d);
            n.d(t, "b", function() {
                return a
            }), n.d(t, !1, function() {
                return d
            }), n.d(t, "a", function() {
                return u
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
                p = n("odjZ"),
                g = n("C29h"),
                m = n("AZIu"),
                h = n("4HIT"),
                f = n("Ue10"),
                v = [h.a.Popular, h.a.PopularTag, "/directory/game/:encodedCommunityName"];
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
                                n = t.props.languageTags.slice();
                            return (n = n.filter(function(t) {
                                return !e.includes(t)
                            })).map(function(e) {
                                return l.createElement(f.Xa, {
                                    key: "language-tag-filter-" + e,
                                    margin: .5
                                }, l.createElement(p.a, {
                                    "data-test-selector": a.Tag,
                                    getTagFromGQL: !0,
                                    onClickForGQLTag: t.removeTagOnClick,
                                    tagID: e
                                }))
                            })
                        }, t.renderTags = function() {
                            return t.props.selectedTags.map(function(e) {
                                return l.createElement(f.Xa, {
                                    key: "tag-filter-" + e.id,
                                    margin: .5
                                }, l.createElement(p.a, {
                                    "data-test-selector": a.Tag,
                                    formTagProps: {
                                        label: e.localizedName || e.tagName,
                                        onClick: t.removeTagOnClick.bind(t, e),
                                        selected: !0,
                                        size: f.Sa.Large
                                    },
                                    tagID: e.id
                                }))
                            })
                        }, t.renderAddTags = function() {
                            return l.createElement(l.Fragment, null, l.createElement(f.Xa, {
                                "data-test-selector": a.TagSearchWrapper,
                                display: t.state.isShowingTagSearch ? f.X.Block : f.X.Hide,
                                margin: {
                                    right: 1
                                }
                            }, t.renderTagSearch()), l.createElement(f.Xa, {
                                "data-test-selector": a.TagAddButtonWrapper,
                                display: t.state.isShowingTagSearch ? f.X.Hide : f.X.Block,
                                margin: {
                                    left: .5,
                                    y: .5
                                }
                            }, l.createElement(f.Ia, {
                                "data-test-selector": a.TagAddButton,
                                label: Object(u.d)("Add Filter", "TagFilter"),
                                onClick: t.showTagSearch,
                                size: f.Sa.Large
                            })))
                        }, t.renderTagSearch = function() {
                            if (t.props.tagSearchType === g.b.StreamTag) {
                                var e = {
                                    autoFocus: t.state.isShowingTagSearch,
                                    categoryID: t.props.categoryID,
                                    categoryName: t.props.categoryName,
                                    inline: !0,
                                    inputSize: f.Sa.Large,
                                    onTagClick: t.addTagOnClick,
                                    type: t.props.tagSearchType,
                                    section: t.props.section,
                                    selectedTags: t.props.selectedTags,
                                    numSelectedTags: t.props.selectedTags.length
                                };
                                return l.createElement(g.a, c.__assign({}, e))
                            }
                            var n = {
                                autoFocus: t.state.isShowingTagSearch,
                                inline: !0,
                                inputSize: f.Sa.Large,
                                onTagClick: t.addTagOnClick,
                                type: t.props.tagSearchType,
                                section: t.props.section,
                                selectedTags: t.props.selectedTags,
                                numSelectedTags: t.props.selectedTags.length
                            };
                            return l.createElement(g.a, c.__assign({}, n))
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
                            Object(m.b)(a), t.props.onRemoveTagFilter(e)
                        }, t.removeTagFromPath = function() {
                            t.props.match.path === h.a.DirectoryTag ? u.p.history.push(h.a.Games) : t.props.match.path === h.a.PopularTag && u.p.history.push(h.a.Popular)
                        }, t
                    }
                    return c.__extends(t, e), t.prototype.render = function() {
                        return l.createElement(f.Xa, {
                            display: f.X.Flex,
                            flexWrap: f.Ba.Wrap,
                            "data-a-target": "tags-filter-dropdown"
                        }, this.renderLanguageTags(), this.renderTags(), this.renderAddTags())
                    }, t
                }(l.Component),
                y = Object(i.compose)(d.a)(T);
            var k = Object(r.connect)(function(e) {
                return {
                    languageTags: Object(s.b)(e)
                }
            }, function(e) {
                return Object(i.bindActionCreators)({
                    updateLanguageTags: o.c
                }, e)
            })(y);
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
                return v
            }), n.d(t, "a", function() {
                return T
            });
            var a = n("q1tI"),
                r = n("/7QA"),
                i = n("GxR5"),
                o = n("Ue10");

            function s(e) {
                return a.createElement(o.W, {
                    type: o.Pb.Strong
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

            function v(e) {
                return Object(r.d)("If you need a Twitch account, you can <x:click>create one here</x:click>.", {
                    "x:click": function(t) {
                        return l(t, e)
                    }
                }, "ServerMessage")
            }

            function T(e) {
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
                    }, i.createElement(c.zb, r.__assign({
                        background: this.state.isOpen ? c.r.Base : void 0,
                        borderRadius: c.x.Large,
                        className: "inline-dropdown",
                        elevation: this.state.isOpen ? 3 : void 0,
                        padding: .5,
                        position: c.fb.Relative
                    }, Object(s.a)(this.props)), i.createElement("div", {
                        className: "inline-dropdown__button-wrapper"
                    }, i.createElement(c.z, {
                        blurAfterClick: !0,
                        dropdown: !0,
                        onClick: this.handleButtonClick,
                        size: c.D.Large,
                        type: c.F.Hollow
                    }, this.props.buttonLabel)), i.createElement(c.zb, {
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
                        position: c.fb.Absolute,
                        zIndex: c.cc.Above
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
                            if (u && u(), e.isLanguageTag && a.p.store.dispatch(Object(s.c)(e.id, !0)), d.every(function(t) {
                                    return t.id !== e.id
                                })) {
                                c && c(e);
                                var t = {
                                    section: n,
                                    tagPosition: d.length,
                                    searchEvent: !1,
                                    tagId: e.id,
                                    dismiss: !1
                                };
                                Object(o.b)(t)
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
                                        d = c.cardIDtoItemTrackingIDMap,
                                        u = Object(s.f)(e.title),
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
        yI6f: function(e, t, n) {
            "use strict";
            var a, r, i, o, s, c, l, d = n("/7QA"),
                u = n("f00E"),
                p = n("2xye"),
                g = n("3sMy"),
                m = function() {
                    return Object(u.b)().substring(0, 16)
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

            function T(e, t) {
                var n = v(e, t);
                d.o.track(p.SpadeEventType.ItemClick, n)
            }

            function y(e, t) {
                var n = v(e, t);
                d.o.track(p.SpadeEventType.ItemDisplay, n)
            }

            function k(e) {
                var t = {
                    endpoint: e.endpoint,
                    request_id: e.requestID,
                    section: e.section
                };
                d.o.track(p.SpadeEventType.RecRequestClient, t)
            }
            var b = n("x75U"),
                S = n("A65o");
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
                return T
            }), n.d(t, "h", function() {
                return y
            }), n.d(t, "i", function() {
                return k
            }), n.d(t, !1, function() {
                return b.a
            }), n.d(t, "j", function() {
                return b.b
            }), n.d(t, !1, function() {
                return S.a
            })
        }
    }
]);