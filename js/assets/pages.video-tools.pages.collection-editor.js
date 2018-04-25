webpackJsonp([90], {
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
                    var e = o.createElement(a._8, {
                            alignItems: a.c.Center,
                            display: a.R.Flex,
                            fullHeight: !0,
                            justifyContent: a._7.Center,
                            padding: 2
                        }, o.createElement(a._31, {
                            icon: this.props.icon,
                            label: this.props.label,
                            value: this.props.value
                        })),
                        t = this.props.linkTo ? o.createElement(a._6, {
                            alpha: !0,
                            linkTo: this.props.linkTo,
                            targetBlank: !0
                        }, e) : e;
                    return o.createElement(a._8, i.__assign({
                        display: a.R.InlineFlex,
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
                                value: "100"
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
                end: 395
            }
        };
        n.loc.source = {
            body: "fragment itemConnection on Collection {\n# Request the max (50 atm) because we support drag and drop\n# reordering which makes little sense at the moment without all the items\nitems(first: 100) {\ntotalCount\npageInfo {\nhasNextPage\n}\nedges {\ncursor\nnode {\n... on Video {\nid\nbroadcastType\nisDeleted\nlengthSeconds\npreviewThumbnailURL(width: 240 height: 135)\npublishedAt\nscope\ntitle\nviewCount\n}\n}\n}\n}\n}",
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
    F0UT: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return s
        });
        var i, o = n("TToO"),
            l = n("GiK3"),
            a = (n.n(l), n("6sO2")),
            r = n("6BvN"),
            c = n("Odds"),
            d = String.fromCharCode(160);
        ! function(e) {
            e.SubmitButton = "SubmitButton", e.TitleInput = "TitleInput"
        }(i || (i = {}));
        var s = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.state = {
                    collectionTitle: "",
                    localTitleChanges: !1
                }, t.onNameInputChange = function(e) {
                    t.setState({
                        collectionTitle: e.currentTarget.value,
                        localTitleChanges: !0
                    })
                }, t.onSubmit = function() {
                    t.setState({
                        localTitleChanges: !1
                    }, function() {
                        return t.props.onSubmit(t.state.collectionTitle)
                    })
                }, t.onKeyDown = function(e) {
                    e.keyCode !== r.a.Enter || t.canSaveTitle() || t.onSubmit()
                }, t
            }
            return o.__extends(t, e), t.prototype.render = function() {
                var e = Object(a.d)("{currentLength} of {maxLength} characters.", {
                        currentLength: this.state.collectionTitle.length.toString(),
                        maxLength: 100..toString()
                    }, "CollectionCreator"),
                    t = "";
                return !this.state.localTitleChanges && this.props.errorMessage.length > 0 && (t = this.props.errorMessage), l.createElement(c.W, {
                    hint: this.state.collectionTitle.length > 0 ? e : d,
                    error: t.length > 0,
                    errorMessage: t,
                    label: ""
                }, l.createElement(c.Y, null, l.createElement(c.L, {
                    cols: {
                        default: 6,
                        xl: 4
                    }
                }, l.createElement(c._4, {
                    "data-test-selector": i.TitleInput,
                    defaultValue: this.props.defaultTitle,
                    disabled: this.props.disabled,
                    maxLength: 100,
                    onChange: this.onNameInputChange,
                    placeholder: Object(a.d)("Collection name", "CollectionCreator"),
                    type: c._5.Text,
                    onKeyDown: this.onKeyDown
                })), l.createElement(c.L, {
                    cols: 1
                }, l.createElement(c.v, {
                    "data-test-selector": i.SubmitButton,
                    disabled: !this.canSaveTitle(),
                    onClick: this.onSubmit
                }, this.props.callToAction))))
            }, t.prototype.canSaveTitle = function() {
                var e = !(this.state.collectionTitle && this.state.collectionTitle.replace(/\s/g, "").length > 0),
                    t = Boolean(this.state.collectionTitle && this.state.collectionTitle.length > 100),
                    n = this.state.collectionTitle === this.props.defaultTitle;
                return !(e || t || n)
            }, t
        }(l.Component)
    },
    KO2S: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i, o = n("TToO"),
            l = n("GiK3"),
            a = n("6sO2"),
            r = n("yWCw"),
            c = n("Snvs"),
            d = n("RH2O"),
            s = n("V5M+"),
            u = n("3zLD"),
            m = n("+8VM"),
            p = n("zCIC"),
            v = n("oIkB"),
            h = n("O8Ns"),
            g = (n("gpuH"), n("h5eQ")),
            f = n("8wGL"),
            k = n("gDYr"),
            C = function(e, t) {
                return o.__assign({}, Object(v.a)({
                    collectionID: e.id,
                    title: t.newTitle,
                    thumbnailInput: t.thumbnailInput
                }), {
                    optimisticResponse: {
                        updateCollection: {
                            __typename: "UpdateCollectionPayload",
                            collection: o.__assign({
                                __typename: "Collection"
                            }, e, {
                                title: t.newTitle || e.title
                            })
                        }
                    }
                })
            },
            b = function(e, t, n, i) {
                return o.__assign({}, Object(v.a)({
                    itemID: t,
                    collectionID: e.id,
                    position: n,
                    itemType: h.a.Video
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
            E = function(e, t, n) {
                var i = e.items.edges.filter(function(e) {
                        return e.node.id !== t
                    }),
                    l = e.id;
                return o.__assign({}, Object(v.a)({
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
            _ = function(e, t, n) {
                return o.__assign({}, Object(v.a)({
                    collectionID: e.id,
                    itemID: t,
                    itemType: n
                }))
            },
            y = n("Odds"),
            S = n("j5vp");
        n("kt/X");
        ! function(e) {
            e[e.AddVideoButton = 0] = "AddVideoButton", e[e.RemoveVideoButton = 1] = "RemoveVideoButton", e[e.DoneButton = 2] = "DoneButton"
        }(i || (i = {}));
        var I = 200,
            N = function(e) {
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
                                            return n.trys.push([0, 2, , 3]), [4, this.props.addCollectionItem(_(this.props.data.collection, e, h.a.Video))];
                                        case 1:
                                            return n.sent(), [3, 3];
                                        case 2:
                                            return t = n.sent(), a.j.error(t, "Failed adding item to collection"), this.setState({
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
                                            return n.trys.push([0, 2, , 3]), [4, this.props.removeCollectionItem(E(this.props.data.collection, e, h.a.Video))];
                                        case 1:
                                            return n.sent(), [3, 3];
                                        case 2:
                                            return t = n.sent(), a.j.error(t, "Failed adding item to collection"), this.setState({
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
                            query: S,
                            variables: {
                                creatorID: t.props.data.collection.owner.id,
                                after: n,
                                collectionID: t.props.data.collection.id
                            },
                            updateQuery: O
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
                        }, I);
                        t.setState({
                            searchChangeTimeoutID: i
                        })
                    }, t
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    var e = !!(this.props.data.user && this.props.data.user.searchVideos && this.props.data.user.searchVideos.pageInfo.hasNextPage);
                    return l.createElement(y.e, {
                        type: y.j.FadeIn,
                        delay: y.f.Medium,
                        duration: y.g.Medium,
                        enabled: !0
                    }, l.createElement(y._32, {
                        background: y.n.Base,
                        className: "collection-editor-item-selector",
                        display: y.R.Flex,
                        flexDirection: y.T.Column
                    }, l.createElement(y._8, {
                        padding: {
                            x: 3,
                            y: 2
                        }
                    }, l.createElement(y.Q, {
                        fontSize: y.V.Size4
                    }, Object(a.d)("Add videos to collection", "CollectionItemSelectorModal")), l.createElement(y._8, {
                        padding: {
                            y: 1
                        }
                    }, l.createElement(y.W, {
                        label: Object(a.d)("Search your videos", "CollectionItemSelectorModal")
                    }, l.createElement(y._25, {
                        onChange: this.onSearchInputChangeHandler,
                        placeholder: Object(a.d)("Filter by video title", "CollectionItemSelectorModal")
                    })))), l.createElement(p.b, {
                        suppressScrollX: !0
                    }, l.createElement(y._8, {
                        display: y.R.Flex,
                        flexDirection: y.T.Column
                    }, this.renderVideoSelectors(), l.createElement(p.a, {
                        enabled: e,
                        loadMore: this.onLoadMoreHandler
                    }))), l.createElement(y._32, {
                        display: y.R.Flex,
                        justifyContent: y._7.Center,
                        padding: {
                            y: 2
                        },
                        background: y.n.Base,
                        flexShrink: 0
                    }, l.createElement(y.v, {
                        "data-test-selector": i.DoneButton,
                        onClick: this.onCompleteClickHandler
                    }, Object(a.d)("Done", "CollectionItemSelectorModal"))), l.createElement(m.a, {
                        closeOnBackdropClick: !0
                    })))
                }, t.prototype.componentWillUnmount = function() {
                    this.state.searchChangeTimeoutID && clearTimeout(this.state.searchChangeTimeoutID)
                }, t.prototype.renderVideoSelectors = function() {
                    var e = this;
                    if (this.state.searchChangeTimeoutID || this.props.data.loading) return l.createElement(y._10, {
                        fillContent: !0,
                        delay: 500
                    });
                    if (this.props.data.error || !this.props.data.user || !this.props.data.user.searchVideos) return l.createElement("div", null);
                    var t = this.props.data.user.searchVideos.edges.map(function(e) {
                        return e.node
                    });
                    return 0 === t.length ? l.createElement("div", null) : t.map(function(n, i) {
                        var o = e.videoIsInCollection(e.props.data.collection, n),
                            a = o ? y.n.Alt2 : y.n.Base;
                        return l.createElement(y._32, {
                            alignItems: y.c.Center,
                            display: y.R.Flex,
                            flexDirection: y.T.Row,
                            flexGrow: 1,
                            key: i,
                            padding: {
                                x: 3,
                                y: .5
                            },
                            background: a
                        }, l.createElement(y._8, {
                            flexGrow: 1,
                            flexShrink: 1,
                            padding: {
                                right: .5
                            },
                            ellipsis: !0
                        }, l.createElement(g.a, {
                            video: n,
                            selected: o
                        })), l.createElement(y._8, {
                            flexGrow: 0,
                            flexShrink: 0
                        }, e.renderVideoResultButton(o, t[i].id)))
                    })
                }, t.prototype.renderVideoResultButton = function(e, t) {
                    var n = this;
                    return e ? l.createElement(y.v, {
                        "data-test-selector": i.RemoveVideoButton,
                        onClick: function() {
                            n.onVideoRemoveHandler(t)
                        },
                        type: y.B.Hollow
                    }, Object(a.d)("Remove", "CollectionItemSelectorModal")) : l.createElement(y.v, {
                        "data-test-selector": i.AddVideoButton,
                        onClick: function() {
                            n.onVideoAddHandler(t)
                        },
                        type: y.B.Hollow
                    }, Object(a.d)("Add", "CollectionItemSelectorModal"))
                }, t.prototype.videoIsInCollection = function(e, t) {
                    return -1 !== e.items.edges.findIndex(function(e) {
                        return e.node.id === t.id
                    })
                }, t
            }(l.Component),
            O = function(e, t) {
                if (!t.fetchMoreResult) return e;
                var n = t.fetchMoreResult;
                return n.user && n.user.searchVideos ? {
                    user: o.__assign({}, n.user, {
                        searchVideos: o.__assign({}, n.user.searchVideos, {
                            edges: Object(v.c)(e.user.searchVideos.edges, n.user.searchVideos.edges)
                        })
                    }),
                    collection: e.collection
                } : e
            },
            D = Object(u.compose)(Object(u.graphql)(S, {
                options: function(e) {
                    return {
                        variables: {
                            creatorID: e.collection.owner.id,
                            collectionID: e.collection.id
                        }
                    }
                }
            }), Object(u.graphql)(f, {
                name: "addCollectionItem"
            }), Object(u.graphql)(k, {
                name: "removeCollectionItem"
            }))(N);
        var w, T = Object(d.b)(null, function(e, t) {
                return {
                    onComplete: function() {
                        t.onComplete(), e(Object(s.c)())
                    }
                }
            })(D),
            x = n("CIox"),
            F = n("i61F"),
            V = n("j7/Y"),
            j = n("w9tK"),
            R = n("vH/s"),
            A = n("CSlQ"),
            M = n("8/8b"),
            P = n("M0wY"),
            B = n("mi6k"),
            L = n("kk4f"),
            H = n("jcM9"),
            q = n("F0UT"),
            G = n("btUQ");
        ! function(e) {
            e[e.AddVideos = 0] = "AddVideos", e[e.DeleteButton = 1] = "DeleteButton", e[e.ErrorMessage = 2] = "ErrorMessage", e[e.PlayAllButton = 3] = "PlayAllButton", e[e.SaveButton = 4] = "SaveButton", e[e.Thumbnail = 5] = "Thumbnail"
        }(w || (w = {}));
        var U = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        saveError: ""
                    }, t.onAddVideosClickHandler = function() {
                        t.props.onAddVideosClick(t.props.collection, t.props.onVideosChange)
                    }, t.onDeleteOptionClickHandler = function() {
                        t.props.onDeleteOptionClick(t.props.collection, function() {
                            t.props.history.push("/" + t.props.match.params.creatorLogin + "/manager/collections", {
                                content: R.PageviewContent.CollectionCard,
                                medium: R.PageviewMedium.VideoManagerCollectionEditor
                            })
                        })
                    }, t.onSaveClick = function(e) {
                        t.setState({
                            saveError: ""
                        }, function() {
                            return o.__awaiter(t, void 0, void 0, function() {
                                var t;
                                return o.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return n.trys.push([0, 2, , 3]), [4, this.props.updateCollection(C(this.props.collection, {
                                                newTitle: e
                                            }))];
                                        case 1:
                                            return n.sent(), [3, 3];
                                        case 2:
                                            return t = n.sent(), a.j.error(t, "Failed to update collection title"), this.setState({
                                                saveError: Object(a.d)("The title update failed to save. Please try again.", "CollectionEditorInfoCard")
                                            }), [3, 3];
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        })
                    }, t
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    return l.createElement(y._32, {
                        background: y.n.Alt,
                        display: y.R.Flex,
                        flexDirection: y.T.Row,
                        alignItems: y.c.Stretch
                    }, l.createElement(y._8, {
                        display: y.R.Flex,
                        flexDirection: y.T.Column
                    }, l.createElement(y._8, {
                        margin: {
                            y: 1
                        }
                    }, l.createElement(y.Q, {
                        color: y.K.Alt,
                        type: y._46.H6,
                        bold: !0
                    }, Object(a.d)("Collection Thumbnail", "CollectionEditorInfoCard"))), l.createElement(L.a, {
                        "data-test-selector": w.Thumbnail,
                        alt: this.props.collection.title,
                        sizes: [{
                            size: "320px"
                        }],
                        src: this.props.collection.thumbnailURL,
                        videoCount: this.props.collection.items.totalCount
                    })), l.createElement(y._8, {
                        display: y.R.Flex,
                        flexDirection: y.T.Column,
                        margin: {
                            left: 3
                        },
                        flexGrow: 2,
                        flexShrink: 0
                    }, l.createElement(y._8, {
                        margin: {
                            y: 1
                        }
                    }, l.createElement(y.Q, {
                        color: y.K.Alt,
                        type: y._46.H6,
                        bold: !0
                    }, Object(a.d)("Title", "CollectionEditorInfoCard"))), l.createElement(y._8, {
                        display: y.R.Flex,
                        flexDirection: y.T.Row
                    }, l.createElement(q.a, {
                        onSubmit: this.onSaveClick,
                        callToAction: Object(a.d)("Save", "CollectionEditorInfoCard"),
                        errorMessage: this.state.saveError,
                        defaultTitle: this.props.collection.title
                    })), l.createElement(y._8, {
                        margin: {
                            top: 1,
                            bottom: 3
                        },
                        display: y.R.Flex,
                        flexDirection: y.T.Row
                    }, l.createElement(y.Q, {
                        type: y._46.Span,
                        color: y.K.Alt2
                    }, Object(a.d)("{totalViewCount, plural, one {# view} other {# views}}", {
                        totalViewCount: this.props.collection.viewCount || 0
                    }, "CollectionEditorInfoCard")), l.createElement(y._8, {
                        padding: {
                            x: 1
                        }
                    }, l.createElement(y.Q, {
                        type: y._46.Span,
                        color: y.K.Alt2
                    }, "·")), l.createElement(y.Q, {
                        type: y._46.Span,
                        color: y.K.Alt2
                    }, Object(B.a)(this.props.collection.lengthSeconds)), l.createElement(y._8, {
                        padding: {
                            x: 1
                        }
                    }, l.createElement(y.Q, {
                        type: y._46.Span,
                        color: y.K.Alt2
                    }, "·")), l.createElement(y.Q, {
                        type: y._46.Span,
                        color: y.K.Alt2
                    }, Object(a.d)("Last updated {updatedAt}", {
                        updatedAt: Object(a.c)(new Date(this.props.collection.updatedAt), "long")
                    }, "CollectionEditorInfoCard"))), this.managerMenu()))
                }, t.prototype.managerMenu = function() {
                    return l.createElement(y._8, {
                        display: y.R.Flex,
                        flexDirection: y.T.Row
                    }, l.createElement(y.v, {
                        "data-test-selector": w.PlayAllButton,
                        icon: y._23.Play,
                        type: y.B.Text,
                        linkTo: "/collections/" + this.props.collection.id
                    }, Object(a.d)("Play All", "CollectionEditorInfoCard")), l.createElement(y.v, {
                        "data-test-selector": w.AddVideos,
                        icon: y._23.Plus,
                        onClick: this.onAddVideosClickHandler,
                        type: y.B.Text
                    }, Object(a.d)("Add videos", "CollectionEditorInfoCard")), l.createElement(H.a, {
                        balloonDirection: y.r.BottomCenter,
                        buttonType: y.B.Text,
                        content: {
                            collectionID: this.props.collection.id
                        },
                        tracking: {
                            location: R.PageviewLocation.VideoManagerCollectionEditor
                        }
                    }), l.createElement(y.v, {
                        "data-test-selector": w.DeleteButton,
                        icon: y._23.Trash,
                        type: y.B.Text,
                        onClick: this.onDeleteOptionClickHandler
                    }, Object(a.d)("Delete", "CollectionEditorInfoCard")))
                }, t
            }(l.Component),
            Q = Object(u.compose)(Object(u.graphql)(G, {
                name: "updateCollection"
            }))(Object(x.f)(U));
        var K, z = Object(d.b)(null, function(e) {
                return {
                    onDeleteOptionClick: function(t, n) {
                        e(Object(s.d)(P.a, {
                            collection: t,
                            onSuccess: n
                        }))
                    },
                    onAddVideosClick: function(t, n) {
                        e(Object(s.d)(T, {
                            collection: t,
                            onComplete: n
                        }))
                    }
                }
            })(Q),
            $ = function() {
                return l.createElement(y._32, {
                    background: y.n.Alt,
                    display: y.R.Flex,
                    flexDirection: y.T.Row,
                    alignItems: y.c.Stretch,
                    margin: {
                        bottom: 5
                    }
                }, l.createElement(y._8, {
                    display: y.R.Flex,
                    flexDirection: y.T.Column
                }, l.createElement(y._8, {
                    margin: {
                        y: 1
                    }
                }, l.createElement(y._14, {
                    width: 100
                })), l.createElement(y._14, {
                    height: 180,
                    width: 320
                })), l.createElement(y._8, {
                    display: y.R.Flex,
                    flexDirection: y.T.Column,
                    margin: {
                        left: 3
                    },
                    flexGrow: 2,
                    flexShrink: 0
                }, l.createElement(y._8, {
                    margin: {
                        y: 1
                    }
                }, l.createElement(y._14, {
                    width: 50
                })), l.createElement(y._14, {
                    height: 25,
                    width: 400
                }), l.createElement(y._8, {
                    margin: {
                        top: 1,
                        bottom: 3
                    }
                }, l.createElement(y._14, {
                    height: 15,
                    width: 300
                })), l.createElement(y._14, {
                    height: 30,
                    width: 400
                })))
            },
            Y = n("F8kA"),
            W = n("5RjZ"),
            Z = n("KRtN"),
            J = n("4o7v"),
            X = n("PwTO"),
            ee = n("N8CH"),
            te = n("Z8qZ");
        ! function(e) {
            e.Public = "PUBLIC", e.Private = "PRIVATE"
        }(K || (K = {}));
        var ne;
        n("dAJe");
        ! function(e) {
            e[e.ItemLength = 0] = "ItemLength", e[e.VideoLink = 1] = "VideoLink", e[e.Overlay = 2] = "Overlay"
        }(ne || (ne = {}));
        var ie, oe = Object(F.SortableHandle)(function() {
                return l.createElement(y._22, {
                    asset: y._23.DragHandle
                })
            }),
            le = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        saveError: !1,
                        deleteError: !1
                    }, t.subHeader = function(e) {
                        return l.createElement(y._32, {
                            display: y.R.Flex,
                            flexDirection: y.T.Row,
                            margin: {
                                top: .5
                            },
                            color: y.K.Alt2
                        }, l.createElement(y._8, {
                            padding: {
                                right: 1
                            }
                        }, l.createElement(y._49, {
                            direction: y._51.Bottom,
                            align: y._50.Center,
                            label: Object(a.d)("Published At", "CollectionItemCard")
                        }, l.createElement(y.Q, null, Object(a.c)(new Date(e.publishedAt), "long")))), l.createElement(y._8, {
                            padding: {
                                right: 1
                            },
                            display: y.R.Flex,
                            alignItems: y.c.Center
                        }, l.createElement(y._31, {
                            "data-test-selector": ne.ItemLength,
                            label: Object(a.d)("Length", "CollectionItemCard"),
                            value: Object(B.a)(e.lengthSeconds),
                            icon: y._23.GlyphLength
                        })), l.createElement(y._8, {
                            padding: {
                                right: 1
                            },
                            display: y.R.Flex,
                            alignItems: y.c.Center
                        }, l.createElement(y._31, {
                            label: Object(a.d)("Video Type", "CollectionItemCard"),
                            value: Object(W.a)(e.broadcastType),
                            icon: y._23.NavVideos
                        })))
                    }, t.reportImageInteractive = function() {
                        t.props.latencyTracking.reportInteractive()
                    }, t
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.collectionItem;
                    return l.createElement(y._8, {
                        className: "collection-item-card",
                        margin: {
                            y: 1
                        }
                    }, l.createElement(te.a, null, l.createElement(y._32, {
                        background: y.n.Alt,
                        display: y.R.Flex,
                        className: "collection-item__drag-handle"
                    }, l.createElement(oe, null)), l.createElement(y._8, {
                        alignSelf: y.d.Center,
                        padding: {
                            x: 1
                        }
                    }, this.props.position), l.createElement(y._8, {
                        flexGrow: 0,
                        flexShrink: 0,
                        position: y._15.Relative
                    }, l.createElement(y.E, {
                        aspect: y.l.Aspect16x9,
                        size: y.F.Size16,
                        onLoad: this.reportImageInteractive,
                        onError: this.reportImageInteractive,
                        src: e.previewThumbnailURL ? e.previewThumbnailURL : "https://static-cdn.jtvnw.net/ttv-playlists-thumbnails-prod/missing-video-thumb-320x180.png",
                        alt: e.title
                    }), this.renderOverlay(this.props.collectionItem)), l.createElement(ee.a, null, l.createElement(y._49, {
                        label: Object(a.d)("Watch this video", "CollectionItemCard"),
                        direction: y._51.Right
                    }, l.createElement(y.Q, {
                        type: y._46.H5,
                        color: y.K.Alt
                    }, l.createElement(Y.a, {
                        "data-test-selector": ne.VideoLink,
                        to: {
                            pathname: "/videos/" + this.props.collectionItem.id,
                            state: {
                                content: R.PageviewContent.CollectionItemCard,
                                medium: R.PageviewMedium.VideoManagerCollectionEditor
                            }
                        }
                    }, e.title))), this.subHeader(e)), l.createElement(X.a, null, l.createElement(J.a, {
                        value: e.viewCount.toString(),
                        icon: y._23.GlyphViews,
                        label: Object(a.d)("Total videos", "CollectionItemCard")
                    })), l.createElement(Z.a, {
                        options: this.collectionMenuOptions(e)
                    })))
                }, t.prototype.collectionMenuOptions = function(e) {
                    var t = this;
                    return [{
                        asset: y._23.Edit,
                        title: Object(a.d)("Set as collection thumbnail", "CollectionItemCard"),
                        onClick: function() {
                            t.setState({
                                saveError: !1
                            }, function() {
                                return o.__awaiter(t, void 0, void 0, function() {
                                    var t;
                                    return o.__generator(this, function(n) {
                                        switch (n.label) {
                                            case 0:
                                                return n.trys.push([0, 2, , 3]), [4, this.props.updateCollection(C(this.props.parentCollection, {
                                                    thumbnailInput: {
                                                        id: e.id,
                                                        type: h.a.Video
                                                    }
                                                }))];
                                            case 1:
                                                return n.sent(), [3, 3];
                                            case 2:
                                                return t = n.sent(), a.j.error(t, "Failed to set this video as the collection thumbnail."), this.setState({
                                                    saveError: !0
                                                }), [3, 3];
                                            case 3:
                                                return [2]
                                        }
                                    })
                                })
                            })
                        }
                    }, {
                        asset: y._23.Trash,
                        title: Object(a.d)("Remove from collection", "CollectionItemCard"),
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
                                            return t.trys.push([1, 3, , 4]), [4, this.props.removeCollectionItem(E(this.props.parentCollection, this.props.collectionItem.id, h.a.Video))];
                                        case 2:
                                            return t.sent(), [3, 4];
                                        case 3:
                                            return e = t.sent(), a.j.error(e, "Failed to set this video as the collection thumbnail."), this.setState({
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
                    if (e.isDeleted || e.scope !== K.Public) {
                        var t = null,
                            n = null;
                        return e.isDeleted ? (t = Object(a.d)("Deleted", "CollectionItemCard"), n = l.createElement(y._22, {
                            asset: y._23.Trash
                        })) : e.scope !== K.Public && (n = l.createElement(y._22, {
                            asset: y._23.Lock
                        }), t = Object(a.d)("Private", "CollectionItemCard")), l.createElement(y._32, {
                            attachTop: !0,
                            attachLeft: !0,
                            fullWidth: !0,
                            fullHeight: !0,
                            alignItems: y.c.Center,
                            background: y.n.Overlay,
                            "data-test-selector": ne.Overlay,
                            display: y.R.Flex,
                            flexDirection: y.T.Column,
                            justifyContent: y._7.Center,
                            position: y._15.Absolute
                        }, n, l.createElement(y.Q, null, t))
                    }
                    return null
                }, t
            }(l.Component),
            ae = Object(u.compose)(Object(A.d)("CollectionItemCard"), Object(u.graphql)(G, {
                name: "updateCollection"
            }), Object(u.graphql)(k, {
                name: "removeCollectionItem"
            }))(le),
            re = Object(F.SortableElement)(function(e) {
                return l.createElement(ae, o.__assign({}, e))
            }),
            ce = Object(F.SortableContainer)(function(e) {
                var t = e.collection,
                    n = e.items;
                return l.createElement(y._8, null, n.filter(function(e) {
                    return !!e.id
                }).map(function(e, n) {
                    return l.createElement(re, {
                        parentCollection: t,
                        collectionItem: e,
                        index: n,
                        key: e.id,
                        position: n + 1
                    })
                }))
            }),
            de = n("Dz2i"),
            se = n("pi7n");
        n("/brc");
        ! function(e) {
            e.BackButton = "BackButton", e.AddVideos = "AddVideos", e.NoCollectionItemsCTA = "NoCollectionItemsCTA", e.CollectionItemsUnavailableError = "CollectionItemsUnavailableError", e.CollectionUnavailableError = "CollectionUnavailableError"
        }(ie || (ie = {}));
        var ue = function(e) {
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
                                        return this.props.data.collection && n !== i ? (e = Object(F.arrayMove)(this.props.data.collection.items.edges, n, i), [4, this.onItemsChange(e, e[i].node.id, i)]) : [3, 2];
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
                                        t = b(this.props.data.collection, n, i, e), o.label = 1;
                                    case 1:
                                        return o.trys.push([1, 3, , 4]), [4, this.props.reorderCollectionItem(t)];
                                    case 2:
                                        return o.sent(), [3, 4];
                                    case 3:
                                        return l = o.sent(), a.j.error(l, "Collection reordering Mutation failed"), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t.onAddVideosClickHandler = function() {
                        t.props.data.collection && t.props.onAddVideosClick(t.props.data.collection, t.props.data.refetch)
                    }, t
                }
                return o.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
                    e.data.loading && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e, t, n = !1;
                    return this.props.data.loading ? (e = this.collectionInfoPlaceholder(), t = this.collectionCardPlaceholders()) : this.props.data.error || !this.props.data.collection ? (e = this.collectionUnavailableError(), t = this.collectionItemsUnavaibleError()) : this.props.data.collection && this.props.data.collection.items.totalCount > 0 ? (e = l.createElement(z, {
                        collection: this.props.data.collection,
                        onVideosChange: this.props.data.refetch
                    }), t = l.createElement(ce, {
                        collection: this.props.data.collection,
                        items: this.props.data.collection.items.edges.map(function(e) {
                            return e.node
                        }),
                        onSortEnd: this.onSortEnd,
                        useDragHandle: !0
                    }), n = this.props.data.collection.items.pageInfo.hasNextPage || !1) : this.props.data.collection && this.props.data.collection.items.totalCount <= 0 ? (e = l.createElement(z, {
                        collection: this.props.data.collection,
                        onVideosChange: this.props.data.refetch
                    }), t = this.noCollectionItemsCTA()) : (e = this.collectionUnavailableError(), t = this.collectionItemsUnavaibleError()), this.props.data.collection && this.props.data.collection.owner && this.props.data.collection.owner.login !== this.props.match.params.creatorLogin ? l.createElement(x.b, {
                        to: "/" + this.props.match.params.creatorLogin + "/manager/collections"
                    }) : l.createElement(p.b, null, l.createElement(y._8, {
                        padding: 3,
                        margin: {
                            bottom: 3
                        },
                        display: y.R.Flex,
                        flexDirection: y.T.Row,
                        className: "collection-editor-page"
                    }, l.createElement(y._8, {
                        flexGrow: 1,
                        margin: {
                            bottom: 3
                        }
                    }, l.createElement(y._8, {
                        margin: {
                            bottom: 1
                        },
                        flexGrow: 1,
                        flexDirection: y.T.Row,
                        display: y.R.Flex
                    }, l.createElement(y._8, {
                        flexGrow: 1
                    }, l.createElement(y.Q, {
                        type: y._46.H3
                    }, Object(a.d)("Edit Collection", "CollectionEditorPagePresentation")))), l.createElement(y._8, {
                        padding: {
                            y: .5
                        }
                    }, l.createElement(y.O, {
                        "data-test-selector": ie.BackButton,
                        hoverUnderlineNone: !0,
                        to: {
                            pathname: "/" + this.props.match.params.creatorLogin + "/manager/collections",
                            state: {
                                content: "all_collections",
                                medium: R.PageviewMedium.VideoManagerCollectionEditor
                            }
                        }
                    }, l.createElement(y._8, {
                        display: y.R.Flex,
                        flexDirection: y.T.Row,
                        alignItems: y.c.Center
                    }, l.createElement(y._22, {
                        asset: y._23.ChatSettingsBack,
                        height: 20,
                        width: 20
                    }), l.createElement(y.Q, {
                        align: y._56.Middle,
                        bold: !0
                    }, Object(a.d)("All collections", "CollectionEditorPagePresentation"))))), e, t, l.createElement(p.a, {
                        enabled: n,
                        loadMore: this.props.loadMore
                    }))))
                }, t.prototype.collectionCardPlaceholders = function() {
                    return [l.createElement(M.a, {
                        key: 1
                    }), l.createElement(M.a, {
                        key: 2
                    }), l.createElement(M.a, {
                        key: 3
                    })]
                }, t.prototype.collectionInfoPlaceholder = function() {
                    return l.createElement($, null)
                }, t.prototype.noCollectionItemsCTA = function() {
                    return l.createElement(y._8, {
                        alignItems: y.c.Center,
                        "data-test-selector": ie.NoCollectionItemsCTA,
                        display: y.R.Flex,
                        flexDirection: y.T.Column,
                        justifyContent: y._7.Center,
                        margin: {
                            top: 5
                        }
                    }, l.createElement(y.Q, {
                        type: y._46.H4
                    }, Object(a.d)("Put all your best videos in one spot.", "CollectionEditorPagePresentation")), l.createElement(y.Q, {
                        type: y._46.H4
                    }, Object(a.d)("Videos organized into collections help your viewers easily find related content.", "CollectionEditorPagePresentation")), l.createElement(y.Q, {
                        type: y._46.H4
                    }, Object(a.d)("Your most recently updated Collection will be featured at the top of channel’s video page.", "CollectionEditorPagePresentation")), l.createElement(y._8, {
                        padding: 2
                    }, l.createElement(y.v, {
                        "data-test-selector": ie.AddVideos,
                        icon: y._23.Plus,
                        onClick: this.onAddVideosClickHandler,
                        type: y.B.Hollow
                    }, Object(a.d)("Add videos", "CollectionEditorPagePresentation"))))
                }, t.prototype.collectionItemsUnavaibleError = function() {
                    return l.createElement(y._8, {
                        "data-test-selector": ie.CollectionItemsUnavailableError
                    }, Object(a.d)("Something went wrong loading your collections items. Please try again.", "CollectionEditorPagePresentation"))
                }, t.prototype.collectionUnavailableError = function() {
                    return l.createElement(y._8, {
                        "data-test-selector": ie.CollectionUnavailableError
                    }, Object(a.d)("Something went wrong loading your collection. Please try again.", "CollectionEditorPagePresentation"))
                }, t
            }(l.Component),
            me = function(e, t) {
                var n = t.fetchMoreResult;
                if (!n || !n.collection || !n.collection.items) return e;
                var i = e.collection && e.collection.items.edges || [];
                return n.collection.items.edges = i.concat(n.collection.items.edges), n
            },
            pe = Object(u.compose)(Object(u.graphql)(de, {
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
                                query: de,
                                updateQuery: me
                            })
                        }
                    })
                }
            }), Object(u.graphql)(se, {
                name: "reorderCollectionItem"
            }), Object(A.d)("CollectionEditorPage", {
                destination: j.a.VideoManagerCollectionsEditor
            }), Object(V.a)({
                location: R.PageviewLocation.VideoManagerCollectionEditor,
                properties: function(e) {
                    return {
                        channel: e.match.params.creatorLogin
                    }
                },
                skip: function(e) {
                    return e.data.loading
                }
            }))(ue);
        var ve = Object(d.b)(null, function(e) {
                return {
                    onAddVideosClick: function(t, n) {
                        e(Object(s.d)(T, {
                            collection: t,
                            onComplete: n
                        }))
                    }
                }
            })(pe),
            he = function(e) {
                return l.createElement(c.a, {
                    ownerLogin: e.match.params.creatorLogin,
                    permittedRoles: {
                        editor: !0,
                        staff: !0
                    }
                }, function(t) {
                    var n = t.loading,
                        i = t.permitted;
                    return n || i ? l.createElement(ve, o.__assign({}, e)) : l.createElement(r.a, {
                        message: Object(a.d)("Something went wrong. Please try again.", "CollectionEditorPage")
                    })
                })
            },
            ge = n("L2R7"),
            fe = function(e) {
                return window.location.replace("https://www.twitch.tv/" + encodeURIComponent(e.match.params.creatorLogin) + "/manager/collections/edit/" + e.match.params.collectionID), null
            },
            ke = function(e) {
                return Object(ge.a)() ? l.createElement(he, o.__assign({}, e)) : l.createElement(fe, o.__assign({}, e))
            };
        n.d(t, "CollectionEditorPage", function() {
            return ke
        })
    },
    KRtN: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            o = n("GiK3"),
            l = n("rCmJ"),
            a = n("Odds"),
            r = function(e) {
                var t = e.asset ? o.createElement(a._22, {
                    asset: e.asset
                }) : null;
                return o.createElement(a._6, {
                    linkTo: e.linkTo,
                    onClick: e.onClick
                }, o.createElement(a._8, {
                    alignItems: a.c.Center,
                    display: a.R.Flex,
                    flexGrow: 1,
                    padding: 1
                }, t, o.createElement(a._2, {
                    margin: {
                        left: 1
                    }
                }, o.createElement(a.Q, null, e.title))))
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
                return this.state.showDropMenu && (e = this.dropMenu()), o.createElement(a._8, {
                    flexGrow: 0,
                    flexShrink: 0,
                    display: a.R.Flex,
                    position: a._15.Relative
                }, o.createElement(a._2, {
                    fullHeight: !0
                }, o.createElement(l.a, {
                    onClickOut: this.clickOutHandler
                }, o.createElement(a._8, {
                    fullHeight: !0,
                    display: a.R.Flex,
                    alignItems: a.c.Stretch
                }, o.createElement(a.v, {
                    disabled: 0 === this.props.options.length,
                    icon: a._23.More,
                    onClick: this.menuButtonClickHandler,
                    type: a.B.Text
                })), e)))
            }, t.prototype.dropMenu = function() {
                var e = this.props.options.map(function(e, t) {
                    return o.createElement(r, i.__assign({
                        key: t
                    }, e))
                });
                return o.createElement(a.q, {
                    size: a.s.Small,
                    direction: a.r.BottomRight,
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
                        type: v.j.BounceIn,
                        enabled: !0
                    }, l.createElement(v._32, {
                        border: !0,
                        margin: {
                            bottom: 1
                        },
                        padding: 1,
                        fullWidth: !0
                    }, l.createElement(v.Q, {
                        bold: !0,
                        color: v.K.Error,
                        "data-test-selector": i.ErrorAlert
                    }, this.props.error)))), l.createElement(v.e, {
                        type: v.j.FadeIn,
                        delay: v.f.Medium,
                        duration: v.g.Medium,
                        enabled: !0
                    }, l.createElement(v._32, {
                        background: v.n.Base,
                        padding: {
                            x: 3,
                            top: 2,
                            bottom: 3
                        }
                    }, l.createElement(v._2, {
                        padding: {
                            bottom: 1
                        }
                    }, l.createElement(v.Q, {
                        fontSize: v.V.Size3
                    }, Object(c.d)("Delete Collection", "DeleteCollectionModal"))), l.createElement(v.Q, {
                        fontSize: v.V.Size6
                    }, Object(c.d)("Are you sure you want to delete this collection?", "DeleteCollectionModal")), l.createElement(v.Q, {
                        fontSize: v.V.Size6
                    }, Object(c.d)("This action cannot be undone. ", "DeleteCollectionModal")), l.createElement(v._8, {
                        padding: {
                            y: 2
                        }
                    }, l.createElement(p.a, {
                        collection: e,
                        hideOptionsMenu: !0
                    })), t, l.createElement(v._8, {
                        display: v.R.Flex,
                        flexDirection: v.T.Row,
                        justifyContent: v._7.Center
                    }, l.createElement(v._8, {
                        margin: {
                            x: .5
                        }
                    }, l.createElement(v.v, {
                        "data-test-selector": i.CancelButton,
                        onClick: this.props.onCancel,
                        type: v.B.Hollow
                    }, Object(c.d)("Cancel", "DeleteCollectionModal"))), l.createElement(v._8, {
                        margin: {
                            x: .5
                        }
                    }, l.createElement(v.v, {
                        "data-test-selector": i.ConfirmButton,
                        onClick: this.props.onDeleteRequest,
                        type: v.B.Alert
                    }, Object(c.d)("Delete", "DeleteCollectionModal")))), l.createElement(m.a, {
                        closeOnBackdropClick: !0
                    })))
                }, t
            }(l.Component),
            g = n("e6eF");
        n.d(t, "a", function() {
            return C
        });
        var f = function(e) {
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
            k = Object(a.compose)(Object(d.a)(g, {
                name: "onDeleteRequest"
            }))(f);
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
            return l
        });
        var i = n("GiK3"),
            o = (n.n(i), n("Odds")),
            l = function(e) {
                return i.createElement(o._8, {
                    alignItems: o.c.Start,
                    display: o.R.Flex,
                    flexDirection: o.T.Column,
                    flexGrow: 1,
                    flexShrink: 1,
                    justifyContent: o._7.Center,
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
                return i.createElement(o._8, {
                    className: "manager-card__stats-container",
                    display: o.R.Flex,
                    flexGrow: 0,
                    flexShrink: 0,
                    flexWrap: o.U.NoWrap,
                    flexDirection: o.T.Row,
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
                    return o.createElement(l._32, {
                        background: l.n.Base,
                        elevation: 1,
                        display: l.R.Flex,
                        flexDirection: l.T.Row,
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
    gpuH: function(e, t) {},
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
            g = n("N8CH"),
            f = n("Odds"),
            k = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onDeleteOptionClickHandler = function() {
                        t.props.onDeleteOptionClick(t.props.collection)
                    }, t
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    var e, t = this.props.collection;
                    return t.thumbnailURL && (e = {
                        "160w": t.thumbnailURL
                    }), a.createElement(m.a, null, a.createElement(f._8, {
                        flexShrink: 0
                    }, a.createElement(s.a, {
                        alt: t.title,
                        sizes: [{
                            size: "160px"
                        }],
                        src: t.thumbnailURL,
                        srcSet: e,
                        videoCount: t.items.totalCount
                    })), a.createElement(g.a, null, a.createElement(f.Q, {
                        bold: !0,
                        type: f._46.H4,
                        color: f.K.Alt
                    }, t.title), a.createElement(f._49, {
                        direction: f._51.Bottom,
                        label: Object(r.d)("Last Updated", "CollectionManagerCard")
                    }, a.createElement(f.Q, {
                        color: f.K.Alt2
                    }, Object(r.c)(new Date(t.updatedAt), "long")))), a.createElement(h.a, null, this.collectionStats(t)), this.renderCardMenu())
                }, t.prototype.renderCardMenu = function() {
                    if (this.props.hideOptionsMenu || !this.props.collection.owner) return null;
                    var e = [{
                        asset: f._23.Edit,
                        linkTo: {
                            pathname: "/" + this.props.collection.owner.login + "/manager/collections/" + this.props.collection.id,
                            state: {
                                content: d.PageviewContent.CollectionCard,
                                medium: d.PageviewMedium.VideoManagerCollectionManager
                            }
                        },
                        title: Object(r.d)("Edit", "CollectionManagerCard")
                    }, {
                        asset: f._23.Trash,
                        onClick: this.onDeleteOptionClickHandler,
                        title: Object(r.d)("Delete", "CollectionManagerCard")
                    }];
                    return a.createElement(p.a, {
                        options: e
                    })
                }, t.prototype.collectionStats = function(e) {
                    return [{
                        value: Object(c.a)(e.lengthSeconds),
                        icon: f._23.GlyphLength,
                        label: Object(r.d)("Collection length", "CollectionManagerCard")
                    }, {
                        value: "" + e.viewCount,
                        icon: f._23.GlyphViews,
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
//# sourceMappingURL=pages.video-tools.pages.collection-editor-828d67aa22d1ed96153a023a5dd462cd.js.map