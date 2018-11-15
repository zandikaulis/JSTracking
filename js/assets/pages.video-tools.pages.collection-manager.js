(window.webpackJsonp = window.webpackJsonp || []).push([
    [174], {
        "/+vS": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return u
            });
            var i, o = n("mrSG"),
                r = n("q1tI"),
                a = n("/7QA"),
                l = n("8Ad5"),
                c = n("Ue10"),
                s = (n("DqcE"), String.fromCharCode(160));
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
                        e.keyCode === l.a.Enter && t.canSaveTitle() && t.onSubmit()
                    }, t
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    var e = Object(a.d)("{currentLength} of {maxLength} characters.", {
                            currentLength: this.state.collectionTitle.length.toString(),
                            maxLength: 100..toString()
                        }, "CollectionCreator"),
                        t = "";
                    return !this.state.localTitleChanges && this.props.errorMessage.length > 0 && (t = this.props.errorMessage), r.createElement(c.Ea, {
                        hint: this.state.collectionTitle.length > 0 ? e : s,
                        error: t.length > 0,
                        errorMessage: t,
                        label: Object(a.d)("Title", "CollectionEditorInfoCard")
                    }, r.createElement(c.Ya, {
                        display: c.X.Flex,
                        flexDirection: c.Aa.Row
                    }, r.createElement(c.Ya, {
                        className: "collection-title-input__input",
                        display: c.X.InlineFlex,
                        margin: {
                            right: .5
                        }
                    }, r.createElement(c.Sa, {
                        "data-test-selector": i.TitleInput,
                        defaultValue: this.props.defaultTitle,
                        disabled: this.props.disabled,
                        maxLength: 100,
                        onChange: this.onNameInputChange,
                        placeholder: Object(a.d)("Collection name", "CollectionCreator"),
                        type: c.Ua.Text,
                        onKeyDown: this.onKeyDown
                    })), r.createElement(c.Ya, {
                        display: c.X.Flex
                    }, r.createElement(c.z, {
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
        "/nn1": function(e, t, n) {
            "use strict";
            n.r(t);
            var i, o = n("mrSG"),
                r = n("q1tI"),
                a = n("/7QA"),
                l = n("ZDlU"),
                c = n("VwyG"),
                s = n("oJmH"),
                u = n("fvjX"),
                d = n("8/mp"),
                p = n("V+GM"),
                m = n("geRD"),
                f = n("NvVO"),
                h = n("2xye"),
                g = n("GnwI"),
                v = n("I9oz"),
                C = n("0+qQ"),
                b = n("FYX4"),
                k = n("Ue10"),
                y = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        return r.createElement(v.a, null, r.createElement(k.Ya, null, r.createElement(k.jb, {
                            height: 75,
                            width: 133
                        })), r.createElement(b.a, {
                            onClick: this.noOp
                        }, r.createElement(k.W, null, r.createElement(k.jb, {
                            width: 600,
                            lineCount: 1
                        }), r.createElement(k.jb, {
                            width: 200,
                            lineCount: 1
                        }))), r.createElement(C.a, null, r.createElement(k.W, null, r.createElement(k.jb, {
                            width: 40,
                            lineCount: 1
                        }))), r.createElement(k.Ya, {
                            flexGrow: 0,
                            flexShrink: 0
                        }, r.createElement(k.Ya, {
                            fullHeight: !0,
                            display: k.X.Flex,
                            alignItems: k.f.Center,
                            justifyContent: k.Xa.Center,
                            padding: 1
                        }, r.createElement(k.W, null, r.createElement(k.jb, {
                            width: 20,
                            lineCount: 1
                        })))))
                    }, t.prototype.noOp = function() {}, t
                }(r.PureComponent),
                E = n("9C/b"),
                S = n("yR8l"),
                D = n("8n0m"),
                I = n("/+vS"),
                O = n("lBKM"),
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
                                                if (!this.props.context) return a.k.error(new Error("Collection creation attempt occurred without valid creation context"), "CreateCollection"), this.setState({
                                                    creationErrorMessage: this.defaultCreationError
                                                }), [2];
                                                t = this.props.context, n = t.ownerID, i = t.ownerLogin, r = t.sessionUserID, l = Object(m.a)({
                                                    ownerID: n,
                                                    title: e
                                                }), o.label = 1;
                                            case 1:
                                                return o.trys.push([1, 3, , 4]), [4, this.props.createCollection(l)];
                                            case 2:
                                                return c = o.sent().data, s = c.createCollection.collection, Object(D.b)({
                                                    channelID: n,
                                                    playlistID: s.id,
                                                    userID: r,
                                                    title: s.title
                                                }), this.props.history.push("/" + i + "/manager/collections/" + s.id, {
                                                    content: h.PageviewContent.CollectionCreator,
                                                    medium: h.PageviewMedium.VideoManagerCollectionManager
                                                }), this.props.onAdd(), [3, 4];
                                            case 3:
                                                return u = o.sent(), a.k.error(u, "CreateCollection", {
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
                        return r.createElement(k.Ja, null, r.createElement(k.P, {
                            cols: 4
                        }, r.createElement(I.a, {
                            disabled: !this.props.context,
                            onSubmit: this.onCreateButtonClickHandler,
                            callToAction: Object(a.d)("Create Collection", "CollectionCreator"),
                            errorMessage: this.state.creationErrorMessage
                        })))
                    }, t
                }(r.Component),
                _ = Object(s.compose)(Object(S.a)(O, {
                    name: "createCollection"
                }))(Object(E.a)(w)),
                N = n("7BY1"),
                x = n("3udf");
            ! function(e) {
                e.CollectionsUnavailableError = "CollectionsUnavailableError", e.CreateCollection = "CreateCollection", e.noCollectionsCTA = "noCollectionsCTA"
            }(i || (i = {}));
            var j = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.refetchCreatorCollection = function() {
                            t.props.data.refetch({
                                creatorLogin: t.props.match.params.creatorLogin
                            })
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.setPageTitle()
                    }, t.prototype.componentDidUpdate = function(e) {
                        e.data.loading && !this.props.data.loading && (this.props.latencyTracking.reportInteractive(), this.setPageTitle())
                    }, t.prototype.render = function() {
                        var e, t = !1;
                        return this.props.data.loading ? e = this.collectionCardPlaceholders() : !this.props.data.error && this.props.data.user && this.props.data.user.collections ? this.props.data.user.collections.edges.length > 0 ? (e = this.renderCollections(this.props.data.user.collections.edges), t = this.props.data.user.collections.pageInfo.hasNextPage || !1) : e = this.noCollectionsCTA() : e = this.contentUnavaibleError(), r.createElement(d.b, null, r.createElement(k.Ya, {
                            fullHeight: !0,
                            padding: {
                                top: 2,
                                x: 2
                            },
                            margin: {
                                bottom: 5
                            }
                        }, r.createElement(_, {
                            context: this.props.data.user && this.props.data.currentUser ? {
                                ownerID: this.props.data.user.id,
                                ownerLogin: this.props.match.params.creatorLogin,
                                sessionUserID: this.props.data.currentUser.id
                            } : void 0,
                            onAdd: this.refetchCreatorCollection
                        }), r.createElement(k.Ya, {
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
                            return r.createElement(k.Ya, {
                                key: n,
                                margin: {
                                    bottom: 1
                                }
                            }, r.createElement(N.a, {
                                collection: e.node,
                                onDelete: t.refetchCreatorCollection
                            }))
                        })
                    }, t.prototype.collectionCardPlaceholders = function() {
                        for (var e = [], t = 0; t < 3; t++) e.push(r.createElement(k.Ya, {
                            key: t,
                            margin: {
                                bottom: 1
                            }
                        }, r.createElement(y, null)));
                        return e
                    }, t.prototype.noCollectionsCTA = function() {
                        return r.createElement(k.Ya, {
                            alignItems: k.f.Center,
                            "data-test-selector": i.noCollectionsCTA,
                            display: k.X.Flex,
                            flexDirection: k.Aa.Column,
                            justifyContent: k.Xa.Center,
                            margin: {
                                top: 5
                            }
                        }, r.createElement(k.W, {
                            type: k.Wb.H4
                        }, Object(a.d)("Put all your best videos in one spot.", "CollectionManager")), r.createElement(k.W, {
                            type: k.Wb.H4
                        }, Object(a.d)("Videos organized into collections help your viewers easily find related content.", "CollectionManager")), r.createElement(k.W, {
                            type: k.Wb.H4
                        }, Object(a.d)("Your most recently updated Collection will be featured at the top of channel’s video page.", "CollectionManager")))
                    }, t.prototype.contentUnavaibleError = function() {
                        return r.createElement(k.Ya, {
                            "data-test-selector": i.CollectionsUnavailableError
                        }, Object(a.d)("Something went wrong loading your collections. Please try again.", "CollectionEditorPagePresentation"))
                    }, t.prototype.setPageTitle = function() {
                        if (this.props.data.user) {
                            var e = this.props.data.user.displayName;
                            a.p.setPageTitle(Object(a.d)("{ownerDisplayName} - Collection Manager", {
                                ownerDisplayName: e
                            }, "CollectionManagerPage"))
                        }
                    }, t
                }(r.Component),
                T = Object(u.compose)(Object(s.graphql)(x, {
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
                                    query: x,
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
                                                    edges: Object(m.c)(i, n.user.collections.edges)
                                                })
                                            }),
                                            currentUser: e.currentUser
                                        }
                                    }
                                })
                            }
                        })
                    }
                }), Object(g.b)("CollectionManagerPage", {
                    destination: f.a.VideoManagerCollectionsManager
                }), Object(p.a)({
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
                }))(j),
                F = function(e) {
                    return r.createElement(c.a, {
                        ownerLogin: e.match.params.creatorLogin,
                        permittedRoles: {
                            editor: !0,
                            staff: !0
                        }
                    }, function(t) {
                        var n = t.loading,
                            i = t.permitted;
                        return n || i ? r.createElement(T, o.__assign({}, e)) : r.createElement(l.a, {
                            message: Object(a.d)("Something went wrong. Please try again.", "CollectionManagerPage")
                        })
                    })
                };
            n.d(t, "CollectionManagerPage", function() {
                return F
            })
        },
        "0+qQ": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            });
            var i = n("q1tI"),
                o = n("Ue10"),
                r = function(e) {
                    return i.createElement(o.Fb, {
                        color: o.O.Alt2,
                        fontSize: o.Ca.Size6,
                        display: o.X.Flex,
                        flexDirection: o.Aa.Row,
                        flexWrap: o.Ba.NoWrap,
                        alignItems: o.f.Center,
                        margin: {
                            top: .5
                        },
                        flexShrink: 0,
                        flexGrow: 0
                    }, e.children)
                }
        },
        "3udf": function(e, t) {
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
                                        value: "displayName"
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
                    end: 393
                }
            };
            n.loc.source = {
                body: "query CollectionManager_CreatorCollections($creatorLogin: String! $after: Cursor) {\nuser(login: $creatorLogin) {\nid\ndisplayName\ncollections(first: 15 after: $after options: { includeEmpty: true }) {\nedges {\ncursor\nnode {\nid\nitems {\ntotalCount\n}\nowner {\nid\nlogin\n}\nlengthSeconds\nthumbnailURL(width: 160 height: 90)\ntitle\nupdatedAt\nviewCount\n}\n}\npageInfo {\nhasNextPage\n}\n}\n}\ncurrentUser {\nid\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "7BY1": function(e, t, n) {
            "use strict";
            var i = n("/MKj"),
                o = n("aCAx"),
                r = n("mrSG"),
                a = n("q1tI"),
                l = n("/7QA"),
                c = n("hyVY"),
                s = n("2xye"),
                u = n("MxAq"),
                d = n("JVvM"),
                p = n("GnwI"),
                m = (n("HEef"), n("I9oz")),
                f = n("LoeD"),
                h = n("9afg"),
                g = n("0+qQ"),
                v = n("FYX4"),
                C = n("Ue10"),
                b = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.navigateToEdit = function() {
                            var e = t.collectionEditLocationDescriptor();
                            e && l.p.history.push(e)
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
                        }), a.createElement(m.a, null, a.createElement(C.Ya, {
                            flexShrink: 0
                        }, a.createElement(u.a, {
                            alt: t.title,
                            sizes: [{
                                size: "150px"
                            }],
                            src: t.thumbnailURL,
                            srcSet: e,
                            videoCount: t.items.totalCount,
                            fallbackSize: d.b.Half
                        })), a.createElement(v.a, {
                            onClick: this.navigateToEdit
                        }, a.createElement(C.W, {
                            type: C.Wb.H5,
                            color: C.O.Alt
                        }, t.title), a.createElement(g.a, null, a.createElement(C.Ya, {
                            margin: {
                                right: 1
                            }
                        }, a.createElement(C.Zb, {
                            direction: C.bc.Bottom,
                            label: Object(l.d)("Last Updated", "CollectionManagerCard")
                        }, a.createElement(C.W, {
                            color: C.O.Alt2
                        }, Object(l.c)(new Date(t.updatedAt), "long")))), this.collectionStats(t))), this.renderCardMenu())
                    }, t.prototype.renderCardMenu = function() {
                        if (this.props.hideOptionsMenu || !this.props.collection.owner) return null;
                        var e = [{
                            asset: C.ub.Edit,
                            linkTo: this.collectionEditLocationDescriptor(),
                            title: Object(l.d)("Edit", "CollectionManagerCard")
                        }, {
                            asset: C.ub.Trash,
                            onClick: this.onDeleteOptionClickHandler,
                            title: Object(l.d)("Delete", "CollectionManagerCard")
                        }];
                        return a.createElement(f.a, {
                            options: e
                        })
                    }, t.prototype.collectionStats = function(e) {
                        return [{
                            value: Object(c.b)(e.lengthSeconds),
                            icon: C.ub.GlyphLength,
                            label: Object(l.d)("Collection length", "CollectionManagerCard")
                        }, {
                            value: "" + e.viewCount,
                            icon: C.ub.GlyphViews,
                            label: Object(l.d)("Views", "CollectionManagerCard")
                        }].map(function(e, t) {
                            return a.createElement(h.a, r.__assign({
                                key: t
                            }, e))
                        })
                    }, t
                }(a.Component),
                k = Object(p.b)("CollectionManagerCard", {
                    autoReportInteractive: !0
                })(b),
                y = n("HYil");
            n.d(t, "a", function() {
                return E
            });
            var E = Object(i.connect)(null, function(e, t) {
                return {
                    onDeleteOptionClick: function(n) {
                        e(Object(o.d)(y.a, {
                            collection: n,
                            onSuccess: t.onDelete
                        }))
                    }
                }
            })(k)
        },
        "8n0m": function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return r
            }), n.d(t, "a", function() {
                return a
            }), n.d(t, "c", function() {
                return l
            });
            var i = n("/7QA"),
                o = n("2xye");

            function r(e) {
                i.o.track(o.SpadeEventType.CollectionCreate, {
                    channel_id: e.channelID,
                    playlist_id: e.playlistID,
                    user_id: e.userID,
                    title: e.title
                })
            }

            function a(e) {
                i.o.track(o.SpadeEventType.CollectionAddItem, {
                    channel_id: e.channelID,
                    item_id: e.itemID,
                    item_position: e.itemPosition,
                    item_type: e.itemType,
                    playlist_id: e.playlistID,
                    user_id: e.userID,
                    place: e.place
                })
            }

            function l(e) {
                i.o.track(o.SpadeEventType.CollectionRemoveItem, {
                    channel_id: e.channelID,
                    item_id: e.itemID,
                    item_position: e.itemPosition,
                    item_type: e.itemType,
                    playlist_id: e.playlistID,
                    user_id: e.userID
                })
            }
        },
        "9afg": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return l
            });
            var i = n("mrSG"),
                o = n("q1tI"),
                r = n("N0BP"),
                a = n("Ue10"),
                l = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = o.createElement(a.Ya, {
                                alignItems: a.f.Center,
                                display: a.X.Flex,
                                fullHeight: !0,
                                justifyContent: a.Xa.Center,
                                margin: {
                                    right: 1
                                }
                            }, o.createElement(a.Eb, {
                                icon: this.props.icon,
                                label: this.props.label,
                                value: this.props.value
                            })),
                            t = this.props.linkTo ? o.createElement(a.Va, {
                                type: a.Wa.Alpha,
                                linkTo: this.props.linkTo,
                                targetBlank: !0
                            }, e) : e;
                        return o.createElement(a.Ya, i.__assign({
                            display: a.X.InlineFlex,
                            fullHeight: !0
                        }, Object(r.a)(this.props)), t)
                    }, t
                }(o.Component)
        },
        Bucx: function(e, t, n) {},
        DqcE: function(e, t, n) {},
        EtbQ: function(e, t) {
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
        FYX4: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            });
            var i = n("q1tI"),
                o = n("Ue10"),
                r = function(e) {
                    return i.createElement(o.Va, {
                        onClick: e.onClick,
                        type: o.Wa.Alpha
                    }, i.createElement(o.Ya, {
                        alignItems: o.f.Start,
                        display: o.X.Flex,
                        flexDirection: o.Aa.Column,
                        flexGrow: 1,
                        flexShrink: 1,
                        justifyContent: o.Xa.Center,
                        padding: {
                            x: 2
                        }
                    }, e.children))
                }
        },
        HEef: function(e, t, n) {},
        HNnW: function(e, t, n) {
            e.exports = n.p + "assets/missing-video-thumb-320x180-101fcbc1ff8445933141.png"
        },
        HYil: function(e, t, n) {
            "use strict";
            var i, o = n("mrSG"),
                r = n("q1tI"),
                a = n("/MKj"),
                l = n("fvjX"),
                c = n("/7QA"),
                s = n("yR8l"),
                u = n("geRD"),
                d = n("aCAx"),
                p = n("3udf"),
                m = n("cZKs"),
                f = n("7BY1"),
                h = n("Ue10");
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
                        return this.props.error && (t = r.createElement(h.i, {
                            delay: h.j.Short,
                            type: h.n.BounceIn,
                            enabled: !0
                        }, r.createElement(h.Fb, {
                            border: !0,
                            margin: {
                                bottom: 1
                            },
                            padding: 1,
                            fullWidth: !0
                        }, r.createElement(h.W, {
                            bold: !0,
                            color: h.O.Error,
                            "data-test-selector": i.ErrorAlert
                        }, this.props.error)))), r.createElement(h.i, {
                            type: h.n.FadeIn,
                            delay: h.j.Medium,
                            duration: h.k.Medium,
                            enabled: !0
                        }, r.createElement(h.Fb, {
                            background: h.r.Base,
                            padding: {
                                x: 3,
                                top: 2,
                                bottom: 3
                            }
                        }, r.createElement(h.Qa, {
                            padding: {
                                bottom: 1
                            }
                        }, r.createElement(h.W, {
                            fontSize: h.Ca.Size3
                        }, Object(c.d)("Delete Collection", "DeleteCollectionModal"))), r.createElement(h.W, {
                            fontSize: h.Ca.Size6
                        }, Object(c.d)("Are you sure you want to delete this collection?", "DeleteCollectionModal")), r.createElement(h.W, {
                            fontSize: h.Ca.Size6
                        }, Object(c.d)("This action cannot be undone. ", "DeleteCollectionModal")), r.createElement(h.Ya, {
                            padding: {
                                y: 2
                            }
                        }, r.createElement(f.a, {
                            collection: e,
                            hideOptionsMenu: !0
                        })), t, r.createElement(h.Ya, {
                            display: h.X.Flex,
                            flexDirection: h.Aa.Row,
                            justifyContent: h.Xa.Center
                        }, r.createElement(h.Ya, {
                            margin: {
                                x: .5
                            }
                        }, r.createElement(h.z, {
                            "data-test-selector": i.CancelButton,
                            onClick: this.props.onCancel,
                            type: h.F.Hollow
                        }, Object(c.d)("Cancel", "DeleteCollectionModal"))), r.createElement(h.Ya, {
                            margin: {
                                x: .5
                            }
                        }, r.createElement(h.z, {
                            "data-test-selector": i.ConfirmButton,
                            onClick: this.props.onDeleteRequest,
                            type: h.F.Alert
                        }, Object(c.d)("Delete", "DeleteCollectionModal")))), r.createElement(m.a, {
                            closeOnBackdropClick: !0
                        })))
                    }, t
                }(r.Component),
                v = n("EtbQ");
            n.d(t, "a", function() {
                return k
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
                                                return t.trys.push([1, 3, , 4]), [4, this.props.onDeleteRequest(o.__assign({}, Object(u.a)({
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
                                                return e = t.sent(), c.k.error(e, "DeleteCollectionModal"), this.setState({
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
                b = Object(l.compose)(Object(s.a)(v, {
                    name: "onDeleteRequest"
                }))(C);
            var k = Object(a.connect)(null, function(e, t) {
                return {
                    onClose: function() {
                        e(Object(d.c)())
                    },
                    onSuccess: function() {
                        e(Object(d.c)()), t.onSuccess && t.onSuccess()
                    }
                }
            })(b)
        },
        I9oz: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                o = n("q1tI"),
                r = n("Ue10"),
                a = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return o.createElement(r.Ya, {
                            margin: {
                                bottom: 1
                            }
                        }, o.createElement(r.Fb, {
                            className: "video-card",
                            "data-target": "video-card",
                            elevation: 1,
                            display: r.X.Flex,
                            flexWrap: r.Ba.NoWrap,
                            flexDirection: r.Aa.Row,
                            alignItems: r.f.Stretch
                        }, this.props.children))
                    }, t
                }(o.Component);
            n.d(t, "a", function() {
                return a
            })
        },
        JVvM: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return r
            }), n.d(t, "a", function() {
                return v
            });
            var i, o, r, a = n("mrSG"),
                l = n("q1tI"),
                c = n("/7QA"),
                s = n("u3aQ"),
                u = n.n(s),
                d = n("HNnW"),
                p = n.n(d),
                m = n("GnwI"),
                f = n("Ue10");
            n("Bucx");
            ! function(e) {
                e[e.VideoCountOverlayText = 0] = "VideoCountOverlayText"
            }(o || (o = {})),
            function(e) {
                e.Half = "160", e.Full = "320"
            }(r || (r = {}));
            var h = ((i = {})[r.Half] = u.a, i[r.Full] = p.a, i),
                g = function(e) {
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
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e, t, n, i = null;
                        "number" == typeof this.props.videoCount && (i = l.createElement(f.Ya, {
                            position: f.kb.Absolute,
                            attachTop: !0,
                            attachLeft: !0,
                            attachRight: !0,
                            attachBottom: !0
                        }, l.createElement(f.Fb, {
                            alignItems: f.f.Center,
                            attachRight: !0,
                            className: "collection-preview-image__wrapper",
                            color: f.O.Overlay,
                            display: f.X.InlineFlex,
                            flexDirection: f.Aa.Column,
                            fontSize: f.Ca.Size5,
                            fullHeight: !0,
                            justifyContent: f.Xa.Center,
                            position: f.kb.Absolute,
                            textAlign: f.Sb.Center
                        }, l.createElement(f.tb, {
                            asset: f.ub.Collections,
                            height: 20,
                            width: 20
                        }), l.createElement(f.W, {
                            "data-test-selector": o.VideoCountOverlayText
                        }, Object(c.d)("{videoCount, plural, one {# video} other {# videos}}", {
                            videoCount: this.props.videoCount.toString()
                        }, "CollectionCard")))));
                        var a = r.Full;
                        return this.props.fallbackSize && (a = this.props.fallbackSize), !this.props.src || this.state.imageLoadError ? (t = h[a], (e = {})[a + "w"] = t, n = e) : (t = this.props.src, n = this.props.srcSet), l.createElement(f.Ya, {
                            position: f.kb.Relative
                        }, l.createElement(f.S, {
                            alt: this.props.alt,
                            onError: this.onErrorHandler,
                            onLoad: this.onLoadHandler,
                            src: t,
                            srcSet: n,
                            sizes: this.props.sizes
                        }), i)
                    }, t
                }(l.Component),
                v = Object(m.b)("CollectionPreviewImage")(g)
        },
        LoeD: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                o = n("q1tI"),
                r = n("u5aL"),
                a = n("Ue10"),
                l = function(e) {
                    var t = e.asset ? o.createElement(a.tb, {
                        asset: e.asset
                    }) : null;
                    return o.createElement(a.Va, {
                        linkTo: e.linkTo,
                        onClick: e.onClick
                    }, o.createElement(a.Ya, {
                        alignItems: a.f.Center,
                        display: a.X.Flex,
                        flexGrow: 1,
                        padding: 1
                    }, t, o.createElement(a.Qa, {
                        margin: {
                            left: 1
                        }
                    }, o.createElement(a.W, null, e.title))))
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
                    return this.state.showDropMenu && (e = this.dropMenu()), o.createElement(a.Ya, {
                        flexGrow: 0,
                        flexShrink: 0,
                        display: a.X.Flex,
                        position: a.kb.Relative
                    }, o.createElement(a.Qa, {
                        fullHeight: !0
                    }, o.createElement(r.a, {
                        onClickOut: this.clickOutHandler
                    }, o.createElement(a.Ya, {
                        fullHeight: !0,
                        display: a.X.Flex,
                        alignItems: a.f.Stretch
                    }, o.createElement(a.Va, {
                        disabled: 0 === this.props.options.length,
                        type: a.Wa.Alpha,
                        onClick: this.menuButtonClickHandler
                    }, o.createElement(a.Ya, {
                        padding: {
                            x: 1
                        }
                    }, o.createElement(a.tb, {
                        asset: a.ub.More
                    })))), e)))
                }, t.prototype.dropMenu = function() {
                    var e = this.props.options.map(function(e, t) {
                        return o.createElement(l, i.__assign({
                            key: t
                        }, e))
                    });
                    return o.createElement(a.u, {
                        size: a.w.Small,
                        direction: a.v.BottomRight,
                        noTail: !0,
                        show: !0
                    }, e)
                }, t
            }(o.Component)
        },
        MxAq: function(e, t, n) {
            "use strict";
            var i = n("/MKj"),
                o = n("fvjX"),
                r = n("kRBY"),
                a = n("SiBg"),
                l = (n("zHWM"), n("mrSG")),
                c = n("q1tI"),
                s = n("/7QA"),
                u = n("hyVY"),
                d = n("GnwI"),
                p = n("Ue10"),
                m = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onChangeHandler = function() {
                            return t.props.onSelected(t.props.collection)
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.render = function() {
                        return c.createElement(p.Ya, {
                            display: p.X.Flex
                        }, c.createElement(p.Ya, {
                            padding: 2
                        }, c.createElement(p.N, {
                            label: "",
                            onChange: this.onChangeHandler,
                            checked: this.props.videoIsInCollection
                        })), c.createElement(p.Ya, {
                            padding: 1
                        }, c.createElement(p.I, {
                            aspect: p.p.Aspect16x9,
                            alt: this.props.collection.title,
                            src: this.props.collection.thumbnailSrc || "https://static-cdn.jtvnw.net/ttv-playlists-thumbnails-prod/missing-video-thumb-320x180.png",
                            size: p.J.Size8
                        })), c.createElement(p.Ya, {
                            padding: 1,
                            display: p.X.Flex,
                            flexDirection: p.Aa.Column
                        }, c.createElement(p.Ya, null, c.createElement(p.W, {
                            ellipsis: !0
                        }, this.props.collection.title)), c.createElement(p.Ya, {
                            display: p.X.Flex
                        }, c.createElement(p.Ya, {
                            padding: {
                                right: 1
                            }
                        }, c.createElement(p.W, null, Object(s.d)("{videoCount} video", {
                            videoCount: this.props.collection.itemsCount
                        }, "CollectionRowPresentation"))), c.createElement(p.Ya, {
                            padding: {
                                x: 1
                            }
                        }, c.createElement(p.W, null, "·")), c.createElement(p.Ya, {
                            padding: {
                                left: 1
                            }
                        }, c.createElement(p.W, null, Object(u.b)(this.props.collection.totalDuration))))))
                    }, t
                }(c.Component),
                f = Object(d.b)("CollectionRow")(m),
                h = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {}, t.onCollectionRowChange = function(e) {
                            t.props.updateItemInCollection(e, t.props.videoID, t.props.channelID, t.props.trackingPlace)
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive(), this.props.channelID && this.props.videoID && this.props.fetchCollectionsForVideo(this.props.channelID, this.props.videoID)
                    }, t.prototype.render = function() {
                        var e = this;
                        return this.props.channelID && this.props.videoID && this.props.collections ? c.createElement(p.Ya, null, this.props.collections.map(function(t) {
                            return c.createElement(f, {
                                key: t.id,
                                collection: t,
                                videoIsInCollection: e.props.containingCollections.map(function(e) {
                                    return e.id
                                }).indexOf(t.id) > -1,
                                onSelected: e.onCollectionRowChange
                            })
                        })) : c.createElement(p.Ya, null)
                    }, t
                }(c.Component),
                g = Object(d.b)("CollectionsListPresentation")(h);
            var v = Object(i.connect)(function(e) {
                    return {
                        isLoggedIn: Object(r.f)(e),
                        collections: e.collections.collections,
                        containingCollections: e.collections.containingCollections
                    }
                }, function(e) {
                    return Object(o.bindActionCreators)({
                        fetchCollectionsForVideo: a.e,
                        updateItemInCollection: a.f
                    }, e)
                })(g),
                C = n("JVvM");
            n.d(t, "b", function() {
                return v
            }), n.d(t, "a", function() {
                return C.a
            })
        },
        SiBg: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                o = n("/7QA"),
                r = n("8n0m"),
                a = n("b6Yk"),
                l = n("kRBY"),
                c = n("rj3Y"),
                s = n("uzvh");

            function u(e) {
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
                return d
            }), n.d(t, "b", function() {
                return p
            }), n.d(t, "c", function() {
                return m
            }), n.d(t, "e", function() {
                return g
            }), n.d(t, "d", function() {
                return C
            }), n.d(t, "f", function() {
                return b
            });
            var d = "collections.COLLECTIONS_FETCHED",
                p = "collections.COLLECTIONS_FETCHED_FOR_VIDEO_ID",
                m = "collections.COLLECTIONS_FETCH_FAILED",
                f = "collections.COLLECTIONS_CREATE_FAILED",
                h = "collections.COLLECTIONS_UPDATE_FAILED";

            function g(e, t) {
                var n = this;
                return u(function(r) {
                    return i.__awaiter(n, void 0, void 0, function() {
                        var n, l, s;
                        return i.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return i.trys.push([0, 3, , 4]), [4, a.a.getOrThrow("/v5/channels/" + e + "/collections/?limit=100")];
                                case 1:
                                    return n = i.sent(), r.store.dispatch({
                                        type: d,
                                        collections: Object(c.d)(n.body)
                                    }), [4, a.a.getOrThrow("/v5/channels/" + e + "/collections/?limit=100&containing_item=" + c.b.Video + ":" + t)];
                                case 2:
                                    return l = i.sent(), r.store.dispatch({
                                        type: p,
                                        containingCollections: Object(c.d)(l.body),
                                        videoID: t
                                    }), [3, 4];
                                case 3:
                                    return s = i.sent(), o.k.error(s, "Failed to fetch collections"), r.store.dispatch({
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
            }
            var v = function(e, t) {
                return a.a.postOrThrow(e, {
                    body: t
                })
            };

            function C(e, t, n, a) {
                var s = this;
                return u(function(u) {
                    return i.__awaiter(s, void 0, void 0, function() {
                        var s, m, h, g, C, b, k, y;
                        return i.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    s = u.store.getState(), m = s.collections, h = Object(l.e)(s), g = h ? h.id : "", i.label = 1;
                                case 1:
                                    return i.trys.push([1, 4, , 5]), [4, v("/v5/channels/" + e + "/collections/", {
                                        title: t
                                    })];
                                case 2:
                                    return C = i.sent(), b = Object(c.c)(C.body), m.collections = [b].concat(m.collections), u.store.dispatch({
                                        type: d,
                                        collections: m.collections
                                    }), Object(r.b)({
                                        channelID: e,
                                        playlistID: b.id,
                                        userID: g,
                                        title: b.title
                                    }), k = {
                                        type: c.b.Video,
                                        id: n
                                    }, [4, v("/v5/collections/" + b.id + "/items", k)];
                                case 3:
                                    return i.sent(), m.containingCollections = [b].concat(m.containingCollections), u.store.dispatch({
                                        type: p,
                                        containingCollections: m.containingCollections,
                                        videoID: n
                                    }), Object(r.a)({
                                        channelID: e,
                                        itemID: n,
                                        itemPosition: -1,
                                        itemType: c.b.Video,
                                        playlistID: b.id,
                                        userID: g,
                                        place: a
                                    }), [3, 5];
                                case 4:
                                    return y = i.sent(), o.k.error(y, "Failed to add new collection with video"), u.store.dispatch({
                                        type: f,
                                        errorType: "Create Failed",
                                        errorMessage: "Creating collections for channel " + e + " and video " + n + " with title " + t + "."
                                    }), [3, 5];
                                case 5:
                                    return [2]
                            }
                        })
                    })
                })
            }

            function b(e, t, n, d) {
                var m = this;
                return u(function(u) {
                    return i.__awaiter(m, void 0, void 0, function() {
                        var m, f, g, C, b, k, y, E, S;
                        return i.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    m = u.store.getState(), f = Object(s.a)(m), g = Object(l.e)(m), C = g ? g.id : "", i.label = 1;
                                case 1:
                                    return i.trys.push([1, 6, , 7]), f.map(function(e) {
                                        return e.id
                                    }).includes(e.id) ? (b = JSON.stringify({
                                        type: c.b.Video,
                                        id: t
                                    }), k = btoa(b), [4, a.a.deleteOrThrow("/v5/collections/" + e.id + "/items/" + k)]) : [3, 3];
                                case 2:
                                    return i.sent(), E = f.filter(function(t) {
                                        return t.id !== e.id
                                    }), u.store.dispatch({
                                        type: p,
                                        containingCollections: E,
                                        videoID: t
                                    }), Object(r.c)({
                                        channelID: n,
                                        itemID: t,
                                        itemPosition: -1,
                                        itemType: c.b.Video,
                                        playlistID: e.id,
                                        userID: C
                                    }), [3, 5];
                                case 3:
                                    return y = {
                                        type: c.b.Video,
                                        id: t
                                    }, [4, v("/v5/collections/" + e.id + "/items", y)];
                                case 4:
                                    i.sent(), E = f.concat([e]), u.store.dispatch({
                                        type: p,
                                        containingCollections: E,
                                        videoID: t
                                    }), Object(r.a)({
                                        channelID: n,
                                        itemID: t,
                                        itemPosition: -1,
                                        itemType: c.b.Video,
                                        playlistID: e.id,
                                        userID: C,
                                        place: d
                                    }), i.label = 5;
                                case 5:
                                    return [3, 7];
                                case 6:
                                    return S = i.sent(), o.k.error(S, "Failed to fetch collections"), u.store.dispatch({
                                        type: h,
                                        errorType: "Update Failed",
                                        errorMessage: "Updating collection " + e.id + " for channel " + n + " and video " + t + " failed."
                                    }), [3, 7];
                                case 7:
                                    return [2]
                            }
                        })
                    })
                })
            }
        },
        VwyG: function(e, t, n) {
            "use strict";
            var i = n("/MKj"),
                o = n("kRBY"),
                r = n("mrSG"),
                a = n("q1tI"),
                l = n("oJmH"),
                c = n("/7QA"),
                s = n("yR8l"),
                u = n("GnwI"),
                d = n("nt5g"),
                p = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.logger = c.k.withCategory("role-restricted"), n.state = {
                            loading: t.isLoggedIn,
                            permitted: !1,
                            roles: {
                                staff: !1,
                                editor: !1,
                                owner: !1
                            },
                            error: null
                        }, n
                    }
                    return r.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
                        var t = e.data && e.data.loading,
                            n = this.props.data && this.props.data.loading;
                        (!this.props.isLoggedIn || t && !n) && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        this.maybeSetRoleState(e)
                    }, t.prototype.componentDidMount = function() {
                        this.maybeSetRoleState(this.props)
                    }, t.prototype.render = function() {
                        return this.props.children(this.state)
                    }, t.prototype.maybeSetRoleState = function(e) {
                        if (e.isLoggedIn && e.data) {
                            var t = function(e) {
                                    var t = e.data,
                                        n = {
                                            staff: !1,
                                            editor: !1,
                                            owner: !1
                                        };
                                    t && !t.error && !t.loading && t.user && t.currentUser && (n.staff = !(!t.currentUser.roles || !t.currentUser.roles.isStaff), n.editor = !(!t.user.self || !t.user.self.isEditor), n.owner = t.user.id === t.currentUser.id);
                                    return n
                                }(e),
                                n = {
                                    loading: e.data.loading,
                                    permitted: function(e, t) {
                                        if (e.owner) return !0;
                                        if (e.staff && t.staff) return !0;
                                        if (e.editor && t.editor) return !0;
                                        return !1
                                    }(t, e.permittedRoles),
                                    roles: t,
                                    error: null
                                };
                            e.data.error ? (n.error = new Error(e.data.error.toString()), this.logger.warn("Unable to retrieve data from GraphQL.", {
                                err: n.error
                            })) : e.data.loading || e.data.user && e.data.currentUser || (n.error = new Error("Failed to fetch user information"), this.logger.warn("Failed to fetch user information.", {
                                err: n.error
                            })), this.setState(n)
                        }
                    }, t
                }(a.Component);
            var m = Object(l.compose)(Object(s.a)(d, {
                options: function(e) {
                    return {
                        variables: {
                            contentOwnerLogin: e.ownerLogin
                        }
                    }
                },
                skip: function(e) {
                    return !e.isLoggedIn
                }
            }), Object(u.b)("RoleRestricted"))(p);
            var f = Object(i.connect)(function(e) {
                return {
                    isLoggedIn: Object(o.f)(e)
                }
            })(m);
            n.d(t, "a", function() {
                return f
            })
        },
        lBKM: function(e, t) {
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
        nt5g: function(e, t) {
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
        rj3Y: function(e, t, n) {
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
            var a, l, c = function(e) {
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

            function s(e) {
                return e.collections.map(function(e) {
                    return c(e)
                })
            }! function(e) {
                e.Video = "video"
            }(a || (a = {})),
            function(e) {
                e.PostCreateModal = "post-create", e.EditModal = "edit", e.CollectionManager = "collection_manager", e.VideoProducerRow = "video_producer_row"
            }(l || (l = {})), n.d(t, !1, function() {
                return r
            }), n.d(t, !1, function() {
                return i
            }), n.d(t, !1, function() {
                return o
            }), n.d(t, "c", function() {
                return c
            }), n.d(t, "d", function() {
                return s
            }), n.d(t, "b", function() {
                return a
            }), n.d(t, "a", function() {
                return l
            })
        },
        u3aQ: function(e, t, n) {
            e.exports = n.p + "assets/missing-video-thumb-160x90-6d63306a771e0e239cf4.png"
        },
        uzvh: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            });
            var i = n("mrSG"),
                o = n("/7QA"),
                r = n("SiBg");

            function a(e) {
                return e.collections.containingCollections
            }
            o.p.store.registerReducer("collections", function(e, t) {
                var n;
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
            })
        },
        zHWM: function(e, t, n) {
            "use strict";
            n("uzvh")
        }
    }
]);