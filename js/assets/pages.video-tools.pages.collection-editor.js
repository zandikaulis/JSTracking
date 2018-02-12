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
                                arguments: [],
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
                end: 368
            }
        };
        n.loc.source = {
            body: "query CollectionManager_EditCollection($collectionID: ID!) {\ncollection(id: $collectionID) {\nid\nlengthSeconds\nowner {\nlogin\n}\ntitle\nviewCount\nupdatedAt\nthumbnailURL(width: 320 height: 180)\nitems {\ntotalCount\nedges {\nnode {\n... on Video {\nid\nbroadcastType\ntitle\nlengthSeconds\npreviewThumbnailURL(width: 240 height: 135)\npublishedAt\nviewCount\nowner {\nlogin\n}\n}\n}\n}\n}\n}\n}",
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
            r = n("j7/Y"),
            c = n("w9tK"),
            d = n("vH/s"),
            s = n("CSlQ"),
            u = n("PQ4i"),
            m = n("1opg"),
            p = n("Odds"),
            h = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return l.createElement(p._24, {
                        background: p.m.Alt,
                        display: p.M.Flex,
                        flexDirection: p.O.Row,
                        alignItems: p.c.Stretch
                    }, l.createElement(p._1, {
                        display: p.M.Flex,
                        flexDirection: p.O.Column
                    }, l.createElement(p._1, {
                        margin: {
                            y: 1
                        }
                    }, l.createElement(p._34, {
                        color: p.I.Alt,
                        type: p._39.H6,
                        bold: !0
                    }, Object(o.d)("Collection Thumbnail", "CollectionEditorInfoCard"))), l.createElement(p.K, {
                        src: this.props.collection.thumbnailURL || m.a,
                        alt: this.props.collection.title
                    })), l.createElement(p._1, {
                        display: p.M.Flex,
                        flexDirection: p.O.Column,
                        margin: {
                            left: 3
                        },
                        flexGrow: 2,
                        flexShrink: 0
                    }, l.createElement(p._1, {
                        margin: {
                            y: 1
                        }
                    }, l.createElement(p._34, {
                        color: p.I.Alt,
                        type: p._39.H6,
                        bold: !0
                    }, Object(o.d)("Title", "CollectionEditorInfoCard"))), l.createElement(p.X, {
                        type: p.Y.Text,
                        value: this.props.collection.title,
                        readOnly: !0
                    }), l.createElement(p._1, {
                        margin: {
                            top: 1,
                            bottom: 3
                        }
                    }, l.createElement(p._34, {
                        type: p._39.Span,
                        color: p.I.Alt2
                    }, Object(o.d)("Last updated {updatedAt}", {
                        updatedAt: Object(o.c)(new Date(this.props.collection.updatedAt), "long")
                    }, "CollectionEditorInfoCard"))), this.managerMenu()))
                }, t.prototype.managerMenu = function() {
                    return l.createElement(p._1, null, l.createElement(p.u, {
                        icon: p._15.Play,
                        type: p.z.Text
                    }, Object(o.d)("Play All", "CollectionEditorInfoCard")), l.createElement(p.u, {
                        icon: p._15.Plus,
                        type: p.z.Text
                    }, Object(o.d)("Add", "CollectionEditorInfoCard")), l.createElement(p.u, {
                        icon: p._15.Share,
                        type: p.z.Text
                    }, Object(o.d)("Share", "CollectionEditorInfoCard")), l.createElement(p.u, {
                        icon: p._15.Trash,
                        type: p.z.Text
                    }, Object(o.d)("Delete", "CollectionEditorInfoCard")))
                }, t
            }(l.Component),
            g = n("F8kA"),
            v = n("mi6k"),
            k = n("5RjZ"),
            f = n("KRtN"),
            E = n("4o7v"),
            C = n("PwTO"),
            _ = n("N8CH"),
            y = n("Z8qZ"),
            b = (n("dAJe"), {
                ItemLength: "ItemLength",
                VideoLink: "VideoLink"
            }),
            I = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.subHeader = function(e) {
                        return l.createElement(p._24, {
                            display: p.M.Flex,
                            flexDirection: p.O.Row,
                            margin: {
                                top: .5
                            },
                            color: p.I.Alt2
                        }, l.createElement(p._1, {
                            padding: {
                                right: 1
                            }
                        }, l.createElement(p._42, {
                            direction: p._44.Bottom,
                            align: p._43.Center,
                            label: Object(o.d)("Published At", "CollectionItemCard")
                        }, l.createElement(p._34, null, Object(o.c)(new Date(e.publishedAt), "long")))), l.createElement(p._1, {
                            padding: {
                                right: 1
                            },
                            display: p.M.Flex,
                            alignItems: p.c.Center
                        }, l.createElement(p._23, {
                            "data-test-selector": b.ItemLength,
                            label: Object(o.d)("Length", "CollectionItemCard"),
                            value: Object(v.a)(e.lengthSeconds),
                            icon: p._15.GlyphLength
                        })), l.createElement(p._1, {
                            padding: {
                                right: 1
                            },
                            display: p.M.Flex,
                            alignItems: p.c.Center
                        }, l.createElement(p._23, {
                            label: Object(o.d)("Video Type", "CollectionItemCard"),
                            value: Object(k.a)(e.broadcastType),
                            icon: p._15.NavVideos
                        })))
                    }, t.reportImageInteractive = function() {
                        t.props.latencyTracking.reportInteractive()
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.collectionItem;
                    return l.createElement(p._1, {
                        className: "collection-item-card",
                        margin: {
                            y: 1
                        }
                    }, l.createElement(y.a, null, l.createElement(p._24, {
                        background: p.m.Alt,
                        display: p.M.Flex,
                        className: "collection-item__drag-handle"
                    }, l.createElement(p._14, {
                        asset: p._15.Roman2
                    })), l.createElement(p._1, {
                        alignSelf: p.d.Center,
                        padding: {
                            x: 1
                        }
                    }, this.props.position), l.createElement(p._1, {
                        flexGrow: 0,
                        flexShrink: 0
                    }, l.createElement(p.C, {
                        aspect: p.k.Aspect16x9,
                        size: p.D.Size16,
                        onLoad: this.reportImageInteractive,
                        onError: this.reportImageInteractive,
                        src: e.previewThumbnailURL ? e.previewThumbnailURL : m.a,
                        alt: e.title
                    })), l.createElement(_.a, null, l.createElement(p._34, {
                        type: p._39.H5,
                        color: p.I.Alt
                    }, l.createElement(g.a, {
                        "data-test-selector": b.VideoLink,
                        to: {
                            pathname: "/videos/" + this.props.collectionItem.id,
                            state: {
                                content: d.PageviewContent.CollectionItemCard,
                                medium: d.PageviewMedium.VideoManagerCollectionEditor
                            }
                        }
                    }, e.title)), this.subHeader(e)), l.createElement(C.a, null, l.createElement(E.a, {
                        value: e.viewCount.toString(),
                        icon: p._15.GlyphViews,
                        label: Object(o.d)("Total videos", "CollectionItemCard")
                    })), l.createElement(f.a, {
                        options: this.collectionMenuOptions(e)
                    })))
                }, t.prototype.collectionMenuOptions = function(e) {
                    return [{
                        asset: p._15.Edit,
                        title: Object(o.d)("Set as collection thumbnail", "CollectionItemCard")
                    }, {
                        asset: p._15.Trash,
                        title: Object(o.d)("Remove from collection", "CollectionItemCard")
                    }]
                }, t
            }(l.Component),
            x = Object(a.compose)(Object(s.d)("CollectionItemCard"))(I),
            O = n("Dz2i"),
            w = (n("/brc"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
                    e.data.loading && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e;
                    return e = this.props.data.loading ? this.collectionCardPlaceholders() : this.props.data.error || !this.props.data.collection ? this.contentUnavaibleError() : this.props.data.collection ? this.renderCollectionItems(this.props.data.collection.items.edges) : this.noCollectionItemsCTA(), l.createElement(p._1, {
                        padding: 3,
                        display: p.M.Flex,
                        flexDirection: p.O.Row,
                        className: "collection-editor-page"
                    }, l.createElement(p._1, {
                        flexGrow: 1
                    }, l.createElement(p._1, {
                        margin: {
                            bottom: 1
                        },
                        flexGrow: 1,
                        flexDirection: p.O.Row,
                        display: p.M.Flex
                    }, l.createElement(p._1, {
                        flexGrow: 1
                    }, l.createElement(p._34, {
                        type: p._39.H3
                    }, Object(o.d)("Edit Collection", "CollectionEditorPagePresentation"))), l.createElement(p._1, {
                        flexGrow: 0
                    }, l.createElement(p.u, {
                        type: p.z.Text
                    }, Object(o.d)("Cancel", "CollectionEditorPagePresentation")))), this.props.data.collection && l.createElement(h, {
                        collection: this.props.data.collection
                    }), e), l.createElement(p._1, {
                        flexGrow: 0,
                        className: "right-sidebar"
                    }, l.createElement(p.u, null, Object(o.d)("Save changes", "CollectionEditorPagePresentation"))))
                }, t.prototype.renderCollectionItems = function(e) {
                    return e.map(function(e, t) {
                        return l.createElement(x, {
                            key: t,
                            collectionItem: e.node,
                            position: t + 1
                        })
                    })
                }, t.prototype.collectionCardPlaceholders = function() {
                    return [l.createElement(u.a, {
                        key: 1
                    }), l.createElement(u.a, {
                        key: 2
                    }), l.createElement(u.a, {
                        key: 3
                    })]
                }, t.prototype.noCollectionItemsCTA = function() {
                    return l.createElement("div", null)
                }, t.prototype.contentUnavaibleError = function() {
                    return l.createElement("div", null)
                }, t
            }(l.Component)),
            S = Object(a.compose)(Object(a.graphql)(O, {
                options: function(e) {
                    return {
                        variables: {
                            collectionID: e.match.params.collectionID
                        }
                    }
                }
            }), Object(s.d)("CollectionEditorPage", {
                destination: c.a.VideoManagerCollectionsEditor
            }), Object(r.a)({
                location: d.PageviewLocation.VideoManagerCollectionEditor,
                properties: function(e) {
                    return {
                        channel: e.match.params.creatorLogin
                    }
                },
                skip: function(e) {
                    return e.data.loading
                }
            }))(w),
            N = n("L2R7"),
            T = function(e) {
                return window.location.replace("https://www.twitch.tv/" + encodeURIComponent(e.match.params.creatorLogin) + "/manager/collections/edit/" + e.match.params.collectionID), null
            },
            F = function(e) {
                return Object(N.a)() ? l.createElement(S, i.__assign({}, e)) : l.createElement(T, i.__assign({}, e))
            };
        n.d(t, "CollectionEditorPage", function() {
            return F
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
//# sourceMappingURL=pages.video-tools.pages.collection-editor-1f4971734ecb035d9368c7d782e7b66d.js.map