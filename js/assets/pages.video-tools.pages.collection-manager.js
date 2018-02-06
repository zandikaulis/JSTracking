webpackJsonp([67], {
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
        var i = n("TToO"),
            a = n("U7vG"),
            l = n("3zLD"),
            o = n("6sO2"),
            r = n("j7/Y"),
            c = n("w9tK"),
            s = n("vH/s"),
            d = n("CSlQ"),
            u = n("Odds"),
            m = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(u._21, {
                        background: u.m.Base,
                        elevation: 1,
                        display: u.L.Flex,
                        flexDirection: u.N.Row,
                        alignItems: u.c.Stretch
                    }, this.props.children)
                }, t
            }(a.Component),
            p = (n("QmYP"), function(e) {
                return a.createElement(u.Z, {
                    className: "manager-card__stats-container",
                    display: u.L.Flex,
                    flexGrow: 0,
                    flexShrink: 0,
                    flexWrap: u.O.NoWrap,
                    flexDirection: u.N.Row,
                    alignItems: u.c.Center
                }, e.children)
            }),
            g = function(e) {
                return a.createElement(u.Z, {
                    alignItems: u.c.Start,
                    display: u.L.Flex,
                    flexDirection: u.N.Column,
                    flexGrow: 1,
                    flexShrink: 1,
                    justifyContent: u.Y.Center,
                    padding: {
                        x: 2
                    }
                }, e.children)
            },
            k = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(m, null, a.createElement(u.Z, null, a.createElement(u._5, {
                        height: 75,
                        width: 133
                    })), a.createElement(g, null, a.createElement(u._25, null, a.createElement(u._5, {
                        width: 600,
                        lineCount: 1
                    }), a.createElement(u._5, {
                        width: 200,
                        lineCount: 1
                    }))), a.createElement(p, null, a.createElement(u._25, null, a.createElement(u._5, {
                        width: 40,
                        lineCount: 1
                    }))), a.createElement(u.Z, {
                        flexGrow: 0,
                        flexShrink: 0
                    }, a.createElement(u.Z, {
                        fullHeight: !0,
                        display: u.L.Flex,
                        alignItems: u.c.Center,
                        justifyContent: u.Y.Center,
                        padding: 1
                    }, a.createElement(u._25, null, a.createElement(u._5, {
                        width: 20,
                        lineCount: 1
                    })))))
                }, t
            }(a.PureComponent),
            v = n("CIox"),
            h = n("7vx8"),
            C = n("oIkB"),
            f = n("1myv"),
            E = function(e) {
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
                            return i.__awaiter(t, void 0, void 0, function() {
                                var e, t, n;
                                return i.__generator(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            e = Object(C.a)({
                                                ownerID: this.props.creatorID || "",
                                                title: this.state.collectionTitle
                                            }), i.label = 1;
                                        case 1:
                                            return i.trys.push([1, 3, , 4]), [4, this.props.createCollection(e)];
                                        case 2:
                                            return t = i.sent(), this.props.history.push("/" + this.props.creatorLogin + "/manager/collections/" + t.collection.id), [3, 4];
                                        case 3:
                                            return n = i.sent(), o.i.error(n, "createCollection", {
                                                mutationInput: e
                                            }), this.setState({
                                                creationErrorMessage: Object(o.d)("Creation attempt failed. Please try again.", "CollectionCreator")
                                            }), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = Object(o.d)("{currentLength} of {maxLength} characters.", {
                            currentLength: this.state.collectionTitle.length.toString(),
                            maxLength: 100..toString()
                        }, "CollectionCreator"),
                        t = null;
                    return 0 === this.state.creationErrorMessage.length && (t = a.createElement(u.Z, {
                        visibility: this.state.collectionTitle.length > 0 ? u._41.Visible : u._41.Hidden,
                        "data-test-selector": "length-hint"
                    }, a.createElement(u._25, null, e))), a.createElement(u.Q, {
                        error: this.state.creationErrorMessage.length > 0,
                        errorMessage: this.state.creationErrorMessage,
                        label: ""
                    }, a.createElement(u.S, null, a.createElement(u.J, {
                        cols: {
                            default: 3,
                            xl: 2
                        }
                    }, a.createElement(u.V, {
                        disabled: null === this.props.creatorID,
                        maxLength: 100,
                        onChange: this.onNameInputChangeHandler,
                        placeholder: Object(o.d)("Collection name", "CollectionCreator"),
                        type: u.W.Text
                    }), t), a.createElement(u.J, {
                        cols: 3
                    }, a.createElement(u.u, {
                        disabled: null === this.props.creatorID || "" === this.state.collectionTitle,
                        onClick: this.onCreateButtonClickHandler
                    }, Object(o.d)("Create Collection", "CollectionCreator")))))
                }, t
            }(a.Component),
            y = Object(l.compose)(Object(h.a)(f, {
                name: "createCollection"
            }))(Object(v.e)(E)),
            b = n("RH2O"),
            S = n("V5M+"),
            N = n("mi6k"),
            _ = n("rCmJ"),
            w = function(e) {
                var t = e.asset ? a.createElement(u._12, {
                    asset: e.asset
                }) : null;
                return a.createElement(u.X, {
                    linkTo: e.linkTo,
                    onClick: e.onClick
                }, a.createElement(u.Z, {
                    alignItems: u.c.Center,
                    display: u.L.Flex,
                    flexGrow: 1,
                    padding: 1
                }, t, a.createElement(u.U, {
                    margin: {
                        left: 1
                    }
                }, a.createElement(u._25, null, e.title))))
            },
            I = function(e) {
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
                    return this.state.showDropMenu && (e = this.dropMenu()), a.createElement(u.Z, {
                        flexGrow: 0,
                        flexShrink: 0,
                        display: u.L.Flex,
                        position: u._6.Relative
                    }, a.createElement(u.U, {
                        fullHeight: !0
                    }, a.createElement(_.a, {
                        onClickOut: this.clickOutHandler
                    }, a.createElement(u.Z, {
                        fullHeight: !0,
                        display: u.L.Flex,
                        alignItems: u.c.Stretch
                    }, a.createElement(u.u, {
                        disabled: 0 === this.props.options.length,
                        icon: u._13.More,
                        onClick: this.menuButtonClickHandler,
                        type: u.z.Text
                    })), e)))
                }, t.prototype.dropMenu = function() {
                    var e = this.props.options.map(function(e, t) {
                        return a.createElement(w, i.__assign({
                            key: t
                        }, e))
                    });
                    return a.createElement(u.p, {
                        direction: u.q.BottomRight,
                        noTail: !0,
                        show: !0
                    }, e)
                }, t
            }(a.Component),
            O = n("5kgt"),
            x = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = a.createElement(u.Z, {
                            alignItems: u.c.Center,
                            display: u.L.Flex,
                            fullHeight: !0,
                            justifyContent: u.Y.Center,
                            padding: 2
                        }, a.createElement(u._20, {
                            icon: this.props.icon,
                            label: this.props.label,
                            value: this.props.value
                        })),
                        t = this.props.linkTo ? a.createElement(u.X, {
                            alpha: !0,
                            linkTo: this.props.linkTo,
                            targetBlank: !0
                        }, e) : e;
                    return a.createElement(u.Z, i.__assign({
                        display: u.L.InlineFlex,
                        fullHeight: !0
                    }, Object(O.a)(this.props)), t)
                }, t
            }(a.Component),
            D = function(e) {
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
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.collection;
                    return a.createElement(m, null, a.createElement(u.Z, {
                        flexGrow: 0,
                        flexShrink: 0
                    }, a.createElement(u.C, {
                        aspect: u.k.Aspect16x9,
                        src: e.thumbnailURL ? e.thumbnailURL : "https://static-cdn.jtvnw.net/ttv-playlists-thumbnails-prod/missing-video-thumb-320x180.png",
                        alt: e.title,
                        onLoad: this.onPreviewImageLoadHandler,
                        onError: this.onPreviewImageErrorHandler,
                        size: u.D.Size16
                    })), a.createElement(g, null, a.createElement(u._25, {
                        type: u._30.H5,
                        color: u.I.Alt
                    }, e.title)), a.createElement(p, null, this.collectionStats(e)), a.createElement(I, {
                        options: this.collectionMenuOptions(e)
                    }))
                }, t.prototype.collectionMenuOptions = function(e) {
                    return [{
                        asset: u._13.Edit,
                        linkTo: "/manager/collections/" + e.id,
                        title: Object(o.d)("Edit", "CollectionManagerCard")
                    }, {
                        asset: u._13.Trash,
                        onClick: this.onDeleteOptionClickHandler,
                        title: Object(o.d)("Delete", "CollectionManagerCard")
                    }]
                }, t.prototype.collectionStats = function(e) {
                    var t = e.updatedAt ? new Date(e.updatedAt) : new Date;
                    return [{
                        value: Object(o.c)(new Date(t), "long"),
                        icon: u._13.Events,
                        label: Object(o.d)("Last updated", "CollectionManagerCard")
                    }, {
                        value: Object(N.a)(e.lengthSeconds),
                        icon: u._13.GlyphLength,
                        label: Object(o.d)("Collection length", "CollectionManagerCard")
                    }, {
                        value: "" + e.items.totalCount,
                        icon: u._13.Collections,
                        label: Object(o.d)("Total videos", "CollectionManagerCard")
                    }, {
                        value: "" + e.viewCount,
                        icon: u._13.GlyphViews,
                        label: Object(o.d)("Views", "CollectionManagerCard")
                    }].map(function(e, t) {
                        return a.createElement(x, i.__assign({
                            key: t
                        }, e))
                    })
                }, t
            }(a.Component),
            F = Object(d.d)("CollectionManagerCard")(D),
            L = n("2KeS"),
            M = n("+8VM"),
            j = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return a.createElement("div", null, a.createElement(u.u, {
                        onClick: this.props.onCancel,
                        type: u.z.Text
                    }, Object(o.d)("Cancel", "DeleteCollectionModal")))
                }, t
            }(a.Component),
            T = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onCancelHandler = function() {
                        t.props.onClose()
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(u._21, {
                        background: u.m.Base,
                        padding: {
                            x: 2,
                            y: 3
                        }
                    }, a.createElement(j, {
                        onCancel: this.onCancelHandler
                    }), a.createElement(M.a, null))
                }, t
            }(a.Component),
            H = Object(b.b)(null, function(e) {
                return Object(L.b)({
                    onClose: S.c
                }, e)
            })(T),
            V = Object(b.b)(null, function(e) {
                return {
                    onDeleteOptionClick: function(t) {
                        e(Object(S.d)(H, {
                            collection: t
                        }))
                    }
                }
            })(F),
            P = n("I9kX"),
            Z = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
                    e.data.loading && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e;
                    return e = this.props.data.loading ? this.collectionCardPlaceholders() : !this.props.data.error && this.props.data.user && this.props.data.user.collections ? this.props.data.user.collections.edges.length > 0 ? this.renderCollections(this.props.data.user.collections.edges) : this.noCollectionsCTA() : this.contentUnavaibleError(), a.createElement(u.Z, {
                        fullHeight: !0,
                        padding: {
                            top: 2,
                            x: 2
                        }
                    }, a.createElement(u.Z, {
                        padding: {
                            bottom: 2
                        }
                    }, a.createElement(u._25, {
                        type: u._30.H2
                    }, Object(o.d)("Collections", "CollectionManager"))), a.createElement(y, {
                        creatorID: this.props.data.user ? this.props.data.user.id : null,
                        creatorLogin: this.props.match.params.creatorLogin
                    }), a.createElement(u.Z, {
                        fullWidth: !0,
                        padding: {
                            top: 2
                        }
                    }, e))
                }, t.prototype.renderCollections = function(e) {
                    return e.map(function(e, t) {
                        return a.createElement(u.Z, {
                            key: t,
                            margin: {
                                bottom: 1
                            }
                        }, a.createElement(V, {
                            collection: e.node
                        }))
                    })
                }, t.prototype.collectionCardPlaceholders = function() {
                    for (var e = [], t = 0; t < 3; t++) e.push(a.createElement(u.Z, {
                        key: t,
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(k, null)));
                    return e
                }, t.prototype.noCollectionsCTA = function() {
                    return a.createElement("div", null)
                }, t.prototype.contentUnavaibleError = function() {
                    return a.createElement("div", null)
                }, t
            }(a.Component),
            A = Object(l.compose)(Object(l.graphql)(P, {
                options: function(e) {
                    return {
                        variables: {
                            creatorLogin: e.match.params.creatorLogin
                        }
                    }
                }
            }), Object(d.d)("CollectionManager", {
                destination: c.a.VideoManagerCollectionsManager
            }), Object(r.a)({
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
            }))(Z),
            U = n("PQ4i"),
            G = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.reportImageInteractive = function() {
                        t.props.latencyTracking.reportInteractive()
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.collectionItem;
                    return a.createElement(u._21, {
                        display: u.L.Flex,
                        border: !0
                    }, a.createElement(u.j, null, a.createElement("img", {
                        src: e.previewThumbnailURL,
                        alt: e.title,
                        onLoad: this.reportImageInteractive
                    })), a.createElement("div", null, a.createElement(u._25, null, e.title), a.createElement(u._25, {
                        "data-test-selector": "view-count"
                    }, Object(o.d)("Total Views {views}", {
                        views: e.viewCount || 0
                    }, "CollectionItemCard"))))
                }, t
            }(a.Component),
            R = Object(l.compose)(Object(d.d)("CollectionItemCard"))(G),
            q = n("kwr5"),
            B = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
                    e.data.loading && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e;
                    return e = this.props.data.loading ? this.collectionCardPlaceholders() : this.props.data.error || !this.props.data.collection ? this.contentUnavaibleError() : this.props.data.collection ? this.renderCollectionItems(this.props.data.collection.items.edges) : this.noCollectionItemsCTA(), a.createElement(u.Z, {
                        padding: {
                            right: 4
                        }
                    }, a.createElement(u._25, {
                        type: u._30.H1
                    }, Object(o.d)("Collections", "CollectionEditorPagePresentation")), this.props.data.collection && a.createElement(F, {
                        collection: this.props.data.collection
                    }), a.createElement(u.Z, null, e))
                }, t.prototype.renderCollectionItems = function(e) {
                    return e.map(function(e, t) {
                        return a.createElement(R, {
                            key: t,
                            collectionItem: e.node
                        })
                    })
                }, t.prototype.collectionCardPlaceholders = function() {
                    return [a.createElement(U.a, {
                        key: 1
                    }), a.createElement(U.a, {
                        key: 2
                    }), a.createElement(U.a, {
                        key: 3
                    })]
                }, t.prototype.noCollectionItemsCTA = function() {
                    return a.createElement("div", null)
                }, t.prototype.contentUnavaibleError = function() {
                    return a.createElement("div", null)
                }, t
            }(a.Component),
            Q = Object(l.compose)(Object(l.graphql)(q, {
                options: function(e) {
                    return {
                        variables: {
                            collectionID: e.match.params.collectionID
                        }
                    }
                }
            }), Object(d.d)("CollectionEditorPage", {
                destination: c.a.VideoManagerCollectionsEditor
            }), Object(r.a)({
                location: s.PageviewLocation.VideoManagerCollectionEditor,
                properties: function(e) {
                    return {
                        channel: e.match.params.creatorLogin
                    }
                },
                skip: function(e) {
                    return e.data.loading
                }
            }))(B);
        n.d(t, "CollectionManagerPage", function() {
            return A
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
                end: 258
            }
        };
        n.loc.source = {
            body: "query CollectionManager_Owner($creatorLogin: String!) {\nuser(login: $creatorLogin) {\nid\ncollections {\nedges {\ncursor\nnode {\nid\nitems {\ntotalCount\n}\nlengthSeconds\nthumbnailURL(width: 160 height: 90)\ntitle\nupdatedAt\nviewCount\n}\n}\npageInfo {\nhasNextPage\n}\n}\n}\n}",
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
//# sourceMappingURL=pages.video-tools.pages.collection-manager-06533b653257e0114c70de1ca1da2046.js.map