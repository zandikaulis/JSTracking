webpackJsonp([77], {
    "/brc": function(e, t) {},
    "4o7v": function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
        });
        var i = n("TToO"),
            o = n("U7vG"),
            l = (n.n(o), n("5kgt")),
            a = n("Odds"),
            r = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = o.createElement(a._2, {
                            alignItems: a.c.Center,
                            display: a.N.Flex,
                            fullHeight: !0,
                            justifyContent: a._1.Center,
                            padding: 2
                        }, o.createElement(a._24, {
                            icon: this.props.icon,
                            label: this.props.label,
                            value: this.props.value
                        })),
                        t = this.props.linkTo ? o.createElement(a._0, {
                            alpha: !0,
                            linkTo: this.props.linkTo,
                            targetBlank: !0
                        }, e) : e;
                    return o.createElement(a._2, i.__assign({
                        display: a.N.InlineFlex,
                        fullHeight: !0
                    }, Object(l.a)(this.props)), t)
                }, t
            }(o.Component)
    },
    Dz2i: function(e, t) {
        var n = {
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
                                        value: "15"
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
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 408
            }
        };
        n.loc.source = {
            body: "query CollectionManager_EditCollection($collectionID: ID! $after: Cursor) {\ncollection(id: $collectionID) {\nid\nlengthSeconds\ntitle\nviewCount\nupdatedAt\nthumbnailURL(width: 320 height: 180)\nitems(first: 15 after: $after) {\ntotalCount\npageInfo {\nhasNextPage\n}\nedges {\ncursor\nnode {\n... on Video {\nid\nbroadcastType\ntitle\nlengthSeconds\npreviewThumbnailURL(width: 240 height: 135)\npublishedAt\nviewCount\n}\n}\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    KO2S: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i, o = n("TToO"),
            l = n("U7vG"),
            a = n("3zLD"),
            r = n("6sO2"),
            c = n("zCIC"),
            s = n("j7/Y"),
            d = n("w9tK"),
            u = n("vH/s"),
            m = n("CSlQ"),
            p = n("PQ4i"),
            h = n("RH2O"),
            g = n("V5M+"),
            v = n("M0wY"),
            f = n("CIox"),
            k = n("kk4f"),
            C = n("jcM9"),
            E = n("Odds"),
            _ = "DeleteButton",
            b = "PlayAllButton",
            y = "Thumbnail",
            O = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onTitleChange = function(e) {
                        t.props.onTitleChange(e.currentTarget.value)
                    }, t.onDeleteOptionClickHandler = function() {
                        t.props.onDeleteOptionClick(t.props.collection, t.props.match.params.creatorLogin)
                    }, t
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    return l.createElement(E._25, {
                        background: E.m.Alt,
                        display: E.N.Flex,
                        flexDirection: E.P.Row,
                        alignItems: E.c.Stretch
                    }, l.createElement(E._2, {
                        display: E.N.Flex,
                        flexDirection: E.P.Column
                    }, l.createElement(E._2, {
                        margin: {
                            y: 1
                        }
                    }, l.createElement(E._35, {
                        color: E.I.Alt,
                        type: E._40.H6,
                        bold: !0
                    }, Object(r.d)("Collection Thumbnail", "CollectionEditorInfoCard"))), l.createElement(k.a, {
                        "data-test-selector": y,
                        alt: this.props.collection.title,
                        sizes: [{
                            size: "320px"
                        }],
                        src: this.props.collection.thumbnailURL
                    })), l.createElement(E._2, {
                        display: E.N.Flex,
                        flexDirection: E.P.Column,
                        margin: {
                            left: 3
                        },
                        flexGrow: 2,
                        flexShrink: 0
                    }, l.createElement(E._2, {
                        margin: {
                            y: 1
                        }
                    }, l.createElement(E._35, {
                        color: E.I.Alt,
                        type: E._40.H6,
                        bold: !0
                    }, Object(r.d)("Title", "CollectionEditorInfoCard"))), l.createElement(E.Y, {
                        type: E.Z.Text,
                        defaultValue: this.props.collection.title,
                        onChange: this.onTitleChange
                    }), l.createElement(E._2, {
                        margin: {
                            top: 1,
                            bottom: 3
                        }
                    }, l.createElement(E._35, {
                        type: E._40.Span,
                        color: E.I.Alt2
                    }, Object(r.d)("Last updated {updatedAt}", {
                        updatedAt: Object(r.c)(new Date(this.props.collection.updatedAt), "long")
                    }, "CollectionEditorInfoCard"))), this.managerMenu()))
                }, t.prototype.managerMenu = function() {
                    return l.createElement(E._2, {
                        display: E.N.Flex,
                        flexDirection: E.P.Row
                    }, l.createElement(E.u, {
                        "data-test-selector": b,
                        icon: E._16.Play,
                        type: E.z.Text,
                        linkTo: "/collections/" + this.props.collection.id
                    }, Object(r.d)("Play All", "CollectionEditorInfoCard")), l.createElement(E.u, {
                        icon: E._16.Plus,
                        type: E.z.Text
                    }, Object(r.d)("Add", "CollectionEditorInfoCard")), l.createElement(C.a, {
                        balloonDirection: E.q.BottomCenter,
                        buttonType: E.z.Text,
                        content: {
                            collectionID: this.props.collection.id
                        },
                        tracking: {
                            location: u.PageviewLocation.VideoManagerCollectionEditor
                        }
                    }), l.createElement(E.u, {
                        "data-test-selector": _,
                        icon: E._16.Trash,
                        type: E.z.Text,
                        onClick: this.onDeleteOptionClickHandler
                    }, Object(r.d)("Delete", "CollectionEditorInfoCard")))
                }, t
            }(l.Component),
            D = Object(f.e)(O),
            N = Object(h.b)(null, function(e) {
                return {
                    onDeleteOptionClick: function(t, n) {
                        e(Object(g.d)(v.a, {
                            collection: t,
                            creatorLogin: n
                        }))
                    }
                }
            })(D),
            S = function() {
                return l.createElement(E._25, {
                    background: E.m.Alt,
                    display: E.N.Flex,
                    flexDirection: E.P.Row,
                    alignItems: E.c.Stretch,
                    margin: {
                        bottom: 5
                    }
                }, l.createElement(E._2, {
                    display: E.N.Flex,
                    flexDirection: E.P.Column
                }, l.createElement(E._2, {
                    margin: {
                        y: 1
                    }
                }, l.createElement(E._8, {
                    width: 100
                })), l.createElement(E._8, {
                    height: 180,
                    width: 320
                })), l.createElement(E._2, {
                    display: E.N.Flex,
                    flexDirection: E.P.Column,
                    margin: {
                        left: 3
                    },
                    flexGrow: 2,
                    flexShrink: 0
                }, l.createElement(E._2, {
                    margin: {
                        y: 1
                    }
                }, l.createElement(E._8, {
                    width: 50
                })), l.createElement(E._8, {
                    height: 25,
                    width: 400
                }), l.createElement(E._2, {
                    margin: {
                        top: 1,
                        bottom: 3
                    }
                }, l.createElement(E._8, {
                    height: 15,
                    width: 300
                })), l.createElement(E._8, {
                    height: 30,
                    width: 400
                })))
            },
            I = n("i61F"),
            x = n("F8kA"),
            w = n("mi6k"),
            T = n("5RjZ"),
            j = n("KRtN"),
            F = n("4o7v"),
            M = n("PwTO"),
            P = n("N8CH"),
            A = n("Z8qZ"),
            L = (n("dAJe"), {
                ItemLength: "ItemLength",
                VideoLink: "VideoLink"
            }),
            R = Object(I.SortableHandle)(function() {
                return l.createElement(E._15, {
                    asset: E._16.DragHandle
                })
            }),
            V = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.subHeader = function(e) {
                        return l.createElement(E._25, {
                            display: E.N.Flex,
                            flexDirection: E.P.Row,
                            margin: {
                                top: .5
                            },
                            color: E.I.Alt2
                        }, l.createElement(E._2, {
                            padding: {
                                right: 1
                            }
                        }, l.createElement(E._43, {
                            direction: E._45.Bottom,
                            align: E._44.Center,
                            label: Object(r.d)("Published At", "CollectionItemCard")
                        }, l.createElement(E._35, null, Object(r.c)(new Date(e.publishedAt), "long")))), l.createElement(E._2, {
                            padding: {
                                right: 1
                            },
                            display: E.N.Flex,
                            alignItems: E.c.Center
                        }, l.createElement(E._24, {
                            "data-test-selector": L.ItemLength,
                            label: Object(r.d)("Length", "CollectionItemCard"),
                            value: Object(w.a)(e.lengthSeconds),
                            icon: E._16.GlyphLength
                        })), l.createElement(E._2, {
                            padding: {
                                right: 1
                            },
                            display: E.N.Flex,
                            alignItems: E.c.Center
                        }, l.createElement(E._24, {
                            label: Object(r.d)("Video Type", "CollectionItemCard"),
                            value: Object(T.a)(e.broadcastType),
                            icon: E._16.NavVideos
                        })))
                    }, t.reportImageInteractive = function() {
                        t.props.latencyTracking.reportInteractive()
                    }, t
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.collectionItem;
                    return l.createElement(E._2, {
                        className: "collection-item-card",
                        margin: {
                            y: 1
                        }
                    }, l.createElement(A.a, null, l.createElement(E._25, {
                        background: E.m.Alt,
                        display: E.N.Flex,
                        className: "collection-item__drag-handle"
                    }, l.createElement(R, null)), l.createElement(E._2, {
                        alignSelf: E.d.Center,
                        padding: {
                            x: 1
                        }
                    }, this.props.position), l.createElement(E._2, {
                        flexGrow: 0,
                        flexShrink: 0
                    }, l.createElement(E.C, {
                        aspect: E.k.Aspect16x9,
                        size: E.D.Size16,
                        onLoad: this.reportImageInteractive,
                        onError: this.reportImageInteractive,
                        src: e.previewThumbnailURL ? e.previewThumbnailURL : "https://static-cdn.jtvnw.net/ttv-playlists-thumbnails-prod/missing-video-thumb-320x180.png",
                        alt: e.title
                    })), l.createElement(P.a, null, l.createElement(E._35, {
                        type: E._40.H5,
                        color: E.I.Alt
                    }, l.createElement(x.a, {
                        "data-test-selector": L.VideoLink,
                        to: {
                            pathname: "/videos/" + this.props.collectionItem.id,
                            state: {
                                content: u.PageviewContent.CollectionItemCard,
                                medium: u.PageviewMedium.VideoManagerCollectionEditor
                            }
                        }
                    }, e.title)), this.subHeader(e)), l.createElement(M.a, null, l.createElement(F.a, {
                        value: e.viewCount.toString(),
                        icon: E._16.GlyphViews,
                        label: Object(r.d)("Total videos", "CollectionItemCard")
                    })), l.createElement(j.a, {
                        options: this.collectionMenuOptions(e)
                    })))
                }, t.prototype.collectionMenuOptions = function(e) {
                    return [{
                        asset: E._16.Edit,
                        title: Object(r.d)("Set as collection thumbnail", "CollectionItemCard")
                    }, {
                        asset: E._16.Trash,
                        title: Object(r.d)("Remove from collection", "CollectionItemCard")
                    }]
                }, t
            }(l.Component),
            H = Object(a.compose)(Object(m.d)("CollectionItemCard"))(V),
            G = Object(I.SortableElement)(function(e) {
                return l.createElement(H, o.__assign({}, e))
            }),
            z = Object(I.SortableContainer)(function(e) {
                var t = e.items;
                return l.createElement(E._2, null, t.map(function(e, t) {
                    return l.createElement(G, {
                        key: e.id,
                        index: t,
                        position: t + 1,
                        collectionItem: e
                    })
                }))
            }),
            B = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onSortEnd = function(e) {
                        var n = e.oldIndex,
                            i = e.newIndex,
                            o = Object(I.arrayMove)(t.props.items, n, i);
                        return t.props.onReorder(o), "foo"
                    }, t
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    return l.createElement(z, {
                        items: this.props.items,
                        onSortEnd: this.onSortEnd,
                        useDragHandle: !0
                    })
                }, t
            }(l.Component),
            U = n("Dz2i");
        n("/brc");
        ! function(e) {
            e[e.BackButton = 0] = "BackButton"
        }(i || (i = {}));
        var q = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        collectionEdits: {}
                    }, t.onItemsChange = function(e) {
                        t.isOriginalOrder(e) ? t.resetEditStateForKey("items") : t.setState(function(t) {
                            var n = t;
                            return n.collectionEdits ? n.collectionEdits.items = e : n.collectionEdits = {
                                items: e
                            }, n
                        })
                    }, t.onTitleChange = function(e) {
                        e !== (t.props.data.collection && t.props.data.collection.title) ? t.setState(function(t) {
                            var n = t;
                            return n.collectionEdits ? n.collectionEdits.title = e : n.collectionEdits = {
                                title: e
                            }, n
                        }) : t.resetEditStateForKey("title")
                    }, t.resetEditStateForKey = function(e) {
                        t.setState(function(t) {
                            return {
                                collectionEdits: o.__assign({}, t.collectionEdits, (n = {}, n[e] = void 0, n))
                            };
                            var n
                        })
                    }, t.onSave = function() {
                        t.state.collectionEdits && t.props.updateCollection(t.state.collectionEdits)
                    }, t.onCancel = function() {
                        t.state.collectionEdits, r.n.history.goBack()
                    }, t.isOriginalOrder = function(e) {
                        var n = t.props.data.collection && t.props.data.collection.items.edges.map(function(e) {
                                return e.node.id
                            }) || [],
                            i = e.map(function(e) {
                                return e.id
                            });
                        return n.every(function(e, t) {
                            return i[t] === e
                        })
                    }, t
                }
                return o.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
                    e.data.loading && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e, t, n = !1;
                    return this.props.data.loading ? (e = this.collectionInfoPlaceholder(), t = this.collectionCardPlaceholders()) : this.props.data.error || !this.props.data.collection ? (e = this.collectionUnavailableError(), t = this.collectionItemsUnavaibleError()) : this.props.data.collection ? (e = l.createElement(N, {
                        collection: this.props.data.collection,
                        onTitleChange: this.onTitleChange
                    }), t = l.createElement(B, {
                        items: this.props.data.collection.items.edges.map(function(e) {
                            return e.node
                        }),
                        onReorder: this.onItemsChange
                    }), n = this.props.data.collection.items.pageInfo.hasNextPage || !1) : (e = this.collectionUnavailableError(), t = this.noCollectionItemsCTA()), l.createElement(c.b, null, l.createElement(E._2, {
                        padding: 3,
                        display: E.N.Flex,
                        flexDirection: E.P.Row,
                        className: "collection-editor-page"
                    }, l.createElement(E._2, {
                        flexGrow: 1
                    }, l.createElement(E._2, {
                        margin: {
                            bottom: 1
                        },
                        flexGrow: 1,
                        flexDirection: E.P.Row,
                        display: E.N.Flex
                    }, l.createElement(E._2, {
                        flexGrow: 1
                    }, l.createElement(E._35, {
                        type: E._40.H3
                    }, Object(r.d)("Edit Collection", "CollectionEditorPagePresentation"))), l.createElement(E._2, {
                        flexGrow: 0
                    }, l.createElement(E.u, {
                        onClick: this.onCancel,
                        type: E.z.Text
                    }, Object(r.d)("Cancel", "CollectionEditorPagePresentation")))), l.createElement(E._2, {
                        padding: {
                            y: .5
                        }
                    }, l.createElement(E.L, {
                        "data-test-selector": i.BackButton,
                        hoverUnderlineNone: !0,
                        to: {
                            pathname: "/" + this.props.match.params.creatorLogin + "/manager/collections",
                            state: {
                                content: "all_collections",
                                medium: u.PageviewMedium.VideoManagerCollectionEditor
                            }
                        }
                    }, l.createElement(E._2, {
                        display: E.N.Flex,
                        flexDirection: E.P.Row,
                        alignItems: E.c.Center
                    }, l.createElement(E._15, {
                        asset: E._16.ChatSettingsBack,
                        height: 20,
                        width: 20
                    }), l.createElement(E._35, {
                        align: E._50.Middle,
                        bold: !0
                    }, Object(r.d)("All collections", "CollectionEditorPagePresentation"))))), e, t, l.createElement(c.a, {
                        enabled: n,
                        loadMore: this.props.loadMore
                    })), l.createElement(E._2, {
                        flexGrow: 0,
                        className: "right-sidebar"
                    }, l.createElement(E.u, {
                        onClick: this.onSave
                    }, Object(r.d)("Save changes", "CollectionEditorPagePresentation")))))
                }, t.prototype.collectionCardPlaceholders = function() {
                    return [l.createElement(p.a, {
                        key: 1
                    }), l.createElement(p.a, {
                        key: 2
                    }), l.createElement(p.a, {
                        key: 3
                    })]
                }, t.prototype.collectionInfoPlaceholder = function() {
                    return l.createElement(S, null)
                }, t.prototype.noCollectionItemsCTA = function() {
                    return l.createElement("div", null)
                }, t.prototype.collectionItemsUnavaibleError = function() {
                    return l.createElement("div", null)
                }, t.prototype.collectionUnavailableError = function() {
                    return l.createElement("div", null)
                }, t
            }(l.Component),
            Q = function(e, t) {
                var n = t.fetchMoreResult;
                if (!n || !n.collection || !n.collection.items) return e;
                var i = e.collection && e.collection.items.edges || [];
                return n.collection.items.edges = i.concat(n.collection.items.edges), n
            },
            K = Object(a.compose)(Object(a.graphql)(U, {
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
                                variables: function(e, t) {
                                    var n = t.collection && t.collection.items ? t.collection.items.edges : [],
                                        i = n[n.length - 1] && n[n.length - 1].cursor;
                                    return {
                                        collectionID: e.match.params.collectionID,
                                        after: i
                                    }
                                }(e.ownProps, e.data),
                                query: U,
                                updateQuery: Q
                            })
                        },
                        updateCollection: function(e) {
                            return new Promise(function(e) {
                                return e()
                            })
                        }
                    })
                }
            }), Object(m.d)("CollectionEditorPage", {
                destination: d.a.VideoManagerCollectionsEditor
            }), Object(s.a)({
                location: u.PageviewLocation.VideoManagerCollectionEditor,
                properties: function(e) {
                    return {
                        channel: e.match.params.creatorLogin
                    }
                },
                skip: function(e) {
                    return e.data.loading
                }
            }))(q),
            Z = n("L2R7"),
            $ = function(e) {
                return window.location.replace("https://www.twitch.tv/" + encodeURIComponent(e.match.params.creatorLogin) + "/manager/collections/edit/" + e.match.params.collectionID), null
            },
            Y = function(e) {
                return Object(Z.a)() ? l.createElement(K, o.__assign({}, e)) : l.createElement($, o.__assign({}, e))
            };
        n.d(t, "CollectionEditorPage", function() {
            return Y
        })
    },
    KRtN: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            o = n("U7vG"),
            l = n("rCmJ"),
            a = n("Odds"),
            r = function(e) {
                var t = e.asset ? o.createElement(a._15, {
                    asset: e.asset
                }) : null;
                return o.createElement(a._0, {
                    linkTo: e.linkTo,
                    onClick: e.onClick
                }, o.createElement(a._2, {
                    alignItems: a.c.Center,
                    display: a.N.Flex,
                    flexGrow: 1,
                    padding: 1
                }, t, o.createElement(a.W, {
                    margin: {
                        left: 1
                    }
                }, o.createElement(a._35, null, e.title))))
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
                return this.state.showDropMenu && (e = this.dropMenu()), o.createElement(a._2, {
                    flexGrow: 0,
                    flexShrink: 0,
                    display: a.N.Flex,
                    position: a._9.Relative
                }, o.createElement(a.W, {
                    fullHeight: !0
                }, o.createElement(l.a, {
                    onClickOut: this.clickOutHandler
                }, o.createElement(a._2, {
                    fullHeight: !0,
                    display: a.N.Flex,
                    alignItems: a.c.Stretch
                }, o.createElement(a.u, {
                    disabled: 0 === this.props.options.length,
                    icon: a._16.More,
                    onClick: this.menuButtonClickHandler,
                    type: a.z.Text
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
            l = n("U7vG"),
            a = n("3zLD"),
            r = n("RH2O"),
            c = n("2KeS"),
            s = n("6sO2"),
            d = n("7vx8"),
            u = n("V5M+"),
            m = n("+8VM"),
            p = n("rvrg"),
            h = n("Odds");
        ! function(e) {
            e[e.CancelButton = 0] = "CancelButton", e[e.ConfirmButton = 1] = "ConfirmButton", e[e.ErrorAlert = 2] = "ErrorAlert"
        }(i || (i = {}));
        var g = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.collection,
                        t = null;
                    return this.props.error && (t = l.createElement(h.e, {
                        delay: h.f.Short,
                        type: h.i.BounceIn,
                        enabled: !0
                    }, l.createElement(h._25, {
                        border: !0,
                        margin: {
                            bottom: 1
                        },
                        padding: 1,
                        fullWidth: !0
                    }, l.createElement(h._35, {
                        bold: !0,
                        color: h.I.Error,
                        "data-test-selector": i.ErrorAlert
                    }, this.props.error)))), l.createElement(h.e, {
                        type: h.i.FadeIn,
                        delay: h.f.Medium,
                        duration: h.g.Medium,
                        enabled: !0
                    }, l.createElement(h._25, {
                        background: h.m.Base,
                        padding: {
                            x: 3,
                            top: 2,
                            bottom: 3
                        }
                    }, l.createElement(h.W, {
                        padding: {
                            bottom: 1
                        }
                    }, l.createElement(h._35, {
                        fontSize: h.R.Size3
                    }, Object(s.d)("Delete Collection", "DeleteCollectionModal"))), l.createElement(h._35, {
                        fontSize: h.R.Size6
                    }, Object(s.d)("Are you sure you want to delete this collection?", "DeleteCollectionModal")), l.createElement(h._35, {
                        fontSize: h.R.Size6
                    }, Object(s.d)("This action cannot be undone. ", "DeleteCollectionModal")), l.createElement(h._2, {
                        padding: {
                            y: 2
                        }
                    }, l.createElement(p.a, {
                        collection: e,
                        creatorLogin: this.props.creatorLogin,
                        hideOptionsMenu: !0
                    })), t, l.createElement(h._2, {
                        display: h.N.Flex,
                        flexDirection: h.P.Row,
                        justifyContent: h._1.Center
                    }, l.createElement(h._2, {
                        margin: {
                            x: .5
                        }
                    }, l.createElement(h.u, {
                        "data-test-selector": i.CancelButton,
                        onClick: this.props.onCancel,
                        type: h.z.Hollow
                    }, Object(s.d)("Cancel", "DeleteCollectionModal"))), l.createElement(h._2, {
                        margin: {
                            x: .5
                        }
                    }, l.createElement(h.u, {
                        "data-test-selector": i.ConfirmButton,
                        onClick: this.props.onDelete,
                        type: h.z.Alert
                    }, Object(s.d)("Delete", "DeleteCollectionModal")))), l.createElement(m.a, null)))
                }, t
            }(l.Component),
            v = n("kL3X"),
            f = n("e6eF");
        n.d(t, "a", function() {
            return _
        });
        var k = this,
            C = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {}, t.onCancelHandler = function() {
                        t.props.onClose()
                    }, t.onDeleteHandler = function() {
                        t.setState({
                            deletionError: void 0
                        }, function() {
                            return o.__awaiter(t, void 0, void 0, function() {
                                return o.__generator(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return e.trys.push([0, 2, , 3]), [4, this.props.onDeleteRequest({
                                                collectionID: this.props.collection.id,
                                                creatorID: this.props.creatorID
                                            })];
                                        case 1:
                                            return e.sent(), [3, 3];
                                        case 2:
                                            return e.sent(), this.setState({
                                                deletionError: Object(s.d)("Unable to delete this collection, try again.", "DeleteCollectionModal")
                                            }), [2];
                                        case 3:
                                            return this.props.onClose(), [2]
                                    }
                                })
                            })
                        })
                    }, t
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    return l.createElement(g, {
                        collection: this.props.collection,
                        creatorLogin: this.props.creatorLogin,
                        error: this.state.deletionError,
                        onCancel: this.onCancelHandler,
                        onDelete: this.onDeleteHandler
                    })
                }, t
            }(l.Component),
            E = Object(a.compose)(Object(d.a)(f, {
                name: "onDeleteRequest",
                props: function(e) {
                    return {
                        onDeleteRequest: function(t) {
                            return o.__awaiter(k, void 0, void 0, function() {
                                var n;
                                return o.__generator(this, function(i) {
                                    if (!e.mutate) throw n = new Error("No mutation function exists, cannot delete collection"), s.i.error(n, "DeleteCollectionModal"), n;
                                    return [2, function(e, t) {
                                        return o.__awaiter(this, void 0, void 0, function() {
                                            var n;
                                            return o.__generator(this, function(i) {
                                                switch (i.label) {
                                                    case 0:
                                                        return i.trys.push([0, 2, , 3]), [4, e({
                                                            variables: {
                                                                collectionID: t.collectionID
                                                            },
                                                            update: function(e) {
                                                                var n = {
                                                                        creatorID: t.creatorID
                                                                    },
                                                                    i = e.readQuery({
                                                                        query: v,
                                                                        variables: n
                                                                    });
                                                                i && i.user && i.user.collections && (i.user.collections.edges = i.user.collections.edges.filter(function(e) {
                                                                    return e.node.id !== t.collectionID
                                                                }), e.writeQuery({
                                                                    query: v,
                                                                    variables: n,
                                                                    data: i
                                                                }))
                                                            }
                                                        })];
                                                    case 1:
                                                        return i.sent(), [3, 3];
                                                    case 2:
                                                        throw n = i.sent(), s.i.error(n, "DeleteCollectionModal"), n;
                                                    case 3:
                                                        return [2]
                                                }
                                            })
                                        })
                                    }(e.mutate, t)]
                                })
                            })
                        }
                    }
                }
            }))(C),
            _ = Object(r.b)(null, function(e) {
                return Object(c.b)({
                    onClose: u.c
                }, e)
            })(E)
    },
    N8CH: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return l
        });
        var i = n("U7vG"),
            o = (n.n(i), n("Odds")),
            l = function(e) {
                return i.createElement(o._2, {
                    alignItems: o.c.Start,
                    display: o.N.Flex,
                    flexDirection: o.P.Column,
                    flexGrow: 1,
                    flexShrink: 1,
                    justifyContent: o._1.Center,
                    padding: {
                        x: 2
                    }
                }, e.children)
            }
    },
    PwTO: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        });
        var i = n("U7vG"),
            o = (n.n(i), n("Odds")),
            l = n("QmYP"),
            a = (n.n(l), function(e) {
                return i.createElement(o._2, {
                    className: "manager-card__stats-container",
                    display: o.N.Flex,
                    flexGrow: 0,
                    flexShrink: 0,
                    flexWrap: o.Q.NoWrap,
                    flexDirection: o.P.Row,
                    alignItems: o.c.Center
                }, e.children)
            })
    },
    QmYP: function(e, t) {},
    Z8qZ: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            o = n("U7vG"),
            l = n("Odds"),
            a = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return o.createElement(l._25, {
                        background: l.m.Base,
                        elevation: 1,
                        display: l.N.Flex,
                        flexDirection: l.P.Row,
                        alignItems: l.c.Stretch
                    }, this.props.children)
                }, t
            }(o.Component);
        n.d(t, "a", function() {
            return a
        })
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
                            value: "collectionID"
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
                            value: "deleteCollection"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "input"
                            },
                            value: {
                                kind: "ObjectValue",
                                fields: [{
                                    kind: "ObjectField",
                                    name: {
                                        kind: "Name",
                                        value: "collectionID"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "collectionID"
                                        }
                                    }
                                }]
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
                end: 150
            }
        };
        n.loc.source = {
            body: "mutation CollectionManager_DeleteCollection($collectionID: String!) {\ndeleteCollection(input: { collectionID: $collectionID }) {\ncollection {\nid\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    kL3X: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "CollectionManager_CreatorCollectionsForDelete"
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
                                    value: "collections"
                                },
                                arguments: [],
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
                end: 139
            }
        };
        n.loc.source = {
            body: "query CollectionManager_CreatorCollectionsForDelete($creatorID: String!) {\nuser(id: $creatorID) {\ncollections {\nedges {\nnode {\nid\n}\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    rvrg: function(e, t, n) {
        "use strict";
        var i = n("RH2O"),
            o = n("V5M+"),
            l = n("TToO"),
            a = n("U7vG"),
            r = n("6sO2"),
            c = n("mi6k"),
            s = n("vH/s"),
            d = n("kk4f"),
            u = n("CSlQ"),
            m = n("Z8qZ"),
            p = n("KRtN"),
            h = n("4o7v"),
            g = n("PwTO"),
            v = n("N8CH"),
            f = n("Odds"),
            k = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onDeleteOptionClickHandler = function() {
                        t.props.onDeleteOptionClick(t.props.collection, t.props.creatorLogin)
                    }, t
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.collection,
                        t = null;
                    return this.props.hideOptionsMenu || (t = a.createElement(p.a, {
                        options: this.collectionMenuOptions()
                    })), a.createElement(m.a, null, a.createElement(f._2, {
                        flexShrink: 0
                    }, a.createElement(d.a, {
                        alt: e.title,
                        sizes: [{
                            size: "160px"
                        }],
                        src: e.thumbnailURL,
                        videoCount: e.items.totalCount
                    })), a.createElement(v.a, null, a.createElement(f._35, {
                        bold: !0,
                        type: f._40.H4,
                        color: f.I.Alt
                    }, e.title), a.createElement(f._43, {
                        direction: f._45.Bottom,
                        label: Object(r.d)("Last Updated", "CollectionManagerCard")
                    }, a.createElement(f._35, {
                        color: f.I.Alt2
                    }, Object(r.c)(new Date(e.updatedAt), "long")))), a.createElement(g.a, null, this.collectionStats(e)), t)
                }, t.prototype.collectionMenuOptions = function() {
                    return [{
                        asset: f._16.Edit,
                        linkTo: {
                            pathname: "/" + this.props.creatorLogin + "/manager/collections/" + this.props.collection.id,
                            state: {
                                content: s.PageviewContent.CollectionCard,
                                medium: s.PageviewMedium.VideoManagerCollectionManager
                            }
                        },
                        title: Object(r.d)("Edit", "CollectionManagerCard")
                    }, {
                        asset: f._16.Trash,
                        onClick: this.onDeleteOptionClickHandler,
                        title: Object(r.d)("Delete", "CollectionManagerCard")
                    }]
                }, t.prototype.collectionStats = function(e) {
                    return [{
                        value: Object(c.a)(e.lengthSeconds),
                        icon: f._16.GlyphLength,
                        label: Object(r.d)("Collection length", "CollectionManagerCard")
                    }, {
                        value: "" + e.viewCount,
                        icon: f._16.GlyphViews,
                        label: Object(r.d)("Views", "CollectionManagerCard")
                    }].map(function(e, t) {
                        return a.createElement(h.a, l.__assign({
                            key: t
                        }, e))
                    })
                }, t
            }(a.Component),
            C = Object(u.d)("CollectionManagerCard", {
                autoReportInteractive: !0
            })(k),
            E = n("M0wY");
        n.d(t, "a", function() {
            return _
        });
        var _ = Object(i.b)(null, function(e) {
            return {
                onDeleteOptionClick: function(t, n) {
                    e(Object(o.d)(E.a, {
                        collection: t,
                        creatorLogin: n
                    }))
                }
            }
        })(C)
    }
});
//# sourceMappingURL=pages.video-tools.pages.collection-editor-a7014479322d11bea3ef6c6cd7952902.js.map