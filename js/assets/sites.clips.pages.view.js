(window.webpackJsonp = window.webpackJsonp || []).push([
    [99], {
        "+GMQ": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ClipsViewCount"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "slug"
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
                                value: "clip"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "slug"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "slug"
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
                                        value: "viewCount"
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
                    end: 71
                }
            };
            n.loc.source = {
                body: "query ClipsViewCount($slug: ID!) {\nclip(slug: $slug) {\nid\nviewCount\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "+GrQ": function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("q1tI"),
                a = n("/7QA"),
                o = n("yR8l"),
                s = n("2xye"),
                l = n("GnwI"),
                d = "https://help.twitch.tv/customer/portal/articles/2918323-clip-champs-guide",
                c = function(e) {
                    var t = e.type;
                    a.p.tracking.track(s.SpadeEventType.ClipChampHelpClick, {
                        target_url: d,
                        type: t.toLowerCase()
                    })
                },
                u = (n("6llN"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onClick = function() {
                            c({
                                type: t.props.pageType
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return r.createElement("a", {
                            href: d,
                            onClick: this.onClick,
                            target: "_blank"
                        }, r.createElement("img", {
                            alt: Object(a.d)("Power Clipper badge", "ClipsCurator"),
                            className: "clips-champ-badge-img",
                            src: "https://s.jtvnw.net/jtv_user_pictures/hosted_images/clipchampbadge"
                        }))
                    }, t
                }(r.Component)),
                p = n("OTul"),
                m = n("Ue10"),
                h = n("xza4"),
                f = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.reportInteractive()
                    }, t.prototype.componentDidUpdate = function() {
                        this.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this.props.data.clip;
                        if (!e || !e.curator || !e.curator.login || this.props.data.loading) return r.createElement(m.Xa, null, this.renderPlaceholders());
                        var t = Object(p.c)(e.curator.login, {
                            tt_medium: "clips_web",
                            tt_content: "curator_name"
                        });
                        return r.createElement(m.Xa, {
                            ellipsis: this.props.ellipsis
                        }, e.champBadge && e.champBadge.id && r.createElement(m.Xa, {
                            margin: {
                                right: .5
                            },
                            display: m.X.InlineBlock
                        }, r.createElement(u, {
                            pageType: s.PageviewLocation.ClipsViewing
                        })), r.createElement(m.Pa, {
                            display: m.X.Inline
                        }, r.createElement(m.W, {
                            fontSize: this.props.fontSize ? this.props.fontSize : m.Ca.Size5
                        }, Object(a.d)("Clipped by {curatorName}", {
                            curatorName: r.createElement("a", {
                                href: t,
                                target: "_blank"
                            }, e.curator.displayName)
                        }, "ClipsCurator"))))
                    }, t.prototype.reportInteractive = function() {
                        this.props.data.clip && this.props.data.clip.curator && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.renderPlaceholders = function() {
                        return r.createElement(m.i, {
                            type: m.n.FadeIn,
                            duration: m.k.Long,
                            delay: m.j.Medium,
                            enabled: !0
                        }, r.createElement(m.W, {
                            fontSize: this.props.fontSize ? this.props.fontSize : m.Ca.Size5
                        }, r.createElement(m.ib, {
                            lineCount: 1,
                            width: 80
                        })))
                    }, t = i.__decorate([Object(l.b)("ClipsCurator"), Object(o.a)(h)], t)
                }(r.Component);
            n.d(t, "a", function() {
                return f
            })
        },
        "+Irf": function(e, t, n) {
            var i = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ClipsChatReplay"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "slug"
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
                                value: "videoOffsetSeconds"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Int"
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
                                value: "clip"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "slug"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "slug"
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
                                        value: "broadcaster"
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
                                        value: "durationSeconds"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "video"
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
                                                        value: "broadcastBadges"
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
                                                                value: "clickAction"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            alias: {
                                                                kind: "Name",
                                                                value: "image1x"
                                                            },
                                                            name: {
                                                                kind: "Name",
                                                                value: "imageURL"
                                                            },
                                                            arguments: [{
                                                                kind: "Argument",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "size"
                                                                },
                                                                value: {
                                                                    kind: "EnumValue",
                                                                    value: "NORMAL"
                                                                }
                                                            }],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            alias: {
                                                                kind: "Name",
                                                                value: "image2x"
                                                            },
                                                            name: {
                                                                kind: "Name",
                                                                value: "imageURL"
                                                            },
                                                            arguments: [{
                                                                kind: "Argument",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "size"
                                                                },
                                                                value: {
                                                                    kind: "EnumValue",
                                                                    value: "DOUBLE"
                                                                }
                                                            }],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            alias: {
                                                                kind: "Name",
                                                                value: "image4x"
                                                            },
                                                            name: {
                                                                kind: "Name",
                                                                value: "imageURL"
                                                            },
                                                            arguments: [{
                                                                kind: "Argument",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "size"
                                                                },
                                                                value: {
                                                                    kind: "EnumValue",
                                                                    value: "QUADRUPLE"
                                                                }
                                                            }],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "setID"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "version"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }]
                                                    }
                                                }, {
                                                    kind: "FragmentSpread",
                                                    name: {
                                                        kind: "Name",
                                                        value: "cheer"
                                                    },
                                                    directives: []
                                                }]
                                            }
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "comments"
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
                                                    value: "contentOffsetSeconds"
                                                },
                                                value: {
                                                    kind: "Variable",
                                                    name: {
                                                        kind: "Name",
                                                        value: "videoOffsetSeconds"
                                                    }
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
                                                                        value: "commenter"
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
                                                                                value: "chatColor"
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
                                                                        value: "contentOffsetSeconds"
                                                                    },
                                                                    arguments: [],
                                                                    directives: []
                                                                }, {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "message"
                                                                    },
                                                                    arguments: [],
                                                                    directives: [],
                                                                    selectionSet: {
                                                                        kind: "SelectionSet",
                                                                        selections: [{
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "fragments"
                                                                            },
                                                                            arguments: [],
                                                                            directives: [],
                                                                            selectionSet: {
                                                                                kind: "SelectionSet",
                                                                                selections: [{
                                                                                    kind: "Field",
                                                                                    name: {
                                                                                        kind: "Name",
                                                                                        value: "text"
                                                                                    },
                                                                                    arguments: [],
                                                                                    directives: []
                                                                                }, {
                                                                                    kind: "Field",
                                                                                    name: {
                                                                                        kind: "Name",
                                                                                        value: "emote"
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
                                                                                                value: "emoteID"
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
                                                                                value: "userBadges"
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
                                                                                        value: "setID"
                                                                                    },
                                                                                    arguments: [],
                                                                                    directives: []
                                                                                }, {
                                                                                    kind: "Field",
                                                                                    name: {
                                                                                        kind: "Name",
                                                                                        value: "version"
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
                                                                                    alias: {
                                                                                        kind: "Name",
                                                                                        value: "image1x"
                                                                                    },
                                                                                    name: {
                                                                                        kind: "Name",
                                                                                        value: "imageURL"
                                                                                    },
                                                                                    arguments: [{
                                                                                        kind: "Argument",
                                                                                        name: {
                                                                                            kind: "Name",
                                                                                            value: "size"
                                                                                        },
                                                                                        value: {
                                                                                            kind: "EnumValue",
                                                                                            value: "NORMAL"
                                                                                        }
                                                                                    }],
                                                                                    directives: []
                                                                                }, {
                                                                                    kind: "Field",
                                                                                    alias: {
                                                                                        kind: "Name",
                                                                                        value: "image2x"
                                                                                    },
                                                                                    name: {
                                                                                        kind: "Name",
                                                                                        value: "imageURL"
                                                                                    },
                                                                                    arguments: [{
                                                                                        kind: "Argument",
                                                                                        name: {
                                                                                            kind: "Name",
                                                                                            value: "size"
                                                                                        },
                                                                                        value: {
                                                                                            kind: "EnumValue",
                                                                                            value: "DOUBLE"
                                                                                        }
                                                                                    }],
                                                                                    directives: []
                                                                                }, {
                                                                                    kind: "Field",
                                                                                    alias: {
                                                                                        kind: "Name",
                                                                                        value: "image4x"
                                                                                    },
                                                                                    name: {
                                                                                        kind: "Name",
                                                                                        value: "imageURL"
                                                                                    },
                                                                                    arguments: [{
                                                                                        kind: "Argument",
                                                                                        name: {
                                                                                            kind: "Name",
                                                                                            value: "size"
                                                                                        },
                                                                                        value: {
                                                                                            kind: "EnumValue",
                                                                                            value: "QUADRUPLE"
                                                                                        }
                                                                                    }],
                                                                                    directives: []
                                                                                }, {
                                                                                    kind: "Field",
                                                                                    name: {
                                                                                        kind: "Name",
                                                                                        value: "clickAction"
                                                                                    },
                                                                                    arguments: [],
                                                                                    directives: []
                                                                                }, {
                                                                                    kind: "Field",
                                                                                    name: {
                                                                                        kind: "Name",
                                                                                        value: "clickURL"
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
                                                                        value: "state"
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
                    end: 806
                }
            };
            i.loc.source = {
                body: '#import "twilight/features/chat/models/cheer-fragment.gql"\nquery ClipsChatReplay($slug: ID! $videoOffsetSeconds: Int $cursor: Cursor) {\nclip(slug: $slug) {\nid\nbroadcaster {\nid\ndisplayName\n}\ncurator {\nid\nlogin\n}\ndurationSeconds\nvideo {\nid\nowner {\nid\nbroadcastBadges {\nid\nclickAction\nimage1x: imageURL(size: NORMAL)\nimage2x: imageURL(size: DOUBLE)\nimage4x: imageURL(size: QUADRUPLE)\nsetID\nversion\n}\n...cheer\n}\ncomments(first: 100 contentOffsetSeconds: $videoOffsetSeconds after: $cursor) {\nedges {\ncursor\nnode {\nid\ncommenter {\nid\nchatColor\ndisplayName\nlogin\n}\ncontentOffsetSeconds\nmessage {\nfragments {\ntext\nemote {\nid\nemoteID\n}\n}\nuserBadges {\nid\nsetID\nversion\ntitle\nimage1x: imageURL(size: NORMAL)\nimage2x: imageURL(size: DOUBLE)\nimage4x: imageURL(size: QUADRUPLE)\nclickAction\nclickURL\n}\n}\nstate\n}\n}\n}\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var r = {};
            i.definitions = i.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !r[t] && (r[t] = !0, !0)
                })
            }(n("F9eG").definitions)), e.exports = i
        },
        "+T1G": function(e, t, n) {},
        "/2kD": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "ClipsTitleEdit_UpdateClip"
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
                                    value: "UpdateClipInput"
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
                                value: "updateClip"
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
                                        value: "clip"
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
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "error"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "message"
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
                    end: 130
                }
            };
            n.loc.source = {
                body: "mutation ClipsTitleEdit_UpdateClip($input: UpdateClipInput!) {\nupdateClip(input: $input) {\nclip {\nid\ntitle\n}\nerror {\nmessage\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "/HY+": function(e, t, n) {
            "use strict";
            var i = n("dAHa"),
                r = n("mrSG"),
                a = n("q1tI"),
                o = n("/MKj"),
                s = n("fvjX"),
                l = n("cZKs"),
                d = n("aCAx"),
                c = n("GnwI"),
                u = n("Ue10"),
                p = (n("Oy4H"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleClose = function(e, n) {
                            t.props.closeModal(), t.props.onClose && t.props.onClose(e, n)
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(u.Eb, {
                            className: "reporting-modal__container",
                            background: u.r.Base,
                            padding: {
                                x: 2,
                                y: 3
                            }
                        }, a.createElement(i.b, {
                            onClose: this.handleClose,
                            reportContext: this.props.reportContext,
                            title: this.props.title,
                            defaultDescription: this.props.defaultDescription
                        }), a.createElement(l.a, null))
                    }, t
                }(a.Component));
            var m = Object(s.compose)(Object(c.b)("ReportUserModal"), Object(o.connect)(null, function(e) {
                return Object(s.bindActionCreators)({
                    closeModal: d.c
                }, e)
            }))(p);
            n.d(t, !1, function() {}), n.d(t, !1, function() {
                return i.c
            }), n.d(t, !1, function() {
                return i.a
            }), n.d(t, !1, function() {}), n.d(t, !1, function() {
                return i.b
            }), n.d(t, !1, function() {
                return p
            }), n.d(t, "a", function() {
                return m
            })
        },
        "/mWu": function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("q1tI"),
                a = n("yR8l"),
                o = n("GnwI"),
                s = n("Ue10"),
                l = n("a4lT"),
                d = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.reportInteractive()
                    }, t.prototype.componentDidUpdate = function() {
                        this.reportInteractive()
                    }, t.prototype.render = function() {
                        return !this.props.data.clip || this.props.data.loading ? r.createElement(s.Xa, null, this.renderPlaceholders()) : r.createElement(s.W, {
                            fontSize: this.props.fontSize ? this.props.fontSize : s.Ca.Size3,
                            type: s.Vb.Span,
                            lineHeight: s.Ya.Heading,
                            ellipsis: this.props.ellipsis
                        }, this.props.data.clip.title)
                    }, t.prototype.reportInteractive = function() {
                        this.props.data.clip && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.renderPlaceholders = function() {
                        return r.createElement(s.i, {
                            type: s.n.FadeIn,
                            duration: s.k.Long,
                            delay: s.j.Short,
                            enabled: !0
                        }, r.createElement(s.W, {
                            fontSize: this.props.fontSize ? this.props.fontSize : s.Ca.Size3
                        }, r.createElement(s.ib, {
                            lineCount: 1,
                            width: 100
                        })))
                    }, t = i.__decorate([Object(o.b)("ClipsTitle"), Object(a.a)(l)], t)
                }(r.Component);
            n.d(t, "a", function() {
                return d
            })
        },
        "06uF": function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return d
            }), n.d(t, "a", function() {
                return c
            }), n.d(t, "c", function() {
                return u
            });
            var i = n("mrSG"),
                r = n("/7QA"),
                a = n("t5Gm"),
                o = 2,
                s = {
                    version: o,
                    vendorPreferences: {}
                },
                l = r.p.logger.withCategory("gdpr-storage");

            function d() {
                return p(r.p.storage.get(a.b, null))
            }

            function c() {
                var e = r.p.storage.get(a.b, s);
                return p(e) ? e.vendorPreferences : (l.warn("stored vendor preferences are invalid", {
                    storedPrefs: e
                }), {})
            }

            function u(e) {
                var t = c(),
                    n = {
                        version: o,
                        vendorPreferences: i.__assign({}, t, e)
                    };
                r.p.storage.set(a.b, n)
            }

            function p(e) {
                return e && "object" == typeof e && !Array.isArray(e) && void 0 !== e.version && "number" == typeof e.version && e.vendorPreferences && "object" == typeof e.vendorPreferences && !Array.isArray(e.vendorPreferences)
            }
        },
        "0Log": function(e, t, n) {
            "use strict";
            var i = n("VSaV");
            n.o(i, "FrienshipChangeType") && n.d(t, "FrienshipChangeType", function() {
                return i.FrienshipChangeType
            }), n.o(i, "ModerationActions") && n.d(t, "ModerationActions", function() {
                return i.ModerationActions
            }), n.o(i, "PubsubMessageType") && n.d(t, "PubsubMessageType", function() {
                return i.PubsubMessageType
            }), n.o(i, "PubsubTopic") && n.d(t, "PubsubTopic", function() {
                return i.PubsubTopic
            }), n.o(i, "SquadStatus") && n.d(t, "SquadStatus", function() {
                return i.SquadStatus
            }), n.o(i, "TargetedModerationActions") && n.d(t, "TargetedModerationActions", function() {
                return i.TargetedModerationActions
            });
            var r = n("By5U");
            n.o(r, "FrienshipChangeType") && n.d(t, "FrienshipChangeType", function() {
                return r.FrienshipChangeType
            }), n.o(r, "ModerationActions") && n.d(t, "ModerationActions", function() {
                return r.ModerationActions
            }), n.o(r, "PubsubMessageType") && n.d(t, "PubsubMessageType", function() {
                return r.PubsubMessageType
            }), n.o(r, "PubsubTopic") && n.d(t, "PubsubTopic", function() {
                return r.PubsubTopic
            }), n.o(r, "SquadStatus") && n.d(t, "SquadStatus", function() {
                return r.SquadStatus
            }), n.o(r, "TargetedModerationActions") && n.d(t, "TargetedModerationActions", function() {
                return r.TargetedModerationActions
            });
            var a = n("WQCf");
            n.d(t, "FrienshipChangeType", function() {
                return a.a
            }), n.d(t, "ModerationActions", function() {
                return a.b
            }), n.d(t, "PubsubMessageType", function() {
                return a.c
            }), n.d(t, "PubsubTopic", function() {
                return a.d
            }), n.d(t, "SquadStatus", function() {
                return a.e
            }), n.d(t, "TargetedModerationActions", function() {
                return a.f
            })
        },
        "0Lz3": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            }), n.d(t, "b", function() {
                return s
            });
            var i = n("mrSG"),
                r = n("uYEN"),
                a = n("5zXJ");

            function o(e) {
                var t = [],
                    n = {};
                return e.forEach(function(e) {
                    var o = e.tiers.map(function(e) {
                        return l(e)
                    });
                    "Cheer" === e.prefix && o.push(function() {
                        var e = ["DARK", "LIGHT"],
                            t = ["static", "animated"],
                            n = [];
                        return [1, 1.5, 2, 3, 4].forEach(function(i) {
                            e.forEach(function(e) {
                                t.forEach(function(t) {
                                    n.push({
                                        url: a.a + "/cheer/" + e.toLowerCase() + "/" + t + "/100000/" + i + "." + ("static" === t ? "png" : "gif"),
                                        isAnimated: "animated" === t,
                                        theme: e,
                                        dpiScale: i
                                    })
                                })
                            })
                        }), l({
                            id: "Cheer:100000",
                            bits: 1e5,
                            canCheer: !1,
                            canShowInBitsCard: !1,
                            color: a.k[r.a.Yellow],
                            images: n
                        })
                    }()), o.sort(function(e, t) {
                        return t.bits - e.bits
                    });
                    var s = i.__assign({}, e, {
                        indexedTiers: new Map(o.map(function(e) {
                            return [e.bits, e]
                        })),
                        orderedTiers: o
                    });
                    t.push(s), n[s.prefix.toLowerCase()] = s
                }), {
                    indexedActions: n,
                    orderedActions: t
                }
            }

            function s(e, t) {
                return {
                    cursor: "" + e.rank,
                    node: {
                        id: t + "_" + e.entry_key,
                        entryKey: e.entry_key,
                        rank: e.rank,
                        score: e.score,
                        __typename: "BitsLeaderboardItem"
                    },
                    __typename: "BitsLeaderboardItemEdge"
                }
            }

            function l(e) {
                var t = new Map,
                    n = new Map,
                    r = new Map,
                    a = new Map;
                return e.images.forEach(function(e) {
                    "LIGHT" === e.theme ? e.isAnimated ? n.set(e.dpiScale, e.url) : t.set(e.dpiScale, e.url) : e.isAnimated ? a.set(e.dpiScale, e.url) : r.set(e.dpiScale, e.url)
                }), i.__assign({
                    indexedImages: {
                        LIGHT: {
                            static: t,
                            animated: n
                        },
                        DARK: {
                            static: r,
                            animated: a
                        }
                    }
                }, e)
            }
        },
        "0OKo": function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("q1tI"),
                a = n("1uls");

            function o(e) {
                return {
                    latencyTracking: function(e, t) {
                        return new a.a(e, t)
                    }(e),
                    rootLatencyTracker: s()
                }
            }

            function s() {
                return new a.a("Root")
            }
            n("gCs8");

            function l(e, t) {
                return function(t) {
                    return function(n) {
                        function a() {
                            return null !== n && n.apply(this, arguments) || this
                        }
                        return i.__extends(a, n), a.prototype.render = function() {
                            return r.createElement(t, i.__assign({}, this.props, o(e)))
                        }, a.displayName = "WithLatencyTracking(" + (t.displayName || t.name || "Component") + ")", a
                    }(r.Component)
                }
            }
            n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, "a", function() {
                return l
            })
        },
        "0hI/": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ReportUserModal_ReportUserData"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "targetUserID"
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
                            alias: {
                                kind: "Name",
                                value: "targetUser"
                            },
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
                                        value: "targetUserID"
                                    }
                                }
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "lookupType"
                                },
                                value: {
                                    kind: "EnumValue",
                                    value: "ALL"
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
                                        value: "blockedUsers"
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
                    end: 176
                }
            };
            n.loc.source = {
                body: "query ReportUserModal_ReportUserData($targetUserID: ID!) {\ntargetUser: user(id: $targetUserID lookupType: ALL) {\nid\nlogin\ndisplayName\n}\ncurrentUser {\nid\nblockedUsers {\nid\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "0vE4": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "recommendedClip"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Clip"
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
                                value: "thumbnailURL"
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
                                value: "broadcaster"
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
                                        value: "displayName"
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
                                value: "viewCount"
                            },
                            arguments: [],
                            directives: []
                        }]
                    }
                }, {
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ClipsRecommendations"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "slug"
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
                                value: "clip"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "slug"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "slug"
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
                                        value: "slug"
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
                                        value: "broadcaster"
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
                                        value: "video"
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
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "relatedClips"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "similar"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "FragmentSpread",
                                                    name: {
                                                        kind: "Name",
                                                        value: "recommendedClip"
                                                    },
                                                    directives: []
                                                }]
                                            }
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "broadcaster"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "FragmentSpread",
                                                    name: {
                                                        kind: "Name",
                                                        value: "recommendedClip"
                                                    },
                                                    directives: []
                                                }]
                                            }
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
                                                    kind: "FragmentSpread",
                                                    name: {
                                                        kind: "Name",
                                                        value: "recommendedClip"
                                                    },
                                                    directives: []
                                                }]
                                            }
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "top"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "FragmentSpread",
                                                    name: {
                                                        kind: "Name",
                                                        value: "recommendedClip"
                                                    },
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
                    end: 429
                }
            };
            n.loc.source = {
                body: "fragment recommendedClip on Clip {\nid\ntitle\nthumbnailURL\nslug\nbroadcaster {\nid\ndisplayName\nlogin\n}\ngame {\nid\ndisplayName\nname\n}\nviewCount\n}\nquery ClipsRecommendations($slug: ID!) {\nclip(slug: $slug) {\nid\nslug\ngame {\nid\nname\ndisplayName\n}\nbroadcaster {\nid\nlogin\ndisplayName\n}\nvideo {\nid\n}\nrelatedClips {\nsimilar {\n...recommendedClip\n}\nbroadcaster {\n...recommendedClip\n}\ngame {\n...recommendedClip\n}\ntop {\n...recommendedClip\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "115V": function(e, t) {},
        "1ZgY": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ClipsBroadcasterInfo"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "slug"
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
                                value: "clip"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "slug"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "slug"
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
                                        value: "broadcaster"
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
                                                value: "profileImageURL"
                                            },
                                            arguments: [{
                                                kind: "Argument",
                                                name: {
                                                    kind: "Name",
                                                    value: "width"
                                                },
                                                value: {
                                                    kind: "IntValue",
                                                    value: "28"
                                                }
                                            }],
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
                                                value: "login"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "stream"
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
                }],
                loc: {
                    start: 0,
                    end: 174
                }
            };
            n.loc.source = {
                body: "query ClipsBroadcasterInfo($slug: ID!) {\nclip(slug: $slug) {\nid\ngame {\nid\nname\ndisplayName\n}\nbroadcaster {\nid\nprofileImageURL(width: 28)\ndisplayName\nlogin\nstream {\nid\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "2cRt": function(e, t, n) {
            "use strict";
            var i = n("q1tI"),
                r = n("/7QA"),
                a = n("SGIe"),
                o = function(e) {
                    return i.createElement(a.a, {
                        callToAction: Object(r.d)("Save as Highlight", "ClipsFullVideoButton"),
                        clip: e.clip,
                        onClick: e.onClick
                    })
                };
            n.d(t, "a", function() {
                return o
            })
        },
        "3TEU": function(e, t, n) {
            "use strict";
            n.r(t);
            var i, r = n("mrSG"),
                a = n("17x9"),
                o = n("q1tI"),
                s = n("oJmH"),
                l = n("/7QA"),
                d = n("yR8l"),
                c = n("V+GM"),
                u = n("DMoW"),
                p = n("NvVO"),
                m = n("pXgH"),
                h = n("2xye"),
                f = n("GnwI"),
                g = n("eFQ3"),
                v = n("rwoo"),
                E = n("OTul"),
                b = n("QK1T");
            ! function(e) {
                e.top = "top", e.similar = "similar", e.game = "game", e.broadcaster = "broadcaster", e.curator = "curator"
            }(i || (i = {}));
            var k = [i.similar, i.broadcaster, i.game, i.top];
            var y = n("Ue10"),
                S = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            imageFailed: !1
                        }, t.onImageError = function() {
                            t.setState({
                                imageFailed: !0
                            })
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.recommendedClip,
                            t = e.broadcaster && e.game && o.createElement(y.W, {
                                color: y.O.Alt2,
                                ellipsis: !0
                            }, Object(l.d)("{broadcasterDisplayName} playing {gameDisplayName}", {
                                broadcasterDisplayName: o.createElement(y.U, {
                                    type: y.V.Inherit,
                                    to: Object(E.d)(e.broadcaster.login, {
                                        tt_medium: "clips",
                                        tt_content: "player_channel_name"
                                    })
                                }, e.broadcaster.displayName),
                                gameDisplayName: o.createElement(y.U, {
                                    type: y.V.Inherit,
                                    to: Object(E.e)(e.game.name, {
                                        tt_medium: "clips",
                                        tt_content: "player_game"
                                    })
                                }, e.game.displayName)
                            }, "ClipsRecommendations")),
                            n = "/" + e.slug + "?tt_medium=clips&tt_content=recommendation";
                        return o.createElement(y.Xa, {
                            key: e.slug,
                            margin: {
                                bottom: 1
                            }
                        }, o.createElement(y.G, null, o.createElement(y.U, {
                            to: n,
                            onClick: this.props.trackSelectionClickHandler,
                            "data-test-selector": "clips-recommendation-view-rec-link"
                        }, o.createElement(y.Eb, {
                            position: y.jb.Absolute,
                            attachTop: !0,
                            attachRight: !0,
                            padding: .5,
                            margin: .5,
                            background: y.r.Overlay,
                            color: y.O.Overlay,
                            elevation: 2,
                            zIndex: y.ic.Default,
                            display: y.X.Flex,
                            justifyContent: y.Wa.Around,
                            alignItems: y.f.Center
                        }, o.createElement(y.Xa, {
                            display: y.X.Flex,
                            margin: {
                                right: .5
                            }
                        }, o.createElement(y.sb, {
                            asset: y.tb.GlyphViews
                        })), Object(l.d)("{views} views", {
                            views: Object(l.f)(e.viewCount)
                        }, "ClipsRecommendations"))), o.createElement(y.Eb, {
                            background: y.r.Alt2
                        }, o.createElement(y.i, {
                            type: y.n.FadeIn,
                            duration: y.k.ExtraLong,
                            enabled: !0
                        }, o.createElement(y.U, {
                            to: n,
                            onClick: this.props.trackSelectionClickHandler,
                            "data-test-selector": "clips-recommendation-view-rec-link"
                        }, o.createElement(y.I, {
                            src: this.getImageForClip(),
                            alt: Object(l.d)("Clip Thumbnail", "ClipsRecommendations"),
                            onError: this.onImageError
                        })))), o.createElement(y.H, null, o.createElement(y.Xa, {
                            padding: {
                                top: .5
                            }
                        }, o.createElement(y.U, {
                            to: n,
                            onClick: this.props.trackSelectionClickHandler,
                            "data-test-selector": "clips-recommendation-view-rec-link"
                        }, o.createElement(y.W, {
                            ellipsis: !0,
                            type: y.Vb.H3,
                            fontSize: y.Ca.Size5
                        }, e.title)), t))))
                    }, t.prototype.getImageForClip = function() {
                        return this.state.imageFailed ? "https://clips-media-assets2.twitch.tv/img/clips-404-320x180.png" : this.props.recommendedClip.thumbnailURL
                    }, t
                }(o.Component),
                T = n("nTT+");

            function N(e, t, n) {
                return r.__awaiter(this, void 0, void 0, function() {
                    var i, a, o, s, d, c, u, p, m, h, f, g, v, E, b, k, y, S;
                    return r.__generator(this, function(N) {
                        switch (N.label) {
                            case 0:
                                i = null, a = null, o = null, s = null, d = null, c = null, t || l.k.error(new Error, "Missing `slug` in trackClipsEvent", {
                                    slug: t
                                }), N.label = 1;
                            case 1:
                                return N.trys.push([1, 3, , 4]), [4, l.p.apollo.client.query({
                                    query: T,
                                    variables: {
                                        slug: t
                                    }
                                })];
                            case 2:
                                return u = N.sent(), i = !!(u.data.clip && u.data.clip.broadcaster && u.data.clip.broadcaster.stream && u.data.clip.broadcaster.stream.id), a = u.data.clip && u.data.clip.broadcaster ? u.data.clip.broadcaster.login : null, o = u.data.clip && u.data.clip.broadcaster ? u.data.clip.broadcaster.id : null, s = u.data.clip && u.data.clip.game ? u.data.clip.game.name : null, d = u.data.clip && u.data.clip.broadcaster ? u.data.clip.broadcaster.isPartner : null, c = u.data.clip ? u.data.clip.id : null, [3, 4];
                            case 3:
                                return p = N.sent(), l.k.error(p, "Failed to make query for Clip info for tracking event.", {
                                    slug: t
                                }), [3, 4];
                            case 4:
                                return m = null, h = null, f = !1, (g = l.p.store.getState().session.user) && (h = g.id, m = g.login, f = !0), v = null, E = null, b = null, k = null, (y = l.o.getLastPageview()) && (v = y.medium || null, E = y.content || null, b = y.tab_session_id || null, k = y.location || null), S = r.__assign({
                                    game: s,
                                    live: i,
                                    channel: a,
                                    channel_id: o,
                                    logged_in: f,
                                    login: m,
                                    user_id: h,
                                    tt_content: E,
                                    tt_medium: v,
                                    partner: d,
                                    vod_id: c,
                                    vod_type: "clip",
                                    tab_session_id: b,
                                    location: k,
                                    play_session_id: "TODO"
                                }, n), l.o.track(e, S), [2]
                        }
                    })
                })
            }

            function _(e, t) {
                return {
                    source_channel: e.broadcaster ? e.broadcaster.login : null,
                    source_game: e.game ? e.game.name : null,
                    source_vod_id: e.video ? e.video.id : null,
                    source_item_type: "clip",
                    item_type: "clip",
                    content: function(e) {
                        switch (e) {
                            case i.top:
                                return "popular_clips";
                            case i.game:
                                return "game_popular_clips";
                            case i.broadcaster:
                                return "channel_popular_clips";
                            case i.similar:
                                return "similar_popular_clips";
                            default:
                                return null
                        }
                    }(t),
                    carousel_content: "similar_clips"
                }
            }

            function C(e, t, n, i) {
                N(h.SpadeEventType.ItemSectionLoad, e.slug, r.__assign({}, _(e, i), {
                    num_recs_visible: n.length,
                    rendered_item_count: n.map(function(e) {
                        return e.id
                    }),
                    rendered_item_list: n.map(function(e) {
                        return e.id
                    }),
                    rendered_items_types: n.map(function() {
                        return "clip"
                    }),
                    rendered_items_viewcounts: n.map(function(e) {
                        return e.viewCount
                    }),
                    section_index: t
                }))
            }
            var O = n("0vE4");

            function R(e) {
                return o.createElement(y.Xa, {
                    key: e
                }, o.createElement(y.Xa, {
                    position: y.jb.Relative
                }, o.createElement(y.o, {
                    ratio: y.p.Aspect16x9
                }, o.createElement(y.ib, null)), o.createElement(y.Xa, {
                    position: y.jb.Absolute,
                    attachTop: !0,
                    attachRight: !0,
                    margin: .5
                }, o.createElement(y.ib, {
                    height: 28,
                    width: 100
                }))), o.createElement(y.Eb, {
                    margin: {
                        top: .5
                    },
                    fontSize: y.Ca.Size8
                }, o.createElement(y.ib, {
                    lineCount: 1,
                    width: 180
                }), o.createElement(y.ib, {
                    lineCount: 1,
                    width: 120
                })))
            }

            function I(e) {
                return o.createElement(y.Xa, {
                    margin: {
                        bottom: 3
                    },
                    key: e
                }, o.createElement(y.W, {
                    fontSize: y.Ca.Size5
                }, o.createElement(y.ib, {
                    lineCount: 1,
                    width: 100
                })), o.createElement(y.Xa, {
                    margin: {
                        top: 2
                    }
                }, o.createElement(y.i, {
                    type: y.n.FadeIn,
                    duration: y.k.Medium,
                    enabled: !0
                }, o.createElement(y.bc, {
                    childWidth: y.cc.Medium,
                    gutterSize: y.dc.Small
                }, [1, 2, 3, 4].map(R)))))
            }
            var D = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.trackedLoad = !1, t.renderRow = function(e, n) {
                            if (t.props.data.clip && t.props.data.clip.relatedClips) {
                                var a = t.props.data.clip.relatedClips[e];
                                return o.createElement("div", {
                                    key: e
                                }, o.createElement(y.Xa, {
                                    padding: {
                                        y: 2
                                    }
                                }, o.createElement(y.W, {
                                    fontSize: y.Ca.Size4
                                }, function(e, t) {
                                    if (t.data.clip) switch (e) {
                                        case i.top:
                                            return Object(l.d)("Popular Clips", "ClipsRecommendations");
                                        case i.similar:
                                            return Object(l.d)("Similar Clips", "ClipsRecommendations");
                                        case i.game:
                                            return t.data.clip.game && Object(l.d)("Popular Clips from {game}", {
                                                game: t.data.clip.game.displayName
                                            }, "ClipsRecommendations");
                                        case i.broadcaster:
                                            return t.data.clip.broadcaster && Object(l.d)("Popular Clips from {channel}", {
                                                channel: t.data.clip.broadcaster.displayName
                                            }, "ClipsRecommendations");
                                        default:
                                            return null
                                    }
                                }(e, t.props))), o.createElement(y.bc, {
                                    childWidth: y.cc.Medium,
                                    gutterSize: y.dc.Small
                                }, a.map(function(i, a) {
                                    return o.createElement(S, {
                                        key: i.id,
                                        recommendedClip: i,
                                        trackSelectionClickHandler: function() {
                                            ! function(e, t, n, i, a) {
                                                N(h.SpadeEventType.ItemSectionClick, e.slug, r.__assign({}, _(e, a), {
                                                    item_id: t.slug,
                                                    item_viewcount: t.viewCount,
                                                    section_index: n,
                                                    itemIndex: i
                                                }))
                                            }(t.props.data.clip, i, n, a, e)
                                        }
                                    })
                                })))
                            }
                        }, t.trackSelectionLoad = function(e) {
                            if (!t.trackedLoad && e.data.clip && e.data.clip.relatedClips) {
                                t.props.latencyTracking.reportInteractive(), t.trackedLoad = !0;
                                for (var n = t.getValidCategories(e), i = 0; i < n.length; i++) {
                                    var r = n[i],
                                        a = e.data.clip.relatedClips[r];
                                    a && C(e.data.clip, i, a, r)
                                }
                            }
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.trackSelectionLoad(this.props)
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        this.trackSelectionLoad(e)
                    }, t.prototype.render = function() {
                        return this.props.data.clip ? o.createElement(y.Xa, {
                            padding: {
                                top: 1
                            }
                        }, this.getValidCategories(this.props).map(this.renderRow)) : o.createElement(y.Xa, null, this.renderPlaceholders())
                    }, t.prototype.getValidCategories = function(e) {
                        var t = e.data.clip && e.data.clip.relatedClips;
                        return t ? k.filter(function(e) {
                            return 4 === t[e].length
                        }) : []
                    }, t.prototype.renderPlaceholders = function() {
                        return o.createElement(y.Xa, {
                            margin: {
                                top: 3
                            }
                        }, [1, 2, 3].map(I))
                    }, t
                }(o.Component),
                A = Object(f.b)("ClipsRecommendations")(Object(d.a)(O)(D)),
                w = n("r/em"),
                L = n("/MKj"),
                M = n("kRBY"),
                F = n("8/mp"),
                U = n("3dkm"),
                P = n("+GrQ"),
                B = n("/mWu"),
                x = n("Jr7Z"),
                V = n("WSjS"),
                j = n("Rinm"),
                W = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onFinishedEditing = function() {
                            t.props.editTitleToggle()
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return this.props.data.clip ? o.createElement(y.Xa, {
                            fullWidth: !0,
                            className: "clips-view-title-edit"
                        }, o.createElement(V.a, {
                            clipId: this.props.data.clip.id,
                            clipSlug: this.props.slug,
                            clipTitle: this.props.data.clip.title,
                            clipBroadcasterId: this.props.data.clip.broadcaster ? Number(this.props.data.clip.broadcaster.id) : 0,
                            location: h.PageviewLocation.ClipsViewing,
                            onCancel: this.onFinishedEditing,
                            onSuccess: this.onFinishedEditing
                        })) : o.createElement(y.Xa, null)
                    }, t = r.__decorate([Object(d.a)(j)], t)
                }(o.Component),
                G = n("CHEQ"),
                H = (n("FfCS"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isChatAutoScrolling: !0,
                            isChatContentCollapsed: !1,
                            isEditingTitle: !1,
                            shouldRenderChat: !0
                        }, t.scrollPosition = 0, t.renderClipTitle = function() {
                            var e = t.props.data.clip,
                                n = e && e.curator && e.curator.login,
                                i = t.props.slug;
                            if (t.state.isEditingTitle) return o.createElement(W, {
                                slug: i,
                                editTitleToggle: t.editTitleToggle
                            });
                            var r = o.createElement(y.Xa, {
                                alignItems: y.f.Center,
                                display: y.X.Flex,
                                flexDirection: y.Aa.Row,
                                justifyContent: y.Wa.Start,
                                margin: {
                                    y: 1
                                },
                                ellipsis: !0
                            }, t.renderCreatedAt(), o.createElement(P.a, {
                                slug: i,
                                ellipsis: !0
                            }));
                            return t.props.userLogin !== n ? o.createElement(y.Xa, null, o.createElement(B.a, {
                                slug: i
                            }), r) : o.createElement(y.Xa, null, o.createElement("div", {
                                className: "clips-chat__edit",
                                onClick: t.editTitleToggle,
                                "data-test-selector": "clips-chat-card-edit"
                            }, o.createElement(B.a, {
                                slug: i
                            }), o.createElement(y.sb, {
                                asset: y.tb.Edit
                            })), r)
                        }, t.setChatContentRef = function(e) {
                            t.chatContentRef = e
                        }, t.setScrollableAreaEl = function(e) {
                            t.scrollableAreaEl = e
                        }, t.scrollChatToBottom = function() {
                            t.scrollableAreaEl && (t.scrollableAreaEl.scrollTop = t.scrollableAreaEl.scrollHeight)
                        }, t.moreChatClick = function() {
                            t.setState({
                                isChatAutoScrolling: !0
                            }), t.scrollChatToBottom()
                        }, t.autoScrollChatToBottom = function() {
                            t.state.isChatAutoScrolling && t.scrollChatToBottom()
                        }, t.editTitleToggle = function() {
                            t.setState(function(e) {
                                return {
                                    isEditingTitle: !e.isEditingTitle,
                                    isChatAutoScrolling: !1
                                }
                            })
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                        var t = e.currentTime,
                            n = t && t > 1,
                            i = e.slug !== this.props.slug,
                            r = {};
                        this.scrollableAreaEl && this.state.shouldRenderChat && (!n || i) ? (this.scrollPosition = 0, this.scrollableAreaEl.scrollTop = 0, r = {
                            isChatAutoScrolling: !this.state.isEditingTitle,
                            isChatContentCollapsed: !1,
                            shouldRenderChat: !1
                        }) : !this.state.shouldRenderChat && n && (r = {
                            shouldRenderChat: !0
                        }), i && (r.isEditingTitle = !1), 0 !== Object.keys(r).length && this.setState(r)
                    }, t.prototype.componentDidMount = function() {
                        this.addScrollableAreaEventListener()
                    }, t.prototype.render = function() {
                        var e = this.props.slug;
                        return o.createElement(y.Xa, {
                            display: y.X.Flex,
                            flexDirection: y.Aa.Column,
                            position: y.jb.Relative,
                            flexGrow: 1
                        }, o.createElement(y.Xa, {
                            position: y.jb.Absolute,
                            attachTop: !0,
                            attachLeft: !0,
                            attachRight: !0,
                            attachBottom: !0
                        }, this.state.isChatContentCollapsed && o.createElement(se, {
                            slug: e
                        }), o.createElement(F.b, {
                            className: "clips-chat",
                            contentClassName: "clips-chat__content",
                            contentRef: this.setScrollableAreaEl,
                            suppressScrollX: !0
                        }, o.createElement(y.Xa, {
                            padding: {
                                x: 1
                            },
                            display: y.X.Flex,
                            flexDirection: y.Aa.Column,
                            fullWidth: !0
                        }, o.createElement(y.Xa, {
                            className: "clips-chat-info",
                            flexShrink: 1,
                            flexGrow: 1,
                            display: y.X.Flex,
                            alignItems: y.f.Start,
                            justifyContent: y.Wa.Center,
                            flexDirection: y.Aa.Column,
                            margin: {
                                top: 1
                            },
                            breakpointLarge: {
                                margin: {
                                    y: 2
                                }
                            },
                            refDelegate: this.setChatContentRef
                        }, o.createElement(x.a, {
                            slug: e
                        }), this.renderClipTitle()), o.createElement(oe, {
                            autoScrollChatToBottom: this.autoScrollChatToBottom,
                            currentTime: this.props.currentTime,
                            key: e,
                            shouldRenderChat: this.state.shouldRenderChat,
                            slug: e,
                            videoOffsetSeconds: this.props.data.clip ? this.props.data.clip.videoOffsetSeconds : null
                        }), this.renderMoreChatButton()))))
                    }, t.prototype.renderMoreChatButton = function() {
                        return !this.props.data.clip || this.props.data.clip && !this.props.data.clip.video || this.state.isChatAutoScrolling ? null : o.createElement(y.Xa, {
                            alignItems: y.f.Center,
                            attachBottom: !0,
                            attachLeft: !0,
                            display: y.X.Flex,
                            flexDirection: y.Aa.Column,
                            position: y.jb.Absolute,
                            fullWidth: !0
                        }, o.createElement(y.z, {
                            size: y.D.Small,
                            onClick: this.moreChatClick
                        }, Object(l.d)("MORE CHAT ↓", "ClipsChatCard")))
                    }, t.prototype.addScrollableAreaEventListener = function() {
                        var e = this;
                        this.scrollableAreaEl && this.scrollableAreaEl.addEventListener("scroll", function() {
                            var t = {},
                                n = e.scrollableAreaEl;
                            if (n) {
                                e.scrollPosition > n.scrollTop ? t.isChatAutoScrolling = !1 : e.scrollPosition < n.scrollTop && n.scrollHeight === n.scrollTop + n.clientHeight && (t.isChatAutoScrolling = !0), e.scrollPosition = n.scrollTop;
                                var i = e.isChatContentCollapsed;
                                void 0 !== i && (t.isChatContentCollapsed = i), e.setState(t)
                            }
                        })
                    }, t.prototype.renderCreatedAt = function() {
                        var e = this.props.data.clip;
                        return !e || this.props.data.loading ? null : o.createElement(y.Eb, {
                            display: y.X.Flex,
                            fontSize: y.Ca.Size5
                        }, o.createElement(y.W, {
                            type: y.Vb.Span
                        }, Object(U.b)(e.createdAt)), o.createElement(y.Xa, {
                            margin: {
                                x: .5
                            }
                        }, "•"))
                    }, Object.defineProperty(t.prototype, "isChatContentCollapsed", {
                        get: function() {
                            if (this.chatContentRef && this.scrollableAreaEl) {
                                var e = this.chatContentRef.getBoundingClientRect().top,
                                    t = this.scrollableAreaEl.getBoundingClientRect().top,
                                    n = void 0;
                                return e < t && this.percentScrolled(this.scrollableAreaEl) > .25 && !this.state.isChatContentCollapsed ? n = !0 : e >= t && this.percentScrolled(this.scrollableAreaEl) <= .25 && this.state.isChatContentCollapsed && (n = !1), n
                            }
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.percentScrolled = function(e) {
                        return e.scrollTop / (e.scrollHeight - e.clientHeight)
                    }, t = r.__decorate([Object(d.a)(G), Object(f.b)("ClipsChatCard", {
                        autoReportInteractive: !0
                    })], t)
                }(o.Component));
            var z = Object(L.connect)(function(e) {
                    var t = Object(M.e)(e);
                    return {
                        userLogin: t && t.login
                    }
                })(H),
                X = n("uIkQ"),
                q = n("ZEQw"),
                Y = n("XmgI"),
                K = n("j0ar"),
                Q = n("cys1"),
                $ = (n("fDgN"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.node,
                            t = e.message.userBadges || [],
                            n = e.commenter,
                            i = n.chatColor,
                            r = n.displayName,
                            a = n.login;
                        return o.createElement(y.Xa, {
                            margin: {
                                bottom: 1
                            }
                        }, o.createElement(y.i, {
                            type: y.n.SlideInBottom,
                            duration: y.k.Short,
                            enabled: !0
                        }, this.renderUserBadges(t.filter(function(e) {
                            return !!e
                        })), this.renderUserLink({
                            chatColor: i,
                            displayName: r,
                            login: a
                        }), o.createElement(y.Xa, {
                            display: y.X.InlineBlock,
                            margin: {
                                right: .5
                            }
                        }, ":"), this.renderFragments(e.message.fragments)))
                    }, t.prototype.renderUserBadges = function(e) {
                        var t = this.props.video && this.props.video.owner && this.props.video.owner.broadcastBadges.filter(function(e) {
                            return e.clickAction === q.c
                        }) || [];
                        return this.mergeSubscriberBadgeUrls(e, t).map(this.renderUserBadge)
                    }, t.prototype.renderUserBadge = function(e, t) {
                        return o.createElement(X.a, {
                            badge: e,
                            key: t
                        })
                    }, t.prototype.mergeSubscriberBadgeUrls = function(e, t) {
                        var n = this;
                        return e.map(function(e) {
                            var i = n.props.channelName,
                                r = e.clickAction === q.c,
                                a = t.filter(function(t) {
                                    return t.version === e.version
                                })[0];
                            if (r && a) {
                                var o = a.image1x,
                                    s = a.image2x,
                                    l = a.image4x;
                                return Object.assign({}, e, {
                                    channelName: i,
                                    image1x: o,
                                    image2x: s,
                                    image4x: l
                                })
                            }
                            return Object.assign({}, e, {
                                channelName: i
                            })
                        })
                    }, t.prototype.renderUserLink = function(e) {
                        var t = e.chatColor,
                            n = e.displayName,
                            i = e.login;
                        return o.createElement("a", {
                            href: Object(E.d)(i),
                            style: {
                                color: t
                            }
                        }, o.createElement(y.W, {
                            type: y.Vb.Span,
                            fontSize: y.Ca.Size5,
                            bold: !0
                        }, n))
                    }, t.prototype.renderFragments = function(e) {
                        var t = this;
                        return e.map(function(e, n) {
                            var i = e.emote,
                                r = e.text;
                            if (i) return t.renderFragmentEmote(i, r, n);
                            if (t.props.bitsConfig) {
                                var a = Object(Y.f)(r, t.props.bitsConfig);
                                return Object(Q.f)(a)
                            }
                            return t.renderFragmentText(r, n)
                        })
                    }, t.prototype.renderFragmentEmote = function(e, t, n) {
                        var i = e.emoteID;
                        return o.createElement(y.Pa, {
                            display: y.X.Inline,
                            key: n
                        }, o.createElement(K.a, {
                            alt: t,
                            className: "clips-chat-line-emote",
                            srcKey: "1x",
                            srcSet: {
                                themed: !1,
                                sources: {
                                    "1x": E.a + (i + "/1.0")
                                }
                            }
                        }))
                    }, t.prototype.renderFragmentText = function(e, t) {
                        return o.createElement(y.Pa, {
                            display: y.X.Inline,
                            key: t
                        }, o.createElement(y.W, {
                            type: y.Vb.Span,
                            fontSize: y.Ca.Size5,
                            color: y.O.Alt
                        }, e))
                    }, t
                }(o.PureComponent)),
                Z = n("geRD"),
                J = n("0Lz3"),
                ee = n("+Irf"),
                te = "";

            function ne(e) {
                return e && e.clip && e.clip.video && e.clip.video.comments && e.clip.video.comments.edges || []
            }

            function ie(e) {
                var t = e[Math.max(e.length - 1, 0)];
                return t || {
                    node: {
                        id: te,
                        contentOffsetSeconds: 1 / 0
                    },
                    cursor: null
                }
            }
            var re, ae = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            bitsConfig: Y.a
                        }, t.prevCommentId = te, t.filterChatLines = function(e) {
                            var n = t.props.videoOffsetSeconds,
                                i = n + (t.props.currentTime ? t.props.currentTime : 0),
                                r = e.node.contentOffsetSeconds;
                            return r >= n && r <= i
                        }, t.maybeLoadMore = function(e) {
                            if (!e.videoOffsetSeconds || !e.data || e.data.error) return null;
                            var n = e.data.clip;
                            if (!n) return null;
                            var i = n.video;
                            if (!i || !i.comments) return null;
                            var r = ie(i.comments.edges).node,
                                a = e.videoOffsetSeconds + n.durationSeconds;
                            r.contentOffsetSeconds <= a && t.props.loadMore()
                        }, t
                    }
                    return r.__extends(t, e), t.getDerivedStateFromProps = function(e, t) {
                        if (t.bitsConfig !== Y.a) return null;
                        if (!(e.data && e.data.clip && e.data.clip.video && e.data.clip.video.owner && e.data.clip.video.owner.cheer)) return null;
                        var n = e.data.clip.video.owner.cheer.emotes || [];
                        return 0 === n.length ? null : {
                            bitsConfig: Object(J.a)(n)
                        }
                    }, t.prototype.componentDidUpdate = function() {
                        this.props.autoScrollChatToBottom();
                        var e = ie(ne(this.props.data)).node.id;
                        this.prevCommentId !== e && (this.prevCommentId = e, this.maybeLoadMore(this.props))
                    }, t.prototype.render = function() {
                        var e = this;
                        if (!this.props.shouldRenderChat || !this.props.videoOffsetSeconds) return null;
                        if (!this.props.data || this.props.data.error) return null;
                        var t = this.props.data && this.props.data.clip,
                            n = t && t.video;
                        if (!t || !n || !n.comments) return null;
                        var i = n.comments.edges.filter(this.filterChatLines);
                        return 0 === i.length ? null : o.createElement(y.Xa, {
                            className: "clips-chat-replay",
                            flexGrow: 1,
                            flexShrink: 0,
                            display: y.X.Flex,
                            flexDirection: y.Aa.Column,
                            alignItems: y.f.Start,
                            justifyContent: y.Wa.End,
                            margin: {
                                top: 1
                            }
                        }, i.map(function(i, r) {
                            var a = i.node;
                            return o.createElement($, {
                                bitsConfig: e.state.bitsConfig,
                                channelName: t.broadcaster && t.broadcaster.displayName || void 0,
                                node: a,
                                video: n,
                                key: r
                            })
                        }))
                    }, t
                }(o.Component),
                oe = Object(d.a)(ee, {
                    skip: function(e) {
                        return !e.videoOffsetSeconds
                    },
                    options: function(e) {
                        return {
                            variables: {
                                slug: e.slug,
                                videoOffsetSeconds: e.videoOffsetSeconds
                            }
                        }
                    },
                    props: function(e) {
                        return r.__assign({}, e, {
                            loadMore: function() {
                                var t = ne(e.data);
                                if (0 !== t.length) {
                                    var n = ie(t).cursor;
                                    return e.data.fetchMore({
                                        query: ee,
                                        variables: {
                                            slug: e.data.variables.slug,
                                            cursor: n
                                        },
                                        updateQuery: function(e, t) {
                                            var n = t.fetchMoreResult;
                                            return {
                                                clip: r.__assign({}, n.clip, {
                                                    video: r.__assign({}, n.clip && n.clip.video || {}, {
                                                        comments: r.__assign({}, n.clip && n.clip.video && n.clip.video.comments || {}, {
                                                            edges: Object(Z.c)(ne(e), ne(n)),
                                                            __typename: "VideoCommentEdge"
                                                        })
                                                    })
                                                })
                                            }
                                        }
                                    })
                                }
                            }
                        })
                    }
                })(ae),
                se = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return o.createElement(y.Eb, {
                            alignItems: y.f.Center,
                            attachTop: !0,
                            className: "clips-chat-title",
                            display: y.X.Flex,
                            flexDirection: y.Aa.Row,
                            fullWidth: !0,
                            position: y.jb.Absolute,
                            justifyContent: y.Wa.Start,
                            background: y.r.Base,
                            borderBottom: !0,
                            zIndex: y.ic.Default,
                            padding: 1
                        }, o.createElement(B.a, {
                            fontSize: y.Ca.Size5,
                            slug: this.props.slug,
                            ellipsis: !0
                        }), o.createElement(y.Xa, {
                            flexShrink: 0,
                            margin: {
                                x: .5
                            }
                        }, o.createElement(y.W, {
                            type: y.Vb.Span
                        }, "•")), o.createElement(y.Xa, {
                            flexShrink: 0
                        }, o.createElement(x.a, {
                            padding: {
                                bottom: 0
                            },
                            slug: this.props.slug,
                            fontSize: y.Ca.Size6,
                            hideSymbol: !0
                        })), o.createElement(y.Xa, {
                            margin: {
                                x: .5
                            }
                        }, o.createElement(y.W, {
                            type: y.Vb.Span
                        }, "•")), o.createElement(P.a, {
                            slug: this.props.slug,
                            fontSize: y.Ca.Size6,
                            ellipsis: !0
                        }))
                    }, t
                }(o.Component),
                le = (n("115V"), n("VwyG")),
                de = n("yWUM"),
                ce = n("4rCz"),
                ue = n("2cRt"),
                pe = n("3lt/"),
                me = n("ezmq"),
                he = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.buttonShownTracked = !1, t.throttledTrackHighlightButtonShown = function() {
                            t.buttonShownTracked || (t.buttonShownTracked = !0, t.trackHighlightButton(pe.SpadeEventType.ItemSectionLoad))
                        }, t.trackHighlightButtonClick = function() {
                            t.trackHighlightButton(pe.SpadeEventType.ItemSectionClick)
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                        this.props.slug !== e.slug && (this.buttonShownTracked = !1)
                    }, t.prototype.componentDidMount = function() {
                        this.reportInteractive()
                    }, t.prototype.componentDidUpdate = function() {
                        this.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this,
                            t = this.props.data.clip;
                        return t && t.broadcaster && t.broadcaster.login ? Object(b.c)(window.navigator.userAgent) ? this.renderWatchButton(t) : o.createElement(y.Xa, {
                            display: y.X.InlineBlock
                        }, o.createElement(le.a, {
                            ownerLogin: t.broadcaster.login,
                            permittedRoles: {
                                owner: !0,
                                editor: !0,
                                staff: !0
                            }
                        }, function(n) {
                            var i = n.permitted,
                                r = n.loading,
                                a = t.broadcaster && t.broadcaster.login;
                            return r ? e.renderPlaceholders() : i && a ? e.renderEditorButtons(t) : e.renderWatchButton(t)
                        })) : this.renderPlaceholders()
                    }, t.prototype.renderEditorButtons = function(e) {
                        return this.throttledTrackHighlightButtonShown(), o.createElement(y.Xa, {
                            display: y.X.Flex
                        }, o.createElement(y.Xa, {
                            margin: {
                                right: 1
                            }
                        }, o.createElement(ue.a, {
                            clip: e,
                            onClick: this.trackHighlightButtonClick
                        })), this.renderWatchButton(e, !1))
                    }, t.prototype.renderWatchButton = function(e, t) {
                        void 0 === t && (t = !0);
                        var n = t ? y.F.Default : y.F.Hollow;
                        return e.video ? o.createElement(y.z, {
                            targetBlank: !0,
                            type: n,
                            linkTo: Object(E.i)(e.video.id, {
                                t: Object(de.a)(e.videoOffsetSeconds),
                                tt_medium: "clips_web",
                                tt_content: "full_vod_button"
                            }),
                            "data-test-selector": "clips-video-button-watch"
                        }, Object(ce.d)("Watch Full Video", "ClipsFullVideoButton")) : o.createElement(y.z, {
                            type: n,
                            disabled: !0
                        }, Object(ce.d)("Full Video Unavailable", "ClipsFullVideoButton"))
                    }, t.prototype.reportInteractive = function() {
                        this.props.data.clip && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.renderPlaceholders = function() {
                        return o.createElement(y.i, {
                            type: y.n.FadeIn,
                            duration: y.k.Long,
                            enabled: !0
                        }, o.createElement(y.ib, {
                            width: 108,
                            height: 28
                        }))
                    }, t.prototype.trackHighlightButton = function(e) {
                        N(e, this.props.slug, {
                            content: "save_as_highlight",
                            rendered_items_count: null,
                            rendered_items_list: null,
                            rendered_items_types: null,
                            rendered_items_viewcounts: null
                        })
                    }, t
                }(o.Component),
                fe = Object(s.compose)(Object(f.b)("ClipsFullVideoButton"), Object(d.a)(me))(he),
                ge = (n("ne44"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.slug;
                        return o.createElement(y.Xa, {
                            className: "clips-sidebar",
                            display: y.X.Flex,
                            flexDirection: y.Aa.Column
                        }, o.createElement(y.Eb, {
                            borderBottom: !0
                        }, o.createElement(w.a, {
                            slug: e
                        })), o.createElement(y.Xa, {
                            className: "clips-sidebar-info",
                            display: y.X.Flex,
                            flexDirection: y.Aa.Column,
                            justifyContent: y.Wa.Around
                        }, o.createElement(z, {
                            slug: e,
                            currentTime: this.props.currentTime
                        })), o.createElement(y.Eb, {
                            borderTop: !0
                        }, o.createElement(y.Xa, {
                            display: y.X.Flex,
                            justifyContent: y.Wa.End,
                            alignItems: y.f.Center,
                            padding: 1
                        }, o.createElement(fe, {
                            slug: e
                        }))))
                    }, t
                }(o.Component)),
                ve = Object(f.b)("ClipsSidebar", {
                    autoReportInteractive: !0
                })(ge),
                Ee = n("DLy/"),
                be = n("pwCS"),
                ke = n("zB42");
            ! function(e) {
                e.Live = "live", e.MainDir = "main_dir", e.GameDir = "game_dir", e.Vod = "vod", e.Profile = "profile", e.ContentGate = "content_gate", e.Clip = "clip"
            }(re || (re = {}));
            var ye = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.trackBranchClick = function(e) {
                            ! function(e) {
                                var t = {
                                    interaction_content: e
                                };
                                l.o.track(h.SpadeEventType.ClipsUpsellClick, t)
                            }(e)
                        }, n.importBranch(), n
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        if (!this.BranchIO) return null;
                        var e = this.BranchIO,
                            t = e.BranchRoot,
                            n = e.BranchUpsell;
                        return o.createElement(t, {
                            apiKey: l.a.buildType === ke.a.Production ? "key_live_jgBdao5vVtyZ3hdckxy8jlkkzqooQltZ" : "key_test_ahupan1EKvF7XkpepyA3vpfivrdlOlMg",
                            deviceID: l.p.session.deviceID
                        }, o.createElement(n, {
                            journey: {
                                delaySecondsUntilUpsell: 5,
                                type: re.Clip,
                                channel: this.props.broadcasterDisplayName || "",
                                game: this.props.gameName || void 0
                            },
                            viewData: {
                                app_session_id: l.p.session.tabID,
                                device_id: l.p.session.deviceID,
                                tags: {
                                    custom_text: this.getUpsellText()
                                }
                            },
                            trackEvent: this.trackBranchClick,
                            branch: void 0
                        }))
                    }, t.prototype.importBranch = function() {
                        return r.__awaiter(this, void 0, void 0, function() {
                            var e;
                            return r.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return e = this, [4, n.e(217).then(n.bind(null, "zVe/"))];
                                    case 1:
                                        return e.BranchIO = t.sent(), [2]
                                }
                            })
                        })
                    }, t.prototype.getUpsellText = function() {
                        return this.props.broadcasterDisplayName && this.props.gameName ? Object(l.d)("Clip every {gameTitle} moment from {broadcaster} in the App!", {
                            gameTitle: this.props.gameName,
                            broadcaster: this.props.broadcasterDisplayName
                        }, "ClipsViewBranchUpsell") : this.props.broadcasterDisplayName ? Object(l.d)("Clip all of your favorite {broadcaster} moments in the App!", {
                            broadcaster: this.props.broadcasterDisplayName
                        }, "ClipsViewBranchUpsell") : ""
                    }, t
                }(o.Component),
                Se = n("V4dr"),
                Te = (n("T1wi"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            animationCompleted: !1,
                            currentTime: void 0
                        }, t.redirected = !1, t.maybeRedirectToErrorPage = function(e) {
                            void 0 === e && (e = t.props), t.redirected || e.data.loading || !(e.data.error || e.data.clip && e.data.clip.creationState !== u.n.CREATED) || (t.redirected = !0, e.history.replace(Object(E.h)(v.a.ClipMissing)))
                        }, t.onAnimationEnd = function() {
                            t.setState({
                                animationCompleted: !0
                            })
                        }, t.setCurrentTime = function(e) {
                            t.setState({
                                currentTime: e
                            })
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        l.p.experiments.trackExperiment({
                            assignment: "variant1",
                            id: "0e636d13-56a8-44f4-bd51-7e65cd5a5225",
                            name: "twilight_clips_howdy_partner",
                            type: m.a.Device,
                            version: 1
                        }), this.props.latencyTracking.reportInteractive(), this.maybeRedirectToErrorPage()
                    }, t.prototype.componentDidUpdate = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        this.props.match.params.slug !== e.match.params.slug && this.context.scrollToTop(), this.maybeRedirectToErrorPage(e)
                    }, t.prototype.render = function() {
                        var e = this.props.match.params.slug;
                        return o.createElement(o.Fragment, null, o.createElement(y.Xa, {
                            className: "clips-watch",
                            padding: {
                                bottom: 2
                            },
                            breakpointSmall: {
                                padding: {
                                    bottom: 3
                                }
                            },
                            breakpointLarge: {
                                padding: {
                                    bottom: 5
                                }
                            }
                        }, o.createElement(y.i, {
                            type: y.n.FadeIn,
                            duration: y.k.Long,
                            enabled: !this.state.animationCompleted,
                            onAnimationEnd: this.onAnimationEnd
                        }, o.createElement(Ee.a, {
                            slug: e,
                            pageType: h.PageviewLocation.ClipsViewing
                        }), o.createElement(y.Eb, {
                            background: y.r.Base,
                            display: y.X.Flex,
                            elevation: 3,
                            flexDirection: y.Aa.Column,
                            breakpointLarge: {
                                flexDirection: y.Aa.Row
                            }
                        }, o.createElement(be.a, {
                            slug: e,
                            playerType: g.a.ClipsViewing,
                            setCurrentTime: this.setCurrentTime,
                            currentTime: this.state.currentTime
                        }), o.createElement(ve, {
                            slug: e,
                            currentTime: this.state.currentTime
                        })), o.createElement(A, {
                            slug: e
                        }))), this.renderBranchUpsell())
                    }, t.prototype.renderBranchUpsell = function() {
                        return Object(b.c)(window.navigator.userAgent) && this.props.data.clip ? o.createElement(ye, {
                            broadcasterDisplayName: this.props.data.clip.broadcaster && this.props.data.clip.broadcaster.displayName,
                            gameName: this.props.data.clip.game && this.props.data.clip.game.name
                        }) : null
                    }, t.contextTypes = {
                        scrollToTop: a.func
                    }, t
                }(o.Component)),
                Ne = Object(s.compose)(Object(f.b)("ClipsViewPage", {
                    destination: p.a.ClipsViewing
                }), Object(d.a)(Se, {
                    options: function(e) {
                        return {
                            variables: {
                                slug: e.match.params.slug
                            }
                        }
                    }
                }), Object(c.a)({
                    location: h.PageviewLocation.ClipsViewing,
                    properties: function(e) {
                        return {
                            channel_id: e.data.clip && e.data.clip.broadcaster && e.data.clip.broadcaster.id
                        }
                    },
                    skip: function(e) {
                        return !(e.data.clip && e.data.clip.broadcaster && e.data.clip.broadcaster.id)
                    }
                }))(Te);
            n.d(t, "ClipsView", function() {
                return Ne
            })
        },
        "3dkm": function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return a
            }), n.d(t, "a", function() {
                return o
            });
            var i = n("/7QA");

            function r() {
                return Object(i.d)("N/A", "ClipsRelativeTimeHelper")
            }

            function a(e) {
                if (!e) return r();
                try {
                    var t = new Date(e.replace(/(Z)/i, "")),
                        n = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()));
                    return Object(i.h)(n)
                } catch (e) {
                    return r()
                }
            }

            function o(e) {
                if (e <= 0) return "00:00";
                var t = Math.floor(e / 60).toString(),
                    n = Math.floor(e - 60 * Number(t)).toString();
                return 1 === t.length && (t = "0" + t), 1 === n.length && (n = "0" + n), t + ":" + n
            }
        },
        "3lt/": function(e, t, n) {
            "use strict";
            n("mrSG"), n("uhBA");
            var i = n("L9xt");
            n.o(i, "PageviewContent") && n.d(t, "PageviewContent", function() {
                return i.PageviewContent
            }), n.o(i, "PageviewLocation") && n.d(t, "PageviewLocation", function() {
                return i.PageviewLocation
            }), n.o(i, "PageviewMedium") && n.d(t, "PageviewMedium", function() {
                return i.PageviewMedium
            }), n.o(i, "SpadeEventType") && n.d(t, "SpadeEventType", function() {
                return i.SpadeEventType
            }), n.o(i, "TwitchDataType") && n.d(t, "TwitchDataType", function() {
                return i.TwitchDataType
            })
        },
        "4L7N": function(e, t, n) {
            "use strict";
            var i = n("/MKj"),
                r = n("kRBY"),
                a = n("mrSG"),
                o = n("q1tI"),
                s = n("VwyG"),
                l = n("X7Ac"),
                d = n("yR8l"),
                c = n("MLDe"),
                u = n("v8tf"),
                p = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this,
                            t = this.props.data.clip,
                            n = "";
                        if (t && t.videoQualities) {
                            var i = t.videoQualities[0];
                            n = i.sourceURL
                        }
                        var r = this.props,
                            a = r.broadcasterId,
                            d = r.broadcasterLogin,
                            u = r.forceShow;
                        return o.createElement(s.a, {
                            ownerLogin: this.props.broadcasterLogin,
                            permittedRoles: {
                                editor: !0,
                                staff: !0
                            }
                        }, function(i) {
                            var r = i.permitted;
                            return n && (r || u) ? o.createElement(l.a, {
                                type: l.b.Download,
                                text: e.props.slug,
                                url: n,
                                onShareClick: t ? Object(c.c)(t.id, t.game && t.game.name, a, d, e.props.pageType) : void 0
                            }) : null
                        })
                    }, t
                }(o.Component),
                m = Object(d.a)(u)(p);
            var h = Object(i.connect)(function(e) {
                var t = Object(r.e)(e);
                return {
                    userLogin: t ? t.login : ""
                }
            })(m);
            n.d(t, "a", function() {
                return h
            })
        },
        "4w0E": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "Chat_BanUserFromChatRoom"
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
                                    value: "BanUserFromChatRoomInput"
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
                                value: "banUserFromChatRoom"
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
                                        value: "ban"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "isPermanent"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "bannedUser"
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
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "error"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "code"
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
                    end: 164
                }
            };
            n.loc.source = {
                body: "mutation Chat_BanUserFromChatRoom($input: BanUserFromChatRoomInput!) {\nbanUserFromChatRoom(input: $input) {\nban {\nisPermanent\nbannedUser {\nid\n}\n}\nerror {\ncode\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "5EAu": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "PublishClip"
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
                                    value: "PublishClipInput"
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
                                value: "publishClip"
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
                                        value: "clip"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
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
                                                value: "slug"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "error"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "message"
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
                    end: 120
                }
            };
            n.loc.source = {
                body: "mutation PublishClip($input: PublishClipInput!) {\npublishClip(input: $input) {\nclip {\ntitle\nslug\n}\nerror {\nmessage\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "5jJa": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "GDPRConsent"
                    },
                    variableDefinitions: [],
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
                                        value: "isMinimumGDPRConsentAge"
                                    },
                                    arguments: [],
                                    directives: []
                                }]
                            }
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "requestInfo"
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "isFromEEA"
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
                    end: 90
                }
            };
            n.loc.source = {
                body: "query GDPRConsent {\ncurrentUser {\nid\nisMinimumGDPRConsentAge\n}\nrequestInfo {\nisFromEEA\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "5zXJ": function(e, t, n) {
            "use strict";
            n.d(t, "v", function() {
                return a
            }), n.d(t, "c", function() {
                return o
            }), n.d(t, "b", function() {
                return s
            }), n.d(t, "a", function() {
                return l
            }), n.d(t, "t", function() {
                return d
            }), n.d(t, "n", function() {
                return c
            }), n.d(t, "p", function() {
                return u
            }), n.d(t, "q", function() {
                return p
            }), n.d(t, "o", function() {
                return m
            }), n.d(t, "r", function() {
                return h
            }), n.d(t, "l", function() {
                return f
            }), n.d(t, "m", function() {
                return g
            }), n.d(t, "j", function() {
                return v
            }), n.d(t, "g", function() {
                return E
            }), n.d(t, "e", function() {
                return b
            }), n.d(t, "i", function() {
                return k
            }), n.d(t, "h", function() {
                return y
            }), n.d(t, "f", function() {
                return S
            }), n.d(t, "k", function() {
                return T
            }), n.d(t, "u", function() {
                return N
            }), n.d(t, "s", function() {
                return _
            }), n.d(t, "d", function() {
                return C
            });
            var i, r = n("uYEN"),
                a = {
                    ERROR_DISPLAY_TIMEOUT: 5e3,
                    GET_BALANCE_RATE_LIMIT: 5e3,
                    UNDO_PROMPT_DURATION: 5e3
                },
                o = "https://d3aqoihi2n8ty8.cloudfront.net",
                s = o + "/cheer",
                l = o + "/actions",
                d = "bonus",
                c = 8e5,
                u = 1e5,
                p = 25e4,
                m = 500,
                h = 1e3,
                f = "cheer",
                g = r.a.Purple,
                v = "UNKNOWN",
                E = "FIRST_PARTY",
                b = "CUSTOM",
                k = "SPONSORED",
                y = "THIRD_PARTY",
                S = "DISPLAY_ONLY",
                T = ((i = {})[r.a.Gray] = "#979797", i[r.a.Purple] = "#9c3ee8", i[r.a.Green] = "#1db2a5", i[r.a.Blue] = "#0099fe", i[r.a.Red] = "#f43021", i[r.a.Yellow] = "#f3a71a", i),
                N = "bits_sponsored_cheermotes",
                _ = "bits_sponsored_cheermotes_announcement",
                C = "bits_charity_event"
        },
        "5zf8": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            }), n.d(t, "b", function() {
                return l
            });
            var i, r, a = n("/7QA");

            function o(e, t) {
                switch (e) {
                    case i.Second:
                        return Object(a.d)("{secondCount, plural, one {# second} other {# seconds}}", {
                            secondCount: t
                        }, "formatDuration");
                    case i.Minute:
                        return Object(a.d)("{minuteCount, plural, one {# minute} other {# minutes}}", {
                            minuteCount: t
                        }, "formatDuration");
                    case i.Hour:
                        return Object(a.d)("{hourCount, plural, one {# hour} other {# hours}}", {
                            hourCount: t
                        }, "formatDuration");
                    case i.Day:
                        return Object(a.d)("{dayCount, plural, one {# day} other {# days}}", {
                            dayCount: t
                        }, "formatDuration");
                    case i.Week:
                        return Object(a.d)("{weekCount, plural, one {# week} other {# weeks}}", {
                            weekCount: t
                        }, "formatDuration");
                    case i.Month:
                        return Object(a.d)("{monthCount, plural, one {# month} other {# months}}", {
                            monthCount: t
                        }, "formatDuration");
                    default:
                        return ""
                }
            }

            function s(e, t) {
                switch (e) {
                    case i.Second:
                        return Object(a.d)("{secondCount}s", {
                            secondCount: t
                        }, "formatDuration");
                    case i.Minute:
                        return Object(a.d)("{minuteCount}m", {
                            minuteCount: t
                        }, "formatDuration");
                    case i.Hour:
                        return Object(a.d)("{hourCount}h", {
                            hourCount: t
                        }, "formatDuration");
                    case i.Day:
                        return Object(a.d)("{dayCount}d", {
                            dayCount: t
                        }, "formatDuration");
                    case i.Week:
                        return Object(a.d)("{weekCount}w", {
                            weekCount: t
                        }, "formatDuration");
                    case i.Month:
                        return Object(a.d)("{monthCount}mo", {
                            monthCount: t
                        }, "formatDuration");
                    default:
                        return ""
                }
            }

            function l(e, t) {
                var n;
                switch (void 0 === t && (t = r.Humanized), t === r.ClockAuto && (t = e >= 3600 ? r.ClockHMS : r.ClockMS), t) {
                    case r.ClockHM:
                    case r.ClockHMS:
                        n = i.Hour;
                        break;
                    case r.ClockMS:
                        n = i.Minute
                }
                var l = 2;
                t === r.ClockHMS && (l = 3);
                var c = function(e, t) {
                        void 0 === t && (t = i.Month);
                        var n = {};
                        return n.seconds = e, e < 60 || t === i.Second ? n : (n.minutes = Math.floor(e / 60), n.seconds = e % 60, n.minutes < 60 || t === i.Minute ? n : (n.hours = Math.floor(n.minutes / 60), n.minutes = n.minutes % 60, n.hours < 24 || t === i.Hour ? n : (n.days = Math.floor(n.hours / 24), n.hours = n.hours % 24, n.days < 7 || t === i.Day ? n : n.days <= 26 || t === i.Week ? (n.weeks = Math.floor(n.days / 7), n.days = n.days % 7, n) : (n.months = Math.round((n.days + 3) / 30), n))))
                    }(e, n),
                    u = Object.keys(c);
                if (u.forEach(function(e, n) {
                        t !== r.Humanized && t !== r.HumanizedShort || c[e] || delete c[e], n < u.length - l && delete c[e]
                    }), t === r.Humanized) return function(e) {
                    return e.months ? o(i.Month, e.months) : e.weeks && e.days ? o(i.Week, e.weeks) + " " + o(i.Day, e.days) : e.weeks ? o(i.Week, e.weeks) : e.days && e.hours ? o(i.Day, e.days) + " " + o(i.Hour, e.hours) : e.days ? o(i.Day, e.days) : e.hours && e.minutes ? o(i.Hour, e.hours) + " " + o(i.Minute, e.minutes) : e.hours ? o(i.Hour, e.hours) : e.minutes && e.seconds ? o(i.Minute, e.minutes) + " " + o(i.Second, e.seconds) : e.minutes ? o(i.Minute, e.minutes) : o(i.Second, e.seconds || 0)
                }(c);
                if (t === r.HumanizedShort) return function(e) {
                    return e.months ? s(i.Month, e.months) : e.weeks && e.days ? "" + s(i.Week, e.weeks) + s(i.Day, e.days) : e.weeks ? s(i.Week, e.weeks) : e.days && e.hours ? "" + s(i.Day, e.days) + s(i.Hour, e.hours) : e.days ? s(i.Day, e.days) : e.hours && e.minutes ? "" + s(i.Hour, e.hours) + s(i.Minute, e.minutes) : e.hours ? s(i.Hour, e.hours) : e.minutes && e.seconds ? "" + s(i.Minute, e.minutes) + s(i.Second, e.seconds) : e.minutes ? s(i.Minute, e.minutes) : s(i.Second, e.seconds || 0)
                }(c);
                var p = ":",
                    m = !1;
                switch (a.p.intl.getLanguageCode()) {
                    case "cy":
                    case "da":
                    case "fi":
                    case "id":
                    case "nb":
                    case "si":
                        p = ".";
                        break;
                    case "af":
                    case "fr":
                    case "lt":
                        m = !0
                }
                var h = c.seconds || 0,
                    f = c.minutes || 0,
                    g = c.hours || 0;
                switch (t) {
                    case r.ClockHM:
                    case r.ClockHMS:
                        var v = (m ? d(g, 2) : g) + p + d(f, 2);
                        return t === r.ClockHMS && (v += p + d(h, 2)), v;
                    case r.ClockMS:
                        return (m ? d(f, 2) : f) + p + d(h, 2)
                }
            }

            function d(e, t) {
                var n = e.toString();
                return n.length < t ? "0".repeat(t - n.length) + n : n
            }! function(e) {
                e[e.Second = 0] = "Second", e[e.Minute = 1] = "Minute", e[e.Hour = 2] = "Hour", e[e.Day = 3] = "Day", e[e.Week = 4] = "Week", e[e.Month = 5] = "Month"
            }(i || (i = {})),
            function(e) {
                e[e.Humanized = 0] = "Humanized", e[e.HumanizedShort = 1] = "HumanizedShort", e[e.ClockAuto = 2] = "ClockAuto", e[e.ClockHM = 3] = "ClockHM", e[e.ClockMS = 4] = "ClockMS", e[e.ClockHMS = 5] = "ClockHMS"
            }(r || (r = {}))
        },
        "6llN": function(e, t, n) {},
        "8jSG": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "blockedUsers"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "User"
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
                                value: "blockedUsers"
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
                    end: 56
                }
            };
            n.loc.source = {
                body: "fragment blockedUsers on User {\nid\nblockedUsers {\nid\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "9KaG": function(e, t, n) {},
        "9o5F": function(e, t, n) {
            "use strict";
            var i = n("/MKj"),
                r = n("fvjX"),
                a = n("y5D0"),
                o = n("mrSG"),
                s = n("q1tI"),
                l = n("/7QA"),
                d = n("1/iK"),
                c = n("tKDy"),
                u = n("Ue10"),
                p = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onLoginClick = function() {
                            Object(c.n)({
                                page: c.e.Bubble,
                                source: t.props.source,
                                target: c.d.LoginButton,
                                action: c.c.Click
                            }), t.props.login()
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        return s.createElement(s.Fragment, null, this.renderCloseButton(), s.createElement(u.Xa, {
                            padding: {
                                y: 2,
                                left: 2,
                                right: 3
                            }
                        }, s.createElement(u.Xa, {
                            margin: {
                                bottom: .5
                            }
                        }, s.createElement(u.W, {
                            fontSize: u.Ca.Size4,
                            bold: !0,
                            lineHeight: u.Ya.Heading
                        }, this.getHeaderText())), s.createElement(u.Xa, {
                            margin: {
                                bottom: 1
                            }
                        }, s.createElement(u.W, {
                            fontSize: u.Ca.Size5,
                            color: u.O.Alt2
                        }, this.getBodyText())), s.createElement(u.Eb, {
                            fontSize: u.Ca.Size5
                        }, s.createElement(u.U, {
                            autoFocus: !0,
                            onClick: this.onLoginClick
                        }, Object(l.d)("Log In", "AuthContextBalloon")))))
                    }, t.prototype.renderCloseButton = function() {
                        var e = null;
                        return this.props.source === d.a.Chat && (e = s.createElement(u.Xa, {
                            position: u.jb.Absolute,
                            attachRight: !0,
                            attachTop: !0,
                            padding: .5
                        }, s.createElement(u.A, {
                            icon: u.tb.Close,
                            size: u.B.Small,
                            type: u.C.Secondary,
                            onClick: this.props.onClose
                        }))), e
                    }, t.prototype.getHeaderText = function() {
                        return this.props.source === d.a.FollowButton ? this.props.targetUserDisplayName ? Object(l.d)("Follow {userDisplayName}?", {
                            userDisplayName: this.props.targetUserDisplayName
                        }, "AuthContextBalloon") : Object(l.d)("Follow this channel?", "AuthContextBalloon") : this.props.targetUserDisplayName ? Object(l.d)("Like watching {userDisplayName}?", {
                            userDisplayName: this.props.targetUserDisplayName
                        }, "AuthContextBalloon") : Object(l.d)("Like watching this channel?", "AuthContextBalloon")
                    }, t.prototype.getBodyText = function() {
                        return this.props.source === d.a.FollowButton ? this.props.targetUserDisplayName ? Object(l.d)("Don't miss out on future streams. Follow {userDisplayName} to get updates when they go live.", {
                            userDisplayName: this.props.targetUserDisplayName
                        }, "AuthContextBalloon") : Object(l.d)("Don't miss out on future streams. Follow this channel to get updates when they go live.", "AuthContextBalloon") : Object(l.d)("Be a part of the stream. Send a chat message to get in on the conversation.", "AuthContextBalloon")
                    }, t
                }(s.Component);
            var m = Object(i.connect)(null, function(e, t) {
                return Object(r.bindActionCreators)({
                    login: function() {
                        return Object(a.e)(t.source)
                    }
                }, e)
            })(p);
            n.d(t, "a", function() {
                return m
            })
        },
        AKMF: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            });
            var i = n("mrSG"),
                r = n("/7QA"),
                a = n("S1Za");

            function o(e) {
                return e.videoPlayer.activeVideoPlayerInstanceRefID
            }
            r.p.store.registerReducer("videoPlayer", function(e, t) {
                switch (void 0 === e && (e = {
                    activeVideoPlayerInstanceRefID: void 0
                }), t.type) {
                    case a.a:
                        return i.__assign({}, e, {
                            activeVideoPlayerInstanceRefID: t.playerRefID
                        });
                    default:
                        return e
                }
            })
        },
        Addw: function(e, t, n) {
            "use strict";

            function i(e) {
                var t = Math.floor(e / 3600),
                    n = Math.floor((e - 3600 * t) / 60),
                    i = e - 3600 * t - 60 * n;
                return t < 10 && (t = "0" + t), n < 10 && (n = "0" + n), i < 10 && (i = "0" + i), t + "h" + n + "m" + i + "s"
            }
            n.d(t, "a", function() {
                return i
            })
        },
        Ar2k: function(e, t, n) {
            "use strict";
            var i, r = n("mrSG"),
                a = n("TSYQ"),
                o = n("q1tI"),
                s = n("/0dD"),
                l = n("76Lv"),
                d = n("Ue10"),
                c = (n("f0/i"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e, t = ((e = {})[Object(l.b)(s.a.Dark)] = this.props.forceDarkTheme, e),
                            n = r.__assign({
                                direction: d.v.Right,
                                show: !0
                            }, this.props.balloonProps);
                        return o.createElement(d.Xa, {
                            className: a("rich-content-tooltip", t)
                        }, this.props.children, o.createElement(d.u, r.__assign({}, n), o.createElement("div", {
                            ref: this.props.refCallback,
                            className: "rich-content-tooltip__pointer-target"
                        }, o.createElement(d.Xa, {
                            padding: .5
                        }, this.props.content))))
                    }, t
                }(o.Component)),
                u = n("/7QA"),
                p = (n("lX3L"), function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.state = {
                            isError: !1,
                            options: null,
                            richOptions: null,
                            hovering: !1
                        }, n.logger = u.p.logger.withCategory("tooltip-layer"), n.clearTimeoutAndRun = function(e, t) {
                            void 0 === t && (t = 0), n.displayTimeout && (clearTimeout(n.displayTimeout), n.displayTimeout = 0), n.displayTimeout = setTimeout(function() {
                                e(), n.displayTimeout = 0
                            }, t)
                        }, n.setRef = function(e) {
                            n.removeEventListeners(), n.addEventListeners(e), n.ref = e
                        }, n.addEventListeners = function(e) {
                            e && (e.addEventListener("mouseenter", n.handleMouseEnter), e.addEventListener("mouseleave", n.handleMouseLeave), e.addEventListener("click", n.handleMouseClick))
                        }, n.removeEventListeners = function() {
                            n.ref && (n.ref.removeEventListener("mouseenter", n.handleMouseEnter), n.ref.removeEventListener("mouseleave", n.handleMouseLeave), n.ref.removeEventListener("click", n.handleMouseClick))
                        }, n.handleMouseEnter = function() {
                            n.setState({
                                hovering: !0
                            })
                        }, n.handleMouseLeave = function() {
                            n.setState({
                                hovering: !1
                            }, function() {
                                n.displayTimeout || n.hideTooltip()
                            })
                        }, n.handleMouseClick = function() {
                            n.setState({
                                hovering: !1
                            }, function() {
                                n.hideTooltip(!0)
                            })
                        }, i = n, n
                    }
                    return r.__extends(t, e), t.prototype.componentDidCatch = function(e, t) {
                        var n = this;
                        this.setState({
                            isError: !0
                        }, function() {
                            u.p.stats.recordComponentError("TooltipLayer"), n.logger.error(e, "A unhandled exception occurred in the component hierarchy", {
                                info: t
                            })
                        })
                    }, t.prototype.render = function() {
                        if (this.state.isError) return null;
                        var e = this.state.options && this.state.options.from || this.state.richOptions && this.state.richOptions.from;
                        if (!e) return null;
                        var t = this.state.richOptions ? 2 : 0,
                            n = e.getBoundingClientRect(),
                            i = {
                                transform: "translate(" + Math.floor(n.left) + "px, " + Math.floor(n.top) + "px)",
                                width: n.width + t,
                                height: n.height
                            },
                            a = o.createElement("div", {
                                style: {
                                    width: i.width,
                                    height: i.height
                                }
                            }),
                            s = null;
                        return this.state.options ? s = o.createElement(d.Yb, {
                            direction: this.state.options.direction,
                            align: this.state.options.align,
                            label: this.state.options.label,
                            width: this.state.options.width,
                            show: !0
                        }, a) : this.state.richOptions && (s = o.createElement(c, {
                            content: this.state.richOptions.richContent,
                            refCallback: this.state.richOptions.allowHover && this.setRef || void 0,
                            forceDarkTheme: this.state.richOptions.forceDarkTheme,
                            balloonProps: r.__assign({}, this.state.richOptions.balloonProps, {
                                show: !0
                            })
                        }, a)), o.createElement("div", {
                            className: "tooltip-layer",
                            style: i
                        }, s)
                    }, t.prototype.showTooltip = function(e) {
                        var t = this;
                        this.clearTimeoutAndRun(function() {
                            t.setState({
                                options: e,
                                richOptions: null
                            })
                        }), this.hoverTimeout && (clearTimeout(this.hoverTimeout), this.hoverTimeout = 0)
                    }, t.prototype.showRichTooltip = function(e) {
                        var t = this;
                        this.clearTimeoutAndRun(function() {
                            t.setState({
                                richOptions: e,
                                options: null
                            })
                        }, e && e.delayOpenMS && !this.hoverTimeout ? e.delayOpenMS : 0), this.hoverTimeout && (clearTimeout(this.hoverTimeout), this.hoverTimeout = 0)
                    }, t.prototype.hideTooltip = function(e) {
                        var t = this;
                        e || this.state.hovering || this.displayTimeout || (this.hoverTimeout = setTimeout(function() {
                            clearTimeout(t.hoverTimeout), t.hoverTimeout = 0
                        }, 1e3)), this.clearTimeoutAndRun(function() {
                            t.state.hovering || t.setState({
                                options: null,
                                richOptions: null
                            })
                        }, !e && this.state.richOptions && this.state.richOptions.allowHover ? 400 : 0)
                    }, t
                }(o.Component));

            function m() {
                return function(e) {
                    return function(t) {
                        function n() {
                            var e = null !== t && t.apply(this, arguments) || this;
                            return e.logger = u.k.withCategory("TooltipLayer"), e.show = function(t) {
                                i ? i.showTooltip(t) : e.logger.error(new Error, "Attempted to show a tooltip in the global layer, but the global layer was not mounted.")
                            }, e.showRich = function(t) {
                                i ? i.showRichTooltip(t) : e.logger.error(new Error, "Attempted to show a tooltip in the global layer, but the global layer was not mounted.")
                            }, e.hide = function() {
                                i ? i.hideTooltip() : e.logger.error(new Error, "Attempted to show a tooltip in the global layer, but the global layer was not mounted.")
                            }, e
                        }
                        return r.__extends(n, t), n.prototype.render = function() {
                            var t = {
                                tooltipLayer: {
                                    show: this.show,
                                    showRich: this.showRich,
                                    hide: this.hide
                                }
                            };
                            return o.createElement(e, r.__assign({}, this.props, t))
                        }, n.displayName = "WithTooltipLayerManipulation(" + (e.displayName || e.name || "Component") + ")", n
                    }(o.Component)
                }
            }
            n.d(t, "a", function() {
                return c
            }), n.d(t, !1, function() {}), n.d(t, "c", function() {
                return m
            }), n.d(t, "b", function() {
                return p
            }), n.d(t, !1, function() {})
        },
        "BQs+": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            }), n.d(t, "c", function() {
                return c
            }), n.d(t, "b", function() {
                return u
            });
            var i, r = n("mrSG"),
                a = n("/7QA"),
                o = n("2xye"),
                s = n("I6K6"),
                l = n("bTcf"),
                d = n("L7EG");

            function c(e, t, n) {
                return r.__awaiter(this, void 0, void 0, function() {
                    var i, l, u, p;
                    return r.__generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return r.trys.push([0, 2, , 3]), [4, n.query({
                                    query: d,
                                    variables: {
                                        videoID: e.id
                                    }
                                })];
                            case 1:
                                return i = r.sent().data, l = function(e, t) {
                                    return {
                                        id: e.id,
                                        owner: t.owner,
                                        broadcastType: t.broadcastType,
                                        game: t.game
                                    }
                                }(e, i.video), u = {
                                    channel: l.owner ? l.owner.login : null,
                                    channel_id: Number(e.owner.id),
                                    game: l.game ? l.game.name : null,
                                    partner: !!l.owner && l.owner.roles.isPartner,
                                    location: t.location,
                                    share_context: t.collectionID ? o.ShareItemContext.Collection : null,
                                    share_platform: t.platform,
                                    shared_item_id: t.collectionID ? t.collectionID : l.id,
                                    shared_item_type: t.collectionID ? o.ShareItemType.Collection : Object(s.a)(l.broadcastType),
                                    shared_item_url: t.shareURL,
                                    source_item_id: l.id,
                                    source_item_type: Object(s.a)(l.broadcastType)
                                }, a.p.tracking.track(o.SpadeEventType.ShareItem, u), [3, 3];
                            case 2:
                                return p = r.sent(), a.k.error(p.toString(), c.name), [3, 3];
                            case 3:
                                return [2]
                        }
                    })
                })
            }

            function u(e, t, n) {
                return r.__awaiter(this, void 0, void 0, function() {
                    var i, s, d;
                    return r.__generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return r.trys.push([0, 2, , 3]), [4, n.query({
                                    query: l,
                                    variables: {
                                        creatorID: e.owner.id
                                    }
                                })];
                            case 1:
                                return i = r.sent().data, s = {
                                    channel: i.user ? i.user.login : null,
                                    channel_id: Number(e.owner.id),
                                    game: null,
                                    partner: !!i.user && i.user.roles.isPartner,
                                    location: t.location,
                                    share_context: null,
                                    share_platform: t.platform,
                                    shared_item_id: e.id,
                                    shared_item_type: o.ShareItemType.Collection,
                                    shared_item_url: t.shareURL,
                                    source_item_id: e.id,
                                    source_item_type: o.SourceItemType.Collection
                                }, a.p.tracking.track(o.SpadeEventType.ShareItem, s), [3, 3];
                            case 2:
                                return d = r.sent(), a.k.error(d.toString(), u.name), [3, 3];
                            case 3:
                                return [2]
                        }
                    })
                })
            }! function(e) {
                e.Copy = "link", e.Embed = "option_embed", e.Facebook = "fb", e.Link = "option_link", e.Reddit = "reddit", e.Twitter = "twitter", e.Unknown = "", e.VKontakte = "vk", e.Download = "download"
            }(i || (i = {}))
        },
        Ba7Q: function(e, t, n) {
            "use strict";
            var i, r = n("/MKj"),
                a = n("kRBY"),
                o = n("mrSG"),
                s = n("TSYQ"),
                l = n("q1tI"),
                d = n("oJmH"),
                c = n("/7QA"),
                u = n("yR8l"),
                p = n("geRD"),
                m = n("JcRA"),
                h = n("0OKo"),
                f = n("Ar2k"),
                g = n("Ue10"),
                v = n("htqZ"),
                E = (n("q5AV"), n("i46O"));
            ! function(e) {
                e.Toggle = "type_toggle", e.Button = "type_button"
            }(i || (i = {}));
            var b = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isFollowing: !1,
                            disableNotifications: !0
                        }, t.toggleNotificationsEnabled = function() {
                            var e = t.getFollowData();
                            if (e) {
                                var n = e && e.id || "",
                                    i = {
                                        disableNotifications: !t.state.disableNotifications,
                                        targetID: n
                                    },
                                    r = {
                                        followUser: {
                                            __typename: "FollowUserPayload",
                                            follow: {
                                                __typename: "Follow",
                                                user: {
                                                    __typename: "User",
                                                    id: n,
                                                    self: {
                                                        __typename: "UserSelfConnection",
                                                        follower: {
                                                            __typename: "FollowerEdge",
                                                            disableNotifications: !t.state.disableNotifications
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    };
                                t.props.followUser(Object(p.b)(i, r)), t.setState(function(e) {
                                    return {
                                        disableNotifications: !e.disableNotifications
                                    }
                                })
                            }
                        }, t.setButtonContainerRef = function(e) {
                            t.buttonContainerRef !== e && (t.removeEventListeners(), t.buttonContainerRef = e, t.addEventListeners())
                        }, t.onMouseEnter = function() {
                            if (t.buttonContainerRef && t.props.showTooltips) {
                                var e = t.state.disableNotifications ? Object(c.d)("Turn notifications on", "LiveNotificationsToggle") : Object(c.d)("Turn notifications off", "LiveNotificationsToggle");
                                t.props.tooltipLayer.show({
                                    from: t.buttonContainerRef,
                                    label: e,
                                    direction: g.ac.Right
                                })
                            }
                        }, t.onMouseLeave = function() {
                            t.props.tooltipLayer.hide()
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.componentWillMount = function() {
                        var e = this.getFollowData();
                        if (e) {
                            var t = e.self && e.self.follower && e.self.follower.disableNotifications;
                            this.setState({
                                isFollowing: null !== t || !1,
                                disableNotifications: t
                            })
                        }
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        var t = null;
                        e.followData && e.followData ? t = e.followData : !e.data || e.data.loading || e.data.error || (t = e.data.user), t && this.setState({
                            isFollowing: t && t.self && t.self.follower && null !== t.self.follower.disableNotifications || !1,
                            disableNotifications: !(t && t.self && t.self.follower && null !== t.self.follower.disableNotifications) || t.self.follower.disableNotifications
                        })
                    }, t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive(), this.addEventListeners()
                    }, t.prototype.componentWillUnmount = function() {
                        this.removeEventListeners()
                    }, t.prototype.render = function() {
                        return this.props.toggleType && this.props.toggleType === i.Button ? this.renderTypeButton() : this.renderTypeToggle()
                    }, t.prototype.renderTypeButton = function() {
                        var e = this.state.disableNotifications,
                            t = e ? g.tb.NotificationBellOff : g.tb.NotificationBell,
                            n = e ? g.tb.NotificationBell : g.tb.NotificationBellOff,
                            i = s("live-notifications__btn");
                        return l.createElement(g.Eb, {
                            className: i,
                            refDelegate: this.setButtonContainerRef
                        }, l.createElement(m.a, {
                            tabIndex: this.props.tabIndex || 0,
                            icon: t,
                            iconOnHover: n,
                            type: g.F.Text,
                            onClick: this.toggleNotificationsEnabled
                        }))
                    }, t.prototype.renderTypeToggle = function() {
                        var e, t;
                        return this.state.isFollowing ? this.state.disableNotifications ? (t = "live-notifications-toggle__status-text--disabled", e = Object(c.d)("Opt in to notifications to receive updates on this channel's activity, including when they go live.", "LiveNotificationsToggle")) : (t = "live-notifications-toggle__status-text--enabled", e = Object(c.d)("You will be notified on this channel's activity, including when they go live.", "LiveNotificationsToggle")) : (e = Object(c.d)("Follow this channel to receive notifications when they go live.", "LiveNotificationsToggle"), t = "live-notifications-toggle__status-text--not-following"), l.createElement(g.Eb, {
                            color: g.O.Base,
                            display: g.X.Flex,
                            flexWrap: g.Ba.Wrap
                        }, l.createElement(g.Xa, {
                            display: g.X.Flex,
                            flexWrap: g.Ba.NoWrap,
                            fullWidth: !0,
                            justifyContent: g.Wa.Between
                        }, l.createElement(g.Xa, {
                            display: g.X.Flex,
                            padding: {
                                right: 2
                            }
                        }, l.createElement("span", null, l.createElement(g.W, {
                            fontSize: g.Ca.Size4,
                            bold: !0
                        }, Object(c.d)("Notifications", "LiveNotificationsToggle")))), l.createElement(g.Xa, {
                            display: g.X.Flex,
                            flexShrink: 0
                        }, l.createElement(g.Xb, {
                            onChange: this.toggleNotificationsEnabled,
                            checked: !this.state.disableNotifications,
                            "data-test-selector": "live-notifications-toggle__toggle",
                            "data-a-target": "notifications-toggle",
                            disabled: !this.state.isFollowing
                        }))), l.createElement(g.Xa, {
                            display: g.X.InlineFlex,
                            padding: {
                                bottom: 1
                            }
                        }, l.createElement(g.W, {
                            type: g.Vb.Span,
                            color: g.O.Alt2,
                            "data-test-selector": t
                        }, e)))
                    }, t.prototype.getFollowData = function() {
                        return this.props.followData || this.props.data && this.props.data.user
                    }, t.prototype.addEventListeners = function() {
                        this.buttonContainerRef && (this.buttonContainerRef.addEventListener("mouseover", this.onMouseEnter), this.buttonContainerRef.addEventListener("mouseleave", this.onMouseLeave))
                    }, t.prototype.removeEventListeners = function() {
                        this.buttonContainerRef && (this.buttonContainerRef.removeEventListener("mouseover", this.onMouseEnter), this.buttonContainerRef.removeEventListener("mouseleave", this.onMouseLeave))
                    }, t
                }(l.Component),
                k = Object(d.compose)(Object(u.a)(E, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.channelLogin
                            }
                        }
                    },
                    skip: function(e) {
                        return !(e.firstPageLoaded && e.isLoggedIn && e.channelLogin && !e.followData)
                    }
                }), Object(u.a)(v, {
                    name: "followUser"
                }), Object(f.c)(), Object(h.a)("LiveNotificationsToggle"))(b);
            var y = Object(r.connect)(function(e) {
                return {
                    firstPageLoaded: e.session.firstPageLoaded,
                    isLoggedIn: Object(a.f)(e)
                }
            })(k);
            n.d(t, "a", function() {
                return y
            }), n.d(t, "b", function() {
                return i
            })
        },
        BhFH: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return l
            });
            var i = n("mrSG"),
                r = n("yR8l"),
                a = n("8jSG"),
                o = n("cMjZ"),
                s = n("kSkr");

            function l() {
                var e = this;
                return Object(r.a)(s, {
                    props: function(t) {
                        return {
                            blockUserMutation: function(n, r, s, l) {
                                return i.__awaiter(e, void 0, void 0, function() {
                                    return i.__generator(this, function(e) {
                                        switch (e.label) {
                                            case 0:
                                                return t.mutate ? [4, t.mutate({
                                                    variables: {
                                                        input: {
                                                            targetUserID: n,
                                                            sourceContext: s,
                                                            reason: r
                                                        }
                                                    },
                                                    optimisticResponse: {
                                                        blockUser: {
                                                            __typename: "BlockUserPayload",
                                                            targetUser: {
                                                                __typename: "User",
                                                                id: n
                                                            }
                                                        }
                                                    },
                                                    update: function(e) {
                                                        var t = e.readFragment({
                                                            id: Object(o.a)(l),
                                                            fragment: a
                                                        });
                                                        t && (t.blockedUsers.push({
                                                            id: n,
                                                            __typename: "User"
                                                        }), e.writeFragment({
                                                            id: Object(o.a)(l),
                                                            fragment: a,
                                                            data: t
                                                        }))
                                                    }
                                                })] : [3, 2];
                                            case 1:
                                                return e.sent(), [3, 3];
                                            case 2:
                                                throw new Error("blockUserMutation is not ready");
                                            case 3:
                                                return [2]
                                        }
                                    })
                                })
                            }
                        }
                    }
                })
            }
        },
        By5U: function(e, t) {},
        C94G: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return u
            }), n.d(t, "b", function() {
                return p
            });
            var i, r, a = n("mrSG"),
                o = n("ix15"),
                s = n("cr+I"),
                l = n("/7QA"),
                d = n("D7An"),
                c = {
                    key: "cvp-log",
                    validValues: ["debug", "error", "info", "warn"],
                    defaultValue: "error"
                };

            function u(e) {
                return a.__awaiter(this, void 0, void 0, function() {
                    var t, r;
                    return a.__generator(this, function(a) {
                        switch (a.label) {
                            case 0:
                                if (i) return e && e(i), [2];
                                a.label = 1;
                            case 1:
                                return a.trys.push([1, 3, , 4]), [4, Promise.all([n.e(0), n.e(97)]).then(function() {
                                    var e = n("zK2r");
                                    return "object" == typeof e && e && e.__esModule ? e : Object.assign({}, "object" == typeof e && e, {
                                        default: e
                                    })
                                })];
                            case 2:
                                return t = a.sent(), i = t.Player, e && e(i), [3, 4];
                            case 3:
                                return r = a.sent(), l.p.logger.error(r, "Unable to load twitch-player-ui chunk"), [3, 4];
                            case 4:
                                return [2]
                        }
                    })
                })
            }

            function p() {
                return a.__awaiter(this, void 0, void 0, function() {
                    var e, t;
                    return a.__generator(this, function(n) {
                        switch (n.label) {
                            case 0:
                                if (e = l.p.logger.withCategory("player-core"), !(t = function() {
                                        var e = l.p.store.getState(),
                                            t = !(!e.session.user || !e.session.user.roles) && e.session.user.roles.isStaff,
                                            n = l.p.experiments.getAssignment(t ? d.b.CVPStaffVersion : d.b.CVPPlayerVersion),
                                            i = l.p.experiments.getAssignment(d.b.CVPPlayerType);
                                        if (!n) return;
                                        return {
                                            forceAsmJs: i === r.ASM,
                                            logLevel: function() {
                                                var e = s.parse(window.location.search)[c.key];
                                                if (!e || -1 === c.validValues.indexOf(e)) return c.defaultValue;
                                                return e
                                            }(),
                                            value: n
                                        }
                                    }())) return e.warn("Player core load options are invalid", {
                                    playerCoreOptions: t
                                }), [2];
                                n.label = 1;
                            case 1:
                                return n.trys.push([1, 3, , 4]), [4, Object(o.loadMediaPlayer)(t, !0)];
                            case 2:
                                return n.sent(), [3, 4];
                            case 3:
                                return n.sent(), [3, 4];
                            case 4:
                                return [2]
                        }
                    })
                })
            }! function(e) {
                e.ASM = "asmjs"
            }(r || (r = {}))
        },
        CHEQ: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ClipsChatCard"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "slug"
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
                                value: "clip"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "slug"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "slug"
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
                                        value: "video"
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
                    end: 123
                }
            };
            n.loc.source = {
                body: "query ClipsChatCard($slug: ID!) {\nclip(slug: $slug) {\nid\nvideoOffsetSeconds\ncreatedAt\ncurator {\nid\nlogin\n}\nvideo {\nid\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        CLrI: function(e, t, n) {
            "use strict";
            var i, r;
            n.d(t, "a", function() {
                    return i
                }), n.d(t, "b", function() {
                    return r
                }),
                function(e) {
                    e.TrackingID = "trackingID", e.GameName = "game", e.GameID = "gameID", e.Title = "title", e.Start = "start", e.End = "end"
                }(i || (i = {})),
                function(e) {
                    e.VideoStartTime = "t"
                }(r || (r = {}))
        },
        CYfc: function(e, t, n) {
            "use strict";
            var i = n("vhpE");
            n.d(t, "a", function() {
                return i.a
            }), n.d(t, "b", function() {
                return i.b
            })
        },
        CZEr: function(e, t, n) {
            var i = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "FollowButton_UnfollowUser"
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
                                    value: "UnfollowUserInput"
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
                                value: "unfollowUser"
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
                                        value: "follow"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "disableNotifications"
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
                                                    kind: "FragmentSpread",
                                                    name: {
                                                        kind: "Name",
                                                        value: "followButtonFragment"
                                                    },
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
                    end: 224
                }
            };
            i.loc.source = {
                body: '#import "twilight/common/queries/follow-button-fragment.gql"\nmutation FollowButton_UnfollowUser($input: UnfollowUserInput!) {\nunfollowUser(input: $input) {\nfollow {\ndisableNotifications\nuser {\n...followButtonFragment\n}\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var r = {};
            i.definitions = i.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !r[t] && (r[t] = !0, !0)
                })
            }(n("V94A").definitions)), e.exports = i
        },
        ClZk: function(e, t, n) {
            "use strict";
            n.d(t, "c", function() {
                return s
            }), n.d(t, "f", function() {
                return l
            }), n.d(t, "d", function() {
                return d
            }), n.d(t, "e", function() {
                return c
            }), n.d(t, "b", function() {
                return u
            }), n.d(t, "a", function() {
                return p
            });
            var i = n("mrSG"),
                r = n("KxT4"),
                a = n("eLB1"),
                o = n("SmhC");

            function s(e, t) {
                var n = e.gdpr,
                    i = n.status,
                    r = n.vendorPreferences;
                return i !== a.a.Skip && (i === a.a.BelowMinimumAge || !l(Object(o.a)(), r, t))
            }

            function l(e, t, n) {
                return void 0 !== t[n] ? t[n] : e[n].defaultConsent
            }

            function d(e) {
                return Object(r.f)() && e === a.a.ConsentRequired
            }

            function c(e) {
                return function(e) {
                    return e.gdpr.status === a.a.Loading
                }(e) || d(e.gdpr.status)
            }

            function u(e, t) {
                var n = i.__assign({}, e);
                return n = Object.keys(n).reduce(function(e, n) {
                    var r;
                    return i.__assign({}, e, ((r = {})[n] = t, r))
                }, n)
            }

            function p(e, t) {
                return Object.keys(e).every(function(n) {
                    return e[n] === t
                })
            }
        },
        DJtx: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "Clips_ModalDelete"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "slug"
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
                                value: "clip"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "slug"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "slug"
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
                                        value: "broadcaster"
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
                                        value: "thumbnailURL"
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
                                        value: "title"
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
                    end: 143
                }
            };
            n.loc.source = {
                body: "query Clips_ModalDelete($slug: ID!) {\nclip(slug: $slug) {\nid\nbroadcaster {\nid\n}\ncurator {\nid\nlogin\n}\nthumbnailURL\ncreatedAt\nviewCount\ntitle\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "DLy/": function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("q1tI"),
                a = n("fvjX"),
                o = n("/7QA"),
                s = n("EuPq"),
                l = n("X7Ac"),
                d = n("wbMx"),
                c = n("eJ65"),
                u = n("yR8l"),
                p = n("EdhP"),
                m = n("+GjP"),
                h = n("GnwI"),
                f = n("CYfc"),
                g = n("MLDe"),
                v = n("4L7N"),
                E = n("QK1T"),
                b = n("u5aL"),
                k = n("Jxh/"),
                y = n("r62z"),
                S = n("Ue10"),
                T = (n("+T1G"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.getUrl = function() {
                            return t.props.url || window.location.href
                        }, t.onShareClick = function() {
                            t.props.onShareClick && t.props.onShareClick(t.props.type)
                        }, t.copyPageUrl = function() {
                            t.onShareClick(), Object(k.a)(t.getUrl())
                        }, t.renderIcon = function() {
                            var e = t.getAssetFromType();
                            return r.createElement(S.Xa, {
                                className: "clips-mobile-share-sheet__share-icon clips-social-button__icon " + t.addSocialClassModifier("clips-social-button__icon")
                            }, r.createElement(S.sb, {
                                asset: e,
                                fill: !0
                            }))
                        }, t.isLink = function() {
                            return t.props.type !== d.b.Copy
                        }, t.getAssetFromType = function() {
                            switch (t.props.type) {
                                case d.b.Twitter:
                                    return S.tb.Twitter;
                                case d.b.Facebook:
                                    return S.tb.Facebook;
                                case d.b.VKontakte:
                                    return S.tb.VKontakte;
                                case d.b.Reddit:
                                    return S.tb.Reddit;
                                case d.b.Copy:
                                default:
                                    return S.tb.Copy
                            }
                        }, t.getLabelFromType = function() {
                            switch (t.props.type) {
                                case d.b.Twitter:
                                    return Object(o.d)("Twitter", "ClipsSocialShare");
                                case d.b.Facebook:
                                    return Object(o.d)("Facebook", "ClipsSocialShare");
                                case d.b.VKontakte:
                                    return Object(o.d)("VK", "ClipsSocialShare");
                                case d.b.Reddit:
                                    return Object(o.d)("Reddit", "ClipsSocialShare");
                                case d.b.Copy:
                                    return Object(o.d)("Copy", "ClipsSocialShare");
                                default:
                                    return ""
                            }
                        }, t.addSocialClassModifier = function(e) {
                            switch (t.props.type) {
                                case d.b.Twitter:
                                    return e + "--twitter";
                                case d.b.Reddit:
                                    return e + "--reddit";
                                case d.b.Facebook:
                                    return e + "--facebook";
                                case d.b.VKontakte:
                                    return e + "--vkontakte";
                                case d.b.Copy:
                                    return e + "--copy";
                                default:
                                    return ""
                            }
                        }, t.getLinkTarget = function() {
                            var e = t.props,
                                n = e.text,
                                i = e.type,
                                r = t.getUrl(),
                                a = n || "";
                            switch (i) {
                                case d.b.Reddit:
                                    return Object(y.b)(r, a);
                                case d.b.VKontakte:
                                    return Object(y.d)(r);
                                case d.b.Facebook:
                                    return Object(y.a)(r);
                                case d.b.Twitter:
                                    return Object(y.c)(r, a);
                                default:
                                    return ""
                            }
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = r.createElement(S.Xa, {
                            className: "clips-mobile-share-sheet__row",
                            display: S.X.Flex,
                            alignItems: S.f.Center,
                            key: this.props.type,
                            margin: {
                                bottom: 1,
                                x: 2
                            }
                        }, this.renderIcon(), r.createElement(S.Eb, {
                            margin: {
                                left: 1
                            }
                        }, r.createElement(S.W, {
                            type: S.Vb.Span
                        }, this.getLabelFromType())));
                        return this.renderLink(e)
                    }, t.prototype.renderLink = function(e) {
                        return this.isLink() ? r.createElement("a", {
                            href: this.getLinkTarget(),
                            target: "_blank",
                            onClick: this.onShareClick,
                            "data-test-selector": "clips-social-button__link"
                        }, e) : r.createElement("div", {
                            onClick: this.copyPageUrl,
                            "data-test-selector": "clips-social-button__link"
                        }, e)
                    }, t
                }(r.Component)),
                N = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isModalOpen: !1,
                            isCopiedModalOpen: !1
                        }, t.onToggleShareButton = function() {
                            t.setState(function(e) {
                                return {
                                    isModalOpen: !e.isModalOpen
                                }
                            })
                        }, t.onShareClick = function(e) {
                            t.setState({
                                isModalOpen: !1
                            }), e === d.b.Copy && (t.setState({
                                isCopiedModalOpen: !0
                            }), setTimeout(function() {
                                return t.setState({
                                    isCopiedModalOpen: !1
                                })
                            }, 1500))
                        }, t.onClickOut = function() {
                            t.setState({
                                isModalOpen: !1
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                        this.props.clip.id && e.clip.id && this.props.clip.id !== e.clip.id && this.setState({
                            isModalOpen: !1
                        })
                    }, t.prototype.render = function() {
                        var e = this,
                            t = Object(o.d)("Share Clip", "ClipsSocialShare"),
                            n = Object(o.d)("Copied!", "ClipsSocialShare");
                        return r.createElement(S.Xa, {
                            display: S.X.Flex,
                            justifyContent: S.Wa.End,
                            alignItems: S.f.Center,
                            margin: {
                                top: 1,
                                bottom: 1
                            }
                        }, r.createElement(S.z, {
                            type: S.F.Hollow,
                            onClick: this.onToggleShareButton,
                            "data-test-selector": "social-share-mobile-button"
                        }, t), this.state.isModalOpen && r.createElement(S.Eb, {
                            position: S.jb.Fixed,
                            background: S.r.Overlay,
                            zIndex: S.ic.Above,
                            attachLeft: !0,
                            attachTop: !0,
                            fullHeight: !0,
                            fullWidth: !0
                        }, r.createElement(b.a, {
                            onClickOut: this.onClickOut
                        }, r.createElement(S.Xa, {
                            position: S.jb.Absolute,
                            attachLeft: !0,
                            attachRight: !0,
                            attachBottom: !0,
                            className: "clips-mobile-share-sheet",
                            display: S.X.Flex,
                            flexDirection: S.Aa.Column,
                            zIndex: S.ic.Above,
                            "data-test-selector": "social-share-mobile-menu-root"
                        }, r.createElement(S.i, {
                            type: S.n.SlideInBottom,
                            enabled: this.state.isModalOpen
                        }, r.createElement(S.Eb, {
                            background: S.r.Base,
                            elevation: 3,
                            padding: {
                                bottom: 2
                            }
                        }, r.createElement(S.Eb, {
                            className: "clips-mobile-share-sheet__title",
                            display: S.X.Flex,
                            flexDirection: S.Aa.Row,
                            justifyContent: S.Wa.Between,
                            alignItems: S.f.Center,
                            margin: {
                                bottom: 2
                            },
                            padding: {
                                right: 1,
                                left: 2
                            },
                            borderBottom: !0
                        }, r.createElement(S.W, {
                            bold: !0,
                            color: S.O.Alt,
                            type: S.Vb.Span,
                            fontSize: S.Ca.Size6,
                            "data-test-selector": "social-share-mobile-menu-title"
                        }, t), r.createElement(S.A, {
                            "data-test-selector": "social-share-mobile-menu-close",
                            icon: S.tb.Close,
                            ariaLabel: "Close Share",
                            size: S.B.Large,
                            onClick: this.onToggleShareButton
                        })), r.createElement(S.Xa, null, f.b.map(function(t) {
                            return r.createElement(T, {
                                key: t.type,
                                type: t.type,
                                text: e.props.clip.title,
                                url: Object(m.e)(e.props.clip.url, t.params),
                                onShareClick: e.onShareClick
                            })
                        }))))))), this.state.isCopiedModalOpen && r.createElement(S.Xa, {
                            fullWidth: !0,
                            attachLeft: !0,
                            attachBottom: !0,
                            className: "clips-mobile-share-sheet",
                            position: S.jb.Fixed,
                            zIndex: S.ic.Above
                        }, r.createElement(S.i, {
                            type: S.n.SlideInBottom,
                            duration: S.k.Short,
                            enabled: this.state.isCopiedModalOpen
                        }, r.createElement(S.Eb, {
                            padding: {
                                x: 1,
                                y: 1
                            },
                            background: S.r.Base,
                            elevation: 3,
                            borderTop: !0,
                            display: S.X.Flex,
                            alignItems: S.f.Center
                        }, r.createElement(S.Xa, {
                            margin: {
                                right: .5
                            }
                        }, r.createElement(S.i, {
                            type: S.n.BounceIn,
                            duration: S.k.Medium,
                            delay: S.j.Short,
                            enabled: this.state.isCopiedModalOpen
                        }, r.createElement(S.sb, {
                            type: S.ub.Success,
                            asset: S.tb.Check
                        }))), r.createElement(S.W, {
                            type: S.Vb.Span,
                            fontSize: S.Ca.Size4,
                            bold: !0
                        }, n)))))
                    }, t
                }(r.Component),
                _ = n("ydo7"),
                C = (n("rb53"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.trackLinkShare = function() {
                            var e = t.props.data.clip;
                            if (e) return Object(g.c)(e.id, e.game && e.game.name, e.broadcaster && e.broadcaster.id, e.broadcaster && e.broadcaster.login, t.props.pageType)(l.b.CopyInput)
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.reportInteractive()
                    }, t.prototype.componentDidUpdate = function() {
                        this.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this,
                            t = this.props.data.clip,
                            n = Object(E.c)(window.navigator.userAgent),
                            i = !(!t || !t.id);
                        if (!i && !n) return r.createElement(S.Xa, null, this.renderPlaceholders());
                        if (!i && n) return r.createElement(S.Xa, null, this.renderMobilePlaceholders());
                        if (n) return r.createElement(N, {
                            clip: t
                        });
                        var a = Object(o.d)("More", "ClipsSocialShare");
                        return r.createElement(S.Xa, {
                            display: S.X.Flex,
                            position: S.jb.Relative,
                            zIndex: S.ic.Above,
                            justifyContent: S.Wa.End,
                            alignItems: S.f.Center,
                            margin: {
                                y: 1
                            }
                        }, r.createElement(S.Xa, {
                            display: S.X.InlineBlock,
                            margin: {
                                right: 1
                            }
                        }, r.createElement(v.a, {
                            broadcasterLogin: t.broadcaster && t.broadcaster.login || "",
                            broadcasterId: t.broadcaster && t.broadcaster.id || "",
                            slug: this.props.slug,
                            pageType: this.props.pageType
                        })), f.b.map(function(n) {
                            return r.createElement(S.Xa, {
                                display: S.X.InlineBlock,
                                key: n.type,
                                margin: {
                                    right: 1
                                }
                            }, r.createElement(d.a, {
                                key: n.type,
                                type: n.type,
                                text: t.title,
                                url: Object(m.e)(t.url, n.params),
                                onShareClick: Object(g.c)(t.id, t.game && t.game.name, t.broadcaster && t.broadcaster.id, t.broadcaster && t.broadcaster.login, e.props.pageType)
                            }))
                        }), r.createElement(S.Xa, {
                            display: S.X.InlineBlock,
                            position: S.jb.Relative
                        }, r.createElement(c.a, null, r.createElement(S.z, {
                            type: S.F.Hollow,
                            ariaLabel: a,
                            "data-a-target": "clips-share-button",
                            "data-test-selector": "social-share-button"
                        }, a), r.createElement(S.u, {
                            direction: S.v.BottomRight,
                            noTail: !0
                        }, r.createElement(S.Xa, {
                            padding: 1
                        }, r.createElement(S.Ea, {
                            id: "social-share-link",
                            orientation: S.Fa.Vertical,
                            label: Object(o.d)("Link", "ClipsSocialShare"),
                            "data-test-selector": "social-share-link"
                        }, r.createElement(s.a, {
                            value: t.url,
                            onClick: this.trackLinkShare
                        })), r.createElement(S.Xa, {
                            padding: {
                                top: 1
                            }
                        }, r.createElement(S.Ea, {
                            id: "social-share-link",
                            orientation: S.Fa.Vertical,
                            label: Object(o.d)("Embed Link", "ClipsSocialShare"),
                            "data-test-selector": "social-share-embed-link"
                        }, r.createElement(s.a, {
                            value: Object(p.a)(this.props.data.clip.embedURL),
                            onClick: this.trackLinkShare
                        }))))))))
                    }, t.prototype.reportInteractive = function() {
                        this.props.data.clip && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.renderPlaceholders = function() {
                        return r.createElement(S.i, {
                            type: S.n.FadeIn,
                            duration: S.k.Medium,
                            enabled: !0
                        }, r.createElement(S.Xa, {
                            margin: {
                                top: 1,
                                bottom: 1
                            },
                            display: S.X.Flex,
                            justifyContent: S.Wa.End
                        }, r.createElement(S.Xa, {
                            margin: {
                                left: 1
                            }
                        }, r.createElement(S.ib, {
                            width: 30,
                            height: 30
                        })), r.createElement(S.Xa, {
                            margin: {
                                left: 1
                            }
                        }, r.createElement(S.ib, {
                            width: 30,
                            height: 30
                        })), r.createElement(S.Xa, {
                            margin: {
                                left: 1
                            }
                        }, r.createElement(S.ib, {
                            width: 30,
                            height: 30
                        })), r.createElement(S.Xa, {
                            margin: {
                                left: 1
                            }
                        }, r.createElement(S.ib, {
                            width: 30,
                            height: 30
                        })), r.createElement(S.Xa, {
                            margin: {
                                left: 1
                            }
                        }, r.createElement(S.ib, {
                            width: 46,
                            height: 30
                        }))))
                    }, t.prototype.renderMobilePlaceholders = function() {
                        return r.createElement(S.Xa, {
                            margin: {
                                y: 1
                            },
                            display: S.X.Flex,
                            justifyContent: S.Wa.End
                        }, r.createElement(S.Xa, null, r.createElement(S.ib, {
                            width: 72,
                            height: 30
                        })))
                    }, t
                }(r.Component)),
                O = Object(a.compose)(Object(h.b)("ClipsSocialShare"), Object(u.a)(_))(C);
            n.d(t, "a", function() {
                return O
            })
        },
        DMoW: function(e, t, n) {
            "use strict";
            var i, r, a, o, s, l, d, c, u, p, m, h, f, g, v, E, b, k, y, S, T, N, _, C, O, R, I, D, A, w, L, M, F, U, P, B, x, V, j, W, G, H, z, X, q, Y, K, Q, $, Z, J, ee, te, ne, ie, re, ae, oe, se, le, de, ce, ue, pe, me, he, fe, ge, ve, Ee, be, ke, ye, Se, Te, Ne, _e, Ce, Oe, Re, Ie, De, Ae, we, Le, Me, Fe, Ue, Pe, Be, xe, Ve, je, We, Ge, He, ze, Xe, qe, Ye, Ke, Qe, $e, Ze, Je, et, tt, nt, it, rt, at, ot, st, lt, dt, ct, ut, pt, mt, ht, ft, gt, vt, Et, bt;
            n.d(t, "N", function() {
                    return i
                }), n.d(t, "e", function() {
                    return r
                }), n.d(t, "O", function() {
                    return s
                }), n.d(t, "B", function() {
                    return l
                }), n.d(t, "b", function() {
                    return c
                }), n.d(t, "i", function() {
                    return f
                }), n.d(t, "d", function() {
                    return v
                }), n.d(t, "g", function() {
                    return k
                }), n.d(t, "h", function() {
                    return y
                }), n.d(t, "Z", function() {
                    return T
                }), n.d(t, "n", function() {
                    return N
                }), n.d(t, "Ba", function() {
                    return _
                }), n.d(t, "R", function() {
                    return C
                }), n.d(t, "s", function() {
                    return O
                }), n.d(t, "l", function() {
                    return D
                }), n.d(t, "P", function() {
                    return A
                }), n.d(t, "c", function() {
                    return P
                }), n.d(t, "u", function() {
                    return B
                }), n.d(t, "Aa", function() {
                    return x
                }), n.d(t, "t", function() {
                    return V
                }), n.d(t, "T", function() {
                    return j
                }), n.d(t, "V", function() {
                    return W
                }), n.d(t, "G", function() {
                    return G
                }), n.d(t, "W", function() {
                    return H
                }), n.d(t, "F", function() {
                    return z
                }), n.d(t, "E", function() {
                    return X
                }), n.d(t, "q", function() {
                    return q
                }), n.d(t, "U", function() {
                    return Y
                }), n.d(t, "a", function() {
                    return K
                }), n.d(t, "x", function() {
                    return Q
                }), n.d(t, "z", function() {
                    return $
                }), n.d(t, "I", function() {
                    return J
                }), n.d(t, "J", function() {
                    return ee
                }), n.d(t, "H", function() {
                    return ne
                }), n.d(t, "K", function() {
                    return ie
                }), n.d(t, "Y", function() {
                    return oe
                }), n.d(t, "X", function() {
                    return ge
                }), n.d(t, "p", function() {
                    return _e
                }), n.d(t, "o", function() {
                    return Ce
                }), n.d(t, "Da", function() {
                    return De
                }), n.d(t, "D", function() {
                    return Pe
                }), n.d(t, "Ca", function() {
                    return Be
                }), n.d(t, "C", function() {
                    return je
                }), n.d(t, "k", function() {
                    return We
                }), n.d(t, "w", function() {
                    return Ge
                }), n.d(t, "m", function() {
                    return ze
                }), n.d(t, "j", function() {
                    return Xe
                }), n.d(t, "y", function() {
                    return qe
                }), n.d(t, "S", function() {
                    return Ke
                }), n.d(t, "r", function() {
                    return Qe
                }), n.d(t, "Q", function() {
                    return et
                }), n.d(t, "A", function() {
                    return st
                }), n.d(t, "L", function() {
                    return lt
                }), n.d(t, "M", function() {
                    return dt
                }), n.d(t, "f", function() {
                    return vt
                }), n.d(t, "v", function() {
                    return Et
                }),
                function(e) {
                    e.CHANNEL_FEED_COMMENT_REPORT = "CHANNEL_FEED_COMMENT_REPORT", e.CHANNEL_FEED_POST_REPORT = "CHANNEL_FEED_POST_REPORT", e.CHAT_REPORT = "CHAT_REPORT", e.CLIP_REPORT = "CLIP_REPORT", e.COLLECTION_REPORT = "COLLECTION_REPORT", e.CURSE_PRIVATE_GROUP = "CURSE_PRIVATE_GROUP", e.CURSE_PUBLIC_GROUP = "CURSE_PUBLIC_GROUP", e.CURSE_WHISPER = "CURSE_WHISPER", e.EVENT_REPORT = "EVENT_REPORT", e.EXTENSION_REPORT = "EXTENSION_REPORT", e.LIVE_UP_REPORT = "LIVE_UP_REPORT", e.RAID_REPORT = "RAID_REPORT", e.ROOM_REPORT = "ROOM_REPORT", e.SINGS_DUET_SEED_REPORT = "SINGS_DUET_SEED_REPORT", e.SINGS_GROUP_BIO_REPORT = "SINGS_GROUP_BIO_REPORT", e.SINGS_GROUP_CHAT_REPORT = "SINGS_GROUP_CHAT_REPORT", e.SINGS_GROUP_NAME_REPORT = "SINGS_GROUP_NAME_REPORT", e.SINGS_VOD_COMMENT_REPORT = "SINGS_VOD_COMMENT_REPORT", e.USER_REPORT = "USER_REPORT", e.VOD_COMMENT_REPORT = "VOD_COMMENT_REPORT", e.VOD_REPORT = "VOD_REPORT", e.WHISPER_REPORT = "WHISPER_REPORT"
                }(i || (i = {})),
                function(e) {
                    e.CHAT = "CHAT", e.WHISPER = "WHISPER"
                }(r || (r = {})),
                function(e) {
                    e.CHANNEL_NOT_FOUND = "CHANNEL_NOT_FOUND", e.FORBIDDEN = "FORBIDDEN", e.TARGET_ALREADY_MOD = "TARGET_ALREADY_MOD", e.TARGET_IS_CHAT_BANNED = "TARGET_IS_CHAT_BANNED", e.TARGET_NOT_FOUND = "TARGET_NOT_FOUND"
                }(a || (a = {})),
                function(e) {
                    e.CHANNEL_NOT_FOUND = "CHANNEL_NOT_FOUND", e.FORBIDDEN = "FORBIDDEN", e.TARGET_NOT_FOUND = "TARGET_NOT_FOUND", e.TARGET_NOT_MOD = "TARGET_NOT_MOD"
                }(o || (o = {})),
                function(e) {
                    e.CHANNEL_NOT_FOUND = "CHANNEL_NOT_FOUND", e.FORBIDDEN = "FORBIDDEN", e.REVOKEE_NOT_FOUND = "REVOKEE_NOT_FOUND", e.REVOKEE_NOT_VIP = "REVOKEE_NOT_VIP"
                }(s || (s = {})),
                function(e) {
                    e.CHANNEL_NOT_FOUND = "CHANNEL_NOT_FOUND", e.FORBIDDEN = "FORBIDDEN", e.GRANTEE_ALREADY_VIP = "GRANTEE_ALREADY_VIP", e.GRANTEE_CHAT_BANNED = "GRANTEE_CHAT_BANNED", e.GRANTEE_NOT_FOUND = "GRANTEE_NOT_FOUND", e.MAX_VIPS_REACHED = "MAX_VIPS_REACHED", e.VIP_ACHIEVEMENT_INCOMPLETE = "VIP_ACHIEVEMENT_INCOMPLETE"
                }(l || (l = {})),
                function(e) {
                    e.PLAYING = "PLAYING", e.STREAMING = "STREAMING", e.WATCHING = "WATCHING"
                }(d || (d = {})),
                function(e) {
                    e.AWAY = "AWAY", e.BUSY = "BUSY", e.IDLE = "IDLE", e.OFFLINE = "OFFLINE", e.ONLINE = "ONLINE"
                }(c || (c = {})),
                function(e) {
                    e.IDLE = "IDLE", e.OFFLINE = "OFFLINE", e.ONLINE = "ONLINE"
                }(u || (u = {})),
                function(e) {
                    e.AWAY = "AWAY", e.BUSY = "BUSY", e.OFFLINE = "OFFLINE", e.ONLINE = "ONLINE"
                }(p || (p = {})),
                function(e) {
                    e.AR = "AR", e.BG = "BG", e.CS = "CS", e.DA = "DA", e.DE = "DE", e.EL = "EL", e.EN = "EN", e.EN_GB = "EN_GB", e.ES = "ES", e.ES_MX = "ES_MX", e.FI = "FI", e.FR = "FR", e.HI = "HI", e.HU = "HU", e.IT = "IT", e.JA = "JA", e.KO = "KO", e.NL = "NL", e.NO = "NO", e.PL = "PL", e.PT = "PT", e.PT_BR = "PT_BR", e.RO = "RO", e.RU = "RU", e.SK = "SK", e.SV = "SV", e.TH = "TH", e.TR = "TR", e.VI = "VI", e.ZH = "ZH", e.ZH_CN = "ZH_CN", e.ZH_TW = "ZH_TW"
                }(m || (m = {})),
                function(e) {
                    e.AR = "AR", e.ASL = "ASL", e.BG = "BG", e.CS = "CS", e.DA = "DA", e.DE = "DE", e.EL = "EL", e.EN = "EN", e.ES = "ES", e.FI = "FI", e.FR = "FR", e.HU = "HU", e.IT = "IT", e.JA = "JA", e.KO = "KO", e.NL = "NL", e.NO = "NO", e.OTHER = "OTHER", e.PL = "PL", e.PT = "PT", e.RO = "RO", e.RU = "RU", e.SK = "SK", e.SV = "SV", e.TH = "TH", e.TR = "TR", e.VI = "VI", e.ZH = "ZH", e.ZH_HK = "ZH_HK"
                }(h || (h = {})),
                function(e) {
                    e.ARCHIVE = "ARCHIVE", e.HIGHLIGHT = "HIGHLIGHT", e.PAST_PREMIERE = "PAST_PREMIERE", e.PREMIERE_UPLOAD = "PREMIERE_UPLOAD", e.UPLOAD = "UPLOAD"
                }(f || (f = {})),
                function(e) {
                    e.GET_BITS = "GET_BITS", e.GET_TURBO = "GET_TURBO", e.SUBSCRIBE = "SUBSCRIBE", e.VISIT_URL = "VISIT_URL"
                }(g || (g = {})),
                function(e) {
                    e.ACQUIRED = "ACQUIRED", e.CHEERED = "CHEERED", e.NEW_USER = "NEW_USER", e.SKIPPED = "SKIPPED", e.UNKNOWN = "UNKNOWN"
                }(v || (v = {})),
                function(e) {
                    e.ALLTIME = "ALLTIME", e.MONTH = "MONTH", e.WEEK = "WEEK"
                }(E || (E = {})),
                function(e) {
                    e.AD = "AD", e.BUNDLE = "BUNDLE"
                }(b || (b = {})),
                function(e) {
                    e.GAME_TRAILER = "GAME_TRAILER", e.MISC_TRAILER = "MISC_TRAILER", e.PAY_TO_STREAM = "PAY_TO_STREAM"
                }(k || (k = {})),
                function(e) {
                    e.AVAILABLE = "AVAILABLE", e.CANCELLED = "CANCELLED", e.COMPLETED = "COMPLETED", e.LIVE = "LIVE"
                }(y || (y = {})),
                function(e) {
                    e.FIXED_VALUE_OFF = "FIXED_VALUE_OFF", e.NONE = "NONE", e.PERCENT_OFF = "PERCENT_OFF"
                }(S || (S = {})),
                function(e) {
                    e.CHEER = "CHEER"
                }(T || (T = {})),
                function(e) {
                    e.CREATED = "CREATED", e.CREATING = "CREATING", e.FAILED = "FAILED"
                }(N || (N = {})),
                function(e) {
                    e.PRIVATE = "PRIVATE", e.PUBLIC = "PUBLIC"
                }(_ || (_ = {})),
                function(e) {
                    e.ENDED = "ENDED", e.LIVE = "LIVE", e.PENDING = "PENDING", e.UNKNOWN = "UNKNOWN"
                }(C || (C = {})),
                function(e) {
                    e.ARCHIVES_DISABLED = "ARCHIVES_DISABLED", e.BROADCASTER_NOT_LIVE = "BROADCASTER_NOT_LIVE", e.BROADCAST_FORMAT_INVALID_PREMIERE = "BROADCAST_FORMAT_INVALID_PREMIERE", e.BROADCAST_FORMAT_INVALID_RERUN = "BROADCAST_FORMAT_INVALID_RERUN", e.INTERNAL_SERVER_ERROR = "INTERNAL_SERVER_ERROR", e.MAX_DESCRIPTION_LENGTH_EXCEEDED = "MAX_DESCRIPTION_LENGTH_EXCEEDED", e.USER_UNAUTHORIZED = "USER_UNAUTHORIZED", e.VOD_NOT_READY = "VOD_NOT_READY"
                }(O || (O = {})),
                function(e) {
                    e.DARK = "DARK", e.LIGHT = "LIGHT"
                }(R || (R = {})),
                function(e) {
                    e.CUSTOM = "CUSTOM", e.DISPLAY_ONLY = "DISPLAY_ONLY", e.FIRST_PARTY = "FIRST_PARTY", e.RENDER_ONLY = "RENDER_ONLY", e.SPONSORED = "SPONSORED", e.THIRD_PARTY = "THIRD_PARTY", e.UNKNOWN = "UNKNOWN"
                }(I || (I = {})),
                function(e) {
                    e.FOLLOWERS_ONLY = "FOLLOWERS_ONLY", e.SLOW_MODE = "SLOW_MODE", e.SUBSCRIBERS_ONLY = "SUBSCRIBERS_ONLY", e.VERIFIED_ONLY = "VERIFIED_ONLY"
                }(D || (D = {})),
                function(e) {
                    e.AMOUNT_BELOW_MIN_BITS = "AMOUNT_BELOW_MIN_BITS", e.AUTO_MOD_MESSAGE = "AUTO_MOD_MESSAGE", e.AUTO_MOD_PENDING = "AUTO_MOD_PENDING", e.CHANNEL_BLOCKED_TERMS = "CHANNEL_BLOCKED_TERMS", e.CHANNEL_INELIGIBLE = "CHANNEL_INELIGIBLE", e.EMOTE_AMOUNT_BELOW_MIN_BITS = "EMOTE_AMOUNT_BELOW_MIN_BITS", e.INSUFFICIENT_BALANCE = "INSUFFICIENT_BALANCE", e.INVALID_BITS_AMOUNT = "INVALID_BITS_AMOUNT", e.INVALID_BITS_MESSAGE = "INVALID_BITS_MESSAGE", e.INVALID_EVENT_ID = "INVALID_EVENT_ID", e.MESSAGE_LENGTH_EXCEEDED = "MESSAGE_LENGTH_EXCEEDED", e.REQUEST_THROTTLED = "REQUEST_THROTTLED", e.TOO_LARGE_BITS_EMOTE = "TOO_LARGE_BITS_EMOTE", e.TOO_LARGE_CHEER = "TOO_LARGE_CHEER", e.UNKNOWN = "UNKNOWN", e.USER_BANNED = "USER_BANNED", e.USER_INELIGIBLE = "USER_INELIGIBLE", e.USER_SUSPENDED = "USER_SUSPENDED", e.ZALGO_MESSAGE = "ZALGO_MESSAGE"
                }(A || (A = {})),
                function(e) {
                    e.NEW_CHATTER = "NEW_CHATTER"
                }(w || (w = {})),
                function(e) {
                    e.TOKEN_NOT_AVAILABLE = "TOKEN_NOT_AVAILABLE", e.TOKEN_NOT_FOUND = "TOKEN_NOT_FOUND"
                }(L || (L = {})),
                function(e) {
                    e.FOLLOWER_ONLY_MODE_ENFORCEMENT_FAILED = "FOLLOWER_ONLY_MODE_ENFORCEMENT_FAILED", e.SUB_ONLY_MODE_ENFORCEMENT_FAILED = "SUB_ONLY_MODE_ENFORCEMENT_FAILED", e.TOKEN_NOT_AVAILABLE = "TOKEN_NOT_AVAILABLE", e.TOKEN_NOT_FOUND = "TOKEN_NOT_FOUND", e.USER_CHAT_BANNED = "USER_CHAT_BANNED", e.USER_CHAT_TIMED_OUT = "USER_CHAT_TIMED_OUT"
                }(M || (M = {})),
                function(e) {
                    e.TOKEN_NOT_AVAILABLE = "TOKEN_NOT_AVAILABLE", e.TOKEN_NOT_FOUND = "TOKEN_NOT_FOUND"
                }(F || (F = {})),
                function(e) {
                    e.AVAILABLE = "AVAILABLE", e.DISMISSED = "DISMISSED", e.ELIGIBLE = "ELIGIBLE", e.REDEEMED = "REDEEMED"
                }(U || (U = {})),
                function(e) {
                    e.DURATION_INVALID = "DURATION_INVALID", e.FORBIDDEN = "FORBIDDEN", e.TARGET_ALREADY_BANNED = "TARGET_ALREADY_BANNED", e.TARGET_IS_ADMIN = "TARGET_IS_ADMIN", e.TARGET_IS_ANONYMOUS = "TARGET_IS_ANONYMOUS", e.TARGET_IS_BROADCASTER = "TARGET_IS_BROADCASTER", e.TARGET_IS_GLOBAL_MOD = "TARGET_IS_GLOBAL_MOD", e.TARGET_IS_MOD = "TARGET_IS_MOD", e.TARGET_IS_SELF = "TARGET_IS_SELF", e.TARGET_IS_STAFF = "TARGET_IS_STAFF", e.TARGET_IS_VIP = "TARGET_IS_VIP", e.TARGET_NOT_FOUND = "TARGET_NOT_FOUND"
                }(P || (P = {})),
                function(e) {
                    e.FORBIDDEN = "FORBIDDEN", e.SUCCESS = "SUCCESS", e.TARGET_IS_BROADCASTER = "TARGET_IS_BROADCASTER", e.TARGET_IS_MODERATOR = "TARGET_IS_MODERATOR"
                }(B || (B = {})),
                function(e) {
                    e.FORBIDDEN = "FORBIDDEN", e.TARGET_NOT_BANNED = "TARGET_NOT_BANNED", e.TARGET_NOT_FOUND = "TARGET_NOT_FOUND"
                }(x || (x = {})),
                function(e) {
                    e.EUR = "EUR", e.GBP = "GBP", e.USD = "USD"
                }(V || (V = {})),
                function(e) {
                    e.MONTH = "MONTH", e.ONE_TIME = "ONE_TIME", e.WEEK = "WEEK", e.YEAR = "YEAR"
                }(j || (j = {})),
                function(e) {
                    e.CHANSUB = "CHANSUB", e.TEAMSUB = "TEAMSUB", e.TURBO = "TURBO"
                }(W || (W = {})),
                function(e) {
                    e.GOOGLE_IAB = "GOOGLE_IAB", e.PRIME = "PRIME", e.RECURLY = "RECURLY", e.XSOLLA_V3 = "XSOLLA_V3", e.ZUORA = "ZUORA"
                }(G || (G = {})),
                function(e) {
                    e.ACTIVE = "ACTIVE", e.CANCELLED = "CANCELLED", e.INACTIVE = "INACTIVE"
                }(H || (H = {})),
                function(e) {
                    e.AMAZON = "AMAZON", e.CREDIT_CARD = "CREDIT_CARD", e.GOOGLE_IAB = "GOOGLE_IAB", e.PAYPAL = "PAYPAL"
                }(z || (z = {})),
                function(e) {
                    e.AMERICAN_EXPRESS = "AMERICAN_EXPRESS", e.DISCOVER = "DISCOVER", e.MASTERCARD = "MASTERCARD", e.VISA = "VISA"
                }(X || (X = {})),
                function(e) {
                    e.CATEGORY = "CATEGORY", e.CLIP = "CLIP", e.LIVE_CHANNEL = "LIVE_CHANNEL", e.VOD = "VOD"
                }(q || (q = {})),
                function(e) {
                    e.ANDROID = "ANDROID", e.IOS = "IOS", e.WEB = "WEB"
                }(Y || (Y = {})),
                function(e) {
                    e.ACTIVE = "ACTIVE", e.INACTIVE = "INACTIVE", e.REJECTED_PERMISSIONS = "REJECTED_PERMISSIONS"
                }(K || (K = {})),
                function(e) {
                    e.COMPONENT = "COMPONENT", e.HIDDEN = "HIDDEN", e.PANEL = "PANEL", e.VIDEO_OVERLAY = "VIDEO_OVERLAY"
                }(Q || (Q = {})),
                function(e) {
                    e.APPROVED = "APPROVED", e.ASSETS_UPLOADED = "ASSETS_UPLOADED", e.DELETED = "DELETED", e.DEPRECATED = "DEPRECATED", e.IN_REVIEW = "IN_REVIEW", e.IN_TEST = "IN_TEST", e.PENDING_ACTION = "PENDING_ACTION", e.READY_FOR_REVIEW = "READY_FOR_REVIEW", e.REJECTED = "REJECTED", e.RELEASED = "RELEASED", e.UPLOADING = "UPLOADING"
                }($ || ($ = {})),
                function(e) {
                    e.GAME_COMMERCE = "GAME_COMMERCE", e.GAME_COMMERCE_V2 = "GAME_COMMERCE_V2"
                }(Z || (Z = {})),
                function(e) {
                    e.AFFILIATE = "AFFILIATE", e.CUSTOM_PARTNER = "CUSTOM_PARTNER", e.EXTENSIONS_DEVELOPER = "EXTENSIONS_DEVELOPER", e.PREMIUM_PARTNER = "PREMIUM_PARTNER", e.STANDARD_PARTNER = "STANDARD_PARTNER", e.UNPAID_PARTNER = "UNPAID_PARTNER"
                }(J || (J = {})),
                function(e) {
                    e.AGREEMENT_NOT_STARTED = "AGREEMENT_NOT_STARTED", e.AGREEMENT_PENDING_UPGRADE = "AGREEMENT_PENDING_UPGRADE", e.CANCELED = "CANCELED", e.COMPLETED = "COMPLETED", e.PAYOUT_METHOD_NOT_STARTED = "PAYOUT_METHOD_NOT_STARTED", e.PAYOUT_METHOD_PENDING = "PAYOUT_METHOD_PENDING", e.REGISTRATION_NOT_STARTED = "REGISTRATION_NOT_STARTED", e.REVIEW_PENDING = "REVIEW_PENDING", e.ROYALTY_TAX_INTERVIEW_ACTION_REQUIRED = "ROYALTY_TAX_INTERVIEW_ACTION_REQUIRED", e.ROYALTY_TAX_INTERVIEW_FAILED = "ROYALTY_TAX_INTERVIEW_FAILED", e.ROYALTY_TAX_INTERVIEW_MISMATCH = "ROYALTY_TAX_INTERVIEW_MISMATCH", e.ROYALTY_TAX_INTERVIEW_NOT_STARTED = "ROYALTY_TAX_INTERVIEW_NOT_STARTED", e.ROYALTY_TAX_INTERVIEW_PENDING = "ROYALTY_TAX_INTERVIEW_PENDING", e.SERVICE_TAX_INTERVIEW_ACTION_REQUIRED = "SERVICE_TAX_INTERVIEW_ACTION_REQUIRED", e.SERVICE_TAX_INTERVIEW_FAILED = "SERVICE_TAX_INTERVIEW_FAILED", e.SERVICE_TAX_INTERVIEW_MISMATCH = "SERVICE_TAX_INTERVIEW_MISMATCH", e.SERVICE_TAX_INTERVIEW_NOT_STARTED = "SERVICE_TAX_INTERVIEW_NOT_STARTED", e.SERVICE_TAX_INTERVIEW_PENDING = "SERVICE_TAX_INTERVIEW_PENDING"
                }(ee || (ee = {})),
                function(e) {
                    e.FORBIDDEN = "FORBIDDEN", e.INTERNAL_ERROR = "INTERNAL_ERROR", e.INVALID_AGREEMENT_VERSION = "INVALID_AGREEMENT_VERSION", e.UNAUTHENTICATED = "UNAUTHENTICATED"
                }(te || (te = {})),
                function(e) {
                    e.AFFILIATE = "AFFILIATE", e.EXTENSIONS_DEVELOPER = "EXTENSIONS_DEVELOPER", e.PARTNER = "PARTNER"
                }(ne || (ne = {})),
                function(e) {
                    e.CUSTOM = "CUSTOM", e.LEGACY = "LEGACY", e.PREMIUM = "PREMIUM", e.STANDARD = "STANDARD"
                }(ie || (ie = {})),
                function(e) {
                    e.FORBIDDEN = "FORBIDDEN", e.INTERNAL_ERROR = "INTERNAL_ERROR", e.INVALID_FORMAT = "INVALID_FORMAT", e.UNAUTHENTICATED = "UNAUTHENTICATED"
                }(re || (re = {})),
                function(e) {
                    e.BIRTHDATE = "BIRTHDATE", e.CITY = "CITY", e.COMPANY_NAME = "COMPANY_NAME", e.COUNTRY_CODE = "COUNTRY_CODE", e.EMAIL = "EMAIL", e.FIRST_NAME = "FIRST_NAME", e.LAST_NAME = "LAST_NAME", e.MIDDLE_NAME = "MIDDLE_NAME", e.PARENT_EMAIL = "PARENT_EMAIL", e.PARENT_NAME = "PARENT_NAME", e.POSTAL = "POSTAL", e.STATE_CODE = "STATE_CODE", e.STREET_ADDRESS = "STREET_ADDRESS", e.STREET_ADDRESS_2 = "STREET_ADDRESS_2"
                }(ae || (ae = {})),
                function(e) {
                    e.CITY = "CITY", e.COUNTRY = "COUNTRY", e.EMAIL = "EMAIL", e.NAME = "NAME", e.POSTAL = "POSTAL", e.STATE = "STATE", e.STREET_ADDRESS = "STREET_ADDRESS", e.STREET_ADDRESS_2 = "STREET_ADDRESS_2"
                }(oe || (oe = {})),
                function(e) {
                    e.ROYALTY = "ROYALTY", e.SERVICE = "SERVICE"
                }(se || (se = {})),
                function(e) {
                    e.BROADCASTER = "BROADCASTER", e.EVERYONE = "EVERYONE", e.MODERATOR = "MODERATOR", e.SUBSCRIBER = "SUBSCRIBER"
                }(le || (le = {})),
                function(e) {
                    e.MAX_ROOMS_LIMIT_EXCEEDED = "MAX_ROOMS_LIMIT_EXCEEDED", e.NAME_CONTAINS_INVALID_CHARACTERS = "NAME_CONTAINS_INVALID_CHARACTERS", e.NAME_INAPPROPRIATE = "NAME_INAPPROPRIATE", e.NAME_LENGTH_INVALID = "NAME_LENGTH_INVALID", e.NAME_NOT_UNIQUE = "NAME_NOT_UNIQUE", e.ROLES_INVALID = "ROLES_INVALID", e.TOPIC_INAPPROPRIATE = "TOPIC_INAPPROPRIATE", e.TOPIC_LENGTH_INVALID = "TOPIC_LENGTH_INVALID"
                }(de || (de = {})),
                function(e) {
                    e.ADMIN = "ADMIN", e.BROADCASTER = "BROADCASTER", e.GLOBALMOD = "GLOBALMOD", e.MOD = "MOD", e.REGULAR = "REGULAR", e.STAFF = "STAFF"
                }(ce || (ce = {})),
                function(e) {
                    e.FORBIDDEN = "FORBIDDEN", e.NAME_CONTAINS_INVALID_CHARACTERS = "NAME_CONTAINS_INVALID_CHARACTERS", e.NAME_INAPPROPRIATE = "NAME_INAPPROPRIATE", e.NAME_LENGTH_INVALID = "NAME_LENGTH_INVALID", e.NAME_NOT_UNIQUE = "NAME_NOT_UNIQUE", e.ROLES_INVALID = "ROLES_INVALID", e.ROOM_NOT_FOUND = "ROOM_NOT_FOUND", e.TOPIC_INAPPROPRIATE = "TOPIC_INAPPROPRIATE", e.TOPIC_LENGTH_INVALID = "TOPIC_LENGTH_INVALID"
                }(ue || (ue = {})),
                function(e) {
                    e.AUTO_MOD_ENFORCEMENT_FAILED = "AUTO_MOD_ENFORCEMENT_FAILED", e.EMOTE_ONLY_MODE_ENFORCEMENT_FAILED = "EMOTE_ONLY_MODE_ENFORCEMENT_FAILED", e.FORBIDDEN = "FORBIDDEN", e.R9K_MODE_ENFORCEMENT_FAILED = "R9K_MODE_ENFORCEMENT_FAILED", e.RATE_LIMIT_FAILED = "RATE_LIMIT_FAILED", e.SLOW_MODE_ENFORCEMENT_FAILED = "SLOW_MODE_ENFORCEMENT_FAILED", e.SPAM_ENFORCEMENT_FAILED = "SPAM_ENFORCEMENT_FAILED", e.USER_CHAT_BANNED = "USER_CHAT_BANNED", e.USER_CHAT_TIMED_OUT = "USER_CHAT_TIMED_OUT", e.USER_SUSPENDED = "USER_SUSPENDED", e.ZALGO_ENFORCEMENT_FAILED = "ZALGO_ENFORCEMENT_FAILED"
                }(pe || (pe = {})),
                function(e) {
                    e.FORBIDDEN = "FORBIDDEN", e.ROOM_NOT_FOUND = "ROOM_NOT_FOUND", e.SLOW_MODE_DURATION_INVALID = "SLOW_MODE_DURATION_INVALID"
                }(me || (me = {})),
                function(e) {
                    e.CSGO_SKILL = "CSGO_SKILL", e.LOL_SUMMONER_RANK = "LOL_SUMMONER_RANK", e.RELEVANCE = "RELEVANCE", e.VIEWER_COUNT = "VIEWER_COUNT"
                }(he || (he = {})),
                function(e) {
                    e.DNR_TO_RESUB = "DNR_TO_RESUB", e.GIFT_TO_PAID = "GIFT_TO_PAID"
                }(fe || (fe = {})),
                function(e) {
                    e.CONTENT = "CONTENT", e.TOP = "TOP"
                }(ge || (ge = {})),
                function(e) {
                    e.AWAY = "AWAY", e.BUSY = "BUSY", e.OFFLINE = "OFFLINE", e.ONLINE = "ONLINE"
                }(ve || (ve = {})),
                function(e) {
                    e.CLAIMABLE_GIFT_CREATION_ERROR = "CLAIMABLE_GIFT_CREATION_ERROR", e.GIFT_CREATION_ERROR = "GIFT_CREATION_ERROR", e.MAX_GIFTS_FOR_OFFER_EXCEEDED = "MAX_GIFTS_FOR_OFFER_EXCEEDED", e.UNKNOWN_ERROR = "UNKNOWN_ERROR"
                }(Ee || (Ee = {})),
                function(e) {
                    e.CLAIM_CODE = "CLAIM_CODE", e.DIRECT_ENTITLEMENT = "DIRECT_ENTITLEMENT", e.EXTERNAL = "EXTERNAL"
                }(be || (be = {})),
                function(e) {
                    e.ERROR_STATUS = "ERROR_STATUS", e.GIFT_CLAIMED = "GIFT_CLAIMED", e.GIFT_CLAIM_PENDING = "GIFT_CLAIM_PENDING"
                }(ke || (ke = {})),
                function(e) {
                    e.GIFT_NOT_CLAIMABLE = "GIFT_NOT_CLAIMABLE", e.NON_EXISTENT_GIFT = "NON_EXISTENT_GIFT", e.UNKNOWN_ERROR = "UNKNOWN_ERROR", e.USER_DOES_NOT_OWN_GIFT = "USER_DOES_NOT_OWN_GIFT"
                }(ye || (ye = {})),
                function(e) {
                    e.OFFERS_FAILED_TO_UPDATE = "OFFERS_FAILED_TO_UPDATE", e.UNKNOWN = "UNKNOWN"
                }(Se || (Se = {})),
                function(e) {
                    e.TOO_MANY_RECENT_SPENDS = "TOO_MANY_RECENT_SPENDS", e.UNABLE_TO_SPEND = "UNABLE_TO_SPEND"
                }(Te || (Te = {})),
                function(e) {
                    e.OFFER_ALREADY_CLAIMED = "OFFER_ALREADY_CLAIMED", e.UNKNOWN = "UNKNOWN"
                }(Ne || (Ne = {})),
                function(e) {
                    e.DEFAULT = "DEFAULT", e.SERIES = "SERIES"
                }(_e || (_e = {})),
                function(e) {
                    e.ALL_TIME = "ALL_TIME", e.LAST_DAY = "LAST_DAY", e.LAST_MONTH = "LAST_MONTH", e.LAST_WEEK = "LAST_WEEK", e.TRENDING = "TRENDING"
                }(Ce || (Ce = {})),
                function(e) {
                    e.ALL_TIME = "ALL_TIME", e.LAST_DAY = "LAST_DAY", e.LAST_MONTH = "LAST_MONTH", e.LAST_WEEK = "LAST_WEEK"
                }(Oe || (Oe = {})),
                function(e) {
                    e.CREATED_AT_ASC = "CREATED_AT_ASC", e.CREATED_AT_DESC = "CREATED_AT_DESC", e.TRENDING = "TRENDING", e.VIEWS_ASC = "VIEWS_ASC", e.VIEWS_DESC = "VIEWS_DESC"
                }(Re || (Re = {})),
                function(e) {
                    e.HIGH = "HIGH", e.LOW = "LOW", e.MEDIUM = "MEDIUM"
                }(Ie || (Ie = {})),
                function(e) {
                    e.NOT_PERMITTED = "NOT_PERMITTED", e.NOT_RESTRICTED = "NOT_RESTRICTED", e.PERMITTED = "PERMITTED", e.TEMPORARY = "TEMPORARY"
                }(De || (De = {})),
                function(e) {
                    e.BODY_EMPTY = "BODY_EMPTY", e.NOT_DELIVERED = "NOT_DELIVERED", e.TARGET_BANNED = "TARGET_BANNED", e.TARGET_RESTRICTED = "TARGET_RESTRICTED"
                }(Ae || (Ae = {})),
                function(e) {
                    e.ALREADY_LINKED = "ALREADY_LINKED", e.CODE_EXPIRED = "CODE_EXPIRED", e.CODE_INCORRECT = "CODE_INCORRECT"
                }(we || (we = {})),
                function(e) {
                    e.all = "all", e.ps4 = "ps4", e.xbox = "xbox"
                }(Le || (Le = {})),
                function(e) {
                    e.COMMUNITY = "COMMUNITY", e.GAME = "GAME"
                }(Me || (Me = {})),
                function(e) {
                    e.ASC = "ASC", e.DESC = "DESC"
                }(Fe || (Fe = {})),
                function(e) {
                    e.TIME = "TIME", e.VIEWS = "VIEWS"
                }(Ue || (Ue = {})),
                function(e) {
                    e.DEFAULT = "DEFAULT", e.EXTENSION = "EXTENSION"
                }(Pe || (Pe = {})),
                function(e) {
                    e.ALL_VIDEOS = "ALL_VIDEOS", e.COLLECTION = "COLLECTION", e.GAME_VIDEOS = "GAME_VIDEOS", e.LATEST_BROADCASTS = "LATEST_BROADCASTS", e.LONG_VIDEOS = "LONG_VIDEOS", e.SHORT_VIDEOS = "SHORT_VIDEOS", e.TOP_CLIPS = "TOP_CLIPS"
                }(Be || (Be = {})),
                function(e) {
                    e.ALREADY_CLAIMED = "ALREADY_CLAIMED", e.REQUEST_THROTTLED = "REQUEST_THROTTLED", e.UNAUTHORIZED = "UNAUTHORIZED", e.UNKNOWN = "UNKNOWN"
                }(xe || (xe = {})),
                function(e) {
                    e.BITS_KEY_CODE = "BITS_KEY_CODE"
                }(Ve || (Ve = {})),
                function(e) {
                    e.NONE = "NONE", e.READ = "READ", e.WRITE = "WRITE"
                }(je || (je = {})),
                function(e) {
                    e.BROADCASTER = "BROADCASTER", e.EDITOR = "EDITOR", e.MODERATOR = "MODERATOR", e.REGULAR = "REGULAR", e.SUBSCRIBER = "SUBSCRIBER"
                }(We || (We = {})),
                function(e) {
                    e.ACTIVE = "ACTIVE", e.PENDING = "PENDING", e.REJECTED = "REJECTED", e.UNKNOWN = "UNKNOWN", e.UNSET = "UNSET"
                }(Ge || (Ge = {})),
                function(e) {
                    e.ACTIVE = "ACTIVE", e.PENDING = "PENDING"
                }(He || (He = {})),
                function(e) {
                    e.BOUNTY_ALREADY_CLAIMED = "BOUNTY_ALREADY_CLAIMED", e.BOUNTY_LIMIT_REACHED = "BOUNTY_LIMIT_REACHED", e.INVALID_PARAMETER = "INVALID_PARAMETER", e.UNKNOWN_ERROR = "UNKNOWN_ERROR"
                }(ze || (ze = {})),
                function(e) {
                    e.BOUNTY_NOT_LIVE = "BOUNTY_NOT_LIVE", e.INVALID_PARAMETER = "INVALID_PARAMETER", e.UNKNOWN_ERROR = "UNKNOWN_ERROR"
                }(Xe || (Xe = {})),
                function(e) {
                    e.PROMPT_FOR_PERMISSIONS = "PROMPT_FOR_PERMISSIONS", e.REQUIRES_CONFIGURATION = "REQUIRES_CONFIGURATION"
                }(qe || (qe = {})),
                function(e) {
                    e.INVALID_PARAMETER = "INVALID_PARAMETER", e.UNAUTHORIZED = "UNAUTHORIZED", e.UNKNOWN_ERROR = "UNKNOWN_ERROR"
                }(Ye || (Ye = {})),
                function(e) {
                    e.BOUNTY_NOT_LIVE = "BOUNTY_NOT_LIVE", e.INVALID_PARAMETER = "INVALID_PARAMETER", e.UNAUTHORIZED = "UNAUTHORIZED", e.UNKNOWN_ERROR = "UNKNOWN_ERROR"
                }(Ke || (Ke = {})),
                function(e) {
                    e.INVITATION_ALREADY_EXISTS = "INVITATION_ALREADY_EXISTS", e.INVITATION_INVALID = "INVITATION_INVALID", e.SQUAD_FULL = "SQUAD_FULL", e.UNAUTHORIZED = "UNAUTHORIZED", e.USER_ALREADY_IN_SQUAD = "USER_ALREADY_IN_SQUAD"
                }(Qe || (Qe = {})),
                function(e) {
                    e.SQUAD_CANNOT_BE_UPDATED = "SQUAD_CANNOT_BE_UPDATED", e.SQUAD_NOT_FOUND = "SQUAD_NOT_FOUND", e.SQUAD_TOO_FEW_MEMBERS = "SQUAD_TOO_FEW_MEMBERS", e.UNAUTHORIZED = "UNAUTHORIZED"
                }($e || ($e = {})),
                function(e) {
                    e.UNAUTHORIZED = "UNAUTHORIZED", e.USER_NOT_IN_SQUAD = "USER_NOT_IN_SQUAD"
                }(Ze || (Ze = {})),
                function(e) {
                    e.UNAUTHORIZED = "UNAUTHORIZED", e.USER_NOT_IN_SQUAD = "USER_NOT_IN_SQUAD"
                }(Je || (Je = {})),
                function(e) {
                    e.ACCEPTED = "ACCEPTED", e.DELETED = "DELETED", e.PENDING = "PENDING", e.REJECTED = "REJECTED", e.UNKNOWN = "UNKNOWN"
                }(et || (et = {})),
                function(e) {
                    e.CHANNEL_NOT_FOUND = "CHANNEL_NOT_FOUND", e.TARGET_USER_ALREADY_EDITOR = "TARGET_USER_ALREADY_EDITOR", e.TARGET_USER_NOT_FOUND = "TARGET_USER_NOT_FOUND"
                }(tt || (tt = {})),
                function(e) {
                    e.CHANNEL_NOT_FOUND = "CHANNEL_NOT_FOUND", e.TARGET_USER_NOT_FOUND = "TARGET_USER_NOT_FOUND"
                }(nt || (nt = {})),
                function(e) {
                    e.BASELINE = "BASELINE", e.HIGH = "HIGH", e.MAIN = "MAIN"
                }(it || (it = {})),
                function(e) {
                    e.HYPE = "HYPE", e.STARTTIME = "STARTTIME"
                }(rt || (rt = {})),
                function(e) {
                    e.PREMIERE = "PREMIERE", e.SEGMENT = "SEGMENT", e.SINGLE = "SINGLE", e.TIMETABLE = "TIMETABLE"
                }(at || (at = {})),
                function(e) {
                    e.CANCELLED = "CANCELLED", e.FAILED = "FAILED", e.SCHEDULED = "SCHEDULED", e.STARTED = "STARTED", e.SUCCESS = "SUCCESS", e.UNKNOWN = "UNKNOWN", e.UNSCHEDULED = "UNSCHEDULED"
                }(ot || (ot = {})),
                function(e) {
                    e.ALL = "ALL", e.LIVE = "LIVE"
                }(st || (st = {})),
                function(e) {
                    e.ALREADY_WATCHED = "ALREADY_WATCHED", e.NOT_INTERESTED = "NOT_INTERESTED", e.OFFENSIVE = "OFFENSIVE", e.OTHER = "OTHER", e.UNSPECIFIED = "UNSPECIFIED"
                }(lt || (lt = {})),
                function(e) {
                    e.CATEGORY = "CATEGORY", e.CHANNEL = "CHANNEL", e.SHELF = "SHELF", e.UNSPECIFIED = "UNSPECIFIED", e.VOD = "VOD"
                }(dt || (dt = {})),
                function(e) {
                    e.PRICE_ASC = "PRICE_ASC", e.PRICE_DESC = "PRICE_DESC", e.PURCHASE_DATE_ASC = "PURCHASE_DATE_ASC", e.PURCHASE_DATE_DESC = "PURCHASE_DATE_DESC"
                }(ct || (ct = {})),
                function(e) {
                    e.ALL = "ALL", e.SUBSCRIPTIONS = "SUBSCRIPTIONS"
                }(ut || (ut = {})),
                function(e) {
                    e.SUBSCRIPTION = "SUBSCRIPTION"
                }(pt || (pt = {})),
                function(e) {
                    e.MONKEYS = "MONKEYS", e.PURPLE = "PURPLE", e.ROBOTS = "ROBOTS"
                }(mt || (mt = {})),
                function(e) {
                    e.ALL = "ALL", e.GIFT = "GIFT", e.PLATFORM = "PLATFORM"
                }(ht || (ht = {})),
                function(e) {
                    e.INVALID_USER_ID = "INVALID_USER_ID", e.UNAUTHORIZED = "UNAUTHORIZED"
                }(ft || (ft = {})),
                function(e) {
                    e.DELETED = "DELETED", e.PENDING_REVIEW = "PENDING_REVIEW", e.PENDING_REVIEW_SPAM = "PENDING_REVIEW_SPAM", e.PUBLISHED = "PUBLISHED", e.UNPUBLISHED = "UNPUBLISHED"
                }(gt || (gt = {})),
                function(e) {
                    e.APPROVED = "APPROVED", e.COMPLETED = "COMPLETED", e.LIVE = "LIVE", e.PENDING = "PENDING", e.REJECTED = "REJECTED"
                }(vt || (vt = {})),
                function(e) {
                    e.ITEM = "ITEM", e.LINK_NOTIFICATION = "LINK_NOTIFICATION"
                }(Et || (Et = {})),
                function(e) {
                    e.SERVICE_DEPENDENCY_FAILURE = "SERVICE_DEPENDENCY_FAILURE", e.UNKNOWN = "UNKNOWN", e.USER_UNAUTHORIZED = "USER_UNAUTHORIZED"
                }(bt || (bt = {}))
        },
        E78O: function(e, t, n) {},
        EdhP: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return l
            }), n.d(t, "a", function() {
                return d
            });
            var i = n("mrSG"),
                r = n("cr+I"),
                a = n("/7QA"),
                o = n("vRsq"),
                s = {
                    height: 378,
                    width: 620,
                    allowScrolling: !0,
                    allowFullscreen: !0
                };

            function l(e, t) {
                return d(function(e) {
                    e.video && (e.video = Object(o.p)(e.video));
                    var t = r.stringify(e);
                    return a.p.config.playerBaseURL + "/?" + t
                }(e), t)
            }

            function d(e, t) {
                void 0 === t && (t = s);
                var n = i.__assign({}, s, t),
                    r = '<iframe src="' + e + '" frameborder="0" ' + (n.allowFullscreen ? 'allowfullscreen="true" ' : "") + (n.allowScrolling ? "" : 'scrolling="no" ') + 'height="' + n.height + '" width="' + n.width + '"></iframe>';
                return n.textLink && (r += function(e, t) {
                    return '<a href="' + e + '" style="padding:2px 0px 4px; display:block; width:345px; font-weight:normal; font-size:10px; text-decoration:underline;">' + t + "</a>"
                }(n.textLink.url, n.textLink.text)), r
            }
        },
        Epr8: function(e, t, n) {},
        EuPq: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("q1tI"),
                a = n("Ue10"),
                o = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleClickHandler = function(e) {
                            t.props.onClick && t.props.onClick(), e.currentTarget.select()
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return r.createElement(a.Ra, {
                            readOnly: !0,
                            type: a.Ta.Text,
                            value: this.props.value,
                            onClick: this.handleClickHandler
                        })
                    }, t
                }(r.Component);
            n.d(t, "a", function() {
                return o
            })
        },
        F9eG: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "cheer"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "User"
                        }
                    },
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "cheer"
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
                                        value: "emotes"
                                    },
                                    arguments: [{
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "includeUpperTiers"
                                        },
                                        value: {
                                            kind: "BooleanValue",
                                            value: !0
                                        }
                                    }, {
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "includeSponsored"
                                        },
                                        value: {
                                            kind: "BooleanValue",
                                            value: !0
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
                                                value: "prefix"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "type"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "campaign"
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
                                                        value: "brandImageURL"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "brandName"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "thresholds"
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
                                                                value: "minimumBits"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "matchedPercent"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }]
                                                    }
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "minimumBitsAmount"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "bitsTotal"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "bitsUsed"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "bitsPercentageRemaining"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "userLimit"
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
                                                                value: "id"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "bitsUsed"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "canBeSponsored"
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
                                                value: "tiers"
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
                                                        value: "bits"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "color"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "canCheer"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "canShowInBitsCard"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "images"
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
                                                                value: "url"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "theme"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "isAnimated"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "dpiScale"
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
                    end: 401
                }
            };
            n.loc.source = {
                body: "fragment cheer on User {\ncheer {\nid\nemotes (includeUpperTiers: true includeSponsored: true) {\nid\nprefix\ntype\ncampaign {\nid\nbrandImageURL\nbrandName\nthresholds {\nid\nminimumBits\nmatchedPercent\n}\nminimumBitsAmount\nbitsTotal\nbitsUsed\nbitsPercentageRemaining\nuserLimit\nself {\nid\nbitsUsed\ncanBeSponsored\n}\n}\ntiers {\nid\nbits\ncolor\ncanCheer\ncanShowInBitsCard\nimages {\nid\nurl\ntheme\nisAnimated\ndpiScale\n}\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        FfCS: function(e, t, n) {},
        Fxe2: function(e, t, n) {
            "use strict";

            function i(e) {
                return e && "v" === e.charAt(0) ? e.substring(1) : e
            }
            n.d(t, "a", function() {
                return i
            })
        },
        HzXE: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ChatRoomBanStatus"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "targetUserID"
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
                    }],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "chatRoomBanStatus"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "channelID"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "channelID"
                                    }
                                }
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "userID"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "targetUserID"
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
                                        value: "isPermanent"
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
                    end: 142
                }
            };
            n.loc.source = {
                body: "query ChatRoomBanStatus($targetUserID: ID! $channelID: ID!) {\nchatRoomBanStatus(channelID: $channelID userID: $targetUserID) {\nisPermanent\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        J9w5: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "Core_Services_Spade_Video"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "id"
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
                                        value: "id"
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
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 81
                }
            };
            n.loc.source = {
                body: "query Core_Services_Spade_Video($id: ID!) {\nvideo(id: $id) {\nid\nbroadcastType\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        JcRA: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("q1tI"),
                a = n("Ue10"),
                o = 300,
                s = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.onClick = function(e) {
                            n.state.isIconAnimationEnabled || n.props.onClick && (n.setState({
                                isFocused: !1
                            }), n.props.onClick(e), n.props.onClickAnimationEnd && setTimeout(n.props.onClickAnimationEnd, o))
                        }, n.setTextRef = function(e) {
                            n.textRef = e
                        }, n.onFocus = function() {
                            var e = n.props.text || "";
                            n.setState({
                                currentText: void 0 !== n.props.textOnHover ? n.props.textOnHover : e,
                                isFocused: !0
                            })
                        }, n.onBlur = function() {
                            n.setState({
                                currentText: n.props.text || "",
                                isFocused: !1
                            })
                        }, n.onIconAnimationComplete = function() {
                            n.setState({
                                isIconAnimationEnabled: !1
                            })
                        }, n.state = {
                            currentText: t.text || "",
                            currentIcon: t.icon,
                            currentIconOnHover: t.iconOnHover,
                            isFocused: !1,
                            offsetPixels: 0,
                            isIconAnimationEnabled: !1
                        }, n
                    }
                    return i.__extends(t, e), t.getDerivedStateFromProps = function(e, t) {
                        var n = {};
                        return t.currentText !== e.text && t.currentText !== e.textOnHover && (n.currentText = e.text || ""), t.currentIcon !== e.icon && (n.currentIcon = e.icon, n.isIconAnimationEnabled = !0), t.currentIconOnHover !== e.iconOnHover && (n.currentIconOnHover = e.iconOnHover, n.isIconAnimationEnabled = !0), Object.keys(n).length > 0 ? n : null
                    }, t.prototype.getSnapshotBeforeUpdate = function(e, t) {
                        return this.state.currentText !== t.currentText && this.textRef && (this.prevTextSize = this.textRef.getBoundingClientRect().width), null
                    }, t.prototype.componentDidUpdate = function(e, t) {
                        this.state.currentText !== t.currentText && this.triggerTextTransition()
                    }, t.prototype.render = function() {
                        var e = void 0 === this.props.fullWidthButton || this.props.fullWidthButton;
                        return r.createElement(a.Pa, {
                            fullWidth: e,
                            overflow: a.cb.Hidden
                        }, r.createElement("div", {
                            onMouseEnter: this.onFocus,
                            onMouseLeave: this.onBlur,
                            onFocus: this.onFocus,
                            onBlur: this.onBlur
                        }, r.createElement(a.z, i.__assign({
                            fullWidth: e,
                            blurAfterClick: !0,
                            onClick: this.onClick,
                            type: this.getCurrentType(),
                            tabIndex: this.props.tabIndex,
                            ariaLabel: this.props.ariaLabel
                        }, Object(a.jc)(this.props)), r.createElement(a.Xa, {
                            display: a.X.Flex,
                            justifyContent: a.Wa.Center,
                            alignItems: a.f.Center
                        }, this.renderIcon(), this.renderText()))))
                    }, t.prototype.renderIcon = function() {
                        return r.createElement(a.Pa, {
                            display: a.X.Flex,
                            justifyContent: a.Wa.Center,
                            alignItems: a.f.Center,
                            margin: {
                                right: .5
                            }
                        }, r.createElement("div", {
                            style: {
                                transform: this.getIconTransform(),
                                transition: this.getIconTransition()
                            }
                        }, r.createElement(a.i, {
                            enabled: this.state.isIconAnimationEnabled,
                            onAnimationEnd: this.onIconAnimationComplete,
                            duration: a.k.Long,
                            type: a.n.BounceIn
                        }, r.createElement(a.Xa, {
                            display: a.X.Flex,
                            justifyContent: a.Wa.Center,
                            alignItems: a.f.Center
                        }, r.createElement(a.sb, {
                            type: a.ub.Inherit,
                            asset: this.getIcon()
                        })))))
                    }, t.prototype.renderText = function() {
                        return r.createElement("span", {
                            ref: this.setTextRef,
                            style: {
                                opacity: this.getTextOpacity(),
                                transition: this.getTextTransition()
                            }
                        }, this.state.currentText)
                    }, t.prototype.getIconTransform = function() {
                        var e = "scale(1)",
                            t = "translateX(0px)";
                        return this.state.isFocused && (e = "scale(1.2)"), Math.abs(this.state.offsetPixels) > 15 && (t = "translateX(" + this.state.offsetPixels / 2 + "px)"), t + " " + e
                    }, t.prototype.getIconTransition = function() {
                        return 0 === this.state.offsetPixels ? o + "ms transform ease" : void 0
                    }, t.prototype.getTextOpacity = function() {
                        return 0 !== this.state.offsetPixels ? 0 : 1
                    }, t.prototype.getTextTransition = function() {
                        return 0 !== this.state.offsetPixels ? void 0 : o + "ms opacity ease"
                    }, t.prototype.getCurrentType = function() {
                        return this.state.isFocused && this.props.typeOnHover ? this.props.typeOnHover : this.props.type
                    }, t.prototype.getIcon = function() {
                        return this.state.isFocused && this.state.currentIconOnHover ? this.state.currentIconOnHover : this.state.currentIcon
                    }, t.prototype.triggerTextTransition = function() {
                        var e = this;
                        if (this.textRef) {
                            var t = this.textRef.getBoundingClientRect().width;
                            this.setState({
                                offsetPixels: t - this.prevTextSize
                            }, function() {
                                e.prevTextSize = t, requestAnimationFrame(function() {
                                    requestAnimationFrame(function() {
                                        e.setState({
                                            offsetPixels: 0
                                        })
                                    })
                                })
                            })
                        }
                    }, t
                }(r.Component);
            n.d(t, "a", function() {
                return s
            })
        },
        Jr7Z: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("q1tI"),
                a = n("/7QA"),
                o = n("yR8l"),
                s = n("GnwI"),
                l = n("Ue10"),
                d = n("+GMQ"),
                c = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.reportInteractive()
                    }, t.prototype.componentDidUpdate = function() {
                        this.reportInteractive()
                    }, t.prototype.render = function() {
                        if (!this.props.data.clip || this.props.data.loading) return r.createElement(l.Xa, null, this.renderPlaceholders());
                        var e = this.props.padding && this.props.padding.bottom,
                            t = void 0 === e ? .5 : e;
                        return r.createElement(l.Xa, {
                            display: l.X.Flex,
                            alignItems: l.f.Center,
                            padding: {
                                bottom: t
                            }
                        }, !this.props.hideSymbol && r.createElement(l.Xa, {
                            margin: {
                                right: .5
                            },
                            display: l.X.Flex,
                            alignItems: l.f.Center
                        }, r.createElement(l.sb, {
                            asset: l.tb.GlyphViews,
                            type: l.ub.Brand
                        })), r.createElement(l.W, {
                            bold: !0,
                            type: l.Vb.Span,
                            fontSize: this.props.fontSize ? this.props.fontSize : l.Ca.Size5
                        }, Object(a.d)("{views} views", {
                            views: Object(a.f)(this.props.data.clip.viewCount)
                        }, "ClipsViewCount")))
                    }, t.prototype.reportInteractive = function() {
                        this.props.data.clip && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.renderPlaceholders = function() {
                        return r.createElement(l.i, {
                            type: l.n.FadeIn,
                            duration: l.k.Long,
                            enabled: !0
                        }, r.createElement(l.W, {
                            fontSize: this.props.fontSize ? this.props.fontSize : l.Ca.Size5
                        }, r.createElement(l.ib, {
                            lineCount: 1,
                            width: 80
                        })))
                    }, t = i.__decorate([Object(s.b)("ClipsViewCount"), Object(o.a)(d)], t)
                }(r.Component);
            n.d(t, "a", function() {
                return c
            })
        },
        "Jxh/": function(e, t, n) {
            "use strict";

            function i(e) {
                var t = document.createElement("textarea");
                t.style.position = "fixed", t.style.top = "0", t.style.left = "0", t.style.fontSize = "12pt", t.style.width = "2em", t.style.height = "2em", t.style.padding = "0", t.style.border = "none", t.style.outline = "none", t.style.boxShadow = "none", t.style.background = "transparent", t.value = e, document.body.appendChild(t), t.select();
                var n = !0;
                try {
                    n = document.execCommand("copy")
                } catch (e) {
                    n = !1
                }
                return document.body.removeChild(t), n
            }
            n.d(t, "a", function() {
                return i
            })
        },
        Kcwz: function(e, t, n) {},
        Kgiw: function(e, t, n) {},
        KxT4: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("/7QA"),
                a = n("u0aY"),
                o = n("eLB1");

            function s() {
                return {
                    status: o.a.Loading,
                    vendorPreferences: {}
                }
            }

            function l(e, t) {
                switch (void 0 === e && (e = s()), t.type) {
                    case a.b:
                        return i.__assign({}, e, {
                            status: t.status
                        });
                    case a.c:
                        return i.__assign({}, e, {
                            vendorPreferences: i.__assign({}, e.vendorPreferences, t.vendorPreferences)
                        });
                    case a.a:
                        return s();
                    default:
                        return e
                }
            }
            r.p.store.registerReducer("gdpr", l);
            var d = n("YUvD"),
                c = n("q1tI"),
                u = n("/MKj"),
                p = n("fvjX"),
                m = n("yR8l");

            function h() {
                return window.location.search.includes("gdpr_override")
            }
            var f = n("06uF"),
                g = n("Mn7C"),
                v = n("GnwI"),
                E = n("5jJa"),
                b = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.updateGDPRVendorPreferences(f.a()), this.setNextGDPRStatus(this.props)
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        this.setNextGDPRStatus(e)
                    }, t.prototype.render = function() {
                        return null
                    }, t.prototype.setNextGDPRStatus = function(e) {
                        var t = e.data.requestInfo,
                            n = o.a.Loading,
                            i = !e.data.currentUser || e.data.currentUser.isMinimumGDPRConsentAge;
                        e.data.loading || ((n = e.data.error ? o.a.Error : this.isEEAUser(t.isFromEEA) ? i ? f.b() ? o.a.ConsentSaved : o.a.ConsentRequired : o.a.BelowMinimumAge : o.a.Skip) !== e.status && (e.updateGDPRStatus(n), n === o.a.BelowMinimumAge && Object(g.b)()), e.latencyTracking.reportInteractive())
                    }, t.prototype.isEEAUser = function(e) {
                        return e || h() || window.location.search.includes("eea")
                    }, t
                }(c.Component),
                k = Object(p.compose)(Object(u.connect)(function(e) {
                    return {
                        status: e.gdpr.status
                    }
                }, function(e) {
                    return Object(p.bindActionCreators)({
                        updateGDPRStatus: a.e,
                        updateGDPRVendorPreferences: a.f
                    }, e)
                }), Object(m.a)(E), Object(v.b)("GDPRConsentManager"))(b);

            function y() {
                return h() || r.b.get("gdpr_consent_enabled", !1)
            }
            var S = n("ClZk"),
                T = n("Td8r");
            n.d(t, !1, function() {
                return s
            }), n.d(t, !1, function() {
                return l
            }), n.d(t, "j", function() {
                return d.a
            }), n.d(t, !1, function() {}), n.d(t, "a", function() {
                return k
            }), n.d(t, "f", function() {
                return y
            }), n.d(t, "g", function() {
                return S.c
            }), n.d(t, "i", function() {
                return S.f
            }), n.d(t, !1, function() {
                return S.d
            }), n.d(t, !1, function() {}), n.d(t, "h", function() {
                return S.e
            }), n.d(t, "e", function() {
                return S.b
            }), n.d(t, "d", function() {
                return S.a
            }), n.d(t, "b", function() {
                return o.a
            }), n.d(t, "c", function() {
                return T.a
            })
        },
        L7EG: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "VideoShareBox_TrackingVideoContext"
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
                                                        value: "isPartner"
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
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 156
                }
            };
            n.loc.source = {
                body: "query VideoShareBox_TrackingVideoContext($videoID: ID!) {\nvideo(id: $videoID) {\nid\nbroadcastType\nowner {\nid\nlogin\nroles {\nisPartner\n}\n}\ngame {\nid\nname\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        MLDe: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return c
            }), n.d(t, "b", function() {
                return u
            }), n.d(t, "c", function() {
                return m
            }), n.d(t, "d", function() {
                return h
            });
            var i, r, a = n("/7QA"),
                o = n("wbMx"),
                s = n("2xye"),
                l = n("BQs+"),
                d = ((i = {})[o.b.Twitter] = "twitter", i[o.b.Reddit] = "reddit", i[o.b.VKontakte] = "vkontakte", i[o.b.Facebook] = "facebook", i[o.b.Copy] = "link", i[o.b.CopyInput] = "option_link", i[o.b.Download] = "download", i),
                c = {
                    MyClips: "MyClips",
                    ClipsOfMyChannel: "ClipsOfMyChannel"
                },
                u = {
                    Game: "TopClipsGame",
                    Channel: "TopClipsChannel"
                },
                p = ((r = {
                    MyClips: s.PageviewLocation.MyClipsManager,
                    ClipsOfMyChannel: s.PageviewLocation.ChannelClipsManager,
                    TopClipsGame: s.PageviewLocation.ClipsGame,
                    TopClipsChannel: s.PageviewLocation.ChannelClips
                })[s.PageviewLocation.ClipsEditing] = s.PageviewLocation.ClipsEditing, r[s.PageviewLocation.ClipsViewing] = s.PageviewLocation.ClipsViewing, r[s.PageviewLocation.ClipsWatchPage] = s.PageviewLocation.ClipsWatchPage, r),
                m = function(e, t, n, i, r) {
                    return function(o) {
                        a.p.tracking.track(s.SpadeEventType.VideoShare, {
                            vod_id: e,
                            vod_type: s.SpadeVideoBroadcastType.Clip,
                            share_platform: d[o],
                            location: p[r],
                            game: t,
                            channel_id: Number(n || 0),
                            channel: i,
                            live: null
                        })
                    }
                },
                h = function(e, t, n, i, r, o) {
                    return function() {
                        a.p.tracking.track(s.SpadeEventType.VideoShare, {
                            vod_id: e,
                            vod_type: s.SpadeVideoBroadcastType.Clip,
                            share_platform: l.a.Link,
                            location: p[r],
                            game: t,
                            channel_id: Number(n || 0),
                            channel: i,
                            live: null,
                            shared_item_url: o
                        })
                    }
                }
        },
        MPK0: function(e, t, n) {},
        McYG: function(e, t, n) {
            "use strict";

            function i(e, t) {
                return "https://www.twitch.tv/" + t + "/clip/" + e
            }
            n.d(t, "a", function() {
                return i
            })
        },
        Mn7C: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            }), n.d(t, "c", function() {
                return s
            }), n.d(t, "b", function() {
                return l
            }), n.d(t, "d", function() {
                return d
            });
            var i, r = n("/7QA"),
                a = n("2xye"),
                o = n("kRBY");

            function s(e, t) {
                var n = Object(o.e)(r.p.store.getState()),
                    i = "";
                try {
                    i = JSON.stringify(t)
                } catch (e) {
                    r.k.withCategory("gdpr-tracking").warn("Failed constructing vendor string")
                }
                var s = {
                    consent_action: e,
                    consent_string: i,
                    user_id: n && n.id || null
                };
                r.o.track(a.SpadeEventType.GDPRConsentSet, s)
            }

            function l() {
                var e = r.p.store.getState().gdpr.vendorPreferences;
                s(i.DeniedByAge, e)
            }

            function d() {
                var e = Object(o.e)(r.p.store.getState());
                r.o.track(a.SpadeEventType.GDPRConsentBannerDisplayed, {
                    user_id: e && e.id || null
                })
            }! function(e) {
                e.Given = "consent_given", e.Denied = "consent_denied", e.DeniedByAge = "consent_denied_age", e.Mixed = "consent_mixed"
            }(i || (i = {}))
        },
        OTsR: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ClipsViewModerationModals"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "slug"
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
                                value: "clip"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "slug"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "slug"
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
                                        value: "broadcaster"
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
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 106
                }
            };
            n.loc.source = {
                body: "query ClipsViewModerationModals($slug: ID!) {\nclip(slug: $slug) {\nid\nbroadcaster {\nid\n}\ncurator {\nid\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        Oy4H: function(e, t, n) {},
        "Pub/": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            });
            var i = n("HzXE");

            function r(e, t, n) {
                try {
                    return e.readQuery({
                        query: i,
                        variables: {
                            channelID: t,
                            targetUserID: n
                        }
                    })
                } catch (e) {}
            }
        },
        QVaV: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            }), n.d(t, "b", function() {
                return o
            });
            var i = n("q1tI"),
                r = /^[\x00-\x7F]*$/,
                a = function(e, t, n) {
                    return void 0 === n && (n = !1), t && e && !o(t) ? n ? t + " (" + e + ")" : i.createElement("span", null, t, " ", i.createElement("span", {
                        className: "intl-login"
                    }, "(" + e + ")")) : t || (e || "")
                };

            function o(e) {
                return r.test(e)
            }
        },
        Qdxp: function(e, t, n) {
            var i = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "FollowButton_User"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "login"
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
                                        value: "login"
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
                                    kind: "FragmentSpread",
                                    name: {
                                        kind: "Name",
                                        value: "followButtonFragment"
                                    },
                                    directives: []
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 156
                }
            };
            i.loc.source = {
                body: '#import "twilight/common/queries/follow-button-fragment.gql"\nquery FollowButton_User($login: String!) {\nuser(login: $login) {\nid\n...followButtonFragment\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var r = {};
            i.definitions = i.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !r[t] && (r[t] = !0, !0)
                })
            }(n("V94A").definitions)), e.exports = i
        },
        Qqhu: function(e, t, n) {},
        RQ6e: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("TSYQ"),
                a = n("q1tI"),
                o = n("/7QA"),
                s = n("fvjX"),
                l = n("yR8l"),
                d = n("GnwI");
            var c = n("Ue10"),
                u = n("gIsd"),
                p = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleChange = function(e) {
                            t.props.onChange && t.props.onChange(e.target.value)
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidUpdate = function() {
                        this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = null,
                            t = Object(o.d)("Select One...", "ReportUserModal");
                        this.props.data.loading ? e = [a.createElement("option", {
                            key: "Loading"
                        }, Object(o.d)("Loading...", "ReportReasonsSelect"))] : e = (this.props.data.reportReasons || [{
                            id: "other",
                            text: Object(o.d)("Other Terms of Service Violation", "ReportUserModal")
                        }]).map(function(e) {
                            return a.createElement("option", {
                                key: e.id,
                                value: e.id
                            }, e.text)
                        });
                        return a.createElement(c.Xa, {
                            margin: {
                                bottom: 2
                            }
                        }, a.createElement(c.Ea, {
                            id: "reporting-modal__select",
                            label: Object(o.d)("Select Reason (required)", "ReportUserModal")
                        }, a.createElement(c.zb, {
                            id: "reporting-modal__select",
                            "data-test-selector": "reporting-modal.select",
                            disabled: this.props.data.loading || !!this.props.data.error,
                            onChange: this.handleChange,
                            defaultValue: t
                        }, a.createElement("option", {
                            disabled: !0,
                            key: "default"
                        }, t), e)))
                    }, t
                }(a.Component),
                m = Object(s.compose)(Object(l.a)(u, {
                    options: function(e) {
                        return {
                            variables: {
                                content: e.reportContentType
                            }
                        }
                    }
                }), Object(d.b)("ReportReasonSelect"))(p);
            n("y4Ne");
            n.d(t, "a", function() {
                return h
            }), n.d(t, "b", function() {
                return f
            });
            var h;
            ! function(e) {
                e[e.Unsubmitted = 0] = "Unsubmitted", e[e.Success = 1] = "Success", e[e.FormError = 2] = "FormError", e[e.MutationError = 3] = "MutationError", e[e.UserError = 4] = "UserError"
            }(h || (h = {}));
            var f = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        description: "",
                        reason: null
                    }, t.headerMessage = Object(o.d)("Tell us your concern about this content so that we can review it to determine whether there has been a violation of the {tosLink}. {br} (Abuse of this feature is a violation of the terms of service)", {
                        br: a.createElement("br", null),
                        tosLink: a.createElement("a", {
                            href: "https://www.twitch.tv/p/terms-of-service",
                            target: "_blank"
                        }, Object(o.d)("terms of service", "ReportUser"))
                    }, "ReportUser"), t.handleSubmit = function(e) {
                        e.preventDefault(), t.state.reason && t.state.description.length > 0 ? t.props.onSubmit(t.state.reason || "", t.state.description) : t.props.onError(h.FormError)
                    }, t.handleTextAreaChange = function(e) {
                        t.setState({
                            description: e.target.value
                        })
                    }, t.handleReasonChange = function(e) {
                        t.setState({
                            reason: e
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(c.Xa, {
                        display: c.X.Flex,
                        flexDirection: c.Aa.Column,
                        alignItems: c.f.Center,
                        justifyContent: c.Wa.Center
                    }, this.renderStatusMessage(), this.renderBody())
                }, t.prototype.renderBody = function() {
                    return this.props.submitStatus === h.Success ? a.createElement("div", null, a.createElement(c.z, {
                        onClick: this.props.onClose
                    }, a.createElement(c.Xa, {
                        padding: {
                            x: 2
                        }
                    }, Object(o.d)("Close", "ReportUser")))) : a.createElement("div", null, a.createElement(c.Xa, {
                        "data-test-selector": "reporting.title",
                        margin: {
                            bottom: 1
                        },
                        "data-a-target": "reporting-channel-name"
                    }, a.createElement(c.W, {
                        type: c.Vb.H4
                    }, this.props.title), a.createElement(c.Eb, {
                        color: c.O.Alt2,
                        margin: {
                            top: 1
                        }
                    }, this.headerMessage)), a.createElement("form", null, a.createElement(c.Eb, {
                        borderTop: !0,
                        borderBottom: !0,
                        margin: {
                            y: 2
                        },
                        padding: {
                            y: 2
                        }
                    }, a.createElement(m, {
                        reportContentType: this.props.reportContentType,
                        onChange: this.handleReasonChange
                    }), a.createElement(c.Ea, {
                        id: "reporting__text-area",
                        label: Object(o.d)("Description (required)", "ReportUser")
                    }, a.createElement(c.Sb, {
                        defaultValue: this.props.defaultDescription,
                        onChange: this.handleTextAreaChange
                    }))), a.createElement(c.Eb, {
                        display: c.X.Flex,
                        justifyContent: c.Wa.Center
                    }, a.createElement(c.z, {
                        onClick: this.handleSubmit
                    }, a.createElement(c.Xa, {
                        padding: {
                            x: 2
                        }
                    }, Object(o.d)("Send", "ReportUser"))))))
                }, t.prototype.renderStatusMessage = function() {
                    var e = null;
                    switch (this.props.submitStatus) {
                        case h.FormError:
                            e = Object(o.d)("Reason and Description are required.", "ReportUser");
                            break;
                        case h.MutationError:
                            e = Object(o.d)("Sorry, a network error occurred when submitting your report. Please try again later.", "ReportUser");
                            break;
                        case h.Success:
                            e = Object(o.d)("Thank you for your report.", "ReportUser");
                            break;
                        case h.UserError:
                            e = Object(o.d)("This account could not be reported. It may have already been suspended, or the owner may have deleted it.", "ReportUser");
                            break;
                        default:
                            return null
                    }
                    var t = r({
                        "reporting__error-container": this.props.submitStatus !== h.Success,
                        "reporting__success-container": this.props.submitStatus === h.Success
                    });
                    return a.createElement(c.Eb, {
                        className: t,
                        fullWidth: this.props.submitStatus !== h.Success,
                        "data-test-selector": "reporting.error",
                        margin: {
                            bottom: 2
                        },
                        padding: 1
                    }, e)
                }, t
            }(a.Component)
        },
        RcPG: function(e, t, n) {
            "use strict";
            var i;
            n.d(t, "a", function() {
                    return i
                }),
                function(e) {
                    e[e.Text = 0] = "Text", e[e.ModeratedText = 1] = "ModeratedText", e[e.CurrentUserHighlight = 2] = "CurrentUserHighlight", e[e.Mention = 3] = "Mention", e[e.Link = 4] = "Link", e[e.Emote = 5] = "Emote", e[e.ClipLink = 6] = "ClipLink", e[e.VideoLink = 7] = "VideoLink"
                }(i || (i = {}))
        },
        Rinm: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ClipsViewTitleEdit"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "slug"
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
                                value: "clip"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "slug"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "slug"
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
                                        value: "broadcaster"
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
                }],
                loc: {
                    start: 0,
                    end: 90
                }
            };
            n.loc.source = {
                body: "query ClipsViewTitleEdit($slug: ID!) {\nclip(slug: $slug) {\nid\nbroadcaster {\nid\n}\ntitle\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        S1Za: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            }), n.d(t, "b", function() {
                return r
            });
            var i = "video-player.VIDEO_PLAYER_INSTANCE_STARTED";

            function r(e) {
                return {
                    type: i,
                    playerRefID: e
                }
            }
        },
        SGIe: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return c
            });
            var i, r = n("q1tI"),
                a = n("/7QA"),
                o = n("DMoW"),
                s = n("CLrI"),
                l = n("OTul"),
                d = n("Ue10");
            ! function(e) {
                e.ClipsVideoButtonHighlight = "clips-video-button-highlight"
            }(i || (i = {}));
            var c = function(e) {
                var t, n = e.clip;
                if (!(n.video && n.video.id && null !== n.videoOffsetSeconds && n.broadcaster && n.broadcaster.login && n.video.broadcastType === o.i.ARCHIVE)) {
                    var c = n.video ? Object(a.d)("You can only highlight past broadcasts", "ClipsFullVideoButton") : Object(a.d)("Full video not available", "ClipsFullVideoButton");
                    return r.createElement(d.Yb, {
                        label: c
                    }, r.createElement(d.z, {
                        type: e.buttonType,
                        disabled: !0
                    }, e.callToAction))
                }
                return r.createElement(d.z, {
                    targetBlank: !0,
                    linkTo: Object(l.g)(n.broadcaster.login, n.video.id, (t = {}, t[s.a.TrackingID] = n.id, t[s.a.Start] = n.videoOffsetSeconds.toString(), t[s.a.End] = (n.videoOffsetSeconds + n.durationSeconds).toString(), t[s.a.Title] = n.title || "Clip: " + n.video.title, t[s.a.GameName] = n.game && n.game.displayName || "", t[s.a.GameID] = n.game && n.game.id || "", t)),
                    onClick: e.onClick,
                    type: e.buttonType,
                    "data-test-selector": i.ClipsVideoButtonHighlight
                }, e.callToAction)
            }
        },
        SceP: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ClipsChatCard_Clip"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "slug"
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
                                value: "clip"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "slug"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "slug"
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
                                        value: "thumbnailURL"
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
                                        value: "slug"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "url"
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
                                        value: "broadcaster"
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
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 151
                }
            };
            n.loc.source = {
                body: "query ClipsChatCard_Clip($slug: ID!) {\nclip(slug: $slug) {\nid\nthumbnailURL\ntitle\nslug\nurl\ncurator {\nid\ndisplayName\n}\nbroadcaster {\nid\ndisplayName\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        SmhC: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return s
            }), n.d(t, "b", function() {
                return l
            });
            var i, r = n("mrSG"),
                a = n("Td8r"),
                o = ((i = {})[a.a.Amazon] = {
                    defaultConsent: !0,
                    enabled: !1
                }, i[a.a.ComScore] = {
                    defaultConsent: !1,
                    enabled: !0
                }, i[a.a.Google] = {
                    defaultConsent: !1,
                    enabled: !0
                }, i[a.a.Nielsen] = {
                    defaultConsent: !1,
                    enabled: !0
                }, i[a.a.SalesforceDMP] = {
                    defaultConsent: !1,
                    enabled: !0
                }, i);

            function s() {
                return o
            }

            function l() {
                var e = s();
                return Object.keys(e).reduce(function(t, n) {
                    var i;
                    return e[n].enabled ? r.__assign({}, t, ((i = {})[n] = e[n].defaultConsent, i)) : t
                }, {})
            }
        },
        T1wi: function(e, t, n) {},
        Td8r: function(e, t, n) {
            "use strict";
            var i;
            n.d(t, "a", function() {
                    return i
                }),
                function(e) {
                    e.Amazon = "amazon", e.ComScore = "comscore", e.Google = "google", e.Nielsen = "nielsen", e.SalesforceDMP = "salesforce_dmp"
                }(i || (i = {}))
        },
        "V+GM": function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("cr+I"),
                a = n("q1tI"),
                o = n("wIs1"),
                s = n("/7QA");

            function l(e) {
                return function(t) {
                    var n = function(n) {
                        function o(t) {
                            var r = n.call(this, t) || this;
                            return r.tracked = !1, r.referenceTracking = {}, r.trackPageview = function() {
                                if (!(r.tracked || e.skip && e.skip(r.props))) {
                                    r.tracked = !0;
                                    var t = {};
                                    "function" == typeof e.properties ? t = e.properties(r.props) : e.properties && (t = i.__assign({}, e.properties));
                                    var n = i.__assign({}, r.props);
                                    n.location && n.location.state && (t.medium = n.location.state.medium, t.content = n.location.state.content, t.content_index = n.location.state.content_index, t.email_id = n.location.state.email_id);
                                    var a = r.referenceTracking,
                                        o = a.content,
                                        l = a.medium,
                                        d = a.content_index,
                                        c = a.email_id;
                                    s.p.tracking.trackPageview(i.__assign({
                                        content: o,
                                        medium: l,
                                        content_index: d,
                                        email_id: c,
                                        location: e.location
                                    }, t))
                                }
                            }, s.k.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : s.k.warn("No latency tracker exists! This means no data will be sent to Spade.", e), r
                        }
                        return i.__extends(o, n), o.prototype.componentDidMount = function() {
                            var e = this;
                            this.referenceTracking = this.stripTTParams(this.props.history.location), this.trackPageview(), this.props.history.listen(function(t, n) {
                                "REPLACE" !== n && (e.tracked = !1, e.referenceTracking = {})
                            })
                        }, o.prototype.componentDidUpdate = function() {
                            this.trackPageview()
                        }, o.prototype.render = function() {
                            return a.createElement(t, i.__assign({}, this.props))
                        }, o.prototype.stripTTParams = function(e) {
                            var t = "" !== e.search ? r.parse(e.search) : {},
                                n = {
                                    content: t.tt_content,
                                    content_index: t.tt_content_index,
                                    medium: t.tt_medium,
                                    email_id: t.tt_email_id
                                };
                            if (delete t.tt_content, delete t.tt_content_index, delete t.tt_medium, delete t.tt_email_id, n.medium || n.content || n.email_id) {
                                var i = "",
                                    a = r.stringify(t);
                                a.length > 0 && (i = "?" + a), this.props.history.replace({
                                    pathname: e.pathname,
                                    hash: e.hash,
                                    search: i
                                })
                            }
                            return n
                        }, o
                    }(a.Component);
                    return Object(o.a)(n)
                }
            }
            n.d(t, "a", function() {
                return l
            })
        },
        V4dr: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ClipsView"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "slug"
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
                                value: "clip"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "slug"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "slug"
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
                                        value: "creationState"
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
                                        value: "broadcaster"
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
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 118
                }
            };
            n.loc.source = {
                body: "query ClipsView($slug: ID!) {\nclip(slug: $slug) {\nid\ncreationState\ngame {\nid\nname\n}\nbroadcaster {\nid\ndisplayName\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        V94A: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "followButtonFragment"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "User"
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
                                value: "displayName"
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
                                        value: "follower"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "disableNotifications"
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
                    end: 172
                }
            };
            n.loc.source = {
                body: "# Queries the data necessary to render the FollowButton component.\nfragment followButtonFragment on User {\nid\ndisplayName\nlogin\nself {\nfollower {\ndisableNotifications\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        VN3V: function(e, t, n) {},
        VSaV: function(e, t) {},
        Vsf8: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ClipsModalDeleteAll_Clip"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "slug"
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
                                value: "clip"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "slug"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "slug"
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
                                        value: "video"
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
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "broadcast"
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
                    end: 101
                }
            };
            n.loc.source = {
                body: "query ClipsModalDeleteAll_Clip($slug: ID!) {\nclip(slug: $slug) {\nid\nvideo {\nid\n}\nbroadcast {\nid\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        VwyG: function(e, t, n) {
            "use strict";
            var i = n("/MKj"),
                r = n("kRBY"),
                a = n("mrSG"),
                o = n("q1tI"),
                s = n("oJmH"),
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
                    return a.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
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
                }(o.Component);
            var m = Object(s.compose)(Object(d.a)(u, {
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
            var h = Object(i.connect)(function(e) {
                return {
                    isLoggedIn: Object(r.f)(e)
                }
            })(m);
            n.d(t, "a", function() {
                return h
            })
        },
        WQCf: function(e, t, n) {
            "use strict";
            n.d(t, "d", function() {
                return l
            }), n.d(t, "c", function() {
                return d
            }), n.d(t, "a", function() {
                return c
            }), n.d(t, "b", function() {
                return i
            }), n.d(t, "f", function() {
                return r
            }), n.d(t, "e", function() {
                return s
            });
            var i, r, a, o, s, l = {
                    BitsLeaderboardEvents: "leaderboard-events-v1",
                    BitsCampaignEvents: "bits-campaigns-v1",
                    CampaignGlobalEvents: "campaign-events",
                    CampaignUserEvents: "user-campaign-events",
                    ChannelBitsEvents: "channel-bits-events-v1",
                    ChannelBitsPinEvents: "channel-bit-events-public",
                    ChannelEventUpdates: "channel-event-updates",
                    ChannelSquadUpdates: "channel-squad-updates",
                    ChannelSubscribeEvents: "channel-subscribe-events-v1",
                    CheerbombEventsTopic: "channel-cheer-events-public-v1",
                    BroadcastSettingsUpdate: "broadcast-settings-update",
                    ChatRoom: "chatrooms-room-v1",
                    ChatRoomsChannel: "chatrooms-channel-v1",
                    ChatRoomsUser: "chatrooms-user-v1",
                    Friendship: "friendship",
                    ImageUpload: "user-image-update",
                    ModerationActionsByUserAndChannel: "chat_moderator_actions",
                    MultiviewChanletUpdate: "multiview-chanlet-update",
                    MysteryGift: "channel-sub-gifts-v1",
                    OnsiteNotifications: "onsite-notifications",
                    PayoutOnboardingEvents: "payout-onboarding-events",
                    Presence: "presence",
                    Raid: "raid",
                    SquadUpdates: "squad-updates",
                    StreamChange: "stream-change-v1",
                    StreamChatRoom: "stream-chat-room-v1",
                    SubscribersCSV: "subscribers-csv-v1",
                    UploadService: "upload",
                    UserBitsUpdates: "user-bits-updates-v1",
                    UserCommerceEvents: "user-commerce-events",
                    UserCrateEvents: "user-crate-events-v1",
                    UserPropertiesUpdates: "user-properties-update",
                    UserSubscribeEvents: "user-subscribe-events-v1",
                    VideoPlayback: "video-playback",
                    VideoPlaybackById: "video-playback-by-id",
                    VideoThumbnailProcessing: "video-thumbnail-processing",
                    Whispers: "whispers"
                },
                d = {
                    BitsChannelSettingsEvent: "channel_settings_update",
                    BitsCampaignAddCheermoteEvent: "sponsored-cheermote-add",
                    BitsCampaignRemoveCheermoteEvent: "sponsored-cheermote-remove",
                    BitsCampaignTotalUpdate: "sponsored-cheermote-update-used",
                    BitsCampaignComplete: "sponsored-cheermote-campaign-complete",
                    BitsPinEvent: "bits-pin-event",
                    BitsLeaderboardEvent: "bits-leaderboard-event",
                    ChannelStreamDown: "stream-down",
                    ChannelStreamUp: "stream-up",
                    BroadcastSettingsUpdate: "broadcast_settings_update",
                    ChatNotification: "chat-notification",
                    ChatRoomCreated: "created_room",
                    ChatRoomDeleted: "deleted_room",
                    ChatRoomUpdated: "updated_room",
                    ChatRoomsUserModAction: "user_moderation_action",
                    ChatRoomMessageCreated: "created_room_message",
                    ChatRoomMessageEdited: "edited_room_message",
                    ChatRoomMessageDeleted: "deleted_room_message",
                    ChatRoomsRoomViewUpdated: "updated_room_view",
                    CheerbombEvent: "cheerbomb",
                    Commercial: "commercial",
                    ImageUploadSuccess: "imageuploadsuccess",
                    LiveEvent: "live-event",
                    ModerationAction: "moderation_action",
                    MultiviewChanletUpdate: "chanlet",
                    MysteryGiftPurchase: "mystery-gift-purchase",
                    OnsiteNotificationCreate: "create-notification",
                    OnsiteNotificationDelete: "delete-notification",
                    OnsiteNotificationsRead: "read-notifications",
                    OnsiteNotificationSummaryUpdate: "update-summary",
                    OnsiteNotificationUpdate: "update-notification",
                    PayoutOnboardingEvent: "payout-onboarding-event",
                    Presence: "presence",
                    PresenceSettings: "settings",
                    PurgeMessageRequest: "purge_messages_request",
                    RaidCancel: "raid_cancel",
                    RaidUpdate: "raid_update",
                    RaidCancelV2: "raid_cancel_v2",
                    RaidUpdateV2: "raid_update_v2",
                    RaidGoV2: "raid_go_v2",
                    Squad: "squad",
                    StreamChatRoomChatRichEmbed: "chat_rich_embed",
                    StreamChatRoomHostTargetChange: "host_target_change",
                    StreamChatRoomExtensionMessage: "extension_message",
                    StreamDown: "stream_down",
                    StreamUp: "stream_up",
                    SubscribersCSVComplete: "subscribers_csv_complete_v1",
                    SubscribersCSVInProgress: "subscribers_csv_in_progress_v1",
                    UpdatedChannelChatProperty: "updated_channel_chat_property",
                    UploadService: "upload",
                    UserBitsBalanceUpdate: "balance_update",
                    UserBitsBadgeUpdate: "badge_update",
                    UserCampaignProgressEvent: "progress",
                    UserCampaignRewardEvent: "reward",
                    UserCrateEvent: "crate-event",
                    UserGiftEvent: "gift-event",
                    UserMention: "user_mention",
                    UserPropertiesUpdate: "user_properties_update",
                    VideoThumbnailProcessingComplete: "processing_complete",
                    VideoThumbnailProcessingError: "processing_error",
                    ViewCount: "viewcount",
                    Vodcast: "watchparty-vod",
                    WhisperAllThreadsUpdate: "threads",
                    WhisperDeleted: "whisper_deleted",
                    WhisperEdited: "whisper_edited",
                    WhisperReceived: "whisper_received",
                    WhisperSent: "whisper_sent",
                    WhisperThreadUpdate: "thread"
                },
                c = {
                    Accepted: "accepted",
                    Requested: "requested",
                    Removed: "removed",
                    SelfAccepted: "self_accepted",
                    SelfRemoved: "self_removed",
                    SelfRequested: "self_requested"
                };
            ! function(e) {
                e.AddBlockedTerm = "add_blocked_term", e.AddPermittedTerm = "add_permitted_term", e.AutoModEnabled = "automod_enabled", e.AutoModRejected = "automod_rejected", e.DeniedAutoModMessage = "denied_automod_message", e.ApprovedAutoModMessage = "approved_automod_message", e.AutoModCheerRejected = "automod_cheer_rejected", e.Ban = "ban", e.Clear = "clear", e.Delete = "delete", e.DeleteBlockedTerm = "delete_blocked_term", e.DeletePermittedTerm = "delete_permitted_term", e.EmoteOnly = "emoteonly", e.EmoteOnlyOff = "emoteonlyoff", e.FollowersOnly = "followers", e.FollowersOnlyOff = "followersoff", e.Host = "host", e.Mod = "mod", e.ModifiedAutoModProperties = "modified_automod_properties", e.R9kBeta = "r9kbeta", e.R9kBetaOff = "r9kbetaoff", e.Raid = "raid", e.Slow = "slow", e.SlowOff = "slowoff", e.SubsBeta = "subsbeta", e.SubscribersOnly = "subscribers", e.SubscribersOnlyOff = "subscribersoff", e.Timeout = "timeout", e.Unban = "unban", e.Unhost = "unhost", e.Unmod = "unmod", e.Unraid = "unraid", e.Untimeout = "untimeout"
            }(i || (i = {})),
            function(e) {
                e.AutoModMessageRejected = "automod_message_rejected", e.AutoModMessageApproved = "automod_message_approved", e.AutoModMessageDenied = "automod_message_denied", e.AutoModCheerDenied = "automod_cheer_message_denied", e.AutoModCheerTimeout = "automod_cheer_message_timeout"
            }(r || (r = {})),
            function(e) {
                e.Archive = "archive", e.Highlight = "highlight", e.Upload = "upload", e.Premiere = "premiere", e.Rerun = "rerun", e.WatchPartyPremiere = "watch_party_premiere", e.WatchPartyRerun = "watch_party_rerun"
            }(a || (a = {})),
            function(e) {
                e.Private = "private", e.Public = "public"
            }(o || (o = {})),
            function(e) {
                e.Pending = "PENDING", e.Live = "LIVE", e.Ended = "ENDED"
            }(s || (s = {}))
        },
        WSjS: function(e, t, n) {
            "use strict";
            var i, r, a, o = n("mrSG"),
                s = n("q1tI"),
                l = n("/7QA"),
                d = n("yR8l"),
                c = n("8Ad5"),
                u = n("geRD"),
                p = n("2xye"),
                m = function(e, t, n, i, r) {
                    var a = Date.now() / 1e3;
                    l.p.tracking.track(p.SpadeEventType.ClipEdit, {
                        channel_id: e,
                        clip_edit_session_id: t + "," + Math.floor(a),
                        clip_id: t,
                        clip_slug: n,
                        effect_name: "title",
                        effect_setting: i,
                        front_end: !0,
                        location: r
                    })
                },
                h = function(e, t, n, i, r) {
                    var a = Date.now() / 1e3;
                    l.p.tracking.track(p.SpadeEventType.ClipEdit, {
                        channel_id: e,
                        clip_edit_session_id: t + "," + Math.floor(a),
                        clip_id: t,
                        clip_slug: n,
                        effect_name: "publish-twilight",
                        effect_setting: i,
                        front_end: !0,
                        location: r
                    })
                },
                f = n("9C/b");
            ! function(e) {
                e.AlreadyPublished = "already_published", e.EditingWindowExpired = "editing_window_expired", e.InvalidSpeedDuration = "invalid_speed_duration", e.InvalidDuration = "invalid_duration", e.InvalidTitle = "invalid_title", e.Unknown = "unknown"
            }(i || (i = {})),
            function(e) {
                e.InvalidTitle = "invalid_title"
            }(r || (r = {})),
            function(e) {
                e.Unsent = "unsent", e.Sending = "sending", e.Error = "error", e.Successful = "successful"
            }(a || (a = {}));
            var g, v = 5,
                E = 60,
                b = n("Ue10"),
                k = n("5EAu"),
                y = {
                    publishState: a.Unsent,
                    errorMessage: null
                },
                S = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = y, t.onError = function(e) {
                            t.setState({
                                publishState: a.Error,
                                errorMessage: e
                            }), t.props.onError(e)
                        }, t.onPublish = function() {
                            return o.__awaiter(t, void 0, void 0, function() {
                                var e, t, n;
                                return o.__generator(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            if (this.setState({
                                                    publishState: a.Sending
                                                }), e = this.props.endOffset - this.props.startOffset, this.props.startOffset > this.props.endOffset || e < v || e > E) return this.onError(i.InvalidDuration), [2];
                                            if ("" === this.props.title.trim()) return this.onError(g.emptySubmission), [2];
                                            r.label = 1;
                                        case 1:
                                            return r.trys.push([1, 3, , 4]), [4, this.props.publishClip(Object(u.a)({
                                                segments: [{
                                                    offsetSeconds: this.props.startOffset,
                                                    durationSeconds: this.props.endOffset - this.props.startOffset,
                                                    speed: 1
                                                }],
                                                slug: this.props.slug,
                                                title: this.props.title
                                            }))];
                                        case 2:
                                            return (t = r.sent()).data.publishClip && t.data.publishClip.error && t.data.publishClip.error.message ? (n = t.data.publishClip.error.message, this.onError(n)) : (h(Number(this.props.clipBroadcasterId), this.props.clipId, this.props.slug, this.props.title, p.PageviewLocation.ClipsEditing), this.setState({
                                                publishState: a.Successful
                                            }), this.props.history.push("/create", {
                                                isPostEdit: !0,
                                                slug: this.props.slug
                                            })), [3, 4];
                                        case 3:
                                            return r.sent(), n = i.Unknown, this.onError(n), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                        this.state.publishState === a.Error && e.title.length > 0 && this.props.title !== e.title && this.setState(y), e.isSubmitted && !this.props.isSubmitted && this.onPublish()
                    }, t.prototype.render = function() {
                        var e = this.state.publishState === a.Error,
                            t = this.state.publishState === a.Sending;
                        return s.createElement(b.Xa, null, s.createElement(b.z, {
                            onClick: this.onPublish,
                            disabled: e,
                            state: t ? b.E.Loading : b.E.Default,
                            size: b.D.Large,
                            blurAfterClick: !0
                        }, Object(l.d)("Publish", "ClipsPublishButton")))
                    }, t = o.__decorate([Object(d.a)(k, {
                        name: "publishClip"
                    })], t)
                }(s.Component),
                T = Object(f.a)(S),
                N = n("/2kD"),
                _ = {
                    TITLE_INPUT: "cmgr-title-input",
                    TITLE_SAVE: "cmgr-title-save",
                    TITLE_SAVE_TOOLTIP: "cmgr-title-save-tooltip"
                };
            ! function(e) {
                e.emptySubmission = "emptySubmission", e.characterLimitReached = "characterLimitReached", e.channelViolation = "channelViolation", e.notCurator = "notCurator", e.unknown = "unknown"
            }(g || (g = {}));
            var C = 100,
                O = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.renderForClipsViewing = function() {
                            return s.createElement("div", null, s.createElement(b.Sb, {
                                id: _.TITLE_INPUT,
                                "data-test-selector": _.TITLE_INPUT,
                                value: n.state.title,
                                onChange: n.handleTitleEdit,
                                onKeyDown: n.handleKeyDown
                            }), s.createElement(b.Xa, {
                                display: b.X.Flex,
                                justifyContent: b.Wa.Between,
                                alignItems: b.f.Center,
                                padding: {
                                    top: 1
                                }
                            }, n.state.showError ? s.createElement(b.W, {
                                color: b.O.Error
                            }, n.getErrorMessage()) : s.createElement(b.W, {
                                color: b.O.Alt2
                            }, n.getRemainingCharacterText()), s.createElement(b.Xa, {
                                display: b.X.Flex
                            }, s.createElement(b.z, {
                                "data-test-selector": _.TITLE_SAVE,
                                onClick: n.props.onCancel,
                                type: b.F.Hollow
                            }, Object(l.d)("Cancel", "ClipsTitleEdit")), s.createElement(b.Xa, {
                                padding: {
                                    left: 1
                                }
                            }, n.renderSave()))))
                        }, n.renderForManager = function() {
                            return s.createElement(b.Ea, {
                                id: _.TITLE_INPUT,
                                label: Object(l.d)("Title", "ClipsTitleEdit"),
                                hint: n.getRemainingCharacterText()
                            }, s.createElement(b.Xa, {
                                display: b.X.Flex,
                                flexWrap: b.Ba.NoWrap
                            }, s.createElement(b.Xa, {
                                flexGrow: 1,
                                margin: {
                                    right: 1
                                }
                            }, s.createElement(b.Ra, {
                                id: _.TITLE_INPUT,
                                "data-test-selector": _.TITLE_INPUT,
                                type: b.Ta.Text,
                                value: n.state.title,
                                onChange: n.handleTitleEdit,
                                onKeyDown: n.handleKeyDown
                            })), s.createElement(b.Xa, {
                                flexShrink: 0,
                                flexGrow: 0
                            }, s.createElement(b.Xa, {
                                position: b.jb.Relative
                            }, n.renderSave(), s.createElement(b.Ua, {
                                onClick: n.dismissMessage,
                                "data-test-selector": _.TITLE_SAVE_TOOLTIP
                            }, s.createElement(b.u, {
                                direction: b.v.TopRight,
                                show: n.state.showError || n.state.showSuccess
                            }, s.createElement(b.Xa, {
                                padding: 1
                            }, n.state.showSuccess ? s.createElement(b.W, {
                                color: b.O.Link
                            }, Object(l.d)("Title Saved!", "ClipsTitleEdit")) : s.createElement(b.W, {
                                color: b.O.Error
                            }, n.getErrorMessage()))))))))
                        }, n.renderForEdit = function() {
                            var e;
                            if ((n.props.startOffset || 0 === n.props.startOffset) && n.props.endOffset) return e = n.state.showError ? s.createElement(b.W, {
                                color: b.O.Error
                            }, n.getErrorMessage()) : 0 === n.state.title.length && n.props.broadcasterName ? s.createElement(b.W, {
                                color: b.O.Alt2
                            }, Object(l.d)("Clips with titles get more views. Help {broadcasterName} get discovered by adding a title.", {
                                broadcasterName: n.props.broadcasterName
                            }, "ClipsTitleEdit")) : s.createElement(b.W, {
                                color: b.O.Alt2
                            }, n.getRemainingCharacterText()), s.createElement(b.Xa, null, s.createElement(b.Xa, {
                                fullWidth: !0
                            }, s.createElement(b.Ra, {
                                id: _.TITLE_INPUT,
                                "data-test-selector": _.TITLE_INPUT,
                                type: b.Ta.Text,
                                value: n.state.title,
                                onChange: n.handleTitleEdit,
                                onKeyDown: n.handleKeyDown,
                                placeholder: Object(l.d)("Add a title (required)", "ClipsTitleEdit"),
                                size: b.Sa.Large,
                                autoFocus: !0
                            })), s.createElement(b.Xa, {
                                display: b.X.Flex,
                                justifyContent: b.Wa.Between,
                                alignItems: b.f.Center,
                                padding: {
                                    top: 1
                                }
                            }, e, s.createElement(b.Xa, {
                                display: b.X.Flex
                            }, s.createElement(b.Xa, {
                                padding: {
                                    left: 1
                                }
                            }, s.createElement(T, {
                                clipId: n.props.clipId,
                                clipBroadcasterId: n.props.clipBroadcasterId,
                                isSubmitted: n.state.showSuccess,
                                title: n.state.title,
                                slug: n.props.clipSlug,
                                startOffset: n.props.startOffset,
                                endOffset: n.props.endOffset,
                                onError: n.onPublishClipError
                            })))))
                        }, n.renderSave = function() {
                            return s.createElement(b.z, {
                                "data-test-selector": _.TITLE_SAVE,
                                disabled: !n.canSaveEditedTitle(),
                                onClick: n.editClipTitle
                            }, Object(l.d)("Save", "ClipsTitleEdit"))
                        }, n.onPublishClipError = function(e) {
                            n.setState({
                                showSuccess: !1,
                                showError: !0,
                                error: n.errorMessageToError(e)
                            })
                        }, n.getRemainingCharacterText = function() {
                            return Object(l.d)("{characterCount, number} remaining", {
                                characterCount: C - n.state.title.length
                            }, "ClipsTitleEdit")
                        }, n.onSuccess = function() {
                            n.props.onSuccess && n.props.onSuccess(), n.setState({
                                showSuccess: !0,
                                showError: !1,
                                error: null
                            }), setTimeout(function() {
                                n.setState({
                                    showSuccess: !1
                                })
                            }, 1500)
                        }, n.dismissMessage = function() {
                            n.setState({
                                showError: !1,
                                showSuccess: !1
                            })
                        }, n.handleTitleEdit = function(e) {
                            var t = e.currentTarget.value.slice(0, C);
                            n.setState({
                                title: t,
                                showError: !1,
                                showSuccess: !1
                            })
                        }, n.editClipTitle = function() {
                            return o.__awaiter(n, void 0, void 0, function() {
                                var e, t;
                                return o.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            if ("" === this.state.title.trim()) return this.setState({
                                                showError: !0,
                                                error: g.emptySubmission
                                            }), [2];
                                            n.label = 1;
                                        case 1:
                                            return n.trys.push([1, 3, , 4]), [4, this.props.editTitle(Object(u.a)({
                                                title: this.state.title.trim(),
                                                slug: this.props.clipSlug
                                            }))];
                                        case 2:
                                            return (e = n.sent()).data.updateClip && e.data.updateClip.error ? (this.setState({
                                                showError: !0,
                                                error: this.errorMessageToError(e.data.updateClip.error.message)
                                            }), [2]) : (this.props.clipBroadcasterId && this.props.clipId && this.props.clipTitle && m(Number(this.props.clipBroadcasterId), this.props.clipId, this.props.clipSlug, this.props.clipTitle, this.props.location), this.onSuccess(), [3, 4]);
                                        case 3:
                                            return t = n.sent(), this.setState({
                                                showError: !0,
                                                error: this.errorMessageToError(t.message)
                                            }), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, n.canSaveEditedTitle = function() {
                            return n.props.clipTitle !== n.state.title.trim()
                        }, n.handleKeyDown = function(e) {
                            switch (e.keyCode) {
                                case c.a.Enter:
                                    return void(n.props.location === p.PageviewLocation.ClipsEditing ? n.setState({
                                        showSuccess: !0
                                    }) : n.canSaveEditedTitle() && n.editClipTitle());
                                default:
                                    return
                            }
                        }, n.state = {
                            title: t.clipTitle ? t.clipTitle.trim() : "",
                            showError: !1,
                            showSuccess: !1,
                            error: null
                        }, n
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        return this.props.location === p.PageviewLocation.MyClipsManager ? this.renderForManager() : this.props.location === p.PageviewLocation.ClipsEditing ? this.renderForEdit() : this.renderForClipsViewing()
                    }, t.prototype.getErrorMessage = function() {
                        switch (this.state.error) {
                            case g.channelViolation:
                                return Object(l.d)("Uh-oh. Check for inappropriate language and try again!", "ClipsTitleEdit");
                            case g.emptySubmission:
                                return Object(l.d)("Please add a title.", "ClipsTitleEdit");
                            default:
                                return Object(l.d)("Whoops. Something went wrong.", "ClipsTitleEdit")
                        }
                    }, t.prototype.errorMessageToError = function(e) {
                        return null === e ? g.unknown : e.includes("403:") || e.toLowerCase() === i.InvalidTitle.toLowerCase() || e.toLowerCase() === r.InvalidTitle.toLowerCase() ? g.channelViolation : e === g.emptySubmission ? g.emptySubmission : g.unknown
                    }, t
                }(s.Component),
                R = Object(d.a)(N, {
                    name: "editTitle"
                })(O);
            n.d(t, !1, function() {
                return _
            }), n.d(t, "b", function() {
                return g
            }), n.d(t, !1, function() {
                return O
            }), n.d(t, "a", function() {
                return R
            })
        },
        X7Ac: function(e, t, n) {
            "use strict";
            var i = n("wbMx");
            n.d(t, "a", function() {
                return i.a
            }), n.d(t, "b", function() {
                return i.b
            })
        },
        XKWF: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            }), n.d(t, "b", function() {
                return a
            }), n.d(t, "c", function() {
                return o
            });
            var i, r = n("vRsq");

            function a(e) {
                switch (e.toUpperCase()) {
                    case i.Popular:
                        return i.Popular;
                    case i.Newest:
                        return i.Newest;
                    default:
                        return null
                }
            }

            function o(e) {
                switch (e) {
                    case r.f.Newest:
                        return i.Newest;
                    case r.f.Popular:
                        return i.Popular;
                    default:
                        return e
                }
            }! function(e) {
                e.Popular = "VIEWS", e.Newest = "TIME"
            }(i || (i = {}))
        },
        XmgI: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            }), n.d(t, "f", function() {
                return s
            }), n.d(t, "e", function() {
                return l
            }), n.d(t, "b", function() {
                return d
            }), n.d(t, "c", function() {
                return c
            }), n.d(t, "d", function() {
                return u
            });
            var i = n("5zXJ"),
                r = n("RcPG"),
                a = {
                    indexedActions: {},
                    orderedActions: []
                },
                o = /^((?:[A-Za-z0-9]+)(?:[A-Za-z]))([\d]+)$/;

            function s(e, t, n) {
                void 0 === n && (n = !1);
                var i = [],
                    a = e.split(/\s+/);
                return a.forEach(function(e, o) {
                    var s = l(e, t, n);
                    if (s) i.push(s);
                    else {
                        var d = i.length && i[i.length - 1],
                            c = "";
                        if (o < a.length - 1 && (c = " "), d && d.type === r.a.Text) d.content += e + c;
                        else {
                            var u = "";
                            o && (u = " "), i.push({
                                type: r.a.Text,
                                content: u + e + c
                            })
                        }
                    }
                }), i
            }

            function l(e, t, n) {
                void 0 === n && (n = !1);
                var a = e.match(o);
                if (!a) return null;
                var s = a[1].toLowerCase(),
                    l = Number(a[2]),
                    d = t.indexedActions[s];
                if (d && (d.type !== i.f || n)) {
                    var c = d.orderedTiers.find(function(e) {
                        return e.bits <= l
                    });
                    if (!c && l && (c = d.orderedTiers[0]), c) return {
                        type: r.a.Emote,
                        content: {
                            images: u(c),
                            alt: d.prefix,
                            cheerAmount: l,
                            cheerColor: c.color
                        }
                    }
                }
                return null
            }

            function d(e, t) {
                var n = function(e) {
                        var t = new Map;
                        return e.orderedActions.forEach(function(e) {
                            e.campaign && t.set(e.prefix, e.campaign)
                        }), t
                    }(t),
                    r = new Map;
                e.forEach(function(e, t) {
                    if (e.alt && n.has(e.alt))
                        if (r.has(e.alt)) {
                            (i = r.get(e.alt)) && (i.total += e.cheerAmount || 0, i.lastAppearance = t)
                        } else {
                            var i = {
                                total: e.cheerAmount || 0,
                                lastAppearance: t,
                                campaign: n.get(e.alt)
                            };
                            r.set(e.alt, i)
                        }
                });
                var a = 1;
                return r.forEach(function(n) {
                    var r = 0;
                    n.campaign.thresholds.forEach(function(e) {
                        n.total >= e.minimumBits && (r = e.matchedPercent)
                    });
                    var o = Math.trunc(n.total * r);
                    if (o > 0) {
                        var s = l(i.t + o, t, !0);
                        s && e.splice(n.lastAppearance + a++, 0, s.content)
                    }
                }), e
            }

            function c(e, t) {
                return s(e, t, !0).reduce(function(e, t) {
                    return t.type === r.a.Emote && e.push(t.content), e
                }, []).some(function(e) {
                    var n = t.orderedActions.find(function(t) {
                        return !!e.alt && e.alt === t.prefix
                    });
                    return !!n && n.type === i.f
                })
            }

            function u(e, t, n) {
                var i, r;
                void 0 === n && (n = !0);
                var a = n ? "animated" : "static";
                return t ? {
                    themed: !0,
                    dark: (i = {}, i[t + "x"] = e.indexedImages.DARK[a].get(t), i),
                    light: (r = {}, r[t + "x"] = e.indexedImages.LIGHT[a].get(t), r)
                } : {
                    themed: !0,
                    dark: {
                        "1x": e.indexedImages.DARK[a].get(1),
                        "1.5x": e.indexedImages.DARK[a].get(1.5),
                        "2x": e.indexedImages.DARK[a].get(2),
                        "3x": e.indexedImages.DARK[a].get(3),
                        "4x": e.indexedImages.DARK[a].get(4)
                    },
                    light: {
                        "1x": e.indexedImages.LIGHT[a].get(1),
                        "1.5x": e.indexedImages.LIGHT[a].get(1.5),
                        "2x": e.indexedImages.LIGHT[a].get(2),
                        "3x": e.indexedImages.LIGHT[a].get(3),
                        "4x": e.indexedImages.LIGHT[a].get(4)
                    }
                }
            }
        },
        YUvD: function(e, t, n) {
            "use strict";
            var i = n("/MKj"),
                r = n("ClZk");

            function a(e) {
                return Object(i.connect)(function(t) {
                    return {
                        gdpr: {
                            status: t.gdpr.status,
                            blockConsentRequiredContent: Object(r.c)(t, e)
                        }
                    }
                }, null, null, {
                    areStatesEqual: function(e, t) {
                        return e.gdpr === t.gdpr
                    }
                })
            }
            n.d(t, "a", function() {
                return a
            }), n.d(t, !1, function() {})
        },
        ZBeb: function(e, t, n) {
            var i = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "FollowButton_FollowUser"
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
                                    value: "FollowUserInput"
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
                                value: "followUser"
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
                                        value: "follow"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "disableNotifications"
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
                                                    kind: "FragmentSpread",
                                                    name: {
                                                        kind: "Name",
                                                        value: "followButtonFragment"
                                                    },
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
                    end: 218
                }
            };
            i.loc.source = {
                body: '#import "twilight/common/queries/follow-button-fragment.gql"\nmutation FollowButton_FollowUser($input: FollowUserInput!) {\nfollowUser(input: $input) {\nfollow {\ndisableNotifications\nuser {\n...followButtonFragment\n}\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var r = {};
            i.definitions = i.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !r[t] && (r[t] = !0, !0)
                })
            }(n("V94A").definitions)), e.exports = i
        },
        ZEQw: function(e, t, n) {
            "use strict";
            n.d(t, "c", function() {
                return i
            }), n.d(t, "d", function() {
                return r
            }), n.d(t, "e", function() {
                return a
            }), n.d(t, "b", function() {
                return o
            }), n.d(t, "a", function() {
                return s
            });
            var i = "subscribe_to_channel",
                r = "turbo",
                a = "visit_url",
                o = "none",
                s = "broadcaster"
        },
        ZtEv: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return i
            }), n.d(t, "c", function() {
                return r
            }), n.d(t, "e", function() {
                return a
            }), n.d(t, "a", function() {
                return o
            });
            var i, r, a, o, s = n("0Log");
            n.d(t, "d", function() {
                    return s.ModerationActions
                }),
                function(e) {
                    e[e.Message = 0] = "Message", e[e.ExtensionMessage = 1] = "ExtensionMessage", e[e.Moderation = 2] = "Moderation", e[e.ModerationAction = 3] = "ModerationAction", e[e.TargetedModerationAction = 4] = "TargetedModerationAction", e[e.AutoMod = 5] = "AutoMod", e[e.SubscriberOnlyMode = 6] = "SubscriberOnlyMode", e[e.FollowerOnlyMode = 7] = "FollowerOnlyMode", e[e.SlowMode = 8] = "SlowMode", e[e.EmoteOnlyMode = 9] = "EmoteOnlyMode", e[e.R9KMode = 10] = "R9KMode", e[e.Connected = 11] = "Connected", e[e.Disconnected = 12] = "Disconnected", e[e.Reconnect = 13] = "Reconnect", e[e.Hosting = 14] = "Hosting", e[e.Unhost = 15] = "Unhost", e[e.Hosted = 16] = "Hosted", e[e.Subscription = 17] = "Subscription", e[e.Resubscription = 18] = "Resubscription", e[e.GiftPaidUpgrade = 19] = "GiftPaidUpgrade", e[e.AnonGiftPaidUpgrade = 20] = "AnonGiftPaidUpgrade", e[e.SubGift = 21] = "SubGift", e[e.AnonSubGift = 22] = "AnonSubGift", e[e.Clear = 23] = "Clear", e[e.RoomMods = 24] = "RoomMods", e[e.RoomState = 25] = "RoomState", e[e.Raid = 26] = "Raid", e[e.Unraid = 27] = "Unraid", e[e.Ritual = 28] = "Ritual", e[e.Notice = 29] = "Notice", e[e.Info = 30] = "Info", e[e.BadgesUpdated = 31] = "BadgesUpdated", e[e.Purchase = 32] = "Purchase", e[e.BitsCharity = 33] = "BitsCharity", e[e.CrateGift = 34] = "CrateGift", e[e.RewardGift = 35] = "RewardGift", e[e.SubMysteryGift = 36] = "SubMysteryGift", e[e.AnonSubMysteryGift = 37] = "AnonSubMysteryGift"
                }(i || (i = {})),
                function(e) {
                    e[e.Post = 0] = "Post", e[e.Action = 1] = "Action", e[e.PostWithMention = 2] = "PostWithMention"
                }(r || (r = {})),
                function(e) {
                    e[e.Ban = 0] = "Ban", e[e.Timeout = 1] = "Timeout", e[e.Delete = 2] = "Delete"
                }(a || (a = {})),
                function(e) {
                    e[e.MessageRejectedPrompt = 0] = "MessageRejectedPrompt", e[e.CheerMessageRejectedPrompt = 1] = "CheerMessageRejectedPrompt", e[e.MessageRejected = 2] = "MessageRejected", e[e.MessageAllowed = 3] = "MessageAllowed", e[e.MessageDenied = 4] = "MessageDenied", e[e.CheerMessageDenied = 5] = "CheerMessageDenied", e[e.CheerMessageTimeout = 6] = "CheerMessageTimeout", e[e.MessageModApproved = 7] = "MessageModApproved", e[e.MessageModDenied = 8] = "MessageModDenied"
                }(o || (o = {}))
        },
        a4lT: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ClipsTitle"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "slug"
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
                                value: "clip"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "slug"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "slug"
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
                                        value: "title"
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
                    end: 63
                }
            };
            n.loc.source = {
                body: "query ClipsTitle($slug: ID!) {\nclip(slug: $slug) {\nid\ntitle\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        b5C3: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            });
            var i = n("q1tI"),
                r = n("vHGB"),
                a = function(e) {
                    var t = e.badgesToRender,
                        n = e.badgeSets;
                    if (!t) return null;
                    var a = [];
                    ! function(e) {
                        return Array.isArray(e)
                    }(t) ? function(e) {
                        return !Array.isArray(e)
                    }(t) && (a = Object.keys(t).map(function(e) {
                        var a = t[e],
                            o = n.getBadge(e, a);
                        return null === o ? null : i.createElement(r.a, {
                            key: o.setID + "/" + o.version,
                            badge: o
                        })
                    })) : a = t.map(function(e) {
                        var t = n.getBadge(e.setID, e.version);
                        return null === t ? null : i.createElement(r.a, {
                            key: t.setID + "/" + t.version,
                            badge: t
                        })
                    });
                    var o = a.filter(function(e) {
                        return null !== e
                    });
                    return i.createElement("span", null, o)
                };
            a.displayName = "BadgeList"
        },
        bTcf: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "VideoShareBox_CollectionTrackingMeta"
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
                                        value: "login"
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
                                                value: "isPartner"
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
                    end: 117
                }
            };
            n.loc.source = {
                body: "query VideoShareBox_CollectionTrackingMeta($creatorID: ID!) {\nuser(id: $creatorID) {\nid\nlogin\nroles {\nisPartner\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        bq0i: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return l
            });
            var i, r = n("mrSG"),
                a = n("q1tI"),
                o = n("f00E"),
                s = n("Ue10");
            ! function(e) {
                e.BalloonInsideClickDetector = "balloon-inside-click-detector", e.MouseEnterDetector = "toggle-balloon-wrapper__mouse-enter-detector"
            }(i || (i = {}));
            var l = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        showBalloon: !!t.props.openByDefault,
                        hasInteracted: !!t.props.openByDefault
                    }, t.toggleBalloonId = Object(o.a)(), t.handleButtonClick = function(e) {
                        t.props.preventDefault && e.preventDefault(), t.props.stopPropagation && e.stopPropagation(), t.setState(function(e) {
                            return {
                                showBalloon: !e.showBalloon,
                                hasInteracted: !0
                            }
                        }, function() {
                            t.props.onToggle && t.props.onToggle(!t.state.showBalloon)
                        })
                    }, t.handleGlobalClick = function(e) {
                        e.target.matches('[data-toggle-balloon-id="' + t.toggleBalloonId + '"] *') || t.hideBalloon()
                    }, t.handleInsideBalloonClick = function() {
                        t.hideBalloon()
                    }, t.handleMouseEnter = function() {
                        t.state.hasInteracted || t.setState({
                            hasInteracted: !0
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.openByDefault && document.addEventListener("click", this.handleGlobalClick, !0)
                }, t.prototype.componentWillUpdate = function(e, t) {
                    this.state.showBalloon !== t.showBalloon && (t.showBalloon ? document.addEventListener("click", this.handleGlobalClick, !0) : document.removeEventListener("click", this.handleGlobalClick, !0))
                }, t.prototype.componentWillUnmount = function() {
                    document.removeEventListener("click", this.handleGlobalClick, !0)
                }, t.prototype.render = function() {
                    var e = a.Children.toArray(this.props.children);
                    if (2 !== e.length) throw new Error("ToggleBalloonWrapper should only be given two children: a clickable and a Balloon");
                    var t = e[0],
                        n = e[1],
                        o = a.cloneElement(t, {
                            onClick: this.handleButtonClick
                        }),
                        l = null;
                    (this.state.hasInteracted || this.props.alwaysMountBalloonContent) && (l = a.cloneElement(n, {
                        show: this.state.showBalloon
                    }), this.props.hideBalloonOnInsideClick && (l = a.createElement("div", {
                        "data-test-selector": i.BalloonInsideClickDetector,
                        onClick: this.handleInsideBalloonClick
                    }, l)));
                    var d = o;
                    return this.props.tooltipProps && (d = a.createElement(s.Yb, r.__assign({}, this.props.tooltipProps), o)), a.createElement(s.Xa, {
                        "data-toggle-balloon-id": this.toggleBalloonId,
                        display: this.props.display,
                        position: s.jb.Relative
                    }, a.createElement("div", {
                        style: {
                            display: "inherit"
                        },
                        onMouseEnter: this.handleMouseEnter,
                        "data-test-selector": i.MouseEnterDetector
                    }, d), l)
                }, t.prototype.toggleBalloon = function(e) {
                    void 0 === e && (e = !this.state.showBalloon), this.setState({
                        showBalloon: e,
                        hasInteracted: !0
                    })
                }, t.prototype.hideBalloon = function() {
                    var e = this;
                    this.setState({
                        showBalloon: !1
                    }, function() {
                        e.props.onToggle && e.props.onToggle(!0)
                    })
                }, t
            }(a.Component)
        },
        cMjZ: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            });
            var i = n("o4DC");

            function r(e) {
                return e && Object(i.c)(e) || ""
            }
        },
        cys1: function(e, t, n) {
            "use strict";
            var i = n("q1tI"),
                r = n("/7QA"),
                a = n("gvGA"),
                o = n("5zf8"),
                s = n("4rCz"),
                l = n("x0+1"),
                d = n("j0ar"),
                c = function(e) {
                    var t, n = e.emote,
                        r = n.alt || "";
                    return n.cheerAmount && (r += " " + n.cheerAmount.toString(), t = i.createElement("strong", {
                        className: "chat-line__message--cheer-amount",
                        style: {
                            color: n.cheerColor
                        }
                    }, n.cheerAmount)), i.createElement(d.a, {
                        alt: r,
                        cheerText: t,
                        className: "chat-line__message--emote",
                        srcKey: "1x",
                        srcSet: n.images
                    })
                };
            c.displayName = "Emote";
            var u, p = function(e) {
                    var t = e.displayText,
                        n = e.url;
                    return i.createElement("a", {
                        className: "link-fragment",
                        href: n,
                        target: "_blank",
                        rel: "noreferrer noopener"
                    }, t)
                },
                m = n("TSYQ"),
                h = n("RcPG"),
                f = (n("VN3V"), function(e) {
                    var t, n = e.content,
                        r = e.highlightType,
                        a = m("text-fragment", ((t = {})["text-fragment--moderated-highlight"] = r === h.a.ModeratedText, t));
                    return i.createElement("span", {
                        className: a,
                        "data-a-target": "chat-message-text"
                    }, n)
                }),
                g = n("mrSG"),
                v = n("yR8l"),
                E = n("+GjP"),
                b = n("2xye"),
                k = n("Ue10"),
                y = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            hasImageLoadingError: !1
                        }, t.handleImageError = function() {
                            t.setState({
                                hasImageLoadingError: !0
                            })
                        }, t
                    }
                    return g.__extends(t, e), t.prototype.componentWillReceiveProps = function() {
                        this.setState({
                            hasImageLoadingError: !1
                        })
                    }, t.prototype.render = function() {
                        var e = r.a.defaultStreamPreviewURL;
                        return !this.state.hasImageLoadingError && this.props.imageURL && (e = this.props.imageURL), i.createElement(k.I, {
                            aspect: k.p.Aspect16x9,
                            alt: this.props.altText,
                            src: e,
                            onError: this.handleImageError
                        })
                    }, t
                }(i.Component),
                S = (n("Epr8"), "https://static-cdn.jtvnw.net/emoticons/v1/58765/2.0"),
                T = {
                    ERROR: "chat-card-error",
                    TITLE: "chat-card-title",
                    DESCRIPTION: "chat-card-description"
                },
                N = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderErrorCard = function() {
                            var e = i.createElement("img", {
                                "data-test-selector": T.ERROR,
                                src: S,
                                className: "chat-card__error-img"
                            });
                            return t.renderCardContent(e, t.props.error)
                        }, t.renderCardContent = function(e, t) {
                            var n, r;
                            return t ? (n = i.createElement(k.W, {
                                type: k.Vb.Span,
                                fontSize: k.Ca.Size5,
                                "data-test-selector": T.TITLE,
                                title: t.title
                            }, t.title), r = i.createElement(k.W, {
                                type: k.Vb.Span,
                                fontSize: k.Ca.Size6,
                                color: k.O.Alt2,
                                "data-test-selector": T.DESCRIPTION
                            }, t.description)) : (e = i.createElement(k.ib, {
                                overlay: !0
                            }), n = i.createElement(k.ib, {
                                width: 180
                            }), r = i.createElement(k.ib, {
                                width: 120
                            })), i.createElement(k.Eb, {
                                background: k.r.Base,
                                display: k.X.Flex,
                                flexWrap: k.Ba.NoWrap,
                                padding: .5
                            }, i.createElement(k.Eb, {
                                className: "chat-card__preview-img",
                                background: k.r.Alt2,
                                display: k.X.Flex,
                                alignItems: k.f.Center,
                                justifyContent: k.Wa.Center,
                                flexShrink: 0
                            }, e), i.createElement(k.Xa, {
                                display: k.X.Flex,
                                alignItems: k.f.Center,
                                overflow: k.cb.Hidden
                            }, i.createElement(k.Xa, {
                                padding: {
                                    left: 1
                                },
                                fullWidth: !0
                            }, i.createElement(k.Xa, {
                                className: "chat-card__title",
                                ellipsis: !0
                            }, n), i.createElement(k.Xa, {
                                ellipsis: !0
                            }, r))))
                        }, t
                    }
                    return g.__extends(t, e), t.prototype.render = function() {
                        var e;
                        if (this.props.error) e = this.renderErrorCard();
                        else if (this.props.data) {
                            var t = Object(E.e)(this.props.data.contentURL, {
                                    tt_medium: b.PageviewMedium.Chat,
                                    tt_content: b.PageviewContent.ChatCard
                                }),
                                n = i.createElement(y, {
                                    altText: this.props.data.title,
                                    imageURL: this.props.data.previewImageURL
                                });
                            e = i.createElement(k.U, {
                                className: "chat-card__link",
                                to: t,
                                targetBlank: !0
                            }, this.renderCardContent(n, {
                                title: this.props.data.title,
                                description: this.props.data.description
                            }))
                        } else e = this.renderCardContent();
                        return i.createElement(k.Eb, {
                            elevation: 1,
                            margin: {
                                top: .5
                            }
                        }, e)
                    }, t
                }(i.Component),
                _ = n("SceP"),
                C = {
                    isTimedOut: !1
                },
                O = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = C, t.timeoutID = null, t
                    }
                    return g.__extends(t, e), t.prototype.componentDidMount = function() {
                        var e = this;
                        this.props.data.clip || (this.timeoutID = setTimeout(function() {
                            e.setState({
                                isTimedOut: !0
                            })
                        }, 5e3))
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        !this.props.data.clip && e.data.clip && (this.timeoutID && (clearTimeout(this.timeoutID), this.timeoutID = null), this.setState({
                            isTimedOut: !1
                        }))
                    }, t.prototype.render = function() {
                        var e = this.props.data,
                            t = e.clip,
                            n = e.error,
                            a = e.loading;
                        return n || this.state.isTimedOut ? i.createElement(N, {
                            error: {
                                title: Object(r.d)("Something went wrong", "ClipsChatCard"),
                                description: Object(r.d)("We couldn't find that Clip", "ClipsChatCard")
                            }
                        }) : a || !t ? i.createElement(N, null) : i.createElement(N, {
                            data: {
                                title: t.title || (t.broadcaster && t.broadcaster.displayName ? Object(r.d)("Clip of {broadcaster}", {
                                    broadcaster: t.broadcaster.displayName
                                }, "ClipsChatCard") : ""),
                                description: t.curator && t.curator.displayName ? Object(r.d)("Clipped by {curator}", {
                                    curator: t.curator.displayName
                                }, "ClipsChatCard") : "",
                                previewImageURL: t.thumbnailURL,
                                contentURL: t.url
                            }
                        })
                    }, t
                }(i.Component),
                R = Object(v.a)(_, {
                    options: function(e) {
                        return {
                            variables: {
                                slug: e.slug
                            },
                            notifyOnNetworkStatusChange: !0,
                            fetchPolicy: e.forceNetworkRequest ? "cache-first" : "cache-only"
                        }
                    }
                })(O),
                I = n("gTu3"),
                D = (n("lpj/"), (u = {})[I.a.Default] = "", u[I.a.Recipient] = "mention-fragment--recipient", u[I.a.Sender] = "mention-fragment--sender", u),
                A = function(e) {
                    var t = e.isAtMention ? "@" : "",
                        n = m("mention-fragment", D[e.currentUserMentionRelation]);
                    return i.createElement("span", {
                        className: n,
                        "data-a-target": "chat-message-mention"
                    }, "" + t + e.recipient)
                };
            A.displayName = "MentionFragment";
            var w = n("QVaV"),
                L = n("sU0Q"),
                M = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return g.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.data,
                            t = e.video,
                            n = e.error,
                            a = e.loading;
                        if (n || t && !t.owner) return i.createElement(N, {
                            error: {
                                title: Object(r.d)("Something went wrong", "VideoChatCard"),
                                description: Object(r.d)("We couldn't find that video", "VideoChatCard")
                            }
                        });
                        if (a || !t) return i.createElement(N, null);
                        var o = i.createElement(k.W, null, Object(r.c)(new Date(t.publishedAt), "medium"), i.createElement("span", null, " · "), Object(w.a)(t.owner.login, t.owner.displayName));
                        return i.createElement(N, {
                            data: {
                                title: t.title,
                                description: o,
                                previewImageURL: t.previewThumbnailURL,
                                contentURL: this.props.url
                            }
                        })
                    }, t
                }(i.Component),
                F = Object(v.a)(L, {
                    options: function(e) {
                        return {
                            variables: {
                                videoID: e.id
                            },
                            notifyOnNetworkStatusChange: !0,
                            fetchPolicy: "cache-first"
                        }
                    }
                })(M),
                U = n("ZtEv");

            function P(e, t, n) {
                void 0 === n && (n = !1);
                var r = t.content,
                    a = r.displayText,
                    o = r.url;
                return n ? i.createElement(f, {
                    key: "message-span-" + e,
                    content: a
                }) : i.createElement(p, {
                    key: e,
                    displayText: a,
                    url: o
                })
            }

            function B(e, t) {
                void 0 === t && (t = {});
                var n = null,
                    r = e.reduce(function(r, o, s) {
                        var l = [];
                        switch (s > 0 && e[s - 1].type !== h.a.Text && o.type !== h.a.Text && l.push(" "), o.type) {
                            case h.a.Text:
                            case h.a.ModeratedText:
                                var d = o.content,
                                    u = o.type;
                                l.push(i.createElement(f, {
                                    key: s,
                                    content: d,
                                    highlightType: u
                                }));
                                break;
                            case h.a.CurrentUserHighlight:
                                l.push(i.createElement(A, {
                                    isAtMention: !1,
                                    currentUserMentionRelation: I.a.Recipient,
                                    recipient: o.content,
                                    key: s
                                }));
                                break;
                            case h.a.Mention:
                                l.push(i.createElement(A, {
                                    isAtMention: !0,
                                    currentUserMentionRelation: o.content.currentUserMentionRelation,
                                    recipient: o.content.recipient,
                                    key: s
                                }));
                                break;
                            case h.a.Emote:
                                l.push(i.createElement(c, {
                                    key: s,
                                    emote: o.content
                                }));
                                break;
                            case h.a.Link:
                                l.push(P(s, o, t.disableLinks));
                                break;
                            case h.a.ClipLink:
                                n || (n = i.createElement(a.a, {
                                    key: s
                                }, i.createElement(R, {
                                    slug: o.content.slug,
                                    forceNetworkRequest: t.forceClipsNetworkRequest
                                }))), l.push(P(s, o, t.disableLinks));
                                break;
                            case h.a.VideoLink:
                                n || (n = i.createElement(F, {
                                    key: s,
                                    id: o.content.id,
                                    url: o.content.url
                                })), l.push(P(s, o, t.disableLinks))
                        }
                        return r.concat(l)
                    }, []);
                return n && (r = r.concat(n)), r
            }

            function x(e) {
                if (e.moderationType === U.e.Delete) {
                    var t = e,
                        n = t.userLogin,
                        a = t.body;
                    return i.createElement(l.a, {
                        targetLogin: n,
                        messageBody: a
                    })
                }
                if ((e = e).moderationType === U.e.Ban) return e.reason ? i.createElement("span", {
                    className: "chat-line__moderation--ban-with-reason"
                }, Object(r.d)("{userLogin} has been banned. Reason: {reason}", {
                    userLogin: e.userLogin,
                    reason: e.reason
                }, "ChatLine")) : i.createElement("span", {
                    className: "chat-line__moderation--ban"
                }, Object(r.d)("{userLogin} is now banned from this channel.", {
                    userLogin: e.userLogin
                }, "ChatLine"));
                if (e.reason && e.duration) {
                    var o = Object(r.d)("{userLogin} has been timed out for {duration} seconds. Reason: {reason}", {
                        duration: e.duration,
                        reason: e.reason,
                        userLogin: e.userLogin
                    }, "ChatLine");
                    return i.createElement("span", {
                        className: "chat-line__moderation--timeout-with-reason"
                    }, o)
                }
                return e.duration ? i.createElement("span", {
                    className: "chat-line__moderation--timeout"
                }, Object(r.d)("{userLogin} has been timed out for {duration} seconds.", {
                    userLogin: e.userLogin,
                    duration: e.duration
                }, "ChatLine")) : void 0
            }

            function V(e) {
                var t = e.daysLeft;
                0 === t && (t = e.hoursLeft);
                var n = {
                    bitsTotal: i.createElement("strong", null, Object(s.f)(e.total, {
                        style: "currency",
                        currency: "USD"
                    })),
                    charityName: i.createElement("strong", null, e.charityName),
                    learnMoreURL: i.createElement("a", {
                        href: e.learnMore,
                        target: "_blank"
                    }, e.learnMore),
                    hashtag: i.createElement("strong", null, e.hashtag),
                    timeRemaining: Object(s.f)(t)
                };
                return i.createElement("span", null, 0 === e.daysLeft ? function(e) {
                    return Object(r.d)("{bitsTotal} total raised so far for {charityName}! {timeRemaining} more hours to show support. Cheer and include {hashtag}. Learn More at {learnMoreURL}", {
                        bitsTotal: e.bitsTotal,
                        charityName: e.charityName,
                        timeRemaining: e.timeRemaining,
                        hashtag: e.hashtag,
                        learnMoreURL: e.learnMoreURL
                    }, "ChatLine")
                }(n) : function(e) {
                    return Object(r.d)("{bitsTotal} total raised so far for {charityName}! {timeRemaining} more days to show support. Cheer and include {hashtag}. Learn More at {learnMoreURL}", {
                        bitsTotal: e.bitsTotal,
                        charityName: e.charityName,
                        timeRemaining: e.timeRemaining,
                        hashtag: e.hashtag,
                        learnMoreURL: e.learnMoreURL
                    }, "ChatLine")
                }(n))
            }

            function j(e) {
                var t = e.enabled ? Object(r.d)("This room is now in slow mode. You may send messages every {length} seconds.", {
                    length: e.length
                }, "ChatLine") : Object(r.d)("This room is no longer in slow mode.", "ChatLine");
                return i.createElement("span", null, t)
            }

            function W(e) {
                var t;
                if (e.length > 0) {
                    var n = e.join(", ");
                    t = Object(r.d)("The moderators of this channel are: {moderatorList}", {
                        moderatorList: n
                    }, "ChatLine")
                } else t = Object(r.d)("There are no moderators of this channel.", "ChatLine");
                return i.createElement("span", null, t)
            }

            function G(e) {
                if (e.enabled) {
                    var t = 0 === e.length ? Object(r.d)("This room is in followers-only mode.", "ChatLine") : Object(r.d)("This room is now in {length} followers-only mode.", {
                        length: Object(o.b)(60 * e.length)
                    }, "ChatLine");
                    return i.createElement("span", null, t)
                }
                return i.createElement("span", null, Object(r.d)("This room is no longer in followers-only mode.", "ChatLine"))
            }

            function H(e) {
                return e.enabled ? i.createElement("span", null, Object(r.d)("This room is now in emote-only mode.", "ChatLine")) : i.createElement("span", null, Object(r.d)("This room is no longer in emote-only mode.", "ChatLine"))
            }

            function z(e) {
                var t = e.enabled ? Object(r.d)("This room is now in subscriber-only mode.", "ChatLine") : Object(r.d)("This room is no longer in subscriber-only mode.", "ChatLine");
                return i.createElement("span", null, t)
            }

            function X(e) {
                return e.enabled ? i.createElement("span", null, Object(r.d)("r9k mode has been enabled for this room.", "ChatLine")) : i.createElement("span", null, Object(r.d)("r9k mode has been disabled for this room.", "ChatLine"))
            }

            function q(e) {
                return e.isAutohost ? Object(r.d)("{host} is now auto hosting you for up to {viewerCount, number} viewers.", {
                    host: e.hostingChannel,
                    viewerCount: e.viewerCount
                }, "ChatLine") : e.viewerCount <= 2 ? Object(r.d)("{host} is now hosting you.", {
                    host: e.hostingChannel
                }, "ChatLine") : Object(r.d)("{host} is now hosting you for up to {viewerCount, number} viewers.", {
                    host: e.hostingChannel,
                    viewerCount: e.viewerCount
                }, "ChatLine")
            }

            function Y(e) {
                var t = e.getHours() % 12;
                0 === t && (t = 12);
                var n = e.getMinutes(),
                    i = n.toString();
                return n < 10 && (i = "0" + i), t + ":" + i
            }

            function K(e) {
                return i.createElement("span", {
                    key: "timestamp",
                    className: "chat-line__timestamp",
                    "data-a-target": "chat-timestamp",
                    "data-test-selector": "chat-timestamp"
                }, Y(new Date(e)))
            }

            function Q(e) {
                return i.createElement("span", {
                    key: "timestamp",
                    className: "chat-line__timestamp",
                    "data-a-target": "chat-timestamp",
                    "data-test-selector": "chat-timestamp"
                }, function(e, t) {
                    void 0 === t && (t = {});
                    var n = r.p.intl.getLanguageCode() || "en";
                    return Intl.DateTimeFormat(n, t).format(e)
                }(new Date(e), {
                    hour: "numeric",
                    minute: "numeric"
                }))
            }
            n.d(t, "f", function() {
                return B
            }), n.d(t, "g", function() {
                return x
            }), n.d(t, "b", function() {
                return V
            }), n.d(t, "j", function() {
                return j
            }), n.d(t, "i", function() {
                return W
            }), n.d(t, "d", function() {
                return G
            }), n.d(t, "c", function() {
                return H
            }), n.d(t, "k", function() {
                return z
            }), n.d(t, "h", function() {
                return X
            }), n.d(t, "e", function() {
                return q
            }), n.d(t, "a", function() {
                return Y
            }), n.d(t, "l", function() {
                return K
            }), n.d(t, "m", function() {
                return Q
            })
        },
        dAHa: function(e, t, n) {
            "use strict";
            var i, r, a = n("mrSG"),
                o = n("q1tI"),
                s = n("/MKj"),
                l = n("fvjX"),
                d = n("/7QA"),
                c = n("yR8l"),
                u = n("BhFH"),
                p = n("iS14"),
                m = n("geRD"),
                h = n("f00E"),
                f = n("D7An"),
                g = n("DMoW"),
                v = n("2xye"),
                E = n("GnwI"),
                b = n("QVaV"),
                k = n("Ue10"),
                y = (n("MPK0"), "report-wizard-block"),
                S = "report-wizard-unblock",
                T = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            userBlocked: t.props.userBlocked || !1
                        }, t.renderBlock = function() {
                            return o.createElement(k.U, {
                                hoverUnderlineNone: !0,
                                onClick: t.handleBlock,
                                "data-test-selector": y
                            }, o.createElement(k.Xa, {
                                display: k.X.Flex,
                                alignItems: k.f.Center
                            }, o.createElement(k.sb, {
                                type: k.ub.Brand,
                                asset: k.tb.Ban
                            }), o.createElement(k.Xa, {
                                margin: {
                                    left: .5
                                }
                            }, Object(d.d)("Block {user}", {
                                user: t.displayName()
                            }, "ReportWizardBlockActions"))))
                        }, t.renderUnblock = function() {
                            return o.createElement(k.Xa, {
                                className: "reporting-wizard__block-actions",
                                display: k.X.Flex,
                                alignItems: k.f.Center
                            }, o.createElement(k.sb, {
                                type: k.ub.Success,
                                asset: k.tb.FollowCheck
                            }), o.createElement(k.Xa, {
                                margin: {
                                    right: 1
                                }
                            }, o.createElement(k.W, {
                                className: "block-user__success",
                                type: k.Vb.Span
                            }, Object(d.d)("{user} blocked", {
                                user: t.displayName()
                            }, "ReportWizardBlockActions"))), o.createElement(k.U, {
                                hoverUnderlineNone: !0,
                                onClick: t.handleUnblock,
                                "data-test-selector": S
                            }, o.createElement(k.Xa, {
                                margin: {
                                    left: .5
                                }
                            }, Object(d.d)("Unblock", "ReportWizardBlockActions"))))
                        }, t.handleBlock = function() {
                            return a.__awaiter(t, void 0, void 0, function() {
                                return a.__generator(this, function(e) {
                                    return this.props.onBlock(), this.setState({
                                        userBlocked: !0
                                    }), [2]
                                })
                            })
                        }, t.handleUnblock = function() {
                            t.props.onUnblock(), t.setState({
                                userBlocked: !1
                            })
                        }, t.displayName = function() {
                            var e = t.props.targetUser.displayName,
                                n = t.props.targetUser.login;
                            return e || (n || "")
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.state.userBlocked ? this.renderUnblock() : this.renderBlock(),
                            t = Object(b.a)(this.props.targetUser.login, this.props.targetUser.displayName, !0);
                        return o.createElement(k.Eb, {
                            borderTop: !0,
                            padding: {
                                y: 1
                            },
                            margin: {
                                top: 1
                            }
                        }, o.createElement(k.Xa, null, Object(d.d)("Would you like to block {user}?", {
                            user: t
                        }, "ReportWizardBlockActions")), o.createElement(k.Eb, {
                            color: k.O.Alt2,
                            margin: {
                                y: 1
                            }
                        }, o.createElement(k.ec, {
                            baseFontSize: k.Ca.Size6
                        }, o.createElement("p", null, Object(d.d)("Blocking {user} will:", {
                            user: t
                        }, "ReportWizardBlockActions")), o.createElement("ul", null, o.createElement("li", null, Object(d.d)("Prevent them from sending you whispers", "ReportWizardBlockActions")), o.createElement("li", null, Object(d.d)("Prevent them from hosting you", "ReportWizardBlockActions")), o.createElement("li", null, Object(d.d)("Prevent them from adding you as a friend", "ReportWizardBlockActions")), o.createElement("li", null, Object(d.d)("Filter their messages out of chats you don’t moderate", "ReportWizardBlockActions"))))), o.createElement(k.Xa, {
                            margin: {
                                top: 1
                            }
                        }, e))
                    }, t
                }(o.Component);
            ! function(e) {
                e.BitsViolation = "bits_violation", e.ChatBanEvasion = "chat_ban_evasion", e.Cheating = "cheating", e.Gore = "gore", e.Harassment = "harassment", e.Harm = "harm", e.HatefulConduct = "hateful_conduct", e.Impersonation = "impersonation", e.Miscategorized = "miscategorized", e.OffensiveUsername = "offensive_username", e.Other = "other", e.Porn = "porn", e.Prohibited = "prohibited", e.SelfHarm = "selfharm", e.SexualContent = "sexual_content", e.SexualViolence = "sexual_violence", e.Spam = "spam", e.TosBanEvasion = "tos_ban_evasion", e.Underaged = "underaged"
            }(i || (i = {})),
            function(e) {
                e.Link = "link", e.MultipleChoice = "multiple choice", e.Text = "text", e.Textarea = "textarea"
            }(r || (r = {}));
            var N, _ = {
                    generalFilter: function() {
                        return Object(d.d)("I don't think their content or behavior is allowed on Twitch", "ReportModalWizard")
                    },
                    me: function() {
                        return Object(d.d)("Me", "ReportModalWizard")
                    },
                    someoneElse: function() {
                        return Object(d.d)("Someone else", "ReportModalWizard")
                    },
                    sexuallyCoercive: function() {
                        return Object(d.d)("acting in a sexually coercive or inappropriate way", "ReportModalWizard")
                    },
                    abusiveViolence: function() {
                        return Object(d.d)("They're threatening violence or physical harm", "ReportModalWizard")
                    },
                    commitingViolence: function() {
                        return Object(d.d)("They're committing acts of violence or physical harm", "ReportModalWizard")
                    },
                    threatening: function() {
                        return Object(d.d)("threatening, harming, or endangering someone", "ReportModalWizard")
                    },
                    abusive: function() {
                        return Object(d.d)("being hateful, harassing, or abusive", "ReportModalWizard")
                    }
                },
                C = {
                    input_description: {
                        getTitle: function() {
                            return Object(d.d)("Could you provide more detail about this issue? You may include links to videos, clips, and content outside Twitch.", "ReportModalWizard")
                        },
                        value: "description",
                        type: r.Textarea,
                        required: !0
                    },
                    input_link: {
                        getTitle: function() {
                            return Object(d.d)("If possible, please provide a link to show us where the issue occurred. Links that do not lead to the original source of the content may not be usable as evidence.", "ReportModalWizard")
                        },
                        rows: 2,
                        value: "external links",
                        type: r.Textarea
                    },
                    input_usernames: {
                        getTitle: function() {
                            return Object(d.d)("If you know the usernames of any other Twitch accounts that may be owned by this person, please list them in this space.", "ReportModalWizard")
                        },
                        value: "other usernames",
                        rows: 2,
                        type: r.Textarea
                    },
                    input_connection: {
                        getTitle: function() {
                            return Object(d.d)("Please describe how you connected the offsite content to this Twitch account.", "ReportModalWizard")
                        },
                        value: "offsite content connection",
                        type: r.Textarea
                    },
                    input_comments: {
                        getTitle: function() {
                            return Object(d.d)("If you have any other comments you would like to add, please do so here.", "ReportModalWizard")
                        },
                        value: "comments",
                        type: r.Textarea
                    },
                    input_identifyOwner: {
                        getTitle: function() {
                            return Object(d.d)("Please describe how you identified this person as the owner of this Twitch account.", "ReportModalWizard")
                        },
                        rows: 2,
                        value: "connect account owner",
                        type: r.Textarea
                    },
                    endBlurb_socialmedia: {
                        getTitle: function() {
                            return Object(d.d)("Please submit a report to the site or service where the incident occurred as well if you have not already done so.", "ReportModalWizard")
                        },
                        type: r.Text
                    },
                    endBlurb_threat: {
                        getTitle: function() {
                            return Object(d.d)("If you feel you are in immediate danger, please contact your local law enforcement.", "ReportModalWizard")
                        },
                        type: r.Text
                    },
                    endLink_selfharm: {
                        getTitle: function() {
                            return Object(d.d)("Learn more about mental health support", "ReportModalWizard")
                        },
                        value: "https://help.twitch.tv/customer/en/portal/articles/2904486-twitch-cares-mental-health-support-information",
                        type: r.Link
                    },
                    endLink_DMCA: {
                        getTitle: function() {
                            return Object(d.d)("View our DMCA Notification Guidelines", "ReportModalWizard")
                        },
                        value: "https://www.twitch.tv/p/legal/dmca-guidelines/",
                        type: r.Link
                    },
                    endLink_trademark: {
                        getTitle: function() {
                            return Object(d.d)("View our Trademark Policy", "ReportModalWizard")
                        },
                        value: "https://www.twitch.tv/p/legal/trademark-policy/",
                        type: r.Link
                    },
                    endLink_devAgreement: {
                        getTitle: function() {
                            return Object(d.d)("View our Developer Agreement", "ReportModalWizard")
                        },
                        value: "https://www.twitch.tv/p/legal/developer-agreement/",
                        type: r.Link
                    },
                    endLink_eventCoC: {
                        getTitle: function() {
                            return Object(d.d)("View our Events Code of Conduct", "ReportModalWizard")
                        },
                        value: "https://www.twitch.tv/p/legal/events-code-of-conduct",
                        type: r.Link
                    },
                    messaging_general: {
                        getTitle: _.generalFilter,
                        value: "general_messaging",
                        omitFromDescription: !0
                    },
                    profile_general: {
                        getTitle: _.generalFilter,
                        value: "general_profile",
                        omitFromDescription: !0
                    },
                    maliciousRaid: {
                        getTitle: function() {
                            return Object(d.d)("They're participating in a malicious raid", "ReportModalWizard")
                        },
                        value: "malicious raid",
                        reportReason: i.Harassment
                    },
                    violence: {
                        getTitle: function() {
                            return Object(d.d)("It contains threats, harm, or endangerment of someone", "ReportModalWizard")
                        },
                        value: "violence/threats",
                        reportReason: i.Harm
                    },
                    report_username: {
                        getTitle: function() {
                            return Object(d.d)("They're using an inappropriate or offensive username", "ReportModalWizard")
                        },
                        value: "inappropriate username",
                        reportReason: i.OffensiveUsername
                    },
                    report_emotes: {
                        getTitle: function() {
                            return Object(d.d)("The emotes are inappropriate or offensive", "ReportModalWizard")
                        },
                        value: "inappropriate emotes",
                        reportReason: i.Other
                    },
                    abusive: {
                        getTitle: function() {
                            return Object(d.d)("It's hateful, harassing, or abusive", "ReportModalWizard")
                        },
                        value: "abusive"
                    },
                    scam: {
                        getTitle: function() {
                            return Object(d.d)("It contains attempts to scam other community members", "ReportModalWizard")
                        },
                        value: "scam",
                        reportReason: i.Spam
                    },
                    emptyStream: {
                        getTitle: function() {
                            return Object(d.d)("There's nobody on the stream", "ReportModalWizard")
                        },
                        value: "empty stream"
                    },
                    impersonation: {
                        getTitle: function() {
                            return Object(d.d)("They're impersonating someone", "ReportModalWizard")
                        },
                        value: "impersonation",
                        reportReason: i.Impersonation
                    },
                    underage: {
                        getTitle: function() {
                            return Object(d.d)("They're underage (12 or younger)", "ReportModalWizard")
                        },
                        value: "underage",
                        reportReason: i.Underaged
                    },
                    report_ip: {
                        getTitle: function() {
                            return Object(d.d)("I think they're using copyrighted content, trademarks, or other intellectual property that's not theirs", "ReportModalWizard")
                        },
                        value: "intellectual property"
                    },
                    inappropriateContent: {
                        getTitle: function() {
                            return Object(d.d)("It's inappropriate or obscene", "ReportModalWizard")
                        },
                        value: "inappropriate content"
                    },
                    violateDevAgreement: {
                        getTitle: function() {
                            return Object(d.d)("I think they're violating Twitch's Developer Agreement", "ReportModalWizard")
                        },
                        value: "violating developer agreement"
                    },
                    revealPersonalInfo: {
                        getTitle: function() {
                            return Object(d.d)("They might have revealed someone's personal information", "ReportModalWizard")
                        },
                        value: "revealing personal info",
                        reportReason: i.Other
                    },
                    inappropriateBadge: {
                        getTitle: function() {
                            return Object(d.d)("Their emote or subscriber badge violates Twitch's Guidelines", "ReportModalWizard")
                        },
                        value: "emote/subscriber badge",
                        reportReason: i.Other
                    },
                    noModeration: {
                        getTitle: function() {
                            return Object(d.d)("They're not moderating their chat appropriately", "ReportModalWizard")
                        },
                        value: "not moderating chat",
                        reportReason: i.Other
                    },
                    inappropriateExtension: {
                        getTitle: function() {
                            return Object(d.d)("Their extension contains malicious or inappropriate content", "ReportModalWizard")
                        },
                        value: "inappropriate extension",
                        reportReason: i.Other
                    },
                    cheating: {
                        getTitle: function() {
                            return Object(d.d)("They're cheating in an online game", "ReportModalWizard")
                        },
                        value: "cheating",
                        reportReason: i.Cheating
                    },
                    bitsViolation: {
                        getTitle: function() {
                            return Object(d.d)("Their use of Bits goes against Twitch's Policy", "ReportModalWizard")
                        },
                        value: "bits violation",
                        reportReason: i.BitsViolation
                    },
                    video_labeling: {
                        getTitle: function() {
                            return Object(d.d)("Their content is labeled incorrectly", "ReportModalWizard")
                        },
                        value: "incorrect label",
                        reportReason: i.Miscategorized
                    },
                    video_inactive: {
                        getTitle: function() {
                            return Object(d.d)("The stream is inactive (sleeping/AFK)", "ReportModalWizard")
                        },
                        value: "inactive stream",
                        reportReason: i.Miscategorized
                    },
                    video_general: {
                        getTitle: _.generalFilter,
                        value: "general_video",
                        omitFromDescription: !0
                    },
                    hateSpeech: {
                        getTitle: function() {
                            return Object(d.d)("They're using hate speech, hateful symbols, or hateful media", "ReportModalWizard")
                        },
                        value: "hate speech",
                        reportReason: i.HatefulConduct
                    },
                    harassment: {
                        getTitle: function() {
                            return Object(d.d)("They're harassing or bullying someone", "ReportModalWizard")
                        },
                        value: "harassment",
                        reportReason: i.Harassment
                    },
                    abusiveViolence: {
                        getTitle: _.abusiveViolence,
                        value: "threatening violence",
                        reportReason: i.Harm
                    },
                    commitingViolence: {
                        getTitle: _.commitingViolence,
                        value: "committing violence",
                        reportReason: i.Harm
                    },
                    swatting: {
                        getTitle: function() {
                            return Object(d.d)("They're inciting or committing swatting or a DDOS attack", "ReportModalWizard")
                        },
                        value: "swatting/ddosing",
                        reportReason: i.Harassment
                    },
                    personalInfo: {
                        getTitle: function() {
                            return Object(d.d)("They're purposely revealing personal information", "ReportModalWizard")
                        },
                        value: "revealing personal info",
                        reportReason: i.Harassment
                    },
                    threat_me: {
                        getTitle: function() {
                            return Object(d.d)("At me", "ReportModalWizard")
                        },
                        value: "against me",
                        reportReason: i.Harm
                    },
                    threat_person: {
                        getTitle: function() {
                            return Object(d.d)("At someone else", "ReportModalWizard")
                        },
                        value: "against another person",
                        reportReason: i.Harm
                    },
                    threat_group: {
                        getTitle: function() {
                            return Object(d.d)("At a group of people", "ReportModalWizard")
                        },
                        value: "against group of people",
                        reportReason: i.Harm
                    },
                    threat_selfharm: {
                        getTitle: function() {
                            return Object(d.d)("They're threatening self-harm", "ReportModalWizard")
                        },
                        value: "selfharm"
                    },
                    inappropriate_game: {
                        getTitle: function() {
                            return Object(d.d)("The game isn't allowed on Twitch", "ReportModalWizard")
                        },
                        value: "prohibited game",
                        reportReason: i.Prohibited
                    },
                    sexuallyViolent: {
                        getTitle: function() {
                            return Object(d.d)("Violent sexual conduct", "ReportModalWizard")
                        },
                        value: "sexually violent",
                        reportReason: i.SexualViolence
                    },
                    childAnimal: {
                        getTitle: function() {
                            return Object(d.d)("Sexual conduct involving a child or animal", "ReportModalWizard")
                        },
                        value: "sexual conduct; child or animal",
                        reportReason: i.SexualViolence
                    },
                    pornographic: {
                        getTitle: function() {
                            return Object(d.d)("Sexually explicit or pornographic content", "ReportModalWizard")
                        },
                        value: "pornographic",
                        reportReason: i.SexualContent
                    },
                    gory: {
                        getTitle: function() {
                            return Object(d.d)("Extreme violence or gore", "ReportModalWizard")
                        },
                        value: "gory",
                        reportReason: i.Gore
                    },
                    suggestive: {
                        getTitle: function() {
                            return Object(d.d)("Sexually suggestive content", "ReportModalWizard")
                        },
                        value: "sexually suggestive",
                        reportReason: i.SexualContent
                    },
                    nudity: {
                        getTitle: function() {
                            return Object(d.d)("Full or partial nudity", "ReportModalWizard")
                        },
                        value: "nudity",
                        reportReason: i.SexualContent
                    },
                    other: {
                        getTitle: function() {
                            return Object(d.d)("There's something else wrong with it...", "ReportModalWizard")
                        },
                        value: "other",
                        reportReason: i.Other
                    },
                    evasion: {
                        getTitle: function() {
                            return Object(d.d)("They were banned or suspended and are trying to get around it (ban evasion)", "ReportModalWizard")
                        },
                        value: "ban evasion"
                    },
                    evasion_sitewide: {
                        getTitle: function() {
                            return Object(d.d)("A sitewide ban from Twitch", "ReportModalWizard")
                        },
                        value: "sitewide ban",
                        reportReason: i.TosBanEvasion
                    },
                    evasion_chat: {
                        getTitle: function() {
                            return Object(d.d)("A chat ban from one or more channels", "ReportModalWizard")
                        },
                        value: "chat ban",
                        reportReason: i.ChatBanEvasion
                    },
                    evasion_messaging: {
                        getTitle: function() {
                            return Object(d.d)("A block from messaging me", "ReportModalWizard")
                        },
                        value: "messaging block",
                        reportReason: i.ChatBanEvasion
                    },
                    impersonation_me: {
                        getTitle: _.me,
                        value: "impersonating me",
                        reportReason: i.Impersonation
                    },
                    impersonation_brand: {
                        getTitle: function() {
                            return Object(d.d)("Someone I represent, or a brand/company I work for", "ReportModalWizard")
                        },
                        value: "impersonating brand",
                        reportReason: i.Impersonation
                    },
                    impersonation_other: {
                        getTitle: _.someoneElse,
                        value: "impersonating someone else",
                        reportReason: i.Impersonation
                    },
                    selfharm: {
                        getTitle: function() {
                            return Object(d.d)("I'm concerned for their wellbeing", "ReportModalWizard")
                        },
                        value: "selfharm",
                        reportReason: i.SelfHarm
                    },
                    chat: {
                        getTitle: function() {
                            return Object(d.d)("In a stream chat message", "ReportModalWizard")
                        },
                        value: "chat"
                    },
                    profile: {
                        getTitle: function() {
                            return Object(d.d)("In the profile content, extensions, or emotes", "ReportModalWizard")
                        },
                        value: "profile"
                    },
                    video: {
                        getTitle: function() {
                            return Object(d.d)("In a live stream, video, or clip", "ReportModalWizard")
                        },
                        value: "video"
                    },
                    room: {
                        getTitle: function(e) {
                            return Object(d.d)("In one of {username}'s rooms", {
                                username: e
                            }, "ReportModalWizard")
                        },
                        value: "room"
                    },
                    whisper: {
                        getTitle: function() {
                            return Object(d.d)("In a whisper (private message)", "ReportModalWizard")
                        },
                        value: "whisper",
                        reportContext: g.N.WHISPER_REPORT
                    },
                    username: {
                        getTitle: function() {
                            return Object(d.d)("In the username", "ReportModalWizard")
                        },
                        value: "username",
                        reportReason: i.OffensiveUsername
                    },
                    report_other: {
                        getTitle: function() {
                            return Object(d.d)("Somewhere else...", "ReportModalWizard")
                        },
                        value: "somewhere else",
                        omitFromDescription: !0
                    },
                    video_streamer: {
                        getTitle: function() {
                            return Object(d.d)("The streamer or channel owner", "ReportModalWizard")
                        },
                        value: "streamer"
                    },
                    video_someoneElse: {
                        getTitle: function() {
                            return Object(d.d)("Someone else in the video", "ReportModalWizard")
                        },
                        value: "someone else in video"
                    },
                    video_chatSomeone: {
                        getTitle: function() {
                            return Object(d.d)("Someone in chat", "ReportModalWizard")
                        },
                        value: "someone in chat",
                        differentTarget: !0
                    },
                    report_channelOwner: {
                        getTitle: function() {
                            return Object(d.d)("The channel owner", "ReportModalWizard")
                        },
                        value: "channel owner"
                    },
                    report_member: {
                        getTitle: function() {
                            return Object(d.d)("Another community member", "ReportModalWizard")
                        },
                        value: "community member",
                        differentTarget: !0
                    },
                    location_onTwitch: {
                        getTitle: function() {
                            return Object(d.d)("On Twitch", "ReportModalWizard")
                        },
                        value: "on twitch"
                    },
                    location_anotherSite: {
                        getTitle: function() {
                            return Object(d.d)("On another site or service", "RpoertModalWizard")
                        },
                        value: "another site"
                    },
                    location_TwitchEvent: {
                        getTitle: function() {
                            return Object(d.d)("In person, at a Twitch event", "ReportModalWizard")
                        },
                        value: "twitch event"
                    },
                    external_incitingRaids: {
                        getTitle: function() {
                            return Object(d.d)("inciting brigading or malicious raids", "ReportModalWizard")
                        },
                        reportReason: i.Harassment,
                        value: "brigading/raids"
                    },
                    external_threatening: {
                        getTitle: _.threatening,
                        value: "threatening"
                    },
                    external_harassment: {
                        getTitle: _.abusive,
                        value: "hateful/harassing"
                    },
                    external_abusiveViolence: {
                        getTitle: _.abusiveViolence,
                        value: "external site; threatening violence",
                        reportReason: i.Harm
                    },
                    external_commitingViolence: {
                        getTitle: _.commitingViolence,
                        value: "external site; committing violence",
                        reportReason: i.Harm
                    },
                    conduct_impersonation: {
                        getTitle: function() {
                            return Object(d.d)("impersonating someone", "ReportModalWizard")
                        },
                        value: "impersonation",
                        reportReason: i.Impersonation
                    },
                    spam: {
                        getTitle: function() {
                            return Object(d.d)("They're spamming or spreading malicious links", "ReportModalWizard")
                        },
                        value: "spam",
                        reportReason: i.Spam
                    },
                    spam_bot: {
                        getTitle: function() {
                            return Object(d.d)("I think this is a bot account", "ReportModalWizard")
                        },
                        value: "bot"
                    },
                    spam_scam: {
                        getTitle: function() {
                            return Object(d.d)("They're trying to scam other community members or sending malicious links", "ReportModalWizard")
                        },
                        value: "scam or malicious links"
                    },
                    spam_repeated: {
                        getTitle: function() {
                            return Object(d.d)("They're sending repeated messages (spam)", "ReportModalWizard")
                        },
                        value: "repeat messages"
                    }
                },
                O = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onChange = function(e) {
                            var n = e.target,
                                i = n.name,
                                r = n.value;
                            t.props.onChangeText(i, r)
                        }, t.onSelect = function(e) {
                            if (t.props.currentCard.items && e.currentTarget.parentElement) {
                                var n = Number(e.currentTarget.parentElement.getAttribute("data-a-index")),
                                    i = t.props.currentCard.items[n];
                                t.props.onChangeRadio(i)
                            }
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.currentCard.getDescription ? o.createElement(k.Xa, {
                            padding: {
                                bottom: 1
                            }
                        }, this.props.currentCard.getDescription()) : null;
                        return o.createElement(k.Xa, {
                            className: "reporting-wizard-card"
                        }, e, o.createElement(k.Ea, {
                            label: this.props.currentCard.getLabel ? this.props.currentCard.getLabel() : ""
                        }, this.renderCardItems()))
                    }, t.prototype.renderCardItems = function() {
                        var e = this,
                            t = this.props.currentCard,
                            n = [];
                        return t.items && t.type && (n = t.items.filter(function(e) {
                            return !!e
                        }).map(function(t, n) {
                            switch (t.type) {
                                case r.Text:
                                    return o.createElement(k.Xa, {
                                        key: n,
                                        padding: {
                                            bottom: 1
                                        }
                                    }, t.getTitle());
                                case r.Link:
                                    return o.createElement(k.Xa, {
                                        key: n,
                                        padding: {
                                            bottom: 1
                                        }
                                    }, o.createElement(k.U, {
                                        to: t.value,
                                        targetBlank: !0
                                    }, o.createElement(k.Xa, {
                                        display: k.X.Flex
                                    }, o.createElement(k.Xa, {
                                        display: k.X.Inline,
                                        padding: {
                                            right: .5
                                        }
                                    }, o.createElement(k.sb, {
                                        asset: k.tb.Document
                                    })), t.getTitle())));
                                case r.Textarea:
                                    var i = t.value ? e.props.userTextInputs[t.value] : void 0,
                                        a = t.required && (!i || !!i && 0 === i.trim().length);
                                    return o.createElement(k.Xa, {
                                        key: n,
                                        padding: {
                                            bottom: 1
                                        }
                                    }, o.createElement(k.Ea, {
                                        label: t.getTitle(),
                                        labelOptional: t.required ? "" : Object(d.d)("Optional", "ReportModalWizardCard")
                                    }, o.createElement(k.Sb, {
                                        onChange: e.onChange,
                                        rows: t.rows || 3,
                                        name: t.value,
                                        error: e.props.error && a,
                                        value: i,
                                        "data-test-selector": "report-wizard-textarea"
                                    })));
                                case r.MultipleChoice:
                                default:
                                    return o.createElement(k.Xa, {
                                        key: n,
                                        padding: {
                                            y: .5
                                        }
                                    }, o.createElement(k.pb, {
                                        checked: !!e.props.currentSelection && e.props.currentSelection.value === t.value,
                                        onChange: e.onSelect,
                                        label: t.getTitle(e.props.targetUser.displayName),
                                        "data-a-index": n,
                                        name: "card",
                                        value: t.value
                                    }))
                            }
                        })), n
                    }, t
                }(o.Component),
                R = n("RQ6e");
            ! function(e) {
                e.Confirm = "Confirm", e.MultipleChoice = "MultipleChoice", e.Info = "End Card"
            }(N || (N = {}));
            var I, D, A, w = {
                    contentGeneral: function() {
                        return Object(d.d)("What would you like to report?", "ReportModalWizard")
                    },
                    content: function() {
                        return Object(d.d)("What's wrong with this content?", "ReportModalWizard")
                    },
                    identifyUser: function() {
                        return Object(d.d)("Who do you want to report?", "ReportModalWizard")
                    },
                    thisPersonIs: function() {
                        return Object(d.d)("This person is...", "ReportModalWizard")
                    },
                    relevantStatements: function() {
                        return Object(d.d)("What would you like to report? (Please choose the most relevant statement that applies.)", "ReportModalWizard")
                    }
                },
                L = {
                    report: function(e) {
                        return Object(d.d)("Report {username}", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    reportVideo: function(e) {
                        return Object(d.d)("Report {username}'s Video", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    reportMessage: function(e) {
                        return Object(d.d)("Report {username}'s Message", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    reportProfile: function(e) {
                        return Object(d.d)("Report {username}'s Profile Or Other Content", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    reportAbusive: function(e) {
                        return Object(d.d)("Report {username} for Abusive Conduct", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    tellUsMore: function() {
                        return Object(d.d)("Tell Us More", "ReportModalWizard")
                    },
                    thanks: function() {
                        return Object(d.d)("Thanks for letting us know", "ReportModalWizard")
                    },
                    thanksConcern: function() {
                        return Object(d.d)("Thank you for your concern", "ReportModalWizard")
                    }
                },
                M = {
                    getDescription: function() {
                        return Object(d.d)("Reports are reviewed by Twitch Staff 24 hours a day. We will issue penalties, such as account suspension and/or content removal, once we verify that a violation of our policies has occurred.", "ReportModalWizard")
                    },
                    blockPrompt: !0,
                    getTitle: L.thanks,
                    type: N.Info,
                    value: "end card"
                },
                F = {
                    socialMedia: a.__assign({}, M, {
                        items: [C.endBlurb_socialmedia]
                    }),
                    violence: a.__assign({}, M, {
                        items: [C.endBlurb_threat]
                    }),
                    legal: {
                        getTitle: L.thanksConcern,
                        getDescription: function() {
                            return Object(d.d)("To submit a claim or report a violation of this type, you will need to follow the steps listed on the relevant page below.", "ReportModalWizard")
                        },
                        items: [C.endLink_DMCA, C.endLink_trademark, C.endLink_devAgreement],
                        type: N.Info,
                        value: "ip end"
                    },
                    selfharm: {
                        getTitle: L.thanksConcern,
                        getDescription: function() {
                            return Object(d.d)("If you know the user personally, and you believe them to be in danger, please contact their local authorities immediately. The link below contains some general information that may be of use.", "ReportModalWizard")
                        },
                        items: [C.endLink_selfharm],
                        type: N.Info,
                        value: "selfharm end"
                    },
                    twitchEvent: {
                        getTitle: L.thanksConcern,
                        getDescription: function() {
                            return Object(d.d)("Please bring this concern to the attention of staff or security at the event if you have not already done so. More information is available at the link below.", "ReportModalWizard")
                        },
                        items: [C.endLink_eventCoC],
                        value: "twitch event end",
                        type: N.Info
                    }
                },
                U = {
                    getTitle: L.report,
                    getLabel: function() {
                        return Object(d.d)("Where is the problem?", "ReportModalWizard")
                    },
                    items: [C.video, C.whisper, C.chat, C.room, C.profile, C.username, C.report_other],
                    type: N.MultipleChoice,
                    value: "content type"
                },
                P = {
                    identifyUser: {
                        getTitle: L.reportVideo,
                        getLabel: w.identifyUser,
                        items: [C.video_streamer, C.video_someoneElse, C.video_chatSomeone],
                        type: N.MultipleChoice,
                        value: "video identify user"
                    },
                    content: {
                        getTitle: L.reportVideo,
                        getLabel: w.contentGeneral,
                        items: [C.revealPersonalInfo, C.video_labeling, C.video_inactive, C.video_general, C.report_ip, C.violateDevAgreement, C.selfharm],
                        type: N.MultipleChoice,
                        value: "video report reason"
                    },
                    general: {
                        getTitle: L.reportVideo,
                        getLabel: w.content,
                        items: [C.report_username, C.violence, C.abusive, C.cheating, C.scam, C.inappropriateContent, C.evasion, C.impersonation, C.underage, C.bitsViolation],
                        type: N.MultipleChoice,
                        value: "video general report reason"
                    }
                },
                B = {
                    content: {
                        getTitle: L.reportMessage,
                        getLabel: w.contentGeneral,
                        items: [C.revealPersonalInfo, C.evasion, C.spam, C.maliciousRaid, C.report_username, C.messaging_general, C.selfharm],
                        type: N.MultipleChoice,
                        value: "message report reason"
                    },
                    general: {
                        getTitle: L.reportMessage,
                        getLabel: w.content,
                        items: [C.report_emotes, C.violence, C.abusive, C.inappropriateContent, C.impersonation, C.underage, C.bitsViolation],
                        type: N.MultipleChoice,
                        value: "message general report reason"
                    }
                },
                x = a.__assign({}, B.content, {
                    getDescription: function() {
                        return Object(d.d)("Please note that we may review additional messages in this conversation to determine the context of your report.", "ReportModalWizard")
                    }
                }),
                V = {
                    content: {
                        getTitle: L.reportProfile,
                        getLabel: w.contentGeneral,
                        items: [C.revealPersonalInfo, C.inappropriateBadge, C.inappropriateExtension, C.noModeration, C.profile_general, C.report_ip, C.violateDevAgreement, C.selfharm],
                        type: N.MultipleChoice,
                        value: "profile report reason"
                    },
                    general: {
                        getTitle: L.reportProfile,
                        getLabel: w.content,
                        items: [C.report_username, C.violence, C.abusive, C.scam, C.inappropriateContent, C.evasion, C.impersonation, C.underage, C.bitsViolation],
                        type: N.MultipleChoice,
                        value: "profile general report reason"
                    }
                },
                j = {
                    getTitle: function(e) {
                        return Object(d.d)("Report {username}'s Room", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: w.identifyUser,
                    items: [C.report_channelOwner, C.report_member],
                    value: "room report user",
                    type: N.MultipleChoice
                },
                W = {
                    getTitle: L.tellUsMore,
                    items: [C.input_description],
                    type: N.Confirm,
                    value: "tell us more"
                },
                G = {
                    banEvasion: a.__assign({}, W, {
                        items: [C.input_usernames, C.input_description],
                        value: "ban evasion tell us more"
                    }),
                    socialMedia: a.__assign({}, W, {
                        items: [C.input_link, C.input_connection, C.input_description],
                        nextCard: F.socialMedia,
                        value: "social media tell us more"
                    })
                },
                H = {
                    content: {
                        getTitle: L.reportAbusive,
                        getLabel: w.relevantStatements,
                        items: [C.hateSpeech, C.harassment, C.abusiveViolence, C.commitingViolence, C.swatting, C.personalInfo],
                        type: N.MultipleChoice,
                        value: "abuse type"
                    },
                    violence: {
                        getTitle: function(e) {
                            return Object(d.d)("Report {username} for Violence or Threats", {
                                username: e
                            }, "ReportModalWizard")
                        },
                        getLabel: function() {
                            return Object(d.d)("Are the threats or actions directed at you or someone else?", "ReportModalWizard")
                        },
                        items: [C.threat_me, C.threat_person, C.threat_group, C.threat_selfharm],
                        type: N.MultipleChoice,
                        value: "violence type"
                    }
                },
                z = {
                    identifyLocation: {
                        getTitle: function(e) {
                            return Object(d.d)("Report {username} for something else...", {
                                username: e
                            }, "ReportModalWizard")
                        },
                        getLabel: function() {
                            return Object(d.d)("Where did the problem happen?", "ReportModalWizard")
                        },
                        items: [C.location_onTwitch, C.location_anotherSite, C.location_TwitchEvent],
                        type: N.MultipleChoice,
                        value: "off-site conduct location"
                    },
                    externalSite: {
                        getTitle: function(e) {
                            return Object(d.d)("Report {username}'s Conduct on Another Site or Service", {
                                username: e
                            }, "ReportModalWizard")
                        },
                        getLabel: w.thisPersonIs,
                        getDescription: function() {
                            return Object(d.d)("Please note that incidents reported through this form must involve Twitch community members. If possible, please submit a report to the site or service where the incident occurred as well.", "ReportModalWizard")
                        },
                        items: [C.external_incitingRaids, C.external_threatening, C.external_harassment],
                        type: N.MultipleChoice,
                        nextCard: G.socialMedia,
                        value: "external site conduct"
                    },
                    external_violence: a.__assign({}, H.violence, {
                        items: [C.threat_me, C.threat_person, C.threat_group],
                        nextCard: G.socialMedia
                    }),
                    external_abusive: a.__assign({}, H.content, {
                        items: [C.hateSpeech, C.harassment, C.external_abusiveViolence, C.external_commitingViolence, C.swatting, C.personalInfo],
                        nextCard: G.socialMedia
                    })
                },
                X = {
                    getTitle: function(e) {
                        return Object(d.d)("Report {username}'s Spam or Malicious Links", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: w.contentGeneral,
                    items: [C.spam_bot, C.spam_scam, C.spam_repeated],
                    type: N.MultipleChoice,
                    value: "spam type"
                },
                q = {
                    getTitle: function(e) {
                        return Object(d.d)("Report {username} for Inappropriate Content", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: w.relevantStatements,
                    items: [C.inappropriate_game, C.gory, C.sexuallyViolent, C.childAnimal, C.pornographic, C.suggestive, C.nudity, C.other],
                    type: N.MultipleChoice,
                    value: "inappropriate content type"
                },
                Y = {
                    getTitle: function(e) {
                        return Object(d.d)("Report {username} for Evading a Ban", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: function() {
                        return Object(d.d)("What kind of ban are they evading?", "ReportModalWizard")
                    },
                    value: "ban type",
                    items: [C.evasion_chat, C.evasion_sitewide, C.evasion_messaging],
                    type: N.MultipleChoice,
                    nextCard: G.banEvasion
                },
                K = {
                    getTitle: function(e) {
                        return Object(d.d)("Report {username} for Impersonation", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: function() {
                        return Object(d.d)("Who is being impersonated?", "ReportModalWizard")
                    },
                    getDescription: function() {
                        return Object(d.d)("Parody, cosplay, and other portrayals without the intent to deceive or defraud are allowed under Twitch's Community Guidelines. If you would still like to submit a report, please continue.", "ReportModalWizard")
                    },
                    items: [C.impersonation_me, C.impersonation_brand, C.impersonation_other],
                    type: N.MultipleChoice,
                    value: "impersonation type"
                },
                Q = U,
                $ = W,
                Z = M,
                J = {
                    video: P.identifyUser,
                    whisper: x,
                    chat: B.content,
                    profile: V.content,
                    room: j,
                    "somewhere else": z.identifyLocation,
                    streamer: P.content,
                    "someone else in video": P.content,
                    "someone in chat": B.content,
                    general_video: P.general,
                    general_messaging: B.general,
                    general_profile: V.general,
                    "channel owner": V.content,
                    "community member": B.content,
                    "on twitch": V.content,
                    "another site": z.externalSite,
                    "twitch event": F.twitchEvent,
                    "brigading/raids": G.socialMedia,
                    threatening: z.external_violence,
                    "hateful/harassing": z.external_abusive,
                    "external site; threatening violence": z.external_violence,
                    "external site; committing violence": z.external_violence,
                    "external site; scam": G.socialMedia,
                    "ban evasion": Y,
                    spam: X,
                    hateful: H.content,
                    impersonation: K,
                    "violence/threats": H.violence,
                    "threatening violence": H.violence,
                    "committing violence": H.violence,
                    abusive: H.content,
                    "inappropriate content": q,
                    "intellectual property": F.legal,
                    "violating developer agreement": F.legal
                },
                ee = {
                    selfharm: F.selfharm,
                    harm: F.violence,
                    other: Z
                },
                te = {
                    CHANNEL_FEED_POST_REPORT: V.content,
                    COMMUNITY_REPORT: V.content,
                    CHAT_REPORT: B.content,
                    CLIP_REPORT: P.content,
                    EVENT_REPORT: V.content,
                    EXTENSION_REPORT: V.content,
                    LIVE_UP_REPORT: V.content,
                    ROOM_REPORT: j,
                    WHISPER_REPORT: x,
                    VOD_COMMENT_REPORT: B.content
                },
                ne = "report-wizard-back",
                ie = "report-wizard-close",
                re = "report-wizard-next",
                ae = "report-wizard-submit",
                oe = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            currentCard: t.props.currentCard || te[t.props.reportContentType] || Q,
                            prevCards: [],
                            currentSelection: null,
                            prevSelections: [],
                            displacedSelections: [],
                            userTextInput: {},
                            error: "",
                            reportReason: t.props.reportReason || "",
                            modalCloseTracked: !1,
                            targetUnknown: !1,
                            reportContext: t.props.reportContentType
                        }, t.renderPrimer = function() {
                            return o.createElement(k.Xa, {
                                margin: {
                                    top: 1
                                }
                            }, o.createElement(k.W, null, Object(d.d)("We are going to ask you a few questions to help us investigate your report quickly and accurately.", "ReportModalWizard")))
                        }, t.renderButtons = function() {
                            var e = Object(d.d)("Close", "ReportModalWizard"),
                                n = t.handleClose,
                                i = ie,
                                r = !1,
                                a = t.state.prevCards.length ? t.renderBack() : null;
                            switch (t.state.currentCard.type) {
                                case N.MultipleChoice:
                                    e = Object(d.d)("Next", "ReportModalWizard"), n = t.handleNext, i = re, r = !t.state.currentSelection;
                                    break;
                                case N.Confirm:
                                    e = Object(d.d)("Submit Report", "ReportModalWizard"), n = t.handleSubmit, r = !t.state.userTextInput, i = ae
                            }
                            return o.createElement(k.Xa, null, a, o.createElement(k.z, {
                                onClick: n,
                                disabled: r,
                                "data-test-selector": i
                            }, o.createElement(k.Xa, {
                                padding: {
                                    x: 1
                                }
                            }, e)))
                        }, t.renderBack = function() {
                            return o.createElement(k.Xa, {
                                margin: {
                                    right: 1
                                },
                                display: k.X.InlineBlock
                            }, o.createElement(k.z, {
                                type: k.F.Hollow,
                                onClick: t.handleBack,
                                "data-test-selector": ne
                            }, o.createElement(k.Xa, {
                                padding: {
                                    x: 1
                                }
                            }, Object(d.d)("Back", "ReportModalWizard"))))
                        }, t.getTitle = function() {
                            return t.state.currentCard.getTitle && t.props.targetUser.displayName && t.props.targetUser.id ? t.state.targetUnknown ? t.state.currentCard.getTitle(Object(d.d)("Another User", "ReportModalWizard")) : t.state.currentCard.getTitle(t.props.targetUser.displayName) : t.state.targetUnknown ? Object(d.d)("Report User", "ReportModalWizard") : t.props.title
                        }, t.handleClose = function() {
                            t.setState({
                                modalCloseTracked: !0
                            }, function() {
                                return t.props.trackClose(A.Finish, t.state.currentCard.value)
                            }), t.props.onClose()
                        }, t.handleNext = function() {
                            if (t.state.currentSelection && t.state.currentSelection.value) {
                                var e = t.state.currentCard,
                                    n = t.state.prevCards.concat(e),
                                    i = t.state.prevSelections.concat(t.state.currentSelection),
                                    r = t.state.displacedSelections[t.state.displacedSelections.length - 1],
                                    a = t.state.currentSelection.differentTarget || t.state.targetUnknown,
                                    o = t.state.currentSelection.reportContext || t.state.reportContext,
                                    s = e.nextCard || $;
                                J[t.state.currentSelection.value] && (s = J[t.state.currentSelection.value]);
                                var l = t.state.currentSelection.reportReason || t.state.reportReason,
                                    d = s.type === N.Info;
                                t.setState({
                                    currentCard: s,
                                    reportReason: l,
                                    prevCards: d ? [] : n,
                                    prevSelections: i,
                                    targetUnknown: a,
                                    currentSelection: r || null,
                                    displacedSelections: t.state.displacedSelections.slice(0, -1),
                                    reportContext: o
                                }, function() {
                                    return t.trackNavigation(D.Next, e.value)
                                })
                            }
                        }, t.createReportDescription = function() {
                            return "" + (t.state.reportContext !== t.props.reportContentType ? "report context: " + t.props.reportContentType + "\n\n" : "") + t.state.prevSelections.map(function(e) {
                                if (!e.omitFromDescription) return e.value
                            }).filter(function(e) {
                                return !!e
                            }).join(" > ") + "\n\n" + Object.keys(t.state.userTextInput).map(function(e) {
                                return e + ": " + t.state.userTextInput[e]
                            }).join("\n")
                        }, t.requiredInputsNonEmpty = function() {
                            if (t.state.currentCard.items) return 0 === t.state.currentCard.items.filter(function(e) {
                                if (e.type !== r.Textarea || !e.required) return !1;
                                var n = t.state.userTextInput[e.value],
                                    i = n && 0 === n.trim().length;
                                return !n || i
                            }).length
                        }, t.handleSubmit = function() {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, i, r = this;
                                return a.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            return e = Object(d.d)("Additional information is required.", "ReportModalWizard"), this.requiredInputsNonEmpty() ? (t = this.state.reportReason || "other", n = this.createReportDescription(), [4, this.props.onSubmit(t, n, this.state.reportContext)]) : [3, 2];
                                        case 1:
                                            switch (a.sent(), this.props.submitStatus) {
                                                case R.a.FormError:
                                                    this.setState({
                                                        error: e
                                                    });
                                                    break;
                                                case R.a.Success:
                                                    i = Z, ee[t] && (i = ee[t]), this.state.currentCard.nextCard && (i = this.state.currentCard.nextCard), this.setState({
                                                        currentCard: i,
                                                        prevCards: [],
                                                        prevSelections: [],
                                                        currentSelection: null,
                                                        displacedSelections: [],
                                                        userTextInput: {},
                                                        error: ""
                                                    }, function() {
                                                        return r.trackNavigation(D.Submit)
                                                    });
                                                    break;
                                                case R.a.UserError:
                                                    this.setState({
                                                        error: Object(d.d)("This account could not be reported. It may have already been suspended, or the owner may have deleted it.", "ReportModalWizard")
                                                    });
                                                    break;
                                                case R.a.MutationError:
                                                default:
                                                    this.setState({
                                                        error: Object(d.d)("Sorry, a network error occurred when submitting your report. Please try again later.", "ReportModalWizard")
                                                    })
                                            }
                                            return [3, 3];
                                        case 2:
                                            this.props.onError(R.a.FormError), this.setState({
                                                error: e
                                            }), a.label = 3;
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        }, t.handleBack = function() {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, i, r, o = this;
                                return a.__generator(this, function(a) {
                                    return e = this.state.currentCard, t = this.state.prevCards[this.state.prevCards.length - 1], n = this.state.prevSelections[this.state.prevSelections.length - 1], i = !n.differentTarget && this.state.targetUnknown, r = this.state.displacedSelections, this.state.currentSelection && (r = r.concat(this.state.currentSelection)), t && n && this.setState({
                                        currentCard: t,
                                        currentSelection: n,
                                        displacedSelections: r,
                                        prevCards: this.state.prevCards.slice(0, -1),
                                        prevSelections: this.state.prevSelections.slice(0, -1),
                                        error: "",
                                        targetUnknown: i
                                    }, function() {
                                        return o.trackNavigation(D.Back, e.value)
                                    }), [2]
                                })
                            })
                        }, t.handleTextInput = function(e, n) {
                            var i = t.state.userTextInput;
                            i[e] = n, t.setState({
                                userTextInput: i
                            })
                        }, t.handleSelection = function(e) {
                            if (t.state.currentCard.items && e !== t.state.currentSelection) {
                                var n = t.state.targetUnknown;
                                if (n) n = 0 === t.state.displacedSelections.filter(function(e) {
                                    return e.differentTarget
                                }).length;
                                var i = t.state.reportContext;
                                (t.state.displacedSelections.filter(function(e) {
                                    return e.reportContext
                                }).length || t.state.currentSelection && t.state.currentSelection.reportContext) && (i = t.props.reportContentType), t.setState({
                                    currentSelection: e,
                                    displacedSelections: [],
                                    userTextInput: {},
                                    targetUnknown: n,
                                    reportContext: i
                                })
                            }
                        }, t.trackNavigation = function(e, n) {
                            t.props.trackAction(e, n, t.state.currentCard.value)
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentWillUnmount = function() {
                        this.state.modalCloseTracked || this.props.trackClose(A.Close, this.state.currentCard.value)
                    }, t.prototype.render = function() {
                        var e = this.state.currentCard.type === N.Info && this.state.currentCard.blockPrompt ? o.createElement(T, {
                                targetUser: this.props.targetUser,
                                onBlock: this.props.onBlock,
                                onUnblock: this.props.onUnblock,
                                userBlocked: this.props.userBlocked
                            }) : null,
                            t = this.state.error ? o.createElement(k.Eb, {
                                fullWidth: !0,
                                margin: {
                                    bottom: 1
                                },
                                padding: 1,
                                className: "reporting__error-container"
                            }, this.state.error) : null,
                            n = this.state.prevCards.length || this.state.currentCard.type === N.Info ? null : this.renderPrimer();
                        return o.createElement(k.Eb, {
                            className: "reporting-wizard",
                            display: k.X.Flex,
                            margin: {
                                x: 1
                            },
                            flexDirection: k.Aa.Column,
                            fullHeight: !0,
                            "data-test-card-value": this.state.currentCard.value
                        }, t, o.createElement(k.W, {
                            bold: !0,
                            fontSize: k.Ca.Size4
                        }, this.getTitle()), n, o.createElement(k.Xa, {
                            margin: {
                                y: 1
                            }
                        }, o.createElement(O, {
                            currentCard: this.state.currentCard,
                            currentSelection: this.state.currentSelection,
                            targetUser: this.props.targetUser,
                            targetUserID: this.props.targetUser.id,
                            onChangeRadio: this.handleSelection,
                            onChangeText: this.handleTextInput,
                            userTextInputs: this.state.userTextInput,
                            error: this.props.submitStatus === R.a.FormError && !!this.state.error
                        }), e), this.renderButtons())
                    }, t
                }(o.Component),
                se = n("s8Ou"),
                le = n("0hI/");
            n.d(t, "c", function() {
                    return D
                }), n.d(t, "a", function() {
                    return A
                }), n.d(t, "b", function() {
                    return ce
                }),
                function(e) {
                    e.Close = "close", e.Open = "open", e.Submit = "submit_report", e.ToggleSettings = "modal_settings"
                }(I || (I = {})),
                function(e) {
                    e.Back = "back", e.Close = "close", e.Open = "open", e.Next = "next", e.Submit = "submit_report", e.ToggleSettings = "modal_settings"
                }(D || (D = {})),
                function(e) {
                    e.Close = "close", e.Finish = "finish"
                }(A || (A = {}));
            var de = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    n.handleSubmit = function(e, t, i) {
                        return a.__awaiter(n, void 0, void 0, function() {
                            var n, r, o, s, l = this;
                            return a.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        if (n = i === g.N.WHISPER_REPORT ? i : this.props.reportContext.contentType, r = g.N[n], null === (o = {
                                                description: t,
                                                reason: e,
                                                content: r,
                                                contentID: this.props.reportContext.contentID,
                                                extra: this.props.reportContext.extra,
                                                targetID: this.props.data.targetUser.id
                                            }).targetID) return this.setState({
                                            submitStatus: R.a.UserError
                                        }), [2];
                                        a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), [4, this.props.reportUser(Object(m.a)(o))];
                                    case 2:
                                        return a.sent(), this.setState({
                                            submitStatus: R.a.Success
                                        }, function() {
                                            l.state.showWizard || l.trackAction(I.Submit)
                                        }), [3, 4];
                                    case 3:
                                        return s = a.sent(), d.k.error(s, "ReportUser Mutation failed."), this.setState({
                                            submitStatus: R.a.MutationError
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, n.handleChildError = function(e) {
                        return n.setState({
                            submitStatus: e
                        })
                    }, n.handleClose = function() {
                        n.props.onClose && n.props.onClose(n.state.submitStatus, n.state.userBlocked)
                    }, n.onBlock = function() {
                        n.props.blockUserMutation(n.props.data.targetUser.id, void 0, void 0, a.__assign({}, n.props.sessionUser, {
                            __typename: "User"
                        })), n.setState({
                            userBlocked: !0
                        })
                    }, n.onUnblock = function() {
                        n.props.unblockUserMutation(n.props.data.targetUser.id, a.__assign({}, n.props.sessionUser, {
                            __typename: "User"
                        })), n.setState({
                            userBlocked: !1
                        })
                    }, n.trackOpen = function(e) {
                        n.state.openEventSent || (n.state.showWizard ? n.trackWizardAction(D.Open, void 0, e) : n.trackAction(I.Open), n.setState({
                            openEventSent: !0
                        }))
                    }, n.trackClose = function(e, t) {
                        n.state.closeEventSent || (n.state.showWizard ? n.trackWizardAction(D.Close, t, void 0, e) : n.trackAction(I.Close), n.setState({
                            closeEventSent: !0
                        }))
                    }, n.trackWizardAction = function(e, t, i, r) {
                        d.p.tracking.track(v.SpadeEventType.ReportWizardFlowAction, {
                            ui_context: n.props.reportContext.contentType,
                            target_user_id: n.props.reportContext.targetUserID,
                            report_sent: n.state.submitStatus === R.a.Success,
                            modal_type: "wizard_v1",
                            extra_user_id: n.props.reportContext.additionalTrackingID,
                            action: e,
                            close_type: r,
                            report_session_id: n.reportID,
                            current_step: t,
                            navigated_to: i
                        })
                    }, n.trackAction = function(e) {
                        d.p.tracking.track(v.SpadeEventType.ReportFlowAction, {
                            ui_context: n.props.reportContext.contentType,
                            target_user_id: n.props.reportContext.targetUserID,
                            report_sent: n.state.submitStatus === R.a.Success,
                            extra_user_id: n.props.reportContext.additionalTrackingID,
                            action: e,
                            report_session_id: n.reportID
                        })
                    }, n.reportID = Object(h.a)();
                    var i = d.p.experiments.getAssignment(f.b.NewReportingWizard);
                    return n.state = {
                        submitStatus: R.a.Unsubmitted,
                        showWizard: "yes" === i,
                        openEventSent: !1,
                        closeEventSent: !1,
                        userBlocked: !1
                    }, n
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.trackOpen()
                }, t.prototype.componentWillUnmount = function() {
                    this.handleClose(), this.state.showWizard || this.trackClose()
                }, t.prototype.render = function() {
                    if (this.props.data.error) return o.createElement(k.Xa, {
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(k.W, {
                        fontSize: k.Ca.Size5
                    }, Object(d.d)("There was an unexpected error. Please refresh the page and try again", "ReportUser")));
                    if (this.props.data.loading) return o.createElement(k.ib, {
                        lineCount: 3
                    });
                    if (this.props.data.targetUser) {
                        var e = {
                            onClose: this.handleClose,
                            onError: this.handleChildError,
                            onSubmit: this.handleSubmit,
                            reportContentType: this.props.reportContext.contentType,
                            submitStatus: this.state.submitStatus,
                            title: this.props.title,
                            defaultDescription: this.props.defaultDescription
                        };
                        return this.state.showWizard ? this.props.data.loading ? o.createElement(k.Za, null) : o.createElement(oe, a.__assign({}, e, {
                            user: this.props.sessionUser,
                            onBlock: this.onBlock,
                            onUnblock: this.onUnblock,
                            targetUser: this.props.data.targetUser,
                            trackAction: this.trackWizardAction,
                            trackClose: this.trackClose,
                            userBlocked: this.userBlocked
                        })) : o.createElement(R.b, a.__assign({}, e, {
                            targetUser: this.props.data.targetUser
                        }))
                    }
                    return o.createElement(k.Xa, {
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(k.W, {
                        fontSize: k.Ca.Size5
                    }, Object(d.d)("The user you are trying to report does not exist", "ReportUser")))
                }, Object.defineProperty(t.prototype, "userBlocked", {
                    get: function() {
                        var e = this;
                        return !!(this.props.data.currentUser && this.props.data.currentUser.blockedUsers && this.props.data.currentUser.blockedUsers.find(function(t) {
                            return !!t && t.id === e.props.reportContext.targetUserID
                        }))
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(o.Component);
            var ce = Object(l.compose)(Object(c.a)(se, {
                name: "reportUser"
            }), Object(c.a)(le, {
                options: function(e) {
                    return {
                        variables: {
                            targetUserID: e.reportContext.targetUserID
                        }
                    }
                }
            }), Object(E.b)("ReportUser", {
                autoReportInteractive: !0
            }), Object(u.a)(), Object(p.a)(), Object(s.connect)(function(e) {
                return {
                    sessionUser: e.session.user
                }
            }, null))(de)
        },
        "dIU+": function(e, t, n) {
            "use strict";
            var i, r = n("/MKj"),
                a = n("fvjX"),
                o = n("1/iK"),
                s = n("y5D0"),
                l = n("kRBY"),
                d = n("mrSG"),
                c = n("TSYQ"),
                u = n("q1tI"),
                p = n("/7QA"),
                m = n("eJ65"),
                h = n("yR8l"),
                f = n("geRD"),
                g = n("J9w5"),
                v = n("I6K6"),
                E = n("sgJZ");
            ! function(e) {
                e.Channel = "channel"
            }(i || (i = {}));
            var b, k, y = n("2xye"),
                S = n("9o5F"),
                T = n("tKDy"),
                N = n("i4un"),
                _ = n("JcRA"),
                C = n("GnwI"),
                O = n("Ba7Q"),
                R = n("Ar2k"),
                I = n("Ue10"),
                D = n("ZBeb"),
                A = (n("Kcwz"), n("CZEr")),
                w = n("Qdxp");
            ! function(e) {
                e.UnfollowButton = "unfollow-button", e.UnfollowButtonLabel = "unfollow-button-label", e.UnfollowButtonLabelHover = "unfollow-button-label-hover", e.UnfollowButtonWithDropdown = "unfollow-button__dropdown", e.FollowButton = "follow-button", e.FollowButtonWithContextualModal = "follow-button-contextual"
            }(b || (b = {})),
            function(e) {
                e[e.IconOnly = 0] = "IconOnly", e[e.TextOnly = 1] = "TextOnly", e[e.IconAndText = 2] = "IconAndText"
            }(k || (k = {}));
            var L = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isFollowing: !1,
                            showDropdown: !1,
                            disableNotifications: !0
                        }, t.handleContextBalloonToggle = function(e) {
                            e ? Object(T.n)({
                                page: T.e.Bubble,
                                source: o.a.FollowButton,
                                target: T.d.Outside,
                                action: T.c.Click
                            }) : Object(T.o)({
                                page: T.e.Bubble,
                                source: o.a.FollowButton
                            })
                        }, t.userDataLoaded = function() {
                            return t.props.data && !t.props.data.loading && !t.props.data.error && t.props.data.user
                        }, t.toggleFollowing = function() {
                            var e;
                            t.state.isFollowing ? (t.unfollowUser(), e = y.SpadeEventType.Unfollow) : (t.followUser(), e = y.SpadeEventType.Follow);
                            var n = t.getFollowData();
                            n && function(e, t) {
                                d.__awaiter(this, void 0, void 0, function() {
                                    var n, i, r, a, o, s, l, c, u, m;
                                    return d.__generator(this, function(d) {
                                        switch (d.label) {
                                            case 0:
                                                if (n = null, i = null, r = null, a = null, o = null, !t.channelID) return [3, 5];
                                                d.label = 1;
                                            case 1:
                                                return d.trys.push([1, 3, , 4]), [4, p.p.apollo.client.query({
                                                    query: E,
                                                    variables: {
                                                        id: t.channelID
                                                    }
                                                })];
                                            case 2:
                                                return a = d.sent(), [3, 4];
                                            case 3:
                                                return l = d.sent(), p.k.warn("Failed to make query for channel info in FollowEvent reporting.", {
                                                    err: l,
                                                    channelID: t.channelID
                                                }), [3, 4];
                                            case 4:
                                                (r = a && a.data && a.data.user) ? o = r.hosting.stream && r.hosting.stream.game ? r.hosting.stream.game.name : r.stream && r.stream.game && r.stream.game.name: p.k.warn("Query for channel info in FollowEvent reporting returned no data.", {
                                                    channelID: t.channelID
                                                }), d.label = 5;
                                            case 5:
                                                if (!(c = p.o.getVideoPlayerTrackingData().vodID)) return [3, 10];
                                                d.label = 6;
                                            case 6:
                                                return d.trys.push([6, 8, , 9]), [4, p.p.apollo.client.query({
                                                    query: g,
                                                    variables: {
                                                        id: c
                                                    }
                                                })];
                                            case 7:
                                                return n = d.sent(), [3, 9];
                                            case 8:
                                                return u = d.sent(), p.k.warn("Failed to make query for VOD info in FollowEvent reporting.", {
                                                    err: u,
                                                    currentVODID: c
                                                }), [3, 9];
                                            case 9:
                                                (i = n && n.data && n.data.video) ? s = Object(v.a)(i.broadcastType): (s = null, p.k.warn("Query for video info in FollowEvent reporting return no data.", {
                                                    currentVODID: c
                                                })), d.label = 10;
                                            case 10:
                                                return m = {
                                                    channel: t.channelLogin,
                                                    channel_id: t.channelID,
                                                    channel_game: o,
                                                    cta_visible: p.o.getVideoPlayerTrackingData().followCTAVisible,
                                                    host_channel: t.hostChannelLogin,
                                                    host_channel_id: t.hostChannelID,
                                                    game: t.game,
                                                    partner: r ? r.isPartner : null,
                                                    src: t.src,
                                                    vod_id: c,
                                                    vod_type: s
                                                }, p.o.track(e, m), [2]
                                        }
                                    })
                                })
                            }(e, {
                                channelLogin: n.user && n.user.login || "",
                                channelID: n.user && n.user.id || "",
                                hostChannelLogin: t.props.hostChannelLogin,
                                hostChannelID: t.props.hostChannelID,
                                src: i.Channel
                            }), t.hideTooltip()
                        }, t.followUser = function() {
                            return d.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, i, r;
                                return d.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            return e = this.getFollowData(), this.props.followUser && e ? (this.setState({
                                                showDropdown: !0
                                            }), t = {
                                                followUser: {
                                                    __typename: "FollowUserPayload",
                                                    follow: {
                                                        disableNotifications: !1,
                                                        __typename: "Follow",
                                                        user: {
                                                            __typename: "User",
                                                            id: e.user && e.user.id,
                                                            displayName: e.user && e.user.displayName,
                                                            login: e.user && e.user.login,
                                                            self: {
                                                                __typename: "UserSelfConnection",
                                                                follower: {
                                                                    __typename: "FollowerEdge",
                                                                    disableNotifications: !1
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }, n = Object(f.b)({
                                                disableNotifications: !1,
                                                targetID: e.user && e.user.id || ""
                                            }, t), [4, this.props.followUser(n)]) : [2];
                                        case 1:
                                            return (i = a.sent()).data.followUser && i.data.followUser.follow && (r = i.data.followUser.follow, Object(f.e)(w, {
                                                login: this.props.channelLogin
                                            }, function(e) {
                                                var t = e.user;
                                                return t && t.self && (t.self.follower ? t.self.follower.disableNotifications = r.disableNotifications : t.self.follower = {
                                                    __typename: "FollowerEdge",
                                                    disableNotifications: r.disableNotifications
                                                }), e
                                            })), this.props.onFollow && this.props.onFollow(this.props.channelLogin), [2]
                                    }
                                })
                            })
                        }, t.unfollowUser = function() {
                            return d.__awaiter(t, void 0, void 0, function() {
                                var e, t, n;
                                return d.__generator(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            return e = this.getFollowData(), this.props.unfollowUser && e ? (t = {
                                                unfollowUser: {
                                                    __typename: "UnfollowUserPayload",
                                                    follow: {
                                                        disableNotifications: null,
                                                        __typename: "Follow",
                                                        user: {
                                                            __typename: "User",
                                                            id: e.user && e.user.id,
                                                            displayName: e.user && e.user.displayName,
                                                            login: e.user && e.user.login,
                                                            self: {
                                                                __typename: "UserSelfConnection",
                                                                follower: {
                                                                    __typename: "FollowerEdge",
                                                                    disableNotifications: null
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }, n = Object(f.b)({
                                                targetID: e.user && e.user.id || ""
                                            }, t), [4, this.props.unfollowUser(n)]) : [2];
                                        case 1:
                                            return i.sent(), Object(f.e)(w, {
                                                login: this.props.channelLogin
                                            }, function(e) {
                                                var t = e.user;
                                                return t && t.self && (t.self.follower ? t.self.follower.disableNotifications = null : t.self.follower = {
                                                    __typename: "FollowerEdge",
                                                    disableNotifications: null
                                                }), e
                                            }), this.props.onUnfollow && this.props.onUnfollow(this.props.channelLogin), [2]
                                    }
                                })
                            })
                        }, t.getFollowData = function() {
                            return t.props.followData ? t.props.followData : t.props.data
                        }, t.setButtonContainerRef = function(e) {
                            t.buttonContainerRef !== e && (t.removeEventListeners(), t.buttonContainerRef = e, t.addEventListeners())
                        }, t.onMouseEnter = function() {
                            t.buttonContainerRef && t.state.isFollowing && t.props.showTooltips && t.props.tooltipLayer.show({
                                from: t.buttonContainerRef,
                                label: t.getUnfollowText(),
                                direction: I.ac.Top
                            })
                        }, t.onMouseLeave = function() {
                            t.hideTooltip()
                        }, t.hideTooltip = function() {
                            t.props.tooltipLayer.hide()
                        }, t.onAnimatedButtonComplete = function() {
                            t.props.onToggleAnimationComplete && t.props.onToggleAnimationComplete(t.state.isFollowing)
                        }, t.login = function() {
                            var e;
                            t.props.useContextualModals && Object(N.b)() === N.a.TwoStep ? e = {
                                modalType: T.e.TwoStep,
                                targetChannel: t.props.channelName || t.props.channelLogin
                            } : t.props.useContextualModals && Object(N.b)() === N.a.Split && (e = {
                                modalType: T.e.Combined,
                                targetChannel: t.props.channelName || t.props.channelLogin
                            }), t.props.login(e)
                        }, t
                    }
                    return d.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.reportInteractive(), this.addEventListeners()
                    }, t.prototype.componentDidUpdate = function() {
                        this.props.channelLogin && !this.userDataLoaded() || !this.props.updateContainerWidth || this.props.updateContainerWidth(), this.reportInteractive()
                    }, t.prototype.componentWillMount = function() {
                        var e = this.props.data || this.props.followData;
                        if (e) {
                            var t = e.user;
                            this.setState({
                                isFollowing: t && t.self && t.self.follower && null !== t.self.follower.disableNotifications || !1,
                                disableNotifications: t && t.self && t.self.follower && t.self.follower.disableNotifications
                            })
                        }
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        if (e.data && !e.data.loading && !e.data.error) {
                            var t = e.data.user;
                            this.setState({
                                isFollowing: t && t.self && t.self.follower && null !== t.self.follower.disableNotifications || !1,
                                disableNotifications: !(t && t.self && t.self.follower && null !== t.self.follower.disableNotifications) || t.self.follower.disableNotifications
                            })
                        }
                    }, t.prototype.componentWillUnmount = function() {
                        this.removeEventListeners()
                    }, t.prototype.render = function() {
                        if (!this.props.isLoggedIn) return this.renderFollowButton(this.login);
                        if (this.props.showLoadingPlaceholder && (!this.props.data || this.props.data.loading)) return this.renderPlaceholder();
                        if (this.props.hideWhenFollowing || this.props.currentUserLogin === this.props.channelLogin || !this.props.followData && (!this.props.data || this.props.data.loading || this.props.data.error || !this.props.data.user)) return null;
                        var e = null;
                        return e = !this.state.isFollowing || this.props.animatedButton ? this.renderFollowButton(this.toggleFollowing) : this.props.hideDropdownWhenFollowing ? this.renderUnfollowButton() : this.renderUnfollowButtonWithDropdown(), u.createElement(I.Xa, {
                            refDelegate: this.setButtonContainerRef
                        }, e)
                    }, t.prototype.renderPlaceholder = function() {
                        switch (this.props.size) {
                            case I.D.Large:
                                return u.createElement(I.ib, {
                                    width: this.props.fullWidthButton ? void 0 : 93,
                                    height: 36
                                });
                            case I.D.Small:
                                return u.createElement(I.ib, {
                                    width: this.props.fullWidthButton ? void 0 : 66,
                                    height: 24
                                });
                            default:
                                return u.createElement(I.ib, {
                                    width: this.props.fullWidthButton ? void 0 : 70,
                                    height: 30
                                })
                        }
                    }, t.prototype.renderFollowButton = function(e) {
                        var t = this.props.isHostedFollow && this.props.channelName ? Object(p.d)("Follow {username}", {
                                username: this.props.channelName
                            }, "FollowButton") : Object(p.d)("Follow", "FollowButton"),
                            n = c("follow-btn--animated"),
                            i = this.state.isFollowing,
                            r = null;
                        return r = this.props.animatedButton ? u.createElement("div", {
                            className: n
                        }, u.createElement(_.a, {
                            text: i ? void 0 : t,
                            icon: i ? I.tb.Heart : I.tb.FollowHollow,
                            iconOnHover: i ? I.tb.Unheart : I.tb.Heart,
                            type: i ? I.F.Text : I.F.Default,
                            typeOnHover: i ? I.F.Alert : void 0,
                            onClick: e,
                            onClickAnimationEnd: this.onAnimatedButtonComplete
                        })) : u.createElement(I.z, d.__assign({
                            ariaLabel: t,
                            blurAfterClick: this.props.blurAfterClick,
                            "data-a-target": b.FollowButton,
                            "data-test-selector": b.FollowButton,
                            icon: this.getButtonIcon(),
                            onClick: e,
                            size: this.props.size,
                            tabIndex: this.props.tabIndex,
                            type: this.props.followButtonType || I.F.Default,
                            fullWidth: this.props.fullWidthButton
                        }, Object(I.jc)(this.props)), this.props.followUIType === k.IconOnly ? null : t), this.props.useContextualModals && !this.props.isLoggedIn && Object(N.b)() === N.a.Balloon ? u.createElement(m.a, {
                            onToggle: this.handleContextBalloonToggle,
                            "data-test-selector": b.FollowButtonWithContextualModal
                        }, r, u.createElement(I.u, {
                            direction: this.props.balloonDirection ? this.props.balloonDirection : I.v.BottomRight,
                            size: I.w.Medium
                        }, u.createElement(S.a, {
                            targetUserDisplayName: this.props.channelName || this.props.channelLogin,
                            source: o.a.FollowButton
                        }))) : r
                    }, t.prototype.renderUnfollowButton = function(e) {
                        var t = this.getUnfollowText(),
                            n = c("follow-btn follow-btn--following", {
                                "follow-btn--with-dropdown": e
                            });
                        return u.createElement("button", d.__assign({
                            className: n,
                            "aria-label": t,
                            "data-a-target": b.UnfollowButton,
                            "data-test-selector": b.UnfollowButton,
                            tabIndex: this.props.tabIndex,
                            onClick: this.toggleFollowing
                        }, Object(I.jc)(this.props)), u.createElement(I.Xa, {
                            padding: {
                                x: .5
                            },
                            className: "follow-btn__inner",
                            fullWidth: !0,
                            fullHeight: !0
                        }, u.createElement("span", {
                            className: "follow-btn__label",
                            "data-test-selector": b.UnfollowButtonLabel
                        }, this.props.unfollowUIType !== k.TextOnly && u.createElement(I.sb, {
                            asset: I.tb.Heart
                        }), this.props.unfollowUIType !== k.IconOnly && u.createElement(I.Xa, {
                            padding: {
                                x: .5
                            }
                        }, Object(p.d)("Following", "FollowButton"))), u.createElement("span", {
                            className: "follow-btn__label-hover",
                            "data-test-selector": b.UnfollowButtonLabelHover
                        }, this.props.unfollowUIType !== k.TextOnly && u.createElement(I.sb, {
                            asset: I.tb.Unheart
                        }), this.props.unfollowUIType !== k.IconOnly && u.createElement(I.Xa, {
                            padding: {
                                x: .5
                            }
                        }, t))))
                    }, t.prototype.renderUnfollowButtonWithDropdown = function() {
                        var e = this.props.balloonDirection ? this.props.balloonDirection : I.v.BottomRight;
                        return u.createElement(I.Xa, {
                            display: I.X.Flex,
                            className: "follow-btn",
                            "data-test-selector": b.UnfollowButtonWithDropdown
                        }, u.createElement(I.Xa, null, this.renderUnfollowButton(!0)), u.createElement(m.a, {
                            display: I.X.InlineFlex,
                            openByDefault: this.state.showDropdown
                        }, u.createElement("button", {
                            tabIndex: this.props.tabIndex,
                            "aria-label": Object(p.d)("Dropdown", "FollowButton"),
                            className: "follow-btn__dropdown-toggle",
                            "data-a-target": "follow-dropdown-toggle"
                        }, u.createElement(I.Xa, {
                            justifyContent: I.Wa.Center,
                            display: I.X.Flex,
                            alignItems: I.f.Stretch,
                            fullHeight: !0
                        }, u.createElement(I.sb, {
                            asset: I.tb.GlyphArrDown
                        }))), u.createElement(I.u, {
                            size: I.w.Small,
                            direction: e,
                            "data-a-target": "follow-notifications-balloon"
                        }, u.createElement(I.Xa, {
                            padding: 1
                        }, u.createElement(O.a, {
                            channelLogin: this.props.channelLogin
                        })))))
                    }, t.prototype.getButtonIcon = function() {
                        var e = this.props.hollowIcons && !this.state.isFollowing ? I.tb.FollowHollow : I.tb.Heart;
                        return this.props.followUIType === k.TextOnly ? void 0 : e
                    }, t.prototype.reportInteractive = function() {
                        F(this.props) ? this.props.latencyTracking.reportInteractive() : this.props.data && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.addEventListeners = function() {
                        this.buttonContainerRef && (this.buttonContainerRef.addEventListener("mouseover", this.onMouseEnter), this.buttonContainerRef.addEventListener("mouseleave", this.onMouseLeave))
                    }, t.prototype.removeEventListeners = function() {
                        this.buttonContainerRef && (this.buttonContainerRef.removeEventListener("mouseover", this.onMouseEnter), this.buttonContainerRef.removeEventListener("mouseleave", this.onMouseLeave))
                    }, t.prototype.getUnfollowText = function() {
                        return Object(p.d)("Unfollow", "FollowButton")
                    }, t
                }(u.Component),
                M = Object(a.compose)(Object(h.a)(w, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.channelLogin
                            }
                        }
                    },
                    skip: F
                }), Object(h.a)(D, {
                    name: "followUser"
                }), Object(h.a)(A, {
                    name: "unfollowUser"
                }), Object(R.c)(), Object(C.b)("FollowButton"))(L);

            function F(e) {
                return !e.isLoggedIn || (!e.channelLogin || (!!e.followData || e.channelLogin === e.currentUserLogin))
            }
            var U = Object(r.connect)(function(e) {
                var t = Object(l.e)(e);
                return {
                    currentUserLogin: t && t.login,
                    isLoggedIn: Object(l.f)(e)
                }
            }, function(e) {
                return Object(a.bindActionCreators)({
                    login: function(e) {
                        return Object(s.e)(o.a.FollowButton, e)
                    }
                }, e)
            })(M);
            n.d(t, "b", function() {
                return k
            }), n.d(t, !1, function() {}), n.d(t, "a", function() {
                return U
            })
        },
        eFQ3: function(e, t, n) {
            "use strict";
            var i = n("/MKj"),
                r = n("9C/b"),
                a = n("fvjX"),
                o = n("mrSG"),
                s = n("Pw1c"),
                l = n("q1tI"),
                d = [];
            s.onchange = function() {
                d.forEach(function(e) {
                    e()
                })
            };
            var c, u = n("1/iK"),
                p = n("y5D0"),
                m = n("d0ua"),
                h = n("kRBY"),
                f = n("XDQu"),
                g = n("KxT4"),
                v = n("S1Za"),
                E = n("AKMF"),
                b = n("TSYQ"),
                k = n("1hWM"),
                y = n("imBb"),
                S = n("cr+I"),
                T = n("/7QA"),
                N = n("Fxe2"),
                _ = n("f00E"),
                C = n("vRsq"),
                O = n("2xye"),
                R = n("kz7j"),
                I = n("ndwU"),
                D = n("GnwI");
            ! function(e) {
                e.LoadStart = "loadstart", e.Error = "error", e.LoadedMetadata = "loadedmetadata", e.CanPlay = "canplay", e.Playing = "playing", e.Waiting = "waiting", e.Seeking = "seeking", e.Seeked = "seeked", e.Ended = "ended", e.DurationChange = "durationchange", e.TimeUpdate = "timeupdate", e.Play = "play", e.Pause = "pause", e.VolumeChange = "volumechange", e.RateChange = "ratechange"
            }(c || (c = {}));
            var A = n("kxrW"),
                w = n("oKCn"),
                L = n("lTz2"),
                M = n("C94G"),
                F = (n("Qqhu"), n("Addw")),
                U = "debug",
                P = {
                    amazon: !1,
                    comscore: !1,
                    google: !1,
                    nielsen: !1
                },
                B = {
                    allowfullscreen: !0,
                    externalfullscreen: !1,
                    autoplay: !0,
                    branding: !1,
                    channelInfo: !1,
                    controls: !0,
                    debug: !1,
                    height: "100%",
                    playsinline: !0,
                    player: w.f.Site,
                    showInfo: !1,
                    showtheatre: !1,
                    trackingProperties: {
                        client_build_id: T.p.config.buildID,
                        client_app: T.p.session.clientApp
                    },
                    width: "100%",
                    oauth_token: "",
                    gdpr: P
                },
                x = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.lastGDPR = P, n.hasInitializedOffsets = !1, n.logger = T.k.withCategory("video-player"), n.initializePlayer = function(e) {
                            var t = o.__assign({}, B, {
                                allowfullscreen: !n.props.disableFullscreen,
                                autoplay: !n.props.paused,
                                externalfullscreen: n.props.fullscreen.supported(),
                                gdpr: n.createPlayerGDPROptions(n.props),
                                muted: n.props.muted,
                                showtheatre: !n.props.disableTheatreButton,
                                trackingProperties: o.__assign({}, B.trackingProperties, {
                                    platform: T.o.getPlatform()
                                })
                            });
                            n.playerBuffering = n.registerBufferingEvent(!!n.props.paused), n.playerPlayed = n.registerPlayedEvent(!!n.props.paused);
                            var i = n.props.playerTypeOverride;
                            i && (t.player = i, n.playerType = i, i === w.f.ClipsEditing && (t.muted = !0)), n.props.channelLogin && (t.channel = n.props.channelLogin, n.lastSetChannel = n.props.channelLogin), n.props.collectionID && (t.collection = n.props.collectionID), n.props.clipSlug && (t.clip = n.props.clipSlug), n.props.vodID && (t.video = Object(C.p)(n.props.vodID), T.o.setVideoPlayerTrackingData({
                                vodID: n.props.vodID
                            })), n.props.showChannelInfoOnHover && (t.showInfo = n.props.showChannelInfoOnHover), void 0 !== n.props.persistUserPreferences && (t.persistUserPreferences = n.props.persistUserPreferences), void 0 !== n.props.nextVideoOffset && n.props.nextVideoOffset >= 0 && (t.time = Object(F.a)(n.props.nextVideoOffset)), t.oauth_token = n.props.authToken || "", t.debug = "true" === S.parse(window.location.search)[U], n.logger.debug("Initializing", t);
                            var r = new e(n.playerRef, t);
                            n.player = r, r.addEventListener(A.a.PlayerReady, n.onPlayerReady), r.addEventListener(A.a.CompanionAdBuffered, n.companionAdBuffered), r.addEventListener(A.a.Online, n.onStreamStatusOnline), r.addEventListener(A.a.Offline, n.onStreamStatusOffline), r.addEventListener(c.Ended, n.onStreamStatusOffline), r.addEventListener(c.Play, n.onPlayerPlay), r.addEventListener(c.Playing, n.onPlayerPlaying), r.addEventListener(c.Seeking, n.onSeeking), r.addEventListener(c.Seeked, n.onSeek), r.addEventListener(c.TimeUpdate, n.onTimeUpdate), r.addEventListener(A.a.TheatreChange, n.onTheatreChange), r.addEventListener(A.a.FullscreenChange, n.onFullScreenChange), r.addEventListener(A.a.ExternalFullscreenChange, n.onExternalFullScreenChange), r.addEventListener(A.a.ClipsModerationOpen, n.onClipsModerationOpen), r.addEventListener(A.a.TransitionToCollectionVOD, n.onTransitionToCollectionVod), r.addEventListener(A.a.TransitionToRecommendedVOD, n.onTransitionToRecommendedVod), r.addEventListener(A.a.OpenStream, n.onOpenStream), r.addEventListener(c.Pause, n.onPause), r.addEventListener(A.a.PersistenPlayerToggle, n.onPersistentPlayerToggled), r.addEventListener(c.LoadedMetadata, n.onMetadataLoaded), r.addEventListener(c.VolumeChange, n.onVolumeChange), r.addEventListener(A.a.PromptLoginModal, n.props.promptLogin), r.addEventListener(A.a.FocusPlayer, n.onFocusPlayer), r.addEventListener(A.a.FollowChannel, n.followChannel), r.addEventListener(A.a.UnfollowChannel, n.unfollowChannel), r.addEventListener(A.a.ContentRestricted, n.onContentRestricted), k.extensionService.registerPlayer(n.player), k.extensionService.setPlayerWindow(window), n.props.onInit && n.props.onInit(r), n.maybeAttachToWindow(n.props)
                        }, n.attachRef = function(e) {
                            return n.playerRef = e
                        }, n.onMetadataLoaded = function() {
                            var e = n.player && n.player.getSessionInfo();
                            e && (n.logger.debug("Got player session info from player instance", e), T.o.setVideoPlayerTrackingData({
                                broadcastID: e.broadcastId,
                                playSessionID: e.playSessionId
                            })), n.setState({
                                metadataLoaded: !0
                            })
                        }, n.onOpenStream = function() {
                            if (n.props.playerTypeOverride === w.f.Frontpage && n.player)
                                if (n.props.channelLogin) T.p.history.push("/" + n.props.channelLogin);
                                else if (n.props.vodID) {
                                var e = Math.floor(n.player.getCurrentTime());
                                T.p.history.push("/videos/" + n.props.vodID + "?t=" + Object(F.a)(e))
                            } else n.props.collectionID && T.p.history.push("/collections/" + n.props.collectionID)
                        }, n.onFocusPlayer = function() {
                            n.player && n.props.onFocusPlayer && n.props.channelLogin && n.props.onFocusPlayer()
                        }, n.followChannel = function() {
                            n.player && n.props.followChannel && n.props.channelLogin && n.props.followChannel()
                        }, n.unfollowChannel = function() {
                            n.player && n.props.unfollowChannel && n.props.channelLogin && n.props.unfollowChannel()
                        }, n.onPlayerReady = function() {
                            n.player && (n.logger.debug("Ready"), n.props.latencyTracking.reportInteractive(), n.hasPlayed = !1, n.playerLoaded && n.props.latencyTracking.reportCustomEvent(n.playerLoaded), n.lastFollowingProp && n.player.setFollowing(n.lastFollowingProp), n.setState({
                                playerInitialized: !0
                            }, n.updatePlayerTrackingDataFromProps))
                        }, n.onPlayerPlay = function() {
                            n.logger.debug("onPlay"), n.reportPlayerBuffering(), n.lastPausedProp = !1, n.togglePause(!1)
                        }, n.companionAdBuffered = function(e) {
                            n.props.onCompanionAdBuffered && e && n.props.onCompanionAdBuffered(e)
                        }, n.onPlayerPlaying = function() {
                            n.logger.debug("onPlaying"), n.reportPlayerPlayed(), n.hasPlayed || n.onStreamStatusOnline(), n.hasPlayed = !0, n.lastPausedProp = !1, n.state.playerRefID !== n.props.activeVideoPlayerRefID && n.props.reportPlayerInstanceStarted && n.props.reportPlayerInstanceStarted(n.state.playerRefID), n.togglePause(!1)
                        }, n.onPause = function() {
                            n.logger.debug("onPause"), n.lastPausedProp = !0, n.togglePause(!0)
                        }, n.togglePause = function(e) {
                            n.logger.debug("togglePause", e), n.state.playerPaused !== e && (n.setState({
                                playerPaused: e
                            }), n.props.onPauseToggled && n.props.onPauseToggled(e))
                        }, n.onVolumeChange = function(e) {
                            if (n.logger.debug("Volume Change"), n.player) {
                                var t = e.muted;
                                n.lastMutedProp = t, n.toggleMute(t)
                            }
                        }, n.toggleMute = function(e) {
                            n.setState({
                                playerMuted: e
                            }), n.props.onMuteToggled && n.props.onMuteToggled(e)
                        }, n.onStreamStatusOnline = function() {
                            n.props.onStreamStatusChange && n.props.onStreamStatusChange(A.a.Online)
                        }, n.onStreamStatusOffline = function() {
                            n.props.onStreamStatusChange && n.props.onStreamStatusChange(A.a.Offline)
                        }, n.onTheatreChange = function(e) {
                            e ? (n.logger.debug("Theatre Entered"), n.props.enableTheatreMode && !n.props.theatreModeEnabled && n.props.enableTheatreMode()) : (n.logger.debug("Theatre Exited"), n.props.disableTheatreMode && n.props.theatreModeEnabled && n.props.disableTheatreMode())
                        }, n.onFullScreenChange = function() {
                            n.player && (n.logger.debug("Fullscreen change", n.player.fullscreen), n.player.fullscreen !== n.state.isFullScreen && n.setState({
                                isFullScreen: n.player.fullscreen
                            }))
                        }, n.onExternalFullScreenChange = function() {
                            n.player && (n.logger.debug("External Fullscreen change", n.player.fullscreen), n.player.fullscreen !== n.state.isFullScreen && (n.player.fullscreen ? n.enterFullscreen() : n.exitFullscreen()))
                        }, n.onClipsModerationOpen = function(e) {
                            n.player && (n.logger.debug("Clips Moderation Open", e), n.props.onClipsModerationOpen && n.props.onClipsModerationOpen(e))
                        }, n.onTwilightFullscreenChange = function() {
                            var e = n.props.fullscreen.element(),
                                t = !!e && !!n.playerRef && e.contains(n.playerRef);
                            n.state.isFullScreen && !t && n.exitFullscreen()
                        }, n.onSeek = function() {
                            n.props.onSeek && n.player && n.props.onSeek(n.player.getCurrentTime())
                        }, n.onSeeking = function() {
                            n.props.onSeeking && n.player && n.props.onSeeking(n.player.getCurrentTime())
                        }, n.onTimeUpdate = function() {
                            n.props.onVideoTimeChange && n.player && n.props.onVideoTimeChange(n.player.getCurrentTime())
                        }, n.onHistoryChange = function() {
                            n.state.isFullScreen && n.exitFullscreen()
                        }, n.onTransitionToCollectionVod = function(e) {
                            if (n.props.onNavigationRequest) {
                                var t = {};
                                e.vodId && (t.videoID = Object(N.a)(e.vodId)), e.collectionId && (t.collectionID = e.collectionId), n.props.onNavigationRequest(t)
                            }
                        }, n.onTransitionToRecommendedVod = function(e) {
                            if (n.props.onNavigationRequest) {
                                var t = {};
                                e.vodId && (t.videoID = Object(N.a)(e.vodId)), n.props.onNavigationRequest(t)
                            }
                        }, n.onPersistentPlayerToggled = function() {
                            n.props.togglePersistentPlayer && n.props.togglePersistentPlayer()
                        }, n.onContentRestricted = function() {
                            n.logger.debug("onContentRestricted - a restriction gate has prevented video playback."), n.hasRestrictedContent = !0
                        }, n.updatePlayerTrackingData = function(e) {
                            n.state.playerInitialized && n.player && n.player.setTrackingProperties(function(e, t) {
                                var n = T.o.getLastPageview(),
                                    i = {
                                        host_channel: e.hostChannel,
                                        collapse_right: !e.rightColumnExpanded,
                                        collapse_left: !e.sideNavExpanded,
                                        squad_stream_id: e.squadStreamID,
                                        squad_stream_session_id: e.squadStreamSessionID,
                                        squad_stream_presentation_id: e.squadStreamPresentationID
                                    },
                                    r = e.history.location && e.history.location.state || {},
                                    a = {
                                        item_tracking_id: r.item_tracking_id,
                                        item_position: r.item_position,
                                        row_position: r.row_position,
                                        row_name: r.row_name,
                                        search_query_id: r.search_query_id,
                                        search_session_id: r.search_session_id,
                                        tag_filter_set: r.tag_filter_set,
                                        tag_set: r.tag_set,
                                        tag_streamer_set: r.tag_streamer_set
                                    };
                                return t && (n ? t.debug("Tracking data updated.", {
                                    pageviewProperties: n,
                                    updates: i,
                                    locationStateTrackingProps: a
                                }) : t.debug("pageviewProperties not found; only hosting status updated", {
                                    pageviewProperties: n,
                                    updates: i,
                                    locationStateTrackingProps: a
                                })), o.__assign({}, a, n, i)
                            }(e, T.k))
                        }, n.updatePlayerTrackingDataFromProps = function() {
                            n.updatePlayerTrackingData(n.props)
                        }, n.updatePlayerType = function(e) {
                            var t = e || B.player;
                            n.player && n.playerType !== t && (n.player.setPlayerType(t), n.playerType = t)
                        }, n.maybeRecordClip = function() {
                            n.player && n.state.playerInitialized && !Object(I.a)() && n.player.recordClip()
                        }, n.createPlayerGDPROptions = function(e) {
                            return {
                                amazon: !e.gdprBlockAmazonContent,
                                comscore: !e.gdprBlockComScoreContent,
                                google: !e.gdprBlockGoogleContent,
                                nielsen: !e.gdprBlockNielsenContent
                            }
                        }, n.updatePlayerGDPRConsent = function(e) {
                            if (n.player) try {
                                var t = n.createPlayerGDPROptions(e);
                                t.amazon !== n.lastGDPR.amazon && n.player.setAmazonGDPRConsent(t.amazon), t.comscore !== n.lastGDPR.comscore && n.player.setComscoreGDPRConsent(t.comscore), t.google !== n.lastGDPR.google && n.player.setGoogleGDPRConsent(t.google), t.nielsen !== n.lastGDPR.nielsen && n.player.setNielsenGDPRConsent(t.nielsen), n.lastGDPR = t
                            } catch (e) {
                                var i = {
                                        playerHasGDPR: "function" == typeof n.player.setAmazonGDPRConsent,
                                        userAgent: navigator.userAgent
                                    },
                                    r = "Failed to set player GDPR consent. Data: " + JSON.stringify(i);
                                n.logger.error(new Error("Failed to set player GDPR consent"), r, {
                                    data: i
                                })
                            }
                        }, n.playerCreated = n.registerCreatedEvent(), n.playerLoaded = n.registerLoadedEvent(), n.state = {
                            playerInitialized: !1,
                            isFullScreen: !1,
                            playerPaused: !!t.paused,
                            playerMuted: t.muted,
                            playerRefID: Object(_.a)(),
                            metadataLoaded: !1
                        }, n.playerType = t.playerTypeOverride || B.player, n.lastSetChannel = t.channelLogin, n.lastPausedProp = t.paused, n.lastMutedProp = t.muted, n.lastFollowingProp = t.viewerIsFollowing, n.lastGDPR = n.createPlayerGDPROptions(t), t.fullscreen.addChangeListener(n.onTwilightFullscreenChange), t.instanceRef && t.instanceRef(n), n
                    }
                    return o.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.playerCreated && this.props.latencyTracking.reportCustomEvent(this.playerCreated), this.bindHotKeys(), this.historyUnlistener = this.props.history.listen(this.onHistoryChange), Object(M.b)(), Object(M.a)(this.initializePlayer), T.o.eventEmitter.addListener(O.SpadeEventType.Pageview, this.updatePlayerTrackingDataFromProps)
                    }, t.prototype.componentWillUpdate = function(e, t) {
                        if (t.playerInitialized) {
                            if (this.updatePlayerTrackingData(e), this.updatePlayerType(e.playerTypeOverride), this.player && t.isFullScreen !== this.player.fullscreen && this.player.setFullscreen(t.isFullScreen), this.player) {
                                var n = this.props.editing || {},
                                    i = e.editing || {},
                                    r = n.startOffset,
                                    a = n.endOffset,
                                    o = n.videoUrl,
                                    s = n.isPostEdit;
                                o !== i.videoUrl && i.slug && this.player.setEditClipStream({
                                    videoUrl: i.videoUrl,
                                    slug: i.slug
                                }), s !== i.isPostEdit && this.player.updateClipsEditing({
                                    isPostEdit: i.isPostEdit
                                }), (!(this.hasInitializedOffsets || !i.startOffset || !i.endOffset) || r !== i.startOffset || a !== i.endOffset) && (this.player.updateEditingOffsets([{
                                    startOffset: i.startOffset,
                                    endOffset: i.endOffset
                                }]), this.hasInitializedOffsets || (this.hasInitializedOffsets = !0))
                            }
                            this.player && e.clipSlug && this.props.clipSlug !== e.clipSlug && this.player.setClip(e.clipSlug), this.player && e.theatreModeEnabled !== this.player.getTheatre() && this.player.setTheatre(e.theatreModeEnabled), this.player && e.miniModeEnabled !== this.props.miniModeEnabled && this.player.setMiniPlayerMode(!!e.miniModeEnabled), this.player && t.playerPaused !== this.lastPausedProp && (t.playerPaused ? this.player.pause() : t.playerPaused || this.player.play(), this.lastPausedProp = t.playerPaused), this.player && t.playerMuted !== this.lastMutedProp && (this.player.setMuted(!!t.playerMuted), this.lastMutedProp = !!t.playerMuted), this.player && e.viewerIsFollowing !== this.lastFollowingProp && (this.player.setFollowing(!!e.viewerIsFollowing), this.lastFollowingProp = !!e.viewerIsFollowing), this.updatePlayerGDPRConsent(e);
                            var l = e.channelLogin !== this.lastSetChannel;
                            if (this.player && e.channelLogin && (l || Object(L.b)(this.props, e))) return this.player.pause(), this.resetLatencyTracking(!!e.paused), this.player.setChannel(e.channelLogin), this.lastSetChannel = e.channelLogin, void T.o.setVideoPlayerTrackingData({
                                vodID: void 0
                            });
                            var d = e.collectionID && this.props.collectionID !== e.collectionID,
                                c = e.vodID && this.props.vodID !== e.vodID;
                            if (d || c) {
                                var u = e.vodID ? Object(C.p)(e.vodID) : "";
                                if ("" !== u && T.o.setVideoPlayerTrackingData({
                                        vodID: e.vodID
                                    }), !this.player) return;
                                return this.player.pause(), this.resetLatencyTracking(!!e.paused), void(d || e.collectionID && c ? this.player.setCollection(e.collectionID, u, e.nextVideoOffset) : this.player.setVideo(u, e.nextVideoOffset))
                            }
                            void 0 !== e.nextVideoOffset && e.nextVideoOffset >= 0 && this.props.nextVideoOffset !== e.nextVideoOffset && this.player && this.player.setCurrentTime(e.nextVideoOffset), this.player && e.videoMarkers && this.lastVideoMarkersProp !== e.videoMarkers && (this.lastVideoMarkersProp = e.videoMarkers, this.player.setVideoMarkers(e.videoMarkers));
                            var p = e.playerQualityOverride;
                            this.player && t.metadataLoaded && p && p !== this.lastPlayerQualityOverride && (this.player.setQuality(p), this.lastPlayerQualityOverride = p);
                            var m = e.playerMaxAutoOverride;
                            this.player && t.metadataLoaded && m && m.group !== this.lastPlayerMaxAutoOverride && (this.player.setAutoMaxVideoSize(m.width, m.height), this.lastPlayerMaxAutoOverride = m.group)
                        }
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        if (void 0 !== e.paused && this.props.paused !== e.paused) this.togglePause(e.paused);
                        else {
                            var t = this.props.activeVideoPlayerRefID,
                                n = e.activeVideoPlayerRefID;
                            this.props.allowSimultaneousPlaying || t === n || (n === this.state.playerRefID ? this.togglePause(!1) : n !== this.state.playerRefID && this.togglePause(!0))
                        }
                        void 0 !== e.muted && this.props.muted !== e.muted && this.toggleMute(e.muted)
                    }, t.prototype.render = function() {
                        var e = b("video-player", {
                                "video-player--theatre": this.props.theatreModeEnabled,
                                "video-player--theatre-whispers": this.props.theatreModeEnabled && this.props.isWhispersBottomBarVisible && !this.state.isFullScreen,
                                "video-player--logged-in": this.props.isLoggedIn,
                                "video-player--fullscreen": this.state.isFullScreen
                            }),
                            t = b("video-player__container", {
                                "video-player__container--clips": w.a.includes(this.playerType)
                            });
                        return l.createElement("div", {
                            className: b(e),
                            "data-test-selector": "video-player"
                        }, l.createElement("div", {
                            className: t,
                            ref: this.attachRef
                        }))
                    }, t.prototype.componentWillUnmount = function() {
                        this.state.playerRefID === this.props.activeVideoPlayerRefID && this.props.reportPlayerInstanceStarted && this.props.reportPlayerInstanceStarted(void 0), this.unbindHotKeys(), this.historyUnlistener && this.historyUnlistener(), this.maybeDetachFromWindow(), this.state.isFullScreen && this.exitFullscreen(), this.props.fullscreen.removeChangeListener(this.onTwilightFullscreenChange), this.props.onDestroy && this.props.onDestroy(), T.o.eventEmitter.removeListener(O.SpadeEventType.Pageview, this.updatePlayerTrackingDataFromProps), this.player && (this.player.removeEventListener(A.a.PlayerReady, this.onPlayerReady), this.player.removeEventListener(A.a.CompanionAdBuffered, this.companionAdBuffered), this.player.removeEventListener(A.a.Online, this.onStreamStatusOnline), this.player.removeEventListener(A.a.Offline, this.onStreamStatusOffline), this.player.removeEventListener(c.Ended, this.onStreamStatusOffline), this.player.removeEventListener(c.Play, this.onPlayerPlay), this.player.removeEventListener(c.Playing, this.onPlayerPlaying), this.player.removeEventListener(A.a.TheatreChange, this.onTheatreChange), this.player.removeEventListener(A.a.TransitionToCollectionVOD, this.onTransitionToCollectionVod), this.player.removeEventListener(A.a.FullscreenChange, this.onFullScreenChange), this.player.removeEventListener(A.a.ExternalFullscreenChange, this.onExternalFullScreenChange), this.player.removeEventListener(c.Seeking, this.onSeeking), this.player.removeEventListener(c.Seeked, this.onSeek), this.player.removeEventListener(c.TimeUpdate, this.onTimeUpdate), this.player.removeEventListener(A.a.OpenStream, this.onOpenStream), this.player.removeEventListener(c.Pause, this.onPause), this.player.removeEventListener(A.a.PersistenPlayerToggle, this.onPersistentPlayerToggled), this.player.removeEventListener(c.LoadedMetadata, this.onMetadataLoaded), this.player.removeEventListener(c.VolumeChange, this.onVolumeChange), this.player.removeEventListener(A.a.PromptLoginModal, this.props.promptLogin), this.player.removeEventListener(A.a.FocusPlayer, this.onFocusPlayer), this.player.removeEventListener(A.a.FollowChannel, this.followChannel), this.player.removeEventListener(A.a.UnfollowChannel, this.unfollowChannel), this.player.removeEventListener(A.a.ContentRestricted, this.onContentRestricted), k.extensionService.unregisterPlayer(), this.player.destroy()), T.o.setVideoPlayerTrackingData({
                            vodID: void 0
                        })
                    }, t.prototype.trackMiniPlayerAction = function(e, t) {
                        this.player && this.state.playerInitialized && this.player.trackMiniPlayerAction(e, t)
                    }, t.prototype.resetLatencyTracking = function(e) {
                        this.logger.debug("Resetting latency tracking."), this.hasBuffered = !1, this.hasPlayed = !1, this.hasPaused = !1, this.hasRestrictedContent = !1, this.props.latencyTracking.resetCustomEvents(R.a.Player), this.playerBuffering = this.registerBufferingEvent(e), this.playerPlayed = this.registerPlayedEvent(e), this.playerCreated = void 0, this.playerLoaded = void 0
                    }, t.prototype.registerBufferingEvent = function(e) {
                        return this.props.latencyTracking.registerCustomEvent({
                            benchmark: 1e3,
                            group: R.a.Player,
                            key: R.b.PlayerBuffering,
                            label: R.c.Buffering,
                            doNotTrack: e
                        })
                    }, t.prototype.registerCreatedEvent = function() {
                        return this.props.latencyTracking.registerCustomEvent({
                            benchmark: 1e3,
                            group: R.a.Player,
                            key: R.b.PlayerCreated,
                            label: R.c.Created
                        })
                    }, t.prototype.registerLoadedEvent = function() {
                        return this.props.latencyTracking.registerCustomEvent({
                            benchmark: 2500,
                            group: R.a.Player,
                            key: R.b.PlayerLoaded,
                            label: R.c.Init
                        })
                    }, t.prototype.registerPlayedEvent = function(e) {
                        return this.props.latencyTracking.registerCustomEvent({
                            benchmark: 4e3,
                            group: R.a.Player,
                            key: R.b.PlayerPlayed,
                            label: R.c.FirstFrame,
                            doNotTrack: e
                        })
                    }, t.prototype.shouldSuppressPlaybackTracking = function() {
                        return this.hasPaused || this.hasRestrictedContent || !this.player || !this.player.autoplay
                    }, t.prototype.reportPlayerBuffering = function() {
                        if (!this.hasBuffered && (this.hasBuffered = !0, this.playerBuffering)) {
                            if (this.shouldSuppressPlaybackTracking() && !this.playerBuffering.doNotTrack) return void this.logger.warn("Playback tracking has been suppressed. Buffering latency data will be not be tracked.");
                            this.props.latencyTracking.reportCustomEvent(this.playerBuffering)
                        }
                    }, t.prototype.reportPlayerPlayed = function() {
                        if (!this.hasPlayed && this.playerPlayed) {
                            if (this.shouldSuppressPlaybackTracking() && !this.playerPlayed.doNotTrack) return void this.logger.warn("Playback tracking has been suppressed. First frame latency data will be not be tracked.");
                            this.props.latencyTracking.reportCustomEvent(this.playerPlayed)
                        }
                    }, t.prototype.enterFullscreen = function() {
                        this.setState({
                            isFullScreen: !0
                        }), this.props.fullscreenRef ? this.props.fullscreen.enable(this.props.fullscreenRef) : this.props.fullscreen.enable(this.playerRef), this.props.onFullscreenChange && this.props.onFullscreenChange(!0)
                    }, t.prototype.exitFullscreen = function() {
                        this.state.isFullScreen && (this.setState({
                            isFullScreen: !1
                        }), this.props.fullscreen.disable(), this.props.onFullscreenChange && this.props.onFullscreenChange(!1))
                    }, t.prototype.maybeAttachToWindow = function(e) {
                        S.parse(window.location.search).attachPlayer && e.attachToWindow && this.player && (window.player = this.player)
                    }, t.prototype.maybeDetachFromWindow = function() {
                        window.player = void 0
                    }, t.prototype.bindHotKeys = function() {
                        y.bind("alt+x", this.maybeRecordClip)
                    }, t.prototype.unbindHotKeys = function() {
                        y.unbind("alt+x")
                    }, t.defaultProps = {
                        paused: !1
                    }, t
                }(l.Component),
                V = Object(D.b)("VideoPlayer")(x);
            var j = Object(a.compose)(Object(i.connect)(function(e) {
                return {
                    isWhispersBottomBarVisible: Object(f.b)(e),
                    theatreModeEnabled: e.ui.theatreModeEnabled,
                    rightColumnExpanded: e.ui.rightColumnExpanded,
                    sideNavExpanded: e.ui.sideNavExpanded,
                    isLoggedIn: Object(h.f)(e),
                    authToken: Object(h.a)(e),
                    activeVideoPlayerRefID: Object(E.a)(e),
                    gdprBlockAmazonContent: Object(g.g)(e, g.c.Amazon),
                    gdprBlockComScoreContent: Object(g.g)(e, g.c.ComScore),
                    gdprBlockGoogleContent: Object(g.g)(e, g.c.Google),
                    gdprBlockNielsenContent: Object(g.g)(e, g.c.Nielsen)
                }
            }, function(e) {
                return Object(a.bindActionCreators)({
                    enableTheatreMode: m.F,
                    disableTheatreMode: m.C,
                    togglePersistentPlayer: m.N,
                    reportPlayerInstanceStarted: v.b,
                    promptLogin: function() {
                        return Object(p.e)(u.a.ReportHoster)
                    }
                }, e)
            }), function(e) {
                return function(t) {
                    function n() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.addChangeListener = function(e) {
                            d.push(e)
                        }, e.removeChangeListener = function(e) {
                            d = d.filter(function(t) {
                                return t !== e
                            })
                        }, e
                    }
                    return o.__extends(n, t), n.prototype.render = function() {
                        var t = {
                            fullscreen: {
                                addChangeListener: this.addChangeListener,
                                removeChangeListener: this.removeChangeListener,
                                supported: this.supported,
                                element: this.element,
                                enable: this.enable,
                                disable: this.disable
                            }
                        };
                        return l.createElement(e, o.__assign({}, t, this.props))
                    }, n.prototype.supported = function() {
                        return !!s.enabled
                    }, n.prototype.element = function() {
                        return s.element
                    }, n.prototype.enable = function(e) {
                        s.request(e)
                    }, n.prototype.disable = function() {
                        s.exit()
                    }, n
                }(l.Component)
            }, r.a)(V);

            function W(e, t, n) {
                if (e.collectionID || !e.videoID)
                    if (e.collectionID && e.videoID) {
                        if (n && n.currentVideoID && n.currentCollectionID && n.currentVideoID === e.videoID && n.currentCollectionID === e.collectionID) return;
                        t.push("/videos/" + e.videoID + "?collection=" + e.collectionID)
                    } else !e.collectionID || e.videoID ? T.k.withCategory("video-player").error(new Error("No collection or video specified from the emitted player transition event."), "No collection or video specified from the emitted player transition event.") : t.push("/collections/" + e.collectionID);
                else t.push("/videos/" + e.videoID)
            }
            n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, "b", function() {
                return j
            }), n.d(t, "c", function() {
                return W
            }), n.d(t, "a", function() {
                return w.f
            })
        },
        eJ65: function(e, t, n) {
            "use strict";
            var i = n("bq0i");
            n.d(t, "a", function() {
                return i.a
            })
        },
        eLB1: function(e, t, n) {
            "use strict";
            var i;
            n.d(t, "a", function() {
                    return i
                }),
                function(e) {
                    e.Loading = "loading", e.Error = "error", e.Skip = "skip", e.BelowMinimumAge = "below-min-age", e.ConsentRequired = "consent-required", e.ConsentSaved = "consent-saved"
                }(i || (i = {}))
        },
        ezmq: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "clipsFullVideoButtonClip"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Clip"
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
                                value: "videoOffsetSeconds"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "durationSeconds"
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
                                value: "broadcaster"
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
                                value: "video"
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
                                        value: "broadcastType"
                                    },
                                    arguments: [],
                                    directives: []
                                }]
                            }
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
                                        value: "displayName"
                                    },
                                    arguments: [],
                                    directives: []
                                }]
                            }
                        }]
                    }
                }, {
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ClipsFullVideoButton"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "slug"
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
                                value: "clip"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "slug"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "slug"
                                    }
                                }
                            }],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "FragmentSpread",
                                    name: {
                                        kind: "Name",
                                        value: "clipsFullVideoButtonClip"
                                    },
                                    directives: []
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 258
                }
            };
            n.loc.source = {
                body: "fragment clipsFullVideoButtonClip on Clip {\nid\nvideoOffsetSeconds\ndurationSeconds\ntitle\nbroadcaster {\nid\nlogin\n}\nvideo {\nid\nbroadcastType\n}\ngame {\nid\ndisplayName\n}\n}\nquery ClipsFullVideoButton($slug: ID!) {\nclip(slug: $slug) {\n...clipsFullVideoButtonClip\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "f0/i": function(e, t, n) {},
        fDgN: function(e, t, n) {},
        fQWD: function(e, t, n) {
            "use strict";
            var i = n("vHGB");
            n.d(t, "a", function() {
                return i.a
            })
        },
        gIsd: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ReportUserModal_ReportReasons"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "content"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "ReportContentType"
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
                                value: "reportReasons"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "content"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "content"
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
                                        value: "text"
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
                    end: 114
                }
            };
            n.loc.source = {
                body: "query ReportUserModal_ReportReasons($content: ReportContentType!) {\nreportReasons(content: $content) {\nid\ntext\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        gTu3: function(e, t, n) {
            "use strict";
            var i;
            n.d(t, "a", function() {
                    return i
                }),
                function(e) {
                    e[e.Default = 0] = "Default", e[e.Recipient = 1] = "Recipient", e[e.Sender = 2] = "Sender"
                }(i || (i = {}))
        },
        htqZ: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "LiveNotificationsToggle_ToggleNotifications"
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
                                    value: "FollowUserInput"
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
                                value: "followUser"
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
                                        value: "follow"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
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
                                                                value: "follower"
                                                            },
                                                            arguments: [],
                                                            directives: [],
                                                            selectionSet: {
                                                                kind: "SelectionSet",
                                                                selections: [{
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "disableNotifications"
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
                    end: 178
                }
            };
            n.loc.source = {
                body: "mutation LiveNotificationsToggle_ToggleNotifications($input: FollowUserInput!) {\nfollowUser(input: $input) {\nfollow {\nuser {\nid\nself {\nfollower {\ndisableNotifications\n}\n}\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        i46O: function(e, t, n) {
            var i = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "LiveNotificationsToggle_User"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "login"
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
                                        value: "login"
                                    }
                                }
                            }],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "FragmentSpread",
                                    name: {
                                        kind: "Name",
                                        value: "followButtonFragment"
                                    },
                                    directives: []
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 164
                }
            };
            i.loc.source = {
                body: '#import "twilight/common/queries/follow-button-fragment.gql"\nquery LiveNotificationsToggle_User($login: String!) {\nuser(login: $login) {\n...followButtonFragment\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var r = {};
            i.definitions = i.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !r[t] && (r[t] = !0, !0)
                })
            }(n("V94A").definitions)), e.exports = i
        },
        i4un: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            }), n.d(t, "e", function() {
                return l
            }), n.d(t, "d", function() {
                return d
            }), n.d(t, "c", function() {
                return c
            }), n.d(t, "b", function() {
                return u
            });
            var i, r, a = n("/7QA"),
                o = n("D7An");

            function s() {
                return a.p.experiments.getAssignment(o.b.SocialButtonsMove) || i.Control
            }

            function l() {
                return s() === i.Control
            }

            function d() {
                return s() === i.VariantA
            }

            function c() {
                return s() === i.VariantB
            }

            function u() {
                return a.p.experiments.getAssignment(o.b.ContextualAuthModals) || r.Control
            }! function(e) {
                e.Control = "control", e.VariantA = "variant_a", e.VariantB = "variant_b"
            }(i || (i = {})),
            function(e) {
                e.Control = "control", e.Balloon = "balloon", e.Split = "split", e.TwoStep = "two_step"
            }(r || (r = {}))
        },
        iS14: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return l
            });
            var i = n("mrSG"),
                r = n("yR8l"),
                a = n("8jSG"),
                o = n("cMjZ"),
                s = n("zixI");

            function l() {
                var e = this;
                return Object(r.a)(s, {
                    props: function(t) {
                        return {
                            unblockUserMutation: function(n, r) {
                                return i.__awaiter(e, void 0, void 0, function() {
                                    return i.__generator(this, function(e) {
                                        switch (e.label) {
                                            case 0:
                                                return t.mutate ? [4, t.mutate({
                                                    variables: {
                                                        input: {
                                                            targetUserID: n
                                                        }
                                                    },
                                                    optimisticResponse: {
                                                        unblockUser: {
                                                            __typename: "UnblockUserPayload",
                                                            targetUser: {
                                                                __typename: "User",
                                                                id: n
                                                            }
                                                        }
                                                    },
                                                    update: function(e) {
                                                        var t = e.readFragment({
                                                            id: Object(o.a)(r),
                                                            fragment: a
                                                        });
                                                        t && (t.blockedUsers = t.blockedUsers.filter(function(e) {
                                                            return null !== e && e.id !== n
                                                        }), e.writeFragment({
                                                            id: Object(o.a)(r),
                                                            fragment: a,
                                                            data: t
                                                        }))
                                                    }
                                                })] : [3, 2];
                                            case 1:
                                                return e.sent(), [3, 3];
                                            case 2:
                                                throw new Error("unblockUserMutation is not ready");
                                            case 3:
                                                return [2]
                                        }
                                    })
                                })
                            }
                        }
                    }
                })
            }
        },
        ibn3: function(e, t, n) {},
        iyGE: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("yR8l"),
                a = n("Pub/"),
                o = n("HzXE"),
                s = 60,
                l = 60 * s,
                d = 24 * l,
                c = 7 * d,
                u = 4 * c;
            var p = n("4w0E");

            function m(e) {
                var t = this;
                return Object(r.a)(p, {
                    props: function(n) {
                        return {
                            banUserMutation: function(r, p, m) {
                                return void 0 === p && (p = null), void 0 === m && (m = null), i.__awaiter(t, void 0, void 0, function() {
                                    var t;
                                    return i.__generator(this, function(h) {
                                        switch (h.label) {
                                            case 0:
                                                if (t = e(n.ownProps).channelID, !n.mutate) return [3, 5];
                                                h.label = 1;
                                            case 1:
                                                return h.trys.push([1, 3, , 4]), [4, n.mutate({
                                                    variables: {
                                                        input: {
                                                            channelID: t,
                                                            bannedUserLogin: r,
                                                            expiresIn: p && function(e) {
                                                                if (!e) return "0s";
                                                                var t = e,
                                                                    n = "";
                                                                if (t > u) {
                                                                    var i = Math.floor(t / u);
                                                                    t -= i * u, n += i + "mo"
                                                                }
                                                                if (t > c) {
                                                                    var r = Math.floor(t / c);
                                                                    t -= r * c, n += r + "w"
                                                                }
                                                                if (t > d) {
                                                                    var a = Math.floor(t / d);
                                                                    t -= a * d, n += a + "d"
                                                                }
                                                                if (t > l) {
                                                                    var o = Math.floor(t / l);
                                                                    t -= o * l, n += o + "h"
                                                                }
                                                                if (t > s) {
                                                                    var p = Math.floor(t / s);
                                                                    t -= p * s, n += p + "m"
                                                                }
                                                                return t > 0 && (n += t + "s"), n
                                                            }(p),
                                                            reason: m
                                                        }
                                                    },
                                                    update: function(e, n) {
                                                        return function(e, t, n) {
                                                            if (t && t.data && t.data.banUserFromChatRoom && t.data.banUserFromChatRoom.ban && t.data.banUserFromChatRoom.ban.bannedUser && t.data.banUserFromChatRoom.ban.bannedUser.id) {
                                                                var r = Object(a.a)(e, n, t.data.banUserFromChatRoom.ban.bannedUser.id);
                                                                if (!r) return;
                                                                e.writeQuery({
                                                                    query: o,
                                                                    variables: {
                                                                        targetUserID: t.data.banUserFromChatRoom.ban.bannedUser.id,
                                                                        channelID: n
                                                                    },
                                                                    data: i.__assign({}, r, {
                                                                        chatRoomBanStatus: {
                                                                            isPermanent: t.data.banUserFromChatRoom.ban.isPermanent,
                                                                            __typename: "ChatRoomBanStatus"
                                                                        }
                                                                    })
                                                                })
                                                            }
                                                        }(e, n, t)
                                                    }
                                                })];
                                            case 2:
                                                return [2, h.sent().data];
                                            case 3:
                                                throw h.sent(), new Error("Unable to ban user");
                                            case 4:
                                                return [3, 6];
                                            case 5:
                                                throw new Error("Ban user mutation is not ready");
                                            case 6:
                                                return [2]
                                        }
                                    })
                                })
                            }
                        }
                    }
                })
            }
            n.d(t, "a", function() {
                return m
            })
        },
        j0ar: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("TSYQ"),
                a = n("q1tI"),
                o = n("x1M1"),
                s = n("Ue10"),
                l = (n("9KaG"), function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.onImageLoad = function() {
                            n.setState({
                                imageLoaded: !0
                            })
                        }, n.onMouseOver = function() {
                            n.setState({
                                isHovering: !0
                            })
                        }, n.onMouseOut = function() {
                            n.setState({
                                isHovering: !1
                            })
                        }, n.renderImage = function() {
                            var e = null,
                                t = r("chat-image", {
                                    "chat-image__animated": !!n.props.cheerText && n.state.imageLoaded
                                }, n.props.className);
                            if (n.props.srcSet.themed) e = a.createElement(s.Pa, {
                                display: n.state.imageLoaded ? s.X.InlineBlock : s.X.Hide
                            }, a.createElement(o.a, {
                                alt: n.props.alt,
                                className: t,
                                defaultRes: n.props.srcKey,
                                onLoad: n.onImageLoad,
                                onMouseOver: n.onMouseOver,
                                onMouseOut: n.onMouseOut,
                                sources: n.props.srcSet
                            }));
                            else {
                                for (var i = [], l = 0, d = Object.keys(n.props.srcSet.sources); l < d.length; l++) {
                                    var c = d[l];
                                    i.push(n.props.srcSet.sources[c] + " " + c)
                                }
                                e = a.createElement(s.Pa, {
                                    display: n.state.imageLoaded ? s.X.InlineBlock : s.X.Hide
                                }, a.createElement("img", {
                                    className: t,
                                    onLoad: n.onImageLoad,
                                    onMouseOver: n.onMouseOver,
                                    onMouseOut: n.onMouseOut,
                                    src: n.props.srcSet.sources[n.props.srcKey],
                                    srcSet: i.join(","),
                                    alt: n.props.alt
                                }))
                            }
                            return e
                        }, n.renderPlaceholder = function() {
                            return n.state.imageLoaded ? null : a.createElement(s.Pa, {
                                display: s.X.InlineBlock
                            }, a.createElement(s.W, {
                                type: s.Vb.Span,
                                className: "chat-image__placeholder",
                                align: s.fc.Top
                            }, a.createElement(s.ib, {
                                height: 28,
                                width: 28
                            })))
                        }, n.state = {
                            imageLoaded: !1,
                            isHovering: !1
                        }, n
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e;
                        return e = this.state.isHovering && this.state.imageLoaded ? a.createElement(s.Yb, {
                            direction: this.props.tooltipDirection || s.ac.Top,
                            label: this.props.alt,
                            display: s.X.Inline,
                            offsetY: "0.9rem",
                            "data-a-target": "emote-name"
                        }, this.renderPlaceholder(), this.renderImage(), this.props.cheerText) : a.createElement("span", {
                            "data-a-target": "emote-name"
                        }, this.renderPlaceholder(), this.renderImage(), this.props.cheerText), this.props.cheerText ? a.createElement(s.W, {
                            type: s.Vb.Span,
                            noWrap: !0
                        }, e) : e
                    }, t
                }(a.Component));
            n.d(t, "a", function() {
                return l
            })
        },
        jeZI: function(e, t, n) {},
        jsEL: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("q1tI"),
                a = n("/7QA"),
                o = n("u5aL"),
                s = n("Ue10"),
                l = (n("wC0O"), {
                    TITLE: "clips-modal-title",
                    MAIN_BODY: "clips-modal-main-body",
                    SUCCESS_BODY: "clips-modal-success-body",
                    ERROR_BODY: "clips-modal-error-body",
                    SUBMIT_BUTTON: "clips-modal-submit-button",
                    CANCEL_BUTTON: "clips-modal-cancel-button"
                }),
                d = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderSuccess = function() {
                            return t.props.successContent ? r.createElement(s.Eb, {
                                "data-test-selector": l.SUCCESS_BODY,
                                padding: {
                                    x: 2,
                                    y: 1
                                },
                                margin: {
                                    bottom: 1
                                },
                                borderMarked: !0,
                                background: s.r.Alt,
                                fullWidth: !0
                            }, r.createElement(s.W, {
                                type: s.Vb.Strong
                            }, t.props.successContent)) : null
                        }, t.renderError = function() {
                            return t.props.errorContent ? r.createElement(s.Eb, {
                                "data-test-selector": l.ERROR_BODY,
                                padding: {
                                    x: 1,
                                    y: .5
                                },
                                margin: {
                                    bottom: 1
                                },
                                borderMarked: !0,
                                background: s.r.Alt,
                                fullWidth: !0
                            }, r.createElement(s.W, {
                                type: s.Vb.Strong,
                                color: s.O.Error
                            }, t.props.errorContent)) : null
                        }, t.onSubmit = function() {
                            t.props.onSubmit()
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return this.props.successContent ? r.createElement(o.a, {
                            onClickOut: this.props.onClose
                        }, r.createElement(s.Eb, {
                            padding: 2,
                            background: s.r.Base,
                            className: "clip-modal"
                        }, this.renderSuccess(), r.createElement(s.Xa, {
                            display: s.X.Flex,
                            justifyContent: s.Wa.Center
                        }, r.createElement(s.Xa, {
                            margin: {
                                x: 1
                            }
                        }, r.createElement(s.z, {
                            "data-test-selector": l.CANCEL_BUTTON,
                            onClick: this.props.onClose
                        }, Object(a.d)("Close", "ClipsModal")))))) : r.createElement(o.a, {
                            onClickOut: this.props.onClose
                        }, r.createElement(s.Eb, {
                            padding: 2,
                            background: s.r.Base,
                            className: "clip-modal"
                        }, r.createElement(s.Eb, {
                            "data-test-selector": l.TITLE,
                            borderBottom: !0,
                            margin: {
                                bottom: 2
                            },
                            padding: {
                                bottom: 1
                            }
                        }, this.props.title), r.createElement(s.Eb, {
                            "data-test-selector": l.MAIN_BODY,
                            borderBottom: !0,
                            margin: {
                                bottom: 2
                            },
                            padding: {
                                bottom: 2
                            }
                        }, this.renderError(), this.props.body), r.createElement(s.Xa, {
                            display: s.X.Flex,
                            justifyContent: s.Wa.Center
                        }, r.createElement(s.Xa, {
                            margin: {
                                x: 1
                            }
                        }, r.createElement(s.z, {
                            "data-test-selector": l.CANCEL_BUTTON,
                            type: s.F.Text,
                            onClick: this.props.onClose
                        }, Object(a.d)("Cancel", "ClipsModal"))), r.createElement(s.Xa, {
                            margin: {
                                x: 1
                            }
                        }, r.createElement(s.z, {
                            "data-test-selector": l.SUBMIT_BUTTON,
                            type: this.props.buttonType ? this.props.buttonType : s.F.Default,
                            onClick: this.onSubmit,
                            disabled: this.props.submitDisabled
                        }, this.props.buttonContent), this.props.isLoading && r.createElement(s.Za, {
                            delay: 0
                        })))))
                    }, t
                }(r.Component),
                c = n("iyGE"),
                u = n("GnwI"),
                p = 86400,
                m = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isLoading: !1,
                            hasErrored: !1,
                            hasSucceeded: !1
                        }, t.renderTitle = function() {
                            return t.props.isTemporary ? r.createElement(s.W, {
                                type: s.Vb.H5,
                                ellipsis: !0
                            }, Object(a.d)("Timeout this Clip Creator for 24 hours from Your Channel", "ClipsModalBanUser")) : r.createElement(s.W, {
                                type: s.Vb.H5,
                                ellipsis: !0
                            }, Object(a.d)("Ban this Clip Creator from Your Channel", "ClipsModalBanUser"))
                        }, t.renderBodyText = function() {
                            return t.props.isTemporary ? r.createElement(s.W, null, Object(a.d)("{clipCreator} will temporarily be timed out from creating clips and chatting in your channel for 24 hours.", {
                                clipCreator: t.props.targetUser.displayName
                            }, "ClipsModalBanUser")) : r.createElement(s.W, null, Object(a.d)("{clipCreator} will be permanently banned from creating clips and chatting in your channel.", {
                                clipCreator: t.props.targetUser.displayName
                            }, "ClipsModalBanUser"))
                        }, t.renderButtonText = function() {
                            return t.props.isTemporary ? Object(a.d)("Timeout User", "ClipsModalBanUser") : Object(a.d)("Ban User", "ClipsModalBanUser")
                        }, t.renderSuccess = function() {
                            return t.state.hasSucceeded ? Object(a.d)("Success!", "ClipsModalBanUser") : null
                        }, t.renderFailure = function() {
                            return t.state.hasErrored ? t.props.isTemporary ? Object(a.d)("There was a problem timing out this clip creator", "ClipsModalBanUser") : Object(a.d)("There was a problem banning this clip creator", "ClipsModalBanUser") : null
                        }, t.banUser = function() {
                            return i.__awaiter(t, void 0, void 0, function() {
                                var e, t, n;
                                return i.__generator(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            this.setState({
                                                isLoading: !0,
                                                hasSucceeded: !1,
                                                hasErrored: !1
                                            }), e = this.props.targetUser.login, t = this.props.isTemporary ? this.props.banUserMutation(e, p) : this.props.banUserMutation(e), i.label = 1;
                                        case 1:
                                            return i.trys.push([1, 3, , 4]), [4, t];
                                        case 2:
                                            return !(n = i.sent().banUserFromChatRoom) || n.error ? this.setState({
                                                hasErrored: !0,
                                                isLoading: !1
                                            }) : this.setState({
                                                hasSucceeded: !0,
                                                isLoading: !1
                                            }), [3, 4];
                                        case 3:
                                            return i.sent(), this.setState({
                                                hasErrored: !0,
                                                isLoading: !1
                                            }), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return r.createElement(d, {
                            onSubmit: this.banUser,
                            onClose: this.props.onClose,
                            title: this.renderTitle(),
                            body: this.renderBodyText(),
                            buttonContent: this.renderButtonText(),
                            buttonType: s.F.Alert,
                            submitDisabled: this.state.isLoading || this.state.hasSucceeded,
                            successContent: this.renderSuccess(),
                            errorContent: this.renderFailure(),
                            isLoading: this.state.isLoading
                        })
                    }, t
                }(r.Component),
                h = Object(u.b)("ClipsModalBanUser")(Object(c.a)(function(e) {
                    return {
                        channelID: e.broadcasterID
                    }
                })(m)),
                f = n("yR8l"),
                g = n("vUXZ");

            function v(e) {
                return Object(f.a)(g, e)
            }
            var E = n("DJtx"),
                b = (n("n9Ey"), {
                    isLoading: !1,
                    hasErrored: !1,
                    hasSucceeded: !1
                }),
                k = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.onDeleteClick = function() {
                            return i.__awaiter(n, void 0, void 0, function() {
                                return i.__generator(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            this.setState({
                                                isLoading: !0,
                                                hasSucceeded: !1,
                                                hasErrored: !1
                                            }), e.label = 1;
                                        case 1:
                                            return e.trys.push([1, 3, , 4]), this.props.data.clip ? [4, this.props.deleteClip(this.props.slug)] : [2];
                                        case 2:
                                            return e.sent(), this.setState({
                                                isLoading: !1,
                                                hasSucceeded: !0
                                            }), [3, 4];
                                        case 3:
                                            return e.sent(), this.setState({
                                                isLoading: !1,
                                                hasErrored: !0
                                            }), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, n.state = b, n
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = [r.createElement(s.W, {
                            key: "title",
                            type: s.Vb.H4
                        }, Object(a.d)("Delete This Clip", "ClipsModalDelete")), r.createElement(s.Xa, {
                            key: "message",
                            margin: {
                                top: 1
                            }
                        }, r.createElement(s.W, {
                            type: s.Vb.P,
                            color: s.O.Alt2
                        }, Object(a.d)("This clip will be permanently deleted.", "ClipsModalDelete")))];
                        if (!this.props.data.clip) return null;
                        var t = null;
                        this.props.data.clip.curator && (t = r.createElement("span", null, " • ", Object(a.d)("Clipped by {curator}", {
                            curator: this.props.data.clip.curator.login
                        }, "ClipsModalDelete")));
                        var n = r.createElement(s.Eb, {
                            display: s.X.Flex,
                            flexWrap: s.Ba.NoWrap
                        }, r.createElement(s.Xa, {
                            className: "clips-modal-delete__thumb",
                            margin: {
                                right: 1
                            }
                        }, r.createElement(s.o, {
                            ratio: s.p.Aspect16x9
                        }, r.createElement("img", {
                            src: this.props.data.clip.thumbnailURL
                        }))), r.createElement(s.Xa, null, r.createElement(s.W, {
                            type: s.Vb.H5
                        }, this.props.data.clip.title), r.createElement(s.W, {
                            color: s.O.Alt2
                        }, Object(a.d)("{created, date, medium}", {
                            created: new Date(this.props.data.clip.createdAt)
                        }, "ClipsModalDelete"), t), r.createElement(s.W, {
                            color: s.O.Alt2
                        }, Object(a.d)("{viewCount, number} views", {
                            viewCount: this.props.data.clip.viewCount
                        }, "ClipsModalDelete"))));
                        return r.createElement(d, {
                            onSubmit: this.onDeleteClick,
                            onClose: this.props.onClose,
                            title: e,
                            body: n,
                            buttonContent: Object(a.d)("Delete", "ClipsModalDelete"),
                            buttonType: s.F.Alert,
                            submitDisabled: this.state.hasSucceeded || this.state.isLoading,
                            successContent: this.state.hasSucceeded ? Object(a.d)("Success!", "ClipsModalDelete") : null,
                            errorContent: this.state.hasErrored ? Object(a.d)("There was a problem deleting this clip.", "ClipsModalDelete") : null,
                            isLoading: this.state.isLoading
                        })
                    }, t
                }(r.Component),
                y = Object(f.a)(E)(v({
                    props: function(e) {
                        return {
                            deleteClip: function(t) {
                                return i.__awaiter(void 0, void 0, void 0, function() {
                                    var n;
                                    return i.__generator(this, function(i) {
                                        switch (i.label) {
                                            case 0:
                                                return i.trys.push([0, 2, , 3]), [4, e.mutate({
                                                    variables: {
                                                        input: {
                                                            slugs: [t]
                                                        }
                                                    }
                                                })];
                                            case 1:
                                                return i.sent(), e.ownProps.onDelete && e.ownProps.onDelete(t), [3, 3];
                                            case 2:
                                                throw n = i.sent(), a.k.error(n, "Failed to delete clip"), n;
                                            case 3:
                                                return [2]
                                        }
                                    })
                                })
                            }
                        }
                    }
                })(k)),
                S = n("oJmH"),
                T = n("Vsf8"),
                N = {
                    isLoading: !1,
                    hasErrored: !1,
                    hasSucceeded: !1
                },
                _ = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.deleteAll = function() {
                            return i.__awaiter(n, void 0, void 0, function() {
                                return i.__generator(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            this.setState({
                                                isLoading: !0,
                                                hasSucceeded: !1,
                                                hasErrored: !1
                                            }), e.label = 1;
                                        case 1:
                                            return e.trys.push([1, 3, , 4]), [4, this.props.deleteAllClips(this.props.broadcastID, this.props.videoID)];
                                        case 2:
                                            return e.sent(), this.setState({
                                                isLoading: !1,
                                                hasSucceeded: !0
                                            }), [3, 4];
                                        case 3:
                                            return e.sent(), this.setState({
                                                isLoading: !1,
                                                hasErrored: !0
                                            }), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, n.renderSuccess = function() {
                            return n.state.hasSucceeded ? Object(a.d)("A request has been made to delete the clip. Please wait a few minutes for this to take effect.", "ClipsModalDeleteAll") : null
                        }, n.renderFailure = function() {
                            return n.state.hasErrored ? Object(a.d)("There was a problem deleting this clip.", "ClipsModalDeleteAll") : null
                        }, n.state = N, n
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = r.createElement(s.W, {
                            type: s.Vb.P
                        }, Object(a.d)("This clip and all other clips created from the same video will be permanently deleted.", "ClipsModalDeleteAll"));
                        return r.createElement(d, {
                            onSubmit: this.deleteAll,
                            onClose: this.props.onClose,
                            title: r.createElement(s.W, {
                                type: s.Vb.H4
                            }, Object(a.d)("Delete All Clips from Related Video", "ClipsModalDeleteAll")),
                            body: e,
                            buttonContent: Object(a.d)("Delete", "ClipsModalDeleteAll"),
                            buttonType: s.F.Alert,
                            submitDisabled: this.state.isLoading || this.state.hasSucceeded || "" === this.props.broadcastID,
                            isLoading: this.state.isLoading,
                            successContent: this.renderSuccess(),
                            errorContent: this.renderFailure()
                        })
                    }, t
                }(r.Component),
                C = Object(S.compose)(Object(u.b)("ClipsModalDeleteAll"), v({
                    props: function(e) {
                        return {
                            deleteAllClips: function(t, n) {
                                return i.__awaiter(void 0, void 0, void 0, function() {
                                    var r, o, s;
                                    return i.__generator(this, function(i) {
                                        switch (i.label) {
                                            case 0:
                                                return i.trys.push([0, 6, , 7]), r = void 0, n ? [4, e.mutate({
                                                    variables: {
                                                        input: {
                                                            videoID: n
                                                        }
                                                    }
                                                })] : [3, 2];
                                            case 1:
                                                return o = i.sent(), r = o.data, [3, 5];
                                            case 2:
                                                return t ? [4, e.mutate({
                                                    variables: {
                                                        input: {
                                                            broadcastID: t
                                                        }
                                                    }
                                                })] : [3, 4];
                                            case 3:
                                                return o = i.sent(), r = o.data, [3, 5];
                                            case 4:
                                                throw new Error("Invalid broadcastID specified for deleteAllClips");
                                            case 5:
                                                return e.ownProps.onDeleteAll && e.ownProps.onDeleteAll(r.deleteClips.clips), [3, 7];
                                            case 6:
                                                throw s = i.sent(), a.k.error(s, "Failed to delete clips from VOD"), s;
                                            case 7:
                                                return [2]
                                        }
                                    })
                                })
                            }
                        }
                    }
                }), Object(f.a)(T, {
                    props: function(e) {
                        var t = e.data.clip;
                        return t ? {
                            videoID: t.video ? t.video.id : null,
                            broadcastID: t.broadcast.id
                        } : {
                            videoID: null,
                            broadcastID: ""
                        }
                    },
                    options: function(e) {
                        return {
                            variables: {
                                slug: e.slug
                            }
                        }
                    }
                }))(_),
                O = {
                    isLoading: !1,
                    hasErrored: !1,
                    hasSucceeded: !1
                },
                R = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.renderSuccess = function() {
                            return n.state.hasSucceeded ? Object(a.d)("Clips successfully deleted.", "ClipsModalBatchDelete") : null
                        }, n.renderError = function() {
                            return n.state.hasErrored ? Object(a.d)("There was a problem deleting this clip.", "ClipsModalBatchDelete") : null
                        }, n.onDeleteClick = function() {
                            return i.__awaiter(n, void 0, void 0, function() {
                                return i.__generator(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            this.setState({
                                                isLoading: !0,
                                                hasSucceeded: !1,
                                                hasErrored: !1
                                            }), e.label = 1;
                                        case 1:
                                            return e.trys.push([1, 3, , 4]), [4, this.props.deleteClips()];
                                        case 2:
                                            return e.sent(), this.setState({
                                                hasSucceeded: !0,
                                                isLoading: !1
                                            }), [3, 4];
                                        case 3:
                                            return e.sent(), this.setState({
                                                hasErrored: !0,
                                                isLoading: !1
                                            }), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, n.state = O, n
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = r.createElement(s.W, {
                                type: s.Vb.H4
                            }, Object(a.d)("Delete these clips?", "ClipsModalBatchDelete")),
                            t = r.createElement(s.W, {
                                type: s.Vb.P
                            }, Object(a.d)("These clips will be permanently deleted. Are you sure?", "ClipsModalBatchDelete"));
                        return r.createElement(d, {
                            onSubmit: this.onDeleteClick,
                            onClose: this.props.onClose,
                            title: e,
                            body: t,
                            buttonContent: Object(a.d)("Delete", "ClipsModalBatchDelete"),
                            buttonType: s.F.Alert,
                            submitDisabled: this.state.hasSucceeded || this.state.isLoading,
                            isLoading: this.state.isLoading,
                            successContent: this.renderSuccess(),
                            errorContent: this.renderError()
                        })
                    }, t
                }(r.Component),
                I = v({
                    props: function(e) {
                        return {
                            deleteClips: function() {
                                return i.__awaiter(void 0, void 0, void 0, function() {
                                    var t;
                                    return i.__generator(this, function(n) {
                                        switch (n.label) {
                                            case 0:
                                                return n.trys.push([0, 2, , 3]), [4, e.mutate({
                                                    variables: {
                                                        input: {
                                                            slugs: e.ownProps.clipSlugs
                                                        }
                                                    }
                                                })];
                                            case 1:
                                                return n.sent(), e.ownProps.onBatchDelete && e.ownProps.onBatchDelete(), [3, 3];
                                            case 2:
                                                throw t = n.sent(), a.k.error(t, "Failed to delete clips"), t;
                                            case 3:
                                                return [2]
                                        }
                                    })
                                })
                            }
                        }
                    }
                })(R);
            n.d(t, "a", function() {
                return d
            }), n.d(t, "b", function() {
                return h
            }), n.d(t, "d", function() {
                return y
            }), n.d(t, "e", function() {
                return C
            }), n.d(t, "c", function() {
                return I
            })
        },
        kSkr: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "BlockUser"
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
                                    value: "BlockUserInput"
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
                                value: "blockUser"
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
                                        value: "targetUser"
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
                    end: 94
                }
            };
            n.loc.source = {
                body: "mutation BlockUser($input: BlockUserInput!) {\nblockUser(input: $input) {\ntargetUser {\nid\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        kxrW: function(e, t, n) {
            "use strict";
            var i;
            n.d(t, "a", function() {
                    return i
                }),
                function(e) {
                    e.PlayerInit = "init", e.ContentShowing = "contentShowing", e.CompanionAdBuffered = "companionadbuffered", e.PlaybackStatistics = "playbackStatistics", e.ChansubRequired = "chansubRequired", e.VideoFailure = "videoFailure", e.Formats = "videoFormats", e.ABSStreamFormatChange = "abs_stream_format_change", e.FormatChanged = "videoFormatChanged", e.TimeChange = "timeChange", e.BufferChange = "bufferChange", e.SegmentChange = "segmentchange", e.UsherFailError = "usherFail", e.CaptionUpdate = "captions", e.SeekFailed = "seekfailed", e.VariantSwitchRequest = "variantSwitchRequested", e.ViewersChange = "viewerschange", e.StreamLoaded = "streamLoaded", e.VideoLoaded = "videoLoaded", e.VideoPaused = "videoPaused", e.QualityChange = "qualitychange", e.Online = "online", e.Offline = "offline", e.Restricted = "restricted", e.CastingChange = "castingchange", e.TheatreChange = "theatrechange", e.MidrollRequested = "midrollrequested", e.ManifestExtraInfo = "manifestExtraInfo", e.TransitionToCollectionVOD = "transitionToCollectionVod", e.TransitionToRecommendedVOD = "transitionToRecommendedVod", e.StitchedAdStart = "stitchedadstart", e.StichedAdEnd = "stitchedadend", e.PersistenPlayerToggle = "persistentPlayerEnableToggle", e.StatsUpdate = "statsupdate", e.PromptLoginModal = "prompt login modal", e.OpenStream = "openStream", e.PlayerReady = "ready", e.FullscreenChange = "fullscreenchange", e.ExternalFullscreenChange = "externalfullscreenchange", e.ClipsModerationOpen = "clips-moderation-open", e.FocusPlayer = "focusPlayer", e.FollowChannel = "followChannel", e.UnfollowChannel = "unfollowChannel", e.ContentRestricted = "contentRestricted"
                }(i || (i = {}))
        },
        lTz2: function(e, t, n) {
            "use strict";

            function i(e, t) {
                return !(!e && !t) && (!t || !e || (t.channelLogin !== e.channelLogin || t.vodID !== e.vodID || t.collectionID !== e.collectionID))
            }

            function r(e) {
                return {
                    channelLogin: e.channelLogin,
                    vodID: e.vodID,
                    collectionID: e.collectionID
                }
            }

            function a(e, t) {
                return !(!e && !t) && (!t || !e || (e.vodID && !t.vodID || e.collectionID && !t.collectionID))
            }
            n.d(t, "c", function() {
                return i
            }), n.d(t, "a", function() {
                return r
            }), n.d(t, "b", function() {
                return a
            })
        },
        lX3L: function(e, t, n) {},
        "lpj/": function(e, t, n) {},
        n9Ey: function(e, t, n) {},
        "nTT+": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ClipsTrackingBase"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "slug"
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
                                value: "clip"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "slug"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "slug"
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
                                        value: "broadcaster"
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
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "isPartner"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "stream"
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
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 130
                }
            };
            n.loc.source = {
                body: "query ClipsTrackingBase($slug: ID!) {\nclip(slug: $slug) {\nid\nbroadcaster {\nid\nlogin\nisPartner\nstream {\nid\n}\n}\ngame {\nid\nname\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        ndwU: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            });
            var i = n("/7QA"),
                r = n("D7An");

            function a() {
                return "variant1" === i.p.experiments.getAssignment(r.b.ClipsOnTheBrain)
            }
        },
        ne44: function(e, t, n) {},
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
        oKCn: function(e, t, n) {
            "use strict";
            var i;
            n.d(t, "f", function() {
                    return i
                }), n.d(t, "a", function() {
                    return a
                }), n.d(t, "e", function() {
                    return r
                }), n.d(t, "b", function() {
                    return s
                }), n.d(t, "c", function() {
                    return l
                }), n.d(t, "d", function() {
                    return o
                }),
                function(e) {
                    e.Embed = "embed", e.Feed = "feed", e.Frontpage = "frontpage", e.Site = "site", e.Highlighter = "highlighter", e.Onboarding = "onboarding", e.ClipsViewing = "clips-viewing", e.ClipsWatchPage = "clips-watch", e.ClipsEditing = "clips-editing", e.ClipsEmbed = "clips-embed", e.Dashboard = "dashboard", e.SquadStreamPrimary = "squad-primary", e.SquadStreamSecondary = "squad-secondary", e.MultiviewPrimary = "multiview-primary", e.MultiviewSecondary = "multiview-secondary"
                }(i || (i = {}));
            var r, a = [i.ClipsEditing, i.ClipsViewing, i.ClipsEmbed];
            ! function(e) {
                e.Auto = "auto", e.HighHighFPS = "1080p60", e.High = "1080p30", e.MediumHighFPS = "720p60", e.Medium = "720p30", e.Low = "360p30", e.VeryLow = "160p30"
            }(r || (r = {}));
            var o, s = {
                    group: "auto",
                    width: 1e5,
                    height: 1e5
                },
                l = {
                    group: "360p30",
                    width: 640,
                    height: 360
                };
            ! function(e) {
                e.Delete = "delete", e.DeleteAll = "deleteAll", e.ReportUser = "report"
            }(o || (o = {}))
        },
        pwCS: function(e, t, n) {
            "use strict";
            var i = n("/MKj"),
                r = n("fvjX"),
                a = n("aCAx"),
                o = n("mrSG"),
                s = n("q1tI"),
                l = n("/7QA"),
                d = n("yR8l"),
                c = n("DMoW"),
                u = n("jsEL"),
                p = n("GnwI"),
                m = n("/HY+"),
                h = n("eFQ3"),
                f = n("oKCn"),
                g = n("QK1T"),
                v = n("OTul"),
                E = n("Ue10"),
                b = (n("qDtz"), n("vl+S")),
                k = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isDismissed: !1,
                            isShowingLiveCTA: !1
                        }, t.dismissWatchLivePrompt = function(e) {
                            e.preventDefault(), t.setState({
                                isDismissed: !0
                            })
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                        this.props.slug !== e.slug && this.setState({
                            isShowingLiveCTA: !1
                        }), this.updateLiveVisibility(e)
                    }, t.prototype.render = function() {
                        var e = this.props.data.clip;
                        if (this.state.isDismissed || !this.state.isShowingLiveCTA || !(e && e.game && e.broadcaster && e.broadcaster.stream && e.broadcaster.stream.id)) return null;
                        var t = e.broadcaster,
                            n = e.game,
                            i = t.login ? Object(v.c)(t.login) : Object(v.j)();
                        return s.createElement(E.Xa, {
                            className: "watch-live-prompt",
                            position: E.jb.Absolute,
                            zIndex: E.ic.Above,
                            attachRight: !0
                        }, s.createElement(E.U, {
                            to: i,
                            hoverUnderlineNone: !0,
                            targetBlank: !0
                        }, s.createElement(E.i, {
                            type: E.n.SlideInRight,
                            duration: E.k.Short,
                            enabled: !0
                        }, s.createElement(E.Eb, {
                            padding: 1,
                            elevation: 2,
                            background: E.r.Overlay
                        }, s.createElement(E.Xa, {
                            position: E.jb.Relative,
                            display: E.X.Flex,
                            flexDirection: E.Aa.Row,
                            alignItems: E.f.Center
                        }, s.createElement(E.Xa, {
                            position: E.jb.Absolute,
                            attachTop: !0,
                            attachLeft: !0,
                            zIndex: E.ic.Above
                        }, s.createElement(E.gb, {
                            label: Object(l.d)("LIVE", "WatchLivePrompt"),
                            type: E.hb.Live
                        })), s.createElement(E.G, {
                            row: !0
                        }, s.createElement(E.I, {
                            src: e.thumbnailURL,
                            alt: Object(l.d)("Clip Thumbnail", "ClipWatchLivePrompt"),
                            aspect: E.p.Aspect16x9,
                            size: E.J.Size6
                        }), s.createElement(E.H, null, s.createElement(E.Xa, {
                            className: "watch-live-prompt__copy",
                            padding: {
                                x: 1
                            }
                        }, s.createElement(E.W, {
                            type: E.Vb.H5,
                            color: E.O.Overlay,
                            lineHeight: E.Ya.Heading,
                            ellipsis: !0
                        }, Object(l.d)("Watch {displayName} Live", {
                            displayName: t.displayName || ""
                        }, "WatchLivePrompt")), s.createElement(E.W, {
                            type: E.Vb.H6,
                            color: E.O.OverlayAlt,
                            lineHeight: E.Ya.Heading,
                            ellipsis: !0
                        }, Object(l.d)("playing {gameName}", {
                            gameName: n.displayName
                        }, "WatchLivePrompt"))))), s.createElement(E.A, {
                            ariaLabel: Object(l.d)("Dismiss watch live prompt", "WatchLivePrompt"),
                            icon: E.tb.Close,
                            onClick: this.dismissWatchLivePrompt,
                            type: E.C.Default,
                            overlay: !0,
                            size: E.B.Large
                        }))))))
                    }, t.prototype.updateLiveVisibility = function(e) {
                        var t = e.currentTime,
                            n = e.data.clip && e.data.clip.durationSeconds;
                        if (n && t) {
                            var i = .6 * n;
                            !this.state.isShowingLiveCTA && t > i && 18 <= n && this.setState({
                                isShowingLiveCTA: !0
                            })
                        }
                    }, t = o.__decorate([Object(d.a)(b)], t)
                }(s.Component),
                y = (n("Kgiw"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        return s.createElement(E.Pa, {
                            position: E.jb.Absolute,
                            fullHeight: !0,
                            fullWidth: !0
                        }, s.createElement("div", {
                            ref: this.props.setPlayerWrapperRef
                        }, s.createElement(E.Eb, {
                            className: "clips-video-overlay",
                            fullHeight: !0,
                            fullWidth: !0,
                            position: E.jb.Absolute,
                            overflow: E.cb.Hidden
                        }, !Object(g.c)(window.navigator.userAgent) && this.props.playerType === h.a.ClipsViewing && s.createElement(k, {
                            slug: this.props.slug,
                            currentTime: this.props.currentTime
                        })), s.createElement(E.Xa, {
                            position: E.jb.Absolute,
                            fullHeight: !0,
                            fullWidth: !0
                        }, this.props.children)))
                    }, t
                }(s.Component)),
                S = (n("ibn3"), n("OTsR")),
                T = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isLoaded: !1
                        }, t.playerWrapperRef = null, t.onClipsModerationOpen = function(e) {
                            if (e === f.d.ReportUser) {
                                var n = t.props.data.clip && t.props.data.clip.broadcaster ? t.props.data.clip.broadcaster.id : "",
                                    i = t.props.data.clip && t.props.data.clip.curator ? t.props.data.clip.curator.id : "";
                                t.props.showModal(m.a, {
                                    title: Object(l.d)("Report this Clip", "ClipsViewModerationModals"),
                                    reportContext: {
                                        contentType: c.N.CLIP_REPORT,
                                        contentID: t.props.slug,
                                        targetUserID: n,
                                        additionalTrackingID: i
                                    },
                                    onClose: t.props.closeModal
                                })
                            }
                            e === f.d.Delete && t.props.showModal(u.d, {
                                slug: t.props.slug,
                                onClose: t.props.closeModal
                            }), e === f.d.DeleteAll && t.props.showModal(u.e, {
                                slug: t.props.slug,
                                onClose: t.props.closeModal
                            })
                        }, t.setDoneLoading = function() {
                            t.setState({
                                isLoaded: !0
                            }), t.props.onLoaded && t.props.onLoaded()
                        }, t.setPlayerWrapperRef = function(e) {
                            return t.playerWrapperRef = e
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.slug,
                            n = e.playerType;
                        return s.createElement(E.Xa, {
                            flexGrow: 1
                        }, s.createElement(E.o, {
                            ratio: E.p.Aspect16x9
                        }, s.createElement(y, {
                            slug: t,
                            setPlayerWrapperRef: this.setPlayerWrapperRef,
                            playerType: this.props.playerType,
                            currentTime: this.props.currentTime
                        }, s.createElement(E.Eb, {
                            className: "clips-video-wrapper",
                            position: E.jb.Relative,
                            fullWidth: !0,
                            fullHeight: !0
                        }, s.createElement(E.Eb, {
                            display: this.state.isLoaded ? E.X.Hide : E.X.Flex,
                            color: E.O.Overlay,
                            alignItems: E.f.Center,
                            justifyContent: E.Wa.Center,
                            position: E.jb.Absolute,
                            fullHeight: !0,
                            fullWidth: !0
                        }, s.createElement(E.Za, {
                            size: E.Cb.Large,
                            inheritColor: !0
                        })), s.createElement(E.Xa, {
                            display: this.state.isLoaded ? E.X.Block : E.X.HideAccessible,
                            position: E.jb.Absolute,
                            fullHeight: !0,
                            fullWidth: !0
                        }, s.createElement(h.b, {
                            clipSlug: t,
                            playerTypeOverride: n,
                            disableTheatreButton: !0,
                            onInit: this.setDoneLoading,
                            onVideoTimeChange: this.props.setCurrentTime,
                            onClipsModerationOpen: this.onClipsModerationOpen,
                            fullscreenRef: this.playerWrapperRef,
                            editing: this.props.editing
                        }))))))
                    }, t = o.__decorate([Object(p.b)("ClipsVideoPlayer", {
                        autoReportInteractive: !0
                    })], t)
                }(s.Component),
                N = Object(d.a)(S)(T);
            var _ = Object(i.connect)(null, function(e) {
                return Object(r.bindActionCreators)({
                    showModal: a.d,
                    closeModal: a.c
                }, e)
            })(N);
            n.d(t, "a", function() {
                return _
            })
        },
        q5AV: function(e, t, n) {},
        qDtz: function(e, t, n) {},
        "r/em": function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("q1tI"),
                a = n("/7QA"),
                o = n("yR8l"),
                s = n("dIU+"),
                l = n("GnwI"),
                d = n("OTul"),
                c = n("Ue10"),
                u = n("1ZgY"),
                p = {
                    tt_content: "player_profile_img"
                },
                m = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentDidUpdate = function() {
                        this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return this.props.data.clip && this.props.data.clip.broadcaster && this.props.data.clip.broadcaster.login ? r.createElement(c.Xa, {
                            className: "clips-broadcaster-info",
                            padding: 1,
                            display: c.X.Flex,
                            alignItems: c.f.Center
                        }, r.createElement("a", {
                            target: "_blank",
                            href: Object(d.d)(this.props.data.clip.broadcaster.login, p)
                        }, r.createElement(c.q, {
                            src: this.props.data.clip.broadcaster.profileImageURL,
                            alt: Object(a.d)("Broadcaster Avatar", "ClipsBroadcasterInfo"),
                            size: 30
                        })), r.createElement(c.Xa, {
                            display: c.X.Flex,
                            flexDirection: c.Aa.Column,
                            flexGrow: 1,
                            margin: {
                                left: 1
                            },
                            ellipsis: !0
                        }, r.createElement("a", {
                            href: Object(d.d)(this.props.data.clip.broadcaster.login, p)
                        }, r.createElement(c.W, {
                            fontSize: c.Ca.Size4,
                            type: c.Vb.Span
                        }, this.props.data.clip.broadcaster.displayName), !(!this.props.data.clip.broadcaster.stream || !this.props.data.clip.broadcaster.stream.id) && r.createElement(c.Xa, {
                            margin: {
                                left: .5
                            },
                            display: c.X.InlineBlock
                        }, r.createElement(c.gb, {
                            label: Object(a.d)("LIVE", "ClipsBroadcasterInfo"),
                            type: c.hb.Live
                        }))), r.createElement(c.Xa, null, r.createElement(c.W, {
                            color: c.O.Alt2,
                            fontSize: c.Ca.Size5,
                            ellipsis: !0
                        }, this.props.data.clip.game && Object(a.d)("playing {gameName}", {
                            gameName: r.createElement("a", {
                                target: "_blank",
                                href: Object(d.e)(this.props.data.clip.game.name, {
                                    tt_medium: "clips_web"
                                })
                            }, this.props.data.clip.game.displayName)
                        }, "ClipsBroadcasterInfo")))), r.createElement(c.Xa, {
                            flexShrink: 1
                        }, r.createElement(s.a, {
                            isHostedFollow: !1,
                            channelLogin: this.props.data.clip.broadcaster.login,
                            followUIType: s.b.IconAndText,
                            unfollowUIType: s.b.IconOnly,
                            showLoadingPlaceholder: !0
                        }))) : r.createElement(c.Xa, null, this.renderPlaceholders())
                    }, t.prototype.renderPlaceholders = function() {
                        return r.createElement(c.Xa, {
                            padding: 1,
                            display: c.X.Flex,
                            alignItems: c.f.Center
                        }, r.createElement(c.Xa, null, r.createElement(c.i, {
                            type: c.n.FadeIn,
                            duration: c.k.Long,
                            enabled: !0
                        }, r.createElement(c.ib, {
                            height: 30,
                            width: 30
                        }))), r.createElement(c.Eb, {
                            fontSize: c.Ca.Size5,
                            flexGrow: 1,
                            margin: {
                                x: 1
                            }
                        }, r.createElement(c.i, {
                            type: c.n.FadeIn,
                            duration: c.k.Long,
                            enabled: !0
                        }, r.createElement(c.ib, {
                            lineCount: 1,
                            width: 80
                        })), r.createElement(c.i, {
                            type: c.n.FadeIn,
                            duration: c.k.Long,
                            delay: c.j.Short,
                            enabled: !0
                        }, r.createElement(c.ib, {
                            lineCount: 1,
                            width: 120
                        }))), r.createElement(c.Xa, null, r.createElement(c.i, {
                            type: c.n.FadeIn,
                            duration: c.k.Long,
                            enabled: !0
                        }, r.createElement(c.ib, {
                            height: 30,
                            width: 70
                        }))))
                    }, t = i.__decorate([Object(l.b)("ClipsBroadcasterInfo"), Object(o.a)(u)], t)
                }(r.Component);
            n.d(t, "a", function() {
                return m
            })
        },
        r62z: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return l
            }), n.d(t, "c", function() {
                return d
            }), n.d(t, "b", function() {
                return c
            }), n.d(t, "d", function() {
                return u
            });
            var i = n("+GjP"),
                r = "https://www.facebook.com/sharer/sharer.php",
                a = "https://www.twitter.com/share",
                o = "https://www.reddit.com/submit",
                s = "https://vk.com/share.php";

            function l(e) {
                return Object(i.e)(r, {
                    u: e
                })
            }

            function d(e, t) {
                return Object(i.e)(a, {
                    url: e,
                    text: t
                })
            }

            function c(e, t) {
                return Object(i.e)(o, {
                    url: e,
                    title: t
                })
            }

            function u(e) {
                return Object(i.e)(s, {
                    url: e
                })
            }
        },
        rb53: function(e, t, n) {},
        s8Ou: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "ReportUserModal_ReportUser"
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
                                    value: "ReportContentInput"
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
                                value: "reportContent"
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
                                        value: "contentID"
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
                    end: 111
                }
            };
            n.loc.source = {
                body: "mutation ReportUserModal_ReportUser($input: ReportContentInput!) {\nreportContent(input: $input) {\ncontentID\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        sU0Q: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "VideoChatCard_Video"
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
                                        value: "title"
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
                                            value: "90"
                                        }
                                    }, {
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "height"
                                        },
                                        value: {
                                            kind: "IntValue",
                                            value: "51"
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
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 162
                }
            };
            n.loc.source = {
                body: "query VideoChatCard_Video($videoID: ID!) {\nvideo(id: $videoID) {\nid\ntitle\npreviewThumbnailURL(width: 90 height: 51)\npublishedAt\nowner {\nid\nlogin\ndisplayName\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        sgJZ: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "FollowButton_FollowEvent_User"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "id"
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
                                        value: "id"
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
                                        value: "isPartner"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "stream"
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
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "hosting"
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
                                                value: "stream"
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
                    end: 157
                }
            };
            n.loc.source = {
                body: "query FollowButton_FollowEvent_User($id: ID!) {\nuser(id: $id) {\nid\nisPartner\nstream {\nid\ngame {\nid\nname\n}\n}\nhosting {\nid\nstream {\nid\ngame {\nid\nname\n}\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        tuvy: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return p
            }), n.d(t, "e", function() {
                return m
            }), n.d(t, "d", function() {
                return h
            }), n.d(t, "b", function() {
                return f
            }), n.d(t, "c", function() {
                return g
            });
            var i = n("/7QA"),
                r = n("D7An"),
                a = null,
                o = null,
                s = null,
                l = null,
                d = "variant_a",
                c = "on",
                u = new RegExp("^/(" + ["overwatchleague", "overwatchleague_allaccess", "overwatchleague_kr", "overwatchleague_fr", "overwatchleague_zh", "overwatchleague_zhtw", "blizzheroes", "BlizzHeroesKR", "BlizzHeroesDE", "BlizzHeroesRU", "BlizzHeroesFR", "camhux", "Hgg_cheering_test", "PlayHearthstone", "PlayHearthstoneRU", "PlayhearthstoneKR", "PlayhearthstoneJP", "PlayHearthstoneFR", "Hearthstoneth", "Hearthstonezhtw"].join("|") + ")", "i");

            function p() {
                return null !== a ? a : a = i.p.experiments.getAssignment(r.b.FrenchVanilla) === d
            }

            function m() {
                return null !== o ? o : o = i.p.experiments.getAssignment(r.b.WatchSombra) === c
            }

            function h(e) {
                return !!e.match(u)
            }

            function f() {
                return null !== s ? s : s = i.p.experiments.getAssignment(r.b.VODMrPotatoHead) === c
            }

            function g() {
                return null !== l ? l : l = i.p.experiments.getAssignment(r.b.VODTopShelf) === c
            }
        },
        u0aY: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            }), n.d(t, "b", function() {
                return r
            }), n.d(t, "c", function() {
                return a
            }), n.d(t, "e", function() {
                return o
            }), n.d(t, "f", function() {
                return s
            }), n.d(t, "d", function() {
                return l
            });
            var i = "core.gdpr.CONSENT_RESET",
                r = "core.gdpr.STATUS_UPDATED",
                a = "core.gdpr.VENDOR_PREFERENCES_UPDATED";

            function o(e) {
                return {
                    type: r,
                    status: e
                }
            }

            function s(e) {
                return {
                    type: a,
                    vendorPreferences: e
                }
            }

            function l() {
                return {
                    type: i
                }
            }
        },
        uIkQ: function(e, t, n) {
            "use strict";
            var i = n("b5C3"),
                r = n("fQWD"),
                a = n("ZEQw"),
                o = (n("yzyL"), n("mrSG")),
                s = function() {
                    function e(e, t, n) {
                        this.globalsBySet = new Map, this.channelsBySet = new Map, this.indexBadges(e, this.globalsBySet, n), Array.isArray(t) && this.indexBadges(t, this.channelsBySet, n)
                    }
                    return e.prototype.getBadge = function(e, t) {
                        var n = this.channelsBySet.get(e);
                        return n && n.has(t) ? n.get(t) || null : void 0 !== (n = this.globalsBySet.get(e)) && n.get(t) || null
                    }, e.prototype.indexBadges = function(e, t, n) {
                        e.forEach(function(e) {
                            n && e.clickAction === a.c && (e = o.__assign({}, e, {
                                channelName: n
                            }));
                            var i = t.get(e.setID);
                            i || (i = new Map, t.set(e.setID, i)), i.set(e.version, e)
                        })
                    }, e
                }();
            new s([], [], "");
            n.d(t, "b", function() {
                return i.a
            }), n.d(t, "a", function() {
                return r.a
            }), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, "c", function() {
                return s
            })
        },
        uYEN: function(e, t, n) {
            "use strict";
            var i;
            n.d(t, "a", function() {
                    return i
                }),
                function(e) {
                    e[e.Gray = 1] = "Gray", e[e.Purple = 100] = "Purple", e[e.Green = 1e3] = "Green", e[e.Blue = 5e3] = "Blue", e[e.Red = 1e4] = "Red", e[e.Yellow = 1e5] = "Yellow"
                }(i || (i = {}))
        },
        v8tf: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ClipsDownloadButton"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "slug"
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
                                value: "clip"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "slug"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "slug"
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
                                        value: "broadcaster"
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
                                        value: "videoQualities"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "sourceURL"
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
                    end: 131
                }
            };
            n.loc.source = {
                body: "query ClipsDownloadButton($slug: ID!) {\nclip(slug: $slug) {\nid\nbroadcaster {\nid\n}\ngame {\nid\nname\n}\nvideoQualities {\nsourceURL\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        vHGB: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("q1tI"),
                a = n("ZEQw"),
                o = n("Ue10"),
                s = (n("E78O"), n("/7QA")),
                l = n("2xye"),
                d = function(e) {
                    e.badge_type = e.badge_type.toLowerCase().replace(/( |\s)/g, "_"), s.p.tracking.track(l.SpadeEventType.ChatBadgeClick, e)
                };
            n.d(t, "a", function() {
                return c
            });
            var c = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isHovering: !1
                    }, t.onMouseOver = function() {
                        t.setState({
                            isHovering: !0
                        })
                    }, t.onMouseOut = function() {
                        t.setState({
                            isHovering: !1
                        })
                    }, t.onBadgeClickHandler = function() {
                        d({
                            badge_type: t.props.badge.title,
                            badge_url_target: t.targetURL
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.badge,
                        t = e.title,
                        n = e.image1x,
                        i = e.image2x,
                        a = e.image4x,
                        l = r.createElement("img", {
                            alt: t,
                            "aria-label": Object(s.d)("{badgeTitle} badge", {
                                badgeTitle: t
                            }, "Badge"),
                            className: "chat-badge",
                            src: n,
                            srcSet: n + " 1x, " + i + " 2x, " + a + " 4x",
                            onMouseOver: this.onMouseOver,
                            onMouseOut: this.onMouseOut
                        });
                    return this.targetURL = this.getTargetURL(), "" !== this.targetURL && (l = r.createElement("a", {
                        href: this.targetURL,
                        onClick: this.onBadgeClickHandler,
                        target: "_blank",
                        "data-a-target": "chat-badge"
                    }, l)), this.state.isHovering ? r.createElement(o.Yb, {
                        align: o.Zb.Left,
                        "data-a-target": "chat-badge",
                        display: o.X.Inline,
                        key: n,
                        label: t,
                        offsetY: "0.9rem"
                    }, l) : l
                }, t.prototype.getTargetURL = function() {
                    var e = this.props.badge;
                    switch (e.clickAction) {
                        case a.e:
                            return e.clickURL;
                        case a.c:
                            return e.channelName ? this.getSubscriberLink() : "";
                        case a.d:
                            return "https://www.twitch.tv/products/turbo?ref=chat_badge";
                        default:
                            return ""
                    }
                }, t.prototype.getSubscriberLink = function() {
                    return "https://www.twitch.tv/" + this.props.badge.channelName + "/subscribe?ref=in_chat_subscriber_link"
                }, t
            }(r.Component)
        },
        vRsq: function(e, t, n) {
            "use strict";
            n.d(t, "d", function() {
                return f
            }), n.d(t, "c", function() {
                return g
            }), n.d(t, "a", function() {
                return v
            }), n.d(t, "b", function() {
                return i
            }), n.d(t, "f", function() {
                return r
            }), n.d(t, "e", function() {
                return a
            }), n.d(t, "g", function() {
                return s
            }), n.d(t, "u", function() {
                return E
            }), n.d(t, "r", function() {
                return b
            }), n.d(t, "t", function() {
                return k
            }), n.d(t, "m", function() {
                return y
            }), n.d(t, "p", function() {
                return S
            }), n.d(t, "o", function() {
                return T
            }), n.d(t, "B", function() {
                return N
            }), n.d(t, "z", function() {
                return _
            }), n.d(t, "A", function() {
                return C
            }), n.d(t, "w", function() {
                return O
            }), n.d(t, "v", function() {
                return R
            }), n.d(t, "y", function() {
                return I
            }), n.d(t, "x", function() {
                return D
            }), n.d(t, "q", function() {
                return A
            }), n.d(t, "i", function() {
                return w
            }), n.d(t, "h", function() {
                return L
            }), n.d(t, "j", function() {
                return M
            }), n.d(t, "k", function() {
                return F
            }), n.d(t, "s", function() {
                return P
            }), n.d(t, "n", function() {
                return B
            }), n.d(t, "l", function() {
                return x
            });
            var i, r, a, o, s, l = n("cr+I"),
                d = n("/7QA"),
                c = n("QzU5"),
                u = n("+GjP"),
                p = n("DMoW"),
                m = n("tuvy"),
                h = n("XKWF"),
                f = "sort",
                g = "filter",
                v = "range";

            function E(e, t, n, i) {
                var a = i || b(t),
                    o = "";
                a && (o = "?" + f + "=" + function(e) {
                    switch (e) {
                        case h.a.Popular:
                            return r.Popular;
                        case h.a.Newest:
                            return r.Newest;
                        default:
                            var t = e;
                            return t
                    }
                }(a));
                var s = n ? n.toLowerCase() : function(e) {
                    var t = k(e);
                    return t ? t.toLowerCase() : "all"
                }(t);
                d.p.history.push(e + "/" + s + o)
            }

            function b(e) {
                var t = l.parse(e.location.search);
                return Object(h.b)(t.sort || "")
            }

            function k(e) {
                switch (e.match.params.filter) {
                    case c.a.Archive.toLowerCase():
                        return c.a.Archive;
                    case c.a.Highlight.toLowerCase():
                        return c.a.Highlight;
                    case c.a.Upload.toLowerCase():
                        return c.a.Upload;
                    case c.a.PastPremiere.toLowerCase():
                        return c.a.PastPremiere;
                    default:
                        return
                }
            }

            function y(e) {
                var t = l.parse(e.location.search);
                return e.match.params.collectionID || t.collection || null
            }

            function S(e) {
                return "" === e ? "" : e.startsWith("v") ? e : "v" + e
            }

            function T() {
                return Object(m.b)() ? "videos" : "videos/all"
            }

            function N(e) {
                switch (e) {
                    case c.a.Archive:
                        return a.PastBroadcasts;
                    case c.a.Highlight:
                        return a.Highlights;
                    case c.a.PastPremiere:
                        return a.PastPremieres;
                    case c.a.PremiereUpload:
                        return null;
                    case c.a.Upload:
                        return a.Uploads;
                    default:
                        return e
                }
            }

            function _(e) {
                switch (e) {
                    case a.Clips:
                        return o.Clips;
                    case a.Collections:
                        return o.Collections;
                    case a.Highlights:
                        return o.Highlights;
                    case a.PastBroadcasts:
                        return o.PastBroadcasts;
                    case a.PastPremieres:
                        return o.PastPremieres;
                    case a.Uploads:
                        return o.Uploads;
                    case a.All:
                        return o.All;
                    default:
                        return e
                }
            }

            function C(e) {
                switch (e) {
                    case o.Clips:
                        return a.Clips;
                    case o.Collections:
                        return a.Collections;
                    case o.Highlights:
                        return a.Highlights;
                    case o.PastBroadcasts:
                        return a.PastBroadcasts;
                    case o.PastPremieres:
                        return a.PastPremieres;
                    case o.Uploads:
                        return a.Uploads;
                    case o.All:
                        return a.All;
                    default:
                        return e
                }
            }

            function O(e) {
                return e.includes(o.Clips) ? o.Clips : e.includes(o.Collections) ? o.Collections : e.includes(o.Highlights) ? o.Highlights : e.includes(o.PastBroadcasts) ? o.PastBroadcasts : e.includes(o.PastPremieres) ? o.PastPremieres : e.includes(o.Uploads) ? o.Uploads : null
            }

            function R(e) {
                var t = Object(u.a)(e, v);
                if (!t) return null;
                switch (t.toLowerCase()) {
                    case i.All:
                        return i.All;
                    case i.Day:
                        return i.Day;
                    case i.Week:
                        return i.Week;
                    case i.Month:
                        return i.Month;
                    case i.Trending:
                        return i.Trending;
                    default:
                        return null
                }
            }

            function I(e) {
                var t = Object(u.a)(e, f);
                if (!t) return null;
                switch (t.toLowerCase()) {
                    case r.Newest:
                        return r.Newest;
                    case r.Popular:
                        return r.Popular;
                    default:
                        return null
                }
            }

            function D(e) {
                var t = Object(u.a)(e, g);
                if (!t) return null;
                switch (t.toLowerCase()) {
                    case a.Clips:
                        return a.Clips;
                    case a.Collections:
                        return a.Collections;
                    case a.Highlights:
                        return a.Highlights;
                    case a.PastBroadcasts:
                        return a.PastBroadcasts;
                    case a.PastPremieres:
                        return a.PastPremieres;
                    case a.Uploads:
                        return a.Uploads;
                    case a.All:
                        return a.All;
                    default:
                        return null
                }
            }

            function A(e, t) {
                var n = "" + T();
                t && t.filter && (n = t.filter);
                var i = "";
                return t && t.sort && (i = "?" + f + "=" + t.sort), "/" + e + "/" + n + i
            }

            function w(e, t, n) {
                return !t && n ? e ? "/" + e + "/" + s.Collection + "/" + n : "/collections/" + n : e ? "/" + e + "/" + s.Video + "/" + t + (n ? "?collection=" + n : "") : "/videos/" + t + (n ? "?collection=" + n : "")
            }

            function L(e, t) {
                return "/" + e + "/" + s.Clip + "/" + t
            }

            function M(e, t, n) {
                var i = "/" + e,
                    r = P(t),
                    a = function(e) {
                        return e.match.params.contentType === s.Clip && e.match.params.contentID || null
                    }(t),
                    o = B(t),
                    d = l.parse(t.location.search).collection;
                if (i = r ? i.concat("/" + s.Video + "/" + r + (d ? "?collection=" + d : "")) : a ? i.concat("/" + s.Clip + "/" + a) : o && !d ? i.concat("/" + s.Collection + "/" + o) : i.concat("/videos"), n) {
                    var c = U(n);
                    if (Object.keys(c).length > 0) return d ? i + "&" + l.stringify(c) : i + "?" + l.stringify(c)
                }
                return F(e, n)
            }

            function F(e, t) {
                var n = "/" + e + "/videos";
                if (t) {
                    var i = U(t);
                    if (Object.keys(i).length > 0) return n + "?" + l.stringify(i)
                }
                return n
            }

            function U(e) {
                var t = {};
                return e.sort && (t[f] = e.sort), e.filter && (t[g] = e.filter), e.range && (t[v] = e.range), t
            }

            function P(e) {
                return e.match.params.contentType === s.Video && e.match.params.contentID || e.match.params.videoID || null
            }

            function B(e) {
                var t = l.parse(location.search);
                return e.match.params.contentType === s.Collection && e.match.params.contentID || e.match.params.collectionID || t.collection || null
            }

            function x(e) {
                switch (e) {
                    case i.All:
                        return p.o.ALL_TIME;
                    case i.Day:
                        return p.o.LAST_DAY;
                    case i.Week:
                        return p.o.LAST_WEEK;
                    case i.Month:
                        return p.o.LAST_MONTH;
                    case i.Trending:
                        return p.o.TRENDING;
                    default:
                        return e
                }
            }! function(e) {
                e.All = "all", e.Month = "30d", e.Week = "7d", e.Day = "24hr", e.Trending = "trending"
            }(i || (i = {})),
            function(e) {
                e.Popular = "views", e.Newest = "time"
            }(r || (r = {})),
            function(e) {
                e.Clips = "clips", e.Collections = "collections", e.Highlights = "highlights", e.PastBroadcasts = "archives", e.PastPremieres = "past_premieres", e.Uploads = "uploads", e.All = "all"
            }(a || (a = {})),
            function(e) {
                e.Clips = "clips", e.Collections = "collections", e.Highlights = "videos/highlight", e.PastBroadcasts = "videos/archive", e.PastPremieres = "videos/past_premiere", e.Uploads = "videos/upload", e.All = "videos/all"
            }(o || (o = {})),
            function(e) {
                e.Video = "video", e.Clip = "clip", e.Collection = "collection"
            }(s || (s = {}))
        },
        vUXZ: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "Clips_DeleteClips"
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
                                    value: "DeleteClipsInput"
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
                                value: "deleteClips"
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
                                        value: "clips"
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
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 106
                }
            };
            n.loc.source = {
                body: "mutation Clips_DeleteClips($input: DeleteClipsInput!) {\ndeleteClips(input: $input) {\nclips {\nid\nslug\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        vhpE: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return m
            }), n.d(t, "a", function() {
                return h
            });
            var i, r = n("mrSG"),
                a = n("q1tI"),
                o = n("wbMx"),
                s = n("+GjP"),
                l = n("2xye"),
                d = n("MLDe"),
                c = n("McYG"),
                u = n("4L7N"),
                p = n("Ue10"),
                m = [{
                    type: o.b.Twitter,
                    params: {
                        tt_medium: "twtr"
                    }
                }, {
                    type: o.b.Facebook,
                    params: {
                        tt_medium: "fb"
                    }
                }, {
                    type: o.b.Reddit,
                    params: {
                        tt_medium: "redt"
                    }
                }, {
                    type: o.b.Copy
                }];
            ! function(e) {
                e.MainContainer = "main-container", e.DownloadButtonContainer = "download-button-container", e.ShareButtonTwitter = "share-button-twitter", e.ShareButtonFacebook = "share-button-facebook", e.ShareButtonReddit = "share-button-reddit", e.ShareButtonCopy = "share-button-copy"
            }(i || (i = {}));
            var h = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = {
                            margin: {
                                right: 1
                            }
                        },
                        t = {};
                    return this.props.asBalloon && (t = {
                        justifyContent: p.Wa.Between
                    }, e = {}), a.createElement(p.Xa, r.__assign({
                        className: "clips-social-share",
                        display: p.X.Flex,
                        flexWrap: p.Ba.NoWrap
                    }, t, {
                        "data-test-selector": i.MainContainer
                    }), a.createElement(p.Xa, r.__assign({
                        display: p.X.InlineBlock
                    }, e, {
                        "data-test-selector": i.DownloadButtonContainer
                    }), a.createElement(u.a, {
                        broadcasterLogin: this.props.clip.broadcaster && this.props.clip.broadcaster.login || "",
                        broadcasterId: this.props.clip.broadcaster && this.props.clip.broadcaster.id || "",
                        slug: this.props.clip.slug,
                        pageType: this.props.pageType
                    })), this.renderSocialButton(e, i.ShareButtonTwitter, o.b.Twitter, {
                        tt_medium: "twtr"
                    }), this.renderSocialButton(e, i.ShareButtonFacebook, o.b.Facebook, {
                        tt_medium: "fb"
                    }), this.renderSocialButton(e, i.ShareButtonReddit, o.b.Reddit, {
                        tt_medium: "redt"
                    }), this.renderSocialButton(e, i.ShareButtonCopy, o.b.Copy))
                }, t.prototype.renderSocialButton = function(e, t, n, i) {
                    var u = Object(s.e)(this.props.clip.url, i);
                    return this.props.pageType === l.PageviewLocation.ClipsWatchPage && this.props.clip.broadcaster && this.props.clip.broadcaster.login && (u = Object(s.e)(Object(c.a)(this.props.clip.slug, this.props.clip.broadcaster.login), i)), a.createElement(p.Xa, r.__assign({
                        key: n
                    }, e, {
                        "data-test-selector": t
                    }), a.createElement(o.a, {
                        key: n,
                        type: n,
                        text: this.props.clip.title,
                        url: u,
                        onShareClick: Object(d.c)(this.props.clip.id, this.props.clip.game && this.props.clip.game.name, this.props.clip.broadcaster && this.props.clip.broadcaster.id, this.props.clip.broadcaster && this.props.clip.broadcaster.login, this.props.pageType)
                    }))
                }, t
            }(a.Component)
        },
        "vl+S": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "WatchLivePrompt"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "slug"
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
                                value: "clip"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "slug"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "slug"
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
                                        value: "durationSeconds"
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
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "broadcaster"
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
                                                value: "stream"
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
                                            value: "86"
                                        }
                                    }, {
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "height"
                                        },
                                        value: {
                                            kind: "IntValue",
                                            value: "45"
                                        }
                                    }],
                                    directives: []
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 188
                }
            };
            n.loc.source = {
                body: "query WatchLivePrompt($slug: ID!) {\nclip(slug: $slug) {\nid\ndurationSeconds\ngame {\ndisplayName\nid\n}\nbroadcaster {\nid\nlogin\ndisplayName\nstream {\nid\n}\n}\nthumbnailURL(width: 86 height: 45)\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        wC0O: function(e, t, n) {},
        wbMx: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return i
            }), n.d(t, "a", function() {
                return c
            });
            var i, r = n("mrSG"),
                a = n("q1tI"),
                o = n("/7QA"),
                s = n("Jxh/"),
                l = n("r62z"),
                d = n("Ue10");
            n("jeZI");
            ! function(e) {
                e[e.Twitter = 0] = "Twitter", e[e.Reddit = 1] = "Reddit", e[e.VKontakte = 2] = "VKontakte", e[e.Facebook = 3] = "Facebook", e[e.Copy = 4] = "Copy", e[e.CopyInput = 5] = "CopyInput", e[e.Download = 6] = "Download"
            }(i || (i = {}));
            var c = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.renderLink = function() {
                        var e = "social-button__link " + n.addSocialClassModifier("social-button__link");
                        return n.props.type === i.Download ? a.createElement("a", r.__assign({
                            href: n.props.url,
                            target: "_blank",
                            className: e,
                            onClick: n.onShareClickHandler
                        }, Object(d.jc)(n.props), {
                            download: n.props.text
                        }), n.renderIcon()) : n.isLink() ? a.createElement("a", r.__assign({
                            href: n.getLinkTarget(),
                            target: "_blank",
                            className: e,
                            onClick: n.onShareClickHandler
                        }, Object(d.jc)(n.props)), n.renderIcon()) : a.createElement("button", r.__assign({
                            onClick: n.copyPageUrl,
                            onMouseLeave: n.clearIsCopiedStatus,
                            className: e
                        }, Object(d.jc)(n.props)), n.renderIcon())
                    }, n.onShareClickHandler = function() {
                        n.props.onShareClick && n.props.onShareClick(n.props.type)
                    }, n.clearIsCopiedStatus = function() {
                        n.setState({
                            isCopied: !1
                        })
                    }, n.getUrl = function() {
                        return n.props.url || window.location.href
                    }, n.copyPageUrl = function(e) {
                        e && e.preventDefault(), n.props.onShareClick && n.props.onShareClick(n.props.type), Object(s.a)(n.getUrl()), n.setState({
                            isCopied: !0
                        })
                    }, n.renderIcon = function() {
                        var e = n.getAssetFromType();
                        return a.createElement(d.Xa, {
                            className: "social-button__icon " + n.addSocialClassModifier("social-button__icon"),
                            display: d.X.Flex,
                            alignItems: d.f.Center,
                            justifyContent: d.Wa.Center
                        }, a.createElement(d.sb, {
                            asset: e
                        }))
                    }, n.isLink = function() {
                        return n.props.type !== i.Copy
                    }, n.getTooltipFromType = function() {
                        switch (n.props.type) {
                            case i.Twitter:
                                return "Twitter";
                            case i.Reddit:
                                return "Reddit";
                            case i.Facebook:
                                return "Facebook";
                            case i.VKontakte:
                                return "VKontakte";
                            case i.Download:
                                return Object(o.d)("Download", "SocialButton");
                            case i.Copy:
                                return n.state.isCopied ? Object(o.d)("Copied", "SocialButton") : Object(o.d)("Copy to clipboard", "SocialButton");
                            default:
                                return ""
                        }
                    }, n.getAssetFromType = function() {
                        switch (n.props.type) {
                            case i.Twitter:
                                return d.tb.Twitter;
                            case i.Facebook:
                                return d.tb.Facebook;
                            case i.VKontakte:
                                return d.tb.VKontakte;
                            case i.Reddit:
                                return d.tb.Reddit;
                            case i.Download:
                                return d.tb.Download;
                            case i.Copy:
                            default:
                                return d.tb.Copy
                        }
                    }, n.addSocialClassModifier = function(e) {
                        switch (n.props.type) {
                            case i.Twitter:
                                return e + "--twitter";
                            case i.Reddit:
                                return e + "--reddit";
                            case i.Facebook:
                                return e + "--facebook";
                            case i.VKontakte:
                                return e + "--vkontakte";
                            case i.Download:
                                return e + "--download";
                            case i.Copy:
                                return e + "--copy";
                            default:
                                return ""
                        }
                    }, n.getLinkTarget = function() {
                        var e = n.props,
                            t = e.text,
                            r = e.type,
                            a = n.getUrl(),
                            o = t || "";
                        switch (r) {
                            case i.Reddit:
                                return Object(l.b)(a, o);
                            case i.VKontakte:
                                return Object(l.d)(a);
                            case i.Facebook:
                                return Object(l.a)(a);
                            case i.Twitter:
                                return Object(l.c)(a, o);
                            default:
                                return ""
                        }
                    }, n.state = {
                        isCopied: !1
                    }, n
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(d.Xa, {
                        className: "social-button"
                    }, a.createElement(d.Yb, {
                        label: this.getTooltipFromType(),
                        direction: d.ac.Bottom
                    }, this.renderLink()))
                }, t
            }(a.Component)
        },
        "x0+1": function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("q1tI"),
                a = n("/7QA"),
                o = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            alwaysShowMessage: !1
                        }, t.renderBody = function() {
                            return t.state.alwaysShowMessage ? t.props.messageBody : r.createElement("span", {
                                key: "deleted",
                                className: "chat-line__message--deleted"
                            }, r.createElement("a", {
                                href: "",
                                onClick: t.alwaysShowMessage
                            }, "<" + Object(a.d)("click to show", "MessageDeletedLine") + ">"))
                        }, t.alwaysShowMessage = function(e) {
                            e && e.preventDefault(), t.setState({
                                alwaysShowMessage: !0
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.targetLogin,
                            n = e.moderatorLogin;
                        return n ? Object(a.d)("{moderatorLogin} deleted {targetLogin}'s message: {body}", {
                            moderatorLogin: n,
                            targetLogin: t,
                            body: this.renderBody()
                        }, "MessageDeletedLine") : Object(a.d)("A moderator deleted {targetLogin}'s message: {body}", {
                            targetLogin: t,
                            body: this.renderBody()
                        }, "MessageDeletedLine")
                    }, t
                }(r.Component);
            n.d(t, "a", function() {
                return o
            })
        },
        x1M1: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("q1tI"),
                a = n("/MKj"),
                o = n("/0dD"),
                s = n("XDQu"),
                l = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = (e.defaultRes, e.sources),
                            n = (e.darkModeEnabled, i.__rest(e, ["defaultRes", "sources", "darkModeEnabled"])),
                            a = this.props.darkModeEnabled ? t.dark : t.light,
                            o = Object.keys(a);
                        delete n.dispatch;
                        var s = i.__assign({}, n, {
                            src: a[this.props.defaultRes || o[0]],
                            srcSet: o.map(function(e) {
                                return a[e] + " " + e
                            }).join(",")
                        });
                        return r.createElement("img", i.__assign({}, s, {
                            onLoad: this.props.onLoad
                        }))
                    }, t
                }(r.Component);
            var d = Object(a.connect)(function(e) {
                return {
                    darkModeEnabled: Object(s.a)(e) === o.a.Dark
                }
            })(l);
            n.d(t, "a", function() {
                return d
            })
        },
        xza4: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ClipsCurator"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "slug"
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
                                value: "clip"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "slug"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "slug"
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
                                        value: "champBadge"
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
                    end: 110
                }
            };
            n.loc.source = {
                body: "query ClipsCurator($slug: ID!) {\nclip(slug: $slug) {\nid\ncurator {\nid\ndisplayName\nlogin\n}\nchampBadge {\nid\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        y4Ne: function(e, t, n) {},
        yWUM: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            });
            var i = "0h0m1s";

            function r(e) {
                if (0 === e) return i;
                if (!e || e < 0) return "";
                var t = e,
                    n = Math.floor(t / 3600);
                return t %= 3600, n + "h" + Math.floor(t / 60) + "m" + (t %= 60) + "s"
            }
        },
        ydo7: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ClipsSocialShare"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "slug"
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
                                value: "clip"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "slug"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "slug"
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
                                        value: "url"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "embedURL"
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
                                        value: "broadcaster"
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
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 124
                }
            };
            n.loc.source = {
                body: "query ClipsSocialShare($slug: ID!) {\nclip(slug: $slug) {\nid\nurl\nembedURL\ntitle\ngame {\nid\nname\n}\nbroadcaster {\nid\nlogin\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        yzyL: function(e, t) {},
        zixI: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "UnblockUser"
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
                                    value: "UnblockUserInput"
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
                                value: "unblockUser"
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
                                        value: "targetUser"
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
                    end: 100
                }
            };
            n.loc.source = {
                body: "mutation UnblockUser($input: UnblockUserInput!) {\nunblockUser(input: $input) {\ntargetUser {\nid\n}\n}\n}",
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