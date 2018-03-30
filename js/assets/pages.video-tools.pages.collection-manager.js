webpackJsonp([80], {
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
            r = n("GiK3"),
            o = (n.n(r), n("5kgt")),
            a = n("Odds"),
            l = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = r.createElement(a._6, {
                            alignItems: a.c.Center,
                            display: a.P.Flex,
                            fullHeight: !0,
                            justifyContent: a._5.Center,
                            padding: 2
                        }, r.createElement(a._28, {
                            icon: this.props.icon,
                            label: this.props.label,
                            value: this.props.value
                        })),
                        t = this.props.linkTo ? r.createElement(a._4, {
                            alpha: !0,
                            linkTo: this.props.linkTo,
                            targetBlank: !0
                        }, e) : e;
                    return r.createElement(a._6, i.__assign({
                        display: a.P.InlineFlex,
                        fullHeight: !0
                    }, Object(o.a)(this.props)), t)
                }, t
            }(r.Component)
    },
    "Dk8+": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i, r = n("TToO"),
            o = n("GiK3"),
            a = n("6sO2"),
            l = n("yWCw"),
            c = n("Snvs"),
            s = n("3zLD"),
            d = n("zCIC"),
            u = n("j7/Y"),
            m = n("oIkB"),
            p = n("w9tK"),
            g = n("vH/s"),
            f = n("CSlQ"),
            h = n("Z8qZ"),
            v = n("PwTO"),
            k = n("N8CH"),
            C = n("Odds"),
            b = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return o.createElement(h.a, null, o.createElement(C._6, null, o.createElement(C._12, {
                        height: 75,
                        width: 133
                    })), o.createElement(k.a, null, o.createElement(C.O, null, o.createElement(C._12, {
                        width: 600,
                        lineCount: 1
                    }), o.createElement(C._12, {
                        width: 200,
                        lineCount: 1
                    }))), o.createElement(v.a, null, o.createElement(C.O, null, o.createElement(C._12, {
                        width: 40,
                        lineCount: 1
                    }))), o.createElement(C._6, {
                        flexGrow: 0,
                        flexShrink: 0
                    }, o.createElement(C._6, {
                        fullHeight: !0,
                        display: C.P.Flex,
                        alignItems: C.c.Center,
                        justifyContent: C._5.Center,
                        padding: 1
                    }, o.createElement(C.O, null, o.createElement(C._12, {
                        width: 20,
                        lineCount: 1
                    })))))
                }, t
            }(o.PureComponent),
            S = n("CIox"),
            E = n("7vx8"),
            y = n("jXn2"),
            _ = n("F0UT"),
            O = n("1myv"),
            N = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        creationErrorMessage: ""
                    }, t.defaultCreationError = Object(a.d)("Creation attempt failed. Please try again.", "CollectionCreator"), t.onCreateButtonClickHandler = function(e) {
                        t.setState({
                            creationErrorMessage: ""
                        }, function() {
                            return r.__awaiter(t, void 0, void 0, function() {
                                var t, n, i, o, l, c, s, d;
                                return r.__generator(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            if (!this.props.context) return a.j.error(new Error("Collection creation attempt occurred without valid creation context"), "CreateCollection"), this.setState({
                                                creationErrorMessage: this.defaultCreationError
                                            }), [2];
                                            t = this.props.context, n = t.ownerID, i = t.ownerLogin, o = t.sessionUserID, l = Object(m.a)({
                                                ownerID: n,
                                                title: e
                                            }), r.label = 1;
                                        case 1:
                                            return r.trys.push([1, 3, , 4]), [4, this.props.createCollection(l)];
                                        case 2:
                                            return c = r.sent().data, s = c.createCollection.collection, Object(y.b)({
                                                channelID: n,
                                                playlistID: s.id,
                                                userID: o,
                                                title: s.title
                                            }), this.props.history.push("/" + i + "/manager/collections/" + s.id, {
                                                content: g.PageviewContent.CollectionCreator,
                                                medium: g.PageviewMedium.VideoManagerCollectionManager
                                            }), this.props.onAdd(), [3, 4];
                                        case 3:
                                            return d = r.sent(), a.j.error(d, "CreateCollection", {
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
                return r.__extends(t, e), t.prototype.render = function() {
                    return o.createElement(C.W, null, o.createElement(C.K, {
                        cols: 4
                    }, o.createElement(_.a, {
                        disabled: !this.props.context,
                        onSubmit: this.onCreateButtonClickHandler,
                        callToAction: Object(a.d)("Create Collection", "CollectionCreator"),
                        errorMessage: this.state.creationErrorMessage
                    })))
                }, t
            }(o.Component),
            w = Object(s.compose)(Object(E.a)(O, {
                name: "createCollection"
            }))(Object(S.f)(N)),
            T = n("rvrg"),
            D = n("I9kX");
        ! function(e) {
            e.CollectionsUnavailableError = "CollectionsUnavailableError", e.CreateCollection = "CreateCollection", e.noCollectionsCTA = "noCollectionsCTA"
        }(i || (i = {}));
        var M = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.refetchCreatorCollection = function() {
                        t.props.data.refetch({
                            creatorLogin: t.props.match.params.creatorLogin
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
                    e.data.loading && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e, t = !1;
                    return this.props.data.loading ? e = this.collectionCardPlaceholders() : !this.props.data.error && this.props.data.user && this.props.data.user.collections ? this.props.data.user.collections.edges.length > 0 ? (e = this.renderCollections(this.props.data.user.collections.edges), t = this.props.data.user.collections.pageInfo.hasNextPage || !1) : e = this.noCollectionsCTA() : e = this.contentUnavaibleError(), o.createElement(d.b, null, o.createElement(C._6, {
                        fullHeight: !0,
                        padding: {
                            top: 2,
                            x: 2
                        },
                        margin: {
                            bottom: 5
                        }
                    }, o.createElement(C._6, {
                        padding: {
                            bottom: 2
                        }
                    }, o.createElement(C.O, {
                        type: C._43.H2
                    }, Object(a.d)("Collections", "CollectionManager"))), o.createElement(w, {
                        context: this.props.data.user && this.props.data.currentUser ? {
                            ownerID: this.props.data.user.id,
                            ownerLogin: this.props.match.params.creatorLogin,
                            sessionUserID: this.props.data.currentUser.id
                        } : void 0,
                        onAdd: this.refetchCreatorCollection
                    }), o.createElement(C._6, {
                        fullWidth: !0,
                        padding: {
                            top: 2
                        },
                        margin: {
                            bottom: 5
                        }
                    }, e, o.createElement(d.a, {
                        enabled: t,
                        loadMore: this.props.loadMore
                    }))))
                }, t.prototype.renderCollections = function(e) {
                    var t = this;
                    return e.map(function(e, n) {
                        return o.createElement(C._6, {
                            key: n,
                            margin: {
                                bottom: 1
                            }
                        }, o.createElement(T.a, {
                            collection: e.node,
                            onDelete: t.refetchCreatorCollection
                        }))
                    })
                }, t.prototype.collectionCardPlaceholders = function() {
                    for (var e = [], t = 0; t < 3; t++) e.push(o.createElement(C._6, {
                        key: t,
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(b, null)));
                    return e
                }, t.prototype.noCollectionsCTA = function() {
                    return o.createElement(C._6, {
                        alignItems: C.c.Center,
                        "data-test-selector": i.noCollectionsCTA,
                        display: C.P.Flex,
                        flexDirection: C.R.Column,
                        justifyContent: C._5.Center,
                        margin: {
                            top: 5
                        }
                    }, o.createElement(C.O, {
                        type: C._43.H4
                    }, Object(a.d)("Put all your best videos in one spot.", "CollectionManager")), o.createElement(C.O, {
                        type: C._43.H4
                    }, Object(a.d)("Videos organized into collections help your viewers easily find related content.", "CollectionManager")), o.createElement(C.O, {
                        type: C._43.H4
                    }, Object(a.d)("Your most recently updated Collection will be featured at the top of channel’s video page.", "CollectionManager")))
                }, t.prototype.contentUnavaibleError = function() {
                    return o.createElement(C._6, {
                        "data-test-selector": i.CollectionsUnavailableError
                    }, Object(a.d)("Something went wrong loading your collections. Please try again.", "CollectionEditorPagePresentation"))
                }, t
            }(o.Component),
            x = Object(s.compose)(Object(s.graphql)(D, {
                options: function(e) {
                    return {
                        variables: {
                            creatorLogin: e.match.params.creatorLogin
                        }
                    }
                },
                props: function(e) {
                    return r.__assign({}, e, {
                        loadMore: function() {
                            var t = e.data.user && e.data.user.collections ? e.data.user.collections.edges : [],
                                n = t.length > 0 ? t[t.length - 1].cursor : void 0;
                            return e.data.fetchMore({
                                query: D,
                                variables: r.__assign({}, e.data.variables, {
                                    after: n
                                }),
                                updateQuery: function(e, t) {
                                    var n = t.fetchMoreResult;
                                    if (!n.user || !n.user.collections) return e;
                                    var i = e.user && e.user.collections ? e.user.collections.edges : [];
                                    return {
                                        user: r.__assign({}, n.user, {
                                            collections: r.__assign({}, n.user.collections, {
                                                edges: Object(m.b)(i, n.user.collections.edges)
                                            })
                                        }),
                                        currentUser: e.currentUser
                                    }
                                }
                            })
                        }
                    })
                }
            }), Object(f.d)("CollectionManager", {
                destination: p.a.VideoManagerCollectionsManager
            }), Object(u.a)({
                location: g.PageviewLocation.VideoManagerCollectionManager,
                properties: function(e) {
                    return {
                        channel: e.match.params.creatorLogin,
                        channel_id: e.data.user ? e.data.user.id : null
                    }
                },
                skip: function(e) {
                    return e.data.loading
                }
            }))(M),
            j = function(e) {
                return o.createElement(c.a, {
                    ownerLogin: e.match.params.creatorLogin,
                    permittedRoles: {
                        editor: !0,
                        staff: !0
                    }
                }, function(t) {
                    var n = t.loading,
                        i = t.permitted;
                    return n || i ? o.createElement(x, r.__assign({}, e)) : o.createElement(l.a, {
                        message: Object(a.d)("Something went wrong. Please try again.", "CollectionManagerPage")
                    })
                })
            },
            F = n("L2R7"),
            I = function(e) {
                return window.location.replace("https://www.twitch.tv/" + encodeURIComponent(e.match.params.creatorLogin) + "/manager/collections"), null
            },
            L = function(e) {
                return Object(F.a)() ? o.createElement(j, r.__assign({}, e)) : o.createElement(I, r.__assign({}, e))
            };
        n.d(t, "CollectionManagerPage", function() {
            return L
        })
    },
    F0UT: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return d
        });
        var i, r = n("TToO"),
            o = n("GiK3"),
            a = (n.n(o), n("6sO2")),
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
                    e.keyCode !== l.a.Enter || t.canSaveTitle() || t.onSubmit()
                }, t
            }
            return r.__extends(t, e), t.prototype.render = function() {
                var e = Object(a.d)("{currentLength} of {maxLength} characters.", {
                        currentLength: this.state.collectionTitle.length.toString(),
                        maxLength: 100..toString()
                    }, "CollectionCreator"),
                    t = "";
                return !this.state.localTitleChanges && this.props.errorMessage.length > 0 && (t = this.props.errorMessage), o.createElement(c.U, {
                    hint: this.state.collectionTitle.length > 0 ? e : s,
                    error: t.length > 0,
                    errorMessage: t,
                    label: ""
                }, o.createElement(c.W, null, o.createElement(c.K, {
                    cols: {
                        default: 6,
                        xl: 4
                    }
                }, o.createElement(c._2, {
                    "data-test-selector": i.TitleInput,
                    defaultValue: this.props.defaultTitle,
                    disabled: this.props.disabled,
                    maxLength: 100,
                    onChange: this.onNameInputChange,
                    placeholder: Object(a.d)("Collection name", "CollectionCreator"),
                    type: c._3.Text,
                    onKeyDown: this.onKeyDown
                })), o.createElement(c.K, {
                    cols: 1
                }, o.createElement(c.u, {
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
        }(o.Component)
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
            r = n("GiK3"),
            o = n("rCmJ"),
            a = n("Odds"),
            l = function(e) {
                var t = e.asset ? r.createElement(a._19, {
                    asset: e.asset
                }) : null;
                return r.createElement(a._4, {
                    linkTo: e.linkTo,
                    onClick: e.onClick
                }, r.createElement(a._6, {
                    alignItems: a.c.Center,
                    display: a.P.Flex,
                    flexGrow: 1,
                    padding: 1
                }, t, r.createElement(a._0, {
                    margin: {
                        left: 1
                    }
                }, r.createElement(a.O, null, e.title))))
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
                return this.state.showDropMenu && (e = this.dropMenu()), r.createElement(a._6, {
                    flexGrow: 0,
                    flexShrink: 0,
                    display: a.P.Flex,
                    position: a._13.Relative
                }, r.createElement(a._0, {
                    fullHeight: !0
                }, r.createElement(o.a, {
                    onClickOut: this.clickOutHandler
                }, r.createElement(a._6, {
                    fullHeight: !0,
                    display: a.P.Flex,
                    alignItems: a.c.Stretch
                }, r.createElement(a.u, {
                    disabled: 0 === this.props.options.length,
                    icon: a._20.More,
                    onClick: this.menuButtonClickHandler,
                    type: a.A.Text
                })), e)))
            }, t.prototype.dropMenu = function() {
                var e = this.props.options.map(function(e, t) {
                    return r.createElement(l, i.__assign({
                        key: t
                    }, e))
                });
                return r.createElement(a.p, {
                    size: a.r.Small,
                    direction: a.q.BottomRight,
                    noTail: !0,
                    show: !0
                }, e)
            }, t
        }(r.Component)
    },
    M0wY: function(e, t, n) {
        "use strict";
        var i, r = n("TToO"),
            o = n("GiK3"),
            a = n("3zLD"),
            l = n("RH2O"),
            c = n("6sO2"),
            s = n("7vx8"),
            d = n("oIkB"),
            u = n("V5M+"),
            m = n("+8VM"),
            p = n("rvrg"),
            g = n("Odds");
        ! function(e) {
            e[e.CancelButton = 0] = "CancelButton", e[e.ConfirmButton = 1] = "ConfirmButton", e[e.ErrorAlert = 2] = "ErrorAlert"
        }(i || (i = {}));
        var f = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.collection,
                        t = null;
                    return this.props.error && (t = o.createElement(g.e, {
                        delay: g.f.Short,
                        type: g.i.BounceIn,
                        enabled: !0
                    }, o.createElement(g._29, {
                        border: !0,
                        margin: {
                            bottom: 1
                        },
                        padding: 1,
                        fullWidth: !0
                    }, o.createElement(g.O, {
                        bold: !0,
                        color: g.J.Error,
                        "data-test-selector": i.ErrorAlert
                    }, this.props.error)))), o.createElement(g.e, {
                        type: g.i.FadeIn,
                        delay: g.f.Medium,
                        duration: g.g.Medium,
                        enabled: !0
                    }, o.createElement(g._29, {
                        background: g.m.Base,
                        padding: {
                            x: 3,
                            top: 2,
                            bottom: 3
                        }
                    }, o.createElement(g._0, {
                        padding: {
                            bottom: 1
                        }
                    }, o.createElement(g.O, {
                        fontSize: g.T.Size3
                    }, Object(c.d)("Delete Collection", "DeleteCollectionModal"))), o.createElement(g.O, {
                        fontSize: g.T.Size6
                    }, Object(c.d)("Are you sure you want to delete this collection?", "DeleteCollectionModal")), o.createElement(g.O, {
                        fontSize: g.T.Size6
                    }, Object(c.d)("This action cannot be undone. ", "DeleteCollectionModal")), o.createElement(g._6, {
                        padding: {
                            y: 2
                        }
                    }, o.createElement(p.a, {
                        collection: e,
                        hideOptionsMenu: !0
                    })), t, o.createElement(g._6, {
                        display: g.P.Flex,
                        flexDirection: g.R.Row,
                        justifyContent: g._5.Center
                    }, o.createElement(g._6, {
                        margin: {
                            x: .5
                        }
                    }, o.createElement(g.u, {
                        "data-test-selector": i.CancelButton,
                        onClick: this.props.onCancel,
                        type: g.A.Hollow
                    }, Object(c.d)("Cancel", "DeleteCollectionModal"))), o.createElement(g._6, {
                        margin: {
                            x: .5
                        }
                    }, o.createElement(g.u, {
                        "data-test-selector": i.ConfirmButton,
                        onClick: this.props.onDeleteRequest,
                        type: g.A.Alert
                    }, Object(c.d)("Delete", "DeleteCollectionModal")))), o.createElement(m.a, {
                        closeOnBackdropClick: !0
                    })))
                }, t
            }(o.Component),
            h = n("e6eF");
        n.d(t, "a", function() {
            return C
        });
        var v = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {}, t.defaultUserError = Object(c.d)("Unable to delete this collection, try again later.", "DeleteCollectionModal"), t.onCancelHandler = function() {
                        t.props.onClose()
                    }, t.onDeleteHandler = function() {
                        t.setState({
                            deletionError: void 0
                        }, function() {
                            return r.__awaiter(t, void 0, void 0, function() {
                                var e;
                                return r.__generator(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            if (!this.props.collection.owner) return this.setState({
                                                deletionError: this.defaultUserError
                                            }), [2];
                                            t.label = 1;
                                        case 1:
                                            return t.trys.push([1, 3, , 4]), [4, this.props.onDeleteRequest(Object(d.a)({
                                                collectionID: this.props.collection.id
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
                return r.__extends(t, e), t.prototype.render = function() {
                    return o.createElement(f, {
                        collection: this.props.collection,
                        error: this.state.deletionError,
                        onCancel: this.onCancelHandler,
                        onDeleteRequest: this.onDeleteHandler
                    })
                }, t
            }(o.Component),
            k = Object(a.compose)(Object(s.a)(h, {
                name: "onDeleteRequest"
            }))(v);
        var C = Object(l.b)(null, function(e, t) {
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
            return o
        });
        var i = n("GiK3"),
            r = (n.n(i), n("Odds")),
            o = function(e) {
                return i.createElement(r._6, {
                    alignItems: r.c.Start,
                    display: r.P.Flex,
                    flexDirection: r.R.Column,
                    flexGrow: 1,
                    flexShrink: 1,
                    justifyContent: r._5.Center,
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
        var i = n("GiK3"),
            r = (n.n(i), n("Odds")),
            o = n("QmYP"),
            a = (n.n(o), function(e) {
                return i.createElement(r._6, {
                    className: "manager-card__stats-container",
                    display: r.P.Flex,
                    flexGrow: 0,
                    flexShrink: 0,
                    flexWrap: r.S.NoWrap,
                    flexDirection: r.R.Row,
                    alignItems: r.c.Center
                }, e.children)
            })
    },
    QmYP: function(e, t) {},
    Snvs: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            r = n("GiK3"),
            o = n("3zLD"),
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
                    var t = m(e),
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
            }(r.Component);

        function u(e, t) {
            return !!e.owner || (!(!e.staff || !t.staff) || !(!e.editor || !t.editor))
        }

        function m(e) {
            var t = e.data,
                n = {
                    staff: !1,
                    editor: !1,
                    owner: !1
                };
            return !t.error && !t.loading && t.user && t.currentUser && (n.staff = !(!t.currentUser.roles || !t.currentUser.roles.isStaff), n.editor = !(!t.user.self || !t.user.self.isEditor), n.owner = t.user.id === t.currentUser.id), n
        }
        var p = Object(o.compose)(Object(l.a)(s, {
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
            return m
        }), n.d(t, "a", function() {
            return p
        })
    },
    Z8qZ: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            r = n("GiK3"),
            o = n("Odds"),
            a = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(o._29, {
                        background: o.m.Base,
                        elevation: 1,
                        display: o.P.Flex,
                        flexDirection: o.R.Row,
                        alignItems: o.c.Stretch
                    }, this.props.children)
                }, t
            }(r.Component);
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
    rvrg: function(e, t, n) {
        "use strict";
        var i = n("RH2O"),
            r = n("V5M+"),
            o = n("TToO"),
            a = n("GiK3"),
            l = n("6sO2"),
            c = n("mi6k"),
            s = n("vH/s"),
            d = n("kk4f"),
            u = n("CSlQ"),
            m = n("Z8qZ"),
            p = n("KRtN"),
            g = n("4o7v"),
            f = n("PwTO"),
            h = n("N8CH"),
            v = n("Odds"),
            k = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onDeleteOptionClickHandler = function() {
                        t.props.onDeleteOptionClick(t.props.collection)
                    }, t
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    var e, t = this.props.collection;
                    return t.thumbnailURL && (e = {
                        "160w": t.thumbnailURL
                    }), a.createElement(m.a, null, a.createElement(v._6, {
                        flexShrink: 0
                    }, a.createElement(d.a, {
                        alt: t.title,
                        sizes: [{
                            size: "160px"
                        }],
                        src: t.thumbnailURL,
                        srcSet: e,
                        videoCount: t.items.totalCount
                    })), a.createElement(h.a, null, a.createElement(v.O, {
                        bold: !0,
                        type: v._43.H4,
                        color: v.J.Alt
                    }, t.title), a.createElement(v._46, {
                        direction: v._48.Bottom,
                        label: Object(l.d)("Last Updated", "CollectionManagerCard")
                    }, a.createElement(v.O, {
                        color: v.J.Alt2
                    }, Object(l.c)(new Date(t.updatedAt), "long")))), a.createElement(f.a, null, this.collectionStats(t)), this.renderCardMenu())
                }, t.prototype.renderCardMenu = function() {
                    if (this.props.hideOptionsMenu || !this.props.collection.owner) return null;
                    var e = [{
                        asset: v._20.Edit,
                        linkTo: {
                            pathname: "/" + this.props.collection.owner.login + "/manager/collections/" + this.props.collection.id,
                            state: {
                                content: s.PageviewContent.CollectionCard,
                                medium: s.PageviewMedium.VideoManagerCollectionManager
                            }
                        },
                        title: Object(l.d)("Edit", "CollectionManagerCard")
                    }, {
                        asset: v._20.Trash,
                        onClick: this.onDeleteOptionClickHandler,
                        title: Object(l.d)("Delete", "CollectionManagerCard")
                    }];
                    return a.createElement(p.a, {
                        options: e
                    })
                }, t.prototype.collectionStats = function(e) {
                    return [{
                        value: Object(c.a)(e.lengthSeconds),
                        icon: v._20.GlyphLength,
                        label: Object(l.d)("Collection length", "CollectionManagerCard")
                    }, {
                        value: "" + e.viewCount,
                        icon: v._20.GlyphViews,
                        label: Object(l.d)("Views", "CollectionManagerCard")
                    }].map(function(e, t) {
                        return a.createElement(g.a, o.__assign({
                            key: t
                        }, e))
                    })
                }, t
            }(a.Component),
            C = Object(u.d)("CollectionManagerCard", {
                autoReportInteractive: !0
            })(k),
            b = n("M0wY");
        n.d(t, "a", function() {
            return S
        });
        var S = Object(i.b)(null, function(e, t) {
            return {
                onDeleteOptionClick: function(n) {
                    e(Object(r.d)(b.a, {
                        collection: n,
                        onSuccess: t.onDelete
                    }))
                }
            }
        })(C)
    }
});
//# sourceMappingURL=pages.video-tools.pages.collection-manager-4be46d29ba339ae27b1a512a5c0af098.js.map