webpackJsonp([78], {
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
            o = n("GiK3"),
            r = (n.n(o), n("5kgt")),
            a = n("Odds"),
            l = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = o.createElement(a._2, {
                            alignItems: a.c.Center,
                            display: a.N.Flex,
                            fullHeight: !0,
                            justifyContent: a._1.Center,
                            padding: 2
                        }, o.createElement(a._24, {
                            icon: this.props.icon,
                            label: this.props.label,
                            value: this.props.value
                        })),
                        t = this.props.linkTo ? o.createElement(a._0, {
                            alpha: !0,
                            linkTo: this.props.linkTo,
                            targetBlank: !0
                        }, e) : e;
                    return o.createElement(a._2, i.__assign({
                        display: a.N.InlineFlex,
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
            g = n("PwTO"),
            k = n("N8CH"),
            v = n("Odds"),
            h = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return o.createElement(p.a, null, o.createElement(v._2, null, o.createElement(v._8, {
                        height: 75,
                        width: 133
                    })), o.createElement(k.a, null, o.createElement(v._35, null, o.createElement(v._8, {
                        width: 600,
                        lineCount: 1
                    }), o.createElement(v._8, {
                        width: 200,
                        lineCount: 1
                    }))), o.createElement(g.a, null, o.createElement(v._35, null, o.createElement(v._8, {
                        width: 40,
                        lineCount: 1
                    }))), o.createElement(v._2, {
                        flexGrow: 0,
                        flexShrink: 0
                    }, o.createElement(v._2, {
                        fullHeight: !0,
                        display: v.N.Flex,
                        alignItems: v.c.Center,
                        justifyContent: v._1.Center,
                        padding: 1
                    }, o.createElement(v._35, null, o.createElement(v._8, {
                        width: 20,
                        lineCount: 1
                    })))))
                }, t
            }(o.PureComponent),
            f = n("CIox"),
            C = n("7vx8"),
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
                            return i.__awaiter(t, void 0, void 0, function() {
                                var e, t, n;
                                return i.__generator(this, function(i) {
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
                                            return n = i.sent(), a.i.error(n, "createCollection", {
                                                mutationInput: e
                                            }), this.setState({
                                                creationErrorMessage: Object(a.d)("Creation attempt failed. Please try again.", "CollectionCreator")
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
                    return 0 === this.state.creationErrorMessage.length && (t = o.createElement(v._2, {
                        visibility: this.state.collectionTitle.length > 0 ? v._51.Visible : v._51.Hidden,
                        "data-test-selector": "length-hint"
                    }, o.createElement(v._35, null, e))), o.createElement(v.S, {
                        error: this.state.creationErrorMessage.length > 0,
                        errorMessage: this.state.creationErrorMessage,
                        label: ""
                    }, o.createElement(v.U, null, o.createElement(v.J, {
                        cols: {
                            default: 3,
                            xl: 2
                        }
                    }, o.createElement(v.Y, {
                        disabled: null === this.props.creatorID,
                        maxLength: 100,
                        onChange: this.onNameInputChangeHandler,
                        placeholder: Object(a.d)("Collection name", "CollectionCreator"),
                        type: v.Z.Text
                    }), t), o.createElement(v.J, {
                        cols: 3
                    }, o.createElement(v.u, {
                        disabled: null === this.props.creatorID || "" === this.state.collectionTitle,
                        onClick: this.onCreateButtonClickHandler
                    }, Object(a.d)("Create Collection", "CollectionCreator")))))
                }, t
            }(o.Component),
            y = Object(r.compose)(Object(C.a)(_, {
                name: "createCollection"
            }))(Object(f.e)(b)),
            E = n("rvrg"),
            N = n("I9kX"),
            S = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
                    e.data.loading && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e, t = !1;
                    return this.props.data.loading ? e = this.collectionCardPlaceholders() : !this.props.data.error && this.props.data.user && this.props.data.user.collections ? this.props.data.user.collections.edges.length > 0 ? (e = this.renderCollections(this.props.data.user.collections.edges), t = this.props.data.user.collections.pageInfo.hasNextPage || !1) : e = this.noCollectionsCTA() : e = this.contentUnavaibleError(), o.createElement(l.b, null, o.createElement(v._2, {
                        fullHeight: !0,
                        padding: {
                            top: 2,
                            x: 2
                        }
                    }, o.createElement(v._2, {
                        padding: {
                            bottom: 2
                        }
                    }, o.createElement(v._35, {
                        type: v._40.H2
                    }, Object(a.d)("Collections", "CollectionManager"))), o.createElement(y, {
                        creatorID: this.props.data.user ? this.props.data.user.id : null,
                        creatorLogin: this.props.match.params.creatorLogin
                    }), o.createElement(v._2, {
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
                        return o.createElement(v._2, {
                            key: n,
                            margin: {
                                bottom: 1
                            }
                        }, o.createElement(E.a, {
                            collection: e.node,
                            creatorLogin: t.props.match.params.creatorLogin
                        }))
                    })
                }, t.prototype.collectionCardPlaceholders = function() {
                    for (var e = [], t = 0; t < 3; t++) e.push(o.createElement(v._2, {
                        key: t,
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(h, null)));
                    return e
                }, t.prototype.noCollectionsCTA = function() {
                    return o.createElement("div", null)
                }, t.prototype.contentUnavaibleError = function() {
                    return o.createElement("div", null)
                }, t
            }(o.Component),
            D = Object(r.compose)(Object(r.graphql)(N, {
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
                                query: N,
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
            }))(S),
            O = n("L2R7"),
            M = function(e) {
                return window.location.replace("https://www.twitch.tv/" + encodeURIComponent(e.match.params.creatorLogin) + "/manager/collections"), null
            },
            w = function(e) {
                return Object(O.a)() ? o.createElement(D, i.__assign({}, e)) : o.createElement(M, i.__assign({}, e))
            };
        n.d(t, "CollectionManagerPage", function() {
            return w
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
            o = n("GiK3"),
            r = n("rCmJ"),
            a = n("Odds"),
            l = function(e) {
                var t = e.asset ? o.createElement(a._15, {
                    asset: e.asset
                }) : null;
                return o.createElement(a._0, {
                    linkTo: e.linkTo,
                    onClick: e.onClick
                }, o.createElement(a._2, {
                    alignItems: a.c.Center,
                    display: a.N.Flex,
                    flexGrow: 1,
                    padding: 1
                }, t, o.createElement(a.W, {
                    margin: {
                        left: 1
                    }
                }, o.createElement(a._35, null, e.title))))
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
                return this.state.showDropMenu && (e = this.dropMenu()), o.createElement(a._2, {
                    flexGrow: 0,
                    flexShrink: 0,
                    display: a.N.Flex,
                    position: a._9.Relative
                }, o.createElement(a.W, {
                    fullHeight: !0
                }, o.createElement(r.a, {
                    onClickOut: this.clickOutHandler
                }, o.createElement(a._2, {
                    fullHeight: !0,
                    display: a.N.Flex,
                    alignItems: a.c.Stretch
                }, o.createElement(a.u, {
                    disabled: 0 === this.props.options.length,
                    icon: a._16.More,
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
    M0wY: function(e, t, n) {
        "use strict";
        var i, o = n("TToO"),
            r = n("GiK3"),
            a = n("3zLD"),
            l = n("RH2O"),
            c = n("2KeS"),
            s = n("6sO2"),
            d = n("7vx8"),
            u = n("V5M+"),
            m = n("+8VM"),
            p = n("rvrg"),
            g = n("Odds");
        ! function(e) {
            e[e.CancelButton = 0] = "CancelButton", e[e.ConfirmButton = 1] = "ConfirmButton", e[e.ErrorAlert = 2] = "ErrorAlert"
        }(i || (i = {}));
        var k = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.collection,
                        t = null;
                    return this.props.error && (t = r.createElement(g.e, {
                        delay: g.f.Short,
                        type: g.i.BounceIn,
                        enabled: !0
                    }, r.createElement(g._25, {
                        border: !0,
                        margin: {
                            bottom: 1
                        },
                        padding: 1,
                        fullWidth: !0
                    }, r.createElement(g._35, {
                        bold: !0,
                        color: g.I.Error,
                        "data-test-selector": i.ErrorAlert
                    }, this.props.error)))), r.createElement(g.e, {
                        type: g.i.FadeIn,
                        delay: g.f.Medium,
                        duration: g.g.Medium,
                        enabled: !0
                    }, r.createElement(g._25, {
                        background: g.m.Base,
                        padding: {
                            x: 3,
                            top: 2,
                            bottom: 3
                        }
                    }, r.createElement(g.W, {
                        padding: {
                            bottom: 1
                        }
                    }, r.createElement(g._35, {
                        fontSize: g.R.Size3
                    }, Object(s.d)("Delete Collection", "DeleteCollectionModal"))), r.createElement(g._35, {
                        fontSize: g.R.Size6
                    }, Object(s.d)("Are you sure you want to delete this collection?", "DeleteCollectionModal")), r.createElement(g._35, {
                        fontSize: g.R.Size6
                    }, Object(s.d)("This action cannot be undone. ", "DeleteCollectionModal")), r.createElement(g._2, {
                        padding: {
                            y: 2
                        }
                    }, r.createElement(p.a, {
                        collection: e,
                        creatorLogin: this.props.creatorLogin,
                        hideOptionsMenu: !0
                    })), t, r.createElement(g._2, {
                        display: g.N.Flex,
                        flexDirection: g.P.Row,
                        justifyContent: g._1.Center
                    }, r.createElement(g._2, {
                        margin: {
                            x: .5
                        }
                    }, r.createElement(g.u, {
                        "data-test-selector": i.CancelButton,
                        onClick: this.props.onCancel,
                        type: g.z.Hollow
                    }, Object(s.d)("Cancel", "DeleteCollectionModal"))), r.createElement(g._2, {
                        margin: {
                            x: .5
                        }
                    }, r.createElement(g.u, {
                        "data-test-selector": i.ConfirmButton,
                        onClick: this.props.onDelete,
                        type: g.z.Alert
                    }, Object(s.d)("Delete", "DeleteCollectionModal")))), r.createElement(m.a, null)))
                }, t
            }(r.Component),
            v = n("kL3X"),
            h = n("e6eF");
        n.d(t, "a", function() {
            return b
        });
        var f = this,
            C = function(e) {
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
                                                deletionError: Object(s.d)("Unable to delete this collection, try again.", "DeleteCollectionModal")
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
                    return r.createElement(k, {
                        collection: this.props.collection,
                        creatorLogin: this.props.creatorLogin,
                        error: this.state.deletionError,
                        onCancel: this.onCancelHandler,
                        onDelete: this.onDeleteHandler
                    })
                }, t
            }(r.Component);
        var _ = Object(a.compose)(Object(d.a)(h, {
                name: "onDeleteRequest",
                props: function(e) {
                    return {
                        onDeleteRequest: function(t) {
                            return o.__awaiter(f, void 0, void 0, function() {
                                var n;
                                return o.__generator(this, function(i) {
                                    if (!e.mutate) throw n = new Error("No mutation function exists, cannot delete collection"), s.i.error(n, "DeleteCollectionModal"), n;
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
                                                                        query: v,
                                                                        variables: n
                                                                    });
                                                                i && i.user && i.user.collections && (i.user.collections.edges = i.user.collections.edges.filter(function(e) {
                                                                    return e.node.id !== t.collectionID
                                                                }), e.writeQuery({
                                                                    query: v,
                                                                    variables: n,
                                                                    data: i
                                                                }))
                                                            }
                                                        })];
                                                    case 1:
                                                        return i.sent(), [3, 3];
                                                    case 2:
                                                        throw n = i.sent(), s.i.error(n, "DeleteCollectionModal"), n;
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
            }))(C),
            b = Object(l.b)(null, function(e) {
                return Object(c.b)({
                    onClose: u.c
                }, e)
            })(_)
    },
    N8CH: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
        });
        var i = n("GiK3"),
            o = (n.n(i), n("Odds")),
            r = function(e) {
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
            return a
        });
        var i = n("GiK3"),
            o = (n.n(i), n("Odds")),
            r = n("QmYP"),
            a = (n.n(r), function(e) {
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
            o = n("GiK3"),
            r = n("Odds"),
            a = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return o.createElement(r._25, {
                        background: r.m.Base,
                        elevation: 1,
                        display: r.N.Flex,
                        flexDirection: r.P.Row,
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
            g = n("4o7v"),
            k = n("PwTO"),
            v = n("N8CH"),
            h = n("Odds"),
            f = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onDeleteOptionClickHandler = function() {
                        t.props.onDeleteOptionClick(t.props.collection, t.props.creatorLogin)
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.collection,
                        t = null;
                    return this.props.hideOptionsMenu || (t = a.createElement(p.a, {
                        options: this.collectionMenuOptions()
                    })), a.createElement(m.a, null, a.createElement(h._2, {
                        flexShrink: 0
                    }, a.createElement(d.a, {
                        alt: e.title,
                        sizes: [{
                            size: "160px"
                        }],
                        src: e.thumbnailURL,
                        videoCount: e.items.totalCount
                    })), a.createElement(v.a, null, a.createElement(h._35, {
                        bold: !0,
                        type: h._40.H4,
                        color: h.I.Alt
                    }, e.title), a.createElement(h._43, {
                        direction: h._45.Bottom,
                        label: Object(l.d)("Last Updated", "CollectionManagerCard")
                    }, a.createElement(h._35, {
                        color: h.I.Alt2
                    }, Object(l.c)(new Date(e.updatedAt), "long")))), a.createElement(k.a, null, this.collectionStats(e)), t)
                }, t.prototype.collectionMenuOptions = function() {
                    return [{
                        asset: h._16.Edit,
                        linkTo: {
                            pathname: "/" + this.props.creatorLogin + "/manager/collections/" + this.props.collection.id,
                            state: {
                                content: s.PageviewContent.CollectionCard,
                                medium: s.PageviewMedium.VideoManagerCollectionManager
                            }
                        },
                        title: Object(l.d)("Edit", "CollectionManagerCard")
                    }, {
                        asset: h._16.Trash,
                        onClick: this.onDeleteOptionClickHandler,
                        title: Object(l.d)("Delete", "CollectionManagerCard")
                    }]
                }, t.prototype.collectionStats = function(e) {
                    return [{
                        value: Object(c.a)(e.lengthSeconds),
                        icon: h._16.GlyphLength,
                        label: Object(l.d)("Collection length", "CollectionManagerCard")
                    }, {
                        value: "" + e.viewCount,
                        icon: h._16.GlyphViews,
                        label: Object(l.d)("Views", "CollectionManagerCard")
                    }].map(function(e, t) {
                        return a.createElement(g.a, r.__assign({
                            key: t
                        }, e))
                    })
                }, t
            }(a.Component),
            C = Object(u.d)("CollectionManagerCard", {
                autoReportInteractive: !0
            })(f),
            _ = n("M0wY");
        n.d(t, "a", function() {
            return b
        });
        var b = Object(i.b)(null, function(e) {
            return {
                onDeleteOptionClick: function(t, n) {
                    e(Object(o.d)(_.a, {
                        collection: t,
                        creatorLogin: n
                    }))
                }
            }
        })(C)
    }
});
//# sourceMappingURL=pages.video-tools.pages.collection-manager-8080e2f4121ce597dc589a684b392474.js.map