webpackJsonp([81], {
    "/brc": function(e, t) {},
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
                    var e = l.createElement(o._2, {
                            alignItems: o.c.Center,
                            display: o.N.Flex,
                            fullHeight: !0,
                            justifyContent: o._1.Center,
                            padding: 2
                        }, l.createElement(o._24, {
                            icon: this.props.icon,
                            label: this.props.label,
                            value: this.props.value
                        })),
                        t = this.props.linkTo ? l.createElement(o._0, {
                            alpha: !0,
                            linkTo: this.props.linkTo,
                            targetBlank: !0
                        }, e) : e;
                    return l.createElement(o._2, i.__assign({
                        display: o.N.InlineFlex,
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
        var i, l = n("TToO"),
            a = n("U7vG"),
            o = n("3zLD"),
            r = n("6sO2"),
            c = n("zCIC"),
            d = n("j7/Y"),
            s = n("w9tK"),
            u = n("vH/s"),
            m = n("CSlQ"),
            p = n("PQ4i"),
            g = n("kk4f"),
            h = n("jcM9"),
            v = n("Odds"),
            k = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(v._25, {
                        background: v.m.Alt,
                        display: v.N.Flex,
                        flexDirection: v.P.Row,
                        alignItems: v.c.Stretch
                    }, a.createElement(v._2, {
                        display: v.N.Flex,
                        flexDirection: v.P.Column
                    }, a.createElement(v._2, {
                        margin: {
                            y: 1
                        }
                    }, a.createElement(v._35, {
                        color: v.I.Alt,
                        type: v._40.H6,
                        bold: !0
                    }, Object(r.d)("Collection Thumbnail", "CollectionEditorInfoCard"))), a.createElement(g.a, {
                        alt: this.props.collection.title,
                        sizes: [{
                            size: "320px"
                        }],
                        src: this.props.collection.thumbnailURL
                    })), a.createElement(v._2, {
                        display: v.N.Flex,
                        flexDirection: v.P.Column,
                        margin: {
                            left: 3
                        },
                        flexGrow: 2,
                        flexShrink: 0
                    }, a.createElement(v._2, {
                        margin: {
                            y: 1
                        }
                    }, a.createElement(v._35, {
                        color: v.I.Alt,
                        type: v._40.H6,
                        bold: !0
                    }, Object(r.d)("Title", "CollectionEditorInfoCard"))), a.createElement(v.Y, {
                        type: v.Z.Text,
                        value: this.props.collection.title,
                        readOnly: !0
                    }), a.createElement(v._2, {
                        margin: {
                            top: 1,
                            bottom: 3
                        }
                    }, a.createElement(v._35, {
                        type: v._40.Span,
                        color: v.I.Alt2
                    }, Object(r.d)("Last updated {updatedAt}", {
                        updatedAt: Object(r.c)(new Date(this.props.collection.updatedAt), "long")
                    }, "CollectionEditorInfoCard"))), this.managerMenu()))
                }, t.prototype.managerMenu = function() {
                    return a.createElement(v._2, {
                        display: v.N.Flex,
                        flexDirection: v.P.Row
                    }, a.createElement(v.u, {
                        icon: v._16.Play,
                        type: v.z.Text
                    }, Object(r.d)("Play All", "CollectionEditorInfoCard")), a.createElement(v.u, {
                        icon: v._16.Plus,
                        type: v.z.Text
                    }, Object(r.d)("Add", "CollectionEditorInfoCard")), a.createElement(h.a, {
                        balloonDirection: v.q.BottomCenter,
                        buttonType: v.z.Text,
                        content: {
                            collectionID: this.props.collection.id
                        },
                        tracking: {
                            location: u.PageviewLocation.VideoManagerCollectionEditor
                        }
                    }), a.createElement(v.u, {
                        icon: v._16.Trash,
                        type: v.z.Text
                    }, Object(r.d)("Delete", "CollectionEditorInfoCard")))
                }, t
            }(a.Component),
            f = n("F8kA"),
            E = n("mi6k"),
            C = n("5RjZ"),
            _ = n("KRtN"),
            y = n("4o7v"),
            b = n("PwTO"),
            N = n("N8CH"),
            I = n("Z8qZ"),
            x = (n("dAJe"), {
                ItemLength: "ItemLength",
                VideoLink: "VideoLink"
            }),
            w = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.subHeader = function(e) {
                        return a.createElement(v._25, {
                            display: v.N.Flex,
                            flexDirection: v.P.Row,
                            margin: {
                                top: .5
                            },
                            color: v.I.Alt2
                        }, a.createElement(v._2, {
                            padding: {
                                right: 1
                            }
                        }, a.createElement(v._43, {
                            direction: v._45.Bottom,
                            align: v._44.Center,
                            label: Object(r.d)("Published At", "CollectionItemCard")
                        }, a.createElement(v._35, null, Object(r.c)(new Date(e.publishedAt), "long")))), a.createElement(v._2, {
                            padding: {
                                right: 1
                            },
                            display: v.N.Flex,
                            alignItems: v.c.Center
                        }, a.createElement(v._24, {
                            "data-test-selector": x.ItemLength,
                            label: Object(r.d)("Length", "CollectionItemCard"),
                            value: Object(E.a)(e.lengthSeconds),
                            icon: v._16.GlyphLength
                        })), a.createElement(v._2, {
                            padding: {
                                right: 1
                            },
                            display: v.N.Flex,
                            alignItems: v.c.Center
                        }, a.createElement(v._24, {
                            label: Object(r.d)("Video Type", "CollectionItemCard"),
                            value: Object(C.a)(e.broadcastType),
                            icon: v._16.NavVideos
                        })))
                    }, t.reportImageInteractive = function() {
                        t.props.latencyTracking.reportInteractive()
                    }, t
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.collectionItem;
                    return a.createElement(v._2, {
                        className: "collection-item-card",
                        margin: {
                            y: 1
                        }
                    }, a.createElement(I.a, null, a.createElement(v._25, {
                        background: v.m.Alt,
                        display: v.N.Flex,
                        className: "collection-item__drag-handle"
                    }, a.createElement(v._15, {
                        asset: v._16.Roman2
                    })), a.createElement(v._2, {
                        alignSelf: v.d.Center,
                        padding: {
                            x: 1
                        }
                    }, this.props.position), a.createElement(v._2, {
                        flexGrow: 0,
                        flexShrink: 0
                    }, a.createElement(v.C, {
                        aspect: v.k.Aspect16x9,
                        size: v.D.Size16,
                        onLoad: this.reportImageInteractive,
                        onError: this.reportImageInteractive,
                        src: e.previewThumbnailURL ? e.previewThumbnailURL : "https://static-cdn.jtvnw.net/ttv-playlists-thumbnails-prod/missing-video-thumb-320x180.png",
                        alt: e.title
                    })), a.createElement(N.a, null, a.createElement(v._35, {
                        type: v._40.H5,
                        color: v.I.Alt
                    }, a.createElement(f.a, {
                        "data-test-selector": x.VideoLink,
                        to: {
                            pathname: "/videos/" + this.props.collectionItem.id,
                            state: {
                                content: u.PageviewContent.CollectionItemCard,
                                medium: u.PageviewMedium.VideoManagerCollectionEditor
                            }
                        }
                    }, e.title)), this.subHeader(e)), a.createElement(b.a, null, a.createElement(y.a, {
                        value: e.viewCount.toString(),
                        icon: v._16.GlyphViews,
                        label: Object(r.d)("Total videos", "CollectionItemCard")
                    })), a.createElement(_.a, {
                        options: this.collectionMenuOptions(e)
                    })))
                }, t.prototype.collectionMenuOptions = function(e) {
                    return [{
                        asset: v._16.Edit,
                        title: Object(r.d)("Set as collection thumbnail", "CollectionItemCard")
                    }, {
                        asset: v._16.Trash,
                        title: Object(r.d)("Remove from collection", "CollectionItemCard")
                    }]
                }, t
            }(a.Component),
            O = Object(o.compose)(Object(m.d)("CollectionItemCard"))(w),
            S = n("Dz2i");
        n("/brc");
        ! function(e) {
            e[e.BackButton = 0] = "BackButton"
        }(i || (i = {}));
        var T = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return l.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
                    e.data.loading && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e, t = !1;
                    return this.props.data.loading ? e = this.collectionCardPlaceholders() : this.props.data.error || !this.props.data.collection ? e = this.contentUnavaibleError() : this.props.data.collection ? (e = this.renderCollectionItems(this.props.data.collection.items.edges), t = this.props.data.collection.items.pageInfo.hasNextPage || !1) : e = this.noCollectionItemsCTA(), a.createElement(c.b, null, a.createElement(v._2, {
                        padding: 3,
                        display: v.N.Flex,
                        flexDirection: v.P.Row,
                        className: "collection-editor-page"
                    }, a.createElement(v._2, {
                        flexGrow: 1
                    }, a.createElement(v._2, {
                        margin: {
                            bottom: 1
                        },
                        flexGrow: 1,
                        flexDirection: v.P.Row,
                        display: v.N.Flex
                    }, a.createElement(v._2, {
                        flexGrow: 1
                    }, a.createElement(v._35, {
                        type: v._40.H3
                    }, Object(r.d)("Edit Collection", "CollectionEditorPagePresentation"))), a.createElement(v._2, {
                        flexGrow: 0
                    }, a.createElement(v.u, {
                        type: v.z.Text
                    }, Object(r.d)("Cancel", "CollectionEditorPagePresentation")))), a.createElement(v._2, {
                        padding: {
                            y: .5
                        }
                    }, a.createElement(v.L, {
                        "data-test-selector": i.BackButton,
                        hoverUnderlineNone: !0,
                        to: {
                            pathname: "/" + this.props.match.params.creatorLogin + "/manager/collections",
                            state: {
                                content: "all_collections",
                                medium: u.PageviewMedium.VideoManagerCollectionEditor
                            }
                        }
                    }, a.createElement(v._2, {
                        display: v.N.Flex,
                        flexDirection: v.P.Row,
                        alignItems: v.c.Center
                    }, a.createElement(v._15, {
                        asset: v._16.ChatSettingsBack,
                        height: 20,
                        width: 20
                    }), a.createElement(v._35, {
                        align: v._50.Middle,
                        bold: !0
                    }, Object(r.d)("All collections", "CollectionEditorPagePresentation"))))), this.props.data.collection && a.createElement(k, {
                        collection: this.props.data.collection
                    }), e, a.createElement(c.a, {
                        enabled: t,
                        loadMore: this.props.loadMore
                    })), a.createElement(v._2, {
                        flexGrow: 0,
                        className: "right-sidebar"
                    }, a.createElement(v.u, null, Object(r.d)("Save changes", "CollectionEditorPagePresentation")))))
                }, t.prototype.renderCollectionItems = function(e) {
                    return e.map(function(e, t) {
                        return a.createElement(O, {
                            key: t,
                            collectionItem: e.node,
                            position: t + 1
                        })
                    })
                }, t.prototype.collectionCardPlaceholders = function() {
                    return [a.createElement(p.a, {
                        key: 1
                    }), a.createElement(p.a, {
                        key: 2
                    }), a.createElement(p.a, {
                        key: 3
                    })]
                }, t.prototype.noCollectionItemsCTA = function() {
                    return a.createElement("div", null)
                }, t.prototype.contentUnavaibleError = function() {
                    return a.createElement("div", null)
                }, t
            }(a.Component),
            D = function(e, t) {
                var n = t.fetchMoreResult;
                if (!n || !n.collection || !n.collection.items) return e;
                var i = e.collection && e.collection.items.edges || [];
                return n.collection.items.edges = i.concat(n.collection.items.edges), n
            },
            F = Object(o.compose)(Object(o.graphql)(S, {
                options: function(e) {
                    return {
                        variables: {
                            collectionID: e.match.params.collectionID
                        }
                    }
                },
                props: function(e) {
                    return l.__assign({}, e, {
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
                                query: S,
                                updateQuery: D
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
            }))(T),
            P = n("L2R7"),
            j = function(e) {
                return window.location.replace("https://www.twitch.tv/" + encodeURIComponent(e.match.params.creatorLogin) + "/manager/collections/edit/" + e.match.params.collectionID), null
            },
            A = function(e) {
                return Object(P.a)() ? a.createElement(F, l.__assign({}, e)) : a.createElement(j, l.__assign({}, e))
            };
        n.d(t, "CollectionEditorPage", function() {
            return A
        })
    },
    KRtN: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            l = n("U7vG"),
            a = n("rCmJ"),
            o = n("Odds"),
            r = function(e) {
                var t = e.asset ? l.createElement(o._15, {
                    asset: e.asset
                }) : null;
                return l.createElement(o._0, {
                    linkTo: e.linkTo,
                    onClick: e.onClick
                }, l.createElement(o._2, {
                    alignItems: o.c.Center,
                    display: o.N.Flex,
                    flexGrow: 1,
                    padding: 1
                }, t, l.createElement(o.W, {
                    margin: {
                        left: 1
                    }
                }, l.createElement(o._35, null, e.title))))
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
                return this.state.showDropMenu && (e = this.dropMenu()), l.createElement(o._2, {
                    flexGrow: 0,
                    flexShrink: 0,
                    display: o.N.Flex,
                    position: o._9.Relative
                }, l.createElement(o.W, {
                    fullHeight: !0
                }, l.createElement(a.a, {
                    onClickOut: this.clickOutHandler
                }, l.createElement(o._2, {
                    fullHeight: !0,
                    display: o.N.Flex,
                    alignItems: o.c.Stretch
                }, l.createElement(o.u, {
                    disabled: 0 === this.props.options.length,
                    icon: o._16.More,
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
                return i.createElement(l._2, {
                    alignItems: l.c.Start,
                    display: l.N.Flex,
                    flexDirection: l.P.Column,
                    flexGrow: 1,
                    flexShrink: 1,
                    justifyContent: l._1.Center,
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
                return i.createElement(l._2, {
                    className: "manager-card__stats-container",
                    display: l.N.Flex,
                    flexGrow: 0,
                    flexShrink: 0,
                    flexWrap: l.Q.NoWrap,
                    flexDirection: l.P.Row,
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
                    return l.createElement(a._25, {
                        background: a.m.Base,
                        elevation: 1,
                        display: a.N.Flex,
                        flexDirection: a.P.Row,
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
//# sourceMappingURL=pages.video-tools.pages.collection-editor-42d2c810c4a3af8a0702ae9eb1118e09.js.map