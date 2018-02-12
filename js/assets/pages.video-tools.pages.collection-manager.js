webpackJsonp([75], {
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
            return l
        });
        var i = n("TToO"),
            o = n("U7vG"),
            r = (n.n(o), n("5kgt")),
            a = n("Odds"),
            l = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = o.createElement(a._1, {
                            alignItems: a.c.Center,
                            display: a.M.Flex,
                            fullHeight: !0,
                            justifyContent: a._0.Center,
                            padding: 2
                        }, o.createElement(a._23, {
                            icon: this.props.icon,
                            label: this.props.label,
                            value: this.props.value
                        })),
                        t = this.props.linkTo ? o.createElement(a.Z, {
                            alpha: !0,
                            linkTo: this.props.linkTo,
                            targetBlank: !0
                        }, e) : e;
                    return o.createElement(a._1, i.__assign({
                        display: a.M.InlineFlex,
                        fullHeight: !0
                    }, Object(r.a)(this.props)), t)
                }, t
            }(o.Component)
    },
    "Dk8+": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i, o = n("TToO"),
            r = n("U7vG"),
            a = n("3zLD"),
            l = n("6sO2"),
            c = n("zCIC"),
            s = n("j7/Y"),
            d = n("oIkB"),
            u = n("w9tK"),
            m = n("vH/s"),
            p = n("CSlQ"),
            g = n("Z8qZ"),
            h = n("PwTO"),
            k = n("N8CH"),
            v = n("Odds"),
            f = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(g.a, null, r.createElement(v._1, null, r.createElement(v._7, {
                        height: 75,
                        width: 133
                    })), r.createElement(k.a, null, r.createElement(v._34, null, r.createElement(v._7, {
                        width: 600,
                        lineCount: 1
                    }), r.createElement(v._7, {
                        width: 200,
                        lineCount: 1
                    }))), r.createElement(h.a, null, r.createElement(v._34, null, r.createElement(v._7, {
                        width: 40,
                        lineCount: 1
                    }))), r.createElement(v._1, {
                        flexGrow: 0,
                        flexShrink: 0
                    }, r.createElement(v._1, {
                        fullHeight: !0,
                        display: v.M.Flex,
                        alignItems: v.c.Center,
                        justifyContent: v._0.Center,
                        padding: 1
                    }, r.createElement(v._34, null, r.createElement(v._7, {
                        width: 20,
                        lineCount: 1
                    })))))
                }, t
            }(r.PureComponent),
            C = n("CIox"),
            _ = n("7vx8"),
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
                            return o.__awaiter(t, void 0, void 0, function() {
                                var e, t, n;
                                return o.__generator(this, function(i) {
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
                                            return n = i.sent(), l.i.error(n, "createCollection", {
                                                mutationInput: e
                                            }), this.setState({
                                                creationErrorMessage: Object(l.d)("Creation attempt failed. Please try again.", "CollectionCreator")
                                            }), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        })
                    }, t
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    var e = Object(l.d)("{currentLength} of {maxLength} characters.", {
                            currentLength: this.state.collectionTitle.length.toString(),
                            maxLength: 100..toString()
                        }, "CollectionCreator"),
                        t = null;
                    return 0 === this.state.creationErrorMessage.length && (t = r.createElement(v._1, {
                        visibility: this.state.collectionTitle.length > 0 ? v._50.Visible : v._50.Hidden,
                        "data-test-selector": "length-hint"
                    }, r.createElement(v._34, null, e))), r.createElement(v.R, {
                        error: this.state.creationErrorMessage.length > 0,
                        errorMessage: this.state.creationErrorMessage,
                        label: ""
                    }, r.createElement(v.T, null, r.createElement(v.J, {
                        cols: {
                            default: 3,
                            xl: 2
                        }
                    }, r.createElement(v.X, {
                        disabled: null === this.props.creatorID,
                        maxLength: 100,
                        onChange: this.onNameInputChangeHandler,
                        placeholder: Object(l.d)("Collection name", "CollectionCreator"),
                        type: v.Y.Text
                    }), t), r.createElement(v.J, {
                        cols: 3
                    }, r.createElement(v.u, {
                        disabled: null === this.props.creatorID || "" === this.state.collectionTitle,
                        onClick: this.onCreateButtonClickHandler
                    }, Object(l.d)("Create Collection", "CollectionCreator")))))
                }, t
            }(r.Component),
            E = Object(a.compose)(Object(_.a)(b, {
                name: "createCollection"
            }))(Object(C.e)(y)),
            S = n("RH2O"),
            D = n("V5M+"),
            N = n("mi6k"),
            O = n("KRtN"),
            M = n("4o7v"),
            I = n("1opg"),
            w = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onPreviewImageErrorHandler = function() {
                        t.props.latencyTracking.reportInteractive()
                    }, t.onPreviewImageLoadHandler = function() {
                        t.props.latencyTracking.reportInteractive()
                    }, t.onDeleteOptionClickHandler = function() {
                        t.props.onDeleteOptionClick(t.props.collection, t.props.creatorLogin)
                    }, t
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.collection,
                        t = null;
                    return this.props.hideOptionsMenu || (t = r.createElement(O.a, {
                        options: this.collectionMenuOptions()
                    })), r.createElement(g.a, null, r.createElement(v._1, {
                        flexGrow: 0,
                        flexShrink: 0
                    }, r.createElement(v.C, {
                        aspect: v.k.Aspect16x9,
                        src: e.thumbnailURL ? e.thumbnailURL : I.a,
                        alt: e.title,
                        onLoad: this.onPreviewImageLoadHandler,
                        onError: this.onPreviewImageErrorHandler,
                        size: v.D.Size16
                    })), r.createElement(k.a, null, r.createElement(v._34, {
                        bold: !0,
                        type: v._39.H5,
                        color: v.I.Alt
                    }, e.title), r.createElement(v._42, {
                        direction: v._44.Bottom,
                        label: Object(l.d)("Last Updated", "CollectionManagerCard")
                    }, r.createElement(v._34, {
                        color: v.I.Alt2
                    }, Object(l.c)(new Date(e.updatedAt), "long")))), r.createElement(h.a, null, this.collectionStats(e)), t)
                }, t.prototype.collectionMenuOptions = function() {
                    return [{
                        asset: v._15.Edit,
                        linkTo: {
                            pathname: "/" + this.props.creatorLogin + "/manager/collections/" + this.props.collection.id,
                            state: {
                                content: m.PageviewContent.CollectionCard,
                                medium: m.PageviewMedium.VideoManagerCollectionManager
                            }
                        },
                        title: Object(l.d)("Edit", "CollectionManagerCard")
                    }, {
                        asset: v._15.Trash,
                        onClick: this.onDeleteOptionClickHandler,
                        title: Object(l.d)("Delete", "CollectionManagerCard")
                    }]
                }, t.prototype.collectionStats = function(e) {
                    return [{
                        value: Object(N.a)(e.lengthSeconds),
                        icon: v._15.GlyphLength,
                        label: Object(l.d)("Collection length", "CollectionManagerCard")
                    }, {
                        value: "" + e.viewCount,
                        icon: v._15.GlyphViews,
                        label: Object(l.d)("Views", "CollectionManagerCard")
                    }].map(function(e, t) {
                        return r.createElement(M.a, o.__assign({
                            key: t
                        }, e))
                    })
                }, t
            }(r.Component),
            x = Object(p.d)("CollectionManagerCard")(w),
            j = n("2KeS"),
            T = n("+8VM");
        ! function(e) {
            e[e.CancelButton = 0] = "CancelButton", e[e.ConfirmButton = 1] = "ConfirmButton", e[e.ErrorAlert = 2] = "ErrorAlert"
        }(i || (i = {}));
        var F = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.collection,
                        t = null;
                    return this.props.error && (t = r.createElement(v.e, {
                        delay: v.f.Short,
                        type: v.i.BounceIn,
                        enabled: !0
                    }, r.createElement(v._24, {
                        border: !0,
                        margin: {
                            bottom: 1
                        },
                        padding: 1,
                        fullWidth: !0
                    }, r.createElement(v._34, {
                        bold: !0,
                        color: v.I.Error,
                        "data-test-selector": i.ErrorAlert
                    }, this.props.error)))), r.createElement(v.e, {
                        type: v.i.FadeIn,
                        delay: v.f.Medium,
                        duration: v.g.Medium,
                        enabled: !0
                    }, r.createElement(v._24, {
                        background: v.m.Base,
                        padding: {
                            x: 3,
                            top: 2,
                            bottom: 3
                        }
                    }, r.createElement(v.V, {
                        padding: {
                            bottom: 1
                        }
                    }, r.createElement(v._34, {
                        fontSize: v.Q.Size3
                    }, Object(l.d)("Delete Collection", "DeleteCollectionModal"))), r.createElement(v._34, {
                        fontSize: v.Q.Size6
                    }, Object(l.d)("Are you sure you want to delete this collection?", "DeleteCollectionModal")), r.createElement(v._34, {
                        fontSize: v.Q.Size6
                    }, Object(l.d)("This action cannot be undone. ", "DeleteCollectionModal")), r.createElement(v._1, {
                        padding: {
                            y: 2
                        }
                    }, r.createElement(q, {
                        collection: e,
                        creatorLogin: this.props.creatorLogin,
                        hideOptionsMenu: !0
                    })), t, r.createElement(v._1, {
                        display: v.M.Flex,
                        flexDirection: v.O.Row,
                        justifyContent: v._0.Center
                    }, r.createElement(v._1, {
                        margin: {
                            x: .5
                        }
                    }, r.createElement(v.u, {
                        "data-test-selector": i.CancelButton,
                        onClick: this.props.onCancel,
                        type: v.z.Hollow
                    }, Object(l.d)("Cancel", "DeleteCollectionModal"))), r.createElement(v._1, {
                        margin: {
                            x: .5
                        }
                    }, r.createElement(v.u, {
                        "data-test-selector": i.ConfirmButton,
                        onClick: this.props.onDelete,
                        type: v.z.Alert
                    }, Object(l.d)("Delete", "DeleteCollectionModal")))), r.createElement(T.a, null)))
                }, t
            }(r.Component),
            L = n("kL3X"),
            V = n("e6eF"),
            H = this,
            A = function(e) {
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
                                                deletionError: Object(l.d)("Unable to delete this collection, try again.", "DeleteCollectionModal")
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
                    return r.createElement(F, {
                        collection: this.props.collection,
                        creatorLogin: this.props.creatorLogin,
                        error: this.state.deletionError,
                        onCancel: this.onCancelHandler,
                        onDelete: this.onDeleteHandler
                    })
                }, t
            }(r.Component),
            P = Object(a.compose)(Object(_.a)(V, {
                name: "onDeleteRequest",
                props: function(e) {
                    return {
                        onDeleteRequest: function(t) {
                            return o.__awaiter(H, void 0, void 0, function() {
                                var n;
                                return o.__generator(this, function(i) {
                                    if (!e.mutate) throw n = new Error("No mutation function exists, cannot delete collection"), l.i.error(n, "DeleteCollectionModal"), n;
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
                                                                        query: L,
                                                                        variables: n
                                                                    });
                                                                i && i.user && i.user.collections && (i.user.collections.edges = i.user.collections.edges.filter(function(e) {
                                                                    return e.node.id !== t.collectionID
                                                                }), e.writeQuery({
                                                                    query: L,
                                                                    variables: n,
                                                                    data: i
                                                                }))
                                                            }
                                                        })];
                                                    case 1:
                                                        return i.sent(), [3, 3];
                                                    case 2:
                                                        throw n = i.sent(), l.i.error(n, "DeleteCollectionModal"), n;
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
            }))(A),
            R = Object(S.b)(null, function(e) {
                return Object(j.b)({
                    onClose: D.c
                }, e)
            })(P),
            q = Object(S.b)(null, function(e) {
                return {
                    onDeleteOptionClick: function(t, n) {
                        e(Object(D.d)(R, {
                            collection: t,
                            creatorLogin: n
                        }))
                    }
                }
            })(x),
            G = n("I9kX"),
            B = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return o.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
                    e.data.loading && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e, t = !1;
                    return this.props.data.loading ? e = this.collectionCardPlaceholders() : !this.props.data.error && this.props.data.user && this.props.data.user.collections ? this.props.data.user.collections.edges.length > 0 ? (e = this.renderCollections(this.props.data.user.collections.edges), t = this.props.data.user.collections.pageInfo.hasNextPage || !1) : e = this.noCollectionsCTA() : e = this.contentUnavaibleError(), r.createElement(c.b, null, r.createElement(v._1, {
                        fullHeight: !0,
                        padding: {
                            top: 2,
                            x: 2
                        }
                    }, r.createElement(v._1, {
                        padding: {
                            bottom: 2
                        }
                    }, r.createElement(v._34, {
                        type: v._39.H2
                    }, Object(l.d)("Collections", "CollectionManager"))), r.createElement(E, {
                        creatorID: this.props.data.user ? this.props.data.user.id : null,
                        creatorLogin: this.props.match.params.creatorLogin
                    }), r.createElement(v._1, {
                        fullWidth: !0,
                        padding: {
                            top: 2
                        }
                    }, e, r.createElement(c.a, {
                        enabled: t,
                        loadMore: this.props.loadMore
                    }))))
                }, t.prototype.renderCollections = function(e) {
                    var t = this;
                    return e.map(function(e, n) {
                        return r.createElement(v._1, {
                            key: n,
                            margin: {
                                bottom: 1
                            }
                        }, r.createElement(q, {
                            collection: e.node,
                            creatorLogin: t.props.match.params.creatorLogin
                        }))
                    })
                }, t.prototype.collectionCardPlaceholders = function() {
                    for (var e = [], t = 0; t < 3; t++) e.push(r.createElement(v._1, {
                        key: t,
                        margin: {
                            bottom: 1
                        }
                    }, r.createElement(f, null)));
                    return e
                }, t.prototype.noCollectionsCTA = function() {
                    return r.createElement("div", null)
                }, t.prototype.contentUnavaibleError = function() {
                    return r.createElement("div", null)
                }, t
            }(r.Component),
            U = Object(a.compose)(Object(a.graphql)(G, {
                options: function(e) {
                    return {
                        variables: {
                            creatorLogin: e.match.params.creatorLogin
                        }
                    }
                },
                props: function(e) {
                    return o.__assign({}, e, {
                        loadMore: function() {
                            var t = e.data.user && e.data.user.collections ? e.data.user.collections.edges : [],
                                n = t.length > 0 ? t[t.length - 1].cursor : void 0;
                            return e.data.fetchMore({
                                query: G,
                                variables: o.__assign({}, e.data.variables, {
                                    after: n
                                }),
                                updateQuery: function(e, t) {
                                    var n = t.fetchMoreResult;
                                    if (!n.user || !n.user.collections) return e;
                                    var i = e.user && e.user.collections ? e.user.collections.edges : [];
                                    return {
                                        user: o.__assign({}, n.user, {
                                            collections: o.__assign({}, n.user.collections, {
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
            }))(B),
            z = n("L2R7"),
            Q = function(e) {
                return window.location.replace("https://www.twitch.tv/" + encodeURIComponent(e.match.params.creatorLogin) + "/manager/collections"), null
            },
            $ = function(e) {
                return Object(z.a)() ? r.createElement(U, o.__assign({}, e)) : r.createElement(Q, o.__assign({}, e))
            };
        n.d(t, "CollectionManagerPage", function() {
            return $
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
                    value: "CollectionManager_CreatorCollections"
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
                end: 311
            }
        };
        n.loc.source = {
            body: "query CollectionManager_CreatorCollections($creatorLogin: String! $after: Cursor) {\nuser(login: $creatorLogin) {\nid\ncollections(first: 15 after: $after) {\nedges {\ncursor\nnode {\nid\nitems {\ntotalCount\n}\nlengthSeconds\nthumbnailURL(width: 160 height: 90)\ntitle\nupdatedAt\nviewCount\n}\n}\npageInfo {\nhasNextPage\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    KRtN: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            o = n("U7vG"),
            r = n("rCmJ"),
            a = n("Odds"),
            l = function(e) {
                var t = e.asset ? o.createElement(a._14, {
                    asset: e.asset
                }) : null;
                return o.createElement(a.Z, {
                    linkTo: e.linkTo,
                    onClick: e.onClick
                }, o.createElement(a._1, {
                    alignItems: a.c.Center,
                    display: a.M.Flex,
                    flexGrow: 1,
                    padding: 1
                }, t, o.createElement(a.V, {
                    margin: {
                        left: 1
                    }
                }, o.createElement(a._34, null, e.title))))
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
                return this.state.showDropMenu && (e = this.dropMenu()), o.createElement(a._1, {
                    flexGrow: 0,
                    flexShrink: 0,
                    display: a.M.Flex,
                    position: a._8.Relative
                }, o.createElement(a.V, {
                    fullHeight: !0
                }, o.createElement(r.a, {
                    onClickOut: this.clickOutHandler
                }, o.createElement(a._1, {
                    fullHeight: !0,
                    display: a.M.Flex,
                    alignItems: a.c.Stretch
                }, o.createElement(a.u, {
                    disabled: 0 === this.props.options.length,
                    icon: a._15.More,
                    onClick: this.menuButtonClickHandler,
                    type: a.z.Text
                })), e)))
            }, t.prototype.dropMenu = function() {
                var e = this.props.options.map(function(e, t) {
                    return o.createElement(l, i.__assign({
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
    N8CH: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
        });
        var i = n("U7vG"),
            o = (n.n(i), n("Odds")),
            r = function(e) {
                return i.createElement(o._1, {
                    alignItems: o.c.Start,
                    display: o.M.Flex,
                    flexDirection: o.O.Column,
                    flexGrow: 1,
                    flexShrink: 1,
                    justifyContent: o._0.Center,
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
            r = n("QmYP"),
            a = (n.n(r), function(e) {
                return i.createElement(o._1, {
                    className: "manager-card__stats-container",
                    display: o.M.Flex,
                    flexGrow: 0,
                    flexShrink: 0,
                    flexWrap: o.P.NoWrap,
                    flexDirection: o.O.Row,
                    alignItems: o.c.Center
                }, e.children)
            })
    },
    QmYP: function(e, t) {},
    Z8qZ: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            o = n("U7vG"),
            r = n("Odds"),
            a = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return o.createElement(r._24, {
                        background: r.m.Base,
                        elevation: 1,
                        display: r.M.Flex,
                        flexDirection: r.O.Row,
                        alignItems: r.c.Stretch
                    }, this.props.children)
                }, t
            }(o.Component);
        n.d(t, "a", function() {
            return a
        })
    },
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
    }
});
//# sourceMappingURL=pages.video-tools.pages.collection-manager-737d5dbc9a0bd9e089269d5b724bcda4.js.map