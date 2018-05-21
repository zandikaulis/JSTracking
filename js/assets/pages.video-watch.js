webpackJsonp([37, 120], {
    "+/J2": function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e, t) {
            var n = i(e),
                r = Number(t);
            return n.setMilliseconds(r), n
        }
    },
    "+Aaf": function(e, t) {},
    "+DHI": function(e, t, n) {
        var i = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "LatestCollectionCarousel_User"
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
                                                            value: "PreviewCollection"
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
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 287
            }
        };
        i.loc.source = {
            body: '#import "twilight/features/video-carousel/components/collection-carousel/models/preview-collection-fragment.gql"\nquery LatestCollectionCarousel_User($creatorLogin: String!) {\nuser(login: $creatorLogin) {\nid\ndisplayName\ncollections(first:1) {\nedges {\nnode {\n...PreviewCollection\n}\n}\n}\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var r = {};
        i.definitions = i.definitions.concat(n("uDgl").definitions.filter(function(e) {
            if ("FragmentDefinition" !== e.kind) return !0;
            var t = e.name.value;
            return !r[t] && (r[t] = !0, !0)
        })), e.exports = i
    },
    "+V/3": function(e, t, n) {
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
    "+sSA": function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e) {
            var t = i(e);
            return t.setMilliseconds(999), t
        }
    },
    "/Cz7": function(e, t, n) {
        "use strict";
        t.a = function(e, t) {
            var n = new URL("https://www.twitch.tv/collections/" + e);
            t && (n.search = r.stringify(t));
            return n.toString()
        }, t.b = function(e, t) {
            var n = new URL("https://www.twitch.tv/videos/" + e);
            t && (n.search = r.stringify(i.__assign({}, t, {
                t: "number" == typeof t.t ? Object(a.a)(t.t) : void 0
            })));
            return n.toString()
        };
        var i = n("TToO"),
            r = n("OAwv"),
            a = (n.n(r), n("Ryxq"))
    },
    "/SNv": function(e, t, n) {
        e.exports = n.p + "assets/hearthstone-classes-b3b59eedbe78268cf62299a41ec09be1.png"
    },
    "/dIK": function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e, t) {
            var n = i(e),
                r = Number(t);
            return n.setDate(r), n
        }
    },
    "/nNw": function(e, t, n) {
        "use strict";
        var i = n("3Ybq");
        n.d(t, "DownloadStatus", function() {
            return i.a
        }), n.d(t, "ExportDestination", function() {
            return i.b
        }), n.d(t, "ExtraFilterType", function() {
            return i.c
        }), n.d(t, "RestrictionType", function() {
            return i.d
        }), n.d(t, "THUMBNAIL_TYPE_CUSTOM", function() {
            return i.e
        }), n.d(t, "VIDEO_STATUS_FAILED", function() {
            return i.j
        }), n.d(t, "VIDEO_STATUS_PENDING_TRANSCODE", function() {
            return i.k
        }), n.d(t, "VIDEO_STATUS_RECORDED", function() {
            return i.l
        }), n.d(t, "VIDEO_STATUS_RECORDING", function() {
            return i.m
        }), n.d(t, "VIDEO_STATUS_TRANSCODING", function() {
            return i.n
        }), n.d(t, "VIDEO_STATUS_UPLOADING", function() {
            return i.o
        }), n.d(t, "VideoPremiereStatus", function() {
            return i.p
        }), n.d(t, "VideoScope", function() {
            return i.q
        }), n.d(t, "availableVideoStatuses", function() {
            return i.r
        }), n.d(t, "pendingVideoStatuses", function() {
            return i.s
        });
        n("NfL5");
        var r = n("Rv0e");
        n.n(r);
        n.o(r, "DropdownMenuNavDirection") && n.d(t, "DropdownMenuNavDirection", function() {
            return r.DropdownMenuNavDirection
        }), n.o(r, "EditModalErrorOrigin") && n.d(t, "EditModalErrorOrigin", function() {
            return r.EditModalErrorOrigin
        }), n.o(r, "KEY_ADD_TO") && n.d(t, "KEY_ADD_TO", function() {
            return r.KEY_ADD_TO
        }), n.o(r, "KEY_COLLECTIONS") && n.d(t, "KEY_COLLECTIONS", function() {
            return r.KEY_COLLECTIONS
        }), n.o(r, "KEY_ROOT") && n.d(t, "KEY_ROOT", function() {
            return r.KEY_ROOT
        }), n.o(r, "NotificationType") && n.d(t, "NotificationType", function() {
            return r.NotificationType
        });
        var a = n("Ydo4");
        n.d(t, "NotificationType", function() {
            return a.a
        });
        var o = n("vv3i");
        n.n(o);
        n.o(o, "DropdownMenuNavDirection") && n.d(t, "DropdownMenuNavDirection", function() {
            return o.DropdownMenuNavDirection
        }), n.o(o, "EditModalErrorOrigin") && n.d(t, "EditModalErrorOrigin", function() {
            return o.EditModalErrorOrigin
        }), n.o(o, "KEY_ADD_TO") && n.d(t, "KEY_ADD_TO", function() {
            return o.KEY_ADD_TO
        }), n.o(o, "KEY_COLLECTIONS") && n.d(t, "KEY_COLLECTIONS", function() {
            return o.KEY_COLLECTIONS
        }), n.o(o, "KEY_ROOT") && n.d(t, "KEY_ROOT", function() {
            return o.KEY_ROOT
        });
        var s = n("O4od");
        n.d(t, "EditModalErrorOrigin", function() {
            return s.a
        });
        var l = n("ywOv");
        n.d(t, "DropdownMenuNavDirection", function() {
            return l.a
        }), n.d(t, "KEY_ADD_TO", function() {
            return l.b
        }), n.d(t, "KEY_COLLECTIONS", function() {
            return l.c
        }), n.d(t, "KEY_ROOT", function() {
            return l.d
        })
    },
    "024F": function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e) {
            return i(e).getMilliseconds()
        }
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
    "0LAu": function(e, t, n) {
        var i = n("MIQa");
        e.exports = function() {
            return i(new Date)
        }
    },
    "0TFF": function(e, t, n) {
        var i = {
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
        i.loc.source = {
            body: '#import "twilight/features/badges/models/badge-fragment.gql"\n#import "twilight/features/chat/models/cheer-fragment.gql"\nquery VideoComments($videoID: ID!) {\nbadges {\n...badge\n}\ncurrentUser {\nid\nroles {\nisStaff\nisSiteAdmin\nisGlobalMod\n}\nblockedUsers {\nid\n}\nemoteSets {\nid\nemotes {\nid\ntoken\n}\n}\n}\nvideo(id: $videoID options: { includePrivate: true }) {\nid\nbroadcastType\nowner {\nid\nlogin\nbroadcastBadges {\n...badge\n}\n...cheer\nself {\nisModerator\n}\n}\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var r = {};

        function a(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !r[t] && (r[t] = !0, !0)
            })
        }
        i.definitions = i.definitions.concat(a(n("QU+n").definitions)), i.definitions = i.definitions.concat(a(n("576g").definitions)), e.exports = i
    },
    "0UyA": function(e, t, n) {
        var i = n("4Z4o");
        e.exports = function(e, t) {
            var n = Number(t);
            return i(e, -n)
        }
    },
    "0YGC": function(e, t) {
        e.exports = function() {
            var e = new Date,
                t = e.getFullYear(),
                n = e.getMonth(),
                i = e.getDate(),
                r = new Date(0);
            return r.setFullYear(t, n, i - 1), r.setHours(23, 59, 59, 999), r
        }
    },
    "0aH9": function(e, t, n) {
        var i = n("3znZ"),
            r = 6e4,
            a = 6048e5;
        e.exports = function(e, t) {
            var n = i(e),
                o = i(t),
                s = n.getTime() - n.getTimezoneOffset() * r,
                l = o.getTime() - o.getTimezoneOffset() * r;
            return Math.round((s - l) / a)
        }
    },
    "0oN5": function(e, t, n) {
        var i = n("WNGz");
        e.exports = function(e) {
            var t = new Date;
            return t.setDate(t.getDate() + 1), i(e).getTime() === i(t).getTime()
        }
    },
    "11Bn": function(e, t, n) {
        var i = n("xA5w");
        e.exports = function() {
            var e = Array.prototype.slice.call(arguments).map(function(e) {
                    return i(e)
                }),
                t = Math.max.apply(null, e);
            return new Date(t)
        }
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
    "1E7T": function(e, t) {},
    "1gtq": function(e, t, n) {
        var i = n("WNGz");
        e.exports = function(e) {
            var t = new Date;
            return t.setDate(t.getDate() - 1), i(e).getTime() === i(t).getTime()
        }
    },
    "1rLR": function(e, t, n) {
        var i = n("3EIC");
        e.exports = function(e, t) {
            var n = Number(t);
            return i(e, 3 * n)
        }
    },
    "1tZx": function(e, t) {},
    "1udo": function(e, t, n) {
        var i = n("WNGz");
        e.exports = function() {
            return i(new Date)
        }
    },
    "25hp": function(e, t, n) {
        var i = n("G7No");
        e.exports = function(e, t) {
            var n = i(e, t) / 1e3;
            return n > 0 ? Math.floor(n) : Math.ceil(n)
        }
    },
    "2IkU": function(e, t) {},
    "2gZ/": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "VideoWatch_UpvoteVideo"
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
                                value: "UpvoteVideoInput"
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
                            value: "upvoteVideo"
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
                                                    value: "isUpvoted"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "upvotes"
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
            body: "mutation VideoWatch_UpvoteVideo($input: UpvoteVideoInput!) {\nupvoteVideo(input: $input) {\nvideo {\nid\nself {\nisUpvoted\n}\nupvotes\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
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
    "2lB6": function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e, t, n, r) {
            var a = i(e).getTime(),
                o = i(t).getTime(),
                s = i(n).getTime(),
                l = i(r).getTime();
            if (a > o || s > l) throw new Error("The start of the range cannot be after the end of the range");
            return a < l && s < o
        }
    },
    "3EIC": function(e, t, n) {
        var i = n("xA5w"),
            r = n("Mdww");
        e.exports = function(e, t) {
            var n = i(e),
                a = Number(t),
                o = n.getMonth() + a,
                s = new Date(0);
            s.setFullYear(n.getFullYear(), o, 1), s.setHours(0, 0, 0, 0);
            var l = r(s);
            return n.setMonth(o, Math.min(l, n.getDate())), n
        }
    },
    "3T7g": function(e, t, n) {
        "use strict";
        var i = n("RbGx"),
            r = n("urTJ"),
            a = n("+V/3"),
            o = (n("AwFw"), n("TToO")),
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
    "3Ybq": function(e, t, n) {
        "use strict";
        n.d(t, "f", function() {
            return a
        }), n.d(t, "e", function() {
            return o
        }), n.d(t, "q", function() {
            return r
        }), n.d(t, "o", function() {
            return d
        }), n.d(t, "k", function() {
            return u
        }), n.d(t, "n", function() {
            return p
        }), n.d(t, "j", function() {
            return m
        }), n.d(t, "l", function() {
            return h
        }), n.d(t, "m", function() {
            return g
        }), n.d(t, "r", function() {
            return f
        }), n.d(t, "s", function() {
            return v
        }), n.d(t, "h", function() {
            return b
        }), n.d(t, "g", function() {
            return k
        }), n.d(t, "i", function() {
            return y
        }), n.d(t, "p", function() {
            return _
        }), n.d(t, "b", function() {
            return s
        }), n.d(t, "c", function() {
            return l
        }), n.d(t, "d", function() {
            return c
        });
        var i = n("zGmo");
        n.d(t, "a", function() {
            return i.a
        });
        var r, a = "generated",
            o = "custom";
        ! function(e) {
            e.Private = "PRIVATE", e.Public = "PUBLIC"
        }(r || (r = {}));
        var s, l, c, d = "uploading",
            u = "pending_transcode",
            p = "transcoding",
            m = "failed",
            h = "recorded",
            g = "recording",
            f = [h, g],
            v = [p, u, m],
            b = "FORMAT_NOT_SUPPORTED",
            k = "BAD_ASSET",
            y = "INTERNAL_ERROR",
            _ = {
                VIDEO_PREMIERE_STATUS_UNSCHEDULED: "unscheduled",
                VIDEO_PREMIERE_STATUS_SCHEDULED: "scheduled",
                VIDEO_PREMIERE_STATUS_STARTED: "started",
                VIDEO_PREMIERE_STATUS_FAILED: "failed"
            };
        ! function(e) {
            e.Youtube = "youtube"
        }(s || (s = {})),
        function(e) {
            e.None = "NONE", e.Expiring = "EXPIRING"
        }(l || (l = {})),
        function(e) {
            e.Everyone = "", e.SubOnly = "sub_only"
        }(c || (c = {}))
    },
    "3g9B": function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e) {
            return i(e).getDate()
        }
    },
    "3nPg": function(e, t, n) {
        var i = n("G7No"),
            r = 6e4;
        e.exports = function(e, t) {
            var n = i(e, t) / r;
            return n > 0 ? Math.floor(n) : Math.ceil(n)
        }
    },
    "3znZ": function(e, t, n) {
        var i = n("u/4p");
        e.exports = function(e) {
            return i(e, {
                weekStartsOn: 1
            })
        }
    },
    "4Jix": function(e, t) {},
    "4LxA": function(e, t, n) {
        var i = n("iRXW");
        e.exports = function(e, t) {
            var n = i(e),
                r = i(t);
            return n.getTime() === r.getTime()
        }
    },
    "4OFc": function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e) {
            var t = i(e).getDay();
            return 0 === t || 6 === t
        }
    },
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
    "4Z4o": function(e, t, n) {
        var i = n("3EIC");
        e.exports = function(e, t) {
            var n = Number(t);
            return i(e, 12 * n)
        }
    },
    "4zIR": function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e, t, n) {
            var r = i(e).getTime(),
                a = i(t).getTime(),
                o = i(n).getTime();
            if (a > o) throw new Error("The start of the range cannot be after the end of the range");
            return r >= a && r <= o
        }
    },
    "5DPx": function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        }), n.d(t, "b", function() {
            return b
        });
        var i, r = n("TToO"),
            a = n("6sO2"),
            o = n("YUUt"),
            s = n.n(o),
            l = n("/SNv"),
            c = n.n(l),
            d = n("Vr3l"),
            u = n.n(d),
            p = n("PPNL"),
            m = n("nyge"),
            h = n("EOpv"),
            g = n("LgcN"),
            f = this,
            v = a.o.logger.withCategory("metadata-info");
        ! function(e) {
            e.Hearthstone = "hearthstone", e.PUBG = "playerunknown's battlegrounds", e.League = "league of legends", e.Overwatch = "overwatch", e.CSGO = "counter-strike%3a global offensive"
        }(i || (i = {}));
        var b = function(e, t) {
                return r.__awaiter(f, void 0, void 0, function() {
                    var n, i, o, s, l, c;
                    return r.__generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return n = t.toLowerCase(), i = e.counterStrikeGlobalOffensive && e.counterStrikeGlobalOffensive.skill, o = e.hearthstone && e.hearthstone.broadcasterHeroClass, s = e.leagueOfLegends && e.leagueOfLegends.championID, l = e.overwatch && e.overwatch.broadcasterCharacter, i && n === m.a.CounterStrike ? [4, k(i)] : [3, 2];
                            case 1:
                                return [2, r.sent()];
                            case 2:
                                return o && n === m.a.Hearthstone ? [4, y(o)] : [3, 4];
                            case 3:
                                return [2, r.sent()];
                            case 4:
                                return l && n === m.a.Overwatch ? [4, _(l)] : [3, 6];
                            case 5:
                                return [2, r.sent()];
                            case 6:
                                if (s && n === m.a.LeagueOfLegends && (c = a.o.store.getState()).directory)
                                    if (c.directory.leagueOfLegends.championsMap) {
                                        if (c.directory.leagueOfLegends.championsMap) return [2, S(s, c.directory.leagueOfLegends.championsMap, c.directory.leagueOfLegends.version)]
                                    } else a.o.store.dispatch(Object(p.a)());
                                r.label = 7;
                            case 7:
                                return [2, null]
                        }
                    })
                })
            },
            k = function(e) {
                return r.__awaiter(f, void 0, void 0, function() {
                    var t, n, i;
                    return r.__generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return r.trys.push([0, 2, , 3]), [4, Object(g.a)()];
                            case 1:
                                return t = r.sent(), (n = {})[e] = t[0]["Skill Group"][e - 1], [2, {
                                    name: n[e].display_name,
                                    label: Object(h.b)(h.a.CSGOSkillGroup),
                                    spriteDetails: {
                                        imageWidth: n[e].image_width,
                                        imageHeight: n[e].image_height,
                                        spriteOffsetX: n[e].sprite_x_offset,
                                        spriteOffsetY: n[e].sprite_y_offset,
                                        spriteURL: s.a
                                    }
                                }];
                            case 2:
                                return i = r.sent(), v.error(i, "Failed to load Counter-Strike skill group data"), [2, null];
                            case 3:
                                return [2]
                        }
                    })
                })
            },
            y = function(e) {
                return r.__awaiter(f, void 0, void 0, function() {
                    var t, n, i;
                    return r.__generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return r.trys.push([0, 2, , 3]), [4, Object(g.b)()];
                            case 1:
                                return t = r.sent(), n = {}, t[0].Class.forEach(function(e) {
                                    n[e.class] = e
                                }), [2, {
                                    name: n[e].display_name,
                                    label: Object(h.b)(h.a.HearthstoneClass),
                                    spriteDetails: {
                                        imageWidth: n[e].image_width,
                                        imageHeight: n[e].image_height,
                                        spriteOffsetX: n[e].sprite_x_offset,
                                        spriteOffsetY: n[e].sprite_y_offset,
                                        spriteURL: c.a
                                    }
                                }];
                            case 2:
                                return i = r.sent(), v.error(i, "Failed to load Hearthstone class data"), [2, null];
                            case 3:
                                return [2]
                        }
                    })
                })
            },
            _ = function(e) {
                return r.__awaiter(f, void 0, void 0, function() {
                    var t, n, i, a, o, s, l, c, d, p, m, f;
                    return r.__generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return r.trys.push([0, 2, , 3]), [4, Object(g.d)()];
                            case 1:
                                for (t = r.sent(), n = void 0, i = 0, a = t; i < a.length; i++)
                                    for (o in n = a[i])
                                        if (n.hasOwnProperty(o))
                                            for (s = n[o], l = 0, c = s; l < c.length; l++)
                                                if ((d = c[l]).character === e) return (f = {})[d.character] = d, [2, {
                                                    name: (p = f)[e].display_name,
                                                    label: Object(h.b)(h.a.OverwatchCharacter),
                                                    spriteDetails: {
                                                        imageWidth: p[e].image_width,
                                                        imageHeight: p[e].image_height,
                                                        spriteOffsetX: p[e].sprite_x_offset,
                                                        spriteOffsetY: p[e].sprite_y_offset,
                                                        spriteURL: u.a
                                                    }
                                                }];
                                return [2, null];
                            case 2:
                                return m = r.sent(), v.error(m, "Failed to load Overwatch character data"), [2, null];
                            case 3:
                                return [2]
                        }
                    })
                })
            },
            S = function(e, t, n) {
                if (!t || !e) return null;
                var i = t[e],
                    r = "https://ddragon.leagueoflegends.com/cdn/" + n + "/img/sprite/" + i.image.sprite;
                return {
                    name: i.name,
                    label: Object(h.b)(h.a.LeagueChampion),
                    spriteDetails: {
                        imageWidth: i.image.w,
                        imageHeight: i.image.h,
                        spriteOffsetX: i.image.x,
                        spriteOffsetY: i.image.y,
                        spriteURL: r
                    }
                }
            }
    },
    "5qwL": function(e, t, n) {
        var i = n("VaeB");
        e.exports = function(e, t) {
            var n = i(e),
                r = i(t);
            return n.getTime() === r.getTime()
        }
    },
    "5vPJ": function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            r = n("GiK3"),
            a = n("6sO2"),
            o = n("7vx8"),
            s = n("GxDs"),
            l = n("pexS"),
            c = {
                isTimedOut: !1
            },
            d = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = c, t.timeoutID = null, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
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
                        i = e.loading;
                    return n || this.state.isTimedOut ? r.createElement(s.a, {
                        error: {
                            title: Object(a.d)("Something went wrong", "ClipsChatCard"),
                            description: Object(a.d)("We couldn't find that Clip", "ClipsChatCard")
                        }
                    }) : i || !t ? r.createElement(s.a, null) : r.createElement(s.a, {
                        data: {
                            title: t.title || (t.broadcaster ? Object(a.d)("Clip of {broadcaster}", {
                                broadcaster: t.broadcaster.displayName
                            }, "ClipsChatCard") : ""),
                            description: t.curator ? Object(a.d)("Clipped by {curator}", {
                                curator: t.curator.displayName
                            }, "ClipsChatCard") : "",
                            previewImageURL: t.thumbnailURL,
                            contentURL: t.url
                        }
                    })
                }, t
            }(r.Component),
            u = function(e) {
                return {
                    variables: {
                        slug: e.slug
                    },
                    notifyOnNetworkStatusChange: !0,
                    fetchPolicy: e.forceNetworkRequest ? "cache-first" : "cache-only"
                }
            },
            p = Object(o.a)(l, {
                options: u
            })(d);
        n.d(t, !1, function() {
            return 5e3
        }), n.d(t, !1, function() {
            return "https://static-cdn.jtvnw.net/emoticons/v1/58765/2.0"
        }), n.d(t, !1, function() {
            return c
        }), n.d(t, !1, function() {
            return d
        }), n.d(t, !1, function() {
            return u
        }), n.d(t, "a", function() {
            return p
        })
    },
    "607n": function(e, t) {
        e.exports = function(e) {
            return e instanceof Date
        }
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
    "6C1Z": function(e, t, n) {
        "use strict";
        t.b = function(e, t) {
            return Object(i.d)(e) + "/edit/" + t
        }, t.c = function(e, t) {
            return Object(i.d)(e) + "/highlighter/" + t
        }, t.d = function(e, t) {
            return Object(i.d)(e) + "/schedule/" + t
        }, t.a = function(e, t) {
            return Object(i.d)(e) + "/appeal/" + t
        }, t.e = function(e) {
            return "/videos/" + e
        };
        var i = n("NY9D")
    },
    "6CZb": function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e) {
            return i(e).getTime() > (new Date).getTime()
        }
    },
    "6SO/": function(e, t, n) {
        var i = n("gAt4");
        e.exports = function(e, t) {
            var n = i(e, t) / 7;
            return n > 0 ? Math.floor(n) : Math.ceil(n)
        }
    },
    "6Zhv": function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e, t) {
            var n = i(e).getTime(),
                r = Number(t);
            return new Date(n + r)
        }
    },
    "6axH": function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e) {
            return 6 === i(e).getDay()
        }
    },
    "6udH": function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e) {
            return 1 === i(e).getDate()
        }
    },
    "7EGB": function(e, t, n) {
        var i = n("Jvcu");
        e.exports = function(e, t) {
            var n = Number(t);
            return i(e, 7 * n)
        }
    },
    "7LVu": function(e, t) {},
    "7Swd": function(e, t, n) {
        var i = n("3EIC");
        e.exports = function(e, t) {
            var n = Number(t);
            return i(e, -n)
        }
    },
    "7Xwz": function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e) {
            var t = i(e);
            return t.setDate(1), t.setHours(0, 0, 0, 0), t
        }
    },
    "7t3k": function(e, t) {},
    "7tMz": function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            r = n("GiK3"),
            a = n("75D5");

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
        n("MRMr");

        function l(e, t) {
            return function(t) {
                return function(n) {
                    function a() {
                        return null !== n && n.apply(this, arguments) || this
                    }
                    return i.__extends(a, n), a.prototype.render = function() {
                        return r.createElement(t, i.__assign({}, this.props, o(e)))
                    }, a
                }(r.Component)
            }
        }
        n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, "a", function() {
            return l
        })
    },
    "7vYp": function(e, t) {},
    "7yyf": function(e, t, n) {
        var i = n("rBmI");
        e.exports = function(e, t) {
            var n = i(e),
                r = i(t);
            return n.getTime() === r.getTime()
        }
    },
    "81qH": function(e, t, n) {
        "use strict";
        var i = n("aBed");
        n.d(t, "VideoPreviewCard", function() {
            return i.a
        });
        var r = n("a4C9"),
            a = (n.n(r), n("XYqD"));
        n.d(t, "VideoPreviewCardPlaceholder", function() {
            return a.a
        })
    },
    "8Gpr": function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e) {
            return i(e).getHours()
        }
    },
    "8KV+": function(e, t, n) {
        var i = n("u/4p");
        e.exports = function(e, t, n) {
            var r = i(e, n),
                a = i(t, n);
            return r.getTime() === a.getTime()
        }
    },
    "8QR2": function(e, t, n) {
        var i = n("xA5w"),
            r = 864e5;
        e.exports = function(e, t, n, a) {
            var o = i(e).getTime(),
                s = i(t).getTime(),
                l = i(n).getTime(),
                c = i(a).getTime();
            if (o > s || l > c) throw new Error("The start of the range cannot be after the end of the range");
            if (!(o < c && l < s)) return 0;
            var d = (c > s ? s : c) - (l < o ? o : l);
            return Math.ceil(d / r)
        }
    },
    "8UBU": function(e, t) {},
    "8Wuk": function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return i
        }), n.d(t, "a", function() {
            return u
        });
        var i, r = n("TToO"),
            a = n("GiK3"),
            o = (n.n(a), n("6sO2")),
            s = n("2hJ3"),
            l = n("f6Cj"),
            c = n("Odds"),
            d = n("bdk8");
        n.n(d);
        ! function(e) {
            e[e.Twitter = 0] = "Twitter", e[e.Reddit = 1] = "Reddit", e[e.VKontakte = 2] = "VKontakte", e[e.Facebook = 3] = "Facebook", e[e.Copy = 4] = "Copy", e[e.CopyInput = 5] = "CopyInput", e[e.Download = 6] = "Download"
        }(i || (i = {}));
        var u = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.renderLink = function() {
                    var e = "social-button__link " + n.addSocialClassModifier("social-button__link");
                    return n.props.type === i.Download ? a.createElement("a", r.__assign({
                        href: n.props.url,
                        target: "_blank",
                        className: e,
                        onClick: n.onShareClickHandler
                    }, Object(c._63)(n.props), {
                        download: n.props.text
                    }), n.renderIcon()) : n.isLink() ? a.createElement("a", r.__assign({
                        href: n.getLinkTarget(),
                        target: "_blank",
                        className: e,
                        onClick: n.onShareClickHandler
                    }, Object(c._63)(n.props)), n.renderIcon()) : a.createElement("button", r.__assign({
                        onClick: n.copyPageUrl,
                        onMouseLeave: n.clearIsCopiedStatus,
                        className: e
                    }, Object(c._63)(n.props)), n.renderIcon())
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
                    var e = n.getAssetFromType(),
                        t = n.getAssetSizeFromType();
                    return a.createElement(c._8, {
                        className: "social-button__icon " + n.addSocialClassModifier("social-button__icon"),
                        display: c.R.Flex,
                        justifyContent: c._7.Center,
                        alignItems: c.c.Center
                    }, a.createElement(c._24, {
                        asset: e,
                        width: t,
                        height: t
                    }))
                }, n.isLink = function() {
                    return n.props.type !== i.Copy
                }, n.getAssetSizeFromType = function() {
                    switch (n.props.type) {
                        case i.Download:
                            return 20;
                        default:
                            return 30
                    }
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
                            return c._25.Twitter;
                        case i.Facebook:
                            return c._25.Facebook;
                        case i.VKontakte:
                            return c._25.VKontakte;
                        case i.Reddit:
                            return c._25.Reddit;
                        case i.Download:
                            return c._25.Download;
                        case i.Copy:
                        default:
                            return c._25.Copy
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
                return a.createElement(c._8, {
                    className: "social-button"
                }, a.createElement(c._52, {
                    label: this.getTooltipFromType(),
                    direction: c._54.Bottom
                }, this.renderLink()))
            }, t
        }(a.Component)
    },
    "90yy": function(e, t) {},
    "97Ye": function(e, t, n) {
        var i = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "LatestVideosFromFollowedCarousel_CurrentUser"
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
                                    value: "followedVideos"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "first"
                                    },
                                    value: {
                                        kind: "IntValue",
                                        value: "30"
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
                end: 239
            }
        };
        i.loc.source = {
            body: '#import "twilight/features/video-preview-card/models/preview-card-video-fragment.gql"\nquery LatestVideosFromFollowedCarousel_CurrentUser {\ncurrentUser {\nid\nfollowedVideos(first: 30 sort: TIME) {\nedges {\nnode {\n...PreviewCardVideo\n}\n}\n}\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var r = {};
        i.definitions = i.definitions.concat(n("qjMx").definitions.filter(function(e) {
            if ("FragmentDefinition" !== e.kind) return !0;
            var t = e.name.value;
            return !r[t] && (r[t] = !0, !0)
        })), e.exports = i
    },
    "9Jn5": function(e, t, n) {
        var i = n("zZbG");
        e.exports = function(e, t) {
            return i(e) - i(t)
        }
    },
    "9kjL": function(e, t) {},
    "9m97": function(e, t, n) {
        "use strict";
        n.d(t, "d", function() {
            return i
        }), n.d(t, "a", function() {
            return r
        }), n.d(t, "b", function() {
            return a
        }), n.d(t, "c", function() {
            return o
        });
        var i = "BROADCAST_TYPE_ALL",
            r = "broadcaster_id",
            a = "BROADCAST_LENGTH_ANY",
            o = "BROADCAST_SORT_POPULAR"
    },
    "9r5b": function(e, t, n) {
        var i = n("nfOx");
        e.exports = function(e, t) {
            var n = Number(t);
            return i(e, -n)
        }
    },
    "9u8h": function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return o
        });
        var i = n("TToO"),
            r = n("6sO2"),
            a = n("Aj/L"),
            o = function() {
                function e() {}
                return e.get = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, void 0, function() {
                        return i.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, this.request(e, i.__assign({}, t, {
                                        method: "GET"
                                    }), n)];
                                case 1:
                                    return [2, r.sent()]
                            }
                        })
                    })
                }, e.getOrThrow = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, void 0, function() {
                        return i.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, this.requestOrThrow(e, i.__assign({}, t, {
                                        method: "GET"
                                    }), n)];
                                case 1:
                                    return [2, r.sent()]
                            }
                        })
                    })
                }, e.put = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, void 0, function() {
                        return i.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, this.request(e, i.__assign({}, t, {
                                        method: "PUT"
                                    }), n)];
                                case 1:
                                    return [2, r.sent()]
                            }
                        })
                    })
                }, e.putOrThrow = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, void 0, function() {
                        return i.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, this.requestOrThrow(e, i.__assign({}, t, {
                                        method: "PUT"
                                    }), n)];
                                case 1:
                                    return [2, r.sent()]
                            }
                        })
                    })
                }, e.post = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, void 0, function() {
                        return i.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, this.request(e, i.__assign({}, t, {
                                        method: "POST"
                                    }), n)];
                                case 1:
                                    return [2, r.sent()]
                            }
                        })
                    })
                }, e.postOrThrow = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, void 0, function() {
                        return i.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, this.requestOrThrow(e, i.__assign({}, t, {
                                        method: "POST"
                                    }), n)];
                                case 1:
                                    return [2, r.sent()]
                            }
                        })
                    })
                }, e.delete = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, void 0, function() {
                        return i.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, this.request(e, i.__assign({}, t, {
                                        method: "DELETE"
                                    }), n)];
                                case 1:
                                    return [2, r.sent()]
                            }
                        })
                    })
                }, e.deleteOrThrow = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, void 0, function() {
                        return i.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, this.requestOrThrow(e, i.__assign({}, t, {
                                        method: "DELETE"
                                    }), n)];
                                case 1:
                                    return [2, r.sent()]
                            }
                        })
                    })
                }, e.request = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, void 0, function() {
                        var r, a, o, s;
                        return i.__generator(this, function(l) {
                            switch (l.label) {
                                case 0:
                                    return t = this.constructOptions(t, n), r = t.headers ? t.headers["Content-Type"] : void 0, a = this.serialize(t.body, r), o = i.__assign({}, t, {
                                        body: a
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
                        var r, a;
                        return i.__generator(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    return o.trys.push([0, 2, , 3]), [4, this.request(e, t, n)];
                                case 1:
                                    if ((r = o.sent()).error || r.requestError) throw new Error("Error while making request");
                                    return a = i.__assign({}, r, {
                                        body: r.body
                                    }), [2, Promise.resolve(a)];
                                case 2:
                                    throw o.sent();
                                case 3:
                                    return [2]
                            }
                        })
                    })
                }, e.getAPIURL = function(e) {
                    return new URL(e, r.o.config.apiBaseURL)
                }, e.constructLegacyAPIResponse = function(e) {
                    return i.__awaiter(this, void 0, void 0, function() {
                        var t, n, r, a;
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
                                    return r = i.sent(), e.headers && e.headers.get && (a = e.headers.get("Content-Type")) && -1 !== a.indexOf("application/json") && (t.requestError = r), [3, 4];
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
                    var n = r.o.store.getState(),
                        i = {
                            Accept: "application/vnd.twitchtv.v" + (t.version || 5) + "+json; charset=UTF-8",
                            "Accept-Language": "en-us",
                            "Client-ID": r.o.config.legacyClientID,
                            "X-Requested-With": "XMLHttpRequest"
                        };
                    e.body && FormData.prototype.isPrototypeOf(e.body) || (i["Content-Type"] = "application/json; charset=UTF-8");
                    var o = Object(a.c)(n);
                    return o && (i.Authorization = "OAuth " + o.authToken, o.legacyCSRFToken && (i["Twitch-Api-Token"] = o.legacyCSRFToken)), t.excludeHeaders && t.excludeHeaders.forEach(function(e) {
                        i[e] && delete i[e]
                    }), i
                }, e.logger = r.o.logger.withCategory("legacy-api"), e
            }()
    },
    A2zO: function(e, t, n) {
        var i = n("Be26");
        e.exports = function(e) {
            return i(new Date, e)
        }
    },
    AL3x: function(e, t) {},
    AZvW: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e) {
            var t = i(e).getDay();
            return 0 === t && (t = 7), t
        }
    },
    AaXK: function(e, t, n) {
        var i = {
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
        i.loc.source = {
            body: '#import "twilight/features/badges/models/badge-fragment.gql"\nquery ChatSettings_Badges($channelLogin: String!) {\ncurrentUser {\nid\nselectedBadge {\n...badge\n}\navailableBadges {\n...badge\n}\n}\nuser(login: $channelLogin) {\nid\nself {\nselectedBadge {\n...badge\n}\navailableBadges {\n...badge\n}\n}\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var r = {};
        i.definitions = i.definitions.concat(n("QU+n").definitions.filter(function(e) {
            if ("FragmentDefinition" !== e.kind) return !0;
            var t = e.name.value;
            return !r[t] && (r[t] = !0, !0)
        })), e.exports = i
    },
    Akl5: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e) {
            var t = i(e),
                n = t.getMonth();
            return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(0, 0, 0, 0), t
        }
    },
    AoO8: function(e, t, n) {
        "use strict";
        t.b = function(e, t) {
            return l(function(e) {
                e.video && (e.video = Object(o.b)(e.video));
                var t = r.stringify(e);
                return a.o.config.playerBaseURL + "/?" + t
            }(e), t)
        }, t.a = l;
        var i = n("TToO"),
            r = n("OAwv"),
            a = (n.n(r), n("6sO2")),
            o = n("JpYe"),
            s = {
                height: 378,
                width: 620,
                allowScrolling: !0,
                allowFullscreen: !0
            };

        function l(e, t) {
            void 0 === t && (t = s);
            var n, r, a = i.__assign({}, s, t),
                o = '<iframe src="' + e + '" frameborder="0" ' + (a.allowFullscreen ? 'allowfullscreen="true" ' : "") + (a.allowScrolling ? "" : 'scrolling="no" ') + 'height="' + a.height + '" width="' + a.width + '"></iframe>';
            return a.textLink && (o += (n = a.textLink.url, r = a.textLink.text, '<a href="' + n + '" style="padding:2px 0px 4px; display:block; width:345px; font-weight:normal; font-size:10px; text-decoration:underline;">' + r + "</a>")), o
        }
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
    BJwU: function(e, t) {},
    Bb5e: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e, t) {
            var n = i(e),
                r = i(t);
            return n.getFullYear() - r.getFullYear()
        }
    },
    Be26: function(e, t, n) {
        var i = n("8KV+");
        e.exports = function(e, t) {
            return i(e, t, {
                weekStartsOn: 1
            })
        }
    },
    CVNg: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e, t) {
            var n = i(e),
                r = Number(t);
            return n.setMonth(0), n.setDate(r), n
        }
    },
    CybZ: function(e, t) {},
    D6ie: function(e, t, n) {
        var i = n("xA5w"),
            r = n("3znZ"),
            a = n("iRXW"),
            o = 6048e5;
        e.exports = function(e) {
            var t = i(e),
                n = r(t).getTime() - a(t).getTime();
            return Math.round(n / o) + 1
        }
    },
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
                n = e.broadcastSort === r.c,
                a = [];
            "broadcastType" in e && e.broadcastType !== r.d && void 0 !== e.broadcastType && a.push(e.broadcastType);
            "broadcasterId" in e && a.push(r.a + ":" + e.broadcasterId);
            t.facetFilters = (o = a, o.join(",")), "broadcastLength" in e && e.broadcastLength !== r.b && void 0 !== e.broadcastLength && (t.numericFilters = [e.broadcastLength]);
            var o;
            return {
                typeID: n ? i.a.VideosNewest : i.a.Videos,
                params: t
            }
        };
        var i = n("5LoI"),
            r = n("9m97")
    },
    EOpv: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        }), n.d(t, "b", function() {
            return a
        });
        var i, r = n("6sO2");
        ! function(e) {
            e[e.CSGOMap = 0] = "CSGOMap", e[e.CSGOSkillGroup = 1] = "CSGOSkillGroup", e[e.HearthstoneClass = 2] = "HearthstoneClass", e[e.HearthstoneMode = 3] = "HearthstoneMode", e[e.LeagueChampion = 4] = "LeagueChampion", e[e.OverwatchCharacter = 5] = "OverwatchCharacter"
        }(i || (i = {}));
        var a = function(e) {
            switch (e) {
                case i.CSGOMap:
                    return Object(r.d)("Map", "CSGOMapFilter");
                case i.CSGOSkillGroup:
                    return Object(r.d)("Rank", "CSGORankFilter");
                case i.HearthstoneClass:
                    return Object(r.d)("Class", "HearthstoneClassFilter");
                case i.HearthstoneMode:
                    return Object(r.d)("Mode", "HearthstoneModeFilter");
                case i.LeagueChampion:
                    return Object(r.d)("Champion", "LeagueFilter");
                case i.OverwatchCharacter:
                    return Object(r.d)("Hero", "OverwatchFilter");
                default:
                    return ""
            }
        }
    },
    "Eoz/": function(e, t, n) {
        var i = n("ymQ7"),
            r = n("D6ie"),
            a = n("zZbG"),
            o = n("xA5w"),
            s = n("dH3X"),
            l = n("uyaC");
        var c = {
            M: function(e) {
                return e.getMonth() + 1
            },
            MM: function(e) {
                return u(e.getMonth() + 1, 2)
            },
            Q: function(e) {
                return Math.ceil((e.getMonth() + 1) / 3)
            },
            D: function(e) {
                return e.getDate()
            },
            DD: function(e) {
                return u(e.getDate(), 2)
            },
            DDD: function(e) {
                return i(e)
            },
            DDDD: function(e) {
                return u(i(e), 3)
            },
            d: function(e) {
                return e.getDay()
            },
            E: function(e) {
                return e.getDay() || 7
            },
            W: function(e) {
                return r(e)
            },
            WW: function(e) {
                return u(r(e), 2)
            },
            YY: function(e) {
                return u(e.getFullYear(), 4).substr(2)
            },
            YYYY: function(e) {
                return u(e.getFullYear(), 4)
            },
            GG: function(e) {
                return String(a(e)).substr(2)
            },
            GGGG: function(e) {
                return a(e)
            },
            H: function(e) {
                return e.getHours()
            },
            HH: function(e) {
                return u(e.getHours(), 2)
            },
            h: function(e) {
                var t = e.getHours();
                return 0 === t ? 12 : t > 12 ? t % 12 : t
            },
            hh: function(e) {
                return u(c.h(e), 2)
            },
            m: function(e) {
                return e.getMinutes()
            },
            mm: function(e) {
                return u(e.getMinutes(), 2)
            },
            s: function(e) {
                return e.getSeconds()
            },
            ss: function(e) {
                return u(e.getSeconds(), 2)
            },
            S: function(e) {
                return Math.floor(e.getMilliseconds() / 100)
            },
            SS: function(e) {
                return u(Math.floor(e.getMilliseconds() / 10), 2)
            },
            SSS: function(e) {
                return u(e.getMilliseconds(), 3)
            },
            Z: function(e) {
                return d(e.getTimezoneOffset(), ":")
            },
            ZZ: function(e) {
                return d(e.getTimezoneOffset())
            },
            X: function(e) {
                return Math.floor(e.getTime() / 1e3)
            },
            x: function(e) {
                return e.getTime()
            }
        };

        function d(e, t) {
            t = t || "";
            var n = e > 0 ? "-" : "+",
                i = Math.abs(e),
                r = i % 60;
            return n + u(Math.floor(i / 60), 2) + t + u(r, 2)
        }

        function u(e, t) {
            for (var n = Math.abs(e).toString(); n.length < t;) n = "0" + n;
            return n
        }
        e.exports = function(e, t, n) {
            var i = t ? String(t) : "YYYY-MM-DDTHH:mm:ss.SSSZ",
                r = (n || {}).locale,
                a = l.format.formatters,
                d = l.format.formattingTokensRegExp;
            r && r.format && r.format.formatters && (a = r.format.formatters, r.format.formattingTokensRegExp && (d = r.format.formattingTokensRegExp));
            var u = o(e);
            return s(u) ? function(e, t, n) {
                var i, r, a, o = e.match(n),
                    s = o.length;
                for (i = 0; i < s; i++) r = t[o[i]] || c[o[i]], o[i] = r || ((a = o[i]).match(/\[[\s\S]/) ? a.replace(/^\[|]$/g, "") : a.replace(/\\/g, ""));
                return function(e) {
                    for (var t = "", n = 0; n < s; n++) o[n] instanceof Function ? t += o[n](e, c) : t += o[n];
                    return t
                }
            }(i, a, d)(u) : "Invalid Date"
        }
    },
    Epw6: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e) {
            var t = i(e),
                n = t.getFullYear();
            return t.setFullYear(n + 1, 0, 0), t.setHours(23, 59, 59, 999), t
        }
    },
    FKWv: function(e, t) {},
    FNUa: function(e, t, n) {
        var i = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "RecentCreatorVideos_User"
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
                                        value: "30"
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
                end: 242
            }
        };
        i.loc.source = {
            body: '#import "twilight/features/video-preview-card/models/preview-card-video-fragment.gql"\nquery RecentCreatorVideos_User($creatorID: ID) {\nuser(id: $creatorID) {\nid\nlogin\nvideos(first: 30 sort: TIME) {\nedges {\nnode {\n...PreviewCardVideo\n}\n}\n}\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var r = {};
        i.definitions = i.definitions.concat(n("qjMx").definitions.filter(function(e) {
            if ("FragmentDefinition" !== e.kind) return !0;
            var t = e.name.value;
            return !r[t] && (r[t] = !0, !0)
        })), e.exports = i
    },
    FsFC: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
        }), t.b = function(e, t) {
            void 0 === t && (t = r.Humanized);
            var n;
            t === r.ClockAuto && (t = e >= 3600 ? r.ClockHMS : r.ClockMS);
            switch (t) {
                case r.ClockHM:
                case r.ClockHMS:
                    n = i.Hour;
                    break;
                case r.ClockMS:
                    n = i.Minute
            }
            var c = 2;
            t === r.ClockHMS && (c = 3);
            var d = function(e, t) {
                    void 0 === t && (t = i.Month);
                    var n = {};
                    if (n.seconds = e, e < 60 || t === i.Second) return n;
                    if (n.minutes = Math.floor(e / 60), n.seconds = e % 60, n.minutes < 60 || t === i.Minute) return n;
                    if (n.hours = Math.floor(n.minutes / 60), n.minutes = n.minutes % 60, n.hours < 24 || t === i.Hour) return n;
                    if (n.days = Math.floor(n.hours / 24), n.hours = n.hours % 24, n.days < 7 || t === i.Day) return n;
                    if (n.days <= 26 || t === i.Week) return n.weeks = Math.floor(n.days / 7), n.days = n.days % 7, n;
                    return n.months = Math.round((n.days + 3) / 30), n
                }(e, n),
                u = Object.keys(d);
            if (u.forEach(function(e, n) {
                    t !== r.Humanized && t !== r.HumanizedShort || d[e] || delete d[e], n < u.length - c && delete d[e]
                }), t === r.Humanized) return function(e) {
                return e.months ? o(i.Month, e.months) : e.weeks && e.days ? o(i.Week, e.weeks) + " " + o(i.Day, e.days) : e.weeks ? o(i.Week, e.weeks) : e.days && e.hours ? o(i.Day, e.days) + " " + o(i.Hour, e.hours) : e.days ? o(i.Day, e.days) : e.hours && e.minutes ? o(i.Hour, e.hours) + " " + o(i.Minute, e.minutes) : e.hours ? o(i.Hour, e.hours) : e.minutes && e.seconds ? o(i.Minute, e.minutes) + " " + o(i.Second, e.seconds) : e.minutes ? o(i.Minute, e.minutes) : o(i.Second, e.seconds || 0)
            }(d);
            if (t === r.HumanizedShort) return function(e) {
                return e.months ? s(i.Month, e.months) : e.weeks && e.days ? "" + s(i.Week, e.weeks) + s(i.Day, e.days) : e.weeks ? s(i.Week, e.weeks) : e.days && e.hours ? "" + s(i.Day, e.days) + s(i.Hour, e.hours) : e.days ? s(i.Day, e.days) : e.hours && e.minutes ? "" + s(i.Hour, e.hours) + s(i.Minute, e.minutes) : e.hours ? s(i.Hour, e.hours) : e.minutes && e.seconds ? "" + s(i.Minute, e.minutes) + s(i.Second, e.seconds) : e.minutes ? s(i.Minute, e.minutes) : s(i.Second, e.seconds || 0)
            }(d);
            var p = ":",
                m = !1;
            switch (a.o.intl.getLanguageCode()) {
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
            var h = d.seconds || 0,
                g = d.minutes || 0,
                f = d.hours || 0;
            switch (t) {
                case r.ClockHM:
                case r.ClockHMS:
                    var v = m ? l(f, 2) : f,
                        b = v + p + l(g, 2);
                    return t === r.ClockHMS && (b += p + l(h, 2)), b;
                case r.ClockMS:
                    var v = m ? l(g, 2) : g;
                    return v + p + l(h, 2)
            }
        };
        var i, r, a = n("6sO2");

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
            var n = e.toString();
            return n.length < t ? "0".repeat(t - n.length) + n : n
        }! function(e) {
            e[e.Second = 0] = "Second", e[e.Minute = 1] = "Minute", e[e.Hour = 2] = "Hour", e[e.Day = 3] = "Day", e[e.Week = 4] = "Week", e[e.Month = 5] = "Month"
        }(i || (i = {})),
        function(e) {
            e[e.Humanized = 0] = "Humanized", e[e.HumanizedShort = 1] = "HumanizedShort", e[e.ClockAuto = 2] = "ClockAuto", e[e.ClockHM = 3] = "ClockHM", e[e.ClockMS = 4] = "ClockMS", e[e.ClockHMS = 5] = "ClockHMS"
        }(r || (r = {}))
    },
    G7No: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e, t) {
            var n = i(e),
                r = i(t);
            return n.getTime() - r.getTime()
        }
    },
    GI7G: function(e, t, n) {
        var i = n("xA5w"),
            r = n("orNa"),
            a = n("NKE6");
        e.exports = function(e, t) {
            var n = i(e),
                o = i(t),
                s = a(n, o),
                l = Math.abs(r(n, o));
            return n.setMonth(n.getMonth() - s * l), s * (l - (a(n, o) === -s))
        }
    },
    GJxf: function(e, t, n) {
        "use strict";
        var i = n("RH2O"),
            r = n("TToO"),
            a = n("HW6M"),
            o = n("KSGD"),
            s = n("GiK3"),
            l = n("6sO2"),
            c = n("vH/s"),
            d = n("CSlQ"),
            u = n("81qH"),
            p = n("Odds");
        n("yF7E");
        var m, h, g = "carousel-content",
            f = 10,
            v = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        currentElementIndex: 0,
                        childrenRendered: !1,
                        hasTrackedItemSectionLoad: !1
                    }, t.onPreviewCardClick = function(e) {
                        if (t.props.videos) {
                            var n = t.props.videos[e];
                            l.n.trackItemSectionClick(r.__assign({
                                carousel_content: t.props.tracking.content,
                                item_id: n.id,
                                item_index: e,
                                item_type: c.TwitchDataType.Video,
                                item_viewcount: n.viewCount,
                                location: t.props.tracking.location
                            }, t.props.tracking.source))
                        }
                    }, t.getVideoCards = function() {
                        var e = t.props.videos;
                        if (null === e) {
                            for (var n = [], i = 0; i < f; i++) n.push(s.createElement(u.VideoPreviewCardPlaceholder, {
                                key: "carousel-placeholder-" + i
                            }));
                            return n
                        }
                        for (var r = [], a = 0; a < e.length; a++)
                            if (a < f || t.props.firstPageLoaded) {
                                if (e[a].id === t.props.currentlyWatchingVideoID) continue;
                                r.push(s.createElement(u.VideoPreviewCard, {
                                    context: t.props.listContext,
                                    collectionID: t.props.collectionID,
                                    onClick: t.onPreviewCardClick,
                                    key: "video-" + a,
                                    tracking: {
                                        content: t.props.tracking.content,
                                        content_index: a,
                                        medium: t.props.tracking.medium
                                    },
                                    overrideImageInteractivity: t.props.overrideCardImageInteractivity,
                                    video: e[a]
                                }))
                            } else r.push(s.createElement(u.VideoPreviewCardPlaceholder, {
                                key: "carousel-placeholder-" + a
                            }));
                        return r
                    }, t.moveCarouselForward = function() {
                        if (!t.isForwardButtonDisabled() && t.props.videos) {
                            var e = t.getNumberOfVisibleElements();
                            t.state.currentElementIndex + 2 * e > t.props.videos.length ? t.setState({
                                currentElementIndex: t.props.videos.length - e
                            }) : t.setState({
                                currentElementIndex: t.state.currentElementIndex + e
                            })
                        }
                    }, t.moveCarouselBackward = function() {
                        if (!t.isBackButtonDisabled()) {
                            var e = t.getNumberOfVisibleElements();
                            t.setState({
                                currentElementIndex: Math.max(t.state.currentElementIndex - e, 0)
                            })
                        }
                    }, t.isForwardButtonDisabled = function() {
                        if (!t.carouselContainerRef) return !1;
                        if (t.props.videos) {
                            var e = 0,
                                n = t.carouselContainerRef.querySelector("[data-js-selector=" + g + "]");
                            return n && (e = n.childElementCount), t.getLastVisibleIndex() >= e
                        }
                        return !0
                    }, t.isBackButtonDisabled = function() {
                        return 0 === t.state.currentElementIndex
                    }, t.getLastVisibleIndex = function() {
                        return t.state.currentElementIndex + t.getNumberOfVisibleElements()
                    }, t.getNumberOfVisibleElements = function() {
                        var e = t.carouselContainerRef.getBoundingClientRect(),
                            n = e.left,
                            i = e.right - n,
                            r = t.getVideoCardEndPadding();
                        return Math.floor((i + r) / t.getChildWidth())
                    }, t.refHandler = function(e) {
                        return t.carouselContainerRef = e
                    }, t.getChildWidth = function() {
                        if (!t.carouselContainerRef) return 0;
                        var e = t.carouselContainerRef.querySelector("[data-js-selector=" + g + "]");
                        return e && e.children.length ? e.children[0].getBoundingClientRect().width : 0
                    }, t.getVideoCardEndPadding = function() {
                        var e = t.carouselContainerRef.querySelector("[data-js-selector=" + g + "]");
                        if (!e || 0 === e.children.length) return 0;
                        var n = window.getComputedStyle(e.children[0]).paddingRight || "";
                        return 2 * parseInt(n, 10) || 0
                    }, t.pixelOffset = function() {
                        return t.getChildWidth() * t.state.currentElementIndex * -1
                    }, t.transformString = function() {
                        return "translate3d(" + t.pixelOffset() + "px, 0px, 0px)"
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    var e = this.context.registerReceiver;
                    e && (this.unregisterScrollHandler = e(this)), null !== this.props.videos && this.onDataLoaded()
                }, t.prototype.componentDidUpdate = function(e) {
                    !e.videos && this.props.videos && this.onDataLoaded()
                }, t.prototype.componentWillUnmount = function() {
                    this.unregisterScrollHandler && this.unregisterScrollHandler()
                }, t.prototype.render = function() {
                    return s.createElement(p._2, {
                        margin: {
                            y: 1
                        },
                        position: p._15.Relative
                    }, s.createElement("div", {
                        className: "video-carousel",
                        ref: this.refHandler
                    }, s.createElement(p._8, {
                        className: "video-carousel__child-container",
                        overflow: p._11.Hidden,
                        position: p._15.Relative,
                        fullWidth: !0,
                        "data-test-selector": "child-container"
                    }, s.createElement(p._2, {
                        margin: {
                            bottom: 1
                        }
                    }, s.createElement("div", {
                        className: "video-carousel__body",
                        style: {
                            transform: this.transformString()
                        },
                        "data-test-selector": "carousel-body"
                    }, s.createElement(p._55, {
                        noWrap: !0,
                        noGrow: !0,
                        childWidth: this.props.videoCardSize || p._56.Large,
                        gutterSize: p._57.Small,
                        "data-js-selector": g
                    }, this.getVideoCards())))), s.createElement(p._8, {
                        className: "video-carousel__nav",
                        display: p.R.Flex,
                        alignItems: p.c.Center,
                        position: p._15.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        fullHeight: !0
                    }, s.createElement(_, {
                        direction: b.DirectionPrevious,
                        disabled: !this.state.childrenRendered || this.isBackButtonDisabled(),
                        onClickHandler: this.moveCarouselBackward
                    })), s.createElement(p._8, {
                        className: "video-carousel__nav",
                        display: p.R.Flex,
                        alignItems: p.c.Center,
                        position: p._15.Absolute,
                        attachTop: !0,
                        attachRight: !0,
                        fullHeight: !0
                    }, s.createElement(_, {
                        direction: b.DirectionNext,
                        disabled: !this.state.childrenRendered || this.isForwardButtonDisabled(),
                        onClickHandler: this.moveCarouselForward
                    }))))
                }, t.prototype.checkVisible = function(e) {
                    this.props.videos && this.props.videos.length > 0 && !1 === this.state.hasTrackedItemSectionLoad && function(e) {
                        if (!e) return !1;
                        var t = e.getBoundingClientRect(),
                            n = window.innerWidth,
                            i = window.innerHeight;
                        return !(t.right < 0 || t.bottom < 0 || t.left > n || t.top > i)
                    }(this.carouselContainerRef) && this.trackSectionLoad()
                }, t.prototype.trackSectionLoad = function() {
                    for (var e = this.props.videos ? this.props.videos : [], t = [], n = [], i = 0, a = e; i < a.length; i++) {
                        var o = a[i];
                        t.push(o.id), n.push(o.viewCount)
                    }
                    l.n.trackItemSectionLoad(r.__assign({
                        carousel_content: this.props.tracking.content,
                        location: this.props.tracking.location,
                        rendered_item_count: e.length,
                        rendered_item_list: t,
                        rendered_item_types: [c.TwitchDataType.Video],
                        rendered_items_viewcounts: n
                    }, this.props.tracking.source)), this.setState({
                        hasTrackedItemSectionLoad: !0
                    })
                }, t.prototype.onDataLoaded = function() {
                    var e = this;
                    this.state.childrenRendered || this.setState({
                        childrenRendered: !0
                    }, function() {
                        e.checkVisible()
                    })
                }, t.contextTypes = {
                    registerReceiver: o.func
                }, t
            }(s.Component),
            b = {
                DirectionPrevious: "previous",
                DirectionNext: "next"
            },
            k = ((m = {})[b.DirectionPrevious] = "previous", m[b.DirectionNext] = "next", m),
            y = ((h = {})[b.DirectionPrevious] = p._25.AngleLeft, h[b.DirectionNext] = p._25.AngleRight, h),
            _ = function(e) {
                var t, n = k[e.direction],
                    i = ((t = {})[b.DirectionPrevious] = Object(l.d)("previous", "CarouselNavButton"), t[b.DirectionNext] = Object(l.d)("next", "CarouselNavButton"), t),
                    r = a("video-carousel__button", "video-carousel__button--" + n, {
                        "video-carousel__button--disabled": e.disabled
                    });
                return s.createElement(p._8, {
                    className: r,
                    position: p._15.Relative,
                    display: p.R.Flex,
                    alignItems: p.c.Stretch
                }, s.createElement(p.w, {
                    "data-test-selector": n + "-button",
                    onClick: e.onClickHandler,
                    disabled: e.disabled,
                    ariaLabel: i[e.direction],
                    icon: y[e.direction],
                    size: p.x.Large
                }))
            },
            S = Object(d.d)("VideoCarousel", {
                autoReportInteractive: !0
            })(v);
        n.d(t, "a", function() {
            return C
        });
        var C = Object(i.b)(function(e) {
            return {
                firstPageLoaded: e.session.firstPageLoaded
            }
        })(S)
    },
    GvNH: function(e, t, n) {
        var i = n("WNGz");
        e.exports = function(e) {
            return i(e).getTime() === i(new Date).getTime()
        }
    },
    GxDs: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            r = n("GiK3"),
            a = n("F8kA"),
            o = n("yDzg"),
            s = n("vH/s"),
            l = n("6sO2"),
            c = n("Odds"),
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
                return i.__extends(t, e), t.prototype.componentWillReceiveProps = function() {
                    this.setState({
                        hasImageLoadingError: !1
                    })
                }, t.prototype.render = function() {
                    var e = l.a.defaultStreamPreviewURL;
                    return !this.state.hasImageLoadingError && this.props.imageURL && (e = this.props.imageURL), r.createElement(c.E, {
                        aspect: c.l.Aspect16x9,
                        alt: this.props.altText,
                        src: e,
                        onError: this.handleImageError
                    })
                }, t
            }(r.Component),
            u = (n("1tZx"), "https://static-cdn.jtvnw.net/emoticons/v1/58765/2.0"),
            p = {
                ERROR: "chat-card-error",
                TITLE: "chat-card-title",
                DESCRIPTION: "chat-card-description"
            },
            m = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderErrorCard = function() {
                        var e = r.createElement("img", {
                            "data-test-selector": p.ERROR,
                            src: u,
                            className: "chat-card__error-img"
                        });
                        return t.renderCardContent(e, t.props.error)
                    }, t.renderCardContent = function(e, t) {
                        var n, i;
                        return t ? (n = r.createElement(c.Q, {
                            type: c._49.Span,
                            fontSize: c.V.Size5,
                            "data-test-selector": p.TITLE,
                            title: t.title
                        }, t.title), i = r.createElement(c.Q, {
                            type: c._49.Span,
                            fontSize: c.V.Size6,
                            color: c.K.Alt2,
                            "data-test-selector": p.DESCRIPTION
                        }, t.description)) : (e = r.createElement(c._14, {
                            overlay: !0
                        }), n = r.createElement(c._14, {
                            width: 180
                        }), i = r.createElement(c._14, {
                            width: 120
                        })), r.createElement(c._35, {
                            background: c.n.Base,
                            display: c.R.Flex,
                            flexWrap: c.U.NoWrap,
                            padding: .5
                        }, r.createElement(c._35, {
                            className: "chat-card__preview-img",
                            background: c.n.Alt2,
                            display: c.R.Flex,
                            alignItems: c.c.Center,
                            justifyContent: c._7.Center,
                            flexShrink: 0
                        }, e), r.createElement(c._8, {
                            display: c.R.Flex,
                            alignItems: c.c.Center,
                            overflow: c._11.Hidden
                        }, r.createElement(c._8, {
                            padding: {
                                left: 1
                            },
                            fullWidth: !0
                        }, r.createElement(c._8, {
                            className: "chat-card__title",
                            ellipsis: !0
                        }, n), r.createElement(c._8, {
                            ellipsis: !0
                        }, i))))
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e;
                    if (this.props.error) e = this.renderErrorCard();
                    else if (this.props.data) {
                        var t = Object(o.a)(this.props.data.contentURL, {
                                tt_medium: s.PageviewMedium.Chat,
                                tt_content: s.PageviewContent.ChatCard
                            }),
                            n = r.createElement(d, {
                                altText: this.props.data.title,
                                imageURL: this.props.data.previewImageURL
                            });
                        e = r.createElement(a.a, {
                            className: "chat-card__link",
                            to: t,
                            target: "_blank"
                        }, this.renderCardContent(n, {
                            title: this.props.data.title,
                            description: this.props.data.description
                        }))
                    } else e = this.renderCardContent();
                    return r.createElement(c._35, {
                        elevation: 1,
                        margin: {
                            top: .5
                        }
                    }, e)
                }, t
            }(r.Component),
            h = m;
        n.d(t, !1, function() {
            return u
        }), n.d(t, !1, function() {
            return p
        }), n.d(t, !1, function() {
            return m
        }), n.d(t, "a", function() {
            return h
        })
    },
    HXCM: function(e, t) {
        e.exports = function() {
            var e = new Date,
                t = e.getFullYear(),
                n = e.getMonth(),
                i = e.getDate(),
                r = new Date(0);
            return r.setFullYear(t, n, i + 1), r.setHours(23, 59, 59, 999), r
        }
    },
    I7cV: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e, t) {
            var n = t && Number(t.weekStartsOn) || 0,
                r = i(e),
                a = r.getDay(),
                o = 6 + (a < n ? -7 : 0) - (a - n);
            return r.setDate(r.getDate() + o), r.setHours(23, 59, 59, 999), r
        }
    },
    IJO1: function(e, t) {},
    IOwa: function(e, t, n) {
        "use strict";
        var i, r, a, o = n("TToO"),
            s = n("HW6M"),
            l = n("GiK3"),
            c = n("6sO2"),
            d = n("2o2f"),
            u = n("Odds"),
            p = (n("CybZ"), (i = {})[d.a.Live] = "stream-type-indicator--live", i[d.a.Premiere] = "stream-type-indicator--premiere", i[d.a.Rerun] = "stream-type-indicator--rerun", i[d.a.WatchParty] = "stream-type-indicator--rerun", i),
            m = ((r = {})[d.a.Premiere] = u._25.VideoPremiere, r[d.a.Rerun] = u._25.VideoRerun, r[d.a.WatchParty] = u._25.VideoRerun, r),
            h = ((a = {})[d.a.Premiere] = u._26.Live, a[d.a.Rerun] = u._26.Inherit, a[d.a.WatchParty] = u._26.Inherit, a),
            g = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    return l.createElement(u._35, {
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
                        type: u._49.Span
                    }, this.getLabel()))
                }, t.prototype.getClassNames = function() {
                    var e = {
                        "stream-type-indicator": !0
                    };
                    return e[p[this.props.type]] = !0, s(e)
                }, t.prototype.getIcon = function() {
                    return this.props.hosting ? l.createElement(u._35, {
                        borderRadius: u.t.Rounded,
                        className: "stream-type-indicator__hosting-dot"
                    }) : this.props.type === d.a.Live ? l.createElement(u._8, {
                        className: "stream-type-indicator__live-wrapper",
                        display: u.R.Flex,
                        alignItems: u.c.Center
                    }, l.createElement(u.G, {
                        status: u.I.Live,
                        size: u.H.Small
                    })) : l.createElement(u._24, {
                        asset: m[this.props.type],
                        type: h[this.props.type],
                        width: 14,
                        height: 14
                    })
                }, t.prototype.getLabel = function() {
                    if (this.props.hosting) return Object(c.d)("Hosting", "StreamTypeIndicator");
                    switch (this.props.type) {
                        case d.a.Live:
                            return Object(c.d)("LIVE", "StreamTypeIndicator");
                        case d.a.Premiere:
                            return Object(c.d)("Premiere", "StreamTypeIndicator");
                        case d.a.Rerun:
                        case d.a.WatchParty:
                            return Object(c.d)("Rerun", "StreamTypeIndicator");
                        default:
                            return ""
                    }
                }, t
            }(l.Component);
        n.d(t, "a", function() {
            return g
        })
    },
    Ic9h: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return h
        }), n.d(t, "a", function() {
            return f
        });
        var i = n("TToO"),
            r = n("HW6M"),
            a = (n.n(r), n("KSGD")),
            o = (n.n(a), n("GiK3")),
            s = (n.n(o), n("F8kA")),
            l = n("5kgt"),
            c = n("SI0h"),
            d = n("eXld"),
            u = n("2aoH"),
            p = n("Odds"),
            m = n("1E7T"),
            h = (n.n(m), "channel-page-layout__scroll-area--theatre-mode"),
            g = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e, t = r(((e = {})[h] = !!this.props.theatreMode, e));
                    return o.createElement(p._8, i.__assign({
                        className: "chennel-page-layout",
                        display: p.R.Flex,
                        flexDirection: p.T.Column,
                        flexWrap: p.U.NoWrap,
                        fullHeight: !0
                    }, Object(l.a)(this.props)), o.createElement(d.b, {
                        className: t,
                        suppressScrollX: !0,
                        addPaddingWhenPlayerIsPersisting: !0
                    }), o.createElement(u.a, null, o.createElement(c.a, {
                        currentPage: this.props.currentPage,
                        channelLogin: this.props.ownerLogin || ""
                    })), o.createElement(p._8, {
                        padding: {
                            top: 2,
                            x: 3
                        }
                    }, this.props.children))
                }, t.contextTypes = {
                    scrollToTop: a.func
                }, t
            }(o.Component),
            f = Object(s.f)(g)
    },
    IwGL: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n.d(t, "LatestVideosFromFollowedCarouselComponent", function() {
            return h
        }), n.d(t, "LatestVideosFromFollowedCarousel", function() {
            return g
        });
        var i = n("TToO"),
            r = n("GiK3"),
            a = (n.n(r), n("3zLD")),
            o = (n.n(a), n("6sO2")),
            s = n("vKFS"),
            l = n("7vx8"),
            c = n("CSlQ"),
            d = n("GJxf"),
            u = n("dc2a"),
            p = n("Odds"),
            m = n("97Ye"),
            h = (n.n(m), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.componentDidUpdate = function() {
                    this.props.data.loading || this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.data && !this.props.data.loading && this.props.data.currentUser && Object(u.a)(this.props.data.currentUser.followedVideos) || null;
                    return !this.props.data || this.props.data.loading || e && 0 !== e.length ? r.createElement("div", null, r.createElement(p._8, {
                        padding: {
                            bottom: 1
                        }
                    }, r.createElement(p.Q, {
                        type: p._49.H4,
                        fontSize: p.V.Size5,
                        transform: p._48.Uppercase,
                        color: p.K.Alt2
                    }, Object(o.d)("Latest videos", "LatestVideosFromFollowedCarousel"))), r.createElement(d.a, {
                        currentlyWatchingVideoID: this.props.currentlyWatchingVideoID,
                        listContext: s.b.MixedGameAndChannelList,
                        overrideCardImageInteractivity: !0,
                        tracking: {
                            content: this.props.tracking.content,
                            location: this.props.tracking.location,
                            medium: this.props.tracking.medium,
                            source: {}
                        },
                        videoCardSize: p._56.Large,
                        videos: e
                    })) : null
                }, t
            }(r.Component)),
            g = Object(a.compose)(Object(l.a)(m), Object(c.d)("LatestVideosFromFollowedCarousel"))(h)
    },
    J8WN: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return s
        });
        var i = n("TToO"),
            r = n("GiK3"),
            a = (n.n(r), n("Odds")),
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
                    return r.createElement(a.S, {
                        dragOver: this.state.isDraggingOver,
                        error: this.props.error
                    }, r.createElement(a._2, {
                        position: a._15.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        fullWidth: !0,
                        fullHeight: !0,
                        zIndex: a._62.Above
                    }, r.createElement("input", {
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
            }(r.Component))
    },
    JBcW: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        }), t.c = function(e) {
            r.n.track(a.SpadeEventType.BrowserPushNotificationPrompt, e)
        }, t.b = function(e) {
            r.n.track(a.SpadeEventType.BrowserPushNotificationDisable, e)
        };
        var i, r = n("6sO2"),
            a = n("vH/s");
        ! function(e) {
            e.Settings = "settings", e.Channel = "channel"
        }(i || (i = {}))
    },
    JNsx: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e) {
            return i(e).getMinutes()
        }
    },
    JURy: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e) {
            var t = i(e),
                n = new Date(0);
            return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n
        }
    },
    Javx: function(e, t, n) {
        var i = n("b7g8");
        e.exports = function(e) {
            return i(e) ? 366 : 365
        }
    },
    Jtuq: function(e, t, n) {
        var i = n("lQzg"),
            r = n("xA5w");
        e.exports = function(e, t) {
            var n = r(e),
                a = r(t);
            return 4 * (n.getFullYear() - a.getFullYear()) + (i(n) - i(a))
        }
    },
    Jvcu: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e, t) {
            var n = i(e),
                r = Number(t);
            return n.setDate(n.getDate() + r), n
        }
    },
    K7ZZ: function(e, t, n) {
        var i = n("zZbG"),
            r = n("3znZ");
        e.exports = function(e) {
            var t = i(e),
                n = new Date(0);
            n.setFullYear(t + 1, 0, 4), n.setHours(0, 0, 0, 0);
            var a = r(n);
            return a.setMilliseconds(a.getMilliseconds() - 1), a
        }
    },
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
    L8zk: function(e, t, n) {
        "use strict";
        var i = n("HW6M"),
            r = n("GiK3"),
            a = (n("V+9p"), function(e) {
                var t = e.isAtMention ? "@" : "",
                    n = i("mention-fragment", {
                        "mention-fragment--recipient": e.isCurrentUserRecipient
                    });
                return r.createElement("span", {
                    className: n,
                    "data-a-target": "chat-message-mention"
                }, "" + t + e.recipient)
            }),
            o = a;
        o.displayName = "MentionFragment", n.d(t, !1, function() {
            return a
        }), n.d(t, "a", function() {
            return o
        })
    },
    LBNC: function(e, t, n) {
        "use strict";
        t.a = function() {
            return "serviceWorker" in window.navigator && "PushManager" in window
        }
    },
    LLTj: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e) {
            var t = i(e);
            return t.setMinutes(0, 0, 0), t
        }
    },
    LU20: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e) {
            var t = i(e);
            return t.setSeconds(59, 999), t
        }
    },
    LgcN: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        }), n.d(t, "b", function() {
            return o
        }), n.d(t, "c", function() {
            return s
        }), n.d(t, "d", function() {
            return l
        }), n.d(t, "e", function() {
            return c
        }), n.d(t, "f", function() {
            return d
        });
        var i = n("TToO"),
            r = this,
            a = function() {
                return i.__awaiter(r, void 0, void 0, function() {
                    return i.__generator(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, n.e(131).then(n.bind(null, "tk3B"))];
                            case 1:
                                return [2, e.sent().items]
                        }
                    })
                })
            },
            o = function() {
                return i.__awaiter(r, void 0, void 0, function() {
                    return i.__generator(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, n.e(130).then(n.bind(null, "e/M0"))];
                            case 1:
                                return [2, e.sent().items]
                        }
                    })
                })
            },
            s = function() {
                return i.__awaiter(r, void 0, void 0, function() {
                    return i.__generator(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, n.e(129).then(n.bind(null, "Dan5"))];
                            case 1:
                                return [2, e.sent().items]
                        }
                    })
                })
            },
            l = function() {
                return i.__awaiter(r, void 0, void 0, function() {
                    return i.__generator(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, n.e(128).then(n.bind(null, "sQp1"))];
                            case 1:
                                return [2, e.sent().items]
                        }
                    })
                })
            },
            c = function() {
                return i.__awaiter(r, void 0, void 0, function() {
                    return i.__generator(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, n.e(127).then(n.bind(null, "+kKy"))];
                            case 1:
                                return [2, e.sent().items]
                        }
                    })
                })
            },
            d = function() {
                return i.__awaiter(r, void 0, void 0, function() {
                    return i.__generator(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, n.e(126).then(n.bind(null, "2NJ8"))];
                            case 1:
                                return [2, e.sent().items]
                        }
                    })
                })
            }
    },
    Lwev: function(e, t) {},
    "Lx+S": function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            r = n("GiK3"),
            a = n("RH2O"),
            o = n("CIox"),
            s = n("2KeS"),
            l = n("NXs7"),
            c = n("Ouuk"),
            d = n("jF7o"),
            u = n("+xm8"),
            p = n("f2i/"),
            m = n("NikC"),
            h = n("Aj/L"),
            g = n("0nzt"),
            f = n("vh75"),
            v = n("ass3"),
            b = n("TnJK"),
            k = n("O0Qc"),
            y = n("VsL1"),
            _ = n("Umoc"),
            S = n("6sO2"),
            C = n("zCIC"),
            w = n("7vx8"),
            E = n("HW6M"),
            O = n("6BvN"),
            D = [{
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
            T = n("Odds"),
            N = (n("90yy"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onKeyPress = function(e) {
                        if (e.charCode === O.a.Enter || e.charCode === O.a.Space) {
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
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = this,
                        t = D.map(function(t) {
                            var n = t.hex === e.props.selectedColor,
                                i = {
                                    "color-chooser": !0,
                                    "color-chooser--selected": n
                                };
                            return r.createElement("div", {
                                role: "radio",
                                "aria-checked": n,
                                key: t.hex,
                                "data-color": t.hex,
                                title: t.name,
                                onClick: e.onColorSelected,
                                onKeyPress: e.onKeyPress,
                                className: E(i),
                                style: {
                                    backgroundColor: t.hex
                                },
                                "data-test-selector": "color_swatch_" + t.hex,
                                "data-a-target": "color_swatch_" + t.hex,
                                tabIndex: 0
                            })
                        }),
                        n = Object(S.d)("Name Color", "ChatSettings"),
                        i = r.createElement(T.Q, {
                            transform: T._48.Uppercase,
                            color: T.K.Alt2
                        }, n);
                    return this.props.borderTop && (i = r.createElement(T._35, {
                        margin: {
                            top: 2
                        },
                        borderTop: !0,
                        padding: {
                            top: 2
                        }
                    }, i)), r.createElement("div", null, r.createElement(T._35, {
                        margin: {
                            bottom: 1
                        },
                        background: T.n.Base,
                        color: T.K.Base,
                        display: T.R.InlineFlex,
                        flexDirection: T.T.Column,
                        fullWidth: !0
                    }, i), r.createElement(T._2, {
                        margin: {
                            y: 1
                        },
                        display: T.R.Flex,
                        flexWrap: T.U.Wrap
                    }, r.createElement("div", {
                        role: "radiogroup",
                        "aria-label": n
                    }, t, r.createElement(T.Q, {
                        fontSize: T.V.Size7
                    }, r.createElement("a", {
                        href: "https://twitch.tv/products/turbo?ref=more_colors_direct"
                    }, Object(S.d)("more colors →", "ChatSettings"))))))
                }, t
            }(r.Component)),
            I = n("OAwv"),
            x = n("AaXK"),
            M = (n("7LVu"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {}, t.onGlobalBadgeClicked = function(e) {
                        var n = e.currentTarget.getAttribute("data-badge");
                        t.setGlobalBadge(t.props.userLogin, n || "")
                    }, t.onGlobalBadgeKeyPress = function(e) {
                        if (e.charCode === O.a.Enter || e.charCode === O.a.Space) {
                            var n = e.currentTarget.getAttribute("data-badge");
                            t.setGlobalBadge(t.props.userLogin, n || "")
                        }
                    }, t.onChannelBadgeClicked = function(e) {
                        var n = e.currentTarget.getAttribute("data-badge");
                        t.setChannelBadge(t.props.channelLogin, t.props.userLogin, n || "")
                    }, t.onChannelBadgeKeyPress = function(e) {
                        if (e.charCode === O.a.Enter || e.charCode === O.a.Space) {
                            var n = e.currentTarget.getAttribute("data-badge");
                            t.setChannelBadge(t.props.channelLogin, t.props.userLogin, n || "")
                        }
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return this.props.data && !this.props.data.loading && this.props.data.user && this.props.data.currentUser ? r.createElement("div", null, r.createElement(N, {
                        selectedColor: this.props.userChatColor,
                        onColorSelected: this.props.onColorSelected,
                        borderTop: !0
                    }), this.getBadgeChooser()) : null
                }, t.prototype.getBadgeChooser = function() {
                    var e = this;
                    if (this.props.data) {
                        var t = this.props.data.user.self.availableBadges,
                            n = this.props.data.user.self.selectedBadge,
                            i = this.props.data.currentUser.availableBadges,
                            a = this.props.data.currentUser.selectedBadge;
                        if (!t) return null;
                        var o = void 0 === this.state.channelBadgeID && n ? n.setID : this.state.channelBadgeID,
                            s = !o,
                            l = {
                                "edit-appearance__badge-chooser": !0,
                                "edit-appearance__badge-chooser--selected": s
                            },
                            c = Object(S.d)("No channel badges :(", "ChatSettings");
                        t && t.length > 0 && (c = t.map(function(t) {
                            var i = Boolean(n && t.setID === o),
                                a = {
                                    "edit-appearance__badge-chooser": !0,
                                    "edit-appearance__badge-chooser--selected": i
                                };
                            return r.createElement("div", {
                                role: "radio",
                                "aria-checked": i,
                                "data-badge": t.setID,
                                onClick: e.onChannelBadgeClicked,
                                onKeyPress: e.onChannelBadgeKeyPress,
                                key: t.setID + "/" + t.version,
                                className: E(a),
                                "data-test-selector": "channel_badge_" + t.setID,
                                "data-a-target": "channel_badge_" + t.setID,
                                tabIndex: 0
                            }, r.createElement(T._52, {
                                label: t.title
                            }, r.createElement("img", {
                                alt: t.title,
                                src: t.image1x,
                                srcSet: t.image1x + " 1x, " + t.image2x + " 2x, " + t.image4x + " 4x"
                            })))
                        })).push(r.createElement("div", {
                            key: "none",
                            role: "radio",
                            "aria-checked": s,
                            "data-badge": "",
                            onClick: this.onChannelBadgeClicked,
                            onKeyPress: this.onChannelBadgeKeyPress,
                            className: E(l),
                            "data-test-selector": "channel_badge_none",
                            "data-a-target": "channel_badge_none",
                            tabIndex: 0
                        }, r.createElement(T._52, {
                            label: Object(S.d)("Same as Global", "ChatSettings")
                        }, r.createElement("div", {
                            className: "edit-appearance__badge-chooser__none"
                        }, r.createElement(T._24, {
                            asset: T._25.Global
                        })))));
                        var d = void 0 === this.state.globalBadgeID && a ? a.setID : this.state.globalBadgeID,
                            u = !d,
                            p = {
                                "edit-appearance__badge-chooser": !0,
                                "edit-appearance__badge-chooser--selected": u
                            },
                            m = Object(S.d)("No global badges :(", "ChatSettings");
                        return i && i.length > 0 && (m = i.map(function(t) {
                            var n = Boolean(a && t.setID === d),
                                i = {
                                    "edit-appearance__badge-chooser": !0,
                                    "edit-appearance__badge-chooser--selected": n
                                };
                            return r.createElement("div", {
                                role: "radio",
                                "aria-checked": n,
                                "data-badge": t.setID,
                                onClick: e.onGlobalBadgeClicked,
                                onKeyPress: e.onGlobalBadgeKeyPress,
                                key: t.setID + "/" + t.version,
                                className: E(i),
                                "data-test-selector": "global_badge_" + t.setID,
                                "data-a-target": "global_badge_" + t.setID,
                                tabIndex: 0
                            }, r.createElement(T._52, {
                                label: t.title
                            }, r.createElement("img", {
                                alt: t.title,
                                src: t.image1x,
                                srcSet: t.image1x + " 1x, " + t.image2x + " 2x, " + t.image4x + " 4x"
                            })))
                        })).push(r.createElement("div", {
                            role: "radio",
                            "aria-checked": u,
                            key: "none",
                            "data-badge": "",
                            onClick: this.onGlobalBadgeClicked,
                            onKeyPress: this.onGlobalBadgeKeyPress,
                            className: E(p),
                            "data-test-selector": "global_badge_none",
                            "data-a-target": "global_badge_none",
                            tabIndex: 0
                        }, r.createElement(T._52, {
                            label: Object(S.d)("None", "ChatSettings")
                        }, r.createElement("div", {
                            className: "edit-appearance__badge-chooser__none"
                        }, r.createElement(T._24, {
                            asset: T._25.Ban
                        }))))), r.createElement("div", null, r.createElement(T._35, {
                            background: T.n.Base,
                            color: T.K.Base,
                            display: T.R.InlineFlex,
                            flexDirection: T.T.Column,
                            fullWidth: !0
                        }, r.createElement(T._35, {
                            margin: {
                                top: 2
                            },
                            padding: {
                                top: 2
                            },
                            borderTop: !0
                        }, r.createElement(T._52, {
                            align: T._53.Left,
                            label: Object(S.d)("Your global badge is shown when chatting and whispering.", "ChatSettings"),
                            width: 175
                        }, r.createElement(T.Q, {
                            color: T.K.Alt2,
                            transform: T._48.Uppercase
                        }, Object(S.d)("Global Badge [?]", "ChatSettings")))), r.createElement(T._2, {
                            margin: {
                                y: 1
                            },
                            padding: {
                                top: 1
                            },
                            display: T.R.Flex,
                            "data-a-target": "global-badge-selector"
                        }, r.createElement("div", {
                            role: "radiogroup"
                        }, m))), r.createElement(T._35, {
                            background: T.n.Base,
                            color: T.K.Base,
                            display: T.R.InlineFlex,
                            flexDirection: T.T.Column,
                            fullWidth: !0
                        }, r.createElement(T._35, {
                            margin: {
                                top: 2
                            },
                            padding: {
                                top: 2
                            },
                            borderTop: !0
                        }, r.createElement(T._52, {
                            align: T._53.Left,
                            label: Object(S.d)("Change the badge shown when chatting in this channel.", "ChatSettings"),
                            width: 175
                        }, r.createElement(T.Q, {
                            color: T.K.Alt2,
                            transform: T._48.Uppercase
                        }, Object(S.d)("Channel Badge [?]", "ChatSettings")))), r.createElement(T._2, {
                            margin: {
                                y: 1
                            },
                            padding: {
                                top: 1
                            },
                            display: T.R.Flex,
                            "data-a-target": "channel-badge-selector"
                        }, r.createElement("div", {
                            role: "radiogroup"
                        }, c))))
                    }
                }, t.prototype.setChannelBadge = function(e, t, n) {
                    return i.__awaiter(this, void 0, void 0, function() {
                        var r, a;
                        return i.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return r = {
                                        "Client-ID": S.o.config.legacyClientID,
                                        Accept: "application/vnd.twitchtv.v4+json; charset=UTF-8",
                                        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                                        "Accept-Language": "en-us",
                                        Authorization: "OAuth " + this.props.authToken
                                    }, [4, fetch("https://api.twitch.tv/kraken/users/" + t + "/chat/channels/" + e + "/badges", {
                                        method: "PUT",
                                        body: I.stringify({
                                            selected_badge: n
                                        }),
                                        headers: r
                                    })];
                                case 1:
                                    return (a = i.sent()) && a.ok && (this.props.onBadgesChanged(), this.setState({
                                        channelBadgeID: n
                                    })), [2]
                            }
                        })
                    })
                }, t.prototype.setGlobalBadge = function(e, t) {
                    return i.__awaiter(this, void 0, void 0, function() {
                        var n, r;
                        return i.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return n = {
                                        "Client-ID": S.o.config.legacyClientID,
                                        Accept: "application/vnd.twitchtv.v4+json; charset=UTF-8",
                                        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                                        "Accept-Language": "en-us",
                                        Authorization: "OAuth " + this.props.authToken
                                    }, [4, fetch("https://api.twitch.tv/kraken/users/" + e + "/chat/badges", {
                                        method: "PUT",
                                        body: I.stringify({
                                            selected_badge: t
                                        }),
                                        headers: n
                                    }).catch(console.error)];
                                case 1:
                                    return (r = i.sent()) && r.ok && (this.props.onBadgesChanged(), this.setState({
                                        globalBadgeID: t
                                    })), [2]
                            }
                        })
                    })
                }, t = i.__decorate([Object(w.a)(x, {
                    options: function(e) {
                        return {
                            variables: {
                                channelLogin: e.channelLogin
                            }
                        }
                    }
                })], t)
            }(r.Component)),
            R = n("+Znq"),
            L = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(T._8, {
                        "data-toggle-balloon-id": "raids-follower-only-tooltip",
                        margin: {
                            left: .5
                        },
                        position: T._15.Relative
                    }, r.createElement(T._52, {
                        align: T._53.Right,
                        direction: T._54.Top,
                        display: T.R.InlineFlex,
                        label: this.props.text,
                        width: 175,
                        show: !0
                    }, r.createElement(T._2, {
                        alignItems: T.c.Center,
                        className: "chat-settings__highlight-indicator",
                        display: T.R.InlineFlex,
                        justifyContent: T._7.Center
                    }, r.createElement(T.Q, {
                        color: T.K.Overlay,
                        fontSize: T.V.Size8,
                        type: T._49.Span,
                        "data-test-selector": "raids-follower-only-tooltip"
                    }, "i"))))
                }, t
            }(r.Component),
            A = n("V5M+"),
            F = n("oSFp"),
            V = n("F8kA"),
            U = n("9u8h"),
            j = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.targetChannelID = t.props.targetChannelID, t
                }
                return i.__extends(t, e), t.fetchRecentRaidsList = function(e) {
                    return i.__awaiter(this, void 0, void 0, function() {
                        var t, n;
                        return i.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return i.trys.push([0, 2, , 3]), [4, U.a.get("/kraken/raids?client_id=" + S.a.authSettings.clientID + "&api_version=" + S.a.defaultAPIVersion + "&target_id=" + e)];
                                case 1:
                                    return t = i.sent(), [2, this.deserialize(t)];
                                case 2:
                                    return n = i.sent(), S.j.error(n, "Couldn't fetch raids list"), [2, []];
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
                                var i = {
                                    raidID: e.body.raids[n]._id,
                                    raidAt: e.body.raids[n].raid_at,
                                    userID: e.body.raids[n].creator_user._id,
                                    name: e.body.raids[n].creator_user.name
                                };
                                t.push(i)
                            }
                        return t
                    }
                    return []
                }, t
            }(r.Component),
            P = n("oIkB"),
            H = n("g7wA"),
            B = n("O9wU"),
            W = n("jPU6"),
            z = n("y1/w"),
            G = (n("MSFW"), n("L0RX")),
            q = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onUsernameClick = function(e) {
                        var n = e.currentTarget.getAttribute("data-username"),
                            i = e.currentTarget.getAttribute("data-raid-id") || "";
                        n && t.props.onUsernameClick(n, B.a.recent_raids, i)
                    }, t.onBanButtonClick = function(e) {
                        var n = e.currentTarget.getAttribute("data-channel-id") || "",
                            i = e.currentTarget.getAttribute("data-target-user-login") || "";
                        (0, t.props.banUser)(Object(P.a)({
                            channelID: n,
                            bannedUserLogin: i
                        }))
                    }, t.onUnbanButtonClick = function(e) {
                        var n = e.currentTarget.getAttribute("data-channel-id") || "",
                            i = e.currentTarget.getAttribute("data-target-user-login") || "";
                        (0, t.props.unbanUser)(Object(P.a)({
                            channelID: n,
                            bannedUserLogin: i
                        }))
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(T._8, {
                        key: "recent-raids-layout2-" + this.props.raiderUserID,
                        className: "recent-raids-item",
                        flexDirection: T.T.Row,
                        display: T.R.Flex,
                        fullWidth: !0
                    }, r.createElement(T._8, {
                        flexDirection: T.T.Row,
                        display: T.R.Flex,
                        fullWidth: !0,
                        justifyContent: T._7.Between
                    }, r.createElement(T.Q, {
                        bold: !0
                    }, r.createElement("a", {
                        className: "recent-raids-item__name",
                        "data-username": this.props.channelLogin,
                        "data-raid-id": this.props.raidID,
                        onClick: this.onUsernameClick,
                        href: "#"
                    }, this.props.channelLogin)), r.createElement(T._8, {
                        position: T._15.Relative
                    }, r.createElement(T._8, {
                        className: "recent-raids-item__timestamp"
                    }, Object(H.k)(Date.parse(this.props.timestamp))), this.getCardSlideInContent())))
                }, t.prototype.getCardSlideInContent = function() {
                    if (!this.props.slideInContent) return null;
                    var e = null;
                    return e = this.props.data.chatRoomBanStatus && this.props.data.chatRoomBanStatus.isPermanent ? r.createElement(T.v, {
                        key: "recent-raids-ban-button-" + this.props.raiderUserID,
                        size: T.z.Small,
                        type: T.B.Text,
                        onClick: this.onUnbanButtonClick,
                        "data-a-target": "recent-raid-item-button",
                        "data-raid-id": this.props.raidID,
                        "data-target-user-login": this.props.raiderLogin,
                        "data-target-user-id": this.props.raiderUserID,
                        "data-channel-id": this.props.channelID
                    }, Object(S.d)("Unban", "RecentRaid")) : r.createElement(T.v, {
                        key: "recent-raids-ban-button-" + this.props.raiderUserID,
                        size: T.z.Small,
                        type: T.B.Text,
                        onClick: this.onBanButtonClick,
                        "data-a-target": "recent-raid-item-button",
                        "data-raid-id": this.props.raidID,
                        "data-target-user-login": this.props.raiderLogin,
                        "data-target-user-id": this.props.raiderUserID,
                        "data-channel-id": this.props.channelID
                    }, Object(S.d)("Ban", "RecentRaid")), r.createElement(T._8, {
                        key: "recent-raids-layout-" + this.props.raiderUserID,
                        className: "recent-raids-item__hover-content",
                        zIndex: T._62.Above,
                        "data-a-target": "recent-raids-item-hover"
                    }, this.props.slideInContent, e)
                }, t = i.__decorate([Object(w.a)(z, {
                    options: function(e) {
                        return {
                            variables: {
                                targetUserID: e.raiderUserID,
                                channelID: e.channelID
                            },
                            fetchPolicy: "cache-and-network"
                        }
                    }
                }), Object(w.a)(W, {
                    name: "banUser",
                    options: function(e) {
                        return {
                            update: function(t, n) {
                                ! function(e, t, n) {
                                    var i = e.readQuery({
                                        query: z,
                                        variables: {
                                            targetUserID: n.raiderUserID,
                                            channelID: n.channelID
                                        }
                                    });
                                    i && (t && t.data && (i.chatRoomBanStatus = {
                                        isPermanent: !0,
                                        __typename: "ChatRoomBanStatus"
                                    }), e.writeQuery({
                                        query: z,
                                        variables: {
                                            targetUserID: n.raiderUserID,
                                            channelID: n.channelID
                                        },
                                        data: i
                                    }))
                                }(t, n, e)
                            }
                        }
                    }
                }), Object(w.a)(G, {
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
                                        var r = i.__assign({}, n, {
                                            chatRoomBanStatus: null
                                        });
                                        e.writeQuery({
                                            query: z,
                                            variables: {
                                                targetUserID: t.raiderUserID,
                                                channelID: t.channelID
                                            },
                                            data: r
                                        })
                                    }
                                }(t, e)
                            }
                        }
                    }
                })], t)
            }(r.Component),
            K = n("mw/a"),
            Y = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {}, t.onReportButtonClick = function(e) {
                        var n = e.currentTarget.getAttribute("data-raid-id") || "",
                            i = e.currentTarget.getAttribute("data-target-user-id") || "",
                            r = e.currentTarget.getAttribute("data-target-user-login") || "";
                        t.props.showReportUserModal({
                            reportContext: {
                                contentType: K.a.Raid,
                                targetUserID: i,
                                contentID: n,
                                extra: JSON.stringify({
                                    channel_id: i.toString()
                                }),
                                additionalTrackingID: t.props.targetChannelID
                            },
                            title: Object(S.d)("Report {channelDisplayName}", {
                                channelDisplayName: r
                            }, "ReportUserModal")
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    return i.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return i.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, j.fetchRecentRaidsList(this.props.targetChannelID)];
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
                        for (var i in 0 === this.state.raidChannels.length && e.push(r.createElement(T.Q, {
                                key: "recent-raids-no-raids",
                                type: T._49.P
                            }, Object(S.d)("You have no recent raids", "RecentRaids"))), this.state.raidChannels)
                            if (i.hasOwnProperty) {
                                var a = this.state.raidChannels[i];
                                this.state.raidChannels.hasOwnProperty(i) && void 0 === n[a.userID] && (t.push(r.createElement(q, {
                                    key: "recent-raids-item-" + a.userID,
                                    slideInContent: [r.createElement(T._35, {
                                        key: "recent-raids-item-report-area-" + a.userID,
                                        color: T.K.Alt2,
                                        display: T.R.InlineFlex
                                    }, r.createElement(T.v, {
                                        key: "recent-raid-report-button",
                                        size: T.z.Small,
                                        type: T.B.Text,
                                        onClick: this.onReportButtonClick,
                                        "data-a-target": "recent-raid-item-button",
                                        "data-raid-id": a.raidID,
                                        "data-target-user-login": a.name,
                                        "data-target-user-id": a.userID
                                    }, Object(S.d)("Report", "RecentRaid")), r.createElement(T._52, {
                                        align: T._53.Right,
                                        width: 150,
                                        label: Object(S.d)("Banning a user prevents them from future chatting or raiding", "RecentRaid")
                                    }))],
                                    timestamp: a.raidAt,
                                    channelLogin: a.name,
                                    raiderUserID: a.userID,
                                    channelID: this.props.targetChannelID,
                                    raiderLogin: a.name,
                                    raidID: a.raidID,
                                    onUsernameClick: this.props.onUsernameClick,
                                    showReportUserModal: this.props.showReportUserModal
                                })), n[a.userID] = !0)
                            }
                    var o = null;
                    return this.props.recentRaids ? r.createElement(T._8, {
                        key: "recent-raids"
                    }, r.createElement(T._8, {
                        margin: {
                            bottom: 2
                        }
                    }, r.createElement(T.Q, {
                        color: T.K.Link,
                        type: T._49.Span
                    }, r.createElement(V.a, {
                        to: {
                            pathname: "/broadcast/dashboard/settings/raids"
                        }
                    }, Object(S.d)("Manage Raid Settings", "RecentRaids")))), e, t) : (o = r.createElement(T._8, {
                        key: "recent-raids",
                        margin: {
                            top: 1,
                            bottom: 1
                        },
                        display: T.R.Flex,
                        justifyContent: T._7.Between,
                        alignItems: T.c.Center
                    }, r.createElement(T.O, {
                        hoverUnderlineNone: !0,
                        onClick: this.props.onClickRecentRaids,
                        "data-test-selector": "recent-raids-button"
                    }, Object(S.d)("See Recent Raids", "ChatSettings")), this.props.tooltipText && r.createElement(T._8, {
                        position: T._15.Relative
                    }, r.createElement(T._52, {
                        align: T._53.Right,
                        direction: T._54.Top,
                        display: T.R.InlineFlex,
                        label: this.props.tooltipText,
                        width: 175,
                        show: !0
                    }, r.createElement(T._2, {
                        alignItems: T.c.Center,
                        className: "chat-settings__highlight-indicator",
                        display: T.R.InlineFlex,
                        justifyContent: T._7.Center,
                        margin: {
                            left: .5
                        }
                    }, r.createElement(T.Q, {
                        color: T.K.Overlay,
                        fontSize: T.V.Size8,
                        type: T._49.Span
                    }, "i"))))), r.createElement(T._8, null, o))
                }, t
            }(r.Component);
        var Q = Object(a.b)(function() {
                return {}
            }, function(e) {
                return Object(s.b)({
                    showReportUserModal: function(e) {
                        var t = i.__rest(e, []);
                        return Object(A.d)(F.a, t)
                    }
                }, e)
            })(Y),
            J = n("UzRK"),
            $ = n("YDbY"),
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
                        return "number" == typeof e ? e : J.a
                    }, n.onFollowerModeToggle = function() {
                        if (n.props.followerModeEnabled) n.props.onChatCommand(Object(k.d)()), n.props.onFollowerModeDisable();
                        else {
                            var e = n.getSelectedFollowerDuration();
                            n.props.onChatCommand(Object(k.f)(e)), n.props.onFollowerModeDurationChange(e), n.props.onFollowerModeEnable()
                        }
                        Object(_.a)({
                            channelLogin: n.props.channelLogin,
                            isHostMode: n.props.isHostMode,
                            newValue: !n.props.followerModeEnabled,
                            settingName: b.a.FollowerMode
                        })
                    }, n.onSlowModeToggle = function() {
                        n.props.slowModeEnabled ? (n.props.onChatCommand(Object(k.e)()), n.props.onSlowModeDisable()) : (n.props.onChatCommand(Object(k.g)()), n.props.onSlowModeEnable()), Object(_.a)({
                            channelLogin: n.props.channelLogin,
                            isHostMode: n.props.isHostMode,
                            newValue: !n.props.slowModeEnabled,
                            settingName: b.a.SlowMode
                        })
                    }, n.onFollowerDurationChange = function(e) {
                        Object(y.c)(n.props.channelLogin, e), n.props.onFollowerModeDurationPreferenceChange(n.props.channelLogin, e), n.props.followerModeEnabled && (n.props.onChatCommand(Object(k.f)(e)), n.props.onFollowerModeDurationChange(e)), Object(_.c)({
                            channelLogin: n.props.channelLogin,
                            followerModeOn: n.props.followerModeEnabled,
                            isHostMode: n.props.isHostMode,
                            newValue: e
                        })
                    }, n.onModIconsToggle = function() {
                        Object(y.b)("showModIcons", !n.props.showModerationIcons), n.props.showModerationIcons ? n.props.onModIconsDisable() : n.props.onModIconsEnable(), Object(_.a)({
                            channelLogin: n.props.channelLogin,
                            isHostMode: n.props.isHostMode,
                            newValue: !n.props.showModerationIcons,
                            settingName: b.a.ShowModIcons
                        })
                    }, n.onShowModerationActionsToggle = function() {
                        Object(y.b)("showModerationActions", !n.props.showModerationActions), n.props.showModerationActions ? n.props.onShowModerationActionsDisable() : n.props.onShowModerationActionsEnable(), Object(_.a)({
                            channelLogin: n.props.channelLogin,
                            isHostMode: n.props.isHostMode,
                            newValue: !n.props.showModerationActions,
                            settingName: b.a.ShowModActions
                        })
                    }, n.onShowAutoModActionsToggle = function() {
                        Object(y.b)("showAutoModActions", !n.props.showAutoModActions), n.props.showAutoModActions ? n.props.onShowAutoModActionsDisable() : n.props.onShowAutoModActionsEnable(), Object(_.a)({
                            channelLogin: n.props.channelLogin,
                            isHostMode: n.props.isHostMode,
                            newValue: !n.props.showAutoModActions,
                            settingName: b.a.ShowAutoModActions
                        })
                    }, n.handleToggleAutoModLink = n.handleToggleAutoModLink.bind(n), n.handleToggleAutoModLink = n.handleToggleAutoModLink.bind(n), n
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = this;
                    if (!this.props.isCurrentUserModerator) return null;
                    var t = this.getSelectedFollowerDuration(),
                        n = J.b.map(function(n) {
                            return r.createElement(T._6, {
                                "data-duration": n,
                                key: n,
                                onClick: e.handleFollowerDurationClick,
                                selected: n === t
                            }, r.createElement(T._8, {
                                padding: .5
                            }, Object(J.c)(n)))
                        });
                    return r.createElement(T._35, {
                        key: "mod-tools",
                        borderTop: !0,
                        "data-test-selector": "mod-tools",
                        margin: {
                            top: 2
                        },
                        padding: {
                            top: 2
                        }
                    }, r.createElement(T._8, {
                        margin: {
                            bottom: 2
                        }
                    }, r.createElement(T.Q, {
                        color: T.K.Alt2,
                        transform: T._48.Uppercase
                    }, Object(S.d)("Mod Tools", "ChatSettings"))), r.createElement(T._8, {
                        margin: {
                            bottom: 1
                        }
                    }, r.createElement(T.J, {
                        checked: this.props.showModerationIcons,
                        "data-a-target": "mod-icons-checkbox",
                        "data-test-selector": "mod-icons-checkbox",
                        id: "chat-settings-mod-icons",
                        label: Object(S.d)("Mod Icons", "ChatSettings"),
                        onChange: this.onModIconsToggle
                    })), r.createElement(T._35, {
                        margin: {
                            bottom: 1
                        },
                        display: T.R.Flex,
                        justifyContent: T._7.Between,
                        flexWrap: T.U.Wrap
                    }, r.createElement(T.J, {
                        checked: this.props.followerModeEnabled,
                        "data-a-target": "follower-mode-checkbox",
                        "data-test-selector": "follower-mode-checkbox",
                        id: "chat-settings-followers-only",
                        label: Object(S.d)("Followers-Only Chat", "ChatSettings"),
                        onChange: this.onFollowerModeToggle
                    }), this.props.showRaidsTooltip ? r.createElement(L, {
                        text: Object(S.d)("Prevent offensive raiders from chatting.", "RaidReportingChat")
                    }) : null, r.createElement(T._8, {
                        alignItems: T.c.Center,
                        display: T.R.Flex,
                        flexWrap: T.U.NoWrap,
                        justifyContent: T._7.Between
                    }, r.createElement(T._8, {
                        margin: {
                            right: .5
                        }
                    }, r.createElement(T.Q, {
                        color: T.K.Alt2,
                        fontSize: T.V.Size7,
                        type: T._49.Span
                    }, Object(S.d)("Must have followed for", "ChatSettings"))), r.createElement(T._8, {
                        className: "chat-settings__mod-tools-follower-button",
                        flexShrink: 0
                    }, r.createElement(R.a, {
                        display: T.R.InlineBlock
                    }, r.createElement(T.v, {
                        size: T.z.Small,
                        type: T.B.Text,
                        "data-a-target": "follower-mode-dropdown",
                        "data-test-selector": "follower-mode-duration-menu",
                        dropdown: !0
                    }, Object(J.d)(t)), r.createElement(T.q, {
                        direction: T.r.TopRight
                    }, r.createElement(T._8, {
                        padding: .5
                    }, r.createElement(T.Q, {
                        color: T.K.Alt2
                    }, Object(S.d)("Followers can chat if they have followed for at least", "ChatSettings"))), r.createElement(T._35, {
                        color: T.K.Link
                    }, n)))))), r.createElement(T._8, {
                        margin: {
                            bottom: 1
                        }
                    }, r.createElement(T.J, {
                        checked: this.props.slowModeEnabled,
                        "data-a-target": "slow-mode-checkbox",
                        "data-test-selector": "slow-mode-checkbox",
                        id: "chat-settings-slow-mode",
                        label: Object(S.d)("Slow Mode", "ChatSettings"),
                        onChange: this.onSlowModeToggle
                    })), r.createElement(T._8, {
                        margin: {
                            bottom: 1
                        }
                    }, r.createElement(T.J, {
                        checked: this.props.showModerationActions,
                        "data-a-target": "show-mod-actions-checkbox",
                        "data-test-selector": "show-mod-actions",
                        id: "chat-settings-show-mod-actions",
                        label: Object(S.d)("Show Moderation Actions", "ChatSettings"),
                        onChange: this.onShowModerationActionsToggle
                    })), r.createElement(T._8, {
                        margin: {
                            bottom: 1
                        }
                    }, r.createElement(T.J, {
                        checked: this.props.showAutoModActions,
                        "data-a-target": "show-automod-messages-checkbox",
                        "data-test-selector": "show-automod-messages",
                        id: "chat-settings-show-automod-messages",
                        label: Object(S.d)("Show Messages Caught by AutoMod", "ChatSettings"),
                        onChange: this.onShowAutoModActionsToggle
                    })), r.createElement(Q, {
                        key: "recent-raids",
                        recentRaids: this.props.recentRaids,
                        onClickRecentRaids: this.onClickRecentRaids,
                        onUsernameClick: this.props.onShowViewerCard,
                        targetChannelID: this.props.channelID,
                        tooltipText: this.props.showRaidsTooltip ? Object(S.d)("View recent raids with option to report or ban.", "RaidReportingChat") : ""
                    }), this.renderModerationSettingsLink(), r.createElement("button", {
                        onClick: this.onChatClear,
                        "data-a-target": "clear-chat-button",
                        "data-test-selector": "clear-chat-button"
                    }, Object(S.d)("Clear Chat", "ChatSettings")))
                }, t.prototype.handleModerationSettingsClick = function() {
                    S.l.set("autoModToolTipSeen", 5)
                }, t.prototype.showAutoModHotSpot = function() {
                    return S.l.get("autoModToolTipSeen", 0) < 5
                }, t.prototype.renderModerationSettingsLink = function() {
                    if (Object($.a)()) {
                        var e = Object(S.d)("Manage Moderation Settings", "ChatSettings");
                        return this.showAutoModHotSpot() ? r.createElement(T._8, {
                            margin: {
                                top: 1,
                                bottom: 1
                            },
                            display: T.R.Flex,
                            justifyContent: T._7.Between,
                            alignItems: T.c.Center
                        }, r.createElement(T.O, {
                            to: "/" + this.props.channelLogin + "/dashboard/settings/automod",
                            "data-a-target": "automod-link-button",
                            "data-test-selector": "automod-link-button",
                            onClick: this.handleModerationSettingsClick
                        }, e), r.createElement("div", {
                            onMouseEnter: this.handleToggleAutoModLink,
                            onMouseLeave: this.handleToggleAutoModLink
                        }, r.createElement(T._8, {
                            alignItems: T.c.Center,
                            className: "chat-moderation-settings__highlight-indicator",
                            display: T.R.InlineFlex,
                            justifyContent: T._7.Center,
                            margin: {
                                left: .5
                            }
                        }, r.createElement(T.Q, {
                            color: T.K.Overlay,
                            fontSize: T.V.Size8,
                            type: T._49.Span
                        }, "i"), r.createElement(T._8, {
                            position: T._15.Relative
                        }, r.createElement(T.q, {
                            direction: T.r.TopRight,
                            show: this.state.autoModToolTipVisible,
                            offsetX: "-0.6rem",
                            offsetY: "1.5rem"
                        }, r.createElement(T._8, {
                            margin: 1
                        }, Object(S.d)("Mods can now update AutoMod levels as well as Blocked and Permitted Terms.", "ChatSettings"))))))) : r.createElement(T._35, {
                            margin: {
                                top: 1,
                                bottom: 1
                            },
                            display: T.R.Flex,
                            justifyContent: T._7.Between,
                            alignItems: T.c.Center,
                            color: T.K.Alt
                        }, r.createElement(T.O, {
                            to: "/" + this.props.channelLogin + "/dashboard/settings/automod",
                            "data-a-target": "automod-link-button",
                            "data-test-selector": "automod-link-button",
                            type: T.P.Inherit,
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
            }(r.Component));
        var X = Object(a.b)(function(e) {
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
                        return Object(m.b)(e, void 0, !1)
                    },
                    login: function() {
                        return Object(p.f)(u.a.Chat)
                    }
                }, e)
            })(Z),
            ee = n("SZoP"),
            te = n("3T7g"),
            ne = "edit-appearance-button",
            ie = "edit-display-name";

        function re(e) {
            var t = r.createElement(T.Q, {
                    bold: !0,
                    type: T._49.Span
                }, r.createElement("span", {
                    style: {
                        color: e.chatColor
                    },
                    "data-a-target": ie
                }, Object(ee.a)(e.login, e.displayName))),
                n = null;
            return e.editAppearance || (n = r.createElement(T._8, {
                margin: {
                    top: 1
                }
            }, r.createElement(T.O, {
                hoverUnderlineNone: !0,
                onClick: e.onClickEdit,
                "data-a-target": ne,
                "data-test-selector": ne
            }, Object(S.d)("Edit Appearance", "ChatSettings")))), r.createElement(T._35, {
                background: T.n.Base,
                color: T.K.Base,
                display: T.R.InlineFlex,
                flexDirection: T.T.Column,
                fullWidth: !0
            }, r.createElement(T.Q, {
                color: T.K.Alt2,
                transform: T._48.Uppercase
            }, Object(S.d)("Name Display", "ChatSettings")), r.createElement(T._8, {
                margin: {
                    top: 2
                }
            }, e.userBadges && e.userBadges.map(function(e) {
                return r.createElement(te.a, {
                    key: e.id,
                    badge: e
                })
            }), t), n)
        }
        var ae = n("pg5l"),
            oe = (n("Vaxm"), function(e) {
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
                        return i.__awaiter(t, void 0, void 0, function() {
                            var e, t, n;
                            return i.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return !this.props.data || this.props.data.loading ? [3, 2] : [4, this.props.data.refetch()];
                                    case 1:
                                        if ((e = i.sent()).data) {
                                            if (!(t = e.data).user.self) return [2];
                                            n = {}, t.user.self.displayBadges.forEach(function(e) {
                                                n[e.setID] = e.version
                                            }), S.o.tmi.client.updateChannelBadges(this.props.channelLogin, n)
                                        }
                                        i.label = 2;
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
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    window.addEventListener("resize", this.onResize, !0), this.setContainerHeight()
                }, t.prototype.componentWillUnmount = function() {
                    window.removeEventListener("resize", this.onResize, !0), this.resizeAnimationFrame && cancelAnimationFrame(this.resizeAnimationFrame)
                }, t.prototype.render = function() {
                    if (!this.props.data || this.props.data.loading) return null;
                    var e = null;
                    if (this.props.isLoggedIn && this.props.data.currentUser) {
                        var t = this.props.data.user.self ? this.props.data.user.self.displayBadges : [];
                        e = r.createElement(re, {
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
                    return this.props.isLoggedIn ? this.props.editAppearance ? n = [r.createElement(T._2, {
                        margin: {
                            bottom: 2
                        },
                        key: "chat-settings-edit-inject",
                        className: "chat-settings__edit-button"
                    }, r.createElement(T.O, {
                        hoverUnderlineNone: !0,
                        key: "chat-settings-edit",
                        onClick: this.onClickBack,
                        "data-test-selector": "chat-settings-back-button"
                    }, r.createElement(T.Q, {
                        color: T.K.Link,
                        type: T._49.Span
                    }, r.createElement(T._24, {
                        asset: T._25.ChatSettingsBack,
                        height: 10,
                        width: 10
                    }), Object(S.d)("Back", "ChatSettingsAppearance")))), e, r.createElement(M, {
                        key: "edit-appearance",
                        onColorSelected: this.onColorSelected,
                        editAppearance: this.props.editAppearance,
                        authToken: this.props.authToken,
                        channelLogin: this.props.channelLogin,
                        userChatColor: this.state.chatColor || this.props.data.currentUser.chatColor,
                        userLogin: this.props.data.currentUser.login,
                        onBadgesChanged: this.onBadgesChanged
                    })] : this.state.recentRaids ? n = [r.createElement(T._2, {
                        key: "chat-settings-recent-raids"
                    }, r.createElement(T.O, {
                        hoverUnderlineNone: !0,
                        key: "chat-settings-edit",
                        onClick: this.onClickBack,
                        "data-test-selector": "chat-settings-back-button"
                    }, r.createElement(T.Q, {
                        color: T.K.Link,
                        type: T._49.Span
                    }, r.createElement(T._24, {
                        asset: T._25.ChatSettingsBack,
                        height: 10,
                        width: 10
                    }), Object(S.d)("Back", "ChatSettingsRecentRaids")), r.createElement(T._8, {
                        margin: {
                            top: 2
                        }
                    }, r.createElement(T.Q, {
                        key: "recent-raids-title",
                        color: T.K.Alt2,
                        transform: T._48.Uppercase
                    }, Object(S.d)("Recent Raids", "ChatSettings"))))), r.createElement(Q, {
                        key: "recent-raids",
                        targetChannelID: this.props.channelID,
                        recentRaids: this.state.recentRaids,
                        onClickRecentRaids: this.onClickRecentRaids,
                        onUsernameClick: this.props.onShowViewerCard
                    })] : (n = [e, this.renderUniversalOptions()], this.props.isCurrentUserModerator && !this.props.isEmbedded && n.push(r.createElement(X, {
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
                    }))) : n = [r.createElement(N, {
                        key: "color-chooser",
                        onColorSelected: this.props.onColorSelected
                    }), this.renderUniversalOptions()], r.createElement(C.b, {
                        className: "chat-settings",
                        suppressScrollX: !0,
                        style: {
                            maxHeight: this.state.containerHeight
                        }
                    }, r.createElement("div", {
                        onClick: this.dismissRaidsTooltip
                    }, r.createElement(T._35, {
                        key: "chat-settings",
                        className: "chat-settings__content",
                        background: T.n.Base,
                        color: T.K.Base,
                        padding: 2
                    }, n)))
                }, t.prototype.renderUniversalOptions = function() {
                    if (!this.props.data) return null;
                    var e = this.props.isPopout && r.createElement(T.J, {
                            checked: this.props.darkModeEnabled,
                            "data-a-target": "darkmode-checkbox",
                            "data-test-selector": "dark-mode-checkbox",
                            id: "chat-settings-dark-mode",
                            label: Object(S.d)("Dark Mode", "ChatSettings"),
                            onChange: this.props.onDarkModeToggle
                        }),
                        t = !this.props.isEmbedded && r.createElement("button", {
                            onClick: this.props.onChatPopout,
                            "data-a-target": "popout-chat-button",
                            "data-test-selector": "popout-button"
                        }, Object(S.d)("Popout", "ChatSettings")),
                        n = !this.props.isPopout && !this.props.isEmbedded && (window.BetterTTV || window.FrankerFaceZ) && r.createElement("button", {
                            onClick: this.props.onLegacyChatPopout,
                            "data-test-selector": "legacy-popout-button"
                        }, Object(S.d)("Legacy Popout", "ChatSettings")),
                        i = !this.props.isPopout && r.createElement("button", {
                            onClick: this.props.onChatHide,
                            "data-a-target": "hide-chat-button",
                            "data-test-selector": "hide-chat-button"
                        }, Object(S.d)("Hide Chat", "ChatSettings"));
                    return r.createElement(T._8, {
                        key: "chat-options"
                    }, r.createElement(T._35, {
                        borderTop: !0,
                        margin: {
                            top: 2
                        },
                        padding: {
                            y: 2
                        }
                    }, r.createElement(T.Q, {
                        color: T.K.Alt2,
                        transform: T._48.Uppercase
                    }, Object(S.d)("Chat Options", "ChatSettings"))), r.createElement(T._8, {
                        margin: {
                            bottom: 1
                        }
                    }, r.createElement(T.J, {
                        checked: this.props.showTimestamps,
                        "data-a-target": "timestamp-checkbox",
                        "data-test-selector": "timestamps-selector",
                        id: "chat-settings-timestamp",
                        label: Object(S.d)("Timestamps", "ChatSettings"),
                        onChange: this.props.onTimestampToggle
                    })), r.createElement(T._8, {
                        margin: {
                            bottom: 1
                        }
                    }, e), r.createElement(T._8, {
                        margin: {
                            bottom: 1
                        }
                    }, i), r.createElement(T._8, {
                        margin: {
                            bottom: 1
                        }
                    }, t), n && r.createElement(T._8, null, n))
                }, Object.defineProperty(t.prototype, "showRaidsTooltip", {
                    get: function() {
                        return this.props.sawFirstRaidPrompt && !this.state.raidsTooltipDismissed
                    },
                    enumerable: !0,
                    configurable: !0
                }), t = i.__decorate([Object(w.a)(ae, {
                    options: function(e) {
                        return {
                            variables: {
                                channelLogin: e.channelLogin
                            }
                        }
                    }
                })], t)
            }(r.Component)),
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
                        var e = t.props.darkModeEnabled ? l.a.Light : l.a.Dark;
                        t.props.onThemeChanged(e, !t.props.isPopout), Object(_.a)({
                            channelLogin: t.props.channelLogin,
                            isHostMode: t.props.isHostMode,
                            newValue: !t.props.darkModeEnabled,
                            settingName: b.a.DarkMode
                        })
                    }, t.onTimestampToggle = function() {
                        Object(y.b)("showTimestamps", !t.props.showTimestamps), t.props.showTimestamps ? t.props.onTimestampsDisable() : t.props.onTimestampsEnable(), Object(_.a)({
                            channelLogin: t.props.channelLogin,
                            isHostMode: t.props.isHostMode,
                            newValue: !t.props.showTimestamps,
                            settingName: b.a.ShowTimestamps
                        })
                    }, t.onChatHide = function() {
                        t.props.onChatHide(), Object(_.a)({
                            channelLogin: t.props.channelLogin,
                            isHostMode: t.props.isHostMode,
                            newValue: !0,
                            settingName: b.a.HideChat
                        })
                    }, t.onChatPopout = function() {
                        t.props.isPopout || t.props.onChatHide();
                        var e = window.open("/popout/" + t.props.channelLogin + "/chat?popout=", "_blank", "right=50,top=50,width=400,height=600,resizable=yes,scrollbars=no,toolbar=no,location=no,directories=no,status=no,menubar=no,copyhistory=no");
                        e && !Object(c.a)() && (e.focus(), Object(d.a)(e, function() {
                            t.props.onChatUnhide()
                        }))
                    }, t.onLegacyChatPopout = function() {
                        t.props.onChatHide();
                        var e = window.open("https://www.twitch.tv/" + t.props.channelLogin + "/chat?popout=", "_blank", "right=50,top=50,width=400,height=600,resizable=yes,scrollbars=no,toolbar=no,location=no,directories=no,status=no,menubar=no,copyhistory=no");
                        e && !Object(c.a)() && (e.focus(), Object(d.a)(e, function() {
                            t.props.onChatUnhide()
                        }))
                    }, t.onColorSelected = function(e) {
                        t.props.isLoggedIn ? t.props.onChatCommand(Object(k.b)(e)) : t.props.login()
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(de, {
                        onToggle: this.handleSettingsToggle
                    }, r.createElement(oe, {
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
            }(r.Component);
        var le = Object(a.b)(function(e) {
                return {
                    isLoggedIn: Object(h.d)(e),
                    darkModeEnabled: Object(g.a)(e) === l.a.Dark,
                    showTimestamps: e.chat.showTimestamps,
                    theatreModeEnabled: e.ui.theatreModeEnabled
                }
            }, function(e) {
                return Object(s.b)({
                    login: function() {
                        return Object(p.f)(u.a.Chat)
                    },
                    onChatHide: function() {
                        return f.Q()
                    },
                    onChatUnhide: function() {
                        return f.T()
                    },
                    onThemeChanged: function(e) {
                        return Object(m.b)(e, void 0, !1)
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
            ce = Object(o.f)(le),
            de = function(e) {
                return r.createElement(R.a, {
                    onToggle: e.onToggle
                }, r.createElement(T.w, {
                    icon: T._25.Gear,
                    ariaLabel: Object(S.d)("Chat settings", "ChatInput"),
                    "data-a-target": "chat-settings",
                    disabled: !!e.disabled
                }), r.createElement(T.q, {
                    direction: T.r.Top,
                    noTail: !0,
                    offsetY: "11px",
                    "data-a-target": "chat-settings-balloon"
                }, e.children))
            };
        n.d(t, "a", function() {
            return ce
        }), n.d(t, "b", function() {
            return de
        })
    },
    M5Oo: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e) {
            var t = i(e);
            return t.setSeconds(0, 0), t
        }
    },
    M9Ev: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e, t, n) {
            var r = i(e),
                a = i(t),
                o = void 0 !== n ? n : 1,
                s = a.getTime();
            if (r.getTime() > s) throw new Error("The first date cannot be after the second date");
            var l = [],
                c = r;
            for (c.setHours(0, 0, 0, 0); c.getTime() <= s;) l.push(i(c)), c.setDate(c.getDate() + o);
            return l
        }
    },
    MIQa: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e) {
            var t = i(e);
            return t.setHours(23, 59, 59, 999), t
        }
    },
    "MKc+": function(e, t, n) {
        var i = n("oNnY");
        e.exports = function(e, t) {
            var n = Number(t);
            return i(e, -n)
        }
    },
    MSFW: function(e, t) {},
    Mbb9: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e) {
            return i(e).getDay()
        }
    },
    Mdww: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e) {
            var t = i(e),
                n = t.getFullYear(),
                r = t.getMonth(),
                a = new Date(0);
            return a.setFullYear(n, r + 1, 0), a.setHours(0, 0, 0, 0), a.getDate()
        }
    },
    Moxe: function(e, t, n) {
        var i = n("M5Oo");
        e.exports = function(e, t) {
            var n = i(e),
                r = i(t);
            return n.getTime() === r.getTime()
        }
    },
    NKE6: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e, t) {
            var n = i(e).getTime(),
                r = i(t).getTime();
            return n < r ? -1 : n > r ? 1 : 0
        }
    },
    NSOL: function(e, t, n) {
        var i = n("6Zhv"),
            r = 6e4;
        e.exports = function(e, t) {
            var n = Number(t);
            return i(e, n * r)
        }
    },
    Nay6: function(e, t, n) {
        "use strict";
        var i = n("HW6M"),
            r = n("GiK3"),
            a = (n("7vYp"), function(e) {
                var t, n = [r.createElement("span", {
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
                    var a = i(((t = {})["chat-author__intl-login"] = !e.highlighted, t["chat-author__intl-login--highlighted"] = e.highlighted, t));
                    n.push(r.createElement("span", {
                        key: "username-login",
                        style: {
                            color: e.userData.color
                        },
                        className: a,
                        "data-test-selector": "message-username-canonical"
                    }, " (" + e.userData.userLogin + ")"))
                }
                return r.createElement("span", {
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
            return a
        })
    },
    NfL5: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return i
        }), n.d(t, "e", function() {
            return c
        }), n.d(t, "a", function() {
            return l
        }), t.c = function(e) {
            return Object.assign({
                id: Object(a.b)(),
                errors: [],
                fileSizeBytes: 0,
                totalBytesSent: 0,
                viewable: i.private,
                videoAuthToken: "",
                status: l.queued,
                progressPercentage: 0
            }, e)
        }, t.d = function(e, t) {
            var n = [];
            e || n.push(new Error(Object(r.d)("Only accounts with verified email addresses can upload files. Please check your inbox for the verification email", "VideoUploadModel")));
            if (!c.includes(t.type)) {
                var i = "." + t.name.split(".").pop();
                c.includes(i) || n.push(new Error(Object(r.d)("File type {filetype} is not currently supported", {
                    filetype: t.type ? t.type : i
                }, "VideoUploadModel")))
            }
            t.size > o && n.push(new Error(Object(r.d)("File too large. The maximum file size is {maxFileSizeLabel}", {
                maxFileSizeLabel: s
            }, "VideoUploadModel")));
            return n
        };
        var i, r = n("6sO2"),
            a = n("HM6l"),
            o = 2e10,
            s = "20GB";
        ! function(e) {
            e[e.published = 0] = "published", e[e.private = 1] = "private"
        }(i || (i = {}));
        var l, c = ["video/mp4", "video/quicktime", "video/avi", "video/x-flv", "video/x-msvideo", "video/*", ".mp4", ".mov", ".flv", ".avi"];
        ! function(e) {
            e[e.queued = 0] = "queued", e[e.uploading = 1] = "uploading", e[e.completed = 2] = "completed", e[e.errored = 3] = "errored", e[e.stopped = 4] = "stopped"
        }(l || (l = {}))
    },
    O0Qc: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
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
            var t = e.trim().match(o);
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
            var t = e.trim().match(l);
            if (!t) return null;
            return {
                bannedUserLogin: t[1],
                duration: t[2] && Number(t[2]) || null
            }
        }, t.p = function(e) {
            var t = e.trim().match(c);
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
            var n = e.match(p);
            if (!n) return {
                handled: !1
            };
            var a = n[1],
                o = i.o.store.getState().chat.commandHandlers[n[1].toLowerCase()];
            if (!o) return {
                command: a,
                handled: !1
            };
            var s = (n[2] || "").trim(),
                l = {
                    channelLogin: t
                };
            try {
                return {
                    command: a,
                    handled: !0,
                    result: o(s, l)
                }
            } catch (e) {
                return r.warn("Exception thrown from chat command handler", {
                    command: n[1],
                    err: e
                }), {
                    handled: !1
                }
            }
        };
        var i = n("6sO2"),
            r = i.o.logger.withCategory("chat-commands"),
            a = "/unraid";
        var o = /^\/w(?:$|\s+)(\S+)?\s*(.+)?/i;
        var s = /^(\S+)?\s+(.+)?$/;
        var l = /^\/ban\s+(\S+)(?:\s+(\d+)?)?$/;
        var c = /^\/slow(?:\s+(\d+)?)?$/;
        var d = ["blue", "blueviolet", "cadetblue", "chocolate", "coral", "dodgerblue", "firebrick", "goldenrod", "green", "hotpink", "orangered", "red", "seagreen", "springgreen", "yellowgreen"],
            u = /^\/color\s+(#[A-Fa-f0-9]{6}|[A-Za-z]+)$/;
        var p = /^[/.]([a-z0-9]+)(.+)?$/i
    },
    O4od: function(e, t, n) {
        "use strict";
        var i;
        n.d(t, "a", function() {
                return i
            }),
            function(e) {
                e[e.Save = 0] = "Save", e[e.Thumbnail = 1] = "Thumbnail", e[e.Initialize = 2] = "Initialize"
            }(i || (i = {}))
    },
    O9wU: function(e, t, n) {
        "use strict";
        var i;
        n.d(t, "a", function() {
                return i
            }),
            function(e) {
                e[e.recent_raids = 0] = "recent_raids", e[e.chat_message = 1] = "chat_message", e[e.room_message = 2] = "room_message", e[e.viewer_list = 3] = "viewer_list", e[e.member_list = 4] = "member_list", e[e.test = 5] = "test"
            }(i || (i = {}))
    },
    OOv5: function(e, t, n) {
        "use strict";
        var i, r = n("TToO"),
            a = n("6sO2"),
            o = n("oIkB"),
            s = n("Aj/L");
        ! function(e) {
            e.NewSession = "new-session", e.ClearSession = "clear-session"
        }(i || (i = {}));
        var l = a.o.logger.withCategory("host-service-worker-messenger"),
            c = function() {
                function e() {}
                return e.syncSession = function() {
                    var e = Object(s.c)(a.o.store.getState());
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
            d = function() {
                function e() {}
                return e.exists = function() {
                    return null !== a.o.storage.getOptional("browserPushNotificationsEnabled")
                }, e.isEnabled = function() {
                    return a.o.storage.get("browserPushNotificationsEnabled", !1)
                }, e.setEnabled = function() {
                    a.o.storage.set("browserPushNotificationsEnabled", !0)
                }, e.setDisabled = function() {
                    a.o.storage.set("browserPushNotificationsEnabled", !1)
                }, e
            }();
        var u = n("UbVv"),
            p = n("OtmA"),
            m = null;

        function h() {
            if (m) return m;
            var e = p.register({
                scope: "/"
            });
            return m = e || Promise.reject(new Error("service worker runtime not available"))
        }
        var g = n("JBcW"),
            f = n("TbkX");
        n.d(t, "a", function() {
            return b
        });
        var v = a.o.logger.withCategory("browser-push-notifications-manager"),
            b = function() {
                function e() {}
                return e.initialize = function() {
                    return this.initPromise ? this.initPromise : (this.initPromise = this.initializationLogic(), this.initPromise)
                }, e.initializationLogic = function() {
                    return r.__awaiter(this, void 0, void 0, function() {
                        var e, t;
                        return r.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return Object(u.a)() ? (v.debug("permissions have been denied. nothing to do here."), [2]) : [4, h()];
                                case 1:
                                    return n.sent(), e = Object(s.d)(a.o.store.getState()), [4, this.hasPushSubscription()];
                                case 2:
                                    return t = n.sent(), c.syncSession(), t ? d.exists() && !d.isEnabled() || !e ? [4, this.unsubscribe()] : [3, 4] : [3, 5];
                                case 3:
                                    n.sent(), n.label = 4;
                                case 4:
                                    return [3, 7];
                                case 5:
                                    return s.d ? !Object(u.b)() || d.exists() && !d.isEnabled() ? [3, 7] : [4, this.subscribe()] : [3, 7];
                                case 6:
                                    n.sent(), n.label = 7;
                                case 7:
                                    return [2]
                            }
                        })
                    })
                }, e.userSubscribe = function(e) {
                    return r.__awaiter(this, void 0, void 0, function() {
                        var t;
                        return r.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    d.setEnabled(), n.label = 1;
                                case 1:
                                    return n.trys.push([1, 3, , 4]), [4, this.subscribe()];
                                case 2:
                                    return n.sent(), [3, 4];
                                case 3:
                                    return t = n.sent(), Object(u.a)() || v.warn(t, "user subscribe failed", {
                                        context: e
                                    }), [3, 4];
                                case 4:
                                    return Object(g.c)({
                                        allowed: Object(u.b)(),
                                        context: e
                                    }), [2]
                            }
                        })
                    })
                }, e.userUnsubscribe = function(e) {
                    return r.__awaiter(this, void 0, void 0, function() {
                        return r.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return d.setDisabled(), [4, this.unsubscribe()];
                                case 1:
                                    return t.sent(), Object(g.b)({
                                        context: e
                                    }), [2]
                            }
                        })
                    })
                }, e.hasPushSubscription = function() {
                    return r.__awaiter(this, void 0, void 0, function() {
                        return r.__generator(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, this.getPushSubscription()];
                                case 1:
                                    return [2, null !== e.sent()]
                            }
                        })
                    })
                }, e.subscribe = function() {
                    return r.__awaiter(this, void 0, void 0, function() {
                        var e, t, n, i, l, c;
                        return r.__generator(this, function(d) {
                            switch (d.label) {
                                case 0:
                                    if (Object(u.a)()) throw new Error("notification permission is denied");
                                    if (!Object(s.d)(a.o.store.getState())) throw new Error("cannot be enabled logged out");
                                    if (!(e = a.b.get("notification_app_server_public_key", ""))) throw new Error("application server public key is blank");
                                    return [4, h()];
                                case 1:
                                    return t = d.sent(), [4, this.getPushSubscription()];
                                case 2:
                                    return (n = d.sent()) ? [3, 4] : (i = function(e) {
                                        for (var t = (e + "=".repeat((4 - e.length % 4) % 4)).replace(/\-/g, "+").replace(/_/g, "/"), n = atob(t), i = new Uint8Array(n.length), r = 0; r < n.length; ++r) i[r] = n.charCodeAt(r);
                                        return i
                                    }(e), [4, t.pushManager.subscribe({
                                        userVisibleOnly: !0,
                                        applicationServerKey: i
                                    })]);
                                case 3:
                                    n = d.sent(), d.label = 4;
                                case 4:
                                    if (!(l = n.toJSON()).endpoint) throw new Error("push subscription 'endpoint' missing");
                                    if (!l.keys) throw new Error("push subscription 'keys' missing");
                                    if (!l.keys.auth) throw new Error("push subscription 'keys.auth' missing");
                                    if (!l.keys.p256dh) throw new Error("push subscription 'keys.p256dh' missing");
                                    return c = Object(o.a)({
                                        endpoint: l.endpoint,
                                        auth: l.keys.auth,
                                        p256DH: l.keys.p256dh
                                    }), [4, a.o.apollo.client.mutate(r.__assign({
                                        mutation: f
                                    }, c))];
                                case 5:
                                    return d.sent(), [2]
                            }
                        })
                    })
                }, e.unsubscribe = function() {
                    return r.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return r.__generator(this, function(t) {
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
                    return r.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return r.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, h()];
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
    OvUa: function(e, t) {},
    PNnM: function(e, t) {},
    PPNL: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            r = n("OAwv"),
            a = n("6sO2"),
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
            c = n("pqU3");
        t.a = function() {
            var e = this;
            return function(t) {
                clearTimeout(d), d = setTimeout(function() {
                    return i.__awaiter(e, void 0, void 0, function() {
                        var e, n, s, d, u, p;
                        return i.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    e = a.o.logger.withCategory("leagueoflegends-api"), t(Object(c.e)(!0)), i.label = 1;
                                case 1:
                                    return i.trys.push([1, 3, , 4]), n = a.o.intl.getLanguageCode(), s = l(n), d = o.a.getAPIURL("/api/lol/champions?" + r.stringify({
                                        locale: s,
                                        on_site: 1
                                    })).toString(), [4, o.a.get(d)];
                                case 2:
                                    return (u = i.sent()).body ? t(Object(c.f)(u.body)) : (e.warn("LoL champion API response body was empty."), t(Object(c.d)(!0))), [3, 4];
                                case 3:
                                    throw p = i.sent(), t(Object(c.d)(!0)), e.error(p, "Failed to load LoL champion data"), p;
                                case 4:
                                    return [2]
                            }
                        })
                    })
                }, u)
            }
        };
        var d = 0,
            u = 350
    },
    PeVI: function(e, t) {},
    Ptqd: function(e, t) {
        e.exports = function() {
            var e = {
                lessThanXSeconds: {
                    one: "less than a second",
                    other: "less than {{count}} seconds"
                },
                xSeconds: {
                    one: "1 second",
                    other: "{{count}} seconds"
                },
                halfAMinute: "half a minute",
                lessThanXMinutes: {
                    one: "less than a minute",
                    other: "less than {{count}} minutes"
                },
                xMinutes: {
                    one: "1 minute",
                    other: "{{count}} minutes"
                },
                aboutXHours: {
                    one: "about 1 hour",
                    other: "about {{count}} hours"
                },
                xHours: {
                    one: "1 hour",
                    other: "{{count}} hours"
                },
                xDays: {
                    one: "1 day",
                    other: "{{count}} days"
                },
                aboutXMonths: {
                    one: "about 1 month",
                    other: "about {{count}} months"
                },
                xMonths: {
                    one: "1 month",
                    other: "{{count}} months"
                },
                aboutXYears: {
                    one: "about 1 year",
                    other: "about {{count}} years"
                },
                xYears: {
                    one: "1 year",
                    other: "{{count}} years"
                },
                overXYears: {
                    one: "over 1 year",
                    other: "over {{count}} years"
                },
                almostXYears: {
                    one: "almost 1 year",
                    other: "almost {{count}} years"
                }
            };
            return {
                localize: function(t, n, i) {
                    var r;
                    return i = i || {}, r = "string" == typeof e[t] ? e[t] : 1 === n ? e[t].one : e[t].other.replace("{{count}}", n), i.addSuffix ? i.comparison > 0 ? "in " + r : r + " ago" : r
                }
            }
        }
    },
    Q2rx: function(e, t, n) {
        var i = n("u/4p"),
            r = 6e4,
            a = 6048e5;
        e.exports = function(e, t, n) {
            var o = i(e, n),
                s = i(t, n),
                l = o.getTime() - o.getTimezoneOffset() * r,
                c = s.getTime() - s.getTimezoneOffset() * r;
            return Math.round((l - c) / a)
        }
    },
    QFW6: function(e, t, n) {
        "use strict";
        var i, r = n("TToO"),
            a = n("6sO2"),
            o = n("vH/s");
        ! function(e) {
            e.Everyone = "everyone", e.ModsOnly = "mod", e.StreamChat = "twitch_chat", e.SubsOnly = "sub"
        }(i || (i = {}));
        var s = n("gGMi");
        n.d(t, "a", function() {
            return l
        }), n.d(t, "b", function() {
            return c
        }), n.d(t, "c", function() {
            return d
        });
        var l = function(e) {
                var t;
                switch (e.roomMinimumRole) {
                    case s.b.Everyone:
                        t = i.Everyone;
                        break;
                    case s.b.Moderator:
                        t = i.ModsOnly;
                        break;
                    case s.b.Subscriber:
                        t = i.SubsOnly;
                        break;
                    default:
                        t = i.StreamChat
                }
                var n = {
                    channel: e.channelLogin,
                    chatroom_type: t,
                    is_host_mode: e.isHostMode,
                    is_using_web_sockets: !0
                };
                return e.roomID && (n.chatroom_id = e.roomID), n
            },
            c = function(e) {
                a.n.track(o.SpadeEventType.ChatRoomJoined, l(e))
            },
            d = function(e) {
                a.n.track(o.SpadeEventType.ChatRoomWatched, r.__assign({}, l(e), {
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
    Qbo9: function(e, t, n) {
        var i = n("Moxe");
        e.exports = function(e) {
            return i(new Date, e)
        }
    },
    Qxz6: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e, t) {
            var n = i(e),
                r = i(t);
            return n.getFullYear() === r.getFullYear()
        }
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
        var i = n("TToO"),
            r = n("LIeg"),
            a = (n.n(r), n("6sO2")),
            o = n("vh75"),
            s = n("UzRK"),
            l = n("VsL1");
        a.o.store.registerReducer("chat", function(e, t) {
            var n, a;
            switch (void 0 === e && (n = Object(l.a)(), e = i.__assign({}, n, {
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
                case o.d:
                    return i.__assign({}, e, {
                        isHidden: !0
                    });
                case o.e:
                    return i.__assign({}, e, {
                        emoteSets: [],
                        messages: {}
                    });
                case o.f:
                    return i.__assign({}, e, {
                        isHidden: !1
                    });
                case o.g:
                    return i.__assign({}, e, {
                        emoteSets: t.emoteSets
                    });
                case o.h:
                    return i.__assign({}, e, {
                        followerMode: !1
                    });
                case o.i:
                    return i.__assign({}, e, {
                        followerDuration: t.duration
                    });
                case o.j:
                    return i.__assign({}, e, {
                        lastUsedFollowerDurations: i.__assign({}, e.lastUsedFollowerDurations, (a = {}, a[t.channelLogin] = t.duration, a))
                    });
                case o.k:
                    return i.__assign({}, e, {
                        followerMode: !0
                    });
                case o.l:
                    return r(e, function(e) {
                        return e.messages
                    }, function(e) {
                        return e[t.channel] = t.messages.slice(), e
                    });
                case o.b:
                    return i.__assign({}, e, {
                        showAutoModActions: !1
                    });
                case o.c:
                    return i.__assign({}, e, {
                        showAutoModActions: !0
                    });
                case o.m:
                    return i.__assign({}, e, {
                        showModerationActions: !1
                    });
                case o.n:
                    return i.__assign({}, e, {
                        showModerationActions: !0
                    });
                case o.o:
                    return i.__assign({}, e, {
                        showModIcons: !1
                    });
                case o.p:
                    return i.__assign({}, e, {
                        showModIcons: !0
                    });
                case o.s:
                    return i.__assign({}, e, {
                        slowMode: !1
                    });
                case o.t:
                    return i.__assign({}, e, {
                        slowMode: !0
                    });
                case o.u:
                    return i.__assign({}, e, {
                        subsOnlyMode: !1
                    });
                case o.v:
                    return i.__assign({}, e, {
                        subsOnlyMode: !0
                    });
                case o.w:
                    return i.__assign({}, e, {
                        showTimestamps: !1
                    });
                case o.x:
                    return i.__assign({}, e, {
                        showTimestamps: !0
                    });
                case o.a:
                    return r(e, function(e) {
                        return e.commandHandlers
                    }, function(e) {
                        return e[t.command] = t.handler, e
                    });
                case o.q:
                    return r(e, function(e) {
                        return e.commandHandlers
                    }, function(e) {
                        return delete e[t.command], e
                    });
                case o.r:
                    return i.__assign({}, e, {
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
            return a
        });
        var i = n("GiK3"),
            r = (n.n(i), n("mbxv")),
            a = function(e) {
                var t, n = e.badgesToRender,
                    a = e.badgeSets,
                    o = [];
                t = n, Array.isArray(t) ? o = n.map(function(e) {
                    var t = a.getBadge(e.setID, e.version);
                    return null === t ? null : i.createElement(r.a, {
                        key: t.setID + "/" + t.version,
                        badge: t
                    })
                }) : function(e) {
                    return !Array.isArray(e)
                }(n) && (o = Object.keys(n).map(function(e) {
                    var t = n[e],
                        o = a.getBadge(e, t);
                    return null === o ? null : i.createElement(r.a, {
                        key: o.setID + "/" + o.version,
                        badge: o
                    })
                }));
                var s = o.filter(function(e) {
                    return null !== e
                });
                return i.createElement("span", null, s)
            }
    },
    Rv0e: function(e, t) {},
    SHOI: function(e, t, n) {
        var i = n("xA5w"),
            r = n("Jvcu");
        e.exports = function(e, t, n) {
            var a = n && Number(n.weekStartsOn) || 0,
                o = i(e),
                s = Number(t),
                l = o.getDay();
            return r(o, ((s % 7 + 7) % 7 < a ? 7 : 0) + s - l)
        }
    },
    SI0h: function(e, t, n) {
        "use strict";
        var i = n("TPVZ"),
            r = n("RH2O"),
            a = n("2KeS"),
            o = n("V5M+"),
            s = n("TToO"),
            l = n("GiK3"),
            c = n("6sO2"),
            d = n("x49/"),
            u = n.n(d),
            p = n("Odds"),
            m = (n("ZUp+"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return s.__extends(t, e), t.prototype.render = function() {
                    return l.createElement("div", {
                        onClick: this.props.closeModal
                    }, l.createElement(p.e, {
                        type: p.j.FadeIn,
                        duration: p.g.Long,
                        timing: p.i.EaseInOut,
                        enabled: !0
                    }, l.createElement(p._35, {
                        className: "browser-push-notifications-upsell",
                        alignItems: p.c.Center,
                        justifyContent: p._7.Center,
                        position: p._15.Fixed,
                        display: p.R.Flex,
                        background: p.n.Overlay,
                        fullHeight: !0,
                        fullWidth: !0,
                        attachTop: !0,
                        attachLeft: !0
                    }, l.createElement(p._8, {
                        className: "browser-push-notifications-upsell__container",
                        display: p.R.Flex,
                        textAlign: p._45.Center,
                        padding: {
                            x: 1
                        },
                        position: p._15.Relative
                    }, l.createElement(p.e, {
                        type: p.j.SlideInBottom,
                        duration: p.g.Long,
                        timing: p.i.EaseInOut,
                        enabled: !0
                    }, l.createElement(p.Q, {
                        type: p._49.H3,
                        fontSize: p.V.Size3,
                        lineHeight: p._9.Body
                    }, Object(c.d)("Don't miss out when your favorite streamers go live!", "BrowserNotificationsUpsellModal")), l.createElement(p._8, {
                        margin: {
                            top: 1
                        }
                    }, l.createElement(p.Q, {
                        type: p._49.H4,
                        fontSize: p.V.Size4,
                        color: p.K.OverlayAlt,
                        lineHeight: p._9.Body
                    }, Object(c.d)("Turn on Browser Notifications to get updates even when your browser window is minimized", "BrowserNotificationsUpsellModal")))), l.createElement(p._8, {
                        className: "browser-push-notifications-upsell__arrow",
                        position: p._15.Absolute,
                        attachTop: !0,
                        attachLeft: !0
                    }, l.createElement(p.e, {
                        type: p.j.SlideInBottom,
                        delay: p.f.Short,
                        duration: p.g.Long,
                        timing: p.i.EaseInOut,
                        enabled: !0
                    }, l.createElement("img", {
                        src: u.a
                    })))))))
                }, t
            }(l.Component));
        var h = Object(r.b)(null, function(e) {
            return Object(a.b)({
                closeModal: o.c
            }, e)
        })(m);
        var g = Object(r.b)(null, function(e) {
            return Object(a.b)({
                showBrowserNotificationsUpsellModal: function() {
                    return Object(o.d)(h, {})
                },
                closeBrowserNotificationsUpsellModal: o.c
            }, e)
        })(i.a);
        n.d(t, "b", function() {
            return i.b
        }), n.d(t, !1, function() {}), n.d(t, "a", function() {
            return g
        })
    },
    SJLv: function(e, t) {
        var n = ["M", "MM", "Q", "D", "DD", "DDD", "DDDD", "d", "E", "W", "WW", "YY", "YYYY", "GG", "GGGG", "H", "HH", "h", "hh", "m", "mm", "s", "ss", "S", "SS", "SSS", "Z", "ZZ", "X", "x"];
        e.exports = function(e) {
            var t = [];
            for (var i in e) e.hasOwnProperty(i) && t.push(i);
            var r = n.concat(t).sort().reverse();
            return new RegExp("(\\[[^\\[]*\\])|(\\\\)?(" + r.join("|") + "|.)", "g")
        }
    },
    SZZR: function(e, t, n) {
        var i = n("I7cV");
        e.exports = function(e) {
            return i(e, {
                weekStartsOn: 1
            })
        }
    },
    "T/Ln": function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e) {
            var t = i(e),
                n = t.getMonth(),
                r = n - n % 3 + 3;
            return t.setMonth(r, 0), t.setHours(0, 0, 0, 0), t
        }
    },
    TPVZ: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            r = n("HW6M"),
            a = n("GiK3"),
            o = n("F8kA"),
            s = n("6sO2"),
            l = n("hdYS"),
            c = n("DtWM"),
            d = n("+Znq"),
            u = n("7vx8"),
            p = n("czpb"),
            m = n("MsZa"),
            h = n("OOv5"),
            g = n("LBNC"),
            f = n("UbVv"),
            v = n("JBcW"),
            b = n("RH2O"),
            k = n("2KeS"),
            y = n("V5M+"),
            _ = n("E9Qg"),
            S = n("ebTC"),
            C = n("4Q9N"),
            w = n("Odds"),
            E = (n("4Jix"), n("Ojfd")),
            O = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.openModal = function() {
                        var e = t.props.data && t.props.data.user;
                        e && t.props.showModal(S.a, {
                            userID: e.id,
                            login: e.login,
                            displayName: e.displayName,
                            imageType: C.a.ProfileBanner,
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
                    if (i && i.loading || !this.props.firstPageLoaded) e = a.createElement(w._14, {
                        height: 380,
                        "data-test-selector": "channel-banner__placeholder"
                    });
                    else {
                        i && i.user && i.user.bannerImageURL ? t = {
                            backgroundImage: "url(" + i.user.bannerImageURL + ")"
                        } : (n["channel-banner--default"] = !0, t = {
                            backgroundImage: "url(" + _ + ")"
                        });
                        var o = null;
                        this.props.canEdit && (o = a.createElement(w._35, {
                            className: "channel-banner__edit-overlay",
                            background: w.n.Overlay,
                            position: w._15.Absolute,
                            attachTop: !0,
                            attachLeft: !0,
                            fullWidth: !0
                        }, a.createElement("button", {
                            className: "channel-banner__edit-overlay__button",
                            "data-test-selector": "channel-banner__edit-overlay-interactable",
                            onClick: this.openModal
                        }, a.createElement(w._8, {
                            display: w.R.Flex,
                            alignItems: w.c.Center,
                            flexDirection: w.T.Column,
                            justifyContent: w._7.Center
                        }, a.createElement(w._8, null, a.createElement(w._24, {
                            asset: w._25.Edit
                        })), Object(s.d)("Update Profile Banner", "ChannelBanner"))))), e = a.createElement("div", {
                            className: "channel-banner__image",
                            "data-test-selector": "channel-banner",
                            style: t
                        }, o)
                    }
                    return a.createElement("div", {
                        className: r("channel-banner", n),
                        onTransitionEnd: this.props.onTransitionEnd
                    }, a.createElement(w._2, {
                        fullWidth: !0
                    }, e))
                }, t.prototype.componentWillUnmount = function() {
                    this.props.closeModal()
                }, t
            }(a.Component),
            D = Object(u.a)(E, {
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
            })(O);
        var T = Object(b.b)(function(e) {
                return {
                    firstPageLoaded: e.session.firstPageLoaded
                }
            }, function(e) {
                return Object(k.b)({
                    closeModal: y.c,
                    showModal: y.d
                }, e)
            })(D),
            N = n("x9n8"),
            I = n("CSlQ"),
            x = (n("WClm"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.openModal = function(e) {
                        e.stopPropagation(), t.props.showModal(N.a, {
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
                    return a.createElement(w._8, {
                        className: "edit-profile-overlay",
                        display: w.R.Flex,
                        justifyContent: w._7.Center,
                        alignContent: w.b.Center,
                        fullHeight: !0,
                        fullWidth: !0
                    }, a.createElement(w.w, {
                        overlay: !0,
                        ariaLabel: Object(s.d)("Edit Profile", "ChannelHeader"),
                        icon: w._25.Edit,
                        onClick: this.openModal
                    }))
                }, t = i.__decorate([Object(I.d)("EditProfileOverlay")], t)
            }(a.Component));
        var M = Object(b.b)(null, function(e) {
                return Object(k.b)({
                    showModal: y.d
                }, e)
            })(x),
            R = n("70dR"),
            L = (n("z4Db"), n("kOMe"));
        n.d(t, "b", function() {
            return A
        }), n.d(t, "a", function() {
            return B
        });
        var A, F = "channel-header__edit-profile-overlay",
            V = "channel-header__verified-badge",
            U = "channel-header__live-indicator",
            j = "TWILIGHT_BROWSER_NOTIFICATIONS_UPSELL",
            P = "yes",
            H = "browser-notifications-upsell-seen";
        ! function(e) {
            e[e.Channel = 1] = "Channel", e[e.Clips = 2] = "Clips", e[e.Collections = 3] = "Collections", e[e.Events = 4] = "Events", e[e.Success = 5] = "Success", e[e.Followers = 6] = "Followers", e[e.Following = 7] = "Following", e[e.Videos = 8] = "Videos"
        }(A || (A = {}));
        var B = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                n.verifiedBadgeElement = a.createElement(w._52, {
                    label: Object(s.d)("Verified", "ChannelHeader"),
                    direction: w._54.Right
                }, a.createElement(w._8, {
                    className: "channel-header__verified",
                    "data-target": V,
                    display: w.R.Flex,
                    alignItems: w.c.Center,
                    margin: {
                        left: 1
                    }
                }, a.createElement(w._24, {
                    asset: w._25.Verified
                }))), n.ChannelStatusIndicatorElement = a.createElement(w._8, {
                    margin: {
                        left: 1
                    },
                    "data-target": U
                }, a.createElement(w._52, {
                    label: Object(s.d)("Live Now", "ChannelHeader"),
                    direction: w._54.Right
                }, a.createElement(w.G, {
                    status: w.I.Live,
                    pulse: !0
                }))), n.renderAvatarEditButton = function() {
                    return n.props.data && n.props.data.user && n.isChannelEditor() ? a.createElement(w._35, {
                        className: F,
                        background: w.n.Overlay,
                        position: w._15.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        fullHeight: !0,
                        fullWidth: !0,
                        display: w.R.InlineFlex,
                        alignItems: w.c.Center,
                        justifyContent: w._7.Center
                    }, a.createElement(M, {
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
                                    return !s.l.get(H, !1) && Object(g.a)() && Object(f.c)() && s.o.experiments.getAssignment(j) === P ? [4, h.a.hasPushSubscription()] : [3, 3];
                                case 1:
                                    return e.sent() ? [3, 3] : (s.l.set(H, !0), this.props.showBrowserNotificationsUpsellModal(), [4, h.a.userSubscribe(v.a.Channel)]);
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
                var r = s.o.experiments.getAssignment("TWILIGHT_GET_BITS_TOP_NAV");
                return n.state = {
                    live: !1,
                    bannerHidden: !0,
                    bannerSlideIn: !1,
                    isGetBitsButtonTopNavExperimentEnabled: "treatment" === r
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
                    p = s.a.defaultAvatarURL;
                this.props.data && this.props.data.user && !this.props.data.loading && !this.props.data.error && (n = this.props.data.user.videos.totalCount, i = this.props.data.user.followers.totalCount, u = this.props.data.user.follows.totalCount, p = this.props.data.user.profileImageURL, e = this.props.data.user.displayName, t = this.props.data.user.roles && this.props.data.user.roles.isPartner);
                var h = this.state.live && !this.isActiveTab(A.Channel),
                    g = this.createChannelLinks(n, i, u),
                    f = {
                        "channel-header__user": !0,
                        "channel-header__user--selected": this.isActiveTab(A.Channel)
                    },
                    v = null;
                this.canRenderBitsButton() && (v = a.createElement(w._8, {
                    margin: {
                        left: 1
                    }
                }, a.createElement(m.a, {
                    channelLogin: this.props.channelLogin,
                    isInTopNav: !1
                })));
                var b, k = a.createElement(w._8, {
                    display: w.R.Flex,
                    flexWrap: w.U.NoWrap,
                    alignItems: w.c.Center,
                    flexShrink: 0
                }, a.createElement(w._8, {
                    className: "channel-header__user-avatar channel-header__user-avatar--active",
                    margin: {
                        right: 1
                    },
                    display: w.R.Flex,
                    flexShrink: 0,
                    alignItems: w.c.Stretch
                }, a.createElement(w._8, {
                    position: w._15.Relative
                }, a.createElement(w.m, {
                    size: 36,
                    src: p,
                    alt: e || ""
                }), this.renderAvatarEditButton())), e ? a.createElement(w.Q, {
                    type: w._49.H5
                }, e) : a.createElement(w._8, {
                    alignItems: w.c.Center
                }, a.createElement(w._14, {
                    lineCount: 1,
                    width: 120
                })), h && this.ChannelStatusIndicatorElement, t && this.verifiedBadgeElement);
                b = this.isActiveTab(A.Channel) ? a.createElement("div", {
                    className: "channel-header__banner-toggle",
                    onClick: this.toggleChannelBanner,
                    "data-target": "channel-header__channel-link",
                    "data-a-target": "user-channel-header-item"
                }, k) : this.props.data && this.props.data.user && this.props.data.user.login ? a.createElement(o.a, {
                    to: "/" + this.props.data.user.login,
                    "data-target": "channel-header__channel-link",
                    "data-a-target": "user-channel-header-item"
                }, k) : k;
                var y = this.state.bannerHidden ? w.R.HideAccessible : w.R.Block,
                    _ = null;
                return this.isActiveTab(A.Channel) && (_ = a.createElement(w._8, {
                    display: y
                }, a.createElement(T, {
                    channelLogin: this.props.channelLogin,
                    canEdit: this.isChannelEditor(),
                    collapsed: !this.state.bannerSlideIn,
                    onTransitionEnd: this.completedBannerAnimation
                }))), a.createElement(w._8, {
                    className: "channel-header",
                    flexShrink: 0
                }, _, a.createElement(w._8, {
                    display: w.R.Flex,
                    justifyContent: w._7.Between,
                    flexWrap: w.U.NoWrap,
                    fullHeight: !0,
                    refDelegate: this.saveChannelHeaderRef,
                    margin: {
                        x: 3
                    }
                }, a.createElement(w._8, {
                    display: w.R.Flex,
                    alignItems: w.c.Stretch,
                    flexShrink: 0,
                    flexWrap: w.U.NoWrap,
                    "data-target": "channel-header-left"
                }, a.createElement(w._2, {
                    className: r(f),
                    padding: {
                        y: .5,
                        right: 2
                    },
                    display: w.R.Flex,
                    flexWrap: w.U.NoWrap,
                    alignItems: w.c.Center,
                    flexShrink: 0
                }, b), this.renderTabs(g), a.createElement(w._8, {
                    className: "channel-header__item channel-header__item--no-underline",
                    padding: {
                        x: 1
                    },
                    flexShrink: 0,
                    alignSelf: w.d.Center,
                    "data-target": "channel-header-button"
                }, a.createElement(d.a, {
                    alwaysMountBalloonContent: !0
                }, a.createElement(w.w, {
                    icon: w._25.NavMore,
                    ariaLabel: Object(s.d)("More", "ChannelHeader")
                }), a.createElement(w.q, {
                    direction: w.r.Bottom,
                    noTail: !0
                }, a.createElement(w._8, {
                    padding: {
                        y: 1
                    }
                }, this.renderDropdown(g)))))), a.createElement(w._8, {
                    display: w.R.Flex,
                    flexWrap: w.U.NoWrap,
                    flexShrink: 0,
                    alignItems: w.c.Center,
                    className: "channel-header__right",
                    "data-target": "channel-header-right"
                }, a.createElement(w._8, {
                    className: "channel-header__follow-button",
                    display: w.R.Flex,
                    alignItems: w.c.Stretch,
                    margin: {
                        left: 1
                    }
                }, a.createElement(l.a, {
                    updateContainerWidth: this.onUpdateDebounce,
                    isHostedFollow: !1,
                    channelLogin: this.props.channelLogin,
                    onFollow: this.maybeShowBrowserNotificationsUpsell,
                    followUIType: l.b.IconAndText,
                    unfollowUIType: l.b.IconOnly
                })), a.createElement(w._8, {
                    margin: {
                        left: 1
                    }
                }, a.createElement(R.a, {
                    updateContainerWidth: this.onUpdateDebounce,
                    channelLogin: this.props.channelLogin,
                    hideEsportsSubscription: this.props.hideEsportsSubscription
                })), v)), a.createElement(c.a, {
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
                return t ? Object(p.a)(i) : i
            }, t.prototype.renderTabs = function(e) {
                var t = this;
                return e.map(function(e) {
                    var n = e.count ? a.createElement(w._8, {
                            className: "channel-header__item-count",
                            display: w.R.Flex,
                            margin: {
                                left: .5
                            }
                        }, a.createElement(w.Q, {
                            type: w._49.Span,
                            fontSize: w.V.Size5
                        }, e.count)) : null,
                        r = t.generateUserLink(e.pathSuffix, e.isExternal),
                        s = {};
                    return e.isExternal && (s.target = Object(p.b)() ? "_blank" : ""), a.createElement(w._2, {
                        key: "channel-header__item--" + e.label,
                        alignItems: w.c.Center,
                        flexShrink: 0
                    }, a.createElement(o.a, i.__assign({
                        className: "channel-header__item channel-header__item--hide " + (e.isSelected ? "channel-header__item--selected" : "")
                    }, s, {
                        to: r,
                        "data-target": "channel-header-item",
                        "data-a-target": e.label.toLowerCase() + "-channel-header-item"
                    }), a.createElement(w._8, {
                        padding: {
                            x: 2,
                            y: .5
                        },
                        display: w.R.Flex
                    }, a.createElement(w.Q, {
                        type: w._49.Span,
                        fontSize: w.V.Size5
                    }, e.label), n)))
                })
            }, t.prototype.renderDropdown = function(e) {
                var t = this;
                return e.map(function(e) {
                    var n = e.count ? a.createElement(w._8, {
                            className: "channel-header__item-count",
                            display: w.R.Flex,
                            margin: {
                                left: .5
                            }
                        }, a.createElement(w.Q, {
                            type: w._49.Span
                        }, e.count)) : null,
                        r = t.generateUserLink(e.pathSuffix, e.isExternal),
                        o = {};
                    return e.isExternal && (o.targetBlank = !0), a.createElement(w._8, {
                        key: "channel-header__dropdown-item--" + e.label,
                        "data-target": "channel-header-dropdown-item"
                    }, a.createElement(w._6, i.__assign({
                        linkTo: r,
                        disabled: "#" === r
                    }, o), a.createElement(w._8, {
                        className: "channel-header__dropdown-hover-target",
                        padding: {
                            y: .5,
                            x: 1
                        },
                        display: w.R.Flex
                    }, a.createElement(w.Q, {
                        type: w._49.Span
                    }, e.label), n)))
                })
            }, t.prototype.createChannelLinks = function(e, t, n) {
                return [{
                    label: Object(s.d)("Videos", "ChannelHeader"),
                    count: Object(s.e)(e),
                    pathSuffix: "videos/all",
                    isExternal: !1,
                    isSelected: this.isActiveTab(A.Videos)
                }, {
                    label: Object(s.d)("Clips", "ChannelHeader"),
                    pathSuffix: "clips",
                    isExternal: !1,
                    isSelected: this.isActiveTab(A.Clips)
                }, {
                    label: Object(s.d)("Collections", "ChannelHeader"),
                    pathSuffix: "collections",
                    isExternal: !1,
                    isSelected: this.isActiveTab(A.Collections)
                }, {
                    label: Object(s.d)("Events", "ChannelHeader"),
                    pathSuffix: "events",
                    isExternal: !1,
                    isSelected: this.isActiveTab(A.Events)
                }, {
                    label: Object(s.d)("Followers", "ChannelHeader"),
                    count: Object(s.e)(t),
                    pathSuffix: "followers",
                    isExternal: !1,
                    isSelected: this.isActiveTab(A.Followers)
                }, {
                    label: Object(s.d)("Following", "ChannelHeader"),
                    count: Object(s.e)(n),
                    pathSuffix: "following",
                    isExternal: !1,
                    isSelected: this.isActiveTab(A.Following)
                }]
            }, t.prototype.isActiveTab = function(e) {
                return A[this.props.currentPage] === A[e]
            }, t.prototype.isChannelEditor = function() {
                return !!this.props.data && !!this.props.data.currentUser && !!this.props.data.user && !!this.props.data.currentUser.roles && (this.props.data.currentUser.id === this.props.data.user.id || this.props.data.currentUser.roles.isStaff || this.props.data.currentUser.roles.isSiteAdmin)
            }, t.prototype.getChannelHeaderSize = function() {
                if (this.channelHeader) {
                    var e = this.channelHeader.querySelector('[data-target="channel-header-left"]'),
                        t = this.channelHeader.querySelector('[data-target="channel-header-right"]'),
                        n = this.channelHeader.querySelectorAll('[data-target="channel-header-item"]'),
                        i = this.channelHeader.querySelectorAll('[data-target="channel-header-dropdown-item"]');
                    if (n.length) {
                        var r = this.getWidth(this.channelHeader).width,
                            a = this.getWidth(e).width + this.getWidth(t).width + 20 - r;
                        if (a > 0)
                            for (var o = n.length - 1; o >= 0; o--) {
                                if (!(l = n[o]).classList.contains("channel-header__item--hide")) {
                                    var s = this.getWidth(l);
                                    if (l.classList.add("channel-header__item--hide"), i[o].classList.remove("channel-header__item--hide"), (a -= s.width) <= 0) break
                                }
                            } else
                                for (o = 0; o < n.length; o++) {
                                    var l;
                                    if ((l = n[o]).classList.contains("channel-header__item--hide")) {
                                        if (l.classList.remove("channel-header__item--hide"), (s = this.getWidth(l)).width >= Math.abs(a)) {
                                            l.classList.add("channel-header__item--hide");
                                            break
                                        }
                                        l.classList.remove("channel-header__item--hide"), i[o].classList.add("channel-header__item--hide"), a += s.width
                                    }
                                }
                        var c = this.channelHeader.querySelector('[data-target="channel-header-button"]');
                        if (c) {
                            var d = !this.channelHeader.querySelectorAll('[data-target="channel-header-item"].channel-header__item--hide').length;
                            c.classList.toggle("channel-header__item--hide", d)
                        }
                    }
                }
            }, t.prototype.canRenderBitsButton = function() {
                return this.props.data && !this.props.data.loading && this.props.currentPage !== A.Clips && this.props.data.user && this.props.data.user.cheer && !1 === this.state.isGetBitsButtonTopNavExperimentEnabled
            }, t.prototype.getWidth = function(e) {
                return e ? {
                    width: e.clientWidth
                } : {
                    width: 0
                }
            }, t.prototype.reportInteractive = function() {
                !this.props.data || this.props.data.loading || this.props.data.error || this.props.latencyTracking.reportInteractive()
            }, t = i.__decorate([Object(u.a)(L, {
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
            }), Object(I.d)("ChannelHeader")], t)
        }(a.Component)
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
    Tg4T: function(e, t, n) {
        "use strict";
        var i, r = n("TToO"),
            a = n("GiK3"),
            o = n("6sO2"),
            s = n("Odds");
        ! function(e) {
            e.LockSelector = "video-lock", e.UpsellSelector = "upsell"
        }(i || (i = {}));
        var l = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return r.__extends(t, e), t.prototype.render = function() {
                if (!(this.props.restriction && this.props.restriction.productName && this.props.restriction.title && this.props.videoID)) return null;
                var e = Object(o.d)("Get It Now", "VideoPreviewCardRestriction"),
                    t = this.props.restriction.canViewRestricted,
                    n = t ? Object(o.d)("unlocked", "VideoPreviewCardRestriction") : Object(o.d)("locked", "VideoPreviewCardRestriction"),
                    r = t ? s._25.Unlock : s._25.Lock;
                return a.createElement(s._8, null, !t && a.createElement(s._35, {
                    background: s.n.Overlay,
                    className: "video-preview-card-restriction",
                    color: s.K.Overlay,
                    display: s.R.Flex,
                    position: s._15.Absolute,
                    attachTop: !0,
                    attachLeft: !0,
                    zIndex: s._62.Default,
                    padding: {
                        x: 5
                    },
                    textAlign: s._45.Center,
                    fullWidth: !0,
                    fullHeight: !0,
                    alignItems: s.c.Center,
                    alignContent: s.b.Center,
                    flexDirection: s.T.Column,
                    flexWrap: s.U.Wrap,
                    justifyContent: s._7.Center,
                    "data-test-selector": i.LockSelector
                }, a.createElement(s._2, {
                    margin: {
                        bottom: 1
                    }
                }, a.createElement(s.Q, {
                    color: s.K.Overlay,
                    fontSize: s.V.Size5,
                    "data-test-selector": i.UpsellSelector
                }, Object(o.d)("View with {title}", {
                    title: this.props.restriction.title
                }, "VideoPreviewCardRestriction"))), a.createElement(s._8, null, a.createElement(s.v, {
                    type: s.B.Hollow,
                    ariaLabel: e,
                    targetBlank: !0,
                    disabled: "" === this.props.restriction.productName,
                    linkTo: "https://www.twitch.tv/products/" + this.props.restriction.productName,
                    overlay: !0
                }, e))), a.createElement(s._35, {
                    display: s.R.InlineFlex,
                    position: s._15.Absolute,
                    attachTop: this.props.attachTop,
                    attachBottom: !this.props.attachTop,
                    attachRight: !0,
                    margin: .5,
                    zIndex: s._62.Default,
                    fontSize: s.V.Size6,
                    background: s.n.Overlay,
                    borderRadius: s.t.Medium,
                    color: s.K.Overlay
                }, a.createElement(s._52, {
                    direction: this.props.attachTop ? s._54.Bottom : s._54.Top,
                    align: s._53.Right,
                    label: n
                }, a.createElement(s._24, {
                    asset: r,
                    height: 20,
                    width: 20
                }))))
            }, t
        }(a.PureComponent);
        n.d(t, !1, function() {
            return i
        }), n.d(t, "a", function() {
            return l
        })
    },
    TnJK: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var i = {
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
    ToRI: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e, t) {
            var n = i(e),
                r = Number(t);
            return n.setSeconds(r), n
        }
    },
    Tt3k: function(e, t, n) {
        "use strict";
        t.b = function(e, t, n) {
            var i = new FileReader;
            i.onloadend = function() {
                n && n(i.result)
            }, i.readAsDataURL(e);
            var r = new FileReader;
            r.onloadend = function() {
                t(r.result)
            }, r.readAsArrayBuffer(e)
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
    Tv4R: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e, t) {
            if (!(t instanceof Array)) throw new TypeError(toString.call(t) + " is not an instance of Array");
            var n, r, a = i(e).getTime();
            return t.forEach(function(e) {
                var t = i(e),
                    o = Math.abs(a - t.getTime());
                (void 0 === n || o < r) && (n = t, r = o)
            }), n
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
    Umoc: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return l
        }), n.d(t, "a", function() {
            return c
        }), n.d(t, "c", function() {
            return d
        });
        var i = n("TToO"),
            r = n("6sO2"),
            a = n("vH/s"),
            o = n("TnJK"),
            s = n("QFW6"),
            l = function(e) {
                r.n.track(a.SpadeEventType.ChatSettingsOpened, Object(s.a)(e))
            },
            c = function(e) {
                var t = i.__assign({}, Object(s.a)(e), {
                    setting_name: e.settingName,
                    new_value: e.newValue.toString()
                });
                r.n.track(a.SpadeEventType.ChatSettingsChanged, t)
            },
            d = function(e) {
                var t = i.__assign({}, Object(s.a)(e), {
                    setting_name: o.a.FollowerDuration,
                    new_value: e.newValue.toString(),
                    follower_mode_on: e.followerModeOn
                });
                r.n.track(a.SpadeEventType.ChatSettingsChanged, t)
            }
    },
    "Uu+E": function(e, t, n) {
        var i = n("xA5w"),
            r = n("iRXW"),
            a = n("nizW");
        e.exports = function(e, t) {
            var n = i(e),
                o = Number(t),
                s = a(n, r(n)),
                l = new Date(0);
            return l.setFullYear(o, 0, 4), l.setHours(0, 0, 0, 0), (n = r(l)).setDate(n.getDate() + s), n
        }
    },
    UzRK: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
        }), n.d(t, "b", function() {
            return a
        }), t.c = function(e) {
            switch (e) {
                case 0:
                    return Object(i.d)("0 minutes (Any followers)", "FollowersOnlyLabel");
                case 10:
                    return Object(i.d)("10 minutes (Most used)", "FollowersOnlyLabel");
                case 30:
                    return Object(i.d)("30 minutes", "FollowersOnlyLabel");
                case 60:
                    return Object(i.d)("1 hour", "FollowersOnlyLabel");
                case 1440:
                    return Object(i.d)("1 day", "FollowersOnlyLabel");
                case 10080:
                    return Object(i.d)("1 week", "FollowersOnlyLabel");
                case 43200:
                    return Object(i.d)("1 month", "FollowersOnlyLabel");
                case 129600:
                    return Object(i.d)("3 months", "FollowersOnlyLabel");
                default:
                    return i.j.warn("[FollowersOnlyLabel] Tried to generate a label for a non-preset.", e), ""
            }
        }, t.d = function(e) {
            switch (e) {
                case 0:
                    return Object(i.d)("0 min", "FollowersOnlyShorthand");
                case 10:
                    return Object(i.d)("10 min", "FollowersOnlyShorthand");
                case 30:
                    return Object(i.d)("30 min", "FollowersOnlyShorthand");
                case 60:
                    return Object(i.d)("1 hr", "FollowersOnlyShorthand");
                case 1440:
                    return Object(i.d)("1 day", "FollowersOnlyShorthand");
                case 10080:
                    return Object(i.d)("1 wk", "FollowersOnlyShorthand");
                case 43200:
                    return Object(i.d)("1 mo", "FollowersOnlyShorthand");
                case 129600:
                    return Object(i.d)("3 mo", "FollowersOnlyShorthand");
                default:
                    return Object(i.d)("custom", "FollowersOnlyShorthand")
            }
        };
        var i = n("6sO2"),
            r = 30,
            a = [0, 10, 30, 60, 1440, 10080, 43200, 129600]
    },
    "V+9p": function(e, t) {},
    VUr8: function(e, t, n) {
        var i = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ResumeWatchingVideoCarousel_CurrentUser"
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
                                    value: "login"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "viewedVideos"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "first"
                                    },
                                    value: {
                                        kind: "IntValue",
                                        value: "30"
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
                end: 228
            }
        };
        i.loc.source = {
            body: '#import "twilight/features/video-preview-card/models/preview-card-video-fragment.gql"\nquery ResumeWatchingVideoCarousel_CurrentUser {\ncurrentUser {\nid\nlogin\nviewedVideos (first: 30) {\nedges {\nnode {\n...PreviewCardVideo\n}\n}\n}\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var r = {};
        i.definitions = i.definitions.concat(n("qjMx").definitions.filter(function(e) {
            if ("FragmentDefinition" !== e.kind) return !0;
            var t = e.name.value;
            return !r[t] && (r[t] = !0, !0)
        })), e.exports = i
    },
    VaeB: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e) {
            var t = i(e);
            return t.setMilliseconds(0), t
        }
    },
    Vaxm: function(e, t) {},
    VnsS: function(e, t) {},
    Vr3l: function(e, t, n) {
        e.exports = n.p + "assets/overwatch-chars-9fc82f039194a365a8d6d2bf2797e041.png"
    },
    VsL1: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            r = n("6sO2"),
            a = "control";
        t.a = s, t.b = function(e, t) {
            var n = s();
            n[e] = t, r.l.set(o, n)
        }, t.c = function(e, t) {
            var n = s();
            n.lastUsedFollowerDurations[e] = t, r.l.set(o, n)
        };
        var o = "chatSettings";

        function s() {
            var e = r.l.get(o, {});
            return i.__assign({
                lastUsedFollowerDurations: {},
                showAutoModActions: !0,
                showMessageFlags: !0,
                showModerationActions: !0,
                showModIcons: !1,
                showTimestamps: !1,
                zachModeStatus: a
            }, e)
        }
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
            return fetch(r.a.krakenEndpoint + "/users/" + e + "/default_images?client_id=" + r.a.authSettings.clientID + "&api_version=" + r.a.defaultAPIVersion, {
                method: "PUT",
                headers: {
                    Authorization: "OAuth " + t,
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify({
                    default_profile_image: a.b[n].id
                })
            })
        }, t.a = function(e, t, n, a) {
            return i.__awaiter(this, void 0, void 0, function() {
                return i.__generator(this, function(i) {
                    switch (i.label) {
                        case 0:
                            return [4, fetch(r.a.krakenEndpoint + "/users/" + e + "/upload_image?client_id=" + r.a.authSettings.clientID + "&api_version=" + r.a.defaultAPIVersion + "&image_type=" + n + "&format=" + a, {
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
            r = n("6sO2"),
            a = n("puy8")
    },
    WClm: function(e, t) {},
    WNGz: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e) {
            var t = i(e);
            return t.setHours(0, 0, 0, 0), t
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
    WzS7: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            r = n("GiK3"),
            a = n("3zLD"),
            o = n("6sO2"),
            s = n("7vx8"),
            l = n("vH/s"),
            c = n("CSlQ"),
            d = n("o/V0"),
            u = n("+DHI"),
            p = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    if (this.props.data.error) return null;
                    if (!(this.props.data.loading || this.props.data.user && this.props.data.user.collections)) return null;
                    var e = null;
                    if (this.props.data && this.props.data.user && this.props.data.user.collections) {
                        var t = this.props.data.user.collections.edges;
                        if (0 === t.length) return null;
                        e = t[0].node
                    }
                    return r.createElement(d.a, {
                        collection: e,
                        fallbackTitle: Object(o.d)("Latest Collection", "LatestCollectionCarousel"),
                        subTitle: Object(o.d)("Recently updated collection", "LatestCollectionCarousel"),
                        tracking: {
                            content: l.PageviewContent.LatestCollection,
                            medium: this.props.tracking.medium,
                            location: this.props.tracking.location,
                            source: {
                                source_channel: this.props.creatorLogin,
                                source_item_type: l.TwitchDataType.Channel
                            }
                        }
                    })
                }, t.prototype.componentDidUpdate = function(e) {
                    e.data.loading && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                }, t
            }(r.Component),
            m = Object(a.compose)(Object(s.a)(u), Object(c.d)("LatestCollectionCarousel"))(p),
            h = n("IwGL"),
            g = n("vKFS"),
            f = n("GJxf"),
            v = n("dc2a"),
            b = n("Odds"),
            k = n("pXt7"),
            y = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    if (this.props.noGameSpecified) return null;
                    var e = this.props.data && !this.props.data.loading && this.props.data.game && Object(v.a)(this.props.data.game.videos) || null;
                    return !this.props.data || this.props.data.loading || e && 0 !== e.length ? r.createElement("div", null, r.createElement(b.Q, {
                        type: b._49.H4,
                        transform: b._48.Uppercase,
                        color: b.K.Alt2
                    }, this.props.gameName ? Object(o.d)("Popular videos from {game}", {
                        game: this.props.gameName
                    }, "PopularVideosByGameCarousel") : r.createElement(b._14, {
                        width: 200
                    })), r.createElement(f.a, {
                        currentlyWatchingVideoID: this.props.currentlyWatchingVideoID,
                        listContext: g.b.SingleGameList,
                        tracking: {
                            content: l.PageviewContent.PopularVideos,
                            medium: this.props.tracking.medium,
                            location: this.props.tracking.location,
                            source: {
                                source_item_type: l.TwitchDataType.Game,
                                source_game: this.props.gameName || void 0
                            }
                        },
                        videos: e
                    })) : null
                }, t
            }(r.Component),
            _ = Object(a.compose)(Object(c.d)("PopularVideosByGameCarousel", {
                autoReportInteractive: !0
            }), Object(s.a)(k, {
                skip: function(e) {
                    return !e.gameName
                }
            }))(y),
            S = n("tKvs"),
            C = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = null;
                    return !this.props.data || this.props.data.loading || this.props.data.videos ? this.props.data && this.props.data.videos && 0 === (e = Object(v.a)(this.props.data.videos)).length ? null : r.createElement("div", null, r.createElement(b.Q, {
                        type: b._49.H4,
                        transform: b._48.Uppercase,
                        color: b.K.Alt2
                    }, Object(o.d)("Popular Videos On Twitch", "PopularVideosCarousel")), r.createElement(f.a, {
                        currentlyWatchingVideoID: this.props.currentlyWatchingVideoID,
                        listContext: g.b.MixedGameAndChannelList,
                        tracking: {
                            content: l.PageviewContent.PopularOverallVideos,
                            medium: this.props.tracking.medium,
                            location: this.props.tracking.location,
                            source: {}
                        },
                        videos: e
                    })) : null
                }, t = i.__decorate([Object(c.d)("PopularVideosCarousel", {
                    autoReportInteractive: !0
                }), Object(s.a)(S)], t)
            }(r.Component),
            w = n("FNUa"),
            E = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    if (this.props.data && (this.props.data.error || !this.props.data.user)) return null;
                    var e = !this.props.data || this.props.data.loading ? null : Object(v.a)(this.props.data.user.videos);
                    return e && 0 === e.length ? null : r.createElement("div", null, r.createElement(b.Q, {
                        type: b._49.H4,
                        transform: b._48.Uppercase,
                        color: b.K.Alt2
                    }, this.props.creatorDisplayName ? Object(o.d)("Recent videos from {displayName}", {
                        displayName: this.props.creatorDisplayName
                    }, "RecentCreatorVideosFromUserCarousel") : r.createElement(b._14, {
                        width: 200
                    })), r.createElement(f.a, {
                        currentlyWatchingVideoID: this.props.currentlyWatchingVideoID,
                        listContext: g.b.SingleChannelList,
                        videos: e,
                        tracking: {
                            content: l.PageviewContent.RecentVideos,
                            location: this.props.tracking.location,
                            medium: this.props.tracking.medium,
                            source: {
                                source_item_type: l.TwitchDataType.Channel,
                                source_channel: this.props.data ? this.props.data.user.login : ""
                            }
                        }
                    }))
                }, t
            }(r.Component),
            O = Object(a.compose)(Object(c.d)("RecentCreatorVideosCarousel", {
                autoReportInteractive: !0
            }), Object(s.a)(w, {
                skip: function(e) {
                    return !e.creatorID
                }
            }))(E),
            D = n("RH2O"),
            T = n("Aj/L"),
            N = n("pwi9"),
            I = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    if (!this.props.isLoggedIn || !this.props.data || this.props.data.error) return null;
                    var e = this.props.data && this.props.data.currentUser && this.props.data.currentUser.recommendations && Object(v.a)(this.props.data.currentUser.recommendations.videos) || null;
                    if (this.props.data && !this.props.data.loading && (!e || 0 === e.length)) return null;
                    var t = this.props.data.currentUser ? this.props.data.currentUser.login : "";
                    return r.createElement("div", null, r.createElement(b.Q, {
                        type: b._49.H4,
                        transform: b._48.Uppercase,
                        color: b.K.Alt2
                    }, Object(o.d)("Based On Your Viewing History", "RecommendedVideoCarousel")), r.createElement(f.a, {
                        currentlyWatchingVideoID: this.props.currentlyWatchingVideoID,
                        listContext: g.b.MixedGameAndChannelList,
                        tracking: {
                            content: l.PageviewContent.RecommendedVideos,
                            medium: this.props.tracking.medium,
                            location: this.props.tracking.location,
                            source: {
                                source_item_type: l.TwitchDataType.User,
                                source_channel: t
                            }
                        },
                        videos: e
                    }))
                }, t
            }(r.Component),
            x = Object(a.compose)(Object(c.d)("RecommendedVideoCarousel", {
                autoReportInteractive: !0
            }), Object(s.a)(N, {
                skip: function(e) {
                    return !e.isLoggedIn
                }
            }))(I);
        var M = Object(D.b)(function(e) {
                return {
                    isLoggedIn: Object(T.d)(e)
                }
            })(x),
            R = n("wuJz"),
            L = n("VUr8"),
            A = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    if (!this.props.isLoggedIn || !this.props.data || this.props.data.error) return null;
                    var e = this.props.data && this.props.data.currentUser && Object(v.a)(this.props.data.currentUser.viewedVideos) || null;
                    if (!(!this.props.data || this.props.data.loading || e && 0 !== e.length)) return null;
                    e = (e || []).filter(function(e) {
                        if (!e.self || !e.self.viewingHistory || !e.self.viewingHistory.position) return !1;
                        var t = e.self.viewingHistory.position,
                            n = t / e.lengthSeconds;
                        return !(n <= .05 || n >= .95)
                    }).sort(function(e, t) {
                        return Object(R.compareDesc)(new Date(e.publishedAt), new Date(t.publishedAt))
                    });
                    var t = this.props.data.currentUser ? this.props.data.currentUser.login : "";
                    return r.createElement("div", null, r.createElement(b.Q, {
                        type: b._49.H4,
                        transform: b._48.Uppercase,
                        color: b.K.Alt2
                    }, Object(o.d)("Finish Watching", "ResumeWatchingVideoCarousel")), r.createElement(f.a, {
                        currentlyWatchingVideoID: this.props.currentlyWatchingVideoID,
                        listContext: g.b.MixedGameAndChannelList,
                        tracking: {
                            content: l.PageviewContent.ResumeWatchingVideos,
                            location: this.props.tracking.location,
                            medium: this.props.tracking.medium,
                            source: {
                                source_item_type: l.TwitchDataType.User,
                                source_channel: t
                            }
                        },
                        videos: e
                    }))
                }, t
            }(r.Component);
        var F = Object(a.compose)(Object(s.a)(L, {
            skip: function(e) {
                return !e.isLoggedIn
            }
        }), Object(c.d)("ResumeWatchingVideoCarousel", {
            autoReportInteractive: !0
        }))(A);
        var V = Object(D.b)(function(e) {
            return {
                isLoggedIn: Object(T.d)(e)
            }
        })(F);
        n.d(t, "a", function() {
            return m
        }), n.d(t, !1, function() {
            return h.LatestVideosFromFollowedCarousel
        }), n.d(t, "b", function() {
            return _
        }), n.d(t, "c", function() {
            return C
        }), n.d(t, "d", function() {
            return O
        }), n.d(t, "e", function() {
            return M
        }), n.d(t, "f", function() {
            return V
        })
    },
    XFzU: function(e, t, n) {
        var i = n("GI7G");
        e.exports = function(e, t) {
            var n = i(e, t) / 3;
            return n > 0 ? Math.floor(n) : Math.ceil(n)
        }
    },
    XYqD: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        });
        var i = n("GiK3"),
            r = (n.n(i), n("Odds")),
            a = function() {
                return i.createElement(r.C, null, i.createElement(r.k, {
                    ratio: r.l.Aspect16x9
                }, i.createElement(r._14, null)), i.createElement(r.D, null, i.createElement(r._8, {
                    display: r.R.Flex,
                    margin: {
                        bottom: 1
                    }
                }, i.createElement(r._8, {
                    display: r.R.InlineBlock,
                    margin: {
                        top: 1,
                        right: 1
                    }
                }, i.createElement(r._14, {
                    width: 40,
                    height: 56
                })), i.createElement(r._8, {
                    display: r.R.InlineBlock,
                    margin: {
                        top: 1
                    }
                }, i.createElement(r.Q, null, i.createElement(r._14, {
                    width: 150
                })), i.createElement(r.Q, {
                    fontSize: r.V.Size7
                }, i.createElement(r._14, {
                    width: 100
                }))))))
            }
    },
    YDbY: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
        });
        var i = n("6sO2"),
            r = function() {
                return i.b.get("dashboard_moderation_settings_enabled", !1)
            }
    },
    YPf8: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e) {
            return 5 === i(e).getDay()
        }
    },
    YPjl: function(e, t, n) {
        var i = n("xA5w"),
            r = n("Jvcu"),
            a = n("AZvW");
        e.exports = function(e, t) {
            var n = i(e),
                o = Number(t),
                s = a(n);
            return r(n, o - s)
        }
    },
    YRFD: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e, t) {
            var n = i(e).getTime(),
                r = i(t).getTime();
            return n > r ? -1 : n < r ? 1 : 0
        }
    },
    YUUt: function(e, t, n) {
        e.exports = n.p + "assets/counterstrike-skill-groups-24ec0fc40a78435bc37349dfbde7c720.png"
    },
    YVIF: function(e, t) {},
    Ydo4: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var i = {
            PageError: "page-error",
            Error: "error",
            Success: "success",
            Info: "info"
        }
    },
    YhgU: function(e, t) {},
    ZUMa: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e) {
            return 0 === i(e).getDay()
        }
    },
    "ZUp+": function(e, t) {},
    a0ve: function(e, t) {},
    a4C9: function(e, t) {},
    a7Cs: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e, t) {
            var n = i(e),
                r = Number(t);
            return n.setFullYear(r), n
        }
    },
    aBed: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return _
        });
        var i = n("TToO"),
            r = n("HW6M"),
            a = (n.n(r), n("OAwv")),
            o = (n.n(a), n("GiK3")),
            s = (n.n(o), n("F8kA")),
            l = n("6sO2"),
            c = n("iOr9"),
            d = n("vKFS"),
            u = n("SZoP"),
            p = n("mi6k"),
            m = n("CSlQ"),
            h = n("81qH"),
            g = n("Tg4T"),
            f = n("Odds"),
            v = n("a0ve"),
            b = (n.n(v), "video-view-count"),
            k = "video-length",
            y = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        hovered: !1,
                        didAnimatedPreviewLoad: !1,
                        didAnimatedPreviewFailToLoad: !1
                    }, t.renderVariation = function() {
                        var e = {
                            productName: t.props.video.restriction && t.props.video.restriction.productName,
                            title: t.props.video.restriction && t.props.video.restriction.productTitle,
                            canViewRestricted: t.props.video.self && !t.props.video.self.isRestricted || !1
                        };
                        return o.createElement(d.a, {
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
                            watchedProgressPercent: t.getVideoPreviousWatchPercentage() || 0,
                            restriction: e,
                            videoID: t.props.video.id
                        })
                    }, t.renderFallback = function() {
                        var e = null,
                            n = t.getVideoPreviousWatchPercentage();
                        null !== n && (e = o.createElement(f._8, {
                            position: f._15.Absolute,
                            attachBottom: !0,
                            fullWidth: !0
                        }, o.createElement(f._18, {
                            size: f._20.Small,
                            value: n,
                            mask: !0
                        })));
                        var r = {
                            productName: t.props.video.restriction && t.props.video.restriction.productName,
                            title: t.props.video.restriction && t.props.video.restriction.productTitle,
                            canViewRestricted: t.props.video.self && !t.props.video.self.isRestricted || !1
                        };
                        return o.createElement("div", i.__assign({
                            onClick: t.onClickHandler,
                            onMouseEnter: t.onMouseEnterHandler,
                            onMouseLeave: t.onMouseLeaveHandler
                        }, Object(f._63)(t.props)), o.createElement(f.C, null, o.createElement(f._8, {
                            fullWidth: !0
                        }, o.createElement(f.k, {
                            overflow: !0
                        }, o.createElement("div", null, o.createElement(g.a, {
                            videoID: t.props.video.id,
                            restriction: r
                        }), o.createElement(f._35, {
                            display: f.R.InlineFlex,
                            position: f._15.Absolute,
                            attachTop: !0,
                            attachLeft: !0,
                            margin: .5,
                            zIndex: f._62.Default,
                            fontSize: f.V.Size6,
                            background: f.n.Overlay,
                            color: f.K.Overlay,
                            className: "video-preview-card__preview-overlay-stat"
                        }, o.createElement(f._34, {
                            "data-test-selector": b,
                            icon: f._25.GlyphViews,
                            label: Object(l.d)("views", "VideoPreviewCard"),
                            value: Object(l.f)(t.props.video.viewCount)
                        })), o.createElement(f._35, {
                            display: f.R.InlineFlex,
                            position: f._15.Absolute,
                            attachTop: !0,
                            attachRight: !0,
                            margin: .5,
                            zIndex: f._62.Default,
                            fontSize: f.V.Size6,
                            background: f.n.Overlay,
                            color: f.K.Overlay,
                            className: "video-preview-card__preview-overlay-stat"
                        }, o.createElement(f._34, {
                            "data-test-selector": k,
                            icon: f._25.GlyphLength,
                            label: Object(l.d)("length", "VideoPreviewCard"),
                            value: Object(p.b)(t.props.video.lengthSeconds)
                        })), t.videoPreviewImage(), e))), o.createElement(f.D, null, o.createElement(f._8, {
                            display: f.R.Flex,
                            flexDirection: f.T.Row,
                            flexWrap: f.U.NoWrap,
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
                            return o.createElement(h.VideoPreviewCardPlaceholder, null)
                        },
                        name: "TWILIGHT_VIDEO_CARD_UPDATES"
                    };
                    return o.createElement(c.a, i.__assign({}, e))
                }, t.prototype.generateSearchString = function() {
                    var e = {};
                    this.props.collectionID && (e.collection = this.props.collectionID);
                    var t = a.stringify(e);
                    return t ? "?" + t : ""
                }, t.prototype.videoPreviewImage = function() {
                    var e = this.state.hovered && !this.state.didAnimatedPreviewFailToLoad ? this.props.video.animatedPreviewURL : this.props.video.previewThumbnailURL,
                        t = r("video-preview-card__image-wrapper", {
                            "video-preview-card__image-wrapper--watched": null !== this.getVideoPreviousWatchPercentage() && !this.state.hovered
                        }),
                        n = r("video-preview-card__preview-image", {
                            "video-preview-card__preview-image--animated": this.state.hovered && this.state.didAnimatedPreviewLoad
                        });
                    return o.createElement(f.k, {
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
                    }, o.createElement(f._2, {
                        flexShrink: 0
                    }, o.createElement("figure", null, o.createElement(f.k, {
                        ratio: f.l.Aspect16x9
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
                        n = r("video-preview-card__image-wrapper", {
                            "video-preview-card__image-wrapper--watched": null !== this.getVideoPreviousWatchPercentage() && !this.state.hovered
                        });
                    return o.createElement(f._8, {
                        "data-test-selector": "game-box-art",
                        display: f.R.InlineFlex,
                        flexShrink: 0,
                        padding: {
                            bottom: .5
                        }
                    }, o.createElement(s.a, {
                        to: t,
                        title: e.name,
                        "data-a-target": "video-preview-card-boxart-link"
                    }, o.createElement(f._2, {
                        margin: {
                            right: 1
                        }
                    }, o.createElement("figure", {
                        className: "video-preview-card__game-art"
                    }, o.createElement(f._52, {
                        display: f.R.Block,
                        direction: f._54.Bottom,
                        label: e.name
                    }, o.createElement("div", {
                        className: n,
                        "data-test-selector": "game-box-art-wrapper"
                    }, o.createElement(f.E, {
                        aspect: f.l.BoxArt,
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
                    return o.createElement(f._8, {
                        display: f.R.Flex,
                        flexDirection: f.T.Column,
                        overflow: f._11.Hidden
                    }, o.createElement(f._8, {
                        "data-test-selector": "video-title",
                        overflow: f._11.Hidden,
                        position: f._15.Relative
                    }, o.createElement(f.Q, {
                        color: f.K.Base,
                        fontSize: f.V.Size5,
                        lineHeight: f._9.Heading
                    }, o.createElement(s.a, {
                        className: "video-preview-card__video-title",
                        to: {
                            pathname: "/videos/" + this.props.video.id,
                            state: this.getLinkState(),
                            search: this.generateSearchString()
                        },
                        title: this.props.video.title,
                        "data-a-target": "video-preview-card-title-link"
                    }, this.props.video.title))), o.createElement(f._8, {
                        flexShrink: 0,
                        flexGrow: 0,
                        ellipsis: !0
                    }, o.createElement(f.Q, {
                        type: f._49.Span,
                        color: f.K.Alt2,
                        ellipsis: !0,
                        title: this.formatTitle(e)
                    }, e, o.createElement(f._2, {
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
            _ = Object(m.d)("VideoPreviewCard")(y)
    },
    aHtT: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function() {
            var e = Array.prototype.slice.call(arguments).map(function(e) {
                    return i(e)
                }),
                t = Math.min.apply(null, e);
            return new Date(t)
        }
    },
    ass3: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        }), n.d(t, "b", function() {
            return r
        }), t.c = function() {
            return {
                type: i
            }
        }, t.d = function(e, t, n, i) {
            void 0 === i && (i = 0);
            return {
                type: r,
                viewerCardOptions: {
                    initialTopOffset: i,
                    sourceID: n,
                    sourceType: t,
                    targetLogin: e
                }
            }
        };
        var i = "viewer-card.VIEWER_CARD_HIDDEN",
            r = "viewer-card.VIEWER_CARD_SHOWN"
    },
    b7g8: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e) {
            var t = i(e).getFullYear();
            return t % 400 == 0 || t % 4 == 0 && t % 100 != 0
        }
    },
    balU: function(e, t, n) {
        var i = n("xA5w"),
            r = n("Mdww");
        e.exports = function(e, t) {
            var n = i(e),
                a = Number(t),
                o = n.getFullYear(),
                s = n.getDate(),
                l = new Date(0);
            l.setFullYear(o, a, 15), l.setHours(0, 0, 0, 0);
            var c = r(l);
            return n.setMonth(a, Math.min(s, c)), n
        }
    },
    bbdo: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e) {
            var t = i(e);
            return t.setMinutes(59, 59, 999), t
        }
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
    "cA+x": function(e, t, n) {
        var i = n("Jvcu");
        e.exports = function(e, t) {
            var n = Number(t);
            return i(e, -n)
        }
    },
    cAee: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        }), t.c = function e(t, n, i) {
            return r.__awaiter(this, void 0, void 0, function() {
                var l, d, u, p;
                return r.__generator(this, function(r) {
                    switch (r.label) {
                        case 0:
                            return r.trys.push([0, 2, , 3]), [4, i.query({
                                query: c,
                                variables: {
                                    videoID: t.id
                                }
                            })];
                        case 1:
                            return l = r.sent().data, d = function(e, t) {
                                return {
                                    id: e.id,
                                    owner: t.owner,
                                    broadcastType: t.broadcastType,
                                    game: t.game
                                }
                            }(t, l.video), u = {
                                channel: d.owner ? d.owner.login : null,
                                channel_id: Number(t.owner.id),
                                game: d.game ? d.game.name : null,
                                partner: !!d.owner && d.owner.roles.isPartner,
                                location: n.location,
                                share_context: n.collectionID ? o.ShareItemContext.Collection : null,
                                share_platform: n.platform,
                                shared_item_id: n.collectionID ? n.collectionID : d.id,
                                shared_item_type: n.collectionID ? o.ShareItemType.Collection : Object(s.a)(d.broadcastType),
                                shared_item_url: n.shareURL,
                                source_item_id: d.id,
                                source_item_type: Object(s.a)(d.broadcastType)
                            }, a.o.tracking.track(o.SpadeEventType.ShareItem, u), [3, 3];
                        case 2:
                            return p = r.sent(), a.j.error(p.toString(), e.name), [3, 3];
                        case 3:
                            return [2]
                    }
                })
            })
        }, t.b = function e(t, n, i) {
            return r.__awaiter(this, void 0, void 0, function() {
                var s, c, d;
                return r.__generator(this, function(r) {
                    switch (r.label) {
                        case 0:
                            return r.trys.push([0, 2, , 3]), [4, i.query({
                                query: l,
                                variables: {
                                    creatorID: t.owner.id
                                }
                            })];
                        case 1:
                            return s = r.sent().data, c = {
                                channel: s.user ? s.user.login : null,
                                channel_id: Number(t.owner.id),
                                game: null,
                                partner: !!s.user && s.user.roles.isPartner,
                                location: n.location,
                                share_context: null,
                                share_platform: n.platform,
                                shared_item_id: t.id,
                                shared_item_type: o.ShareItemType.Collection,
                                shared_item_url: n.shareURL,
                                source_item_id: t.id,
                                source_item_type: o.SourceItemType.Collection
                            }, a.o.tracking.track(o.SpadeEventType.ShareItem, c), [3, 3];
                        case 2:
                            return d = r.sent(), a.j.error(d.toString(), e.name), [3, 3];
                        case 3:
                            return [2]
                    }
                })
            })
        };
        var i, r = n("TToO"),
            a = n("6sO2"),
            o = n("vH/s"),
            s = n("xrVp"),
            l = n("mvQ0"),
            c = (n.n(l), n("164Z"));
        n.n(c);
        ! function(e) {
            e.Copy = "link", e.Embed = "option_embed", e.Facebook = "fb", e.Link = "option_link", e.Reddit = "reddit", e.Twitter = "twitter", e.Unknown = "", e.VKontakte = "vk", e.Download = "download"
        }(i || (i = {}))
    },
    cONr: function(e, t, n) {
        var i = n("f+sD");
        e.exports = function(e) {
            return i(new Date, e)
        }
    },
    cPfx: function(e, t) {},
    cSst: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            r = n("GiK3"),
            a = n("F8kA"),
            o = n("Odds"),
            s = function(e) {
                return r.createElement(o._8, {
                    margin: {
                        right: 1
                    },
                    display: o.R.Flex,
                    alignItems: o.c.Center
                }, r.createElement(o._52, {
                    align: o._53.Left,
                    label: e.tooltip,
                    direction: o._54.Bottom
                }, r.createElement(o._8, {
                    margin: {
                        right: .5
                    }
                }, r.createElement(o._35, {
                    display: o.R.Flex,
                    alignItems: o.c.Center,
                    color: o.K.Alt2
                }, r.createElement(o._24, {
                    asset: e.svgAsset,
                    width: 18,
                    height: 18
                }))), r.createElement(o.Q, {
                    fontSize: o.V.Size5,
                    ellipsis: !0
                }, r.createElement(a.a, i.__assign({
                    to: e.linkTo
                }, Object(o._63)(e), {
                    target: e.target
                }), e.title))))
            };
        n.d(t, "a", function() {
            return s
        })
    },
    cw9o: function(e, t, n) {
        var i = n("7EGB");
        e.exports = function(e, t) {
            var n = Number(t);
            return i(e, -n)
        }
    },
    cwv1: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e) {
            return i(e).getTime()
        }
    },
    dH3X: function(e, t, n) {
        var i = n("607n");
        e.exports = function(e) {
            if (i(e)) return !isNaN(e);
            throw new TypeError(toString.call(e) + " is not an instance of Date")
        }
    },
    danj: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e, t) {
            var n = i(e),
                r = Number(t);
            return n.setMinutes(r), n
        }
    },
    dc2a: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            if (!e || 0 === e.edges.length) return [];
            var t = [];
            return e.edges.forEach(function(e) {
                e.node.id && t.push(e.node)
            }), t
        }
    },
    "e/EH": function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e) {
            return 3 === i(e).getDay()
        }
    },
    eCZG: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e) {
            return i(e).getTime() < (new Date).getTime()
        }
    },
    eKpK: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e) {
            return i(e).getSeconds()
        }
    },
    ea7N: function(e, t) {},
    ebTC: function(e, t, n) {
        "use strict";
        var i = n("RH2O"),
            r = n("2KeS"),
            a = n("V5M+"),
            o = n("Aj/L"),
            s = n("TToO"),
            l = n("GiK3"),
            c = n("6sO2"),
            d = n("J8WN"),
            u = n("+8VM"),
            p = n("7vx8"),
            m = n("HZww"),
            h = n("4Q9N"),
            g = n("Tt3k"),
            f = n("W6ca"),
            v = n("xgnX"),
            b = n("CSlQ"),
            k = n("Odds"),
            y = (n("+Aaf"), n("0H+u")),
            _ = ["image/*"],
            S = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        statusMessage: null,
                        imageUpdated: !1,
                        loading: !1
                    }, t.currentImage = null, t.logger = c.j.withCategory("UserImageUploader"), t.onImageInputChange = function(e) {
                        var n;
                        if (null !== e) {
                            t.setState({
                                loading: !0
                            }), n = e[0];
                            var i = Object(g.a)(n),
                                r = (n.size / 1024 / 1024).toFixed(4);
                            parseInt(r, 10) > 10 ? t.setState({
                                statusMessage: v.b.BadSizeError
                            }) : Object(g.b)(n, function(e) {
                                return s.__awaiter(t, void 0, void 0, function() {
                                    var t, n, r, a, o = this;
                                    return s.__generator(this, function(s) {
                                        switch (s.label) {
                                            case 0:
                                                this.currentImage = e, s.label = 1;
                                            case 1:
                                                return s.trys.push([1, 3, , 4]), [4, Object(f.a)(this.props.userID, this.props.authToken, this.props.imageType, i)];
                                            case 2:
                                                return t = s.sent(), n = t.upload_url, r = t.upload_id, [3, 4];
                                            case 3:
                                                return a = s.sent(), this.logger.error(a, "Request for upload ID failed to get expected response from server."), this.setState({
                                                    statusMessage: v.b.UnexpectedError
                                                }), [2];
                                            case 4:
                                                return this.unsubscribe = c.k.subscribe({
                                                    topic: Object(m.i)(this.props.userID),
                                                    success: function() {
                                                        try {
                                                            Object(f.c)(n, o.currentImage)
                                                        } catch (e) {
                                                            o.logger.error(e, "Image upload failed."), o.unsubscribe(), o.setState({
                                                                statusMessage: v.b.UnexpectedError,
                                                                loading: !1
                                                            })
                                                        }
                                                        o.timeoutHandle = setTimeout(function() {
                                                            return o.handlePubSubTimeout()
                                                        }, 1e4)
                                                    },
                                                    failure: function() {
                                                        o.setState({
                                                            statusMessage: v.b.UnexpectedError,
                                                            loading: !1
                                                        })
                                                    },
                                                    onMessage: function(e) {
                                                        if (e.upload_id === r) {
                                                            clearTimeout(o.timeoutHandle);
                                                            var t = null;
                                                            e.status === v.a.Success ? t = v.b.Success : e.status === v.a.BadSize ? (t = v.b.BadSizeError, o.currentImage = null) : e.status === v.a.NonImage ? (t = v.b.NonImageError, o.currentImage = null) : e.status === v.a.WrongFormat ? (t = v.b.WrongFormatError, o.currentImage = null) : (t = v.b.UnexpectedError, o.currentImage = null), o.unsubscribe && o.unsubscribe(), o.setState({
                                                                statusMessage: t,
                                                                loading: !1,
                                                                imageUpdated: e.status === v.a.Success
                                                            })
                                                        }
                                                    }
                                                }), [2]
                                        }
                                    })
                                })
                            })
                        } else t.setState({
                            statusMessage: v.b.ImageNotSelected
                        })
                    }, t.handlePubSubTimeout = function() {
                        t.unsubscribe(), t.setState({
                            statusMessage: v.b.TimeoutError
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
                    var t = Object(c.d)("Editing profile banner for {userName}", {
                        userName: e
                    }, "UserImageUploader");
                    this.props.imageType === h.a.ChannelOfflineImage && (t = Object(c.d)("Editing video banner for {userName}", {
                        userName: e
                    }, "UserImageUploader"));
                    var n = null;
                    if (this.state.loading) n = l.createElement(k._8, {
                        className: "user-image-uploader__upload-svg--anim-fill",
                        position: k._15.Relative,
                        "data-test-selector": "loading-status"
                    }, l.createElement(k._24, {
                        asset: k._25.Upload,
                        type: k._26.Brand,
                        width: 99,
                        height: 76
                    }));
                    else {
                        var i = Object(c.d)("Recommended image size: 1200x380 and less than 10MB.", "UserImageUploader");
                        this.props.imageType === h.a.ChannelOfflineImage && (i = Object(c.d)("Recommended image size: 1920x1080 and less than 10MB.", "UserImageUploader")), n = l.createElement(k._8, null, l.createElement(k._8, {
                            className: "user-image-uploader__upload-info"
                        }, l.createElement(k._8, null, l.createElement(k._24, {
                            asset: k._25.Plus,
                            type: k._26.Alt2,
                            height: 20,
                            width: 20
                        })), l.createElement(k.Q, {
                            type: k._49.H3,
                            color: k.K.Alt2,
                            fontSize: k.V.Size4
                        }, Object(c.d)("Upload a Photo", "User Image Uploader"))), l.createElement(k._8, {
                            className: "user-image-uploader__upload-recommendation",
                            position: k._15.Absolute,
                            textAlign: k._45.Left,
                            attachLeft: !0,
                            attachBottom: !0,
                            margin: {
                                left: 3,
                                bottom: 1
                            }
                        }, l.createElement(k.Q, {
                            type: k._49.H6,
                            color: k.K.Alt2,
                            fontSize: k.V.Size8,
                            align: k._59.TextBottom
                        }, i)))
                    }
                    var r = null;
                    this.props.showCloser && (r = l.createElement(u.a, null));
                    var a = null;
                    if (null !== this.state.statusMessage) {
                        var o = Object(v.c)(this.state.statusMessage);
                        a = l.createElement(k._12, {
                            label: o.message,
                            type: o.type
                        })
                    }
                    return l.createElement(k._8, {
                        className: "user-image-uploader",
                        position: k._15.Relative,
                        fullHeight: !0
                    }, l.createElement(k._35, {
                        className: "user-image-uploader__background-container",
                        background: k.n.Base,
                        fullWidth: !0
                    }, l.createElement(k._8, {
                        padding: 2,
                        display: k.R.InlineBlock,
                        position: k._15.Relative,
                        textAlign: k._45.Center,
                        fullWidth: !0
                    }, l.createElement(k._35, {
                        borderBottom: !0,
                        margin: {
                            bottom: 2
                        }
                    }, l.createElement(k.Q, {
                        type: k._49.H3,
                        fontSize: k.V.Size4
                    }, t)), l.createElement(k._8, {
                        className: "user-image-uploader__upload-container",
                        display: k.R.InlineBlock,
                        position: k._15.Relative,
                        textAlign: k._45.Center,
                        margin: {
                            bottom: 1
                        }
                    }, l.createElement(k._8, {
                        className: "user-image-uploader__upload",
                        display: k.R.InlineBlock,
                        position: k._15.Relative,
                        textAlign: k._45.Center
                    }, l.createElement(d.a, {
                        allowedFileTypes: _,
                        onFilesSubmitted: this.onImageInputChange
                    }, n))), l.createElement(k._35, {
                        "data-test-selector": "status-message",
                        fontSize: k.V.Size4,
                        position: k._15.Relative,
                        textAlign: k._45.Center,
                        className: "user-image-uploader__status-message"
                    }, a))), r)
                }, t = s.__decorate([Object(p.a)(y, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.login
                            }
                        }
                    }
                })], t)
            }(l.Component),
            C = Object(b.d)("User Image Upload")(S);
        var w = Object(i.b)(function(e) {
            return {
                authToken: Object(o.a)(e)
            }
        }, function(e, t) {
            return Object(r.b)({
                closeModal: function() {
                    return t.successCallback && t.successCallback(), Object(a.c)()
                }
            }, e)
        })(C);
        n.d(t, "a", function() {
            return w
        })
    },
    eeM1: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "VideoWatchPage_Video"
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
                }, {
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
                            value: "useCollectionID"
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
                        directives: [{
                            kind: "Directive",
                            name: {
                                kind: "Name",
                                value: "skip"
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
                                        value: "useCollectionID"
                                    }
                                }
                            }]
                        }],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "videoWatchData"
                                },
                                directives: []
                            }]
                        }
                    }, {
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
                                        value: "useCollectionID"
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
                                            value: "totalCount"
                                        },
                                        arguments: [],
                                        directives: []
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
                                                                kind: "FragmentSpread",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "videoWatchData"
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
            }, {
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "videoWatchData"
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
                            value: "description"
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
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "scope"
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
                                value: "126"
                            }
                        }, {
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "height"
                            },
                            value: {
                                kind: "IntValue",
                                value: "71"
                            }
                        }],
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
                                        value: "138"
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "height"
                                    },
                                    value: {
                                        kind: "IntValue",
                                        value: "190"
                                    }
                                }],
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
                                    value: "chatSettings"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "rules"
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
                            value: "language"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "upvotes"
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
                                    value: "isUpvoted"
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
                end: 885
            }
        };
        n.loc.source = {
            body: "query VideoWatchPage_Video($videoID: ID $collectionID: ID! $useCollectionID: Boolean!) {\ncurrentUser {\nid\ndisplayName\n}\n# If the page specifies a video ID query it directly.\nvideo(id: $videoID options: { includePrivate: true }) @skip(if: $useCollectionID) {\n...videoWatchData\n}\n# If the page is a collection page grab the first video from the collection.\ncollection(id: $collectionID) @include(if: $useCollectionID) {\nid\nitems(first: 1) {\ntotalCount\nedges {\nnode {\n... on Video {\n...videoWatchData\n}\n}\n}\n}\nowner {\nid\nlogin\ndisplayName\n}\n}\n}\n# These are the fields used by the watch page.\nfragment videoWatchData on Video {\nid\nbroadcastType\ntitle\ndescription\nlengthSeconds\npublishedAt\nviewCount\nscope\npreviewThumbnailURL(width: 126 height: 71)\ngame {\nid\nboxArtURL(width: 138 height: 190)\nname\n}\nowner {\nid\ndisplayName\nlogin\nchatSettings {\nrules\n}\n}\nlanguage\nupvotes\nself {\nisUpvoted\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "f+sD": function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e, t) {
            var n = i(e),
                r = i(t);
            return n.getFullYear() === r.getFullYear() && n.getMonth() === r.getMonth()
        }
    },
    f4ga: function(e, t, n) {
        var i = n("WNGz");
        e.exports = function(e, t) {
            var n = i(e),
                r = i(t);
            return n.getTime() === r.getTime()
        }
    },
    f6Cj: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            return Object(i.a)(r, {
                u: e
            })
        }, t.c = function(e, t) {
            return Object(i.a)(a, {
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
            r = "https://www.facebook.com/sharer/sharer.php",
            a = "https://www.twitter.com/share",
            o = "https://www.reddit.com/submit",
            s = "https://vk.com/share.php"
    },
    fK0I: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e, t) {
            var n = i(e),
                r = i(t);
            return n.getTime() > r.getTime()
        }
    },
    fKKh: function(e, t) {},
    fTsm: function(e, t, n) {
        "use strict";
        var i = n("RH2O"),
            r = n("2KeS"),
            a = n("7enT"),
            o = n("TToO"),
            s = n("HW6M"),
            l = n("knr3"),
            c = n("GiK3"),
            d = n("Odds"),
            u = (n("fKKh"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.toggleTheatreMode = function() {
                        t.props.theatreModeEnabled ? t.props.onTheatreModeDisabled() : t.props.onTheatreModeEnabled()
                    }, t.disableTheatreMode = function() {
                        t.props.theatreModeEnabled && t.props.onTheatreModeDisabled()
                    }, t
                }
                return o.__extends(t, e), t.prototype.componentDidMount = function() {
                    l.bind("alt+t", this.toggleTheatreMode), l.bind("esc", this.disableTheatreMode)
                }, t.prototype.componentWillUnmount = function() {
                    l.unbind("alt+t"), l.unbind("esc")
                }, t.prototype.render = function() {
                    var e = s("channel-page__video-player", {
                        "channel-page__video-player--theatre-mode": this.props.theatreModeEnabled || !1
                    });
                    return c.createElement(d._8, {
                        className: e,
                        flexWrap: d.U.NoWrap,
                        fullHeight: this.props.theatreModeEnabled,
                        fullWidth: !this.props.rightColumnExpanded,
                        position: this.props.theatreModeEnabled ? d._15.Fixed : d._15.Relative
                    }, c.createElement(d.k, null, this.props.children))
                }, t
            }(c.Component));
        n.d(t, "a", function() {
            return p
        });
        var p = Object(i.b)(function(e) {
            return {
                theatreModeEnabled: e.ui.theatreModeEnabled,
                rightColumnExpanded: e.ui.rightColumnExpanded
            }
        }, function(e) {
            return Object(r.b)({
                onTheatreModeDisabled: a.t,
                onTheatreModeEnabled: a.v
            }, e)
        })(u)
    },
    fUo1: function(e, t, n) {
        var i = n("iRXW"),
            r = n("7EGB"),
            a = 6048e5;
        e.exports = function(e) {
            var t = i(e),
                n = i(r(t, 60)).valueOf() - t.valueOf();
            return Math.round(n / a)
        }
    },
    fo7E: function(e, t, n) {
        var i = n("w4by");
        e.exports = function(e, t) {
            var n = Number(t);
            return i(e, -n)
        }
    },
    g7wA: function(e, t, n) {
        "use strict";
        t.e = function(e) {
            var t = null,
                n = e.reduce(function(n, r, o) {
                    switch (r.type) {
                        case m.a.Text:
                            return n.concat(i.createElement("span", {
                                key: "chat-line__message-text-" + o,
                                "data-a-target": "chat-message-text"
                            }, r.content));
                        case m.a.CurrentUserHighlight:
                            return n.concat(i.createElement(d.a, {
                                isAtMention: !1,
                                isCurrentUserRecipient: !0,
                                recipient: r.content,
                                key: o
                            }));
                        case m.a.Mention:
                            return n.concat(i.createElement(d.a, {
                                isAtMention: !0,
                                isCurrentUserRecipient: r.content.isCurrentUserRecipient,
                                recipient: r.content.recipient,
                                key: o
                            }));
                        case m.a.Link:
                            return n = n.concat(h(o, r)), o < e.length - 1 && e[o + 1].type === m.a.Link && n.push(" "), n;
                        case m.a.Emote:
                            return n = n.concat(i.createElement(l.a, {
                                key: o,
                                emote: r.content
                            })), o < e.length - 1 && e[o + 1].type === m.a.Emote && n.push(" "), n;
                        case m.a.ClipLink:
                            return t ? n.concat(h(o, r)) : (t = i.createElement(a.a, {
                                key: o
                            }, i.createElement(c.a, {
                                slug: r.content.slug
                            })), n);
                        case m.a.VideoLink:
                            return t ? n.concat(h(o, r)) : (t = i.createElement(u.a, {
                                key: o,
                                id: r.content.id,
                                url: r.content.url
                            }), n);
                        default:
                            return n.concat(i.createElement("span", {
                                key: o
                            }))
                    }
                }, []);
            t && (n = n.concat(t));
            return n
        }, t.f = function(e) {
            if (e.moderationType === p.e.Ban) return e.reason ? i.createElement("span", {
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
                var t = Object(r.d)("{userLogin} has been timed out for {duration} seconds. Reason: {reason}", {
                    duration: e.duration,
                    reason: e.reason,
                    userLogin: e.userLogin
                }, "ChatLine");
                return i.createElement("span", {
                    className: "chat-line__moderation--timeout-with-reason"
                }, t)
            }
            if (e.duration) return i.createElement("span", {
                className: "chat-line__moderation--timeout"
            }, Object(r.d)("{userLogin} has been timed out for {duration} seconds.", {
                userLogin: e.userLogin,
                duration: e.duration
            }, "ChatLine"))
        }, t.b = function(e) {
            var t = e.daysLeft;
            0 === t && (t = e.hoursLeft);
            var n = {
                bitsTotal: i.createElement("strong", null, Object(s.e)(e.total, {
                    style: "currency",
                    currency: "USD"
                })),
                charityName: i.createElement("strong", null, e.charityName),
                learnMoreURL: i.createElement("a", {
                    href: e.learnMore,
                    target: "_blank"
                }, e.learnMore),
                hashtag: i.createElement("strong", null, e.hashtag),
                timeRemaining: Object(s.e)(t)
            };
            return i.createElement("span", null, 0 === e.daysLeft ? (a = n, Object(r.d)("{bitsTotal} total raised so far for {charityName}! {timeRemaining} more hours to show support. Cheer and include {hashtag}. Learn More at {learnMoreURL}", {
                bitsTotal: a.bitsTotal,
                charityName: a.charityName,
                timeRemaining: a.timeRemaining,
                hashtag: a.hashtag,
                learnMoreURL: a.learnMoreURL
            }, "ChatLine")) : function(e) {
                return Object(r.d)("{bitsTotal} total raised so far for {charityName}! {timeRemaining} more days to show support. Cheer and include {hashtag}. Learn More at {learnMoreURL}", {
                    bitsTotal: e.bitsTotal,
                    charityName: e.charityName,
                    timeRemaining: e.timeRemaining,
                    hashtag: e.hashtag,
                    learnMoreURL: e.learnMoreURL
                }, "ChatLine")
            }(n));
            var a
        }, t.h = function(e) {
            var t = e.enabled ? Object(r.d)("This room is now in slow mode. You may send messages every {length} seconds.", {
                length: e.length
            }, "ChatLine") : Object(r.d)("This room is no longer in slow mode.", "ChatLine");
            return i.createElement("span", null, t)
        }, t.g = function(e) {
            var t;
            if (e.length > 0) {
                var n = e.join(", ");
                t = Object(r.d)("The moderators of this channel are: {moderatorList}", {
                    moderatorList: n
                }, "ChatLine")
            } else t = Object(r.d)("There are no moderators of this channel.", "ChatLine");
            return i.createElement("span", null, t)
        }, t.d = function(e) {
            if (e.enabled) {
                var t = 0 === e.length ? Object(r.d)("This room is in followers-only mode.", "ChatLine") : Object(r.d)("This room is now in {length} followers-only mode.", {
                    length: Object(o.b)(60 * e.length)
                }, "ChatLine");
                return i.createElement("span", null, t)
            }
            return i.createElement("span", null, Object(r.d)("This room is no longer in followers-only mode.", "ChatLine"))
        }, t.c = function(e) {
            return e.enabled ? i.createElement("span", null, Object(r.d)("This room is now in emote-only mode.", "ChatLine")) : i.createElement("span", null, Object(r.d)("This room is no longer in emote-only mode.", "ChatLine"))
        }, t.i = function(e) {
            var t = e.enabled ? Object(r.d)("This room is now in subscriber-only mode.", "ChatLine") : Object(r.d)("This room is no longer in subscriber-only mode.", "ChatLine");
            return i.createElement("span", null, t)
        }, t.a = g, t.j = function(e) {
            return i.createElement("span", {
                key: "timestamp",
                className: "chat-line__timestamp",
                "data-a-target": "chat-timestamp",
                "data-test-selector": "chat-timestamp"
            }, g(new Date(e)))
        }, t.k = function(e) {
            return i.createElement("span", {
                key: "timestamp",
                className: "chat-line__timestamp",
                "data-a-target": "chat-timestamp",
                "data-test-selector": "chat-timestamp"
            }, function(e, t) {
                void 0 === t && (t = {});
                var n = r.o.intl.getLanguageCode() || "en";
                return Intl.DateTimeFormat(n, t).format(e)
            }(new Date(e), {
                hour: "numeric",
                minute: "numeric"
            }))
        };
        var i = n("GiK3"),
            r = (n.n(i), n("6sO2")),
            a = n("o5l+"),
            o = n("FsFC"),
            s = n("J4ib"),
            l = n("hXeO"),
            c = n("5vPJ"),
            d = n("L8zk"),
            u = n("kBA+"),
            p = n("qkCi"),
            m = n("mwvJ");

        function h(e, t) {
            return i.createElement("a", {
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
                i = n.toString();
            return n < 10 && (i = "0" + i), t + ":" + i
        }
    },
    gAt4: function(e, t, n) {
        var i = n("xA5w"),
            r = n("nizW"),
            a = n("NKE6");
        e.exports = function(e, t) {
            var n = i(e),
                o = i(t),
                s = a(n, o),
                l = Math.abs(r(n, o));
            return n.setDate(n.getDate() - s * l), s * (l - (a(n, o) === -s))
        }
    },
    gDPd: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e, t) {
            var n = i(e),
                r = i(t);
            return n.getTime() < r.getTime()
        }
    },
    gGMi: function(e, t, n) {
        "use strict";
        var i;
        n.d(t, "b", function() {
                return i
            }), n.d(t, "a", function() {
                return a
            }),
            function(e) {
                e.Everyone = "EVERYONE", e.Moderator = "MODERATOR", e.Subscriber = "SUBSCRIBER"
            }(i || (i = {}));
        var r, a = ((r = {})[i.Everyone] = "Everyone", r[i.Moderator] = "Mods", r[i.Subscriber] = "Subs", r)
    },
    gUEJ: function(e, t) {
        e.exports = function() {
            var e = new Date,
                t = e.getFullYear(),
                n = e.getMonth(),
                i = e.getDate(),
                r = new Date(0);
            return r.setFullYear(t, n, i + 1), r.setHours(0, 0, 0, 0), r
        }
    },
    hUHO: function(e, t, n) {
        var i = n("4LxA");
        e.exports = function(e) {
            return i(new Date, e)
        }
    },
    hXeO: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        });
        var i = n("GiK3"),
            r = (n.n(i), n("8RKZ")),
            a = function(e) {
                var t, n = e.emote,
                    a = n.alt || "";
                return n.cheerAmount && (a += " " + n.cheerAmount.toString(), t = i.createElement("strong", {
                    className: "chat-line__message--cheer-amount",
                    style: {
                        color: n.cheerColor
                    }
                }, n.cheerAmount)), i.createElement(r.a, {
                    alt: a,
                    cheerText: t,
                    className: "chat-line__message--emote",
                    srcKey: "1x",
                    srcSet: n.images
                })
            }
    },
    hico: function(e, t, n) {
        var i = n("zZbG"),
            r = n("3znZ");
        e.exports = function(e) {
            var t = i(e),
                n = new Date(0);
            n.setFullYear(t + 1, 0, 4), n.setHours(0, 0, 0, 0);
            var a = r(n);
            return a.setDate(a.getDate() - 1), a
        }
    },
    hj5Y: function(e, t, n) {
        var i = n("5qwL");
        e.exports = function(e) {
            return i(new Date, e)
        }
    },
    iRXW: function(e, t, n) {
        var i = n("zZbG"),
            r = n("3znZ");
        e.exports = function(e) {
            var t = i(e),
                n = new Date(0);
            return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), r(n)
        }
    },
    jOt7: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ShareVideo_Content"
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
                            value: "hasVideo"
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
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "hasCollection"
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
                                        value: "hasVideo"
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
                                        value: "hasCollection"
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
                end: 451
            }
        };
        n.loc.source = {
            body: "query ShareVideo_Content($videoID: ID! $collectionID: ID! $hasVideo: Boolean! $hasCollection: Boolean!) {\n# If the page specifies a video ID query it directly.\nvideo(id: $videoID options: { includePrivate: true }) @include(if: $hasVideo) {\nid\nowner {\nid\ndisplayName\n}\ntitle\n}\n# If the page is a collection page grab the first video from the collection.\ncollection(id: $collectionID) @include(if: $hasCollection) {\nid\nowner {\nid\ndisplayName\n}\ntitle\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
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
    jQas: function(e, t, n) {
        var i = n("SJLv");
        e.exports = function() {
            var e = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                t = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                n = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                r = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                a = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                o = ["AM", "PM"],
                s = ["am", "pm"],
                l = ["a.m.", "p.m."],
                c = {
                    MMM: function(t) {
                        return e[t.getMonth()]
                    },
                    MMMM: function(e) {
                        return t[e.getMonth()]
                    },
                    dd: function(e) {
                        return n[e.getDay()]
                    },
                    ddd: function(e) {
                        return r[e.getDay()]
                    },
                    dddd: function(e) {
                        return a[e.getDay()]
                    },
                    A: function(e) {
                        return e.getHours() / 12 >= 1 ? o[1] : o[0]
                    },
                    a: function(e) {
                        return e.getHours() / 12 >= 1 ? s[1] : s[0]
                    },
                    aa: function(e) {
                        return e.getHours() / 12 >= 1 ? l[1] : l[0]
                    }
                };
            return ["M", "D", "DDD", "d", "Q", "W"].forEach(function(e) {
                c[e + "o"] = function(t, n) {
                    return function(e) {
                        var t = e % 100;
                        if (t > 20 || t < 10) switch (t % 10) {
                            case 1:
                                return e + "st";
                            case 2:
                                return e + "nd";
                            case 3:
                                return e + "rd"
                        }
                        return e + "th"
                    }(n[e](t))
                }
            }), {
                formatters: c,
                formattingTokensRegExp: i(c)
            }
        }
    },
    jcM9: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            r = n("3zLD"),
            a = n("6sO2"),
            o = n("zAjo"),
            s = n("sJBK"),
            l = n("jOt7");

        function c(e) {
            return e.owner && e.title ? {
                type: s.a.Video,
                id: e.id,
                owner: {
                    id: e.owner.id,
                    displayName: e.owner.displayName
                },
                title: e.title
            } : null
        }
        var d = Object(r.compose)(Object(r.graphql)(l, {
            options: function(e) {
                var t = e.content;
                return t ? {
                    variables: {
                        collectionID: t.collectionID || "",
                        hasCollection: !!t.collectionID,
                        hasVideo: !!t.videoID,
                        videoID: t.videoID || ""
                    }
                } : {
                    variables: {
                        collectionID: "",
                        hasCollection: !1,
                        hasVideo: !1,
                        videoID: ""
                    }
                }
            },
            props: function(e) {
                var t = i.__assign({}, e, {
                        content: void 0
                    }),
                    n = e.data;
                return n.loading ? t : n.error ? (a.j.error(n.error, "VideoShareBoxContainer"), t) : (n.collection ? t.content = function(e, t) {
                    var n;
                    if (t) {
                        var i = c(t);
                        if (!i) return null;
                        n = i
                    }
                    return e.owner && e.title ? {
                        type: s.a.Collection,
                        id: e.id,
                        owner: {
                            id: e.owner.id,
                            displayName: e.owner.displayName
                        },
                        title: e.title,
                        currentVideo: n
                    } : null
                }(n.collection, n.video) || void 0 : n.video && (t.content = c(n.video) || void 0), t)
            }
        }))(o.a);
        n.d(t, "a", function() {
            return d
        }), n.d(t, !1, function() {
            return s.a
        }), n.d(t, !1, function() {})
    },
    jpZi: function(e, t) {},
    jvcJ: function(e, t) {},
    jy2q: function(e, t, n) {
        var i = n("xA5w"),
            r = n("balU");
        e.exports = function(e, t) {
            var n = i(e),
                a = Number(t) - (Math.floor(n.getMonth() / 3) + 1);
            return r(n, n.getMonth() + 3 * a)
        }
    },
    k2hM: function(e, t) {},
    "kBA+": function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            r = n("GiK3"),
            a = n("6sO2"),
            o = n("7vx8"),
            s = n("SZoP"),
            l = n("GxDs"),
            c = n("Odds"),
            d = n("s+oZ"),
            u = {
                ERROR: "video-chat-card-error"
            },
            p = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.data,
                        t = e.video,
                        n = e.error,
                        i = e.loading;
                    if (n || t && !t.owner) return r.createElement(l.a, {
                        error: {
                            title: Object(a.d)("Something went wrong", "VideoChatCard"),
                            description: Object(a.d)("We couldn't find that video", "VideoChatCard")
                        }
                    });
                    if (i || !t) return r.createElement(l.a, null);
                    var o = r.createElement(c.Q, null, Object(a.c)(new Date(t.publishedAt), "medium"), r.createElement("span", null, " · "), Object(s.a)(t.owner.login, t.owner.displayName));
                    return r.createElement(l.a, {
                        data: {
                            title: t.title,
                            description: o,
                            previewImageURL: t.previewThumbnailURL,
                            contentURL: this.props.url
                        }
                    })
                }, t
            }(r.Component),
            m = function(e) {
                return {
                    variables: {
                        videoID: e.id
                    },
                    notifyOnNetworkStatusChange: !0,
                    fetchPolicy: "cache-first"
                }
            },
            h = Object(o.a)(d, {
                options: m
            })(p);
        n.d(t, !1, function() {
            return "https://static-cdn.jtvnw.net/emoticons/v1/58765/2.0"
        }), n.d(t, !1, function() {
            return u
        }), n.d(t, !1, function() {
            return p
        }), n.d(t, !1, function() {
            return m
        }), n.d(t, "a", function() {
            return h
        })
    },
    kDuD: function(e, t, n) {
        var i = n("xA5w"),
            r = n("MIQa"),
            a = n("xKy+");
        e.exports = function(e) {
            var t = i(e);
            return r(t).getTime() === a(t).getTime()
        }
    },
    kIFi: function(e, t, n) {
        var i = n("NSOL");
        e.exports = function(e, t) {
            var n = Number(t);
            return i(e, -n)
        }
    },
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
    kRs6: function(e, t, n) {
        var i = n("Qxz6");
        e.exports = function(e) {
            return i(new Date, e)
        }
    },
    kjlQ: function(e, t, n) {
        var i = n("G7No"),
            r = 36e5;
        e.exports = function(e, t) {
            var n = i(e, t) / r;
            return n > 0 ? Math.floor(n) : Math.ceil(n)
        }
    },
    kkVd: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e) {
            return 1 === i(e).getDay()
        }
    },
    l85J: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e) {
            return i(e).getMonth()
        }
    },
    lQzg: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e) {
            var t = i(e);
            return Math.floor(t.getMonth() / 3) + 1
        }
    },
    m9YJ: function(e, t, n) {
        "use strict";
        n("R9op");
        var i = n("2KeS"),
            r = n("6sO2"),
            a = n("TToO"),
            o = "vodChat.channel-moderation-comments.RESULTS_RECEIVED",
            s = "vodChat.channel-moderation-comments.RESULTS_FAILED",
            l = "vodChat.channel-moderation-comments.BAN_SUCCESS",
            c = "vodChat.channel-moderation-comments.SEARCH_SUCCESS",
            d = "vodChat.comments.DELETED_SUCCESS",
            u = "vodChat.comments.CREATED_SUCCESS",
            p = "vodChat.comments.CREATE_FAILED",
            m = function(e) {
                return {
                    type: p,
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
            y = "vodChat.comments.CLEARED",
            _ = function() {
                return {
                    type: y
                }
            },
            S = "vodChat.comments.COOLDOWN_ENDED",
            C = "vodChat.comments.SYNC_ENABLED",
            w = function() {
                return {
                    type: C
                }
            },
            E = "vodChat.comments.SYNC_DISABLED",
            O = function() {
                return {
                    type: E
                }
            },
            D = "vodChat.comments.REPLAY_FILTER_CHANGED",
            T = function(e) {
                return r.l.set("videoChat.is_replay_mode", e), {
                    type: D,
                    isReplayFilterOn: e
                }
            },
            N = "vodChat.comments.CHAT_REPLAY_ERROR_HIDE",
            I = function() {
                return {
                    type: N
                }
            },
            x = "vodChat.comments.TIMESTAMP_MODE_CHANGED",
            M = function(e) {
                return r.l.set("videoChat.hide_timestamps", e), {
                    type: x,
                    hideTimestamps: e
                }
            },
            R = "vodChat.comments.REQUEST_CHAT_SETTINGS",
            L = function() {
                return {
                    type: R,
                    isReplayFilterOn: r.l.get("videoChat.is_replay_mode", !1),
                    hideTimestamps: r.l.get("videoChat.hide_timestamps", !1)
                }
            },
            A = function(e) {
                return a.__assign({
                    searchHits: [],
                    videos: {}
                }, e)
            };
        var F = "vodChat.video.CURRENT_VIDEO_CHANGED",
            V = "vodChat.video.CURRENT_VIDEO_TIME_CHANGED",
            U = function(e) {
                return {
                    type: F,
                    id: e
                }
            },
            j = function(e) {
                return {
                    type: V,
                    updatedTime: e
                }
            },
            P = "video",
            H = "current",
            B = "",
            W = function(e) {
                return "" !== e.parentId
            },
            z = Number.MAX_VALUE,
            G = Number.MIN_VALUE,
            q = function(e) {
                return a.__assign({
                    commentCount: 0,
                    maxOffset: G,
                    minOffset: z,
                    parentComments: {},
                    offsets: {},
                    replies: {}
                }, e)
            },
            K = function(e, t) {
                var n = X(e);
                return t.forEach(function(e) {
                    var t, i = e.id,
                        r = e.contentOffset,
                        o = e.parentId;
                    if ("" === o) {
                        n.minOffset = Math.min(n.minOffset, r), n.maxOffset = Math.max(n.maxOffset, r), n.parentComments = a.__assign({}, n.parentComments, ((t = {})[i] = e, t));
                        var s = n.offsets[r];
                        Array.isArray(s) ? s.includes(i) || (n.offsets[r] = s.concat(i), n.commentCount++) : (n.offsets[r] = [i], n.commentCount++)
                    } else {
                        var l = n.replies[o];
                        if (Array.isArray(l)) {
                            var c = l.findIndex(function(t) {
                                return t.id === e.id
                            }); - 1 !== c ? l[c] = e : (n.replies[o] = l.concat(e), n.commentCount++)
                        } else n.replies[o] = [e], n.commentCount++
                    }
                }), n
            },
            Y = function(e, t) {
                if (t in e.parentComments) return e.parentComments[t]
            },
            Q = function(e, t) {
                var n = X(e);
                return W(t) ? ne(n, t.parentId, t.id) : te(n, t.id)
            },
            J = function(e, t) {
                if (e.commentCount < t || Z(e)) return e;
                for (var n = e; n.commentCount > t && !Z(e);) n = ie(n, n.minOffset);
                return n
            },
            $ = function(e, t) {
                var n = X(e);
                return Object.keys(e.parentComments).forEach(function(i) {
                    var r = e.parentComments[i];
                    t(r) || (n = te(n, r.id))
                }), Object.keys(e.replies).forEach(function(i) {
                    e.replies[i].forEach(function(e) {
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
                    parentComments: a.__assign({}, e.parentComments),
                    replies: a.__assign({}, e.replies)
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
                    i = e.offsets[n],
                    r = [];
                if (i && (r = i.filter(function(e) {
                        return e !== t
                    })), e.offsets[n] = r, delete e.parentComments[t], e.commentCount--, t in e.replies) {
                    var a = e.replies[t].length;
                    delete e.replies[t], e.commentCount -= a
                }
                return e
            },
            ne = function(e, t, n) {
                if (!(t in e.replies)) return e;
                var i = e.replies[t].length,
                    r = e.replies[t].filter(function(e) {
                        if (e.id !== n) return e
                    });
                e.replies[t] = r, 0 === r.length && delete e.replies[t];
                var a = i - r.length;
                return e.commentCount -= a, e
            },
            ie = function(e, t) {
                return t >= e.minOffset && t <= e.maxOffset && !Z(e) ? (t in e.offsets && e.offsets[t].forEach(function(t) {
                    e = te(e, t)
                }), delete e.offsets[t], e.maxOffset === t ? e.maxOffset-- : e.minOffset === t && e.minOffset++, e) : e
            },
            re = function() {
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
            ae = n("J4ib");

        function oe() {
            return {
                messageCreatedTooQuickError: Object(ae.d)("Your message was not sent because you are sending messages too quickly.", "format-error-messages"),
                chatReplayFilterError: Object(ae.d)("Your message has been posted. However, other messages posted after the live stream are hidden.", "format-error-messages")
            }
        }
        var se = function(e) {
                return a.__assign({
                    comments: q(),
                    currentVideoTime: 0,
                    cursor: {
                        future: B,
                        past: B
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
            le = 150;
        var ce = {
            apiToken: "",
            deviceId: ""
        };
        var de = {
                users: {}
            },
            ue = function(e) {
                return a.__assign({
                    users: {}
                }, e)
            };

        function pe(e, t) {
            var n = t.reduce(function(e, t) {
                return e[t.id] = t, e
            }, {});
            return a.__assign({}, e, n)
        }
        var me = Object(i.c)({
            comments: function(e, t) {
                switch (void 0 === e && (e = se()), t.type) {
                    case u:
                        var n = a.__assign({}, t.comments[0], {
                            highlight: !0,
                            source: H
                        });
                        return a.__assign({}, e, {
                            comments: K(e.comments, [n]),
                            isPostCooldownActive: !0
                        });
                    case p:
                        return a.__assign({}, e, {
                            errorMessage: t.createError
                        });
                    case h:
                        return a.__assign({}, e, {
                            errorMessage: t.errorMessage
                        });
                    case v:
                        var i = t.comments[0].parentId,
                            r = e.cursor,
                            c = e.replyCursorMap,
                            m = t.comments.slice();
                        if ("" === i) r = t.cursor;
                        else if (c = a.__assign({}, e.replyCursorMap, ((T = {})[i] = t.cursor.future, T)), t.cursor.future === B) {
                            var g = Y(e.comments, i);
                            if (g) {
                                var _ = a.__assign({}, g, {
                                    moreReplies: !1
                                });
                                m.push(_)
                            }
                        }
                        var w = K(e.comments, m);
                        return e.isScrollingSynced && (w = J(w, le)), a.__assign({}, e, {
                            comments: w,
                            cursor: r,
                            hasLoadedData: !0,
                            replyCursorMap: c
                        });
                    case b:
                        return a.__assign({}, e, {
                            comments: K(q(), t.comments),
                            hasLoadedData: !0,
                            cursor: t.cursor,
                            replyCursorMap: {}
                        });
                    case k:
                        return a.__assign({}, e, {
                            hasLoadedData: !0
                        });
                    case o:
                        return a.__assign({}, e, {
                            comments: K(q(), t.comments),
                            cursor: t.cursor,
                            hasLoadedData: !0,
                            errorMessage: ""
                        });
                    case s:
                        return a.__assign({}, se(), {
                            hasLoadedData: !0,
                            errorMessage: t.error
                        });
                    case V:
                        return a.__assign({}, e, {
                            currentVideoTime: Math.floor(t.updatedTime)
                        });
                    case F:
                    case y:
                        return a.__assign({}, se());
                    case d:
                        return a.__assign({}, e, {
                            comments: Q(e.comments, t.comment)
                        });
                    case S:
                        var O = e.errorMessage;
                        return O === oe().messageCreatedTooQuickError && (O = ""), a.__assign({}, e, {
                            isPostCooldownActive: !1,
                            errorMessage: O
                        });
                    case E:
                        return a.__assign({}, e, {
                            isScrollingSynced: !1
                        });
                    case C:
                        return a.__assign({}, e, {
                            comments: J(e.comments, le),
                            isScrollingSynced: !0
                        });
                    case l:
                        return a.__assign({}, e, {
                            comments: $(e.comments, function(e) {
                                return e.commenter !== t.user
                            })
                        });
                    case f:
                        return a.__assign({}, e, {
                            comments: K(e.comments, t.comments)
                        });
                    case D:
                        return a.__assign({}, e, {
                            isReplayFilterOn: t.isReplayFilterOn
                        });
                    case N:
                        return a.__assign({}, e, {
                            hasDismissedChatReplayError: !0
                        });
                    case x:
                        return a.__assign({}, e, {
                            hideTimestamps: t.hideTimestamps
                        });
                    case R:
                        return a.__assign({}, e, {
                            isReplayFilterOn: t.isReplayFilterOn,
                            hideTimestamps: t.hideTimestamps
                        });
                    default:
                        return e
                }
                var T
            },
            config: function(e) {
                return void 0 === e && (e = ce), e
            },
            users: function(e, t) {
                switch (void 0 === e && (e = de), t.type) {
                    case v:
                    case b:
                    case o:
                    case u:
                        return {
                            users: pe(e.users, t.users)
                        };
                    case y:
                        return a.__assign({}, ue());
                    default:
                        return e
                }
            },
            moderation: function(e, t) {
                switch (void 0 === e && (e = A()), t.type) {
                    case o:
                        return a.__assign({}, e, {
                            videos: (n = e.videos, i = t.videos, r = i.reduce(function(e, t) {
                                return e[t.id] = t, e
                            }, {}), a.__assign({}, n, r))
                        });
                    case c:
                        return t.hits && t.hits.results.length > 0 ? a.__assign({}, e, {
                            searchHits: t.hits.results
                        }) : a.__assign({}, e, {
                            searchHits: []
                        });
                    case y:
                        return a.__assign({}, A());
                    default:
                        return e
                }
                var n, i, r
            }
        });
        r.o.store.registerReducer("vodChat", me);
        var he = n("OAwv"),
            ge = n("9u8h");
        var fe = n("iydZ"),
            ve = n("mwvJ"),
            be = n("l21v"),
            ke = function(e, t, n) {
                var i = e.body,
                    r = e.emoticons || [],
                    a = [];
                return a = 0 === r.length ? e.bits_spent ? a.concat(Object(fe.c)(i, n)) : a.concat(Object(be.c)(i, t, !1)) : function(e, t, n, i) {
                    var r, a = 0,
                        o = Array.from(t);
                    r = e.reduce(function(e, t) {
                        var n = t.begin,
                            i = t.end,
                            r = o.slice(a, n),
                            s = o.slice(n, i + 1);
                        return 0 !== r.length && (e = e.concat(Object(be.c)(r.join(""), "", !1))), e.push({
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
                        }), a = i + 1, e
                    }, []), a < t.length && (r = r.concat(Object(be.c)(o.slice(a).join(""), "", !1)));
                    if (!i) return r;
                    return r.reduce(function(e, t) {
                        return t.type === ve.a.Text ? e.concat(Object(fe.c)(t.content, n)) : (e.push(t), e)
                    }, [])
                }(r, i, n, void 0 !== e.bits_spent), {
                    id: "1",
                    isAction: e.is_action,
                    tokens: a,
                    userColor: e.user_color ? e.user_color : Object(be.b)(t)
                }
            };
        var ye = function() {
                return function(e) {
                    this.bio = e.bio, this.createdAt = e.createdAt, this.displayName = e.displayName, this.id = e.id, this.logo = e.logo, this.name = e.name, this.type = e.type, this.updatedAt = e.updatedAt
                }
            }(),
            _e = function(e) {
                return new ye({
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
        var Se = function(e, t) {
                var n = a.__assign({}, e, {
                    more_replies: t.moreReplies
                });
                return {
                    comments: [Oe.normalizeRecord(n, fe.a)],
                    users: [_e(e.commenter)]
                }
            },
            Ce = function(e, t) {
                var n = e.comments.map(function(e) {
                        return _e(e.commenter)
                    }),
                    i = {
                        past: B,
                        future: B
                    };
                return void 0 !== e._next && (i.future = e._next), void 0 !== e._prev && (i.past = e._prev), {
                    comments: e.comments.reduce(function(e, i) {
                        return i.replies && i.replies.map(function(e) {
                            n.push(_e(e.commenter))
                        }), e.concat(Oe.normalizeRecords(i, t))
                    }, []),
                    cursor: i,
                    users: n
                }
            },
            we = function(e) {
                var t = e.comments.map(function(e) {
                    return _e(e.commenter)
                });
                return {
                    comments: e.comments.map(function(e) {
                        return Oe.normalizeRecord(e, fe.a)
                    }),
                    cursor: {
                        future: e._next || B
                    },
                    users: t
                }
            };

        function Ee(e) {
            return e.reduce(function(e, t) {
                return e[t._id] = t.version, e
            }, {})
        }
        var Oe = {
                normalizeRecords: function(e, t) {
                    var n = [Oe.normalizeRecord(e, t)];
                    return Array.isArray(e.replies) && e.replies.forEach(function(e) {
                        n.push(De.normalizeRecord(e, t))
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
                        userBadges: Ee(e.message.user_badges || [])
                    }
                }
            },
            De = {
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
                        userBadges: Ee(e.message.user_badges || [])
                    }
                }
            },
            Te = "content_offset_seconds",
            Ne = "cursor",
            Ie = "comment_id";

        function xe(e) {
            return "/v5/videos/" + e + "/comments"
        }

        function Me(e) {
            return Re(e).toString() + "/replies"
        }

        function Re(e) {
            return "/v5/videos/comments/" + e
        }

        function Le(e) {
            var t;
            t = Fe(e) ? Me(e.parentId) : xe(e.contentId);
            var n, i = {
                body: Fe(n = e) ? {
                    message: n.message,
                    parent_id: n.parentId
                } : {
                    content_id: n.contentId,
                    content_offset_seconds: n.contentOffsetSeconds,
                    content_type: n.contentType,
                    message: n.message
                }
            };
            return ge.a.post(t, i)
        }

        function Ae(e) {
            try {
                if (function(e) {
                        return "commentID" in e
                    }(e)) return function(e) {
                    var t = {};
                    void 0 !== e.cursor && (t[Ne] = e.cursor);
                    var n = Me(e.commentID) + "?" + he.stringify(t);
                    return ge.a.getOrThrow(n).then(function(e) {
                        return we(e.body)
                    })
                }(e);
                var t = {};
                Ve(e) ? t[Ne] = e.cursor : Ue(e) && (t[Te] = "" + e.offset, void 0 !== e.highlightedMessageID && (t[Ie] = e.highlightedMessageID));
                var n = xe(e.videoID) + "?" + he.stringify(t);
                return ge.a.getOrThrow(n).then(function(t) {
                    return Ce(t.body, e.bitsConfig)
                })
            } catch (e) {
                return Promise.reject(e)
            }
        }

        function Fe(e) {
            return "parentId" in e
        }

        function Ve(e) {
            return "cursor" in e
        }

        function Ue(e) {
            return "offset" in e
        }
        var je = function(e, t) {
                var n = Ce(e, t),
                    i = e.comments.reduce(function(e, t) {
                        return void 0 === t.video ? e : e.concat([Pe(t.video)])
                    }, []);
                return Array.isArray(e.parents) && e.parents.forEach(function(e) {
                    n.comments.push(Oe.normalizeRecord(e, t)), n.users.push(_e(e.commenter))
                }), a.__assign({}, n, {
                    videos: i
                })
            },
            Pe = function(e) {
                return {
                    id: e._id,
                    title: e.title,
                    preview: e.preview
                }
            },
            He = "channel_id",
            Be = "limit",
            We = "video_id",
            ze = 50;

        function Ge(e) {
            var t;
            return t = function(e) {
                return "userId" in e
            }(e) ? function(e) {
                var t = {};
                return t[Be] = ze.toString(), t[He] = e.userId, void 0 !== e.cursor && (t[Ne] = e.cursor), "/v5/videos/comments?" + he.stringify(t)
            }(e) : function(e) {
                var t = {};
                return t[Be] = ze.toString(), t[We] = e.videoId, void 0 !== e.cursor && (t[Ne] = e.cursor), "/v5/videos/comments?" + he.stringify(t)
            }(e), ge.a.getOrThrow(t).then(function(t) {
                return je(t.body, e.bitsConfig)
            })
        }
        var qe = n("6WAQ"),
            Ke = function(e) {
                return e + "s"
            },
            Ye = {
                beginSec: Number.MIN_VALUE,
                endSec: Number.MAX_VALUE
            },
            Qe = function(e, t) {
                return t.commenter in e
            },
            Je = function(e, t, n, i) {
                var r = e.vodChat.comments,
                    a = r.currentVideoTime,
                    o = r.comments;
                return 0 === o.commentCount ? [] : Array.from(new re(o)).reduce(function(r, s) {
                    return s.offset > a ? r : (s.comments.forEach(function(a) {
                        var s = Y(o, a);
                        if (void 0 !== s && (n || !Qe(i, s))) return "comment" === s.source && rt(e.vodChat.comments.isReplayFilterOn, t) ? r : r.push(et(s, e, n, i, t))
                    }), r)
                }, []).sort(Ze)
            },
            $e = function(e) {
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
            et = function(e, t, n, i, r) {
                var a = new Array,
                    o = new Array,
                    s = t.vodChat.comments.comments.replies[e.id],
                    l = e.createdAt;
                return Array.isArray(s) && s.forEach(function(e) {
                    !n && Qe(i, e) || (e.source === H && rt(t.vodChat.comments.isReplayFilterOn, r) ? (o.push(et(e, t, n, i)), l = at(l, e.createdAt)) : (a.push(et(e, t, n, i)), l = at(l, e.createdAt)))
                }), rt(t.vodChat.comments.isReplayFilterOn, r) ? {
                    author: t.vodChat.users.users[e.commenter],
                    comment: e,
                    lastUpdated: l,
                    replies: o.sort(Ze)
                } : {
                    author: t.vodChat.users.users[e.commenter],
                    comment: e,
                    lastUpdated: l,
                    replies: a.sort(Ze)
                }
            },
            tt = function(e, t) {
                var n = new Array,
                    i = t.vodChat.comments.comments.replies[e.id],
                    r = e.createdAt;
                return Array.isArray(i) && i.forEach(function(e) {
                    n.push(tt(e, t)), r = at(r, e.createdAt)
                }), {
                    author: t.vodChat.users.users[e.commenter],
                    comment: e,
                    lastUpdated: r,
                    replies: n.sort(Ze)
                }
            },
            nt = function(e, t) {
                var n, i = tt(e, t);
                return a.__assign({}, i, {
                    video: t.vodChat.moderation.videos[(n = e.contentId, "v" + n)]
                })
            },
            it = function(e) {
                return 0 === e.commentCount ? Ye : {
                    beginSec: e.minOffset,
                    endSec: e.maxOffset
                }
            },
            rt = function(e, t) {
                return !!t && (e && (t === qe.a.Archive || t === qe.a.Highlight))
            },
            at = function(e, t) {
                return e.getTime() > t.getTime() ? e : t
            };

        function ot(e, t, n, i) {
            return e in t ? {
                bitsConfig: i,
                commentID: e,
                cursor: t[e]
            } : {
                bitsConfig: i,
                commentID: e,
                videoID: n
            }
        }

        function st(e) {
            return e.future !== B
        }

        function lt(e) {
            return e.past !== B
        }
        var ct = n("HM6l"),
            dt = n("9m97"),
            ut = n("MAZT"),
            pt = n("uTyw"),
            mt = n("E8Jt"),
            ht = function(e, t) {
                return Ge(t).then(function(n) {
                    var i, r;
                    e.dispatch((i = n, r = t.bitsConfig, a.__assign({
                        type: o
                    }, i, {
                        bitsConfig: r
                    })))
                }, function() {
                    var t;
                    e.dispatch((t = Object(ae.d)("Unable to retrieve messages, please try again.", "routines-moderation"), {
                        type: s,
                        error: t
                    }))
                })
            },
            gt = function(e, t) {
                return (n = t, i = function(e) {
                    return "/v5/videos/channels/" + e.targetChannel + "/bans"
                }(n), r = {
                    body: {
                        commenter_id: n.bannedUser
                    }
                }, ge.a.postOrThrow(i, r)).then(function() {
                    var n;
                    e.dispatch((n = t.bannedUser, {
                        type: l,
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
                var n, i, r
            },
            ft = function(e, t) {
                var n = new ut.a({
                        appId: r.a.algoliaApplicationID,
                        apiKey: r.a.algoliaAPIKey,
                        apolloClient: r.o.apollo.client,
                        logger: r.j,
                        config: r.a
                    }),
                    i = ct.a(),
                    a = Object(mt.b)({
                        broadcastType: dt.d,
                        broadcasterId: t.creatorId
                    }),
                    o = a.typeID,
                    s = a.params;
                return n.queryForType(o, t.searchTerm, i, s).then(function(t) {
                    var n, i = Object(pt.b)({
                        searchResults: t
                    });
                    i.currentVideoResults && e.dispatch((n = i.currentVideoResults, {
                        type: c,
                        hits: n
                    }))
                }).catch(function() {})
            };

        function vt(e, t) {
            return function(n, i) {
                e({
                    dispatch: n,
                    getState: i
                }, t, ae.p.apollo.client)
            }
        }

        function bt(e, t) {
            return function(n, i) {
                e({
                    dispatch: n,
                    getState: i
                }, t, ae.p.apollo.client, ae.o)
            }
        }
        var kt = n("GiK3"),
            yt = n("Odds"),
            _t = function(e) {
                return kt.createElement(yt.v, {
                    type: yt.B.Text,
                    onClick: e.onClick
                }, Object(r.d)("Show more replies...", "chomments.moderation.showMoreRepliesAction"))
            },
            St = n("vH/s"),
            Ct = n("JpYe"),
            wt = n("IWpL"),
            Et = n("xrVp"),
            Ot = n("cAee"),
            Dt = n("B0KL"),
            Tt = this,
            Nt = "replay_mode",
            It = "timestamp_mode",
            xt = "on",
            Mt = "off",
            Rt = function(e) {
                r.n.track(wt.SpadeEventType.VideoChatSettingChanged, e)
            },
            Lt = function(e, t) {
                return a.__awaiter(Tt, void 0, void 0, function() {
                    var n, i, o, s;
                    return a.__generator(this, function(a) {
                        switch (a.label) {
                            case 0:
                                return a.trys.push([0, 2, , 3]), [4, r.o.apollo.client.query({
                                    query: Dt,
                                    variables: {
                                        videoCreatorID: e.channelId,
                                        videoID: e.contentId
                                    }
                                })];
                            case 1:
                                return n = a.sent().data, i = {
                                    channel: n.video.owner.login,
                                    channel_id: Number(e.channelId),
                                    game: n.video.game ? n.video.game.name : null,
                                    location: St.PageviewLocation.VideoWatchPage,
                                    share_platform: Ot.a.Link,
                                    share_context: St.ShareItemContext.Chomment,
                                    shared_item_id: Object(Ct.b)(e.contentId),
                                    shared_item_type: Object(Et.a)(n.video.broadcastType),
                                    shared_item_url: t.toString(),
                                    partner: n.video.owner.roles.isPartner,
                                    source_item_id: e.id,
                                    source_item_type: St.SourceItemType.Chomment
                                }, o = At(e, n, Ot.a.Link), r.n.track(wt.SpadeEventType.ChommentUIAction, o), r.n.track(wt.SpadeEventType.ShareItem, i), [3, 3];
                            case 2:
                                return s = a.sent(), r.j.error(s.toString(), Lt.name), [3, 3];
                            case 3:
                                return [2]
                        }
                    })
                })
            },
            At = function(e, t, n) {
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
                    vod_type: Object(Et.a)(t.video.broadcastType),
                    share_platform: n
                }
            },
            Ft = n("WNf4"),
            Vt = n("tSZx"),
            Ut = n("vjRp"),
            jt = this;
        var Pt = function(e) {
                if (e.includes("FollowersOnlyError")) return function(e) {
                    return Object(r.d)("This room is in {duration} followers-only mode. Follow this channel to join the community", {
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
                        CommenterBannedError: Object(r.d)("You are banned from sending messages in this channel", "routines-comments"),
                        CommentingDisabledError: Object(r.d)("Sending messages in this channel is disabled", "routines-comments"),
                        UserNotVerifiedError: Object(r.d)("Account email verification required to send a message", "routines-comments"),
                        MaxChildCommentsError: Object(r.d)("The reply limit for this message has been reached", "routines-comments"),
                        MessageLikelySpamError: Object(r.d)("Your message was blocked by the spam filter", "routines-comments"),
                        MessageContainsBannedWordsError: Object(r.d)("Your message wasn't posted due to conflicts with the channel's moderation settings", "routines-comments")
                    },
                    n = Object.keys(t).find(function(t) {
                        return e.includes(t)
                    });
                return n ? t[n] : Object(r.d)("Unable to send a new message at this time", "routines-comments")
            },
            Ht = "",
            Bt = -1,
            Wt = !1,
            zt = function(e, t) {
                return a.__awaiter(jt, void 0, void 0, function() {
                    return a.__generator(this, function(n) {
                        if (Wt) return [2, Promise.resolve()];
                        if (Ue(t)) {
                            if (t.offset === Bt) return [2, Promise.resolve()];
                            Bt = t.offset
                        }
                        if (Ve(t)) {
                            if (t.cursor === Ht) return [2, Promise.resolve()];
                            Ht = t.cursor
                        }
                        return Wt = !0, [2, Ae(t).then(function(n) {
                            var i;
                            Wt = !1, Ue(t) && t.offset === Bt ? e.dispatch((i = n, a.__assign({
                                type: b
                            }, i))) : e.dispatch(function(e) {
                                return a.__assign({
                                    type: v
                                }, e)
                            }(n))
                        }, function(t) {
                            Wt = !1, r.j.error(t, "VideoChat: unable to fetch messages"), e.dispatch({
                                type: k
                            })
                        })]
                    })
                })
            },
            Gt = function(e, t) {
                return a.__awaiter(jt, void 0, void 0, function() {
                    var n, i, o;
                    return a.__generator(this, function(s) {
                        switch (s.label) {
                            case 0:
                                return s.trys.push([0, 2, , 3]), [4, Le(t)];
                            case 1:
                                return (n = s.sent()).requestError ? (r.j.error(n.requestError, Gt.name), e.dispatch(m(Pt(""))), [2]) : n.error ? (r.j.error(new Error(n.error.error), Gt.name), e.dispatch(m(Pt(n.error.message))), [2]) : void 0 === n.body ? (e.dispatch(m(Pt(""))), [2]) : (c = n.body, i = {
                                    comments: [Oe.normalizeRecord(c, fe.a)],
                                    users: [_e(c.commenter)]
                                }, e.dispatch((l = i, a.__assign({
                                    type: u
                                }, l))), e.dispatch(bt(Yt, i)), setTimeout(function() {
                                    e.dispatch({
                                        type: S
                                    })
                                }, 5e3), [3, 3]);
                            case 2:
                                return o = s.sent(), r.j.error(o, Gt.name), e.dispatch(m(Pt(""))), [3, 3];
                            case 3:
                                return [2]
                        }
                        var l, c
                    })
                })
            },
            qt = function(e, t) {
                return a.__awaiter(jt, void 0, void 0, function() {
                    var n;
                    return a.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return i.trys.push([0, 2, , 3]), [4, function(e) {
                                    var t = Re(e.id);
                                    return ge.a.delete(t)
                                }(t)];
                            case 1:
                                return i.sent(), e.dispatch(function(e) {
                                    return a.__assign({
                                        type: d
                                    }, e)
                                }({
                                    comment: t
                                })), e.dispatch(bt(Qt, {
                                    comment: t
                                })), [3, 3];
                            case 2:
                                return n = i.sent(), r.j.error(n, qt.name), [3, 3];
                            case 3:
                                return [2]
                        }
                    })
                })
            },
            Kt = function(e, t) {
                return a.__awaiter(jt, void 0, void 0, function() {
                    var n, i;
                    return a.__generator(this, function(o) {
                        switch (o.label) {
                            case 0:
                                return o.trys.push([0, 2, , 3]), [4, function(e) {
                                    var t = Re(e.comment.id),
                                        n = {
                                            body: {
                                                state: e.state
                                            }
                                        };
                                    return ge.a.putOrThrow(t, n).then(function(t) {
                                        return Se(t.body, e.comment)
                                    })
                                }(t)];
                            case 1:
                                return n = o.sent(), e.dispatch((s = n, a.__assign({
                                    type: f
                                }, s))), [3, 3];
                            case 2:
                                return i = o.sent(), r.j.error(i, Kt.name), [3, 3];
                            case 3:
                                return [2]
                        }
                        var s
                    })
                })
            },
            Yt = function(e, t, n, i) {
                return a.__awaiter(jt, void 0, void 0, function() {
                    var e, o;
                    return a.__generator(this, function(a) {
                        switch (a.label) {
                            case 0:
                                return a.trys.push([0, 2, , 3]), [4, n.query({
                                    query: Ft,
                                    variables: {
                                        videoCreatorID: t.comments[0].channelId,
                                        videoID: t.comments[0].contentId
                                    }
                                })];
                            case 1:
                                return e = a.sent().data, i.track(St.SpadeEventType.ChommentCreated, function(e, t) {
                                    var n = e.users[0],
                                        i = e.comments[0];
                                    return {
                                        channel: t.user.login,
                                        channel_id: Number(i.channelId),
                                        comment_id: i.id,
                                        comment_state: i.state,
                                        event_source: "frontend",
                                        game: t.video.game ? t.video.game.name : null,
                                        login: n.name,
                                        play_session_id: r.n.getVideoPlayerTrackingData().playSessionID,
                                        reply_to_comment_id: W(i) ? i.parentId : null,
                                        user_id: Number(n.id),
                                        vod_id: Number(i.contentId),
                                        vod_title: t.video.title,
                                        vod_ts: i.contentOffset,
                                        vod_type: Object(Et.a)(t.video.broadcastType)
                                    }
                                }(t, e)), [3, 3];
                            case 2:
                                return o = a.sent(), r.j.error(o, Yt.name), [3, 3];
                            case 3:
                                return [2]
                        }
                    })
                })
            },
            Qt = function(e, t, n, i) {
                return a.__awaiter(jt, void 0, void 0, function() {
                    var o, s;
                    return a.__generator(this, function(a) {
                        switch (a.label) {
                            case 0:
                                return a.trys.push([0, 2, , 3]), [4, n.query({
                                    query: Vt,
                                    variables: {
                                        videoCreatorID: t.comment.channelId,
                                        commentCreator: t.comment.commenter,
                                        videoID: t.comment.contentId
                                    }
                                })];
                            case 1:
                                return o = a.sent().data, i.track(St.SpadeEventType.ChommentDeleted, function(e, t, n) {
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
                                        vod_type: Object(Et.a)(n.video.broadcastType),
                                        vod_ts: e.comment.contentOffset
                                    }
                                }(t, e.getState(), o)), [3, 3];
                            case 2:
                                return s = a.sent(), r.j.error(s, Qt.name), [3, 3];
                            case 3:
                                return [2]
                        }
                    })
                })
            },
            Jt = function(e, t, n, i) {
                return a.__awaiter(jt, void 0, void 0, function() {
                    var o, s;
                    return a.__generator(this, function(a) {
                        switch (a.label) {
                            case 0:
                                return a.trys.push([0, 2, , 3]), [4, n.query({
                                    query: Ut,
                                    variables: {
                                        videoID: t.comment.contentId
                                    }
                                })];
                            case 1:
                                return o = a.sent().data, i.track(St.SpadeEventType.ChommentUIAction, function(e, t, n) {
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
                                        vod_type: Object(Et.a)(n.video.broadcastType),
                                        vod_ts: e.comment.contentOffset
                                    }
                                }(t, e.getState(), o)), [3, 3];
                            case 2:
                                return s = a.sent(), r.j.error(s, Jt.name), [3, 3];
                            case 3:
                                return [2]
                        }
                    })
                })
            },
            $t = function(e, t, n, i) {
                return a.__awaiter(jt, void 0, void 0, function() {
                    var o, s;
                    return a.__generator(this, function(a) {
                        switch (a.label) {
                            case 0:
                                return a.trys.push([0, 2, , 3]), [4, n.query({
                                    query: Vt,
                                    variables: {
                                        videoCreatorID: t.channelId,
                                        commentCreator: t.commenter,
                                        videoID: t.contentId
                                    }
                                })];
                            case 1:
                                return o = a.sent().data, i.track(St.SpadeEventType.ChommentUIAction, function(e, t, n) {
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
                                        vod_type: Object(Et.a)(n.video.broadcastType),
                                        vod_ts: e.contentOffset
                                    }
                                }(t, e.getState(), o)), [3, 3];
                            case 2:
                                return s = a.sent(), r.j.error(s, $t.name), [3, 3];
                            case 3:
                                return [2]
                        }
                    })
                })
            },
            Zt = function(e, t, n, i) {
                return a.__awaiter(jt, void 0, void 0, function() {
                    var o, s, l, c;
                    return a.__generator(this, function(a) {
                        switch (a.label) {
                            case 0:
                                return a.trys.push([0, 2, , 3]), o = e.getState(), s = Fe(t) ? o.vodChat.comments.comments.parentComments[t.parentId].contentId : t.contentId, [4, n.query({
                                    query: Ut,
                                    variables: {
                                        videoID: s
                                    }
                                })];
                            case 1:
                                return l = a.sent().data, i.track(St.SpadeEventType.ChommentUIAction, function(e, t, n) {
                                    var i = null,
                                        r = Object.keys(t.vodChat.comments.comments.parentComments);
                                    if (r.length > 0) {
                                        var a = r[0];
                                        i = t.vodChat.comments.comments.parentComments[a].channelId
                                    }
                                    return {
                                        action: "create",
                                        channel_id: i ? Number(i) : null,
                                        comment_body: e.message,
                                        event_source: "frontend",
                                        game: n.video.game ? n.video.game.name : null,
                                        login: t.session.user ? t.session.user.login : null,
                                        reply_to_comment_id: Fe(e) ? e.parentId : null,
                                        user_id: t.session.user ? Number(t.session.user.id) : null,
                                        vod_id: Number(n.video.id),
                                        vod_title: n.video.title,
                                        vod_ts: Fe(e) ? null : Number(e.contentOffsetSeconds),
                                        vod_type: Object(Et.a)(n.video.broadcastType)
                                    }
                                }(t, e.getState(), l)), [3, 3];
                            case 2:
                                return c = a.sent(), r.j.error(c, Zt.name), [3, 3];
                            case 3:
                                return [2]
                        }
                    })
                })
            },
            Xt = function(e, t, n, i) {
                return a.__awaiter(jt, void 0, void 0, function() {
                    var o, s;
                    return a.__generator(this, function(a) {
                        switch (a.label) {
                            case 0:
                                return a.trys.push([0, 2, , 3]), [4, n.query({
                                    query: Ut,
                                    variables: {
                                        videoID: t.comment.contentId
                                    }
                                })];
                            case 1:
                                return o = a.sent().data, i.track(St.SpadeEventType.ChommentUIAction, function(e, t, n) {
                                    var i = e.comment.id,
                                        r = e.comment.channelId;
                                    return {
                                        action: "published" === e.state ? "publish" : "unpublish",
                                        channel_id: Number(r),
                                        comment_id: i,
                                        event_source: "frontend",
                                        game: n.video.game ? n.video.game.name : null,
                                        login: t.session.user.login,
                                        user_id: Number(t.session.user.id),
                                        vod_id: Number(n.video.id),
                                        vod_title: n.video.title,
                                        vod_ts: e.comment.contentOffset,
                                        vod_type: Object(Et.a)(n.video.broadcastType)
                                    }
                                }(t, e.getState(), o)), [3, 3];
                            case 2:
                                return s = a.sent(), r.j.error(s, Xt.name), [3, 3];
                            case 3:
                                return [2]
                        }
                    })
                })
            },
            en = function(e, t, n, i) {
                return a.__awaiter(jt, void 0, void 0, function() {
                    var o, s;
                    return a.__generator(this, function(a) {
                        switch (a.label) {
                            case 0:
                                return a.trys.push([0, 2, , 3]), [4, n.query({
                                    query: Ft,
                                    variables: {
                                        videoCreatorID: t.channelId,
                                        videoID: t.contentId
                                    }
                                })];
                            case 1:
                                return o = a.sent().data, i.track(St.SpadeEventType.ChommentUIAction, function(e, t, n) {
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
                                        vod_type: Object(Et.a)(n.video.broadcastType)
                                    }
                                }(t, e.getState(), o)), [3, 3];
                            case 2:
                                return s = a.sent(), r.j.error(s, en.name), [3, 3];
                            case 3:
                                return [2]
                        }
                    })
                })
            },
            tn = (n("FKWv"), n("+8VM")),
            nn = (n("smiM"), "confirm-button"),
            rn = "deny-button",
            an = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return kt.createElement(yt._35, {
                        className: "twp-modal",
                        background: yt.n.Base,
                        color: yt.K.Alt,
                        padding: 3
                    }, kt.createElement("h3", null, this.props.title), kt.createElement(yt._8, {
                        className: "twp-modal__message",
                        margin: {
                            bottom: 2
                        }
                    }, this.props.children), kt.createElement(yt._8, {
                        display: yt.R.Flex,
                        justifyContent: yt._7.End
                    }, kt.createElement(yt._8, {
                        margin: {
                            right: 1
                        }
                    }, kt.createElement(yt.v, {
                        onClick: this.props.onDenyClick,
                        type: yt.B.Hollow,
                        "data-test-selector": rn
                    }, Object(r.d)("Cancel", "ConfirmationModal"))), kt.createElement(yt.v, {
                        onClick: this.props.onConfirmClick,
                        type: yt.B.Alert,
                        disabled: this.props.isConfirmDisabled,
                        "data-test-selector": nn
                    }, Object(r.d)("Ok", "ConfirmationModal"))), kt.createElement(tn.a, {
                        closeOnBackdropClick: !0
                    }))
                }, t
            }(kt.Component),
            on = n("hXeO"),
            sn = n("5vPJ"),
            ln = n("L8zk"),
            cn = n("kBA+"),
            dn = function(e) {
                var t = e.message,
                    n = null,
                    i = t.tokens.map(function(e, t) {
                        switch (e.type) {
                            case ve.a.Text:
                                return [kt.createElement("span", {
                                    key: t
                                }, e.content)];
                            case ve.a.Emote:
                                return [kt.createElement(on.a, {
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
                            case ve.a.CurrentUserHighlight:
                                return [kt.createElement(ln.a, {
                                    isAtMention: !1,
                                    isCurrentUserRecipient: !0,
                                    recipient: e.content,
                                    key: t
                                })];
                            case ve.a.Mention:
                                var i = e.content,
                                    r = i.recipient,
                                    a = i.isCurrentUserRecipient;
                                return [kt.createElement(ln.a, {
                                    isAtMention: !0,
                                    isCurrentUserRecipient: a,
                                    recipient: r,
                                    key: t
                                })];
                            default:
                                return null
                        }
                    });
                return i.push(n), kt.createElement("span", {
                    key: t.id,
                    style: {
                        color: e.allowActionTextColors && t.isAction ? t.userColor : ""
                    }
                }, Array.prototype.concat.apply([], i))
            },
            un = n("6Agf"),
            pn = /^[\x00-\x7F]*$/,
            mn = function(e) {
                return !pn.test(e)
            },
            hn = function(e) {
                return mn(e.displayName) ? e.displayName + " (" + e.name + ")" : e.displayName
            },
            gn = n("3zLD"),
            fn = n("RH2O"),
            vn = n("Aj/L"),
            bn = n("bkpq"),
            kn = n("O0Qc"),
            yn = function(e, t, n) {
                return e && t && !n
            },
            _n = n("HW6M"),
            Sn = n("3T7g"),
            Cn = n("CSlQ"),
            wn = 15e3,
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
                        }, wn)
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.setAutoDismissTimeout()
                }, t.prototype.componentWillUpdate = function(e) {
                    this.props.message !== e.message && (this.clearDismissTimeout(), this.setAutoDismissTimeout())
                }, t.prototype.componentWillUnmount = function() {
                    this.clearDismissTimeout()
                }, t.prototype.render = function() {
                    var e = null;
                    return this.props.message === oe().chatReplayFilterError && (e = kt.createElement(yt.Q, {
                        type: yt._49.Span
                    }, " ", kt.createElement(yt.Q, {
                        type: yt._49.Span,
                        decoration: yt._47.Underline
                    }, kt.createElement("a", {
                        onClick: this.props.onMessageClick
                    }, Object(ae.d)("Click here to show all messages.", "CommentError"))))), kt.createElement(yt._35, {
                        alignItems: yt.c.Center,
                        background: yt.n.Base,
                        className: "anim-swoop",
                        color: yt.K.Error,
                        "data-test-selector": "vod-chat-error",
                        display: yt.R.Flex,
                        flexWrap: yt.U.NoWrap,
                        fullWidth: !0,
                        padding: {
                            y: 1,
                            x: 2
                        },
                        position: yt._15.Absolute,
                        zIndex: yt._62.Above
                    }, kt.createElement(yt.Q, {
                        type: yt._49.Span
                    }, this.props.message, e), kt.createElement(yt._8, {
                        alignSelf: yt.d.Start
                    }, kt.createElement(yt.w, {
                        ariaLabel: Object(ae.d)("Close", "CommentErrorComponent"),
                        icon: yt._25.Close,
                        onClick: this.onManualErrorDismissClickHandler
                    })))
                }, t
            }(kt.Component),
            On = n("mi6k"),
            Dn = n("c3pS"),
            Tn = n("Lx+S"),
            Nn = n("YhVV"),
            In = n("ieBa"),
            xn = n("Tzcg"),
            Mn = n("czpb"),
            Rn = (n("9kjL"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.buildModerationDashboardURL = function() {
                        return Object(Mn.a)("/" + t.props.videoOwnerLogin + "/dashboard/moderation")
                    }, t.buildModerationPrefsURL = function() {
                        return Object(Mn.a)("/" + t.props.videoOwnerLogin + "/dashboard/settings/moderation")
                    }, t.onReplayModeChange = function(e) {
                        t.props.onReplayModeChange(e.currentTarget.checked)
                    }, t.onTimestampModeChange = function(e) {
                        t.props.onTimestampModeChange(e.currentTarget.checked)
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = null;
                    this.props.isUpload || (e = kt.createElement(yt._8, {
                        display: yt.R.Flex,
                        flexWrap: yt.U.NoWrap,
                        justifyContent: yt._7.Between,
                        key: "viewerReplayOption",
                        padding: {
                            bottom: 1
                        }
                    }, kt.createElement(yt._8, null, Object(r.d)("Show me only messages posted during the live broadcast", "VideoChatSettings")), kt.createElement(yt._8, {
                        flexShrink: 0
                    }, kt.createElement(yt._51, {
                        checked: this.props.isReplayFilterOn,
                        "data-test-selector": "reply-mode",
                        onChange: this.onReplayModeChange
                    }))));
                    var t = [kt.createElement(yt.Q, {
                        key: "moderationHeader",
                        bold: !0
                    }, Object(r.d)("Mod Tools", "VideoChatSettings"))];
                    return this.props.canSessionEditModerationSettings && t.push(kt.createElement(yt._2, {
                        key: "moderationPrefs",
                        display: yt.R.InlineBlock
                    }, kt.createElement("a", {
                        target: Object(Mn.b)() ? "_blank" : "",
                        href: this.buildModerationPrefsURL(),
                        "data-test-selector": "video_chat_settings_mod_prefs"
                    }, Object(r.d)("Change moderation preferences", "VideoChatSettings")))), this.props.canSessionModerateMessages && t.push(kt.createElement(yt._2, {
                        key: "moderationDashboard",
                        display: yt.R.InlineBlock
                    }, kt.createElement("a", {
                        target: Object(Mn.b)() ? "_blank" : "",
                        href: this.buildModerationDashboardURL(),
                        "data-test-selector": "video_chat_settings_mod_dashboard"
                    }, Object(r.d)("Moderate messages", "VideoChatSettings")))), kt.createElement(yt._8, {
                        className: "video-chat__settings",
                        padding: {
                            x: 2,
                            y: 2
                        }
                    }, kt.createElement(yt.Q, {
                        bold: !0
                    }, Object(r.d)("Viewer Settings", "VideoChatSettings")), e, kt.createElement(yt._8, {
                        display: yt.R.Flex,
                        justifyContent: yt._7.Between,
                        padding: {
                            bottom: 1
                        }
                    }, kt.createElement(yt._8, null, Object(r.d)("Hide timestamps", "VideoChatSettings")), kt.createElement(yt._8, {
                        flexShrink: 0
                    }, kt.createElement(yt._51, {
                        "data-test-selector": "timestamp-mode",
                        checked: this.props.hideTimestamps,
                        onChange: this.onTimestampModeChange
                    }))), t.length > 1 ? t : null)
                }, t
            }(kt.Component)),
            Ln = Object(Cn.d)("ChatSettings")(Rn);
        var An = Object(fn.b)(function(e) {
                return {
                    isReplayFilterOn: e.vodChat.comments.isReplayFilterOn,
                    hideTimestamps: e.vodChat.comments.hideTimestamps
                }
            }, function(e) {
                return {
                    onReplayModeChange: function(t) {
                        Rt({
                            setting: Nt,
                            value: t ? xt : Mt
                        }), e(T(t))
                    },
                    onTimestampModeChange: function(t) {
                        Rt({
                            setting: It,
                            value: t ? xt : Mt
                        }), e(M(t))
                    }
                }
            })(Ln),
            Fn = "@",
            Vn = "Enter",
            Un = "Escape",
            jn = " ",
            Pn = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    n.onKeyDown = function(e) {
                        switch (e.key) {
                            case Vn:
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
                            }), void n.props.onError(oe().messageCreatedTooQuickError);
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
                        var e = Object(Nn.a)(n.props.currentUser.emoteSets);
                        return Object.keys(e).map(function(t) {
                            return {
                                id: t,
                                emotes: Object(xn.b)([e[t]])
                            }
                        })
                    };
                    var i = null !== n.props.currentUser && (n.props.currentUser.id === n.props.videoOwnerID || !!n.props.currentUser.roles.isStaff),
                        r = null !== n.props.currentUser && (n.props.isModerator || n.props.currentUser.roles.isSiteAdmin || i);
                    return n.state = {
                        isMentionPaused: !1,
                        canSessionModerateMessages: r,
                        canSessionEditModerationSettings: i,
                        newMessageText: "",
                        showCoolDownState: !1
                    }, n
                }
                return a.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    e.isPostCooldownActive || this.setState({
                        showCoolDownState: !1
                    })
                }, t.prototype.render = function() {
                    var e = null;
                    (!this.props.isUpload || this.state.canSessionModerateMessages || this.state.canSessionEditModerationSettings) && (e = kt.createElement(Tn.b, null, kt.createElement(An, {
                        canSessionEditModerationSettings: this.state.canSessionEditModerationSettings,
                        canSessionModerateMessages: this.state.canSessionModerateMessages,
                        videoOwnerLogin: this.props.videoOwnerLogin,
                        isUpload: this.props.isUpload
                    })));
                    var t = null;
                    return this.props.currentUser && (t = kt.createElement(Dn.d, {
                        emotes: this.getSessionSpecificEmotes()
                    })), kt.createElement("div", null, kt.createElement(yt._8, {
                        position: yt._15.Relative
                    }, kt.createElement(Dn.b, {
                        componentType: Dn.a.TextArea,
                        suggestionSource: Dn.c.Chat,
                        onValueUpdate: this.onChange,
                        onKeyDown: this.onKeyDown,
                        componentRefDelegate: this.setTextareaRef,
                        refDelegate: this.setAutocompleteInputRef,
                        paddingRight: 30,
                        placeholder: Object(r.d)("Post a message", "VideoChatInput"),
                        noResize: !0,
                        "data-a-target": "video-chat-input",
                        disabled: this.state.showCoolDownState
                    }, t), kt.createElement(In.a, {
                        channelOwnerID: this.props.videoOwnerID,
                        inputRef: this.textArea,
                        onClickEmote: this.onEmoticonClick,
                        attachTop: !0,
                        attachRight: !0,
                        position: yt._15.Absolute
                    })), kt.createElement(yt._8, {
                        margin: {
                            top: 1
                        },
                        justifyContent: yt._7.Between,
                        display: yt.R.Flex
                    }, e, kt.createElement("span", null), " ", kt.createElement(yt.v, {
                        onClick: this.createComment,
                        disabled: this.state.showCoolDownState,
                        "data-a-target": "video-chat-submit-button"
                    }, kt.createElement(yt._8, {
                        display: yt.R.Flex
                    }, kt.createElement("span", null, Object(r.d)("Post at ", "CommentInput")), kt.createElement(yt._8, {
                        margin: {
                            x: .5
                        },
                        display: yt.R.Flex
                    }, kt.createElement(yt._24, {
                        asset: yt._25.GlyphLength
                    })), kt.createElement("span", null, Object(On.b)(this.props.currentVideoTime))))))
                }, t
            }(kt.Component);
        var Hn = Object(Cn.d)("MessageInput", {
                autoReportInteractive: !0
            })(Pn),
            Bn = function(e) {
                var t = e.offset,
                    n = e.onClick;
                return kt.createElement(yt._8, {
                    margin: {
                        right: .5
                    }
                }, kt.createElement(yt._52, {
                    align: yt._53.Left,
                    direction: yt._54.Top,
                    label: Object(r.d)("Jump to video", "TimeStamp")
                }, kt.createElement(yt._6, {
                    onClick: n,
                    blurAfterClick: !0
                }, kt.createElement(yt._8, {
                    padding: {
                        x: .5
                    }
                }, kt.createElement(yt.Q, {
                    fontSize: yt.V.Size7
                }, Object(On.b)(t))))))
            },
            Wn = n("+V/3"),
            zn = n("Nay6"),
            Gn = n("rCmJ"),
            qn = n("2hJ3"),
            Kn = function(e, t) {
                var n = new URL("https://www.twitch.tv/videos/" + e);
                if (t) {
                    var i = he.stringify(t);
                    n.search = i
                }
                return n
            },
            Yn = n("Ryxq"),
            Qn = "ban-user",
            Jn = "delete-comment-button",
            $n = "reply-button",
            Zn = "relative-time-title",
            Xn = "share-button",
            ei = "share-button-clicked",
            ti = 3e3,
            ni = function(e) {
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
                        if ("function" == typeof t.state.confirmationAction) return kt.createElement(yt._8, {
                            padding: {
                                y: 1
                            }
                        }, kt.createElement(yt._35, {
                            display: yt.R.Flex,
                            margin: {
                                x: 1
                            },
                            padding: {
                                bottom: .5
                            }
                        }, kt.createElement(yt.Q, {
                            type: yt._49.Span
                        }, Object(r.d)("Are you sure you want to perform this action?", "chomments.moderation.confirmAction"))), kt.createElement(yt._8, {
                            display: yt.R.Flex,
                            justifyContent: yt._7.Center,
                            alignItems: yt.c.Center
                        }, kt.createElement(yt._8, {
                            display: yt.R.Inline,
                            padding: {
                                right: 1
                            }
                        }, kt.createElement(yt.v, {
                            type: yt.B.Alert,
                            onClick: t.onContinueClickHandler,
                            "data-test-selector": nn
                        }, Object(r.d)("Yes", "MessageOptionsMenu"))), kt.createElement(yt.v, {
                            type: yt.B.Hollow,
                            onClick: t.onCancelClickHandler,
                            "data-test-selector": rn
                        }, Object(r.d)("No", "MessageOptionsMenu"))));
                        var e = [];
                        t.props.isExpandedLayout || e.push(kt.createElement(yt._35, {
                            key: t.props.context.comment.id,
                            color: yt.K.Alt2,
                            display: yt.R.Flex,
                            "data-test-selector": Zn
                        }, kt.createElement(yt._35, {
                            margin: {
                                x: 1
                            },
                            padding: {
                                bottom: .5
                            },
                            fullWidth: !0,
                            borderBottom: !0
                        }, kt.createElement(yt.Q, {
                            type: yt._49.Span
                        }, Object(r.d)("Posted ", "MessageOptionsMenu"), Object(r.h)(t.props.context.comment.createdAt)))), kt.createElement(yt._35, {
                            key: t.props.context.comment.id + "2",
                            display: yt.R.Flex,
                            color: yt.K.Link
                        }, kt.createElement(yt._6, {
                            onClick: t.onReplyClickHandler,
                            "data-test-selector": $n
                        }, kt.createElement(yt._8, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, Object(r.d)("Reply to {userName}", {
                            userName: hn(t.props.context.author)
                        }, "MessageOptionsMenu")))));
                        var n = [];
                        t.props.isCurrentUserModerator && n.push(kt.createElement(yt._8, {
                            key: t.props.context.comment.id,
                            display: yt.R.Flex
                        }, kt.createElement(yt._6, {
                            alert: !0,
                            onClick: t.onDeleteButtonClickHandler,
                            "data-test-selector": Jn
                        }, kt.createElement(yt._35, {
                            margin: {
                                x: 1
                            },
                            padding: {
                                y: .5
                            },
                            borderBottom: !0
                        }, Object(r.d)("Delete", "MessageOptionsMenu")))), kt.createElement(yt._8, {
                            key: t.props.context.comment.id + "2",
                            display: yt.R.Flex
                        }, kt.createElement(yt._6, {
                            alert: !0,
                            onClick: t.onBanUserClickHandler,
                            "data-test-selector": Qn
                        }, kt.createElement(yt._8, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, Object(r.d)("Ban User", "MessageOptionsMenu")))));
                        var i = kt.createElement(yt._6, {
                            onClick: t.onShareClick,
                            "data-test-selector": Xn
                        }, kt.createElement(yt._8, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, Object(r.d)("Copy Link", "MessageOptionsMenu")));
                        t.state.isLinkCopied && (i = kt.createElement(yt.v, {
                            fullWidth: !0,
                            icon: yt._25.Check,
                            type: yt.B.Success,
                            "data-test-selector": ei
                        }, kt.createElement(yt._8, {
                            display: yt.R.Flex,
                            alignItems: yt.c.Center,
                            justifyContent: yt._7.Start
                        }, Object(r.d)("Copied to clipboard", "MessageOptionsMenu"))));
                        var a = kt.createElement(yt._35, {
                            display: yt.R.Flex,
                            fullWidth: !0,
                            key: t.props.context.comment.id + "-share",
                            color: yt.K.Link
                        }, i);
                        return kt.createElement(yt._8, {
                            padding: {
                                y: 1
                            }
                        }, e, a, n)
                    }, t.closeMenu = function() {
                        t.setState({
                            isMenuOpen: !1,
                            confirmationAction: null,
                            isLinkCopied: !1
                        }), t.props.onClose()
                    }, t.onShareClick = function() {
                        var e = t.props.context.comment,
                            n = e.contentId,
                            i = Kn(n, {
                                tt_medium: "video_chat",
                                tt_content: "message_share_link",
                                t: Object(Yn.a)(e.contentOffset),
                                comment: e.id
                            });
                        return Object(qn.a)(i.toString()), t.setState({
                            isLinkCopied: !0
                        }, function() {
                            return t.dismissTimeoutID = setTimeout(function() {
                                t.setState({
                                    isLinkCopied: !1
                                })
                            }, ti)
                        }), Lt(e, i)
                    }, t.onReplyClickHandler = function() {
                        t.props.onReplyClick(hn(t.props.context.author)), t.closeMenu()
                    }, t.onBanUserClickHandler = function() {
                        t.setState(function(e) {
                            return a.__assign({}, e, {
                                confirmationAction: t.props.onBanUserClick
                            })
                        })
                    }, t.onDeleteButtonClickHandler = function() {
                        t.setState(function(e) {
                            return a.__assign({}, e, {
                                confirmationAction: t.props.onDeleteCommentClick
                            })
                        })
                    }, t.onContinueClickHandler = function() {
                        t.state.confirmationAction && t.state.confirmationAction(), t.closeMenu()
                    }, t.onCancelClickHandler = function() {
                        t.setState(function(e) {
                            return a.__assign({}, e, {
                                confirmationAction: null
                            })
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentWillUnmount = function() {
                    clearTimeout(this.dismissTimeoutID)
                }, t.prototype.render = function() {
                    return kt.createElement(yt._8, {
                        position: yt._15.Relative
                    }, kt.createElement(Gn.a, {
                        onClickOut: this.closeMenu
                    }, kt.createElement(yt.w, {
                        ariaLabel: Object(r.d)("Message Actions Menu", "VideoCommentsMenu"),
                        size: yt.x.Small,
                        type: yt.y.Secondary,
                        "data-test-selector": "menu-button",
                        icon: yt._25.More,
                        onClick: this.onToggleMenu
                    }), kt.createElement(yt.q, {
                        direction: yt.r.BottomRight,
                        show: this.state.isMenuOpen,
                        size: yt.s.Small,
                        offsetX: "0.5rem"
                    }, this.getContent())))
                }, t
            }(kt.Component),
            ii = (n("k2hM"), function(e) {
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
                return a.__extends(t, e), t.prototype.render = function() {
                    var e, t, n, i = this.props,
                        r = i.context,
                        a = i.badgeSets,
                        o = i.currentUser,
                        s = !!o && r.comment.commenter === o.id,
                        l = void 0 !== r.comment.userBadges[Wn.a],
                        c = _n("video-chat__message-menu", {
                            "video-chat__message-menu--force-visible": this.state.forceMenuVisibility
                        }),
                        d = kt.createElement(yt._8, {
                            className: c,
                            "data-test-selector": "menu-options-wrapper",
                            flexShrink: 0
                        }, kt.createElement(ni, {
                            context: r,
                            isCurrentUserModerator: this.props.isCurrentUserModerator,
                            isExpandedLayout: this.props.isExpandedLayout,
                            onBanUserClick: this.onBanUserClickHandler,
                            onClose: this.onMenuCloseHandler,
                            onDeleteCommentClick: this.onDeleteCommentClickHandler,
                            onOpen: this.onMenuOpenHandler,
                            onReplyClick: this.props.onReplyClick
                        })),
                        u = _n("video-chat__message-author", ((n = {})["video-chat__message-author--me"] = s, n["video-chat__message-author--creator"] = l, n)),
                        p = s || l ? "" : r.comment.message.userColor,
                        m = kt.createElement(yt._2, {
                            padding: {
                                x: .5
                            }
                        }, kt.createElement("span", null, ":"));
                    return r.comment.message.isAction && (m = kt.createElement(yt._2, {
                        padding: {
                            right: .5
                        }
                    }, kt.createElement("span", null))), kt.createElement(yt._8, {
                        alignItems: yt.c.Start,
                        display: yt.R.Flex,
                        flexWrap: yt.U.NoWrap
                    }, kt.createElement(yt._8, {
                        flexGrow: 1
                    }, kt.createElement(Sn.b, {
                        badgesToRender: r.comment.userBadges,
                        badgeSets: a
                    }), kt.createElement("a", {
                        className: u,
                        "data-test-selector": "comment-author-selector",
                        "data-tt_content": "tab_videos",
                        "data-tt_medium": "video-message-author",
                        href: "/" + r.author.name,
                        rel: "noopener noreferrer",
                        target: "_blank"
                    }, kt.createElement(zn.a, {
                        userData: (e = r.author, t = p, {
                            userID: e.id,
                            userDisplayName: e.displayName,
                            userType: un.a.User,
                            isIntl: mn(e.displayName),
                            userLogin: e.name,
                            color: t
                        }),
                        highlighted: s || l
                    })), kt.createElement(yt._8, {
                        display: yt.R.Inline,
                        className: "video-chat__message",
                        "data-test-selector": "comment-message-selector"
                    }, m, kt.createElement(dn, {
                        message: r.comment.message,
                        allowActionTextColors: !0
                    }))), d)
                }, t
            }(kt.Component)),
            ri = (n("jvcJ"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onReplyClickHandler = function() {
                        t.props.replyCommentContext ? t.props.onReplyClick(hn(t.props.replyCommentContext.author)) : t.props.onReplyClick()
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = Object(r.d)("Reply", "DashboardModerationReplyButton");
                    return "vod-message" === this.props.context ? kt.createElement("button", {
                        className: "video-chat-reply-button",
                        onClick: this.onReplyClickHandler,
                        "data-test-selector": "parent-reply-button"
                    }, kt.createElement(yt._8, {
                        display: yt.R.Flex
                    }, kt.createElement(yt._8, {
                        className: "video-chat-reply-button__icon",
                        display: yt.R.Flex,
                        padding: {
                            right: .5
                        }
                    }, kt.createElement(yt._24, {
                        width: 13,
                        height: 13,
                        asset: yt._25.Conversations,
                        type: yt._26.Inherit
                    })), kt.createElement(yt.Q, {
                        align: yt._59.Middle,
                        type: yt._49.Span
                    }, e))) : "mod-dashboard" === this.props.context ? kt.createElement(yt.w, {
                        ariaLabel: e,
                        type: yt.y.Hollow,
                        icon: yt._25.Conversations,
                        onClick: this.onReplyClickHandler,
                        "data-test-selector": "moderation-reply-button",
                        "data-a-selector": "qa-vod-chat-reply-button"
                    }) : kt.createElement(yt._35, {
                        color: yt.K.Link,
                        display: yt.R.Inline,
                        margin: {
                            left: 1
                        }
                    }, kt.createElement("button", {
                        onClick: this.onReplyClickHandler,
                        "data-test-selector": "reply-reply-button"
                    }, kt.createElement(yt.Q, {
                        type: yt._49.Span
                    }, e)))
                }, t
            }(kt.Component)),
            ai = (n("OvUa"), function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.submitReply = function() {
                        if ("" !== n.state.newReplyText) {
                            if (n.props.isCreationCoolDownActive) return n.setState({
                                showCoolDownState: !0
                            }), void(n.props.onError && n.props.onError(oe().messageCreatedTooQuickError));
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
                        e.key === Vn && (e.preventDefault(), n.submitReply()), n.props.onReplyFormClose && e.key === Un && (e.preventDefault(), n.props.onReplyFormClose())
                    }, n.setTextareaRef = function(e) {
                        return n.textArea = e
                    }, n.state = {
                        newReplyText: t.replyToUserDisplayName ? "@" + t.replyToUserDisplayName + " " : "",
                        showCoolDownState: !1
                    }, n
                }
                return a.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    e.isCreationCoolDownActive || this.setState({
                        showCoolDownState: !1
                    }), e.replyToUserDisplayName && e.replyToUserDisplayName !== this.props.replyToUserDisplayName && this.setState({
                        newReplyText: "@" + e.replyToUserDisplayName + " "
                    })
                }, t.prototype.render = function() {
                    return kt.createElement(yt._8, {
                        className: this.props.classNames,
                        position: yt._15.Relative
                    }, kt.createElement(yt._46, {
                        error: this.state.showCoolDownState,
                        maxLength: 512,
                        noResize: !0,
                        onChange: this.onChange,
                        onKeyDown: this.onKeyDown,
                        placeholder: Object(r.d)("Reply", "ReplyForm"),
                        refDelegate: this.setTextareaRef,
                        value: this.state.newReplyText
                    }), kt.createElement(In.a, {
                        attachRight: !0,
                        attachTop: !0,
                        channelOwnerID: this.props.videoOwnerID,
                        inputRef: this.textArea,
                        onClickEmote: this.onEmoticonClick,
                        position: yt._15.Absolute
                    }))
                }, t
            }(kt.Component));
        var oi = function(e) {
                return kt.createElement(yt._8, {
                    padding: {
                        y: .5,
                        left: 1
                    }
                }, kt.createElement(yt._8, {
                    className: "vod-message__content"
                }, kt.createElement(ii, {
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
            si = "vod-message-reply",
            li = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.makeReplyButtonAndRelativeTime = function(e) {
                        return kt.createElement(yt._8, {
                            display: yt.R.Flex,
                            alignItems: yt.c.Center
                        }, kt.createElement(ri, {
                            context: si,
                            onReplyClick: t.props.onReplyClick,
                            replyCommentContext: e
                        }), kt.createElement(yt._2, {
                            margin: {
                                left: .5
                            }
                        }, kt.createElement(yt.Q, {
                            color: yt.K.Alt2,
                            fontSize: yt.V.Size7,
                            type: yt._49.Span
                        }, " • " + Object(r.h)(e.comment.createdAt))))
                    }, t.makeReply = function(e) {
                        var n = null;
                        return t.props.isExpandedLayout && (n = t.makeReplyButtonAndRelativeTime(e)), kt.createElement("li", {
                            key: e.comment.id
                        }, kt.createElement(oi, {
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
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.replies.map(this.makeReply.bind(this));
                    return kt.createElement("ul", null, e)
                }, t
            }(kt.Component),
            ci = (n("PNnM"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = null;
                    !this.props.parentMessage.comment.moreReplies || this.props.isReplayFilterOn && !this.props.isExpandedLayout || (e = kt.createElement(yt._8, {
                        display: yt.R.InlineBlock,
                        className: "vod-message__show-more-replies"
                    }, kt.createElement(_t, {
                        onClick: this.props.onLoadMoreRepliesClick
                    })));
                    var t = null;
                    this.props.showReplyForm && (t = kt.createElement(yt._8, {
                        margin: {
                            top: .5,
                            bottom: 1,
                            x: 1
                        }
                    }, kt.createElement(ai, {
                        isCreationCoolDownActive: this.props.isCreationCoolDownActive || !1,
                        onError: this.props.onError,
                        onReplyFormClose: this.props.onReplyFormClose,
                        onReplySubmit: this.props.onReplySubmit,
                        replyToUserDisplayName: this.props.replyToUserDisplayName,
                        videoOwnerID: this.props.parentMessage.comment.channelId
                    })));
                    var n = null;
                    return this.props.isExpandedLayout && (n = kt.createElement(yt._8, {
                        alignItems: yt.c.Center,
                        display: yt.R.Flex
                    }, kt.createElement(ri, {
                        context: "vod-message",
                        onReplyClick: this.props.onReplyClick,
                        replyCommentContext: this.props.parentMessage
                    }), kt.createElement(yt._2, {
                        margin: {
                            left: .5
                        }
                    }, kt.createElement(yt.Q, {
                        color: yt.K.Alt2,
                        fontSize: yt.V.Size7,
                        type: yt._49.Span
                    }, " • " + Object(r.h)(this.props.parentMessage.comment.createdAt))))), kt.createElement(yt._8, null, n, kt.createElement(yt._8, {
                        margin: {
                            y: .5,
                            left: .5
                        },
                        className: _n("vod-message__reply", "qa-vod-chat-reply")
                    }, e, kt.createElement(li, {
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
            di = (n("WULK"), function(e) {
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
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = null;
                    (this.props.isExpandedLayout || this.props.messageContext.replies.length > 0 || this.state.showReplyForm) && (e = kt.createElement(ci, {
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
                    !1 === this.props.hideTimestamp && (t = kt.createElement(yt._8, {
                        className: "vod-message__header",
                        "data-test-selector": "message-timestamp",
                        display: yt.R.Flex,
                        flexShrink: 0,
                        textAlign: yt._45.Right
                    }, kt.createElement(Bn, {
                        offset: this.props.messageContext.comment.contentOffset,
                        onClick: this.onTimestampClickHandler
                    })));
                    var n, i = _n("vod-message", ((n = {})["vod-message--focused"] = this.shouldFocusMessage(), n)),
                        r = this.props.messageContext.comment.highlight || !1;
                    return kt.createElement(yt.e, {
                        duration: yt.g.Medium,
                        enabled: r,
                        type: yt.j.FadeIn
                    }, kt.createElement(yt._8, {
                        alignItems: yt.c.Start,
                        className: i,
                        "data-test-selector": "message-layout",
                        display: yt.R.Flex,
                        flexWrap: yt.U.NoWrap,
                        fullWidth: !0,
                        padding: {
                            y: .5,
                            left: this.props.hideTimestamp ? 2 : .5
                        },
                        refDelegate: this.refHandler
                    }, t, kt.createElement(yt._8, {
                        fullWidth: !0
                    }, kt.createElement(ii, {
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
            ui = (n("cPfx"), function(e) {
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
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.onMount()
                }, t.prototype.componentDidUpdate = function() {
                    this.preventScrolling = !0, this.props.isScrollingSynced && (this.preventScrolling = !1, this.componentInitiatedScroll = !0, this.commentListRef.scrollTop = this.commentListRef.scrollHeight)
                }, t.prototype.render = function() {
                    var e, t = _n("video-chat__message-list-wrapper", ((e = {})["video-chat__message-list-wrapper--unsynced"] = !this.props.isScrollingSynced, e)),
                        n = null;
                    return !1 === this.props.isScrollingSynced && (n = kt.createElement(yt._2, {
                        className: "video-chat__sync-button",
                        padding: {
                            x: 1
                        },
                        position: yt._15.Absolute,
                        attachBottom: !0
                    }, kt.createElement("button", {
                        onClick: this.syncButtonClick
                    }, Object(ae.d)("Resume auto scroll", "MessageScrollArea")))), kt.createElement(yt._35, {
                        fullHeight: !0,
                        overflow: yt._11.Hidden,
                        position: yt._15.Relative
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
            pi = (n("PeVI"), 5e3);
        var mi = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        commentAlreadyFocused: !1
                    }, t.badgeSets = new Sn.c([], [], ""), t.createComment = function(e) {
                        var n = {
                            contentId: t.props.videoID,
                            contentOffsetSeconds: t.props.currentVideoTime,
                            contentType: P,
                            message: e
                        };
                        t.onCreate(n)
                    }, t.createReply = function(e, n) {
                        var i = {
                            message: e,
                            parentId: n
                        };
                        t.onCreate(i)
                    }, t.onErrorDismissedHandler = function(e) {
                        t.props.onError("");
                        var n = t.props.errorMessage === oe().chatReplayFilterError;
                        e && t.props.shouldSendReplayFilterError && n && t.props.onErrorDismissClick()
                    }, t.onErrorMessageClickHandler = function() {
                        t.props.onError(""), t.props.onTurnOffReplayFilter()
                    }, t.onMessageScrollAreaMount = function() {
                        t.props.highlightedMessageID && "" !== t.props.highlightedMessageID && t.props.onDisableSync()
                    }, t.onError = function(e) {
                        t.props.onError(e)
                    }, t.onLoadMoreRepliesHandler = function(e, n) {
                        var i = t.props.data.video.owner.cheer && t.props.data.video.owner.cheer.emotes || [];
                        t.props.onLoadMoreReplies(e, t.props.replyCursorMap, n, Object(bn.a)(i))
                    }, t.focusedCommentCallback = function(e) {
                        t.setState({
                            commentToFocus: e
                        })
                    }, t.startUnfocusTimeout = function() {
                        t.focusTimer = setTimeout(function() {
                            t.setState({
                                commentAlreadyFocused: !0
                            })
                        }, pi)
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentWillMount = function() {
                    this.props.onWillMount()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    void 0 !== e.highlightedMessageID && this.props.highlightedMessageID !== e.highlightedMessageID && (this.props.onPlayerSeekRequest(e.highlightTimestamp), this.props.onDisableSync(), this.setState({
                            commentAlreadyFocused: !1
                        })),
                        function(e, t) {
                            return !(t.data.loading || t.data.error || t.data.badges === e.data.badges && t.data.video.owner === e.data.video.owner)
                        }(this.props, e) && (this.badgeSets = new Sn.c([], [], ""), e.data.loading || e.data.error || (this.badgeSets = new Sn.c(e.data.badges, e.data.video.owner.broadcastBadges, e.data.video.owner.login))), (0, this.props.onUpdateBegan)(e, this.props)
                }, t.prototype.componentDidUpdate = function() {
                    (this.props.data.loading || this.props.data.error || !this.props.hasFetchedComments || this.props.latencyTracking.reportInteractive(), this.state.commentToFocus) && ((this.state.commentToFocus.nextElementSibling || this.state.commentToFocus).scrollIntoView(!0), this.setState({
                        commentToFocus: void 0
                    }), this.startUnfocusTimeout())
                }, t.prototype.componentWillUnmount = function() {
                    clearTimeout(this.focusTimer), this.props.latencyTracking.reportInteractive(), this.props.onUnmount(), this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e, t, n = this,
                        i = this.props,
                        r = i.comments,
                        a = i.highlightedMessageID,
                        o = i.data;
                    if (this.props.data.loading) e = kt.createElement(yt._10, {
                        fillContent: !0
                    });
                    else if (this.props.data.error) e = kt.createElement(yt._8, {
                        alignItems: yt.c.Center,
                        "data-test-selector": "video-chat-error",
                        fullHeight: !0,
                        justifyContent: yt._7.Center
                    }, kt.createElement(yt.Q, {
                        italic: !0
                    }, Object(ae.d)("Video Chat is currently unavailable.", "VideoChat")));
                    else {
                        var s = void 0;
                        s = this.props.hasFetchedComments && this.props.offsetRange === Ye ? kt.createElement(yt._2, {
                            display: yt.R.Flex,
                            margin: {
                                x: 1,
                                top: 2,
                                bottom: 1
                            },
                            alignItems: yt.c.Center
                        }, kt.createElement("li", {
                            "data-test-selector": "no-comments-cta"
                        }, kt.createElement(yt._2, {
                            margin: {
                                right: 1
                            }
                        }, kt.createElement("img", {
                            src: (t = 65, "https://static-cdn.jtvnw.net/emoticons/v1/" + t + "/1.0"),
                            srcSet: function(e) {
                                return "https://static-cdn.jtvnw.net/emoticons/v1/" + e + "/2.0 2x"
                            }(65)
                        })), Object(ae.d)("Join the chat while watching the video!", "VideoChatComponent"))) : r.map(function(e, t) {
                            var i = !n.state.commentAlreadyFocused && e.comment.id === a,
                                r = t + 1 === n.props.comments.length,
                                s = !n.props.isScrollingSynced && r;
                            return kt.createElement(yt._2, {
                                padding: s ? {
                                    bottom: 4
                                } : {},
                                key: e.comment.id,
                                fullWidth: !0
                            }, kt.createElement("li", null, kt.createElement(di, {
                                badgeSets: n.badgeSets,
                                currentUser: o.currentUser,
                                focus: i,
                                isCreationCoolDownActive: n.props.isCreationCoolDownActive,
                                isCurrentUserModerator: n.props.isCurrentUserModerator,
                                isExpandedLayout: o.video.broadcastType === qe.a.Upload,
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
                    var l, c = void 0 === this.props.highlightedMessageID,
                        d = null;
                    return "" !== this.props.errorMessage && (d = kt.createElement(En, {
                        message: this.props.errorMessage,
                        onErrorDismissed: this.onErrorDismissedHandler,
                        onMessageClick: this.onErrorMessageClickHandler
                    })), l = this.props.data.loading || this.props.data.error ? kt.createElement(yt._14, {
                        "data-test-selector": "message-input-placeholder",
                        height: 90,
                        width: 340
                    }) : kt.createElement(Hn, {
                        currentUser: this.props.data.currentUser,
                        currentVideoTime: this.props.currentVideoTime,
                        onError: this.onError,
                        isModerator: !!this.props.data.video.owner.self && this.props.data.video.owner.self.isModerator,
                        isReplayMode: this.props.isReplayFilterOn,
                        isScrollingSynced: this.props.isScrollingSynced,
                        isPostCooldownActive: this.props.isCreationCoolDownActive,
                        isUpload: o.video.broadcastType === qe.a.Upload,
                        onCreateComment: this.createComment,
                        onScrollPause: this.props.onDisableSync,
                        onScrollResume: this.props.onEnableSync,
                        videoOwnerID: this.props.data.video.owner.id,
                        videoOwnerLogin: this.props.data.video.owner.login
                    }), kt.createElement(yt._35, {
                        className: _n("video-chat", "qa-vod-chat"),
                        display: yt.R.Flex,
                        background: yt.n.Alt2,
                        borderLeft: !0,
                        color: yt.K.Alt,
                        flexDirection: yt.T.Column,
                        flexShrink: 0,
                        flexWrap: yt.U.NoWrap,
                        fullHeight: !0,
                        fullWidth: !0,
                        position: yt._15.Relative
                    }, kt.createElement(yt._8, {
                        alignItems: yt.c.Center,
                        className: "video-chat__header",
                        display: yt.R.Flex,
                        flexShrink: 0,
                        justifyContent: yt._7.Center
                    }, kt.createElement(yt.Q, {
                        type: yt._49.Span
                    }, Object(ae.d)("Chat on Videos", "VideoChatPresentation"))), d, kt.createElement(ui, {
                        startSynced: c,
                        isScrollingSynced: this.props.isScrollingSynced,
                        onScrollOffBottom: this.props.onDisableSync,
                        onScrollBottom: this.props.onEnableSync,
                        onMount: this.onMessageScrollAreaMount,
                        onSyncScrollClick: this.props.onEnableSync
                    }, kt.createElement(yt._8, {
                        display: yt.R.Flex,
                        flexDirection: yt.T.Column,
                        fullHeight: !0,
                        justifyContent: yt._7.End
                    }, kt.createElement(yt._2, {
                        display: yt.R.Flex,
                        flexWrap: yt.U.Wrap,
                        alignItems: yt.c.End,
                        fullWidth: !0
                    }, e))), kt.createElement(yt._8, {
                        className: "video-chat__input",
                        padding: {
                            top: 1,
                            bottom: 2,
                            x: 2
                        },
                        flexShrink: 0,
                        fullWidth: !0
                    }, l))
                }, t.prototype.onCreate = function(e) {
                    this.props.isLoggedIn ? this.props.onCreate(e) : this.props.onShowLogin()
                }, t
            }(kt.Component),
            hi = Object(Cn.d)("VideoChat")(mi),
            gi = n("0TFF"),
            fi = 2;
        var vi = Object(fn.b)(function(e, t) {
                var n = {
                    comments: [],
                    currentVideoTime: e.vodChat.comments.currentVideoTime,
                    cursor: e.vodChat.comments.cursor,
                    errorMessage: e.vodChat.comments.errorMessage,
                    hasFetchedComments: e.vodChat.comments.hasLoadedData,
                    hasRequestedCurrentUserBlockList: e.vodChat.comments.hasLoadedCurrentUserBlockedList,
                    isCreationCoolDownActive: e.vodChat.comments.isPostCooldownActive,
                    isCurrentUserModerator: !1,
                    isLoggedIn: Object(vn.d)(e),
                    isReplayFilterOn: e.vodChat.comments.isReplayFilterOn,
                    isScrollingSynced: e.vodChat.comments.isScrollingSynced,
                    offsetRange: it(e.vodChat.comments.comments),
                    replyCursorMap: e.vodChat.comments.replyCursorMap,
                    shouldSendReplayFilterError: !1,
                    hideTimestamps: e.vodChat.comments.hideTimestamps,
                    videoID: t.videoID
                };
                if (void 0 !== t.highlightedMessageID && (n.highlightedMessageID = t.highlightedMessageID), void 0 !== t.highlightTimestamp && (n.highlightTimestamp = t.highlightTimestamp), !t.data.loading && !t.data.error) {
                    var i = t.data,
                        r = i.currentUser,
                        a = i.video;
                    null !== r && r.roles && (n.isCurrentUserModerator = function(e, t) {
                        var n = e.id === t.id,
                            i = e.roles.isGlobalMod || e.roles.isSiteAdmin || e.roles.isStaff;
                        return !!t.self && t.self.isModerator || i || n
                    }(r, a.owner)), n.comments = Je(e, t.data.video.broadcastType, n.isCurrentUserModerator, t.blockedUsers), n.shouldSendReplayFilterError = yn(e.vodChat.comments.isReplayFilterOn, t.data.video.broadcastType !== qe.a.Upload, e.vodChat.comments.hasDismissedChatReplayError)
                }
                return n
            }, function(e, t) {
                return {
                    onUpdateBegan: function(n, i) {
                        if (i.videoID === n.videoID) {
                            if (!n.hasFetchedComments) {
                                var r = {
                                    bitsConfig: t.bitsConfig,
                                    offset: n.currentVideoTime,
                                    videoID: n.videoID
                                };
                                if (n.highlightTimestamp && n.currentVideoTime !== n.highlightTimestamp) return;
                                return n.highlightedMessageID && (r.highlightedMessageID = n.highlightedMessageID), void e(vt(zt, r))
                            }
                            if (n.offsetRange !== Ye) {
                                if (st((l = {
                                        cursor: n.cursor,
                                        currentVideoTime: n.currentVideoTime,
                                        offsetEndTime: n.offsetRange.endSec,
                                        offsetThreshold: fi
                                    }).cursor) && function(e) {
                                        var t = e.offsetEndTime - e.offsetThreshold;
                                        return e.currentVideoTime >= t && e.currentVideoTime <= e.offsetEndTime
                                    }({
                                        currentVideoTime: l.currentVideoTime,
                                        offsetEndTime: l.offsetEndTime,
                                        offsetThreshold: l.offsetThreshold
                                    })) return void e(vt(zt, {
                                    bitsConfig: t.bitsConfig,
                                    cursor: n.cursor.future,
                                    videoID: n.videoID
                                }));
                                if (o = (a = n).currentVideoTime < a.offsetRange.beginSec, s = a.currentVideoTime > a.offsetRange.endSec, o && lt(a.cursor) || s && st(a.cursor)) return void e(vt(zt, {
                                    bitsConfig: t.bitsConfig,
                                    offset: n.currentVideoTime,
                                    videoID: n.videoID
                                }))
                            }
                            var a, o, s, l
                        } else e(U(n.videoID))
                    },
                    onCreate: function(t) {
                        if (Object(kn.m)(t.message)) {
                            var n = Object(ae.d)("Sorry, commands are not supported in Chat on Videos yet.", "VideoChatPresentation");
                            e(g(n))
                        } else e(vt(Gt, t)), e(bt(Zt, t))
                    },
                    onError: function(t) {
                        e(g(t))
                    },
                    onErrorDismissClick: function() {
                        e(I())
                    },
                    onUnmount: function() {
                        e(_())
                    },
                    onLoadMoreReplies: function(t, n, i, r) {
                        e(vt(zt, ot(t, n, i, r)))
                    },
                    onDisableSync: function() {
                        e(O())
                    },
                    onEnableSync: function() {
                        e(w())
                    },
                    onShowLogin: t.onShowLogin,
                    onBanUser: function(t) {
                        e(vt(gt, t)), e(bt(Jt, t))
                    },
                    onDeleteComment: function(t) {
                        e(vt(qt, t)), e(bt($t, t))
                    },
                    onPlayerSeekRequest: function(n, i) {
                        t.onPlayerSeekRequest(n), void 0 !== i && e(bt(en, i))
                    },
                    onTurnOffReplayFilter: function() {
                        e(T(!1))
                    },
                    onWillMount: function() {
                        e(L())
                    }
                }
            }, function(e, t, n) {
                var i = t.onDisableSync;
                e.isScrollingSynced || (i = function() {});
                var r = t.onCreate;
                return e.shouldSendReplayFilterError && (r = function(e) {
                    t.onError(oe().chatReplayFilterError), t.onCreate(e)
                }), a.__assign({}, e, t, {
                    onDisableSync: i,
                    onCreate: r,
                    data: n.data
                })
            })(hi),
            bi = Object(gn.graphql)(gi, {
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
                        i = Object(bn.a)(n && !n.loading && !n.error && n.video.owner.cheer && n.video.owner.cheer.emotes || []),
                        r = {};
                    return n && !n.loading && !n.error && n.currentUser && n.currentUser.blockedUsers && (r = n.currentUser.blockedUsers.reduce(function(e, t) {
                        return t && (e[t.id] = !0), e
                    }, {})), a.__assign({}, t, {
                        data: n,
                        bitsConfig: i,
                        blockedUsers: r
                    })
                }
            })(vi);
        n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {
            return ye
        }), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, "A", function() {
            return $e
        }), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, "o", function() {
            return _
        }), n.d(t, "q", function() {
            return j
        }), n.d(t, "u", function() {
            return st
        }), n.d(t, "v", function() {
            return lt
        }), n.d(t, "n", function() {
            return ot
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
            return _t
        }), n.d(t, "p", function() {
            return Gt
        }), n.d(t, "r", function() {
            return qt
        }), n.d(t, "y", function() {
            return zt
        }), n.d(t, "H", function() {
            return Kt
        }), n.d(t, "D", function() {
            return Jt
        }), n.d(t, "E", function() {
            return Zt
        }), n.d(t, "F", function() {
            return $t
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
            return dn
        }), n.d(t, "t", function() {
            return Ke
        }), n.d(t, "s", function() {
            return hn
        }), n.d(t, "f", function() {
            return "mod-dashboard"
        }), n.d(t, "g", function() {
            return "mod-comment"
        }), n.d(t, "l", function() {
            return bi
        }), n.d(t, !1, function() {}), n.d(t, "j", function() {
            return ai
        }), n.d(t, "i", function() {
            return ri
        })
    },
    mSFb: function(e, t) {
        e.exports = function() {
            var e = new Date,
                t = e.getFullYear(),
                n = e.getMonth(),
                i = e.getDate(),
                r = new Date(0);
            return r.setFullYear(t, n, i - 1), r.setHours(0, 0, 0, 0), r
        }
    },
    mXYp: function(e, t, n) {
        var i = n("YRFD"),
            r = n("xA5w"),
            a = n("25hp"),
            o = n("GI7G"),
            s = n("uyaC"),
            l = 1440,
            c = 2520,
            d = 43200,
            u = 86400;
        e.exports = function(e, t, n) {
            var p = n || {},
                m = i(e, t),
                h = p.locale,
                g = s.distanceInWords.localize;
            h && h.distanceInWords && h.distanceInWords.localize && (g = h.distanceInWords.localize);
            var f, v, b = {
                addSuffix: Boolean(p.addSuffix),
                comparison: m
            };
            m > 0 ? (f = r(e), v = r(t)) : (f = r(t), v = r(e));
            var k, y = a(v, f),
                _ = v.getTimezoneOffset() - f.getTimezoneOffset(),
                S = Math.round(y / 60) - _;
            if (S < 2) return p.includeSeconds ? y < 5 ? g("lessThanXSeconds", 5, b) : y < 10 ? g("lessThanXSeconds", 10, b) : y < 20 ? g("lessThanXSeconds", 20, b) : y < 40 ? g("halfAMinute", null, b) : g(y < 60 ? "lessThanXMinutes" : "xMinutes", 1, b) : 0 === S ? g("lessThanXMinutes", 1, b) : g("xMinutes", S, b);
            if (S < 45) return g("xMinutes", S, b);
            if (S < 90) return g("aboutXHours", 1, b);
            if (S < l) return g("aboutXHours", Math.round(S / 60), b);
            if (S < c) return g("xDays", 1, b);
            if (S < d) return g("xDays", Math.round(S / l), b);
            if (S < u) return g("aboutXMonths", k = Math.round(S / d), b);
            if ((k = o(v, f)) < 12) return g("xMonths", Math.round(S / d), b);
            var C = k % 12,
                w = Math.floor(k / 12);
            return C < 3 ? g("aboutXYears", w, b) : C < 9 ? g("overXYears", w, b) : g("almostXYears", w + 1, b)
        }
    },
    mbxv: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            r = n("GiK3"),
            a = n("+V/3"),
            o = n("Odds"),
            s = (n("2IkU"), n("6sO2")),
            l = n("vH/s"),
            c = function(e) {
                var t = Date.now() / 1e3;
                e.badge_type = e.badge_type.toLowerCase().replace(/( |\s)/g, "_"), s.o.tracking.track(l.SpadeEventType.ChatBadgeClick, Object.assign({
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
                    c({
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
                }, l)), this.state.isHovering ? r.createElement(o._52, {
                    align: o._53.Left,
                    "data-a-target": "chat-badge",
                    display: o.R.Inline,
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
    n2E0: function(e, t, n) {
        "use strict";
        t.b = function(e) {
            switch (e) {
                case i.a.Archive:
                    return r.SpadeVideoBroadcastType.Archive;
                case i.a.Highlight:
                    return r.SpadeVideoBroadcastType.Highlight;
                case i.a.Upload:
                    return r.SpadeVideoBroadcastType.Upload;
                case i.a.WatchParty:
                    return r.SpadeVideoBroadcastType.WatchParty;
                case i.a.PastPremiere:
                    return r.SpadeVideoBroadcastType.PastPremiere;
                case i.a.PremiereUpload:
                    return r.SpadeVideoBroadcastType.PremiereUpload;
                default:
                    var t = e;
                    return t
            }
        }, t.a = function(e) {
            switch (e) {
                case a.b:
                    return r.PageviewContent.PopularVideos;
                case a.a:
                    return r.PageviewContent.RecentVideos;
                default:
                    var t = e;
                    return t
            }
        };
        var i = n("6WAQ"),
            r = n("vH/s"),
            a = n("3yQz")
    },
    nUXg: function(e, t) {},
    nZeo: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e) {
            return i(e).getFullYear()
        }
    },
    nfOx: function(e, t, n) {
        var i = n("6Zhv");
        e.exports = function(e, t) {
            var n = Number(t);
            return i(e, 1e3 * n)
        }
    },
    nizW: function(e, t, n) {
        var i = n("WNGz"),
            r = 6e4,
            a = 864e5;
        e.exports = function(e, t) {
            var n = i(e),
                o = i(t),
                s = n.getTime() - n.getTimezoneOffset() * r,
                l = o.getTime() - o.getTimezoneOffset() * r;
            return Math.round((s - l) / a)
        }
    },
    nk30: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e, t) {
            var n = t && Number(t.weekStartsOn) || 0,
                r = i(e),
                a = r.getDay(),
                o = 6 + (a < n ? -7 : 0) - (a - n);
            return r.setHours(0, 0, 0, 0), r.setDate(r.getDate() + o), r
        }
    },
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
    "o/V0": function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return p
        });
        var i, r = n("TToO"),
            a = n("GiK3"),
            o = (n.n(a), n("6sO2")),
            s = n("vKFS"),
            l = n("CSlQ"),
            c = n("GJxf"),
            d = n("Odds");
        ! function(e) {
            e.Metadata = "collection-metadata", e.PlayAllButton = "play-all-button", e.Title = "collection-title"
        }(i || (i = {}));
        var u = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.collection,
                        t = this.getCollectionVideos();
                    return t && 0 === t.length ? null : a.createElement(a.Fragment, null, this.renderCarouselHeader(), a.createElement(d._8, {
                        padding: {
                            top: .5
                        }
                    }, a.createElement(c.a, {
                        collectionID: e ? e.id : void 0,
                        listContext: s.b.SingleChannelList,
                        tracking: {
                            content: this.props.tracking.content,
                            medium: this.props.tracking.medium,
                            location: this.props.tracking.location,
                            source: this.props.tracking.source
                        },
                        videos: t
                    })))
                }, t.prototype.renderCarouselHeader = function() {
                    var e = this.props.collection;
                    return e ? a.createElement(d._8, null, a.createElement(d._8, {
                        display: d.R.Flex,
                        flexDirection: d.T.Row
                    }, a.createElement(d._8, {
                        margin: {
                            right: 1
                        }
                    }, a.createElement(d.Q, {
                        type: d._49.H3,
                        "data-test-selector": i.Title
                    }, e.title || this.props.fallbackTitle || "")), a.createElement(d.v, {
                        type: d.B.Hollow,
                        size: d.z.Small,
                        icon: d._25.Play,
                        linkTo: "/collections/" + e.id,
                        "data-test-selector": i.PlayAllButton
                    }, Object(o.d)("Play all", "LatestCollectionCarousel"))), a.createElement(d.Q, {
                        color: d.K.Alt2,
                        type: d._49.Span,
                        "data-test-selector": i.Metadata
                    }, this.renderSubTitle(e))) : a.createElement(d._14, {
                        width: 250,
                        lineCount: 1
                    })
                }, t.prototype.renderSubTitle = function(e) {
                    var t = e.items ? e.items.totalCount : 0,
                        n = Object(o.d)("{videoCountText, plural, one {# video} other {# videos}}", {
                            videoCountText: t
                        }, "LatestCollectionCarousel");
                    return this.props.subTitle ? a.createElement(a.Fragment, null, this.props.subTitle, " · ", n) : n
                }, t.prototype.getCollectionVideos = function() {
                    var e = this.props.collection;
                    if (!e) return null;
                    var t = [];
                    return e.items.edges.forEach(function(e) {
                        e && "" !== e.node.id && t.push(e.node)
                    }), t
                }, t
            }(a.Component),
            p = Object(l.d)("CollectionCarousel", {
                autoReportInteractive: !0
            })(u)
    },
    oNnY: function(e, t, n) {
        var i = n("zZbG"),
            r = n("Uu+E");
        e.exports = function(e, t) {
            var n = Number(t);
            return r(e, i(e) + n)
        }
    },
    oke8: function(e, t, n) {
        var i = n("1rLR");
        e.exports = function(e, t) {
            var n = Number(t);
            return i(e, -n)
        }
    },
    orNa: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e, t) {
            var n = i(e),
                r = i(t);
            return 12 * (n.getFullYear() - r.getFullYear()) + (n.getMonth() - r.getMonth())
        }
    },
    pXt7: function(e, t, n) {
        var i = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "PopularVideosByGameCarousel_Game"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "gameName"
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
                            value: "game"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "name"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "gameName"
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
                                        value: "30"
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "sort"
                                    },
                                    value: {
                                        kind: "EnumValue",
                                        value: "VIEWS"
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
                end: 250
            }
        };
        i.loc.source = {
            body: '#import "twilight/features/video-preview-card/models/preview-card-video-fragment.gql"\nquery PopularVideosByGameCarousel_Game($gameName: String!) {\ngame(name: $gameName) {\nid\nvideos(first: 30 sort: VIEWS) {\nedges {\nnode {\n...PreviewCardVideo\n}\n}\n}\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var r = {};
        i.definitions = i.definitions.concat(n("qjMx").definitions.filter(function(e) {
            if ("FragmentDefinition" !== e.kind) return !0;
            var t = e.name.value;
            return !r[t] && (r[t] = !0, !0)
        })), e.exports = i
    },
    pe7V: function(e, t, n) {
        var i = n("8KV+");
        e.exports = function(e, t) {
            return i(new Date, e, t)
        }
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
        var i = {
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
        i.loc.source = {
            body: '#import "twilight/features/badges/models/badge-fragment.gql"\nquery ChatSettings_CurrentUser($channelLogin: String!) {\ncurrentUser {\nid\nlogin\ndisplayName\nchatColor\n}\nuser(login: $channelLogin) {\nid\nself {\ndisplayBadges {\n...badge\n}\n}\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var r = {};
        i.definitions = i.definitions.concat(n("QU+n").definitions.filter(function(e) {
            if ("FragmentDefinition" !== e.kind) return !0;
            var t = e.name.value;
            return !r[t] && (r[t] = !0, !0)
        })), e.exports = i
    },
    pqU3: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        }), n.d(t, "c", function() {
            return r
        }), n.d(t, "b", function() {
            return a
        }), t.d = function(e) {
            return {
                type: a,
                leagueOfLegendsChampionsErrored: e
            }
        }, t.e = function(e) {
            return {
                type: r,
                leagueOfLegendsChampionsLoading: e
            }
        }, t.f = function(e) {
            var t = {},
                n = e.data;
            for (var r in n) n.hasOwnProperty(r) && (t[n[r].id] = n[r]);
            return {
                type: i,
                apiData: e,
                championsMap: t,
                apiVersion: e.version
            }
        };
        var i = "directory.LOL_CHAMPIONS_CHANGED",
            r = "directory.LOL_CHAMPIONS_LOADING",
            a = "directory.LOL_CHAMPIONS_ERRORED"
    },
    pwi9: function(e, t, n) {
        var i = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "RecommendedVideoCarousel_CurrentUser"
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
                                    value: "login"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "recommendations"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
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
                                                value: "30"
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
                end: 238
            }
        };
        i.loc.source = {
            body: '#import "twilight/features/video-preview-card/models/preview-card-video-fragment.gql"\nquery RecommendedVideoCarousel_CurrentUser {\ncurrentUser {\nid\nlogin\nrecommendations {\nvideos(first: 30) {\nedges {\nnode {\n...PreviewCardVideo\n}\n}\n}\n}\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var r = {};
        i.definitions = i.definitions.concat(n("qjMx").definitions.filter(function(e) {
            if ("FragmentDefinition" !== e.kind) return !0;
            var t = e.name.value;
            return !r[t] && (r[t] = !0, !0)
        })), e.exports = i
    },
    qNYo: function(e, t, n) {
        var i = n("xA5w"),
            r = n("9Jn5"),
            a = n("NKE6"),
            o = n("MKc+");
        e.exports = function(e, t) {
            var n = i(e),
                s = i(t),
                l = a(n, s),
                c = Math.abs(r(n, s));
            return n = o(n, l * c), l * (c - (a(n, s) === -l))
        }
    },
    qPxx: function(e, t, n) {
        var i = n("LLTj");
        e.exports = function(e, t) {
            var n = i(e),
                r = i(t);
            return n.getTime() === r.getTime()
        }
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
                                    value: "isRestricted"
                                },
                                arguments: [],
                                directives: []
                            }, {
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
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "restriction"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "productName"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "productTitle"
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
                end: 356
            }
        };
        n.loc.source = {
            body: "fragment PreviewCardVideo on Video {\nanimatedPreviewURL\ngame {\nboxArtURL(width: 40 height: 56)\nid\ndisplayName\nname\n}\nid\nlengthSeconds\nowner {\ndisplayName\nid\nlogin\nprofileImageURL(width: 50)\n}\npreviewThumbnailURL(width: 320 height: 180)\npublishedAt\nself {\nisRestricted\nviewingHistory {\nposition\n}\n}\ntitle\nviewCount\nrestriction {\nproductName\nproductTitle\n}\n}",
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
            return r
        }), n.d(t, "e", function() {
            return a
        }), n.d(t, "a", function() {
            return o
        });
        var i, r, a, o, s = n("aMxy");
        n.o(s, "ModerationActions") && n.d(t, "d", function() {
                return s.ModerationActions
            }),
            function(e) {
                e[e.Message = 0] = "Message", e[e.Moderation = 1] = "Moderation", e[e.ModerationAction = 2] = "ModerationAction", e[e.TargetedModerationAction = 3] = "TargetedModerationAction", e[e.AutoMod = 4] = "AutoMod", e[e.Connected = 5] = "Connected", e[e.Disconnected = 6] = "Disconnected", e[e.Reconnect = 7] = "Reconnect", e[e.Hosting = 8] = "Hosting", e[e.Unhost = 9] = "Unhost", e[e.Hosted = 10] = "Hosted", e[e.Subscription = 11] = "Subscription", e[e.Resubscription = 12] = "Resubscription", e[e.SubGift = 13] = "SubGift", e[e.Clear = 14] = "Clear", e[e.SubscriberOnlyMode = 15] = "SubscriberOnlyMode", e[e.FollowerOnlyMode = 16] = "FollowerOnlyMode", e[e.SlowMode = 17] = "SlowMode", e[e.EmoteOnlyMode = 18] = "EmoteOnlyMode", e[e.RoomMods = 19] = "RoomMods", e[e.RoomState = 20] = "RoomState", e[e.Raid = 21] = "Raid", e[e.Unraid = 22] = "Unraid", e[e.Ritual = 23] = "Ritual", e[e.Notice = 24] = "Notice", e[e.Info = 25] = "Info", e[e.BadgesUpdated = 26] = "BadgesUpdated", e[e.Purchase = 27] = "Purchase", e[e.BitsCharity = 28] = "BitsCharity", e[e.CrateGift = 29] = "CrateGift", e[e.RewardGift = 30] = "RewardGift"
            }(i || (i = {})),
            function(e) {
                e[e.Post = 0] = "Post", e[e.Action = 1] = "Action", e[e.PostWithMention = 2] = "PostWithMention"
            }(r || (r = {})),
            function(e) {
                e[e.Ban = 0] = "Ban", e[e.Timeout = 1] = "Timeout"
            }(a || (a = {})),
            function(e) {
                e[e.MessageRejectedPrompt = 0] = "MessageRejectedPrompt", e[e.MessageRejected = 1] = "MessageRejected", e[e.MessageAllowed = 2] = "MessageAllowed", e[e.MessageDenied = 3] = "MessageDenied"
            }(o || (o = {}))
    },
    rBmI: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e) {
            var t = i(e),
                n = t.getMonth(),
                r = n - n % 3;
            return t.setMonth(r, 1), t.setHours(0, 0, 0, 0), t
        }
    },
    rO5X: function(e, t, n) {
        var i = n("xA5w"),
            r = n("Bb5e"),
            a = n("NKE6");
        e.exports = function(e, t) {
            var n = i(e),
                o = i(t),
                s = a(n, o),
                l = Math.abs(r(n, o));
            return n.setFullYear(n.getFullYear() - s * l), s * (l - (a(n, o) === -s))
        }
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
    sJBK: function(e, t, n) {
        "use strict";
        var i;
        n.d(t, "a", function() {
                return i
            }),
            function(e) {
                e[e.Collection = 0] = "Collection", e[e.Video = 1] = "Video"
            }(i || (i = {}))
    },
    sZED: function(e, t) {},
    sdTe: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e, t) {
            var n = i(e),
                r = i(t);
            return n.getTime() === r.getTime()
        }
    },
    smiM: function(e, t) {},
    t6pj: function(e, t, n) {
        var i = n("YRFD"),
            r = n("xA5w"),
            a = n("25hp"),
            o = n("uyaC"),
            s = 1440,
            l = 43200,
            c = 525600;
        e.exports = function(e, t, n) {
            var d = n || {},
                u = i(e, t),
                p = d.locale,
                m = o.distanceInWords.localize;
            p && p.distanceInWords && p.distanceInWords.localize && (m = p.distanceInWords.localize);
            var h, g, f, v = {
                addSuffix: Boolean(d.addSuffix),
                comparison: u
            };
            u > 0 ? (h = r(e), g = r(t)) : (h = r(t), g = r(e));
            var b = Math[d.partialMethod ? String(d.partialMethod) : "floor"],
                k = a(g, h),
                y = g.getTimezoneOffset() - h.getTimezoneOffset(),
                _ = b(k / 60) - y;
            if ("s" === (f = d.unit ? String(d.unit) : _ < 1 ? "s" : _ < 60 ? "m" : _ < s ? "h" : _ < l ? "d" : _ < c ? "M" : "Y")) return m("xSeconds", k, v);
            if ("m" === f) return m("xMinutes", _, v);
            if ("h" === f) return m("xHours", b(_ / 60), v);
            if ("d" === f) return m("xDays", b(_ / s), v);
            if ("M" === f) return m("xMonths", b(_ / l), v);
            if ("Y" === f) return m("xYears", b(_ / c), v);
            throw new Error("Unknown unit: " + f)
        }
    },
    t8zS: function(e, t, n) {
        var i = n("nk30");
        e.exports = function(e) {
            return i(e, {
                weekStartsOn: 1
            })
        }
    },
    tKvs: function(e, t, n) {
        var i = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "PopularVideosCarousel_Videos"
                },
                variableDefinitions: [],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
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
                                value: "30"
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
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 185
            }
        };
        i.loc.source = {
            body: '#import "twilight/features/video-preview-card/models/preview-card-video-fragment.gql"\nquery PopularVideosCarousel_Videos {\nvideos(first: 30) {\nedges {\nnode {\n...PreviewCardVideo\n}\n}\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var r = {};
        i.definitions = i.definitions.concat(n("qjMx").definitions.filter(function(e) {
            if ("FragmentDefinition" !== e.kind) return !0;
            var t = e.name.value;
            return !r[t] && (r[t] = !0, !0)
        })), e.exports = i
    },
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
    "u/4p": function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e, t) {
            var n = t && Number(t.weekStartsOn) || 0,
                r = i(e),
                a = r.getDay(),
                o = (a < n ? 7 : 0) + a - n;
            return r.setDate(r.getDate() - o), r.setHours(0, 0, 0, 0), r
        }
    },
    uDgl: function(e, t, n) {
        var i = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "PreviewCollection"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "Collection"
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
                            value: "updatedAt"
                        },
                        arguments: [],
                        directives: []
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 228
            }
        };
        i.loc.source = {
            body: '#import "twilight/features/video-preview-card/models/preview-card-video-fragment.gql"\nfragment PreviewCollection on Collection {\nid\nitems {\ntotalCount\nedges {\nnode {\n...PreviewCardVideo\n}\n}\n}\nowner {\nid\nlogin\n}\ntitle\nupdatedAt\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var r = {};
        i.definitions = i.definitions.concat(n("qjMx").definitions.filter(function(e) {
            if ("FragmentDefinition" !== e.kind) return !0;
            var t = e.name.value;
            return !r[t] && (r[t] = !0, !0)
        })), e.exports = i
    },
    uiPj: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n("RH2O"),
            r = n("2KeS"),
            a = n("+xm8"),
            o = n("f2i/"),
            s = n("m9YJ"),
            l = n("TToO"),
            c = n("HW6M"),
            d = n("OAwv"),
            u = n("GiK3"),
            p = n("3zLD"),
            m = n("6sO2"),
            h = n("yWCw"),
            g = n("j7/Y"),
            f = n("NXs7"),
            v = n("vKBL"),
            b = n("VAT8");
        var k = n("JpYe"),
            y = n("w9tK"),
            _ = n("vH/s"),
            S = n("n2E0"),
            C = n("SI0h"),
            w = n("CSlQ"),
            E = n("BC6Q"),
            O = n("RxMT"),
            D = n("fc0G"),
            T = n("Ic9h"),
            N = n("fTsm"),
            I = n("/nNw"),
            x = n("7tMz"),
            M = n("WzS7"),
            R = n("Odds"),
            L = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    if (!this.props.firstPageLoaded) return null;
                    var e = this.props,
                        t = e.currentGameName,
                        n = e.currentVideoID;
                    return u.createElement(R._8, {
                        padding: {
                            y: 2
                        }
                    }, u.createElement(M.e, {
                        currentlyWatchingVideoID: n,
                        tracking: {
                            medium: this.props.tracking.medium,
                            location: this.props.tracking.location
                        }
                    }), u.createElement(M.b, {
                        currentlyWatchingVideoID: n,
                        gameName: t,
                        noGameSpecified: "" === t,
                        tracking: {
                            medium: this.props.tracking.medium,
                            location: this.props.tracking.location
                        }
                    }), this.recentVideosFromCreatorCarousel(), u.createElement(M.f, {
                        currentlyWatchingVideoID: n,
                        tracking: {
                            medium: this.props.tracking.medium,
                            location: this.props.tracking.location
                        }
                    }))
                }, t.prototype.recentVideosFromCreatorCarousel = function() {
                    return this.props.creator ? u.createElement(M.d, {
                        currentlyWatchingVideoID: this.props.currentVideoID,
                        creatorDisplayName: this.props.creator.displayName,
                        creatorID: this.props.creator.id,
                        tracking: {
                            medium: this.props.tracking.medium,
                            location: this.props.tracking.location
                        }
                    }) : null
                }, t
            }(u.Component),
            A = Object(p.compose)(Object(x.a)("BelowFoldRecommendations"))(L);
        var F = Object(i.b)(function(e) {
                return {
                    firstPageLoaded: e.session.firstPageLoaded
                }
            })(A),
            V = n("F8kA"),
            U = (n("sZED"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    return u.createElement(R._8, {
                        "data-test-selector": "private-video-banner-layout"
                    }, this.renderHeader())
                }, t.prototype.renderHeader = function() {
                    var e = this;
                    return u.createElement(R.e, {
                        type: R.j.SlideInBottom,
                        delay: R.f.Medium,
                        duration: R.g.Medium,
                        enabled: !0
                    }, u.createElement(R._35, {
                        className: "private-video-banner__header",
                        display: R.R.Flex,
                        background: R.n.AccentAlt2,
                        color: R.K.Overlay,
                        alignItems: R.c.Center,
                        padding: {
                            x: 1,
                            y: .5
                        },
                        fontSize: R.V.Size6,
                        "data-test-selector": "private-video-banner-header"
                    }, u.createElement(R._8, {
                        display: R.R.Flex,
                        alignItems: R.c.Center,
                        justifyContent: R._7.Center
                    }, u.createElement(R._24, {
                        asset: R._25.Lock,
                        width: 20,
                        height: 20
                    })), u.createElement(R.Q, null, Object(m.d)("This video is private. To Premiere or edit your video, visit your <x:link>video manager</x:link>", {
                        "x:link": function(t) {
                            return u.createElement(V.a, {
                                "data-test-selector": "private-video-banner-header-link",
                                key: "private-video-banner-" + e.props.ownerLogin,
                                to: {
                                    pathname: "/" + e.props.ownerLogin + "/manager",
                                    state: {
                                        medium: _.PageviewMedium.VideoWatchPage,
                                        content: _.PageviewContent.Video
                                    }
                                }
                            }, u.createElement(R.Q, {
                                type: R._49.Span,
                                color: R.K.OverlayAlt
                            }, t))
                        }
                    }, "PrivateVideoBanner"))))
                }, t
            }(u.Component)),
            j = n("jcM9"),
            P = n("lfvs"),
            H = n("6WAQ"),
            B = n("J4ib"),
            W = {
                skipHtml: !0,
                softBreak: "br",
                allowedTypes: ["Emph", "Strong", "Paragraph", "Heading", "Item", "List", "Text", "Link", "Softbreak", "Hardbreak"]
            };

        function z(e) {
            return u.createElement(R._2, {
                ellipsis: !0
            }, u.createElement("li", null, e.children))
        }

        function G(e) {
            switch (e.level) {
                case 4:
                    return u.createElement(R.Q, {
                        type: R._49.H4,
                        ellipsis: !0
                    }, e.children);
                case 5:
                    return u.createElement(R.Q, {
                        type: R._49.H5,
                        ellipsis: !0
                    }, e.children);
                case 6:
                    return u.createElement(R.Q, {
                        type: R._49.H6,
                        ellipsis: !0
                    }, e.children);
                default:
                    return u.createElement(R.Q, {
                        type: R._49.H3,
                        ellipsis: !0
                    }, e.children)
            }
        }

        function q(e) {
            return u.createElement(R.Q, {
                type: R._49.P,
                ellipsis: !0
            }, e.children)
        }
        var K = "qa-description-container",
            Y = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isExpanded: !1
                    }, t.renderDescription = function() {
                        if (t.props.description) {
                            var e, n, i = (e = t.props.description) ? e.split(/ {2}\n|\n(?!\d+\.)(?!\*|- )|^\n/gm) : [];
                            if (t.state.isExpanded) n = i.map(function(e, t) {
                                return 0 === e.length ? u.createElement("br", {
                                    key: "desc-line" + t
                                }) : u.createElement(P, l.__assign({
                                    key: "desc-line" + t,
                                    source: e
                                }, W))
                            });
                            else {
                                var r = i[0].split("\n")[0];
                                n = u.createElement(P, l.__assign({
                                    source: r,
                                    renderers: {
                                        Paragraph: q,
                                        Heading: G,
                                        Item: z
                                    }
                                }, W))
                            }
                            return u.createElement(R._8, {
                                "data-test-selector": K
                            }, u.createElement(R._58, null, n), t.state.isExpanded ? t.renderBroadcastType(t.props.broadcastType) : null)
                        }
                    }, t.toggleExpand = function() {
                        t.setState(function(e) {
                            return {
                                isExpanded: !e.isExpanded
                            }
                        })
                    }, t
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    return this.props.description ? u.createElement(R._35, {
                        background: R.n.Base,
                        "data-test-selector": "qa-more-info-box"
                    }, u.createElement(R._8, {
                        padding: {
                            x: 1,
                            top: 1
                        }
                    }, this.renderDescription()), u.createElement(R._35, {
                        alignContent: R.b.Center,
                        borderTop: !0,
                        display: R.R.Flex,
                        justifyContent: R._7.Center,
                        padding: {
                            y: .5
                        }
                    }, u.createElement(R.v, {
                        "data-test-selector": "qa-toggle-expand-button",
                        type: R.B.Text,
                        onClick: this.toggleExpand
                    }, this.state.isExpanded ? Object(B.d)("Show Less", "MoreInfoBox") : Object(B.d)("Show More", "MoreInfoBox")))) : null
                }, t.prototype.renderBroadcastType = function(e) {
                    if (!e) return u.createElement(R._14, {
                        lineCount: 1,
                        width: 80
                    });
                    var t;
                    switch (e) {
                        case H.a.Archive:
                            t = Object(B.d)("Past Broadcast", "MoreInfoBox");
                            break;
                        case H.a.Upload:
                            t = Object(B.d)("Upload", "MoreInfoBox");
                            break;
                        case H.a.PastPremiere:
                            t = Object(B.d)("Past Premiere", "MoreInfoBox");
                            break;
                        case H.a.Highlight:
                            t = Object(B.d)("Highlight", "MoreInfoBox");
                            break;
                        default:
                            t = Object(B.d)("Unknown", "MoreInfoBox")
                    }
                    return u.createElement(R.Q, {
                        "data-test-selector": "qa-broadcast-type-text"
                    }, Object(B.d)("Video Category: {broadcastType}", {
                        broadcastType: t
                    }, "MoreInfoBox"))
                }, t = l.__decorate([Object(w.d)("MoreInfoBox", {
                    autoReportInteractive: !0
                })], t)
            }(u.Component),
            Q = n("cSst"),
            J = n("NY9D"),
            $ = /\S/,
            Z = function(e) {
                var t = e.video,
                    n = "",
                    i = "",
                    r = !!t.publishedAt;
                r && (n = Object(m.h)(new Date(t.publishedAt)));
                var a = t.title && "" !== t.title && $.test(t.title);
                return a && r ? i = t.title + " · " + n : t.title && a && !r ? i = t.title : !a && r && (i = n), u.createElement(R._35, {
                    margin: {
                        bottom: .5
                    }
                }, u.createElement(R.Q, {
                    ellipsis: !0,
                    title: t.title,
                    fontSize: R.V.Size4
                }, i))
            },
            X = Object(w.d)("VideoInfo", {
                autoReportInteractive: !0
            })(function(e) {
                var t = e.video,
                    n = null;
                if (t && t.scope === I.VideoScope.Private && (n = u.createElement(R._35, {
                        fontSize: R.V.Size4
                    }, u.createElement(R._12, {
                        label: Object(m.d)("Private", "VideoTitle")
                    }))), t && null === t.game) return u.createElement("div", null, n, u.createElement(Z, {
                    video: t
                }));
                var i = null;
                null === t ? i = u.createElement(R._14, {
                    "data-test-selector": "game-image-placeholder",
                    height: 55,
                    width: 40
                }) : null !== t.game && (i = u.createElement(V.a, {
                    to: Object(J.c)(t.game.name),
                    "data-a-target": "video-info-game-boxart-link"
                }, u.createElement(R.E, {
                    src: t.game.boxArtURL,
                    alt: t.game.name,
                    aspect: R.l.BoxArt,
                    size: R.F.Size4
                })));
                var r = null;
                return null === t ? r = u.createElement(R._8, {
                    "data-test-selector": "info-placeholder",
                    display: R.R.Flex,
                    flexDirection: R.T.Column
                }, u.createElement(R._14, {
                    lineCount: 1,
                    width: 320
                }), u.createElement(R._14, {
                    lineCount: 1,
                    width: 240
                })) : null !== t.game && (r = u.createElement("div", null, n, u.createElement(Z, {
                    video: t
                }), u.createElement(Q.a, {
                    linkTo: {
                        pathname: Object(J.c)(t.game.name),
                        state: {
                            content: _.PageviewContent.Game,
                            medium: _.PageviewMedium.VideoWatchPage
                        }
                    },
                    tooltip: Object(m.d)("Game", "VideoInfo"),
                    svgAsset: R._25.NavGames,
                    title: t.game.name,
                    "data-a-target": "video-info-game-link"
                }))), u.createElement(R.C, {
                    row: !0
                }, u.createElement(R._8, {
                    flexShrink: 0,
                    margin: {
                        right: 1
                    }
                }, i), u.createElement(R.D, {
                    overflow: R._11.Hidden
                }, r))
            }),
            ee = n("CIox"),
            te = n("V5M+"),
            ne = n("oSFp"),
            ie = n("9u8h");

        function re(e, t) {
            var n = this;
            return function() {
                return l.__awaiter(n, void 0, void 0, function() {
                    var n, i;
                    return l.__generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return n = "kraken/videos/" + e, [4, ie.a.delete(n)];
                            case 1:
                                if (200 !== (i = r.sent()).status) {
                                    if (i && i.error) throw new Error(JSON.stringify(i.error));
                                    if (i && i.requestError) throw i.requestError;
                                    throw new Error("Could not delete video. Request returned " + i.status)
                                }
                                return B.p.history.push(Object(J.d)(t)), [2]
                        }
                    })
                })
            }
        }
        var ae = n("+8VM"),
            oe = n("mi6k"),
            se = (n("8UBU"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        requestInProgress: !1,
                        errorMessage: ""
                    }, t.onClickCancel = function() {
                        return t.props.onClose()
                    }, t.onClickDelete = function() {
                        t.setState({
                            errorMessage: "",
                            requestInProgress: !0
                        }, function() {
                            return l.__awaiter(t, void 0, void 0, function() {
                                var e;
                                return l.__generator(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            if (!this.props.video.owner) return this.setState({
                                                errorMessage: Object(B.d)("This video is temporarily unable to be deleted.", "VideoDeleteModal"),
                                                requestInProgress: !1
                                            }), [2];
                                            t.label = 1;
                                        case 1:
                                            return t.trys.push([1, 3, , 4]), [4, this.props.onDeleteRequest(this.props.video.id, this.props.video.owner.login)];
                                        case 2:
                                            return t.sent(), this.props.onClose(), [3, 4];
                                        case 3:
                                            return e = t.sent(), this.setState({
                                                errorMessage: Object(B.d)("Unexpected error, please try again.", "VideoDeleteModal"),
                                                requestInProgress: !1
                                            }), B.k.withCategory("video delete modal").error(e, "Attempted to delete video."), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        })
                    }, t
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    return u.createElement(R._35, {
                        background: R.n.Base,
                        "data-test-selector": "qa-video-delete-modal",
                        className: "video-delete-modal",
                        padding: 3
                    }, u.createElement(R._8, null, u.createElement(R._8, {
                        margin: {
                            bottom: 1
                        }
                    }, u.createElement(R.Q, {
                        type: R._49.H4
                    }, Object(B.d)("Delete Video", "VideoDeleteModal"))), this.renderErrorMessage(), u.createElement(R.Q, {
                        type: R._49.P,
                        color: R.K.Alt2
                    }, Object(B.d)("Are you sure you want to delete this video?", "VideoDeleteModal"), u.createElement("br", null), Object(B.d)("This action cannot be undone.", "VideoDeleteModal"))), u.createElement(R._35, {
                        padding: {
                            y: 2
                        },
                        margin: {
                            y: 2
                        },
                        borderTop: !0,
                        borderBottom: !0
                    }, u.createElement(R.C, {
                        row: !0
                    }, u.createElement("img", {
                        alt: this.props.video.title || Object(B.d)("Video Thumbnail", "VideoDeleteModal"),
                        src: this.props.video.previewThumbnailURL,
                        className: "video-delete-modal__thumb"
                    }), u.createElement(R.D, {
                        overflow: R._11.Hidden
                    }, u.createElement(R._8, {
                        margin: {
                            left: 1
                        }
                    }, u.createElement(R._8, {
                        ellipsis: !0
                    }, this.props.video.title), u.createElement(R._35, {
                        ellipsis: !0,
                        color: R.K.Alt2
                    }, Object(B.d)("{created, date, medium}", {
                        created: new Date(this.props.video.publishedAt)
                    }, "VideoDeleteModal"), " · ", Object(oe.b)(this.props.video.lengthSeconds)), u.createElement(R._35, {
                        ellipsis: !0,
                        color: R.K.Alt2
                    }, Object(B.d)("{viewCount, plural, one {# View} other {# Views}}", {
                        viewCount: this.props.video.viewCount
                    }, "VideoDeleteModal")))))), u.createElement(R._8, {
                        display: R.R.Flex,
                        justifyContent: R._7.Center
                    }, u.createElement(R._8, {
                        display: R.R.InlineBlock,
                        margin: {
                            x: 1
                        }
                    }, u.createElement(R.v, {
                        type: R.B.Text,
                        onClick: this.onClickCancel,
                        "data-test-selector": "qa-video-delete-modal-cancel-button"
                    }, Object(B.d)("Cancel", "VideoDeleteModal"))), u.createElement(R._8, {
                        display: R.R.InlineBlock,
                        margin: {
                            x: 1
                        }
                    }, u.createElement(R.v, {
                        type: R.B.Alert,
                        onClick: this.onClickDelete,
                        disabled: this.state.requestInProgress,
                        "data-test-selector": "qa-video-delete-modal-delete-button"
                    }, Object(B.d)("Delete", "VideoDeleteModal")))), u.createElement(ae.a, {
                        closeOnBackdropClick: !0
                    }))
                }, t.prototype.renderErrorMessage = function() {
                    return this.state.errorMessage ? u.createElement(R._35, {
                        className: "video-delete-modal__error-container",
                        fullWidth: !0,
                        "data-test-selector": "qa-video-delete-modal-error-container",
                        margin: {
                            bottom: 1
                        },
                        padding: 1
                    }, u.createElement(R.Q, {
                        color: R.K.Error
                    }, this.state.errorMessage)) : null
                }, t
            }(u.Component));
        var le = Object(i.b)(null, function(e) {
                return Object(r.b)({
                    onClose: te.c,
                    onDeleteRequest: re
                }, e)
            })(se),
            ce = n("+Znq"),
            de = n("LjAQ"),
            ue = n("mw/a"),
            pe = n("6C1Z"),
            me = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    return u.createElement("li", null, u.createElement(R._6, l.__assign({
                        "data-test-selector": this.props.testSelector
                    }, this.props.interactableProps), u.createElement(R._8, {
                        padding: {
                            x: 1,
                            y: .5
                        }
                    }, this.props.children)))
                }, t = l.__decorate([Object(w.d)("InteractableOption", {
                    autoReportInteractive: !0
                })], t)
            }(u.Component),
            he = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleReportModalClose = function(e) {
                        (e === de.b.MutationError || e === de.b.Success) && t.props.history.push("/")
                    }, t
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    return u.createElement(ce.a, null, u.createElement(R.w, {
                        "data-test-selector": "qa-video-options-button",
                        type: R.y.Hollow,
                        icon: R._25.More,
                        ariaLabel: Object(B.d)("Video Options", "VideoOptions"),
                        disabled: !this.props.video
                    }), this.props.video ? u.createElement(R.q, {
                        direction: R.r.TopRight
                    }, u.createElement(R._35, {
                        padding: {
                            y: 1
                        },
                        color: R.K.Link
                    }, u.createElement("ul", {
                        "data-test-selector": "qa-video-options-container"
                    }, this.renderReportOption(this.props.video, this.props.currentUser), this.renderHighlightOption(this.props.video, this.props.currentUser), this.renderDeleteOption(this.props.video, this.props.currentUser)))) : u.createElement(R.q, null))
                }, t.prototype.renderDeleteOption = function(e, t) {
                    var n = this;
                    if (this.isVODOwner(e, t)) {
                        var i = {
                            alert: !0,
                            onClick: function() {
                                n.props.onShowDeleteVideoModal({
                                    video: e
                                })
                            }
                        };
                        return u.createElement(me, {
                            key: "delete-option",
                            interactableProps: i,
                            testSelector: "qa-video-delete-button"
                        }, Object(B.d)("Delete", "VideoOptions"))
                    }
                }, t.prototype.renderReportOption = function(e, t) {
                    var n = this;
                    if (!this.isVODOwner(e, t)) {
                        var i = {
                            onClick: function() {
                                if (t) {
                                    var i = void 0;
                                    i = e.owner ? Object(B.d)("Report {ownerDisplayName}", {
                                        ownerDisplayName: e.owner.displayName
                                    }, "ReportVideoModal") : Object(B.d)("Report this video", "ReportVideoModal"), n.props.onShowReportUserModal({
                                        onClose: n.handleReportModalClose,
                                        reportContext: {
                                            contentType: ue.a.Vod,
                                            contentID: e.id,
                                            targetUserID: e.owner ? e.owner.id : "",
                                            extra: n.getVideoReportExtraField()
                                        },
                                        title: i
                                    })
                                } else n.props.onShowLogin()
                            }
                        };
                        return u.createElement(me, {
                            key: "report-option",
                            interactableProps: i,
                            testSelector: "qa-video-report-button"
                        }, Object(B.d)("Report", "VideoOptions"))
                    }
                }, t.prototype.renderHighlightOption = function(e, t) {
                    if (e.broadcastType === H.a.Archive && this.isVODOwner(e, t) && e.owner) return u.createElement(me, {
                        key: "highlight-option",
                        interactableProps: {
                            linkTo: Object(pe.c)(e.owner.login, e.id)
                        },
                        testSelector: "qa-video-highlight-button"
                    }, Object(B.d)("Highlight", "VideoOptions"))
                }, t.prototype.isVODOwner = function(e, t) {
                    return t && e.owner && t.id === e.owner.id
                }, t.prototype.getVideoReportExtraField = function() {
                    var e = Object(k.a)(this.props),
                        t = {
                            timestamp: Object(oe.b)(this.props.lastVideoOffset, {
                                zeroPadAll: !0
                            })
                        };
                    return "" !== e && (t = l.__assign({}, t, {
                        collection: e
                    })), JSON.stringify(t)
                }, t = l.__decorate([Object(w.d)("VideoOptions", {
                    autoReportInteractive: !0
                })], t)
            }(u.Component);
        var ge = Object(i.b)(null, function(e) {
                return Object(r.b)({
                    onShowLogin: function() {
                        return Object(o.f)(a.a.VODOptions)
                    },
                    onShowDeleteVideoModal: function(e) {
                        var t = l.__rest(e, []);
                        return Object(te.d)(le, t)
                    },
                    onShowReportUserModal: function(e) {
                        var t = l.__rest(e, []);
                        return Object(te.d)(ne.a, t)
                    }
                }, e)
            })(Object(ee.f)(he)),
            fe = n("iOr9"),
            ve = n("7vx8"),
            be = n("2gZ/"),
            ke = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        hasError: !1
                    }, t.renderVariant1 = function(e, n) {
                        var i = t.props.upvoted ? n : e;
                        return u.createElement(R._52, {
                            direction: R._54.Bottom,
                            label: i
                        }, u.createElement(R.v, {
                            icon: t.props.upvoted ? R._25.Liked : R._25.Like,
                            type: R.B.Hollow,
                            onClick: t.upvoteVideo
                        }, null !== t.props.upvotes && Object(m.e)(t.props.upvotes)))
                    }, t.renderVariant2 = function(e, n) {
                        var i = t.props.upvoted ? n : e,
                            r = t.props.upvoted ? t.props.upvotes && Object(m.e)(t.props.upvotes) : null;
                        return u.createElement(R._52, {
                            label: i
                        }, u.createElement(R.v, {
                            icon: t.props.upvoted ? R._25.Liked : R._25.Like,
                            type: R.B.Hollow,
                            onClick: t.upvoteVideo
                        }, r))
                    }, t.upvoteVideo = function() {
                        t.props.currentUserID && t.props.upvoteVideo({
                            variables: {
                                input: {
                                    videoID: t.props.videoID,
                                    positionSeconds: t.props.positionSeconds,
                                    isUpvoted: !t.props.upvoted,
                                    userID: t.props.currentUserID
                                }
                            }
                        })
                    }, t
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    if (null === this.props.upvoted || null === this.props.upvotes || !1 === this.props.loggedIn || this.state.hasError) return null;
                    var e = Object(m.d)("Like this video", "VideoUpvoteBoxComponent"),
                        t = Object(m.d)("Unlike this video", "VideoUpvoteBoxComponent"),
                        n = {
                            assignments: {
                                fallback: function() {
                                    return null
                                },
                                variant1: this.renderVariant1.bind(this, e, t),
                                variant2: this.renderVariant2.bind(this, e, t)
                            },
                            name: "TWILIGHT_VOD_SHORYUKEN"
                        };
                    return u.createElement(fe.a, l.__assign({}, n))
                }, t.prototype.componentDidCatch = function() {
                    this.setState({
                        hasError: !0
                    })
                }, t.prototype.componentDidMount = function() {
                    null === this.props.upvoted || null === this.props.upvotes || !1 === this.props.loggedIn || this.state.hasError || "control" !== m.o.experiments.getAssignment("TWILIGHT_VOD_SHORYUKEN") && m.o.tracking.track(_.SpadeEventType.VODPageviewMetadata, {
                        upvote_count: this.props.upvotes,
                        vod_id: this.props.videoID
                    })
                }, t
            }(u.Component),
            ye = Object(ve.a)(be, {
                name: "upvoteVideo"
            })(ke),
            _e = (n("YhgU"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    var e = null;
                    return this.props.video && this.props.video.description && (e = u.createElement(R._35, {
                        borderTop: !0,
                        "data-test-selector": "video-description"
                    }, u.createElement(Y, {
                        description: this.props.video.description,
                        broadcastType: this.props.video.broadcastType
                    }))), u.createElement(R._35, {
                        background: R.n.Base,
                        border: !0
                    }, u.createElement(R._35, {
                        alignItems: R.c.Center,
                        breakpointMedium: {
                            flexDirection: R.T.Row
                        },
                        display: R.R.Flex,
                        flexWrap: R.U.NoWrap,
                        flexDirection: R.T.Column,
                        justifyContent: R._7.Start
                    }, u.createElement(R._35, {
                        flexGrow: 1,
                        fullWidth: !0,
                        fullHeight: !0,
                        overflow: R._11.Hidden,
                        padding: 1
                    }, u.createElement(X, {
                        video: this.props.video
                    })), u.createElement(R._35, {
                        alignItems: R.c.Center,
                        className: "video-info-bar__action-container",
                        display: R.R.Flex,
                        flexDirection: R.T.Row,
                        flexShrink: 0,
                        fullHeight: !0,
                        padding: 1
                    }, this.props.video && u.createElement(R._35, {
                        alignItems: R.c.Center,
                        "data-test-selector": "total-views",
                        display: R.R.Flex,
                        color: R.K.Alt2,
                        flexGrow: 1,
                        fontSize: R.V.Size5
                    }, u.createElement(R._34, {
                        value: Object(m.e)(this.props.video.viewCount),
                        label: Object(m.d)("Total Views", "VideoInfoBar"),
                        icon: R._25.GlyphViews
                    })), u.createElement(R._8, {
                        display: R.R.Flex,
                        flexGrow: 0
                    }, u.createElement(R._8, {
                        padding: {
                            left: 1
                        }
                    }, this.props.video && u.createElement(ye, {
                        videoID: this.props.video.id,
                        positionSeconds: this.props.lastVideoOffset,
                        upvotes: this.props.video.upvotes,
                        upvoted: this.props.video.self && this.props.video.self.isUpvoted,
                        loggedIn: null !== this.props.currentUser,
                        currentUserID: this.props.currentUser && this.props.currentUser.id
                    })), u.createElement(R._8, {
                        padding: {
                            x: 1
                        }
                    }, u.createElement(j.a, {
                        balloonDirection: R.r.TopRight,
                        buttonType: R.B.Hollow,
                        content: {
                            collectionID: this.props.collectionID,
                            videoID: this.props.video ? this.props.video.id : void 0
                        },
                        currentVideoTime: this.props.lastVideoOffset,
                        tracking: {
                            location: _.PageviewLocation.VideoWatchPage
                        }
                    })), u.createElement(ge, {
                        currentUser: this.props.currentUser,
                        video: this.props.video,
                        lastVideoOffset: this.props.lastVideoOffset
                    })))), e)
                }, t
            }(u.Component)),
            Se = Object(w.d)("VideoInfoBar", {
                autoReportInteractive: !0
            })(_e),
            Ce = n("Aj/L");
        var we = Object(i.b)(function(e) {
                return {
                    isLoggedIn: Object(Ce.d)(e)
                }
            })(function(e) {
                var t;
                return t = e.isLoggedIn ? u.createElement(M.e, {
                    tracking: {
                        medium: _.PageviewMedium.VideoNotFoundPage,
                        location: _.PageviewLocation.VideoWatchPage
                    }
                }) : u.createElement(M.c, {
                    tracking: {
                        medium: _.PageviewMedium.VideoNotFoundPage,
                        location: _.PageviewLocation.VideoWatchPage
                    }
                }), u.createElement(R._35, {
                    alignItems: R.c.Center,
                    color: R.K.Alt2,
                    display: R.R.Flex,
                    flexDirection: R.T.Column,
                    fullHeight: !0,
                    fullWidth: !0,
                    justifyContent: R._7.Center
                }, u.createElement(R._8, {
                    alignItems: R.c.Center,
                    display: R.R.Flex,
                    flexWrap: R.U.NoWrap,
                    padding: {
                        bottom: 3
                    }
                }, u.createElement(R._35, {
                    margin: {
                        right: 2
                    },
                    flexShrink: 0,
                    color: R.K.Alt2
                }, u.createElement(R._24, {
                    asset: R._25.DeadGlitch,
                    width: 92,
                    height: 96
                })), u.createElement(R._8, {
                    display: R.R.Flex,
                    flexDirection: R.T.Column
                }, u.createElement(R.Q, {
                    fontSize: R.V.Size4,
                    "data-test-selector": "video-error-message"
                }, Object(m.d)("Sorry. Unless you’ve got a time machine, that content is unavailable.", "VideoNotFoundPage")), u.createElement(R.Q, {
                    fontSize: R.V.Size4,
                    "data-test-selector": "video-error-cta"
                }, Object(m.d)("In the meantime, take a look at these other videos instead.", "VideoNotFoundPage")))), u.createElement(R._8, {
                    fullWidth: !0,
                    padding: {
                        x: 5
                    }
                }, t))
            }),
            Ee = (n("VnsS"), n("eeM1")),
            Oe = -1,
            De = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.logger = m.j.withCategory("VideoWatchPage"), n.onPlayerSeekRequest = function(e) {
                        n.setState({
                            requestedVideoOffset: e
                        })
                    }, n.onShowLoginHandler = function() {
                        n.props.onLogin()
                    }, n.getInitialVideoOffsetTime = function() {
                        var e, t, i = d.parse(n.props.location.search);
                        return i.t ? (e = i.t, (t = /^((\d+)[Hh])?((\d+)[Mm])?((\d+)[Ss])?$/.exec(e || "")) ? 3600 * (parseInt(t[2], 10) || 0) + 60 * (parseInt(t[4], 10) || 0) + (parseInt(t[6], 10) || 0) : 0) : Oe
                    }, n.onPlayerNavigationEvent = function(e) {
                        var t = n.getVideo(),
                            i = t ? t.id : "",
                            r = Object(k.a)(n.props);
                        Object(D.d)(e, n.props.history, {
                            currentVideoID: i,
                            currentCollectionID: r
                        })
                    }, n.onVideoTimeChange = function(e) {
                        var t = Math.floor(e);
                        t !== n.state.lastVideoOffset ? n.setState({
                            lastVideoOffset: t
                        }, function() {
                            n.props.onVideoTimeChange(t)
                        }) : n.state.requestedVideoOffset === t && n.setState({
                            requestedVideoOffset: Oe
                        })
                    }, n.getMiniPlayerTitle = function() {
                        var e = n.getVideo();
                        return e && e.title || Object(m.d)("Watching video", "VideoWatchPage")
                    }, n.getMiniPlayerURL = function(e, t) {
                        return e || t ? !e && t ? "/collections/" + t : "/videos/" + e + (t ? "?collection=" + t : "") : (n.logger.error(new Error, "Tried to generate a mini player URL based on the current route, but critical options were missing."), "/")
                    }, n.state = {
                        requestedVideoOffset: n.getInitialVideoOffsetTime(),
                        lastVideoOffset: Oe,
                        miniPlayerRouteLink: n.getMiniPlayerURL(t.match.params.videoID, t.match.params.collectionID)
                    }, n
                }
                return l.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.reportInteractive(), this.setExperimentsState()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.setState({
                        miniPlayerRouteLink: this.getMiniPlayerURL(e.match.params.videoID, e.match.params.collectionID)
                    })
                }, t.prototype.componentDidUpdate = function() {
                    if (this.props.data && !this.props.data.loading && (this.props.data.video || this.props.data.collection))
                        if (this.props.data.video && this.props.data.video.owner) m.o.setPageTitle(this.props.data.video.owner.displayName + " - " + this.props.data.video.title);
                        else if (this.props.data.collection && this.props.data.collection.items.edges.length > 0) {
                        var e = this.props.data.collection.items.edges[0].node,
                            t = e.owner ? e.owner.displayName + " - " : "";
                        m.o.setPageTitle("" + t + e.title)
                    }
                    this.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.getVideo(),
                        t = Object(k.a)(this.props),
                        n = !this.props.data.loading && t && this.props.data.collection && 0 === this.props.data.collection.items.totalCount,
                        i = this.getOwner();
                    if (this.props.data.error || e && e.id && !e.owner) return u.createElement(h.a, {
                        message: Object(m.d)("Whoops, we can't load that video right now.", "VideoWatchPage")
                    });
                    if (!this.props.data.loading && (!e || e && "" === e.id) && !t) return u.createElement(we, null);
                    var r = c("video-watch-page__right-column", ((d = {})[Object(b.c)(f.a.Dark)] = this.props.theatreModeEnabled, d)),
                        a = {};
                    this.state.requestedVideoOffset !== Oe && (a.nextVideoOffset = this.state.requestedVideoOffset), "" !== t && (a.collectionID = t);
                    var o = this.props.match.params.videoID;
                    o && (a.vodID = o);
                    var d, p = null;
                    return e && e.scope === I.VideoScope.Private && e.owner && e.owner.login && (p = u.createElement(U, {
                        ownerLogin: i.login
                    })), u.createElement(R._8, {
                        fullHeight: !0
                    }, u.createElement(T.a, {
                        currentPage: C.b.Videos,
                        "data-test-selector": "qa-video-watch-page",
                        ownerLogin: i.login,
                        theatreMode: this.props.theatreModeEnabled
                    }, p, u.createElement(N.a, null, u.createElement(E.a, {
                        playerProps: l.__assign({
                            onNavigationRequest: this.onPlayerNavigationEvent,
                            onSeek: this.onVideoTimeChange,
                            onVideoTimeChange: this.onVideoTimeChange,
                            attachToWindow: !0,
                            supportTheatreFullscreen: Object(v.b)(this.state.theatreFullscreenGroup)
                        }, a),
                        miniPlayerTitle: this.getMiniPlayerTitle(),
                        miniPlayerContentRoute: this.state.miniPlayerRouteLink
                    })), !n && u.createElement(Se, {
                        collectionID: Object(k.a)(this.props),
                        currentUser: this.props.data.currentUser || null,
                        video: e || null,
                        lastVideoOffset: this.state.lastVideoOffset
                    }), u.createElement(F, {
                        creator: e && e.owner ? {
                            id: e.owner.id,
                            displayName: e.owner.displayName
                        } : void 0,
                        currentGameName: e && e.game ? e.game.name : "",
                        currentVideoID: e ? e.id : "",
                        tracking: {
                            medium: _.PageviewMedium.VideoWatchPage,
                            location: _.PageviewLocation.VideoWatchPage
                        }
                    })), !n && u.createElement(O.b, null, u.createElement(R._35, {
                        className: r,
                        background: R.n.Alt2,
                        "data-test-selector": "video-chat-wrapper",
                        display: R.R.Flex,
                        flexGrow: 0,
                        flexShrink: 0,
                        flexWrap: R.U.NoWrap,
                        overflow: R._11.Hidden,
                        fullHeight: !0
                    }, u.createElement(s.l, l.__assign({
                        onPlayerSeekRequest: this.onPlayerSeekRequest,
                        onShowLogin: this.onShowLoginHandler,
                        videoID: this.props.match.params.videoID || e && e.id || ""
                    }, this.mapQueryParamsToVideoChatProps())))))
                }, t.prototype.mapQueryParamsToVideoChatProps = function() {
                    var e = {},
                        t = d.parse(this.props.location.search),
                        n = this.getInitialVideoOffsetTime();
                    return n !== Oe && (e.highlightTimestamp = n), t.comment && (e.highlightedMessageID = t.comment), e
                }, t.prototype.reportInteractive = function() {
                    this.props.data && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                }, t.prototype.getVideo = function() {
                    return this.props.data.video ? this.props.data.video : this.props.data.collection && this.props.data.collection.items.edges[0] ? this.props.data.collection.items.edges[0].node : null
                }, t.prototype.getOwner = function() {
                    var e = this.getVideo(),
                        t = !this.props.data.loading && this.props.data.collection && this.props.data.collection.owner;
                    return e && e.owner && e.owner || t || {
                        displayName: "",
                        login: "",
                        id: ""
                    }
                }, t.prototype.setExperimentsState = function() {
                    return l.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return l.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, Object(v.a)()];
                                case 1:
                                    return e = t.sent(), this.setState({
                                        theatreFullscreenGroup: e
                                    }), [2]
                            }
                        })
                    })
                }, t
            }(u.Component),
            Te = Object(p.compose)(Object(p.graphql)(Ee, {
                options: function(e) {
                    return {
                        variables: {
                            videoID: e.match.params.videoID,
                            collectionID: Object(k.a)(e) || void 0,
                            useCollectionID: !!Object(k.a)(e) && !e.match.params.videoID
                        }
                    }
                }
            }), Object(w.d)("VideoWatchPage", {
                destination: y.a.VideoWatchPage
            }), Object(g.a)({
                location: _.PageviewLocation.VideoWatchPage,
                properties: function(e) {
                    var t = null,
                        n = null,
                        i = null,
                        r = null,
                        a = null,
                        o = null;
                    if (e.match.params.videoID) t = e.match.params.videoID, e.data.video && e.data.video.owner && (n = e.data.video.broadcastType, i = e.data.video.game ? e.data.video.game.name : null, r = e.data.video.language, a = e.data.video.owner.login, o = Number(e.data.video.owner.id));
                    else if (Object(k.a)(e) && e.data.collection && e.data.collection.items.edges.length > 0) {
                        var s = e.data.collection.items.edges[0].node;
                        t = s.id, n = s.broadcastType, i = s.game ? s.game.name : null, r = s.language, a = s.owner ? s.owner.login : null, o = s.owner ? Number(s.owner.id) : null
                    }
                    return {
                        channel: a,
                        channel_id: o,
                        vod_type: n ? Object(S.b)(n) : null,
                        vod_id: t,
                        game: i,
                        language: r
                    }
                },
                skip: function(e) {
                    return e.data.loading
                }
            }))(De);
        var Ne = Object(i.b)(function(e) {
            return {
                theatreModeEnabled: e.ui.theatreModeEnabled
            }
        }, function(e) {
            return Object(r.b)({
                onLogin: function() {
                    return Object(o.f)(a.a.VODComment)
                },
                onVideoTimeChange: s.q
            }, e)
        })(Te);
        n.d(t, "VideoWatchPage", function() {
            return Ne
        })
    },
    urTJ: function(e, t, n) {
        "use strict";
        var i = n("mbxv");
        n.d(t, "a", function() {
            return i.a
        })
    },
    uwZN: function(e, t, n) {
        var i = n("7yyf");
        e.exports = function(e) {
            return i(new Date, e)
        }
    },
    uyaC: function(e, t, n) {
        var i = n("Ptqd"),
            r = n("jQas");
        e.exports = {
            distanceInWords: i(),
            format: r()
        }
    },
    vBvW: function(e, t, n) {
        var i = n("mXYp");
        e.exports = function(e, t) {
            return i(Date.now(), e, t)
        }
    },
    vKBL: function(e, t, n) {
        "use strict";
        t.a = function() {
            return i.o.experiments.getAssignment("TWILIGHT_THEATRE_FULLSCREEN") || "control"
        }, t.b = function(e) {
            return "theatre" === e
        };
        var i = n("6sO2")
    },
    vKFS: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            r = n("GiK3"),
            a = n("6sO2"),
            o = n("RH2O"),
            s = n("HW6M"),
            l = n("nyge"),
            c = n("Odds"),
            d = (n("Lwev"), function(e) {
                var t, n = e.spriteDetails,
                    i = e.game.toLowerCase(),
                    a = s("metadata-icon__appendage", ((t = {})["metadata-icon__appendage--csgo-skill"] = i === l.a.CounterStrike, t)),
                    o = i === l.a.CounterStrike ? 40 : 20;
                return r.createElement(c._8, {
                    className: a
                }, r.createElement("div", {
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
            u = n("5DPx"),
            p = (n("nUXg"), function(e) {
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
                                        return n.trys.push([1, 3, , 4]), [4, Object(u.b)(this.props.streamMetadata, this.props.game)];
                                    case 2:
                                        if (e = n.sent()) {
                                            if (this.didUnmount) return [2];
                                            this.setState({
                                                metadataDetails: e
                                            })
                                        }
                                        return [3, 4];
                                    case 3:
                                        return t = n.sent(), a.j.error(t, "Failed to get metadata details."), [3, 4];
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
                    return this.props.streamMetadata && this.props.game && this.state.metadataDetails ? r.createElement(c._8, {
                        className: "preview-card-appendage",
                        display: c.R.Flex
                    }, r.createElement(c._8, {
                        className: "preview-card-appendage__image-wrapper",
                        flexGrow: 0,
                        flexShrink: 0,
                        display: c.R.Flex,
                        alignItems: c.c.Center,
                        justifyContent: c._7.End
                    }, r.createElement("div", null, r.createElement(d, {
                        game: this.props.game,
                        spriteDetails: this.state.metadataDetails.spriteDetails
                    }))), r.createElement(c._35, {
                        flexGrow: 1,
                        flexShrink: 1,
                        borderTop: !0,
                        padding: {
                            y: .5
                        },
                        margin: {
                            left: 1
                        },
                        display: c.R.Flex,
                        overflow: c._11.Hidden
                    }, r.createElement(c._8, {
                        flexGrow: 1,
                        flexShrink: 1,
                        overflow: c._11.Hidden
                    }, r.createElement(c.Q, {
                        ellipsis: !0
                    }, this.state.metadataDetails.name)), r.createElement(c._8, {
                        flexGrow: 0,
                        flexShrink: 0
                    }, r.createElement(c.Q, null, this.state.metadataDetails.label)))) : null
                }, t
            }(r.Component));
        var m = Object(o.b)(function(e) {
                return {
                    leagueOfLegends: {
                        championsMap: e.directory.leagueOfLegends.championsMap
                    }
                }
            })(p),
            h = (n("YVIF"), function(e) {
                var t = r.createElement(c._35, {
                    className: "preview-card-iconic-image__wrapper",
                    borderRadius: c.t.Small,
                    overflow: c._11.Hidden
                }, r.createElement(c.k, {
                    ratio: e.aspect || c.l.BoxArt,
                    align: c.a.Center
                }, r.createElement(c.N, i.__assign({}, e.imageProps))));
                return e.linkTo && (t = r.createElement(c.O, {
                    to: e.linkTo,
                    onClick: e.onClick
                }, t)), t
            });
        h.displayName = "PreviewCardIconicImage";
        n("IJO1");
        var g, f = function(e) {
                var t = .5,
                    n = null;
                return "number" == typeof e.progressBarPercent && e.progressBarPercent > 0 && (n = r.createElement(c._8, {
                    position: c._15.Absolute,
                    attachBottom: !0,
                    fullWidth: !0
                }, r.createElement(c._18, {
                    size: c._20.Small,
                    value: e.progressBarPercent,
                    mask: !0
                })), t = 1), r.createElement(c._8, {
                    position: c._15.Absolute,
                    attachTop: !0,
                    attachLeft: !0,
                    fullWidth: !0,
                    fullHeight: !0,
                    className: "preview-card-overlay"
                }, n, r.createElement(c._8, {
                    position: c._15.Absolute,
                    attachTop: !0,
                    attachLeft: !0,
                    margin: 1,
                    "data-test-selector": "top-left-selector"
                }, e.topLeft), r.createElement(c._8, {
                    position: c._15.Absolute,
                    attachTop: !0,
                    attachRight: !0,
                    margin: 1,
                    "data-test-selector": "top-right-selector"
                }, e.topRight), r.createElement(c._8, {
                    position: c._15.Absolute,
                    attachBottom: !0,
                    attachLeft: !0,
                    margin: {
                        x: .5,
                        y: t
                    },
                    "data-test-selector": "bottom-left-selector"
                }, e.bottomLeft), r.createElement(c._8, {
                    position: c._15.Absolute,
                    attachBottom: !0,
                    attachRight: !0,
                    margin: {
                        x: .5,
                        y: t
                    },
                    "data-test-selector": "bottom-right-selector"
                }, e.bottomRight))
            },
            v = (n("BJwU"), function(e) {
                var t = e.icon && r.createElement(c._8, {
                    display: c.R.Flex
                }, r.createElement(c._24, {
                    asset: e.icon,
                    width: 14,
                    height: 14
                }));
                return e.withBackground ? r.createElement(c._35, {
                    alignItems: c.c.Center,
                    background: c.n.Overlay,
                    borderRadius: c.t.Small,
                    className: "preview-card-stat",
                    color: c.K.Overlay,
                    display: c.R.Flex,
                    fontSize: c.V.Size6,
                    justifyContent: c._7.Center
                }, t, r.createElement(c.Q, null, e.value)) : r.createElement(c._35, {
                    className: "preview-card-stat",
                    color: c.K.Overlay,
                    display: c.R.Flex,
                    padding: {
                        x: .5
                    }
                }, t, r.createElement(c.Q, null, e.value))
            }),
            b = n("vKYI"),
            k = (n("jpZi"), 300),
            y = 5e3,
            _ = "preview-card-thumbnail__image-selector",
            S = function(e) {
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
                            }, k)
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
                        }, y)
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
                    }), r.createElement("div", i.__assign({}, e, {
                        onClick: this.props.onClick
                    }), this.renderLoadingSpinner(), r.createElement(c._35, {
                        background: c.n.Alt2
                    }, r.createElement(c.k, {
                        ratio: this.props.aspectRatio
                    }, this.renderImage())))
                }, t.prototype.renderImage = function() {
                    var e, t, n = !(!this.props.animatedImageProps || !this.state.isHovered || this.state.didAnimatedPreviewFailToLoad),
                        a = s("preview-card-thumbnail__image", ((e = {})["preview-card-thumbnail__image--animated"] = this.state.isHovered && this.state.didAnimatedPreviewLoad, e["preview-card-thumbnail__image--hidden"] = this.shouldShowLiveVideoPreview() && this.state.isLiveVideoPreviewLoaded, e));
                    return this.shouldShowLiveVideoPreview() ? [r.createElement("div", {
                        key: "player-key",
                        className: s((t = {}, t["preview-card-thumbnail__image--hidden"] = !this.state.isLiveVideoPreviewLoaded, t))
                    }, r.createElement(b.a, {
                        channelLogin: this.props.liveChannelLogin || void 0,
                        onPlayerPlaying: this.onLivePreviewLoaded
                    })), r.createElement("div", {
                        key: "image-key",
                        className: a
                    }, r.createElement(c.N, i.__assign({}, this.props.staticImageProps, {
                        "data-test-selector": _
                    })))] : n && void 0 !== this.props.animatedImageProps ? r.createElement("div", {
                        className: a
                    }, r.createElement(c.N, i.__assign({}, this.props.animatedImageProps, {
                        onLoad: this.onImageLoad,
                        onError: this.onImageLoadError,
                        "data-test-selector": _
                    }))) : r.createElement("div", {
                        className: a
                    }, r.createElement(c.N, i.__assign({}, this.props.staticImageProps, {
                        "data-test-selector": _
                    })))
                }, t.prototype.renderLoadingSpinner = function() {
                    if (this.shouldShowLiveVideoPreview() && !this.state.isLiveVideoPreviewLoaded) return r.createElement(c._35, {
                        attachRight: !0,
                        attachTop: !0,
                        background: c.n.Overlay,
                        borderRadius: c.t.Small,
                        color: c.K.OverlayAlt,
                        margin: .5,
                        padding: .5,
                        position: c._15.Absolute,
                        zIndex: c._62.Above
                    }, r.createElement(c._10, {
                        fillContent: !0,
                        inheritColor: !0,
                        size: c._33.Small,
                        delay: 0
                    }))
                }, t
            }(r.Component),
            C = (n("ea7N"), function(e) {
                var t = null;
                return e.subtitles && e.subtitles.length > 0 && (t = e.subtitles.map(function(e, t) {
                    return r.createElement(c._8, {
                        key: t,
                        "data-test-selector": "preview-card-titles__subtitle"
                    }, r.createElement(c.Q, {
                        color: c.K.Alt,
                        ellipsis: !0
                    }, "string" == typeof e ? e : r.createElement(c.O, {
                        to: e.linkTo,
                        onClick: e.onClick,
                        type: c.P.Inherit
                    }, e.text)))
                })), r.createElement("div", null, r.createElement(c.O, {
                    to: e.linkTo,
                    onClick: e.onClick,
                    type: c.P.Inherit,
                    "data-test-selector": "preview-card-titles__primary-link"
                }, r.createElement(c.Q, {
                    type: c._49.H3,
                    fontSize: c.V.Size5,
                    lines: 1,
                    bold: !0,
                    ellipsis: !0
                }, e.title)), r.createElement(c._8, {
                    className: "preview-card-titles__subtitle-wrapper"
                }, t))
            }),
            w = n("IOwa"),
            E = n("mi6k"),
            O = n("Tg4T");

        function D(e) {
            return void 0 !== e.streamType
        }

        function T(e) {
            return void 0 !== e.watchedProgressPercent
        }

        function N(e) {
            return void 0 !== e.clipCreatedByChannelLogin
        }! function(e) {
            e[e.SingleGameList = 1] = "SingleGameList", e[e.SingleChannelList = 2] = "SingleChannelList", e[e.MixedGameAndChannelList = 3] = "MixedGameAndChannelList"
        }(g || (g = {}));
        var I = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return i.__extends(t, e), t.prototype.render = function() {
                return r.createElement("div", {
                    className: "preview-card"
                }, r.createElement(c._8, {
                    position: c._15.Relative
                }, T(this.props) && r.createElement(O.a, {
                    videoID: this.props.videoID || "",
                    restriction: this.props.restriction,
                    attachTop: !0
                }), r.createElement(c.O, {
                    to: this.props.thumbnailLinkTo || this.props.linkTo,
                    onClick: this.props.onThumbnailClick || this.props.onClick
                }, this.props.thumbnailImageProps && r.createElement(S, {
                    staticImageProps: this.props.thumbnailImageProps,
                    animatedImageProps: T(this.props) && this.props.animatedImageProps || void 0,
                    liveChannelLogin: D(this.props) && this.props.enableLivePreview ? this.props.channelLogin : null
                }), this.renderOverlay())), r.createElement(c._8, {
                    display: c.R.Flex,
                    flexWrap: c.U.NoWrap,
                    margin: {
                        top: 1
                    }
                }, r.createElement(c._8, {
                    flexGrow: 0,
                    flexShrink: 0
                }, this.renderIconicImage()), r.createElement(c._8, {
                    flexGrow: 1,
                    flexShrink: 1,
                    overflow: c._11.Hidden
                }, this.renderTitles())), this.renderAppendages())
            }, t.prototype.renderOverlay = function() {
                return D(this.props) ? r.createElement(f, {
                    topLeft: r.createElement(w.a, {
                        type: this.props.streamType,
                        hosting: !!this.props.hostedByChannelLogin
                    }),
                    topRight: void 0,
                    bottomLeft: r.createElement(v, {
                        value: Object(a.d)("{viewerCount, plural, one {# viewer} other {# viewers}}", {
                            viewerCount: this.props.currentViewerCount
                        }, "VideoPreviewCard")
                    }),
                    bottomRight: void 0
                }) : T(this.props) ? r.createElement(f, {
                    topLeft: r.createElement(v, {
                        value: Object(E.b)(this.props.durationInSeconds),
                        icon: c._25.GlyphArrRight,
                        withBackground: !0
                    }),
                    topRight: void 0,
                    bottomLeft: r.createElement(v, {
                        value: this.getViewCountLabel()
                    }),
                    bottomRight: r.createElement(v, {
                        value: Object(a.c)(new Date(this.props.datePublished), "medium")
                    }),
                    progressBarPercent: this.props.watchedProgressPercent
                }) : N(this.props) ? r.createElement(f, {
                    topLeft: r.createElement(v, {
                        value: Object(E.b)(this.props.durationInSeconds),
                        icon: c._25.Clip,
                        withBackground: !0
                    }),
                    topRight: void 0,
                    bottomLeft: r.createElement(v, {
                        value: this.getViewCountLabel()
                    }),
                    bottomRight: r.createElement(v, {
                        value: Object(a.c)(new Date(this.props.datePublished), "medium")
                    })
                }) : void 0
            }, t.prototype.getViewCountLabel = function() {
                return T(this.props) || N(this.props) ? Object(a.d)("{viewerCount, plural, one {# view} other {# views}}", {
                    viewerCount: this.props.viewCount
                }, "VideoPreviewCard") : ""
            }, t.prototype.renderIconicImage = function() {
                return this.props.context === g.SingleChannelList && this.props.gameBoxArtImageProps && this.props.gameBoxArtImageProps.src && this.props.gameTitleLinkTo ? r.createElement(c._8, {
                    margin: {
                        right: 1
                    }
                }, r.createElement(h, {
                    imageProps: this.props.gameBoxArtImageProps,
                    linkTo: this.props.gameBoxArtImageLinkTo || this.props.gameTitleLinkTo,
                    onClick: this.props.gameTitleOnClick,
                    aspect: c.l.BoxArt
                })) : (this.props.context === g.SingleGameList || this.props.context === g.MixedGameAndChannelList) && this.props.channelImageProps && this.props.channelImageProps.src ? r.createElement(c._8, {
                    margin: {
                        right: 1
                    }
                }, r.createElement(h, {
                    imageProps: this.props.channelImageProps,
                    linkTo: this.props.channelImageLinkTo || this.props.channelLoginLinkTo,
                    onClick: this.props.channelLoginOnClick,
                    aspect: c.l.Aspect1x1
                })) : void 0
            }, t.prototype.renderTitles = function() {
                var e = [{
                    text: this.props.channelLogin,
                    linkTo: this.props.channelLoginLinkTo,
                    onClick: this.props.channelLoginOnClick
                }];
                return N(this.props) && this.props.clipCreatedByChannelLoginLinkTo ? e.push({
                    text: Object(a.d)("Clipped by {userName}", {
                        userName: this.props.clipCreatedByChannelLogin || ""
                    }, "VideoPreviewCard"),
                    linkTo: this.props.clipCreatedByChannelLoginLinkTo,
                    onClick: this.props.clipCreatedByChannelLoginOnClick
                }) : this.props.context !== g.SingleGameList && this.props.gameTitle && this.props.gameTitleLinkTo && e.push({
                    text: this.props.gameTitle,
                    linkTo: this.props.gameTitleLinkTo,
                    onClick: this.props.gameTitleOnClick
                }), r.createElement(C, {
                    title: this.props.title,
                    onClick: this.props.onVideoTitleClick || this.props.onClick,
                    linkTo: this.props.videoTitleLinkTo || this.props.linkTo,
                    subtitles: e
                })
            }, t.prototype.renderAppendages = function() {
                if (this.props.playerMetadata && this.props.playerMetadataGame) return r.createElement(m, {
                    streamMetadata: this.props.playerMetadata,
                    game: this.props.playerMetadataGame
                })
            }, t
        }(r.Component);
        n.d(t, "b", function() {
            return g
        }), n.d(t, "a", function() {
            return I
        })
    },
    vKYI: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            r = n("BwgW"),
            a = n("GiK3"),
            o = n("CSlQ"),
            s = n("fc0G"),
            l = n("L3z0"),
            c = n("5MsU"),
            d = {
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
        var p = function(e) {
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
                return a.createElement("div", {
                    className: "video-player",
                    "data-test-selector": "thumbnail-video-player"
                }, a.createElement("div", {
                    className: "video-player__container",
                    ref: this.attachRef
                }))
            }, t.prototype.componentWillUnmount = function() {
                var e = this;
                this.checkPlayerDependencyAnimationFrame && cancelAnimationFrame(this.checkPlayerDependencyAnimationFrame), window.removeEventListener("beforeunload", function() {
                    return e.resetVolume()
                }), this.resetVolume(), this.player && (this.player.removeEventListener(c.a.PlayerReady, this.onPlayerReady), this.player.removeEventListener(l.a.Play, this.onPlayerPlay), this.player.removeEventListener(l.a.Playing, this.onPlayerPlaying), r.extensionService.unregisterPlayer(), this.player.destroy())
            }, t.prototype.initializePlayer = function() {
                var e = d;
                this.props.channelLogin && (e.channel = this.props.channelLogin);
                var t = new window.Twitch.Player(this.playerRef, e);
                this.player = t, t.addEventListener(c.a.PlayerReady, this.onPlayerReady), t.addEventListener(l.a.Play, this.onPlayerPlay), t.addEventListener(l.a.Playing, this.onPlayerPlaying), r.extensionService.registerPlayer(this.player)
            }, t.prototype.resetVolume = function() {
                this.userVolumeSetting && window.localStorage.setItem("volume", this.userVolumeSetting), this.userMuteSetting && window.localStorage.setItem("muted", this.userMuteSetting)
            }, t.tagInjected = !1, t = n = i.__decorate([Object(o.d)("LiveChannelPreviewCard")], t);
            var n
        }(a.Component);
        n.d(t, !1, function() {
            return "thumbnail-video-player"
        }), n.d(t, !1, function() {
            return d
        }), n.d(t, "a", function() {
            return p
        })
    },
    ve2D: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e) {
            return 2 === i(e).getDay()
        }
    },
    vh75: function(e, t, n) {
        "use strict";
        n.d(t, "d", function() {
            return i
        }), n.d(t, "e", function() {
            return r
        }), n.d(t, "f", function() {
            return a
        }), n.d(t, "g", function() {
            return o
        }), n.d(t, "k", function() {
            return s
        }), n.d(t, "h", function() {
            return l
        }), n.d(t, "i", function() {
            return c
        }), n.d(t, "j", function() {
            return d
        }), n.d(t, "l", function() {
            return u
        }), n.d(t, "c", function() {
            return p
        }), n.d(t, "b", function() {
            return m
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
            return y
        }), n.d(t, "u", function() {
            return _
        }), n.d(t, "x", function() {
            return S
        }), n.d(t, "w", function() {
            return C
        }), n.d(t, "a", function() {
            return w
        }), n.d(t, "q", function() {
            return E
        }), n.d(t, "r", function() {
            return O
        }), t.R = function(e, t) {
            return {
                type: u,
                channel: e,
                messages: t
            }
        }, t.B = function() {
            return {
                type: r
            }
        }, t.P = function() {
            return {
                type: S
            }
        }, t.I = function() {
            return {
                type: C
            }
        }, t.T = function() {
            return {
                type: a
            }
        }, t.Q = function() {
            return {
                type: i
            }
        }, t.L = function() {
            return {
                type: p
            }
        }, t.E = function() {
            return {
                type: m
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
                type: c,
                duration: e
            }
        }, t.C = function() {
            return {
                type: l
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
                type: y
            }
        }, t.H = function() {
            return {
                type: _
            }
        }, t.y = function(e, t) {
            return {
                type: w,
                command: e.toLowerCase(),
                handler: t
            }
        }, t.S = function(e) {
            return {
                type: E,
                command: e.toLowerCase()
            }
        }, t.U = function(e) {
            return {
                type: O,
                customEvent: e
            }
        };
        var i = "chat.CHAT_HIDDEN",
            r = "chat.CHAT_RESET",
            a = "chat.CHAT_SHOWN",
            o = "chat.EMOTE_SETS_UPDATED",
            s = "chat.FOLLOWER_MODE_ENABLED",
            l = "chat.FOLLOWER_MODE_DISABLED",
            c = "chat.FOLLOWER_MODE_DURATION_CHANGED",
            d = "chat.FOLLOWER_MODE_DURATION_PREFERENCE_CHANGED",
            u = "chat.MESSAGES_UPDATED",
            p = "chat.AUTOMOD_ACTIONS_ENABLED",
            m = "chat.AUTOMOD_ACTIONS_DISABLED",
            h = "chat.MODERATION_ACTIONS_ENABLED",
            g = "chat.MODERATION_ACTIONS_DISABLED",
            f = "chat.MOD_ICONS_ENABLED",
            v = "chat.MOD_ICONS_DISABLED",
            b = "chat.SLOW_MODE_ENABLED",
            k = "chat.SLOW_MODE_DISABLED",
            y = "chat.SUBS_ONLY_MODE_ENABLED",
            _ = "chat.SUBS_ONLY_MODE_DISABLED",
            S = "chat.TIMESTAMPS_ENABLED",
            C = "chat.TIMESTAMPS_DISABLED",
            w = "chat.ADD_COMMAND",
            E = "chat.REMOVE_COMMAND",
            O = "chat.RENDER_SENT_CHAT_MESSAGE"
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
    vv3i: function(e, t) {},
    w4by: function(e, t, n) {
        var i = n("6Zhv"),
            r = 36e5;
        e.exports = function(e, t) {
            var n = Number(t);
            return i(e, n * r)
        }
    },
    wAFH: function(e, t, n) {
        var i = n("6Zhv");
        e.exports = function(e, t) {
            var n = Number(t);
            return i(e, -n)
        }
    },
    wPo5: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e, t) {
            var n = i(e),
                r = Number(t);
            return n.setHours(r), n
        }
    },
    wajf: function(e, t, n) {
        var i = n("xA5w"),
            r = n("D6ie");
        e.exports = function(e, t) {
            var n = i(e),
                a = Number(t),
                o = r(n) - a;
            return n.setDate(n.getDate() - 7 * o), n
        }
    },
    weaG: function(e, t) {},
    wiYS: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e, t) {
            if (!(t instanceof Array)) throw new TypeError(toString.call(t) + " is not an instance of Array");
            var n, r, a = i(e).getTime();
            return t.forEach(function(e, t) {
                var o = i(e),
                    s = Math.abs(a - o.getTime());
                (void 0 === n || s < r) && (n = t, r = s)
            }), n
        }
    },
    wuJz: function(e, t, n) {
        e.exports = {
            addDays: n("Jvcu"),
            addHours: n("w4by"),
            addISOYears: n("oNnY"),
            addMilliseconds: n("6Zhv"),
            addMinutes: n("NSOL"),
            addMonths: n("3EIC"),
            addQuarters: n("1rLR"),
            addSeconds: n("nfOx"),
            addWeeks: n("7EGB"),
            addYears: n("4Z4o"),
            areRangesOverlapping: n("2lB6"),
            closestIndexTo: n("wiYS"),
            closestTo: n("Tv4R"),
            compareAsc: n("NKE6"),
            compareDesc: n("YRFD"),
            differenceInCalendarDays: n("nizW"),
            differenceInCalendarISOWeeks: n("0aH9"),
            differenceInCalendarISOYears: n("9Jn5"),
            differenceInCalendarMonths: n("orNa"),
            differenceInCalendarQuarters: n("Jtuq"),
            differenceInCalendarWeeks: n("Q2rx"),
            differenceInCalendarYears: n("Bb5e"),
            differenceInDays: n("gAt4"),
            differenceInHours: n("kjlQ"),
            differenceInISOYears: n("qNYo"),
            differenceInMilliseconds: n("G7No"),
            differenceInMinutes: n("3nPg"),
            differenceInMonths: n("GI7G"),
            differenceInQuarters: n("XFzU"),
            differenceInSeconds: n("25hp"),
            differenceInWeeks: n("6SO/"),
            differenceInYears: n("rO5X"),
            distanceInWords: n("mXYp"),
            distanceInWordsStrict: n("t6pj"),
            distanceInWordsToNow: n("vBvW"),
            eachDay: n("M9Ev"),
            endOfDay: n("MIQa"),
            endOfHour: n("bbdo"),
            endOfISOWeek: n("SZZR"),
            endOfISOYear: n("K7ZZ"),
            endOfMinute: n("LU20"),
            endOfMonth: n("xKy+"),
            endOfQuarter: n("zQFw"),
            endOfSecond: n("+sSA"),
            endOfToday: n("0LAu"),
            endOfTomorrow: n("HXCM"),
            endOfWeek: n("I7cV"),
            endOfYear: n("Epw6"),
            endOfYesterday: n("0YGC"),
            format: n("Eoz/"),
            getDate: n("3g9B"),
            getDay: n("Mbb9"),
            getDayOfYear: n("ymQ7"),
            getDaysInMonth: n("Mdww"),
            getDaysInYear: n("Javx"),
            getHours: n("8Gpr"),
            getISODay: n("AZvW"),
            getISOWeek: n("D6ie"),
            getISOWeeksInYear: n("fUo1"),
            getISOYear: n("zZbG"),
            getMilliseconds: n("024F"),
            getMinutes: n("JNsx"),
            getMonth: n("l85J"),
            getOverlappingDaysInRanges: n("8QR2"),
            getQuarter: n("lQzg"),
            getSeconds: n("eKpK"),
            getTime: n("cwv1"),
            getYear: n("nZeo"),
            isAfter: n("fK0I"),
            isBefore: n("gDPd"),
            isDate: n("607n"),
            isEqual: n("sdTe"),
            isFirstDayOfMonth: n("6udH"),
            isFriday: n("YPf8"),
            isFuture: n("6CZb"),
            isLastDayOfMonth: n("kDuD"),
            isLeapYear: n("b7g8"),
            isMonday: n("kkVd"),
            isPast: n("eCZG"),
            isSameDay: n("f4ga"),
            isSameHour: n("qPxx"),
            isSameISOWeek: n("Be26"),
            isSameISOYear: n("4LxA"),
            isSameMinute: n("Moxe"),
            isSameMonth: n("f+sD"),
            isSameQuarter: n("7yyf"),
            isSameSecond: n("5qwL"),
            isSameWeek: n("8KV+"),
            isSameYear: n("Qxz6"),
            isSaturday: n("6axH"),
            isSunday: n("ZUMa"),
            isThisHour: n("z3wv"),
            isThisISOWeek: n("A2zO"),
            isThisISOYear: n("hUHO"),
            isThisMinute: n("Qbo9"),
            isThisMonth: n("cONr"),
            isThisQuarter: n("uwZN"),
            isThisSecond: n("hj5Y"),
            isThisWeek: n("pe7V"),
            isThisYear: n("kRs6"),
            isThursday: n("yu3m"),
            isToday: n("GvNH"),
            isTomorrow: n("0oN5"),
            isTuesday: n("ve2D"),
            isValid: n("dH3X"),
            isWednesday: n("e/EH"),
            isWeekend: n("4OFc"),
            isWithinRange: n("4zIR"),
            isYesterday: n("1gtq"),
            lastDayOfISOWeek: n("t8zS"),
            lastDayOfISOYear: n("hico"),
            lastDayOfMonth: n("Akl5"),
            lastDayOfQuarter: n("T/Ln"),
            lastDayOfWeek: n("nk30"),
            lastDayOfYear: n("xLg3"),
            max: n("11Bn"),
            min: n("aHtT"),
            parse: n("xA5w"),
            setDate: n("/dIK"),
            setDay: n("SHOI"),
            setDayOfYear: n("CVNg"),
            setHours: n("wPo5"),
            setISODay: n("YPjl"),
            setISOWeek: n("wajf"),
            setISOYear: n("Uu+E"),
            setMilliseconds: n("+/J2"),
            setMinutes: n("danj"),
            setMonth: n("balU"),
            setQuarter: n("jy2q"),
            setSeconds: n("ToRI"),
            setYear: n("a7Cs"),
            startOfDay: n("WNGz"),
            startOfHour: n("LLTj"),
            startOfISOWeek: n("3znZ"),
            startOfISOYear: n("iRXW"),
            startOfMinute: n("M5Oo"),
            startOfMonth: n("7Xwz"),
            startOfQuarter: n("rBmI"),
            startOfSecond: n("VaeB"),
            startOfToday: n("1udo"),
            startOfTomorrow: n("gUEJ"),
            startOfWeek: n("u/4p"),
            startOfYear: n("JURy"),
            startOfYesterday: n("mSFb"),
            subDays: n("cA+x"),
            subHours: n("fo7E"),
            subISOYears: n("MKc+"),
            subMilliseconds: n("wAFH"),
            subMinutes: n("kIFi"),
            subMonths: n("7Swd"),
            subQuarters: n("oke8"),
            subSeconds: n("9r5b"),
            subWeeks: n("cw9o"),
            subYears: n("0UyA")
        }
    },
    "x49/": function(e, t, n) {
        e.exports = n.p + "assets/notification_upsell_arrow-c9d4ff7c87444b45d8134f21635c5443.png"
    },
    x9n8: function(e, t, n) {
        "use strict";
        var i = n("RH2O"),
            r = n("2KeS"),
            a = n("V5M+"),
            o = n("Aj/L"),
            s = n("TToO"),
            l = n("HW6M"),
            c = n("GiK3"),
            d = n("6sO2"),
            u = n("J8WN"),
            p = n("+8VM"),
            m = n("7vx8"),
            h = n("puy8"),
            g = n("HZww"),
            f = n("Odds"),
            v = (n("weaG"), function(e) {
                var t = {
                    "default-avatar__selected": e.selected,
                    "default-avatar": !0
                };
                return c.createElement(f._8, {
                    padding: {
                        bottom: 1
                    }
                }, c.createElement("div", {
                    onClick: function() {
                        e.onSelect(e.index)
                    },
                    "aria-label": Object(d.d)("Click to select Default Avatar Number {index, number}", {
                        index: e.index
                    }, "Default Avatar")
                }, c.createElement(f._35, {
                    fullHeight: !0,
                    fullWidth: !0,
                    position: f._15.Relative,
                    className: l(t)
                }, c.createElement("img", {
                    alt: Object(d.d)("Default Avatar Number {index, number}", {
                        index: e.index
                    }, "Default Avatar"),
                    src: e.imageSrc
                }))))
            }),
            b = n("4Q9N"),
            k = n("Tt3k"),
            y = n("W6ca"),
            _ = n("xgnX"),
            S = n("CSlQ"),
            C = (n("AL3x"), n("nmDn")),
            w = ["image/*"],
            E = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        statusMessage: null,
                        imagePreviewURL: "",
                        profileUpdated: !1,
                        currentImageHasTallAspectRatio: !1,
                        imageFormat: ""
                    }, t.currentImage = null, t.logger = d.j.withCategory("ProfileImagePicker"), t.onImageInputChange = function(e) {
                        var n;
                        if (null !== e) {
                            n = e[0];
                            var i = Object(k.a)(n),
                                r = (n.size / 1024 / 1024).toFixed(4);
                            parseInt(r, 10) > 10 ? t.setState({
                                statusMessage: _.b.BadSizeError
                            }) : (t.setState({
                                selectedImageIndex: void 0,
                                imagePreviewURL: "",
                                imageFormat: "",
                                currentImageHasTallAspectRatio: !1
                            }), Object(k.b)(n, function(e) {
                                t.currentImage = e, t.setState({
                                    statusMessage: null
                                })
                            }, function(e) {
                                var n = new Image,
                                    r = !1;
                                n.onload = function() {
                                    n.width < n.height && (r = !0), t.setState({
                                        currentImageHasTallAspectRatio: r
                                    })
                                }, n.src = e, t.setState({
                                    imagePreviewURL: e,
                                    imageFormat: i
                                })
                            }))
                        } else t.setState({
                            statusMessage: _.b.ImageNotSelected
                        })
                    }, t.onUpdateButtonClick = function(e) {
                        return s.__awaiter(t, void 0, void 0, function() {
                            var t, n, i, r, a = this;
                            return s.__generator(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        if (e.preventDefault(), void 0 !== this.state.selectedImageIndex) return this.setDefaultAvatar(), [2];
                                        if (!this.currentImage) return this.setState({
                                            statusMessage: _.b.ImageNotSelected
                                        }), [2];
                                        this.setState({
                                            statusMessage: _.b.Uploading
                                        }), o.label = 1;
                                    case 1:
                                        return o.trys.push([1, 3, , 4]), [4, Object(y.a)(this.props.userID, this.props.authToken, b.a.ProfileImage, this.state.imageFormat)];
                                    case 2:
                                        return t = o.sent(), n = t.upload_url, i = t.upload_id, [3, 4];
                                    case 3:
                                        return r = o.sent(), this.logger.error(r, "Request for upload ID failed to get expected response from server."), this.setState({
                                            statusMessage: _.b.UnexpectedError
                                        }), [2];
                                    case 4:
                                        return this.unsubscribe = d.k.subscribe({
                                            topic: Object(g.i)(this.props.userID),
                                            success: function() {
                                                try {
                                                    Object(y.c)(n, a.currentImage)
                                                } catch (e) {
                                                    a.logger.error(e, "Profile Image upload failed."), a.unsubscribe(), a.setState({
                                                        statusMessage: _.b.UnexpectedError,
                                                        selectedImageIndex: void 0,
                                                        imagePreviewURL: "",
                                                        imageFormat: "",
                                                        currentImageHasTallAspectRatio: !1
                                                    })
                                                }
                                                a.timeoutHandle = setTimeout(function() {
                                                    return a.handlePubSubTimeout()
                                                }, 1e4)
                                            },
                                            failure: function() {
                                                a.setState({
                                                    statusMessage: _.b.UnexpectedError,
                                                    selectedImageIndex: void 0,
                                                    imagePreviewURL: "",
                                                    currentImageHasTallAspectRatio: !1
                                                })
                                            },
                                            onMessage: function(e) {
                                                if (e.upload_id === i) {
                                                    clearTimeout(a.timeoutHandle);
                                                    var t = null;
                                                    t = e.status === _.a.Success ? _.b.Success : e.status === _.a.BadSize ? _.b.BadSizeError : e.status === _.a.NonImage ? _.b.NonImageError : e.status === _.a.WrongFormat ? _.b.WrongFormatError : _.b.UnexpectedError, a.unsubscribe && a.unsubscribe(), a.setState({
                                                        statusMessage: t
                                                    }), a.state.statusMessage === _.b.Success ? a.setState({
                                                        profileUpdated: !0
                                                    }) : (a.setState({
                                                        profileUpdated: !1,
                                                        imagePreviewURL: "",
                                                        imageFormat: ""
                                                    }), a.currentImage = null)
                                                }
                                            }
                                        }), [2]
                                }
                            })
                        })
                    }, t.onDefaultImageSelected = function(e) {
                        t.setState({
                            selectedImageIndex: e,
                            imagePreviewURL: Object(h.a)(h.b[e], 300)
                        })
                    }, t.handlePubSubTimeout = function() {
                        t.unsubscribe(), t.setState({
                            statusMessage: _.b.TimeoutError
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
                        t = h.b.map(function(t, n) {
                            return c.createElement(v, {
                                key: t.id,
                                imageSrc: Object(h.a)(t, 300),
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
                        n = c.createElement(f._8, {
                            className: l(i),
                            "data-test-selector": "preview-image",
                            position: f._15.Relative
                        }, c.createElement("img", {
                            src: "" + this.state.imagePreviewURL
                        }))
                    }
                    var r = null;
                    "" === this.state.imagePreviewURL && (r = c.createElement(f._8, {
                        className: "profile-edit__upload-info"
                    }, c.createElement(f._8, null, c.createElement(f._24, {
                        asset: f._25.Plus,
                        type: f._26.Alt2,
                        height: 20,
                        width: 20
                    })), c.createElement(f.Q, {
                        type: f._49.H3,
                        color: f.K.Alt2,
                        fontSize: f.V.Size4
                    }, Object(d.d)("Upload a Photo", "Profile Edit"))));
                    var a = null;
                    this.props.showCloser && (a = c.createElement(p.a, null));
                    var o = null;
                    if (null !== this.state.statusMessage) {
                        var s = Object(_.c)(this.state.statusMessage),
                            m = s.message,
                            g = s.type;
                        o = c.createElement(f._12, {
                            label: m,
                            type: g
                        })
                    }
                    var b = this.props.login;
                    return this.props.displayName && (b = this.props.displayName), c.createElement(f._8, {
                        className: "profile-edit",
                        position: f._15.Relative,
                        fullHeight: !0
                    }, c.createElement(f._35, {
                        className: "profile-edit__background-container",
                        background: f.n.Base,
                        fullWidth: !0
                    }, c.createElement(f._8, {
                        padding: 2,
                        display: f.R.InlineBlock,
                        position: f._15.Relative,
                        textAlign: f._45.Center,
                        fullWidth: !0
                    }, c.createElement(f._35, {
                        textAlign: f._45.Left,
                        borderBottom: !0,
                        padding: {
                            bottom: 1
                        },
                        margin: {
                            bottom: 2
                        }
                    }, c.createElement(f.Q, {
                        type: f._49.H3,
                        color: f.K.Alt2,
                        fontSize: f.V.Size4
                    }, Object(d.d)("Edit Profile Picture for {userName}", {
                        userName: b
                    }, "Profile Edit"), " ")), c.createElement(f._8, {
                        className: "profile-edit__upload-container",
                        display: f.R.InlineBlock,
                        position: f._15.Relative,
                        textAlign: f._45.Center,
                        margin: {
                            bottom: 1
                        }
                    }, c.createElement(f._8, {
                        className: "profile-edit__upload",
                        display: f.R.InlineBlock,
                        position: f._15.Relative,
                        textAlign: f._45.Center
                    }, c.createElement(u.a, {
                        allowedFileTypes: w,
                        onFilesSubmitted: this.onImageInputChange
                    }, r), n)), c.createElement(f._35, {
                        "data-test-selector": "status-message",
                        fontSize: f.V.Size4,
                        position: f._15.Relative,
                        textAlign: f._45.Center,
                        className: "profile-edit__status-message"
                    }, o), c.createElement(f._35, {
                        borderBottom: !0,
                        padding: {
                            bottom: .5
                        },
                        margin: {
                            bottom: 2
                        }
                    }, c.createElement(f._8, {
                        textAlign: f._45.Left,
                        margin: {
                            bottom: 1
                        }
                    }, c.createElement(f.Q, {
                        type: f._49.H3,
                        color: f.K.Alt2,
                        fontSize: f.V.Size5
                    }, Object(d.d)("Or select one of these", "Profile Edit"))), c.createElement(f._55, {
                        childWidth: f._56.ExtraSmall,
                        gutterSize: f._57.ExtraSmall,
                        placeholderItems: 3
                    }, t)), c.createElement(f._8, {
                        display: f.R.Flex,
                        justifyContent: f._7.Center
                    }, c.createElement(f.v, {
                        "data-test-selector": "update-button",
                        onClick: this.onUpdateButtonClick,
                        size: f.z.Large
                    }, Object(d.d)("Update", "Profile Edit"))))), a)
                }, t.prototype.setDefaultAvatar = function() {
                    return s.__awaiter(this, void 0, void 0, function() {
                        var e, t, n;
                        return s.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    this.setState({
                                        statusMessage: _.b.Uploading
                                    }), e = _.b.UnexpectedError, i.label = 1;
                                case 1:
                                    return i.trys.push([1, 3, , 4]), [4, Object(y.b)(this.props.userID, this.props.authToken, this.state.selectedImageIndex)];
                                case 2:
                                    return 204 === (t = i.sent()).status || 200 === t.status ? e = _.b.Success : this.logger.error(new Error("Default Avatar PUT failed. Fetch returned non-200 status: " + t.status), "Default Avatar PUT failed. Fetch returned non-200 status: " + t.status), [3, 4];
                                case 3:
                                    return n = i.sent(), this.logger.error(n, "Default Avatar PUT failed."), [3, 4];
                                case 4:
                                    return this.setState({
                                        statusMessage: e,
                                        profileUpdated: e === _.b.Success
                                    }), [2]
                            }
                        })
                    })
                }, t = s.__decorate([Object(m.a)(C, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.login
                            }
                        }
                    }
                })], t)
            }(c.Component),
            O = Object(S.d)("Profile Edit")(E);
        var D = Object(i.b)(function(e) {
            return {
                authToken: Object(o.a)(e)
            }
        }, function(e, t) {
            return Object(r.b)({
                closeModal: function() {
                    return t.successCallback && t.successCallback(), Object(a.c)()
                }
            }, e)
        })(O);
        n.d(t, "a", function() {
            return D
        })
    },
    xA5w: function(e, t, n) {
        var i = n("607n"),
            r = 36e5,
            a = 6e4,
            o = 2,
            s = /[T ]/,
            l = /:/,
            c = /^(\d{2})$/,
            d = [/^([+-]\d{2})$/, /^([+-]\d{3})$/, /^([+-]\d{4})$/],
            u = /^(\d{4})/,
            p = [/^([+-]\d{4})/, /^([+-]\d{5})/, /^([+-]\d{6})/],
            m = /^-(\d{2})$/,
            h = /^-?(\d{3})$/,
            g = /^-?(\d{2})-?(\d{2})$/,
            f = /^-?W(\d{2})$/,
            v = /^-?W(\d{2})-?(\d{1})$/,
            b = /^(\d{2}([.,]\d*)?)$/,
            k = /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
            y = /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
            _ = /([Z+-].*)$/,
            S = /^(Z)$/,
            C = /^([+-])(\d{2})$/,
            w = /^([+-])(\d{2}):?(\d{2})$/;

        function E(e, t, n) {
            t = t || 0, n = n || 0;
            var i = new Date(0);
            i.setUTCFullYear(e, 0, 4);
            var r = 7 * t + n + 1 - (i.getUTCDay() || 7);
            return i.setUTCDate(i.getUTCDate() + r), i
        }
        e.exports = function(e, t) {
            if (i(e)) return new Date(e.getTime());
            if ("string" != typeof e) return new Date(e);
            var n = (t || {}).additionalDigits;
            n = null == n ? o : Number(n);
            var O = function(e) {
                    var t, n = {},
                        i = e.split(s);
                    if (l.test(i[0]) ? (n.date = null, t = i[0]) : (n.date = i[0], t = i[1]), t) {
                        var r = _.exec(t);
                        r ? (n.time = t.replace(r[1], ""), n.timezone = r[1]) : n.time = t
                    }
                    return n
                }(e),
                D = function(e, t) {
                    var n, i = d[t],
                        r = p[t];
                    if (n = u.exec(e) || r.exec(e)) {
                        var a = n[1];
                        return {
                            year: parseInt(a, 10),
                            restDateString: e.slice(a.length)
                        }
                    }
                    if (n = c.exec(e) || i.exec(e)) {
                        var o = n[1];
                        return {
                            year: 100 * parseInt(o, 10),
                            restDateString: e.slice(o.length)
                        }
                    }
                    return {
                        year: null
                    }
                }(O.date, n),
                T = D.year,
                N = function(e, t) {
                    if (null === t) return null;
                    var n, i, r, a;
                    if (0 === e.length) return (i = new Date(0)).setUTCFullYear(t), i;
                    if (n = m.exec(e)) return i = new Date(0), r = parseInt(n[1], 10) - 1, i.setUTCFullYear(t, r), i;
                    if (n = h.exec(e)) {
                        i = new Date(0);
                        var o = parseInt(n[1], 10);
                        return i.setUTCFullYear(t, 0, o), i
                    }
                    if (n = g.exec(e)) {
                        i = new Date(0), r = parseInt(n[1], 10) - 1;
                        var s = parseInt(n[2], 10);
                        return i.setUTCFullYear(t, r, s), i
                    }
                    if (n = f.exec(e)) return a = parseInt(n[1], 10) - 1, E(t, a);
                    if (n = v.exec(e)) {
                        a = parseInt(n[1], 10) - 1;
                        var l = parseInt(n[2], 10) - 1;
                        return E(t, a, l)
                    }
                    return null
                }(D.restDateString, T);
            if (N) {
                var I, x = N.getTime(),
                    M = 0;
                return O.time && (M = function(e) {
                    var t, n, i;
                    if (t = b.exec(e)) return (n = parseFloat(t[1].replace(",", "."))) % 24 * r;
                    if (t = k.exec(e)) return n = parseInt(t[1], 10), i = parseFloat(t[2].replace(",", ".")), n % 24 * r + i * a;
                    if (t = y.exec(e)) {
                        n = parseInt(t[1], 10), i = parseInt(t[2], 10);
                        var o = parseFloat(t[3].replace(",", "."));
                        return n % 24 * r + i * a + 1e3 * o
                    }
                    return null
                }(O.time)), O.timezone ? (R = O.timezone, I = (L = S.exec(R)) ? 0 : (L = C.exec(R)) ? (A = 60 * parseInt(L[2], 10), "+" === L[1] ? -A : A) : (L = w.exec(R)) ? (A = 60 * parseInt(L[2], 10) + parseInt(L[3], 10), "+" === L[1] ? -A : A) : 0) : (I = new Date(x + M).getTimezoneOffset(), I = new Date(x + M + I * a).getTimezoneOffset()), new Date(x + M + I * a)
            }
            var R, L, A;
            return new Date(e)
        }
    },
    "xKy+": function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e) {
            var t = i(e),
                n = t.getMonth();
            return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(23, 59, 59, 999), t
        }
    },
    xLg3: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e) {
            var t = i(e),
                n = t.getFullYear();
            return t.setFullYear(n + 1, 0, 0), t.setHours(0, 0, 0, 0), t
        }
    },
    xX9u: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            r = n("GiK3"),
            a = n("Odds"),
            o = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleClickHandler = function(e) {
                        t.props.onClick && t.props.onClick(), e.currentTarget.select()
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(a._4, {
                        readOnly: !0,
                        type: a._5.Text,
                        value: this.props.value,
                        onClick: this.handleClickHandler
                    })
                }, t
            }(r.Component);
        n.d(t, "a", function() {
            return o
        })
    },
    xgnX: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        }), n.d(t, "b", function() {
            return r
        }), t.c = function(e) {
            switch (e) {
                case r.Success:
                    return {
                        message: Object(a.d)("Success!", "Profile Edit"),
                        type: o._13.Success
                    };
                case r.UnexpectedError:
                    return {
                        message: Object(a.d)("Unexpected error, please try again.", "Profile Edit"),
                        type: o._13.Alert
                    };
                case r.BadSizeError:
                    return {
                        message: Object(a.d)("Image might exceed 10MB.", "Profile Edit"),
                        type: o._13.Alert
                    };
                case r.NonImageError:
                    return {
                        message: Object(a.d)("You must upload an image.", "Profile Edit"),
                        type: o._13.Alert
                    };
                case r.WrongFormatError:
                    return {
                        message: Object(a.d)("You must select a valid image type.", "Profile Edit"),
                        type: o._13.Alert
                    };
                case r.TimeoutError:
                    return {
                        message: Object(a.d)("Upload timed-out. Please try again.", "Profile Edit"),
                        type: o._13.Alert
                    };
                case r.Uploading:
                    return {
                        message: Object(a.d)("Uploading....", "Profile Edit"),
                        type: o._13.Brand
                    };
                case r.ImageNotSelected:
                    return {
                        message: Object(a.d)("Select a image first.", "Profile Edit"),
                        type: o._13.Alert
                    };
                default:
                    return {
                        message: Object(a.d)("Please try again.", "Profile Edit"),
                        type: o._13.Alert
                    }
            }
        };
        var i, r, a = n("6sO2"),
            o = n("Odds");
        ! function(e) {
            e.Success = "SUCCESS", e.NonImage = "IS_IMAGE_VALIDATION_FAILED", e.WrongFormat = "IMAGE_FORMAT_VALIDATION_FAILED", e.BadSize = "FILE_SIZE_VALIDATION_FAILED"
        }(i || (i = {})),
        function(e) {
            e[e.Success = 0] = "Success", e[e.UnexpectedError = 1] = "UnexpectedError", e[e.BadSizeError = 2] = "BadSizeError", e[e.NonImageError = 3] = "NonImageError", e[e.WrongFormatError = 4] = "WrongFormatError", e[e.TimeoutError = 5] = "TimeoutError", e[e.Uploading = 6] = "Uploading", e[e.ImageNotSelected = 7] = "ImageNotSelected"
        }(r || (r = {}))
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
    },
    yF7E: function(e, t) {},
    yU6t: function(e, t) {},
    ymQ7: function(e, t, n) {
        var i = n("xA5w"),
            r = n("JURy"),
            a = n("nizW");
        e.exports = function(e) {
            var t = i(e);
            return a(t, r(t)) + 1
        }
    },
    yu3m: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e) {
            return 4 === i(e).getDay()
        }
    },
    ywOv: function(e, t, n) {
        "use strict";
        var i;
        n.d(t, "a", function() {
                return i
            }), n.d(t, "d", function() {
                return r
            }), n.d(t, "b", function() {
                return a
            }), n.d(t, "c", function() {
                return o
            }),
            function(e) {
                e[e.Left = 0] = "Left", e[e.Right = 1] = "Right"
            }(i || (i = {}));
        var r = "root",
            a = "addTo",
            o = "collections"
    },
    z3wv: function(e, t, n) {
        var i = n("qPxx");
        e.exports = function(e) {
            return i(new Date, e)
        }
    },
    z4Db: function(e, t) {},
    zAjo: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            r = n("GiK3"),
            a = n("6sO2"),
            o = n("+Znq"),
            s = n("xX9u"),
            l = n("/Cz7"),
            c = n("Odds"),
            d = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = this,
                        t = Object(l.a)(this.props.collection.id);
                    return r.createElement("div", null, r.createElement(c.Q, null, Object(a.d)("Collection Link", "VideoShareBox")), r.createElement(s.a, {
                        onClick: function() {
                            e.props.onClick(t)
                        },
                        value: t
                    }))
                }, t
            }(r.Component),
            u = n("cAee"),
            p = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onClickHandler = function(e) {
                        var n = {
                            location: t.props.tracking.location,
                            platform: u.a.Link,
                            shareURL: e
                        };
                        Object(u.b)(t.props.collection, n, a.o.apollo.client)
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(d, i.__assign({}, this.props, {
                        onClick: this.onClickHandler
                    }))
                }, t
            }(r.Component),
            m = n("AoO8"),
            h = n("vH/s"),
            g = n("Ryxq"),
            f = n("sJBK");
        var v = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = this,
                        t = this.props.content,
                        n = this.getEmbedPlayerContentURL(t);
                    return r.createElement("div", null, r.createElement(c.Q, null, Object(a.d)("Embed Video", "VideoShareBox")), r.createElement(s.a, {
                        onClick: function() {
                            e.props.onClick(n)
                        },
                        value: this.getEmbedPlayerCode(t)
                    }))
                }, t.prototype.getEmbedPlayerCode = function(e) {
                    var t = function(e, t) {
                            var n = {
                                autoplay: !1
                            };
                            switch (e.type) {
                                case f.a.Collection:
                                    e.currentVideo ? (n.video = e.currentVideo.id, n.t = t ? Object(g.a)(t) : void 0) : n.collection = e.id;
                                    break;
                                case f.a.Video:
                                    n.video = e.id, n.t = t ? Object(g.a)(t) : void 0
                            }
                            return n
                        }(e, null !== this.props.selectedVideoStartTime ? this.props.selectedVideoStartTime : void 0),
                        n = e.owner.displayName,
                        i = e.title,
                        r = Object(a.d)("Watch {title} from {displayName} on www.twitch.tv", {
                            displayName: n,
                            title: i
                        }, "VideoShareBox");
                    return Object(m.b)(t, {
                        textLink: {
                            url: this.getEmbedPlayerContentURL(e),
                            text: r
                        },
                        allowScrolling: !1,
                        allowFullscreen: !0
                    })
                }, t.prototype.getEmbedPlayerContentURL = function(e) {
                    switch (e.type) {
                        case f.a.Collection:
                            return e.currentVideo ? Object(l.b)(e.currentVideo.id, {
                                tt_medium: h.PageviewMedium.VideoEmbed,
                                tt_content: h.PageviewContent.TextLink,
                                t: this.props.selectedVideoStartTime
                            }) : Object(l.a)(e.id, {
                                tt_medium: h.PageviewMedium.VideoEmbed,
                                tt_content: h.PageviewContent.TextLink
                            });
                        case f.a.Video:
                            return Object(l.b)(e.id, {
                                tt_medium: h.PageviewMedium.VideoEmbed,
                                tt_content: h.PageviewContent.TextLink,
                                t: this.props.selectedVideoStartTime
                            });
                        default:
                            return e
                    }
                }, t
            }(r.Component),
            b = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onClickHandler = function(e) {
                        var n = t.props.content;
                        switch (n.type) {
                            case f.a.Collection:
                                n.currentVideo ? t.trackVideoShare(e, n.currentVideo) : t.trackCollectionShare(e, n);
                                break;
                            case f.a.Video:
                                t.trackVideoShare(e, n);
                                break;
                            default:
                                return n
                        }
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(v, i.__assign({}, this.props, {
                        onClick: this.onClickHandler
                    }))
                }, t.prototype.trackCollectionShare = function(e, t) {
                    var n = {
                        location: this.props.tracking.location,
                        platform: u.a.Embed,
                        shareURL: e
                    };
                    Object(u.b)(t, n, a.o.apollo.client)
                }, t.prototype.trackVideoShare = function(e, t) {
                    var n = {
                        location: this.props.tracking.location,
                        platform: u.a.Embed,
                        shareURL: e
                    };
                    Object(u.c)(t, n, a.o.apollo.client)
                }, t
            }(r.Component),
            k = n("bhVC"),
            y = [{
                type: k.b.Twitter,
                selector: "twitter-button"
            }, {
                type: k.b.Facebook,
                selector: "fb-button"
            }, {
                type: k.b.VKontakte,
                selector: "vk-button"
            }, {
                type: k.b.Reddit,
                selector: "reddit-button"
            }, {
                type: k.b.Copy,
                selector: "copy-link-button"
            }],
            _ = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = this,
                        t = this.props.content,
                        n = this.getContentURL(t),
                        i = this.getSocialShareContextTitle(t),
                        a = y.map(function(t) {
                            return r.createElement(k.a, {
                                "data-test-selector": t.selector,
                                key: t.type,
                                onShareClick: function(t) {
                                    e.props.onClick(n, t)
                                },
                                text: i,
                                type: t.type,
                                url: n
                            })
                        });
                    return r.createElement(c._8, {
                        display: c.R.Flex,
                        justifyContent: c._7.Between
                    }, a)
                }, t.prototype.getSocialShareContextTitle = function(e) {
                    return Object(a.d)("Check out {title} from {displayName} on www.twitch.tv", {
                        displayName: e.owner.displayName,
                        title: e.title
                    }, "VideoShareBox")
                }, t.prototype.getContentURL = function(e) {
                    switch (e.type) {
                        case f.a.Collection:
                            return e.currentVideo ? Object(l.b)(e.currentVideo.id, {
                                collection: e.id,
                                t: this.props.selectedVideoStartTime
                            }) : Object(l.a)(e.id);
                        case f.a.Video:
                            return Object(l.b)(e.id, {
                                t: this.props.selectedVideoStartTime
                            });
                        default:
                            return e
                    }
                }, t
            }(r.Component),
            S = function(e) {
                switch (e) {
                    case k.b.Twitter:
                        return u.a.Twitter;
                    case k.b.Reddit:
                        return u.a.Reddit;
                    case k.b.VKontakte:
                        return u.a.VKontakte;
                    case k.b.Facebook:
                        return u.a.Facebook;
                    case k.b.Copy:
                        return u.a.Copy;
                    case k.b.CopyInput:
                        return u.a.Link;
                    case k.b.Download:
                        return u.a.Download;
                    default:
                        return e
                }
            },
            C = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onClickHandler = function(e, n) {
                        var i = t.props.content;
                        switch (i.type) {
                            case f.a.Collection:
                                i.currentVideo ? t.trackVideoShare(e, i.currentVideo, n, i.id) : t.trackCollectionShare(e, i, n);
                                break;
                            case f.a.Video:
                                t.trackVideoShare(e, i, n);
                                break;
                            default:
                                return i
                        }
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(_, i.__assign({}, this.props, {
                        onClick: this.onClickHandler
                    }))
                }, t.prototype.trackCollectionShare = function(e, t, n) {
                    var i = {
                        location: this.props.tracking.location,
                        platform: S(n),
                        shareURL: e
                    };
                    Object(u.b)(t, i, a.o.apollo.client)
                }, t.prototype.trackVideoShare = function(e, t, n, i) {
                    var r = {
                        collectionID: i,
                        location: this.props.tracking.location,
                        platform: S(n),
                        shareURL: e
                    };
                    Object(u.c)(t, r, a.o.apollo.client)
                }, t
            }(r.Component),
            w = n("mi6k"),
            E = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onShareTimestampClick = function(e) {
                        void 0 !== t.props.currentVideoTime && t.props.onVideoStartTimeChange(e.currentTarget.checked ? t.props.currentVideoTime : void 0)
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = this,
                        t = {};
                    this.props.collectionID && (t.collection = this.props.collectionID), this.props.selectedVideoStartTime && (t.t = this.props.selectedVideoStartTime);
                    var n = Object(l.b)(this.props.video.id, t);
                    return r.createElement("div", null, r.createElement(c.Q, null, Object(a.d)("Video Link", "VideoShareBox")), r.createElement(s.a, {
                        onClick: function() {
                            e.props.onInputClick(n)
                        },
                        value: n
                    }), this.renderCurrentVideoOffsetLinkOption())
                }, t.prototype.renderCurrentVideoOffsetLinkOption = function() {
                    if (void 0 === this.props.currentVideoTime) return null;
                    var e = this.props.selectedVideoStartTime || this.props.currentVideoTime,
                        t = Object(w.b)(e);
                    return r.createElement(c._8, {
                        padding: {
                            top: .5
                        }
                    }, r.createElement(c.J, {
                        id: "video-share-timestamp-toggle",
                        label: Object(a.d)("Skip to {deeplinkTimestamp}", {
                            deeplinkTimestamp: t
                        }, "VideoShareBox"),
                        "data-a-target": "video-share-timestamp-toggle",
                        "data-a-value": void 0 !== this.props.selectedVideoStartTime,
                        checked: !!this.props.selectedVideoStartTime,
                        onChange: this.onShareTimestampClick
                    }))
                }, t
            }(r.Component),
            O = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onClickHandler = function(e, n) {
                        var i = {
                            collectionID: n,
                            location: t.props.tracking.location,
                            platform: u.a.Link,
                            shareURL: e
                        };
                        Object(u.c)(t.props.video, i, a.o.apollo.client)
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(E, i.__assign({}, this.props, {
                        onInputClick: this.onClickHandler
                    }))
                }, t
            }(r.Component);
        n.d(t, "a", function() {
            return D
        });
        var D = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.state = {}, t.onVideoStartTimeChangeHandler = function(e) {
                    t.setState({
                        selectedVideoStartTime: e
                    })
                }, t
            }
            return i.__extends(t, e), t.prototype.render = function() {
                var e = null;
                return this.props.content && (e = this.shareBalloonContent(this.props.content)), r.createElement(o.a, null, r.createElement(c.v, {
                    disabled: !this.props.content,
                    icon: c._25.Share,
                    type: this.props.buttonType
                }, Object(a.d)("Share", "VideoShareBox")), r.createElement(c.q, {
                    direction: this.props.balloonDirection,
                    size: c.s.Small
                }, e))
            }, t.prototype.shareBalloonContent = function(e) {
                return r.createElement(c._8, {
                    padding: 1
                }, r.createElement(C, {
                    content: e,
                    selectedVideoStartTime: this.state.selectedVideoStartTime,
                    tracking: this.props.tracking
                }), this.renderCollectionShareInput(e), this.renderVideoShareInput(e), this.renderEmbedPlayerInput(e))
            }, t.prototype.renderCollectionShareInput = function(e) {
                return e.type !== f.a.Collection ? null : r.createElement(c._8, {
                    padding: {
                        top: 1
                    }
                }, r.createElement(p, {
                    collection: e,
                    tracking: this.props.tracking
                }))
            }, t.prototype.renderVideoShareInput = function(e) {
                var t, n;
                if (e.type === f.a.Collection) {
                    if (!e.currentVideo) return null;
                    n = e.id, t = e.currentVideo
                } else t = e;
                return r.createElement(c._8, {
                    padding: {
                        top: 1
                    }
                }, r.createElement(O, {
                    collectionID: n,
                    currentVideoTime: this.props.currentVideoTime,
                    onVideoStartTimeChange: this.onVideoStartTimeChangeHandler,
                    selectedVideoStartTime: this.state.selectedVideoStartTime,
                    tracking: this.props.tracking,
                    video: t
                }))
            }, t.prototype.renderEmbedPlayerInput = function(e) {
                return r.createElement(c._8, {
                    padding: {
                        top: 1
                    }
                }, r.createElement(b, {
                    content: e,
                    selectedVideoStartTime: this.state.selectedVideoStartTime,
                    tracking: this.props.tracking
                }))
            }, t
        }(r.Component)
    },
    zGmo: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        }), n.d(t, "b", function() {
            return r
        });
        var i = {
                Created: "created",
                Downloading: "downloading",
                Transmuxing: "transmuxing",
                Failed: "failed",
                Complete: "complete"
            },
            r = "public"
    },
    zQFw: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e) {
            var t = i(e),
                n = t.getMonth(),
                r = n - n % 3 + 3;
            return t.setMonth(r, 0), t.setHours(23, 59, 59, 999), t
        }
    },
    zZbG: function(e, t, n) {
        var i = n("xA5w"),
            r = n("3znZ");
        e.exports = function(e) {
            var t = i(e),
                n = t.getFullYear(),
                a = new Date(0);
            a.setFullYear(n + 1, 0, 4), a.setHours(0, 0, 0, 0);
            var o = r(a),
                s = new Date(0);
            s.setFullYear(n, 0, 4), s.setHours(0, 0, 0, 0);
            var l = r(s);
            return t.getTime() >= o.getTime() ? n + 1 : t.getTime() >= l.getTime() ? n : n - 1
        }
    }
});
//# sourceMappingURL=pages.video-watch-a2aefdd2c3cea1bdfbdc48cca9b9dd07.js.map