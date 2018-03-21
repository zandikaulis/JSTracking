webpackJsonp([78], {
    "/brc": function(e, t) {},
    "4o7v": function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
        });
        var i = n("TToO"),
            o = n("GiK3"),
            a = (n.n(o), n("5kgt")),
            l = n("Odds"),
            r = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = o.createElement(l._4, {
                            alignItems: l.c.Center,
                            display: l.P.Flex,
                            fullHeight: !0,
                            justifyContent: l._3.Center,
                            padding: 2
                        }, o.createElement(l._26, {
                            icon: this.props.icon,
                            label: this.props.label,
                            value: this.props.value
                        })),
                        t = this.props.linkTo ? o.createElement(l._2, {
                            alpha: !0,
                            linkTo: this.props.linkTo,
                            targetBlank: !0
                        }, e) : e;
                    return o.createElement(l._4, i.__assign({
                        display: l.P.InlineFlex,
                        fullHeight: !0
                    }, Object(a.a)(this.props)), t)
                }, t
            }(o.Component)
    },
    "8wGL": function(e, t, n) {
        var i = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "CollectionEditor_AddCollectionItem"
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
                                value: "AddCollectionItemInput"
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
                            value: "addCollectionItem"
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
                                    value: "collection"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "collectionFields"
                                        },
                                        directives: []
                                    }, {
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "itemConnection"
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
                end: 413
            }
        };
        i.loc.source = {
            body: '#import "twilight/pages/video-tools/pages/collection-editor/components/collection-editor-page/collection-fragment.gql"\n#import "twilight/pages/video-tools/pages/collection-editor/components/collection-editor-page/item-connection-fragment.gql"\nmutation CollectionEditor_AddCollectionItem($input: AddCollectionItemInput!) {\naddCollectionItem(input: $input) {\ncollection {\n...collectionFields\n...itemConnection\n}\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var o = {};

        function a(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !o[t] && (o[t] = !0, !0)
            })
        }
        i.definitions = i.definitions.concat(a(n("OEl7").definitions)), i.definitions = i.definitions.concat(a(n("9Gwb").definitions)), e.exports = i
    },
    "9Gwb": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "itemConnection"
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
                                value: "50"
                            }
                        }],
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
                                                kind: "InlineFragment",
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
                                                            value: "lengthSeconds"
                                                        },
                                                        arguments: [],
                                                        directives: []
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
                                                                value: "240"
                                                            }
                                                        }, {
                                                            kind: "Argument",
                                                            name: {
                                                                kind: "Name",
                                                                value: "height"
                                                            },
                                                            value: {
                                                                kind: "IntValue",
                                                                value: "135"
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
                                                            value: "viewCount"
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
                end: 378
            }
        };
        n.loc.source = {
            body: "fragment itemConnection on Collection {\n# Request the max (50 atm) because we support drag and drop\n# reordering which makes little sense at the moment without all the items\nitems(first: 50) {\ntotalCount\npageInfo {\nhasNextPage\n}\nedges {\ncursor\nnode {\n... on Video {\nid\nbroadcastType\ntitle\nlengthSeconds\npreviewThumbnailURL(width: 240 height: 135)\npublishedAt\nviewCount\n}\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    Dz2i: function(e, t, n) {
        var i = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "CollectionManager_EditCollection"
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
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "collectionFields"
                                },
                                directives: []
                            }, {
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "itemConnection"
                                },
                                directives: []
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 377
            }
        };
        i.loc.source = {
            body: '#import "twilight/pages/video-tools/pages/collection-editor/components/collection-editor-page/collection-fragment.gql"\n#import "twilight/pages/video-tools/pages/collection-editor/components/collection-editor-page/item-connection-fragment.gql"\nquery CollectionManager_EditCollection($collectionID: ID!) {\ncollection(id: $collectionID) {\n...collectionFields\n...itemConnection\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var o = {};

        function a(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !o[t] && (o[t] = !0, !0)
            })
        }
        i.definitions = i.definitions.concat(a(n("OEl7").definitions)), i.definitions = i.definitions.concat(a(n("9Gwb").definitions)), e.exports = i
    },
    KO2S: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i, o = n("TToO"),
            a = n("GiK3"),
            l = n("3zLD"),
            r = n("i61F"),
            c = n("6sO2"),
            d = n("zCIC"),
            s = n("j7/Y"),
            u = n("w9tK"),
            m = n("vH/s"),
            p = n("CSlQ"),
            v = n("8/8b"),
            h = n("RH2O"),
            f = n("V5M+"),
            g = n("+8VM"),
            k = n("O8Ns"),
            C = n("rH6M"),
            b = n("8wGL"),
            E = n("oIkB"),
            _ = function(e, t, n, i) {
                return o.__assign({}, Object(E.a)({
                    itemID: t,
                    collectionID: e.id,
                    position: n,
                    itemType: k.a.Video
                }), {
                    optimisticResponse: {
                        reorderCollectionItem: {
                            __typename: "ReorderCollectionItemPayload",
                            collection: o.__assign({}, e, {
                                __typename: "Collection",
                                items: o.__assign({}, e.items, {
                                    edges: i
                                })
                            })
                        }
                    }
                })
            },
            y = function(e, t, n) {
                return o.__assign({}, Object(E.a)({
                    collectionID: e.id,
                    itemID: t,
                    itemType: n
                }))
            },
            S = n("Odds"),
            I = n("j5vp");
        n("kt/X");
        ! function(e) {
            e[e.AddVideoButton = 0] = "AddVideoButton", e[e.DoneButton = 1] = "DoneButton"
        }(i || (i = {}));
        var N = 200,
            O = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        addItemError: !1
                    }, t.onVideoSelectHandler = function(e) {
                        t.setState({
                            addItemError: !0
                        }, function() {
                            return o.__awaiter(t, void 0, void 0, function() {
                                var t;
                                return o.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return n.trys.push([0, 2, , 3]), [4, this.props.addCollectionItem(y(this.props.collection, e, k.a.Video))];
                                        case 1:
                                            return n.sent(), [3, 3];
                                        case 2:
                                            return t = n.sent(), c.j.error(t, "Failed adding item to collection"), this.setState({
                                                addItemError: !0
                                            }), [3, 3];
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        })
                    }, t.onLoadMoreHandler = function() {
                        if (!t.props.data.user || !t.props.data.user.searchVideos) return Promise.reject(new Error("Encountered unexpected null value for user or searchVideos, cannot load more."));
                        var e = t.props.data.user.searchVideos.edges.length - 1,
                            n = t.props.data.user.searchVideos.edges[e].cursor;
                        return t.props.data.fetchMore({
                            query: I,
                            variables: {
                                creatorID: t.props.collection.owner.id,
                                after: n
                            },
                            updateQuery: D
                        }).then(function() {})
                    }, t.onCompleteClickHandler = function() {
                        t.props.onComplete()
                    }, t.onSearchInputChangeHandler = function(e) {
                        var n = e.currentTarget.value;
                        t.state.searchChangeTimeoutID && clearTimeout(t.state.searchChangeTimeoutID);
                        var i = setTimeout(function() {
                            return o.__awaiter(t, void 0, void 0, function() {
                                return o.__generator(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return e.trys.push([0, , 2, 3]), [4, this.props.data.refetch({
                                                creatorID: this.props.collection.owner.id,
                                                search: {
                                                    term: n
                                                }
                                            })];
                                        case 1:
                                            return e.sent(), [3, 3];
                                        case 2:
                                            return this.setState({
                                                searchChangeTimeoutID: void 0
                                            }), [7];
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        }, N);
                        t.setState({
                            searchChangeTimeoutID: i
                        })
                    }, t
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    var e = !!(this.props.data.user && this.props.data.user.searchVideos && this.props.data.user.searchVideos.pageInfo.hasNextPage);
                    return a.createElement(S.e, {
                        type: S.i.FadeIn,
                        delay: S.f.Medium,
                        duration: S.g.Medium,
                        enabled: !0
                    }, a.createElement(S._27, {
                        background: S.m.Base,
                        className: "collection-editor-item-selector",
                        padding: {
                            x: 3,
                            y: 2
                        }
                    }, a.createElement(S.O, {
                        fontSize: S.T.Size4
                    }, Object(c.d)("Add videos to collection", "CollectionItemSelectorModal")), a.createElement(S._4, {
                        padding: {
                            y: 1
                        }
                    }, a.createElement(S.U, {
                        label: Object(c.d)("Search your videos", "CollectionItemSelectorModal")
                    }, a.createElement(S._20, {
                        onChange: this.onSearchInputChangeHandler,
                        placeholder: Object(c.d)("Filter by video title", "CollectionItemSelectorModal")
                    }))), a.createElement(d.b, {
                        suppressScrollX: !0
                    }, a.createElement(S._4, {
                        display: S.P.Flex,
                        flexDirection: S.R.Column
                    }, this.renderVideoSelectors(), a.createElement(d.a, {
                        enabled: e,
                        loadMore: this.onLoadMoreHandler
                    }))), a.createElement(S._4, {
                        display: S.P.Flex,
                        justifyContent: S._3.Center,
                        margin: {
                            top: 2
                        }
                    }, a.createElement(S.u, {
                        "data-test-selector": i.DoneButton,
                        onClick: this.onCompleteClickHandler
                    }, Object(c.d)("Done", "CollectionItemSelectorModal"))), a.createElement(g.a, {
                        closeOnBackdropClick: !0
                    })))
                }, t.prototype.componentWillUnmount = function() {
                    this.state.searchChangeTimeoutID && clearTimeout(this.state.searchChangeTimeoutID)
                }, t.prototype.renderVideoSelectors = function() {
                    var e = this;
                    if (this.state.searchChangeTimeoutID || this.props.data.loading) return a.createElement(S._6, {
                        fillContent: !0,
                        delay: 500
                    });
                    if (this.props.data.error || !this.props.data.user || !this.props.data.user.searchVideos) return a.createElement("div", null);
                    var t = this.props.data.user.searchVideos.edges.map(function(e) {
                        return e.node
                    });
                    return 0 === t.length ? a.createElement("div", null) : t.map(function(n, o) {
                        return a.createElement(S._4, {
                            alignItems: S.c.Center,
                            display: S.P.Flex,
                            flexDirection: S.R.Row,
                            flexGrow: 1,
                            key: o,
                            padding: {
                                y: .5
                            }
                        }, a.createElement(S._4, {
                            flexGrow: 1,
                            flexShrink: 1,
                            padding: {
                                right: .5
                            }
                        }, a.createElement(C.a, {
                            video: n
                        })), a.createElement(S._4, {
                            flexGrow: 0,
                            flexShrink: 0
                        }, a.createElement(S.u, {
                            "data-test-selector": i.AddVideoButton,
                            onClick: function() {
                                e.onVideoSelectHandler(t[o].id)
                            }
                        }, Object(c.d)("Add", "CollectionItemSelectorModal"))))
                    })
                }, t
            }(a.Component),
            D = function(e, t) {
                if (!t.fetchMoreResult) return e;
                var n = t.fetchMoreResult;
                return n.user && n.user.searchVideos ? {
                    user: o.__assign({}, n.user, {
                        searchVideos: o.__assign({}, n.user.searchVideos, {
                            edges: e.user.searchVideos.edges.concat(n.user.searchVideos.edges)
                        })
                    })
                } : e
            },
            w = Object(l.compose)(Object(l.graphql)(I, {
                options: {
                    variables: function(e) {
                        return {
                            creatorID: e.collection.owner.id
                        }
                    }
                }
            }), Object(l.graphql)(b, {
                name: "addCollectionItem"
            }))(O);
        var x, F = Object(h.b)(null, function(e, t) {
                return {
                    onComplete: function() {
                        t.onComplete(), e(Object(f.c)())
                    }
                }
            })(w),
            T = n("M0wY"),
            V = n("kk4f"),
            j = n("jcM9"),
            M = n("btUQ");
        ! function(e) {
            e[e.AddVideos = 0] = "AddVideos", e[e.DeleteButton = 1] = "DeleteButton", e[e.ErrorMessage = 2] = "ErrorMessage", e[e.PlayAllButton = 3] = "PlayAllButton", e[e.SaveButton = 4] = "SaveButton", e[e.Thumbnail = 5] = "Thumbnail"
        }(x || (x = {}));
        var A = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isEditingTitle: !1,
                        newTitle: null,
                        saveError: !1
                    }, t.onAddVideosClickHandler = function() {
                        t.props.onAddVideosClick(t.props.collection, t.props.onVideosChange)
                    }, t.onDeleteOptionClickHandler = function() {
                        t.props.onDeleteOptionClick(t.props.collection)
                    }, t.onTitleChange = function(e) {
                        t.setState({
                            isEditingTitle: !0,
                            newTitle: e.currentTarget.value
                        })
                    }, t.onSaveClick = function() {
                        return o.__awaiter(t, void 0, void 0, function() {
                            var e;
                            return o.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        if (!this.state.newTitle) return [2];
                                        this.setState({
                                            saveError: !1
                                        }), t.label = 1;
                                    case 1:
                                        return t.trys.push([1, 3, , 4]), [4, this.props.updateCollection(this.buildMutation(this.props.collection.id, this.state.newTitle))];
                                    case 2:
                                        return t.sent(), this.setState({
                                            isEditingTitle: !1,
                                            newTitle: null
                                        }), [3, 4];
                                    case 3:
                                        return e = t.sent(), c.j.error(e, "Failed to update collection title"), this.setState({
                                            saveError: !0
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    var e = null;
                    return this.state.saveError && (e = a.createElement(S._27, {
                        color: S.J.Error,
                        border: !0,
                        padding: 1,
                        margin: {
                            bottom: 1
                        },
                        fullWidth: !0
                    }, a.createElement(S.O, {
                        "data-test-selector": x.ErrorMessage
                    }, Object(c.d)("The title update failed to save. Please try again.", "CollectionEditorInfoCard")))), a.createElement(S._27, {
                        background: S.m.Alt,
                        display: S.P.Flex,
                        flexDirection: S.R.Row,
                        alignItems: S.c.Stretch
                    }, a.createElement(S._4, {
                        display: S.P.Flex,
                        flexDirection: S.R.Column
                    }, a.createElement(S._4, {
                        margin: {
                            y: 1
                        }
                    }, a.createElement(S.O, {
                        color: S.J.Alt,
                        type: S._41.H6,
                        bold: !0
                    }, Object(c.d)("Collection Thumbnail", "CollectionEditorInfoCard"))), a.createElement(V.a, {
                        "data-test-selector": x.Thumbnail,
                        alt: this.props.collection.title,
                        sizes: [{
                            size: "320px"
                        }],
                        src: this.props.collection.thumbnailURL
                    })), a.createElement(S._4, {
                        display: S.P.Flex,
                        flexDirection: S.R.Column,
                        margin: {
                            left: 3
                        },
                        flexGrow: 2,
                        flexShrink: 0
                    }, a.createElement(S._4, {
                        margin: {
                            y: 1
                        }
                    }, a.createElement(S.O, {
                        color: S.J.Alt,
                        type: S._41.H6,
                        bold: !0
                    }, Object(c.d)("Title", "CollectionEditorInfoCard"))), e, a.createElement(S._4, {
                        display: S.P.Flex,
                        flexDirection: S.R.Row
                    }, a.createElement(S._4, {
                        flexGrow: 1,
                        flexShrink: 1,
                        margin: {
                            right: 1
                        }
                    }, a.createElement(S._0, {
                        type: S._1.Text,
                        defaultValue: this.props.collection.title,
                        onChange: this.onTitleChange
                    })), a.createElement(S._4, {
                        flexGrow: 0,
                        flexShrink: 0
                    }, a.createElement(S.u, {
                        disabled: !this.state.isEditingTitle,
                        onClick: this.onSaveClick,
                        "data-test-selector": x.SaveButton
                    }, Object(c.d)("Save", "CollectionEditorInfoCard")))), a.createElement(S._4, {
                        margin: {
                            top: 1,
                            bottom: 3
                        }
                    }, a.createElement(S.O, {
                        type: S._41.Span,
                        color: S.J.Alt2
                    }, Object(c.d)("Last updated {updatedAt}", {
                        updatedAt: Object(c.c)(new Date(this.props.collection.updatedAt), "long")
                    }, "CollectionEditorInfoCard"))), this.managerMenu()))
                }, t.prototype.managerMenu = function() {
                    return a.createElement(S._4, {
                        display: S.P.Flex,
                        flexDirection: S.R.Row
                    }, a.createElement(S.u, {
                        "data-test-selector": x.PlayAllButton,
                        icon: S._18.Play,
                        type: S.A.Text,
                        linkTo: "/collections/" + this.props.collection.id
                    }, Object(c.d)("Play All", "CollectionEditorInfoCard")), a.createElement(S.u, {
                        "data-test-selector": x.AddVideos,
                        icon: S._18.Plus,
                        onClick: this.onAddVideosClickHandler,
                        type: S.A.Text
                    }, Object(c.d)("Add videos", "CollectionEditorInfoCard")), a.createElement(j.a, {
                        balloonDirection: S.q.BottomCenter,
                        buttonType: S.A.Text,
                        content: {
                            collectionID: this.props.collection.id
                        },
                        tracking: {
                            location: m.PageviewLocation.VideoManagerCollectionEditor
                        }
                    }), a.createElement(S.u, {
                        "data-test-selector": x.DeleteButton,
                        icon: S._18.Trash,
                        type: S.A.Text,
                        onClick: this.onDeleteOptionClickHandler
                    }, Object(c.d)("Delete", "CollectionEditorInfoCard")))
                }, t.prototype.buildMutation = function(e, t) {
                    return o.__assign({}, Object(E.a)({
                        collectionID: e,
                        title: t
                    }), {
                        optimisticResponse: {
                            updateCollection: {
                                __typename: "UpdateCollectionPayload",
                                collection: {
                                    id: e,
                                    __typename: "Collection",
                                    title: t
                                }
                            }
                        }
                    })
                }, t
            }(a.Component),
            R = Object(l.compose)(Object(l.graphql)(M, {
                name: "updateCollection"
            }))(A);
        var P, H = Object(h.b)(null, function(e) {
                return {
                    onDeleteOptionClick: function(t) {
                        e(Object(f.d)(T.a, {
                            collection: t
                        }))
                    },
                    onAddVideosClick: function(t, n) {
                        e(Object(f.d)(F, {
                            collection: t,
                            onComplete: n
                        }))
                    }
                }
            })(R),
            G = function() {
                return a.createElement(S._27, {
                    background: S.m.Alt,
                    display: S.P.Flex,
                    flexDirection: S.R.Row,
                    alignItems: S.c.Stretch,
                    margin: {
                        bottom: 5
                    }
                }, a.createElement(S._4, {
                    display: S.P.Flex,
                    flexDirection: S.R.Column
                }, a.createElement(S._4, {
                    margin: {
                        y: 1
                    }
                }, a.createElement(S._10, {
                    width: 100
                })), a.createElement(S._10, {
                    height: 180,
                    width: 320
                })), a.createElement(S._4, {
                    display: S.P.Flex,
                    flexDirection: S.R.Column,
                    margin: {
                        left: 3
                    },
                    flexGrow: 2,
                    flexShrink: 0
                }, a.createElement(S._4, {
                    margin: {
                        y: 1
                    }
                }, a.createElement(S._10, {
                    width: 50
                })), a.createElement(S._10, {
                    height: 25,
                    width: 400
                }), a.createElement(S._4, {
                    margin: {
                        top: 1,
                        bottom: 3
                    }
                }, a.createElement(S._10, {
                    height: 15,
                    width: 300
                })), a.createElement(S._10, {
                    height: 30,
                    width: 400
                })))
            },
            L = n("F8kA"),
            q = n("mi6k"),
            B = n("5RjZ"),
            U = n("KRtN"),
            z = n("4o7v"),
            Q = n("PwTO"),
            $ = n("N8CH"),
            J = n("Z8qZ"),
            K = n("gDYr");
        n("dAJe");
        ! function(e) {
            e[e.ItemLength = 0] = "ItemLength", e[e.VideoLink = 1] = "VideoLink", e[e.ManagerCardMenu = 2] = "ManagerCardMenu"
        }(P || (P = {}));
        var Y, Z = Object(r.SortableHandle)(function() {
                return a.createElement(S._17, {
                    asset: S._18.DragHandle
                })
            }),
            W = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        saveError: !1,
                        deleteError: !1
                    }, t.subHeader = function(e) {
                        return a.createElement(S._27, {
                            display: S.P.Flex,
                            flexDirection: S.R.Row,
                            margin: {
                                top: .5
                            },
                            color: S.J.Alt2
                        }, a.createElement(S._4, {
                            padding: {
                                right: 1
                            }
                        }, a.createElement(S._44, {
                            direction: S._46.Bottom,
                            align: S._45.Center,
                            label: Object(c.d)("Published At", "CollectionItemCard")
                        }, a.createElement(S.O, null, Object(c.c)(new Date(e.publishedAt), "long")))), a.createElement(S._4, {
                            padding: {
                                right: 1
                            },
                            display: S.P.Flex,
                            alignItems: S.c.Center
                        }, a.createElement(S._26, {
                            "data-test-selector": P.ItemLength,
                            label: Object(c.d)("Length", "CollectionItemCard"),
                            value: Object(q.a)(e.lengthSeconds),
                            icon: S._18.GlyphLength
                        })), a.createElement(S._4, {
                            padding: {
                                right: 1
                            },
                            display: S.P.Flex,
                            alignItems: S.c.Center
                        }, a.createElement(S._26, {
                            label: Object(c.d)("Video Type", "CollectionItemCard"),
                            value: Object(B.a)(e.broadcastType),
                            icon: S._18.NavVideos
                        })))
                    }, t.reportImageInteractive = function() {
                        t.props.latencyTracking.reportInteractive()
                    }, t
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.collectionItem;
                    return a.createElement(S._4, {
                        className: "collection-item-card",
                        margin: {
                            y: 1
                        }
                    }, a.createElement(J.a, null, a.createElement(S._27, {
                        background: S.m.Alt,
                        display: S.P.Flex,
                        className: "collection-item__drag-handle"
                    }, a.createElement(Z, null)), a.createElement(S._4, {
                        alignSelf: S.d.Center,
                        padding: {
                            x: 1
                        }
                    }, this.props.position), a.createElement(S._4, {
                        flexGrow: 0,
                        flexShrink: 0
                    }, a.createElement(S.D, {
                        aspect: S.k.Aspect16x9,
                        size: S.E.Size16,
                        onLoad: this.reportImageInteractive,
                        onError: this.reportImageInteractive,
                        src: e.previewThumbnailURL ? e.previewThumbnailURL : "https://static-cdn.jtvnw.net/ttv-playlists-thumbnails-prod/missing-video-thumb-320x180.png",
                        alt: e.title
                    })), a.createElement($.a, null, a.createElement(S._44, {
                        label: Object(c.d)("Watch this video", "CollectionItemCard"),
                        direction: S._46.Right
                    }, a.createElement(S.O, {
                        type: S._41.H5,
                        color: S.J.Alt
                    }, a.createElement(L.a, {
                        "data-test-selector": P.VideoLink,
                        to: {
                            pathname: "/videos/" + this.props.collectionItem.id,
                            state: {
                                content: m.PageviewContent.CollectionItemCard,
                                medium: m.PageviewMedium.VideoManagerCollectionEditor
                            }
                        }
                    }, e.title))), this.subHeader(e)), a.createElement(Q.a, null, a.createElement(z.a, {
                        value: e.viewCount.toString(),
                        icon: S._18.GlyphViews,
                        label: Object(c.d)("Total videos", "CollectionItemCard")
                    })), a.createElement(U.a, {
                        options: this.collectionMenuOptions(e)
                    })))
                }, t.prototype.collectionMenuOptions = function(e) {
                    var t = this;
                    return [{
                        asset: S._18.Edit,
                        title: Object(c.d)("Set as collection thumbnail", "CollectionItemCard"),
                        onClick: function() {
                            t.setState({
                                saveError: !1
                            }, function() {
                                return o.__awaiter(t, void 0, void 0, function() {
                                    var t;
                                    return o.__generator(this, function(n) {
                                        switch (n.label) {
                                            case 0:
                                                return n.trys.push([0, 2, , 3]), [4, this.props.updateCollection((i = this.props.parentCollection, a = {
                                                    thumbnailInput: {
                                                        id: e.id,
                                                        type: k.a.Video
                                                    }
                                                }, o.__assign({}, Object(E.a)({
                                                    collectionID: i.id,
                                                    title: a.newTitle,
                                                    thumbnailInput: a.thumbnailInput
                                                }), {
                                                    optimisticResponse: {
                                                        updateCollection: {
                                                            __typename: "UpdateCollectionPayload",
                                                            collection: o.__assign({
                                                                __typename: "Collection"
                                                            }, i, {
                                                                title: a.newTitle || i.title
                                                            })
                                                        }
                                                    }
                                                })))];
                                            case 1:
                                                return n.sent(), [3, 3];
                                            case 2:
                                                return t = n.sent(), c.j.error(t, "Failed to set this video as the collection thumbnail."), this.setState({
                                                    saveError: !0
                                                }), [3, 3];
                                            case 3:
                                                return [2]
                                        }
                                        var i, a
                                    })
                                })
                            })
                        }
                    }, {
                        asset: S._18.Trash,
                        title: Object(c.d)("Remove from collection", "CollectionItemCard"),
                        onClick: function() {
                            return o.__awaiter(t, void 0, void 0, function() {
                                var e;
                                return o.__generator(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            this.setState({
                                                deleteError: !1
                                            }), t.label = 1;
                                        case 1:
                                            return t.trys.push([1, 3, , 4]), [4, this.props.removeCollectionItem((n = this.props.parentCollection, i = this.props.collectionItem.id, a = k.a.Video, l = n.items.edges.filter(function(e) {
                                                return e.node.id !== i
                                            }), r = n.id, o.__assign({}, Object(E.a)({
                                                collectionID: r,
                                                itemID: i,
                                                itemType: a
                                            }), {
                                                optimisticResponse: {
                                                    removeCollectionItem: {
                                                        __typename: "RemoveCollectionItemPayload",
                                                        collection: o.__assign({}, n, {
                                                            __typename: "Collection",
                                                            items: o.__assign({}, n.items, {
                                                                edges: l
                                                            })
                                                        })
                                                    }
                                                }
                                            })))];
                                        case 2:
                                            return t.sent(), [3, 4];
                                        case 3:
                                            return e = t.sent(), c.j.error(e, "Failed to set this video as the collection thumbnail."), this.setState({
                                                deleteError: !0
                                            }), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                    var n, i, a, l, r
                                })
                            })
                        }
                    }]
                }, t
            }(a.Component),
            X = Object(l.compose)(Object(p.d)("CollectionItemCard"), Object(l.graphql)(M, {
                name: "updateCollection"
            }), Object(l.graphql)(K, {
                name: "removeCollectionItem"
            }))(W),
            ee = Object(r.SortableElement)(function(e) {
                return a.createElement(X, o.__assign({}, e))
            }),
            te = Object(r.SortableContainer)(function(e) {
                var t = e.collection,
                    n = e.items;
                return a.createElement(S._4, null, n.filter(function(e) {
                    return !!e.id
                }).map(function(e, n) {
                    return a.createElement(ee, {
                        parentCollection: t,
                        collectionItem: e,
                        index: n,
                        key: e.id,
                        position: n + 1
                    })
                }))
            }),
            ne = n("Dz2i"),
            ie = n("pi7n");
        n("/brc");
        ! function(e) {
            e[e.BackButton = 0] = "BackButton"
        }(Y || (Y = {}));
        var oe = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isEditingTitle: !1,
                        saveError: !1
                    }, t.onSortEnd = function(e) {
                        var n = e.oldIndex,
                            i = e.newIndex;
                        return o.__awaiter(t, void 0, void 0, function() {
                            var e;
                            return o.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return this.props.data.collection ? (e = Object(r.arrayMove)(this.props.data.collection.items.edges, n, i), [4, this.onItemsChange(e, e[i].node.id, i)]) : [3, 2];
                                    case 1:
                                        t.sent(), t.label = 2;
                                    case 2:
                                        return [2]
                                }
                            })
                        })
                    }, t.onItemsChange = function(e, n, i) {
                        return o.__awaiter(t, void 0, void 0, function() {
                            var t, a;
                            return o.__generator(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        if (!this.props.data.collection) return [3, 4];
                                        t = _(this.props.data.collection, n, i, e), o.label = 1;
                                    case 1:
                                        return o.trys.push([1, 3, , 4]), [4, this.props.reorderCollectionItem(t)];
                                    case 2:
                                        return o.sent(), [3, 4];
                                    case 3:
                                        return a = o.sent(), c.j.error(a, "Collection reordering Mutation failed"), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return o.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
                    e.data.loading && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e, t, n = !1;
                    return this.props.data.loading ? (e = this.collectionInfoPlaceholder(), t = this.collectionCardPlaceholders()) : this.props.data.error || !this.props.data.collection ? (e = this.collectionUnavailableError(), t = this.collectionItemsUnavaibleError()) : this.props.data.collection ? (e = a.createElement(H, {
                        collection: this.props.data.collection,
                        onVideosChange: this.props.data.refetch
                    }), t = a.createElement(te, {
                        collection: this.props.data.collection,
                        items: this.props.data.collection.items.edges.map(function(e) {
                            return e.node
                        }),
                        onSortEnd: this.onSortEnd,
                        useDragHandle: !0
                    }), n = this.props.data.collection.items.pageInfo.hasNextPage || !1) : (e = this.collectionUnavailableError(), t = this.noCollectionItemsCTA()), a.createElement(d.b, null, a.createElement(S._4, {
                        padding: 3,
                        display: S.P.Flex,
                        flexDirection: S.R.Row,
                        className: "collection-editor-page"
                    }, a.createElement(S._4, {
                        flexGrow: 1
                    }, a.createElement(S._4, {
                        margin: {
                            bottom: 1
                        },
                        flexGrow: 1,
                        flexDirection: S.R.Row,
                        display: S.P.Flex
                    }, a.createElement(S._4, {
                        flexGrow: 1
                    }, a.createElement(S.O, {
                        type: S._41.H3
                    }, Object(c.d)("Edit Collection", "CollectionEditorPagePresentation")))), a.createElement(S._4, {
                        padding: {
                            y: .5
                        }
                    }, a.createElement(S.M, {
                        "data-test-selector": Y.BackButton,
                        hoverUnderlineNone: !0,
                        to: {
                            pathname: "/" + this.props.match.params.creatorLogin + "/manager/collections",
                            state: {
                                content: "all_collections",
                                medium: m.PageviewMedium.VideoManagerCollectionEditor
                            }
                        }
                    }, a.createElement(S._4, {
                        display: S.P.Flex,
                        flexDirection: S.R.Row,
                        alignItems: S.c.Center
                    }, a.createElement(S._17, {
                        asset: S._18.ChatSettingsBack,
                        height: 20,
                        width: 20
                    }), a.createElement(S.O, {
                        align: S._51.Middle,
                        bold: !0
                    }, Object(c.d)("All collections", "CollectionEditorPagePresentation"))))), e, t, a.createElement(d.a, {
                        enabled: n,
                        loadMore: this.props.loadMore
                    }))))
                }, t.prototype.collectionCardPlaceholders = function() {
                    return [a.createElement(v.a, {
                        key: 1
                    }), a.createElement(v.a, {
                        key: 2
                    }), a.createElement(v.a, {
                        key: 3
                    })]
                }, t.prototype.collectionInfoPlaceholder = function() {
                    return a.createElement(G, null)
                }, t.prototype.noCollectionItemsCTA = function() {
                    return a.createElement("div", null)
                }, t.prototype.collectionItemsUnavaibleError = function() {
                    return a.createElement("div", null)
                }, t.prototype.collectionUnavailableError = function() {
                    return a.createElement("div", null)
                }, t
            }(a.Component),
            ae = function(e, t) {
                var n = t.fetchMoreResult;
                if (!n || !n.collection || !n.collection.items) return e;
                var i = e.collection && e.collection.items.edges || [];
                return n.collection.items.edges = i.concat(n.collection.items.edges), n
            },
            le = Object(l.compose)(Object(l.graphql)(ne, {
                options: function(e) {
                    return {
                        variables: {
                            collectionID: e.match.params.collectionID
                        }
                    }
                },
                props: function(e) {
                    return o.__assign({}, e, {
                        loadMore: function() {
                            return e.data.fetchMore({
                                variables: {
                                    collectionID: e.ownProps.match.params.collectionID
                                },
                                query: ne,
                                updateQuery: ae
                            })
                        }
                    })
                }
            }), Object(l.graphql)(ie, {
                name: "reorderCollectionItem"
            }), Object(p.d)("CollectionEditorPage", {
                destination: u.a.VideoManagerCollectionsEditor
            }), Object(s.a)({
                location: m.PageviewLocation.VideoManagerCollectionEditor,
                properties: function(e) {
                    return {
                        channel: e.match.params.creatorLogin
                    }
                },
                skip: function(e) {
                    return e.data.loading
                }
            }))(oe),
            re = n("L2R7"),
            ce = function(e) {
                return window.location.replace("https://www.twitch.tv/" + encodeURIComponent(e.match.params.creatorLogin) + "/manager/collections/edit/" + e.match.params.collectionID), null
            },
            de = function(e) {
                return Object(re.a)() ? a.createElement(le, o.__assign({}, e)) : a.createElement(ce, o.__assign({}, e))
            };
        n.d(t, "CollectionEditorPage", function() {
            return de
        })
    },
    KRtN: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            o = n("GiK3"),
            a = n("rCmJ"),
            l = n("Odds"),
            r = function(e) {
                var t = e.asset ? o.createElement(l._17, {
                    asset: e.asset
                }) : null;
                return o.createElement(l._2, {
                    linkTo: e.linkTo,
                    onClick: e.onClick
                }, o.createElement(l._4, {
                    alignItems: l.c.Center,
                    display: l.P.Flex,
                    flexGrow: 1,
                    padding: 1
                }, t, o.createElement(l.Y, {
                    margin: {
                        left: 1
                    }
                }, o.createElement(l.O, null, e.title))))
            };
        n.d(t, "a", function() {
            return c
        });
        var c = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.state = {
                    showDropMenu: !1
                }, t.menuButtonClickHandler = function() {
                    t.setState(function(e) {
                        return {
                            showDropMenu: !e.showDropMenu
                        }
                    })
                }, t.clickOutHandler = function() {
                    t.setState(function() {
                        return {
                            showDropMenu: !1
                        }
                    })
                }, t
            }
            return i.__extends(t, e), t.prototype.render = function() {
                var e = null;
                return this.state.showDropMenu && (e = this.dropMenu()), o.createElement(l._4, {
                    flexGrow: 0,
                    flexShrink: 0,
                    display: l.P.Flex,
                    position: l._11.Relative
                }, o.createElement(l.Y, {
                    fullHeight: !0
                }, o.createElement(a.a, {
                    onClickOut: this.clickOutHandler
                }, o.createElement(l._4, {
                    fullHeight: !0,
                    display: l.P.Flex,
                    alignItems: l.c.Stretch
                }, o.createElement(l.u, {
                    disabled: 0 === this.props.options.length,
                    icon: l._18.More,
                    onClick: this.menuButtonClickHandler,
                    type: l.A.Text
                })), e)))
            }, t.prototype.dropMenu = function() {
                var e = this.props.options.map(function(e, t) {
                    return o.createElement(r, i.__assign({
                        key: t
                    }, e))
                });
                return o.createElement(l.p, {
                    size: l.r.Small,
                    direction: l.q.BottomRight,
                    noTail: !0,
                    show: !0
                }, e)
            }, t
        }(o.Component)
    },
    M0wY: function(e, t, n) {
        "use strict";
        var i, o = n("TToO"),
            a = n("GiK3"),
            l = n("3zLD"),
            r = n("RH2O"),
            c = n("6sO2"),
            d = n("7vx8"),
            s = n("oIkB"),
            u = n("V5M+"),
            m = n("+8VM"),
            p = n("rvrg"),
            v = n("Odds");
        ! function(e) {
            e[e.CancelButton = 0] = "CancelButton", e[e.ConfirmButton = 1] = "ConfirmButton", e[e.ErrorAlert = 2] = "ErrorAlert"
        }(i || (i = {}));
        var h = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.collection,
                        t = null;
                    return this.props.error && (t = a.createElement(v.e, {
                        delay: v.f.Short,
                        type: v.i.BounceIn,
                        enabled: !0
                    }, a.createElement(v._27, {
                        border: !0,
                        margin: {
                            bottom: 1
                        },
                        padding: 1,
                        fullWidth: !0
                    }, a.createElement(v.O, {
                        bold: !0,
                        color: v.J.Error,
                        "data-test-selector": i.ErrorAlert
                    }, this.props.error)))), a.createElement(v.e, {
                        type: v.i.FadeIn,
                        delay: v.f.Medium,
                        duration: v.g.Medium,
                        enabled: !0
                    }, a.createElement(v._27, {
                        background: v.m.Base,
                        padding: {
                            x: 3,
                            top: 2,
                            bottom: 3
                        }
                    }, a.createElement(v.Y, {
                        padding: {
                            bottom: 1
                        }
                    }, a.createElement(v.O, {
                        fontSize: v.T.Size3
                    }, Object(c.d)("Delete Collection", "DeleteCollectionModal"))), a.createElement(v.O, {
                        fontSize: v.T.Size6
                    }, Object(c.d)("Are you sure you want to delete this collection?", "DeleteCollectionModal")), a.createElement(v.O, {
                        fontSize: v.T.Size6
                    }, Object(c.d)("This action cannot be undone. ", "DeleteCollectionModal")), a.createElement(v._4, {
                        padding: {
                            y: 2
                        }
                    }, a.createElement(p.a, {
                        collection: e,
                        hideOptionsMenu: !0
                    })), t, a.createElement(v._4, {
                        display: v.P.Flex,
                        flexDirection: v.R.Row,
                        justifyContent: v._3.Center
                    }, a.createElement(v._4, {
                        margin: {
                            x: .5
                        }
                    }, a.createElement(v.u, {
                        "data-test-selector": i.CancelButton,
                        onClick: this.props.onCancel,
                        type: v.A.Hollow
                    }, Object(c.d)("Cancel", "DeleteCollectionModal"))), a.createElement(v._4, {
                        margin: {
                            x: .5
                        }
                    }, a.createElement(v.u, {
                        "data-test-selector": i.ConfirmButton,
                        onClick: this.props.onDeleteRequest,
                        type: v.A.Alert
                    }, Object(c.d)("Delete", "DeleteCollectionModal")))), a.createElement(m.a, {
                        closeOnBackdropClick: !0
                    })))
                }, t
            }(a.Component),
            f = n("e6eF");
        n.d(t, "a", function() {
            return C
        });
        var g = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {}, t.defaultUserError = Object(c.d)("Unable to delete this collection, try again later.", "DeleteCollectionModal"), t.onCancelHandler = function() {
                        t.props.onClose()
                    }, t.onDeleteHandler = function() {
                        t.setState({
                            deletionError: void 0
                        }, function() {
                            return o.__awaiter(t, void 0, void 0, function() {
                                var e;
                                return o.__generator(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            if (!this.props.collection.owner) return this.setState({
                                                deletionError: this.defaultUserError
                                            }), [2];
                                            t.label = 1;
                                        case 1:
                                            return t.trys.push([1, 3, , 4]), [4, this.props.onDeleteRequest(Object(s.a)({
                                                collectionID: this.props.collection.id
                                            }))];
                                        case 2:
                                            return t.sent(), [3, 4];
                                        case 3:
                                            return e = t.sent(), c.j.error(e, "DeleteCollectionModal"), this.setState({
                                                deletionError: this.defaultUserError
                                            }), [2];
                                        case 4:
                                            return this.props.onSuccess(), [2]
                                    }
                                })
                            })
                        })
                    }, t
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(h, {
                        collection: this.props.collection,
                        error: this.state.deletionError,
                        onCancel: this.onCancelHandler,
                        onDeleteRequest: this.onDeleteHandler
                    })
                }, t
            }(a.Component),
            k = Object(l.compose)(Object(d.a)(f, {
                name: "onDeleteRequest"
            }))(g);
        var C = Object(r.b)(null, function(e, t) {
            return {
                onClose: function() {
                    e(Object(u.c)())
                },
                onSuccess: function() {
                    e(Object(u.c)()), t.onSuccess && t.onSuccess()
                }
            }
        })(k)
    },
    N8CH: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        });
        var i = n("GiK3"),
            o = (n.n(i), n("Odds")),
            a = function(e) {
                return i.createElement(o._4, {
                    alignItems: o.c.Start,
                    display: o.P.Flex,
                    flexDirection: o.R.Column,
                    flexGrow: 1,
                    flexShrink: 1,
                    justifyContent: o._3.Center,
                    padding: {
                        x: 2
                    }
                }, e.children)
            }
    },
    OEl7: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "collectionFields"
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
                            value: "updatedAt"
                        },
                        arguments: [],
                        directives: []
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
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 142
            }
        };
        n.loc.source = {
            body: "fragment collectionFields on Collection {\nid\nlengthSeconds\nowner {\nid\nlogin\n}\ntitle\nviewCount\nupdatedAt\nthumbnailURL(width: 320 height: 180)\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    PwTO: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return l
        });
        var i = n("GiK3"),
            o = (n.n(i), n("Odds")),
            a = n("QmYP"),
            l = (n.n(a), function(e) {
                return i.createElement(o._4, {
                    className: "manager-card__stats-container",
                    display: o.P.Flex,
                    flexGrow: 0,
                    flexShrink: 0,
                    flexWrap: o.S.NoWrap,
                    flexDirection: o.R.Row,
                    alignItems: o.c.Center
                }, e.children)
            })
    },
    QmYP: function(e, t) {},
    Z8qZ: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            o = n("GiK3"),
            a = n("Odds"),
            l = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return o.createElement(a._27, {
                        background: a.m.Base,
                        elevation: 1,
                        display: a.P.Flex,
                        flexDirection: a.R.Row,
                        alignItems: a.c.Stretch
                    }, this.props.children)
                }, t
            }(o.Component);
        n.d(t, "a", function() {
            return l
        })
    },
    btUQ: function(e, t, n) {
        var i = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "CollectionEditor_UpdateCollection"
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
                                value: "UpdateCollectionInput"
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
                            value: "updateCollection"
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
                                    value: "collection"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "collectionFields"
                                        },
                                        directives: []
                                    }, {
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "itemConnection"
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
                end: 410
            }
        };
        i.loc.source = {
            body: '#import "twilight/pages/video-tools/pages/collection-editor/components/collection-editor-page/collection-fragment.gql"\n#import "twilight/pages/video-tools/pages/collection-editor/components/collection-editor-page/item-connection-fragment.gql"\nmutation CollectionEditor_UpdateCollection($input: UpdateCollectionInput!) {\nupdateCollection(input: $input) {\ncollection {\n...collectionFields\n...itemConnection\n}\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var o = {};

        function a(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !o[t] && (o[t] = !0, !0)
            })
        }
        i.definitions = i.definitions.concat(a(n("OEl7").definitions)), i.definitions = i.definitions.concat(a(n("9Gwb").definitions)), e.exports = i
    },
    dAJe: function(e, t) {},
    e6eF: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "CollectionManager_DeleteCollection"
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
                                value: "DeleteCollectionInput"
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
                            value: "deleteCollection"
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
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 133
            }
        };
        n.loc.source = {
            body: "mutation CollectionManager_DeleteCollection($input: DeleteCollectionInput!) {\ndeleteCollection(input: $input) {\ncollection {\nid\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    gDYr: function(e, t, n) {
        var i = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "CollectionEditor_RemoveCollectionItem"
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
                                value: "RemoveCollectionItemInput"
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
                            value: "removeCollectionItem"
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
                                    value: "collection"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "collectionFields"
                                        },
                                        directives: []
                                    }, {
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "itemConnection"
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
                end: 422
            }
        };
        i.loc.source = {
            body: '#import "twilight/pages/video-tools/pages/collection-editor/components/collection-editor-page/collection-fragment.gql"\n#import "twilight/pages/video-tools/pages/collection-editor/components/collection-editor-page/item-connection-fragment.gql"\nmutation CollectionEditor_RemoveCollectionItem($input: RemoveCollectionItemInput!) {\nremoveCollectionItem(input: $input) {\ncollection {\n...collectionFields\n...itemConnection\n}\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var o = {};

        function a(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !o[t] && (o[t] = !0, !0)
            })
        }
        i.definitions = i.definitions.concat(a(n("OEl7").definitions)), i.definitions = i.definitions.concat(a(n("9Gwb").definitions)), e.exports = i
    },
    j5vp: function(e, t, n) {
        var i = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "CollectionEditor_SearchCreatorVideos"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "creatorID"
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
                            value: "after"
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
                            value: "search"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "VideoConnectionSearchParams"
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
                                    value: "creatorID"
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
                                    value: "searchVideos"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "first"
                                    },
                                    value: {
                                        kind: "IntValue",
                                        value: "6"
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
                                            value: "after"
                                        }
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "search"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "search"
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
                                                        kind: "FragmentSpread",
                                                        name: {
                                                            kind: "Name",
                                                            value: "SearchCardVideo"
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
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 345
            }
        };
        i.loc.source = {
            body: '#import "twilight/features/video-search-card/models/search-card-video.gql"\nquery CollectionEditor_SearchCreatorVideos($creatorID: ID! $after: Cursor $search: VideoConnectionSearchParams) {\nuser(id: $creatorID) {\nid\nsearchVideos(first: 6 after: $after search: $search) {\nedges {\ncursor\nnode {\n...SearchCardVideo\n}\n}\npageInfo {\nhasNextPage\n}\n}\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var o = {};
        i.definitions = i.definitions.concat(n("y+8p").definitions.filter(function(e) {
            if ("FragmentDefinition" !== e.kind) return !0;
            var t = e.name.value;
            return !o[t] && (o[t] = !0, !0)
        })), e.exports = i
    },
    "kt/X": function(e, t) {},
    pi7n: function(e, t, n) {
        var i = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "CollectionEditor_ReorderCollectionItem"
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
                                value: "ReorderCollectionItemInput"
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
                            value: "reorderCollectionItem"
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
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "itemConnection"
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
                end: 289
            }
        };
        i.loc.source = {
            body: '#import "twilight/pages/video-tools/pages/collection-editor/components/collection-editor-page/item-connection-fragment.gql"\nmutation CollectionEditor_ReorderCollectionItem($input: ReorderCollectionItemInput!) {\nreorderCollectionItem(input: $input) {\ncollection {\nid\n...itemConnection\n}\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var o = {};
        i.definitions = i.definitions.concat(n("9Gwb").definitions.filter(function(e) {
            if ("FragmentDefinition" !== e.kind) return !0;
            var t = e.name.value;
            return !o[t] && (o[t] = !0, !0)
        })), e.exports = i
    },
    rvrg: function(e, t, n) {
        "use strict";
        var i = n("RH2O"),
            o = n("V5M+"),
            a = n("TToO"),
            l = n("GiK3"),
            r = n("6sO2"),
            c = n("mi6k"),
            d = n("vH/s"),
            s = n("kk4f"),
            u = n("CSlQ"),
            m = n("Z8qZ"),
            p = n("KRtN"),
            v = n("4o7v"),
            h = n("PwTO"),
            f = n("N8CH"),
            g = n("Odds"),
            k = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onDeleteOptionClickHandler = function() {
                        t.props.onDeleteOptionClick(t.props.collection)
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.collection;
                    return l.createElement(m.a, null, l.createElement(g._4, {
                        flexShrink: 0
                    }, l.createElement(s.a, {
                        alt: e.title,
                        sizes: [{
                            size: "160px"
                        }],
                        src: e.thumbnailURL,
                        videoCount: e.items.totalCount
                    })), l.createElement(f.a, null, l.createElement(g.O, {
                        bold: !0,
                        type: g._41.H4,
                        color: g.J.Alt
                    }, e.title), l.createElement(g._44, {
                        direction: g._46.Bottom,
                        label: Object(r.d)("Last Updated", "CollectionManagerCard")
                    }, l.createElement(g.O, {
                        color: g.J.Alt2
                    }, Object(r.c)(new Date(e.updatedAt), "long")))), l.createElement(h.a, null, this.collectionStats(e)), this.renderCardMenu())
                }, t.prototype.renderCardMenu = function() {
                    if (this.props.hideOptionsMenu || !this.props.collection.owner) return null;
                    var e = [{
                        asset: g._18.Edit,
                        linkTo: {
                            pathname: "/" + this.props.collection.owner.login + "/manager/collections/" + this.props.collection.id,
                            state: {
                                content: d.PageviewContent.CollectionCard,
                                medium: d.PageviewMedium.VideoManagerCollectionManager
                            }
                        },
                        title: Object(r.d)("Edit", "CollectionManagerCard")
                    }, {
                        asset: g._18.Trash,
                        onClick: this.onDeleteOptionClickHandler,
                        title: Object(r.d)("Delete", "CollectionManagerCard")
                    }];
                    return l.createElement(p.a, {
                        options: e
                    })
                }, t.prototype.collectionStats = function(e) {
                    return [{
                        value: Object(c.a)(e.lengthSeconds),
                        icon: g._18.GlyphLength,
                        label: Object(r.d)("Collection length", "CollectionManagerCard")
                    }, {
                        value: "" + e.viewCount,
                        icon: g._18.GlyphViews,
                        label: Object(r.d)("Views", "CollectionManagerCard")
                    }].map(function(e, t) {
                        return l.createElement(v.a, a.__assign({
                            key: t
                        }, e))
                    })
                }, t
            }(l.Component),
            C = Object(u.d)("CollectionManagerCard", {
                autoReportInteractive: !0
            })(k),
            b = n("M0wY");
        n.d(t, "a", function() {
            return E
        });
        var E = Object(i.b)(null, function(e, t) {
            return {
                onDeleteOptionClick: function(n) {
                    e(Object(o.d)(b.a, {
                        collection: n,
                        onSuccess: t.onDelete
                    }))
                }
            }
        })(C)
    },
    "y+8p": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "SearchCardVideo"
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
                                value: "160"
                            }
                        }, {
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "height"
                            },
                            value: {
                                kind: "IntValue",
                                value: "90"
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
                            value: "title"
                        },
                        arguments: [],
                        directives: []
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 115
            }
        };
        n.loc.source = {
            body: "fragment SearchCardVideo on Video {\nid\nlengthSeconds\npreviewThumbnailURL(width: 160 height: 90)\npublishedAt\ntitle\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    }
});
//# sourceMappingURL=pages.video-tools.pages.collection-editor-25235d7f2fc3e2bd2d49fe57e604fe28.js.map