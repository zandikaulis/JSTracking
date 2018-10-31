(window.webpackJsonp = window.webpackJsonp || []).push([
    [142], {
        djq7: function(e, n, i) {
            "use strict";
            i.r(n), i.d(n, "RedirectToLatestArchiveHighlighterComponent", function() {
                return u
            }), i.d(n, "RedirectToLatestArchiveHighlighter", function() {
                return c
            });
            var a = i("q1tI"),
                t = i("oJmH"),
                r = i("mLw1"),
                d = i("/7QA"),
                s = i("ZDlU"),
                l = i("yR8l"),
                o = i("s5bn"),
                u = function(e) {
                    if (e.data && e.data.loading) return null;
                    if (e.data && !e.data.loading && !e.data.user) return a.createElement(s.a, {
                        message: Object(d.d)("Error loading data.", "HighlighterRedirectToLatestArchive")
                    });
                    if (e.data && !e.data.loading && e.data.user && e.data.user.videos) {
                        var n = e.data.user.videos.edges;
                        if (n.length < 1) return a.createElement(s.a, {
                            message: Object(d.d)("Oops, you have no videos to highlight!", "HighlighterRedirectToLatestArchive")
                        });
                        var i = n[0].node.id;
                        return a.createElement(r.a, {
                            to: "/" + e.match.params.channelName + "/manager/highlighter/" + i
                        })
                    }
                    return a.createElement(s.a, {
                        message: Object(d.d)("Something has gone wrong. Please try again later.", "HighlighterRedirectToLatestArchive")
                    })
                },
                c = Object(t.compose)(Object(l.a)(o, {
                    options: function(e) {
                        return {
                            variables: {
                                userLogin: e.match.params.channelName
                            }
                        }
                    }
                }))(u)
        },
        s5bn: function(e, n) {
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
    }
]);