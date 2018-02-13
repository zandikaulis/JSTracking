webpackJsonp([76], {
    "/brc": function(e, t) {},
    "1opg": function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var i = "https://static-cdn.jtvnw.net/ttv-playlists-thumbnails-prod/missing-video-thumb-320x180.png"
    },
    "4o7v": function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
        });
        var i = n("TToO"),
            l = n("U7vG"),
            a = (n.n(l), n("5kgt")),
            o = n("Odds"),
            r = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = l.createElement(o._1, {
                            alignItems: o.c.Center,
                            display: o.M.Flex,
                            fullHeight: !0,
                            justifyContent: o._0.Center,
                            padding: 2
                        }, l.createElement(o._23, {
                            icon: this.props.icon,
                            label: this.props.label,
                            value: this.props.value
                        })),
                        t = this.props.linkTo ? l.createElement(o.Z, {
                            alpha: !0,
                            linkTo: this.props.linkTo,
                            targetBlank: !0
                        }, e) : e;
                    return l.createElement(o._1, i.__assign({
                        display: o.M.InlineFlex,
                        fullHeight: !0
                    }, Object(a.a)(this.props)), t)
                }, t
            }(l.Component)
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
                                                                            value: "login"
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
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 440
            }
        };
        n.loc.source = {
            body: "query CollectionManager_EditCollection($collectionID: ID! $after: Cursor) {\ncollection(id: $collectionID) {\nid\nlengthSeconds\nowner {\nlogin\n}\ntitle\nviewCount\nupdatedAt\nthumbnailURL(width: 320 height: 180)\nitems(first: 15 after: $after) {\ntotalCount\npageInfo {\nhasNextPage\n}\nedges {\ncursor\nnode {\n... on Video {\nid\nbroadcastType\ntitle\nlengthSeconds\npreviewThumbnailURL(width: 240 height: 135)\npublishedAt\nviewCount\nowner {\nlogin\n}\n}\n}\n}\n}\n}\n}",
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
        var i = n("TToO"),
            l = n("U7vG"),
            a = n("3zLD"),
            o = n("6sO2"),
            r = n("zCIC"),
            c = n("j7/Y"),
            d = n("w9tK"),
            s = n("vH/s"),
            u = n("CSlQ"),
            m = n("PQ4i"),
            p = n("1opg"),
            g = n("Odds"),
            v = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return l.createElement(g._24, {
                        background: g.m.Alt,
                        display: g.M.Flex,
                        flexDirection: g.O.Row,
                        alignItems: g.c.Stretch
                    }, l.createElement(g._1, {
                        display: g.M.Flex,
                        flexDirection: g.O.Column
                    }, l.createElement(g._1, {
                        margin: {
                            y: 1
                        }
                    }, l.createElement(g._34, {
                        color: g.I.Alt,
                        type: g._39.H6,
                        bold: !0
                    }, Object(o.d)("Collection Thumbnail", "CollectionEditorInfoCard"))), l.createElement(g.K, {
                        src: this.props.collection.thumbnailURL || p.a,
                        alt: this.props.collection.title
                    })), l.createElement(g._1, {
                        display: g.M.Flex,
                        flexDirection: g.O.Column,
                        margin: {
                            left: 3
                        },
                        flexGrow: 2,
                        flexShrink: 0
                    }, l.createElement(g._1, {
                        margin: {
                            y: 1
                        }
                    }, l.createElement(g._34, {
                        color: g.I.Alt,
                        type: g._39.H6,
                        bold: !0
                    }, Object(o.d)("Title", "CollectionEditorInfoCard"))), l.createElement(g.X, {
                        type: g.Y.Text,
                        value: this.props.collection.title,
                        readOnly: !0
                    }), l.createElement(g._1, {
                        margin: {
                            top: 1,
                            bottom: 3
                        }
                    }, l.createElement(g._34, {
                        type: g._39.Span,
                        color: g.I.Alt2
                    }, Object(o.d)("Last updated {updatedAt}", {
                        updatedAt: Object(o.c)(new Date(this.props.collection.updatedAt), "long")
                    }, "CollectionEditorInfoCard"))), this.managerMenu()))
                }, t.prototype.managerMenu = function() {
                    return l.createElement(g._1, null, l.createElement(g.u, {
                        icon: g._15.Play,
                        type: g.z.Text
                    }, Object(o.d)("Play All", "CollectionEditorInfoCard")), l.createElement(g.u, {
                        icon: g._15.Plus,
                        type: g.z.Text
                    }, Object(o.d)("Add", "CollectionEditorInfoCard")), l.createElement(g.u, {
                        icon: g._15.Share,
                        type: g.z.Text
                    }, Object(o.d)("Share", "CollectionEditorInfoCard")), l.createElement(g.u, {
                        icon: g._15.Trash,
                        type: g.z.Text
                    }, Object(o.d)("Delete", "CollectionEditorInfoCard")))
                }, t
            }(l.Component),
            h = n("F8kA"),
            k = n("mi6k"),
            f = n("5RjZ"),
            C = n("KRtN"),
            E = n("4o7v"),
            _ = n("PwTO"),
            y = n("N8CH"),
            b = n("Z8qZ"),
            I = (n("dAJe"), {
                ItemLength: "ItemLength",
                VideoLink: "VideoLink"
            }),
            x = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.subHeader = function(e) {
                        return l.createElement(g._24, {
                            display: g.M.Flex,
                            flexDirection: g.O.Row,
                            margin: {
                                top: .5
                            },
                            color: g.I.Alt2
                        }, l.createElement(g._1, {
                            padding: {
                                right: 1
                            }
                        }, l.createElement(g._42, {
                            direction: g._44.Bottom,
                            align: g._43.Center,
                            label: Object(o.d)("Published At", "CollectionItemCard")
                        }, l.createElement(g._34, null, Object(o.c)(new Date(e.publishedAt), "long")))), l.createElement(g._1, {
                            padding: {
                                right: 1
                            },
                            display: g.M.Flex,
                            alignItems: g.c.Center
                        }, l.createElement(g._23, {
                            "data-test-selector": I.ItemLength,
                            label: Object(o.d)("Length", "CollectionItemCard"),
                            value: Object(k.a)(e.lengthSeconds),
                            icon: g._15.GlyphLength
                        })), l.createElement(g._1, {
                            padding: {
                                right: 1
                            },
                            display: g.M.Flex,
                            alignItems: g.c.Center
                        }, l.createElement(g._23, {
                            label: Object(o.d)("Video Type", "CollectionItemCard"),
                            value: Object(f.a)(e.broadcastType),
                            icon: g._15.NavVideos
                        })))
                    }, t.reportImageInteractive = function() {
                        t.props.latencyTracking.reportInteractive()
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.collectionItem;
                    return l.createElement(g._1, {
                        className: "collection-item-card",
                        margin: {
                            y: 1
                        }
                    }, l.createElement(b.a, null, l.createElement(g._24, {
                        background: g.m.Alt,
                        display: g.M.Flex,
                        className: "collection-item__drag-handle"
                    }, l.createElement(g._14, {
                        asset: g._15.Roman2
                    })), l.createElement(g._1, {
                        alignSelf: g.d.Center,
                        padding: {
                            x: 1
                        }
                    }, this.props.position), l.createElement(g._1, {
                        flexGrow: 0,
                        flexShrink: 0
                    }, l.createElement(g.C, {
                        aspect: g.k.Aspect16x9,
                        size: g.D.Size16,
                        onLoad: this.reportImageInteractive,
                        onError: this.reportImageInteractive,
                        src: e.previewThumbnailURL ? e.previewThumbnailURL : p.a,
                        alt: e.title
                    })), l.createElement(y.a, null, l.createElement(g._34, {
                        type: g._39.H5,
                        color: g.I.Alt
                    }, l.createElement(h.a, {
                        "data-test-selector": I.VideoLink,
                        to: {
                            pathname: "/videos/" + this.props.collectionItem.id,
                            state: {
                                content: s.PageviewContent.CollectionItemCard,
                                medium: s.PageviewMedium.VideoManagerCollectionEditor
                            }
                        }
                    }, e.title)), this.subHeader(e)), l.createElement(_.a, null, l.createElement(E.a, {
                        value: e.viewCount.toString(),
                        icon: g._15.GlyphViews,
                        label: Object(o.d)("Total videos", "CollectionItemCard")
                    })), l.createElement(C.a, {
                        options: this.collectionMenuOptions(e)
                    })))
                }, t.prototype.collectionMenuOptions = function(e) {
                    return [{
                        asset: g._15.Edit,
                        title: Object(o.d)("Set as collection thumbnail", "CollectionItemCard")
                    }, {
                        asset: g._15.Trash,
                        title: Object(o.d)("Remove from collection", "CollectionItemCard")
                    }]
                }, t
            }(l.Component),
            O = Object(a.compose)(Object(u.d)("CollectionItemCard"))(x),
            N = n("Dz2i"),
            w = (n("/brc"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
                    e.data.loading && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e, t = !1;
                    return this.props.data.loading ? e = this.collectionCardPlaceholders() : this.props.data.error || !this.props.data.collection ? e = this.contentUnavaibleError() : this.props.data.collection ? (e = this.renderCollectionItems(this.props.data.collection.items.edges), t = this.props.data.collection.items.pageInfo.hasNextPage || !1) : e = this.noCollectionItemsCTA(), l.createElement(r.b, null, l.createElement(g._1, {
                        padding: 3,
                        display: g.M.Flex,
                        flexDirection: g.O.Row,
                        className: "collection-editor-page"
                    }, l.createElement(g._1, {
                        flexGrow: 1
                    }, l.createElement(g._1, {
                        margin: {
                            bottom: 1
                        },
                        flexGrow: 1,
                        flexDirection: g.O.Row,
                        display: g.M.Flex
                    }, l.createElement(g._1, {
                        flexGrow: 1
                    }, l.createElement(g._34, {
                        type: g._39.H3
                    }, Object(o.d)("Edit Collection", "CollectionEditorPagePresentation"))), l.createElement(g._1, {
                        flexGrow: 0
                    }, l.createElement(g.u, {
                        type: g.z.Text
                    }, Object(o.d)("Cancel", "CollectionEditorPagePresentation")))), this.props.data.collection && l.createElement(v, {
                        collection: this.props.data.collection
                    }), e, l.createElement(r.a, {
                        enabled: t,
                        loadMore: this.props.loadMore
                    })), l.createElement(g._1, {
                        flexGrow: 0,
                        className: "right-sidebar"
                    }, l.createElement(g.u, null, Object(o.d)("Save changes", "CollectionEditorPagePresentation")))))
                }, t.prototype.renderCollectionItems = function(e) {
                    return e.map(function(e, t) {
                        return l.createElement(O, {
                            key: t,
                            collectionItem: e.node,
                            position: t + 1
                        })
                    })
                }, t.prototype.collectionCardPlaceholders = function() {
                    return [l.createElement(m.a, {
                        key: 1
                    }), l.createElement(m.a, {
                        key: 2
                    }), l.createElement(m.a, {
                        key: 3
                    })]
                }, t.prototype.noCollectionItemsCTA = function() {
                    return l.createElement("div", null)
                }, t.prototype.contentUnavaibleError = function() {
                    return l.createElement("div", null)
                }, t
            }(l.Component)),
            S = function(e, t) {
                var n = t.fetchMoreResult;
                if (!n || !n.collection || !n.collection.items) return e;
                var i = e.collection && e.collection.items.edges || [];
                return n.collection.items.edges = i.concat(n.collection.items.edges), n
            },
            F = Object(a.compose)(Object(a.graphql)(N, {
                options: function(e) {
                    return {
                        variables: {
                            collectionID: e.match.params.collectionID
                        }
                    }
                },
                props: function(e) {
                    return i.__assign({}, e, {
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
                                query: N,
                                updateQuery: S
                            })
                        }
                    })
                }
            }), Object(u.d)("CollectionEditorPage", {
                destination: d.a.VideoManagerCollectionsEditor
            }), Object(c.a)({
                location: s.PageviewLocation.VideoManagerCollectionEditor,
                properties: function(e) {
                    return {
                        channel: e.match.params.creatorLogin
                    }
                },
                skip: function(e) {
                    return e.data.loading
                }
            }))(w),
            T = n("L2R7"),
            M = function(e) {
                return window.location.replace("https://www.twitch.tv/" + encodeURIComponent(e.match.params.creatorLogin) + "/manager/collections/edit/" + e.match.params.collectionID), null
            },
            D = function(e) {
                return Object(T.a)() ? l.createElement(F, i.__assign({}, e)) : l.createElement(M, i.__assign({}, e))
            };
        n.d(t, "CollectionEditorPage", function() {
            return D
        })
    },
    KRtN: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            l = n("U7vG"),
            a = n("rCmJ"),
            o = n("Odds"),
            r = function(e) {
                var t = e.asset ? l.createElement(o._14, {
                    asset: e.asset
                }) : null;
                return l.createElement(o.Z, {
                    linkTo: e.linkTo,
                    onClick: e.onClick
                }, l.createElement(o._1, {
                    alignItems: o.c.Center,
                    display: o.M.Flex,
                    flexGrow: 1,
                    padding: 1
                }, t, l.createElement(o.V, {
                    margin: {
                        left: 1
                    }
                }, l.createElement(o._34, null, e.title))))
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
                return this.state.showDropMenu && (e = this.dropMenu()), l.createElement(o._1, {
                    flexGrow: 0,
                    flexShrink: 0,
                    display: o.M.Flex,
                    position: o._8.Relative
                }, l.createElement(o.V, {
                    fullHeight: !0
                }, l.createElement(a.a, {
                    onClickOut: this.clickOutHandler
                }, l.createElement(o._1, {
                    fullHeight: !0,
                    display: o.M.Flex,
                    alignItems: o.c.Stretch
                }, l.createElement(o.u, {
                    disabled: 0 === this.props.options.length,
                    icon: o._15.More,
                    onClick: this.menuButtonClickHandler,
                    type: o.z.Text
                })), e)))
            }, t.prototype.dropMenu = function() {
                var e = this.props.options.map(function(e, t) {
                    return l.createElement(r, i.__assign({
                        key: t
                    }, e))
                });
                return l.createElement(o.p, {
                    size: o.r.Small,
                    direction: o.q.BottomRight,
                    noTail: !0,
                    show: !0
                }, e)
            }, t
        }(l.Component)
    },
    N8CH: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        });
        var i = n("U7vG"),
            l = (n.n(i), n("Odds")),
            a = function(e) {
                return i.createElement(l._1, {
                    alignItems: l.c.Start,
                    display: l.M.Flex,
                    flexDirection: l.O.Column,
                    flexGrow: 1,
                    flexShrink: 1,
                    justifyContent: l._0.Center,
                    padding: {
                        x: 2
                    }
                }, e.children)
            }
    },
    PwTO: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return o
        });
        var i = n("U7vG"),
            l = (n.n(i), n("Odds")),
            a = n("QmYP"),
            o = (n.n(a), function(e) {
                return i.createElement(l._1, {
                    className: "manager-card__stats-container",
                    display: l.M.Flex,
                    flexGrow: 0,
                    flexShrink: 0,
                    flexWrap: l.P.NoWrap,
                    flexDirection: l.O.Row,
                    alignItems: l.c.Center
                }, e.children)
            })
    },
    QmYP: function(e, t) {},
    Z8qZ: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            l = n("U7vG"),
            a = n("Odds"),
            o = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return l.createElement(a._24, {
                        background: a.m.Base,
                        elevation: 1,
                        display: a.M.Flex,
                        flexDirection: a.O.Row,
                        alignItems: a.c.Stretch
                    }, this.props.children)
                }, t
            }(l.Component);
        n.d(t, "a", function() {
            return o
        })
    },
    dAJe: function(e, t) {}
});
//# sourceMappingURL=pages.video-tools.pages.collection-editor-850c14fea900a7af3cf600cd56a5a85c.js.map