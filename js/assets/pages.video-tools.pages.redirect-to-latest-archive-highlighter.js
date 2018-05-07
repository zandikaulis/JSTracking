webpackJsonp([122], {
    "/fDj": function(e, n, i) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), i.d(n, "RedirectToLatestArchiveHighlighterComponent", function() {
            return u
        }), i.d(n, "RedirectToLatestArchiveHighlighter", function() {
            return m
        });
        var t = i("GiK3"),
            a = (i.n(t), i("3zLD")),
            d = (i.n(a), i("CIox")),
            r = i("6sO2"),
            o = i("yWCw"),
            s = i("7vx8"),
            l = i("hthX"),
            u = (i.n(l), function(e) {
                if (e.data && e.data.loading) return null;
                if (e.data && !e.data.loading && !e.data.user) return t.createElement(o.a, {
                    message: Object(r.d)("Error loading data.", "RedirectToLatestVideoHighlighter")
                });
                if (e.data && !e.data.loading && e.data.user && e.data.user.videos) {
                    var n = e.data.user.videos.edges;
                    if (n.length < 1) return t.createElement(o.a, {
                        message: Object(r.d)("Oops, you have no videos to highlight!", "RedirectToLatestVideoHighlighter")
                    });
                    var i = n[0].node.id;
                    return t.createElement(d.b, {
                        to: "/" + e.match.params.channelName + "/manager/highlighter/" + i
                    })
                }
                return t.createElement(o.a, {
                    message: Object(r.d)("Something has gone wrong. Please try again later.", "RedirectToLatestVideoHighlighter")
                })
            }),
            m = Object(a.compose)(Object(s.a)(l, {
                options: function(e) {
                    return {
                        variables: {
                            userLogin: e.match.params.channelName
                        }
                    }
                }
            }))(u)
    },
    hthX: function(e, n) {
        var i = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "LatestArchive_User"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "userLogin"
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
                                    value: "userLogin"
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
                                    value: "videos"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "first"
                                    },
                                    value: {
                                        kind: "IntValue",
                                        value: "1"
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "sort"
                                    },
                                    value: {
                                        kind: "EnumValue",
                                        value: "TIME"
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "type"
                                    },
                                    value: {
                                        kind: "EnumValue",
                                        value: "ARCHIVE"
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
                end: 144
            }
        };
        i.loc.source = {
            body: "query LatestArchive_User($userLogin:String!) {\nuser(login:$userLogin) {\nid\nvideos(first: 1 sort:TIME type:ARCHIVE) {\nedges {\nnode {\nid\n}\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = i
    }
});
//# sourceMappingURL=pages.video-tools.pages.redirect-to-latest-archive-highlighter-89e0526239b278c35927d225b130029a.js.map