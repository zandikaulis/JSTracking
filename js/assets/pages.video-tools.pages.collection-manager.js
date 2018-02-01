webpackJsonp([76], {
    "Dk8+": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n("TToO"),
            l = n("U7vG"),
            a = n("3zLD"),
            r = n("6sO2"),
            o = n("j7/Y"),
            c = n("w9tK"),
            s = n("vH/s"),
            d = n("CSlQ"),
            u = n("Odds"),
            m = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return l.createElement(u._19, {
                        background: u.m.Base,
                        elevation: 1,
                        display: u.H.Flex,
                        flexDirection: u.J.Row,
                        alignItems: u.c.Stretch
                    }, this.props.children)
                }, t
            }(l.Component),
            p = (n("QmYP"), function(e) {
                return l.createElement(u.V, {
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
                return l.createElement(u.V, {
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
            h = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return l.createElement(m, null, l.createElement(u.V, null, l.createElement(u._3, {
                        height: 75,
                        width: 133
                    })), l.createElement(g, null, l.createElement(u._23, null, l.createElement(u._3, {
                        width: 600,
                        lineCount: 1
                    }), l.createElement(u._3, {
                        width: 200,
                        lineCount: 1
                    }))), l.createElement(p, null, l.createElement(u._23, null, l.createElement(u._3, {
                        width: 40,
                        lineCount: 1
                    }))), l.createElement(u.V, {
                        flexGrow: 0,
                        flexShrink: 0
                    }, l.createElement(u.V, {
                        fullHeight: !0,
                        display: u.H.Flex,
                        alignItems: u.c.Center,
                        justifyContent: u.U.Center,
                        padding: 1
                    }, l.createElement(u._23, null, l.createElement(u._3, {
                        width: 20,
                        lineCount: 1
                    })))))
                }, t
            }(l.PureComponent),
            k = n("mi6k"),
            v = n("rCmJ"),
            f = function(e) {
                var t = e.asset ? l.createElement(u.V, {
                    padding: {
                        right: .5
                    }
                }, l.createElement(u._10, {
                    asset: e.asset
                })) : null;
                return l.createElement(u.T, {
                    linkTo: e.linkTo,
                    onClick: e.onClick
                }, l.createElement(u.V, {
                    padding: 1,
                    display: u.H.Flex,
                    alignItems: u.c.Center
                }, t, l.createElement(u._23, null, e.title)))
            },
            C = function(e) {
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
                    return this.state.showDropMenu && (e = this.dropMenu()), l.createElement(u.V, {
                        flexGrow: 0,
                        flexShrink: 0,
                        display: u.H.Flex,
                        position: u._4.Relative
                    }, l.createElement(u.Q, {
                        fullHeight: !0
                    }, l.createElement(v.a, {
                        onClickOut: this.clickOutHandler
                    }, l.createElement(u.V, {
                        fullHeight: !0,
                        display: u.H.Flex,
                        alignItems: u.c.Stretch
                    }, l.createElement(u.u, {
                        disabled: 0 === this.props.options.length,
                        icon: u._11.More,
                        onClick: this.menuButtonClickHandler,
                        type: u.z.Text
                    })), e)))
                }, t.prototype.dropMenu = function() {
                    var e = this.props.options.map(function(e, t) {
                        return l.createElement(f, i.__assign({
                            key: t
                        }, e))
                    });
                    return l.createElement(u.p, {
                        direction: u.q.BottomRight,
                        noTail: !0,
                        show: !0
                    }, e)
                }, t
            }(l.Component),
            E = n("5kgt"),
            y = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = l.createElement(u.V, {
                            alignItems: u.c.Center,
                            display: u.H.Flex,
                            fullHeight: !0,
                            justifyContent: u.U.Center,
                            padding: 2
                        }, l.createElement(u._18, {
                            icon: this.props.icon,
                            label: this.props.label,
                            value: this.props.value
                        })),
                        t = this.props.linkTo ? l.createElement(u.T, {
                            alpha: !0,
                            linkTo: this.props.linkTo,
                            targetBlank: !0
                        }, e) : e;
                    return l.createElement(u.V, i.__assign({
                        display: u.H.InlineFlex,
                        fullHeight: !0
                    }, Object(E.a)(this.props)), t)
                }, t
            }(l.Component),
            _ = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onPreviewImageErrorHandler = function() {
                        t.props.latencyTracking.reportInteractive()
                    }, t.onPreviewImageLoadHandler = function() {
                        t.props.latencyTracking.reportInteractive()
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.collection;
                    return l.createElement(m, null, l.createElement(u.V, {
                        flexGrow: 0,
                        flexShrink: 0
                    }, l.createElement(u.C, {
                        aspect: u.k.Aspect16x9,
                        imageSrc: e.thumbnailURL ? e.thumbnailURL : "https://static-cdn.jtvnw.net/ttv-playlists-thumbnails-prod/missing-video-thumb-320x180.png",
                        imageAlt: e.title,
                        onImageLoad: this.onPreviewImageLoadHandler,
                        onImageError: this.onPreviewImageErrorHandler,
                        size: u.D.Size16
                    })), l.createElement(g, null, l.createElement(u._23, {
                        type: u._28.H5,
                        color: u.F.Alt
                    }, e.title)), l.createElement(p, null, this.collectionStats(e)), l.createElement(C, {
                        options: this.collectionMenuOptions(e)
                    }))
                }, t.prototype.collectionMenuOptions = function(e) {
                    return [{
                        asset: u._11.Edit,
                        linkTo: "collections/" + e.id,
                        title: Object(r.d)("Edit", "CollectionManagerCard")
                    }, {
                        asset: u._11.Trash,
                        title: Object(r.d)("Delete", "CollectionManagerCard")
                    }]
                }, t.prototype.collectionStats = function(e) {
                    var t = e.updatedAt ? new Date(e.updatedAt) : new Date;
                    return [{
                        value: Object(r.c)(t, "long"),
                        icon: u._11.Events,
                        label: Object(r.d)("Last updated", "CollectionManagerCard")
                    }, {
                        value: Object(k.a)(e.lengthSeconds),
                        icon: u._11.GlyphLength,
                        label: Object(r.d)("Collection length", "CollectionManagerCard")
                    }, {
                        value: "" + e.items.totalCount,
                        icon: u._11.Collections,
                        label: Object(r.d)("Total videos", "CollectionManagerCard")
                    }, {
                        value: "" + e.viewCount,
                        icon: u._11.GlyphViews,
                        label: Object(r.d)("Views", "CollectionManagerCard")
                    }].map(function(e, t) {
                        return l.createElement(y, i.__assign({
                            key: t
                        }, e))
                    })
                }, t
            }(l.Component),
            b = Object(d.d)("CollectionManagerCard")(_),
            S = n("I9kX"),
            w = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
                    e.data.loading && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e;
                    return e = this.props.data.loading ? this.collectionCardPlaceholders() : !this.props.data.error && this.props.data.user && this.props.data.user.collections ? this.props.data.user.collections.edges.length > 0 ? this.renderCollections(this.props.data.user.collections.edges) : this.noCollectionsCTA() : this.contentUnavaibleError(), l.createElement(u.V, {
                        fullHeight: !0,
                        padding: {
                            top: 2,
                            x: 2
                        }
                    }, l.createElement(u._23, {
                        type: u._28.H2
                    }, Object(r.d)("Collections", "CollectionManager")), l.createElement(u.V, {
                        fullWidth: !0,
                        padding: {
                            top: 2
                        }
                    }, e))
                }, t.prototype.renderCollections = function(e) {
                    return e.map(function(e, t) {
                        return l.createElement(u.V, {
                            key: t,
                            margin: {
                                bottom: 1
                            }
                        }, l.createElement(b, {
                            collection: e.node
                        }))
                    })
                }, t.prototype.collectionCardPlaceholders = function() {
                    for (var e = [], t = 0; t < 3; t++) e.push(l.createElement(u.V, {
                        key: t,
                        margin: {
                            bottom: 1
                        }
                    }, l.createElement(h, null)));
                    return e
                }, t.prototype.noCollectionsCTA = function() {
                    return l.createElement("div", null)
                }, t.prototype.contentUnavaibleError = function() {
                    return l.createElement("div", null)
                }, t
            }(l.Component),
            x = Object(a.compose)(Object(a.graphql)(S, {
                options: function(e) {
                    return {
                        variables: {
                            creatorLogin: e.match.params.creatorLogin
                        }
                    }
                }
            }), Object(d.d)("CollectionManager", {
                destination: c.a.VideoManagerCollectionsManager
            }), Object(o.a)({
                location: s.PageviewLocation.VideoManagerCollectionManager,
                properties: function(e) {
                    return {
                        channel: e.match.params.creatorLogin,
                        channel_id: e.data.user ? e.data.user.id : null
                    }
                },
                skip: function(e) {
                    return e.data.loading
                }
            }))(w);
        n.d(t, "CollectionManagerPage", function() {
            return x
        })
    },
    I9kX: function(e, t) {
        var n = {
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
        n.loc.source = {
            body: "query CollectionManager_Owner($creatorLogin: String!) {\nuser(login: $creatorLogin) {\nid\ncollections {\nedges {\ncursor\nnode {\nid\nitems {\ntotalCount\n}\nlengthSeconds\ntitle\nthumbnailURL(width: 160 height: 90)\nupdatedAt\nviewCount\n}\n}\npageInfo {\nhasNextPage\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    QmYP: function(e, t) {}
});
//# sourceMappingURL=pages.video-tools.pages.collection-manager-f8e58d132f033e30961fbcbe9f9d562c.js.map