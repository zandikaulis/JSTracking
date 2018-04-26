webpackJsonp([50], {
    "+Aaf": function(e, t) {},
    "/SNv": function(e, t, n) {
        e.exports = n.p + "assets/hearthstone-classes-b3b59eedbe78268cf62299a41ec09be1.png"
    },
    "0H+u": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "UserImageUploader"
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
                                    value: "bannerImageURL"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "offlineImageURL"
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
                end: 108
            }
        };
        n.loc.source = {
            body: "query UserImageUploader($login: String!) {\nuser(login: $login) {\nid\nlogin\nbannerImageURL\nofflineImageURL\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "1jVX": function(e, t, n) {
        "use strict";
        t.a = function(e, t, n, c) {
            void 0 === t && (t = []);
            for (var u, m = [], p = e.split(/\n/), v = function(e, v) {
                    if (e > 0 && (v += p[e - 1].length + 1), c && "" === p[e]) return m.push(i.createElement(l.Q, {
                        key: e
                    }, "\n")), u = v, "continue";
                    var h = t.map(function(e) {
                            return function(e, t) {
                                return {
                                    emoteID: e.emoteID,
                                    from: e.from - t,
                                    to: e.to - t,
                                    setID: e.setID
                                }
                            }(e, v)
                        }).filter(function(t) {
                            return ! function(e, t) {
                                return e.from < 0 || e.from >= t || e.to < 0 || e.to >= t
                            }(t, p[e].length)
                        }),
                        g = Object(o.g)(p[e], Object(s.b)(h), 0, {}, !1, n);
                    m.push(i.createElement(l.Q, {
                        key: e
                    }, function(e) {
                        for (var t = [], n = 0; n < e.length; n++) {
                            var o = e[n];
                            switch (o.type) {
                                case r.a.ClipLink:
                                    t.push(i.createElement("a", {
                                        key: n,
                                        href: o.content.url,
                                        target: "_blank"
                                    }, o.content.url));
                                    break;
                                case r.a.VideoLink:
                                case r.a.Link:
                                    o.content.url.match(d) ? t.push(i.createElement(a.a, {
                                        key: n,
                                        to: o.content.url.replace(d, "")
                                    }, o.content.displayText)) : t.push(i.createElement("a", {
                                        key: n,
                                        href: o.content.url,
                                        target: "_blank",
                                        rel: "noopener noreferrer"
                                    }, o.content.displayText));
                                    break;
                                case r.a.Mention:
                                    t.push(i.createElement(a.a, {
                                        key: n,
                                        to: "/" + o.content.recipient
                                    }, o.content.recipient));
                                    break;
                                case r.a.Emote:
                                    o.content.images.themed || t.push(i.createElement("img", {
                                        key: n,
                                        src: o.content.images.sources["1x"],
                                        alt: o.content.alt
                                    }));
                                    break;
                                case r.a.Text:
                                    t.push(i.createElement("span", {
                                        key: n
                                    }, o.content))
                            }
                        }
                        return t
                    }(g))), u = v
                }, h = 0, g = 0; h < p.length; h++) v(h, g), g = u;
            return m
        };
        var i = n("GiK3"),
            a = (n.n(i), n("F8kA")),
            r = n("mwvJ"),
            o = n("l21v"),
            s = n("dQj3"),
            l = n("Odds"),
            d = /^(https?:\/\/)?(www.)?twitch\.tv/
    },
    "2hJ3": function(e, t, n) {
        "use strict";
        t.a = function(e) {
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
    },
    "3Fw+": function(e, t, n) {
        "use strict";
        t.a = function(e) {
            if (e < 0) return "";
            if (0 === e) return i;
            var t = e,
                n = Math.floor(t / 3600);
            t %= 3600;
            var a = Math.floor(t / 60);
            return n + "h" + a + "m" + (t %= 60) + "s"
        };
        var i = "0h0m1s"
    },
    "4Jix": function(e, t) {},
    "4Q9N": function(e, t, n) {
        "use strict";
        var i;
        n.d(t, "a", function() {
                return i
            }),
            function(e) {
                e.ProfileImage = "profile_image", e.ProfileBanner = "profile_banner", e.ChannelOfflineImage = "channel_offline_image"
            }(i || (i = {}))
    },
    "5GFz": function(e, t, n) {
        "use strict";
        var i = n("GiK3"),
            a = n("6sO2"),
            r = n("Odds"),
            o = (n("6suJ"), function(e) {
                var t = Object(a.c)(e.date, {
                        month: "short"
                    }),
                    n = Object(a.c)(e.date, {
                        day: "numeric"
                    });
                return i.createElement(r._32, {
                    background: r.n.Base,
                    elevation: 2,
                    display: r.R.Flex,
                    flexDirection: r.T.Column,
                    className: "event-calendar-date",
                    margin: {
                        top: .5,
                        left: .5
                    },
                    position: r._15.Absolute,
                    attachTop: !0,
                    attachLeft: !0,
                    flexWrap: r.U.NoWrap
                }, i.createElement(r._32, {
                    className: "event-calendar-date__month",
                    display: r.R.Flex,
                    justifyContent: r._7.Center,
                    background: r.n.AccentAlt2
                }, i.createElement(r.Q, {
                    fontSize: r.V.Size6,
                    transform: r._45.Uppercase,
                    color: r.K.Overlay
                }, t)), i.createElement(r._8, {
                    display: r.R.Flex,
                    justifyContent: r._7.Center
                }, i.createElement(r.Q, {
                    fontSize: r.V.Size3,
                    color: r.K.Base
                }, n)))
            });
        n.d(t, "a", function() {
            return o
        })
    },
    "6Agf": function(e, t, n) {
        "use strict";
        var i;
        n.d(t, "a", function() {
                return i
            }),
            function(e) {
                e.Admin = "admin", e.GlobalMod = "global_mod", e.Moderator = "mod", e.Owner = "owner", e.Staff = "staff", e.Subscriber = "subscriber", e.User = ""
            }(i || (i = {}))
    },
    "6suJ": function(e, t) {},
    "6zb9": function(e, t, n) {
        var i = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "EventLandingPage_Schedule"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "eventID"
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
                            value: "nextCount"
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
                            value: "nextCursor"
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
                            value: "prevCount"
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
                            value: "prevCursor"
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
                            value: "criteria"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "EventConnectionCriteriaInput"
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
                            value: "event"
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
                                    value: "eventID"
                                }
                            }
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "InlineFragment",
                                typeCondition: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "EventCollection"
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
                                            value: "leaves"
                                        },
                                        arguments: [{
                                            kind: "Argument",
                                            name: {
                                                kind: "Name",
                                                value: "first"
                                            },
                                            value: {
                                                kind: "Variable",
                                                name: {
                                                    kind: "Name",
                                                    value: "nextCount"
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
                                                    value: "nextCursor"
                                                }
                                            }
                                        }, {
                                            kind: "Argument",
                                            name: {
                                                kind: "Name",
                                                value: "last"
                                            },
                                            value: {
                                                kind: "Variable",
                                                name: {
                                                    kind: "Name",
                                                    value: "prevCount"
                                                }
                                            }
                                        }, {
                                            kind: "Argument",
                                            name: {
                                                kind: "Name",
                                                value: "before"
                                            },
                                            value: {
                                                kind: "Variable",
                                                name: {
                                                    kind: "Name",
                                                    value: "prevCursor"
                                                }
                                            }
                                        }, {
                                            kind: "Argument",
                                            name: {
                                                kind: "Name",
                                                value: "criteria"
                                            },
                                            value: {
                                                kind: "Variable",
                                                name: {
                                                    kind: "Name",
                                                    value: "criteria"
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
                                                                    value: "imageURL"
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
                                                                    value: "startAt"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "endAt"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "channel"
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
                                                                                value: "300"
                                                                            }
                                                                        }],
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
                                                                                    value: "previewImageURL"
                                                                                },
                                                                                arguments: [{
                                                                                    kind: "Argument",
                                                                                    name: {
                                                                                        kind: "Name",
                                                                                        value: "width"
                                                                                    },
                                                                                    value: {
                                                                                        kind: "IntValue",
                                                                                        value: "380"
                                                                                    }
                                                                                }, {
                                                                                    kind: "Argument",
                                                                                    name: {
                                                                                        kind: "Name",
                                                                                        value: "height"
                                                                                    },
                                                                                    value: {
                                                                                        kind: "IntValue",
                                                                                        value: "240"
                                                                                    }
                                                                                }],
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
                                                                            value: "boxArtURL"
                                                                        },
                                                                        arguments: [{
                                                                            kind: "Argument",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "width"
                                                                            },
                                                                            value: {
                                                                                kind: "IntValue",
                                                                                value: "285"
                                                                            }
                                                                        }, {
                                                                            kind: "Argument",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "height"
                                                                            },
                                                                            value: {
                                                                                kind: "IntValue",
                                                                                value: "380"
                                                                            }
                                                                        }],
                                                                        directives: []
                                                                    }]
                                                                }
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
                                                                                        kind: "FragmentSpread",
                                                                                        name: {
                                                                                            kind: "Name",
                                                                                            value: "PreviewCardVideo"
                                                                                        },
                                                                                        directives: []
                                                                                    }]
                                                                                }
                                                                            }, {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "offsetSeconds"
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
                                                                            value: "isFollowing"
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
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "hasPreviousPage"
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
                end: 815
            }
        };
        i.loc.source = {
            body: '#import "twilight/features/video-preview-card/models/preview-card-video-fragment.gql"\nquery EventLandingPage_Schedule($eventID: ID! $nextCount: Int $nextCursor: Cursor $prevCount: Int $prevCursor: Cursor $criteria: EventConnectionCriteriaInput) {\nevent(id: $eventID) {\n...on EventCollection {\nid\nleaves(first: $nextCount after: $nextCursor last: $prevCount before: $prevCursor criteria: $criteria) {\nedges {\nnode {\nid\ntitle\ndescription\nimageURL(width: 320 height: 180)\nstartAt\nendAt\nchannel {\nid\nlogin\ndisplayName\nprofileImageURL(width: 300)\nstream {\nid\npreviewImageURL(width: 380 height: 240)\n}\n}\ngame {\nid\nname\ndisplayName\nboxArtURL(width: 285 height: 380)\n}\nvideos(first: 1) {\nedges {\nnode {\n...PreviewCardVideo\n}\noffsetSeconds\n}\n}\nself {\nisFollowing\n}\n}\ncursor\n}\npageInfo {\nhasNextPage\nhasPreviousPage\n}\n}\n}\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var a = {};
        i.definitions = i.definitions.concat(n("qjMx").definitions.filter(function(e) {
            if ("FragmentDefinition" !== e.kind) return !0;
            var t = e.name.value;
            return !a[t] && (a[t] = !0, !0)
        })), e.exports = i
    },
    "7FW4": function(e, t, n) {
        "use strict";
        t.a = function(e) {
            var t = i.createElement(o._8, {
                padding: 1,
                fullHeight: !0,
                flexDirection: o.T.Column,
                justifyContent: o._7.Center,
                display: o.R.Flex
            }, i.createElement(o.Q, {
                color: o.K.Link,
                fontSize: o.V.Size4,
                noWrap: !0
            }, Object(r.d)("View All", "Following--ViewAllButton")), i.createElement(o.Q, {
                color: o.K.Alt2,
                fontSize: o.V.Size4,
                noWrap: !0
            }, e.subHeader));
            e.linkTo && (t = i.createElement(a.a, {
                to: e.linkTo,
                className: "following__view-all__link"
            }, t));
            return i.createElement("div", {
                className: "following__view-all",
                onClick: e.onClickViewAll,
                "data-test-selector": l
            }, i.createElement(o._8, null, i.createElement(o.k, {
                ratio: e.aspectRatio
            }, i.createElement(o._32, {
                background: o.n.Alt2,
                fullHeight: !0
            }, t))))
        };
        var i = n("GiK3"),
            a = (n.n(i), n("F8kA")),
            r = n("6sO2"),
            o = n("Odds"),
            s = n("oHn4"),
            l = (n.n(s), "view-all-button-selector")
    },
    "81qH": function(e, t, n) {
        "use strict";
        var i = n("aBed");
        n.d(t, "VideoPreviewCard", function() {
            return i.a
        });
        var a = n("a4C9"),
            r = (n.n(a), n("XYqD"));
        n.d(t, "VideoPreviewCardPlaceholder", function() {
            return r.a
        })
    },
    "8Wuk": function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return i
        }), n.d(t, "a", function() {
            return u
        });
        var i, a = n("TToO"),
            r = n("GiK3"),
            o = (n.n(r), n("6sO2")),
            s = n("2hJ3"),
            l = n("f6Cj"),
            d = n("Odds"),
            c = n("bdk8");
        n.n(c);
        ! function(e) {
            e[e.Twitter = 0] = "Twitter", e[e.Reddit = 1] = "Reddit", e[e.VKontakte = 2] = "VKontakte", e[e.Facebook = 3] = "Facebook", e[e.Copy = 4] = "Copy", e[e.CopyInput = 5] = "CopyInput"
        }(i || (i = {}));
        var u = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.renderLink = function() {
                    var e = "social-button__link " + n.addSocialClassModifier("social-button__link");
                    return n.isLink() ? r.createElement("a", a.__assign({
                        href: n.getLinkTarget(),
                        target: "_blank",
                        className: e,
                        onClick: n.onShareClickHandler
                    }, Object(d._60)(n.props)), n.renderIcon()) : r.createElement("button", a.__assign({
                        onClick: n.copyPageUrl,
                        onMouseLeave: n.clearIsCopiedStatus,
                        className: e
                    }, Object(d._60)(n.props)), n.renderIcon())
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
                    return r.createElement(d._8, {
                        className: "social-button__icon " + n.addSocialClassModifier("social-button__icon")
                    }, r.createElement(d._22, {
                        asset: e,
                        width: 30,
                        height: 30
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
                        case i.Copy:
                            return n.state.isCopied ? Object(o.d)("Copied", "SocialButton") : Object(o.d)("Copy to clipboard", "SocialButton");
                        default:
                            return ""
                    }
                }, n.getAssetFromType = function() {
                    switch (n.props.type) {
                        case i.Twitter:
                            return d._23.Twitter;
                        case i.Facebook:
                            return d._23.Facebook;
                        case i.VKontakte:
                            return d._23.VKontakte;
                        case i.Reddit:
                            return d._23.Reddit;
                        case i.Copy:
                        default:
                            return d._23.Copy
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
                        case i.Copy:
                            return e + "--copy";
                        default:
                            return ""
                    }
                }, n.getLinkTarget = function() {
                    var e = n.props,
                        t = e.text,
                        a = e.type,
                        r = n.getUrl(),
                        o = t || "";
                    switch (a) {
                        case i.Reddit:
                            return Object(l.b)(r, o);
                        case i.VKontakte:
                            return Object(l.d)(r);
                        case i.Facebook:
                            return Object(l.a)(r);
                        case i.Twitter:
                            return Object(l.c)(r, o);
                        default:
                            return ""
                    }
                }, n.state = {
                    isCopied: !1
                }, n
            }
            return a.__extends(t, e), t.prototype.render = function() {
                return r.createElement(d._8, {
                    className: "social-button"
                }, r.createElement(d._49, {
                    label: this.getTooltipFromType(),
                    direction: d._51.Top
                }, this.renderLink()))
            }, t
        }(r.Component)
    },
    "9SRT": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "Events_UnfollowEvent"
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
                                value: "UnfollowEventInput"
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
                            value: "unfollowEvent"
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
                                    value: "event"
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
                                                value: "EventCollection"
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
                                                            value: "isFollowing"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }]
                                                }
                                            }]
                                        }
                                    }, {
                                        kind: "InlineFragment",
                                        typeCondition: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "EventLeaf"
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
                                                            value: "isFollowing"
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
                end: 199
            }
        };
        n.loc.source = {
            body: "mutation Events_UnfollowEvent($input: UnfollowEventInput!) {\nunfollowEvent(input: $input) {\nevent {\n...on EventCollection {\nid\nself {\nisFollowing\n}\n}\n...on EventLeaf {\nid\nself {\nisFollowing\n}\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "9bpq": function(e, t) {},
    "9i7Z": function(e, t) {},
    "9u8h": function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return o
        });
        var i = n("TToO"),
            a = n("6sO2"),
            r = n("Aj/L"),
            o = function() {
                function e() {}
                return e.get = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, void 0, function() {
                        return i.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return [4, this.request(e, i.__assign({}, t, {
                                        method: "GET"
                                    }), n)];
                                case 1:
                                    return [2, a.sent()]
                            }
                        })
                    })
                }, e.getOrThrow = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, void 0, function() {
                        return i.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return [4, this.requestOrThrow(e, i.__assign({}, t, {
                                        method: "GET"
                                    }), n)];
                                case 1:
                                    return [2, a.sent()]
                            }
                        })
                    })
                }, e.put = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, void 0, function() {
                        return i.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return [4, this.request(e, i.__assign({}, t, {
                                        method: "PUT"
                                    }), n)];
                                case 1:
                                    return [2, a.sent()]
                            }
                        })
                    })
                }, e.putOrThrow = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, void 0, function() {
                        return i.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return [4, this.requestOrThrow(e, i.__assign({}, t, {
                                        method: "PUT"
                                    }), n)];
                                case 1:
                                    return [2, a.sent()]
                            }
                        })
                    })
                }, e.post = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, void 0, function() {
                        return i.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return [4, this.request(e, i.__assign({}, t, {
                                        method: "POST"
                                    }), n)];
                                case 1:
                                    return [2, a.sent()]
                            }
                        })
                    })
                }, e.postOrThrow = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, void 0, function() {
                        return i.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return [4, this.requestOrThrow(e, i.__assign({}, t, {
                                        method: "POST"
                                    }), n)];
                                case 1:
                                    return [2, a.sent()]
                            }
                        })
                    })
                }, e.delete = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, void 0, function() {
                        return i.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return [4, this.request(e, i.__assign({}, t, {
                                        method: "DELETE"
                                    }), n)];
                                case 1:
                                    return [2, a.sent()]
                            }
                        })
                    })
                }, e.deleteOrThrow = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, void 0, function() {
                        return i.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return [4, this.requestOrThrow(e, i.__assign({}, t, {
                                        method: "DELETE"
                                    }), n)];
                                case 1:
                                    return [2, a.sent()]
                            }
                        })
                    })
                }, e.request = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, void 0, function() {
                        var a, r, o, s;
                        return i.__generator(this, function(l) {
                            switch (l.label) {
                                case 0:
                                    return t = this.constructOptions(t, n), a = t.headers ? t.headers["Content-Type"] : void 0, r = this.serialize(t.body, a), o = i.__assign({}, t, {
                                        body: r
                                    }), [4, this._fetch(e, o)];
                                case 1:
                                    return s = l.sent(), [4, this.constructLegacyAPIResponse(s)];
                                case 2:
                                    return [2, l.sent()]
                            }
                        })
                    })
                }, e.requestOrThrow = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, void 0, function() {
                        var a, r;
                        return i.__generator(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    return o.trys.push([0, 2, , 3]), [4, this.request(e, t, n)];
                                case 1:
                                    if ((a = o.sent()).error || a.requestError) throw new Error("Error while making request");
                                    return r = i.__assign({}, a, {
                                        body: a.body
                                    }), [2, Promise.resolve(r)];
                                case 2:
                                    throw o.sent();
                                case 3:
                                    return [2]
                            }
                        })
                    })
                }, e.getAPIURL = function(e) {
                    return new URL(e, a.o.config.apiBaseURL)
                }, e.constructLegacyAPIResponse = function(e) {
                    return i.__awaiter(this, void 0, void 0, function() {
                        var t, n, a, r;
                        return i.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    t = {
                                        status: e.status
                                    }, i.label = 1;
                                case 1:
                                    return i.trys.push([1, 3, , 4]), [4, e.json()];
                                case 2:
                                    return n = i.sent(), e.ok ? t.body = n : t.error = n, [3, 4];
                                case 3:
                                    return a = i.sent(), e.headers && e.headers.get && (r = e.headers.get("Content-Type")) && -1 !== r.indexOf("application/json") && (t.requestError = a), [3, 4];
                                case 4:
                                    return [2, t]
                            }
                        })
                    })
                }, e._fetch = function(e, t) {
                    return void 0 === t && (t = {}), i.__awaiter(this, void 0, void 0, function() {
                        return i.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, fetch(this.getAPIURL(e).toString(), t)];
                                case 1:
                                    return [2, n.sent()]
                            }
                        })
                    })
                }, e.constructOptions = function(e, t) {
                    return e = Object.assign({}, e, {
                        headers: i.__assign({}, this.getDefaultHeaders(e, t), e.headers)
                    })
                }, e.serialize = function(e, t) {
                    return "application/json; charset=UTF-8" === t ? JSON.stringify(e) : "string" == typeof e ? e : e && FormData.prototype.isPrototypeOf(e) ? e : e ? (this.logger.error(new Error("Could not serialize this request body for the content-type provided."), "attempting to serialize object with a non-JSON content-type", {
                        contentType: t
                    }), null) : null
                }, e.getDefaultHeaders = function(e, t) {
                    var n = a.o.store.getState(),
                        i = {
                            Accept: "application/vnd.twitchtv.v" + (t.version || 5) + "+json; charset=UTF-8",
                            "Accept-Language": "en-us",
                            "Client-ID": a.o.config.legacyClientID,
                            "X-Requested-With": "XMLHttpRequest"
                        };
                    e.body && FormData.prototype.isPrototypeOf(e.body) || (i["Content-Type"] = "application/json; charset=UTF-8");
                    var o = Object(r.c)(n);
                    return o && (i.Authorization = "OAuth " + o.authToken, o.legacyCSRFToken && (i["Twitch-Api-Token"] = o.legacyCSRFToken)), t.excludeHeaders && t.excludeHeaders.forEach(function(e) {
                        i[e] && delete i[e]
                    }), i
                }, e.logger = a.o.logger.withCategory("legacy-api"), e
            }()
    },
    AL3x: function(e, t) {},
    BJwU: function(e, t) {},
    "Cb/j": function(e, t) {},
    CybZ: function(e, t) {},
    DP4t: function(e, t, n) {
        var i = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "EventLandingPage_Event"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "eventName"
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
                            value: "now"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Time"
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
                            value: "event"
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
                                    value: "eventName"
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
                                    value: "__typename"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "InlineFragment",
                                typeCondition: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "EventLeaf"
                                    }
                                },
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "EventLeafContent"
                                        },
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "premiere"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "FragmentSpread",
                                                name: {
                                                    kind: "Name",
                                                    value: "PremiereContent"
                                                },
                                                directives: []
                                            }]
                                        }
                                    }]
                                }
                            }, {
                                kind: "InlineFragment",
                                typeCondition: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "EventCollection"
                                    }
                                },
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "EventCollectionContent"
                                        },
                                        directives: []
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }, {
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "PremiereContent"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "Premiere"
                    }
                },
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "status"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "pastPremiere"
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
                                    value: "thumbnailURLs"
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
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "animatedPreviewURL"
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
                                    value: "publishedAt"
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
                                            value: "boxArtURL"
                                        },
                                        arguments: [{
                                            kind: "Argument",
                                            name: {
                                                kind: "Name",
                                                value: "width"
                                            },
                                            value: {
                                                kind: "IntValue",
                                                value: "285"
                                            }
                                        }, {
                                            kind: "Argument",
                                            name: {
                                                kind: "Name",
                                                value: "height"
                                            },
                                            value: {
                                                kind: "IntValue",
                                                value: "380"
                                            }
                                        }],
                                        directives: []
                                    }]
                                }
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
                                            value: "viewingHistory"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "position"
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
                end: 723
            }
        };
        i.loc.source = {
            body: '#import "twilight/pages/event-landing/models/event-leaf-fragment.gql"\n#import "twilight/pages/event-landing/models/event-collection-fragment.gql"\nquery EventLandingPage_Event($eventName: ID! $now: Time) {\nevent(id: $eventName) {\n__typename\n...on EventLeaf {\n...EventLeafContent\npremiere {\n...PremiereContent\n}\n}\n...on EventCollection {\n...EventCollectionContent\n}\n}\n}\nfragment PremiereContent on Premiere {\nstatus\npastPremiere {\nid\nbroadcastType\ndescription\nthumbnailURLs(width: 320 height: 180)\nviewCount\ntitle\nanimatedPreviewURL\npreviewThumbnailURL(width: 320 height: 180)\npublishedAt\nlengthSeconds\nowner {\nid\nlogin\ndisplayName\n}\ngame {\nid\nname\nboxArtURL(width: 285 height: 380)\n}\nself {\nviewingHistory {\nposition\n}\n}\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var a = {};

        function r(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !a[t] && (a[t] = !0, !0)
            })
        }
        i.definitions = i.definitions.concat(r(n("H0+T").definitions)), i.definitions = i.definitions.concat(r(n("KZWZ").definitions)), e.exports = i
    },
    Dpm1: function(e, t) {},
    "E+X/": function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("RH2O"),
            r = n("2KeS"),
            o = n("+xm8"),
            s = n("V5M+"),
            l = n("f2i/"),
            d = n("Aj/L"),
            c = n("oSFp"),
            u = n("GiK3"),
            m = n("6sO2"),
            p = n("+Znq"),
            v = n("mw/a"),
            h = n("Odds"),
            g = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleReportClick = function() {
                        if (!t.props.isLoggedIn) return t.props.login();
                        if (t.props.targetUser) {
                            var e = "https://www.twitch.tv/events/" + t.props.eventID;
                            t.props.showReportUserModal({
                                reportContext: {
                                    contentType: v.a.User,
                                    targetUserID: t.props.targetUser.id
                                },
                                title: Object(m.d)("Report {channelName}", {
                                    channelName: t.props.targetUser.displayName
                                }, "EventMoreMenu"),
                                defaultDescription: "Report event: " + e
                            })
                        }
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return u.createElement(p.a, null, u.createElement(h.v, {
                        icon: h._23.More,
                        type: h.B.Hollow
                    }), u.createElement(h.q, {
                        direction: this.props.balloonDirection,
                        tailOffset: this.props.tailOffset
                    }, u.createElement(h._8, {
                        padding: {
                            y: 1
                        }
                    }, u.createElement(h._6, {
                        disabled: !this.props.targetUser,
                        onClick: this.handleReportClick
                    }, u.createElement(h._8, {
                        padding: {
                            x: 1,
                            y: .5
                        }
                    }, Object(m.d)("Report", "EventMoreMenu"))))))
                }, t
            }(u.Component);
        var f = Object(a.b)(function(e) {
            return {
                isLoggedIn: Object(d.d)(e)
            }
        }, function(e) {
            return Object(r.b)({
                login: function() {
                    return Object(l.f)(o.a.ReportChannel)
                },
                showReportUserModal: function(e) {
                    var t = i.__rest(e, []);
                    return Object(s.d)(c.a, t)
                }
            }, e)
        })(g);
        n.d(t, "a", function() {
            return f
        })
    },
    EOpv: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        }), n.d(t, "b", function() {
            return r
        });
        var i, a = n("6sO2");
        ! function(e) {
            e[e.CSGOMap = 0] = "CSGOMap", e[e.CSGOSkillGroup = 1] = "CSGOSkillGroup", e[e.HearthstoneClass = 2] = "HearthstoneClass", e[e.HearthstoneMode = 3] = "HearthstoneMode", e[e.LeagueChampion = 4] = "LeagueChampion", e[e.OverwatchCharacter = 5] = "OverwatchCharacter"
        }(i || (i = {}));
        var r = function(e) {
            switch (e) {
                case i.CSGOMap:
                    return Object(a.d)("Map", "CSGOMapFilter");
                case i.CSGOSkillGroup:
                    return Object(a.d)("Rank", "CSGORankFilter");
                case i.HearthstoneClass:
                    return Object(a.d)("Class", "HearthstoneClassFilter");
                case i.HearthstoneMode:
                    return Object(a.d)("Mode", "HearthstoneModeFilter");
                case i.LeagueChampion:
                    return Object(a.d)("Champion", "LeagueFilter");
                case i.OverwatchCharacter:
                    return Object(a.d)("Hero", "OverwatchFilter");
                default:
                    return ""
            }
        }
    },
    FsFC: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            var t = s(e);
            return t.months ? r(i.MONTH, t.months) : t.weeks && t.days ? r(i.WEEK, t.weeks) + " " + r(i.DAY, t.days) : t.weeks ? r(i.WEEK, t.weeks) : t.days && t.hours ? r(i.DAY, t.days) + " " + r(i.HOUR, t.hours) : t.days ? r(i.DAY, t.days) : t.hours && t.minutes ? r(i.HOUR, t.hours) + " " + r(i.MINUTE, t.minutes) : t.hours ? r(i.HOUR, t.hours) : t.minutes && t.seconds ? r(i.MINUTE, t.minutes) + " " + r(i.SECOND, t.seconds) : t.minutes ? r(i.MINUTE, t.minutes) : r(i.SECOND, t.seconds || 0)
        }, t.b = function(e) {
            var t = s(e);
            return t.months ? o(i.MONTH, t.months) : t.weeks && t.days ? "" + o(i.WEEK, t.weeks) + o(i.DAY, t.days) : t.weeks ? o(i.WEEK, t.weeks) : t.days && t.hours ? "" + o(i.DAY, t.days) + o(i.HOUR, t.hours) : t.days ? o(i.DAY, t.days) : t.hours && t.minutes ? "" + o(i.HOUR, t.hours) + o(i.MINUTE, t.minutes) : t.hours ? o(i.HOUR, t.hours) : t.minutes && t.seconds ? "" + o(i.MINUTE, t.minutes) + o(i.SECOND, t.seconds) : t.minutes ? o(i.MINUTE, t.minutes) : o(i.SECOND, t.seconds || 0)
        };
        var i, a = n("6sO2");

        function r(e, t) {
            switch (e) {
                case i.SECOND:
                    return Object(a.d)("{secondCount, plural, one {# second} other {# seconds}}", {
                        secondCount: t
                    }, "formatDuration");
                case i.MINUTE:
                    return Object(a.d)("{minuteCount, plural, one {# minute} other {# minutes}}", {
                        minuteCount: t
                    }, "formatDuration");
                case i.HOUR:
                    return Object(a.d)("{hourCount, plural, one {# hour} other {# hours}}", {
                        hourCount: t
                    }, "formatDuration");
                case i.DAY:
                    return Object(a.d)("{dayCount, plural, one {# day} other {# days}}", {
                        dayCount: t
                    }, "formatDuration");
                case i.WEEK:
                    return Object(a.d)("{weekCount, plural, one {# week} other {# weeks}}", {
                        weekCount: t
                    }, "formatDuration");
                case i.MONTH:
                    return Object(a.d)("{monthCount, plural, one {# month} other {# months}}", {
                        monthCount: t
                    }, "formatDuration");
                default:
                    return ""
            }
        }

        function o(e, t) {
            switch (e) {
                case i.SECOND:
                    return Object(a.d)("{secondCount}s", {
                        secondCount: t
                    }, "formatDuration");
                case i.MINUTE:
                    return Object(a.d)("{minuteCount}m", {
                        minuteCount: t
                    }, "formatDuration");
                case i.HOUR:
                    return Object(a.d)("{hourCount}h", {
                        hourCount: t
                    }, "formatDuration");
                case i.DAY:
                    return Object(a.d)("{dayCount}d", {
                        dayCount: t
                    }, "formatDuration");
                case i.WEEK:
                    return Object(a.d)("{weekCount}w", {
                        weekCount: t
                    }, "formatDuration");
                case i.MONTH:
                    return Object(a.d)("{monthCount}mo", {
                        monthCount: t
                    }, "formatDuration");
                default:
                    return ""
            }
        }

        function s(e) {
            if (e < 60) return {
                seconds: e
            };
            var t = Math.floor(e / 60),
                n = e % 60;
            if (t < 60) return n ? {
                minutes: t,
                seconds: n
            } : {
                minutes: t
            };
            var i = Math.floor(t / 60);
            if (t %= 60, i < 24) return t ? {
                hours: i,
                minutes: t
            } : {
                hours: i
            };
            var a = Math.floor(i / 24);
            if (i %= 24, a < 7) return i ? {
                days: a,
                hours: i
            } : {
                days: a
            };
            if (a <= 26) {
                var r = Math.floor(a / 7);
                return (a %= 7) ? {
                    weeks: r,
                    days: a
                } : {
                    weeks: r
                }
            }
            return {
                months: Math.round((a + 3) / 30)
            }
        }! function(e) {
            e[e.SECOND = 0] = "SECOND", e[e.MINUTE = 1] = "MINUTE", e[e.HOUR = 2] = "HOUR", e[e.DAY = 3] = "DAY", e[e.WEEK = 4] = "WEEK", e[e.MONTH = 5] = "MONTH"
        }(i || (i = {}))
    },
    "H0+T": function(e, t, n) {
        var i = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "EventLeafContent"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "EventLeaf"
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
                            value: "type"
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
                                        value: "300"
                                    }
                                }],
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
                            value: "description"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "imageURL"
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
                            value: "startAt"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "endAt"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "channel"
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
                                        value: "300"
                                    }
                                }],
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
                                    value: "boxArtURL"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "width"
                                    },
                                    value: {
                                        kind: "IntValue",
                                        value: "285"
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "height"
                                    },
                                    value: {
                                        kind: "IntValue",
                                        value: "380"
                                    }
                                }],
                                directives: []
                            }]
                        }
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "parent"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "EventCollectionContent"
                                },
                                directives: []
                            }]
                        }
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
                                    value: "isFollowing"
                                },
                                arguments: [],
                                directives: []
                            }]
                        }
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "videos"
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
                                            value: "offsetSeconds"
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
                                                    value: "PreviewCardVideo"
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
                end: 576
            }
        };
        i.loc.source = {
            body: '#import "twilight/pages/event-landing/models/event-collection-fragment.gql"\n#import "twilight/features/video-preview-card/models/preview-card-video-fragment.gql"\nfragment EventLeafContent on EventLeaf {\nid\ntype\nowner {\nid\nlogin\ndisplayName\nprofileImageURL(width:300)\n}\ntitle\ndescription\nimageURL(width:320 height:180)\nstartAt\nendAt\nchannel {\nid\nlogin\ndisplayName\nprofileImageURL(width:300)\n}\ngame {\nid\nname\ndisplayName\nboxArtURL(width:285 height:380)\n}\nparent {\n...EventCollectionContent\n}\nself {\nisFollowing\n}\nvideos {\nedges {\noffsetSeconds\nnode {\n...PreviewCardVideo\n}\n}\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var a = {};

        function r(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !a[t] && (a[t] = !0, !0)
            })
        }
        i.definitions = i.definitions.concat(r(n("KZWZ").definitions)), i.definitions = i.definitions.concat(r(n("qjMx").definitions)), e.exports = i
    },
    IJO1: function(e, t) {},
    IOwa: function(e, t, n) {
        "use strict";
        var i, a, r, o = n("TToO"),
            s = n("HW6M"),
            l = n("GiK3"),
            d = n("6sO2"),
            c = n("2o2f"),
            u = n("Odds"),
            m = (n("CybZ"), (i = {})[c.a.Live] = "stream-type-indicator--live", i[c.a.Premiere] = "stream-type-indicator--premiere", i[c.a.Rerun] = "stream-type-indicator--rerun", i[c.a.WatchParty] = "stream-type-indicator--rerun", i),
            p = ((a = {})[c.a.Premiere] = u._23.VideoPremiere, a[c.a.Rerun] = u._23.VideoRerun, a[c.a.WatchParty] = u._23.VideoRerun, a),
            v = ((r = {})[c.a.Premiere] = u._24.Live, r[c.a.Rerun] = u._24.Inherit, r[c.a.WatchParty] = u._24.Inherit, r),
            h = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    return l.createElement(u._32, {
                        className: this.getClassNames(),
                        color: u.K.Overlay,
                        background: u.n.Overlay,
                        padding: {
                            x: .5
                        },
                        borderRadius: u.t.Small,
                        display: u.R.Flex
                    }, l.createElement(u._8, {
                        display: u.R.Flex,
                        alignItems: u.c.Center,
                        margin: {
                            right: .5
                        }
                    }, this.getIcon()), l.createElement(u.Q, {
                        type: u._46.Span
                    }, this.getLabel()))
                }, t.prototype.getClassNames = function() {
                    var e = {
                        "stream-type-indicator": !0
                    };
                    return e[m[this.props.type]] = !0, s(e)
                }, t.prototype.getIcon = function() {
                    return this.props.hosting ? l.createElement(u._32, {
                        borderRadius: u.t.Rounded,
                        className: "stream-type-indicator__hosting-dot"
                    }) : this.props.type === c.a.Live ? l.createElement(u._8, {
                        className: "stream-type-indicator__live-wrapper",
                        display: u.R.Flex,
                        alignItems: u.c.Center
                    }, l.createElement(u.G, {
                        status: u.I.Live,
                        size: u.H.Small
                    })) : l.createElement(u._22, {
                        asset: p[this.props.type],
                        type: v[this.props.type],
                        width: 14,
                        height: 14
                    })
                }, t.prototype.getLabel = function() {
                    if (this.props.hosting) return Object(d.d)("Hosting", "StreamTypeIndicator");
                    switch (this.props.type) {
                        case c.a.Live:
                            return Object(d.d)("LIVE", "StreamTypeIndicator");
                        case c.a.Premiere:
                            return Object(d.d)("Premiere", "StreamTypeIndicator");
                        case c.a.Rerun:
                        case c.a.WatchParty:
                            return Object(d.d)("Rerun", "StreamTypeIndicator");
                        default:
                            return ""
                    }
                }, t
            }(l.Component);
        n.d(t, "a", function() {
            return h
        })
    },
    ISok: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("GiK3"),
            r = n("vKFS"),
            o = n("WxKK"),
            s = n("CSlQ"),
            l = n("81qH"),
            d = n("XYqD"),
            c = n("Odds"),
            u = function(e) {
                var t = [],
                    n = null;
                if (null === e.videos)
                    for (var s = void 0 === e.placeholderCount ? 20 : e.placeholderCount, u = 0; u < s; u++) t.push(a.createElement(d.a, {
                        key: u
                    }));
                else e.viewAllButtonProps && (n = a.createElement(o.a, i.__assign({}, e.viewAllButtonProps))), t = e.videos.map(function(t, n) {
                    return a.createElement(c._8, {
                        "data-a-target": "video-tower-card-" + n,
                        key: "video-" + n,
                        margin: {
                            bottom: 2
                        }
                    }, a.createElement(l.VideoPreviewCard, {
                        hideGameArt: e.hideGameArt,
                        context: e.listContext || r.b.MixedGameAndChannelList,
                        tracking: {
                            content: e.trackingContent,
                            content_index: n,
                            medium: e.trackingMedium
                        },
                        video: t
                    }))
                });
                return a.createElement(c._52, {
                    gutterSize: c._54.Small,
                    childWidth: e.videoCardSize || c._53.Large,
                    placeholderItems: 20
                }, t, n)
            },
            m = Object(s.d)("VideoTower", {
                autoReportInteractive: !0
            })(u);
        n.d(t, !1, function() {
            return 20
        }), n.d(t, !1, function() {
            return u
        }), n.d(t, "a", function() {
            return m
        })
    },
    J8WN: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return s
        });
        var i = n("TToO"),
            a = n("GiK3"),
            r = (n.n(a), n("Odds")),
            o = n("yU6t"),
            s = (n.n(o), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isDraggingOver: !1
                    }, t.onDragEnter = function(e) {
                        e.preventDefault(), t.setState({
                            isDraggingOver: !0
                        })
                    }, t.onDragLeave = function(e) {
                        e.preventDefault(), t.setState({
                            isDraggingOver: !1
                        })
                    }, t.onFileInputChange = function(e) {
                        e.preventDefault(), t.finalizeSelections(e.target.files), e.target.value = ""
                    }, t.onFileDrop = function(e) {
                        e.preventDefault(), t.setState({
                            isDraggingOver: !1
                        }), t.finalizeSelections(e.dataTransfer.files)
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(r.S, {
                        dragOver: this.state.isDraggingOver,
                        error: this.props.error
                    }, a.createElement(r._2, {
                        position: r._15.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        fullWidth: !0,
                        fullHeight: !0,
                        zIndex: r._59.Above
                    }, a.createElement("input", {
                        "data-a-target": "file-picker-input",
                        "data-test-selector": "file-picker-input",
                        className: "drag-and-drop-file-picker__input",
                        accept: this.props.allowedFileTypes.join(","),
                        multiple: this.props.multiFile || !1,
                        onChange: this.onFileInputChange,
                        type: "file",
                        onDragLeave: this.onDragLeave,
                        onDragEnter: this.onDragEnter,
                        onDrop: this.onFileDrop
                    })), this.props.children)
                }, t.prototype.finalizeSelections = function(e) {
                    e && this.props.onFilesSubmitted(Array.from(e))
                }, t
            }(a.Component))
    },
    JBcW: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        }), t.c = function(e) {
            a.n.track(r.SpadeEventType.BrowserPushNotificationPrompt, e)
        }, t.b = function(e) {
            a.n.track(r.SpadeEventType.BrowserPushNotificationDisable, e)
        };
        var i, a = n("6sO2"),
            r = n("vH/s");
        ! function(e) {
            e.Settings = "settings", e.Channel = "channel"
        }(i || (i = {}))
    },
    K5Ul: function(e, t) {},
    KZWZ: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "EventCollectionContent"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "EventCollection"
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
                        alias: {
                            kind: "Name",
                            value: "collectionImageURL"
                        },
                        name: {
                            kind: "Name",
                            value: "imageURL"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "width"
                            },
                            value: {
                                kind: "IntValue",
                                value: "720"
                            }
                        }, {
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "height"
                            },
                            value: {
                                kind: "IntValue",
                                value: "405"
                            }
                        }],
                        directives: []
                    }, {
                        kind: "Field",
                        alias: {
                            kind: "Name",
                            value: "collectionStart"
                        },
                        name: {
                            kind: "Name",
                            value: "startAt"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        alias: {
                            kind: "Name",
                            value: "collectionEnd"
                        },
                        name: {
                            kind: "Name",
                            value: "endAt"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        alias: {
                            kind: "Name",
                            value: "nextLeaf"
                        },
                        name: {
                            kind: "Name",
                            value: "leaves"
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
                                value: "criteria"
                            },
                            value: {
                                kind: "ObjectValue",
                                fields: [{
                                    kind: "ObjectField",
                                    name: {
                                        kind: "Name",
                                        value: "firstPageOptions"
                                    },
                                    value: {
                                        kind: "ObjectValue",
                                        fields: [{
                                            kind: "ObjectField",
                                            name: {
                                                kind: "Name",
                                                value: "endsAfter"
                                            },
                                            value: {
                                                kind: "Variable",
                                                name: {
                                                    kind: "Name",
                                                    value: "now"
                                                }
                                            }
                                        }]
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
                                                    value: "startAt"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "endAt"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "channel"
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
                                    value: "isFollowing"
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
                end: 358
            }
        };
        n.loc.source = {
            body: "fragment EventCollectionContent on EventCollection {\nid\ntitle\ndescription\ncollectionImageURL: imageURL(width:720 height:405)\ncollectionStart: startAt\ncollectionEnd: endAt\nnextLeaf: leaves(first: 1 criteria: { firstPageOptions: { endsAfter: $now } }) {\nedges {\nnode {\nid\nstartAt\nendAt\nchannel {\nid\nlogin\n}\n}\n}\n}\nowner {\nid\ndisplayName\n}\nself {\nisFollowing\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    LBNC: function(e, t, n) {
        "use strict";
        t.a = function() {
            return "serviceWorker" in window.navigator && "PushManager" in window
        }
    },
    LgcN: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
        }), n.d(t, "b", function() {
            return o
        }), n.d(t, "c", function() {
            return s
        }), n.d(t, "d", function() {
            return l
        });
        var i = n("TToO"),
            a = this,
            r = function() {
                return i.__awaiter(a, void 0, void 0, function() {
                    return i.__generator(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, n.e(120).then(n.bind(null, "tk3B"))];
                            case 1:
                                return [2, e.sent()]
                        }
                    })
                })
            },
            o = function() {
                return i.__awaiter(a, void 0, void 0, function() {
                    return i.__generator(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, n.e(119).then(n.bind(null, "e/M0"))];
                            case 1:
                                return [2, e.sent()]
                        }
                    })
                })
            },
            s = function() {
                return i.__awaiter(a, void 0, void 0, function() {
                    return i.__generator(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, n.e(118).then(n.bind(null, "Dan5"))];
                            case 1:
                                return [2, e.sent()]
                        }
                    })
                })
            },
            l = function() {
                return i.__awaiter(a, void 0, void 0, function() {
                    return i.__generator(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, n.e(117).then(n.bind(null, "sQp1"))];
                            case 1:
                                return [2, e.sent()]
                        }
                    })
                })
            }
    },
    Lwev: function(e, t) {},
    MQiv: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        }), n.d(t, "b", function() {
            return a
        }), t.c = function(e) {
            var t = {
                share_medium: e.shareMedium,
                event_id: e.eventID,
                channel: e.channelLogin,
                channel_id: e.channelID,
                location: e.location
            };
            return r.o.tracking.track(o.SpadeEventType.EventShare, t)
        }, t.d = function(e) {
            var t = {
                action: e.action,
                channel: e.channelLogin,
                channel_id: e.channelID,
                event_id: e.eventID,
                location: e.location
            };
            return r.o.tracking.track(o.SpadeEventType.EventFollowing, t)
        };
        var i, a, r = n("6sO2"),
            o = n("vH/s");
        ! function(e) {
            e.ChannelEvents = "channel_events", e.DashboardEvents = "dashboard_events", e.EventDetails = "event_details", e.EventManagment = "event_managment", e.EventSidebar = "event_sidebar"
        }(i || (i = {})),
        function(e) {
            e.RemindMeOpen = "remind_me_open_modal", e.EmailReminderOn = "email_reminder_on", e.EmailReminderOff = "email_reminder_off"
        }(a || (a = {}))
    },
    NTi8: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i, a, r, o, s = n("TToO"),
            l = n("GiK3"),
            d = n("6sO2"),
            c = n("yWCw"),
            u = n("7vx8"),
            m = n("j7/Y"),
            p = n("w9tK"),
            v = n("vH/s"),
            h = n("CSlQ"),
            g = n("zCIC"),
            f = n("eXld"),
            k = n("OFFm"),
            _ = n("E+X/"),
            b = n("QdVH"),
            y = n("MQiv"),
            E = n("1jVX"),
            w = n("Odds"),
            S = (n("9bpq"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return s.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = Object(d.d)("No description listed", "EventLandingDescription");
                    return "" !== this.props.description && (e = this.props.description), l.createElement(w._8, null, l.createElement(w.Q, {
                        transform: w._45.Uppercase,
                        type: w._46.H5,
                        color: w.K.Alt2
                    }, Object(d.d)("Description", "EventLandingDescription")), l.createElement(w._8, {
                        margin: {
                            top: 1
                        },
                        className: "event-landing-description__text"
                    }, Object(E.a)(e, [], "", !0)))
                }, t = s.__decorate([Object(h.d)("EventLandingDescription")], t)
            }(l.Component)),
            N = Object(h.d)("TimetableHeader", {
                autoReportInteractive: !0
            })(function(e) {
                var t = l.createElement(k.a, {
                    eventID: e.event.id,
                    eventTypename: "EventCollection",
                    areNotificationsEnabled: e.event.self.isFollowing,
                    channelID: e.event.owner && e.event.owner.id || void 0,
                    channelLogin: e.event.owner && e.event.owner.login || void 0,
                    eventLocation: y.a.EventDetails
                });
                e.event.isLive && (t = l.createElement(w.v, {
                    linkTo: {
                        pathname: "/" + e.event.liveChannelLogin,
                        state: {
                            content: "call_to_action",
                            medium: "event_page"
                        }
                    }
                }, Object(d.d)("Watch Now", "TimetableHeader")));
                var n = l.createElement(w._8, {
                        display: w.R.Flex
                    }, l.createElement(w._8, {
                        margin: {
                            right: 1
                        }
                    }, t), l.createElement(w._8, {
                        margin: {
                            right: 1
                        }
                    }, l.createElement(b.a, {
                        id: e.event.id,
                        title: e.event.title,
                        channelID: "",
                        channelLogin: "",
                        eventLocation: y.a.EventDetails
                    })), e.event.owner && l.createElement(_.a, {
                        targetUser: {
                            id: e.event.owner.id,
                            displayName: e.event.owner.displayName
                        },
                        eventID: e.event.id,
                        balloonDirection: w.r.Bottom
                    })),
                    i = l.createElement(w._8, null, Object(d.d)("To Be Announced", "TimetableHeader"));
                e.event.startAt && (i = e.event.isLive ? l.createElement(w._8, {
                    display: w.R.Flex
                }, l.createElement(w._8, null, l.createElement(w.G, {
                    status: w.I.Live
                })), l.createElement(w._32, {
                    margin: {
                        left: .5
                    }
                }, l.createElement(w.Q, null, Object(d.d)("Happening Now", "TimetableHeader")))) : l.createElement(w._8, null, l.createElement(w.Q, null, Object(d.i)(e.event.startAt, {
                    weekday: "long",
                    month: "short",
                    day: "numeric"
                }))));
                var a = null;
                if (e.event.startAt && e.event.endAt) {
                    var r = Object(d.i)(e.event.endAt, {
                        weekday: "long",
                        month: "short",
                        day: "numeric",
                        timeZoneName: "short"
                    });
                    a = l.createElement(w._8, null, l.createElement(w.Q, null, Object(d.d)("to {endDate}", {
                        endDate: r
                    }, "TimetableHeader")))
                }
                return l.createElement(w._8, {
                    margin: .5
                }, l.createElement(w._32, {
                    border: !0,
                    background: w.n.Base
                }, l.createElement(w._8, null, l.createElement("img", {
                    src: e.event.imageURL
                })), l.createElement(w._8, {
                    margin: 1
                }, l.createElement(w._32, {
                    borderBottom: !0,
                    padding: {
                        y: 1
                    }
                }, l.createElement(w.Q, {
                    type: w._46.H3
                }, e.event.title)), l.createElement(w._32, {
                    borderBottom: !0,
                    padding: {
                        y: 1
                    },
                    margin: {
                        y: .5
                    }
                }, i, a), l.createElement(w._8, {
                    margin: {
                        y: 1
                    }
                }, n))), l.createElement(w._32, {
                    border: !0,
                    background: w.n.Base,
                    margin: {
                        top: 1
                    }
                }, l.createElement(w._8, {
                    margin: 1
                }, l.createElement(S, {
                    description: e.event.description
                }))))
            }),
            L = n("F8kA"),
            C = n("IOwa"),
            O = n("2o2f"),
            I = n("3Fw+"),
            P = n("HW6M"),
            F = n("mi6k"),
            T = (n("9i7Z"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        hovered: !1,
                        didAnimatedPreviewLoad: !1,
                        didAnimatedPreviewFailToLoad: !1
                    }, t.onMouseEnterHandler = function() {
                        t.setState({
                            hovered: !0
                        })
                    }, t.onMouseLeaveHandler = function() {
                        t.setState({
                            hovered: !1
                        })
                    }, t.onPreviewImageLoad = function(e) {
                        t.props.latencyTracking.reportInteractive(), e.currentTarget.src === t.props.video.animatedPreviewURL && t.setState({
                            didAnimatedPreviewLoad: !0
                        })
                    }, t.onPreviewImageLoadError = function(e) {
                        e.currentTarget.src === t.props.video.animatedPreviewURL && t.setState({
                            didAnimatedPreviewFailToLoad: !0
                        })
                    }, t
                }
                return s.__extends(t, e), t.prototype.render = function() {
                    var e = "?t=";
                    return this.props.offsetSeconds && this.props.offsetSeconds > 0 && (e += Object(I.a)(this.props.offsetSeconds)), l.createElement("div", s.__assign({
                        onMouseEnter: this.onMouseEnterHandler,
                        onMouseLeave: this.onMouseLeaveHandler
                    }, Object(w._60)(this.props)), l.createElement(w.C, null, l.createElement(L.a, {
                        to: {
                            pathname: "/videos/" + this.props.video.id,
                            search: e,
                            state: this.props.tracking
                        },
                        title: this.props.video.title,
                        "data-test-selector": "preview-image-link"
                    }, l.createElement(w._8, {
                        fullWidth: !0
                    }, l.createElement(w.k, {
                        overflow: !0
                    }, l.createElement("div", null, l.createElement(w._32, {
                        display: w.R.InlineFlex,
                        position: w._15.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        margin: .5,
                        zIndex: w._59.Default,
                        fontSize: w.V.Size6,
                        background: w.n.Overlay,
                        color: w.K.Overlay,
                        className: "event-video-card__preview-overlay-stat"
                    }, l.createElement(w._31, {
                        "data-test-selector": "video-view-count",
                        icon: w._23.GlyphViews,
                        label: Object(d.d)("views", "EventVideoCard"),
                        value: Object(d.f)(this.props.video.viewCount)
                    })), l.createElement(w._32, {
                        display: w.R.InlineFlex,
                        position: w._15.Absolute,
                        attachTop: !0,
                        attachRight: !0,
                        margin: .5,
                        zIndex: w._59.Default,
                        fontSize: w.V.Size6,
                        background: w.n.Overlay,
                        color: w.K.Overlay,
                        className: "event-video-card__preview-overlay-stat"
                    }, l.createElement(w._31, {
                        "data-test-selector": "video-length",
                        icon: w._23.GlyphLength,
                        label: Object(d.d)("length", "EventVideoCard"),
                        value: Object(F.b)(this.props.video.lengthSeconds)
                    })), this.videoPreviewImage()))))))
                }, t.prototype.videoPreviewImage = function() {
                    var e = this.state.hovered && !this.state.didAnimatedPreviewFailToLoad ? this.props.video.animatedPreviewURL : this.props.video.previewThumbnailURL,
                        t = P("event-video-card__image-wrapper"),
                        n = P("event-video-card__preview-image", {
                            "event-video-card__preview-image--animated": this.state.hovered && this.state.didAnimatedPreviewLoad
                        });
                    return l.createElement(w.k, {
                        overflow: !0
                    }, l.createElement("div", {
                        className: t
                    }, l.createElement(w._2, {
                        flexShrink: 0
                    }, l.createElement("figure", null, l.createElement(w.k, {
                        ratio: w.l.Aspect16x9
                    }, l.createElement("img", {
                        alt: this.props.video.title,
                        className: n,
                        "data-test-selector": "preview-image",
                        onLoad: this.onPreviewImageLoad,
                        onError: this.onPreviewImageLoadError,
                        src: e || ""
                    }))))))
                }, t
            }(l.Component)),
            x = Object(h.d)("EventVideoCard")(T);

        function A(e) {
            var t = null;
            e.videos && e.videos.edges && e.videos.edges.length > 0 && (t = function(e) {
                var t = e.offsetSeconds,
                    n = null;
                if (e.node) {
                    var i = null;
                    e.node.owner && e.node.owner.displayName && e.node.owner.id && e.node.owner.login && (i = {
                        displayName: e.node.owner.displayName,
                        id: e.node.owner.id,
                        login: e.node.owner.login,
                        profileImageURL: null
                    }), n = {
                        id: e.node.id,
                        game: null,
                        lengthSeconds: e.node.lengthSeconds || 0,
                        owner: i,
                        animatedPreviewURL: e.node.animatedPreviewURL,
                        previewThumbnailURL: e.node.previewThumbnailURL,
                        publishedAt: e.node.publishedAt || "",
                        self: null,
                        title: e.node.title || "",
                        viewCount: e.node.viewCount || 0
                    }
                }
                return {
                    offsetSeconds: t,
                    video: n
                }
            }(e.videos.edges[0]));
            var n = null;
            null !== e.channel && (n = {
                id: e.channel.id || "",
                login: e.channel.login || "",
                displayName: e.channel.displayName || "",
                profileImageURL: e.channel.profileImageURL || ""
            });
            var i = null;
            null !== e.owner && (i = {
                id: e.owner.id || "",
                login: e.owner.login || "",
                displayName: e.owner.displayName || ""
            });
            var r = null;
            null !== e.game && (r = {
                id: e.game.id,
                name: e.game.name,
                displayName: e.game.displayName || e.game.name,
                boxArtURL: e.game.boxArtURL || ""
            });
            var o = a.SINGLE;
            return "PREMIERE" === e.type && (o = a.PREMIERE), {
                id: e.id,
                type: o,
                owner: i,
                title: e.title,
                description: e.description,
                imageURL: e.imageURL,
                startAt: e.startAt,
                endAt: e.endAt,
                channel: n,
                game: r,
                self: {
                    isFollowing: e.self && e.self.isFollowing || !1
                },
                parent: e.parent,
                video: t,
                premiere: function(e) {
                    if (!e.premiere) return null;
                    var t = e.premiere,
                        n = null;
                    t.pastPremiere && (n = {
                        id: t.pastPremiere.id,
                        viewCount: t.pastPremiere.viewCount || 0,
                        title: t.pastPremiere.title || "",
                        animatedPreviewURL: t.pastPremiere.animatedPreviewURL || "",
                        previewThumbnailURL: t.pastPremiere.previewThumbnailURL || "",
                        publishedAt: t.pastPremiere.publishedAt || "",
                        lengthSeconds: t.pastPremiere.lengthSeconds || 0,
                        owner: {
                            id: t.pastPremiere.owner && t.pastPremiere.owner.id || "",
                            login: t.pastPremiere.owner && t.pastPremiere.owner.login || "",
                            displayName: t.pastPremiere.owner && t.pastPremiere.owner.displayName || "",
                            profileImageURL: ""
                        },
                        game: {
                            id: t.pastPremiere.game ? t.pastPremiere.game.id : "",
                            displayName: t.pastPremiere.game ? t.pastPremiere.game.name : "",
                            name: t.pastPremiere.game ? t.pastPremiere.game.name : "",
                            boxArtURL: t.pastPremiere.game && t.pastPremiere.game.boxArtURL || ""
                        },
                        self: {
                            viewingHistory: {
                                position: t.pastPremiere.self && t.pastPremiere.self.viewingHistory && t.pastPremiere.self.viewingHistory.position || 0
                            }
                        }
                    });
                    return {
                        status: t.status,
                        pastPremiere: n
                    }
                }(e)
            }
        }

        function R(e, t) {
            var n = new Date;
            return t && (n = t),
                function(e, t) {
                    if (t < e.endAt) return e.premiere ? e.premiere.status === r.STARTED : t > e.startAt;
                    return !1
                }(e, n) ? o.LIVE : function(e, t) {
                    if (e.premiere) return t < e.endAt;
                    return t < e.startAt
                }(e, n) ? o.FUTURE : o.PAST
        }! function(e) {
            e.EVENT_LEAF = "EventLeaf", e.EVENT_COLLECTION = "EventCollection"
        }(i || (i = {})),
        function(e) {
            e.PREMIERE = "Premiere", e.SINGLE = "Live Stream"
        }(a || (a = {})),
        function(e) {
            e.UNSCHEDULED = "UNSCHEDULED", e.SCHEDULED = "SCHEDULED", e.CANCELLED = "CANCELLED", e.STARTED = "STARTED", e.SUCCESS = "SUCCESS", e.FAILED = "FAILED", e.UNKNOWN = "UNKNOWN"
        }(r || (r = {})),
        function(e) {
            e.LIVE = "LIVE", e.FUTURE = "FUTURE", e.PAST = "PAST"
        }(o || (o = {}));
        n("Dpm1");
        var U = Object(d.d)("Watch Now", "TimetableSegment"),
            D = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onExpandClick = function() {
                        return t.props.onExpand(t.props.event.id)
                    }, t
                }
                return s.__extends(t, e), t.prototype.render = function() {
                    return this.props.expanded ? this.expandedSegment() : this.collapsedSegment()
                }, t.prototype.collapsedSegment = function() {
                    var e = Object(d.c)(this.props.event.startAt, {
                            month: "short"
                        }),
                        t = Object(d.c)(this.props.event.startAt, {
                            day: "numeric"
                        }),
                        n = R({
                            startAt: this.props.event.startAt,
                            endAt: this.props.event.endAt
                        }),
                        i = null;
                    n === o.LIVE && (i = l.createElement(w._8, {
                        flexShrink: 0
                    }, l.createElement(w._12, {
                        label: Object(d.d)("Live", "EventLandingPage"),
                        type: w._13.Live
                    })));
                    var a, r, s = l.createElement(w._32, {
                        display: w.R.Flex,
                        borderBottom: !0,
                        padding: {
                            y: 1
                        }
                    }, l.createElement("button", {
                        "data-test-selector": "collapsed-segment-title",
                        onClick: this.onExpandClick
                    }, l.createElement(w.Q, {
                        className: "timetable-segment__title-link",
                        bold: !0,
                        color: w.K.Link,
                        type: w._46.H5,
                        ellipsis: !0
                    }, this.props.event.title)));
                    i && (s = l.createElement(w._32, {
                        borderBottom: !0,
                        padding: {
                            y: 1
                        },
                        display: w.R.Flex,
                        flexWrap: w.U.NoWrap,
                        alignItems: w.c.Center
                    }, i, l.createElement(w._8, {
                        display: w.R.Flex,
                        margin: {
                            left: .5
                        }
                    }, l.createElement("button", {
                        onClick: this.onExpandClick
                    }, l.createElement(w.Q, {
                        className: "timetable-segment__title-link",
                        bold: !0,
                        color: w.K.Link,
                        type: w._46.H5,
                        ellipsis: !0
                    }, this.props.event.title))))), this.props.event.channel && (a = this.props.event.channel.id, r = this.props.event.channel.login);
                    var c = l.createElement(k.a, {
                        eventID: this.props.event.id,
                        eventTypename: "EventLeaf",
                        areNotificationsEnabled: this.props.event.self.isFollowing,
                        eventLocation: y.a.EventDetails,
                        channelID: a,
                        channelLogin: r,
                        small: !0
                    });
                    n === o.LIVE ? c = l.createElement(w._8, null, l.createElement(w.v, {
                        linkTo: {
                            pathname: "/" + r,
                            state: {
                                content: "call_to_action",
                                medium: "event_page"
                            }
                        },
                        size: w.z.Small
                    }, U)) : n === o.PAST && (c = null);
                    var u = null;
                    return this.props.event.game && (u = l.createElement(w._8, {
                        margin: {
                            right: 1
                        },
                        display: w.R.Flex,
                        alignItems: w.c.Center,
                        overflow: w._11.Hidden
                    }, l.createElement(w._8, {
                        margin: {
                            right: .5
                        }
                    }, l.createElement(w._32, {
                        display: w.R.Flex,
                        alignItems: w.c.Center,
                        color: w.K.Alt2
                    }, l.createElement(w._22, {
                        asset: w._23.NavGames,
                        width: 18,
                        height: 18
                    }))), l.createElement(w.Q, {
                        fontSize: w.V.Size5,
                        ellipsis: !0
                    }, l.createElement(L.a, {
                        to: "/directory/game/" + encodeURIComponent(this.props.event.game.name)
                    }, this.props.event.game.displayName)))), l.createElement("div", null, l.createElement(w._32, {
                        className: "timetable-segment__row",
                        border: !0,
                        fullWidth: !0,
                        margin: {
                            y: 1
                        },
                        display: w.R.Flex,
                        flexWrap: w.U.NoWrap,
                        alignItems: w.c.Center,
                        background: w.n.Base
                    }, l.createElement(w._8, {
                        className: "timetable-segment__calendar-date",
                        display: w.R.Flex,
                        flexShrink: 0,
                        flexDirection: w.T.Column,
                        justifyContent: w._7.Center,
                        alignItems: w.c.Center
                    }, l.createElement(w.Q, {
                        fontSize: w.V.Size6,
                        transform: w._45.Uppercase
                    }, e), l.createElement(w.Q, {
                        fontSize: w.V.Size3
                    }, t)), l.createElement(w._8, {
                        overflow: w._11.Hidden,
                        flexGrow: 1,
                        margin: {
                            right: 1
                        }
                    }, s, l.createElement(w._8, {
                        display: w.R.Flex,
                        justifyContent: w._7.Between,
                        alignItems: w.c.Center,
                        flexWrap: w.U.NoWrap,
                        overflow: w._11.Hidden
                    }, l.createElement(w._8, {
                        padding: {
                            y: 1
                        },
                        display: w.R.Flex,
                        overflow: w._11.Hidden
                    }, l.createElement(w._8, {
                        flexShrink: 0
                    }, l.createElement(w.Q, {
                        type: w._46.H5
                    }, Object(d.i)(this.props.event.startAt, {
                        weekday: "long",
                        timezoneName: "short"
                    }))), l.createElement(w._8, {
                        margin: {
                            x: 1
                        }
                    }, "•"), u), c))))
                }, t.prototype.expandedSegment = function() {
                    var e, t, n = {
                            backgroundImage: "url(" + this.props.event.imageURL + ")"
                        },
                        i = R({
                            startAt: this.props.event.startAt,
                            endAt: this.props.event.endAt
                        });
                    this.props.event.channel && (e = this.props.event.channel.id, t = this.props.event.channel.login);
                    var a = l.createElement(k.a, {
                        eventID: this.props.event.id,
                        eventTypename: "EventSegment",
                        areNotificationsEnabled: this.props.event.self.isFollowing,
                        channelID: e,
                        channelLogin: t,
                        eventLocation: y.a.EventDetails
                    });
                    if (i === o.LIVE) a = l.createElement(w.v, {
                        linkTo: {
                            pathname: "/" + t,
                            state: {
                                content: "call_to_action",
                                medium: "event_page"
                            }
                        }
                    }, U);
                    else if (i === o.PAST && this.props.event.video && this.props.event.video.video) {
                        var r = "";
                        this.props.event.video.offsetSeconds && (r = "t=" + Object(I.a)(this.props.event.video.offsetSeconds)), a = l.createElement(w.v, {
                            linkTo: {
                                pathname: "/videos/" + this.props.event.video.video.id,
                                search: r,
                                state: {
                                    content: v.PageviewContent.EventPast,
                                    medium: v.PageviewMedium.EventDetails
                                }
                            }
                        }, Object(d.d)("Watch Video", "TimetableSegment"))
                    } else i === o.PAST && (a = l.createElement(w.v, {
                        disabled: !0
                    }, Object(d.d)("Past Event", "TimetableSegment")));
                    var s = this.props.event.game && this.props.event.game.boxArtURL || "",
                        c = l.createElement("img", {
                            src: s,
                            height: 130,
                            width: 93
                        });
                    if (i === o.LIVE && this.props.event.channel && this.props.event.channel.stream && this.props.event.channel.stream.previewImageURL && (c = l.createElement(w._8, {
                            position: w._15.Relative
                        }, l.createElement(w._8, {
                            position: w._15.Absolute,
                            attachLeft: !0,
                            attachTop: !0,
                            padding: .5
                        }, l.createElement(C.a, {
                            type: O.a.Live
                        })), l.createElement("img", {
                            src: this.props.event.channel.stream.previewImageURL,
                            height: 120,
                            width: 190
                        }))), i === o.PAST && this.props.event.video && this.props.event.video.video) {
                        var u = {
                            content: v.PageviewContent.EventPast,
                            medium: v.PageviewMedium.EventDetails
                        };
                        c = l.createElement("div", {
                            className: "timetable-segment__video-embed"
                        }, l.createElement(x, {
                            video: this.props.event.video.video,
                            offsetSeconds: this.props.event.video.offsetSeconds,
                            tracking: u
                        }))
                    }
                    var m = l.createElement(w.Q, {
                        color: w.K.Overlay
                    }, Object(d.i)(this.props.event.startAt, {
                        weekday: "long",
                        month: "long",
                        day: "numeric",
                        timeZoneName: "short"
                    }));
                    i === o.LIVE && (m = l.createElement(w._8, {
                        position: w._15.Relative
                    }, l.createElement(w.Q, {
                        color: w.K.Overlay
                    }, "" + Object(d.c)(this.props.event.startAt, {
                        weekday: "long",
                        month: "long",
                        day: "numeric"
                    })), l.createElement(w.Q, {
                        color: w.K.Overlay
                    }, Object(d.d)("Happening Now until", "TimeTableSegment") + " " + Object(d.i)(this.props.event.endAt, {
                        timeZoneName: "short"
                    }))));
                    var p = null;
                    return this.props.event.game && (p = l.createElement(w._8, {
                        className: "events-landing-collection__game-link",
                        margin: {
                            right: 1
                        },
                        display: w.R.Flex,
                        alignItems: w.c.Center
                    }, l.createElement(w._8, {
                        margin: {
                            right: .5
                        }
                    }, l.createElement(w._32, {
                        display: w.R.Flex,
                        alignItems: w.c.Center,
                        color: w.K.Alt2,
                        overflow: w._11.Hidden
                    }, l.createElement(w._22, {
                        asset: w._23.NavGames,
                        width: 18,
                        height: 18
                    }))), l.createElement(w.Q, {
                        fontSize: w.V.Size5,
                        ellipsis: !0
                    }, l.createElement(L.a, {
                        to: "/directory/game/" + encodeURIComponent(this.props.event.game.name)
                    }, this.props.event.game.displayName)))), l.createElement(w._32, {
                        border: !0,
                        elevation: 2,
                        fullWidth: !0,
                        margin: {
                            y: 1
                        },
                        background: w.n.Base,
                        position: w._15.Relative
                    }, l.createElement(w._8, {
                        position: w._15.Absolute,
                        attachTop: !0,
                        attachRight: !0,
                        padding: {
                            top: .5,
                            right: .5
                        }
                    }, l.createElement(w.v, {
                        overlay: !0,
                        type: w.B.Text,
                        icon: w._23.Close,
                        onClick: this.props.onDismissExpand
                    })), l.createElement(w._32, {
                        borderBottom: !0
                    }, l.createElement("div", {
                        style: n
                    }, l.createElement("div", {
                        className: "events-landing-collection__expanded-segment-header"
                    }, l.createElement(w._8, {
                        display: w.R.Flex,
                        alignItems: w.c.End,
                        flexWrap: w.U.NoWrap,
                        padding: {
                            top: 3,
                            x: 2,
                            bottom: 1
                        }
                    }, l.createElement(w._8, {
                        className: "timetable-segment__expanded-image",
                        flexShrink: 0
                    }, c), l.createElement(w._8, {
                        className: "events-landing-collection__meta",
                        flexGrow: 1,
                        margin: {
                            left: 2
                        }
                    }, l.createElement(w._8, {
                        margin: {
                            bottom: 2
                        }
                    }, l.createElement(w._8, {
                        margin: {
                            bottom: .5
                        }
                    }, l.createElement(w.Q, {
                        color: w.K.Overlay,
                        type: w._46.H3
                    }, this.props.event.title)), m), l.createElement(w._8, {
                        display: w.R.Flex,
                        alignItems: w.c.Center,
                        flexWrap: w.U.NoWrap,
                        justifyContent: w._7.Between
                    }, p, l.createElement(w._8, {
                        display: w.R.Flex,
                        flexWrap: w.U.NoWrap,
                        flexShrink: 0
                    }, l.createElement(w._8, {
                        margin: {
                            right: 1
                        }
                    }, a), l.createElement(w._8, {
                        margin: {
                            right: 1
                        }
                    }, l.createElement(b.a, {
                        id: this.props.event.id,
                        title: this.props.event.title,
                        channelID: e,
                        channelLogin: t,
                        eventLocation: y.a.EventDetails
                    })), l.createElement(_.a, {
                        targetUser: {
                            id: t || "",
                            displayName: this.props.event.channel && this.props.event.channel.displayName || "User"
                        },
                        eventID: this.props.event.id,
                        balloonDirection: w.r.BottomRight,
                        tailOffset: 10
                    })))))))), l.createElement(w._8, {
                        margin: 2
                    }, l.createElement(S, {
                        description: this.props.event.description
                    })))
                }, t
            }(l.PureComponent),
            j = Object(h.d)("EventCollectionSegment", {
                autoReportInteractive: !0
            })(D);

        function M(e) {
            return null !== e
        }
        var V = n("6zb9"),
            H = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    n.loadNextPage = function() {
                        return n.setState({
                            loadingForward: !0
                        }), n.props.loadNextPage()
                    }, n.loadPreviousPage = function() {
                        return n.setState({
                            loadingForward: !1
                        }), n.props.loadPreviousPage()
                    }, n.unexpand = function() {
                        n.setState({
                            expandedEvent: null
                        })
                    }, n.setExpanded = function(e) {
                        d.o.history.replace(s.__assign({}, d.o.history.location, {
                            state: s.__assign({}, d.o.history.location.state, {
                                expandedSegmentID: e
                            })
                        })), n.setState({
                            expandedEvent: e
                        })
                    };
                    var i = null;
                    return n.props.defaultLeaves && n.props.defaultLeaves.length && (i = n.props.defaultLeaves[0].id), n.state = {
                        expandedEvent: i,
                        loadingForward: !0
                    }, n
                }
                return s.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    this.props.eventLeaves && this.props.eventLeaves.length || null === this.state.expandedEvent && e.eventLeaves && e.eventLeaves.length && this.setState({
                        expandedEvent: e.eventLeaves[0].id
                    })
                }, t.prototype.componentDidMount = function() {
                    this.onRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.onRender()
                }, t.prototype.render = function() {
                    var e = this,
                        t = this.props.eventLeaves.map(function(t) {
                            return l.createElement(j, {
                                key: t.id,
                                expanded: t.id === e.state.expandedEvent,
                                event: t,
                                onDismissExpand: e.unexpand,
                                onExpand: e.setExpanded
                            })
                        }),
                        n = null;
                    this.props.hasPreviousPage && (n = l.createElement(w._8, {
                        fullWidth: !0,
                        display: w.R.Flex,
                        justifyContent: w._7.Center
                    }, l.createElement(w.v, {
                        type: w.B.Text,
                        icon: w._23.GlyphArrUp,
                        onClick: this.loadPreviousPage
                    }, Object(d.d)("Load Earlier Events", "TimetableSchedule"))));
                    var i = null;
                    return this.props.loading && (i = l.createElement(w._10, null)), l.createElement(w._8, {
                        className: "events-landing-collection__main-col",
                        position: w._15.Relative,
                        margin: {
                            left: 3
                        }
                    }, l.createElement(w._32, {
                        display: w.R.Flex,
                        justifyContent: w._7.Between,
                        margin: {
                            y: 1
                        },
                        padding: {
                            bottom: 1
                        },
                        borderBottom: !0
                    }, l.createElement(w.Q, {
                        transform: w._45.Uppercase,
                        color: w.K.Alt2,
                        type: w._46.H5
                    }, Object(d.d)("Schedule", "TimetableSchedule"))), l.createElement(w._8, null, n, !this.state.loadingForward && i, t, this.state.loadingForward && i, l.createElement(g.a, {
                        enabled: this.props.hasNextPage,
                        loadMore: this.loadNextPage
                    })))
                }, t.prototype.onRender = function() {
                    this.props.eventLeaves.length && this.props.latencyTracking.reportInteractive()
                }, t = s.__decorate([Object(u.a)(V, {
                    options: function(e) {
                        var t = null;
                        return e.defaultLeaves && e.defaultLeaves.length && (t = e.defaultLeaves[e.defaultLeaves.length - 1].id), {
                            variables: {
                                eventID: e.event.id,
                                nextCount: 10,
                                nextCursor: "",
                                prevCount: null,
                                prevCursor: null,
                                criteria: {
                                    firstPageOptions: {
                                        eventID: t,
                                        endsAfter: e.now
                                    }
                                }
                            }
                        }
                    },
                    props: function(e) {
                        var t, n, i, a, r = e.ownProps.defaultLeaves || [];
                        return {
                            eventLeaves: (a = e.data, t = (a.event && a.event.leaves && a.event.leaves.edges || []).map(function(e) {
                                if (!e.node) return null;
                                var t;
                                if (!e.node.channel) return null;
                                var n = null;
                                e.node.channel.stream && (n = {
                                    previewImageURL: e.node.channel.stream.previewImageURL
                                }), t = {
                                    id: e.node.channel.id,
                                    login: e.node.channel.login,
                                    displayName: e.node.channel.displayName,
                                    profileImageURL: e.node.channel.profileImageURL,
                                    stream: n
                                };
                                var i = null;
                                e.node.game && (i = {
                                    id: e.node.game.id,
                                    name: e.node.game.name,
                                    displayName: e.node.game.displayName,
                                    boxArtURL: e.node.game.boxArtURL
                                });
                                var a = null;
                                return e.node.videos && e.node.videos.edges && e.node.videos.edges.length && (a = {
                                    video: e.node.videos.edges[0].node,
                                    offsetSeconds: e.node.videos.edges[0].offsetSeconds
                                }), {
                                    id: e.node.id,
                                    title: e.node.title,
                                    description: e.node.description,
                                    imageURL: e.node.imageURL,
                                    startAt: new Date(e.node.startAt),
                                    endAt: new Date(e.node.endAt),
                                    channel: t,
                                    game: i,
                                    video: a,
                                    self: {
                                        isFollowing: e.node.self && e.node.self.isFollowing || !1
                                    }
                                }
                            }).filter(M), n = r, i = new Map, t.forEach(function(e) {
                                i.set(e.id, e)
                            }), t.concat(n.filter(function(e) {
                                return !i.has(e.id)
                            }))),
                            hasNextPage: e.data.event && e.data.event.leaves && e.data.event.leaves.pageInfo.hasNextPage,
                            hasPreviousPage: e.data.event && e.data.event.leaves && e.data.event.leaves.pageInfo.hasPreviousPage,
                            loading: e.data.loading,
                            loadNextPage: function() {
                                return e.data.fetchMore({
                                    variables: {
                                        eventID: e.data.event && e.data.event.id,
                                        nextCount: 10,
                                        nextCursor: (t = e.data, t.event && t.event.leaves && t.event.leaves.edges && 0 !== t.event.leaves.edges.length ? t.event.leaves.edges[t.event.leaves.edges.length - 1].cursor : ""),
                                        prevCount: null,
                                        prevCursor: null
                                    },
                                    updateQuery: function(e, t) {
                                        var n = t.fetchMoreResult;
                                        return n ? s.__assign({}, e, {
                                            event: s.__assign({}, e.event, {
                                                leaves: s.__assign({}, e.event.leaves, {
                                                    edges: e.event.leaves.edges.concat(n.event.leaves.edges),
                                                    pageInfo: s.__assign({}, e.event.leaves.pageInfo, {
                                                        hasNextPage: n.event.leaves.pageInfo.hasNextPage,
                                                        hasPreviousPage: e.event.leaves.pageInfo.hasPreviousPage
                                                    })
                                                })
                                            })
                                        }) : e
                                    }
                                });
                                var t
                            },
                            loadPreviousPage: function() {
                                return e.data.fetchMore({
                                    variables: {
                                        eventID: e.data.event && e.data.event.id,
                                        nextCount: null,
                                        nextCursor: null,
                                        prevCount: 10,
                                        prevCursor: (t = e.data, t.event && t.event.leaves && t.event.leaves.edges && 0 !== t.event.leaves.edges.length ? t.event.leaves.edges[0].cursor : "")
                                    },
                                    updateQuery: function(e, t) {
                                        var n = t.fetchMoreResult;
                                        return n ? s.__assign({}, e, {
                                            event: s.__assign({}, e.event, {
                                                leaves: s.__assign({}, e.event.leaves, {
                                                    edges: n.event.leaves.edges.concat(e.event.leaves.edges),
                                                    pageInfo: s.__assign({}, e.event.leaves.pageInfo, {
                                                        hasNextPage: e.event.leaves.pageInfo.hasNextPage,
                                                        hasPreviousPage: n.event.leaves.pageInfo.hasPreviousPage
                                                    })
                                                })
                                            })
                                        }) : e
                                    }
                                });
                                var t
                            }
                        }
                    }
                })], t)
            }(l.Component),
            B = Object(h.d)("EventCollectionSchedule")(H),
            W = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        now: new Date
                    }, t
                }
                return s.__extends(t, e), t.prototype.render = function() {
                    return l.createElement(B, s.__assign({}, this.props, {
                        now: this.state.now
                    }))
                }, t
            }(l.Component),
            z = (n("K5Ul"), Object(h.d)("EventCollectionPageComponent", {
                autoReportInteractive: !0
            })(function(e) {
                return l.createElement(w._8, {
                    className: "events-landing-collection",
                    margin: {
                        top: 3
                    }
                }, l.createElement(f.b, {
                    suppressScrollX: !0,
                    disableDebounce: !0
                }), l.createElement(w._8, {
                    className: "events-landing-collection__info-col"
                }, l.createElement(g.c, null, l.createElement(N, {
                    event: e.event
                }))), l.createElement(W, {
                    event: e.event,
                    defaultLeaves: e.defaultLeaves
                }))
            })),
            G = n("SI0h"),
            K = n("2aoH"),
            Q = (n("ioX4"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        countdownActive: !0
                    }, t.cancelCountdown = function() {
                        t.setState({
                            countdownActive: !1
                        })
                    }, t
                }
                return s.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = P({
                            "event-landing-action__progress": this.state.countdownActive
                        }),
                        t = "";
                    "function" == typeof d.d && (t = Object(d.d)("This event is Live! Head to the channel page to watch and chat.", "EventLandingAction"), this.state.countdownActive && (t = Object(d.d)("This event is Live! Redirecting to the channel page in 5 seconds.", "EventLandingAction")));
                    var n = l.createElement(w._8, {
                            margin: {
                                left: 1
                            }
                        }, l.createElement(w.v, {
                            linkTo: {
                                pathname: "/" + this.props.login,
                                state: {
                                    content: "cancelled_countdown",
                                    medium: "event_page"
                                }
                            }
                        }, Object(d.d)("Go to Channel", "EventLandingAction"))),
                        i = null;
                    this.state.countdownActive && (n = l.createElement(w._8, {
                        margin: {
                            left: 1
                        }
                    }, l.createElement(w.v, {
                        onClick: this.cancelCountdown
                    }, Object(d.d)("Cancel", "EventLandingAction"))), i = l.createElement(w._18, {
                        countdown: 5,
                        onCountdownEnd: this.props.onCountdownSuccess,
                        size: w._19.Small
                    }));
                    var a = l.createElement(w.G, {
                        status: w.I.Live
                    });
                    return this.props.premiere && (a = l.createElement(w._22, {
                        asset: w._23.VideoPremiere,
                        type: w._24.Live,
                        width: 10
                    })), l.createElement(w._8, null, l.createElement(w._32, {
                        display: w.R.Flex,
                        flexWrap: w.U.NoWrap,
                        border: !0,
                        margin: {
                            top: 2
                        },
                        alignItems: w.c.Center,
                        className: "event-landing-action__strip",
                        background: w.n.Base
                    }, l.createElement(w._8, {
                        display: w.R.InlineFlex,
                        flexShrink: 0,
                        margin: {
                            right: 1
                        }
                    }, a), l.createElement(w._8, {
                        className: "event-landing-action__message",
                        display: w.R.InlineFlex,
                        flexWrap: w.U.Wrap,
                        flexGrow: 1
                    }, t), l.createElement(w._8, {
                        display: w.R.InlineFlex,
                        flexShrink: 0
                    }, n)), l.createElement(w._8, {
                        className: e
                    }, i))
                }, t
            }(l.Component)),
            q = Object(h.d)("EventLandingAction")(Q),
            Y = (n("ea40"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return s.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = R({
                            startAt: new Date(this.props.startAt),
                            endAt: new Date(this.props.endAt),
                            premiere: this.props.premiere ? {
                                status: this.props.premiere.status
                            } : void 0
                        }),
                        t = l.createElement(w.v, {
                            disabled: !0
                        }, Object(d.d)("Past Event", "EventLandingTitle"));
                    return e === o.LIVE ? t = l.createElement(w.v, {
                        linkTo: {
                            pathname: "/" + this.props.channel.login,
                            state: {
                                content: "call_to_action",
                                medium: "event_page"
                            }
                        }
                    }, Object(d.d)("Watch Now", "EventLandingTitle")) : e === o.FUTURE && (t = l.createElement(k.a, {
                        eventID: this.props.id,
                        eventTypename: "EventLeaf",
                        areNotificationsEnabled: !(!this.props.self || !this.props.self.isFollowing),
                        channelID: this.props.channel.id,
                        channelLogin: this.props.channel.login,
                        eventLocation: y.a.EventDetails
                    })), l.createElement(w._32, {
                        borderBottom: !0
                    }, l.createElement(w.Q, {
                        type: w._46.H2,
                        className: "event-landing-title__heading"
                    }, this.props.title), l.createElement(w._8, {
                        display: w.R.Flex,
                        margin: {
                            top: 2,
                            bottom: 3
                        }
                    }, l.createElement(w._8, {
                        margin: {
                            right: 1
                        }
                    }, t), l.createElement(w._8, {
                        margin: {
                            right: 1
                        }
                    }, l.createElement(b.a, {
                        id: this.props.id,
                        title: this.props.title,
                        channelID: this.props.channel.id,
                        channelLogin: this.props.channel.login,
                        eventLocation: y.a.EventDetails
                    })), l.createElement(_.a, {
                        targetUser: {
                            id: this.props.channel.id,
                            displayName: this.props.channel.displayName || this.props.channel.login
                        },
                        eventID: this.props.id,
                        balloonDirection: w.r.Bottom
                    })))
                }, t
            }(l.Component)),
            $ = Object(h.d)("EventLandingTitle")(Y),
            Z = n("vKFS"),
            X = n("ISok"),
            J = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return s.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = null;
                    return this.props.pastPremiere && (e = l.createElement(X.a, {
                        listContext: Z.b.MixedGameAndChannelList,
                        trackingContent: v.PageviewContent.EventPast,
                        trackingMedium: v.PageviewMedium.EventDetails,
                        videos: [this.props.pastPremiere]
                    })), l.createElement(w._32, {
                        padding: {
                            top: 2
                        }
                    }, l.createElement(w.Q, {
                        transform: w._45.Uppercase,
                        type: w._46.H5,
                        color: w.K.Alt2
                    }, Object(d.d)("Videos", "EventLandingVideos")), l.createElement(w._8, {
                        margin: {
                            top: 1
                        }
                    }, l.createElement(w._8, null, e)))
                }, t = s.__decorate([Object(h.d)("EventLandingVideos")], t)
            }(l.Component),
            ee = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onCountdownSuccess = function() {
                        t.props.goToVideo(t.props.channel.login)
                    }, t
                }
                return s.__extends(t, e), t.prototype.render = function() {
                    var e = null;
                    R({
                        startAt: new Date(this.props.startAt),
                        endAt: new Date(this.props.endAt),
                        premiere: this.props.premiere ? {
                            status: this.props.premiere.status
                        } : void 0
                    }) !== o.LIVE || this.props.noRedirect || (e = l.createElement(q, {
                        id: this.props.id,
                        login: this.props.channel.login,
                        premiere: this.props.premiere || null,
                        onCountdownSuccess: this.onCountdownSuccess
                    }));
                    var t = null;
                    return this.props.premiere && this.props.premiere.pastPremiere && this.props.premiere.pastPremiere.id && (t = l.createElement(J, {
                        pastPremiere: this.props.premiere.pastPremiere
                    })), l.createElement(w._8, null, l.createElement($, {
                        id: this.props.id,
                        title: this.props.title,
                        startAt: this.props.startAt,
                        endAt: this.props.endAt,
                        channel: this.props.channel,
                        self: this.props.self,
                        premiere: this.props.premiere
                    }), e, t, l.createElement(S, {
                        description: this.props.description
                    }))
                }, t = s.__decorate([Object(h.d)("EventLandingBody", {
                    autoReportInteractive: !0
                })], t)
            }(l.Component),
            te = n("5GFz"),
            ne = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return s.__extends(t, e), t.prototype.render = function() {
                    var e = new Date(this.props.startAt);
                    return l.createElement(w.C, {
                        row: !0
                    }, l.createElement(w._2, {
                        flexShrink: 0
                    }, l.createElement(w.E, {
                        size: w.F.Size32,
                        aspect: w.l.Aspect16x9,
                        src: this.props.imageURL,
                        alt: "" !== this.props.imageURL ? this.props.title : ""
                    }, l.createElement(te.a, {
                        date: e
                    }))))
                }, t = s.__decorate([Object(h.d)("EventLandingImage", {
                    autoReportInteractive: !0
                })], t)
            }(l.Component),
            ie = n("NY9D"),
            ae = n("FsFC");
        var re = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderGameBoxArt = function(e, t) {
                        return l.createElement(w.E, {
                            src: e,
                            alt: t,
                            aspect: w.l.Aspect3x4,
                            size: w.F.Size4
                        })
                    }, t
                }
                return s.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e, t, n = new Date(this.props.startAt),
                        i = new Date(this.props.endAt),
                        r = null,
                        o = null,
                        c = null;
                    return t = this.props.eventType === a.PREMIERE ? Object(d.d)("Premiere", "EventLandingInfo") : Object(d.d)("Live Stream", "EventLandingInfo"), e = l.createElement(w._8, {
                        margin: {
                            top: 3
                        }
                    }, l.createElement(w.Q, {
                        transform: w._45.Uppercase,
                        type: w._46.H5,
                        color: w.K.Alt2
                    }, Object(d.d)("Event Type", "EventLandingInfo")), l.createElement(w._8, {
                        margin: {
                            top: 1
                        }
                    }, l.createElement(w.Q, {
                        fontSize: w.V.Size5
                    }, t))), this.props.game && (this.props.game.boxArtURL && this.props.game.displayName && (o = l.createElement(w._8, {
                        display: w.R.InlineFlex
                    }, this.renderGameBoxArt(this.props.game.boxArtURL, this.props.game.displayName))), r = l.createElement(w._8, {
                        margin: {
                            top: 3
                        }
                    }, l.createElement(w.Q, {
                        transform: w._45.Uppercase,
                        type: w._46.H5,
                        color: w.K.Alt2
                    }, Object(d.d)("Streaming", "EventLandingInfo")), l.createElement(L.a, {
                        to: {
                            pathname: Object(ie.c)(this.props.game.displayName),
                            state: {
                                content: "event_game",
                                medium: "event_page"
                            }
                        }
                    }, l.createElement(w._8, {
                        display: w.R.Flex,
                        flexWrap: w.U.Wrap,
                        alignItems: w.c.Center,
                        margin: {
                            top: 1
                        }
                    }, o, l.createElement(w._8, {
                        display: w.R.InlineFlex,
                        margin: {
                            left: 1
                        }
                    }, l.createElement(w.Q, {
                        fontSize: w.V.Size5
                    }, this.props.game.displayName)))))), this.props.channel.profileImageURL && (c = l.createElement(w._8, {
                        display: w.R.InlineFlex
                    }, l.createElement(w.m, {
                        size: 40,
                        src: this.props.channel.profileImageURL,
                        alt: "User profile picture"
                    }))), l.createElement(w._8, {
                        margin: {
                            x: 3
                        },
                        padding: {
                            y: 2
                        }
                    }, l.createElement(w._8, null, l.createElement(w.Q, {
                        transform: w._45.Uppercase,
                        type: w._46.H5,
                        color: w.K.Alt2
                    }, Object(d.d)("Date & Time", "EventLandingInfo")), l.createElement(w._8, {
                        margin: {
                            top: 1
                        }
                    }, l.createElement(w.Q, {
                        fontSize: w.V.Size5
                    }, function(e, t) {
                        var n = new Date;
                        t && (n = t);
                        var i = {
                            weekday: "long",
                            month: "short",
                            day: "numeric"
                        };
                        return n.getFullYear() !== e.getFullYear() && (i = s.__assign({}, i, {
                            year: "numeric"
                        })), Object(d.c)(e, i)
                    }(n))), l.createElement(w._8, {
                        margin: {
                            top: 1
                        }
                    }, l.createElement(w.Q, {
                        fontSize: w.V.Size5
                    }, function(e) {
                        return Object(d.i)(e, {
                            timeZoneName: "short"
                        })
                    }(n))), l.createElement(w._8, {
                        margin: {
                            top: 1
                        }
                    }, l.createElement(w.Q, {
                        fontSize: w.V.Size5
                    }, function(e, t) {
                        var n = Math.abs(e.getTime() / 1e3 - t.getTime() / 1e3);
                        return Object(ae.a)(n)
                    }(n, i)))), e, l.createElement(w._8, {
                        margin: {
                            top: 3
                        }
                    }, l.createElement(w.Q, {
                        transform: w._45.Uppercase,
                        type: w._46.H5,
                        color: w.K.Alt2
                    }, Object(d.d)("Starring", "EventLandingInfo")), l.createElement(L.a, {
                        to: {
                            pathname: "/" + this.props.channel.login,
                            state: {
                                content: "author_avatar",
                                medium: "event_page"
                            }
                        }
                    }, l.createElement(w._8, {
                        display: w.R.Flex,
                        flexWrap: w.U.Wrap,
                        alignItems: w.c.Center,
                        margin: {
                            top: 1
                        }
                    }, c, l.createElement(w._8, {
                        display: w.R.InlineFlex,
                        margin: {
                            left: 1
                        }
                    }, l.createElement(w.Q, {
                        fontSize: w.V.Size5
                    }, "" !== this.props.channel.displayName ? this.props.channel.displayName : this.props.channel.login))))), r)
                }, t = s.__decorate([Object(h.d)("EventLandingInfo")], t)
            }(l.Component),
            oe = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return s.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return l.createElement(w._32, {
                        background: w.n.Base
                    }, l.createElement(w._32, {
                        border: !0
                    }, l.createElement(ne, {
                        title: this.props.title,
                        imageURL: this.props.imageURL,
                        startAt: this.props.startAt
                    })), l.createElement(w._32, {
                        borderRight: !0,
                        borderLeft: !0,
                        borderBottom: !0
                    }, l.createElement(re, {
                        startAt: this.props.startAt,
                        endAt: this.props.endAt,
                        channel: this.props.channel,
                        game: this.props.game,
                        eventType: this.props.eventType
                    })))
                }, t = s.__decorate([Object(h.d)("EventLandingSidePanel")], t)
            }(l.Component),
            se = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return s.__extends(t, e), t.prototype.render = function() {
                    return this.props.eventLeaf.channel ? l.createElement(w._8, {
                        position: w._15.Relative
                    }, l.createElement(K.a, null, l.createElement(G.a, {
                        currentPage: G.b.Events,
                        channelLogin: this.props.eventLeaf.channel && this.props.eventLeaf.channel.login
                    })), l.createElement(w._8, {
                        display: w.R.Flex,
                        flexWrap: w.U.NoWrap,
                        margin: {
                            left: 3,
                            top: 3,
                            right: 3
                        }
                    }, l.createElement(w._8, {
                        flexShrink: 0,
                        flexGrow: 0,
                        margin: {
                            right: 3
                        }
                    }, l.createElement(oe, {
                        title: this.props.eventLeaf.title,
                        imageURL: this.props.eventLeaf.imageURL,
                        startAt: this.props.eventLeaf.startAt,
                        endAt: this.props.eventLeaf.endAt,
                        channel: this.props.eventLeaf.channel,
                        game: this.props.eventLeaf.game,
                        eventType: this.props.eventLeaf.type
                    })), l.createElement(w._8, {
                        flexGrow: 1
                    }, l.createElement(ee, {
                        id: this.props.eventLeaf.id,
                        title: this.props.eventLeaf.title,
                        description: this.props.eventLeaf.description,
                        startAt: this.props.eventLeaf.startAt,
                        endAt: this.props.eventLeaf.endAt,
                        channel: this.props.eventLeaf.channel,
                        self: this.props.eventLeaf.self,
                        premiere: this.props.eventLeaf.premiere,
                        noRedirect: this.props.noRedirect,
                        goToVideo: this.props.goToVideo
                    })))) : null
                }, t
            }(l.Component),
            le = Object(h.d)("EventLeafPageComponent", {
                autoReportInteractive: !0
            })(se);

        function de(e) {
            var t = null;
            null !== e.owner && (t = {
                id: e.owner.id || "",
                login: e.owner.login || "",
                displayName: e.owner.displayName || ""
            });
            var n = o.FUTURE,
                i = null;
            if (e.nextLeaf && e.nextLeaf.edges && e.nextLeaf.edges.length) {
                var a = e.nextLeaf.edges[0];
                a.node && (n = R({
                    startAt: new Date(a.node.startAt),
                    endAt: new Date(a.node.endAt)
                }), i = a.node.channel && a.node.channel.login || null)
            }
            var r = null;
            e.collectionStart && (r = new Date(e.collectionStart));
            var s = null;
            return e.collectionEnd && (s = new Date(e.collectionEnd)), {
                id: e.id,
                title: e.title,
                description: e.description,
                imageURL: e.collectionImageURL,
                startAt: r,
                endAt: s,
                isLive: n === o.LIVE,
                liveChannelLogin: i,
                owner: t,
                self: {
                    isFollowing: e.self && e.self.isFollowing || !1
                }
            }
        }
        var ce = n("DP4t"),
            ue = (n("Cb/j"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.clearExpandedSegmentHistory = function() {
                        t.props.location.state && d.o.history.replace(s.__assign({}, d.o.history.location, {
                            state: s.__assign({}, d.o.history.location.state, {
                                expandedSegmentID: void 0
                            })
                        }))
                    }, t.goToVideo = function(e) {
                        t.props.history.push("/" + e)
                    }, t
                }
                return s.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.onRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.onRender()
                }, t.prototype.render = function() {
                    if (this.props.data.loading) return this.loadingSpinner();
                    if (this.props.data.error || !this.props.data.event) return this.errorPage();
                    if (this.props.data.event.__typename === i.EVENT_LEAF) {
                        if (this.props.data.event.parent) {
                            var e = (t = A(this.props.data.event), n = null, t.channel && (n = s.__assign({}, t.channel, {
                                stream: null
                            })), {
                                id: t.id,
                                title: t.title,
                                description: t.description,
                                imageURL: t.imageURL,
                                startAt: new Date(t.startAt),
                                endAt: new Date(t.endAt),
                                channel: n,
                                game: t.game,
                                video: t.video,
                                self: {
                                    isFollowing: t.self.isFollowing
                                }
                            });
                            return this.eventCollection(de(this.props.data.event.parent), [e])
                        }
                        return this.eventLeaf(A(this.props.data.event))
                    }
                    var t, n;
                    return function(e) {
                        return e.__typename === i.EVENT_COLLECTION
                    }(this.props.data.event) ? this.eventCollection(de(this.props.data.event)) : this.errorPage()
                }, t.prototype.eventLeaf = function(e) {
                    return this.canRenderLeaf(e) ? l.createElement(w._8, {
                        position: w._15.Relative
                    }, l.createElement(le, {
                        eventLeaf: e,
                        noRedirect: this.props.location.state && this.props.location.state.noRedirect,
                        goToVideo: this.goToVideo
                    })) : this.errorPage()
                }, t.prototype.canRenderLeaf = function(e) {
                    return e.channel && e.game && e.channel.id && e.channel.login
                }, t.prototype.eventCollection = function(e, t) {
                    return l.createElement(z, {
                        event: e,
                        defaultLeaves: t
                    })
                }, t.prototype.errorPage = function() {
                    return l.createElement(c.a, {
                        message: Object(d.d)("Error loading data.", "EventLandingPage")
                    })
                }, t.prototype.loadingSpinner = function() {
                    return l.createElement(w._8, {
                        margin: {
                            top: 3
                        }
                    }, l.createElement(w._10, {
                        fillContent: !0
                    }))
                }, t.prototype.onRender = function() {
                    this.props.data.event && (this.props.latencyTracking.reportInteractive(), this.props.data.event.title && d.o.setPageTitle(this.props.data.event.title)), this.clearExpandedSegmentHistory()
                }, t = s.__decorate([Object(u.a)(ce, {
                    options: function(e) {
                        return {
                            variables: {
                                eventName: e.location.state && e.location.state.expandedSegmentID || e.match.params.eventName
                            }
                        }
                    }
                }), Object(h.d)("EventLandingPage", {
                    destination: p.a.EventDetails
                }), Object(m.a)({
                    location: v.PageviewLocation.EventDetails,
                    skip: function(e) {
                        return e.data.loading || !!e.data.error
                    }
                })], t)
            }(l.Component)),
            me = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return s.__extends(t, e), t.prototype.shouldComponentUpdate = function(e) {
                    return e.match.params.eventName !== this.props.match.params.eventName
                }, t.prototype.render = function() {
                    return l.createElement(ue, s.__assign({}, this.props))
                }, t
            }(l.Component);
        n.d(t, "EventLandingPage", function() {
            return me
        })
    },
    OFFm: function(e, t, n) {
        "use strict";
        var i = n("RH2O"),
            a = n("2KeS"),
            r = n("+xm8"),
            o = n("f2i/"),
            s = n("Aj/L"),
            l = n("TToO"),
            d = n("GiK3"),
            c = n("3zLD"),
            u = n("6sO2"),
            m = n("oIkB"),
            p = n("MQiv"),
            v = n("Odds"),
            h = n("Ru53"),
            g = n("9SRT"),
            f = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleButton = function(e) {
                        return e && (e.stopPropagation(), e.preventDefault()), t.toggleFollowing()
                    }, t
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    var e = Object(u.d)("Remind Me", "FollowEvent"),
                        t = Object(u.d)("Reminder Set", "FollowEvent");
                    if (this.props.small) {
                        var n = e,
                            i = v._23.Heart;
                        return this.props.areNotificationsEnabled && (n = t, i = v._23.FollowCheck), d.createElement(v._49, {
                            label: n,
                            direction: this.props.tooltipDirection
                        }, d.createElement(v.w, {
                            size: v.x.Default,
                            icon: i,
                            onClick: this.handleButton,
                            ariaLabel: n
                        }))
                    }
                    return d.createElement(v.v, {
                        type: this.props.areNotificationsEnabled ? v.B.Success : v.B.Default,
                        onClick: this.handleButton,
                        icon: this.props.areNotificationsEnabled ? v._23.FollowCheck : v._23.Heart,
                        ariaLabel: this.props.areNotificationsEnabled ? t : e
                    }, this.props.areNotificationsEnabled ? t : e)
                }, t.prototype.createOptimisticResponse = function(e) {
                    var t = {
                        __typename: e ? "FollowEventPayload" : "UnfollowEventPayload",
                        event: {
                            id: this.props.eventID,
                            self: {
                                __typename: "EventSelfConnection",
                                isFollowing: e
                            },
                            __typename: this.props.eventTypename
                        }
                    };
                    return e ? {
                        __typename: "Mutation",
                        followEvent: t
                    } : {
                        __typename: "Mutation",
                        unfollowEvent: t
                    }
                }, t.prototype.toggleFollowing = function() {
                    if (!this.props.isLoggedIn) return this.props.login();
                    var e = l.__assign({}, Object(m.a)({
                        eventID: this.props.eventID
                    }), {
                        optimisticResponse: this.createOptimisticResponse(!this.props.areNotificationsEnabled)
                    });
                    this.props.areNotificationsEnabled ? this.props.unfollowEvent(e) : this.props.followEvent(e), Object(p.d)({
                        action: this.props.areNotificationsEnabled ? p.b.EmailReminderOff : p.b.EmailReminderOn,
                        channelLogin: this.props.channelLogin || "undefined",
                        channelID: this.props.channelID || "undefined",
                        eventID: this.props.eventID,
                        location: this.props.eventLocation
                    })
                }, t
            }(d.PureComponent),
            k = Object(c.compose)(Object(c.graphql)(h, {
                name: "followEvent"
            }), Object(c.graphql)(g, {
                name: "unfollowEvent"
            }))(f);
        var _ = Object(i.b)(function(e) {
            return {
                isLoggedIn: Object(s.d)(e)
            }
        }, function(e) {
            return Object(a.b)({
                login: function() {
                    return Object(o.f)(r.a.EventFollowButton)
                }
            }, e)
        })(k);
        n.d(t, "a", function() {
            return _
        })
    },
    OOv5: function(e, t, n) {
        "use strict";
        var i, a = n("TToO"),
            r = n("6sO2"),
            o = n("oIkB"),
            s = n("Aj/L");
        ! function(e) {
            e.NewSession = "new-session", e.ClearSession = "clear-session"
        }(i || (i = {}));
        var l = r.o.logger.withCategory("host-service-worker-messenger"),
            d = function() {
                function e() {}
                return e.syncSession = function() {
                    var e = Object(s.c)(r.o.store.getState());
                    if (e) {
                        var t = e.id;
                        this.sendMessage({
                            type: i.NewSession,
                            userId: t
                        })
                    } else this.sendMessage({
                        type: i.ClearSession
                    })
                }, e.sendMessage = function(e) {
                    var t = this;
                    if (navigator.serviceWorker.controller) this.postMessage(e);
                    else {
                        l.debug("cannot postMessage immediately. waiting for a service worker to take control");
                        var n = function() {
                            l.debug("controller changed", {
                                controllerExists: !!navigator.serviceWorker.controller
                            }), navigator.serviceWorker.removeEventListener("controllerchange", n), t.postMessage(e)
                        };
                        navigator.serviceWorker.addEventListener("controllerchange", n)
                    }
                }, e.postMessage = function(e) {
                    navigator.serviceWorker.controller ? (l.debug("postMessage", e), navigator.serviceWorker.controller.postMessage(JSON.stringify(e))) : l.error(new Error("navigator.serviceWorker.controller is null"), "postMessage called with no controlling service worker")
                }, e
            }(),
            c = function() {
                function e() {}
                return e.exists = function() {
                    return null !== r.o.storage.getOptional("browserPushNotificationsEnabled")
                }, e.isEnabled = function() {
                    return r.o.storage.get("browserPushNotificationsEnabled", !1)
                }, e.setEnabled = function() {
                    r.o.storage.set("browserPushNotificationsEnabled", !0)
                }, e.setDisabled = function() {
                    r.o.storage.set("browserPushNotificationsEnabled", !1)
                }, e
            }();
        var u = n("UbVv"),
            m = n("OtmA"),
            p = null;

        function v() {
            if (p) return p;
            var e = m.register({
                scope: "/"
            });
            return p = e || Promise.reject(new Error("service worker runtime not available"))
        }
        var h = n("JBcW"),
            g = n("TbkX");
        n.d(t, "a", function() {
            return k
        });
        var f = r.o.logger.withCategory("browser-push-notifications-manager"),
            k = function() {
                function e() {}
                return e.initialize = function() {
                    return this.initPromise ? this.initPromise : (this.initPromise = this.initializationLogic(), this.initPromise)
                }, e.initializationLogic = function() {
                    return a.__awaiter(this, void 0, void 0, function() {
                        var e, t;
                        return a.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return Object(u.a)() ? (f.debug("permissions have been denied. nothing to do here."), [2]) : [4, v()];
                                case 1:
                                    return n.sent(), e = Object(s.d)(r.o.store.getState()), [4, this.hasPushSubscription()];
                                case 2:
                                    return t = n.sent(), d.syncSession(), t ? c.exists() && !c.isEnabled() || !e ? [4, this.unsubscribe()] : [3, 4] : [3, 5];
                                case 3:
                                    n.sent(), n.label = 4;
                                case 4:
                                    return [3, 7];
                                case 5:
                                    return s.d ? !Object(u.b)() || c.exists() && !c.isEnabled() ? [3, 7] : [4, this.subscribe()] : [3, 7];
                                case 6:
                                    n.sent(), n.label = 7;
                                case 7:
                                    return [2]
                            }
                        })
                    })
                }, e.userSubscribe = function(e) {
                    return a.__awaiter(this, void 0, void 0, function() {
                        var t;
                        return a.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    c.setEnabled(), n.label = 1;
                                case 1:
                                    return n.trys.push([1, 3, , 4]), [4, this.subscribe()];
                                case 2:
                                    return n.sent(), [3, 4];
                                case 3:
                                    return t = n.sent(), Object(u.a)() || f.warn(t, "user subscribe failed", {
                                        context: e
                                    }), [3, 4];
                                case 4:
                                    return Object(h.c)({
                                        allowed: Object(u.b)(),
                                        context: e
                                    }), [2]
                            }
                        })
                    })
                }, e.userUnsubscribe = function(e) {
                    return a.__awaiter(this, void 0, void 0, function() {
                        return a.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return c.setDisabled(), [4, this.unsubscribe()];
                                case 1:
                                    return t.sent(), Object(h.b)({
                                        context: e
                                    }), [2]
                            }
                        })
                    })
                }, e.hasPushSubscription = function() {
                    return a.__awaiter(this, void 0, void 0, function() {
                        return a.__generator(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, this.getPushSubscription()];
                                case 1:
                                    return [2, null !== e.sent()]
                            }
                        })
                    })
                }, e.subscribe = function() {
                    return a.__awaiter(this, void 0, void 0, function() {
                        var e, t, n, i, l, d;
                        return a.__generator(this, function(c) {
                            switch (c.label) {
                                case 0:
                                    if (Object(u.a)()) throw new Error("notification permission is denied");
                                    if (!Object(s.d)(r.o.store.getState())) throw new Error("cannot be enabled logged out");
                                    if (!(e = r.b.get("notification_app_server_public_key", ""))) throw new Error("application server public key is blank");
                                    return [4, v()];
                                case 1:
                                    return t = c.sent(), [4, this.getPushSubscription()];
                                case 2:
                                    return (n = c.sent()) ? [3, 4] : (i = function(e) {
                                        for (var t = (e + "=".repeat((4 - e.length % 4) % 4)).replace(/\-/g, "+").replace(/_/g, "/"), n = atob(t), i = new Uint8Array(n.length), a = 0; a < n.length; ++a) i[a] = n.charCodeAt(a);
                                        return i
                                    }(e), [4, t.pushManager.subscribe({
                                        userVisibleOnly: !0,
                                        applicationServerKey: i
                                    })]);
                                case 3:
                                    n = c.sent(), c.label = 4;
                                case 4:
                                    if (!(l = n.toJSON()).endpoint) throw new Error("push subscription 'endpoint' missing");
                                    if (!l.keys) throw new Error("push subscription 'keys' missing");
                                    if (!l.keys.auth) throw new Error("push subscription 'keys.auth' missing");
                                    if (!l.keys.p256dh) throw new Error("push subscription 'keys.p256dh' missing");
                                    return d = Object(o.a)({
                                        endpoint: l.endpoint,
                                        auth: l.keys.auth,
                                        p256DH: l.keys.p256dh
                                    }), [4, r.o.apollo.client.mutate(a.__assign({
                                        mutation: g
                                    }, d))];
                                case 5:
                                    return c.sent(), [2]
                            }
                        })
                    })
                }, e.unsubscribe = function() {
                    return a.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return a.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, this.getPushSubscription()];
                                case 1:
                                    return (e = t.sent()) ? [4, e.unsubscribe()] : [2];
                                case 2:
                                    if (!t.sent()) throw new Error("push subscription unsubscribe unexpectedly failed");
                                    return [2]
                            }
                        })
                    })
                }, e.getPushSubscription = function() {
                    return a.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return a.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, v()];
                                case 1:
                                    return [4, t.sent().pushManager.getSubscription()];
                                case 2:
                                    return (e = t.sent()) ? [2, e] : [2, null]
                            }
                        })
                    })
                }, e
            }()
    },
    Ojfd: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ChannelBanner"
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
                                    value: "bannerImageURL"
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
                end: 100
            }
        };
        n.loc.source = {
            body: "query ChannelBanner($login: String!) {\nuser(login: $login) {\nid\ndisplayName\nlogin\nbannerImageURL\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    PPNL: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("OAwv"),
            r = n("6sO2"),
            o = n("9u8h"),
            s = {
                en: "en_US",
                de: "de_DE",
                es: "es_ES",
                "es-mx": "es_ES",
                fr: "fr_FR",
                it: "it_IT",
                hu: "hu_HU",
                pl: "pl_PL",
                pt: "pt_BR",
                "pt-br": "pt_BR",
                vi: "vn_VN",
                tr: "tr_TR",
                ro: "ro_RO",
                cs: "cs_CZ",
                el: "el_GR",
                ru: "ru_RU",
                th: "th_TH",
                "zh-cn": "zh_CN",
                "zh-tw": "zh_TW",
                ja: "ja_JP",
                ko: "ko_KR"
            },
            l = function(e) {
                return e && s[e] || "en_US"
            },
            d = n("pqU3");
        t.a = function() {
            var e = this;
            return function(t) {
                clearTimeout(c), c = setTimeout(function() {
                    return i.__awaiter(e, void 0, void 0, function() {
                        var e, n, s, c, u, m;
                        return i.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    e = r.o.logger.withCategory("leagueoflegends-api"), t(Object(d.e)(!0)), i.label = 1;
                                case 1:
                                    return i.trys.push([1, 3, , 4]), n = r.o.intl.getLanguageCode(), s = l(n), c = o.a.getAPIURL("/api/lol/champions?" + a.stringify({
                                        locale: s,
                                        on_site: 1
                                    })).toString(), [4, o.a.get(c)];
                                case 2:
                                    return (u = i.sent()).body ? t(Object(d.f)(u.body)) : (e.warn("LoL champion API response body was empty."), t(Object(d.d)(!0))), [3, 4];
                                case 3:
                                    throw m = i.sent(), t(Object(d.d)(!0)), e.error(m, "Failed to load LoL champion data"), m;
                                case 4:
                                    return [2]
                            }
                        })
                    })
                }, u)
            }
        };
        var c = 0,
            u = 350
    },
    QdVH: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("GiK3"),
            r = n("6sO2"),
            o = n("bhVC"),
            s = n("+Znq");
        var l = n("MQiv"),
            d = n("Odds"),
            c = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onShareClicked = function(e) {
                        var n = "";
                        switch (e) {
                            case o.b.Twitter:
                                n = "twitter";
                                break;
                            case o.b.Facebook:
                                n = "facebook";
                                break;
                            case o.b.Reddit:
                                n = "reddit";
                                break;
                            case o.b.VKontakte:
                                n = "vk";
                                break;
                            default:
                                n = "unknown"
                        }
                        Object(l.c)({
                            shareMedium: n,
                            eventID: t.props.id,
                            channelLogin: t.props.channelLogin || "undefined",
                            channelID: t.props.channelID || "undefined",
                            location: t.props.eventLocation
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = "https://www.twitch.tv/events/" + this.props.id,
                        t = this.props.children;
                    return this.props.children || (t = a.createElement(d.v, {
                        dropdown: !0,
                        type: d.B.Hollow
                    }, Object(r.d)("Share", "ShareEvent"))), a.createElement(s.a, null, t, a.createElement(d.q, {
                        direction: this.props.balloonDirection
                    }, a.createElement(d._8, {
                        padding: 1
                    }, a.createElement(d._8, {
                        display: d.R.Flex,
                        flexDirection: d.T.Row,
                        flexWrap: d.U.NoWrap,
                        justifyContent: d._7.Center
                    }, a.createElement(o.a, {
                        type: o.b.Twitter,
                        text: this.props.title,
                        url: e,
                        onShareClick: this.onShareClicked
                    }), a.createElement(o.a, {
                        type: o.b.Facebook,
                        text: this.props.title,
                        url: e,
                        onShareClick: this.onShareClicked
                    }), a.createElement(o.a, {
                        type: o.b.Reddit,
                        text: this.props.title,
                        url: e,
                        onShareClick: this.onShareClicked
                    }), a.createElement(o.a, {
                        type: o.b.VKontakte,
                        text: this.props.title,
                        url: e,
                        onShareClick: this.onShareClicked
                    }), a.createElement(o.a, {
                        type: o.b.Copy,
                        text: this.props.title,
                        url: e
                    })))))
                }, t
            }(a.Component);
        n.d(t, "a", function() {
            return c
        })
    },
    Ru53: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "Events_FollowEvent"
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
                                value: "FollowEventInput"
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
                            value: "followEvent"
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
                                    value: "event"
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
                                                value: "EventCollection"
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
                                                            value: "isFollowing"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }]
                                                }
                                            }]
                                        }
                                    }, {
                                        kind: "InlineFragment",
                                        typeCondition: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "EventLeaf"
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
                                                            value: "isFollowing"
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
                end: 193
            }
        };
        n.loc.source = {
            body: "mutation Events_FollowEvent($input: FollowEventInput!) {\nfollowEvent(input: $input) {\nevent {\n...on EventCollection {\nid\nself {\nisFollowing\n}\n}\n...on EventLeaf {\nid\nself {\nisFollowing\n}\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    SI0h: function(e, t, n) {
        "use strict";
        var i = n("TPVZ"),
            a = n("RH2O"),
            r = n("2KeS"),
            o = n("V5M+"),
            s = n("TToO"),
            l = n("GiK3"),
            d = n("6sO2"),
            c = n("x49/"),
            u = n.n(c),
            m = n("Odds"),
            p = (n("ZUp+"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return s.__extends(t, e), t.prototype.render = function() {
                    return l.createElement("div", {
                        onClick: this.props.closeModal
                    }, l.createElement(m.e, {
                        type: m.j.FadeIn,
                        duration: m.g.Long,
                        timing: m.i.EaseInOut,
                        enabled: !0
                    }, l.createElement(m._32, {
                        className: "browser-push-notifications-upsell",
                        alignItems: m.c.Center,
                        justifyContent: m._7.Center,
                        position: m._15.Fixed,
                        display: m.R.Flex,
                        background: m.n.Overlay,
                        fullHeight: !0,
                        fullWidth: !0,
                        attachTop: !0,
                        attachLeft: !0
                    }, l.createElement(m._8, {
                        className: "browser-push-notifications-upsell__container",
                        display: m.R.Flex,
                        textAlign: m._42.Center,
                        padding: {
                            x: 1
                        },
                        position: m._15.Relative
                    }, l.createElement(m.e, {
                        type: m.j.SlideInBottom,
                        duration: m.g.Long,
                        timing: m.i.EaseInOut,
                        enabled: !0
                    }, l.createElement(m.Q, {
                        type: m._46.H3,
                        fontSize: m.V.Size3,
                        lineHeight: m._9.Body
                    }, Object(d.d)("Don't miss out when your favorite streamers go live!", "BrowserNotificationsUpsellModal")), l.createElement(m._8, {
                        margin: {
                            top: 1
                        }
                    }, l.createElement(m.Q, {
                        type: m._46.H4,
                        fontSize: m.V.Size4,
                        color: m.K.OverlayAlt,
                        lineHeight: m._9.Body
                    }, Object(d.d)("Turn on Browser Notifications to get updates even when your browser window is minimized", "BrowserNotificationsUpsellModal")))), l.createElement(m._8, {
                        className: "browser-push-notifications-upsell__arrow",
                        position: m._15.Absolute,
                        attachTop: !0,
                        attachLeft: !0
                    }, l.createElement(m.e, {
                        type: m.j.SlideInBottom,
                        delay: m.f.Short,
                        duration: m.g.Long,
                        timing: m.i.EaseInOut,
                        enabled: !0
                    }, l.createElement("img", {
                        src: u.a
                    })))))))
                }, t
            }(l.Component));
        var v = Object(a.b)(null, function(e) {
            return Object(r.b)({
                closeModal: o.c
            }, e)
        })(p);
        var h = Object(a.b)(null, function(e) {
            return Object(r.b)({
                showBrowserNotificationsUpsellModal: function() {
                    return Object(o.d)(v, {})
                },
                closeBrowserNotificationsUpsellModal: o.c
            }, e)
        })(i.a);
        n.d(t, "b", function() {
            return i.b
        }), n.d(t, !1, function() {}), n.d(t, "a", function() {
            return h
        })
    },
    TPVZ: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("HW6M"),
            r = n("GiK3"),
            o = n("F8kA"),
            s = n("6sO2"),
            l = n("hdYS"),
            d = n("DtWM"),
            c = n("+Znq"),
            u = n("7vx8"),
            m = n("czpb"),
            p = n("MsZa"),
            v = n("OOv5"),
            h = n("LBNC"),
            g = n("UbVv"),
            f = n("JBcW"),
            k = n("RH2O"),
            _ = n("2KeS"),
            b = n("V5M+"),
            y = n("E9Qg"),
            E = n("ebTC"),
            w = n("4Q9N"),
            S = n("Odds"),
            N = (n("4Jix"), n("Ojfd")),
            L = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.openModal = function() {
                        var e = t.props.data && t.props.data.user;
                        e && t.props.showModal(E.a, {
                            userID: e.id,
                            login: e.login,
                            displayName: e.displayName,
                            imageType: w.a.ProfileBanner,
                            showCloser: !0,
                            successCallback: t.imageUploaded
                        })
                    }, t.imageUploaded = function() {
                        t.props.data && t.props.data.refetch()
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e, t, n = {
                            "channel-banner--open": !this.props.collapsed
                        },
                        i = this.props.data;
                    if (i && i.loading || !this.props.firstPageLoaded) e = r.createElement(S._14, {
                        height: 380,
                        "data-test-selector": "channel-banner__placeholder"
                    });
                    else {
                        i && i.user && i.user.bannerImageURL ? t = {
                            backgroundImage: "url(" + i.user.bannerImageURL + ")"
                        } : (n["channel-banner--default"] = !0, t = {
                            backgroundImage: "url(" + y + ")"
                        });
                        var o = null;
                        this.props.canEdit && (o = r.createElement(S._32, {
                            className: "channel-banner__edit-overlay",
                            background: S.n.Overlay,
                            position: S._15.Absolute,
                            attachTop: !0,
                            attachLeft: !0,
                            fullWidth: !0
                        }, r.createElement("button", {
                            className: "channel-banner__edit-overlay__button",
                            "data-test-selector": "channel-banner__edit-overlay-interactable",
                            onClick: this.openModal
                        }, r.createElement(S._8, {
                            display: S.R.Flex,
                            alignItems: S.c.Center,
                            flexDirection: S.T.Column,
                            justifyContent: S._7.Center
                        }, r.createElement(S._8, null, r.createElement(S._22, {
                            asset: S._23.Edit
                        })), Object(s.d)("Update Profile Banner", "ChannelBanner"))))), e = r.createElement("div", {
                            className: "channel-banner__image",
                            "data-test-selector": "channel-banner",
                            style: t
                        }, o)
                    }
                    return r.createElement("div", {
                        className: a("channel-banner", n),
                        onTransitionEnd: this.props.onTransitionEnd
                    }, r.createElement(S._2, {
                        fullWidth: !0
                    }, e))
                }, t.prototype.componentWillUnmount = function() {
                    this.props.closeModal()
                }, t
            }(r.Component),
            C = Object(u.a)(N, {
                options: function(e) {
                    return {
                        variables: {
                            login: e.channelLogin
                        }
                    }
                },
                skip: function(e) {
                    return !e.channelLogin || !e.firstPageLoaded
                }
            })(L);
        var O = Object(k.b)(function(e) {
                return {
                    firstPageLoaded: e.session.firstPageLoaded
                }
            }, function(e) {
                return Object(_.b)({
                    closeModal: b.c,
                    showModal: b.d
                }, e)
            })(C),
            I = n("x9n8"),
            P = n("CSlQ"),
            F = (n("WClm"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.openModal = function(e) {
                        e.stopPropagation(), t.props.showModal(I.a, {
                            userID: t.props.userID,
                            login: t.props.login,
                            displayName: t.props.displayName,
                            showCloser: !0
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return r.createElement(S._8, {
                        className: "edit-profile-overlay",
                        display: S.R.Flex,
                        justifyContent: S._7.Center,
                        alignContent: S.b.Center,
                        fullHeight: !0,
                        fullWidth: !0
                    }, r.createElement(S.w, {
                        overlay: !0,
                        ariaLabel: Object(s.d)("Edit Profile", "ChannelHeader"),
                        icon: S._23.Edit,
                        onClick: this.openModal
                    }))
                }, t = i.__decorate([Object(P.d)("EditProfileOverlay")], t)
            }(r.Component));
        var T = Object(k.b)(null, function(e) {
                return Object(_.b)({
                    showModal: b.d
                }, e)
            })(F),
            x = n("70dR"),
            A = (n("z4Db"), n("kOMe"));
        n.d(t, "b", function() {
            return R
        }), n.d(t, "a", function() {
            return B
        });
        var R, U = "channel-header__edit-profile-overlay",
            D = "channel-header__verified-badge",
            j = "channel-header__live-indicator",
            M = "TWILIGHT_BROWSER_NOTIFICATIONS_UPSELL",
            V = "yes",
            H = "browser-notifications-upsell-seen";
        ! function(e) {
            e[e.Channel = 1] = "Channel", e[e.Clips = 2] = "Clips", e[e.Collections = 3] = "Collections", e[e.Events = 4] = "Events", e[e.Success = 5] = "Success", e[e.Followers = 6] = "Followers", e[e.Following = 7] = "Following", e[e.Videos = 8] = "Videos"
        }(R || (R = {}));
        var B = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                n.verifiedBadgeElement = r.createElement(S._49, {
                    label: Object(s.d)("Verified", "ChannelHeader"),
                    direction: S._51.Right
                }, r.createElement(S._8, {
                    className: "channel-header__verified",
                    "data-target": D,
                    display: S.R.Flex,
                    alignItems: S.c.Center,
                    margin: {
                        left: 1
                    }
                }, r.createElement(S._22, {
                    asset: S._23.Verified
                }))), n.ChannelStatusIndicatorElement = r.createElement(S._8, {
                    margin: {
                        left: 1
                    },
                    "data-target": j
                }, r.createElement(S._49, {
                    label: Object(s.d)("Live Now", "ChannelHeader"),
                    direction: S._51.Right
                }, r.createElement(S.G, {
                    status: S.I.Live,
                    pulse: !0
                }))), n.renderAvatarEditButton = function() {
                    return n.props.data && n.props.data.user && n.isChannelEditor() ? r.createElement(S._32, {
                        className: U,
                        background: S.n.Overlay,
                        position: S._15.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        fullHeight: !0,
                        fullWidth: !0,
                        display: S.R.InlineFlex,
                        alignItems: S.c.Center,
                        justifyContent: S._7.Center
                    }, r.createElement(T, {
                        userID: n.props.data.user.id,
                        login: n.props.data.user.login,
                        displayName: n.props.data.user.displayName
                    })) : null
                }, n.toggleChannelBanner = function() {
                    n.setState(function(e) {
                        var t = !e.bannerSlideIn;
                        return t ? {
                            bannerHidden: !e.bannerHidden,
                            bannerSlideIn: t
                        } : {
                            bannerSlideIn: t
                        }
                    })
                }, n.completedBannerAnimation = function() {
                    n.setState(function(e) {
                        return e.bannerSlideIn ? e : {
                            bannerHidden: !0
                        }
                    })
                }, n.onUpdateDebounce = function() {
                    if (!n.resizeAnimationFrame && n.channelHeader) {
                        var e = n.channelHeader.querySelector('[data-target="channel-header-left"]');
                        n.updateWidth(n.getWidth(e).width), n.resizeAnimationFrame = requestAnimationFrame(n.handleWindowResize)
                    }
                }, n.handleWindowResize = function() {
                    n.resizeAnimationFrame = null, n.getChannelHeaderSize()
                }, n.maybeShowBrowserNotificationsUpsell = function() {
                    return i.__awaiter(n, void 0, void 0, function() {
                        return i.__generator(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return !s.l.get(H, !1) && Object(h.a)() && Object(g.c)() && s.o.experiments.getAssignment(M) === V ? [4, v.a.hasPushSubscription()] : [3, 3];
                                case 1:
                                    return e.sent() ? [3, 3] : (s.l.set(H, !0), this.props.showBrowserNotificationsUpsellModal(), [4, v.a.userSubscribe(f.a.Channel)]);
                                case 2:
                                    e.sent(), this.props.closeBrowserNotificationsUpsellModal(), e.label = 3;
                                case 3:
                                    return [2]
                            }
                        })
                    })
                }, n.saveChannelHeaderRef = function(e) {
                    return n.channelHeader = e
                };
                var a = s.o.experiments.getAssignment("TWILIGHT_GET_BITS_TOP_NAV");
                return n.state = {
                    live: !1,
                    bannerHidden: !0,
                    bannerSlideIn: !1,
                    isGetBitsButtonTopNavExperimentEnabled: "treatment" === a
                }, n
            }
            return i.__extends(t, e), t.prototype.componentWillMount = function() {
                this.updateLiveState(this.props)
            }, t.prototype.componentDidMount = function() {
                window.addEventListener("resize", this.onUpdateDebounce), !this.props.data || this.props.data.loading || this.props.data.error || this.getChannelHeaderSize(), this.reportInteractive()
            }, t.prototype.componentWillReceiveProps = function(e) {
                this.updateLiveState(e)
            }, t.prototype.componentDidUpdate = function() {
                this.channelHeader && this.updateWidth(this.getWidth(this.channelHeader.querySelector('[data-target="channel-header-left"]')).width), this.onUpdateDebounce(), this.reportInteractive()
            }, t.prototype.componentWillUnmount = function() {
                this.resizeAnimationFrame && cancelAnimationFrame(this.resizeAnimationFrame), window.removeEventListener("resize", this.onUpdateDebounce), this.props.latencyTracking.reportInteractive()
            }, t.prototype.updateWidth = function(e) {
                var t = e !== this.width || this.width !== this.prevWidth;
                void 0 !== this.width && (this.prevWidth = this.width), this.width !== e && (this.width = e), t && (this.resizeAnimationFrame && (cancelAnimationFrame(this.resizeAnimationFrame), this.resizeAnimationFrame = null), this.onUpdateDebounce())
            }, t.prototype.render = function() {
                var e, t, n = 0,
                    i = 0,
                    u = 0,
                    m = s.a.defaultAvatarURL;
                this.props.data && this.props.data.user && !this.props.data.loading && !this.props.data.error && (n = this.props.data.user.videos.totalCount, i = this.props.data.user.followers.totalCount, u = this.props.data.user.follows.totalCount, m = this.props.data.user.profileImageURL, e = this.props.data.user.displayName, t = this.props.data.user.roles && this.props.data.user.roles.isPartner);
                var v = this.state.live && !this.isActiveTab(R.Channel),
                    h = this.createChannelLinks(n, i, u),
                    g = {
                        "channel-header__user": !0,
                        "channel-header__user--selected": this.isActiveTab(R.Channel)
                    },
                    f = null;
                this.canRenderBitsButton() && (f = r.createElement(S._8, {
                    margin: {
                        left: 1
                    }
                }, r.createElement(p.a, {
                    channelLogin: this.props.channelLogin,
                    isInTopNav: !1
                })));
                var k, _ = r.createElement(S._8, {
                    display: S.R.Flex,
                    flexWrap: S.U.NoWrap,
                    alignItems: S.c.Center,
                    flexShrink: 0
                }, r.createElement(S._8, {
                    className: "channel-header__user-avatar channel-header__user-avatar--active",
                    margin: {
                        right: 1
                    },
                    display: S.R.Flex,
                    flexShrink: 0,
                    alignItems: S.c.Stretch
                }, r.createElement(S._8, {
                    position: S._15.Relative
                }, r.createElement(S.m, {
                    size: 36,
                    src: m,
                    alt: e || ""
                }), this.renderAvatarEditButton())), e ? r.createElement(S.Q, {
                    type: S._46.H5
                }, e) : r.createElement(S._8, {
                    alignItems: S.c.Center
                }, r.createElement(S._14, {
                    lineCount: 1,
                    width: 120
                })), v && this.ChannelStatusIndicatorElement, t && this.verifiedBadgeElement);
                k = this.isActiveTab(R.Channel) ? r.createElement("div", {
                    className: "channel-header__banner-toggle",
                    onClick: this.toggleChannelBanner,
                    "data-target": "channel-header__channel-link",
                    "data-a-target": "user-channel-header-item"
                }, _) : this.props.data && this.props.data.user && this.props.data.user.login ? r.createElement(o.a, {
                    to: "/" + this.props.data.user.login,
                    "data-target": "channel-header__channel-link",
                    "data-a-target": "user-channel-header-item"
                }, _) : _;
                var b = this.state.bannerHidden ? S.R.HideAccessible : S.R.Block,
                    y = null;
                return this.isActiveTab(R.Channel) && (y = r.createElement(S._8, {
                    display: b
                }, r.createElement(O, {
                    channelLogin: this.props.channelLogin,
                    canEdit: this.isChannelEditor(),
                    collapsed: !this.state.bannerSlideIn,
                    onTransitionEnd: this.completedBannerAnimation
                }))), r.createElement(S._8, {
                    className: "channel-header",
                    flexShrink: 0
                }, y, r.createElement(S._8, {
                    display: S.R.Flex,
                    justifyContent: S._7.Between,
                    flexWrap: S.U.NoWrap,
                    fullHeight: !0,
                    refDelegate: this.saveChannelHeaderRef,
                    margin: {
                        x: 3
                    }
                }, r.createElement(S._8, {
                    display: S.R.Flex,
                    alignItems: S.c.Stretch,
                    flexShrink: 0,
                    flexWrap: S.U.NoWrap,
                    "data-target": "channel-header-left"
                }, r.createElement(S._2, {
                    className: a(g),
                    padding: {
                        y: .5,
                        right: 2
                    },
                    display: S.R.Flex,
                    flexWrap: S.U.NoWrap,
                    alignItems: S.c.Center,
                    flexShrink: 0
                }, k), this.renderTabs(h), r.createElement(S._8, {
                    className: "channel-header__item channel-header__item--no-underline",
                    padding: {
                        x: 1
                    },
                    flexShrink: 0,
                    alignSelf: S.d.Center,
                    "data-target": "channel-header-button"
                }, r.createElement(c.a, {
                    alwaysMountBalloonContent: !0
                }, r.createElement(S.w, {
                    icon: S._23.NavMore,
                    ariaLabel: Object(s.d)("More", "ChannelHeader")
                }), r.createElement(S.q, {
                    direction: S.r.Bottom,
                    noTail: !0
                }, r.createElement(S._8, {
                    padding: {
                        y: 1
                    }
                }, this.renderDropdown(h)))))), r.createElement(S._8, {
                    display: S.R.Flex,
                    flexWrap: S.U.NoWrap,
                    flexShrink: 0,
                    alignItems: S.c.Center,
                    className: "channel-header__right",
                    "data-target": "channel-header-right"
                }, r.createElement(S._8, {
                    className: "channel-header__follow-button",
                    display: S.R.Flex,
                    alignItems: S.c.Stretch,
                    margin: {
                        left: 1
                    }
                }, r.createElement(l.a, {
                    updateContainerWidth: this.onUpdateDebounce,
                    isHostedFollow: !1,
                    channelLogin: this.props.channelLogin,
                    onFollow: this.maybeShowBrowserNotificationsUpsell,
                    followUIType: l.b.IconAndText,
                    unfollowUIType: l.b.IconOnly
                })), r.createElement(S._8, {
                    margin: {
                        left: 1
                    }
                }, r.createElement(x.a, {
                    updateContainerWidth: this.onUpdateDebounce,
                    channelLogin: this.props.channelLogin,
                    hideEsportsSubscription: this.props.hideEsportsSubscription
                })), f)), r.createElement(d.a, {
                    onResize: this.onUpdateDebounce
                }))
            }, t.prototype.updateLiveState = function(e) {
                e.data && e.data.user && !e.data.loading && !e.data.error && this.setState({
                    live: !!e.data.user.stream && "" !== e.data.user.stream.id
                })
            }, t.prototype.generateUserLink = function(e, t) {
                void 0 === e && (e = ""), void 0 === t && (t = !1);
                var n = this.props.data && this.props.data.user && this.props.data.user.login;
                if (!n) return "#";
                var i = "/" + n + "/" + e;
                return t ? Object(m.a)(i) : i
            }, t.prototype.renderTabs = function(e) {
                var t = this;
                return e.map(function(e) {
                    var n = e.count ? r.createElement(S._8, {
                            className: "channel-header__item-count",
                            display: S.R.Flex,
                            margin: {
                                left: .5
                            }
                        }, r.createElement(S.Q, {
                            type: S._46.Span,
                            fontSize: S.V.Size5
                        }, e.count)) : null,
                        a = t.generateUserLink(e.pathSuffix, e.isExternal),
                        s = {};
                    return e.isExternal && (s.target = Object(m.b)() ? "_blank" : ""), r.createElement(S._2, {
                        key: "channel-header__item--" + e.label,
                        alignItems: S.c.Center,
                        flexShrink: 0
                    }, r.createElement(o.a, i.__assign({
                        className: "channel-header__item channel-header__item--hide " + (e.isSelected ? "channel-header__item--selected" : "")
                    }, s, {
                        to: a,
                        "data-target": "channel-header-item",
                        "data-a-target": e.label.toLowerCase() + "-channel-header-item"
                    }), r.createElement(S._8, {
                        padding: {
                            x: 2,
                            y: .5
                        },
                        display: S.R.Flex
                    }, r.createElement(S.Q, {
                        type: S._46.Span,
                        fontSize: S.V.Size5
                    }, e.label), n)))
                })
            }, t.prototype.renderDropdown = function(e) {
                var t = this;
                return e.map(function(e) {
                    var n = e.count ? r.createElement(S._8, {
                            className: "channel-header__item-count",
                            display: S.R.Flex,
                            margin: {
                                left: .5
                            }
                        }, r.createElement(S.Q, {
                            type: S._46.Span
                        }, e.count)) : null,
                        a = t.generateUserLink(e.pathSuffix, e.isExternal),
                        o = {};
                    return e.isExternal && (o.targetBlank = !0), r.createElement(S._8, {
                        key: "channel-header__dropdown-item--" + e.label,
                        "data-target": "channel-header-dropdown-item"
                    }, r.createElement(S._6, i.__assign({
                        linkTo: a,
                        disabled: "#" === a
                    }, o), r.createElement(S._8, {
                        className: "channel-header__dropdown-hover-target",
                        padding: {
                            y: .5,
                            x: 1
                        },
                        display: S.R.Flex
                    }, r.createElement(S.Q, {
                        type: S._46.Span
                    }, e.label), n)))
                })
            }, t.prototype.createChannelLinks = function(e, t, n) {
                return [{
                    label: Object(s.d)("Videos", "ChannelHeader"),
                    count: Object(s.e)(e),
                    pathSuffix: "videos/all",
                    isExternal: !1,
                    isSelected: this.isActiveTab(R.Videos)
                }, {
                    label: Object(s.d)("Clips", "ChannelHeader"),
                    pathSuffix: "clips",
                    isExternal: !1,
                    isSelected: this.isActiveTab(R.Clips)
                }, {
                    label: Object(s.d)("Collections", "ChannelHeader"),
                    pathSuffix: "collections",
                    isExternal: !1,
                    isSelected: this.isActiveTab(R.Collections)
                }, {
                    label: Object(s.d)("Events", "ChannelHeader"),
                    pathSuffix: "events",
                    isExternal: !1,
                    isSelected: this.isActiveTab(R.Events)
                }, {
                    label: Object(s.d)("Followers", "ChannelHeader"),
                    count: Object(s.e)(t),
                    pathSuffix: "followers",
                    isExternal: !1,
                    isSelected: this.isActiveTab(R.Followers)
                }, {
                    label: Object(s.d)("Following", "ChannelHeader"),
                    count: Object(s.e)(n),
                    pathSuffix: "following",
                    isExternal: !1,
                    isSelected: this.isActiveTab(R.Following)
                }]
            }, t.prototype.isActiveTab = function(e) {
                return R[this.props.currentPage] === R[e]
            }, t.prototype.isChannelEditor = function() {
                return !!this.props.data && !!this.props.data.currentUser && !!this.props.data.user && !!this.props.data.currentUser.roles && (this.props.data.currentUser.id === this.props.data.user.id || this.props.data.currentUser.roles.isStaff || this.props.data.currentUser.roles.isSiteAdmin)
            }, t.prototype.getChannelHeaderSize = function() {
                if (this.channelHeader) {
                    var e = this.channelHeader.querySelector('[data-target="channel-header-left"]'),
                        t = this.channelHeader.querySelector('[data-target="channel-header-right"]'),
                        n = this.channelHeader.querySelectorAll('[data-target="channel-header-item"]'),
                        i = this.channelHeader.querySelectorAll('[data-target="channel-header-dropdown-item"]');
                    if (n.length) {
                        var a = this.getWidth(this.channelHeader).width,
                            r = this.getWidth(e).width + this.getWidth(t).width + 20 - a;
                        if (r > 0)
                            for (var o = n.length - 1; o >= 0; o--) {
                                if (!(l = n[o]).classList.contains("channel-header__item--hide")) {
                                    var s = this.getWidth(l);
                                    if (l.classList.add("channel-header__item--hide"), i[o].classList.remove("channel-header__item--hide"), (r -= s.width) <= 0) break
                                }
                            } else
                                for (o = 0; o < n.length; o++) {
                                    var l;
                                    if ((l = n[o]).classList.contains("channel-header__item--hide")) {
                                        if (l.classList.remove("channel-header__item--hide"), (s = this.getWidth(l)).width >= Math.abs(r)) {
                                            l.classList.add("channel-header__item--hide");
                                            break
                                        }
                                        l.classList.remove("channel-header__item--hide"), i[o].classList.add("channel-header__item--hide"), r += s.width
                                    }
                                }
                        var d = this.channelHeader.querySelector('[data-target="channel-header-button"]');
                        if (d) {
                            var c = !this.channelHeader.querySelectorAll('[data-target="channel-header-item"].channel-header__item--hide').length;
                            d.classList.toggle("channel-header__item--hide", c)
                        }
                    }
                }
            }, t.prototype.canRenderBitsButton = function() {
                return this.props.data && !this.props.data.loading && this.props.currentPage !== R.Clips && this.props.data.currentUser && this.props.data.user && this.props.data.user.cheer && !1 === this.state.isGetBitsButtonTopNavExperimentEnabled
            }, t.prototype.getWidth = function(e) {
                return e ? {
                    width: e.clientWidth
                } : {
                    width: 0
                }
            }, t.prototype.reportInteractive = function() {
                !this.props.data || this.props.data.loading || this.props.data.error || this.props.latencyTracking.reportInteractive()
            }, t = i.__decorate([Object(u.a)(A, {
                options: function(e) {
                    return {
                        variables: {
                            login: e.channelLogin
                        }
                    }
                },
                skip: function(e) {
                    return !e.channelLogin
                }
            }), Object(P.d)("ChannelHeader")], t)
        }(r.Component)
    },
    TbkX: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "BrowserPushNotifications_AddBrowserPushSubscription"
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
                                value: "AddBrowserPushSubscriptionInput"
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
                            value: "addBrowserPushSubscription"
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
                                    value: "browserPushSubscriptionID"
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
                end: 178
            }
        };
        n.loc.source = {
            body: "mutation BrowserPushNotifications_AddBrowserPushSubscription($input: AddBrowserPushSubscriptionInput!) {\naddBrowserPushSubscription(input: $input) {\nbrowserPushSubscriptionID\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    Tt3k: function(e, t, n) {
        "use strict";
        t.b = function(e, t, n) {
            var i = new FileReader;
            i.onloadend = function() {
                n && n(i.result)
            }, i.readAsDataURL(e);
            var a = new FileReader;
            a.onloadend = function() {
                t(a.result)
            }, a.readAsArrayBuffer(e)
        }, t.a = function(e) {
            var t = "";
            if (e && e.name) {
                var n = e.name;
                t = n.slice((Math.max(0, n.lastIndexOf(".")) || 1 / 0) + 1)
            }
            "" === t && (t = "png");
            return t
        }
    },
    UbVv: function(e, t, n) {
        "use strict";
        t.c = function() {
            return window.Notification && "default" === window.Notification.permission
        }, t.a = function() {
            return window.Notification && "denied" === window.Notification.permission
        }, t.b = function() {
            return window.Notification && "granted" === window.Notification.permission
        }
    },
    Vr3l: function(e, t, n) {
        e.exports = n.p + "assets/overwatch-chars-9fc82f039194a365a8d6d2bf2797e041.png"
    },
    W6ca: function(e, t, n) {
        "use strict";
        t.c = function(e, t) {
            if (!t) throw new Error("Attempted to upload an empty file object.");
            var n = decodeURI(e);
            return fetch(n, {
                method: "PUT",
                body: new Blob([t])
            })
        }, t.b = function(e, t, n) {
            if (void 0 === n) throw new Error("No default avatar selected.");
            return fetch(a.a.krakenEndpoint + "/users/" + e + "/default_images?client_id=" + a.a.authSettings.clientID + "&api_version=" + a.a.defaultAPIVersion, {
                method: "PUT",
                headers: {
                    Authorization: "OAuth " + t,
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify({
                    default_profile_image: r.b[n].id
                })
            })
        }, t.a = function(e, t, n, r) {
            return i.__awaiter(this, void 0, void 0, function() {
                return i.__generator(this, function(i) {
                    switch (i.label) {
                        case 0:
                            return [4, fetch(a.a.krakenEndpoint + "/users/" + e + "/upload_image?client_id=" + a.a.authSettings.clientID + "&api_version=" + a.a.defaultAPIVersion + "&image_type=" + n + "&format=" + r, {
                                method: "POST",
                                headers: {
                                    Authorization: "OAuth " + t
                                }
                            })];
                        case 1:
                            return [2, i.sent().json()]
                    }
                })
            })
        };
        var i = n("TToO"),
            a = n("6sO2"),
            r = n("puy8")
    },
    WClm: function(e, t) {},
    WxKK: function(e, t, n) {
        "use strict";
        var i = n("7FW4");
        n.d(t, "a", function() {
            return i.a
        })
    },
    XYqD: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
        });
        var i = n("GiK3"),
            a = (n.n(i), n("Odds")),
            r = function() {
                return i.createElement(a.C, null, i.createElement(a.k, {
                    ratio: a.l.Aspect16x9
                }, i.createElement(a._14, null)), i.createElement(a.D, null, i.createElement(a._8, {
                    display: a.R.Flex,
                    margin: {
                        bottom: 1
                    }
                }, i.createElement(a._8, {
                    display: a.R.InlineBlock,
                    margin: {
                        top: 1,
                        right: 1
                    }
                }, i.createElement(a._14, {
                    width: 40,
                    height: 56
                })), i.createElement(a._8, {
                    display: a.R.InlineBlock,
                    margin: {
                        top: 1
                    }
                }, i.createElement(a.Q, null, i.createElement(a._14, {
                    width: 150
                })), i.createElement(a.Q, {
                    fontSize: a.V.Size7
                }, i.createElement(a._14, {
                    width: 100
                }))))))
            }
    },
    YUUt: function(e, t, n) {
        e.exports = n.p + "assets/counterstrike-skill-groups-24ec0fc40a78435bc37349dfbde7c720.png"
    },
    YVIF: function(e, t) {},
    "ZUp+": function(e, t) {},
    a0ve: function(e, t) {},
    a4C9: function(e, t) {},
    aBed: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return b
        });
        var i = n("TToO"),
            a = n("HW6M"),
            r = (n.n(a), n("OAwv")),
            o = (n.n(r), n("GiK3")),
            s = (n.n(o), n("F8kA")),
            l = n("6sO2"),
            d = n("iOr9"),
            c = n("vKFS"),
            u = n("SZoP"),
            m = n("mi6k"),
            p = n("CSlQ"),
            v = n("81qH"),
            h = n("Odds"),
            g = n("a0ve"),
            f = (n.n(g), "video-view-count"),
            k = "video-length",
            _ = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        hovered: !1,
                        didAnimatedPreviewLoad: !1,
                        didAnimatedPreviewFailToLoad: !1
                    }, t.renderVariation = function() {
                        return o.createElement(c.a, {
                            context: t.props.context,
                            title: t.props.video.title,
                            linkTo: {
                                pathname: "/videos/" + t.props.video.id,
                                state: t.getLinkState(),
                                search: t.generateSearchString()
                            },
                            thumbnailImageProps: {
                                src: t.props.video.previewThumbnailURL,
                                alt: t.props.video.title,
                                onLoad: t.reportInteractive,
                                onError: t.reportInteractive
                            },
                            channelLogin: t.props.video.owner && t.props.video.owner.login || "",
                            channelLoginLinkTo: {
                                pathname: "/" + (t.props.video.owner ? t.props.video.owner.login : ""),
                                state: t.getLinkState()
                            },
                            channelImageProps: {
                                src: t.props.video.owner && t.props.video.owner.profileImageURL || "",
                                alt: t.props.video.owner ? t.props.video.owner.displayName : ""
                            },
                            gameTitle: t.props.video.game && t.props.video.game.name || "",
                            gameTitleLinkTo: {
                                pathname: "/directory/game/" + encodeURI(t.props.video.game && t.props.video.game.name || ""),
                                state: t.getLinkState()
                            },
                            gameBoxArtImageProps: {
                                src: t.props.video.game && t.props.video.game.boxArtURL || "",
                                alt: t.props.video.game ? t.props.video.game.displayName : ""
                            },
                            datePublished: t.props.video.publishedAt,
                            viewCount: t.props.video.viewCount,
                            durationInSeconds: t.props.video.lengthSeconds,
                            animatedImageProps: t.props.video.animatedPreviewURL ? {
                                src: t.props.video.animatedPreviewURL,
                                alt: ""
                            } : void 0,
                            watchedProgressPercent: t.getVideoPreviousWatchPercentage() || 0
                        })
                    }, t.renderFallback = function() {
                        var e = null,
                            n = t.getVideoPreviousWatchPercentage();
                        return null !== n && (e = o.createElement(h._8, {
                            position: h._15.Absolute,
                            attachBottom: !0,
                            fullWidth: !0
                        }, o.createElement(h._18, {
                            size: h._19.Small,
                            value: n,
                            mask: !0
                        }))), o.createElement("div", i.__assign({
                            onClick: t.onClickHandler,
                            onMouseEnter: t.onMouseEnterHandler,
                            onMouseLeave: t.onMouseLeaveHandler
                        }, Object(h._60)(t.props)), o.createElement(h.C, null, o.createElement(h._8, {
                            fullWidth: !0
                        }, o.createElement(h.k, {
                            overflow: !0
                        }, o.createElement("div", null, o.createElement(h._32, {
                            display: h.R.InlineFlex,
                            position: h._15.Absolute,
                            attachTop: !0,
                            attachLeft: !0,
                            margin: .5,
                            zIndex: h._59.Default,
                            fontSize: h.V.Size6,
                            background: h.n.Overlay,
                            color: h.K.Overlay,
                            className: "video-preview-card__preview-overlay-stat"
                        }, o.createElement(h._31, {
                            "data-test-selector": f,
                            icon: h._23.GlyphViews,
                            label: Object(l.d)("views", "VideoPreviewCard"),
                            value: Object(l.f)(t.props.video.viewCount)
                        })), o.createElement(h._32, {
                            display: h.R.InlineFlex,
                            position: h._15.Absolute,
                            attachTop: !0,
                            attachRight: !0,
                            margin: .5,
                            zIndex: h._59.Default,
                            fontSize: h.V.Size6,
                            background: h.n.Overlay,
                            color: h.K.Overlay,
                            className: "video-preview-card__preview-overlay-stat"
                        }, o.createElement(h._31, {
                            "data-test-selector": k,
                            icon: h._23.GlyphLength,
                            label: Object(l.d)("length", "VideoPreviewCard"),
                            value: Object(m.b)(t.props.video.lengthSeconds)
                        })), t.videoPreviewImage(), e))), o.createElement(h.D, null, o.createElement(h._8, {
                            display: h.R.Flex,
                            flexDirection: h.T.Row,
                            flexWrap: h.U.NoWrap,
                            padding: {
                                top: .5
                            }
                        }, t.props.hideGameArt ? null : t.gameBoxArt(), t.videoMetaData()))))
                    }, t.onClickHandler = function() {
                        t.props.onClick && t.props.onClick(t.props.tracking.content_index)
                    }, t.onMouseEnterHandler = function() {
                        t.setState({
                            hovered: !0
                        })
                    }, t.onMouseLeaveHandler = function() {
                        t.setState({
                            hovered: !1
                        })
                    }, t.onPreviewImageLoad = function(e) {
                        t.reportInteractive(), e.currentTarget.src === t.props.video.animatedPreviewURL && t.setState({
                            didAnimatedPreviewLoad: !0
                        })
                    }, t.onPreviewImageLoadError = function(e) {
                        t.reportInteractive(), e.currentTarget.src === t.props.video.animatedPreviewURL && t.setState({
                            didAnimatedPreviewFailToLoad: !0
                        })
                    }, t.reportInteractive = function() {
                        t.props.latencyTracking.reportInteractive()
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.overrideImageInteractivity && this.reportInteractive()
                }, t.prototype.render = function() {
                    var e = {
                        assignments: {
                            fallback: this.renderFallback,
                            variation: this.renderVariation
                        },
                        loader: function() {
                            return o.createElement(v.VideoPreviewCardPlaceholder, null)
                        },
                        name: "TWILIGHT_VIDEO_CARD_UPDATES"
                    };
                    return o.createElement(d.a, i.__assign({}, e))
                }, t.prototype.generateSearchString = function() {
                    var e = {};
                    this.props.collectionID && (e.collection = this.props.collectionID);
                    var t = r.stringify(e);
                    return t ? "?" + t : ""
                }, t.prototype.videoPreviewImage = function() {
                    var e = this.state.hovered && !this.state.didAnimatedPreviewFailToLoad ? this.props.video.animatedPreviewURL : this.props.video.previewThumbnailURL,
                        t = a("video-preview-card__image-wrapper", {
                            "video-preview-card__image-wrapper--watched": null !== this.getVideoPreviousWatchPercentage() && !this.state.hovered
                        }),
                        n = a("video-preview-card__preview-image", {
                            "video-preview-card__preview-image--animated": this.state.hovered && this.state.didAnimatedPreviewLoad
                        });
                    return o.createElement(h.k, {
                        overflow: !0
                    }, o.createElement(s.a, {
                        to: {
                            pathname: "/videos/" + this.props.video.id,
                            state: this.getLinkState(),
                            search: this.generateSearchString()
                        },
                        title: this.props.video.title,
                        "data-a-target": "video-preview-card-image-link",
                        "data-test-selector": "preview-image-link"
                    }, o.createElement("div", {
                        className: t,
                        "data-test-selector": "preview-image-wrapper"
                    }, o.createElement(h._2, {
                        flexShrink: 0
                    }, o.createElement("figure", null, o.createElement(h.k, {
                        ratio: h.l.Aspect16x9
                    }, o.createElement("img", {
                        alt: this.props.video.title,
                        className: n,
                        "data-test-selector": "preview-image",
                        onLoad: this.onPreviewImageLoad,
                        onError: this.onPreviewImageLoadError,
                        src: e || ""
                    })))))))
                }, t.prototype.gameBoxArt = function() {
                    if (!this.showGameArt() || !this.props.video.game) return null;
                    var e = this.props.video.game,
                        t = {
                            pathname: "/directory/game/" + encodeURI(e.name),
                            state: this.getLinkState()
                        },
                        n = a("video-preview-card__image-wrapper", {
                            "video-preview-card__image-wrapper--watched": null !== this.getVideoPreviousWatchPercentage() && !this.state.hovered
                        });
                    return o.createElement(h._8, {
                        "data-test-selector": "game-box-art",
                        display: h.R.InlineFlex,
                        flexShrink: 0,
                        padding: {
                            bottom: .5
                        }
                    }, o.createElement(s.a, {
                        to: t,
                        title: e.name,
                        "data-a-target": "video-preview-card-boxart-link"
                    }, o.createElement(h._2, {
                        margin: {
                            right: 1
                        }
                    }, o.createElement("figure", {
                        className: "video-preview-card__game-art"
                    }, o.createElement(h._49, {
                        display: h.R.Block,
                        direction: h._51.Bottom,
                        label: e.name
                    }, o.createElement("div", {
                        className: n,
                        "data-test-selector": "game-box-art-wrapper"
                    }, o.createElement(h.E, {
                        aspect: h.l.BoxArt,
                        alt: e.name,
                        src: e.boxArtURL || l.a.defaultBoxArtURL
                    })))))))
                }, t.prototype.videoMetaData = function() {
                    var e = Object(l.c)(new Date(this.props.video.publishedAt), "medium"),
                        t = null;
                    if (this.props.video.owner) {
                        var n = {
                            pathname: "/" + this.props.video.owner.login,
                            state: this.getLinkState()
                        };
                        t = o.createElement(s.a, {
                            to: n,
                            className: "video-preview-card__owner-display-name",
                            "data-a-target": "video-preview-card-channel-link",
                            "data-test-selector": "video-owner",
                            title: Object(u.a)(this.props.video.owner.login, this.props.video.owner.displayName, !0)
                        }, Object(u.a)(this.props.video.owner.login, this.props.video.owner.displayName))
                    }
                    return o.createElement(h._8, {
                        display: h.R.Flex,
                        flexDirection: h.T.Column,
                        overflow: h._11.Hidden
                    }, o.createElement(h._8, {
                        "data-test-selector": "video-title",
                        overflow: h._11.Hidden,
                        position: h._15.Relative
                    }, o.createElement(h.Q, {
                        color: h.K.Base,
                        fontSize: h.V.Size5,
                        lineHeight: h._9.Heading
                    }, o.createElement(s.a, {
                        className: "video-preview-card__video-title",
                        to: {
                            pathname: "/videos/" + this.props.video.id,
                            state: this.getLinkState(),
                            search: this.generateSearchString()
                        },
                        title: this.props.video.title,
                        "data-a-target": "video-preview-card-title-link"
                    }, this.props.video.title))), o.createElement(h._8, {
                        flexShrink: 0,
                        flexGrow: 0,
                        ellipsis: !0
                    }, o.createElement(h.Q, {
                        type: h._46.Span,
                        color: h.K.Alt2,
                        ellipsis: !0,
                        title: this.formatTitle(e)
                    }, e, o.createElement(h._2, {
                        padding: {
                            x: .5
                        }
                    }, o.createElement("span", null, "·")), t)))
                }, t.prototype.getVideoPreviousWatchPercentage = function() {
                    return this.props.video && this.props.video.self && this.props.video.self.viewingHistory && null !== this.props.video.self.viewingHistory.position ? 0 === this.props.video.lengthSeconds || 0 === this.props.video.self.viewingHistory.position ? null : this.props.video.self.viewingHistory.position / this.props.video.lengthSeconds * 100 : null
                }, t.prototype.showGameArt = function() {
                    return !this.props.hideGameArt && this.props.video.game && "" !== this.props.video.game.name
                }, t.prototype.formatTitle = function(e) {
                    if (this.props.video.owner) return e + " · " + Object(u.a)(this.props.video.owner.login, this.props.video.owner.displayName, !0)
                }, t.prototype.getLinkState = function() {
                    return {
                        content: this.props.tracking.content,
                        content_index: this.props.tracking.content_index,
                        medium: this.props.tracking.medium
                    }
                }, t
            }(o.Component),
            b = Object(p.d)("VideoPreviewCard")(_)
    },
    bdk8: function(e, t) {},
    bhVC: function(e, t, n) {
        "use strict";
        var i = n("8Wuk");
        n.d(t, "a", function() {
            return i.a
        }), n.d(t, "b", function() {
            return i.b
        })
    },
    dQj3: function(e, t, n) {
        "use strict";
        t.b = l, t.a = function(e, t, n) {
            if (!e.author) return null;
            var d = l(e.body.emotes),
                c = e.badges.reduce(function(e, t) {
                    return e[t.setID] = t.version, e
                }, {});
            return {
                type: r.b.Message,
                messageType: r.c.Post,
                id: e.id,
                badges: c,
                bits: e.bitsUsed,
                timestamp: 0,
                deleted: !1,
                user: i.__assign({
                    userID: e.author.id,
                    userLogin: e.author.login,
                    userType: a.a.User,
                    color: e.authorColor
                }, Object(s.a)(e.authorName, e.author.login)),
                messageParts: Object(o.g)(e.body.content, d, e.bitsUsed, t, n, e.authorName)
            }
        }, t.c = function(e) {
            if (null === e.tags || null === e.message || null === e.bits_used) return null;
            var t = "ChatMessage:" + e.tags.msg_id;
            return {
                __typename: "ChatMessage",
                "Symbol(id)": t,
                id: e.tags.msg_id,
                authorName: e.tags.display_name,
                authorColor: e.tags.color,
                author: {
                    __typename: "User",
                    "Symbol(id)": "User:" + e.user_id,
                    id: e.user_id,
                    login: e.username
                },
                body: {
                    __typename: "MessageBody",
                    "Symbol(id)": "$" + t + ".body",
                    content: e.message,
                    emotes: e.tags.emotes.map(function(e, n) {
                        return {
                            __typename: "EmbeddedEmote",
                            "Symbol(id)": t + ".body.emotes." + n,
                            emoteID: e.id.toString(),
                            from: e.start,
                            to: e.end,
                            setID: e.set
                        }
                    })
                },
                badges: e.tags.badges.map(function(e, n) {
                    return {
                        __typename: "Badge",
                        "Symbol(id)": t + ".badges." + n,
                        setID: e.badge_set_id,
                        version: e.badge_set_version
                    }
                }),
                bitsUsed: e.bits_used
            }
        };
        var i = n("TToO"),
            a = n("6Agf"),
            r = n("qkCi"),
            o = n("l21v"),
            s = n("e1CU");

        function l(e) {
            var t = [];
            return e.forEach(function(e) {
                t[e.from] = {
                    startIndex: e.from,
                    endIndex: e.to + 1,
                    data: {
                        images: {
                            themed: !1,
                            sources: {
                                "1x": Object(o.f)(e.emoteID, 1),
                                "2x": Object(o.f)(e.emoteID, 2),
                                "4x": Object(o.f)(e.emoteID, 4)
                            }
                        }
                    }
                }
            }), t
        }
    },
    ea40: function(e, t) {},
    ea7N: function(e, t) {},
    ebTC: function(e, t, n) {
        "use strict";
        var i = n("RH2O"),
            a = n("2KeS"),
            r = n("V5M+"),
            o = n("Aj/L"),
            s = n("TToO"),
            l = n("GiK3"),
            d = n("6sO2"),
            c = n("J8WN"),
            u = n("+8VM"),
            m = n("7vx8"),
            p = n("HZww"),
            v = n("4Q9N"),
            h = n("Tt3k"),
            g = n("W6ca"),
            f = n("xgnX"),
            k = n("CSlQ"),
            _ = n("Odds"),
            b = (n("+Aaf"), n("0H+u")),
            y = ["image/*"],
            E = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        statusMessage: null,
                        imageUpdated: !1,
                        loading: !1
                    }, t.currentImage = null, t.logger = d.j.withCategory("UserImageUploader"), t.onImageInputChange = function(e) {
                        var n;
                        if (null !== e) {
                            t.setState({
                                loading: !0
                            }), n = e[0];
                            var i = Object(h.a)(n),
                                a = (n.size / 1024 / 1024).toFixed(4);
                            parseInt(a, 10) > 10 ? t.setState({
                                statusMessage: f.b.BadSizeError
                            }) : Object(h.b)(n, function(e) {
                                return s.__awaiter(t, void 0, void 0, function() {
                                    var t, n, a, r, o = this;
                                    return s.__generator(this, function(s) {
                                        switch (s.label) {
                                            case 0:
                                                this.currentImage = e, s.label = 1;
                                            case 1:
                                                return s.trys.push([1, 3, , 4]), [4, Object(g.a)(this.props.userID, this.props.authToken, this.props.imageType, i)];
                                            case 2:
                                                return t = s.sent(), n = t.upload_url, a = t.upload_id, [3, 4];
                                            case 3:
                                                return r = s.sent(), this.logger.error(r, "Request for upload ID failed to get expected response from server."), this.setState({
                                                    statusMessage: f.b.UnexpectedError
                                                }), [2];
                                            case 4:
                                                return this.unsubscribe = d.k.subscribe({
                                                    topic: Object(p.j)(this.props.userID),
                                                    success: function() {
                                                        try {
                                                            Object(g.c)(n, o.currentImage)
                                                        } catch (e) {
                                                            o.logger.error(e, "Image upload failed."), o.unsubscribe(), o.setState({
                                                                statusMessage: f.b.UnexpectedError,
                                                                loading: !1
                                                            })
                                                        }
                                                        o.timeoutHandle = setTimeout(function() {
                                                            return o.handlePubSubTimeout()
                                                        }, 1e4)
                                                    },
                                                    failure: function() {
                                                        o.setState({
                                                            statusMessage: f.b.UnexpectedError,
                                                            loading: !1
                                                        })
                                                    },
                                                    onMessage: function(e) {
                                                        if (e.upload_id === a) {
                                                            clearTimeout(o.timeoutHandle);
                                                            var t = null;
                                                            e.status === f.a.Success ? t = f.b.Success : e.status === f.a.BadSize ? (t = f.b.BadSizeError, o.currentImage = null) : e.status === f.a.NonImage ? (t = f.b.NonImageError, o.currentImage = null) : e.status === f.a.WrongFormat ? (t = f.b.WrongFormatError, o.currentImage = null) : (t = f.b.UnexpectedError, o.currentImage = null), o.unsubscribe && o.unsubscribe(), o.setState({
                                                                statusMessage: t,
                                                                loading: !1,
                                                                imageUpdated: e.status === f.a.Success
                                                            })
                                                        }
                                                    }
                                                }), [2]
                                        }
                                    })
                                })
                            })
                        } else t.setState({
                            statusMessage: f.b.ImageNotSelected
                        })
                    }, t.handlePubSubTimeout = function() {
                        t.unsubscribe(), t.setState({
                            statusMessage: f.b.TimeoutError
                        })
                    }, t
                }
                return s.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillUnmount = function() {
                    void 0 !== this.unsubscribe && this.unsubscribe(), this.timeoutHandle && clearTimeout(this.timeoutHandle)
                }, t.prototype.componentDidUpdate = function() {
                    var e = this;
                    this.state.imageUpdated && setTimeout(function() {
                        e.props.data && e.props.data.refetch(), e.setState({
                            imageUpdated: !1
                        }), e.props.closeModal()
                    }, 1e3)
                }, t.prototype.render = function() {
                    var e = this.props.login;
                    this.props.displayName && (e = this.props.displayName);
                    var t = Object(d.d)("Editing profile banner for {userName}", {
                        userName: e
                    }, "UserImageUploader");
                    this.props.imageType === v.a.ChannelOfflineImage && (t = Object(d.d)("Editing video banner for {userName}", {
                        userName: e
                    }, "UserImageUploader"));
                    var n = null;
                    if (this.state.loading) n = l.createElement(_._8, {
                        className: "user-image-uploader__upload-svg--anim-fill",
                        position: _._15.Relative,
                        "data-test-selector": "loading-status"
                    }, l.createElement(_._22, {
                        asset: _._23.Upload,
                        type: _._24.Brand,
                        width: 99,
                        height: 76
                    }));
                    else {
                        var i = Object(d.d)("Recommended image size: 1200x380 and less than 10MB.", "UserImageUploader");
                        this.props.imageType === v.a.ChannelOfflineImage && (i = Object(d.d)("Recommended image size: 1920x1080 and less than 10MB.", "UserImageUploader")), n = l.createElement(_._8, null, l.createElement(_._8, {
                            className: "user-image-uploader__upload-info"
                        }, l.createElement(_._8, null, l.createElement(_._22, {
                            asset: _._23.Plus,
                            type: _._24.Alt2,
                            height: 20,
                            width: 20
                        })), l.createElement(_.Q, {
                            type: _._46.H3,
                            color: _.K.Alt2,
                            fontSize: _.V.Size4
                        }, Object(d.d)("Upload a Photo", "User Image Uploader"))), l.createElement(_._8, {
                            className: "user-image-uploader__upload-recommendation",
                            position: _._15.Absolute,
                            textAlign: _._42.Left,
                            attachLeft: !0,
                            attachBottom: !0,
                            margin: {
                                left: 3,
                                bottom: 1
                            }
                        }, l.createElement(_.Q, {
                            type: _._46.H6,
                            color: _.K.Alt2,
                            fontSize: _.V.Size8,
                            align: _._56.TextBottom
                        }, i)))
                    }
                    var a = null;
                    this.props.showCloser && (a = l.createElement(u.a, null));
                    var r = null;
                    if (null !== this.state.statusMessage) {
                        var o = Object(f.c)(this.state.statusMessage);
                        r = l.createElement(_._12, {
                            label: o.message,
                            type: o.type
                        })
                    }
                    return l.createElement(_._8, {
                        className: "user-image-uploader",
                        position: _._15.Relative,
                        fullHeight: !0
                    }, l.createElement(_._32, {
                        className: "user-image-uploader__background-container",
                        background: _.n.Base,
                        fullWidth: !0
                    }, l.createElement(_._8, {
                        padding: 2,
                        display: _.R.InlineBlock,
                        position: _._15.Relative,
                        textAlign: _._42.Center,
                        fullWidth: !0
                    }, l.createElement(_._32, {
                        borderBottom: !0,
                        margin: {
                            bottom: 2
                        }
                    }, l.createElement(_.Q, {
                        type: _._46.H3,
                        fontSize: _.V.Size4
                    }, t)), l.createElement(_._8, {
                        className: "user-image-uploader__upload-container",
                        display: _.R.InlineBlock,
                        position: _._15.Relative,
                        textAlign: _._42.Center,
                        margin: {
                            bottom: 1
                        }
                    }, l.createElement(_._8, {
                        className: "user-image-uploader__upload",
                        display: _.R.InlineBlock,
                        position: _._15.Relative,
                        textAlign: _._42.Center
                    }, l.createElement(c.a, {
                        allowedFileTypes: y,
                        onFilesSubmitted: this.onImageInputChange
                    }, n))), l.createElement(_._32, {
                        "data-test-selector": "status-message",
                        fontSize: _.V.Size4,
                        position: _._15.Relative,
                        textAlign: _._42.Center,
                        className: "user-image-uploader__status-message"
                    }, r))), a)
                }, t = s.__decorate([Object(m.a)(b, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.login
                            }
                        }
                    }
                })], t)
            }(l.Component),
            w = Object(k.d)("User Image Upload")(E);
        var S = Object(i.b)(function(e) {
            return {
                authToken: Object(o.a)(e)
            }
        }, function(e, t) {
            return Object(a.b)({
                closeModal: function() {
                    return t.successCallback && t.successCallback(), Object(r.c)()
                }
            }, e)
        })(w);
        n.d(t, "a", function() {
            return S
        })
    },
    f6Cj: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            return Object(i.a)(a, {
                u: e
            })
        }, t.c = function(e, t) {
            return Object(i.a)(r, {
                url: e,
                text: t
            })
        }, t.b = function(e, t) {
            return Object(i.a)(o, {
                url: e,
                title: t
            })
        }, t.d = function(e) {
            return Object(i.a)(s, {
                url: e
            })
        };
        var i = n("yDzg"),
            a = "https://www.facebook.com/sharer/sharer.php",
            r = "https://www.twitter.com/share",
            o = "https://www.reddit.com/submit",
            s = "https://vk.com/share.php"
    },
    ioX4: function(e, t) {},
    jpZi: function(e, t) {},
    kOMe: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ChannelPage_ChannelHeader"
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
                                        value: "70"
                                    }
                                }],
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
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "videos"
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
                                    value: "followers"
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
                                    value: "follows"
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
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "isSiteAdmin"
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
                end: 290
            }
        };
        n.loc.source = {
            body: "query ChannelPage_ChannelHeader($login: String!) {\nuser(login: $login) {\nid\nlogin\ndisplayName\nprofileImageURL(width: 70)\nroles {\nisPartner\n}\nstream {\nid\n}\nvideos {\ntotalCount\n}\nfollowers {\ntotalCount\n}\nfollows {\ntotalCount\n}\ncheer {\nid\n}\n}\ncurrentUser {\nid\nroles {\nisStaff\nisSiteAdmin\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    nUXg: function(e, t) {},
    nmDn: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "UserProfileEditor"
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
                                        value: "70"
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
                end: 104
            }
        };
        n.loc.source = {
            body: "query UserProfileEditor($login: String!) {\nuser(login: $login) {\nid\nlogin\nprofileImageURL(width: 70)\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    nyge: function(e, t, n) {
        "use strict";
        var i;
        n.d(t, "a", function() {
                return i
            }),
            function(e) {
                e.CounterStrike = "counter-strike: global offensive", e.Hearthstone = "hearthstone", e.LeagueOfLegends = "league of legends", e.Overwatch = "overwatch"
            }(i || (i = {}))
    },
    oHn4: function(e, t) {},
    pqU3: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        }), n.d(t, "c", function() {
            return a
        }), n.d(t, "b", function() {
            return r
        }), t.d = function(e) {
            return {
                type: r,
                leagueOfLegendsChampionsErrored: e
            }
        }, t.e = function(e) {
            return {
                type: a,
                leagueOfLegendsChampionsLoading: e
            }
        }, t.f = function(e) {
            var t = {},
                n = e.data;
            for (var a in n) n.hasOwnProperty(a) && (t[n[a].id] = n[a]);
            return {
                type: i,
                apiData: e,
                championsMap: t,
                apiVersion: e.version
            }
        };
        var i = "directory.LOL_CHAMPIONS_CHANGED",
            a = "directory.LOL_CHAMPIONS_LOADING",
            r = "directory.LOL_CHAMPIONS_ERRORED"
    },
    qjMx: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "PreviewCardVideo"
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
                            value: "animatedPreviewURL"
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
                                    value: "boxArtURL"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "width"
                                    },
                                    value: {
                                        kind: "IntValue",
                                        value: "40"
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "height"
                                    },
                                    value: {
                                        kind: "IntValue",
                                        value: "56"
                                    }
                                }],
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
                                        value: "50"
                                    }
                                }],
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
                            value: "publishedAt"
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
                                    value: "viewingHistory"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "position"
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
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 302
            }
        };
        n.loc.source = {
            body: "fragment PreviewCardVideo on Video {\nanimatedPreviewURL\ngame {\nboxArtURL(width: 40 height: 56)\nid\ndisplayName\nname\n}\nid\nlengthSeconds\nowner {\ndisplayName\nid\nlogin\nprofileImageURL(width: 50)\n}\npreviewThumbnailURL(width: 320 height: 180)\npublishedAt\nself {\nviewingHistory {\nposition\n}\n}\ntitle\nviewCount\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    qkCi: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return i
        }), n.d(t, "c", function() {
            return a
        }), n.d(t, "e", function() {
            return r
        }), n.d(t, "a", function() {
            return o
        });
        var i, a, r, o, s = n("aMxy");
        n.o(s, "ModerationActions") && n.d(t, "d", function() {
                return s.ModerationActions
            }),
            function(e) {
                e[e.Message = 0] = "Message", e[e.Moderation = 1] = "Moderation", e[e.ModerationAction = 2] = "ModerationAction", e[e.TargetedModerationAction = 3] = "TargetedModerationAction", e[e.AutoMod = 4] = "AutoMod", e[e.Connected = 5] = "Connected", e[e.Disconnected = 6] = "Disconnected", e[e.Reconnect = 7] = "Reconnect", e[e.Hosting = 8] = "Hosting", e[e.Unhost = 9] = "Unhost", e[e.Hosted = 10] = "Hosted", e[e.Subscription = 11] = "Subscription", e[e.Resubscription = 12] = "Resubscription", e[e.SubGift = 13] = "SubGift", e[e.Clear = 14] = "Clear", e[e.SubscriberOnlyMode = 15] = "SubscriberOnlyMode", e[e.FollowerOnlyMode = 16] = "FollowerOnlyMode", e[e.SlowMode = 17] = "SlowMode", e[e.EmoteOnlyMode = 18] = "EmoteOnlyMode", e[e.RoomMods = 19] = "RoomMods", e[e.RoomState = 20] = "RoomState", e[e.Raid = 21] = "Raid", e[e.Unraid = 22] = "Unraid", e[e.Ritual = 23] = "Ritual", e[e.Notice = 24] = "Notice", e[e.Info = 25] = "Info", e[e.BadgesUpdated = 26] = "BadgesUpdated", e[e.Purchase = 27] = "Purchase", e[e.BitsCharity = 28] = "BitsCharity", e[e.CrateGift = 29] = "CrateGift"
            }(i || (i = {})),
            function(e) {
                e[e.Post = 0] = "Post", e[e.Action = 1] = "Action", e[e.PostWithMention = 2] = "PostWithMention"
            }(a || (a = {})),
            function(e) {
                e[e.Ban = 0] = "Ban", e[e.Timeout = 1] = "Timeout"
            }(r || (r = {})),
            function(e) {
                e[e.MessageRejectedPrompt = 0] = "MessageRejectedPrompt", e[e.MessageRejected = 1] = "MessageRejected", e[e.MessageAllowed = 2] = "MessageAllowed", e[e.MessageDenied = 3] = "MessageDenied"
            }(o || (o = {}))
    },
    vKFS: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("GiK3"),
            r = n("6sO2"),
            o = n("RH2O"),
            s = n("HW6M"),
            l = n("nyge"),
            d = n("Odds"),
            c = (n("Lwev"), function(e) {
                var t, n = e.spriteDetails,
                    i = e.game.toLowerCase(),
                    r = s("metadata-icon__appendage", ((t = {})["metadata-icon__appendage--csgo-skill"] = i === l.a.CounterStrike, t)),
                    o = i === l.a.CounterStrike ? 40 : 20;
                return a.createElement(d._8, {
                    className: r
                }, a.createElement("div", {
                    style: {
                        backgroundImage: "url(" + n.spriteURL + ")",
                        backgroundPositionX: n.spriteOffsetX ? -1 * n.spriteOffsetX : 0,
                        backgroundPositionY: n.spriteOffsetY ? -1 * n.spriteOffsetY : 0,
                        width: n.imageWidth ? n.imageWidth + "px" : "2rem",
                        height: n.imageWidth ? n.imageHeight + "px" : "2rem",
                        transform: "scale(" + (n.imageWidth > 0 ? o / n.imageWidth : 1) + ")",
                        transformOrigin: "0 0"
                    }
                }))
            }),
            u = n("YUUt"),
            m = n.n(u),
            p = n("/SNv"),
            v = n.n(p),
            h = n("Vr3l"),
            g = n.n(h),
            f = n("PPNL"),
            k = n("EOpv"),
            _ = n("LgcN"),
            b = this,
            y = r.o.logger.withCategory("metadata-info"),
            E = function(e, t) {
                return i.__awaiter(b, void 0, void 0, function() {
                    var n, a, o, s, d, c;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return n = t.toLowerCase(), a = e.counterStrikeGlobalOffensive && e.counterStrikeGlobalOffensive.skill, o = e.hearthstone && e.hearthstone.broadcasterHeroClass, s = e.leagueOfLegends && e.leagueOfLegends.championID, d = e.overwatch && e.overwatch.broadcasterCharacter, a && n === l.a.CounterStrike ? [4, w(a)] : [3, 2];
                            case 1:
                                return [2, i.sent()];
                            case 2:
                                return o && n === l.a.Hearthstone ? [4, S(o)] : [3, 4];
                            case 3:
                                return [2, i.sent()];
                            case 4:
                                return d && n === l.a.Overwatch ? [4, N(d)] : [3, 6];
                            case 5:
                                return [2, i.sent()];
                            case 6:
                                if (s && n === l.a.LeagueOfLegends && (c = r.o.store.getState()).directory)
                                    if (c.directory.leagueOfLegends.championsMap) {
                                        if (c.directory.leagueOfLegends.championsMap) return [2, L(s, c.directory.leagueOfLegends.championsMap, c.directory.leagueOfLegends.version)]
                                    } else r.o.store.dispatch(Object(f.a)());
                                i.label = 7;
                            case 7:
                                return [2, null]
                        }
                    })
                })
            },
            w = function(e) {
                return i.__awaiter(b, void 0, void 0, function() {
                    var t, n, a;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return i.trys.push([0, 2, , 3]), [4, Object(_.a)()];
                            case 1:
                                return t = i.sent(), (n = {})[e] = t[0]["Skill Group"][e - 1], [2, {
                                    name: n[e].display_name,
                                    label: Object(k.b)(k.a.CSGOSkillGroup),
                                    spriteDetails: {
                                        imageWidth: n[e].image_width,
                                        imageHeight: n[e].image_height,
                                        spriteOffsetX: n[e].sprite_x_offset,
                                        spriteOffsetY: n[e].sprite_y_offset,
                                        spriteURL: m.a
                                    }
                                }];
                            case 2:
                                return a = i.sent(), y.error(a, "Failed to load Counter-Strike skill group data"), [2, null];
                            case 3:
                                return [2]
                        }
                    })
                })
            },
            S = function(e) {
                return i.__awaiter(b, void 0, void 0, function() {
                    var t, n, a;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return i.trys.push([0, 2, , 3]), [4, Object(_.b)()];
                            case 1:
                                return t = i.sent(), n = {}, t[0].Class.forEach(function(e) {
                                    n[e.class] = e
                                }), [2, {
                                    name: n[e].display_name,
                                    label: Object(k.b)(k.a.HearthstoneClass),
                                    spriteDetails: {
                                        imageWidth: n[e].image_width,
                                        imageHeight: n[e].image_height,
                                        spriteOffsetX: n[e].sprite_x_offset,
                                        spriteOffsetY: n[e].sprite_y_offset,
                                        spriteURL: v.a
                                    }
                                }];
                            case 2:
                                return a = i.sent(), y.error(a, "Failed to load Hearthstone class data"), [2, null];
                            case 3:
                                return [2]
                        }
                    })
                })
            },
            N = function(e) {
                return i.__awaiter(b, void 0, void 0, function() {
                    var t, n, a, r, o, s, l, d, c, u, m, p;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return i.trys.push([0, 2, , 3]), [4, Object(_.d)()];
                            case 1:
                                for (t = i.sent(), n = void 0, a = 0, r = t; a < r.length; a++)
                                    for (o in n = r[a])
                                        if (n.hasOwnProperty(o))
                                            for (s = n[o], l = 0, d = s; l < d.length; l++)
                                                if ((c = d[l]).character === e) return (p = {})[c.character] = c, [2, {
                                                    name: (u = p)[e].display_name,
                                                    label: Object(k.b)(k.a.OverwatchCharacter),
                                                    spriteDetails: {
                                                        imageWidth: u[e].image_width,
                                                        imageHeight: u[e].image_height,
                                                        spriteOffsetX: u[e].sprite_x_offset,
                                                        spriteOffsetY: u[e].sprite_y_offset,
                                                        spriteURL: g.a
                                                    }
                                                }];
                                return [2, null];
                            case 2:
                                return m = i.sent(), y.error(m, "Failed to load Overwatch character data"), [2, null];
                            case 3:
                                return [2]
                        }
                    })
                })
            },
            L = function(e, t, n) {
                if (!t || !e) return null;
                var i = t[e],
                    a = "https://ddragon.leagueoflegends.com/cdn/" + n + "/img/sprite/" + i.image.sprite;
                return {
                    name: i.name,
                    label: Object(k.b)(k.a.LeagueChampion),
                    spriteDetails: {
                        imageWidth: i.image.w,
                        imageHeight: i.image.h,
                        spriteOffsetX: i.image.x,
                        spriteOffsetY: i.image.y,
                        spriteURL: a
                    }
                }
            },
            C = (n("nUXg"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        metadataDetails: null
                    }, t.didUnmount = !1, t.loadStreamMetadataDetails = function() {
                        return i.__awaiter(t, void 0, void 0, function() {
                            var e, t;
                            return i.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        if (!this.props.streamMetadata || !this.props.game) return [3, 4];
                                        n.label = 1;
                                    case 1:
                                        return n.trys.push([1, 3, , 4]), [4, E(this.props.streamMetadata, this.props.game)];
                                    case 2:
                                        if (e = n.sent()) {
                                            if (this.didUnmount) return [2];
                                            this.setState({
                                                metadataDetails: e
                                            })
                                        }
                                        return [3, 4];
                                    case 3:
                                        return t = n.sent(), r.j.error(t, "Failed to get metadata details."), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.loadStreamMetadataDetails()
                }, t.prototype.componentDidUpdate = function(e) {
                    !e.leagueOfLegends.championsMap && this.props.leagueOfLegends.championsMap && this.loadStreamMetadataDetails()
                }, t.prototype.componentWillUnmount = function() {
                    this.didUnmount = !0
                }, t.prototype.render = function() {
                    return this.props.streamMetadata && this.props.game && this.state.metadataDetails ? a.createElement(d._8, {
                        className: "preview-card-appendage",
                        display: d.R.Flex
                    }, a.createElement(d._8, {
                        className: "preview-card-appendage__image-wrapper",
                        flexGrow: 0,
                        flexShrink: 0,
                        display: d.R.Flex,
                        alignItems: d.c.Center,
                        justifyContent: d._7.End
                    }, a.createElement("div", null, a.createElement(c, {
                        game: this.props.game,
                        spriteDetails: this.state.metadataDetails.spriteDetails
                    }))), a.createElement(d._32, {
                        flexGrow: 1,
                        flexShrink: 1,
                        borderTop: !0,
                        padding: {
                            y: .5
                        },
                        margin: {
                            left: 1
                        },
                        display: d.R.Flex,
                        overflow: d._11.Hidden
                    }, a.createElement(d._8, {
                        flexGrow: 1,
                        flexShrink: 1,
                        overflow: d._11.Hidden
                    }, a.createElement(d.Q, {
                        ellipsis: !0
                    }, this.state.metadataDetails.name)), a.createElement(d._8, {
                        flexGrow: 0,
                        flexShrink: 0
                    }, a.createElement(d.Q, null, this.state.metadataDetails.label)))) : null
                }, t
            }(a.Component));
        var O, I = Object(o.b)(function(e) {
                return {
                    leagueOfLegends: {
                        championsMap: e.directory.leagueOfLegends.championsMap
                    }
                }
            })(C),
            P = (n("YVIF"), function(e) {
                var t = a.createElement(d._32, {
                    className: "preview-card-iconic-image__wrapper",
                    borderRadius: d.t.Small,
                    overflow: d._11.Hidden
                }, a.createElement(d.k, {
                    ratio: e.aspect || d.l.BoxArt,
                    align: d.a.Center
                }, a.createElement(d.N, i.__assign({}, e.imageProps))));
                return e.linkTo && (t = a.createElement(d.O, {
                    to: e.linkTo
                }, t)), t
            }),
            F = (n("IJO1"), function(e) {
                var t = .5,
                    n = null;
                return "number" == typeof e.progressBarPercent && e.progressBarPercent > 0 && (n = a.createElement(d._8, {
                    position: d._15.Absolute,
                    attachBottom: !0,
                    fullWidth: !0
                }, a.createElement(d._18, {
                    size: d._19.Small,
                    value: e.progressBarPercent,
                    mask: !0
                })), t = 1), a.createElement(d._8, {
                    position: d._15.Absolute,
                    attachTop: !0,
                    attachLeft: !0,
                    fullWidth: !0,
                    fullHeight: !0,
                    className: "preview-card-overlay"
                }, n, a.createElement(d._8, {
                    position: d._15.Absolute,
                    attachTop: !0,
                    attachLeft: !0,
                    margin: 1,
                    "data-test-selector": "top-left-selector"
                }, e.topLeft), a.createElement(d._8, {
                    position: d._15.Absolute,
                    attachTop: !0,
                    attachRight: !0,
                    margin: 1,
                    "data-test-selector": "top-right-selector"
                }, e.topRight), a.createElement(d._8, {
                    position: d._15.Absolute,
                    attachBottom: !0,
                    attachLeft: !0,
                    margin: {
                        x: .5,
                        y: t
                    },
                    "data-test-selector": "bottom-left-selector"
                }, e.bottomLeft), a.createElement(d._8, {
                    position: d._15.Absolute,
                    attachBottom: !0,
                    attachRight: !0,
                    margin: {
                        x: .5,
                        y: t
                    },
                    "data-test-selector": "bottom-right-selector"
                }, e.bottomRight))
            }),
            T = (n("BJwU"), function(e) {
                var t = e.icon && a.createElement(d._8, {
                    display: d.R.Flex
                }, a.createElement(d._22, {
                    asset: e.icon,
                    width: 14,
                    height: 14
                }));
                return e.withBackground ? a.createElement(d._32, {
                    alignItems: d.c.Center,
                    background: d.n.Overlay,
                    borderRadius: d.t.Small,
                    className: "preview-card-stat",
                    color: d.K.Overlay,
                    display: d.R.Flex,
                    fontSize: d.V.Size6,
                    justifyContent: d._7.Center
                }, t, a.createElement(d.Q, null, e.value)) : a.createElement(d._32, {
                    className: "preview-card-stat",
                    color: d.K.Overlay,
                    display: d.R.Flex,
                    padding: {
                        x: .5
                    }
                }, t, a.createElement(d.Q, null, e.value))
            }),
            x = n("vKYI"),
            A = (n("jpZi"), 300),
            R = 5e3,
            U = "preview-card-thumbnail__image-selector",
            D = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        didAnimatedPreviewLoad: !1,
                        didAnimatedPreviewFailToLoad: !1,
                        isLiveVideoPreviewLoaded: !1,
                        isLiveVideoPreviewLoading: !1,
                        isLiveVideoPreviewTimedOut: !1,
                        isHovered: !1
                    }, t.onImageLoad = function(e) {
                        void 0 !== t.props.animatedImageProps && e.currentTarget.src === t.props.animatedImageProps.src && t.setState({
                            didAnimatedPreviewLoad: !0
                        })
                    }, t.onImageLoadError = function(e) {
                        void 0 !== t.props.animatedImageProps && e.currentTarget.src === t.props.animatedImageProps.src && t.setState({
                            didAnimatedPreviewFailToLoad: !0
                        })
                    }, t.handleFocus = function() {
                        t.clearTimeouts(), t.setState({
                            isHovered: !0
                        }, function() {
                            t.hoverTimeout = setTimeout(function() {
                                t.state.isHovered && t.setState({
                                    isLiveVideoPreviewLoaded: !1,
                                    isLiveVideoPreviewLoading: !0,
                                    isLiveVideoPreviewTimedOut: !1
                                })
                            }, A)
                        })
                    }, t.handleBlur = function() {
                        t.clearTimeouts(), t.setState({
                            isHovered: !1,
                            isLiveVideoPreviewLoaded: !1,
                            isLiveVideoPreviewLoading: !1,
                            isLiveVideoPreviewTimedOut: !1
                        })
                    }, t.onLivePreviewLoaded = function() {
                        t.clearTimeouts(), t.state.isHovered && (t.setState({
                            isLiveVideoPreviewLoaded: !0,
                            isLiveVideoPreviewLoading: !1
                        }), t.createPreviewTimeout())
                    }, t.createPreviewTimeout = function() {
                        t.previewTimeout && window.clearTimeout(t.previewTimeout), t.previewTimeout = setTimeout(function() {
                            t.state.isHovered && t.setState({
                                isLiveVideoPreviewLoaded: !1,
                                isLiveVideoPreviewLoading: !1,
                                isLiveVideoPreviewTimedOut: !0
                            })
                        }, R)
                    }, t.clearTimeouts = function() {
                        t.hoverTimeout && window.clearTimeout(t.hoverTimeout), t.createPreviewTimeout && window.clearTimeout(t.previewTimeout)
                    }, t.shouldShowLiveVideoPreview = function() {
                        return !!t.props.liveChannelLogin && t.state.isHovered && (t.state.isLiveVideoPreviewLoaded || t.state.isLiveVideoPreviewLoading) && !t.state.isLiveVideoPreviewTimedOut
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentWillUnmount = function() {
                    this.clearTimeouts()
                }, t.prototype.render = function() {
                    var e = {};
                    return (this.props.animatedImageProps || this.props.liveChannelLogin) && (e = {
                        onMouseEnter: this.handleFocus,
                        onMouseLeave: this.handleBlur,
                        onFocus: this.handleFocus,
                        onBlur: this.handleBlur
                    }), a.createElement("div", i.__assign({}, e), this.renderLoadingSpinner(), a.createElement(d._32, {
                        background: d.n.Alt2
                    }, a.createElement(d.k, {
                        ratio: this.props.aspectRatio
                    }, this.renderImage())))
                }, t.prototype.renderImage = function() {
                    var e, t, n = !(!this.props.animatedImageProps || !this.state.isHovered || this.state.didAnimatedPreviewFailToLoad),
                        r = s("preview-card-thumbnail__image", ((e = {})["preview-card-thumbnail__image--animated"] = this.state.isHovered && this.state.didAnimatedPreviewLoad, e["preview-card-thumbnail__image--hidden"] = this.shouldShowLiveVideoPreview() && this.state.isLiveVideoPreviewLoaded, e));
                    return this.shouldShowLiveVideoPreview() ? [a.createElement("div", {
                        key: "player-key",
                        className: s((t = {}, t["preview-card-thumbnail__image--hidden"] = !this.state.isLiveVideoPreviewLoaded, t))
                    }, a.createElement(x.a, {
                        channelLogin: this.props.liveChannelLogin,
                        onPlayerPlaying: this.onLivePreviewLoaded
                    })), a.createElement("div", {
                        key: "image-key",
                        className: r
                    }, a.createElement(d.N, i.__assign({}, this.props.staticImageProps, {
                        "data-test-selector": U
                    })))] : n && void 0 !== this.props.animatedImageProps ? a.createElement("div", {
                        className: r
                    }, a.createElement(d.N, i.__assign({}, this.props.animatedImageProps, {
                        onLoad: this.onImageLoad,
                        onError: this.onImageLoadError,
                        "data-test-selector": U
                    }))) : a.createElement("div", {
                        className: r
                    }, a.createElement(d.N, i.__assign({}, this.props.staticImageProps, {
                        "data-test-selector": U
                    })))
                }, t.prototype.renderLoadingSpinner = function() {
                    if (this.shouldShowLiveVideoPreview() && !this.state.isLiveVideoPreviewLoaded) return a.createElement(d._32, {
                        attachRight: !0,
                        attachTop: !0,
                        background: d.n.Overlay,
                        borderRadius: d.t.Small,
                        color: d.K.OverlayAlt,
                        margin: .5,
                        padding: .5,
                        position: d._15.Absolute,
                        zIndex: d._59.Above
                    }, a.createElement(d._10, {
                        fillContent: !0,
                        inheritColor: !0,
                        size: d._30.Small,
                        delay: 0
                    }))
                }, t
            }(a.Component),
            j = (n("ea7N"), function(e) {
                var t = null;
                return e.subtitles && e.subtitles.length > 0 && (t = e.subtitles.map(function(e, t) {
                    return a.createElement(d._8, {
                        key: t,
                        "data-test-selector": "preview-card-titles__subtitle"
                    }, a.createElement(d.Q, {
                        color: d.K.Alt
                    }, "string" == typeof e ? e : a.createElement(d.O, {
                        to: e.linkTo,
                        type: d.P.Inherit
                    }, e.text)))
                })), a.createElement("div", null, a.createElement(d.O, {
                    to: e.linkTo,
                    onClick: e.onClick,
                    type: d.P.Inherit,
                    "data-test-selector": "preview-card-titles__primary-link"
                }, a.createElement(d.Q, {
                    type: d._46.H3,
                    fontSize: d.V.Size5,
                    lines: 1,
                    bold: !0,
                    ellipsis: !0
                }, e.title)), a.createElement(d._8, {
                    className: "preview-card-titles__subtitle-wrapper"
                }, t))
            }),
            M = n("IOwa"),
            V = n("mi6k");

        function H(e) {
            return void 0 !== e.streamType
        }

        function B(e) {
            return void 0 !== e.watchedProgressPercent
        }

        function W(e) {
            return void 0 !== e.clipCreatedByChannelLogin
        }! function(e) {
            e[e.SingleGameList = 1] = "SingleGameList", e[e.SingleChannelList = 2] = "SingleChannelList", e[e.MixedGameAndChannelList = 3] = "MixedGameAndChannelList"
        }(O || (O = {}));
        var z = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return i.__extends(t, e), t.prototype.render = function() {
                return a.createElement("div", {
                    className: "preview-card"
                }, a.createElement(d._8, {
                    position: d._15.Relative
                }, a.createElement(d.O, {
                    to: this.props.linkTo,
                    onClick: this.props.onClick
                }, a.createElement(D, {
                    staticImageProps: this.props.thumbnailImageProps,
                    animatedImageProps: B(this.props) && this.props.animatedImageProps || void 0,
                    liveChannelLogin: H(this.props) && this.props.enableLivePreview ? this.props.channelLogin : void 0
                }), this.renderOverlay())), a.createElement(d._8, {
                    display: d.R.Flex,
                    flexWrap: d.U.NoWrap,
                    margin: {
                        top: 1
                    }
                }, a.createElement(d._8, {
                    flexGrow: 0,
                    flexShrink: 0,
                    padding: {
                        right: 1
                    }
                }, this.renderIconicImage()), a.createElement(d._8, {
                    flexGrow: 1,
                    flexShrink: 1,
                    overflow: d._11.Hidden
                }, this.renderTitles())), this.renderAppendages())
            }, t.prototype.renderOverlay = function() {
                return H(this.props) ? a.createElement(F, {
                    topLeft: a.createElement(M.a, {
                        type: this.props.streamType,
                        hosting: !!this.props.hostedByChannelLogin
                    }),
                    topRight: void 0,
                    bottomLeft: a.createElement(T, {
                        value: Object(r.d)("{viewerCount, plural, one {# viewer} other {# viewers}}", {
                            viewerCount: this.props.currentViewerCount
                        }, "VideoPreviewCard")
                    }),
                    bottomRight: void 0
                }) : B(this.props) ? a.createElement(F, {
                    topLeft: a.createElement(T, {
                        value: Object(V.b)(this.props.durationInSeconds),
                        icon: d._23.GlyphArrRight,
                        withBackground: !0
                    }),
                    topRight: void 0,
                    bottomLeft: a.createElement(T, {
                        value: this.getViewCountLabel()
                    }),
                    bottomRight: a.createElement(T, {
                        value: Object(r.c)(new Date(this.props.datePublished), "medium")
                    }),
                    progressBarPercent: this.props.watchedProgressPercent
                }) : W(this.props) ? a.createElement(F, {
                    topLeft: a.createElement(T, {
                        value: Object(V.b)(this.props.durationInSeconds),
                        icon: d._23.Clip,
                        withBackground: !0
                    }),
                    topRight: void 0,
                    bottomLeft: a.createElement(T, {
                        value: this.getViewCountLabel()
                    }),
                    bottomRight: a.createElement(T, {
                        value: Object(r.c)(new Date(this.props.datePublished), "medium")
                    })
                }) : void 0
            }, t.prototype.getViewCountLabel = function() {
                return B(this.props) || W(this.props) ? Object(r.d)("{viewerCount, plural, one {# view} other {# views}}", {
                    viewerCount: this.props.viewCount
                }, "VideoPreviewCard") : ""
            }, t.prototype.renderIconicImage = function() {
                return this.props.context === O.SingleChannelList && this.props.gameBoxArtImageProps && this.props.gameTitleLinkTo ? a.createElement(P, {
                    imageProps: this.props.gameBoxArtImageProps,
                    linkTo: this.props.gameTitleLinkTo,
                    aspect: d.l.BoxArt
                }) : a.createElement(P, {
                    imageProps: this.props.channelImageProps,
                    linkTo: this.props.channelLoginLinkTo,
                    aspect: d.l.Aspect1x1
                })
            }, t.prototype.renderTitles = function() {
                var e = [{
                    text: this.props.channelLogin,
                    linkTo: this.props.channelLoginLinkTo
                }];
                return W(this.props) ? e.push({
                    text: Object(r.d)("Clipped by {userName}", {
                        userName: this.props.clipCreatedByChannelLogin
                    }, "VideoPreviewCard"),
                    linkTo: this.props.clipCreatedByChannelLoginLinkTo
                }) : this.props.context !== O.SingleGameList && this.props.gameTitle && this.props.gameTitleLinkTo && e.push({
                    text: this.props.gameTitle,
                    linkTo: this.props.gameTitleLinkTo
                }), a.createElement(j, {
                    title: this.props.title,
                    linkTo: this.props.linkTo,
                    subtitles: e
                })
            }, t.prototype.renderAppendages = function() {
                if (this.props.playerMetadata && this.props.playerMetadataGame) return a.createElement(I, {
                    streamMetadata: this.props.playerMetadata,
                    game: this.props.playerMetadataGame
                })
            }, t
        }(a.Component);
        n.d(t, "b", function() {
            return O
        }), n.d(t, "a", function() {
            return z
        })
    },
    vKYI: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("BwgW"),
            r = n("GiK3"),
            o = n("CSlQ"),
            s = n("fc0G"),
            l = n("L3z0"),
            d = n("5MsU"),
            c = {
                autoplay: !0,
                branding: !1,
                channelInfo: !1,
                controls: !1,
                height: "100%",
                playsinline: !0,
                player: s.b.AnimatedThumbnails,
                showInfo: !1,
                trackingProperties: {
                    client_app: "twilight"
                },
                width: "100%",
                oauth_token: ""
            };

        function u() {
            return !!window.Twitch && !!window.Twitch.Player
        }
        var m = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.checkPlayerDependencyStatus = function() {
                    u() ? (n.setState({
                        canInitializePlayer: !0
                    }), n.checkPlayerDependencyAnimationFrame = null) : n.checkPlayerDependencyAnimationFrame = requestAnimationFrame(n.checkPlayerDependencyStatus)
                }, n.attachRef = function(e) {
                    return n.playerRef = e
                }, n.onPlayerReady = function() {
                    n.player && n.setState({
                        playerInitialized: !0
                    })
                }, n.onPlayerPlay = function() {
                    n.player.setVolume(0)
                }, n.onPlayerPlaying = function() {
                    n.player.setQuality("160p30"), n.props.onPlayerPlaying && n.props.onPlayerPlaying()
                }, n.state = {
                    canInitializePlayer: u(),
                    playerInitialized: !1
                }, n
            }
            return i.__extends(t, e), n = t, t.prototype.componentDidMount = function() {
                var e = this;
                if (this.userVolumeSetting = window.localStorage.getItem("volume"), this.userMuteSetting = window.localStorage.getItem("muted"), window.addEventListener("beforeunload", function() {
                        return e.resetVolume()
                    }), this.state.canInitializePlayer ? this.initializePlayer() : this.checkPlayerDependencyAnimationFrame = window.requestAnimationFrame(this.checkPlayerDependencyStatus), window.__playerScriptChunk && !n.tagInjected) {
                    var t = document.createElement("script");
                    t.async = !0, t.crossOrigin = "anonymous", t.src = window.__playerScriptChunk, document.body.appendChild(t);
                    var i = document.createElement("link");
                    i.href = window.__playerStyleChunk, i.media = "screen", i.rel = "stylesheet", i.type = "text/css", document.body.appendChild(i), n.tagInjected = !0
                }
            }, t.prototype.componentWillUpdate = function(e, t) {
                this.state.canInitializePlayer || !t.canInitializePlayer ? t.canInitializePlayer && t.playerInitialized : this.initializePlayer()
            }, t.prototype.render = function() {
                return r.createElement("div", {
                    className: "video-player",
                    "data-test-selector": "thumbnail-video-player"
                }, r.createElement("div", {
                    className: "video-player__container",
                    ref: this.attachRef
                }))
            }, t.prototype.componentWillUnmount = function() {
                var e = this;
                this.checkPlayerDependencyAnimationFrame && cancelAnimationFrame(this.checkPlayerDependencyAnimationFrame), window.removeEventListener("beforeunload", function() {
                    return e.resetVolume()
                }), this.resetVolume(), this.player && (this.player.removeEventListener(d.a.PlayerReady, this.onPlayerReady), this.player.removeEventListener(l.a.Play, this.onPlayerPlay), this.player.removeEventListener(l.a.Playing, this.onPlayerPlaying), a.extensionService.unregisterPlayer(), this.player.destroy())
            }, t.prototype.initializePlayer = function() {
                var e = c;
                this.props.channelLogin && (e.channel = this.props.channelLogin);
                var t = new window.Twitch.Player(this.playerRef, e);
                this.player = t, t.addEventListener(d.a.PlayerReady, this.onPlayerReady), t.addEventListener(l.a.Play, this.onPlayerPlay), t.addEventListener(l.a.Playing, this.onPlayerPlaying), a.extensionService.registerPlayer(this.player)
            }, t.prototype.resetVolume = function() {
                this.userVolumeSetting && window.localStorage.setItem("volume", this.userVolumeSetting), this.userMuteSetting && window.localStorage.setItem("muted", this.userMuteSetting)
            }, t.tagInjected = !1, t = n = i.__decorate([Object(o.d)("LiveChannelPreviewCard")], t);
            var n
        }(r.Component);
        n.d(t, !1, function() {
            return "thumbnail-video-player"
        }), n.d(t, !1, function() {
            return c
        }), n.d(t, "a", function() {
            return m
        })
    },
    weaG: function(e, t) {},
    "x49/": function(e, t, n) {
        e.exports = n.p + "assets/notification_upsell_arrow-c9d4ff7c87444b45d8134f21635c5443.png"
    },
    x9n8: function(e, t, n) {
        "use strict";
        var i = n("RH2O"),
            a = n("2KeS"),
            r = n("V5M+"),
            o = n("Aj/L"),
            s = n("TToO"),
            l = n("HW6M"),
            d = n("GiK3"),
            c = n("6sO2"),
            u = n("J8WN"),
            m = n("+8VM"),
            p = n("7vx8"),
            v = n("puy8"),
            h = n("HZww"),
            g = n("Odds"),
            f = (n("weaG"), function(e) {
                var t = {
                    "default-avatar__selected": e.selected,
                    "default-avatar": !0
                };
                return d.createElement(g._8, {
                    padding: {
                        bottom: 1
                    }
                }, d.createElement("div", {
                    onClick: function() {
                        e.onSelect(e.index)
                    },
                    "aria-label": Object(c.d)("Click to select Default Avatar Number {index, number}", {
                        index: e.index
                    }, "Default Avatar")
                }, d.createElement(g._32, {
                    fullHeight: !0,
                    fullWidth: !0,
                    position: g._15.Relative,
                    className: l(t)
                }, d.createElement("img", {
                    alt: Object(c.d)("Default Avatar Number {index, number}", {
                        index: e.index
                    }, "Default Avatar"),
                    src: e.imageSrc
                }))))
            }),
            k = n("4Q9N"),
            _ = n("Tt3k"),
            b = n("W6ca"),
            y = n("xgnX"),
            E = n("CSlQ"),
            w = (n("AL3x"), n("nmDn")),
            S = ["image/*"],
            N = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        statusMessage: null,
                        imagePreviewURL: "",
                        profileUpdated: !1,
                        currentImageHasTallAspectRatio: !1,
                        imageFormat: ""
                    }, t.currentImage = null, t.logger = c.j.withCategory("ProfileImagePicker"), t.onImageInputChange = function(e) {
                        var n;
                        if (null !== e) {
                            n = e[0];
                            var i = Object(_.a)(n),
                                a = (n.size / 1024 / 1024).toFixed(4);
                            parseInt(a, 10) > 10 ? t.setState({
                                statusMessage: y.b.BadSizeError
                            }) : (t.setState({
                                selectedImageIndex: void 0,
                                imagePreviewURL: "",
                                imageFormat: "",
                                currentImageHasTallAspectRatio: !1
                            }), Object(_.b)(n, function(e) {
                                t.currentImage = e, t.setState({
                                    statusMessage: null
                                })
                            }, function(e) {
                                var n = new Image,
                                    a = !1;
                                n.onload = function() {
                                    n.width < n.height && (a = !0), t.setState({
                                        currentImageHasTallAspectRatio: a
                                    })
                                }, n.src = e, t.setState({
                                    imagePreviewURL: e,
                                    imageFormat: i
                                })
                            }))
                        } else t.setState({
                            statusMessage: y.b.ImageNotSelected
                        })
                    }, t.onUpdateButtonClick = function(e) {
                        return s.__awaiter(t, void 0, void 0, function() {
                            var t, n, i, a, r = this;
                            return s.__generator(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        if (e.preventDefault(), void 0 !== this.state.selectedImageIndex) return this.setDefaultAvatar(), [2];
                                        if (!this.currentImage) return this.setState({
                                            statusMessage: y.b.ImageNotSelected
                                        }), [2];
                                        this.setState({
                                            statusMessage: y.b.Uploading
                                        }), o.label = 1;
                                    case 1:
                                        return o.trys.push([1, 3, , 4]), [4, Object(b.a)(this.props.userID, this.props.authToken, k.a.ProfileImage, this.state.imageFormat)];
                                    case 2:
                                        return t = o.sent(), n = t.upload_url, i = t.upload_id, [3, 4];
                                    case 3:
                                        return a = o.sent(), this.logger.error(a, "Request for upload ID failed to get expected response from server."), this.setState({
                                            statusMessage: y.b.UnexpectedError
                                        }), [2];
                                    case 4:
                                        return this.unsubscribe = c.k.subscribe({
                                            topic: Object(h.j)(this.props.userID),
                                            success: function() {
                                                try {
                                                    Object(b.c)(n, r.currentImage)
                                                } catch (e) {
                                                    r.logger.error(e, "Profile Image upload failed."), r.unsubscribe(), r.setState({
                                                        statusMessage: y.b.UnexpectedError,
                                                        selectedImageIndex: void 0,
                                                        imagePreviewURL: "",
                                                        imageFormat: "",
                                                        currentImageHasTallAspectRatio: !1
                                                    })
                                                }
                                                r.timeoutHandle = setTimeout(function() {
                                                    return r.handlePubSubTimeout()
                                                }, 1e4)
                                            },
                                            failure: function() {
                                                r.setState({
                                                    statusMessage: y.b.UnexpectedError,
                                                    selectedImageIndex: void 0,
                                                    imagePreviewURL: "",
                                                    currentImageHasTallAspectRatio: !1
                                                })
                                            },
                                            onMessage: function(e) {
                                                if (e.upload_id === i) {
                                                    clearTimeout(r.timeoutHandle);
                                                    var t = null;
                                                    t = e.status === y.a.Success ? y.b.Success : e.status === y.a.BadSize ? y.b.BadSizeError : e.status === y.a.NonImage ? y.b.NonImageError : e.status === y.a.WrongFormat ? y.b.WrongFormatError : y.b.UnexpectedError, r.unsubscribe && r.unsubscribe(), r.setState({
                                                        statusMessage: t
                                                    }), r.state.statusMessage === y.b.Success ? r.setState({
                                                        profileUpdated: !0
                                                    }) : (r.setState({
                                                        profileUpdated: !1,
                                                        imagePreviewURL: "",
                                                        imageFormat: ""
                                                    }), r.currentImage = null)
                                                }
                                            }
                                        }), [2]
                                }
                            })
                        })
                    }, t.onDefaultImageSelected = function(e) {
                        t.setState({
                            selectedImageIndex: e,
                            imagePreviewURL: Object(v.a)(v.b[e], 300)
                        })
                    }, t.handlePubSubTimeout = function() {
                        t.unsubscribe(), t.setState({
                            statusMessage: y.b.TimeoutError
                        })
                    }, t
                }
                return s.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillUnmount = function() {
                    void 0 !== this.unsubscribe && this.unsubscribe(), this.timeoutHandle && clearTimeout(this.timeoutHandle)
                }, t.prototype.componentDidUpdate = function() {
                    var e = this;
                    this.state.profileUpdated && setTimeout(function() {
                        e.props.data && e.props.data.refetch(), e.props.closeModal()
                    }, 1e3)
                }, t.prototype.render = function() {
                    var e = this,
                        t = v.b.map(function(t, n) {
                            return d.createElement(f, {
                                key: t.id,
                                imageSrc: Object(v.a)(t, 300),
                                index: n,
                                onSelect: e.onDefaultImageSelected,
                                selected: e.state.selectedImageIndex === n
                            })
                        }),
                        n = null;
                    if ("" !== this.state.imagePreviewURL) {
                        var i = {
                            "profile-edit__image-preview": !0,
                            "profile-edit__image-preview-tall": this.state.currentImageHasTallAspectRatio
                        };
                        n = d.createElement(g._8, {
                            className: l(i),
                            "data-test-selector": "preview-image",
                            position: g._15.Relative
                        }, d.createElement("img", {
                            src: "" + this.state.imagePreviewURL
                        }))
                    }
                    var a = null;
                    "" === this.state.imagePreviewURL && (a = d.createElement(g._8, {
                        className: "profile-edit__upload-info"
                    }, d.createElement(g._8, null, d.createElement(g._22, {
                        asset: g._23.Plus,
                        type: g._24.Alt2,
                        height: 20,
                        width: 20
                    })), d.createElement(g.Q, {
                        type: g._46.H3,
                        color: g.K.Alt2,
                        fontSize: g.V.Size4
                    }, Object(c.d)("Upload a Photo", "Profile Edit"))));
                    var r = null;
                    this.props.showCloser && (r = d.createElement(m.a, null));
                    var o = null;
                    if (null !== this.state.statusMessage) {
                        var s = Object(y.c)(this.state.statusMessage),
                            p = s.message,
                            h = s.type;
                        o = d.createElement(g._12, {
                            label: p,
                            type: h
                        })
                    }
                    var k = this.props.login;
                    return this.props.displayName && (k = this.props.displayName), d.createElement(g._8, {
                        className: "profile-edit",
                        position: g._15.Relative,
                        fullHeight: !0
                    }, d.createElement(g._32, {
                        className: "profile-edit__background-container",
                        background: g.n.Base,
                        fullWidth: !0
                    }, d.createElement(g._8, {
                        padding: 2,
                        display: g.R.InlineBlock,
                        position: g._15.Relative,
                        textAlign: g._42.Center,
                        fullWidth: !0
                    }, d.createElement(g._32, {
                        textAlign: g._42.Left,
                        borderBottom: !0,
                        padding: {
                            bottom: 1
                        },
                        margin: {
                            bottom: 2
                        }
                    }, d.createElement(g.Q, {
                        type: g._46.H3,
                        color: g.K.Alt2,
                        fontSize: g.V.Size4
                    }, Object(c.d)("Edit Profile Picture for {userName}", {
                        userName: k
                    }, "Profile Edit"), " ")), d.createElement(g._8, {
                        className: "profile-edit__upload-container",
                        display: g.R.InlineBlock,
                        position: g._15.Relative,
                        textAlign: g._42.Center,
                        margin: {
                            bottom: 1
                        }
                    }, d.createElement(g._8, {
                        className: "profile-edit__upload",
                        display: g.R.InlineBlock,
                        position: g._15.Relative,
                        textAlign: g._42.Center
                    }, d.createElement(u.a, {
                        allowedFileTypes: S,
                        onFilesSubmitted: this.onImageInputChange
                    }, a), n)), d.createElement(g._32, {
                        "data-test-selector": "status-message",
                        fontSize: g.V.Size4,
                        position: g._15.Relative,
                        textAlign: g._42.Center,
                        className: "profile-edit__status-message"
                    }, o), d.createElement(g._32, {
                        borderBottom: !0,
                        padding: {
                            bottom: .5
                        },
                        margin: {
                            bottom: 2
                        }
                    }, d.createElement(g._8, {
                        textAlign: g._42.Left,
                        margin: {
                            bottom: 1
                        }
                    }, d.createElement(g.Q, {
                        type: g._46.H3,
                        color: g.K.Alt2,
                        fontSize: g.V.Size5
                    }, Object(c.d)("Or select one of these", "Profile Edit"))), d.createElement(g._52, {
                        childWidth: g._53.ExtraSmall,
                        gutterSize: g._54.ExtraSmall,
                        placeholderItems: 3
                    }, t)), d.createElement(g._8, {
                        display: g.R.Flex,
                        justifyContent: g._7.Center
                    }, d.createElement(g.v, {
                        "data-test-selector": "update-button",
                        onClick: this.onUpdateButtonClick,
                        size: g.z.Large
                    }, Object(c.d)("Update", "Profile Edit"))))), r)
                }, t.prototype.setDefaultAvatar = function() {
                    return s.__awaiter(this, void 0, void 0, function() {
                        var e, t, n;
                        return s.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    this.setState({
                                        statusMessage: y.b.Uploading
                                    }), e = y.b.UnexpectedError, i.label = 1;
                                case 1:
                                    return i.trys.push([1, 3, , 4]), [4, Object(b.b)(this.props.userID, this.props.authToken, this.state.selectedImageIndex)];
                                case 2:
                                    return 204 === (t = i.sent()).status || 200 === t.status ? e = y.b.Success : this.logger.error(new Error("Default Avatar PUT failed. Fetch returned non-200 status: " + t.status), "Default Avatar PUT failed. Fetch returned non-200 status: " + t.status), [3, 4];
                                case 3:
                                    return n = i.sent(), this.logger.error(n, "Default Avatar PUT failed."), [3, 4];
                                case 4:
                                    return this.setState({
                                        statusMessage: e,
                                        profileUpdated: e === y.b.Success
                                    }), [2]
                            }
                        })
                    })
                }, t = s.__decorate([Object(p.a)(w, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.login
                            }
                        }
                    }
                })], t)
            }(d.Component),
            L = Object(E.d)("Profile Edit")(N);
        var C = Object(i.b)(function(e) {
            return {
                authToken: Object(o.a)(e)
            }
        }, function(e, t) {
            return Object(a.b)({
                closeModal: function() {
                    return t.successCallback && t.successCallback(), Object(r.c)()
                }
            }, e)
        })(L);
        n.d(t, "a", function() {
            return C
        })
    },
    xgnX: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        }), n.d(t, "b", function() {
            return a
        }), t.c = function(e) {
            switch (e) {
                case a.Success:
                    return {
                        message: Object(r.d)("Success!", "Profile Edit"),
                        type: o._13.Success
                    };
                case a.UnexpectedError:
                    return {
                        message: Object(r.d)("Unexpected error, please try again.", "Profile Edit"),
                        type: o._13.Alert
                    };
                case a.BadSizeError:
                    return {
                        message: Object(r.d)("Image might exceed 10MB.", "Profile Edit"),
                        type: o._13.Alert
                    };
                case a.NonImageError:
                    return {
                        message: Object(r.d)("You must upload an image.", "Profile Edit"),
                        type: o._13.Alert
                    };
                case a.WrongFormatError:
                    return {
                        message: Object(r.d)("You must select a valid image type.", "Profile Edit"),
                        type: o._13.Alert
                    };
                case a.TimeoutError:
                    return {
                        message: Object(r.d)("Upload timed-out. Please try again.", "Profile Edit"),
                        type: o._13.Alert
                    };
                case a.Uploading:
                    return {
                        message: Object(r.d)("Uploading....", "Profile Edit"),
                        type: o._13.Brand
                    };
                case a.ImageNotSelected:
                    return {
                        message: Object(r.d)("Select a image first.", "Profile Edit"),
                        type: o._13.Alert
                    };
                default:
                    return {
                        message: Object(r.d)("Please try again.", "Profile Edit"),
                        type: o._13.Alert
                    }
            }
        };
        var i, a, r = n("6sO2"),
            o = n("Odds");
        ! function(e) {
            e.Success = "SUCCESS", e.NonImage = "IS_IMAGE_VALIDATION_FAILED", e.WrongFormat = "IMAGE_FORMAT_VALIDATION_FAILED", e.BadSize = "FILE_SIZE_VALIDATION_FAILED"
        }(i || (i = {})),
        function(e) {
            e[e.Success = 0] = "Success", e[e.UnexpectedError = 1] = "UnexpectedError", e[e.BadSizeError = 2] = "BadSizeError", e[e.NonImageError = 3] = "NonImageError", e[e.WrongFormatError = 4] = "WrongFormatError", e[e.TimeoutError = 5] = "TimeoutError", e[e.Uploading = 6] = "Uploading", e[e.ImageNotSelected = 7] = "ImageNotSelected"
        }(a || (a = {}))
    },
    yU6t: function(e, t) {},
    z4Db: function(e, t) {}
});
//# sourceMappingURL=pages.event-landing-393c3a2a871c50d859215eca6aec59e7.js.map