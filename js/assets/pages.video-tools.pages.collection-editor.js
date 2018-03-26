webpackJsonp([78], {
    "/brc": function(e, t) {},
    "4o7v": function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
        });
        var i = n("TToO"),
            o = n("GiK3"),
            l = (n.n(o), n("5kgt")),
            a = n("Odds"),
            r = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = o.createElement(a._6, {
                            alignItems: a.c.Center,
                            display: a.P.Flex,
                            fullHeight: !0,
                            justifyContent: a._5.Center,
                            padding: 2
                        }, o.createElement(a._28, {
                            icon: this.props.icon,
                            label: this.props.label,
                            value: this.props.value
                        })),
                        t = this.props.linkTo ? o.createElement(a._4, {
                            alpha: !0,
                            linkTo: this.props.linkTo,
                            targetBlank: !0
                        }, e) : e;
                    return o.createElement(a._6, i.__assign({
                        display: a.P.InlineFlex,
                        fullHeight: !0
                    }, Object(l.a)(this.props)), t)
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

        function l(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !o[t] && (o[t] = !0, !0)
            })
        }
        i.definitions = i.definitions.concat(l(n("OEl7").definitions)), i.definitions = i.definitions.concat(l(n("9Gwb").definitions)), e.exports = i
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
                                                            value: "isDeleted"
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
                                                            value: "scope"
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
                end: 394
            }
        };
        n.loc.source = {
            body: "fragment itemConnection on Collection {\n# Request the max (50 atm) because we support drag and drop\n# reordering which makes little sense at the moment without all the items\nitems(first: 50) {\ntotalCount\npageInfo {\nhasNextPage\n}\nedges {\ncursor\nnode {\n... on Video {\nid\nbroadcastType\nisDeleted\nlengthSeconds\npreviewThumbnailURL(width: 240 height: 135)\npublishedAt\nscope\ntitle\nviewCount\n}\n}\n}\n}\n}",
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
                        }, {
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "options"
                            },
                            value: {
                                kind: "ObjectValue",
                                fields: [{
                                    kind: "ObjectField",
                                    name: {
                                        kind: "Name",
                                        value: "includeAllItems"
                                    },
                                    value: {
                                        kind: "BooleanValue",
                                        value: !0
                                    }
                                }]
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
                end: 411
            }
        };
        i.loc.source = {
            body: '#import "twilight/pages/video-tools/pages/collection-editor/components/collection-editor-page/collection-fragment.gql"\n#import "twilight/pages/video-tools/pages/collection-editor/components/collection-editor-page/item-connection-fragment.gql"\nquery CollectionManager_EditCollection($collectionID: ID!) {\ncollection(id: $collectionID options: { includeAllItems: true}) {\n...collectionFields\n...itemConnection\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var o = {};

        function l(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !o[t] && (o[t] = !0, !0)
            })
        }
        i.definitions = i.definitions.concat(l(n("OEl7").definitions)), i.definitions = i.definitions.concat(l(n("9Gwb").definitions)), e.exports = i
    },
    KO2S: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i, o = n("TToO"),
            l = n("GiK3"),
            a = n("3zLD"),
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
            k = n("+8VM"),
            g = n("O8Ns"),
            C = n("rH6M"),
            b = n("8wGL"),
            _ = n("gDYr"),
            E = n("oIkB"),
            y = function(e, t, n, i) {
                return o.__assign({}, Object(E.a)({
                    itemID: t,
                    collectionID: e.id,
                    position: n,
                    itemType: g.a.Video
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
            S = function(e, t, n) {
                var i = e.items.edges.filter(function(e) {
                        return e.node.id !== t
                    }),
                    l = e.id;
                return o.__assign({}, Object(E.a)({
                    collectionID: l,
                    itemID: t,
                    itemType: n
                }), {
                    optimisticResponse: {
                        removeCollectionItem: {
                            __typename: "RemoveCollectionItemPayload",
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
            I = function(e, t, n) {
                return o.__assign({}, Object(E.a)({
                    collectionID: e.id,
                    itemID: t,
                    itemType: n
                }))
            },
            N = n("Odds"),
            O = n("j5vp");
        n("kt/X");
        ! function(e) {
            e[e.AddVideoButton = 0] = "AddVideoButton", e[e.RemoveVideoButton = 1] = "RemoveVideoButton", e[e.DoneButton = 2] = "DoneButton"
        }(i || (i = {}));
        var D = 200,
            w = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        addItemError: !1,
                        removeItemError: !1
                    }, t.onVideoAddHandler = function(e) {
                        t.setState({
                            addItemError: !1
                        }, function() {
                            return o.__awaiter(t, void 0, void 0, function() {
                                var t;
                                return o.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return n.trys.push([0, 2, , 3]), [4, this.props.addCollectionItem(I(this.props.data.collection, e, g.a.Video))];
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
                    }, t.onVideoRemoveHandler = function(e) {
                        t.setState({
                            removeItemError: !1
                        }, function() {
                            return o.__awaiter(t, void 0, void 0, function() {
                                var t;
                                return o.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return n.trys.push([0, 2, , 3]), [4, this.props.removeCollectionItem(S(this.props.data.collection, e, g.a.Video))];
                                        case 1:
                                            return n.sent(), [3, 3];
                                        case 2:
                                            return t = n.sent(), c.j.error(t, "Failed adding item to collection"), this.setState({
                                                removeItemError: !0
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
                            query: O,
                            variables: {
                                creatorID: t.props.data.collection.owner.id,
                                after: n,
                                collectionID: t.props.data.collection.id
                            },
                            updateQuery: F
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
                                                creatorID: this.props.data.collection.owner.id,
                                                search: {
                                                    term: n
                                                },
                                                collectionID: this.props.data.collection.id
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
                        }, D);
                        t.setState({
                            searchChangeTimeoutID: i
                        })
                    }, t
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    var e = !!(this.props.data.user && this.props.data.user.searchVideos && this.props.data.user.searchVideos.pageInfo.hasNextPage);
                    return l.createElement(N.e, {
                        type: N.i.FadeIn,
                        delay: N.f.Medium,
                        duration: N.g.Medium,
                        enabled: !0
                    }, l.createElement(N._29, {
                        background: N.m.Base,
                        className: "collection-editor-item-selector"
                    }, l.createElement(N._6, {
                        padding: {
                            x: 3,
                            y: 2
                        }
                    }, l.createElement(N.O, {
                        fontSize: N.T.Size4
                    }, Object(c.d)("Add videos to collection", "CollectionItemSelectorModal")), l.createElement(N._6, {
                        padding: {
                            y: 1
                        }
                    }, l.createElement(N.U, {
                        label: Object(c.d)("Search your videos", "CollectionItemSelectorModal")
                    }, l.createElement(N._22, {
                        onChange: this.onSearchInputChangeHandler,
                        placeholder: Object(c.d)("Filter by video title", "CollectionItemSelectorModal")
                    })))), l.createElement(d.b, {
                        suppressScrollX: !0
                    }, l.createElement(N._6, {
                        display: N.P.Flex,
                        flexDirection: N.R.Column
                    }, this.renderVideoSelectors(), l.createElement(d.a, {
                        enabled: e,
                        loadMore: this.onLoadMoreHandler
                    }))), l.createElement(N._29, {
                        display: N.P.Flex,
                        justifyContent: N._5.Center,
                        padding: {
                            y: 2
                        },
                        background: N.m.Base
                    }, l.createElement(N.u, {
                        "data-test-selector": i.DoneButton,
                        onClick: this.onCompleteClickHandler
                    }, Object(c.d)("Done", "CollectionItemSelectorModal"))), l.createElement(k.a, {
                        closeOnBackdropClick: !0
                    })))
                }, t.prototype.componentWillUnmount = function() {
                    this.state.searchChangeTimeoutID && clearTimeout(this.state.searchChangeTimeoutID)
                }, t.prototype.renderVideoSelectors = function() {
                    var e = this;
                    if (this.state.searchChangeTimeoutID || this.props.data.loading) return l.createElement(N._8, {
                        fillContent: !0,
                        delay: 500
                    });
                    if (this.props.data.error || !this.props.data.user || !this.props.data.user.searchVideos) return l.createElement("div", null);
                    var t = this.props.data.user.searchVideos.edges.map(function(e) {
                        return e.node
                    });
                    return 0 === t.length ? l.createElement("div", null) : t.map(function(n, i) {
                        var o = e.videoIsInCollection(e.props.data.collection, n),
                            a = o ? N.m.Alt2 : N.m.Base;
                        return l.createElement(N._29, {
                            alignItems: N.c.Center,
                            display: N.P.Flex,
                            flexDirection: N.R.Row,
                            flexGrow: 1,
                            key: i,
                            padding: {
                                x: 3,
                                y: .5
                            },
                            background: a
                        }, l.createElement(N._6, {
                            flexGrow: 1,
                            flexShrink: 1,
                            padding: {
                                right: .5
                            },
                            ellipsis: !0
                        }, l.createElement(C.a, {
                            video: n,
                            selected: o
                        })), l.createElement(N._6, {
                            flexGrow: 0,
                            flexShrink: 0
                        }, e.renderVideoResultButton(o, t[i].id)))
                    })
                }, t.prototype.renderVideoResultButton = function(e, t) {
                    var n = this;
                    return e ? l.createElement(N.u, {
                        "data-test-selector": i.RemoveVideoButton,
                        onClick: function() {
                            n.onVideoRemoveHandler(t)
                        },
                        type: N.A.Hollow
                    }, Object(c.d)("Remove", "CollectionItemSelectorModal")) : l.createElement(N.u, {
                        "data-test-selector": i.AddVideoButton,
                        onClick: function() {
                            n.onVideoAddHandler(t)
                        },
                        type: N.A.Hollow
                    }, Object(c.d)("Add", "CollectionItemSelectorModal"))
                }, t.prototype.videoIsInCollection = function(e, t) {
                    return -1 !== e.items.edges.findIndex(function(e) {
                        return e.node.id === t.id
                    })
                }, t
            }(l.Component),
            F = function(e, t) {
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
            x = Object(a.compose)(Object(a.graphql)(O, {
                options: function(e) {
                    return {
                        variables: {
                            creatorID: e.collection.owner.id,
                            collectionID: e.collection.id
                        }
                    }
                }
            }), Object(a.graphql)(b, {
                name: "addCollectionItem"
            }), Object(a.graphql)(_, {
                name: "removeCollectionItem"
            }))(w);
        var V, T = Object(h.b)(null, function(e, t) {
                return {
                    onComplete: function() {
                        t.onComplete(), e(Object(f.c)())
                    }
                }
            })(x),
            j = n("M0wY"),
            A = n("kk4f"),
            R = n("jcM9"),
            M = n("btUQ");
        ! function(e) {
            e[e.AddVideos = 0] = "AddVideos", e[e.DeleteButton = 1] = "DeleteButton", e[e.ErrorMessage = 2] = "ErrorMessage", e[e.PlayAllButton = 3] = "PlayAllButton", e[e.SaveButton = 4] = "SaveButton", e[e.Thumbnail = 5] = "Thumbnail"
        }(V || (V = {}));
        var P = function(e) {
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
                    return this.state.saveError && (e = l.createElement(N._29, {
                        color: N.J.Error,
                        border: !0,
                        padding: 1,
                        margin: {
                            bottom: 1
                        },
                        fullWidth: !0
                    }, l.createElement(N.O, {
                        "data-test-selector": V.ErrorMessage
                    }, Object(c.d)("The title update failed to save. Please try again.", "CollectionEditorInfoCard")))), l.createElement(N._29, {
                        background: N.m.Alt,
                        display: N.P.Flex,
                        flexDirection: N.R.Row,
                        alignItems: N.c.Stretch
                    }, l.createElement(N._6, {
                        display: N.P.Flex,
                        flexDirection: N.R.Column
                    }, l.createElement(N._6, {
                        margin: {
                            y: 1
                        }
                    }, l.createElement(N.O, {
                        color: N.J.Alt,
                        type: N._43.H6,
                        bold: !0
                    }, Object(c.d)("Collection Thumbnail", "CollectionEditorInfoCard"))), l.createElement(A.a, {
                        "data-test-selector": V.Thumbnail,
                        alt: this.props.collection.title,
                        sizes: [{
                            size: "320px"
                        }],
                        src: this.props.collection.thumbnailURL
                    })), l.createElement(N._6, {
                        display: N.P.Flex,
                        flexDirection: N.R.Column,
                        margin: {
                            left: 3
                        },
                        flexGrow: 2,
                        flexShrink: 0
                    }, l.createElement(N._6, {
                        margin: {
                            y: 1
                        }
                    }, l.createElement(N.O, {
                        color: N.J.Alt,
                        type: N._43.H6,
                        bold: !0
                    }, Object(c.d)("Title", "CollectionEditorInfoCard"))), e, l.createElement(N._6, {
                        display: N.P.Flex,
                        flexDirection: N.R.Row
                    }, l.createElement(N._6, {
                        flexGrow: 1,
                        flexShrink: 1,
                        margin: {
                            right: 1
                        }
                    }, l.createElement(N._2, {
                        type: N._3.Text,
                        defaultValue: this.props.collection.title,
                        onChange: this.onTitleChange
                    })), l.createElement(N._6, {
                        flexGrow: 0,
                        flexShrink: 0
                    }, l.createElement(N.u, {
                        disabled: !this.state.isEditingTitle,
                        onClick: this.onSaveClick,
                        "data-test-selector": V.SaveButton
                    }, Object(c.d)("Save", "CollectionEditorInfoCard")))), l.createElement(N._6, {
                        margin: {
                            top: 1,
                            bottom: 3
                        }
                    }, l.createElement(N.O, {
                        type: N._43.Span,
                        color: N.J.Alt2
                    }, Object(c.d)("Last updated {updatedAt}", {
                        updatedAt: Object(c.c)(new Date(this.props.collection.updatedAt), "long")
                    }, "CollectionEditorInfoCard"))), this.managerMenu()))
                }, t.prototype.managerMenu = function() {
                    return l.createElement(N._6, {
                        display: N.P.Flex,
                        flexDirection: N.R.Row
                    }, l.createElement(N.u, {
                        "data-test-selector": V.PlayAllButton,
                        icon: N._20.Play,
                        type: N.A.Text,
                        linkTo: "/collections/" + this.props.collection.id
                    }, Object(c.d)("Play All", "CollectionEditorInfoCard")), l.createElement(N.u, {
                        "data-test-selector": V.AddVideos,
                        icon: N._20.Plus,
                        onClick: this.onAddVideosClickHandler,
                        type: N.A.Text
                    }, Object(c.d)("Add videos", "CollectionEditorInfoCard")), l.createElement(R.a, {
                        balloonDirection: N.q.BottomCenter,
                        buttonType: N.A.Text,
                        content: {
                            collectionID: this.props.collection.id
                        },
                        tracking: {
                            location: m.PageviewLocation.VideoManagerCollectionEditor
                        }
                    }), l.createElement(N.u, {
                        "data-test-selector": V.DeleteButton,
                        icon: N._20.Trash,
                        type: N.A.Text,
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
            }(l.Component),
            B = Object(a.compose)(Object(a.graphql)(M, {
                name: "updateCollection"
            }))(P);
        var H, L = Object(h.b)(null, function(e) {
                return {
                    onDeleteOptionClick: function(t) {
                        e(Object(f.d)(j.a, {
                            collection: t
                        }))
                    },
                    onAddVideosClick: function(t, n) {
                        e(Object(f.d)(T, {
                            collection: t,
                            onComplete: n
                        }))
                    }
                }
            })(B),
            q = function() {
                return l.createElement(N._29, {
                    background: N.m.Alt,
                    display: N.P.Flex,
                    flexDirection: N.R.Row,
                    alignItems: N.c.Stretch,
                    margin: {
                        bottom: 5
                    }
                }, l.createElement(N._6, {
                    display: N.P.Flex,
                    flexDirection: N.R.Column
                }, l.createElement(N._6, {
                    margin: {
                        y: 1
                    }
                }, l.createElement(N._12, {
                    width: 100
                })), l.createElement(N._12, {
                    height: 180,
                    width: 320
                })), l.createElement(N._6, {
                    display: N.P.Flex,
                    flexDirection: N.R.Column,
                    margin: {
                        left: 3
                    },
                    flexGrow: 2,
                    flexShrink: 0
                }, l.createElement(N._6, {
                    margin: {
                        y: 1
                    }
                }, l.createElement(N._12, {
                    width: 50
                })), l.createElement(N._12, {
                    height: 25,
                    width: 400
                }), l.createElement(N._6, {
                    margin: {
                        top: 1,
                        bottom: 3
                    }
                }, l.createElement(N._12, {
                    height: 15,
                    width: 300
                })), l.createElement(N._12, {
                    height: 30,
                    width: 400
                })))
            },
            G = n("F8kA"),
            U = n("mi6k"),
            z = n("5RjZ"),
            $ = n("KRtN"),
            Q = n("4o7v"),
            J = n("PwTO"),
            K = n("N8CH"),
            Y = n("Z8qZ");
        ! function(e) {
            e.Public = "PUBLIC", e.Private = "PRIVATE"
        }(H || (H = {}));
        var W;
        n("dAJe");
        ! function(e) {
            e[e.ItemLength = 0] = "ItemLength", e[e.VideoLink = 1] = "VideoLink", e[e.Overlay = 2] = "Overlay"
        }(W || (W = {}));
        var Z, X = Object(r.SortableHandle)(function() {
                return l.createElement(N._19, {
                    asset: N._20.DragHandle
                })
            }),
            ee = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        saveError: !1,
                        deleteError: !1
                    }, t.subHeader = function(e) {
                        return l.createElement(N._29, {
                            display: N.P.Flex,
                            flexDirection: N.R.Row,
                            margin: {
                                top: .5
                            },
                            color: N.J.Alt2
                        }, l.createElement(N._6, {
                            padding: {
                                right: 1
                            }
                        }, l.createElement(N._46, {
                            direction: N._48.Bottom,
                            align: N._47.Center,
                            label: Object(c.d)("Published At", "CollectionItemCard")
                        }, l.createElement(N.O, null, Object(c.c)(new Date(e.publishedAt), "long")))), l.createElement(N._6, {
                            padding: {
                                right: 1
                            },
                            display: N.P.Flex,
                            alignItems: N.c.Center
                        }, l.createElement(N._28, {
                            "data-test-selector": W.ItemLength,
                            label: Object(c.d)("Length", "CollectionItemCard"),
                            value: Object(U.a)(e.lengthSeconds),
                            icon: N._20.GlyphLength
                        })), l.createElement(N._6, {
                            padding: {
                                right: 1
                            },
                            display: N.P.Flex,
                            alignItems: N.c.Center
                        }, l.createElement(N._28, {
                            label: Object(c.d)("Video Type", "CollectionItemCard"),
                            value: Object(z.a)(e.broadcastType),
                            icon: N._20.NavVideos
                        })))
                    }, t.reportImageInteractive = function() {
                        t.props.latencyTracking.reportInteractive()
                    }, t
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.collectionItem;
                    return l.createElement(N._6, {
                        className: "collection-item-card",
                        margin: {
                            y: 1
                        }
                    }, l.createElement(Y.a, null, l.createElement(N._29, {
                        background: N.m.Alt,
                        display: N.P.Flex,
                        className: "collection-item__drag-handle"
                    }, l.createElement(X, null)), l.createElement(N._6, {
                        alignSelf: N.d.Center,
                        padding: {
                            x: 1
                        }
                    }, this.props.position), l.createElement(N._6, {
                        flexGrow: 0,
                        flexShrink: 0,
                        position: N._13.Relative
                    }, l.createElement(N.D, {
                        aspect: N.k.Aspect16x9,
                        size: N.E.Size16,
                        onLoad: this.reportImageInteractive,
                        onError: this.reportImageInteractive,
                        src: e.previewThumbnailURL ? e.previewThumbnailURL : "https://static-cdn.jtvnw.net/ttv-playlists-thumbnails-prod/missing-video-thumb-320x180.png",
                        alt: e.title
                    }), this.renderOverlay(this.props.collectionItem)), l.createElement(K.a, null, l.createElement(N._46, {
                        label: Object(c.d)("Watch this video", "CollectionItemCard"),
                        direction: N._48.Right
                    }, l.createElement(N.O, {
                        type: N._43.H5,
                        color: N.J.Alt
                    }, l.createElement(G.a, {
                        "data-test-selector": W.VideoLink,
                        to: {
                            pathname: "/videos/" + this.props.collectionItem.id,
                            state: {
                                content: m.PageviewContent.CollectionItemCard,
                                medium: m.PageviewMedium.VideoManagerCollectionEditor
                            }
                        }
                    }, e.title))), this.subHeader(e)), l.createElement(J.a, null, l.createElement(Q.a, {
                        value: e.viewCount.toString(),
                        icon: N._20.GlyphViews,
                        label: Object(c.d)("Total videos", "CollectionItemCard")
                    })), l.createElement($.a, {
                        options: this.collectionMenuOptions(e)
                    })))
                }, t.prototype.collectionMenuOptions = function(e) {
                    var t = this;
                    return [{
                        asset: N._20.Edit,
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
                                                return n.trys.push([0, 2, , 3]), [4, this.props.updateCollection((i = this.props.parentCollection, l = {
                                                    thumbnailInput: {
                                                        id: e.id,
                                                        type: g.a.Video
                                                    }
                                                }, o.__assign({}, Object(E.a)({
                                                    collectionID: i.id,
                                                    title: l.newTitle,
                                                    thumbnailInput: l.thumbnailInput
                                                }), {
                                                    optimisticResponse: {
                                                        updateCollection: {
                                                            __typename: "UpdateCollectionPayload",
                                                            collection: o.__assign({
                                                                __typename: "Collection"
                                                            }, i, {
                                                                title: l.newTitle || i.title
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
                                        var i, l
                                    })
                                })
                            })
                        }
                    }, {
                        asset: N._20.Trash,
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
                                            return t.trys.push([1, 3, , 4]), [4, this.props.removeCollectionItem(S(this.props.parentCollection, this.props.collectionItem.id, g.a.Video))];
                                        case 2:
                                            return t.sent(), [3, 4];
                                        case 3:
                                            return e = t.sent(), c.j.error(e, "Failed to set this video as the collection thumbnail."), this.setState({
                                                deleteError: !0
                                            }), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }
                    }]
                }, t.prototype.renderOverlay = function(e) {
                    if (e.isDeleted || e.scope !== H.Public) {
                        var t = null,
                            n = null;
                        return e.isDeleted ? (t = Object(c.d)("Deleted", "CollectionItemCard"), n = l.createElement(N._19, {
                            asset: N._20.Trash
                        })) : e.scope !== H.Public && (n = l.createElement(N._19, {
                            asset: N._20.Lock
                        }), t = Object(c.d)("Private", "CollectionItemCard")), l.createElement(N._29, {
                            attachTop: !0,
                            attachLeft: !0,
                            fullWidth: !0,
                            fullHeight: !0,
                            alignItems: N.c.Center,
                            background: N.m.Overlay,
                            "data-test-selector": W.Overlay,
                            display: N.P.Flex,
                            flexDirection: N.R.Column,
                            justifyContent: N._5.Center,
                            position: N._13.Absolute
                        }, n, l.createElement(N.O, null, t))
                    }
                    return null
                }, t
            }(l.Component),
            te = Object(a.compose)(Object(p.d)("CollectionItemCard"), Object(a.graphql)(M, {
                name: "updateCollection"
            }), Object(a.graphql)(_, {
                name: "removeCollectionItem"
            }))(ee),
            ne = Object(r.SortableElement)(function(e) {
                return l.createElement(te, o.__assign({}, e))
            }),
            ie = Object(r.SortableContainer)(function(e) {
                var t = e.collection,
                    n = e.items;
                return l.createElement(N._6, null, n.filter(function(e) {
                    return !!e.id
                }).map(function(e, n) {
                    return l.createElement(ne, {
                        parentCollection: t,
                        collectionItem: e,
                        index: n,
                        key: e.id,
                        position: n + 1
                    })
                }))
            }),
            oe = n("Dz2i"),
            le = n("pi7n");
        n("/brc");
        ! function(e) {
            e[e.BackButton = 0] = "BackButton"
        }(Z || (Z = {}));
        var ae = function(e) {
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
                            var t, l;
                            return o.__generator(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        if (!this.props.data.collection) return [3, 4];
                                        t = y(this.props.data.collection, n, i, e), o.label = 1;
                                    case 1:
                                        return o.trys.push([1, 3, , 4]), [4, this.props.reorderCollectionItem(t)];
                                    case 2:
                                        return o.sent(), [3, 4];
                                    case 3:
                                        return l = o.sent(), c.j.error(l, "Collection reordering Mutation failed"), [3, 4];
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
                    return this.props.data.loading ? (e = this.collectionInfoPlaceholder(), t = this.collectionCardPlaceholders()) : this.props.data.error || !this.props.data.collection ? (e = this.collectionUnavailableError(), t = this.collectionItemsUnavaibleError()) : this.props.data.collection ? (e = l.createElement(L, {
                        collection: this.props.data.collection,
                        onVideosChange: this.props.data.refetch
                    }), t = l.createElement(ie, {
                        collection: this.props.data.collection,
                        items: this.props.data.collection.items.edges.map(function(e) {
                            return e.node
                        }),
                        onSortEnd: this.onSortEnd,
                        useDragHandle: !0
                    }), n = this.props.data.collection.items.pageInfo.hasNextPage || !1) : (e = this.collectionUnavailableError(), t = this.noCollectionItemsCTA()), l.createElement(d.b, null, l.createElement(N._6, {
                        padding: 3,
                        display: N.P.Flex,
                        flexDirection: N.R.Row,
                        className: "collection-editor-page"
                    }, l.createElement(N._6, {
                        flexGrow: 1
                    }, l.createElement(N._6, {
                        margin: {
                            bottom: 1
                        },
                        flexGrow: 1,
                        flexDirection: N.R.Row,
                        display: N.P.Flex
                    }, l.createElement(N._6, {
                        flexGrow: 1
                    }, l.createElement(N.O, {
                        type: N._43.H3
                    }, Object(c.d)("Edit Collection", "CollectionEditorPagePresentation")))), l.createElement(N._6, {
                        padding: {
                            y: .5
                        }
                    }, l.createElement(N.M, {
                        "data-test-selector": Z.BackButton,
                        hoverUnderlineNone: !0,
                        to: {
                            pathname: "/" + this.props.match.params.creatorLogin + "/manager/collections",
                            state: {
                                content: "all_collections",
                                medium: m.PageviewMedium.VideoManagerCollectionEditor
                            }
                        }
                    }, l.createElement(N._6, {
                        display: N.P.Flex,
                        flexDirection: N.R.Row,
                        alignItems: N.c.Center
                    }, l.createElement(N._19, {
                        asset: N._20.ChatSettingsBack,
                        height: 20,
                        width: 20
                    }), l.createElement(N.O, {
                        align: N._53.Middle,
                        bold: !0
                    }, Object(c.d)("All collections", "CollectionEditorPagePresentation"))))), e, t, l.createElement(d.a, {
                        enabled: n,
                        loadMore: this.props.loadMore
                    }))))
                }, t.prototype.collectionCardPlaceholders = function() {
                    return [l.createElement(v.a, {
                        key: 1
                    }), l.createElement(v.a, {
                        key: 2
                    }), l.createElement(v.a, {
                        key: 3
                    })]
                }, t.prototype.collectionInfoPlaceholder = function() {
                    return l.createElement(q, null)
                }, t.prototype.noCollectionItemsCTA = function() {
                    return l.createElement("div", null)
                }, t.prototype.collectionItemsUnavaibleError = function() {
                    return l.createElement("div", null)
                }, t.prototype.collectionUnavailableError = function() {
                    return l.createElement("div", null)
                }, t
            }(l.Component),
            re = function(e, t) {
                var n = t.fetchMoreResult;
                if (!n || !n.collection || !n.collection.items) return e;
                var i = e.collection && e.collection.items.edges || [];
                return n.collection.items.edges = i.concat(n.collection.items.edges), n
            },
            ce = Object(a.compose)(Object(a.graphql)(oe, {
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
                                query: oe,
                                updateQuery: re
                            })
                        }
                    })
                }
            }), Object(a.graphql)(le, {
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
            }))(ae),
            de = n("L2R7"),
            se = function(e) {
                return window.location.replace("https://www.twitch.tv/" + encodeURIComponent(e.match.params.creatorLogin) + "/manager/collections/edit/" + e.match.params.collectionID), null
            },
            ue = function(e) {
                return Object(de.a)() ? l.createElement(ce, o.__assign({}, e)) : l.createElement(se, o.__assign({}, e))
            };
        n.d(t, "CollectionEditorPage", function() {
            return ue
        })
    },
    KRtN: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            o = n("GiK3"),
            l = n("rCmJ"),
            a = n("Odds"),
            r = function(e) {
                var t = e.asset ? o.createElement(a._19, {
                    asset: e.asset
                }) : null;
                return o.createElement(a._4, {
                    linkTo: e.linkTo,
                    onClick: e.onClick
                }, o.createElement(a._6, {
                    alignItems: a.c.Center,
                    display: a.P.Flex,
                    flexGrow: 1,
                    padding: 1
                }, t, o.createElement(a._0, {
                    margin: {
                        left: 1
                    }
                }, o.createElement(a.O, null, e.title))))
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
                return this.state.showDropMenu && (e = this.dropMenu()), o.createElement(a._6, {
                    flexGrow: 0,
                    flexShrink: 0,
                    display: a.P.Flex,
                    position: a._13.Relative
                }, o.createElement(a._0, {
                    fullHeight: !0
                }, o.createElement(l.a, {
                    onClickOut: this.clickOutHandler
                }, o.createElement(a._6, {
                    fullHeight: !0,
                    display: a.P.Flex,
                    alignItems: a.c.Stretch
                }, o.createElement(a.u, {
                    disabled: 0 === this.props.options.length,
                    icon: a._20.More,
                    onClick: this.menuButtonClickHandler,
                    type: a.A.Text
                })), e)))
            }, t.prototype.dropMenu = function() {
                var e = this.props.options.map(function(e, t) {
                    return o.createElement(r, i.__assign({
                        key: t
                    }, e))
                });
                return o.createElement(a.p, {
                    size: a.r.Small,
                    direction: a.q.BottomRight,
                    noTail: !0,
                    show: !0
                }, e)
            }, t
        }(o.Component)
    },
    M0wY: function(e, t, n) {
        "use strict";
        var i, o = n("TToO"),
            l = n("GiK3"),
            a = n("3zLD"),
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
                    return this.props.error && (t = l.createElement(v.e, {
                        delay: v.f.Short,
                        type: v.i.BounceIn,
                        enabled: !0
                    }, l.createElement(v._29, {
                        border: !0,
                        margin: {
                            bottom: 1
                        },
                        padding: 1,
                        fullWidth: !0
                    }, l.createElement(v.O, {
                        bold: !0,
                        color: v.J.Error,
                        "data-test-selector": i.ErrorAlert
                    }, this.props.error)))), l.createElement(v.e, {
                        type: v.i.FadeIn,
                        delay: v.f.Medium,
                        duration: v.g.Medium,
                        enabled: !0
                    }, l.createElement(v._29, {
                        background: v.m.Base,
                        padding: {
                            x: 3,
                            top: 2,
                            bottom: 3
                        }
                    }, l.createElement(v._0, {
                        padding: {
                            bottom: 1
                        }
                    }, l.createElement(v.O, {
                        fontSize: v.T.Size3
                    }, Object(c.d)("Delete Collection", "DeleteCollectionModal"))), l.createElement(v.O, {
                        fontSize: v.T.Size6
                    }, Object(c.d)("Are you sure you want to delete this collection?", "DeleteCollectionModal")), l.createElement(v.O, {
                        fontSize: v.T.Size6
                    }, Object(c.d)("This action cannot be undone. ", "DeleteCollectionModal")), l.createElement(v._6, {
                        padding: {
                            y: 2
                        }
                    }, l.createElement(p.a, {
                        collection: e,
                        hideOptionsMenu: !0
                    })), t, l.createElement(v._6, {
                        display: v.P.Flex,
                        flexDirection: v.R.Row,
                        justifyContent: v._5.Center
                    }, l.createElement(v._6, {
                        margin: {
                            x: .5
                        }
                    }, l.createElement(v.u, {
                        "data-test-selector": i.CancelButton,
                        onClick: this.props.onCancel,
                        type: v.A.Hollow
                    }, Object(c.d)("Cancel", "DeleteCollectionModal"))), l.createElement(v._6, {
                        margin: {
                            x: .5
                        }
                    }, l.createElement(v.u, {
                        "data-test-selector": i.ConfirmButton,
                        onClick: this.props.onDeleteRequest,
                        type: v.A.Alert
                    }, Object(c.d)("Delete", "DeleteCollectionModal")))), l.createElement(m.a, {
                        closeOnBackdropClick: !0
                    })))
                }, t
            }(l.Component),
            f = n("e6eF");
        n.d(t, "a", function() {
            return C
        });
        var k = function(e) {
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
                    return l.createElement(h, {
                        collection: this.props.collection,
                        error: this.state.deletionError,
                        onCancel: this.onCancelHandler,
                        onDeleteRequest: this.onDeleteHandler
                    })
                }, t
            }(l.Component),
            g = Object(a.compose)(Object(d.a)(f, {
                name: "onDeleteRequest"
            }))(k);
        var C = Object(r.b)(null, function(e, t) {
            return {
                onClose: function() {
                    e(Object(u.c)())
                },
                onSuccess: function() {
                    e(Object(u.c)()), t.onSuccess && t.onSuccess()
                }
            }
        })(g)
    },
    N8CH: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return l
        });
        var i = n("GiK3"),
            o = (n.n(i), n("Odds")),
            l = function(e) {
                return i.createElement(o._6, {
                    alignItems: o.c.Start,
                    display: o.P.Flex,
                    flexDirection: o.R.Column,
                    flexGrow: 1,
                    flexShrink: 1,
                    justifyContent: o._5.Center,
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
            return a
        });
        var i = n("GiK3"),
            o = (n.n(i), n("Odds")),
            l = n("QmYP"),
            a = (n.n(l), function(e) {
                return i.createElement(o._6, {
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
            l = n("Odds"),
            a = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return o.createElement(l._29, {
                        background: l.m.Base,
                        elevation: 1,
                        display: l.P.Flex,
                        flexDirection: l.R.Row,
                        alignItems: l.c.Stretch
                    }, this.props.children)
                }, t
            }(o.Component);
        n.d(t, "a", function() {
            return a
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

        function l(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !o[t] && (o[t] = !0, !0)
            })
        }
        i.definitions = i.definitions.concat(l(n("OEl7").definitions)), i.definitions = i.definitions.concat(l(n("9Gwb").definitions)), e.exports = i
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

        function l(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !o[t] && (o[t] = !0, !0)
            })
        }
        i.definitions = i.definitions.concat(l(n("OEl7").definitions)), i.definitions = i.definitions.concat(l(n("9Gwb").definitions)), e.exports = i
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
                    }, {
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
                        }, {
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "options"
                            },
                            value: {
                                kind: "ObjectValue",
                                fields: [{
                                    kind: "ObjectField",
                                    name: {
                                        kind: "Name",
                                        value: "includeAllItems"
                                    },
                                    value: {
                                        kind: "BooleanValue",
                                        value: !0
                                    }
                                }]
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
                end: 713
            }
        };
        i.loc.source = {
            body: '#import "twilight/features/video-search-card/models/search-card-video.gql"\n#import "twilight/pages/video-tools/pages/collection-editor/components/collection-editor-page/collection-fragment.gql"\n#import "twilight/pages/video-tools/pages/collection-editor/components/collection-editor-page/item-connection-fragment.gql"\nquery CollectionEditor_SearchCreatorVideos($creatorID: ID! $collectionID: ID! $after: Cursor $search: VideoConnectionSearchParams) {\nuser(id: $creatorID) {\nid\nsearchVideos(first: 6 after: $after search: $search) {\nedges {\ncursor\nnode {\n...SearchCardVideo\n}\n}\npageInfo {\nhasNextPage\n}\n}\n}\ncollection(id: $collectionID options: { includeAllItems: true}) {\n...collectionFields\n...itemConnection\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var o = {};

        function l(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !o[t] && (o[t] = !0, !0)
            })
        }
        i.definitions = i.definitions.concat(l(n("y+8p").definitions)), i.definitions = i.definitions.concat(l(n("OEl7").definitions)), i.definitions = i.definitions.concat(l(n("9Gwb").definitions)), e.exports = i
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
            l = n("TToO"),
            a = n("GiK3"),
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
            k = n("Odds"),
            g = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onDeleteOptionClickHandler = function() {
                        t.props.onDeleteOptionClick(t.props.collection)
                    }, t
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.collection;
                    return a.createElement(m.a, null, a.createElement(k._6, {
                        flexShrink: 0
                    }, a.createElement(s.a, {
                        alt: e.title,
                        sizes: [{
                            size: "160px"
                        }],
                        src: e.thumbnailURL,
                        videoCount: e.items.totalCount
                    })), a.createElement(f.a, null, a.createElement(k.O, {
                        bold: !0,
                        type: k._43.H4,
                        color: k.J.Alt
                    }, e.title), a.createElement(k._46, {
                        direction: k._48.Bottom,
                        label: Object(r.d)("Last Updated", "CollectionManagerCard")
                    }, a.createElement(k.O, {
                        color: k.J.Alt2
                    }, Object(r.c)(new Date(e.updatedAt), "long")))), a.createElement(h.a, null, this.collectionStats(e)), this.renderCardMenu())
                }, t.prototype.renderCardMenu = function() {
                    if (this.props.hideOptionsMenu || !this.props.collection.owner) return null;
                    var e = [{
                        asset: k._20.Edit,
                        linkTo: {
                            pathname: "/" + this.props.collection.owner.login + "/manager/collections/" + this.props.collection.id,
                            state: {
                                content: d.PageviewContent.CollectionCard,
                                medium: d.PageviewMedium.VideoManagerCollectionManager
                            }
                        },
                        title: Object(r.d)("Edit", "CollectionManagerCard")
                    }, {
                        asset: k._20.Trash,
                        onClick: this.onDeleteOptionClickHandler,
                        title: Object(r.d)("Delete", "CollectionManagerCard")
                    }];
                    return a.createElement(p.a, {
                        options: e
                    })
                }, t.prototype.collectionStats = function(e) {
                    return [{
                        value: Object(c.a)(e.lengthSeconds),
                        icon: k._20.GlyphLength,
                        label: Object(r.d)("Collection length", "CollectionManagerCard")
                    }, {
                        value: "" + e.viewCount,
                        icon: k._20.GlyphViews,
                        label: Object(r.d)("Views", "CollectionManagerCard")
                    }].map(function(e, t) {
                        return a.createElement(v.a, l.__assign({
                            key: t
                        }, e))
                    })
                }, t
            }(a.Component),
            C = Object(u.d)("CollectionManagerCard", {
                autoReportInteractive: !0
            })(g),
            b = n("M0wY");
        n.d(t, "a", function() {
            return _
        });
        var _ = Object(i.b)(null, function(e, t) {
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
//# sourceMappingURL=pages.video-tools.pages.collection-editor-b0dcd90dd9e20292f84dfb7fbdead242.js.map