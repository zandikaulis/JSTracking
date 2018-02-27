webpackJsonp([76], {
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
                end: 427
            }
        };
        n.loc.source = {
            body: "query CollectionManager_EditCollection($collectionID: ID! $after: Cursor) {\ncollection(id: $collectionID) {\nid\nlengthSeconds\nowner {\nid\nlogin\n}\ntitle\nviewCount\nupdatedAt\nthumbnailURL(width: 320 height: 180)\nitems(first: 15 after: $after) {\ntotalCount\npageInfo {\nhasNextPage\n}\nedges {\ncursor\nnode {\n... on Video {\nid\nbroadcastType\ntitle\nlengthSeconds\npreviewThumbnailURL(width: 240 height: 135)\npublishedAt\nviewCount\n}\n}\n}\n}\n}\n}",
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
            l = n("GiK3"),
            a = n("3zLD"),
            r = n("6sO2"),
            c = n("zCIC"),
            d = n("j7/Y"),
            s = n("w9tK"),
            u = n("vH/s"),
            m = n("CSlQ"),
            p = n("PQ4i"),
            h = n("RH2O"),
            g = n("V5M+"),
            f = n("M0wY"),
            v = n("kk4f"),
            C = n("jcM9"),
            k = n("Odds");
        ! function(e) {
            e[e.DeleteButton = 0] = "DeleteButton", e[e.PlayAllButton = 1] = "PlayAllButton", e[e.Thumbnail = 2] = "Thumbnail"
        }(i || (i = {}));
        var E = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.onTitleChange = function(e) {
                    t.props.onTitleChange(e.currentTarget.value)
                }, t.onDeleteOptionClickHandler = function() {
                    t.props.onDeleteOptionClick(t.props.collection)
                }, t
            }
            return o.__extends(t, e), t.prototype.render = function() {
                return l.createElement(k._25, {
                    background: k.m.Alt,
                    display: k.N.Flex,
                    flexDirection: k.P.Row,
                    alignItems: k.c.Stretch
                }, l.createElement(k._2, {
                    display: k.N.Flex,
                    flexDirection: k.P.Column
                }, l.createElement(k._2, {
                    margin: {
                        y: 1
                    }
                }, l.createElement(k._35, {
                    color: k.I.Alt,
                    type: k._40.H6,
                    bold: !0
                }, Object(r.d)("Collection Thumbnail", "CollectionEditorInfoCard"))), l.createElement(v.a, {
                    "data-test-selector": i.Thumbnail,
                    alt: this.props.collection.title,
                    sizes: [{
                        size: "320px"
                    }],
                    src: this.props.collection.thumbnailURL
                })), l.createElement(k._2, {
                    display: k.N.Flex,
                    flexDirection: k.P.Column,
                    margin: {
                        left: 3
                    },
                    flexGrow: 2,
                    flexShrink: 0
                }, l.createElement(k._2, {
                    margin: {
                        y: 1
                    }
                }, l.createElement(k._35, {
                    color: k.I.Alt,
                    type: k._40.H6,
                    bold: !0
                }, Object(r.d)("Title", "CollectionEditorInfoCard"))), l.createElement(k.Y, {
                    type: k.Z.Text,
                    defaultValue: this.props.collection.title,
                    onChange: this.onTitleChange
                }), l.createElement(k._2, {
                    margin: {
                        top: 1,
                        bottom: 3
                    }
                }, l.createElement(k._35, {
                    type: k._40.Span,
                    color: k.I.Alt2
                }, Object(r.d)("Last updated {updatedAt}", {
                    updatedAt: Object(r.c)(new Date(this.props.collection.updatedAt), "long")
                }, "CollectionEditorInfoCard"))), this.managerMenu()))
            }, t.prototype.managerMenu = function() {
                return l.createElement(k._2, {
                    display: k.N.Flex,
                    flexDirection: k.P.Row
                }, l.createElement(k.u, {
                    "data-test-selector": i.PlayAllButton,
                    icon: k._16.Play,
                    type: k.z.Text,
                    linkTo: "/collections/" + this.props.collection.id
                }, Object(r.d)("Play All", "CollectionEditorInfoCard")), l.createElement(k.u, {
                    icon: k._16.Plus,
                    type: k.z.Text
                }, Object(r.d)("Add", "CollectionEditorInfoCard")), l.createElement(C.a, {
                    balloonDirection: k.q.BottomCenter,
                    buttonType: k.z.Text,
                    content: {
                        collectionID: this.props.collection.id
                    },
                    tracking: {
                        location: u.PageviewLocation.VideoManagerCollectionEditor
                    }
                }), l.createElement(k.u, {
                    "data-test-selector": i.DeleteButton,
                    icon: k._16.Trash,
                    type: k.z.Text,
                    onClick: this.onDeleteOptionClickHandler
                }, Object(r.d)("Delete", "CollectionEditorInfoCard")))
            }, t
        }(l.Component);
        var _, b = Object(h.b)(null, function(e) {
                return {
                    onDeleteOptionClick: function(t) {
                        e(Object(g.d)(f.a, {
                            collection: t
                        }))
                    }
                }
            })(E),
            y = function() {
                return l.createElement(k._25, {
                    background: k.m.Alt,
                    display: k.N.Flex,
                    flexDirection: k.P.Row,
                    alignItems: k.c.Stretch,
                    margin: {
                        bottom: 5
                    }
                }, l.createElement(k._2, {
                    display: k.N.Flex,
                    flexDirection: k.P.Column
                }, l.createElement(k._2, {
                    margin: {
                        y: 1
                    }
                }, l.createElement(k._8, {
                    width: 100
                })), l.createElement(k._8, {
                    height: 180,
                    width: 320
                })), l.createElement(k._2, {
                    display: k.N.Flex,
                    flexDirection: k.P.Column,
                    margin: {
                        left: 3
                    },
                    flexGrow: 2,
                    flexShrink: 0
                }, l.createElement(k._2, {
                    margin: {
                        y: 1
                    }
                }, l.createElement(k._8, {
                    width: 50
                })), l.createElement(k._8, {
                    height: 25,
                    width: 400
                }), l.createElement(k._2, {
                    margin: {
                        top: 1,
                        bottom: 3
                    }
                }, l.createElement(k._8, {
                    height: 15,
                    width: 300
                })), l.createElement(k._8, {
                    height: 30,
                    width: 400
                })))
            },
            O = n("i61F"),
            N = n("F8kA"),
            S = n("mi6k"),
            x = n("5RjZ"),
            w = n("KRtN"),
            I = n("4o7v"),
            D = n("PwTO"),
            T = n("N8CH"),
            j = n("Z8qZ"),
            M = (n("dAJe"), {
                ItemLength: "ItemLength",
                VideoLink: "VideoLink"
            }),
            F = Object(O.SortableHandle)(function() {
                return l.createElement(k._15, {
                    asset: k._16.DragHandle
                })
            }),
            P = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.subHeader = function(e) {
                        return l.createElement(k._25, {
                            display: k.N.Flex,
                            flexDirection: k.P.Row,
                            margin: {
                                top: .5
                            },
                            color: k.I.Alt2
                        }, l.createElement(k._2, {
                            padding: {
                                right: 1
                            }
                        }, l.createElement(k._43, {
                            direction: k._45.Bottom,
                            align: k._44.Center,
                            label: Object(r.d)("Published At", "CollectionItemCard")
                        }, l.createElement(k._35, null, Object(r.c)(new Date(e.publishedAt), "long")))), l.createElement(k._2, {
                            padding: {
                                right: 1
                            },
                            display: k.N.Flex,
                            alignItems: k.c.Center
                        }, l.createElement(k._24, {
                            "data-test-selector": M.ItemLength,
                            label: Object(r.d)("Length", "CollectionItemCard"),
                            value: Object(S.a)(e.lengthSeconds),
                            icon: k._16.GlyphLength
                        })), l.createElement(k._2, {
                            padding: {
                                right: 1
                            },
                            display: k.N.Flex,
                            alignItems: k.c.Center
                        }, l.createElement(k._24, {
                            label: Object(r.d)("Video Type", "CollectionItemCard"),
                            value: Object(x.a)(e.broadcastType),
                            icon: k._16.NavVideos
                        })))
                    }, t.reportImageInteractive = function() {
                        t.props.latencyTracking.reportInteractive()
                    }, t
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.collectionItem;
                    return l.createElement(k._2, {
                        className: "collection-item-card",
                        margin: {
                            y: 1
                        }
                    }, l.createElement(j.a, null, l.createElement(k._25, {
                        background: k.m.Alt,
                        display: k.N.Flex,
                        className: "collection-item__drag-handle"
                    }, l.createElement(F, null)), l.createElement(k._2, {
                        alignSelf: k.d.Center,
                        padding: {
                            x: 1
                        }
                    }, this.props.position), l.createElement(k._2, {
                        flexGrow: 0,
                        flexShrink: 0
                    }, l.createElement(k.C, {
                        aspect: k.k.Aspect16x9,
                        size: k.D.Size16,
                        onLoad: this.reportImageInteractive,
                        onError: this.reportImageInteractive,
                        src: e.previewThumbnailURL ? e.previewThumbnailURL : "https://static-cdn.jtvnw.net/ttv-playlists-thumbnails-prod/missing-video-thumb-320x180.png",
                        alt: e.title
                    })), l.createElement(T.a, null, l.createElement(k._43, {
                        label: Object(r.d)("Watch this video", "CollectionItemCard"),
                        direction: k._45.Right
                    }, l.createElement(k._35, {
                        type: k._40.H5,
                        color: k.I.Alt
                    }, l.createElement(N.a, {
                        "data-test-selector": M.VideoLink,
                        to: {
                            pathname: "/videos/" + this.props.collectionItem.id,
                            state: {
                                content: u.PageviewContent.CollectionItemCard,
                                medium: u.PageviewMedium.VideoManagerCollectionEditor
                            }
                        }
                    }, e.title))), this.subHeader(e)), l.createElement(D.a, null, l.createElement(I.a, {
                        value: e.viewCount.toString(),
                        icon: k._16.GlyphViews,
                        label: Object(r.d)("Total videos", "CollectionItemCard")
                    })), l.createElement(w.a, {
                        options: this.collectionMenuOptions(e)
                    })))
                }, t.prototype.collectionMenuOptions = function(e) {
                    return [{
                        asset: k._16.Edit,
                        title: Object(r.d)("Set as collection thumbnail", "CollectionItemCard")
                    }, {
                        asset: k._16.Trash,
                        title: Object(r.d)("Remove from collection", "CollectionItemCard")
                    }]
                }, t
            }(l.Component),
            A = Object(a.compose)(Object(m.d)("CollectionItemCard"))(P),
            R = Object(O.SortableElement)(function(e) {
                return l.createElement(A, o.__assign({}, e))
            }),
            H = Object(O.SortableContainer)(function(e) {
                var t = e.items;
                return l.createElement(k._2, null, t.map(function(e, t) {
                    return l.createElement(R, {
                        key: e.id,
                        index: t,
                        position: t + 1,
                        collectionItem: e
                    })
                }))
            }),
            V = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onSortEnd = function(e) {
                        var n = e.oldIndex,
                            i = e.newIndex,
                            o = Object(O.arrayMove)(t.props.items, n, i);
                        return t.props.onReorder(o), "foo"
                    }, t
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    return l.createElement(H, {
                        items: this.props.items,
                        onSortEnd: this.onSortEnd,
                        useDragHandle: !0
                    })
                }, t
            }(l.Component),
            B = n("Dz2i");
        n("/brc");
        ! function(e) {
            e[e.BackButton = 0] = "BackButton"
        }(_ || (_ = {}));
        var L = function(e) {
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
                    return this.props.data.loading ? (e = this.collectionInfoPlaceholder(), t = this.collectionCardPlaceholders()) : this.props.data.error || !this.props.data.collection ? (e = this.collectionUnavailableError(), t = this.collectionItemsUnavaibleError()) : this.props.data.collection ? (e = l.createElement(b, {
                        collection: this.props.data.collection,
                        onTitleChange: this.onTitleChange
                    }), t = l.createElement(V, {
                        items: this.props.data.collection.items.edges.map(function(e) {
                            return e.node
                        }),
                        onReorder: this.onItemsChange
                    }), n = this.props.data.collection.items.pageInfo.hasNextPage || !1) : (e = this.collectionUnavailableError(), t = this.noCollectionItemsCTA()), l.createElement(c.b, null, l.createElement(k._2, {
                        padding: 3,
                        display: k.N.Flex,
                        flexDirection: k.P.Row,
                        className: "collection-editor-page"
                    }, l.createElement(k._2, {
                        flexGrow: 1
                    }, l.createElement(k._2, {
                        margin: {
                            bottom: 1
                        },
                        flexGrow: 1,
                        flexDirection: k.P.Row,
                        display: k.N.Flex
                    }, l.createElement(k._2, {
                        flexGrow: 1
                    }, l.createElement(k._35, {
                        type: k._40.H3
                    }, Object(r.d)("Edit Collection", "CollectionEditorPagePresentation"))), l.createElement(k._2, {
                        flexGrow: 0
                    }, l.createElement(k.u, {
                        onClick: this.onCancel,
                        type: k.z.Text
                    }, Object(r.d)("Cancel", "CollectionEditorPagePresentation")))), l.createElement(k._2, {
                        padding: {
                            y: .5
                        }
                    }, l.createElement(k.L, {
                        "data-test-selector": _.BackButton,
                        hoverUnderlineNone: !0,
                        to: {
                            pathname: "/" + this.props.match.params.creatorLogin + "/manager/collections",
                            state: {
                                content: "all_collections",
                                medium: u.PageviewMedium.VideoManagerCollectionEditor
                            }
                        }
                    }, l.createElement(k._2, {
                        display: k.N.Flex,
                        flexDirection: k.P.Row,
                        alignItems: k.c.Center
                    }, l.createElement(k._15, {
                        asset: k._16.ChatSettingsBack,
                        height: 20,
                        width: 20
                    }), l.createElement(k._35, {
                        align: k._50.Middle,
                        bold: !0
                    }, Object(r.d)("All collections", "CollectionEditorPagePresentation"))))), e, t, l.createElement(c.a, {
                        enabled: n,
                        loadMore: this.props.loadMore
                    })), l.createElement(k._2, {
                        flexGrow: 0,
                        className: "right-sidebar"
                    }, l.createElement(k.u, {
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
                    return l.createElement(y, null)
                }, t.prototype.noCollectionItemsCTA = function() {
                    return l.createElement("div", null)
                }, t.prototype.collectionItemsUnavaibleError = function() {
                    return l.createElement("div", null)
                }, t.prototype.collectionUnavailableError = function() {
                    return l.createElement("div", null)
                }, t
            }(l.Component),
            z = function(e, t) {
                var n = t.fetchMoreResult;
                if (!n || !n.collection || !n.collection.items) return e;
                var i = e.collection && e.collection.items.edges || [];
                return n.collection.items.edges = i.concat(n.collection.items.edges), n
            },
            G = Object(a.compose)(Object(a.graphql)(B, {
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
                                variables: (t = e.ownProps, n = e.data, i = n.collection && n.collection.items ? n.collection.items.edges : [], o = i[i.length - 1] && i[i.length - 1].cursor, {
                                    collectionID: t.match.params.collectionID,
                                    after: o
                                }),
                                query: B,
                                updateQuery: z
                            });
                            var t, n, i, o
                        },
                        updateCollection: function(e) {
                            return new Promise(function(e) {
                                return e()
                            })
                        }
                    })
                }
            }), Object(m.d)("CollectionEditorPage", {
                destination: s.a.VideoManagerCollectionsEditor
            }), Object(d.a)({
                location: u.PageviewLocation.VideoManagerCollectionEditor,
                properties: function(e) {
                    return {
                        channel: e.match.params.creatorLogin
                    }
                },
                skip: function(e) {
                    return e.data.loading
                }
            }))(L),
            U = n("L2R7"),
            K = function(e) {
                return window.location.replace("https://www.twitch.tv/" + encodeURIComponent(e.match.params.creatorLogin) + "/manager/collections/edit/" + e.match.params.collectionID), null
            },
            q = function(e) {
                return Object(U.a)() ? l.createElement(G, o.__assign({}, e)) : l.createElement(K, o.__assign({}, e))
            };
        n.d(t, "CollectionEditorPage", function() {
            return q
        })
    },
    KRtN: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            o = n("GiK3"),
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
            l = n("GiK3"),
            a = n("3zLD"),
            r = n("RH2O"),
            c = n("6sO2"),
            d = n("7vx8"),
            s = n("oIkB"),
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
                    }, Object(c.d)("Delete Collection", "DeleteCollectionModal"))), l.createElement(h._35, {
                        fontSize: h.R.Size6
                    }, Object(c.d)("Are you sure you want to delete this collection?", "DeleteCollectionModal")), l.createElement(h._35, {
                        fontSize: h.R.Size6
                    }, Object(c.d)("This action cannot be undone. ", "DeleteCollectionModal")), l.createElement(h._2, {
                        padding: {
                            y: 2
                        }
                    }, l.createElement(p.a, {
                        collection: e,
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
                    }, Object(c.d)("Cancel", "DeleteCollectionModal"))), l.createElement(h._2, {
                        margin: {
                            x: .5
                        }
                    }, l.createElement(h.u, {
                        "data-test-selector": i.ConfirmButton,
                        onClick: this.props.onDeleteRequest,
                        type: h.z.Alert
                    }, Object(c.d)("Delete", "DeleteCollectionModal")))), l.createElement(m.a, {
                        closeOnBackdropClick: !0
                    })))
                }, t
            }(l.Component),
            f = n("e6eF");
        n.d(t, "a", function() {
            return k
        });
        var v = function(e) {
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
                                        return e = t.sent(), c.i.error(e, "DeleteCollectionModal"), this.setState({
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
                return l.createElement(g, {
                    collection: this.props.collection,
                    error: this.state.deletionError,
                    onCancel: this.onCancelHandler,
                    onDeleteRequest: this.onDeleteHandler
                })
            }, t
        }(l.Component);
        var C = Object(a.compose)(Object(d.a)(f, {
                name: "onDeleteRequest"
            }))(v),
            k = Object(r.b)(null, function(e, t) {
                return {
                    onClose: function() {
                        e(Object(u.c)())
                    },
                    onSuccess: function() {
                        e(Object(u.c)()), t.onSuccess && t.onSuccess()
                    }
                }
            })(C)
    },
    N8CH: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return l
        });
        var i = n("GiK3"),
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
        var i = n("GiK3"),
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
            o = n("GiK3"),
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
            h = n("4o7v"),
            g = n("PwTO"),
            f = n("N8CH"),
            v = n("Odds"),
            C = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onDeleteOptionClickHandler = function() {
                        t.props.onDeleteOptionClick(t.props.collection)
                    }, t
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.collection;
                    return a.createElement(m.a, null, a.createElement(v._2, {
                        flexShrink: 0
                    }, a.createElement(s.a, {
                        alt: e.title,
                        sizes: [{
                            size: "160px"
                        }],
                        src: e.thumbnailURL,
                        videoCount: e.items.totalCount
                    })), a.createElement(f.a, null, a.createElement(v._35, {
                        bold: !0,
                        type: v._40.H4,
                        color: v.I.Alt
                    }, e.title), a.createElement(v._43, {
                        direction: v._45.Bottom,
                        label: Object(r.d)("Last Updated", "CollectionManagerCard")
                    }, a.createElement(v._35, {
                        color: v.I.Alt2
                    }, Object(r.c)(new Date(e.updatedAt), "long")))), a.createElement(g.a, null, this.collectionStats(e)), this.renderCardMenu())
                }, t.prototype.renderCardMenu = function() {
                    if (this.props.hideOptionsMenu || !this.props.collection.owner) return null;
                    var e = [{
                        asset: v._16.Edit,
                        linkTo: {
                            pathname: "/" + this.props.collection.owner.login + "/manager/collections/" + this.props.collection.id,
                            state: {
                                content: d.PageviewContent.CollectionCard,
                                medium: d.PageviewMedium.VideoManagerCollectionManager
                            }
                        },
                        title: Object(r.d)("Edit", "CollectionManagerCard")
                    }, {
                        asset: v._16.Trash,
                        onClick: this.onDeleteOptionClickHandler,
                        title: Object(r.d)("Delete", "CollectionManagerCard")
                    }];
                    return a.createElement(p.a, {
                        options: e
                    })
                }, t.prototype.collectionStats = function(e) {
                    return [{
                        value: Object(c.a)(e.lengthSeconds),
                        icon: v._16.GlyphLength,
                        label: Object(r.d)("Collection length", "CollectionManagerCard")
                    }, {
                        value: "" + e.viewCount,
                        icon: v._16.GlyphViews,
                        label: Object(r.d)("Views", "CollectionManagerCard")
                    }].map(function(e, t) {
                        return a.createElement(h.a, l.__assign({
                            key: t
                        }, e))
                    })
                }, t
            }(a.Component),
            k = Object(u.d)("CollectionManagerCard", {
                autoReportInteractive: !0
            })(C),
            E = n("M0wY");
        n.d(t, "a", function() {
            return _
        });
        var _ = Object(i.b)(null, function(e, t) {
            return {
                onDeleteOptionClick: function(n) {
                    e(Object(o.d)(E.a, {
                        collection: n,
                        onSuccess: t.onDelete
                    }))
                }
            }
        })(k)
    }
});
//# sourceMappingURL=pages.video-tools.pages.collection-editor-d1790702dccc8cbc7f126846088a1f29.js.map