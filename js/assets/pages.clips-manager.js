(window.webpackJsonp = window.webpackJsonp || []).push([
    [178], {
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
        "2cRt": function(e, t, n) {
            "use strict";
            var a = n("q1tI"),
                i = n("/7QA"),
                r = n("SGIe"),
                l = function(e) {
                    return a.createElement(r.a, {
                        callToAction: Object(i.d)("Save as Highlight", "ClipsFullVideoButton"),
                        clip: e.clip,
                        onClick: e.onClick
                    })
                };
            n.d(t, "a", function() {
                return l
            })
        },
        "4L7N": function(e, t, n) {
            "use strict";
            var a = n("/MKj"),
                i = n("kRBY"),
                r = n("mrSG"),
                l = n("q1tI"),
                s = n("VwyG"),
                o = n("X7Ac"),
                c = n("yR8l"),
                d = n("MLDe"),
                u = n("v8tf"),
                p = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this,
                            t = this.props.data.clip,
                            n = "";
                        if (t && t.videoQualities) {
                            var a = t.videoQualities[0];
                            n = a.sourceURL
                        }
                        var i = this.props,
                            r = i.broadcasterId,
                            c = i.broadcasterLogin,
                            u = i.forceShow;
                        return l.createElement(s.a, {
                            ownerLogin: this.props.broadcasterLogin,
                            permittedRoles: {
                                editor: !0,
                                staff: !0
                            }
                        }, function(a) {
                            var i = a.permitted;
                            return n && (i || u) ? l.createElement(o.a, {
                                type: o.b.Download,
                                text: e.props.slug,
                                url: n,
                                onShareClick: t ? Object(d.c)(t.id, t.game && t.game.name, r, c, e.props.pageType) : void 0
                            }) : null
                        })
                    }, t
                }(l.Component),
                m = Object(c.a)(u)(p);
            var g = Object(a.connect)(function(e) {
                var t = Object(i.e)(e);
                return {
                    userLogin: t ? t.login : ""
                }
            })(m);
            n.d(t, "a", function() {
                return g
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
        "BQs+": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            }), n.d(t, "c", function() {
                return d
            }), n.d(t, "b", function() {
                return u
            });
            var a, i = n("mrSG"),
                r = n("/7QA"),
                l = n("2xye"),
                s = n("I6K6"),
                o = n("bTcf"),
                c = n("L7EG");

            function d(e, t, n) {
                return i.__awaiter(this, void 0, void 0, function() {
                    var a, o, u, p;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return i.trys.push([0, 2, , 3]), [4, n.query({
                                    query: c,
                                    variables: {
                                        videoID: e.id
                                    }
                                })];
                            case 1:
                                return a = i.sent().data, o = function(e, t) {
                                    return {
                                        id: e.id,
                                        owner: t.owner,
                                        broadcastType: t.broadcastType,
                                        game: t.game
                                    }
                                }(e, a.video), u = {
                                    channel: o.owner ? o.owner.login : null,
                                    channel_id: Number(e.owner.id),
                                    game: o.game ? o.game.name : null,
                                    partner: !!o.owner && o.owner.roles.isPartner,
                                    location: t.location,
                                    share_context: t.collectionID ? l.ShareItemContext.Collection : null,
                                    share_platform: t.platform,
                                    shared_item_id: t.collectionID ? t.collectionID : o.id,
                                    shared_item_type: t.collectionID ? l.ShareItemType.Collection : Object(s.a)(o.broadcastType),
                                    shared_item_url: t.shareURL,
                                    source_item_id: o.id,
                                    source_item_type: Object(s.a)(o.broadcastType)
                                }, r.p.tracking.track(l.SpadeEventType.ShareItem, u), [3, 3];
                            case 2:
                                return p = i.sent(), r.k.error(p.toString(), d.name), [3, 3];
                            case 3:
                                return [2]
                        }
                    })
                })
            }

            function u(e, t, n) {
                return i.__awaiter(this, void 0, void 0, function() {
                    var a, s, c;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return i.trys.push([0, 2, , 3]), [4, n.query({
                                    query: o,
                                    variables: {
                                        creatorID: e.owner.id
                                    }
                                })];
                            case 1:
                                return a = i.sent().data, s = {
                                    channel: a.user ? a.user.login : null,
                                    channel_id: Number(e.owner.id),
                                    game: null,
                                    partner: !!a.user && a.user.roles.isPartner,
                                    location: t.location,
                                    share_context: null,
                                    share_platform: t.platform,
                                    shared_item_id: e.id,
                                    shared_item_type: l.ShareItemType.Collection,
                                    shared_item_url: t.shareURL,
                                    source_item_id: e.id,
                                    source_item_type: l.SourceItemType.Collection
                                }, r.p.tracking.track(l.SpadeEventType.ShareItem, s), [3, 3];
                            case 2:
                                return c = i.sent(), r.k.error(c.toString(), u.name), [3, 3];
                            case 3:
                                return [2]
                        }
                    })
                })
            }! function(e) {
                e.Copy = "link", e.Embed = "option_embed", e.Facebook = "fb", e.Link = "option_link", e.Reddit = "reddit", e.Twitter = "twitter", e.Unknown = "", e.VKontakte = "vk", e.Download = "download"
            }(a || (a = {}))
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
        EdhP: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return o
            }), n.d(t, "a", function() {
                return c
            });
            var a = n("mrSG"),
                i = n("cr+I"),
                r = n("/7QA"),
                l = n("vRsq"),
                s = {
                    height: 378,
                    width: 620,
                    allowScrolling: !0,
                    allowFullscreen: !0
                };

            function o(e, t) {
                return c(function(e) {
                    e.video && (e.video = Object(l.p)(e.video));
                    var t = i.stringify(e);
                    return r.p.config.playerBaseURL + "/?" + t
                }(e), t)
            }

            function c(e, t) {
                void 0 === t && (t = s);
                var n = a.__assign({}, s, t),
                    i = '<iframe src="' + e + '" frameborder="0" ' + (n.allowFullscreen ? 'allowfullscreen="true" ' : "") + (n.allowScrolling ? "" : 'scrolling="no" ') + 'height="' + n.height + '" width="' + n.width + '"></iframe>';
                return n.textLink && (i += function(e, t) {
                    return '<a href="' + e + '" style="padding:2px 0px 4px; display:block; width:345px; font-weight:normal; font-size:10px; text-decoration:underline;">' + t + "</a>"
                }(n.textLink.url, n.textLink.text)), i
            }
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
        II1B: function(e, t, n) {},
        "Jxh/": function(e, t, n) {
            "use strict";

            function a(e) {
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
                return a
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
                return d
            }), n.d(t, "b", function() {
                return u
            }), n.d(t, "c", function() {
                return m
            }), n.d(t, "d", function() {
                return g
            });
            var a, i, r = n("/7QA"),
                l = n("wbMx"),
                s = n("2xye"),
                o = n("BQs+"),
                c = ((a = {})[l.b.Twitter] = "twitter", a[l.b.Reddit] = "reddit", a[l.b.VKontakte] = "vkontakte", a[l.b.Facebook] = "facebook", a[l.b.Copy] = "link", a[l.b.CopyInput] = "option_link", a[l.b.Download] = "download", a),
                d = {
                    MyClips: "MyClips",
                    ClipsOfMyChannel: "ClipsOfMyChannel"
                },
                u = {
                    Game: "TopClipsGame",
                    Channel: "TopClipsChannel"
                },
                p = ((i = {
                    MyClips: s.PageviewLocation.MyClipsManager,
                    ClipsOfMyChannel: s.PageviewLocation.ChannelClipsManager,
                    TopClipsGame: s.PageviewLocation.ClipsGame,
                    TopClipsChannel: s.PageviewLocation.ChannelClips
                })[s.PageviewLocation.ClipsEditing] = s.PageviewLocation.ClipsEditing, i[s.PageviewLocation.ClipsViewing] = s.PageviewLocation.ClipsViewing, i[s.PageviewLocation.ClipsWatchPage] = s.PageviewLocation.ClipsWatchPage, i),
                m = function(e, t, n, a, i) {
                    return function(l) {
                        r.p.tracking.track(s.SpadeEventType.VideoShare, {
                            vod_id: e,
                            vod_type: s.SpadeVideoBroadcastType.Clip,
                            share_platform: c[l],
                            location: p[i],
                            game: t,
                            channel_id: Number(n || 0),
                            channel: a,
                            live: null
                        })
                    }
                },
                g = function(e, t, n, a, i, l) {
                    return function() {
                        r.p.tracking.track(s.SpadeEventType.VideoShare, {
                            vod_id: e,
                            vod_type: s.SpadeVideoBroadcastType.Clip,
                            share_platform: o.a.Link,
                            location: p[i],
                            game: t,
                            channel_id: Number(n || 0),
                            channel: a,
                            live: null,
                            shared_item_url: l
                        })
                    }
                }
        },
        OTul: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return l
            }), n.d(t, "j", function() {
                return o
            }), n.d(t, "b", function() {
                return c
            }), n.d(t, "f", function() {
                return d
            }), n.d(t, "c", function() {
                return p
            }), n.d(t, "g", function() {
                return m
            }), n.d(t, "i", function() {
                return g
            }), n.d(t, "e", function() {
                return h
            }), n.d(t, "d", function() {
                return f
            }), n.d(t, "h", function() {
                return b
            });
            var a = n("+GjP"),
                i = n("rwoo"),
                r = n("QK1T"),
                l = "https://static-cdn.jtvnw.net/emoticons/v1/",
                s = "manager";

            function o(e) {
                return void 0 === e && (e = ""), "https://www.twitch.tv/" + e
            }

            function c(e) {
                return void 0 === e && (e = ""), "https://clips.twitch.tv/" + e
            }

            function d(e, t) {
                return void 0 === e && (e = null), void 0 === t && (t = {}), Object(a.e)(u(e) + "/clips", t)
            }

            function u(e, t) {
                return void 0 === e && (e = null), void 0 === t && (t = {}), e ? Object(a.e)(o(e + "/" + s), t) : Object(a.e)(o(s), t)
            }

            function p(e, t) {
                return void 0 === t && (t = {}), Object(a.e)(o("" + e), t)
            }

            function m(e, t, n) {
                return void 0 === n && (n = {}), Object(a.e)(u(e) + "/highlighter/" + t, n)
            }

            function g(e, t) {
                return void 0 === t && (t = {}), Object(a.e)(o("videos/" + e), t)
            }

            function h(e, t) {
                return void 0 === t && (t = {}), Object(a.e)(function(e) {
                    return o("directory/game/" + e)
                }(e) + "/clips", t)
            }

            function f(e, t) {
                void 0 === t && (t = {});
                var n = Object(a.e)(p(e) + "/clips", t);
                return Object(r.a)(window.navigator.userAgent) ? function(e, t) {
                    return "intent://stream/" + e + "#Intent;scheme=twitch;package=tv.twitch.android.app;S.browser_fallback_url=" + t + ";end"
                }(e, n) : n
            }

            function b(e) {
                return void 0 === e && (e = i.a.Default), "/clips/" + e
            }
        },
        OlqP: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ClipsManagerExpandedRow_CurrentUser"
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
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 64
                }
            };
            n.loc.source = {
                body: "query ClipsManagerExpandedRow_CurrentUser {\ncurrentUser {\nid\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "Pub/": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            });
            var a = n("HzXE");

            function i(e, t, n) {
                try {
                    return e.readQuery({
                        query: a,
                        variables: {
                            channelID: t,
                            targetUserID: n
                        }
                    })
                } catch (e) {}
            }
        },
        QlyS: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "clipsManagerClip"
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
                                value: "viewCount"
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
                                            value: "52"
                                        }
                                    }, {
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "height"
                                        },
                                        value: {
                                            kind: "IntValue",
                                            value: "72"
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
                                value: "durationSeconds"
                            },
                            arguments: [],
                            directives: []
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
                                value: "videoOffsetSeconds"
                            },
                            arguments: [],
                            directives: []
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 350
                }
            };
            n.loc.source = {
                body: "fragment clipsManagerClip on Clip {\nid\nslug\nurl\nembedURL\ntitle\nviewCount\nlanguage\ncurator {\nid\nlogin\ndisplayName\n}\ngame {\nid\nname\nboxArtURL(width: 52 height: 72)\ndisplayName\n}\nbroadcaster {\nid\nlogin\ndisplayName\nprofileImageURL(width: 50)\n}\nthumbnailURL\ncreatedAt\ndurationSeconds\nchampBadge {\nid\n}\nvideo {\nid\nbroadcastType\ntitle\n}\nvideoOffsetSeconds\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "Rc6/": function(e, t, n) {},
        SGIe: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return d
            });
            var a, i = n("q1tI"),
                r = n("/7QA"),
                l = n("DMoW"),
                s = n("CLrI"),
                o = n("OTul"),
                c = n("Ue10");
            ! function(e) {
                e.ClipsVideoButtonHighlight = "clips-video-button-highlight"
            }(a || (a = {}));
            var d = function(e) {
                var t, n = e.clip;
                if (!(n.video && n.video.id && null !== n.videoOffsetSeconds && n.broadcaster && n.broadcaster.login && n.video.broadcastType === l.i.ARCHIVE)) {
                    var d = n.video ? Object(r.d)("You can only highlight past broadcasts", "ClipsFullVideoButton") : Object(r.d)("Full video not available", "ClipsFullVideoButton");
                    return i.createElement(c.Yb, {
                        label: d
                    }, i.createElement(c.z, {
                        type: e.buttonType,
                        disabled: !0
                    }, e.callToAction))
                }
                return i.createElement(c.z, {
                    targetBlank: !0,
                    linkTo: Object(o.g)(n.broadcaster.login, n.video.id, (t = {}, t[s.a.TrackingID] = n.id, t[s.a.Start] = n.videoOffsetSeconds.toString(), t[s.a.End] = (n.videoOffsetSeconds + n.durationSeconds).toString(), t[s.a.Title] = n.title || "Clip: " + n.video.title, t[s.a.GameName] = n.game && n.game.displayName || "", t[s.a.GameID] = n.game && n.game.id || "", t)),
                    onClick: e.onClick,
                    type: e.buttonType,
                    "data-test-selector": a.ClipsVideoButtonHighlight
                }, e.callToAction)
            }
        },
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
            var a = n("/MKj"),
                i = n("kRBY"),
                r = n("mrSG"),
                l = n("q1tI"),
                s = n("oJmH"),
                o = n("/7QA"),
                c = n("yR8l"),
                d = n("GnwI"),
                u = n("nt5g"),
                p = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.logger = o.k.withCategory("role-restricted"), n.state = {
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
                }(l.Component);
            var m = Object(s.compose)(Object(c.a)(u, {
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
            }), Object(d.b)("RoleRestricted"))(p);
            var g = Object(a.connect)(function(e) {
                return {
                    isLoggedIn: Object(i.f)(e)
                }
            })(m);
            n.d(t, "a", function() {
                return g
            })
        },
        WSjS: function(e, t, n) {
            "use strict";
            var a, i, r, l = n("mrSG"),
                s = n("q1tI"),
                o = n("/7QA"),
                c = n("yR8l"),
                d = n("8Ad5"),
                u = n("geRD"),
                p = n("2xye"),
                m = function(e, t, n, a, i) {
                    var r = Date.now() / 1e3;
                    o.p.tracking.track(p.SpadeEventType.ClipEdit, {
                        channel_id: e,
                        clip_edit_session_id: t + "," + Math.floor(r),
                        clip_id: t,
                        clip_slug: n,
                        effect_name: "title",
                        effect_setting: a,
                        front_end: !0,
                        location: i
                    })
                },
                g = function(e, t, n, a, i) {
                    var r = Date.now() / 1e3;
                    o.p.tracking.track(p.SpadeEventType.ClipEdit, {
                        channel_id: e,
                        clip_edit_session_id: t + "," + Math.floor(r),
                        clip_id: t,
                        clip_slug: n,
                        effect_name: "publish-twilight",
                        effect_setting: a,
                        front_end: !0,
                        location: i
                    })
                },
                h = n("9C/b");
            ! function(e) {
                e.AlreadyPublished = "already_published", e.EditingWindowExpired = "editing_window_expired", e.InvalidSpeedDuration = "invalid_speed_duration", e.InvalidDuration = "invalid_duration", e.InvalidTitle = "invalid_title", e.Unknown = "unknown"
            }(a || (a = {})),
            function(e) {
                e.InvalidTitle = "invalid_title"
            }(i || (i = {})),
            function(e) {
                e.Unsent = "unsent", e.Sending = "sending", e.Error = "error", e.Successful = "successful"
            }(r || (r = {}));
            var f, b = 5,
                v = 60,
                k = n("Ue10"),
                C = n("5EAu"),
                S = {
                    publishState: r.Unsent,
                    errorMessage: null
                },
                y = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = S, t.onError = function(e) {
                            t.setState({
                                publishState: r.Error,
                                errorMessage: e
                            }), t.props.onError(e)
                        }, t.onPublish = function() {
                            return l.__awaiter(t, void 0, void 0, function() {
                                var e, t, n;
                                return l.__generator(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            if (this.setState({
                                                    publishState: r.Sending
                                                }), e = this.props.endOffset - this.props.startOffset, this.props.startOffset > this.props.endOffset || e < b || e > v) return this.onError(a.InvalidDuration), [2];
                                            if ("" === this.props.title.trim()) return this.onError(f.emptySubmission), [2];
                                            i.label = 1;
                                        case 1:
                                            return i.trys.push([1, 3, , 4]), [4, this.props.publishClip(Object(u.a)({
                                                segments: [{
                                                    offsetSeconds: this.props.startOffset,
                                                    durationSeconds: this.props.endOffset - this.props.startOffset,
                                                    speed: 1
                                                }],
                                                slug: this.props.slug,
                                                title: this.props.title
                                            }))];
                                        case 2:
                                            return (t = i.sent()).data.publishClip && t.data.publishClip.error && t.data.publishClip.error.message ? (n = t.data.publishClip.error.message, this.onError(n)) : (g(Number(this.props.clipBroadcasterId), this.props.clipId, this.props.slug, this.props.title, p.PageviewLocation.ClipsEditing), this.setState({
                                                publishState: r.Successful
                                            }), this.props.history.push("/create", {
                                                isPostEdit: !0,
                                                slug: this.props.slug
                                            })), [3, 4];
                                        case 3:
                                            return i.sent(), n = a.Unknown, this.onError(n), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                        this.state.publishState === r.Error && e.title.length > 0 && this.props.title !== e.title && this.setState(S), e.isSubmitted && !this.props.isSubmitted && this.onPublish()
                    }, t.prototype.render = function() {
                        var e = this.state.publishState === r.Error,
                            t = this.state.publishState === r.Sending;
                        return s.createElement(k.Xa, null, s.createElement(k.z, {
                            onClick: this.onPublish,
                            disabled: e,
                            state: t ? k.E.Loading : k.E.Default,
                            size: k.D.Large,
                            blurAfterClick: !0
                        }, Object(o.d)("Publish", "ClipsPublishButton")))
                    }, t = l.__decorate([Object(c.a)(C, {
                        name: "publishClip"
                    })], t)
                }(s.Component),
                E = Object(h.a)(y),
                w = n("/2kD"),
                N = {
                    TITLE_INPUT: "cmgr-title-input",
                    TITLE_SAVE: "cmgr-title-save",
                    TITLE_SAVE_TOOLTIP: "cmgr-title-save-tooltip"
                };
            ! function(e) {
                e.emptySubmission = "emptySubmission", e.characterLimitReached = "characterLimitReached", e.channelViolation = "channelViolation", e.notCurator = "notCurator", e.unknown = "unknown"
            }(f || (f = {}));
            var T = 100,
                D = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.renderForClipsViewing = function() {
                            return s.createElement("div", null, s.createElement(k.Sb, {
                                id: N.TITLE_INPUT,
                                "data-test-selector": N.TITLE_INPUT,
                                value: n.state.title,
                                onChange: n.handleTitleEdit,
                                onKeyDown: n.handleKeyDown
                            }), s.createElement(k.Xa, {
                                display: k.X.Flex,
                                justifyContent: k.Wa.Between,
                                alignItems: k.f.Center,
                                padding: {
                                    top: 1
                                }
                            }, n.state.showError ? s.createElement(k.W, {
                                color: k.O.Error
                            }, n.getErrorMessage()) : s.createElement(k.W, {
                                color: k.O.Alt2
                            }, n.getRemainingCharacterText()), s.createElement(k.Xa, {
                                display: k.X.Flex
                            }, s.createElement(k.z, {
                                "data-test-selector": N.TITLE_SAVE,
                                onClick: n.props.onCancel,
                                type: k.F.Hollow
                            }, Object(o.d)("Cancel", "ClipsTitleEdit")), s.createElement(k.Xa, {
                                padding: {
                                    left: 1
                                }
                            }, n.renderSave()))))
                        }, n.renderForManager = function() {
                            return s.createElement(k.Ea, {
                                id: N.TITLE_INPUT,
                                label: Object(o.d)("Title", "ClipsTitleEdit"),
                                hint: n.getRemainingCharacterText()
                            }, s.createElement(k.Xa, {
                                display: k.X.Flex,
                                flexWrap: k.Ba.NoWrap
                            }, s.createElement(k.Xa, {
                                flexGrow: 1,
                                margin: {
                                    right: 1
                                }
                            }, s.createElement(k.Ra, {
                                id: N.TITLE_INPUT,
                                "data-test-selector": N.TITLE_INPUT,
                                type: k.Ta.Text,
                                value: n.state.title,
                                onChange: n.handleTitleEdit,
                                onKeyDown: n.handleKeyDown
                            })), s.createElement(k.Xa, {
                                flexShrink: 0,
                                flexGrow: 0
                            }, s.createElement(k.Xa, {
                                position: k.jb.Relative
                            }, n.renderSave(), s.createElement(k.Ua, {
                                onClick: n.dismissMessage,
                                "data-test-selector": N.TITLE_SAVE_TOOLTIP
                            }, s.createElement(k.u, {
                                direction: k.v.TopRight,
                                show: n.state.showError || n.state.showSuccess
                            }, s.createElement(k.Xa, {
                                padding: 1
                            }, n.state.showSuccess ? s.createElement(k.W, {
                                color: k.O.Link
                            }, Object(o.d)("Title Saved!", "ClipsTitleEdit")) : s.createElement(k.W, {
                                color: k.O.Error
                            }, n.getErrorMessage()))))))))
                        }, n.renderForEdit = function() {
                            var e;
                            if ((n.props.startOffset || 0 === n.props.startOffset) && n.props.endOffset) return e = n.state.showError ? s.createElement(k.W, {
                                color: k.O.Error
                            }, n.getErrorMessage()) : 0 === n.state.title.length && n.props.broadcasterName ? s.createElement(k.W, {
                                color: k.O.Alt2
                            }, Object(o.d)("Clips with titles get more views. Help {broadcasterName} get discovered by adding a title.", {
                                broadcasterName: n.props.broadcasterName
                            }, "ClipsTitleEdit")) : s.createElement(k.W, {
                                color: k.O.Alt2
                            }, n.getRemainingCharacterText()), s.createElement(k.Xa, null, s.createElement(k.Xa, {
                                fullWidth: !0
                            }, s.createElement(k.Ra, {
                                id: N.TITLE_INPUT,
                                "data-test-selector": N.TITLE_INPUT,
                                type: k.Ta.Text,
                                value: n.state.title,
                                onChange: n.handleTitleEdit,
                                onKeyDown: n.handleKeyDown,
                                placeholder: Object(o.d)("Add a title (required)", "ClipsTitleEdit"),
                                size: k.Sa.Large,
                                autoFocus: !0
                            })), s.createElement(k.Xa, {
                                display: k.X.Flex,
                                justifyContent: k.Wa.Between,
                                alignItems: k.f.Center,
                                padding: {
                                    top: 1
                                }
                            }, e, s.createElement(k.Xa, {
                                display: k.X.Flex
                            }, s.createElement(k.Xa, {
                                padding: {
                                    left: 1
                                }
                            }, s.createElement(E, {
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
                            return s.createElement(k.z, {
                                "data-test-selector": N.TITLE_SAVE,
                                disabled: !n.canSaveEditedTitle(),
                                onClick: n.editClipTitle
                            }, Object(o.d)("Save", "ClipsTitleEdit"))
                        }, n.onPublishClipError = function(e) {
                            n.setState({
                                showSuccess: !1,
                                showError: !0,
                                error: n.errorMessageToError(e)
                            })
                        }, n.getRemainingCharacterText = function() {
                            return Object(o.d)("{characterCount, number} remaining", {
                                characterCount: T - n.state.title.length
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
                            var t = e.currentTarget.value.slice(0, T);
                            n.setState({
                                title: t,
                                showError: !1,
                                showSuccess: !1
                            })
                        }, n.editClipTitle = function() {
                            return l.__awaiter(n, void 0, void 0, function() {
                                var e, t;
                                return l.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            if ("" === this.state.title.trim()) return this.setState({
                                                showError: !0,
                                                error: f.emptySubmission
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
                                case d.a.Enter:
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
                    return l.__extends(t, e), t.prototype.render = function() {
                        return this.props.location === p.PageviewLocation.MyClipsManager ? this.renderForManager() : this.props.location === p.PageviewLocation.ClipsEditing ? this.renderForEdit() : this.renderForClipsViewing()
                    }, t.prototype.getErrorMessage = function() {
                        switch (this.state.error) {
                            case f.channelViolation:
                                return Object(o.d)("Uh-oh. Check for inappropriate language and try again!", "ClipsTitleEdit");
                            case f.emptySubmission:
                                return Object(o.d)("Please add a title.", "ClipsTitleEdit");
                            default:
                                return Object(o.d)("Whoops. Something went wrong.", "ClipsTitleEdit")
                        }
                    }, t.prototype.errorMessageToError = function(e) {
                        return null === e ? f.unknown : e.includes("403:") || e.toLowerCase() === a.InvalidTitle.toLowerCase() || e.toLowerCase() === i.InvalidTitle.toLowerCase() ? f.channelViolation : e === f.emptySubmission ? f.emptySubmission : f.unknown
                    }, t
                }(s.Component),
                O = Object(c.a)(w, {
                    name: "editTitle"
                })(D);
            n.d(t, !1, function() {
                return N
            }), n.d(t, "b", function() {
                return f
            }), n.d(t, !1, function() {
                return D
            }), n.d(t, "a", function() {
                return O
            })
        },
        X7Ac: function(e, t, n) {
            "use strict";
            var a = n("wbMx");
            n.d(t, "a", function() {
                return a.a
            }), n.d(t, "b", function() {
                return a.b
            })
        },
        Y9ZL: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ClipsManager_User"
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
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 64
                }
            };
            n.loc.source = {
                body: "query ClipsManager_User {\ncurrentUser {\nid\ndisplayName\nlogin\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "a+SD": function(e, t, n) {
            var a = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ClipsManagerTable_User"
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
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "limit"
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
                                value: "UserClipsInput"
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
                                        value: "clips"
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
                                                value: "limit"
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
                                                            kind: "FragmentSpread",
                                                            name: {
                                                                kind: "Name",
                                                                value: "clipsManagerClip"
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
                    end: 360
                }
            };
            a.loc.source = {
                body: '#import "twilight/pages/clips-manager/components/clips-manager-table/clip-fragment.gql"\nquery ClipsManagerTable_User($login: String! $limit: Int $cursor: Cursor $criteria: UserClipsInput){\nuser(login: $login) {\nid\ndisplayName\nclips(first: $limit after: $cursor criteria: $criteria) {\npageInfo {\nhasNextPage\n}\nedges {\ncursor\nnode {\n...clipsManagerClip\n}\n}\n}\n}\n}',
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
            }(n("QlyS").definitions)), e.exports = a
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
        h3qq: function(e, t, n) {},
        hTDB: function(e, t, n) {},
        iyGE: function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                i = n("yR8l"),
                r = n("Pub/"),
                l = n("HzXE"),
                s = 60,
                o = 60 * s,
                c = 24 * o,
                d = 7 * c,
                u = 4 * d;
            var p = n("4w0E");

            function m(e) {
                var t = this;
                return Object(i.a)(p, {
                    props: function(n) {
                        return {
                            banUserMutation: function(i, p, m) {
                                return void 0 === p && (p = null), void 0 === m && (m = null), a.__awaiter(t, void 0, void 0, function() {
                                    var t;
                                    return a.__generator(this, function(g) {
                                        switch (g.label) {
                                            case 0:
                                                if (t = e(n.ownProps).channelID, !n.mutate) return [3, 5];
                                                g.label = 1;
                                            case 1:
                                                return g.trys.push([1, 3, , 4]), [4, n.mutate({
                                                    variables: {
                                                        input: {
                                                            channelID: t,
                                                            bannedUserLogin: i,
                                                            expiresIn: p && function(e) {
                                                                if (!e) return "0s";
                                                                var t = e,
                                                                    n = "";
                                                                if (t > u) {
                                                                    var a = Math.floor(t / u);
                                                                    t -= a * u, n += a + "mo"
                                                                }
                                                                if (t > d) {
                                                                    var i = Math.floor(t / d);
                                                                    t -= i * d, n += i + "w"
                                                                }
                                                                if (t > c) {
                                                                    var r = Math.floor(t / c);
                                                                    t -= r * c, n += r + "d"
                                                                }
                                                                if (t > o) {
                                                                    var l = Math.floor(t / o);
                                                                    t -= l * o, n += l + "h"
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
                                                                var i = Object(r.a)(e, n, t.data.banUserFromChatRoom.ban.bannedUser.id);
                                                                if (!i) return;
                                                                e.writeQuery({
                                                                    query: l,
                                                                    variables: {
                                                                        targetUserID: t.data.banUserFromChatRoom.ban.bannedUser.id,
                                                                        channelID: n
                                                                    },
                                                                    data: a.__assign({}, i, {
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
                                                return [2, g.sent().data];
                                            case 3:
                                                throw g.sent(), new Error("Unable to ban user");
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
        jeZI: function(e, t, n) {},
        jsEL: function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                i = n("q1tI"),
                r = n("/7QA"),
                l = n("u5aL"),
                s = n("Ue10"),
                o = (n("wC0O"), {
                    TITLE: "clips-modal-title",
                    MAIN_BODY: "clips-modal-main-body",
                    SUCCESS_BODY: "clips-modal-success-body",
                    ERROR_BODY: "clips-modal-error-body",
                    SUBMIT_BUTTON: "clips-modal-submit-button",
                    CANCEL_BUTTON: "clips-modal-cancel-button"
                }),
                c = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderSuccess = function() {
                            return t.props.successContent ? i.createElement(s.Eb, {
                                "data-test-selector": o.SUCCESS_BODY,
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
                            }, i.createElement(s.W, {
                                type: s.Vb.Strong
                            }, t.props.successContent)) : null
                        }, t.renderError = function() {
                            return t.props.errorContent ? i.createElement(s.Eb, {
                                "data-test-selector": o.ERROR_BODY,
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
                            }, i.createElement(s.W, {
                                type: s.Vb.Strong,
                                color: s.O.Error
                            }, t.props.errorContent)) : null
                        }, t.onSubmit = function() {
                            t.props.onSubmit()
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return this.props.successContent ? i.createElement(l.a, {
                            onClickOut: this.props.onClose
                        }, i.createElement(s.Eb, {
                            padding: 2,
                            background: s.r.Base,
                            className: "clip-modal"
                        }, this.renderSuccess(), i.createElement(s.Xa, {
                            display: s.X.Flex,
                            justifyContent: s.Wa.Center
                        }, i.createElement(s.Xa, {
                            margin: {
                                x: 1
                            }
                        }, i.createElement(s.z, {
                            "data-test-selector": o.CANCEL_BUTTON,
                            onClick: this.props.onClose
                        }, Object(r.d)("Close", "ClipsModal")))))) : i.createElement(l.a, {
                            onClickOut: this.props.onClose
                        }, i.createElement(s.Eb, {
                            padding: 2,
                            background: s.r.Base,
                            className: "clip-modal"
                        }, i.createElement(s.Eb, {
                            "data-test-selector": o.TITLE,
                            borderBottom: !0,
                            margin: {
                                bottom: 2
                            },
                            padding: {
                                bottom: 1
                            }
                        }, this.props.title), i.createElement(s.Eb, {
                            "data-test-selector": o.MAIN_BODY,
                            borderBottom: !0,
                            margin: {
                                bottom: 2
                            },
                            padding: {
                                bottom: 2
                            }
                        }, this.renderError(), this.props.body), i.createElement(s.Xa, {
                            display: s.X.Flex,
                            justifyContent: s.Wa.Center
                        }, i.createElement(s.Xa, {
                            margin: {
                                x: 1
                            }
                        }, i.createElement(s.z, {
                            "data-test-selector": o.CANCEL_BUTTON,
                            type: s.F.Text,
                            onClick: this.props.onClose
                        }, Object(r.d)("Cancel", "ClipsModal"))), i.createElement(s.Xa, {
                            margin: {
                                x: 1
                            }
                        }, i.createElement(s.z, {
                            "data-test-selector": o.SUBMIT_BUTTON,
                            type: this.props.buttonType ? this.props.buttonType : s.F.Default,
                            onClick: this.onSubmit,
                            disabled: this.props.submitDisabled
                        }, this.props.buttonContent), this.props.isLoading && i.createElement(s.Za, {
                            delay: 0
                        })))))
                    }, t
                }(i.Component),
                d = n("iyGE"),
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
                            return t.props.isTemporary ? i.createElement(s.W, {
                                type: s.Vb.H5,
                                ellipsis: !0
                            }, Object(r.d)("Timeout this Clip Creator for 24 hours from Your Channel", "ClipsModalBanUser")) : i.createElement(s.W, {
                                type: s.Vb.H5,
                                ellipsis: !0
                            }, Object(r.d)("Ban this Clip Creator from Your Channel", "ClipsModalBanUser"))
                        }, t.renderBodyText = function() {
                            return t.props.isTemporary ? i.createElement(s.W, null, Object(r.d)("{clipCreator} will temporarily be timed out from creating clips and chatting in your channel for 24 hours.", {
                                clipCreator: t.props.targetUser.displayName
                            }, "ClipsModalBanUser")) : i.createElement(s.W, null, Object(r.d)("{clipCreator} will be permanently banned from creating clips and chatting in your channel.", {
                                clipCreator: t.props.targetUser.displayName
                            }, "ClipsModalBanUser"))
                        }, t.renderButtonText = function() {
                            return t.props.isTemporary ? Object(r.d)("Timeout User", "ClipsModalBanUser") : Object(r.d)("Ban User", "ClipsModalBanUser")
                        }, t.renderSuccess = function() {
                            return t.state.hasSucceeded ? Object(r.d)("Success!", "ClipsModalBanUser") : null
                        }, t.renderFailure = function() {
                            return t.state.hasErrored ? t.props.isTemporary ? Object(r.d)("There was a problem timing out this clip creator", "ClipsModalBanUser") : Object(r.d)("There was a problem banning this clip creator", "ClipsModalBanUser") : null
                        }, t.banUser = function() {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var e, t, n;
                                return a.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            this.setState({
                                                isLoading: !0,
                                                hasSucceeded: !1,
                                                hasErrored: !1
                                            }), e = this.props.targetUser.login, t = this.props.isTemporary ? this.props.banUserMutation(e, p) : this.props.banUserMutation(e), a.label = 1;
                                        case 1:
                                            return a.trys.push([1, 3, , 4]), [4, t];
                                        case 2:
                                            return !(n = a.sent().banUserFromChatRoom) || n.error ? this.setState({
                                                hasErrored: !0,
                                                isLoading: !1
                                            }) : this.setState({
                                                hasSucceeded: !0,
                                                isLoading: !1
                                            }), [3, 4];
                                        case 3:
                                            return a.sent(), this.setState({
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
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return i.createElement(c, {
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
                }(i.Component),
                g = Object(u.b)("ClipsModalBanUser")(Object(d.a)(function(e) {
                    return {
                        channelID: e.broadcasterID
                    }
                })(m)),
                h = n("yR8l"),
                f = n("vUXZ");

            function b(e) {
                return Object(h.a)(f, e)
            }
            var v = n("DJtx"),
                k = (n("n9Ey"), {
                    isLoading: !1,
                    hasErrored: !1,
                    hasSucceeded: !1
                }),
                C = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.onDeleteClick = function() {
                            return a.__awaiter(n, void 0, void 0, function() {
                                return a.__generator(this, function(e) {
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
                        }, n.state = k, n
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = [i.createElement(s.W, {
                            key: "title",
                            type: s.Vb.H4
                        }, Object(r.d)("Delete This Clip", "ClipsModalDelete")), i.createElement(s.Xa, {
                            key: "message",
                            margin: {
                                top: 1
                            }
                        }, i.createElement(s.W, {
                            type: s.Vb.P,
                            color: s.O.Alt2
                        }, Object(r.d)("This clip will be permanently deleted.", "ClipsModalDelete")))];
                        if (!this.props.data.clip) return null;
                        var t = null;
                        this.props.data.clip.curator && (t = i.createElement("span", null, " • ", Object(r.d)("Clipped by {curator}", {
                            curator: this.props.data.clip.curator.login
                        }, "ClipsModalDelete")));
                        var n = i.createElement(s.Eb, {
                            display: s.X.Flex,
                            flexWrap: s.Ba.NoWrap
                        }, i.createElement(s.Xa, {
                            className: "clips-modal-delete__thumb",
                            margin: {
                                right: 1
                            }
                        }, i.createElement(s.o, {
                            ratio: s.p.Aspect16x9
                        }, i.createElement("img", {
                            src: this.props.data.clip.thumbnailURL
                        }))), i.createElement(s.Xa, null, i.createElement(s.W, {
                            type: s.Vb.H5
                        }, this.props.data.clip.title), i.createElement(s.W, {
                            color: s.O.Alt2
                        }, Object(r.d)("{created, date, medium}", {
                            created: new Date(this.props.data.clip.createdAt)
                        }, "ClipsModalDelete"), t), i.createElement(s.W, {
                            color: s.O.Alt2
                        }, Object(r.d)("{viewCount, number} views", {
                            viewCount: this.props.data.clip.viewCount
                        }, "ClipsModalDelete"))));
                        return i.createElement(c, {
                            onSubmit: this.onDeleteClick,
                            onClose: this.props.onClose,
                            title: e,
                            body: n,
                            buttonContent: Object(r.d)("Delete", "ClipsModalDelete"),
                            buttonType: s.F.Alert,
                            submitDisabled: this.state.hasSucceeded || this.state.isLoading,
                            successContent: this.state.hasSucceeded ? Object(r.d)("Success!", "ClipsModalDelete") : null,
                            errorContent: this.state.hasErrored ? Object(r.d)("There was a problem deleting this clip.", "ClipsModalDelete") : null,
                            isLoading: this.state.isLoading
                        })
                    }, t
                }(i.Component),
                S = Object(h.a)(v)(b({
                    props: function(e) {
                        return {
                            deleteClip: function(t) {
                                return a.__awaiter(void 0, void 0, void 0, function() {
                                    var n;
                                    return a.__generator(this, function(a) {
                                        switch (a.label) {
                                            case 0:
                                                return a.trys.push([0, 2, , 3]), [4, e.mutate({
                                                    variables: {
                                                        input: {
                                                            slugs: [t]
                                                        }
                                                    }
                                                })];
                                            case 1:
                                                return a.sent(), e.ownProps.onDelete && e.ownProps.onDelete(t), [3, 3];
                                            case 2:
                                                throw n = a.sent(), r.k.error(n, "Failed to delete clip"), n;
                                            case 3:
                                                return [2]
                                        }
                                    })
                                })
                            }
                        }
                    }
                })(C)),
                y = n("oJmH"),
                E = n("Vsf8"),
                w = {
                    isLoading: !1,
                    hasErrored: !1,
                    hasSucceeded: !1
                },
                N = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.deleteAll = function() {
                            return a.__awaiter(n, void 0, void 0, function() {
                                return a.__generator(this, function(e) {
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
                            return n.state.hasSucceeded ? Object(r.d)("A request has been made to delete the clip. Please wait a few minutes for this to take effect.", "ClipsModalDeleteAll") : null
                        }, n.renderFailure = function() {
                            return n.state.hasErrored ? Object(r.d)("There was a problem deleting this clip.", "ClipsModalDeleteAll") : null
                        }, n.state = w, n
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = i.createElement(s.W, {
                            type: s.Vb.P
                        }, Object(r.d)("This clip and all other clips created from the same video will be permanently deleted.", "ClipsModalDeleteAll"));
                        return i.createElement(c, {
                            onSubmit: this.deleteAll,
                            onClose: this.props.onClose,
                            title: i.createElement(s.W, {
                                type: s.Vb.H4
                            }, Object(r.d)("Delete All Clips from Related Video", "ClipsModalDeleteAll")),
                            body: e,
                            buttonContent: Object(r.d)("Delete", "ClipsModalDeleteAll"),
                            buttonType: s.F.Alert,
                            submitDisabled: this.state.isLoading || this.state.hasSucceeded || "" === this.props.broadcastID,
                            isLoading: this.state.isLoading,
                            successContent: this.renderSuccess(),
                            errorContent: this.renderFailure()
                        })
                    }, t
                }(i.Component),
                T = Object(y.compose)(Object(u.b)("ClipsModalDeleteAll"), b({
                    props: function(e) {
                        return {
                            deleteAllClips: function(t, n) {
                                return a.__awaiter(void 0, void 0, void 0, function() {
                                    var i, l, s;
                                    return a.__generator(this, function(a) {
                                        switch (a.label) {
                                            case 0:
                                                return a.trys.push([0, 6, , 7]), i = void 0, n ? [4, e.mutate({
                                                    variables: {
                                                        input: {
                                                            videoID: n
                                                        }
                                                    }
                                                })] : [3, 2];
                                            case 1:
                                                return l = a.sent(), i = l.data, [3, 5];
                                            case 2:
                                                return t ? [4, e.mutate({
                                                    variables: {
                                                        input: {
                                                            broadcastID: t
                                                        }
                                                    }
                                                })] : [3, 4];
                                            case 3:
                                                return l = a.sent(), i = l.data, [3, 5];
                                            case 4:
                                                throw new Error("Invalid broadcastID specified for deleteAllClips");
                                            case 5:
                                                return e.ownProps.onDeleteAll && e.ownProps.onDeleteAll(i.deleteClips.clips), [3, 7];
                                            case 6:
                                                throw s = a.sent(), r.k.error(s, "Failed to delete clips from VOD"), s;
                                            case 7:
                                                return [2]
                                        }
                                    })
                                })
                            }
                        }
                    }
                }), Object(h.a)(E, {
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
                }))(N),
                D = {
                    isLoading: !1,
                    hasErrored: !1,
                    hasSucceeded: !1
                },
                O = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.renderSuccess = function() {
                            return n.state.hasSucceeded ? Object(r.d)("Clips successfully deleted.", "ClipsModalBatchDelete") : null
                        }, n.renderError = function() {
                            return n.state.hasErrored ? Object(r.d)("There was a problem deleting this clip.", "ClipsModalBatchDelete") : null
                        }, n.onDeleteClick = function() {
                            return a.__awaiter(n, void 0, void 0, function() {
                                return a.__generator(this, function(e) {
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
                        }, n.state = D, n
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = i.createElement(s.W, {
                                type: s.Vb.H4
                            }, Object(r.d)("Delete these clips?", "ClipsModalBatchDelete")),
                            t = i.createElement(s.W, {
                                type: s.Vb.P
                            }, Object(r.d)("These clips will be permanently deleted. Are you sure?", "ClipsModalBatchDelete"));
                        return i.createElement(c, {
                            onSubmit: this.onDeleteClick,
                            onClose: this.props.onClose,
                            title: e,
                            body: t,
                            buttonContent: Object(r.d)("Delete", "ClipsModalBatchDelete"),
                            buttonType: s.F.Alert,
                            submitDisabled: this.state.hasSucceeded || this.state.isLoading,
                            isLoading: this.state.isLoading,
                            successContent: this.renderSuccess(),
                            errorContent: this.renderError()
                        })
                    }, t
                }(i.Component),
                _ = b({
                    props: function(e) {
                        return {
                            deleteClips: function() {
                                return a.__awaiter(void 0, void 0, void 0, function() {
                                    var t;
                                    return a.__generator(this, function(n) {
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
                                                throw t = n.sent(), r.k.error(t, "Failed to delete clips"), t;
                                            case 3:
                                                return [2]
                                        }
                                    })
                                })
                            }
                        }
                    }
                })(O);
            n.d(t, "a", function() {
                return c
            }), n.d(t, "b", function() {
                return g
            }), n.d(t, "d", function() {
                return S
            }), n.d(t, "e", function() {
                return T
            }), n.d(t, "c", function() {
                return _
            })
        },
        kMvn: function(e, t, n) {},
        n9Ey: function(e, t, n) {},
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
        pC3c: function(e, t, n) {
            "use strict";
            n.r(t);
            var a, i, r, l = n("mrSG"),
                s = n("q1tI"),
                o = n("oJmH"),
                c = n("9C/b"),
                d = n("V+GM"),
                u = n("NvVO"),
                p = n("2xye");
            ! function(e) {
                e[e.ViewsAscending = 0] = "ViewsAscending", e[e.ViewsDescending = 1] = "ViewsDescending", e[e.CreatedAtAscending = 2] = "CreatedAtAscending", e[e.CreatedAtDescending = 3] = "CreatedAtDescending"
            }(r || (r = {}));
            var m, g = ((a = {})[r.CreatedAtAscending] = "CREATED_AT_ASC", a[r.CreatedAtDescending] = "CREATED_AT_DESC", a[r.ViewsAscending] = "VIEWS_ASC", a[r.ViewsDescending] = "VIEWS_DESC", a);
            ! function(e) {
                e[e.Day = 0] = "Day", e[e.Week = 1] = "Week", e[e.Month = 2] = "Month", e[e.All = 3] = "All"
            }(m || (m = {}));
            var h, f = ((i = {})[m.Day] = "LAST_DAY", i[m.Week] = "LAST_WEEK", i[m.Month] = "LAST_MONTH", i[m.All] = "ALL_TIME", i);
            ! function(e) {
                e[e.Broadcaster = 0] = "Broadcaster", e[e.Curator = 1] = "Curator"
            }(h || (h = {}));
            var b = n("GnwI"),
                v = n("/MKj"),
                k = n("fvjX"),
                C = n("1/iK"),
                S = n("y5D0"),
                y = n("kRBY"),
                E = n("17x9"),
                w = n("/7QA"),
                N = n("ZDlU"),
                T = n("yR8l"),
                D = n("H/lO"),
                O = n("geRD"),
                _ = n("aCAx"),
                R = n("8/mp"),
                I = n("jsEL"),
                x = n("MLDe"),
                M = n("u5aL"),
                F = n("lZCe"),
                L = n("VwyG"),
                j = n("eJ65"),
                U = n("kduP"),
                A = n("+GjP"),
                V = n("D7An"),
                B = n("ndwU"),
                P = n("X7Ac"),
                X = n("EdhP"),
                W = n("4L7N"),
                G = n("Ue10"),
                H = [{
                    type: P.b.Twitter,
                    params: {
                        tt_medium: "twtr"
                    }
                }, {
                    type: P.b.Facebook,
                    params: {
                        tt_medium: "fb"
                    }
                }, {
                    type: P.b.VKontakte
                }, {
                    type: P.b.Reddit,
                    params: {
                        tt_medium: "redt"
                    }
                }, {
                    type: P.b.Copy
                }];

            function q(e) {
                e.currentTarget.select()
            }
            var Q = Object(b.b)("ClipsManagerSocialShare")(function(e) {
                    var t = Object(w.d)("Share", "ClipsManagerSocialShare");
                    return s.createElement(j.a, null, s.createElement("div", null, s.createElement(G.Yb, {
                        label: t
                    }, s.createElement(G.A, {
                        ariaLabel: t,
                        type: G.C.Hollow,
                        icon: G.tb.Share
                    }))), s.createElement(G.u, {
                        direction: G.v.BottomLeft
                    }, s.createElement(G.Xa, {
                        display: G.X.Flex,
                        justifyContent: G.Wa.Between,
                        padding: 1
                    }, s.createElement(W.a, {
                        broadcasterLogin: e.clip.broadcaster && e.clip.broadcaster.login || "",
                        broadcasterId: e.clip.broadcaster && e.clip.broadcaster.id || "",
                        slug: e.clip.slug,
                        pageType: e.pageType,
                        forceShow: !0
                    }), H.map(function(t) {
                        return s.createElement(P.a, {
                            key: t.type,
                            type: t.type,
                            text: e.clip.title,
                            url: Object(A.e)(e.clip.url, t.params),
                            onShareClick: Object(x.c)(e.clip.id, e.clip.game && e.clip.game.name, e.clip.broadcaster && e.clip.broadcaster.id, e.clip.broadcaster && e.clip.broadcaster.login, e.pageType)
                        })
                    })), s.createElement(G.Xa, {
                        padding: {
                            x: 1,
                            y: .5
                        }
                    }, s.createElement(G.Ea, {
                        label: Object(w.d)("Video Link", "ClipsManagerSocialShare")
                    }, s.createElement(G.Ra, {
                        readOnly: !0,
                        type: G.Ta.Text,
                        value: e.clip.url,
                        onFocus: q
                    }))), s.createElement(G.Xa, {
                        padding: {
                            x: 1,
                            y: .5
                        }
                    }, s.createElement(G.Ea, {
                        label: Object(w.d)("Embed Video", "ClipsManagerSocialShare")
                    }, s.createElement(G.Ra, {
                        readOnly: !0,
                        type: G.Ta.Text,
                        value: Object(X.a)(e.clip.embedURL),
                        onFocus: q
                    })))))
                }),
                K = n("WSjS"),
                $ = n("2cRt"),
                z = n("OlqP"),
                Y = (n("hTDB"), {
                    MODERATION_DROPDOWN: "cmgr-moderation-dropdown",
                    MODERATION_BUTTON: "cmgr-moderation-button",
                    GAME_LINK: "cmgr-expanded-game-link",
                    CHANNEL_LINK: "cmgr-expanded-channel-link"
                }),
                J = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.clipsMaintenance = Object(B.a)(), n.renderTitle = function() {
                            var e = n.props.clip;
                            return n.props.data.currentUser.id === (e && e.curator && e.curator.id) ? s.createElement(K.a, {
                                clipId: e.id,
                                clipSlug: e.slug,
                                clipTitle: e.title,
                                clipBroadcasterId: e.broadcaster ? Number(e.broadcaster.id) : 0,
                                location: p.PageviewLocation.MyClipsManager
                            }) : s.createElement(G.Ea, {
                                label: Object(w.d)("Title", "ClipsManagerTitleEdit")
                            }, s.createElement(G.Xa, {
                                display: G.X.Flex,
                                flexWrap: G.Ba.NoWrap
                            }, s.createElement(G.Xa, {
                                flexGrow: 1,
                                margin: {
                                    right: 1
                                }
                            }, s.createElement(G.W, null, e.title))))
                        }, n.renderGameLink = function(e) {
                            return e.game ? s.createElement(G.U, {
                                "data-test-selector": Y.GAME_LINK,
                                to: Object(U.c)(e.game.name),
                                title: e.game.name
                            }, e.game.name) : null
                        }, n.renderModerationIcon = function() {
                            if (!n.props.clip.broadcaster || n.props.data.currentUser.id !== n.props.clip.broadcaster.id) return null;
                            var e = Object(w.d)("Moderation", "ClipsManagerExpandedRow");
                            return s.createElement(G.Yb, {
                                label: e
                            }, s.createElement(G.Xa, {
                                margin: {
                                    right: .5
                                }
                            }, s.createElement(j.a, null, s.createElement(G.A, {
                                ariaLabel: e,
                                type: G.C.Hollow,
                                icon: G.tb.Sword,
                                "data-test-selector": Y.MODERATION_BUTTON
                            }), s.createElement(G.u, {
                                "data-test-selector": Y.MODERATION_DROPDOWN,
                                direction: G.v.BottomLeft
                            }, s.createElement(G.Xa, {
                                padding: {
                                    y: .5
                                }
                            }, s.createElement(G.Eb, {
                                borderBottom: !0
                            }, s.createElement(G.Ua, {
                                onClick: n.openTimeoutUserModal
                            }, s.createElement(G.Xa, {
                                padding: {
                                    x: 1,
                                    y: .5
                                }
                            }, Object(w.d)("Timeout User (24 hr)", "ClipsManagerExpandedRow"))), s.createElement(G.Ua, {
                                onClick: n.openBanUserModal
                            }, s.createElement(G.Xa, {
                                padding: {
                                    x: 1,
                                    y: .5
                                }
                            }, Object(w.d)("Ban User", "ClipsManagerExpandedRow")))), s.createElement(G.Ua, {
                                onClick: n.openDeleteAllModal,
                                disabled: n.clipsMaintenance
                            }, s.createElement(G.Xa, {
                                padding: {
                                    x: 1,
                                    y: .5
                                }
                            }, Object(w.d)("Delete All Clips from Video", "ClipsManagerExpandedRow"))))))))
                        }, n.openModal = function(e, t) {
                            void 0 === t && (t = {}), n.setState({
                                isModalOpen: !0
                            }), n.props.showModal(e, t)
                        }, n.closeModal = function() {
                            n.setState({
                                isModalOpen: !1
                            }), n.props.closeModal()
                        }, n.onClickOutside = function() {
                            n.state.isModalOpen || n.props.onClose()
                        }, n.openDeleteModal = function() {
                            n.openModal(I.d, {
                                slug: n.props.clip.slug,
                                onClose: n.closeModal,
                                onDelete: n.props.onDelete
                            })
                        }, n.openTimeoutUserModal = function() {
                            n.props.clip.broadcaster && n.openModal(I.b, {
                                targetUser: n.props.clip.curator,
                                broadcasterID: n.props.clip.broadcaster.id,
                                isTemporary: !0,
                                onClose: n.closeModal
                            })
                        }, n.openBanUserModal = function() {
                            n.props.clip.broadcaster && n.openModal(I.b, {
                                targetUser: n.props.clip.curator,
                                broadcasterID: n.props.clip.broadcaster.id,
                                isTemporary: !1,
                                onClose: n.closeModal
                            })
                        }, n.openDeleteAllModal = function() {
                            n.openModal(I.e, {
                                slug: n.props.clip.slug,
                                onClose: n.closeModal,
                                onDeleteAll: n.props.onDeleteAll
                            })
                        }, n.reportInteractive = function() {
                            var e = n.props.data;
                            e && !e.loading && e.currentUser && n.props.latencyTracking.reportInteractive()
                        }, n.state = {
                            title: t.clip.title,
                            isModalOpen: !1
                        }, n
                    }
                    return l.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.reportInteractive()
                    }, t.prototype.componentDidUpdate = function() {
                        this.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this,
                            t = this.props.clip,
                            n = Object(w.c)(new Date(t.createdAt), "medium"),
                            a = Object(w.d)("Close", "ClipsManagerExpandedRow"),
                            i = Object(w.d)("Delete", "ClipsManagerExpandedRow");
                        return s.createElement(M.a, {
                            onClickOut: this.onClickOutside
                        }, s.createElement(G.Eb, {
                            "data-target": this.props.dataTarget,
                            background: G.r.Base,
                            display: G.X.Block,
                            elevation: 3,
                            className: "clmgr-table__row-expanded",
                            position: G.jb.Relative,
                            margin: {
                                bottom: 3
                            }
                        }, s.createElement(G.Eb, {
                            display: G.X.Flex,
                            justifyContent: G.Wa.Between,
                            alignItems: G.f.Center,
                            padding: 1,
                            background: G.r.Alt,
                            borderBottom: !0
                        }, s.createElement(G.Xa, {
                            display: G.X.Flex
                        }, s.createElement(L.a, {
                            ownerLogin: t.broadcaster && t.broadcaster.login || "",
                            permittedRoles: {
                                owner: !0,
                                editor: !0,
                                staff: !0
                            }
                        }, function(n) {
                            var a = n.permitted,
                                i = n.loading;
                            return !a || i ? null : s.createElement(F.a, {
                                name: V.b.VODPike,
                                assignments: {
                                    variant: function() {
                                        return e.props.pageType !== x.a.ClipsOfMyChannel ? null : s.createElement(G.Xa, {
                                            padding: {
                                                right: 1
                                            }
                                        }, s.createElement($.a, {
                                            clip: t
                                        }))
                                    },
                                    fallback: function() {
                                        return null
                                    }
                                }
                            })
                        }), this.renderModerationIcon(), s.createElement(G.Yb, {
                            label: i
                        }, s.createElement(G.Xa, {
                            margin: {
                                right: .5
                            }
                        }, s.createElement(G.A, {
                            ariaLabel: i,
                            type: G.C.Hollow,
                            icon: G.tb.Trash,
                            onClick: this.openDeleteModal,
                            disabled: this.clipsMaintenance
                        }))), s.createElement(G.Xa, {
                            margin: {
                                right: .5
                            }
                        }, s.createElement(Q, {
                            clip: this.props.clip,
                            pageType: this.props.pageType
                        })), s.createElement(G.Yb, {
                            label: Object(w.d)("Watch on Clips Page", "ClipsManagerExpandedRow"),
                            align: G.Zb.Left
                        }, s.createElement(G.A, {
                            ariaLabel: Object(w.d)("Popout", "ClipsManagerExpandedRow"),
                            type: G.C.Hollow,
                            linkTo: Object(A.e)(this.props.clip.url, {
                                tt_medium: "my_clips"
                            }),
                            icon: G.tb.Popout
                        }))), s.createElement(G.Yb, {
                            label: a,
                            align: G.Zb.Left
                        }, s.createElement(G.Xa, {
                            flexGrow: 0
                        }, s.createElement(G.A, {
                            ariaLabel: a,
                            type: G.C.Hollow,
                            icon: G.tb.Close,
                            onClick: this.props.onClose
                        }), s.createElement(G.u, {
                            direction: G.v.TopLeft
                        })))), s.createElement(G.Xa, {
                            padding: 1
                        }, s.createElement(G.Ja, {
                            gutterSize: G.Ka.None
                        }, s.createElement(G.P, {
                            cols: {
                                default: 12,
                                xs: 12,
                                sm: 6,
                                md: 6,
                                lg: 5,
                                xl: 5
                            }
                        }, s.createElement(G.Xa, {
                            position: G.jb.Relative
                        }, s.createElement(G.o, {
                            ratio: G.p.Aspect16x9
                        }, s.createElement("iframe", {
                            src: Object(A.e)(t.embedURL, {
                                autoplay: "false"
                            }),
                            frameBorder: 0,
                            width: "100%",
                            height: "100%",
                            scrolling: "no",
                            allowFullScreen: !0
                        })))), s.createElement(G.P, {
                            cols: {
                                default: 12,
                                xs: 12,
                                sm: 6,
                                md: 6,
                                lg: 7,
                                xl: 7
                            }
                        }, s.createElement(G.Xa, {
                            display: G.X.Flex,
                            justifyContent: G.Wa.Center
                        }, s.createElement(G.Xa, {
                            flexGrow: 1,
                            padding: 1
                        }, this.renderTitle())), s.createElement(G.Eb, {
                            background: G.r.Alt,
                            margin: 1,
                            padding: 1,
                            border: !0
                        }, s.createElement(G.Ja, null, s.createElement(G.P, {
                            cols: {
                                default: 4
                            }
                        }, s.createElement(G.Xa, {
                            padding: {
                                y: .5
                            }
                        }, s.createElement(G.W, {
                            bold: !0
                        }, Object(w.d)("Created On", "ClipsManagerExpandedRow")), s.createElement(G.W, {
                            ellipsis: !0,
                            transform: G.Ub.Capitalize,
                            title: n
                        }, n))), s.createElement(G.P, {
                            cols: {
                                default: 4
                            }
                        }, s.createElement(G.Xa, {
                            padding: {
                                y: .5
                            }
                        }, s.createElement(G.W, {
                            bold: !0
                        }, Object(w.d)("Clip Length", "ClipsManagerExpandedRow")), s.createElement(G.W, {
                            ellipsis: !0
                        }, Object(w.d)("{seconds, number}s", {
                            seconds: this.props.clip.durationSeconds
                        }, "ClipsManagerExpandedRow")))), s.createElement(G.P, {
                            cols: {
                                default: 4
                            }
                        }, s.createElement(G.Xa, {
                            padding: {
                                y: .5
                            }
                        }, s.createElement(G.W, {
                            bold: !0
                        }, Object(w.d)("Views", "ClipsManagerExpandedRow")), s.createElement(G.Xa, {
                            display: G.X.Flex,
                            alignItems: G.f.Center,
                            ellipsis: !0
                        }, s.createElement(G.sb, {
                            asset: G.tb.GlyphViews
                        }), s.createElement(G.Xa, {
                            padding: {
                                left: .5
                            }
                        }, Object(w.g)(t.viewCount, {
                            maximumFractionDigits: 1
                        }))))), s.createElement(G.P, {
                            cols: {
                                default: 4
                            }
                        }, t.broadcaster && s.createElement(G.Xa, {
                            padding: {
                                y: .5
                            }
                        }, s.createElement(G.W, {
                            bold: !0
                        }, Object(w.d)("Channel", "ClipsManagerExpandedRow")), s.createElement(G.W, {
                            ellipsis: !0
                        }, s.createElement(G.U, {
                            "data-test-selector": Y.CHANNEL_LINK,
                            to: "/" + t.broadcaster.login + "/clips",
                            title: t.broadcaster.displayName || ""
                        }, t.broadcaster.displayName)))), s.createElement(G.P, {
                            cols: {
                                default: 4
                            }
                        }, s.createElement(G.Xa, {
                            padding: {
                                y: .5
                            }
                        }, s.createElement(G.W, {
                            bold: !0
                        }, Object(w.d)("Game", "ClipsManagerExpandedRow")), s.createElement(G.W, {
                            ellipsis: !0
                        }, this.renderGameLink(t)))))))))))
                    }, t
                }(s.Component),
                Z = Object(b.b)("ClipsManagerExpandedRow")(Object(T.a)(z)(J));
            var ee = Object(v.connect)(null, function(e) {
                    return Object(k.bindActionCreators)({
                        showModal: _.d,
                        closeModal: _.c
                    }, e)
                })(Z),
                te = n("8Ad5"),
                ne = n("NZDK"),
                ae = n("9kXc");
            var ie = n("roU9");
            n("Rc6/");
            var re = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderCardContent = function() {
                            var e = t.props.searchResult;
                            return function(e) {
                                var t = e;
                                return void 0 !== t.title && void 0 !== t.popularity
                            }(e) ? s.createElement(G.G, {
                                row: !0
                            }, s.createElement(G.I, {
                                size: G.J.Size3,
                                aspect: G.p.Aspect3x4,
                                src: function(e) {
                                    return ie.a + "/" + e + "-" + ie.b + ".jpg"
                                }(e.title),
                                alt: e.thumbnailAltText
                            }), s.createElement(G.H, {
                                overflow: G.cb.Hidden
                            }, s.createElement(G.Xa, {
                                padding: {
                                    left: 1
                                }
                            }, s.createElement(G.W, {
                                type: G.Vb.H5
                            }, e.title), s.createElement(G.W, {
                                className: "clmgr-result__subtitle",
                                ellipsis: !0
                            }, Object(w.d)("{numViewers, number} viewers", {
                                numViewers: e.popularity
                            }, "ClipsManagerSearch"))))) : function(e) {
                                return void 0 !== e.followers
                            }(e) ? s.createElement(G.G, {
                                row: !0
                            }, s.createElement(G.I, {
                                size: G.J.Size3,
                                aspect: G.p.Aspect1x1,
                                src: e.thumbnail,
                                alt: e.thumbnailAltText
                            }), s.createElement(G.H, {
                                overflow: G.cb.Hidden
                            }, s.createElement(G.Xa, {
                                padding: {
                                    left: 1
                                }
                            }, s.createElement(G.W, {
                                type: G.Vb.H5
                            }, e.name), s.createElement(G.W, {
                                className: "clmgr-result__subtitle",
                                ellipsis: !0
                            }, Object(w.d)("{numFollowers, number} followers", {
                                numFollowers: e.followers
                            }, "ClipsManagerSearch"))))) : void 0
                        }, t.onMouseEnter = function() {
                            t.props.onResultHover(t.props.index)
                        }, t.onClick = function() {
                            t.props.onResultSelect(t.props.index)
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.render = function() {
                        return s.createElement(G.Ua, {
                            onClick: this.onClick
                        }, s.createElement(G.Pa, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, s.createElement("div", {
                            onMouseEnter: this.onMouseEnter,
                            onKeyDown: this.props.onKeyDown,
                            "data-ref-index": this.props.index,
                            ref: this.props.refDelegate,
                            tabIndex: -1,
                            className: "clmgr-result"
                        }, this.renderCardContent())))
                    }, t
                }(s.Component),
                le = {
                    NO_RESULTS: "cmgr-no-search-results",
                    RESULTS_MENU: "cmgr-search-results-menu",
                    SEARCH_INPUT: "cmgr-search-input",
                    CHANNEL_SEARCH: "cmgr-channel-search",
                    GAME_SEARCH: "cmgr-game-search"
                },
                se = 5,
                oe = {
                    currentCategory: D.a.Games,
                    gameResults: [],
                    userResults: [],
                    isShowingResults: !1,
                    isLoading: !1,
                    searchTerm: "",
                    focusedIndex: null
                },
                ce = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.renderSearchOptions = function() {
                            var e = [s.createElement(G.Fb, {
                                active: n.state.currentCategory === D.a.Games,
                                onClick: n.setSearchTypeGame,
                                key: le.GAME_SEARCH,
                                "data-test-selector": le.GAME_SEARCH
                            }, Object(w.d)("Game Search", "ClipsManagerSearch"))];
                            return n.props.userRole !== h.Broadcaster && e.push(s.createElement(G.Fb, {
                                active: n.state.currentCategory === D.a.Users,
                                onClick: n.setSearchTypeChannel,
                                key: le.CHANNEL_SEARCH,
                                "data-test-selector": le.CHANNEL_SEARCH
                            }, Object(w.d)("Channel Search", "ClipsManagerSearch"))), s.createElement(G.Gb, null, e)
                        }, n.renderSearchResults = function() {
                            if (n.state.isLoading) return s.createElement(G.Za, null);
                            var e = n.state.currentCategory;
                            if (e === D.a.Users) {
                                var t = n.state.userResults;
                                return 0 === t.length ? n.renderNoResults() : t.map(function(e, t) {
                                    return s.createElement(re, {
                                        key: e.id + "_" + t,
                                        searchResult: e,
                                        index: t,
                                        onResultHover: n.focusResult,
                                        onResultSelect: n.selectResult,
                                        refDelegate: n.setSearchResultRefs,
                                        onKeyDown: n.onKeyDown
                                    })
                                })
                            }
                            if (e === D.a.Games) {
                                var a = n.state.gameResults;
                                return 0 === a.length ? n.renderNoResults() : a.map(function(e, t) {
                                    return s.createElement(re, {
                                        key: e.id + "_" + t,
                                        searchResult: e,
                                        index: t,
                                        onResultHover: n.focusResult,
                                        onResultSelect: n.selectResult,
                                        refDelegate: n.setSearchResultRefs,
                                        onKeyDown: n.onKeyDown
                                    })
                                })
                            }
                        }, n.renderNoResults = function() {
                            return s.createElement(G.Xa, {
                                "data-test-selector": le.NO_RESULTS,
                                display: G.X.Flex,
                                flexDirection: G.Aa.Column
                            }, s.createElement(G.Eb, {
                                textAlign: G.Rb.Center,
                                padding: {
                                    y: 5
                                }
                            }, s.createElement(G.sb, {
                                asset: G.tb.NavSearch,
                                height: 36,
                                width: 36,
                                type: G.ub.Brand
                            }), s.createElement(G.W, {
                                type: G.Vb.H4
                            }, Object(w.d)("No results found", "ClipsManagerSearch")), s.createElement(G.W, {
                                type: G.Vb.P,
                                color: G.O.Alt
                            }, Object(w.d)("They're probably in another castle", "ClipsManagerSearch"))))
                        }, n.setSearchResultRefs = function(e) {
                            if (null !== e) {
                                var t = e.dataset.refIndex;
                                if (t) {
                                    var a = parseInt(t, 0);
                                    n.searchResultRefs[a] = e
                                }
                            }
                        }, n.setSearchTypeGame = function() {
                            n.setState(l.__assign({}, oe, {
                                currentCategory: D.a.Games
                            })), n.context.setSearchType(D.a.Games)
                        }, n.setSearchTypeChannel = function() {
                            n.setState(l.__assign({}, oe, {
                                currentCategory: D.a.Users
                            })), n.context.setSearchType(D.a.Users)
                        }, n.onChange = function(e) {
                            n.setState({
                                searchTerm: e.currentTarget.value,
                                isLoading: !0
                            }, function() {
                                "" === n.state.searchTerm && n.context.clearSearch(), n.performQuery()
                            })
                        }, n.onFocus = function() {
                            n.setState({
                                isLoading: !0,
                                isShowingResults: !0
                            }), n.performQuery()
                        }, n.onKeyDown = function(e) {
                            switch (e.keyCode) {
                                case te.a.Esc:
                                    return e.preventDefault(), void("" !== n.state.searchTerm ? (n.setState({
                                        searchTerm: "",
                                        focusedIndex: null
                                    }, function() {
                                        n.performQuery(), n.focusSearchInput()
                                    }), n.context.clearSearch()) : n.setState({
                                        isShowingResults: !1,
                                        focusedIndex: null
                                    }, function() {
                                        n.focusSearchInput()
                                    }));
                                case te.a.Up:
                                    return void n.focusNext(!1);
                                case te.a.Down:
                                    return void n.focusNext(!0);
                                case te.a.Enter:
                                    return void(null !== n.state.focusedIndex && n.selectResult(n.state.focusedIndex));
                                default:
                                    return n.setState({
                                        focusedIndex: null
                                    }), void n.focusSearchInput()
                            }
                        }, n.focusNext = function(e) {
                            void 0 === e && (e = !0);
                            var t = n.getResultsLength();
                            0 !== t && n.setState(function(n) {
                                var a = n.focusedIndex;
                                return {
                                    focusedIndex: null === a ? e ? 0 : t - 1 : e ? a + 1 >= t ? 0 : a + 1 : a - 1 < 0 ? t - 1 : a - 1,
                                    isShowingResults: !0
                                }
                            })
                        }, n.focusResult = function(e) {
                            n.setState({
                                focusedIndex: e
                            })
                        }, n.focusResultRef = function(e) {
                            var t = n.searchResultRefs[e];
                            t && t.focus()
                        }, n.blurResultRef = function(e) {
                            var t = n.searchResultRefs[e];
                            t && t.blur()
                        }, n.focusSearchInput = function() {
                            n.searchInputRef && n.searchInputRef.focus()
                        }, n.selectResult = function(e) {
                            var t, a = n.state,
                                i = a.currentCategory,
                                r = a.gameResults,
                                l = a.userResults;
                            if (i === D.a.Games) t = r[e].title, n.context.setSearchTerm(t);
                            else {
                                var s = l[e];
                                t = s.name, n.context.setSearchTerm(s.id)
                            }
                            n.focusSearchInput(), n.setState({
                                focusedIndex: null,
                                searchTerm: t,
                                isShowingResults: !1
                            })
                        }, n.hideResults = function() {
                            n.setState({
                                isShowingResults: !1
                            })
                        }, n.getResultsLength = function() {
                            return n.state.currentCategory === D.a.Games ? n.state.gameResults.length : n.state.userResults.length
                        }, n.performQuery = function() {
                            var e = n.state,
                                t = e.isLoading,
                                a = e.searchTerm,
                                i = e.currentCategory;
                            t && n.setState({
                                isLoading: !0,
                                isShowingResults: !0
                            }), n.searchClient.queryForType(i, a, "", {
                                hitsPerPage: se
                            }).then(function(e) {
                                if (e) {
                                    var t = Object(ae.b)({
                                        searchResults: e
                                    });
                                    n.setState({
                                        gameResults: t.currentGameResults ? t.currentGameResults.results : [],
                                        userResults: t.currentUserResults ? t.currentUserResults.results : [],
                                        isLoading: !1
                                    })
                                } else n.setState({
                                    gameResults: [],
                                    userResults: [],
                                    isLoading: !1
                                })
                            })
                        }, n.setSearchInputRef = function(e) {
                            n.searchInputRef = e
                        }, n.searchClient = new ne.a({
                            appId: w.a.algoliaApplicationID,
                            apiKey: w.a.algoliaAPIKey,
                            apolloClient: w.p.apollo.client,
                            logger: w.k,
                            config: w.a,
                            stats: w.p.stats
                        }), n.state = oe, n.searchResultRefs = [], n
                    }
                    return l.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        e.userRole !== this.props.userRole && this.setState({
                            searchTerm: "",
                            isShowingResults: !1
                        })
                    }, t.prototype.componentDidUpdate = function(e, t) {
                        var n = this.state.focusedIndex,
                            a = t.focusedIndex;
                        null !== a && null === n ? this.blurResultRef(a) : null !== n && a !== n && this.focusResultRef(n)
                    }, t.prototype.render = function() {
                        return s.createElement(G.Xa, {
                            position: G.jb.Relative
                        }, s.createElement(G.Xa, {
                            margin: {
                                bottom: 1
                            }
                        }, this.renderSearchOptions()), s.createElement(M.a, {
                            onClickOut: this.hideResults
                        }, s.createElement(G.vb, {
                            id: le.SEARCH_INPUT,
                            refDelegate: this.setSearchInputRef,
                            onChange: this.onChange,
                            onFocus: this.onFocus,
                            onKeyDown: this.onKeyDown,
                            value: this.state.searchTerm,
                            placeholder: this.state.currentCategory === D.a.Games ? Object(w.d)("Enter a Game", "ClipsManagerSearch") : Object(w.d)("Enter a Channel", "ClipsManagerSearch")
                        }), s.createElement(G.u, {
                            "data-test-selector": le.RESULTS_MENU,
                            direction: G.v.Bottom,
                            noTail: !0,
                            size: G.w.Large,
                            show: this.state.isShowingResults
                        }, this.renderSearchResults())))
                    }, t.contextTypes = {
                        setSearchTerm: E.func,
                        setSearchType: E.func,
                        clearSearch: E.func
                    }, t
                }(s.Component),
                de = Object(b.b)("ClipsManagerSearch")(ce),
                ue = (n("h3qq"), "cmgr-my-clips-radio"),
                pe = "cmgr-clips-of-me-radio",
                me = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.setCuratorRole = function() {
                            t.props.updateUserRole(h.Curator)
                        }, t.setBroadcasterRole = function() {
                            t.props.updateUserRole(h.Broadcaster)
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return s.createElement(G.Xa, {
                            className: "clmgr-filters-container"
                        }, s.createElement(G.Ja, {
                            gutterSize: G.Ka.None
                        }, s.createElement(G.P, {
                            cols: {
                                default: 12,
                                xs: 6,
                                sm: 6,
                                md: 12,
                                lg: 12
                            }
                        }, s.createElement(G.Xa, {
                            margin: {
                                bottom: .5
                            }
                        }, s.createElement(G.Xa, {
                            margin: {
                                bottom: .5
                            }
                        }, s.createElement(G.W, {
                            fontSize: G.Ca.Size5
                        }, Object(w.d)("List View", "ClipsManagerTable"))), s.createElement(G.Xa, {
                            margin: {
                                bottom: 2
                            }
                        }, s.createElement(G.Xa, {
                            margin: {
                                bottom: .5
                            }
                        }, s.createElement(G.pb, {
                            "data-test-selector": ue,
                            "data-a-target": ue,
                            label: Object(w.d)("Clips I've Created", "ClipsManagerTable"),
                            name: "MyClips",
                            checked: this.props.currentUserRole === h.Curator,
                            onChange: this.setCuratorRole
                        })), s.createElement(G.Xa, null, s.createElement(G.pb, {
                            "data-test-selector": pe,
                            "data-a-target": pe,
                            label: Object(w.d)("Clips of My Channel", "ClipsManagerTable"),
                            name: "ClipsOfMyChannel",
                            checked: this.props.currentUserRole === h.Broadcaster,
                            onChange: this.setBroadcasterRole
                        }))))), s.createElement(G.P, {
                            cols: {
                                default: 12,
                                xs: 6,
                                sm: 6,
                                md: 12,
                                lg: 12
                            }
                        }, s.createElement(de, {
                            userRole: this.props.currentUserRole
                        }))))
                    }, t
                }(s.Component),
                ge = Object(b.b)("ClipsManagerRightColumn")(me),
                he = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.handleImageError = function() {
                            n.setState({
                                imageURL: w.a.defaultStreamPreviewURL
                            })
                        }, n.state = {
                            imageURL: t.imageURL
                        }, n
                    }
                    return l.__extends(t, e), t.prototype.render = function() {
                        return s.createElement("img", {
                            src: this.state.imageURL,
                            alt: this.state.imageURL,
                            onError: this.handleImageError,
                            className: this.props.className
                        })
                    }, t
                }(s.Component),
                fe = (n("kMvn"), "clips-manager-row-checkbox"),
                be = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.selectClip = function() {
                            var e = !t.props.isSelected;
                            t.props.onSelectClip(t.props.clip.slug, e)
                        }, t.onRowClick = function(e) {
                            var n = e.target;
                            null !== t.checkboxRef && n === t.checkboxRef || n.parentElement && n.parentElement.dataset.testSelector === fe || t.props.onRowClick(t.props.clip)
                        }, t.setCheckboxRef = function(e) {
                            t.checkboxRef = e
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.clip,
                            t = Object(w.i)(new Date(e.createdAt));
                        return s.createElement(G.Xa, {
                            "data-a-target": "clips-manager-table-row-container",
                            className: "clmgr-table__row",
                            display: G.X.Flex,
                            overflow: G.cb.Hidden,
                            alignItems: G.f.Center
                        }, s.createElement("div", {
                            onClick: this.onRowClick,
                            style: {
                                cursor: "pointer",
                                width: "100%"
                            }
                        }, s.createElement(G.Ja, {
                            "data-target": this.props.dataTarget
                        }, s.createElement(G.P, {
                            cols: 4
                        }, s.createElement(G.Xa, {
                            display: G.X.Flex,
                            flexWrap: G.Ba.NoWrap,
                            alignItems: G.f.Center,
                            padding: 1,
                            fullHeight: !0
                        }, s.createElement(G.Xa, {
                            flexShrink: 0,
                            position: G.jb.Relative
                        }, s.createElement(G.Eb, {
                            className: "clmgr-checkbox-bg",
                            background: G.r.Base,
                            position: G.jb.Absolute
                        }), s.createElement(G.N, {
                            refDelegate: this.setCheckboxRef,
                            "data-test-selector": fe,
                            label: " ",
                            checked: this.props.isSelected,
                            onChange: this.selectClip
                        })), s.createElement(G.Pa, {
                            flexShrink: 0,
                            margin: {
                                right: 1
                            }
                        }, s.createElement(he, {
                            imageURL: this.props.clip.thumbnailURL,
                            className: "clmgr-thumb"
                        })), s.createElement(G.W, {
                            type: G.Vb.H5,
                            title: e.title,
                            ellipsis: !0
                        }, e.title))), s.createElement(G.P, {
                            cols: 2
                        }, e.broadcaster && s.createElement(G.Xa, {
                            display: G.X.Flex,
                            alignItems: G.f.Center,
                            padding: 1,
                            fullHeight: !0
                        }, s.createElement(G.Pa, {
                            ellipsis: !0
                        }, s.createElement(G.U, {
                            to: "/" + e.broadcaster.login + "/clips",
                            title: e.broadcaster.displayName || ""
                        }, e.broadcaster.displayName)))), s.createElement(G.P, {
                            cols: 2
                        }, s.createElement(G.Xa, {
                            display: G.X.Flex,
                            alignItems: G.f.Center,
                            padding: 1,
                            fullHeight: !0
                        }, this.renderGameLink(e))), s.createElement(G.P, {
                            cols: 2
                        }, s.createElement(G.Xa, {
                            display: G.X.Flex,
                            alignItems: G.f.Center,
                            padding: 1,
                            fullHeight: !0
                        }, s.createElement(G.W, {
                            "data-test-selector": "clips-manager-row-time-created",
                            "data-a-target": "clips-manager-row-time-created",
                            title: t,
                            transform: G.Ub.Capitalize,
                            ellipsis: !0
                        }, t))), s.createElement(G.P, {
                            cols: 2
                        }, s.createElement(G.Xa, {
                            display: G.X.Flex,
                            alignItems: G.f.Center,
                            padding: 1,
                            fullHeight: !0
                        }, s.createElement(G.Xa, {
                            display: G.X.Flex,
                            alignItems: G.f.Center,
                            margin: {
                                right: .5
                            }
                        }, s.createElement(G.sb, {
                            asset: G.tb.GlyphViews
                        })), s.createElement(G.W, {
                            "data-test-selector": "clips-manager-row-view-count",
                            "data-a-target": "clips-manager-row-view-count"
                        }, Object(w.g)(e.viewCount, {
                            maximumFractionDigits: 1
                        })))))))
                    }, t.prototype.renderGameLink = function(e) {
                        return e.game ? s.createElement(G.Pa, {
                            ellipsis: !0
                        }, s.createElement(G.U, {
                            to: Object(U.c)(e.game.name),
                            title: e.game.name
                        }, e.game.name)) : null
                    }, t
                }(s.Component),
                ve = (n("II1B"), "clips-manager-select-all"),
                ke = "clips-manager-batch-delete",
                Ce = "clips-manager-views-sort",
                Se = "clips-manager-createdat-sort",
                ye = "clips-manager-empty-body",
                Ee = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.expandClipRow = function(e) {
                            n.setState({
                                expandedSlug: e.slug
                            })
                        }, n.closeExpandedRow = function() {
                            n.setState({
                                expandedSlug: null
                            })
                        }, n.loadMore = function() {
                            return l.__awaiter(n, void 0, void 0, function() {
                                return l.__generator(this, function(e) {
                                    return this.props.loading || this.props.error || !this.props.clips ? [2] : [2, this.props.loadMore().then(function() {})]
                                })
                            })
                        }, n.selectClip = function(e, t) {
                            void 0 === t && (t = !0), n.setState(function(n) {
                                var a = n.selectedClipSlugs;
                                if (t) a = a.concat([e]);
                                else {
                                    var i = a.indexOf(e);
                                    a = a.filter(function(e, t) {
                                        return t !== i
                                    })
                                }
                                return {
                                    selectedClipSlugs: a
                                }
                            })
                        }, n.toggleViewsSort = function() {
                            n.props.sort === r.ViewsDescending ? n.props.updateSort(r.ViewsAscending) : n.props.updateSort(r.ViewsDescending)
                        }, n.toggleCreatedAtSort = function() {
                            n.props.sort === r.CreatedAtDescending ? n.props.updateSort(r.CreatedAtAscending) : n.props.updateSort(r.CreatedAtDescending)
                        }, n.deleteSelectedClips = function() {
                            n.props.onBatchDeleteClips(n.state.selectedClipSlugs), n.setState({
                                selectedClipSlugs: []
                            })
                        }, n.deleteClip = function(e) {
                            n.props.onDeleteClip(e), n.selectClip(e, !1)
                        }, n.deleteAllClips = function(e) {
                            n.props.onDeleteAllClips(e)
                        }, n.toggleClipsSelection = function() {
                            var e = n.props.clips;
                            n.state.selectedClipSlugs.length === e.length ? n.clearClipsSelection() : n.setState({
                                selectedClipSlugs: e.map(function(e) {
                                    return e.slug
                                })
                            })
                        }, n.clearClipsSelection = function() {
                            n.setState({
                                selectedClipSlugs: []
                            })
                        }, n.renderDeleteClipModal = function(e) {
                            n.props.showModal(I.d, {
                                slug: e,
                                onClose: n.props.closeModal,
                                onDelete: n.props.onDeleteClip
                            })
                        }, n.renderBatchDeleteModal = function() {
                            1 === n.state.selectedClipSlugs.length ? n.renderDeleteClipModal(n.state.selectedClipSlugs[0]) : n.props.showModal(I.c, {
                                clipSlugs: n.state.selectedClipSlugs,
                                onClose: n.props.closeModal,
                                onBatchDelete: n.deleteSelectedClips
                            })
                        }, n.reportInteractive = function() {
                            !n.props.loading && n.props.userID && n.props.latencyTracking.reportInteractive()
                        }, n.state = {
                            selectedClipSlugs: [],
                            expandedSlug: null,
                            isNewQueryLoading: !1
                        }, n
                    }
                    return l.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.reportInteractive()
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        e.loading && ((e.sort !== this.props.sort || e.userRole !== this.props.userRole || e.searchFilterType !== this.props.searchFilterType || e.searchFilterTerm !== this.props.searchFilterTerm) && (this.clearClipsSelection(), this.setState({
                            isNewQueryLoading: !0
                        })));
                        this.state.isNewQueryLoading && !e.loading && this.setState({
                            isNewQueryLoading: !1
                        })
                    }, t.prototype.componentDidUpdate = function() {
                        this.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this;
                        return this.props.userID ? s.createElement(G.Xa, {
                            className: "clmgr-body-wrap",
                            display: G.X.Flex,
                            flexWrap: G.Ba.NoWrap,
                            flexDirection: G.Aa.ColumnReverse,
                            breakpointMedium: {
                                flexDirection: G.Aa.Row
                            }
                        }, s.createElement(G.Xa, {
                            className: "clmgr-table-wrap",
                            display: G.X.Flex,
                            flexGrow: 1,
                            flexWrap: G.Ba.Wrap,
                            position: G.jb.Relative
                        }, s.createElement(G.Eb, {
                            background: G.r.Base,
                            border: !0,
                            elevation: 3,
                            margin: {
                                bottom: .5
                            },
                            fullWidth: !0
                        }, this.renderHeaderRow()), s.createElement(G.Eb, {
                            fullWidth: !0,
                            fullHeight: !0
                        }, s.createElement(R.b, null, s.createElement(G.Eb, {
                            background: G.r.Base,
                            elevation: 2,
                            border: !0
                        }, this.props.clips.length > 0 && !this.state.isNewQueryLoading && this.props.clips.map(function(t) {
                            return e.renderClipRow(t)
                        }), this.state.isNewQueryLoading && this.props.loading && s.createElement(G.Xa, {
                            display: G.X.Flex,
                            alignItems: G.f.Center,
                            justifyContent: G.Wa.Center,
                            padding: 1,
                            fullWidth: !0
                        }, s.createElement(G.Za, {
                            delay: 0
                        })), 0 === this.props.clips.length && !this.props.loading && s.createElement(G.Xa, {
                            display: G.X.Flex,
                            justifyContent: G.Wa.Center,
                            textAlign: G.Rb.Center,
                            padding: 2,
                            fullWidth: !0,
                            fullHeight: !0
                        }, s.createElement(G.W, {
                            type: G.Vb.H4,
                            color: G.O.Alt2,
                            "data-test-selector": ye
                        }, Object(w.d)("Create Clips to fill this space with the most memorable moments from your favorite Twitch streams and videos. Just hit the Clip button on the video player to try it out. {learnHowLink} to use Clips.", {
                            learnHowLink: s.createElement("a", {
                                target: "_blank",
                                rel: "noopener",
                                href: "https://help.twitch.tv/customer/portal/articles/2442508-how-to-use-clips"
                            }, Object(w.d)("Learn how", "ClipsManagerTable"))
                        }, "ClipsManagerTable"))), s.createElement(R.a, {
                            loadMore: this.loadMore,
                            enabled: !this.props.loading && this.props.hasNextPage
                        }), this.props.loading && !this.state.isNewQueryLoading && s.createElement(G.Xa, {
                            display: G.X.Flex,
                            alignItems: G.f.Center,
                            justifyContent: G.Wa.Center,
                            padding: 1,
                            fullWidth: !0
                        }, s.createElement(G.Za, {
                            delay: 0
                        })))))), s.createElement(G.Xa, {
                            breakpointMedium: {
                                margin: {
                                    left: 2
                                }
                            },
                            flexShrink: 0
                        }, s.createElement(ge, {
                            updateUserRole: this.props.updateUserRole,
                            currentUserRole: this.props.userRole
                        }))) : null
                    }, t.prototype.renderHeaderRow = function() {
                        var e = this.state.selectedClipSlugs.length > 0,
                            t = e && this.state.selectedClipSlugs.length === this.props.clips.length,
                            n = s.createElement(G.N, {
                                "data-test-selector": ve,
                                label: " ",
                                checked: t,
                                onChange: this.toggleClipsSelection,
                                disabled: this.state.isNewQueryLoading && this.props.loading
                            });
                        if (e) return s.createElement(G.Ja, null, s.createElement(G.P, {
                            cols: 12
                        }, s.createElement(G.Xa, {
                            display: G.X.Flex,
                            alignItems: G.f.Center,
                            padding: {
                                x: 1,
                                y: .5
                            },
                            fullHeight: !0
                        }, s.createElement(G.Xa, {
                            margin: {
                                right: 1
                            },
                            flexShrink: 0
                        }, n), s.createElement(G.Xa, {
                            margin: {
                                right: 1
                            },
                            flexShrink: 0
                        }, s.createElement(G.W, null, Object(w.d)("{numClips, number} selected", {
                            numClips: this.state.selectedClipSlugs.length
                        }, "ClipsManagerTable"))), s.createElement(G.Xa, {
                            flexShrink: 0,
                            alignItems: G.f.Center,
                            fullHeight: !0
                        }, s.createElement(G.A, {
                            ariaLabel: Object(w.d)("Delete Clip", "ClipsManagerTable"),
                            icon: G.tb.Trash,
                            onClick: this.renderBatchDeleteModal,
                            "data-test-selector": ke
                        })))));
                        var a = this.props.sort,
                            i = a === r.ViewsAscending || a === r.ViewsDescending,
                            l = a === r.CreatedAtAscending || a === r.CreatedAtDescending,
                            o = Object(w.d)("Created", "ClipsManagerTable"),
                            c = Object(w.d)("Views", "ClipsManagerTable");
                        return s.createElement(G.Ja, null, s.createElement(G.P, {
                            cols: 4
                        }, s.createElement(G.Xa, {
                            display: G.X.Flex,
                            alignItems: G.f.Center,
                            padding: 1,
                            fullHeight: !0
                        }, s.createElement(G.Xa, {
                            display: G.X.Flex,
                            alignItems: G.f.Center,
                            margin: {
                                right: 1
                            }
                        }, n), s.createElement(G.W, null, Object(w.d)("Info", "ClipsManagerTable")))), s.createElement(G.P, {
                            cols: 2
                        }, s.createElement(G.Xa, {
                            padding: 1
                        }, Object(w.d)("Channel", "ClipsManagerTable"))), s.createElement(G.P, {
                            cols: 2
                        }, s.createElement(G.Xa, {
                            padding: 1
                        }, Object(w.d)("Game", "ClipsManagerTable"))), s.createElement(G.P, {
                            cols: 2
                        }, s.createElement(G.Xa, {
                            padding: {
                                y: .5,
                                right: 1
                            },
                            display: G.X.Flex,
                            fullHeight: !0
                        }, s.createElement(G.Ua, {
                            type: G.Va.Alpha,
                            onClick: this.toggleCreatedAtSort,
                            "data-test-selector": Se,
                            "data-a-target": Se
                        }, s.createElement(G.Xa, {
                            display: G.X.Flex,
                            flexWrap: G.Ba.NoWrap,
                            alignContent: G.e.Center,
                            justifyContent: G.Wa.Between,
                            padding: {
                                x: 1
                            }
                        }, s.createElement(G.W, {
                            color: G.O.Link,
                            title: o,
                            bold: !0,
                            ellipsis: !0
                        }, o), l && s.createElement(G.sb, {
                            asset: a === r.CreatedAtDescending ? G.tb.GlyphArrDown : G.tb.GlyphArrUp,
                            type: G.ub.Brand
                        }))))), s.createElement(G.P, {
                            cols: 2
                        }, s.createElement(G.Xa, {
                            padding: {
                                y: .5,
                                right: 1
                            },
                            display: G.X.Flex,
                            fullHeight: !0
                        }, s.createElement(G.Ua, {
                            type: G.Va.Alpha,
                            onClick: this.toggleViewsSort,
                            "data-test-selector": Ce,
                            "data-a-target": Ce
                        }, s.createElement(G.Xa, {
                            display: G.X.Flex,
                            flexWrap: G.Ba.NoWrap,
                            alignContent: G.e.Center,
                            justifyContent: G.Wa.Between,
                            padding: {
                                x: 1
                            }
                        }, s.createElement(G.W, {
                            color: G.O.Link,
                            title: c,
                            bold: !0,
                            ellipsis: !0
                        }, c), i && s.createElement(G.sb, {
                            asset: a === r.ViewsDescending ? G.tb.GlyphArrDown : G.tb.GlyphArrUp,
                            type: G.ub.Brand
                        }))))))
                    }, t.prototype.renderClipRow = function(e) {
                        var t = this.state.selectedClipSlugs.includes(e.slug);
                        if (e.slug === this.state.expandedSlug) {
                            var n = this.props.userRole === h.Curator ? x.a.MyClips : x.a.ClipsOfMyChannel;
                            return s.createElement(ee, {
                                key: e.slug,
                                dataTarget: "clips-manager-table-row",
                                clip: e,
                                onClose: this.closeExpandedRow,
                                onDelete: this.deleteClip,
                                onDeleteAll: this.deleteAllClips,
                                pageType: n
                            })
                        }
                        return s.createElement(be, {
                            key: e.slug,
                            dataTarget: "clips-manager-table-row",
                            clip: e,
                            isSelected: t,
                            onSelectClip: this.selectClip,
                            onRowClick: this.expandClipRow
                        })
                    }, t
                }(s.Component),
                we = n("a+SD");
            var Ne = Object(o.compose)(Object(b.b)("ClipsManagerTable"), Object(T.a)(we, {
                    options: function(e) {
                        var t = {
                            sort: g[e.sort],
                            period: f[m.All]
                        };
                        return e.userRole === h.Broadcaster ? t.broadcasterID = e.channelID : t.curatorID = e.channelID, e.searchFilterTerm && (e.searchFilterType === D.a.Users && e.userRole !== h.Broadcaster ? t.broadcasterID = e.searchFilterTerm : t.gameName = e.searchFilterTerm), {
                            variables: {
                                login: e.channelName,
                                limit: 20,
                                criteria: t
                            },
                            notifyOnNetworkStatusChange: !0
                        }
                    },
                    props: function(e) {
                        var t = [],
                            n = "",
                            a = !1;
                        return e.data.user && e.data.user.clips && (n = e.data.user.id, t = e.data.user.clips.edges.map(function(e) {
                            return e.node
                        }), a = e.data.user.clips.pageInfo.hasNextPage), {
                            userID: n,
                            clips: t,
                            loading: e.data.loading,
                            hasNextPage: a,
                            error: e.data.error,
                            loadMore: function() {
                                var t = e.data.user.clips.edges,
                                    n = t[t.length - 1].cursor;
                                return e.data.fetchMore({
                                    variables: l.__assign({}, e.data.variables, {
                                        cursor: n
                                    }),
                                    updateQuery: function(e, t) {
                                        var n = t.fetchMoreResult,
                                            a = e.user.clips.edges,
                                            i = n.user.clips.edges;
                                        return {
                                            user: l.__assign({}, n.user, {
                                                clips: l.__assign({}, n.user.clips, {
                                                    edges: Object(O.c)(a, i)
                                                })
                                            })
                                        }
                                    }
                                })
                            },
                            onDeleteClip: function(t) {
                                Object(O.e)(we, e.data.variables, function(e) {
                                    var n = e.user.clips.edges;
                                    return e.user.clips.edges = n.filter(function(e) {
                                        return e.node.slug !== t
                                    }), e
                                })
                            },
                            onDeleteAllClips: function(t) {
                                Object(O.e)(we, e.data.variables, function(e) {
                                    var n = e.user.clips.edges;
                                    return e.user.clips.edges = n.filter(function(e) {
                                        var n = e.node.slug;
                                        return !t.some(function(e) {
                                            return e === n
                                        })
                                    }), e
                                })
                            },
                            onBatchDeleteClips: function(t) {
                                Object(O.e)(we, e.data.variables, function(e) {
                                    var n = e.user.clips.edges;
                                    return e.user.clips.edges = n.filter(function(e) {
                                        var n = e.node.slug;
                                        return !t.includes(n)
                                    }), e
                                })
                            }
                        }
                    }
                }), Object(v.connect)(null, function(e) {
                    return Object(k.bindActionCreators)({
                        showModal: _.d,
                        closeModal: _.c
                    }, e)
                }))(Ee),
                Te = n("Y9ZL"),
                De = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.getChildContext = function() {
                            return {
                                setSearchTerm: n.setSearchTerm,
                                setSearchType: n.setSearchType,
                                clearSearch: n.clearSearch
                            }
                        }, n.setSortOption = function(e) {
                            n.setState({
                                sortOption: e
                            })
                        }, n.setSearchTerm = function(e) {
                            n.setState({
                                searchTerm: e
                            })
                        }, n.setSearchType = function(e) {
                            e !== n.state.searchType && n.setState({
                                searchType: e,
                                searchTerm: null
                            })
                        }, n.clearSearch = function() {
                            n.setState({
                                searchTerm: null
                            })
                        }, n.setUserRole = function(e) {
                            e !== n.state.userRole && (n.setState({
                                userRole: e,
                                searchTerm: null
                            }), n.props.onRoleChange(e))
                        }, n.reportInteractive = function() {
                            var e = n.props.data;
                            e && !e.loading && e.currentUser && n.props.latencyTracking.reportInteractive()
                        }, n.state = {
                            userRole: t.role,
                            sortOption: r.CreatedAtDescending,
                            searchType: D.a.Games,
                            searchTerm: null
                        }, n
                    }
                    return l.__extends(t, e), t.prototype.componentWillMount = function() {
                        this.props.isLoggedIn || this.props.login()
                    }, t.prototype.componentDidMount = function() {
                        this.setPageTitle(), this.reportInteractive()
                    }, t.prototype.componentDidUpdate = function(e) {
                        this.reportInteractive(), e.data.loading && !this.props.data.loading && this.setPageTitle()
                    }, t.prototype.render = function() {
                        return this.props.data.loading || this.props.data.error || !this.props.data.currentUser ? null : this.props.data.currentUser.login.toLowerCase() !== this.props.channelName.toLowerCase() ? s.createElement(N.a, {
                            message: Object(w.d)("Access Denied: you don't have access to these videos", "ClipsManagerPage")
                        }) : s.createElement(G.Xa, {
                            className: "scroll-y",
                            padding: {
                                x: 3,
                                top: 3
                            },
                            fullHeight: !0
                        }, s.createElement(Ne, {
                            channelName: this.props.data.currentUser.login,
                            channelID: this.props.data.currentUser.id,
                            sort: this.state.sortOption,
                            updateSort: this.setSortOption,
                            userRole: this.state.userRole,
                            updateUserRole: this.setUserRole,
                            searchFilterTerm: this.state.searchTerm,
                            searchFilterType: this.state.searchType
                        }))
                    }, t.prototype.setPageTitle = function() {
                        if (this.props.data.currentUser) {
                            var e = this.props.data.currentUser.displayName;
                            w.p.setPageTitle(Object(w.d)("{ownerDisplayName} - Clips Manager", {
                                ownerDisplayName: e
                            }, "ClipsManagerPage"))
                        }
                    }, t.childContextTypes = {
                        setSearchTerm: E.func,
                        setSearchType: E.func,
                        clearSearch: E.func
                    }, t
                }(s.Component),
                Oe = Object(o.compose)(Object(b.b)("ClipsManager"), Object(T.a)(Te), c.a)(De);
            var _e = Object(v.connect)(function(e) {
                return {
                    isLoggedIn: Object(y.f)(e)
                }
            }, function(e) {
                return Object(k.bindActionCreators)({
                    login: function() {
                        return Object(S.e)(C.a.ClipsManager)
                    }
                }, e)
            })(Oe);

            function Re(e, t) {
                return t === h.Curator ? "/" + e + "/manager/clips" : "/" + e + "/manager/clips/channel"
            }
            var Ie = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onRoleChange = function(e) {
                            e !== h.Broadcaster && t.props.history.push({
                                pathname: Re(t.props.match.params.channelName, e)
                            })
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.render = function() {
                        return s.createElement(_e, {
                            channelName: this.props.match.params.channelName,
                            role: h.Broadcaster,
                            onRoleChange: this.onRoleChange
                        })
                    }, t
                }(s.Component),
                xe = Object(o.compose)(Object(b.b)("ClipsOfMeManagerPage", {
                    destination: u.a.ChannelClipsManager
                }), Object(d.a)({
                    location: p.PageviewLocation.ChannelClipsManager,
                    properties: {
                        is_live: !1
                    }
                }), c.a)(Ie),
                Me = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onRoleChange = function(e) {
                            e !== h.Curator && t.props.history.push({
                                pathname: Re(t.props.match.params.channelName, e)
                            })
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.render = function() {
                        return s.createElement(_e, {
                            channelName: this.props.match.params.channelName,
                            role: h.Curator,
                            onRoleChange: this.onRoleChange
                        })
                    }, t
                }(s.Component),
                Fe = Object(o.compose)(Object(b.b)("MyClipsManagerPage", {
                    autoReportInteractive: !0,
                    destination: u.a.MyClipsManager
                }), Object(d.a)({
                    location: p.PageviewLocation.MyClipsManager,
                    properties: {
                        is_live: !1
                    }
                }), c.a)(Me);
            n.d(t, "ChannelClipsManagerPage", function() {
                return xe
            }), n.d(t, "MyClipsManagerPage", function() {
                return Fe
            })
        },
        r62z: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            }), n.d(t, "c", function() {
                return c
            }), n.d(t, "b", function() {
                return d
            }), n.d(t, "d", function() {
                return u
            });
            var a = n("+GjP"),
                i = "https://www.facebook.com/sharer/sharer.php",
                r = "https://www.twitter.com/share",
                l = "https://www.reddit.com/submit",
                s = "https://vk.com/share.php";

            function o(e) {
                return Object(a.e)(i, {
                    u: e
                })
            }

            function c(e, t) {
                return Object(a.e)(r, {
                    url: e,
                    text: t
                })
            }

            function d(e, t) {
                return Object(a.e)(l, {
                    url: e,
                    title: t
                })
            }

            function u(e) {
                return Object(a.e)(s, {
                    url: e
                })
            }
        },
        roU9: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            }), n.d(t, "b", function() {
                return i
            });
            var a = "//static-cdn.jtvnw.net/ttv-boxart",
                i = "52x72"
        },
        rwoo: function(e, t, n) {
            "use strict";
            var a;
            n.d(t, "a", function() {
                    return a
                }),
                function(e) {
                    e.ChannelNotLive = "channel_not_live", e.UserBanned = "user_banned", e.UserTimedOut = "user_timed_out", e.ChannelBanned = "channel_banned", e.ChannelNotClippable = "channel_not_clippable", e.NotLoggedIn = "not_logged_in", e.VideoNotAvailable = "video_not_available", e.SubOnlyVod = "video_subonly", e.ClipMissing = "clip_missing", e.ClipMaintenance = "maintenance", e.Default = "500"
                }(a || (a = {}))
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
        wC0O: function(e, t, n) {},
        wbMx: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return a
            }), n.d(t, "a", function() {
                return d
            });
            var a, i = n("mrSG"),
                r = n("q1tI"),
                l = n("/7QA"),
                s = n("Jxh/"),
                o = n("r62z"),
                c = n("Ue10");
            n("jeZI");
            ! function(e) {
                e[e.Twitter = 0] = "Twitter", e[e.Reddit = 1] = "Reddit", e[e.VKontakte = 2] = "VKontakte", e[e.Facebook = 3] = "Facebook", e[e.Copy = 4] = "Copy", e[e.CopyInput = 5] = "CopyInput", e[e.Download = 6] = "Download"
            }(a || (a = {}));
            var d = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.renderLink = function() {
                        var e = "social-button__link " + n.addSocialClassModifier("social-button__link");
                        return n.props.type === a.Download ? r.createElement("a", i.__assign({
                            href: n.props.url,
                            target: "_blank",
                            className: e,
                            onClick: n.onShareClickHandler
                        }, Object(c.jc)(n.props), {
                            download: n.props.text
                        }), n.renderIcon()) : n.isLink() ? r.createElement("a", i.__assign({
                            href: n.getLinkTarget(),
                            target: "_blank",
                            className: e,
                            onClick: n.onShareClickHandler
                        }, Object(c.jc)(n.props)), n.renderIcon()) : r.createElement("button", i.__assign({
                            onClick: n.copyPageUrl,
                            onMouseLeave: n.clearIsCopiedStatus,
                            className: e
                        }, Object(c.jc)(n.props)), n.renderIcon())
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
                        return r.createElement(c.Xa, {
                            className: "social-button__icon " + n.addSocialClassModifier("social-button__icon"),
                            display: c.X.Flex,
                            alignItems: c.f.Center,
                            justifyContent: c.Wa.Center
                        }, r.createElement(c.sb, {
                            asset: e
                        }))
                    }, n.isLink = function() {
                        return n.props.type !== a.Copy
                    }, n.getTooltipFromType = function() {
                        switch (n.props.type) {
                            case a.Twitter:
                                return "Twitter";
                            case a.Reddit:
                                return "Reddit";
                            case a.Facebook:
                                return "Facebook";
                            case a.VKontakte:
                                return "VKontakte";
                            case a.Download:
                                return Object(l.d)("Download", "SocialButton");
                            case a.Copy:
                                return n.state.isCopied ? Object(l.d)("Copied", "SocialButton") : Object(l.d)("Copy to clipboard", "SocialButton");
                            default:
                                return ""
                        }
                    }, n.getAssetFromType = function() {
                        switch (n.props.type) {
                            case a.Twitter:
                                return c.tb.Twitter;
                            case a.Facebook:
                                return c.tb.Facebook;
                            case a.VKontakte:
                                return c.tb.VKontakte;
                            case a.Reddit:
                                return c.tb.Reddit;
                            case a.Download:
                                return c.tb.Download;
                            case a.Copy:
                            default:
                                return c.tb.Copy
                        }
                    }, n.addSocialClassModifier = function(e) {
                        switch (n.props.type) {
                            case a.Twitter:
                                return e + "--twitter";
                            case a.Reddit:
                                return e + "--reddit";
                            case a.Facebook:
                                return e + "--facebook";
                            case a.VKontakte:
                                return e + "--vkontakte";
                            case a.Download:
                                return e + "--download";
                            case a.Copy:
                                return e + "--copy";
                            default:
                                return ""
                        }
                    }, n.getLinkTarget = function() {
                        var e = n.props,
                            t = e.text,
                            i = e.type,
                            r = n.getUrl(),
                            l = t || "";
                        switch (i) {
                            case a.Reddit:
                                return Object(o.b)(r, l);
                            case a.VKontakte:
                                return Object(o.d)(r);
                            case a.Facebook:
                                return Object(o.a)(r);
                            case a.Twitter:
                                return Object(o.c)(r, l);
                            default:
                                return ""
                        }
                    }, n.state = {
                        isCopied: !1
                    }, n
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(c.Xa, {
                        className: "social-button"
                    }, r.createElement(c.Yb, {
                        label: this.getTooltipFromType(),
                        direction: c.ac.Bottom
                    }, this.renderLink()))
                }, t
            }(r.Component)
        }
    }
]);