webpackJsonp([69], {
    "1myv": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "CollectionManager_CreateCollection"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "title"
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
                }, {
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
                            value: "createCollection"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "title"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "title"
                                }
                            }
                        }, {
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "ownerID"
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
                end: 158
            }
        };
        n.loc.source = {
            body: "mutation CollectionManager_CreateCollection($title: String! $creatorID: String!) {\ncreateCollection(title: $title ownerID: $creatorID) {\ncollection {\nid\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "Dk8+": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i, l = n("TToO"),
            a = n("U7vG"),
            o = n("3zLD"),
            r = n("6sO2"),
            c = n("zCIC"),
            s = n("j7/Y"),
            d = n("oIkB"),
            u = n("w9tK"),
            m = n("vH/s"),
            p = n("CSlQ"),
            g = n("Odds"),
            k = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(g._21, {
                        background: g.m.Base,
                        elevation: 1,
                        display: g.L.Flex,
                        flexDirection: g.N.Row,
                        alignItems: g.c.Stretch
                    }, this.props.children)
                }, t
            }(a.Component),
            h = (n("QmYP"), function(e) {
                return a.createElement(g.Z, {
                    className: "manager-card__stats-container",
                    display: g.L.Flex,
                    flexGrow: 0,
                    flexShrink: 0,
                    flexWrap: g.O.NoWrap,
                    flexDirection: g.N.Row,
                    alignItems: g.c.Center
                }, e.children)
            }),
            v = function(e) {
                return a.createElement(g.Z, {
                    alignItems: g.c.Start,
                    display: g.L.Flex,
                    flexDirection: g.N.Column,
                    flexGrow: 1,
                    flexShrink: 1,
                    justifyContent: g.Y.Center,
                    padding: {
                        x: 2
                    }
                }, e.children)
            },
            f = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(k, null, a.createElement(g.Z, null, a.createElement(g._5, {
                        height: 75,
                        width: 133
                    })), a.createElement(v, null, a.createElement(g._25, null, a.createElement(g._5, {
                        width: 600,
                        lineCount: 1
                    }), a.createElement(g._5, {
                        width: 200,
                        lineCount: 1
                    }))), a.createElement(h, null, a.createElement(g._25, null, a.createElement(g._5, {
                        width: 40,
                        lineCount: 1
                    }))), a.createElement(g.Z, {
                        flexGrow: 0,
                        flexShrink: 0
                    }, a.createElement(g.Z, {
                        fullHeight: !0,
                        display: g.L.Flex,
                        alignItems: g.c.Center,
                        justifyContent: g.Y.Center,
                        padding: 1
                    }, a.createElement(g._25, null, a.createElement(g._5, {
                        width: 20,
                        lineCount: 1
                    })))))
                }, t
            }(a.PureComponent),
            C = n("CIox"),
            E = n("7vx8"),
            b = n("1myv"),
            y = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        collectionTitle: "",
                        creationErrorMessage: ""
                    }, t.onNameInputChangeHandler = function(e) {
                        t.setState({
                            collectionTitle: e.currentTarget.value,
                            creationErrorMessage: ""
                        })
                    }, t.onCreateButtonClickHandler = function() {
                        t.setState({
                            creationErrorMessage: ""
                        }, function() {
                            return l.__awaiter(t, void 0, void 0, function() {
                                var e, t, n;
                                return l.__generator(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            e = Object(d.a)({
                                                ownerID: this.props.creatorID || "",
                                                title: this.state.collectionTitle
                                            }), i.label = 1;
                                        case 1:
                                            return i.trys.push([1, 3, , 4]), [4, this.props.createCollection(e)];
                                        case 2:
                                            return t = i.sent(), this.props.history.push("/" + this.props.creatorLogin + "/manager/collections/" + t.collection.id), [3, 4];
                                        case 3:
                                            return n = i.sent(), r.i.error(n, "createCollection", {
                                                mutationInput: e
                                            }), this.setState({
                                                creationErrorMessage: Object(r.d)("Creation attempt failed. Please try again.", "CollectionCreator")
                                            }), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        })
                    }, t
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    var e = Object(r.d)("{currentLength} of {maxLength} characters.", {
                            currentLength: this.state.collectionTitle.length.toString(),
                            maxLength: 100..toString()
                        }, "CollectionCreator"),
                        t = null;
                    return 0 === this.state.creationErrorMessage.length && (t = a.createElement(g.Z, {
                        visibility: this.state.collectionTitle.length > 0 ? g._41.Visible : g._41.Hidden,
                        "data-test-selector": "length-hint"
                    }, a.createElement(g._25, null, e))), a.createElement(g.Q, {
                        error: this.state.creationErrorMessage.length > 0,
                        errorMessage: this.state.creationErrorMessage,
                        label: ""
                    }, a.createElement(g.S, null, a.createElement(g.J, {
                        cols: {
                            default: 3,
                            xl: 2
                        }
                    }, a.createElement(g.V, {
                        disabled: null === this.props.creatorID,
                        maxLength: 100,
                        onChange: this.onNameInputChangeHandler,
                        placeholder: Object(r.d)("Collection name", "CollectionCreator"),
                        type: g.W.Text
                    }), t), a.createElement(g.J, {
                        cols: 3
                    }, a.createElement(g.u, {
                        disabled: null === this.props.creatorID || "" === this.state.collectionTitle,
                        onClick: this.onCreateButtonClickHandler
                    }, Object(r.d)("Create Collection", "CollectionCreator")))))
                }, t
            }(a.Component),
            S = Object(o.compose)(Object(E.a)(b, {
                name: "createCollection"
            }))(Object(C.e)(y)),
            N = n("RH2O"),
            _ = n("V5M+"),
            I = n("mi6k"),
            O = n("rCmJ"),
            D = function(e) {
                var t = e.asset ? a.createElement(g._12, {
                    asset: e.asset
                }) : null;
                return a.createElement(g.X, {
                    linkTo: e.linkTo,
                    onClick: e.onClick
                }, a.createElement(g.Z, {
                    alignItems: g.c.Center,
                    display: g.L.Flex,
                    flexGrow: 1,
                    padding: 1
                }, t, a.createElement(g.U, {
                    margin: {
                        left: 1
                    }
                }, a.createElement(g._25, null, e.title))))
            },
            w = function(e) {
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
                return l.__extends(t, e), t.prototype.render = function() {
                    var e = null;
                    return this.state.showDropMenu && (e = this.dropMenu()), a.createElement(g.Z, {
                        flexGrow: 0,
                        flexShrink: 0,
                        display: g.L.Flex,
                        position: g._6.Relative
                    }, a.createElement(g.U, {
                        fullHeight: !0
                    }, a.createElement(O.a, {
                        onClickOut: this.clickOutHandler
                    }, a.createElement(g.Z, {
                        fullHeight: !0,
                        display: g.L.Flex,
                        alignItems: g.c.Stretch
                    }, a.createElement(g.u, {
                        disabled: 0 === this.props.options.length,
                        icon: g._13.More,
                        onClick: this.menuButtonClickHandler,
                        type: g.z.Text
                    })), e)))
                }, t.prototype.dropMenu = function() {
                    var e = this.props.options.map(function(e, t) {
                        return a.createElement(D, l.__assign({
                            key: t
                        }, e))
                    });
                    return a.createElement(g.p, {
                        direction: g.q.BottomRight,
                        noTail: !0,
                        show: !0
                    }, e)
                }, t
            }(a.Component),
            x = n("5kgt"),
            M = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    var e = a.createElement(g.Z, {
                            alignItems: g.c.Center,
                            display: g.L.Flex,
                            fullHeight: !0,
                            justifyContent: g.Y.Center,
                            padding: 2
                        }, a.createElement(g._20, {
                            icon: this.props.icon,
                            label: this.props.label,
                            value: this.props.value
                        })),
                        t = this.props.linkTo ? a.createElement(g.X, {
                            alpha: !0,
                            linkTo: this.props.linkTo,
                            targetBlank: !0
                        }, e) : e;
                    return a.createElement(g.Z, l.__assign({
                        display: g.L.InlineFlex,
                        fullHeight: !0
                    }, Object(x.a)(this.props)), t)
                }, t
            }(a.Component),
            F = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onPreviewImageErrorHandler = function() {
                        t.props.latencyTracking.reportInteractive()
                    }, t.onPreviewImageLoadHandler = function() {
                        t.props.latencyTracking.reportInteractive()
                    }, t.onDeleteOptionClickHandler = function() {
                        t.props.onDeleteOptionClick(t.props.collection)
                    }, t
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.collection,
                        t = null;
                    return this.props.hideOptionsMenu || (t = a.createElement(w, {
                        options: this.collectionMenuOptions(e)
                    })), a.createElement(k, null, a.createElement(g.Z, {
                        flexGrow: 0,
                        flexShrink: 0
                    }, a.createElement(g.C, {
                        aspect: g.k.Aspect16x9,
                        src: e.thumbnailURL ? e.thumbnailURL : "https://static-cdn.jtvnw.net/ttv-playlists-thumbnails-prod/missing-video-thumb-320x180.png",
                        alt: e.title,
                        onLoad: this.onPreviewImageLoadHandler,
                        onError: this.onPreviewImageErrorHandler,
                        size: g.D.Size16
                    })), a.createElement(v, null, a.createElement(g._25, {
                        bold: !0,
                        type: g._30.H5,
                        color: g.I.Alt
                    }, e.title), a.createElement(g._33, {
                        direction: g._35.Bottom,
                        label: Object(r.d)("Last Updated", "CollectionManagerCard")
                    }, a.createElement(g._25, {
                        color: g.I.Alt2
                    }, Object(r.c)(new Date(e.updatedAt), "long")))), a.createElement(h, null, this.collectionStats(e)), t)
                }, t.prototype.collectionMenuOptions = function(e) {
                    return [{
                        asset: g._13.Edit,
                        linkTo: "/manager/collections/" + e.id,
                        title: Object(r.d)("Edit", "CollectionManagerCard")
                    }, {
                        asset: g._13.Trash,
                        onClick: this.onDeleteOptionClickHandler,
                        title: Object(r.d)("Delete", "CollectionManagerCard")
                    }]
                }, t.prototype.collectionStats = function(e) {
                    return [{
                        value: Object(I.a)(e.lengthSeconds),
                        icon: g._13.GlyphLength,
                        label: Object(r.d)("Collection length", "CollectionManagerCard")
                    }, {
                        value: "" + e.viewCount,
                        icon: g._13.GlyphViews,
                        label: Object(r.d)("Views", "CollectionManagerCard")
                    }].map(function(e, t) {
                        return a.createElement(M, l.__assign({
                            key: t
                        }, e))
                    })
                }, t
            }(a.Component),
            j = Object(p.d)("CollectionManagerCard")(F),
            L = n("2KeS"),
            T = n("+8VM");
        ! function(e) {
            e[e.CancelButton = 0] = "CancelButton", e[e.ConfirmButton = 1] = "ConfirmButton"
        }(i || (i = {}));
        var H = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.collection;
                    return a.createElement(g.e, {
                        type: g.i.FadeIn,
                        delay: g.f.Medium,
                        duration: g.g.Medium,
                        enabled: !0
                    }, a.createElement(g._21, {
                        background: g.m.Base,
                        padding: {
                            x: 3,
                            top: 2,
                            bottom: 3
                        }
                    }, a.createElement(g.U, {
                        padding: {
                            bottom: 1
                        }
                    }, a.createElement(g._25, {
                        fontSize: g.P.Size3
                    }, Object(r.d)("Delete Collection", "DeleteCollectionModal"))), a.createElement(g._25, {
                        fontSize: g.P.Size6
                    }, Object(r.d)("Are you sure you want to delete this collection?", "DeleteCollectionModal")), a.createElement(g._25, {
                        fontSize: g.P.Size6
                    }, Object(r.d)("This action cannot be undone. ", "DeleteCollectionModal")), a.createElement(g.Z, {
                        padding: {
                            y: 3
                        }
                    }, a.createElement(Z, {
                        collection: e,
                        hideOptionsMenu: !0
                    })), a.createElement(g.Z, {
                        display: g.L.Flex,
                        flexDirection: g.N.Row,
                        justifyContent: g.Y.Center
                    }, a.createElement(g.Z, {
                        margin: {
                            x: .5
                        }
                    }, a.createElement(g.u, {
                        "data-test-selector": i.CancelButton,
                        onClick: this.props.onCancel,
                        type: g.z.Hollow
                    }, Object(r.d)("Cancel", "DeleteCollectionModal"))), a.createElement(g.Z, {
                        margin: {
                            x: .5
                        }
                    }, a.createElement(g.u, {
                        "data-test-selector": i.ConfirmButton,
                        onClick: this.props.onDelete,
                        type: g.z.Alert
                    }, Object(r.d)("Delete", "DeleteCollectionModal")))), a.createElement(T.a, null)))
                }, t
            }(a.Component),
            V = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onCancelHandler = function() {
                        t.props.onClose()
                    }, t.onDeleteHandler = function() {}, t
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(H, {
                        collection: this.props.collection,
                        onCancel: this.onCancelHandler,
                        onDelete: this.onDeleteHandler
                    })
                }, t
            }(a.Component),
            P = Object(N.b)(null, function(e) {
                return Object(L.b)({
                    onClose: _.c
                }, e)
            })(V),
            Z = Object(N.b)(null, function(e) {
                return {
                    onDeleteOptionClick: function(t) {
                        e(Object(_.d)(P, {
                            collection: t
                        }))
                    }
                }
            })(j),
            A = n("I9kX"),
            U = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return l.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
                    e.data.loading && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e, t = !1;
                    return this.props.data.loading ? e = this.collectionCardPlaceholders() : !this.props.data.error && this.props.data.user && this.props.data.user.collections ? this.props.data.user.collections.edges.length > 0 ? (e = this.renderCollections(this.props.data.user.collections.edges), t = this.props.data.user.collections.pageInfo.hasNextPage || !1) : e = this.noCollectionsCTA() : e = this.contentUnavaibleError(), a.createElement(c.b, null, a.createElement(g.Z, {
                        fullHeight: !0,
                        padding: {
                            top: 2,
                            x: 2
                        }
                    }, a.createElement(g.Z, {
                        padding: {
                            bottom: 2
                        }
                    }, a.createElement(g._25, {
                        type: g._30.H2
                    }, Object(r.d)("Collections", "CollectionManager"))), a.createElement(S, {
                        creatorID: this.props.data.user ? this.props.data.user.id : null,
                        creatorLogin: this.props.match.params.creatorLogin
                    }), a.createElement(g.Z, {
                        fullWidth: !0,
                        padding: {
                            top: 2
                        }
                    }, e, a.createElement(c.a, {
                        enabled: t,
                        loadMore: this.props.loadMore
                    }))))
                }, t.prototype.renderCollections = function(e) {
                    return e.map(function(e, t) {
                        return a.createElement(g.Z, {
                            key: t,
                            margin: {
                                bottom: 1
                            }
                        }, a.createElement(Z, {
                            collection: e.node
                        }))
                    })
                }, t.prototype.collectionCardPlaceholders = function() {
                    for (var e = [], t = 0; t < 3; t++) e.push(a.createElement(g.Z, {
                        key: t,
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(f, null)));
                    return e
                }, t.prototype.noCollectionsCTA = function() {
                    return a.createElement("div", null)
                }, t.prototype.contentUnavaibleError = function() {
                    return a.createElement("div", null)
                }, t
            }(a.Component),
            B = Object(o.compose)(Object(o.graphql)(A, {
                options: function(e) {
                    return {
                        variables: {
                            creatorLogin: e.match.params.creatorLogin
                        }
                    }
                },
                props: function(e) {
                    return l.__assign({}, e, {
                        loadMore: function() {
                            var t = e.data.user && e.data.user.collections ? e.data.user.collections.edges : [],
                                n = t.length > 0 ? t[t.length - 1].cursor : void 0;
                            return e.data.fetchMore({
                                query: A,
                                variables: l.__assign({}, e.data.variables, {
                                    after: n
                                }),
                                updateQuery: function(e, t) {
                                    var n = t.fetchMoreResult;
                                    if (!n.user || !n.user.collections) return e;
                                    var i = e.user && e.user.collections ? e.user.collections.edges : [];
                                    return {
                                        user: l.__assign({}, n.user, {
                                            collections: l.__assign({}, n.user.collections, {
                                                edges: Object(d.b)(i, n.user.collections.edges)
                                            })
                                        })
                                    }
                                }
                            })
                        }
                    })
                }
            }), Object(p.d)("CollectionManager", {
                destination: u.a.VideoManagerCollectionsManager
            }), Object(s.a)({
                location: m.PageviewLocation.VideoManagerCollectionManager,
                properties: function(e) {
                    return {
                        channel: e.match.params.creatorLogin,
                        channel_id: e.data.user ? e.data.user.id : null
                    }
                },
                skip: function(e) {
                    return e.data.loading
                }
            }))(U),
            R = n("PQ4i"),
            z = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.reportImageInteractive = function() {
                        t.props.latencyTracking.reportInteractive()
                    }, t
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.collectionItem;
                    return a.createElement(g._21, {
                        display: g.L.Flex,
                        border: !0
                    }, a.createElement(g.j, null, a.createElement("img", {
                        src: e.previewThumbnailURL,
                        alt: e.title,
                        onLoad: this.reportImageInteractive
                    })), a.createElement("div", null, a.createElement(g._25, null, e.title), a.createElement(g._25, {
                        "data-test-selector": "view-count"
                    }, Object(r.d)("Total Views {views}", {
                        views: e.viewCount || 0
                    }, "CollectionItemCard"))))
                }, t
            }(a.Component),
            G = Object(o.compose)(Object(p.d)("CollectionItemCard"))(z),
            q = n("kwr5"),
            $ = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return l.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
                    e.data.loading && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e;
                    return e = this.props.data.loading ? this.collectionCardPlaceholders() : this.props.data.error || !this.props.data.collection ? this.contentUnavaibleError() : this.props.data.collection ? this.renderCollectionItems(this.props.data.collection.items.edges) : this.noCollectionItemsCTA(), a.createElement(g.Z, {
                        padding: {
                            right: 4
                        }
                    }, a.createElement(g._25, {
                        type: g._30.H1
                    }, Object(r.d)("Collections", "CollectionEditorPagePresentation")), this.props.data.collection && a.createElement(j, {
                        collection: this.props.data.collection
                    }), a.createElement(g.Z, null, e))
                }, t.prototype.renderCollectionItems = function(e) {
                    return e.map(function(e, t) {
                        return a.createElement(G, {
                            key: t,
                            collectionItem: e.node
                        })
                    })
                }, t.prototype.collectionCardPlaceholders = function() {
                    return [a.createElement(R.a, {
                        key: 1
                    }), a.createElement(R.a, {
                        key: 2
                    }), a.createElement(R.a, {
                        key: 3
                    })]
                }, t.prototype.noCollectionItemsCTA = function() {
                    return a.createElement("div", null)
                }, t.prototype.contentUnavaibleError = function() {
                    return a.createElement("div", null)
                }, t
            }(a.Component),
            Q = Object(o.compose)(Object(o.graphql)(q, {
                options: function(e) {
                    return {
                        variables: {
                            collectionID: e.match.params.collectionID
                        }
                    }
                }
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
            }))($);
        n.d(t, "CollectionManagerPage", function() {
            return B
        }), n.d(t, "CollectionEditorPage", function() {
            return Q
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
                                                            value: "title"
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
                end: 298
            }
        };
        n.loc.source = {
            body: "query CollectionManager_Owner($creatorLogin: String! $after: Cursor) {\nuser(login: $creatorLogin) {\nid\ncollections(first: 15 after: $after) {\nedges {\ncursor\nnode {\nid\nitems {\ntotalCount\n}\nlengthSeconds\nthumbnailURL(width: 160 height: 90)\ntitle\nupdatedAt\nviewCount\n}\n}\npageInfo {\nhasNextPage\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    QmYP: function(e, t) {},
    kwr5: function(e, t) {
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
        n.loc.source = {
            body: "query CollectionManager_EditCollection($collectionID: ID!) {\ncollection(id: $collectionID) {\nid\nlengthSeconds\nowner {\nlogin\n}\ntitle\nviewCount\nupdatedAt\nitems {\ntotalCount\nedges {\nnode {\n... on Video {\nid\ntitle\nlengthSeconds\npreviewThumbnailURL\nviewCount\n}\n}\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    }
});
//# sourceMappingURL=pages.video-tools.pages.collection-manager-0c268015ca6aa996540146b43f11918a.js.map