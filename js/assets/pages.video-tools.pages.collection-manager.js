webpackJsonp([79], {
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
    "4o7v": function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return l
        });
        var i = n("TToO"),
            o = n("U7vG"),
            a = (n.n(o), n("5kgt")),
            r = n("Odds"),
            l = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = o.createElement(r._2, {
                            alignItems: r.c.Center,
                            display: r.N.Flex,
                            fullHeight: !0,
                            justifyContent: r._1.Center,
                            padding: 2
                        }, o.createElement(r._24, {
                            icon: this.props.icon,
                            label: this.props.label,
                            value: this.props.value
                        })),
                        t = this.props.linkTo ? o.createElement(r._0, {
                            alpha: !0,
                            linkTo: this.props.linkTo,
                            targetBlank: !0
                        }, e) : e;
                    return o.createElement(r._2, i.__assign({
                        display: r.N.InlineFlex,
                        fullHeight: !0
                    }, Object(a.a)(this.props)), t)
                }, t
            }(o.Component)
    },
    "Dk8+": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i, o = n("TToO"),
            a = n("U7vG"),
            r = n("3zLD"),
            l = n("6sO2"),
            c = n("zCIC"),
            s = n("j7/Y"),
            d = n("oIkB"),
            u = n("w9tK"),
            m = n("vH/s"),
            p = n("CSlQ"),
            g = n("Z8qZ"),
            k = n("PwTO"),
            h = n("N8CH"),
            v = n("Odds"),
            f = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(g.a, null, a.createElement(v._2, null, a.createElement(v._8, {
                        height: 75,
                        width: 133
                    })), a.createElement(h.a, null, a.createElement(v._35, null, a.createElement(v._8, {
                        width: 600,
                        lineCount: 1
                    }), a.createElement(v._8, {
                        width: 200,
                        lineCount: 1
                    }))), a.createElement(k.a, null, a.createElement(v._35, null, a.createElement(v._8, {
                        width: 40,
                        lineCount: 1
                    }))), a.createElement(v._2, {
                        flexGrow: 0,
                        flexShrink: 0
                    }, a.createElement(v._2, {
                        fullHeight: !0,
                        display: v.N.Flex,
                        alignItems: v.c.Center,
                        justifyContent: v._1.Center,
                        padding: 1
                    }, a.createElement(v._35, null, a.createElement(v._8, {
                        width: 20,
                        lineCount: 1
                    })))))
                }, t
            }(a.PureComponent),
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
                    return 0 === this.state.creationErrorMessage.length && (t = a.createElement(v._2, {
                        visibility: this.state.collectionTitle.length > 0 ? v._51.Visible : v._51.Hidden,
                        "data-test-selector": "length-hint"
                    }, a.createElement(v._35, null, e))), a.createElement(v.S, {
                        error: this.state.creationErrorMessage.length > 0,
                        errorMessage: this.state.creationErrorMessage,
                        label: ""
                    }, a.createElement(v.U, null, a.createElement(v.J, {
                        cols: {
                            default: 3,
                            xl: 2
                        }
                    }, a.createElement(v.Y, {
                        disabled: null === this.props.creatorID,
                        maxLength: 100,
                        onChange: this.onNameInputChangeHandler,
                        placeholder: Object(l.d)("Collection name", "CollectionCreator"),
                        type: v.Z.Text
                    }), t), a.createElement(v.J, {
                        cols: 3
                    }, a.createElement(v.u, {
                        disabled: null === this.props.creatorID || "" === this.state.collectionTitle,
                        onClick: this.onCreateButtonClickHandler
                    }, Object(l.d)("Create Collection", "CollectionCreator")))))
                }, t
            }(a.Component),
            E = Object(r.compose)(Object(_.a)(b, {
                name: "createCollection"
            }))(Object(C.e)(y)),
            N = n("RH2O"),
            S = n("V5M+"),
            D = n("mi6k"),
            O = n("kk4f"),
            M = n("KRtN"),
            I = n("4o7v"),
            w = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onDeleteOptionClickHandler = function() {
                        t.props.onDeleteOptionClick(t.props.collection, t.props.creatorLogin)
                    }, t
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.collection,
                        t = null;
                    return this.props.hideOptionsMenu || (t = a.createElement(M.a, {
                        options: this.collectionMenuOptions()
                    })), a.createElement(g.a, null, a.createElement(v._2, {
                        flexShrink: 0
                    }, a.createElement(O.a, {
                        alt: e.title,
                        sizes: [{
                            size: "160px"
                        }],
                        src: e.thumbnailURL,
                        videoCount: e.items.totalCount
                    })), a.createElement(h.a, null, a.createElement(v._35, {
                        bold: !0,
                        type: v._40.H4,
                        color: v.I.Alt
                    }, e.title), a.createElement(v._43, {
                        direction: v._45.Bottom,
                        label: Object(l.d)("Last Updated", "CollectionManagerCard")
                    }, a.createElement(v._35, {
                        color: v.I.Alt2
                    }, Object(l.c)(new Date(e.updatedAt), "long")))), a.createElement(k.a, null, this.collectionStats(e)), t)
                }, t.prototype.collectionMenuOptions = function() {
                    return [{
                        asset: v._16.Edit,
                        linkTo: {
                            pathname: "/" + this.props.creatorLogin + "/manager/collections/" + this.props.collection.id,
                            state: {
                                content: m.PageviewContent.CollectionCard,
                                medium: m.PageviewMedium.VideoManagerCollectionManager
                            }
                        },
                        title: Object(l.d)("Edit", "CollectionManagerCard")
                    }, {
                        asset: v._16.Trash,
                        onClick: this.onDeleteOptionClickHandler,
                        title: Object(l.d)("Delete", "CollectionManagerCard")
                    }]
                }, t.prototype.collectionStats = function(e) {
                    return [{
                        value: Object(D.a)(e.lengthSeconds),
                        icon: v._16.GlyphLength,
                        label: Object(l.d)("Collection length", "CollectionManagerCard")
                    }, {
                        value: "" + e.viewCount,
                        icon: v._16.GlyphViews,
                        label: Object(l.d)("Views", "CollectionManagerCard")
                    }].map(function(e, t) {
                        return a.createElement(I.a, o.__assign({
                            key: t
                        }, e))
                    })
                }, t
            }(a.Component),
            x = Object(p.d)("CollectionManagerCard", {
                autoReportInteractive: !0
            })(w),
            j = n("2KeS"),
            F = n("+8VM");
        ! function(e) {
            e[e.CancelButton = 0] = "CancelButton", e[e.ConfirmButton = 1] = "ConfirmButton", e[e.ErrorAlert = 2] = "ErrorAlert"
        }(i || (i = {}));
        var T = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.collection,
                        t = null;
                    return this.props.error && (t = a.createElement(v.e, {
                        delay: v.f.Short,
                        type: v.i.BounceIn,
                        enabled: !0
                    }, a.createElement(v._25, {
                        border: !0,
                        margin: {
                            bottom: 1
                        },
                        padding: 1,
                        fullWidth: !0
                    }, a.createElement(v._35, {
                        bold: !0,
                        color: v.I.Error,
                        "data-test-selector": i.ErrorAlert
                    }, this.props.error)))), a.createElement(v.e, {
                        type: v.i.FadeIn,
                        delay: v.f.Medium,
                        duration: v.g.Medium,
                        enabled: !0
                    }, a.createElement(v._25, {
                        background: v.m.Base,
                        padding: {
                            x: 3,
                            top: 2,
                            bottom: 3
                        }
                    }, a.createElement(v.W, {
                        padding: {
                            bottom: 1
                        }
                    }, a.createElement(v._35, {
                        fontSize: v.R.Size3
                    }, Object(l.d)("Delete Collection", "DeleteCollectionModal"))), a.createElement(v._35, {
                        fontSize: v.R.Size6
                    }, Object(l.d)("Are you sure you want to delete this collection?", "DeleteCollectionModal")), a.createElement(v._35, {
                        fontSize: v.R.Size6
                    }, Object(l.d)("This action cannot be undone. ", "DeleteCollectionModal")), a.createElement(v._2, {
                        padding: {
                            y: 2
                        }
                    }, a.createElement(q, {
                        collection: e,
                        creatorLogin: this.props.creatorLogin,
                        hideOptionsMenu: !0
                    })), t, a.createElement(v._2, {
                        display: v.N.Flex,
                        flexDirection: v.P.Row,
                        justifyContent: v._1.Center
                    }, a.createElement(v._2, {
                        margin: {
                            x: .5
                        }
                    }, a.createElement(v.u, {
                        "data-test-selector": i.CancelButton,
                        onClick: this.props.onCancel,
                        type: v.z.Hollow
                    }, Object(l.d)("Cancel", "DeleteCollectionModal"))), a.createElement(v._2, {
                        margin: {
                            x: .5
                        }
                    }, a.createElement(v.u, {
                        "data-test-selector": i.ConfirmButton,
                        onClick: this.props.onDelete,
                        type: v.z.Alert
                    }, Object(l.d)("Delete", "DeleteCollectionModal")))), a.createElement(F.a, null)))
                }, t
            }(a.Component),
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
                    return a.createElement(T, {
                        collection: this.props.collection,
                        creatorLogin: this.props.creatorLogin,
                        error: this.state.deletionError,
                        onCancel: this.onCancelHandler,
                        onDelete: this.onDeleteHandler
                    })
                }, t
            }(a.Component),
            R = Object(r.compose)(Object(_.a)(V, {
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
            P = Object(N.b)(null, function(e) {
                return Object(j.b)({
                    onClose: S.c
                }, e)
            })(R),
            q = Object(N.b)(null, function(e) {
                return {
                    onDeleteOptionClick: function(t, n) {
                        e(Object(S.d)(P, {
                            collection: t,
                            creatorLogin: n
                        }))
                    }
                }
            })(x),
            B = n("I9kX"),
            G = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return o.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
                    e.data.loading && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e, t = !1;
                    return this.props.data.loading ? e = this.collectionCardPlaceholders() : !this.props.data.error && this.props.data.user && this.props.data.user.collections ? this.props.data.user.collections.edges.length > 0 ? (e = this.renderCollections(this.props.data.user.collections.edges), t = this.props.data.user.collections.pageInfo.hasNextPage || !1) : e = this.noCollectionsCTA() : e = this.contentUnavaibleError(), a.createElement(c.b, null, a.createElement(v._2, {
                        fullHeight: !0,
                        padding: {
                            top: 2,
                            x: 2
                        }
                    }, a.createElement(v._2, {
                        padding: {
                            bottom: 2
                        }
                    }, a.createElement(v._35, {
                        type: v._40.H2
                    }, Object(l.d)("Collections", "CollectionManager"))), a.createElement(E, {
                        creatorID: this.props.data.user ? this.props.data.user.id : null,
                        creatorLogin: this.props.match.params.creatorLogin
                    }), a.createElement(v._2, {
                        fullWidth: !0,
                        padding: {
                            top: 2
                        }
                    }, e, a.createElement(c.a, {
                        enabled: t,
                        loadMore: this.props.loadMore
                    }))))
                }, t.prototype.renderCollections = function(e) {
                    var t = this;
                    return e.map(function(e, n) {
                        return a.createElement(v._2, {
                            key: n,
                            margin: {
                                bottom: 1
                            }
                        }, a.createElement(q, {
                            collection: e.node,
                            creatorLogin: t.props.match.params.creatorLogin
                        }))
                    })
                }, t.prototype.collectionCardPlaceholders = function() {
                    for (var e = [], t = 0; t < 3; t++) e.push(a.createElement(v._2, {
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
            U = Object(r.compose)(Object(r.graphql)(B, {
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
                                query: B,
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
            }))(G),
            z = n("L2R7"),
            $ = function(e) {
                return window.location.replace("https://www.twitch.tv/" + encodeURIComponent(e.match.params.creatorLogin) + "/manager/collections"), null
            },
            Q = function(e) {
                return Object(z.a)() ? a.createElement(U, o.__assign({}, e)) : a.createElement($, o.__assign({}, e))
            };
        n.d(t, "CollectionManagerPage", function() {
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
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "options"
                                    },
                                    value: {
                                        kind: "ObjectValue",
                                        fields: [{
                                            kind: "ObjectField",
                                            name: {
                                                kind: "Name",
                                                value: "includeEmpty"
                                            },
                                            value: {
                                                kind: "BooleanValue",
                                                value: !0
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
                end: 343
            }
        };
        n.loc.source = {
            body: "query CollectionManager_CreatorCollections($creatorLogin: String! $after: Cursor) {\nuser(login: $creatorLogin) {\nid\ncollections(first: 15 after: $after options: { includeEmpty: true }) {\nedges {\ncursor\nnode {\nid\nitems {\ntotalCount\n}\nlengthSeconds\nthumbnailURL(width: 160 height: 90)\ntitle\nupdatedAt\nviewCount\n}\n}\npageInfo {\nhasNextPage\n}\n}\n}\n}",
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
            a = n("rCmJ"),
            r = n("Odds"),
            l = function(e) {
                var t = e.asset ? o.createElement(r._15, {
                    asset: e.asset
                }) : null;
                return o.createElement(r._0, {
                    linkTo: e.linkTo,
                    onClick: e.onClick
                }, o.createElement(r._2, {
                    alignItems: r.c.Center,
                    display: r.N.Flex,
                    flexGrow: 1,
                    padding: 1
                }, t, o.createElement(r.W, {
                    margin: {
                        left: 1
                    }
                }, o.createElement(r._35, null, e.title))))
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
                return this.state.showDropMenu && (e = this.dropMenu()), o.createElement(r._2, {
                    flexGrow: 0,
                    flexShrink: 0,
                    display: r.N.Flex,
                    position: r._9.Relative
                }, o.createElement(r.W, {
                    fullHeight: !0
                }, o.createElement(a.a, {
                    onClickOut: this.clickOutHandler
                }, o.createElement(r._2, {
                    fullHeight: !0,
                    display: r.N.Flex,
                    alignItems: r.c.Stretch
                }, o.createElement(r.u, {
                    disabled: 0 === this.props.options.length,
                    icon: r._16.More,
                    onClick: this.menuButtonClickHandler,
                    type: r.z.Text
                })), e)))
            }, t.prototype.dropMenu = function() {
                var e = this.props.options.map(function(e, t) {
                    return o.createElement(l, i.__assign({
                        key: t
                    }, e))
                });
                return o.createElement(r.p, {
                    size: r.r.Small,
                    direction: r.q.BottomRight,
                    noTail: !0,
                    show: !0
                }, e)
            }, t
        }(o.Component)
    },
    N8CH: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        });
        var i = n("U7vG"),
            o = (n.n(i), n("Odds")),
            a = function(e) {
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
            return r
        });
        var i = n("U7vG"),
            o = (n.n(i), n("Odds")),
            a = n("QmYP"),
            r = (n.n(a), function(e) {
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
            o = n("U7vG"),
            a = n("Odds"),
            r = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return o.createElement(a._25, {
                        background: a.m.Base,
                        elevation: 1,
                        display: a.N.Flex,
                        flexDirection: a.P.Row,
                        alignItems: a.c.Stretch
                    }, this.props.children)
                }, t
            }(o.Component);
        n.d(t, "a", function() {
            return r
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
//# sourceMappingURL=pages.video-tools.pages.collection-manager-28bc01fd861ec05d67524b973ba24c9e.js.map