(window.webpackJsonp = window.webpackJsonp || []).push([
    [114], {
        "0ly3": function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                i = n("q1tI"),
                r = n("HSqT"),
                o = n("Ue10"),
                s = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onChange = function(e) {
                            t.props.onChange(e.currentTarget.value)
                        }, t.renderLanguageOption = function(e) {
                            return i.createElement("option", {
                                key: e.code,
                                value: e.code
                            }, e.label)
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = i.createElement(o.sb, {
                            onChange: this.onChange,
                            disabled: this.props.disabled,
                            defaultValue: this.props.defaultLanguage
                        }, Object(r.b)().map(this.renderLanguageOption));
                        return this.props.label && (e = i.createElement(o.Ca, {
                            label: this.props.label
                        }, e)), e
                    }, t
                }(i.Component);
            n.d(t, "a", function() {
                return s
            })
        },
        "2Dck": function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return a
            }), n.d(t, "c", function() {
                return i
            }), n.d(t, "a", function() {
                return r
            });
            var a = "https://help.twitch.tv/customer/portal/articles/983016",
                i = 140,
                r = {
                    Accept: "application/vnd.twitchtv.v5+json; charset=UTF-8",
                    "Accept-Language": "en-us",
                    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
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
            var i = {};
            a.definitions = a.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !i[t] && (i[t] = !0, !0)
                })
            }(n("iiOx").definitions)), e.exports = a
        },
        "97MP": function(e, t, n) {},
        AZIu: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            }), n.d(t, "b", function() {
                return o
            });
            var a, i = n("/7QA"),
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
                i.n.track(r.SpadeEventType.BrowseFilter, t)
            }! function(e) {
                e.Categories = "browse_categories", e.LiveChannels = "browse_livechannels", e.IncategoryChannels = "browse_incategory_channels"
            }(a || (a = {}))
        },
        C29h: function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                i = n("q1tI"),
                r = n("9C/b"),
                o = n("fvjX"),
                s = n("/7QA"),
                l = n("N3I0"),
                c = n("8/mp"),
                d = n("f00E"),
                u = n("3W+h"),
                m = n("H/lO"),
                p = n("NZDK"),
                g = n("yR8l"),
                h = n("DMoW"),
                f = n("GIun"),
                v = n("Ue10"),
                y = function(e) {
                    var t, n = e.onClick,
                        a = e.tag;
                    n && (t = function() {
                        return n(a)
                    });
                    var r = "localizedDescription" in e.tag ? e.tag.localizedDescription : void 0;
                    return i.createElement(f.a, null, i.createElement(v.Sa, {
                        onClick: t
                    }, i.createElement(v.Va, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, i.createElement(v.V, {
                        title: r
                    }, a.localizedName))))
                };
            var b, S = n("Ryvb");
            ! function(e) {
                e.SuggestedTags = "suggested-tags"
            }(b || (b = {}));
            var k, T, C = function(e) {
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
                            return e = t.state.filteredTopTags.map(t.renderSuggestedTag), i.createElement(v.Va, {
                                padding: {
                                    bottom: 1
                                }
                            }, e)
                        }, t.renderSuggestedTag = function(e) {
                            return i.createElement(y, {
                                "data-test-selector": b.SuggestedTags,
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
                        return this.props.data.loading || this.props.data.error ? null : this.props.data.game && this.props.data.game.tags && 0 !== this.props.data.game.tags.length && this.state.filteredTopTags && 0 !== this.state.filteredTopTags.length ? i.createElement(v.Va, null, i.createElement(v.Va, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, i.createElement(v.V, {
                            bold: !0
                        }, Object(s.d)("Suggestions", "TagSuggestions"))), this.renderTags(), i.createElement(v.Va, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, i.createElement(v.V, {
                            bold: !0
                        }, Object(s.d)("All Tags", "AllTagsTitle")))) : null
                    }, t
                }(i.Component),
                E = Object(g.a)(S, {
                    options: function(e) {
                        return {
                            variables: {
                                gameName: e.gameName,
                                tagType: h.J.TOP,
                                limit: 50
                            }
                        }
                    }
                })(C),
                N = n("79jw"),
                _ = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderTags = function() {
                            return t.props.categoryName ? t.props.data.game && t.props.data.game.tags && 0 !== t.props.data.game.tags.length ? t.props.data.game.tags.slice().sort(function(e, t) {
                                return e.localizedName.localeCompare(t.localizedName)
                            }).map(t.renderTag) : null : t.props.data.topTags && 0 !== t.props.data.topTags.length ? t.props.data.topTags.slice().sort(function(e, t) {
                                return e.localizedName.localeCompare(t.localizedName)
                            }).map(t.renderTag) : null
                        }, t.renderTag = function(e) {
                            return i.createElement(f.a, {
                                key: e.id
                            }, i.createElement(v.Sa, {
                                onClick: function() {
                                    return t.props.onAddTag(e)
                                }
                            }, i.createElement(v.Va, {
                                padding: {
                                    y: .5,
                                    x: 1
                                }
                            }, e.localizedName || e.tagName)))
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return this.props.data.error ? null : this.props.data.loading ? i.createElement(v.Va, {
                            display: v.W.Flex,
                            justifyContent: v.Ua.Center,
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, i.createElement(v.Xa, null)) : i.createElement(v.Va, null, this.renderTags())
                    }, t
                }(i.Component),
                O = Object(o.compose)(Object(g.a)(N, {
                    options: function(e) {
                        return {
                            variables: {
                                categoryName: e.categoryName,
                                limit: e.tagsLimit || 5,
                                showTopTagsByCategory: !!e.categoryName
                            }
                        }
                    }
                }))(_),
                F = n("sLmD"),
                I = n("AZIu");
            n("97MP");
            ! function(e) {
                e[e.TagAll = 0] = "TagAll", e[e.TagAllMinusAutomation = 1] = "TagAllMinusAutomation", e[e.TagCategory = 2] = "TagCategory", e[e.StreamTag = 3] = "StreamTag"
            }(k || (k = {})),
            function(e) {
                e.SearchContent = "tag-search-search-content", e.SearchDropdown = "search-dropdown-selector"
            }(T || (T = {}));
            var R = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.state = {
                            isOpen: !1,
                            searching: !1,
                            searchTerm: ""
                        }, n.languageCode = Object(F.a)(), n.renderSearchContent = function() {
                            var e = null;
                            return e = n.props.type === k.StreamTag ? n.renderStreamTagResults() : n.renderTagResults(), i.createElement(c.b, {
                                className: "tag-search__scrollable-area",
                                suppressScrollX: !0
                            }, i.createElement(v.Va, {
                                "data-test-selector": T.SearchContent
                            }, n.renderSuggestedTags(), e))
                        }, n.renderTagSearchResult = function(e) {
                            var t = Object(F.b)(e),
                                a = "tag_scope" in e ? e.tag_scope : void 0;
                            return i.createElement(y, {
                                key: t.id,
                                onClick: function() {
                                    return n.onTagResultSelected(t, a)
                                },
                                tag: t
                            })
                        }, n.renderStreamTagResults = function() {
                            return n.props.type === k.StreamTag && n.state.isOpen ? "" === n.state.searchTerm ? i.createElement(O, {
                                categoryName: n.props.categoryName,
                                onAddTag: n.onTagResultSelected,
                                tagsLimit: 100
                            }) : !n.state.searchResults && n.state.searching ? n.renderLoading() : n.state.searchResults && n.state.searchResults.streamTags && n.state.searchResults.streamTags.hits.length ? n.state.searchResults.streamTags.hits.map(n.renderTagSearchResult) : n.renderNoResults() : null
                        }, n.renderTagResults = function() {
                            return n.state.isOpen ? n.props.type === k.TagAll && "" === n.state.searchTerm ? i.createElement(O, {
                                onAddTag: n.onTagResultSelected,
                                tagsLimit: 100
                            }) : !n.state.searchResults && n.state.searching ? n.renderLoading() : n.state.searchResults && n.state.searchResults.tags && n.state.searchResults.tags.hits.length ? n.state.searchResults.tags.hits.map(n.renderTagSearchResult) : n.renderNoResults() : null
                        }, n.setTagSearchRef = function(e) {
                            n.tagSearch = e
                        }, n.onTagResultSelected = function(e, t) {
                            if (n.toggleTagSearch(!1), n.clearSearchTerm(), n.props.type === k.TagCategory && "SCOPE_ALL" === t ? s.o.history.push(u.a.Popular, {
                                    persistTags: !0
                                }) : n.props.type === k.TagAll && "SCOPE_CATEGORY" === t && s.o.history.push(u.a.Games, {
                                    persistTags: !0
                                }), n.props.onTagClick && (n.props.onTagClick(e), n.props.section && n.props.numSelectedTags)) {
                                var a = {
                                    section: n.props.section,
                                    tagPosition: n.props.numSelectedTags,
                                    searchEvent: !0,
                                    tagId: e.id,
                                    dismiss: !1
                                };
                                Object(I.b)(a)
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
                            apolloClient: s.o.apollo.client,
                            logger: s.j,
                            config: s.a,
                            stats: s.o.stats
                        }), n
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(l.a, {
                            autoFocus: this.props.autoFocus,
                            "data-test-selector": T.SearchDropdown,
                            inline: this.props.inline,
                            inputSize: this.props.inputSize,
                            onChange: this.onInputChange,
                            onFocusInput: this.onFocusInput,
                            onClose: this.onSearchClose,
                            placeholder: Object(s.d)("Search Tags", "TagSearch"),
                            ref: this.setTagSearchRef
                        }, this.renderSearchContent())
                    }, t.prototype.renderLoading = function() {
                        return i.createElement(v.Va, {
                            display: v.W.Flex,
                            justifyContent: v.Ua.Center,
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, i.createElement(v.Xa, {
                            delay: 0
                        }))
                    }, t.prototype.renderNoResults = function() {
                        return this.state.searching ? null : i.createElement(v.Va, {
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
                        return i.createElement(v.Va, null, i.createElement(E, {
                            gameName: this.props.categoryName,
                            onAddTag: this.onTagResultSelected,
                            selectedTagIDs: e
                        }))
                    }, t.prototype.search = function(e) {
                        return a.__awaiter(this, void 0, void 0, function() {
                            var t, n, i;
                            return a.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return e = e || "", t = {
                                            hitsPerPage: 100,
                                            restrictSearchableAttributes: ["localizations." + this.languageCode, "tag_name"]
                                        }, n = m.a.Tags, this.props.type === k.TagAllMinusAutomation ? (t.facetFilters = '["automated:false", "tag_scope:SCOPE_ALL"]', this.props.showAllDashboardTags && (t.hitsPerPage = 300)) : this.props.type === k.TagAll ? this.props.selectedTags && this.props.selectedTags.length ? t.facetFilters = "tag_scope:SCOPE_ALL" : t.facetFilters = '[["tag_scope:SCOPE_ALL", "tag_scope:SCOPE_CATEGORY"]]' : this.props.type === k.TagCategory ? "" === e || this.props.selectedTags && this.props.selectedTags.length ? t.facetFilters = "tag_scope:SCOPE_CATEGORY" : t.facetFilters = '[["tag_scope:SCOPE_ALL", "tag_scope:SCOPE_CATEGORY"]]' : this.props.type === k.StreamTag && (n = m.a.StreamTags, t.facetFilters = "category_id:" + this.props.categoryID), [4, this.searchClient.queryForType(n, e, d.a(), t)];
                                    case 1:
                                        return i = a.sent(), this.setState({
                                            searchResults: i,
                                            searching: !1
                                        }), [2]
                                }
                            })
                        })
                    }, t
                }(i.Component),
                w = Object(o.compose)(r.a)(R);
            n.d(t, "b", function() {
                return k
            }), n.d(t, !1, function() {
                return T
            }), n.d(t, !1, function() {
                return R
            }), n.d(t, "a", function() {
                return w
            })
        },
        FsIG: function(e, t, n) {
            "use strict";

            function a(e) {
                return e || ""
            }

            function i(e) {
                return e ? e.toString() : ""
            }
            n.d(t, "b", function() {
                return a
            }), n.d(t, "a", function() {
                return i
            })
        },
        GIun: function(e, t, n) {
            "use strict";
            var a = n("q1tI"),
                i = function(e) {
                    var t = a.Children.only(e.children);
                    return a.cloneElement(t, {
                        "data-selectable": !0,
                        tabIndex: -1
                    })
                };
            n.d(t, "a", function() {
                return i
            })
        },
        HSqT: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            }), n.d(t, "b", function() {
                return s
            });
            var a = n("/7QA"),
                i = [{
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
                    label: e ? Object(a.d)("Other", "broadcaster-languages") : "Other"
                }]
            }
            var o = new Set(i.concat(r()).map(function(e) {
                return e.code
            }));

            function s() {
                var e = a.o.intl.getLanguageCode(),
                    t = function(t) {
                        return "en" === t.code ? 0 : e && e.startsWith(t.code) ? 1 : 2
                    };
                return i.slice().sort(function(e, n) {
                    var a = t(e),
                        i = t(n);
                    return a !== i ? a - i : a + ":" + e.label < i + ":" + n.label ? -1 : 1
                }).concat(r(!0))
            }
        },
        HUHH: function(e, t, n) {
            var a = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "EditBroadcastModal_UpdateChannelTagsInput"
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
                                    value: "UpdateContentTagsInput"
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
                                value: "updateContentTags"
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
                }],
                loc: {
                    start: 0,
                    end: 257
                }
            };
            a.loc.source = {
                body: '#import "twilight/features/tags/models/broadcast-tag-fragment.gql"\nmutation EditBroadcastModal_UpdateChannelTagsInput($input: UpdateContentTagsInput!) {\nupdateContentTags(input: $input) {\ncontent {\n... on Stream {\nid\ntags {\n...broadcastTagFragment\n}\n}\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var i = {};
            a.definitions = a.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !i[t] && (i[t] = !0, !0)
                })
            }(n("Iqxx").definitions)), e.exports = a
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
        N3I0: function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                i = n("q1tI"),
                r = n("u5aL"),
                o = n("/7QA"),
                s = n("Ue10"),
                l = function() {
                    return i.createElement(s.Va, {
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
                    }, i.createElement(s.xb, {
                        color: s.O.Alt2,
                        textAlign: s.Jb.Center,
                        flexShrink: 1
                    }, i.createElement(s.mb, {
                        asset: s.nb.DeadGlitch,
                        width: 46,
                        height: 48
                    })), i.createElement(s.Na, {
                        margin: {
                            top: 1
                        },
                        textAlign: s.Jb.Center
                    }, i.createElement(s.V, {
                        type: s.Nb.H4,
                        "data-test-selector": "search-error-message"
                    }, Object(o.d)("Search is not available at this time", "DropdownSearchError"))), i.createElement(s.V, {
                        type: s.Nb.P
                    }, Object(o.d)("Please try again later", "DropdownSearchError")))
                },
                c = n("8Ad5"),
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
                            e.keyCode === c.a.Esc ? t.setState({
                                isOpen: !1
                            }) : e.keyCode === c.a.Up ? (n(), t.focusNext(-1)) : e.keyCode === c.a.Down && (n(), t.focusNext(1))
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
                            t = this.props.isErrored ? i.createElement(l, null) : i.Children.only(this.props.children),
                            n = i.createElement(s.pb, {
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
                        return this.props.inline ? i.createElement(r.a, {
                            onClickOut: this.onClickOut
                        }, i.createElement(s.xb, {
                            background: this.state.isInputFocused || this.state.isOpen ? s.r.Base : void 0,
                            borderRadius: s.x.Large,
                            padding: .5,
                            position: s.db.Relative,
                            elevation: this.state.isInputFocused || this.state.isOpen ? 3 : void 0
                        }, n, e && i.createElement(s.xb, {
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
                        }, i.createElement("div", {
                            tabIndex: 0,
                            onKeyDown: this.onKeyDown,
                            onMouseOver: this.props.enableMouseEvents ? this.onMouseOver : void 0
                        }, t)))) : i.createElement(r.a, {
                            onClickOut: this.onClickOut
                        }, n, e && i.createElement(s.u, a.__assign({
                            noTail: !0
                        }, this.props.balloonProps, {
                            show: this.state.isOpen
                        }), i.createElement("div", {
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
                            i = Array.prototype.indexOf.call(n, a);
                        if ((t = i < 0 ? e > 0 ? 0 : n.length - 1 : i + e) < 0 && (t = 0), !(t >= n.length)) {
                            var r = n.item(t);
                            r.focus(), r.tabIndex = 0, this.state.currentFocus && (this.state.currentFocus.tabIndex = -1), this.setState({
                                currentFocus: r
                            }), this.props.onFocusChange && this.props.onFocusChange(r)
                        }
                    }, t
                }(i.Component);
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
            var i = {};
            a.definitions = a.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !i[t] && (i[t] = !0, !0)
                })
            }(n("Iqxx").definitions)), e.exports = a
        },
        X6el: function(e, t, n) {
            var a = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "EditBroadcastModal"
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
                                        value: "lastBroadcast"
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
                                                            value: "55"
                                                        }
                                                    }],
                                                    directives: []
                                                }]
                                            }
                                        }]
                                    }
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
                                                            value: "55"
                                                        }
                                                    }],
                                                    directives: []
                                                }]
                                            }
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
                                                value: "language"
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
                                                        value: "broadcastersCount"
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
                                                            value: "55"
                                                        }
                                                    }],
                                                    directives: []
                                                }]
                                            }
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "chatSettings"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "isBroadcasterLanguageModeEnabled"
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
                    end: 566
                }
            };
            a.loc.source = {
                body: '#import "twilight/features/tags/models/broadcast-tag-fragment.gql"\nquery EditBroadcastModal($login: String!) {\nuser(login: $login) {\nid\nlastBroadcast {\nid\ntitle\ngame {\nid\nname\nboxArtURL(width: 40 height: 55)\n}\n}\nstream {\nid\ngame {\nid\nname\nboxArtURL(width: 40 height: 55)\n}\ntags {\n...broadcastTagFragment\n}\ntitle\n}\nbroadcastSettings {\nid\nlanguage\ngame {\nid\nname\n}\ntitle\n}\ndirectories {\nnodes {\nid\ndisplayName\ndirectoryType\nname\nbroadcastersCount\nviewersCount\navatarURL(width: 40 height: 55)\n}\n}\nchatSettings {\nisBroadcasterLanguageModeEnabled\n}\n}\ncurrentUser {\nid\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var i = {};
            a.definitions = a.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !i[t] && (i[t] = !0, !0)
                })
            }(n("Iqxx").definitions)), e.exports = a
        },
        aP55: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "EditBroadcastModal_UpdateChatSettingsInput"
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
                                    value: "UpdateChatSettingsInput"
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
                                value: "updateChatSettings"
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
                                        value: "chatSettings"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "isBroadcasterLanguageModeEnabled"
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
                    end: 177
                }
            };
            n.loc.source = {
                body: "mutation EditBroadcastModal_UpdateChatSettingsInput($input: UpdateChatSettingsInput!) {\nupdateChatSettings(input: $input) {\nchatSettings {\nisBroadcasterLanguageModeEnabled\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        bDGO: function(e, t, n) {
            "use strict";
            n.r(t);
            var a, i = n("mrSG"),
                r = n("q1tI"),
                o = n("/MKj"),
                s = n("fvjX"),
                l = n("/7QA"),
                c = n("cZKs"),
                d = n("aCAx"),
                u = n("kOut"),
                m = n("Ue10");
            n("w4St");
            ! function(e) {
                e.TITLE = "edit-broadcast.title"
            }(a || (a = {}));
            var p = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleOnSubmit = function(e) {
                        e && t.props.closeModal()
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(m.xb, {
                        className: "edit-broadcast__container",
                        background: m.r.Base,
                        padding: {
                            x: 2,
                            y: 3
                        }
                    }, r.createElement(m.Va, {
                        "data-test-selector": a.TITLE,
                        margin: {
                            bottom: 1
                        }
                    }, r.createElement(m.V, {
                        type: m.Nb.H4
                    }, Object(l.d)("Broadcast Options", "EditBroadcastModal"))), r.createElement(m.xb, {
                        borderTop: !0,
                        margin: {
                            top: 2
                        },
                        padding: {
                            top: 2
                        }
                    }, r.createElement(u.a, {
                        cancelComponent: r.createElement(m.Va, {
                            margin: {
                                left: 1
                            }
                        }, r.createElement(m.z, {
                            onClick: this.props.closeModal,
                            type: m.F.Text
                        }, Object(l.d)("Cancel", "EditBroadcastModal"))),
                        onSubmit: this.handleOnSubmit,
                        channelLogin: this.props.channelLogin
                    })), r.createElement(c.a, null))
                }, t
            }(r.Component);
            var g = Object(o.connect)(null, function(e) {
                return Object(s.bindActionCreators)({
                    closeModal: d.c
                }, e)
            })(p);
            n.d(t, "TestSelectors", function() {
                return a
            }), n.d(t, "EditBroadcastModalComponent", function() {
                return p
            }), n.d(t, "EditBroadcastModal", function() {
                return g
            })
        },
        "d8/y": function(e, t, n) {},
        iUE2: function(e, t, n) {},
        kOut: function(e, t, n) {
            "use strict";
            var a, i, r, o, s = n("mrSG"),
                l = n("cr+I"),
                c = n("q1tI"),
                d = n("oJmH"),
                u = n("/7QA"),
                m = n("0ly3"),
                p = n("yR8l"),
                g = n("geRD"),
                h = n("DMoW"),
                f = n("b6Yk"),
                v = n("f00E"),
                y = n("N3I0"),
                b = n("8/mp"),
                S = n("6x+I"),
                k = n("Ue10"),
                T = (n("d8/y"), function(e) {
                    return e.community ? c.createElement(b.b, {
                        suppressScrollX: !0
                    }, c.createElement(k.Va, {
                        margin: 1
                    }, c.createElement(k.xb, {
                        borderBottom: !0,
                        padding: {
                            bottom: 2
                        },
                        margin: {
                            bottom: .5
                        }
                    }, c.createElement(k.V, null, Object(u.d)("{streamerCount} Streamers", {
                        streamerCount: e.community.channels || 0
                    }, "CommunityInfoPanel"))), c.createElement(k.V, {
                        type: k.Nb.Strong,
                        color: k.O.Alt2
                    }, Object(u.d)("Community Description", "CommunityInfoPanel")), c.createElement(k.V, null, e.community.summary), c.createElement(k.xb, {
                        borderTop: !0,
                        padding: {
                            top: .5
                        },
                        margin: {
                            top: 2
                        }
                    }, c.createElement(k.V, {
                        type: k.Nb.Strong,
                        color: k.O.Alt2
                    }, Object(u.d)("Community Rules", "CommunityInfoPanel"))), c.createElement(S, {
                        source: e.community.rules
                    }))) : c.createElement(k.Na, {
                        padding: {
                            y: 5
                        },
                        className: "community-info-panel__placeholder"
                    }, c.createElement(k.V, {
                        fontSize: k.Aa.Size4,
                        italic: !0,
                        color: k.O.Alt2
                    }, Object(u.d)("Hover over a community", "CommunityInfoPanel")))
                }),
                C = n("GIun"),
                E = n("N0BP"),
                N = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onClick = function() {
                            t.props.onCommunityResultSelected(t.props.community)
                        }, t
                    }
                    return s.__extends(t, e), t.prototype.showComponentUpdate = function() {
                        return !1
                    }, t.prototype.render = function() {
                        return c.createElement(C.a, null, c.createElement(k.Sa, s.__assign({
                            key: "community_" + this.props.community.objectID,
                            tabIndex: -1,
                            onClick: this.onClick
                        }, Object(E.a)(this.props)), c.createElement(k.Va, {
                            fullWidth: !0,
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, c.createElement(k.G, {
                            row: !0
                        }, c.createElement(k.I, {
                            src: this.props.community.avatar_image_url ? this.props.community.avatar_image_url : "",
                            alt: this.props.community.name,
                            size: k.J.Size2,
                            aspect: k.p.BoxArt
                        }), c.createElement(k.Va, {
                            fullWidth: !0,
                            display: k.W.Flex,
                            overflow: k.Ya.Hidden,
                            position: k.db.Relative
                        }, c.createElement(k.Na, {
                            margin: {
                                left: .5
                            },
                            flexGrow: 1
                        }, c.createElement(k.V, {
                            type: k.Nb.Span,
                            fontSize: k.Aa.Size7,
                            ellipsis: !0
                        }, this.props.community.name)), c.createElement(k.Va, {
                            display: k.W.Flex,
                            alignItems: k.f.Center,
                            attachRight: !0
                        }, c.createElement(k.mb, {
                            asset: k.nb.NavProfile,
                            type: k.ob.Alt2,
                            width: 12,
                            height: 12
                        }), c.createElement(k.V, {
                            type: k.Nb.Span,
                            className: "search-panel__link",
                            ellipsis: !0
                        }, Object(u.e)(this.props.community.viewers || 0))))))))
                    }, t
                }(c.Component),
                _ = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            focusedCommunityIdx: null
                        }, t.communitySearch = null, t.onFocusChange = function(e) {
                            var n = e.dataset.idx;
                            t.setState({
                                focusedCommunityIdx: n ? parseInt(n, 10) : null
                            })
                        }, t.setCommunitySearchRef = function(e) {
                            t.communitySearch = e
                        }, t.onCommunityResultSelected = function(e) {
                            t.communitySearch && t.communitySearch.setValue(""), t.props.onCommunityResultSelected(e)
                        }, t
                    }
                    return s.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                        this.communitySearch && e.isCommunitySearchOpen !== this.props.isCommunitySearchOpen && this.communitySearch.toggle(e.isCommunitySearchOpen)
                    }, t.prototype.render = function() {
                        var e = this,
                            t = this.props.communityResults ? this.props.communityResults.hits : [];
                        return c.createElement("div", null, c.createElement(k.Ca, {
                            error: this.props.error,
                            errorMessage: this.props.errorMessage,
                            label: Object(u.d)("Communities", "CommunitySearch")
                        }, c.createElement(y.a, {
                            enableMouseEvents: !0,
                            onChange: this.props.onCommunityInputChange,
                            onFocusChange: this.onFocusChange,
                            ref: this.setCommunitySearchRef,
                            placeholder: Object(u.d)("Add up to 3 communities", "CommunitySearch"),
                            balloonProps: {
                                size: k.w.Medium,
                                direction: k.v.Bottom
                            },
                            showDropdown: t.length > 0
                        }, c.createElement(k.Va, {
                            display: k.W.Flex
                        }, c.createElement(b.b, {
                            height: 300,
                            suppressScrollX: !0,
                            className: "edit-broadcast__community-search__section"
                        }, c.createElement(k.Va, null, t.map(function(t, n) {
                            return c.createElement(N, {
                                key: t.objectID,
                                "data-idx": n,
                                community: t,
                                onCommunityResultSelected: e.onCommunityResultSelected
                            })
                        }))), c.createElement(k.Va, {
                            className: "edit-broadcast__community-search__section"
                        }, c.createElement(T, {
                            community: this.props.communityResults && null !== this.state.focusedCommunityIdx ? t[this.state.focusedCommunityIdx] : null
                        }))))), c.createElement(k.Va, {
                            margin: {
                                top: .5
                            }
                        }, this.props.selectedCommunities && this.props.selectedCommunities.map(function(t, n) {
                            return c.createElement(k.Va, {
                                display: k.W.Inline,
                                margin: {
                                    right: .5
                                },
                                key: t.objectID + "_" + n
                            }, c.createElement(k.Gb, {
                                type: k.Ib.Accent,
                                action: k.Hb.Remove,
                                label: t.name,
                                key: t.objectID,
                                onClick: e.props.onRemoveCommunity,
                                "data-idx": n
                            }))
                        })))
                    }, t
                }(c.Component),
                O = n("H/lO"),
                F = n("NZDK"),
                I = 50,
                R = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.state = {
                            communityResults: null,
                            communityTerm: "",
                            isCommunitySearchOpen: !1,
                            hoveredCommunity: null,
                            queryID: "",
                            isWaiting: !1
                        }, n.onCommunityInputChange = function(e) {
                            return s.__awaiter(n, void 0, void 0, function() {
                                var t = this;
                                return s.__generator(this, function(n) {
                                    return this.props.onChange && this.props.onChange(""), this.inputTimer && (clearTimeout(this.inputTimer), this.inputTimer = 0), e ? (this.setState({
                                        communityResults: null,
                                        isWaiting: !0
                                    }), this.inputTimer = setTimeout(function() {
                                        return t.doCommunitySearch(e)
                                    }, I), [2]) : (this.setState({
                                        isCommunitySearchOpen: !1,
                                        communityTerm: ""
                                    }), [2])
                                })
                            })
                        }, n.onCommunityResultSelected = function(e) {
                            n.props.selectedCommunities && 3 === n.props.selectedCommunities.length ? n.props.onError(Object(u.d)("You can only participate in up to 3 Communities at the same time.", "EditBroadcastModal")) : (n.setState({
                                isCommunitySearchOpen: !1
                            }), n.props.onCommunityResultSelected(e))
                        }, n.searchClient = new F.a({
                            appId: u.a.algoliaApplicationID,
                            apiKey: u.a.algoliaAPIKey,
                            apolloClient: u.o.apollo.client,
                            logger: u.j,
                            config: u.a,
                            stats: u.o.stats
                        }), n
                    }
                    return s.__extends(t, e), t.prototype.render = function() {
                        return c.createElement(_, s.__assign({}, this.props, {
                            onCommunityInputChange: this.onCommunityInputChange,
                            isCommunitySearchOpen: this.state.isCommunitySearchOpen,
                            communityResults: this.state.communityResults,
                            selectedCommunities: this.props.selectedCommunities,
                            onCommunityResultSelected: this.onCommunityResultSelected,
                            onRemoveCommunity: this.props.onRemoveCommunity
                        }))
                    }, t.prototype.doCommunitySearch = function(e) {
                        return s.__awaiter(this, void 0, void 0, function() {
                            var t, n, a;
                            return s.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        this.inputTimer = 0, t = Object(v.a)(), this.setState({
                                            queryID: t
                                        }), n = null, i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, , 4]), [4, this.searchClient.queryForType(O.a.Communities, e, t)];
                                    case 2:
                                        return n = i.sent(), [3, 4];
                                    case 3:
                                        return a = i.sent(), u.j.error(a, "Algolia top results search failed"), [2, null];
                                    case 4:
                                        return n && n.communities && n.id === t ? (this.setState({
                                            communityResults: n.communities,
                                            isCommunitySearchOpen: !0
                                        }), [2]) : [2, null]
                                }
                            })
                        })
                    }, t
                }(c.Component),
                w = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onClick = function() {
                            t.props.onClick(t.props.game)
                        }, t
                    }
                    return s.__extends(t, e), t.prototype.render = function() {
                        return c.createElement(k.Sa, s.__assign({
                            onClick: this.onClick,
                            tabIndex: -1
                        }, Object(E.a)(this.props)), c.createElement(k.Va, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, c.createElement(k.G, {
                            row: !0
                        }, c.createElement(k.I, {
                            alt: this.props.game.name,
                            src: "https://static-cdn.jtvnw.net/ttv-boxart/" + this.props.game.name + "-40x55.jpg",
                            size: k.J.Size3,
                            aspect: k.p.BoxArt
                        }), c.createElement(k.H, {
                            overflow: k.Ya.Hidden
                        }, c.createElement(k.Na, {
                            padding: {
                                x: 1
                            }
                        }, c.createElement(k.V, {
                            type: k.Nb.P
                        }, this.props.game.name))))))
                    }, t
                }(c.Component),
                A = n("fVj5"),
                x = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.gameSearch = null, t.setGameSearchRef = function(e) {
                            t.gameSearch = e
                        }, t
                    }
                    return s.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                        this.gameSearch && e.isGameSearchOpen !== this.props.isGameSearchOpen && this.gameSearch.toggle(e.isGameSearchOpen), this.gameSearch && e.selectedGame !== this.props.selectedGame && this.gameSearch.setValue(e.selectedGame)
                    }, t.prototype.componentDidMount = function() {
                        this.gameSearch && this.gameSearch.setValue(this.props.selectedGame)
                    }, t.prototype.render = function() {
                        var e = this,
                            t = Object(u.d)("Game/Category", "GameSearch"),
                            n = Object(u.d)("Search for a game or category", "GameSearch");
                        return Object(A.b)() && (t = Object(u.d)("Category", "GameSearch"), n = Object(u.d)("Search for a category", "GameSearch")), c.createElement(k.Ca, {
                            error: this.props.error,
                            errorMessage: this.props.errorMessage,
                            label: t
                        }, c.createElement(y.a, {
                            onChange: this.props.onGameInputChange,
                            ref: this.setGameSearchRef,
                            placeholder: n,
                            balloonProps: {
                                show: this.props.isGameSearchOpen,
                                direction: k.v.Bottom
                            }
                        }, c.createElement(b.b, {
                            className: "edit-broadcast__game-search",
                            suppressScrollX: !0
                        }, c.createElement("div", null, this.props.gameResults && this.props.gameResults.hits.map(function(t) {
                            return c.createElement(C.a, {
                                key: t.objectID
                            }, c.createElement(w, {
                                game: t,
                                onClick: e.props.onGameResultSelected,
                                key: t.objectID
                            }))
                        })))))
                    }, t
                }(c.Component),
                D = 100,
                L = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.state = {
                            gameResults: null,
                            gameTerm: "",
                            isGameSearchOpen: !1,
                            queryID: "",
                            isWaiting: !1
                        }, n.onGameInputChange = function(e) {
                            return s.__awaiter(n, void 0, void 0, function() {
                                var t = this;
                                return s.__generator(this, function(n) {
                                    return this.inputTimer && (clearTimeout(this.inputTimer), this.inputTimer = 0), e ? (this.setState({
                                        gameResults: null,
                                        isWaiting: !0
                                    }), this.inputTimer = setTimeout(function() {
                                        return t.doGameSearch(e)
                                    }, D), [2]) : (this.setState({
                                        isGameSearchOpen: !1,
                                        gameTerm: ""
                                    }), this.props.onGameCleared(), [2])
                                })
                            })
                        }, n.onGameResultSelected = function(e) {
                            n.setState({
                                isGameSearchOpen: !1
                            }), n.props.onGameResultSelected(e)
                        }, n.searchClient = new F.a({
                            appId: u.a.algoliaApplicationID,
                            apiKey: u.a.algoliaAPIKey,
                            apolloClient: u.o.apollo.client,
                            logger: u.j,
                            config: u.a,
                            stats: u.o.stats
                        }), n
                    }
                    return s.__extends(t, e), t.prototype.render = function() {
                        return c.createElement(x, s.__assign({}, this.props, {
                            onGameInputChange: this.onGameInputChange,
                            isGameSearchOpen: this.state.isGameSearchOpen,
                            gameResults: this.state.gameResults,
                            selectedGame: this.props.selectedGame,
                            onGameResultSelected: this.onGameResultSelected
                        }))
                    }, t.prototype.doGameSearch = function(e) {
                        return s.__awaiter(this, void 0, void 0, function() {
                            var t, n, a;
                            return s.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return this.inputTimer = 0, t = Object(v.a)(), [4, this.setState({
                                            queryID: t
                                        })];
                                    case 1:
                                        i.sent(), n = null, i.label = 2;
                                    case 2:
                                        return i.trys.push([2, 4, , 5]), [4, this.searchClient.queryForType(O.a.Games, e, t)];
                                    case 3:
                                        return n = i.sent(), [3, 5];
                                    case 4:
                                        return a = i.sent(), u.j.error(a, "Algolia top results search failed"), [2, null];
                                    case 5:
                                        return n && n.games && 0 !== n.games.totalHits ? (this.setState({
                                            gameResults: n.games,
                                            isGameSearchOpen: !0
                                        }), [2]) : (this.setState({
                                            isGameSearchOpen: !1
                                        }), [2, null])
                                }
                            })
                        })
                    }, t
                }(c.Component),
                V = n("2Dck");
            ! function(e) {
                e.Title = "title", e.GoLiveNotification = "goLiveNotification", e.GameCategory = "gameCategory", e.Communities = "communities", e.Language = "language", e.Tags = "tags"
            }(a || (a = {})),
            function(e) {
                e.Empty = "empty", e.FailedAutomod = "failed_automod", e.FailedAutomodTitle = "failed_automod_title", e.NoError = "", e.TitleTooLong = "title-too-long"
            }(i || (i = {})),
            function(e) {
                e.BroadcastLanguageMode = "edit-broadcast__broadcast-language-mode-checkbox", e.GoLiveNotification = "edit-broadcast__go-live-notification", e.PrimaryContent = "edit-broadcast__primary-content", e.TitleLabel = "edit-broadcast__title-label", e.TitleInput = "edit-broadcast__title-input"
            }(r || (r = {})),
            function(e) {
                e.Complete = "complete", e.Errored = "errored", e.Fetching = "fetching", e.Ready = "ready"
            }(o || (o = {}));
            var G = n("GnwI"),
                j = n("lr7A"),
                B = n("HUHH"),
                M = n("aP55"),
                P = n("X6el");
            n("iUE2");

            function q(e) {
                switch (e) {
                    default: return e;
                    case i.Empty:
                            return Object(u.d)("Field is required.", "EditBroadcastComponent");
                    case i.FailedAutomodTitle:
                            return Object(u.d)("This title may conflict with Twitch's moderation policy.", "EditBroadcastComponent");
                    case i.FailedAutomod:
                            return Object(u.d)("This text may conflict with Twitch's moderation policy.", "EditBroadcastComponent");
                    case i.NoError:
                            return "";
                    case i.TitleTooLong:
                            return Object(u.d)("Title too long.", "EditBroadcastComponent")
                }
            }
            var z = 2500,
                U = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            broadcasterLanguageModeEnabled: !1,
                            buttonDisabled: !1,
                            fields: {
                                title: {},
                                goLiveNotification: {
                                    isEnabled: !1
                                },
                                gameCategory: {},
                                communities: {},
                                language: {
                                    value: "en"
                                },
                                tags: {}
                            },
                            gameResults: null,
                            loaded: !1,
                            queryID: null,
                            requestState: o.Ready,
                            selectedCommunities: [],
                            selectedGame: "",
                            selectedTags: [],
                            modifiedTags: {}
                        }, t.checkTagExperiment = Object(A.b)(), t.setInitialState = function(e) {
                            var n = e.data,
                                a = n.currentUser,
                                i = n.user;
                            return s.__awaiter(t, void 0, void 0, function() {
                                var e, t;
                                return s.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return a && a.id && i && i.id ? (e = i.id === a.id) ? [4, this.fetchGoLiveNotification(i.id)] : [3, 2] : [2];
                                        case 1:
                                            t = n.sent(), n.label = 2;
                                        case 2:
                                            return this.setState(function(n) {
                                                var a = s.__assign({}, n, {
                                                        loaded: !0
                                                    }),
                                                    r = i.broadcastSettings,
                                                    o = i.directories,
                                                    l = i.lastBroadcast,
                                                    c = i.stream,
                                                    d = o && o.nodes || [],
                                                    u = c && c.tags || [];
                                                return r && (a.fields.language.value = r.language), a.fields.title.value = c && c.title || l && l.title || "", a.selectedGame = c && c.id && c.game && c.game.name || l && l.game && l.game.name || "", a.fields.goLiveNotification = {
                                                    isEnabled: e,
                                                    value: t
                                                }, a.selectedCommunities = d.reduce(function(e, t) {
                                                    return t && t.directoryType === h.q.COMMUNITY && e.push({
                                                        avatar_image_url: t.avatarURL || "",
                                                        channels: t.broadcastersCount || 0,
                                                        name: t.name,
                                                        objectID: t.id,
                                                        rules: "",
                                                        summary: "",
                                                        viewers: t.viewersCount || 0
                                                    }), e
                                                }, []), a.selectedTags = u.map(function(e) {
                                                    return {
                                                        id: e.id,
                                                        tagName: e.tagName,
                                                        localizedName: e.localizedName,
                                                        isAutomated: e.isAutomated,
                                                        localizedDescription: e.localizedDescription
                                                    }
                                                }), a
                                            }, this.onLoad), [2]
                                    }
                                })
                            })
                        }, t.onLoad = function() {
                            t.props.latencyTracking.reportInteractive();
                            var e = t.props.onLoad;
                            e && e()
                        }, t.handleErrorByType = function(e) {
                            return function(n) {
                                t.setState(function(a) {
                                    var i = s.__assign({}, a);
                                    return i.fields[e].errorType = n, i.buttonDisabled = !t.areAllFieldsValid(i.fields), i
                                })
                            }
                        }, t.handleChangeByType = function(e) {
                            return function(n) {
                                var a = n.currentTarget.value;
                                t.setField(e, a)
                            }
                        }, t.setField = function(e, n) {
                            t.setState(function(r) {
                                var o = s.__assign({}, r);
                                return o.fields[e].value = t.normalizeString(n).slice(0, V.c).join(""), o.fields[e].errorType = function(e, t) {
                                    switch (t) {
                                        case a.Title:
                                            if (e.match(/^$/) && t === a.Title) return i.Empty;
                                        default:
                                        case a.Communities:
                                        case a.GameCategory:
                                        case a.GoLiveNotification:
                                        case a.Language:
                                            return i.NoError
                                    }
                                }(n, e), o.buttonDisabled = !t.areAllFieldsValid(o.fields), o
                            })
                        }, t.getRemainingCharacters = function(e) {
                            return (V.c - (e && t.normalizeString(e).length || 0)).toString()
                        }, t.areAllFieldsValid = function(e) {
                            return Object.keys(e).reduce(function(t, n) {
                                return t && "communities" !== n && "tags" !== n ? !e[n].errorType : t
                            }, !0)
                        }, t.handleLanguageChange = function(e) {
                            t.setState(function(t) {
                                var n = s.__assign({}, t);
                                return n.fields.language.value = e, n
                            })
                        }, t.handleBroadcastLanguageModeEnabledChange = function(e) {
                            t.setState({
                                broadcasterLanguageModeEnabled: e.currentTarget.checked
                            })
                        }, t.handleGameCleared = function() {
                            return t.setState({
                                selectedGame: ""
                            })
                        }, t.handleCommunityResultSelected = function(e) {
                            var n = t.state.selectedCommunities || [];
                            t.setState({
                                selectedCommunities: n ? n.concat([e]) : [e]
                            })
                        }, t.handleGameResultSelected = function(e) {
                            t.setState({
                                selectedGame: e.name
                            })
                        }, t.handleRemoveCommunity = function(e) {
                            t.handleErrorByType(a.Communities)("");
                            var n = e.currentTarget.dataset.idx;
                            n && t.setState(function(e) {
                                var t = e.selectedCommunities || [];
                                return t.splice(parseInt(n, 10), 1), {
                                    selectedCommunities: t
                                }
                            })
                        }, t.handleTagResultSelected = function(e) {
                            t.setState(function(t) {
                                var n;
                                return {
                                    selectedTags: (t.selectedTags || []).concat([e]),
                                    modifiedTags: s.__assign({}, t.modifiedTags, (n = {}, n[e.id] = !0, n))
                                }
                            })
                        }, t.handleRemoveTag = function(e) {
                            t.handleErrorByType(a.Tags)("");
                            var n = e.currentTarget.dataset.idx;
                            n && t.setState(function(e) {
                                var t, a = e.selectedTags.slice();
                                return a.splice(parseInt(n, 10), 1), {
                                    selectedTags: a,
                                    modifiedTags: s.__assign({}, e.modifiedTags, (t = {}, t[e.selectedTags[parseInt(n, 10)].id] = !1, t))
                                }
                            })
                        }, t.handleSubmit = function() {
                            return s.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, a, i, r = this;
                                return s.__generator(this, function(l) {
                                    switch (l.label) {
                                        case 0:
                                            return (e = this.props.data.user && this.props.data.user.id) ? (this.setState({
                                                buttonDisabled: !0,
                                                requestState: o.Fetching
                                            }), [4, Promise.all([this.updateChannel(e), this.updateGoLiveNotification(e), this.updateChannelCommunities(e), this.updateChannelBroadcasterLanguageEnabled(e), this.updateChannelTags(e)])]) : [3, 3];
                                        case 1:
                                            return t = l.sent(), [4, this.props.data.refetch()];
                                        case 2:
                                            l.sent(), n = s.__assign({}, this.state.fields), a = t.reduce(function(e, t) {
                                                var a = t && t.errorType;
                                                return t && (n[t.fieldType].errorType = a), e || !!a
                                            }, !1), this.setState({
                                                buttonDisabled: a,
                                                fields: n,
                                                requestState: a ? o.Errored : o.Complete
                                            }), (i = this.props.onSubmit) && i(!a), setTimeout(function() {
                                                r.setState({
                                                    requestState: o.Ready,
                                                    buttonDisabled: !1
                                                })
                                            }, z), l.label = 3;
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        }, t.fetchGoLiveNotification = function(e) {
                            return s.__awaiter(t, void 0, void 0, function() {
                                var t, n;
                                return s.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            return t = "/kraken/users/" + e + "/notifications/custom?notification_type=streamup", [4, f.a.get(t)];
                                        case 1:
                                            return (n = a.sent()).body && !n.error ? [2, n.body.is_default ? "" : n.body.message] : [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return s.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                        var t = this.props.data.user,
                            n = e.data.user;
                        n && n.chatSettings && n.chatSettings.isBroadcasterLanguageModeEnabled !== this.state.broadcasterLanguageModeEnabled && this.setState({
                            broadcasterLanguageModeEnabled: n.chatSettings.isBroadcasterLanguageModeEnabled
                        }), !t && n && this.setInitialState(e);
                        var i = t && t.broadcastSettings,
                            r = n && n.broadcastSettings;
                        if (i && r) {
                            r.title && i.title !== r.title && this.setField(a.Title, r.title);
                            var o = i.game && i.game.name,
                                s = r.game && r.game.name;
                            s && o !== s && (this.setField(a.GameCategory, s), this.setState({
                                selectedGame: s
                            }))
                        }
                    }, t.prototype.componentDidMount = function() {
                        this.props.data.user && this.setInitialState(this.props)
                    }, t.prototype.render = function() {
                        var e = this.props.cancelComponent,
                            t = this.state.requestState;
                        return this.props.data.error ? null : c.createElement(k.Va, {
                            fullHeight: !0,
                            display: k.W.Flex,
                            flexDirection: k.Y.Column,
                            alignItems: k.f.Center,
                            justifyContent: k.Ua.Center
                        }, c.createElement(k.Va, {
                            fullWidth: !0
                        }, this.getContent(), c.createElement(k.Va, {
                            margin: {
                                bottom: 2
                            }
                        }, c.createElement(k.T, {
                            targetBlank: !0,
                            to: V.b
                        }, Object(u.d)("Your content must follow our guidelines", "EditBroadcastComponent"))), c.createElement(k.Va, {
                            alignItems: k.f.Start,
                            display: k.W.Flex,
                            flexDirection: k.Y.Row,
                            fullWidth: !0,
                            justifyContent: k.Ua.Start,
                            margin: {
                                top: 1
                            }
                        }, c.createElement(k.z, {
                            disabled: !this.state.loaded || this.state.buttonDisabled || t === o.Fetching || t === o.Errored,
                            fullWidth: !e,
                            icon: t === o.Complete ? k.nb.Check : void 0,
                            onClick: this.handleSubmit,
                            state: t === o.Complete ? k.E.Success : k.E.Default
                        }, this.getButtonText()), e || null)))
                    }, t.prototype.getButtonText = function() {
                        switch (this.state.requestState) {
                            case o.Complete:
                                return "";
                            case o.Errored:
                                return Object(u.d)("An error occurred", "EditBroadcastComponent");
                            case o.Fetching:
                                return Object(u.d)("Updating...", "EditBroadcastComponent");
                            default:
                            case o.Ready:
                                var e = this.props.submitText;
                                return void 0 !== e ? e : Object(u.d)("Done", "EditBroadcastComponent")
                        }
                    }, t.prototype.getContent = function() {
                        var e;
                        if (this.props.data && this.props.data.currentUser && this.props.data.user && this.props.data.user.stream && !this.props.data.loading && this.state.loaded) {
                            var t = this.state.fields,
                                n = t.title,
                                i = t.goLiveNotification,
                                o = t.gameCategory,
                                s = t.communities,
                                l = q(n.errorType),
                                d = q(i.errorType),
                                p = q(o.errorType),
                                g = q(s.errorType);
                            e = c.createElement(c.Fragment, null, c.createElement(k.Va, {
                                "data-test-selector": r.PrimaryContent,
                                margin: {
                                    bottom: 2
                                }
                            }, c.createElement(k.Ca, {
                                "data-test-selector": r.TitleLabel,
                                error: !!l,
                                errorMessage: l,
                                label: Object(u.d)("Title", "EditBroadcastComponent"),
                                labelOptional: this.getRemainingCharacters(n.value)
                            }, c.createElement(k.Kb, {
                                "data-test-selector": r.TitleInput,
                                onChange: this.handleChangeByType(a.Title),
                                noResize: !0,
                                placeholder: Object(u.d)("Enter a title", "EditBroadcastComponent"),
                                rows: 3,
                                value: this.state.fields.title.value
                            }))), this.state.fields.goLiveNotification.isEnabled && c.createElement(k.Va, {
                                margin: {
                                    bottom: 2
                                }
                            }, c.createElement(k.Ca, {
                                error: !!d,
                                errorMessage: d,
                                label: Object(u.d)("Go Live Notification", "EditBroadcastComponent"),
                                labelOptional: this.getRemainingCharacters(i.value)
                            }, c.createElement(k.Kb, {
                                "data-test-selector": r.GoLiveNotification,
                                noResize: !0,
                                onChange: this.handleChangeByType(a.GoLiveNotification),
                                placeholder: Object(u.d)("{channelName} went live!", {
                                    channelName: this.props.channelLogin
                                }, "EditBroadcastComponent"),
                                rows: 3,
                                value: this.state.fields.goLiveNotification.value
                            }))), c.createElement(k.Va, {
                                margin: {
                                    bottom: 2
                                }
                            }, c.createElement(L, {
                                error: !!p,
                                errorMessage: p,
                                onGameResultSelected: this.handleGameResultSelected,
                                onGameCleared: this.handleGameCleared,
                                selectedGame: this.state.selectedGame
                            })), !Object(A.b)() && c.createElement(k.Va, {
                                margin: {
                                    bottom: 2
                                }
                            }, c.createElement(R, {
                                error: !!g,
                                errorMessage: g,
                                selectedCommunities: this.state.selectedCommunities,
                                onChange: this.handleErrorByType(a.Communities),
                                onCommunityResultSelected: this.handleCommunityResultSelected,
                                onRemoveCommunity: this.handleRemoveCommunity,
                                onError: this.handleErrorByType(a.Communities)
                            })), this.renderTagSelect(), c.createElement(k.Va, {
                                margin: {
                                    bottom: 1
                                }
                            }, c.createElement(m.a, {
                                label: Object(u.d)("Language", "EditBroadcastComponent"),
                                onChange: this.handleLanguageChange,
                                defaultLanguage: this.state.fields.language.value || "en",
                                disabled: !1
                            }), c.createElement(k.Va, {
                                margin: {
                                    top: .5
                                }
                            }, c.createElement(k.N, {
                                label: Object(u.d)("Restrict Chat Language", "EditBroadcastComponent"),
                                onChange: this.handleBroadcastLanguageModeEnabledChange,
                                checked: this.state.broadcasterLanguageModeEnabled,
                                "data-test-selector": r.BroadcastLanguageMode
                            }))))
                        } else e = c.createElement(k.Va, {
                            fullWidth: !0,
                            padding: {
                                y: 2
                            }
                        }, c.createElement(k.Xa, {
                            fillContent: !0
                        }));
                        return e
                    }, t.prototype.renderTagSelect = function() {
                        if (!this.checkTagExperiment) return null;
                        var e = q(this.state.fields.tags.errorType);
                        return c.createElement(k.Va, {
                            margin: {
                                bottom: 2
                            }
                        }, c.createElement(j.a, {
                            error: !!e,
                            errorMessage: e,
                            gameName: this.state.selectedGame,
                            onError: this.handleErrorByType(a.Tags),
                            onRemoveTag: this.handleRemoveTag,
                            onTagResultSelected: this.handleTagResultSelected,
                            selectedTags: this.state.selectedTags,
                            showAllDashboardTags: !0,
                            showHelpButton: !0
                        }))
                    }, t.prototype.normalizeString = function(e) {
                        return Array.from(e.normalize ? e.normalize("NFC") : e)
                    }, t.prototype.updateChannel = function(e) {
                        return s.__awaiter(this, void 0, void 0, function() {
                            var t, n, r, o;
                            return s.__generator(this, function(s) {
                                switch (s.label) {
                                    case 0:
                                        return t = {
                                            "channel[broadcaster_language]": this.state.fields.language.value,
                                            "channel[game]": this.state.selectedGame,
                                            "channel[status]": this.state.fields.title.value || "",
                                            on_site: "1"
                                        }, n = "/kraken/channels/" + e, [4, f.a.put(n, {
                                            body: l.stringify(t, {
                                                arrayFormat: "bracket"
                                            }),
                                            headers: V.a
                                        })];
                                    case 1:
                                        if (r = s.sent().error) {
                                            if ((o = r.message).includes("Title is too long")) return [2, {
                                                errorType: i.TitleTooLong,
                                                fieldType: a.Title
                                            }];
                                            if (o.includes("Status contains banned words")) return [2, {
                                                errorType: i.FailedAutomodTitle,
                                                fieldType: a.Title
                                            }]
                                        }
                                        return [2]
                                }
                            })
                        })
                    }, t.prototype.updateGoLiveNotification = function(e) {
                        return s.__awaiter(this, void 0, void 0, function() {
                            var t, n;
                            return s.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return this.state.fields.goLiveNotification.isEnabled ? (t = "/kraken/users/" + e + "/notifications/custom", [4, f.a.request(t, {
                                            body: {
                                                notification_type: "streamup",
                                                message: this.state.fields.goLiveNotification.value
                                            },
                                            method: "PUT"
                                        })]) : [3, 2];
                                    case 1:
                                        if (n = i.sent().error) return [2, {
                                            errorType: n && n.message,
                                            fieldType: a.GoLiveNotification
                                        }];
                                        i.label = 2;
                                    case 2:
                                        return [2]
                                }
                            })
                        })
                    }, t.prototype.updateChannelCommunities = function(e) {
                        return s.__awaiter(this, void 0, void 0, function() {
                            var t, n, i;
                            return s.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return t = "/kraken/channels/" + e + "/communities/", n = this.state.selectedCommunities.map(function(e) {
                                            return e.objectID
                                        }), [4, f.a.put(t, {
                                            body: l.stringify({
                                                community_ids: n,
                                                on_site: "1"
                                            }, {
                                                arrayFormat: "bracket"
                                            }),
                                            headers: V.a
                                        })];
                                    case 1:
                                        return (i = r.sent().error) ? [2, {
                                            errorType: i && i.message,
                                            fieldType: a.Language
                                        }] : [2]
                                }
                            })
                        })
                    }, t.prototype.updateChannelBroadcasterLanguageEnabled = function(e) {
                        return s.__awaiter(this, void 0, void 0, function() {
                            var t, n, a, i, r, o, l, c, d;
                            return s.__generator(this, function(s) {
                                switch (s.label) {
                                    case 0:
                                        return t = this.props, n = t.channelLogin, a = t.data.user, i = t.updateChatSettings, r = this.state.broadcasterLanguageModeEnabled, i && a && a.chatSettings && a.chatSettings.isBroadcasterLanguageModeEnabled !== r ? (o = {
                                            channelID: e,
                                            isBroadcasterLanguageModeEnabled: r
                                        }, l = {
                                            updateChatSettings: {
                                                __typename: "UpdateChatSettingsPayload",
                                                chatSettings: {
                                                    isBroadcasterLanguageModeEnabled: r,
                                                    __typename: "ChatSettings"
                                                }
                                            }
                                        }, [4, i(Object(g.b)(o, l))]) : [2];
                                    case 1:
                                        return c = s.sent(), d = function(e) {
                                            return a.chatSettings && c.data.updateChatSettings && c.data.updateChatSettings.chatSettings && (a.chatSettings.isBroadcasterLanguageModeEnabled = c.data.updateChatSettings.chatSettings.isBroadcasterLanguageModeEnabled), e
                                        }, Object(g.e)(P, {
                                            login: n
                                        }, d), [2]
                                }
                            })
                        })
                    }, t.prototype.updateChannelTags = function(e) {
                        return s.__awaiter(this, void 0, void 0, function() {
                            var t, n, a, i, r, o;
                            return s.__generator(this, function(l) {
                                switch (l.label) {
                                    case 0:
                                        if (!this.state.selectedTags) return [2];
                                        for (i in t = [], n = [], a = this.state.modifiedTags) !0 === a[i] ? t.push(i) : n.push(i);
                                        return 0 === t.length && 0 === n.length ? [2] : (r = {
                                            contentID: e,
                                            contentType: h.n.LIVE_CHANNEL,
                                            addedTagIDs: t,
                                            removedTagIDs: n,
                                            authorID: e
                                        }, o = {
                                            updateContentTags: {
                                                __typename: "UpdateContentTagsPayload",
                                                content: {
                                                    id: e,
                                                    tags: this.state.selectedTags.map(function(e) {
                                                        return s.__assign({}, e, {
                                                            __typename: "Tag"
                                                        })
                                                    }),
                                                    __typename: "Stream"
                                                }
                                            }
                                        }, [4, this.props.updateChannelTags(Object(g.b)(r, o))]);
                                    case 1:
                                        return l.sent(), [2]
                                }
                            })
                        })
                    }, t
                }(c.Component),
                W = Object(d.compose)(Object(G.c)("EditBroadcast"), Object(p.a)(P, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            variables: {
                                login: e.channelLogin
                            }
                        }
                    }
                }), Object(p.a)(M, {
                    name: "updateChatSettings"
                }), Object(p.a)(B, {
                    name: "updateChannelTags"
                }))(U);
            n.d(t, !1, function() {
                return U
            }), n.d(t, "a", function() {
                return W
            })
        },
        lr7A: function(e, t, n) {
            "use strict";
            var a, i = n("mrSG"),
                r = n("q1tI"),
                o = n("/7QA"),
                s = n("FsIG"),
                l = n("C29h"),
                c = n("Ue10");
            n("sEux");
            ! function(e) {
                e.NoTagsSelected = "no-tags-selected", e.SelectedTag = "selected-tag"
            }(a || (a = {}));
            var d = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderErrorMessage = function() {
                            if (t.props.error && t.props.errorMessage) return r.createElement(c.Va, {
                                margin: {
                                    top: .5
                                }
                            }, r.createElement(c.Ba, {
                                errorMessage: t.props.errorMessage
                            }))
                        }, t.renderTagSearch = function() {
                            return t.props.readOnly ? null : r.createElement(l.a, {
                                categoryName: t.props.gameName,
                                onInputChange: t.props.onChange,
                                onTagClick: t.onTagResultSelected,
                                selectedTags: t.props.selectedTags,
                                showAllDashboardTags: t.props.showAllDashboardTags,
                                type: l.b.TagAllMinusAutomation
                            })
                        }, t.onTagResultSelected = function(e) {
                            5 === t.props.selectedTags.filter(function(e) {
                                return !e.isAutomated
                            }).length && t.props.onError ? t.props.onError(Object(o.d)("You can only select up to 5 tags at the same time.", "TagSelectorSearch")) : t.props.selectedTags.map(function(e) {
                                return e.id
                            }).includes(e.id) || t.props.onTagResultSelected && t.props.onTagResultSelected(e)
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = Object(o.d)("Tags", "TagSelectorSearch");
                        return r.createElement(c.Va, null, r.createElement(c.Va, {
                            display: c.W.Flex,
                            justifyContent: c.Ua.Between
                        }, r.createElement(c.Fa, {
                            id: Object(s.b)(e),
                            label: e
                        }), this.renderHelpButton()), r.createElement(c.Va, {
                            alignContent: c.e.Center
                        }, r.createElement(c.Va, {
                            position: c.db.Relative,
                            margin: {
                                y: .5
                            }
                        }, this.renderTagSearch()), this.renderErrorMessage(), this.renderSelectedTags()))
                    }, t.prototype.renderSelectedTags = function() {
                        var e = this;
                        return 0 !== this.props.selectedTags.length || this.props.readOnly ? 0 === this.props.selectedTags.length ? r.createElement(c.Va, {
                            "data-test-selector": a.NoTagsSelected
                        }, r.createElement(c.Pa, {
                            type: c.Ra.Text,
                            placeholder: Object(o.d)("No tags were selected", "TagSelectorSearch"),
                            disabled: !0
                        })) : r.createElement(c.Va, {
                            margin: {
                                top: .5
                            },
                            padding: {
                                left: .5,
                                top: .5
                            },
                            className: "selected-tags"
                        }, this.props.selectedTags.map(function(t, n) {
                            return r.createElement(c.Va, {
                                display: c.W.InlineBlock,
                                margin: {
                                    right: .5,
                                    bottom: .5
                                },
                                key: t.id + "_" + n
                            }, r.createElement(c.Gb, {
                                "data-test-selector": a.SelectedTag,
                                action: t.isAutomated ? void 0 : c.Hb.Remove,
                                label: t.localizedName || t.tagName,
                                key: t.id,
                                onClick: t.isAutomated ? void 0 : e.props.onRemoveTag,
                                "data-idx": n
                            }))
                        })) : null
                    }, t.prototype.renderHelpButton = function() {
                        return this.props.showHelpButton ? r.createElement(c.Va, null, Object(o.d)("<x:link>Learn More</x:link>", {
                            "x:link": function(e) {
                                return r.createElement(c.T, {
                                    to: "https://link.twitch.tv/learntags"
                                }, e)
                            }
                        }, "TagSuggestions")) : null
                    }, t
                }(r.Component),
                u = d;
            n.d(t, !1, function() {
                return a
            }), n.d(t, !1, function() {
                return d
            }), n.d(t, "a", function() {
                return u
            })
        },
        sEux: function(e, t, n) {},
        w4St: function(e, t, n) {}
    }
]);