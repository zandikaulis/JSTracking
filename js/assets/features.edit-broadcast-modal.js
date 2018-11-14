(window.webpackJsonp = window.webpackJsonp || []).push([
    [115], {
        "0ly3": function(e, t, a) {
            "use strict";
            var n = a("mrSG"),
                i = a("q1tI"),
                r = a("HSqT"),
                s = a("Ue10"),
                o = function(e) {
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
                    return n.__extends(t, e), t.prototype.render = function() {
                        var e = i.createElement(s.Ab, {
                            onChange: this.onChange,
                            disabled: this.props.disabled,
                            defaultValue: this.props.defaultLanguage
                        }, Object(r.b)().map(this.renderLanguageOption));
                        return this.props.label && (e = i.createElement(s.Ea, {
                            label: this.props.label
                        }, e)), e
                    }, t
                }(i.Component);
            a.d(t, "a", function() {
                return o
            })
        },
        "2Dck": function(e, t, a) {
            "use strict";
            a.d(t, "b", function() {
                return n
            }), a.d(t, "c", function() {
                return i
            }), a.d(t, "a", function() {
                return r
            });
            var n = "https://help.twitch.tv/customer/portal/articles/983016",
                i = 140,
                r = {
                    Accept: "application/vnd.twitchtv.v5+json; charset=UTF-8",
                    "Accept-Language": "en-us",
                    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
                }
        },
        "79jw": function(e, t, a) {
            var n = {
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
            n.loc.source = {
                body: '#import "twilight/features/tags/models/tag-fragment.gql"\nquery TopTags($limit: Int! $showTopTagsByCategory: Boolean! $categoryName: String) {\ngame(name: $categoryName) @include(if: $showTopTagsByCategory) {\nid\ntags(tagType: TOP limit: $limit) {\n...tagFragment\n}\n}\ntopTags(limit: $limit) @skip(if: $showTopTagsByCategory) {\n...tagFragment\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var i = {};
            n.definitions = n.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !i[t] && (i[t] = !0, !0)
                })
            }(a("iiOx").definitions)), e.exports = n
        },
        "97MP": function(e, t, a) {},
        AZIu: function(e, t, a) {
            "use strict";
            a.d(t, "a", function() {
                return n
            }), a.d(t, "b", function() {
                return s
            });
            var n, i = a("/7QA"),
                r = a("2xye");

            function s(e) {
                var t = {
                    section: e.section,
                    tag_position: e.tagPosition,
                    item_page: "browse",
                    search_event: e.searchEvent,
                    tag_id: e.tagId,
                    dismiss: e.dismiss
                };
                i.o.track(r.SpadeEventType.BrowseFilter, t)
            }! function(e) {
                e.Categories = "browse_categories", e.LiveChannels = "browse_livechannels", e.IncategoryChannels = "browse_incategory_channels"
            }(n || (n = {}))
        },
        C29h: function(e, t, a) {
            "use strict";
            var n, i = a("mrSG"),
                r = a("q1tI"),
                s = a("9C/b"),
                o = a("fvjX"),
                l = a("/7QA"),
                d = a("N3I0"),
                c = a("8/mp"),
                u = a("f00E"),
                g = a("H/lO"),
                m = a("NZDK"),
                p = a("yR8l"),
                h = a("DMoW"),
                f = a("GIun"),
                v = a("Ue10"),
                b = function(e) {
                    var t, a = e.onClick,
                        n = e.tag;
                    a && (t = function() {
                        return a(n)
                    });
                    var i = "localizedDescription" in e.tag ? e.tag.localizedDescription : void 0;
                    return r.createElement(f.a, null, r.createElement(v.Va, {
                        onClick: t
                    }, r.createElement(v.Ya, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, r.createElement(v.W, {
                        title: i
                    }, n.localizedName))))
                },
                T = a("y5I9"),
                k = a("Ryvb");
            ! function(e) {
                e.SuggestedTags = "suggested-tags"
            }(n || (n = {}));
            var y, S, N = function(e) {
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
                            return e = t.state.filteredTopTags.map(t.renderSuggestedTag), r.createElement(v.Ya, {
                                padding: {
                                    bottom: 1
                                }
                            }, e)
                        }, t.renderSuggestedTag = function(e) {
                            return r.createElement(b, {
                                "data-test-selector": n.SuggestedTags,
                                key: e.id,
                                onClick: function() {
                                    return t.props.onAddTag(e)
                                },
                                tag: e
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                        var t = this.props.data.game,
                            a = e.data.game;
                        if (Object(T.a)(this.props.selectedTagIDs, e.selectedTagIDs) || Object(T.b)(t && t.tags, a && a.tags)) {
                            var n = a && a.tags && a.tags.filter(function(e) {
                                return !e.isAutomated
                            }).filter(function(t) {
                                return !e.selectedTagIDs.includes(t.id)
                            }).slice(0, 7) || [];
                            this.setState({
                                filteredTopTags: n
                            })
                        }
                    }, t.prototype.render = function() {
                        return this.props.data.loading || this.props.data.error ? null : this.props.data.game && this.props.data.game.tags && 0 !== this.props.data.game.tags.length && this.state.filteredTopTags && 0 !== this.state.filteredTopTags.length ? r.createElement(v.Ya, null, r.createElement(v.Ya, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, r.createElement(v.W, {
                            bold: !0
                        }, Object(l.d)("Suggestions", "TagSuggestions"))), this.renderTags(), r.createElement(v.Ya, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, r.createElement(v.W, {
                            bold: !0
                        }, Object(l.d)("All Tags", "AllTagsTitle")))) : null
                    }, t
                }(r.Component),
                C = Object(p.a)(k, {
                    options: function(e) {
                        return {
                            variables: {
                                gameName: e.gameName,
                                tagType: h.X.TOP,
                                limit: 50
                            }
                        }
                    }
                })(N),
                E = a("TCeE"),
                _ = a("79jw"),
                F = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderTags = function() {
                            return t.props.categoryName ? t.props.data.game && t.props.data.game.tags && 0 !== t.props.data.game.tags.length ? t.props.data.game.tags.slice().sort(function(e, t) {
                                return e.localizedName.localeCompare(t.localizedName)
                            }).map(t.renderTag) : null : t.props.data.topTags && 0 !== t.props.data.topTags.length ? t.props.data.topTags.slice().sort(function(e, t) {
                                return e.localizedName.localeCompare(t.localizedName)
                            }).map(t.renderTag) : null
                        }, t.renderTag = function(e) {
                            var a = t.props.categoryName ? E.b.Category : E.b.All;
                            return r.createElement(f.a, {
                                key: e.id
                            }, r.createElement(v.Va, {
                                onClick: function() {
                                    return t.props.onAddTag(e, a)
                                }
                            }, r.createElement(v.Ya, {
                                padding: {
                                    y: .5,
                                    x: 1
                                }
                            }, e.localizedName || e.tagName)))
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return this.props.data.error ? null : this.props.data.loading ? r.createElement(v.Ya, {
                            display: v.X.Flex,
                            justifyContent: v.Xa.Center,
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, r.createElement(v.ab, null)) : r.createElement(v.Ya, null, this.renderTags())
                    }, t
                }(r.Component),
                w = Object(o.compose)(Object(p.a)(_, {
                    options: function(e) {
                        return {
                            variables: {
                                categoryName: e.categoryName,
                                limit: e.tagsLimit || 5,
                                showTopTagsByCategory: !!e.categoryName
                            }
                        }
                    }
                }))(F),
                O = a("sLmD"),
                I = a("AZIu"),
                A = a("4HIT");
            a("97MP");
            ! function(e) {
                e[e.TagAll = 0] = "TagAll", e[e.TagAllMinusAutomation = 1] = "TagAllMinusAutomation", e[e.TagCategory = 2] = "TagCategory", e[e.StreamTag = 3] = "StreamTag"
            }(y || (y = {})),
            function(e) {
                e.SearchContent = "tag-search-search-content", e.SearchDropdown = "search-dropdown-selector"
            }(S || (S = {}));
            var D = function(e) {
                    function t(t) {
                        var a = e.call(this, t) || this;
                        return a.state = {
                            isOpen: !1,
                            searching: !1,
                            searchTerm: ""
                        }, a.languageCode = Object(O.a)(), a.renderSearchContent = function() {
                            var e = null;
                            return e = a.props.type === y.StreamTag ? a.renderStreamTagResults() : a.renderTagResults(), r.createElement(c.b, {
                                className: "tag-search__scrollable-area",
                                suppressScrollX: !0
                            }, r.createElement(v.Ya, {
                                "data-test-selector": S.SearchContent
                            }, a.renderSuggestedTags(), e))
                        }, a.renderTagSearchResult = function(e) {
                            var t = Object(O.b)(e, a.props.type === y.TagAllMinusAutomation),
                                n = "tag_scope" in e ? e.tag_scope : void 0;
                            return r.createElement(b, {
                                key: t.id,
                                onClick: function() {
                                    return a.onTagResultSelected(t, n)
                                },
                                tag: t
                            })
                        }, a.renderStreamTagResults = function() {
                            return a.props.type === y.StreamTag && a.state.isOpen ? "" === a.state.searchTerm ? r.createElement(w, {
                                categoryName: a.props.categoryName,
                                onAddTag: a.onTagResultSelected,
                                tagsLimit: 100
                            }) : !a.state.searchResults && a.state.searching ? a.renderLoading() : a.state.searchResults && a.state.searchResults.streamTags && a.state.searchResults.streamTags.hits.length ? a.state.searchResults.streamTags.hits.map(a.renderTagSearchResult) : a.renderNoResults() : null
                        }, a.renderTagResults = function() {
                            return a.state.isOpen ? a.props.type === y.TagAll && "" === a.state.searchTerm ? r.createElement(w, {
                                onAddTag: a.onTagResultSelected,
                                tagsLimit: 100
                            }) : !a.state.searchResults && a.state.searching ? a.renderLoading() : a.state.searchResults && a.state.searchResults.tags && a.state.searchResults.tags.hits.length ? a.state.searchResults.tags.hits.map(a.renderTagSearchResult) : a.renderNoResults() : null
                        }, a.setTagSearchRef = function(e) {
                            a.tagSearch = e
                        }, a.onTagResultSelected = function(e, t) {
                            if (a.toggleTagSearch(!1), a.clearSearchTerm(), a.props.type === y.TagCategory && t === E.b.All ? l.p.history.push(A.a.Popular) : a.props.type === y.TagAll && t === E.b.Category && l.p.history.push(A.a.Games), a.props.onTagClick && (a.props.onTagClick(e, t), a.props.section && a.props.numSelectedTags)) {
                                var n = {
                                    section: a.props.section,
                                    tagPosition: a.props.numSelectedTags,
                                    searchEvent: !0,
                                    tagId: e.id,
                                    dismiss: !1
                                };
                                Object(I.b)(n)
                            }
                        }, a.onInputChange = function(e) {
                            a.props.onInputChange && a.props.onInputChange(e), clearTimeout(a.inputTimeout), a.toggleTagSearch(!0), a.setState({
                                searchTerm: e,
                                searching: !0
                            }, function() {
                                (a.props.type !== y.TagAll && a.props.type !== y.StreamTag || a.props.type === y.TagAll && "" !== a.state.searchTerm || a.props.type === y.StreamTag && "" !== a.state.searchTerm) && (a.inputTimeout = setTimeout(function() {
                                    a.search(a.state.searchTerm)
                                }, 200))
                            })
                        }, a.onFocusInput = function() {
                            "" === a.state.searchTerm ? a.onInputChange("") : a.toggleTagSearch(!0)
                        }, a.onSearchClose = function() {
                            a.toggleTagSearch(!1)
                        }, a.toggleTagSearch = function(e) {
                            a.tagSearch && a.tagSearch.toggle(e), a.setState({
                                isOpen: e
                            })
                        }, a.clearSearchTerm = function() {
                            a.tagSearch && a.tagSearch.setValue(""), a.setState({
                                searchTerm: "",
                                searching: !1
                            })
                        }, a.searchClient = new m.a({
                            appId: l.a.algoliaApplicationID,
                            apiKey: l.a.algoliaAPIKey,
                            apolloClient: l.p.apollo.client,
                            logger: l.k,
                            config: l.a,
                            stats: l.p.stats
                        }), a
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return r.createElement(d.a, {
                            autoFocus: this.props.autoFocus,
                            "data-test-selector": S.SearchDropdown,
                            inline: this.props.inline,
                            inputSize: this.props.inputSize,
                            onChange: this.onInputChange,
                            onFocusInput: this.onFocusInput,
                            onClose: this.onSearchClose,
                            placeholder: Object(l.d)("Search Tags", "TagSearch"),
                            ref: this.setTagSearchRef
                        }, this.renderSearchContent())
                    }, t.prototype.renderLoading = function() {
                        return r.createElement(v.Ya, {
                            display: v.X.Flex,
                            justifyContent: v.Xa.Center,
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, r.createElement(v.ab, {
                            delay: 0
                        }))
                    }, t.prototype.renderNoResults = function() {
                        return this.state.searching ? null : r.createElement(v.Ya, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, Object(l.d)("No results found", "TagSearch"))
                    }, t.prototype.renderSuggestedTags = function() {
                        if (this.props.type !== y.TagAllMinusAutomation || "" !== this.state.searchTerm) return null;
                        var e = this.props.selectedTags && this.props.selectedTags.map(function(e) {
                            return e.id
                        }) || [];
                        return r.createElement(v.Ya, null, r.createElement(C, {
                            gameName: this.props.categoryName,
                            onAddTag: this.onTagResultSelected,
                            selectedTagIDs: e
                        }))
                    }, t.prototype.search = function(e) {
                        return i.__awaiter(this, void 0, void 0, function() {
                            var t, a, n;
                            return i.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return e = e || "", t = {
                                            hitsPerPage: 100,
                                            restrictSearchableAttributes: ["localizations." + this.languageCode, "tag_name"]
                                        }, a = g.a.Tags, this.props.type === y.TagAllMinusAutomation ? (t.facetFilters = '["automated:false", "tag_scope:' + E.b.All + '"]', this.props.showAllDashboardTags && (t.hitsPerPage = 300)) : this.props.type === y.TagAll ? this.props.selectedTags && this.props.selectedTags.length ? t.facetFilters = "tag_scope:" + E.b.All : t.facetFilters = '[["tag_scope:' + E.b.All + '", "tag_scope:' + E.b.Category + '"]]' : this.props.type === y.TagCategory ? "" === e || this.props.selectedTags && this.props.selectedTags.length ? t.facetFilters = "tag_scope:" + E.b.Category : t.facetFilters = '[["tag_scope:' + E.b.All + '", "tag_scope:' + E.b.Category + '"]]' : this.props.type === y.StreamTag && (a = g.a.StreamTags, t.facetFilters = "category_id:" + this.props.categoryID), [4, this.searchClient.queryForType(a, e, u.a(), t)];
                                    case 1:
                                        return n = i.sent(), this.setState({
                                            searchResults: n,
                                            searching: !1
                                        }), [2]
                                }
                            })
                        })
                    }, t
                }(r.Component),
                L = Object(o.compose)(s.a)(D);
            a.d(t, "b", function() {
                return y
            }), a.d(t, !1, function() {
                return S
            }), a.d(t, !1, function() {
                return D
            }), a.d(t, "a", function() {
                return L
            })
        },
        FsIG: function(e, t, a) {
            "use strict";

            function n(e) {
                return e || ""
            }

            function i(e) {
                return e ? e.toString() : ""
            }
            a.d(t, "b", function() {
                return n
            }), a.d(t, "a", function() {
                return i
            })
        },
        GIun: function(e, t, a) {
            "use strict";
            var n = a("q1tI"),
                i = function(e) {
                    var t = n.Children.only(e.children);
                    return n.cloneElement(t, {
                        "data-selectable": !0,
                        tabIndex: -1
                    })
                };
            a.d(t, "a", function() {
                return i
            })
        },
        HSqT: function(e, t, a) {
            "use strict";
            a.d(t, "a", function() {
                return s
            }), a.d(t, "b", function() {
                return o
            });
            var n = a("/7QA"),
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
                    label: e ? Object(n.d)("Other", "broadcaster-languages") : "Other"
                }]
            }
            var s = new Set(i.concat(r()).map(function(e) {
                return e.code
            }));

            function o() {
                var e = n.p.intl.getLanguageCode(),
                    t = function(t) {
                        return "en" === t.code ? 0 : e && e.startsWith(t.code) ? 1 : 2
                    };
                return i.slice().sort(function(e, a) {
                    var n = t(e),
                        i = t(a);
                    return n !== i ? n - i : n + ":" + e.label < i + ":" + a.label ? -1 : 1
                }).concat(r(!0))
            }
        },
        HUHH: function(e, t, a) {
            var n = {
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
            n.loc.source = {
                body: '#import "twilight/features/tags/models/broadcast-tag-fragment.gql"\nmutation EditBroadcastModal_UpdateChannelTagsInput($input: UpdateContentTagsInput!) {\nupdateContentTags(input: $input) {\ncontent {\n... on Stream {\nid\ntags {\n...broadcastTagFragment\n}\n}\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var i = {};
            n.definitions = n.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !i[t] && (i[t] = !0, !0)
                })
            }(a("Iqxx").definitions)), e.exports = n
        },
        Iqxx: function(e, t) {
            var a = {
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
            a.loc.source = {
                body: "fragment broadcastTagFragment on Tag {\nid\nlocalizedName\ntagName\nisAutomated\nlocalizedDescription\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = a
        },
        N3I0: function(e, t, a) {
            "use strict";
            var n = a("mrSG"),
                i = a("q1tI"),
                r = a("u5aL"),
                s = a("/7QA"),
                o = a("Ue10"),
                l = function() {
                    return i.createElement(o.Ya, {
                        display: o.X.Flex,
                        flexDirection: o.Aa.Column,
                        justifyContent: o.Xa.Center,
                        alignItems: o.f.Center,
                        flexGrow: 1,
                        fullHeight: !0,
                        padding: {
                            y: 1
                        },
                        zIndex: o.jc.Above
                    }, i.createElement(o.Fb, {
                        color: o.O.Alt2,
                        textAlign: o.Sb.Center,
                        flexShrink: 1
                    }, i.createElement(o.tb, {
                        asset: o.ub.DeadGlitch,
                        width: 46,
                        height: 48
                    })), i.createElement(o.Qa, {
                        margin: {
                            top: 1
                        },
                        textAlign: o.Sb.Center
                    }, i.createElement(o.W, {
                        type: o.Wb.H4,
                        "data-test-selector": "search-error-message"
                    }, Object(s.d)("Search is not available at this time", "DropdownSearchError"))), i.createElement(o.W, {
                        type: o.Wb.P
                    }, Object(s.d)("Please try again later", "DropdownSearchError")))
                },
                d = a("8Ad5"),
                c = function(e) {
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
                            var a = function() {
                                e.preventDefault(), e.stopPropagation()
                            };
                            e.keyCode === d.a.Esc ? t.setState({
                                isOpen: !1
                            }) : e.keyCode === d.a.Up ? (a(), t.focusNext(-1)) : e.keyCode === d.a.Down && (a(), t.focusNext(1))
                        }, t.onClickOut = function() {
                            t.state.isOpen && t.setState({
                                isOpen: !1
                            }), t.props.onClose && t.props.onClose()
                        }, t.onMouseOver = function(e) {
                            var a = e.target.closest("[data-selectable]");
                            a && (a.focus(), a.tabIndex = 0, t.state.currentFocus && (t.state.currentFocus.tabIndex = -1), t.setState({
                                currentFocus: a
                            }), t.props.onFocusChange && t.props.onFocusChange(a))
                        }, t.getInputRef = function(e) {
                            t.inputRef = e
                        }, t
                    }
                    return n.__extends(t, e), t.prototype.render = function() {
                        var e = void 0 === this.props.showDropdown || this.props.showDropdown,
                            t = this.props.isErrored ? i.createElement(l, null) : i.Children.only(this.props.children),
                            a = i.createElement(o.wb, {
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
                        }, i.createElement(o.Fb, {
                            background: this.state.isInputFocused || this.state.isOpen ? o.r.Base : void 0,
                            borderRadius: o.x.Large,
                            padding: .5,
                            position: o.kb.Relative,
                            elevation: this.state.isInputFocused || this.state.isOpen ? 3 : void 0
                        }, a, e && i.createElement(o.Fb, {
                            attachLeft: !0,
                            background: o.r.Base,
                            borderRadius: o.x.Large,
                            display: this.state.isOpen ? o.X.Block : o.X.Hide,
                            fullWidth: !0,
                            padding: {
                                y: 1
                            },
                            position: o.kb.Absolute,
                            zIndex: o.jc.Above,
                            elevation: 3
                        }, i.createElement("div", {
                            tabIndex: 0,
                            onKeyDown: this.onKeyDown,
                            onMouseOver: this.props.enableMouseEvents ? this.onMouseOver : void 0
                        }, t)))) : i.createElement(r.a, {
                            onClickOut: this.onClickOut
                        }, a, e && i.createElement(o.u, n.__assign({
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
                        var t, a = document.querySelectorAll("[data-selectable=true]"),
                            n = document.activeElement,
                            i = Array.prototype.indexOf.call(a, n);
                        if ((t = i < 0 ? e > 0 ? 0 : a.length - 1 : i + e) < 0 && (t = 0), !(t >= a.length)) {
                            var r = a.item(t);
                            r.focus(), r.tabIndex = 0, this.state.currentFocus && (this.state.currentFocus.tabIndex = -1), this.setState({
                                currentFocus: r
                            }), this.props.onFocusChange && this.props.onFocusChange(r)
                        }
                    }, t
                }(i.Component);
            a.d(t, "a", function() {
                return c
            })
        },
        Ryvb: function(e, t, a) {
            var n = {
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
            n.loc.source = {
                body: '#import "twilight/features/tags/models/broadcast-tag-fragment.gql"\nquery SuggestedTags($gameName: String! $tagType: TagType! $limit: Int!) {\ngame(name: $gameName) {\nid\ntags(tagType: $tagType limit: $limit) {\n...broadcastTagFragment\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var i = {};
            n.definitions = n.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !i[t] && (i[t] = !0, !0)
                })
            }(a("Iqxx").definitions)), e.exports = n
        },
        TCeE: function(e, t, a) {
            "use strict";
            a.d(t, "a", function() {
                return i
            }), a.d(t, "b", function() {
                return n
            });
            var n, i = 5;
            ! function(e) {
                e.All = "SCOPE_ALL", e.Category = "SCOPE_CATEGORY"
            }(n || (n = {}))
        },
        X6el: function(e, t, a) {
            var n = {
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
                    end: 443
                }
            };
            n.loc.source = {
                body: '#import "twilight/features/tags/models/broadcast-tag-fragment.gql"\nquery EditBroadcastModal($login: String!) {\nuser(login: $login) {\nid\nlastBroadcast {\nid\ntitle\ngame {\nid\nname\nboxArtURL(width: 40 height: 55)\n}\n}\nstream {\nid\ngame {\nid\nname\nboxArtURL(width: 40 height: 55)\n}\ntags {\n...broadcastTagFragment\n}\ntitle\n}\nbroadcastSettings {\nid\nlanguage\ngame {\nid\nname\n}\ntitle\n}\nchatSettings {\nisBroadcasterLanguageModeEnabled\n}\n}\ncurrentUser {\nid\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var i = {};
            n.definitions = n.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !i[t] && (i[t] = !0, !0)
                })
            }(a("Iqxx").definitions)), e.exports = n
        },
        aP55: function(e, t) {
            var a = {
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
            a.loc.source = {
                body: "mutation EditBroadcastModal_UpdateChatSettingsInput($input: UpdateChatSettingsInput!) {\nupdateChatSettings(input: $input) {\nchatSettings {\nisBroadcasterLanguageModeEnabled\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = a
        },
        b6Yk: function(e, t, a) {
            "use strict";
            a.d(t, "a", function() {
                return s
            });
            var n = a("mrSG"),
                i = a("/7QA"),
                r = a("kRBY"),
                s = function() {
                    function e() {}
                    return e.get = function(e, t, a) {
                        return void 0 === t && (t = {}), void 0 === a && (a = {}), n.__awaiter(this, void 0, Promise, function() {
                            return n.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, this.request(e, n.__assign({}, t, {
                                            method: "GET"
                                        }), a)];
                                    case 1:
                                        return [2, i.sent()]
                                }
                            })
                        })
                    }, e.getOrThrow = function(e, t, a) {
                        return void 0 === t && (t = {}), void 0 === a && (a = {}), n.__awaiter(this, void 0, Promise, function() {
                            return n.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, n.__assign({}, t, {
                                            method: "GET"
                                        }), a)];
                                    case 1:
                                        return [2, i.sent()]
                                }
                            })
                        })
                    }, e.put = function(e, t, a) {
                        return void 0 === t && (t = {}), void 0 === a && (a = {}), n.__awaiter(this, void 0, Promise, function() {
                            return n.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, this.request(e, n.__assign({}, t, {
                                            method: "PUT"
                                        }), a)];
                                    case 1:
                                        return [2, i.sent()]
                                }
                            })
                        })
                    }, e.putOrThrow = function(e, t, a) {
                        return void 0 === t && (t = {}), void 0 === a && (a = {}), n.__awaiter(this, void 0, Promise, function() {
                            return n.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, n.__assign({}, t, {
                                            method: "PUT"
                                        }), a)];
                                    case 1:
                                        return [2, i.sent()]
                                }
                            })
                        })
                    }, e.post = function(e, t, a) {
                        return void 0 === t && (t = {}), void 0 === a && (a = {}), n.__awaiter(this, void 0, Promise, function() {
                            return n.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, this.request(e, n.__assign({}, t, {
                                            method: "POST"
                                        }), a)];
                                    case 1:
                                        return [2, i.sent()]
                                }
                            })
                        })
                    }, e.postOrThrow = function(e, t, a) {
                        return void 0 === t && (t = {}), void 0 === a && (a = {}), n.__awaiter(this, void 0, Promise, function() {
                            return n.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, n.__assign({}, t, {
                                            method: "POST"
                                        }), a)];
                                    case 1:
                                        return [2, i.sent()]
                                }
                            })
                        })
                    }, e.delete = function(e, t, a) {
                        return void 0 === t && (t = {}), void 0 === a && (a = {}), n.__awaiter(this, void 0, Promise, function() {
                            return n.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, this.request(e, n.__assign({}, t, {
                                            method: "DELETE"
                                        }), a)];
                                    case 1:
                                        return [2, i.sent()]
                                }
                            })
                        })
                    }, e.deleteOrThrow = function(e, t, a) {
                        return void 0 === t && (t = {}), void 0 === a && (a = {}), n.__awaiter(this, void 0, Promise, function() {
                            return n.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, n.__assign({}, t, {
                                            method: "DELETE"
                                        }), a)];
                                    case 1:
                                        return [2, i.sent()]
                                }
                            })
                        })
                    }, e.request = function(e, t, a) {
                        return void 0 === t && (t = {}), void 0 === a && (a = {}), n.__awaiter(this, void 0, Promise, function() {
                            var i, r, s, o;
                            return n.__generator(this, function(l) {
                                switch (l.label) {
                                    case 0:
                                        return t = this.constructOptions(t, a), i = t.headers ? t.headers["Content-Type"] : void 0, r = this.serialize(t.body, i), s = n.__assign({}, t, {
                                            body: r
                                        }), [4, this._fetch(e, s)];
                                    case 1:
                                        return o = l.sent(), [4, this.constructLegacyAPIResponse(o)];
                                    case 2:
                                        return [2, l.sent()]
                                }
                            })
                        })
                    }, e.requestOrThrow = function(e, t, a) {
                        return void 0 === t && (t = {}), void 0 === a && (a = {}), n.__awaiter(this, void 0, Promise, function() {
                            var i;
                            return n.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return r.trys.push([0, 2, , 3]), [4, this.request(e, t, a)];
                                    case 1:
                                        if ((i = r.sent()).requestError) throw i.requestError;
                                        if (i.error) throw new Error("Error while sending legacy-api request: " + i.error.status + " - " + i.error.message);
                                        return [2, n.__assign({}, i, {
                                            body: i.body
                                        })];
                                    case 2:
                                        throw r.sent();
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, e.getAPIURL = function(e) {
                        return new URL(e, i.p.config.apiBaseURL)
                    }, e.constructLegacyAPIResponse = function(e) {
                        return n.__awaiter(this, void 0, Promise, function() {
                            var t, a, i, r;
                            return n.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        t = {
                                            status: e.status
                                        }, n.label = 1;
                                    case 1:
                                        return n.trys.push([1, 3, , 4]), [4, e.json()];
                                    case 2:
                                        return a = n.sent(), e.ok ? t.body = a : t.error = a, [3, 4];
                                    case 3:
                                        return i = n.sent(), e.headers && e.headers.get && (r = e.headers.get("Content-Type")) && -1 !== r.indexOf("application/json") && (t.requestError = i), [3, 4];
                                    case 4:
                                        return [2, t]
                                }
                            })
                        })
                    }, e._fetch = function(e, t) {
                        return void 0 === t && (t = {}), n.__awaiter(this, void 0, Promise, function() {
                            return n.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, fetch(this.getAPIURL(e).toString(), t)];
                                    case 1:
                                        return [2, a.sent()]
                                }
                            })
                        })
                    }, e.constructOptions = function(e, t) {
                        return e = Object.assign({}, e, {
                            headers: n.__assign({}, this.getDefaultHeaders(e, t), e.headers)
                        })
                    }, e.serialize = function(e, t) {
                        return "application/json; charset=UTF-8" === t ? JSON.stringify(e) : "string" == typeof e ? e : e && FormData.prototype.isPrototypeOf(e) ? e : e ? (this.logger.error(new Error("Could not serialize this request body for the content-type provided."), "attempting to serialize object with a non-JSON content-type", {
                            contentType: t
                        }), null) : null
                    }, e.getDefaultHeaders = function(e, t) {
                        var a = i.p.store.getState(),
                            n = {
                                Accept: "application/vnd.twitchtv.v" + (t.version || 5) + "+json; charset=UTF-8",
                                "Accept-Language": "en-us",
                                "Client-ID": i.p.config.legacyClientID,
                                "X-Requested-With": "XMLHttpRequest"
                            };
                        e.body && FormData.prototype.isPrototypeOf(e.body) || (n["Content-Type"] = "application/json; charset=UTF-8");
                        var s = Object(r.e)(a);
                        return s && (n.Authorization = "OAuth " + s.authToken, s.legacyCSRFToken && (n["Twitch-Api-Token"] = s.legacyCSRFToken)), t.excludeHeaders && t.excludeHeaders.forEach(function(e) {
                            n[e] && delete n[e]
                        }), n
                    }, e.logger = i.p.logger.withCategory("legacy-api"), e
                }()
        },
        bDGO: function(e, t, a) {
            "use strict";
            a.r(t);
            var n, i = a("mrSG"),
                r = a("q1tI"),
                s = a("/MKj"),
                o = a("fvjX"),
                l = a("/7QA"),
                d = a("cZKs"),
                c = a("aCAx"),
                u = a("kOut"),
                g = a("Ue10");
            a("w4St");
            ! function(e) {
                e.TITLE = "edit-broadcast.title"
            }(n || (n = {}));
            var m = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleOnSubmit = function(e) {
                        e && t.props.closeModal()
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(g.Fb, {
                        className: "edit-broadcast__container",
                        background: g.r.Base,
                        padding: {
                            x: 2,
                            y: 3
                        }
                    }, r.createElement(g.Ya, {
                        "data-test-selector": n.TITLE,
                        margin: {
                            bottom: 1
                        }
                    }, r.createElement(g.W, {
                        type: g.Wb.H4
                    }, Object(l.d)("Broadcast Options", "EditBroadcastModal"))), r.createElement(g.Fb, {
                        borderTop: !0,
                        margin: {
                            top: 2
                        },
                        padding: {
                            top: 2
                        }
                    }, r.createElement(u.a, {
                        cancelComponent: r.createElement(g.Ya, {
                            margin: {
                                left: 1
                            }
                        }, r.createElement(g.z, {
                            onClick: this.props.closeModal,
                            type: g.F.Text
                        }, Object(l.d)("Cancel", "EditBroadcastModal"))),
                        onSubmit: this.handleOnSubmit,
                        channelLogin: this.props.channelLogin
                    })), r.createElement(d.a, null))
                }, t
            }(r.Component);
            var p = Object(s.connect)(null, function(e) {
                return Object(o.bindActionCreators)({
                    closeModal: c.c
                }, e)
            })(m);
            a.d(t, "TestSelectors", function() {
                return n
            }), a.d(t, "EditBroadcastModalComponent", function() {
                return m
            }), a.d(t, "EditBroadcastModal", function() {
                return p
            })
        },
        dzJR: function(e, t, a) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "CategoryTags"
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
                    end: 209
                }
            };
            n.loc.source = {
                body: '#import "twilight/features/tags/models/broadcast-tag-fragment.gql"\nquery CategoryTags($gameName: String! $tagType: TagType!) {\ngame(name: $gameName) {\nid\ntags(tagType: $tagType) {\n...broadcastTagFragment\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var i = {};
            n.definitions = n.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !i[t] && (i[t] = !0, !0)
                })
            }(a("Iqxx").definitions)), e.exports = n
        },
        iUE2: function(e, t, a) {},
        kOut: function(e, t, a) {
            "use strict";
            var n, i, r, s, o = a("mrSG"),
                l = a("cr+I"),
                d = a("q1tI"),
                c = a("oJmH"),
                u = a("/7QA"),
                g = a("0ly3"),
                m = a("yR8l"),
                p = a("geRD"),
                h = a("DMoW"),
                f = a("b6Yk"),
                v = a("f00E"),
                b = a("N3I0"),
                T = a("GIun"),
                k = a("8/mp"),
                y = a("N0BP"),
                S = a("Ue10"),
                N = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onClick = function() {
                            t.props.onClick(t.props.game)
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        return d.createElement(S.Va, o.__assign({
                            onClick: this.onClick
                        }, Object(y.a)(this.props)), d.createElement(S.Ya, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, d.createElement(S.G, {
                            row: !0
                        }, d.createElement(S.I, {
                            alt: this.props.game.name,
                            src: "https://static-cdn.jtvnw.net/ttv-boxart/" + this.props.game.name + "-40x55.jpg",
                            size: S.J.Size3,
                            aspect: S.p.BoxArt
                        }), d.createElement(S.H, {
                            overflow: S.db.Hidden
                        }, d.createElement(S.Qa, {
                            padding: {
                                x: 1
                            }
                        }, d.createElement(S.W, {
                            type: S.Wb.P
                        }, this.props.game.name))))))
                    }, t
                }(d.Component),
                C = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.gameSearch = null, t.setGameSearchRef = function(e) {
                            t.gameSearch = e
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                        this.gameSearch && e.isGameSearchOpen !== this.props.isGameSearchOpen && this.gameSearch.toggle(e.isGameSearchOpen), this.gameSearch && e.selectedGame !== this.props.selectedGame && this.gameSearch.setValue(e.selectedGame)
                    }, t.prototype.componentDidMount = function() {
                        this.gameSearch && this.gameSearch.setValue(this.props.selectedGame)
                    }, t.prototype.render = function() {
                        var e = this,
                            t = Object(u.d)("Category", "GameSearch"),
                            a = Object(u.d)("Search for a category", "GameSearch");
                        return d.createElement(S.Ea, {
                            error: this.props.error,
                            errorMessage: this.props.errorMessage,
                            label: t
                        }, d.createElement(b.a, {
                            onChange: this.props.onGameInputChange,
                            ref: this.setGameSearchRef,
                            placeholder: a,
                            balloonProps: {
                                show: this.props.isGameSearchOpen,
                                direction: S.v.Bottom
                            }
                        }, d.createElement(k.b, {
                            className: "edit-broadcast__game-search",
                            suppressScrollX: !0
                        }, d.createElement("div", null, this.props.gameResults && this.props.gameResults.hits.map(function(t) {
                            return d.createElement(T.a, {
                                key: t.objectID
                            }, d.createElement(N, {
                                game: t,
                                onClick: e.props.onGameResultSelected,
                                key: t.objectID
                            }))
                        })))))
                    }, t
                }(d.Component),
                E = a("H/lO"),
                _ = a("NZDK"),
                F = 100,
                w = function(e) {
                    function t(t) {
                        var a = e.call(this, t) || this;
                        return a.state = {
                            gameResults: null,
                            gameTerm: "",
                            isGameSearchOpen: !1,
                            queryID: "",
                            isWaiting: !1
                        }, a.onGameInputChange = function(e) {
                            return o.__awaiter(a, void 0, void 0, function() {
                                var t = this;
                                return o.__generator(this, function(a) {
                                    return this.inputTimer && (clearTimeout(this.inputTimer), this.inputTimer = 0), e ? (this.setState({
                                        gameResults: null,
                                        isWaiting: !0
                                    }), this.inputTimer = setTimeout(function() {
                                        return t.doGameSearch(e)
                                    }, F), [2]) : (this.setState({
                                        isGameSearchOpen: !1,
                                        gameTerm: ""
                                    }), this.props.onGameCleared(), [2])
                                })
                            })
                        }, a.onGameResultSelected = function(e) {
                            a.setState({
                                isGameSearchOpen: !1
                            }), a.props.onGameResultSelected(e)
                        }, a.searchClient = new _.a({
                            appId: u.a.algoliaApplicationID,
                            apiKey: u.a.algoliaAPIKey,
                            apolloClient: u.p.apollo.client,
                            logger: u.k,
                            config: u.a,
                            stats: u.p.stats
                        }), a
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        return d.createElement(C, o.__assign({}, this.props, {
                            onGameInputChange: this.onGameInputChange,
                            isGameSearchOpen: this.state.isGameSearchOpen,
                            gameResults: this.state.gameResults,
                            selectedGame: this.props.selectedGame,
                            onGameResultSelected: this.onGameResultSelected
                        }))
                    }, t.prototype.doGameSearch = function(e) {
                        return o.__awaiter(this, void 0, void 0, function() {
                            var t, a, n;
                            return o.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return this.inputTimer = 0, t = Object(v.a)(), [4, this.setState({
                                            queryID: t
                                        })];
                                    case 1:
                                        i.sent(), a = null, i.label = 2;
                                    case 2:
                                        return i.trys.push([2, 4, , 5]), [4, this.searchClient.queryForType(E.a.Games, e, t)];
                                    case 3:
                                        return a = i.sent(), [3, 5];
                                    case 4:
                                        return n = i.sent(), u.k.error(n, "Algolia top results search failed"), [2, null];
                                    case 5:
                                        return a && a.games && 0 !== a.games.totalHits ? (this.setState({
                                            gameResults: a.games,
                                            isGameSearchOpen: !0
                                        }), [2]) : (this.setState({
                                            isGameSearchOpen: !1
                                        }), [2, null])
                                }
                            })
                        })
                    }, t
                }(d.Component),
                O = a("2Dck");
            ! function(e) {
                e.Title = "title", e.GoLiveNotification = "goLiveNotification", e.GameCategory = "gameCategory", e.Language = "language", e.Tags = "tags"
            }(n || (n = {})),
            function(e) {
                e.Empty = "empty", e.FailedAutomod = "failed_automod", e.FailedAutomodTitle = "failed_automod_title", e.NoError = "", e.TitleTooLong = "title-too-long"
            }(i || (i = {})),
            function(e) {
                e.BroadcastLanguageMode = "edit-broadcast__broadcast-language-mode-checkbox", e.GoLiveNotification = "edit-broadcast__go-live-notification", e.PrimaryContent = "edit-broadcast__primary-content", e.TitleLabel = "edit-broadcast__title-label", e.TitleInput = "edit-broadcast__title-input"
            }(r || (r = {})),
            function(e) {
                e.Complete = "complete", e.Errored = "errored", e.Fetching = "fetching", e.Ready = "ready"
            }(s || (s = {}));
            var I = a("GnwI"),
                A = a("lr7A"),
                D = a("HUHH"),
                L = a("aP55"),
                R = a("X6el");
            a("iUE2");

            function x(e) {
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
            var G = 2500,
                B = function(e) {
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
                                language: {
                                    value: "en"
                                },
                                tags: {}
                            },
                            gameResults: null,
                            loaded: !1,
                            queryID: null,
                            requestState: s.Ready,
                            selectedGame: "",
                            selectedTags: [],
                            modifiedTags: {}
                        }, t.setInitialState = function(e) {
                            var a = e.data,
                                n = a.currentUser,
                                i = a.user;
                            return o.__awaiter(t, void 0, void 0, function() {
                                var e, t;
                                return o.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            return n && n.id && i && i.id ? (e = i.id === n.id) ? [4, this.fetchGoLiveNotification(i.id)] : [3, 2] : [2];
                                        case 1:
                                            t = a.sent(), a.label = 2;
                                        case 2:
                                            return this.setState(function(a) {
                                                var n = o.__assign({}, a, {
                                                        loaded: !0
                                                    }),
                                                    r = i.broadcastSettings,
                                                    s = i.lastBroadcast,
                                                    l = i.stream,
                                                    d = l && l.tags || [];
                                                return r && (n.fields.language.value = r.language), n.fields.title.value = l && l.title || s && s.title || "", n.selectedGame = l && l.id && l.game && l.game.name || s && s.game && s.game.name || "", n.fields.goLiveNotification = {
                                                    isEnabled: e,
                                                    value: t
                                                }, n.selectedTags = d.map(function(e) {
                                                    return {
                                                        id: e.id,
                                                        tagName: e.tagName,
                                                        localizedName: e.localizedName,
                                                        isAutomated: e.isAutomated,
                                                        localizedDescription: e.localizedDescription
                                                    }
                                                }), n
                                            }, this.onLoad), [2]
                                    }
                                })
                            })
                        }, t.onLoad = function() {
                            t.props.latencyTracking.reportInteractive();
                            var e = t.props.onLoad;
                            e && e()
                        }, t.handleErrorByType = function(e) {
                            return function(a) {
                                t.setState(function(n) {
                                    var i = o.__assign({}, n);
                                    return i.fields[e].errorType = a, i.buttonDisabled = !t.areAllFieldsValid(i.fields), i
                                })
                            }
                        }, t.handleChangeByType = function(e) {
                            return function(a) {
                                var n = a.currentTarget.value;
                                t.setField(e, n)
                            }
                        }, t.setField = function(e, a) {
                            t.setState(function(r) {
                                var s = o.__assign({}, r);
                                return s.fields[e].value = t.normalizeString(a).slice(0, O.c).join(""), s.fields[e].errorType = function(e, t) {
                                    switch (t) {
                                        case n.Title:
                                            if (e.match(/^$/) && t === n.Title) return i.Empty;
                                        default:
                                        case n.GameCategory:
                                        case n.GoLiveNotification:
                                        case n.Language:
                                            return i.NoError
                                    }
                                }(a, e), s.buttonDisabled = !t.areAllFieldsValid(s.fields), s
                            })
                        }, t.getRemainingCharacters = function(e) {
                            return (O.c - (e && t.normalizeString(e).length || 0)).toString()
                        }, t.areAllFieldsValid = function(e) {
                            return Object.keys(e).reduce(function(t, a) {
                                return t && "tags" !== a ? !e[a].errorType : t
                            }, !0)
                        }, t.handleLanguageChange = function(e) {
                            t.setState(function(t) {
                                var a = o.__assign({}, t);
                                return a.fields.language.value = e, a
                            })
                        }, t.handleBroadcastLanguageModeEnabledChange = function(e) {
                            t.setState({
                                broadcasterLanguageModeEnabled: e.currentTarget.checked
                            })
                        }, t.handleGameCleared = function() {
                            return t.setState({
                                selectedGame: ""
                            })
                        }, t.handleGameResultSelected = function(e) {
                            t.setState({
                                selectedGame: e.name
                            })
                        }, t.handleTagResultSelected = function(e) {
                            t.setState(function(t) {
                                var a;
                                return {
                                    selectedTags: (t.selectedTags || []).concat([e]),
                                    modifiedTags: o.__assign({}, t.modifiedTags, (a = {}, a[e.id] = !0, a))
                                }
                            })
                        }, t.handleRemoveTag = function(e) {
                            t.handleErrorByType(n.Tags)("");
                            var a = e.currentTarget.dataset.idx;
                            a && t.setState(function(e) {
                                var t, n = e.selectedTags.slice();
                                return n.splice(parseInt(a, 10), 1), {
                                    selectedTags: n,
                                    modifiedTags: o.__assign({}, e.modifiedTags, (t = {}, t[e.selectedTags[parseInt(a, 10)].id] = !1, t))
                                }
                            })
                        }, t.handleSubmit = function() {
                            return o.__awaiter(t, void 0, void 0, function() {
                                var e, t, a, n, i, r = this;
                                return o.__generator(this, function(l) {
                                    switch (l.label) {
                                        case 0:
                                            return (e = this.props.data.user && this.props.data.user.id) ? (this.setState({
                                                buttonDisabled: !0,
                                                requestState: s.Fetching
                                            }), [4, Promise.all([this.updateChannel(e), this.updateGoLiveNotification(e), this.updateChannelBroadcasterLanguageEnabled(e), this.updateChannelTags(e)])]) : [3, 3];
                                        case 1:
                                            return t = l.sent(), [4, this.props.data.refetch()];
                                        case 2:
                                            l.sent(), a = o.__assign({}, this.state.fields), n = t.reduce(function(e, t) {
                                                var n = t && t.errorType;
                                                return t && (a[t.fieldType].errorType = n), e || !!n
                                            }, !1), this.setState({
                                                buttonDisabled: n,
                                                fields: a,
                                                requestState: n ? s.Errored : s.Complete
                                            }), (i = this.props.onSubmit) && i(!n), setTimeout(function() {
                                                r.setState({
                                                    requestState: s.Ready,
                                                    buttonDisabled: !1
                                                })
                                            }, G), l.label = 3;
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        }, t.fetchGoLiveNotification = function(e) {
                            return o.__awaiter(t, void 0, void 0, function() {
                                var t, a;
                                return o.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return t = "/kraken/users/" + e + "/notifications/custom?notification_type=streamup", [4, f.a.get(t)];
                                        case 1:
                                            return (a = n.sent()).body && !a.error ? [2, a.body.is_default ? "" : a.body.message] : [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                        var t = this.props.data.user,
                            a = e.data.user;
                        a && a.chatSettings && a.chatSettings.isBroadcasterLanguageModeEnabled !== this.state.broadcasterLanguageModeEnabled && this.setState({
                            broadcasterLanguageModeEnabled: a.chatSettings.isBroadcasterLanguageModeEnabled
                        }), !t && a && this.setInitialState(e);
                        var i = t && t.broadcastSettings,
                            r = a && a.broadcastSettings;
                        if (i && r) {
                            r.title && i.title !== r.title && this.setField(n.Title, r.title);
                            var s = i.game && i.game.name,
                                o = r.game && r.game.name;
                            o && s !== o && (this.setField(n.GameCategory, o), this.setState({
                                selectedGame: o
                            }))
                        }
                    }, t.prototype.componentDidMount = function() {
                        this.props.data.user && this.setInitialState(this.props)
                    }, t.prototype.render = function() {
                        var e = this.props.cancelComponent,
                            t = this.state.requestState;
                        return this.props.data.error ? null : d.createElement(S.Ya, {
                            fullHeight: !0,
                            display: S.X.Flex,
                            flexDirection: S.Aa.Column,
                            alignItems: S.f.Center,
                            justifyContent: S.Xa.Center
                        }, d.createElement(S.Ya, {
                            fullWidth: !0
                        }, this.getContent(), d.createElement(S.Ya, {
                            margin: {
                                bottom: 2
                            }
                        }, d.createElement(S.U, {
                            targetBlank: !0,
                            to: O.b
                        }, Object(u.d)("Your content must follow our guidelines", "EditBroadcastComponent"))), d.createElement(S.Ya, {
                            alignItems: S.f.Start,
                            display: S.X.Flex,
                            flexDirection: S.Aa.Row,
                            fullWidth: !0,
                            justifyContent: S.Xa.Start,
                            margin: {
                                top: 1
                            }
                        }, d.createElement(S.z, {
                            disabled: !this.state.loaded || this.state.buttonDisabled || t === s.Fetching || t === s.Errored,
                            fullWidth: !e,
                            icon: t === s.Complete ? S.ub.Check : void 0,
                            onClick: this.handleSubmit,
                            state: t === s.Complete ? S.E.Success : S.E.Default
                        }, this.getButtonText()), e || null)))
                    }, t.prototype.getButtonText = function() {
                        switch (this.state.requestState) {
                            case s.Complete:
                                return "";
                            case s.Errored:
                                return Object(u.d)("An error occurred", "EditBroadcastComponent");
                            case s.Fetching:
                                return Object(u.d)("Updating...", "EditBroadcastComponent");
                            default:
                            case s.Ready:
                                var e = this.props.submitText;
                                return void 0 !== e ? e : Object(u.d)("Done", "EditBroadcastComponent")
                        }
                    }, t.prototype.getContent = function() {
                        var e;
                        if (this.props.data && this.props.data.currentUser && this.props.data.user && this.props.data.user.stream && !this.props.data.loading && this.state.loaded) {
                            var t = this.state.fields,
                                a = t.title,
                                i = t.goLiveNotification,
                                s = t.gameCategory,
                                o = x(a.errorType),
                                l = x(i.errorType),
                                c = x(s.errorType);
                            e = d.createElement(d.Fragment, null, d.createElement(S.Ya, {
                                "data-test-selector": r.PrimaryContent,
                                margin: {
                                    bottom: 2
                                }
                            }, d.createElement(S.Ea, {
                                "data-test-selector": r.TitleLabel,
                                error: !!o,
                                errorMessage: o,
                                label: Object(u.d)("Title", "EditBroadcastComponent"),
                                labelOptional: this.getRemainingCharacters(a.value)
                            }, d.createElement(S.Tb, {
                                "data-test-selector": r.TitleInput,
                                onChange: this.handleChangeByType(n.Title),
                                noResize: !0,
                                placeholder: Object(u.d)("Enter a title", "EditBroadcastComponent"),
                                rows: 3,
                                value: this.state.fields.title.value
                            }))), this.state.fields.goLiveNotification.isEnabled && d.createElement(S.Ya, {
                                margin: {
                                    bottom: 2
                                }
                            }, d.createElement(S.Ea, {
                                error: !!l,
                                errorMessage: l,
                                label: Object(u.d)("Go Live Notification", "EditBroadcastComponent"),
                                labelOptional: this.getRemainingCharacters(i.value)
                            }, d.createElement(S.Tb, {
                                "data-test-selector": r.GoLiveNotification,
                                noResize: !0,
                                onChange: this.handleChangeByType(n.GoLiveNotification),
                                placeholder: Object(u.d)("{channelName} went live!", {
                                    channelName: this.props.channelLogin
                                }, "EditBroadcastComponent"),
                                rows: 3,
                                value: this.state.fields.goLiveNotification.value
                            }))), d.createElement(S.Ya, {
                                margin: {
                                    bottom: 2
                                }
                            }, d.createElement(w, {
                                error: !!c,
                                errorMessage: c,
                                onGameResultSelected: this.handleGameResultSelected,
                                onGameCleared: this.handleGameCleared,
                                selectedGame: this.state.selectedGame
                            })), this.renderTagSelect(), d.createElement(S.Ya, {
                                margin: {
                                    bottom: 1
                                }
                            }, d.createElement(g.a, {
                                label: Object(u.d)("Language", "EditBroadcastComponent"),
                                onChange: this.handleLanguageChange,
                                defaultLanguage: this.state.fields.language.value || "en",
                                disabled: !1
                            }), d.createElement(S.Ya, {
                                margin: {
                                    top: .5
                                }
                            }, d.createElement(S.N, {
                                label: Object(u.d)("Restrict Chat Language", "EditBroadcastComponent"),
                                onChange: this.handleBroadcastLanguageModeEnabledChange,
                                checked: this.state.broadcasterLanguageModeEnabled,
                                "data-test-selector": r.BroadcastLanguageMode
                            }))))
                        } else e = d.createElement(S.Ya, {
                            fullWidth: !0,
                            padding: {
                                y: 2
                            }
                        }, d.createElement(S.ab, {
                            fillContent: !0
                        }));
                        return e
                    }, t.prototype.renderTagSelect = function() {
                        var e = x(this.state.fields.tags.errorType);
                        return d.createElement(S.Ya, {
                            margin: {
                                bottom: 2
                            }
                        }, d.createElement(A.a, {
                            error: !!e,
                            errorMessage: e,
                            gameName: this.state.selectedGame,
                            setError: this.handleErrorByType(n.Tags),
                            onRemoveTag: this.handleRemoveTag,
                            onTagResultSelected: this.handleTagResultSelected,
                            selectedTags: this.state.selectedTags,
                            showAllDashboardTags: !0,
                            showHelpButton: !0
                        }))
                    }, t.prototype.normalizeString = function(e) {
                        return Array.from(e.normalize ? e.normalize("NFC") : e)
                    }, t.prototype.updateChannel = function(e) {
                        return o.__awaiter(this, void 0, void 0, function() {
                            var t, a, r, s;
                            return o.__generator(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        return t = {
                                            "channel[broadcaster_language]": this.state.fields.language.value,
                                            "channel[game]": this.state.selectedGame,
                                            "channel[status]": this.state.fields.title.value || "",
                                            on_site: "1"
                                        }, a = "/kraken/channels/" + e, [4, f.a.put(a, {
                                            body: l.stringify(t, {
                                                arrayFormat: "bracket"
                                            }),
                                            headers: O.a
                                        })];
                                    case 1:
                                        if (r = o.sent().error) {
                                            if ((s = r.message).includes("Title is too long")) return [2, {
                                                errorType: i.TitleTooLong,
                                                fieldType: n.Title
                                            }];
                                            if (s.includes("Status contains banned words")) return [2, {
                                                errorType: i.FailedAutomodTitle,
                                                fieldType: n.Title
                                            }]
                                        }
                                        return [2]
                                }
                            })
                        })
                    }, t.prototype.updateGoLiveNotification = function(e) {
                        return o.__awaiter(this, void 0, void 0, function() {
                            var t, a;
                            return o.__generator(this, function(i) {
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
                                        if (a = i.sent().error) return [2, {
                                            errorType: a && a.message,
                                            fieldType: n.GoLiveNotification
                                        }];
                                        i.label = 2;
                                    case 2:
                                        return [2]
                                }
                            })
                        })
                    }, t.prototype.updateChannelBroadcasterLanguageEnabled = function(e) {
                        return o.__awaiter(this, void 0, void 0, function() {
                            var t, a, n, i, r, s, l, d, c;
                            return o.__generator(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        return t = this.props, a = t.channelLogin, n = t.data.user, i = t.updateChatSettings, r = this.state.broadcasterLanguageModeEnabled, i && n && n.chatSettings && n.chatSettings.isBroadcasterLanguageModeEnabled !== r ? (s = {
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
                                        }, [4, i(Object(p.b)(s, l))]) : [2];
                                    case 1:
                                        return d = o.sent(), c = function(e) {
                                            return n.chatSettings && d.data.updateChatSettings && d.data.updateChatSettings.chatSettings && (n.chatSettings.isBroadcasterLanguageModeEnabled = d.data.updateChatSettings.chatSettings.isBroadcasterLanguageModeEnabled), e
                                        }, Object(p.e)(R, {
                                            login: a
                                        }, c), [2]
                                }
                            })
                        })
                    }, t.prototype.updateChannelTags = function(e) {
                        return o.__awaiter(this, void 0, void 0, function() {
                            var t, a, n, i, r, s;
                            return o.__generator(this, function(l) {
                                switch (l.label) {
                                    case 0:
                                        if (!this.state.selectedTags) return [2];
                                        for (i in t = [], a = [], n = this.state.modifiedTags) !0 === n[i] ? t.push(i) : a.push(i);
                                        return 0 === t.length && 0 === a.length ? [2] : (r = {
                                            contentID: e,
                                            contentType: h.q.LIVE_CHANNEL,
                                            addedTagIDs: t,
                                            removedTagIDs: a,
                                            authorID: e
                                        }, s = {
                                            updateContentTags: {
                                                __typename: "UpdateContentTagsPayload",
                                                content: {
                                                    id: e,
                                                    tags: this.state.selectedTags.map(function(e) {
                                                        return o.__assign({}, e, {
                                                            __typename: "Tag"
                                                        })
                                                    }),
                                                    __typename: "Stream"
                                                }
                                            }
                                        }, [4, this.props.updateChannelTags(Object(p.b)(r, s))]);
                                    case 1:
                                        return l.sent(), [2]
                                }
                            })
                        })
                    }, t
                }(d.Component),
                j = Object(c.compose)(Object(I.b)("EditBroadcast"), Object(m.a)(R, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            variables: {
                                login: e.channelLogin
                            }
                        }
                    }
                }), Object(m.a)(L, {
                    name: "updateChatSettings"
                }), Object(m.a)(D, {
                    name: "updateChannelTags"
                }))(B);
            a.d(t, !1, function() {
                return B
            }), a.d(t, "a", function() {
                return j
            })
        },
        lr7A: function(e, t, a) {
            "use strict";
            var n, i = a("mrSG"),
                r = a("q1tI"),
                s = a("/7QA"),
                o = a("yR8l"),
                l = a("DMoW"),
                d = a("FsIG"),
                c = a("C29h"),
                u = a("Ue10"),
                g = a("dzJR"),
                m = (a("sEux"), 5e3);
            ! function(e) {
                e.NoTagsSelected = "no-tags-selected", e.SelectedTag = "selected-tag"
            }(n || (n = {}));
            var p = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.timeoutId = null, t.renderErrorMessage = function() {
                            if (t.props.error && t.props.errorMessage) return r.createElement(u.Ya, {
                                margin: {
                                    top: .5
                                }
                            }, r.createElement(u.Da, {
                                errorMessage: t.props.errorMessage
                            }))
                        }, t.renderTagSearch = function() {
                            return t.props.readOnly ? null : r.createElement(c.a, {
                                categoryName: t.props.gameName,
                                onInputChange: t.props.onChange,
                                onTagClick: t.onTagResultSelected,
                                selectedTags: t.props.selectedTags,
                                showAllDashboardTags: t.props.showAllDashboardTags,
                                type: c.b.TagAllMinusAutomation
                            })
                        }, t.onTagResultSelected = function(e) {
                            if (5 === t.props.selectedTags.filter(function(e) {
                                    return !e.isAutomated
                                }).length && t.props.setError) return t.props.setError(Object(s.d)("You can only select up to 5 tags at the same time.", "TagSelectorSearch")), t.clearExistingTimeout(), void(t.timeoutId = setTimeout(function() {
                                t && t.props && t.props.setError && t.props.setError("")
                            }, m));
                            t.props.selectedTags.map(function(e) {
                                return e.id
                            }).includes(e.id) || t.props.onTagResultSelected && t.props.onTagResultSelected(e)
                        }, t.clearExistingTimeout = function() {
                            t.timeoutId && clearTimeout(t.timeoutId)
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentWillUnmount = function() {
                        this.clearExistingTimeout()
                    }, t.prototype.render = function() {
                        var e = Object(s.d)("Tags", "TagSelectorSearch");
                        return r.createElement(u.Ya, null, r.createElement(u.Ya, {
                            display: u.X.Flex,
                            justifyContent: u.Xa.Between
                        }, r.createElement(u.Ha, {
                            id: Object(d.b)(e),
                            label: e
                        }), this.renderHelpButton()), r.createElement(u.Ya, {
                            alignContent: u.e.Center
                        }, r.createElement(u.Ya, {
                            position: u.kb.Relative,
                            margin: {
                                y: .5
                            }
                        }, this.renderTagSearch()), this.renderErrorMessage(), this.renderSelectedTags()))
                    }, t.prototype.renderSelectedTags = function() {
                        var e = this,
                            t = this.props.data && this.props.data.game && this.props.data.game.tags;
                        if (0 === this.props.selectedTags.length && !this.props.readOnly && (!t || t && !t.length)) return null;
                        if (0 === this.props.selectedTags.length && (!t || t && !t.length)) return r.createElement(u.Ya, {
                            "data-test-selector": n.NoTagsSelected
                        }, r.createElement(u.Sa, {
                            type: u.Ua.Text,
                            placeholder: Object(s.d)("No tags were selected", "TagSelectorSearch"),
                            disabled: !0
                        }));
                        var a = [],
                            i = this.props.selectedTags.map(function(t, a) {
                                return r.createElement(u.Ya, {
                                    display: u.X.InlineBlock,
                                    margin: {
                                        right: .5,
                                        bottom: .5
                                    },
                                    key: t.id + "_" + a
                                }, r.createElement(u.Pb, {
                                    "data-test-selector": n.SelectedTag,
                                    action: t.isAutomated ? void 0 : u.Qb.Remove,
                                    label: t.localizedName || t.tagName,
                                    key: t.id,
                                    onClick: t.isAutomated ? void 0 : e.props.onRemoveTag,
                                    "data-idx": a
                                }))
                            });
                        return t && (a = t.map(function(e, t) {
                            return r.createElement(u.Ya, {
                                display: u.X.InlineBlock,
                                margin: {
                                    right: .5,
                                    bottom: .5
                                },
                                key: e.id + "_" + t
                            }, r.createElement(u.Pb, {
                                "data-test-selector": n.SelectedTag,
                                action: void 0,
                                label: e.localizedName || e.tagName,
                                key: e.id,
                                onClick: void 0,
                                "data-idx": t
                            }))
                        })), r.createElement(u.Ya, {
                            margin: {
                                top: .5
                            },
                            padding: {
                                left: .5,
                                top: .5
                            },
                            className: "selected-tags"
                        }, i.concat(a))
                    }, t.prototype.renderHelpButton = function() {
                        return this.props.showHelpButton ? r.createElement(u.Ya, null, Object(s.d)("<x:link>Learn More</x:link>", {
                            "x:link": function(e) {
                                return r.createElement(u.U, {
                                    to: "https://link.twitch.tv/learntags"
                                }, e)
                            }
                        }, "TagSuggestions")) : null
                    }, t
                }(r.Component),
                h = Object(o.a)(g, {
                    options: function(e) {
                        return {
                            variables: {
                                gameName: e.gameName || "",
                                tagType: l.X.CONTENT
                            }
                        }
                    },
                    skip: function(e) {
                        return !e.gameName
                    }
                })(p);
            a.d(t, !1, function() {
                return n
            }), a.d(t, !1, function() {
                return p
            }), a.d(t, "a", function() {
                return h
            })
        },
        sEux: function(e, t, a) {},
        w4St: function(e, t, a) {},
        y5I9: function(e, t, a) {
            "use strict";

            function n(e, t) {
                return e.length !== t.length || e.some(function(e, a) {
                    return t[a] !== e
                })
            }

            function i(e, t) {
                var a = e || [],
                    n = t || [];
                return a.length !== n.length || a.some(function(e, t) {
                    return e.id !== n[t].id
                })
            }
            a.d(t, "a", function() {
                return n
            }), a.d(t, "b", function() {
                return i
            })
        }
    }
]);