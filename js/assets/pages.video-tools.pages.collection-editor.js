webpackJsonp([76], {
    "/brc": function(e, t) {},
    "4o7v": function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
        });
        var i = n("TToO"),
            o = n("GiK3"),
            a = (n.n(o), n("5kgt")),
            l = n("Odds"),
            r = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = o.createElement(l._2, {
                            alignItems: l.c.Center,
                            display: l.N.Flex,
                            fullHeight: !0,
                            justifyContent: l._1.Center,
                            padding: 2
                        }, o.createElement(l._24, {
                            icon: this.props.icon,
                            label: this.props.label,
                            value: this.props.value
                        })),
                        t = this.props.linkTo ? o.createElement(l._0, {
                            alpha: !0,
                            linkTo: this.props.linkTo,
                            targetBlank: !0
                        }, e) : e;
                    return o.createElement(l._2, i.__assign({
                        display: l.N.InlineFlex,
                        fullHeight: !0
                    }, Object(a.a)(this.props)), t)
                }, t
            }(o.Component)
    },
    Dz2i: function(e, t) {
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
                                            value: "totalCount"
                                        },
                                        arguments: [],
                                        directives: []
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
                end: 427
            }
        };
        n.loc.source = {
            body: "query CollectionManager_EditCollection($collectionID: ID! $after: Cursor) {\ncollection(id: $collectionID) {\nid\nlengthSeconds\nowner {\nid\nlogin\n}\ntitle\nviewCount\nupdatedAt\nthumbnailURL(width: 320 height: 180)\nitems(first: 15 after: $after) {\ntotalCount\npageInfo {\nhasNextPage\n}\nedges {\ncursor\nnode {\n... on Video {\nid\nbroadcastType\ntitle\nlengthSeconds\npreviewThumbnailURL(width: 240 height: 135)\npublishedAt\nviewCount\n}\n}\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    KO2S: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i, o = n("TToO"),
            a = n("GiK3"),
            l = n("3zLD"),
            r = n("6sO2"),
            c = n("zCIC"),
            d = n("j7/Y"),
            s = n("w9tK"),
            u = n("vH/s"),
            m = n("CSlQ"),
            p = n("PQ4i"),
            h = n("RH2O"),
            v = n("V5M+"),
            f = n("+8VM"),
            g = (n("gpuH"), n("h5eQ")),
            k = n("Odds"),
            C = n("j5vp");
        n("kt/X");
        ! function(e) {
            e[e.AddVideoButton = 0] = "AddVideoButton", e[e.DoneButton = 1] = "DoneButton"
        }(i || (i = {}));
        var E = 200,
            b = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        videosChanged: !1
                    }, t.onVideoSelectHandler = function(e) {
                        t.setState({
                            videosChanged: !0
                        })
                    }, t.onLoadMoreHandler = function() {
                        if (!t.props.data.user || !t.props.data.user.searchVideos) return Promise.reject(new Error("Encountered unexpected null value for user or searchVideos, cannot load more."));
                        var e = t.props.data.user.searchVideos.edges.length - 1,
                            n = t.props.data.user.searchVideos.edges[e].cursor;
                        return t.props.data.fetchMore({
                            query: C,
                            variables: {
                                creatorID: t.props.collection.owner.id,
                                after: n
                            },
                            updateQuery: _
                        }).then(function() {})
                    }, t.onCompleteClickHandler = function() {
                        t.props.onComplete(t.state.videosChanged)
                    }, t.onSearchInputChangeHandler = function(e) {
                        var n = e.currentTarget.value;
                        t.state.searchChangeTimeoutID && clearTimeout(t.state.searchChangeTimeoutID);
                        var i = setTimeout(function() {
                            return o.__awaiter(t, void 0, void 0, function() {
                                return o.__generator(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return e.trys.push([0, , 2, 3]), [4, this.props.data.refetch({
                                                creatorID: this.props.collection.owner.id,
                                                search: {
                                                    term: n
                                                }
                                            })];
                                        case 1:
                                            return e.sent(), [3, 3];
                                        case 2:
                                            return this.setState({
                                                searchChangeTimeoutID: void 0
                                            }), [7];
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        }, E);
                        t.setState({
                            searchChangeTimeoutID: i
                        })
                    }, t
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    var e = !!(this.props.data.user && this.props.data.user.searchVideos && this.props.data.user.searchVideos.pageInfo.hasNextPage);
                    return a.createElement(k.e, {
                        type: k.i.FadeIn,
                        delay: k.f.Medium,
                        duration: k.g.Medium,
                        enabled: !0
                    }, a.createElement(k._25, {
                        background: k.m.Base,
                        className: "collection-editor-item-selector",
                        padding: {
                            x: 3,
                            y: 2
                        }
                    }, a.createElement(k._35, {
                        fontSize: k.R.Size4
                    }, Object(r.d)("Add videos to collection", "CollectionItemSelectorModal")), a.createElement(k._2, {
                        padding: {
                            y: 1
                        }
                    }, a.createElement(k.S, {
                        label: Object(r.d)("Search your videos", "CollectionItemSelectorModal")
                    }, a.createElement(k._18, {
                        onChange: this.onSearchInputChangeHandler,
                        placeholder: Object(r.d)("Filter by video title", "CollectionItemSelectorModal")
                    }))), a.createElement(c.b, {
                        suppressScrollX: !0
                    }, a.createElement(k._2, {
                        display: k.N.Flex,
                        flexDirection: k.P.Column
                    }, this.renderVideoSelectors(), a.createElement(c.a, {
                        enabled: e,
                        loadMore: this.onLoadMoreHandler
                    }))), a.createElement(k._2, {
                        display: k.N.Flex,
                        justifyContent: k._1.Center,
                        margin: {
                            top: 2
                        }
                    }, a.createElement(k.u, {
                        "data-test-selector": i.DoneButton,
                        onClick: this.onCompleteClickHandler
                    }, Object(r.d)("Done", "CollectionItemSelectorModal"))), a.createElement(f.a, {
                        closeOnBackdropClick: !0
                    })))
                }, t.prototype.componentWillUnmount = function() {
                    this.state.searchChangeTimeoutID && clearTimeout(this.state.searchChangeTimeoutID)
                }, t.prototype.renderVideoSelectors = function() {
                    var e = this;
                    if (this.state.searchChangeTimeoutID || this.props.data.loading) return a.createElement(k._4, {
                        fillContent: !0,
                        delay: 500
                    });
                    if (this.props.data.error || !this.props.data.user || !this.props.data.user.searchVideos) return a.createElement("div", null);
                    var t = this.props.data.user.searchVideos.edges.map(function(e) {
                        return e.node
                    });
                    return 0 === t.length ? a.createElement("div", null) : t.map(function(n, o) {
                        return a.createElement(k._2, {
                            alignItems: k.c.Center,
                            display: k.N.Flex,
                            flexDirection: k.P.Row,
                            flexGrow: 1,
                            key: o,
                            padding: {
                                y: .5
                            }
                        }, a.createElement(k._2, {
                            flexGrow: 1,
                            flexShrink: 1,
                            padding: {
                                right: .5
                            }
                        }, a.createElement(g.a, {
                            video: n
                        })), a.createElement(k._2, {
                            flexGrow: 0,
                            flexShrink: 0
                        }, a.createElement(k.u, {
                            "data-test-selector": i.AddVideoButton,
                            onClick: function() {
                                e.onVideoSelectHandler(t[o].id)
                            }
                        }, Object(r.d)("Add", "CollectionItemSelectorModal"))))
                    })
                }, t
            }(a.Component),
            _ = function(e, t) {
                if (!t.fetchMoreResult) return e;
                var n = t.fetchMoreResult;
                return n.user && n.user.searchVideos ? {
                    user: o.__assign({}, n.user, {
                        searchVideos: o.__assign({}, n.user.searchVideos, {
                            edges: e.user.searchVideos.edges.concat(n.user.searchVideos.edges)
                        })
                    })
                } : e
            },
            y = Object(l.compose)(Object(l.graphql)(C, {
                options: {
                    variables: function(e) {
                        return {
                            creatorID: e.collection.owner.id
                        }
                    }
                }
            }))(b);
        var S, N = Object(h.b)(null, function(e, t) {
                return {
                    onComplete: function(n) {
                        t.onComplete(n), e(Object(v.c)())
                    }
                }
            })(y),
            I = n("M0wY"),
            O = n("kk4f"),
            D = n("jcM9");
        ! function(e) {
            e[e.AddVideos = 0] = "AddVideos", e[e.DeleteButton = 1] = "DeleteButton", e[e.PlayAllButton = 2] = "PlayAllButton", e[e.Thumbnail = 3] = "Thumbnail"
        }(S || (S = {}));
        var x = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.onAddVideosClickHandler = function() {
                    t.props.onAddVideosClick(t.props.collection, t.props.onVideosChange)
                }, t.onDeleteOptionClickHandler = function() {
                    t.props.onDeleteOptionClick(t.props.collection)
                }, t.onTitleChange = function(e) {
                    t.props.onTitleChange(e.currentTarget.value)
                }, t
            }
            return o.__extends(t, e), t.prototype.render = function() {
                return a.createElement(k._25, {
                    background: k.m.Alt,
                    display: k.N.Flex,
                    flexDirection: k.P.Row,
                    alignItems: k.c.Stretch
                }, a.createElement(k._2, {
                    display: k.N.Flex,
                    flexDirection: k.P.Column
                }, a.createElement(k._2, {
                    margin: {
                        y: 1
                    }
                }, a.createElement(k._35, {
                    color: k.I.Alt,
                    type: k._40.H6,
                    bold: !0
                }, Object(r.d)("Collection Thumbnail", "CollectionEditorInfoCard"))), a.createElement(O.a, {
                    "data-test-selector": S.Thumbnail,
                    alt: this.props.collection.title,
                    sizes: [{
                        size: "320px"
                    }],
                    src: this.props.collection.thumbnailURL
                })), a.createElement(k._2, {
                    display: k.N.Flex,
                    flexDirection: k.P.Column,
                    margin: {
                        left: 3
                    },
                    flexGrow: 2,
                    flexShrink: 0
                }, a.createElement(k._2, {
                    margin: {
                        y: 1
                    }
                }, a.createElement(k._35, {
                    color: k.I.Alt,
                    type: k._40.H6,
                    bold: !0
                }, Object(r.d)("Title", "CollectionEditorInfoCard"))), a.createElement(k.Y, {
                    type: k.Z.Text,
                    defaultValue: this.props.collection.title,
                    onChange: this.onTitleChange
                }), a.createElement(k._2, {
                    margin: {
                        top: 1,
                        bottom: 3
                    }
                }, a.createElement(k._35, {
                    type: k._40.Span,
                    color: k.I.Alt2
                }, Object(r.d)("Last updated {updatedAt}", {
                    updatedAt: Object(r.c)(new Date(this.props.collection.updatedAt), "long")
                }, "CollectionEditorInfoCard"))), this.managerMenu()))
            }, t.prototype.managerMenu = function() {
                return a.createElement(k._2, {
                    display: k.N.Flex,
                    flexDirection: k.P.Row
                }, a.createElement(k.u, {
                    "data-test-selector": S.PlayAllButton,
                    icon: k._16.Play,
                    type: k.z.Text,
                    linkTo: "/collections/" + this.props.collection.id
                }, Object(r.d)("Play All", "CollectionEditorInfoCard")), a.createElement(k.u, {
                    "data-test-selector": S.AddVideos,
                    icon: k._16.Plus,
                    onClick: this.onAddVideosClickHandler,
                    type: k.z.Text
                }, Object(r.d)("Add videos", "CollectionEditorInfoCard")), a.createElement(D.a, {
                    balloonDirection: k.q.BottomCenter,
                    buttonType: k.z.Text,
                    content: {
                        collectionID: this.props.collection.id
                    },
                    tracking: {
                        location: u.PageviewLocation.VideoManagerCollectionEditor
                    }
                }), a.createElement(k.u, {
                    "data-test-selector": S.DeleteButton,
                    icon: k._16.Trash,
                    type: k.z.Text,
                    onClick: this.onDeleteOptionClickHandler
                }, Object(r.d)("Delete", "CollectionEditorInfoCard")))
            }, t
        }(a.Component);
        var w, V = Object(h.b)(null, function(e) {
                return {
                    onDeleteOptionClick: function(t) {
                        e(Object(v.d)(I.a, {
                            collection: t
                        }))
                    },
                    onAddVideosClick: function(t, n) {
                        e(Object(v.d)(N, {
                            collection: t,
                            onComplete: n
                        }))
                    }
                }
            })(x),
            T = function() {
                return a.createElement(k._25, {
                    background: k.m.Alt,
                    display: k.N.Flex,
                    flexDirection: k.P.Row,
                    alignItems: k.c.Stretch,
                    margin: {
                        bottom: 5
                    }
                }, a.createElement(k._2, {
                    display: k.N.Flex,
                    flexDirection: k.P.Column
                }, a.createElement(k._2, {
                    margin: {
                        y: 1
                    }
                }, a.createElement(k._8, {
                    width: 100
                })), a.createElement(k._8, {
                    height: 180,
                    width: 320
                })), a.createElement(k._2, {
                    display: k.N.Flex,
                    flexDirection: k.P.Column,
                    margin: {
                        left: 3
                    },
                    flexGrow: 2,
                    flexShrink: 0
                }, a.createElement(k._2, {
                    margin: {
                        y: 1
                    }
                }, a.createElement(k._8, {
                    width: 50
                })), a.createElement(k._8, {
                    height: 25,
                    width: 400
                }), a.createElement(k._2, {
                    margin: {
                        top: 1,
                        bottom: 3
                    }
                }, a.createElement(k._8, {
                    height: 15,
                    width: 300
                })), a.createElement(k._8, {
                    height: 30,
                    width: 400
                })))
            },
            j = n("i61F"),
            F = n("F8kA"),
            M = n("mi6k"),
            A = n("5RjZ"),
            P = n("KRtN"),
            R = n("4o7v"),
            H = n("PwTO"),
            B = n("N8CH"),
            L = n("Z8qZ"),
            G = (n("dAJe"), {
                ItemLength: "ItemLength",
                VideoLink: "VideoLink"
            }),
            z = Object(j.SortableHandle)(function() {
                return a.createElement(k._15, {
                    asset: k._16.DragHandle
                })
            }),
            U = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.subHeader = function(e) {
                        return a.createElement(k._25, {
                            display: k.N.Flex,
                            flexDirection: k.P.Row,
                            margin: {
                                top: .5
                            },
                            color: k.I.Alt2
                        }, a.createElement(k._2, {
                            padding: {
                                right: 1
                            }
                        }, a.createElement(k._43, {
                            direction: k._45.Bottom,
                            align: k._44.Center,
                            label: Object(r.d)("Published At", "CollectionItemCard")
                        }, a.createElement(k._35, null, Object(r.c)(new Date(e.publishedAt), "long")))), a.createElement(k._2, {
                            padding: {
                                right: 1
                            },
                            display: k.N.Flex,
                            alignItems: k.c.Center
                        }, a.createElement(k._24, {
                            "data-test-selector": G.ItemLength,
                            label: Object(r.d)("Length", "CollectionItemCard"),
                            value: Object(M.a)(e.lengthSeconds),
                            icon: k._16.GlyphLength
                        })), a.createElement(k._2, {
                            padding: {
                                right: 1
                            },
                            display: k.N.Flex,
                            alignItems: k.c.Center
                        }, a.createElement(k._24, {
                            label: Object(r.d)("Video Type", "CollectionItemCard"),
                            value: Object(A.a)(e.broadcastType),
                            icon: k._16.NavVideos
                        })))
                    }, t.reportImageInteractive = function() {
                        t.props.latencyTracking.reportInteractive()
                    }, t
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.collectionItem;
                    return a.createElement(k._2, {
                        className: "collection-item-card",
                        margin: {
                            y: 1
                        }
                    }, a.createElement(L.a, null, a.createElement(k._25, {
                        background: k.m.Alt,
                        display: k.N.Flex,
                        className: "collection-item__drag-handle"
                    }, a.createElement(z, null)), a.createElement(k._2, {
                        alignSelf: k.d.Center,
                        padding: {
                            x: 1
                        }
                    }, this.props.position), a.createElement(k._2, {
                        flexGrow: 0,
                        flexShrink: 0
                    }, a.createElement(k.C, {
                        aspect: k.k.Aspect16x9,
                        size: k.D.Size16,
                        onLoad: this.reportImageInteractive,
                        onError: this.reportImageInteractive,
                        src: e.previewThumbnailURL ? e.previewThumbnailURL : "https://static-cdn.jtvnw.net/ttv-playlists-thumbnails-prod/missing-video-thumb-320x180.png",
                        alt: e.title
                    })), a.createElement(B.a, null, a.createElement(k._43, {
                        label: Object(r.d)("Watch this video", "CollectionItemCard"),
                        direction: k._45.Right
                    }, a.createElement(k._35, {
                        type: k._40.H5,
                        color: k.I.Alt
                    }, a.createElement(F.a, {
                        "data-test-selector": G.VideoLink,
                        to: {
                            pathname: "/videos/" + this.props.collectionItem.id,
                            state: {
                                content: u.PageviewContent.CollectionItemCard,
                                medium: u.PageviewMedium.VideoManagerCollectionEditor
                            }
                        }
                    }, e.title))), this.subHeader(e)), a.createElement(H.a, null, a.createElement(R.a, {
                        value: e.viewCount.toString(),
                        icon: k._16.GlyphViews,
                        label: Object(r.d)("Total videos", "CollectionItemCard")
                    })), a.createElement(P.a, {
                        options: this.collectionMenuOptions(e)
                    })))
                }, t.prototype.collectionMenuOptions = function(e) {
                    return [{
                        asset: k._16.Edit,
                        title: Object(r.d)("Set as collection thumbnail", "CollectionItemCard")
                    }, {
                        asset: k._16.Trash,
                        title: Object(r.d)("Remove from collection", "CollectionItemCard")
                    }]
                }, t
            }(a.Component),
            q = Object(l.compose)(Object(m.d)("CollectionItemCard"))(U),
            K = Object(j.SortableElement)(function(e) {
                return a.createElement(q, o.__assign({}, e))
            }),
            Q = Object(j.SortableContainer)(function(e) {
                var t = e.items;
                return a.createElement(k._2, null, t.map(function(e, t) {
                    return a.createElement(K, {
                        key: e.id,
                        index: t,
                        position: t + 1,
                        collectionItem: e
                    })
                }))
            }),
            $ = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onSortEnd = function(e) {
                        var n = e.oldIndex,
                            i = e.newIndex,
                            o = Object(j.arrayMove)(t.props.items, n, i);
                        return t.props.onReorder(o), "foo"
                    }, t
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(Q, {
                        items: this.props.items,
                        onSortEnd: this.onSortEnd,
                        useDragHandle: !0
                    })
                }, t
            }(a.Component),
            W = n("Dz2i");
        n("/brc");
        ! function(e) {
            e[e.BackButton = 0] = "BackButton"
        }(w || (w = {}));
        var Z = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        collectionEdits: {}
                    }, t.onItemsChange = function(e) {
                        t.isOriginalOrder(e) ? t.resetEditStateForKey("items") : t.setState(function(t) {
                            var n = t;
                            return n.collectionEdits ? n.collectionEdits.items = e : n.collectionEdits = {
                                items: e
                            }, n
                        })
                    }, t.onTitleChange = function(e) {
                        e !== (t.props.data.collection && t.props.data.collection.title) ? t.setState(function(t) {
                            var n = t;
                            return n.collectionEdits ? n.collectionEdits.title = e : n.collectionEdits = {
                                title: e
                            }, n
                        }) : t.resetEditStateForKey("title")
                    }, t.resetEditStateForKey = function(e) {
                        t.setState(function(t) {
                            return {
                                collectionEdits: o.__assign({}, t.collectionEdits, (n = {}, n[e] = void 0, n))
                            };
                            var n
                        })
                    }, t.onSave = function() {
                        t.state.collectionEdits && t.props.updateCollection(t.state.collectionEdits)
                    }, t.onCancel = function() {
                        t.state.collectionEdits, r.o.history.goBack()
                    }, t.isOriginalOrder = function(e) {
                        var n = t.props.data.collection && t.props.data.collection.items.edges.map(function(e) {
                                return e.node.id
                            }) || [],
                            i = e.map(function(e) {
                                return e.id
                            });
                        return n.every(function(e, t) {
                            return i[t] === e
                        })
                    }, t
                }
                return o.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
                    e.data.loading && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e, t, n = !1;
                    return this.props.data.loading ? (e = this.collectionInfoPlaceholder(), t = this.collectionCardPlaceholders()) : this.props.data.error || !this.props.data.collection ? (e = this.collectionUnavailableError(), t = this.collectionItemsUnavaibleError()) : this.props.data.collection ? (e = a.createElement(V, {
                        collection: this.props.data.collection,
                        onTitleChange: this.onTitleChange,
                        onVideosChange: this.props.data.refetch
                    }), t = a.createElement($, {
                        items: this.props.data.collection.items.edges.map(function(e) {
                            return e.node
                        }),
                        onReorder: this.onItemsChange
                    }), n = this.props.data.collection.items.pageInfo.hasNextPage || !1) : (e = this.collectionUnavailableError(), t = this.noCollectionItemsCTA()), a.createElement(c.b, null, a.createElement(k._2, {
                        padding: 3,
                        display: k.N.Flex,
                        flexDirection: k.P.Row,
                        className: "collection-editor-page"
                    }, a.createElement(k._2, {
                        flexGrow: 1
                    }, a.createElement(k._2, {
                        margin: {
                            bottom: 1
                        },
                        flexGrow: 1,
                        flexDirection: k.P.Row,
                        display: k.N.Flex
                    }, a.createElement(k._2, {
                        flexGrow: 1
                    }, a.createElement(k._35, {
                        type: k._40.H3
                    }, Object(r.d)("Edit Collection", "CollectionEditorPagePresentation"))), a.createElement(k._2, {
                        flexGrow: 0
                    }, a.createElement(k.u, {
                        onClick: this.onCancel,
                        type: k.z.Text
                    }, Object(r.d)("Cancel", "CollectionEditorPagePresentation")))), a.createElement(k._2, {
                        padding: {
                            y: .5
                        }
                    }, a.createElement(k.L, {
                        "data-test-selector": w.BackButton,
                        hoverUnderlineNone: !0,
                        to: {
                            pathname: "/" + this.props.match.params.creatorLogin + "/manager/collections",
                            state: {
                                content: "all_collections",
                                medium: u.PageviewMedium.VideoManagerCollectionEditor
                            }
                        }
                    }, a.createElement(k._2, {
                        display: k.N.Flex,
                        flexDirection: k.P.Row,
                        alignItems: k.c.Center
                    }, a.createElement(k._15, {
                        asset: k._16.ChatSettingsBack,
                        height: 20,
                        width: 20
                    }), a.createElement(k._35, {
                        align: k._50.Middle,
                        bold: !0
                    }, Object(r.d)("All collections", "CollectionEditorPagePresentation"))))), e, t, a.createElement(c.a, {
                        enabled: n,
                        loadMore: this.props.loadMore
                    })), a.createElement(k._2, {
                        flexGrow: 0,
                        className: "right-sidebar"
                    }, a.createElement(k.u, {
                        onClick: this.onSave
                    }, Object(r.d)("Save changes", "CollectionEditorPagePresentation")))))
                }, t.prototype.collectionCardPlaceholders = function() {
                    return [a.createElement(p.a, {
                        key: 1
                    }), a.createElement(p.a, {
                        key: 2
                    }), a.createElement(p.a, {
                        key: 3
                    })]
                }, t.prototype.collectionInfoPlaceholder = function() {
                    return a.createElement(T, null)
                }, t.prototype.noCollectionItemsCTA = function() {
                    return a.createElement("div", null)
                }, t.prototype.collectionItemsUnavaibleError = function() {
                    return a.createElement("div", null)
                }, t.prototype.collectionUnavailableError = function() {
                    return a.createElement("div", null)
                }, t
            }(a.Component),
            Y = function(e, t) {
                var n = t.fetchMoreResult;
                if (!n || !n.collection || !n.collection.items) return e;
                var i = e.collection && e.collection.items.edges || [];
                return n.collection.items.edges = i.concat(n.collection.items.edges), n
            },
            J = Object(l.compose)(Object(l.graphql)(W, {
                options: function(e) {
                    return {
                        variables: {
                            collectionID: e.match.params.collectionID
                        }
                    }
                },
                props: function(e) {
                    return o.__assign({}, e, {
                        loadMore: function() {
                            return e.data.fetchMore({
                                variables: (t = e.ownProps, n = e.data, i = n.collection && n.collection.items ? n.collection.items.edges : [], o = i[i.length - 1] && i[i.length - 1].cursor, {
                                    collectionID: t.match.params.collectionID,
                                    after: o
                                }),
                                query: W,
                                updateQuery: Y
                            });
                            var t, n, i, o
                        },
                        updateCollection: function(e) {
                            return new Promise(function(e) {
                                return e()
                            })
                        }
                    })
                }
            }), Object(m.d)("CollectionEditorPage", {
                destination: s.a.VideoManagerCollectionsEditor
            }), Object(d.a)({
                location: u.PageviewLocation.VideoManagerCollectionEditor,
                properties: function(e) {
                    return {
                        channel: e.match.params.creatorLogin
                    }
                },
                skip: function(e) {
                    return e.data.loading
                }
            }))(Z),
            X = n("L2R7"),
            ee = function(e) {
                return window.location.replace("https://www.twitch.tv/" + encodeURIComponent(e.match.params.creatorLogin) + "/manager/collections/edit/" + e.match.params.collectionID), null
            },
            te = function(e) {
                return Object(X.a)() ? a.createElement(J, o.__assign({}, e)) : a.createElement(ee, o.__assign({}, e))
            };
        n.d(t, "CollectionEditorPage", function() {
            return te
        })
    },
    KRtN: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            o = n("GiK3"),
            a = n("rCmJ"),
            l = n("Odds"),
            r = function(e) {
                var t = e.asset ? o.createElement(l._15, {
                    asset: e.asset
                }) : null;
                return o.createElement(l._0, {
                    linkTo: e.linkTo,
                    onClick: e.onClick
                }, o.createElement(l._2, {
                    alignItems: l.c.Center,
                    display: l.N.Flex,
                    flexGrow: 1,
                    padding: 1
                }, t, o.createElement(l.W, {
                    margin: {
                        left: 1
                    }
                }, o.createElement(l._35, null, e.title))))
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
                return this.state.showDropMenu && (e = this.dropMenu()), o.createElement(l._2, {
                    flexGrow: 0,
                    flexShrink: 0,
                    display: l.N.Flex,
                    position: l._9.Relative
                }, o.createElement(l.W, {
                    fullHeight: !0
                }, o.createElement(a.a, {
                    onClickOut: this.clickOutHandler
                }, o.createElement(l._2, {
                    fullHeight: !0,
                    display: l.N.Flex,
                    alignItems: l.c.Stretch
                }, o.createElement(l.u, {
                    disabled: 0 === this.props.options.length,
                    icon: l._16.More,
                    onClick: this.menuButtonClickHandler,
                    type: l.z.Text
                })), e)))
            }, t.prototype.dropMenu = function() {
                var e = this.props.options.map(function(e, t) {
                    return o.createElement(r, i.__assign({
                        key: t
                    }, e))
                });
                return o.createElement(l.p, {
                    size: l.r.Small,
                    direction: l.q.BottomRight,
                    noTail: !0,
                    show: !0
                }, e)
            }, t
        }(o.Component)
    },
    M0wY: function(e, t, n) {
        "use strict";
        var i, o = n("TToO"),
            a = n("GiK3"),
            l = n("3zLD"),
            r = n("RH2O"),
            c = n("6sO2"),
            d = n("7vx8"),
            s = n("oIkB"),
            u = n("V5M+"),
            m = n("+8VM"),
            p = n("rvrg"),
            h = n("Odds");
        ! function(e) {
            e[e.CancelButton = 0] = "CancelButton", e[e.ConfirmButton = 1] = "ConfirmButton", e[e.ErrorAlert = 2] = "ErrorAlert"
        }(i || (i = {}));
        var v = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.collection,
                        t = null;
                    return this.props.error && (t = a.createElement(h.e, {
                        delay: h.f.Short,
                        type: h.i.BounceIn,
                        enabled: !0
                    }, a.createElement(h._25, {
                        border: !0,
                        margin: {
                            bottom: 1
                        },
                        padding: 1,
                        fullWidth: !0
                    }, a.createElement(h._35, {
                        bold: !0,
                        color: h.I.Error,
                        "data-test-selector": i.ErrorAlert
                    }, this.props.error)))), a.createElement(h.e, {
                        type: h.i.FadeIn,
                        delay: h.f.Medium,
                        duration: h.g.Medium,
                        enabled: !0
                    }, a.createElement(h._25, {
                        background: h.m.Base,
                        padding: {
                            x: 3,
                            top: 2,
                            bottom: 3
                        }
                    }, a.createElement(h.W, {
                        padding: {
                            bottom: 1
                        }
                    }, a.createElement(h._35, {
                        fontSize: h.R.Size3
                    }, Object(c.d)("Delete Collection", "DeleteCollectionModal"))), a.createElement(h._35, {
                        fontSize: h.R.Size6
                    }, Object(c.d)("Are you sure you want to delete this collection?", "DeleteCollectionModal")), a.createElement(h._35, {
                        fontSize: h.R.Size6
                    }, Object(c.d)("This action cannot be undone. ", "DeleteCollectionModal")), a.createElement(h._2, {
                        padding: {
                            y: 2
                        }
                    }, a.createElement(p.a, {
                        collection: e,
                        hideOptionsMenu: !0
                    })), t, a.createElement(h._2, {
                        display: h.N.Flex,
                        flexDirection: h.P.Row,
                        justifyContent: h._1.Center
                    }, a.createElement(h._2, {
                        margin: {
                            x: .5
                        }
                    }, a.createElement(h.u, {
                        "data-test-selector": i.CancelButton,
                        onClick: this.props.onCancel,
                        type: h.z.Hollow
                    }, Object(c.d)("Cancel", "DeleteCollectionModal"))), a.createElement(h._2, {
                        margin: {
                            x: .5
                        }
                    }, a.createElement(h.u, {
                        "data-test-selector": i.ConfirmButton,
                        onClick: this.props.onDeleteRequest,
                        type: h.z.Alert
                    }, Object(c.d)("Delete", "DeleteCollectionModal")))), a.createElement(m.a, {
                        closeOnBackdropClick: !0
                    })))
                }, t
            }(a.Component),
            f = n("e6eF");
        n.d(t, "a", function() {
            return C
        });
        var g = function(e) {
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
                                            return t.trys.push([1, 3, , 4]), [4, this.props.onDeleteRequest(Object(s.a)({
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
                    return a.createElement(v, {
                        collection: this.props.collection,
                        error: this.state.deletionError,
                        onCancel: this.onCancelHandler,
                        onDeleteRequest: this.onDeleteHandler
                    })
                }, t
            }(a.Component),
            k = Object(l.compose)(Object(d.a)(f, {
                name: "onDeleteRequest"
            }))(g);
        var C = Object(r.b)(null, function(e, t) {
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
            return a
        });
        var i = n("GiK3"),
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
            return l
        });
        var i = n("GiK3"),
            o = (n.n(i), n("Odds")),
            a = n("QmYP"),
            l = (n.n(a), function(e) {
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
            a = n("Odds"),
            l = function(e) {
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
            return l
        })
    },
    dAJe: function(e, t) {},
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
    gpuH: function(e, t) {},
    j5vp: function(e, t, n) {
        var i = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "CollectionEditor_SearchCreatorVideos"
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
                                value: "ID"
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
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "search"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "VideoConnectionSearchParams"
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
                                    value: "id"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "searchVideos"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "first"
                                    },
                                    value: {
                                        kind: "IntValue",
                                        value: "6"
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
                                        value: "search"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "search"
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
                                                        kind: "FragmentSpread",
                                                        name: {
                                                            kind: "Name",
                                                            value: "SearchCardVideo"
                                                        },
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
                end: 345
            }
        };
        i.loc.source = {
            body: '#import "twilight/features/video-search-card/models/search-card-video.gql"\nquery CollectionEditor_SearchCreatorVideos($creatorID: ID! $after: Cursor $search: VideoConnectionSearchParams) {\nuser(id: $creatorID) {\nid\nsearchVideos(first: 6 after: $after search: $search) {\nedges {\ncursor\nnode {\n...SearchCardVideo\n}\n}\npageInfo {\nhasNextPage\n}\n}\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var o = {};
        i.definitions = i.definitions.concat(n("y+8p").definitions.filter(function(e) {
            if ("FragmentDefinition" !== e.kind) return !0;
            var t = e.name.value;
            return !o[t] && (o[t] = !0, !0)
        })), e.exports = i
    },
    "kt/X": function(e, t) {},
    rvrg: function(e, t, n) {
        "use strict";
        var i = n("RH2O"),
            o = n("V5M+"),
            a = n("TToO"),
            l = n("GiK3"),
            r = n("6sO2"),
            c = n("mi6k"),
            d = n("vH/s"),
            s = n("kk4f"),
            u = n("CSlQ"),
            m = n("Z8qZ"),
            p = n("KRtN"),
            h = n("4o7v"),
            v = n("PwTO"),
            f = n("N8CH"),
            g = n("Odds"),
            k = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onDeleteOptionClickHandler = function() {
                        t.props.onDeleteOptionClick(t.props.collection)
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.collection;
                    return l.createElement(m.a, null, l.createElement(g._2, {
                        flexShrink: 0
                    }, l.createElement(s.a, {
                        alt: e.title,
                        sizes: [{
                            size: "160px"
                        }],
                        src: e.thumbnailURL,
                        videoCount: e.items.totalCount
                    })), l.createElement(f.a, null, l.createElement(g._35, {
                        bold: !0,
                        type: g._40.H4,
                        color: g.I.Alt
                    }, e.title), l.createElement(g._43, {
                        direction: g._45.Bottom,
                        label: Object(r.d)("Last Updated", "CollectionManagerCard")
                    }, l.createElement(g._35, {
                        color: g.I.Alt2
                    }, Object(r.c)(new Date(e.updatedAt), "long")))), l.createElement(v.a, null, this.collectionStats(e)), this.renderCardMenu())
                }, t.prototype.renderCardMenu = function() {
                    if (this.props.hideOptionsMenu || !this.props.collection.owner) return null;
                    var e = [{
                        asset: g._16.Edit,
                        linkTo: {
                            pathname: "/" + this.props.collection.owner.login + "/manager/collections/" + this.props.collection.id,
                            state: {
                                content: d.PageviewContent.CollectionCard,
                                medium: d.PageviewMedium.VideoManagerCollectionManager
                            }
                        },
                        title: Object(r.d)("Edit", "CollectionManagerCard")
                    }, {
                        asset: g._16.Trash,
                        onClick: this.onDeleteOptionClickHandler,
                        title: Object(r.d)("Delete", "CollectionManagerCard")
                    }];
                    return l.createElement(p.a, {
                        options: e
                    })
                }, t.prototype.collectionStats = function(e) {
                    return [{
                        value: Object(c.a)(e.lengthSeconds),
                        icon: g._16.GlyphLength,
                        label: Object(r.d)("Collection length", "CollectionManagerCard")
                    }, {
                        value: "" + e.viewCount,
                        icon: g._16.GlyphViews,
                        label: Object(r.d)("Views", "CollectionManagerCard")
                    }].map(function(e, t) {
                        return l.createElement(h.a, a.__assign({
                            key: t
                        }, e))
                    })
                }, t
            }(l.Component),
            C = Object(u.d)("CollectionManagerCard", {
                autoReportInteractive: !0
            })(k),
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
    },
    "y+8p": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "SearchCardVideo"
                },
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
                            value: "publishedAt"
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
            }],
            loc: {
                start: 0,
                end: 115
            }
        };
        n.loc.source = {
            body: "fragment SearchCardVideo on Video {\nid\nlengthSeconds\npreviewThumbnailURL(width: 160 height: 90)\npublishedAt\ntitle\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    }
});
//# sourceMappingURL=pages.video-tools.pages.collection-editor-62290d270ac92b4f943fe906867cf798.js.map