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
    "5Oju": function(e, t) {},
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
            d = n("j7/Y"),
            s = n("oIkB"),
            u = n("w9tK"),
            m = n("vH/s"),
            p = n("CSlQ"),
            g = n("Odds"),
            h = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(g._23, {
                        background: g.m.Base,
                        elevation: 1,
                        display: g.M.Flex,
                        flexDirection: g.O.Row,
                        alignItems: g.c.Stretch
                    }, this.props.children)
                }, t
            }(a.Component),
            k = (n("QmYP"), function(e) {
                return a.createElement(g._1, {
                    className: "manager-card__stats-container",
                    display: g.M.Flex,
                    flexGrow: 0,
                    flexShrink: 0,
                    flexWrap: g.P.NoWrap,
                    flexDirection: g.O.Row,
                    alignItems: g.c.Center
                }, e.children)
            }),
            v = function(e) {
                return a.createElement(g._1, {
                    alignItems: g.c.Start,
                    display: g.M.Flex,
                    flexDirection: g.O.Column,
                    flexGrow: 1,
                    flexShrink: 1,
                    justifyContent: g._0.Center,
                    padding: {
                        x: 2
                    }
                }, e.children)
            },
            C = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(h, null, a.createElement(g._1, null, a.createElement(g._7, {
                        height: 75,
                        width: 133
                    })), a.createElement(v, null, a.createElement(g._27, null, a.createElement(g._7, {
                        width: 600,
                        lineCount: 1
                    }), a.createElement(g._7, {
                        width: 200,
                        lineCount: 1
                    }))), a.createElement(k, null, a.createElement(g._27, null, a.createElement(g._7, {
                        width: 40,
                        lineCount: 1
                    }))), a.createElement(g._1, {
                        flexGrow: 0,
                        flexShrink: 0
                    }, a.createElement(g._1, {
                        fullHeight: !0,
                        display: g.M.Flex,
                        alignItems: g.c.Center,
                        justifyContent: g._0.Center,
                        padding: 1
                    }, a.createElement(g._27, null, a.createElement(g._7, {
                        width: 20,
                        lineCount: 1
                    })))))
                }, t
            }(a.PureComponent),
            f = n("CIox"),
            E = n("7vx8"),
            _ = n("1myv"),
            b = function(e) {
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
                                            e = Object(s.a)({
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
                    return 0 === this.state.creationErrorMessage.length && (t = a.createElement(g._1, {
                        visibility: this.state.collectionTitle.length > 0 ? g._43.Visible : g._43.Hidden,
                        "data-test-selector": "length-hint"
                    }, a.createElement(g._27, null, e))), a.createElement(g.R, {
                        error: this.state.creationErrorMessage.length > 0,
                        errorMessage: this.state.creationErrorMessage,
                        label: ""
                    }, a.createElement(g.T, null, a.createElement(g.J, {
                        cols: {
                            default: 3,
                            xl: 2
                        }
                    }, a.createElement(g.X, {
                        disabled: null === this.props.creatorID,
                        maxLength: 100,
                        onChange: this.onNameInputChangeHandler,
                        placeholder: Object(r.d)("Collection name", "CollectionCreator"),
                        type: g.Y.Text
                    }), t), a.createElement(g.J, {
                        cols: 3
                    }, a.createElement(g.u, {
                        disabled: null === this.props.creatorID || "" === this.state.collectionTitle,
                        onClick: this.onCreateButtonClickHandler
                    }, Object(r.d)("Create Collection", "CollectionCreator")))))
                }, t
            }(a.Component),
            y = Object(o.compose)(Object(E.a)(_, {
                name: "createCollection"
            }))(Object(f.e)(b)),
            S = n("RH2O"),
            N = n("V5M+"),
            I = n("mi6k"),
            O = n("rCmJ"),
            x = function(e) {
                var t = e.asset ? a.createElement(g._14, {
                    asset: e.asset
                }) : null;
                return a.createElement(g.Z, {
                    linkTo: e.linkTo,
                    onClick: e.onClick
                }, a.createElement(g._1, {
                    alignItems: g.c.Center,
                    display: g.M.Flex,
                    flexGrow: 1,
                    padding: 1
                }, t, a.createElement(g.V, {
                    margin: {
                        left: 1
                    }
                }, a.createElement(g._27, null, e.title))))
            },
            M = function(e) {
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
                    return this.state.showDropMenu && (e = this.dropMenu()), a.createElement(g._1, {
                        flexGrow: 0,
                        flexShrink: 0,
                        display: g.M.Flex,
                        position: g._8.Relative
                    }, a.createElement(g.V, {
                        fullHeight: !0
                    }, a.createElement(O.a, {
                        onClickOut: this.clickOutHandler
                    }, a.createElement(g._1, {
                        fullHeight: !0,
                        display: g.M.Flex,
                        alignItems: g.c.Stretch
                    }, a.createElement(g.u, {
                        disabled: 0 === this.props.options.length,
                        icon: g._15.More,
                        onClick: this.menuButtonClickHandler,
                        type: g.z.Text
                    })), e)))
                }, t.prototype.dropMenu = function() {
                    var e = this.props.options.map(function(e, t) {
                        return a.createElement(x, l.__assign({
                            key: t
                        }, e))
                    });
                    return a.createElement(g.p, {
                        size: g.r.Small,
                        direction: g.q.BottomRight,
                        noTail: !0,
                        show: !0
                    }, e)
                }, t
            }(a.Component),
            w = n("5kgt"),
            D = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    var e = a.createElement(g._1, {
                            alignItems: g.c.Center,
                            display: g.M.Flex,
                            fullHeight: !0,
                            justifyContent: g._0.Center,
                            padding: 2
                        }, a.createElement(g._22, {
                            icon: this.props.icon,
                            label: this.props.label,
                            value: this.props.value
                        })),
                        t = this.props.linkTo ? a.createElement(g.Z, {
                            alpha: !0,
                            linkTo: this.props.linkTo,
                            targetBlank: !0
                        }, e) : e;
                    return a.createElement(g._1, l.__assign({
                        display: g.M.InlineFlex,
                        fullHeight: !0
                    }, Object(w.a)(this.props)), t)
                }, t
            }(a.Component),
            j = "https://static-cdn.jtvnw.net/ttv-playlists-thumbnails-prod/missing-video-thumb-320x180.png",
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
                    return this.props.hideOptionsMenu || (t = a.createElement(M, {
                        options: this.collectionMenuOptions(e)
                    })), a.createElement(h, null, a.createElement(g._1, {
                        flexGrow: 0,
                        flexShrink: 0
                    }, a.createElement(g.C, {
                        aspect: g.k.Aspect16x9,
                        src: e.thumbnailURL ? e.thumbnailURL : j,
                        alt: e.title,
                        onLoad: this.onPreviewImageLoadHandler,
                        onError: this.onPreviewImageErrorHandler,
                        size: g.D.Size16
                    })), a.createElement(v, null, a.createElement(g._27, {
                        bold: !0,
                        type: g._32.H5,
                        color: g.I.Alt
                    }, e.title), a.createElement(g._35, {
                        direction: g._37.Bottom,
                        label: Object(r.d)("Last Updated", "CollectionManagerCard")
                    }, a.createElement(g._27, {
                        color: g.I.Alt2
                    }, Object(r.c)(new Date(e.updatedAt), "long")))), a.createElement(k, null, this.collectionStats(e)), t)
                }, t.prototype.collectionMenuOptions = function(e) {
                    return [{
                        asset: g._15.Edit,
                        linkTo: "/manager/collections/" + e.id,
                        title: Object(r.d)("Edit", "CollectionManagerCard")
                    }, {
                        asset: g._15.Trash,
                        onClick: this.onDeleteOptionClickHandler,
                        title: Object(r.d)("Delete", "CollectionManagerCard")
                    }]
                }, t.prototype.collectionStats = function(e) {
                    return [{
                        value: Object(I.a)(e.lengthSeconds),
                        icon: g._15.GlyphLength,
                        label: Object(r.d)("Collection length", "CollectionManagerCard")
                    }, {
                        value: "" + e.viewCount,
                        icon: g._15.GlyphViews,
                        label: Object(r.d)("Views", "CollectionManagerCard")
                    }].map(function(e, t) {
                        return a.createElement(D, l.__assign({
                            key: t
                        }, e))
                    })
                }, t
            }(a.Component),
            T = Object(p.d)("CollectionManagerCard")(F),
            L = n("2KeS"),
            A = n("+8VM");
        ! function(e) {
            e[e.CancelButton = 0] = "CancelButton", e[e.ConfirmButton = 1] = "ConfirmButton"
        }(i || (i = {}));
        var V = function(e) {
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
                    }, a.createElement(g._23, {
                        background: g.m.Base,
                        padding: {
                            x: 3,
                            top: 2,
                            bottom: 3
                        }
                    }, a.createElement(g.V, {
                        padding: {
                            bottom: 1
                        }
                    }, a.createElement(g._27, {
                        fontSize: g.Q.Size3
                    }, Object(r.d)("Delete Collection", "DeleteCollectionModal"))), a.createElement(g._27, {
                        fontSize: g.Q.Size6
                    }, Object(r.d)("Are you sure you want to delete this collection?", "DeleteCollectionModal")), a.createElement(g._27, {
                        fontSize: g.Q.Size6
                    }, Object(r.d)("This action cannot be undone. ", "DeleteCollectionModal")), a.createElement(g._1, {
                        padding: {
                            y: 3
                        }
                    }, a.createElement(R, {
                        collection: e,
                        hideOptionsMenu: !0
                    })), a.createElement(g._1, {
                        display: g.M.Flex,
                        flexDirection: g.O.Row,
                        justifyContent: g._0.Center
                    }, a.createElement(g._1, {
                        margin: {
                            x: .5
                        }
                    }, a.createElement(g.u, {
                        "data-test-selector": i.CancelButton,
                        onClick: this.props.onCancel,
                        type: g.z.Hollow
                    }, Object(r.d)("Cancel", "DeleteCollectionModal"))), a.createElement(g._1, {
                        margin: {
                            x: .5
                        }
                    }, a.createElement(g.u, {
                        "data-test-selector": i.ConfirmButton,
                        onClick: this.props.onDelete,
                        type: g.z.Alert
                    }, Object(r.d)("Delete", "DeleteCollectionModal")))), a.createElement(A.a, null)))
                }, t
            }(a.Component),
            P = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onCancelHandler = function() {
                        t.props.onClose()
                    }, t.onDeleteHandler = function() {}, t
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(V, {
                        collection: this.props.collection,
                        onCancel: this.onCancelHandler,
                        onDelete: this.onDeleteHandler
                    })
                }, t
            }(a.Component),
            H = Object(S.b)(null, function(e) {
                return Object(L.b)({
                    onClose: N.c
                }, e)
            })(P),
            R = Object(S.b)(null, function(e) {
                return {
                    onDeleteOptionClick: function(t) {
                        e(Object(N.d)(H, {
                            collection: t
                        }))
                    }
                }
            })(T),
            z = n("I9kX"),
            G = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return l.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
                    e.data.loading && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e, t = !1;
                    return this.props.data.loading ? e = this.collectionCardPlaceholders() : !this.props.data.error && this.props.data.user && this.props.data.user.collections ? this.props.data.user.collections.edges.length > 0 ? (e = this.renderCollections(this.props.data.user.collections.edges), t = this.props.data.user.collections.pageInfo.hasNextPage || !1) : e = this.noCollectionsCTA() : e = this.contentUnavaibleError(), a.createElement(c.b, null, a.createElement(g._1, {
                        fullHeight: !0,
                        padding: {
                            top: 2,
                            x: 2
                        }
                    }, a.createElement(g._1, {
                        padding: {
                            bottom: 2
                        }
                    }, a.createElement(g._27, {
                        type: g._32.H2
                    }, Object(r.d)("Collections", "CollectionManager"))), a.createElement(y, {
                        creatorID: this.props.data.user ? this.props.data.user.id : null,
                        creatorLogin: this.props.match.params.creatorLogin
                    }), a.createElement(g._1, {
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
                        return a.createElement(g._1, {
                            key: t,
                            margin: {
                                bottom: 1
                            }
                        }, a.createElement(R, {
                            collection: e.node
                        }))
                    })
                }, t.prototype.collectionCardPlaceholders = function() {
                    for (var e = [], t = 0; t < 3; t++) e.push(a.createElement(g._1, {
                        key: t,
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(C, null)));
                    return e
                }, t.prototype.noCollectionsCTA = function() {
                    return a.createElement("div", null)
                }, t.prototype.contentUnavaibleError = function() {
                    return a.createElement("div", null)
                }, t
            }(a.Component),
            U = Object(o.compose)(Object(o.graphql)(z, {
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
                                query: z,
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
                                                edges: Object(s.b)(i, n.user.collections.edges)
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
            }), Object(d.a)({
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
            }))(G),
            B = n("PQ4i"),
            q = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(g._23, {
                        background: g.m.Alt,
                        display: g.M.Flex,
                        flexDirection: g.O.Row,
                        alignItems: g.c.Stretch
                    }, a.createElement(g._1, {
                        display: g.M.Flex,
                        flexDirection: g.O.Column
                    }, a.createElement(g._1, {
                        margin: {
                            y: 1
                        }
                    }, a.createElement(g._27, {
                        color: g.I.Alt,
                        type: g._32.H6,
                        bold: !0
                    }, Object(r.d)("Collection Thumbnail", "CollectionEditorInfoCard"))), a.createElement(g.K, {
                        src: this.props.collection.thumbnailURL || j,
                        alt: this.props.collection.title
                    })), a.createElement(g._1, {
                        display: g.M.Flex,
                        flexDirection: g.O.Column,
                        margin: {
                            left: 3
                        },
                        flexGrow: 2,
                        flexShrink: 0
                    }, a.createElement(g._1, {
                        margin: {
                            y: 1
                        }
                    }, a.createElement(g._27, {
                        color: g.I.Alt,
                        type: g._32.H6,
                        bold: !0
                    }, Object(r.d)("Title", "CollectionEditorInfoCard"))), a.createElement(g.X, {
                        type: g.Y.Text,
                        value: this.props.collection.title,
                        readOnly: !0
                    }), a.createElement(g._1, {
                        margin: {
                            top: 1,
                            bottom: 3
                        }
                    }, a.createElement(g._27, {
                        type: g._32.Span,
                        color: g.I.Alt2
                    }, Object(r.d)("Last updated {updatedAt}", {
                        updatedAt: Object(r.c)(new Date(this.props.collection.updatedAt), "long")
                    }, "CollectionEditorInfoCard"))), this.managerMenu()))
                }, t.prototype.managerMenu = function() {
                    return a.createElement(g._1, null, a.createElement(g.u, {
                        icon: g._15.Play,
                        type: g.z.Text
                    }, Object(r.d)("Play All", "CollectionEditorInfoCard")), a.createElement(g.u, {
                        icon: g._15.Plus,
                        type: g.z.Text
                    }, Object(r.d)("Add", "CollectionEditorInfoCard")), a.createElement(g.u, {
                        icon: g._15.Share,
                        type: g.z.Text
                    }, Object(r.d)("Share", "CollectionEditorInfoCard")), a.createElement(g.u, {
                        icon: g._15.Trash,
                        type: g.z.Text
                    }, Object(r.d)("Delete", "CollectionEditorInfoCard")))
                }, t
            }(a.Component),
            Q = n("F8kA"),
            $ = n("5RjZ"),
            J = (n("5Oju"), {
                ItemLength: "ItemLength",
                VideoLink: "VideoLink"
            }),
            Y = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.subHeader = function(e) {
                        return a.createElement(g._23, {
                            display: g.M.Flex,
                            flexDirection: g.O.Row,
                            margin: {
                                top: .5
                            },
                            color: g.I.Alt2
                        }, a.createElement(g._1, {
                            padding: {
                                right: 1
                            }
                        }, a.createElement(g._35, {
                            direction: g._37.Bottom,
                            align: g._36.Center,
                            label: Object(r.d)("Published At", "CollectionItemCard")
                        }, a.createElement(g._27, null, Object(r.c)(new Date(e.publishedAt), "long")))), a.createElement(g._1, {
                            padding: {
                                right: 1
                            },
                            display: g.M.Flex,
                            alignItems: g.c.Center
                        }, a.createElement(g._22, {
                            "data-test-selector": J.ItemLength,
                            label: Object(r.d)("Length", "CollectionItemCard"),
                            value: Object(I.a)(e.lengthSeconds),
                            icon: g._15.GlyphLength
                        })), a.createElement(g._1, {
                            padding: {
                                right: 1
                            },
                            display: g.M.Flex,
                            alignItems: g.c.Center
                        }, a.createElement(g._22, {
                            label: Object(r.d)("Video Type", "CollectionItemCard"),
                            value: Object($.a)(e.broadcastType),
                            icon: g._15.NavVideos
                        })))
                    }, t.reportImageInteractive = function() {
                        t.props.latencyTracking.reportInteractive()
                    }, t
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.collectionItem;
                    return a.createElement(g._1, {
                        className: "collection-item-card",
                        margin: {
                            y: 1
                        }
                    }, a.createElement(h, null, a.createElement(g._23, {
                        background: g.m.Alt,
                        display: g.M.Flex,
                        className: "collection-item__drag-handle"
                    }, a.createElement(g._14, {
                        asset: g._15.Roman2
                    })), a.createElement(g._1, {
                        alignSelf: g.d.Center,
                        padding: {
                            x: 1
                        }
                    }, this.props.position), a.createElement(g._1, {
                        flexGrow: 0,
                        flexShrink: 0
                    }, a.createElement(g.C, {
                        aspect: g.k.Aspect16x9,
                        size: g.D.Size16,
                        onLoad: this.reportImageInteractive,
                        onError: this.reportImageInteractive,
                        src: e.previewThumbnailURL ? e.previewThumbnailURL : j,
                        alt: e.title
                    })), a.createElement(v, null, a.createElement(g._27, {
                        type: g._32.H5,
                        color: g.I.Alt
                    }, a.createElement(Q.a, {
                        "data-test-selector": J.VideoLink,
                        to: {
                            pathname: "/videos/" + this.props.collectionItem.id,
                            state: {
                                content: m.PageviewContent.CollectionItemCard,
                                medium: m.PageviewMedium.VideoManagerCollectionEditor
                            }
                        }
                    }, e.title)), this.subHeader(e)), a.createElement(k, null, a.createElement(D, {
                        value: e.viewCount.toString(),
                        icon: g._15.GlyphViews,
                        label: Object(r.d)("Total videos", "CollectionItemCard")
                    })), a.createElement(M, {
                        options: this.collectionMenuOptions(e)
                    })))
                }, t.prototype.collectionMenuOptions = function(e) {
                    return [{
                        asset: g._15.Edit,
                        title: Object(r.d)("Set as collection thumbnail", "CollectionItemCard")
                    }, {
                        asset: g._15.Trash,
                        title: Object(r.d)("Remove from collection", "CollectionItemCard")
                    }]
                }, t
            }(a.Component),
            X = Object(o.compose)(Object(p.d)("CollectionItemCard"))(Y),
            K = n("kwr5"),
            W = (n("MJPl"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return l.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
                    e.data.loading && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e;
                    return e = this.props.data.loading ? this.collectionCardPlaceholders() : this.props.data.error || !this.props.data.collection ? this.contentUnavaibleError() : this.props.data.collection ? this.renderCollectionItems(this.props.data.collection.items.edges) : this.noCollectionItemsCTA(), a.createElement(g._1, {
                        padding: 3,
                        display: g.M.Flex,
                        flexDirection: g.O.Row,
                        className: "collection-editor-page"
                    }, a.createElement(g._1, {
                        flexGrow: 1
                    }, a.createElement(g._1, {
                        margin: {
                            bottom: 1
                        },
                        flexGrow: 1,
                        flexDirection: g.O.Row,
                        display: g.M.Flex
                    }, a.createElement(g._1, {
                        flexGrow: 1
                    }, a.createElement(g._27, {
                        type: g._32.H3
                    }, Object(r.d)("Edit Collection", "CollectionEditorPagePresentation"))), a.createElement(g._1, {
                        flexGrow: 0
                    }, a.createElement(g.u, {
                        type: g.z.Text
                    }, Object(r.d)("Cancel", "CollectionEditorPagePresentation")))), this.props.data.collection && a.createElement(q, {
                        collection: this.props.data.collection
                    }), e), a.createElement(g._1, {
                        flexGrow: 0,
                        className: "right-sidebar"
                    }, a.createElement(g.u, null, Object(r.d)("Save changes", "CollectionEditorPagePresentation"))))
                }, t.prototype.renderCollectionItems = function(e) {
                    return e.map(function(e, t) {
                        return a.createElement(X, {
                            key: t,
                            collectionItem: e.node,
                            position: t + 1
                        })
                    })
                }, t.prototype.collectionCardPlaceholders = function() {
                    return [a.createElement(B.a, {
                        key: 1
                    }), a.createElement(B.a, {
                        key: 2
                    }), a.createElement(B.a, {
                        key: 3
                    })]
                }, t.prototype.noCollectionItemsCTA = function() {
                    return a.createElement("div", null)
                }, t.prototype.contentUnavaibleError = function() {
                    return a.createElement("div", null)
                }, t
            }(a.Component)),
            Z = Object(o.compose)(Object(o.graphql)(K, {
                options: function(e) {
                    return {
                        variables: {
                            collectionID: e.match.params.collectionID
                        }
                    }
                }
            }), Object(p.d)("CollectionEditorPage", {
                destination: u.a.VideoManagerCollectionsEditor
            }), Object(d.a)({
                location: m.PageviewLocation.VideoManagerCollectionEditor,
                properties: function(e) {
                    return {
                        channel: e.match.params.creatorLogin
                    }
                },
                skip: function(e) {
                    return e.data.loading
                }
            }))(W);
        n.d(t, "CollectionManagerPage", function() {
            return U
        }), n.d(t, "CollectionEditorPage", function() {
            return Z
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
    MJPl: function(e, t) {},
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
    }
});
//# sourceMappingURL=pages.video-tools.pages.collection-manager-9b2ebc0429976e2f381045a3a8367ac5.js.map