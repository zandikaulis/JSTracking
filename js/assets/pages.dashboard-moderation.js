webpackJsonp([103], {
    "+V/3": function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return o
        }), n.d(t, "c", function() {
            return a
        }), n.d(t, "d", function() {
            return r
        }), n.d(t, "a", function() {
            return i
        });
        var o = "subscribe_to_channel",
            a = "turbo",
            r = "visit_url",
            i = "broadcaster"
    },
    "0TFF": function(e, t, n) {
        var o = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "VideoComments"
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
                            value: "badges"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "badge"
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
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "isGlobalMod"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
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
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "emoteSets"
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
                                                    value: "token"
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
                                        value: "includePrivate"
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
                                            value: "broadcastBadges"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "FragmentSpread",
                                                name: {
                                                    kind: "Name",
                                                    value: "badge"
                                                },
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
                                                    value: "isModerator"
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
                end: 449
            }
        };
        o.loc.source = {
            body: '#import "twilight/features/badges/models/badge-fragment.gql"\n#import "twilight/features/chat/models/cheer-fragment.gql"\nquery VideoComments($videoID: ID!) {\nbadges {\n...badge\n}\ncurrentUser {\nid\nroles {\nisStaff\nisSiteAdmin\nisGlobalMod\n}\nblockedUsers {\nid\n}\nemoteSets {\nid\nemotes {\nid\ntoken\n}\n}\n}\nvideo(id: $videoID options: { includePrivate: true }) {\nid\nbroadcastType\nowner {\nid\nlogin\nbroadcastBadges {\n...badge\n}\n...cheer\nself {\nisModerator\n}\n}\n}\n}',
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
        o.definitions = o.definitions.concat(r(n("QU+n").definitions)), o.definitions = o.definitions.concat(r(n("576g").definitions)), e.exports = o
    },
    "164Z": function(e, t) {
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
    "1tZx": function(e, t) {},
    "2IkU": function(e, t) {},
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
    "3T7g": function(e, t, n) {
        "use strict";
        var o = n("RbGx"),
            a = n("urTJ"),
            r = n("+V/3"),
            i = (n("AwFw"), n("TToO")),
            s = function() {
                function e(e, t, n) {
                    this.globalsBySet = new Map, this.channelsBySet = new Map, this.indexBadges(e, this.globalsBySet, n), Array.isArray(t) && this.indexBadges(t, this.channelsBySet, n)
                }
                return e.prototype.getBadge = function(e, t) {
                    var n = this.channelsBySet.get(e);
                    return n && n.has(t) ? n.get(t) || null : void 0 !== (n = this.globalsBySet.get(e)) && n.get(t) || null
                }, e.prototype.indexBadges = function(e, t, n) {
                    e.forEach(function(e) {
                        n && e.clickAction === r.b && (e = i.__assign({}, e, {
                            channelName: n
                        }));
                        var o = t.get(e.setID);
                        o || (o = new Map, t.set(e.setID, o)), o.set(e.version, e)
                    })
                }, e
            }();
        new s([], [], "");
        n.d(t, "b", function() {
            return o.a
        }), n.d(t, "a", function() {
            return a.a
        }), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, "c", function() {
            return s
        })
    },
    "4amF": function(e, t) {},
    "5vPJ": function(e, t, n) {
        "use strict";
        var o = n("TToO"),
            a = n("GiK3"),
            r = n("6sO2"),
            i = n("7vx8"),
            s = n("GxDs"),
            c = n("pexS"),
            l = {
                isTimedOut: !1
            },
            d = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = l, t.timeoutID = null, t
                }
                return o.__extends(t, e), t.prototype.componentDidMount = function() {
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
                        o = e.loading;
                    return n || this.state.isTimedOut ? a.createElement(s.a, {
                        error: {
                            title: Object(r.d)("Something went wrong", "ClipsChatCard"),
                            description: Object(r.d)("We couldn't find that Clip", "ClipsChatCard")
                        }
                    }) : o || !t ? a.createElement(s.a, null) : a.createElement(s.a, {
                        data: {
                            title: t.title || (t.broadcaster ? Object(r.d)("Clip of {broadcaster}", {
                                broadcaster: t.broadcaster.displayName
                            }, "ClipsChatCard") : ""),
                            description: t.curator ? Object(r.d)("Clipped by {curator}", {
                                curator: t.curator.displayName
                            }, "ClipsChatCard") : "",
                            previewImageURL: t.thumbnailURL,
                            contentURL: t.url
                        }
                    })
                }, t
            }(a.Component),
            u = function(e) {
                return {
                    variables: {
                        slug: e.slug
                    },
                    notifyOnNetworkStatusChange: !0,
                    fetchPolicy: e.forceNetworkRequest ? "cache-first" : "cache-only"
                }
            },
            m = Object(i.a)(c, {
                options: u
            })(d);
        n.d(t, !1, function() {
            return 5e3
        }), n.d(t, !1, function() {
            return "https://static-cdn.jtvnw.net/emoticons/v1/58765/2.0"
        }), n.d(t, !1, function() {
            return l
        }), n.d(t, !1, function() {
            return d
        }), n.d(t, !1, function() {
            return u
        }), n.d(t, "a", function() {
            return m
        })
    },
    "6Agf": function(e, t, n) {
        "use strict";
        var o;
        n.d(t, "a", function() {
                return o
            }),
            function(e) {
                e.Admin = "admin", e.GlobalMod = "global_mod", e.Moderator = "mod", e.Owner = "owner", e.Staff = "staff", e.Subscriber = "subscriber", e.User = ""
            }(o || (o = {}))
    },
    "7LVu": function(e, t) {},
    "7t3k": function(e, t) {},
    "7vYp": function(e, t) {},
    "90yy": function(e, t) {},
    "9kjL": function(e, t) {},
    "9m97": function(e, t, n) {
        "use strict";
        n.d(t, "d", function() {
            return o
        }), n.d(t, "a", function() {
            return a
        }), n.d(t, "b", function() {
            return r
        }), n.d(t, "c", function() {
            return i
        });
        var o = "BROADCAST_TYPE_ALL",
            a = "broadcaster_id",
            r = "BROADCAST_LENGTH_ANY",
            i = "BROADCAST_SORT_POPULAR"
    },
    AaXK: function(e, t, n) {
        var o = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ChatSettings_Badges"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "channelLogin"
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
                                    value: "selectedBadge"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "badge"
                                        },
                                        directives: []
                                    }]
                                }
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "availableBadges"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "badge"
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
                                    value: "channelLogin"
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
                                            value: "selectedBadge"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "FragmentSpread",
                                                name: {
                                                    kind: "Name",
                                                    value: "badge"
                                                },
                                                directives: []
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "availableBadges"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "FragmentSpread",
                                                name: {
                                                    kind: "Name",
                                                    value: "badge"
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
                end: 288
            }
        };
        o.loc.source = {
            body: '#import "twilight/features/badges/models/badge-fragment.gql"\nquery ChatSettings_Badges($channelLogin: String!) {\ncurrentUser {\nid\nselectedBadge {\n...badge\n}\navailableBadges {\n...badge\n}\n}\nuser(login: $channelLogin) {\nid\nself {\nselectedBadge {\n...badge\n}\navailableBadges {\n...badge\n}\n}\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var a = {};
        o.definitions = o.definitions.concat(n("QU+n").definitions.filter(function(e) {
            if ("FragmentDefinition" !== e.kind) return !0;
            var t = e.name.value;
            return !a[t] && (a[t] = !0, !0)
        })), e.exports = o
    },
    AwFw: function(e, t) {},
    B0KL: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "VideoChat_TrackingContext_VideoAndCurrentUser"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "videoCreatorID"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "ID"
                        }
                    }
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "videoID"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "ID"
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
                                    value: "login"
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
                end: 217
            }
        };
        n.loc.source = {
            body: "query VideoChat_TrackingContext_VideoAndCurrentUser($videoCreatorID: ID $videoID: ID) {\nvideo(id: $videoID) {\nid\nbroadcastType\ntitle\ngame {\nid\nname\n}\nowner {\nid\nlogin\nroles {\nisPartner\n}\n}\n}\ncurrentUser {\nid\nlogin\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    Bo8e: function(e, t) {},
    E8Jt: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            return e.map(function(e) {
                return {
                    title: e.title || "",
                    thumbnail: e.thumbnail || "",
                    thumbnailAltText: e.thumbnailAltText || "",
                    linkTo: e.linkTo || "",
                    login: e.login || "",
                    name: e.name || "",
                    createdAt: e.createdAt || 0,
                    length: e.length || 0,
                    id: e.id || ""
                }
            })
        }, t.b = function(e) {
            var t = {},
                n = e.broadcastSort === a.c,
                r = [];
            "broadcastType" in e && e.broadcastType !== a.d && void 0 !== e.broadcastType && r.push(e.broadcastType);
            "broadcasterId" in e && r.push(a.a + ":" + e.broadcasterId);
            t.facetFilters = (i = r, i.join(",")), "broadcastLength" in e && e.broadcastLength !== a.b && void 0 !== e.broadcastLength && (t.numericFilters = [e.broadcastLength]);
            var i;
            return {
                typeID: n ? o.a.VideosNewest : o.a.Videos,
                params: t
            }
        };
        var o = n("5LoI"),
            a = n("9m97")
    },
    FGVh: function(e, t) {},
    FKWv: function(e, t) {},
    FsFC: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        }), t.b = function(e, t) {
            void 0 === t && (t = a.Humanized);
            var n;
            t === a.ClockAuto && (t = e >= 3600 ? a.ClockHMS : a.ClockMS);
            switch (t) {
                case a.ClockHM:
                case a.ClockHMS:
                    n = o.Hour;
                    break;
                case a.ClockMS:
                    n = o.Minute
            }
            var l = 2;
            t === a.ClockHMS && (l = 3);
            var d = function(e, t) {
                    void 0 === t && (t = o.Month);
                    var n = {};
                    if (n.seconds = e, e < 60 || t === o.Second) return n;
                    if (n.minutes = Math.floor(e / 60), n.seconds = e % 60, n.minutes < 60 || t === o.Minute) return n;
                    if (n.hours = Math.floor(n.minutes / 60), n.minutes = n.minutes % 60, n.hours < 24 || t === o.Hour) return n;
                    if (n.days = Math.floor(n.hours / 24), n.hours = n.hours % 24, n.days < 7 || t === o.Day) return n;
                    if (n.days <= 26 || t === o.Week) return n.weeks = Math.floor(n.days / 7), n.days = n.days % 7, n;
                    return n.months = Math.round((n.days + 3) / 30), n
                }(e, n),
                u = Object.keys(d);
            if (u.forEach(function(e, n) {
                    t !== a.Humanized && t !== a.HumanizedShort || d[e] || delete d[e], n < u.length - l && delete d[e]
                }), t === a.Humanized) return function(e) {
                return e.months ? i(o.Month, e.months) : e.weeks && e.days ? i(o.Week, e.weeks) + " " + i(o.Day, e.days) : e.weeks ? i(o.Week, e.weeks) : e.days && e.hours ? i(o.Day, e.days) + " " + i(o.Hour, e.hours) : e.days ? i(o.Day, e.days) : e.hours && e.minutes ? i(o.Hour, e.hours) + " " + i(o.Minute, e.minutes) : e.hours ? i(o.Hour, e.hours) : e.minutes && e.seconds ? i(o.Minute, e.minutes) + " " + i(o.Second, e.seconds) : e.minutes ? i(o.Minute, e.minutes) : i(o.Second, e.seconds || 0)
            }(d);
            if (t === a.HumanizedShort) return function(e) {
                return e.months ? s(o.Month, e.months) : e.weeks && e.days ? "" + s(o.Week, e.weeks) + s(o.Day, e.days) : e.weeks ? s(o.Week, e.weeks) : e.days && e.hours ? "" + s(o.Day, e.days) + s(o.Hour, e.hours) : e.days ? s(o.Day, e.days) : e.hours && e.minutes ? "" + s(o.Hour, e.hours) + s(o.Minute, e.minutes) : e.hours ? s(o.Hour, e.hours) : e.minutes && e.seconds ? "" + s(o.Minute, e.minutes) + s(o.Second, e.seconds) : e.minutes ? s(o.Minute, e.minutes) : s(o.Second, e.seconds || 0)
            }(d);
            var m = ":",
                p = !1;
            switch (r.o.intl.getLanguageCode()) {
                case "cy":
                case "da":
                case "fi":
                case "id":
                case "nb":
                case "si":
                    m = ".";
                    break;
                case "af":
                case "fr":
                case "lt":
                    p = !0
            }
            var h = d.seconds || 0,
                g = d.minutes || 0,
                f = d.hours || 0;
            switch (t) {
                case a.ClockHM:
                case a.ClockHMS:
                    var v = p ? c(f, 2) : f,
                        b = v + m + c(g, 2);
                    return t === a.ClockHMS && (b += m + c(h, 2)), b;
                case a.ClockMS:
                    var v = p ? c(g, 2) : g;
                    return v + m + c(h, 2)
            }
        };
        var o, a, r = n("6sO2");

        function i(e, t) {
            switch (e) {
                case o.Second:
                    return Object(r.d)("{secondCount, plural, one {# second} other {# seconds}}", {
                        secondCount: t
                    }, "formatDuration");
                case o.Minute:
                    return Object(r.d)("{minuteCount, plural, one {# minute} other {# minutes}}", {
                        minuteCount: t
                    }, "formatDuration");
                case o.Hour:
                    return Object(r.d)("{hourCount, plural, one {# hour} other {# hours}}", {
                        hourCount: t
                    }, "formatDuration");
                case o.Day:
                    return Object(r.d)("{dayCount, plural, one {# day} other {# days}}", {
                        dayCount: t
                    }, "formatDuration");
                case o.Week:
                    return Object(r.d)("{weekCount, plural, one {# week} other {# weeks}}", {
                        weekCount: t
                    }, "formatDuration");
                case o.Month:
                    return Object(r.d)("{monthCount, plural, one {# month} other {# months}}", {
                        monthCount: t
                    }, "formatDuration");
                default:
                    return ""
            }
        }

        function s(e, t) {
            switch (e) {
                case o.Second:
                    return Object(r.d)("{secondCount}s", {
                        secondCount: t
                    }, "formatDuration");
                case o.Minute:
                    return Object(r.d)("{minuteCount}m", {
                        minuteCount: t
                    }, "formatDuration");
                case o.Hour:
                    return Object(r.d)("{hourCount}h", {
                        hourCount: t
                    }, "formatDuration");
                case o.Day:
                    return Object(r.d)("{dayCount}d", {
                        dayCount: t
                    }, "formatDuration");
                case o.Week:
                    return Object(r.d)("{weekCount}w", {
                        weekCount: t
                    }, "formatDuration");
                case o.Month:
                    return Object(r.d)("{monthCount}mo", {
                        monthCount: t
                    }, "formatDuration");
                default:
                    return ""
            }
        }

        function c(e, t) {
            var n = e.toString();
            return n.length < t ? "0".repeat(t - n.length) + n : n
        }! function(e) {
            e[e.Second = 0] = "Second", e[e.Minute = 1] = "Minute", e[e.Hour = 2] = "Hour", e[e.Day = 3] = "Day", e[e.Week = 4] = "Week", e[e.Month = 5] = "Month"
        }(o || (o = {})),
        function(e) {
            e[e.Humanized = 0] = "Humanized", e[e.HumanizedShort = 1] = "HumanizedShort", e[e.ClockAuto = 2] = "ClockAuto", e[e.ClockHM = 3] = "ClockHM", e[e.ClockMS = 4] = "ClockMS", e[e.ClockHMS = 5] = "ClockHMS"
        }(a || (a = {}))
    },
    GxDs: function(e, t, n) {
        "use strict";
        var o = n("TToO"),
            a = n("GiK3"),
            r = n("F8kA"),
            i = n("yDzg"),
            s = n("vH/s"),
            c = n("6sO2"),
            l = n("Odds"),
            d = function(e) {
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
                return o.__extends(t, e), t.prototype.componentWillReceiveProps = function() {
                    this.setState({
                        hasImageLoadingError: !1
                    })
                }, t.prototype.render = function() {
                    var e = c.a.defaultStreamPreviewURL;
                    return !this.state.hasImageLoadingError && this.props.imageURL && (e = this.props.imageURL), a.createElement(l.E, {
                        aspect: l.l.Aspect16x9,
                        alt: this.props.altText,
                        src: e,
                        onError: this.handleImageError
                    })
                }, t
            }(a.Component),
            u = (n("1tZx"), "https://static-cdn.jtvnw.net/emoticons/v1/58765/2.0"),
            m = {
                ERROR: "chat-card-error",
                TITLE: "chat-card-title",
                DESCRIPTION: "chat-card-description"
            },
            p = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderErrorCard = function() {
                        var e = a.createElement("img", {
                            "data-test-selector": m.ERROR,
                            src: u,
                            className: "chat-card__error-img"
                        });
                        return t.renderCardContent(e, t.props.error)
                    }, t.renderCardContent = function(e, t) {
                        var n, o;
                        return t ? (n = a.createElement(l.Q, {
                            type: l._49.Span,
                            fontSize: l.V.Size5,
                            "data-test-selector": m.TITLE,
                            title: t.title
                        }, t.title), o = a.createElement(l.Q, {
                            type: l._49.Span,
                            fontSize: l.V.Size6,
                            color: l.K.Alt2,
                            "data-test-selector": m.DESCRIPTION
                        }, t.description)) : (e = a.createElement(l._14, {
                            overlay: !0
                        }), n = a.createElement(l._14, {
                            width: 180
                        }), o = a.createElement(l._14, {
                            width: 120
                        })), a.createElement(l._35, {
                            background: l.n.Base,
                            display: l.R.Flex,
                            flexWrap: l.U.NoWrap,
                            padding: .5
                        }, a.createElement(l._35, {
                            className: "chat-card__preview-img",
                            background: l.n.Alt2,
                            display: l.R.Flex,
                            alignItems: l.c.Center,
                            justifyContent: l._7.Center,
                            flexShrink: 0
                        }, e), a.createElement(l._8, {
                            display: l.R.Flex,
                            alignItems: l.c.Center,
                            overflow: l._11.Hidden
                        }, a.createElement(l._8, {
                            padding: {
                                left: 1
                            },
                            fullWidth: !0
                        }, a.createElement(l._8, {
                            className: "chat-card__title",
                            ellipsis: !0
                        }, n), a.createElement(l._8, {
                            ellipsis: !0
                        }, o))))
                    }, t
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    var e;
                    if (this.props.error) e = this.renderErrorCard();
                    else if (this.props.data) {
                        var t = Object(i.a)(this.props.data.contentURL, {
                                tt_medium: s.PageviewMedium.Chat,
                                tt_content: s.PageviewContent.ChatCard
                            }),
                            n = a.createElement(d, {
                                altText: this.props.data.title,
                                imageURL: this.props.data.previewImageURL
                            });
                        e = a.createElement(r.a, {
                            className: "chat-card__link",
                            to: t,
                            target: "_blank"
                        }, this.renderCardContent(n, {
                            title: this.props.data.title,
                            description: this.props.data.description
                        }))
                    } else e = this.renderCardContent();
                    return a.createElement(l._35, {
                        elevation: 1,
                        margin: {
                            top: .5
                        }
                    }, e)
                }, t
            }(a.Component),
            h = p;
        n.d(t, !1, function() {
            return u
        }), n.d(t, !1, function() {
            return m
        }), n.d(t, !1, function() {
            return p
        }), n.d(t, "a", function() {
            return h
        })
    },
    KhMP: function(e, t) {},
    L0RX: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "RecentRaidsModActions_UnbanUser"
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
                                value: "UnbanUserFromChatRoomInput"
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
                            value: "unbanUserFromChatRoom"
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
                                    }]
                                }
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
            body: "mutation RecentRaidsModActions_UnbanUser($input: UnbanUserFromChatRoomInput!) {\nunbanUserFromChatRoom(input: $input) {\nban {\nisPermanent\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    LDoa: function(e, t) {},
    "Lx+S": function(e, t, n) {
        "use strict";
        var o = n("TToO"),
            a = n("GiK3"),
            r = n("RH2O"),
            i = n("CIox"),
            s = n("2KeS"),
            c = n("NXs7"),
            l = n("Ouuk"),
            d = n("jF7o"),
            u = n("+xm8"),
            m = n("f2i/"),
            p = n("NikC"),
            h = n("Aj/L"),
            g = n("0nzt"),
            f = n("vh75"),
            v = n("ass3"),
            b = n("TnJK"),
            k = n("O0Qc"),
            C = n("VsL1"),
            y = n("Umoc"),
            _ = n("6sO2"),
            S = n("zCIC"),
            E = n("7vx8"),
            w = n("HW6M"),
            D = n("6BvN"),
            O = [{
                name: "Red",
                hex: "#FF0000"
            }, {
                name: "Blue",
                hex: "#0000FF"
            }, {
                name: "Green",
                hex: "#008000"
            }, {
                name: "Firebrick",
                hex: "#B22222"
            }, {
                name: "Coral",
                hex: "#FF7F50"
            }, {
                name: "Yellow Green",
                hex: "#9ACD32"
            }, {
                name: "Orange Red",
                hex: "#FF4500"
            }, {
                name: "Sea Green",
                hex: "#2E8B57"
            }, {
                name: "Goldenrod",
                hex: "#DAA520"
            }, {
                name: "Chocolate",
                hex: "#D2691E"
            }, {
                name: "Cadet Blue",
                hex: "#5F9EA0"
            }, {
                name: "Dodger Blue",
                hex: "#1E90FF"
            }, {
                name: "Hot Pink",
                hex: "#FF69B4"
            }, {
                name: "Blue Violet",
                hex: "#8A2BE2"
            }, {
                name: "Spring Green",
                hex: "#00FF7F"
            }],
            M = n("Odds"),
            R = (n("90yy"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onKeyPress = function(e) {
                        if (e.charCode === D.a.Enter || e.charCode === D.a.Space) {
                            var n = e.currentTarget.getAttribute("data-color");
                            t.selectColor(n)
                        }
                    }, t.onColorSelected = function(e) {
                        var n = e.currentTarget.getAttribute("data-color");
                        t.selectColor(n)
                    }, t.selectColor = function(e) {
                        e && t.props.onColorSelected(e)
                    }, t
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    var e = this,
                        t = O.map(function(t) {
                            var n = t.hex === e.props.selectedColor,
                                o = {
                                    "color-chooser": !0,
                                    "color-chooser--selected": n
                                };
                            return a.createElement("div", {
                                role: "radio",
                                "aria-checked": n,
                                key: t.hex,
                                "data-color": t.hex,
                                title: t.name,
                                onClick: e.onColorSelected,
                                onKeyPress: e.onKeyPress,
                                className: w(o),
                                style: {
                                    backgroundColor: t.hex
                                },
                                "data-test-selector": "color_swatch_" + t.hex,
                                "data-a-target": "color_swatch_" + t.hex,
                                tabIndex: 0
                            })
                        }),
                        n = Object(_.d)("Name Color", "ChatSettings"),
                        o = a.createElement(M.Q, {
                            transform: M._48.Uppercase,
                            color: M.K.Alt2
                        }, n);
                    return this.props.borderTop && (o = a.createElement(M._35, {
                        margin: {
                            top: 2
                        },
                        borderTop: !0,
                        padding: {
                            top: 2
                        }
                    }, o)), a.createElement("div", null, a.createElement(M._35, {
                        margin: {
                            bottom: 1
                        },
                        background: M.n.Base,
                        color: M.K.Base,
                        display: M.R.InlineFlex,
                        flexDirection: M.T.Column,
                        fullWidth: !0
                    }, o), a.createElement(M._2, {
                        margin: {
                            y: 1
                        },
                        display: M.R.Flex,
                        flexWrap: M.U.Wrap
                    }, a.createElement("div", {
                        role: "radiogroup",
                        "aria-label": n
                    }, t, a.createElement(M.Q, {
                        fontSize: M.V.Size7
                    }, a.createElement("a", {
                        href: "https://twitch.tv/products/turbo?ref=more_colors_direct"
                    }, Object(_.d)("more colors →", "ChatSettings"))))))
                }, t
            }(a.Component)),
            T = n("OAwv"),
            N = n("AaXK"),
            I = (n("7LVu"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {}, t.onGlobalBadgeClicked = function(e) {
                        var n = e.currentTarget.getAttribute("data-badge");
                        t.setGlobalBadge(t.props.userLogin, n || "")
                    }, t.onGlobalBadgeKeyPress = function(e) {
                        if (e.charCode === D.a.Enter || e.charCode === D.a.Space) {
                            var n = e.currentTarget.getAttribute("data-badge");
                            t.setGlobalBadge(t.props.userLogin, n || "")
                        }
                    }, t.onChannelBadgeClicked = function(e) {
                        var n = e.currentTarget.getAttribute("data-badge");
                        t.setChannelBadge(t.props.channelLogin, t.props.userLogin, n || "")
                    }, t.onChannelBadgeKeyPress = function(e) {
                        if (e.charCode === D.a.Enter || e.charCode === D.a.Space) {
                            var n = e.currentTarget.getAttribute("data-badge");
                            t.setChannelBadge(t.props.channelLogin, t.props.userLogin, n || "")
                        }
                    }, t
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    return this.props.data && !this.props.data.loading && this.props.data.user && this.props.data.currentUser ? a.createElement("div", null, a.createElement(R, {
                        selectedColor: this.props.userChatColor,
                        onColorSelected: this.props.onColorSelected,
                        borderTop: !0
                    }), this.getBadgeChooser()) : null
                }, t.prototype.getBadgeChooser = function() {
                    var e = this;
                    if (this.props.data) {
                        var t = this.props.data.user.self.availableBadges,
                            n = this.props.data.user.self.selectedBadge,
                            o = this.props.data.currentUser.availableBadges,
                            r = this.props.data.currentUser.selectedBadge;
                        if (!t) return null;
                        var i = void 0 === this.state.channelBadgeID && n ? n.setID : this.state.channelBadgeID,
                            s = !i,
                            c = {
                                "edit-appearance__badge-chooser": !0,
                                "edit-appearance__badge-chooser--selected": s
                            },
                            l = Object(_.d)("No channel badges :(", "ChatSettings");
                        t && t.length > 0 && (l = t.map(function(t) {
                            var o = Boolean(n && t.setID === i),
                                r = {
                                    "edit-appearance__badge-chooser": !0,
                                    "edit-appearance__badge-chooser--selected": o
                                };
                            return a.createElement("div", {
                                role: "radio",
                                "aria-checked": o,
                                "data-badge": t.setID,
                                onClick: e.onChannelBadgeClicked,
                                onKeyPress: e.onChannelBadgeKeyPress,
                                key: t.setID + "/" + t.version,
                                className: w(r),
                                "data-test-selector": "channel_badge_" + t.setID,
                                "data-a-target": "channel_badge_" + t.setID,
                                tabIndex: 0
                            }, a.createElement(M._52, {
                                label: t.title
                            }, a.createElement("img", {
                                alt: t.title,
                                src: t.image1x,
                                srcSet: t.image1x + " 1x, " + t.image2x + " 2x, " + t.image4x + " 4x"
                            })))
                        })).push(a.createElement("div", {
                            key: "none",
                            role: "radio",
                            "aria-checked": s,
                            "data-badge": "",
                            onClick: this.onChannelBadgeClicked,
                            onKeyPress: this.onChannelBadgeKeyPress,
                            className: w(c),
                            "data-test-selector": "channel_badge_none",
                            "data-a-target": "channel_badge_none",
                            tabIndex: 0
                        }, a.createElement(M._52, {
                            label: Object(_.d)("Same as Global", "ChatSettings")
                        }, a.createElement("div", {
                            className: "edit-appearance__badge-chooser__none"
                        }, a.createElement(M._24, {
                            asset: M._25.Global
                        })))));
                        var d = void 0 === this.state.globalBadgeID && r ? r.setID : this.state.globalBadgeID,
                            u = !d,
                            m = {
                                "edit-appearance__badge-chooser": !0,
                                "edit-appearance__badge-chooser--selected": u
                            },
                            p = Object(_.d)("No global badges :(", "ChatSettings");
                        return o && o.length > 0 && (p = o.map(function(t) {
                            var n = Boolean(r && t.setID === d),
                                o = {
                                    "edit-appearance__badge-chooser": !0,
                                    "edit-appearance__badge-chooser--selected": n
                                };
                            return a.createElement("div", {
                                role: "radio",
                                "aria-checked": n,
                                "data-badge": t.setID,
                                onClick: e.onGlobalBadgeClicked,
                                onKeyPress: e.onGlobalBadgeKeyPress,
                                key: t.setID + "/" + t.version,
                                className: w(o),
                                "data-test-selector": "global_badge_" + t.setID,
                                "data-a-target": "global_badge_" + t.setID,
                                tabIndex: 0
                            }, a.createElement(M._52, {
                                label: t.title
                            }, a.createElement("img", {
                                alt: t.title,
                                src: t.image1x,
                                srcSet: t.image1x + " 1x, " + t.image2x + " 2x, " + t.image4x + " 4x"
                            })))
                        })).push(a.createElement("div", {
                            role: "radio",
                            "aria-checked": u,
                            key: "none",
                            "data-badge": "",
                            onClick: this.onGlobalBadgeClicked,
                            onKeyPress: this.onGlobalBadgeKeyPress,
                            className: w(m),
                            "data-test-selector": "global_badge_none",
                            "data-a-target": "global_badge_none",
                            tabIndex: 0
                        }, a.createElement(M._52, {
                            label: Object(_.d)("None", "ChatSettings")
                        }, a.createElement("div", {
                            className: "edit-appearance__badge-chooser__none"
                        }, a.createElement(M._24, {
                            asset: M._25.Ban
                        }))))), a.createElement("div", null, a.createElement(M._35, {
                            background: M.n.Base,
                            color: M.K.Base,
                            display: M.R.InlineFlex,
                            flexDirection: M.T.Column,
                            fullWidth: !0
                        }, a.createElement(M._35, {
                            margin: {
                                top: 2
                            },
                            padding: {
                                top: 2
                            },
                            borderTop: !0
                        }, a.createElement(M._52, {
                            align: M._53.Left,
                            label: Object(_.d)("Your global badge is shown when chatting and whispering.", "ChatSettings"),
                            width: 175
                        }, a.createElement(M.Q, {
                            color: M.K.Alt2,
                            transform: M._48.Uppercase
                        }, Object(_.d)("Global Badge [?]", "ChatSettings")))), a.createElement(M._2, {
                            margin: {
                                y: 1
                            },
                            padding: {
                                top: 1
                            },
                            display: M.R.Flex,
                            "data-a-target": "global-badge-selector"
                        }, a.createElement("div", {
                            role: "radiogroup"
                        }, p))), a.createElement(M._35, {
                            background: M.n.Base,
                            color: M.K.Base,
                            display: M.R.InlineFlex,
                            flexDirection: M.T.Column,
                            fullWidth: !0
                        }, a.createElement(M._35, {
                            margin: {
                                top: 2
                            },
                            padding: {
                                top: 2
                            },
                            borderTop: !0
                        }, a.createElement(M._52, {
                            align: M._53.Left,
                            label: Object(_.d)("Change the badge shown when chatting in this channel.", "ChatSettings"),
                            width: 175
                        }, a.createElement(M.Q, {
                            color: M.K.Alt2,
                            transform: M._48.Uppercase
                        }, Object(_.d)("Channel Badge [?]", "ChatSettings")))), a.createElement(M._2, {
                            margin: {
                                y: 1
                            },
                            padding: {
                                top: 1
                            },
                            display: M.R.Flex,
                            "data-a-target": "channel-badge-selector"
                        }, a.createElement("div", {
                            role: "radiogroup"
                        }, l))))
                    }
                }, t.prototype.setChannelBadge = function(e, t, n) {
                    return o.__awaiter(this, void 0, void 0, function() {
                        var a, r;
                        return o.__generator(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    return a = {
                                        "Client-ID": _.o.config.legacyClientID,
                                        Accept: "application/vnd.twitchtv.v4+json; charset=UTF-8",
                                        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                                        "Accept-Language": "en-us",
                                        Authorization: "OAuth " + this.props.authToken
                                    }, [4, fetch("https://api.twitch.tv/kraken/users/" + t + "/chat/channels/" + e + "/badges", {
                                        method: "PUT",
                                        body: T.stringify({
                                            selected_badge: n
                                        }),
                                        headers: a
                                    })];
                                case 1:
                                    return (r = o.sent()) && r.ok && (this.props.onBadgesChanged(), this.setState({
                                        channelBadgeID: n
                                    })), [2]
                            }
                        })
                    })
                }, t.prototype.setGlobalBadge = function(e, t) {
                    return o.__awaiter(this, void 0, void 0, function() {
                        var n, a;
                        return o.__generator(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    return n = {
                                        "Client-ID": _.o.config.legacyClientID,
                                        Accept: "application/vnd.twitchtv.v4+json; charset=UTF-8",
                                        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                                        "Accept-Language": "en-us",
                                        Authorization: "OAuth " + this.props.authToken
                                    }, [4, fetch("https://api.twitch.tv/kraken/users/" + e + "/chat/badges", {
                                        method: "PUT",
                                        body: T.stringify({
                                            selected_badge: t
                                        }),
                                        headers: n
                                    }).catch(console.error)];
                                case 1:
                                    return (a = o.sent()) && a.ok && (this.props.onBadgesChanged(), this.setState({
                                        globalBadgeID: t
                                    })), [2]
                            }
                        })
                    })
                }, t = o.__decorate([Object(E.a)(N, {
                    options: function(e) {
                        return {
                            variables: {
                                channelLogin: e.channelLogin
                            }
                        }
                    }
                })], t)
            }(a.Component)),
            A = n("+Znq"),
            x = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(M._8, {
                        "data-toggle-balloon-id": "raids-follower-only-tooltip",
                        margin: {
                            left: .5
                        },
                        position: M._15.Relative
                    }, a.createElement(M._52, {
                        align: M._53.Right,
                        direction: M._54.Top,
                        display: M.R.InlineFlex,
                        label: this.props.text,
                        width: 175,
                        show: !0
                    }, a.createElement(M._2, {
                        alignItems: M.c.Center,
                        className: "chat-settings__highlight-indicator",
                        display: M.R.InlineFlex,
                        justifyContent: M._7.Center
                    }, a.createElement(M.Q, {
                        color: M.K.Overlay,
                        fontSize: M.V.Size8,
                        type: M._49.Span,
                        "data-test-selector": "raids-follower-only-tooltip"
                    }, "i"))))
                }, t
            }(a.Component),
            F = n("V5M+"),
            L = n("oSFp"),
            U = n("F8kA"),
            j = n("9u8h"),
            B = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.targetChannelID = t.props.targetChannelID, t
                }
                return o.__extends(t, e), t.fetchRecentRaidsList = function(e) {
                    return o.__awaiter(this, void 0, void 0, function() {
                        var t, n;
                        return o.__generator(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    return o.trys.push([0, 2, , 3]), [4, j.a.get("/kraken/raids?client_id=" + _.a.authSettings.clientID + "&api_version=" + _.a.defaultAPIVersion + "&target_id=" + e)];
                                case 1:
                                    return t = o.sent(), [2, this.deserialize(t)];
                                case 2:
                                    return n = o.sent(), _.j.error(n, "Couldn't fetch raids list"), [2, []];
                                case 3:
                                    return [2]
                            }
                        })
                    })
                }, t.deserialize = function(e) {
                    var t = [];
                    if (e.body && e.body.raids) {
                        for (var n in e.body.raids)
                            if (n.hasOwnProperty) {
                                var o = {
                                    raidID: e.body.raids[n]._id,
                                    raidAt: e.body.raids[n].raid_at,
                                    userID: e.body.raids[n].creator_user._id,
                                    name: e.body.raids[n].creator_user.name
                                };
                                t.push(o)
                            }
                        return t
                    }
                    return []
                }, t
            }(a.Component),
            V = n("oIkB"),
            H = n("g7wA"),
            P = n("O9wU"),
            W = n("jPU6"),
            z = n("y1/w"),
            q = (n("MSFW"), n("L0RX")),
            K = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onUsernameClick = function(e) {
                        var n = e.currentTarget.getAttribute("data-username"),
                            o = e.currentTarget.getAttribute("data-raid-id") || "";
                        n && t.props.onUsernameClick(n, P.a.recent_raids, o)
                    }, t.onBanButtonClick = function(e) {
                        var n = e.currentTarget.getAttribute("data-channel-id") || "",
                            o = e.currentTarget.getAttribute("data-target-user-login") || "";
                        (0, t.props.banUser)(Object(V.a)({
                            channelID: n,
                            bannedUserLogin: o
                        }))
                    }, t.onUnbanButtonClick = function(e) {
                        var n = e.currentTarget.getAttribute("data-channel-id") || "",
                            o = e.currentTarget.getAttribute("data-target-user-login") || "";
                        (0, t.props.unbanUser)(Object(V.a)({
                            channelID: n,
                            bannedUserLogin: o
                        }))
                    }, t
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(M._8, {
                        key: "recent-raids-layout2-" + this.props.raiderUserID,
                        className: "recent-raids-item",
                        flexDirection: M.T.Row,
                        display: M.R.Flex,
                        fullWidth: !0
                    }, a.createElement(M._8, {
                        flexDirection: M.T.Row,
                        display: M.R.Flex,
                        fullWidth: !0,
                        justifyContent: M._7.Between
                    }, a.createElement(M.Q, {
                        bold: !0
                    }, a.createElement("a", {
                        className: "recent-raids-item__name",
                        "data-username": this.props.channelLogin,
                        "data-raid-id": this.props.raidID,
                        onClick: this.onUsernameClick,
                        href: "#"
                    }, this.props.channelLogin)), a.createElement(M._8, {
                        position: M._15.Relative
                    }, a.createElement(M._8, {
                        className: "recent-raids-item__timestamp"
                    }, Object(H.k)(Date.parse(this.props.timestamp))), this.getCardSlideInContent())))
                }, t.prototype.getCardSlideInContent = function() {
                    if (!this.props.slideInContent) return null;
                    var e = null;
                    return e = this.props.data.chatRoomBanStatus && this.props.data.chatRoomBanStatus.isPermanent ? a.createElement(M.v, {
                        key: "recent-raids-ban-button-" + this.props.raiderUserID,
                        size: M.z.Small,
                        type: M.B.Text,
                        onClick: this.onUnbanButtonClick,
                        "data-a-target": "recent-raid-item-button",
                        "data-raid-id": this.props.raidID,
                        "data-target-user-login": this.props.raiderLogin,
                        "data-target-user-id": this.props.raiderUserID,
                        "data-channel-id": this.props.channelID
                    }, Object(_.d)("Unban", "RecentRaid")) : a.createElement(M.v, {
                        key: "recent-raids-ban-button-" + this.props.raiderUserID,
                        size: M.z.Small,
                        type: M.B.Text,
                        onClick: this.onBanButtonClick,
                        "data-a-target": "recent-raid-item-button",
                        "data-raid-id": this.props.raidID,
                        "data-target-user-login": this.props.raiderLogin,
                        "data-target-user-id": this.props.raiderUserID,
                        "data-channel-id": this.props.channelID
                    }, Object(_.d)("Ban", "RecentRaid")), a.createElement(M._8, {
                        key: "recent-raids-layout-" + this.props.raiderUserID,
                        className: "recent-raids-item__hover-content",
                        zIndex: M._62.Above,
                        "data-a-target": "recent-raids-item-hover"
                    }, this.props.slideInContent, e)
                }, t = o.__decorate([Object(E.a)(z, {
                    options: function(e) {
                        return {
                            variables: {
                                targetUserID: e.raiderUserID,
                                channelID: e.channelID
                            },
                            fetchPolicy: "cache-and-network"
                        }
                    }
                }), Object(E.a)(W, {
                    name: "banUser",
                    options: function(e) {
                        return {
                            update: function(t, n) {
                                ! function(e, t, n) {
                                    var o = e.readQuery({
                                        query: z,
                                        variables: {
                                            targetUserID: n.raiderUserID,
                                            channelID: n.channelID
                                        }
                                    });
                                    o && (t && t.data && (o.chatRoomBanStatus = {
                                        isPermanent: !0,
                                        __typename: "ChatRoomBanStatus"
                                    }), e.writeQuery({
                                        query: z,
                                        variables: {
                                            targetUserID: n.raiderUserID,
                                            channelID: n.channelID
                                        },
                                        data: o
                                    }))
                                }(t, n, e)
                            }
                        }
                    }
                }), Object(E.a)(q, {
                    name: "unbanUser",
                    options: function(e) {
                        return {
                            update: function(t) {
                                ! function(e, t) {
                                    var n = e.readQuery({
                                        query: z,
                                        variables: {
                                            targetUserID: t.raiderUserID,
                                            channelID: t.channelID
                                        }
                                    });
                                    if (n) {
                                        var a = o.__assign({}, n, {
                                            chatRoomBanStatus: null
                                        });
                                        e.writeQuery({
                                            query: z,
                                            variables: {
                                                targetUserID: t.raiderUserID,
                                                channelID: t.channelID
                                            },
                                            data: a
                                        })
                                    }
                                }(t, e)
                            }
                        }
                    }
                })], t)
            }(a.Component),
            Q = n("mw/a"),
            G = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {}, t.onReportButtonClick = function(e) {
                        var n = e.currentTarget.getAttribute("data-raid-id") || "",
                            o = e.currentTarget.getAttribute("data-target-user-id") || "",
                            a = e.currentTarget.getAttribute("data-target-user-login") || "";
                        t.props.showReportUserModal({
                            reportContext: {
                                contentType: Q.a.Raid,
                                targetUserID: o,
                                contentID: n,
                                extra: JSON.stringify({
                                    channel_id: o.toString()
                                }),
                                additionalTrackingID: t.props.targetChannelID
                            },
                            title: Object(_.d)("Report {channelDisplayName}", {
                                channelDisplayName: a
                            }, "ReportUserModal")
                        })
                    }, t
                }
                return o.__extends(t, e), t.prototype.componentDidMount = function() {
                    return o.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return o.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, B.fetchRecentRaidsList(this.props.targetChannelID)];
                                case 1:
                                    return e = t.sent(), this.setState({
                                        raidChannels: e
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.render = function() {
                    var e = [],
                        t = [],
                        n = {};
                    if (void 0 !== this.state.raidChannels)
                        for (var o in 0 === this.state.raidChannels.length && e.push(a.createElement(M.Q, {
                                key: "recent-raids-no-raids",
                                type: M._49.P
                            }, Object(_.d)("You have no recent raids", "RecentRaids"))), this.state.raidChannels)
                            if (o.hasOwnProperty) {
                                var r = this.state.raidChannels[o];
                                this.state.raidChannels.hasOwnProperty(o) && void 0 === n[r.userID] && (t.push(a.createElement(K, {
                                    key: "recent-raids-item-" + r.userID,
                                    slideInContent: [a.createElement(M._35, {
                                        key: "recent-raids-item-report-area-" + r.userID,
                                        color: M.K.Alt2,
                                        display: M.R.InlineFlex
                                    }, a.createElement(M.v, {
                                        key: "recent-raid-report-button",
                                        size: M.z.Small,
                                        type: M.B.Text,
                                        onClick: this.onReportButtonClick,
                                        "data-a-target": "recent-raid-item-button",
                                        "data-raid-id": r.raidID,
                                        "data-target-user-login": r.name,
                                        "data-target-user-id": r.userID
                                    }, Object(_.d)("Report", "RecentRaid")), a.createElement(M._52, {
                                        align: M._53.Right,
                                        width: 150,
                                        label: Object(_.d)("Banning a user prevents them from future chatting or raiding", "RecentRaid")
                                    }))],
                                    timestamp: r.raidAt,
                                    channelLogin: r.name,
                                    raiderUserID: r.userID,
                                    channelID: this.props.targetChannelID,
                                    raiderLogin: r.name,
                                    raidID: r.raidID,
                                    onUsernameClick: this.props.onUsernameClick,
                                    showReportUserModal: this.props.showReportUserModal
                                })), n[r.userID] = !0)
                            }
                    var i = null;
                    return this.props.recentRaids ? a.createElement(M._8, {
                        key: "recent-raids"
                    }, a.createElement(M._8, {
                        margin: {
                            bottom: 2
                        }
                    }, a.createElement(M.Q, {
                        color: M.K.Link,
                        type: M._49.Span
                    }, a.createElement(U.a, {
                        to: {
                            pathname: "/broadcast/dashboard/settings/raids"
                        }
                    }, Object(_.d)("Manage Raid Settings", "RecentRaids")))), e, t) : (i = a.createElement(M._8, {
                        key: "recent-raids",
                        margin: {
                            top: 1,
                            bottom: 1
                        },
                        display: M.R.Flex,
                        justifyContent: M._7.Between,
                        alignItems: M.c.Center
                    }, a.createElement(M.O, {
                        hoverUnderlineNone: !0,
                        onClick: this.props.onClickRecentRaids,
                        "data-test-selector": "recent-raids-button"
                    }, Object(_.d)("See Recent Raids", "ChatSettings")), this.props.tooltipText && a.createElement(M._8, {
                        position: M._15.Relative
                    }, a.createElement(M._52, {
                        align: M._53.Right,
                        direction: M._54.Top,
                        display: M.R.InlineFlex,
                        label: this.props.tooltipText,
                        width: 175,
                        show: !0
                    }, a.createElement(M._2, {
                        alignItems: M.c.Center,
                        className: "chat-settings__highlight-indicator",
                        display: M.R.InlineFlex,
                        justifyContent: M._7.Center,
                        margin: {
                            left: .5
                        }
                    }, a.createElement(M.Q, {
                        color: M.K.Overlay,
                        fontSize: M.V.Size8,
                        type: M._49.Span
                    }, "i"))))), a.createElement(M._8, null, i))
                }, t
            }(a.Component);
        var $ = Object(r.b)(function() {
                return {}
            }, function(e) {
                return Object(s.b)({
                    showReportUserModal: function(e) {
                        var t = o.__rest(e, []);
                        return Object(F.d)(L.a, t)
                    }
                }, e)
            })(G),
            Y = n("UzRK"),
            J = n("YDbY"),
            Z = (n("7t3k"), function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.state = {
                        autoModToolTipVisible: !1
                    }, n.handleFollowerDurationClick = function(e) {
                        var t = e.currentTarget.getAttribute("data-duration");
                        t && n.onFollowerDurationChange(parseInt(t, 10))
                    }, n.onClickRecentRaids = function(e) {
                        e.nativeEvent.stopImmediatePropagation(), n.props.onClickRecentRaids()
                    }, n.onChatClear = function() {
                        n.props.onChatCommand(Object(k.c)())
                    }, n.getSelectedFollowerDuration = function() {
                        if (n.props.followerModeEnabled) return n.props.followerModeDuration;
                        var e = n.props.lastUsedFollowerDurations[n.props.channelLogin];
                        return "number" == typeof e ? e : Y.a
                    }, n.onFollowerModeToggle = function() {
                        if (n.props.followerModeEnabled) n.props.onChatCommand(Object(k.d)()), n.props.onFollowerModeDisable();
                        else {
                            var e = n.getSelectedFollowerDuration();
                            n.props.onChatCommand(Object(k.f)(e)), n.props.onFollowerModeDurationChange(e), n.props.onFollowerModeEnable()
                        }
                        Object(y.a)({
                            channelLogin: n.props.channelLogin,
                            isHostMode: n.props.isHostMode,
                            newValue: !n.props.followerModeEnabled,
                            settingName: b.a.FollowerMode
                        })
                    }, n.onSlowModeToggle = function() {
                        n.props.slowModeEnabled ? (n.props.onChatCommand(Object(k.e)()), n.props.onSlowModeDisable()) : (n.props.onChatCommand(Object(k.g)()), n.props.onSlowModeEnable()), Object(y.a)({
                            channelLogin: n.props.channelLogin,
                            isHostMode: n.props.isHostMode,
                            newValue: !n.props.slowModeEnabled,
                            settingName: b.a.SlowMode
                        })
                    }, n.onFollowerDurationChange = function(e) {
                        Object(C.c)(n.props.channelLogin, e), n.props.onFollowerModeDurationPreferenceChange(n.props.channelLogin, e), n.props.followerModeEnabled && (n.props.onChatCommand(Object(k.f)(e)), n.props.onFollowerModeDurationChange(e)), Object(y.c)({
                            channelLogin: n.props.channelLogin,
                            followerModeOn: n.props.followerModeEnabled,
                            isHostMode: n.props.isHostMode,
                            newValue: e
                        })
                    }, n.onModIconsToggle = function() {
                        Object(C.b)("showModIcons", !n.props.showModerationIcons), n.props.showModerationIcons ? n.props.onModIconsDisable() : n.props.onModIconsEnable(), Object(y.a)({
                            channelLogin: n.props.channelLogin,
                            isHostMode: n.props.isHostMode,
                            newValue: !n.props.showModerationIcons,
                            settingName: b.a.ShowModIcons
                        })
                    }, n.onShowModerationActionsToggle = function() {
                        Object(C.b)("showModerationActions", !n.props.showModerationActions), n.props.showModerationActions ? n.props.onShowModerationActionsDisable() : n.props.onShowModerationActionsEnable(), Object(y.a)({
                            channelLogin: n.props.channelLogin,
                            isHostMode: n.props.isHostMode,
                            newValue: !n.props.showModerationActions,
                            settingName: b.a.ShowModActions
                        })
                    }, n.onShowAutoModActionsToggle = function() {
                        Object(C.b)("showAutoModActions", !n.props.showAutoModActions), n.props.showAutoModActions ? n.props.onShowAutoModActionsDisable() : n.props.onShowAutoModActionsEnable(), Object(y.a)({
                            channelLogin: n.props.channelLogin,
                            isHostMode: n.props.isHostMode,
                            newValue: !n.props.showAutoModActions,
                            settingName: b.a.ShowAutoModActions
                        })
                    }, n.handleToggleAutoModLink = n.handleToggleAutoModLink.bind(n), n.handleToggleAutoModLink = n.handleToggleAutoModLink.bind(n), n
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    var e = this;
                    if (!this.props.isCurrentUserModerator) return null;
                    var t = this.getSelectedFollowerDuration(),
                        n = Y.b.map(function(n) {
                            return a.createElement(M._6, {
                                "data-duration": n,
                                key: n,
                                onClick: e.handleFollowerDurationClick,
                                selected: n === t
                            }, a.createElement(M._8, {
                                padding: .5
                            }, Object(Y.c)(n)))
                        });
                    return a.createElement(M._35, {
                        key: "mod-tools",
                        borderTop: !0,
                        "data-test-selector": "mod-tools",
                        margin: {
                            top: 2
                        },
                        padding: {
                            top: 2
                        }
                    }, a.createElement(M._8, {
                        margin: {
                            bottom: 2
                        }
                    }, a.createElement(M.Q, {
                        color: M.K.Alt2,
                        transform: M._48.Uppercase
                    }, Object(_.d)("Mod Tools", "ChatSettings"))), a.createElement(M._8, {
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(M.J, {
                        checked: this.props.showModerationIcons,
                        "data-a-target": "mod-icons-checkbox",
                        "data-test-selector": "mod-icons-checkbox",
                        id: "chat-settings-mod-icons",
                        label: Object(_.d)("Mod Icons", "ChatSettings"),
                        onChange: this.onModIconsToggle
                    })), a.createElement(M._35, {
                        margin: {
                            bottom: 1
                        },
                        display: M.R.Flex,
                        justifyContent: M._7.Between,
                        flexWrap: M.U.Wrap
                    }, a.createElement(M.J, {
                        checked: this.props.followerModeEnabled,
                        "data-a-target": "follower-mode-checkbox",
                        "data-test-selector": "follower-mode-checkbox",
                        id: "chat-settings-followers-only",
                        label: Object(_.d)("Followers-Only Chat", "ChatSettings"),
                        onChange: this.onFollowerModeToggle
                    }), this.props.showRaidsTooltip ? a.createElement(x, {
                        text: Object(_.d)("Prevent offensive raiders from chatting.", "RaidReportingChat")
                    }) : null, a.createElement(M._8, {
                        alignItems: M.c.Center,
                        display: M.R.Flex,
                        flexWrap: M.U.NoWrap,
                        justifyContent: M._7.Between
                    }, a.createElement(M._8, {
                        margin: {
                            right: .5
                        }
                    }, a.createElement(M.Q, {
                        color: M.K.Alt2,
                        fontSize: M.V.Size7,
                        type: M._49.Span
                    }, Object(_.d)("Must have followed for", "ChatSettings"))), a.createElement(M._8, {
                        className: "chat-settings__mod-tools-follower-button",
                        flexShrink: 0
                    }, a.createElement(A.a, {
                        display: M.R.InlineBlock
                    }, a.createElement(M.v, {
                        size: M.z.Small,
                        type: M.B.Text,
                        "data-a-target": "follower-mode-dropdown",
                        "data-test-selector": "follower-mode-duration-menu",
                        dropdown: !0
                    }, Object(Y.d)(t)), a.createElement(M.q, {
                        direction: M.r.TopRight
                    }, a.createElement(M._8, {
                        padding: .5
                    }, a.createElement(M.Q, {
                        color: M.K.Alt2
                    }, Object(_.d)("Followers can chat if they have followed for at least", "ChatSettings"))), a.createElement(M._35, {
                        color: M.K.Link
                    }, n)))))), a.createElement(M._8, {
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(M.J, {
                        checked: this.props.slowModeEnabled,
                        "data-a-target": "slow-mode-checkbox",
                        "data-test-selector": "slow-mode-checkbox",
                        id: "chat-settings-slow-mode",
                        label: Object(_.d)("Slow Mode", "ChatSettings"),
                        onChange: this.onSlowModeToggle
                    })), a.createElement(M._8, {
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(M.J, {
                        checked: this.props.showModerationActions,
                        "data-a-target": "show-mod-actions-checkbox",
                        "data-test-selector": "show-mod-actions",
                        id: "chat-settings-show-mod-actions",
                        label: Object(_.d)("Show Moderation Actions", "ChatSettings"),
                        onChange: this.onShowModerationActionsToggle
                    })), a.createElement(M._8, {
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(M.J, {
                        checked: this.props.showAutoModActions,
                        "data-a-target": "show-automod-messages-checkbox",
                        "data-test-selector": "show-automod-messages",
                        id: "chat-settings-show-automod-messages",
                        label: Object(_.d)("Show Messages Caught by AutoMod", "ChatSettings"),
                        onChange: this.onShowAutoModActionsToggle
                    })), a.createElement($, {
                        key: "recent-raids",
                        recentRaids: this.props.recentRaids,
                        onClickRecentRaids: this.onClickRecentRaids,
                        onUsernameClick: this.props.onShowViewerCard,
                        targetChannelID: this.props.channelID,
                        tooltipText: this.props.showRaidsTooltip ? Object(_.d)("View recent raids with option to report or ban.", "RaidReportingChat") : ""
                    }), this.renderModerationSettingsLink(), a.createElement("button", {
                        onClick: this.onChatClear,
                        "data-a-target": "clear-chat-button",
                        "data-test-selector": "clear-chat-button"
                    }, Object(_.d)("Clear Chat", "ChatSettings")))
                }, t.prototype.handleModerationSettingsClick = function() {
                    _.l.set("autoModToolTipSeen", 5)
                }, t.prototype.showAutoModHotSpot = function() {
                    return _.l.get("autoModToolTipSeen", 0) < 5
                }, t.prototype.renderModerationSettingsLink = function() {
                    if (Object(J.a)()) {
                        var e = Object(_.d)("Manage Moderation Settings", "ChatSettings");
                        return this.showAutoModHotSpot() ? a.createElement(M._8, {
                            margin: {
                                top: 1,
                                bottom: 1
                            },
                            display: M.R.Flex,
                            justifyContent: M._7.Between,
                            alignItems: M.c.Center
                        }, a.createElement(M.O, {
                            to: "/" + this.props.channelLogin + "/dashboard/settings/automod",
                            "data-a-target": "automod-link-button",
                            "data-test-selector": "automod-link-button",
                            onClick: this.handleModerationSettingsClick
                        }, e), a.createElement("div", {
                            onMouseEnter: this.handleToggleAutoModLink,
                            onMouseLeave: this.handleToggleAutoModLink
                        }, a.createElement(M._8, {
                            alignItems: M.c.Center,
                            className: "chat-moderation-settings__highlight-indicator",
                            display: M.R.InlineFlex,
                            justifyContent: M._7.Center,
                            margin: {
                                left: .5
                            }
                        }, a.createElement(M.Q, {
                            color: M.K.Overlay,
                            fontSize: M.V.Size8,
                            type: M._49.Span
                        }, "i"), a.createElement(M._8, {
                            position: M._15.Relative
                        }, a.createElement(M.q, {
                            direction: M.r.TopRight,
                            show: this.state.autoModToolTipVisible,
                            offsetX: "-0.6rem",
                            offsetY: "1.5rem"
                        }, a.createElement(M._8, {
                            margin: 1
                        }, Object(_.d)("Mods can now update AutoMod levels as well as Blocked and Permitted Terms.", "ChatSettings"))))))) : a.createElement(M._35, {
                            margin: {
                                top: 1,
                                bottom: 1
                            },
                            display: M.R.Flex,
                            justifyContent: M._7.Between,
                            alignItems: M.c.Center,
                            color: M.K.Alt
                        }, a.createElement(M.O, {
                            to: "/" + this.props.channelLogin + "/dashboard/settings/automod",
                            "data-a-target": "automod-link-button",
                            "data-test-selector": "automod-link-button",
                            type: M.P.Inherit,
                            hoverUnderlineNone: !0
                        }, e))
                    }
                }, t.prototype.handleToggleAutoModLink = function() {
                    this.setState(function(e) {
                        return {
                            autoModToolTipVisible: !e.autoModToolTipVisible
                        }
                    })
                }, t
            }(a.Component));
        var X = Object(r.b)(function(e) {
                return {
                    followerModeDuration: e.chat.followerDuration,
                    followerModeEnabled: e.chat.followerMode,
                    lastUsedFollowerDurations: e.chat.lastUsedFollowerDurations,
                    showAutoModActions: e.chat.showAutoModActions,
                    showModerationActions: e.chat.showModerationActions,
                    showModerationIcons: e.chat.showModIcons,
                    slowModeEnabled: e.chat.slowMode
                }
            }, function(e) {
                return Object(s.b)({
                    onChatHide: function() {
                        return f.Q()
                    },
                    onChatUnhide: function() {
                        return f.T()
                    },
                    onFollowerModeDisable: function() {
                        return f.C()
                    },
                    onFollowerModeDurationChange: function(e) {
                        return f.z(e)
                    },
                    onFollowerModeDurationPreferenceChange: function(e, t) {
                        return f.A(e, t)
                    },
                    onFollowerModeEnable: function() {
                        return f.J()
                    },
                    onModIconsDisable: function() {
                        return f.D()
                    },
                    onModIconsEnable: function() {
                        return f.K()
                    },
                    onShowAutoModActionsEnable: function() {
                        return f.L()
                    },
                    onShowAutoModActionsDisable: function() {
                        return f.E()
                    },
                    onShowModerationActionsEnable: function() {
                        return f.M()
                    },
                    onShowModerationActionsDisable: function() {
                        return f.F()
                    },
                    onSlowModeDisable: function() {
                        return f.G()
                    },
                    onSlowModeEnable: function() {
                        return f.N()
                    },
                    onTimestampsDisable: function() {
                        return f.I()
                    },
                    onTimestampsEnable: function() {
                        return f.P()
                    },
                    onThemeChanged: function(e) {
                        return Object(p.b)(e, void 0, !1)
                    },
                    login: function() {
                        return Object(m.f)(u.a.Chat)
                    }
                }, e)
            })(Z),
            ee = n("SZoP"),
            te = n("3T7g"),
            ne = "edit-appearance-button",
            oe = "edit-display-name";

        function ae(e) {
            var t = a.createElement(M.Q, {
                    bold: !0,
                    type: M._49.Span
                }, a.createElement("span", {
                    style: {
                        color: e.chatColor
                    },
                    "data-a-target": oe
                }, Object(ee.a)(e.login, e.displayName))),
                n = null;
            return e.editAppearance || (n = a.createElement(M._8, {
                margin: {
                    top: 1
                }
            }, a.createElement(M.O, {
                hoverUnderlineNone: !0,
                onClick: e.onClickEdit,
                "data-a-target": ne,
                "data-test-selector": ne
            }, Object(_.d)("Edit Appearance", "ChatSettings")))), a.createElement(M._35, {
                background: M.n.Base,
                color: M.K.Base,
                display: M.R.InlineFlex,
                flexDirection: M.T.Column,
                fullWidth: !0
            }, a.createElement(M.Q, {
                color: M.K.Alt2,
                transform: M._48.Uppercase
            }, Object(_.d)("Name Display", "ChatSettings")), a.createElement(M._8, {
                margin: {
                    top: 2
                }
            }, e.userBadges && e.userBadges.map(function(e) {
                return a.createElement(te.a, {
                    key: e.id,
                    badge: e
                })
            }), t), n)
        }
        var re = n("pg5l"),
            ie = (n("Vaxm"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        recentRaids: !1,
                        chatColor: null,
                        raidsTooltipDismissed: !1,
                        autoModToolTipVisible: !1
                    }, t.resizeAnimationFrame = 0, t.dismissRaidsTooltip = function() {
                        t.setState({
                            raidsTooltipDismissed: !0
                        })
                    }, t.onClickEdit = function(e) {
                        e.nativeEvent.stopImmediatePropagation(), t.props.onClickEditAppearance()
                    }, t.onClickRecentRaids = function() {
                        t.setState({
                            recentRaids: !0
                        })
                    }, t.onClickBack = function(e) {
                        e.nativeEvent.stopImmediatePropagation(), t.props.onLeaveEditAppearance(), t.setState({
                            recentRaids: !1
                        })
                    }, t.onColorSelected = function(e) {
                        t.setState({
                            chatColor: e
                        }), t.props.onColorSelected(e)
                    }, t.onBadgesChanged = function() {
                        return o.__awaiter(t, void 0, void 0, function() {
                            var e, t, n;
                            return o.__generator(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        return !this.props.data || this.props.data.loading ? [3, 2] : [4, this.props.data.refetch()];
                                    case 1:
                                        if ((e = o.sent()).data) {
                                            if (!(t = e.data).user.self) return [2];
                                            n = {}, t.user.self.displayBadges.forEach(function(e) {
                                                n[e.setID] = e.version
                                            }), _.o.tmi.client.updateChannelBadges(this.props.channelLogin, n)
                                        }
                                        o.label = 2;
                                    case 2:
                                        return [2]
                                }
                            })
                        })
                    }, t.onResize = function() {
                        t.resizeAnimationFrame || (t.resizeAnimationFrame = requestAnimationFrame(t.setContainerHeight))
                    }, t.setContainerHeight = function() {
                        var e = t.props.containerElement && t.props.containerElement.clientHeight || 700;
                        t.setState({
                            containerHeight: e
                        }), t.resizeAnimationFrame = 0
                    }, t
                }
                return o.__extends(t, e), t.prototype.componentDidMount = function() {
                    window.addEventListener("resize", this.onResize, !0), this.setContainerHeight()
                }, t.prototype.componentWillUnmount = function() {
                    window.removeEventListener("resize", this.onResize, !0), this.resizeAnimationFrame && cancelAnimationFrame(this.resizeAnimationFrame)
                }, t.prototype.render = function() {
                    if (!this.props.data || this.props.data.loading) return null;
                    var e = null;
                    if (this.props.isLoggedIn && this.props.data.currentUser) {
                        var t = this.props.data.user.self ? this.props.data.user.self.displayBadges : [];
                        e = a.createElement(ae, {
                            key: "name-display",
                            login: this.props.data.currentUser.login,
                            displayName: this.props.data.currentUser.displayName,
                            chatColor: this.state.chatColor || this.props.data.currentUser.chatColor,
                            editAppearance: this.props.editAppearance,
                            userBadges: t,
                            onClickEdit: this.onClickEdit
                        })
                    }
                    var n = [];
                    return this.props.isLoggedIn ? this.props.editAppearance ? n = [a.createElement(M._2, {
                        margin: {
                            bottom: 2
                        },
                        key: "chat-settings-edit-inject",
                        className: "chat-settings__edit-button"
                    }, a.createElement(M.O, {
                        hoverUnderlineNone: !0,
                        key: "chat-settings-edit",
                        onClick: this.onClickBack,
                        "data-test-selector": "chat-settings-back-button"
                    }, a.createElement(M.Q, {
                        color: M.K.Link,
                        type: M._49.Span
                    }, a.createElement(M._24, {
                        asset: M._25.ChatSettingsBack,
                        height: 10,
                        width: 10
                    }), Object(_.d)("Back", "ChatSettingsAppearance")))), e, a.createElement(I, {
                        key: "edit-appearance",
                        onColorSelected: this.onColorSelected,
                        editAppearance: this.props.editAppearance,
                        authToken: this.props.authToken,
                        channelLogin: this.props.channelLogin,
                        userChatColor: this.state.chatColor || this.props.data.currentUser.chatColor,
                        userLogin: this.props.data.currentUser.login,
                        onBadgesChanged: this.onBadgesChanged
                    })] : this.state.recentRaids ? n = [a.createElement(M._2, {
                        key: "chat-settings-recent-raids"
                    }, a.createElement(M.O, {
                        hoverUnderlineNone: !0,
                        key: "chat-settings-edit",
                        onClick: this.onClickBack,
                        "data-test-selector": "chat-settings-back-button"
                    }, a.createElement(M.Q, {
                        color: M.K.Link,
                        type: M._49.Span
                    }, a.createElement(M._24, {
                        asset: M._25.ChatSettingsBack,
                        height: 10,
                        width: 10
                    }), Object(_.d)("Back", "ChatSettingsRecentRaids")), a.createElement(M._8, {
                        margin: {
                            top: 2
                        }
                    }, a.createElement(M.Q, {
                        key: "recent-raids-title",
                        color: M.K.Alt2,
                        transform: M._48.Uppercase
                    }, Object(_.d)("Recent Raids", "ChatSettings"))))), a.createElement($, {
                        key: "recent-raids",
                        targetChannelID: this.props.channelID,
                        recentRaids: this.state.recentRaids,
                        onClickRecentRaids: this.onClickRecentRaids,
                        onUsernameClick: this.props.onShowViewerCard
                    })] : (n = [e, this.renderUniversalOptions()], this.props.isCurrentUserModerator && !this.props.isEmbedded && n.push(a.createElement(X, {
                        key: "moderation-tools",
                        channelLogin: this.props.channelLogin,
                        channelID: this.props.channelID,
                        isCurrentUserModerator: this.props.isCurrentUserModerator,
                        isHostMode: this.props.isHostMode,
                        isLoggedIn: this.props.isLoggedIn,
                        onChatCommand: this.props.onChatCommand,
                        onClickRecentRaids: this.onClickRecentRaids,
                        onShowViewerCard: this.props.onShowViewerCard,
                        recentRaids: this.state.recentRaids,
                        showRaidsTooltip: this.showRaidsTooltip
                    }))) : n = [a.createElement(R, {
                        key: "color-chooser",
                        onColorSelected: this.props.onColorSelected
                    }), this.renderUniversalOptions()], a.createElement(S.b, {
                        className: "chat-settings",
                        suppressScrollX: !0,
                        style: {
                            maxHeight: this.state.containerHeight
                        }
                    }, a.createElement("div", {
                        onClick: this.dismissRaidsTooltip
                    }, a.createElement(M._35, {
                        key: "chat-settings",
                        className: "chat-settings__content",
                        background: M.n.Base,
                        color: M.K.Base,
                        padding: 2
                    }, n)))
                }, t.prototype.renderUniversalOptions = function() {
                    if (!this.props.data) return null;
                    var e = this.props.isPopout && a.createElement(M.J, {
                            checked: this.props.darkModeEnabled,
                            "data-a-target": "darkmode-checkbox",
                            "data-test-selector": "dark-mode-checkbox",
                            id: "chat-settings-dark-mode",
                            label: Object(_.d)("Dark Mode", "ChatSettings"),
                            onChange: this.props.onDarkModeToggle
                        }),
                        t = !this.props.isEmbedded && a.createElement("button", {
                            onClick: this.props.onChatPopout,
                            "data-a-target": "popout-chat-button",
                            "data-test-selector": "popout-button"
                        }, Object(_.d)("Popout", "ChatSettings")),
                        n = !this.props.isPopout && !this.props.isEmbedded && (window.BetterTTV || window.FrankerFaceZ) && a.createElement("button", {
                            onClick: this.props.onLegacyChatPopout,
                            "data-test-selector": "legacy-popout-button"
                        }, Object(_.d)("Legacy Popout", "ChatSettings")),
                        o = !this.props.isPopout && a.createElement("button", {
                            onClick: this.props.onChatHide,
                            "data-a-target": "hide-chat-button",
                            "data-test-selector": "hide-chat-button"
                        }, Object(_.d)("Hide Chat", "ChatSettings"));
                    return a.createElement(M._8, {
                        key: "chat-options"
                    }, a.createElement(M._35, {
                        borderTop: !0,
                        margin: {
                            top: 2
                        },
                        padding: {
                            y: 2
                        }
                    }, a.createElement(M.Q, {
                        color: M.K.Alt2,
                        transform: M._48.Uppercase
                    }, Object(_.d)("Chat Options", "ChatSettings"))), a.createElement(M._8, {
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(M.J, {
                        checked: this.props.showTimestamps,
                        "data-a-target": "timestamp-checkbox",
                        "data-test-selector": "timestamps-selector",
                        id: "chat-settings-timestamp",
                        label: Object(_.d)("Timestamps", "ChatSettings"),
                        onChange: this.props.onTimestampToggle
                    })), a.createElement(M._8, {
                        margin: {
                            bottom: 1
                        }
                    }, e), a.createElement(M._8, {
                        margin: {
                            bottom: 1
                        }
                    }, o), a.createElement(M._8, {
                        margin: {
                            bottom: 1
                        }
                    }, t), n && a.createElement(M._8, null, n))
                }, Object.defineProperty(t.prototype, "showRaidsTooltip", {
                    get: function() {
                        return this.props.sawFirstRaidPrompt && !this.state.raidsTooltipDismissed
                    },
                    enumerable: !0,
                    configurable: !0
                }), t = o.__decorate([Object(E.a)(re, {
                    options: function(e) {
                        return {
                            variables: {
                                channelLogin: e.channelLogin
                            }
                        }
                    }
                })], t)
            }(a.Component)),
            se = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        editAppearance: !1
                    }, t.handleSettingsToggle = function(e) {
                        t.props.onToggle && t.props.onToggle(e), t.state.editAppearance && t.setState({
                            editAppearance: !1
                        })
                    }, t.onEdit = function() {
                        t.setState({
                            editAppearance: !0
                        })
                    }, t.onLeaveEdit = function() {
                        t.setState({
                            editAppearance: !1
                        })
                    }, t.onDarkModeToggle = function() {
                        var e = t.props.darkModeEnabled ? c.a.Light : c.a.Dark;
                        t.props.onThemeChanged(e, !t.props.isPopout), Object(y.a)({
                            channelLogin: t.props.channelLogin,
                            isHostMode: t.props.isHostMode,
                            newValue: !t.props.darkModeEnabled,
                            settingName: b.a.DarkMode
                        })
                    }, t.onTimestampToggle = function() {
                        Object(C.b)("showTimestamps", !t.props.showTimestamps), t.props.showTimestamps ? t.props.onTimestampsDisable() : t.props.onTimestampsEnable(), Object(y.a)({
                            channelLogin: t.props.channelLogin,
                            isHostMode: t.props.isHostMode,
                            newValue: !t.props.showTimestamps,
                            settingName: b.a.ShowTimestamps
                        })
                    }, t.onChatHide = function() {
                        t.props.onChatHide(), Object(y.a)({
                            channelLogin: t.props.channelLogin,
                            isHostMode: t.props.isHostMode,
                            newValue: !0,
                            settingName: b.a.HideChat
                        })
                    }, t.onChatPopout = function() {
                        t.props.isPopout || t.props.onChatHide();
                        var e = window.open("/popout/" + t.props.channelLogin + "/chat?popout=", "_blank", "right=50,top=50,width=400,height=600,resizable=yes,scrollbars=no,toolbar=no,location=no,directories=no,status=no,menubar=no,copyhistory=no");
                        e && !Object(l.a)() && (e.focus(), Object(d.a)(e, function() {
                            t.props.onChatUnhide()
                        }))
                    }, t.onLegacyChatPopout = function() {
                        t.props.onChatHide();
                        var e = window.open("https://www.twitch.tv/" + t.props.channelLogin + "/chat?popout=", "_blank", "right=50,top=50,width=400,height=600,resizable=yes,scrollbars=no,toolbar=no,location=no,directories=no,status=no,menubar=no,copyhistory=no");
                        e && !Object(l.a)() && (e.focus(), Object(d.a)(e, function() {
                            t.props.onChatUnhide()
                        }))
                    }, t.onColorSelected = function(e) {
                        t.props.isLoggedIn ? t.props.onChatCommand(Object(k.b)(e)) : t.props.login()
                    }, t
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(de, {
                        onToggle: this.handleSettingsToggle
                    }, a.createElement(ie, {
                        authToken: this.props.authToken,
                        darkModeEnabled: this.props.darkModeEnabled,
                        editAppearance: this.state.editAppearance,
                        isCurrentUserModerator: this.props.isCurrentUserModerator,
                        isHostMode: this.props.isHostMode,
                        isPopout: this.props.isPopout,
                        isEmbedded: this.props.isEmbedded,
                        onChatCommand: this.props.onChatCommand,
                        onChatHide: this.onChatHide,
                        onChatPopout: this.onChatPopout,
                        onDarkModeToggle: this.onDarkModeToggle,
                        onLegacyChatPopout: this.onLegacyChatPopout,
                        onTimestampToggle: this.onTimestampToggle,
                        showTimestamps: this.props.showTimestamps,
                        theatreModeEnabled: this.props.theatreModeEnabled,
                        onColorSelected: this.onColorSelected,
                        channelLogin: this.props.channelLogin,
                        channelID: this.props.channelID,
                        isLoggedIn: this.props.isLoggedIn,
                        onClickEditAppearance: this.onEdit,
                        onLeaveEditAppearance: this.onLeaveEdit,
                        sawFirstRaidPrompt: this.props.sawFirstRaidPrompt,
                        onShowViewerCard: this.props.onShowViewerCard,
                        containerElement: this.props.containerElement
                    }))
                }, t
            }(a.Component);
        var ce = Object(r.b)(function(e) {
                return {
                    isLoggedIn: Object(h.d)(e),
                    darkModeEnabled: Object(g.a)(e) === c.a.Dark,
                    showTimestamps: e.chat.showTimestamps,
                    theatreModeEnabled: e.ui.theatreModeEnabled
                }
            }, function(e) {
                return Object(s.b)({
                    login: function() {
                        return Object(m.f)(u.a.Chat)
                    },
                    onChatHide: function() {
                        return f.Q()
                    },
                    onChatUnhide: function() {
                        return f.T()
                    },
                    onThemeChanged: function(e) {
                        return Object(p.b)(e, void 0, !1)
                    },
                    onTimestampsDisable: function() {
                        return f.I()
                    },
                    onTimestampsEnable: function() {
                        return f.P()
                    },
                    onShowViewerCard: v.d
                }, e)
            })(se),
            le = Object(i.f)(ce),
            de = function(e) {
                return a.createElement(A.a, {
                    onToggle: e.onToggle
                }, a.createElement(M.w, {
                    icon: M._25.Gear,
                    ariaLabel: Object(_.d)("Chat settings", "ChatInput"),
                    "data-a-target": "chat-settings",
                    disabled: !!e.disabled
                }), a.createElement(M.q, {
                    direction: M.r.Top,
                    noTail: !0,
                    offsetY: "11px",
                    "data-a-target": "chat-settings-balloon"
                }, e.children))
            };
        n.d(t, "a", function() {
            return le
        }), n.d(t, "b", function() {
            return de
        })
    },
    MSFW: function(e, t) {},
    NRl2: function(e, t) {},
    Nay6: function(e, t, n) {
        "use strict";
        var o = n("HW6M"),
            a = n("GiK3"),
            r = (n("7vYp"), function(e) {
                var t, n = [a.createElement("span", {
                    key: "username-display",
                    className: "chat-author__display-name",
                    "data-a-target": "chat-message-username",
                    "data-a-user": e.userData.userLogin,
                    "data-test-selector": "message-username",
                    style: {
                        color: e.userData.color
                    }
                }, e.userData.userDisplayName)];
                if (e.userData.isIntl) {
                    var r = o(((t = {})["chat-author__intl-login"] = !e.highlighted, t["chat-author__intl-login--highlighted"] = e.highlighted, t));
                    n.push(a.createElement("span", {
                        key: "username-login",
                        style: {
                            color: e.userData.color
                        },
                        className: r,
                        "data-test-selector": "message-username-canonical"
                    }, " (" + e.userData.userLogin + ")"))
                }
                return a.createElement("span", {
                    key: e.userData.userID + "-authorlabel"
                }, n)
            });
        n.d(t, !1, function() {
            return "message-username"
        }), n.d(t, !1, function() {
            return "message-username-canonical"
        }), n.d(t, !1, function() {
            return "chat-author__display-name"
        }), n.d(t, !1, function() {
            return "chat-author__intl-login"
        }), n.d(t, !1, function() {
            return "chat-author__intl-login--highlighted"
        }), n.d(t, "a", function() {
            return r
        })
    },
    O0Qc: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
        }), t.h = function(e) {
            return "/ignore " + e
        }, t.j = function(e) {
            return "/unignore " + e
        }, t.i = function(e) {
            return "/mod " + e
        }, t.k = function(e) {
            return "/unmod " + e
        }, t.m = function(e) {
            return /^[\/]/.test(e)
        }, t.c = function() {
            return "/clear"
        }, t.d = function() {
            return "/followersoff"
        }, t.e = function() {
            return "/slowoff"
        }, t.f = function(e) {
            return "/followers " + e
        }, t.g = function() {
            return "/slow"
        }, t.b = function(e) {
            return "/color " + e
        }, t.q = function(e) {
            var t = e.trim().match(i);
            if (!t) return null;
            return {
                recipientLogin: t[1] || null,
                body: t[2] || null
            }
        }, t.r = function(e) {
            var t = e.trim().match(s);
            if (!t) return {
                recipientLogin: null,
                body: null
            };
            return {
                recipientLogin: t[1] || null,
                body: t[2] || null
            }
        }, t.n = function(e) {
            var t = e.trim().match(c);
            if (!t) return null;
            return {
                bannedUserLogin: t[1],
                duration: t[2] && Number(t[2]) || null
            }
        }, t.p = function(e) {
            var t = e.trim().match(l);
            if (!t) return null;
            return {
                duration: t[1] && Number(t[1]) || null
            }
        }, t.o = function(e) {
            var t = e.trim().match(u);
            if (!t) return null;
            var n = t[1];
            if (!n.startsWith("#") && -1 === d.indexOf(n.toLowerCase())) return null;
            return {
                color: n
            }
        }, t.l = function(e, t) {
            var n = e.match(m);
            if (!n) return {
                handled: !1
            };
            var r = n[1],
                i = o.o.store.getState().chat.commandHandlers[n[1].toLowerCase()];
            if (!i) return {
                command: r,
                handled: !1
            };
            var s = (n[2] || "").trim(),
                c = {
                    channelLogin: t
                };
            try {
                return {
                    command: r,
                    handled: !0,
                    result: i(s, c)
                }
            } catch (e) {
                return a.warn("Exception thrown from chat command handler", {
                    command: n[1],
                    err: e
                }), {
                    handled: !1
                }
            }
        };
        var o = n("6sO2"),
            a = o.o.logger.withCategory("chat-commands"),
            r = "/unraid";
        var i = /^\/w(?:$|\s+)(\S+)?\s*(.+)?/i;
        var s = /^(\S+)?\s+(.+)?$/;
        var c = /^\/ban\s+(\S+)(?:\s+(\d+)?)?$/;
        var l = /^\/slow(?:\s+(\d+)?)?$/;
        var d = ["blue", "blueviolet", "cadetblue", "chocolate", "coral", "dodgerblue", "firebrick", "goldenrod", "green", "hotpink", "orangered", "red", "seagreen", "springgreen", "yellowgreen"],
            u = /^\/color\s+(#[A-Fa-f0-9]{6}|[A-Za-z]+)$/;
        var m = /^[/.]([a-z0-9]+)(.+)?$/i
    },
    O9wU: function(e, t, n) {
        "use strict";
        var o;
        n.d(t, "a", function() {
                return o
            }),
            function(e) {
                e[e.recent_raids = 0] = "recent_raids", e[e.chat_message = 1] = "chat_message", e[e.room_message = 2] = "room_message", e[e.viewer_list = 3] = "viewer_list", e[e.member_list = 4] = "member_list", e[e.test = 5] = "test"
            }(o || (o = {}))
    },
    OFAp: function(e, t) {},
    OvUa: function(e, t) {},
    PNnM: function(e, t) {},
    PeVI: function(e, t) {},
    QFW6: function(e, t, n) {
        "use strict";
        var o, a = n("TToO"),
            r = n("6sO2"),
            i = n("vH/s");
        ! function(e) {
            e.Everyone = "everyone", e.ModsOnly = "mod", e.StreamChat = "twitch_chat", e.SubsOnly = "sub"
        }(o || (o = {}));
        var s = n("gGMi");
        n.d(t, "a", function() {
            return c
        }), n.d(t, "b", function() {
            return l
        }), n.d(t, "c", function() {
            return d
        });
        var c = function(e) {
                var t;
                switch (e.roomMinimumRole) {
                    case s.b.Everyone:
                        t = o.Everyone;
                        break;
                    case s.b.Moderator:
                        t = o.ModsOnly;
                        break;
                    case s.b.Subscriber:
                        t = o.SubsOnly;
                        break;
                    default:
                        t = o.StreamChat
                }
                var n = {
                    channel: e.channelLogin,
                    chatroom_type: t,
                    is_host_mode: e.isHostMode,
                    is_using_web_sockets: !0
                };
                return e.roomID && (n.chatroom_id = e.roomID), n
            },
            l = function(e) {
                r.n.track(i.SpadeEventType.ChatRoomJoined, c(e))
            },
            d = function(e) {
                r.n.track(i.SpadeEventType.ChatRoomWatched, a.__assign({}, c(e), {
                    channel_id: e.channelID,
                    client_time: Math.floor(e.clientTime / 1e3)
                }))
            }
    },
    "QU+n": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "badge"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "Badge"
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
            }],
            loc: {
                start: 0,
                end: 170
            }
        };
        n.loc.source = {
            body: "fragment badge on Badge {\nid\nsetID\nversion\ntitle\nimage1x: imageURL(size: NORMAL)\nimage2x: imageURL(size: DOUBLE)\nimage4x: imageURL(size: QUADRUPLE)\nclickAction\nclickURL\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    R9op: function(e, t, n) {
        "use strict";
        t.a = function(e, t) {
            if (e.chat && e.chat.messages) return e.chat.messages[t] || [];
            return []
        }, t.c = function(e) {
            return e.chat.renderSent
        }, t.b = function(e) {
            var t = [];
            if (e.chat && e.chat.commandHandlers)
                for (var n in e.chat.commandHandlers) e.chat.commandHandlers[n] && t.push(n);
            return t.sort()
        };
        var o = n("TToO"),
            a = n("LIeg"),
            r = (n.n(a), n("6sO2")),
            i = n("vh75"),
            s = n("UzRK"),
            c = n("VsL1");
        r.o.store.registerReducer("chat", function(e, t) {
            var n, r;
            switch (void 0 === e && (n = Object(c.a)(), e = o.__assign({}, n, {
                commandHandlers: {},
                emoteSets: [],
                followerDuration: s.a,
                followerMode: !1,
                isHidden: !1,
                messages: {},
                slowMode: !1,
                subsOnlyMode: !1,
                renderSent: null
            })), t.type) {
                case i.d:
                    return o.__assign({}, e, {
                        isHidden: !0
                    });
                case i.e:
                    return o.__assign({}, e, {
                        emoteSets: [],
                        messages: {}
                    });
                case i.f:
                    return o.__assign({}, e, {
                        isHidden: !1
                    });
                case i.g:
                    return o.__assign({}, e, {
                        emoteSets: t.emoteSets
                    });
                case i.h:
                    return o.__assign({}, e, {
                        followerMode: !1
                    });
                case i.i:
                    return o.__assign({}, e, {
                        followerDuration: t.duration
                    });
                case i.j:
                    return o.__assign({}, e, {
                        lastUsedFollowerDurations: o.__assign({}, e.lastUsedFollowerDurations, (r = {}, r[t.channelLogin] = t.duration, r))
                    });
                case i.k:
                    return o.__assign({}, e, {
                        followerMode: !0
                    });
                case i.l:
                    return a(e, function(e) {
                        return e.messages
                    }, function(e) {
                        return e[t.channel] = t.messages.slice(), e
                    });
                case i.b:
                    return o.__assign({}, e, {
                        showAutoModActions: !1
                    });
                case i.c:
                    return o.__assign({}, e, {
                        showAutoModActions: !0
                    });
                case i.m:
                    return o.__assign({}, e, {
                        showModerationActions: !1
                    });
                case i.n:
                    return o.__assign({}, e, {
                        showModerationActions: !0
                    });
                case i.o:
                    return o.__assign({}, e, {
                        showModIcons: !1
                    });
                case i.p:
                    return o.__assign({}, e, {
                        showModIcons: !0
                    });
                case i.s:
                    return o.__assign({}, e, {
                        slowMode: !1
                    });
                case i.t:
                    return o.__assign({}, e, {
                        slowMode: !0
                    });
                case i.u:
                    return o.__assign({}, e, {
                        subsOnlyMode: !1
                    });
                case i.v:
                    return o.__assign({}, e, {
                        subsOnlyMode: !0
                    });
                case i.w:
                    return o.__assign({}, e, {
                        showTimestamps: !1
                    });
                case i.x:
                    return o.__assign({}, e, {
                        showTimestamps: !0
                    });
                case i.a:
                    return a(e, function(e) {
                        return e.commandHandlers
                    }, function(e) {
                        return e[t.command] = t.handler, e
                    });
                case i.q:
                    return a(e, function(e) {
                        return e.commandHandlers
                    }, function(e) {
                        return delete e[t.command], e
                    });
                case i.r:
                    return o.__assign({}, e, {
                        renderSent: t.customEvent
                    });
                default:
                    return e
            }
        })
    },
    RbGx: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
        });
        var o = n("GiK3"),
            a = (n.n(o), n("mbxv")),
            r = function(e) {
                var t, n = e.badgesToRender,
                    r = e.badgeSets,
                    i = [];
                t = n, Array.isArray(t) ? i = n.map(function(e) {
                    var t = r.getBadge(e.setID, e.version);
                    return null === t ? null : o.createElement(a.a, {
                        key: t.setID + "/" + t.version,
                        badge: t
                    })
                }) : function(e) {
                    return !Array.isArray(e)
                }(n) && (i = Object.keys(n).map(function(e) {
                    var t = n[e],
                        i = r.getBadge(e, t);
                    return null === i ? null : o.createElement(a.a, {
                        key: i.setID + "/" + i.version,
                        badge: i
                    })
                }));
                var s = i.filter(function(e) {
                    return null !== e
                });
                return o.createElement("span", null, s)
            }
    },
    ThJL: function(e, t) {},
    TnJK: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return o
        });
        var o = {
            DarkMode: "darkMode",
            FollowerDuration: "followerDuration",
            FollowerMode: "followerMode",
            HideChat: "hideChat",
            ShowMessageFlags: "showMessageFlags",
            ShowAutoModActions: "showAutoModActions",
            ShowModActions: "showModerationActions",
            ShowModIcons: "showModIcons",
            ShowTimestamps: "showTimestamps",
            SlowMode: "slowMode"
        }
    },
    Umoc: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return c
        }), n.d(t, "a", function() {
            return l
        }), n.d(t, "c", function() {
            return d
        });
        var o = n("TToO"),
            a = n("6sO2"),
            r = n("vH/s"),
            i = n("TnJK"),
            s = n("QFW6"),
            c = function(e) {
                a.n.track(r.SpadeEventType.ChatSettingsOpened, Object(s.a)(e))
            },
            l = function(e) {
                var t = o.__assign({}, Object(s.a)(e), {
                    setting_name: e.settingName,
                    new_value: e.newValue.toString()
                });
                a.n.track(r.SpadeEventType.ChatSettingsChanged, t)
            },
            d = function(e) {
                var t = o.__assign({}, Object(s.a)(e), {
                    setting_name: i.a.FollowerDuration,
                    new_value: e.newValue.toString(),
                    follower_mode_on: e.followerModeOn
                });
                a.n.track(r.SpadeEventType.ChatSettingsChanged, t)
            }
    },
    UzRK: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        }), n.d(t, "b", function() {
            return r
        }), t.c = function(e) {
            switch (e) {
                case 0:
                    return Object(o.d)("0 minutes (Any followers)", "FollowersOnlyLabel");
                case 10:
                    return Object(o.d)("10 minutes (Most used)", "FollowersOnlyLabel");
                case 30:
                    return Object(o.d)("30 minutes", "FollowersOnlyLabel");
                case 60:
                    return Object(o.d)("1 hour", "FollowersOnlyLabel");
                case 1440:
                    return Object(o.d)("1 day", "FollowersOnlyLabel");
                case 10080:
                    return Object(o.d)("1 week", "FollowersOnlyLabel");
                case 43200:
                    return Object(o.d)("1 month", "FollowersOnlyLabel");
                case 129600:
                    return Object(o.d)("3 months", "FollowersOnlyLabel");
                default:
                    return o.j.warn("[FollowersOnlyLabel] Tried to generate a label for a non-preset.", e), ""
            }
        }, t.d = function(e) {
            switch (e) {
                case 0:
                    return Object(o.d)("0 min", "FollowersOnlyShorthand");
                case 10:
                    return Object(o.d)("10 min", "FollowersOnlyShorthand");
                case 30:
                    return Object(o.d)("30 min", "FollowersOnlyShorthand");
                case 60:
                    return Object(o.d)("1 hr", "FollowersOnlyShorthand");
                case 1440:
                    return Object(o.d)("1 day", "FollowersOnlyShorthand");
                case 10080:
                    return Object(o.d)("1 wk", "FollowersOnlyShorthand");
                case 43200:
                    return Object(o.d)("1 mo", "FollowersOnlyShorthand");
                case 129600:
                    return Object(o.d)("3 mo", "FollowersOnlyShorthand");
                default:
                    return Object(o.d)("custom", "FollowersOnlyShorthand")
            }
        };
        var o = n("6sO2"),
            a = 30,
            r = [0, 10, 30, 60, 1440, 10080, 43200, 129600]
    },
    Vaxm: function(e, t) {},
    VsL1: function(e, t, n) {
        "use strict";
        var o = n("TToO"),
            a = n("6sO2"),
            r = "control";
        t.a = s, t.b = function(e, t) {
            var n = s();
            n[e] = t, a.l.set(i, n)
        }, t.c = function(e, t) {
            var n = s();
            n.lastUsedFollowerDurations[e] = t, a.l.set(i, n)
        };
        var i = "chatSettings";

        function s() {
            var e = a.l.get(i, {});
            return o.__assign({
                lastUsedFollowerDurations: {},
                showAutoModActions: !0,
                showMessageFlags: !0,
                showModerationActions: !0,
                showModIcons: !1,
                showTimestamps: !1,
                zachModeStatus: r
            }, e)
        }
    },
    WNf4: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "VideoChatChannelAndVideoTrackingContext"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "videoCreatorID"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "ID"
                        }
                    }
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "videoID"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "ID"
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
                                value: "id"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "videoCreatorID"
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
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 186
            }
        };
        n.loc.source = {
            body: "query VideoChatChannelAndVideoTrackingContext($videoCreatorID: ID $videoID: ID) {\nvideo(id: $videoID) {\nid\nbroadcastType\ntitle\ngame {\nid\nname\n}\n}\nuser(id: $videoCreatorID) {\nid\nlogin\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    WULK: function(e, t) {},
    Y8Ax: function(e, t) {},
    YiHX: function(e, t) {},
    ass3: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return o
        }), n.d(t, "b", function() {
            return a
        }), t.c = function() {
            return {
                type: o
            }
        }, t.d = function(e, t, n, o) {
            void 0 === o && (o = 0);
            return {
                type: a,
                viewerCardOptions: {
                    initialTopOffset: o,
                    sourceID: n,
                    sourceType: t,
                    targetLogin: e
                }
            }
        };
        var o = "viewer-card.VIEWER_CARD_HIDDEN",
            a = "viewer-card.VIEWER_CARD_SHOWN"
    },
    cAee: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return o
        }), t.c = function e(t, n, o) {
            return a.__awaiter(this, void 0, void 0, function() {
                var c, d, u, m;
                return a.__generator(this, function(a) {
                    switch (a.label) {
                        case 0:
                            return a.trys.push([0, 2, , 3]), [4, o.query({
                                query: l,
                                variables: {
                                    videoID: t.id
                                }
                            })];
                        case 1:
                            return c = a.sent().data, d = function(e, t) {
                                return {
                                    id: e.id,
                                    owner: t.owner,
                                    broadcastType: t.broadcastType,
                                    game: t.game
                                }
                            }(t, c.video), u = {
                                channel: d.owner ? d.owner.login : null,
                                channel_id: Number(t.owner.id),
                                game: d.game ? d.game.name : null,
                                partner: !!d.owner && d.owner.roles.isPartner,
                                location: n.location,
                                share_context: n.collectionID ? i.ShareItemContext.Collection : null,
                                share_platform: n.platform,
                                shared_item_id: n.collectionID ? n.collectionID : d.id,
                                shared_item_type: n.collectionID ? i.ShareItemType.Collection : Object(s.a)(d.broadcastType),
                                shared_item_url: n.shareURL,
                                source_item_id: d.id,
                                source_item_type: Object(s.a)(d.broadcastType)
                            }, r.o.tracking.track(i.SpadeEventType.ShareItem, u), [3, 3];
                        case 2:
                            return m = a.sent(), r.j.error(m.toString(), e.name), [3, 3];
                        case 3:
                            return [2]
                    }
                })
            })
        }, t.b = function e(t, n, o) {
            return a.__awaiter(this, void 0, void 0, function() {
                var s, l, d;
                return a.__generator(this, function(a) {
                    switch (a.label) {
                        case 0:
                            return a.trys.push([0, 2, , 3]), [4, o.query({
                                query: c,
                                variables: {
                                    creatorID: t.owner.id
                                }
                            })];
                        case 1:
                            return s = a.sent().data, l = {
                                channel: s.user ? s.user.login : null,
                                channel_id: Number(t.owner.id),
                                game: null,
                                partner: !!s.user && s.user.roles.isPartner,
                                location: n.location,
                                share_context: null,
                                share_platform: n.platform,
                                shared_item_id: t.id,
                                shared_item_type: i.ShareItemType.Collection,
                                shared_item_url: n.shareURL,
                                source_item_id: t.id,
                                source_item_type: i.SourceItemType.Collection
                            }, r.o.tracking.track(i.SpadeEventType.ShareItem, l), [3, 3];
                        case 2:
                            return d = a.sent(), r.j.error(d.toString(), e.name), [3, 3];
                        case 3:
                            return [2]
                    }
                })
            })
        };
        var o, a = n("TToO"),
            r = n("6sO2"),
            i = n("vH/s"),
            s = n("xrVp"),
            c = n("mvQ0"),
            l = (n.n(c), n("164Z"));
        n.n(l);
        ! function(e) {
            e.Copy = "link", e.Embed = "option_embed", e.Facebook = "fb", e.Link = "option_link", e.Reddit = "reddit", e.Twitter = "twitter", e.Unknown = "", e.VKontakte = "vk"
        }(o || (o = {}))
    },
    cPfx: function(e, t) {},
    g7wA: function(e, t, n) {
        "use strict";
        t.e = function(e, t, n) {
            var a = null,
                i = e.reduce(function(i, s, u) {
                    switch (s.type) {
                        case m.a.Text:
                            var g = u > 0;
                            return i.concat(function(e, t, n, a, r) {
                                var i = [],
                                    s = "";
                                a && (s = s.concat(" "));
                                var c = e.content.split(/\s+/);
                                return c.forEach(function(e, a) {
                                    if ("" !== e) {
                                        var r = a < c.length - 1 ? e + " " : e;
                                        (t || n) && function(e, t, n) {
                                            var o = e.trim().toLowerCase();
                                            return t && o === t.toLowerCase() || n && o === n.toLowerCase()
                                        }(e, t, n) ? (i = (i = i.concat(s)).concat(o.createElement(p._8, {
                                            className: "chat-line__message--mention-recipient",
                                            display: p.R.InlineFlex,
                                            key: "" + e + a,
                                            "data-a-target": "chat-message-mention"
                                        }, r)), s = "") : s = s.concat(r)
                                    }
                                }), i = i.concat(s), o.createElement("span", {
                                    key: "chat-line__message-text-" + r,
                                    "data-a-target": "chat-message-text"
                                }, i)
                            }(s, t, n, g, u));
                        case m.a.Mention:
                            var f = "";
                            return function(e) {
                                return e.content && e.content.sender
                            }(s) && t && s.content.sender.toLowerCase() === t.toLowerCase() ? f = "chat-line__message--mention-sender" : function(e) {
                                return e.content && e.content.recipient
                            }(s) && t && s.content.recipient.toLowerCase() === t.toLowerCase() && (f = "chat-line__message--mention-recipient"), i.concat(o.createElement(p._8, {
                                className: f,
                                display: p.R.InlineFlex,
                                key: u,
                                "data-a-target": "chat-message-mention"
                            }, "@" + s.content.recipient));
                        case m.a.Link:
                            return i = i.concat(h(u, s)), e.length > u + 1 && e[u + 1].type === m.a.Link && i.push(" "), i;
                        case m.a.Emote:
                            return i = i.concat(o.createElement(c.a, {
                                key: u,
                                emote: s.content
                            })), e.length > u + 1 && e[u + 1].type === m.a.Emote && i.push(" "), i;
                        case m.a.ClipLink:
                            return a ? i.concat(h(u, s)) : (a = o.createElement(r.a, {
                                key: u
                            }, o.createElement(l.a, {
                                slug: s.content.slug
                            })), i);
                        case m.a.VideoLink:
                            return a ? i.concat(h(u, s)) : (a = o.createElement(d.a, {
                                key: u,
                                id: s.content.id,
                                url: s.content.url
                            }), i);
                        default:
                            return i.concat(o.createElement("span", {
                                key: u
                            }))
                    }
                }, []);
            a && (i = i.concat(a));
            return i
        }, t.f = function(e) {
            if (e.moderationType === u.e.Ban) return e.reason ? o.createElement("span", {
                className: "chat-line__moderation--ban-with-reason"
            }, Object(a.d)("{userLogin} has been banned. Reason: {reason}", {
                userLogin: e.userLogin,
                reason: e.reason
            }, "ChatLine")) : o.createElement("span", {
                className: "chat-line__moderation--ban"
            }, Object(a.d)("{userLogin} is now banned from this channel.", {
                userLogin: e.userLogin
            }, "ChatLine"));
            if (e.reason && e.duration) {
                var t = Object(a.d)("{userLogin} has been timed out for {duration} seconds. Reason: {reason}", {
                    duration: e.duration,
                    reason: e.reason,
                    userLogin: e.userLogin
                }, "ChatLine");
                return o.createElement("span", {
                    className: "chat-line__moderation--timeout-with-reason"
                }, t)
            }
            if (e.duration) return o.createElement("span", {
                className: "chat-line__moderation--timeout"
            }, Object(a.d)("{userLogin} has been timed out for {duration} seconds.", {
                userLogin: e.userLogin,
                duration: e.duration
            }, "ChatLine"))
        }, t.b = function(e) {
            var t = e.daysLeft;
            0 === t && (t = e.hoursLeft);
            var n = {
                bitsTotal: o.createElement("strong", null, Object(s.e)(e.total, {
                    style: "currency",
                    currency: "USD"
                })),
                charityName: o.createElement("strong", null, e.charityName),
                learnMoreURL: o.createElement("a", {
                    href: e.learnMore,
                    target: "_blank"
                }, e.learnMore),
                hashtag: o.createElement("strong", null, e.hashtag),
                timeRemaining: Object(s.e)(t)
            };
            return o.createElement("span", null, 0 === e.daysLeft ? (r = n, Object(a.d)("{bitsTotal} total raised so far for {charityName}! {timeRemaining} more hours to show support. Cheer and include {hashtag}. Learn More at {learnMoreURL}", {
                bitsTotal: r.bitsTotal,
                charityName: r.charityName,
                timeRemaining: r.timeRemaining,
                hashtag: r.hashtag,
                learnMoreURL: r.learnMoreURL
            }, "ChatLine")) : function(e) {
                return Object(a.d)("{bitsTotal} total raised so far for {charityName}! {timeRemaining} more days to show support. Cheer and include {hashtag}. Learn More at {learnMoreURL}", {
                    bitsTotal: e.bitsTotal,
                    charityName: e.charityName,
                    timeRemaining: e.timeRemaining,
                    hashtag: e.hashtag,
                    learnMoreURL: e.learnMoreURL
                }, "ChatLine")
            }(n));
            var r
        }, t.h = function(e) {
            var t = e.enabled ? Object(a.d)("This room is now in slow mode. You may send messages every {length} seconds.", {
                length: e.length
            }, "ChatLine") : Object(a.d)("This room is no longer in slow mode.", "ChatLine");
            return o.createElement("span", null, t)
        }, t.g = function(e) {
            var t;
            if (e.length > 0) {
                var n = e.join(", ");
                t = Object(a.d)("The moderators of this channel are: {moderatorList}", {
                    moderatorList: n
                }, "ChatLine")
            } else t = Object(a.d)("There are no moderators of this channel.", "ChatLine");
            return o.createElement("span", null, t)
        }, t.d = function(e) {
            if (e.enabled) {
                var t = 0 === e.length ? Object(a.d)("This room is in followers-only mode.", "ChatLine") : Object(a.d)("This room is now in {length} followers-only mode.", {
                    length: Object(i.b)(60 * e.length)
                }, "ChatLine");
                return o.createElement("span", null, t)
            }
            return o.createElement("span", null, Object(a.d)("This room is no longer in followers-only mode.", "ChatLine"))
        }, t.c = function(e) {
            return e.enabled ? o.createElement("span", null, Object(a.d)("This room is now in emote-only mode.", "ChatLine")) : o.createElement("span", null, Object(a.d)("This room is no longer in emote-only mode.", "ChatLine"))
        }, t.i = function(e) {
            var t = e.enabled ? Object(a.d)("This room is now in subscriber-only mode.", "ChatLine") : Object(a.d)("This room is no longer in subscriber-only mode.", "ChatLine");
            return o.createElement("span", null, t)
        }, t.a = g, t.j = function(e) {
            return o.createElement("span", {
                key: "timestamp",
                className: "chat-line__timestamp",
                "data-a-target": "chat-timestamp",
                "data-test-selector": "chat-timestamp"
            }, g(new Date(e)))
        }, t.k = function(e) {
            return o.createElement("span", {
                key: "timestamp",
                className: "chat-line__timestamp",
                "data-a-target": "chat-timestamp",
                "data-test-selector": "chat-timestamp"
            }, function(e, t) {
                void 0 === t && (t = {});
                var n = a.o.intl.getLanguageCode() || "en";
                return Intl.DateTimeFormat(n, t).format(e)
            }(new Date(e), {
                hour: "numeric",
                minute: "numeric"
            }))
        };
        var o = n("GiK3"),
            a = (n.n(o), n("6sO2")),
            r = n("o5l+"),
            i = n("FsFC"),
            s = n("J4ib"),
            c = n("hXeO"),
            l = n("5vPJ"),
            d = n("kBA+"),
            u = n("qkCi"),
            m = n("mwvJ"),
            p = n("Odds");

        function h(e, t) {
            return o.createElement("a", {
                key: e,
                className: "chat-line__message--link",
                href: t.content.url,
                target: "_blank",
                rel: "noreferrer noopener"
            }, t.content.displayText)
        }

        function g(e) {
            var t = e.getHours() % 12;
            0 === t && (t = 12);
            var n = e.getMinutes(),
                o = n.toString();
            return n < 10 && (o = "0" + o), t + ":" + o
        }
    },
    gGMi: function(e, t, n) {
        "use strict";
        var o;
        n.d(t, "b", function() {
                return o
            }), n.d(t, "a", function() {
                return r
            }),
            function(e) {
                e.Everyone = "EVERYONE", e.Moderator = "MODERATOR", e.Subscriber = "SUBSCRIBER"
            }(o || (o = {}));
        var a, r = ((a = {})[o.Everyone] = "Everyone", a[o.Moderator] = "Mods", a[o.Subscriber] = "Subs", a)
    },
    gtpq: function(e, t) {},
    h5eQ: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return c
        });
        var o, a = n("GiK3"),
            r = (n.n(a), n("6sO2")),
            i = n("mi6k"),
            s = n("Odds");
        ! function(e) {
            e[e.Metadata = 0] = "Metadata", e[e.Overlay = 1] = "Overlay"
        }(o || (o = {}));
        var c = function(e) {
                var t, n = Object(i.b)(e.video.lengthSeconds);
                return t = e.video.publishedAt ? a.createElement(s.Q, {
                    fontSize: s.V.Size7
                }, Object(r.c)(new Date(e.video.publishedAt), "medium"), a.createElement("span", null, " · "), n) : a.createElement(s.Q, {
                    fontSize: s.V.Size7
                }, n), a.createElement(s._8, {
                    alignItems: s.c.Stretch,
                    display: s.R.Flex,
                    flexDirection: s.T.Row,
                    flexGrow: 1,
                    padding: .5
                }, a.createElement(s._8, {
                    flexGrow: 0,
                    flexShrink: 0,
                    position: s._15.Relative
                }, a.createElement(s.E, {
                    alt: e.video.title,
                    aspect: s.l.Aspect16x9,
                    size: s.F.Size8,
                    src: e.video.previewThumbnailURL
                }), l(e.selected)), a.createElement(s._8, {
                    alignItems: s.c.Start,
                    display: s.R.Flex,
                    flexDirection: s.T.Column,
                    flexGrow: 1,
                    flexShrink: 1,
                    justifyContent: s._7.Center,
                    padding: {
                        x: 1
                    },
                    overflow: s._11.Hidden
                }, a.createElement(s._8, {
                    fullWidth: !0,
                    overflow: s._11.Hidden
                }, a.createElement(s.Q, {
                    type: s._49.H3,
                    fontSize: s.V.Size6,
                    title: e.video.title,
                    ellipsis: !0
                }, e.video.title)), a.createElement("div", {
                    "data-test-selector": o.Metadata
                }, t)))
            },
            l = function(e) {
                return e ? a.createElement(s._35, {
                    background: s.n.Overlay,
                    attachTop: !0,
                    attachLeft: !0,
                    fullWidth: !0,
                    fullHeight: !0,
                    position: s._15.Absolute,
                    alignItems: s.c.Center,
                    "data-test-selector": o.Overlay,
                    display: s.R.Flex,
                    flexDirection: s.T.Column,
                    justifyContent: s._7.Center
                }, a.createElement(s._24, {
                    asset: s._25.Check
                })) : null
            }
    },
    hXeO: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
        });
        var o = n("GiK3"),
            a = (n.n(o), n("8RKZ")),
            r = function(e) {
                var t, n = e.emote,
                    r = n.alt || "";
                return n.cheerAmount && (r += " " + n.cheerAmount.toString(), t = o.createElement("strong", {
                    className: "chat-line__message--cheer-amount",
                    style: {
                        color: n.cheerColor
                    }
                }, n.cheerAmount)), o.createElement(a.a, {
                    alt: r,
                    cheerText: t,
                    className: "chat-line__message--emote",
                    srcKey: "1x",
                    srcSet: n.images
                })
            }
    },
    jPU6: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "RecentRaidsModActions_BanUser"
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
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 136
            }
        };
        n.loc.source = {
            body: "mutation RecentRaidsModActions_BanUser($input: BanUserFromChatRoomInput!) {\nbanUserFromChatRoom(input: $input) {\nban {\nisPermanent\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    jvcJ: function(e, t) {},
    k2hM: function(e, t) {},
    "kBA+": function(e, t, n) {
        "use strict";
        var o = n("TToO"),
            a = n("GiK3"),
            r = n("6sO2"),
            i = n("7vx8"),
            s = n("SZoP"),
            c = n("GxDs"),
            l = n("Odds"),
            d = n("s+oZ"),
            u = {
                ERROR: "video-chat-card-error"
            },
            m = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.data,
                        t = e.video,
                        n = e.error,
                        o = e.loading;
                    if (n || t && !t.owner) return a.createElement(c.a, {
                        error: {
                            title: Object(r.d)("Something went wrong", "VideoChatCard"),
                            description: Object(r.d)("We couldn't find that video", "VideoChatCard")
                        }
                    });
                    if (o || !t) return a.createElement(c.a, null);
                    var i = a.createElement(l.Q, null, Object(r.c)(new Date(t.publishedAt), "medium"), a.createElement("span", null, " · "), Object(s.a)(t.owner.login, t.owner.displayName));
                    return a.createElement(c.a, {
                        data: {
                            title: t.title,
                            description: i,
                            previewImageURL: t.previewThumbnailURL,
                            contentURL: this.props.url
                        }
                    })
                }, t
            }(a.Component),
            p = function(e) {
                return {
                    variables: {
                        videoID: e.id
                    },
                    notifyOnNetworkStatusChange: !0,
                    fetchPolicy: "cache-first"
                }
            },
            h = Object(i.a)(d, {
                options: p
            })(m);
        n.d(t, !1, function() {
            return "https://static-cdn.jtvnw.net/emoticons/v1/58765/2.0"
        }), n.d(t, !1, function() {
            return u
        }), n.d(t, !1, function() {
            return m
        }), n.d(t, !1, function() {
            return p
        }), n.d(t, "a", function() {
            return h
        })
    },
    m9YJ: function(e, t, n) {
        "use strict";
        n("R9op");
        var o = n("2KeS"),
            a = n("6sO2"),
            r = n("TToO"),
            i = "vodChat.channel-moderation-comments.RESULTS_RECEIVED",
            s = "vodChat.channel-moderation-comments.RESULTS_FAILED",
            c = "vodChat.channel-moderation-comments.BAN_SUCCESS",
            l = "vodChat.channel-moderation-comments.SEARCH_SUCCESS",
            d = "vodChat.comments.DELETED_SUCCESS",
            u = "vodChat.comments.CREATED_SUCCESS",
            m = "vodChat.comments.CREATE_FAILED",
            p = function(e) {
                return {
                    type: m,
                    createError: e
                }
            },
            h = "vodChat.comments.DISPLAY_ERROR",
            g = function(e) {
                return {
                    type: h,
                    errorMessage: e
                }
            },
            f = "vodChat.comments.UPDATED_SUCCESS",
            v = "vodChat.comments.CURSOR_RECEIVED",
            b = "vodChat.comments.OFFSET_RECEIVED",
            k = "vodChat.comments.QUERY_FAILED",
            C = "vodChat.comments.CLEARED",
            y = function() {
                return {
                    type: C
                }
            },
            _ = "vodChat.comments.COOLDOWN_ENDED",
            S = "vodChat.comments.SYNC_ENABLED",
            E = function() {
                return {
                    type: S
                }
            },
            w = "vodChat.comments.SYNC_DISABLED",
            D = function() {
                return {
                    type: w
                }
            },
            O = "vodChat.comments.REPLAY_FILTER_CHANGED",
            M = function(e) {
                return a.l.set("videoChat.is_replay_mode", e), {
                    type: O,
                    isReplayFilterOn: e
                }
            },
            R = "vodChat.comments.CHAT_REPLAY_ERROR_HIDE",
            T = function() {
                return {
                    type: R
                }
            },
            N = "vodChat.comments.TIMESTAMP_MODE_CHANGED",
            I = function(e) {
                return a.l.set("videoChat.hide_timestamps", e), {
                    type: N,
                    hideTimestamps: e
                }
            },
            A = "vodChat.comments.REQUEST_CHAT_SETTINGS",
            x = function() {
                return {
                    type: A,
                    isReplayFilterOn: a.l.get("videoChat.is_replay_mode", !1),
                    hideTimestamps: a.l.get("videoChat.hide_timestamps", !1)
                }
            },
            F = function(e) {
                return r.__assign({
                    searchHits: [],
                    videos: {}
                }, e)
            };
        var L = "vodChat.video.CURRENT_VIDEO_CHANGED",
            U = "vodChat.video.CURRENT_VIDEO_TIME_CHANGED",
            j = function(e) {
                return {
                    type: L,
                    id: e
                }
            },
            B = function(e) {
                return {
                    type: U,
                    updatedTime: e
                }
            },
            V = "video",
            H = "current",
            P = "",
            W = function(e) {
                return "" !== e.parentId
            },
            z = Number.MAX_VALUE,
            q = Number.MIN_VALUE,
            K = function(e) {
                return r.__assign({
                    commentCount: 0,
                    maxOffset: q,
                    minOffset: z,
                    parentComments: {},
                    offsets: {},
                    replies: {}
                }, e)
            },
            Q = function(e, t) {
                var n = X(e);
                return t.forEach(function(e) {
                    var t, o = e.id,
                        a = e.contentOffset,
                        i = e.parentId;
                    if ("" === i) {
                        n.minOffset = Math.min(n.minOffset, a), n.maxOffset = Math.max(n.maxOffset, a), n.parentComments = r.__assign({}, n.parentComments, ((t = {})[o] = e, t));
                        var s = n.offsets[a];
                        Array.isArray(s) ? s.includes(o) || (n.offsets[a] = s.concat(o), n.commentCount++) : (n.offsets[a] = [o], n.commentCount++)
                    } else {
                        var c = n.replies[i];
                        if (Array.isArray(c)) {
                            var l = c.findIndex(function(t) {
                                return t.id === e.id
                            }); - 1 !== l ? c[l] = e : (n.replies[i] = c.concat(e), n.commentCount++)
                        } else n.replies[i] = [e], n.commentCount++
                    }
                }), n
            },
            G = function(e, t) {
                if (t in e.parentComments) return e.parentComments[t]
            },
            $ = function(e, t) {
                var n = X(e);
                return W(t) ? ne(n, t.parentId, t.id) : te(n, t.id)
            },
            Y = function(e, t) {
                if (e.commentCount < t || Z(e)) return e;
                for (var n = e; n.commentCount > t && !Z(e);) n = oe(n, n.minOffset);
                return n
            },
            J = function(e, t) {
                var n = X(e);
                return Object.keys(e.parentComments).forEach(function(o) {
                    var a = e.parentComments[o];
                    t(a) || (n = te(n, a.id))
                }), Object.keys(e.replies).forEach(function(o) {
                    e.replies[o].forEach(function(e) {
                        t(e) || (n = ne(n, e.id, e.parentId))
                    })
                }), n
            },
            Z = function(e) {
                return e.minOffset === e.maxOffset
            },
            X = function(e) {
                return {
                    commentCount: e.commentCount,
                    maxOffset: e.maxOffset,
                    minOffset: e.minOffset,
                    offsets: ee(e.offsets),
                    parentComments: r.__assign({}, e.parentComments),
                    replies: r.__assign({}, e.replies)
                }
            },
            ee = function(e) {
                return Object.keys(e).reduce(function(t, n) {
                    return t[Number(n)] = e[Number(n)].slice(), t
                }, {})
            },
            te = function(e, t) {
                if (!(t in e.parentComments)) return e;
                var n = e.parentComments[t].contentOffset,
                    o = e.offsets[n],
                    a = [];
                if (o && (a = o.filter(function(e) {
                        return e !== t
                    })), e.offsets[n] = a, delete e.parentComments[t], e.commentCount--, t in e.replies) {
                    var r = e.replies[t].length;
                    delete e.replies[t], e.commentCount -= r
                }
                return e
            },
            ne = function(e, t, n) {
                if (!(t in e.replies)) return e;
                var o = e.replies[t].length,
                    a = e.replies[t].filter(function(e) {
                        if (e.id !== n) return e
                    });
                e.replies[t] = a, 0 === a.length && delete e.replies[t];
                var r = o - a.length;
                return e.commentCount -= r, e
            },
            oe = function(e, t) {
                return t >= e.minOffset && t <= e.maxOffset && !Z(e) ? (t in e.offsets && e.offsets[t].forEach(function(t) {
                    e = te(e, t)
                }), delete e.offsets[t], e.maxOffset === t ? e.maxOffset-- : e.minOffset === t && e.minOffset++, e) : e
            },
            ae = function() {
                function e(e) {
                    this.videoComments = e, this.currentOffset = e.minOffset
                }
                return e.prototype[Symbol.iterator] = function() {
                    var e = this;
                    return {
                        next: function() {
                            var t = e.videoComments.offsets[e.currentOffset] || [],
                                n = {
                                    done: e.currentOffset > e.videoComments.maxOffset,
                                    value: {
                                        offset: e.currentOffset,
                                        comments: t
                                    }
                                };
                            return e.currentOffset++, n
                        }
                    }
                }, e
            }(),
            re = n("J4ib");

        function ie() {
            return {
                messageCreatedTooQuickError: Object(re.d)("Your message was not sent because you are sending messages too quickly.", "format-error-messages"),
                chatReplayFilterError: Object(re.d)("Your message has been posted. However, other messages posted after the live stream are hidden.", "format-error-messages")
            }
        }
        var se = function(e) {
                return r.__assign({
                    comments: K(),
                    currentVideoTime: 0,
                    cursor: {
                        future: P,
                        past: P
                    },
                    errorMessage: "",
                    hasDismissedChatReplayError: !1,
                    hasLoadedCurrentUserBlockedList: !1,
                    hasLoadedData: !1,
                    isPostCooldownActive: !1,
                    isReplayFilterOn: !1,
                    isScrollingSynced: !0,
                    replyCursorMap: {},
                    hideTimestamps: !1
                }, e)
            },
            ce = 150;
        var le = {
            apiToken: "",
            deviceId: ""
        };
        var de = {
                users: {}
            },
            ue = function(e) {
                return r.__assign({
                    users: {}
                }, e)
            };

        function me(e, t) {
            var n = t.reduce(function(e, t) {
                return e[t.id] = t, e
            }, {});
            return r.__assign({}, e, n)
        }
        var pe = Object(o.c)({
            comments: function(e, t) {
                switch (void 0 === e && (e = se()), t.type) {
                    case u:
                        var n = r.__assign({}, t.comments[0], {
                            highlight: !0,
                            source: H
                        });
                        return r.__assign({}, e, {
                            comments: Q(e.comments, [n]),
                            isPostCooldownActive: !0
                        });
                    case m:
                        return r.__assign({}, e, {
                            errorMessage: t.createError
                        });
                    case h:
                        return r.__assign({}, e, {
                            errorMessage: t.errorMessage
                        });
                    case v:
                        var o = t.comments[0].parentId,
                            a = e.cursor,
                            l = e.replyCursorMap,
                            p = t.comments.slice();
                        if ("" === o) a = t.cursor;
                        else if (l = r.__assign({}, e.replyCursorMap, ((M = {})[o] = t.cursor.future, M)), t.cursor.future === P) {
                            var g = G(e.comments, o);
                            if (g) {
                                var y = r.__assign({}, g, {
                                    moreReplies: !1
                                });
                                p.push(y)
                            }
                        }
                        var E = Q(e.comments, p);
                        return e.isScrollingSynced && (E = Y(E, ce)), r.__assign({}, e, {
                            comments: E,
                            cursor: a,
                            hasLoadedData: !0,
                            replyCursorMap: l
                        });
                    case b:
                        return r.__assign({}, e, {
                            comments: Q(K(), t.comments),
                            hasLoadedData: !0,
                            cursor: t.cursor,
                            replyCursorMap: {}
                        });
                    case k:
                        return r.__assign({}, e, {
                            hasLoadedData: !0
                        });
                    case i:
                        return r.__assign({}, e, {
                            comments: Q(K(), t.comments),
                            cursor: t.cursor,
                            hasLoadedData: !0,
                            errorMessage: ""
                        });
                    case s:
                        return r.__assign({}, se(), {
                            hasLoadedData: !0,
                            errorMessage: t.error
                        });
                    case U:
                        return r.__assign({}, e, {
                            currentVideoTime: Math.floor(t.updatedTime)
                        });
                    case L:
                    case C:
                        return r.__assign({}, se());
                    case d:
                        return r.__assign({}, e, {
                            comments: $(e.comments, t.comment)
                        });
                    case _:
                        var D = e.errorMessage;
                        return D === ie().messageCreatedTooQuickError && (D = ""), r.__assign({}, e, {
                            isPostCooldownActive: !1,
                            errorMessage: D
                        });
                    case w:
                        return r.__assign({}, e, {
                            isScrollingSynced: !1
                        });
                    case S:
                        return r.__assign({}, e, {
                            comments: Y(e.comments, ce),
                            isScrollingSynced: !0
                        });
                    case c:
                        return r.__assign({}, e, {
                            comments: J(e.comments, function(e) {
                                return e.commenter !== t.user
                            })
                        });
                    case f:
                        return r.__assign({}, e, {
                            comments: Q(e.comments, t.comments)
                        });
                    case O:
                        return r.__assign({}, e, {
                            isReplayFilterOn: t.isReplayFilterOn
                        });
                    case R:
                        return r.__assign({}, e, {
                            hasDismissedChatReplayError: !0
                        });
                    case N:
                        return r.__assign({}, e, {
                            hideTimestamps: t.hideTimestamps
                        });
                    case A:
                        return r.__assign({}, e, {
                            isReplayFilterOn: t.isReplayFilterOn,
                            hideTimestamps: t.hideTimestamps
                        });
                    default:
                        return e
                }
                var M
            },
            config: function(e) {
                return void 0 === e && (e = le), e
            },
            users: function(e, t) {
                switch (void 0 === e && (e = de), t.type) {
                    case v:
                    case b:
                    case i:
                    case u:
                        return {
                            users: me(e.users, t.users)
                        };
                    case C:
                        return r.__assign({}, ue());
                    default:
                        return e
                }
            },
            moderation: function(e, t) {
                switch (void 0 === e && (e = F()), t.type) {
                    case i:
                        return r.__assign({}, e, {
                            videos: (n = e.videos, o = t.videos, a = o.reduce(function(e, t) {
                                return e[t.id] = t, e
                            }, {}), r.__assign({}, n, a))
                        });
                    case l:
                        return t.hits && t.hits.results.length > 0 ? r.__assign({}, e, {
                            searchHits: t.hits.results
                        }) : r.__assign({}, e, {
                            searchHits: []
                        });
                    case C:
                        return r.__assign({}, F());
                    default:
                        return e
                }
                var n, o, a
            }
        });
        a.o.store.registerReducer("vodChat", pe);
        var he = n("OAwv"),
            ge = n("9u8h");
        var fe = n("iydZ"),
            ve = n("mwvJ"),
            be = n("l21v"),
            ke = function(e, t, n) {
                var o = e.body,
                    a = e.emoticons || [],
                    r = [];
                return r = 0 === a.length ? e.bits_spent ? r.concat(Object(fe.c)(o, n)) : r.concat(Object(be.c)(o, t, !1)) : function(e, t, n, o) {
                    var a, r = 0,
                        i = Array.from(t);
                    a = e.reduce(function(e, t) {
                        var n = t.begin,
                            o = t.end,
                            a = i.slice(r, n),
                            s = i.slice(n, o + 1);
                        return 0 !== a.length && (e = e.concat(Object(be.c)(a.join(""), "", !1))), e.push({
                            type: ve.a.Emote,
                            content: {
                                images: {
                                    themed: !1,
                                    sources: {
                                        "1x": Object(be.f)(t._id, 1),
                                        "2x": Object(be.f)(t._id, 2),
                                        "4x": Object(be.f)(t._id, 4)
                                    }
                                },
                                alt: s.join("")
                            }
                        }), r = o + 1, e
                    }, []), r < t.length && (a = a.concat(Object(be.c)(i.slice(r).join(""), "", !1)));
                    if (!o) return a;
                    return a.reduce(function(e, t) {
                        return t.type === ve.a.Text ? e.concat(Object(fe.c)(t.content, n)) : (e.push(t), e)
                    }, [])
                }(a, o, n, void 0 !== e.bits_spent), {
                    id: "1",
                    isAction: e.is_action,
                    tokens: r,
                    userColor: e.user_color ? e.user_color : Object(be.b)(t)
                }
            };
        var Ce = function() {
                return function(e) {
                    this.bio = e.bio, this.createdAt = e.createdAt, this.displayName = e.displayName, this.id = e.id, this.logo = e.logo, this.name = e.name, this.type = e.type, this.updatedAt = e.updatedAt
                }
            }(),
            ye = function(e) {
                return new Ce({
                    id: e._id,
                    name: e.name,
                    logo: new URL(e.logo || "https://static-cdn.jtvnw.net/jtv_user_pictures/xarth/404_user_150x150.png"),
                    bio: e.bio,
                    createdAt: new Date(e.created_at),
                    displayName: e.display_name,
                    type: e.type,
                    updatedAt: new Date(e.updated_at)
                })
            };
        var _e = function(e, t) {
                var n = r.__assign({}, e, {
                    more_replies: t.moreReplies
                });
                return {
                    comments: [De.normalizeRecord(n, fe.a)],
                    users: [ye(e.commenter)]
                }
            },
            Se = function(e, t) {
                var n = e.comments.map(function(e) {
                        return ye(e.commenter)
                    }),
                    o = {
                        past: P,
                        future: P
                    };
                return void 0 !== e._next && (o.future = e._next), void 0 !== e._prev && (o.past = e._prev), {
                    comments: e.comments.reduce(function(e, o) {
                        return o.replies && o.replies.map(function(e) {
                            n.push(ye(e.commenter))
                        }), e.concat(De.normalizeRecords(o, t))
                    }, []),
                    cursor: o,
                    users: n
                }
            },
            Ee = function(e) {
                var t = e.comments.map(function(e) {
                    return ye(e.commenter)
                });
                return {
                    comments: e.comments.map(function(e) {
                        return De.normalizeRecord(e, fe.a)
                    }),
                    cursor: {
                        future: e._next || P
                    },
                    users: t
                }
            };

        function we(e) {
            return e.reduce(function(e, t) {
                return e[t._id] = t.version, e
            }, {})
        }
        var De = {
                normalizeRecords: function(e, t) {
                    var n = [De.normalizeRecord(e, t)];
                    return Array.isArray(e.replies) && e.replies.forEach(function(e) {
                        n.push(Oe.normalizeRecord(e, t))
                    }), n
                },
                normalizeRecord: function(e, t) {
                    return {
                        channelId: e.channel_id,
                        commenter: e.commenter._id,
                        contentId: e.content_id,
                        contentOffset: Math.floor(e.content_offset_seconds),
                        contentType: e.content_type,
                        createdAt: new Date(e.created_at),
                        id: e._id,
                        message: ke(e.message, e.commenter._id, t),
                        moreReplies: e.more_replies || !1,
                        parentId: void 0 !== e.parent_id ? e.parent_id : "",
                        state: e.state,
                        source: e.source,
                        userBadges: we(e.message.user_badges || [])
                    }
                }
            },
            Oe = {
                normalizeRecord: function(e, t) {
                    return {
                        channelId: e.channel_id,
                        commenter: e.commenter._id,
                        contentId: e.content_id,
                        contentOffset: Math.floor(e.content_offset_seconds),
                        contentType: e.content_type,
                        createdAt: new Date(e.created_at),
                        id: e._id,
                        message: ke(e.message, e.commenter._id, t),
                        moreReplies: !1,
                        parentId: void 0 !== e.parent_id ? e.parent_id : "",
                        state: e.state,
                        source: e.source,
                        userBadges: we(e.message.user_badges || [])
                    }
                }
            },
            Me = "content_offset_seconds",
            Re = "cursor",
            Te = "comment_id";

        function Ne(e) {
            return "/v5/videos/" + e + "/comments"
        }

        function Ie(e) {
            return Ae(e).toString() + "/replies"
        }

        function Ae(e) {
            return "/v5/videos/comments/" + e
        }

        function xe(e) {
            var t;
            t = Le(e) ? Ie(e.parentId) : Ne(e.contentId);
            var n, o = {
                body: Le(n = e) ? {
                    message: n.message,
                    parent_id: n.parentId
                } : {
                    content_id: n.contentId,
                    content_offset_seconds: n.contentOffsetSeconds,
                    content_type: n.contentType,
                    message: n.message
                }
            };
            return ge.a.post(t, o)
        }

        function Fe(e) {
            try {
                if (function(e) {
                        return "commentID" in e
                    }(e)) return function(e) {
                    var t = {};
                    void 0 !== e.cursor && (t[Re] = e.cursor);
                    var n = Ie(e.commentID) + "?" + he.stringify(t);
                    return ge.a.getOrThrow(n).then(function(e) {
                        return Ee(e.body)
                    })
                }(e);
                var t = {};
                Ue(e) ? t[Re] = e.cursor : je(e) && (t[Me] = "" + e.offset, void 0 !== e.highlightedMessageID && (t[Te] = e.highlightedMessageID));
                var n = Ne(e.videoID) + "?" + he.stringify(t);
                return ge.a.getOrThrow(n).then(function(t) {
                    return Se(t.body, e.bitsConfig)
                })
            } catch (e) {
                return Promise.reject(e)
            }
        }

        function Le(e) {
            return "parentId" in e
        }

        function Ue(e) {
            return "cursor" in e
        }

        function je(e) {
            return "offset" in e
        }
        var Be = function(e, t) {
                var n = Se(e, t),
                    o = e.comments.reduce(function(e, t) {
                        return void 0 === t.video ? e : e.concat([Ve(t.video)])
                    }, []);
                return Array.isArray(e.parents) && e.parents.forEach(function(e) {
                    n.comments.push(De.normalizeRecord(e, t)), n.users.push(ye(e.commenter))
                }), r.__assign({}, n, {
                    videos: o
                })
            },
            Ve = function(e) {
                return {
                    id: e._id,
                    title: e.title,
                    preview: e.preview
                }
            },
            He = "channel_id",
            Pe = "limit",
            We = "video_id",
            ze = 50;

        function qe(e) {
            var t;
            return t = function(e) {
                return "userId" in e
            }(e) ? function(e) {
                var t = {};
                return t[Pe] = ze.toString(), t[He] = e.userId, void 0 !== e.cursor && (t[Re] = e.cursor), "/v5/videos/comments?" + he.stringify(t)
            }(e) : function(e) {
                var t = {};
                return t[Pe] = ze.toString(), t[We] = e.videoId, void 0 !== e.cursor && (t[Re] = e.cursor), "/v5/videos/comments?" + he.stringify(t)
            }(e), ge.a.getOrThrow(t).then(function(t) {
                return Be(t.body, e.bitsConfig)
            })
        }
        var Ke = n("6WAQ"),
            Qe = function(e) {
                return e + "s"
            },
            Ge = {
                beginSec: Number.MIN_VALUE,
                endSec: Number.MAX_VALUE
            },
            $e = function(e, t) {
                return t.commenter in e
            },
            Ye = function(e, t, n, o) {
                var a = e.vodChat.comments,
                    r = a.currentVideoTime,
                    i = a.comments;
                return 0 === i.commentCount ? [] : Array.from(new ae(i)).reduce(function(a, s) {
                    return s.offset > r ? a : (s.comments.forEach(function(r) {
                        var s = G(i, r);
                        if (void 0 !== s && (n || !$e(o, s))) return "comment" === s.source && at(e.vodChat.comments.isReplayFilterOn, t) ? a : a.push(et(s, e, n, o, t))
                    }), a)
                }, []).sort(Ze)
            },
            Je = function(e) {
                var t = function(e) {
                    return e.vodChat.comments.comments
                }(e);
                return Object.keys(t.parentComments).map(function(n) {
                    return nt(t.parentComments[n], e)
                }).filter(function(e) {
                    return void 0 !== e.video
                }).sort(Xe)
            },
            Ze = function(e, t) {
                return e.comment.contentOffset === t.comment.contentOffset ? e.comment.createdAt.getTime() - t.comment.createdAt.getTime() : e.comment.contentOffset - t.comment.contentOffset
            },
            Xe = function(e, t) {
                return e.comment.createdAt.getTime() === t.comment.createdAt.getTime() ? t.comment.contentOffset - e.comment.contentOffset : t.lastUpdated.getTime() - e.lastUpdated.getTime()
            },
            et = function(e, t, n, o, a) {
                var r = new Array,
                    i = new Array,
                    s = t.vodChat.comments.comments.replies[e.id],
                    c = e.createdAt;
                return Array.isArray(s) && s.forEach(function(e) {
                    !n && $e(o, e) || (e.source === H && at(t.vodChat.comments.isReplayFilterOn, a) ? (i.push(et(e, t, n, o)), c = rt(c, e.createdAt)) : (r.push(et(e, t, n, o)), c = rt(c, e.createdAt)))
                }), at(t.vodChat.comments.isReplayFilterOn, a) ? {
                    author: t.vodChat.users.users[e.commenter],
                    comment: e,
                    lastUpdated: c,
                    replies: i.sort(Ze)
                } : {
                    author: t.vodChat.users.users[e.commenter],
                    comment: e,
                    lastUpdated: c,
                    replies: r.sort(Ze)
                }
            },
            tt = function(e, t) {
                var n = new Array,
                    o = t.vodChat.comments.comments.replies[e.id],
                    a = e.createdAt;
                return Array.isArray(o) && o.forEach(function(e) {
                    n.push(tt(e, t)), a = rt(a, e.createdAt)
                }), {
                    author: t.vodChat.users.users[e.commenter],
                    comment: e,
                    lastUpdated: a,
                    replies: n.sort(Ze)
                }
            },
            nt = function(e, t) {
                var n, o = tt(e, t);
                return r.__assign({}, o, {
                    video: t.vodChat.moderation.videos[(n = e.contentId, "v" + n)]
                })
            },
            ot = function(e) {
                return 0 === e.commentCount ? Ge : {
                    beginSec: e.minOffset,
                    endSec: e.maxOffset
                }
            },
            at = function(e, t) {
                return !!t && (e && (t === Ke.a.Archive || t === Ke.a.Highlight))
            },
            rt = function(e, t) {
                return e.getTime() > t.getTime() ? e : t
            };

        function it(e, t, n, o) {
            return e in t ? {
                bitsConfig: o,
                commentID: e,
                cursor: t[e]
            } : {
                bitsConfig: o,
                commentID: e,
                videoID: n
            }
        }

        function st(e) {
            return e.future !== P
        }

        function ct(e) {
            return e.past !== P
        }
        var lt = n("HM6l"),
            dt = n("9m97"),
            ut = n("MAZT"),
            mt = n("uTyw"),
            pt = n("E8Jt"),
            ht = function(e, t) {
                return qe(t).then(function(n) {
                    var o, a;
                    e.dispatch((o = n, a = t.bitsConfig, r.__assign({
                        type: i
                    }, o, {
                        bitsConfig: a
                    })))
                }, function() {
                    var t;
                    e.dispatch((t = Object(re.d)("Unable to retrieve messages, please try again.", "routines-moderation"), {
                        type: s,
                        error: t
                    }))
                })
            },
            gt = function(e, t) {
                return (n = t, o = function(e) {
                    return "/v5/videos/channels/" + e.targetChannel + "/bans"
                }(n), a = {
                    body: {
                        commenter_id: n.bannedUser
                    }
                }, ge.a.postOrThrow(o, a)).then(function() {
                    var n;
                    e.dispatch((n = t.bannedUser, {
                        type: c,
                        user: n
                    }))
                }).catch(function(t) {
                    return e.dispatch(function(e) {
                        return {
                            type: "vodChat.channel-moderation-comments.BAN_FAILED",
                            error: e
                        }
                    }(t))
                });
                var n, o, a
            },
            ft = function(e, t) {
                var n = new ut.a({
                        appId: a.a.algoliaApplicationID,
                        apiKey: a.a.algoliaAPIKey,
                        apolloClient: a.o.apollo.client,
                        logger: a.j,
                        config: a.a
                    }),
                    o = lt.a(),
                    r = Object(pt.b)({
                        broadcastType: dt.d,
                        broadcasterId: t.creatorId
                    }),
                    i = r.typeID,
                    s = r.params;
                return n.queryForType(i, t.searchTerm, o, s).then(function(t) {
                    var n, o = Object(mt.b)({
                        searchResults: t
                    });
                    o.currentVideoResults && e.dispatch((n = o.currentVideoResults, {
                        type: l,
                        hits: n
                    }))
                }).catch(function() {})
            };

        function vt(e, t) {
            return function(n, o) {
                e({
                    dispatch: n,
                    getState: o
                }, t, re.p.apollo.client)
            }
        }

        function bt(e, t) {
            return function(n, o) {
                e({
                    dispatch: n,
                    getState: o
                }, t, re.p.apollo.client, re.o)
            }
        }
        var kt = n("GiK3"),
            Ct = n("Odds"),
            yt = function(e) {
                return kt.createElement(Ct.v, {
                    type: Ct.B.Text,
                    onClick: e.onClick
                }, Object(a.d)("Show more replies...", "chomments.moderation.showMoreRepliesAction"))
            },
            _t = n("vH/s"),
            St = n("JpYe"),
            Et = n("IWpL"),
            wt = n("xrVp"),
            Dt = n("cAee"),
            Ot = n("B0KL"),
            Mt = this,
            Rt = "replay_mode",
            Tt = "timestamp_mode",
            Nt = "on",
            It = "off",
            At = function(e) {
                a.n.track(Et.SpadeEventType.VideoChatSettingChanged, e)
            },
            xt = function(e, t) {
                return r.__awaiter(Mt, void 0, void 0, function() {
                    var n, o, i, s;
                    return r.__generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return r.trys.push([0, 2, , 3]), [4, a.o.apollo.client.query({
                                    query: Ot,
                                    variables: {
                                        videoCreatorID: e.channelId,
                                        videoID: e.contentId
                                    }
                                })];
                            case 1:
                                return n = r.sent().data, o = {
                                    channel: n.video.owner.login,
                                    channel_id: Number(e.channelId),
                                    game: n.video.game ? n.video.game.name : null,
                                    location: _t.PageviewLocation.VideoWatchPage,
                                    share_platform: Dt.a.Link,
                                    share_context: _t.ShareItemContext.Chomment,
                                    shared_item_id: Object(St.b)(e.contentId),
                                    shared_item_type: Object(wt.a)(n.video.broadcastType),
                                    shared_item_url: t.toString(),
                                    partner: n.video.owner.roles.isPartner,
                                    source_item_id: e.id,
                                    source_item_type: _t.SourceItemType.Chomment
                                }, i = Ft(e, n, Dt.a.Link), a.n.track(Et.SpadeEventType.ChommentUIAction, i), a.n.track(Et.SpadeEventType.ShareItem, o), [3, 3];
                            case 2:
                                return s = r.sent(), a.j.error(s.toString(), xt.name), [3, 3];
                            case 3:
                                return [2]
                        }
                    })
                })
            },
            Ft = function(e, t, n) {
                return {
                    action: "share",
                    author_id: Number(e.commenter),
                    channel: t.video.owner.login,
                    channel_id: Number(e.channelId),
                    comment_id: e.id,
                    event_source: "frontend",
                    game: t.video.game ? t.video.game.name : null,
                    login: t.currentUser ? t.currentUser.login : null,
                    user_id: t.currentUser ? Number(t.currentUser.id) : null,
                    vod_id: Number(e.contentId),
                    vod_title: t.video.title,
                    vod_ts: e.contentOffset,
                    vod_type: Object(wt.a)(t.video.broadcastType),
                    share_platform: n
                }
            },
            Lt = n("WNf4"),
            Ut = n("tSZx"),
            jt = n("vjRp"),
            Bt = this;
        var Vt = function(e) {
                if (e.includes("FollowersOnlyError")) return function(e) {
                    return Object(a.d)("This room is in {duration} followers-only mode. Follow this channel to join the community", {
                        duration: e
                    }, "routines-comments")
                }(function(e) {
                    var t = e.split(" "),
                        n = t[t.length - 1].match(/((\d+)h)?(\d+)m(\d+)s/);
                    if (!Array.isArray(n)) return "";
                    return {
                        600: "10 Minutes",
                        1800: "30 Minutes",
                        3600: "1 Hour",
                        86400: "1 Day",
                        604800: "1 Week",
                        2592000: "1 Month",
                        7776000: "3 Months"
                    }[60 * parseInt(n[2] || "0", 10) * 60 + 60 * parseInt(n[3], 10) + parseInt(n[4], 10)]
                }(e));
                var t = {
                        CommenterBannedError: Object(a.d)("You are banned from sending messages in this channel", "routines-comments"),
                        CommentingDisabledError: Object(a.d)("Sending messages in this channel is disabled", "routines-comments"),
                        UserNotVerifiedError: Object(a.d)("Account email verification required to send a message", "routines-comments"),
                        MaxChildCommentsError: Object(a.d)("The reply limit for this message has been reached", "routines-comments"),
                        MessageLikelySpamError: Object(a.d)("Your message was blocked by the spam filter", "routines-comments"),
                        MessageContainsBannedWordsError: Object(a.d)("Your message wasn't posted due to conflicts with the channel's moderation settings", "routines-comments")
                    },
                    n = Object.keys(t).find(function(t) {
                        return e.includes(t)
                    });
                return n ? t[n] : Object(a.d)("Unable to send a new message at this time", "routines-comments")
            },
            Ht = "",
            Pt = -1,
            Wt = !1,
            zt = function(e, t) {
                return r.__awaiter(Bt, void 0, void 0, function() {
                    return r.__generator(this, function(n) {
                        if (Wt) return [2, Promise.resolve()];
                        if (je(t)) {
                            if (t.offset === Pt) return [2, Promise.resolve()];
                            Pt = t.offset
                        }
                        if (Ue(t)) {
                            if (t.cursor === Ht) return [2, Promise.resolve()];
                            Ht = t.cursor
                        }
                        return Wt = !0, [2, Fe(t).then(function(n) {
                            var o;
                            Wt = !1, je(t) && t.offset === Pt ? e.dispatch((o = n, r.__assign({
                                type: b
                            }, o))) : e.dispatch(function(e) {
                                return r.__assign({
                                    type: v
                                }, e)
                            }(n))
                        }, function(t) {
                            Wt = !1, a.j.error(t, "VideoChat: unable to fetch messages"), e.dispatch({
                                type: k
                            })
                        })]
                    })
                })
            },
            qt = function(e, t) {
                return r.__awaiter(Bt, void 0, void 0, function() {
                    var n, o, i;
                    return r.__generator(this, function(s) {
                        switch (s.label) {
                            case 0:
                                return s.trys.push([0, 2, , 3]), [4, xe(t)];
                            case 1:
                                return (n = s.sent()).requestError ? (a.j.error(n.requestError, qt.name), e.dispatch(p(Vt(""))), [2]) : n.error ? (a.j.error(new Error(n.error.error), qt.name), e.dispatch(p(Vt(n.error.message))), [2]) : void 0 === n.body ? (e.dispatch(p(Vt(""))), [2]) : (l = n.body, o = {
                                    comments: [De.normalizeRecord(l, fe.a)],
                                    users: [ye(l.commenter)]
                                }, e.dispatch((c = o, r.__assign({
                                    type: u
                                }, c))), e.dispatch(bt(Gt, o)), setTimeout(function() {
                                    e.dispatch({
                                        type: _
                                    })
                                }, 5e3), [3, 3]);
                            case 2:
                                return i = s.sent(), a.j.error(i, qt.name), e.dispatch(p(Vt(""))), [3, 3];
                            case 3:
                                return [2]
                        }
                        var c, l
                    })
                })
            },
            Kt = function(e, t) {
                return r.__awaiter(Bt, void 0, void 0, function() {
                    var n;
                    return r.__generator(this, function(o) {
                        switch (o.label) {
                            case 0:
                                return o.trys.push([0, 2, , 3]), [4, function(e) {
                                    var t = Ae(e.id);
                                    return ge.a.delete(t)
                                }(t)];
                            case 1:
                                return o.sent(), e.dispatch(function(e) {
                                    return r.__assign({
                                        type: d
                                    }, e)
                                }({
                                    comment: t
                                })), e.dispatch(bt($t, {
                                    comment: t
                                })), [3, 3];
                            case 2:
                                return n = o.sent(), a.j.error(n, Kt.name), [3, 3];
                            case 3:
                                return [2]
                        }
                    })
                })
            },
            Qt = function(e, t) {
                return r.__awaiter(Bt, void 0, void 0, function() {
                    var n, o;
                    return r.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return i.trys.push([0, 2, , 3]), [4, function(e) {
                                    var t = Ae(e.comment.id),
                                        n = {
                                            body: {
                                                state: e.state
                                            }
                                        };
                                    return ge.a.putOrThrow(t, n).then(function(t) {
                                        return _e(t.body, e.comment)
                                    })
                                }(t)];
                            case 1:
                                return n = i.sent(), e.dispatch((s = n, r.__assign({
                                    type: f
                                }, s))), [3, 3];
                            case 2:
                                return o = i.sent(), a.j.error(o, Qt.name), [3, 3];
                            case 3:
                                return [2]
                        }
                        var s
                    })
                })
            },
            Gt = function(e, t, n, o) {
                return r.__awaiter(Bt, void 0, void 0, function() {
                    var e, i;
                    return r.__generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return r.trys.push([0, 2, , 3]), [4, n.query({
                                    query: Lt,
                                    variables: {
                                        videoCreatorID: t.comments[0].channelId,
                                        videoID: t.comments[0].contentId
                                    }
                                })];
                            case 1:
                                return e = r.sent().data, o.track(_t.SpadeEventType.ChommentCreated, function(e, t) {
                                    var n = e.users[0],
                                        o = e.comments[0];
                                    return {
                                        channel: t.user.login,
                                        channel_id: Number(o.channelId),
                                        comment_id: o.id,
                                        comment_state: o.state,
                                        event_source: "frontend",
                                        game: t.video.game ? t.video.game.name : null,
                                        login: n.name,
                                        play_session_id: a.n.getVideoPlayerTrackingData().playSessionID,
                                        reply_to_comment_id: W(o) ? o.parentId : null,
                                        user_id: Number(n.id),
                                        vod_id: Number(o.contentId),
                                        vod_title: t.video.title,
                                        vod_ts: o.contentOffset,
                                        vod_type: Object(wt.a)(t.video.broadcastType)
                                    }
                                }(t, e)), [3, 3];
                            case 2:
                                return i = r.sent(), a.j.error(i, Gt.name), [3, 3];
                            case 3:
                                return [2]
                        }
                    })
                })
            },
            $t = function(e, t, n, o) {
                return r.__awaiter(Bt, void 0, void 0, function() {
                    var i, s;
                    return r.__generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return r.trys.push([0, 2, , 3]), [4, n.query({
                                    query: Ut,
                                    variables: {
                                        videoCreatorID: t.comment.channelId,
                                        commentCreator: t.comment.commenter,
                                        videoID: t.comment.contentId
                                    }
                                })];
                            case 1:
                                return i = r.sent().data, o.track(_t.SpadeEventType.ChommentDeleted, function(e, t, n) {
                                    return {
                                        author_id: Number(e.comment.commenter),
                                        author_login: n.users[1].login,
                                        channel: n.users[0].login,
                                        channel_id: Number(e.comment.channelId),
                                        comment_id: e.comment.id,
                                        event_source: "frontend",
                                        game: n.video.game ? n.video.game.name : null,
                                        login: t.session.user.login,
                                        user_id: Number(t.session.user.id),
                                        vod_id: Number(e.comment.contentId),
                                        vod_title: n.video.title,
                                        vod_type: Object(wt.a)(n.video.broadcastType),
                                        vod_ts: e.comment.contentOffset
                                    }
                                }(t, e.getState(), i)), [3, 3];
                            case 2:
                                return s = r.sent(), a.j.error(s, $t.name), [3, 3];
                            case 3:
                                return [2]
                        }
                    })
                })
            },
            Yt = function(e, t, n, o) {
                return r.__awaiter(Bt, void 0, void 0, function() {
                    var i, s;
                    return r.__generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return r.trys.push([0, 2, , 3]), [4, n.query({
                                    query: jt,
                                    variables: {
                                        videoID: t.comment.contentId
                                    }
                                })];
                            case 1:
                                return i = r.sent().data, o.track(_t.SpadeEventType.ChommentUIAction, function(e, t, n) {
                                    return {
                                        action: "ban_user",
                                        author_id: Number(e.bannedUser),
                                        channel_id: Number(e.targetChannel),
                                        event_source: "frontend",
                                        game: n.video.game ? n.video.game.name : null,
                                        login: t.session.user.login,
                                        target_user_id: Number(e.bannedUser),
                                        user_id: Number(t.session.user.id),
                                        vod_id: Number(n.video.id),
                                        vod_title: n.video.title,
                                        vod_type: Object(wt.a)(n.video.broadcastType),
                                        vod_ts: e.comment.contentOffset
                                    }
                                }(t, e.getState(), i)), [3, 3];
                            case 2:
                                return s = r.sent(), a.j.error(s, Yt.name), [3, 3];
                            case 3:
                                return [2]
                        }
                    })
                })
            },
            Jt = function(e, t, n, o) {
                return r.__awaiter(Bt, void 0, void 0, function() {
                    var i, s;
                    return r.__generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return r.trys.push([0, 2, , 3]), [4, n.query({
                                    query: Ut,
                                    variables: {
                                        videoCreatorID: t.channelId,
                                        commentCreator: t.commenter,
                                        videoID: t.contentId
                                    }
                                })];
                            case 1:
                                return i = r.sent().data, o.track(_t.SpadeEventType.ChommentUIAction, function(e, t, n) {
                                    return {
                                        action: "delete",
                                        author_id: Number(e.commenter),
                                        author_login: n.users[1].login,
                                        channel: n.users[0].login,
                                        channel_id: Number(e.channelId),
                                        comment_id: e.id,
                                        event_source: "frontend",
                                        game: n.video.game ? n.video.game.name : null,
                                        login: t.session.user.login,
                                        reply_to_comment_id: e.parentId ? e.parentId : null,
                                        user_id: Number(t.session.user.id),
                                        vod_id: Number(e.contentId),
                                        vod_title: n.video.title,
                                        vod_type: Object(wt.a)(n.video.broadcastType),
                                        vod_ts: e.contentOffset
                                    }
                                }(t, e.getState(), i)), [3, 3];
                            case 2:
                                return s = r.sent(), a.j.error(s, Jt.name), [3, 3];
                            case 3:
                                return [2]
                        }
                    })
                })
            },
            Zt = function(e, t, n, o) {
                return r.__awaiter(Bt, void 0, void 0, function() {
                    var i, s, c, l;
                    return r.__generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return r.trys.push([0, 2, , 3]), i = e.getState(), s = Le(t) ? i.vodChat.comments.comments.parentComments[t.parentId].contentId : t.contentId, [4, n.query({
                                    query: jt,
                                    variables: {
                                        videoID: s
                                    }
                                })];
                            case 1:
                                return c = r.sent().data, o.track(_t.SpadeEventType.ChommentUIAction, function(e, t, n) {
                                    var o = null,
                                        a = Object.keys(t.vodChat.comments.comments.parentComments);
                                    if (a.length > 0) {
                                        var r = a[0];
                                        o = t.vodChat.comments.comments.parentComments[r].channelId
                                    }
                                    return {
                                        action: "create",
                                        channel_id: o ? Number(o) : null,
                                        comment_body: e.message,
                                        event_source: "frontend",
                                        game: n.video.game ? n.video.game.name : null,
                                        login: t.session.user ? t.session.user.login : null,
                                        reply_to_comment_id: Le(e) ? e.parentId : null,
                                        user_id: t.session.user ? Number(t.session.user.id) : null,
                                        vod_id: Number(n.video.id),
                                        vod_title: n.video.title,
                                        vod_ts: Le(e) ? null : Number(e.contentOffsetSeconds),
                                        vod_type: Object(wt.a)(n.video.broadcastType)
                                    }
                                }(t, e.getState(), c)), [3, 3];
                            case 2:
                                return l = r.sent(), a.j.error(l, Zt.name), [3, 3];
                            case 3:
                                return [2]
                        }
                    })
                })
            },
            Xt = function(e, t, n, o) {
                return r.__awaiter(Bt, void 0, void 0, function() {
                    var i, s;
                    return r.__generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return r.trys.push([0, 2, , 3]), [4, n.query({
                                    query: jt,
                                    variables: {
                                        videoID: t.comment.contentId
                                    }
                                })];
                            case 1:
                                return i = r.sent().data, o.track(_t.SpadeEventType.ChommentUIAction, function(e, t, n) {
                                    var o = e.comment.id,
                                        a = e.comment.channelId;
                                    return {
                                        action: "published" === e.state ? "publish" : "unpublish",
                                        channel_id: Number(a),
                                        comment_id: o,
                                        event_source: "frontend",
                                        game: n.video.game ? n.video.game.name : null,
                                        login: t.session.user.login,
                                        user_id: Number(t.session.user.id),
                                        vod_id: Number(n.video.id),
                                        vod_title: n.video.title,
                                        vod_ts: e.comment.contentOffset,
                                        vod_type: Object(wt.a)(n.video.broadcastType)
                                    }
                                }(t, e.getState(), i)), [3, 3];
                            case 2:
                                return s = r.sent(), a.j.error(s, Xt.name), [3, 3];
                            case 3:
                                return [2]
                        }
                    })
                })
            },
            en = function(e, t, n, o) {
                return r.__awaiter(Bt, void 0, void 0, function() {
                    var i, s;
                    return r.__generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return r.trys.push([0, 2, , 3]), [4, n.query({
                                    query: Lt,
                                    variables: {
                                        videoCreatorID: t.channelId,
                                        videoID: t.contentId
                                    }
                                })];
                            case 1:
                                return i = r.sent().data, o.track(_t.SpadeEventType.ChommentUIAction, function(e, t, n) {
                                    return {
                                        action: "sync_vod_to_time",
                                        author_id: Number(e.commenter),
                                        channel: n.user.login,
                                        channel_id: Number(e.channelId),
                                        comment_id: e.id,
                                        event_source: "frontend",
                                        game: n.video.game ? n.video.game.name : null,
                                        login: t.session.user ? t.session.user.login : null,
                                        user_id: t.session.user ? Number(t.session.user.id) : null,
                                        vod_id: Number(e.contentId),
                                        vod_title: n.video.title,
                                        vod_ts: e.contentOffset,
                                        vod_type: Object(wt.a)(n.video.broadcastType)
                                    }
                                }(t, e.getState(), i)), [3, 3];
                            case 2:
                                return s = r.sent(), a.j.error(s, en.name), [3, 3];
                            case 3:
                                return [2]
                        }
                    })
                })
            },
            tn = (n("FKWv"), n("+8VM")),
            nn = (n("smiM"), "confirm-button"),
            on = "deny-button",
            an = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return kt.createElement(Ct._35, {
                        className: "twp-modal",
                        background: Ct.n.Base,
                        color: Ct.K.Alt,
                        padding: 3
                    }, kt.createElement("h3", null, this.props.title), kt.createElement(Ct._8, {
                        className: "twp-modal__message",
                        margin: {
                            bottom: 2
                        }
                    }, this.props.children), kt.createElement(Ct._8, {
                        display: Ct.R.Flex,
                        justifyContent: Ct._7.End
                    }, kt.createElement(Ct._8, {
                        margin: {
                            right: 1
                        }
                    }, kt.createElement(Ct.v, {
                        onClick: this.props.onDenyClick,
                        type: Ct.B.Hollow,
                        "data-test-selector": on
                    }, Object(a.d)("Cancel", "ConfirmationModal"))), kt.createElement(Ct.v, {
                        onClick: this.props.onConfirmClick,
                        type: Ct.B.Alert,
                        disabled: this.props.isConfirmDisabled,
                        "data-test-selector": nn
                    }, Object(a.d)("Ok", "ConfirmationModal"))), kt.createElement(tn.a, {
                        closeOnBackdropClick: !0
                    }))
                }, t
            }(kt.Component),
            rn = n("hXeO"),
            sn = n("5vPJ"),
            cn = n("kBA+"),
            ln = function(e) {
                var t = e.message,
                    n = null,
                    o = t.tokens.map(function(e, t) {
                        switch (e.type) {
                            case ve.a.Text:
                                return [kt.createElement("span", {
                                    key: t
                                }, e.content)];
                            case ve.a.Emote:
                                return [kt.createElement(rn.a, {
                                    key: t,
                                    emote: e.content
                                }), " "];
                            case ve.a.Link:
                                return [kt.createElement("span", {
                                    key: t
                                }, e.content.displayText)];
                            case ve.a.VideoLink:
                                return n ? [kt.createElement("span", {
                                    key: t
                                }, e.content.displayText)] : void(n = kt.createElement(cn.a, {
                                    key: t,
                                    id: e.content.id,
                                    url: e.content.url
                                }));
                            case ve.a.ClipLink:
                                return n ? [kt.createElement("span", {
                                    key: t
                                }, e.content.displayText)] : void(n = kt.createElement(sn.a, {
                                    key: t,
                                    slug: e.content.slug,
                                    forceNetworkRequest: !0
                                }));
                            case ve.a.Mention:
                                return [kt.createElement("span", {
                                    key: t
                                }, "@", e.content.recipient)];
                            default:
                                return null
                        }
                    });
                return o.push(n), kt.createElement("span", {
                    key: t.id,
                    style: {
                        color: e.allowActionTextColors && t.isAction ? t.userColor : ""
                    }
                }, Array.prototype.concat.apply([], o))
            },
            dn = n("6Agf"),
            un = /^[\x00-\x7F]*$/,
            mn = function(e) {
                return !un.test(e)
            },
            pn = function(e) {
                return mn(e.displayName) ? e.displayName + " (" + e.name + ")" : e.displayName
            },
            hn = n("3zLD"),
            gn = n("RH2O"),
            fn = n("Aj/L"),
            vn = n("bkpq"),
            bn = n("O0Qc"),
            kn = function(e, t, n) {
                return e && t && !n
            },
            Cn = n("HW6M"),
            yn = n("3T7g"),
            _n = n("CSlQ"),
            Sn = 15e3,
            En = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.autoDismissErrorTimeoutId = 0, t.clearDismissTimeout = function() {
                        window.clearTimeout(t.autoDismissErrorTimeoutId)
                    }, t.onManualErrorDismissClickHandler = function() {
                        t.props.onErrorDismissed(!0)
                    }, t.setAutoDismissTimeout = function() {
                        t.autoDismissErrorTimeoutId = window.setTimeout(function() {
                            t.props.onErrorDismissed()
                        }, Sn)
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.setAutoDismissTimeout()
                }, t.prototype.componentWillUpdate = function(e) {
                    this.props.message !== e.message && (this.clearDismissTimeout(), this.setAutoDismissTimeout())
                }, t.prototype.componentWillUnmount = function() {
                    this.clearDismissTimeout()
                }, t.prototype.render = function() {
                    var e = null;
                    return this.props.message === ie().chatReplayFilterError && (e = kt.createElement(Ct.Q, {
                        type: Ct._49.Span
                    }, " ", kt.createElement(Ct.Q, {
                        type: Ct._49.Span,
                        decoration: Ct._47.Underline
                    }, kt.createElement("a", {
                        onClick: this.props.onMessageClick
                    }, Object(re.d)("Click here to show all messages.", "CommentError"))))), kt.createElement(Ct._35, {
                        alignItems: Ct.c.Center,
                        background: Ct.n.Base,
                        className: "anim-swoop",
                        color: Ct.K.Error,
                        "data-test-selector": "vod-chat-error",
                        display: Ct.R.Flex,
                        flexWrap: Ct.U.NoWrap,
                        fullWidth: !0,
                        padding: {
                            y: 1,
                            x: 2
                        },
                        position: Ct._15.Absolute,
                        zIndex: Ct._62.Above
                    }, kt.createElement(Ct.Q, {
                        type: Ct._49.Span
                    }, this.props.message, e), kt.createElement(Ct._8, {
                        alignSelf: Ct.d.Start
                    }, kt.createElement(Ct.w, {
                        ariaLabel: Object(re.d)("Close", "CommentErrorComponent"),
                        icon: Ct._25.Close,
                        onClick: this.onManualErrorDismissClickHandler
                    })))
                }, t
            }(kt.Component),
            wn = n("mi6k"),
            Dn = n("c3pS"),
            On = n("Lx+S"),
            Mn = n("YhVV"),
            Rn = n("ieBa"),
            Tn = n("Tzcg"),
            Nn = n("czpb"),
            In = (n("9kjL"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.buildModerationDashboardURL = function() {
                        return Object(Nn.a)("/" + t.props.videoOwnerLogin + "/dashboard/moderation")
                    }, t.buildModerationPrefsURL = function() {
                        return Object(Nn.a)("/" + t.props.videoOwnerLogin + "/dashboard/settings/moderation")
                    }, t.onReplayModeChange = function(e) {
                        t.props.onReplayModeChange(e.currentTarget.checked)
                    }, t.onTimestampModeChange = function(e) {
                        t.props.onTimestampModeChange(e.currentTarget.checked)
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = null;
                    this.props.isUpload || (e = kt.createElement(Ct._8, {
                        display: Ct.R.Flex,
                        flexWrap: Ct.U.NoWrap,
                        justifyContent: Ct._7.Between,
                        key: "viewerReplayOption",
                        padding: {
                            bottom: 1
                        }
                    }, kt.createElement(Ct._8, null, Object(a.d)("Show me only messages posted during the live broadcast", "VideoChatSettings")), kt.createElement(Ct._8, {
                        flexShrink: 0
                    }, kt.createElement(Ct._51, {
                        checked: this.props.isReplayFilterOn,
                        "data-test-selector": "reply-mode",
                        onChange: this.onReplayModeChange
                    }))));
                    var t = [kt.createElement(Ct.Q, {
                        key: "moderationHeader",
                        bold: !0
                    }, Object(a.d)("Mod Tools", "VideoChatSettings"))];
                    return this.props.canSessionEditModerationSettings && t.push(kt.createElement(Ct._2, {
                        key: "moderationPrefs",
                        display: Ct.R.InlineBlock
                    }, kt.createElement("a", {
                        target: Object(Nn.b)() ? "_blank" : "",
                        href: this.buildModerationPrefsURL(),
                        "data-test-selector": "video_chat_settings_mod_prefs"
                    }, Object(a.d)("Change moderation preferences", "VideoChatSettings")))), this.props.canSessionModerateMessages && t.push(kt.createElement(Ct._2, {
                        key: "moderationDashboard",
                        display: Ct.R.InlineBlock
                    }, kt.createElement("a", {
                        target: Object(Nn.b)() ? "_blank" : "",
                        href: this.buildModerationDashboardURL(),
                        "data-test-selector": "video_chat_settings_mod_dashboard"
                    }, Object(a.d)("Moderate messages", "VideoChatSettings")))), kt.createElement(Ct._8, {
                        className: "video-chat__settings",
                        padding: {
                            x: 2,
                            y: 2
                        }
                    }, kt.createElement(Ct.Q, {
                        bold: !0
                    }, Object(a.d)("Viewer Settings", "VideoChatSettings")), e, kt.createElement(Ct._8, {
                        display: Ct.R.Flex,
                        justifyContent: Ct._7.Between,
                        padding: {
                            bottom: 1
                        }
                    }, kt.createElement(Ct._8, null, Object(a.d)("Hide timestamps", "VideoChatSettings")), kt.createElement(Ct._8, {
                        flexShrink: 0
                    }, kt.createElement(Ct._51, {
                        "data-test-selector": "timestamp-mode",
                        checked: this.props.hideTimestamps,
                        onChange: this.onTimestampModeChange
                    }))), t.length > 1 ? t : null)
                }, t
            }(kt.Component)),
            An = Object(_n.d)("ChatSettings")(In);
        var xn = Object(gn.b)(function(e) {
                return {
                    isReplayFilterOn: e.vodChat.comments.isReplayFilterOn,
                    hideTimestamps: e.vodChat.comments.hideTimestamps
                }
            }, function(e) {
                return {
                    onReplayModeChange: function(t) {
                        At({
                            setting: Rt,
                            value: t ? Nt : It
                        }), e(M(t))
                    },
                    onTimestampModeChange: function(t) {
                        At({
                            setting: Tt,
                            value: t ? Nt : It
                        }), e(I(t))
                    }
                }
            })(An),
            Fn = "@",
            Ln = "Enter",
            Un = "Escape",
            jn = " ",
            Bn = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    n.onKeyDown = function(e) {
                        switch (e.key) {
                            case Ln:
                                e.preventDefault(), n.createComment();
                                break;
                            case jn:
                                n.maybeUnpauseScrolling();
                                break;
                            case Fn:
                                n.setState({
                                    isMentionPaused: !n.state.isMentionPaused && n.props.isScrollingSynced || n.state.isMentionPaused
                                }), n.props.onScrollPause()
                        }
                    }, n.createComment = function() {
                        if ("" !== n.state.newMessageText) {
                            if (n.props.isPostCooldownActive) return n.setState({
                                showCoolDownState: !0
                            }), void n.props.onError(ie().messageCreatedTooQuickError);
                            n.props.onCreateComment(n.state.newMessageText), n.setState({
                                newMessageText: ""
                            }), n.autocompleteInputRef.setValue(""), n.maybeUnpauseScrolling()
                        }
                    }, n.setTextareaRef = function(e) {
                        n.textArea = e
                    }, n.setAutocompleteInputRef = function(e) {
                        n.autocompleteInputRef = e
                    }, n.maybeUnpauseScrolling = function() {
                        n.state.isMentionPaused && (n.setState({
                            isMentionPaused: !1
                        }), n.props.onScrollResume())
                    }, n.onChange = function(e) {
                        n.setState({
                            newMessageText: e
                        })
                    }, n.onEmoticonClick = function(e) {
                        n.autocompleteInputRef.setValue(n.state.newMessageText + " " + e), n.setState({
                            newMessageText: n.state.newMessageText + " " + e
                        }), n.maybeUnpauseScrolling()
                    }, n.getSessionSpecificEmotes = function() {
                        var e = Object(Mn.a)(n.props.currentUser.emoteSets);
                        return Object.keys(e).map(function(t) {
                            return {
                                id: t,
                                emotes: Object(Tn.b)([e[t]])
                            }
                        })
                    };
                    var o = null !== n.props.currentUser && (n.props.currentUser.id === n.props.videoOwnerID || !!n.props.currentUser.roles.isStaff),
                        a = null !== n.props.currentUser && (n.props.isModerator || n.props.currentUser.roles.isSiteAdmin || o);
                    return n.state = {
                        isMentionPaused: !1,
                        canSessionModerateMessages: a,
                        canSessionEditModerationSettings: o,
                        newMessageText: "",
                        showCoolDownState: !1
                    }, n
                }
                return r.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    e.isPostCooldownActive || this.setState({
                        showCoolDownState: !1
                    })
                }, t.prototype.render = function() {
                    var e = null;
                    (!this.props.isUpload || this.state.canSessionModerateMessages || this.state.canSessionEditModerationSettings) && (e = kt.createElement(On.b, null, kt.createElement(xn, {
                        canSessionEditModerationSettings: this.state.canSessionEditModerationSettings,
                        canSessionModerateMessages: this.state.canSessionModerateMessages,
                        videoOwnerLogin: this.props.videoOwnerLogin,
                        isUpload: this.props.isUpload
                    })));
                    var t = null;
                    return this.props.currentUser && (t = kt.createElement(Dn.d, {
                        emotes: this.getSessionSpecificEmotes()
                    })), kt.createElement("div", null, kt.createElement(Ct._8, {
                        position: Ct._15.Relative
                    }, kt.createElement(Dn.b, {
                        componentType: Dn.a.TextArea,
                        suggestionSource: Dn.c.Chat,
                        onValueUpdate: this.onChange,
                        onKeyDown: this.onKeyDown,
                        componentRefDelegate: this.setTextareaRef,
                        refDelegate: this.setAutocompleteInputRef,
                        paddingRight: 30,
                        placeholder: Object(a.d)("Post a message", "VideoChatInput"),
                        noResize: !0,
                        "data-a-target": "video-chat-input",
                        disabled: this.state.showCoolDownState
                    }, t), kt.createElement(Rn.a, {
                        channelOwnerID: this.props.videoOwnerID,
                        inputRef: this.textArea,
                        onClickEmote: this.onEmoticonClick,
                        attachTop: !0,
                        attachRight: !0,
                        position: Ct._15.Absolute
                    })), kt.createElement(Ct._8, {
                        margin: {
                            top: 1
                        },
                        justifyContent: Ct._7.Between,
                        display: Ct.R.Flex
                    }, e, kt.createElement("span", null), " ", kt.createElement(Ct.v, {
                        onClick: this.createComment,
                        disabled: this.state.showCoolDownState,
                        "data-a-target": "video-chat-submit-button"
                    }, kt.createElement(Ct._8, {
                        display: Ct.R.Flex
                    }, kt.createElement("span", null, Object(a.d)("Post at ", "CommentInput")), kt.createElement(Ct._8, {
                        margin: {
                            x: .5
                        },
                        display: Ct.R.Flex
                    }, kt.createElement(Ct._24, {
                        asset: Ct._25.GlyphLength
                    })), kt.createElement("span", null, Object(wn.b)(this.props.currentVideoTime))))))
                }, t
            }(kt.Component);
        var Vn = Object(_n.d)("MessageInput", {
                autoReportInteractive: !0
            })(Bn),
            Hn = function(e) {
                var t = e.offset,
                    n = e.onClick;
                return kt.createElement(Ct._8, {
                    margin: {
                        right: .5
                    }
                }, kt.createElement(Ct._52, {
                    align: Ct._53.Left,
                    direction: Ct._54.Top,
                    label: Object(a.d)("Jump to video", "TimeStamp")
                }, kt.createElement(Ct._6, {
                    onClick: n,
                    blurAfterClick: !0
                }, kt.createElement(Ct._8, {
                    padding: {
                        x: .5
                    }
                }, kt.createElement(Ct.Q, {
                    fontSize: Ct.V.Size7
                }, Object(wn.b)(t))))))
            },
            Pn = n("+V/3"),
            Wn = n("Nay6"),
            zn = n("rCmJ"),
            qn = n("2hJ3"),
            Kn = function(e, t) {
                var n = new URL("https://www.twitch.tv/videos/" + e);
                if (t) {
                    var o = he.stringify(t);
                    n.search = o
                }
                return n
            },
            Qn = n("Ryxq"),
            Gn = "ban-user",
            $n = "delete-comment-button",
            Yn = "reply-button",
            Jn = "relative-time-title",
            Zn = "share-button",
            Xn = "share-button-clicked",
            eo = 3e3,
            to = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        confirmationAction: null,
                        isMenuOpen: !1,
                        isLinkCopied: !1
                    }, t.dismissTimeoutID = 0, t.onToggleMenu = function() {
                        t.state.isMenuOpen ? t.closeMenu() : (t.setState({
                            isMenuOpen: !0
                        }), t.props.onOpen())
                    }, t.getContent = function() {
                        if ("function" == typeof t.state.confirmationAction) return kt.createElement(Ct._8, {
                            padding: {
                                y: 1
                            }
                        }, kt.createElement(Ct._35, {
                            display: Ct.R.Flex,
                            margin: {
                                x: 1
                            },
                            padding: {
                                bottom: .5
                            }
                        }, kt.createElement(Ct.Q, {
                            type: Ct._49.Span
                        }, Object(a.d)("Are you sure you want to perform this action?", "chomments.moderation.confirmAction"))), kt.createElement(Ct._8, {
                            display: Ct.R.Flex,
                            justifyContent: Ct._7.Center,
                            alignItems: Ct.c.Center
                        }, kt.createElement(Ct._8, {
                            display: Ct.R.Inline,
                            padding: {
                                right: 1
                            }
                        }, kt.createElement(Ct.v, {
                            type: Ct.B.Alert,
                            onClick: t.onContinueClickHandler,
                            "data-test-selector": nn
                        }, Object(a.d)("Yes", "MessageOptionsMenu"))), kt.createElement(Ct.v, {
                            type: Ct.B.Hollow,
                            onClick: t.onCancelClickHandler,
                            "data-test-selector": on
                        }, Object(a.d)("No", "MessageOptionsMenu"))));
                        var e = [];
                        t.props.isExpandedLayout || e.push(kt.createElement(Ct._35, {
                            key: t.props.context.comment.id,
                            color: Ct.K.Alt2,
                            display: Ct.R.Flex,
                            "data-test-selector": Jn
                        }, kt.createElement(Ct._35, {
                            margin: {
                                x: 1
                            },
                            padding: {
                                bottom: .5
                            },
                            fullWidth: !0,
                            borderBottom: !0
                        }, kt.createElement(Ct.Q, {
                            type: Ct._49.Span
                        }, Object(a.d)("Posted ", "MessageOptionsMenu"), Object(a.h)(t.props.context.comment.createdAt)))), kt.createElement(Ct._35, {
                            key: t.props.context.comment.id + "2",
                            display: Ct.R.Flex,
                            color: Ct.K.Link
                        }, kt.createElement(Ct._6, {
                            onClick: t.onReplyClickHandler,
                            "data-test-selector": Yn
                        }, kt.createElement(Ct._8, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, Object(a.d)("Reply to {userName}", {
                            userName: pn(t.props.context.author)
                        }, "MessageOptionsMenu")))));
                        var n = [];
                        t.props.isCurrentUserModerator && n.push(kt.createElement(Ct._8, {
                            key: t.props.context.comment.id,
                            display: Ct.R.Flex
                        }, kt.createElement(Ct._6, {
                            alert: !0,
                            onClick: t.onDeleteButtonClickHandler,
                            "data-test-selector": $n
                        }, kt.createElement(Ct._35, {
                            margin: {
                                x: 1
                            },
                            padding: {
                                y: .5
                            },
                            borderBottom: !0
                        }, Object(a.d)("Delete", "MessageOptionsMenu")))), kt.createElement(Ct._8, {
                            key: t.props.context.comment.id + "2",
                            display: Ct.R.Flex
                        }, kt.createElement(Ct._6, {
                            alert: !0,
                            onClick: t.onBanUserClickHandler,
                            "data-test-selector": Gn
                        }, kt.createElement(Ct._8, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, Object(a.d)("Ban User", "MessageOptionsMenu")))));
                        var o = kt.createElement(Ct._6, {
                            onClick: t.onShareClick,
                            "data-test-selector": Zn
                        }, kt.createElement(Ct._8, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, Object(a.d)("Copy Link", "MessageOptionsMenu")));
                        t.state.isLinkCopied && (o = kt.createElement(Ct.v, {
                            fullWidth: !0,
                            icon: Ct._25.Check,
                            type: Ct.B.Success,
                            "data-test-selector": Xn
                        }, kt.createElement(Ct._8, {
                            display: Ct.R.Flex,
                            alignItems: Ct.c.Center,
                            justifyContent: Ct._7.Start
                        }, Object(a.d)("Copied to clipboard", "MessageOptionsMenu"))));
                        var r = kt.createElement(Ct._35, {
                            display: Ct.R.Flex,
                            fullWidth: !0,
                            key: t.props.context.comment.id + "-share",
                            color: Ct.K.Link
                        }, o);
                        return kt.createElement(Ct._8, {
                            padding: {
                                y: 1
                            }
                        }, e, r, n)
                    }, t.closeMenu = function() {
                        t.setState({
                            isMenuOpen: !1,
                            confirmationAction: null,
                            isLinkCopied: !1
                        }), t.props.onClose()
                    }, t.onShareClick = function() {
                        var e = t.props.context.comment,
                            n = e.contentId,
                            o = Kn(n, {
                                tt_medium: "video_chat",
                                tt_content: "message_share_link",
                                t: Object(Qn.a)(e.contentOffset),
                                comment: e.id
                            });
                        return Object(qn.a)(o.toString()), t.setState({
                            isLinkCopied: !0
                        }, function() {
                            return t.dismissTimeoutID = setTimeout(function() {
                                t.setState({
                                    isLinkCopied: !1
                                })
                            }, eo)
                        }), xt(e, o)
                    }, t.onReplyClickHandler = function() {
                        t.props.onReplyClick(pn(t.props.context.author)), t.closeMenu()
                    }, t.onBanUserClickHandler = function() {
                        t.setState(function(e) {
                            return r.__assign({}, e, {
                                confirmationAction: t.props.onBanUserClick
                            })
                        })
                    }, t.onDeleteButtonClickHandler = function() {
                        t.setState(function(e) {
                            return r.__assign({}, e, {
                                confirmationAction: t.props.onDeleteCommentClick
                            })
                        })
                    }, t.onContinueClickHandler = function() {
                        t.state.confirmationAction && t.state.confirmationAction(), t.closeMenu()
                    }, t.onCancelClickHandler = function() {
                        t.setState(function(e) {
                            return r.__assign({}, e, {
                                confirmationAction: null
                            })
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentWillUnmount = function() {
                    clearTimeout(this.dismissTimeoutID)
                }, t.prototype.render = function() {
                    return kt.createElement(Ct._8, {
                        position: Ct._15.Relative
                    }, kt.createElement(zn.a, {
                        onClickOut: this.closeMenu
                    }, kt.createElement(Ct.w, {
                        ariaLabel: Object(a.d)("Message Actions Menu", "VideoCommentsMenu"),
                        size: Ct.x.Small,
                        type: Ct.y.Secondary,
                        "data-test-selector": "menu-button",
                        icon: Ct._25.More,
                        onClick: this.onToggleMenu
                    }), kt.createElement(Ct.q, {
                        direction: Ct.r.BottomRight,
                        show: this.state.isMenuOpen,
                        size: Ct.s.Small,
                        offsetX: "0.5rem"
                    }, this.getContent())))
                }, t
            }(kt.Component),
            no = (n("k2hM"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        forceMenuVisibility: !1
                    }, t.onBanUserClickHandler = function() {
                        t.props.onBanUserClick({
                            bannedUser: t.props.context.comment.commenter,
                            targetChannel: t.props.context.comment.channelId,
                            comment: t.props.context.comment
                        })
                    }, t.onDeleteCommentClickHandler = function() {
                        t.props.onDeleteCommentClick(t.props.context.comment)
                    }, t.onMenuOpenHandler = function() {
                        t.props.onDisableSync(), t.setState({
                            forceMenuVisibility: !0
                        })
                    }, t.onMenuCloseHandler = function() {
                        t.setState({
                            forceMenuVisibility: !1
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e, t, n, o = this.props,
                        a = o.context,
                        r = o.badgeSets,
                        i = o.currentUser,
                        s = !!i && a.comment.commenter === i.id,
                        c = void 0 !== a.comment.userBadges[Pn.a],
                        l = Cn("video-chat__message-menu", {
                            "video-chat__message-menu--force-visible": this.state.forceMenuVisibility
                        }),
                        d = kt.createElement(Ct._8, {
                            className: l,
                            "data-test-selector": "menu-options-wrapper",
                            flexShrink: 0
                        }, kt.createElement(to, {
                            context: a,
                            isCurrentUserModerator: this.props.isCurrentUserModerator,
                            isExpandedLayout: this.props.isExpandedLayout,
                            onBanUserClick: this.onBanUserClickHandler,
                            onClose: this.onMenuCloseHandler,
                            onDeleteCommentClick: this.onDeleteCommentClickHandler,
                            onOpen: this.onMenuOpenHandler,
                            onReplyClick: this.props.onReplyClick
                        })),
                        u = Cn("video-chat__message-author", ((n = {})["video-chat__message-author--me"] = s, n["video-chat__message-author--creator"] = c, n)),
                        m = s || c ? "" : a.comment.message.userColor,
                        p = kt.createElement(Ct._2, {
                            padding: {
                                x: .5
                            }
                        }, kt.createElement("span", null, ":"));
                    return a.comment.message.isAction && (p = kt.createElement(Ct._2, {
                        padding: {
                            right: .5
                        }
                    }, kt.createElement("span", null))), kt.createElement(Ct._8, {
                        alignItems: Ct.c.Start,
                        display: Ct.R.Flex,
                        flexWrap: Ct.U.NoWrap
                    }, kt.createElement(Ct._8, {
                        flexGrow: 1
                    }, kt.createElement(yn.b, {
                        badgesToRender: a.comment.userBadges,
                        badgeSets: r
                    }), kt.createElement("a", {
                        className: u,
                        "data-test-selector": "comment-author-selector",
                        "data-tt_content": "tab_videos",
                        "data-tt_medium": "video-message-author",
                        href: "/" + a.author.name,
                        rel: "noopener noreferrer",
                        target: "_blank"
                    }, kt.createElement(Wn.a, {
                        userData: (e = a.author, t = m, {
                            userID: e.id,
                            userDisplayName: e.displayName,
                            userType: dn.a.User,
                            isIntl: mn(e.displayName),
                            userLogin: e.name,
                            color: t
                        }),
                        highlighted: s || c
                    })), kt.createElement(Ct._8, {
                        display: Ct.R.Inline,
                        className: "video-chat__message",
                        "data-test-selector": "comment-message-selector"
                    }, p, kt.createElement(ln, {
                        message: a.comment.message,
                        allowActionTextColors: !0
                    }))), d)
                }, t
            }(kt.Component)),
            oo = (n("jvcJ"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onReplyClickHandler = function() {
                        t.props.replyCommentContext ? t.props.onReplyClick(pn(t.props.replyCommentContext.author)) : t.props.onReplyClick()
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = Object(a.d)("Reply", "DashboardModerationReplyButton");
                    return "vod-message" === this.props.context ? kt.createElement("button", {
                        className: "video-chat-reply-button",
                        onClick: this.onReplyClickHandler,
                        "data-test-selector": "parent-reply-button"
                    }, kt.createElement(Ct._8, {
                        display: Ct.R.Flex
                    }, kt.createElement(Ct._8, {
                        className: "video-chat-reply-button__icon",
                        display: Ct.R.Flex,
                        padding: {
                            right: .5
                        }
                    }, kt.createElement(Ct._24, {
                        width: 13,
                        height: 13,
                        asset: Ct._25.Conversations,
                        type: Ct._26.Inherit
                    })), kt.createElement(Ct.Q, {
                        align: Ct._59.Middle,
                        type: Ct._49.Span
                    }, e))) : "mod-dashboard" === this.props.context ? kt.createElement(Ct.w, {
                        ariaLabel: e,
                        type: Ct.y.Hollow,
                        icon: Ct._25.Conversations,
                        onClick: this.onReplyClickHandler,
                        "data-test-selector": "moderation-reply-button",
                        "data-a-selector": "qa-vod-chat-reply-button"
                    }) : kt.createElement(Ct._35, {
                        color: Ct.K.Link,
                        display: Ct.R.Inline,
                        margin: {
                            left: 1
                        }
                    }, kt.createElement("button", {
                        onClick: this.onReplyClickHandler,
                        "data-test-selector": "reply-reply-button"
                    }, kt.createElement(Ct.Q, {
                        type: Ct._49.Span
                    }, e)))
                }, t
            }(kt.Component)),
            ao = (n("OvUa"), function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.submitReply = function() {
                        if ("" !== n.state.newReplyText) {
                            if (n.props.isCreationCoolDownActive) return n.setState({
                                showCoolDownState: !0
                            }), void(n.props.onError && n.props.onError(ie().messageCreatedTooQuickError));
                            n.props.onReplySubmit(n.state.newReplyText), n.setState({
                                newReplyText: ""
                            })
                        }
                    }, n.onChange = function(e) {
                        e.preventDefault(), n.setState({
                            newReplyText: e.currentTarget.value
                        })
                    }, n.onEmoticonClick = function(e) {
                        n.setState({
                            newReplyText: n.state.newReplyText + " " + e
                        })
                    }, n.onKeyDown = function(e) {
                        e.key === Ln && (e.preventDefault(), n.submitReply()), n.props.onReplyFormClose && e.key === Un && (e.preventDefault(), n.props.onReplyFormClose())
                    }, n.setTextareaRef = function(e) {
                        return n.textArea = e
                    }, n.state = {
                        newReplyText: t.replyToUserDisplayName ? "@" + t.replyToUserDisplayName + " " : "",
                        showCoolDownState: !1
                    }, n
                }
                return r.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    e.isCreationCoolDownActive || this.setState({
                        showCoolDownState: !1
                    }), e.replyToUserDisplayName && e.replyToUserDisplayName !== this.props.replyToUserDisplayName && this.setState({
                        newReplyText: "@" + e.replyToUserDisplayName + " "
                    })
                }, t.prototype.render = function() {
                    return kt.createElement(Ct._8, {
                        className: this.props.classNames,
                        position: Ct._15.Relative
                    }, kt.createElement(Ct._46, {
                        error: this.state.showCoolDownState,
                        maxLength: 512,
                        noResize: !0,
                        onChange: this.onChange,
                        onKeyDown: this.onKeyDown,
                        placeholder: Object(a.d)("Reply", "ReplyForm"),
                        refDelegate: this.setTextareaRef,
                        value: this.state.newReplyText
                    }), kt.createElement(Rn.a, {
                        attachRight: !0,
                        attachTop: !0,
                        channelOwnerID: this.props.videoOwnerID,
                        inputRef: this.textArea,
                        onClickEmote: this.onEmoticonClick,
                        position: Ct._15.Absolute
                    }))
                }, t
            }(kt.Component));
        var ro = function(e) {
                return kt.createElement(Ct._8, {
                    padding: {
                        y: .5,
                        left: 1
                    }
                }, kt.createElement(Ct._8, {
                    className: "vod-message__content"
                }, kt.createElement(no, {
                    badgeSets: e.badgeSets,
                    context: e.context,
                    currentUser: e.currentUser,
                    isCurrentUserModerator: e.isCurrentUserModerator,
                    isExpandedLayout: e.isExpandedLayout,
                    onBanUserClick: e.onBanUserClick,
                    onDeleteCommentClick: e.onDeleteCommentClick,
                    onDisableSync: e.onDisableSync,
                    onReplyClick: e.onReplyClick
                })))
            },
            io = "vod-message-reply",
            so = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.makeReplyButtonAndRelativeTime = function(e) {
                        return kt.createElement(Ct._8, {
                            display: Ct.R.Flex,
                            alignItems: Ct.c.Center
                        }, kt.createElement(oo, {
                            context: io,
                            onReplyClick: t.props.onReplyClick,
                            replyCommentContext: e
                        }), kt.createElement(Ct._2, {
                            margin: {
                                left: .5
                            }
                        }, kt.createElement(Ct.Q, {
                            color: Ct.K.Alt2,
                            fontSize: Ct.V.Size7,
                            type: Ct._49.Span
                        }, " • " + Object(a.h)(e.comment.createdAt))))
                    }, t.makeReply = function(e) {
                        var n = null;
                        return t.props.isExpandedLayout && (n = t.makeReplyButtonAndRelativeTime(e)), kt.createElement("li", {
                            key: e.comment.id
                        }, kt.createElement(ro, {
                            badgeSets: t.props.badgeSets,
                            context: e,
                            currentUser: t.props.currentUser,
                            isCurrentUserModerator: t.props.isCurrentUserModerator,
                            isExpandedLayout: t.props.isExpandedLayout,
                            onBanUserClick: t.props.onBanUserClick,
                            onDeleteCommentClick: t.props.onDeleteCommentClick,
                            onDisableSync: t.props.onDisableSync,
                            onReplyClick: t.props.onReplyClick
                        }), n)
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.replies.map(this.makeReply.bind(this));
                    return kt.createElement("ul", null, e)
                }, t
            }(kt.Component),
            co = (n("PNnM"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = null;
                    !this.props.parentMessage.comment.moreReplies || this.props.isReplayFilterOn && !this.props.isExpandedLayout || (e = kt.createElement(Ct._8, {
                        display: Ct.R.InlineBlock,
                        className: "vod-message__show-more-replies"
                    }, kt.createElement(yt, {
                        onClick: this.props.onLoadMoreRepliesClick
                    })));
                    var t = null;
                    this.props.showReplyForm && (t = kt.createElement(Ct._8, {
                        margin: {
                            top: .5,
                            bottom: 1,
                            x: 1
                        }
                    }, kt.createElement(ao, {
                        isCreationCoolDownActive: this.props.isCreationCoolDownActive || !1,
                        onError: this.props.onError,
                        onReplyFormClose: this.props.onReplyFormClose,
                        onReplySubmit: this.props.onReplySubmit,
                        replyToUserDisplayName: this.props.replyToUserDisplayName,
                        videoOwnerID: this.props.parentMessage.comment.channelId
                    })));
                    var n = null;
                    return this.props.isExpandedLayout && (n = kt.createElement(Ct._8, {
                        alignItems: Ct.c.Center,
                        display: Ct.R.Flex
                    }, kt.createElement(oo, {
                        context: "vod-message",
                        onReplyClick: this.props.onReplyClick,
                        replyCommentContext: this.props.parentMessage
                    }), kt.createElement(Ct._2, {
                        margin: {
                            left: .5
                        }
                    }, kt.createElement(Ct.Q, {
                        color: Ct.K.Alt2,
                        fontSize: Ct.V.Size7,
                        type: Ct._49.Span
                    }, " • " + Object(a.h)(this.props.parentMessage.comment.createdAt))))), kt.createElement(Ct._8, null, n, kt.createElement(Ct._8, {
                        margin: {
                            y: .5,
                            left: .5
                        },
                        className: Cn("vod-message__reply", "qa-vod-chat-reply")
                    }, e, kt.createElement(so, {
                        badgeSets: this.props.badgeSets,
                        currentUser: this.props.currentUser,
                        isCurrentUserModerator: this.props.isCurrentUserModerator,
                        isExpandedLayout: this.props.isExpandedLayout,
                        onBanUserClick: this.props.onBanUserClick,
                        onDeleteCommentClick: this.props.onDeleteCommentClick,
                        onDisableSync: this.props.onDisableSync,
                        onReplyClick: this.props.onReplyClick,
                        replies: this.props.parentMessage.replies
                    }), t))
                }, t
            }(kt.Component)),
            lo = (n("WULK"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        showReplyForm: !1,
                        replyToUserDisplayName: ""
                    }, t.onReplyClickHandler = function(e) {
                        t.setState({
                            showReplyForm: !0,
                            replyToUserDisplayName: e
                        }, t.props.onDisableSync)
                    }, t.onReplyFormCloseHandler = function() {
                        t.setState({
                            showReplyForm: !1,
                            replyToUserDisplayName: ""
                        })
                    }, t.onReplySubmitHandler = function(e) {
                        t.props.onCreateReply(e, t.props.messageContext.comment.id), t.setState({
                            showReplyForm: !1,
                            replyToUserDisplayName: ""
                        })
                    }, t.onTimestampClickHandler = function() {
                        t.props.onTimeStampClick(t.props.messageContext.comment.contentOffset, t.props.messageContext.comment)
                    }, t.onLoadMoreRepliesClickHandler = function() {
                        t.props.onLoadMoreRepliesClick(t.props.messageContext.comment.id, t.props.messageContext.comment.contentId)
                    }, t.refHandler = function(e) {
                        t.shouldFocusMessage() && t.props.onFocus(e)
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = null;
                    (this.props.isExpandedLayout || this.props.messageContext.replies.length > 0 || this.state.showReplyForm) && (e = kt.createElement(co, {
                        badgeSets: this.props.badgeSets,
                        currentUser: this.props.currentUser,
                        isCreationCoolDownActive: this.props.isCreationCoolDownActive,
                        isCurrentUserModerator: this.props.isCurrentUserModerator,
                        isExpandedLayout: this.props.isExpandedLayout,
                        isReplayFilterOn: this.props.isReplayFilterOn,
                        onBanUserClick: this.props.onBanUserClick,
                        onDeleteCommentClick: this.props.onDeleteCommentClick,
                        onDisableSync: this.props.onDisableSync,
                        onError: this.props.onError,
                        onLoadMoreRepliesClick: this.onLoadMoreRepliesClickHandler,
                        onReplyClick: this.onReplyClickHandler,
                        onReplyFormClose: this.onReplyFormCloseHandler,
                        onReplySubmit: this.onReplySubmitHandler,
                        parentMessage: this.props.messageContext,
                        replyToUserDisplayName: this.state.replyToUserDisplayName,
                        showReplyForm: this.state.showReplyForm
                    }));
                    var t = null;
                    !1 === this.props.hideTimestamp && (t = kt.createElement(Ct._8, {
                        className: "vod-message__header",
                        "data-test-selector": "message-timestamp",
                        display: Ct.R.Flex,
                        flexShrink: 0,
                        textAlign: Ct._45.Right
                    }, kt.createElement(Hn, {
                        offset: this.props.messageContext.comment.contentOffset,
                        onClick: this.onTimestampClickHandler
                    })));
                    var n, o = Cn("vod-message", ((n = {})["vod-message--focused"] = this.shouldFocusMessage(), n)),
                        a = this.props.messageContext.comment.highlight || !1;
                    return kt.createElement(Ct.e, {
                        duration: Ct.g.Medium,
                        enabled: a,
                        type: Ct.j.FadeIn
                    }, kt.createElement(Ct._8, {
                        alignItems: Ct.c.Start,
                        className: o,
                        "data-test-selector": "message-layout",
                        display: Ct.R.Flex,
                        flexWrap: Ct.U.NoWrap,
                        fullWidth: !0,
                        padding: {
                            y: .5,
                            left: this.props.hideTimestamp ? 2 : .5
                        },
                        refDelegate: this.refHandler
                    }, t, kt.createElement(Ct._8, {
                        fullWidth: !0
                    }, kt.createElement(no, {
                        badgeSets: this.props.badgeSets,
                        context: this.props.messageContext,
                        currentUser: this.props.currentUser,
                        isCurrentUserModerator: this.props.isCurrentUserModerator,
                        isExpandedLayout: this.props.isExpandedLayout,
                        onBanUserClick: this.props.onBanUserClick,
                        onDeleteCommentClick: this.props.onDeleteCommentClick,
                        onDisableSync: this.props.onDisableSync,
                        onReplyClick: this.onReplyClickHandler
                    }), e)))
                }, t.prototype.shouldComponentUpdate = function(e, t) {
                    return e.focus !== this.props.focus || e.isReplayFilterOn !== this.props.isReplayFilterOn || e.hideTimestamp !== this.props.hideTimestamp || t.showReplyForm !== this.state.showReplyForm || e.messageContext.replies.length !== this.props.messageContext.replies.length || t.replyToUserDisplayName !== this.state.replyToUserDisplayName
                }, t.prototype.shouldFocusMessage = function() {
                    return this.props.focus
                }, t
            }(kt.Component)),
            uo = (n("cPfx"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        firstScroll: !0
                    }, t.componentInitiatedScroll = !1, t.mouseDragging = !1, t.preventScrolling = !1, t.allowScrolling = function() {
                        t.preventScrolling = !1
                    }, t.atBottom = function() {
                        var e = t.commentListRef.scrollTop,
                            n = t.commentListRef.scrollHeight;
                        return e + t.commentListRef.clientHeight === n
                    }, t.bindCommentListRef = function(e) {
                        t.commentListRef = e
                    }, t.onMouseDown = function() {
                        t.preventScrolling = !1, t.mouseDragging = !0
                    }, t.onMouseUp = function() {
                        t.mouseDragging = !1
                    }, t.onScroll = function() {
                        t.shouldFireOnScroll() && (t.componentInitiatedScroll || (t.atBottom() ? t.props.onScrollBottom() : t.props.onScrollOffBottom()), t.componentInitiatedScroll = !1, t.preventScrolling = !0)
                    }, t.syncButtonClick = function() {
                        t.preventScrolling = !1, t.props.onSyncScrollClick()
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.onMount()
                }, t.prototype.componentDidUpdate = function() {
                    this.preventScrolling = !0, this.props.isScrollingSynced && (this.preventScrolling = !1, this.componentInitiatedScroll = !0, this.commentListRef.scrollTop = this.commentListRef.scrollHeight)
                }, t.prototype.render = function() {
                    var e, t = Cn("video-chat__message-list-wrapper", ((e = {})["video-chat__message-list-wrapper--unsynced"] = !this.props.isScrollingSynced, e)),
                        n = null;
                    return !1 === this.props.isScrollingSynced && (n = kt.createElement(Ct._2, {
                        className: "video-chat__sync-button",
                        padding: {
                            x: 1
                        },
                        position: Ct._15.Absolute,
                        attachBottom: !0
                    }, kt.createElement("button", {
                        onClick: this.syncButtonClick
                    }, Object(re.d)("Resume auto scroll", "MessageScrollArea")))), kt.createElement(Ct._35, {
                        fullHeight: !0,
                        overflow: Ct._11.Hidden,
                        position: Ct._15.Relative
                    }, kt.createElement("div", {
                        className: t,
                        onKeyDown: this.allowScrolling,
                        onMouseMove: this.allowScrolling,
                        onMouseDown: this.onMouseDown,
                        onMouseUp: this.onMouseUp,
                        onScroll: this.onScroll,
                        onWheel: this.allowScrolling,
                        ref: this.bindCommentListRef,
                        tabIndex: -1,
                        "data-test-selector": "video-chat-message-list-wrapper"
                    }, this.props.children), n)
                }, t.prototype.shouldFireOnScroll = function() {
                    return !this.mouseDragging && this.preventScrolling ? (this.componentInitiatedScroll = !1, !1) : !(this.state.firstScroll && !this.props.startSynced) || (this.setState({
                        firstScroll: !1
                    }), !1)
                }, t
            }(kt.Component)),
            mo = (n("PeVI"), 5e3);
        var po = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        commentAlreadyFocused: !1
                    }, t.badgeSets = new yn.c([], [], ""), t.createComment = function(e) {
                        var n = {
                            contentId: t.props.videoID,
                            contentOffsetSeconds: t.props.currentVideoTime,
                            contentType: V,
                            message: e
                        };
                        t.onCreate(n)
                    }, t.createReply = function(e, n) {
                        var o = {
                            message: e,
                            parentId: n
                        };
                        t.onCreate(o)
                    }, t.onErrorDismissedHandler = function(e) {
                        t.props.onError("");
                        var n = t.props.errorMessage === ie().chatReplayFilterError;
                        e && t.props.shouldSendReplayFilterError && n && t.props.onErrorDismissClick()
                    }, t.onErrorMessageClickHandler = function() {
                        t.props.onError(""), t.props.onTurnOffReplayFilter()
                    }, t.onMessageScrollAreaMount = function() {
                        t.props.highlightedMessageID && "" !== t.props.highlightedMessageID && t.props.onDisableSync()
                    }, t.onError = function(e) {
                        t.props.onError(e)
                    }, t.onLoadMoreRepliesHandler = function(e, n) {
                        var o = t.props.data.video.owner.cheer && t.props.data.video.owner.cheer.emotes || [];
                        t.props.onLoadMoreReplies(e, t.props.replyCursorMap, n, Object(vn.a)(o))
                    }, t.focusedCommentCallback = function(e) {
                        t.setState({
                            commentToFocus: e
                        })
                    }, t.startUnfocusTimeout = function() {
                        t.focusTimer = setTimeout(function() {
                            t.setState({
                                commentAlreadyFocused: !0
                            })
                        }, mo)
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentWillMount = function() {
                    this.props.onWillMount()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    void 0 !== e.highlightedMessageID && this.props.highlightedMessageID !== e.highlightedMessageID && (this.props.onPlayerSeekRequest(e.highlightTimestamp), this.props.onDisableSync(), this.setState({
                            commentAlreadyFocused: !1
                        })),
                        function(e, t) {
                            return !(t.data.loading || t.data.error || t.data.badges === e.data.badges && t.data.video.owner === e.data.video.owner)
                        }(this.props, e) && (this.badgeSets = new yn.c([], [], ""), e.data.loading || e.data.error || (this.badgeSets = new yn.c(e.data.badges, e.data.video.owner.broadcastBadges, e.data.video.owner.login))), (0, this.props.onUpdateBegan)(e, this.props)
                }, t.prototype.componentDidUpdate = function() {
                    (this.props.data.loading || this.props.data.error || !this.props.hasFetchedComments || this.props.latencyTracking.reportInteractive(), this.state.commentToFocus) && ((this.state.commentToFocus.nextElementSibling || this.state.commentToFocus).scrollIntoView(!0), this.setState({
                        commentToFocus: void 0
                    }), this.startUnfocusTimeout())
                }, t.prototype.componentWillUnmount = function() {
                    clearTimeout(this.focusTimer), this.props.latencyTracking.reportInteractive(), this.props.onUnmount(), this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e, t, n = this,
                        o = this.props,
                        a = o.comments,
                        r = o.highlightedMessageID,
                        i = o.data;
                    if (this.props.data.loading) e = kt.createElement(Ct._10, {
                        fillContent: !0
                    });
                    else if (this.props.data.error) e = kt.createElement(Ct._8, {
                        alignItems: Ct.c.Center,
                        "data-test-selector": "video-chat-error",
                        fullHeight: !0,
                        justifyContent: Ct._7.Center
                    }, kt.createElement(Ct.Q, {
                        italic: !0
                    }, Object(re.d)("Video Chat is currently unavailable.", "VideoChat")));
                    else {
                        var s = void 0;
                        s = this.props.hasFetchedComments && this.props.offsetRange === Ge ? kt.createElement(Ct._2, {
                            display: Ct.R.Flex,
                            margin: {
                                x: 1,
                                top: 2,
                                bottom: 1
                            },
                            alignItems: Ct.c.Center
                        }, kt.createElement("li", {
                            "data-test-selector": "no-comments-cta"
                        }, kt.createElement(Ct._2, {
                            margin: {
                                right: 1
                            }
                        }, kt.createElement("img", {
                            src: (t = 65, "https://static-cdn.jtvnw.net/emoticons/v1/" + t + "/1.0"),
                            srcSet: function(e) {
                                return "https://static-cdn.jtvnw.net/emoticons/v1/" + e + "/2.0 2x"
                            }(65)
                        })), Object(re.d)("Join the chat while watching the video!", "VideoChatComponent"))) : a.map(function(e, t) {
                            var o = !n.state.commentAlreadyFocused && e.comment.id === r,
                                a = t + 1 === n.props.comments.length,
                                s = !n.props.isScrollingSynced && a;
                            return kt.createElement(Ct._2, {
                                padding: s ? {
                                    bottom: 4
                                } : {},
                                key: e.comment.id,
                                fullWidth: !0
                            }, kt.createElement("li", null, kt.createElement(lo, {
                                badgeSets: n.badgeSets,
                                currentUser: i.currentUser,
                                focus: o,
                                isCreationCoolDownActive: n.props.isCreationCoolDownActive,
                                isCurrentUserModerator: n.props.isCurrentUserModerator,
                                isExpandedLayout: i.video.broadcastType === Ke.a.Upload,
                                isReplayFilterOn: n.props.isReplayFilterOn,
                                messageContext: e,
                                onBanUserClick: n.props.onBanUser,
                                onCreateReply: n.createReply,
                                onDeleteCommentClick: n.props.onDeleteComment,
                                onDisableSync: n.props.onDisableSync,
                                onError: n.onError,
                                onFocus: n.focusedCommentCallback,
                                onLoadMoreRepliesClick: n.onLoadMoreRepliesHandler,
                                onTimeStampClick: n.props.onPlayerSeekRequest,
                                hideTimestamp: n.props.hideTimestamps
                            })))
                        }), e = kt.createElement("ul", {
                            style: {
                                minHeight: 0
                            }
                        }, s)
                    }
                    var c, l = void 0 === this.props.highlightedMessageID,
                        d = null;
                    return "" !== this.props.errorMessage && (d = kt.createElement(En, {
                        message: this.props.errorMessage,
                        onErrorDismissed: this.onErrorDismissedHandler,
                        onMessageClick: this.onErrorMessageClickHandler
                    })), c = this.props.data.loading || this.props.data.error ? kt.createElement(Ct._14, {
                        "data-test-selector": "message-input-placeholder",
                        height: 90,
                        width: 340
                    }) : kt.createElement(Vn, {
                        currentUser: this.props.data.currentUser,
                        currentVideoTime: this.props.currentVideoTime,
                        onError: this.onError,
                        isModerator: !!this.props.data.video.owner.self && this.props.data.video.owner.self.isModerator,
                        isReplayMode: this.props.isReplayFilterOn,
                        isScrollingSynced: this.props.isScrollingSynced,
                        isPostCooldownActive: this.props.isCreationCoolDownActive,
                        isUpload: i.video.broadcastType === Ke.a.Upload,
                        onCreateComment: this.createComment,
                        onScrollPause: this.props.onDisableSync,
                        onScrollResume: this.props.onEnableSync,
                        videoOwnerID: this.props.data.video.owner.id,
                        videoOwnerLogin: this.props.data.video.owner.login
                    }), kt.createElement(Ct._35, {
                        className: Cn("video-chat", "qa-vod-chat"),
                        display: Ct.R.Flex,
                        background: Ct.n.Alt2,
                        borderLeft: !0,
                        color: Ct.K.Alt,
                        flexDirection: Ct.T.Column,
                        flexShrink: 0,
                        flexWrap: Ct.U.NoWrap,
                        fullHeight: !0,
                        fullWidth: !0,
                        position: Ct._15.Relative
                    }, kt.createElement(Ct._8, {
                        alignItems: Ct.c.Center,
                        className: "video-chat__header",
                        display: Ct.R.Flex,
                        flexShrink: 0,
                        justifyContent: Ct._7.Center
                    }, kt.createElement(Ct.Q, {
                        type: Ct._49.Span
                    }, Object(re.d)("Chat on Videos", "VideoChatPresentation"))), d, kt.createElement(uo, {
                        startSynced: l,
                        isScrollingSynced: this.props.isScrollingSynced,
                        onScrollOffBottom: this.props.onDisableSync,
                        onScrollBottom: this.props.onEnableSync,
                        onMount: this.onMessageScrollAreaMount,
                        onSyncScrollClick: this.props.onEnableSync
                    }, kt.createElement(Ct._8, {
                        display: Ct.R.Flex,
                        flexDirection: Ct.T.Column,
                        fullHeight: !0,
                        justifyContent: Ct._7.End
                    }, kt.createElement(Ct._2, {
                        display: Ct.R.Flex,
                        flexWrap: Ct.U.Wrap,
                        alignItems: Ct.c.End,
                        fullWidth: !0
                    }, e))), kt.createElement(Ct._8, {
                        className: "video-chat__input",
                        padding: {
                            top: 1,
                            bottom: 2,
                            x: 2
                        },
                        flexShrink: 0,
                        fullWidth: !0
                    }, c))
                }, t.prototype.onCreate = function(e) {
                    this.props.isLoggedIn ? this.props.onCreate(e) : this.props.onShowLogin()
                }, t
            }(kt.Component),
            ho = Object(_n.d)("VideoChat")(po),
            go = n("0TFF"),
            fo = 2;
        var vo = Object(gn.b)(function(e, t) {
                var n = {
                    comments: [],
                    currentVideoTime: e.vodChat.comments.currentVideoTime,
                    cursor: e.vodChat.comments.cursor,
                    errorMessage: e.vodChat.comments.errorMessage,
                    hasFetchedComments: e.vodChat.comments.hasLoadedData,
                    hasRequestedCurrentUserBlockList: e.vodChat.comments.hasLoadedCurrentUserBlockedList,
                    isCreationCoolDownActive: e.vodChat.comments.isPostCooldownActive,
                    isCurrentUserModerator: !1,
                    isLoggedIn: Object(fn.d)(e),
                    isReplayFilterOn: e.vodChat.comments.isReplayFilterOn,
                    isScrollingSynced: e.vodChat.comments.isScrollingSynced,
                    offsetRange: ot(e.vodChat.comments.comments),
                    replyCursorMap: e.vodChat.comments.replyCursorMap,
                    shouldSendReplayFilterError: !1,
                    hideTimestamps: e.vodChat.comments.hideTimestamps,
                    videoID: t.videoID
                };
                if (void 0 !== t.highlightedMessageID && (n.highlightedMessageID = t.highlightedMessageID), void 0 !== t.highlightTimestamp && (n.highlightTimestamp = t.highlightTimestamp), !t.data.loading && !t.data.error) {
                    var o = t.data,
                        a = o.currentUser,
                        r = o.video;
                    null !== a && a.roles && (n.isCurrentUserModerator = function(e, t) {
                        var n = e.id === t.id,
                            o = e.roles.isGlobalMod || e.roles.isSiteAdmin || e.roles.isStaff;
                        return !!t.self && t.self.isModerator || o || n
                    }(a, r.owner)), n.comments = Ye(e, t.data.video.broadcastType, n.isCurrentUserModerator, t.blockedUsers), n.shouldSendReplayFilterError = kn(e.vodChat.comments.isReplayFilterOn, t.data.video.broadcastType !== Ke.a.Upload, e.vodChat.comments.hasDismissedChatReplayError)
                }
                return n
            }, function(e, t) {
                return {
                    onUpdateBegan: function(n, o) {
                        if (o.videoID === n.videoID) {
                            if (!n.hasFetchedComments) {
                                var a = {
                                    bitsConfig: t.bitsConfig,
                                    offset: n.currentVideoTime,
                                    videoID: n.videoID
                                };
                                if (n.highlightTimestamp && n.currentVideoTime !== n.highlightTimestamp) return;
                                return n.highlightedMessageID && (a.highlightedMessageID = n.highlightedMessageID), void e(vt(zt, a))
                            }
                            if (n.offsetRange !== Ge) {
                                if (st((c = {
                                        cursor: n.cursor,
                                        currentVideoTime: n.currentVideoTime,
                                        offsetEndTime: n.offsetRange.endSec,
                                        offsetThreshold: fo
                                    }).cursor) && function(e) {
                                        var t = e.offsetEndTime - e.offsetThreshold;
                                        return e.currentVideoTime >= t && e.currentVideoTime <= e.offsetEndTime
                                    }({
                                        currentVideoTime: c.currentVideoTime,
                                        offsetEndTime: c.offsetEndTime,
                                        offsetThreshold: c.offsetThreshold
                                    })) return void e(vt(zt, {
                                    bitsConfig: t.bitsConfig,
                                    cursor: n.cursor.future,
                                    videoID: n.videoID
                                }));
                                if (i = (r = n).currentVideoTime < r.offsetRange.beginSec, s = r.currentVideoTime > r.offsetRange.endSec, i && ct(r.cursor) || s && st(r.cursor)) return void e(vt(zt, {
                                    bitsConfig: t.bitsConfig,
                                    offset: n.currentVideoTime,
                                    videoID: n.videoID
                                }))
                            }
                            var r, i, s, c
                        } else e(j(n.videoID))
                    },
                    onCreate: function(t) {
                        if (Object(bn.m)(t.message)) {
                            var n = Object(re.d)("Sorry, commands are not supported in Chat on Videos yet.", "VideoChatPresentation");
                            e(g(n))
                        } else e(vt(qt, t)), e(bt(Zt, t))
                    },
                    onError: function(t) {
                        e(g(t))
                    },
                    onErrorDismissClick: function() {
                        e(T())
                    },
                    onUnmount: function() {
                        e(y())
                    },
                    onLoadMoreReplies: function(t, n, o, a) {
                        e(vt(zt, it(t, n, o, a)))
                    },
                    onDisableSync: function() {
                        e(D())
                    },
                    onEnableSync: function() {
                        e(E())
                    },
                    onShowLogin: t.onShowLogin,
                    onBanUser: function(t) {
                        e(vt(gt, t)), e(bt(Yt, t))
                    },
                    onDeleteComment: function(t) {
                        e(vt(Kt, t)), e(bt(Jt, t))
                    },
                    onPlayerSeekRequest: function(n, o) {
                        t.onPlayerSeekRequest(n), void 0 !== o && e(bt(en, o))
                    },
                    onTurnOffReplayFilter: function() {
                        e(M(!1))
                    },
                    onWillMount: function() {
                        e(x())
                    }
                }
            }, function(e, t, n) {
                var o = t.onDisableSync;
                e.isScrollingSynced || (o = function() {});
                var a = t.onCreate;
                return e.shouldSendReplayFilterError && (a = function(e) {
                    t.onError(ie().chatReplayFilterError), t.onCreate(e)
                }), r.__assign({}, e, t, {
                    onDisableSync: o,
                    onCreate: a,
                    data: n.data
                })
            })(ho),
            bo = Object(hn.graphql)(go, {
                options: function(e) {
                    return {
                        variables: {
                            videoID: e.videoID
                        }
                    }
                },
                props: function(e) {
                    var t = e.ownProps,
                        n = e.data,
                        o = Object(vn.a)(n && !n.loading && !n.error && n.video.owner.cheer && n.video.owner.cheer.emotes || []),
                        a = {};
                    return n && !n.loading && !n.error && n.currentUser && n.currentUser.blockedUsers && (a = n.currentUser.blockedUsers.reduce(function(e, t) {
                        return t && (e[t.id] = !0), e
                    }, {})), r.__assign({}, t, {
                        data: n,
                        bitsConfig: o,
                        blockedUsers: a
                    })
                }
            })(vo);
        n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {
            return Ce
        }), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, "A", function() {
            return Je
        }), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, "o", function() {
            return y
        }), n.d(t, "q", function() {
            return B
        }), n.d(t, "u", function() {
            return st
        }), n.d(t, "v", function() {
            return ct
        }), n.d(t, "n", function() {
            return it
        }), n.d(t, "m", function() {
            return gt
        }), n.d(t, "x", function() {
            return ht
        }), n.d(t, "z", function() {
            return ft
        }), n.d(t, "B", function() {
            return vt
        }), n.d(t, "C", function() {
            return bt
        }), n.d(t, "k", function() {
            return yt
        }), n.d(t, "p", function() {
            return qt
        }), n.d(t, "r", function() {
            return Kt
        }), n.d(t, "y", function() {
            return zt
        }), n.d(t, "H", function() {
            return Qt
        }), n.d(t, "D", function() {
            return Yt
        }), n.d(t, "E", function() {
            return Zt
        }), n.d(t, "F", function() {
            return Jt
        }), n.d(t, "G", function() {
            return Xt
        }), n.d(t, !1, function() {}), n.d(t, "b", function() {
            return "pending_review"
        }), n.d(t, "d", function() {
            return "unpublished"
        }), n.d(t, "a", function() {
            return "pending_review_spam"
        }), n.d(t, "c", function() {
            return "published"
        }), n.d(t, !1, function() {}), n.d(t, "w", function() {
            return W
        }), n.d(t, "e", function() {
            return an
        }), n.d(t, !1, function() {}), n.d(t, "h", function() {
            return ln
        }), n.d(t, "t", function() {
            return Qe
        }), n.d(t, "s", function() {
            return pn
        }), n.d(t, "f", function() {
            return "mod-dashboard"
        }), n.d(t, "g", function() {
            return "mod-comment"
        }), n.d(t, "l", function() {
            return bo
        }), n.d(t, !1, function() {}), n.d(t, "j", function() {
            return ao
        }), n.d(t, "i", function() {
            return oo
        })
    },
    mbxv: function(e, t, n) {
        "use strict";
        var o = n("TToO"),
            a = n("GiK3"),
            r = n("+V/3"),
            i = n("Odds"),
            s = (n("2IkU"), n("6sO2")),
            c = n("vH/s"),
            l = function(e) {
                var t = Date.now() / 1e3;
                e.badge_type = e.badge_type.toLowerCase().replace(/( |\s)/g, "_"), s.o.tracking.track(c.SpadeEventType.ChatBadgeClick, Object.assign({
                    client_time: t
                }, e))
            };
        n.d(t, "a", function() {
            return d
        });
        var d = function(e) {
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
                    l({
                        badge_type: t.props.badge.title,
                        badge_url_target: t.targetURL
                    })
                }, t
            }
            return o.__extends(t, e), t.prototype.render = function() {
                var e = this.props.badge,
                    t = e.title,
                    n = e.image1x,
                    o = e.image2x,
                    r = e.image4x,
                    c = a.createElement("img", {
                        alt: t,
                        "aria-label": Object(s.d)("{badgeTitle} badge", {
                            badgeTitle: t
                        }, "Badge"),
                        className: "chat-badge",
                        src: n,
                        srcSet: n + " 1x, " + o + " 2x, " + r + " 4x",
                        onMouseOver: this.onMouseOver,
                        onMouseOut: this.onMouseOut
                    });
                return this.targetURL = this.getTargetURL(), "" !== this.targetURL && (c = a.createElement("a", {
                    href: this.targetURL,
                    onClick: this.onBadgeClickHandler,
                    target: "_blank",
                    "data-a-target": "chat-badge"
                }, c)), this.state.isHovering ? a.createElement(i._52, {
                    align: i._53.Left,
                    "data-a-target": "chat-badge",
                    display: i.R.Inline,
                    key: n,
                    label: t,
                    offsetY: "0.9rem"
                }, c) : c
            }, t.prototype.getTargetURL = function() {
                var e = this.props.badge;
                switch (e.clickAction) {
                    case r.d:
                        return e.clickURL;
                    case r.b:
                        return e.channelName ? this.getSubscriberLink() : "";
                    case r.c:
                        return "https://www.twitch.tv/products/turbo?ref=chat_badge";
                    default:
                        return ""
                }
            }, t.prototype.getSubscriberLink = function() {
                return "https://www.twitch.tv/" + this.props.badge.channelName + "/subscribe?ref=in_chat_subscriber_link"
            }, t
        }(a.Component)
    },
    mvQ0: function(e, t) {
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
    pexS: function(e, t) {
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
    pg5l: function(e, t, n) {
        var o = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ChatSettings_CurrentUser"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "channelLogin"
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
                                    value: "chatColor"
                                },
                                arguments: [],
                                directives: []
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
                                    value: "channelLogin"
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
                                            value: "displayBadges"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "FragmentSpread",
                                                name: {
                                                    kind: "Name",
                                                    value: "badge"
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
                end: 236
            }
        };
        o.loc.source = {
            body: '#import "twilight/features/badges/models/badge-fragment.gql"\nquery ChatSettings_CurrentUser($channelLogin: String!) {\ncurrentUser {\nid\nlogin\ndisplayName\nchatColor\n}\nuser(login: $channelLogin) {\nid\nself {\ndisplayBadges {\n...badge\n}\n}\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var a = {};
        o.definitions = o.definitions.concat(n("QU+n").definitions.filter(function(e) {
            if ("FragmentDefinition" !== e.kind) return !0;
            var t = e.name.value;
            return !a[t] && (a[t] = !0, !0)
        })), e.exports = o
    },
    qkCi: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return o
        }), n.d(t, "c", function() {
            return a
        }), n.d(t, "e", function() {
            return r
        }), n.d(t, "a", function() {
            return i
        });
        var o, a, r, i, s = n("aMxy");
        n.o(s, "ModerationActions") && n.d(t, "d", function() {
                return s.ModerationActions
            }),
            function(e) {
                e[e.Message = 0] = "Message", e[e.Moderation = 1] = "Moderation", e[e.ModerationAction = 2] = "ModerationAction", e[e.TargetedModerationAction = 3] = "TargetedModerationAction", e[e.AutoMod = 4] = "AutoMod", e[e.Connected = 5] = "Connected", e[e.Disconnected = 6] = "Disconnected", e[e.Reconnect = 7] = "Reconnect", e[e.Hosting = 8] = "Hosting", e[e.Unhost = 9] = "Unhost", e[e.Hosted = 10] = "Hosted", e[e.Subscription = 11] = "Subscription", e[e.Resubscription = 12] = "Resubscription", e[e.SubGift = 13] = "SubGift", e[e.Clear = 14] = "Clear", e[e.SubscriberOnlyMode = 15] = "SubscriberOnlyMode", e[e.FollowerOnlyMode = 16] = "FollowerOnlyMode", e[e.SlowMode = 17] = "SlowMode", e[e.EmoteOnlyMode = 18] = "EmoteOnlyMode", e[e.RoomMods = 19] = "RoomMods", e[e.RoomState = 20] = "RoomState", e[e.Raid = 21] = "Raid", e[e.Unraid = 22] = "Unraid", e[e.Ritual = 23] = "Ritual", e[e.Notice = 24] = "Notice", e[e.Info = 25] = "Info", e[e.BadgesUpdated = 26] = "BadgesUpdated", e[e.Purchase = 27] = "Purchase", e[e.BitsCharity = 28] = "BitsCharity", e[e.CrateGift = 29] = "CrateGift", e[e.RewardGift = 30] = "RewardGift"
            }(o || (o = {})),
            function(e) {
                e[e.Post = 0] = "Post", e[e.Action = 1] = "Action", e[e.PostWithMention = 2] = "PostWithMention"
            }(a || (a = {})),
            function(e) {
                e[e.Ban = 0] = "Ban", e[e.Timeout = 1] = "Timeout"
            }(r || (r = {})),
            function(e) {
                e[e.MessageRejectedPrompt = 0] = "MessageRejectedPrompt", e[e.MessageRejected = 1] = "MessageRejected", e[e.MessageAllowed = 2] = "MessageAllowed", e[e.MessageDenied = 3] = "MessageDenied"
            }(i || (i = {}))
    },
    r8Zf: function(e, t) {},
    rFlM: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = n("TToO"),
            a = n("3zLD"),
            r = n("RH2O"),
            i = n("F8kA"),
            s = n("V5M+"),
            c = n("Aj/L"),
            l = n("bkpq"),
            d = n("m9YJ"),
            u = n("GiK3"),
            m = n("6sO2"),
            p = n("yWCw"),
            h = n("zCIC"),
            g = n("j7/Y"),
            f = n("w9tK"),
            v = n("vH/s"),
            b = n("3T7g"),
            k = n("CSlQ"),
            C = n("5kgt"),
            y = n("oSFp"),
            _ = n("mw/a"),
            S = n("+Znq"),
            E = n("Odds"),
            w = (n("gtpq"), function(e) {
                return u.createElement("div", {
                    className: "mod-dashboard__ban-message"
                }, u.createElement(E._2, {
                    padding: {
                        left: 2
                    },
                    margin: {
                        y: 2
                    }
                }, u.createElement("ul", null, u.createElement("li", null, u.createElement("span", null, Object(m.d)("All messages from this viewer will be deleted from your channel and videos", "chomments.moderation.deletePreviousMessages"))), u.createElement("li", null, u.createElement("span", null, Object(m.d)("This viewer will not be able to chat on your channel, videos, or Pulse posts", "chomments.moderation.disallowFutureMessages"))))), u.createElement(E._35, {
                    background: E.n.Alt2,
                    display: E.R.Flex,
                    flexWrap: E.U.NoWrap,
                    padding: 2,
                    margin: {
                        y: 2
                    }
                }, u.createElement(E._2, {
                    margin: {
                        right: 1
                    }
                }, u.createElement("img", {
                    src: e.user.logo.toString(),
                    style: {
                        width: "4rem",
                        height: "4rem"
                    }
                })), u.createElement("div", null, u.createElement(E._35, {
                    margin: {
                        top: .5
                    },
                    fontSize: E.V.Size6,
                    color: E.K.Alt2
                }, u.createElement("a", {
                    href: "/" + e.user.name
                }, Object(d.s)(e.user))))))
            }),
            D = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isConfirmingBanUser: !1,
                        showReportMessageModal: !1
                    }, t.banUserClickHandler = function() {
                        t.balloonWrapperRef.toggleBalloon(!1), t.props.onShowBanUserModal(d.e, {
                            title: Object(m.d)("Ban this viewer?", "chomments.moderation.banUserActionConfirmV2"),
                            onConfirmClick: t.props.onBanUserClick,
                            onDenyClick: t.props.onCloseBanUserModal,
                            children: u.createElement(w, {
                                user: t.props.author
                            })
                        })
                    }, t.onReportMessageClick = function() {
                        t.balloonWrapperRef.toggleBalloon(!1), t.props.onMessageReportRequest(t.props.comment.id, t.props.comment.commenter, t.props.comment.channelId)
                    }, t.onPublishClickHandler = function() {
                        t.balloonWrapperRef.toggleBalloon(!1), t.props.onPublishClick && t.props.onPublishClick()
                    }, t.onUnpublishClickHandler = function() {
                        t.balloonWrapperRef.toggleBalloon(!1), t.props.onUnpublishClick && t.props.onUnpublishClick()
                    }, t.saveBalloonWrapperRef = function(e) {
                        t.balloonWrapperRef = e
                    }, t
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    var e = u.createElement(E.w, {
                            ariaLabel: Object(m.d)("Message Options Menu", "ModeratorCommentMenu"),
                            dropdown: !0,
                            icon: E._25.More,
                            "data-test-selector": "menu-button"
                        }),
                        t = null;
                    return "onPublishClick" in this.props ? t = u.createElement(E._6, {
                        onClick: this.onPublishClickHandler,
                        "data-test-selector": "publish"
                    }, u.createElement(E._8, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(m.d)("Publish Message", "chomments.moderation.publishMessageAction"))) : "onUnpublishClick" in this.props && (t = u.createElement(E._6, {
                        onClick: this.onUnpublishClickHandler,
                        "data-test-selector": "un-publish"
                    }, u.createElement(E._8, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(m.d)("Hold for Review", "chomments.moderation.unpublishMessageAction")))), u.createElement(E._8, {
                        display: E.R.Flex,
                        flexWrap: E.U.NoWrap
                    }, u.createElement(S.a, {
                        ref: this.saveBalloonWrapperRef
                    }, e, u.createElement(E.q, {
                        direction: E.r.BottomRight
                    }, u.createElement(E._8, {
                        padding: .5
                    }, u.createElement(E._6, {
                        onClick: this.banUserClickHandler,
                        "data-test-selector": "ban-user"
                    }, u.createElement(E._8, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(m.d)("Ban User", "chomments.moderation.menu.banUserAction"))), t, u.createElement(E._6, {
                        onClick: this.onReportMessageClick,
                        "data-test-selector": "report-message"
                    }, u.createElement(E._8, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(m.d)("Report Message", "chomments.moderation.reportMessageAction")))))))
                }, t
            }(u.Component);
        var O = Object(r.b)(null, function(e) {
                return {
                    onCloseBanUserModal: function() {
                        e(Object(s.c)())
                    },
                    onMessageReportRequest: function(t, n, o) {
                        e(Object(s.d)(y.a, {
                            title: Object(m.d)("Report this message?", "ModeratorCommentMenu"),
                            reportContext: {
                                contentType: _.a.VideoChatMessage,
                                contentID: t,
                                targetUserID: n,
                                additionalTrackingID: o
                            }
                        }))
                    },
                    onShowBanUserModal: function(t, n) {
                        e(Object(s.d)(t, n))
                    }
                }
            })(D),
            M = n("HW6M"),
            R = (n("sYdF"), function(e) {
                var t = "";
                switch (e.state) {
                    case d.b:
                        t = "AutoMod";
                        break;
                    case d.a:
                        t = "Spam";
                        break;
                    case d.d:
                    default:
                        t = "Moderator"
                }
                return u.createElement(E._8, {
                    className: "mod-comment__unpublished-message",
                    padding: {
                        left: 5,
                        y: 1
                    }
                }, u.createElement(E.Q, {
                    color: E.K.Link,
                    fontSize: E.V.Size5
                }, t, ": ", Object(m.d)("This message was held for review and is hidden from viewers.", "chomments.moderation.heldForReview")))
            }),
            T = (n("NRl2"), function(e) {
                var t = null;
                e.state !== d.c && (t = u.createElement(R, {
                    state: e.state
                }));
                var n, o = M(((n = {})[d.g + "__row--unpublished"] = e.state !== d.c, n));
                return u.createElement("div", {
                    className: o
                }, t, e.children)
            }),
            N = n("mi6k"),
            I = (n("Bo8e"), "comment"),
            A = "t",
            x = function(e) {
                var t = e.context,
                    n = t.video,
                    o = t.comment,
                    a = function(e) {
                        var t = "/videos/" + e.contentId,
                            n = new URLSearchParams;
                        return n.append(I, e.id), n.append(A, Object(d.t)(e.contentOffset)), t + "?" + n
                    }(e.context.comment);
                return u.createElement(E._8, {
                    className: "mod-dashboard__video",
                    margin: {
                        x: 2
                    }
                }, u.createElement("a", {
                    href: a,
                    target: "_blank"
                }, u.createElement(E.k, null, u.createElement("img", {
                    src: n.preview.small,
                    alt: e.context.video.title
                }))), u.createElement(E.v, {
                    ariaLabel: Object(m.d)("Go to message in video.", "MessageVideo"),
                    type: E.B.Text,
                    icon: E._25.Conversations,
                    fullWidth: !0,
                    linkTo: a,
                    targetBlank: !0,
                    "data-a-target": "moderator-message-video-button"
                }, Object(N.b)(o.contentOffset)))
            };
        var F = function(e) {
                var t = Object(m.h)(e.comment.createdAt),
                    n = Object(d.s)(e.user),
                    o = "/" + e.user.name;
                return e.showRelativeTimeOnly ? u.createElement("span", {
                    "data-test-selector": "createdat-message"
                }, t) : Object(d.w)(e.comment) ? u.createElement("span", {
                    "data-test-selector": "reply-createdat-message"
                }, Object(m.d)("{user} replied {when}", {
                    user: u.createElement("a", {
                        href: o,
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, n),
                    when: t
                }, "chomments.moderation.userRepliedWhen")) : u.createElement("span", {
                    "data-test-selector": "parent-createdat-message"
                }, Object(m.d)("{user} left a message {when}", {
                    user: u.createElement("a", {
                        href: o,
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, n),
                    when: t
                }, "chomments.moderation.userLeftMessageWhen"))
            },
            L = (n("LDoa"), function(e) {
                return u.createElement(E._8, {
                    display: E.R.Flex,
                    flexWrap: E.U.NoWrap
                }, u.createElement(E._8, {
                    margin: {
                        right: 1
                    }
                }, u.createElement(E.m, {
                    alt: e.author.displayName,
                    src: e.author.logo.toString(),
                    size: 40
                })), u.createElement(E._35, {
                    fontSize: E.V.Size5,
                    color: E.K.Alt,
                    className: d.f + "-message"
                }, u.createElement(d.h, {
                    allowActionTextColors: !1,
                    message: e.comment.message
                }), u.createElement(E._35, {
                    margin: {
                        top: .5
                    },
                    fontSize: E.V.Size6,
                    color: E.K.Alt2
                }, u.createElement(b.b, {
                    badgesToRender: e.comment.userBadges,
                    badgeSets: e.badgeSets
                }), u.createElement(F, {
                    comment: e.comment,
                    user: e.author,
                    showRelativeTimeOnly: e.showRelativeTimeOnly || !1
                }))))
            }),
            U = (n("YiHX"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isTextAreaVisible: !1
                    }, t.deleteClickHandler = function() {
                        t.props.onShowDeleteModal(d.e, {
                            title: Object(m.d)("Delete this message?", "DashboardModerationReactionBar"),
                            onConfirmClick: t.props.onDeleteConfirmClick,
                            onDenyClick: t.props.onCloseDeleteModal,
                            children: u.createElement(E._35, {
                                background: E.n.Alt2,
                                padding: 2,
                                margin: {
                                    y: 2
                                }
                            }, u.createElement(L, {
                                author: t.props.messageAuthor,
                                badgeSets: t.props.badgeSets,
                                comment: t.props.comment,
                                showRelativeTimeOnly: !0
                            }))
                        })
                    }, t.onReplyClickHandler = function() {
                        t.setState({
                            isTextAreaVisible: !t.state.isTextAreaVisible
                        })
                    }, t.onCreateReplyHandler = function(e) {
                        var n = Object(d.w)(t.props.comment) ? t.props.comment.parentId : t.props.comment.id;
                        t.props.onCreateReplyClick(e, n), t.setState({
                            isTextAreaVisible: !1
                        })
                    }, t
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    var e = null,
                        t = null,
                        n = null;
                    return this.props.comment.state === d.c ? ((Object(d.w)(this.props.comment) && this.props.parentCommentState === d.c || !Object(d.w)(this.props.comment)) && (t = u.createElement(E._8, {
                        padding: {
                            x: .5
                        },
                        "data-test-selector": "reply-comment-button"
                    }, u.createElement(d.i, {
                        context: d.f,
                        onReplyClick: this.onReplyClickHandler
                    }))), this.state.isTextAreaVisible && (n = u.createElement(E._8, {
                        margin: {
                            top: 2,
                            bottom: 1,
                            left: 5
                        }
                    }, u.createElement(d.j, {
                        classNames: d.g + "__reply-form",
                        isCreationCoolDownActive: !1,
                        onReplySubmit: this.onCreateReplyHandler,
                        videoOwnerID: this.props.comment.channelId
                    })))) : e = u.createElement(E._8, {
                        padding: {
                            x: .5
                        }
                    }, u.createElement(E.v, {
                        type: E.B.Hollow,
                        "data-test-selector": "publish",
                        onClick: this.props.onPublishClick
                    }, Object(m.d)("Publish Message", "DashboardModerationReactionBar"))), u.createElement("div", null, u.createElement(E._8, {
                        display: E.R.InlineFlex,
                        margin: {
                            left: 5
                        },
                        padding: {
                            top: 1
                        }
                    }, t, e, u.createElement("div", {
                        className: "mod-dashboard__button--warning"
                    }, u.createElement(E.w, {
                        ariaLabel: Object(m.d)("Delete Message", "DashboardModerationReactionBar"),
                        type: E.y.Hollow,
                        "data-a-selector": "qa-mod-delete-button",
                        "data-test-selector": "delete-comment-button",
                        icon: E._25.Trash,
                        onClick: this.deleteClickHandler
                    }))), n)
                }, t
            }(u.Component));
        var j = Object(r.b)(null, function(e) {
                return {
                    onCloseDeleteModal: function() {
                        e(Object(s.c)())
                    },
                    onShowDeleteModal: function(t, n) {
                        e(Object(s.d)(t, n))
                    }
                }
            })(U),
            B = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onBanUserClickHandler = function() {
                        t.props.onBanUserClick(t.props.context.author.id, t.props.context.comment)
                    }, t.onPublishClickHandler = function() {
                        t.props.onToggleVisibilityClick({
                            comment: t.props.context.comment,
                            state: d.c
                        })
                    }, t.onUnpublishClickHandler = function() {
                        t.props.onToggleVisibilityClick({
                            comment: t.props.context.comment,
                            state: d.d
                        })
                    }, t
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    var e = this.props,
                        t = e.context,
                        n = e.onDeleteClick,
                        a = {
                            badgeSets: this.props.badgeSets,
                            comment: this.props.context.comment,
                            onBanUserClick: this.onBanUserClickHandler,
                            author: this.props.context.author
                        };
                    return t.comment.state === d.c ? a.onUnpublishClick = this.onUnpublishClickHandler : a.onPublishClick = this.onPublishClickHandler, u.createElement(T, {
                        state: t.comment.state
                    }, u.createElement(E._8, {
                        padding: {
                            top: 1,
                            left: 5,
                            right: 1,
                            bottom: 2
                        }
                    }, u.createElement(E.Y, null, u.createElement(E.L, {
                        cols: {
                            default: 12,
                            xs: 8,
                            sm: 10,
                            md: 11
                        }
                    }, u.createElement(E._8, {
                        display: E.R.Flex
                    }, u.createElement(L, {
                        author: t.author,
                        badgeSets: this.props.badgeSets,
                        comment: t.comment
                    })), u.createElement(j, {
                        badgeSets: this.props.badgeSets,
                        comment: t.comment,
                        onCreateReplyClick: this.props.onCreateReplyClick,
                        onDeleteConfirmClick: function() {
                            n(t.comment)
                        },
                        onPublishClick: this.onPublishClickHandler,
                        messageAuthor: t.author,
                        parentCommentState: this.props.parentCommentState
                    })), u.createElement(E.L, {
                        cols: {
                            default: 12,
                            xs: 4,
                            sm: 2,
                            md: 1
                        }
                    }, u.createElement(O, o.__assign({}, a))))))
                }, t
            }(u.Component),
            V = (n("KhMP"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    var e = this,
                        t = this.props.replies.map(function(t) {
                            return u.createElement("li", {
                                key: t.comment.id,
                                "data-a-target": "moderator-message-reply-" + t.comment.id
                            }, u.createElement(B, {
                                badgeSets: e.props.badgeSets,
                                context: t,
                                key: t.comment.id,
                                onBanUserClick: e.props.onBanUserClick,
                                onCreateReplyClick: e.props.onCreateReplyClick,
                                onDeleteClick: e.props.onDeleteClick,
                                onToggleVisibilityClick: e.props.onToggleVisibilityClick,
                                parentCommentState: e.props.parentCommentState
                            }))
                        });
                    return u.createElement("div", {
                        className: d.g + "__reply"
                    }, u.createElement("ul", null, t))
                }, t
            }(u.Component)),
            H = (n("ThJL"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onBanUserClickHandler = function() {
                        t.props.onBanUserClick(t.props.context.author.id, t.props.context.comment)
                    }, t.onDeleteClickHandler = function() {
                        t.props.onDeleteClick(t.props.context.comment)
                    }, t.onPublishClickHandler = function() {
                        t.props.onToggleVisibilityClick({
                            comment: t.props.context.comment,
                            state: d.c
                        })
                    }, t.onUnpublishClickHandler = function() {
                        t.props.onToggleVisibilityClick({
                            comment: t.props.context.comment,
                            state: d.d
                        })
                    }, t.onLoadMoreRepliesClickHandler = function() {
                        t.props.onLoadMoreRepliesClick(t.props.context.comment.id, t.props.context.video.id)
                    }, t
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.context,
                        t = {
                            badgeSets: this.props.badgeSets,
                            comment: e.comment,
                            onBanUserClick: this.onBanUserClickHandler,
                            author: e.author
                        };
                    e.comment.state === d.c ? t.onUnpublishClick = this.onUnpublishClickHandler : t.onPublishClick = this.onPublishClickHandler;
                    var n = null;
                    return e.comment.moreReplies && (n = u.createElement(E._35, {
                        fontSize: E.V.Size6,
                        padding: {
                            left: 5,
                            y: .5
                        }
                    }, u.createElement(d.k, {
                        onClick: this.onLoadMoreRepliesClickHandler
                    }))), u.createElement(E._35, o.__assign({
                        border: !0,
                        className: d.g + " qa-mod-comment",
                        fontSize: E.V.Size5
                    }, Object(C.a)(this.props)), u.createElement(T, {
                        state: e.comment.state
                    }, u.createElement(E.Y, null, u.createElement(E.L, {
                        cols: {
                            default: 12,
                            sm: 5,
                            md: 7,
                            lg: 8
                        }
                    }, u.createElement(E._8, {
                        display: E.R.Flex,
                        flexDirection: E.T.Column,
                        padding: {
                            y: 1,
                            left: 1
                        }
                    }, u.createElement(L, {
                        badgeSets: this.props.badgeSets,
                        comment: e.comment,
                        author: e.author
                    }), u.createElement(j, {
                        badgeSets: this.props.badgeSets,
                        comment: e.comment,
                        onCreateReplyClick: this.props.onCreateReplyClick,
                        onDeleteConfirmClick: this.onDeleteClickHandler,
                        onPublishClick: this.onPublishClickHandler,
                        messageAuthor: e.author
                    }))), u.createElement(E.L, {
                        cols: {
                            default: 12,
                            xs: 9,
                            sm: 5,
                            md: 4,
                            lg: 3
                        }
                    }, u.createElement(E._8, {
                        display: E.R.Flex,
                        flexDirection: E.T.Row,
                        padding: {
                            top: 1
                        }
                    }, u.createElement(x, {
                        context: e
                    }), u.createElement(E.Q, {
                        color: E.K.Base,
                        type: E._49.H5
                    }, e.video.title))), u.createElement(E.L, {
                        cols: {
                            default: 12,
                            xs: 3,
                            sm: 1
                        }
                    }, u.createElement(E._8, {
                        margin: {
                            top: 1
                        }
                    }, u.createElement(O, o.__assign({}, t))))), n), u.createElement(V, {
                        badgeSets: this.props.badgeSets,
                        onBanUserClick: this.props.onBanUserClick,
                        onCreateReplyClick: this.props.onCreateReplyClick,
                        onDeleteClick: this.props.onDeleteClick,
                        onToggleVisibilityClick: this.props.onToggleVisibilityClick,
                        replies: e.replies,
                        parentCommentState: e.comment.state
                    }))
                }, t
            }(u.Component)),
            P = (n("4amF"), Object(k.d)("ModeratorCommentList", {
                autoReportInteractive: !0
            })(function(e) {
                var t = e.comments.map(function(t, n) {
                    return u.createElement(E._2, {
                        key: t.comment.id,
                        margin: {
                            y: 1
                        }
                    }, u.createElement("li", {
                        className: d.g + " " + d.g + "__fadein"
                    }, u.createElement(H, {
                        "data-a-target": "moderator-message-" + n,
                        badgeSets: e.badgeSets,
                        context: t,
                        onDeleteClick: e.onDeleteClick,
                        onBanUserClick: e.onBanUserClick,
                        onCreateReplyClick: e.onCreateReplyClick,
                        onLoadMoreRepliesClick: e.onLoadMoreRepliesClick,
                        onToggleVisibilityClick: e.onToggleVisibilityClick
                    })))
                });
                return u.createElement("div", null, u.createElement("ul", null, t))
            })),
            W = n("rCmJ"),
            z = n("E8Jt"),
            q = n("h5eQ"),
            K = (n("FGVh"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.changeHandler = function(e) {
                        t.props.onChange(e.target.value)
                    }, t
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    return u.createElement(E._8, {
                        className: "search-bar"
                    }, u.createElement(E._27, {
                        disabled: this.props.disabled,
                        onChange: this.changeHandler,
                        placeholder: Object(m.d)("Search by video", "chomments.moderation.searchByVideoPlaceholder"),
                        value: this.props.searchTerm,
                        id: d.f + "-search"
                    }))
                }, t
            }(u.Component)),
            Q = (n("OFAp"), function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.searchInputChangeHandler = function(e) {
                        "" === e && "" !== n.state.searchInputValue ? n.props.onSearchTermReset() : "" !== e && n.props.onSearchTermChange(e), n.setState({
                            isShowingResults: "" !== e,
                            searchInputValue: e
                        })
                    }, n.resultClickHandler = function(e) {
                        var t = n.props.searchHits.find(function(t) {
                                return t.id === e
                            }),
                            o = "";
                        t && t.title && (o = t.title), n.setState({
                            isShowingResults: !1,
                            searchInputValue: o
                        }), n.props.onSearchResultClick(e)
                    }, n.closeResults = function() {
                        n.state.isShowingResults && n.setState({
                            isShowingResults: !1
                        })
                    }, n.state = {
                        isShowingResults: !1,
                        searchInputValue: n.props.searchTerm
                    }, n
                }
                return o.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.props.searchTerm !== e.searchTerm && this.setState({
                        searchInputValue: e.searchTerm
                    })
                }, t.prototype.render = function() {
                    var e = this,
                        t = "";
                    return t = 0 === this.props.searchHits.length ? [u.createElement(E._6, {
                        "data-test-selector": "no-results",
                        key: "no-results"
                    }, u.createElement(E._8, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(m.d)("No results found.", "chomments.moderation.noResults")))] : Object(z.a)(this.props.searchHits).map(function(t, n) {
                        var o = {
                            id: t.id,
                            lengthSeconds: t.length,
                            title: t.title,
                            previewThumbnailURL: t.thumbnail,
                            publishedAt: new Date(1e3 * t.createdAt).toDateString()
                        };
                        return u.createElement(E._6, {
                            key: "result-" + n,
                            onClick: function() {
                                e.resultClickHandler(o.id)
                            }
                        }, u.createElement(q.a, {
                            video: o
                        }))
                    }), u.createElement(E._8, {
                        position: E._15.Relative
                    }, u.createElement(W.a, {
                        onClickOut: this.closeResults
                    }, u.createElement(K, {
                        disabled: this.props.disabled,
                        searchTerm: this.state.searchInputValue,
                        onChange: this.searchInputChangeHandler
                    }), u.createElement(E.q, {
                        show: this.state.isShowingResults,
                        size: E.s.Large
                    }, u.createElement(h.b, {
                        className: "search-bar__search-results",
                        suppressScrollX: !0
                    }, u.createElement(E._8, {
                        padding: .5
                    }, t)))))
                }, t
            }(u.Component)),
            G = Object(k.d)("SearchFilter")(Q),
            $ = (n("r8Zf"), Object(k.d)("FilterOptions", {
                autoReportInteractive: !0
            })(function(e) {
                return u.createElement(G, {
                    disabled: e.disabled,
                    onSearchTermChange: e.onSearchTermChange,
                    onSearchResultClick: e.onSearchResultClick,
                    onSearchTermReset: e.onSearchTermReset,
                    searchHits: e.searchHits,
                    searchTerm: e.searchTerm
                })
            })),
            Y = Object(r.b)(function(e, t) {
                return {
                    searchHits: e.vodChat.moderation.searchHits,
                    searchTerm: t.selectedVideoTitle || ""
                }
            }, function(e, t) {
                return {
                    onSearchResultClick: function(e) {
                        t.onSearchClick(e)
                    },
                    onSearchTermChange: function(n) {
                        return e(Object(d.B)(d.z, {
                            searchTerm: n,
                            creatorId: t.creatorId
                        }))
                    },
                    onSearchTermReset: t.onClearFilters
                }
            })($),
            J = function(e) {
                return u.createElement(E._8, {
                    display: E.R.Flex,
                    justifyContent: E._7.Center
                }, u.createElement(E._8, {
                    margin: {
                        right: 1
                    }
                }, u.createElement(E.v, {
                    onClick: e.onNewerClick,
                    "data-test-selector": "newer-button",
                    disabled: !("onNewerClick" in e)
                }, Object(m.d)("Newer Messages", "chomments.dashboard.newerMessages"))), u.createElement(E.v, {
                    onClick: e.onOlderClick,
                    "data-test-selector": "older-button",
                    disabled: !("onOlderClick" in e)
                }, Object(m.d)("Older Messages", "chomments.dashboard.olderMessages")))
            },
            Z = (n("Y8Ax"), Object(m.d)("You currently have no messages. Add a message to one of your videos to encourage conversation in your community.", "ModerationDashboard")),
            X = Object(m.d)("You currently have no messages on this video. Add a message to this video to encourage conversation in your community.", "ModerationDashboard"),
            ee = Object(m.d)("You do not have permission to access this dashboard.", "ModerationPageComponent");

        function te(e) {
            return e.ownerLogin || e.match.params.channelName
        }
        var ne = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.onBanUserClickHandler = function(e, t) {
                        n.props.onBanUserClick({
                            targetChannel: n.props.data.user.id,
                            bannedUser: e,
                            comment: t
                        })
                    }, n.createReply = function(e, t) {
                        var o = {
                            message: e,
                            parentId: t
                        };
                        n.props.onCreateClick(o)
                    }, n.onLoadMoreRepliesHandler = function(e, t) {
                        n.props.onLoadMoreRepliesClick(e, n.props.replyCursorMap, t)
                    }, n.badgeSets = new b.c([], [], te(t)), n
                }
                return o.__extends(t, e), t.prototype.componentWillUpdate = function(e) {
                    this.props.onWillUpdate(this.props, e)
                }, t.prototype.componentDidUpdate = function() {
                    this.props.data && !this.props.data.loading && this.props.latencyTracking.reportInteractive(2)
                }, t.prototype.componentWillUnmount = function() {
                    this.props.onUnmount()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    (function(e, t) {
                        return t.data.badges !== e.data.badges || t.data.user !== e.data.user
                    })(this.props, e) && (this.badgeSets = new b.c([], [], te(this.props)), !e.data.loading && e.data.user && (this.badgeSets = new b.c(e.data.badges, e.data.user.broadcastBadges, te(e))))
                }, t.prototype.render = function() {
                    var e, t = this.props,
                        n = t.comments,
                        a = t.data;
                    if ("" !== t.errorMessage || !this.props.data.loading && ((e = this.props).data.loading || !(e.data.user.id === e.data.currentUser.id || e.data.user.self.isModerator || e.data.currentUser.roles.isStaff || e.data.currentUser.roles.isGlobalMod || e.data.currentUser.roles.isSiteAdmin))) return u.createElement(E._35, {
                        className: d.f + "__permissions",
                        color: E.K.Alt2,
                        textAlign: E._45.Center
                    }, u.createElement(E.Q, {
                        type: E._49.H3,
                        italic: !0,
                        "data-test-selector": "unauthorized-test-selector"
                    }, this.props.errorMessage || ee));
                    var r = null;
                    "" !== this.props.videoFilter && (r = u.createElement(E._8, {
                        margin: {
                            left: 1
                        }
                    }, u.createElement(E.v, {
                        onClick: this.props.onClearFiltersClick,
                        "data-test-selector": "clear-filters-button-test-selector"
                    }, Object(m.d)("Clear filters", "chomments.moderation.clearSearchFilters"))));
                    var i = null;
                    if (this.props.comments.length < 1 && !a.loading && !a.error && this.props.hasFetchedComments) {
                        var s = Z;
                        "" !== this.props.videoFilter && (s = X), i = u.createElement(E._35, {
                            className: d.f + "__empty",
                            color: E.K.Alt2,
                            textAlign: E._45.Center,
                            key: "modDashboardNoComments"
                        }, u.createElement(E.Q, {
                            type: E._49.H3,
                            italic: !0,
                            "data-test-selector": "no-comments-test-selector"
                        }, s))
                    }
                    var c = "";
                    void 0 !== a.video && (c = a.video.title);
                    var l = [i, u.createElement(P, {
                        badgeSets: this.badgeSets,
                        comments: n,
                        key: "modDashboardCommentList",
                        onBanUserClick: this.onBanUserClickHandler,
                        onCreateReplyClick: this.createReply,
                        onDeleteClick: this.props.onDeleteClick,
                        onLoadMoreRepliesClick: this.onLoadMoreRepliesHandler,
                        onToggleVisibilityClick: this.props.onToggleVisibilityClick
                    })];
                    return a.error ? l = [u.createElement(p.a, {
                        key: "modDashboardError",
                        message: Object(m.d)("Error loading data.", "chomments.moderation")
                    })] : !a.loading && this.props.hasFetchedComments || (l = [u.createElement(E._8, {
                        key: "modDashboardLoading",
                        display: E.R.Flex,
                        alignItems: E.c.Center,
                        fullHeight: !0
                    }, u.createElement(E._10, {
                        fillContent: !0
                    }))]), u.createElement(h.b, {
                        suppressScrollX: !0,
                        contentClassName: d.f + "__scroll-container"
                    }, u.createElement(E._8, {
                        padding: 2,
                        fullWidth: !0
                    }, u.createElement(E._35, {
                        className: d.f + "__filters",
                        fullWidth: !0,
                        padding: 2,
                        borderMarked: !0,
                        border: !0,
                        display: E.R.Flex
                    }, u.createElement(Y, {
                        creatorId: a.user && a.user.id || "",
                        disabled: !(a.user && a.user.id),
                        onSearchClick: this.props.onSearchClick,
                        onClearFilters: this.props.onClearFiltersClick,
                        selectedVideoTitle: c
                    }), r), l, u.createElement(J, o.__assign({}, oe(this.props)))))
                }, t
            }(u.Component),
            oe = function(e) {
                var t = {};
                return Object(d.u)(e.cursor) && (t.onNewerClick = function() {
                    window.scrollTo(0, 0), e.onLoadNewerClick(ae(e, e.cursor.future))
                }), Object(d.v)(e.cursor) && (t.onOlderClick = function() {
                    window.scrollTo(0, 0), e.onLoadOlderClick(ae(e, e.cursor.past))
                }), t
            },
            ae = function(e, t) {
                return "" !== e.videoFilter ? {
                    bitsConfig: e.bitsConfig,
                    cursor: t,
                    videoId: e.videoFilter
                } : {
                    bitsConfig: e.bitsConfig,
                    userId: e.data.user.id,
                    cursor: t
                }
            },
            re = Object(a.compose)(Object(k.d)("ModerationPage", {
                destination: f.a.ChannelDashboardModeration
            }), Object(g.a)({
                location: v.PageviewLocation.Dashboard
            }))(ne),
            ie = n("u1sb");
        var se = Object(i.f)(Object(r.b)(function(e, t) {
            return {
                ownerLogin: t.channelName || "",
                commentId: (n = t, o = new URLSearchParams(n.location.search).get("comment"), "" === n.location.search || null === o ? "" : o),
                comments: Object(d.A)(e),
                cursor: e.vodChat.comments.cursor,
                errorMessage: e.vodChat.comments.errorMessage,
                hasFetchedComments: e.vodChat.comments.hasLoadedData,
                replyCursorMap: e.vodChat.comments.replyCursorMap,
                sessionIsAuthenticated: Object(c.d)(e)
            };
            var n, o
        }, function(e, t) {
            return {
                onWillUpdate: function(n, o) {
                    if (o.sessionIsAuthenticated && function(e) {
                            return !e.data.loading
                        }(o) && function(e, t) {
                            return !t.hasFetchedComments || e.videoFilter !== t.videoFilter || e.commentFilter !== t.commentFilter || e.data.loading && !t.data.loading
                        }(n, o))
                        if (function(e) {
                                return "" !== e.videoFilter
                            }(o)) {
                            var a = {
                                    bitsConfig: o.bitsConfig,
                                    videoId: o.videoFilter || ""
                                },
                                r = new URLSearchParams(t.location.search).get("cursor");
                            null !== r && (a.cursor = r), e(Object(d.B)(d.x, a))
                        } else a = {
                            bitsConfig: o.bitsConfig,
                            userId: o.data.user.id
                        }, e(Object(d.B)(d.x, a))
                },
                onClearFiltersClick: function() {
                    t.history.push({
                        pathname: "",
                        search: ""
                    })
                },
                onDeleteClick: function(t) {
                    e(Object(d.B)(d.r, t)), e(Object(d.C)(d.F, t)), e(Object(s.c)())
                },
                onLoadOlderClick: function(t) {
                    e(Object(d.B)(d.x, t))
                },
                onLoadNewerClick: function(t) {
                    e(Object(d.B)(d.x, t))
                },
                onBanUserClick: function(t) {
                    e(Object(d.B)(d.m, t)), e(Object(d.C)(d.D, t)), e(Object(s.c)())
                },
                onCreateClick: function(t) {
                    e(Object(d.B)(d.p, t)), e(Object(d.C)(d.E, t))
                },
                onLoadMoreRepliesClick: function(n, o, a) {
                    e(Object(d.B)(d.y, Object(d.n)(n, o, a, t.bitsConfig)))
                },
                onToggleVisibilityClick: function(t) {
                    e(Object(d.B)(d.H, t)), e(Object(d.C)(d.G, t))
                },
                onUnmount: function() {
                    e(Object(d.o)())
                },
                onSearchClick: function(e) {
                    t.history.push({
                        pathname: "",
                        search: "?video=" + e
                    })
                }
            }
        }, function(e, t, n) {
            var a = o.__assign({}, n, e, {
                onWillUpdate: t.onWillUpdate,
                onDeleteClick: t.onDeleteClick,
                onBanUserClick: t.onBanUserClick,
                onCreateClick: t.onCreateClick,
                onLoadMoreRepliesClick: t.onLoadMoreRepliesClick,
                onToggleVisibilityClick: t.onToggleVisibilityClick,
                onUnmount: t.onUnmount,
                onSearchClick: t.onSearchClick,
                onClearFiltersClick: t.onClearFiltersClick,
                onLoadNewerClick: t.onLoadNewerClick,
                onLoadOlderClick: t.onLoadOlderClick
            });
            n.clearSearchParams && (a.onClearFiltersClick = n.clearSearchParams), n.setVideoParam && (a.onSearchClick = n.setVideoParam);
            var r = new URLSearchParams(n.location.search);
            return a.videoFilter = n.videoFilter || r.get("video") || "", a.commentFilter = n.commentFilter || r.get("comment") || "", a
        })(Object(a.graphql)(ie, {
            options: function(e) {
                return {
                    variables: {
                        dashboardOwnerLogin: e.ownerLogin || e.match.params.channelName,
                        hasVideoID: !!e.videoFilter,
                        videoID: e.videoFilter
                    }
                }
            },
            props: function(e) {
                var t = e.ownProps,
                    n = e.data,
                    a = Object(l.a)(n && !n.loading && !n.error && n.user.cheer && n.user.cheer.emotes || []);
                return o.__assign({}, t, {
                    data: n,
                    bitsConfig: a
                })
            }
        })(re)));
        n.d(t, "CommentModeratorPage", function() {
            return se
        })
    },
    "s+oZ": function(e, t) {
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
    sYdF: function(e, t) {},
    smiM: function(e, t) {},
    tSZx: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "VideoChatChannelAndCommentCreatorAndVideoTrackingContext"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "videoCreatorID"
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
                            value: "commentCreator"
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
                            value: "videoID"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "ID"
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
                            value: "users"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "ids"
                            },
                            value: {
                                kind: "ListValue",
                                values: [{
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "videoCreatorID"
                                    }
                                }, {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "commentCreator"
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
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 245
            }
        };
        n.loc.source = {
            body: "query VideoChatChannelAndCommentCreatorAndVideoTrackingContext($videoCreatorID: ID! $commentCreator: ID! $videoID: ID) {\nusers(ids: [$videoCreatorID $commentCreator]) {\nid\nlogin\n}\nvideo(id: $videoID) {\nid\nbroadcastType\ntitle\ngame {\nid\nname\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    u1sb: function(e, t, n) {
        var o = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "VideoModerationDashboard"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "dashboardOwnerLogin"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String"
                        }
                    }
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "videoID"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "ID"
                        }
                    }
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "hasVideoID"
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
                            value: "badges"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "badge"
                                },
                                directives: []
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
                                    value: "dashboardOwnerLogin"
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
                                    value: "broadcastBadges"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "badge"
                                        },
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
                                            value: "isModerator"
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
                                        value: "hasVideoID"
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
                                            value: "isGlobalMod"
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
                                    }, {
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
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 477
            }
        };
        o.loc.source = {
            body: '#import "twilight/features/badges/models/badge-fragment.gql"\n#import "twilight/features/chat/models/cheer-fragment.gql"\nquery VideoModerationDashboard($dashboardOwnerLogin: String $videoID: ID $hasVideoID: Boolean!) {\nbadges {\n...badge\n}\nuser(login: $dashboardOwnerLogin) {\nid\nbroadcastBadges {\n...badge\n}\n...cheer\ndisplayName\nself {\nisModerator\n}\n}\nvideo(id: $videoID) @include(if: $hasVideoID) {\nid\ntitle\n}\ncurrentUser {\nid\nlogin\nroles {\nisGlobalMod\nisSiteAdmin\nisStaff\n}\n}\n}',
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
        o.definitions = o.definitions.concat(r(n("QU+n").definitions)), o.definitions = o.definitions.concat(r(n("576g").definitions)), e.exports = o
    },
    urTJ: function(e, t, n) {
        "use strict";
        var o = n("mbxv");
        n.d(t, "a", function() {
            return o.a
        })
    },
    vh75: function(e, t, n) {
        "use strict";
        n.d(t, "d", function() {
            return o
        }), n.d(t, "e", function() {
            return a
        }), n.d(t, "f", function() {
            return r
        }), n.d(t, "g", function() {
            return i
        }), n.d(t, "k", function() {
            return s
        }), n.d(t, "h", function() {
            return c
        }), n.d(t, "i", function() {
            return l
        }), n.d(t, "j", function() {
            return d
        }), n.d(t, "l", function() {
            return u
        }), n.d(t, "c", function() {
            return m
        }), n.d(t, "b", function() {
            return p
        }), n.d(t, "n", function() {
            return h
        }), n.d(t, "m", function() {
            return g
        }), n.d(t, "p", function() {
            return f
        }), n.d(t, "o", function() {
            return v
        }), n.d(t, "t", function() {
            return b
        }), n.d(t, "s", function() {
            return k
        }), n.d(t, "v", function() {
            return C
        }), n.d(t, "u", function() {
            return y
        }), n.d(t, "x", function() {
            return _
        }), n.d(t, "w", function() {
            return S
        }), n.d(t, "a", function() {
            return E
        }), n.d(t, "q", function() {
            return w
        }), n.d(t, "r", function() {
            return D
        }), t.R = function(e, t) {
            return {
                type: u,
                channel: e,
                messages: t
            }
        }, t.B = function() {
            return {
                type: a
            }
        }, t.P = function() {
            return {
                type: _
            }
        }, t.I = function() {
            return {
                type: S
            }
        }, t.T = function() {
            return {
                type: r
            }
        }, t.Q = function() {
            return {
                type: o
            }
        }, t.L = function() {
            return {
                type: m
            }
        }, t.E = function() {
            return {
                type: p
            }
        }, t.M = function() {
            return {
                type: h
            }
        }, t.F = function() {
            return {
                type: g
            }
        }, t.K = function() {
            return {
                type: f
            }
        }, t.D = function() {
            return {
                type: v
            }
        }, t.J = function() {
            return {
                type: s
            }
        }, t.A = function(e, t) {
            return {
                type: d,
                channelLogin: e,
                duration: t
            }
        }, t.z = function(e) {
            return {
                type: l,
                duration: e
            }
        }, t.C = function() {
            return {
                type: c
            }
        }, t.N = function() {
            return {
                type: b
            }
        }, t.G = function() {
            return {
                type: k
            }
        }, t.O = function() {
            return {
                type: C
            }
        }, t.H = function() {
            return {
                type: y
            }
        }, t.y = function(e, t) {
            return {
                type: E,
                command: e.toLowerCase(),
                handler: t
            }
        }, t.S = function(e) {
            return {
                type: w,
                command: e.toLowerCase()
            }
        }, t.U = function(e) {
            return {
                type: D,
                customEvent: e
            }
        };
        var o = "chat.CHAT_HIDDEN",
            a = "chat.CHAT_RESET",
            r = "chat.CHAT_SHOWN",
            i = "chat.EMOTE_SETS_UPDATED",
            s = "chat.FOLLOWER_MODE_ENABLED",
            c = "chat.FOLLOWER_MODE_DISABLED",
            l = "chat.FOLLOWER_MODE_DURATION_CHANGED",
            d = "chat.FOLLOWER_MODE_DURATION_PREFERENCE_CHANGED",
            u = "chat.MESSAGES_UPDATED",
            m = "chat.AUTOMOD_ACTIONS_ENABLED",
            p = "chat.AUTOMOD_ACTIONS_DISABLED",
            h = "chat.MODERATION_ACTIONS_ENABLED",
            g = "chat.MODERATION_ACTIONS_DISABLED",
            f = "chat.MOD_ICONS_ENABLED",
            v = "chat.MOD_ICONS_DISABLED",
            b = "chat.SLOW_MODE_ENABLED",
            k = "chat.SLOW_MODE_DISABLED",
            C = "chat.SUBS_ONLY_MODE_ENABLED",
            y = "chat.SUBS_ONLY_MODE_DISABLED",
            _ = "chat.TIMESTAMPS_ENABLED",
            S = "chat.TIMESTAMPS_DISABLED",
            E = "chat.ADD_COMMAND",
            w = "chat.REMOVE_COMMAND",
            D = "chat.RENDER_SENT_CHAT_MESSAGE"
    },
    vjRp: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "VideoChatVideoTrackingContext"
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
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "ID"
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
            body: "query VideoChatVideoTrackingContext($videoID: ID) {\nvideo(id: $videoID) {\nid\nbroadcastType\ntitle\ngame {\nid\nname\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "y1/w": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "RecentRaidsModActions"
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
                                    value: "targetUserID"
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
                end: 190
            }
        };
        n.loc.source = {
            body: "query RecentRaidsModActions($targetUserID: ID! $channelID: ID!) {\n# This is currently backwards on the server\nchatRoomBanStatus(channelID: $targetUserID userID: $channelID) {\nisPermanent\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    }
});
//# sourceMappingURL=pages.dashboard-moderation-ebc7b31fd7b0090b48518dd5e897de46.js.map