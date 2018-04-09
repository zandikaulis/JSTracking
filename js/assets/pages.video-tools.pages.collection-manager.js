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
            o = n("GiK3"),
            r = (n.n(o), n("5kgt")),
            a = n("Odds"),
            l = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = o.createElement(a._7, {
                            alignItems: a.c.Center,
                            display: a.Q.Flex,
                            fullHeight: !0,
                            justifyContent: a._6.Center,
                            padding: 2
                        }, o.createElement(a._29, {
                            icon: this.props.icon,
                            label: this.props.label,
                            value: this.props.value
                        })),
                        t = this.props.linkTo ? o.createElement(a._5, {
                            alpha: !0,
                            linkTo: this.props.linkTo,
                            targetBlank: !0
                        }, e) : e;
                    return o.createElement(a._7, i.__assign({
                        display: a.Q.InlineFlex,
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
            r = n("GiK3"),
            a = n("6sO2"),
            l = n("yWCw"),
            c = n("Snvs"),
            s = n("3zLD"),
            u = n("zCIC"),
            d = n("j7/Y"),
            m = n("oIkB"),
            p = n("w9tK"),
            h = n("vH/s"),
            g = n("CSlQ"),
            C = n("Z8qZ"),
            f = n("PwTO"),
            v = n("N8CH"),
            k = n("Odds"),
            b = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(C.a, null, r.createElement(k._7, null, r.createElement(k._13, {
                        height: 75,
                        width: 133
                    })), r.createElement(v.a, null, r.createElement(k.P, null, r.createElement(k._13, {
                        width: 600,
                        lineCount: 1
                    }), r.createElement(k._13, {
                        width: 200,
                        lineCount: 1
                    }))), r.createElement(f.a, null, r.createElement(k.P, null, r.createElement(k._13, {
                        width: 40,
                        lineCount: 1
                    }))), r.createElement(k._7, {
                        flexGrow: 0,
                        flexShrink: 0
                    }, r.createElement(k._7, {
                        fullHeight: !0,
                        display: k.Q.Flex,
                        alignItems: k.c.Center,
                        justifyContent: k._6.Center,
                        padding: 1
                    }, r.createElement(k.P, null, r.createElement(k._13, {
                        width: 20,
                        lineCount: 1
                    })))))
                }, t
            }(r.PureComponent),
            E = n("CIox"),
            _ = n("7vx8"),
            y = n("jXn2"),
            S = n("F0UT"),
            O = n("1myv"),
            w = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        creationErrorMessage: ""
                    }, t.defaultCreationError = Object(a.d)("Creation attempt failed. Please try again.", "CollectionCreator"), t.onCreateButtonClickHandler = function(e) {
                        t.setState({
                            creationErrorMessage: ""
                        }, function() {
                            return o.__awaiter(t, void 0, void 0, function() {
                                var t, n, i, r, l, c, s, u;
                                return o.__generator(this, function(o) {
                                    switch (o.label) {
                                        case 0:
                                            if (!this.props.context) return a.j.error(new Error("Collection creation attempt occurred without valid creation context"), "CreateCollection"), this.setState({
                                                creationErrorMessage: this.defaultCreationError
                                            }), [2];
                                            t = this.props.context, n = t.ownerID, i = t.ownerLogin, r = t.sessionUserID, l = Object(m.a)({
                                                ownerID: n,
                                                title: e
                                            }), o.label = 1;
                                        case 1:
                                            return o.trys.push([1, 3, , 4]), [4, this.props.createCollection(l)];
                                        case 2:
                                            return c = o.sent().data, s = c.createCollection.collection, Object(y.b)({
                                                channelID: n,
                                                playlistID: s.id,
                                                userID: r,
                                                title: s.title
                                            }), this.props.history.push("/" + i + "/manager/collections/" + s.id, {
                                                content: h.PageviewContent.CollectionCreator,
                                                medium: h.PageviewMedium.VideoManagerCollectionManager
                                            }), this.props.onAdd(), [3, 4];
                                        case 3:
                                            return u = o.sent(), a.j.error(u, "CreateCollection", {
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
                    return r.createElement(k.X, null, r.createElement(k.K, {
                        cols: 4
                    }, r.createElement(S.a, {
                        disabled: !this.props.context,
                        onSubmit: this.onCreateButtonClickHandler,
                        callToAction: Object(a.d)("Create Collection", "CollectionCreator"),
                        errorMessage: this.state.creationErrorMessage
                    })))
                }, t
            }(r.Component),
            N = Object(s.compose)(Object(_.a)(O, {
                name: "createCollection"
            }))(Object(E.f)(w)),
            M = n("rvrg"),
            T = n("I9kX");
        ! function(e) {
            e.CollectionsUnavailableError = "CollectionsUnavailableError", e.CreateCollection = "CreateCollection", e.noCollectionsCTA = "noCollectionsCTA"
        }(i || (i = {}));
        var D = function(e) {
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
                    return this.props.data.loading ? e = this.collectionCardPlaceholders() : !this.props.data.error && this.props.data.user && this.props.data.user.collections ? this.props.data.user.collections.edges.length > 0 ? (e = this.renderCollections(this.props.data.user.collections.edges), t = this.props.data.user.collections.pageInfo.hasNextPage || !1) : e = this.noCollectionsCTA() : e = this.contentUnavaibleError(), r.createElement(u.b, null, r.createElement(k._7, {
                        fullHeight: !0,
                        padding: {
                            top: 2,
                            x: 2
                        },
                        margin: {
                            bottom: 5
                        }
                    }, r.createElement(k._7, {
                        padding: {
                            bottom: 2
                        }
                    }, r.createElement(k.P, {
                        type: k._44.H2
                    }, Object(a.d)("Collections", "CollectionManager"))), r.createElement(N, {
                        context: this.props.data.user && this.props.data.currentUser ? {
                            ownerID: this.props.data.user.id,
                            ownerLogin: this.props.match.params.creatorLogin,
                            sessionUserID: this.props.data.currentUser.id
                        } : void 0,
                        onAdd: this.refetchCreatorCollection
                    }), r.createElement(k._7, {
                        fullWidth: !0,
                        padding: {
                            top: 2
                        },
                        margin: {
                            bottom: 5
                        }
                    }, e, r.createElement(u.a, {
                        enabled: t,
                        loadMore: this.props.loadMore
                    }))))
                }, t.prototype.renderCollections = function(e) {
                    var t = this;
                    return e.map(function(e, n) {
                        return r.createElement(k._7, {
                            key: n,
                            margin: {
                                bottom: 1
                            }
                        }, r.createElement(M.a, {
                            collection: e.node,
                            onDelete: t.refetchCreatorCollection
                        }))
                    })
                }, t.prototype.collectionCardPlaceholders = function() {
                    for (var e = [], t = 0; t < 3; t++) e.push(r.createElement(k._7, {
                        key: t,
                        margin: {
                            bottom: 1
                        }
                    }, r.createElement(b, null)));
                    return e
                }, t.prototype.noCollectionsCTA = function() {
                    return r.createElement(k._7, {
                        alignItems: k.c.Center,
                        "data-test-selector": i.noCollectionsCTA,
                        display: k.Q.Flex,
                        flexDirection: k.S.Column,
                        justifyContent: k._6.Center,
                        margin: {
                            top: 5
                        }
                    }, r.createElement(k.P, {
                        type: k._44.H4
                    }, Object(a.d)("Put all your best videos in one spot.", "CollectionManager")), r.createElement(k.P, {
                        type: k._44.H4
                    }, Object(a.d)("Videos organized into collections help your viewers easily find related content.", "CollectionManager")), r.createElement(k.P, {
                        type: k._44.H4
                    }, Object(a.d)("Your most recently updated Collection will be featured at the top of channel’s video page.", "CollectionManager")))
                }, t.prototype.contentUnavaibleError = function() {
                    return r.createElement(k._7, {
                        "data-test-selector": i.CollectionsUnavailableError
                    }, Object(a.d)("Something went wrong loading your collections. Please try again.", "CollectionEditorPagePresentation"))
                }, t
            }(r.Component),
            x = Object(s.compose)(Object(s.graphql)(T, {
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
                                query: T,
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
            }), Object(g.d)("CollectionManager", {
                destination: p.a.VideoManagerCollectionsManager
            }), Object(d.a)({
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
            }))(D),
            j = function(e) {
                return r.createElement(c.a, {
                    ownerLogin: e.match.params.creatorLogin,
                    permittedRoles: {
                        editor: !0,
                        staff: !0
                    }
                }, function(t) {
                    var n = t.loading,
                        i = t.permitted;
                    return n || i ? r.createElement(x, o.__assign({}, e)) : r.createElement(l.a, {
                        message: Object(a.d)("Something went wrong. Please try again.", "CollectionManagerPage")
                    })
                })
            },
            F = n("L2R7"),
            I = function(e) {
                return window.location.replace("https://www.twitch.tv/" + encodeURIComponent(e.match.params.creatorLogin) + "/manager/collections"), null
            },
            P = function(e) {
                return Object(F.a)() ? r.createElement(j, o.__assign({}, e)) : r.createElement(I, o.__assign({}, e))
            };
        n.d(t, "CollectionManagerPage", function() {
            return P
        })
    },
    F0UT: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return u
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
        var u = function(e) {
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
            return o.__extends(t, e), t.prototype.render = function() {
                var e = Object(a.d)("{currentLength} of {maxLength} characters.", {
                        currentLength: this.state.collectionTitle.length.toString(),
                        maxLength: 100..toString()
                    }, "CollectionCreator"),
                    t = "";
                return !this.state.localTitleChanges && this.props.errorMessage.length > 0 && (t = this.props.errorMessage), r.createElement(c.V, {
                    hint: this.state.collectionTitle.length > 0 ? e : s,
                    error: t.length > 0,
                    errorMessage: t,
                    label: ""
                }, r.createElement(c.X, null, r.createElement(c.K, {
                    cols: {
                        default: 6,
                        xl: 4
                    }
                }, r.createElement(c._3, {
                    "data-test-selector": i.TitleInput,
                    defaultValue: this.props.defaultTitle,
                    disabled: this.props.disabled,
                    maxLength: 100,
                    onChange: this.onNameInputChange,
                    placeholder: Object(a.d)("Collection name", "CollectionCreator"),
                    type: c._4.Text,
                    onKeyDown: this.onKeyDown
                })), r.createElement(c.K, {
                    cols: 1
                }, r.createElement(c.u, {
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
                var t = e.asset ? o.createElement(a._20, {
                    asset: e.asset
                }) : null;
                return o.createElement(a._5, {
                    linkTo: e.linkTo,
                    onClick: e.onClick
                }, o.createElement(a._7, {
                    alignItems: a.c.Center,
                    display: a.Q.Flex,
                    flexGrow: 1,
                    padding: 1
                }, t, o.createElement(a._1, {
                    margin: {
                        left: 1
                    }
                }, o.createElement(a.P, null, e.title))))
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
                return this.state.showDropMenu && (e = this.dropMenu()), o.createElement(a._7, {
                    flexGrow: 0,
                    flexShrink: 0,
                    display: a.Q.Flex,
                    position: a._14.Relative
                }, o.createElement(a._1, {
                    fullHeight: !0
                }, o.createElement(r.a, {
                    onClickOut: this.clickOutHandler
                }, o.createElement(a._7, {
                    fullHeight: !0,
                    display: a.Q.Flex,
                    alignItems: a.c.Stretch
                }, o.createElement(a.u, {
                    disabled: 0 === this.props.options.length,
                    icon: a._21.More,
                    onClick: this.menuButtonClickHandler,
                    type: a.A.Text
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
    M0wY: function(e, t, n) {
        "use strict";
        var i, o = n("TToO"),
            r = n("GiK3"),
            a = n("3zLD"),
            l = n("RH2O"),
            c = n("6sO2"),
            s = n("7vx8"),
            u = n("oIkB"),
            d = n("V5M+"),
            m = n("+8VM"),
            p = n("rvrg"),
            h = n("Odds");
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
                    return this.props.error && (t = r.createElement(h.e, {
                        delay: h.f.Short,
                        type: h.i.BounceIn,
                        enabled: !0
                    }, r.createElement(h._30, {
                        border: !0,
                        margin: {
                            bottom: 1
                        },
                        padding: 1,
                        fullWidth: !0
                    }, r.createElement(h.P, {
                        bold: !0,
                        color: h.J.Error,
                        "data-test-selector": i.ErrorAlert
                    }, this.props.error)))), r.createElement(h.e, {
                        type: h.i.FadeIn,
                        delay: h.f.Medium,
                        duration: h.g.Medium,
                        enabled: !0
                    }, r.createElement(h._30, {
                        background: h.m.Base,
                        padding: {
                            x: 3,
                            top: 2,
                            bottom: 3
                        }
                    }, r.createElement(h._1, {
                        padding: {
                            bottom: 1
                        }
                    }, r.createElement(h.P, {
                        fontSize: h.U.Size3
                    }, Object(c.d)("Delete Collection", "DeleteCollectionModal"))), r.createElement(h.P, {
                        fontSize: h.U.Size6
                    }, Object(c.d)("Are you sure you want to delete this collection?", "DeleteCollectionModal")), r.createElement(h.P, {
                        fontSize: h.U.Size6
                    }, Object(c.d)("This action cannot be undone. ", "DeleteCollectionModal")), r.createElement(h._7, {
                        padding: {
                            y: 2
                        }
                    }, r.createElement(p.a, {
                        collection: e,
                        hideOptionsMenu: !0
                    })), t, r.createElement(h._7, {
                        display: h.Q.Flex,
                        flexDirection: h.S.Row,
                        justifyContent: h._6.Center
                    }, r.createElement(h._7, {
                        margin: {
                            x: .5
                        }
                    }, r.createElement(h.u, {
                        "data-test-selector": i.CancelButton,
                        onClick: this.props.onCancel,
                        type: h.A.Hollow
                    }, Object(c.d)("Cancel", "DeleteCollectionModal"))), r.createElement(h._7, {
                        margin: {
                            x: .5
                        }
                    }, r.createElement(h.u, {
                        "data-test-selector": i.ConfirmButton,
                        onClick: this.props.onDeleteRequest,
                        type: h.A.Alert
                    }, Object(c.d)("Delete", "DeleteCollectionModal")))), r.createElement(m.a, {
                        closeOnBackdropClick: !0
                    })))
                }, t
            }(r.Component),
            C = n("e6eF");
        n.d(t, "a", function() {
            return k
        });
        var f = function(e) {
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
                                            return t.trys.push([1, 3, , 4]), [4, this.props.onDeleteRequest(Object(u.a)({
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
                return o.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(g, {
                        collection: this.props.collection,
                        error: this.state.deletionError,
                        onCancel: this.onCancelHandler,
                        onDeleteRequest: this.onDeleteHandler
                    })
                }, t
            }(r.Component),
            v = Object(a.compose)(Object(s.a)(C, {
                name: "onDeleteRequest"
            }))(f);
        var k = Object(l.b)(null, function(e, t) {
            return {
                onClose: function() {
                    e(Object(d.c)())
                },
                onSuccess: function() {
                    e(Object(d.c)()), t.onSuccess && t.onSuccess()
                }
            }
        })(v)
    },
    N8CH: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
        });
        var i = n("GiK3"),
            o = (n.n(i), n("Odds")),
            r = function(e) {
                return i.createElement(o._7, {
                    alignItems: o.c.Start,
                    display: o.Q.Flex,
                    flexDirection: o.S.Column,
                    flexGrow: 1,
                    flexShrink: 1,
                    justifyContent: o._6.Center,
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
            o = (n.n(i), n("Odds")),
            r = n("QmYP"),
            a = (n.n(r), function(e) {
                return i.createElement(o._7, {
                    className: "manager-card__stats-container",
                    display: o.Q.Flex,
                    flexGrow: 0,
                    flexShrink: 0,
                    flexWrap: o.T.NoWrap,
                    flexDirection: o.S.Row,
                    alignItems: o.c.Center
                }, e.children)
            })
    },
    QmYP: function(e, t) {},
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
                    return o.createElement(r._30, {
                        background: r.m.Base,
                        elevation: 1,
                        display: r.Q.Flex,
                        flexDirection: r.S.Row,
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
            o = n("V5M+"),
            r = n("TToO"),
            a = n("GiK3"),
            l = n("6sO2"),
            c = n("mi6k"),
            s = n("vH/s"),
            u = n("kk4f"),
            d = n("CSlQ"),
            m = n("Z8qZ"),
            p = n("KRtN"),
            h = n("4o7v"),
            g = n("PwTO"),
            C = n("N8CH"),
            f = n("Odds"),
            v = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onDeleteOptionClickHandler = function() {
                        t.props.onDeleteOptionClick(t.props.collection)
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e, t = this.props.collection;
                    return t.thumbnailURL && (e = {
                        "160w": t.thumbnailURL
                    }), a.createElement(m.a, null, a.createElement(f._7, {
                        flexShrink: 0
                    }, a.createElement(u.a, {
                        alt: t.title,
                        sizes: [{
                            size: "160px"
                        }],
                        src: t.thumbnailURL,
                        srcSet: e,
                        videoCount: t.items.totalCount
                    })), a.createElement(C.a, null, a.createElement(f.P, {
                        bold: !0,
                        type: f._44.H4,
                        color: f.J.Alt
                    }, t.title), a.createElement(f._47, {
                        direction: f._49.Bottom,
                        label: Object(l.d)("Last Updated", "CollectionManagerCard")
                    }, a.createElement(f.P, {
                        color: f.J.Alt2
                    }, Object(l.c)(new Date(t.updatedAt), "long")))), a.createElement(g.a, null, this.collectionStats(t)), this.renderCardMenu())
                }, t.prototype.renderCardMenu = function() {
                    if (this.props.hideOptionsMenu || !this.props.collection.owner) return null;
                    var e = [{
                        asset: f._21.Edit,
                        linkTo: {
                            pathname: "/" + this.props.collection.owner.login + "/manager/collections/" + this.props.collection.id,
                            state: {
                                content: s.PageviewContent.CollectionCard,
                                medium: s.PageviewMedium.VideoManagerCollectionManager
                            }
                        },
                        title: Object(l.d)("Edit", "CollectionManagerCard")
                    }, {
                        asset: f._21.Trash,
                        onClick: this.onDeleteOptionClickHandler,
                        title: Object(l.d)("Delete", "CollectionManagerCard")
                    }];
                    return a.createElement(p.a, {
                        options: e
                    })
                }, t.prototype.collectionStats = function(e) {
                    return [{
                        value: Object(c.a)(e.lengthSeconds),
                        icon: f._21.GlyphLength,
                        label: Object(l.d)("Collection length", "CollectionManagerCard")
                    }, {
                        value: "" + e.viewCount,
                        icon: f._21.GlyphViews,
                        label: Object(l.d)("Views", "CollectionManagerCard")
                    }].map(function(e, t) {
                        return a.createElement(h.a, r.__assign({
                            key: t
                        }, e))
                    })
                }, t
            }(a.Component),
            k = Object(d.d)("CollectionManagerCard", {
                autoReportInteractive: !0
            })(v),
            b = n("M0wY");
        n.d(t, "a", function() {
            return E
        });
        var E = Object(i.b)(null, function(e, t) {
            return {
                onDeleteOptionClick: function(n) {
                    e(Object(o.d)(b.a, {
                        collection: n,
                        onSuccess: t.onDelete
                    }))
                }
            }
        })(k)
    }
});
//# sourceMappingURL=pages.video-tools.pages.collection-manager-4efb7bb350d09a2a5740b0939e491ee9.js.map