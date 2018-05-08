webpackJsonp([109], {
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
                            value: "input"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "CreateCollectionInput"
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
                                value: "input"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "input"
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
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "title"
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
                end: 139
            }
        };
        n.loc.source = {
            body: "mutation CollectionManager_CreateCollection($input: CreateCollectionInput!) {\ncreateCollection(input: $input) {\ncollection {\nid\ntitle\n}\n}\n}",
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
            o = n("GiK3"),
            r = (n.n(o), n("5kgt")),
            a = n("Odds"),
            l = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = o.createElement(a._8, {
                            alignItems: a.c.Center,
                            display: a.R.Flex,
                            fullHeight: !0,
                            justifyContent: a._7.Center,
                            padding: 2
                        }, o.createElement(a._34, {
                            icon: this.props.icon,
                            label: this.props.label,
                            value: this.props.value
                        })),
                        t = this.props.linkTo ? o.createElement(a._6, {
                            alpha: !0,
                            linkTo: this.props.linkTo,
                            targetBlank: !0
                        }, e) : e;
                    return o.createElement(a._8, i.__assign({
                        display: a.R.InlineFlex,
                        fullHeight: !0
                    }, Object(r.a)(this.props)), t)
                }, t
            }(o.Component)
    },
    B9Px: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            o = n("6sO2"),
            r = n("jXn2"),
            a = n("9u8h"),
            l = n("Aj/L"),
            c = n("O8Ns"),
            s = n("dL0Y");

        function d(e) {
            return function(t, n) {
                return e({
                    store: {
                        dispatch: t,
                        getState: n
                    }
                })
            }
        }
        n.d(t, "a", function() {
            return u
        }), n.d(t, "b", function() {
            return p
        }), n.d(t, "c", function() {
            return m
        }), t.e = function(e, t) {
            var n = this;
            return d(function(r) {
                return i.__awaiter(n, void 0, void 0, function() {
                    var n, l, s;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return i.trys.push([0, 3, , 4]), [4, a.a.getOrThrow("/v5/channels/" + e + "/collections/?limit=100")];
                            case 1:
                                return n = i.sent(), r.store.dispatch({
                                    type: u,
                                    collections: Object(c.c)(n.body)
                                }), [4, a.a.getOrThrow("/v5/channels/" + e + "/collections/?limit=100&containing_item=" + c.a.Video + ":" + t)];
                            case 2:
                                return l = i.sent(), r.store.dispatch({
                                    type: p,
                                    containingCollections: Object(c.c)(l.body),
                                    videoID: t
                                }), [3, 4];
                            case 3:
                                return s = i.sent(), o.j.error(s, "Failed to fetch collections"), r.store.dispatch({
                                    type: m,
                                    errorType: "Fetch Failed",
                                    errorMessage: "Fetching collections for channel " + e + " and video " + t + " failed."
                                }), [3, 4];
                            case 4:
                                return [2]
                        }
                    })
                })
            })
        }, t.d = function(e, t, n) {
            var a = this;
            return d(function(s) {
                return i.__awaiter(a, void 0, void 0, function() {
                    var a, d, m, f, v, C, k, b;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                a = s.store.getState(), d = a.collections, m = Object(l.c)(a), f = m ? m.id : "", i.label = 1;
                            case 1:
                                return i.trys.push([1, 4, , 5]), [4, g("/v5/channels/" + e + "/collections/", {
                                    title: t
                                })];
                            case 2:
                                return v = i.sent(), C = Object(c.b)(v.body), d.collections = [C].concat(d.collections), s.store.dispatch({
                                    type: u,
                                    collections: d.collections
                                }), Object(r.b)({
                                    channelID: e,
                                    playlistID: C.id,
                                    userID: f,
                                    title: C.title
                                }), k = {
                                    type: c.a.Video,
                                    id: n
                                }, [4, g("/v5/collections/" + C.id + "/items", k)];
                            case 3:
                                return i.sent(), d.containingCollections = [C].concat(d.containingCollections), s.store.dispatch({
                                    type: p,
                                    containingCollections: d.containingCollections,
                                    videoID: n
                                }), Object(r.a)({
                                    channelID: e,
                                    itemID: n,
                                    itemPosition: -1,
                                    itemType: c.a.Video,
                                    playlistID: C.id,
                                    userID: f
                                }), [3, 5];
                            case 4:
                                return b = i.sent(), o.j.error(b, "Failed to add new collection with video"), s.store.dispatch({
                                    type: h,
                                    errorType: "Create Failed",
                                    errorMessage: "Creating collections for channel " + e + " and video " + n + " with title " + t + "."
                                }), [3, 5];
                            case 5:
                                return [2]
                        }
                    })
                })
            })
        }, t.f = function(e, t, n) {
            var u = this;
            return d(function(d) {
                return i.__awaiter(u, void 0, void 0, function() {
                    var u, m, h, v, C, k, b, _, y;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                u = d.store.getState(), m = Object(s.a)(u), h = Object(l.c)(u), v = h ? h.id : "", i.label = 1;
                            case 1:
                                return i.trys.push([1, 6, , 7]), m.map(function(e) {
                                    return e.id
                                }).includes(e.id) ? (C = JSON.stringify({
                                    type: c.a.Video,
                                    id: t
                                }), k = btoa(C), [4, a.a.deleteOrThrow("/v5/collections/" + e.id + "/items/" + k)]) : [3, 3];
                            case 2:
                                return i.sent(), _ = m.filter(function(t) {
                                    return t.id !== e.id
                                }), d.store.dispatch({
                                    type: p,
                                    containingCollections: _,
                                    videoID: t
                                }), Object(r.c)({
                                    channelID: n,
                                    itemID: t,
                                    itemPosition: -1,
                                    itemType: c.a.Video,
                                    playlistID: e.id,
                                    userID: v
                                }), [3, 5];
                            case 3:
                                return b = {
                                    type: c.a.Video,
                                    id: t
                                }, [4, g("/v5/collections/" + e.id + "/items", b)];
                            case 4:
                                i.sent(), _ = m.concat([e]), d.store.dispatch({
                                    type: p,
                                    containingCollections: _,
                                    videoID: t
                                }), Object(r.a)({
                                    channelID: n,
                                    itemID: t,
                                    itemPosition: -1,
                                    itemType: c.a.Video,
                                    playlistID: e.id,
                                    userID: v
                                }), i.label = 5;
                            case 5:
                                return [3, 7];
                            case 6:
                                return y = i.sent(), o.j.error(y, "Failed to fetch collections"), d.store.dispatch({
                                    type: f,
                                    errorType: "Update Failed",
                                    errorMessage: "Updating collection " + e.id + " for channel " + n + " and video " + t + " failed."
                                }), [3, 7];
                            case 7:
                                return [2]
                        }
                    })
                })
            })
        };
        var u = "collections.COLLECTIONS_FETCHED",
            p = "collections.COLLECTIONS_FETCHED_FOR_VIDEO_ID",
            m = "collections.COLLECTIONS_FETCH_FAILED",
            h = "collections.COLLECTIONS_CREATE_FAILED",
            f = "collections.COLLECTIONS_UPDATE_FAILED";
        var g = function(e, t) {
            return a.a.postOrThrow(e, {
                body: t
            })
        }
    },
    "Dk8+": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i, o = n("TToO"),
            r = n("GiK3"),
            a = n("6sO2"),
            l = n("yWCw"),
            c = n("Snvs"),
            s = n("3zLD"),
            d = n("zCIC"),
            u = n("j7/Y"),
            p = n("oIkB"),
            m = n("w9tK"),
            h = n("vH/s"),
            f = n("CSlQ"),
            g = n("Z8qZ"),
            v = n("PwTO"),
            C = n("N8CH"),
            k = n("Odds"),
            b = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(g.a, null, r.createElement(k._8, null, r.createElement(k._14, {
                        height: 75,
                        width: 133
                    })), r.createElement(C.a, {
                        onClick: this.noOp
                    }, r.createElement(k.Q, null, r.createElement(k._14, {
                        width: 600,
                        lineCount: 1
                    }), r.createElement(k._14, {
                        width: 200,
                        lineCount: 1
                    }))), r.createElement(v.a, null, r.createElement(k.Q, null, r.createElement(k._14, {
                        width: 40,
                        lineCount: 1
                    }))), r.createElement(k._8, {
                        flexGrow: 0,
                        flexShrink: 0
                    }, r.createElement(k._8, {
                        fullHeight: !0,
                        display: k.R.Flex,
                        alignItems: k.c.Center,
                        justifyContent: k._7.Center,
                        padding: 1
                    }, r.createElement(k.Q, null, r.createElement(k._14, {
                        width: 20,
                        lineCount: 1
                    })))))
                }, t.prototype.noOp = function() {}, t
            }(r.PureComponent),
            _ = n("CIox"),
            y = n("7vx8"),
            E = n("jXn2"),
            O = n("F0UT"),
            S = n("1myv"),
            D = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        creationErrorMessage: ""
                    }, t.defaultCreationError = Object(a.d)("Creation attempt failed. Please try again.", "CollectionCreator"), t.onCreateButtonClickHandler = function(e) {
                        t.setState({
                            creationErrorMessage: ""
                        }, function() {
                            return o.__awaiter(t, void 0, void 0, function() {
                                var t, n, i, r, l, c, s, d;
                                return o.__generator(this, function(o) {
                                    switch (o.label) {
                                        case 0:
                                            if (!this.props.context) return a.j.error(new Error("Collection creation attempt occurred without valid creation context"), "CreateCollection"), this.setState({
                                                creationErrorMessage: this.defaultCreationError
                                            }), [2];
                                            t = this.props.context, n = t.ownerID, i = t.ownerLogin, r = t.sessionUserID, l = Object(p.a)({
                                                ownerID: n,
                                                title: e
                                            }), o.label = 1;
                                        case 1:
                                            return o.trys.push([1, 3, , 4]), [4, this.props.createCollection(l)];
                                        case 2:
                                            return c = o.sent().data, s = c.createCollection.collection, Object(E.b)({
                                                channelID: n,
                                                playlistID: s.id,
                                                userID: r,
                                                title: s.title
                                            }), this.props.history.push("/" + i + "/manager/collections/" + s.id, {
                                                content: h.PageviewContent.CollectionCreator,
                                                medium: h.PageviewMedium.VideoManagerCollectionManager
                                            }), this.props.onAdd(), [3, 4];
                                        case 3:
                                            return d = o.sent(), a.j.error(d, "CreateCollection", {
                                                mutationInput: l
                                            }), this.setState({
                                                creationErrorMessage: this.defaultCreationError
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
                    return r.createElement(k.Y, null, r.createElement(k.L, {
                        cols: 4
                    }, r.createElement(O.a, {
                        disabled: !this.props.context,
                        onSubmit: this.onCreateButtonClickHandler,
                        callToAction: Object(a.d)("Create Collection", "CollectionCreator"),
                        errorMessage: this.state.creationErrorMessage
                    })))
                }, t
            }(r.Component),
            T = Object(s.compose)(Object(y.a)(S, {
                name: "createCollection"
            }))(Object(_.f)(D)),
            w = n("rvrg"),
            I = n("I9kX");
        ! function(e) {
            e.CollectionsUnavailableError = "CollectionsUnavailableError", e.CreateCollection = "CreateCollection", e.noCollectionsCTA = "noCollectionsCTA"
        }(i || (i = {}));
        var N = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.refetchCreatorCollection = function() {
                        t.props.data.refetch({
                            creatorLogin: t.props.match.params.creatorLogin
                        })
                    }, t
                }
                return o.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
                    e.data.loading && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e, t = !1;
                    return this.props.data.loading ? e = this.collectionCardPlaceholders() : !this.props.data.error && this.props.data.user && this.props.data.user.collections ? this.props.data.user.collections.edges.length > 0 ? (e = this.renderCollections(this.props.data.user.collections.edges), t = this.props.data.user.collections.pageInfo.hasNextPage || !1) : e = this.noCollectionsCTA() : e = this.contentUnavaibleError(), r.createElement(d.b, null, r.createElement(k._8, {
                        fullHeight: !0,
                        padding: {
                            top: 2,
                            x: 2
                        },
                        margin: {
                            bottom: 5
                        }
                    }, r.createElement(k._8, {
                        padding: {
                            bottom: 2
                        }
                    }, r.createElement(k.Q, {
                        type: k._49.H2
                    }, Object(a.d)("Collections", "CollectionManager"))), r.createElement(T, {
                        context: this.props.data.user && this.props.data.currentUser ? {
                            ownerID: this.props.data.user.id,
                            ownerLogin: this.props.match.params.creatorLogin,
                            sessionUserID: this.props.data.currentUser.id
                        } : void 0,
                        onAdd: this.refetchCreatorCollection
                    }), r.createElement(k._8, {
                        fullWidth: !0,
                        padding: {
                            top: 2
                        },
                        margin: {
                            bottom: 5
                        }
                    }, e, r.createElement(d.a, {
                        enabled: t,
                        loadMore: this.props.loadMore
                    }))))
                }, t.prototype.renderCollections = function(e) {
                    var t = this;
                    return e.map(function(e, n) {
                        return r.createElement(k._8, {
                            key: n,
                            margin: {
                                bottom: 1
                            }
                        }, r.createElement(w.a, {
                            collection: e.node,
                            onDelete: t.refetchCreatorCollection
                        }))
                    })
                }, t.prototype.collectionCardPlaceholders = function() {
                    for (var e = [], t = 0; t < 3; t++) e.push(r.createElement(k._8, {
                        key: t,
                        margin: {
                            bottom: 1
                        }
                    }, r.createElement(b, null)));
                    return e
                }, t.prototype.noCollectionsCTA = function() {
                    return r.createElement(k._8, {
                        alignItems: k.c.Center,
                        "data-test-selector": i.noCollectionsCTA,
                        display: k.R.Flex,
                        flexDirection: k.T.Column,
                        justifyContent: k._7.Center,
                        margin: {
                            top: 5
                        }
                    }, r.createElement(k.Q, {
                        type: k._49.H4
                    }, Object(a.d)("Put all your best videos in one spot.", "CollectionManager")), r.createElement(k.Q, {
                        type: k._49.H4
                    }, Object(a.d)("Videos organized into collections help your viewers easily find related content.", "CollectionManager")), r.createElement(k.Q, {
                        type: k._49.H4
                    }, Object(a.d)("Your most recently updated Collection will be featured at the top of channel’s video page.", "CollectionManager")))
                }, t.prototype.contentUnavaibleError = function() {
                    return r.createElement(k._8, {
                        "data-test-selector": i.CollectionsUnavailableError
                    }, Object(a.d)("Something went wrong loading your collections. Please try again.", "CollectionEditorPagePresentation"))
                }, t
            }(r.Component),
            j = Object(s.compose)(Object(s.graphql)(I, {
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
                                query: I,
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
                                                edges: Object(p.c)(i, n.user.collections.edges)
                                            })
                                        }),
                                        currentUser: e.currentUser
                                    }
                                }
                            })
                        }
                    })
                }
            }), Object(f.d)("CollectionManagerPage", {
                destination: m.a.VideoManagerCollectionsManager
            }), Object(u.a)({
                location: h.PageviewLocation.VideoManagerCollectionManager,
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
            x = function(e) {
                return r.createElement(c.a, {
                    ownerLogin: e.match.params.creatorLogin,
                    permittedRoles: {
                        editor: !0,
                        staff: !0
                    }
                }, function(t) {
                    var n = t.loading,
                        i = t.permitted;
                    return n || i ? r.createElement(j, o.__assign({}, e)) : r.createElement(l.a, {
                        message: Object(a.d)("Something went wrong. Please try again.", "CollectionManagerPage")
                    })
                })
            },
            F = n("L2R7"),
            L = function(e) {
                return window.location.replace("https://www.twitch.tv/" + encodeURIComponent(e.match.params.creatorLogin) + "/manager/collections"), null
            },
            M = function(e) {
                return Object(F.a)() ? r.createElement(x, o.__assign({}, e)) : r.createElement(L, o.__assign({}, e))
            };
        n.d(t, "CollectionManagerPage", function() {
            return M
        })
    },
    F0UT: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return d
        });
        var i, o = n("TToO"),
            r = n("GiK3"),
            a = (n.n(r), n("6sO2")),
            l = n("6BvN"),
            c = n("Odds"),
            s = String.fromCharCode(160);
        ! function(e) {
            e.SubmitButton = "SubmitButton", e.TitleInput = "TitleInput"
        }(i || (i = {}));
        var d = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.state = {
                    collectionTitle: "",
                    localTitleChanges: !1
                }, t.onNameInputChange = function(e) {
                    t.setState({
                        collectionTitle: e.currentTarget.value,
                        localTitleChanges: !0
                    })
                }, t.onSubmit = function() {
                    t.setState({
                        localTitleChanges: !1
                    }, function() {
                        return t.props.onSubmit(t.state.collectionTitle)
                    })
                }, t.onKeyDown = function(e) {
                    e.keyCode === l.a.Enter && t.canSaveTitle() && t.onSubmit()
                }, t
            }
            return o.__extends(t, e), t.prototype.render = function() {
                var e = Object(a.d)("{currentLength} of {maxLength} characters.", {
                        currentLength: this.state.collectionTitle.length.toString(),
                        maxLength: 100..toString()
                    }, "CollectionCreator"),
                    t = "";
                return !this.state.localTitleChanges && this.props.errorMessage.length > 0 && (t = this.props.errorMessage), r.createElement(c.W, {
                    hint: this.state.collectionTitle.length > 0 ? e : s,
                    error: t.length > 0,
                    errorMessage: t,
                    label: ""
                }, r.createElement(c.Y, null, r.createElement(c.L, {
                    cols: {
                        default: 6,
                        xl: 4
                    }
                }, r.createElement(c._4, {
                    "data-test-selector": i.TitleInput,
                    defaultValue: this.props.defaultTitle,
                    disabled: this.props.disabled,
                    maxLength: 100,
                    onChange: this.onNameInputChange,
                    placeholder: Object(a.d)("Collection name", "CollectionCreator"),
                    type: c._5.Text,
                    onKeyDown: this.onKeyDown
                })), r.createElement(c.L, {
                    cols: 1
                }, r.createElement(c.v, {
                    "data-test-selector": i.SubmitButton,
                    disabled: !this.canSaveTitle(),
                    onClick: this.onSubmit
                }, this.props.callToAction))))
            }, t.prototype.canSaveTitle = function() {
                var e = !(this.state.collectionTitle && this.state.collectionTitle.replace(/\s/g, "").length > 0),
                    t = Boolean(this.state.collectionTitle && this.state.collectionTitle.length > 100),
                    n = this.state.collectionTitle === this.props.defaultTitle;
                return !(e || t || n)
            }, t
        }(r.Component)
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
                                                                    value: "id"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
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
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "currentUser"
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
            }],
            loc: {
                start: 0,
                end: 381
            }
        };
        n.loc.source = {
            body: "query CollectionManager_CreatorCollections($creatorLogin: String! $after: Cursor) {\nuser(login: $creatorLogin) {\nid\ncollections(first: 15 after: $after options: { includeEmpty: true }) {\nedges {\ncursor\nnode {\nid\nitems {\ntotalCount\n}\nowner {\nid\nlogin\n}\nlengthSeconds\nthumbnailURL(width: 160 height: 90)\ntitle\nupdatedAt\nviewCount\n}\n}\npageInfo {\nhasNextPage\n}\n}\n}\ncurrentUser {\nid\n}\n}",
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
            o = n("GiK3"),
            r = n("rCmJ"),
            a = n("Odds"),
            l = function(e) {
                var t = e.asset ? o.createElement(a._24, {
                    asset: e.asset
                }) : null;
                return o.createElement(a._6, {
                    linkTo: e.linkTo,
                    onClick: e.onClick
                }, o.createElement(a._8, {
                    alignItems: a.c.Center,
                    display: a.R.Flex,
                    flexGrow: 1,
                    padding: 1
                }, t, o.createElement(a._2, {
                    margin: {
                        left: 1
                    }
                }, o.createElement(a.Q, null, e.title))))
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
                return this.state.showDropMenu && (e = this.dropMenu()), o.createElement(a._8, {
                    flexGrow: 0,
                    flexShrink: 0,
                    display: a.R.Flex,
                    position: a._15.Relative
                }, o.createElement(a._2, {
                    fullHeight: !0
                }, o.createElement(r.a, {
                    onClickOut: this.clickOutHandler
                }, o.createElement(a._8, {
                    fullHeight: !0,
                    display: a.R.Flex,
                    alignItems: a.c.Stretch
                }, o.createElement(a.v, {
                    disabled: 0 === this.props.options.length,
                    icon: a._25.More,
                    onClick: this.menuButtonClickHandler,
                    type: a.B.Text
                })), e)))
            }, t.prototype.dropMenu = function() {
                var e = this.props.options.map(function(e, t) {
                    return o.createElement(l, i.__assign({
                        key: t
                    }, e))
                });
                return o.createElement(a.q, {
                    size: a.s.Small,
                    direction: a.r.BottomRight,
                    noTail: !0,
                    show: !0
                }, e)
            }, t
        }(o.Component)
    },
    M0wY: function(e, t, n) {
        "use strict";
        var i, o = n("TToO"),
            r = n("GiK3"),
            a = n("3zLD"),
            l = n("RH2O"),
            c = n("6sO2"),
            s = n("7vx8"),
            d = n("oIkB"),
            u = n("V5M+"),
            p = n("I9kX"),
            m = n("+8VM"),
            h = n("rvrg"),
            f = n("Odds");
        ! function(e) {
            e[e.CancelButton = 0] = "CancelButton", e[e.ConfirmButton = 1] = "ConfirmButton", e[e.ErrorAlert = 2] = "ErrorAlert"
        }(i || (i = {}));
        var g = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.collection,
                        t = null;
                    return this.props.error && (t = r.createElement(f.e, {
                        delay: f.f.Short,
                        type: f.j.BounceIn,
                        enabled: !0
                    }, r.createElement(f._35, {
                        border: !0,
                        margin: {
                            bottom: 1
                        },
                        padding: 1,
                        fullWidth: !0
                    }, r.createElement(f.Q, {
                        bold: !0,
                        color: f.K.Error,
                        "data-test-selector": i.ErrorAlert
                    }, this.props.error)))), r.createElement(f.e, {
                        type: f.j.FadeIn,
                        delay: f.f.Medium,
                        duration: f.g.Medium,
                        enabled: !0
                    }, r.createElement(f._35, {
                        background: f.n.Base,
                        padding: {
                            x: 3,
                            top: 2,
                            bottom: 3
                        }
                    }, r.createElement(f._2, {
                        padding: {
                            bottom: 1
                        }
                    }, r.createElement(f.Q, {
                        fontSize: f.V.Size3
                    }, Object(c.d)("Delete Collection", "DeleteCollectionModal"))), r.createElement(f.Q, {
                        fontSize: f.V.Size6
                    }, Object(c.d)("Are you sure you want to delete this collection?", "DeleteCollectionModal")), r.createElement(f.Q, {
                        fontSize: f.V.Size6
                    }, Object(c.d)("This action cannot be undone. ", "DeleteCollectionModal")), r.createElement(f._8, {
                        padding: {
                            y: 2
                        }
                    }, r.createElement(h.a, {
                        collection: e,
                        hideOptionsMenu: !0
                    })), t, r.createElement(f._8, {
                        display: f.R.Flex,
                        flexDirection: f.T.Row,
                        justifyContent: f._7.Center
                    }, r.createElement(f._8, {
                        margin: {
                            x: .5
                        }
                    }, r.createElement(f.v, {
                        "data-test-selector": i.CancelButton,
                        onClick: this.props.onCancel,
                        type: f.B.Hollow
                    }, Object(c.d)("Cancel", "DeleteCollectionModal"))), r.createElement(f._8, {
                        margin: {
                            x: .5
                        }
                    }, r.createElement(f.v, {
                        "data-test-selector": i.ConfirmButton,
                        onClick: this.props.onDeleteRequest,
                        type: f.B.Alert
                    }, Object(c.d)("Delete", "DeleteCollectionModal")))), r.createElement(m.a, {
                        closeOnBackdropClick: !0
                    })))
                }, t
            }(r.Component),
            v = n("e6eF");
        n.d(t, "a", function() {
            return b
        });
        var C = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {}, t.defaultUserError = Object(c.d)("Unable to delete this collection, try again later.", "DeleteCollectionModal"), t.onCancelHandler = function() {
                        t.props.onClose()
                    }, t.onDeleteHandler = function() {
                        t.setState({
                            deletionError: void 0
                        }, function() {
                            return o.__awaiter(t, void 0, void 0, function() {
                                var e;
                                return o.__generator(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            if (!this.props.collection.owner) return this.setState({
                                                deletionError: this.defaultUserError
                                            }), [2];
                                            t.label = 1;
                                        case 1:
                                            return t.trys.push([1, 3, , 4]), [4, this.props.onDeleteRequest(o.__assign({}, Object(d.a)({
                                                collectionID: this.props.collection.id
                                            }), {
                                                refetchQueries: [{
                                                    query: p,
                                                    variables: {
                                                        creatorLogin: this.props.collection.owner.login
                                                    }
                                                }]
                                            }))];
                                        case 2:
                                            return t.sent(), [3, 4];
                                        case 3:
                                            return e = t.sent(), c.j.error(e, "DeleteCollectionModal"), this.setState({
                                                deletionError: this.defaultUserError
                                            }), [2];
                                        case 4:
                                            return this.props.onSuccess(), [2]
                                    }
                                })
                            })
                        })
                    }, t
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(g, {
                        collection: this.props.collection,
                        error: this.state.deletionError,
                        onCancel: this.onCancelHandler,
                        onDeleteRequest: this.onDeleteHandler
                    })
                }, t
            }(r.Component),
            k = Object(a.compose)(Object(s.a)(v, {
                name: "onDeleteRequest"
            }))(C);
        var b = Object(l.b)(null, function(e, t) {
            return {
                onClose: function() {
                    e(Object(u.c)())
                },
                onSuccess: function() {
                    e(Object(u.c)()), t.onSuccess && t.onSuccess()
                }
            }
        })(k)
    },
    N8CH: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
        });
        var i = n("GiK3"),
            o = (n.n(i), n("Odds")),
            r = function(e) {
                return i.createElement(o._6, {
                    onClick: e.onClick
                }, i.createElement(o._8, {
                    alignItems: o.c.Start,
                    display: o.R.Flex,
                    flexDirection: o.T.Column,
                    flexGrow: 1,
                    flexShrink: 1,
                    justifyContent: o._7.Center,
                    padding: {
                        x: 2
                    }
                }, e.children))
            }
    },
    O8Ns: function(e, t, n) {
        "use strict";
        var i, o, r = function(e, t, n) {
            var i = e.collectionItems || [];
            return Boolean(i.find(function(e) {
                return e.ObjectType === n && e.id === t
            }))
        };
        ! function(e) {
            e.Public = "public"
        }(i || (i = {})),
        function(e) {
            e.Staff = "staff"
        }(o || (o = {}));
        var a, l = function(e) {
            return {
                __typename: "Collection",
                id: e._id,
                title: e.title,
                state: i.Public,
                thumbnailSrc: e.thumbnails && e.thumbnails.small,
                totalDuration: e.total_duration,
                itemsCount: e.items_count
            }
        };

        function c(e) {
            return e.collections.map(function(e) {
                return l(e)
            })
        }! function(e) {
            e.Video = "video"
        }(a || (a = {})), n.d(t, !1, function() {
            return r
        }), n.d(t, !1, function() {
            return i
        }), n.d(t, !1, function() {
            return o
        }), n.d(t, "b", function() {
            return l
        }), n.d(t, "c", function() {
            return c
        }), n.d(t, "a", function() {
            return a
        })
    },
    PelN: function(e, t) {},
    PwTO: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        });
        var i = n("GiK3"),
            o = (n.n(i), n("Odds")),
            r = n("QmYP"),
            a = (n.n(r), function(e) {
                return i.createElement(o._8, {
                    className: "manager-card__stats-container",
                    display: o.R.Flex,
                    flexGrow: 0,
                    flexShrink: 0,
                    flexWrap: o.U.NoWrap,
                    flexDirection: o.T.Row,
                    alignItems: o.c.Center
                }, e.children)
            })
    },
    QmYP: function(e, t) {},
    Snvs: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            o = n("GiK3"),
            r = n("3zLD"),
            a = n("6sO2"),
            l = n("7vx8"),
            c = n("CSlQ"),
            s = n("acVP"),
            d = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        loading: !0,
                        permitted: !1,
                        roles: {
                            staff: !1,
                            editor: !1,
                            owner: !1
                        },
                        error: null
                    }, t.logger = a.j.withCategory("role-restricted"), t
                }
                return i.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
                    e.data.loading && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    var t = p(e),
                        n = {
                            loading: e.data.loading,
                            permitted: u(t, e.permittedRoles),
                            roles: t,
                            error: null
                        };
                    e.data.error ? (n.error = new Error(e.data.error.toString()), this.logger.warn("Unable to retrieve data from GraphQL.", {
                        err: n.error
                    })) : e.data.loading || e.data.user && e.data.currentUser || (n.error = new Error("Failed to fetch user information"), this.logger.warn("Failed to fetch user information.", {
                        err: n.error
                    })), this.setState(n)
                }, t.prototype.render = function() {
                    return this.props.children(this.state)
                }, t
            }(o.Component);

        function u(e, t) {
            return !!e.owner || (!(!e.staff || !t.staff) || !(!e.editor || !t.editor))
        }

        function p(e) {
            var t = e.data,
                n = {
                    staff: !1,
                    editor: !1,
                    owner: !1
                };
            return !t.error && !t.loading && t.user && t.currentUser && (n.staff = !(!t.currentUser.roles || !t.currentUser.roles.isStaff), n.editor = !(!t.user.self || !t.user.self.isEditor), n.owner = t.user.id === t.currentUser.id), n
        }
        var m = Object(r.compose)(Object(l.a)(s, {
            options: function(e) {
                return {
                    variables: {
                        contentOwnerLogin: e.ownerLogin
                    }
                }
            }
        }), Object(c.d)("RoleRestricted"))(d);
        n.d(t, !1, function() {
            return d
        }), n.d(t, !1, function() {
            return u
        }), n.d(t, !1, function() {
            return p
        }), n.d(t, "a", function() {
            return m
        })
    },
    Z8qZ: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            o = n("GiK3"),
            r = n("Odds"),
            a = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return o.createElement(r._35, {
                        background: r.n.Base,
                        elevation: 1,
                        display: r.R.Flex,
                        flexDirection: r.T.Row,
                        alignItems: r.c.Stretch
                    }, this.props.children)
                }, t
            }(o.Component);
        n.d(t, "a", function() {
            return a
        })
    },
    acVP: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "RoleRestricted"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "contentOwnerLogin"
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
                            value: "currentUser"
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
                                    value: "roles"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "isStaff"
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
                                    value: "contentOwnerLogin"
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
                                    value: "self"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "isEditor"
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
                end: 147
            }
        };
        n.loc.source = {
            body: "query RoleRestricted($contentOwnerLogin: String!) {\ncurrentUser {\nid\nroles {\nisStaff\n}\n}\nuser(login: $contentOwnerLogin) {\nid\nself {\nisEditor\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    bKut: function(e, t, n) {
        "use strict";
        n("dL0Y")
    },
    dL0Y: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            return e.collections.containingCollections
        };
        var i = n("TToO"),
            o = n("6sO2"),
            r = n("B9Px");
        o.o.store.registerReducer("collections", function(e, t) {
            switch (void 0 === e && (e = {
                collections: [],
                videoID: "",
                containingCollections: [],
                errors: {}
            }), t.type) {
                case r.a:
                    return i.__assign({}, e, {
                        collections: t.collections
                    });
                case r.b:
                    return i.__assign({}, e, {
                        videoID: t.videoID,
                        containingCollections: t.containingCollections
                    });
                case r.c:
                    return i.__assign({}, e, {
                        errors: i.__assign({}, e.errors, (n = {}, n[t.errorType] = t.errorMessage, n))
                    });
                default:
                    return e
            }
            var n
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
                            value: "input"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "DeleteCollectionInput"
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
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "input"
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
                end: 133
            }
        };
        n.loc.source = {
            body: "mutation CollectionManager_DeleteCollection($input: DeleteCollectionInput!) {\ndeleteCollection(input: $input) {\ncollection {\nid\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    jXn2: function(e, t, n) {
        "use strict";
        t.b = function(e) {
            i.n.track(o.SpadeEventType.CollectionCreate, {
                channel_id: e.channelID,
                playlist_id: e.playlistID,
                user_id: e.userID,
                title: e.title
            })
        }, t.a = function(e) {
            i.n.track(o.SpadeEventType.CollectionAddItem, {
                channel_id: e.channelID,
                item_id: e.itemID,
                item_position: e.itemPosition,
                item_type: e.itemType,
                playlist_id: e.playlistID,
                user_id: e.userID
            })
        }, t.c = function(e) {
            i.n.track(o.SpadeEventType.CollectionRemoveItem, {
                channel_id: e.channelID,
                item_id: e.itemID,
                item_position: e.itemPosition,
                item_type: e.itemType,
                playlist_id: e.playlistID,
                user_id: e.userID
            })
        };
        var i = n("6sO2"),
            o = n("vH/s")
    },
    kk4f: function(e, t, n) {
        "use strict";
        var i = n("RH2O"),
            o = n("2KeS"),
            r = n("Aj/L"),
            a = n("B9Px"),
            l = (n("bKut"), n("TToO")),
            c = n("GiK3"),
            s = n("6sO2"),
            d = n("mi6k"),
            u = n("CSlQ"),
            p = n("Odds"),
            m = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onChangeHandler = function() {
                        return t.props.onSelected(t.props.collection)
                    }, t
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    return c.createElement(p._8, {
                        display: p.R.Flex
                    }, c.createElement(p._8, {
                        padding: 2
                    }, c.createElement(p.J, {
                        label: "",
                        onChange: this.onChangeHandler,
                        checked: this.props.videoIsInCollection
                    })), c.createElement(p._8, {
                        padding: 1
                    }, c.createElement(p.E, {
                        aspect: p.l.Aspect16x9,
                        alt: this.props.collection.title,
                        src: this.props.collection.thumbnailSrc || "https://static-cdn.jtvnw.net/ttv-playlists-thumbnails-prod/missing-video-thumb-320x180.png",
                        size: p.F.Size8
                    })), c.createElement(p._8, {
                        padding: 1,
                        display: p.R.Flex,
                        flexDirection: p.T.Column
                    }, c.createElement(p._8, null, c.createElement(p.Q, {
                        ellipsis: !0
                    }, this.props.collection.title)), c.createElement(p._8, {
                        display: p.R.Flex
                    }, c.createElement(p._8, {
                        padding: {
                            right: 1
                        }
                    }, c.createElement(p.Q, null, Object(s.d)("{videoCount} video", {
                        videoCount: this.props.collection.itemsCount
                    }, "CollectionRowPresentation"))), c.createElement(p._8, {
                        padding: {
                            x: 1
                        }
                    }, c.createElement(p.Q, null, "·")), c.createElement(p._8, {
                        padding: {
                            left: 1
                        }
                    }, c.createElement(p.Q, null, Object(d.b)(this.props.collection.totalDuration))))))
                }, t
            }(c.Component),
            h = Object(u.d)("CollectionRow")(m),
            f = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {}, t.onCollectionRowChange = function(e) {
                        t.props.updateItemInCollection(e, t.props.videoID, t.props.channelID)
                    }, t
                }
                return l.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive(), this.props.channelID && this.props.videoID && this.props.fetchCollectionsForVideo(this.props.channelID, this.props.videoID)
                }, t.prototype.render = function() {
                    var e = this;
                    return this.props.channelID && this.props.videoID && this.props.collections ? c.createElement(p._8, null, this.props.collections.map(function(t) {
                        return c.createElement(h, {
                            key: t.id,
                            collection: t,
                            videoIsInCollection: e.props.containingCollections.map(function(e) {
                                return e.id
                            }).indexOf(t.id) > -1,
                            onSelected: e.onCollectionRowChange
                        })
                    })) : c.createElement(p._8, null)
                }, t
            }(c.Component),
            g = Object(u.d)("CollectionsListPresentation")(f);
        var v, C = Object(i.b)(function(e) {
                return {
                    isLoggedIn: Object(r.d)(e),
                    collections: e.collections.collections,
                    containingCollections: e.collections.containingCollections
                }
            }, function(e) {
                return Object(o.b)({
                    fetchCollectionsForVideo: a.e,
                    updateItemInCollection: a.f
                }, e)
            })(g),
            k = n("zDSl"),
            b = n.n(k);
        n("PelN");
        ! function(e) {
            e[e.VideoCountOverlayText = 0] = "VideoCountOverlayText"
        }(v || (v = {}));
        var _ = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        imageLoadError: !1
                    }, t.onErrorHandler = function() {
                        t.props.latencyTracking.reportInteractive(), t.setState({
                            imageLoadError: !0
                        })
                    }, t.onLoadHandler = function() {
                        t.props.latencyTracking.reportInteractive()
                    }, t
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    var e, t, n = null;
                    return "number" == typeof this.props.videoCount && (n = c.createElement(p._8, {
                        position: p._15.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        attachRight: !0,
                        attachBottom: !0
                    }, c.createElement(p._35, {
                        alignItems: p.c.Center,
                        attachRight: !0,
                        className: "collection-preview-image__wrapper",
                        color: p.K.Overlay,
                        display: p.R.InlineFlex,
                        flexDirection: p.T.Column,
                        fontSize: p.V.Size5,
                        fullHeight: !0,
                        justifyContent: p._7.Center,
                        position: p._15.Absolute,
                        textAlign: p._45.Center
                    }, c.createElement(p._24, {
                        asset: p._25.Collections,
                        height: 19,
                        width: 19
                    }), c.createElement(p.Q, {
                        "data-test-selector": v.VideoCountOverlayText
                    }, Object(s.d)("{videoCount, plural, one {# video} other {# videos}}", {
                        videoCount: this.props.videoCount.toString()
                    }, "CollectionCard"))))), !this.props.src || this.state.imageLoadError ? (e = b.a, t = {
                        "320w": b.a
                    }) : (e = this.props.src, t = this.props.srcSet), c.createElement(p._8, {
                        position: p._15.Relative
                    }, c.createElement(p.N, {
                        alt: this.props.alt,
                        onError: this.onErrorHandler,
                        onLoad: this.onLoadHandler,
                        src: e,
                        srcSet: t,
                        sizes: this.props.sizes
                    }), n)
                }, t
            }(c.Component),
            y = Object(u.d)("CollectionPreviewImage")(_);
        n.d(t, "b", function() {
            return C
        }), n.d(t, "a", function() {
            return y
        })
    },
    rvrg: function(e, t, n) {
        "use strict";
        var i = n("RH2O"),
            o = n("V5M+"),
            r = n("TToO"),
            a = n("GiK3"),
            l = n("6sO2"),
            c = n("mi6k"),
            s = n("vH/s"),
            d = n("kk4f"),
            u = n("CSlQ"),
            p = n("Z8qZ"),
            m = n("KRtN"),
            h = n("4o7v"),
            f = n("PwTO"),
            g = n("N8CH"),
            v = n("Odds"),
            C = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.navigateToEdit = function() {
                        var e = t.collectionEditLocationDescriptor();
                        e && l.o.history.push(e)
                    }, t.collectionEditLocationDescriptor = function() {
                        if (t.props.collection.owner) return {
                            pathname: "/" + t.props.collection.owner.login + "/manager/collections/" + t.props.collection.id,
                            state: {
                                content: s.PageviewContent.CollectionCard,
                                medium: s.PageviewMedium.VideoManagerCollectionManager
                            }
                        }
                    }, t.onDeleteOptionClickHandler = function() {
                        t.props.onDeleteOptionClick(t.props.collection)
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e, t = this.props.collection;
                    return t.thumbnailURL && (e = {
                        "160w": t.thumbnailURL
                    }), a.createElement(p.a, null, a.createElement(v._8, {
                        flexShrink: 0
                    }, a.createElement(d.a, {
                        alt: t.title,
                        sizes: [{
                            size: "160px"
                        }],
                        src: t.thumbnailURL,
                        srcSet: e,
                        videoCount: t.items.totalCount
                    })), a.createElement(g.a, {
                        onClick: this.navigateToEdit
                    }, a.createElement(v.Q, {
                        bold: !0,
                        type: v._49.H4,
                        color: v.K.Alt
                    }, t.title), a.createElement(v._52, {
                        direction: v._54.Bottom,
                        label: Object(l.d)("Last Updated", "CollectionManagerCard")
                    }, a.createElement(v.Q, {
                        color: v.K.Alt2
                    }, Object(l.c)(new Date(t.updatedAt), "long")))), a.createElement(f.a, null, this.collectionStats(t)), this.renderCardMenu())
                }, t.prototype.renderCardMenu = function() {
                    if (this.props.hideOptionsMenu || !this.props.collection.owner) return null;
                    var e = [{
                        asset: v._25.Edit,
                        linkTo: this.collectionEditLocationDescriptor(),
                        title: Object(l.d)("Edit", "CollectionManagerCard")
                    }, {
                        asset: v._25.Trash,
                        onClick: this.onDeleteOptionClickHandler,
                        title: Object(l.d)("Delete", "CollectionManagerCard")
                    }];
                    return a.createElement(m.a, {
                        options: e
                    })
                }, t.prototype.collectionStats = function(e) {
                    return [{
                        value: Object(c.b)(e.lengthSeconds),
                        icon: v._25.GlyphLength,
                        label: Object(l.d)("Collection length", "CollectionManagerCard")
                    }, {
                        value: "" + e.viewCount,
                        icon: v._25.GlyphViews,
                        label: Object(l.d)("Views", "CollectionManagerCard")
                    }].map(function(e, t) {
                        return a.createElement(h.a, r.__assign({
                            key: t
                        }, e))
                    })
                }, t
            }(a.Component),
            k = Object(u.d)("CollectionManagerCard", {
                autoReportInteractive: !0
            })(C),
            b = n("M0wY");
        n.d(t, "a", function() {
            return _
        });
        var _ = Object(i.b)(null, function(e, t) {
            return {
                onDeleteOptionClick: function(n) {
                    e(Object(o.d)(b.a, {
                        collection: n,
                        onSuccess: t.onDelete
                    }))
                }
            }
        })(k)
    },
    zDSl: function(e, t, n) {
        e.exports = n.p + "assets/missing-video-thumb-320x180-101fcbc1ff84459331417137edd6cfdb.png"
    }
});
//# sourceMappingURL=pages.video-tools.pages.collection-manager-fd898c9d9e6f0c37e8e787491c34e3d0.js.map