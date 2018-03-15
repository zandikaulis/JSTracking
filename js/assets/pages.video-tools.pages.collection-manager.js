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
                    var e = o.createElement(a._4, {
                            alignItems: a.c.Center,
                            display: a.P.Flex,
                            fullHeight: !0,
                            justifyContent: a._3.Center,
                            padding: 2
                        }, o.createElement(a._26, {
                            icon: this.props.icon,
                            label: this.props.label,
                            value: this.props.value
                        })),
                        t = this.props.linkTo ? o.createElement(a._2, {
                            alpha: !0,
                            linkTo: this.props.linkTo,
                            targetBlank: !0
                        }, e) : e;
                    return o.createElement(a._4, i.__assign({
                        display: a.P.InlineFlex,
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
        var i = n("TToO"),
            o = n("GiK3"),
            r = n("3zLD"),
            a = n("6sO2"),
            l = n("zCIC"),
            c = n("j7/Y"),
            s = n("oIkB"),
            d = n("w9tK"),
            u = n("vH/s"),
            m = n("CSlQ"),
            p = n("Z8qZ"),
            h = n("PwTO"),
            g = n("N8CH"),
            v = n("Odds"),
            k = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return o.createElement(p.a, null, o.createElement(v._4, null, o.createElement(v._10, {
                        height: 75,
                        width: 133
                    })), o.createElement(g.a, null, o.createElement(v.O, null, o.createElement(v._10, {
                        width: 600,
                        lineCount: 1
                    }), o.createElement(v._10, {
                        width: 200,
                        lineCount: 1
                    }))), o.createElement(h.a, null, o.createElement(v.O, null, o.createElement(v._10, {
                        width: 40,
                        lineCount: 1
                    }))), o.createElement(v._4, {
                        flexGrow: 0,
                        flexShrink: 0
                    }, o.createElement(v._4, {
                        fullHeight: !0,
                        display: v.P.Flex,
                        alignItems: v.c.Center,
                        justifyContent: v._3.Center,
                        padding: 1
                    }, o.createElement(v.O, null, o.createElement(v._10, {
                        width: 20,
                        lineCount: 1
                    })))))
                }, t
            }(o.PureComponent),
            f = n("CIox"),
            C = n("7vx8"),
            E = n("jXn2"),
            b = n("1myv"),
            _ = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        collectionTitle: "",
                        creationErrorMessage: ""
                    }, t.defaultCreationError = Object(a.d)("Creation attempt failed. Please try again.", "CollectionCreator"), t.onNameInputChangeHandler = function(e) {
                        t.setState({
                            collectionTitle: e.currentTarget.value,
                            creationErrorMessage: ""
                        })
                    }, t.onCreateButtonClickHandler = function() {
                        t.setState({
                            creationErrorMessage: ""
                        }, function() {
                            return i.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, o, r, l, c, d;
                                return i.__generator(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            if (!this.props.context) return a.j.error(new Error("Collection creation attempt occurred without valid creation context"), "CreateCollection"), this.setState({
                                                creationErrorMessage: this.defaultCreationError
                                            }), [2];
                                            e = this.props.context, t = e.ownerID, n = e.ownerLogin, o = e.sessionUserID, r = Object(s.a)({
                                                ownerID: t,
                                                title: this.state.collectionTitle
                                            }), i.label = 1;
                                        case 1:
                                            return i.trys.push([1, 3, , 4]), [4, this.props.createCollection(r)];
                                        case 2:
                                            return l = i.sent().data, c = l.createCollection.collection, Object(E.b)({
                                                channelID: t,
                                                playlistID: c.id,
                                                userID: o,
                                                title: c.title
                                            }), this.props.history.push("/" + n + "/manager/collections/" + c.id, {
                                                content: u.PageviewContent.CollectionCreator,
                                                medium: u.PageviewMedium.VideoManagerCollectionManager
                                            }), [3, 4];
                                        case 3:
                                            return d = i.sent(), a.j.error(d, "CreateCollection", {
                                                mutationInput: r
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
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = Object(a.d)("{currentLength} of {maxLength} characters.", {
                            currentLength: this.state.collectionTitle.length.toString(),
                            maxLength: 100..toString()
                        }, "CollectionCreator"),
                        t = null;
                    return 0 === this.state.creationErrorMessage.length && (t = o.createElement(v._4, {
                        visibility: this.state.collectionTitle.length > 0 ? v._52.Visible : v._52.Hidden,
                        "data-test-selector": "length-hint"
                    }, o.createElement(v.O, null, e))), o.createElement(v.U, {
                        error: this.state.creationErrorMessage.length > 0,
                        errorMessage: this.state.creationErrorMessage,
                        label: ""
                    }, o.createElement(v.W, null, o.createElement(v.K, {
                        cols: {
                            default: 3,
                            xl: 2
                        }
                    }, o.createElement(v._0, {
                        disabled: !this.props.context,
                        maxLength: 100,
                        onChange: this.onNameInputChangeHandler,
                        placeholder: Object(a.d)("Collection name", "CollectionCreator"),
                        type: v._1.Text
                    }), t), o.createElement(v.K, {
                        cols: 3
                    }, o.createElement(v.u, {
                        disabled: !this.props.context || "" === this.state.collectionTitle,
                        onClick: this.onCreateButtonClickHandler
                    }, Object(a.d)("Create Collection", "CollectionCreator")))))
                }, t
            }(o.Component),
            y = Object(r.compose)(Object(C.a)(b, {
                name: "createCollection"
            }))(Object(f.e)(_)),
            O = n("rvrg"),
            S = n("I9kX"),
            N = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onDeleteCollectionHandler = function() {
                        t.props.data.refetch({
                            creatorLogin: t.props.match.params.creatorLogin
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
                    e.data.loading && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e, t = !1;
                    return this.props.data.loading ? e = this.collectionCardPlaceholders() : !this.props.data.error && this.props.data.user && this.props.data.user.collections ? this.props.data.user.collections.edges.length > 0 ? (e = this.renderCollections(this.props.data.user.collections.edges), t = this.props.data.user.collections.pageInfo.hasNextPage || !1) : e = this.noCollectionsCTA() : e = this.contentUnavaibleError(), o.createElement(l.b, null, o.createElement(v._4, {
                        fullHeight: !0,
                        padding: {
                            top: 2,
                            x: 2
                        }
                    }, o.createElement(v._4, {
                        padding: {
                            bottom: 2
                        }
                    }, o.createElement(v.O, {
                        type: v._41.H2
                    }, Object(a.d)("Collections", "CollectionManager"))), o.createElement(y, {
                        context: this.props.data.user && this.props.data.currentUser ? {
                            ownerID: this.props.data.user.id,
                            ownerLogin: this.props.match.params.creatorLogin,
                            sessionUserID: this.props.data.currentUser.id
                        } : void 0
                    }), o.createElement(v._4, {
                        fullWidth: !0,
                        padding: {
                            top: 2
                        }
                    }, e, o.createElement(l.a, {
                        enabled: t,
                        loadMore: this.props.loadMore
                    }))))
                }, t.prototype.renderCollections = function(e) {
                    var t = this;
                    return e.map(function(e, n) {
                        return o.createElement(v._4, {
                            key: n,
                            margin: {
                                bottom: 1
                            }
                        }, o.createElement(O.a, {
                            collection: e.node,
                            onDelete: t.onDeleteCollectionHandler
                        }))
                    })
                }, t.prototype.collectionCardPlaceholders = function() {
                    for (var e = [], t = 0; t < 3; t++) e.push(o.createElement(v._4, {
                        key: t,
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(k, null)));
                    return e
                }, t.prototype.noCollectionsCTA = function() {
                    return o.createElement("div", null)
                }, t.prototype.contentUnavaibleError = function() {
                    return o.createElement("div", null)
                }, t
            }(o.Component),
            M = Object(r.compose)(Object(r.graphql)(S, {
                options: function(e) {
                    return {
                        variables: {
                            creatorLogin: e.match.params.creatorLogin
                        }
                    }
                },
                props: function(e) {
                    return i.__assign({}, e, {
                        loadMore: function() {
                            var t = e.data.user && e.data.user.collections ? e.data.user.collections.edges : [],
                                n = t.length > 0 ? t[t.length - 1].cursor : void 0;
                            return e.data.fetchMore({
                                query: S,
                                variables: i.__assign({}, e.data.variables, {
                                    after: n
                                }),
                                updateQuery: function(e, t) {
                                    var n = t.fetchMoreResult;
                                    if (!n.user || !n.user.collections) return e;
                                    var o = e.user && e.user.collections ? e.user.collections.edges : [];
                                    return {
                                        user: i.__assign({}, n.user, {
                                            collections: i.__assign({}, n.user.collections, {
                                                edges: Object(s.b)(o, n.user.collections.edges)
                                            })
                                        })
                                    }
                                }
                            })
                        }
                    })
                }
            }), Object(m.d)("CollectionManager", {
                destination: d.a.VideoManagerCollectionsManager
            }), Object(c.a)({
                location: u.PageviewLocation.VideoManagerCollectionManager,
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
            D = n("L2R7"),
            w = function(e) {
                return window.location.replace("https://www.twitch.tv/" + encodeURIComponent(e.match.params.creatorLogin) + "/manager/collections"), null
            },
            x = function(e) {
                return Object(D.a)() ? o.createElement(M, i.__assign({}, e)) : o.createElement(w, i.__assign({}, e))
            };
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
                var t = e.asset ? o.createElement(a._17, {
                    asset: e.asset
                }) : null;
                return o.createElement(a._2, {
                    linkTo: e.linkTo,
                    onClick: e.onClick
                }, o.createElement(a._4, {
                    alignItems: a.c.Center,
                    display: a.P.Flex,
                    flexGrow: 1,
                    padding: 1
                }, t, o.createElement(a.Y, {
                    margin: {
                        left: 1
                    }
                }, o.createElement(a.O, null, e.title))))
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
                return this.state.showDropMenu && (e = this.dropMenu()), o.createElement(a._4, {
                    flexGrow: 0,
                    flexShrink: 0,
                    display: a.P.Flex,
                    position: a._11.Relative
                }, o.createElement(a.Y, {
                    fullHeight: !0
                }, o.createElement(r.a, {
                    onClickOut: this.clickOutHandler
                }, o.createElement(a._4, {
                    fullHeight: !0,
                    display: a.P.Flex,
                    alignItems: a.c.Stretch
                }, o.createElement(a.u, {
                    disabled: 0 === this.props.options.length,
                    icon: a._18.More,
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
            d = n("oIkB"),
            u = n("V5M+"),
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
                    }, r.createElement(h._27, {
                        border: !0,
                        margin: {
                            bottom: 1
                        },
                        padding: 1,
                        fullWidth: !0
                    }, r.createElement(h.O, {
                        bold: !0,
                        color: h.J.Error,
                        "data-test-selector": i.ErrorAlert
                    }, this.props.error)))), r.createElement(h.e, {
                        type: h.i.FadeIn,
                        delay: h.f.Medium,
                        duration: h.g.Medium,
                        enabled: !0
                    }, r.createElement(h._27, {
                        background: h.m.Base,
                        padding: {
                            x: 3,
                            top: 2,
                            bottom: 3
                        }
                    }, r.createElement(h.Y, {
                        padding: {
                            bottom: 1
                        }
                    }, r.createElement(h.O, {
                        fontSize: h.T.Size3
                    }, Object(c.d)("Delete Collection", "DeleteCollectionModal"))), r.createElement(h.O, {
                        fontSize: h.T.Size6
                    }, Object(c.d)("Are you sure you want to delete this collection?", "DeleteCollectionModal")), r.createElement(h.O, {
                        fontSize: h.T.Size6
                    }, Object(c.d)("This action cannot be undone. ", "DeleteCollectionModal")), r.createElement(h._4, {
                        padding: {
                            y: 2
                        }
                    }, r.createElement(p.a, {
                        collection: e,
                        hideOptionsMenu: !0
                    })), t, r.createElement(h._4, {
                        display: h.P.Flex,
                        flexDirection: h.R.Row,
                        justifyContent: h._3.Center
                    }, r.createElement(h._4, {
                        margin: {
                            x: .5
                        }
                    }, r.createElement(h.u, {
                        "data-test-selector": i.CancelButton,
                        onClick: this.props.onCancel,
                        type: h.A.Hollow
                    }, Object(c.d)("Cancel", "DeleteCollectionModal"))), r.createElement(h._4, {
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
            v = n("e6eF");
        n.d(t, "a", function() {
            return C
        });
        var k = function(e) {
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
                return o.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(g, {
                        collection: this.props.collection,
                        error: this.state.deletionError,
                        onCancel: this.onCancelHandler,
                        onDeleteRequest: this.onDeleteHandler
                    })
                }, t
            }(r.Component),
            f = Object(a.compose)(Object(s.a)(v, {
                name: "onDeleteRequest"
            }))(k);
        var C = Object(l.b)(null, function(e, t) {
            return {
                onClose: function() {
                    e(Object(u.c)())
                },
                onSuccess: function() {
                    e(Object(u.c)()), t.onSuccess && t.onSuccess()
                }
            }
        })(f)
    },
    N8CH: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
        });
        var i = n("GiK3"),
            o = (n.n(i), n("Odds")),
            r = function(e) {
                return i.createElement(o._4, {
                    alignItems: o.c.Start,
                    display: o.P.Flex,
                    flexDirection: o.R.Column,
                    flexGrow: 1,
                    flexShrink: 1,
                    justifyContent: o._3.Center,
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
                return i.createElement(o._4, {
                    className: "manager-card__stats-container",
                    display: o.P.Flex,
                    flexGrow: 0,
                    flexShrink: 0,
                    flexWrap: o.S.NoWrap,
                    flexDirection: o.R.Row,
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
                    return o.createElement(r._27, {
                        background: r.m.Base,
                        elevation: 1,
                        display: r.P.Flex,
                        flexDirection: r.R.Row,
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
            d = n("kk4f"),
            u = n("CSlQ"),
            m = n("Z8qZ"),
            p = n("KRtN"),
            h = n("4o7v"),
            g = n("PwTO"),
            v = n("N8CH"),
            k = n("Odds"),
            f = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onDeleteOptionClickHandler = function() {
                        t.props.onDeleteOptionClick(t.props.collection)
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.collection;
                    return a.createElement(m.a, null, a.createElement(k._4, {
                        flexShrink: 0
                    }, a.createElement(d.a, {
                        alt: e.title,
                        sizes: [{
                            size: "160px"
                        }],
                        src: e.thumbnailURL,
                        videoCount: e.items.totalCount
                    })), a.createElement(v.a, null, a.createElement(k.O, {
                        bold: !0,
                        type: k._41.H4,
                        color: k.J.Alt
                    }, e.title), a.createElement(k._44, {
                        direction: k._46.Bottom,
                        label: Object(l.d)("Last Updated", "CollectionManagerCard")
                    }, a.createElement(k.O, {
                        color: k.J.Alt2
                    }, Object(l.c)(new Date(e.updatedAt), "long")))), a.createElement(g.a, null, this.collectionStats(e)), this.renderCardMenu())
                }, t.prototype.renderCardMenu = function() {
                    if (this.props.hideOptionsMenu || !this.props.collection.owner) return null;
                    var e = [{
                        asset: k._18.Edit,
                        linkTo: {
                            pathname: "/" + this.props.collection.owner.login + "/manager/collections/" + this.props.collection.id,
                            state: {
                                content: s.PageviewContent.CollectionCard,
                                medium: s.PageviewMedium.VideoManagerCollectionManager
                            }
                        },
                        title: Object(l.d)("Edit", "CollectionManagerCard")
                    }, {
                        asset: k._18.Trash,
                        onClick: this.onDeleteOptionClickHandler,
                        title: Object(l.d)("Delete", "CollectionManagerCard")
                    }];
                    return a.createElement(p.a, {
                        options: e
                    })
                }, t.prototype.collectionStats = function(e) {
                    return [{
                        value: Object(c.a)(e.lengthSeconds),
                        icon: k._18.GlyphLength,
                        label: Object(l.d)("Collection length", "CollectionManagerCard")
                    }, {
                        value: "" + e.viewCount,
                        icon: k._18.GlyphViews,
                        label: Object(l.d)("Views", "CollectionManagerCard")
                    }].map(function(e, t) {
                        return a.createElement(h.a, r.__assign({
                            key: t
                        }, e))
                    })
                }, t
            }(a.Component),
            C = Object(u.d)("CollectionManagerCard", {
                autoReportInteractive: !0
            })(f),
            E = n("M0wY");
        n.d(t, "a", function() {
            return b
        });
        var b = Object(i.b)(null, function(e, t) {
            return {
                onDeleteOptionClick: function(n) {
                    e(Object(o.d)(E.a, {
                        collection: n,
                        onSuccess: t.onDelete
                    }))
                }
            }
        })(C)
    }
});
//# sourceMappingURL=pages.video-tools.pages.collection-manager-9e7ddc1476461237b4201b39adf705c5.js.map