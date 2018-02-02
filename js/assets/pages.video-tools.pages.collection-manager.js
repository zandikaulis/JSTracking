webpackJsonp([67], {
    "Dk8+": function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = t("TToO"),
            a = t("U7vG"),
            l = t("3zLD"),
            o = t("6sO2"),
            r = t("j7/Y"),
            c = t("w9tK"),
            d = t("vH/s"),
            s = t("CSlQ"),
            u = t("Odds"),
            m = function(e) {
                function n() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(n, e), n.prototype.render = function() {
                    return a.createElement(u._19, {
                        background: u.m.Base,
                        elevation: 1,
                        display: u.H.Flex,
                        flexDirection: u.J.Row,
                        alignItems: u.c.Stretch
                    }, this.props.children)
                }, n
            }(a.Component),
            p = (t("QmYP"), function(e) {
                return a.createElement(u.V, {
                    className: "manager-card__stats-container",
                    display: u.H.Flex,
                    flexGrow: 0,
                    flexShrink: 0,
                    flexWrap: u.K.NoWrap,
                    flexDirection: u.J.Row,
                    alignItems: u.c.Center
                }, e.children)
            }),
            g = function(e) {
                return a.createElement(u.V, {
                    alignItems: u.c.Start,
                    display: u.H.Flex,
                    flexDirection: u.J.Column,
                    flexGrow: 1,
                    flexShrink: 1,
                    justifyContent: u.U.Center,
                    padding: {
                        x: 2
                    }
                }, e.children)
            },
            v = function(e) {
                function n() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(n, e), n.prototype.render = function() {
                    return a.createElement(m, null, a.createElement(u.V, null, a.createElement(u._3, {
                        height: 75,
                        width: 133
                    })), a.createElement(g, null, a.createElement(u._23, null, a.createElement(u._3, {
                        width: 600,
                        lineCount: 1
                    }), a.createElement(u._3, {
                        width: 200,
                        lineCount: 1
                    }))), a.createElement(p, null, a.createElement(u._23, null, a.createElement(u._3, {
                        width: 40,
                        lineCount: 1
                    }))), a.createElement(u.V, {
                        flexGrow: 0,
                        flexShrink: 0
                    }, a.createElement(u.V, {
                        fullHeight: !0,
                        display: u.H.Flex,
                        alignItems: u.c.Center,
                        justifyContent: u.U.Center,
                        padding: 1
                    }, a.createElement(u._23, null, a.createElement(u._3, {
                        width: 20,
                        lineCount: 1
                    })))))
                }, n
            }(a.PureComponent),
            k = t("mi6k"),
            h = t("rCmJ"),
            f = function(e) {
                var n = e.asset ? a.createElement(u._10, {
                    asset: e.asset
                }) : null;
                return a.createElement(u.T, {
                    linkTo: e.linkTo,
                    onClick: e.onClick
                }, a.createElement(u.V, {
                    alignItems: u.c.Center,
                    display: u.H.Flex,
                    flexGrow: 1,
                    padding: 1
                }, n, a.createElement(u.Q, {
                    margin: {
                        left: 1
                    }
                }, a.createElement(u._23, null, e.title))))
            },
            C = function(e) {
                function n() {
                    var n = null !== e && e.apply(this, arguments) || this;
                    return n.state = {
                        showDropMenu: !1
                    }, n.menuButtonClickHandler = function() {
                        n.setState(function(e) {
                            return {
                                showDropMenu: !e.showDropMenu
                            }
                        })
                    }, n.clickOutHandler = function() {
                        n.setState(function() {
                            return {
                                showDropMenu: !1
                            }
                        })
                    }, n
                }
                return i.__extends(n, e), n.prototype.render = function() {
                    var e = null;
                    return this.state.showDropMenu && (e = this.dropMenu()), a.createElement(u.V, {
                        flexGrow: 0,
                        flexShrink: 0,
                        display: u.H.Flex,
                        position: u._4.Relative
                    }, a.createElement(u.Q, {
                        fullHeight: !0
                    }, a.createElement(h.a, {
                        onClickOut: this.clickOutHandler
                    }, a.createElement(u.V, {
                        fullHeight: !0,
                        display: u.H.Flex,
                        alignItems: u.c.Stretch
                    }, a.createElement(u.u, {
                        disabled: 0 === this.props.options.length,
                        icon: u._11.More,
                        onClick: this.menuButtonClickHandler,
                        type: u.z.Text
                    })), e)))
                }, n.prototype.dropMenu = function() {
                    var e = this.props.options.map(function(e, n) {
                        return a.createElement(f, i.__assign({
                            key: n
                        }, e))
                    });
                    return a.createElement(u.p, {
                        direction: u.q.BottomRight,
                        noTail: !0,
                        show: !0
                    }, e)
                }, n
            }(a.Component),
            E = t("5kgt"),
            y = function(e) {
                function n() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(n, e), n.prototype.render = function() {
                    var e = a.createElement(u.V, {
                            alignItems: u.c.Center,
                            display: u.H.Flex,
                            fullHeight: !0,
                            justifyContent: u.U.Center,
                            padding: 2
                        }, a.createElement(u._18, {
                            icon: this.props.icon,
                            label: this.props.label,
                            value: this.props.value
                        })),
                        n = this.props.linkTo ? a.createElement(u.T, {
                            alpha: !0,
                            linkTo: this.props.linkTo,
                            targetBlank: !0
                        }, e) : e;
                    return a.createElement(u.V, i.__assign({
                        display: u.H.InlineFlex,
                        fullHeight: !0
                    }, Object(E.a)(this.props)), n)
                }, n
            }(a.Component),
            S = function(e) {
                function n() {
                    var n = null !== e && e.apply(this, arguments) || this;
                    return n.onPreviewImageErrorHandler = function() {
                        n.props.latencyTracking.reportInteractive()
                    }, n.onPreviewImageLoadHandler = function() {
                        n.props.latencyTracking.reportInteractive()
                    }, n
                }
                return i.__extends(n, e), n.prototype.render = function() {
                    var e = this.props.collection;
                    return a.createElement(m, null, a.createElement(u.V, {
                        flexGrow: 0,
                        flexShrink: 0
                    }, a.createElement(u.C, {
                        aspect: u.k.Aspect16x9,
                        imageSrc: e.thumbnailURL ? e.thumbnailURL : "https://static-cdn.jtvnw.net/ttv-playlists-thumbnails-prod/missing-video-thumb-320x180.png",
                        imageAlt: e.title,
                        onImageLoad: this.onPreviewImageLoadHandler,
                        onImageError: this.onPreviewImageErrorHandler,
                        size: u.D.Size16
                    })), a.createElement(g, null, a.createElement(u._23, {
                        type: u._28.H5,
                        color: u.F.Alt
                    }, e.title)), a.createElement(p, null, this.collectionStats(e)), a.createElement(C, {
                        options: this.collectionMenuOptions(e)
                    }))
                }, n.prototype.collectionMenuOptions = function(e) {
                    return [{
                        asset: u._11.Edit,
                        linkTo: "/manager/collections/" + e.id,
                        title: Object(o.d)("Edit", "CollectionManagerCard")
                    }, {
                        asset: u._11.Trash,
                        title: Object(o.d)("Delete", "CollectionManagerCard")
                    }]
                }, n.prototype.collectionStats = function(e) {
                    var n = e.updatedAt ? new Date(e.updatedAt) : new Date;
                    return [{
                        value: Object(o.c)(n, "long"),
                        icon: u._11.Events,
                        label: Object(o.d)("Last updated", "CollectionManagerCard")
                    }, {
                        value: Object(k.a)(e.lengthSeconds),
                        icon: u._11.GlyphLength,
                        label: Object(o.d)("Collection length", "CollectionManagerCard")
                    }, {
                        value: "" + e.items.totalCount,
                        icon: u._11.Collections,
                        label: Object(o.d)("Total videos", "CollectionManagerCard")
                    }, {
                        value: "" + e.viewCount,
                        icon: u._11.GlyphViews,
                        label: Object(o.d)("Views", "CollectionManagerCard")
                    }].map(function(e, n) {
                        return a.createElement(y, i.__assign({
                            key: n
                        }, e))
                    })
                }, n
            }(a.Component),
            b = Object(s.d)("CollectionManagerCard")(S),
            _ = t("I9kX"),
            N = function(e) {
                function n() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(n, e), n.prototype.componentDidUpdate = function(e) {
                    e.data.loading && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                }, n.prototype.render = function() {
                    var e;
                    return e = this.props.data.loading ? this.collectionCardPlaceholders() : !this.props.data.error && this.props.data.user && this.props.data.user.collections ? this.props.data.user.collections.edges.length > 0 ? this.renderCollections(this.props.data.user.collections.edges) : this.noCollectionsCTA() : this.contentUnavaibleError(), a.createElement(u.V, {
                        fullHeight: !0,
                        padding: {
                            top: 2,
                            x: 2
                        }
                    }, a.createElement(u._23, {
                        type: u._28.H2
                    }, Object(o.d)("Collections", "CollectionManager")), a.createElement(u.V, {
                        fullWidth: !0,
                        padding: {
                            top: 2
                        }
                    }, e))
                }, n.prototype.renderCollections = function(e) {
                    return e.map(function(e, n) {
                        return a.createElement(u.V, {
                            key: n,
                            margin: {
                                bottom: 1
                            }
                        }, a.createElement(b, {
                            collection: e.node
                        }))
                    })
                }, n.prototype.collectionCardPlaceholders = function() {
                    for (var e = [], n = 0; n < 3; n++) e.push(a.createElement(u.V, {
                        key: n,
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(v, null)));
                    return e
                }, n.prototype.noCollectionsCTA = function() {
                    return a.createElement("div", null)
                }, n.prototype.contentUnavaibleError = function() {
                    return a.createElement("div", null)
                }, n
            }(a.Component),
            w = Object(l.compose)(Object(l.graphql)(_, {
                options: function(e) {
                    return {
                        variables: {
                            creatorLogin: e.match.params.creatorLogin
                        }
                    }
                }
            }), Object(s.d)("CollectionManager", {
                destination: c.a.VideoManagerCollectionsManager
            }), Object(r.a)({
                location: d.PageviewLocation.VideoManagerCollectionManager,
                properties: function(e) {
                    return {
                        channel: e.match.params.creatorLogin,
                        channel_id: e.data.user ? e.data.user.id : null
                    }
                },
                skip: function(e) {
                    return e.data.loading
                }
            }))(N),
            I = t("PQ4i"),
            F = function(e) {
                function n() {
                    var n = null !== e && e.apply(this, arguments) || this;
                    return n.reportImageInteractive = function() {
                        n.props.latencyTracking.reportInteractive()
                    }, n
                }
                return i.__extends(n, e), n.prototype.render = function() {
                    var e = this.props.collectionItem;
                    return a.createElement(u._19, {
                        display: u.H.Flex,
                        border: !0
                    }, a.createElement(u.j, null, a.createElement("img", {
                        src: e.previewThumbnailURL,
                        alt: e.title,
                        onLoad: this.reportImageInteractive
                    })), a.createElement("div", null, a.createElement(u._23, null, e.title), a.createElement(u._23, {
                        "data-test-selector": "view-count"
                    }, Object(o.d)("Total Views {views}", {
                        views: e.viewCount || 0
                    }, "CollectionItemCard"))))
                }, n
            }(a.Component),
            x = Object(l.compose)(Object(s.d)("CollectionItemCard"))(F),
            O = t("kwr5"),
            V = function(e) {
                function n() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(n, e), n.prototype.componentDidUpdate = function(e) {
                    e.data.loading && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                }, n.prototype.render = function() {
                    var e;
                    return e = this.props.data.loading ? this.collectionCardPlaceholders() : this.props.data.error || !this.props.data.collection ? this.contentUnavaibleError() : this.props.data.collection ? this.renderCollectionItems(this.props.data.collection.items.edges) : this.noCollectionItemsCTA(), a.createElement(u.V, {
                        padding: {
                            right: 4
                        }
                    }, a.createElement(u._23, {
                        type: u._28.H1
                    }, Object(o.d)("Collections", "CollectionEditorPagePresentation")), this.props.data.collection && a.createElement(b, {
                        collection: this.props.data.collection
                    }), a.createElement(u.V, null, e))
                }, n.prototype.renderCollectionItems = function(e) {
                    return e.map(function(e, n) {
                        return a.createElement(x, {
                            key: n,
                            collectionItem: e.node
                        })
                    })
                }, n.prototype.collectionCardPlaceholders = function() {
                    return [a.createElement(I.a, {
                        key: 1
                    }), a.createElement(I.a, {
                        key: 2
                    }), a.createElement(I.a, {
                        key: 3
                    })]
                }, n.prototype.noCollectionItemsCTA = function() {
                    return a.createElement("div", null)
                }, n.prototype.contentUnavaibleError = function() {
                    return a.createElement("div", null)
                }, n
            }(a.Component),
            D = Object(l.compose)(Object(l.graphql)(O, {
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
            }))(V);
        t.d(n, "CollectionManagerPage", function() {
            return w
        }), t.d(n, "CollectionEditorPage", function() {
            return D
        })
    },
    I9kX: function(e, n) {
        var t = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "CollectionManager_Owner"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "creatorLogin"
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
                                    value: "creatorLogin"
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
                                                            }]
                                                        }
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
                                                            value: "updatedAt"
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
                end: 258
            }
        };
        t.loc.source = {
            body: "query CollectionManager_Owner($creatorLogin: String!) {\nuser(login: $creatorLogin) {\nid\ncollections {\nedges {\ncursor\nnode {\nid\nitems {\ntotalCount\n}\nlengthSeconds\ntitle\nthumbnailURL(width: 160 height: 90)\nupdatedAt\nviewCount\n}\n}\npageInfo {\nhasNextPage\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = t
    },
    QmYP: function(e, n) {},
    kwr5: function(e, n) {
        var t = {
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
                end: 265
            }
        };
        t.loc.source = {
            body: "query CollectionManager_EditCollection($collectionID: ID!) {\ncollection(id: $collectionID) {\nid\nlengthSeconds\nowner {\nlogin\n}\ntitle\nviewCount\nupdatedAt\nitems {\ntotalCount\nedges {\nnode {\n... on Video {\nid\ntitle\nlengthSeconds\npreviewThumbnailURL\nviewCount\n}\n}\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = t
    }
});
//# sourceMappingURL=pages.video-tools.pages.collection-manager-c353f72dcc65406de348e32244431b27.js.map