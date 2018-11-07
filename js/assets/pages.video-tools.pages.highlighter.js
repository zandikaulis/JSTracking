(window.webpackJsonp = window.webpackJsonp || []).push([
    [162], {
        "0vlg": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "HighlighterClips"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "videoID"
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
                                value: "clipUserIDs"
                            }
                        },
                        type: {
                            kind: "ListType",
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
                        }
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "cursor"
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
                                value: "video"
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
                                        value: "videoID"
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
                                        value: "clips"
                                    },
                                    arguments: [{
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "curatorIDs"
                                        },
                                        value: {
                                            kind: "Variable",
                                            name: {
                                                kind: "Name",
                                                value: "clipUserIDs"
                                            }
                                        }
                                    }, {
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "first"
                                        },
                                        value: {
                                            kind: "IntValue",
                                            value: "100"
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
                                                value: "cursor"
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
                                                                value: "slug"
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
                                                                value: "curator"
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
                                                                        value: "displayName"
                                                                    },
                                                                    arguments: [],
                                                                    directives: []
                                                                }]
                                                            }
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "videoOffsetSeconds"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "createdAt"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }]
                                                    }
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "cursor"
                                                    },
                                                    arguments: [],
                                                    directives: []
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
                    end: 288
                }
            };
            n.loc.source = {
                body: "query HighlighterClips($videoID: ID! $clipUserIDs: [ID!] $cursor: Cursor) {\nvideo(id: $videoID) {\nid\nclips (curatorIDs: $clipUserIDs first: 100 after: $cursor) {\nedges {\nnode {\nid\nslug\ntitle\ncurator {\nid\ndisplayName\n}\nvideoOffsetSeconds\ncreatedAt\n}\ncursor\n}\npageInfo {\nhasNextPage\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "17YR": function(e, t, n) {
            "use strict";

            function a(e) {
                return e.map(function(e) {
                    return e.join(",")
                }).join("\n")
            }

            function i(e) {
                for (var t = [], n = e[0].length, a = function(n) {
                        t.push(e.map(function(e) {
                            return e[n]
                        }))
                    }, i = 0; i < n; i++) a(i);
                return t
            }

            function r(e, t) {
                if ("function" == typeof window.navigator.msSaveBlob) {
                    var n = new Blob([t], {
                        type: "text/csv;charset=utf-8;"
                    });
                    return window.navigator.msSaveBlob(n, e)
                }
                var a = document.createElement("a"),
                    i = encodeURIComponent(t);
                void 0 === a.download ? a.href = "data:attachment/csv;charset=utf-8," + i : (a.href = "data:text/csv;charset=utf-8," + i, a.download = e), a.target = "_blank", a.setAttribute("style", "visibility: hidden"), document.body.appendChild(a), a.click(), document.body.removeChild(a)
            }
            n.d(t, "b", function() {
                return a
            }), n.d(t, "c", function() {
                return i
            }), n.d(t, "a", function() {
                return r
            })
        },
        "2dAP": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "videoFields"
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
                                value: "title"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "description"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "language"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "game"
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
                                        value: "name"
                                    },
                                    arguments: [],
                                    directives: []
                                }]
                            }
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "tags"
                            },
                            arguments: [],
                            directives: []
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 85
                }
            };
            n.loc.source = {
                body: "fragment videoFields on Video {\nid\ntitle\ndescription\nlanguage\ngame {\nid\nname\n}\ntags\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "6FuP": function(e, t, n) {
            "use strict";
            var a;
            n.d(t, "a", function() {
                    return a
                }),
                function(e) {
                    e.Orange = "orange", e.Blue = "blue"
                }(a || (a = {}))
        },
        "8QND": function(e, t, n) {
            var a = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "HighlighterPage_Video"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "videoID"
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
                    }],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "video"
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
                                        value: "videoID"
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
                                        value: "broadcastType"
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
                                                value: "displayName"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
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
                                        value: "viewCount"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "FragmentSpread",
                                    name: {
                                        kind: "Name",
                                        value: "videoFields"
                                    },
                                    directives: []
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
                    end: 311
                }
            };
            a.loc.source = {
                body: '#import "twilight/features/video-field-editor/models/video-fields-fragment.gql"\nquery HighlighterPage_Video($videoID: ID!) {\nvideo(id: $videoID) {\nid\nbroadcastType\nlengthSeconds\nowner {\ndisplayName\nid\nlogin\n}\npreviewThumbnailURL(width: 160 height: 90)\npublishedAt\nviewCount\n...videoFields\n}\ncurrentUser {\nid\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var i = {};
            a.definitions = a.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !i[t] && (i[t] = !0, !0)
                })
            }(n("2dAP").definitions)), e.exports = a
        },
        CLrI: function(e, t, n) {
            "use strict";
            var a, i;
            n.d(t, "a", function() {
                    return a
                }), n.d(t, "b", function() {
                    return i
                }),
                function(e) {
                    e.TrackingID = "trackingID", e.GameName = "game", e.GameID = "gameID", e.Title = "title", e.Start = "start", e.End = "end"
                }(a || (a = {})),
                function(e) {
                    e.VideoStartTime = "t"
                }(i || (i = {}))
        },
        HszP: function(e, t, n) {},
        L7ac: function(e, t, n) {},
        LWYa: function(e, t, n) {
            "use strict";
            var a = n("q1tI"),
                i = n.n(a),
                r = n("iiw+"),
                s = n.n(r),
                o = n("m90/"),
                l = n.n(o);
            var d = function(e) {
                function t() {
                    return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t),
                        function(e, t) {
                            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || "object" != typeof t && "function" != typeof t ? e : t
                        }(this, e.apply(this, arguments))
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, e), t.prototype.enable = function(e) {
                    this.unblock && this.unblock(), this.unblock = this.context.router.history.block(e)
                }, t.prototype.disable = function() {
                    this.unblock && (this.unblock(), this.unblock = null)
                }, t.prototype.componentWillMount = function() {
                    l()(this.context.router, "You should not use <Prompt> outside a <Router>"), this.props.when && this.enable(this.props.message)
                }, t.prototype.componentWillReceiveProps = function(e) {
                    e.when ? this.props.when && this.props.message === e.message || this.enable(e.message) : this.disable()
                }, t.prototype.componentWillUnmount = function() {
                    this.disable()
                }, t.prototype.render = function() {
                    return null
                }, t
            }(i.a.Component);
            d.propTypes = {
                when: s.a.bool,
                message: s.a.oneOfType([s.a.func, s.a.string]).isRequired
            }, d.defaultProps = {
                when: !0
            }, d.contextTypes = {
                router: s.a.shape({
                    history: s.a.shape({
                        block: s.a.func.isRequired
                    }).isRequired
                }).isRequired
            }, t.a = d
        },
        QClN: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "HighlighterMarkers"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "videoID"
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
                                value: "cursor"
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
                                value: "video"
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
                                        value: "videoID"
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
                                        value: "bookmarks"
                                    },
                                    arguments: [{
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "first"
                                        },
                                        value: {
                                            kind: "IntValue",
                                            value: "100"
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
                                                value: "cursor"
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
                                                                value: "positionSeconds"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "user"
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
                                                                        value: "displayName"
                                                                    },
                                                                    arguments: [],
                                                                    directives: []
                                                                }]
                                                            }
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "description"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }]
                                                    }
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "cursor"
                                                    },
                                                    arguments: [],
                                                    directives: []
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
                    end: 233
                }
            };
            n.loc.source = {
                body: "query HighlighterMarkers($videoID: ID! $cursor: Cursor) {\nvideo(id: $videoID) {\nid\nbookmarks(first: 100 after: $cursor) {\nedges {\nnode {\nid\npositionSeconds\nuser {\nid\ndisplayName\n}\ndescription\n}\ncursor\n}\npageInfo {\nhasNextPage\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "Rw/r": function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                i = n("q1tI"),
                r = n("9kXc"),
                s = n("Ue10"),
                o = n("eNO8"),
                l = n("/7QA"),
                d = n("H/lO"),
                c = n("NZDK"),
                u = 10,
                p = function() {
                    return function() {
                        var e = this;
                        this.searchCode = function(t, n) {
                            return a.__awaiter(e, void 0, Promise, function() {
                                var e;
                                return a.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            return a.trys.push([0, 2, , 3]), [4, this.searchClient.queryForType(d.a.Games, t, t, {
                                                hitsPerPage: u,
                                                page: n
                                            })];
                                        case 1:
                                            return [2, a.sent()];
                                        case 2:
                                            throw e = a.sent(), l.k.error(e, "Algolia type results search failed"), e;
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        }, this.searchClient = new c.a({
                            appId: l.a.algoliaApplicationID,
                            apiKey: l.a.algoliaAPIKey,
                            apolloClient: l.p.apollo.client,
                            logger: l.k,
                            config: l.a,
                            stats: l.p.stats
                        })
                    }
                }(),
                f = [],
                m = {
                    objectID: "",
                    name: ""
                },
                h = function(e) {
                    return {
                        objectID: "",
                        name: e
                    }
                },
                g = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.startNewSearch = function(e) {
                            n.setState({
                                isSearchPending: !0,
                                searchTerm: e,
                                nextAlgoliaPage: 0
                            }, n.triggerLoadMore)
                        }, n.triggerLoadMore = function() {
                            return n.searchClient.searchCode(n.state.searchTerm, n.state.nextAlgoliaPage).then(function(e) {
                                n.resolveLoadMore(e)
                            })
                        }, n.resolveLoadMore = function(e) {
                            if (!e || e.id === n.state.searchTerm) {
                                var t = void 0;
                                if (e) {
                                    var a = void 0;
                                    n.state.gameResults && (a = {
                                        totalHits: n.state.gameResults.length,
                                        results: n.state.gameResults
                                    });
                                    var i = Object(r.b)({
                                        searchResults: e,
                                        append: n.state.nextAlgoliaPage > 0,
                                        currentGameResults: a
                                    }).currentGameResults;
                                    t = i ? i.results : f
                                }
                                n.setState({
                                    gameResults: t,
                                    isSearchPending: !1,
                                    nextAlgoliaPage: n.state.nextAlgoliaPage + 1
                                })
                            }
                        }, n.selectGame = function(e) {
                            if (n.state.gameResults && n.state.gameResults.length && n.state.gameResults[e] && n.state.gameResults[e].title) {
                                var t = n.state.gameResults[e];
                                if (t.title) {
                                    var a = {
                                        objectID: t.id,
                                        name: t.title
                                    };
                                    n.setselectedGametate(a)
                                } else n.selectEmptyGame()
                            } else n.selectEmptyGame()
                        }, n.selectGameByName = function(e) {
                            n.setselectedGametate(h(e))
                        }, n.selectEmptyGame = function() {
                            n.setselectedGametate(m)
                        }, n.setselectedGametate = function(e) {
                            n.setState({
                                selectedGame: e,
                                searchTerm: n.props.clearOnSelect ? "" : e.name,
                                redrawKey: Math.random()
                            }, n.fireChangeGame)
                        }, n.fireChangeGame = function() {
                            n.props.onChange(n.state.selectedGame)
                        }, n.searchClient = new p, n.state = n.getInitialState(t), n
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.startNewSearch(this.props.currentGameTitle)
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        e.currentGameTitle !== this.props.currentGameTitle && this.setState(this.getInitialState(e))
                    }, t.prototype.render = function() {
                        return this.props.disabled ? i.createElement("div", {
                            className: "game-selector__search-container"
                        }, i.createElement(s.Ra, {
                            value: this.props.currentGameTitle,
                            type: s.Ta.Text,
                            icon: s.tb.NavGames,
                            disabled: !0
                        })) : i.createElement(o.a, {
                            redrawKey: this.state.redrawKey,
                            searchTerm: this.state.searchTerm,
                            initialGameTitle: this.state.selectedGame.name,
                            gameResults: this.state.gameResults,
                            isSearchPending: this.state.isSearchPending,
                            startNewSearch: this.startNewSearch,
                            selectGame: this.selectGame,
                            selectEmptyGame: this.selectEmptyGame,
                            selectGameByName: this.selectGameByName,
                            triggerLoadMore: this.triggerLoadMore,
                            compact: this.props.compact
                        })
                    }, t.prototype.getInitialState = function(e) {
                        return {
                            searchTerm: e.currentGameTitle,
                            gameResults: f,
                            isSearchPending: !1,
                            nextAlgoliaPage: 0,
                            selectedGame: h(e.currentGameTitle),
                            redrawKey: Math.random()
                        }
                    }, t
                }(i.Component);
            n.d(t, !1, function() {
                return f
            }), n.d(t, !1, function() {
                return m
            }), n.d(t, "a", function() {
                return g
            })
        },
        UWbL: function(e, t, n) {
            "use strict";

            function a(e) {
                var t = /^((\d+)[Hh])?((\d+)[Mm])?((\d+)[Ss])?$/.exec(e || "");
                return t ? 3600 * (parseInt(t[2], 10) || 0) + 60 * (parseInt(t[4], 10) || 0) + (parseInt(t[6], 10) || 0) : 0
            }
            n.d(t, "a", function() {
                return a
            })
        },
        "Vt/k": function(e, t, n) {},
        VwyG: function(e, t, n) {
            "use strict";
            var a = n("/MKj"),
                i = n("kRBY"),
                r = n("mrSG"),
                s = n("q1tI"),
                o = n("oJmH"),
                l = n("/7QA"),
                d = n("yR8l"),
                c = n("GnwI"),
                u = n("nt5g"),
                p = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.logger = l.k.withCategory("role-restricted"), n.state = {
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
                }(s.Component);
            var f = Object(o.compose)(Object(d.a)(u, {
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
            }), Object(c.b)("RoleRestricted"))(p);
            var m = Object(a.connect)(function(e) {
                return {
                    isLoggedIn: Object(i.f)(e)
                }
            })(f);
            n.d(t, "a", function() {
                return m
            })
        },
        W0tn: function(e, t, n) {},
        YJDT: function(e, t, n) {
            "use strict";
            n("y8/E");
            var a = n("z3cX");
            n.d(t, "a", function() {
                return a.a
            })
        },
        al25: function(e, t, n) {},
        dW6f: function(e, t, n) {},
        eNO8: function(e, t, n) {
            "use strict";
            var a, i = n("mrSG"),
                r = n("TSYQ"),
                s = n("q1tI"),
                o = n("/7QA"),
                l = n("u5aL"),
                d = n("8/mp"),
                c = n("8Ad5"),
                u = n("Ue10"),
                p = function(e) {
                    return s.createElement(u.Xa, {
                        attachTop: !0,
                        attachRight: !0,
                        attachLeft: !0,
                        attachBottom: !0,
                        fullHeight: !0,
                        fullWidth: !0,
                        display: u.X.Flex,
                        flexDirection: u.Aa.Column,
                        justifyContent: u.Wa.Center,
                        alignItems: u.f.Center,
                        position: u.jb.Absolute
                    }, s.createElement(u.Xa, {
                        textAlign: u.Rb.Center,
                        flexShrink: 1
                    }, s.createElement(u.sb, {
                        asset: e.icon,
                        width: 46,
                        height: 48,
                        type: u.ub.Alt2
                    })), s.createElement(u.Xa, {
                        margin: {
                            top: 1
                        },
                        textAlign: u.Rb.Center
                    }, s.createElement(u.W, {
                        type: u.Vb.H4,
                        color: u.O.Alt2
                    }, e.titleText)), s.createElement(u.Xa, {
                        textAlign: u.Rb.Center
                    }, s.createElement(u.W, {
                        type: u.Vb.P,
                        color: u.O.Alt2
                    }, e.subText)))
                },
                f = n("N0BP"),
                m = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return s.createElement(u.Ua, i.__assign({
                            onClick: this.props.onClick,
                            linkTo: this.props.linkTo,
                            hover: this.props.hover,
                            tabIndex: -1,
                            key: this.props.id
                        }, Object(f.a)(this.props)), s.createElement(u.Xa, {
                            className: "search-game-result-card",
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, s.createElement(u.G, {
                            row: !0
                        }, s.createElement(u.H, {
                            overflow: u.cb.Hidden
                        }, s.createElement(u.Pa, {
                            padding: {
                                x: 1
                            }
                        }, s.createElement(u.W, {
                            type: u.Vb.H5,
                            ellipsis: !0
                        }, this.props.title))))))
                    }, t
                }(s.Component),
                h = n("fk61");
            n("tK6h");
            n.d(t, "a", function() {
                    return v
                }),
                function(e) {
                    e[e.Confirm = 1] = "Confirm", e[e.Dismiss = 2] = "Dismiss", e[e.Up = 3] = "Up", e[e.Down = 4] = "Down"
                }(a || (a = {}));
            var g = {};
            g[c.a.Esc] = a.Dismiss, g[c.a.Enter] = a.Confirm, g[c.a.Tab] = a.Confirm, g[c.a.Up] = a.Up, g[c.a.Down] = a.Down;
            var v = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.onFocus = function() {
                        n.props.searchTerm && n.setState({
                            isOpen: !0
                        })
                    }, n.onClickOut = function() {
                        n.state.isOpen && n.handleInteraction(a.Dismiss)
                    }, n.onKeyDown = function(e) {
                        var t = g[e.keyCode];
                        t && n.handleInteraction(t)
                    }, n.handleInteraction = function(e) {
                        switch (e) {
                            case a.Dismiss:
                                "" === n.props.searchTerm ? n.props.selectEmptyGame() : n.props.initialGameTitle && n.props.initialGameTitle !== n.props.searchTerm && n.props.gameResults && n.props.gameResults[0] && n.props.gameResults[0].title === n.props.searchTerm ? n.props.selectGame(0) : n.props.initialGameTitle ? n.props.selectGameByName(n.props.initialGameTitle) : n.props.gameResults && n.props.gameResults.length > 0 && n.props.selectGame(n.state.highlightedGameIndex), n.setState({
                                    isOpen: !1
                                });
                                break;
                            case a.Confirm:
                                n.props.searchTerm && n.props.gameResults ? n.props.selectGame(n.state.highlightedGameIndex) : n.props.selectEmptyGame(), n.setState({
                                    isOpen: !1
                                });
                                break;
                            case a.Up:
                                if (!n.props.gameResults) return;
                                n.setState({
                                    highlightedGameIndex: Math.max(0, n.state.highlightedGameIndex - 1)
                                });
                                break;
                            case a.Down:
                                if (!n.props.gameResults) return;
                                n.setState({
                                    highlightedGameIndex: Math.min(n.props.gameResults.length - 1, n.state.highlightedGameIndex + 1)
                                })
                        }
                    }, n.onChange = function(e) {
                        var t = e.target.value;
                        n.setState({
                            isOpen: !!t,
                            highlightedGameIndex: 0
                        }, function() {
                            n.props.startNewSearch(t)
                        })
                    }, n.onClickGame = function(e) {
                        var t = parseInt(e.currentTarget.getAttribute("data-game-index"), 10);
                        n.props.selectGame(t), n.setState({
                            isOpen: !1
                        })
                    }, n.state = n.state = {
                        isOpen: !1,
                        highlightedGameIndex: 0
                    }, n
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return s.createElement("div", {
                        className: "game-selector__search-container",
                        "data-click-out-id": "game-selector-search-balloon",
                        onKeyDown: this.onKeyDown
                    }, s.createElement(l.a, {
                        onClickOut: this.onClickOut
                    }, s.createElement(u.Ra, {
                        key: this.props.initialGameTitle + "-" + this.props.redrawKey,
                        type: u.Ta.Text,
                        icon: u.tb.NavGames,
                        name: "game",
                        onChange: this.onChange,
                        onFocus: this.onFocus,
                        defaultValue: this.props.searchTerm,
                        placeholder: Object(o.d)("Type to search and add games", "VideoManagerEdit"),
                        autoComplete: "off"
                    }), s.createElement(u.u, {
                        direction: u.v.Bottom,
                        noTail: !0,
                        size: this.props.compact ? u.w.Medium : u.w.Large,
                        show: this.state.isOpen,
                        offsetY: "5px",
                        "data-a-target": "game-selector-search-balloon"
                    }, this.renderSearchResult())))
                }, t.prototype.renderSearchResult = function() {
                    var e = r("game-selector__search-panel", {
                            "game-selector__search-panel--closed": !this.state.isOpen
                        }),
                        t = null;
                    return 0 === this.props.searchTerm.length || (t = this.props.gameResults ? this.props.gameResults.length > 0 ? this.renderGameResults(this.props.gameResults, this.state.highlightedGameIndex) : this.props.isSearchPending ? s.createElement(u.Za, {
                        fillContent: !0
                    }) : s.createElement(p, {
                        icon: u.tb.SearchNoResults,
                        titleText: Object(o.d)("No results found", "GameSelector"),
                        subText: Object(o.d)("They're probably in another castle", "GameSelector")
                    }) : s.createElement(p, {
                        icon: u.tb.DeadGlitch,
                        titleText: Object(o.d)("Search is not available at this time", "GameSelector"),
                        subText: Object(o.d)("Please try again later", "GameSelector")
                    })), s.createElement("div", {
                        className: e,
                        tabIndex: 0
                    }, s.createElement(u.Eb, {
                        attachTop: !0,
                        attachRight: !0,
                        attachLeft: !0,
                        attachBottom: !0,
                        background: u.r.Base,
                        position: u.jb.Absolute,
                        overflow: u.cb.Hidden,
                        display: u.X.Block
                    }, s.createElement(d.b, {
                        suppressScrollX: !0,
                        "data-a-target": "search-scroller"
                    }, s.createElement(u.Xa, {
                        margin: {
                            top: .5,
                            bottom: .5
                        }
                    }, t, s.createElement(d.a, {
                        enabled: this.state.isOpen,
                        loadMore: this.props.triggerLoadMore,
                        pixelThreshold: 50
                    })))))
                }, t.prototype.renderGameResults = function(e, t) {
                    var n = this;
                    return e.map(function(e, a, i) {
                        var r = i[t] === i[a];
                        return n.props.compact ? s.createElement(m, {
                            id: "game_" + e.title,
                            key: "game_" + e.title,
                            onClick: n.onClickGame,
                            title: e.title ? e.title : "",
                            hover: r,
                            "data-game-highlighted": r,
                            "data-game-index": a
                        }) : s.createElement(h.a, {
                            id: "game_" + e.title,
                            key: "game_" + e.title,
                            imageAlt: e.thumbnailAltText,
                            onClick: n.onClickGame,
                            title: e.title ? e.title : "",
                            hover: r,
                            "data-game-highlighted": r,
                            "data-game-index": a
                        })
                    })
                }, t
            }(s.Component)
        },
        f0Oh: function(e, t, n) {},
        "gt/l": function(e, t, n) {
            "use strict";
            n.r(t);
            var a, i = n("mrSG"),
                r = n("q1tI"),
                s = n("/MKj"),
                o = n("/7QA"),
                l = n("ZDlU"),
                d = n("VwyG"),
                c = n("aCAx"),
                u = n("LWYa"),
                p = n("mLw1"),
                f = n("fvjX"),
                m = n("gvGA"),
                h = n("8/mp"),
                g = n("yR8l"),
                v = n("V+GM"),
                S = n("QzU5"),
                O = n("kduP"),
                b = n("UWbL"),
                k = n("NvVO"),
                y = n("2xye"),
                D = n("GnwI"),
                E = n("CLrI"),
                C = n("eFQ3"),
                I = function(e) {
                    return r.createElement(C.b, {
                        vodID: e.videoID,
                        disableTheatreButton: !0,
                        playerTypeOverride: C.a.Highlighter,
                        paused: e.paused,
                        editing: e.editing,
                        nextVideoOffset: e.nextVideoOffset,
                        onVideoTimeChange: e.onVideoTimeChange,
                        onSeek: e.onVideoTimeChange,
                        onPauseToggled: e.onPauseToggled,
                        onSeeking: e.onVideoTimeChange
                    })
                },
                w = n("u5aL"),
                x = n("geRD"),
                N = n("hyVY"),
                T = n("TSYQ"),
                P = n("Ue10");
            n("uAdw");
            ! function(e) {
                e.Container = "Container", e.Fill = "Fill"
            }(a || (a = {}));
            var V, _ = function(e) {
                    var t = e.sourceVideoDuration,
                        n = e.segment.startOffsetSeconds,
                        i = (e.segment.endOffsetSeconds - n) / t * 100,
                        s = 0 === n ? 0 : n / t * 100,
                        o = T({
                            "mini-timeline": !0,
                            "mini-timeline__active": e.active,
                            "mini-timeline__inactive": !e.active
                        });
                    return r.createElement(P.Xa, {
                        fullWidth: !0,
                        className: o,
                        "data-test-selector": a.Container
                    }, r.createElement("div", {
                        className: "mini-timeline__fill",
                        "data-test-selector": a.Fill,
                        style: {
                            left: s + "%",
                            width: i + "%"
                        }
                    }))
                },
                F = (n("W0tn"), function(e) {
                    return r.createElement(P.Xa, {
                        className: "numbered-thumbnail"
                    }, r.createElement(P.o, {
                        ratio: P.p.Aspect16x9
                    }, r.createElement(P.Eb, {
                        background: P.r.AccentAlt2,
                        display: P.X.Flex,
                        alignItems: P.f.Center,
                        justifyContent: P.Wa.Center
                    }, r.createElement(P.W, {
                        color: P.O.OverlayAlt,
                        fontSize: P.Ca.Size4,
                        type: P.Vb.H4
                    }, e.displayNumber))))
                }),
                R = (n("HszP"), function(e) {
                    var t = null;
                    return e.error ? t = r.createElement(P.Eb, {
                        color: P.O.Error,
                        display: P.X.Flex,
                        alignItems: P.f.Center
                    }, r.createElement(P.sb, {
                        asset: P.tb.NotificationError
                    })) : e.finished && (t = r.createElement(P.Eb, {
                        className: "status-thumbnail__icon--success",
                        display: P.X.Flex,
                        alignItems: P.f.Center
                    }, r.createElement(P.sb, {
                        asset: P.tb.NotificationSuccess
                    }))), r.createElement(P.Xa, {
                        className: "status-thumbnail"
                    }, r.createElement(P.o, {
                        ratio: P.p.Aspect16x9
                    }, r.createElement(P.Eb, {
                        background: P.r.AccentAlt2,
                        display: P.X.Flex,
                        alignItems: P.f.Center,
                        justifyContent: P.Wa.Center
                    }, t)))
                });
            ! function(e) {
                e.Title = "queue-card-title", e.Thumbnail = "queue-card-thumbnail", e.Timeline = "queue-card-timeline", e.Timestamps = "queue-card-timestamps", e.Game = "queue-card-game", e.SourceTitle = "queue-card-source-title"
            }(V || (V = {}));
            var H, M = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.getDurationLength = function() {
                            return t.props.offsets.endOffsetSeconds - t.props.offsets.startOffsetSeconds
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e;
                        return e = this.props.finished ? r.createElement(R, {
                            finished: !0
                        }) : this.props.error ? r.createElement(R, {
                            error: !0
                        }) : r.createElement(F, {
                            displayNumber: this.props.listIndex + 1
                        }), r.createElement(P.Eb, {
                            padding: 1,
                            borderBottom: !0
                        }, r.createElement(P.Xa, {
                            "data-test-selector": V.Title,
                            flexGrow: 1,
                            flexShrink: 1,
                            overflow: P.cb.Hidden,
                            padding: {
                                top: .5,
                                bottom: 1
                            }
                        }, r.createElement(P.W, {
                            ellipsis: !0
                        }, this.props.title || "<" + Object(o.d)("Untitled", "HighlightQueueCard") + ">")), r.createElement(P.Eb, {
                            display: P.X.Flex
                        }, r.createElement(P.Xa, {
                            "data-test-selector": V.Thumbnail,
                            margin: {
                                right: 1
                            }
                        }, e), r.createElement(P.Xa, {
                            flexGrow: 1,
                            flexShrink: 1,
                            overflow: P.cb.Hidden,
                            flexWrap: P.Ba.Wrap,
                            margin: {
                                bottom: .5
                            }
                        }, r.createElement(P.Eb, {
                            "data-test-selector": V.Timeline,
                            margin: {
                                bottom: .5
                            }
                        }, !this.props.finished && r.createElement(_, {
                            active: !1,
                            segment: this.props.offsets,
                            sourceVideoDuration: this.props.sourceVideoDuration
                        })), r.createElement(P.Xa, {
                            display: P.X.Flex,
                            flexWrap: P.Ba.Wrap
                        }, r.createElement(P.Xa, {
                            "data-test-selector": V.Timestamps,
                            display: P.X.Flex,
                            margin: {
                                right: 1
                            },
                            overflow: P.cb.Hidden
                        }, r.createElement(P.Eb, {
                            padding: {
                                right: .5
                            },
                            color: P.O.Alt2,
                            display: P.X.Flex
                        }, r.createElement(P.sb, {
                            asset: P.tb.GlyphLength,
                            width: 16,
                            height: 16
                        })), r.createElement(P.W, {
                            ellipsis: !0,
                            color: P.O.Alt2
                        }, Object(N.b)(this.getDurationLength()) + " (" + Object(N.b)(this.props.offsets.startOffsetSeconds) + " - " + Object(N.b)(this.props.offsets.endOffsetSeconds) + ")")), this.props.game && r.createElement(P.Xa, {
                            "data-test-selector": V.Game,
                            display: P.X.Flex,
                            margin: {
                                right: 1
                            },
                            overflow: P.cb.Hidden
                        }, r.createElement(P.Eb, {
                            padding: {
                                right: .5
                            },
                            color: P.O.Alt2,
                            display: P.X.Flex
                        }, r.createElement(P.sb, {
                            asset: P.tb.NavGames,
                            width: 16,
                            height: 16
                        })), r.createElement(P.W, {
                            ellipsis: !0,
                            color: P.O.Alt2
                        }, this.props.game.name)), r.createElement(P.Xa, {
                            "data-test-selector": V.SourceTitle,
                            display: P.X.Flex,
                            margin: {
                                right: 1
                            },
                            overflow: P.cb.Hidden
                        }, r.createElement(P.Eb, {
                            padding: {
                                right: .5
                            },
                            color: P.O.Alt2,
                            display: P.X.Flex
                        }, r.createElement(P.sb, {
                            asset: P.tb.NavVideos,
                            width: 16,
                            height: 16
                        })), r.createElement(P.W, {
                            ellipsis: !0,
                            color: P.O.Alt2
                        }, this.props.sourceVideoTitle || "<" + Object(o.d)("Untitled Source", "HighlightQueueCard") + ">"))))))
                    }, t
                }(r.Component),
                j = n("Rw/r");
            n("lBPO");
            ! function(e) {
                e.TitleInput = "queue-card-title-input", e.Thumbnail = "queue-card-thumbnail", e.Timeline = "queue-card-timeline", e.GameSelector = "queue-card-game-selector", e.SourceTitle = "queue-card-source-title", e.DeleteButton = "queue-card-delete-button"
            }(H || (H = {}));
            var X, A = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.getDurationLength = function() {
                            return n.props.offsets.endOffsetSeconds - n.props.offsets.startOffsetSeconds
                        }, n.onTitleChange = function(e) {
                            var t = e.currentTarget.value;
                            n.setState({
                                validTitle: !0,
                                currentTitle: t
                            }, function() {
                                n.isTitleValid(t) ? n.setState({
                                    validTitle: !0
                                }, function() {
                                    n.props.onTitleChange(n.props.listIndex, t)
                                }) : n.setState({
                                    validTitle: !1
                                })
                            })
                        }, n.onGameChange = function(e) {
                            e.objectID && n.props.onGameChange(n.props.listIndex, {
                                name: e.name,
                                id: e.objectID
                            })
                        }, n.onDelete = function() {
                            n.props.onDelete(n.props.listIndex)
                        }, n.state = {
                            validTitle: !0,
                            currentTitle: t.title || "<" + Object(o.d)("Untitled", "HighlightQueueEditCard") + ">"
                        }, n
                    }
                    return i.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
                        e.title !== this.props.title && this.setState({
                            currentTitle: this.props.title
                        })
                    }, t.prototype.render = function() {
                        return r.createElement(P.Eb, {
                            className: "highlight-queue-edit-card highlight-queue-edit-card__card",
                            padding: 1,
                            background: P.r.Alt2,
                            borderBottom: !0
                        }, r.createElement(P.Xa, {
                            "data-test-selector": H.TitleInput,
                            margin: {
                                bottom: 1
                            }
                        }, r.createElement(P.Ra, {
                            autoFocus: !0,
                            value: this.state.currentTitle,
                            error: !this.state.validTitle,
                            type: P.Ta.Text,
                            placeholder: Object(o.d)("Highlight Video Title", "HighlightQueueEditCard"),
                            maxLength: 140,
                            onChange: this.onTitleChange
                        })), r.createElement(P.Xa, {
                            "data-test-selector": H.GameSelector,
                            margin: {
                                bottom: 1
                            }
                        }, r.createElement(j.a, {
                            currentGameTitle: this.props.game && this.props.game.name || "",
                            onChange: this.onGameChange,
                            compact: !0
                        })), r.createElement(P.Eb, {
                            display: P.X.Flex
                        }, r.createElement(P.Xa, {
                            "data-test-selector": H.Thumbnail,
                            margin: {
                                right: 1
                            }
                        }, this.props.error ? r.createElement(R, {
                            error: !0
                        }) : r.createElement(F, {
                            displayNumber: this.props.listIndex + 1
                        })), r.createElement(P.Xa, {
                            flexGrow: 1,
                            flexShrink: 1,
                            overflow: P.cb.Hidden,
                            margin: {
                                bottom: .5
                            }
                        }, r.createElement(P.Eb, {
                            "data-test-selector": H.Timeline,
                            margin: {
                                bottom: .5
                            }
                        }, r.createElement(_, {
                            active: !0,
                            sourceVideoDuration: this.props.sourceVideoDuration,
                            segment: this.props.offsets
                        })), r.createElement(P.Xa, {
                            display: P.X.Flex,
                            flexWrap: P.Ba.Wrap
                        }, r.createElement(P.Xa, {
                            display: P.X.Flex,
                            margin: {
                                right: 1
                            },
                            overflow: P.cb.Hidden
                        }, r.createElement(P.Eb, {
                            padding: {
                                right: .5
                            },
                            color: P.O.Alt2,
                            display: P.X.Flex
                        }, r.createElement(P.sb, {
                            asset: P.tb.GlyphLength,
                            width: 16,
                            height: 16
                        })), r.createElement(P.W, {
                            ellipsis: !0,
                            color: P.O.Alt2
                        }, Object(N.b)(this.getDurationLength()) + " (" + Object(N.b)(this.props.offsets.startOffsetSeconds) + " - " + Object(N.b)(this.props.offsets.endOffsetSeconds) + ")")), r.createElement(P.Xa, {
                            display: P.X.Flex,
                            margin: {
                                right: 1
                            },
                            overflow: P.cb.Hidden
                        }, r.createElement(P.Eb, {
                            "data-test-selector": H.SourceTitle,
                            padding: {
                                right: .5
                            },
                            color: P.O.Alt2,
                            display: P.X.Flex
                        }, r.createElement(P.sb, {
                            asset: P.tb.NavVideos,
                            width: 16,
                            height: 16
                        })), r.createElement(P.W, {
                            ellipsis: !0,
                            color: P.O.Alt2
                        }, this.props.sourceVideoTitle || "<" + Object(o.d)("Untitled Source", "HighlightQueueEditCard") + ">"))))), r.createElement(P.Eb, {
                            "data-test-selector": H.DeleteButton,
                            display: P.X.Flex,
                            justifyContent: P.Wa.End
                        }, r.createElement(P.A, {
                            ariaLabel: Object(o.d)("Remove highlight from queue", "HighlightQueueEditCard"),
                            icon: P.tb.Trash,
                            blurAfterClick: !0,
                            onClick: this.onDelete
                        })))
                    }, t.prototype.isTitleValid = function(e) {
                        var t = !(e && e.replace(/\s/g, "").length > 0),
                            n = Boolean(e && e.length > 140);
                        return !(t || n)
                    }, t
                }(r.Component),
                L = n("zAC8");
            n("x4lo");
            ! function(e) {
                e.AddButtonDropdown = "segmentqueue-addbuttondropdown", e.ErrorNotification = "segmentqueue-errornotification", e.ChangeVideoButton = "segmentqueue-changevideobutton", e.NoItems = "segmentqueue-noitems", e.SaveButton = "segmentqueue-savebutton", e.SegmentQueue = "segmentqueue-segmentqueue", e.SelectHighlightButton = "segmentqueue-selecthighlight", e.MaxQueueSizeTooltip = "segmentqueue-maxtooltip"
            }(X || (X = {}));
            var B, W, U, G, q = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            addDropdownOpen: !1
                        }, t.scrollableAreaRef = null, t.successfulHighlightIDs = [], t.scrollRefHandler = function(e) {
                            t.scrollableAreaRef = e
                        }, t.selectSegmentFromQueue = function(e) {
                            var n = e.currentTarget.getAttribute("data-id");
                            n && n !== t.props.activeID && t.props.onChangeActiveSegment(n)
                        }, t.closeAddDropdown = function() {
                            t.setState({
                                addDropdownOpen: !1
                            })
                        }, t.toggleAddDropdown = function() {
                            t.setState(function(e) {
                                return {
                                    addDropdownOpen: !e.addDropdownOpen
                                }
                            })
                        }, t.createHighlights = function() {
                            return i.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, a, r, s, l = this;
                                return i.__generator(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            e = this.props.queue, this.state.failedSegments && (e = e.filter(function(e) {
                                                return l.state.failedSegments && !!l.state.failedSegments[e.tempID]
                                            })), t = e.map(function(e, t) {
                                                return l.createHighlight(e, t)
                                            }), n = [], i.label = 1;
                                        case 1:
                                            return i.trys.push([1, 3, , 4]), [4, Promise.all(t)];
                                        case 2:
                                            return n = i.sent(), [3, 4];
                                        case 3:
                                            return a = i.sent(), o.k.error(a, "Unexpected error creating highlights"), [3, 4];
                                        case 4:
                                            return this.successfulHighlightIDs = this.successfulHighlightIDs.concat(n.map(function(e) {
                                                return e.success && e.success.id || ""
                                            }).filter(function(e) {
                                                return "" !== e
                                            })), 0 === (r = n.filter(function(e) {
                                                return !e.success
                                            })).length ? (this.props.onSaveSuccess(this.successfulHighlightIDs), this.props.onPostSaveFinishAndNavigate(this.successfulHighlightIDs)) : (s = r.reduce(function(e, t) {
                                                return e[t.segment.tempID] = t.segment, e
                                            }, {}), this.setState({
                                                failedSegments: s
                                            }), this.props.onChangeActiveSegment(r[0].segment.tempID)), [2]
                                    }
                                })
                            })
                        }, t.createHighlight = function(e, n) {
                            return i.__awaiter(t, void 0, Promise, function() {
                                var t, a, r, s;
                                return i.__generator(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            t = {
                                                segmentsIndex: n,
                                                segment: e
                                            }, a = {
                                                sourceVideoID: e.sourceVideoDetails.id,
                                                startOffsetSeconds: e.startOffsetSeconds,
                                                endOffsetSeconds: e.endOffsetSeconds,
                                                metadata: {
                                                    description: e.metadata.description,
                                                    language: e.metadata.language,
                                                    tags: e.metadata.tags,
                                                    title: e.metadata.title,
                                                    game: e.metadata.game ? e.metadata.game.id : null
                                                }
                                            }, i.label = 1;
                                        case 1:
                                            return i.trys.push([1, 3, , 4]), [4, this.props.createHighlight(Object(x.a)(a))];
                                        case 2:
                                            return (r = i.sent().data) && r.createVideoHighlight && r.createVideoHighlight.highlight && (t.success = r.createVideoHighlight.highlight), [3, 4];
                                        case 3:
                                            return s = i.sent(), o.k.error(s, "HighlighterHighlightCreatorModalContainer"), [3, 4];
                                        case 4:
                                            return [2, t]
                                    }
                                })
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return r.createElement(P.Eb, {
                            background: P.r.Base,
                            display: P.X.Flex,
                            flexDirection: P.Aa.Column,
                            fullHeight: !0
                        }, r.createElement(P.Eb, {
                            background: P.r.Base,
                            borderBottom: !0,
                            padding: 1,
                            display: P.X.Flex,
                            justifyContent: P.Wa.Between,
                            alignItems: P.f.Center,
                            className: "highlighter__card-header"
                        }, r.createElement(P.W, {
                            fontSize: P.Ca.Size5,
                            lines: 1
                        }, Object(o.d)("Highlight Queue", "HighlighterVideoSegmentQueue")), this.renderAddMore()), this.renderErrorMessage(), r.createElement(P.Pa, {
                            flexGrow: 1,
                            flexShrink: 1,
                            className: "highlight__segment-queue"
                        }, this.props.queue.length > 0 ? this.renderSegments() : this.renderEmptyQueue()), r.createElement(P.Xa, {
                            padding: 1
                        }, r.createElement(P.z, {
                            blurAfterClick: !0,
                            disabled: 0 === this.props.queue.length,
                            fullWidth: !0,
                            onClick: this.createHighlights,
                            "data-test-selectors": X.SaveButton
                        }, this.state.failedSegments ? Object(o.d)("Retry Creating Highlights", "HighlighterVideoSegmentQueue") : Object(o.d)("Create Highlights", "HighlighterVideoSegmentQueue"))))
                    }, t.prototype.componentDidUpdate = function(e) {
                        this.props.queue.length > e.queue.length && this.scrollableAreaRef ? this.scrollableAreaRef.scrollToBottom() : this.state.failedSegments && this.successfulHighlightIDs.length > 0 && this.successfulHighlightIDs.length === this.props.queue.length ? this.props.onPostSaveFinishAndNavigate(this.successfulHighlightIDs) : this.state.failedSegments && 0 === this.successfulHighlightIDs.length && 0 === this.props.queue.length && this.setState({
                            failedSegments: void 0
                        })
                    }, t.prototype.renderEmptyQueue = function() {
                        return r.createElement(P.Xa, {
                            "data-test-selector": X.NoItems,
                            display: P.X.Flex,
                            flexDirection: P.Aa.Column,
                            alignItems: P.f.Center,
                            justifyContent: P.Wa.Center,
                            padding: 3,
                            fullWidth: !0,
                            fullHeight: !0
                        }, r.createElement(P.Xa, {
                            padding: 1
                        }, r.createElement(P.sb, {
                            asset: P.tb.Scissors,
                            type: P.ub.Alt2,
                            height: 25,
                            width: 25
                        })), r.createElement(P.Xa, {
                            textAlign: P.Rb.Center
                        }, r.createElement(P.W, null, Object(o.d)("No highlights are queued. Click the New Highlight button above to start highlighting.", "HighlighterVideoSegmentQueue"))))
                    }, t.prototype.renderSegments = function() {
                        var e = this,
                            t = this.props.queue.map(function(t, n) {
                                return t.tempID === e.props.activeID ? r.createElement(A, {
                                    game: t.metadata.game,
                                    key: t.tempID,
                                    listIndex: n,
                                    offsets: {
                                        startOffsetSeconds: t.startOffsetSeconds,
                                        endOffsetSeconds: t.endOffsetSeconds
                                    },
                                    sourceVideoDuration: t.sourceVideoDetails.lengthSeconds,
                                    sourceVideoTitle: t.sourceVideoDetails.title,
                                    title: t.metadata.title,
                                    onDelete: e.props.onSegmentDelete,
                                    onGameChange: e.props.onGameChange,
                                    onTitleChange: e.props.onTitleChange,
                                    error: e.state.failedSegments && !!e.state.failedSegments[t.tempID]
                                }) : r.createElement(P.Ua, {
                                    type: P.Va.Alpha,
                                    blurAfterClick: !0,
                                    key: t.tempID,
                                    onClick: e.selectSegmentFromQueue,
                                    "data-id": t.tempID,
                                    disabled: e.state.failedSegments && !e.state.failedSegments[t.tempID]
                                }, r.createElement(M, {
                                    game: t.metadata.game,
                                    listIndex: n,
                                    offsets: {
                                        startOffsetSeconds: t.startOffsetSeconds,
                                        endOffsetSeconds: t.endOffsetSeconds
                                    },
                                    sourceVideoDuration: t.sourceVideoDetails.lengthSeconds,
                                    sourceVideoTitle: t.sourceVideoDetails.title,
                                    title: t.metadata.title,
                                    finished: e.state.failedSegments && !e.state.failedSegments[t.tempID],
                                    error: e.state.failedSegments && !!e.state.failedSegments[t.tempID]
                                }))
                            });
                        return r.createElement(h.b, {
                            autoHide: !1,
                            suppressScrollX: !0,
                            scrollRef: this.scrollRefHandler,
                            "data-test-selector": X.SegmentQueue
                        }, r.createElement(P.Xa, {
                            margin: {
                                bottom: 5
                            }
                        }, t))
                    }, t.prototype.renderAddMore = function() {
                        var e = r.createElement(P.Xa, {
                            className: "highlight-vod-select",
                            position: P.jb.Relative,
                            display: P.X.Flex,
                            flexWrap: P.Ba.NoWrap
                        }, r.createElement(P.z, {
                            blurAfterClick: !0,
                            "data-test-selector": X.SelectHighlightButton,
                            type: P.F.Hollow,
                            icon: P.tb.Plus,
                            onClick: this.props.onAddNewHighlight,
                            disabled: this.props.queue.length >= 25 || !!this.state.failedSegments
                        }, Object(o.d)("New Highlight", "HighlighterVideoSegmentQueue")), r.createElement(w.a, {
                            onClickOut: this.closeAddDropdown,
                            className: "highlight-select-dropdown__clickout"
                        }, r.createElement(P.z, {
                            icon: P.tb.GlyphArrDown,
                            type: P.F.Hollow,
                            onClick: this.toggleAddDropdown,
                            "data-test-selector": X.AddButtonDropdown,
                            disabled: this.props.queue.length >= 25 || !!this.state.failedSegments
                        }), r.createElement(P.u, {
                            direction: P.v.BottomRight,
                            noTail: !0,
                            show: this.state.addDropdownOpen,
                            offsetY: "0"
                        }, r.createElement(P.Ua, {
                            disabled: this.props.queue.length >= 25,
                            onClick: this.props.onChangeVideo,
                            "data-test-selector": X.ChangeVideoButton
                        }, r.createElement(P.Xa, {
                            padding: {
                                x: 1,
                                y: .5
                            }
                        }, r.createElement(P.W, {
                            noWrap: !0
                        }, Object(o.d)("New Highlight from Another Broadcast", "HighlighterVideoSegmentQueue")))))));
                        return this.props.queue.length >= 25 ? r.createElement(P.Yb, {
                            "data-test-selector": X.MaxQueueSizeTooltip,
                            label: Object(o.d)("You can only create at most {max} highlights at once.", {
                                max: 25
                            }, "VideoSegmentQueue")
                        }, e) : e
                    }, t.prototype.renderErrorMessage = function() {
                        if (this.state.failedSegments) return r.createElement(P.Eb, {
                            "data-test-selector": X.ErrorNotification,
                            borderBottom: !0
                        }, r.createElement(P.Eb, {
                            className: "highlight__segment-queue-error",
                            background: P.r.Alt2,
                            color: P.O.Error,
                            padding: 1,
                            margin: 1,
                            display: P.X.Flex,
                            justifyContent: P.Wa.Start,
                            alignItems: P.f.Center
                        }, r.createElement(P.sb, {
                            asset: P.tb.NotificationWarning
                        }), r.createElement(P.Pa, {
                            margin: {
                                left: 1,
                                right: .5
                            }
                        }, r.createElement(P.W, {
                            color: P.O.Base,
                            type: P.Vb.Span,
                            bold: !0
                        }, Object(o.d)("Error Processing", "VideoSegmentQueue"))), r.createElement(P.W, {
                            color: P.O.Base,
                            type: P.Vb.Span
                        }, Object(o.d)("Retry again below.", "VideoSegmentQueue"))))
                    }, t
                }(r.Component),
                z = Object(g.a)(L, {
                    name: "createHighlight"
                })(q),
                Q = n("oJmH"),
                $ = n("8Ad5"),
                K = n("eJ65"),
                Y = n("5zf8"),
                Z = n("17YR");

            function J(e) {
                o.o.track(y.SpadeEventType.StreamBookmarkClick, e)
            }

            function ee(e) {
                o.o.track(y.SpadeEventType.StreamBookmarkListDownload, e)
            }! function(e) {
                e.Creator = "creator", e.Editor = "editor"
            }(B || (B = {})),
            function(e) {
                e.Marker = "marker", e.Clip = "clip_marker"
            }(W || (W = {})),
            function(e) {
                e.Clips = "clips", e.Markers = "stream_markers"
            }(U || (U = {})),
            function(e) {
                e.Broadcaster = "Broadcaster", e.Editor = "Editor"
            }(G || (G = {}));
            var te, ne = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.downloadClipsData = function() {
                        t.downloadDataHelper(t.props.clipsData), ee(t.getTrackingData(U.Clips))
                    }, t.downloadMarkersData = function() {
                        t.downloadDataHelper(t.props.markersData), ee(t.getTrackingData(U.Markers))
                    }, t.getTrackingData = function(e) {
                        return {
                            channel_id: t.props.channelID,
                            vod_id: t.props.videoID,
                            user_type: t.props.userID === t.props.channelID ? B.Creator : B.Editor,
                            list_type: e
                        }
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(K.a, null, r.createElement(P.A, {
                        icon: P.tb.More,
                        ariaLabel: Object(o.d)("Marker Settings", "HighlighterPinsDownload")
                    }), r.createElement(P.u, {
                        size: P.w.Small,
                        direction: P.v.TopRight
                    }, r.createElement(P.Ua, {
                        onClick: this.downloadMarkersData
                    }, r.createElement(P.Xa, {
                        padding: 1
                    }, Object(o.d)("Download Stream Markers (.csv)", "HighlighterPinsDownload"))), r.createElement(P.Ua, {
                        onClick: this.downloadClipsData
                    }, r.createElement(P.Xa, {
                        padding: 1
                    }, Object(o.d)("Download Clips data (.csv)", "HighlighterPinsDownload")))))
                }, t.prototype.downloadDataHelper = function(e) {
                    Object(Z.a)("download.csv", function(e, t) {
                        return e.reduce(function(e, n) {
                            return "" + e + [Object(Y.b)(n.videoOffset, Y.a.ClockHMS), n.creatorId === t ? G.Broadcaster : G.Editor, n.creatorDisplayName, n.title].join(",") + "\n"
                        }, "")
                    }(e, this.props.channelID))
                }, t
            }(r.Component);

            function ae(e, t, n) {
                return e * n / t
            }! function(e) {
                e.Clip = "Clip", e.Mark = "Mark"
            }(te || (te = {}));
            n("lMdv");
            var ie = 18,
                re = 25,
                se = -23,
                oe = 18,
                le = -25,
                de = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            clusterData: [],
                            hoveredClusterIndex: -1
                        }, t.renderCluster = function(e, n, a) {
                            return r.createElement("div", {
                                key: "cluster-" + n
                            }, r.createElement("div", {
                                onMouseEnter: function() {
                                    t.setState({
                                        hoveredClusterIndex: n
                                    })
                                },
                                onMouseLeave: t.mouseLeaveListener
                            }, t.renderIcon(e, n, a)), e.pins.map(function(e, n) {
                                return t.renderPin(e, n)
                            }))
                        }, t.renderIcon = function(e, n, a) {
                            var i, s = (e.pins[0].pixelX + e.pins[e.pins.length - 1].pixelX) / 2,
                                o = s - ie / 2,
                                l = e.pins.length > 1,
                                d = ae(t.props.activeSegment.startOffset, t.props.pinOffsetMax, a),
                                c = ae(t.props.activeSegment.endOffset, t.props.pinOffsetMax, a),
                                u = s >= d && s < c,
                                p = se + "px";
                            if (l) {
                                p = le + "px";
                                var f = {
                                    width: ie + "px",
                                    height: ie + "px"
                                };
                                i = r.createElement(P.Pa, {
                                    textAlign: P.Rb.Center
                                }, r.createElement("div", {
                                    className: "dynamic-pins__cluster",
                                    style: f
                                }, e.pins.length > 9 ? "9+" : e.pins.length))
                            } else i = e.pins[0].type === te.Clip ? r.createElement(P.sb, {
                                width: ie,
                                height: ie,
                                asset: P.tb.Clip
                            }) : r.createElement(P.sb, {
                                width: re,
                                height: re,
                                asset: P.tb.GlyphArrDown
                            });
                            var m = {
                                    width: ie + "px",
                                    height: ie + "px",
                                    left: o + "px",
                                    top: p
                                },
                                h = {
                                    color: u ? "#FFB300" : "#a49fad"
                                };
                            return r.createElement(P.Pa, {
                                position: P.jb.Absolute,
                                display: P.X.Flex,
                                justifyContent: P.Wa.Center
                            }, r.createElement("div", {
                                style: m
                            }, t.state.hoveredClusterIndex === n && t.renderClusterData(e), r.createElement("div", {
                                className: "dynamic-pins__cluster-icon",
                                style: h,
                                onClick: function() {
                                    var n = e.pins[0];
                                    t.props.requestPlayerTimeChange(n.videoOffset), J(t.trackingFieldsForPin(n, e.pins.length))
                                }
                            }, i)))
                        }, t.renderPin = function(e, n) {
                            var a = e.videoOffset >= t.props.activeSegment.startOffset && e.videoOffset < t.props.activeSegment.endOffset,
                                i = {
                                    left: e.pixelX + "px",
                                    backgroundColor: a ? "#FFB300" : "#a49fad"
                                };
                            return r.createElement(P.Pa, {
                                className: "dynamic-pins__pin",
                                key: "pin-" + n,
                                position: P.jb.Absolute
                            }, r.createElement("div", {
                                style: i
                            }))
                        }, t.renderClusterData = function(e) {
                            return r.createElement(P.Xa, {
                                position: P.jb.Relative
                            }, r.createElement(P.u, {
                                show: !0,
                                direction: P.v.TopCenter,
                                size: P.w.Small,
                                offsetX: "8px"
                            }, r.createElement(h.b, {
                                className: "dynamic-pins__popup"
                            }, r.createElement(P.Xa, {
                                padding: 1
                            }, e.pins.map(function(e, n) {
                                return r.createElement(P.Xa, {
                                    display: P.X.Flex,
                                    key: "cluster-pin-" + n
                                }, r.createElement(P.Xa, {
                                    className: "dynamic-pins__inner-icon",
                                    flexGrow: 0,
                                    margin: {
                                        right: 1
                                    }
                                }, r.createElement(P.sb, {
                                    width: oe,
                                    height: oe,
                                    asset: e.type === te.Clip ? P.tb.Clip : P.tb.GlyphArrDown
                                })), r.createElement(P.Xa, {
                                    flexGrow: 0,
                                    margin: {
                                        right: 1
                                    }
                                }, r.createElement(P.U, {
                                    onClick: function() {
                                        t.props.requestPlayerTimeChange(e.videoOffset), J(t.trackingFieldsForPin(e, 1))
                                    }
                                }, Object(N.b)(e.videoOffset))), r.createElement(P.Xa, {
                                    display: P.X.Flex,
                                    flexDirection: P.Aa.Column,
                                    flexGrow: 1
                                }, r.createElement(P.Xa, null, e.title), r.createElement(P.W, {
                                    color: P.O.Alt2
                                }, e.creatorDisplayName)))
                            })))))
                        }, t.recalculateClusters = function(e) {
                            if (void 0 === e && (e = t.props), t.parentRef) {
                                var n = t.parentRef.clientWidth,
                                    a = function(e, t) {
                                        var n = -1 / 0,
                                            a = [];
                                        if (!e || 0 === e.length) return [];
                                        var i = {
                                            pins: [e[0]]
                                        };
                                        return e.slice(1).forEach(function(e) {
                                            n = i.pins.reduce(function(e, t) {
                                                return e + t.pixelX
                                            }, 0) / i.pins.length + t, e.pixelX - t <= n ? i.pins.push(e) : (a.push(i), i = {
                                                pins: [e]
                                            })
                                        }), a.push(i), a
                                    }(function(e, t, n) {
                                        return e.map(function(e) {
                                            return i.__assign({}, e, {
                                                pixelX: ae(e.videoOffset, t, n)
                                            })
                                        })
                                    }(e.pins, e.pinOffsetMax, t.parentRef.clientWidth).filter(function(e) {
                                        return !(e.pixelX < 0 || e.pixelX > n)
                                    }), ie / 2);
                                t.setState({
                                    clusterData: a
                                })
                            }
                        }, t.assignParentRef = function(e) {
                            t.parentRef = e
                        }, t.mouseLeaveListener = function() {
                            t.setState({
                                hoveredClusterIndex: -1
                            })
                        }, t.trackingFieldsForPin = function(e, n) {
                            return {
                                channel_id: t.props.channelID,
                                vod_id: t.props.videoID,
                                user_type: t.props.channelID === t.props.userID ? B.Creator : B.Editor,
                                seconds_since_stream_start: e.videoOffset,
                                first_marker_id: e.id,
                                first_marker_type: e.type === te.Clip ? W.Clip : W.Marker,
                                cluster_count: n
                            }
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        var e = this;
                        this.recalculateClusters(), window.addEventListener("resize", function() {
                            return e.recalculateClusters()
                        })
                    }, t.prototype.componentWillUnmount = function() {
                        var e = this;
                        window.removeEventListener("resize", function() {
                            return e.recalculateClusters()
                        })
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        e.pins !== this.props.pins && this.recalculateClusters(e)
                    }, t.prototype.render = function() {
                        var e = this,
                            t = this.parentRef && this.parentRef.clientWidth;
                        return r.createElement(P.Xa, {
                            position: P.jb.Relative
                        }, r.createElement("div", {
                            ref: this.assignParentRef
                        }, null !== t && r.createElement("div", null, this.state.clusterData.map(function(n, a) {
                            return e.renderCluster(n, a, t)
                        })), this.props.children))
                    }, t
                }(r.Component),
                ce = n("0vlg"),
                ue = n("QClN");

            function pe(e) {
                var t = null;
                if (e && e.length) {
                    var n = e[e.length - 1];
                    t = n ? n.cursor : null
                }
                return t
            }
            var fe, me = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            sortedFilteredPins: []
                        }, t.convertClipToPin = function(e) {
                            return e && e.node ? {
                                id: e.node.id,
                                title: e.node.title,
                                videoOffset: e.node.videoOffsetSeconds || 0,
                                type: te.Clip,
                                creatorDisplayName: e.node.curator && e.node.curator.displayName || "",
                                creatorId: e.node.curator && e.node.curator.id || ""
                            } : null
                        }, t.convertMarkerToPin = function(e) {
                            return e && e.node ? {
                                id: e.node.id,
                                title: e.node.description,
                                videoOffset: e.node.positionSeconds,
                                type: te.Mark,
                                creatorId: e.node.user ? e.node.user.id : "",
                                creatorDisplayName: e.node.user ? e.node.user.displayName : ""
                            } : null
                        }, t.setSortedFilteredPins = function(e) {
                            var n = e.dataClips && e.dataClips.video,
                                a = e.dataMarkers.video,
                                i = n && n.clips && n.clips.edges ? n.clips.edges.map(t.convertClipToPin) : [],
                                r = a && a.bookmarks && a.bookmarks.edges ? a.bookmarks.edges.map(t.convertMarkerToPin) : [],
                                s = i.filter(function(t) {
                                    return e.clipUserIDs.includes(t.creatorId)
                                }),
                                o = r.filter(function(t) {
                                    return e.markUserIDs.includes(t.creatorId)
                                }),
                                l = s.concat(o).sort(function(e, t) {
                                    return e.videoOffset - t.videoOffset
                                });
                            (function(e, t) {
                                if (e.length !== t.length) return !1;
                                for (var n = e.length - 1; n >= 0; n--)
                                    if (e[n] !== t[n]) return !1;
                                return !0
                            })(t.state.sortedFilteredPins.map(function(e) {
                                return e.id
                            }), l.map(function(e) {
                                return e.id
                            })) || t.props.updateDownloadData(s, o), t.setState({
                                sortedFilteredPins: l
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.reportInteractive(this.props), this.setSortedFilteredPins(this.props)
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        var t = this.props.dataClips && this.props.dataClips.video,
                            n = e.dataClips && e.dataClips.video,
                            a = pe(t && t.clips && t.clips.edges),
                            i = n && n.clips && n.clips.edges,
                            r = pe(i),
                            s = n && n.clips && n.clips.pageInfo && n.clips.pageInfo.hasNextPage;
                        !((i ? i.length : 0) >= 500) && s && a !== r && this.props.clipsLoadMore && this.props.clipsLoadMore(r);
                        var o = this.props.dataMarkers.video,
                            l = e.dataMarkers.video,
                            d = pe(o && o.bookmarks && o.bookmarks.edges),
                            c = l && l.bookmarks && l.bookmarks.edges,
                            u = pe(c),
                            p = l && l.bookmarks && l.bookmarks.pageInfo && l.bookmarks.pageInfo.hasNextPage;
                        !((c ? c.length : 0) >= 500) && p && d !== u && this.props.markersLoadMore(u), this.reportInteractive(e), this.setSortedFilteredPins(e)
                    }, t.prototype.render = function() {
                        return 0 === this.state.sortedFilteredPins.length ? this.renderChildrenWithoutPins() : r.createElement(P.Xa, {
                            className: "highlighter-pins"
                        }, r.createElement(de, {
                            pins: this.state.sortedFilteredPins,
                            pinOffsetMax: this.props.videoDuration,
                            requestPlayerTimeChange: this.props.requestPlayerTimeChange,
                            videoID: this.props.videoID,
                            channelID: this.props.channelID,
                            userID: this.props.userID,
                            activeSegment: this.props.activeSegment
                        }, this.props.children))
                    }, t.prototype.renderChildrenWithoutPins = function() {
                        return r.createElement(P.Xa, {
                            className: "highlighter-pins"
                        }, this.props.children)
                    }, t.prototype.reportInteractive = function(e) {
                        var t = e.dataClips && e.dataClips.video,
                            n = e.dataMarkers.video;
                        t && t.clips && t.clips.edges && n && e.latencyTracking.reportInteractive()
                    }, t
                }(r.Component),
                he = Object(f.compose)(Object(D.b)("HighlighterPins"), Object(g.a)(ce, {
                    name: "dataClips",
                    skip: function(e) {
                        return e.clipUserIDs.length < 1
                    },
                    props: function(e) {
                        return i.__assign({}, e, {
                            clipsLoadMore: function(t) {
                                return e.dataClips.fetchMore({
                                    query: ce,
                                    variables: i.__assign({}, e.dataClips.variables, {
                                        cursor: t
                                    }),
                                    updateQuery: function(e, t) {
                                        var n = t.fetchMoreResult,
                                            a = [],
                                            r = [];
                                        return e.video && e.video.clips && e.video.clips.edges && (a = e.video.clips.edges), n.video && n.video.clips && n.video.clips.edges && (r = n.video.clips.edges), {
                                            video: i.__assign({}, n.video, {
                                                clips: i.__assign({}, n.video && n.video.clips ? n.video.clips : {}, {
                                                    edges: Object(x.c)(a, r)
                                                })
                                            })
                                        }
                                    }
                                })
                            }
                        })
                    }
                }), Object(g.a)(ue, {
                    name: "dataMarkers",
                    props: function(e) {
                        return i.__assign({}, e, {
                            markersLoadMore: function(t) {
                                return e.dataMarkers.fetchMore({
                                    query: ue,
                                    variables: i.__assign({}, e.dataMarkers.variables, {
                                        cursor: t
                                    }),
                                    updateQuery: function(e, t) {
                                        var n = t.fetchMoreResult,
                                            a = [],
                                            r = [];
                                        return e.video && e.video.bookmarks && e.video.bookmarks.edges && (a = e.video.bookmarks.edges), n.video && n.video.bookmarks && n.video.bookmarks.edges && (r = n.video.bookmarks.edges), {
                                            video: i.__assign({}, n.video, {
                                                bookmarks: i.__assign({}, n.video && n.video.bookmarks ? n.video.bookmarks : {}, {
                                                    edges: Object(x.c)(a, r)
                                                })
                                            })
                                        }
                                    }
                                })
                            }
                        })
                    }
                }))(me);
            ! function(e) {
                e.Self = "Self", e.Owner = "Owner", e.Editor = "Editor"
            }(fe || (fe = {}));
            var ge, ve = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderOption = function(e) {
                            var n = !0 === t.props.selectedCreators[e];
                            return r.createElement(P.Xa, {
                                key: e,
                                padding: {
                                    x: 1
                                },
                                margin: {
                                    bottom: 1
                                }
                            }, r.createElement(P.N, {
                                onChange: function() {
                                    t.props.updateSelectedOption(e, !n)
                                },
                                checked: n,
                                label: t.getSelectableName(e)
                            }))
                        }, t.getSelectableName = function(e) {
                            switch (e) {
                                case fe.Self:
                                    return Object(o.d)("Me", "PinFilters");
                                case fe.Owner:
                                    return t.props.broadcasterDisplayName;
                                case fe.Editor:
                                    return Object(o.d)("All Editors", "PinFilters");
                                default:
                                    return e
                            }
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.selectedCreators,
                            t = Object.keys(e).filter(function(t) {
                                return e[t]
                            }),
                            n = 0 === this.props.dataCount && t.length === Object.keys(e).length,
                            a = r.createElement(r.Fragment, null, r.createElement(K.a, {
                                display: P.X.InlineFlex
                            }, r.createElement(P.z, {
                                type: P.F.Hollow,
                                "data-test-selector": "pin-filters-button",
                                disabled: n
                            }, r.createElement(P.Xa, {
                                display: P.X.Flex,
                                alignItems: P.f.Center
                            }, r.createElement(P.W, {
                                color: P.O.Alt2
                            }, this.props.name), r.createElement(P.sb, {
                                asset: P.tb.GlyphArrDown
                            }))), r.createElement(P.u, {
                                show: !0,
                                direction: P.v.TopRight,
                                tailOffset: 10,
                                size: P.w.Small
                            }, r.createElement(P.Xa, null, r.createElement(P.Eb, {
                                margin: 1
                            }, r.createElement(P.W, {
                                color: P.O.Alt
                            }, this.props.description)), r.createElement(P.Eb, null, Object.keys(e).map(this.renderOption))))));
                        return n && (a = r.createElement(P.Yb, {
                            direction: P.ac.Top,
                            label: this.props.disabledMessage
                        }, a)), r.createElement(P.Xa, {
                            position: P.jb.Relative,
                            display: P.X.InlineFlex,
                            margin: {
                                left: 1
                            }
                        }, a)
                    }, t
                }(r.Component),
                Se = n("pZqW"),
                Oe = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            markUserIDs: [],
                            clipUserIDs: []
                        }, t.getUpdatedUserIDs = function(e, t) {
                            var n = t.channelID,
                                a = t.data.user,
                                i = t.userID,
                                r = a && a.editors && a.editors.edges,
                                s = [];
                            return e[fe.Self] && i && s.push(i), e[fe.Owner] && s.push(n), e[fe.Editor] && r && r.forEach(function(e) {
                                e.node && e.node.id && s.push(e.node.id)
                            }), s
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.setUserIDs()
                    }, t.prototype.componentDidUpdate = function(e) {
                        this.props.channelID !== e.channelID && this.setUserIDs()
                    }, t.prototype.render = function() {
                        return r.createElement(P.Xa, {
                            className: "highlighter-pins"
                        }, r.createElement(he, {
                            channelID: this.props.channelID,
                            markUserIDs: this.state.markUserIDs,
                            clipUserIDs: this.state.clipUserIDs,
                            userID: this.props.userID,
                            videoID: this.props.videoID,
                            videoDuration: this.props.videoDuration,
                            requestPlayerTimeChange: this.props.requestPlayerTimeChange,
                            updateDownloadData: this.props.updateDownloadData,
                            activeSegment: this.props.activeSegment
                        }, this.props.children))
                    }, t.prototype.setUserIDs = function() {
                        var e = this;
                        this.setState(function(t, n) {
                            return {
                                clipUserIDs: e.getUpdatedUserIDs(n.selectedClipCreators, n),
                                markUserIDs: e.getUpdatedUserIDs(n.selectedMarkerCreators, n)
                            }
                        })
                    }, t
                }(r.Component),
                be = Object(g.a)(Se, {
                    options: function(e) {
                        return {
                            variables: {
                                channelID: e.channelID,
                                includeEditors: e.channelID === e.userID
                            }
                        }
                    }
                })(Oe);
            n("meiF");
            ! function(e) {
                e.PlayheadPin = "playhead-pin", e.PlayheadDraggable = "playhead-draggable", e.PlayheadIcon = "playhead-icon"
            }(ge || (ge = {}));
            var ke, ye = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(r.Fragment, null, this.renderPin(), this.renderIcon())
                }, t.prototype.renderPin = function() {
                    var e = {
                        left: this.props.pixelX + "px"
                    };
                    return r.createElement(P.Qa, {
                        zIndex: P.ic.Above,
                        color: P.O.Link,
                        className: "playhead-pin__pin",
                        position: P.jb.Absolute
                    }, r.createElement("div", {
                        style: e,
                        "data-test-selector": ge.PlayheadPin
                    }))
                }, t.prototype.renderIcon = function() {
                    var e = r.createElement(P.sb, {
                            width: 14,
                            height: 14,
                            asset: P.tb.DragHandle,
                            "data-test-selector": ge.PlayheadIcon
                        }),
                        t = {
                            left: this.props.pixelX - 36 + "px",
                            top: "92px",
                            display: "inline-flex"
                        };
                    return r.createElement(P.Qa, {
                        color: P.O.Link,
                        display: P.X.Flex,
                        padding: {
                            right: .5
                        },
                        className: "playhead-pin__draggable",
                        borderRadius: P.x.Medium,
                        position: P.jb.Absolute,
                        zIndex: P.ic.Above
                    }, r.createElement("div", {
                        style: t,
                        ref: this.props.iconRef,
                        onMouseDown: this.props.onMouseDownHandler,
                        "data-test-selector": ge.PlayheadDraggable
                    }, r.createElement(P.Eb, {
                        display: P.X.Flex,
                        justifyContent: P.Wa.Between,
                        alignItems: P.f.Stretch,
                        className: "playhead-pin__icon",
                        borderRadius: P.x.Medium
                    }, e, r.createElement(P.W, {
                        className: "playhead-pin__text"
                    }, Object(N.b)(this.props.currentPlayheadTime, {
                        zeroPadAll: !0
                    })))))
                }, t
            }(r.Component);
            n("jO72");
            ! function(e) {
                e.PlayheadDropdownIcon = "playhead-dropdown-icon", e.PlayheadDropdownBalloon = "playhead-dropdown-balloon", e.PlayheadDropdownStart = "playhead-dropdown-start", e.PlayheadDropdownEnd = "playhead-dropdown-end", e.PlayheadDropdownStyle = "playhead-dropdown-style"
            }(ke || (ke = {}));
            var De, Ee, Ce, Ie, we = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        showBalloon: !1
                    }, t.renderBalloon = function() {
                        return r.createElement(w.a, {
                            onClickOut: t.closeBalloon
                        }, r.createElement(P.u, {
                            show: t.state.showBalloon,
                            size: P.w.Small,
                            "data-test-selector": ke.PlayheadDropdownBalloon
                        }, r.createElement(P.Xa, {
                            display: P.X.Flex,
                            flexDirection: P.Aa.Column,
                            alignItems: P.f.Center,
                            justifyContent: P.Wa.Between
                        }, r.createElement(P.Ua, {
                            type: P.Va.Alpha,
                            borderRadius: P.x.Medium,
                            onClick: t.startSegmentUpdate,
                            "data-test-selector": ke.PlayheadDropdownStart
                        }, r.createElement(P.Xa, {
                            fullWidth: !0,
                            padding: {
                                x: 1,
                                y: .5
                            },
                            display: P.X.InlineFlex,
                            justifyContent: P.Wa.Between
                        }, r.createElement(P.W, {
                            color: P.O.Base
                        }, Object(o.d)("Start segment here", "HighlightPlayheadDropdown")), r.createElement(P.Eb, {
                            padding: {
                                x: .5
                            },
                            display: P.X.InlineFlex,
                            borderRadius: P.x.Small
                        }, r.createElement(P.gb, {
                            label: Object(o.d)("ALT + <", "HighlightPlayheadDropdown")
                        })))), r.createElement(P.Ua, {
                            type: P.Va.Alpha,
                            borderRadius: P.x.Medium,
                            onClick: t.endSegmentUpdate,
                            "data-test-selector": ke.PlayheadDropdownEnd
                        }, r.createElement(P.Xa, {
                            fullWidth: !0,
                            padding: {
                                x: 1,
                                y: .5
                            },
                            display: P.X.InlineFlex,
                            justifyContent: P.Wa.Between
                        }, r.createElement(P.W, {
                            color: P.O.Base
                        }, Object(o.d)("End segment here", "HighlightPlayheadDropdown")), r.createElement(P.Eb, {
                            padding: {
                                x: .5
                            },
                            display: P.X.InlineFlex,
                            borderRadius: P.x.Small
                        }, r.createElement(P.gb, {
                            label: Object(o.d)("ALT + >", "HighlightPlayheadDropdown")
                        })))))))
                    }, t.updateShowBalloon = function() {
                        t.setState(function(e) {
                            return {
                                showBalloon: !e.showBalloon
                            }
                        })
                    }, t.startSegmentUpdate = function() {
                        t.setState(function(e) {
                            return {
                                showBalloon: !e.showBalloon
                            }
                        }, function() {
                            return t.props.onUpdate({
                                startOffset: t.props.currentPlayheadTime,
                                endOffset: t.props.activeSegment.endOffset
                            })
                        })
                    }, t.endSegmentUpdate = function() {
                        t.setState(function(e) {
                            return {
                                showBalloon: !e.showBalloon
                            }
                        }, function() {
                            return t.props.onUpdate({
                                startOffset: t.props.activeSegment.startOffset,
                                endOffset: t.props.currentPlayheadTime
                            })
                        })
                    }, t.closeBalloon = function() {
                        t.state.showBalloon && t.setState({
                            showBalloon: !1
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    e.dragging !== this.props.dragging && e.dragging && this.state.showBalloon && this.setState({
                        showBalloon: !1
                    })
                }, t.prototype.render = function() {
                    if (!this.props.paused) return null;
                    var e = r.createElement(P.sb, {
                            width: 10,
                            height: 10,
                            asset: P.tb.Carat
                        }),
                        t = {
                            left: this.props.pixelX + 36 + "px",
                            top: "95px"
                        };
                    return r.createElement(P.Qa, {
                        zIndex: P.ic.Above,
                        alignItems: P.f.Center,
                        className: "playhead-dropdown__dropdown",
                        display: P.X.InlineFlex,
                        borderRadius: P.x.Medium,
                        position: P.jb.Absolute
                    }, r.createElement("div", {
                        style: t,
                        "data-test-selector": ke.PlayheadDropdownStyle
                    }, r.createElement(P.Ua, {
                        blurAfterClick: !0,
                        type: P.Va.Alpha,
                        selected: !1,
                        onClick: this.updateShowBalloon,
                        "data-test-selector": ke.PlayheadDropdownIcon
                    }, r.createElement(P.Eb, {
                        padding: {
                            x: .5
                        },
                        alignItems: P.f.Center,
                        justifyContent: P.Wa.Center,
                        display: P.X.InlineFlex,
                        className: "playhead-dropdown__icon",
                        borderRadius: P.x.Small
                    }, r.createElement("div", null, e))), this.renderBalloon()))
                }, t
            }(r.Component);
            ! function(e) {
                e.Toolbar = "toolbar", e.Timeline = "timeline"
            }(De || (De = {})),
            function(e) {
                e.Playhead = "playhead"
            }(Ee || (Ee = {})),
            function(e) {
                e.CenterPlayhead = "center_playhead", e.ResetZoom = "reset_zoom", e.ZoomIn = "zoom_in", e.ZoomOut = "zoom_out"
            }(Ce || (Ce = {})),
            function(e) {
                e.PlayheadWrapper = "highlight-playhead-wrapper", e.Playhead = "playhead"
            }(Ie || (Ie = {}));
            var xe, Ne = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        currentPlayerOffset: 0,
                        dragging: !1,
                        previousPosition: null,
                        startOffset: 0,
                        previousBaseValue: null,
                        parentRefWidth: null,
                        sliderOffset: 0
                    }, t.convertPixelsToOffsetUnits = function(e) {
                        return t.parentRef && t.state.parentRefWidth && 0 !== t.state.parentRefWidth ? e * (t.props.videoDuration / t.state.parentRefWidth) : 0
                    }, t.assignParentRef = function(e) {
                        t.parentRef = e
                    }, t.assignIconRef = function(e) {
                        t.iconRef = e
                    }, t.onMouseMove = function(e) {
                        var n = e.clientX;
                        if (t.state.dragging) {
                            var a = t.calculateOffset(n);
                            t.setState(function() {
                                return {
                                    startOffset: a,
                                    currentPlayerOffset: a
                                }
                            }, function() {
                                t.props.requestPlayerTimeChange(a), t.props.paused || t.props.onPauseToggled(!0)
                            }), e.preventDefault()
                        }
                    }, t.onMouseDown = function(e) {
                        var n = e.clientX;
                        t.setState(function(e) {
                            return {
                                previousPosition: n,
                                previousBaseValue: e.startOffset,
                                dragging: !0
                            }
                        }, function() {
                            t.addHandleListeners()
                        }), e.preventDefault(), t.props.trackingParams && function(e) {
                            o.o.track(y.SpadeEventType.HighlighterInteraction, i.__assign({}, e, {
                                platform: "web"
                            }))
                        }(t.props.trackingParams)
                    }, t.onMouseUp = function() {
                        t.setState(function() {
                            return {
                                previousPosition: null,
                                previousBaseValue: null,
                                dragging: !1
                            }
                        }, function() {
                            t.removeHandleListeners()
                        })
                    }, t.calculateOffset = function(e) {
                        if (null === t.state.previousPosition || null === t.state.previousBaseValue) return 0;
                        var n = t.convertPixelsToOffsetUnits(e - t.state.previousPosition),
                            a = t.state.previousBaseValue + n;
                        return a = Math.max(a, 0), a = Math.min(a, t.props.videoDuration)
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    var e = this;
                    this.resizeUpdate(), window.addEventListener("resize", function() {
                        e.resizeUpdate()
                    })
                }, t.prototype.componentWillUnmount = function() {
                    var e = this;
                    window.removeEventListener("resize", function() {
                        e.resizeUpdate()
                    })
                }, t.prototype.componentWillReceiveProps = function(e) {
                    if (e.currentVideoOffset && e.currentVideoOffset !== this.props.currentVideoOffset) this.setState({
                        currentPlayerOffset: e.currentVideoOffset,
                        startOffset: e.currentVideoOffset
                    });
                    else if (e.activeSegment !== this.props.activeSegment) {
                        var t = null;
                        return e.activeSegment.startOffset !== this.props.activeSegment.startOffset && e.activeSegment.endOffset !== this.props.activeSegment.endOffset ? t = e.currentVideoOffset : e.activeSegment.startOffset !== this.props.activeSegment.startOffset ? t = e.activeSegment.startOffset : e.activeSegment.endOffset !== this.props.activeSegment.endOffset && (t = e.activeSegment.endOffset), void(t && this.setState({
                            sliderOffset: t,
                            startOffset: t,
                            currentPlayerOffset: t
                        }))
                    }
                }, t.prototype.render = function() {
                    var e = this.parentRef && this.state.parentRefWidth;
                    return r.createElement(P.Xa, {
                        position: P.jb.Relative,
                        padding: {
                            bottom: 1
                        }
                    }, r.createElement("div", {
                        ref: this.assignParentRef,
                        "data-test-selector": Ie.PlayheadWrapper
                    }, null !== e && r.createElement(r.Fragment, null, r.createElement(ye, {
                        "data-test-selector": Ie.Playhead,
                        pixelX: this.calculatePlayheadLocation(),
                        currentPlayheadTime: this.calculatePlayheadTime(),
                        onMouseDownHandler: this.onMouseDown,
                        iconRef: this.assignIconRef
                    }), r.createElement(P.Xa, null, r.createElement(we, {
                        pixelX: this.calculatePlayheadLocation(),
                        currentPlayheadOffset: this.state.currentPlayerOffset,
                        currentPlayheadTime: this.calculatePlayheadTime(),
                        onUpdate: this.props.onUpdate,
                        paused: this.props.paused,
                        dragging: this.state.dragging,
                        activeSegment: this.props.activeSegment
                    }))), this.props.children))
                }, t.prototype.resizeUpdate = function() {
                    this.updateParentWidth(), this.calculatePlayheadLocation()
                }, t.prototype.updateParentWidth = function() {
                    this.parentRef && this.setState({
                        parentRefWidth: this.parentRef.clientWidth
                    })
                }, t.prototype.calculatePlayheadLocation = function() {
                    return this.parentRef && this.state.parentRefWidth ? ae(this.calculatePlayheadTime(), this.props.videoDuration, this.state.parentRefWidth) : 0
                }, t.prototype.calculatePlayheadTime = function() {
                    return this.state.dragging ? this.state.startOffset : this.props.isDraggingSlider ? this.state.sliderOffset : this.state.currentPlayerOffset
                }, t.prototype.addHandleListeners = function() {
                    this.iconRef && (document.addEventListener("mousemove", this.onMouseMove), document.addEventListener("mouseup", this.onMouseUp))
                }, t.prototype.removeHandleListeners = function() {
                    this.iconRef && (document.removeEventListener("mousemove", this.onMouseMove), document.removeEventListener("mouseup", this.onMouseUp))
                }, t
            }(r.Component);
            n("L7ac");
            ! function(e) {
                e[e.PrecisionTooltip = 0] = "PrecisionTooltip", e[e.StartSelection = 1] = "StartSelection", e[e.EndSelection = 2] = "EndSelection", e[e.UseVideoTimeButton = 3] = "UseVideoTimeButton", e[e.SelectHighlightButton = 4] = "SelectHighlightButton"
            }(xe || (xe = {}));
            var Te = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.onUpdateStartToCurrentVideoTime = function() {
                            n.setState(function(e, t) {
                                if (null !== t.currentVideoOffset) return i.__assign({}, e, {
                                    startOffset: Object(N.b)(t.currentVideoOffset),
                                    endOffset: Object(N.b)(t.segment.endOffset)
                                })
                            }, function() {
                                n.props.onUpdate({
                                    startOffset: Object(N.a)(n.state.startOffset),
                                    endOffset: Object(N.a)(n.state.endOffset)
                                })
                            })
                        }, n.onUpdateEndToCurrentVideoTime = function() {
                            n.setState(function(e, t) {
                                if (null !== t.currentVideoOffset) return i.__assign({}, e, {
                                    startOffset: Object(N.b)(t.segment.startOffset),
                                    endOffset: Object(N.b)(t.currentVideoOffset)
                                })
                            }, function() {
                                n.props.onUpdate({
                                    startOffset: Object(N.a)(n.state.startOffset),
                                    endOffset: Object(N.a)(n.state.endOffset)
                                })
                            })
                        }, n.onStartChange = function(e) {
                            n.setState({
                                startOffset: e.currentTarget.value
                            })
                        }, n.onEndChange = function(e) {
                            n.setState({
                                endOffset: e.currentTarget.value
                            })
                        }, n.onKeyDown = function(e) {
                            e.keyCode === $.a.Enter && n.update()
                        }, n.onInputBlur = function() {
                            n.update()
                        }, n.getTooltipLabel = function() {
                            return Object(o.d)("Use Playhead Time", "HighlighterOffsetSelector")
                        }, n.state = {
                            startOffset: Object(N.b)(t.segment.startOffset),
                            endOffset: Object(N.b)(t.segment.endOffset),
                            areOffsetsValid: !0
                        }, n
                    }
                    return i.__extends(t, e), t.prototype.shouldComponentUpdate = function(e, t) {
                        return this.state.startOffset !== t.startOffset || this.state.endOffset !== t.endOffset || this.state.areOffsetsValid !== t.areOffsetsValid || this.props.segment.startOffset !== e.segment.startOffset || this.props.segment.endOffset !== e.segment.endOffset
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        var t = this.props.segment,
                            n = e.segment,
                            a = t.startOffset !== n.startOffset,
                            i = t.endOffset !== n.endOffset,
                            r = Object(N.b)(n.startOffset),
                            s = Object(N.b)(n.endOffset),
                            o = r !== this.state.startOffset,
                            l = s !== this.state.endOffset,
                            d = !1,
                            c = this.state.startOffset,
                            u = this.state.endOffset;
                        a && i ? (c = r, u = s) : a ? (c = r, d = l) : i && (u = s, d = o);
                        var p = {
                            startOffset: c,
                            endOffset: u,
                            areOffsetsValid: this.state.areOffsetsValid
                        };
                        if (a || i) {
                            var f = this.checkOffsetsWithinBounds({
                                startSeconds: Object(N.a)(c),
                                endSeconds: Object(N.a)(u),
                                startBound: n.minOffset,
                                endBound: n.maxOffset
                            });
                            p.areOffsetsValid = f, d && f && this.props.onUpdate({
                                startOffset: Object(N.a)(c),
                                endOffset: Object(N.a)(u)
                            })
                        }
                        this.setState(p)
                    }, t.prototype.render = function() {
                        var e = Object(N.a)(this.state.endOffset) - Object(N.a)(this.state.startOffset);
                        return (isNaN(e) || e < 0) && (e = 0), r.createElement(P.Xa, {
                            display: P.X.Flex,
                            justifyContent: P.Wa.Start,
                            flexDirection: P.Aa.Column,
                            breakpointMedium: {
                                flexDirection: P.Aa.Row
                            }
                        }, this.renderStartInput(), this.renderEndInput())
                    }, t.prototype.renderStartInput = function() {
                        var e = this.state.startOffset,
                            t = !this.validClockValue(e) || Object(N.a)(e) >= this.props.segment.endOffset;
                        return r.createElement(P.Xa, {
                            display: P.X.Flex,
                            alignItems: P.f.Center,
                            justifyContent: P.Wa.Start,
                            margin: {
                                bottom: 1,
                                right: 0
                            },
                            breakpointMedium: {
                                margin: {
                                    bottom: 0,
                                    right: 2
                                }
                            },
                            "data-test-selector": xe.StartSelection
                        }, r.createElement(P.Pa, {
                            display: P.X.InlineFlex,
                            alignItems: P.f.Center,
                            textAlign: P.Rb.Right
                        }, r.createElement("label", null, r.createElement(P.Xa, {
                            className: "offset-selector__input-label",
                            display: P.X.InlineFlex,
                            margin: {
                                right: 1
                            }
                        }, r.createElement(P.W, null, Object(o.d)("Start{break}Time", {
                            break: r.createElement("br", null)
                        }, "HighlighterOffsetSelector"))), r.createElement(P.Xa, {
                            className: "offset-selector__offset-input",
                            display: P.X.InlineFlex
                        }, r.createElement(P.Ra, {
                            error: t,
                            onBlur: this.onInputBlur,
                            onChange: this.onStartChange,
                            onKeyDown: this.onKeyDown,
                            required: !0,
                            type: P.Ta.Text,
                            value: this.state.startOffset
                        })))), r.createElement(P.Yb, {
                            label: this.getTooltipLabel()
                        }, r.createElement(P.z, {
                            type: P.F.Hollow,
                            onClick: this.onUpdateStartToCurrentVideoTime,
                            icon: P.tb.Timer,
                            "data-test-selector": xe.UseVideoTimeButton
                        })))
                    }, t.prototype.renderEndInput = function() {
                        var e = this.state.endOffset,
                            t = !this.validClockValue(e) || Object(N.a)(e) <= this.props.segment.startOffset;
                        return r.createElement(P.Xa, {
                            display: P.X.Flex,
                            alignItems: P.f.Center,
                            justifyContent: P.Wa.End,
                            "data-test-selector": xe.EndSelection
                        }, r.createElement(P.Pa, {
                            display: P.X.InlineFlex,
                            alignItems: P.f.Center,
                            textAlign: P.Rb.Right
                        }, r.createElement("label", null, r.createElement(P.Xa, {
                            className: "offset-selector__input-label",
                            display: P.X.InlineFlex,
                            margin: {
                                right: 1
                            }
                        }, r.createElement(P.W, null, Object(o.d)("End{break}Time", {
                            break: r.createElement("br", null)
                        }, "HighlighterOffsetSelector"))), r.createElement(P.Xa, {
                            display: P.X.InlineFlex,
                            className: "offset-selector__offset-input"
                        }, r.createElement(P.Ra, {
                            error: t,
                            onBlur: this.onInputBlur,
                            onChange: this.onEndChange,
                            onKeyDown: this.onKeyDown,
                            required: !0,
                            type: P.Ta.Text,
                            value: e
                        })))), r.createElement(P.Yb, {
                            label: this.getTooltipLabel()
                        }, r.createElement(P.z, {
                            type: P.F.Hollow,
                            onClick: this.onUpdateEndToCurrentVideoTime,
                            icon: P.tb.Timer,
                            "data-test-selector": xe.UseVideoTimeButton
                        })))
                    }, t.prototype.validClockValue = function(e) {
                        var t = Object(N.a)(e);
                        return !isNaN(t)
                    }, t.prototype.canUpdate = function() {
                        if (!(this.validClockValue(this.state.startOffset) && this.validClockValue(this.state.endOffset))) return this.setState({
                            areOffsetsValid: !1
                        }), !1;
                        var e = this.props.segment,
                            t = Object(N.a)(this.state.startOffset),
                            n = Object(N.a)(this.state.endOffset),
                            a = this.checkOffsetsWithinBounds({
                                startSeconds: t,
                                endSeconds: n,
                                startBound: e.minOffset,
                                endBound: e.maxOffset
                            });
                        return this.setState({
                            areOffsetsValid: a
                        }), (t !== e.startOffset || n !== e.endOffset) && a
                    }, t.prototype.checkOffsetsWithinBounds = function(e) {
                        return !isNaN(e.startSeconds) && !isNaN(e.endSeconds) && (!(e.startSeconds < e.startBound || e.endSeconds > e.endBound) && !(e.endSeconds <= e.startSeconds))
                    }, t.prototype.update = function() {
                        this.canUpdate() && this.props.onManualInputChange({
                            startOffset: Object(N.a)(this.state.startOffset),
                            endOffset: Object(N.a)(this.state.endOffset)
                        })
                    }, t
                }(r.Component),
                Pe = n("ig/l"),
                Ve = (n("Vt/k"), 25),
                _e = 150,
                Fe = 200,
                Re = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            clientWidth: 0,
                            realTickSpacing: 0,
                            ticks: []
                        }, t.resizeDebounce = 0, t.finalizeTimer = null, t.timelineRefCallback = function(e) {
                            t.timelineRef = e
                        }, t.onWindowResize = function() {
                            var e = Date.now();
                            t.finalizeTimer && clearTimeout(t.finalizeTimer), t.finalizeTimer = setTimeout(t.finalizeWidth, _e), e - t.resizeDebounce > Fe && (t.resizeDebounce = e, t.finalizeWidth())
                        }, t.finalizeWidth = function() {
                            var e = t.timelineRef && t.timelineRef.clientWidth || 0;
                            if (e !== t.state.clientWidth && 0 !== e) {
                                var n = e / Ve,
                                    a = t.getNearestScaledMultipleOf5(e, Ve, t.getDuration(), t.getDuration() / n * 4) / t.getDuration() * e / 4;
                                t.setState({
                                    clientWidth: e,
                                    realTickSpacing: a,
                                    ticks: t.renderTickClusters(e, a, t.getDuration())
                                })
                            }
                        }, t.renderTickClusters = function(e, n, a) {
                            if (0 === e || 0 === n) return [];
                            for (var i = e / n, s = [], o = 0; o < i; o++)
                                if (o % 4 == 0) {
                                    var l = Math.round(o / i * a),
                                        d = t.getNearestScaledMultipleOf5(e, n, a, l);
                                    s.push(r.createElement(P.Xa, {
                                        key: o,
                                        className: "timeline-ruler__big-tick",
                                        position: P.jb.Relative
                                    }, r.createElement("div", {
                                        className: "timeline-ruler__tick"
                                    }), r.createElement(P.Eb, {
                                        className: "timeline-ruler__timestamp",
                                        color: P.O.Alt2,
                                        position: P.jb.Absolute
                                    }, Object(N.b)(d, {
                                        zeroPadAll: !0
                                    }))))
                                } else s.push(r.createElement("div", {
                                    key: o,
                                    className: "timeline-ruler__little-tick"
                                }));
                            return s
                        }, t.getNearestScaledMultipleOf5 = function(e, t, n, a) {
                            var i = n / (e / t),
                                r = a % (i = i < 60 ? 5 : i < 3600 ? 300 : 18e3);
                            return r < i / 2 ? a - r : a + (i - a % i)
                        }, t.getDuration = function() {
                            return t.props.endOffset - t.props.startOffset
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        window.addEventListener("resize", this.onWindowResize), this.finalizeWidth()
                    }, t.prototype.componentWillUnmount = function() {
                        window.removeEventListener("resize", this.onWindowResize)
                    }, t.prototype.render = function() {
                        return r.createElement(P.Xa, {
                            className: "timeline-ruler",
                            display: P.X.Flex
                        }, r.createElement(P.Xa, {
                            className: "timeline-ruler__tick-container",
                            refDelegate: this.timelineRefCallback,
                            display: P.X.Flex,
                            flexGrow: 4,
                            position: P.jb.Relative,
                            justifyContent: P.Wa.Between
                        }, this.state.ticks), r.createElement("div", {
                            className: "timeline-ruler__ruler-spacer",
                            style: {
                                width: this.state.clientWidth % this.state.realTickSpacing || 0
                            }
                        }))
                    }, t
                }(r.Component),
                He = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onDrag = function(e) {
                            var n = t.props.segment;
                            e.startOffset === n.startOffset && e.endOffset === n.endOffset || t.props.onOffsetChange(e)
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.segment;
                        return r.createElement(r.Fragment, null, r.createElement(Pe.a, {
                            color: Pe.c.Orange,
                            handleSize: Pe.b.Small,
                            startOffset: e.startOffset,
                            endOffset: e.endOffset,
                            maxOffset: e.maxOffset,
                            minOffset: e.minOffset,
                            onLeftDrag: this.onDrag,
                            onLeftDragStart: this.props.onStartOffsetFocus,
                            onLeftDragEnd: this.props.onDragEnd,
                            onRightDrag: this.onDrag,
                            onRightDragStart: this.props.onEndOffsetFocus,
                            onRightDragEnd: this.props.onDragEnd,
                            showTransition: this.props.showTransition
                        }, r.createElement(P.Eb, {
                            alignItems: P.f.Center,
                            display: P.X.Flex,
                            fullWidth: !0,
                            justifyContent: P.Wa.Center,
                            padding: {
                                y: 3
                            },
                            textAlign: P.Rb.Center
                        })), r.createElement(Re, {
                            startOffset: 0,
                            endOffset: this.props.duration
                        }))
                    }, t
                }(r.Component),
                Me = Object(Q.compose)(Object(D.b)("VideoSegmentEditor", {
                    autoReportInteractive: !0
                }))(He),
                je = function(e) {
                    return Math.floor(15 * e / 100)
                },
                Xe = function(e) {
                    return Math.ceil(85 * e / 100)
                };
            n("f0Oh");
            var Ae = 250,
                Le = function(e) {
                    function t(t) {
                        var n, a = e.call(this, t) || this;
                        a.addTransition = function() {
                            a.setState(function() {
                                return {
                                    isTransitioning: !0
                                }
                            }, function() {
                                setTimeout(function() {
                                    a.setState({
                                        isTransitioning: !1
                                    })
                                }, Ae)
                            })
                        }, a.onOffsetChange = function(e) {
                            a.addTransition();
                            var t = e;
                            a.props.activeSegment && null !== a.props.currentVideoOffset && (e.startOffset !== a.props.activeSegment.startOffsetSeconds ? t = function(e, t) {
                                var n = e.endOffset;
                                return t > e.endOffset && (n = Math.min(e.maxOffset, t + (e.endOffset - e.startOffset))), {
                                    startOffset: t,
                                    endOffset: n
                                }
                            }(a.formatTimelineSegment(a.props.activeSegment), a.props.currentVideoOffset) : e.endOffset !== a.props.activeSegment.endOffsetSeconds && (t = function(e, t) {
                                var n = e.startOffset;
                                return t < e.startOffset && (n = Math.max(e.minOffset, t - (e.endOffset - e.startOffset))), {
                                    startOffset: n,
                                    endOffset: t
                                }
                            }(a.formatTimelineSegment(a.props.activeSegment), a.props.currentVideoOffset))), a.props.onTimelineOffsetChange(t)
                        }, a.onManualInputChange = function(e) {
                            a.addTransition(), a.props.onTimelineOffsetChange(e)
                        }, a.updateSelectedMarkerFilters = function(e, t) {
                            a.setState(function(n) {
                                var a;
                                return {
                                    selectedMarkerCreators: i.__assign({}, n.selectedMarkerCreators, (a = {}, a[e] = t, a))
                                }
                            })
                        }, a.updateSelectedClipsFilters = function(e, t) {
                            a.setState(function(n) {
                                var a;
                                return {
                                    selectedClipCreators: i.__assign({}, n.selectedClipCreators, (a = {}, a[e] = t, a))
                                }
                            })
                        }, a.updateDownloadData = function(e, t) {
                            a.setState({
                                clipsDownloadData: e,
                                markersDownloadData: t
                            })
                        }, a.onLeftSliderDrag = function(e) {
                            a.setState({
                                isDraggingSlider: !0
                            }, function() {
                                a.props.onStartOffsetFocus(e)
                            })
                        }, a.onRightSliderDrag = function(e) {
                            a.setState({
                                isDraggingSlider: !0
                            }, function() {
                                a.props.onEndOffsetFocus(e)
                            })
                        }, a.onSliderDragEnd = function() {
                            a.setState({
                                isDraggingSlider: !1
                            })
                        }, a.handleHotkeys = function(e) {
                            if (a.props.activeSegment && null !== a.props.currentVideoOffset && e.target && "INPUT" !== e.target.tagName) switch (e.charCode || e.keyCode) {
                                case $.a.Comma:
                                    if (!e.altKey) break;
                                    a.onOffsetChange({
                                        startOffset: a.props.currentVideoOffset,
                                        endOffset: a.props.activeSegment.endOffsetSeconds
                                    }), a.preventDefaultBehavior(e);
                                    break;
                                case $.a.Period:
                                    if (!e.altKey) break;
                                    a.onOffsetChange({
                                        startOffset: a.props.activeSegment.startOffsetSeconds,
                                        endOffset: a.props.currentVideoOffset
                                    }), a.preventDefaultBehavior(e);
                                    break;
                                case $.a.Space:
                                    a.props.onPauseToggled(!a.props.paused), a.preventDefaultBehavior(e)
                            }
                        }, a.preventDefaultBehavior = function(e) {
                            e.preventDefault(), e.stopPropagation()
                        };
                        var r = t.userID === t.channelID,
                            s = ((n = {})[fe.Self] = !0, n);
                        return r ? s[fe.Editor] = !0 : s[fe.Owner] = !0, a.state = {
                            isTransitioning: !1,
                            selectedMarkerCreators: i.__assign({}, s),
                            selectedClipCreators: i.__assign({}, s),
                            clipsDownloadData: [],
                            markersDownloadData: [],
                            isDraggingSlider: !1
                        }, a
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        window.addEventListener("keydown", this.handleHotkeys)
                    }, t.prototype.componentWillUnmount = function() {
                        window.removeEventListener("keydown", this.handleHotkeys)
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        this.props.activeSegment && e.activeSegment && this.props.activeSegment.tempID !== e.activeSegment.tempID && this.addTransition()
                    }, t.prototype.render = function() {
                        if (!this.props.activeSegment) return null;
                        var e, t = this.formatTimelineSegment(this.props.activeSegment);
                        return this.props.userID && (e = {
                            channel_id: parseInt(this.props.channelID, 10),
                            element_name: De.Timeline,
                            element_sub_name: Ee.Playhead,
                            user_id: parseInt(this.props.userID, 10),
                            vod_id: this.props.videoID,
                            vod_type: this.props.videoType
                        }), r.createElement(P.Xa, {
                            fullWidth: !0
                        }, r.createElement(Ne, {
                            currentVideoOffset: this.props.currentVideoOffset,
                            videoDuration: this.props.videoLengthSeconds,
                            requestPlayerTimeChange: this.props.requestPlayerTimeChange,
                            onPauseToggled: this.props.onPauseToggled,
                            trackingParams: e,
                            onUpdate: this.onOffsetChange,
                            paused: this.props.paused,
                            activeSegment: t,
                            isDraggingSlider: this.state.isDraggingSlider
                        }, r.createElement(be, {
                            userID: this.props.userID,
                            channelID: this.props.channelID,
                            videoID: this.props.videoID,
                            videoDuration: this.props.videoLengthSeconds,
                            selectedClipCreators: this.state.selectedClipCreators,
                            selectedMarkerCreators: this.state.selectedMarkerCreators,
                            requestPlayerTimeChange: this.props.requestPlayerTimeChange,
                            updateDownloadData: this.updateDownloadData,
                            activeSegment: t
                        }, r.createElement(P.Eb, {
                            className: "video-timeline__background",
                            border: !0
                        }, r.createElement(Me, {
                            onStartOffsetFocus: this.onLeftSliderDrag,
                            onEndOffsetFocus: this.onRightSliderDrag,
                            onOffsetChange: this.props.onTimelineOffsetChange,
                            segment: t,
                            showTransition: this.state.isTransitioning,
                            duration: this.props.videoLengthSeconds,
                            onDragEnd: this.onSliderDragEnd
                        })))), r.createElement(P.Xa, {
                            alignItems: P.f.Center,
                            display: P.X.Flex,
                            justifyContent: P.Wa.Between,
                            padding: {
                                y: 2
                            }
                        }, r.createElement(Te, {
                            onManualInputChange: this.onManualInputChange,
                            onUpdate: this.onOffsetChange,
                            segment: this.formatTimelineSegment(this.props.activeSegment),
                            currentVideoOffset: this.props.currentVideoOffset
                        }), this.renderPinFilters()))
                    }, t.prototype.renderPinFilters = function() {
                        return r.createElement(P.Xa, {
                            display: P.X.Flex
                        }, r.createElement(P.Xa, {
                            margin: {
                                top: .5
                            }
                        }, r.createElement(P.W, null, Object(o.d)("Display", "VideoTimeline"))), r.createElement(P.Xa, {
                            display: P.X.Flex,
                            justifyContent: P.Wa.End,
                            flexDirection: P.Aa.Column,
                            breakpointMedium: {
                                flexDirection: P.Aa.Row,
                                justifyContent: P.Wa.Start
                            }
                        }, r.createElement(ve, {
                            name: Object(o.d)("Markers", "VideoTimeline"),
                            description: Object(o.d)("Added by", "VideoTimeline"),
                            broadcasterDisplayName: this.props.channelDisplayName,
                            selectedCreators: this.state.selectedMarkerCreators,
                            updateSelectedOption: this.updateSelectedMarkerFilters,
                            dataCount: this.state.markersDownloadData.length,
                            disabledMessage: Object(o.d)("No Stream Markers available", "VideoTimeline")
                        }), r.createElement(P.Xa, {
                            display: P.X.Flex,
                            margin: {
                                top: 1
                            },
                            breakpointMedium: {
                                margin: {
                                    top: 0
                                }
                            }
                        }, r.createElement(ve, {
                            name: Object(o.d)("Clips", "VideoTimeline"),
                            description: Object(o.d)("Clipped by", "VideoTimeline"),
                            broadcasterDisplayName: this.props.channelDisplayName,
                            selectedCreators: this.state.selectedClipCreators,
                            updateSelectedOption: this.updateSelectedClipsFilters,
                            dataCount: this.state.clipsDownloadData.length,
                            disabledMessage: Object(o.d)("No Clip Markers available", "VideoTimeline")
                        }), r.createElement(P.Xa, {
                            margin: {
                                left: .5
                            }
                        }, r.createElement(ne, {
                            userID: this.props.userID,
                            channelID: this.props.channelID,
                            videoID: this.props.videoID,
                            clipsData: this.state.clipsDownloadData,
                            markersData: this.state.markersDownloadData
                        })))))
                    }, t.prototype.formatTimelineSegment = function(e) {
                        return {
                            startOffset: e.startOffsetSeconds,
                            endOffset: e.endOffsetSeconds,
                            minOffset: 0,
                            maxOffset: this.props.videoLengthSeconds
                        }
                    }, t
                }(r.Component),
                Be = Object(Q.compose)(Object(D.b)("VideoTimeline", {
                    autoReportInteractive: !0
                }))(Le);

            function We(e) {
                return {
                    channel: e.channelLogin,
                    channel_id: e.channelID,
                    source_video_id: e.sourceVideoID,
                    user_id: e.userID,
                    referrer_clip_id: e.referrerClipID
                }
            }

            function Ue(e) {
                var t = function(e) {
                    var t = Math.round((e.endTime.getTime() - e.startTime.getTime()) / 1e3);
                    return i.__assign({}, We(e), {
                        curation_duration: t,
                        generated_video_count: e.generatedVideoIDs.length,
                        generated_video_ids: e.generatedVideoIDs.join(",")
                    })
                }(e);
                o.o.track(y.SpadeEventType.HighlighterCurationFinish, t)
            }

            function Ge() {
                return "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                    var t = 16 * Math.random() | 0;
                    return ("x" === e ? t : 3 & t | 8).toString(16)
                })
            }
            var qe, ze = n("8QND"),
                Qe = (n("uQjj"), 0),
                $e = -1;
            ! function(e) {
                e[e.SourceVideoTitle = 0] = "SourceVideoTitle", e[e.SourceVideoDate = 1] = "SourceVideoDate", e[e.SourceVideoViews = 2] = "SourceVideoViews", e[e.SourceVideoGame = 3] = "SourceVideoGame"
            }(qe || (qe = {}));
            var Ke, Ye = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        if (n.state = {
                                activeID: "",
                                currentSegmentOffsets: {
                                    startOffset: 0,
                                    endOffset: 0
                                },
                                lastVideoOffset: null,
                                requestedPlayerOffset: Qe,
                                shouldPlayerPause: !1,
                                videoSegmentQueue: [],
                                userMadeChanges: !1
                            }, n.paramOverrides = function(e) {
                                var t, n = new URLSearchParams(e),
                                    a = n.get(E.a.Start),
                                    i = n.get(E.a.End),
                                    r = n.get(E.b.VideoStartTime);
                                return (t = {})[E.a.TrackingID] = n.get(E.a.TrackingID), t[E.a.GameName] = n.get(E.a.GameName), t[E.a.GameID] = n.get(E.a.GameID), t[E.a.Title] = n.get(E.a.Title), t[E.a.Start] = null !== a ? Number(a) : null, t[E.a.End] = null !== i ? Number(i) : null, t[E.b.VideoStartTime] = r ? Object(b.a)(r) : null, t
                            }(window.location.search), n.hasConsumedParams = !1, n.onChangeVODClick = function() {
                                n.props.showSelectVODModal()
                            }, n.onAddNewHighlight = function() {
                                n.setState(function(e) {
                                    var t = n.props.data.video;
                                    if (!t) return e;
                                    var a = n.getSegmentByID(n.state.activeID),
                                        r = je(t.lengthSeconds),
                                        s = Xe(t.lengthSeconds);
                                    a && Math.ceil(a.endOffsetSeconds) !== t.lengthSeconds && (r = Math.ceil(a.endOffsetSeconds), s = t.lengthSeconds);
                                    var o = {};
                                    a && a.metadata.game && (o = {
                                        game: a.metadata.game
                                    });
                                    var l = {
                                            tempID: Ge(),
                                            startOffsetSeconds: r,
                                            endOffsetSeconds: s,
                                            sourceVideoDetails: {
                                                id: t.id,
                                                lengthSeconds: t.lengthSeconds,
                                                title: t.title
                                            },
                                            metadata: n.formatSourceVideoFields(t, o)
                                        },
                                        d = e.videoSegmentQueue;
                                    return i.__assign({}, e, {
                                        requestedPlayerOffset: l.startOffsetSeconds,
                                        videoSegmentQueue: d.concat(l),
                                        activeID: l.tempID,
                                        userMadeChanges: !0,
                                        currentSegmentOffsets: {
                                            startOffset: r,
                                            endOffset: s
                                        }
                                    })
                                })
                            }, n.onPostSaveFinishAndNavigate = function(e) {
                                n.setState({
                                    videoSegmentQueue: []
                                }, function() {
                                    n.props.history.push("/" + n.props.match.params.channelName + "/manager/edit/" + e[0], {
                                        vodIDs: e
                                    })
                                })
                            }, n.onRemoveSegment = function(e) {
                                n.setState(function(t) {
                                    var n = t.videoSegmentQueue.slice();
                                    n.splice(e, 1);
                                    var a = e - 1;
                                    return 0 === n.length ? a = null : a < 0 && (a = 0), {
                                        activeID: null === a ? "" : n[a].tempID,
                                        videoSegmentQueue: n
                                    }
                                }, function() {
                                    var e = n.getSegmentByID(n.state.activeID);
                                    e && n.updateHighlighterURL(e.sourceVideoDetails.id)
                                })
                            }, n.onSaveSuccess = function(e) {
                                var t = n.props.data;
                                if (t.video) {
                                    var a = n.curationStartTime || new Date,
                                        i = t.video.owner;
                                    Ue({
                                        channelLogin: i ? i.login : null,
                                        channelID: i ? i.id : null,
                                        generatedVideoIDs: e,
                                        endTime: new Date,
                                        userID: t.currentUser ? t.currentUser.id : null,
                                        sourceVideoID: t.video.id,
                                        startTime: a,
                                        referrerClipID: n.paramOverrides[E.a.TrackingID] || null
                                    })
                                }
                            }, n.onBeforeunloadHandler = function(e) {
                                if (0 === n.state.videoSegmentQueue.length || !n.state.userMadeChanges) return !1;
                                var t = confirm(n.discardChangesMessage());
                                return e.returnValue = t, t
                            }, n.onTimelineStartOffsetFocus = function(e) {
                                n.setState({
                                    currentSegmentOffsets: e,
                                    requestedPlayerOffset: e.startOffset,
                                    shouldPlayerPause: !0
                                })
                            }, n.onTimelineEndOffsetFocus = function(e) {
                                n.setState({
                                    currentSegmentOffsets: e,
                                    requestedPlayerOffset: e.endOffset,
                                    shouldPlayerPause: !0
                                })
                            }, n.onTimelineOffsetChange = function(e) {
                                Math.floor(e.startOffset) === Math.ceil(e.endOffset) && (e.startOffset !== n.state.currentSegmentOffsets.startOffset ? e.startOffset-- : e.endOffset++), n.updateSegmentsState(e), n.updateCurrentSegmentOffsets(e)
                            }, n.updateSegmentsState = function(e) {
                                n.setState(function(t) {
                                    var n = t.videoSegmentQueue.slice(),
                                        a = n.find(function(e) {
                                            return e.tempID === t.activeID
                                        });
                                    if (!t.activeID || !a) return t;
                                    var r = Math.floor(e.startOffset),
                                        s = Math.ceil(e.endOffset);
                                    return a.startOffsetSeconds = r, a.endOffsetSeconds = s, i.__assign({}, t, {
                                        videoSegmentQueue: n,
                                        userMadeChanges: !0
                                    })
                                })
                            }, n.updateCurrentSegmentOffsets = function(e) {
                                if (null !== n.state.currentSegmentOffsets) {
                                    var t = n.state.currentSegmentOffsets,
                                        a = {};
                                    e.startOffset !== t.startOffset && (a.currentSegmentOffsets = e, a.requestedPlayerOffset = e.startOffset), e.endOffset !== t.endOffset && (a.currentSegmentOffsets = e, a.requestedPlayerOffset = e.endOffset), e.startOffset !== t.startOffset && e.endOffset !== t.endOffset && (a.requestedPlayerOffset = n.state.requestedPlayerOffset), n.setState(i.__assign({}, n.state, a))
                                }
                            }, n.onPlayerPauseToggle = function(e) {
                                n.setState({
                                    shouldPlayerPause: e
                                })
                            }, n.requestPlayerTimeChange = function(e) {
                                n.setState({
                                    requestedPlayerOffset: e
                                })
                            }, n.onPlayerTimeChange = function(e) {
                                var t = Math.floor(e);
                                t !== n.state.lastVideoOffset ? t !== n.activeOffsetWorkaround().endOffset || !0 === n.state.shouldPlayerPause ? n.setState({
                                    lastVideoOffset: t
                                }) : n.setState({
                                    shouldPlayerPause: !0,
                                    lastVideoOffset: t
                                }) : n.state.requestedPlayerOffset === t && n.setState({
                                    requestedPlayerOffset: $e
                                })
                            }, n.onChangeActiveSegment = function(e) {
                                var t = n.getSegmentByID(e);
                                t && n.setState({
                                    activeID: e,
                                    currentSegmentOffsets: {
                                        startOffset: t.startOffsetSeconds,
                                        endOffset: t.endOffsetSeconds
                                    }
                                }, function() {
                                    n.updateHighlighterURL(t.sourceVideoDetails.id)
                                })
                            }, n.updateHighlighterURL = function(e) {
                                o.p.history.push("/" + n.props.match.params.channelName + "/manager/highlighter/" + e)
                            }, n.onTitleChange = function(e, t) {
                                n.setState(function(a) {
                                    var i = a.videoSegmentQueue[e];
                                    return i.metadata.title = t, n.updateSegmentInState(e, a, i)
                                })
                            }, n.onGameChange = function(e, t) {
                                n.setState(function(a) {
                                    var i = a.videoSegmentQueue[e];
                                    return i.metadata.game = t, n.updateSegmentInState(e, a, i)
                                })
                            }, n.updateSegmentInState = function(e, t, n, a) {
                                void 0 === a && (a = {});
                                var r = t.videoSegmentQueue.slice(0, e).concat([n], t.videoSegmentQueue.slice(e + 1, t.videoSegmentQueue.length));
                                return i.__assign({}, t, a, {
                                    videoSegmentQueue: r
                                })
                            }, n.shouldAllowNavigation = function(e) {
                                return !!e.pathname.match("/manager/highlighter") || n.discardChangesMessage()
                            }, n.setParamSourcedDefaultsOnce = function() {
                                n.hasConsumedParams || (n.hasConsumedParams = !0, 0 !== Object.keys(n.paramOverrides).length && (o.p.history.replace(o.p.history.location.pathname), n.setState(function(e) {
                                    var t = e.videoSegmentQueue[0],
                                        a = n.paramOverrides,
                                        i = a.title,
                                        r = a.gameID,
                                        s = a.game,
                                        o = a.start,
                                        l = a.end;
                                    return r && s && (t.metadata.game = {
                                        id: r,
                                        name: s
                                    }), i && (t.metadata.title = i), null !== o && (t.startOffsetSeconds = o), null !== l && (t.endOffsetSeconds = l), n.updateSegmentInState(0, e, t, {})
                                })))
                            }, !t.data.loading && !t.data.error && t.data.video) {
                            var a = n.videoSegmentFromSource(t.data.video);
                            n.state.currentSegmentOffsets = {
                                startOffset: je(t.data.video.lengthSeconds),
                                endOffset: Xe(t.data.video.lengthSeconds)
                            }, n.state.videoSegmentQueue = [a];
                            var r = n.paramOverrides[E.b.VideoStartTime] || n.paramOverrides[E.a.Start] || 0;
                            n.state.requestedPlayerOffset = r < t.data.video.lengthSeconds ? r : 0, n.state.activeID = a.tempID
                        }
                        return n
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        window.addEventListener("beforeunload", this.onBeforeunloadHandler), this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentWillUnmount = function() {
                        window.removeEventListener("beforeunload", this.onBeforeunloadHandler)
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        var t = this,
                            n = this.props.data.loading && !e.data.loading;
                        if ((n || !e.data.error) && e.data.video) {
                            if (n && !this.props.data.video && e.data.video && e.data.video.owner) {
                                var a = e.data.video.owner.displayName;
                                o.p.setPageTitle(Object(o.d)("{ownerDisplayName} - Highlighter", {
                                    ownerDisplayName: a
                                }, "HighlighterPageComponent"))
                            }
                            this.setState(function(n) {
                                if (!e.data.video) return n;
                                var a = i.__assign({}, n, {
                                        currentSegmentOffsets: {
                                            startOffset: je(e.data.video.lengthSeconds),
                                            endOffset: Xe(e.data.video.lengthSeconds)
                                        }
                                    }),
                                    r = t.props.data.video && e.data.video.id !== t.props.data.video.id,
                                    s = 0 === t.state.videoSegmentQueue.length,
                                    o = !r && t.props.match.params.videoID !== e.match.params.videoID,
                                    l = t.getSegmentByID(t.state.activeID),
                                    d = !!(e.data.video && r && l && t.props.data.video && l.sourceVideoDetails.id === t.props.data.video.id),
                                    c = e.data.video && !o && (!t.props.data.video || s);
                                if (d || c) {
                                    var u = t.videoSegmentFromSource(e.data.video);
                                    a.videoSegmentQueue = t.state.videoSegmentQueue.concat(u);
                                    var p = t.paramOverrides[E.b.VideoStartTime] || t.paramOverrides[E.a.Start] || 0;
                                    a.requestedPlayerOffset = p < e.data.video.lengthSeconds ? p : 0, a.activeID = u.tempID
                                } else l && (a.requestedPlayerOffset = l.startOffsetSeconds, a.currentSegmentOffsets = {
                                    startOffset: l.startOffsetSeconds,
                                    endOffset: l.endOffsetSeconds
                                });
                                return a
                            }, this.setParamSourcedDefaultsOnce)
                        }
                    }, t.prototype.componentDidUpdate = function() {
                        var e = this.props.data;
                        if (!this.curationStartTime && e.video) {
                            this.curationStartTime = new Date;
                            var t = e.video.owner;
                            ! function(e) {
                                o.o.track(y.SpadeEventType.HighlighterCurationStart, We(e))
                            }({
                                channelID: t ? t.id : null,
                                channelLogin: t ? t.login : null,
                                currentTime: this.curationStartTime,
                                userID: e.currentUser ? e.currentUser.id : null,
                                sourceVideoID: e.video.id,
                                referrerClipID: this.paramOverrides[E.a.TrackingID] || null
                            })
                        }
                    }, t.prototype.render = function() {
                        if (this.props.data.loading && !this.props.data.video) return null;
                        var e = this.props.match.params.channelName;
                        if (e && (e = e.toLowerCase()), this.props.data.video && "" === this.props.data.video.id) return r.createElement(p.a, {
                            to: Object(O.d)(e)
                        });
                        if (!this.props.data.video || this.props.data.error || !this.props.data.video.owner) return r.createElement(l.a, {
                            message: Object(o.d)("Error loading video data. Please try again later.", "HighlighterPageComponent")
                        });
                        if (this.props.data.video.broadcastType !== S.a.Archive) return r.createElement(l.a, {
                            message: Object(o.d)("You can only highlight past broadcasts.", "HighlighterPageComponent")
                        });
                        if (this.props.data.video.owner && this.props.data.video.owner.login !== e) return r.createElement(l.a, {
                            message: Object(o.d)("The selected video to highlight does not exist.", "HighlighterPageComponent")
                        });
                        var t = this.activeOffsetWorkaround(),
                            n = r.createElement(l.a, {
                                message: Object(o.d)("Oops, something went wrong.", "HighlighterPageComponent")
                            });
                        return r.createElement(m.a, {
                            content: n
                        }, r.createElement(h.b, null, r.createElement(P.rb, {
                            centered: !0
                        }, r.createElement(P.Eb, {
                            alignItems: P.f.Stretch,
                            background: P.r.Alt,
                            className: "highlighter-page",
                            display: P.X.Flex,
                            flexDirection: P.Aa.Column,
                            fullHeight: !0,
                            fullWidth: !0,
                            padding: {
                                x: 3,
                                top: 4
                            }
                        }, r.createElement(P.Ja, {
                            gutterSize: P.Ka.Medium
                        }, r.createElement(P.P, {
                            cols: {
                                default: 12,
                                sm: 5,
                                md: 4
                            }
                        }, r.createElement(P.Xa, {
                            className: "highlighter-page__queue",
                            display: P.X.Flex,
                            fullHeight: !0,
                            padding: {
                                bottom: 1
                            }
                        }, r.createElement(P.Eb, {
                            fullHeight: !0,
                            fullWidth: !0,
                            elevation: 1,
                            background: P.r.Base
                        }, r.createElement(z, {
                            activeID: this.state.activeID,
                            queue: this.state.videoSegmentQueue,
                            onChangeActiveSegment: this.onChangeActiveSegment,
                            onChangeVideo: this.onChangeVODClick,
                            onGameChange: this.onGameChange,
                            onPostSaveFinishAndNavigate: this.onPostSaveFinishAndNavigate,
                            onSaveSuccess: this.onSaveSuccess,
                            onSegmentDelete: this.onRemoveSegment,
                            onAddNewHighlight: this.onAddNewHighlight,
                            onTitleChange: this.onTitleChange
                        }), r.createElement(u.a, {
                            when: 0 !== this.state.videoSegmentQueue.length && this.state.userMadeChanges,
                            message: this.shouldAllowNavigation
                        })))), r.createElement(P.P, {
                            cols: {
                                default: 12,
                                sm: 7,
                                md: 8
                            }
                        }, r.createElement(P.Xa, {
                            fullHeight: !0,
                            padding: {
                                bottom: 1
                            }
                        }, r.createElement(P.Eb, {
                            elevation: 1,
                            background: P.r.Base,
                            fullHeight: !0
                        }, r.createElement(P.Xa, {
                            padding: 1,
                            display: P.X.Flex,
                            className: "highlighter__card-header",
                            alignItems: P.f.Center
                        }, r.createElement(P.W, {
                            fontSize: P.Ca.Size5
                        }, Object(o.d)("Source Video", "HighlighterPageComponent"))), r.createElement(P.o, {
                            ratio: P.p.Aspect16x9
                        }, r.createElement(I, {
                            videoID: this.props.data.video.id,
                            paused: this.state.shouldPlayerPause,
                            onVideoTimeChange: this.onPlayerTimeChange,
                            nextVideoOffset: this.state.requestedPlayerOffset,
                            onPauseToggled: this.onPlayerPauseToggle,
                            editing: t
                        })), r.createElement(P.Xa, {
                            padding: 1
                        }, this.renderSourceVideoInfo(this.props.data.video)))))), r.createElement(P.Xa, {
                            margin: {
                                y: 4
                            }
                        }, r.createElement(Be, {
                            activeSegment: this.getSegmentByID(this.state.activeID),
                            onStartOffsetFocus: this.onTimelineStartOffsetFocus,
                            onEndOffsetFocus: this.onTimelineEndOffsetFocus,
                            onTimelineOffsetChange: this.onTimelineOffsetChange,
                            requestPlayerTimeChange: this.requestPlayerTimeChange,
                            videoLengthSeconds: this.props.data.video.lengthSeconds,
                            currentVideoOffset: this.state.lastVideoOffset,
                            channelDisplayName: this.props.data.video.owner.displayName,
                            videoID: this.props.data.video.id,
                            videoType: this.props.data.video.broadcastType,
                            channelID: this.props.data.video.owner.id,
                            userID: this.props.data.currentUser ? this.props.data.currentUser.id : null,
                            onPauseToggled: this.onPlayerPauseToggle,
                            paused: this.state.shouldPlayerPause
                        }))))))
                    }, t.prototype.renderSourceVideoInfo = function(e) {
                        return r.createElement(P.Xa, {
                            display: P.X.Flex,
                            justifyContent: P.Wa.Between
                        }, r.createElement(P.Xa, null, r.createElement(P.W, {
                            "data-test-selector": qe.SourceVideoTitle,
                            fontSize: P.Ca.Size5,
                            italic: !e.title,
                            lines: 2,
                            ellipsis: !0
                        }, e.title || Object(o.d)("Untitled Broadcast", "HighlighterSourceVideoInfo")), r.createElement(P.Xa, {
                            display: P.X.Flex
                        }, e.publishedAt && r.createElement(P.Xa, {
                            margin: {
                                right: 1
                            }
                        }, r.createElement(P.W, {
                            "data-test-selector": qe.SourceVideoDate,
                            type: P.Vb.Span
                        }, Object(o.c)(new Date(e.publishedAt), "medium"))), e.game && r.createElement(P.Xa, {
                            display: P.X.Flex,
                            margin: {
                                right: 1
                            }
                        }, r.createElement(P.Eb, {
                            padding: {
                                right: .5
                            },
                            color: P.O.Alt2,
                            display: P.X.Flex
                        }, r.createElement(P.sb, {
                            asset: P.tb.NavGames,
                            width: 16,
                            height: 16
                        })), r.createElement(P.W, {
                            color: P.O.Alt2,
                            "data-test-selector": qe.SourceVideoGame
                        }, e.game.name)), null !== e.viewCount && r.createElement(P.Xa, {
                            display: P.X.Flex,
                            margin: {
                                right: 1
                            }
                        }, r.createElement(P.Eb, {
                            padding: {
                                right: .5
                            },
                            color: P.O.Alt2,
                            display: P.X.Flex
                        }, r.createElement(P.sb, {
                            asset: P.tb.GlyphViews,
                            width: 16,
                            height: 16
                        })), r.createElement(P.W, {
                            color: P.O.Alt2,
                            "data-test-selector": qe.SourceVideoViews
                        }, Object(o.f)(e.viewCount))))))
                    }, t.prototype.getSegmentByID = function(e) {
                        return this.state.videoSegmentQueue.find(function(t) {
                            return t.tempID === e
                        }) || null
                    }, t.prototype.formatSourceVideoFields = function(e, t) {
                        var n = i.__assign({}, e, t);
                        return {
                            description: n.description || "",
                            game: n.game,
                            language: n.language,
                            tags: n.tags,
                            title: Object(o.d)("Highlight: {videoTitle}", {
                                videoTitle: n.title
                            }, "HighlighterPageComponent")
                        }
                    }, t.prototype.videoSegmentFromSource = function(e) {
                        return {
                            tempID: Ge(),
                            sourceVideoDetails: {
                                id: e.id,
                                lengthSeconds: e.lengthSeconds,
                                title: e.title
                            },
                            startOffsetSeconds: je(e.lengthSeconds),
                            endOffsetSeconds: Xe(e.lengthSeconds),
                            metadata: this.formatSourceVideoFields(e)
                        }
                    }, t.prototype.discardChangesMessage = function() {
                        return Object(o.d)("Your highlights have not been created. Are you sure you want to leave?", "HighlighterPageComponent")
                    }, t.prototype.activeOffsetWorkaround = function() {
                        var e = {
                                startOffset: 0,
                                endOffset: 0
                            },
                            t = this.getSegmentByID(this.state.activeID);
                        return t && (e = {
                            startOffset: t.startOffsetSeconds,
                            endOffset: t.endOffsetSeconds
                        }), e
                    }, t
                }(r.Component),
                Ze = Object(f.compose)(Object(g.a)(ze, {
                    options: function(e) {
                        return {
                            variables: {
                                videoID: e.match.params.videoID
                            }
                        }
                    }
                }), Object(D.b)("HighlighterPage", {
                    destination: k.a.VideoManagerHighlighter
                }), Object(v.a)({
                    location: y.PageviewLocation.VideoManagerHighlighter,
                    properties: function(e) {
                        var t = null;
                        return e.data.video && e.data.video.owner && e.data.video.owner.id && (t = Number(e.data.video.owner.id)), {
                            channel_id: t
                        }
                    },
                    skip: function(e) {
                        return e.data.loading
                    }
                }))(Ye),
                Je = n("cZKs"),
                et = n("YJDT");
            ! function(e) {
                e.ARCHIVE = "ARCHIVE", e.HIGHLIGHT = "HIGHLIGHT", e.PAST_PREMIERE = "PAST_PREMIERE", e.PREMIERE_UPLOAD = "PREMIERE_UPLOAD", e.UPLOAD = "UPLOAD"
            }(Ke || (Ke = {}));
            var tt, nt = n("o4ss");
            n("al25");
            ! function(e) {
                e[e.VideoCard = 0] = "VideoCard"
            }(tt || (tt = {}));
            var at = 200,
                it = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {}, t.onLoadMoreHandler = function() {
                            if (!(t.props.data && t.props.data.user && t.props.data.user.searchVideos && t.props.data.user.searchVideos.edges)) return Promise.reject(new Error("Encountered unexpected null value for user or searchVideos, cannot load more."));
                            var e = t.props.data.user.searchVideos.edges.length - 1,
                                n = t.props.data.user.searchVideos.edges[e];
                            if (!n) return Promise.reject(new Error("Encountered unexpected null value for last video, cannot load more."));
                            var a = n.cursor;
                            return t.props.data.fetchMore({
                                query: nt,
                                variables: {
                                    creatorLogin: t.props.channelName,
                                    after: a
                                },
                                updateQuery: rt
                            }).then(function() {})
                        }, t.onSearchInputChangeHandler = function(e) {
                            var n = e.currentTarget.value;
                            t.state.searchChangeTimeoutID && clearTimeout(t.state.searchChangeTimeoutID);
                            var a = setTimeout(function() {
                                return i.__awaiter(t, void 0, void 0, function() {
                                    return i.__generator(this, function(e) {
                                        switch (e.label) {
                                            case 0:
                                                return e.trys.push([0, , 2, 3]), [4, this.props.data.refetch({
                                                    creatorLogin: this.props.channelName,
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
                            }, at);
                            t.setState({
                                searchChangeTimeoutID: a
                            })
                        }, t.onVideoClick = function(e) {
                            o.p.history.push("/" + t.props.channelName + "/manager/highlighter/" + e.id), t.props.closeModal()
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = !!(this.props.data.user && this.props.data.user.searchVideos && this.props.data.user.searchVideos.pageInfo && this.props.data.user.searchVideos.pageInfo.hasNextPage);
                        return r.createElement(P.i, {
                            type: P.n.FadeIn,
                            delay: P.j.Medium,
                            duration: P.k.Medium,
                            enabled: !0
                        }, r.createElement(P.Eb, {
                            background: P.r.Base,
                            className: "highlighter-vod-selector",
                            display: P.X.Flex,
                            flexDirection: P.Aa.Column,
                            padding: {
                                bottom: 1
                            }
                        }, r.createElement(P.Xa, {
                            padding: {
                                x: 3,
                                y: 2
                            }
                        }, r.createElement(P.W, {
                            fontSize: P.Ca.Size4
                        }, Object(o.d)("Select a Past Broadcast", "HighlighterVODSelectModal")), r.createElement(P.Xa, {
                            padding: {
                                y: 1
                            }
                        }, r.createElement(P.Ea, {
                            label: Object(o.d)("Search your videos", "HighlighterVODSelectModal")
                        }, r.createElement(P.vb, {
                            onChange: this.onSearchInputChangeHandler,
                            placeholder: Object(o.d)("Filter by video title", "HighlighterVODSelectModal")
                        })))), r.createElement(h.b, {
                            suppressScrollX: !0
                        }, r.createElement(P.Xa, {
                            display: P.X.Flex,
                            flexDirection: P.Aa.Column
                        }, this.renderVideos(), r.createElement(h.a, {
                            enabled: e,
                            loadMore: this.onLoadMoreHandler
                        }))), r.createElement(Je.a, {
                            closeOnBackdropClick: !0
                        })))
                    }, t.prototype.renderVideos = function() {
                        var e = this;
                        if (this.state.searchChangeTimeoutID || this.props.data.loading) return r.createElement(P.Za, {
                            fillContent: !0,
                            delay: 500
                        });
                        if (this.props.data.error || !this.props.data.user || !this.props.data.user.searchVideos) return r.createElement(P.Xa, {
                            alignSelf: P.g.Center,
                            justifyContent: P.Wa.Center
                        }, Object(o.d)("There was an error searching your videos. Please try again.", "HighlighterVODSelectModal"));
                        var t = this.props.data.user.searchVideos.edges && this.props.data.user.searchVideos.edges.map(function(e) {
                            return e && e.node
                        }).filter(function(e) {
                            return null !== e && e.broadcastType === Ke.ARCHIVE
                        });
                        return t && 0 !== t.length ? t.map(function(t, n) {
                            var a = !(!t || t.id !== e.props.currentVideoID);
                            return r.createElement(P.Ua, {
                                key: n,
                                onClick: e.onVideoClick.bind(e, t),
                                "data-test-selector": tt.VideoCard,
                                disabled: a
                            }, r.createElement(P.Eb, {
                                alignItems: P.f.Center,
                                display: P.X.Flex,
                                flexDirection: P.Aa.Row,
                                flexGrow: 1,
                                padding: {
                                    x: 3,
                                    y: .5
                                }
                            }, r.createElement(P.Xa, {
                                flexGrow: 1,
                                flexShrink: 1,
                                padding: {
                                    right: .5
                                },
                                ellipsis: !0
                            }, r.createElement(et.a, {
                                video: t,
                                selected: a
                            }))))
                        }) : r.createElement(P.Xa, {
                            alignSelf: P.g.Center,
                            justifyContent: P.Wa.Center
                        }, Object(o.d)("No results found.", "HighlighterVODSelectModal"))
                    }, t
                }(r.Component),
                rt = function(e, t) {
                    if (!t.fetchMoreResult) return e;
                    var n = t.fetchMoreResult;
                    if (!n.user || !n.user.searchVideos) return e;
                    var a = (n.user.searchVideos.edges || []).filter(function(e) {
                        return null !== e
                    });
                    return {
                        user: i.__assign({}, n.user, {
                            searchVideos: i.__assign({}, n.user.searchVideos, {
                                edges: Object(x.c)(e.user.searchVideos.edges, a)
                            })
                        }),
                        collection: e.collection
                    }
                },
                st = Object(g.a)(nt, {
                    options: function(e) {
                        return {
                            variables: {
                                creatorLogin: e.channelName
                            }
                        }
                    }
                })(it);
            var ot = Object(s.connect)(null, function(e) {
                return Object(f.bindActionCreators)({
                    closeModal: c.c
                }, e)
            })(st);
            var lt = Object(s.connect)(null, function(e, t) {
                return {
                    showSelectVODModal: function() {
                        e(Object(c.d)(ot, {
                            channelName: t.match.params.channelName,
                            currentVideoID: t.match.params.videoID
                        }))
                    }
                }
            })(function(e) {
                return r.createElement(d.a, {
                    ownerLogin: e.match.params.channelName,
                    permittedRoles: {
                        editor: !0,
                        staff: !0
                    }
                }, function(t) {
                    var n = t.loading,
                        a = t.permitted;
                    return n || a ? r.createElement(Ze, i.__assign({}, e)) : r.createElement(l.a, {
                        message: Object(o.d)("Something went wrong. Please try again.", "HighlighterErrorPage")
                    })
                })
            });
            n.d(t, "HighlighterPage", function() {
                return lt
            })
        },
        hudZ: function(e, t, n) {},
        "ig/l": function(e, t, n) {
            "use strict";
            var a, i, r = n("6FuP"),
                s = n("mrSG"),
                o = n("TSYQ"),
                l = n("q1tI"),
                d = n("uy8m"),
                c = n("mzKw"),
                u = n("Ue10");
            n("hudZ");
            ! function(e) {
                e.LeftHandle = "left-handle", e.Overlay = "overlay", e.RightHandle = "right-handle", e.SelectedSection = "section", e.Slider = "slider"
            }(a || (a = {})),
            function(e) {
                e.LeftHandle = "leftHandle", e.Slider = "slider", e.RightHandle = "rightHandle"
            }(i || (i = {}));
            var p = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.leftHandleRef = null, n.containerRef = null, n.rightHandleRef = null, n.sliderHandleRef = null, n.getHandleHandlers = function(e) {
                        switch (e) {
                            case i.LeftHandle:
                                return {
                                    handleRef: n.leftHandleRef,
                                    mouseMoveHandler: n.onLeftMouseMove,
                                    mouseUpHandler: n.onLeftMouseUp
                                };
                            case i.RightHandle:
                                return {
                                    handleRef: n.rightHandleRef,
                                    mouseMoveHandler: n.onRightMouseMove,
                                    mouseUpHandler: n.onRightMouseUp
                                };
                            case i.Slider:
                                return {
                                    handleRef: n.sliderHandleRef,
                                    mouseMoveHandler: n.onSliderMouseMove,
                                    mouseUpHandler: n.onSliderMouseUp
                                };
                            default:
                                return e
                        }
                    }, n.addHandleListeners = function(e) {
                        var t = n.getHandleHandlers(e),
                            a = t.handleRef,
                            i = t.mouseMoveHandler,
                            r = t.mouseUpHandler;
                        a && (n.preventUserSelect(), a.ownerDocument.addEventListener("mousemove", i), a.ownerDocument.addEventListener("mouseup", r))
                    }, n.removeHandleListeners = function(e) {
                        var t = n.getHandleHandlers(e),
                            a = t.handleRef,
                            i = t.mouseMoveHandler,
                            r = t.mouseUpHandler;
                        a && (n.allowUserSelect(), a.ownerDocument.removeEventListener("mousemove", i), a.ownerDocument.removeEventListener("mouseup", r))
                    }, n.leftHandleRefHandler = function(e) {
                        n.leftHandleRef = e
                    }, n.onLeftMouseDown = function(e) {
                        if (n.shouldHandleClick(e.button)) {
                            var t = e.clientX;
                            n.setState(function(e) {
                                return {
                                    previousPosition: t,
                                    previousBaseValue: e.startOffset
                                }
                            }, function() {
                                n.props.onLeftDragStart && n.props.onLeftDragStart({
                                    startOffset: n.state.startOffset,
                                    endOffset: n.state.endOffset
                                }), n.addHandleListeners(i.LeftHandle)
                            })
                        }
                    }, n.onLeftMouseUp = function() {
                        n.setState({
                            previousPosition: null,
                            previousBaseValue: null
                        }, function() {
                            n.props.onLeftDragEnd && n.props.onLeftDragEnd({
                                startOffset: n.state.startOffset,
                                endOffset: n.state.endOffset
                            }), n.removeHandleListeners(i.LeftHandle)
                        })
                    }, n.onLeftMouseMove = function(e) {
                        var t = e.clientX,
                            a = void 0 === n.props.minLength ? 0 : n.props.minLength,
                            i = void 0 === n.props.maxLength ? n.props.maxOffset - n.props.minOffset : n.props.maxLength;
                        n.setState(function(e, r) {
                            return {
                                startOffset: n.calculateOffset(t, {
                                    startBoundary: Math.max(r.minOffset, e.endOffset - i),
                                    endBoundary: Math.min(e.endOffset, e.endOffset - a),
                                    currentValue: e.startOffset
                                }),
                                endOffset: e.endOffset
                            }
                        }, function() {
                            n.props.onLeftDrag && n.props.onLeftDrag({
                                startOffset: n.state.startOffset,
                                endOffset: n.state.endOffset
                            })
                        })
                    }, n.rightHandleRefHandler = function(e) {
                        n.rightHandleRef = e
                    }, n.onRightMouseDown = function(e) {
                        if (n.shouldHandleClick(e.button)) {
                            var t = e.clientX;
                            n.setState(function(e) {
                                return {
                                    previousPosition: t,
                                    previousBaseValue: e.endOffset
                                }
                            }, function() {
                                n.props.onRightDragStart && n.props.onRightDragStart({
                                    startOffset: n.state.startOffset,
                                    endOffset: n.state.endOffset
                                }), n.addHandleListeners(i.RightHandle)
                            })
                        }
                    }, n.onRightMouseUp = function() {
                        n.setState({
                            previousPosition: null,
                            previousBaseValue: null
                        }, function() {
                            n.props.onRightDragEnd && n.props.onRightDragEnd({
                                startOffset: n.state.startOffset,
                                endOffset: n.state.endOffset
                            }), n.removeHandleListeners(i.RightHandle)
                        })
                    }, n.onRightMouseMove = function(e) {
                        var t = e.clientX,
                            a = void 0 === n.props.minLength ? 0 : n.props.minLength,
                            i = void 0 === n.props.maxLength ? n.props.maxOffset - n.props.minOffset : n.props.maxLength;
                        n.setState(function(e, r) {
                            return {
                                startOffset: e.startOffset,
                                endOffset: n.calculateOffset(t, {
                                    startBoundary: Math.max(r.minOffset, e.startOffset + a),
                                    endBoundary: Math.min(r.maxOffset, e.startOffset + i),
                                    currentValue: e.endOffset
                                })
                            }
                        }, function() {
                            n.props.onRightDrag && n.props.onRightDrag({
                                startOffset: n.state.startOffset,
                                endOffset: n.state.endOffset
                            })
                        })
                    }, n.sliderHandleRefHandler = function(e) {
                        n.sliderHandleRef = e
                    }, n.onSliderMouseDown = function(e) {
                        if (n.shouldHandleClick(e.button)) {
                            var t = e.clientX;
                            n.setState(function(e) {
                                return {
                                    previousPosition: t,
                                    previousBaseValue: e.startOffset
                                }
                            }, function() {
                                n.props.onSliderDragStart && n.props.onSliderDragStart({
                                    startOffset: n.state.startOffset,
                                    endOffset: n.state.endOffset
                                }), n.addHandleListeners(i.Slider)
                            })
                        }
                    }, n.onSliderMouseUp = function() {
                        n.setState({
                            previousPosition: null,
                            previousBaseValue: null
                        }, function() {
                            n.props.onSliderDragEnd && n.props.onSliderDragEnd({
                                startOffset: n.state.startOffset,
                                endOffset: n.state.endOffset
                            }), n.removeHandleListeners(i.Slider)
                        })
                    }, n.onSliderMouseMove = function(e) {
                        var t = e.clientX;
                        n.setState(function(e, a) {
                            var i = e.endOffset - e.startOffset,
                                r = n.calculateOffset(t, {
                                    startBoundary: a.minOffset,
                                    endBoundary: a.maxOffset - i,
                                    currentValue: e.startOffset
                                });
                            return {
                                startOffset: r,
                                endOffset: r + i
                            }
                        }, function() {
                            n.props.onSliderDrag && n.props.onSliderDrag({
                                startOffset: n.state.startOffset,
                                endOffset: n.state.endOffset
                            })
                        })
                    }, n.calculateOffset = function(e, t) {
                        if (null === n.state.previousPosition || null === n.state.previousBaseValue) return t.currentValue;
                        var a = n.convertPixelsToOffsetUnits(e - n.state.previousPosition),
                            i = n.state.previousBaseValue + a;
                        return i < t.startBoundary ? t.startBoundary : i > t.endBoundary ? t.endBoundary : i
                    }, n.convertPixelsToOffsetUnits = function(e) {
                        return n.containerRef ? 0 === n.containerRef.clientWidth ? 0 : e * ((n.props.maxOffset - n.props.minOffset) / n.containerRef.clientWidth) : 0
                    }, n.addFocus = function() {
                        n.setState({
                            showFocus: !0
                        })
                    }, n.removeFocus = function() {
                        n.setState({
                            showFocus: !1
                        })
                    }, n.preventUserSelect = function() {
                        document.body.style.userSelect = "none"
                    }, n.allowUserSelect = function() {
                        document.body.style.userSelect = "auto"
                    }, n.handleContainerRef = function(e) {
                        n.containerRef = e
                    }, n.state = {
                        startOffset: t.startOffset,
                        endOffset: t.endOffset,
                        previousBaseValue: null,
                        previousPosition: null,
                        showFocus: !1
                    }, n
                }
                return s.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    e.startOffset === this.state.startOffset && e.endOffset === this.state.endOffset || this.setState({
                        startOffset: e.startOffset,
                        endOffset: e.endOffset
                    })
                }, t.prototype.render = function() {
                    var e = function(e) {
                            var t = e.maxOffset - e.minOffset,
                                n = (e.endOffset - e.startOffset) / t * 100,
                                a = e.startOffset / t * 100;
                            return {
                                width: "calc(" + n + "% + " + 2 * e.handleSize + "px)",
                                marginLeft: "calc(" + a + "% - " + e.handleSize + "px)"
                            }
                        }({
                            handleSize: this.props.handleSize ? this.props.handleSize : c.c.Small,
                            minOffset: this.props.minOffset,
                            maxOffset: this.props.maxOffset,
                            startOffset: this.state.startOffset,
                            endOffset: this.state.endOffset
                        }),
                        t = o("draggable-slider__wrapper", {
                            "draggable-slider__wrapper--transition": this.props.showTransition
                        }),
                        n = o("draggable-slider__content", {
                            "draggable-slider__content--blue": this.props.color === r.a.Blue,
                            "draggable-slider__content--orange": this.props.color === r.a.Orange,
                            "draggable-slider__content--focus": this.props.isSliderEnabled && this.state.showFocus
                        });
                    return l.createElement("div", {
                        ref: this.handleContainerRef
                    }, l.createElement(u.Pa, {
                        flexGrow: 0,
                        flexShrink: 0
                    }, l.createElement("div", {
                        className: t,
                        "data-test-selector": a.SelectedSection,
                        style: e
                    }, l.createElement(u.Xa, {
                        className: "draggable-slider__container",
                        position: u.jb.Relative,
                        display: u.X.Flex,
                        justifyContent: u.Wa.Center
                    }, l.createElement(u.Xa, {
                        position: u.jb.Absolute,
                        attachTop: !0,
                        fullWidth: !0
                    }, l.createElement(u.Xa, {
                        position: u.jb.Relative,
                        attachTop: !0,
                        fullWidth: !0,
                        display: u.X.Flex,
                        justifyContent: u.Wa.Center
                    }, l.createElement(u.Xa, {
                        position: u.jb.Absolute,
                        attachBottom: !0,
                        margin: {
                            bottom: 1
                        },
                        zIndex: u.ic.Above
                    }, this.props.popover))), l.createElement(u.Eb, {
                        className: n,
                        fullWidth: !0,
                        display: u.X.Flex,
                        justifyContent: u.Wa.Between
                    }, l.createElement(c.a, {
                        "data-test-selector": a.LeftHandle,
                        color: this.props.color,
                        handlePosition: c.b.Left,
                        onRef: this.leftHandleRefHandler,
                        onMouseDown: this.onLeftMouseDown,
                        size: this.props.handleSize
                    }), this.renderSliderContent(), l.createElement(c.a, {
                        "data-test-selector": a.RightHandle,
                        color: this.props.color,
                        handlePosition: c.b.Right,
                        onRef: this.rightHandleRefHandler,
                        onMouseDown: this.onRightMouseDown,
                        size: this.props.handleSize
                    }))))))
                }, t.prototype.renderSliderContent = function() {
                    var e = this.props.children;
                    this.props.isSliderEnabled && (e = l.createElement("div", {
                        onMouseDown: this.onSliderMouseDown,
                        onMouseEnter: this.addFocus,
                        onMouseLeave: this.removeFocus,
                        ref: this.sliderHandleRefHandler,
                        "data-test-selector": a.Slider
                    }, this.props.children));
                    var t = o("draggable-slider__overlay", {
                        "draggable-slider__overlay--sliding-enabled": this.props.isSliderEnabled,
                        "draggable-slider__overlay--blue": this.props.color === r.a.Blue,
                        "draggable-slider__overlay--orange": this.props.color === r.a.Orange
                    });
                    return l.createElement(u.Xa, {
                        className: t,
                        display: u.X.InlineBlock,
                        overflow: u.cb.Hidden,
                        "data-test-selector": a.Overlay,
                        fullWidth: !0
                    }, e)
                }, t.prototype.shouldHandleClick = function(e) {
                    return e === d.a.Left
                }, t
            }(l.Component);
            n.d(t, "c", function() {
                return r.a
            }), n.d(t, "a", function() {
                return p
            }), n.d(t, !1, function() {}), n.d(t, "b", function() {
                return c.c
            })
        },
        jO72: function(e, t, n) {},
        lBPO: function(e, t, n) {},
        lMdv: function(e, t, n) {},
        meiF: function(e, t, n) {},
        mzKw: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return a
            }), n.d(t, "c", function() {
                return r
            }), n.d(t, "a", function() {
                return c
            });
            var a, i, r, s = n("TSYQ"),
                o = n("q1tI"),
                l = n("6FuP"),
                d = n("Ue10");
            n("dW6f");
            ! function(e) {
                e[e.Left = 0] = "Left", e[e.Right = 1] = "Right"
            }(a || (a = {})),
            function(e) {
                e[e.Handle = 0] = "Handle"
            }(i || (i = {})),
            function(e) {
                e[e.Small = 15] = "Small", e[e.Medium = 25] = "Medium"
            }(r || (r = {}));
            var c = function(e) {
                var t = s("draggable-slider-handle", {
                    "draggable-slider-handle--left": e.handlePosition === a.Left,
                    "draggable-slider-handle--right": e.handlePosition === a.Right,
                    "draggable-slider-handle--blue": e.color === l.a.Blue,
                    "draggable-slider-handle--orange": e.color === l.a.Orange
                });
                return o.createElement(d.Pa, {
                    flexGrow: 0,
                    flexShrink: 0,
                    className: t,
                    display: d.X.Flex,
                    fullHeight: !0
                }, o.createElement("div", {
                    "data-test-selector": i.Handle,
                    onMouseDown: e.onMouseDown,
                    ref: e.onRef
                }, o.createElement(d.sb, {
                    asset: d.tb.DragHandle,
                    width: e.size
                })))
            }
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
        o4ss: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "HighlighterVODSelector_SearchCreatorVideos"
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
                                        value: "login"
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
                                            value: "20"
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
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "broadcastType"
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
                    end: 369
                }
            };
            n.loc.source = {
                body: "query HighlighterVODSelector_SearchCreatorVideos($creatorLogin: String! $after: Cursor $search: VideoConnectionSearchParams) {\nuser(login: $creatorLogin) {\nid\nlogin\nsearchVideos(first: 20 after: $after search: $search) {\nedges {\ncursor\nnode {\nid\nlengthSeconds\npreviewThumbnailURL(width: 160 height: 90)\npublishedAt\ntitle\nbroadcastType\n}\n}\npageInfo {\nhasNextPage\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        pZqW: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "HighlighterEditors"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "channelID"
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
                                value: "includeEditors"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Boolean"
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
                                        value: "channelID"
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
                                        value: "editors"
                                    },
                                    arguments: [],
                                    directives: [{
                                        kind: "Directive",
                                        name: {
                                            kind: "Name",
                                            value: "include"
                                        },
                                        arguments: [{
                                            kind: "Argument",
                                            name: {
                                                kind: "Name",
                                                value: "if"
                                            },
                                            value: {
                                                kind: "Variable",
                                                name: {
                                                    kind: "Name",
                                                    value: "includeEditors"
                                                }
                                            }
                                        }]
                                    }],
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
                    end: 163
                }
            };
            n.loc.source = {
                body: "query HighlighterEditors($channelID: ID! $includeEditors: Boolean!) {\nuser(id: $channelID) {\nid\neditors @include(if: $includeEditors) {\nedges {\nnode {\nid\n}\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        tK6h: function(e, t, n) {},
        uAdw: function(e, t, n) {},
        uQjj: function(e, t, n) {},
        uy8m: function(e, t, n) {
            "use strict";
            var a;
            n.d(t, "a", function() {
                    return a
                }),
                function(e) {
                    e[e.Left = 0] = "Left", e[e.Middle = 1] = "Middle", e[e.Right = 2] = "Right", e[e.Back = 3] = "Back", e[e.Forward = 4] = "Forward"
                }(a || (a = {}))
        },
        x4lo: function(e, t, n) {},
        "y8/E": function(e, t) {},
        z3cX: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return l
            });
            var a, i = n("q1tI"),
                r = n("/7QA"),
                s = n("hyVY"),
                o = n("Ue10");
            ! function(e) {
                e[e.Metadata = 0] = "Metadata", e[e.Overlay = 1] = "Overlay"
            }(a || (a = {}));
            var l = function(e) {
                    var t, n = Object(s.b)(e.video.lengthSeconds);
                    return t = e.video.publishedAt ? i.createElement(o.W, {
                        fontSize: o.Ca.Size7
                    }, Object(r.c)(new Date(e.video.publishedAt), "medium"), i.createElement("span", null, " · "), n) : i.createElement(o.W, {
                        fontSize: o.Ca.Size7
                    }, n), i.createElement(o.Xa, {
                        alignItems: o.f.Stretch,
                        display: o.X.Flex,
                        flexDirection: o.Aa.Row,
                        flexGrow: 1,
                        padding: .5
                    }, i.createElement(o.Xa, {
                        flexGrow: 0,
                        flexShrink: 0,
                        position: o.jb.Relative
                    }, i.createElement(o.I, {
                        alt: e.video.title,
                        aspect: o.p.Aspect16x9,
                        size: o.J.Size8,
                        src: e.video.previewThumbnailURL
                    }), d(e.selected)), i.createElement(o.Xa, {
                        alignItems: o.f.Start,
                        display: o.X.Flex,
                        flexDirection: o.Aa.Column,
                        flexGrow: 1,
                        flexShrink: 1,
                        justifyContent: o.Wa.Center,
                        padding: {
                            x: 1
                        },
                        overflow: o.cb.Hidden
                    }, i.createElement(o.Xa, {
                        fullWidth: !0,
                        overflow: o.cb.Hidden
                    }, i.createElement(o.W, {
                        type: o.Vb.H3,
                        fontSize: o.Ca.Size6,
                        title: e.video.title,
                        ellipsis: !0
                    }, e.video.title)), i.createElement("div", {
                        "data-test-selector": a.Metadata
                    }, t)))
                },
                d = function(e) {
                    return e ? i.createElement(o.Eb, {
                        background: o.r.Overlay,
                        attachTop: !0,
                        attachLeft: !0,
                        fullWidth: !0,
                        fullHeight: !0,
                        position: o.jb.Absolute,
                        alignItems: o.f.Center,
                        "data-test-selector": a.Overlay,
                        display: o.X.Flex,
                        flexDirection: o.Aa.Column,
                        justifyContent: o.Wa.Center
                    }, i.createElement(o.sb, {
                        asset: o.tb.Check
                    })) : null
                }
        },
        zAC8: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "Highlighter_CreateHighlights"
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
                                    value: "CreateVideoHighlightInput"
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
                                value: "createVideoHighlight"
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
                                        value: "highlight"
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
                                                value: "lengthSeconds"
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
                    end: 154
                }
            };
            n.loc.source = {
                body: "mutation Highlighter_CreateHighlights($input: CreateVideoHighlightInput!) {\ncreateVideoHighlight(input: $input) {\nhighlight {\nid\ntitle\nlengthSeconds\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        }
    }
]);