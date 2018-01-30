webpackJsonp([76], {
    "Dk8+": function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = t("TToO"),
            a = t("U7vG"),
            o = t("3zLD"),
            r = t("6sO2"),
            l = t("j7/Y"),
            c = t("w9tK"),
            d = t("vH/s"),
            s = t("CSlQ"),
            u = t("PQ4i"),
            m = t("Odds"),
            p = function(e) {
                function n() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(n, e), n.prototype.render = function() {
                    var e = this.props.collection;
                    return a.createElement(m.V, {
                        display: m.H.Flex
                    }, a.createElement(m.j, null, a.createElement("img", {
                        src: e.thumbnailURL,
                        alt: e.title
                    })), a.createElement("div", null, a.createElement(m._23, null, e.title), a.createElement(m._23, {
                        "data-test-selector": "view-count"
                    }, Object(r.d)("Total Views {views}", {
                        views: e.viewCount || 0
                    }, "CollectionManager"))))
                }, n
            }(a.Component),
            v = Object(o.compose)(Object(s.d)("CollectionManagerCard", {
                autoReportInteractive: !0
            }))(p),
            k = t("I9kX"),
            g = function(e) {
                function n() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(n, e), n.prototype.componentDidUpdate = function(e) {
                    e.data.loading && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                }, n.prototype.render = function() {
                    var e;
                    return e = this.props.data.loading ? this.collectionCardPlaceholders() : !this.props.data.error && this.props.data.user && this.props.data.user.collections ? this.props.data.user.collections.edges.length > 0 ? this.renderCollections(this.props.data.user.collections.edges) : this.noCollectionsCTA() : this.contentUnavaibleError(), a.createElement("div", null, a.createElement(m._23, {
                        type: m._28.H1
                    }, Object(r.d)("Collections", "CollectionManager")), a.createElement(m.V, {
                        fullWidth: !0,
                        padding: {
                            right: 2
                        }
                    }, e))
                }, n.prototype.renderCollections = function(e) {
                    return e.map(function(e, n) {
                        return a.createElement(v, {
                            key: n,
                            collection: e.node
                        })
                    })
                }, n.prototype.collectionCardPlaceholders = function() {
                    return [a.createElement(u.a, {
                        key: 1
                    }), a.createElement(u.a, {
                        key: 2
                    }), a.createElement(u.a, {
                        key: 3
                    })]
                }, n.prototype.noCollectionsCTA = function() {
                    return a.createElement("div", null)
                }, n.prototype.contentUnavaibleError = function() {
                    return a.createElement("div", null)
                }, n
            }(a.Component),
            h = Object(o.compose)(Object(o.graphql)(k, {
                options: function(e) {
                    return {
                        variables: {
                            creatorLogin: e.match.params.creatorLogin
                        }
                    }
                }
            }), Object(s.d)("CollectionManager", {
                destination: c.a.VideoManagerCollectionsManager
            }), Object(l.a)({
                location: d.PageviewLocation.VideoManagerCollectionManager,
                properties: function(e) {
                    return {
                        channel: e.match.params.creatorLogin,
                        channel_id: e.data.user ? e.data.user.id : null
                    }
                },
                skip: function(e) {
                    return e.data.loading
                }
            }))(g);
        t.d(n, "CollectionManagerPage", function() {
            return h
        })
    },
    I9kX: function(e, n) {
        var t = {
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
                                                            value: "title"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "thumbnailURL"
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
                end: 211
            }
        };
        t.loc.source = {
            body: "query CollectionManager_Owner($creatorLogin: String!) {\nuser(login: $creatorLogin) {\nid\ncollections {\nedges {\ncursor\nnode {\nid\ntitle\nthumbnailURL\nviewCount\nitems {\ntotalCount\n}\n}\n}\npageInfo {\nhasNextPage\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = t
    }
});
//# sourceMappingURL=pages.video-tools.pages.collection-manager-b6653fe2dcfa34d6445cfaf866b8c2f7.js.map